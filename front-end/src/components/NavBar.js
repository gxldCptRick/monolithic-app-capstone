import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ links = [] }) {
  return (
    <nav className="header__nav">
      <ul className="nav">
        {links.map(({ link, name }) => (
          <li key={link} className="nav__item">
            <Link className="nav__link" to={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
