import React from "react";
import Form from "./Form";
import { generateYearsWithinFifty } from "../../configurations/Year";
import { listOfSources } from "../../configurations/HearUs";

export default class HelpfulForm extends Form {
  createDefaultState() {
    return {
      graduationYear: "",
      howTheyHeard: "",
      interest: "",
      usStatus: ""
    };
  }

  generateError() {
    return "Error!!";
  }

  isStateValid() {
    return false;
  }

  renderForm() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>Helpful Information</h2>
        {[
          {
            propName: "graduationYear",
            displayName: "What Year did you graduate high school?",
            required: true,
            type: "selection",
            selectionOptions: generateYearsWithinFifty()
          },
          {
            propName: "howTheyHeard",
            displayName: "How did you hear about us?",
            required: true,
            type: "selection",
            selectionOptions: listOfSources
          },
          {
            propName: "interest",
            displayName: "What Degree are you interested?",
            required: true,
            type: "selection",
            selectionOptions: [
              "BS in Computer Science",
              "BS in Technology Management",
              "BS in Web Development",
              "BS in Game and Software Development",
              "BS in Information Systems",
              "BS in Software Development"
            ]
          }
        ].map(this.createFieldDisplayForGivenPropName)}
      </form>
    );
  }
}
