import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import AccountInfo from "../components/forms/AccountInfoForm";
import ContactInfo from "../components/forms/ContactInfoForm";
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
            component={HigherOrderWrapper(AccountInfo, {
              next: "/contact",
              saved: "account",
              onSubmit: storage => {
                console.log("submitting", storage);
                localStorage.setItem("account", JSON.stringify(storage));
              }
            })}
          />
          <Route
            path="/contact"
            exact
            component={HigherOrderWrapper(ContactInfo, {
              next: "/address",
              previous: "/",
              saved: "contact",
              onSubmit: storage => {
                console.log("submitting", storage);
                localStorage.setItem("contact", JSON.stringify(storage));
              }
            })}
          />
        </HashRouter>
      </main>
    );
  }
}
