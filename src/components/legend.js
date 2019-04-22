import React from 'react';
import BlueStop from './assets/mapIcons/Blue_Stop.png'
import RedStop from './assets/mapIcons/Red_Stop.png'

class Legend extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            
                <div className="col">
                    <div className="row" style={{marginBottom:"25px"}}>
                        <img style={{ width: 36, height: 42 }} alt={"blue stop"} src={BlueStop}></img>
                        <p className="legendText">Inner Stops</p>
                    </div>
                    <div className="row " style={{ marginTop: "25px" }}>
                        <img style={{ width: 36, height: 42 }} alt={"red stop"} src={RedStop}></img>
                        <p className="legendText">Outer Stops</p>
                    </div>

                </div>

        )
    }
}

export default Legend;


