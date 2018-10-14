import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Selector />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
