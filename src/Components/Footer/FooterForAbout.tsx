import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterForAbout: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 - About Info */}
        <div>
          <h2 className="text-xl font-bold text-white">About Our Company</h2>
          <p className="mt-2 text-sm">
            We are dedicated to providing quality services and making a
            difference in the industry.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-blue-400 transition">
                Our Team
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:info@yourcompany.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterForAbout;
