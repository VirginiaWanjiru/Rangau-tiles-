'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; 
import TipBox from '../components/TipBox'

export default function Home() {
  const slides = [
    {
      image: "/images/image1.jpg",
      title: "WALL TILES ",
      description: "Select from a wide variety of 20 by 40 wall tiles  ",
    },
    {
      image: "/images/image2.jpg",
      title: "FLOOR TILES ",
      description: "Experience our wide range of 30 by 40 and 40 by 40 floor tiles ",
    },
    {
      image: "/images/cement.jpg",
      title: "CEMENT AND ADHESIVES ",
      description: "Our trusted Kenyan cements and adhesives for your construction use",
    },
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <div >
        <Carousel slides={slides} />
      </div>

      {/* About Us Section */}
      <div id="about-us" className="container mx-auto px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h5 className="p-2 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">About Us</h5>
            <p className="text-sm leading-relaxed text-justify">
              At Rangau Tiles, we specialize in the supply and delivery of high-quality tiles, cement, adhesives, grouts, sanitary wares, corner strips, and other essential accessories. We understand that building and renovation projects require materials that not only enhance aesthetics but also offer durability and reliability. Therefore, each product we offer is sourced from reputable manufacturers to ensure that all our customers receive the best quality available in the market.
              <br /><br />
              Quality is at the core of our business philosophy. We are committed to delivering products that meet the highest standards, allowing our clients to achieve their vision with confidence. Our experienced team is dedicated to providing exceptional customer service, ensuring that every client feels valued and satisfied with their purchase.
            </p>
          </section>

          <section className="flex justify-center">
            <Image src="/images/image2.jpg" alt="About Us" width={500} height={300} className="shadow-md" />
          </section>
        </div>
      </div>

      {/* Products Catalogue */}
      <div id="products-catalogue" className="container mx-auto px-8 mt-12 ">
        <h5 className="p-2 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">Products Catalogue</h5>
        <div className="px-8">
        <section>
          <h1 className="text-lg font-semibold mb-2"> Wall Tiles </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/wall1.jpg" alt="Wall Tile" width={400} height={200} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/wall2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/wall3.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/wall4.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            
          </div>
          <div className="mt-4 flex justify-end">
              <a href="/sanitaryware" className="flex items-center text-gray-500 hover:text-gray-950 transition">
              See more 
                <ArrowUpRightIcon className=" h-6 w-14 mr-4 " />
              </a>
            </div>
        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Floor tiles </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/floor1.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/floo2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/floor3.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/floor4.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
              <a href="/sanitaryware" className="flex items-center text-gray-500 hover:text-gray-950 transition">
              See more 
                <ArrowUpRightIcon className=" h-6 w-14 mr-4 " />
              </a>
            </div>

        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Sanitaryware </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">

              <Image src="/images/sanitary4.png" alt="Sanitary ware " width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/sanitary.png" alt="Sanitary ware" width={500} height={300} className="rounded shadow-md" />
            </div>  
            <div className="w-full flex justify-center">
              <Image src="/images/sanitary2.png" alt="Sanitary ware" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/sanitary3.png" alt="Sanitary ware" width={500} height={300} className="rounded shadow-md" />

            </div>
          </div>
          <div className="mt-4 flex justify-end">
              <a href="/sanitaryware" className="flex items-center text-gray-500 hover:text-gray-950 transition">
              See more 
                <ArrowUpRightIcon className=" h-6 w-14 mr-4 " />
              </a>
            </div>
        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Cements and Adhesives </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/adhesive1.jpg" alt="Wall Tile" width={500} height={100} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/adhesive4.jpg" alt="Wall Tile" width={500} height={100} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/adhesive3.jpg" alt="Wall Tile" width={500} height={100} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/adhesive2.jpg" alt="Wall Tile" width={500} height={100} className="rounded shadow-md" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
              <a href="/sanitaryware" className="flex items-center text-gray-500 hover:text-gray-950 transition">
              See more 
                <ArrowUpRightIcon className=" h-6 w-14 mr-4 " />
              </a>
            </div>
        
        </section>
        </div> 
      </div>
      <TipBox/>

      <section className="mt-12">
        <Footer />
      </section>
    </div>
  );
}
