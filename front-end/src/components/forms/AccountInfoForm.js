import React from "react";
import Form from "./Form";

import "./form.css";

export default class AccountInfoForm extends Form {
  constructor(props) {
    super({ ...props, next: "/contact", saved: "account" });
  }

  createDefaultState() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  isStateValid() {
    return true;
  }

  generateError() {
    return "error";
  }

  renderForm() {
    return (
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
