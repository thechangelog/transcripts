**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, December 8th, 2025.

We're quickly approaching last call for [state of the "log"](https://changelog.com/topic/sotl) voicemails! We record in a week and have to give BMC time to make the remixes, so if you're thinking about [sending one](https://changelog.fm/sotl) in (you should), now's the best time!

Submit yours today at changelog.fm/sotl

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The "confident idiot" problem](https://steerlabs.substack.com/p/confident-idiot-problem)

_Or, "Why AI needs hard rules, not vibe checks"_

If you've been following the *how-do-we-actually-use-ai-in-production* conversation stream, you've probably heard people propose a strategy where one LLM checks another LLM's results. But will that work?

> We are told to ask GPT-4o to grade GPT-3.5. We are told to fix the “vibes.”
>
> But this creates a dangerous circular dependency. If the underlying models suffer from sycophancy (agreeing with the user) or hallucination, a Judge model often hallucinates a passing grade.
>
> We are trying to fix probability with more probability. That is a losing game.

One possible way of dealing with these "confident idiots" we've introduced into our software stacks the last few years is to "stop treating agents like magic boxes and start treating them like software." Hence, the [Steer SDK](https://github.com/imtt-dev/steer) was created. 

> Steer is an open-source Python library that intercepts agent failures (hallucinations, bad JSON, PII leaks) and allows you to inject fixes via a local dashboard without changing your code.

Another way of dealing with these "confident idiots" in our software stacks... remove them. If that's possible...

**Break:**

**Jerod Santo:**

[Bun is joining Anthropic](https://bun.com/blog/bun-joins-anthropic)

The company behind Bun, which is the open source runtime for Claude Code, is joining Anthropic. We discussed the big acqui(sition|hire) on [last week's Friends](https://changelog.am/120), but at the time I hadn't quite considered this move and how contrary it is to Anthropic's party line that AI agents are replacing software engineers. From Anthropic's announcement:

> We’ve been a close partner of Bun for many months. Our collaboration has been central to the rapid execution of the Claude Code team, and it directly drove the recent launch of Claude Code’s native installer. We know the Bun team is building from the same vantage point that we do at Anthropic, with a focus on rethinking the developer experience and building innovative, useful products.

Bun is open source. Why not just fork it and have a Claude Code powered engineer make all the necessary changes/upgrades to the runtime that Anthropic needs? Because there's no getting there from here. At least not yet. Jarred Sumner and the Bun team's *expertise* is what's so valuable. Even to Anthropic.

**Break:**

**Jerod Santo:**

[Claude can't recreate classic Space Jam site](https://j0nah.com/i-failed-to-recreate-the-1996-space-jam-website-with-claude)

Jonah Glover tried to recreate everyone's favorite [1996 website](https://www.spacejam.com/1996/) by giving Claude Code (running Opus 4.1) a screenshot of the site and all the associated assets. It failed (repeatedly) in all the ways I would expect from my own frontend / design attempts with the tool. Jonah's finding, which is quite relatable:

> Once Claude's version existed, every grid overlay, every comparison step, every "precise" adjustment was anchored to his layout, not the real one. At the end of all this, I'm left with the irritating fact that, like many engineers, he's wrong and he thinks he's right.
>
> What this teaches me is that Claude is actually kind of a liar, or at least Claude is confused. However, for the drama, I'll assume Claude is a liar.

I've been giving Claude Code a lot of props lately, but I've also been giving it a lot of tasks it just can't quite accomplish. This process starts off as fun and interesting, but each time it ends in failure I am perplexed by all the possible failure paths. Was it me and my prompting? Was it the agent? Was it the model? Or perhaps I'm asking for things that aren't easily accomplished with today's tech? (I can be quite demanding.)

This makes me yearn for the days when the only one to blame for my failures was me...

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Depot's Advent of Code 2025](https://depot.dev/events/advent-of-code-2025)

Depot is running a community leaderboard for Advent of Code 2025 and they're **putting real money behind it**.

The top five finishers each direct $1,000 to a registered charity of their choice. If you pick a charity supporting STEM education or the developer ecosystem, Depot adds a 50% bonus. They've already generated $7,500 in donations.

The format: 12 days of puzzles, unlocking daily at midnight EST starting December 1st. Solve at your own pace. There's no time limit. Any language, any skill level. Each day brings a two-part programming challenge from Eric Wastl's Advent of Code.

To join Depot's private leaderboard, request access on their events page. They'll send you a code. Whether you're competing for the top 5 or just want to sharpen your skills alongside other devs, it's a good excuse to write some code this month.

Check it out at [depot.dev/events/advent-of-code-2025](https://depot.dev/events/advent-of-code-2025) or just follow the link in the newsletter and your chapter data

**Break:**

**Jerod Santo:**

[Google *unkills* JPEG XL?](https://tonisagrista.com/blog/2025/google-unkills-jpegxl/)

> In a dramatic turn of events, the Chromium team has reversed its "Obsolete" tag, and has decided to support the format in Blink (the engine behind Chrome/Chromium/Edge). Given Chrome’s position in the browser market share, I predict the format will become a de factor standard for images in the near future.

We're used to things being [killed by Google](https://killedbygoogle.com)... but *unkilled*?! This is a trend I can get behind. Unkill requests! 

It's time to bring back [Zeitgeist](https://web.archive.org/web/20210312230138/https://www.lifewire.com/google-zeitgeist-3481903), [Dodgeball](https://en.wikipedia.org/wiki/Dodgeball_(service)), and [Google Reader](https://en.wikipedia.org/wiki/Google_Reader)...

**Break:**

**Jerod Santo:**

[The next generation of Linux gaming](https://bazzite.gg/)

If the mythical "Year of the Linux Desktop" is ever to materialize, it will first be preceded by a sea change in gaming options for the venerable open source OS. The gaming sea change appears to be in full swing, with Steam on Linux hitting an all-time high over 3% usage [last month](https://www.phoronix.com/news/Steam-Linux-November-2025).

Enter Bazzite, a Fedora-based Linux distro that's hyper-focused on making gaming awesome:

> Bazzite is designed for Linux newcomers and enthusiasts alike with Steam pre-installed, HDR & VRR support, improved CPU schedulers for responsive gameplay, and numerous community-developed tools and tweaks to streamline your gaming and streaming experience.

The project began back in 2023, but it appears to be maturing and aiming at sustainability by setting up ways to donate with its [latest update](https://universal-blue.discourse.group/t/bazzite-fall-update-fedora-43-xbox-allies-legion-go-2-nvidia-gtx/10948):

> As Bazzite matures, we begin to tackle more ambitious projects, such as proper secure boot, support for more handheld devices, and conference attendance, which means more costs for us. And we would gladly appreciate the help in covering them!

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Why I ignore the spotlight as a staff engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
- [Vanilla CSS is all you need](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)
- [What happens when you take an XKCD joke too literally](https://stacktower.io)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
