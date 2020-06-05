import React, { Component } from 'react';
import Reservations from './Reservations';
import NewReservationForm from './NewReservationForm';
import reservations from './data'

// Top most level component as far as dealing with the inner workings of Reservations 
class ReservationsContainer extends Component { // Container/ Stateless Component
  constructor() {
    super()
    // Not too sure if it was a great idea to lift the state of the form inputs up to this component, but hey, it works
    this.state = {
      name: "",
      date: "",
      reservationsData: reservations
    }
  }

  handleChange = (event) => {
    // Getting input value based on name attribute - Thanks Alina 
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    // Destructuring the sugar-honey-ice-tea out of state
    const { name, date, reservationsData } = this.state 
    // Used spread operator to get initial reservations then adds new one upon form submission
    const currentAndNewlyAddedReservations = [...reservationsData, { name, date }]
    this.setState({
      reservationsData: currentAndNewlyAddedReservations
    })
    event.target.reset()
  }

  render() {
    // Extracting reservationsData from this.state 
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
