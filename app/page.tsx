'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  const images: string[] = [
    "/images/image1.jpg", // Replace with your image paths
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <div className="min-h-screen">
        <Carousel images={images} />
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
