function Contact() {
  return (
    <section id="contact" className="px-12 py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left side — info */}
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

          {/* Social links */}
          <div className="flex gap-3">
            {["LinkedIn", "Github", "Discord"].map((platform) => (
              <button
                key={platform}
                className="px-5 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-indigo-400 hover:text-indigo-500 transition-colors"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Right side — form */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
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
              placeholder="John@example.com"
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-400 transition-colors"
            />
            <p className="text-xs text-gray-400">
              I'll get back to you within 24 hours
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-400 transition-colors resize-none"
            />
            <p className="text-xs text-gray-400">
              Feel free to be as detailed as you like
            </p>
          </div>

          <button className="w-full bg-indigo-500 text-white py-4 rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
