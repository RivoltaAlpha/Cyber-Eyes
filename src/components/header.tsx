import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-yellow-500">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          Cyber-Eyes Network
        </div>
        <div className="flex ">
          {['Home','CTF Platform', 'Cyber Security','Software Engineering', 'News Hub', 'Reading Materials'].map((item) => (
            <a key={item} href="#" className="text-yellow-500 hover:text-white px-6 py-2">{item}</a>
          ))}
          <button className="bg-yellow-500 hover:bg-gold-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;