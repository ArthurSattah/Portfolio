
import AnimatedItemLeft from './AnimatedItemLeft';
import React from 'react';
const AnimationFromLeft = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <AnimatedItemLeft delay={index * 0.1}>
          {child}
        </AnimatedItemLeft>
      ))}
    </>
  );
};

export default AnimationFromLeft;