import React from "react";

// Inline SVGs
const UserIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12a6 6 0 100-12 6 6 0 000 12zm0 2c-4 0-7.91 2-8 4.45a.75.75 0 00.75.8h14.5a.75.75 0 00.75-.8c-.09-2.45-4-4.45-8-4.45z" />
  </svg>
);

const PrivacyIcon = () => (
    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7zm3 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
</svg>
);

const LimitationsIcon = () => (
  <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20zm-4-8h8v2H8v-2zm0-4h8v2H8v-2zm0-4h8v2H8V6z" />
  </svg>
);

export function TermsAndConditions() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Terms and Conditions</h1>
        <p className="text-lg text-gray-600 mt-4">
          Please read the following terms and conditions carefully before using Manifesta.
        </p>
      </header>

      {/* Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* User Obligations */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition text-center">
          <UserIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">User Obligations</h2>
          <p className="text-gray-600 mt-2">
            As a user of Manifesta, you agree to adhere to all terms and policies. Any misuse of the platform will result in the termination of your account.
          </p>
        </div>

        {/* Privacy */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition text-center">
          <PrivacyIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Privacy</h2>
          <p className="text-gray-600 mt-2">
            Your privacy is important to us. Please refer to our Privacy Policy for information on how we handle your data.
          </p>
        </div>

        {/* Limitations of Liability */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition text-center">
          <LimitationsIcon />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Limitations of Liability</h2>
          <p className="text-gray-600 mt-2">
            Manifesta is not liable for any damages that result from the use of the platform or services provided.
          </p>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="bg-blue-50 p-8 rounded-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Detailed Terms</h3>
        <div className="text-gray-700">
          <p className="mb-4">
            By using Manifesta, you agree to the terms outlined here. The platform is offered as is, without any warranties or guarantees.
          </p>
          <p className="mb-4">
            Any misuse of the platform may result in account suspension. We reserve the right to terminate your access to the platform if these terms are violated.
          </p>
          <p className="mb-4">
            Please refer to our Privacy Policy for further details on how we collect, use, and protect your data.
          </p>
          <p className="mb-4">
            Manifesta may modify these terms at any time. Continued use of the platform after any such modifications constitutes your acceptance of the new terms.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
