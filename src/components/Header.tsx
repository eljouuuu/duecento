import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <span
              className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                isScrolled || isMenuOpen ? "text-foreground" : "text-background"
              }`}
            >
              Duecento
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#experience"
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              Experience
            </a>
            <a
              href="#menu"
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              Menu
            </a>
            <a
              href="#visit"
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative z-50 p-2 transition-colors ${
              isScrolled || isMenuOpen ? "text-foreground" : "text-background"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-serif text-foreground"
          >
            Experience
          </a>
          <a
            href="#menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-serif text-foreground"
          >
            Menu
          </a>
          <a
            href="#visit"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg"
          >
            Visit Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
