export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* ─────────── NAV ─────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="font-script text-3xl text-accent leading-none">
            khushi
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-fg hover:text-accent transition">Home</a>
            <a href="#about" className="text-accent transition">About</a>
            <a href="#projects" className="text-fg hover:text-accent transition">Projects</a>
            <a href="#experience" className="text-fg hover:text-accent transition">Experience</a>
            <a href="#contact" className="text-fg hover:text-accent transition">Contact</a>
          </div>
          <a
            href="mailto:khushi.nigamwork@gmail.com"
            className="hidden md:block text-xs font-mono px-3 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-bg transition"
          >
            say hi →
          </a>
        </div>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section id="home" className="px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-muted mb-10">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 rounded-full bg-accent pulse-dot" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for AI/ML opportunities
          </div>

          <h1 className="font-extrabold text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6">
            Hi, I&apos;m <span className="text-accent">Khushi</span> 👋
            <br />
            <span className="text-fg/90">AI Engineer.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed">
            I build production{" "}
            <span className="text-fg font-semibold">LLM systems</span>, RAG
            pipelines, and applied NLP. Currently at{" "}
            <span className="text-accent font-semibold">Konverz AI</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-bg font-semibold text-sm rounded-full hover:bg-accent-soft transition"
            >
              See my work →
            </a>
            <a
              href="mailto:khushi.nigamwork@gmail.com"
              className="px-6 py-3 border border-border font-semibold text-sm rounded-full hover:border-accent hover:text-accent transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── ABOUT ─────────── */}
      <section id="about" className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-extrabold text-4xl md:text-5xl mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-base md:text-lg text-muted leading-relaxed">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-fg font-semibold">AI Engineer</span> who
                loves building intelligent systems that actually run in
                production — not the kind that stay in notebooks. CS grad from
                Manipal Institute of Technology (CGPA 8.7, Top 10%), IAS Summer
                Research Fellow.
              </p>
              <p>
                These days at{" "}
                <span className="text-fg font-semibold">Konverz AI</span> I work
                on LLM-powered document understanding, RAG pipelines with vector
                retrieval, and the boring infra around all of it: evaluation,
                fine-tuning, deployment, monitoring.
              </p>
              <p>
                When I&apos;m not shipping AI you&apos;ll find me reading
                papers, mentoring juniors, or hunting for the perfect filter
                coffee in Bengaluru.
              </p>
            </div>

            {/* Pixel cat */}
            <div className="flex justify-center md:justify-end">
              <svg viewBox="0 0 320 280" className="w-full max-w-sm float">
                {/* sparkles */}
                <g fill="#a855f7">
                  <rect x="40" y="30" width="3" height="14" />
                  <rect x="34" y="36" width="14" height="3" />
                  <circle cx="270" cy="40" r="5" />
                  <circle cx="295" cy="70" r="5" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                  <circle cx="240" cy="60" r="2.5" />
                  <rect x="220" y="40" width="2.5" height="10" />
                  <rect x="215" y="44" width="10" height="2.5" />
                  <rect x="275" y="225" width="3" height="14" />
                  <rect x="269" y="231" width="14" height="3" />
                  <circle cx="60" cy="235" r="6" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                  <circle cx="270" cy="255" r="3" />
                  <circle cx="50" cy="160" r="2.5" />
                </g>

                {/* cat body */}
                <g fill="#a855f7">
                  <rect x="105" y="80" width="22" height="22" />
                  <rect x="193" y="80" width="22" height="22" />
                </g>
                <g fill="#7c3aed">
                  <rect x="113" y="92" width="8" height="10" />
                  <rect x="199" y="92" width="8" height="10" />
                </g>
                <g fill="#a855f7">
                  <rect x="105" y="102" width="110" height="22" />
                  <rect x="105" y="124" width="110" height="22" />
                  <rect x="93" y="146" width="134" height="22" />
                  <rect x="93" y="168" width="134" height="22" />
                  <rect x="105" y="190" width="110" height="22" />
                  <rect x="215" y="146" width="22" height="22" />
                  <rect x="237" y="124" width="22" height="22" />
                </g>

                {/* eyes */}
                <g fill="#0a0a0f">
                  <rect x="125" y="128" width="18" height="14" />
                  <rect x="177" y="128" width="18" height="14" />
                </g>
                <g fill="#f5f5f7">
                  <rect x="135" y="130" width="5" height="5" />
                  <rect x="187" y="130" width="5" height="5" />
                </g>
                <g fill="#7c3aed">
                  <rect x="148" y="160" width="6" height="4" />
                  <rect x="166" y="160" width="6" height="4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SKILLS ─────────── */}
      <section id="skills" className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-extrabold text-4xl md:text-5xl mb-12">
            Skills &amp; Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-card">
                <h3 className="font-bold text-lg mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROJECTS ─────────── */}
      <section id="projects" className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-extrabold text-4xl md:text-5xl mb-4">Projects</h2>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            A handful of things I&apos;ve built — across LLMs, ML, and
            full-stack systems.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block p-6 bg-surface border border-border rounded-2xl hover:border-accent transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xl font-bold mb-1">{p.title}</div>
                    <div className="text-xs font-mono text-accent">
                      {p.subtitle}
                    </div>
                  </div>
                  <span className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── EXPERIENCE ─────────── */}
      <section id="experience" className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-extrabold text-4xl md:text-5xl mb-12">
            Experience
          </h2>

          <div className="relative pl-2">
            <div className="timeline-line" />

            {experience.map((item, i) => (
              <div
                key={i}
                className={`relative grid grid-cols-[64px_1fr] gap-5 ${
                  i < experience.length - 1 ? "mb-8" : ""
                }`}
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent text-bg font-bold text-sm flex items-center justify-center shrink-0">
                  {item.year}
                </div>
                <div className="bg-surface border border-border rounded-2xl p-5 hover:border-accent transition">
                  <h3 className="font-bold text-lg">{item.role}</h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    at {item.company}
                  </p>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT ─────────── */}
      <section id="contact" className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-5xl md:text-7xl mb-6">
            Let&apos;s <span className="text-accent">talk.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Open to AI/ML engineering opportunities, collaborations, and
            interesting research conversations. Drop a line — I read everything.
          </p>
          <a
            href="mailto:khushi.nigamwork@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-bg font-bold rounded-full hover:bg-accent-soft transition text-lg"
          >
            khushi.nigamwork@gmail.com →
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a
              href="https://github.com/khu3086"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/khushi-n-81ba01248"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:khushi.nigamwork@gmail.com"
              className="hover:text-accent transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>
            © 2026{" "}
            <span className="font-script text-accent text-base">khushi</span> ·
            Built with Next.js + ☕
          </div>
          <div>v2.0 · last updated may &apos;26</div>
        </div>
      </footer>
    </main>
  );
}

