import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushi Nigam — AI Engineer",
  description:
    "AI Engineer at Konverz AI. Building production LLM systems, RAG pipelines, and applied NLP.",
  keywords: ["AI Engineer", "LLM", "RAG", "Machine Learning", "NLP", "Khushi Nigam"],
  openGraph: {
    title: "Khushi Nigam — AI Engineer",
    description: "Building production LLM systems and RAG pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
