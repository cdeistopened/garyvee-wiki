---
name: distribution-orchestrator
description: "Plan the release sequence and timing for pillar + micro content across all platforms. Gary's specific pattern: pillar at 12:00, micro at 12:01. Die-hard fans get the long-form; casual scrollers see micro and get pulled back. Use when someone says 'when should I post my content,' 'help me plan my distribution schedule,' 'how do I sequence my content release,' or 'content distribution timing strategy.'"
---

# Distribution Orchestrator

Plan the timed release sequence for one pillar content piece and all its micro content derivatives across every platform. The goal: maximize the flywheel effect where micro content drives traffic back to the pillar piece.

## Context

Most creators post their content whenever they finish editing. Gary's model is deliberate about sequencing: the pillar piece drops first, the micro pieces follow immediately, and the timing creates a pull-back effect.

> "He releases them all at 12 o'clock and then at 12:01 he puts on all the smaller pieces so anyone who's a die-hard fan is gonna start watching and then anyone who is just checking social media is gonna go from there to the longer piece of content. Actually brilliant." — Kevin J Pino, Content Model breakdown (`FvUhZQfG350`)

> "The purpose of this first round distribution is to drive people back to the piece of pillar content. Get them excited about what is talked about in that keynote, that podcast, so they will go back to his YouTube channel, his Facebook, his podcasts." — David Wong, Content Model walkthrough (`bRSw84qTvZs`)

Gary's personal brand in 2026 posts 12-15 pieces per day across all platforms before noon. At scale (Expo West 2026), the goal was 400+ pieces of organic content per day across 9 platforms and 57 handles.

## The Consultation

### Step 1: Understand the Distribution Context

