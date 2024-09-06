import React from 'react';
import MovingAnimation from './MovingAnimation';

const MultipleAnimations = ({ count = 5 }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#333333' // Dark gray background for visibility
    }}>
      {Array.from({ length: count }, (_, index) => (
        <MovingAnimation key={index} />
      ))}
    </div>
  );
};

export default MultipleAnimations;