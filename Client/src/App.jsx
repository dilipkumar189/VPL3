import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './User/pages/Home';
import Navbar from './User/components/Navbar';
import Halloffame from './User/pages/Halloffame';
import Teamview from './User/pages/Teamview';
import Sponser from './User/pages/Sponser';
import Team from './User/pages/Team';
import Advertiser from './User/pages/Advertiser';
import Rules from './User/pages/Rules';
import Aboutus from './User/pages/Aboutus';
import Contactus from './User/pages/Contactus';
import Profile from './User/pages/Profile';
import Profileform from './User/pages/Profileform';
import Teamform from './User/pages/Teamform';

// Admin 
import Dashboard from './Admin/Pages/Dashboard';
import ABrand from './Admin/Pages/ABrand';
import { Brand_Form } from './Admin/Pages/ABrand/Brand_Form';
import User from './Admin/Pages/User';
import ATeam from './Admin/Pages/ATeam';
import ASponser from './Admin/Pages/ASponser';
import AAdvertiser from './Admin/Pages/AAdvertiser';
import SType from './Admin/Pages/SType';

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
        <Route path="/dashboard/users" element={<User />} />
        <Route path="/dashboard/teams" element={<ATeam />} />
        <Route path="/dashboard/sponsers" element={<ASponser />} />
        <Route path="/dashboard/advertisers" element={<AAdvertiser />} />
        <Route path="/dashboard/sponser_type" element={<SType />} />

        <Route path="/dashboard/brand" element={<ABrand />} />
        <Route path="/dashboard/brand_form" element={<Brand_Form />} />

      </Routes>
    </Router>
  );
}

export default App;