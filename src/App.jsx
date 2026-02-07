import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-coal relative overflow-x-hidden">
        {/* Animated background grid */}
        <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        {/* Gradient orbs */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: '3s' }} />
        
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
