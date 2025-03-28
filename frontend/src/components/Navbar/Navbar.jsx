import React from 'react';
import logo from '../../assets/Icons/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="w-24 h-16" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/models" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Vehicle Models</a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="/signUp" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
