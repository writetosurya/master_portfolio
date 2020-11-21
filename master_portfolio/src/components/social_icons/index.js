import React from 'react';
import '../social_icons/style.css';
import {
  Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin, faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      <h2 className="home-right-soc">Living, learning, & leveling up one day at a time.</h2>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://www.facebook.com/suryatejtanuku1/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="fb" icon={faFacebook} />
      </a>
      <a href="https://github.com/writetosurya" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a href="https://twitter.com/suryatej_tanuku?s=09" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/suryatej_tanuku/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/suryatejatanuku/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
      <a href="https://goo.gl/maps/Zwgtyxw4SHSBWNYj8" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="location" icon={faMarkdown} />
      </a>
    </Col>
  );
}

export default SocialIcons;
