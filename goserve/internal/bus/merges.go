package bus

import "busplusplus/internal/geo"

// This function merges a new ping response with the current
// response
func mergeWithState(p *SlugResponse, t float64) SlugResponsePlusPlus {
	pingHash := map[string]Data{}
	stateHash := map[string]DataPlusPlus{}

	// Hash the buses from the
	// old and current state into
	// their own tables
	for _, bus := range *p {
		pingHash[bus.ID] = bus
	}
	for _, bus := range CurrentBusState {
		stateHash[bus.ID] = bus
	}

	// Prepare the new state.
	ns := SlugResponsePlusPlus{}

	for key, pingBus := range pingHash {
		// Prepare the struct
		dataPoint := DataPlusPlus{
			Data: pingBus,
		}
		// Check to see if the bus we're looking
		// at was in our previous state, if it was
		// update it with speed and angle values
		if stateBus, isInState := stateHash[key]; isInState {
			distance := geo.Dist(stateBus.Lat, stateBus.Lon, pingBus.Lat, pingBus.Lon)
			dataPoint.Speed = geo.Speed(distance, t)
			dataPoint.Angle = geo.Dir(stateBus.Lat, stateBus.Lon, pingBus.Lat, pingBus.Lon)
		}

		// Always push the new bus into the new state
		ns = append(ns, dataPoint)
	}

	return ns
}

// Merge update takes in two regular responses from the server
// and t (that is in milliseconds) and combines them to get speed
// and angle data.
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
