"use client";

import { Mail, Phone, MapPin} from 'lucide-react';
import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '@/components/images/Rangau-logo.png';

const Footer = () => {
  return (
    <footer className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Logo and description column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex justify-center md:justify-start mb-4">
            <Image src={logo} alt="Logo" className="h-24 w-auto" />
          </div>
          <p className="text-base leading-relaxed text-black text-center md:text-justify max-w-sm mx-auto md:mx-0">
            Your Trusted Partner in Quality Products and Services. 
            Innovation in every installation. We specialize in supplying high-quality materials 
            to meet the needs of property developers, interior designers, and homeowners.
          </p>
        </div>

        {/* Contact information column */}
        <div className={cn(
          "space-y-6 flex flex-col",
          "items-center md:items-start",
          "md:ml-16 lg:ml-32"
        )}>
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
                <p className="text-base">
                  <a 
                    href="https://www.google.com/maps/place/Rangau+Tiles+and+Sanitaryware+Limited/@-1.392337,36.7796049,17z/data=!3m1!4b1!4m6!3m5!1s0x182f0f08acfe7f8b:0x90c5c52bd3122181!8m2!3d-1.392337!4d36.7821852!16s%2Fg%2F11lyzwc_zr?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black no-underline hover:opacity-80"
                  >
                    OleKasasi, Ongata Rongai
                  </a>
                </p>
                <p className="text-base">
                  <a 
                    href="https://www.google.com/maps/place/1%C2%B023'43.4%22S+36%C2%B043'54.1%22E/@-1.3953783,36.72912,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.3953783!4d36.7316949?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black no-underline hover:opacity-80"
                  >
                    Exciting, Magadi Road
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social media column */}
        <div className={cn(
          "space-y-6 flex flex-col",
          "items-center md:items-start",
          "md:ml-8 lg:ml-24"
        )}>
          <h3 className="text-2xl font-semibold text-black">Follow us</h3>
          <div className="flex items-center space-x-6">
            <a 
                href="https://www.instagram.com/rangautiles/"
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity text-black" 
                title="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://x.com/rangautiles" 
               target="_blank"
               rel="noopener noreferrer"
               className="hover:opacity-80 transition-opacity text-black" 
               title="Custom Icon">
              <FaXTwitter size={28} />
            </a>
            <a href="https://www.facebook.com/people/Rangau-Tiles-and-Sanitaryware-Ltd/61570018273699/"
               target="_blank"
               rel="noopener noreferrer" 
               className="hover:opacity-80 transition-opacity text-black" 
               title="Facebook">
              <FaFacebook size={28} />
            </a>
            <a 
              href="https://www.tiktok.com/@rangautiles" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity text-black" 
              title="Tiktok">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;