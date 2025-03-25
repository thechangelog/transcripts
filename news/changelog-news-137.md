**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 24th, 2025.

IKEA is [tapping in](https://www.famouscampaigns.com/2025/03/ikea-australia-leans-into-the-severance-aesthetic/) to our collective enjoyment of all things Severance with a new ad campaign highlighting their minimalist desks, acoustic screens, and moody lighting that they say is perfect ‘for work that is mysterious and important.’ Well played, IKEA. Well played. Meanwhile, I'm still working my way through Severance season 2. Slowly, surely, mysteriously and importantly.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Revenge of the junior developer](https://sourcegraph.com/blog/revenge-of-the-junior-developer)

Steve Yegge's latest rant about the future of "coding" comes replete with charts, bad news for CIOs, and a dish junior developers will be able to serve cold (that's revenge, if you don't know the saying). Where do we start? By cruising right past the *vibe coding* craze to what's coming next:

> Vibe coding is in steep ascent, and chat-based coding is indeed also still on the rise… for now. But agentic coding – the subject of this post – will soon rocket by chat coding as if it’s standing still.

Agentic coding, according to Steve, will have fully arrived in Q3 of this year, and it's going to completely change the game:

> Once you have tried coding agents, and figured out how to be effective with them, you will never want to go back. They are going to stomp chat coding. And the great thing is, with agents you are still vibe coding. That’s why it’s not a modality: You can vibe code with any non-manual AI modality: chat, agents, clusters. As long as AI is doing the work, you’re vibing! The only difference with agents is that you don’t rendezvous with them as often.

The downside is it's gonna be expensive. Like, really expensive. The upside is Steve works for an agentic coding tools provider (Sourcegraph), so it'll be totally worth the cost. I kid, a little, but it's worth keeping in mind when the most bullish of the bulls are incentivized to be so. Still, Steve is a smart guy and I 100% believe he believes what he's saying here.

Where do the junior devs fit into this future? Why do they get their revenge? I won't spoil the ending for ya...

**Break:**

**Jerod Santo:**

[Life altering Postgres patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)

Ethan McCue:

> Believe it or not, I don't think that title is clickbait.
>
> There is a set of things that you can do when working with a Postgres database which I have found made my and my coworker's lives much more pleasant. Each one is by itself small, but in aggregate have a noticeable effect.

Ethan is talking about things like using UUID primary keys, giving everything 'created_at' and 'updated_at' fields, using schemas, enum tables, and more.

**Break:**

**Jerod Santo:**

[Verification-First Development](https://buttondown.com/hillelwayne/archive/verification-first-development/)

Hillel Wayne makes the case that "test-first development" (TFD) is different than "test-driven development" (TDD):

> The former is "write tests before you write code", the latter is a paradigm, culture, and collection of norms that's based on TFD. More broadly, TFD is a special case of Verification-First Development and TDD is not.

He goes in-depth on what exactly VFD is, some benefits & drawbacks, and why he thinks VFD is a technique (which he appears to like), not a paradigm (which he appears to dislike).

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[I see what you did there, Augment Code](https://www.augmentcode.com/blog/image-support-in-chat)

Yes, Augment Chat now **sees what you see** with inline image support in VS Code (IntelliJ support coming soon). No more struggling to explain things that are easier to show. While most tools just attach images as files, disrupting your workflow, Augment embeds images directly within your conversation flow. It's like giving your AI assistant a set of eyes to see exactly what you're working on by sharing screenshots, diagrams, or any visual content directly in-line with your chat.

Here's what you can do now:

- Communicate complex architectures by sharing system diagrams to get insights with perfect context
- Accelerate UI development by dropping in mockups to get suggested implementations using your existing components
- Squash visual bugs faster by showing Augment exactly what's happening instead of struggling to describe it
- Explain design pattern implementation by sharing diagrams to get code structure suggestions that match your codebase conventions

All of this let's you build faster and more creatively. Learn more about this feature at the link in the newsletter or by going to https://www.augmentcode.com/

**Break:**

**Jerod Santo:**

[The pain that is Github Actions](https://www.feldera.com/blog/the-pain-that-is-github-actions)

Gerd Zellweger had to redo their CI setup on GitHub Actions and shares a bunch of the pain points he hit along the way:

> Our CI is complex: merge queues, multiple runners (self-hosted, blacksmith.sh, GitHub-hosted), Rust builds, Docker images, and heavy integration tests. Every PR we merge burns through an hour of CI time, running across multiple parallel runners.
>
> There are a few things we'd like to have (which we deem as "good software practice") but it's nothing unheard of:
>
> 1. Everything that goes into `main` must pass all tests.
> 2. Trivial mistakes (formatting, unused deps, lint issues) should be fixed automatically, not cause failures.
> 3. The artifacts we test with in CI should be the exact ones we release.
> 4. CI should complete quickly (to keep developers happy).
>
> GitHub Actions technically allows all of this—but setting it up is a frustrating mess, full of hidden gotchas, inconsistent behavior, and a debugging experience that makes me question my choices.

One of my concerns when GitHub first got into the CI game was that their *already-the-host* advantage (which is real and great) would be so massive that they wouldn't have to innovate much beyond the basics to completely take over the market. Maybe that concern was valid?

**Break:**

**Jerod Santo:**

[A web-based ASCII diagram builder](https://cascii.app)

Cascii is a web-based ASCII (and Unicode) diagram builder written in vanilla JS.

> It has zero dependencies on any servers, web packing, libraries, and is no-markup and no-stylesheets. You can start building diagrams by simply opening the cascii.html file in a browser. Cascii is also hosted at cascii.app where you can get short links to your diagrams, open an account, etc

Check the newsletter or your chapter image for a picture of a diagram built with Cascii that loosely explains how Cascii is structured internally.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as:

- the vibe coding manifesto
- the model is the product
- they lied to you, building software is hard

and more. Get in on the newsletter at changelog.com/news

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
