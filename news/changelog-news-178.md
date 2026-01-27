**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 26th, 2026.

This year's [northern lights](https://en.wikipedia.org/wiki/Aurora) show went on tour and has even been visible as far south as California. We got a peak at it from our back deck, [somewhere in middle America](https://genius.com/Counting-crows-omaha-lyrics). But our experience paled in comparison to airline pilot [Matt Melnyk](https://www.instagram.com/matt_melnyk_photography), who captured [some](https://www.instagram.com/p/DTvJ84VEcU7/) [astounding](https://www.instagram.com/p/DTvKAvlkc_J/) [shots](https://www.instagram.com/p/DTvSJWHiB0q/) from 37,000 feet on his route from Calgary to London.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Clawdbot triggers a run on Mac Minis](https://www.starryhope.com/minipcs/clawdbot-mac-mini-ai-agent-trend/)

[Clawdbot](https://clawd.bot), an open source personal AI assistant that runs on your own hardware, has many developers *excited*:

> Developers aren’t just impressed. They’re calling it an “iPhone moment,” comparing it to early AGI, and in some cases, letting it run their entire companies.

What's all the excitement about?

> Given the right permissions, Clawdbot can browse the web, execute terminal commands, write and run scripts, manage your email, check your calendar, and interact with any software on your machine... Perhaps the most compelling feature is that Clawdbot is self-improving. Tell it you want a new capability, and it can often write its own “skill” (plugin) to make it happen.

Ok, ok but where do the Mac Minis enter this story?

> While Clawdbot can run on any computer, Mac Minis have emerged as the preferred choice, and for good reasons that go beyond Apple fandom.
>
> Apple Silicon’s unified memory architecture is exceptionally efficient for AI workloads. Instead of the CPU and GPU communicating over a slower connection, the memory sits directly on the chip package. This means the full memory bandwidth is instantly available to AI models, making local inference significantly faster than on traditional x86 systems with equivalent specs.

Click through for more hardware options, accounts of wild things people are doing with this, and a word of caution to those going all in.

**Break:**

**Jerod Santo:**

[The future of software engineering is SRE](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)

Swizec Teller:

> When code gets cheap operational excellence wins. Anyone can build a greenfield demo, but it takes engineering to run a service.

Hard to disagree with that, but I'd augment it by adding that running services is also getting easier at the same time. Still, he has a great point. One compounding factor in the agentic AI hype is that it opens the fun part of software development to a whole new set of people. Exciting stuff? yes! Sustainable software? Hardly.

> Good software is invisible. And that takes work. A lot of work. Because the first 90% to get a working demo is easy. It's the other 190% that matters.

**Break:**

**Jerod Santo:**

[The end of the curl bug-bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/)

Daniel Stenberg:

> There is no longer a curl bug-bounty program. It officially stops on January 31, 2026.

Despite some successes along the way (87 confirmed vulnerabilities and over $100k USD paid out), curl's bug bounty program unfortunately fell prey to AI slopsters trying to make an easy buck. That's not the only factor, though. Daniel says three bad trends combined to make them take this step:

> the mind-numbing AI slop, humans doing worse than ever, and the apparent will to poke holes rather than to help

In other sad news, last night curl ended [its historic NFL playoff run](https://jerodsanto.net/2026/01/all-the-places-curl-will-go/).

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Top 9 Postgres extensions Tiger Data customers use](https://www.tigerdata.com/blog/top-9-postgresql-extensions-used-by-tiger-data-customers-2026)

Tiger Data analyzed tens of thousands of databases to find the 9 extensions their customers actually use and the results are a love letter to Postgres extensibility. The top extensions their customers actually use are: TimescaleDB for time-series, pgvector and pgvectorscale for embeddings, PostGIS for geo, pgai for calling LLMs directly from SQL.

You want some data? Well, [pgvectorscale](https://github.com/timescale/pgvectorscale) benchmarks at 28x lower latency and 16x higher throughput than [Pinecone](https://www.pinecone.io/), at 75% less cost. And [TimescaleDB](https://github.com/timescale/timescaledb)? Your 1TB of time-series data compresses down to 100GB.

Instead of duct-taping three specialized databases together, you can extend the one you already know. No new query language. No data sync nightmares. No vendor lock-in.

This opens the door for teams to stop context-switching between databases and start shipping features.

Learn more about the top 9 PostgreSQL extensions and what TimescaleDB has to offer at [tigerdata.com/blog](https://www.tigerdata.com/blog).

**Break:**

**Jerod Santo:**

[zerobrew applies uv's model to Mac packages](https://github.com/lucasgelfond/zerobrew)

zerobrew takes some of the best ideas from [uv](https://github.com/astral-sh/uv) and applies them to Homebrew:

> Packages live in a content-addressable store (by sha256), so reinstalls are instant. Downloads, extraction, and linking run in parallel with aggressive HTTP caching. It pulls from Homebrew's CDN, so you can swap brew for zb with your existing commands.
>
> This leads to dramatic speedups, up to 5x cold and 20x warm.

This is all quite experimental at the moment, but it appears to be picking up steam. I also appreciate the author's approach to LLMs:

> I spent a lot of time thinking through this architecture, testing, and debugging. I also used Claude Opus 4.5 to write much of the code here. I am a big believer in language models for coding, especialy when they are given a precise spec and work with human input! 

**Break:**

**Jerod Santo:**

[LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)

Phil Eaton:

> The jobs that were dependent on fundamentals of software aren't going to stop being dependent on fundamentals of software. And if more non-developers are using LLMs it's going to mean all the more stress on tools and applications and systems that rely on fundamentals of software.
>
> All of this is to say that if you like doing software development, I don't think interesting software development jobs are going to go away. So keep learning and keep building compilers and databases and operating systems and keep looking for companies that have compiler and database and operating system products, or companies with other sorts of interesting problems where fundamentals matter due to their scale.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Running Claude Code dangerously (safely)](https://blog.emilburzo.com/2026/01/running-claude-code-dangerously-safely/)
- [Things I’ve learned in my 10 years as an engineering manager](https://www.jampa.dev/p/lessons-learned-after-10-years-as)
- [After two years of vibecoding, I'm back to writing by hand](https://atmoio.substack.com/p/after-two-years-of-vibecoding-im)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
