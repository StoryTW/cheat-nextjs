import useRainAnimation from '@/hooks/useRainAnimation';
import React from 'react';
import './RainEffect.scss';

const RainEffect = () => {
  const { frontRowRef, backRowRef } = useRainAnimation();

  return (
    <div className='back-row-toggle splat-toggle'>
      <div className='rain front-row' ref={frontRowRef}></div>
      <div className='rain back-row' ref={backRowRef}></div>
    </div>
  );
};

export default RainEffect;
