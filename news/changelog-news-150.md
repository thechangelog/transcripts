**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 30th, 2025.

Mikeal Rogers, long-time Changelog friend & [contributor](https://changelog.com/person/mikeal), passed away this month from colon cancer. [JS Party](https://jsparty.fm) would have never existed without Mikeal. Neither would [RFC](https://changelog.com/rfc). He was relentless in his support of us and our work. I'm so thankful that our lives intersected, if only for a brief while. 

Mikeal died at 42 years young. My exact age today. Count your blessings, y'all. We aren't guaranteed tomorrow. You should read his full obituary [here](https://www.legacy.com/us/obituaries/nytimes/name/mikeal-rogers-obituary?id=58676316).

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Coding agents have crossed a chasm](https://blog.singleton.io/posts/2025-06-14-coding-agents-cross-a-chasm/)

My recent experience aligns with David Singleton, who says:

> Somewhere in the last few months, something fundamental shifted for me with autonomous AI coding agents. They’ve gone from a “hey this is pretty neat” curiosity to something I genuinely can’t imagine working without. Not in a hand-wavy, hype-cycle way, but in a very concrete “this is changing how I ship software” way.

I explained to Adam on [Friends 98](https://changelog.am/98) that Claude Code feels like it's delivering on the promises that AI hype-sters have been making ever since ChatGPT broke the internet in November of '22. I'm letting it code up many scripts/tools that didn't cross my personal ROI threshold previously. David says the same:

> For personal tools, I’ve completely shifted my approach. I don’t even look at the code anymore - I describe what I want to Claude Code, test the result, make some minor tweaks with the AI and if it’s not good enough, I start over with a slightly different initial prompt.

Yup!

**Break:**

**Jerod Santo:**

[The software engineering "squeeze"](https://newsletter.manager.dev/p/the-software-engineering-squeeze)

Software Engineers have had it easy for many years, but the times certainly are a changin'. Anton Zaides is optimistic:

> All those companies started by vibe-coders all around you? Many will succeed, and will need great engineers to scale up.
>
> Some engineers understand this, and use the chance to skill up. To succeed, you’ll probably need all the skills of an engineer, some of a PM, and even a bit of design taste. It’s not just about shipping code anymore.
>
> But if you work as a code monkey, getting detailed tickets and just shipping them, you’ve done this to yourself. You won’t be needed pretty soon.

Say it with me (for the umpteenth time): We have to move up the value chain. Just keep movin' on up to avoid the squeeze.

**Break:**

**Jerod Santo:**

[What would a Kubernetes 2.0 look like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)

Matt Duggan has been working with K8s for 10+ years, and has a lot of good things to say about it, but the journey hasn't been without problems.

> Some common trends have emerged, where mistakes or misconfiguration arise from where Kubernetes isn't opinionated enough. Even ten years on, we're still seeing a lot of churn inside of ecosystem and people stepping on well-documented landmines.

So, knowing what he knows now, Matt asks and answers, "What could we do differently to make this great tool even more applicable to more people and problems?" Here's the top-level of his thoughts.

- Ditch YAML for HCL
- Allow etcd swap-out
- A native package manager
- IPv6 by default

Click through for the skinny on each improvement. I'll clip one last thought from Matt, because it's a crucial point even if you aren't a k8s person: 

> "defaults are the most powerful force in technology"

**Break:**

**Jerod Santo:**

[Coding agents are already commoditized](https://www.seangoedecke.com/ai-agents-are-commoditized/)

Sean Goedecke does a nice job elucidating another thought I've had while talking to various devs about coding agents and seeing so many orgs shipping their own lately: these things have no moat

> There’s also no moat to the actual agent code. It turns out that “put the model in a loop with a ‘read file’ and ‘write file’ tool” is good enough to do basically anything you want.(I don’t know for sure that the closed source options operate like this, but it’s an educated guess. In other words, the agent hackers in 2023 were correct, and the only reason they couldn’t build Claude Code then was that they were too early to get to use the really good models.

Sean says it's a tough market to sell a better AI coding agent in, because open source solutions (like OpenAI's Codex) are already very good. But that's not even the point. The reason OpenAI wants you using Codex and Anthropic wants you using Claude Code and Google wants you using Gemini CLI and Sourcegraph wants you using Amp is not to sell you a better coding agent. It's to sell you ***their tokens*** instead of you buying somebody else's tokens. The challenge with that strategy is that it has a very small moat. Not no moat, mind you, but not much of one either.

**Break:**

**Jerod Santo:**

[Write to escape your default setting](https://kupajo.com/write-to-escape-your-default-setting/)

Writing is hard. Painful, even. In the past, I've likened publishing an essay to birthing a child. They're both laborious journeys mired in contractions, heavy breathing, and occasional screams.

My wife, who birthed six healthy children (!) on our behalf, finds the analogy lacking. She deserves to! I'd come up with a better one, but writing is hard.

I guess my point is, sometimes we need motivation to do hard things. If you need some reasons to write, this post's for you:

> At its best, writing (and reading) can expose the ugly, uncomfortable, or unrealistic parts of your thoughts. It can pluck out parasitic ideas burrowed so deeply that they imperceptibly steer your feelings and beliefs. Sometimes this uprooting will reveal that the lustrous potential of a new idea is a mirage, or that your understanding of someone’s motives was incomplete, maybe your own projected bullshit reflected back to you.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Open source has turned into two worlds](https://utcc.utoronto.ca/~cks/space/blog/tech/Open SourceTwoWorlds)
- [Git quick statistics](https://github.com/git-quick-stats/git-quick-stats)
- [Claude Code Usage Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and 5-star review us if you dig the show, and I'll talk to you again real soon.
