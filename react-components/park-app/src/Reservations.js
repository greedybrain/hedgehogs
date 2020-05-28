import React, { Component } from 'react';

export default class Reservations extends Component {
    genReservations = () =>  {
        // debugger
         return( this.props.data.forEach(res => {
            debugger
         })
         )
    }

    render() {
        return this.genReservations();
    }
}