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

  handleAddReservation = reservation => {
    const { reservationsData } = this.state

    const currentAndNewlyAddedReservations = [ ...reservationsData, reservation]
    this.setState({
      reservationsData: currentAndNewlyAddedReservations
    })
  }

  render() {
    // Extracting reservationsData from this.state 
    const { reservationsData } = this.state
    return (
      <div className="form-and-res-cont">
        <div className="form-area">
          <NewReservationForm 
          reservationsData={reservationsData}
          handleAddReservation={this.handleAddReservation}
          />
        </div>
        <div className="res-area">
          <Reservations reservationsData={reservationsData} />
        </div>
      </div>
    );
  }

}

export default ReservationsContainer;
