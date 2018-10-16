import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";
import InputName from "./InputName";
import InputGender from "./InputGender";
import TextArea from "./TextArea";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      selectors: [
        {
          name: "Quality of work",
          checked: 0
        },
        {
          name: "test",
          checked: 0
        }
      ],
      generated: "sample text"
    };
  }

  handleClick = (data, index) => {
    this.setState(state => ({
      selectors: state.selectors.map((selector, i) => {
        if (index === i) {
          return {
            name: selector.name,
            checked: data
          };
        } else {
          return selector;
        }
      })
    }));
  };

  handleNameChange = data => {
    this.setState({ name: data });
  };

  handleGenderChange = data => {
    this.setState({ gender: data });
  };

  render() {
    return (
      <div>
        <InputName
          name={this.state.name}
          handleNameChange={this.handleNameChange}
        />
        {this.state.name}
        <InputGender handleGenderChange={this.handleGenderChange} />
        {this.state.gender}
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
        <TextArea generated={this.state.generated} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
