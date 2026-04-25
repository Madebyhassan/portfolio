import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 p-12">
      <h1 className="text-white text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <ProjectCard
          title="Tip Calculator"
          description="A vanilla JS app that calculates tip and split between people."
          tech="HTML, CSS, JavaScript"
        />
        <ProjectCard
          title="Password Checker"
          description="Real-time password strength checker with colour feedback."
          tech="HTML, CSS, JavaScript"
        />
        <ProjectCard
          title="Portfolio"
          description="Personal portfolio showcasing projects and skills."
          tech="React, Tailwind"
        />
      </div>
    </div>
  );
}

export default App;
