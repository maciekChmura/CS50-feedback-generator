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
        <input
          type="text"
          onChange={this.handleNameChange}
          value={this.props.name}
          placeholder="Name"
        />
      </form>
    );
  }
}

export default InputName;
