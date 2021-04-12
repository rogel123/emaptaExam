import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(allReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
