import React, { Component } from 'react';
import '../projects/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/project_particle.js';
import Particles from 'react-particles-js';
import ProjectBody from '../../components/project_main';

class Projects extends Component {
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Project | Surya Teja Tanuku</title>
                <link rel="canonical" href="http://motasimfoad.com/project"/>
                <meta name="description" content="Surya Teja Tanuku | Project - Forensic Specialist | Full Stack Developer | Freelancer"  />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           
           <Row className="About-main">
           <Particles
            params={particles}
            className="particle"
          />
              <HamburgerMenu />
              <ProjectBody />
           </Row>
           <br/>
          <Row className="About-footer">
           <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default Projects;
