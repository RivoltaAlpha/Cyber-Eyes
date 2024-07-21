import React from 'react';
import backgroundImage from '/images/background.png'; // Replace with your actual image path

const CTFPlatform: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      <main className="flex-grow flex flex-col bg-black bg-opacity-50 items-center justify-center text-white px-4">
        <h1 className="text-8xl font-bold mb-8 text-center">CTF Platform</h1>
        <p className="max-w-2xl font-semibold text-xl text-center mb-8">
          Capture The Flag (CTF) is a cybersecurity competition where participants solve challenges to find hidden 'flags'. 
          Our platform hosts a variety of challenges across categories like cryptography, web exploitation, reverse engineering, and more. 
          Sharpen your skills, compete with others, and climb the leaderboard!
        </p>
        <a 
          href="http://ctf.cybereyesnetworks.co.ke/" 
          className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Start Hacking
        </a>
      </main>
    </div>
  );
};

export default CTFPlatform;