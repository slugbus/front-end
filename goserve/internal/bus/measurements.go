package bus

import (
	"busplusplus/internal/database"
	"busplusplus/internal/geo"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// GetDistanceBusToStop is used to calculate the distance to the closest
// bus stop to a given bus
func GetDistanceBusToStop(BusID string) geo.BusStop {
	// search for the bus object in SlugResponsePlusPlus
	CurrentBus := DataPlusPlus{}

	for _, BusObj := range CurrentBusState {
		if BusObj.ID == BusID {
			CurrentBus = BusObj
			break
		}

	}

	Quadrant := geo.MapQuad(CurrentBus.Lat, CurrentBus.Data.Lon)
	InQuadHash := map[geo.BusStop]float64{}
	minHash := 1234567890.0

	if CurrentBus.Angle >= 180 {
		for _, CounterClock := range geo.OuterStops {
			if CounterClock.Quad == Quadrant {
				InQuadHash[CounterClock] = geo.Dist(CurrentBus.Data.Lat, CurrentBus.Data.Lon, CounterClock.Lat, CounterClock.Long)
			}
		}
		for _, v := range InQuadHash {
			if v < minHash {
				minHash = v
			}
		}

		for k, v := range InQuadHash {
			if v == minHash {
				return k
			}
		}

	} else {
		for _, ClockWise := range geo.InnerStops {
			if ClockWise.Quad == Quadrant {
				InQuadHash[ClockWise] = geo.Dist(CurrentBus.Data.Lat, CurrentBus.Data.Lon, ClockWise.Lat, ClockWise.Long)
			}
		}
		for _, z := range InQuadHash {
			if z < minHash {
				minHash = z
			}
		}

		for x, y := range InQuadHash {
			if y == minHash {
				return x
			}
		}
	}

	return geo.BusStop{}
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

func updateViaDummyBus() {
	response, err := http.Get("http://35.184.180.21:8080/")
	if err != nil {
		log.Println(err)
		return
	}
	defer response.Body.Close()
	data, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Println(err)
		return
	}
	dr := database.DummyResponse{}
	if err := json.Unmarshal(data, &dr); err != nil {
		log.Println(err)
		return
	}
	CurrentBusState = DRtoSRPP(dr)
}
