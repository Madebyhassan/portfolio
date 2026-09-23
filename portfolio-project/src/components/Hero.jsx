import { motion } from "framer-motion";

// Each badge has its own unique movement signature —
// different y/x/rotate keyframes, duration, and delay
// so they never move in sync with each other.
// Positions are now percentages of the photo container's own size,
// so badges scale proportionally at any container width — no more
// fixed pixel offsets that overflow on narrower (tablet) screens.
const badges = [
  {
    id: "figma",
    label: "🎨 Figma",
    position: { top: "-6%", left: "-14%" },
    y: [0, -10, 4, -7, 0],
    x: [0, 4, -2, 3, 0],
    rotate: [0, 1.5, -1, 0.8, 0],
    duration: 5.2,
    delay: 0,
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "react",
    label: "⚛️ React",
    position: { top: "-6%", right: "-14%" },
    y: [0, -6, 9, -4, 0],
    x: [0, -3, 4, -2, 0],
    rotate: [0, -1, 1.5, -0.5, 0],
    duration: 4.8,
    delay: 0.6,
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "anthropic",
    label: "🤖 Anthropic",
    position: { top: "22%", right: "-22%" },
    y: [0, 8, -5, 7, 0],
    x: [0, 3, -4, 2, 0],
    rotate: [0, 0.8, -1.2, 0.5, 0],
    duration: 6.0,
    delay: 1.0,
    className: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300",
  },
  {
    id: "html",
    label: "</> HTML",
    position: { bottom: "28%", right: "-18%" },
    y: [0, -8, 6, -9, 0],
    x: [0, -2, 5, -3, 0],
    rotate: [0, -1.5, 0.8, -1, 0],
    duration: 5.6,
    delay: 0.3,
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "css",
    label: "{} CSS",
    position: { top: "38%", left: "-17%" },
    y: [0, 7, -8, 5, 0],
    x: [0, -4, 2, -3, 0],
    rotate: [0, 1, -0.8, 1.2, 0],
    duration: 4.5,
    delay: 0.8,
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "js",
    label: "JS",
    position: { bottom: "18%", left: "-14%" },
    y: [0, -9, 5, -7, 0],
    x: [0, 3, -5, 2, 0],
    rotate: [0, -0.8, 1.5, -1, 0],
    duration: 5.8,
    delay: 1.3,
    className: "bg-yellow-500/15 border-yellow-500/25 text-yellow-300",
  },
];

// Static version of the same badges for the mobile row — no motion, no positioning
const staticBadges = [
  {
    id: "figma",
    label: "🎨 Figma",
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "react",
    label: "⚛️ React",
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "anthropic",
    label: "🤖 Anthropic",
    className: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300",
  },
  {
    id: "html",
    label: "</> HTML",
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "css",
    label: "{} CSS",
    className: "bg-white/10 border-white/15 text-white/80",
  },
  {
    id: "js",
    label: "JS",
    className: "bg-yellow-500/15 border-yellow-500/25 text-yellow-300",
  },
];

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-16 md:p-16 lg:p-24 md:pb-32 lg:pb-40"
      style={{ background: "#0A0A1B" }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(139,92,246,0.1) 0%, transparent 55%)",
        }}
      />

      {/* Main content */}
      <div className="max-w-6xl w-full mx-auto md:px-8 lg:px-12 pt-16 md:pt-20 lg:pt-24 flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        {/* ── TEXT ── */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-7 w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Architect turned UX/AI Engineer
            </span>
          </div>

          <h1 className="font-extrabold text-white leading-tight md:leading-none tracking-tight">
            <span className="text-4xl md:text-5xl lg:text-7xl text-white">
              From{" "}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl text-indigo-500">
              Figma{" "}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl text-white">
              to{" "}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl text-indigo-500">
              Frontend
            </span>
          </h1>

          {/* ── PHOTO + BADGES — mobile only, sits between headline and description ── */}
          <div className="md:hidden flex flex-col items-center gap-5 w-full">
            <div className="relative shrink-0">
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                className="relative w-56 rounded-2xl overflow-hidden border border-white/10"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src="/home/hassan-picture.png"
                  alt="Hassan Al-Hashimi"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs">
              {staticBadges.map((badge) => (
                <span
                  key={badge.id}
                  className={`backdrop-blur-sm border rounded-full px-3 py-1.5 text-xs font-medium ${badge.className}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
            I'm Hassan, a UX/AI Engineer. I{" "}
            <span className="text-indigo-500 font-bold">design</span> the
            experience, <span className="text-indigo-500 font-bold">build</span>{" "}
            the frontend, and integrate{" "}
            <span className="text-indigo-500 font-bold">AI</span> to deliver
            end-to-end products with speed and precision.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-indigo-500 text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              View my work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/80 text-sm font-medium hover:text-white transition-colors cursor-pointer"
            >
              Let's Talk →
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-6 md:gap-8 lg:gap-10 pt-8 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl font-extrabold text-indigo-500">
                3<span className="text-white">+</span>
              </div>
              <div className="text-xs text-white/80 mt-1 leading-tight">
                Years designing
                <br />& building
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-extrabold text-indigo-500">
                12<span className="text-white">+</span>
              </div>
              <div className="text-xs text-white/80 mt-1 leading-tight">
                Projects
                <br />
                shipped
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-extrabold text-indigo-500">
                5<span className="text-white">+</span>
              </div>
              <div className="text-xs text-white/80 mt-1 leading-tight">
                AI tools
                <br />
                integrated
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Photo + floating badges — tablet & desktop ── */}
        <div className="hidden md:block relative shrink-0">
          <div
            className="absolute -inset-8 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)",
            }}
          />

          {/* Photo shrinks at md, full size at lg — badges below use % so they scale with it */}
          <div
            className="relative w-56 md:w-64 lg:w-80 rounded-2xl overflow-hidden border border-white/10"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/home/hassan-picture.png"
              alt="Hassan Al-Hashimi"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          </div>

          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className={`absolute backdrop-blur-sm border rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[11px] md:text-xs font-medium whitespace-nowrap ${badge.className}`}
              style={badge.position}
              animate={{ y: badge.y, x: badge.x, rotate: badge.rotate }}
              transition={{
                duration: badge.duration,
                delay: badge.delay,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              {badge.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
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

export default Hero;
