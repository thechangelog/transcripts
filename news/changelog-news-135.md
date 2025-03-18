**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 10th, 2025.

[Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) is the Valley's buzzword de jour. For the uninitiated, it's like pair programming with an AI where it writes all the code and your only job is to make sure it doesn't "harsh your vibe, dude." Then, when it's finished, you post a demo to social media, declare software engineering dead, throw the barely-usable final product away, and code up some more vibes.

Ok, let's get into this week's  news.

**Break:**

**Jerod Santo:**

[Everyone is talking about MCP](https://x.com/AtomSilverman/status/1897409286466363626)

Ok probably not *everyone* is talking about MCP, but it's certainly a burgeoning topic amongst the "AI Engineer" crowd, so I figured it's at least worth a primer. MCP stands for [Model Context Protocol](https://modelcontextprotocol.io), which was first announced by the Anthropic team [last November](https://www.anthropic.com/news/model-context-protocol). It's an open protocol to standardize how applications provide context to LLMS:

> Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

The linked X thread lists out a bunch of things people are building/announcing around MCP, most of which look like "demo quality" wares, but there's certainly potential here. IF we are going to have an *agentic future*, we need good ways to equip AI agents with the context they need to accomplish their tasks. MCP might become the way we achieve that. Or perhaps just a step along the way...

**Break:**

**Jerod Santo:**

[Stop letting algorithms dictate how you think](https://usher.dev/posts/2025-03-08-kill-your-feeds/)

Tom Usher:

> The creators of TikTok, Instagram etc. have gained control over exactly what we see. What we see strongly influences how we think. They know that their feeds make us angry, they know the negative effects on our mental health (particularly that of teens), and they know that they have an influence on our opinion.
>
> With the power to shape what we see comes the power to shape what we believe. Whether through deliberate manipulation or the slow creep of algorithmic recommendations, engagement is fueled by outrage, and outrage breeds extremism. The result is a feedback loop that isolates users, reinforces beliefs, and deprioritises opposing viewpoints.

Being able to form our own opinions is more important than ever. Do you want to take back control of how you think? At the end of this post, Tom gives you five thing you can do without going cold turkey off social media altogether...

**Break:**

**Jerod Santo:**

[Troubleshooting never goes obsolete](https://www.autodidacts.io/troubleshooting/)

In an industry where it's too easy to invest time in skills that don't last, I love when people share their expertise on things that have stood the test of time. Here's Curiositry, doing just that:

> Realizing that I spend more time *troubleshooting* than I do *building* or *doing*, and that the skill of troubleshooting can be honed separately from the domain it’s applied to, I decided to try to figure out how to improve my troubleshooting skills — and as a result, my effectiveness in multiple domains.
>
> The way I do it, troubleshooting mostly boils down to scratching my head, Googling the error message, and thinking up and testing hypotheses to narrow the search space. But I frequently catch myself making errors I have made before. So here’s what I try to remember when I’m troubleshooting, to keep myself on track and avoid dead-ends.

That last paragraph is an extreme simplification. This essay is brimming with specific, high quality advice.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[New Temporal capabilities from Replay 2025](https://temporal.io/blog/replay-2025-product-announcements)

The biggest event of the year for Temporal just wrapped up. Replay 2025 in London is where teams learned about evolving legacy systems, modernizing infrastructure, and building scalable, durable software to power today's top businesses. Here’s what they announced...

Temporal is open source so you can easily self-host it, but many teams are operating at scale and they rely on Temporal Cloud to give them an easier, faster, more scalable way to run Temporal.

- You can now automate migrations with zero downtime. The new tooling is in Pre-release. They’re seeking early users.
- High Availability can now offer another “9” to Multi-region Replication and Same-region Replication allowing you to asynchronously replicate your Workflows to a Namespace in a secondary or same region and will automatically fail over if necessary, to keep your applications online with a 99.99 SLA.

They also released new and updated capabilities to improve your development experience with Temporal:

- [Temporal Ruby SDK](https://github.com/temporalio/sdk-ruby) is now available in Pre-release and it’s at full feature parity with the other Temporal SDKs. You can now use Ruby to write workflows and activities.
- [Temporal Nexus](https://temporal.io/nexus) is now Generally Available. Nexus lets you connect Temporal Applications across (and within) isolated Namespaces.

**Break:**

**Jerod Santo:**

[Write blogs so LLMs have something to read](https://pragmaticpineapple.com/write-blogs-so-llms-have-something-to-read/)

Why create content in the age of AI slop? Nikola Ðuza has a dystopian answer to that question:

> LLMs are getting better and better, but they all need some kind of input to be trained on.
>
> And that’s where WE (I hate to say it, the “content creators”) come in. The world needs human touch, for now. The AI needs some human touch. The LLMs need to be trained on the good stuff. That’s why we need to keep writing, recording, and creating.

This is giving me strong Matrix vibes. *(SPOILER ALERT)* You know, where the machines' only reason to keep us alive is to harvest us for energy, so they create a digital world to keep our minds busy while they feed on our bodies. But maybe that's just me... I do agree with Nikola on this point:

> In the sea of generated content, the “custom” “hand-made” “locally produced” content will always stand out. It’s the human touch that will make the difference. Furthermore, blogs and writing will highly unlikely die. To write is a way of getting your thoughts calm, organized and composed. Certain humans will always need to write, no matter how easy it is to generate content with AI. In that sense, blogs with human touch will always have a place.

*Always* is a strong word, but I do believe there will be a market for "human-crafted" content for the foreseeable future, just like there's still a market for "hand-crafted" goods hundreds of years after the industrial revolution.

**Break:**

**Jerod Santo:**

[Should managers still code?](https://theengineeringmanager.substack.com/p/should-managers-still-code)

James Stanier takes a crack at this age old question:

> The short answer is that it depends exactly on what you mean by coding. I think that there is a big difference between being *in* the code and *writing* code. All managers should be *in* the code, but not all managers should be *writing* code.

James spends some time digging into the nuances of the question and how exactly he wants his engineering managers to be in terms of their relationship with the codebase. Should they be able to write code? Should they be able to do code reviews? Should they be able to debug and triage production issues? Stuff like that...

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as: Building websites with lots of little HTML pages, It is as if you were on your phone, PurrCrypt: fur-ociously secure, paw-sitively adorable! and Keep your calendar in a plain text file.

Sign up today at changelog.com/news.

This is episode #135, so that means it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Jarosław F, Felix KD, Alex G, Matt T & Scott S! _We appreciate you_ for supporting our work with your hard-earned cash!

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get in on bonus content, receive a free sticker pack in the mail & get shout outs like the you just heard.)

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
