import React from "react";
import Main from "./Pages/Main";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import { Provider } from "react-redux";

import store from "./Store";

library.add(faSpinner, faQuestionCircle);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
