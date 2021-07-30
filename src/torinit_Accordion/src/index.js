import React, { useState } from 'react';
import './style.css'
const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;