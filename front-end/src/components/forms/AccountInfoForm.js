import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./form.css";

export default class AccountInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      moveNext: false
    };
  }

  generateOnValueChanged(propName) {
    return ({ target: { value } }) => {
      let newState = {};
      newState[propName] = value;
      this.setState(newState);
    };
  }

  isStateValid() {
    return false;
  }

  onFormSubmit = e => {
    e.preventDefault();
    let { onSubmit } = this.props;
    if (this.isStateValid()) {
      onSubmit(this.state);
    }
  };

  willMoveNext() {
    return false;
  }
  render() {
    let {
      firstName,
      lastName,
      username,
      password,
      passwordConfirmation
    } = this.state;
    return this.willMoveNext() ? (
      <Redirect to="contact" />
    ) : (
      <form onSubmit={this.onFormSubmit}>
        <h2>Account Information</h2>
        <div className="form__input-group">
          <label className="form__field-label" htmlFor="firstName">
            First Name *
          </label>
          <input
            className="for__field-input"
            required
            minLength="2"
            pattern="\\w+"
            name="firstName"
            value={firstName}
            onChange={this.generateOnValueChanged("firstName")}
          />
        </div>
        <div className="form__input-group">
          <label className="form__field-label" htmlFor="lastName">
            Last name *
          </label>
          <input
            className="for__field-input"
            required
            minLength="2"
            name="lastName"
            pattern="\\w+"
            value={lastName}
            onChange={this.generateOnValueChanged("lastName")}
          />
        </div>
        <div className="form__input-group">
          <label className="form__field-label" htmlFor="username">
            Username *
          </label>
          <input
            className="for__field-input"
            required
            minLength="5"
            name="username"
            pattern="\\w+"
            value={username}
            onChange={this.generateOnValueChanged("username")}
          />
        </div>
        <div className="form__input-group">
          <label className="form__field-label" htmlFor="password">
            Password *
          </label>
          <input
            className="for__field-input"
            required
            minLength="5"
            type="password"
            name="password"
            value={password}
            onChange={this.generateOnValueChanged("password")}
          />
        </div>
        <div className="form__input-group">
          <label className="form__field-label" htmlFor="passwordConfirmation">
            Confirm Password *
          </label>
          <input
            className="for__field-input"
            required
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={this.generateOnValueChanged("passwordConfirmation")}
          />
        </div>
        <input
          type="submit"
          value="Save and Continue (Contact Information)"
          disabled={!this.isStateValid()}
        />
      </form>
    );
  }
}
