import {CHANGE_SEARCHFIELD}from './constants';

// Initial Store
const initialState = {
    searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
    console.log('What is action type ', action && action.type);
    switch(action.type){
        case CHANGE_SEARCHFIELD: 
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}