import React from "react";
import styled from 'styled-components'
import svgFace from "./svgFace";

const SelectorForm = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 58px;
width: 500px;

.child {
  flex: none;

  height: 46px;
}

.label {
  width: 200px;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.picked-selector-value {
  font-size: 90%;
}

.button-parent {
  display: flex;
  width: 260px;
}

.unacceptable,
.low,
.ok,
.good,
.outstanding {
  width: 1px;
  height: 1px;
}

.textarea {
  min-height: 400px;
  min-width: 600px;
}

.synonyms-box {
  height: 320px;
  border: 0px;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 60px;
}

.synonyms-list-item {
  margin-left: 10px;
}
  svg {
  fill: rgb(105, 105, 105);
  height: 3.6rem;
  width: 3.6rem;
  margin: 0.2rem;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}

input[type="radio"] + svg {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

input + svg {
  cursor: pointer;
}

input[class="outstanding"]:hover + svg,
input[class="outstanding"]:checked + svg,
input[class="outstanding"]:focus + svg {
  fill: rgb(0, 109, 217);
}

input[class="good"]:hover + svg,
input[class="good"]:checked + svg,
input[class="good"]:focus + svg {
  fill: rgb(0, 204, 79);
}

input[class="ok"]:hover + svg,
input[class="ok"]:checked + svg,
input[class="ok"]:focus + svg {
  fill: rgb(232, 214, 0);
}

input[class="low"]:hover + svg,
input[class="low"]:checked + svg,
input[class="low"]:focus + svg {
  fill: rgb(229, 132, 0);
}

input[class="unacceptable"]:hover + svg,
input[class="unacceptable"]:checked + svg,
input[class="unacceptable"]:focus + svg {
  fill: rgb(239, 42, 16);
}

input:disabled + svg,
input:disabled:checked + svg,
input:disabled:hover + svg {
  fill: rgba(85, 85, 85, 0.4);
}
`

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = ["unacceptable", "low", "ok", "good", "outstanding"];
  }

  handleClick = event => {
    this.props.handleClick(event.target.value);
  };

  handleCheck = event => {
    this.props.handleCheck(event.target.checked);
  };

  render() {
    return (
      <SelectorForm>
        <input
          type="checkbox"
          onChange={this.handleCheck}
          checked={this.props.used}
        />
        <div className="child label">
          <span>{this.props.name}:</span>
          <span className="picked-selector-value">
            {this.props.used ? this.props.checkedRadio : ""}
          </span>
        </div>

        <div className="child button-parent" onChange={this.handleClick}>
          {this.inputs.map((value, index) => (
            <label key={value}>
              <input
                // key={value}
                className={value}
                type="radio"
                name="a"
                value={value}
                defaultChecked={this.props.checkedRadio === value}
                disabled={!this.props.used}
              />
              <svg viewBox="0 0 24 24">
                <path d={svgFace[index]} />
              </svg>
            </label>
          ))}
        </div>
      </SelectorForm>
    );
  }
}

export default Selector;
