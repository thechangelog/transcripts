**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 3rd, 2025.

We're making a quick trip to San Francisco next week to partake in [Sync Conf](https://syncconf.dev) –a boutique conference on the future of real-time, collaborative, and agentic software dev organized by Johannes Schickling (Prisma), Adam Wiggins (Heroku), Emma Tracey (Cult.Repo), and more. If you're going, let's *sync* up! If not, stay tuned for the best convos from the hallway track. ✌️

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The overlooked power of URLs](https://alfy.blog/2025/10/31/your-url-is-your-state.html)

Ahmad Alfy found an old comment in his code that contained a powerful link:

> I clicked the URL, and it was the PrismJS download page with every checkbox, dropdown, and option pre-selected to match my exact configuration. Themes chosen. Languages selected. Plugins enabled. Everything, perfectly reconstructed from that single URL...
>
> Here was a URL doing far more than just pointing to a page. It was storing state, encoding intent, and making my entire setup shareable and recoverable. No database. No cookies. No localStorage. Just a URL.

URLs can do so much, but we don't always use them to their full potential. In this article, Ahmad explains how URLs are even more than UI. They're **state containers**. They have their [limitations](https://stackoverflow.com/a/417184/497828), yes, but Pareto tells me we're not benefiting from the virtues of the URL nearly enough. Ahmad agrees:

> We’ve built increasingly sophisticated state management libraries like Redux, MobX, Zustand, Recoil and others. They all have their place but sometimes the best solution is the one that’s been there all along.

**Break:**

**Jerod Santo:**

[How I use every Claude Code feature](https://blog.sshh.io/p/how-i-use-every-claude-code-feature)

The more I use Claude Code (CC), the more I want to use CC. That's a strong indicator of good product design. The challenge I have is the surface area of the product feels overwhelming. Not that I'm "holding it wrong" necessarily, but that I could be holding it *better*.

But if I'm being honest, (which I actually always try to be so I don't know why I feel compelled to prefix the following (or any statement) with that phrase... but here we are) I don't know how much of CC's feature set is worth investing in. Are slash commands here to stay? Are subagents even worth it? Will I switch to Amp or Codex or Gemini CLI next week and make any CC specific learnings moot?

With those questions in mind, I love posts like this one from Shrivu Shankar. A brain dump of all the ways he's been using CC for me to cherry pick from. Let's do more like this!

**Break:**

**Jerod Santo:**

[AI broke interviews](https://yusufaytas.com/ai-broke-interviews/)

I'm not sure the software industry's interview process was functional prior to October 2022, but as Yusuf Aytas laments in this post, it's certainly busted now:

> Everyone now has access to perfect code, perfect explanations, perfect system design diagrams, and even perfect behavioural answers. You don’t need a network. You don’t need experience. You just need a second monitor. Lying. You don’t even need that. Check [this](https://www.interviewcoder.co/) out.

The ["this"](https://www.interviewcoder.co) that he referenced, for those who didn't click, is an *Interview Coder* service that's been recently "upgraded with audio support and 20+ cutting-edge undetectability features to keep you invisible across every interview check."

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Postgres for agents is here](https://www.tigerdata.com/blog/postgres-for-agents)

Tiger Data just launched Agentic Postgres, *the first database built from the ground up for AI agents*.

We’ve seen Postgres extended in every direction — time series, vector, graph — but this is the next evolution. Traditional databases wait for humans to query them. Agentic Postgres is designed for autonomous agents that read, write, and reason about data on their own.

It’s Postgres reimagined for the agent era — with built-in memory, context management, and safety controls so agents can collaborate without stepping on each other’s data.

If you’ve been wondering what the “database for agents” looks like, Tiger Data has just answered that question.

Learn more at tigerdata.com or check the link in the newsletter to read the blog post.

**Break:**

**Jerod Santo:**

[Intern saves TikTok $300K/year because Rust](https://wxiaoyun.com/blog/rust-rewrite-case-study/)

During his internship at TikTok, Wu Xiaoyun ported a core payment service from Go to Rust:

> We faced a classic engineering dilemma: how do you squeeze more performance out of a critical system without compromising stability or breaking the bank? This is the story of how I tackled that challenge by selectively rewriting a performance bottleneck in Rust, resulting in a 2x performance gain1 and nearly $300,000 in projected annual savings in cloud costs.

One of our industry's principles is "premature optimization is the root of all evil." But it's important to note how much heavy lifting the word "premature" is doing in that axiom. Well-timed optimization can yield huge wins like the one Wu and his colleagues deployed. Oh, and if you think this experience soured Wu on Go...

> Paradoxically, this project gave me an even deeper appreciation for Golang. Go’s incredible developer productivity and well-rounded performance make it the ideal choice for 95% of our services.

**Break:**

**Jerod Santo:**

[JSON for LLM prompts at half the tokens](https://github.com/toon-format/toon)

TOON (Token-Oriented Object Notation) is a "compact, human-readable serialization format designed for passing structured data to Large Language Models with significantly reduced token usage."

The idea here is to still use JSON programmatically, but convert to TOON for LLM input saving about 40-60% of tokens. Why? Because LLM tokens still cost money. And anything that costs developers money will be optimized away as much as we can muster.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Internet Archive Wayback Machine Link Fixer](https://wordpress.org/plugins/internet-archive-wayback-machine-link-fixer/)
- [The only thing that matters](https://commoncog.com/only-thing-that-matters/)
- [If you don't tinker, you don't have taste](https://seated.ro/blog/tinkering-a-lost-art)

Get in on the newsletter at changelog.news

Last week on The Changelog: Adam Jacob joined us to discuss how agentic systems for building and managing infra have fundamentally altered how he thinks about everything, including the last six years of his life.

And Adam and I finally pushed record on a spooky Friends episode about software projects that are dying, dead, or undead.

And coming up: On Wednesday, Andrew Nesbitt tells us all about ecosystems, the world's most comprehensive and accurate dataset about open source production and use... and on Friday, we play what should be the most competitive round of our #define game show because every participant (except Adam) is already a champion.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
