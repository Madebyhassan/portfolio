function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-5 bg-white border-b border-gray-100">
      <span className="text-indigo-500 font-bold text-xl">Hassan</span>
      <div className="flex gap-10 text-gray-900 text-sm">
        <a href="#work" className="hover:text-indigo-500 transition-colors">
          Work
        </a>
        <a href="#about" className="hover:text-indigo-500 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-indigo-500 transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-indigo-500 transition-colors">
          Contact
        </a>
      </div>
      <button className="bg-indigo-500 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-600 transition-colors">
        Let's Talk
      </button>
    </nav>
  );
}

export default Navbar;
