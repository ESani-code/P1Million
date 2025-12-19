// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Outreaches from "./pages/Outreaches";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Execs from "./pages/execs";
import NotFound from "./pages/NotFound"; // Import the new 404 page
// Import other pages as you create them

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/outreaches" element={<Outreaches />} />
          <Route path="/about" element={<About />} />
          <Route path="/executives" element={<Execs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
