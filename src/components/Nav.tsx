"use client";

import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1c1c35] bg-[#07070f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-violet-600 font-mono tracking-tighter">
              AG
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
              Services
            </a>
            <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
              About
            </a>
            <a href="/contact" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="/contact"
              className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#1c1c35]">
            <div className="flex flex-col space-y-4">
              <a
                href="/services"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/about"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="/contact"
                className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
