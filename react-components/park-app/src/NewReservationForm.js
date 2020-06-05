import React from 'react';

// Arg/s passed in is a property extracted from props which was passed down to this component 
// Similarly => const { handleChange, handleSubmit } = this.props
const NewReservationForm = ({ handleChange, handleSubmit }) => {

  return(
    <form
      onSubmit={handleSubmit}>
      Name:
      <input
        onChange={handleChange}
        type='text'
        name='name' 
      />
      Date:
      <input
        onChange={handleChange}
        type='text'
        name='date' 
      />
      <input type='submit'></input>
    </form>
  )
}

export default NewReservationForm
