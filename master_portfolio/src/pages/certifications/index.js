import React from 'react';
import '../certifications/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import Certs from '../../components/certifications';
import HamburgerMenu from '../../components/hamburger_menu';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';


class Certification extends React.Component {

  componentDidMount() {
    //--Surya Teja Tanukus Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("G-574RSBTN1L");
    ReactGa.pageview('suryatejatanuku.in - Certification Screen');
  }
  //--Surya Teja Tanukus Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Surya Teja Tanuku</title>
          <link rel="canonical" href="http://suryatejatanuku.in/Certification" />
          <meta name="description" content="Surya Teja Tanuku | Certification - Forensic Specialist | Full Stack Developer | AWS Devops Consultant" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Container className="Certification-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <p style={{ color: "chocolate", fontSize: "19px", textAlign: "center", marginBottom: '14px' }}><strong># Certifications Breakdown</strong></p>
            <hr style={{
              color: '#fdf6f6',
              backgroundColor: '#fdf6f6',
              height: 2,
              width: '200px',
              borderColor: '#fdf6f6',
              marginTop: '0.10px'
            }} />
            <p style={{ color: "chocolate", fontSize: "19px", textAlign: "center", marginTop: "10px" }}><a className="exp_res"><strong>ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !
</strong></a></p>

            <Row className="Certification-main">
              <Certs />
            </Row>
            <Row className="Certification-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    )
  }
} export default Certification
