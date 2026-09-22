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
      "Empowering influencers to connect smarter — through a branded platform that turns their identity into a powerful product showcase.",
    role: "UX Design · Brand Design",
    company: "Cozmos",
    year: "2024",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
    liveUrl: "https://www.cozmos.world/en/cozmos_world",
    githubUrl: null,
    overview: [
      "Cozmos is a platform built for the modern content creator, giving influencers a unique and personalised sphere to showcase and market their brand more effectively.",
      "My role spanned from early UX research through to high-fidelity UI delivery and brand identity design.",
    ],
    stats: [
      { number: "60", suffix: "%", label: "Increase in click-through rate" },
      { number: "100", suffix: "+", label: "Growth in customer sign-ups" },
      { number: "1", suffix: "k", label: "Active creators on platform" },
      { number: "4", suffix: "mo", label: "From concept to launch" },
    ],
    contributions: [
      {
        icon: "/cozmos/logos/brand.svg",
        title: "Brand Design",
        description:
          "Developed the visual identity and improved the overall brand experience.",
      },
      {
        icon: "/cozmos/logos/figma.svg",
        title: "UX Design",
        description:
          "Led user research, journey mapping, and wireframing. Designed and tested for brand experience.",
      },
      {
        icon: "/cozmos/logos/ui.svg",
        title: "UI & Prototyping",
        description:
          "Delivered high-fidelity screens and Figma components to integrate within Cozmos' existing platform.",
      },
    ],
    process: [
      {
        title: "Researching the Landscape",
        description:
          "Analysed existing link-in-bio platforms such as Beacons, Linktree, Komi, and others, to understand how creators were currently showcasing their brand and content.",
        images: ["/cozmos/link-in-bio.svg"],
      },
      {
        title: "Identifying Pain Points",
        description:
          "Translated the research into five recurring issues, from information overload to low engagement that were consistently holding creators back.",
        images: ["/cozmos/cozmos-problems.png"],
      },
      {
        title: "Designing the Solutions",
        description:
          "Converted each pain point into a concrete platform feature, building a system creators could use to showcase their brand more effectively.",
        images: ["/cozmos/cozmos-solutions.png"],
      },
      // keep your existing "Design & Iteration" step here if you still want it after these
      {
        title: "Defining User Needs & Concept Design",
        description:
          "Researched a clear problem statement: creators needed a platform that let them maintain their voice while brands needed measurable performance.",
        images: [
          "/cozmos/brand-images-ie.png", // top left
          "/cozmos/colour-palette-ie.png", // top right
          "/cozmos/theme.svg", // wide bottom
        ],
      },
      {
        title: "Design & Iteration",
        description:
          "Built low-fidelity wireframes, ran usability tests with several creators, and iterated based on findings. The creator IMAETERNAL that we tested with had unique needs and helped us refine the platform to be more inclusive of different creator types.",
        layout: "row",
        images: [
          "/cozmos/ie-draft1.svg",
          "/cozmos/ie-draft2.svg",
          "/cozmos/ie-draft3.svg",
          // add as many as you like
        ],
      },
    ],
    // Cozmos — keep edge-to-edge cropped look:
    finalWork: {
      fit: "cover", // or omit — cover is the default
      hero: { src: "/cozmos/IEfinal.svg", label: "Cover mockup" },
      mobile1: { src: "/cozmos/ie_mobile1.svg", label: "Mobile view 1" },
      mobile2: { src: "/cozmos/ie_mobile2.svg", label: "Mobile view 2" },
    },
    demoVideo: {
      src: "/cozmos/ie_video.mp4",
      heading: "See the sphere in motion",
    },
  },

  {
    id: 2,
    slug: "paliux",
    title: "Paliux",
    category: "UX/UI Design · Frontend · AI",
    categoryColor: "bg-emerald-100 text-emerald-600",
    accent: "#2A408D",
    heroBg: "#0B1129",
    image: "/paliux/logo+text.svg",
    summary:
      "An AI-powered design analysis tool that evaluates user experiences and interfaces and provides structured, data-tested feedback.",
    role: "UX/UI Design · Frontend · AI Engineering",
    company: "Paliux",
    year: "2026",
    tools: ["React", "Tailwind CSS", "Anthropic API", "Vercel", "Figma"],
    liveUrl: "https://my-uxassistant.vercel.app",
    githubUrl: "https://github.com/Madebyhassan/ux-extension.git",
    overview: [
      "Paliux gives designers structured, reliable UX feedback tested against a curated rubric of 30+ established principles.",
      "Users submit their designs and receive a structured analysis, a UX Score Card, severity-ordered issues, and a What/Why/How breakdown for every finding.",
    ],
    stats: [
      {
        number: "30",
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
        number: "90",
        suffix: "%",
        label: "Accuracy of AI feedback through data testing and validation",
      },
    ],
    contributions: [
      {
        icon: "/paliux/logos/figma.svg",
        title: "UI/UX Design",
        description:
          "Designed and developed the product in Figma and React. From low-fi wireframes, high fidelity iterations and a complete design system.",
      },
      {
        icon: "/paliux/logos/React.svg",
        title: "React Development",
        description:
          "Built the entire frontend in React with Tailwind CSS. Component architecture, state management, conditional rendering, custom hooks, and Vercel serverless functions for the API layer.",
      },
      {
        icon: "/paliux/logos/Claude.svg",
        title: "AI & Prompt Engineering",
        description:
          "Engineered the system prompt, integrating a 30+ principle UX rubric that instructs anthropic to evaluate designs systematically. Every piece of feedback is traceable to a published source.",
      },
    ],
    process: [
      {
        title: "Problem & Solution",
        description:
          "Designers often receive linear feedback with no research based improvements. The goal was to build a tool that provides actionable feedback with data-driven insights.",
        images: ["/paliux/process/persona.svg"],
      },
      {
        title: "Research",
        description: [
          "Analysed existing AI design critique tools such as Spec AI, UX Pilot, and Figma's own review assistant.",
          "There was a consistent gap across these tools:",
        ],
        images: ["/paliux/process/Competitor Grid.svg"],
        gap: {
          subheading: "The Gap",
          points: [
            {
              title: "Stops at Feedback.",
              text: "These tools end at feedback — it provides information but doesn't generate a visual fix, code, or a one-click apply.",
            },
            {
              title: "Limited Application Use.",
              text: "None work on a live, deployed website end to end.",
            },
            {
              title: "Low Reliability.",
              text: "Feedback is opinion based with no cited source or principle.",
            },
          ],
        },
      },
      {
        title: "Ideation (Features & Development)",
        description:
          "Applied an 80/20 approach to scope the MVP. Prioritised the features that delivered the most value fastest — multiple input methods, focus area selection, and a structured Score Card with What/Why/How feedback — while deferring anything that wasn't core to the first release.",
        images: ["/paliux/process/Process Steps.svg"],
        layout: "sideImage",
        imageMaxWidth: "250px",
        columns: {
          left: {
            label: "In Scope — V1",
            items: [
              "3 input methods — text description, file upload, live URL screenshot",
              "54+ UX principles — Nielsen, WCAG 2.1, Laws of UX, Content Standards",
              "Two-step pipeline — detects component type, then targets relevant principles",
              "Dimension filtering — choose which of 5 areas to evaluate",
              "Structured What / Why / How feedback with source citations",
              "UX Score Card — overall /10 plus 5 filterable dimension scores",
            ],
          },
          right: {
            label: "Cut For Later",
            items: [
              "Visual fix previews — rendered before/after component",
              "Generated code — copy/paste fix snippets per issue",
              "Session history — last 5 analyses saved",
              "Chrome extension — analyse any live site from the toolbar",
              "Team accounts — shared workspace and collaboration",
              "Platform integrations — Figma, Webflow, Framer plugins",
            ],
          },
        },
      },
      {
        title: "Wireframing & UX Design",
        description:
          "Built low-fi to mid-fi wireframes covering all app states — input, loading, and results. Every design decision was annotated with the UX principle it applies before any code was written.",
        layout: "row",
        hideLabels: true,
        images: [
          "/paliux/process/State 1.svg",
          "/paliux/process/State 2.svg",
          "/paliux/process/State 3.svg",
        ],
      },
      {
        title: "Prompt Engineering & Rubric Design",
        description:
          "Researched and compiled 30+ UX principles across 5 frameworks — Nielsen's Heuristics, the 21 Laws of UX, WCAG 2.1, UX content standards, and the Designlab critique framework — into a system prompt used for every analysis.",
        images: ["/paliux/process/Principles.svg"],
      },
      {
        title: "React Build & Deployment",
        description:
          "Translated the Figma designs into a working React application, built the serverless API layer on Vercel, and shipped the live tool end to end.",
        images: ["/paliux/process/Input Screenshot.png"],
        toolsUsed: [
          {
            logo: "/paliux/logos/React.svg",
            name: "React",
            description: "Built the entire frontend application",
          },
          {
            logo: "/paliux/logos/Vercel.svg",
            name: "Vercel",
            description: "Hosting and serverless API functions",
          },
          {
            logo: "/paliux/logos/Anthropic.svg",
            name: "Anthropic",
            description: "Powers the AI analysis engine",
          },
          {
            logo: "/paliux/logos/Claude.svg",
            name: "Claude",
            description: "The model performing UX evaluation",
          },
          {
            logo: "/paliux/logos/Supabase.svg",
            name: "Supabase",
            description: "Database for evaluation and testing",
          },
          {
            logo: "/paliux/logos/VS Code.svg",
            name: "VS Code",
            description: "Development environment",
          },
          {
            logo: "/paliux/logos/ScreenshotOne.svg",
            name: "ScreenshotOne",
            description: "Captures live URL screenshots for analysis",
          },
        ],
      },
    ],

    finalWork: {
      sections: [
        {
          layout: "stacked",
          title: "Paliux Extension - Before Scan",
          description:
            "This is an example of the extension before the scan is run.",
          image: "/paliux/final/beforescan.svg",
        },
        {
          layout: "stacked",
          title: "Paliux Extension - After Scan",
          description: "This shows the results after the scan is complete.",
          image: "/paliux/final/afterscan.svg",
        },
        {
          layout: "sideBySide",
          title: "Paliux Extension - Platform View",
          description: "The extension platform on its own.",
          image: "/paliux/final/finalapp.svg",
        },
      ],
    },
    whatsNext: {
      heading: "Where Paliux is headed",
      description:
        "Paliux is live and shipping real value today, but this is just the first release. The roadmap focuses on closing the gap we identified in research — moving from feedback to fix, and extending Paliux beyond a single design submission into a tool designers reach for throughout their entire workflow.",
      roadmap: [
        "Visual fix previews — see a rendered before/after of the suggested change, not just a text description",
        "Generated code snippets — copy/paste fixes for common issues directly into your project",
        "Chrome extension — analyse any live site instantly from the browser toolbar",
        "Session history — save and revisit the last several analyses",
        "Team accounts — shared workspaces for design teams to collaborate on feedback",
        "Platform integrations — bring Paliux feedback directly into Figma, Webflow, and Framer",
      ],
    },
  },

  {
    id: 3,
    slug: "monaa",
    title: "Monaa",
    category: "UX Design · UX Research",
    categoryColor: "bg-pink-100 text-pink-500",
    accent: "#EC4899",
    heroBg: "#1A0510",
    image: "/monaa/Monaa-full.png",
    summary:
      "A women's health app helping users manage PCOS symptoms through intuitive habit tracking — Improved user engagement by 15%.",
    role: "UX Designer",
    company: "Monaa",
    year: "2023",
    tools: ["Figma", "Adobe Photoshop", "Sketch", "Canva"],
    liveUrl: null,
    githubUrl: null,
    overview: [
      "Monaa is a women's health app designed to help users understand and manage their PCOS symptoms through daily habit tracking, personalised insights, and a compassionate user experience.",
      "The core challenge was designing for a deeply personal and often overwhelming health condition, one that affects 1 in 10 women globally.",
    ],
    stats: [
      { number: "15", suffix: "%", label: "Improvement in user engagement" },
      {
        number: "1",
        suffix: " in 10",
        label: "Women affected by PCOS globally",
      },
      { number: "6", suffix: "mo", label: "Research to final design" },
      { number: "30", suffix: "+", label: "User interviews conducted" },
    ],
    contributions: [
      {
        icon: "/monaa/logos/research.svg",
        title: "Research",
        description:
          "Conducted qualitative and quantitative research including user interviews, surveys, and competitive analysis to deeply understand PCOS patient needs and frustrations.",
      },
      {
        icon: "/monaa/logos/figma.svg",
        title: "UX Design",
        description:
          "Translated research insights into user flows, wireframes, and interaction patterns. Designed a system that makes daily tracking feel effortless and non-clinical.",
      },
      {
        icon: "/monaa/logos/ui.svg",
        title: "UI & Prototyping",
        description:
          "Delivered a high-fidelity mobile prototype with a warm, approachable visual identity — tested with real users and iterated based on feedback.",
      },
    ],
    process: [
      {
        title: "Researching the Landscape",
        description: [
          "PCOS (Polycystic Ovary Syndrome) is a common problem that affects millions of women around the world. Managing the symptoms can be difficult and cause a long term distruptions in day-to-day life.",
          "The goal is to develop an app for women to help control and manage their symptoms to prevent further health probems.",
        ],
        interviewStat: {
          number: "30",
          suffix: "+",
          label: "User interviews conducted with women managing PCOS",
          avatars: [
            "/monaa/avatar2.svg",
            "/monaa/avatar3.svg",
            "/monaa/avatar5.svg",
          ],
        },
        images: ["/monaa/comp-analysis.svg", "/monaa/persona.svg"],
      },
      {
        title: "Identifying Pain Points",
        description: "Recurring issues identified through interviews.",
        layout: "quotes",
        quotes: [
          {
            quote:
              "I didn't think I'd have to worry about any of that stuff in my twenties at all",
            image: "/monaa/think1.svg",
          },
          {
            quote:
              "Searching for information was very frustrating. I found it difficult to find what will help you and trying to understand it.",
            image: "/monaa/think2.svg",
          },
          {
            quote:
              "I left my appointment feeling like my PCOS wasn't serious enough for referrals or extra help.",
            image: "/monaa/think3.svg",
          },
        ],
        subheading: "Key Problems Identified",
        problemPoints: [
          "PCOS treatments require a lot of trial and error to find what works vs what does not.",
          "Existing apps don't account for the emotional toll of managing a chronic condition.",
          "It can be overwhelming and stressful to find information to understand your current condition.",
          "PCOS can affect anyone and can happen anytime which can be challenging, especially to young women.",
        ],
      },
      {
        title: "Designing the Solutions",
        description:
          "Designed the design system and visual consistency to create a foundation where all the features and components can be built upon.",
        images: ["/monaa/Visual Info UI.png"],
      },
      {
        title: "Defining User Needs & Concept Design",
        description:
          "Translated user journeys into low-fi and high-fi wireframes to address the needs of users who needed a way to track symptoms, primarily to help remove friction and introduce an intuitive and customizable habit system.",
        layout: "row",
        images: ["/monaa/Routine1.svg", "/monaa/Routine2.svg"],
      },
      {
        title: "Design & Testing",
        description:
          "Developed further and introduced key features such as daily logging, customized habits, progress tracking and insights. Ran usability tests and refined components and user flows based on direct user feedback.",
        layout: "row",
        images: ["/monaa/Routine2.5.svg"],
      },
    ],

    finalWork: {
      clickable: false,
      fit: "contain",
      description:
        "The final designs were specifically focused on improving the features in <span class='highlight'>Routines, Streaks</span> and <span class='highlight'>Insights</span> as well as polishing the UI for the <span class='highlight'>Homescreen</span> to allow an intuitive and user-friendly experience.",
      extraImages: [
        {
          label: "Routines Prototype",
          prototypeUrl:
            "https://www.figma.com/proto/kK1djUVEBDBOztLK22hMSl/Work-Compiled?node-id=703-5059&viewport=280%2C641%2C0.08&t=GhjAwS9URXL2HajC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=703%3A4221&show-proto-sidebar=1&page-id=302%3A130",
          src: "/monaa/Routine3.svg",
        },
        {
          label: "Insights Prototype",
          prototypeUrl:
            "https://www.figma.com/proto/kK1djUVEBDBOztLK22hMSl/Work-Compiled?node-id=703-4540&viewport=346%2C475%2C0.08&t=GB4ZpniKJ21g6W5T-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=703%3A4221&show-proto-sidebar=1&page-id=302%3A130",
          src: "/monaa/insights.svg",
        },
        {
          label: "Streaks Prototype",
          prototypeUrl:
            "https://www.figma.com/proto/kK1djUVEBDBOztLK22hMSl/Work-Compiled?node-id=703-1873&viewport=326%2C-55%2C0.08&t=brhPyEz4JzKDlw9A-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=703%3A4221&show-proto-sidebar=1&page-id=302%3A130",
          src: "/monaa/streaks.svg",
        },
      ],
      mobile1: {
        src: "/monaa/concept-home.svg",
        label: "Concept UI - Home Screen",
      },
      mobile2: {
        src: "/monaa/final-home.svg",
        label: "Final UI - Home Screen",
      },
    },
  },

  {
    id: 4,
    slug: "max-aspire",
    title: "MAX Aspire",
    hidden: true,
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
    liveUrl: "https://aspire.onemax.org/",
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
