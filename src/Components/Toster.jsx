import React, { useState } from "react";
import './Toster.css';

const Toster = () => {
  const [alerts, setAlerts] = useState({
    default: true,
    info: true,
    primary: true,
    success: true,
    warning: true,
    danger: true,
  });

  const closeAlert = (type) => {
    setAlerts((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="col-md-12 col-xs-12 border-shw tos-sec hgt-toster">
      <div className="pad-cls">
        <h1 className="txt-cntr">Tosters</h1>
        {alerts.default && (
          <div className="alert alert-default">
            <span>alert default</span>
            <button className="alert-close" onClick={() => closeAlert('default')}>X</button>
          </div>
        )}
        {alerts.info && (
          <div className="alert alert-info">
            <span>alert info</span>
            <button className="alert-close" onClick={() => closeAlert('info')}>X</button>
          </div>
        )}
        {alerts.primary && (
          <div className="alert alert-primary">
            <span>alert primary</span>
            <button className="alert-close" onClick={() => closeAlert('primary')}>X</button>
          </div>
        )}
        {alerts.success && (
          <div className="alert alert-success">
            <span>alert success</span>
            <button className="alert-close" onClick={() => closeAlert('success')}>X</button>
          </div>
        )}
        {alerts.warning && (
          <div className="alert alert-warning">
            <span>alert warning</span>
            <button className="alert-close" onClick={() => closeAlert('warning')}>X</button>
          </div>
        )}
        {alerts.danger && (
          <div className="alert alert-danger">
            <span>alert danger</span>
            <button className="alert-close" onClick={() => closeAlert('danger')}>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toster;
