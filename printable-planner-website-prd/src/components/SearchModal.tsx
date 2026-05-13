import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchPlanners } from '../data/planners';
import type { Planner } from '../data/planners';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Planner[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 0) {
      setResults(searchPlanners(query));
    } else {
      setResults([]);
    }
  }, [query]);

  const handlePlannerClick = (plannerId: string) => {
    navigate(`/planner/${plannerId}`);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search planners..."
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto p-4">
            {query.trim().length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Start typing to search planners...
              </p>
            ) : results.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No planners found for "{query}"
              </p>
            ) : (
              <div className="space-y-3">
                {results.map((planner) => (
                  <button
                    key={planner.id}
                    onClick={() => handlePlannerClick(planner.id)}
                    className="w-full flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition text-left"
                  >
                    <img
                      src={planner.imageUrl}
                      alt={planner.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {planner.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {planner.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
