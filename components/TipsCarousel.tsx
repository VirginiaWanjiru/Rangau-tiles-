import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tips = [
  {
    title: "💡 How to measure tile quantity",
    description:
      "Measure the length and width of the space in feet and multiply them to get the area. Measure the length and width of a single tile, then multiply for its area. Divide the space area by the tile area and add 10-15% for cuts, mistakes, and future repairs."
  },
  {
    title: "📏 Choosing the right tile size",
    description:
      "Larger tiles make small spaces look bigger, while smaller tiles add intricate detail. Consider grout lines and aesthetics when selecting tile sizes."
  },
  {
    title: "🛠️ Tile Layout Planning",
    description:
      "Start tiling from the center of the room to ensure a balanced layout. Dry-lay the tiles before applying adhesive to see how they fit."
  }
];

export default function TipsCarousel() {
  const [index, setIndex] = useState(0);

  const nextTip = () => setIndex((prev) => (prev + 1) % tips.length);
  const prevTip = () => setIndex((prev) => (prev - 1 + tips.length) % tips.length);

  useEffect(() => {
    const interval = setInterval(nextTip, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="tips" className="relative w-full max-w-full mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-2">
      <h5 className="p-2 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">Tips and Tricks </h5>
       
       
      </div>

      <div className="relative w-full h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-500 p-4 rounded shadow-lg w-full max-w-full text-center"
          >
            <h2 className="text-bold font-medium text-black mb-4 text-lg sm:text-xl md:text-2xl">{tips[index].title}</h2>
            <p className="text font-medium text-black text-sm sm:text-base md:text-lg">{tips[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
