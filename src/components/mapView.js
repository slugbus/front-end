import React from 'react';
import GoogleMapReact from 'google-map-react';
import {data} from '../busData/inner'

const BusStops = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'red',
        padding: '7px 7px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
    
    }}>
        {text}
    </div>
);

class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 36.990790,
                lng: -122.058555,

            },
            zoom: 15,
            stops:[data]
        }
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

                    {data.map((x) =>

                        <BusStops
                            lat={x.lat}
                            lng={x.lng}
                    
                           
                        />
                    )

                    }


                </GoogleMapReact>

            </div>
        )
    }
}

export default MapView;


