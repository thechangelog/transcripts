**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, May 26th, 2025.

My Mom was right, again! Good things really *do* come to those who wait. 

We've been waiting patiently to acquire the [changelog.news](https://changelog.news) vanity domain ever since we renamed from *Changelog Weekly* and turned this humble newsletter into a podcast/newsletter combo. **BIG thanks** to Changelog community member, Jarvis Yang, for keeping an eye out for us and hollering when the domain was available. Domain acquired! ✅

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Entry-level tech jobs are getting wiped out](https://sfstandard.com/2025/05/20/silicon-valley-white-collar-recession-entry-level)

The San Fransisco Standard published some sobering news for new graduates:

> Hiring of new grads by the 15 largest tech companies has fallen by more than 50% since 2019, according to a new report from VC firm SignalFire. While hiring for mid- and senior-level roles rebounded last year following mass layoffs across all levels in 2023, it declined at the entry level. The gap between the overall unemployment level and that of recent college grads recently reached an all-time high, according to census data.

The culprit? You're not going to like this...

> Previously, startups would typically hire one senior person and two or three early-career coders to assist, he said. But AI holds advantages over those junior employees.
>
> > “They ask, ‘Why hire an undergraduate when AI is cheaper and quicker?’”
> 
> said O’Brien, adding that while AI-generated code isn’t top-tier, neither is code written by new grads. The key difference, he said, is that the iterative process to make AI code better takes minutes, while a junior coder might need days for the same task. 

That's bad news for everyone involved. The good news for new grads: there's never been a better time in history to start your own business and you'll probably never have as little responsibility* as you do right now.

*\*(hopefully you didn't take on soul-crushing debt to acquire your degree...)*

**Break:**

**Jerod Santo:**

[Forge is an AI agent in your terminal](https://forgecode.dev/)

While most devtool makers are building AI agents for your IDE, your text editor, and/or your web browser, the Forge team decided to put one in your shell. Here's why:

- **Speed & Efficiency**: Terminal interfaces provide sub-50ms startup and direct system access
- **Rich Context**: Your shell session already contains your complete development context
- **Tool Ecosystem**: Seamlessly combines with the powerful Unix tool ecosystem through pipes and redirections
- **Composability**: Follows Unix philosophy of combining specialized tools to solve complex problems

I find this approach both novel and interesting, at least for we developers who already work in the terminal. Forge is an open source Rust codebase with its own [proprietary provider](https://app.antinomy.ai/app/), but you can plug it into [many other providers](https://github.com/antinomyhq/forge?tab=readme-ov-file#provider-configuration) as well.

**Break:**

**Jerod Santo:**

[Choose tools that make you happy](https://borretti.me/article/you-can-choose-tools-that-make-you-happy)

The actual title of this post by Fernando Borretti starts with "You can...", but I like my imperative form 👆 better. Now it's more than *permission* to choose tools that make you happy, but *instruction* to do just that! That being said, the post isn't really about permission OR instruction. It's about admitting that which we already do 😆

> Emacs is a Gnostic cult. And you know what? That’s fine. In fact, it’s great. It makes you happy, what else is needed? You are allowed to use weird, obscure, inconvenient, obsolescent, undead things if it makes you happy. We are all going to die. If you’re lucky you get three gigaseconds and you’re up. Do what you are called to do. Put ZFS in your air fryer, do your taxes in Fortran...
> 
> Just don’t bulls!@# me. Don’t look me in the eye and tell me SNOBOL is the language of the future. Don’t tell your boss it was a rational cost-benefit calculation that made you rewrite the frontend in Prolog.

Related: I love the comments on Mitchell Hashimoto's [clip](https://youtu.be/dJ5-41u-e7k) about why he chose Zig for Ghostty and I bet Fernando would love them as well.

**Break:**

**Jerod Santo:**

[What I've learned from jj](https://zerowidth.com/2025/what-ive-learned-from-jj)

[Jujutsu](https://jj-vcs.github.io) ("jj" for short) is an up-and-coming version control system that many smart people are saying many nice things about. Nathan Witmer says Jujutsu's flexibility and safety changed his approach to version control. 

> Working with git has been great, especially in contrast to what came before. But despite years of development, it still has sharp edges and presents a steep learning curve. Jujutsu doesn’t fix that, exactly, but it sands off some rough edges and makes some different decisions that result in a much safer and far more flexible workflow.

What surprises me about jj excitement/adoption is that nobody claims it's revolutionary or 10x better than git or anything like that. They just say it's marginally better in many small ways that I guess add up to adoption-worthy. In this post, Nathan explains how jj has made him think differently about commits and intentionality, rebasing, conflict resolution, and more. He also followed this post up with a (perhaps more approachable) [jj tips and tricks](https://zerowidth.com/2025/jj-tips-and-tricks/)

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Claude Code in your GitHub Actions](https://depot.dev/blog/claude-code-in-GitHub-actions?utm_source=changelog&utm_campaign=changelog-news)

If you’re using GitHub Actions, you’ll want to check this out.

The Depot team just integrated Claude Code directly into your GitHub Actions workflows with no setup required. You can now add AI code generation right into your builds and let Claude help you write tests, docs, and even production code.

Yes, Claude Code running inside your GitHub Actions builds, with zero extra config.

This is the kind of usage of Claude Code and AI that makes teams rethink what CI/CD is capable of. Claude’s speed and power meets Depot’s blazing-fast builds.

Here's what Kyle Galbraith, CEO of Depot, has to say about this:

> "Anthropic has brought my favorite agentic coding interaction, Claude Code, to GitHub Actions. This means that we can now use Claude Code to write and run code by simply asking Claude in pull requests and issues. Behind the scenes, Claude Code runs inside of GitHub Actions workflows that we control, making it easier to automate tasks and improve our development processes."

Head to Depot.dev or check the direct link to the post in your chapter data

**Break:**

**Jerod Santo:**

[MCP is the coming of Web 2.0 2.0](https://www.anildash.com//2025/05/20/mcp-web20-20/)

Anil Dash is as excited about MCP as almost everyone else is:

> The interesting thing about the rapid adoption of MCP isn't the specification itself. Honestly, the spec is... kinda mid. Compared to the olden days, when specs were written by pedantic old Unix dudes who were never in danger of being gruntled in the first place, they would be scratched out in "plain text", with the occasional shouting in ALL CAPS about what we SHOULD and MUST do. MCP is very nearly just a vague set of ideas, a hallucination of a specification, appropriate to the current era, where even the constitution is just a suggestion. A – vibe protocol –. But MCP works! And it's open — and that's what counts.

He thinks the rapid adoption of MCP represents a second coming of the entire ethos of Web 2.0. Remember Web 2.0?!

> The Web 2.0 community was a bunch of folks building lots of different sites that were meant to have open APIs that let developers (and even users!) explore and connect people and data together in interesting and unexpected and useful and even weird ways. The standard-bearers of the era were sites like Flickr and Del.icio.us and Upcoming, which pioneered things like tags and social sharing.

I made the same connection when [discussing MCP](https://changelog.am/88) with Richard Moot from Square, but I'm not as optimistic as Anil is (currently) this time around:

> The rise of MCP gives hope that the popularity of AI amongst coders might pry open all these other platforms to make them programmable for any purpose, not just so that LLMs can control them.

I shouldn't complain *too much* about Web 2.0. At least it gave us podcasting. But what else do we still have from that era? And what is stopping the tech giants this time from changing their *open* tune as soon as it's no longer expedient for their bottom line?

**Break:**

**Jerod Santo:**

[Push "ifs" up and "fors" down](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)

Here's two *rules of thumb* that make a lot of sense to me. Oddly enough, I don't think I've heard them before. Or maybe I just forgot! Either way, Alex Kladov suggests we push "if" conditions as high up as is reasonable. Here's one reason why:

> Control flow and *ifs* are complicated, and are a source of bugs. By pushing *ifs* up, you often end up centralizing control flow in a single function, which has a complex branching logic, but all the actual work is delegated to straight line subroutines.
>
> If you have complex control flow, better to fit it on a screen in a single function, rather than spread throughout the file. What’s more, with all the flow in one place it often is possible to notice redundancies and dead conditions.

The main reason he thinks we should push *fors* down is performance:

> If you have a whole batch of things to work with, you can amortize startup cost and be flexible about the order you process things. In fact, you don’t even need to process entities in any particular order, you can do vectorized/struct-of-array tricks to process one field of all entities first, before continuing with other fields.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Settling the file structure debate](https://muhammedsari.me/settling-the-file-structure-debate)
- [LLM function calls don't scale](https://jngiam.bearblog.dev/mcp-large-data/)
- [Tales from mainframe modernization](https://oppi.li/posts/tales_from_mainframe_modernization)

Get in on the newsletter at changelog.news, yes, changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review to help out the show, and I'll talk to you again real soon.
