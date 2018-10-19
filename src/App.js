import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";
import InputName from "./InputName";
import InputGender from "./InputGender";
import TextArea from "./TextArea";
import { database } from "./firebase";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      selectors: [
        {
          name: "Quality of work",
          checked: 0,
          used: false
        },
        {
          name: "test",
          checked: 0,
          used: false
        }
      ],
      generated: "",
      firebaseData: ""
    };
  }

  handleClick = (data, index) => {
    this.setState(state => ({
      selectors: state.selectors.map((selector, i) => {
        if (index === i) {
          return {
            name: selector.name,
            checked: data,
            used: selector.used
          };
        } else {
          return selector;
        }
      })
    }));
  };

  handleCheck = (data, index) => {
    this.setState(state => ({
      selectors: state.selectors.map((selector, i) => {
        if (index === i) {
          return {
            name: selector.name,
            checked: selector.checked,
            used: data
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

  handleGenerate = () => {
    this.setState({ generated: "generated feedback" });
  };

  handlePushData = () => {
    database.ref().set(data);
  };

  componentDidMount() {
    database.ref().on("value", snapshot => console.log(snapshot.val()));
  }

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
              handleCheck={data => this.handleCheck(data, index)}
              used={selector.used}
            />
          );
        })}
        <div>
          <button onClick={this.handlePushData}>push data</button>
        </div>
        <div>
          <button onClick={this.handleGenerate}>Generate</button>
        </div>
        <TextArea generated={this.state.generated} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
