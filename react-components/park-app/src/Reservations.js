import React from 'react';

// Arg/s passed in the function below is a property extracted from props which was passed down to this component – Similarly => const { reservations } = this.props
const Reservations = ({ reservationsData }) => { // Presentational/Stateless Component 

  const generateReservationsListing = reservationsData.map((res, index) => {
    return (
      // Adding unique key to each div generated to get rid of that annoying 'unique-key-required' warning
      <div
        className = "reservation-item animate__animated animate__zoomIn animate__faster"
        key={index}>
        {res.name} | {res.date}
      </div>
    )
  })

  return (
    // Generating list of divs containing name and date data returned by our map function 
    < >
      {generateReservationsListing}
    </>
  )
}

export default Reservations;