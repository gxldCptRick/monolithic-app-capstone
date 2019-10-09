import React, { Component } from "react";
import Card from "../components/Card";
import { HomePageCards } from "../configurations/AppConfig";

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <h1 className="page-title">Welcome To Neumont</h1>
        {HomePageCards.map(c => (
          <Card {...c} key={c.title}>
            <a className="card__link" href="https://apply.neumont.edu/">
              Apply Now
            </a>
          </Card>
        ))}
      </main>
    );
  }
}
