import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import AccountInfo from "../components/forms/AccountInfoForm";
import HigherOrderWrapper from "../components/HighOrderWrapper";

export default class Registration extends Component {
  render() {
    return (
      <main>
        <h1>Register Your Account</h1>
        <HashRouter>
          <Route
            path="/"
            exact
            component={HigherOrderWrapper(AccountInfo, {})}
          />
        </HashRouter>
      </main>
    );
  }
}
