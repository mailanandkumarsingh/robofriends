import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearchField = text => {
    // console.log('What is the text ', text);
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
};
