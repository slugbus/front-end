package bus

import (
	"busplusplus/internal/database"
	"context"
	"fmt"
	"log"
	"time"
)

// This var controls how frequently
// we ping taps
var deltaT = 3000

// CurrentBusState is the current
// the state of the buses.
var CurrentBusState SlugResponsePlusPlus

func init() {
	// Make an array of responses
	arrOfBuses := []*SlugResponse{}
	// Keep a count
	count := 0
	// Ping the server twice over the course of deltaT ms
	for range time.Tick(time.Duration(deltaT) * time.Millisecond) {
		if count == 2 {
			break
		}
		bus, err := GetBus()
		if err != nil {
			log.Printf("could not get bus info: %v\n", err)
			return
		}
		arrOfBuses = append(arrOfBuses, bus)
		count++
	}

	// Check to see if we did get two pings
	if len(arrOfBuses) != 2 {
		log.Printf("wanted 2 data points got %d data points", len(arrOfBuses))
		return
	}
	// If we did get two pings merge these data points to prodcue more information
	// from them.
	CurrentBusState = mergeUpdate(arrOfBuses[0], arrOfBuses[1], float64(deltaT))
	log.Printf("Started Initial state: %+v\n", CurrentBusState)

	// Start update the state asynchronously
	go asyncUpdate()
}

// Async update updates
// the state of the server asynchronously
func asyncUpdate() {
	for range time.Tick(time.Duration(deltaT) * time.Millisecond) {
		// Before we do anything send some data to firebase
		// for stats and analysis later
		updateDB()

		// Otherwise ping the server again
		newPing, err := GetBus()
		if err != nil {
			log.Println("could not get bus data: ", err)
			continue
		}
		// and merge its state with our current state.
		CurrentBusState = mergeWithState(newPing, float64(deltaT))
		log.Printf("Updated state: %+v\n", CurrentBusState)
	}
}

func updateDB() {
	now := time.Now().Unix()
	_, err := database.Client.Collection("bus_states").Doc(fmt.Sprintf("%d", now)).Set(context.Background(), map[string]interface{}{
		"time":  now,
		"buses": CurrentBusState,
	})
	if err != nil {
		log.Println("could not push to db", err)
	}
}

// DRtoSRPP turns DummyResponse
// into a SlugResponsePP
func DRtoSRPP(dr database.DummyResponse) SlugResponsePlusPlus {
	conversion := SlugResponsePlusPlus{}
	for _, buses := range dr.Buses {
		simpleConvertedBus := Data{
			ID:   buses.ID,
			Lat:  buses.Lat,
			Lon:  buses.Lon,
			Type: buses.Type,
		}
		convertedBus := DataPlusPlus{
			Angle: buses.Angle,
			Data:  simpleConvertedBus,
			Speed: buses.Speed,
		}
		conversion = append(conversion, convertedBus)
	}
	return conversion
}
