import React, { useState } from 'react'; // Add useState import
import { NavLink } from 'react-router-dom'; // Add NavLink import

const Header = ({ isConnected, connectWallet, disconnectWallet }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define isDropdownOpen
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => { // Define toggleDropdown
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    disconnectWallet();
    alert('Logged out successfully!');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <NavLink to="/">Hyperbolic Crypto Explorer</NavLink>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-400'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-400'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              isActive ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-400'
            }
          >
            Insights
          </NavLink>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-400 focus:outline-none"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                <NavLink
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Settings
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
        <button
          onClick={connectWallet}
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isConnected ? 'Connected' : 'Connect Wallet'}
        </button>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <NavLink
            to="/"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/insights"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Insights
          </NavLink>
          <NavLink
            to="/settings"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            Settings
          </NavLink>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Logout
          </button>
          <button
            onClick={connectWallet}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header; // Add default export