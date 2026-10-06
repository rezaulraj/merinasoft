import React from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiDatabase,
  FiEye,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiRefreshCcw,
  FiServer,
  FiShield,
  FiUser,
  FiUserCheck,
} from "react-icons/fi";
import { MdOutlineCookie } from "react-icons/md";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    icon: FiDatabase,
    content: (
      <>
        <p>
          MerinaSoft may collect information that you provide directly when
          using our website, purchasing a service, creating an account,
          contacting us, or requesting support.
        </p>

        <p>The information we may collect includes:</p>

        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or organization name</li>
          <li>Billing information</li>
          <li>Project requirements and service-related information</li>
          <li>Support messages and communication history</li>
          <li>Account information where applicable</li>
        </ul>
      </>
    ),
  },

  {
    id: "automatic-information",
    number: "02",
    title: "Information Collected Automatically",
    icon: FiEye,
    content: (
      <>
        <p>
          When you visit the MerinaSoft website, certain technical information
          may be collected automatically to help us maintain security and
          improve our services.
        </p>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Date and time of access</li>
          <li>Referral source</li>
          <li>General usage and diagnostic information</li>
        </ul>
      </>
    ),
  },

  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Your Information",
    icon: FiUserCheck,
    content: (
      <>
        <p>
          MerinaSoft uses collected information only for legitimate business and
          service-related purposes.
        </p>

        <ul>
          <li>To provide requested software products and services</li>
          <li>To process and manage customer orders</li>
          <li>To communicate regarding projects, services, and support</li>
          <li>To provide invoices, quotations, and payment information</li>
          <li>To maintain and improve our website and software</li>
          <li>To detect fraud, abuse, or security threats</li>
          <li>To respond to inquiries and customer support requests</li>
          <li>To comply with applicable legal and regulatory requirements</li>
        </ul>
      </>
    ),
  },

  {
    id: "payment-information",
    number: "04",
    title: "Payment Information",
    icon: FiShield,
    content: (
      <>
        <p>
          Payments for eligible MerinaSoft services may be processed through
          third-party payment gateway providers such as{" "}
          <strong>SSLCOMMERZ</strong>.
        </p>

        <div className="privacy-notice">
          <FiLock />

          <div>
            <strong>Your payment security matters</strong>

            <span>
              MerinaSoft does not require customers to provide sensitive
              credentials such as card PINs, banking passwords, or OTP codes
              directly to us.
            </span>
          </div>
        </div>

        <p>
          Payment information may be processed directly by the payment gateway,
          bank, card network, mobile financial service provider, or other
          authorized financial institution used to complete the transaction.
        </p>

        <p>
          We may receive transaction-related information such as payment status,
          transaction ID, amount, customer reference, and payment confirmation
          for accounting and order processing purposes.
        </p>
      </>
    ),
  },

  {
    id: "cookies",
    number: "05",
    title: "Cookies & Similar Technologies",
    icon: MdOutlineCookie,
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to provide
          essential functionality, remember preferences, understand website
          usage, and improve performance.
        </p>

        <p>Cookies may be used for purposes such as:</p>

        <ul>
          <li>Maintaining website sessions</li>
          <li>Remembering user preferences</li>
          <li>Improving website performance</li>
          <li>Understanding visitor behavior</li>
          <li>Preventing fraudulent or suspicious activity</li>
        </ul>

        <p>
          You may control or disable cookies through your browser settings.
          However, disabling certain cookies may affect some website features.
        </p>
      </>
    ),
  },

  {
    id: "sharing-information",
    number: "06",
    title: "How We Share Information",
    icon: FiGlobe,
    content: (
      <>
        <p>
          MerinaSoft does not sell or rent your personal information to third
          parties.
        </p>

        <p>We may share limited information when reasonably necessary with:</p>

        <ul>
          <li>Payment gateway providers</li>
          <li>Banks and payment processors</li>
          <li>Hosting and cloud service providers</li>
          <li>Email and communication service providers</li>
          <li>Analytics and security service providers</li>
          <li>Professional advisers when required</li>
          <li>Government or legal authorities when required by law</li>
        </ul>

        <p>
          Third-party providers may process information according to their own
          privacy policies and terms.
        </p>
      </>
    ),
  },

  {
    id: "data-security",
    number: "07",
    title: "Data Security",
    icon: FiLock,
    content: (
      <>
        <p>
          MerinaSoft takes reasonable administrative, technical, and
          organizational measures to protect personal information against
          unauthorized access, loss, misuse, alteration, or disclosure.
        </p>

        <p>Security measures may include:</p>

        <ul>
          <li>HTTPS and encrypted website connections</li>
          <li>Access control and authentication</li>
          <li>Restricted administrative access</li>
          <li>Secure hosting infrastructure</li>
          <li>Software updates and security monitoring</li>
          <li>Data backup procedures where appropriate</li>
        </ul>

        <p>
          However, no method of internet transmission or electronic storage is
          completely secure, and absolute security cannot be guaranteed.
        </p>
      </>
    ),
  },

  {
    id: "data-retention",
    number: "08",
    title: "Data Retention",
    icon: FiServer,
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary to provide our services, fulfill contractual obligations,
          maintain business records, resolve disputes, prevent fraud, and meet
          legal or accounting requirements.
        </p>

        <p>
          Information that is no longer required may be deleted, anonymized, or
          securely archived where appropriate.
        </p>
      </>
    ),
  },

  {
    id: "user-rights",
    number: "09",
    title: "Your Privacy Rights",
    icon: FiUser,
    content: (
      <>
        <p>
          Depending on applicable law and the nature of your relationship with
          MerinaSoft, you may request certain actions regarding your personal
          information.
        </p>

        <ul>
          <li>Request access to personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of eligible personal information</li>
          <li>Request information about how your data is used</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request restriction of certain processing where applicable</li>
        </ul>

        <p>
          Some information may need to be retained when required for legal,
          accounting, fraud prevention, security, or contractual purposes.
        </p>
      </>
    ),
  },

  {
    id: "third-party-links",
    number: "10",
    title: "Third-Party Links",
    icon: FiGlobe,
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms,
          payment providers, or external services.
        </p>

        <p>
          MerinaSoft is not responsible for the privacy practices, content, or
          security of independent third-party websites. We encourage users to
          review the privacy policy of any external service they use.
        </p>
      </>
    ),
  },

  {
    id: "children",
    number: "11",
    title: "Children's Privacy",
    icon: FiShield,
    content: (
      <>
        <p>
          MerinaSoft's business and software services are generally intended for
          businesses, professionals, and users who are legally capable of
          entering into agreements.
        </p>

        <p>
          We do not knowingly collect personal information from children where
          such collection is prohibited by applicable law.
        </p>

        <p>
          If you believe that a child has provided personal information to us
          without appropriate authorization, please contact us so that we can
          review the matter.
        </p>
      </>
    ),
  },

  {
    id: "international",
    number: "12",
    title: "International Data Processing",
    icon: FiGlobe,
    content: (
      <>
        <p>
          Some technology providers used by MerinaSoft, such as hosting, cloud,
          analytics, communication, or infrastructure services, may process
          information from servers located outside Bangladesh.
        </p>

        <p>
          When third-party services are used, information may therefore be
          transferred or processed according to the provider's infrastructure
          and applicable legal requirements.
        </p>
      </>
    ),
  },

  {
    id: "legal-requirements",
    number: "13",
    title: "Legal Requirements",
    icon: FiFileText,
    content: (
      <>
        <p>
          MerinaSoft may disclose information where reasonably necessary to
          comply with applicable laws, court orders, regulatory requirements,
          government requests, fraud investigations, or to protect the rights
          and security of MerinaSoft, our customers, or others.
        </p>
      </>
    ),
  },

  {
    id: "policy-updates",
    number: "14",
    title: "Changes to This Privacy Policy",
    icon: FiRefreshCcw,
    content: (
      <>
        <p>
          We may update this Privacy Policy when our business practices,
          services, technologies, or legal requirements change.
        </p>

        <p>
          Any updated version will be published on this page with a revised
          effective date.
        </p>

        <p>
          We encourage users to review this page periodically to understand how
          MerinaSoft handles personal information.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    number: "15",
    title: "Contact Us",
    icon: FiMail,
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal information, please contact MerinaSoft.
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <section className="relative overflow-hidden border-b border-slate-200 bg-transparent">
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-indigo-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-14 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#BA2988]"
          >
            <FiArrowLeft />
            Back to MerinaSoft
          </Link>

          <div className="max-w-3xl mx-auto flex flex-col items-center pb-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#BA2988]/10 px-4 py-2 text-sm font-semibold text-[#BA2988]">
              <FiShield />
              Privacy & Data Protection
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#552E86] sm:text-5xl lg:text-6xl">
              Privacy <span className="text-[#BA2988]">Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-center leading-8 text-slate-600 sm:text-lg">
              This Privacy Policy explains how MerinaSoft collects, uses,
              protects, stores, and shares information when you use our website,
              software products, and technology services.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-16">
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              On this page
            </p>

            <nav className="max-h-[70vh] space-y-1 overflow-y-auto pr-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {section.number}. {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-5">
          <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-7">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#BA2988] text-xl text-white shadow-sm">
                <FiLock />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Your privacy is important to us
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  MerinaSoft aims to collect only the information reasonably
                  necessary to provide our services, process transactions,
                  maintain security, and communicate with our customers.
                </p>
              </div>
            </div>
          </div>

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl text-[#BA2988]">
                    <Icon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-xs font-bold tracking-wider text-[#BA2988]">
                        {section.number}
                      </span>

                      <div className="h-px w-5 bg-blue-200" />
                    </div>

                    <h2 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl">
                      {section.title}
                    </h2>

                    <div
                      className="
                        space-y-4
                        text-[15px]
                        leading-7
                        text-slate-600

                        [&_strong]:font-semibold
                        [&_strong]:text-slate-800

                        [&_ul]:space-y-3
                        [&_ul]:pl-0

                        [&_li]:relative
                        [&_li]:pl-6

                        [&_li]:before:absolute
                        [&_li]:before:left-0
                        [&_li]:before:top-[11px]
                        [&_li]:before:h-1.5
                        [&_li]:before:w-1.5
                        [&_li]:before:rounded-full
                        [&_li]:before:bg-[#BA2988]
                      "
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <section className="overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                  <FiMail />
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Privacy questions?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Contact MerinaSoft if you have questions about your personal
                  information, payment information, privacy rights, or this
                  Privacy Policy.
                </p>
              </div>

              <a
                href="mailto:merinasoftteam@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
              >
                <FiMail />
                Contact Support
              </a>
            </div>
          </section>

          {/* <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                MerinaSoft Business Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Update the information below with your actual registered
                business details before publishing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <BusinessItem
                icon={<FiGlobe />}
                title="Company"
                value="MerinaSoft"
              />

              <BusinessItem
                icon={<FiMail />}
                title="Email"
                value="merinasoftteam@gmail.com"
              />

              <BusinessItem
                icon={<FiMapPin />}
                title="Registered Address"
                value="2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000"
              />

              <BusinessItem
                icon={<FiFileText />}
                title="Trade License"
                value="TRAD/DSCC/325400/2025"
              />

              <BusinessItem
                icon={<FiFileText />}
                title="TIN"
                value="822222394730"
              />

              <BusinessItem
                icon={<FiShield />}
                title="Data Controller"
                value="MerinaSoft"
              />
            </div>
          </section> */}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900">
              Related Policies
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <PolicyLink
                to="/terms-and-conditions"
                icon={<FiFileText />}
                title="Terms & Conditions"
                text="Rules for using MerinaSoft services."
              />

              <PolicyLink
                to="/refund-policy"
                icon={<FiRefreshCcw />}
                title="Refund Policy"
                text="Cancellation and refund information."
              />
            </div>
          </section>
        </div>
      </main>

      <style>{`

        .privacy-notice {
          display: flex;
          gap: 14px;
          padding: 16px;
          border: 1px solid #dbeafe;
          background: #eff6ff;
          border-radius: 14px;
          color: #2563eb;
        }

        .privacy-notice > svg {
          flex-shrink: 0;
          margin-top: 4px;
          font-size: 20px;
        }

        .privacy-notice div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .privacy-notice strong {
          color: #1e3a8a !important;
        }

        .privacy-notice span {
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

const BusinessItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
      <div className="mt-0.5 text-lg text-blue-600">{icon}</div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
};

const PolicyLink = ({ to, icon, title, text }) => {
  return (
    <Link
      to={to}
      className="group flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </Link>
  );
};

export default PrivacyPolicy;
