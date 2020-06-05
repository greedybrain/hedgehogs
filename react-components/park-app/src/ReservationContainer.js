import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';
import reservations from './data'

class ReservationsContainer extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      reservationsData: reservations
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, date, reservationsData } = this.state
    const currentAndNewlyAddedReservations = [...reservationsData, { name, date }]
    this.setState({
      reservationsData: currentAndNewlyAddedReservations
    })
    event.target.reset()
  }

  render() {
    const { reservationsData } = this.state
    return (
      <div>
        <NewReservationForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Reservations reservationsData={reservationsData} />
      </div>
    );
  }

}

export default ReservationsContainer;
