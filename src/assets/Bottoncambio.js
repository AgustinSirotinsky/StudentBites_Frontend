import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import './Bottoncambio.css';

export default function Bottoncambio({ label1, label2 }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleToggle1 = () => {
    navigate('/Principal');
    };

    const handleToggle2 = () => {
    navigate('/Feed');
    };

  return (
    <div className="dual-toggle-switch">
      <div
        className={`toggle-switch ${location.pathname === '/Principal' ? 'active' : ''}`}
        onClick={handleToggle1}
      >
        {label1}
      </div>

      <div
        className={`toggle-switch ${location.pathname === '/Feed' ? 'active' : ''}`}
        onClick={handleToggle2}
      >
        {label2}
      </div>
    </div>
  );
}