import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import type { Planner } from '../data/planners';

interface PlannerCardProps {
  planner: Planner;
}

export default function PlannerCard({ planner }: PlannerCardProps) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would trigger PDF download
    alert(`Downloading ${planner.title}...`);
  };

  return (
    <Link
      to={`/planner/${planner.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={planner.imageUrl}
          alt={planner.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-500 transition">
          {planner.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {planner.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {planner.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-pink-50 text-pink-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <Download size={16} />
          <span className="font-medium">Download PDF</span>
        </button>
      </div>
    </Link>
  );
}
