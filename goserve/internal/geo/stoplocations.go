package geo

type BusStop struct {
	Name       string
	Lat, Long  float64
	ID         int
	DistToNext float64
	IsInner    bool
}

var OuterStops = []BusStop{
	BusStop{
		Name:    "West Remote Parking Lot",
		Lat:     36.988537,
		Long:    -122.064799,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "East Remote Parking Lot",
		Lat:     36.990786,
		Long:    -122.052190,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Kresge College",
		Lat:     36.9992790222168,
		Long:    -122.064552307129,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "McLaughlin & Science Hill",
		Lat:     37.0000228881836,
		Long:    -122.062339782715,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "McLaughlin & College 9 & 10 - Health Center",
		Lat:     36.9999389648438,
		Long:    -122.058349609375,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "McLaughlin & Crown College",
		Lat:     36.9990234375,
		Long:    -122.055229187012,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & Bookstore-Stevenson College",
		Lat:     36.9974822998047,
		Long:    -122.055030822754,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & Field House East",
		Lat:     36.9942474365234,
		Long:    -122.055511474609,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & East Remote",
		Lat:     36.9912986755371,
		Long:    -122.054656982422,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & Lower Quarry Rd",
		Lat:     36.985912322998,
		Long:    -122.053520202637,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Coolidge & Hagar",
		Lat:     36.9813537597656,
		Long:    -122.051971435547,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Coolidge & Main Entrance",
		Lat:     36.9776763916016,
		Long:    -122.053558349609,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "High & Western Dr",
		Lat:     36.9786148071289,
		Long:    -122.05785369873,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Empire Grade & Tosca Terrace",
		Lat:     36.9798469543457,
		Long:    -122.059257507324,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Empire Grade & Arboretum",
		Lat:     36.9836616516113,
		Long:    -122.064964294434,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Oakes College",
		Lat:     36.989917755127,
		Long:    -122.067230224609,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Family Student Housing",
		Lat:     36.991828918457,
		Long:    -122.066833496094,
		IsInner: false,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & College 8 & Porter",
		Lat:     36.992977142334,
		Long:    -122.065223693848,
		IsInner: false,
		ID:      -1,
	},
}

var InnerStops = []BusStop{
	BusStop{
		Name:    "McLaughlin & Science Hill",
		Lat:     36.9999313354492,
		Long:    -122.062049865723,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Kerr Hall",
		Lat:     36.9967041015625,
		Long:    -122.063583374023,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Kresge College",
		Lat:     36.999210357666,
		Long:    -122.064338684082,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "McLaughlin & Science Hill",
		Lat:     36.9999313354492,
		Long:    -122.062049865723,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "McLaughlin & College 9 & 10 - Health Center",
		Lat:     36.9997062683105,
		Long:    -122.05834197998,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & Bookstore",
		Lat:     36.9966621398926,
		Long:    -122.055480957031,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & East Remote",
		Lat:     36.9912567138672,
		Long:    -122.054962158203,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Hagar & Lower Quarry Rd",
		Lat:     36.985523223877,
		Long:    -122.053588867188,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Coolidge & Hagar",
		Lat:     36.9815368652344,
		Long:    -122.052131652832,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "High & Western Dr",
		Lat:     36.9787902832031,
		Long:    -122.057762145996,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "High & Barn Theater",
		Lat:     36.9773025512695,
		Long:    -122.054328918457,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Empire Grade & Arboretum",
		Lat:     36.9826698303223,
		Long:    -122.062492370605,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & Oakes College",
		Lat:     36.9905776977539,
		Long:    -122.066116333008,
		IsInner: true,
		ID:      -1,
	},
	BusStop{
		Name:    "Heller & College 8 & Porter",
		Lat:     36.9927787780762,
		Long:    -122.064880371094,
		IsInner: true,
		ID:      -1,
	},
}
