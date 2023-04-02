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
import GetStartedProvider from "./Context/GetStartedContext";
import Error from "./Pages/Error/Error";

// import inimation on scroll
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="App">
      <GetStartedProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:oneItem" element={<OneBlog />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <CtaSection />
        <Footer />
      </GetStartedProvider>
    </div>
  );
}

export default App;
