import React from 'react';
import MapView from './mapView';
import axios from 'axios';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busArray: [
                {
                    angle: 0,
                    id: "84",
                    lat: 36.98868,
                    lgn: -122.05421,
                    speed: 0,
                    type: "LOOP"
                },
                {
                    angle: 0,
                    id: "85",
                    lat: 36.977905,
                    lgn: -122.05425,
                    speed: 0,
                    type: "OUT OF SERVICE"
                }, {
                    angle: 109,
                    id: "97",
                    lat: 36.996716,
                    lgn: -122.055405,
                    speed: 1.047,
                    type: "LOOP"
                }
            ],
            lat: 0,
            lng: 0
        }
    }

    componentDidMount() {

        axios.get("http://f52fa470.ngrok.io/api/get_buses")
            .then(
                (response) => {

                    this.setState({
                    })
                }
            )

    }

    render() {
        return (
            <div id="wrapper">


                <MapView busArray={this.state.busArray}></MapView>


            </div>

        )
    }
}

export default Container;