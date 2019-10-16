import React from "react";
import Form from "./Form";
import { states } from "../../configurations/States";

export default class AddressForm extends Form {
  createDefaultState() {
    return { lineOne: "", lineTwo: "", city: "", state: "", zipCode: "" };
  }

  isStateValid() {
    return true;
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
              "(([0-9]{1,4} ?[nNwWsSeE] [0-9]{0,4} ?[nNwWsSeE]?)|( ?[a-zA-z]+)+)"
          },
          {
            propName: "lineTwo",
            displayName: "Line 2",
            pattern:
              "(([0-9]{1,4} ?[nNwWsSeE] [0-9]{0,4} ?[nNwWsSeE]?)|( ?[a-zA-z]+)+)"
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
          },
          {
            propName: "zipCode",
            displayName: "Postal Code",
            required: true,
            pattern: "[0-9]{5} ?-? ?([0-9]{4})?"
          }
        ].map(this.createFieldDisplayForGivenPropName)}
        <input type="submit" value="Next (Helpful Information)" />
      </form>
    );
  }
}
