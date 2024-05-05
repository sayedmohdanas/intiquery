import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";

import { reducers } from "./store/reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Create a root using createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));

// Render your app within the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
