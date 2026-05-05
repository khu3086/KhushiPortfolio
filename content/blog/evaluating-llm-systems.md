---
title: "Evaluating LLM systems when there's no ground truth"
date: "2026-03-20"
excerpt: "How do you measure quality when every input is open-ended and every output is plausible? A few patterns that have worked for me at Konverz AI."
tags: ["Evaluation", "LLMs", "ML Systems"]
---

The hardest part of working with LLMs isn't building the system — it's knowing whether the system is any good.

For traditional ML, you have a held-out test set, a metric, and a number that goes up or down. For LLM systems generating free-form text, you have outputs that are *plausibly correct* and a stakeholder asking, "is it working?"

Here are a few patterns that have helped me at Konverz AI.

## 1. Build a graded reference set, not a binary one

Don't ask "is the output correct or not?" Ask "is it bad / okay / good / great?" The four-point scale forces you to articulate *why* something is good — and that articulation becomes your rubric.

For our resume parser, "great" means the structured output is complete, accurate, and uses canonical tag values. "Good" means complete and accurate but with imperfect tagging. "Okay" means fields are populated but some are wrong. "Bad" means the parser missed entire sections. That rubric made it possible to track regressions across model versions.

## 2. Use an LLM to grade other LLMs (carefully)

LLM-as-judge is having a moment, and it deserves it — when used correctly. Two rules I follow:

1. **Calibrate against humans first.** Have humans grade ~50 examples, then check that your judge LLM agrees with them. If agreement is below ~85%, fix your prompt before trusting the judge.
2. **Never use the same model for generation and judging.** It will systematically over-rate its own outputs.

## 3. Track behaviors, not just scores

A single quality score hides everything. We track:

- **Refusal rate** — when does the system decline to answer?
- **Citation rate** — what fraction of answers ground claims in retrieved sources?
- **Latency p50/p95/p99**
- **Token cost per query**
- **Hallucination rate** — claims unsupported by retrieved context (sampled and graded)

When something gets worse, one of these usually moves first. The aggregate score is a lagging indicator.

## 4. Adversarial sets find the bugs you'd never write tests for

Once a quarter we sit down and try to *break* the system. Trick questions, ambiguous queries, queries in mixed languages, queries about content the system definitely doesn't have.

These adversarial sets find more bugs in an afternoon than weeks of staring at logs. They also force the team to align on what "graceful failure" means — does the system refuse, ask for clarification, or guess?

## 5. The user feedback loop is the eval

All of the above is preamble. The real evaluation is whether users come back. We log every thumbs-down with the query, the retrieved context, and the response. Twice a week someone on the team reads through 20 of them. No dashboards, no metrics — just reading.

It's the most boring practice we have and the one I'd defend hardest. Every dashboard I've built has eventually drifted away from what users actually care about. Reading the bad outputs has not.

---

If you're building an LLM system without a clear evaluation strategy, you don't have a system — you have a demo that will quietly degrade as you change things. Build the eval harness first. Even a bad one is better than none.
