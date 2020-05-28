# React Components, Continued

## Part 1: Conceptual questions
1. What is state in React?
2. What is the difference between props and state? When should one or the other be used?

## Part 2: Coding Challenge - Adding Functionality to your Reservation App
* Note: this challenge is a continuation of the previous week's. If you do not have a project with a few components already built, borrow this solution as starter code: https://github.com/Captainmango/foxes/tree/react-components/react-components/react-components
* A state park has hired you to build their front end reservation system so its employees can more easily manage campsite reservations. They were leaning toward using React for the frontend and last week hired you to prove its usefulness by building an application with basic presentational functionality. They are sold on the framework, and now want you to wire it up so someone could interact with it.
1. Think about where it might make sense to add state to this app. Which data will stay the same and which data will change?
2. Add an event listener to the NewReservationForm. When the form is submitted, an alert should pop up that says "thank you for creating a reservation." The `<Reservations/>` container should then be updated with the newly created reservation, along with its name, date, and site. (note: we are not talking to a separate api. we are handling data totally on the frontend)
3. If you haven't already, update your components to add and update state so that your form submit will trigger a re-rendering of your components and you will see the DOM change when you click to create a new reservation.
