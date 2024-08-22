import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Halloffame from './pages/Halloffame';
import Teamview from './pages/Teamview';
import Sponser from './pages/Sponser';
import Team from './pages/Team';
import Advertiser from './pages/Advertiser';
import Rules from './pages/Rules';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Profile from './pages/profile';
import Profileform from './pages/Profileform';
import Dashboard from './pages/Admin/Pages/Dashboard';
import ABrand from './pages/Admin/Pages/ABrand';
import { Brand_Form } from './pages/Admin/Pages/ABrand/Brand_Form';
import Teamform from './pages/Teamform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/halloffame" element={<Halloffame />} />
        <Route path="/teamview" element={<Teamview />} />
        <Route path="/sponser" element={<Sponser />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileform" element={<Profileform />} />
        <Route path="/addteam" element={<Teamform />} />

        {/* Admin Route */}

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/dashboard/brand" element={<ABrand />} />
        <Route path="/dashboard/brand_form" element={<Brand_Form />} />

      </Routes>
    </Router>
  );
}

export default App;