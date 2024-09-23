import React from 'react';
import './ProgressBar.css';


const ProgressBars = () => {
    return (
        <div id="ProgressBar" className="col-md-12 col-xs-12 prog-sec">
            <h1 className="txt-cntr">ProgressBars</h1>
            <div className="prg_bars pad-cls">
                <p>ProgressBar</p>
                <div className="outerborder">
                    <div className="innerbox"></div>
                </div>

                <p>ProgressBar 2</p>
                <div className="outerborder">
                    <div className="innerbox" style={{ width: '30%' }}></div>
                </div>

                <p>ProgressBar 3</p>
                <div className="outerborder">
                    <div className="innerbox" style={{ width: '50%' }}></div>
                </div>

                <p>ProgressBar 4</p>
                <div className="outerborder">
                    <div className="innerbox" style={{ width: '70%' }}></div>
                </div>

                <p>Dynamic ProgressBar</p><br />
                <div className="outerborder5">
                    <div id="innerbox5"></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBars;
