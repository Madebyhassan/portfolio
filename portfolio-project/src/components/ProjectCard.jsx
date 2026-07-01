import { useState } from "react";

function ProjectCard({ title, description, category, categoryColor, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={image || "/placeholder.jpg"}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Dark overlay — always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover overlay — fades in */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Bottom content — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
        <span
          className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}
        >
          {category}
        </span>
        <h3 className="text-white font-bold text-xl leading-tight">{title}</h3>
        <p
          className={`text-white/70 text-sm leading-relaxed transition-all duration-300 ${hovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"}`}
        >
          {description}
        </p>
      </div>

      {/* Explore button — fades in on hover */}
      <div
        className={`absolute top-6 right-6 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        <button className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 hover:text-white transition-colors">
          Explore →
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
