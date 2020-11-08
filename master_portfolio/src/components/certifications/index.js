import React, { Fragment } from 'react';
import { Container, Table, Card, Accordion, Row, Button, Col } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
// import { Accordion, Panel } from "baseui/accordion";

import './style.css';

function Certs() {
    return (
        <Container>
            <a classNameNameName="numbered-heading"><strong># Certifications</strong></a>
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ color: "chocolate", flexShrink: "0", fontWeight: "700", letterSpacing: "2px" }}>
                            <th></th>
                            <th>ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="section__title"><br />AWS Certified Solution Archetict - Associate</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/10Ej0xRICHi0jGgHKtKnhfARWkG-_KwEv/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>Amazon Web Services</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/d9acb1c2-0393-4eb8-bdc0-bfb3243ee77f/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">Docker Essentials: A Developer Introduction</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/1g3zspv-YRbWmxMhI-WRSLgmK_0d7O1xo/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/67b27247-134a-414f-a25c-4c4aa4ea598e/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">Python for Data Science</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/1MCEvygdSI5dAVNG65zq8iBiAYfuKJ7lb/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/8155e94f-8cf3-48a6-aacd-5f3a21de420a/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">Data Analysis Using Python</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/1KQ9NGmGv03Y82N40k53HfPoR0NAUYLif/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/51b80706-17d5-4404-8c49-364d562bb19c/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">Block Chain Essentials</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/19Ubj4auwqOpjH3YRabH-0UKfBuupweKF/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/04419ac5-3b04-4814-8406-5e39a27856d2/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">Introduction to Data Science</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/1pSePFmdjUaI_lcouUbUPdxzafs1kHcQc/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://www.youracclaim.com/badges/836071ae-60a3-4361-bf2d-302e7868b269/public_url"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="section__title">How to Buid Chat Bots</td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                <b><a
                                    href="https://drive.google.com/file/d/1AZQLK9ynD2comcmN4LDNzJ4eCk7JhEYh/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">To View Certificate</a></b> <br />
                                <a style={{ fontSize: "x-small" }}>IBM Watson</a>
                            </td>
                            <td style={{ color: "white", fontFamily: "monospace" }}>
                                {/* <b><a>To View Badge</a></b> <br />
                                <a style={{ fontSize: "x-small" }}></a> */}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        </Container>
    );
}

export default Certs;
