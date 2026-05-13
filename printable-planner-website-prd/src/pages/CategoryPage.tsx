import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getCategoryById, getPlannersByCategory } from '../data/planners';
import PlannerCard from '../components/PlannerCard';
import AdPlaceholder from '../components/AdPlaceholder';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');
  const planners = getPlannersByCategory(categoryId || '');

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <Link to="/categories" className="text-pink-500 hover:text-pink-600">
          View All Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/categories"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-6 transition"
      >
        <ArrowLeft size={20} />
        <span>Back to Categories</span>
      </Link>

      {/* Category Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{category.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {category.name}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse our collection of {category.name.toLowerCase()} templates. Download and print for free!
        </p>
      </div>

      {/* Ad Space */}
      <AdPlaceholder type="horizontal" className="mb-8" />

      {/* Planners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {planners.map((planner) => (
          <PlannerCard key={planner.id} planner={planner} />
        ))}
      </div>

      {planners.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No planners available in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Ad Space */}
      <AdPlaceholder type="horizontal" />
    </div>
  );
}
