import React from 'react';
import '../index.css'
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
            <div>
                <div className="col" style={{ border: ".5px solid black ", borderRadius: 25, padding: 30, backgroundColor:'white' }}>
                    <div className=" row align-items-center justify-content-between ">
                        <img style={{ wdith: 30, height: 37 }} alt={"blue stop"} src={BlueStop}></img>
                        <p style={{ fontSize: 15 }}>Inner Stops</p>
                    </div>
                    <div className="row align-items-center justify-content-between" style={{ marginTop: 5 }}>
                        <img style={{ wdith: 30, height: 37 }} alt={"red stop"} src={RedStop}></img>
                        <p style={{ fontSize: 15 }}>Outer Stops</p>
                    </div>

                </div>
            </div>

        )
    }
}

export default Legend;


