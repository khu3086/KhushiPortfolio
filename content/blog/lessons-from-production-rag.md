---
title: "What I learned building production RAG at Oracle"
date: "2026-04-12"
excerpt: "RAG looks easy in demos. Shipping it to thousands of internal developers taught me that retrieval is mostly an evaluation and data problem — not a model problem."
tags: ["RAG", "LLMs", "Production"]
---

When I started building OCASA — Oracle's internal RAG system for documentation and developer Q&A — I assumed the hard part would be choosing the right LLM. Six months in, the model has been the *least* interesting decision we've made.

Here's what actually mattered.

## Retrieval is a data problem first

The single biggest quality lift didn't come from a better embedding model or a fancier reranker. It came from **cleaning up our source content**. Our internal docs were a mess of stale runbooks, half-finished design docs, and Slack threads that had been auto-archived. When retrieval surfaced those, the LLM happily generated confident-sounding nonsense grounded in obsolete information.

We spent two weeks just classifying and tagging content before we touched the retrieval pipeline again. That single effort moved end-to-end answer quality more than any model change we made afterward.

## You can't ship without an eval harness

Early on we shipped iterations based on vibes — "this answer feels better." This is a trap. Two iterations in, we couldn't tell whether a change was actually helping or just changing the *kind* of mistakes the system made.

We built a small eval harness with maybe 80 hand-curated questions, each with a reference answer and the expected source documents. Every change ran through it. Suddenly we had a number, and the number disagreed with our intuitions about half the time.

If you're building RAG and don't have an evaluation set yet, **stop everything and build one**. Even 50 questions is enough to start.

## Hallucination ≠ retrieval failure

One of the hardest lessons: when the system gave a wrong answer, our instinct was to blame the LLM for hallucinating. But most "hallucinations" turned out to be **retrieval failures dressed up in fluent prose**. The model was doing exactly what it should — synthesizing from what it was given. The problem was that what it was given was wrong, irrelevant, or incomplete.

The fix wasn't prompt engineering. It was instrumenting retrieval so we could see, for every bad answer, what chunks were retrieved and why. That visibility changed how the team debugged.

## The boring infra is the work

LLM tutorials make it look like retrieval-augmented generation is a 50-line script. In production it's:

- A chunking pipeline that handles a dozen content types
- An embedding service with caching and retry logic
- Reranking
- A prompt orchestration layer that injects metadata, citations, and refusal logic
- An eval harness that runs on every PR
- Logging and tracing for every retrieval and every generation
- A feedback loop so users can flag bad answers and you can act on them

None of that is exciting. All of it is necessary.

## What I'd tell my past self

If I were starting over, I'd spend the first month doing nothing but content audit and eval design — and only then write the first line of pipeline code. The work that looked like the actual project (picking models, designing prompts, choosing a vector DB) turned out to be the easy part.

RAG is mostly software engineering with an LLM in the middle. Treat it that way and the rest follows.
