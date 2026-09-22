import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // About page has a light background from the top, so the navbar
  // needs to always render in its "scrolled" (dark text) styling there,
  // regardless of actual scroll position.
  const forceLight = location.pathname === "/about";
  const isDark = scrolled || forceLight;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSectionLink = (sectionId) => {
    setMenuOpen(false);
    if (window.location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          isDark
            ? "bg-white/60 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleLogoClick}>
          <img
            src={isDark ? "/home/logo-dark.svg" : "/home/logo-light.svg"}
            alt="Hassan Al-Hashimi"
            className="h-12 md:h-20 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <div
          className={`hidden md:flex gap-10 text-sm font-medium transition-colors duration-300 ${isDark ? "text-indigo-900" : "text-white/80"}`}
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
            className={`relative pb-1 hover:text-indigo-500 transition-colors group ${isDark ? "text-indigo-900" : "text-white/80"}`}
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

        {/* Desktop Contact button — hidden on mobile */}
        <button
          onClick={() => handleSectionLink("contact")}
          className="hidden md:block bg-indigo-500 font-medium text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-600 transition-colors cursor-pointer"
        >
          Contact
        </button>

        {/* Hamburger — visible only on mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`md:hidden flex flex-col items-end gap-1.5 w-8 h-8 justify-center cursor-pointer ${isDark ? "text-gray-700" : "text-white"}`}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-current rounded-full" />
          <span className="block w-6 h-[2px] bg-current rounded-full" />
          <span className="block w-4 h-[2px] bg-current rounded-full" />
        </button>
      </nav>

      {/* ── DIM OVERLAY — click to close ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── SLIDE-IN PANEL — from the right, ~78% width ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[60] w-[78%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <img
            src="/home/logo-dark.svg"
            alt="Hassan Al-Hashimi"
            className="h-9 w-auto"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 text-3xl leading-none cursor-pointer"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex-1 flex flex-col items-end justify-start gap-10 px-8 pt-16">
          <button
            onClick={() => handleSectionLink("work")}
            className="text-xl font-semibold text-gray-900 cursor-pointer"
          >
            Work
          </button>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-gray-900"
          >
            About
          </Link>
          <button
            onClick={() => handleSectionLink("skills")}
            className="text-xl font-semibold text-gray-900 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => handleSectionLink("contact")}
            className="mt-3 bg-indigo-500 font-medium text-white px-7 py-3 rounded-full text-sm hover:bg-indigo-600 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
