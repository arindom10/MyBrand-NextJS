"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          MyBrand
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-500 block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
