"use client";
import  React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, AtSign } from "lucide-react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "@/components/images/Rangau 2 photo.png";
import hero from "@/components/images/bg-photo.png";


import { IoIosArrowForward } from "react-icons/io";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

type FormData = {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


const Contact = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Form data:", data);
    
    // Simulate success response after 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  const productOptions = [
    { category: "Tiles", options: ["Wall Tiles", "Floor Tiles"] },
    { category: "Sanitaryware", options: ["Toilet", "Basin", "Sink", "Faucet","Cabinet", "Shower","Mirror"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800">
          <Image
            src={hero}
            alt="Contact Banner"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white tracking-wider"
          >CONTACT US
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="mt-5 mx-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <IoIosArrowForward />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Call Us</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              {/* Contact Header */}
                <h1 className="p-4 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">
                  Let's Get In Touch
                </h1>
      {/* Contact Content */}
      <div className="max-w-8xl mx-auto w-full py-12 px-3">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          
          {/* Contact Info & Form - New Layout */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* First Row - 2 Cards */}
            <div className="col-span-1 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone Contact */}
              <ContactCard 
                icon={<Phone className="w-6 h-6 text-gray-700" />} 
                title="Call Us"
                items={[
                  "+254 117263212",
                  "+254 117263214",
                  "+254 795216069"
                ]}
                extraClasses="h-45"
              />

              {/* Social Media */}
              <ContactCard 
                icon={<AtSign className="w-6 h-6 text-gray-700" />} 
                title="Social Media"
                items={[
                  "@Rangau Tiles",
                  "@Rangau Tiles",
                  "@Rangau Tiles"
                ]}
                socialIcons={true}
                extraClasses="h-45"
              />
              {/* Address */}
              <ContactCard 
                icon={<MapPin className="w-6 h-6 text-gray-700" />} 
                title="Location"
                items={[
                  "Ground Floor, Sharriff plaza, Ole Kasasi road.",
                  "Opposite Exciting Hotel, Magadi Road"
                ]}
                extraClasses="h-40"
              />
              {/* Email */}
              <ContactCard 
                icon={<Mail className="w-6 h-6 text-gray-700" />} 
                title="Email Address"
                items={[
                  "rangautiles@gmail.com"
                ]}
                extraClasses="h-40"
              />

            </div>

            {/* Contact Form - Right Side */}
            <div className="col-span-1 lg:col-span-4 relative pt-10">
              <h3 className="text-gray-900 font-medium mb-2 absolute -top-1 left-0 right-0 text-center z-10">Send us a message!</h3>
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 shadow-md">
                <div className="p-6 flex flex-col h-full">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-black text-sm font-medium mb-1">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-black focus:ring-2 focus:ring-orange-300 outline-none"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="text-xs text-red-100 mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-black text-sm font-medium mb-1">Your Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-black focus:ring-2 focus:ring-orange-300 outline-none"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && <p className="text-xs text-red-100 mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-black text-sm font-medium mb-1">Your Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 border border-black focus:ring-2 focus:ring-orange-300 outline-none"
                        {...register("phone", { required: "Phone number is required" })}
                      />
                      {errors.phone && <p className="text-xs text-red-100 mt-1">{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="product" className="block text-black text-sm font-medium mb-1">Product of Interest</label>
                      <select
                        id="product"
                        className="w-full px-3 py-2 border border-black focus:ring-2 focus:ring-orange-300 outline-none"
                        {...register("product", { required: "Please select a product" })}
                        defaultValue=""
                      >
                        <option value="" disabled>Select Product</option>
                        {productOptions.map((category, idx) => (
                          <optgroup key={idx} label={category.category}>
                            {category.options.map((option, optIdx) => (
                              <option key={`${idx}-${optIdx}`} value={option}>{option}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      {errors.product && <p className="text-xs text-red-100 mt-1">{errors.product.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-black text-sm font-medium mb-1">Your Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-black focus:ring-2 focus:ring-orange-300 outline-none resize-none"
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && <p className="text-xs text-red-100 mt-1">{errors.message.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                    
                    {submitSuccess && (
                      <p className="text-white text-center bg-green-500/50 py-2">
                        Message sent successfully!
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo Section */}
        <div className="w-full flex justify-center my-8">
           <Image
            src={background} 
            alt="Rangau Logo" 
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Map Section - First Map with Info Card */}
      <motion.div 
        variants={itemVariants}
        className="w-full mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Small Map */}
        <div className="flex justify-center md:justify-end h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6403205474376!2d36.7796049105919!3d-1.3923369985886447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0f08acfe7f8b%3A0x90c5c52bd3122181!2sRangau%20Tiles%20and%20Sanitaryware%20Limited!5e0!3m2!1sen!2ske!4v1740939185655!5m2!1sen!2ske"
            className="w-full h-52 md:h-[220px] rounded-lg shadow-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        {/* Location Card */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="bg-white rounded-lg border border-orange-500 p-4 shadow-md w-full max-w-xs transform transition-transform hover:scale-102 duration-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Ole Kasasi, Masai Lodge Rd</h4>
                <p className="text-sm text-gray-600">Next to Ole Kasasi Police station, Ongata Rongai</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Second Map Section */}
      <motion.div 
        variants={itemVariants}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Location Card */}
        <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
          <div className="bg-white rounded-lg border border-orange-500 p-4 shadow-md w-full max-w-xs transform transition-transform hover:scale-102 duration-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Exciting, Opp. Exciting Hotel</h4>
                <p className="text-sm text-gray-600">Magadi Rd. Ongata Rongai</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Map */}
        <div className="flex justify-center md:justify-start order-1 md:order-2 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6347814345304!2d36.72896331059185!3d-1.395606798585333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0431a62a1bcf%3A0x3c2eb4e18031fe89!2sExciting%20Hotel!5e0!3m2!1sen!2ske!4v1740939307221!5m2!1sen!2ske"
            className="w-full h-52 md:h-[220px] rounded-lg shadow-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;