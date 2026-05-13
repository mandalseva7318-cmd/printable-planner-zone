import { Link } from 'react-router-dom';
import PlannerCard from '../components/PlannerCard';
import AdPlaceholder from '../components/AdPlaceholder';
import { categories, getFeaturedPlanners, planners } from '../data/planners';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredPlanners = getFeaturedPlanners();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Free Printable Planners PDF
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download beautiful printable planners for free. Stay organized and productive with our curated collection.
          </p>
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg"
          >
            <span>Browse Planners</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Ad Space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdPlaceholder type="horizontal" />
      </div>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white border-2 border-gray-200 hover:border-pink-300 rounded-lg p-6 text-center transition-all hover:shadow-lg group"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-pink-500 transition">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Planners */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Planners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredPlanners.map((planner) => (
              <PlannerCard key={planner.id} planner={planner} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <AdPlaceholder type="horizontal" />
      </div>

      {/* All Planners - Masonry Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          All Planners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {planners.map((planner) => (
            <PlannerCard key={planner.id} planner={planner} />
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Use Printable Planners?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Printable planners are powerful tools for boosting productivity and staying organized. Whether you're a student managing assignments, a professional juggling multiple projects, or a busy parent coordinating family activities, our free printable planners can help you take control of your time.
            </p>
            <p>
              Studies show that writing things down by hand improves memory retention and helps you process information more effectively. When you use a physical planner, you're more likely to remember your goals and commitments compared to digital alternatives.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Benefits of Using Our Planners
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>100% free to download and print</li>
              <li>Beautiful, professionally designed layouts</li>
              <li>Customizable for your specific needs</li>
              <li>No software or apps required</li>
              <li>Perfect for all age groups and lifestyles</li>
              <li>Eco-friendly option - print only what you need</li>
            </ul>
            <p>
              Browse our extensive collection of daily planners, weekly organizers, budget trackers, study schedules, meal planners, habit trackers, and fitness logs. Each planner is carefully designed to be both functional and aesthetically pleasing, making planning an enjoyable experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
