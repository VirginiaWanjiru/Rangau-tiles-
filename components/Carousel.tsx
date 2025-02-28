import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) goToNext(); // Swipe left → next slide
      if (diff < -50) goToPrevious(); // Swipe right → previous slide
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover" />
            
            {/* Overlay Text */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center w-3/4 md:w-1/2 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-3xl font-semibold">WALL TILES</h2>
              <p className="mt-2 text-sm md:text-lg">Select from our wide variety of 25 by 40 wall tiles</p>
            </div>
          </div>
        ))}
      </div>

     

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
