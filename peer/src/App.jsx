import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import DogImage from "host/DogImage";
import DogCaption from "peer/DogCaption";

const App = () => (
  <div>
    <div>This is a cute dog.</div>
    <DogImage />
    <DogCaption name="Sally" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
