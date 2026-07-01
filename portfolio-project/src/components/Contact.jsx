import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="px-12 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* ── LEFT — Info ── */}
        <div className="flex flex-col gap-6">
          <p className="text-indigo-500 text-sm font-medium">Get In Touch</p>
          <h2 className="text-gray-900 text-4xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you within 24 hours.
          </p>

          <hr className="border-gray-100" />

          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <a
              href="mailto:Hassan_Al-Hashimi@hotmail.com"
              className="hover:text-indigo-500 hover:underline transition-colors"
            >
              ✉️ Hassan_Al-Hashimi@hotmail.com
            </a>
            <p>📍 Available Worldwide · Remote</p>
          </div>

          <div className="flex gap-3">
            {["LinkedIn", "Github", "Discord"].map((platform) => (
              <button
                key={platform}
                className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Form ── */}
        <div className="flex flex-col gap-5">
          {/* Success state */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-16 border border-gray-100 rounded-2xl bg-gray-50 h-full">
              <div className="text-5xl">🎉</div>
              <h3 className="text-gray-900 font-bold text-xl">Message sent!</h3>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-indigo-500 text-sm font-medium hover:underline mt-2 cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            // Form
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-400 transition-colors"
                />
                <p className="text-xs text-gray-400">
                  I'll get back to you within 24 hours
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-400 transition-colors resize-none"
                />
                <p className="text-xs text-gray-400">
                  Feel free to be as detailed as you like
                </p>
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-indigo-500 text-white py-4 rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
