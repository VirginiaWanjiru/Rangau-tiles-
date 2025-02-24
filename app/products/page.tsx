import React from "react";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-2">
      {/*Banner*/}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-[url('/banner.png')] bg-cover bg-center rounded-sm shadow-lg">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-sm">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center px-2">
            PRODUCT CATALOG
          </h1>
        </div>
      </div>
    </div>
  );
}
