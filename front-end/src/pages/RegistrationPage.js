import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import AccountInfo from "../components/forms/AccountInfoForm";
import ContactInfo from "../components/forms/ContactInfoForm";
import AddressInfo from "../components/forms/AddressForm";
import HelpfulInfo from "../components/forms/HelpfulForm";
import HigherOrderWrapper from "../components/HighOrderWrapper";

const registrationParts = [
  {
    path: "/",
    props: {
      saved: "account",
      next: "/contact"
    },
    component: AccountInfo
  },
  {
    path: "/contact",
    props: {
      saved: "contact",
      next: "/address",
      previous: "/"
    },
    component: ContactInfo
  },
  {
    path: "/address",
    props: {
      saved: "address",
      next: "/helpful",
      previous: "/contact"
    },
    component: AddressInfo
  },
  {
    path: "/helpful",
    props: {
      saved: "helpful",
      previous: "/address"
    },
    component: HelpfulInfo
  }
];

export default class Registration extends Component {
  render() {
    return (
      <main>
        <h1>Register Your Account</h1>
        <HashRouter>
          {registrationParts.map(({ path, component, props }) => (
            <Route
              key={path}
              path={path}
              exact
              component={HigherOrderWrapper(component, {
                ...props,
                onSubmit: data => {
                  console.log("data-saved", data);
                  localStorage.setItem(props.saved, JSON.stringify(data));
                }
              })}
            />
          ))}
        </HashRouter>
      </main>
    );
  }
}
