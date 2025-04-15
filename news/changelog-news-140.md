**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 14th, 2025.

Security researchers [have discovered](https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents) a way hackers might weaponize GitHub Copilot and Cursor to insert malicious code that might bypass typical code reviews, calling it "virtually invisible to developers and security teams." So, your most trusted coding assistant could also be an unwitting accomplice to some particularly gnarly attacks. Is it time to update the old adage?

> "Keep your friends close, and your enemies closer, but your AIs *closest*."

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Google's new protocol has AI agents talkin'](https://github.com/google/A2A)

If our agentic future is to someday arrive, we're gonna need a way for my agent to call your agent (so we can do lunch). Google thinks they developed a good way of achieving that with their [A2A](https://google.github.io/A2A) protocol:

> a collaborative way to help agents across different ecosystems communicate with each other. Google is driving this open protocol initiative for the industry because we believe this protocol will be **critical to support multi-agent communication by giving your agents a common language – irrespective of the framework or vendor they are built on.**

They have "more than 50 technology partners" agreeing to work together to further develop the protocol, and they see it as complementary to MCP, not in competition with it. According to Google, MCP "provides helpful tools and context to agents" while A2A "empowers developers to build agents capable of connecting with any other agent."

That being said, Anthropic is **not listed** as a technology partner and I can't help but think there'll be quite a bit of overlap between the two protocols as things progress.

**Break:**

**Jerod Santo:**

[Datastar - The hypermedia framework](https://data-star.dev/)

If [Alpine.js](https://alpinejs.dev/) (frontend reactivity) and [htmx](https://htmx.org/) (backend reactivity) had a love child, Datastar might be it.

> Include Datastar with a single 14.5 KiB file and start adding reactivity to your frontend immediately. Write your backend in the language of your choice! Official [SDKs](https://data-star.dev/reference/sdks) are available to help you get up and running even faster, or you can send [SSE events](https://data-star.dev/reference/sse_events) directly from your backend.

The backend SDKs must implement [Datastar's SSE protocol](https://data-star.dev/reference/sse_events), which looks simple enough. This is an impressive effort, at first brush. The only thing I can't find is evidence of Datastar being used in production anywhere. Maybe I missed it? The team has confidence in the framework, though...

> We're so confident that Datastar can be used as a JavaScript framework replacement that we challenge anyone to find a use-case for a web app that Datastar cannot be used to build!

**Break:**

**Jerod Santo:**

[The best programmers I know](https://endler.dev/2025/best-programmers/)

Matthias Endler takes a crack at answering a similar question to [the one I posed to Justin Searls](https://changelog.com/friends/85#t=4571) on a recent Friends:

> I have met a lot of developers in my life. Lately, I asked myself: “What does it take to be one of the best? What do they all have in common?”

Here's a sampling of Matthias' list of things great devs do, cherry-picked for the ones I agree with most:

- Read the Reference
- Break Down Problems
- Never Stop Learning
- Have Patience
- Keep it Simple

Matthias' "patience" section most closely aligns with the one thing that Justin and I both agreed is compulsory to becoming a good developer: *perseverance*

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Retool’s Q1 2025 release](https://retool.com/blog/q1-2025-release?utm_source=changelog&utm_campaign=changelog-news)

The latest release from Retool includes over 100 improvements. If you're on-prem, upgrade to 3.148. For everyone else, create a free account or login.

Here are 5 standout features that directly address frequent requests from customers deploying Retool.

1. **Multipage apps are now the default** building experience, giving you a better foundation for complex applications. [Multipage apps](https://retool.com/blog/retool-developer-day-q3-2024#multipage-applications) are apps that consolidate several separate apps into a single, more maintainable application. Defaulting to this architecture delivers 27% faster load times on average.
2. **Confirming production-readiness gets easier** thanks to enterprise deployment controls that enable structured governance, collaboration, and testing for secure, reliable app releases.
3. **Multi-instance releases is now in private beta**. A simple manifest file designates consistent app version releases across multiple environments, enabling structured promotion from dev to production.
4. **Usage Analytics has beeb enhanced**. A redesigned dashboard provides tab-based views and granular insights into user engagement across your entire deployment.
5. **Workflows are the next big thing**. They let you create multistep functions with execution control and AI logic that can connect to dozens of databases, third-party services and APIs – and ship it all in a single click.

Check out the [*detailed release notes*](https://docs.retool.com/releases/stable) to learn more and thank you to Retool for sponsoring this week's Changelog News.

**Break:**

**Jerod Santo:**

[Linus Torvalds built Git in 10 days](https://www.zdnet.com/article/linus-torvalds-built-git-in-10-days-and-never-imagined-it-would-last-20-years/)

As if it weren't already impressive... TIL the initial version of Git was hammered out in a mere 10 days back in April, 2005. It's also interesting to note that Linux's success wasn't enough to rid Linus of his imposter syndrome:

> that while he's proud of having created Linux, what makes him "happy about Git is not that it's taken over the world. It's that we all have self-doubt, right? We all think, 'Are we actually any good?' And one of the self-doubts I had with Linux was it was just a reimplementation of Unix, right? Can I give you something that isn't just a better version of something else? Git proved to me that I can. Having two projects that made a big splash means that I'm not a one-trick pony."

This post by Steven Vaughan-Nichols is a great little peak into the history of Git to celebrate its 20-year anniversary. My only gripe is that the "Why has Git been so successful?" section doesn't even mention the impact that GitHub had on Git's adoption. Before GitHub, it wasn't clear if Mercurial or Git would be the community's DVCS of choice. After GitHub... well, we're living in it.

**Break:**

**Jerod Santo:**

[A simple CLI to help remember commands](https://github.com/dtnewman/zev)

Zev is a python-based CLI tool that helps you remember (or discover) terminal commands using natural language. For example, you might type out:

> "show all files in this directory w/ human readable sizes"

And Zev will present you with 3 options:

1. ls -lh
2. du -sh *
3. find . -maxdepth 1 -type f -exec ls -lh {} +

You can then select the one you want to use and copy it to your clipboard for pasting. How does it achieve this magic? With the OpenAI API, what'd you expect!? You can also point it at Ollama, so that's nice.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as:

- [Atuin Scripts: shareable, syncable shell snippets](https://blog.atuin.sh/atuin-scripts-shareable-syncable-shell-snippets/)
- [A gallery of awesome 404 page designs](https://www.404s.design/)
- [Git blame for file trees](https://github.com/sinclairtarget/git-who)

Get in on the newsletter at changelog.com/news

Last week on the pod: we talked with Stephan Ewen all about Restate and the era of durable execution functions and we sat down with Richard Moot from the Square Developer Podcast to discuss how we helped them produce an awesome show and the recent hype around MCP servers. Listen to those if you haven't yet, and stay tuned for this week's upcoming shows:

- **Wednesday**: Anthony Eden, founder of *DNSimple*
- **Friday**: Nick Nisi, founder the *Unofficial TypeScript Fan Club*

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
