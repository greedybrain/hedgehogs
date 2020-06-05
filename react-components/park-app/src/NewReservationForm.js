import React from 'react';

// Arg/s passed in is a property extracted from props which was passed down to this component 
// Similarly => const { handleChange, handleSubmit } = this.props
const NewReservationForm = ({ handleChange, handleSubmit }) => { // Presentational/ Stateless Component 

  return (
    // Could we have left the handleChange call inside the form tag itself, instead of moving the call to each input (hmm)? 
    <form className="form"
      onChange={handleChange}
      onSubmit={handleSubmit}>
      <input
        type='text'
        name='name' 
        placeholder="Name"
      /><br/>
      <input
        type='text'
        name='date' 
        placeholder="Date"
      /><br/ >
      <button className="sub-btn" type='submit'>Submit</button>
    </form>
  )
}

export default NewReservationForm
