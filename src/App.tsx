import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Footer from './components/footer';
import ProgramsSection from './components/mainPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;