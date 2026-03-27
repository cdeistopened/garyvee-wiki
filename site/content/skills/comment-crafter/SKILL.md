---
name: comment-crafter
description: "Write the 'two cents' engagement comments that build real connections — not spam, not emojis, not 'nice post.' Craft comments that add genuine value to someone else's post so the creator AND their audience notice you. Use when someone says 'what should I comment,' 'how do I write good engagement comments,' 'help me do the $1.80 strategy,' 'my comments aren't getting responses,' or 'how do I stand out in comments.'"
---

# Two-Cents Comment Crafter

Given a post in one of your target hashtags, craft a comment that provides genuine value. The comment should add a tip, ask a thoughtful question, answer an unanswered question in the thread, or contribute expertise. This is the core execution skill of the $1.80 strategy — and the part most people get wrong.

## Context

The $1.80 strategy lives or dies on comment quality. Most people execute it by leaving "Great post!" or a fire emoji on 90 posts. That does nothing. Gary's entire point is that you're investing your TWO CENTS — your actual opinion, knowledge, and perspective — into someone else's community.

> "The key is not to just leave an emoji or a 'that's nice' or 'that's cool.' You want to leave a meaningful comment — a tip, or maybe asking a question, or just engaging with them in a conversation on the comment... always focus on value, being authentic and transparent and building meaningful relationships because every connection is great on social media." — Jeremiah, $1.80 strategy review (`Ip83aSz2BJM`)

> "Don't post spam or self-promotion. Don't go on there and say 'hey I really like your page, how about you come follow mine' because your comment will probably get removed. Post something of value instead. Like as many comments as you can. Reply to comments with answers if someone has a question. Make sure your comments stand out and attempt to build the top comment and to build an authority on those comment sections." — Zach Bordeaux (`04fJ79qT22Q`)

> "I go into each post and I leave a thoughtful comment. If it's a video I'll leave a comment on something that touched me as I watched the video. Another thing — if people ask a question in the comments, often the content creator won't actually answer that question. That gives me an opportunity to go in there and answer their question, provide a thoughtful answer." — Financial Freedom Channel (`g6pAYKkvSac`)

## The Consultation

### Step 1: Understand the Post

Ask:
1. **What's the post about?** (Paste the caption, describe the image/video, or share a screenshot)
2. **What hashtag community is this in?** (So we match the community tone)
3. **What are the existing comments saying?** (Top 3-5 comments — so we don't duplicate)
4. **What's your area of expertise?** (What unique knowledge can you bring?)

### Step 2: Classify the Comment Opportunity

| Opportunity Type | When It Exists | Comment Strategy |
|-----------------|----------------|-----------------|
| **Knowledge gap** | Creator's post leaves a question unanswered | Provide the missing piece with specificity |
| **Unanswered question** | Someone in the comments asked something nobody answered | Answer it thoroughly — the creator AND the asker will notice |
| **Experience add** | You've done what the post is about | Share a specific result, number, or lesson from your experience |
| **Thoughtful question** | The post makes a claim you want to explore | Ask a question that makes the creator WANT to respond |
| **Respectful counter** | You have a different perspective backed by experience | Offer the alternative view with genuine respect |
| **Resource share** | You know a tool, article, or method that extends the post's value | Share it without self-promoting |

### Step 3: Craft Three Comment Options

For each comment, follow these rules:

**DO:**
- Reference something specific from the post (proves you actually consumed it)
- Add a concrete detail, number, or example from your own experience
- Ask a question that invites continued conversation
- Match the community's tone (formal on LinkedIn, casual on Instagram, etc.)
- Keep it 2-4 sentences — long enough to add value, short enough to get read

**DO NOT:**
- Mention your own account, product, or content
- Use generic praise ("Amazing!" / "So true!" / "Love this!")
- Leave only emojis
- Copy-paste the same comment across posts
- Start with "I" (shifts focus from them to you)
- Be contrarian just for attention

### Step 4: Score Each Comment

Rate each draft comment:

| Criterion | Score 1-5 | What 5 Looks Like |
|-----------|-----------|-------------------|
| **Value-add** | | Teaches something or answers a real question |
| **Specificity** | | Contains a number, name, or concrete detail |
| **Conversation starter** | | The creator or another commenter will want to reply |
| **Authenticity** | | Sounds like a real human who genuinely cares |
| **Zero self-promotion** | | No mention of your account, product, or link |

Minimum score: 15/25 to post. Below that, rewrite.

## Output

Deliver **3 Comment Options** in this format:

```markdown
# Comment Options for [post description]
**Hashtag:** #[hashtag]
**Post by:** @[creator]
**Opportunity type:** [knowledge gap / unanswered question / experience add / etc.]

## Option 1 (Score: [X]/25)
> [The comment text]

**Why this works:** [1 sentence explaining the value-add]

## Option 2 (Score: [X]/25)
> [The comment text]

**Why this works:** [1 sentence]

## Option 3 (Score: [X]/25)
> [The comment text]

**Why this works:** [1 sentence]

## Recommended: Option [X]
**Reason:** [Why this one will get the best response]
```

## Comment Templates by Opportunity Type

These are starting structures, not copy-paste scripts. Adapt every time.

**Knowledge Gap:**
"[Specific reference to post]. One thing I'd add — [concrete detail]. I found that [specific result/number] when I [experience]."

**Unanswered Question:**
"@[commenter] — [answer their question with specificity]. The key detail that helped me was [detail]."

**Experience Add:**
"[Reference to post topic]. When I tried this, [specific result]. The part that surprised me was [insight]."

**Thoughtful Question:**
"Really interesting point about [specific claim]. Have you found that [genuine question about their experience]? I've been wondering because [your context]."

**Respectful Counter:**
"[Agree with one part first]. I've seen it play out differently with [specific context] — [alternative perspective]. Curious if you've seen that too."

## Composability

- Receives hashtag targets from `hashtag-mapper`
- Comment engagement data feeds into `daily-180-tracker`
- Patterns from successful comments feed into `community-listener` (what topics resonate)

## Source Transcripts
- `Ip83aSz2BJM` - $1.80 strategy (meaningful comments, not emojis, build relationships)
- `04fJ79qT22Q` - $1.80 strategy (no spam, no self-promotion, build top comment, build authority)
- `g6pAYKkvSac` - $1.80 strategy (thoughtful comments, answer unanswered questions, heart comments)
- `WxZlQmb7kuQ` - $1.80 strategy (give your two cents, give value, steal traffic through value)
- `yamQ2jBB1sU` - $1.80 strategy implementation

## Reference
- `references/frameworks/180-strategy-explained.md`
- `references/frameworks/engagement-before-content.md`
