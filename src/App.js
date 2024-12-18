import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import DietPlanForm from './components/DietPlanForm';


function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JoinUs" element={<DietPlanForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

