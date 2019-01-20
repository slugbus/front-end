package bus

// Data is a structure that
// contains the json response
// from the ucsc taps server.
type Data struct {
	ID   string  `json:"id"`
	Lon  float64 `json:"lng"`
	Lat  float64 `json:"lat"`
	Type string  `json:"type"`
}

// SlugResponse is a collection
// of BusData
type SlugResponse []Data

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
