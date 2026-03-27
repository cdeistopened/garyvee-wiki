---
name: fifteen-post-diagnostic
description: "The GaryVee-method content audit: paste your last 15 posts, get a complete diagnosis. Combines jab/hook ratio, selfless/selfish ratio, platform-native adaptation, and hook quality into one comprehensive audit. This is the flagship entry point — the single fastest way to understand why your content is or isn't growing. Use when someone says 'audit my content,' 'why isn't my content working,' 'review my posts,' 'content audit,' 'diagnose my feed,' 'what am I doing wrong on social media,' or 'GaryVee would say what about my content.'"
---

# The 15-Post Diagnostic

The single fastest content diagnostic Gary does. You bring your last 15 posts. The skill runs four lenses simultaneously: jab/hook ratio, selfless/selfish ratio, hook quality, and platform-native score. The output: why you're stuck, and exactly what to fix.

This is the flagship skill of the Ask GaryVee plugin — the #1 entry point for any creator wanting a GaryVee-method audit.

## Context

Gary can diagnose a creator's content problem in 5 seconds. He looks at 15 posts and knows. The diagnosis is almost always one of four things: you're too selfish, your ratio is wrong, your hooks don't grab attention, or you're posting the same format everywhere instead of adapting to each platform.

> "It takes me 5 seconds to look at your last 15 pieces of content and when it's 15 out of 15 that it was selfish for you — you wanted to look glamorous, you wanted them to buy something, you posted it because someone paid you — the fuck do you want from the audience, right?" — Gary Vaynerchuk (`yHjHVG6mBg0`)

> "Almost everyone in this room plateaus when they're selfish. The selfish versus selfless framework gets out of whack." — Gary Vaynerchuk (`yHjHVG6mBg0`)

> "I wrote a book called Jab, Jab, Jab, Right Hook. In 2013, the concept was give good content, give good content, give good content, and then occasionally ask for a sale in return. Get your ratio right." — Gary Vaynerchuk (`yHjHVG6mBg0`)

> "The 1 second economy is the thumbnail, the screen. How do you capture somebody for one second so that you can have them for one year?" — Gary Vaynerchuk, Tea with GaryVee #101 (`Q7mhzMOA1Go`)

> "A 40-year-old woman on Facebook is in a different mindset than on Pinterest. On Pinterest, she has intent to shop. On Facebook, she's keeping up with her world. I strategize around that." — Gary Vaynerchuk, AskGaryVee #38 (`yhZDv3dwFyM`)

## The Consultation

### Step 1: Gather the 15 Posts

Ask:
1. **Share your last 15 posts.** (Links, screenshots, or descriptions. Include the caption, format, and platform.)
2. **What platforms are you on?** (Are these all from one platform, or cross-platform?)
3. **What do you sell?** (Product, service, course, brand deals, etc.)
4. **What's your growth goal?** (More followers, more sales, more engagement, more reach?)
5. **Where are you stuck?** (Plateaued followers, declining engagement, no sales, no reach?)

### Step 2: Run the Four Lenses

**LENS 1: Jab/Hook Ratio**

Classify each post as JAB or RIGHT HOOK (see `content-ratio-auditor` for full classification rules):

| Post # | J or H | Subtype |
|--------|--------|---------|
| 1 | [J/H] | [Educational / Direct sale / etc.] |
| ... | ... | ... |
| 15 | [J/H] | ... |

Calculate: Jabs: [X] / Hooks: [X] / Ratio: [X]:1 / Target: 3-4:1

**LENS 2: Selfless/Selfish Score**

For each post: who does this serve — the audience or the creator? (See `selfless-selfish-audit` for full criteria)

| Post # | Selfless or Selfish | Why |
|--------|-------------------|-----|
| 1 | [S/s] | [1 sentence] |
| ... | ... | ... |

Calculate: Selfless: [X]/15 = [X]%

**LENS 3: Hook Quality (First-Second Test)**

For each post, score the first impression — the thing a scroller sees before deciding to stop or keep going:

| Post # | Thumbnail/First Frame (1-5) | First Words (1-5) | Pattern Interrupt (1-5) | Total |
|--------|---------------------------|-------------------|----------------------|-------|
| 1 | [X] | [X] | [X] | /15 |
| ... | ... | ... | ... | ... |

**Hook Quality Scoring:**
- **Thumbnail/First Frame:** Does the visual stop the scroll? Bold, clear, intriguing?
- **First Words:** Do the first 3-5 words create curiosity or make a bold claim?
- **Pattern Interrupt:** Does something about this post look different from everything else in the feed?

Average hook score across 15 posts: [X]/15

**LENS 4: Platform-Native Score**

For each post, assess: was this made FOR this platform, or just cross-posted?

| Post # | Platform | Native Format? | Right Dimensions? | Platform-Specific CTA? | Score (1-5) |
|--------|----------|---------------|-------------------|----------------------|-------------|
| 1 | [platform] | [Y/N] | [Y/N] | [Y/N] | [X] |
| ... | ... | ... | ... | ... | ... |

