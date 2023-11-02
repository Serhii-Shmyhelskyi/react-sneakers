import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import "macro-css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
