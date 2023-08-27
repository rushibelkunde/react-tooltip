import React from 'react';
import './Tooltip.css';

const Tooltip = ({ position, children }) => {
  return (
    <div className={`tooltip-container`}>
      <button className="tooltip-button">{children}</button>
      <div className={`tooltip ${position}`}>
        Thank you for hovering
        </div>
    </div>
  );
};

export default Tooltip;
