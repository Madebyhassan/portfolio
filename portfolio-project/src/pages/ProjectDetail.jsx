import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects, { getProjectById } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  // 404 fallback
  if (!project) {
    return (
      <div>
        <Navbar />
        <section className="px-20 py-24 bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Project not found
            </h1>
            <Link
              to="/"
              className="text-indigo-500 font-medium hover:underline"
            >
              ← Back to Work
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const accent = project.accent || "#6366F1";
  const heroBg = project.heroBg || "#0D0520";

  return (
    <div>
      <Navbar />

      {/* ── BACK BAR ── */}
      <div className="px-20 py-4 bg-white border-b border-gray-200">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
        >
          ← Back to Work
        </Link>
      </div>

      {/* ── HERO ── */}
      <section
        className="px-20 pt-20 pb-24 relative overflow-hidden"
        style={{ background: heroBg }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}55 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full mb-7">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent }}
            />
            {project.category}
          </div>

          {/* Giant title */}
          <h1 className="text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight mb-8">
            {project.title.toUpperCase()}
          </h1>

          {/* Summary */}
          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-12">
            {project.summary}
          </p>

          {/* Meta strip */}
          <div className="flex flex-wrap border-t border-white/10">
            {project.role && (
              <div className="pr-10 mr-10 border-r border-white/10 py-7">
                <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                  My Role
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {project.role}
                </p>
              </div>
            )}
            {project.tools?.length > 0 && (
              <div className="pr-10 mr-10 border-r border-white/10 py-7">
                <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-2">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium text-white/75 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.company && (
              <div className="pr-10 mr-10 border-r border-white/10 py-7">
                <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                  Company
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {project.company}
                </p>
              </div>
            )}
            <div className="py-7">
              <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                Location
              </p>
              <p className="text-sm font-semibold text-white/90">
                Vancouver, BC 🇨🇦
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 border-t border-white/10 py-7">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-bold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ background: accent }}
              >
                View Live Project
              </a>
            ) : (
              <button
                className="text-white text-sm font-bold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ background: accent }}
              >
                View Live Project
              </button>
            )}
            <button className="text-white/70 text-sm font-semibold px-6 py-3 rounded-full border border-white/20 hover:text-white hover:border-white/50 transition-colors">
              View Prototype
            </button>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      <div
        className="w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium relative overflow-hidden"
        style={{ aspectRatio: "16/7" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: accent }}
        />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          "Project Cover Image"
        )}
      </div>

      {/* ── OVERVIEW ── */}
      <section className="px-20 py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              Overview
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              What this project is about
            </h2>
            {project.overview.map((para, i) => (
              <p key={i} className="text-gray-500 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
          {project.stats?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
                    style={{ background: accent }}
                  />
                  <div className="text-[40px] font-extrabold text-gray-900 leading-none mb-1.5">
                    {stat.number}
                    <span style={{ color: accent }}>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT I DID ── */}
      {project.contributions?.length > 0 && (
        <section className="px-20 py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              What I Did
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
              My contributions
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {project.contributions.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{ background: `${accent}20` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {project.process?.length > 0 && (
        <section className="px-20 py-20 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              Process
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
              How I got there
            </h2>
            <div className="flex flex-col gap-12">
              {project.process.map((step, i) => (
                <div
                  key={i}
                  className="grid gap-10 items-start"
                  style={{ gridTemplateColumns: "64px 1fr 1fr" }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest pt-1"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className="bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-xs font-medium"
                    style={{ aspectRatio: "4/3" }}
                  >
                    Image placeholder
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TOOLS ── */}
      {project.tools?.length > 0 && (
        <section className="px-20 py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex items-center gap-12">
            <div className="min-w-[140px]">
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: accent }}
              >
                Tools & Tech
              </p>
              <h3 className="text-xl font-bold text-gray-900">Built with</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool, i) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border-[1.5px]"
                  style={
                    i < 3
                      ? {
                          color: accent,
                          borderColor: accent,
                          background: `${accent}15`,
                        }
                      : {
                          color: "#111827",
                          borderColor: "#9CA3AF",
                          background: "#fff",
                        }
                  }
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL WORK ── */}
      <section className="px-20 py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
            Final Work
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
            The finished product
          </h2>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div
              className="col-span-2 bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm"
              style={{ aspectRatio: "16/6" }}
            >
              Hero screen / Cover mockup
            </div>
            <div
              className="bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm"
              style={{ aspectRatio: "3/4" }}
            >
              Mobile screen 1
            </div>
            <div
              className="bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm"
              style={{ aspectRatio: "3/4" }}
            >
              Mobile screen 2
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {["Detail screen 1", "Detail screen 2", "Detail screen 3"].map(
              (label) => (
                <div
                  key={label}
                  className="bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm"
                  style={{ aspectRatio: "4/3" }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <Link
        to={`/project/${nextProject.id}`}
        className="block px-20 py-16 relative overflow-hidden transition-opacity hover:opacity-90"
        style={{ background: heroBg }}
      >
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}44 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2.5">
              Next Project
            </p>
            <p className="text-4xl font-extrabold text-white">
              {nextProject.title.toUpperCase()} →
            </p>
          </div>
          <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-xl">
            →
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
