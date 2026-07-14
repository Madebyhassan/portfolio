// src/data/projects.js
// Single source of truth for all project data.
// Both Work.jsx (carousel cards) and ProjectDetail.jsx (case study pages) import from here.
// To update any project content, change it here and it updates everywhere automatically.

const projects = [
  {
    id: 1,
    slug: "cozmos",
    title: "Cozmos",
    category: "UX Design · Brand Design",
    categoryColor: "bg-indigo-100 text-indigo-500",
    accent: "#7C3AED",
    heroBg: "#0D0520",
    image: "/cozmos/Cozmos.png",
    summary:
      "A social platform for content creators — connecting influencers with brands authentically, without sacrificing their personal voice.",
    role: "UX Design · Brand Design",
    company: "Cozmos Inc.",
    year: "2024",
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Canva",
      "Notion",
      "Miro",
    ],
    liveUrl: null,
    githubUrl: null,
    overview: [
      "Cozmos is a platform built for the modern content creator — a space where influencers can connect with brands authentically without sacrificing their personal voice. The core challenge was designing a system that felt natural to creators while delivering measurable results for brands.",
      "My role spanned from early UX research through to high-fidelity UI delivery and brand identity design. The result was a product that increased customer sign-ups and meaningfully improved click-through rates across campaigns.",
    ],
    stats: [
      { number: "60", suffix: "%", label: "Increase in click-through rate" },
      { number: "3", suffix: "x", label: "Growth in customer sign-ups" },
      { number: "12", suffix: "k", label: "Active creators on platform" },
      { number: "4", suffix: "mo", label: "From concept to launch" },
    ],
    contributions: [
      {
        icon: "🎨",
        title: "Brand Design",
        description:
          "Developed the visual identity from scratch — logo, color system, typography, and brand guidelines used across all marketing touchpoints.",
      },
      {
        icon: "📐",
        title: "UX Design",
        description:
          "Led user research, journey mapping, and wireframing. Designed and tested flows for both the creator and brand-side experiences.",
      },
      {
        icon: "📱",
        title: "UI & Prototyping",
        description:
          "Delivered high-fidelity screens and interactive Figma prototypes used directly for developer handoff and investor presentations.",
      },
    ],
    process: [
      {
        title: "Research & Discovery",
        description:
          "Started with in-depth interviews with content creators and brand managers to understand their frustrations with existing platforms. Identified a key gap: creators felt existing tools made them feel like ad machines, not authentic voices.",
      },
      {
        title: "Defining the Problem",
        description:
          "Synthesised research into a clear problem statement: creators needed a platform that let them maintain their voice while brands needed measurable performance. The solution had to serve both without compromise.",
      },
      {
        title: "Design & Iteration",
        description:
          "Built low-fidelity wireframes, ran usability tests with 8 creators, and iterated based on findings. Key insight: onboarding needed to feel personal from the first screen, not transactional.",
      },
    ],
  },

  {
    id: 2,
    slug: "ux-feedback-assistant",
    title: "UX Feedback Assistant",
    category: "UX/UI Design · Frontend · AI",
    categoryColor: "bg-emerald-100 text-emerald-600",
    accent: "#6366F1",
    heroBg: "#0A0A1B",
    image: "/ux-app/UX Assistant.png",
    summary:
      "An AI-powered design analysis tool that tests UI/UX submissions against a curated rubric of 50+ established principles — delivering structured, source-cited feedback in seconds.",
    role: "UI/UX Design · Frontend Dev · AI Engineering",
    company: null,
    year: "2025",
    tools: ["React", "Tailwind CSS", "Anthropic API", "Vercel", "Figma"],
    liveUrl: "https://my-uxassistant.vercel.app",
    githubUrl: null,
    overview: [
      "The UX Feedback Assistant is a fully designed and built AI-powered tool that gives designers structured, reliable UX feedback grounded in real published frameworks — not opinions.",
      "Users describe their design, upload a file, or paste a live URL. The tool evaluates the submission against a curated rubric of 50+ UX principles and returns a structured analysis — a UX Score Card, severity-ordered issues, and a What/Why/How breakdown for every finding.",
      "This project represents the full UI/AI Engineer loop — from wireframes in Figma to a deployed React application with a live AI backend doing genuine analytical work.",
    ],
    stats: [
      {
        number: "50",
        suffix: "+",
        label: "UX principles in the evaluation rubric",
      },
      {
        number: "3",
        suffix: "",
        label: "Input methods — text, file upload, URL screenshot",
      },
      {
        number: "5",
        suffix: "",
        label:
          "Scored dimensions — usability, hierarchy, accessibility, flow, copy",
      },
      {
        number: "∞",
        suffix: "",
        label: "Designs analysed — live and free to use",
      },
    ],
    contributions: [
      {
        icon: "🎨",
        title: "UI/UX Design",
        description:
          "Designed the full product in Figma — from low-fi wireframes through high-fidelity UI. Applied my own design system and documented every decision with UX principle citations.",
      },
      {
        icon: "⚛️",
        title: "React Development",
        description:
          "Built the entire frontend in React with Tailwind CSS. Component architecture, state management, conditional rendering, custom hooks, and Vercel serverless functions for the API layer.",
      },
      {
        icon: "🤖",
        title: "AI & Prompt Engineering",
        description:
          "Engineered the system prompt — a 50+ principle UX rubric that instructs Claude to evaluate designs systematically. Every piece of feedback is traceable to a published source.",
      },
    ],
    process: [
      {
        title: "Product Definition & Scoping",
        description:
          "Defined the core problem: designers need reliable, structured feedback they can act on immediately. Scoped the MVP — multi-input methods, focus toggles, What/Why/How output, and a UX Score Card with dimension filtering.",
      },
      {
        title: "Wireframing & UX Design",
        description:
          "Built low-fi to mid-fi wireframes covering all app states — input, loading, and results. Every design decision was annotated with the UX principle it applies before any code was written.",
      },
      {
        title: "Prompt Engineering & Rubric Design",
        description:
          "Researched and compiled 50+ UX principles across 5 frameworks — Nielsen's Heuristics, the 21 Laws of UX, WCAG 2.1, UX content standards, and the Designlab critique framework — into a system prompt used for every analysis.",
      },
      {
        title: "React Build & Deployment",
        description:
          "Translated the Figma designs into a working React application, built the serverless API layer on Vercel, and shipped the live tool end to end.",
      },
    ],
  },

  {
    id: 3,
    slug: "monaa",
    title: "Monaa",
    category: "UX Design · UX Research",
    categoryColor: "bg-pink-100 text-pink-500",
    accent: "#EC4899",
    heroBg: "#1A0510",
    image: "monaa/Monaa-full.png",
    summary:
      "A women's health app helping users manage PCOS symptoms through intelligent habit tracking — improving overall user engagement by 15%.",
    role: "UX Designer",
    company: null,
    year: "2023",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Sketch", "Canva"],
    liveUrl: null,
    githubUrl: null,
    overview: [
      "Monaa is a women's health app designed to help users understand and manage their PCOS symptoms through daily habit tracking, personalised insights, and a compassionate user experience.",
      "The core challenge was designing for a deeply personal and often overwhelming health condition — one that affects 1 in 10 women globally. The goal was to make symptom management feel empowering, not clinical.",
    ],
    stats: [
      { number: "15", suffix: "%", label: "Improvement in user engagement" },
      {
        number: "1",
        suffix: " in 10",
        label: "Women affected by PCOS globally",
      },
      { number: "6", suffix: "mo", label: "Research to final design" },
      { number: "8", suffix: "+", label: "User interviews conducted" },
    ],
    contributions: [
      {
        icon: "🔍",
        title: "Research",
        description:
          "Conducted qualitative and quantitative research including user interviews, surveys, and competitive analysis to deeply understand PCOS patient needs and frustrations.",
      },
      {
        icon: "📐",
        title: "UX Design",
        description:
          "Translated research insights into user flows, wireframes, and interaction patterns. Designed a system that makes daily tracking feel effortless and non-clinical.",
      },
      {
        icon: "📱",
        title: "UI & Prototyping",
        description:
          "Delivered a high-fidelity mobile prototype with a warm, approachable visual identity — tested with real users and iterated based on feedback.",
      },
    ],
    process: [
      {
        title: "Research & Empathy",
        description:
          "Spoke with women managing PCOS to understand their daily challenges. Found that existing apps were either too clinical or too generic — missing the emotional dimension of chronic condition management.",
      },
      {
        title: "Defining the Problem",
        description:
          "Synthesised findings into a clear problem: users needed a way to track symptoms that felt personal and supportive, not like filling out a medical form. Defined core user personas and journey maps.",
      },
      {
        title: "Design & Testing",
        description:
          "Built wireframes focused on reducing friction in daily logging. Ran usability tests and refined the habit-tracking flow, onboarding, and component guidelines based on direct user feedback.",
      },
    ],
  },

  {
    id: 4,
    slug: "max-aspire",
    title: "MAX Aspire",
    category: "UI/UX Design · Product Design",
    categoryColor: "bg-yellow-100 text-yellow-600",
    accent: "#D97706",
    heroBg: "#0D0800",
    image: "/max-aspire/MAX Aspire.png",
    summary:
      "A professional networking platform for the Muslim community — connecting aspiring professionals with jobs, mentors, and communities to collaborate, grow, and belong.",
    role: "UI/UX Design",
    company: "MAX — Muslims Achieving Excellence",
    year: "2024",
    tools: ["Figma", "Canva", "Gen AI"],
    liveUrl: null,
    githubUrl: null,
    overview: [
      "MAX Aspire is a LinkedIn-style platform built specifically for Muslim professionals — a space to connect, collaborate, and grow within a community that shares values and ambitions.",
      "The platform brings together job listings, professional networking, community groups, and mentorship under one roof. My role covered the full product design — from core UI components through to the platform's visual identity and launch materials.",
    ],
    stats: [
      { number: "3", suffix: "+", label: "Core platform features designed" },
      { number: "2", suffix: "x", label: "Mobile & desktop versions shipped" },
      {
        number: "1",
        suffix: "M+",
        label: "Muslim professionals targeted globally",
      },
      { number: "∞", suffix: "", label: "Community potential to unlock" },
    ],
    contributions: [
      {
        icon: "📐",
        title: "Platform Design",
        description:
          "Designed core platform screens across web and mobile — newsfeed, job listings, messaging, notifications, and community views. Focused on clarity and ease of use for professional users.",
      },
      {
        icon: "🎨",
        title: "Brand & Visual Identity",
        description:
          "Developed the Aspire visual identity — a premium navy and gold system that reflects excellence, trust, and cultural pride. Applied across the platform and all launch marketing materials.",
      },
      {
        icon: "🤖",
        title: "Gen AI Integration",
        description:
          "Used generative AI tools to accelerate visual production — creating launch assets, mockups, and marketing content that brought the brand to life quickly and consistently.",
      },
    ],
    process: [
      {
        title: "Understanding the Community",
        description:
          "Researched the needs of Muslim professionals — a community underserved by existing platforms. Identified the core jobs to be done: find opportunities, build meaningful connections, and grow within a trusted network.",
      },
      {
        title: "Designing the Platform",
        description:
          "Built out the full UI across web and mobile — job search with smart filtering, a professional newsfeed, direct messaging, and community groups. Each screen designed to feel familiar yet distinctly Aspire.",
      },
      {
        title: "Launch & Brand Materials",
        description:
          "Produced the full suite of launch assets — platform mockups, marketing visuals, and brand materials using Canva and Gen AI. Delivered a cohesive brand experience from product to promotion.",
      },
    ],
  },
];

export default projects;

// Helper used by ProjectDetail.jsx to find a project by its URL id param
export function getProjectById(id) {
  return projects.find((p) => String(p.id) === String(id));
}
