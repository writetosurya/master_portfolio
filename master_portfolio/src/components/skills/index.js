import React, { Fragment } from 'react';
import frontend from "../../data/skills/frontend.json";
import backend from "../../data/skills/backend.json";
import db from "../../data/skills/db.json";
import devops from "../../data/skills/devops.json";
import appdev from "../../data/skills/appdev.json";



import './style.css';

function Skills() {
    return (
        <>
            <div className="container">
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>FRONTEND</strong></p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>BACKEND</strong></p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>DATABASE</strong></p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>DEVOPS</strong></p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>APP DEV</strong></p>
                </div>
            </div>
        </>
    );
}

export default Skills;
