import React from 'react';
import MapView from './mapView';
import axios from 'axios';
import '../index.css'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busArray: [],
            lat: 0,
            lng: 0
        }
    }

    componentDidMount() {


        this.intervalId = setInterval(() => this.updateBusMarkers(), 3000);
        this.updateBusMarkers()

    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }



    updateBusMarkers() {
        axios.get("http://35.233.194.110:8080/api/get_buses")
            .then(
                (response) => {
                    console.log("RESPONSE", response.data)
                    this.setState({
                         busArray: [...response.data]

                    })
                }
            )
    }

    render() {
        return (
           
                <MapView busArray={this.state.busArray}></MapView>

           

        )
    }
}

export default Container;