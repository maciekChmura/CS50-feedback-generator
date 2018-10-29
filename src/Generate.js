import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 300px;
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
