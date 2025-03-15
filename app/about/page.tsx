"use client";
import React from "react";
import Head from "next/head";
import { RxCheck } from "react-icons/rx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blue from "@/components/images/Blue.png";
import { motion } from "framer-motion";
import Bright from "@/components/images/bright.jpeg";
import Bt from "@/components/images/bt.jpeg";
import Patterned from "@/components/images/patterned.jpeg";
import Tile from "@/components/images/tILE.jpeg";
import Tyle from "@/components/images/Tyle.jpeg";

export default function About() {
  return (
    <>
      <Head>
        <title>
          About Rangau Tiles and Sanitaryware Limited | Premium Tiles,
          Sanitaryware in Nairobi, Rongai & Kenya
        </title>
        <meta
          name="description"
          content="Learn more about Rangau Tiles and Sanitaryware Limited, a leading supplier of premium building materials including tiles, cement, adhesives, grouts, and sanitaryware in Nairobi, Rongai, and across Kenya."
        />
        <meta
          name="keywords"
          content="Rangau Tiles, Sanitaryware, Tiles in Nairobi, Rongai tiles, Kenya tiles, premium tiles, quality sanitaryware, building materials, ceramic tiles, floor tiles, wall tiles"
        />
        <link rel="canonical" href="https://rangautiles.com/about" />
        <meta
          property="og:title"
          content="About Rangau Tiles and Sanitaryware Limited"
        />
        <meta
          property="og:description"
          content="Learn more about Rangau Tiles and Sanitaryware Limited, a leading supplier of premium tiles and sanitaryware in Nairobi, Rongai, and Kenya."
        />
        <meta property="og:image" content="https://rangautiles.com/about.png" />
        <meta property="og:url" content="https://rangautiles.com/about" />
      </Head>

      <Navbar />

      <section>
        <div className="relative bg-[url('/about.png')] bg-cover bg-center h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center text-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex justify-center mt-9 pt-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl font-semibold md:text-6xl lg:text-8xl"
            >
              ABOUT RANGAU TILES
            </motion.h1>
          </div>
        </div>

        <div className="mt-5 mx-5">
          <Breadcrumb>
            <BreadcrumbList className="flex flex-wrap items-center">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <IoIosArrowForward />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <h1 className="p-4 text-2xl md:text-3xl drop-shadow-xl font-extrabold text-black">
        OUR STORY
      </h1>

      <section>
        <section className="flex flex-col md:flex-row text-justify justify-center gap-6 px-4">
          <div className="p-4 w-full md:w-1/2">
            <div>
              <p>
                At Rangau Tiles, we specialize in supplying and delivering
                top-tier tiles, cement, adhesives, grouts, sanitaryware, corner
                strips, and other essential building accessories. Understanding
                the importance of both aesthetics and durability in construction
                and renovation, we source our products from trusted
                manufacturers to ensure superior quality.
              </p>
              <br />
              <p>
                Our commitment to excellence drives everything we do. We
                prioritize customer satisfaction by providing expert guidance,
                reliable service, and a seamless buying experience. Whether you
                are undertaking a large-scale development or enhancing your
                living space, our extensive product range and efficient delivery
                services make us the ideal partner for your project.
              </p>
            </div>

            <div className="mt-10 shadow-sm rounded-lg bg-[#F38B2F] sm:w-[30rem] md:w-[35rem] mx-auto">
              <div className="flex justify-center">
                <h1 className="text-[#F38B2F] bg-white font-extrabold text-4xl tracking-wide mb-2 hover:underline decoration-solid underline-offset-4 p-4 rounded-br-lg rounded-bl-lg">
                  Why Choose Us?
                </h1>
              </div>
              <p className="mt-5 px-6 pb-5 text-white text-justify leading-relaxed">
                {[
                  "Customer Focus – Putting our clients first by understanding their needs.",
                  "Quality Assurance – Offering only the best, responsibly sourced materials.",
                  "Design Expertise – Providing expert consultation to help clients choose the perfect products.",
                  "Product Variety – Featuring a diverse selection of styles, colors, textures, and materials.",
                  "Reliability – Ensuring timely deliveries and consistent service.",
                  "Integrity – Upholding transparency, ethical business practices, and fair pricing.",
                  "Excellent Service – Going the extra mile, including installation support.",
                  "Sustainability – Promoting eco-friendly options and responsible sourcing.",
                ].map((text, index) => (
                  <span
                    key={index}
                    className="flex flex-row items-start gap-3 mt-3"
                  >
                    <RxCheck className="text-white text-2xl drop-shadow-lg flex-shrink-0" />
                    <span className="flex-1">{text}</span>
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:gap-4 md:mr-20 md:pl-16">
            <div className="w-full md:w-60">
              <div>
                <Image
                  src={Tyle}
                  alt="Display of premium tiles at Rangau Tiles showroom"
                  className="rounded-xl w-full"
                />
              </div>
              <br />
              <div>
                <Image
                  src={Bt}
                  alt="Contemporary tile design showcased by Rangau Tiles"
                  className="w-full md:w-[600px] h-96 rounded-xl"
                />
              </div>
              <br />
              <div>
                <Image
                  src={Bright}
                  alt="Bright modern tile design from Rangau Tiles collection"
                  className="w-full md:w-[600px] h-96 rounded-xl"
                />
              </div>
            </div>

            <div className="p-1 w-full md:w-60">
              <div className="mt-[-52px]">
                <Image
                  src={Blue}
                  alt="Blue themed tile design available at Rangau Tiles"
                  className="w-full"
                />
              </div>
              <br />
              <div>
                <Image
                  src={Patterned}
                  alt="Patterned tile design for elegant interiors at Rangau Tiles"
                  className="w-full md:w-[600px] h-80 rounded-xl"
                />
              </div>
              <br />
              <div>
                <Image
                  src={Tile}
                  alt="High-quality tiles from Rangau Tiles collection"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 p-5 rounded-xl lg:h-[25rem] h-[30rem] bg-[#F38B2F] bg-opacity-5 relative w-full md:w-full px-2 md:px-8 py-2 ">
          <div className="max-w-7xl mx-auto">
            <h1 className="p-4 text-2xl md:text-3xl drop-shadow-xl font-extrabold text-black text-center">
              OUR VALUES
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mx-5">
              <div className="bg-white p-6 rounded-xl shadow-md h-auto md:h-40">
                <h2 className="text-xl text-[#F38B2F] font-semibold text-center mb-4">
                  Vision
                </h2>
                <p className="flex text-justify justify-center">
                  Leader in tiles and sanitaryware distribution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md h-auto md:h-40">
                <h2 className="text-xl text-[#F38B2F] font-semibold text-center mb-4">
                  Mission
                </h2>
                <p className="flex text-justify justify-center">
                  To provide a diverse range of products to meet the needs of
                  our esteemed clients, including property developers, interior
                  designers, homeowners, and various stakeholders in the real
                  estate industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
