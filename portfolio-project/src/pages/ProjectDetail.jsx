import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects, { getProjectById } from "../data/projects";
import Description from "../components/description";

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [modalImage, setModalImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 404 fallback — also treats hidden projects as not found
  if (!project || project.hidden) {
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

  const accent = project.accent || "#6366F1";
  const heroBg = project.heroBg || "#0D0520";

  const visibleProjects = projects.filter((p) => !p.hidden);
  const currentIndex = visibleProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    visibleProjects[(currentIndex + 1) % visibleProjects.length];

  return (
    <div>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="px-6 md:px-20 pt-28 md:pt-40 pb-16 md:pb-24 relative overflow-hidden"
        style={{ background: heroBg }}
      >
        {/* Back to Work — floats over hero */}
        <Link
          to="/"
          className="absolute top-20 left-6 md:top-24 md:left-20 text-sm text-white/50 hover:text-white transition-colors z-20 flex items-center gap-1.5"
        >
          ← Back to Work
        </Link>

        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}55 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full mb-6 md:mb-7">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent }}
            />
            {project.category}
          </div>

          {/* Giant title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight mb-6 md:mb-8">
            {project.title.toUpperCase()}
          </h1>

          {/* Summary */}
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-8 md:mb-12">
            {project.summary}
          </p>

          {/* Meta strip — single column stack on mobile, horizontal on desktop */}
          <div className="flex flex-col md:flex-row md:flex-wrap border-t border-white/10">
            {project.role && (
              <div className="md:pr-10 md:mr-10 border-b md:border-b-0 md:border-r border-white/10 py-5 md:py-7">
                <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                  My Role
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {project.role}
                </p>
              </div>
            )}
            {project.tools?.length > 0 && (
              <div className="md:pr-10 md:mr-10 border-b md:border-b-0 md:border-r border-white/10 py-5 md:py-7">
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
              <div className="md:pr-10 md:mr-10 border-b md:border-b-0 md:border-r border-white/10 py-5 md:py-7">
                <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                  Company
                </p>
                <p className="text-sm font-semibold text-white/90">
                  {project.company}
                </p>
              </div>
            )}
            <div className="py-5 md:py-7">
              <p className="text-[11px] font-semibold text-white/35 uppercase tracking-widest mb-1.5">
                Location
              </p>
              <p className="text-sm font-semibold text-white/90">
                Vancouver, BC 🇨🇦
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 border-t border-white/10 py-6 md:py-7">
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
      <section className="px-6 md:px-20 py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              What this project is about
            </h2>
            {project.overview.map((para, i) => (
              <p key={i} className="text-gray-500 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
          {project.stats?.length > 0 && (
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
                    style={{ background: accent }}
                  />
                  <div
                    className="text-[28px] md:text-[40px] font-extrabold leading-none mb-1.5"
                    style={{ color: accent }}
                  >
                    {stat.number}
                    <span className="text-gray-900">{stat.suffix}</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium leading-tight">
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
        <section className="px-6 md:px-20 py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              What I Did
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 md:mb-12">
              My contributions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.contributions.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{ background: `${accent}10` }}
                  >
                    <img src={item.icon} alt="icon" className="w-7 h-7" />
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
            <div className="flex flex-col gap-32">
              {project.process.map((step, i) => (
                <div key={i} className="flex flex-col gap-6">
                  {step.layout === "sideImage" ? (
                    <div
                      className="grid grid-cols-1 md:grid-cols-[64px_1fr_var(--side-image-w)] gap-4 md:gap-10 items-start"
                      style={{
                        "--side-image-w": step.imageMaxWidth || "280px",
                      }}
                    >
                      <div
                        className="hidden md:block text-xs font-bold uppercase tracking-widest pt-1"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <div className="flex items-baseline gap-3 md:block mb-2.5">
                          <span
                            className="md:hidden text-xs font-bold uppercase tracking-widest"
                            style={{ color: accent }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 md:mb-2.5">
                            {step.title}
                          </h3>
                        </div>
                        <Description text={step.description} />

                        {/* Columns subsection sits inside this same left column */}
                        {step.columns && (
                          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <div>
                              <span
                                className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                                style={{
                                  background: `${accent}15`,
                                  color: accent,
                                }}
                              >
                                {step.columns.left.label}
                              </span>
                              <div className="flex flex-col gap-3">
                                {step.columns.left.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <div
                                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs"
                                      style={{ background: accent }}
                                    >
                                      ✓
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 bg-gray-100 text-gray-400">
                                {step.columns.right.label}
                              </span>
                              <div className="flex flex-col gap-3">
                                {step.columns.right.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-0.5 text-gray-400 text-xs">
                                      −
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right column on desktop, full-width block on mobile — the vertical process image */}
                      {step.images?.[0] && (
                        <div
                          className="rounded-xl overflow-hidden cursor-pointer w-full md:w-auto"
                          onClick={() => setModalImage(step.images[0])}
                        >
                          <img
                            src={step.images[0]}
                            alt={step.title}
                            className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </div>
                  ) : step.layout === "row" || step.layout === "quotes" ? (
                    /* ── TEXT-ONLY TOP: used by row and quotes layouts ── */
                    <div className="grid grid-cols-1 md:grid-cols-[64px_1fr] gap-4 md:gap-10 items-start">
                      <div
                        className="hidden md:block text-xs font-bold uppercase tracking-widest pt-1"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 md:block mb-2.5">
                          <span
                            className="md:hidden text-xs font-bold uppercase tracking-widest"
                            style={{ color: accent }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 md:mb-2.5">
                            {step.title}
                          </h3>
                        </div>
                        <Description text={step.description} />
                      </div>
                    </div>
                  ) : (
                    /* ── DEFAULT LAYOUT: 3-column grid, image on the right ── */
                    <div className="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-4 md:gap-10 items-start">
                      {/* Number — own column on desktop; inline with title on mobile */}
                      <div
                        className="hidden md:block text-xs font-bold uppercase tracking-widest pt-1"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <div className="flex items-baseline gap-3 md:block mb-2.5">
                          <span
                            className="md:hidden text-xs font-bold uppercase tracking-widest"
                            style={{ color: accent }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 md:mb-2.5">
                            {step.title}
                          </h3>
                        </div>
                        <Description text={step.description} />

                        {/* Interview stat — now sits inside the text column */}
                        {step.interviewStat && (
                          <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center -space-x-3">
                              {step.interviewStat.avatars.map(
                                (avatar, aIndex) => (
                                  <div
                                    key={aIndex}
                                    className="w-11 h-11 rounded-full border-2 border-white bg-gray-50 overflow-hidden flex items-center justify-center"
                                    style={{
                                      zIndex:
                                        step.interviewStat.avatars.length -
                                        aIndex,
                                    }}
                                  >
                                    <img
                                      src={avatar}
                                      alt=""
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ),
                              )}

                              <div
                                className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                                style={{ background: accent }}
                              >
                                +
                              </div>
                            </div>

                            <div>
                              <div
                                className="text-2xl font-extrabold leading-none"
                                style={{ color: accent }}
                              >
                                {step.interviewStat.number}
                                <span>{step.interviewStat.suffix}</span>
                              </div>
                              <p className="text-gray-500 text-xs mt-1 max-w-[350px] leading-snug">
                                {step.interviewStat.label}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Tools used — now sits inside the text column, next to the image */}
                        {step.toolsUsed && (
                          <div className="mt-6 flex flex-col gap-4">
                            {step.toolsUsed.map((tool, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-4"
                              >
                                <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 p-2">
                                  <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <span className="font-semibold text-gray-900 text-sm">
                                    {tool.name}
                                  </span>
                                  <span className="text-gray-500 text-sm">
                                    {" "}
                                    — {tool.description}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {step.images?.length === 1 ? (
                        <div
                          className="rounded-xl overflow-hidden cursor-pointer w-full"
                          style={
                            step.imageMaxWidth
                              ? { maxWidth: step.imageMaxWidth }
                              : undefined
                          }
                          onClick={() => setModalImage(step.images[0])}
                        >
                          <img
                            src={step.images[0]}
                            alt={step.title}
                            className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3 w-full">
                          <div className="grid grid-cols-2 gap-3">
                            {[0, 1].map((imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`bg-gray-100 border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 ${step.images?.[imgIndex] ? "cursor-pointer hover:border-gray-400" : ""}`}
                                style={{ aspectRatio: "4/3" }}
                                onClick={() =>
                                  step.images?.[imgIndex] &&
                                  setModalImage(step.images[imgIndex])
                                }
                              >
                                {step.images?.[imgIndex] ? (
                                  <img
                                    src={step.images[imgIndex]}
                                    alt={`${step.title} ${imgIndex + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">
                                    Image {imgIndex + 1}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          {step.images?.[2] && (
                            <div
                              className="bg-gray-100 border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-gray-400"
                              style={{ aspectRatio: "16/6" }}
                              onClick={() => setModalImage(step.images[2])}
                            >
                              <img
                                src={step.images[2]}
                                alt={`${step.title} 3`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* The Gap — full-width subsection, only when present */}
                  {step.gap && (
                    <div className="pl-[104px] mt-6">
                      <h4 className="text-md font-semibold text-gray-900 mb-4">
                        {step.gap.subheading}
                      </h4>
                      <div className="flex flex-col gap-3">
                        {step.gap.points.map((point, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-gray-500 text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-gray-900">
                              {point.title}
                            </span>{" "}
                            {point.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.layout === "row" &&
                  step.images?.length === 1 &&
                  step.imageMaxWidth ? (
                    <div className="pl-[104px] mt-6">
                      <div
                        className="rounded-xl overflow-hidden cursor-pointer"
                        style={{ maxWidth: step.imageMaxWidth }}
                        onClick={() => setModalImage(step.images[0])}
                      >
                        <img
                          src={step.images[0]}
                          alt={step.title}
                          className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ) : (
                    step.layout === "row" && (
                      <div className="flex flex-col gap-5 pl-[104px]">
                        {step.images?.map((img, imgIndex) => (
                          <div key={imgIndex} className="flex flex-col gap-2">
                            {!step.hideLabels && (
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Concept {imgIndex + 1}
                              </span>
                            )}
                            <div
                              className="rounded-xl overflow-hidden cursor-pointer"
                              onClick={() => setModalImage(img)}
                            >
                              <img
                                src={img}
                                alt={`${step.title} ${imgIndex + 1}`}
                                className="w-full h-auto block hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* Quote + illustration pairs — ONLY for quotes layout */}
                  {step.layout === "quotes" && (
                    <div className="flex flex-col gap-8 pl-[104px]">
                      {step.quotes?.map((item, qIndex) => (
                        <div
                          key={qIndex}
                          className="flex flex-row items-center gap-5"
                        >
                          <img
                            src={item.image}
                            alt={`Quote illustration ${qIndex + 1}`}
                            className="w-24 h-24 object-contain shrink-0"
                          />
                          <p
                            className="italic text-lg leading-relaxed max-w-xl"
                            style={{ color: accent }}
                          >
                            "{item.quote}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {step.subheading && (
                    <h4 className="text-md font-medium text-gray-900 mb-4 pl-[104px]">
                      {step.subheading}
                    </h4>
                  )}
                  {step.problemPoints?.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 pl-[104px]">
                      {step.problemPoints.map((point, pIndex) => (
                        <div
                          key={pIndex}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-5 relative overflow-hidden"
                        >
                          <div
                            className="absolute top-0 left-0 right-0 h-[3px]"
                            style={{ background: accent, opacity: 0.6 }}
                          />
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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

          {project.finalWork?.sections ? (
            /* ── NEW STRUCTURE: sections array, stacked or side-by-side ── */
            <div className="flex flex-col gap-16">
              {project.finalWork.sections.map((section, idx) =>
                section.layout === "sideBySide" ? (
                  <div
                    key={idx}
                    className="grid grid-cols-2 gap-10 items-start"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                        {section.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                        {section.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : (
            /* ── EXISTING STRUCTURE: hero/mobile1/mobile2, used by Cozmos & Monaa ── */
            <>
              {project.finalWork?.description && (
                <p
                  className="text-gray-500 leading-relaxed mb-12"
                  style={{ "--highlight-color": accent }}
                  dangerouslySetInnerHTML={{
                    __html: project.finalWork.description,
                  }}
                />
              )}

              {(() => {
                const isClickable = project.finalWork?.clickable !== false;
                const fitClass =
                  project.finalWork?.fit === "contain"
                    ? "object-contain"
                    : "object-cover";

                return (
                  <>
                    {project.finalWork?.extraImages?.length > 0 && (
                      <div className="flex flex-col gap-10 mb-8">
                        {project.finalWork.extraImages.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-4">
                            {item.label && (
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {item.label}
                              </span>
                            )}
                            <div className="rounded-2xl overflow-hidden">
                              <img
                                src={item.src}
                                alt={item.label || `Final work ${idx + 1}`}
                                className="w-full h-auto block"
                              />
                            </div>
                            {item.prototypeUrl && (
                              <a
                                href={item.prototypeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit text-white text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                                style={{ background: accent }}
                              >
                                Try Prototype →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col gap-4">
                      {project.finalWork?.hero && (
                        <div className="flex flex-col gap-4 mb-4">
                          {project.finalWork.hero.label && (
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                              {project.finalWork.hero.label}
                            </span>
                          )}
                          <div
                            className={`bg-gray-50 rounded-2xl overflow-hidden ${isClickable ? "cursor-pointer hover:border-gray-400" : ""}`}
                            style={{ aspectRatio: "16/6" }}
                            onClick={() =>
                              isClickable &&
                              setModalImage(project.finalWork.hero.src)
                            }
                          >
                            <img
                              src={project.finalWork.hero.src}
                              alt={
                                project.finalWork.hero.label || "Hero screen"
                              }
                              className={`w-full h-full ${fitClass} ${isClickable ? "hover:scale-105 transition-transform duration-300" : ""}`}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex gap-16 mt-10">
                        {project.finalWork?.mobile1 && (
                          <div className="flex flex-col gap-4 max-w-[250px]">
                            {project.finalWork.mobile1.label && (
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {project.finalWork.mobile1.label}
                              </span>
                            )}
                            <div
                              className={`rounded-2xl overflow-hidden ${isClickable ? "cursor-pointer" : ""}`}
                              onClick={() =>
                                isClickable &&
                                setModalImage(project.finalWork.mobile1.src)
                              }
                            >
                              <img
                                src={project.finalWork.mobile1.src}
                                alt={
                                  project.finalWork.mobile1.label ||
                                  "Mobile screen 1"
                                }
                                className={`w-full h-auto block ${isClickable ? "hover:scale-105 transition-transform duration-300" : ""}`}
                              />
                            </div>
                          </div>
                        )}

                        {project.finalWork?.mobile2 && (
                          <div className="flex flex-col gap-4 max-w-[250px]">
                            {project.finalWork.mobile2.label && (
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {project.finalWork.mobile2.label}
                              </span>
                            )}
                            <div
                              className={`rounded-2xl overflow-hidden ${isClickable ? "cursor-pointer" : ""}`}
                              onClick={() =>
                                isClickable &&
                                setModalImage(project.finalWork.mobile2.src)
                              }
                            >
                              <img
                                src={project.finalWork.mobile2.src}
                                alt={
                                  project.finalWork.mobile2.label ||
                                  "Mobile screen 2"
                                }
                                className={`w-full h-auto block ${isClickable ? "hover:scale-105 transition-transform duration-300" : ""}`}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </>
          )}
        </div>
      </section>

      {/* ── WHAT'S NEXT ── */}
      {project.whatsNext && (
        <section
          className="px-20 py-20 border-b border-gray-200"
          style={{ background: `${accent}08` }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              What's Next
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              {project.whatsNext.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {project.whatsNext.description}
            </p>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-5">
              Roadmap
            </h3>
            <div className="flex flex-col gap-4">
              {project.whatsNext.roadmap.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: accent }}
                  />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*Final Work Demo Video*/}
      {project.demoVideo && (
        <section className="px-20 py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold mb-3" style={{ color: accent }}>
              In Action
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
              See the sphere in motion
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <video
                src={project.demoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

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

      {/* ── IMAGE MODAL ── */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl transition-colors z-10 cursor-pointer"
            onClick={() => setModalImage(null)}
          >
            ✕
          </button>
          <img
            src={modalImage}
            alt="Full size view"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
