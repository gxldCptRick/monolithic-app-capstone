import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "../components/forms/LoginSegment";
import "./LoginPage.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  handleFormSubmit = ({ username, password }) => {
    console.log("username:", username, ", password:", password);
  };
  render() {
    let { loggedIn } = this.state;
    return loggedIn ? (
      <Redirect to="/degree" />
    ) : (
      <main className="flex login-page-root">
        <h1 className="page-title">Welcome!</h1>
        <p className="page-description">
          Thank you for your interest in attending Neumont College of Computer
          Science. Use this portal to complete all the required steps for your
          application as well as your enrollment.{" "}
          <a href="https://www.neumont.edu/admissions">
            Go here for detailed admissions criteria, deadlines, and
            requirements.
          </a>
        </p>
        <div className="flex login-page">
          <div className="register-modal">
            <h2 className="register-modal__title">
              New <span className="bold">Applicant</span>
            </h2>
            <p className="register-modal__description">
              Begin your Application for Admission to Neumont by creating a user
              account.
            </p>
            <Link
              className="register-modal__register-link"
              to="/apply/register"
            >
              Register
            </Link>
          </div>
          <LoginForm title="Returning Users" onSubmit={this.handleFormSubmit} />
        </div>
      </main>
    );
  }
}
