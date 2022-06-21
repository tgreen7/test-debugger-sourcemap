import "./index.css";

import React from "react";
import { render } from "react-dom";

import App from "./App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import {
  vectorEditorMiddleware,
  vectorEditorReducer,
} from "open-vector-editor";

const reducers = combineReducers({
  VectorEditor: vectorEditorReducer(),
});
const store = createStore(
  reducers,
  {},
  applyMiddleware(vectorEditorMiddleware)
);

function initApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#app")
  );
}

initApp();
