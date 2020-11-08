import React, { Fragment } from 'react';
import { Container, Table, Card, Accordion, Row, Button, Col } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
// import { Accordion, Panel } from "baseui/accordion";

import './style.css';

function Skills() {
    return (
        <Container>
            <a classNameNameName="numbered-heading"><strong># Skills Breakdown</strong></a>
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ color: "chocolate", flexShrink: "0", fontWeight: "700", letterSpacing: "2px" }}>
                            <th></th>
                            <th><strong></strong></th>
                            <th>FRON TEND</th>
                            <th>BACK END</th>
                            <th>DATABASE</th>
                            <th>DEVOPS</th>
                            <th>MOBILE APPS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="section__title"></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Basics</a></b> <br />
                                <p className="section__desig">HTML
                                <br /> CSS<br /> Javascript</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}><b><a>Technology</a></b><br />
                                <p className="section__duration">Python <br /> Node.js <br /> Django<br /> Gatsby</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>RDMS</a></b> <br />
                                <p className="section__desig">MemSQL <br /> Postgres</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Infrastructure</a></b> <br />
                                <p className="section__desig">Amazon Web Services <br /> Azure Devops <br /> Linux<br /> ELK</p></td>
                            <td  style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Cross Platform</a></b> <br />
                                <p className="section__desig">Ionic <br /> PWA</p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title"></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Framewroks</a></b> <br />
                                <p className="section__desig">React <br />
                                Angular <br /> Flask</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}> <br />
                                <p className="section__duration"></p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>NoSQL</a></b> <br />
                                <p className="section__desig">Mongo <br /> Firebase<br /> Elasticsearch</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Automation</a></b> <br />
                                <p className="section__desig">Ansible <br /> Chef <br /> Jenkins</p></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title"></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Libraries</a></b> <br />
                                <p className="section__desig">Bootstrap <br /> Material UI<br /> JQuery<br /> D3.js<br /> Leaflet <br /> Google Maps</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}> <br />
                                <p className="section__duration"></p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Message Queues</a></b> <br />
                                <p className="section__desig">Amazon MQ <br /> SQS</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a>Virtualization</a></b> <br />
                                <p className="section__desig">Docker <br /> Kubernetes</p></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </>
        </Container>
    );
}

export default Skills;
