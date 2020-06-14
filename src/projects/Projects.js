import React, { Component } from "react";
import iate from "../iatess.png";
import weather from "../weatherss.png";
import mentalnote from "../mentalnote.png";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="projects">Here are my projects</h1>
        <section className="projectSection">
          <h3>Mental Note</h3>

          <div className="imgContainer">
            <a
              href="https://mental-note.nicole919.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mentalnote} className="projectimg" alt="Mental Note" />
            </a>
          </div>

          <p>
            A social note app. <br />
          </p>
          <p>
            Custom CSS / JavaScript / React / Node.js / Express / PostgreSQL
          </p>
          <p>
            <a
              href="https://github.com/nicole919/mental-note"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo{" "}
            </a>
            |{" "}
            <a
              href="https://mental-note.nicole919.now.sh/"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </p>
        </section>
        <section className="projectSection">
          <h3>i.ate</h3>
          <a
            href="https://i-ate.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iate} className="projectimg" alt="i.ate" />
          </a>
          <p>
            A simple food journal app <br />
            Record what are where you ate
          </p>
          <p>
            Custom CSS / JavaScript / React / Node.js / Express / PostgreSQL
          </p>
          <p>
            <a
              href="https://github.com/nicole919/i-ate"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo{" "}
            </a>
            |{" "}
            <a
              href="https://i-ate.now.sh/"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </p>
        </section>
        <section className="projectSection">
          <h3>So, How's the Weather?</h3>
          <a
            href="https://nicole919.github.io/weather/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={weather}
              className="projectimg"
              alt="so, how's the weather?"
            />
          </a>
          <p>
            A Weather Comparison App <br />
            This project pulls from multiple API's to locate user, autocomplete
            search queries, and display weather.
          </p>
          <p>Custom Javascript / HTML / CSS / JQuery</p>
          <p>
            {" "}
            <a
              href="https://github.com/nicole919/weather"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>{" "}
            |{" "}
            <a
              href="https://nicole919.github.io/weather/"
              className="project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </p>
        </section>
      </div>
    );
  }
}
