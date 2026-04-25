import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Short description of the project goes here.",
    category: "Health Tracker",
    categoryColor: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Project Title",
    description: "Short description of the project goes here.",
    category: "Brand Design",
    categoryColor: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Project Title",
    description: "Short description of the project goes here.",
    category: "Design System",
    categoryColor: "bg-indigo-100 text-indigo-500",
  },
];

function Work() {
  return (
    <section id="work" className="px-12 py-24 bg-white">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-indigo-500 text-sm font-medium mb-3">My Work</p>
        <h2 className="text-gray-900 text-4xl font-bold mb-4">
          Projects I've Built
        </h2>
        <p className="text-gray-400 text-base">
          A collection of real products, experiments and passion projects
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
            categoryColor={project.categoryColor}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
