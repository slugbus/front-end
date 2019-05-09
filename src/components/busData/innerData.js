

//Importing done: Name, Lat, Long, stop ID, Background Image
const BlueIcon = { url: require('../components/assets/mapIcons/Blue_Stop.png'), scaledSize: { width: 25, height: 32 } };
const RedIcon = { url: require('../components/assets/mapIcons/Red_Stop.png'), scaledSize: { width: 25, height: 32 } };

export const innerData = [
    //INNER STOPS
    {
        icon: BlueIcon,
        name: "McLaughlin & Science Hill",
        lat: 36.9999313354492,
        lng: -122.062049865723,
        uid: "stop1",
        pic: './assets/stopStopPics/Science_Hill.jpg'
    },

    {
        icon: BlueIcon,
        name: "Heller & Kerr Hall",
        lat: 36.9967041015625,
        lng: -122.063583374023,
        uid: "stop2",
        pic: './assets/stopStopPics/Kerr.jpg'

    },

    {
        icon: BlueIcon,
        name: "Heller & Kresge College",
        lat: 36.999210357666,
        lng: -122.064338684082,
        uid: "stop3",
        pic: './assets/stopStopPics/Kresge.jpg'
    },

    {
        icon: BlueIcon,
        name: "McLaughlin & College 9 & 10 - Health Center",
        lat: 36.9997062683105,
        lng: -122.05834197998,
        uid: "stop4",
        pic: './assets/stopStopPics/College_9.jpg'
    },

    {
        icon: BlueIcon,
        name: "Hagar & Bookstore",
        lat: 36.9966621398926,
        lng: -122.055480957031,
        uid: "stop5",
        pic: './assets/stopStopPics/Bookstore.jpg'
    },

    {
        icon: BlueIcon,
        name: "Hagar & East Remote",
        lat: 36.9912567138672,
        lng: -122.054962158203,
        uid: "stop6",
        pic: './assets/stopStopPics/East_Remote.jpg'
    },

    {
        icon: BlueIcon,
        name: "Hagar & Lower Quarry Rd",
        lat: 36.985523223877,
        lng: -122.053588867188,
        uid: "stop7",
        pic: './assets/stopStopPics/Quarry.jpg'
    },

    {
        icon: BlueIcon,
        name: "Coolidge & Hagar",
        lat: 36.9815368652344,
        lng: -122.052131652832,
        uid: "stop8",
        pic: './assets/stopStopPics/Hagar.jpg'
    },

    {
        icon: BlueIcon,
        name: "High & Western Dr",
        lat: 36.9787902832031,
        lng: -122.057762145996,
        uid: "stop9",
        pic: './assets/stopStopPics/High_Western.png'
    },

    {
        icon: BlueIcon,
        name: "High & Barn Theater",
        lat: 36.9773025512695,
        lng: -122.054328918457,
        uid: "stop10",
        pic: './assets/stopStopPics/Barn.jpg'
    },

    {
        icon: BlueIcon,
        name: "Empire Grade & Arboretum",
        lat: 36.9826698303223,
        lng: -122.062492370605,
        uid: "stop11",
        pic: './assets/stopStopPics/Arboretum.jpg'
    },

    {
        icon: BlueIcon,
        name: "Heller & Oakes College",
        lat: 36.9905776977539,
        lng: -122.066116333008,
        uid: "stop12",
        pic: './assets/stopStopPics/Oakes.jpg'
    },

    {
        icon: BlueIcon,
        name: "Heller & Rachel Carson & Porter",
        lat: 36.9927787780762,
        lng: -122.064880371094,
        uid: "stop13",
        pic: './assets/stopStopPics/Rachel_Carson.jpg'
    },

    //Parking lots, not inner loop

    {
        icon: BlueIcon,
        name: "West Remote Parking Lot",
        lat: 36.988537,
        lng: -122.064799,
        uid: "stop14",
        pic: './assets/stopStopPics/West_Remote.jpg'
    },

    {
        icon: BlueIcon,
        name: "East Remote Parking Lot",
        lat: 36.990786,
        lng: -122.052190,
        uid: "stop15",
        pic: './assets/stopStopPics/East_Remote.jpg'
    },

    //OUTERSTOPS
    {
        icon: RedIcon,
        "name": "Heller & Kresge College",
        "lat": 36.9992790222168,
        "lng": -122.064552307129,
        "uid": "stop16",
        "pic": './assets/stopStopPics/Kresge.jpg'
    },

    {
        icon: RedIcon,
        "name": "McLaughlin & Science Hill",
        "lat": 37.0000228881836,
        "lng": -122.062339782715,
        "uid": "stop17",
        "pic": './assets/stopStopPics/Science_Hill.jpg'
    },

    {
        icon: RedIcon,
        "name": "McLaughlin & College 9 & 10 - Health Center",
        "lat": 36.9999389648438,
        "lng": -122.058349609375,
        "uid": "stop18",
        "pic": './assets/stopStopPics/College_9.jpg'
    },

    {
        icon: RedIcon,
        "name": "McLaughlin & Crown College",
        "lat": 36.9990234375,
        "lng": -122.055229187012,
        "uid": "stop19",
        "pic": './assets/stopStopPics/Crown.jpg'
    },

    {
        icon: RedIcon,
        "name": "Hagar & Bookstore-Stevenson College",
        "lat": 36.9974822998047,
        "lng": -122.055030822754,
        "uid": "stop20",
        "pic": './assets/stopStopPics/Bookstore.jpg'
    },

    {
        icon: RedIcon,
        "name": "Hagar & Field House East",
        "lat": 36.9942474365234,
        "lng": -122.055511474609,
        "uid": "stop21",
        "pic": './assets/stopStopPics/East_Field_House.jpg'
    },

    {
        icon: RedIcon,
        "name": "Hagar & East Remote",
        "lat": 36.9912986755371,
        "lng": -122.054656982422,
        "uid": "stop22",
        "pic": './assets/stopStopPics/East_Remote.jpg'
    },

    {
        icon: RedIcon,
        "name": "Hagar & Lower Quarry Rd",
        "lat": 36.985912322998,
        "lng": -122.053520202637,
        "uid": "stop23",
        "pic": './assets/stopStopPics/Quarry.jpg'
    },

    {
        icon: RedIcon,
        "name": "Coolidge & Hagar",
        "lat": 36.9813537597656,
        "lng": -122.051971435547,
        "uid": "stop24",
        "pic": './assets/stopStopPics/Hagar.jpg'
    },

    {
        icon: RedIcon,
        "name": "Coolidge & Main Entrance",
        "lat": 36.9776763916016,
        "lng": -122.053558349609,
        "uid": "stop25",
        "pic": './assets/stopStopPics/Main_Entrance.jpg'
    },

    {
        icon: RedIcon,
        "name": "High & Western Dr",
        "lat": 36.9786148071289,
        "lng": -122.05785369873,
        "uid": "stop26",
        "pic": './assets/stopStopPics/High_Western.png'
    },

    {
        icon: RedIcon,
        "name": "Empire Grade & Tosca Terrace",
        "lat": 36.9798469543457,
        "lng": -122.059257507324,
        "uid": "stop27",
        "pic": './assets/stopStopPics/Empire_Grade.jpg'
    },

    {
        icon: RedIcon,
        "name": "Empire Grade & Arboretum",
        "lat": 36.9836616516113,
        "lng": -122.064964294434,
        "uid": "stop28",
        "pic": './assets/stopStopPics/Arboretum.jpg'
    },

    {
        icon: RedIcon,
        "name": "Heller & Oakes College",
        "lat": 36.989917755127,
        "lng": -122.067230224609,
        "uid": "stop29",
        "pic": './assets/stopStopPics/Oakes.jpg'
    },

    {
        icon: RedIcon,
        "name": "Heller & Family Student Housing",
        "lat": 36.991828918457,
        "lng": -122.066833496094,
        "uid": "stop30",
        "pic": './assets/stopStopPics/Family_Housing.jpg'
    },

    {
        icon: RedIcon,
        "name": "Heller & Rachel Carson & Porter",
        "lat": 36.992977142334,
        "lng": -122.065223693848,
        "uid": "stop32",
        "pic": './assets/stopStopPics/Rachel_Carson.jpg'
    }



]