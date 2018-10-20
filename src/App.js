import React from "react";
import { render } from "react-dom";
import Selector from "./Selector";
import InputName from "./InputName";
import InputGender from "./InputGender";
import TextArea from "./TextArea";
import { database } from "./firebase";
import data from "./data";
import pickRandomFromArray from "./pickRandomFromArray";
import Generate from "./Generate";

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
          used: false
        },
        {
          name: "attitude and dedication",
          checked: "meets requirements",
          used: false
        },
        {
          name: "reliability",
          checked: "meets requirements",
          used: false
        },
        {
          name: "cooperativeness",
          checked: "meets requirements",
          used: false
        },
        {
          name: "adaptability",
          checked: "meets requirements",
          used: false
        },
        {
          name: "communication",
          checked: "meets requirements",
          used: false
        },
        {
          name: "problem solving",
          checked: "meets requirements",
          used: false
        },
        {
          name: "project planning and implementation",
          checked: "meets requirements",
          used: false
        },
        {
          name: "work group management",
          checked: "meets requirements",
          used: false
        },
        {
          name: "service to clients public",
          checked: "meets requirements",
          used: false
        },
        {
          name: "performance planning",
          checked: "meets requirements",
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
    this.setState({ generated: "" });
    let textArray = [];
    const { name, gender } = this.state;

    for (let i = 0; i < this.state.selectors.length; i++) {
      const element = this.state.selectors[i];
      if (element.used === true) {
        database
          .ref(`/${element.name}/${element.checked}`)
          .on("value", snapshot => {
            const singleProperty = pickRandomFromArray(snapshot.val())
              .split(" ")
              .map(element => {
                if (element === "_name_") {
                  return name;
                } else if (element === "_gender_") {
                  return gender === "male" ? "his" : "her";
                } else {
                  return element;
                }
              })
              .join(" ");
            textArray.push(singleProperty);
            const generatedText = textArray.join(" ");
            this.setState({ generated: generatedText });
          });
      }
    }
  };

  handlePushData = () => {
    database.ref().set(data);
  };

  checkInput = () => {
    return !!this.state.name && !!this.state.gender;
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
        <InputGender handleGenderChange={this.handleGenderChange} />
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
        {/* <div>
          <button onClick={this.handlePushData}>push data</button>
        </div> */}
        <Generate
          handleGenerate={this.handleGenerate}
          inputStatus={this.checkInput()}
        />
        <TextArea generated={this.state.generated} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
