import axios from 'axios';

const LOAD = 'GREETING/LOAD';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const loadGreeting = () => (dispatch) => axios.get('http://localhost:3000/api/v1/greetings').then(
  (response) => {
    dispatch({ type: LOAD, payload: response.data });
  },
);
