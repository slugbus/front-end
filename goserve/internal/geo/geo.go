package geo

import (
	"math"
)

// Speed returns the speed of a bus in mph
// where d is in miles and t is in milli
func Speed(d float64, t float64) float64 {

	seconds := t / 1000
	hours := seconds / 60 / 60

	return d / hours
}

// Dir gives direction relative
func Dir(lat1, long1, lat2, long2 float64) float64 {
	top := math.Log(math.Tan((lat2 / 2) + (math.Pi / 4)))
	bottom := math.Log(math.Tan((lat1 / 2) + (math.Pi / 4)))
	dTeta := top - bottom

	dLong := math.Abs(long1 - long2)
	teta := math.Atan2(dLong, dTeta)

	return math.Round((180 / math.Pi) * teta)
}

// Dist returns distance traveled in miles
func Dist(lat1, long1, lat2, long2 float64) float64 {
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

// MapQuad returns the quadrant of a given lat and long coordinate
func MapQuad(Lat, Long float64) Quad {
	// if in the upper left of campus return Quad 1
	if Lat < CenterLat && Long < CenterLong {
		return Q1
	}
	// if in the upper right of campus return Quad 2
	if Lat > CenterLat && Long < CenterLong {
		return Q2
	}
	// if in the bottom right of campus return Qaud 3
	if Lat > CenterLat && Long > CenterLong {
		return Q3
	}
	// if in the bottom left return Quad4
	return Q4
}

func GetDistance(start, end int, distances []float64) float64 {
	dist := 0.0
	for start != end {
		dist += distances[start]
		start += (1 + len(distances)) % len(distances)
	}
	return dist
}
