import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PlannerDetailPage from './pages/PlannerDetailPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesListPage from './pages/CategoriesListPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header onSearchClick={() => setSearchOpen(true)} />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planner/:id" element={<PlannerDetailPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/categories" element={<CategoriesListPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
