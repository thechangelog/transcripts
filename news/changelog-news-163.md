**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 29th, 2025.

It's official: robots are invading Major League Baseball. Starting with the 2026 season, MLB will implement [a challenge system](https://www.espn.com/mlb/story/_/id/46357017/mlb-approves-robot-umpires-2026-part-challenge-system) for balls and strikes to "usher in the era of robot umpiring."

Human umpires aren't going anywhere anytime  soon, but the writing is on the wall. This makes me sad. Sure, robots will make a higher percentage of correct calls, but they'll also be able to throw harder, hit further, and run faster some day. That doesn't mean I want to watch them compete.

Oh well, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Hiring only senior engineers is killing companies](https://workweave.dev/blog/hiring-only-senior-engineers-is-killing-companies)

In the last 3 months, Andrew Churchill interviewed 134 engineers. His main takeaway: **there is a huge pool of exceptional junior engineers that most companies won’t even consider**.

In this post, Andrew outlines why he loves working with juniors (fresh energy, unshackled by prior experience, loyalty, and more), how to hire the right juniors (filter for mindset, home assignments, test with/without AI, etc.), and how to make it work after the hire (invest in mentoring, be patient, measure right, etc.). His call:

> Investing your time in passionate junior developers will pay off in the long run. The question is whether you'll start now or wait until everyone else figures it out.

**Break:**

**Jerod Santo:**

[Introducing Chrome DevTools MCP](https://addyosmani.com/blog/devtools-mcp/)

Now in public preview, Chrome's DevTools now connects AI agents (like Cursor, Claude Code, and Gemini CLI) to its automation and debugging capabilities. The result?

> Your AI helper can not only write code, but actually run it in a real browser, inspect what’s happening, and even fix issues based on real feedback from the page.

Chrome DevTools MCP acts as a bridge between an AI model and a real Chrome browser instance, which means that your model can now:

open pages, click buttons, read the DOM/CSS, capture performance metrics, read console logs, and much more - all autonomously, as if a human developer were using Chrome DevTools.

**Break:**

**Jerod Santo:**

[GitHub's plan for a more secure npm supply chain](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)

npm has been getting hammered by attackers recently. So much so, that I've struggled to track and contextualize all the events, so we're having our friend, Feross Aboukhadijeh, from [Socket Security](https://socket.dev) on the show Friday to help make sense of it all. 

GitHub, as the owners and hosts of npm, are at the center of the platform. Here's what they're doing about it:

> To address token abuse and self-replicating malware, we will be changing authentication and publishing options in the near future to only include:
>
> 1. Local publishing with required [two-factor authentication](https://docs.npmjs.com/requiring-2fa-for-package-publishing-and-settings-modification).
> 2. [Granular tokens](https://docs.npmjs.com/about-access-tokens#about-granular-access-tokens) which will have a limited lifetime of seven days.
> 3. [Trusted publishing](https://repos.openssf.org/trusted-publishers-for-all-package-repositories).

In addition to these changes, GitHub provides a list of actions npm maintainers can take today to strengthen their package security.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Changelog News Classifieds](https://forms.gle/yCJirHRCWkdbG5qK6)

We're playing with the idea of adding a Classifieds section to Changelog News. It would have a maximum of five listings per issue that appear both in the newsletter and in the audio. They'd be super brief (headlines only) and link to a URL of your choice.

If you'd like to put your startup, passion project, big idea, event, whatever in front of Changelog's classy, tasteful audience of hackers... Fill out [this form](https://forms.gle/yCJirHRCWkdbG5qK6)!

**Break:**

**Jerod Santo:**

[Generate a timeline of your day, automatically](https://github.com/JerryZLiu/Dayflow)

> Dayflow is a native macOS app (SwiftUI) that records your screen at 1 FPS, analyzes it every 15 minutes with AI, and generates a timeline of your activities with summaries.

Dayflow's creator, Jerry Liu, built it because he realized that his calendar isn't the source of truth of how he actually spends his time. His screen is. 

> I wanted a calm, trustworthy timeline that let me see my workday without turning into yet another dashboard I had to maintain.

Thankfully, Jerry had privacy and data ownership in mind from the very start, so it gives you total control.

> It's MIT licensed and fully open source because anything that watches your screen all day should be completely transparent about what it does with that information. The app should feel like a quiet assistant: respectful of your attention, honest about what it captures, and easy to shut off.

All that said, I'm kind of afraid to run this app. Not because of the data concerns, but because of what it might reveal about myself of which I'm now blissfully unaware!

**Break:**

**Jerod Santo:**

[What is "good taste" in software engineering?](https://www.seangoedecke.com/taste/)

I've written often about *taste* as a large differentiator between man and machine, but, because of its subjective nature, taste isn't the easiest thing to nail down. That is especially true in the context of software engineering. Sean Goedecke gives it a try:

> Here are some indicators of software taste:
>
> - What kind of code “looks good” to you? What kind of code “looks ugly”?
> - Which design decisions you feel really good about, and which ones are just fine?
> - Which software problems really bother you, to the point where you’re worrying about them outside of work? Which problems can you just brush off?
> 
> I think taste is the ability to adopt the set of engineering values that fit your current project.

Sean goes on to explain why taste is different from skill, what engineering taste actually is, and why it's too easy (especially for immature engineers) to know what you like, but to mistake that for a principled engineering position.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [How Ruby went off the rails](https://www.404media.co/how-ruby-went-off-the-rails/)
- [Super Mario Bros Remastered](https://github.com/JHDev2006/Super-Mario-Bros.-Remastered-Public)
- [Hyperrealist datacenters and Potemkin McRibs](https://exple.tive.org/blarg/2025/09/25/hyperrealist-datacenters-and-potemkin-mcribs/)

Get in on the newsletter at changelog.news

We have some awesome episodes coming up this week. Charlie Marsh from Astral talking uv and ruff on Wednesday, and Feross from Socket on the npm attacks on Friday.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
