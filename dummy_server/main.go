package main

import (
	"context"
	"dummy-server/database"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"

	"google.golang.org/api/iterator"
)

// AllBusData holds all the information in the database.
var AllBusData = []map[string]interface{}{}
var AllDataLength int
var I = 0

func handleQueryAll(w http.ResponseWriter, r *http.Request) {

	dataToMarshal := AllBusData[I]
	bytes, err := json.Marshal(dataToMarshal)
	if err != nil {
		log.Fatalln(err)
	}

	// Set the application type.
	w.Header().Set("Content-Type", "application/json")
	// Write the info
	w.Write(bytes)

	// Increment I.
	I = (I + 1 + AllDataLength) % AllDataLength
}

func main() {
	// Get all the bus information
	// Ping the database by initint the database package
	iter := database.Client.Collection("bus_states").Documents(context.Background())
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		AllBusData = append(AllBusData, doc.Data())
	}
	AllDataLength = len(AllBusData)
	fmt.Println("LENGTH:", AllDataLength)

	// Grab the addess/port to bind to.
	addr := flag.String("a", "0.0.0.0:8080", "the address/port to bind to")
	flag.Parse()

	// Make a multiplexer for http, the default one is fine.
	router := http.NewServeMux()

	// Add some routes to it
	router.HandleFunc("/api/query-bus-state", handleQueryAll)

	// Start the server.
	log.Println("Starting server on:", *addr)
	http.ListenAndServe(*addr, router)
}
