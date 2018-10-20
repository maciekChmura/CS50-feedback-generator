import React from "react";

class Generate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      if (!this.props.inputStatus) {
        return (
          <div>
            <button onClick={this.props.handleGenerate} disabled>
              Generate
            </button>
            <span>Please provide name and gender</span>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.props.handleGenerate}>Generate</button>
          </div>
        );
      }
    }
  }
}

export default Generate;
