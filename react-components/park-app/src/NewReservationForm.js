import React, { Component } from 'react';

export default class NewReservationForm extends Component {
    render() {
        return(
        <form>
            Name: <input type='text' name='name'></input>
            Date: <input type='text' name='date'></input>
            <input type='submit'></input>
        </form>
        )
    }
}