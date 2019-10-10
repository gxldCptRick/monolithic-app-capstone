import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

export default class Registration extends Component {
  render() {
    return (
      <main>
        <h1>Register Your Account</h1>
        <HashRouter>
          <Route path="/account" component={} />
        </HashRouter>
      </main>
    );
  }
}
