function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-center md:text-left">
        {/* Name */}
        <span className="text-indigo-500 font-bold text-lg">
          Hassan Al-Hashimi
        </span>

        {/* Credit */}
        <p className="text-gray-400 text-sm">
          Designed & built by Hassan Al-Hashimi · {new Date().getFullYear()}
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-gray-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
