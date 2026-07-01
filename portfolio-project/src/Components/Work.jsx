import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Cozmos",
    description: "Customizable Worlds to Showcase Products and Services",
    category: "Brand Design",
    categoryColor: "bg-indigo-100 text-indigo-500",
    image: "/Cozmos-PC.png",
  },
  {
    id: 2,
    title: "Project Title",
    description: "Short description of the project goes here.",
    category: "Brand Design",
    categoryColor: "bg-yellow-100 text-yellow-600",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Monaa",
    description: "Short description of the project goes here.",
    category: "Design System",
    categoryColor: "bg-pink-100 text-pink-500",
    image: "/Monaa.png",
  },
  {
    id: 4,
    title: "Project Title",
    description: "Short description of the project goes here.",
    category: "Design System",
    categoryColor: "bg-indigo-100 text-indigo-500",
    image: "/project4.jpg",
  },
];

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
    hidden: "translate-x-0 scale-75 z-0 opacity-0 cursor-pointer",
  };

  return (
    <section id="work" className="px-12 py-24 bg-white overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-indigo-500 text-sm font-medium mb-3">My Work</p>
        <h2 className="text-gray-900 text-4xl font-bold mb-4">
          Projects I've Built
        </h2>
        <p className="text-gray-400 text-base">
          A collection of real products, unique ideas and end-to-end projects
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center h-130"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => {
          const position = getPosition(index);
          return (
            <div
              key={project.id}
              className={`absolute w-80 transition-all duration-500 ease-in-out ${positionStyles[position]}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                categoryColor={project.categoryColor}
                image={project.image}
              />
            </div>
          );
        })}
      </div>

      {/* Arrow buttons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          ←
        </button>

        {/* Dot indicators */}
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
    </section>
  );
}

export default Work;
