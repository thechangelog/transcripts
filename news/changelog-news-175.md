**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 5th, 2026.

That was a nice break! Two weeks away and I didn't write a lick of code. (Who *writes* code anymore, honestly?) I did take time to have Claude Code refresh [the 'ol blog](https://jerodsanto.net) and logged all your awesome [book recommendations](https://jerodsanto.net/2025/12/changelog-community-book-recommendations/) for everyone to peruse (more than 30 to pick from!)

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The move faster manifesto](https://brianguthrie.com/p/the-move-faster-manifesto/)

Brian Guthrie has worked in the software industry for over twenty years at organizations big and small. He's been a consultant, a line engineer, a director, a founder, and a CTO. He frequently gets asked how to move faster in software. He says it's easier to describe than it is to do (many things are), but goes on to provide his rules for moving fast. The are:

1. It Is Possible To Move Fast, And Fast Matters
2. Fast Is Measured By What Other People See
3. You Can Be Both Fast And Good
4. It Is Everyone’s Responsibility To Move Fast
5. Moving Fast Takes Courage
6. Busy Is Not Fast
7. Change Fast Or Die

Each of those seven rules are detailed in his linked post.

**Break:**

**Jerod Santo:**

[A context management system for Claude Code](https://github.com/parcadei/Continuous-Claude-v2)

The problem: When Claude Code runs low on context, it compacts (summarizes) the conversation. Each compaction is lossy. After several, you're working with a summary of a summary of a summary. Signal degrades into noise.

The solution: Clear, don't compact. Save state to a ledger, wipe context, resume fresh.

**Break:**

**Jerod Santo:**

[A multi-agent orchestrator for Claude Code](https://github.com/steveyegge/gastown)

_A theme emerges..._

Steve Yegge's *Gas Town* project has similar goals to the previous one, but approaches the problem the way Steve often does: by turning it to 11. Here's what life looks like without Gas Town:

- Agents forget work after restart
- Manual coordination
- 4-10 agents is chaotic
- Work state in agent memory

But with Gas Town it looks like this:

- Work persists on hooks - survives crashes, compaction, restarts
- Agents have mailboxes, identities, and structured handoffs
- Comfortably scale to 20-30 agents
- Work state in Beads (git-backed ledger)

I have no idea how this place out in practice, but "comfortably scale to 20-30 agents" is a check I'd love to see somebody try to cash. (My favorite idea here is that once you have Gas Town all set up you talk to the Mayor and they "create convoys, dispatch workers, and coordinate everything." [Who run Gas Town?](https://youtu.be/kJ-UZ4DvYBg?si=R4meBuDoVcK3AEAW&t=38))

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[100 million builds. 968 years saved.](https://depot.dev/blog/depot-2025-recap)

Depot just published their 2025 recap, and the numbers are staggering. They accelerated over 100 million builds last year, saving engineering teams ~8.5 million hours of build time. That's 968 years reclaimed for actual development work.

What's impressive is they maintained performance at scale. Despite an 8x increase in build volume, average build times actually improved—from 3 minutes 11 seconds down to exactly 3 minutes. At peak, they're handling over 2,000 builds per minute.

The team shared some hard-won insights too. External dependencies like Docker Hub and GitHub remain challenging—webhook delivery isn't guaranteed, third-party reliability varies. Their response: better observability tools, usage dashboards, and GitHub Actions analytics to give teams visibility into what's actually happening.

Looking ahead, they're building a custom build engine, enhanced GitHub Actions runners with improved caching, and stronger reliability protections against upstream outages. They also noted something we're all feeling: AI coding tools are shifting the bottleneck from writing code to getting it integrated and deployed.

Read the full recap at [depot.dev](https://depot.dev/blog/depot-2025-recap) or by following the link in this week's Changelog Newsletter.

**Break:**

**Jerod Santo:**

[2026: the great engineering divergence](https://x.com/pauldix/status/2006423514446749965)

Here's InfluxDB CTO, Paul Dix:

> Once coding speed jumps, everything around it becomes the constraint. Your throughput gets capped by whatever is slowest—clarifying requirements, reviewing changes, validating correctness and performance, getting to production safely, and operating what you shipped. In 2026, the great engineering divergence will be determined by who raises that ceiling end-to-end.

If Paul is right, the most effective software teams at the end of '26 will be "wildly more productive" than even the most effective software teams from the beginning of '25. How does the world change in that new reality? Paul has some ideas and some advice on how to think about software development in 2026.

**Break:**

**Jerod Santo:**

[Web development is fun again](https://ma.ttias.be/web-development-is-fun-again/)

Mattias Geniar looks back longingly at the simpler days of web dev and then rejoices that _AI has entered the chat_ because it levels the playing field for him, by making the complexity of each domain matter a lot less:

> There’s mental space for creativity in building software again.
>
> My head isn’t constantly full of build pipelines, testability concerns, code patterns, unfixed bugs… I’m confident I can cover that with help from AI. It still needs to be done, but it’s done so much faster - and it no longer feels overwhelming.
>
> That leaves room to experiment with UI and UX, to try ideas and throw them away. To add small quality-of-life improvements I couldn’t justify before, because there was always something more urgent.
>
> It’s also not the typing of code that I really enjoy, nor is it the syntax or structure or boilerplate that’s required to build anything. It’s the fact you get to build something out of nothing, writing code was just how you got there. And with today’s tooling, that saves a ton of time.
>
> AI really has made web development fun again.

This certainly isn't everyone's experience, but I'm hearing it from more and more developers every week.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Mole deep cleans and optimizes your Mac](https://github.com/tw93/Mole)
- [EHTML is extended HTML for real apps](https://e-html.org)
- [Software taketh away faster than hardware giveth](https://herbsutter.com/2025/12/30/software-taketh-away-faster-than-hardware-giveth-why-c-programmers-keep-growing-fast-despite-competition-safety-and-ai)

Get in on the newsletter at changelog.news

We have some great episodes coming up! On Wednesday, **Sid Sijbrandij** joins us to share his cancer journey and his work after GitLab. And on Friday, the one-and-only **Mat Ryer** is on Changelog & Friends doing what only Mat can do!

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.