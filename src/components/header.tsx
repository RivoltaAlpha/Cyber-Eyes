import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-yellow-500">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          Cyber-Eyes Network
        </div>
        <div className="flex items-center">
          <NavLink to="/" className="text-yellow-500 hover:text-white px-3 py-2">Home</NavLink>
          <NavLink to="CTF Platform" className="text-yellow-500 hover:text-white px-3 py-2">CTF Platform</NavLink>
          <NavLink to="/cyber-security" className="text-yellow-500 hover:text-white px-3 py-2">Cyber Security</NavLink>
          <NavLink to="/software-engineering" className="text-yellow-500 hover:text-white px-3 py-2">Software Engineering</NavLink>
          <NavLink to="/News Hub" className="text-yellow-500 hover:text-white px-3 py-2">News Hub</NavLink>
          <NavLink to="/materials" className="text-yellow-500 hover:text-white px-3 py-2">Reading Materials</NavLink>
          <NavLink to="/contact" className="text-yellow-500 hover:text-white px-3 py-2">
          <button className="bg-yellow-500 hover:bg-gold-600 text-white font-bold py-2 px-4 rounded">Contact Us</button>
          </NavLink>
          <Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-4">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import { Link } from 'react-router-dom';

// // In a component
// <Link to="/contact" className="...">Contact Us</Link>

// // Or using useNavigate hook
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// // Later in your code
// navigate('/contact');