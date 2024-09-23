import React from 'react';
import './Badges.css';

const Badges = () => {
    return (
        <div id="badges" className="col-md-12 col-xs-12 comp-sec">
            <h1 className="txt-cntr">Badges</h1>
            <div className="bdg-container pad-cls">
                <div className="col-md-12 col-xs-12 cls-shadow">
                    <h3>Badge Sizes</h3>
                    <div id="badg1">
                        <p id="one1">1</p>
                    </div>
                    <div id="badg2">
                        <p id="two2">2</p>
                    </div>
                    <div id="badg3">
                        <p id="three3">3</p>
                    </div>
                    <div id="badg4">
                        <p id="four4">4</p>
                    </div>
                </div>
                <div className="col-md-12 col-xs-12 cls-shadow">
                    <h3>Badges In Buttons</h3>
                    <button id="btn1">Click Here
                        <span className="btn1">11</span>
                    </button>
                    <button id="btn2">Click Here
                        <span className="btn2">22</span>
                    </button>
                    <button id="btn3">Click Here
                        <span className="btn3">33</span>
                    </button>
                </div>
                <div className="listbadge cls-shadow">
                    <h3>Badges In Links</h3>
                    <ul>
                        <li><span id="link1">1</span><b> Phani</b></li>
                        <li><span id="link2">2</span><b> Krishna</b></li>
                        <li><span id="link3">3</span><b> Kishon</b></li>
                        <li><span id="link4">4</span><b> Bhargav</b></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Badges;
