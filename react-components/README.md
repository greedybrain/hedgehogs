# React Components

## Part 1: Conceptual questions
1. Why use a frontend framework?
2. What are React Components? How do they dictate how we use our code and architect our frontends? What are they made of (what is their data type)?

## Part 2: Coding Challenge - Build a React App
* A state park has hired you to build their front end reservation system so its employees can more easily manage campsite reservations. They are leaning toward using React to stay current with the times, but they need to see a proof of concept of how React can be useful for their frontend. They are tasking you with building a React App to model their reservation system with JUST ENOUGH functionality so that they can understand the usefulness of using a framework like this.
1. Create a brand new React app scaffold using the generator or from scratch
2. Build a component `<Welcome/>` that displays a welcome message to the user of the app. Render this component in the top level `<App/>` component.
3. Build a component `<NewReservationForm/>` that displays a very basic HTML form for creating a campsite reservation (name and date are enough for input fields). Render this component in the `<App/>` component after `<Welcome/>`.
4. Build a component `<Reservations/>` that displays all of the current campsite reservations. To showcase to them how you would use data in this component, create a constant that holds an array of fake reservation data (name and date). Iterate through this data and display the name and date for each reservation in an ordered list. Render this component after the `<NewReservationForm/>` component in `<App/>`.
5. Encapsulate the code used for displaying a single reservation into its own component, `<Reservation/>`, and then render it from the `<Reservations/>` component. How will you pass reservation information from the `<Reservations/>` component to the `<Reservation/>` component?
6. Wrap all your reservation-related code into a `<ReservationsContainer/>` component to be rendered in `<App/>`.
