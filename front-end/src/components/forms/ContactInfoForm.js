import React from "react";
import Form from "./Form";

export default class ContactInfoForm extends Form {
  constructor(props) {
    super({ ...props, next: "/address", previous: "/", saved: "contact" });
  }
  createDefaultState() {
    return {
      phoneNumber: "",
      email: "",
      confirmEmail: ""
    };
  }

  generateError() {
    return "Bad Bad Man!!";
  }

  isStateValid() {
    return false;
  }

  renderForm() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>Contact Information</h2>
        {[
          this.createFieldDisplayForGivenPropName({
            propName: "phoneNumber",
            displayName: "Phone Number",
            type: "tel",
            pattern: "([0-9]{3}|\\([0-9]{3}\\)) ?-? ?[0-9]{3} ?-? ?[0-9]{4}",
            minLength: "10",
            title: "Please enter a phone number (ex. 909-212-2121)",
            required: true
          }),
          this.createFieldDisplayForGivenPropName({
            propName: "email",
            displayName: "Email",
            required: true,
            pattern:
              '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
            title: "Please enter an email (ex. example@example.com)"
          }),
          this.createFieldDisplayForGivenPropName({
            propName: "email",
            displayName: "Email",
            required: true,
            pattern:
              '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
            title: "Please enter an email (ex. example@example.com)"
          }),
          this.createFieldDisplayForGivenPropName({
            propName: "confirmEmail",
            displayName: "Confirm Email",
            required: true,
            pattern:
              '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
            title: "Please enter an email (ex. example@example.com)"
          })
        ]}
        <input type="submit" value="Next Section (Address)" />
        <button onClick={this.onMovePrevious} title="Back(Account Info)" />
      </form>
    );
  }
}
