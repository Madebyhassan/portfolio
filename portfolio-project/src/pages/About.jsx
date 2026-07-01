import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
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
            {/* Photo placeholder */}
            <div className="w-64 h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm flex-shrink-0">
              Your Photo
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <p className="text-indigo-500 text-sm font-medium">About Me</p>
              <h1 className="text-4xl font-bold text-gray-900">
                Designing & Building with AI
              </h1>
              <p className="text-gray-500 leading-relaxed">
                I'm Hassan, a UI/AI Engineer based in Vancouver, BC. I came from
                a background in Architecture and UX/UI Design before moving into
                product development — which means I bring a systems-thinking
                approach to everything I build.
              </p>
              <p className="text-gray-500 leading-relaxed">
                I'm passionate about building AI-powered tools and products that
                are not just functional, but genuinely beautiful and intuitive.
                I believe design and engineering are two sides of the same coin.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
