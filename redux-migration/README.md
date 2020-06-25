# Refactoring a React App to use Redux

## Part 1: Conceptual questions
1. What are some benefits of using Redux's state management pattern in place of local (component-based) state management?
2. Define the following: store, action, reducer, dispatch
3. Explain how the above terms relate to each other in the context of a user triggering a browser event. In other words, what is the Redux pipeline or flow?

## Part 2: Coding Challenge - Redesigning Components in your Reservation App
* Note: this challenge is a continuation of the previous week's. Last week you should have taken inventory of your components, decided which should be designated as container and which should be designated as functional, and refactored accordingly. If you do not have a project with a few components already built, borrow this solution as starter code: https://github.com/Captainmango/foxes/tree/react-components/react-components/react-components
* The state park that has hired you to build their front end reservation system just heard of yet another cool technology called Redux, and they want it used in their app (customers changing their specifications mid-project?! That never happens...). Your task is to refactor the existing app to use Redux.
1. Add everything you need to your codebase to begin to start communicating with Redux.
2. Change where your `reservations` data is stored. Currently it should be inside a state object in the `<ReservationsContainer/>` component. Move it to the Redux store. Tell your container comopnent to connect to the store, map the reservations data to props, and refactor your container code to reflect this change.
3. Refactor your new reservation form submit event callback to, rather than update the local state, dispatch an action to the store to add a new reservation. Then, create the reducer that will update the store with the dispatched action.
* If you'd like, use [this](https://github.com/typicode/json-server#getting-started) tool to spin up a quick REST API backend server with some fake reservation data.