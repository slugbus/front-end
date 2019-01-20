import React from 'react';
import GoogleMapReact from 'google-map-react';
import { innerdata } from '../busData/inner'
import { outerdata } from '../busData/outer'
import ToolTip from 'react-portal-tooltip'


class MapMarker extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div
                onMouseEnter={this.props.updateLocation.bind(this, this.props.uid)}
                lat={this.props.markerLat}
                lng={this.props.markerLng}
                style={{
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
}

export default MapMarker;


