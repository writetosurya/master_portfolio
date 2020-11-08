import React from 'react';
import '../contact_left/style.css';
import { Row, Col } from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
      <Row className="Contact-text">
        <Col xl={12}>
          <p className="p-heading2">
            Bonjour <strong>Explorer !!</strong><br />
              Thank you for bumping in. If you have any queries/ideas/projects, Interested in collaborating or investing? feel free to <strong>PING</strong> me.
              I am always open for discussion. You can contact me via the Contact Form <strong>OR</strong> simply feel free to reach out through any platforms below.
              </p>
        </Col>
      </Row>

      <Row className="contact-left-footer" >
        <SocialIcons />
      </Row>
    </div>
  );
}

export default Contact_Left;
