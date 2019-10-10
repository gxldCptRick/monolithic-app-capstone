import React, { Component } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { HomePageCards } from "../configurations/AppConfig";

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <h1 className="page-title">Welcome To Neumont</h1>
        {HomePageCards.map(c => (
          <Card {...c} key={c.title}>
            <Link className="card__link" to="login">
              Apply Now
            </Link>
          </Card>
        ))}
      </main>
    );
  }
}
