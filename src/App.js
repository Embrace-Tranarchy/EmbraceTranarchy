import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Browse from './components/pages/Browse';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Browse' element={<Browse />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
