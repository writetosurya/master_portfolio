import React, { useContext, useEffect, useState } from 'react';
import { getCurrentLanguage, polyglotLoader, setCurrentLanguage } from '../../Services/Shared/Translate'
// import { DataContext } from '../../Services/Shared/Store.js'
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer(props) {
  // const [setUserLanguage, getUserLanguage] = useContext(DataContext);
  // const language = getUserLanguage();
  // var polyglot = polyglotLoader(props.language);
  // const changeLanguage = value => {
  //   setCurrentLanguage(value);
  //   setUserLanguage(value);
  // }
  return (
    <Container className="footer" fluid={true}>
      <Row >
        {/* <div id="lol">
          {getUserLanguage() === 'ger' && (
            <select defaultValue={getCurrentLanguage()} onSelect={changeLanguage}>
              <option key={1} value={'en'}>EN</option>
              <option key={2} value={'ger'}>DE</option>
            </select>
          )}
          {getUserLanguage() === 'en' && (
            <select defaultValue={getCurrentLanguage()} onSelect={changeLanguage}>
              <option key={1} value={'en'}>EN</option>
              <option key={2} value={'ger'}>DE</option>
            </select>
          )}
        </div> */}
        <Col xl={12}>
          Copyright © 2020-{(new Date().getFullYear()) + 1} by <strong>Surya Teja Tanuku</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
