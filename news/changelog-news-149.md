**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 16th, 2025.

Did you feel that Google Cloud outage last week?

Turns out this was another instance of [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare)'s classic "billion dollar mistake" mixed with (the also classic) "distributed systems are hard." The outage began when blank fields in a new service policy replicated a null pointer induced crash loop almost instantly across their global fleet of servers. 

Props to Google for their [transparent post-mortem](https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW) and props to the SRE team that triaged the issue starting just 2 minutes after the null pointer rolled out.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Stop uploading your data to Google](https://ignorethecode.net/blog/2025/06/11/stop_uploading_your_data_to_google/)

A few years ago, Lukas Mathis realized that losing access to his Google account would have been devastating. 

> I had photos and emails dating back to the mid-90s on my Google account. I had auto-upload enabled on my phone's Google Photos account. What are the chances that one of these hundreds of thousands of pieces of data would trigger some automatic action at some point? What are the chances that I could get in touch with somebody who could fix this for me?

Those are good questions to ask and he isn't merely being paranoid. There are instances of this actually happening to real people and it's never you *until it's you* and then it's too late. Lukas set some rules for himself:

1. Do not upload any data to Google. My Google account is too important to risk it. Now, no services are tied to it, except for those that must be tied to it.
2. Self-host as much as possible.
3. If self-hosting is not possible, use end-to-end encrypted services whenever possible.
4. Use one service for one thing, so that when it gets disabled, only that one thing is affected.

Click through for his suggested replacement services.

**Break:**

**Jerod Santo:**

[Don't guess my language](https://vitonsky.net/blog/2025/05/17/language-detection/)

Robert Vitonsky:

> If you’re still using IP geolocation to decide what language to show, stop screwing around. It’s a broken assumption dressed up as a feature.
>
> IP tells you where the request comes from, that’s it. It doesn’t tell you what language the user wants, speaks, or even understands. It fails all the time — VPNs, travel, people living abroad, countries with multiple official languages. This isn’t cleverness, it gives outright annoyance.

I have to agree with him. That's why the "Accept-Language" header exists, which Robert advocates for in this post. It lets your user agent send your preferred language to the server, no guessing required!

> That’s your signal, use it. It’s accurate, it’s free, it’s already there, no licensing, no guesswork, no maintenance.
>
> You don’t override screen resolution or color scheme with your own guess — so why do it with language?

**Break:**

**Jerod Santo:**

[Software talent is gold right now](https://gametorch.app/blog/software-engineering-talent)

Tom (from GameTorch) wrote us a good reminder about how *amazingly* privileged we are as software developers, despite the not-so-great job market rn:

> If you have software engineering skills right now, you can take any really annoying problem that you know could be automated but is too painful to even start, you can type up a few paragraphs in your favorite human text editor to describe your problem in a well-defined way, and then paste that shit into Cursor with o3 MAX pulled up and it will one shot the automation script in about 3 minutes. This gives you superpowers.
>
> I'm not just a technical founder. Now, I'm also an entire marketing department. That's pretty cool. What can you do? I bet you can do a lot!

I take for granted just how much tedium I've automated away that non-software people just live with. AI agents bring this ability to many more people, which is awesome, but they also make we software people able to do so much more with so much less effort. I can do a lot! And you can do a lot too. Let's do cool stuff.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[What are MCP servers?](https://fly.io/blog/mcps-everywhere/)


> MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

That paragraph, to Sam Ruby, is both comforting (“USB for LLM”? Cool! Got it!), and simultaneously vacuous (Um, but what do I actually do with this?). Feel the same? Then Sam has just the blog post for you! He's been digging deeper and come up with a few analogies and comparisons that might help you make sense of it.

1. MCPs are Alexa Skills
2. MCPs are API 2.0
3. MCPs are APIs with Introspection/Reflection
4. MCPs are not serverless
5. MCPs are not Inherently Secure or Private
6. MCPs should be considered family

If those six bullet points catch your interest, [click on through](https://fly.io/blog/mcps-everywhere/) to the other side and see what else Sam has to say. Oh, and check out [Fly.io](https://fly.io) while you're there. You might love it (like we do).

**Break:**

**Jerod Santo:**

[The end of observability as we know it](https://www.honeycomb.io/blog/its-the-end-of-observability-as-we-know-it-and-i-feel-fine)

Surprise, surprise. LLMs are upending the observability industry, too. Austin Parker from Honeycomb does a solid job laying out the history and how it's all going to change from here:

> In a really broad sense, the history of observability tools over the past couple of decades have been about a pretty simple concept: how do we make terabytes of heterogeneous telemetry data comprehensible to human beings? We’ve seen different companies tackle this in different ways for technology like Ruby on Rails, AWS, Kubernetes, and now OpenTelemetry...
>
> In AI, I see the death of this paradigm. It’s already real, it’s already here, and it’s going to fundamentally change the way we approach systems design and operation in the future.

Austin goes on to describe how Honeycomb's favorite demo for Honeycomb's [favorite feature](https://www.honeycomb.io/bubbleup) has been utterly disrupted by agentic AI:

>  I ran a single prompt through an AI agent that read as follows: **Please investigate the odd latency spikes in the frontend service that happen every four hours or so, and tell me why they’re happening.**
>
> It took 80 seconds, made eight tool calls, and not only did it tell me why those spikes happened, it figured it out in a pretty similar manner to how we’d tell you to do it with BubbleUp.
>
> This isn’t a contrived example. I basically asked the agent the same question we’d ask you in a demo, and the agent figured it out with no additional prompts, training, or guidance. It effectively zero-shot a real-world scenario.
>
> And it did it for **sixty cents**.

Wowza!

**Break:**

**Jerod Santo:**

[Multigres is Vitess for Postgres](https://supabase.com/blog/multigres-vitess-for-postgres)

Supabase landed an epic hire, bringing Vitess co-creator, [Sugu Sougoumarane](https://www.linkedin.com/in/sougou/), on to lead their effort on a Vitess adaptation for Postgres. Here's what Sugu had to say about it:

> For some time, I've been considering a Vitess adaptation for Postgres, and this feeling had been gradually intensifying. The recent explosion in the popularity of Postgres has fueled this into a full-blown obsession. As these databases grow, users are going to face a hard limit once they max out the biggest available machine.
>
> The project to address this problem must begin now, and I'm convinced that Vitess provides the most promising foundation. After exploring various environments, I found the best fit with Supabase. I'm grateful for how they welcomed me. Furthermore, their open source mindset and fully remote work culture resonated with me.

Multigres will be open source (Apache 2) and they're assembling a team to build it. If you're a Go programmer, consider [applying](https://jobs.ashbyhq.com/supabase/2e718684-4f75-4a99-8d6b-3b6bd44e4228).

**Break:**

**Jerod Santo:**

That's the news for now. Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
