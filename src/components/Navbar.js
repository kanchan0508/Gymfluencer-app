import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar({openForm}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="logo.svg"
              alt="GymFluencer"
              className="h-10 w-auto"
            />
            
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-red-500">Home</Link>
            <Link to="/about" className="text-white hover:text-red-500">About</Link>
            <Link to="/services" className="text-white hover:text-red-500">Our Services</Link>
            <Link to="/benefits" className="text-white hover:text-red-500">Benefits</Link>
            <Link to="/blogs" className="text-white hover:text-red-500">Blogs</Link>
            <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
          </div>

          <Link
            to="/JoinUs"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            <button  onClick={openForm}>
            Join us now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

