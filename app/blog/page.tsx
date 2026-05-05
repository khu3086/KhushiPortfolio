import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/notion";

export const revalidate = 60; // ISR — re-fetch from Notion every 60s

export const metadata = {
  title: "Blog — Khushi Nigam",
  description: "Notes on AI engineering, LLM systems, and what I'm learning.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-script text-3xl text-accent">
            khushi
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-fg/80 hover:text-accent transition">
              Home
            </Link>
            <Link href="/#about" className="text-fg/80 hover:text-accent transition">
              About
            </Link>
            <Link href="/#projects" className="text-fg/80 hover:text-accent transition">
              Projects
            </Link>
            <Link href="/blog" className="text-accent">
              Blog
            </Link>
            <Link href="/#contact" className="text-fg/80 hover:text-accent transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-6 pt-40 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-accent-soft text-sm font-medium mb-3 tracking-wider uppercase">
            ✦ Notes & Writing
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            The <span className="text-accent">blog</span>.
          </h1>
          <p className="text-lg md:text-xl text-fg/70 max-w-2xl leading-snug">
            Things I&apos;m learning about AI engineering, LLM systems, RAG, and the unglamorous
            infra around shipping ML to production.
          </p>
        </div>
      </section>

      {/* POST LIST */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card p-7 group block"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-medium">
                        <span>{formatDate(post.date)}</span>
                        <span className="text-accent/60">·</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    <span className="text-accent text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      →
                    </span>
                  </div>
                  {post.description && (
                    <p className="text-fg/65 leading-relaxed text-sm mb-4">
                      {post.description}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>
            © 2026 <span className="font-script text-accent text-base">khushi</span> · Built with ☕ and lots of purple
          </div>
          <Link href="/" className="hover:text-accent transition">
            ← back home
          </Link>
        </div>
      </footer>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="card p-12 text-center">
      <div className="text-5xl mb-4">✦</div>
      <h2 className="text-xl font-bold mb-2">No posts yet</h2>
      <p className="text-fg/60 max-w-md mx-auto leading-relaxed">
        Either I haven&apos;t published anything yet, or my Notion database isn&apos;t connected.
        If you&apos;re the site owner, check your <code className="text-accent-soft">.env.local</code>.
      </p>
    </div>
  );
}
