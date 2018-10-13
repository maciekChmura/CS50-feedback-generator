import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>czesc</div>;
  }
}

render(<App />, document.getElementById("root"));
