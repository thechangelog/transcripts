**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 3rd 2024.

I poked fun at Adam on our [You have how many open tabs?!](https://changelog.com/friends/29) episode awhile back. Never again. We now have [cold, hard evidence](https://www.pcmag.com/news/firefox-power-user-keeps-7400-plus-browser-tabs-open-for-2-years) of a Firefox "power user" who kept 7400 tabs open for 2+ years. Yes, you heard that right: 7400 tabs!

**Jurassic Park:**

[They didn't stop to see if they should](https://www.youtube.com/watch?v=g3j9muCo4o0)

**Jerod Santo:**

Ok, let's get into the news. But first, a quick correction from last week: the article I covered about [clear, readable code](https://read.engineerscodex.com/p/clever-code-is-probably-the-worst) was written by Leonardo Creed, not Jordan Cutler. Sorry about that, Leonardo! Ok, now let's get into the news.

**Break:**

**Jerod Santo:**

[Raivo OTP app quietly changes hands, loses passwords](https://web.archive.org/web/20240531085449/https://github.com/raivo-otp/ios-application/issues/328)

In _yet-another-unsettling-open source-sustainability-failure_ news...

Ravio, a popular open source iOS authenticator app that syncs your one-time-passwords across devices, was [quietly transferred](https://github.com/raivo-otp/ios-application/commit/3a8aaa0ea16a761e6205abd2700ac90dd4c9c9b6) from its original creator to a company called [Mobime](https://mobime.org). After ~10 months of zero public commits, the new owners shipped an update that deleted people's 2fa codes and, according to one angry user review:

> It's ransomware. Unless they pay, their 2fa codes are gone. Some users have had their codes gone forever.

I was tipped off to this ordeal late last week by *friend-of-the-log* `rderik`, who was previously a happy user of Ravio. Since then, Mobime's developers have [removed the issue tracker](https://github.com/raivo-otp/ios-application/pull/370) from the GitHub repo and closed all open PRs, including one that [would inform users about the data loss](https://github.com/raivo-otp/ios-application/pull/371) and paywall.

Say it with me: **Rug pull, not cool!**

**Break:**

**Jerod Santo:**

[Ladybird spreads its wings, targets Linux & macOS](https://awesomekling.substack.com/p/forking-ladybird-and-stepping-down-serenityos)

Andreas Kling, creator of SerenityOS & its Ladybird browser, is forking Ladybird and stepping down as SerenityOS BDFL:

> Until now, the project and its community have existed in a state with two groups sharing all resources and infrastructure:
>
> - One group who mostly cares about building a desktop OS.
> - Another group who mostly cares about building a cross-platform web browser.
>
> In the past, there was enough overlap between interests that it made sense to share everything, but these interests have slowly grown apart.
>
> I've decided it's time to make a big change. To streamline development of Ladybird, I'm forking it off from SerenityOS into a new, separate top-level project.

This change, while difficult & surely emotional for Andreas, seems like a healthy one for both projects. Ladybird gets to spread its wings and fly on more mainstream operating systems (Linux, macOS) & Serenity is now community-driven, no longer distracted with a web browser effort & "hacking on fun software with friends" is once again the main focus.

**Break:**

**Jerod Santo:**

[Moving beyond type systems](https://vhyrro.github.io/posts/effect-systems/)

A thought-provoking look at what a "static effect system" is, what it might look like & how it could be beneficial to programming languages moving forward.

> To this day we’re pretty used to either having _all_ side effects under our control or having *no* side effects. What if we could strike a balance?

Vhyrro goes on to explain how Rust has already made a move in this direction, but we don't think of it in explicit terms as a static effect system. What even is a static effect system though?

> A static effect system would be something akin to Rust’s borrow checker but for effects — instead of being able to interact and handle effects through functions, the programming language instead has an effect checker that statically analyzes the program and makes sure that everything holds. This would mean making sure that all effects are annotated properly and that no side effects occur where they shouldn’t.

The remainder of the post focuses on implementing a static effect system. Food for thought! Vhyrro finishes with:

> I haven’t been able to find any obvious pitfalls with the idea though, hence I shared it on this blog. Hope I caught your attention! I encourage all theorists to play around with the idea.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[AI for incident management is here](https://firehydrant.com/blog/ai-for-incident-management-is-here/)

FireHydrant's Robert Ross says:

> Over the last five years we’ve seen our customers run 583,954 incidents more efficiently thanks to a shared workspace, powerful Runbook automations, and auto-captured data. Yet despite a great deal of progress, incident efficiency hasn’t achieved peak potential. We talk to a lot of folks that are still stuck in the muck: new responders struggle to get up to speed quickly, incident commanders wade through post-incident drudgery, and knowledge silos prevent comprehensive improvements. But there’s a way for all of us to feel like we’re running incidents with a cheat code: AI.

There's no shortage of things you can sprinkle AI into, but Robert and his team at FireHydrant took a thoughtful approach and explicitly chose features that "would meaningfully improve the responder experience and had the potential to shave hours of work off every incident."

The best part: **All FireHydrant accounts have immediate access** to the new AI functionality. [Click here](https://firehydrant.com/blog/ai-for-incident-management-is-here/) to find out exactly what they're up to.

**Break:**

**Jerod Santo:**

[Why, after 6 years, I’m over GraphQL](https://bessey.dev/blog/2024/05/24/why-im-over-graphql/)

Matt Bessey:

> GraphQL is an incredible piece of technology that has captured a lot of mindshare since I first started slinging it in production in 2018. You won’t have to look far back on this (rather inactive) blog to see I have previously championed this technology. After building many a React SPA on top of a hodge podge of untyped JSON REST APIs, I found GraphQL a breath of fresh air. I was truly a GraphQL hype train member.
>
> However, as the years have gone on and I have had the opportunity to deploy to environments where non functional requirements like security, performance, and maintainability were more of a concern, my perspective has changed. In this article I would like to take you through why today, **I would not recommend GraphQL to most people**, and what I think are better alternatives.

Matt goes on to provide a long list of issues he has with GraphQL, in excellent detail. Of those, this is the one that's most concerning to me:

> In my experience, in a mature GraphQL codebase, your business logic is forced into the transport layer.

Yo! Keep your business logic out of my transport layer, thank you very much.

**Break:**

**Jerod Santo:**

[Why, after 8 years, I still like GraphQL sometimes in the right context](https://www.magiroux.com/eight-years-of-graphql)

Matt's post was a conversation starter! Marc-Andre Giroux responded with his own opinion after also using GraphQL for a long time. His major point is one I don't see discussed often: Use persisted queries:

> Persisted Queries are basically essential for building a solid GraphQL API. If you are not using them, you're doing GraphQL on hard mode. It's not impossible, but it leads to difficult problems, some of them discussed in the post. After 8 years of GraphQL, this has only gotten more and more important to me. Persist all queries, as soon as possible in your GraphQL journey. You'll thank yourself later.

The problem with persisted queries is that they aren't an option for public APIs, but it sounds like most people are using GraphQL for non-public APIs anyhow...

> I can feel the pain of the author when it comes to building public GraphQL APIs. It's not easy. But the post in general never really addresses a very common use-case for GraphQL, which is an internal API for known multiple clients. In this context, using persisted queries is easy, and solves a lot of the problems the author encountered in their journey...
>
> After 8 years of GraphQL, I still enjoy the decoupling a GraphQL schema offers between server-side capabilities and client-side requirements, but am aware of the trade-offs when picking it as a technology.

So where we're ending up is... It Depends? 🤓

**Break:**

**Jerod Santo:**

I leave you this week with [Gall's Law](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall's_law), which states:

> A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.

---

That's the news for now, but we have some great episodes coming up this week: Mark Russinovich, Eric Boyd & Neha Batra on Wednesday & we're once again playing the award-*worthy* #define [game show](https://changelog.com/topic/games) on Friday.

Have a great week, **forward this to a friend** who might dig it & I'll talk to you again real soon. 💚
