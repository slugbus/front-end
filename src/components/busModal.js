import React from 'react';
const Barn = require('./assets/busStopPics/Barn.jpg');
const Arboretum = require('./assets/busStopPics/Arboretum.jpg')
const Bookstore = require('./assets/busStopPics/Bookstore.jpg')
const College_9 = require('./assets/busStopPics/College_9.jpg')
const East_Field_House = require('./assets/busStopPics/East_Field_House.jpg')
const Empire_Grade = require('./assets/busStopPics/Empire_Grade.jpg')
const Family_Housing = require('./assets/busStopPics/Family_Housing.jpg')
const Hagar = require('./assets/busStopPics/Hagar.jpg')
const East_Remote = require('./assets/busStopPics/East_Remote.jpg')
const High_Western = require('./assets/busStopPics/High_Western.png')
const Kerr = require('./assets/busStopPics/Kerr.jpg')
const Kresge = require('./assets/busStopPics/Kresge.jpg')
const Main_Entrance = require('./assets/busStopPics/Main_Entrance.jpg')
const Oakes = require('./assets/busStopPics/Oakes.jpg')
const Quarry = require('./assets/busStopPics/Quarry.jpg')
const Rachel_Carson = require('./assets/busStopPics/Rachel_Carson.jpg')
const Science_Hill = require('./assets/busStopPics/Science_Hill.jpg')
const West_Remote = require('./assets/busStopPics/West_Remote.jpg')
const Crown = require('./assets/busStopPics/Crown.jpg')

class BusModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    returnURL(stopName) {
        console.log("HEERERERERE", this)
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
            <div className="flex:1" style={{flex:1 }}>
                <div style={{flex:1, flexDirection:'col border col-md-6'}}>
                    <img  alignSelf="center" resizeMode="contain" style={{width:"50",height:"100"}} alt={this.props.selectedStop.name + " photo"} src={this.returnURL(this.props.selectedStop.name)}></img>
                <div style={{fontSize:'25px',fontStyle:'italic', width:'100%', backgroundColor:"grey"}}></div>
                    <div className="border">
                        <p style={{fontSize: '25px', fontStyle: 'bold'}}>{this.props.selectedStop.name}</p>
                    </div>


                </div>
            <div className="flex:1" style={{flex:1}}>
                <div style={{flex:1, flexDirection:'col border col-md-6'}}>
                    <p style={{fontSize:'15px', fontStyle:'italic'}}>Activity of Bus Stop: </p>
                </div>
            </div>
            <div className="flex:1" style={{flex:1}}>
                <div style={{flex:1, flexDirection:'col border col-md-6'}}>
                    <p style={{fontSize:'15px', fontStyle:'italic'}}>Estimated Time of Arrival: </p>
                </div>
            </div>
            </div>

        )
    }
}

export default BusModal;


