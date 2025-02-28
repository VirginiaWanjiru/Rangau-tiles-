// components/Carousel.tsx

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<string | null>(null);
  const goToPrevious = () => {
    setAnimation('slide-out-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setAnimation('slide-in-left');
    }, 500); // Match animation duration
  };

  const goToNext = () => {
    setAnimation('slide-out-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setAnimation('slide-in-right');
    }, 500); // Match animation duration
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          animation ? `animate-${animation}` : ''
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
       {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
            <div className="absolute inset-y-0 left-1/2 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center w-1/2">
              <h2 className="text-3xl font-semibold">WALL TILES</h2>
              <p className="mt-2 text-lg">Select from our wide variety of 25 by 40 wall tiles</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {'<'}
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;