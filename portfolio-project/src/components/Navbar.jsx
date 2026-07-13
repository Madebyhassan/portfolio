import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionLink = (sectionId) => {
    if (window.location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex flex-col items-center">
        <span className="text-indigo-500 font-bold text-lg tracking-widest">
          Hassan Al-Hashimi
        </span>
        <span
          className={`text-xs font-normal tracking-[0.3em] transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-white/80"}`}
        >
          UX/AI Engineer
        </span>
      </Link>

      <div
        className={`flex gap-10 text-sm transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-white/80"}`}
      >
        <button
          onClick={() => handleSectionLink("work")}
          className="hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Work
        </button>
        <Link
          to="/about"
          className={`hover:text-indigo-500 transition-colors ${scrolled ? "text-gray-500" : "text-white/80"}`}
        >
          About
        </Link>
        <button
          onClick={() => handleSectionLink("skills")}
          className="hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Skills
        </button>
      </div>

      <button
        onClick={() => handleSectionLink("contact")}
        className="bg-indigo-500 font-medium text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-600 transition-colors cursor-pointer"
      >
        Contact
      </button>
    </nav>
  );
}

export default Navbar;
