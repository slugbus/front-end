

//Importing done: Name, Lat, Long, stop ID, Background Image
const BlueIcon = { url: require('../components/assets/mapIcons/Blue_Stop.png'), scaledSize: { width: 30, height: 37 } };
const RedIcon = { url: require('../components/assets/mapIcons/Red_Stop.png'), scaledSize: { width: 30, height: 37 } };

export const allStops = [
    //Inner STOPS
    {
        direction: "Inner",
        icon: BlueIcon,
        name: "McLaughlin & Science Hill",
        lat: 36.9999313354492,
        lon: -122.062049865723,
        id: "stop1",
        pic: './assets/stopStopPics/Science_Hill.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Kerr Hall",
        lat: 36.9967041015625,
        lon: -122.063583374023,
        id: "stop2",
        pic: './assets/stopStopPics/Kerr.jpg'

    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Kresge College",
        lat: 36.999210357666,
        lon: -122.064338684082,
        id: "stop3",
        pic: './assets/stopStopPics/Kresge.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "McLaughlin & College 9 & 10 - Health Center",
        lat: 36.9997062683105,
        lon: -122.05834197998,
        id: "stop4",
        pic: './assets/stopStopPics/College_9.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & Bookstore",
        lat: 36.9966621398926,
        lon: -122.055480957031,
        id: "stop5",
        pic: './assets/stopStopPics/Bookstore.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & East Remote",
        lat: 36.9912567138672,
        lon: -122.054962158203,
        id: "stop6",
        pic: './assets/stopStopPics/East_Remote.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Hagar & Lower Quarry Rd",
        lat: 36.985523223877,
        lon: -122.053588867188,
        id: "stop7",
        pic: './assets/stopStopPics/Quarry.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Coolidge & Hagar",
        lat: 36.9815368652344,
        lon: -122.052131652832,
        id: "stop8",
        pic: './assets/stopStopPics/Hagar.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "High & Western Dr",
        lat: 36.9787902832031,
        lon: -122.057762145996,
        id: "stop9",
        pic: './assets/stopStopPics/High_Western.png'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "High & Barn Theater",
        lat: 36.9773025512695,
        lon: -122.054328918457,
        id: "stop10",
        pic: './assets/stopStopPics/Barn.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Empire Grade & Arboretum",
        lat: 36.9826698303223,
        lon: -122.062492370605,
        id: "stop11",
        pic: './assets/stopStopPics/Arboretum.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Oakes College",
        lat: 36.9905776977539,
        lon: -122.066116333008,
        id: "stop12",
        pic: './assets/stopStopPics/Oakes.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "Heller & Rachel Carson & Porter",
        lat: 36.9927787780762,
        lon: -122.064880371094,
        id: "stop13",
        pic: './assets/stopStopPics/Rachel_Carson.jpg'
    },

    //Parking lots, not Inner loop

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "West Remote Parking Lot",
        lat: 36.988537,
        lon: -122.064799,
        id: "stop14",
        pic: './assets/stopStopPics/West_Remote.jpg'
    },

    {
        direction: "Inner",
        icon: BlueIcon,
        name: "East Remote Parking Lot",
        lat: 36.990786,
        lon: -122.052190,
        id: "stop15",
        pic: './assets/stopStopPics/East_Remote.jpg'
    },

    //OuterSTOPS
    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Kresge College",
        "lat": 36.9992790222168,
        "lon": -122.064552307129,
        "id": "stop16",
        "pic": './assets/stopStopPics/Kresge.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & Science Hill",
        "lat": 37.0000228881836,
        "lon": -122.062339782715,
        "id": "stop17",
        "pic": './assets/stopStopPics/Science_Hill.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & College 9 & 10 - Health Center",
        "lat": 36.9999389648438,
        "lon": -122.058349609375,
        "id": "stop18",
        "pic": './assets/stopStopPics/College_9.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "McLaughlin & Crown College",
        "lat": 36.9990234375,
        "lon": -122.055229187012,
        "id": "stop19",
        "pic": './assets/stopStopPics/Crown.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Bookstore-Stevenson College",
        "lat": 36.9974822998047,
        "lon": -122.055030822754,
        "id": "stop20",
        "pic": './assets/stopStopPics/Bookstore.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Field House East",
        "lat": 36.9942474365234,
        "lon": -122.055511474609,
        "id": "stop21",
        "pic": './assets/stopStopPics/East_Field_House.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & East Remote",
        "lat": 36.9912986755371,
        "lon": -122.054656982422,
        "id": "stop22",
        "pic": './assets/stopStopPics/East_Remote.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Hagar & Lower Quarry Rd",
        "lat": 36.985912322998,
        "lon": -122.053520202637,
        "id": "stop23",
        "pic": './assets/stopStopPics/Quarry.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Coolidge & Hagar",
        "lat": 36.9813537597656,
        "lon": -122.051971435547,
        "id": "stop24",
        "pic": './assets/stopStopPics/Hagar.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Coolidge & Main Entrance",
        "lat": 36.9776763916016,
        "lon": -122.053558349609,
        "id": "stop25",
        "pic": './assets/stopStopPics/Main_Entrance.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "High & Western Dr",
        "lat": 36.9786148071289,
        "lon": -122.05785369873,
        "id": "stop26",
        "pic": './assets/stopStopPics/High_Western.png'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Empire Grade & Tosca Terrace",
        "lat": 36.9798469543457,
        "lon": -122.059257507324,
        "id": "stop27",
        "pic": './assets/stopStopPics/Empire_Grade.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Empire Grade & Arboretum",
        "lat": 36.9836616516113,
        "lon": -122.064964294434,
        "id": "stop28",
        "pic": './assets/stopStopPics/Arboretum.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Oakes College",
        "lat": 36.989917755127,
        "lon": -122.067230224609,
        "id": "stop29",
        "pic": './assets/stopStopPics/Oakes.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Family Student Housing",
        "lat": 36.991828918457,
        "lon": -122.066833496094,
        "id": "stop30",
        "pic": './assets/stopStopPics/Family_Housing.jpg'
    },

    {
        direction: "Outer",
        icon: RedIcon,
        "name": "Heller & Rachel Carson & Porter",
        "lat": 36.992977142334,
        "lon": -122.065223693848,
        "id": "stop32",
        "pic": './assets/stopStopPics/Rachel_Carson.jpg'
    }



]