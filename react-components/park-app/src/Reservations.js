import React from 'react';


const Reservations = props => props.data.map((res, index) => <div key={index}>{res.name} | {res.date}</div>) 

export default Reservations

