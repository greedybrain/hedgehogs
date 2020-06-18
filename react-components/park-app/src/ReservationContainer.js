import React, { Component } from 'react';
import Reservations from './Reservations'
import NewReservationForm from './NewReservationForm';

class ReservationsContainer extends Component {

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
    return (
      <div>
        <NewReservationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Reservations data={this.state.data} />
      </div>
    );
  }

}

export default ReservationsContainer;
