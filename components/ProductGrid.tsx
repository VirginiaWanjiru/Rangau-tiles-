
import { motion } from 'framer-motion';
import Image from 'next/image'

interface ProductGridProps {
  selectedFilters: string[];
  category: 'sanitaryware' | 'tiles';
}

const sanitarywareProducts = [
  {
    id: 1,
    name: 'Modern Wall-Mounted Sink',
    category: 'sinks',
    Image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1584622781867-1c5e578ca499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1584622781867-1c5e578ca499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1615974679860-955921a8d4e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    Image: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
          className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
        >
          <div className="flex flex-col items-center">
            {/* Direct image without container */}
            <Image
              src={product.Image}
              alt={product.name}
              className="w-48 h-48 object-cover rounded-lg mb-4"
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
