import React from 'react';
import { Users } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">VentureConnect</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#features" className="hover:text-indigo-200 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-200 transition">Pricing</a>
          <a href="#about" className="hover:text-indigo-200 transition">About</a>
          <a href="#team" className="hover:text-indigo-200 transition">Team</a>
        </div>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition">
          Join Now
        </button>
      </div>
    </nav>
  );
}