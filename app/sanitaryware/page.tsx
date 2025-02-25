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
      <section className="">
        <div className="relative bg-[url('/Products.png')] bg-cover bg-center h-[50vh] content-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex justify-center">
            <h1 className="text-[#FFFFFF] text-9xl">PRODUCT CATALOG</h1>
          </div>
        </div>

        <div className="mt-5 mx-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <IoIosArrowForward />
              <IoIosArrowForward />
              <BreadcrumbItem>
                <BreadcrumbPage>Products </BreadcrumbPage>
                <BreadcrumbPage>Products </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <h1 className="p-4 ml-0.5 text-3xl drop-shadow-xl font-extrabold text-[black]">
        PRODUCTS
      </h1>

      <div className="min-h-screen bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Centered Tabs Navigation */}
          <div className="flex justify-center mb-8">
            <Tabs
              value={activeCategory}
              onValueChange={(value) =>
                setActiveCategory(value as ProductCategory)
              }
            >
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger
                  value="tiles"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Tiles
                </TabsTrigger>
                <TabsTrigger
                  value="sanitaryware"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Sanitaryware
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex gap-8">
            {/* Mobile menu button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            )}

            {/* Conditional Sidebar based on category */}
            <div className="w-64 shrink-0">
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

            {/* Main content */}
            <div className="flex-1 transition-all duration-300 ease-in-out">
              <div className="mb-8">
                <h1 className="text-4xl font-light text-gray-900 mb-2">
                  {activeCategory === "sanitaryware"
                    ? "Sanitaryware Products"
                    : "Tiles Collection"}
                </h1>
                {selectedFilters.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
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
      </div>
    </>
  );
};

export default Products;
