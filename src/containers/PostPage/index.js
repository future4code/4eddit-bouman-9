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


class PostPage extends Component {
  render() {
    return (
      <LoginWrapper>
        postpage
      </LoginWrapper>
    );
  }
}

export default PostPage;
