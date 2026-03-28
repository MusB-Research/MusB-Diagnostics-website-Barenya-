import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/index.js';
import Navbar from './components/Navbar/index.js';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/index.js';
import TestCatalog from './pages/TestCatalog/index.js';
import Booking from './pages/Booking/index.js';
import OffersHub from './pages/OffersHub/index.js';
import EmployerHub from './pages/EmployerHub/index.js';
import ResearchCentralLab from './pages/ResearchCentralLab/index.js';
import Cart from './pages/Cart/index.js';
import PlaceholderPage from './pages/PlaceholderPage/index.js';
import FloatingCart from './components/FloatingCart/index.js';

function App() {
  return (
    <Router>
      <CartProvider>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            {/* Existing Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<TestCatalog />} />
            <Route path="/test-catalog" element={<TestCatalog />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/offers" element={<OffersHub />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/employer-health-program" element={<EmployerHub />} />

            {/* Top Level SEO Routes */}
            <Route path="/about" element={<PlaceholderPage />} />
            <Route path="/contact" element={<PlaceholderPage />} />
            <Route path="/locations" element={<PlaceholderPage />} />
            <Route path="/panels" element={<PlaceholderPage />} />
            <Route path="/pricing" element={<PlaceholderPage />} />
            <Route path="/blog" element={<PlaceholderPage />} />
            <Route path="/login" element={<PlaceholderPage />} />

            {/* 1. Self-pay Hub */}
            <Route path="/self-pay-lab-tests" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/test-catalog" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/annual-health-check" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/womens-health" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/metabolic-health" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/thyroid" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/nutrition-vitamin" element={<PlaceholderPage />} />
            <Route path="/self-pay-lab-tests/std-testing" element={<PlaceholderPage />} />

            {/* 2. Employers / HR Hub (Base is mapped to actual EmployerHub component above) */}
            <Route path="/employer-health-program/plans" element={<PlaceholderPage />} />
            <Route path="/employer-health-program/onsite-testing" element={<PlaceholderPage />} />
            <Route path="/employer-health-program/faq" element={<PlaceholderPage />} />
            <Route path="/employer-health-program/signup" element={<PlaceholderPage />} />

            {/* 3. Physicians Hub */}
            <Route path="/physicians" element={<PlaceholderPage />} />
            <Route path="/physicians/order-tests" element={<PlaceholderPage />} />
            <Route path="/physicians/lis-integration" element={<PlaceholderPage />} />
            <Route path="/physicians/portal" element={<PlaceholderPage />} />

            {/* 4. Assisted Living Hub */}
            <Route path="/assisted-living-testing" element={<PlaceholderPage />} />
            <Route path="/assisted-living-testing/recurring-rounds" element={<PlaceholderPage />} />
            <Route path="/assisted-living-testing/mobile-collections" element={<PlaceholderPage />} />
            <Route path="/assisted-living-testing/portal" element={<PlaceholderPage />} />

            {/* 5. Mobile Phlebotomy Hub */}
            <Route path="/mobile-phlebotomy" element={<PlaceholderPage />} />
            <Route path="/mobile-phlebotomy/service-areas" element={<PlaceholderPage />} />
            <Route path="/mobile-phlebotomy/book-home-draw" element={<PlaceholderPage />} />
            <Route path="/mobile-phlebotomy/pricing" element={<PlaceholderPage />} />

            {/* 6. Non-profits Hub */}
            <Route path="/community-programs" element={<PlaceholderPage />} />
            <Route path="/community-programs/nonprofit-partnerships" element={<PlaceholderPage />} />
            <Route path="/community-programs/screening-events" element={<PlaceholderPage />} />
            <Route path="/community-programs/apply" element={<PlaceholderPage />} />

            {/* 7. Early Diagnostics Hub */}
            <Route path="/early-diagnostics" element={<PlaceholderPage />} />
            <Route path="/early-diagnostics/biomarker-validation" element={<PlaceholderPage />} />
            <Route path="/early-diagnostics/submit-technology" element={<PlaceholderPage />} />
            <Route path="/early-diagnostics/project-tracker" element={<PlaceholderPage />} />

            {/* 8. Research Central Lab Hub */}
            <Route path="/research-central-lab" element={<ResearchCentralLab />} />
            <Route path="/research-central-lab/services" element={<PlaceholderPage />} />
            <Route path="/research-central-lab/biorepository" element={<PlaceholderPage />} />
            <Route path="/research-central-lab/sample-processing" element={<PlaceholderPage />} />
            <Route path="/research-central-lab/request-quote" element={<PlaceholderPage />} />
            <Route path="/research-central-lab/portal" element={<PlaceholderPage />} />

            {/* Portals */}
            <Route path="/portal/customer" element={<PlaceholderPage />} />
            <Route path="/portal/employer" element={<PlaceholderPage />} />
            <Route path="/portal/physician" element={<PlaceholderPage />} />
            <Route path="/portal/facility" element={<PlaceholderPage />} />
            <Route path="/portal/research" element={<PlaceholderPage />} />
            <Route path="/portal/biomarker" element={<PlaceholderPage />} />
            <Route path="/portal/affiliate" element={<PlaceholderPage />} />
            <Route path="/portal/staff" element={<PlaceholderPage />} />

            {/* Fallback 404 Route */}
            <Route path="*" element={<PlaceholderPage />} />
          </Routes>
        </main>
        <FloatingCart />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;