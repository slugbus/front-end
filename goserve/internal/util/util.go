package util

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
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
	Speed float64 `json:"speed"`
	Angle float64 `json:"angle"`
}

func getDir(lat1, long1, lat2, long2 float64) float64 {
	top := math.Log(math.Tan((lat2 / 2) + (math.Pi / 4)))
	bottom := math.Log(math.Tan((lat1 / 2) + (math.Pi / 4)))
	dTeta := top - bottom

	dLong := math.Abs(long1 - long2)
	teta := math.Atan2(dLong, dTeta)

	return math.Round((180 / math.Pi) * teta)
}

func getDistlat1, long1, lat2, long2 float64) float64 {
	lat1 = lat1 * math.Pi / 180
	long1 = long1 * math.Pi / 180

	lat2 = lat2 * math.Pi / 180
	long2 = long2 * math.Pi / 180

	dlon := long2 - long1
	dlat := lat2 - lat1

	a := math.Pow(math.Sin(dlat/2), 2) + math.Cos(lat1)*math.Cos(lat2)*math.Pow(math.Sin(dlon/2), 2)
	c := 2 * math.Asin(math.Sqrt(a))

	r := float64(6371)

	kilo := c * r
	miles := kilo * 0.621371

	return miles
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
