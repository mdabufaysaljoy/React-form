import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Input
          label="enter your name"
          name="name"
          error={this.props.errors.name}
          placeholder="faysal joy"
          value={this.props.values.name}
          onChange={this.props.onChange}
        />
        <Input
          label="enter your email"
          name="email"
          error={this.props.errors.email}
          placeholder="faysaljoy@gmail.com"
          value={this.props.values.email}
          onChange={this.props.onChange}
        />
        <Input
          label="enter your passowrd"
          name="password"
          error={this.props.errors.password}
          type="password"
          placeholder="******"
          value={this.props.values.password}
          onChange={this.props.onChange}
        />
        <Input
          label="enter your birthDate"
          name="birthDate"
          error={this.props.errors.birthDate}
          type="date"
          value={this.props.values.birthDate}
          onChange={this.props.onChange}
        />
        <div className="form-check my-2 d-flex gap-5 justify-content-center">
          <label>
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Male"
              onChange={this.props.onChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Female"
              onChange={this.props.onChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Other"
              onChange={this.props.onChange}
            />
            Other
          </label>
          {this.props.errors.gender && (
            <div className="invalid-feedback d-block">
              {this.props.errors.gender}
            </div>
          )}
        </div>
        <div className="form-check my-2 form-switch">
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              name="agreement"
              checked={this.props.agreement}
              onChange={this.props.handleAgreement}
            />
            I Agree
          </label>
        </div>
        <button
          disabled={!this.props.agreement}
          className="btn btn-primary"
          type="submit"
        >
          Create User
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
