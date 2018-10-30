import React from "react";
import styled from "styled-components";
import svgFace from "./svgFace";
import CheckBox from "./CheckBox";

const SelectorForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  width: 440px;
  margin-bottom: 8px;

  .child {
    flex: none;
    height: 46px;
  }

  .label {
    width: 180px;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .picked-selector-value {
    font-size: 90%;
  }

  .button-parent {
    display: flex;
    width: 220px;
  }

  .unacceptable,
  .low,
  .ok,
  .good,
  .outstanding {
    width: 1px;
    height: 1px;
  }

  svg {
    fill: rgb(105, 105, 105);
    /* height: 3.6rem;
    width: 3rem;
    margin: 0.2rem; */
    /* width: 20px; */
    height: 40px;
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  input[type="radio"] + svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    width: 46px;
  }

  input + svg {
    cursor: pointer;
  }

  input[class="outstanding"]:hover + svg,
  input[class="outstanding"]:checked + svg,
  input[class="outstanding"]:focus + svg {
    fill: rgb(58, 77, 163);
  }

  input[class="good"]:hover + svg,
  input[class="good"]:checked + svg,
  input[class="good"]:focus + svg {
    fill: rgb(71, 167, 209);
  }

  input[class="ok"]:hover + svg,
  input[class="ok"]:checked + svg,
  input[class="ok"]:focus + svg {
    fill: rgb(78, 215, 186);
  }

  input[class="low"]:hover + svg,
  input[class="low"]:checked + svg,
  input[class="low"]:focus + svg {
    fill: rgb(242, 140, 119);
  }

  input[class="unacceptable"]:hover + svg,
  input[class="unacceptable"]:checked + svg,
  input[class="unacceptable"]:focus + svg {
    fill: rgb(237, 87, 180);
  }

  input:disabled + svg,
  input:disabled:checked + svg,
  input:disabled:hover + svg {
    fill: rgba(85, 85, 85, 0.4);
  }
`;

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
        <CheckBox onChange={this.handleCheck} checked={this.props.used} />
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
