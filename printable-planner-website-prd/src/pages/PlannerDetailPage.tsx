import { useParams, Link } from 'react-router-dom';
import { Download, Share2, ArrowLeft } from 'lucide-react';
import { getPlannerById, planners, getCategoryById } from '../data/planners';
import PlannerCard from '../components/PlannerCard';
import AdPlaceholder from '../components/AdPlaceholder';

export default function PlannerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const planner = getPlannerById(id || '');

  if (!planner) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Planner Not Found</h1>
        <Link to="/" className="text-pink-500 hover:text-pink-600">
          Return to Home
        </Link>
      </div>
    );
  }

  const category = getCategoryById(planner.category);
  const relatedPlanners = planners
    .filter((p) => p.category === planner.category && p.id !== planner.id)
    .slice(0, 4);

  const handleDownload = () => {
    alert(`Downloading ${planner.title}...`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: planner.title,
        text: planner.description,
        url: window.location.href,
      });
    } else {
      alert('Share this planner: ' + window.location.href);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-6 transition"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Planner Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <img
              src={planner.imageUrl}
              alt={planner.title}
              className="w-full h-auto max-h-[600px] object-contain"
            />
          </div>

          {/* Title and Info */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {planner.title}
                </h1>
                {category && (
                  <Link
                    to={`/category/${category.id}`}
                    className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-600"
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </Link>
                )}
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">{planner.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {planner.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="flex-1 sm:flex-none bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </button>
              <button
                onClick={handleShare}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Use This Planner
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Click the "Download PDF" button above</li>
              <li>Save the PDF file to your computer or device</li>
              <li>Print on standard letter-size (8.5" x 11") paper</li>
              <li>Use high-quality paper for best results</li>
              <li>Start planning and stay organized!</li>
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Ad Space */}
          <AdPlaceholder type="vertical" className="mb-6" />

          {/* Quick Download Card */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">100% Free</h3>
            <p className="mb-4 text-pink-100">
              Download this planner and all our planners completely free. No signup required!
            </p>
            <button
              onClick={handleDownload}
              className="w-full bg-white text-pink-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Download Now
            </button>
          </div>

          {/* Ad Space */}
          <AdPlaceholder type="square" />
        </div>
      </div>

      {/* Related Planners */}
      {relatedPlanners.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Planners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPlanners.map((p) => (
              <PlannerCard key={p.id} planner={p} />
            ))}
          </div>
        </section>
      )}

      {/* Ad Space */}
      <div className="mt-12">
        <AdPlaceholder type="horizontal" />
      </div>
    </div>
  );
}
