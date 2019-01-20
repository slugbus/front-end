package bus

import (
	"busplusplus/internal/database"
	"busplusplus/internal/geo"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

// CurrentBusState is the current
// the state of the buses.
var CurrentBusState SlugResponsePlusPlus

// Data is a structure that
// contains the json response
// from the ucsc taps server.
type Data struct {
	ID   string  `json:"id"`
	Lon  float64 `json:"lng"`
	Lat  float64 `json:"lat"`
	Type string  `json:"type"`
}

// DataPlusPlus is a structure that
// contains data from Bus but with more
// info
type DataPlusPlus struct {
	Data
	Speed float64 `json:"speed"`
	Angle float64 `json:"angle"`
}

// SlugResponsePlusPlus is a collection of
// of BusDataPlusPlus
type SlugResponsePlusPlus []DataPlusPlus

// SlugResponse is a collection
// of BusData
type SlugResponse []Data

func mergeWithState(p *SlugResponse, t float64) SlugResponsePlusPlus {

	pingHash := map[string]Data{}
	stateHash := map[string]DataPlusPlus{}

	for _, bus := range *p {
		pingHash[bus.ID] = bus
	}
	for _, bus := range CurrentBusState {
		stateHash[bus.ID] = bus
	}

	ns := SlugResponsePlusPlus{}

	for key, pingBus := range pingHash {

		dataPoint := DataPlusPlus{
			Data: pingBus,
		}

		stateBus, isInState := stateHash[key]

		if isInState {
			distance := geo.Dist(stateBus.Lat, stateBus.Lon, pingBus.Lat, pingBus.Lon)
			dataPoint.Speed = geo.Speed(distance, t)
			dataPoint.Angle = geo.Dir(stateBus.Lat, stateBus.Lon, pingBus.Lat, pingBus.Lon)
		}

		ns = append(ns, dataPoint)
	}

	return ns
}

func mergeUpdate(p, q *SlugResponse, t float64) SlugResponsePlusPlus {
	// Make of map of strings
	// to buses
	mb := map[string]Data{}

	// Loop through first
	// ping
	for _, bus := range *p {
		// Map the bus ID to the
		// bus datastructure
		mb[bus.ID] = bus
	}

	// Prepare a result
	result := SlugResponsePlusPlus{}

	// Loop through the second ping
	for _, pingTwoBus := range *q {
		// Make a bus with angles and speed
		d := DataPlusPlus{}
		// Add the buses' data to the bus++?
		d.Data = pingTwoBus

		// Check if the current bus exists in ping one
		if pingOneBus, contains := mb[d.ID]; contains {
			// If it does, calculate its distance, speed , and angle
			distance := geo.Dist(pingOneBus.Lat, pingOneBus.Lon, pingTwoBus.Lat, pingTwoBus.Lon)
			d.Speed = geo.Speed(distance, t)
			d.Angle = geo.Dir(pingOneBus.Lat, pingOneBus.Lon, pingTwoBus.Lat, pingTwoBus.Lon)
		}

		// push the bus to the result
		result = append(result, d)
	}

	return result
}

func init() {

	arrOfBuses := []*SlugResponse{}

	count := 0
	for range time.Tick(3000 * time.Millisecond) {
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

	CurrentBusState = mergeUpdate(arrOfBuses[0], arrOfBuses[1], 3000)
	log.Printf("Started Initial state: %+v\n", CurrentBusState)

	go func() {
		for range time.Tick(3000 * time.Millisecond) {

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
			CurrentBusState = mergeWithState(newPing, 3000)
			log.Printf("Updated state: %+v\n", CurrentBusState)
		}
	}()
}

// GetBus calls the ucsc server
// and returns a SlugResponse
func GetBus() (*SlugResponse, error) {

	// Make a get request to the ucsc serveer
	response, err := http.Get("http://bts.ucsc.edu:8081/location/get")
	// response, err := http.Get("http://localhost:6969")

	// Check for errs
	if err != nil {
		return nil, fmt.Errorf("could not make request %v", err)
	}

	// Remember to close the body.
	defer response.Body.Close()

	// Read the body.
	rawJSONdata, err := ioutil.ReadAll(response.Body)

	// Check for errors.
	if err != nil {
		return nil, fmt.Errorf("could not read data: %v", err)
	}

	// Init a response
	jsonData := SlugResponse{}

	// Parse the json.
	err = json.Unmarshal(rawJSONdata, &jsonData)

	// Check for errors
	if err != nil {
		return nil, fmt.Errorf("could not parse json: %v", err)
	}

	return &jsonData, nil
}
