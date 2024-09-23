import React, { useState } from "react";
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="col-md-12 col-xs-12 cls-shadow tab-sec">
            <h1 className="txt-cntr">Tabs</h1>
            <div className="col-md-12 col-xs-12 pad-cls">
                <div className="tabs">
                    <ul>
                        <li className="link" onClick={() => handleTabClick("phani")}>Phani</li>
                        <li className="link" onClick={() => handleTabClick("krishna")}>Krishna</li>
                        <li className="link" onClick={() => handleTabClick("Kishon")}>Kishon</li>
                        <li className="link" onClick={() => handleTabClick("pc")}>PC</li>
                        <li className="link" onClick={() => handleTabClick("vijay")}>Vijay</li>
                        <li className="link" onClick={() => handleTabClick("Rajith")}>Rajith</li>
                    </ul>
                </div>

                <div className="content" style={{ display: activeTab === "phani" ? "block" : "none" }}>
                    <h3>Name: Phani</h3>
                    <p>College: Swarnandra college of engineering and technology.</p>
                    <p>From: Guntur</p>
                </div>

                <div className="content" style={{ display: activeTab === "krishna" ? "block" : "none" }}>
                    <h3>Name: Krishna</h3>
                    <p>College: Swarnandra college of engineering and technology.</p>
                    <p>From: Kikalur</p>
                </div>

                <div className="content" style={{ display: activeTab === "Kishon" ? "block" : "none" }}>
                    <h3>Name: Kishon</h3>
                    <p>College: Northwest Missouri State University.</p>
                    <p>From: USA</p>
                </div>

                <div className="content" style={{ display: activeTab === "pc" ? "block" : "none" }}>
                    <h3>Name: PC</h3>
                    <p>College: Swarnandra college of engineering and technology.</p>
                    <p>From: Vijayawada</p>
                </div>

                <div className="content" style={{ display: activeTab === "vijay" ? "block" : "none" }}>
                    <h3>Name: Vijay</h3>
                    <p>College: Swarnandra college of engineering and technology.</p>
                    <p>From: Rajamundhry</p>
                </div>

                <div className="content" style={{ display: activeTab === "Rajith" ? "block" : "none" }}>
                    <h3>Name: Rajith</h3>
                    <p>College: University of Texas.</p>
                    <p>From: USA</p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
