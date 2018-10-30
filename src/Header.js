import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: right; */
  /* justify-content: flex-end; */
  /* justify-items: right; */
`;

const Main = styled.p`
  font-size: 100px;
  margin: 0;
  text-align: right;
`;

const Secnd = styled.p`
  font-size: 70px;
  margin-top: -30px;
  text-align: right;
`;

class Header extends React.Component {
  render() {
    return (
      <Flex>
        <Main>Feedback</Main>
        <Secnd>_generator</Secnd>
      </Flex>
    );
  }
}

export default Header;
