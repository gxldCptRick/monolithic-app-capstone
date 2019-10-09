import React, { Component } from "react";
import { ApplicationLinks, DefaultPage } from "./configurations/AppConfig";
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
        {ApplicationLinks.map(({ link, display }) => (
          <Route key={link} path={link} exact component={display} />
        ))}
      </BrowserRouter>
    );
  }
}

export default App;
