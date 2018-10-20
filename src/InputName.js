import React from "react";

class InputName extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNameChange = e => {
    this.props.handleNameChange(e.target.value);
  };

  render() {
    return (
      <form>
        Name:
        <input
          type="text"
          onChange={this.handleNameChange}
          value={this.props.name}
          placeholder="Jack"
        />
      </form>
    );
  }
}

export default InputName;
