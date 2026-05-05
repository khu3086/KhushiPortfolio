import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/notion";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  if (!data) return { title: "Post not found" };
  return {
    title: `${data.post.title} — Khushi Nigam`,
    description: data.post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  if (!data) notFound();

  const { post, markdown } = data;

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
            <Link href="/blog" className="text-accent">
              Blog
            </Link>
            <Link href="/#contact" className="text-fg/80 hover:text-accent transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* POST HEADER */}
      <article className="px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition mb-12"
          >
            ← all posts
          </Link>

          <div className="text-accent-soft text-sm font-medium mb-4 tracking-wider uppercase flex items-center gap-3">
            <span>{formatDate(post.date)}</span>
            <span className="text-accent/40">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-fg/70 mb-8 leading-snug">
              {post.description}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
              {post.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* MARKDOWN BODY */}
          <div className="prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <div>
            © 2026 <span className="font-script text-accent text-base">khushi</span>
          </div>
          <Link href="/blog" className="hover:text-accent transition">
            more posts →
          </Link>
        </div>
      </footer>
    </main>
  );
}
