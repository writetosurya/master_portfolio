import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';

//--Surya Teja Tanukus Portfolio website Google analytics--
//--Replace with your own key !!
function Analytics() {
  ReactGa.initialize("G-574RSBTN1L")
  ReactGa.pageview('suryatejatanuku.in - Home Screen')
}
//--Surya Teja Tanukus Portfolio website Google analytics--

function Home() {
  Analytics()
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Surya Teja Tanuku</title>
        <link rel="canonical" href="http://suryatejatanuku.in/home" />
        <meta name="description" content="Surya Teja Tanuku | Home - Forensic Specialist | Full Stack Developer | Freelancer" />
      </Helmet>
      <Animate to="1" from="0" attributeName="opacity">
        <Particles
          params={particles}
          className="particle"
        />
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
          </Row>
          <Row className="App-footer">
            <Footer />
          </Row>
        </Container>
      </Animate>
    </div>
  );
}

export default Home;
