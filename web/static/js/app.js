import 'css/app.css';

import "phoenix_html"
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting";

ReactDOM.render(
  <Greeting name="World"/>,
  document.getElementById("example")
);
