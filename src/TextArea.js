import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <textarea className="textarea">{this.props.generated}</textarea>;
  }
}

export default TextArea;
