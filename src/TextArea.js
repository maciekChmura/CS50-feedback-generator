import React from "react";
import styled from "styled-components";

const Text = styled.textarea`
  width: 480px;
  height: 400px;
`;

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTextAreaChange = event => {
    this.props.handleTextAreaChange(event.target.value);
  };

  render() {
    return (
      <Text
        onChange={this.handleTextAreaChange}
        value={this.props.generated}
        className="textarea"
      />
    );
  }
}

export default TextArea;
