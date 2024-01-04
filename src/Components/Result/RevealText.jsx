import React, { useEffect, useRef } from 'react';

const RevealText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const characters = containerRef.current.querySelectorAll('span');

    characters.forEach((char, index) => {
      char.style.animationDelay = `${index * 0.3}s`;
    });
  }, [text]);

  return (
    <div className="text-reveal-left-animation" ref={containerRef}>
      {text?.split('').map((char, index) => (
        <span className=' text-[40px] font-semibold' key={index}>{char}</span>
      ))}
    </div>
  );
};

export default RevealText;
