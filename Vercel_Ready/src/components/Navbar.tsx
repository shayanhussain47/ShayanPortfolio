import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, BookOpen, Calendar } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header border-b border-white/15" : "bg-transparent border-b border-white/15"
      }`}
    >
      <div className="section-container flex items-center justify-between py-4">
        <span className="font-display text-xl font-bold tracking-wider text-metallic">
          SHAYAN
        </span>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scrollTo("services")} className="pill-button">
            <Eye size={16} />
            See my work
          </button>
          <button onClick={() => scrollTo("services")} className="pill-button">
            <BookOpen size={16} />
            My catalog
          </button>
          <a href="#contact" className="pill-button-filled bg-white text-black border-none hover:bg-white/90 inline-flex items-center gap-2">
            <Calendar size={16} />
            Book a service
          </a>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => scrollTo("services")} className="pill-button text-xs px-4 py-2">
            Catalog
          </button>
          <a href="#contact" className="pill-button-filled text-xs px-4 py-2 bg-white text-black border-none hover:bg-white/90 inline-flex items-center gap-2">
            <Calendar size={14} className="md:hidden" />
            Book
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
