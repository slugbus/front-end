import React from 'react';
import MapView from './mapView';
import axios from 'axios';



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busArray:[],
            lat:0,
            lng:0
        }
    }

    componentDidMount(){

        axios.get("http://f52fa470.ngrok.io/api/get_buses")
        .then(
            (response)=>{

                this.setState({
                    busArray:[...response.data]
                })
            }
        )

    }
    
    render() {
        return (
            <div id ="wrapper">
                

                    <MapView></MapView>


            </div>

        )
    }
}

export default Container;