package util

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// type Direction int

// const (
// 	North Direction = iota
// 	NorthEast
// 	NorthWest
// 	South
// 	SouthEast
// 	SouthWest
// 	East
// 	West
// )

// BusData is a structure that
// contains the json response
// from the ucsc taps server.
type BusData struct {
	ID   string  `json:"id"`
	Lon  float64 `json:"lon"`
	Lat  float64 `json:"lat"`
	Type string  `json:"type"`
}

type BusDataPlusPlus struct {
	BusData
	Speed       float64 `json:"speed"`
	ISClockwise bool    `json:"isclockwise"`
}

// SlugResponse is a collection
// of BusData
type SlugResponse []BusData

// GetBus calls the ucsc server
// and returns a SlugResponse
func GetBus() (*SlugResponse, error) {

	// Make a get request to the ucsc serveer
	response, err := http.Get("http://bts.ucsc.edu:8081/location/get")

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
