import type { Product, Rate, Testimonial, FAQ, NavItem, Stat } from "@/types";

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/rates", label: "Daily Rates" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Business constants
export const BUSINESS = {
  name: "Bhavani Store",
  tagline: "50 Years of Trust in Agricultural Commodities",
  established: "1974",
  phone: "+91 93603 33025",
  whatsappNumber: "919360333025",
  email: "harishbalajipmk@gmail.com",
  address: {
    street: "Venkataseshwara Colony",
    area: "Muthukulathur Road",
    city: "Paramakudi",
    state: "Tamil Nadu",
    country: "India",
    pincode: "623707",
  },
  gst: "33XXXXX1234X1XX",
  mapsUrl: "https://maps.app.goo.gl/MGU8NUGfMsEo1L1BA",
  hours: {
    weekdays: "8:00 AM - 7:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Closed",
    whatsapp: "24/7",
  },
} as const;

// Products data
export const PRODUCTS: Product[] = [
  {
    name: "Red Dry Chillies",
    image: "/images/red-chillies.jpg",
    description:
      "Premium quality red dry chillies sourced directly from local farmers. Known for their vibrant color, optimal heat level, and rich flavor profile.",
    category: "Spices",
    quality: "Premium Grade",
    keywords: "red chillies, dry chillies, spices export",
    slug: "red-dry-chillies",
  },
  {
    name: "Guntur Chillies",
    image: "/images/guntur-chillies.jpg",
    description:
      "Authentic Guntur variety chillies, renowned for their superior quality and heat. Perfect for commercial processing and export.",
    category: "Spices",
    quality: "Export Grade",
    keywords: "guntur chillies, andhra chillies, hot chillies",
    slug: "guntur-chillies",
  },
  {
    name: "Raw Cotton",
    image: "/images/raw-cotton.jpg",
    description:
      "High-grade raw cotton with excellent fiber quality. Sourced from certified farmers following sustainable practices.",
    category: "Fiber Crops",
    quality: "Commercial Grade",
    keywords: "raw cotton, cotton suppliers, textile cotton",
    slug: "raw-cotton",
  },
  {
    name: "Paddy (Rice)",
    image: "/images/paddy-rice.jpg",
    description:
      "Premium paddy varieties including Poinni, CR, Samba, Mattai, and RNR. Properly dried and stored for optimal quality.",
    category: "Cereals",
    quality: "Premium Grade",
    keywords: "paddy rice, rice suppliers, wholesale rice, poinni, cr, samba, mattai, rnr",
    slug: "paddy-rice",
  },
  {
    name: "Neem Seeds",
    image: "/images/neem-seeds.jpg",
    description:
      "Organically sourced neem seeds for oil extraction and agricultural applications. Known for their medicinal and pesticidal properties.",
    category: "Oil Seeds",
    quality: "Organic",
    keywords: "neem seeds, organic neem, natural pesticide",
    slug: "neem-seeds",
  },
  {
    name: "Tamarind",
    image: "/images/tamarind.jpg",
    description:
      "Fresh and processed tamarind pods with rich tangy flavor. Available in various forms including paste and blocks.",
    category: "Fruits",
    quality: "Premium Grade",
    keywords: "tamarind, tamarind paste, sour fruit",
    slug: "tamarind",
  },
  {
    name: "Tamarind Seeds",
    image: "/images/tamarind-seeds.jpg",
    description:
      "Clean, dried tamarind seeds used for various industrial applications including gum production and animal feed.",
    category: "By-products",
    quality: "Industrial Grade",
    keywords: "tamarind seeds, industrial seeds, gum seeds",
    slug: "tamarind-seeds",
  },
  {
    name: "Millets (Limited Varieties)",
    image: "/images/millets.jpg",
    description:
      "Nutritious millet varieties including pearl millet, finger millet, and foxtail millet. Perfect for health-conscious consumers.",
    category: "Cereals",
    quality: "Organic",
    keywords: "millets, pearl millet, finger millet, healthy grains",
    slug: "millets",
  },
];

