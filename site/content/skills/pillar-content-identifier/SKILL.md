---
name: pillar-content-identifier
description: "Identify which of your existing long-form content pieces are 'pillar content' rich enough to mine for 30+ micro content pieces. Use when someone says 'which of my videos should I repurpose,' 'what content should I chop up,' 'I have a bunch of long-form stuff but don't know where to start,' or 'help me find my best pillar content.'"
---

# Pillar Content Identifier

Evaluate a creator's existing long-form content library and rank which pieces are the richest pillar content candidates for the GaryVee Content Pyramid.

## Context

GaryVee's entire content model starts with pillar content. Not all long-form content is equal. The best pillar pieces are unscripted, high-energy, and full of extractable moments. Gary's own pillar sources: keynotes, AskGaryVee episodes, DailyVee vlogs, podcast appearances, coaching calls, Q&A sessions.

> "His pillar contents come from keynotes, AskGaryVee show, DailyVee, his podcast... for someone like you and me who don't do big keynotes, it can simply come from recorded client calls, recorded coaching mentor calls, our existing YouTube videos." - David Wong, explaining the GaryVee Content Model (`bRSw84qTvZs`)

The key insight: raw, unfiltered content mines better than scripted content. A 45-minute Q&A where you're riffing on audience questions will produce more extractable nuggets than a carefully scripted tutorial.

## The Consultation

### Step 1: Inventory Their Content Library

Ask these diagnostic questions:

1. **What long-form content do you already have?** (YouTube videos, podcast episodes, keynotes, webinars, coaching calls, live streams, interviews)
2. **How many pieces are we evaluating?** (Ask them to list their 10-20 most recent or best-performing long-form pieces with approximate duration)
3. **What's your audience and business?** (Need this to judge which topics will extract well)
4. **Do you have any performance data?** (Views, comments, saves, shares - helps identify what already resonated)

### Step 2: Score Each Piece on Pillar Richness

Rate each piece on these 6 criteria (1-5 scale):

| Criterion | What to Look For | Score Range |
|-----------|-----------------|-------------|
| **Energy Variance** | Does the speaker's energy shift? Rants, laughs, emotional peaks? Monotone = low extractability. | 1 (flat) to 5 (multiple peaks) |
| **Standalone Nuggets** | Are there moments that make sense without context? One-liner quotables, counterintuitive claims, specific stories? | 1 (needs full context) to 5 (packed with standalone bits) |
| **Topic Breadth** | Does it cover multiple angles/topics? A single narrow tutorial extracts 3-5 clips. A wide-ranging Q&A extracts 20+. | 1 (single topic) to 5 (5+ distinct topics) |
| **Audience Relevance** | Does the content map to what their target audience cares about? | 1 (off-target) to 5 (dead center) |
| **Visual/Audio Quality** | Is the raw material usable? Can clips be cut without looking amateur? | 1 (unusable) to 5 (broadcast ready) |
| **Unscripted Factor** | Was this improvised, riffed, or responsive to live input? Scripted content is harder to extract because it was already edited down. | 1 (fully scripted) to 5 (completely unscripted) |

**Pillar Score = sum of all 6 criteria (max 30)**

### Step 3: Rank and Recommend

Sort by Pillar Score. Then provide the recommendation:

| Pillar Score | Recommendation |
|-------------|---------------|
| 25-30 | **Gold pillar.** Extract immediately. Expect 25-40 micro content pieces. |
| 18-24 | **Strong pillar.** Extract with confidence. Expect 15-25 pieces. |
| 12-17 | **Moderate pillar.** Cherry-pick the best 2-3 moments. Expect 5-15 pieces. |
| Below 12 | **Not a pillar.** Use the content as-is, don't try to mine it. |

For their top 3 pillar candidates, identify specific timestamp ranges (or section descriptions if no timestamps) where extractable nuggets live.

### Step 4: Recommend Future Pillar Content Strategy

Based on what scored highest, recommend:

- **What format to do MORE of** (the format that scored highest is their pillar sweet spot)
- **What to stop doing** (if scripted tutorials scored low, stop relying on those as pillar sources)
- **The Gary approach**: Record everything. Coaching calls, team meetings (with permission), speaking engagements, Q&A sessions, podcast appearances. The raw stuff is gold.

> "I made my own content for eight and a half years before I hired my first person. Wine Library TV, no lighting, no mic. I look like I'm a hostage in Afghanistan and I'm just reviewing wine from the bottom of my little heart." - Gary Vaynerchuk, Expo West 2026 keynote (`VMumHwVEfFs`)

## Output

Deliver a **Pillar Content Audit** in this format:

```markdown
# Pillar Content Audit for [Creator/Brand]

## Top Pillar Candidates (Ranked)

### 1. [Title] — Pillar Score: [X]/30
- **Format:** [keynote/podcast/Q&A/etc.]
- **Duration:** [X min]
- **Energy Variance:** [X]/5 — [one-line note]
- **Standalone Nuggets:** [X]/5 — [one-line note]
- **Topic Breadth:** [X]/5 — [one-line note]
- **Audience Relevance:** [X]/5
- **Visual/Audio Quality:** [X]/5
- **Unscripted Factor:** [X]/5
- **Estimated Micro Content Yield:** [X] pieces
- **Key Extractable Moments:**
  - [Timestamp/section]: [Description of nugget]
  - [Timestamp/section]: [Description of nugget]
  - [Timestamp/section]: [Description of nugget]

[Repeat for top 5 pieces]

## Content Not Worth Mining
- [Title] — Score [X]/30. Reason: [why]

## Future Pillar Strategy
- **Do more of:** [format recommendation]
- **Stop relying on:** [format to deprioritize]
- **New pillar opportunity:** [suggestion based on their business]
```

## Composability

This skill feeds directly into `micro-content-extractor`. Once the user has their ranked pillar list, they take the #1 piece into micro-content-extractor for the full extraction plan.

## Source Transcripts
- `bRSw84qTvZs` - GaryVee Content Model walkthrough
- `FvUhZQfG350` - Content Model deck breakdown
- `VMumHwVEfFs` - Expo West 2026 keynote (400+ pieces/day)
- `eqwKdUR_p-0` - E-commerce implementation of content model

## Reference
- `references/frameworks/64-pieces-of-content-model.md`
- `references/frameworks/pillar-to-micro-pipeline.md`
