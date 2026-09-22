import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const outsideLife = [
  {
    image: "/about/imgcaen2.jpg",
    title: "Traveling",
    description: "Exploring new cities whenever I get the chance to.",
  },
  {
    image: "/about/imghike.jpg",
    title: "Hiking",
    description: "Hiking in the mountains and exploring nature.",
  },
  {
    image: "/about/imgpickle.jpg",
    title: "Pickleball",
    description:
      "Playing pickleball with friends while taking part in helping expand pickleball in Vancouver.",
  },
];

const titles = [
  "Brand Designer",
  "UX/AI Engineer",
  "Product Thinker",
  "Architect by training",
];

function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % titles.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const isCore = titles[index] === "UX/AI Engineer";

  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
      <p
        className={`text-lg font-medium tracking-tight transition-all duration-300 ${
          isCore ? "text-indigo-600 font-semibold" : "text-gray-800"
        } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {titles[index]}
      </p>
    </div>
  );
}

function About() {
  const [modalImage, setModalImage] = useState(null);
  return (
    <div>
      <Navbar />

      <section className="px-12 py-24 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="text-indigo-500 text-sm hover:underline mb-12 inline-block"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-16 items-start mt-8">
            {/* Photo + rotating title, as one unit */}
            <div className="w-64 flex flex-col items-center gap-4 flex-shrink-0">
              <div className="w-64 h-80 rounded-2xl overflow-hidden">
                <img
                  src="/about/imgmain.png"
                  alt="Hassan Al-Hashimi"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
              <RotatingTitle />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <p className="text-indigo-500 text-sm font-medium">About Me</p>
              <h1 className="text-4xl font-bold text-gray-900">
                Designing & Building with AI
              </h1>
              <p className="text-gray-500 leading-relaxed">
                I'm Hassan, a{" "}
                <span className="text-indigo-500 font-semibold">
                  UX/AI Engineer
                </span>{" "}
                based in Vancouver, BC. I came from a background in Architecture
                before moving into UX/UI and product development.
              </p>
              <p className="text-gray-500 leading-relaxed">
                I'm passionate about{" "}
                <span className="text-indigo-500 font-semibold">
                  building AI-powered tools and products
                </span>{" "}
                that are not just functional, but genuinely work beautifully and
                intuitively.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Currently actively seeking full-time UX/UI or Product Design
                roles while building my own products on the side.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  "Architecture",
                  "UX/UI Design",
                  "React",
                  "AI & Emerging Tech",
                  "Product Thinking",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-6 text-gray-400">
                <span className="text-sm font-semibold">madebyhassan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-indigo-500 text-sm font-medium mb-3">Outside UX</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Life beyond the screen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outsideLife.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => setModalImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default About;
