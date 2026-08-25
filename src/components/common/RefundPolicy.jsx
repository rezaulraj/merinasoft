import React from "react";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiLock,
  FiMail,
  FiMapPin,
  FiRefreshCcw,
  FiRotateCcw,
  FiServer,
  FiShield,
  FiXCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "overview",
    number: "01",
    title: "Refund Policy Overview",
    icon: FiRefreshCcw,
    content: (
      <>
        <p>
          At <strong>MerinaSoft</strong>, we aim to provide reliable software,
          digital products, subscriptions, and technology services.
        </p>

        <p>
          This Refund Policy explains when a customer may be eligible for a
          refund, how refund requests are reviewed, and how approved refunds are
          processed.
        </p>

        <p>
          Because many of our services involve custom development, digital
          delivery, subscriptions, licenses, or professional services, refund
          eligibility may depend on the type of service purchased and the amount
          of work already completed.
        </p>
      </>
    ),
  },

  {
    id: "eligibility",
    number: "02",
    title: "Refund Eligibility",
    icon: FiCheckCircle,
    content: (
      <>
        <p>
          A customer may be eligible for a full or partial refund in situations
          such as:
        </p>

        <ul>
          <li>
            A duplicate payment was accidentally made for the same order or
            service.
          </li>

          <li>
            Payment was successfully completed but the requested service could
            not be provided by MerinaSoft.
          </li>

          <li>
            An order was cancelled before development or service delivery
            started.
          </li>

          <li>
            A technical issue caused an incorrect payment amount to be charged.
          </li>

          <li>
            MerinaSoft and the customer mutually agree that a refund is
            appropriate.
          </li>

          <li>
            A refund is required under the applicable service agreement or
            applicable law.
          </li>
        </ul>

        <p>
          Every refund request may be reviewed individually before approval.
        </p>
      </>
    ),
  },

  {
    id: "non-refundable",
    number: "03",
    title: "Non-Refundable Services",
    icon: FiXCircle,
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, a refund may not be available
          when:
        </p>

        <ul>
          <li>
            Custom software development work has already been completed and
            delivered.
          </li>

          <li>
            A digital product has already been downloaded, accessed, or
            activated.
          </li>

          <li>
            A software license, subscription, hosting service, domain, API, or
            third-party service has already been activated or purchased on
            behalf of the customer.
          </li>

          <li>
            Work was completed according to the requirements approved by the
            customer.
          </li>

          <li>
            The customer changes their requirements after development has
            started.
          </li>

          <li>
            Delays are caused by the customer failing to provide required
            information, content, credentials, approval, or feedback.
          </li>

          <li>The service has already been substantially consumed or used.</li>
        </ul>
      </>
    ),
  },

  {
    id: "custom-development",
    number: "04",
    title: "Custom Software Development",
    icon: FiServer,
    content: (
      <>
        <p>
          Custom software projects require development time, technical
          resources, planning, design, testing, and other professional work.
        </p>

        <p>
          If a customer cancels a project after work has started, MerinaSoft may
          deduct charges for completed work, allocated resources, third-party
          expenses, and other costs already incurred.
        </p>

        <div className="refund-notice">
          <FiAlertCircle />

          <div>
            <strong>Custom project refunds</strong>

            <span>
              Any refundable amount for an ongoing custom project will normally
              be calculated based on the unpaid or unused portion of the service
              after completed work and applicable costs are deducted.
            </span>
          </div>
        </div>
      </>
    ),
  },

  {
    id: "subscriptions",
    number: "05",
    title: "Subscriptions & Recurring Services",
    icon: FiRotateCcw,
    content: (
      <>
        <p>
          Some MerinaSoft products or services may operate on a monthly, yearly,
          or other subscription basis.
        </p>

        <ul>
          <li>
            Customers may request cancellation of future subscription renewals.
          </li>

          <li>
            Cancellation normally prevents future billing but does not
            automatically generate a refund for a billing period that has
            already started.
          </li>

          <li>
            If an incorrect or duplicate recurring payment occurs, customers
            should contact us for review.
          </li>

          <li>
            Any special subscription refund rights described in a separate
            service agreement will take priority where applicable.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "duplicate-payment",
    number: "06",
    title: "Duplicate or Incorrect Payments",
    icon: FiCreditCard,
    content: (
      <>
        <p>
          If you believe that you were charged more than once for the same
          transaction or that an incorrect amount was charged, contact
          MerinaSoft as soon as possible.
        </p>

        <p>We may request information such as:</p>

        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Invoice or order number</li>
          <li>Transaction ID</li>
          <li>Payment date</li>
          <li>Payment amount</li>
          <li>Payment method</li>
        </ul>

        <p>
          After verification, an eligible duplicate or incorrect payment may be
          refunded.
        </p>
      </>
    ),
  },

  {
    id: "failed-payment",
    number: "07",
    title: "Failed or Interrupted Transactions",
    icon: FiAlertCircle,
    content: (
      <>
        <p>
          Sometimes a payment may appear unsuccessful on the website while the
          customer's bank or payment provider temporarily shows the amount as
          deducted.
        </p>

        <p>
          In such cases, customers should not immediately make repeated payments
          without checking the transaction status.
        </p>

        <p>
          MerinaSoft may verify the transaction using the payment gateway
          transaction information before determining whether another payment or
          refund action is required.
        </p>
      </>
    ),
  },

  {
    id: "request-refund",
    number: "08",
    title: "How to Request a Refund",
    icon: FiMail,
    content: (
      <>
        <p>
          To request a refund, contact MerinaSoft through our official support
          email or Contact Us page.
        </p>

        <p>Please provide:</p>

        <ul>
          <li>Your full name</li>
          <li>Your email address</li>
          <li>Order, invoice, or project reference number</li>
          <li>Payment transaction ID where available</li>
          <li>Amount paid</li>
          <li>Date of payment</li>
          <li>Reason for requesting the refund</li>
          <li>Any relevant supporting information</li>
        </ul>

        <p>
          Providing complete information helps us review the request more
          efficiently.
        </p>
      </>
    ),
  },

  {
    id: "review",
    number: "09",
    title: "Refund Review Process",
    icon: FiFileText,
    content: (
      <>
        <p>
          Once a refund request is received, MerinaSoft may verify the order,
          transaction, service status, development progress, and applicable
          agreement.
        </p>

        <p>The review process may include:</p>

        <ul>
          <li>Confirming the original transaction</li>
          <li>Checking whether the payment was successfully received</li>
          <li>Reviewing the service or project delivery status</li>
          <li>Checking any work already completed</li>
          <li>Reviewing third-party costs already incurred</li>
          <li>Determining whether a full or partial refund applies</li>
        </ul>

        <p>
          We may contact the customer if additional information is required.
        </p>
      </>
    ),
  },

  {
    id: "timeline",
    number: "10",
    title: "Refund Processing Timeline",
    icon: FiClock,
    content: (
      <>
        <p>
          Once a refund request has been reviewed and approved, MerinaSoft will
          initiate the applicable refund process.
        </p>

        <div className="timeline-box">
          <div className="timeline-icon">
            <FiClock />
          </div>

          <div>
            <span>Standard Refund Timeline</span>

            <strong>7–10 Working Days</strong>

            <p>
              Approved refunds may require approximately 7–10 working days to
              complete, depending on the payment method, payment gateway, bank,
              card issuer, or financial service provider.
            </p>
          </div>
        </div>

        <p>
          Processing times may vary where additional verification is required or
          where the customer's bank or payment provider requires additional
          processing time.
        </p>
      </>
    ),
  },

  {
    id: "refund-method",
    number: "11",
    title: "Refund Method",
    icon: FiCreditCard,
    content: (
      <>
        <p>
          Where reasonably possible, an approved refund will normally be
          returned through the original payment method used for the transaction.
        </p>

        <p>
          Refund processing may involve the relevant payment gateway, bank, card
          issuer, mobile financial service, or other financial institution.
        </p>

        <p>
          MerinaSoft may request additional verification before processing a
          refund when necessary to protect customers and prevent fraudulent
          refund requests.
        </p>
      </>
    ),
  },

  {
    id: "sslcommerz",
    number: "12",
    title: "Payments Through SSLCOMMERZ",
    icon: FiShield,
    content: (
      <>
        <p>
          Payments made through <strong>SSLCOMMERZ</strong> may be refunded
          through the appropriate merchant refund process when a refund is
          approved.
        </p>

        <p>
          The time required for the refunded amount to appear in the customer's
          account may also depend on SSLCOMMERZ, the issuing bank, card network,
          mobile financial service, or other payment provider.
        </p>

        <div className="refund-notice">
          <FiLock />

          <div>
            <strong>Never share sensitive credentials</strong>

            <span>
              MerinaSoft will never require you to send your card PIN, online
              banking password, or payment OTP by email in order to receive a
              refund.
            </span>
          </div>
        </div>
      </>
    ),
  },

  {
    id: "third-party",
    number: "13",
    title: "Third-Party Charges",
    icon: FiGlobe,
    content: (
      <>
        <p>
          Certain MerinaSoft services may require third-party purchases such as
          hosting, domains, cloud services, software licenses, paid APIs,
          templates, plugins, or other external services.
        </p>

        <p>
          If those third-party expenses have already been paid and are
          non-refundable to MerinaSoft, the corresponding amount may be deducted
          from any refund available to the customer.
        </p>
      </>
    ),
  },

  {
    id: "chargebacks",
    number: "14",
    title: "Payment Disputes & Chargebacks",
    icon: FiShield,
    content: (
      <>
        <p>
          If you believe there is a problem with a payment, we encourage you to
          contact MerinaSoft first so that we can investigate the transaction
          and attempt to resolve the issue.
        </p>

        <p>
          Fraudulent, unauthorized, or abusive refund and chargeback requests
          may be investigated and supported with transaction, invoice, service,
          account, and delivery records where appropriate.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    number: "15",
    title: "Changes to This Refund Policy",
    icon: FiRefreshCcw,
    content: (
      <>
        <p>
          MerinaSoft may update this Refund Policy to reflect changes in our
          services, payment arrangements, business practices, or applicable
          requirements.
        </p>

        <p>
          The updated policy will be published on this page together with its
          effective date.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    number: "16",
    title: "Contact Us",
    icon: FiHelpCircle,
    content: (
      <>
        <p>
          If you have questions about a payment, cancellation, refund, or the
          status of a refund request, please contact the MerinaSoft support
          team.
        </p>
      </>
    ),
  },
];

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
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
              <FiRefreshCcw />
              Cancellation & Refund
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Refund <span className="text-[#BA2988]">Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              This Refund Policy explains MerinaSoft's cancellation, refund,
              duplicate payment, digital service, and refund processing
              procedures.
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
                <FiRefreshCcw />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Simple and transparent refund process
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  If you believe you are eligible for a refund, contact us with
                  your order and transaction information. We will review the
                  request and notify you about the applicable refund.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
                <FiClock />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Refund Processing
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  7–10 Working Days
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Once an eligible refund has been approved and initiated,
                  processing may require approximately 7–10 working days,
                  depending on the applicable payment provider.
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
                        [&_li]:before:bg-blue-500
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
                  Need help with a refund?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Send us your transaction ID, order or invoice number, payment
                  amount, payment date, and the reason for your refund request.
                </p>
              </div>

              <a
                href="mailto:merinasoftteam@gmail.com?subject=Refund Request"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
              >
                <FiMail />
                Request a Refund
              </a>
            </div>
          </section>

          {/* <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                MerinaSoft Business Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Replace the information below with your actual registered
                business information before publishing.
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
                title="Refund Email"
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
                title="Payment Gateway"
                value="SSLCOMMERZ"
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
                description="Rules and conditions for MerinaSoft services."
              />

              <PolicyLink
                to="/privacy-policy"
                icon={<FiShield />}
                title="Privacy Policy"
                description="How MerinaSoft handles personal information."
              />
            </div>
          </section>
        </div>
      </main>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .refund-notice {
          display: flex;
          gap: 14px;
          padding: 16px;
          border: 1px solid #dbeafe;
          background: #eff6ff;
          border-radius: 14px;
          color: #2563eb;
        }

        .refund-notice > svg {
          flex-shrink: 0;
          margin-top: 4px;
          font-size: 20px;
        }

        .refund-notice div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .refund-notice strong {
          color: #1e3a8a !important;
        }

        .refund-notice span {
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }

        .timeline-box {
          display: flex;
          gap: 16px;
          padding: 20px;
          border: 1px solid #a7f3d0;
          background: #ecfdf5;
          border-radius: 16px;
        }

        .timeline-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 12px;
          background: #059669;
          color: white;
          font-size: 20px;
        }

        .timeline-box span {
          display: block;
          color: #047857;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .timeline-box strong {
          display: block;
          margin-top: 3px;
          color: #0f172a !important;
          font-size: 21px;
        }

        .timeline-box p {
          margin-top: 6px;
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

const InfoBox = ({ title, value }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
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

const PolicyLink = ({ to, icon, title, description }) => {
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

        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </Link>
  );
};

export default RefundPolicy;
