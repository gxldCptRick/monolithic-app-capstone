import React, { Component } from "react";
import {
  ApplicationLinks,
  ApplicationComponents,
  DefaultPage
} from "./configurations/AppConfig";
import Navigation from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Logo from "./configurations/main-logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <div className="header__logo-container">
            <img src={Logo} alt="neumont logo" className="header__logo" />
          </div>
          <Navigation links={ApplicationLinks} />
        </header>
        <Route path="/" exact component={DefaultPage} />
        {ApplicationComponents.map(({ link, display }) => (
          <Route key={link} path={link} component={display} />
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
