import React, { Component } from 'react';

// Arg/s passed in is a property extracted from props which was passed down to this component 
// Similarly => const { handleChange, handleSubmit } = this.props
class NewReservationForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      date: ''
    }
  }

  getProps() {

    return this.props

  }

  handleChange = (event) => {

    // Getting input value based on name attribute - Thanks Alina 
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = event => {

    event.preventDefault()
    
    this.getProps().handleAddReservation(this.state)

    event.target.reset()

  }

  render() {

    return (
      // Could we have left the handleChange call inside the form tag itself, instead of moving the call to each input (hmm)? 
      <form className="form"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <h2>Create a Reservation</h2>
        <input
          onChange={this.handleChange}
          type='text'
          name='name' 
          placeholder="Name"
        /><br/>
        <input
          onChange={this.handleChange}
          type='text'
          name='date' 
          placeholder="Date"
        /><br/ >
        <button className="sub-btn" type='submit'>Submit</button>
      </form>
    )

  }
}


export default NewReservationForm
