import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ardent Cooling Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;