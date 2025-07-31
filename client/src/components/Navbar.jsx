import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'appointment', label: 'Book Appointment' },
    { id: 'patients', label: 'Treated Patients' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-black via-gray-300 to-gary-600 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Dr. N Hasan's Neha Clinic
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ id, label }, index) => (
            <motion.button
              key={id}
              className={`text-gray-900 hover:text-red-500 font-medium transition-all duration-300 ${
                activeSection === id ? 'text-red-500 font-bold' : ''
              }`}
              onClick={() => scrollToSection(id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu Toggle">
            <motion.svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map(({ id, label }) => (
              <motion.button
                key={id}
                className="block text-gray-700 hover:text-red-600 font-medium w-full text-left"
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  scrollToSection(id);
                  setIsMenuOpen(false);
                }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
