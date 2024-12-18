import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'react-feather';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <img
            src="logo.svg"
            alt="GymFluencer"
            className="w-15 h-15 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Where Fitness Meets Social Connection!</h3>
          <p className="text-gray-400 mb-6">hello@gymfluencer.com</p>
          
          <nav className="flex space-x-6 mb-8">
            <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link to="/diet-plan" className="text-gray-400 hover:text-white">Diet Plan</Link>
            <Link to="/features" className="text-gray-400 hover:text-white">Features</Link>
            <Link to="/faqs" className="text-gray-400 hover:text-white">FAQs</Link>
          </nav>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            © 2024 GymFluencer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

