import React, { useState } from 'react';

const TipBox = () => {
  const [isFaqOpen, setIsFaqOpen] = useState({
    ceramicPorcelain: false,
    glossyMatte: false,
    indoorOutdoor: false,
    maintenance: false,
  });

  const toggleFaq = (faqKey) => {
    setIsFaqOpen((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }));
  };

  return (
    <div className="font-sans p-6">
      <div className="bg-orange-500 p-4 mb-6">
        <h2 className="text-bold font-medium text-black mb-4">
          💡 Tips on how to measure how many boxes of tiles you need for a space!
        </h2>
        </div>

         <div className="bg-orange-500 p-4 mb-6">
        <p className="text-bold font-medium text-black">
          Measure the length and width of the space in feet and multiply them to get the area. Measure the length and width of a single tile, then multiply for its area. Divide the space area by the tile area and add 10-15% for cuts, mistakes, and future repairs.
        </p>
      </div>

      <div className="px-8">
        <h2 className="text-lg font-medium text-gray-800 mb-6 ">FAQs</h2>

        <div className="mb-4 border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq('ceramicPorcelain')}>
            <span className="text-base text-gray-800">What is the difference between ceramic and porcelain tiles?</span>
            <span>{isFaqOpen.ceramicPorcelain ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.ceramicPorcelain && (
            <p className="mt-2 text-sm text-gray-700">
              Ceramic tiles are generally less dense and more porous, making them suitable for light to medium traffic areas. Porcelain tiles are denser and less porous, making them more durable and ideal for high-traffic areas and outdoor use.
            </p>
          )}
        </div>

        <div className="mb-4 border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq('glossyMatte')}>
            <span className="text-base text-gray-800">Are glossy or matte tiles better?</span>
            <span>{isFaqOpen.glossyMatte ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.glossyMatte && (
            <p className="mt-2 text-sm text-gray-700">
              Glossy tiles reflect light, making spaces appear larger and brighter, but they can be slippery when wet. Matte tiles provide a non-slip surface and hide dirt and smudges better, making them suitable for high-traffic and wet areas.
            </p>
          )}
        </div>

        <div className="mb-4 border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq('indoorOutdoor')}>
            <span className="text-base text-gray-800">Can I use the same tiles indoors and outdoors?</span>
            <span>{isFaqOpen.indoorOutdoor ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.indoorOutdoor && (
            <p className="mt-2 text-sm text-gray-700">
              Some tiles are rated for both indoor and outdoor use, but it`&apos;`s essential to check the tile`&apos;`s specifications. Outdoor tiles should be frost-resistant and have a high slip resistance rating. Porcelain tiles are often a good choice for both indoor and outdoor applications.
            </p>
          )}
        </div>

        <div className="mb-4 border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq('maintenance')}>
            <span className="text-base text-gray-800">How do I maintain tiles after installation?</span>
            <span>{isFaqOpen.maintenance ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.maintenance && (
            <p className="mt-2 text-sm text-gray-700">
              Regular cleaning with mild soap and water is usually sufficient. Avoid using harsh chemicals or abrasive cleaners. For grout maintenance, seal it periodically to prevent staining and mold growth.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipBox;