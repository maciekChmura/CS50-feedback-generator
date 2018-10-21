import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTextAreaChange = event => {
    this.props.handleTextAreaChange(event.target.value);
  };

  render() {
    return (
      <textarea
        onChange={this.handleTextAreaChange}
        value={this.props.generated}
        className="textarea"
      />
    );
  }
}

export default TextArea;
