import ProductPage from "../product/ProductPage";
import {
  FaBarcode,
  FaBolt,
  FaBoxes,
  FaCashRegister,
  FaChartLine,
  FaCloud,
  FaCrown,
  FaFaucet,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaShoppingBag,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaCashRegister,
    title: "Smart Sales",
    description:
      "Create invoices and complete daily sales quickly with an easy-to-use POS interface.",
  },
  {
    icon: FaBarcode,
    title: "Barcode Support",
    description:
      "Use barcode scanning to find products and complete checkout faster.",
  },
  {
    icon: FaBoxes,
    title: "Inventory Management",
    description:
      "Manage sanitary stock, brands, sizes, categories and available quantities.",
  },
  {
    icon: FaUsers,
    title: "Customer Management",
    description:
      "Save customer information and maintain complete purchase history.",
  },
  {
    icon: FaChartLine,
    title: "Business Reports",
    description:
      "Monitor sales, purchases, profit, expenses and inventory performance.",
  },
  {
    icon: FaCloud,
    title: "Cloud Ready",
    description:
      "Keep your important business information available and securely managed.",
  },
];

const plans = [
  {
    id: "free",
    name: "Free",
    subtitle: "Explore Sanitary POS",
    price: 0,
    icon: FaStar,
    badge: "Get Started",
    description:
      "A simple way to experience the essential features of Sanitary POS.",
    features: [
      "Up to 50 Products",
      "Basic Sales Management",
      "Basic Inventory",
      "1 User",
      "Basic Reports",
      "Customer Management",
    ],
    buttonText: "Start Free",
  },

  {
    id: "starter",
    name: "Starter",
    subtitle: "For small sanitary shops",
    price: 5000,
    icon: FaBolt,
    description:
      "Ideal for new sanitary shops that need essential daily business tools.",
    features: [
      "Up to 500 Products",
      "Sales Management",
      "Inventory Management",
      "Customer Management",
      "1 User",
      "Sales Reports",
      "Barcode Support",
    ],
    buttonText: "Choose Starter",
  },

  {
    id: "basic",
    name: "Basic",
    subtitle: "For growing sanitary dealers",
    price: 10000,
    icon: FaShoppingBag,
    description:
      "More powerful tools for sanitary dealers with increasing sales and inventory.",
    features: [
      "Unlimited Products",
      "Sales & Purchase",
      "Full Inventory",
      "Brand & Size Management",
      "Customer Management",
      "Up to 2 Users",
      "Advanced Reports",
      "Barcode Support",
    ],
    buttonText: "Choose Basic",
  },

  {
    id: "plus",
    name: "Plus",
    subtitle: "Best for most businesses",
    price: 15000,
    icon: FaRocket,
    popular: true,
    badge: "Most Popular",
    description:
      "Our complete Sanitary POS package for businesses that want powerful management tools.",
    features: [
      "Unlimited Products",
      "Sales & Purchase Management",
      "Advanced Inventory",
      "Brand & Size Variants",
      "Customer Management",
      "Supplier Management",
      "Barcode Support",
      "Advanced Reports",
      "Up to 3 Users",
      "Cloud Backup",
    ],
    buttonText: "Get Plus",
  },

  {
    id: "premium",
    name: "Premium",
    subtitle: "For established businesses",
    price: 25000,
    icon: FaCrown,
    badge: "Advanced",
    description:
      "Advanced tools for larger sanitary businesses that require greater control.",
    features: [
      "Everything in Plus",
      "Multiple Users",
      "Multi-Branch Management",
      "Advanced Analytics",
      "Expense Management",
      "Role & Permissions",
      "Advanced Stock Reports",
      "Cloud Backup",
      "Priority Support",
    ],
    buttonText: "Go Premium",
  },

  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For large organizations",
    price: 40000,
    icon: FaFaucet,
    badge: "Complete",
    description:
      "A complete Sanitary POS solution for large showrooms and multi-branch organizations.",
    features: [
      "Everything in Premium",
      "Unlimited Products",
      "Unlimited Users",
      "Multiple Branches",
      "Custom User Roles",
      "Advanced Analytics",
      "Business Dashboard",
      "API Integration",
      "Custom Features",
      "Dedicated Support",
    ],
    buttonText: "Choose Enterprise",
  },
];

const product = {
  name: "Sanitary POS",
  heroIcon: FaFaucet,
  heroImage:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85",
  badge: "Complete Sanitary Business Solution",
  title: "Manage Your Sanitary Business",
  titleAccent: "Smarter & Faster",
  intro:
    "Sanitary POS helps you manage sales, inventory, brands, sizes, customers, suppliers and business reports from one powerful and easy-to-use system.",
  heroPoints: ["Easy to learn and operate", "Built for sanitary businesses", "Fast sales and billing", "Powerful stock management"],
  trust: [
    { icon: FaShieldAlt, label: "Reliable POS Solution" },
    { icon: FaHeadset, label: "Business Support" },
    { icon: FaCloud, label: "Cloud Ready" },
  ],
  highlights: [
    { icon: FaCashRegister, title: "Fast Billing" },
    { icon: FaBoxes, title: "Stock Control" },
    { icon: FaChartLine, title: "Business Reports" },
    { icon: FaShieldAlt, title: "Secure System" },
  ],
  featuresSection: {
    eyebrow: "Powerful Features",
    title: "Everything Your Sanitary Business Needs",
    text: "Manage your day-to-day operations efficiently while keeping complete visibility over sales, customers and inventory.",
  },
  features,
  successSection: {
    eyebrow: "Built For Your Success",
    title: "Spend Less Time Managing,",
    titleAccent: "More Time Growing.",
    text: "Sanitary POS simplifies complicated business operations so you can focus on serving customers, increasing sales and growing your brand.",
    points: ["Easy to Learn", "Fast Daily Operations", "Accurate Business Data", "Reliable Management"],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern sanitary and bathroom fittings business",
  },
  pricingSection: {
    eyebrow: "Choose Your Package",
    title: "Sanitary POS Pricing",
    text: "Start with the package that works for your business today and upgrade as your business grows.",
    note: "Choose confidently — you can upgrade as your business grows.",
  },
  plans,
  cta: {
    title: "Ready to Make Your Sanitary Business Easier?",
    text: "Choose the Sanitary POS package that matches your business and start building a faster, smarter and more organized operation.",
    button: "Choose Your Package",
  },
};

const SanitaryPos = () => <ProductPage product={product} />;

export default SanitaryPos;
