import React from 'react';
import '../notfound/style.css';
import ReactGa from 'react-ga';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';


class NotFound extends React.Component {

  componentDidMount() {
    //--Surya Teja Tanukus Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("G-574RSBTN1L");
    ReactGa.pageview('suryatejatanuku.in - Contact Screen');
  }
  //--Surya Teja Tanukus Portfolio website Google analytics--

  componentWillMount() {
    document.body.style.backgroundColor = "black";
    document.body.style.textAlign = "center";
    document.body.style.padding = "150px";
    document.body.style.font = "20px Helvetica, sans-serif,color: #333";
  }


  render() {
    return (
      <Row className="Contact-text">


        <Animate to="1" from="0" attributeName="opacity">
          <Particles
            params={particles}
            className="particle"
          />

          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Contact-main">

              <div class="container">
                <article style={{ display: "block", textAlign: "left", width: "650px", margin: "0 auto" }}>
                  <h1 style={{ color: "white", fontSize: "50px" }}>I&rsquo;ll be back soon!</h1>
                  <div>
                    <p style={{ color: "white" }}>Oops!! but I&rsquo;m performing some patch works at this moment.
                  If you need to you can always <Link to="/signup" className="btn btn-primary">contact me</Link>,
                  otherwise I&rsquo;ll be back online shortly!</p>
                    <p style={{ color: "white" }}>&mdash; Surya</p>
                  </div>
                </article>
              </div>

            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>

      </Row>

    )
  }
} export default NotFound