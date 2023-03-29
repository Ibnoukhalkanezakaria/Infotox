import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Features from "./Pages/Features/Features";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Blog";
import Integration from "./Pages/Integration/Integration";
import Footer from "./Components/Footer/Footer";
import OneBlog from "./Components/Sections/OneBlog";
import CtaSection from "./Components/Sections/CtaSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:oneItem" element={<OneBlog />} />
      </Routes>
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
