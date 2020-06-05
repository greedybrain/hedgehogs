import React from 'react';

// Arg/s passed in the function below is a property extracted from props which was passed down to this component – Similarly => const { reservations } = this.props
const Reservations = ({ reservationsData }) => {

  const genRes = reservationsData.map((res, index) => {
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