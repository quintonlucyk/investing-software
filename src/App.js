import React from "react";
import Main from "./Pages/Main";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner, faQuestionCircle);

function App() {
  return <Main />;
}

export default App;
