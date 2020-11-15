import React, { useState } from 'react';
import { FrontEnd } from "../../data/skills/frontend.js";
import { BackEnd } from "../../data/skills/backend.js";
import { DataBase } from "../../data/skills/db.js";
import { DevOps } from "../../data/skills/DevOps.js";
import { AppDev } from "../../data/skills/appdev.js";
import './style.css';

function Skills() {
    // const [frontend, setFrontend] = useState([])
    return (
        <>
            <div className="skill_container"
            // style={{
            //     width: "100",
            //     height: "auto",
            //     background: "black",
            //     border: "blanchedalmond",
            //     display: "flex",
            //     flexDirection: "row",
            //     justifyContent: "space-around",
            //     flexFlow: "wrap"
            // }}
            >
                <div className="skillbox">
                    <p className="skillbox_exp">
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
                    </p>
                </div>

                <div className="skillbox">
                    <p className="skillbox_exp"><strong>BACKEND</strong><br /></p>
                    <p className="skillist_exp"><strong>Technology</strong><br />
                        {BackEnd.Technology && BackEnd.Technology.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>DATABASE</strong></p>
                    <p className="skillist_exp"><strong>RDMS</strong><br />
                        {DataBase.RDMS && DataBase.RDMS.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>No SQL</strong><br />
                        {DataBase.NoSQL && DataBase.NoSQL.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Message Queues</strong><br />
                        {DataBase.MessageQueues && DataBase.MessageQueues.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>DEVOPS</strong></p>
                    <p className="skillist_exp"><strong>Cloud Computing</strong><br />
                        {DevOps.CloudComputing && DevOps.CloudComputing.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Configuration Management</strong><br />
                        {DevOps.ConfigurationManagement && DevOps.ConfigurationManagement.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Infrastructure Management</strong><br />
                        {DevOps.InfrastructureManagement && DevOps.InfrastructureManagement.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Orchestration</strong><br />
                        {DevOps.Orchestration && DevOps.Orchestration.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                    <p className="skillist_exp"><strong>Build Automation Tool</strong><br />
                        {DevOps.BuildAutomationTool && DevOps.BuildAutomationTool.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                </div>
                <div className="skillbox">
                    <p className="skillbox_exp"><strong>APP DEV</strong></p>
                    <p className="skillist_exp"><strong>Hybrid App Dev</strong><br />
                        {AppDev.CrossPlatform && AppDev.CrossPlatform.map((e, key) => {
                            return <option key={key} value={e.Key}>{e.Value}</option>;
                        })}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Skills;
