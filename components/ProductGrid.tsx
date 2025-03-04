
import { motion } from 'framer-motion';
import Image from 'next/image'
import Toilet from '@/components/images/toilet.png'

interface ProductGridProps {
  selectedFilters: string[];
  category: 'sanitaryware' | 'tiles';
}

const sanitarywareProducts = [
  {
    id: 1,
    name: 'Modern Wall-Mounted Sink',
    category: 'sinks',
    image: Toilet,
    suggestions: [
      'Perfect for minimalist bathrooms',
      'Pair with matte black fixtures',
      'Add floating shelves for storage'
    ]
  },

  {
    id: 2,
    name: 'Minimalist Bathroom Mirror',
    category: 'mirrors',
    image: Toilet,
    suggestions: [
      'Install with warm LED lighting',
      'Center above vanity for balance',
      'Match with chrome accessories'
    ]
  },
  {
    id: 3,
    name: 'Smart Toilet with Bidet',
    category: 'toilets',
    image: Toilet,
    suggestions: [
      'Add motion sensor lighting',
      'Install ventilation nearby',
      'Pair with heated flooring'
    ]
  },
  {
    id: 4,
    name: 'Modern Faucet',
    category: 'faucets',
    image: Toilet,
    suggestions: [
      'Match with sink material',
      'Consider water efficiency',
      'Add soap dispenser set'
    ]
  },
];

const tilesProducts = [
  {
    id: 1,
    name: "FGB44689K",
    category: "floor",
    subcategory: "30x30",
    image: "/images/floor1.jpg",
    suggestions: [
      "Perfect for shower walls - adds a natural calming vibe",
      "Pairs well with earthy tones i.e beige, gray, brown",
      "Pairs well with metallic / wooden / ceramic furniture e.g ceramic sink"
    ]
  },
  {
    id: 2,
    name: "FGB44731K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floo2.jpg",
    suggestions: [
      "Perfect for a living room or dining area for a warm, inviting feel",
      "Pairs well with light-colored walls (off-white or soft taupe)",
      "Pairs well with black metal accents (like a modern dining table) for contrast."
    ]
  },
  {
    id: 3,
    name: "FGB44734K",
    category: "floor",
    subcategory: "50x50",
    image: "/images/floor3.jpg",
    suggestions: [
      "Perfect for a kitchen area for an elegant and easy-to-maintain floor",
      "Pairs well with accent colors like muted greens or blues to add depth.",
      "Pairs well with minimalist white or gray furniture for a sleek look."
    ]
  },
  {
    id: 4,
    name: "FGB44685K",
    category: "floor",
    subcategory: "60x60",
    image: "/images/floor4.jpg",
    suggestions: [
      "Perfect for bedroom for a coastal, calming ambiance.",
      "Pairs well with soft blues, white, and muted grays to enhance the coastal feel",
      "Pairs well with woven textures like linen or jute for a cozy, organic touch"
    ]
  },
  {
    id: 5,
    name: "FGE44754K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floor5.jpg",
    suggestions: [
      "Perfect for kitchens or bathrooms, particularly as a decorative border for countertop edges",
      "Pairs well with crisp, neutral tones like white, soft gray, or muted metallics",
      "Pairs well with sleek, modern furniture and minimalist shelving.",
    ]
  },
  {
    id: 6,
    name: "PCMP24381AK",
    category: "wall",
    subcategory: "25x40",
    image: "/images/wall1.jpg",
    suggestions: [
      "Ideal for flooring or feature walls due to its durable and textured finish.",
      "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
      "Pairs well with natural wood furniture or rustic decor."
    ]
  }
];

export const ProductGrid = ({ selectedFilters, category }: ProductGridProps) => {
  const products = category === 'sanitaryware' ? sanitarywareProducts : tilesProducts;
  
  const filteredProducts = selectedFilters.length === 0
    ? products
    : products.filter(product => selectedFilters.includes(product.category) || 
    ('subcategory' in product && selectedFilters.includes(product.subcategory!)));

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
              layout='responsive'
              width={250}
              height={200}
              // className="md:w-58 md:h-48 object-cover rounded-sm mb-4"
              className='object-cover rounded-sm mb-2'
            />

            {/* Centered product name */}
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
              {product.name}
            </h3>

            {/* Suggestions list */}
            <div className="w-full space-y-3">
              {product.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center md:place-items-start gap-2">
                  <div className="w-4 h-4 md: mt-1 bg-orange-500 flex-shrink-0 rounded"></div>
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
