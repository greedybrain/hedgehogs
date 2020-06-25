# React Types of Components

## Part 1: Conceptual questions
1. What is the distinction of Presentational vs Container components?
2. What is the distinction of Functional vs Class components?
3. Is there a correlation between the above two classification spectrums?

## Part 2: Coding Challenge - Redesigning Components in your Reservation App
* Note: this challenge is a continuation of the previous week's. Last week you should have created a controlled form and reconsidered where you are using state within your app. If you do not have a project with a few components already built, borrow this solution as starter code: https://github.com/Captainmango/foxes/tree/react-components/react-components/react-components
* A state park has hired you to build their front end reservation system so its employees can more easily manage campsite reservations. You have built a basic functioning app with a form for creating new reservations, component to display the reservations,  welcome message, and containr to hold all of these components. Now it's time to reconsider how you have architected your app by refactoring it into container, presentational, functional and class components.
1. Which components are good candidates for container components? Convert them if necessary.
2. Which components are good candidates for presentational components? Convert them if necessary. These components should not be managing state, and when possible should be written in the functional (rather than class) style.
3. Add a lifecycle method that will make a fetch request for the reservation data when the DOM first loads. Use [this](https://github.com/typicode/json-server#getting-started) tool to spin up a quick REST API backend server with some fake reservation data.