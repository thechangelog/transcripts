**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 25th 2024.

There's a nerdy Pro Tip® floating through the _series of tubes_ that you should append `before:2023` to your Google searches. This excludes all of the AI-generated ~~content~~ trash that's been indexed by our computing overlord lately. But that's amateur hour.

True Pro®s append `after:2024` to our searches. Want to know who wins the upcoming election?

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Redis adopts dual source-available licensing](https://redis.com/blog/redis-adopts-dual-source-available-licensing/)

Another open source project bites the dust. Here's their explainer:

> The success of Redis has created a unique set of challenges. Redis has been sponsoring the bulk of development alongside a dynamic community of developers eager to contribute. However, the majority of Redis’ commercial sales are channeled through the largest cloud service providers, who commoditize Redis’ investments and its open source community. Despite efforts to support a community-led governance model, and our desire to maintain the BSD license, delivering multiple software distributions simultaneously – across open-source, source-available, and commercial software optimized for different on-premises and cloud platforms – is at odds with our ability to drive Redis successfully into the future.

When this news first dropped last Wednesday, I quipped: Gentlemen, start your forks. Drew DeVault must've been listening. (Probably not literally, but in spirit.) Enter [Redict](https://codeberg.org/redict/redict). Drew writes:

> Like many of you, I was disappointed when I learned that Redis®1 was changing to a non-free licensing model. This is a betrayal of the free software community, but perhaps not an entirely surprising one. Forks are likely to start appearing in the coming days, and today, I would like to offer Redict to you as a possible future home for your needs, and present its trade-offs as compared to the other forks you’re likely to be choosing from soon.
>
> In short, Redict is an independent, non-commercial fork of Redis® OSS 7.2.4.2 It is based on the BSD 3-Clause source code of Redis® OSS, and all changes from this point onwards are licensed under the Lesser GNU General Public license, LGPL-3.0-only.

Oh, and Microsoft also announced [Garnet](https://github.com/microsoft/garnet) (a Redis client compatible cache-store) just two days prior to the Redis re-licensing. Fortuitous timing or did they know something?

**Break:**

**Jerod Santo:**

[We need community built software](https://hachyderm.io/@mattdm/112134152636307431)

In the wake of this latest open source rug pull, Matthew Miller (Fedora Project Leader at Red Hat) made a great point on Mastodon that I think is worth re-posting in full:

> The Redis thing underscores a key point: _open source is not enough_. We need _community built software_ -- free and open source licenses are just one aspect of that.
>
> If a company requires you to assign copyright (or equivalent re-licensing rights) in an asymmetrical way, they will inevitably eventually decide to take that option once they want to cash in on the goodwill you've built for them (let alone the code).

This sparked a quality discussion, which you can follow in the replies to his post.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News! [POST/CON 24 is THE event for API enthusiasts](https://www.postman.com/postcon/?utm_source=changelog-news)

Postman's annual user conference pops off April 30th-May 1st in San Fransisco and they're going all out to ensure this is your must-attend event of the year!

- You'll level up your skills with hands-on workshops...
- You'll hear from experts on how they're bring APIs in to the future...
- You'll be the first to know about new Postman features...
- You'll help shape the future of Postman by meeting with product leaders...
- You'll network and connect with tech leaders from OpenAI, Heroku & more...

And, to top it all off: they're throwing an absolutely amazing after party! 🕺

You'll meet at SF's tallest skybar for cocktails, dinner & 360° views of the City and the Bay... then stroll to nearby August Hall to enjoy drinks, a private bowling alley & a live performance by multi-platinum recording artist T-Pain. How cool is that?!

[Register now](https://www.postman.com/postcon/) using the link in the show notes before it's too late!

**Break:**

**Jerod Santo:**

[DuckDB as the new jq](https://www.pgrs.net/2024/03/21/duckdb-as-the-new-jq/)

Paul Gross makes the case that [DuckDB](https://duckdb.org/) (like a SQLite geared towards data applications), because it can natively read and parse JSON as a database table, is better than `jq` for exploring documents. I tend to agree that SQL is easier to reason about than `jq`'s search syntax, which I use just infrequently enough to have to ask ChatGPT every time...

**Break:**

**Jerod Santo:**

[I'm a programmer and I'm stupid](https://antonz.org/stupid/)

Anton Zhiyanov has been getting paid to code for 15 years despite being, in his own words, "pretty dumb."

> I haven't been diagnosed with any specific medical condition, but my mental capacity is very limited. I find even easier Leetcode problems challenging. Reading about a basic consensus algorithm makes my head explode. I can't really follow complex dependencies in a code base. I can't learn a fancy language like Rust (I tried, but honestly, it's too much). I hate microservices and modern frontends because there are so many moving parts, I can't keep track of them all.

So what does he do about it? Here's where things get interesting...

> I use the simplest mainstream language available (Go) and very basic Python. I write simple (though sometimes verbose) code that is easy to understand and maintain. I avoid deep abstractions and always choose composition over inheritance or mixins. I only use generics when absolutely necessary. I prefer flat data structures whenever possible...

He goes on, but you get the drift. Anton keeps things _incredibly_ simple. But that's not dumb. That's smart! Which means he's dismantled his own premise. Which might be dumb? ... I need a break...

**Break:**

**Jerod Santo:**

[The one about the web developer job market](https://www.baldurbjarnason.com/2024/the-one-about-the-web-developer-job-market/)

Baldur Bjarnason chimes in on our collective [sense of impending job doom](https://www.cnbc.com/2024/03/15/laid-off-techies-struggle-to-find-jobs-with-cuts-at-highest-since-2001.html), from the perspective of web developers:

> We have the worst job environment for tech in over two decades and that’s with the “AI” bubble in full force. If that bubble pops hard before the job market recovers, the repercussions to the tech industry will likely eclipse the dot-com crash.

Don't sugarcoat it, Baldur! Shoot it to us straight. Here's more on how web media is in free fall and that's bad for web devs too:

> Web media is a major employer, both directly and indirectly, of web developers. If a big part of the web media industry is collapsing, then that’s an entire sector that isn’t hiring any of the developers laid off by Google, Microsoft, or the rest. And the people they aren’t hiring will still be on the job market competing with everybody else who wouldn’t have even applied to work in web media.
>
> This would be bad on its own, if it weren’t for the fact that search engine traffic is declining as well. LLM-enabled spam sites are flooding the search engine results which drives down traffic to web media sites in general.

It's mostly more bad news from here. This one sums his stance up:

> It’s reasonable to expect that the job market is unlikely to ever fully bounce back, due to the collapse of web media alone.
>
> It’s also reasonable to expect that the job market might take another sharp turn to the worse because the AI Bubble will run its course eventually. It doesn’t matter whether it’s a genuine innovation or an overblown yarn-ball of dysfunction and wishful thinking, bubbles end eventually.
>
> Both finding a job and hiring for web development will likely only get harder.

There is a section called "So, what should I do?" that I recommend all web developers at least take a look at. One sentiment that I will heartily echo here: this is probably as good a time as any to start a business.

**Break:**

**Jerod Santo:**

That is the news for now, but scan this week's companion Changelog Newsletter for an additional 12 links to cool new tools I've found for your toolbox.

Stay tuned to The Changelog. Our 3rd installment of [It Depends](https://changelog.com/topic/itdepends) ships out later this week! The topic this time: whether it's better for software devs to specialize or generalize...

Have a great week, **leave us a 5-star review** if you dig it & I'll talk to you again real soon. 💚
