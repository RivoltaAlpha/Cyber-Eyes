import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Footer/>

    </div>
  );
};

export default App;