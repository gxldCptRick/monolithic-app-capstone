import React from "react";
import { Redirect } from "react-router-dom";
import Form from "./Form";

import "./form.css";

export default class AccountInfoForm extends Form {
  constructor(props) {
    super(props);
    let json = localStorage.getItem("account");
    let savedState = JSON.parse(json);
    let defaultState = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      moveNext: false
    };
    Object.assign(defaultState, savedState);
    this.state = defaultState;
  }

  isStateValid() {
    return true;
  }

  generateError() {
    return "error";
  }

  onFormSubmit = e => {
    e.preventDefault();
    let { onSubmit } = this.props;
    if (this.isStateValid()) {
      onSubmit(this.state);
      this.setState({ moveNext: true });
    } else {
      alert(this.generateError());
    }
  };

  willMoveNext() {
    return this.isStateValid() && this.state.moveNext;
  }

  render() {
    console.log("updated");
    return this.willMoveNext() ? (
      <Redirect to="contact" />
    ) : (
      <form onSubmit={this.onFormSubmit}>
        <h2>Account Information</h2>
        {[
          this.createFieldDisplayForGivenPropName({
            required: true,
            minLength: "2",
            pattern: "[A-Z]+[a-z'\\-]+",
            propName: "firstName",
            displayName: "First Name"
          }),
          this.createFieldDisplayForGivenPropName({
            required: true,
            minLength: "2",
            pattern: "[A-Z]+[a-z'\\-]+",
            propName: "lastName",
            displayName: "Last Name"
          }),
          this.createFieldDisplayForGivenPropName({
            required: true,
            minLength: "5",
            pattern: "[A-Za-z'\\-]+",
            propName: "username",
            displayName: "Username"
          }),
          this.createFieldDisplayForGivenPropName({
            type: "password",
            required: true,
            minLength: "5",
            propName: "password",
            displayName: "Password"
          }),
          this.createFieldDisplayForGivenPropName({
            type: "password",
            required: true,
            minLength: "5",
            propName: "passwordConfirmation",
            displayName: "Confirm Password"
          })
        ]}
        <input type="submit" value="Save and Continue (Contact Information)" />
      </form>
    );
  }
}
