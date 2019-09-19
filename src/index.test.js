import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "./containers/App";

it("tests for index shallow rendering", () => {
  const logger = createLogger();
  // Create the Store(The object level source of truth, the state tree)

  //RootReducer
  const rootReducer = combineReducers({ searchRobots, requestRobots });
  // createStore(rootReducer, applyMiddleware)
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  console.log(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});
