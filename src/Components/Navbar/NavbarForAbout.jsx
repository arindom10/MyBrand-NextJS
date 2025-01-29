"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaInfoCircle } from "react-icons/fa";

const NavbarForAbout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <FaInfoCircle size={24} /> About Us
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-blue-400 transition">
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-700 shadow-lg transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } transition-all duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForAbout;
