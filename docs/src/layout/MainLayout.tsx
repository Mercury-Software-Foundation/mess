import React from 'react';
import Navbar from '../components/Navbar';
import { BackgroundGradientAnimation } from '../components/bgGradient';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      {/* Background Animation */}
      <BackgroundGradientAnimation />
      <div className="absolute z-20 top-0 w-full">
        <Navbar  />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
