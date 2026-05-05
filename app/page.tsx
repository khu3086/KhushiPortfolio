import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/notion";

export const revalidate = 60;

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="font-script text-3xl text-accent">
            khushi
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-fg hover:text-accent transition">Home</a>
            <a href="#about" className="text-accent">About</a>
            <a href="#experience" className="text-fg/80 hover:text-accent transition">Experience</a>
            <a href="#projects" className="text-fg/80 hover:text-accent transition">Projects</a>
            <Link href="/blog" className="text-fg/80 hover:text-accent transition">Blog</Link>
            <a href="#contact" className="text-fg/80 hover:text-accent transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/5 text-xs text-accent-soft mb-8">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for AI/ML opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Hi, I&apos;m <span className="text-accent">Khushi</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-fg/70 max-w-2xl mb-8 leading-snug">
            AI Engineer building production LLM systems, RAG pipelines, and applied NLP — currently at{" "}
            <span className="text-accent-soft font-semibold">Konverz AI</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-3 bg-accent text-black font-semibold text-sm rounded-full hover:bg-accent-soft transition">
              View my work →
            </a>
            <a href="mailto:khushi.nigamwork@gmail.com" className="px-6 py-3 border border-accent/50 text-fg font-semibold text-sm rounded-full hover:bg-accent/10 transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">About Me</h2>
            <div className="space-y-5 text-fg/75 leading-relaxed text-base">
              <p>
                I&apos;m a Computer Science grad from <span className="text-fg font-semibold">Manipal Institute of Technology</span> (CGPA 8.7, Top 10%) who loves building intelligent systems that actually run in production — not the kind that stay in notebooks.
              </p>
              <p>
                These days at <span className="text-accent-soft font-semibold">Konverz AI</span> I work on LLM-powered document understanding, RAG pipelines with vector retrieval, and the boring infra around all of it: evaluation, fine-tuning, deployment, monitoring.
              </p>
              <p>
                When I&apos;m not shipping AI, you&apos;ll find me reading ML systems research, mentoring juniors, or contributing to open-source projects.
              </p>
            </div>
          </div>
          <PixelMascot />
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight">Skills &amp; Technologies</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="card p-6">
                <div className="font-bold text-lg mb-4">{cat.label}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                <div className="year-badge">{item.year}</div>
                {i !== experience.length - 1 && <div className="timeline-line" />}
                <div className="card p-6 flex-1">
                  <div className="font-bold text-lg mb-1">{item.role}</div>
                  <div className="text-accent-soft text-sm mb-3">at {item.company}</div>
                  <p className="text-fg/70 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Projects</h2>
          <p className="text-fg/60 mb-12 text-lg">A handful of things I&apos;ve built — across LLMs, ML, and full-stack systems.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="card p-7 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-xl mb-1">{p.title}</div>
                    <div className="text-accent-soft text-sm">{p.subtitle}</div>
                  </div>
                  <span className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xl">
                    ↗
                  </span>
                </div>
                <p className="text-fg/65 leading-relaxed mb-5 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST WRITING */}
      {posts.length > 0 && (
        <section id="writing" className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
                  Latest Writing
                </h2>
                <p className="text-fg/60 text-lg">
                  Notes on building AI systems in production.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm text-accent-soft hover:text-accent transition"
              >
                All posts →
              </Link>
            </div>

            <div className="grid gap-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card p-6 group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted mb-2">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-fg/65 text-sm leading-relaxed">{post.description}</p>
                    )}
                  </div>
                  <span className="text-accent text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform self-start md:self-center">
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Link href="/blog" className="text-accent-soft hover:text-accent transition text-sm">
                All posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Let&apos;s <span className="text-accent">build</span> something together.
          </h2>
          <p className="text-fg/60 max-w-xl mx-auto mb-10 text-lg">
            Open to AI/ML engineering opportunities, collaborations, and interesting research conversations.
          </p>
          <a
            href="mailto:khushi.nigamwork@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-black font-bold text-base rounded-full hover:bg-accent-soft transition"
          >
            khushi.nigamwork@gmail.com →
          </a>
          <div className="mt-12 flex justify-center gap-6 text-sm text-fg/60">
            <a href="https://github.com/khu3086" target="_blank" rel="noreferrer" className="hover:text-accent transition">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/khushi-n-81ba01248" target="_blank" rel="noreferrer" className="hover:text-accent transition">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>
            © 2026 <span className="font-script text-accent text-base">khushi</span> · Built with ☕ and lots of purple
          </div>
          <div>v2.0 · may &apos;26</div>
        </div>
      </footer>
    </main>
  );
}

/* ============ PIXEL MASCOT ============ */
function PixelMascot() {
  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
        <g fill="#a855f7" fontFamily="monospace" fontWeight="bold">
          <text x="20" y="40" fontSize="24" className="sparkle">✦</text>
          <text x="280" y="50" fontSize="20" className="sparkle">＋</text>
          <text x="290" y="120" fontSize="16" className="sparkle">○</text>
          <text x="10" y="160" fontSize="18" className="sparkle">＋</text>
          <text x="30" y="240" fontSize="16" className="sparkle">○</text>
          <text x="285" y="230" fontSize="22" className="sparkle">✧</text>
          <text x="160" y="30" fontSize="14" className="sparkle">·</text>
        </g>
        <g fill="#a855f7">
          <rect x="80" y="70" width="20" height="20" />
          <rect x="70" y="80" width="40" height="20" />
          <rect x="220" y="70" width="20" height="20" />
          <rect x="210" y="80" width="40" height="20" />
          <rect x="80" y="90" width="160" height="20" />
          <rect x="60" y="110" width="200" height="100" />
          <rect x="50" y="130" width="20" height="60" />
          <rect x="250" y="130" width="20" height="60" />
          <rect x="80" y="210" width="160" height="20" />
          <rect x="100" y="230" width="120" height="10" />
          <rect x="240" y="180" width="40" height="15" />
          <rect x="270" y="160" width="15" height="35" />
        </g>
        <rect x="100" y="140" width="20" height="25" fill="#000" />
        <rect x="200" y="140" width="20" height="25" fill="#000" />
        <rect x="155" y="180" width="10" height="6" fill="#000" />
        <rect x="85" y="170" width="10" height="8" fill="#c084fc" opacity="0.6" />
        <rect x="225" y="170" width="10" height="8" fill="#c084fc" opacity="0.6" />
      </svg>
    </div>
  );
}

/* ============ DATA ============ */

const skillCategories = [
  {
    label: "AI / ML & LLMs",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "scikit-learn", "RAG", "Fine-tuning"],
  },
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "Go", "SQL", "Bash"],
  },
  {
    label: "Backend & Infra",
    items: ["FastAPI", "Flask", "Spring Boot", "Docker", "Kubernetes", "REST"],
  },
  {
    label: "Cloud",
    items: ["OCI", "Azure", "AWS", "CI/CD", "MLOps"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Vector Stores"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "Next.js", "TypeScript"],
  },
];

const experience = [
  {
    year: "2025",
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
    role: "Undergraduate Research Fellow",
    company: "Indian Academy of Sciences",
    description:
      "Selected among top 0.01% of national applicants. Evaluated 5+ dimensionality reduction techniques (PCA, t-SNE, UMAP), reducing computational complexity by 40%.",
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
