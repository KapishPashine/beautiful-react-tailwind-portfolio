import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./components/ContactSection"; // ✅ Make sure this is a named export
import '../src/index.css';

// Wrapper to use hooks like useLocation inside Router
const AppWrapper = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/project/");

  // Scroll to top whenever the route changes
 useEffect(() => {
    // Scroll to top only when the route is a ProjectPage route
    if (location.pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
