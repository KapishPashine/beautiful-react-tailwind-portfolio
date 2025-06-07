import { ArrowDown } from "lucide-react";
import heroBg from "../assets/images.jpg";

export const HeroSection = () => {
  return (
    <section
  id="hero"
  className="min-h-screen flex flex-col items-center justify-center py-11"
>
  <div
    className="relative w-full mx-auto text-center z-10 pt-[76px] min-h-[900px] bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
      backgroundImage: `url(${heroBg})`,
    }}
  >
    {/* Content */}
    <div className="space-y-6 rounded-lg p-6 py-32 md:py-40 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
        <span className="text-primary opacity-0 animate-fade-in-delay-1">
          Nishal
        </span>
        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
          Pashine
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3">
        I design captivating and functional spaces that reflect the
        personality and needs of my clients. Specializing in creating
        aesthetic and practical interiors, I bring your vision to life
        with attention to detail and style.
      </p>

      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button">
          View My Work
        </a>
      </div>
    </div>
  </div>

  {/* Scroll arrow */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <ArrowDown className="h-5 w-5 text-primary" />
  </div>
</section>

  );
};
