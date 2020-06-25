import React, { Component } from 'react';
import Reservations from './Reservations'
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

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      name: "",
      date: ""
    }
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/reservations")
      .then(res => res.json())
      .then(api => {
        this.setState({
          data: api
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, date } = this.state
    this.setState((currentState) => {
      return {
        data: [
          ...currentState.data,
          { name, date }
        ]
      }
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

//       <div>
//         <NewReservationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
//         <Reservations data={this.state.data} />

//       </div>
//     );

  }

}

export default ReservationsContainer;
