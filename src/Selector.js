import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [
      "poor",
      "needs improvement",
      "meets requirements",
      "exceeds requirements",
      "outstanding"
    ];
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
          {this.inputs.map(value => (
            <input
              key={value}
              className="radio"
              type="radio"
              name="a"
              value={value}
              defaultChecked={this.props.checkedRadio === value}
              disabled={!this.props.used}
            />
          ))}
        </div>
      </form>
    );
  }
}

export default Selector;
