import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Bottoncambio.css';

export default function Bottoncambio({ label1, label2 }) {
  const [isSwitch1On, setIsSwitch1On] = useState(true);
  const [isSwitch2On, setIsSwitch2On] = useState(false);

  const location = useLocation();

  const handleToggle1 = () => {
    setIsSwitch1On(true);
    setIsSwitch2On(false);
  };

  const handleToggle2 = () => {
    setIsSwitch2On(true);
    setIsSwitch1On(false);
  };

  return (
    <div className="dual-toggle-switch">
      <Link to="/" className={`button ${location.pathname === '/' ? 'active' : ''}`} onClick={handleToggle1}>
        {label1}
        {location.pathname === '/' && <div className="active-bar"></div>}
      </Link>
      <Link to="/feed" className={`button ${location.pathname === '/feed' ? 'active' : ''}`} onClick={handleToggle2}>
        {label2}
        {location.pathname === '/feed' && <div className="active-bar"></div>}
      </Link>
    </div>
  );
}