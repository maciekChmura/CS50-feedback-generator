import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";
import InputName from "./InputName";
import InputGender from "./InputGender";
import TextArea from "./TextArea";
import { database } from "./firebase";
import data from "./data";
import pickRandomFromArray from "./pickRandomFromArray";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      selectors: [
        {
          name: "professional skills",
          checked: "meets requirements",
          used: true
        },
        {
          name: "quality of work",
          checked: "meets requirements",
          used: true
        },
        {
          name: "attitude and dedication",
          checked: "meets requirements",
          used: true
        },
        {
          name: "reliability",
          checked: "meets requirements",
          used: true
        },
        {
          name: "cooperativeness",
          checked: "meets requirements",
          used: true
        },
        {
          name: "adaptability",
          checked: "meets requirements",
          used: true
        },
        {
          name: "communication",
          checked: "meets requirements",
          used: true
        },
        {
          name: "problem solving",
          checked: "meets requirements",
          used: true
        },
        {
          name: "project planning and implementation",
          checked: "meets requirements",
          used: true
        },
        {
          name: "work group management",
          checked: "meets requirements",
          used: true
        },
        {
          name: "service to clients public",
          checked: "meets requirements",
          used: true
        },
        {
          name: "performance planning",
          checked: "meets requirements",
          used: true
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
    const { name, gender } = this.state;
    let textArray = [];
    for (let i = 0; i < this.state.selectors.length; i++) {
      const element = this.state.selectors[i];
      if (element.used === true) {
        database
          .ref(`/${element.name}/${element.checked}`)
          .on("value", snapshot => {
            console.log(snapshot.val());
            textArray.push(pickRandomFromArray(snapshot.val()));
            const generatedText = textArray.join();
            this.setState({ generated: generatedText });
          });
      }
    }
  };

  handlePushData = () => {
    database.ref().set(data);
  };

  // componentDidMount() {
  //   database.ref().on("value", snapshot => console.log(snapshot.val()));
  // }

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
