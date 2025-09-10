import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white shadow w-full top-0 left-0 right-0">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section: Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="../src/assets/profile-img.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="font-bold tracking-wide">
            HABIB OLANREWAJU BINUTIRI
          </span>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="font-semibold hover:text-gray-300">
            HOME
          </a>
          <a href="#about" className="font-semibold hover:text-gray-300">
            ABOUT
          </a>
          <a href="#projects" className="font-semibold hover:text-gray-300">
            PROJECTS
          </a>
          <a href="#contact" className="font-semibold hover:text-gray-300">
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile Nav Links (Collapsible with Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-start px-6 pb-4 space-y-3">
              <a href="#home" className="font-semibold hover:text-gray-300">
                HOME
              </a>
              <a href="#about" className="font-semibold hover:text-gray-300">
                ABOUT
              </a>
              <a href="#projects" className="font-semibold hover:text-gray-300">
                PROJECTS
              </a>
              <a href="#contact" className="font-semibold hover:text-gray-300">
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
