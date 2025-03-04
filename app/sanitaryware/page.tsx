"use client";
import { useState } from "react";

type ProductCategory = "sanitaryware" | "tiles";
import { ProductGrid } from "@/components/ProductGrid";
import { FilterSidebar } from "@/components/FilterSidebar";
import { TilesFilterSidebar } from "@/components/TilesFilterSidebar";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("sanitaryware");
  const isMobile = useIsMobile();

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      <Navbar />

      <section className="">
        <div className="relative bg-[url('/Products.png')] bg-cover bg-center h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative flex justify-center mt-9 pt-3">
            <h1 className="text-[#FFFFFF] text-4xl font-semibold md:text-7xl lg:text-8xl">
              PRODUCT CATALOG
            </h1>
          </div>
        </div>

        <div className="mt-5 mx-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <IoIosArrowForward />
              <BreadcrumbItem>
                <BreadcrumbPage>Products </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-2 py-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Product Title & Filters */}
          <div className="col-span-1">
            <div className="flex items-center">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
               
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            )}
            <h1 className="mx-4 text-3xl drop-shadow-xl font-extrabold text-black">
              PRODUCTS
            </h1>

            
            </div>

            {/* Filters Sidebar */}
            <div className="mt-4">
              {activeCategory === "sanitaryware" ? (
                <FilterSidebar
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                  isOpen={isSidebarOpen}
                  onClose={() => setIsSidebarOpen(false)}
                />
              ) : (
                <TilesFilterSidebar
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                  isOpen={isSidebarOpen}
                  onClose={() => setIsSidebarOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Right Section - Tabs & Product Grid */}
          <div className="col-span-3  mt-[-25px] md:mt-2">
            {/* Centered Tabs Navigation */}
            <div className="flex mx-12 md:justify-center mb-8">
              <Tabs
                value={activeCategory}
                onValueChange={(value) =>
                  setActiveCategory(value as ProductCategory)
                }
              >
                <TabsList className="grid w-[200px] md:w-[400px] grid-cols-2">
                  <TabsTrigger
                    value="tiles"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm"
                  >
                    Tiles
                  </TabsTrigger>
                  <TabsTrigger
                    value="sanitaryware"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm"
                  >
                    Sanitaryware
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Product Grid Section */}
            <div className="mb-8">
            
            <span className="mx-12 md:mx-0 inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-sm font-medium text-orange-200 ring-1 ring-yellow-600/20 ring-inset">
              
                {activeCategory === "sanitaryware"
                  ? "Sanitaryware Products"
                  : "Tiles Collection"}
              
              </span>
              {selectedFilters.length > 0 && (
                <div className="flex items-center gap-2 mt-4 mx-12 px-1">
                  <span className="text-xs text-green-700 font-medium">
                    {selectedFilters.length} filter
                    {selectedFilters.length > 1 ? "s" : ""} applied
                  </span>
                </div>
              )}
            </div>

            <ProductGrid
              selectedFilters={selectedFilters}
              category={activeCategory}
            />
          </div>
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Products;