Ask:
1. **What's the pillar piece?** (Format, duration, platform it's hosted on)
2. **How many micro pieces are ready?** (Get the list from the micro-content-extractor output)
3. **Which platforms are you posting to?** (List active platforms with handles)
4. **What's your team capacity?** (Solo creator, small team, full team — this determines how many platforms are realistic)
5. **What timezone is your audience in?** (Primary timezone for timing)
6. **Do you have existing posting schedules or commitments?** (Don't conflict with established cadence)

### Step 2: Apply the Distribution Framework

**The GaryVee Release Sequence:**

```
T+0:00  — Pillar piece goes live on its primary platform (YouTube, podcast app, blog)
T+0:01  — ALL micro content drops simultaneously across all platforms
T+0:30  — Stories/ephemeral content pointing to the micro pieces
T+2:00  — Engage with early comments on micro content
T+24:00 — Re-share top performer from Round 1 (different angle/caption)
T+48:00 — Round 2 community-driven content (from community-listener)
T+72:00 — Written expansion (Substack/LinkedIn article) from the pillar themes
```

**Platform-Specific Timing Windows (2026):**

| Platform | Best Post Times | Frequency Notes |
|----------|---------------|-----------------|
| **TikTok** | 7-9am, 12-2pm, 7-10pm (audience TZ) | Multiple posts/day OK. Algorithm rewards volume. |
| **Instagram Reels** | 9-11am, 2pm, 7-9pm | 1-3 Reels/day optimal. Carousels anytime. |
| **YouTube Shorts** | 12-3pm, 5-7pm | 1-3/day. Consistency matters more than timing. |
| **Facebook** | 9-11am, 1-3pm | Longer content OK. Shares peak midday. |
| **LinkedIn** | 7-9am, 12pm, 5-6pm (business hours) | 1-2 posts/day. Mornings perform best. |
| **Snapchat Spotlight** | Evening 7-11pm | Entertainment hours. Lean fun/casual. |
| **X / Twitter** | 8-10am, 12-1pm, 5-6pm | Multiple tweets/day expected. Threads mornings. |
| **Substack / Email** | Tuesday-Thursday, 8-10am | Written expansion. Don't send daily unless you have the content for it. |

### Step 3: Build the Distribution Calendar

**Tier 1: Solo Creator (3-5 platforms, 5-10 pieces/day)**
Focus on TikTok, Instagram, YouTube Shorts as the core three. Add LinkedIn for B2B. Add Facebook for 45+ demo. Post micro content within 1 minute of pillar drop.

**Tier 2: Small Team (5-7 platforms, 10-20 pieces/day)**
All of Tier 1 plus Snapchat Spotlight, X/Twitter, and written platforms. Stagger micro content across a 2-hour window after pillar drop to keep engagement rolling.

**Tier 3: Full Operation (7-9 platforms, 20-50+ pieces/day)**
Gary's model. Multiple handles per platform (niche handles). 400+ pieces/day is the Vayner Media target. Requires a dedicated content team.

> "On May 1st, I will be posting organically on nine platforms, 57 different handles, and posting over 400 pieces of organic content a day." — Gary Vaynerchuk, Expo West 2026 (`VMumHwVEfFs`)

### Step 4: Cross-Linking Strategy

Every micro piece should create a pathway back to the pillar:

- **Video clips:** "Full conversation on my YouTube" in caption
- **Quote graphics:** "From my latest [podcast/keynote] — link in bio"
- **Carousels:** Last slide = CTA to the pillar piece
- **Threads:** Final tweet links to the pillar
- **Stories:** Swipe-up (or link sticker) to the pillar

**Critical rule:** Always upload natively. Never post a YouTube link on Facebook. Never post a TikTok-watermarked video on Instagram. Each platform penalizes cross-posted links.

## Output

Deliver a **Distribution Schedule** in this format:

```markdown
# Distribution Schedule
**Pillar piece:** [Title]
**Pillar platform:** [YouTube / Podcast / Blog]
**Pillar drop time:** [Date, Time, Timezone]
**Total micro pieces:** [X]
**Platforms:** [list]

## Release Timeline

### T+0:00 — Pillar Drop
- [ ] [Platform]: [Title] posted at [time]

### T+0:01 — Round 1 Micro Content Blitz
| Platform | Piece | Format | Post Time | Caption Preview |
|----------|-------|--------|-----------|----------------|
| TikTok | [nugget title] | Vertical video 45s | [time] | [first line] |
| Instagram | [nugget title] | Carousel 7 slides | [time] | [first line] |
| YouTube Shorts | [nugget title] | Vertical 30s | [time] | [title] |
| [etc.] | | | | |

### T+0:30 — Stories + Ephemeral
- [ ] Instagram Stories: [content]
- [ ] Snapchat: [content]

### T+2:00 — Engagement Window
- [ ] Reply to first 10 comments on each platform
- [ ] Like comments on all micro posts
- [ ] Answer questions in comments

### T+24:00 — Re-share Top Performer
- [ ] [Platform]: Repost [piece] with new caption angle

### T+48-72:00 — Round 2 (Community-Driven)
- [ ] Pending community-listener analysis

### T+72:00 — Written Expansion
- [ ] Substack/LinkedIn: Long-form article expanding on [topic]
- [ ] Email newsletter: [segment featuring pillar content]

## Native Upload Checklist
- [ ] All videos exported in platform-native specs
- [ ] No cross-posting links (native upload only)
- [ ] Each platform has unique caption (not copy-paste)
- [ ] Hashtags customized per platform
```

## Composability

- Receives content list from `micro-content-extractor`
- Receives platform briefs from `platform-native-adapter`
- After Round 1, `community-listener` drives Round 2 timing
- After Round 1, `post-performance-scorer` (Playbook C) evaluates performance

## Source Transcripts
- `FvUhZQfG350` - Content Model (12:00/12:01 release sequence)
- `bRSw84qTvZs` - Content Model (Round 1 drives to pillar, Round 2 from community)
- `VMumHwVEfFs` - Expo West 2026 (400 pieces/day, 9 platforms, 57 handles)
- `_TdzXnYJuSY` - Day Trading Attention (12-15 pieces before noon, 7 platforms)
- `Sio8lkFXiMY` - Chiropractic keynote (posting volume, 432 pieces in a day)

## Reference
- `references/frameworks/pillar-to-micro-pipeline.md`
- `references/frameworks/platform-native-formats-2026.md`
- `references/frameworks/seven-platform-playbook.md`
