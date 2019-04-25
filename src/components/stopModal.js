import React from 'react';
import { Science_Hill, Kerr, Kresge, College_9, East_Remote, Quarry, Hagar, High_Western, Barn, Arboretum, Oakes, Rachel_Carson, West_Remote, Crown, Bookstore, East_Field_House, Main_Entrance, Empire_Grade, Family_Housing, taps, People } from './assets/Stop_Images'

class stopModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.returnURL = this.returnURL.bind(this)
    }
    returnURL(stopName) {
        switch (stopName) {
            case "McLaughlin & Science Hill": return Science_Hill;
            case "Heller & Kerr Hall": return Kerr;
            case "Heller & Kresge College": return Kresge;
            case "McLaughlin & College 9 & 10 - Health Center": return College_9;
            case "Hagar & East Remote": return East_Remote;
            case "Hagar & Lower Quarry Rd": return Quarry;
            case "Coolidge & Hagar": return Hagar;
            case "High & Western Dr": return High_Western;
            case "High & Barn Theater": return Barn;
            case "Empire Grade & Arboretum": return Arboretum;
            case "Heller & Oakes College": return Oakes;
            case "Heller & Rachel Carson & Porter": return Rachel_Carson;
            case "East Remote Parking Lot": return East_Remote;
            case "West Remote Parking Lot": return West_Remote;
            case "McLaughlin & Crown College": return Crown;
            case "Hagar & Bookstore-Stevenson College": return Bookstore;
            case "Hagar & Bookstore": return Bookstore;
            case "Hagar & Field House East": return East_Field_House;
            case "Coolidge & Main Entrance": return Main_Entrance;
            case "Empire Grade & Tosca Terrace": return Empire_Grade;
            case "Heller & Family Student Housing": return Family_Housing;

            default: return null

        }

    }

    closeModal() {
        this.props.closeModal()
    }


    render() {

        return (
            <div className="container" >

                <div className="row">
                    <img  style={{ width: '100%', height: "50vh" }} alt={this.props.selectedStop.name + " photo"} src={this.returnURL(this.props.selectedStop.name)}></img>
                </div>

                <div className="row">

                    <div className="col">
                        <div className="stopNameContainer">
                            <p className="stopNameText">{this.props.selectedStop.name} {this.props.selectedStop.direction}</p>
                        </div>
                        <img className="tapsLogo" src={taps} alt="TAPS LOGO"></img>

                    </div>
                </div>

                <hr></hr>
                <div className="row" >
                    <div className="col-md-6 rightBorder">
                        <p className="activityText" style={{fontWeight:'bold'}}>Activity of Bus Stop: </p>
                    </div>

                    <div className="col-md-6" >
                        <div className="row">
                            <div className="col-md-8">
                                <p className="busyText">Currently <span>Busy (15-20 people)</span></p>
                            </div>
                            <div className="col-md-4">
                                <img className="peopleIcon" src={People} alt="people icon"></img>

                            </div>
                        </div>

                    </div>

                </div>
                <hr></hr>

                <div className="row" style={{ paddingBottom: "10px" }}>

                    <div className="col-md-6 rightBorder" >
                        <div style={{ marginLeft: '2%' }}>
                            <p className="activityText" style={{fontWeight:'bold'}}> Next Bus ETA:</p>
                        </div>

                    </div>
                    <div className="col-md-6" style={{}}>
                        <div style={{ marginLeft: '2%', }}>
                            <p className="etaText"> 15 Minutes</p>
                        </div>

                    </div>
                </div>

            </div >
        )
    }
}

export default stopModal;


