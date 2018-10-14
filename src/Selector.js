import React from "react";

class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="selector">
        <div className="container">
          <div className="child label">Quality of work</div>
          <div className="child button-parent">
            <input
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value="0"
            />
            <input
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value="1"
            />
            <input
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value="2"
              checked
            />
            <input
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value="3"
            />
            <input
              className="radio"
              type="radio"
              id="huey"
              name="drone"
              value="4"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Selector;
