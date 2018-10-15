import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [0, 1, 2, 3, 4];
    this.state = {
      checked: 2
    };
  }
  handleClick = event => {
    this.setState({ checked: +event.target.value });
  };

  render() {
    return (
      <form className="selector">
        <p>{this.state.checked}</p>
        <div className="container">
          <div className="child label">Quality of work</div>
          <div className="child button-parent" onChange={this.handleClick}>
            {this.inputs.map(value => (
              <input
                key={value}
                className="radio"
                type="radio"
                id="huey"
                name="drone"
                value={value}
                defaultChecked={this.state.checked === value}
              />
            ))}
          </div>
        </div>
      </form>
    );
  }
}

export default Selector;
