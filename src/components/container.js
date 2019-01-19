import React from 'react';
import MapView from './mapView'



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Bus++</h1>
                </div>
                <div>
                    <MapView></MapView>
                </div>

            </div>

        )
    }
}

export default Container;