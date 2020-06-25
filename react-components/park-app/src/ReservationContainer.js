import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';
import { connect } from 'react-redux'

// Top most level component as far as dealing with the inner workings of Reservations 
class ReservationsContainer extends Component { // Container/ Stateful Component

  render() {
    const { reservations } = this.props
    return (
      <div className="form-and-res-cont">
        <div className="form-area">
          <NewReservationForm 
          reservations={reservations}
          />
        </div>
        <div className="res-area">
          <Reservations reservations={reservations} />
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    reservations: state.reservations
  }
}

export default connect(mapStateToProps, {})(ReservationsContainer);
