import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
      selectors: [
        {
          name: "Quality of work",
          checked: 0
        },
        {
          name: "test",
          checked: 0
        }
      ]
    };
  }

  handleClick = (data, index) => {
    this.setState(state => {
      state.selectors.map((selector, i) => {
        if (index === i) {
          return (selector.checked = data);
        } else {
          return selector;
        }
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.selectors.map((selector, index) => {
          return (
            <Selector
              key={selector.name}
              name={selector.name}
              checkedRadio={selector.checked}
              handleClick={data => this.handleClick(data, index)}
            />
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
