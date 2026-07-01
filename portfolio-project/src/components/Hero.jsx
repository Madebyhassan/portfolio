import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  return (
    <section className="flex items-center justify-center px-12 py-24 bg-gray-100">
      <div className="flex items-center gap-16 max-w-6xl w-full">
        {/* Left side — text content */}
        <div className="flex flex-col gap-3 flex-1">
          <span className="w-fit px-1 text-lg font-light text-gray-500">
            Architect turned UX/UI Engineer
          </span>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Designing & Building with{" "}
            <span className="text-indigo-500">AI</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            I'm Hassan, a UX/UI Engineer trained with an architects mindset. I{" "}
            <span className="text-indigo-500 font-bold">DESIGN</span> the
            experiences,{" "}
            <span className="text-indigo-500 font-bold">BUILD</span> the
            frontend, and{" "}
            <span className="text-indigo-500 font-bold">SHIP</span> with AI.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              View my work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-indigo-500 text-sm font-medium hover:underline cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right side — Lottie animation */}
        <div className="shrink-0">
          <img
            src="/Hassan Picture.png"
            alt="Hassan Al-Hashimi"
            className="w-96 h-130 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
