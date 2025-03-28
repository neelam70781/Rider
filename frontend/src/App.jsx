import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';
import Models from './Pages/Models';
import BookABike from './components/BookABike';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/bookABike" element={<BookABike />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
