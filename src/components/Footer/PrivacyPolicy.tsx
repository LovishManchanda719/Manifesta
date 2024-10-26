import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      {/* Page Heading */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mt-4">
          This Privacy Policy outlines how Manifesta collects, uses, and protects your personal information.
        </p>
      </header>

      {/* Privacy Policy Content */}
      <div className="space-y-6">
        {/* Section 1: Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p className="text-sm text-gray-700 mt-2">
            When you use Manifesta, we may collect personal information such as your name, email address, and event participation history. We collect this information to provide better service and a personalized experience.
          </p>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p className="text-sm text-gray-700 mt-2">
            We use the information collected to provide, maintain, and improve our platform. This includes personalizing your experience, offering event recommendations, and improving event listings based on user feedback.
          </p>
        </section>

        {/* Section 3: Sharing of Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">3. Sharing of Information</h2>
          <p className="text-sm text-gray-700 mt-2">
            Manifesta does not share your personal information with third parties except in cases required by law or with your consent. We take the security of your information seriously and implement measures to protect it.
          </p>
        </section>

        {/* Section 4: Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">4. Security</h2>
          <p className="text-sm text-gray-700 mt-2">
            We use industry-standard security measures to protect your data. However, no transmission of information over the internet is completely secure, so we cannot guarantee the absolute security of your personal information.
          </p>
        </section>

        {/* Section 5: Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">5. Your Rights</h2>
          <p className="text-sm text-gray-700 mt-2">
            You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at support@manifesta.com.
          </p>
        </section>

        {/* Section 6: Changes to This Policy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">6. Changes to This Policy</h2>
          <p className="text-sm text-gray-700 mt-2">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be updated at the top of this policy.
          </p>
        </section>

        {/* Section 7: Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800">7. Contact Us</h2>
          <p className="text-sm text-gray-700 mt-2">
            If you have any questions about this Privacy Policy or how we handle your information, please contact us at support@manifesta.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
