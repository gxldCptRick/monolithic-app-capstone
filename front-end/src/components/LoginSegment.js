import React, { Component } from "react";
import "./LoginSegment.css";

export default class LoginSegment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onSubmit = e => {
    let { onSubmit: submitCallback } = this.props;
    e.preventDefault();
    submitCallback(this);
  };

  onUsernameChanged = ({ target: { value: username } }) =>
    this.setState({ username });

  onPasswordChanged = ({ target: { value: password } }) =>
    this.setState({ password });

  render() {
    let { title = "" } = this.props;
    let { username, password } = this.state;
    let titleParts = title.split(" ");
    let lastIndex = titleParts.length - 1;
    let nonHighlighted = titleParts
      .slice(0, lastIndex)
      .reduce((agg, next) => agg + " " + next);
    let highLightedPart = titleParts[lastIndex];
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h2 className="register-modal__title">
          {nonHighlighted} <span className="bold">{highLightedPart}</span>
        </h2>
        <div className="login-form__section">
          <label className="login-form__input-label" htmlFor="username">
            Username{" "}
          </label>
          <input
            name="username"
            className="login-form__input-field"
            type="text"
            value={username}
            onChange={this.onUsernameChanged}
          />
        </div>
        <div className="login-form__section">
          <label className="login-form__input-label" htmlFor="password">
            Password{" "}
          </label>
          <input
            className="login-form__input-field"
            type="password"
            name="password"
            value={password}
            onChange={this.onPasswordChanged}
          />
        </div>
        <input className="login-form__submit" type="submit" value="login" />
      </form>
    );
  }
}
