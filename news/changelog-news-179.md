**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, February 2nd, 2026.

Moltbot may be dead (it was renamed to OpenClaw), but [Moltbook](https://www.moltbook.com/) is very much alive and is currently teeming with AI agents who share, discuss, and upvote each other.. because we told them to? Don't worry, humans are invited to observe. I suggest starting in the [todayilearned](https://www.moltbook.com/m/todayilearned) sub. Or going outside. Yeah, let's do that. We could all use [more Vitamin D](https://blog.ncase.me/on-depression/) anyhow.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The tech monoculture is finally breaking](https://www.jasonwillems.com/technology/2025/12/17/Tech-Is-Fun-Again/)

Jason Willems really lifted my spirits with this one. But first: the long, slow decline

> In the early 2000s, tech began a decades-long consolidation. Almost everything we used before became a function of a single device... Our devices lost their unique personalities. Phones became our alarm clocks, flashlights, calendars, watches, cameras, GPS units, music players, radios, journals, and gaming devices—all at once. We betrayed our focus in the pursuit of convenience, and the personality of our devices for homogeneity.

The benefits of this transition were clear to us, but at what cost? Jason argues it was high. I tend to agree. But the pendulum is starting to swing in the other direction.

> New paradigms are emerging for the first time since mobile. VR is no longer experimental. Early AR is starting to reach consumers. Meta shipped a wearable that normal people actually use, thanks to a clever Ray-Ban partnership (and associated equity stake). 3D printers have become real household products. Wearables are diversifying—smart rings, over-the-counter glucose monitors, connected beds.

Jason says he acquired more new devices in 2025 than the previous 5 years combined and 2026 is off to a hot start, too.

> We’ll never truly recreate the late 80s or mid-90s. SaaS, subscription pricing, and centralized platforms are here to stay. But this feels like the beginning of another golden era—one defined less by consolidation and more by variety, personality, and choice.

**Break:**

**Jerod Santo:**

[Notepad++ hijacked by state-sponsored hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/)

Notepad++ author, Don Ho, shares some bad news:

> Following the security disclosure published in the [v8.8.9 announcement](https://notepad-plus-plus.org/news/v889-released/), the investigation has continued in collaboration with external experts and with the full involvement of my (now former) shared hosting provider.
> 
> According to the analysis provided by the security experts, the attack involved infrastructure-level compromise that allowed malicious actors to intercept and redirect update traffic destined for notepad-plus-plus.org.

The attackers were able to redirect Notepad++ update traffic to malicious servers for a regrettable length of time. What's a dev to do?

> I deeply apologize to all users affected by this hijacking. I recommand [downloading v8.9.1](https://notepad-plus-plus.org/downloads/v8.9.1/) (which includes the relevant security enhancement) and running the installer to update your Notepad++ manually.
> 
> With these changes and reinforcements, I believe the situation has been fully resolved. Fingers crossed.

Notepad++ is, in my elderly opinion, one of the coolest pieces of software on the entire internet. What a shame. This is why we can't have nice things...

**Break:**

**Jerod Santo:**

[Hypergrowth isn't always easy](https://tailscale.com/blog/hypergrowth-isnt-always-easy)

Tailscale's Avery Pennarun penned a system downtime apology so good, I'm sharing it here for you to enjoy and, perhaps, to emulate.

> It’s true that many outages don’t sever existing connections—that’s a deliberate part of the design. But if you happen to need the control plane during those minutes, you feel the outage at full force.
>
> That’s not acceptable. Tailscale is critical infrastructure for a lot of organizations, and we have to earn that trust by making these incidents rarer and shorter.
>
> So what are we going to do about it? Well, a few things.

After sharing four concrete steps the Tailscale team is taking to mitigate future problems, Avery says:

> I'm not gonna lie to you. None of us are proud of having (counts on fingers) nine periods of (partial) downtime (or maybe slowness) in one month. Even though almost all were resolved in less than an hour. Even though your data plane kept going. Because, well, that's who we are. And who we are is a team that would rather over-communicate than under-communicate. Even when an incident is brief or affects only some customers, we want it to be visible and explained.
>
> We're going to keep counting every single small outage and measuring it and fracturing it into two smaller outages and eventually obliterating it, one improvement at a time. That's just how it's done.

The closer? A link to the form where you can report an outage and a link to their careers page for those who like solving problems like the ones they face. Chef's kiss.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Agentic development needs forkable databases](https://www.tigerdata.com/blog/lessons-replit-tiger-data-storage-agentic-experimentation)

Replit and Tiger Data built the same thing. Here's why. Agentic experimentation requires forkable state.

Replit recently published details about their internal snapshotting infrastructure. They call it Bottomless Storage and it's built on GCS with immutable 16 MB blocks. Tiger Data read it and realized they'd been solving the same problem with Fluid Storage, just with different tradeoffs. The convergence wasn't accidental. It's what happens when you actually build for how agents work.

See, agents don't execute linearly. They branch. They fail. They retry. They explore multiple paths before converging on a solution. Traditional databases assume few, long-lived environments. Agentic development inverts this entirely - you need databases you can fork instantly, experiment on safely, and roll back without consequences.

The technical divergence is interesting, though. Replit optimized for append-heavy workloads with 16 MB blocks (a single 4KB update amplifies to 16MB writes). Tiger Data went with 4 KB blocks, ~1ms read latency, and <5ms write latency - optimized for the fine-grained random access patterns that database workloads actually produce.

Different roads, same destination: snapshot-based infrastructure isn't optional for production AI systems. It's foundational.

Read the full comparison at [tigerdata.com](https://www.tigerdata.com/blog/lessons-replit-tiger-data-storage-agentic-experimentation)

**Break:**

**Jerod Santo:**

[You can code only 4 hours per day. Here’s why.](https://newsletter.techworld-with-milan.com/p/you-can-code-only-4-hours-per-day)

Milan Milanović:

> You probably felt it: after a few hours of coding, your brain isn't as fresh anymore. A good day can give you maybe 3 to 4 hours of deep, focused coding. After that, quality and focus drop. Research in cognitive psychology also supports the pattern.
>
> Across the teams I’ve led and coached, the same loop keeps showing up. Developers judge themselves by an eight-hour ideal, then feel behind when only a few hours produce real output. But high-focus work has a ceiling. Treating 3 to 4 hours as the primary objective leads to better software and less burnout.

This resonates with me. Back in my contracting days, I tried to bill 6 hours each day. I'd only bill when I was actively coding, and getting to a consistent 6 hours was **rough**.

The rest of Milan's article covers the cognitive ceiling, where developer time actually goes, the cost of interruptions, flow as a force multiplier, strategies for deep work, and why managers should care.

**Break:**

**Jerod Santo:**

[Comprehension debt: a hidden cost we don’t track](https://addyo.substack.com/p/the-80-problem-in-agentic-coding)

Addy Osmani on managing comprehension debt when leaning on AI to code:

> Generation (writing code) and discrimination (reading code) are different cognitive capabilities. You can review code competently even after your ability to write it from scratch has atrophied. But there’s a threshold where “review” becomes “rubber stamping.”

I feel seen on this one. I've certainly looked at areas of a codebase I oversaw the writing of and struggled to understand what is going on. That being said, I've done that for code I wrote personally as well! Sometimes as recently as yesterday. Addy says:

> The dangerous part: it’s trivially easy to review code you can no longer write from scratch. If your ability to “read” doesn’t scale with the agent’s ability to “output,” you’re not engineering anymore. You’re hoping.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Backseat software](https://blog.mikeswanson.com/backseat-software/)
- [A lightning fast private Gmail archive / search system](https://wesmckinney.com/blog/announcing-msgvault/)
- [Render Mermaid diagrams in your terminal](https://github.com/lukilabs/beautiful-mermaid)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.