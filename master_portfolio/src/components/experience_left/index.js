import React from 'react';
import experience_logo from '../../assets/img/experience_logo.jpg';
import './style.css';

function Experience_Left() {
    return (
        <>
            <div className="exp_container">
                <div className="expbox">
                    <p className="expbox1_exp"><strong>EXPERIENCE</strong></p>
                    <img src={experience_logo} style={{width:"52%"}}/>
                </div>
                <div className="expbox_23">
                    <p className="expbox2_list">
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
                    <p className="expbox2_list">
                        <a
                            href="https://www.infosys.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Infosys Ltd</a><br />
                    Senior Systems Software Engineer <br />
                        Mar 2019 - Nov 2019<br />Bengaluru</p>
                    <br />
                    <p className="expbox2_list">
                        <a
                            href="https://dreamstep.in"
                            target="_blank"
                            rel="noopener noreferrer">
                            Dreamstep Data Engineering <br /></a>
                        Software Engineer<br />
                        Jan 2016 - Mar 2019
                    <br />Hyderabad</p>
                </div>
            </div>
        </>
    );
}

export default Experience_Left;