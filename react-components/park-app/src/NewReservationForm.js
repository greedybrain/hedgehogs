import React, { Component } from 'react';

export default class NewReservationForm extends Component {

  render() {
    return(
      <form
        onChange={this.props.handleChange}
        onSubmit={this.props.handleSubmit}>
        Name:
        <input
          type='text'
          name='name' 
        />
        Date:
        <input
          type='text'
          name='date' 
        />
        <input type='submit'></input>
    </form>
    )
    }
}
