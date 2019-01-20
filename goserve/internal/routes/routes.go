package routes

import (
	"busplusplus/internal/bus"
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"time"
)

// HeatData is a structure that
// that represents how packed
// a bus stop is
type HeatData struct {
	Timestamp int64 `json:"timestamp"`
	ID        int   `json:"id"`
	N         int   `json:"n"`
}

// TestGet is a http Handler that returns the response from
// bus.GetBus
func TestGet(w http.ResponseWriter, r *http.Request) {
	// Get the data
	buses, err := bus.GetBus()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("could not write data: %v\n", err)
		return
	}

	// Write the headers
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

// GivePlusPlusData returns the result from Test_Get along
// with a speed and angle.
func GivePlusPlusData(w http.ResponseWriter, r *http.Request) {
	// Marhall the current state of the busses.
	data, err := json.Marshal(bus.CurrentBusState)
	if err != nil {
		log.Println(err)
		return
	}

	// Write the data
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

// SendBusiness takes in one form values and
// returns how busy it is.
// TODO: Remove dummy data from this function.
func SendBusiness(w http.ResponseWriter, r *http.Request) {

	// For right now we'll just send some quick json
	sample := rand.NormFloat64()*5 + 10
	// Get the form value
	id := r.FormValue("id")
	// Convert it to an int
	num, err := strconv.Atoi(id)
	if err != nil {
		return
	}
	// Make the data
	data := HeatData{
		Timestamp: time.Now().Unix(),
		ID:        num,
		N:         int(sample),
	}

	// Marshall it.
	rData, err := json.Marshal(data)
	if err != nil {
		log.Println(err)
		return
	}

	// Write it
	w.Header().Set("Content-Type", "application/json")
	w.Write(rData)
}
