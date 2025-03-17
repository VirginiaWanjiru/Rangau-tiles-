"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import TipBox from "../components/TipBox";

export default function Home() {
  const slides = [
    {
      image: "/images/image1.jpg",
      title: "WALL TILES",
      description:
        "Select from a wide variety of premium wall tiles by Rangau Tiles in Nairobi.",
    },
    {
      image: "/images/image2.jpg",
      title: "FLOOR TILES",
      description:
        "Experience our high-quality floor tiles collection available across Kenya.",
    },
    {
      image: "/images/cements.png",
      title: "CEMENT AND ADHESIVES ",
      description:
        "Our trusted Kenyan cements and adhesives for your construction use",
    },
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <div>
        <Carousel slides={slides} />
      </div>

      {/* About Us Section */}
      <div id="about-us" className="container mx-auto px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h5 className="p-2 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-black">
              About Us
            </h5>
            <p className="text-sm leading-relaxed text-justify">
              At Rangau Tiles, we specialize in the supply and delivery of
              high-quality tiles, cement, adhesives, grouts, sanitary wares,
              corner strips, and other essential accessories. We serve both
              residential and commercial projects in Nairobi, Rongai, and
              throughout Kenya. Our products are sourced from reputable
              manufacturers ensuring durability and top-notch quality for every
              project.
              <br />
              <br />
              Quality is at the core of our business philosophy. We are
              committed to delivering products that meet the highest standards,
              enabling our clients to achieve their vision with confidence. Our
              experienced team provides exceptional customer service, ensuring
              every client feels valued.
            </p>
          </section>

          <section className="flex justify-center">
            <Image
              src="/images/image2.jpg"
              alt="Rangau Tiles About Us - Quality Tiles and Sanitaryware in Nairobi"
              width={500}
              height={300}
              className="shadow-md"
            />
          </section>
        </div>
      </div>

      {/* Products Catalogue */}
      <div id="products-catalogue" className="container mx-auto px-8 mt-12">
        <h5 className="p-2 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-black">
          Products Catalogue
        </h5>
        <div className="px-8">
          <section>
            <h1 className="text-lg font-semibold mb-2">Premium Wall Tiles</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="w-full flex justify-center">
                <Image
                  src="/images/wall1.jpg"
                  alt="Premium wall tile from Rangau Tiles in Nairobi"
                  width={400}
                  height={200}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/wall2.jpg"
                  alt="Elegant wall tile for modern interiors in Kenya"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/wall3.jpg"
                  alt="Contemporary wall tile by Rangau Tiles - Rongai"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/wall4.jpg"
                  alt="Modern wall tile collection from Rangau Tiles in Kenya"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/sanitaryware"
                className="flex items-center text-gray-500 hover:text-gray-950 transition"
              >
                Browse our premium wall tiles collection in Nairobi
                <ArrowUpRightIcon className="h-6 w-14 mr-4" />
              </a>
            </div>
          </section>

          <section>
            <h1 className="text-lg font-semibold mb-2">Quality Floor Tiles</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="w-full flex justify-center">
                <Image
                  src="/images/floor1.jpg"
                  alt="High-quality floor tile from Rangau Tiles in Kenya"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/floo2.jpg"
                  alt="Durable floor tile ideal for modern homes in Nairobi"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/floor3.jpg"
                  alt="Elegant floor tile design by Rangau Tiles"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/floor4.jpg"
                  alt="Quality floor tile for stylish interiors in Kenya"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/sanitaryware"
                className="flex items-center text-gray-500 hover:text-gray-950 transition"
              >
                View our quality floor tiles collection across Kenya
                <ArrowUpRightIcon className="h-6 w-14 mr-4" />
              </a>
            </div>
          </section>

          <section>
            <h1 className="text-lg font-semibold mb-2">Modern Sanitaryware</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="w-full flex justify-center">
                <Image
                  src="/images/sanitary4.png"
                  alt="Modern sanitaryware from Rangau Tiles in Nairobi"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/sanitary.png"
                  alt="Premium sanitaryware selection by Rangau Tiles"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/sanitary2.png"
                  alt="Elegant sanitaryware for modern bathrooms in Kenya"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/sanitary3.png"
                  alt="High-quality sanitaryware by Rangau Tiles - Rongai"
                  width={500}
                  height={300}
                  className="rounded shadow-md"
                />
              </div>
            </div>
           
              <a
                href="/sanitaryware"
                className="flex items-center text-gray-500 hover:text-gray-950 transition mt-4 flex justify-end"
              >
                Browse our modern sanitaryware selection in Nairobi
                <ArrowUpRightIcon className="h-6 w-14 mr-4" />
              </a>
            
          </section>

          <section className="px-4 sm:px-8 md:px-12 lg:px-12">
  <h1 className="text-lg font-semibold mb-2">
    Durable Cement and Adhesives
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    {[
      { src: "/images/simba.jpg", alt: "Quality cement and adhesives from Rangau Tiles in Kenya" },
      { src: "/images/bamburi.jpg", alt: "Durable cement and adhesives for construction projects" },
      { src: "/images/porcelain.jpg", alt: "Trusted cement and adhesives by Rangau Tiles" },
      { src: "/images/izomix.jpg", alt: "Premium quality cement and adhesives in Nairobi" },
    ].map((item, index) => (
      <div key={index} className="w-full flex justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={1000}
          height={0.75}
          className="rounded shadow-md "
        />
      </div>
    ))}
  </div>

  <div className="flex justify-end mt-4">
    <a
      href="/sanitaryware"
      className="flex items-center text-gray-500 hover:text-gray-950 transition"
    >
      Discover quality cement and adhesives in Kenya
      <ArrowUpRightIcon className="h-6 w-6 ml-2" />
    </a>
  </div>
</section>

        </div>
      </div>
      <div>
      <TipBox />
      </div>

      <section className="mt-12">
        <Footer />
      </section>
    </div>
  );
}
