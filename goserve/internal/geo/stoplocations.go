package geo

var InnerDistances = []float64{}
var OuterDistances = []float64{}

type Quad int

type BusStop struct {
	Name      string
	Lat, Long float64
	Q         Quad
}

const (
	Q1 Quad = iota + 1
	Q2
	Q3
	Q4
)

const (
	CenterLat  = 36.99250
	CenterLong = -122.060569
)
