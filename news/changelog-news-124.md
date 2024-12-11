**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, December 9th, 2024.

For the fifth time in the last nine years, a page about deaths in the given year got more visits than any other page on Wikipedia. The [list of deaths in 2024](https://en.wikipedia.org/wiki/Deaths_in_2024) page garnered **over 44 million views**. We're a morbidly curious bunch, aren't we?

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[A new era for the Changelog Podcast Universe](https://changelog.com/posts/a-new-era-for-the-changelog-podcast-universe)

Let's start off with some *literally* Changelog News. Here's Adam:

> We’re kicking off 2025 with some big changes. Starting in January, we’ll be focusing all of our efforts on producing The Changelog (News, Interviews, Friends) as the single best developer podcast experience.
>
> In order to do this, we’re stopping production of *Go Time*, *JS Party*, *Ship It!*, and *Practical AI*. **But don’t worry—there’s continuation and spin-offs in motion!**

This was a really hard decision to make, but we need to create space for experiments, explorations & moar coding. We love all our pods! Thankfully, each one has a continuation story. Oh, and [CPU.fm](https://cpu.fm) is coming soon!

**Break:**

**Jerod Santo:**

[Ghost engineers more like ghost researchers](https://hachyderm.io/@thisismissem/113545665050649333)

It appears the Stanford study about ghost engineers that I chose to headline [issue 122](https://changelog.com/news/122) wasn't worthy of our coverage. A few of our community members pointed that out in [our discussion thread](https://changelog.zulipchat.com/#narrow/channel/455469-news/topic/122.3A.20Busting.20the.20ghost.20engineers.20.280.2E1x-ers.29) and Emilia posted on Mastodon, summarizing many of its issues:

> Pray tell, what flawed methodology did this "study" use?
>
> It assessed code changes made by these engineers, not by lines of code changed but by "simulating a panel of 10 experts to evaluate each commit." This fatally flawed study does not account for:
>
> - management & planning
> - research to unblock work
> - collaboration with other staff
> - helping other staff
>
> Like, once again, actually writing code is a small part of an software engineers actual job. That's like assessing structural engineers on the basis of calculations done 🤡
>
> A lot of time is spent in communications, planning, and helping others. Honestly a shame that a prominent software engineering podcast would actually run with this drivel.

Sorry about that, y'all! I do my best to only bring you links of interest/value, but sometimes I miss that mark...

**Break:**

**Jerod Santo:**

[Git ingest produces prompt-friendly extracts](https://gitingest.com)

Git ingest is a simple service that turns any GitHub repository into a simple text ingest of its codebase. Why would you want that? Because then you can easily feed the entire repo into any LLM as context.

If you're currently looking at a GitHub repo, just convert "hub" in the URL to "ingest" and BAM: a prompt-friendly extract ready for download or copy/paste!

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Kubernetes without nodes on Fly.io](https://www.youtube.com/watch?v=y0Kxi-DTLjU)

Annie is back on Fly's YouTube channel talking about how they're doing Kubernetes without nodes. Spoiler alert, they use virtual kubelet to manage your cluster. But how they do it is worth the price of watching.

> With Fly's managed Kubernetes service we don't run Kubelet, because there are no nodes...

So where do you put the pods, Annie?! Find out for yourself! Link in your chapter data and the companion newsletter.

**Break:**

**Jerod Santo:**

[Storing times for human events](https://simonwillison.net/2024/Nov/27/storing-times-for-human-events)

Simon Willison dishes out some hard-earned wisdom he acquired by working at Lanyrd & Eventbrite, two websites that have to deal with storing the time that an event is happening.

> An event happens on a date, at a time. The precise details of that time are very important: if you tell people to show up to your event at 7pm and it turns out they should have arrived at 6pm they’ll miss an hour of the event!
>
> Some of the worst bugs an events website can have are the ones that result in human beings traveling to a place at a time and finding that the event they came for is not happening at the time they expected.
>
> So how do you store the time of an event?

Simon points out that the "best practice" of storing events in UTC breaks down for future events because timezones and locations and user errors and international political shenanigans. His suggestion:

> My strong recommendation here is that the most important thing to record is the **original user’s intent**. If they said the event is happening at 6pm, store that! Make sure that when they go to edit their event later they see the same editable time that they entered when they first created it.

**Break:**

**Jerod Santo:**

[Mistakes you’re going to make as a new manager](https://terriblesoftware.org/2024/12/04/the-6-mistakes-youre-going-to-make-as-a-new-manager/)

Matheus Lima knows that moving from an individual contributor (IC) to a manager is a significant career step that many engineers will make, just like he did:

> Reflecting on my first couple of years as an Engineering Manager, I realized that the lessons I learned are not unique to me; many new managers face similar experiences. That’s why I want to share these insights with you. My goal is to support and connect with other new managers who are going through this exciting yet demanding transition.

Here's my summary of the six mistakes you're likely to make:

1. Reluctance to delegate
2. Missing your old dopamine
3. Equating team size with success
4. Missing the engagement level mark
5. Mis-managing perception
6. Giving in to imposter syndrome

Read Matheus' blog post for the details!

**Break:**

**Jerod Santo:**

That's the news for now, but do give the companion newsletter a scan for even more stories worth your attention, such as: a first look at S3 Iceberg Tables, self-guaranteeing promises, Grifters, believers, grinders and coasters, and of course, our award-worthy unordered list of other awesome links.

Get in on that newsletter at changelog.com/news

ICYMI, last week I interviewed Acon from Hack Club about their cool new High Seas initiative, and we had the ShopTalk guys, Chris Coyier and Dave Rupert on Changelog & Friends. Scroll back in your feed to find those and coming up this week we have a founders talk style deep dive with Fly.io founder, Kurt Mackey and Kaizen 17, yes, Gerhard Lazu returns and we talk a lot about CPU.fm plus Gerhard's big surprise.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
