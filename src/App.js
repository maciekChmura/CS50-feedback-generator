import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0
    };
  }

  handleClick = data => {
    this.setState({ checked: data });
  };

  render() {
    return (
      <div>
        <Selector
          checkedRadio={this.state.checked}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
