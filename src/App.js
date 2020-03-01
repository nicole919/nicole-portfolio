import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Projects from "./projects/Projects";
import Homepage from "./homepage/Homepage";
import AboutMe from "./aboutme/AboutMe";
import Contact from "./contact/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <nav>
              <Nav />
            </nav>
            <main>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </div>
        )}
      />
    );
  }
}

export default App;
