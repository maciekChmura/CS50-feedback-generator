import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [-2, -1, 0, 1, 2];
  }

  handleClick = event => {
    this.props.handleClick(+event.target.value);
  };

  render() {
    return (
      <form className="selector">
        <div className="child label">
          {this.props.name}: {this.props.checkedRadio}
        </div>
        <div className="child button-parent" onChange={this.handleClick}>
          {this.inputs.map(value => (
            <input
              key={value}
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value={value}
              defaultChecked={this.props.checkedRadio === value}
            />
          ))}
        </div>
      </form>
    );
  }
}

export default Selector;
