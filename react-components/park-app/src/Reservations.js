import React, {Component} from 'react';
import reservations from './data.js';


export default class Reservations extends Component {
  constructor() {
    super()
    this.state = {
      data: reservations
    }
  }

  genReservations = () => {
    return (this.state.data.map(res => {
      return (
        <div>
          {res.name} | {res.date}
        </div>
      )
    }))
  }

  render() {
    return this.genReservations();
  }
}
