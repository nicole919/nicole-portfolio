import React, { Component } from "react";
import "./homepage.css";
import iate from "../iatess.png";
import weather from "../weatherss.png";
import mentalnote from "../mentalnote.png";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="section intro">
          <h1 className="nicole">Hello, I'm Nicole.</h1>
          <p className="smile">I create web pages. :)</p>
        </div>
        <div className="section aboutMe">
          <div className="aboutMeWrapper">
            {/*<img src={Me} className="me" />*/}
            <h2>About Me</h2>
            <p className="bio">
              I’m a web developer from Arizona. After being in retail for 15
              years, I decided to challenge myself by learning web development -
              and I am so glad I did! Currently, my skillset includes HTML, CSS,
              JavaScript, React, Node.js, and PostgreSQL. The further I get into
              my learning, the more eager I am to put my skills into practice
              and work alongside experienced programmers to build applications.
              In my spare time, I enjoy running and teaching my kids the finer
              points of Mario Kart.
            </p>

            <section id="lab_social_icon_footer">
              <div className="container">
                <div className="text-center center-block">
                  <a
                    href="https://www.linkedin.com/in/nicole-fafard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a
                      href="https://www.twitter.com/nicoleinprog/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        id="social-fb"
                        class="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    <i
                      id="social-fb"
                      class="fa fa-linkedin-square fa-3x social"
                    ></i>
                  </a>
                  <a
                    href="https://github.com/nicole919"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      id="social-tw"
                      class="fa fa-github-square fa-3x social"
                    ></i>
                  </a>
                  <a
                    href="mailto:nicole.fafard@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      id="social-em"
                      class="fa fa-envelope-square fa-3x social"
                    ></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="section projects">
          <h1 className="projects">Here are my projects</h1>
          <div className="projectWrapper">
            <section className="projectSection">
              <h3>Mental Note</h3>

              <div className="imgContainer">
                <a
                  href="https://mental-note.nicole919.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mentalnote}
                    className="projectimg"
                    alt="Mental Note"
                  />
                </a>
              </div>

              <p>
                A social note app. <br />
              </p>
              <p>
                Custom CSS / JavaScript / React <br /> Node.js / Express /
                PostgreSQL
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
                Custom CSS / JavaScript / React <br /> Node.js / Express /
                PostgreSQL
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
                This project pulls from multiple API's to locate user,
                <br />
                autocomplete search queries, and display weather.
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
        </div>
      </div>
    );
  }
}
