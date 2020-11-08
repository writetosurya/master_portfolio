import React, { Fragment } from 'react';
import { Container, Table, Card, Accordion, Row, Button, Col } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
// import { Accordion, Panel } from "baseui/accordion";

import './style.css';

function Experience_Left() {
    return (
        <Container>
            <a classNameNameName="numbered-heading"><strong></strong></a>
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ color: "white" }}><strong># Where I’ve Worked</strong></th>
                            <th></th>
                            <th><a style={{ color: "chocolate", marginLeft: "-7%" }}
                                href="https://rb.gy/oegcny" target="_blank" class="arrow-link">GRAB A PDF OF MY FULL RESUME</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td style={{ color: "chocolate", fontSize: "100%", letterSpacing: "2px", flexShrink: "0", fontWeight: "700" }}>EXPERIENCE</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://dreamstep.in"
                                    target="_blank"
                                    rel="noopener noreferrer">Dreamstep Data Engineering</a></b> <br />
                                <p className="section__desig">Software Engineer</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>Jan 2016 - Mar 2019 <br />
                                <p className="section__duration">Hyderabad</p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title"></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}><b><a
                                href="https://www.infosys.com/"
                                target="_blank"
                                rel="noopener noreferrer">Infosys Ltd</a></b> <br />
                                <p className="section__desig">Senior Systems Software Engineer</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>Mar 2019 - Nov 2019 <br />
                                <p className="section__duration">Bengaluru</p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title"></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}><b><a
                                href="https://www.pwc.in/"
                                target="_blank"
                                rel="noopener noreferrer">PricewaterhouseCoopers (Pwc)</a></b> <br />
                                <p className="section__desig">Forensic Specialist</p></td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>Dec 2019 - PRESENT <br />
                                <p className="section__duration">Bengaluru</p></td>
                        </tr>
                    </tbody>
                </Table>
            </>

        </Container>
    );
}

export default Experience_Left;
