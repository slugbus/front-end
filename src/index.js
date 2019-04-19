import React from "react";
import ReactDOM from "react-dom";
import { allStops } from './busData/allStops'

import "./components/styles.css";

import MapView from "./components/mapView";


const App = () => {
    return (
        <MapView
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ"
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
