import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/house-animation.json';

const HeroAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full max-w-3xl mx-auto">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full"
          style={{ transform: 'scale(1.2)' }}
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
