import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

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
    <nav className="flex items-center justify-between px-12 py-5 bg-white border-b border-gray-100">
      {/* Logo */}
      <Link to="/" className="flex flex-col items-center">
        <span className="text-indigo-500 font-bold text-lg space-x-2 tracking-[0.2em]">
          Hassan Al-Hashimi
        </span>
        <span className="text-gray-500 text-sm font-normal tracking-[0.4em]">
          UX/UI Engineer
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex gap-10 text-gray-700 text-sm">
        <button
          onClick={() => handleSectionLink("work")}
          className="hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Work
        </button>
        <Link to="/about" className="hover:text-indigo-500 transition-colors">
          About
        </Link>
        <button
          onClick={() => handleSectionLink("skills")}
          className="hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Skills
        </button>
        <button
          onClick={() => handleSectionLink("contact")}
          className="hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>

      {/* CTA */}
      <button
        onClick={() => handleSectionLink("contact")}
        className="bg-indigo-500 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-600 transition-colors cursor-pointer"
      >
        Let's Talk
      </button>
    </nav>
  );
}

export default Navbar;
