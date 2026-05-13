import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              Printable Planner Hub
            </h3>
            <p className="text-gray-600 text-sm">
              Download beautiful printable planners for free. Stay organized and productive with our collection of planners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/daily" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Daily Planners
                </Link>
              </li>
              <li>
                <Link to="/category/weekly" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Weekly Planners
                </Link>
              </li>
              <li>
                <Link to="/category/budget" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Budget Planners
                </Link>
              </li>
              <li>
                <Link to="/category/study" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Study Planners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-pink-500 text-sm transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Printable Planner Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