// Daily rates data
export const RATES: Rate[] = [
  {
    commodity: "Red Dry Chillies",
    variety: "Teja Quality",
    unit: "Per Quintal",
    currentRate: "₹8,500 - ₹9,200",
    yesterdayRate: "₹8,300 - ₹9,000",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Guntur Chillies",
    variety: "Sannam 334",
    unit: "Per Quintal",
    currentRate: "₹9,800 - ₹10,500",
    yesterdayRate: "₹9,900 - ₹10,600",
    trend: "down",
    quality: "Export Grade",
  },
  {
    commodity: "Raw Cotton",
    variety: "Shankar-6",
    unit: "Per Candy",
    currentRate: "₹58,000 - ₹62,000",
    yesterdayRate: "₹57,500 - ₹61,500",
    trend: "up",
    quality: "Commercial",
  },
  {
    commodity: "Paddy Rice (Poinni)",
    variety: "Poinni Variety",
    unit: "Per Quintal",
    currentRate: "₹2,900 - ₹3,300",
    yesterdayRate: "₹2,850 - ₹3,250",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Paddy Rice (CR)",
    variety: "CR Variety",
    unit: "Per Quintal",
    currentRate: "₹2,700 - ₹3,100",
    yesterdayRate: "₹2,650 - ₹3,050",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Paddy Rice (Samba)",
    variety: "Samba Variety",
    unit: "Per Quintal",
    currentRate: "₹2,600 - ₹3,000",
    yesterdayRate: "₹2,550 - ₹2,950",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Paddy Rice (Mattai)",
    variety: "Mattai Variety",
    unit: "Per Quintal",
    currentRate: "₹2,500 - ₹2,900",
    yesterdayRate: "₹2,450 - ₹2,850",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Paddy Rice (RNR)",
    variety: "RNR Variety",
    unit: "Per Quintal",
    currentRate: "₹2,800 - ₹3,200",
    yesterdayRate: "₹2,750 - ₹3,150",
    trend: "up",
    quality: "Premium",
  },
  {
    commodity: "Tamarind",
    variety: "Ball Quality",
    unit: "Per Quintal",
    currentRate: "₹4,500 - ₹5,200",
    yesterdayRate: "₹4,600 - ₹5,300",
    trend: "down",
    quality: "Premium",
  },
  {
    commodity: "Neem Seeds",
    variety: "Dried Seeds",
    unit: "Per Quintal",
    currentRate: "₹1,800 - ₹2,100",
    yesterdayRate: "₹1,750 - ₹2,050",
    trend: "up",
    quality: "Organic",
  },
  {
    commodity: "Pearl Millet",
    variety: "Local Variety",
    unit: "Per Quintal",
    currentRate: "₹2,200 - ₹2,500",
    yesterdayRate: "₹2,200 - ₹2,500",
    trend: "stable",
    quality: "Commercial",
  },
  {
    commodity: "Tamarind Seeds",
    variety: "Industrial Grade",
    unit: "Per Quintal",
    currentRate: "₹800 - ₹1,000",
    yesterdayRate: "₹750 - ₹950",
    trend: "up",
    quality: "Industrial",
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Kumar",
    location: "Cotton Farmer, Ramanathapuram",
    content:
      "Bhavani Store has been our trusted partner for over 15 years. They always offer fair prices and prompt payments.",
    rating: 5,
  },
  {
    name: "Priya Textiles",
    location: "Cotton Vendor, Coimbatore",
    content:
      "The quality of cotton we receive from Bhavani Store is consistently excellent. Their grading is very reliable.",
    rating: 5,
  },
  {
    name: "Murugan Spices",
    location: "Chilli Processor, Madurai",
    content:
      "Best source for premium Guntur chillies in Tamil Nadu. Quality is always as promised and delivery is on time.",
    rating: 5,
  },
];

// Stats
export const STATS: Stat[] = [
  { number: "50+", label: "Years of Experience", description: "Serving since 1974" },
  { number: "1000+", label: "Farmers Connected", description: "Across Tamil Nadu" },
  { number: "500+", label: "Vendor Partners", description: "Across the region" },
  { number: "8", label: "Product Categories", description: "Premium commodities" },
];

