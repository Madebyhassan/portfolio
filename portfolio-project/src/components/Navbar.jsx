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
          ? "bg-white/60 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex items-center">
        <img
          src={scrolled ? "/home/logo-dark.svg" : "/home/logo-light.svg"}
          alt="Hassan Al-Hashimi"
          className="h-20 w-auto transition-opacity duration-300"
        />
      </Link>

      <div
        className={`flex gap-10 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-gray-300" : "text-white/80"}`}
      >
        <button
          onClick={() => handleSectionLink("work")}
          className="relative pb-1 hover:text-indigo-500 transition-colors cursor-pointer group"
        >
          Work
          <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-indigo-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </button>

        <Link
          to="/about"
          className={`relative pb-1 hover:text-indigo-500 transition-colors group ${scrolled ? "text-gray-300" : "text-white/80"}`}
        >
          About
          <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-indigo-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </Link>

        <button
          onClick={() => handleSectionLink("skills")}
          className="relative pb-1 hover:text-indigo-500 transition-colors cursor-pointer group"
        >
          Skills
          <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-indigo-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
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
