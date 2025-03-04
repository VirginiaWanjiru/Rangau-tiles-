
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
    id: 5,
    name: 'Marble Effect Porcelain Tiles',
    category: 'porcelain',
    image: Toilet,
    suggestions: [
      'Pair with neutral walls',
      'Add gold accents',
      'Use warm lighting'
    ]
  },
  {
    id: 6,
    name: 'Wood Effect Ceramic Tiles',
    category: 'ceramic',
    image: Toilet,
    suggestions: [
      'Mix with natural materials',
      'Use in herringbone pattern',
      'Add plants for contrast'
    ]
  },
  {
    id: 7,
    name: 'Modern Mosaic Tiles',
    category: 'mosaic',
    image: Toilet,
    suggestions: [
      'Create feature wall',
      'Balance with solid colors',
      'Add LED strip lighting'
    ]
  },
  {
    id: 8,
    name: 'Natural Stone Tiles',
    category: 'stone',
    image: Toilet,
    suggestions: [
      'Use in wet areas',
      'Seal for longevity',
      'Mix sizes for interest'
    ]
  },
];

export const ProductGrid = ({ selectedFilters, category }: ProductGridProps) => {
  const products = category === 'sanitaryware' ? sanitarywareProducts : tilesProducts;
  
  const filteredProducts = selectedFilters.length === 0
    ? products
    : products.filter(product => selectedFilters.includes(product.category));

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
              className="md:w-58 md:h-48 object-cover rounded-sm mb-4"
            />

            {/* Centered product name */}
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
              {product.name}
            </h3>

            {/* Suggestions list */}
            <div className="w-full space-y-3">
              {product.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 flex-shrink-0 rounded"></div>
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
