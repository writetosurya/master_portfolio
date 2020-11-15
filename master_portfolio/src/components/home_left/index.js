import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
  Link
} from "react-router-dom";

function Home_Left() {
  return (
    <Container className="home-left" >
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h3>
            <ReactTypingEffect
              text="Bonjour"
              className="typical"
              speed="10"
              eraseDelay="500000"
            />
          </h3>
          <p className="home-left-content">
            I'm a software engineer based in Bengaluru, INDIA, Currently working for PricewaterhouseCoopers.
            Specializing in building (and occasionally designing) exceptional web,and mobile applications, and everything in between.
            <br />
            <br />
            Shortly after graduating from <a href="https://aknu.edu.in/"
              target="_blank"
              rel="noopener noreferrer">Adikavi Nannaya University</a>,
            I joined the engineering team at <a href="https://dreamstep.in/"
              target="_blank"
              rel="noopener noreferrer">Dreamstep Data Engineering</a>&nbsp;where I work on a wide variety of interesting and meaningful projects on a daily basis. My goal is to always build products that provide pixel-perfect, performant experiences.
                                    <br />
            <br />
                                    Here are the few glimpses to know about me</p>
          <br />
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/experience" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Experience</Link></Button> &nbsp;
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/skill" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Skills</Link></Button> &nbsp;
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/certifications" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Certifications</Link></Button> &nbsp;
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button> &nbsp;
         </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
