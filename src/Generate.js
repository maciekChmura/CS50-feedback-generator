import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 480px;
  background-color: #99E9DF;
  border-color: #4BD7C8;
  color: #000;
`;

class GenerateButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button onClick={this.props.handleGenerate}>Generate</Button>;
  }
}

export default GenerateButton;
