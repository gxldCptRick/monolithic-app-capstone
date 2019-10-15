import React from "react";
import Form from "./Form";

export default class ContactInfoForm extends Form {
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
          {
            propName: "phoneNumber",
            displayName: "Phone Number",
            type: "tel",
            pattern: "([0-9]{3}|\\([0-9]{3}\\)) ?-? ?[0-9]{3} ?-? ?[0-9]{4}",
            minLength: "10",
            title: "Please enter a phone number (ex. 909-212-2121)",
            required: true
          },
          {
            propName: "email",
            displayName: "Email",
            required: true,
            pattern:
              '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
            title: "Please enter an email (ex. example@example.com)"
          },
          {
            propName: "confirmEmail",
            displayName: "Confirm Email",
            required: true,
            pattern:
              '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
            title: "Please enter an email (ex. example@example.com)"
          }
        ].map(this.createFieldDisplayForGivenPropName)}
        <div className="flex flex-reverse-row">
          <input type="submit" value="Next Section (Address)" />
          <button onClick={this.onMovePrevious}>Back</button>
        </div>
      </form>
    );
  }
}
