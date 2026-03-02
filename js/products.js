/**
 * FurnishThings Product Catalog
 * Amazon Affiliate Dropship Model
 * Replace ASINs and image URLs with real Amazon products
 */

const AFFILIATE_TAG = 'furnishthings-20'; // Replace with your Amazon Associates tag

const CATEGORIES = [
  { id: 'living', name: 'Living Room', icon: '🛋️', count: 0 },
  { id: 'bedroom', name: 'Bedroom', icon: '🛏️', count: 0 },
  { id: 'dining', name: 'Dining', icon: '🍽️', count: 0 },
  { id: 'office', name: 'Office', icon: '💼', count: 0 },
  { id: 'outdoor', name: 'Outdoor', icon: '🌳', count: 0 },
  { id: 'decor', name: 'Décor', icon: '🎨', count: 0 },
  { id: 'storage', name: 'Storage', icon: '📦', count: 0 },
  { id: 'lighting', name: 'Lighting', icon: '💡', count: 0 }
];

const PRODUCTS = [
  // === LIVING ROOM ===
  {
    id: 'lr-001',
    name: 'Milano L-Shaped Sectional Sofa',
    category: 'living',
    price: 1299,
    wasPrice: 1599,
    rating: 4.5,
    reviews: 1247,
    description: 'Velvet upholstery, reversible chaise, solid wood legs. 104" W × 72" D.',
    tags: ['bestseller', 'free-shipping'],
    color: '#8B6F47',
    icon: '🛋️',
    asin: 'B0XXXXXXXX1'
  },
  {
    id: 'lr-002',
    name: 'Scandinavian Accent Chair',
    category: 'living',
    price: 349,
    wasPrice: 449,
    rating: 4.7,
    reviews: 892,
    description: 'Boucle fabric, walnut frame. Mid-century modern design.',
    tags: ['trending'],
    color: '#C4A882',
    icon: '🪑',
    asin: 'B0XXXXXXXX2'
  },
  {
    id: 'lr-003',
    name: 'Industrial Coffee Table',
    category: 'living',
    price: 289,
    wasPrice: 379,
    rating: 4.4,
    reviews: 634,
    description: 'Reclaimed wood top, black steel frame. 48" × 24".',
    tags: ['sale'],
    color: '#6B4423',
    icon: '🪵',
    asin: 'B0XXXXXXXX3'
  },
  {
    id: 'lr-004',
    name: 'Modular Bookshelf Unit',
    category: 'living',
    price: 459,
    wasPrice: null,
    rating: 4.6,
    reviews: 412,
    description: '5-tier open shelving, metal and wood. Customizable layout.',
    tags: ['new'],
    color: '#3D3D3D',
    icon: '📚',
    asin: 'B0XXXXXXXX4'
  },
  {
    id: 'lr-005',
    name: 'Plush Velvet Loveseat',
    category: 'living',
    price: 699,
    wasPrice: 899,
    rating: 4.3,
    reviews: 578,
    description: 'Channel tufted back, gold metal legs. 58" W.',
    tags: ['sale', 'free-shipping'],
    color: '#2E4057',
    icon: '🛋️',
    asin: 'B0XXXXXXXX5'
  },
  {
    id: 'lr-006',
    name: 'Round Side Table Set (2)',
    category: 'living',
    price: 169,
    wasPrice: 219,
    rating: 4.5,
    reviews: 1032,
    description: 'Nesting tables, marble top, gold base. Set of 2.',
    tags: ['bestseller'],
    color: '#D4AF37',
    icon: '⭕',
    asin: 'B0XXXXXXXX6'
  },

  // === BEDROOM ===
  {
    id: 'br-001',
    name: 'Nordic Platform Bed - Queen',
    category: 'bedroom',
    price: 899,
    wasPrice: 1099,
    rating: 4.6,
    reviews: 2134,
    description: 'Solid oak frame, upholstered headboard. No box spring needed.',
    tags: ['bestseller', 'free-shipping'],
    color: '#D4B896',
    icon: '🛏️',
    asin: 'B0XXXXXXXX7'
  },
  {
    id: 'br-002',
    name: 'Memory Foam Mattress - Queen',
    category: 'bedroom',
    price: 599,
    wasPrice: 799,
    rating: 4.4,
    reviews: 3421,
    description: '12" gel-infused memory foam. CertiPUR-US certified.',
    tags: ['sale', 'free-shipping'],
    color: '#E8E8E8',
    icon: '🌙',
    asin: 'B0XXXXXXXX8'
  },
  {
    id: 'br-003',
    name: '6-Drawer Dresser',
    category: 'bedroom',
    price: 549,
    wasPrice: 699,
    rating: 4.3,
    reviews: 876,
    description: 'Solid pine, soft-close drawers. 56" W × 18" D × 32" H.',
    tags: ['sale'],
    color: '#A0522D',
    icon: '🗄️',
    asin: 'B0XXXXXXXX9'
  },
  {
    id: 'br-004',
    name: 'Nightstand with USB Charging',
    category: 'bedroom',
    price: 179,
    wasPrice: 229,
    rating: 4.7,
    reviews: 1567,
    description: '2 drawers, built-in USB-C ports, LED strip option.',
    tags: ['trending', 'new'],
    color: '#4A4A4A',
    icon: '🔌',
    asin: 'B0XXXXXXX10'
  },
  {
    id: 'br-005',
    name: 'Linen Upholstered Headboard',
    category: 'bedroom',
    price: 249,
    wasPrice: null,
    rating: 4.5,
    reviews: 643,
    description: 'Adjustable height, diamond tufting. Fits Queen/Full.',
    tags: [],
    color: '#C9B99A',
    icon: '🛏️',
    asin: 'B0XXXXXXX11'
  },

  // === DINING ===
  {
    id: 'dn-001',
    name: 'Farmhouse Dining Table',
    category: 'dining',
    price: 749,
    wasPrice: 899,
    rating: 4.5,
    reviews: 1876,
    description: 'Seats 6, solid acacia wood, trestle base. 72" × 36".',
    tags: ['bestseller', 'free-shipping'],
    color: '#8B7355',
    icon: '🍽️',
    asin: 'B0XXXXXXX12'
  },
  {
    id: 'dn-002',
    name: 'Windsor Dining Chairs (Set of 4)',
    category: 'dining',
    price: 399,
    wasPrice: 499,
    rating: 4.4,
    reviews: 2341,
    description: 'Solid wood, spindle back. Classic farmhouse style.',
    tags: ['sale'],
    color: '#DEB887',
    icon: '🪑',
    asin: 'B0XXXXXXX13'
  },
  {
    id: 'dn-003',
    name: 'Kitchen Island Cart',
    category: 'dining',
    price: 469,
    wasPrice: 599,
    rating: 4.6,
    reviews: 987,
    description: 'Butcher block top, drawer + cabinet. Locking wheels.',
    tags: ['sale', 'free-shipping'],
    color: '#F5DEB3',
    icon: '🏝️',
    asin: 'B0XXXXXXX14'
  },
  {
    id: 'dn-004',
    name: 'Counter Height Bar Stools (Set of 2)',
    category: 'dining',
    price: 219,
    wasPrice: 279,
    rating: 4.3,
    reviews: 1654,
    description: 'Swivel seat, footrest, faux leather. 26" seat height.',
    tags: ['trending'],
    color: '#696969',
    icon: '🪑',
    asin: 'B0XXXXXXX15'
  },

  // === OFFICE ===
  {
    id: 'of-001',
    name: 'Executive Standing Desk',
    category: 'office',
    price: 499,
    wasPrice: 649,
    rating: 4.7,
    reviews: 2876,
    description: 'Electric height adjustable, 55" × 28". Memory presets.',
    tags: ['bestseller', 'free-shipping'],
    color: '#4A6741',
    icon: '💻',
    asin: 'B0XXXXXXX16'
  },
  {
    id: 'of-002',
    name: 'Ergonomic Mesh Office Chair',
    category: 'office',
    price: 349,
    wasPrice: 449,
    rating: 4.5,
    reviews: 4521,
    description: 'Lumbar support, adjustable arms, breathable mesh back.',
    tags: ['bestseller'],
    color: '#333333',
    icon: '🪑',
    asin: 'B0XXXXXXX17'
  },
  {
    id: 'of-003',
    name: 'Industrial Bookcase',
    category: 'office',
    price: 289,
    wasPrice: null,
    rating: 4.4,
    reviews: 765,
    description: '5 open shelves, metal frame + wood. 70" H × 31" W.',
    tags: ['new'],
    color: '#5C4033',
    icon: '📚',
    asin: 'B0XXXXXXX18'
  },
  {
    id: 'of-004',
    name: 'Filing Cabinet - 3 Drawer',
    category: 'office',
    price: 189,
    wasPrice: 229,
    rating: 4.2,
    reviews: 432,
    description: 'Locking drawers, rolling casters. Fits letter/legal.',
    tags: [],
    color: '#708090',
    icon: '🗂️',
    asin: 'B0XXXXXXX19'
  },

  // === OUTDOOR ===
  {
    id: 'od-001',
    name: '4-Piece Patio Conversation Set',
    category: 'outdoor',
    price: 899,
    wasPrice: 1199,
    rating: 4.3,
    reviews: 1234,
    description: 'All-weather wicker, cushions included. Loveseat + 2 chairs + table.',
    tags: ['sale', 'free-shipping'],
    color: '#556B2F',
    icon: '🌿',
    asin: 'B0XXXXXXX20'
  },
  {
    id: 'od-002',
    name: 'Adirondack Chair (Set of 2)',
    category: 'outdoor',
    price: 299,
    wasPrice: 379,
    rating: 4.6,
    reviews: 2187,
    description: 'HDPE all-weather material. Foldable, no maintenance.',
    tags: ['bestseller'],
    color: '#228B22',
    icon: '🪑',
    asin: 'B0XXXXXXX21'
  },
  {
    id: 'od-003',
    name: 'Outdoor Dining Table - 6 Seat',
    category: 'outdoor',
    price: 579,
    wasPrice: 699,
    rating: 4.4,
    reviews: 567,
    description: 'Teak wood, umbrella hole. 60" × 36".',
    tags: ['sale'],
    color: '#CD853F',
    icon: '☂️',
    asin: 'B0XXXXXXX22'
  },

  // === DÉCOR ===
  {
    id: 'dc-001',
    name: 'Moroccan Area Rug 8×10',
    category: 'decor',
    price: 249,
    wasPrice: 349,
    rating: 4.5,
    reviews: 3456,
    description: 'Soft polypropylene, geometric pattern. Stain resistant.',
    tags: ['bestseller', 'sale'],
    color: '#C4A882',
    icon: '🟫',
    asin: 'B0XXXXXXX23'
  },
  {
    id: 'dc-002',
    name: 'Decorative Throw Pillow Set (4)',
    category: 'decor',
    price: 49,
    wasPrice: 69,
    rating: 4.6,
    reviews: 5678,
    description: '18×18, removable covers. Boho textures, neutral tones.',
    tags: ['trending'],
    color: '#D2B48C',
    icon: '🟤',
    asin: 'B0XXXXXXX24'
  },
  {
    id: 'dc-003',
    name: 'Oversized Wall Mirror',
    category: 'decor',
    price: 189,
    wasPrice: null,
    rating: 4.7,
    reviews: 1234,
    description: 'Arched, gold metal frame. 65" H × 22" W.',
    tags: ['trending', 'new'],
    color: '#D4AF37',
    icon: '🪞',
    asin: 'B0XXXXXXX25'
  },

  // === STORAGE ===
  {
    id: 'st-001',
    name: 'Entryway Storage Bench',
    category: 'storage',
    price: 269,
    wasPrice: 339,
    rating: 4.4,
    reviews: 987,
    description: 'Flip-top storage, shoe shelf below. 42" W.',
    tags: ['sale'],
    color: '#8B7D6B',
    icon: '🧳',
    asin: 'B0XXXXXXX26'
  },
  {
    id: 'st-002',
    name: 'Cube Storage Organizer (9-Cube)',
    category: 'storage',
    price: 89,
    wasPrice: 119,
    rating: 4.3,
    reviews: 4321,
    description: 'Stackable, fabric bins included. Multiple configs.',
    tags: ['bestseller'],
    color: '#A0A0A0',
    icon: '📦',
    asin: 'B0XXXXXXX27'
  },

  // === LIGHTING ===
  {
    id: 'lt-001',
    name: 'Arc Floor Lamp',
    category: 'lighting',
    price: 159,
    wasPrice: 199,
    rating: 4.5,
    reviews: 1876,
    description: 'Adjustable arm, marble base, linen shade. 76" H.',
    tags: ['trending', 'free-shipping'],
    color: '#F5F5DC',
    icon: '💡',
    asin: 'B0XXXXXXX28'
  },
  {
    id: 'lt-002',
    name: 'Modern Chandelier - 6 Light',
    category: 'lighting',
    price: 329,
    wasPrice: 429,
    rating: 4.6,
    reviews: 876,
    description: 'Sputnik style, brass finish, dimmable. 25" diameter.',
    tags: ['sale'],
    color: '#DAA520',
    icon: '✨',
    asin: 'B0XXXXXXX29'
  }
];

// Helper: build Amazon affiliate URL
function getAmazonUrl(product) {
  return `https://www.amazon.com/dp/${product.asin}?tag=${AFFILIATE_TAG}`;
}

// Update category counts
CATEGORIES.forEach(cat => {
  cat.count = PRODUCTS.filter(p => p.category === cat.id).length;
});
