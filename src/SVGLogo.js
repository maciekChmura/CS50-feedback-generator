import React from "react";
import styled from "styled-components";
import logo from "./images/chip.svg";

const IMG = styled.img`
  margin-left: 50px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;
class SVGLogo extends React.Component {
  render() {
    return <IMG src={logo} height="240" alt="feedback logo" />;
  }
}

export default SVGLogo;
