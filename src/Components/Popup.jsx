import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import './Popup.css';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showPop = () => {
        setIsVisible(true);
    };

    const hidePop = () => {
        setIsVisible(false);
    };

    return (
        <div id="popup" className="col-md-12 col-xs-12 pop-sec">
            <h1 className="txt-cntr">Model Dialouge</h1>
            <div className="col-md-4 col-xs-6 show-pop">
                <button className="btn-pop" onClick={showPop}>Show Popup</button>
            </div>
            {isVisible && (
                <div className="overlay">
                    <div className="popup">
                        <h2>Are You Sure?</h2>
                        <button className="cls-btn" title="close" onClick={hidePop}>
                            <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
                        </button>
                        <button className="yes-btn1" onClick={hidePop}>Yes</button>
                        <button className="no-btn2" onClick={hidePop}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
