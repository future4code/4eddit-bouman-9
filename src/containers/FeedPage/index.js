import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

const LoginWrapper = styled.form`
  width: 100%;
  height: 70vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class FeedPage extends Component {
  render() {
    return (
      <LoginWrapper>
        <Button type="submit"  onClick={this.props.goToPage} >feedpage</Button>
      </LoginWrapper>
    );
  }
}


function mapToDispatch(dispatch) {
  return{
    goToPage: () => dispatch(push(routes.signup)),
  }
}

export default connect(
  null,
  mapToDispatch)(FeedPage);
