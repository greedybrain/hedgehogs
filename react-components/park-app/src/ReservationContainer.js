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

  getState() {
    return this.state
  }

  handleAddReservation = reservation => {

    this.setState({
      reservationsData: [ ...this.getState().reservationsData, reservation]
    })

  }

  render() {
    const resData = this.getState().reservationsData
    return (
      <div className="form-and-res-cont">
        <div className="form-area">
          <NewReservationForm 
          reservationsData={resData}
          handleAddReservation={this.handleAddReservation}
          />
        </div>
        <div className="res-area">
          <Reservations reservationsData={resData} />
        </div>
      </div>
    );

  }

}

export default ReservationsContainer;
