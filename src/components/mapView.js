import React from 'react';
import GoogleMapReact from 'google-map-react';
import Title from './title';


class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            center:{
                lat:36.990790,
                lng:-122.058555
            },
            zoom:15
         }
    }
    render() { 
        return ( 
            <div style = {{height: '100vh', width:'100%'}}>
            <div style={{backgroundColor:'transparent', marginTop:-21,marginBottom:-21}}>
            <h1>Bus++</h1>
            </div>
                
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
/>

            </div>
         )
    }
}
 
export default MapView;