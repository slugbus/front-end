import React from 'react';
import MapView from './mapView';
import Title from './title';



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                     
                    <MapView></MapView>   
                    
                </div>

            </div>

        )
    }
}

export default Container;