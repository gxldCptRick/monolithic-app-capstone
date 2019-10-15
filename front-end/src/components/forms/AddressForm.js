import React from "react";
import Form from "./Form";
import { states } from "../../configurations/States";

export default class AddressForm extends Form {
  createDefaultState() {
    return { lineOne: "", lineTwo: "", city: "", state: "" };
  }

  isStateValid() {
    return false;
  }

  renderForm() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {[
          {
            propName: "lineOne",
            displayName: "Line 1",
            required: true,
            pattern:
              "((\\d{1,4} ?[nNwWsSeE]? \\d{0,4} [nNwWsSeE]?)|( ?[a-zA-z]+)+)"
          },
          {
            propName: "lineTwo",
            displayName: "Line 2",
            pattern:
              "((\\d{1,4} ?[nNwWsSeE]? \\d{0,4} ?[nNwWsSeE]?)|( ?[a-zA-z]+)+)"
          },
          {
            propName: "city",
            displayName: "City",
            required: true
          },
          {
            propName: "state",
            displayName: "State",
            required: true,
            type: "selection",
            selectionOptions: states.map(s => ({ value: s, display: s, id: s }))
          }
        ].map(this.createFieldDisplayForGivenPropName)}
        <input type="submit" value="Next (Helpful Information)" />
      </form>
    );
  }
}
