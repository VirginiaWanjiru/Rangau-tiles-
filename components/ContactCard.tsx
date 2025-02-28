"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, X } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  extraClasses?: string;
  socialIcons?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  items, 
  extraClasses = "",
  socialIcons = false
}) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={`bg-white rounded-lg border border-black p-5 shadow-md transition-all duration-300 ${extraClasses}`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-3">{icon}</div>
        <h3 className="text-lg font-medium text-orange-500 mb-3">{title}</h3>
        {socialIcons ? (
          <div className="flex flex-col space-y-3 mb-1">
            {items.map((item, index) => (
              <div key={index} className="text-gray-600 flex items-center gap-3">
                <span>{index === 0 ? <Facebook className="w-6 h-6 text-black" /> : 
                       index === 1 ? <Instagram className="w-6 h-6 text-black" /> : 
                       <X className="w-6 h-6 text-black" />}</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2 text-center mb-1">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;