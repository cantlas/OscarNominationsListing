import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Main />
  </div>
);

render(<App />, document.getElementById("root"));
