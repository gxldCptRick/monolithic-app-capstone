import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import AccountInfo from "../components/AccountInfoForm";
import HigherOrderWrapper from "../components/HighOrderWrapper";

export default class Registration extends Component {
  render() {
    return (
      <main>
        <h1>Register Your Account</h1>
        <HashRouter>
          <Route
            path="/account"
            component={HigherOrderWrapper(AccountInfo, {})}
          />
        </HashRouter>
      </main>
    );
  }
}
