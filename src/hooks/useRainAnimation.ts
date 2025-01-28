import React, { useEffect, useRef } from 'react';

const useRainAnimation = () => {
  const frontRowRef = useRef<HTMLDivElement | null>(null);
  const backRowRef = useRef<HTMLDivElement | null>(null);

  const makeItRain = () => {
    if (!frontRowRef.current || !backRowRef.current) return;

    const frontRow = frontRowRef.current;
    const backRow = backRowRef.current;

    frontRow.innerHTML = '';
    backRow.innerHTML = '';

    let increment = 0;
    let drops = '';
    let backDrops = '';

    while (increment < 100) {
      // const randoHundo = Math.floor(Math.random() * 98) + 1;
      const randoHundo = Math.floor(Math.random() * 98) + 1;
      const randoFiver = Math.floor(Math.random() * 4) + 2;
      increment += randoFiver;

      drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver * 2 + 99}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                </div>`;

      backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver * 2 + 99}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                     <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                     <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                   </div>`;
    }

    frontRow.innerHTML = drops;
    backRow.innerHTML = backDrops;
  };

  useEffect(() => {
    makeItRain();

    return () => {
      if (frontRowRef.current) frontRowRef.current.innerHTML = '';
      if (backRowRef.current) backRowRef.current.innerHTML = '';
    };
  }, []);

  return { frontRowRef, backRowRef };
};

export default useRainAnimation;
