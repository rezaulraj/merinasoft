import ProductPage from "../product/ProductPage";
import {
  FaBolt,
  FaBookOpen,
  FaCertificate,
  FaChalkboardTeacher,
  FaChartLine,
  FaCloud,
  FaCrown,
  FaGraduationCap,
  FaHeadset,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";

const features = [
  {
    icon: FaBookOpen,
    title: "Course Management",
    description:
      "Create and organize courses, modules, lessons and learning materials in one place.",
  },
  {
    icon: FaVideo,
    title: "Live & Recorded Classes",
    description:
      "Host live classes or upload recorded video lessons for students to learn anytime.",
  },
  {
    icon: FaCertificate,
    title: "Quizzes & Certificates",
    description:
      "Assess learning with quizzes and assignments, then issue certificates on completion.",
  },
  {
    icon: FaUserGraduate,
    title: "Student Management",
    description:
      "Track enrollments, attendance, progress and complete student history.",
  },
  {
    icon: FaChartLine,
    title: "Performance Reports",
    description:
      "Monitor course performance, student progress, revenue and engagement.",
  },
  {
    icon: FaCloud,
    title: "Cloud Ready",
    description:
      "Keep your courses and student data available and securely managed.",
  },
];

const plans = [
  {
    id: "free",
    name: "Free",
    subtitle: "Explore LMS Services",
    price: 0,
    icon: FaStar,
    badge: "Get Started",
    description:
      "A simple way to experience the essential features of our LMS platform.",
    features: [
      "Up to 20 Students",
      "Basic Course Management",
      "1 Instructor",
      "Basic Reports",
      "Assignment Management",
      "Community Support",
    ],
    buttonText: "Start Free",
  },

  {
    id: "starter",
    name: "Starter",
    subtitle: "For small institutes",
    price: 5000,
    icon: FaBolt,
    description:
      "Ideal for new institutes and trainers that need essential teaching tools.",
    features: [
      "Up to 200 Students",
      "Course Management",
      "Live Class Support",
      "Certificate Generation",
      "1 Instructor",
      "Performance Reports",
    ],
    buttonText: "Choose Starter",
  },

  {
    id: "basic",
    name: "Basic",
    subtitle: "For growing institutes",
    price: 10000,
    icon: FaChalkboardTeacher,
    description:
      "More powerful tools for institutes with a growing number of courses and students.",
    features: [
      "Unlimited Courses",
      "Student & Instructor Management",
      "Quizzes & Assignments",
      "Certificate Generation",
      "Video Hosting",
      "Up to 2 Instructors",
      "Advanced Reports",
    ],
    buttonText: "Choose Basic",
  },

  {
    id: "plus",
    name: "Plus",
    subtitle: "Best for most institutes",
    price: 15000,
    icon: FaRocket,
    popular: true,
    badge: "Most Popular",
    description:
      "Our complete LMS package for institutes that want powerful teaching and management tools.",
    features: [
      "Unlimited Courses",
      "Live & Recorded Classes",
      "Quizzes & Assignments",
      "Certificate Generation",
      "Student Management",
      "Discussion Forums",
      "Advanced Reports",
      "Up to 3 Instructors",
      "Cloud Backup",
    ],
    buttonText: "Get Plus",
  },

  {
    id: "premium",
    name: "Premium",
    subtitle: "For established institutes",
    price: 25000,
    icon: FaCrown,
    badge: "Advanced",
    description:
      "Advanced tools for larger institutes that require greater control over courses and staff.",
    features: [
      "Everything in Plus",
      "Multiple Instructors",
      "Multi-Campus Management",
      "Advanced Analytics",
      "Payment & Fee Management",
      "Role & Permissions",
      "Advanced Progress Reports",
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
    icon: FaGraduationCap,
    badge: "Complete",
    description:
      "A complete LMS solution for large institutes and multi-campus organizations.",
    features: [
      "Everything in Premium",
      "Unlimited Courses",
      "Unlimited Students",
      "Unlimited Instructors",
      "Multiple Campuses",
      "Custom User Roles",
      "Advanced Analytics",
      "Business Dashboard",
      "API Integration",
      "Dedicated Support",
    ],
    buttonText: "Choose Enterprise",
  },
];

const product = {
  name: "LMS Services",
  heroIcon: FaGraduationCap,
  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
  badge: "Complete Learning Management Solution",
  title: "Run Your Institute",
  titleAccent: "Smarter & Faster",
  intro:
    "LMS Services helps you manage courses, live classes, students, instructors, quizzes, certificates and performance reports from one powerful and easy-to-use platform.",
  heroPoints: ["Easy to learn and operate", "Built for institutes & trainers", "Live and recorded classes", "Powerful student management"],
  trust: [
    { icon: FaShieldAlt, label: "Reliable LMS Platform" },
    { icon: FaHeadset, label: "Business Support" },
    { icon: FaCloud, label: "Cloud Ready" },
  ],
  highlights: [
    { icon: FaVideo, title: "Live Classes" },
    { icon: FaBookOpen, title: "Course Library" },
    { icon: FaChartLine, title: "Progress Reports" },
    { icon: FaShieldAlt, title: "Secure Platform" },
  ],
  featuresSection: {
    eyebrow: "Powerful Features",
    title: "Everything Your Institute Needs",
    text: "Manage your day-to-day teaching operations efficiently while keeping complete visibility over courses, students and performance.",
  },
  features,
  successSection: {
    eyebrow: "Built For Your Success",
    title: "Spend Less Time Managing,",
    titleAccent: "More Time Teaching.",
    text: "LMS Services simplifies complicated teaching operations so you can focus on delivering great courses, engaging students and growing your institute.",
    points: ["Easy to Learn", "Fast Course Setup", "Accurate Student Data", "Reliable Management"],
    image:
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Modern online learning and education business",
  },
  pricingSection: {
    eyebrow: "Choose Your Package",
    title: "LMS Services Pricing",
    text: "Start with the package that works for your institute today and upgrade as you grow.",
    note: "Choose confidently — you can upgrade as your institute grows.",
  },
  plans,
  cta: {
    title: "Ready to Make Your Teaching Easier?",
    text: "Choose the LMS Services package that matches your institute and start building a faster, smarter and more organized way to teach.",
    button: "Choose Your Package",
  },
};

const LmsServices = () => <ProductPage product={product} />;

export default LmsServices;
