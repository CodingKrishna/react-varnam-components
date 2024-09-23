import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Style.css';
import './BackgroundColors.css';

const UIcomponents = () => {
    
    
    return (
        <div className="container">
            <div className="header-prop">
                <h1>UI COMPONENTS</h1>
            </div>
            <div className="row">
                <div className="left-sec">
                    <nav className="menu">
                        <ul>
                            <li><Link to="buttons">Buttons</Link></li>
                            <li><Link to="tabs">Tabs</Link></li>
                            <li><Link to="badges">Badges</Link></li>
                            <li><Link to="spinners">Spinners</Link></li>
                            <li><Link to="popup">Popup</Link></li>
                            <li><Link to="progressbars">Progressbars</Link></li>
                            <li><Link to="accordion">Accordion</Link></li>
                            <li><Link to="coursoel">Coursoel</Link></li>
                            <li><Link to="modeldialouge">Model Dialouge</Link></li>
                            <li><Link to="pagination">Pagination</Link></li>
                            <li><Link to="breadcrumbs">Bread Crumbs</Link></li>
                            <li><Link to="navbar">NavBar</Link></li>
                            <li><Link to="cards">Cards</Link></li>
                            <li><Link to="panels">Panels</Link></li>
                            <li><Link to="tosters">Tosters</Link></li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="right-sec">
                    
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UIcomponents;
