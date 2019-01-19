import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            center:{
                lat:36.990790,
                lng:-122.058555,
                
            },
            zoom:15,
            markerLat:36.991
         }
    }

     updateLat(){

       this.setState({
           markerLat:36.91
       })

     }

    render() { 
        return ( 
            <div style = {{height: '100vh', width:'100%'}}>
            <div style={{backgroundColor:'transparent', marginTop:-21,marginBottom:-10}}>
            <h1>Bus++</h1>
            </div>
            
            <GoogleMapReact
            
          bootstrapURLKeys={{ key: 'AIzaSyCVBkdLAA2jhdd9iCuPyPL4dD9xpRD32AQ'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
>
<AnyReactComponent

 lat ={36.991}
 lng ={-122.058555}
 text={'BUS'}
/>

</GoogleMapReact>

            </div>
         )
    }
}
 
export default MapView;


