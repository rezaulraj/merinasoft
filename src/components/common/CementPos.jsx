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
  FaIndustry,
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
      "Manage cement stock, brands, weights, categories and available quantities.",
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
    subtitle: "Explore Cement POS",
    price: 0,
    icon: FaStar,
    badge: "Get Started",
    description:
      "A simple way to experience the essential features of Cement POS.",
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
    subtitle: "For small cement shops",
    price: 5000,
    icon: FaBolt,
    description:
      "Ideal for new cement shops that need essential daily business tools.",
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
    subtitle: "For growing cement dealers",
    price: 10000,
    icon: FaShoppingBag,
    description:
      "More powerful tools for cement dealers with increasing sales and inventory.",
    features: [
      "Unlimited Products",
      "Sales & Purchase",
      "Full Inventory",
      "Brand & Weight Management",
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
      "Our complete Cement POS package for businesses that want powerful management tools.",
    features: [
      "Unlimited Products",
      "Sales & Purchase Management",
      "Advanced Inventory",
      "Brand & Weight Tracking",
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
      "Advanced tools for larger cement businesses that require greater control.",
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
    icon: FaIndustry,
    badge: "Complete",
    description:
      "A complete Cement POS solution for large depots and multi-branch organizations.",
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
  name: "Cement POS",
  heroIcon: FaIndustry,
  heroImage:
    "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=85",
  badge: "Complete Cement Business Solution",
  title: "Manage Your Cement Business",
  titleAccent: "Smarter & Faster",
  intro:
    "Cement POS helps you manage sales, inventory, brands, weights, customers, suppliers and business reports from one powerful and easy-to-use system.",
  heroPoints: ["Easy to learn and operate", "Built for cement businesses", "Fast sales and billing", "Powerful stock management"],
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
    title: "Everything Your Cement Business Needs",
    text: "Manage your day-to-day operations efficiently while keeping complete visibility over sales, customers and inventory.",
  },
  features,
  successSection: {
    eyebrow: "Built For Your Success",
    title: "Spend Less Time Managing,",
    titleAccent: "More Time Growing.",
    text: "Cement POS simplifies complicated business operations so you can focus on serving customers, increasing sales and growing your brand.",
    points: ["Easy to Learn", "Fast Daily Operations", "Accurate Business Data", "Reliable Management"],
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern cement and building materials business",
  },
  pricingSection: {
    eyebrow: "Choose Your Package",
    title: "Cement POS Pricing",
    text: "Start with the package that works for your business today and upgrade as your business grows.",
    note: "Choose confidently — you can upgrade as your business grows.",
  },
  plans,
  cta: {
    title: "Ready to Make Your Cement Business Easier?",
    text: "Choose the Cement POS package that matches your business and start building a faster, smarter and more organized operation.",
    button: "Choose Your Package",
  },
};

const CementPos = () => <ProductPage product={product} />;

export default CementPos;
