import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface CarouselProps {
  slides: { image: string; title: string; description: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToNext = useCallback(() => {

    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) goToNext();
      if (diff < -50) goToPrevious();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden carousel-container">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (

          <div key={index} className="relative flex-shrink-0 w-full h-[350px] md:h-[500px] lg:h-[600px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0} // Load first image faster
            />

            {/* Overlay Text */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center w-3/4 md:w-1/2 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-3xl font-semibold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}

            aria-label={`Go to slide ${index + 1}`}

            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
