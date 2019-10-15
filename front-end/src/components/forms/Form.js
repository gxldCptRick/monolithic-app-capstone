import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UndefinedError extends Error {
  constructor() {
    super("Not Implemented Error");
  }
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    let savedState = props.saved ? localStorage.getItem(props.saved) : "";
    let parsedState = JSON.parse(savedState);
    this.state = Object.assign(parsedState, this.createDefaultState(), {
      moveNext: false,
      movePrevious: false
    });
  }

  createStateUpdateForPropName(propName) {
    return ({ target: { value } }) => {
      let updates = {};
      updates[propName] = value;
      this.setState(updates);
    };
  }

  createDefaultState() {
    throw new UndefinedError();
  }

  renderForm() {
    throw new UndefinedError();
  }

  generateError() {
    throw new UndefinedError("not implemented yet");
  }

  isStateValid() {
    throw new UndefinedError();
  }

  render() {
    let { next, previous } = this.props;
    let { moveNext, movePrevious } = this.state;
    if (moveNext) return <Redirect to={next} />;
    if (movePrevious) return <Redirect to={previous} />;
    return this.renderForm();
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

  onMovePrevious = e => {
    this.setState({ movePrevious: true });
  };

  createFieldDisplayForGivenPropName({
    propName,
    displayName,
    type = "text",
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
