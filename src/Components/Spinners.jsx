import React from 'react';
import './Spinners.css';
const Spinners = () => {
    return (
        <div id="spinners" className="col-md-12 col-xs-12 spinner-sec">
            <h1 className="txt-cntr">Spinners</h1>
            <div className="col-md-12 col-xs-12 cls-shadow pad-cls">
                <h3>Spinner</h3>
                <div className="spinner"></div>

                <h3>Spinner2</h3>
                <div className="spinner2"></div>

                <h3>Dotted Spinner</h3>
                <div className="dot-spinner">
                    <div className="dot" id="dot0">
                        <div className="ball"></div>
                    </div>
                    <div className="dot" id="dot1">
                        <div className="ball"></div>
                    </div>
                    <div className="dot" id="dot2">
                        <div className="ball"></div>
                    </div>
                    <div className="dot" id="dot3">
                        <div className="ball"></div>
                    </div>
                    <div className="dot" id="dot4">
                        <div className="ball"></div>
                    </div>
                    <div className="dot" id="dot5">
                        <div className="ball"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinners;
