import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import TermsAndConditions from "./components/common/TermsAndConditions";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import RefundPolicy from "./components/common/RefundPolicy";
import CheckoutPage from "./components/common/CheckoutPage";
import ProductSection from "./components/common/ProductSection";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teams-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* <Route path="/products" element={<ProductSection />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
