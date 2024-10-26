import React from "react";

// Inline SVGs following the format you provided
const PhoneIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
  <path d="M6.62 10.79a15.51 15.51 0 006.59 6.59l2.2-2.2a1 1 0 011.12-.21 11.72 11.72 0 004.52 1.26 1 1 0 011 .98v3.54a1 1 0 01-.88 1c-8.33.94-15-5.73-16-13.73A1 1 0 015.92 6h3.54a1 1 0 01.98 1 11.72 11.72 0 001.26 4.52 1 1 0 01-.21 1.12l-2.2 2.2z" />
</svg>

);

const EmailIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
  <path d="M3 4a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1H3zm1 2h16v.511L12 13 4 6.511V6zm16 2.73V18H4V8.73l7.56 6.32a1 1 0 001.28 0L20 8.73z" />
</svg>

);

const FAQIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v2h-2zm0 4h2v6h-2z" />
  </svg>
);

export function CustomerSupport() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Customer Support</h1>
        <p className="text-lg text-gray-600 mt-4">
          We're here to help! Reach out to us for any assistance with Manifesta.
        </p>
      </header>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Phone Support */}
        <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
          <PhoneIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Call Us</h2>
          <p className="text-gray-600 mt-2">(+91) 123-456-7890</p>
          <p className="text-gray-600">Available 9 AM - 5 PM</p>
        </div>

        {/* Email Support */}
        <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
          <EmailIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Email Us</h2>
          <p className="text-gray-600 mt-2">support@manifesta.com</p>
          <p className="text-gray-600">We'll get back to you within 24 hours</p>
        </div>

        {/* FAQ */}
        <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
          <FAQIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">FAQs</h2>
          <p className="text-gray-600 mt-2">Browse our FAQs for quick answers</p>
          <a href="/faq" className="text-blue-500 hover:underline">
            Go to FAQs
          </a>
        </div>
      </section>
    </div>
  );
}

export default CustomerSupport;
