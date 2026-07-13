import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    setTouchStart(null);
  };

  const getPosition = (index) => {
    const total = projects.length;
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  const positionStyles = {
    center: "translate-x-0 scale-105 z-20 opacity-100",
    left: "-translate-x-[340px] scale-90 z-10 opacity-60",
    right: "translate-x-[340px] scale-90 z-10 opacity-60",
    hidden: "translate-x-0 scale-75 z-0 opacity-0",
  };

  return (
    <section id="work" className="relative px-12 py-24 bg-white pb-32">
      {/* Section header */}
      <div className="text-center mb-14 pt-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-indigo-500" />
          <span className="text-indigo-500 text-xs font-semibold tracking-[0.2em] uppercase">
            Selected Work
          </span>
          <div className="w-8 h-px bg-indigo-500" />
        </div>
        <h2 className="text-gray-900 text-5xl font-extrabold tracking-tight mb-4">
          Projects I've Built
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
          A collection of real products, unique ideas and end-to-end projects
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center h-130 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => {
          const position = getPosition(index);
          return (
            <div
              key={project.id}
              className={`absolute w-80 transition-all duration-500 ease-in-out ${positionStyles[position]} ${
                position !== "center" ? "cursor-pointer" : ""
              }`}
              onClick={
                position !== "center" ? () => setActiveIndex(index) : undefined
              }
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.summary}
                category={project.category}
                categoryColor={project.categoryColor}
                image={project.image}
                isCenter={position === "center"}
              />
            </div>
          );
        })}
      </div>

      {/* Arrow buttons + dots */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          ←
        </button>

        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === activeIndex ? "bg-indigo-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Wave divider into Skills section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path
            d="M0,90 C150,90 300,5 500,10 C680,15 780,90 950,85 C1100,80 1280,35 1440,70 L1440,120 L0,120 Z"
            fill="#0A0A1B"
          />
        </svg>
      </div>
    </section>
  );
}

export default Work;
