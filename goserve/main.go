package main

import (
	"busplusplus/internal/bus"
	"context"
	"encoding/json"
	"flag"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gorilla/mux"
)

func testGet(w http.ResponseWriter, r *http.Request) {

	// Get the data
	buses, err := bus.GetBus()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("could not write data: %v\n", err)
		return
	}

	// Write the heades
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	// Decode the data.
	rawBytes, err := json.Marshal(buses)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("could not marshal data: %v\n", err)
		return
	}

	// Write the data to the client.
	_, err = w.Write(rawBytes)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("could not write data: %v\n", err)
		return
	}

}

func giveData(w http.ResponseWriter, r *http.Request) {
	data, err := json.Marshal(bus.CurrentBusState)
	if err != nil {
		log.Println(err)
		return
	}
	w.Header().Set("Content-Type", "application/json")

	w.Write(data)
}

func main() {
	var wait time.Duration
	flag.DurationVar(&wait, "graceful-timeout", time.Second*15, "the duration for which the server gracefully wait for existing connections to finish - e.g. 15s or 1m")
	flag.Parse()

	r := mux.NewRouter()
	r.HandleFunc("/api/test_get", testGet).Methods("GET")
	r.HandleFunc("/api/get_buses", giveData).Methods("GET")

	srv := &http.Server{
		Addr: "localhost:8080",
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      r, // Pass our instance of gorilla/mux in.
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		if err := srv.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	c := make(chan os.Signal, 1)
	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	os.Exit(0)
}
