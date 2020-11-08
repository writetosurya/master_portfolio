import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Loading from "../pages/loading";
import Notfound from "../pages/notfound";
import Project from "../pages/projects";
import Experience from "../pages/experience";
import Skill from "../pages/skill";
import Certification from '../pages/certifications';


export default function Nav() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="/experience" component={Experience} />
        <Route path="/skill" component={Skill} />
        <Route path="/certifications" component={Certification} />
        <Route path="*" component={Home} />
        {/* <Route path="/about" component={Notfound} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Notfound} /> */}
        {/* <Route path="*" component={Home} /> */}
      </Switch>
    </Router>
  );
}