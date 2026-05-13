export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
        <p>
          Welcome to Printable Planner Hub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your information when you visit our website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect and process the following data:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Usage data (pages visited, time spent, browser type)</li>
          <li>Contact information if you reach out to us via our contact form</li>
          <li>Cookie data for analytics and advertising purposes</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Improve our website and user experience</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Display relevant advertisements</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience and for advertising purposes. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
        <p>
          We use third-party advertising services (such as Adsterra and Google AdSense) that may collect information about your visits to this and other websites. These services may use cookies and web beacons to serve ads based on your interests.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access your personal data</li>
          <li>Request correction of your data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our contact page.
        </p>
      </div>
    </div>
  );
}
