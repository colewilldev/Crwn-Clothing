import React from "react";
import { FormInput } from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    //obj destructing is taking the values from the form input
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            onChange={this.handleChange}
            label='email'
          />
          <label htmlFor=''>email</label>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            onChange={this.handleChange}
            label='password'
          />
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}
export default SignIn;