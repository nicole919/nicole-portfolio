import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="contactMe">Contact me</h1>
        <h3>Let's get in touch!</h3>
        <section id="lab_social_icon_footer">
          <div className="container">
            <div className="text-center center-block">
              <a
                href="https://www.linkedin.com/in/nicole-fafard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  id="social-fb"
                  class="fa fa-linkedin-square fa-3x social"
                ></i>
              </a>
              <a
                href="https://www.twitter.com/nicoleinprog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i id="social-fb" class="fa fa-twitter-square fa-3x social"></i>
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
