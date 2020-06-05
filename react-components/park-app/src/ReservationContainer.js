import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';

class ReservationsContainer extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <NewReservationForm handleSubmit={this.handleSubmit}/>
        <Reservations />
      </div>
    );
  }

}

export default ReservationsContainer;
