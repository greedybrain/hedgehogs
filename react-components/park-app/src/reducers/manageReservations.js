export default function manageReservations(state = {
     reservations: []
}, action) {
     switch (action.type) {
          case 'ADD_RESERVATION':
               return {
                    ...state,
                    reservations: [...state.reservations, action.payload]
               }
          default:
               return state
     }
}

export function addReservation(name, date) {
     return {
          type: 'ADD_RESERVATION',
          payload: {
               name,
               date
          }
     }
}


