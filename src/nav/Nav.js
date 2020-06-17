import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <span className="NavLink">
            {" "}
            <Link to="/AboutMe">About Me</Link>
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/Projects">Projects</Link>
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/Contact">Contact</Link>
          </span>
        </nav>
      </>
    );
  }
}
