import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginSegment";

export default class Login extends Component {
  handleFormSubmit = ({ username, password }) => {};
  render() {
    return (
      <main className="flex">
        <div className="register-modal">
          <h2>
            New <span className="bold">Applicant</span>
          </h2>
          <p className="register-modal__description">
            Begin your Application for Admission to Neumont by creating a user
            account.
          </p>
          <Link className="register-modal__register-link">Register</Link>
        </div>
        <LoginForm onSubmit={this.handleFormSubmit} />
      </main>
    );
  }
}