Average platform-native score: [X]/5

### Step 3: Synthesize the Diagnosis

**The Four Scores:**

| Lens | Score | Status |
|------|-------|--------|
| Jab/Hook Ratio | [X]:1 | [Target / Over-selling / Hook-shy] |
| Selfless/Selfish | [X]% selfless | [Generous / Drifting / Selfish] |
| Hook Quality | [X]/15 avg | [Strong / Mediocre / Weak] |
| Platform-Native | [X]/5 avg | [Native / Cross-posted / Lazy] |

**Primary Diagnosis:**

The worst-scoring lens is the primary problem. If two lenses are equally bad, the one Gary talks about most is the priority: selfless/selfish first, then ratio, then hook, then platform.

| Worst Lens | Diagnosis | The Fix |
|-----------|-----------|---------|
| **Selfless/Selfish** | "You plateaued because your content is selfish." | Next 15 posts: pure value. Zero asks. Zero humble-brags. |
| **Jab/Hook Ratio** | "You're over-selling (or never selling)." | Rebalance to 3-4:1. Run `content-ratio-auditor` for specifics. |
| **Hook Quality** | "Nobody's stopping to consume your content." | Redesign your thumbnails. Rewrite your opening lines. Run `hook-auditor`. |
| **Platform-Native** | "You're cross-posting the same thing everywhere." | Adapt each piece for each platform. Run `platform-native-adapter`. |

### Step 4: Build the Action Plan

Based on diagnosis, prescribe the specific next steps — not generic advice but exact changes to exact posts.

## Output

Deliver a **15-Post Diagnostic Report** in this format:

```markdown
# 15-Post Diagnostic Report
**Account:** @[handle]
**Platform(s):** [platforms]
**Date:** [date]
**Growth goal:** [goal]
**Current problem:** [what they reported]

## The Four Scores
| Lens | Score | Status | Priority |
|------|-------|--------|----------|
| Jab/Hook Ratio | [X]:1 | [status] | [1-4] |
| Selfless/Selfish | [X]% | [status] | [1-4] |
| Hook Quality | [X]/15 | [status] | [1-4] |
| Platform-Native | [X]/5 | [status] | [1-4] |

## Primary Diagnosis
**[1-2 sentence diagnosis — the main reason growth is stalled]**

## Post-by-Post Audit
| # | Post | J/H | S/s | Hook Score | Native Score | Key Issue |
|---|------|-----|-----|-----------|-------------|-----------|
| 1 | [desc] | J | S | 12/15 | 4/5 | None — strong post |
| 2 | [desc] | H | s | 6/15 | 2/5 | Selfish hook, weak thumbnail, cross-posted |
| ... | ... | ... | ... | ... | ... | ... |

## Top 3 Problems (ranked by impact)
1. **[Problem]:** [Evidence from the posts] → Fix: [specific action]
2. **[Problem]:** [Evidence] → Fix: [specific action]
3. **[Problem]:** [Evidence] → Fix: [specific action]

## Your 3 Best Posts (and why they worked)
1. **Post #[X]:** [Why it scored well across all 4 lenses]
2. **Post #[X]:** [Why]
3. **Post #[X]:** [Why]

## The 15-Day Reset Plan
Based on your diagnosis, here's your content plan for the next 15 days:
1. [Day 1-5 plan based on primary diagnosis]
2. [Day 6-10 plan]
3. [Day 11-15 plan]
4. [Run this diagnostic again on Day 16]

## Detailed Rewrites (worst 3 posts)
### Post #[X]
**Current:** [description]
**Problems:** [jab/hook, selfless/selfish, hook, platform issues]
**Rewrite:** [complete new version addressing all issues]
```

## Composability

- This is the META skill that combines:
  - `content-ratio-auditor` (Lens 1)
  - `selfless-selfish-audit` (Lens 2)
  - `hook-auditor` (Lens 3)
  - `platform-native-adapter` (Lens 4)
- Diagnosis feeds into specific skill recommendations for deeper work
- Performance data feeds into `post-performance-scorer` for correlation with actual metrics
- The 15-Day Reset Plan feeds into `daily-content-calendar-builder`

## Source Transcripts
- `yHjHVG6mBg0` - The 15-post, 5-second diagnosis, selfless/selfish framework, JJJRH ratio
- `Q7mhzMOA1Go` - 1-second economy, thumbnail and hook importance, Tea with GaryVee #101
- `yhZDv3dwFyM` - AskGaryVee #38, platform-native content, respect audience psychology
- `rweBX3sO_8c` - JJJRH origin, hook-shy creators, both failure modes
- `_TdzXnYJuSY` - Day Trading Attention, volume and measurement framework
- `Sio8lkFXiMY` - Chiropractic keynote, organic-first content scoring

## Reference
- `references/frameworks/content-audit-methodology.md`
- `references/frameworks/one-second-economy.md`
- `references/frameworks/jab-jab-jab-right-hook-framework.md`
- `references/frameworks/selfless-content-examples.md`
