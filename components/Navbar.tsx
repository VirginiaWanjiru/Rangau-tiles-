"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from './images/Rangau-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/sanitaryware' },
    { name: 'Call Us', path: '/contactus' },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <Link href="/" className="flex items-center mr-12">
          <Image src={logo} alt="Logo" className="h-24 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-gray-800 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 mx-auto pr-24">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                'relative text-gray-800 hover:text-gray-900 transition-colors duration-200 text-base font-medium',
                'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full',
                'after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform',
                'hover:after:scale-x-100'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
