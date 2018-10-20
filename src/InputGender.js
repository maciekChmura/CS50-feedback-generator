import React from "react";

class InputGender extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGenderChange = e => {
    this.props.handleGenderChange(e.target.value);
  };

  render() {
    return (
      <form>
        Gender:
        <select
          onChange={this.handleGenderChange}
          onBlur={this.handleGenderChange}
        >
          <option value="">plese select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </form>
    );
  }
}

export default InputGender;
