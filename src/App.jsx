// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer_Component from './components/Footer/footer';
import AboutUs from './components/Footer/About';
import Features from './components/Footer/Features';
import GettingStarted from './components/Footer/GettingStarted';
import CustomerSupport from './components/Footer/CustomerSupport';
import FAQ from './components/Footer/FAQ';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer_Component />
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="flex-grow">
    <h1 className="text-center text-4xl mt-10">Welcome to Manifesta!</h1>
    {/* Additional homepage content */}
  </div>
);

export default App;
