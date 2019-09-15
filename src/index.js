import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducer";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import "./index.css";
import App from "./containers/App";

import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

const logger = createLogger();
// Create the Store(The object level source of truth, the state tree)

//RootReducer
const rootReducer = combineReducers({searchRobots, requestRobots});
// createStore(rootReducer, applyMiddleware)
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware)); 

//Create a store using the RootReducer, but since
// we just one reducer for now we are going to use that as the rootReducer.

//Provider is used to pass the 'STORE' to all the lower level components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
