import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <textarea value={this.props.generated} className="textarea" />;
  }
}

export default TextArea;
