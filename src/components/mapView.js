import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { innerdata } from '../busData/inner'
import { outerdata } from '../busData/outer'
import Modal from 'react-modal';
import StopModal from './stopModal';
import BusModal from './busModal'
import axios from 'axios'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '10',
        transform: 'translate(-50%, -50%)',
        display: 'block'
    }
};

const Slug_Bus = { url: require('./assets/mapIcons/Slug_Bus.png'), scaledSize: { width: 80, height: 40 } };
const Slug_Bus_Vert = { url: require('./assets/mapIcons/Slug_Bus_Vert.png'), scaledSize: { width: 40, height: 80 } };
const Slug_Bus_180 = { url: require('./assets/mapIcons/Slug_Bus_180.png'), scaledSize: { width: 40, height: 80 } };
const Slug_Bus_45 = { url: require('./assets/mapIcons/Slug_Bus_45.png'), scaledSize: { width: 75, height: 90 } };
const Slug_Bus_DR = { url: require('./assets/mapIcons/Slug_Bus_DR.png'), scaledSize: { width: 75, height: 90 } };
const Slug_Bus_DL = { url: require('./assets/mapIcons/Slug_Bus_DL.png'), scaledSize: { width: 75, height: 90 } };
const Slug_Bus_TR = { url: require('./assets/mapIcons/Slug_Bus_TR.png'), scaledSize: { width: 5, height: 90 } };
const Slug_Bus_90 = { url: require('./assets/mapIcons/Slug_Bus_90.png'), scaledSize: { width: 150, height: 90 } };

const logo = require('./assets/mapIcons/Logo_2.png')
const BlueIcon = { url: require('./assets/mapIcons/Blue_Stop.png'), scaledSize: { width: 25, height: 32 } };
const RedIcon = { url: require('./assets/mapIcons/Red_Stop.png'), scaledSize: { width: 25, height: 32 } }


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
            selectedStop: {},
            selectedBus: {},
            selectedStopURL: "",
            stopDetailsVisible: false,
            busDetailsVisible: false,
            eta: ""

        }
    }

    updateBusImage(angle) {

        console.log(angle)
        switch (angle) {
            case (angle < 45): return { icon: Slug_Bus_Vert }
            case (angle >= 45 && angle < 90): return { icon: Slug_Bus_TR }
            case (angle >= 90 && angle < 135): return { icon: Slug_Bus }
            case (angle >= 135 && angle < 180): return { icon: Slug_Bus_DR }
            case (angle >= 180 && angle < 225): return { icon: Slug_Bus_180 }
            case (angle >= 225 && angle < 270): return { icon: Slug_Bus_DL }
            case (angle >= 270 && angle < 315): return { icon: Slug_Bus_90 }
            case (angle >= 315 && angle < 360): return { icon: Slug_Bus_45 }
            default: return { icon: Slug_Bus_Vert }
        }


    }

    async onMarkerClick(marker) {

        console.log("DGSG", marker)

        if (marker.type === "LOOP") {
            console.log("Fuck")

            axios.get(`http://35.233.194.110:8080/api/calc_eta`)
                .then(res => {
                    console.log("ETA", res.data);


                    var minutes = Math.floor(res.data.secs / 60);


                    this.setState({
                        selectedBus: marker,
                        busDetailsVisible: true,
                        eta: minutes

                    })

                })

        } else {

            this.setState({
                selectedStop: marker,
                selectedStopURL: marker.pic,
                stopDetailsVisible: true
            });

        }


    }





    closeStopModal() {
        this.setState({
            stopDetailsVisible: false
        })
    }
    closeBusModal() {
        this.setState({
            busDetailsVisible: false
        })
    }

    onMapClicked() {
        console.log("MAP CLICKED");

        this.setState({
            showingInfoWindow: false
        })
    }


    onRequestClose = () => {
        console.log("closed")
    }
    render() {
        return (
            <div >
                <Map
                    id="map"
                    google={this.props.google}
                    zoom={15.1}
                    onClick={this.onMapClicked.bind(this)}
                    initialCenter={{
                        lat: 36.990,
                        lng: -122.058555
                    }}
                >

                    {innerdata.map((x, index) =>

                        <Marker
                            options={{ icon: BlueIcon }}
                            title={`${x.name}
                                     ${x.lat}
                                     ${x.uid}
                                     ${x.pic}`}
                            key={x.uid}
                            position={{ lat: x.lat, lng: x.lng }}
                            onClick={this.onMarkerClick.bind(this, x)}
                        >
                        </Marker>
                    )
                    }
                    {outerdata.map((x, index) =>
                        <Marker
                            options={{ icon: RedIcon }}
                            onClick={this.onMarkerClick.bind(this, x)}
                            key={x.uid}
                            title={`
                            ${x.name}
                            ${x.lat}
                            ${x.uid}
                            ${x.pic}`}
                            position={{ lat: x.lat, lng: x.lng }}
                        >
                        </Marker>

                    )
                    }
                    {this.props.busArray.map((x, index) =>
                        <Marker
                            onClick={this.onMarkerClick.bind(this, x)}
                            options={{ icon: Slug_Bus }}
                            key={x.ID}
                            title={`
                            ${x.id}
                            ${x.lat}
                            ${x.lng}
                            ${x.speed}`}
                            position={{ lat: x.lat, lng: x.lng }}>
                        </Marker>
                    )}

                </Map>

                <div style={{ flex: 1, justifyContent: 'center' }} className="row ">
                    <div className="col-xs-2" style={{ background: 'rgba(255,255,255,0.8)', padding: '-50px', borderRadius: '20px' }}>
                        <img className="" style={{ padding: 10, width: 140, height: 55, }} borderWidth={3} alt="bus++" src={logo}></img>
                    </div>

                </div>
                <Modal
                    isOpen={this.state.stopDetailsVisible}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.closeStopModal.bind(this)}
                >
                    <StopModal closeStopModal={this.closeStopModal.bind(this)} selectedStop={this.state.selectedStop} />

                </Modal>

                <Modal
                    isOpen={this.state.busDetailsVisible}
                    style={customStyles}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.closeBusModal.bind(this)}
                >
                    <BusModal eta={this.state.eta} closeBusModal={this.closeBusModal.bind(this)} selectedStop={this.state.selectedBus} />

                </Modal>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ")
})(MapView);


