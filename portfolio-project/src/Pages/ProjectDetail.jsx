import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetail() {
  const { id } = useParams();

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
            ← Back to Projects
          </Link>

          {/* Project image */}
          <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm mt-8 mb-10">
            Project Image
          </div>

          {/* Project info */}
          <div className="flex flex-col gap-6">
            <span className="w-fit px-3 py-1 bg-indigo-100 text-indigo-500 rounded-full text-xs font-medium">
              Category
            </span>
            <h1 className="text-4xl font-bold text-gray-900">Project Title</h1>
            <p className="text-gray-500 leading-relaxed text-lg">
              A detailed description of the project — what problem it solves,
              what your role was, and what the outcome was.
            </p>

            {/* Meta */}
            <div className="flex gap-12 mt-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Stack</p>
                <p className="text-sm text-gray-700 font-medium">
                  React, Tailwind
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Role</p>
                <p className="text-sm text-gray-700 font-medium">
                  UI/AI Engineer
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Year</p>
                <p className="text-sm text-gray-700 font-medium">2026</p>
              </div>
            </div>

            <a href="#" className="w-fit mt-4">
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
                View Live Project →
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
