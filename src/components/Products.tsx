export type Product = {
  id: string;
  name: string;
  blurb: string;
  img: string;
  price: number;
  link: string;
  amazonLink?: string;
  category:
    | "beauty-self-care"
    | "grocery-gourmet"
    | "health-household"
    | "home-kitchen"
    | "office-products"
    | "pet-supplies"
    | "toys-games";
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  // --- NEW ADDITIONS: BEAUTY & PERSONAL CARE ---
  {
    id: "501",
    name: "Schick Precision Dermaplaning Tool",
    blurb:
      "Expertly shape eyebrows and smooth skin by gently exfoliating. Reveal your natural glow.",
    img: "https://m.media-amazon.com/images/I/71Cjhz9Sz7L._SX466_.jpg",
    price: 6,
    link: "/product/501",
    amazonLink: "https://www.amazon.com/dp/B0787GLBMV",
    category: "beauty-self-care",
    rating: 4.6,
    reviews: 1240,
  },
  {
    id: "502",
    name: "Listerine PocketPaks Oral Strips",
    blurb:
      "Instantly dissolve for fresh breath on the go. Kills 99% of bad breath germs.",
    img: "https://m.media-amazon.com/images/I/71dGMmNFFPL._SX466_.jpg",
    price: 5,
    link: "/product/502",
    amazonLink: "https://www.amazon.com/dp/B000QXH4PK",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 3200,
  },
  {
    id: "503",
    name: "Maybelline Volumizing Mascara",
    blurb:
      "Instant lash lift and volume. Falsies effect in a tube without the hassle.",
    img: "https://m.media-amazon.com/images/I/71MQo8pHmBL._SX466_.jpg",
    price: 11,
    link: "/product/503",
    amazonLink: "https://www.amazon.com/dp/B08H3JPH74",
    category: "beauty-self-care",
    rating: 4.5,
    reviews: 8900,
  },
  {
    id: "504",
    name: "Julep Eyeshadow Stick",
    blurb:
      "Crème-to-powder waterproof formula. Glides on effortlessly for all-day wear.",
    img: "https://m.media-amazon.com/images/I/81P-k2IHyiL._SX466_.jpg",
    price: 16,
    link: "/product/504",
    amazonLink: "https://www.amazon.com/dp/B01LW1983J",
    category: "beauty-self-care",
    rating: 4.4,
    reviews: 540,
  },
  {
    id: "505",
    name: "Under Eye Gold Patches",
    blurb:
      "24k gold energy to reduce puffiness and dark circles. A luxurious wake-up call for your eyes.",
    img: "https://m.media-amazon.com/images/I/71klB9KjwIL._SX466_.jpg",
    price: 15,
    link: "/product/505",
    amazonLink: "https://www.amazon.com/dp/B014E2D6BY",
    category: "beauty-self-care",
    rating: 4.3,
    reviews: 210,
  },
  {
    id: "506",
    name: "Medicube Collagen Skincare",
    blurb:
      "Advanced collagen formula for firming and plumping. Achieve glass skin hydration.",
    img: "https://m.media-amazon.com/images/I/61c5EovDcyL._SX466_.jpg",
    price: 35,
    link: "/product/506",
    amazonLink: "https://www.amazon.com/dp/B0DGPSZVW3",
    category: "beauty-self-care",
    rating: 4.7,
    reviews: 85,
  },
  {
    id: "507",
    name: "Sol de Janeiro Hair Fragrance",
    blurb:
      "Transport yourself to Brazil with this iconic pistachio and salted caramel scent.",
    img: "https://m.media-amazon.com/images/I/61eXe6NOAuL._SX522_.jpg",
    price: 38,
    link: "/product/507",
    amazonLink: "https://www.amazon.com/dp/B09W18N3GT",
    category: "beauty-self-care",
    rating: 4.9,
    reviews: 4500,
  },
  {
    id: "508",
    name: "CeraVe Moisturizing Cream",
    blurb:
      "Restores the protective skin barrier with essential ceramides. Hydration that lasts all day.",
    img: "https://m.media-amazon.com/images/I/61EidjXUBrL._SX466_.jpg",
    price: 19,
    link: "/product/508",
    amazonLink: "https://www.amazon.com/dp/B00TTD9BRC",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 15000,
  },
  {
    id: "509",
    name: "The Ordinary Niacinamide",
    blurb:
      "High-strength vitamin and mineral blemish formula. Regulates sebum and minimizes pores.",
    img: "https://m.media-amazon.com/images/I/61QBAJHZNhL._SX522_.jpg",
    price: 7,
    link: "/product/509",
    amazonLink: "https://www.amazon.com/dp/B01MDTVZTZ",
    category: "beauty-self-care",
    rating: 4.6,
    reviews: 9000,
  },
  {
    id: "510",
    name: "Neutrogena Makeup Remover",
    blurb:
      "Ultra-soft towelettes that dissolve all traces of dirt, oil, and makeup.",
    img: "https://m.media-amazon.com/images/I/718f8oZHkSL._SX466_.jpg",
    price: 10,
    link: "/product/510",
    amazonLink: "https://www.amazon.com/dp/B07GKVBQDG",
    category: "beauty-self-care",
    rating: 4.7,
    reviews: 6700,
  },
  {
    id: "511",
    name: "Bubble Skincare Cleanser",
    blurb:
      "A refreshing daily gel cleanser that knocks out dirt without drying out your face.",
    img: "https://m.media-amazon.com/images/I/51ObCFKLbEL._SX466_.jpg",
    price: 17,
    link: "/product/511",
    amazonLink: "https://www.amazon.com/dp/B0BSYNNP86",
    category: "beauty-self-care",
    rating: 4.5,
    reviews: 340,
  },
  {
    id: "512",
    name: "Summer Fridays Jet Lag Mask",
    blurb:
      "Upgrade your skin's hydration with this nourishing, antioxidant-rich mask.",
    img: "https://m.media-amazon.com/images/I/512ImcMl12L._SX466_.jpg",
    price: 49,
    link: "/product/512",
    amazonLink: "https://www.amazon.com/dp/B09HT3H9DK",
    category: "beauty-self-care",
    rating: 4.8,
    reviews: 1200,
  },

  // --- NEW ADDITIONS: GROCERY & GOURMET FOOD ---
  {
    id: "601",
    name: "Jolly Rancher Tropical Hard Candy",
    blurb:
      "A burst of bold tropical fruit flavors. Long-lasting taste that packs a punch.",
    img: "https://m.media-amazon.com/images/I/81OmuNGg3DL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg",
    price: 4,
    link: "/product/601",
    amazonLink: "https://www.amazon.com/dp/B092W6PD9Q",
    category: "grocery-gourmet",
    rating: 4.7,
    reviews: 2100,
  },
  {
    id: "602",
    name: "French’s Yellow Mustard Packets",
    blurb:
      "Classic tangy taste in convenient single-serve packets. Perfect for picnics and parties.",
    img: "https://m.media-amazon.com/images/I/816WWebX77L._SY679_PIbundle-100,TopRight,0,0_SX345SY679SH20_.jpg",
    price: 12,
    link: "/product/602",
    amazonLink: "https://www.amazon.com/dp/B0745WY8L6",
    category: "grocery-gourmet",
    rating: 4.8,
    reviews: 530,
  },
  {
    id: "603",
    name: "Andes Creme de Menthe Chocolate",
    blurb:
      "Refreshing mint sandwiched between two layers of rich chocolate. The perfect after-dinner treat.",
    img: "https://m.media-amazon.com/images/I/31Am3Ivc04L.jpg",
    price: 6,
    link: "/product/603",
    amazonLink: "https://www.amazon.com/dp/B00H603XME",
    category: "grocery-gourmet",
    rating: 4.9,
    reviews: 1800,
  },
  {
    id: "604",
    name: "Kool-Aid Cherry Drink Mix",
    blurb:
      "The classic taste of cherry. Just add water and sugar for a refreshing family beverage.",
    img: "https://m.media-amazon.com/images/I/71xmeMl6XhL._SX679_PIbundle-48,TopRight,0,0_AA679SH20_.jpg",
    price: 5,
    link: "/product/604",
    amazonLink: "https://www.amazon.com/dp/B0793D8RJ8",
    category: "grocery-gourmet",
    rating: 4.6,
    reviews: 980,
  },
  {
    id: "605",
    name: "Fun Dip Candy",
    blurb:
      "Interactive candy fun. Dip the stick into the flavor pouches for a tangy sugary blast.",
    img: "https://m.media-amazon.com/images/I/91fBQ27+DuL._SX679_.jpg",
    price: 5,
    link: "/product/605",
    amazonLink: "https://www.amazon.com/dp/B07NFHB98R",
    category: "grocery-gourmet",
    rating: 4.5,
    reviews: 750,
  },
  {
    id: "606",
    name: "Saratoga Still Spring Water",
    blurb:
      "Pure, crisp spring water in a premium cobalt blue bottle. Refreshment elevated.",
    img: "https://m.media-amazon.com/images/I/51aFkbfpaTL._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg",
    price: 35,
    link: "/product/606",
    amazonLink: "https://www.amazon.com/dp/B0D3NS1LSM",
    category: "grocery-gourmet",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: "607",
    name: "Stellar Pretzel Braids",
    blurb:
      "Buttery, vegan pretzels infused with gourmet flavors. A snack worthy of the stars.",
    img: "https://m.media-amazon.com/images/I/81zGv-xa1IL._SX522_.jpg",
    price: 7,
    link: "/product/607",
    amazonLink: "https://www.amazon.com/dp/B0DR3G4Y5B",
    category: "grocery-gourmet",
    rating: 4.4,
    reviews: 95,
  },
  {
    id: "608",
    name: "Smucker’s Strawberry Preserves",
    blurb:
      "Made with whole strawberries. A sweet, timeless spread for toast and biscuits.",
    img: "https://m.media-amazon.com/images/I/61sLeFvyocL._SX679_.jpg",
    price: 4,
    link: "/product/608",
    amazonLink: "https://www.amazon.com/dp/B00099XMO8",
    category: "grocery-gourmet",
    rating: 4.7,
    reviews: 2400,
  },
  {
    id: "609",
    name: "Life Savers Hard Candy",
    blurb:
      "The classic 5 flavors that have stood the test of time. Simply delicious.",
    img: "https://m.media-amazon.com/images/I/61yNOoaAbLL._SX679_.jpg",
    price: 3,
    link: "/product/609",
    amazonLink: "https://www.amazon.com/dp/B01I9XPBYY",
    category: "grocery-gourmet",
    rating: 4.8,
    reviews: 3100,
  },
  {
    id: "610",
    name: "Poppi Prebiotic Soda",
    blurb:
      "Sparkling soda infused with apple cider vinegar. Gut health meets great taste.",
    img: "https://m.media-amazon.com/images/I/71pLSzY5mlL._AC_SX679_.jpg",
    price: 28,
    link: "/product/610",
    amazonLink: "https://www.amazon.com/dp/B0C34ZXWF2",
    category: "grocery-gourmet",
    rating: 4.6,
    reviews: 5600,
  },

  // --- NEW ADDITIONS: HEALTH & HOUSEHOLD ---
  {
    id: "701",
    name: "WEEM Hair Skin Nails Gummies",
    blurb:
      "Vegan vitamins to boost natural beauty from within. Delicious and effective.",
    img: "https://m.media-amazon.com/images/I/51FjeT8vUSL._AC_SX679_PIbundle-60,TopRight,0,0_SH20_.jpg",
    price: 25,
    link: "/product/701",
    amazonLink: "https://www.amazon.com/dp/B08FGZSW8L",
    category: "health-household",
    rating: 4.5,
    reviews: 800,
  },
  {
    id: "702",
    name: "Propolis Extract Supplement",
    blurb:
      "Natural bee propolis for immune support. A daily defender for your well-being.",
    img: "https://m.media-amazon.com/images/I/61hiuvH+pkL._AC_SX679_.jpg",
    price: 22,
    link: "/product/702",
    amazonLink: "https://www.amazon.com/dp/B019ND0DU6",
    category: "health-household",
    rating: 4.7,
    reviews: 340,
  },
  {
    id: "703",
    name: "Dawn Platinum Powerwash",
    blurb:
      "Spray, wipe, and rinse. Cuts through grease 5x faster for sparkling dishes.",
    img: "https://m.media-amazon.com/images/I/81eWpX+xOfL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    price: 9,
    link: "/product/703",
    amazonLink: "https://www.amazon.com/dp/B07YD3KQ5S",
    category: "health-household",
    rating: 4.9,
    reviews: 12000,
  },
  {
    id: "704",
    name: "Kleenex Facial Tissues",
    blurb: "Soft, strong, and absorbent. Essential comfort for every room.",
    img: "https://m.media-amazon.com/images/I/81aQFHnoq9L._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    price: 18,
    link: "/product/704",
    amazonLink: "https://www.amazon.com/dp/B09M5XF6JV",
    category: "health-household",
    rating: 4.8,
    reviews: 5600,
  },
  {
    id: "705",
    name: "Affresh Washing Machine Cleaner",
    blurb:
      "Deep cleans your washer to remove odor-causing residues. Keep your laundry fresh.",
    img: "https://m.media-amazon.com/images/I/61mT-XwnVgL._AC_SX679_.jpg",
    price: 12,
    link: "/product/705",
    amazonLink: "https://www.amazon.com/dp/B00C91Q86I",
    category: "health-household",
    rating: 4.7,
    reviews: 21000,
  },
  {
    id: "706",
    name: "Duracell AA Batteries",
    blurb:
      "Long-lasting power you can trust. Essential for all your household devices.",
    img: "https://m.media-amazon.com/images/I/71F1yxjGeYL._AC_SX679_.jpg",
    price: 16,
    link: "/product/706",
    amazonLink: "https://www.amazon.com/dp/B0035LCFNQ",
    category: "health-household",
    rating: 4.9,
    reviews: 45000,
  },
  {
    id: "707",
    name: "Tide Laundry Detergent",
    blurb:
      "The trusted clean. Fights odors and stains for bright, fresh clothes every time.",
    img: "https://m.media-amazon.com/images/I/81G7BbEO96L._AC_SX679_.jpg",
    price: 21,
    link: "/product/707",
    amazonLink: "https://www.amazon.com/dp/B0BJMV9BXJ",
    category: "health-household",
    rating: 4.8,
    reviews: 18500,
  },
  {
    id: "708",
    name: "Band-Aid Flexible Fabric",
    blurb:
      "Moves with you to cover and protect wounds. The gold standard for healing.",
    img: "https://m.media-amazon.com/images/I/811J9hn8iIL._AC_SX679_.jpg",
    price: 8,
    link: "/product/708",
    amazonLink: "https://www.amazon.com/dp/B00006IDL6",
    category: "health-household",
    rating: 4.8,
    reviews: 3200,
  },

  // --- NEW ADDITIONS: HOME & KITCHEN ---
  {
    id: "801",
    name: "BALEINE Wrapping Storage Box",
    blurb:
      "Keep your holiday wrappings organized and dust-free. Sturdy and spacious.",
    img: "https://m.media-amazon.com/images/I/81yayl7NPjL._AC_SX679_.jpg",
    price: 24,
    link: "/product/801",
    amazonLink: "https://www.amazon.com/dp/B0CHJLZ5CC",
    category: "home-kitchen",
    rating: 4.6,
    reviews: 450,
  },
  {
    id: "802",
    name: "Gorilla Grip Bathroom Rug",
    blurb:
      "Ultra-absorbent and soft. Stays in place to keep your bathroom safe and cozy.",
    img: "https://m.media-amazon.com/images/I/71y11KMV2kL._AC_SX679_.jpg",
    price: 19,
    link: "/product/802",
    amazonLink: "https://www.amazon.com/dp/B07FPQZG6V",
    category: "home-kitchen",
    rating: 4.5,
    reviews: 2800,
  },
  {
    id: "803",
    name: "Homaxy Waffle Kitchen Towels",
    blurb:
      "100% Cotton with a honeycomb design. Lightweight, absorbent, and quick-drying.",
    img: "https://m.media-amazon.com/images/I/81YlKeBDwML._AC_SX679_.jpg",
    price: 15,
    link: "/product/803",
    amazonLink: "https://www.amazon.com/dp/B07WMQP4SF",
    category: "home-kitchen",
    rating: 4.4,
    reviews: 1200,
  },
  {
    id: "804",
    name: "Utopia Bedding Comforter",
    blurb:
      "Plush siliconized fiberfill for a cozy night's sleep. Elegant box-stitch construction.",
    img: "https://m.media-amazon.com/images/I/61I+yIdUNsL._AC_SX679_.jpg",
    price: 29,
    link: "/product/804",
    amazonLink: "https://www.amazon.com/dp/B08DTH86Q2",
    category: "home-kitchen",
    rating: 4.6,
    reviews: 8900,
  },
  {
    id: "805",
    name: "HydroJug Insulated Bottle",
    blurb:
      "Triple-layer insulation keeps drinks cold for 24 hours. Leak-proof and durable.",
    img: "https://m.media-amazon.com/images/I/41Dz7KzIs6L._AC_SX679_.jpg",
    price: 35,
    link: "/product/805",
    amazonLink: "https://www.amazon.com/dp/B0CQVWT2NH",
    category: "home-kitchen",
    rating: 4.8,
    reviews: 1100,
  },
  {
    id: "806",
    name: "Bedsure Pillowcases",
    blurb:
      "Silky soft brushed microfiber. Reduces friction for better hair and skin during sleep.",
    img: "https://m.media-amazon.com/images/I/71lChEqublL._AC_SX679_.jpg",
    price: 10,
    link: "/product/806",
    amazonLink: "https://www.amazon.com/dp/B0725WFLMB",
    category: "home-kitchen",
    rating: 4.5,
    reviews: 24000,
  },
  {
    id: "807",
    name: "Owala FreeSip Water Bottle",
    blurb: "Sip or swig. The patented spout gives you the best of both worlds.",
    img: "https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg",
    price: 28,
    link: "/product/807",
    amazonLink: "https://www.amazon.com/dp/B0BZYCJK89",
    category: "home-kitchen",
    rating: 4.9,
    reviews: 3200,
  },
  {
    id: "808",
    name: "Shower Curtain with Hooks",
    blurb:
      "Waterproof and mold-resistant. A clean, waffle-weave design for a spa-like bath.",
    img: "https://m.media-amazon.com/images/I/71qiW-RP39L._AC_SX679_.jpg",
    price: 16,
    link: "/product/808",
    amazonLink: "https://www.amazon.com/dp/B082KP92DF",
    category: "home-kitchen",
    rating: 4.4,
    reviews: 890,
  },

  // --- NEW ADDITIONS: OFFICE PRODUCTS ---
  {
    id: "901",
    name: "Sharpie Permanent Markers",
    blurb:
      "Bold to the max. Permanent on most surfaces, quick-drying, and fade-resistant.",
    img: "https://m.media-amazon.com/images/I/81qUvR1flmL._AC_SX466_.jpg",
    price: 12,
    link: "/product/901",
    amazonLink: "https://www.amazon.com/dp/B08MBFPFCQ",
    category: "office-products",
    rating: 4.8,
    reviews: 6700,
  },
  {
    id: "902",
    name: "Scotch Tape Dispenser",
    blurb:
      "Weighted base for easy one-handed dispensing. A classic desktop essential.",
    img: "https://m.media-amazon.com/images/I/61aylZ6wB0L._AC_SX466_.jpg",
    price: 8,
    link: "/product/902",
    amazonLink: "https://www.amazon.com/dp/B0000DH8HQ",
    category: "office-products",
    rating: 4.7,
    reviews: 2100,
  },
  {
    id: "903",
    name: "Hammermill Printer Paper",
    blurb:
      "99.99% Jam-Free guarantee. Bright white paper for professional-looking documents.",
    img: "https://m.media-amazon.com/images/I/71M2jqoK7XL._AC_SX466_.jpg",
    price: 15,
    link: "/product/903",
    amazonLink: "https://www.amazon.com/dp/B072FVQNWM",
    category: "office-products",
    rating: 4.8,
    reviews: 14500,
  },
  {
    id: "904",
    name: "Pilot G2 Retractable Pens",
    blurb:
      "Smooth writing gel ink that glides across the page. Longest writing gel ink pen.",
    img: "https://m.media-amazon.com/images/I/713GdY+wh4L._AC_SX466_.jpg",
    price: 14,
    link: "/product/904",
    amazonLink: "https://www.amazon.com/dp/B001GAOTSW",
    category: "office-products",
    rating: 4.8,
    reviews: 9800,
  },
  {
    id: "905",
    name: "Logitech Mouse Pad",
    blurb:
      "Smooth surface for effortless mouse control. Anti-slip rubber base keeps it in place.",
    img: "https://m.media-amazon.com/images/I/81WQsjtppYL._AC_SX466_.jpg",
    price: 10,
    link: "/product/905",
    amazonLink: "https://www.amazon.com/dp/B09DV56338",
    category: "office-products",
    rating: 4.6,
    reviews: 4300,
  },
  {
    id: "906",
    name: "Five Star Notebook",
    blurb:
      "Built strong to last long. High-quality paper that resists ink bleed.",
    img: "https://m.media-amazon.com/images/I/71gpdT3i-TL._AC_SX466_.jpg",
    price: 7,
    link: "/product/906",
    amazonLink: "https://www.amazon.com/dp/B003O2RXUQ",
    category: "office-products",
    rating: 4.7,
    reviews: 5600,
  },
  {
    id: "907",
    name: "Amazon Basics Stapler",
    blurb:
      "Durable and reliable. Staples up to 10 sheets with ease. Non-skid base.",
    img: "https://m.media-amazon.com/images/I/71ORqgJajrL._AC_SX466_.jpg",
    price: 9,
    link: "/product/907",
    amazonLink: "https://www.amazon.com/dp/B079ZV4V3C",
    category: "office-products",
    rating: 4.5,
    reviews: 1200,
  },

  // --- NEW ADDITIONS: PET SUPPLIES ---
  {
    id: "1001",
    name: "Pet Hair Remover Tool",
    blurb:
      "Effortlessly sweep away fur from furniture and clothes. Reusable and self-cleaning.",
    img: "https://m.media-amazon.com/images/I/71mmJsbMGZL._AC_SX679_.jpg",
    price: 18,
    link: "/product/1001",
    amazonLink: "https://www.amazon.com/dp/B00BAGTNAQ",
    category: "pet-supplies",
    rating: 4.4,
    reviews: 9800,
  },
  {
    id: "1002",
    name: "Temptations Cat Treats",
    blurb:
      "Crunchy outside, soft inside. The treats cats rush for every time you shake the bag.",
    img: "https://m.media-amazon.com/images/I/8108Aln7zcL._AC_SX679_.jpg",
    price: 8,
    link: "/product/1002",
    amazonLink: "https://www.amazon.com/dp/B01LNB6SA0",
    category: "pet-supplies",
    rating: 4.8,
    reviews: 14000,
  },
  {
    id: "1003",
    name: "Pedigree Dentastix",
    blurb:
      "Clinically proven to reduce plaque and tartar buildup. A tasty treat for dental health.",
    img: "https://m.media-amazon.com/images/I/81WVzmbSXzL._AC_SX679_.jpg",
    price: 15,
    link: "/product/1003",
    amazonLink: "https://www.amazon.com/dp/B00CU2CMOI",
    category: "pet-supplies",
    rating: 4.7,
    reviews: 8200,
  },
  {
    id: "1004",
    name: "Earth Rated Dog Bags",
    blurb:
      "Leak-proof and extra thick. Lavender-scented to mask odors during walks.",
    img: "https://m.media-amazon.com/images/I/61P2BRuFA-L._AC_SX679_.jpg",
    price: 12,
    link: "/product/1004",
    amazonLink: "https://www.amazon.com/dp/B07NHL31CC",
    category: "pet-supplies",
    rating: 4.9,
    reviews: 25000,
  },
  {
    id: "1005",
    name: "Purina FortiFlora Probiotic",
    blurb:
      "Promotes normal intestinal microflora. Veterinarian recommended for digestive health.",
    img: "https://m.media-amazon.com/images/I/71NHJn8UsCL._AC_SX679_.jpg",
    price: 30,
    link: "/product/1005",
    amazonLink: "https://www.amazon.com/dp/B001650NNW",
    category: "pet-supplies",
    rating: 4.8,
    reviews: 9000,
  },
  {
    id: "1006",
    name: "Fresh Step Cat Litter",
    blurb:
      "Febreze freshness guarantees odor control for 10 days. Low dust and clumping.",
    img: "https://m.media-amazon.com/images/I/812DzHQhm6L._AC_SX679_.jpg",
    price: 18,
    link: "/product/1006",
    amazonLink: "https://www.amazon.com/dp/B000VDR8LA",
    category: "pet-supplies",
    rating: 4.6,
    reviews: 5400,
  },
  {
    id: "1007",
    name: "Milk-Bone Dog Treats",
    blurb:
      "Wholesome goodness for your dog. Crunchy texture helps clean teeth and freshen breath.",
    img: "https://m.media-amazon.com/images/I/81fIlvbNf1L._AC_SX466_.jpg",
    price: 11,
    link: "/product/1007",
    amazonLink: "https://www.amazon.com/dp/B006HKA6II",
    category: "pet-supplies",
    rating: 4.8,
    reviews: 11000,
  },

  // --- NEW ADDITIONS: TOYS & GAMES ---
  {
    id: "1101",
    name: "Incohearent Party Game",
    blurb:
      "The adult party game that will get you talking. Guess the hidden phrase.",
    img: "https://m.media-amazon.com/images/I/71+t8++hVeL._AC_SY879_.jpg",
    price: 20,
    link: "/product/1101",
    amazonLink: "https://www.amazon.com/dp/B07QSCQMXV",
    category: "toys-games",
    rating: 4.6,
    reviews: 14000,
  },
  {
    id: "1102",
    name: "Moose Master Card Game",
    blurb:
      "The perfect game for game night. Easy to learn, hysterical fun for everyone.",
    img: "https://m.media-amazon.com/images/I/71nJWOUlnoL._AC_SY879_.jpg",
    price: 15,
    link: "/product/1102",
    amazonLink: "https://www.amazon.com/dp/B07XGNSH8Y",
    category: "toys-games",
    rating: 4.7,
    reviews: 4500,
  },
  {
    id: "1103",
    name: "Crayola Color Wonder",
    blurb:
      "Mess-free coloring! Markers appear only on special magical paper. Perfect for travel.",
    img: "https://m.media-amazon.com/images/I/81q13+KL29L._AC_SX679_.jpg",
    price: 8,
    link: "/product/1103",
    amazonLink: "https://www.amazon.com/dp/B084Y3DLFJ",
    category: "toys-games",
    rating: 4.8,
    reviews: 12000,
  },
  {
    id: "1104",
    name: "Shashibo Shape Shifting Box",
    blurb:
      "36 rare earth magnets transform into over 70 shapes. A mesmerizing fidget toy.",
    img: "https://m.media-amazon.com/images/I/71FDJXk6qhL._AC_SX679_.jpg",
    price: 25,
    link: "/product/1104",
    amazonLink: "https://www.amazon.com/dp/B07W5QM4DP",
    category: "toys-games",
    rating: 4.5,
    reviews: 45000,
  },
  {
    id: "1105",
    name: "LEGO Botanicals Bouquet",
    blurb:
      "Create a beautiful flower display that never wilts. A relaxing and creative building project.",
    img: "https://m.media-amazon.com/images/I/7126IIfAZgL._AC_SX679_.jpg",
    price: 45,
    link: "/product/1105",
    amazonLink: "https://www.amazon.com/dp/B0DRW6C2RF",
    category: "toys-games",
    rating: 4.9,
    reviews: 12000,
  },
  {
    id: "1106",
    name: "Connect 4 Classic Grid",
    blurb:
      "The classic strategy game. Challenge a friend to drop the red or yellow discs.",
    img: "https://m.media-amazon.com/images/I/81fEiLrmZ8L._AC_SX679_.jpg",
    price: 12,
    link: "/product/1106",
    amazonLink: "https://www.amazon.com/dp/B00D8STBHY",
    category: "toys-games",
    rating: 4.8,
    reviews: 18000,
  },
  {
    id: "1107",
    name: "Bicycle Standard Playing Cards",
    blurb:
      "Air cushion finish for ease of handling and shuffling. Classic design for any card game.",
    img: "https://m.media-amazon.com/images/I/71Ygz4aX3NL._AC_SX679_.jpg",
    price: 4,
    link: "/product/1107",
    amazonLink: "https://www.amazon.com/dp/B000BUUTJ6",
    category: "toys-games",
    rating: 4.9,
    reviews: 54000,
  },

  // End of new additions
];

export const dynamicCategories = Array.from(
  new Set(products.map((p) => p.category))
);

export const categoryLabels: Record<Product["category"], string> = {
  "beauty-self-care": "Beauty & Self Care",
  "grocery-gourmet": "Grocery & Gourmet Food",
  "health-household": "Health & Household",
  "home-kitchen": "Home & Kitchen",
  "office-products": "Office Products",
  "pet-supplies": "Pet Supplies",
  "toys-games": "Toys & Games",
};

/*
  DEPRECATED / COMMENTED OUT PRODUCTS (Previous Inventory)
  
  {
    id: "6",
    name: "Moonlit Linen Room Spray",
    blurb: "A calming, slow-burning fragrance that settles your space into a hushed, luxurious mood instantly.",
    img: "/assets/images/linen.webp",
    price: 24,
    link: "/product/6",
    category: "home-decor",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: "13",
    name: "Marble Ceramic Vase",
    blurb: "A sculptural piece that holds flowers and moments in equal measure. Timeless elegance for any room.",
    img: "/assets/images/vase.avif",
    price: 45,
    link: "/product/13",
    category: "home-decor",
    rating: 4.8,
    reviews: 9,
  },
  // ... and others
*/
