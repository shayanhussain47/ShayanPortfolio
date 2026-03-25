import React from 'react';

const BloomDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 w-full flex justify-center items-center pointer-events-none z-0 ${className}`}>
      {/* The "Needle" Component */}
      <div 
        className="w-[85%] h-[40px] scale-y-[0.03]"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)" }}
      />
      {/* The "Bloom" Layer */}
      <div 
        className="absolute w-[30%] h-[20px] bg-white/40 blur-[15px] scale-y-[0.1]"
      />
    </div>
  );
};

export default BloomDivider;
