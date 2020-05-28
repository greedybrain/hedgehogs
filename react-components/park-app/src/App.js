import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import NewReservationFrom from './NewReservationForm'
import reservations from './data'
import Reservations from './Reservations'

function App() {
  return (
    <div className="App">
      <Welcome />
      <NewReservationFrom />
      <Reservations data={reservations} />
    </div>
  );
}

export default App;
