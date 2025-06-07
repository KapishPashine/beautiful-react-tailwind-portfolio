import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      // Optional: clean state so it doesn’t scroll on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* Assign ref to contact section */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};
