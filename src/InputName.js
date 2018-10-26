import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 240px;
  margin-right: 10px;
`;

class InputName extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNameChange = e => {
    this.props.handleNameChange(e.target.value);
  };

  render() {
    return (
      <Input
        type="text"
        onChange={this.handleNameChange}
        value={this.props.name}
        placeholder="Name"
      />
    );
  }
}

export default InputName;
