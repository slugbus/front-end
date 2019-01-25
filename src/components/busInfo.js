import React from 'react';
import { innerdata } from '../busData/inner'
import { outerdata } from '../busData/outer'


class BusInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 36.990790,
                lng: -122.058555,

            },
            zoom: 15,
            innerstops: [innerdata],
            outerstops:[outerdata]
        }
    }


    render() {
        return (
           <h1>test test</h1>
        )
    }
}

export default BusInfo;


