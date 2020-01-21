import React, { Component } from "react";
import styled from "styled-components";


const LoginWrapper = styled.form`
  width: 100%;
  height: 70vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class LoginPage extends Component {
  render() {
    return (
      <LoginWrapper>
        Oie
      </LoginWrapper>
    );
  }
}

export default LoginPage;
