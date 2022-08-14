import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>
);

reportWebVitals();
