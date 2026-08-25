import React from "react";
import { FaCertificate } from "react-icons/fa";

const TradeLicenseSection = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
              <FaCertificate className="text-xl text-emerald-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Trade License
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Official business registration information
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-600">Trade License Number</p>

            <p className="mt-1 text-lg font-bold text-gray-900">TL-XXXXXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseSection;
