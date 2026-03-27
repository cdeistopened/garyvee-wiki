---
name: micro-content-extractor
description: "Take a single pillar content piece and plan the extraction of 15-30+ micro content pieces from it. Identify the 'gold nuggets' — moments of insight, emotion, humor, or controversy that perform as standalone clips and posts. Use when someone says 'I have a 45-minute video, help me chop it up,' 'extract micro content from this,' 'how do I get 30 pieces from one video,' 'plan my content extraction,' or 'find the gold nuggets in my video.'"
---

# Micro Content Extractor

Take one pillar content piece and build a complete extraction plan that yields 15-30+ micro content pieces, each mapped to a specific format and platform. This is the operational core of the GaryVee Content Pyramid.

## Context

This is the highest-value skill in the entire GaryVee playbook. The 86-page GaryVee Content Model deck is built around this single operation: one pillar piece becomes dozens of micro content pieces.

> "Going through a piece of pillar content and extracting the little golden nuggets that he thinks or that they think that the audience would want to see." — David Wong, GaryVee Content Model walkthrough (`bRSw84qTvZs`)

> "One keynote becomes 30 pieces of content, 35 million views, 20 different social platforms." — Kevin J Pino, Content Model breakdown (`FvUhZQfG350`)

Gary's extraction team looks for specific types of moments. Not just "good parts" — specific categories of extractable content.

## The Consultation

### Step 1: Understand the Pillar Piece

Ask:
1. **What's the pillar piece?** (Link, transcript, or detailed description)
2. **How long is it?** (Duration matters — a 15-minute video yields differently than a 90-minute keynote)
3. **What format is it?** (Video, audio-only, written)
4. **Who's the audience for the micro content?** (May differ from the pillar audience)
5. **Which platforms are you active on?** (Determines format assignments)

### Step 2: Identify Gold Nuggets

Scan the pillar piece for these 8 nugget types (Gary's extraction criteria):

| Nugget Type | What to Look For | Typical Format |
|-------------|-----------------|----------------|
| **The Riff** | Speaker goes off-script on a topic with rising energy. Lasts 30-90 seconds. | Short video clip (Reels/TikTok/Shorts) |
| **The Rant** | Passionate, emotional, opinionated moment. Often starts with "Here's what I think..." or "Let me tell you something..." | Short video clip, quote graphic |
| **The One-Liner** | A single sentence that stands alone. Quotable. Tweetable. | Quote graphic, text post, audiogram |
| **The Counterintuitive Claim** | Something that challenges conventional wisdom. Makes you stop scrolling. | Short video with text overlay, carousel |
| **The Story** | A specific anecdote with characters, tension, resolution. Self-contained. | Short video, carousel, written post |
| **The Tactical Nugget** | A specific how-to, number, framework, or step. Actionable in isolation. | Carousel, infographic, thread |
| **The Emotional Peak** | Laughter, tears, surprise, anger. The energy shifts visibly/audibly. | Short video (this is your thumbnail/hook moment) |
| **The Interaction** | A question from the audience + the answer. Natural back-and-forth. | Short video, Q&A format post |

For each nugget found, record:
- Timestamp or section reference
- Nugget type (from above)
- The core message in one sentence
- Suggested micro content format
- Suggested platform(s)

### Step 3: Assign Formats and Platforms

Map each nugget to a specific output format:

**Video Formats:**
- Short-form vertical video (15-60s) — TikTok, Reels, Shorts, Spotlight
- Medium-form video (1-3 min) — Instagram, Facebook, LinkedIn
- Audiogram with waveform — Podcast platforms, Twitter/X

**Static Formats:**
- Quote graphic (single image) — Instagram, Facebook, LinkedIn, X
- Carousel (3-10 slides) — Instagram, LinkedIn
- Infographic — Pinterest, LinkedIn, Instagram

**Written Formats:**
- Twitter/X thread (3-10 tweets) — X
- LinkedIn article or long post — LinkedIn
- Blog post expansion — Website, Medium, Substack
- Newsletter segment — Email

**Derivative Formats:**
- Meme adaptation — All platforms
- Behind-the-scenes companion — Stories, TikTok
- Poll or question (from a claim made) — All platforms

### Step 4: Build the Extraction Plan

Organize all nuggets into a production queue with priority tiers:

**Tier 1 (Extract First):** Nuggets with the highest standalone power. These work without any context from the pillar piece. Emotional peaks, rants, and counterintuitive claims live here.

**Tier 2 (Extract Second):** Strong nuggets that benefit from a brief setup line (5-10 seconds of context before the clip). Stories and tactical nuggets often need this.

**Tier 3 (Create From):** Nuggets that need to be reformatted (not just clipped). A 5-minute story becomes a carousel. A scattered discussion of a topic becomes a thread. These require creative work, not just editing.

## Output

Deliver a **Micro Content Extraction Plan** in this format:

```markdown
# Micro Content Extraction Plan
**Pillar piece:** [Title]
**Duration:** [X min]
**Total nuggets identified:** [X]
**Estimated micro content pieces:** [X]

## Tier 1 — High-Priority Extractions (clip and post)

### Nugget 1: [One-sentence description]
- **Timestamp:** [start-end]
- **Type:** [Riff/Rant/One-Liner/etc.]
- **Format:** [Short video / Quote graphic / etc.]
- **Platforms:** [TikTok, Reels, Shorts]
- **Hook/Caption:** [Suggested opening text or caption]
- **Why it works standalone:** [One sentence]

[Repeat for all Tier 1 nuggets]

## Tier 2 — Needs Brief Setup

### Nugget N: [Description]
- **Timestamp:** [start-end]
- **Setup needed:** [What 5-10 second intro to add]
- **Format:** [format]
- **Platforms:** [platforms]

## Tier 3 — Requires Reformatting

### Nugget N: [Description]
- **Source section:** [timestamp range or topic]
- **Reformat into:** [Carousel / Thread / Blog post / etc.]
- **Outline:** [3-5 bullet points of what the reformatted piece covers]
- **Platforms:** [platforms]

## Audio Extraction
- **Full audio as podcast episode?** [Yes/No + reasoning]
- **Audiogram candidates:** [List nuggets that work as audio-only clips]

## Production Notes
- **Total video clips to cut:** [X]
- **Total graphics to design:** [X]
- **Total written pieces to draft:** [X]
- **Estimated production time:** [X hours]
```

## Composability

- Receives input from `pillar-content-identifier` (which pillar piece to extract)
- Feeds output into `platform-native-adapter` (adapt each piece per platform)
- Feeds output into `distribution-orchestrator` (timing and sequencing)
- After Round 1 distribution, `community-listener` identifies which nuggets to double down on

## Source Transcripts
- `bRSw84qTvZs` - Content Model deck walkthrough (extraction process)
- `FvUhZQfG350` - Content Model breakdown (30 pieces from one keynote)
- `eqwKdUR_p-0` - E-commerce content model implementation
- `8mj-B1J_Hgg` - Content creation process
- `yhZDv3dwFyM` - AskGaryVee #38 (micro-content definition + platform psychology)

## Reference
- `references/frameworks/64-pieces-of-content-model.md`
- `references/frameworks/pillar-to-micro-pipeline.md`
- `references/frameworks/platform-native-formats-2026.md`
