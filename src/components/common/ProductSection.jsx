import React from "react";
import {
  FaTshirt,
  FaStore,
  FaPrescriptionBottleAlt,
  FaIndustry,
  FaBath,
  FaShoppingCart,
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Clothing POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaTshirt,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    description:
      "Complete POS solution for fashion, clothing and apparel businesses.",
    features: [
      "Inventory Management",
      "Sales & Purchase",
      "Customer Management",
    ],
  },
  {
    id: 2,
    name: "Supershop POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaStore,
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    description:
      "Smart and powerful POS software designed for supermarkets and supershops.",
    features: ["Barcode Support", "Stock Management", "Sales Reports"],
  },
  {
    id: 3,
    name: "Pharmacy POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaPrescriptionBottleAlt,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    description:
      "Easy-to-use pharmacy POS for medicine sales and stock management.",
    features: ["Medicine Inventory", "Expiry Tracking", "Sales Management"],
  },
  {
    id: 4,
    name: "Cement POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaIndustry,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    description:
      "Manage cement, building materials, suppliers and daily sales easily.",
    features: [
      "Product Inventory",
      "Supplier Management",
      "Sales & Due Tracking",
    ],
  },
  {
    id: 5,
    name: "Sanitary POS",
    category: "Point of Sale",
    price: 15000,
    icon: FaBath,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    description:
      "Modern POS solution for sanitary, tiles and bathroom product businesses.",
    features: ["Stock Management", "Customer Accounts", "Invoice & Reports"],
  },
  {
    id: 6,
    name: "E-Commerce",
    category: "Online Business",
    price: 20000,
    icon: FaShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    description:
      "Launch your professional online store with a modern e-commerce solution.",
    features: ["Online Store", "Order Management", "Payment Integration"],
  },
  {
    id: 7,
    name: "LMS",
    category: "Learning Management",
    price: 30000,
    icon: FaGraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    description:
      "Complete learning management system for courses, students and instructors.",
    features: ["Course Management", "Student Dashboard", "Online Learning"],
  },
];

const ProductSection = () => {
  const formatPrice = (price) => new Intl.NumberFormat("en-BD").format(price);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#BA2988]/10 px-4 py-2 text-sm font-semibold text-[#BA2988]">
            Our Products
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Software Solutions for
            <span className="text-[#BA2988]"> Your Business</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Powerful and easy-to-use software solutions designed to simplify
            your business operations and help you grow faster.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                    {product.category}
                  </span>

                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BA2988] text-xl text-white shadow-lg">
                    <Icon />
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-[#BA2988]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                        One Time Payment
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-2xl font-bold text-[#BA2988]">
                        ৳{formatPrice(product.price)}
                      </p>
                    </div>
                  </div>

                  <p className="min-h-[52px] text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>

                  <div className="my-5 space-y-2.5 border-y border-slate-100 py-5">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <FaCheckCircle className="shrink-0 text-[#BA2988]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`/checkout?product=${encodeURIComponent(
                      product.name,
                    )}&price=${product.price}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#CC2784] to-[#572F86] px-5 py-3.5 font-semibold text-white"
                  >
                    Checkout
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Need a customized solution? Contact us for custom software
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
