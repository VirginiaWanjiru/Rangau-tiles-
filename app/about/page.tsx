"use client";
import React from "react";
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
import Bright from "@/components/images/bright.jpeg";
import Bt from "@/components/images/bt.jpeg";
import Patterned from "@/components/images/patterned.jpeg";
import Tile from "@/components/images/tILE.jpeg";
import Tyle from "@/components/images/Tyle.jpeg";

export default function About() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="relative bg-[url('/about.png')] bg-cover bg-center h-[50vh] flex items-center justify-center text-center px-4">
          <div className="absolute inset-0"></div>
          <div className="relative">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl">
              ABOUT RANGAU TILES
            </h1>
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
        <section className="flex flex-row text-justify justify-center">
          <div className="p-4 w-full md:w-1/2">
            <div>
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

            <div className="mt-10 border border-black shadow-2xl rounded-xl bg-[#F38B2F] sm:w-[30rem] md:w-[40rem] mx-auto">
              <h1 className="text-black font-bold text-3xl p-5">
                Why Choose Us?
              </h1>
              <p className="mt-5 text-justify font-bold p-5">
                <span className="flex flex-row">
                  <RxCheck /> Customer Focus – Putting our clients first by
                  understanding their needs.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Quality Assurance – Offering only the best,
                  responsibly sourced materials.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Design Expertise – Providing expert consultation
                  to help clients choose the perfect products.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Product Variety – Featuring a diverse selection of
                  styles, colors, textures, and materials.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Reliability – Ensuring timely deliveries and
                  consistent service.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Integrity – Upholding transparency, ethical
                  business practices, and fair pricing.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Excellent Service – Going the extra mile,
                  including installation support.
                </span>
                <br />
                <span className="flex flex-row">
                  <RxCheck /> Sustainability – Promoting eco-friendly options
                  and responsible sourcing.
                </span>
              </p>
            </div>
          </div>

<div className="flex flex-col md:flex-row mr-4 md:mr-20 pl-4 md:pl-16">
  <div className="p-1 w-full md:w-60">
    <div>
      <Image src={Tyle} alt="" className="rounded-xl w-full" />
    </div>
    <br />
    <div>
      <Image src={Bt} alt="" className="w-full md:w-[600px] h-96 rounded-xl" />
    </div>
    <br />
    <div>
      <Image
        src={Bright}
        alt=""
        className="w-full md:w-[600px] h-96 rounded-xl"
      />
    </div>
  </div>

  <div className="p-1 w-full md:w-60">
    <div className="mt-[-52px]">
      <Image src={Blue} alt="" className="w-full" />
    </div>
    <br />
    <div>
      <Image
        src={Patterned}
        alt=""
        className="w-full md:w-[600px] h-80 rounded-xl"
      />
    </div>
    <br />
    <div>
      <Image src={Tile} alt="" className="rounded-xl w-full" />
    </div>
  </div>
</div>

        </section>

        <section className="mt-20 p-5 rounded-xl lg:h-[30rem] sm:h-auto bg-[#F38B2F] bg-opacity-5 relative w-full md:w-[87rem] mx-auto px-2 py-2">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl mt-5 font-bold text-black text-center">
      OUR VALUES
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      <div className="bg-white p-6 rounded-xl shadow-md h-auto md:h-60">
        <h2 className="text-xl text-[#F38B2F] font-semibold text-center mb-4">
          Mission
        </h2>
        <p className="flex text-justify justify-center">
          To provide a diverse range of products to meet the needs of our esteemed clients, including property developers, interior designers, homeowners, and various stakeholders in the real estate industry
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md h-auto md:h-60">
        <h2 className="text-xl text-[#F38B2F] font-semibold text-center mb-4">
          Vision
        </h2>
        <p className="flex text-justify justify-center">
          Leader in tiles and sanitaryware distribution
        </p>
      </div>
    </div>
  </div>
</section>
      </section>
      <section className="mt-16">
        <Footer />
      </section>
    </>
  );
}
