import React from 'react';


const NewReservationForm = props => {
  
    return (
    <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
        Name: <input type='text' name='name'></input>
        Date: <input type='text' name='date'></input>
        <input type='submit'></input>
    </form>
    )
}

export default NewReservationForm

    

