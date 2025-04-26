import React from 'react';

interface IphoneFrameProps {
  children: React.ReactNode;
}

const IphoneFrame: React.FC<IphoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] bg-black rounded-[3rem] border-[14px] border-black shadow-xl">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full" />
      </div>
      
      {/* Screen Content */}
      <div className="h-full w-full bg-white overflow-hidden rounded-[2rem]">
        {children}
      </div>
    </div>
  );
};

export default IphoneFrame;