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
        {/* <Particles
          params={particles}
          className="particle"
        /> */}
          <Container className="Experience-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <p style={{ color: "chocolate", fontSize: "19px", textAlign: "center", marginBottom: '14px' }}><strong># Where I’ve Worked</strong></p>
            <hr style={{
              color: '#fdf6f6',
              backgroundColor: '#fdf6f6',
              height: 2,
              width: '200px',
              borderColor: '#fdf6f6',
              marginTop: '0.10px'
            }} />
            <p style={{ color: "chocolate", fontSize: "19px", textAlign: "center", marginTop: "10px" }}><a className="exp_res" 
            href="https://drive.google.com/file/d/1ge7bWWlGe4pWvgARh4VcmhpFAt7oNM3j/view?usp=sharing" 
            target="_blank"><strong>GRAB A PDF OF MY FULL RESUME</strong></a></p>
            <Row className="Experience-main">
              <Experience_Left />
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