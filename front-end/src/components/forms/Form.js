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
    this.state = Object.assign(this.createDefaultState(), parsedState, {
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

  async generateError() {
    return Promise.reject(new UndefinedError("not implemented yet"));
  }

  async isStateValid() {
    return Promise.reject(new UndefinedError("not implemented yet"));
  }

  render() {
    let { next, previous } = this.props;
    let { moveNext, movePrevious } = this.state;
    if (moveNext) return <Redirect to={next} />;
    if (movePrevious) return <Redirect to={previous} />;
    return this.renderForm();
  }

  setState(state, callback = () => console.log(this.state)) {
    super.setState(state, callback);
  }

  onFormSubmit = async e => {
    e.preventDefault();
    let { onSubmit } = this.props;
    try {
      if (await this.isStateValid()) {
        onSubmit(this.state);
        this.setState({ moveNext: true });
      } else {
        this.setState({ error: await this.generateError() });
      }
    } catch (error) {
      let { logger = console } = this.props;
      this.setState({ error }, () => logger.error(error));
    }
  };

  onMovePrevious = e => {
    this.setState({ movePrevious: true });
  };

  createFieldDisplayForGivenPropName = ({
    propName,
    displayName,
    type = "text",
    required = false,
    ...rest
  }) => {
    let propValue = this.state[propName];
    if (type === "selection") {
      let { selectionOptions } = rest;
      return (
        <select
          key={propName}
          value={propValue}
          onChange={this.createStateUpdateForPropName(propName)}
          required={required}
        >
          {selectionOptions.map(({ value, display, id }) => (
            <option key={id} value={value}>
              {display}
            </option>
          ))}
        </select>
      );
    }
    return (
      <div className="form__input-group" key={propName}>
        <label htmlFor={propName} className="form__field-label">
          {displayName} {required ? "*" : ""}
        </label>
        <input
          className="form__field-input"
          required={required}
          type={type}
          value={propValue}
          {...rest}
          onChange={this.createStateUpdateForPropName(propName)}
        />
      </div>
    );
  };
}
