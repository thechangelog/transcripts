**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, December 2nd, 2024.

We've arrived at `months[11]`, which means everyone's breaking out their year-end content. First up, Oxford has selected their word of the year: [brain rot](https://corp.oup.com/word-of-the-year)

> (n.) Supposed deterioration of a person’s mental or intellectual state, especially viewed as a result of overconsumption of material (now particularly online content) considered to be trivial or unchallenging.

Hopefully we do not contribute to brain rot...

But speaking of year-end content... we're preparing for our 7th annual [State of the "log"](http://changelog.com/topic/sotl) episode and we need your help!

[Go to changelog.fm/sotl](https://changelog.fm/sotl) and leave us a voice mail. If your audio is used on the show, we'll hook you up with your very own Breakmaster Cylinder remix! 🕺

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[If not React, then what?](https://infrequently.org/2024/11/if-not-react-then-what/)

In the hopes of steering the next team away from the rocks, Alex Russell dives deep on why he believes "nobody should start a new project in the 2020s based on React. Full stop." His overarching message:

> Frameworkism isn't delivering. The answer isn't a different tool, it's the courage to do engineering.

I've been preaching similar things around these parts basically forever. Not against frameworks, per se, but against the belief that the *next* framework will deliver us from whatever self-constructed hellscape of a codebase we're currently abiding in. This statement rings particularly true:

> A shocking fraction of (decent, well-meaning) product managers and engineers haven't thought through the whys and wherefores of their architectures, opting instead to go with what's popular in a sort of responsibility fire brigade.

**Break:**

**Jerod Santo:**

[The real cost of knowledge silos](https://leadership.garden/knowledge-silos/)

Csaba Okrona takes note that the SO survey revealed **45% of developers hit knowledge silos *three or more times per week***. Here's what keeps him up at night:

- Engineers feeling frustrated and isolated
- Innovation dying in departmental dead ends
- Your best people solving the same problems over and over

After years of scaling engineering teams, Csaba has identified four core problems that create and reinforce knowledge silos:

1. The Vertical Information Trap
2. The Documentation Curse
3. The Onboarding Gap
4. The Tribal Mindset

Check his article for descriptions of each. What's the path forward? Csaba says:

> Want to break this cycle? Start rewarding the sharing of knowledge more than its possession. Make “multiplier effects” part of your promotion criteria. Celebrate the engineers who make others better.

**Break:**

**Jerod Santo:**

[Markwhen is like Markdown for timelines](https://markwhen.com/)

This project by Rob Koch looks really well-made and full-featured!

> A markdown-like *journal language* for plainly writing logs, gantt charts, blogs, feeds, notes, journals, diaries, todos, timelines, calendars or anything that happens over time.

Rob hasn't merely designed the Markwhen language, he also created [Meridiem](https://meridiem.markwhen.com), a collaborative editor for it that supports custom commands, snippets, visualizations, autocomplete & more!

Oh, and he built a [CLI](https://github.com/mark-when/mw), an [Obsidian Plugin](https://github.com/mark-when/obsidian-plugin) & a [VS Code](https://github.com/mark-when/vscode) extension...

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Debug faster with Sentry's AI tools](https://sentry.io/resources/debug-faster-sentry-ai-live-demo/?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)

Next Tuesday, join Jenn Mueng & Ram Senthamarai, the engineers behind Sentry's latest AI-powered tools. They'll walk you through Sentry's approach to AI and share how they're seeing it reshape the developer experience.

This session is all about debugging faster with Sentry's AI tools and includes a live demo of what they've built—no AI hype here, just smarter alerts, issue summaries, and suggested fixes to get you back to building faster.

During the session, you'll learn:

- How priority alerts and issue grouping work to highlight what matters
- How to use anomaly detection to spot issues before they blow up
- How to integrate automatic issue fixes right into your workflow

It will close with a live Q&A, where they'll answer your questions, dive deeper into how these features work, and show you how to make the most of them in your workflow. [Don't miss it](https://sentry.io/resources/debug-faster-sentry-ai-live-demo/?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)!

**Break:**

**Jerod Santo:**

[M4 Mac mini's efficiency is incredible](https://www.jeffgeerling.com/blog/2024/m4-mac-minis-efficiency-incredible)

Jeff Geerling is quite impressed by Apple's latest iteration on the Mac mini:

> I expected M4 to be better than M1/M2 (I haven't personally tested M3), and I hoped it would at least match the previous total-system-power efficiency king, a tiny arm SBC with an RK3588 SoC... but I didn't expect it to jump forward 32%. Efficiency gains on the Arm systems I test typically look like 2-5% year over year.
>
> The M4 mini I just bought reaches **6.74 Gflops/W** on the HPL benchmark...
>
> The chip isn't the fastest at everything, but it's certainly the most efficient CPU I've ever tested. And that scales down to idle power, too—it hovers between 3-4W at idle—which is about the same as a Raspberry Pi.

**Break:**

**Jerod Santo:**

[Comparing AWS S3 with Cloudflare R2](https://kerkour.com/aws-s3-vs-cloudflare-r2-price-performance-user-experience)

Sylvain Kerkour took the time to draw a comparison of Amazon's O.G. S3 service with Cloudflare's competitor across 1) price, 2) performance & 3) user experience vectors. I'll leave the details for you to plumb on your own time, here's Sylvain's conclusion after all the hard work had been put in:

>  I initially started this conclusion along the lines of "S3 strengths are... R2 strengths are ... So now the decision is up to you", but damn the blandness!
>
> Honestly, I see only a few reasons to use S3 today: if ~40ms of latency really matters, if you already have a mature AWS-only architecture and inter-region traffic fees are not making a dent in your profits, or if it's really hard to bring another vendor into your infrastructure for organizational reasons. That's all.
>
> Maybe 90%+ of projects and organizations will be better served by Cloudflare R2.

We've been on R2 for over a year and while it has a *few* rough edges (reduced 3rd-party client support, custom domain requirement, off the top of my head) it has saved us a bunch of money on egress fees!

**Break:**

**Jerod Santo:**

That's the news for now, but... also scan the companion issue of our Changelog Newsletter for even more news worth your attention, including: good software development habits, the skill that is not-doing, can you measure a tech team's efficiency, DHH talking BDFLs, WordPress, SQLite, and Rails, and more!

Get in on that action at changelog.com/news

We have some great episodes coming up for you this week: Akon joins me from Hack Club’s new High Seas competition on Wednesday, and on Friday, we talk shop with ShopTalk's Chris Coyier and Dave Ruport.

Have a great week! Leave us a voicemail at changelog.fm/sotl, and I'll talk to you again real soon.
