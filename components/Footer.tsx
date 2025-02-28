"use client";

import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import logo from './images/Rangau-logo.png';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Logo" className="h-24 w-auto" />
          <p className="text-base leading-relaxed max-w-sm mt-4">
            Your Trusted Partner in Quality Products and Services. Innovation in every installation. We specialize in supplying high-quality materials to meet the needs of property developers, interior designers, and homeowners.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold">Reach us</h3>
          <div className="space-y-4">
            <a href="mailto:rangautiles@gmail.com" className="flex items-center space-x-3 hover:opacity-80">
              <Mail size={20} />
              <span className="text-base">rangautiles@gmail.com</span>
            </a>
            <a href="tel:0117263212" className="flex items-center space-x-3 hover:opacity-80">
              <Phone size={20} />
              <span className="text-base">0117263212</span>
            </a>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-base">OleKasasi, Ongata Rongai</p>
                <p className="text-base">Exciting, Magadi Road</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold">Follow us</h3>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="#" className="hover:opacity-80">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:opacity-80">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <Facebook size={28} />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
