**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 7th, 2025.

Now that *Severance* season 2 is all wrapped up, I need something else to watch of similar caliber and intrigue. Otherwise, I'll fall back into my *New Girl* and *American Pickers* re-runs habit. Hit me with your recommends!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The AI 2027 scenario](https://ai-2027.com)

The [AI Futures Project](https://ai-futures.org/) is a new non-profit organization led by Daniel Kokotajlo, a former researcher in OpenAI’s governance division, with a goal of forecasting the future of AI. In their first publication, "AI 2027", the group predicts that the impact of superhuman AI over the next decade will be enormous, exceeding that of the Industrial Revolution.

They lay this potential future out in a scenario that:

>  ... represents our best guess about what that might look like. It’s informed by trend extrapolations, wargames, expert feedback, experience at OpenAI, and previous forecasting successes.

What's cool about this work, unlike so many you can find online, is its incredible detail. The story goes quarter-by-quarter through the next 2.5 years, weaving one potential narrative of how things might proceed. There are two endings, though: a "slowdown" and a "race" ending. The overall goal is not prescriptive, but predictive accuracy. And they're so serious about it, that they're offering [cash incentives](https://ai-2027.com/about#bets-and-bounties) for alternative scenarios that prove out to be more accurate.

**Break:**

**Jerod Santo:**

[Liam ERD](https://liambx.com)

> Liam ERD generates beautiful, interactive ER diagrams from your database. Whether you're working on public or private repositories, Liam ERD helps you visualize complex schemas with ease.

You can get started using Liam with zero config. Just provide your schema and you’re good to go. It currently has direct supports of schemas from Postgres, Ruby on Rails, Prisma, and [tbls](https://github.com/k1LoW/tbls). Other databases are in the works, and many have workarounds for the impatient.

**Break:**

**Jerod Santo:**

[Mozilla "Thundermail" takes on Gmail](https://www.techradar.com/pro/mozilla-launching-thundermail-email-service-to-take-on-gmail-microsoft-365)

> Mozilla is turning its Thunderbird open source email client into a full communications platform with the launch of Thundermail and Thunderbird Pro.
>
> The expansion of Mozilla's email services aims to compete with rival ecosystems like Gmail and Microsoft 365, which are more rich in features, except Mozilla’s offering stands out for its open source values of privacy, freedom, transparency and user respect.

Thunderbird has been losing users over the last five years, but they're hoping the launch of Thunderbird Pro reverses that course. Pro consists of a few different sub-services:

> Thunderbird Appointment, a new scheduling tool for sharing calendar links; Thunderbird Send, a rebuild of the discontinued Firefox Send; and Thunderbird Assist, a new AI-powered writing tool enabled via a partnership with Flower AI that is intended to do the processing locally to eliminate privacy concerns.

Once the full hosting service is ready, users will get to pick between "thundermail.com" and "tb.pro" domains, which both sound like duds to me. "Thundermail for Domains", anybody?

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[New Depot Registry makes builds even faster](https://depot.dev/blog/introducing-depot-registry?utm_source=changelog&utm_campaign=changelog-news)

Everyone knows you can increase the speed of your builds with a one-line code change thanks to Depot. But did you know you can also leverage their new registry to make your builds even faster?

Depot has revamped their ephemeral Docker registry and promoted it to a full product called Depot Registry. It's engineered to serve images from the most optimal location, no matter where in the world the client is located.

Here's a note from co-founder and CEO Kyle Galbraith:

> Depot Registry is a new, faster, and more feature-rich registry that we're excited to keep iterating on. It's available to all users starting today.

The Depot registry automatically serves images from the nearest location worldwide, ensuring lightning-fast performance for every user. By leveraging Tigris for intelligent content routing and replication, Depot seamlessly replicates each layer to 13 global storage regions—acting as both a CDN and object storage provider with an S3-compatible interface.

If you're new to Depot, you can get started with [Depot Registry](https://depot.dev/blog/introducing-depot-registry?utm_source=changelog&utm_campaign=changelog-news) by signing up for a free 7-day trial, no credit card required. Find the link in your chapter data and the newsletter.


**Break:**

**Jerod Santo:**

[Grepping logs remains terrible](https://chronicles.mad-scientist.club/tales/grepping-logs-remains-terrible/)

algernon first stated his public opinion that [grepping logs is terrible](https://asylum.madhouse-project.org/blog/2015/05/05/grepping-logs-is-terrible/)  a decade ago. The good news is he's back, the bad news is his opinion hasn't changed. After a quick comparison of running alike queries against 4.4 GB of JSON logs on his modern M2 SSD desktop and loading the same data into [VictoriaLogs](https://victoriametrics.com/products/victorialogs/) on an old Mac Mini, he finds:

> What we saw here is that a computer with much more RAM, and computing power, and faster storage got absolutely obliterated by an overloaded Mac Mini that is ten years its senior. And not only in speed, but resource use too: I haven’t shown it, but working with raw text used a lot more CPU time, disk IO, and memory; meanwhile the Mac Mini barely blinked.
>
> And not because it was all cached in memory! These are all cold queries. Cached queries are much, much faster. But how can it be that such an underpowered device runs circles around a powerful desktop?
>
> Purpose-built software, dear reader. Purpose built software.

The moral of the story: databases are good!

> Don’t grep your logs. Shove them in a log-ready database and query that. Not only will it require considerably less disk space, it will require less computing power, less RAM, and as a result, less time to perform the queries. And if that’s not enough, you can give the logs structure! You no longer need to remember the order of fields in a httpd’s Common Log Format, you can query against a named field instead. You can run aggregations, computations, build stats, correlate, join, and do all kinds of other database-y stuff. Not only does it perform better, you can do more, and do so more conveniently.

**Break:**

**Jerod Santo:**

[The insanity of being a software engineer](https://0x1.pt/2025/04/06/the-insanity-of-being-a-software-engineer/)

Vitor M. de Sousa Pereira pens a solid *rant* on the never-ending list of technologies that software engineers must master and skills that we must acquire.

> A recruiter reached out to me a couple of days ago about an engineering position for a secret company. They decided that they required senior level skills in Rails, Hotwire and, incredibly, native mobile development. Why not add kernel and compiler development in there as well for good measure?
>
> When a house is being built, tons of people are involved: architects, civil engineers, plumbers, electricians, bricklayers, interior designers, roofers, surveyors, pavers, you name it. You don’t expect a single person, or even a whole single company, to be able to do all of those.

Vitor's post focuses on web development, a sub-section of software engineering where this pain is particularly acute, but I've long said that if you don't want to be continually learning new things to sustain your career trajectory, you don't belong in the technology industry. Still, it can help to air our grievances once in awhile with a solid rant like this one.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as:

- [Self-hosting like it's 2025](https://kiranet.org/posts/self-hosting-like-its-2025/)
- [A typeface for creating sparklines in text without code](https://github.com/aftertheflood/sparks)
- [The blissful zen of a good side project](https://joshcollinsworth.com/blog/the-blissful-zen-of-a-good-side-project)

Get in on the newsletter at changelog.com/news

Have a great week! Like, subscribe, and review if you dig the show, and I'll talk to you again real soon.
