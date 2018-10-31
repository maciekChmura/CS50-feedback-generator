import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 212px;
`;

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
        <Select
          onChange={this.handleGenderChange}
          onBlur={this.handleGenderChange}
        >
          <option value="">Please pick gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Select>
      </form>
    );
  }
}

export default InputGender;
