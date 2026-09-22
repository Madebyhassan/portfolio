import { Link } from "react-router-dom";
import projects from "../data/projects";

const visibleProjects = projects.filter((p) => !p.hidden);

function Work() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 py-20 md:py-24 bg-white pb-28 md:pb-32"
    >
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16 pt-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-indigo-500" />
          <span className="text-indigo-500 text-xs font-semibold tracking-[0.2em] uppercase">
            Selected Work
          </span>
          <div className="w-8 h-px bg-indigo-500" />
        </div>
        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Projects I've Built
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          A collection of real products, unique ideas and end-to-end projects
        </p>
      </div>

      {/* Project list */}
      <div className="max-w-5xl mx-auto flex flex-col gap-5 md:gap-6">
        {visibleProjects.map((project, index) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group relative rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Left accent border — full card height */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 z-20 transition-all duration-300 group-hover:w-[3px]"
              style={{ background: project.accent || "#6366F1" }}
            />

            {/* ── IMAGE SECTION — aspect ratio instead of fixed height, so it scales naturally ── */}
            <div className="relative overflow-hidden aspect-[16/8] md:aspect-[16/5]">
              {/* Background */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: project.heroBg || "#0D0520" }}
                />
              )}

              {/* Base overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(0,0,0,0.15)" }}
              />

              {/* Hover overlay — desktop only, fades image back */}
              <div
                className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.60)" }}
              />

              {/* Year — brighter for contrast, fades on hover (desktop only) */}
              <span
                className="absolute top-5 md:top-7 right-6 md:right-8 text-white text-xs md:text-sm font-semibold md:group-hover:opacity-0 transition-opacity duration-200 z-10"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
              >
                {project.year}
              </span>

              {/* Number — decorative, desktop hover-only, hidden on mobile */}
              <span
                className="hidden md:block absolute top-6 left-8 text-8xl font-extrabold leading-none select-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                style={{ color: project.accent || "#6366F1" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Tool pills — always visible on mobile, hover-reveal on desktop */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8 right-4 md:right-8 flex flex-wrap gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:delay-75 z-10">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 md:px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold border border-black/10 text-gray-900"
                    style={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ── WHITE TEXT SECTION ── */}
            <div className="bg-white px-5 md:px-8 py-5 md:py-6 flex flex-col gap-2 shrink-0">
              <span
                className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${project.categoryColor}`}
              >
                {project.category}
              </span>

              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <div
                  className="text-xl shrink-0 opacity-60 md:opacity-30 group-hover:opacity-100 md:group-hover:translate-x-2 transition-all duration-300"
                  style={{ color: project.accent || "#6366F1" }}
                >
                  →
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
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
