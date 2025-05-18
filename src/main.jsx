import { render } from "preact";
import React from "react";
import App from "./app.jsx";
import "./index.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("app")
);