// FAQ data
export const FAQS: FAQ[] = [
  // General Questions
  {
    question: "What is Bhavani Store and what do you trade?",
    answer:
      "Bhavani Store is a GST-registered agricultural commodities trading house established in 1974 in Paramakudi, Tamil Nadu. We specialize in trading Red Dry Chillies, Guntur Chillies, Raw Cotton, Paddy (various varieties), Neem Seeds, Tamarind, Tamarind Seeds, and Millets. We directly connect farmers with vendors, ensuring fair prices and quality assurance for both parties.",
    category: "General",
  },
  {
    question: "How long has Bhavani Store been in business?",
    answer:
      "Bhavani Store was established in 1974, making us a 50-year-old trusted agricultural trading house in Tamil Nadu. Over five decades, we have built strong relationships with over 1,000 farmers and 500+ vendor partners across the region.",
    category: "General",
  },
  {
    question: "Is Bhavani Store a GST registered business?",
    answer:
      "Yes, Bhavani Store is a fully GST-registered business. Our GST number is 33XXXXX1234X1XX. We maintain transparent documentation for all transactions, ensuring compliance with all government regulations and giving our clients peace of mind.",
    category: "General",
  },
  {
    question: "In which areas do you operate?",
    answer:
      "Our primary base is in Paramakudi, Tamil Nadu, but we source commodities from farmers across Tamil Nadu and neighboring states. We supply to vendors, processors, and exporters throughout South India and can arrange logistics for bulk orders across the country.",
    category: "General",
  },
  // Products & Quality
  {
    question: "What varieties of paddy (rice) do you trade?",
    answer:
      "We deal in multiple premium paddy varieties including Poinni, CR (Common Rice), Samba, Mattai, and RNR. All varieties are properly dried and graded. Please contact us for current availability and pricing for specific varieties.",
    category: "Products",
  },
  {
    question: "What is the difference between Red Dry Chillies and Guntur Chillies?",
    answer:
      "Red Dry Chillies are locally sourced Teja quality chillies with vibrant color and balanced heat, ideal for domestic spice markets. Guntur Chillies (specifically Sannam 334 variety) are sourced from Guntur, Andhra Pradesh, and are internationally renowned for their superior heat and color. Guntur Chillies are typically export-grade and command premium prices.",
    category: "Products",
  },
  {
    question: "Do you provide quality certificates for your commodities?",
    answer:
      "Yes, we provide quality grading reports for all commodities. Our quality checks include moisture content analysis, purity grading, visual inspection, and where applicable, lab testing. We can provide these quality documents along with your invoice for all bulk purchases.",
    category: "Products",
  },
  {
    question: "What is the minimum order quantity for purchasing commodities?",
    answer:
      "Minimum order quantities vary by commodity. Generally, for spices like chillies it starts from 100 kg, for paddy from 500 kg, and for raw cotton from 1 candy (355 kg). For smaller quantities or samples, please contact us directly to discuss options. We accommodate both small traders and large bulk buyers.",
    category: "Products",
  },
  // Pricing & Rates
  {
    question: "How often are your daily rates updated?",
    answer:
      "Our daily market rates are updated every morning based on prevailing market conditions in major mandis (markets) across Tamil Nadu and Andhra Pradesh. Rates can change based on demand, seasonal factors, and national market trends. For the most current rates, you can check our Daily Rates page or contact us via WhatsApp for real-time pricing.",
    category: "Pricing",
  },
  {
    question: "Are the rates on your website guaranteed prices?",
    answer:
      "The rates displayed on our website are indicative market rates based on current conditions. Actual transaction prices may vary based on quantity, quality grade, delivery terms, and specific negotiation. For a confirmed price quote, please contact us directly. We believe in transparent pricing and will always provide you with the best market-aligned rates.",
    category: "Pricing",
  },
  {
    question: "Do you offer any discounts for bulk purchases?",
    answer:
      "Yes, we offer competitive pricing for bulk purchases. The larger the quantity, the better the rate we can offer. We also have special rates for regular trading partners and long-term customers. Please contact us to discuss bulk pricing tailored to your specific requirements.",
    category: "Pricing",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all standard payment methods including NEFT/RTGS bank transfers, IMPS, and cheque payments. For regular trading partners, we also offer credit terms on a case-by-case basis. All transactions are properly documented with GST invoices for your records.",
    category: "Pricing",
  },
  // Logistics & Trading
  {
    question: "Do you arrange transportation and delivery?",
    answer:
      "Yes, we can arrange transportation for bulk orders. We work with trusted logistics partners across Tamil Nadu and South India. Delivery charges depend on the quantity, commodity type, and delivery location. For local Paramakudi area, we offer free delivery above certain quantities. Please contact us for a logistics quote.",
    category: "Logistics",
  },
  {
    question: "How can farmers sell their produce through Bhavani Store?",
    answer:
      "Farmers can contact us directly via phone, WhatsApp, or by visiting our office in Paramakudi. We visit farms for quality assessment, provide fair market-linked pricing, and ensure prompt payment within agreed terms. We work with farmers on a regular basis and offer better rates than many local middlemen. Contact us to register as a supplier.",
    category: "Logistics",
  },
  {
    question: "How quickly can you process and deliver an order?",
    answer:
      "For in-stock commodities, we can process and dispatch orders within 24-48 hours. For seasonal commodities or very large quantities, lead times may vary. We maintain a well-stocked warehouse to ensure quick availability. Contact us to check current stock levels and delivery timelines for your specific requirements.",
    category: "Logistics",
  },
  // Contact & Support
  {
    question: "What are your business hours?",
    answer:
      "Our office is open Monday to Friday from 8:00 AM to 7:00 PM, and Saturday from 8:00 AM to 5:00 PM. We are closed on Sundays and major public holidays. However, our WhatsApp support is available 24/7 for urgent queries. You can always send us a message and we'll respond at the earliest opportunity.",
    category: "Contact",
  },
  {
    question: "How can I get daily rate updates on WhatsApp?",
    answer:
      "You can join our WhatsApp broadcast list by sending us a message at +91 93603 33025 requesting daily rate updates. We send morning market updates with prices for all major commodities we trade. This is a free service for our trading partners and interested buyers.",
    category: "Contact",
  },
  {
    question: "Do you export agricultural commodities internationally?",
    answer:
      "We primarily serve the domestic market and work with exporters who handle international shipments. If you are an exporter looking for premium-quality agricultural commodities, we can supply the required quantities with proper documentation. Please contact us to discuss export requirements and compliance documents needed.",
    category: "General",
  },
];
