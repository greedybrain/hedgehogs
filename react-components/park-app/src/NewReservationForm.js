import React, { Component } from 'react';

export default class NewReservationForm extends Component {

  constructor(){
    super()
    this.state = {
      name: "",
      date: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    render() {
        return(
        <form onChange={this.handleChange} onSubmit={this.props.handleSubmit}>
            Name: <input type='text' name='name'></input>
            Date: <input type='text' name='date'></input>
            <input type='submit'></input>
        </form>
        )
    }
}
