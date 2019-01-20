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

// TODO: REFACTOR
func init() {

	arrOfBuses := []*SlugResponse{}

	count := 0
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

	if len(arrOfBuses) != 2 {
		log.Printf("wanted 2 data points got %d data points", len(arrOfBuses))
		return
	}

	CurrentBusState = mergeUpdate(arrOfBuses[0], arrOfBuses[1], float64(deltaT))
	log.Printf("Started Initial state: %+v\n", CurrentBusState)

	go func() {
		for range time.Tick(time.Duration(deltaT) * time.Millisecond) {

			now := time.Now().Unix()
			// Before we do anything send some data to firebase
			_, err := database.Client.Collection("bus_states").Doc(fmt.Sprintf("%d", now)).Set(context.Background(), map[string]interface{}{
				"time":  now,
				"buses": CurrentBusState,
			})

			if err != nil {
				log.Println("could not push to db", err)
			}

			newPing, err := GetBus()
			if err != nil {
				log.Println("could not get bus data: ", err)
				continue
			}
			CurrentBusState = mergeWithState(newPing, float64(deltaT))
			log.Printf("Updated state: %+v\n", CurrentBusState)
		}
	}()
}
