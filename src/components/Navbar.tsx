'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">RideShare</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#ride" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                Ride
              </a>
              <a href="#drive" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                Drive
              </a>
              <a href="#business" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                Business
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              Log in
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-6">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 p-2"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#ride" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-sm font-medium">
              Ride
            </a>
            <a href="#drive" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-sm font-medium">
              Drive
            </a>
            <a href="#business" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-sm font-medium">
              Business
            </a>
            <a href="#about" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-sm font-medium">
              About
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-900">
                Log in
              </Button>
              <Button className="w-full bg-black text-white hover:bg-gray-800 text-sm font-medium">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}