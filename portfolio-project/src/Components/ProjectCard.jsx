function ProjectCard({ title, description, category, categoryColor }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image placeholder */}
      <div className="bg-gray-100 h-52 flex items-center justify-center text-gray-400 text-sm">
        Image
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Category badge */}
        <span
          className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${categoryColor}`}
        >
          {category}
        </span>

        <h3 className="text-gray-900 font-bold text-xl">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

        <button className="w-full mt-2 bg-indigo-500 text-white py-3 rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors">
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
