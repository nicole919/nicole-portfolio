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
        <h4>Let's get in touch!</h4>
        <section className="s-icons">
          <a
            id="email"
            href="mailto:nicole.fafard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/59/59965.svg"
              class="s-media"
              alt="Email"
            />
          </a>

          <a
            id="github"
            href="https://github.com/nicole919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              class="s-media"
              alt="github"
            />
          </a>

          <a
            id="linkedin"
            href="https://www.linkedin.com/in/nicole-fafard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/png/512/61/61109.png"
              class="s-media"
              alt="linkedin"
            />
          </a>
        </section>
      </div>
    );
  }
}
