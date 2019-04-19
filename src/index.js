import React from "react";
import ReactDOM from "react-dom";
import { allStops } from './busData/allStops'

import "./components/styles.css";

import MapView from "./components/mapView";

const GMAPS = "https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_API_KEY
console.log("AAG", GMAPS)




const App = () => {
    return (
        <MapView
            googleMapURL={GMAPS.toString()}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "100vh" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={{ lat: 36.9906317, lng: -122.0615714 }}
            zoom={15.1}
            markers={allStops}
        />

    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
