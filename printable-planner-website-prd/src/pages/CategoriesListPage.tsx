import { Link } from 'react-router-dom';
import { categories, getPlannersByCategory } from '../data/planners';
import AdPlaceholder from '../components/AdPlaceholder';

export default function CategoriesListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Categories
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our complete collection of printable planners organized by category
        </p>
      </div>

      {/* Ad Space */}
      <AdPlaceholder type="horizontal" className="mb-12" />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => {
          const plannerCount = getPlannersByCategory(category.id).length;
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white border-2 border-gray-200 hover:border-pink-300 rounded-lg p-8 text-center transition-all hover:shadow-xl group"
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition">
                {category.name}
              </h2>
              <p className="text-gray-600">
                {plannerCount} {plannerCount === 1 ? 'planner' : 'planners'}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
