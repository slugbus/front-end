import React from 'react';
import '../index.css'


class BusModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    returnURL(stopName) {
        console.log("HEERERERERE", this)
    
    }

   


    render() {

        return (
            <div >
                <div className="col">
                  


                    <div style={{ fontSize: '25px', fontStyle: 'italic', width: '100%', backgroundColor: "grey" }}></div>
                    <div className="border row align-items-center justify-content-between ">
                        <p className="" style={{ fontSize: '25px', fontStyle: 'bold', marginTop: '10px' }}>{this.props.selectedStop.id}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm border">
                            <p style={{ fontSize: '15px' }}>Activity of Bus Stop: </p>
                        </div>
                        <div className="col-sm border">
                            <p style={{ fontSize: '15px' }}> Next Bus ETA:</p></div>

                    </div>


                    <div style={{}} className="row">
                        <button

                            className="btn btn-primary btn-large btn-block">Street View</button>

                    </div>
                </div>


            </div>

        )
    }
}

export default BusModal;


