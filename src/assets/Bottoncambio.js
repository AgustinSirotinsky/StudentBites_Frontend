import React, { useState } from 'react';
import './Bottoncambio.css';

export default function Bottoncambio({ label1, label2 }) {
    const [isSwitch1On, setIsSwitch1On] = useState(true);
    const [isSwitch2On, setIsSwitch2On] = useState(false);

    const handleToggle1 = () => {
    setIsSwitch1On(!isSwitch1On);
    setIsSwitch2On(false);
    };

    const handleToggle2 = () => {
    setIsSwitch2On(!isSwitch2On);
    setIsSwitch1On(false);
    };

  return (
    <div className="dual-toggle-switch">
      <div
        className={`toggle-switch ${isSwitch1On ? 'on' : 'off'}`}
        onClick={handleToggle1}
      >
        {label1}
      </div>

      <div
        className={`toggle-switch ${isSwitch2On ? 'on' : 'off'}`}
        onClick={handleToggle2}
      >
        {label2}
      </div>
    </div>
  );
}