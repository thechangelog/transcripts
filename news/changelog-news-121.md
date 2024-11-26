**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 18th, 2024.

Is the love song dying?!

Well, thanks to some amazing investigatory (and visual) [work](https://pudding.cool/2024/11/love-songs/) by the folks at Pudding, we now know that modern pop music's treatment of love & romance *isn't* actually in decline. Or maybe *it is*. It depends on your definitions of "love" & "romance".

Go experience [their piece](https://pudding.cool/2024/11/love-songs/)  (which is linked up in the newsletter) and decide for yourself! What I learned, I agree more with their hypothetical "Boomer Bob" than I'd like to admit... Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[AI makes tech debt more expensive](https://www.gauge.sh/blog/ai-makes-tech-debt-more-expensive)

Evan Doyle says what we've all been feeling:

> There is an emerging belief that AI will make tech debt less relevant. Since it’s getting easier to write code, and easier to clean up code, wouldn’t it make sense that the typical company can handle a little more debt?
>
> The opposite is true - AI has significantly increased the real cost of carrying tech debt. The key impact to notice is that generative AI dramatically widens the gap in velocity between ‘low-debt’ coding and ‘high-debt’ coding.

His advice: instead of trying to force codegenAI tools to tackle thorny issues in legacy codebases, rely on humans to refactor said codebases until they're manageable enough for AI to operate on them smoothly. This changes the makeup of modern development teams:

> A product should be owned by a lean team of experts, focused primarily on the architecture of their code rather than the implementation details.

Evan goes on to describe why it's more valuable than ever to have a high-quality codebase and invest in modular architecture early on to keep your productivity tools producing.


**Break:**

**Jerod Santo:**

[Up to 21% of job ads may be ghost jobs](https://arxiv.org/abs/2410.21771)

We've been talking about fake developer job postings around these parts for awhile, but now someone's gone and done some actual research on the phenomenon! Hunter Ng:

> Using a novel dataset from Glassdoor and employing a LLM-BERT technique, I find that up to 21% of job ads may be ghost jobs, and this is particularly prevalent in specialized industries and in larger firms. The trend could be due to the low marginal cost of posting additional job ads and to maintain a pipeline of talents. After adjusting for yearly trends, I find that ghost jobs can explain the recent disconnect in the [Beveridge Curve](https://www.bls.gov/charts/job-openings-and-labor-turnover/job-openings-unemployment-beveridge-curve.htm) in the past fifteen years. The results show that policy-makers should be aware of such a practice as it causes significant job fatigue and distorts market signals.

If you don't mind, I'll remain DRY by copy/pasting from [issue 115](https://changelog.com/news/115) when these "ghost jobs" were first percolating through the dev community: Be careful out there & give yourself a little leeway, too. Maybe you didn't get the job. But then again, maybe *nobody* got the job...

**Break:**

**Jerod Santo:**

[Maybe Bluesky has “won”](https://anderegg.ca/2024/11/15/maybe-bluesky-has-won)

There's been a LOT of hubbub about Bluesky's current moment, but instead of linking to yet another article on The Verge stating the growth trend, I like this post by Gavin Anderegg because he analyzes it more on a technical level (with his own experience/opinions mixed in there, of course)

> When writing about Bluesky, I’ve seen folks mention that it’s either federated or decentralized. I’m here to tell you that it’s currently neither. This one really irks me because the service is getting the credit for work it hasn’t done.
>
> One problem here is that the whole “decentralized” thing is complicated. I believe the Bluesky team is putting in a lot of good-faith effort to becoming a decentralized platform. But, this work is tricky because their architectural choices are quite novel.

The AT Protocol is certainly interesting, but its promise is nowhere near realized and I'm personally skeptical that it ever truly will be. VC is a hell of a drug... Here's Gavin's big picture takeaway:

> I don’t know what the social media landscape will look like in 6 months, but I’d bet things will change. If Bluesky comes out as a “winner” and more posting happens there, I think I’m generally fine with that. At least for now.
>
> The whole Twitter mess has taught me not to attach myself too closely with these things anymore. I hung on far too long to Twitter while it made me feel terrible.

If you listened to last week's Friends (featured above), you already know my take current big picture stance. But if you're on Bluesky, connect with [changelog.com](https://bsky.app/profile/changelog.com) for sure!


**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Sentry LAUNCH WEEK starts today](https://sentry.io/events/launch-week/?promo_name=changelog)

Let's light this candle! Join our friends at Sentry for daily video drops on [YouTube](https://www.youtube.com/c/Sentry-monitoring/featured) and Twitter starting today at 9am PST. You can also hop on [Discord](https://discord.com/invite/sentry) to chat live with the engineers building Sentry.

Here's 4 days of new features that you probably won't hate.

- **Day 1**: Smarter search, Uptime Monitoring, and updates to Session Replay
- **Day 2**: AI-powered issue grouping, Autofix, anomaly detection, and more
- **Day 3**: Domain-specific application performance insights and continuous profiling
- **Day 4**: Automatic unit test generation, flaky test detection, and AI PR review

[Follow the link in your chapter data and the newsletter](https://sentry.io/events/launch-week/?promo_name=changelog) to read more about it and get notified about updates. And thanks again to Sentry for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Against best practices](https://www.arp242.net/best-practices.html)

Martin Tournoij:

> I have come to believe that by and large “best practices” are doing more harm than good. Not necessarily because they’re bad advice as such, but because they’re mostly pounded by either 1) various types of zealots, idiots, and assholes who abuse these kind of “best practices” as an argument from authority, or 2) inexperienced programmers who lack the ability to judge the applicability...

The linked piece is certainly *ranty*, but it strikes at something many of us know, but is easily forgotten: Laws and best practices are generalizations. Generalizations are powerful, but necessarily lacking any specific context.

The hard thing about software engineering is that **context is king**. This means we often have to eschew best practices when they don't apply in our context. Deciding when to *follow* and when to *eschew* requires thinking and decision making. That's a lot of work! We'd rather just follow the rules and be done with it...

See also: [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming)

**Break:**

**Jerod Santo:**

[Binary vector embeddings are so cool](https://emschwartz.me/binary-vector-embeddings-are-so-cool/)

Evan Schwartz:

> Vector embeddings by themselves are pretty neat. Binary quantized vector embeddings are extra impressive. In short, they can retain 95+% retrieval accuracy with 32x compression and ~25x retrieval speedup. Let's get into how this works and why it's so crazy.

If you haven't been primed on embeddings yet, they let you turn arbitrary pieces of text into a series of numbers, which let you easily search for pieces of content that have similar meanings by finding the similarity between those numbers represented by vectors. This stuff is at the core of LLMs and modern semantic search techniques.

The *binary quantized vector embeddings* that have Evan super impressed are effectively a lossy compression mechanism for vector embeddings that make them much cheaper/faster to use without losing much accuracy.

> ...this technique is similar to why JPEG compression works. You can drop a huge percentage of the size while retaining enough signal to keep the image looking pretty good.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more news worth your attention. Such as: CSS' new logo uses rebeccapurple (and why), wasmVision gets you going with computer vision, and open source alternative to Google's NotebookLM and more.

We hav some great episodes coming up this week:

Helena Zhang and Toby Fried from Phosphor Icons and the rad new Departure Mono font on Wednesday

And are local-first apps truly the future? Johannes Schickling and James Long join us to discuss & debate that question right here on Changelog & Friends on Friday.

Have a great week! Get yourself some merch, while its still on sale, and I'll talk to you again real soon.
