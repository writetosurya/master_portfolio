import React from 'react';
import experience_logo from '../../assets/img/experience_logo.jpg';
import './style.css';

function Experience_Left() {
    return (
        <>
            <div className="container">
                <div className="box">
                    <p className="box1_exp"><strong>EXPERIENCE</strong></p>
                    <img src={experience_logo} style={{width:"52%"}}/>
                </div>
                <div className="box_23">
                    <p className="box2_list">
                        <a
                            href="https://www.pwc.in/"
                            target="_blank"
                            rel="noopener noreferrer">
                            PricewaterhouseCoopers LLC</a><br />
                            Forensic Specialist <br />
                            Dec 2019 - PRESENT <br />
                            Bengaluru
                        </p>
                    <br />
                    <p className="box2_list">
                        <a
                            href="https://www.infosys.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Infosys Ltd</a><br />
                    Senior Systems Software Engineer <br />
                        Mar 2019 - Nov 2019<br />Bengaluru</p>
                    <br />
                    <p className="box2_list">
                        <a
                            href="https://dreamstep.in"
                            target="_blank"
                            rel="noopener noreferrer">
                            Dreamstep Data Engineering <br /></a>
                        Software Engineer<br />
                        Jan 2016 - Mar 2019
                    <br />Hyderabad</p>
                </div>
                {/* <div className="box_23">
                    <p className="box2_list" style={{ color: "white", fontFamily: "monospace" }}>Jan 2016 - Mar 2019
                    <br />Hyderabad</p>
                    <br />
                    <p className="box2_list" style={{ color: "white", fontFamily: "monospace" }}>Mar 2019 - Nov 2019
                    <br />Bengaluru</p>
                    <br />
                    <p className="box2_list" style={{ color: "white", fontFamily: "monospace" }}>Dec 2019 - PRESENT
                    <br />Bengaluru</p>
                </div> */}
            </div>
        </>
    );
}

export default Experience_Left;
