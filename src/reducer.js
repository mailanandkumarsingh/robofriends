import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

// Initial Store
const initialSearchState = {
  searchField: ""
};

export const searchRobots = (state = initialSearchState, action = {}) => {
  // console.log('What is action type ', action && action.type);
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialRobotState = {
  pendingState: false,
  robots: []
};

// This is going to be a Reducer that returns a function, which will then go via THunk middleware
// to resolve, it is a Higher Order Function
export const requestRobots = (state=initialRobotState, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {pendingState: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, pendingState: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {pendingState: false});
        default:
            return state;
    }
}
