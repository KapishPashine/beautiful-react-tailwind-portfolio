import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close the mobile menu on item click
  };

  return (
<nav
  className={cn(
    "fixed w-full z-40 transition-all duration-300 py-5 bg-background shadow-[0_4px_12px_rgba(0,0,0,0.25)] top-0"
  )}
>



      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Nishal </span> Pashine
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
 <button
  onClick={() => setIsMenuOpen((prev) => !prev)}
  className="md:hidden p-2 text-foreground z-50 fixed top-5 right-5"
  aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
>
  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>


        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
<div className="flex flex-col space-y-8 text-xl w-[90%]">
  {navItems.map((item, key) => (
    <a
      key={key}
      href={item.href}
      className="text-foreground/80 hover:text-primary transition-colors duration-300 pb-2 mx-auto w-[70%] border-b border-foreground/20 pb-5"
      onClick={(e) => {
        e.preventDefault();
        handleSmoothScroll(item.href);
      }}
    >
      {item.name}
    </a>
  ))}
</div>


        </div>
      </div>
    </nav>
  );
};
