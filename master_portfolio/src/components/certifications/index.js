import React, { Fragment } from 'react';
import certified_logo from '../../assets/img/certfied.gif';
import pride from '../../assets/img/pride.gif';


import './style.css';

function Certs() {
    return (

        //                 <tr>
        //                     <td></td>
        //                     <td className="section__title">How to Buid Chat Bots</td>
        //                     <td style={{ color: "white", fontFamily: "monospace" }}>
        //                         <b><a
        //                             href="https://drive.google.com/file/d/1AZQLK9ynD2comcmN4LDNzJ4eCk7JhEYh/view?usp=sharing"
        //                             target="_blank"
        //                             rel="noopener noreferrer">To View Certificate</a></b> <br />
        //                         <a style={{ fontSize: "x-small" }}>IBM Watson</a>
        //                     </td>
        //                     <td style={{ color: "white", fontFamily: "monospace" }}>
        //                         {/* <b><a>To View Badge</a></b> <br />
        //                         <a style={{ fontSize: "x-small" }}></a> */}
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </Table>
        //     </>
        // </Container>
        <>
            <div className="skill_container">
                <div className="skillbox">
                    {/* <p className="skillbox_exp">
                        <strong>FRONTEND</strong><br />
                    </p>
                    <p className="skillist_exp"><strong>Basics</strong><br />
                        {FrontEnd.Basics && FrontEnd.Basics.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Frameworks</strong><br />
                        {FrontEnd.Frameworks && FrontEnd.Frameworks.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Libraries</strong><br />
                        {FrontEnd.Libraries && FrontEnd.Libraries.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p> */}
                </div>

                <div className="skillbox">
                    {/* <p className="skillbox_exp"><strong>Certifications</strong><br /></p> */}
                    <p className="skillist_exp"><strong>Solutions Archetict Associate</strong><br />
                        <a href="https://drive.google.com/file/d/10Ej0xRICHi0jGgHKtKnhfARWkG-_KwEv/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a><br />
                        <a style={{ fontSize: "x-small" }}>Amazon Web Services</a><br />
                        <a href="https://www.youracclaim.com/badges/d9acb1c2-0393-4eb8-bdc0-bfb3243ee77f/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a> <br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>
                    <p className="skillist_exp"><strong>Docker Essentials: A Developer Introduction</strong><br />
                        <a href="https://drive.google.com/file/d/1g3zspv-YRbWmxMhI-WRSLgmK_0d7O1xo/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a> <br />
                        <a style={{ fontSize: "x-small" }}>IBM</a><br />
                        <a href="https://www.youracclaim.com/badges/67b27247-134a-414f-a25c-4c4aa4ea598e/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a><br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>
                    <p className="skillist_exp"><strong>Python for Data Science</strong><br />
                        <a href="https://drive.google.com/file/d/1MCEvygdSI5dAVNG65zq8iBiAYfuKJ7lb/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a> <br />
                        <a style={{ fontSize: "x-small" }}>IBM</a><br />
                        <a href="https://www.youracclaim.com/badges/8155e94f-8cf3-48a6-aacd-5f3a21de420a/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a><br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong></strong></p>
                    <p className="skillist_exp"><strong></strong><br />
                        <img src={pride} style={{ width: "100%" }} />
                    </p>
                </div>

                <div className="skillbox">
                    <p className="skillist_exp"><strong>Introduction to Data Science</strong><br />
                        <a href="https://drive.google.com/file/d/1pSePFmdjUaI_lcouUbUPdxzafs1kHcQc/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a> <br />
                        <a style={{ fontSize: "x-small" }}>IBM</a><br />
                        <a href="https://www.youracclaim.com/badges/836071ae-60a3-4361-bf2d-302e7868b269/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a><br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>
                    <p className="skillist_exp"><strong>Block Chain Essentials</strong><br />
                        <a href="https://drive.google.com/file/d/19Ubj4auwqOpjH3YRabH-0UKfBuupweKF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a> <br />
                        <a style={{ fontSize: "x-small" }}>IBM</a><br />
                        <a href="https://www.youracclaim.com/badges/04419ac5-3b04-4814-8406-5e39a27856d2/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a><br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>
                    <p className="skillist_exp"><strong>Data Analysis Using Python</strong><br />
                        <a href="https://drive.google.com/file/d/1KQ9NGmGv03Y82N40k53HfPoR0NAUYLif/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer">To View Certificate</a> <br />
                        <a style={{ fontSize: "x-small" }}>IBM</a><br />
                        <a href="https://www.youracclaim.com/badges/51b80706-17d5-4404-8c49-364d562bb19c/public_url"
                            target="_blank"
                            rel="noopener noreferrer">To View Badge</a><br />
                        <a style={{ fontSize: "x-small" }}></a>
                    </p>

                </div>
                <div className="skillbox">

                </div>

            </div>
        </>
    );
}

export default Certs;
