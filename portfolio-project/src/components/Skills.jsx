const services = [
  {
    id: "design",
    icon: "/icons/design-icon.svg",
    title: "Design",
    description:
      "From concept to high-fidelity UI — I design end-to-end products that are both beautiful and functional.",
    tools: [
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Wireframing",
    ],
    accent: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.25)",
  },
  {
    id: "frontend",
    icon: "/icons/frontend-icon.svg",
    title: "Frontend",
    description:
      "I'm just as comfortable in frontend development as I am in Figma. This results in fewer compromises between design and code.",
    tools: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js"],
    accent: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    id: "ai",
    icon: "/icons/ai-style2.svg",
    title: "AI Engineering",
    description:
      "I build products that integrate AI meaningfully, making the experience smarter and faster.",
    tools: [
      "Anthropic API",
      "Prompt Engineering",
      "AI Integration",
      "LLM",
      "Gemini",
    ],
    accent: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-12 py-24 pb-48"
      style={{ background: "#0A0A1B" }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.16) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-indigo-500" />
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            What I Do
          </span>
          <div className="w-8 h-px bg-indigo-500" />
        </div>
        <h2 className="text-white text-5xl font-extrabold tracking-tight mb-4">
          Skills & Services
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
          Design, engineering, and AI in one person. Less back and forth, more
          shipped product.
        </p>
      </div>

      {/* Service cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: service.accent,
              border: `1px solid ${service.border}`,
            }}
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-bold">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              {service.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Tool pills */}
            <div className="flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/30"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom wave into Contact section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path
            d="M0,90 C150,90 300,5 500,10 C680,15 780,90 950,85 C1100,80 1280,35 1440,70 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default Skills;
