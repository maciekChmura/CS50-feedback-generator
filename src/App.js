import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Selector from "./Selector";
import InputName from "./InputName";
import InputGender from "./InputGender";
import TextArea from "./TextArea";
import { database } from "./firebase";
import data from "./data";
import pickRandomFromArray from "./pickRandomFromArray";
import GenerateButton from "./Generate";
import Synonyms from "./Synonyms";
import SVGLogo from "./SVGLogo"

const MainGridWrapper = styled.div`
  /* margin: 16px; */
  display: grid;
  grid-template-columns: 480px 40px 480px;
  grid-template-rows: 260px 700px;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-template-columns: 260px 740px; 
  grid-template-rows: 260px;
`

const Header = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`

const LeftColumnWrapper = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-rows: 50px 860px;
  /* grid-template-columns: 1fr; */
`;

const InputButtonsWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  width: 480px;
  display: flex;
  justify-content: space-between;
`;

const SelectorsWrapper = styled.div`
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
`;

const RightColumnWrapper = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-template-rows: 50px 400px 200px 100px;
`;

const GenerateButtonsWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  width: 480px;
  display: flex;
  justify-content: space-between;
`;

const TextAreaWrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  width: 480px;
`;

const SynonymsWrapper = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  width: 480px;
  padding-top: 16px;
`;

const PushButton = styled.div`
  grid-row-start: 5;
  grid-row-end: 6;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      selectors: [
        {
          name: "professional skills",
          checked: "ok",
          used: true
        },
        {
          name: "quality of work",
          checked: "ok",
          used: false
        },
        {
          name: "attitude and dedication",
          checked: "ok",
          used: false
        },
        {
          name: "reliability",
          checked: "ok",
          used: false
        },
        {
          name: "cooperativeness",
          checked: "ok",
          used: false
        },
        {
          name: "adaptability",
          checked: "ok",
          used: false
        },
        {
          name: "communication",
          checked: "ok",
          used: false
        },
        {
          name: "problem solving",
          checked: "ok",
          used: false
        },
        {
          name: "project planning",
          checked: "ok",
          used: false
        },
        {
          name: "work group management",
          checked: "ok",
          used: false
        },
        {
          name: "service to clients public",
          checked: "ok",
          used: false
        },
        {
          name: "performance planning",
          checked: "ok",
          used: false
        }
      ],
      generated: ""
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
            let generatedText = "";
            if (!this.checkInput()) {
              generatedText = "Please provide name and gender.";
            } else {
              generatedText = textArray.join(" ");
            }
            this.setState({ generated: generatedText });
          });
      }
    }
  };

  handleReset = () => {
    this.setState({ generated: "" });
  };

  handleTextAreaChange = data => {
    this.setState({ generated: data });
  };

  handlePushData = () => {
    database.ref().set(data);
  };

  checkInput = () => {
    return !!this.state.name && !!this.state.gender;
  };

  render() {
    return (
      <MainGridWrapper>
        <HeaderWrapper>
          <SVGLogo>logo</SVGLogo>
          <Header>header</Header>
        </HeaderWrapper>
        <LeftColumnWrapper>
          <InputButtonsWrapper>
            <InputName
              name={this.state.name}
              handleNameChange={this.handleNameChange}
            />
            <InputGender
              className="input-gender"
              handleGenderChange={this.handleGenderChange}
            />
          </InputButtonsWrapper>
          <SelectorsWrapper>
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
          </SelectorsWrapper>
        </LeftColumnWrapper>
        <RightColumnWrapper>
          <GenerateButtonsWrapper>
            <GenerateButton
              handleGenerate={this.handleGenerate}
              inputStatus={this.checkInput()}
            />
            {/* <div className="test">
              <button onClick={this.handleReset}>Reset</button>
            </div> */}
          </GenerateButtonsWrapper>
          <TextAreaWrapper>
            <TextArea
              generated={this.state.generated}
              handleTextAreaChange={this.handleTextAreaChange}
            />
          </TextAreaWrapper>
          <SynonymsWrapper>
            <Synonyms />
          </SynonymsWrapper>
          {/* <PushButton>
            <button onClick={this.handlePushData}>push data</button>
          </PushButton> */}
        </RightColumnWrapper>
      </MainGridWrapper>
    );
  }
}

render(<App />, document.getElementById("root"));
