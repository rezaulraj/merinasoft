import ProductPage from "../product/ProductPage";
import {
  FaBarcode,
  FaBolt,
  FaBoxes,
  FaCashRegister,
  FaChartLine,
  FaCloud,
  FaCrown,
  FaHeadset,
  FaPrescriptionBottleAlt,
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
      "Manage medicine stock, batches, categories and available quantities.",
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
    subtitle: "Explore Pharmacy POS",
    price: 0,
    icon: FaStar,
    badge: "Get Started",
    description:
      "A simple way to experience the essential features of Pharmacy POS.",
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
    subtitle: "For small pharmacies",
    price: 5000,
    icon: FaBolt,
    description:
      "Ideal for new pharmacies that need essential daily business tools.",
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
    subtitle: "For growing pharmacies",
    price: 10000,
    icon: FaShoppingBag,
    description:
      "More powerful tools for pharmacies with increasing sales and inventory.",
    features: [
      "Unlimited Products",
      "Sales & Purchase",
      "Full Inventory",
      "Batch & Expiry Management",
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
      "Our complete Pharmacy POS package for businesses that want powerful management tools.",
    features: [
      "Unlimited Products",
      "Sales & Purchase Management",
      "Advanced Inventory",
      "Batch & Expiry Tracking",
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
      "Advanced tools for larger pharmacy businesses that require greater control.",
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
    icon: FaPrescriptionBottleAlt,
    badge: "Complete",
    description:
      "A complete Pharmacy POS solution for large pharmacies and multi-branch organizations.",
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
  name: "Pharmacy POS",
  heroIcon: FaPrescriptionBottleAlt,
  heroImage:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=85",
  badge: "Complete Pharmacy Business Solution",
  title: "Manage Your Pharmacy",
  titleAccent: "Smarter & Faster",
  intro:
    "Pharmacy POS helps you manage sales, inventory, batches, expiry dates, customers, suppliers and business reports from one powerful and easy-to-use system.",
  heroPoints: ["Easy to learn and operate", "Built for pharmacy businesses", "Fast sales and billing", "Powerful stock management"],
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
    title: "Everything Your Pharmacy Needs",
    text: "Manage your day-to-day operations efficiently while keeping complete visibility over sales, customers and inventory.",
  },
  features,
  successSection: {
    eyebrow: "Built For Your Success",
    title: "Spend Less Time Managing,",
    titleAccent: "More Time Growing.",
    text: "Pharmacy POS simplifies complicated business operations so you can focus on serving customers, increasing sales and growing your brand.",
    points: ["Easy to Learn", "Fast Daily Operations", "Accurate Business Data", "Reliable Management"],
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern pharmacy business",
  },
  pricingSection: {
    eyebrow: "Choose Your Package",
    title: "Pharmacy POS Pricing",
    text: "Start with the package that works for your business today and upgrade as your business grows.",
    note: "Choose confidently — you can upgrade as your business grows.",
  },
  plans,
  cta: {
    title: "Ready to Make Your Pharmacy Easier?",
    text: "Choose the Pharmacy POS package that matches your business and start building a faster, smarter and more organized operation.",
    button: "Choose Your Package",
  },
};

const PharmacyPos = () => <ProductPage product={product} />;

export default PharmacyPos;
