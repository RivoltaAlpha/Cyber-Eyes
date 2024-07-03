// pages/home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/mainPage';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <HeroSection />
      <ProgramsSection />
    </main>
  </div>
  );
};

export default Home;
  