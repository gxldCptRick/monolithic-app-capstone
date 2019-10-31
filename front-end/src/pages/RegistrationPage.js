import React, { Component } from "react";
import { Route } from "react-router-dom";
import AccountInfo from "../components/forms/AccountInfoForm";
import ContactInfo from "../components/forms/ContactInfoForm";
import AddressInfo from "../components/forms/AddressForm";
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
      previous: "/contact"
    },
    component: AddressInfo
  }
];

export default class Registration extends Component {
  render() {
    let {
      match: { path: basePath }
    } = this.props;
    console.log(
      registrationParts.map(
        ({ path, props: { next, previous, ...rest }, ...basicRest }) => ({
          path: basePath + path,
          ...basicRest,
          props: {
            next: next ? basePath + next : undefined,
            previous: previous ? basePath + previous : undefined,
            ...rest
          }
        })
      )
    );
    return (
      <main>
        <h1>Register Your Account</h1>
        {registrationParts
          .map(
            ({ path, props: { next, previous, ...rest }, ...basicRest }) => ({
              path: basePath + path,
              ...basicRest,
              props: {
                next: next ? basePath + next : undefined,
                previous: previous ? basePath + previous : undefined,
                ...rest
              }
            })
          )
          .map(({ path, component, props }) => (
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
      </main>
    );
  }
}
