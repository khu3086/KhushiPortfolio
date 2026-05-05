import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

/* ──────────────────────────────────────────────────────
   NOTION CLIENT
   Reads NOTION_TOKEN and NOTION_DATABASE_ID from env.
   See README for setup instructions.
   ────────────────────────────────────────────────────── */

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  published: boolean;
};

/* Helpers to safely extract Notion properties */
function getText(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title?.[0]?.plain_text ?? "";
  if (prop.type === "rich_text") return prop.rich_text?.[0]?.plain_text ?? "";
  return "";
}

function getDate(prop: any): string {
  return prop?.date?.start ?? "";
}

function getCheckbox(prop: any): boolean {
  return Boolean(prop?.checkbox);
}

function getMultiSelect(prop: any): string[] {
  if (!prop?.multi_select) return [];
  return prop.multi_select.map((t: any) => t.name);
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadingTime(markdown: string): string {
  const words = markdown.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/* ──────────────────────────────────────────────────────
   getAllPosts() — list all published posts, newest first
   ────────────────────────────────────────────────────── */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    console.warn("NOTION_DATABASE_ID not set — returning empty posts list");
    return [];
  }

  const res = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return res.results.map((page: any) => {
    const props = page.properties;
    const title = getText(props.Title) || getText(props.Name) || "Untitled";
    return {
      id: page.id,
      slug: getText(props.Slug) || slugify(title),
      title,
      description: getText(props.Description),
      date: getDate(props.Date),
      readingTime: getText(props.ReadingTime) || "5 min read",
      tags: getMultiSelect(props.Tags),
      published: getCheckbox(props.Published),
    };
  });
}

/* ──────────────────────────────────────────────────────
   getPostBySlug() — full post + markdown body
   ────────────────────────────────────────────────────── */
export async function getPostBySlug(
  slug: string
): Promise<{ post: BlogPost; markdown: string } | null> {
  const all = await getAllPosts();
  const meta = all.find((p) => p.slug === slug);
  if (!meta) return null;

  const mdblocks = await n2m.pageToMarkdown(meta.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  const markdown = mdString.parent ?? "";

  return {
    post: { ...meta, readingTime: estimateReadingTime(markdown) },
    markdown,
  };
}

/* Format date like "May 5, 2026" */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
