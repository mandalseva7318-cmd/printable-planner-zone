export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
        <p>
          By accessing and using Printable Planner Hub, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the planners on Printable Planner Hub for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
        </p>
        <p>
          Under this license you may:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Download and print planners for personal use</li>
          <li>Share links to our website with others</li>
        </ul>
        <p>
          You may not:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Sell or redistribute our planners</li>
          <li>Modify or copy the materials except for personal use</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Remove any copyright or proprietary notations</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p>
          The materials on Printable Planner Hub are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
        <p>
          In no event shall Printable Planner Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
        <p>
          The materials appearing on Printable Planner Hub could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Links</h2>
        <p>
          We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modifications</h2>
        <p>
          We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Copyright</h2>
        <p>
          All content on this website, including planners, images, and text, is the property of Printable Planner Hub and is protected by copyright laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us through our contact page.
        </p>
      </div>
    </div>
  );
}
