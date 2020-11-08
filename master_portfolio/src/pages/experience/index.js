import React from 'react';
import '../experience/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import Experience_Left from '../../components/experience_left';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';


class Experience extends React.Component {

  componentDidMount() {
    //--Surya Teja Tanukus Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("G-574RSBTN1L");
    ReactGa.pageview('suryatejatanuku.in - Experience Screen');
  }
  //--Surya Teja Tanukus Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Surya Teja Tanuku</title>
          <link rel="canonical" href="http://suryatejatanuku.in/Experience" />
          <meta name="description" content="Surya Teja Tanuku | Experience - Forensic Specialist | Full Stack Developer | AWS Devops Consultant" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
        <Particles
            params={particles}
            className="particle"
          />
          <Container className="Experience-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Experience-main">
              {/* <Col className="Experience-left"> */}
                <Experience_Left />
              {/* </Col> */}
              {/* <Col xl={6} className="Experience-right">
                <EmailForm />
              </Col> */}
            </Row>
            <Row className="Experience-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    )
  }
} export default Experience