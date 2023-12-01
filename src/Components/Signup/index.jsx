import React, { Component } from "react";
import Form from "./Form";

const initValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class Signup extends Component {
  state = {
    values: initValues,
    agreement: false,
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleAgreement = (event) => {
    this.setState({ agreement: event.target.checked });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, isValid } = this.validate();
    if (isValid) {
      this.props.createUser(this.state.values);
      event.target.reset();
      this.setState({ values: initValues, agreement: false, errors: {} });
    } else {
      this.setState({ errors });
    }
  };
  validate = () => {
    const errors = {};
    const {
      values: { name, email, birthDate, password, gender },
    } = this.state;
    if (!name) {
      errors.name = "please provide your name";
    }
    if (!email) {
      errors.email = "please provide your email";
    }
    if (!password) {
      errors.password = "please provide your password";
    }
    if (!birthDate) {
      errors.birthDate = "please provide your date of birth";
    }
    if (!gender) {
      errors.gender = "please provide your gneder";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    // console.log(this.state.errors)
    // console.log(this.state.values)
    return (
      <div>
        <h1>Signup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          errors={this.state.errors}
          onChange={this.handleChange}
          handleAgreement={this.handleAgreement}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Signup;
