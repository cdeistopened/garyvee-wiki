---
name: content-kill-iterate-engine
description: "When a post underperforms, decide whether to kill it (move on) or iterate (same concept, different execution). Volume means most content fails — the winners pay for the losers. Use when someone says 'my post flopped what should I do,' 'should I try this topic again,' 'how to handle underperforming content,' 'kill or iterate,' or 'my content isn't working.'"
---

# Content Kill / Iterate Engine

When content underperforms, make the binary decision: kill it and move on, or iterate with a different hook, format, or platform. Gary's framework: most content should be killed. Volume means most things fail. The winners pay for the losers. Stop mourning the dead.

## Context

Most creators do one of two things when content underperforms: they spiral into self-doubt, or they keep pushing the same thing harder. Both are wrong. Gary's approach is unemotional: analyze, decide, and either kill or iterate.

> "He's only done 12. So he needs to do another 200. But if he's already questioning if it's right, he needs to do those 200 and more stuff... Outwork your curiosity." — Gary Vaynerchuk, Tea with GaryVee (`Q7mhzMOA1Go`)

> "I search for no virality. I search for things that I think are topics that bring value to people in my content. And I try to do best practices with my thumbnail, first 3 seconds, my copy." — Gary Vaynerchuk, influencer keynote (`yHjHVG6mBg0`)

The critical insight: you cannot judge content after 12 attempts. You need volume. But once you have volume (50+ posts), pattern recognition kicks in and you can make informed kill/iterate decisions.

## The Consultation

### Step 1: Diagnose the Underperformance

Ask:
1. **Which post(s) underperformed?** (Description, link, or details)
2. **What's the overindex ratio?** (From `post-performance-scorer`. Below 0.7x = underperform. Below 0.3x = dead.)
3. **How many posts have you made in this format/topic?** (If fewer than 15, you may not have enough data to judge)
4. **What was the hook?** (First 1-3 seconds of video or first line of text)
5. **What format was it?** (Video, carousel, text, image)
6. **Which platform?** (A piece that dies on TikTok might live on LinkedIn)
7. **What time did you post?** (Timing can kill otherwise good content)

### Step 2: Apply the Kill/Iterate Decision Tree

```
Is this the first time you've tried this topic?
├── YES → ITERATE. Not enough data. Try the same topic with a different hook/format.
│         You need at least 3-5 attempts on a topic before killing it.
│
└── NO → Have you tried this topic 3+ times with different hooks/formats?
    ├── YES → Did ANY version overindex (even mildly)?
    │   ├── YES → ITERATE toward the version that worked. Change one variable at a time.
    │   └── NO → KILL. The audience has spoken. This topic doesn't resonate. Move on.
    │
    └── NO → ITERATE. Try a different:
        ├── Hook (different first 1-3 seconds)
        ├── Format (video → carousel, text → video)
        ├── Platform (TikTok → LinkedIn, Instagram → Facebook)
        ├── Angle (educational → personal story → controversial take)
        └── Timing (different day/time)
```

### Step 3: If KILL — What to Do

1. **Don't mourn it.** Volume-based content strategy means 60-80% of your content will underperform. That is normal and expected.
2. **Log the lesson.** What did you learn? Add it to your content log:
   - Topic: [X]
   - Attempts: [X]
   - Best overindex ratio achieved: [X]
   - Lesson: [one sentence — "Audience doesn't care about X" or "This format doesn't work for this topic"]
3. **Reallocate the time.** The 30 minutes you would have spent iterating on this dead topic? Spend it on a topic that IS overindexing.
4. **Update your content calendar.** Remove this topic from rotation. Replace with a topic from your overindexer list.

### Step 4: If ITERATE — What to Change

Change ONE variable at a time. If you change everything, you learn nothing.

**Variable Priority Order (what to change first):**

| Priority | Variable | Why It Matters | How to Test |
|----------|----------|---------------|-------------|
| 1 | **Hook** | Gary's 1-second economy. If the hook fails, nothing else matters. | Same content, 3 different opening lines/visuals |
| 2 | **Format** | Some ideas work better as video. Others as carousels or text. | Same topic, completely different format |
| 3 | **Platform** | A piece that dies on TikTok might crush on LinkedIn. Different audiences. | Same content, different platform |
| 4 | **Angle** | Educational vs. personal story vs. hot take vs. how-to | Same topic, different framing |
| 5 | **Timing** | Post at a different day/time | Same content, different slot |
| 6 | **Length** | Shorter? Longer? | Same content, trimmed or expanded |

> "The one second economy is the thumbnail, the screen. How do you capture somebody for one second so that you can have them for one year?" — Gary Vaynerchuk, Tea with GaryVee (`Q7mhzMOA1Go`)

### Step 5: Set Iteration Limits

Don't iterate forever. Set clear limits:

- **Maximum iterations per topic:** 5 distinct attempts (different hooks/formats)
- **Maximum iterations per format:** 3 attempts with the same format before trying a new one
- **Time limit:** If a topic hasn't overindexed in 2 weeks of attempts, kill it
- **The escape hatch:** If you're 3 iterations in and trending downward (each attempt performs worse), kill immediately

## Output

Deliver a **Kill/Iterate Decision** in this format:

```markdown
# Kill/Iterate Decision
**Post:** [description]
**Platform:** [platform]
**Overindex Ratio:** [X]x (below [threshold])
**Previous attempts on this topic:** [X]

## Decision: [KILL / ITERATE]

### If KILL:
- **Reason:** [why this topic/format is dead]
- **Lesson learned:** [one sentence]
- **Replacement topic:** [what to make instead, based on overindexer data]
- **Time recovered:** [X min/week to reallocate]

### If ITERATE:
- **Variable to change:** [Hook / Format / Platform / Angle / Timing]
- **Current version:** [what you did]
- **Iteration plan:**
  - Version A: [specific change]
  - Version B: [specific change]
  - Version C: [specific change]
- **Test timeline:** Post all 3 within [X] days
- **Kill trigger:** If none overindex after these 3, kill the topic entirely
- **Success trigger:** If any version hits [X]x overindex, send to winner-amplification-tool
```

## Composability

- Receives underperformers from `post-performance-scorer`
- Successful iterations feed back into `post-performance-scorer` for re-evaluation
- Kill decisions feed into `daily-content-calendar-builder` (remove dead topics, add winning topics)
- Format/platform insights feed into `platform-arbitrage-scanner`

## Source Transcripts
- `Q7mhzMOA1Go` - Tea with GaryVee (outwork your curiosity, 12 isn't enough, do 200 more)
- `yHjHVG6mBg0` - Influencer keynote (search for value not virality, incremental improvement)
- `_TdzXnYJuSY` - Day Trading Attention (analyze overindex data, iterate on creative)
- `Sio8lkFXiMY` - Chiropractic keynote (post organic first, creative determines views)

## Reference
- `references/frameworks/day-trading-attention-thesis.md`
- `references/frameworks/organic-first-ad-testing.md`
