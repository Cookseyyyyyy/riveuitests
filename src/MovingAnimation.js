import React, { useEffect, useState } from 'react';
import RiveAnimation from './RiveAnimation';
import './MovingAnimation.css';

const MovingAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveAnimation = () => {
      const newX = Math.random() * 80;
      const newY = Math.random() * 80;
      setPosition({ x: newX, y: newY });
    };

    moveAnimation();
    const intervalId = setInterval(moveAnimation, 5000 + Math.random() * 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className="moving-animation"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <RiveAnimation />
    </div>
  );
};

export default MovingAnimation;