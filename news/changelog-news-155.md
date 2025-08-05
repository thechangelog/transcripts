**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, August 4th, 2025.

Can I ask you a personal question? *(whoops, I just did.)* When was the last time you had a good cry? There's evidence that crying can relieve stress for a week. 

That's why Johnny Maroney made a website that makes you cry by showing tear-inducing videos. Go ahead. [Click to feel something](https://www.cryonceaweek.com).

All dried out? Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The smell of vibe coding](https://alexkondov.com/i-know-when-youre-vibe-coding)

Alex Kondov knows when you've been vibe coding. He can smell it.

> No one would write an HTTP fetching implementation covering all edge cases when we have a data fetching library in the project that already does that.
>
> No one would implement a bunch of utility functions that we already have in a different module.
>
> No one would change a global configuration when there’s a mechanism to do it on a module level.
>
> No one would write a class when we’re using a functional approach everywhere.

Ultimately, Alex doesn't care about how the code got in your IDE. He just wants you to care. To care about quality, to care about consistency, to care about the long-term effects of your work. And if you care...

> Don’t leave a codebase’s maintainability to the weights of a model.

**Break:**

**Jerod Santo:**

[A glam AI coding agent for your terminal](https://github.com/charmbracelet/crush)

Our friends at Charm are at it again, this time they've built a Go-based AI coding agent as a TUI. Crush is multi-model, so you can choose from a wide range of LLMs (or add your own), it's flexible, so you can switch LLMs mid-session while preserving context, it's session-based, so you can maintain multiple work sessions and contexts per project, and it's extensible, so you can add capabilities via MCPs.

**Break:**

**Jerod Santo:**

[Disassembling the Tea app hack](https://medium.com/@jankammerath/tea-app-hack-disassembling-the-ridiculous-app-source-code-bc585e15bf4f)

There's been a lot of speculation (and joking) that Tea, an app used by women to dish about men on dating apps, was vibe coded because of how *epically* and *easily* its data got leaked. Jan Kammerath disassembled the Android app's binary and concludes, not so:

> My assumptions after this initial forensic analysis is that this app was built by a single inexperienced developer, or by a team dictated by a single inexperienced developer. The app was likely not vibe coded as none of the models of the past months would’ve made such obvious mistakes.

Ouch. In other words, vibe coding would have produced *better* results.

> This “hack” should’ve never happened. The “tea app” isn’t AI slop, it’s gross negligence from a, likely single, developer with very little experience that should not have been allowed to publish such an application without supervision. The app didn’t “get hacked”, it willingly published sensitive personally identifyable information to the world.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Observability for your GitHub Actions](https://depot.dev/blog/introducing-github-job-details-observability-for-your-cicd-pipeline)

If you've ever stared at a failing GitHub Action wondering what on earth just happened, you're not alone. CI logs are often a black box, and not the fun kind.

That's why Depot just launched GitHub Job Details: a new observability layer for your CI/CD pipeline. It lets you zoom in on what each GitHub Actions job is actually doing, real build times, dependency fetches, compute performance, and more. No more guessing. No more click-fests through raw logs.

Your team gets better visibility into bottlenecks, misconfigured jobs, or flaky performance, without rerunning things a dozen times.

It's observability built for CI, not just another dashboard.

**Break:**

**Jerod Santo:**

[Price Per Token](https://pricepertoken.com/)

Is your LLM spending budget on the rise? If so, Alex Ellman has just the website for you. Price Per Token provides up-to-date pricing info for major LLM APIs including OpenAI, Anthropic, Google, and more. It pulls data from [OpenRouter.ai](https://openrouter.ai/) and even lets you estimate the cost of executing the same prompt across different models.

In the future, I assume every AI tool will have a smart routing layer up front that dissects our prompts, determines the sweet spot provider of just enough quality at the cheapest possible price, and dynamically routes it on our behalf. In the meantime, tools like this one from Alex could save you a bundle.

**Break:**

**Jerod Santo:**

[If you're remote, ramble](https://stephango.com/ramblings)

Steph Ango, of Obsidian fame, makes a suggestion for remote teams of 2-10 people like his:

> Create a personal “ramblings” channel for each teammate in your team’s chat app of choice.
>
> Ramblings channels let everyone share what’s on their mind without cluttering group channels. Think of them as personal journals or microblogs inside your team’s chat app, a lightweight way to add ambient social cohesion.

These channels should be at the bottom of the list, muted by default, with no expectation that anybody ever read them. The Obsidian team has found them "surprisingly sticky"

> Because they are so free and loose, some of our best ideas emerge from ramblings. They’re often the source of feature ideas, small prototypes, and creative solutions to long-standing problems.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Most language migrations are hype-driven](https://leaddev.com/technical-direction/yes-the-majority-of-language-migrations-are-driven-by-hype)
- [Modern Node.js patterns](https://kashw1n.com/blog/nodejs-2025/)
- [Typed languages are better for vibe coding](https://solmaz.io/typed-languages-are-better-suited-for-vibecoding)

Get in on the newsletter at changelog.news

In case you missed it, last week on the pod we hosted Greg Osuri on solving the AI energy crisis (that episode has already generated a lot of discussion in Zulip) and on Changelog & Friends Adam and I sat down with the 2025 Stack Overflow developer survey results to glean what we could glean. Give those a listen, scroll up in your feed, or down, I guess, depending on your sort order.

We have some great episodes coming up this week! Both of our Denver live shows are shipping. Our interview with Nora Jones on Wednesday and Kaizen 20 with Gerhard Lazu on Friday.

Have a great week! Like, subscribe, and 5-star review us, if you dig the show, and I'll talk to you again real soon.
