import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 z-10" />

      {/* Abstract Floating Shapes - Static & Optimized */}
      {/* transform-gpu triggers hardware acceleration */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-ardent-500/20 rounded-full blur-[80px] transform-gpu translate-z-0"
      />

      <div 
        className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] transform-gpu translate-z-0" 
      />

      <div 
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[60px] transform-gpu translate-z-0" 
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default Background;