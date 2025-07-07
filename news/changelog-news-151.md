**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 7th, 2025.

GOOD news about our upcoming Denver [live show](https://changelog.com/live). Not only will Breakmaster Cylinder be in attendance, BMC is now officially performing some *fresh* and some *classic*&nbsp;[Changelog Beats](https://changelog.com/beats) on stage 30 minutes prior to our 10am start!

So, if you were planning on arriving just before 10am, get your ear holes to the [Oriental Theater](https://changelog.com/live) a little earlier. And if you haven't bought your ticket yet, you now have one more reason to get in on it...

[$15 bucks cheap](https://tickets.holdmyticket.com/tickets/449299) and FREE for [Changelog++](https://changelog.com/++) members.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Full-breadth developers for the win](https://justin.searls.co/posts/full-breadth-developers/)

Much like myself, Justin Searls turned the corner on generative coding tools:

> It may not map to any particular splashy innovation or announcement, but everyone agrees generative coding tools crossed a significant capability threshold recently. It's what led me to write this. In just two days, I've completed two months worth of work on [Posse Party](https://posseparty.com/).

Justin explains how he did it, but the key insight is this: he embodies the entirety of the problem/solution space. He is both *Product Justin* and *Programmer Justin*. If you were to split him in two, it would have taken weeks instead of days. 

In this post, Justin coins the term "full-breadth developer", describes why he thinks full-breadth devs will be the BIG winners of the AI upheaval, and disambiguates my frequent call to *move up the value chain*:

> A lot of developers are feeling scared and hopeless about the changes being wrought by all this. Yes, AI is being used as an excuse by executives to lay people off and pad their margins. Yes, how foundation models were trained was unethical and probably also illegal. Yes, hustle bros are running around making bullshit claims. Yes, almost every party involved has a reason to make exaggerated claims about AI.
>
> All of that can be true, and it still doesn't matter. Your job as you knew it is gone.
>
> If you want to keep getting paid, you may have been told to, "move up the value chain." If that sounds ambiguous and unclear, I'll put it more plainly: **figure out how your employer makes money and position your ass somewhere directly in-between the corporate bank account and your customers' credit card information**.

**Break:**

**Jerod Santo:**

[Cloudflare experiments with pay-per-crawl](https://blog.cloudflare.com/introducing-pay-per-crawl/)

Many content creators are (rightfully) concerned about LLMs crawling their sites and scraping their hard-produced content. Up until now, the options have been limited to a binary "let them do it" or "don't let them do it." Enter Cloudflare:

> We believe your choice need not be binary — there should be a third, more nuanced option: You can charge for access. Instead of a blanket block or uncompensated open access, we want to empower content owners to monetize their content at Internet scale.
>
> We’re excited to help dust off a mostly forgotten piece of the web: HTTP response code [402](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402).

By leveraging the 402 "Payment Required" status code, Cloudflare has devised an experimental pay-per-crawl system where publishers control their monetization strategy, crawlers authenticate via the [Web Bot Auth](https://developers.cloudflare.com/bots/concepts/bot/verified-bots/web-bot-auth/) protocol and indicate their payment agreement via headers, and Cloudflare acts at the settlement layer. 

I love seeing smart people throw their ideas into the web arena like this. Will it work? I have no idea! Does it stand a chance? I think it might!

**Break:**

**Jerod Santo:**

[Stop building AI agents](https://decodingml.substack.com/p/stop-building-ai-agents)

Hugo Bowne-Anderson is frustrated by seeing the same pattern after advising dozens of teams building LLM-powered systems.

> Everyone reaches for agents first. They set up memory systems. They add routing logic. They create tool definitions and character backstories. It feels powerful and it feels like progress.
>
> Until everything breaks. And when things go wrong (which they always do), nobody can figure out why.
>
> Was it the agent forgetting its task? Is the wrong tool getting selected? Too many moving parts to debug? Is the whole system fundamentally brittle?

Hugo learned this the hard way by building a "research crew" of three agents, five tools, and "perfect coordination" on paper. The system (like others he'd built) failed spectacularly, leading Hugo to create this flow chart:

[![Should I use an Agent flowchart (hint: probably not)](https://cdn.changelog.com/news/151-agent-flowchart.jpg)](https://decodingml.substack.com/p/stop-building-ai-agents)

This post is about what Hugo learned from those failures, including how to avoid them entirely.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Free AI code reviews in VS Code, Cursor, Windsurf](https://www.coderabbit.ai/blog/ai-code-reviews-vscode-cursor-windsurf)

CodeRabbit just launched AI-powered code reviews directly inside VS Code, with support for Cursor, Windsurf, and more on the way. Now you can code, review, and commit...all without leaving your IDE. It's a seamless "review in flow" experience.

CodeRabbit doesn't just help you write code — it catches AI slop too. Hallucinations, code smells, logical errors, missing unit tests — they all get flagged in real time, with configurable rules.

Even better? **Code reviews in your IDE are free**. CodeRabbit gives you senior-engineer-level reviews in your IDE, for free.

If you've been waiting for AI reviews that feel like part of your workflow, this is the one to try. Learn more at [CodeRabbit.ai](https://www.coderabbit.ai/blog/ai-code-reviews-vscode-cursor-windsurf) or follow the link in the newsletter.

**Break:**

**Jerod Santo:**

[Calculate the actual value of your job](https://github.com/Zippland/worth-calculator)

Is your job worth the grind?  This [Job Worth Calculator](https://worthjob.zippland.com) calculates a *Job Value Rating* based on salary, work hours, commute time, environment, and more. 

It does international salary comparison with Purchasing Price Parity conversion across 190+ countries, and lets you customize it with personal factors like education level / work experience. Then, it generates a shareable, downloadable job analysis report for you.

**Break:**

**Jerod Santo:**

[Announcing PlanetScale for Postgres](https://planetscale.com/blog/planetscale-for-postgres)

Sam Lambert, PlanetScale CEO, announcing that the "Vitess Cloud" provider is adding Postgres to its short list of supported databases:

> PlanetScale has been successful hosting some of the world’s largest relational databases, so why are we building for Postgres? The reason is simple: customer demand

This is fascinating in the wake of Supabase\* recently hiring Vitess co-creator, Sugu Sougoumarane, to help them build [Multigres](https://github.com/multigres/multigres), which is Vitess for Postgres. On that topic, Sam says:

> Vitess is one of PlanetScale’s greatest strengths and has become synonymous with database scaling. Contemporary Vitess is the product of PlanetScale’s experience running at extreme scale. We have made explicit sharding accessible to hundreds of thousands of users and it is time to bring this power to Postgres. We will not however be using Vitess to do this.

So PlanetScale, which is historically all about Vitess and MySQL, plans on bringing Vitess-like sharding to Postgres, but not with Vitess itself. Meanwhile, Supabase is working on pretty much the same thing with some of the team that built Vitess in the first place. Imagine what they could create if they teamed up on this initiative... but *something* tells me that's never going to happen!

*\*I'm a small investor in Supabase because I wanted to make a bet on the future of Postgres and they're Postgres maxis. Maybe I should invest in PlanetScale now too?*

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [The email startup graveyard](https://forwardemail.net/en/blog/docs/email-startup-graveyard-why-80-percent-email-companies-fail)
- [Backlog.md](https://github.com/MrLesk/Backlog.md)
- This week's Developer Dictionary definition: scrum
- and our award-worthy unordered list of interesting links

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.