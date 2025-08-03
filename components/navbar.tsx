"use client";

import { Car, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
            <Car className="h-6 w-6 text-white" />
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            EggyCar
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/faqs"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/how-to-play"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            How to Play
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            Contact
          </Link>
          <span className="border px-4 py-1.5 rounded-sm">English</span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-gray-600 hover:text-orange-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              href="/faqs"
              onClick={closeMenu}
              className="text-gray-600 hover:text-orange-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/how-to-play"
              onClick={closeMenu}
              className="text-gray-600 hover:text-orange-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              How to Play
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-600 hover:text-orange-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <span className="border px-4 py-1.5 rounded-sm text-sm">
                English
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
