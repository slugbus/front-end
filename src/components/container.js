import React from 'react';
import MapView from './mapView';



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleHover(){


        console.log("HOVERING");
        this.setState({
            isHovering:!this.state.isHovering
        })
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