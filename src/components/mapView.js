import React from 'react';
import GoogleMapReact from 'google-map-react';
import { innerdata } from '../busData/inner'
import { outerdata } from '../busData/outer'
import Popup from 'reactjs-popup'


class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 36.990790,
                lng: -122.058555,

            },
            zoom: 15,
            innerstops: [innerdata],
            outerstops: [outerdata],
            isHovering: false

        }
    }


    handleHover() {
        console.log("HOVERING");
        this.setState({
            isHovering: !this.state.isHovering
        })
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <div style={{ backgroundColor: 'transparent', marginTop: -21, marginBottom: -10 }}>
                    <h1>Bus++</h1>
                </div>

                <GoogleMapReact

                    bootstrapURLKeys={{ key: 'AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {innerdata.map((x) =>
                        <div
                            onMouseEnter={this.handleHover.bind(this)}
                            onMouseLeave={this.handleHover.bind(this)}
                            lat={x.lat}
                            lng={x.lng}
                            style={{
                                color: 'white',
                                background: 'red',
                                padding: '7px 7px',
                                display: 'inline-flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '100%',

                            }}>

                        </div>
                    )

                    }

                    {outerdata.map((x) =>

                        <div
                            onMouseEnter={this.handleHover.bind(this)}
                            onMouseLeave={this.handleHover.bind(this)}
                            lat={x.lat}
                            lng={x.lng}
                            style={{
                                color: 'white',
                                background: 'red',
                                padding: '7px 7px',
                                display: 'inline-flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '100%',

                            }}>

                        </div>

                    )

                    }
                </GoogleMapReact>

             
            </div>
        )
    }
}

export default MapView;


