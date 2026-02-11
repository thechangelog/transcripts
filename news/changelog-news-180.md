**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, February 9th, 2026.

So the folks at ai.com apparently spent $70 million on the domain, then another $15 million on a Super Bowl ad, then failed to prepare for the resulting flood. The end result: one of the most expensive, self-inflicted DDoS attacks in tech history *and* free advertising for Cloudflare's standard Gateway time-out page. ([src](https://x.com/aquariusacquah/status/2020694326247100621))

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Vouch for an open source web of trust](https://github.com/mitchellh/vouch)

Ghostty creator, Mitchell Hashimoto:

> AI eliminated the natural barrier to entry that let OSS projects trust by default. People told me to do something rather than just complain. So I did. Introducing Vouch: explicit trust management for open source. Trusted people vouch for others.

The idea is simple and mimics real life social constructs, so I think it has a chance of succeeding.

> Unvouched users can't contribute to your projects. Very bad users can be explicitly "denounced", effectively blocked. Users are vouched or denounced by contributors via GitHub issue or discussion comments or via the CLI.

Mitchell is rolling out this vouching process in Ghostty immediately.

**Break:**

**Jerod Santo:**

[Claudes build a C compiler](https://www.anthropic.com/engineering/building-c-compiler)

Alongside the launch of Opus 4.6, the Anthropic team published the results of Nicholas Carlini's experiment with "agent teams":

>  I tasked 16 agents with writing a Rust-based C compiler, from scratch, capable of compiling the Linux kernel. Over nearly 2,000 Claude Code sessions and $20,000 in API costs, the agent team produced a 100,000-line compiler that can build Linux 6.9 on x86, ARM, and RISC-V. 

It was a fascinating journey, which produced some new techniques in designing harnesses for long-running autonomous agent teams. The resulting [compiler](https://github.com/anthropics/claudes-c-compiler) can build Linux 6.9, but isn't a fully functional C compiler. In fact, it fails to compile the most basic ['Hello, world'](https://github.com/anthropics/claudes-c-compiler/issues/1) program, which gave the general public all it needed to [torch](https://github.com/anthropics/claudes-c-compiler/issues/1#issuecomment-3856153640) the entire effort.

**Break:**

**Jerod Santo:**

[We've tried to replace devs every decade since 1969](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)

Stephan Schwab recounts the history of the sentiment that, "this time, we'll finally make software development simple enough that we won't need so many developers." According to Stephan:

> Understanding why this cycle persists for fifty years reveals what both sides need to know about the nature of software work.

In brief, the history looks like this:

- 1969: The dream was born during the Apollo program
- 1970s: COBOL: business people will write their own programs
- 1980s: CASE tools will generate everything
- 1990s: Visual Basic and Delphi: drag, drop, done
- 2000s+: Web frameworks, low-code, and no-code
- Today: AI: the latest chapter in a long story

So far, every advancement has not reduced the need for developers, but increased it. Stephan says AI will do the same. 

> The pattern continues because the dream reflects a legitimate need. We genuinely require faster, more efficient ways to create software. We just keep discovering that the constraint isn’t the tool—it’s the complexity of the problems we’re trying to solve.
>
> Understanding this doesn’t mean rejecting new tools. It means using them with clear expectations about what they can provide and what will always require human judgment.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Did your AI just recommend a vulnerable package?](https://fandf.co/4ahP5MZ)

Here's a fun experiment: ask your coding agent to recommend a logging library for your next project. Now check when that recommendation was last updated. Feeling lucky?

AI coding agents are trained on data with a knowledge cutoff. That package they just confidently suggested could have three CVEs disclosed since the model learned about it. Your code runs. Your security audit does not.

That's why Sonatype built [Guide](https://fandf.co/4ahP5MZ). **No signup. No credit card.** 

Just go to [guide.sonatype.com]([https://guide.sonatype.com](https://fandf.co/4ahP5MZ)) and start querying.

Sonatype Guide is an MCP server that plugs directly into Claude, Cursor, and other AI assistants. Instead of your agent pulling from stale training data, it pulls from Sonatype's live component intelligence. These are the folks behind Maven Central, trusted by over 15 million developers. They know which packages are safe and which ones you should avoid.

Here's a challenge: go to [guide.sonatype.com](https://fandf.co/4ahP5MZ), search for a dependency your AI recently recommended, and see what Sonatype knows that your model doesn't.

**Break:**

**Jerod Santo:**

[A lightweight, containered alternative to OpenClaw](https://github.com/gavrielc/nanoclaw)

> [OpenClaw](https://github.com/openclaw/openclaw) is an impressive project with a great vision. But I can't sleep well running software I don't understand with access to my life. OpenClaw has 52+ modules, 8 config management files, 45+ dependencies, and abstractions for 15 channel providers. Security is application-level (allowlists, pairing codes) rather than OS isolation. Everything runs in one Node process with shared memory.
>
> NanoClaw gives you the same core functionality in a codebase you can understand in 8 minutes. One process. A handful of files. Agents run in actual Linux containers with filesystem isolation, not behind permission checks.

OpenClaw's success is undeniable, but that doesn't mean it fits everyone perfectly. NanoClaw looks like a great alternative for the security and/or simplicity conscious. It also has an interesting approach to feature additions and configuration: [nope](https://github.com/gavrielc/nanoclaw?tab=readme-ov-file#contributing). Fork the codebase and add skills to adapt it to your needs instead.

*See also: [nanobot](https://github.com/HKUDS/nanobot)*

**Break:**

**Jerod Santo:**

[Stop generating, start thinking](https://localghost.dev/blog/stop-generating-start-thinking/)

Sophie Koonin explains why she's unsettled by so many people "going so hard" on LLM-generated code in a way that she can't wrap her head around:

> I find it hard to justify the value of investing so much of my time perfecting the art of asking a machine to write what I could do perfectly well in less time than it takes to hone the prompt.
> 
> You’ve got to give it enough context - but not too much or it gets overloaded. You’re supposed to craft lengthy prompts that massage the AI assistant’s apparently fragile ego by telling it “you are an expert in distributed systems” as if it were an insecure, mediocre software developer.
> 
> Or I could just write the damn code in less time than all of this takes to get working.

I shared this position with her until recently, but I don't do any of the fancy prompting / massaging that other devs talk about and I've been getting excellent results the last few months. Back to Sophie:

> My worry is more around people thinking they can “vibe code” their way to production-ready software, or hand off the actual thinking behind the coding.

I'm 100% with her on that last bit. We cannot *hand off the actual thinking* and produce anything of lasting value. I'd love to say we won't do that, but I repeatedly underestimate the extent to which humans are, above all else, lazy...

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [The Anthropic Hive Mind](https://steve-yegge.medium.com/the-anthropic-hive-mind-d01f768f3d7b)
- [Saying "No" in an age of abundance](https://blog.jim-nielsen.com/2026/saying-no/)
- [Why Elixir is the best language for AI](https://dashbit.co/blog/why-elixir-best-language-for-ai)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
