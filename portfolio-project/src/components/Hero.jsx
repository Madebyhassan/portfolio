import { motion } from "framer-motion";

// Each badge has its own unique movement signature —
// different y/x/rotate keyframes, duration, and delay
// so they never move in sync with each other.
const badges = [
  {
    id: "figma",
    label: "🎨 Figma",
    position: { top: "-18px", left: "-36px" },
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
    position: { top: "-18px", right: "-36px" },
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
    position: { top: "22%", right: "-60px" },
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
    position: { bottom: "28%", right: "-48px" },
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
    position: { top: "38%", left: "-46px" },
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
    position: { bottom: "18%", left: "-36px" },
    y: [0, -9, 5, -7, 0],
    x: [0, 3, -5, 2, 0],
    rotate: [0, -0.8, 1.5, -1, 0],
    duration: 5.8,
    delay: 1.3,
    className: "bg-yellow-500/15 border-yellow-500/25 text-yellow-300",
  },
];

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden p-24 pb-40"
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
      <div className="max-w-6xl w-full mx-auto px-12 pt-24 flex items-center gap-20">
        {/* ── LEFT: Text ── */}
        <div className="flex-1 flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Architect turned UX/AI Engineer
            </span>
          </div>

          <h1 className="font-extrabold text-white leading-none tracking-tight">
            <span className="text-7xl text-white">From</span>{" "}
            <span className="text-7xl text-indigo-500">Figma </span>{" "}
            <span className="text-7xl text-white">to</span>{" "}
            <span className="text-7xl text-indigo-500">Frontend</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed max-w-md">
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
              className="bg-indigo-500 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition-colors cursor-pointer"
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
          <div className="flex items-center gap-10 pt-8 border-t border-white/10">
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

        {/* ── RIGHT: Photo + floating badges ── */}
        <div className="relative shrink-0">
          {/* Glow behind photo */}
          <div
            className="absolute -inset-8 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)",
            }}
          />

          {/* Photo */}
          <div
            className="relative w-80 rounded-2xl overflow-hidden border border-white/10"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src="/home/Hassan Picture.png"
              alt="Hassan Al-Hashimi"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          </div>

          {/* Floating badges */}
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className={`absolute backdrop-blur-sm border rounded-full px-3 py-1.5 text-xs font-medium hidden md:block ${badge.className}`}
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
