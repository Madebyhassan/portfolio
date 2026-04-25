function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col gap-3 hover:border-gray-500 transition-colors">
      <h2 className="text-white font-semibold text-lg">{title}</h2>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <span className="text-xs text-blue-400 font-mono mt-auto">{tech}</span>
    </div>
  );
}

export default ProjectCard;
