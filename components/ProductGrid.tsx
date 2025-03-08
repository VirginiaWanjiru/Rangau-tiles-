import { motion } from "framer-motion";
import Image from "next/image";

interface ProductGridProps {
  selectedFilters: string[];
  category: "sanitaryware" | "tiles";
}

const sanitarywareProducts = [

    // PB- products (Pedestal Basins) → category: "basins", subcategory: "pedestal basin"
    { id: 1,  name: "PB-001B",   category: "basins",       subcategory: "pedestal basin", image: "/PB-001B.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 2,  name: "PB-001P",   category: "basins",       subcategory: "pedestal basin", image: "/PB-001P.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 3,  name: "PB-018H",   category: "basins",       subcategory: "pedestal basin", image: "/PB-018H.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 4,  name: "PB-035",    category: "basins",       subcategory: "pedestal basin", image: "/PB-035.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 5,  name: "PB-036C",   category: "basins",       subcategory: "pedestal basin", image: "/PB-036C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 6,  name: "PB-037C",   category: "basins",       subcategory: "pedestal basin", image: "/PB-037C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 7,  name: "PB-207",    category: "basins",       subcategory: "pedestal basin", image: "/PB-207.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 8,  name: "PB-32469",  category: "basins",       subcategory: "pedestal basin", image: "/PB-32469.png",  suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 9,  name: "PB-326",    category: "basins",       subcategory: "pedestal basin", image: "/PB-326.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 10, name: "PB-778",    category: "basins",       subcategory: "pedestal basin", image: "/PB-778.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 11, name: "PB-828",    category: "basins",       subcategory: "pedestal basin", image: "/PB-828.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 12, name: "PB-828P",   category: "basins",       subcategory: "pedestal basin", image: "/PB-828P.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
  
    // WB- products (Wall-mounted Basins) → category: "basins", subcategory: "wall-mounted basin"
    { id: 13, name: "WB-017C",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-017C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 14, name: "WB-022C",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-022C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 15, name: "WB-024C",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-024C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 16, name: "WB-026C",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-026C.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 17, name: "WB-9041",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-9041.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 18, name: "WB-9156",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-9156.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 19, name: "WB-9160",   category: "basins",       subcategory: "wall-mounted basin", image: "/WB-9160.png",   suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
  
    // BCL-, BCP-, BCX- products → category: "cabinets", subcategory: "bathroom cabinet"
    { id: 20, name: "BCL-4036C-380", category: "cabinets", subcategory: "bathroom cabinet", image: "/BCL-4036C-380.png", suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 21, name: "BCL-4036S",     category: "cabinets", subcategory: "bathroom cabinet", image: "/BCL-4036S.png",     suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 22, name: "BCL-4335C",      category: "cabinets", subcategory: "bathroom cabinet", image: "/BCL-4335C.png",      suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 23, name: "BCL-4335Y",      category: "cabinets", subcategory: "bathroom cabinet", image: "/BCL-4335Y.png",      suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 24, name: "BCL-5036C-480",  category: "cabinets", subcategory: "bathroom cabinet", image: "/BCL-5036C-480.png",  suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 25, name: "BCP-109-600",    category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-109-600.png",    suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 26, name: "BCP-6901",       category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-6901.png",       suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 27, name: "BCP-6947-800",   category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-6947-800.png",   suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 28, name: "BCP-6947",       category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-6947.png",       suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 29, name: "BCP-6947B-600",  category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-6947B-600.png",  suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 30, name: "BCP-9557",       category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-9557.png",       suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 31, name: "BCP-9557L",      category: "cabinets", subcategory: "bathroom cabinet", image: "/BCP-9557L.png",      suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
    { id: 32, name: "BCX-262",       category: "cabinets", subcategory: "bathroom cabinet", image: "/BCX-262.png",       suggestions: [
        "Elegant cabinetry offering ample storage.",
        "Premium finish with a modern design.",
        "Durable construction tailored for your bathroom needs."
      ] },
  
    // BF- products (Basin Faucets) → category: "faucets", subcategory: "basin faucets"
    { id: 33, name: "BF-004",  category: "faucets", subcategory: "basin-faucet", image: "/BF-004.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 34, name: "BF-005",  category: "faucets", subcategory: "basin-faucet", image: "/BF-005.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 35, name: "BF-007",  category: "faucets", subcategory: "basin-faucet", image: "/BF-007.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 36, name: "BF-016",  category: "faucets", subcategory: "basin-faucet", image: "/BF-016.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 37, name: "BF-021",  category: "faucets", subcategory: "basin-faucet", image: "/BF-021.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 38, name: "BF-031B", category: "faucets", subcategory: "basin-faucet", image: "/BF-031B.png", suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 39, name: "BF-037",  category: "faucets", subcategory: "basin-faucet", image: "/BF-037.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 40, name: "BF-040",  category: "faucets", subcategory: "basin-faucet", image: "/BF-040.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 41, name: "BF-040B", category: "faucets", subcategory: "basin-faucet", image: "/BF-040B.png", suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 42, name: "BF-047",  category: "faucets", subcategory: "basin-faucet", image: "/BF-047.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 43, name: "BF-518",  category: "faucets", subcategory: "basin-faucet", image: "/BF-518.png",  suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 44, name: "BF-5520", category: "faucets", subcategory: "basin-faucet", image: "/BF-5520.png", suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
    { id: 45, name: "BF-5521", category: "faucets", subcategory: "basin-faucet", image: "/BF-5521.png", suggestions: [
        "Elegant design for a sophisticated look.",
        "Optimized water flow for efficiency.",
        "Easy to clean and maintain with a modern finish."
      ] },
  
    // DF- product → treat as toilet
    { id: 46, name: "DF-001",  category: "faucets", subcategory: "basin-faucet", image: "/DF-001.png", suggestions: [
      "Elegant design for a sophisticated look.",
      "Optimized water flow for efficiency.",
      "Easy to clean and maintain with a modern finish."
      ] },
  
    // KF- products (Kitchen Faucets) → category: "faucets", subcategory: "kitchen faucets"
    { id: 47, name: "KF-0041", category: "faucets", subcategory: "kitchen-faucet", image: "/KF-0041.png", suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 48, name: "KF-010",   category: "faucets", subcategory: "kitchen-faucet", image: "/KF-010.png",   suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 49, name: "KF-026B",  category: "faucets", subcategory: "kitchen-faucet", image: "/KF-026B.png",  suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 50, name: "KF-028",   category: "faucets", subcategory: "kitchen-faucet", image: "/KF-028.png",   suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 51, name: "KF-030",   category: "faucets", subcategory: "kitchen-faucet", image: "/KF-030.png",   suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 52, name: "KF-506",   category: "faucets", subcategory: "kitchen-faucet", image: "/KF-506.png",   suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 53, name: "KF-810",   category: "faucets", subcategory: "kitchen-faucet", image: "/KF-810.png",   suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 54, name: "KF-810B",  category: "faucets", subcategory: "kitchen-faucet", image: "/KF-810B.png",  suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 55, name: "KF-812B",  category: "faucets", subcategory: "kitchen-faucet", image: "/KF-812B.png",  suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },
    { id: 56, name: "KF-812S",  category: "faucets", subcategory: "kitchen-faucet", image: "/KF-812S.png",  suggestions: [
        "Precision engineered for optimal performance.",
        "Sleek design that complements modern kitchens.",
        "Durable construction with smooth operation."
      ] },

    { id: 57, name: "MX-003",   category: "faucets",      subcategory: "kitchen-faucet", image: "/MX-003.png",   suggestions: [
      "Precision engineered for optimal performance.",
      "Sleek design that complements modern kitchens.",
      "Durable construction with smooth operation."
      ] },
  
    // BM- products (Basins) → category: "basins", subcategory: "basin"
    { id: 58, name: "BM-45604C", category: "basins", subcategory: "basin", image: "/BM-45604C.png", suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 59, name: "BM-45604G", category: "basins", subcategory: "basin", image: "/BM-45604G.jpg", suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 60, name: "BM-45604Y", category: "basins", subcategory: "basin", image: "/BM-45604Y.png", suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 61, name: "BM-6227",    category: "basins", subcategory: "basin", image: "/BM-6227.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 62, name: "BM-8675",    category: "basins", subcategory: "basin", image: "/BM-8675.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 63, name: "BM-8759",    category: "basins", subcategory: "basin", image: "/BM-8759.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
    { id: 64, name: "BM-9003",    category: "basins", subcategory: "basin", image: "/BM-9003.png",    suggestions: [
        "Elegant design with timeless appeal.",
        "Smooth surface for easy cleaning and maintenance.",
        "A perfect complement to any stylish bathroom decor."
      ] },
  
    // SW- products (Showers) → category: "showers"
    { id: 65, name: "SW-001",    category: "showers",      subcategory: "", image: "/SW-001.png",    suggestions: [
        "Modern shower set with advanced features.",
        "Sleek design with a durable finish.",
        "Enhanced water efficiency for a luxurious shower experience."
      ] },
    { id: 66, name: "SW-70018B", category: "showers",      subcategory: "", image: "/SW-70018B.png", suggestions: [
        "Modern shower set with advanced features.",
        "Sleek design with a durable finish.",
        "Enhanced water efficiency for a luxurious shower experience."
      ] },
    { id: 67, name: "SW-70018S", category: "showers",      subcategory: "", image: "/SW-70018S.png", suggestions: [
        "Modern shower set with advanced features.",
        "Sleek design with a durable finish.",
        "Enhanced water efficiency for a luxurious shower experience."
      ] },
    { id: 68, name: "SW-809",    category: "showers",      subcategory: "", image: "/SW-809.png",    suggestions: [
        "Modern shower set with advanced features.",
        "Sleek design with a durable finish.",
        "Enhanced water efficiency for a luxurious shower experience."
      ] },
  
    // KS- products (Sinks) → category: "sinks", subcategory: "kitchen sinks"
    { id: 69, name: "KS-1050XI", category: "sinks",        subcategory: "kitchen sinks", image: "/KS-1050XI.png", suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 70, name: "KS-1050ZI", category: "sinks",        subcategory: "kitchen sinks", image: "/KS-1050ZI.png", suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 71, name: "KS-1250XI", category: "sinks",        subcategory: "kitchen sinks", image: "/KS-1250XI.png", suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 72, name: "KS-1550XI", category: "sinks",        subcategory: "kitchen sinks", image: "/KS-1550XI.png", suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 73, name: "KS-5050B",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-5050B.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 74, name: "KS-6045B",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-6045B.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 75, name: "KS-6045S",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-6045S.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 76, name: "KS-7843B",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-7843B.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 77, name: "KS-7843S",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-7843S.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
    { id: 78, name: "KS-8146I",  category: "sinks",        subcategory: "kitchen sinks", image: "/KS-8146I.png",  suggestions: [
        "Sleek design with modern functionality.",
        "Engineered for durability and ease of cleaning.",
        "A perfect complement to contemporary kitchen decor."
      ] },
  
    // WC- products (Toilets) → category: "toilets", subcategory: "toilet"
    { id: 79, name: "WC-001B",  category: "toilets",      subcategory: "toilet", image: "/WC-001B.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 80, name: "WC-001P",  category: "toilets",      subcategory: "toilet", image: "/WC-001P.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 81, name: "WC-004",   category: "toilets",      subcategory: "toilet", image: "/WC-004.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 82, name: "WC-006",   category: "toilets",      subcategory: "toilet", image: "/WC-006.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 83, name: "WC-008",   category: "toilets",      subcategory: "toilet", image: "/WC-008.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 84, name: "WC-009",   category: "toilets",      subcategory: "toilet", image: "/WC-009.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 85, name: "WC-100",   category: "toilets",      subcategory: "toilet", image: "/WC-100.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 86, name: "WC-2070",  category: "toilets",      subcategory: "toilet", image: "/WC-2070.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 87, name: "WC-2071",  category: "toilets",      subcategory: "toilet", image: "/WC-2071.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 88, name: "WC-303",   category: "toilets",      subcategory: "toilet", image: "/WC-303.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 89, name: "WC-305",   category: "toilets",      subcategory: "toilet", image: "/WC-305.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 90, name: "WC-306",   category: "toilets",      subcategory: "toilet", image: "/WC-306.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 91, name: "WC-5096",  category: "toilets",      subcategory: "toilet", image: "/WC-5096.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 92, name: "WC-6224",  category: "toilets",      subcategory: "toilet", image: "/WC-6224.png",  suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 93, name: "WC-664",   category: "toilets",      subcategory: "toilet", image: "/WC-664.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 94, name: "WC-788",   category: "toilets",      subcategory: "toilet", image: "/WC-788.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 95, name: "WC-790",   category: "toilets",      subcategory: "toilet", image: "/WC-790.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] },
    { id: 96, name: "WC-791",   category: "toilets",      subcategory: "toilet", image: "/WC-791.png",   suggestions: [
        "Instant-clean glaze for effortless maintenance.",
        "Waterfall flush ensures optimal performance and water saving.",
        "Rock-solid ceramic construction for long-lasting durability."
      ] }

  
];

const tilesProducts = [
    { id: 1,  name: "FGC 66043T",   category: "floor", subcategory: "60x60", image: "/FGC 66043 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 2,  name: "FGC 66200T",   category: "floor", subcategory: "60x60", image: "/FGC 66200 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 3,  name: "FGC 66235T",   category: "floor", subcategory: "60x60", image: "/FGC 66235 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 4,  name: "MRP 612009",   category: "floor", subcategory: "60x60", image: "/MRP 612009.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 5,  name: "MRP 612010",   category: "floor", subcategory: "60x60", image: "/MRP 612010.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 6,  name: "PGC 66001T",   category: "floor", subcategory: "60x60", image: "/PGC 66001 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 7,  name: "PGC 66009C",   category: "floor", subcategory: "60x60", image: "/PGC 66009 C.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 8,  name: "PGP 66001K",   category: "floor", subcategory: "60x60", image: "/PGP 66001 K.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 9,  name: "PGP 66005C",   category: "floor", subcategory: "60x60", image: "/PGP 66005 C.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 10, name: "PGP 66007",    category: "floor", subcategory: "60x60", image: "/PGP 66007.jpg",    suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 11, name: "PGS 66029",    category: "floor", subcategory: "60x60", image: "/PGS 66029.jpg",    suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 12, name: "PGS 66281T",   category: "floor", subcategory: "60x60", image: "/PGS 66281 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 13, name: "YMP 66703T",   category: "floor", subcategory: "60x60", image: "/YMP 66703 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 14, name: "YMP 66721T",   category: "floor", subcategory: "60x60", image: "/YMP 66721 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 15, name: "YMP 66737T",   category: "floor", subcategory: "60x60", image: "/YMP 66737 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 16, name: "YMP 66738T",   category: "floor", subcategory: "60x60", image: "/YMP 66738 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 17, name: "YMP 66740T",   category: "floor", subcategory: "60x60", image: "/YMP 66740 T.jpg",   suggestions: [
        "Great alternative to hardwood flooring.",
        "Brings warmth to interiors while maintaining durability.",
        "Looks best with modern or Scandinavian-style decor."
      ] },
    { id: 18, name: "YMP 66742T",   category: "floor", subcategory: "60x60", image: "/YMP 66742 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 19, name: "YMP 66790T",   category: "floor", subcategory: "60x60", image: "/YMP 66790 T.jpg",   suggestions: [
        "Ideal for spacious areas, providing a modern, durable flooring solution.",
        "Enhances large spaces with a sleek, contemporary design.",
        "Pairs well with both bold and neutral color palettes for a balanced look."
      ] },
    { id: 20, name: "BLO 44031K",   category: "floor", subcategory: "40x40", image: "/BLO 44031 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 21, name: "BLO 44033K",   category: "floor", subcategory: "40x40", image: "/BLO 44033 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 22, name: "BLO 44063K",   category: "floor", subcategory: "40x40", image: "/BLO 44063 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 23, name: "BLO 44074K",   category: "floor", subcategory: "40x40", image: "/BLO 44074 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 24, name: "BLO 44086K",   category: "floor", subcategory: "40x40", image: "/BLO 44086 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 25, name: "BLO 44087K",   category: "floor", subcategory: "40x40", image: "/BLO 44087 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 26, name: "BLO 44088K",   category: "floor", subcategory: "40x40", image: "/BLO 44088 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 27, name: "BLO 44103K",   category: "floor", subcategory: "40x40", image: "/BLO 44103 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 28, name: "BLO 44107K",   category: "floor", subcategory: "40x40", image: "/BLO 44107 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 29, name: "BLO 44108K",   category: "floor", subcategory: "40x40", image: "/BLO 44108 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 30, name: "BLO 44109K",   category: "floor", subcategory: "40x40", image: "/BLO 44109 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 31, name: "BLO 44110K",   category: "floor", subcategory: "40x40", image: "/BLO 44110 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 32, name: "BLO 44111K",   category: "floor", subcategory: "40x40", image: "/BLO 44111 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 33, name: "BLO 44112K",   category: "floor", subcategory: "40x40", image: "/BLO 44112 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 34, name: "BLO 44113K",   category: "floor", subcategory: "40x40", image: "/BLO 44113 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 35, name: "BLO 44116K",   category: "floor", subcategory: "40x40", image: "/BLO 44116 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 36, name: "BLO 44117K",   category: "floor", subcategory: "40x40", image: "/BLO 44117 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 37, name: "BLO 44120K",   category: "floor", subcategory: "40x40", image: "/BLO 44120 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 38, name: "FGB 4414K",    category: "floor", subcategory: "40x40", image: "/FGB 4414 K.jpg",    suggestions: [
        "Great for both indoor and outdoor flooring.",
        "Complements minimalist and modern interiors.",
        "Durable and slip‐resistant, suitable for wet areas."
      ] },
    { id: 39, name: "FGB 44537K",   category: "floor", subcategory: "40x40", image: "/FGB 44537 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 40, name: "FGB 44685K",   category: "floor", subcategory: "40x40", image: "/FGB 44685 K.jpg",   suggestions: [
        "Perfect for bedroom for a coastal, calming ambiance.",
        "Pairs well with soft blues, white, and muted grays to enhance the coastal feel.",
        "Pairs well with woven textures like linen or jute for a cozy, organic touch."
      ] },
    { id: 41, name: "FGB 44689K",   category: "floor", subcategory: "40x40", image: "/FGB 44689 K.jpg",   suggestions: [
        "Perfect for shower walls - adds a natural calming vibe",
        "Pairs well with earthy tones i.e beige, gray, brown",
        "Pairs well with metallic / wooden / ceramic furniture e.g ceramic sink"
      ] },
    { id: 42, name: "FGB 44693K",   category: "floor", subcategory: "40x40", image: "/FGB 44693 K.jpg",   suggestions: [
        "Perfect for both indoor and outdoor flooring.",
        "Complements minimalist and modern interiors.",
        "Durable and slip‐resistant, suitable for wet areas."
      ] },
    { id: 43, name: "FGB 44712K",   category: "floor", subcategory: "40x40", image: "/FGB 44712 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 44, name: "FGB 44714K",   category: "floor", subcategory: "40x40", image: "/FGB 44714 K.jpg",   suggestions: [
        "Great for both indoor and outdoor flooring.",
        "Complements minimalist and modern interiors.",
        "Durable and slip‐resistant, suitable for wet areas."
      ] },
    { id: 45, name: "FGB 44726K",   category: "floor", subcategory: "40x40", image: "/FGB 44726 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 46, name: "FGB 44727K",   category: "floor", subcategory: "40x40", image: "/FGB 44727 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 47, name: "FGB 44728K",   category: "floor", subcategory: "40x40", image: "/FGB 44728 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 48, name: "FGB 44729K",   category: "floor", subcategory: "40x40", image: "/FGB 44729 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 49, name: "FGB 44730K",   category: "floor", subcategory: "40x40", image: "/FGB 44730 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 50, name: "FGB 44731K",   category: "floor", subcategory: "40x40", image: "/FGB 44731 K.jpg",   suggestions: [
        "Perfect for a living room or dining area for a warm, inviting feel",
        "Pairs well with light‐colored walls (off‐white or soft taupe)",
        "Pairs well with black metal accents (like a modern dining table) for contrast."
      ] },
    { id: 51, name: "FGB 44733K",   category: "floor", subcategory: "40x40", image: "/FGB 44733 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 52, name: "FGB 44734K",   category: "floor", subcategory: "40x40", image: "/FGB 44734 K.jpg",   suggestions: [
        "Perfect for a kitchen area for an elegant and easy-to-maintain floor",
        "Pairs well with accent colors like muted greens or blues to add depth.",
        "Pairs well with minimalist white or gray furniture for a sleek look."
      ] },
    { id: 53, name: "FGB 44735K",   category: "floor", subcategory: "40x40", image: "/FGB 44735 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 54, name: "FGB 44737K",   category: "floor", subcategory: "40x40", image: "/FGB 44737 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 55, name: "FGB 44738K",   category: "floor", subcategory: "40x40", image: "/FGB 44738 K.jpg",   suggestions: [
        "Adds a stylish touch to any room with its elegant design.",
        "Ideal for high‐traffic areas due to its durability and low maintenance.",
        "Complements both modern and classic interiors seamlessly."
      ] },
    { id: 56, name: "FGE 44740K",   category: "floor", subcategory: "40x40", image: "/FGE 44740 K.jpg",   suggestions: [
        "A sleek and modern design perfect for contemporary spaces.",
        "Ideal for creating a minimalist, elegant look.",
        "Works well with both light and dark color palettes."
      ] },
    { id: 57, name: "FGE 44741K",   category: "floor", subcategory: "40x40", image: "/FGE 44741 K.jpg",   suggestions: [
        "Brings a sophisticated vibe to any room.",
        "Perfect for accent walls or backsplash designs.",
        "Pairs well with wooden or neutral finishes."
      ] },
    { id: 58, name: "FGE 44742K",   category: "floor", subcategory: "40x40", image: "/FGE 44742 K.jpg",   suggestions: [
        "Offers a bold statement in modern interiors.",
        "Great for both commercial and residential spaces.",
        "Works wonderfully in high-traffic areas like kitchens."
      ] },
    { id: 59, name: "FGE 44743K",   category: "floor", subcategory: "40x40", image: "/FGE 44743 K.jpg",   suggestions: [
        "A perfect option for adding texture to your space.",
        "Complements both urban and rustic aesthetics.",
        "Can be paired with contrasting furniture for a dynamic look."
      ] },
    { id: 60, name: "FGE 44744K",   category: "floor", subcategory: "40x40", image: "/FGE 44744 K.jpg",   suggestions: [
        "Ideal for creating a modern, high-end feel in any room.",
        "Works perfectly in bathrooms or kitchens.",
        "Pairs well with chrome or stainless steel finishes."
      ] },
    { id: 61, name: "FGE 44745K",   category: "floor", subcategory: "40x40", image: "/FGE 44745 K.jpg",   suggestions: [
        "An excellent choice for those looking to add dimension to their walls.",
        "Gives a sleek, stylish appearance while being durable.",
        "Ideal for both residential and commercial spaces."
      ] },
    { id: 62, name: "FGE 44746K",   category: "floor", subcategory: "40x40", image: "/FGE 44746 K.jpg",   suggestions: [
        "Perfect for enhancing any modern living space.",
        "Its simplicity adds elegance without overwhelming the space.",
        "Ideal for pairing with larger furniture pieces."
      ] },
    { id: 63, name: "FGE 44749K",   category: "floor", subcategory: "40x40", image: "/FGE 44749 K.jpg",   suggestions: [
        "A clean and contemporary option for minimalistic decor.",
        "Works well in kitchens, bathrooms, or feature walls.",
        "Pairs well with a variety of accent colors."
      ] },
    { id: 64, name: "FGE 44750K",   category: "floor", subcategory: "40x40", image: "/FGE 44750 K.jpg",   suggestions: [
        "Sleek and stylish, great for adding a modern touch.",
        "Perfect for smaller spaces or accent walls.",
        "Matches well with bold or monochrome decor styles."
      ] },
    { id: 65, name: "FGE 44751K",   category: "floor", subcategory: "40x40", image: "/FGE 44751 K.jpg",   suggestions: [
        "A bold and unique option for those wanting something different.",
        "Ideal for accenting rooms with bold color schemes.",
        "Creates a sophisticated atmosphere with its unique design."
      ] },
    { id: 66, name: "FGE 44753K",   category: "floor", subcategory: "40x40", image: "/FGE 44753 K.jpg",   suggestions: [
        "Perfect for modern, high-end spaces.",
        "Looks fantastic in both residential and commercial settings.",
        "Pairs well with bright or neutral color themes."
      ] },
    { id: 67, name: "FGE 44754K",   category: "floor", subcategory: "40x40", image: "/FGE 44754 K.jpg",   suggestions: [
        "A sleek and modern design perfect for contemporary spaces.",
        "Ideal for creating a minimalist, elegant look.",
        "Works well with both light and dark color palettes."
      ] },
    { id: 68, name: "FGE 44756K",   category: "floor", subcategory: "40x40", image: "/FGE 44756 K.jpg",   suggestions: [
        "Brings a sleek, contemporary touch to your space.",
        "Great for high-traffic areas, such as kitchens or hallways.",
        "Pairs well with other neutral or bold accent pieces."
      ] },
    { id: 69, name: "FGE 44757K",   category: "floor", subcategory: "40x40", image: "/FGE 44757 K.jpg",   suggestions: [
        "Perfect for adding a modern, stylish accent to your room.",
        "Works well in both residential and commercial spaces.",
        "Pairs perfectly with both light and dark furniture choices."
      ] },
    { id: 70, name: "FGE 44758K",   category: "floor", subcategory: "40x40", image: "/FGE 44758 K.jpg",   suggestions: [
        "Ideal for minimalist or industrial-inspired interiors.",
        "Can be used in bathrooms, kitchens, or living spaces.",
        "Offers a clean, modern appearance to your room."
      ] },
    { id: 71, name: "FGE 44759K",   category: "floor", subcategory: "40x40", image: "/FGE 44759 K.jpg",   suggestions: [
        "Creates a stylish and sleek backdrop in your space.",
        "Great for complementing both warm and cool-toned decor.",
        "Ideal for contemporary and modern home interiors."
      ] },
    { id: 72, name: "FGP 33005K",   category: "floor", subcategory: "30x30", image: "/FGP 33005 K.jpg",   suggestions: [
        "Perfect for adding texture to modern interiors.",
        "Great for use in both residential and commercial spaces.",
        "Works well with a variety of design styles, from industrial to rustic."
      ] },
    { id: 73, name: "FGP 33006K",   category: "floor", subcategory: "30x30", image: "/FGP 33006 K.jpg",   suggestions: [
        "A contemporary choice that complements both modern and classic decor.",
        "Ideal for accent walls or as a statement piece.",
        "Pairs well with natural materials like wood and stone."
      ] },
    { id: 74, name: "FGP 33009K",   category: "floor", subcategory: "30x30", image: "/FGP 33009 K.jpg",   suggestions: [
        "Great for creating a bold look in modern living spaces.",
        "Pairs well with both vibrant and neutral tones.",
        "Perfect for high-traffic areas like kitchens and hallways."
      ] },
    { id: 75, name: "FGP 33011K",   category: "floor", subcategory: "30x30", image: "/FGP 33011 K.jpg",   suggestions: [
        "Adds a modern, high-end touch to any room.",
        "Looks great in bathrooms, kitchens, or living areas.",
        "Pairs well with neutral decor and natural materials."
      ] },
    { id: 76, name: "FGP 33047K",   category: "floor", subcategory: "30x30", image: "/FGP 33047 K.jpg",   suggestions: [
        "Perfect for achieving a clean and sleek modern look.",
        "Great for minimalist and industrial-inspired interiors.",
        "Pairs well with both monochrome and colorful decor."
      ] },
    { id: 77, name: "FGP 33048K",   category: "floor", subcategory: "30x30", image: "/FGP 33048 K.jpg",   suggestions: [
        "Brings a sophisticated, textured look to any space.",
        "Ideal for contemporary design styles.",
        "Works well with a variety of furniture and accent colors."
      ] },
    { id: 78, name: "FGP 33123K",   category: "floor", subcategory: "30x30", image: "/FGP 33123 K.jpg",   suggestions: [
        "An excellent choice for accent walls or feature spaces.",
        "Perfect for modern and minimalist interiors.",
        "Pairs beautifully with bold or neutral tones."
      ] },
    { id: 79, name: "FGP 33191K",   category: "floor", subcategory: "30x30", image: "/FGP 33191 K.jpg",   suggestions: [
        "Creates a sleek, refined look for modern interiors.",
        "Great for accentuating living rooms or kitchens.",
        "Pairs well with contemporary furniture and decor."
      ] },
    { id: 80, name: "FGP 33516K",   category: "floor", subcategory: "30x30", image: "/FGP 33516 K.jpg",   suggestions: [
        "Perfect for creating a bold focal point in any room.",
        "Works well with both industrial and modern design schemes.",
        "Pairs beautifully with dark wood or metal accents."
      ] },
    { id: 81, name: "FGP 33518K",   category: "wall", subcategory: "25x40", image: "/FGP 33518 K.jpg",   suggestions: [
        "Great for creating a sophisticated, high-end look.",
        "Perfect for modern interiors or accent walls.",
        "Pairs well with both neutral and bold color schemes."
      ] },
    { id: 82, name: "FGP 33528K",   category: "wall", subcategory: "25x40", image: "/FGP 33528 K.jpg",   suggestions: [
        "Ideal for creating a sleek, minimalistic design.",
        "Great for feature walls or high-traffic areas.",
        "Pairs well with light or dark color schemes."
      ] },
    { id: 83, name: "FGP 33530K",   category: "wall", subcategory: "25x40", image: "/FGP 33530 K.jpg",   suggestions: [
        "Adds a contemporary edge to any room.",
        "Perfect for pairing with modern furniture and decor.",
        "Looks great as a backsplash or accent piece."
      ] },
    { id: 84, name: "FGP 33547K",   category: "wall", subcategory: "25x40", image: "/FGP 33547 K.jpg",   suggestions: [
        "A stylish and sophisticated choice for any space.",
        "Ideal for modern, high-traffic areas like kitchens.",
        "Pairs beautifully with neutral tones or vibrant accents."
      ] },
    { id: 85, name: "FGP 33584K",   category: "wall", subcategory: "25x40", image: "/FGP 33584 K.jpg",   suggestions: [
        "Creates a refined, elegant atmosphere in any room.",
        "Perfect for both residential and commercial settings.",
        "Great for pairing with both dark and light finishes."
      ] },
    { id: 86, name: "FGP 33703K",   category: "wall", subcategory: "25x40", image: "/FGP 33703 K.jpg",   suggestions: [
        "A sleek and stylish option for modern interiors.",
        "Perfect for creating bold feature walls.",
        "Works well with contrasting or complementary accent colors."
      ] },
    { id: 87, name: "FGP 33707K",   category: "wall", subcategory: "25x40", image: "/FGP 33707 K.jpg",   suggestions: [
        "Ideal for achieving a chic, contemporary look.",
        "Perfect for spaces that need a modern touch.",
        "Pairs beautifully with industrial or minimalist designs."
      ] },
    { id: 88, name: "FGP 33725K",   category: "wall", subcategory: "25x40", image: "/FGP 33725 K.jpg",   suggestions: [
        "Brings a sophisticated and clean look to your room.",
        "Great for high-end interiors and upscale spaces.",
        "Pairs well with neutral color schemes and natural materials."
      ] },
    { id: 89, name: "FGP 33737K",   category: "wall", subcategory: "25x40", image: "/FGP 33737 K.jpg",   suggestions: [
        "Adds a bold and contemporary touch to your space.",
        "Ideal for creating a striking accent wall.",
        "Works well with modern and eclectic design styles."
      ] },
    { id: 90, name: "FGP 33738K",   category: "wall", subcategory: "25x40", image: "/FGP 33738 K.jpg",   suggestions: [
        "Perfect for modern, high-traffic spaces.",
        "Works well in kitchens, bathrooms, or living areas.",
        "Pairs beautifully with natural materials like wood."
      ] },
    { id: 91, name: "FGP 33740K",   category: "wall", subcategory: "25x40", image: "/FGP 33740 K.jpg",   suggestions: [
        "Ideal for creating a sleek and stylish space.",
        "Perfect for both modern and industrial-inspired interiors.",
        "Pairs well with both neutral and bold color palettes."
      ] },
    { id: 92, name: "FGP 33742K",   category: "wall", subcategory: "25x40", image: "/FGP 33742 K.jpg",   suggestions: [
        "A great option for creating a minimalistic and contemporary feel.",
        "Perfect for small spaces or accent walls.",
        "Pairs well with both light and dark furniture."
      ] },
    { id: 93, name: "FGP 33744K",   category: "wall", subcategory: "25x40", image: "/FGP 33744 K.jpg",   suggestions: [
        "Ideal for modern, upscale interiors.",
        "Adds sophistication and elegance to any room.",
        "Works well with both classic and contemporary styles."
      ] },
    { id: 94, name: "FGP 33745K",   category: "wall", subcategory: "25x40", image: "/FGP 33745 K.jpg",   suggestions: [
        "Perfect for creating a sleek, refined look in any room.",
        "Ideal for pairing with bold accent colors.",
        "Works well in both residential and commercial spaces."
      ] },
    { id: 95, name: "FGP 33746K",   category: "wall", subcategory: "25x40", image: "/FGP 33746 K.jpg",   suggestions: [
        "Adds a modern and high-end touch to any space.",
        "Perfect for bathrooms, kitchens, or feature walls.",
        "Pairs well with both light and dark tones."
      ] },
    { id: 96, name: "FGP 33747K",   category: "wall", subcategory: "25x40", image: "/FGP 33747 K.jpg",   suggestions: [
        "A great choice for contemporary and minimalistic interiors.",
        "Ideal for adding texture to any room.",
        "Looks fantastic with both neutral and vibrant color schemes."
      ] },
    { id: 97, name: "FGP 33751K",   category: "wall", subcategory: "25x40", image: "/FGP 33751 K.jpg",   suggestions: [
        "Perfect for adding a modern, stylish flair to your room.",
        "Ideal for use in living rooms, kitchens, or offices.",
        "Pairs well with neutral or contrasting color schemes."
      ] },
    { id: 98, name: "FGP 33752K",   category: "wall", subcategory: "25x40", image: "/FGP 33752 K.jpg",   suggestions: [
        "A sophisticated choice for high-end spaces.",
        "Perfect for creating a refined backdrop in any room.",
        "Works well with both bold and subtle accent colors."
      ] },
    { id: 99, name: "FGP 33753K",   category: "wall", subcategory: "25x40", image: "/FGP 33753 K.jpg",   suggestions: [
        "An ideal choice for creating a chic and contemporary atmosphere.",
        "Great for accent walls or feature spaces.",
        "Pairs beautifully with natural materials and minimalist furniture."
      ] },
    { id: 100, name: "FGP 33754K",  category: "wall", subcategory: "25x40", image: "/FGP 33754 K.jpg",   suggestions: [
        "Perfect for adding a bold and modern touch to any space.",
        "Great for both residential and commercial settings.",
        "Pairs well with sleek, contemporary furniture."
      ] },
    { id: 101, name: "FGP 33755K",  category: "wall", subcategory: "25x40", image: "/FGP 33755 K.jpg",   suggestions: [
        "A bold statement piece perfect for modern interiors.",
        "Works well with both minimalist and eclectic design styles.",
        "Pairs nicely with dark wood or metal accents."
      ] },
    { id: 102, name: "FGP 33756K",  category: "wall", subcategory: "25x40", image: "/FGP 33756 K.jpg",   suggestions: [
        "Perfect for creating a clean and polished look.",
        "Ideal for modern spaces that need a touch of elegance.",
        "Pairs well with soft color palettes and natural textures."
      ] },
    { id: 103, name: "FGP 33757K",  category: "wall", subcategory: "25x40", image: "/FGP 33757 K.jpg",   suggestions: [
        "Great for making a bold statement in contemporary spaces.",
        "Perfect for pairing with modern furniture or accents.",
        "Works well in both residential and commercial settings."
      ] },
    { id: 104, name: "FGP 33758K",  category: "wall", subcategory: "25x40", image: "/FGP 33758 K.jpg",   suggestions: [
        "A stylish choice for both residential and high-end commercial spaces.",
        "Ideal for modern interiors that need a luxurious touch.",
        "Looks great with minimalistic or bold decor."
      ] },
    { id: 105, name: "FGP 33759K",  category: "wall", subcategory: "25x40", image: "/FGP 33759 K.jpg",   suggestions: [
        "Perfect for contemporary spaces that need texture.",
        "Ideal for creating feature walls or accent spaces.",
        "Pairs well with modern furniture and light, neutral tones."
      ] },
    { id: 106, name: "FGP 33760K",  category: "wall", subcategory: "25x40", image: "/FGP 33760 K.jpg",   suggestions: [
        "A chic and modern choice for upscale interiors.",
        "Perfect for creating a minimalist or industrial aesthetic.",
        "Works well with both light and dark accents."
      ] },
    { id: 107, name: "FGP 33761K",  category: "wall", subcategory: "25x40", image: "/FGP 33761 K.jpg",   suggestions: [
        "Great for creating a contemporary, bold atmosphere.",
        "Perfect for modern living rooms or kitchens.",
        "Pairs beautifully with natural materials like wood or stone."
      ] },
    { id: 108, name: "FGP 33762K",  category: "wall", subcategory: "25x40", image: "/FGP 33762 K.jpg",   suggestions: [
        "Adds a modern touch to any space with its sleek look.",
        "Ideal for bathrooms, kitchens, or living spaces.",
        "Works well with neutral tones or contrasting vibrant colors."
      ] },
    { id: 109, name: "FGP 33763K",  category: "wall", subcategory: "25x40", image: "/FGP 33763 K.jpg",   suggestions: [
        "Perfect for creating a modern and timeless design.",
        "Great for use in kitchens, bathrooms, or accent walls.",
        "Pairs well with both contemporary and classic decor."
      ] },
    { id: 110, name: "FGP 33764K",  category: "wall", subcategory: "25x40", image: "/FGP 33764 K.jpg",   suggestions: [
        "Ideal for creating a polished, modern space.",
        "Perfect for large, open-plan interiors or feature walls.",
        "Pairs well with neutral tones and sleek decor."
      ] },
    { id: 111, name: "FGP 33765K",  category: "wall", subcategory: "25x40", image: "/FGP 33765 K.jpg",   suggestions: [
        "A versatile option that works well in both modern and traditional spaces.",
        "Great for accent walls, bathrooms, or kitchens.",
        "Pairs beautifully with both light and dark furnishings."
      ] },
    { id: 112, name: "FGP 33766K",  category: "wall", subcategory: "25x40", image: "/FGP 33766 K.jpg",   suggestions: [
        "Adds a stylish touch to any modern interior.",
        "Great for pairing with both minimalist and bold furniture.",
        "Works well in high-traffic areas like kitchens or hallways."
      ] },
    { id: 113, name: "FGP 33767K",  category: "wall", subcategory: "25x40", image: "/FGP 33767 K.jpg",   suggestions: [
        "A great option for creating an elegant, upscale look.",
        "Perfect for bathrooms, living rooms, or feature walls.",
        "Works well with both neutral and bold accent colors."
      ] },
    { id: 114, name: "FGP 33768K",  category: "wall", subcategory: "25x40", image: "/FGP 33768 K.jpg",   suggestions: [
        "A great option for creating a modern, sophisticated look.",
        "Perfect for spaces that need a refined aesthetic.",
        "Pairs well with both soft neutrals and bold contrasts."
      ] },
    { id: 115, name: "FGP 33770K",  category: "wall", subcategory: "25x40", image: "/FGP 33770 K.jpg",   suggestions: [
        "Great for creating a modern, sophisticated aesthetic.",
        "Ideal for high-traffic areas like kitchens or bathrooms.",
        "Pairs well with both dark and light tones."
      ] },
    { id: 116, name: "FGP 33771K",  category: "wall", subcategory: "25x40", image: "/FGP 33771 K.jpg",   suggestions: [
        "Perfect for creating sleek and modern spaces.",
        "Ideal for use in contemporary homes or offices.",
        "Pairs well with industrial or minimalist designs."
      ] },
    { id: 117, name: "FGP 33772K",  category: "wall", subcategory: "25x40", image: "/FGP 33772 K.jpg",   suggestions: [
        "Adds a luxurious, high-end touch to your interiors.",
        "Perfect for both residential and commercial spaces.",
        "Pairs well with light and dark tones for a balanced look."
      ] },
    { id: 118, name: "PMCP 24101K",  category: "wall", subcategory: "25x40", image: "/PMCP 24101 K.jpg",   suggestions: [
        "Ideal for flooring or feature walls due to its durable and textured finish.",
        "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
        "Pairs well with natural wood furniture or rustic decor."
      ] },
    { id: 119, name: "PMCP 24102K",  category: "wall", subcategory: "25x40", image: "/PMCP 24102 K.jpg",   suggestions: [
        "Ideal for flooring or feature walls due to its durable and textured finish.",
        "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
        "Pairs well with natural wood furniture or rustic decor."
      ] },
    { id: 120, name: "PMCP 24104K",  category: "wall", subcategory: "25x40", image: "/PMCP 24104 K.jpg",   suggestions: [
        "Ideal for flooring or feature walls due to its durable and textured finish.",
        "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
        "Pairs well with natural wood furniture or rustic decor."
      ] },
    { id: 121, name: "PMCP 24310K",  category: "wall", subcategory: "25x40", image: "/PMCP 24310 K.jpg",   suggestions: [
        "Ideal for creating a classic, timeless look for walls.",
        "Works well in both residential and commercial spaces.",
        "Pairs beautifully with neutral color palettes."
      ] },
    { id: 122, name: "PMCP 24323K",  category: "wall", subcategory: "25x40", image: "/PMCP 24323 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 123, name: "PMCP 24333K",  category: "wall", subcategory: "25x40", image: "/PMCP 24333 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 124, name: "PMCP 24335K",  category: "wall", subcategory: "25x40", image: "/PMCP 24335 K.jpg",   suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 125, name: "PMCP 24343AK", category: "wall", subcategory: "25x40", image: "/PMCP 24343 AK.jpg",  suggestions: [
        "Durable and stylish choice for modern spaces.",
        "Pairs well with neutral or bold color schemes.",
        "Complements both contemporary and classic interiors."
      ] },
    { id: 126, name: "PMCP 24353K",  category: "wall", subcategory: "25x40", image: "/PMCP 24353 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 127, name: "PMCP 24354AK", category: "wall", subcategory: "25x40", image: "/PMCP 24354 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 128, name: "PMCP 24356AK", category: "wall", subcategory: "25x40", image: "/PMCP 24356 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 129, name: "PMCP 24356BK", category: "wall", subcategory: "25x40", image: "/PMCP 24356 BK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 130, name: "PMCP 24359AK", category: "wall", subcategory: "25x40", image: "/PMCP 24359 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 131, name: "PMCP 24359BK", category: "wall", subcategory: "25x40", image: "/PMCP 24359 BK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 132, name: "PMCP 24361K",  category: "wall", subcategory: "25x40", image: "/PMCP 24361 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 133, name: "PMCP 24364K",  category: "wall", subcategory: "25x40", image: "/PMCP 24364 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 134, name: "PMCP 24365K",  category: "wall", subcategory: "25x40", image: "/PMCP 24365 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 135, name: "PMCP 24367K",  category: "wall", subcategory: "25x40", image: "/PMCP 24367 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 136, name: "PMCP 24368K",  category: "wall", subcategory: "25x40", image: "/PMCP 24368 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 137, name: "PMCP 24369K",  category: "wall", subcategory: "25x40", image: "/PMCP 24369 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 138, name: "PMCP 24370K",  category: "wall", subcategory: "25x40", image: "/PMCP 24370 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 139, name: "PMCP 24371K",  category: "wall", subcategory: "25x40", image: "/PMCP 24371 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 140, name: "PMCP 24372K",  category: "wall", subcategory: "25x40", image: "/PMCP 24372 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 141, name: "PMCP 24373K",  category: "wall", subcategory: "25x40", image: "/PMCP 24373 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 142, name: "PMCP 24374K",  category: "wall", subcategory: "25x40", image: "/PMCP 24374 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 143, name: "PMCP 24375K",  category: "wall", subcategory: "25x40", image: "/PMCP 24375 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 144, name: "PMCP 24376K",  category: "wall", subcategory: "25x40", image: "/PMCP 24376 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 145, name: "PMCP 24377K",  category: "wall", subcategory: "25x40", image: "/PMCP 24377 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 146, name: "PMCP 24378K",  category: "wall", subcategory: "25x40", image: "/PMCP 24378 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 147, name: "PMCP 24379AK", category: "wall", subcategory: "25x40", image: "/PMCP 24379 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 148, name: "PMCP 24379BK", category: "wall", subcategory: "25x40", image: "/PMCP 24379 BK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 149, name: "PMCP 24380AK", category: "wall", subcategory: "25x40", image: "/PMCP 24380 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 150, name: "PMCP 24380BK", category: "wall", subcategory: "25x40", image: "/PMCP 24380 BK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 151, name: "PMCP 24381AK", category: "wall", subcategory: "25x40", image: "/PMCP 24381 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 152, name: "PMCP 24382AK", category: "wall", subcategory: "25x40", image: "/PMCP 24382 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 153, name: "PMCP 24382CK", category: "wall", subcategory: "25x40", image: "/PMCP 24382 CK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 154, name: "PMCP 24383AK", category: "wall", subcategory: "25x40", image: "/PMCP 24383 AK.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 155, name: "PMCP 24384K",  category: "wall", subcategory: "25x40", image: "/PMCP 24384 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 156, name: "PMCP 24385K",  category: "wall", subcategory: "25x40", image: "/PMCP 24385 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 157, name: "PMCP 24386K",  category: "wall", subcategory: "25x40", image: "/PMCP 24386 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 158, name: "PMCP 24387K",  category: "wall", subcategory: "25x40", image: "/PMCP 24387 K.jpg",   suggestions: [
        "Suitable for living rooms and dining areas.",
        "Creates a classic look when paired with marble accents.",
        "Easy to maintain and resistant to stains."
      ] },
    { id: 159, name: "PMCP 24388K",  category: "wall", subcategory: "25x40", image: "/PMCP 24388 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 160, name: "PMCP 24389K",  category: "wall", subcategory: "25x40", image: "/PMCP 24389 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 161, name: "PMCP 24394K",  category: "wall", subcategory: "25x40", image: "/PMCP 24394 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 162, name: "PMCP 24400K",  category: "wall", subcategory: "25x40", image: "/PMCP 24400 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 163, name: "PMCP 24401K",  category: "wall", subcategory: "25x40", image: "/PMCP 24401 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 164, name: "PMCP 24402K",  category: "wall", subcategory: "25x40", image: "/PMCP 24402 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 165, name: "PMCP 24403K",  category: "wall", subcategory: "25x40", image: "/PMCP 24403 K.jpg",   suggestions: [
        "A clean, modern design suitable for accent walls.",
        "Pairs well with neutral colors and contemporary decor.",
        "Adds a subtle touch of elegance to any room."
      ] },
    { id: 166, name: "PMHP 24356CK", category: "wall", subcategory: "25x40", image: "/PMHP 24356 CK.jpg", suggestions: [
        "A modern, stylish option for accenting walls or surfaces.",
        "Complements both contemporary and classic interiors.",
        "Works well with both warm and cool color palettes."
      ] },
    { id: 167, name: "PMHP 24359CK", category: "wall", subcategory: "25x40", image: "/PMHP 24359 CK.jpg", suggestions: [
        "A modern, stylish option for accenting walls or surfaces.",
        "Complements both contemporary and classic interiors.",
        "Works well with both warm and cool color palettes."
      ] },
    { id: 168, name: "PMHP 24379CK", category: "wall", subcategory: "25x40", image: "/PMHP 24379 CK.jpg", suggestions: [
        "A modern, stylish option for accenting walls or surfaces.",
        "Complements both contemporary and classic interiors.",
        "Works well with both warm and cool color palettes."
      ] },
    { id: 169, name: "PMHP 24380CK", category: "wall", subcategory: "25x40", image: "/PMHP 24380 CK.jpg", suggestions: [
        "A modern, stylish option for accenting walls or surfaces.",
        "Complements both contemporary and classic interiors.",
        "Works well with both warm and cool color palettes."
      ] },
    { id: 170, name: "PMHP 24381CK", category: "wall", subcategory: "25x40", image: "/PMHP 24381 CK.jpg", suggestions: [
        "A modern, stylish option for accenting walls or surfaces.",
        "Complements both contemporary and classic interiors.",
        "Works well with both warm and cool color palettes."
      ] }
  
  ];
  
