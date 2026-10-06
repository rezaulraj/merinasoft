import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  FaShieldAlt,
  FaLock,
  FaCreditCard,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();

  const [agreed, setAgreed] = useState(false);

  const productName = searchParams.get("product") || "Software Product";

  const rawPrice = Number(searchParams.get("price"));

  const productPrice = Number.isFinite(rawPrice) && rawPrice > 0 ? rawPrice : 0;

  const quantity = 1;

  const subtotal = productPrice * quantity;
  const total = subtotal;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-BD").format(price);
  };

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    if (!agreed) return;

    const orderData = {
      product: productName,
      price: productPrice,
      quantity,
      subtotal,
      total,
      customer,
    };

    console.log("Checkout Data:", orderData);
  };

  return (
    <div className="min-h-screen bg-transparent px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#CC2784]">
            Secure Checkout
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#572F86] md:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-2 max-w-2xl text-gray-500">
            Please review your information and accept our policies before
            payment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#CC2784]/40 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Customer Information
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Enter your billing details
                  </p>
                </div>

                <div className="rounded-xl bg-[#CC2784]/10 p-3">
                  <FaCheckCircle className="text-xl text-[#CC2784]" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#CC2784] focus:ring-2 focus:ring-[#CC2784]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="+8801XXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#CC2784] focus:ring-2 focus:ring-[#CC2784]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#CC2784] focus:ring-2 focus:ring-[#CC2784]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={customer.city}
                    onChange={handleChange}
                    placeholder="Dhaka"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#CC2784] focus:ring-2 focus:ring-[#CC2784]/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={customer.address}
                  onChange={handleChange}
                  placeholder="House, Road, Area"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#CC2784] focus:ring-2 focus:ring-[#CC2784]/10"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-[#CC2784]/40 bg-white p-6 shadow-sm">
              <div className="mb-5 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CC2784]">
                  <FaShieldAlt className="text-xl text-white" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Terms & Policy Agreement
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    You must accept these policies before placing your order.
                  </p>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-[#CC2784]/40 hover:bg-[#CC2784]/5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#CC2784]"
                />

                <span className="text-sm leading-6 text-gray-600">
                  I have read and agree to the{" "}
                  <a
                    href="/terms-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#CC2784] underline underline-offset-2"
                  >
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#CC2784] underline underline-offset-2"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/refund-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#CC2784] underline underline-offset-2"
                  >
                    Return, Refund & Cancellation Policy
                  </a>
                  .
                </span>
              </label>

              {!agreed && (
                <p className="mt-3 text-sm text-[#CC2784]">
                  Please accept the policies to continue.
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="sticky top-5 overflow-hidden rounded-2xl border border-[#CC2784]/40 bg-white shadow-sm">
              <div className="border-b border-gray-100 bg-gradient-to-r from-[#CC2784]/5 to-[#572F86]/5 p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Order Summary
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Review your selected product
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#CC2784]/10">
                    <FaCreditCard className="text-2xl text-[#CC2784]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {productName}
                    </h3>

                    <p className="mt-1 text-sm text-[#CC2784]">
                      Quantity: {quantity}
                    </p>
                  </div>

                  <strong className="shrink-0 text-gray-900">
                    ৳{formatPrice(productPrice)}
                  </strong>
                </div>

                <div className="space-y-3 border-b border-gray-100 py-5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-medium text-gray-900">
                      ৳{formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery</span>

                    <span className="font-medium text-emerald-600">Free</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-5">
                  <span className="font-semibold text-gray-900">Total</span>

                  <span className="text-2xl font-bold text-[#572F86]">
                    ৳{formatPrice(total)}
                  </span>
                </div>

                <button
                  type="button"
                  disabled={!agreed}
                  onClick={handlePayment}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold transition-all duration-300 ${
                    agreed
                      ? "cursor-pointer bg-gradient-to-r from-[#CC2784] to-[#572F86] text-white shadow-lg shadow-[#CC2784]/20 hover:opacity-90"
                      : "cursor-not-allowed bg-gray-200 text-gray-400"
                  }`}
                >
                  Proceed To Payment
                  <FaArrowRight />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <FaLock />

                  <span>Secure payment powered by SSLCOMMERZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
