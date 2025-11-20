import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Careers from './pages/Careers';
import VirtualTryOn from './pages/VirtualTryOn';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-brew-900 bg-[#faf9f6]">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/try-on" element={<VirtualTryOn />} />
        </Routes>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-none border-2 border-brew-900 bg-amber-400 text-brew-900 shadow-[4px_4px_0px_0px_rgba(62,39,35,1)] transition-all duration-300 hover:translate-y-1 hover:shadow-none ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;