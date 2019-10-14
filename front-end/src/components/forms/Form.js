import React, { Component } from "react";

export default class Form extends Component {
  createStateUpdateForPropName(propName) {
    return ({ target: { value } }) => {
      let updates = {};
      updates[propName] = value;
      this.setState(updates);
    };
  }

  createFieldDisplayForGivenPropName({
    propName,
    type = "text",
    displayName,
    required = false,
    ...rest
  }) {
    let propValue = this.state[propName];
    return (
      <div className="form__input-group" key={propName}>
        <label htmlFor={propName} className="for__field-label">
          {displayName} {required ? "*" : ""}
        </label>
        <input
          className="for__field-input"
          required={required}
          type={type}
          value={propValue}
          {...rest}
          onChange={this.createStateUpdateForPropName(propName)}
        />
      </div>
    );
  }
}
