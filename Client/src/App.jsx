import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Halloffame from './pages/Halloffame';
import Teamview from './pages/Teamview';
import Sponser from './pages/Sponser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/halloffame" element={<Halloffame />} />
        <Route path="/teamview" element={<Teamview />} />
        <Route path="/sponser" element={<Sponser />} />
      </Routes>
    </Router>
  );
}

export default App;