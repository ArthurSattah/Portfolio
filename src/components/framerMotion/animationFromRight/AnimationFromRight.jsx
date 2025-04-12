
import AnimatedItemRight from './AnimatedItemRight';
import React from 'react';
const AnimationFromRight = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <AnimatedItemRight delay={index * 0.1}>
          {child}
        </AnimatedItemRight>
      ))}
    </>
  );
};

export default AnimationFromRight;