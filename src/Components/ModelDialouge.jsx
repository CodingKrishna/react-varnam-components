import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ModelDialouge.css';

const ModelDialogue = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDialogue = () => {
    setIsVisible(true);
  };

  const hideDialogue = () => {
    setIsVisible(false);
  };

  return (
    <div id="ModelDialogue" className="col-md-12 col-xs-12 pop-sec cls-shadow">
      <h1 className="txt-cntr">Model Dialogue</h1>
      <div className="col-md-4 col-xs-6 show-pop">
        <button className="btn-showDlg" onClick={showDialogue}>
          ModelDialogue
        </button>
      </div>
      <div
        className="overlay-Model"
        id="showModel"
        style={{ display: isVisible ? 'flex' : 'none' }} 
      >
        <div className="popupBox" id="showDialogue">
          <h2>Content</h2>
          <button className="cls-btn" title="close" onClick={hideDialogue}>
            <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelDialogue;
