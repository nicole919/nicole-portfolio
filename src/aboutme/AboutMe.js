import React, { Component } from "react";
import "./aboutme.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="AboutMe">
          <h1 className="aboutMe">Hello, I'm Nicole :)</h1>
          {/*<img src={Me} className="me" />*/}
          <p className="bio">
            I’m a beginner web developer from Arizona. After being in retail for
            15 years, I decided to challenge myself by learning web development
            - and I am so glad I did! Currently, my skillset includes HTML, CSS,
            JavaScript, React, Node.js, and PostgreSQL. The further I get into
            my learning, the more eager I am to put my skills into practice and
            work alongside experienced programmers to build applications. In my
            spare time, I enjoy running and teaching my kids the finer points of
            Mario Kart.
          </p>
        </div>

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
                <i id="social-tw" class="fa fa-github-square fa-3x social"></i>
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
    );
  }
}
