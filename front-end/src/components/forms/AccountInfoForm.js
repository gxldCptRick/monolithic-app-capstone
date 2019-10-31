import React from "react";
import Form from "./Form";
import {
  isValidPassword,
  isValidUsername,
  isValidName
} from "../../buisness_rules/Rules";

import "./form.css";

export default class AccountInfoForm extends Form {
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
    let {
      firstName,
      lastName,
      username,
      password,
      passwordConfirmation
    } = this.state;
    return (
      isValidName(firstName).success &&
      isValidName(lastName).success &&
      isValidPassword(password).success &&
      isValidUsername(username).success &&
      password === passwordConfirmation
    );
  }

  generateError() {
    let {
      firstName,
      lastName,
      username,
      password,
      passwordConfirmation
    } = this.state;
    let firstNameCheck = isValidName(firstName);
    if (!firstNameCheck.success)
      return firstNameCheck.message.replace("name", "first name");
    let lastNameCheck = isValidName(lastName);
    if (!lastNameCheck.success)
      return lastNameCheck.message.replace("name", "last name");
    let usernameCheck = isValidUsername(username);
    if (!usernameCheck.success) return usernameCheck.message;
    let passwordCheck = isValidPassword(password);
    if (!passwordCheck.success) return passwordCheck.message;
    if (password !== passwordConfirmation) return "Passwords did not match";
  }

  renderForm() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>Account Information</h2>
        {[
          {
            required: true,
            minLength: "2",
            pattern: "[A-Z]+[a-z'\\-]+",
            propName: "firstName",
            displayName: "First Name"
          },
          {
            required: true,
            minLength: "2",
            pattern: "[A-Z]+[a-z'\\-]+",
            propName: "lastName",
            displayName: "Last Name"
          },
          {
            required: true,
            minLength: "5",
            pattern: "[A-Za-z'\\-]+",
            propName: "username",
            displayName: "Username"
          },
          {
            type: "password",
            required: true,
            minLength: "5",
            propName: "password",
            displayName: "Password"
          },
          {
            type: "password",
            required: true,
            minLength: "5",
            propName: "passwordConfirmation",
            displayName: "Confirm Password"
          }
        ].map(this.createFieldDisplayForGivenPropName)}
        <input type="submit" value="Save and Continue (Contact Information)" />
      </form>
    );
  }
}
