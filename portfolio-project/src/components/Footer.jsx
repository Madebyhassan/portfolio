import { Link } from "react-router-dom";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-center md:text-left">
        {/* Wordmark — clickable, back to homepage */}
        <Link
          to="/"
          onClick={handleClick}
          className="flex items-center gap-1.5 text-indigo-900 font-bold text-lg hover:opacity-80 transition-opacity"
        >
          madebyhassan
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        </Link>

        {/* Credit */}
        <p className="text-gray-400 text-sm">
          Designed & built by Hassan Al-Hashimi · {new Date().getFullYear()}
        </p>

        {/* Back to top */}
        <button
          onClick={handleClick}
          className="text-sm text-gray-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
