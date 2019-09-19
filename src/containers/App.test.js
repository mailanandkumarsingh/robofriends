import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "../reducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "./App";

it("tests for App shallow rendering", () => {
  const logger = createLogger();
  // Create the Store(The object level source of truth, the state tree)

  //RootReducer
  const rootReducer = combineReducers({ searchRobots, requestRobots });
  // createStore(rootReducer, applyMiddleware)
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
  const wrapper = shallow(<App store={store} searchText=""/>);
  // console.log(wrapper.debug());
  // console.log("THISSSSS ",wrapper.props().children.props.searchText);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props().children.props.searchText).toEqual("");
  // wrapper.props().onSearchFieldChange.("hello");
});