export const ProductGrid = ({
  selectedFilters,
  category,
}: ProductGridProps) => {
  const products =
    category === "sanitaryware" ? sanitarywareProducts : tilesProducts;

  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter(
          (product) =>
            selectedFilters.includes(product.category) ||
            ("subcategory" in product &&
              selectedFilters.includes(product.subcategory!))
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mx-8 md:mx-0"
        >
          <div className="flex flex-col items-center">
            {/* Direct image without container */}
            <Image
              src={product.image}
              alt={product.name}
              layout="responsive"
              width={250}
              height={200}
              // className="md:w-58 md:h-48 object-cover rounded-sm mb-4"
              className="object-cover rounded-sm mb-2"
            />

            {/* Centered product name */}
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
              {product.name}
            </h3>

            {/* Suggestions list */}
            <div className="w-full space-y-3">
              {product.suggestions.map((suggestion, index) => (
                <div key={index} className="flex place-items-start gap-2">
                  <div className="w-4 h-4 mt-1 bg-orange-500 flex-shrink-0 rounded"></div>
                  <p className="text-sm text-gray-600">{suggestion}</p>
                </div>
              ))}
            </div>

            {/* Price and category at the bottom */}
            <div className="mt-4 flex items-center justify-between w-full pt-4 border-t">
              <span className="text-sm text-gray-500 capitalize">
                {product.category}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
