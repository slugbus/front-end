import React from 'react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react'
import { innerdata } from '../busData/inner'
import { outerdata } from '../busData/outer'
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const BlueIcon = { url: require('./assets/mapIcons/Blue_Stop.png'), scaledSize: { width: 25, height: 32 } };
const RedIcon = { url: require('./assets/mapIcons/Red_Stop.png'),scaledSize: { width: 25, height: 32 } }
export class MapView extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 36.990790,
                lng: -122.058555,

            },
            zoom: 15,
            toolTipActive: false,
            showingInfoWindow: false,
            activeMarker: {},
            markerObjects: [],
            selectedPlace: {},
            infoWindow: null


        }
    }



    updateLocation(name) {
        this.setState({
            currentLocation: name
        })
    }



    onMarkerClick(props, marker, e) {

        console.log("DGSG")
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            stopDetailsVisible: true
        });
    }

    onMapClicked() {
        console.log("MAP CLICKED");
        this.setState({

            showingInfoWindow: false
        })
    }


    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <div style={{ backgroundColor: 'transparent', marginTop: -21, marginBottom: -10 }}>
                    <h1>Bus++</h1>
                </div>

                <Map
                    google={this.props.google}
                    zoom={15}
                    onClick={this.onMapClicked.bind(this)}
                    initialCenter={{
                        lat: 36.990790,
                        lng: -122.058555
                    }}
                >
                    {innerdata.map((x, index) =>

                        <Marker
                            options={{ icon: BlueIcon }}
                            title={`${x.name}
                                     ${x.lat}`}
                            key={x.uid}
                            position={{ lat: x.lat, lng: x.lng }}
                            onClick={this.onMarkerClick.bind(this)}
                        >
                        </Marker>


                    )
                    }
                    {outerdata.map((x, index) =>
                        <Marker
                            options={{ icon: RedIcon }}
                            onClick={this.onMarkerClick.bind(this)}
                            key={x.uid}
                            title={`
                            ${x.name}
                            ${x.lat}`}
                            position={{ lat: x.lat, lng: x.lng }}
                        >

                            {x.name === this.state.activeMarker.title && (
                                <InfoWindow>
                                    <div>
                                        <h1>info widnow shit</h1>
                                    </div>

                                </InfoWindow>

                            )}

                        </Marker>

                    )
                    }

                </Map>

                <Modal
                    isOpen={this.state.stopDetailsVisible}
                    style={customStyles}
                >

                    <div>
                        <button className="btn btn-danger"> X</button>
                        <div>
                            <p></p>
                        </div>


                    </div>




                </Modal>


            </div >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ")
})(MapView);


