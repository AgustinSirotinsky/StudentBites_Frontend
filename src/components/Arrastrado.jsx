import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SwipeToNavigate = ({ children }) => {
  const history = useHistory();
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const gestureThreshold = 50; // Puedes ajustar este valor según tu preferencia

    if (touchStartX - touchEndX > gestureThreshold) {
      // Deslizamiento hacia la izquierda, cambia la ruta
      history.push('/siguiente-ruta');
    } else if (touchEndX - touchStartX > gestureThreshold) {
      // Deslizamiento hacia la derecha, cambia la ruta (por ejemplo, volver)
      history.goBack();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </div>
  );
};

export default SwipeToNavigate;
