import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Halloffame from './pages/Halloffame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/halloffame" element={<Halloffame />} />
      </Routes>
    </Router>
  );
}

export default App;