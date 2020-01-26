import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {postSignup} from "./../../actions/loginAction"

const signupForm = [
  {
    name: "userName",
    type: "text",
    label: "User Name",
    required: true,
    select: false
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    select: false   
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    select: false  
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    required: true,
    select: false  
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

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleFieldChange = event => {
    const {name,value} = event.target
    this.setState({
      form: {...this.state.form, [name]: value} });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const {password, confirmPassword} = this.state.form;
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      this.props.signupDispatch(this.state.form)
    }
  };

  render() {
    return (
      <LoginWrapper onSubmit={this.handleOnSubmit}>
        {signupForm.map(input => (
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
        <Button type="submit" style={{marginTop:"20px"}} >Create</Button>      
      </LoginWrapper>
    );
  }
}

function mapToDispatch(dispatch) {
  return {
    signupDispatch: (signupData) => dispatch(postSignup(signupData))
  }
}

export default connect(null, mapToDispatch)(SignupPage);