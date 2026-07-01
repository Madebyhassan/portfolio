function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left — name */}
        <span className="text-indigo-500 font-bold text-lg">Hassan</span>

        {/* Center — credit */}
        <p className="text-gray-400 text-sm">
          Designed & built by Hassan · {new Date().getFullYear()}
        </p>

        {/* Right — back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-gray-400 hover:text-indigo-500 transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
