import React from "react";
import svgFace from "./svgFace";

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
      <form className="selector">
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
      </form>
    );
  }
}

export default Selector;
