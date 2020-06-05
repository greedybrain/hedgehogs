import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';
import reservations from './data'

class ReservationsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reservationData: reservations,
      name: "",
      date: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, date, reservationData } = this.state
    const currentAndNewlyAddedReservations = [...reservationData, { name, date }]
    this.setState({
      reservationData: currentAndNewlyAddedReservations
    })
    event.target.reset()
  }

  render() {
    const { reservationData } = this.state
    return (
      <div>
        <NewReservationForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Reservations reservationData={reservationData} />
      </div>
    );
  }

}

export default ReservationsContainer;