/* ─────────── DATA ─────────── */

const skillGroups = [
  {
    label: "AI / ML & LLMs",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "scikit-learn",
      "RAG",
      "Fine-tuning",
      "NLP",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "Go", "SQL", "Bash"],
  },
  {
    label: "Backend & Infra",
    items: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: ["OCI", "Azure", "CI/CD", "Git", "MLOps"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Vector Stores"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
];

const projects = [
  {
    title: "OCASA",
    subtitle: "RAG system @ Oracle",
    description:
      "Production RAG combining vector retrieval with LLMs to auto-generate documentation. Cut internal doc effort by 40–50%.",
    tags: ["LLM", "RAG", "Java", "Kubernetes"],
    href: "https://github.com/khu3086",
  },
  {
    title: "Clairvoyance",
    subtitle: "AI-driven recommender",
    description:
      "End-to-end ML pipeline ingesting market data, training predictive models, exposing recommendations through REST APIs to a real-time React dashboard.",
    tags: ["PyTorch", "React", "Node.js"],
    href: "https://github.com/khu3086",
  },
  {
    title: "LLM Document Parser",
    subtitle: "Konverz AI",
    description:
      "High-throughput LLM extraction pipeline processing 1,000+ documents/day. 30% accuracy lift, 50% reduction in manual screening.",
    tags: ["LLM", "NLP", "Python"],
    href: "https://github.com/khu3086",
  },
  {
    title: "Placement Chatbot",
    subtitle: "Conversational NLP",
    description:
      "Production chatbot with intent classification, FAQ automation, and workflow routing. Deployed on Flask + MongoDB, actively serving students at MIT Manipal.",
    tags: ["NLP", "PyTorch", "Flask"],
    href: "https://github.com/khu3086",
  },
];

const experience = [
  {
    year: "2026",
    role: "AI Engineer",
    company: "Konverz AI",
    description:
      "Building LLM-powered document understanding and RAG pipelines. Owning the end-to-end ML lifecycle — data, evaluation, fine-tuning, deployment.",
  },
  {
    year: "2025",
    role: "Software Engineer — Cloud",
    company: "Oracle",
    description:
      "Built OCASA, a production RAG system that cut internal documentation effort by 40–50%. Shipped a Java/Kubernetes Control Plane microservice for OCI's enterprise resource provisioning platform.",
  },
  {
    year: "2024",
    role: "Software Engineer Intern",
    company: "Microsoft",
    description:
      "Executed zero-downtime migration of 30K+ users across 3 teams. Shipped REST APIs in C# on Azure with a React frontend.",
  },
  {
    year: "2023",
    role: "Research Fellow",
    company: "Indian Academy of Sciences",
    description:
      "Selected among top 0.01% of national applicants. Evaluated 5+ dimensionality reduction techniques (PCA, t-SNE, UMAP), reducing computational complexity by 40%.",
  },
];
