import { motion } from "framer-motion";
import Image from "next/image";
import Toilet from "@/components/images/toilet.png";

interface ProductGridProps {
  selectedFilters: string[];
  category: "sanitaryware" | "tiles";
}

const sanitarywareProducts = [
  {
    id: 1,
    name: "Modern Wall-Mounted Sink",
    category: "sinks",
    image: Toilet,
    suggestions: [
      "Perfect for minimalist bathrooms",
      "Pair with matte black fixtures",
      "Add floating shelves for storage",
    ],
  },

  {
    id: 2,
    name: "Minimalist Bathroom Mirror",
    category: "mirrors",
    image: Toilet,
    suggestions: [
      "Install with warm LED lighting",
      "Center above vanity for balance",
      "Match with chrome accessories",
    ],
  },
  {
    id: 3,
    name: "Smart Toilet with Bidet",
    category: "toilets",
    image: Toilet,
    suggestions: [
      "Add motion sensor lighting",
      "Install ventilation nearby",
      "Pair with heated flooring",
    ],
  },
  {
    id: 4,
    name: "Modern Faucet",
    category: "faucets",
    image: Toilet,
    suggestions: [
      "Match with sink material",
      "Consider water efficiency",
      "Add soap dispenser set",
    ],
  },
];

const tilesProducts = [
  {
    id: 1,
    name: "FGB 44689K",
    category: "floor",
    subcategory: "30x30",
    image: "/images/floor1.jpg",
    suggestions: [
      "Perfect for shower walls - adds a natural calming vibe",
      "Pairs well with earthy tones i.e beige, gray, brown",
      "Pairs well with metallic / wooden / ceramic furniture e.g ceramic sink",
    ],
  },
  {
    id: 2,
    name: "FGB 44731K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floo2.jpg",
    suggestions: [
      "Perfect for a living room or dining area for a warm, inviting feel",
      "Pairs well with light-colored walls (off-white or soft taupe)",
      "Pairs well with black metal accents (like a modern dining table) for contrast.",
    ],
  },
  {
    id: 3,
    name: "FGB 44734K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floor3.jpg",
    suggestions: [
      "Perfect for a kitchen area for an elegant and easy-to-maintain floor",
      "Pairs well with accent colors like muted greens or blues to add depth.",
      "Pairs well with minimalist white or gray furniture for a sleek look.",
    ],
  },
  {
    id: 4,
    name: "FGB 44685K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floor4.jpg",
    suggestions: [
      "Perfect for bedroom for a coastal, calming ambiance.",
      "Pairs well with soft blues, white, and muted grays to enhance the coastal feel",
      "Pairs well with woven textures like linen or jute for a cozy, organic touch",
    ],
  },
  {
    id: 5,
    name: "FGE 44754K",
    category: "floor",
    subcategory: "40x40",
    image: "/images/floor5.jpg",
    suggestions: [
      "Perfect for kitchens or bathrooms, particularly as a decorative border for countertop edges",
      "Pairs well with crisp, neutral tones like white, soft gray, or muted metallics",
      "Pairs well with sleek, modern furniture and minimalist shelving.",
    ],
  },
  {
    id: 6,
    name: "PCMP 24381AK",
    category: "wall",
    subcategory: "25x40",
    image: "/images/wall1.jpg",
    suggestions: [
      "Ideal for flooring or feature walls due to its durable and textured finish.",
      "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
      "Pairs well with natural wood furniture or rustic decor.",
    ],
  },
  {
    id: 7,
    name: "PCMP 24101K",
    category: "wall",
    subcategory: "25x40",
    image: "/PMCP 24101 K.jpg",
    suggestions: [
      "Ideal for flooring or feature walls due to its durable and textured finish.",
      "Pairs well with warm, earthy tones like terracotta, beige, or sage green to complement its organic or matte appearance.",
      "Pairs well with natural wood furniture or rustic decor.",
    ],
  },
  {
    id: 8,
    name: "BLO 33743 K",
    category: "floor",
    subcategory: "30X30",
    image: "/BLO 33743 K.jpg",
    suggestions: [
      "Perfect for contemporary interiors with a sleek look.",
      "Pairs well with neutral tones like gray, white, and taupe.",
      "Works well in high-traffic areas due to its durable finish.",
    ],
  },
  {
    id: 9,
    name: "BLO 33803 K",
    category: "floor",
    subcategory: "30X30",
    image: "/BLO 33803 K.jpg",
    suggestions: [
      "Ideal for feature walls to add a touch of luxury.",
      "Best complemented with metallic accents in decor.",
      "Easy to clean surface, suitable for kitchens and bathrooms.",
    ],
  },
  {
    id: 10,
    name: "FGB 44714 K",
    category: "floor",
    subcategory: "40x40",
    image: "/FGB 4414 K.jpg",
    suggestions: [
        "Great for both indoor and outdoor flooring.",
        "Complements minimalist and modern interiors.",
        "Durable and slip-resistant, suitable for wet areas."
    ]
},
{
    id: 11,
    name: "FGP 33749 K",
    category: "floor",
    subcategory: "30x30",
    image: "/FGP 33749 K.jpg",
    suggestions: [
        "Perfect for vintage or classic-themed spaces.",
        "Pairs well with wooden furniture and earthy decor.",
        "Textured surface provides better grip and safety."
    ]
},
{
    id: 12,
    name: "PMCP 24387 K",
    category: "wall",
    subcategory: "25x40",
    image: "/PMCP 24387 K.jpg",
    suggestions: [
        "Suitable for living rooms and dining areas.",
        "Creates a classic look when paired with marble accents.",
        "Easy to maintain and resistant to stains."
    ]
},
{
    id: 13,
    name: "YMP 66740 T",
    category: "floor",
    subcategory: "60x60",
    image: "/YMP 66740 T.jpg",
    suggestions: [
        "Great alternative to hardwood flooring.",
        "Brings warmth to interiors while maintaining durability.",
        "Looks best with modern or Scandinavian-style decor."
    ]
},
{
  id: 14,
  name: "BLO 33810 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33810 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 15,
  name: "BLO 33811 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33811 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 16,
  name: "BLO 33812 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33812 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 17,
  name: "BLO 33820 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33820 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 18,
  name: "BLO 33875 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33875 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 19,
  name: "BLO 33878 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33878 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 20,
  name: "BLO 33881 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33881 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 21,
  name: "BLO 33883 K",
  category: "floor",
  subcategory: "30x30",
  image: "/BLO 33883 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 22,
  name: "BLO 44031 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44031 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 23,
  name: "BLO 44033 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44033 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 24,
  name: "BLO 44063 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44063 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 25,
  name: "BLO 44074 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44074 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 26,
  name: "BLO 44086 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44086 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 27,
  name: "BLO 44087 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44087 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 28,
  name: "BLO 44088 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44088 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 29,
  name: "BLO 44103 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44103 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 30,
  name: "BLO 44107 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44107 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 31,
  name: "BLO 44108 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44108 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 32,
  name: "BLO 44108 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44108(2) K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 33,
  name: "BLO 44109 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44109 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 34,
  name: "BLO 44110 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44110 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 35,
  name: "BLO 44111 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44111 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 36,
  name: "BLO 44112 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44112 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 37,
  name: "BLO 44113 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44113 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 38,
  name: "BLO 44116 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44116 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 39,
  name: "BLO 44117 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44117 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 40,
  name: "BLO 44120 K",
  category: "floor",
  subcategory: "40x40",
  image: "/BLO 44120 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 41,
  name: "FGB 44714 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 4414 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 42,
  name: "FGB 44537 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44537 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 43,
  name: "FGB 44685 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44685 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 44,
  name: "FGB 44689 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44689 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 45,
  name: "FGB 44693 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44693 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 46,
  name: "FGB 44712 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44712 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 47,
  name: "FGB 44726 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44726 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 48,
  name: "FGB 44727 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44727 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 49,
  name: "FGB 44728 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44728 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 50,
  name: "FGB 44729 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44729 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 51,
  name: "FGB 44730 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44730 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 52,
  name: "FGB 44731 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44731 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 53,
  name: "FGB 44733 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44733 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 54,
  name: "FGB 44734 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44734 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 55,
  name: "FGB 44735 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44735 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 56,
  name: "FGB 44737 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44737 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 57,
  name: "FGB 44738 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGB 44738 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 58,
  name: "FGC 66043 T",
  category: "floor",
  subcategory: "60x60",
  image: "/FGC 66043 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 59,
  name: "FGC 66200 T",
  category: "floor",
  subcategory: "60x60",
  image: "/FGC 66200 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 60,
  name: "FGC 66235 T",
  category: "floor",
  subcategory: "60x60",
  image: "/FGC 66235 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 61,
  name: "YMP 66703 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66703 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 62,
  name: "YMP 66721 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66721 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 63,
  name: "YMP 66737 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66737 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 64,
  name: "YMP 66738 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66738 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 65,
  name: "YMP 66742 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66742 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 66,
  name: "YMP 66790 T",
  category: "floor",
  subcategory: "60x60",
  image: "/YMP 66790 T.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 67,
  name: "PMCP 24102 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24102 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 68,
  name: "PMCP 24104 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24104 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 69,
  name: "PMCP 24310 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24310 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 70,
  name: "PMCP 24323 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24323 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 71,
  name: "PMCP 24333 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24333 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 72,
  name: "PMCP 24335 K",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24335 K.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 73,
  name: "PMCP 24343 AK",
  category: "wall",
  subcategory: "25x40",
  image: "/PMCP 24343 AK.jpg",
  suggestions: [
      "Durable and stylish choice for modern spaces.",
      "Pairs well with neutral or bold color schemes.",
      "Complements both contemporary and classic interiors."
  ]
},
{
  id: 74,
  name: "FGE 44740 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44740 K.jpg",
  suggestions: [
    "A sleek and modern design perfect for contemporary spaces.",
    "Ideal for creating a minimalist, elegant look.",
    "Works well with both light and dark color palettes."
  ]
},
{
  id: 75,
  name: "FGE 44741 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44741 K.jpg",
  suggestions: [
    "Brings a sophisticated vibe to any room.",
    "Perfect for accent walls or backsplash designs.",
    "Pairs well with wooden or neutral finishes."
  ]
},
{
  id: 76,
  name: "FGE 44742 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44742 K.jpg",
  suggestions: [
    "Offers a bold statement in modern interiors.",
    "Great for both commercial and residential spaces.",
    "Works wonderfully in high-traffic areas like kitchens."
  ]
},
{
  id: 77,
  name: "FGE 44743 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44743 K.jpg",
  suggestions: [
    "A perfect option for adding texture to your space.",
    "Complements both urban and rustic aesthetics.",
    "Can be paired with contrasting furniture for a dynamic look."
  ]
},
{
  id: 78,
  name: "FGE 44744 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44744 K.jpg",
  suggestions: [
    "Ideal for creating a modern, high-end feel in any room.",
    "Works perfectly in bathrooms or kitchens.",
    "Pairs well with chrome or stainless steel finishes."
  ]
},
{
  id: 79,
  name: "FGE 44745 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44745 K.jpg",
  suggestions: [
    "An excellent choice for those looking to add dimension to their walls.",
    "Gives a sleek, stylish appearance while being durable.",
    "Ideal for both residential and commercial spaces."
  ]
},
{
  id: 80,
  name: "FGE 44746 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44746 K.jpg",
  suggestions: [
    "Perfect for enhancing any modern living space.",
    "Its simplicity adds elegance without overwhelming the space.",
    "Ideal for pairing with larger furniture pieces."
  ]
},
{
  id: 81,
  name: "FGE 44749 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44749 K.jpg",
  suggestions: [
    "A clean and contemporary option for minimalistic decor.",
    "Works well in kitchens, bathrooms, or feature walls.",
    "Pairs well with a variety of accent colors."
  ]
},
{
  id: 82,
  name: "FGE 44750 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44750 K.jpg",
  suggestions: [
    "Sleek and stylish, great for adding a modern touch.",
    "Perfect for smaller spaces or accent walls.",
    "Matches well with bold or monochrome decor styles."
  ]
},
{
  id: 83,
  name: "FGE 44751 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44751 K.jpg",
  suggestions: [
    "A bold and unique option for those wanting something different.",
    "Ideal for accenting rooms with bold color schemes.",
    "Creates a sophisticated atmosphere with its unique design."
  ]
},
{
  id: 84,
  name: "FGE 44753 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44753 K.jpg",
  suggestions: [
    "Perfect for modern, high-end spaces.",
    "Looks fantastic in both residential and commercial settings.",
    "Pairs well with bright or neutral color themes."
  ]
},
{
  id: 85,
  name: "FGE 44756 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44756 K.jpg",
  suggestions: [
    "Brings a sleek, contemporary touch to your space.",
    "Great for high-traffic areas, such as kitchens or hallways.",
    "Pairs well with other neutral or bold accent pieces."
  ]
},
{
  id: 86,
  name: "FGE 44757 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44757 K.jpg",
  suggestions: [
    "Perfect for adding a modern, stylish accent to your room.",
    "Works well in both residential and commercial spaces.",
    "Pairs perfectly with both light and dark furniture choices."
  ]
},
{
  id: 87,
  name: "FGE 44758 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44758 K.jpg",
  suggestions: [
    "Ideal for minimalist or industrial-inspired interiors.",
    "Can be used in bathrooms, kitchens, or living spaces.",
    "Offers a clean, modern appearance to your room."
  ]
},
{
  id: 88,
  name: "FGE 44759 K",
  category: "floor",
  subcategory: "40x40",
  image: "/FGE 44759 K.jpg",
  suggestions: [
    "Creates a stylish and sleek backdrop in your space.",
    "Great for complementing both warm and cool-toned decor.",
    "Ideal for contemporary and modern home interiors."
  ]
},
{
  id: 89,
  name: "FGP 33005 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33005 K.jpg",
  suggestions: [
    "Perfect for adding texture to modern interiors.",
    "Great for use in both residential and commercial spaces.",
    "Works well with a variety of design styles, from industrial to rustic."
  ]
},
{
  id: 90,
  name: "FGP 33006 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33006 K.jpg",
  suggestions: [
    "A contemporary choice that complements both modern and classic decor.",
    "Ideal for accent walls or as a statement piece.",
    "Pairs well with natural materials like wood and stone."
  ]
},
{
  id: 91,
  name: "FGP 33009 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33009 K.jpg",
  suggestions: [
    "Great for creating a bold look in modern living spaces.",
    "Pairs well with both vibrant and neutral tones.",
    "Perfect for high-traffic areas like kitchens and hallways."
  ]
},
{
  id: 92,
  name: "FGP 33011 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33011 K.jpg",
  suggestions: [
    "Adds a modern, high-end touch to any room.",
    "Looks great in bathrooms, kitchens, or living areas.",
    "Pairs well with neutral decor and natural materials."
  ]
},
{
  id: 93,
  name: "FGP 33047 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33047 K.jpg",
  suggestions: [
    "Perfect for achieving a clean and sleek modern look.",
    "Great for minimalist and industrial-inspired interiors.",
    "Pairs well with both monochrome and colorful decor."
  ]
},
{
  id: 94,
  name: "FGP 33048 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33048 K.jpg",
  suggestions: [
    "Brings a sophisticated, textured look to any space.",
    "Ideal for contemporary design styles.",
    "Works well with a variety of furniture and accent colors."
  ]
},
{
  id: 95,
  name: "FGP 33123 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33123 K.jpg",
  suggestions: [
    "An excellent choice for accent walls or feature spaces.",
    "Perfect for modern and minimalist interiors.",
    "Pairs beautifully with bold or neutral tones."
  ]
},
{
  id: 96,
  name: "FGP 33191 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33191 K.jpg",
  suggestions: [
    "Creates a sleek, refined look for modern interiors.",
    "Great for accentuating living rooms or kitchens.",
    "Pairs well with contemporary furniture and decor."
  ]
},
{
  id: 97,
  name: "FGP 33516 K",
  category: "floor",
  subcategory: "30x30",
  image: "/FGP 33516 K.jpg",
  suggestions: [
    "Perfect for creating a bold focal point in any room.",
    "Works well with both industrial and modern design schemes.",
    "Pairs beautifully with dark wood or metal accents."
  ]
}
];

export const ProductGrid = ({
  selectedFilters,
  category,
}: ProductGridProps) => {
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
