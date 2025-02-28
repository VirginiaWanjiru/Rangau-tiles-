'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Image from 'next/image';

export default function Home() {
  const images: string[] = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <div >
        <Carousel images={images} />
      </div>

      {/* About Us Section */}
      <div id="about-us" className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h5 className="text-xl font-semibold mb-2">About Us</h5>
            <p className="text-sm leading-relaxed">
              At Rangau Tiles, we specialize in the supply and delivery of high-quality tiles, cement, adhesives, grouts, sanitary wares, corner strips, and other essential accessories. We understand that building and renovation projects require materials that not only enhance aesthetics but also offer durability and reliability. Therefore, each product we offer is sourced from reputable manufacturers to ensure that all our customers receive the best quality available in the market.
              <br /><br />
              Quality is at the core of our business philosophy. We are committed to delivering products that meet the highest standards, allowing our clients to achieve their vision with confidence. Our experienced team is dedicated to providing exceptional customer service, ensuring that every client feels valued and satisfied with their purchase.
            </p>
          </section>

          <section className="flex justify-center">
            <Image src="/images/image2.jpg" alt="About Us" width={500} height={300} className="rounded shadow-md" />
          </section>
        </div>
      </div>

      {/* Products Catalogue */}
      <div id="products-catalogue" className="container mx-auto px-4 mt-12">
        <h5 className="text-xl font-semibold mb-4">Products Catalogue</h5>
        
        <section>
          <h1 className="text-lg font-semibold mb-2">Wall Tiles</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Floor tiles </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Sanitaryware </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-lg font-semibold mb-2 text-bold">Cements and Adhesives </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/image2.jpg" alt="Wall Tile" width={500} height={300} className="rounded shadow-md" />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <Footer />
      </section>
    </div>
  );
}
