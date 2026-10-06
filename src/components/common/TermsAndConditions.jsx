import React from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiCreditCard,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiLock,
  FiMail,
  FiMapPin,
  FiRefreshCcw,
  FiServer,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";
import { HiOutlineScale } from "react-icons/hi";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FiUserCheck,
    content: (
      <>
        <p>
          By accessing, browsing, purchasing, or using any product or service
          provided by <strong>MerinaSoft</strong>, you acknowledge that you have
          read, understood, and agreed to these Terms & Conditions.
        </p>

        <p>
          If you do not agree with these terms, please discontinue the use of
          our website and services.
        </p>
      </>
    ),
  },

  {
    id: "services",
    number: "02",
    title: "Our Services",
    icon: FiServer,
    content: (
      <>
        <p>
          MerinaSoft is a software and technology company providing digital
          services that may include:
        </p>

        <ul>
          <li>Custom software development</li>
          <li>Website and web application development</li>
          <li>Mobile application development</li>
          <li>Software maintenance and technical support</li>
          <li>UI/UX design and related digital services</li>
          <li>Cloud, API, integration, and automation solutions</li>
          <li>Software subscriptions and digital products</li>
        </ul>

        <p>
          The exact scope, features, timeline, and price of a service may be
          defined separately in a quotation, invoice, proposal, agreement, or
          order confirmation.
        </p>
      </>
    ),
  },

  {
    id: "pricing",
    number: "03",
    title: "Pricing & Orders",
    icon: FiFileText,
    content: (
      <>
        <p>
          Prices for our services may vary depending on project requirements,
          complexity, development time, features, integrations, support level,
          and other requirements.
        </p>

        <p>
          Before making a payment, customers should review the applicable
          quotation, invoice, subscription details, or service description.
        </p>

        <p>
          MerinaSoft reserves the right to change the pricing of future
          services. A pricing change will not normally affect a payment or
          service already confirmed under an existing agreement.
        </p>
      </>
    ),
  },

  {
    id: "payments",
    number: "04",
    title: "Payments",
    icon: FiCreditCard,
    content: (
      <>
        <p>
          Payments for eligible MerinaSoft products and services may be
          processed through <strong>SSLCOMMERZ</strong> and its supported
          payment channels.
        </p>

        <p>
          Depending on availability, customers may be able to pay using
          supported cards, mobile financial services, internet banking, and
          other payment methods offered through the payment gateway.
        </p>

        <div className="notice">
          <FiShield />
          <div>
            <strong>Secure payment processing</strong>
            <span>
              Payment credentials are processed through the applicable payment
              gateway. MerinaSoft does not require customers to send card PINs,
              OTPs, or similar confidential payment credentials directly to us.
            </span>
          </div>
        </div>
      </>
    ),
  },

  {
    id: "delivery",
    number: "05",
    title: "Service & Digital Delivery",
    icon: FiGlobe,
    content: (
      <>
        <p>
          MerinaSoft mainly provides digital products and technology services.
          Delivery may therefore take place electronically rather than through
          physical shipment.
        </p>

        <ul>
          <li>
            Ready digital products may be delivered immediately or within
            <strong> 1–3 working days</strong> after successful payment.
          </li>

          <li>
            Custom software projects will be delivered according to the timeline
            specified in the relevant quotation, proposal, or project agreement.
          </li>

          <li>
            Account activation or subscription services may normally be
            activated within <strong>1–3 working days</strong>.
          </li>

          <li>
            Delivery timelines may change when additional information, approval,
            content, credentials, or feedback is required from the customer.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "refund",
    number: "06",
    title: "Cancellation & Refunds",
    icon: FiRefreshCcw,
    content: (
      <>
        <p>
          Refund eligibility depends on the type of product or service purchased
          and the amount of work already completed.
        </p>

        <ul>
          <li>
            A cancellation request should be submitted as soon as possible after
            placing an order.
          </li>

          <li>
            If development or service delivery has already started, any refund
            may be reduced according to the work already completed and costs
            incurred.
          </li>

          <li>
            Completed custom software, completed development work, activated
            licenses, downloaded digital products, and consumed services may not
            be refundable unless otherwise agreed in writing.
          </li>

          <li>
            Duplicate or accidental eligible payments will be reviewed after
            verification.
          </li>

          <li>
            When a refund is approved, the refund process may require
            approximately <strong>7–10 working days</strong>, depending on the
            payment method, bank, and payment gateway processing.
          </li>
        </ul>

        <p>
          Please review our dedicated{" "}
          <Link to="/refund-policy" className="inlineLink">
            Return & Refund Policy
          </Link>{" "}
          for additional information.
        </p>
      </>
    ),
  },

  {
    id: "responsibilities",
    number: "07",
    title: "Customer Responsibilities",
    icon: FiCheckCircle,
    content: (
      <>
        <p>Customers are responsible for providing accurate information and:</p>

        <ul>
          <li>Providing complete and accurate project requirements.</li>
          <li>Providing required content and approvals on time.</li>
          <li>Using our software and services only for lawful purposes.</li>
          <li>Keeping login credentials and account information secure.</li>
          <li>
            Ensuring they have permission to provide any content, data,
            trademark, image, or other material supplied to MerinaSoft.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "intellectual-property",
    number: "08",
    title: "Intellectual Property",
    icon: FiLock,
    content: (
      <>
        <p>
          Unless otherwise stated in a written agreement, MerinaSoft retains
          ownership of its pre-existing intellectual property, development
          tools, reusable components, libraries, frameworks, processes, and
          internal technology.
        </p>

        <p>
          Ownership or licensing rights for custom deliverables will be
          determined by the applicable project agreement, proposal, invoice, or
          licensing terms.
        </p>

        <p>
          Customers may not copy, resell, reverse engineer, redistribute, or
          commercially exploit MerinaSoft-owned software except where expressly
          permitted.
        </p>
      </>
    ),
  },

  {
    id: "third-party",
    number: "09",
    title: "Third-Party Services",
    icon: FiGlobe,
    content: (
      <>
        <p>
          Some MerinaSoft solutions may depend on third-party platforms such as
          payment gateways, hosting providers, cloud services, APIs, domain
          providers, messaging services, or external software.
        </p>

        <p>
          Those third-party services may operate under their own terms, privacy
          policies, pricing, uptime commitments, and limitations. MerinaSoft is
          not responsible for disruptions caused solely by an independent
          third-party provider outside our reasonable control.
        </p>
      </>
    ),
  },

  {
    id: "security",
    number: "10",
    title: "Security & Privacy",
    icon: FiShield,
    content: (
      <>
        <p>
          We take reasonable measures to protect information handled through our
          systems. However, no online service or electronic storage system can
          guarantee absolute security.
        </p>

        <p>
          Information collected through our website and services is handled in
          accordance with our{" "}
          <Link to="/privacy-policy" className="inlineLink">
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },

  {
    id: "availability",
    number: "11",
    title: "Service Availability",
    icon: FiServer,
    content: (
      <>
        <p>
          We aim to provide reliable services, but temporary interruptions may
          occur because of maintenance, upgrades, infrastructure issues,
          third-party outages, security events, or circumstances beyond our
          reasonable control.
        </p>

        <p>
          Where practical, MerinaSoft will work to restore affected services
          within a reasonable period.
        </p>
      </>
    ),
  },

  {
    id: "limitation",
    number: "12",
    title: "Limitation of Liability",
    icon: HiOutlineScale,
    content: (
      <>
        <p>
          To the extent permitted by applicable law, MerinaSoft will not be
          responsible for indirect, incidental, special, or consequential losses
          resulting from use of our website, software, or services.
        </p>

        <p>
          Any liability relating to a particular paid service will be subject to
          the applicable contract, proposal, invoice, and the laws governing
          that transaction.
        </p>
      </>
    ),
  },

  {
    id: "termination",
    number: "13",
    title: "Suspension & Termination",
    icon: FiUserCheck,
    content: (
      <>
        <p>
          MerinaSoft may restrict or terminate access to services when a user
          violates these terms, fails to make an agreed payment, abuses a
          service, attempts unauthorized access, engages in fraudulent activity,
          or uses our services unlawfully.
        </p>
      </>
    ),
  },

  {
    id: "law",
    number: "14",
    title: "Governing Law",
    icon: HiOutlineScale,
    content: (
      <>
        <p>
          These Terms & Conditions are governed by the applicable laws of
          <strong> Bangladesh</strong>.
        </p>

        <p>
          Any dispute should first be addressed through reasonable communication
          between the customer and MerinaSoft before other legal remedies are
          pursued.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    number: "15",
    title: "Changes to These Terms",
    icon: FiRefreshCcw,
    content: (
      <>
        <p>
          MerinaSoft may update these Terms & Conditions when our services,
          business practices, or applicable requirements change.
        </p>

        <p>
          The latest version will be published on this page together with its
          effective date. Continued use of our services after an update means
          the revised terms will apply from their effective date.
        </p>
      </>
    ),
  },
];

const TermsAndConditions = () => {
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
            <div className="mb-5 flex w-fit items-center  gap-2 rounded-full border border-blue-100 bg-[#BA2988]/10 px-4 py-2 text-sm font-semibold text-[#BA2988]">
              <FiShield />
              Legal & Compliance
            </div>

            <h1 className="text-4xl font-bold text-center tracking-tight text-[#552E86] sm:text-5xl lg:text-6xl">
              Terms & <span className="text-[#BA2988]">Conditions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-center leading-8 text-slate-600 sm:text-lg">
              These terms explain the rules and conditions that apply when using
              MerinaSoft's website, software products, subscriptions,
              development services, and related technology solutions.
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
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-blue-50 hover:text-[#BA2988]"
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
                <FiFileText />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Please read these terms carefully
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  These Terms & Conditions form part of the agreement between
                  you and MerinaSoft when you access our website or purchase and
                  use our services.
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
                  <FiHelpCircle />
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Have questions about these terms?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  If you have questions about payments, service delivery,
                  cancellations, refunds, or these Terms & Conditions, contact
                  the MerinaSoft team.
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
            <h2 className="text-lg font-bold text-slate-900">
              MerinaSoft Business Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                icon={<FiCreditCard />}
                title="Payment"
                value="Online payment supported"
              />
            </div>
          </section> */}
        </div>
      </main>

      <style>{`

        .inlineLink {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }

        .inlineLink:hover {
          text-decoration: underline;
        }

        .notice {
          display: flex;
          gap: 14px;
          padding: 16px;
          border: 1px solid #dbeafe;
          background: #eff6ff;
          border-radius: 14px;
          color: #2563eb;
        }

        .notice > svg {
          flex-shrink: 0;
          margin-top: 4px;
          font-size: 20px;
        }

        .notice div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .notice strong {
          color: #1e3a8a !important;
        }

        .notice span {
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

export default TermsAndConditions;
