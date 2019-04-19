import React from 'react';
const taps = require('./assets/busStopPics/TAPS.jpg')



class BusModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }


    }


    componentDidMount() {
        console.log("HEERERERERE", this.props)
    }

    render() {

        return (
            <div className="container"  >
                <div className="row bottomBorder">
                    <div className="col-md-4">
                        <div>
                            <p className="busType">{this.props.selectedStop.type.charAt(0).toUpperCase() + this.props.selectedStop.type.slice(1).toLowerCase()} Bus</p>

                        </div>
                    </div>
                    <div className="col-md-4" >

                        <p className="busID">#{this.props.selectedStop.id}</p>
                    </div>
                    <div className="col-md-4" >

                        <img className="busTapsLogo" src={taps} alt="TAPS LOGO"></img>
                    </div>

                </div>
                <div className="row busEtaContainer" >
                    <div className="col-md-6 grooveRight">
                        <p className="etaTextBold">Estimated Time of Arrival:</p>
                    </div>

                    <div className="col-md-6">
                        <p className="etaText">15 min</p>
                    </div>
                </div>

                <div className="row busEtaContainer" >
                    <div className="col-md-6 grooveRight">
                        <p className="etaTextBold">Next Stop:</p>
                    </div>

                    <div className="col-md-6">
                    <p className="etaText">Porter/Kresge Inner Bus Stop</p>
                    </div>
                </div>

            </div >
        )
    }
}

export default BusModal;


