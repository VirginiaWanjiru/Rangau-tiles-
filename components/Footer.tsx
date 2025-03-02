"use client";

import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import logo from './images/Rangau-logo.png';
const Footer = () => {
  return (
    <footer className="bg-orange-500 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 ">
        <div className="">
          <div className="justify-center flex items-center space-x-4">
          <Image src={logo} alt="Logo" className="h-24 w-auto " />
          </div>
          <p className="text-base leading-relaxed max-w-sm text-black text-justify">
            Your Trusted Partner in Quality Products and Services. 
            Innovation in every installation. We specialize in supplying high-quality materials 
            to meet the needs of property developers, interior designers, and homeowners.
          </p>
        </div>

        <div className="space-y-6 ml-32">
          <h3 className="text-2xl font-semibold text-black">Reach us</h3>
          <div className="space-y-4">
            <a href="mailto:rangautiles@gmail.com" 
               className="flex items-center space-x-3 hover:opacity-80 transition-opacity text-black">
              <Mail size={20} className="text-black" />
              <span className="text-base">rangautiles@gmail.com</span>
            </a>
            <a href="tel:0117263212" 
               className="flex items-center space-x-3 hover:opacity-80 transition-opacity text-black">
              <Phone size={20} className="text-black" />
              <span className="text-base">0117263212</span>
            </a>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-black" />
              <div className="space-y-1 text-black">
                <p className="text-base">OleKasasi, Ongata Rongai</p>
                <p className="text-base">Exciting, Magadi Road</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 ml-24">
          <h3 className="text-2xl font-semibold text-black">Follow us</h3>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity text-black">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity text-black">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity text-black">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;