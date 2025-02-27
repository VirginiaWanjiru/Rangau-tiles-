"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blue from '@/components/images/Blue.png';
import Bright from '@/components/images/bright.jpeg';
import Bt from '@/components/images/bt.jpeg';
import Patterned from '@/components/images/patterned.jpeg';
import Tile from '@/components/images/tILE.jpeg';
import Tyle from '@/components/images/Tyle.jpeg';


export default function About() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className="">
        <div className="relative bg-[url('/about.png')] bg-cover bg-center h-[50vh] content-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex justify-center">
            <h1 className="text-[#FFFFFF] text-8xl">ABOUT RANGAU TILES</h1>
          </div>
        </div>

        <div className="mt-5 mx-5">
          <Breadcrumb>
            <BreadcrumbList>
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
      <h1 className="p-4 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">
        OUR STORY
      </h1>
      <section>
        <section className="flex flex-row text-justify justify-center">
          <div className="p-4 w-1/2">
            <p>
              Established as a partnership on April 13, 2024, and later
              incorporated as a limited company on November 29, 2024, Rangau
              Tiles and Sanitaryware Limited is a leading supplier of premium
              building materials. Based in OleKasasi, Ongata Rongai, with a
              branch in Exciting, opposite Exciting Hotel, we are dedicated to
              serving property developers, interior designers, homeowners, and
              industry professionals with high-quality products.
            </p>
            <br />
            <p>
              At Rangau Tiles, we specialize in supplying and delivering
              top-tier tiles, cement, adhesives, grouts, sanitary ware, corner
              strips, and other essential building accessories. Understanding
              the importance of both aesthetics and durability in construction
              and renovation, we source our products from trusted manufacturers
              to ensure superior quality.
            </p>
            <br />
            <p>
              Our commitment to excellence drives everything we do. We
              prioritize customer satisfaction by providing expert guidance,
              reliable service, and a seamless buying experience. Whether you
              are undertaking a large-scale development or enhancing your living
              space, our extensive product range and efficient delivery services
              make us the ideal partner for your project.
            </p>
          </div>

          <div className="flex flex-row mr-20 pl-16 ">
            <div className="p-1 w-60 ">
            <div> <Image src={Tyle} alt="" className="rounded-xl" /></div>
            <br />
            <div> <Image src={Bt} alt="" className="w-[600px] h-96 rounded-xl"/></div>
            <br />
            <div> <Image src={Bright} alt="" className="w-[600px] h-96 rounded-xl"/></div>
            </div>

            <div className="p-1 w-60">
            <div className="mt-[-52px]"> <Image src={Blue} alt="" /></div>
            <br />
            <div> <Image src={Patterned} alt="" className="w-[600px] h-80 rounded-xl" /></div>
            <br />
            <div> <Image src={Tile} alt="" className="rounded-xl"/></div>
            </div>
              
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
