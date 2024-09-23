import React, { useState } from 'react';
import './Accordian.css';

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="Accordion" className="col-md-12 col-xs-12 acc-sec cls-shadow">
            <h1 className="txt-cntr">Accordion</h1>
            <div className="col-md-12 col-xs-12 acc-pro">
                <h2>Accordion with symbols</h2>

                <button className={`accordion ${openIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>Section 1</button>
                <div 
                    className="acc-panel" 
                    style={{ maxHeight: openIndex === 0 ? `${document.getElementById('panel-0').scrollHeight}px` : '0' }}
                >
                    <p id="panel-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <button 
                    className={`accordion ${openIndex === 1 ? 'active' : ''}`} 
                    onClick={() => toggleAccordion(1)}
                >
                    Section 2
                </button>
                <div 
                    className="acc-panel" 
                    style={{ maxHeight: openIndex === 1 ? `${document.getElementById('panel-1').scrollHeight}px` : '0' }}
                >
                    <p id="panel-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <button 
                    className={`accordion ${openIndex === 2 ? 'active' : ''}`} 
                    onClick={() => toggleAccordion(2)}
                >
                    Section 3
                </button>
                <div 
                    className="acc-panel" 
                    style={{ maxHeight: openIndex === 2 ? `${document.getElementById('panel-2').scrollHeight}px` : '0' }}
                >
                    <p id="panel-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
