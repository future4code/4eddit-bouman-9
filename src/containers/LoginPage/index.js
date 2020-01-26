import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {postLogin} from "./../../actions/loginAction"
import { routes } from "../Router";
import { push } from "connected-react-router";

const loginForm = [
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
    select:false    
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required:true,
    select:false   
  }
];

const LoginWrapper = styled.form`
  width: 100%;
  height: 70vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{},
    };
  }

  handleFieldChange = event => {
    const {name,value} = event.target
    this.setState({
      form: {...this.state.form, [name]: value} });
  };

  handleOnSubmit = event =>{
    event.preventDefault();
    this.props.loginDispatch(this.state.form)
  };

  render() {
    return (
      <LoginWrapper onSubmit={this.handleOnSubmit}>
        {loginForm.map(input => (
          <div key={input.name}>
            <TextField
              style={{width:"200px", margin:"15px 0 0 5px"}}
              onChange={this.handleFieldChange}
              select={input.select}
              name={input.name}
              type={input.type}
              label={input.label}
              value={this.state.form[input.name] || ""}
              required={input.required}
              inputProps={{ pattern:input.pattern}}
            />
          </div>
        ))}
        <Button type="submit" style={{marginTop:"20px"}} >Login</Button>      
        <Button style={{marginTop:"20px"}} onClick={this.props.goToSignupPage} >Signup</Button>
      </LoginWrapper>
    );
  }
}

function mapToDispatch(dispatch) {
  return {
    loginDispatch: (loginData) => dispatch(postLogin(loginData)),
    goToSignupPage: () => dispatch(push(routes.signup))
  }
}

export default connect(null, mapToDispatch)(LoginPage);
  
