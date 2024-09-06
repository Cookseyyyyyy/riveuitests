import React from 'react';
import { useRive } from 'rive-react';

const RiveAnimation = () => {
  const { RiveComponent } = useRive({
    src: '/flipper.riv',
    stateMachines: 'statemachine1',
    autoplay: true,
  });

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <RiveComponent />
    </div>
  );
};

export default RiveAnimation;