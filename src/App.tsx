import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login';
import Contact from './pages/contact';
import Register from './pages/register';
import Footer from './components/footer';
import Home from './pages/home';
import FooterSignUp from './pages/signup';
import About from './pages/about-us';
// import AdminDashboard from './pages/admin_dashboard';
// import CyberSec from './pages/cyberSec';
// import Error from './pages/error';
// import Materials from './pages/materials';
// import SoftwareEng from './pages/software-eng';
// import UserDashboard from './pages/user_Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} /> 
            <Route path="/signup" element={<FooterSignUp />} />
            <Route path="/about-us" element={<About />} />
            {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/cyber-security" element={<CyberSec />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/software-engineering" element={<SoftwareEng />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="*" element={<Error />} />  */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;