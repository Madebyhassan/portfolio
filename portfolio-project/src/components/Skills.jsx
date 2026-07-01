const skills = [
  "Figma",
  "Design Systems",
  "HTML",
  "CSS",
  "JavaScript",
  "Prototyping",
  "UI Design",
  "AI & Emerging Tech",
  "React",
  "User Research",
  "Cross-Functional Collaboration",
  "Interaction UI Components",
];

function Skills() {
  return (
    <section id="skills" className="px-12 py-24 bg-gray-100">
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="text-indigo-500 text-sm font-medium mb-3">What I do</p>
        <h2 className="text-gray-900 text-4xl font-bold">Skills & Tools</h2>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-500 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
