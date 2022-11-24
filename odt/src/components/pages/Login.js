// import { useState } from "react";
import React, { Component} from 'react';
import "../pages/Registration.css";
import FormInput from "../FormInput";
import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    console.log(this.state.credentials)
    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    )
    .catch( error => console.error(error))
    
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  render() {
  const inputs = [

    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Force Number should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  return (
    <div className="Registration">
      <form onSubmit={handleSubmit}>
        <h1>SIGN-IN</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
             value={this.state.credentials[input.name]}
             onChange={this.inputChanged}
          />
        ))}
        <button onClick={this.login} to='/landing'>Login</button>
        <h4>Are you registered? <Link to= "/registration">Register</Link></h4>
      </form>
    </div>
  );
};
}

export default Login;