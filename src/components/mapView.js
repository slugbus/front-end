import React from "react";
import axios from 'axios'
import Modal from 'react-modal'
import StopModal from './stopModal'
import BusModal from './busModal'
import Legend from './legend'
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps";
import { Slug_Bus_TR, Slug_Bus, Slug_Bus_DR, Slug_Bus_180, Slug_Bus_DL, Slug_Bus_90, Slug_Bus_45, Slug_Bus_Vert } from "./assets/Bus_Icons";
const logo = require('./assets/mapIcons/Logo_2.png')


class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: this.props.markers,
            busArray: [],
            responseSize: 0,
            initBusMarkers: false,
            eta: 0,
            busDetailsVisible: false,
            stopDetailsVisible: false,
            selectedStop: {}
        };

        this.changeBusMarker = this.changeBusMarker.bind(this)
    }

    componentDidMount() {
        this.addMarker();
        this.intervalId = setInterval(this.addMarker.bind(this), 1000);

    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    changeBusMarker = (angle) => {

        if (angle <= 45) {
            return Slug_Bus_TR
        } if (angle <= 90) {
            return Slug_Bus
        } if (angle <= 135) {
            return Slug_Bus_DR
        } if (angle <= 180) {
            return Slug_Bus_180
        } if (angle <= 225) {
            return Slug_Bus_DL
        } if (angle <= 270) {
            return Slug_Bus_90
        } if (angle <= 345) {
            return Slug_Bus_45
        } else {
            return Slug_Bus_Vert
        }
    }

    async addMarker() {

        let busArray = []
        axios.get("http://localhost:8080/location/get")
            .then(
                (response) => {
                    this.setState({
                        busArray: [...response.data]
                    })
                }
            )

        await this.state.busArray.map(bus => {
            if (bus.type !== 'Loop Out Of Service At Barn Theater Bus') {
                return busArray.push(
                    { ...bus, angle: Math.floor(Math.random() * 360) + 1 }
                )
            }

       })

        this.setState({
            busArray: [...busArray]
        })

        if (this.state.busArray.length > 0) {
            let markers = [...this.state.markers];
            let updatedBusMarkers = []

            this.state.busArray.map(x => {
                return updatedBusMarkers.push({
                    ...x,
                    icon: this.changeBusMarker(x.angle)
                })
            })


            if (!this.state.initBusMarkers) {

                let addedBuses = markers.concat(updatedBusMarkers)

                this.setState({
                    markers: [...addedBuses],
                    responseSize: this.state.busArray.length,
                    initBusMarkers: true
                })


            } else {


                if (this.state.responseSize > 0) {

                    let deleteVal = this.state.markers.length - this.state.responseSize;

                    markers.splice(deleteVal, this.state.responseSize)
                    let returnVal = markers.concat(updatedBusMarkers)

                    this.setState(prevState => ({
                        markers: [...returnVal],
                        responseSize: updatedBusMarkers.length
                    }));

                }

            }

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
    async onMarkerClick(marker) {

        console.log("DGSG", marker)

        if (marker.type != null) {

            // axios.get(`http://35.233.194.110:8080/api/calc_eta`)
            //     .then(res => {
            // console.log("ETA", res.data);

            // var minutes = Math.floor(res.data.secs / 60);
            this.setState({
                selectedBus: marker,
                busDetailsVisible: true,
                eta: 5

            })

            // })

        } else {

            this.setState({
                selectedStop: marker,
                selectedStopURL: marker.pic,
                stopDetailsVisible: true
            });

        }

    }

    render() {
        return (
            <div className="container">

                <div  q id="floating-panel">
                    <img  style={{ padding: 10, width: 140, height: 55 }} alt="bus++" src={logo}></img>

                </div>
                {this.state.busDetailsVisible || this.state.stopDetailsVisible ?
                    null :
                    <div id="floating-legend-panel">
                        <Legend />
                    </div>
                }

                <GoogleMap defaultZoom={this.props.zoom} defaultCenter={this.props.center} defaultOptions={{ scrollwheel: false, gestureHandling: 'none' }}>

                    <div>
                        {this.state.markers.map((marker =>
                            <Marker

                                onClick={this.onMarkerClick.bind(this, marker)}
                                icon={marker.icon} key={marker.id} position={{ lat: marker.lat, lng: marker.lon }}
                                name={`${marker.name}${marker.lat} ${marker.uid}${marker.pic}`} />
                        ))
                        }
                    </div>
                </GoogleMap>

                <Modal
                    isOpen={this.state.stopDetailsVisible}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.closeStopModal.bind(this)}
                    ariaHideApp={false}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            padding: '10',
                            transform: 'translate(-50%, -50%)',
                            display: 'block'
                        }
                    }}>
                    <StopModal closeStopModal={this.closeStopModal.bind(this)} selectedStop={this.state.selectedStop} />

                </Modal>

                <Modal
                    isOpen={this.state.busDetailsVisible}
                    shouldCloseOnOverlayClick={true}
                    ariaHideApp={false}
                    onRequestClose={this.closeBusModal.bind(this)}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            padding: '10',
                            transform: 'translate(-50%, -50%)',
                            display: 'block'
                        }
                    }}
                >
                    <BusModal eta={this.state.eta} closeBusModal={this.closeBusModal.bind(this)} selectedStop={this.state.selectedBus} />

                </Modal>


            </div>

        );
    }
}
export default withScriptjs(withGoogleMap(MapView));

