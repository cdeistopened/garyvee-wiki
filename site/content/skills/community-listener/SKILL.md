---
name: community-listener
description: "After distributing Round 1 micro content, analyze comments and engagement signals to build Round 2 — community-driven content. Gary's secret weapon: let the audience tell you what to make next. Use when someone says 'what content should I make next based on engagement,' 'how do I use comments to drive content,' 'community-driven content strategy,' or 'what did my audience actually want.'"
---

# Community Listener

Analyze engagement data from Round 1 micro content distribution to build a Round 2 content plan driven by what the audience actually responded to. This is the step most creators skip — and it is the most valuable part of the GaryVee Content Pyramid.

## Context

Most creators run the Content Pyramid as a one-way pipeline: pillar to micro to distribute. Done. Gary's model has a critical second phase that the 86-page deck emphasizes and that almost everyone ignores: listen, then create Round 2.

> "This is the most exciting part. He waits and he listens for community insights. Gary Vee's team goes through all the comments of the content that's posted to figure out which clip, which part of the video the people were most excited about, gave them the most value, got the most reactions. And with that they're able to create content the audience themselves want to see. That is called community-driven content." — David Wong, Content Model walkthrough (`bRSw84qTvZs`)

> "One tip that he gave us is to tell your audience to comment with a timestamp of the bit of the video that they liked the most. That makes his job easier, his team's job easier, and it will make your job easier." — David Wong (`bRSw84qTvZs`)

> "He listens. He does a second round of micro content. Once everything's distributed, he listens to people... they go back and look at that and if they think it's a good piece of content they might actually take your recommendation and put it as a Facebook post or an Instagram post and repurpose it." — Kevin J Pino, Content Model breakdown (`FvUhZQfG350`)

## The Consultation

### Step 1: Gather Engagement Data

Ask for engagement data from the Round 1 distribution:

1. **Which micro content pieces did you post?** (List of all pieces from the extraction plan)
2. **Performance data per piece:** For each, collect:
   - Views (or impressions)
   - Comments (number + top comments)
   - Saves / bookmarks
   - Shares / reposts
   - Watch time / completion rate (for video)
   - Click-throughs (if applicable)
3. **Comment themes:** What are people actually saying? Group into:
   - Questions they're asking
   - Topics they want more on
   - Timestamps they reference (if from a longer piece)
   - Disagreements or debates
   - Personal stories they share in response
4. **DMs received:** Any direct messages in response to the content? These often contain the strongest signals.

### Step 2: Score and Diagnose

**Identify Overindexers:**
Compare each piece's performance to the account's rolling average. Any piece getting 3x+ average views, 5x+ average comments, or 2x+ average saves is an overindexer.

**Map Comment Signals:**

| Signal Type | What It Means | Action |
|-------------|--------------|--------|
| **"More of this!"** comments | Topic hit. They want depth. | Create a dedicated pillar piece on this specific topic. |
| **Questions in comments** | Knowledge gap. Audience wants the answer. | Create Q&A content addressing the top questions. |
| **Debate / disagreement** | Controversy = engagement. | Create a follow-up that directly addresses the counterargument. |
| **Personal stories** | Emotional resonance. | Feature audience stories (with permission) in Round 2 content. |
| **Timestamp references** | Specific moment resonated. | Re-extract that moment with a different format or angle. |
| **"Tag someone" behavior** | High share intent. | Create more content in this exact format for shareability. |
| **Saves > likes** | Reference value. | Audience wants to come back to this. Create a series. |

### Step 3: Build the Round 2 Content Plan

Based on the engagement analysis, create three types of Round 2 content:

**A. Amplification Content (Re-extract overindexing nuggets)**
- Take the same moment, different angle
- Different format (if the video clip worked, now make it a carousel)
- Different platform (if it crushed on TikTok, post it on YouTube Shorts and LinkedIn)

**B. Expansion Content (Go deeper on what resonated)**
- Answer the top 3-5 questions from comments
- Create a dedicated pillar piece on the overindexing topic
- Do a follow-up addressing debates or misconceptions

**C. Audience-Generated Content (Feature their input)**
- Compile best audience comments into a post
- Create content that directly references what they said
- Ask the audience to weigh in on what to create next

### Step 4: Set Up the Listening Loop

This is not a one-time step. Build the ongoing system:

1. **Ask for timestamps:** In every pillar piece, tell the audience to comment their favorite moment with a timestamp.
2. **Weekly comment audit:** 30 minutes per week scanning top comments across platforms.
3. **Monthly content direction review:** Which topics consistently overindex? Those become your next pillar themes.
4. **Community content ratio:** At least 20% of your content should be community-driven.

## Output

Deliver a **Community-Driven Content Plan** in this format:

```markdown
# Round 2 Content Plan — Community-Driven
**Based on Round 1 distribution from:** [date range]
**Pieces analyzed:** [X]

## Top Overindexers
| Piece | Platform | Views vs. Avg | Comments vs. Avg | Key Signal |
|-------|----------|--------------|-----------------|------------|
| [title] | [platform] | [X]x | [X]x | [signal type] |

## Top Comment Themes
1. [Theme] — appeared in [X] comments across [X] platforms
2. [Theme] — [X] comments
3. [Theme] — [X] comments

## Round 2 Content Plan

### A. Amplification (re-extract overindexers)
1. [Nugget] — new format: [carousel/thread/etc.] — platform: [new platform]
2. [Nugget] — same format, different hook — platform: [same or new]

### B. Expansion (go deeper)
1. New pillar piece on: [topic from overindexing content]
2. Q&A addressing top audience questions:
   - [Question 1]
   - [Question 2]
   - [Question 3]
3. Follow-up on debate: [topic where comments disagreed]

### C. Audience-Generated
1. Best comments compilation post
2. "You asked for it" content piece on [topic]
3. Poll: [question to audience about next content]

## Listening System Updates
- [ ] Add timestamp CTA to next pillar piece
- [ ] Schedule weekly 30-min comment audit
- [ ] Track overindexing topics in content log
```

## Composability

- Receives performance data from `post-performance-scorer` (Playbook C)
- Feeds back into `pillar-content-identifier` (audience tells you what to make pillar content about next)
- Feeds into `micro-content-extractor` (new extraction from audience-driven angles)

## Source Transcripts
- `bRSw84qTvZs` - Content Model (community-driven content phase, timestamp CTA tactic)
- `FvUhZQfG350` - Content Model (Round 2, listening phase)
- `eqwKdUR_p-0` - E-commerce implementation (community feedback loop)

## Reference
- `references/frameworks/64-pieces-of-content-model.md`
- `references/frameworks/pillar-to-micro-pipeline.md`
- `references/frameworks/content-pyramid-case-studies.md`
