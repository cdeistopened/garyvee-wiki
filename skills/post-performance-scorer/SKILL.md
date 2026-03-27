---
name: post-performance-scorer
description: "Score every post against your account's rolling average to identify overindexers and underperformers. This is the measurement engine for day trading attention — relative performance matters, not absolute numbers. Use when someone says 'which of my posts performed best,' 'what's overindexing,' 'analyze my post performance,' 'which content should I amplify,' or 'help me find my winners.'"
---

# Post Performance Scorer (Overindex Detector)

Compare each post's performance against your account's rolling average. Identify which posts overindexed (got 3-10x normal) and which underperformed. This is the diagnostic engine that feeds every other Day Trading Attention skill.

## Context

Gary's entire paid media strategy depends on one measurement: overindexing. Not absolute viral numbers. Not vanity metrics. The question is always: "Did this post do significantly better than YOUR normal?"

> "If you and I started a tea brand and our first 50 posts got 80 views because we're new and our 81st post got 8,000 views, we need to take note of that one. For a brand that's just starting with 50 views, 8,000 is a great win. I was there too. We're all starting at zero. So, overindexing." — Gary Vaynerchuk, Day Trading Attention interview (`_TdzXnYJuSY`)

> "Post every piece of content organically first. If it does well in views compared to your norm, that's what you start running media on. Many of you are wasting a lot of money on social because the ad, the creative, the video or the picture isn't something that will convert well. You can now mitigate that risk by posting it organically and getting a sense if it's a good piece of content because it cannot get views unless the creative is relevant." — Gary Vaynerchuk, chiropractic keynote (`Sio8lkFXiMY`)

> "When something gets 57,000 views, knowing what to do with that creative — sending it down to the lower funnel and making that a performance ad, sending it up if you've got the budgets to CTV." — Gary Vaynerchuk, Expo West 2026 (`VMumHwVEfFs`)

## The Consultation

### Step 1: Gather the Data

Ask:
1. **Which platform(s) are we scoring?** (Can do one or all)
2. **Time period:** Last 30 days is the sweet spot. Need at least 15-20 posts to establish a norm.
3. **For each post, collect:**
   - Post date
   - Content type (video, carousel, text, image, story)
   - Topic/theme
   - Views (or impressions)
   - Likes
   - Comments
   - Saves / bookmarks
   - Shares / reposts
   - Click-throughs (if applicable)
   - Watch time / completion rate (video)

### Step 2: Calculate the Norm

**The Norm** = rolling average performance across the evaluation period.

Calculate per platform:
- **Average views** per post
- **Average engagement rate** (likes + comments + saves + shares / views)
- **Average saves** per post (the most underrated metric)
- **Average shares** per post (the strongest signal)

Use MEDIAN not MEAN if you have any viral outliers, to avoid skewing.

### Step 3: Score Each Post

For each post, calculate the **Overindex Ratio:**

```
Overindex Ratio = Post Views / Norm Views
```

Also calculate engagement overindex:
```
Engagement Overindex = Post Engagement Rate / Norm Engagement Rate
```

**Scoring Tiers:**

| Overindex Ratio | Classification | Action |
|----------------|---------------|--------|
| **5x+ norm** | **Breakout** — This is your best creative. Rare. Act immediately. | Amplify with paid NOW. Send to `winner-amplification-tool`. |
| **3-5x norm** | **Strong overindex** — Confirmed winner. | Amplify with paid. Iterate on this format/topic. |
| **1.5-3x norm** | **Mild overindex** — Above average. Worth noting. | Iterate. Try same topic, different hook. |
| **0.7-1.5x norm** | **Average** — Expected performance. | Continue. No special action. |
| **0.3-0.7x norm** | **Underperform** — Below your standard. | Analyze why. Try different format or platform. |
| **Below 0.3x norm** | **Dead** — Kill it. Move on. | Send to `content-kill-iterate-engine`. |

### Step 4: Pattern Analysis

After scoring all posts, look for patterns:

**By Content Type:**
- Which format (video, carousel, text, image) has the highest average overindex?
- Are your videos consistently beating your carousels, or vice versa?

**By Topic:**
- Which topics overindex? Which underperform?
- Is there a topic your audience clearly wants more of?

**By Timing:**
- Do posts at certain times consistently overindex?
- Are there dead zones where posts always underperform?

**By Platform:**
- Which platform gives you the best overindex ratios?
- Where are you wasting effort on consistently underperforming content?

**By Hook Type:**
- Do posts with questions as hooks outperform statements?
- Do controversial takes outperform educational content?

## Output

Deliver a **Post Performance Scorecard** in this format:

```markdown
# Post Performance Scorecard
**Account:** [name]
**Platform:** [platform]
**Period:** [date range]
**Total posts scored:** [X]

## The Norm
| Metric | Average | Median |
|--------|---------|--------|
| Views | [X] | [X] |
| Engagement Rate | [X]% | [X]% |
| Saves | [X] | [X] |
| Shares | [X] | [X] |

## Breakout Posts (5x+ overindex) — AMPLIFY IMMEDIATELY
| Post | Date | Views | Overindex | Type | Topic | Action |
|------|------|-------|-----------|------|-------|--------|
| [title] | [date] | [views] | [X]x | [type] | [topic] | → winner-amplification-tool |

## Strong Overindexers (3-5x) — AMPLIFY
| Post | Date | Views | Overindex | Type | Topic |
|------|------|-------|-----------|------|-------|
| [title] | [date] | [views] | [X]x | [type] | [topic] |

## Mild Overindexers (1.5-3x) — ITERATE
[table]

## Underperformers (below 0.7x) — ANALYZE or KILL
| Post | Date | Views | Overindex | Type | Topic | Diagnosis |
|------|------|-------|-----------|------|-------|-----------|
| [title] | [date] | [views] | [X]x | [type] | [topic] | [why it underperformed] |

## Pattern Analysis
- **Best format:** [type] averages [X]x overindex
- **Best topic:** [topic] averages [X]x overindex
- **Best time:** Posts at [time] average [X]x overindex
- **Worst format:** [type] averages [X]x (consider dropping)
- **Biggest insight:** [one key finding]

## Recommendations
1. **Amplify now:** [X] posts should get paid media (see winner-amplification-tool)
2. **Make more:** [format/topic combo] consistently overindexes
3. **Stop making:** [format/topic combo] consistently underperforms
4. **Test next:** [hypothesis based on pattern analysis]
```

## Composability

- Feeds overindexers into `winner-amplification-tool` for paid media decisions
- Feeds underperformers into `content-kill-iterate-engine` for kill/iterate decisions
- Pattern analysis feeds into `daily-content-calendar-builder` for calendar adjustments
- Platform-level analysis feeds into `platform-arbitrage-scanner`
- Engagement data feeds into `community-listener` for Round 2 content

## Source Transcripts
- `_TdzXnYJuSY` - Day Trading Attention (overindex definition, tea brand example)
- `Sio8lkFXiMY` - Chiropractic keynote (post organic first, compared to your norm)
- `VMumHwVEfFs` - Expo West 2026 (midfunnel model, 57K views as signal)
- `Q7mhzMOA1Go` - Tea with GaryVee (outwork your curiosity, 12 posts isn't enough data)

## Reference
- `references/frameworks/day-trading-attention-thesis.md`
- `references/frameworks/organic-first-ad-testing.md`
- `references/frameworks/overindex-measurement-guide.md`
