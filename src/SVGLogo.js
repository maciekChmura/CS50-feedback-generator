import React from "react";
import styled from "styled-components";
import logo from "./images/chip.svg"

const SVG = styled.svg`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`
class SVGLogo extends React.Component {
  render() {
    return (
      <img src={logo} height="200" alt="feedback logo" />
    )
  }
}

export default SVGLogo;