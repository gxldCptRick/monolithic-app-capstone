import React from "react";
import Form from "./Form";

export class AddressForm extends Form {
  renderForm() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="submit" value="Next (" />
      </form>
    );
  }
}
