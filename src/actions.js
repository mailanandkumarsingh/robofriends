import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
  } from "./constants";

export const setSearchField = text => {
    // console.log('What is the text ', text);
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
};

//Higher order function
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({
            type: REQUEST_ROBOTS_SUCCESS,
            payload: users
        }))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
