// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer_Component from './components/footer/footer';
import AboutUs from './components/footer/About';
import Features from './components/footer/Features';
import GettingStarted from './components/footer/GettingStarted';
import CustomerSupport from './components/footer/CustomerSupport';
import FAQ from './components/footer/FAQ';
import TermsAndConditions from './components/footer/TermsConditions';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import NavComponent from './components/navbar/navbar';
import Discover from './components/Discover/Discover';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavComponent/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer_Component />
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="flex-grow">
    <Discover/>
  </div>
);

export default App;
