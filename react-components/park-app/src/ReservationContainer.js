import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';
import reservations from './data'

// Top most level component as far as dealing with the inner workings of Reservations 
class ReservationsContainer extends Component { // Container/ Stateful Component
  constructor() {

    super()

    this.state = {
      reservationsData: reservations
    }

  }

  get getState() {
    return this.state
  }

  handleAddReservation = reservation => {

    this.setState({
      reservationsData: [ ...this.getState.reservationsData, reservation]
    })

  }

  render() {

    // Extracting reservationsData from this.state 
    return (
      <div className="form-and-res-cont">
        <div className="form-area">
          <NewReservationForm 
          reservationsData={this.getState.reservationsData}
          handleAddReservation={this.handleAddReservation}
          />
        </div>
        <div className="res-area">
          <Reservations reservationsData={this.getState.reservationsData} />
        </div>
      </div>
    );

  }

}

export default ReservationsContainer;
