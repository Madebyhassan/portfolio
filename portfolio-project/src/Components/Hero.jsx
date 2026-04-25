function Hero() {
  return (
    <section className="flex items-center justify-between px-12 py-24 bg-gray-100 min-h-screen">
      {/* Left side — text content */}
      <div className="flex flex-col gap-6 max-w-xl">
        {/* Available for work badge */}
        <span className="w-fit px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
          Available for work
        </span>

        {/* Heading */}
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Designing & Building with <span className="text-indigo-500">AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg leading-relaxed">
          I'm Hassan, a UI/AI Engineer crafting beautiful products powered by
          intelligent design.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 mt-2">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
            View my work
          </button>
          <button className="text-indigo-500 text-sm font-medium hover:underline">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Right side — photo placeholder */}
      <div className="w-96 h-130 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 text-sm shrink-0">
        Your Photo
      </div>
    </section>
  );
}

export default Hero;
``;
