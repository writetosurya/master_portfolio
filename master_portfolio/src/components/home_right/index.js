import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/foad35.png';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
      <h2 className="home-right-title"><strong>SURYA TEJA TANUKU</strong></h2>
        <Col xl={12}>
          <br />
          <Image src={Foad} className="home-right-main-img" alt="Image of Surya Teja Tanuku" />
        </Col>
        <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
