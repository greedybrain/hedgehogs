import React from 'react';

// Arg passed in is a property extracted from props which was passed down to this component 
// Similarly => const { reservations } = this.props
const Reservations = ({ reservationData }) => {

  const genRes = reservationData.map((res, index) => {
    return (
      <div key={index}> {res.name} | {res.date} </div>
    )
  })

  return (
    < >
      {genRes}
    </>
  )
}

export default Reservations;