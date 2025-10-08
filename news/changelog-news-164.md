**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 6th, 2025.

Did you hear [what happened](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936) to South Korea's government recently? A fire broke out at their National Information Resources Service (NIRS) headquarters, erasing work files saved by ~750,000 civil servants over the past seven (!) years. The worst part: no backups! 😱

Well, that's not technically correct. They *did* have backups, but the backups were also destroyed in the same fire. This is why the [3-2-1 rule](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf) exists: your backup strategy should have **3 copies, 2 different media types, 1 offsite**.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The best coders should exit the feed](https://abner.page/post/exit-the-feed/)

Abner Coimbre makes a compelling case why our biggest technical talent should abandon for-profit social platforms, e.g. X, Instagram, and Reddit.

> Not as a moral crusade, but because the platforms are crumbling under heavy regulation and cultural backlash. If you’re investing your peak years shaping public narratives there, you risk reputation and creativity...

Abner has noticed four big forces pushing the shift away:

1. [The Anxious Generation](https://www.amazon.com/Anxious-Generation-Rewiring-Childhood-Epidemic/dp/B0C9N2L56X) convincing parents to restrict phones
2. Bi-partisan school smartphone bans
3. Growing evidence and visibility of bot farms
4. A cultural link between “being terminally online” and political violence

My own social network (family, friends, church) and personal sentiment toward tech affirm what Abner is saying. "Phone fasts" and a "return to analog" are common discussions I'm having with people. Abner says:

> Because of everything I’ve already outlined, this way of life is barreling towards collapse. You can also find smaller signs (like the surge in dumbphone sales) that mainstream outlets are finally noticing. Everywhere around us society is wondering “Why do we keep a bottomless barrel of sugar in our pockets?”

His call is for anyone in tech helping build these platforms is to stop that and start building *technology for touching grass*... and he says the movement has already begun.

**Break:**

**Jerod Santo:**

[A Claude Code + Obsidian starter kit](https://github.com/heyitsnoah/claudesidian)

Claude Code and Obisidian?! Cue [Julie Andrews](https://www.youtube.com/watch?v=0IagRZBvLtw), because these are definitely two of my favorite things right now. The linked repo is a pre-configured Obsidian vault structure that's designed to work seamlessly with Claude Code as an "AI-powered second brain." This lets you:

1. Use AI as a thinking partner, not just a writing assistant
2. Organize knowledge using the [PARA](https://github.com/heyitsnoah/claudesidian?tab=readme-ov-file#the-para-method) method
3. Maintain version control with Git
4. Access your vault from anywhere (including mobile)

Its creator, Noah Brier, wrote all about why he loves this setup in: [The Magic of Claude Code](https://www.alephic.com/writing/the-magic-of-claude-code)

**Break:**

**Jerod Santo:**

[Vercel vs Cloudflare](https://www.bharath.sh/writing/vercel-vs-cloudflare)

Vercel and Cloudflare are seriously duking it out for developer mindshare these days, and their founders aren't pulling any punches. In the linked post, Bharath Natarajan documents the fight:

> Cloudflare’s camp frames Vercel as a frontend illusionist- beautiful defaults masking AWS egress bills. They point to screenshots of cost breakdowns, claiming that what looks “free” quickly becomes expensive once your app scales. Cloudflare’s arguments against Vercel can be distilled into one line: the people designing your abstractions don’t understand the systems they’re built on.

> Vercel’s camp fires back with equal conviction. Guillermo accuses Cloudflare of security theater- centralizing the web under the guise of protection, hiding pricing under tooltips, selling bandwidth under new names. His tone is defensive but principled: Vercel’s abstraction isn’t ignorance; it’s empathy. The idea is that the best infrastructure is invisible, and the worst infrastructure is the one you have to keep configuring.

Click through for many embedded tweets, a summary of the recurring themes, and Bharath's personal take on who will in.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Augment's Indie plan is here](https://www.augmentcode.com/blog/augment-is-now-more-affordable-introducing-our-usd20-per-month-indie-plan)

Augment just got a lot friendlier for indie devs. Until now, their pricing was geared toward teams. But with the new Indie Plan, you can get Augment's full AI coding superpowers for just 20 bucks a month.

Why is this a big deal? Because indie hackers, solo founders, and side-project dreamers don't always have an enterprise budget for AI tools — but they do need the same leverage. The Indie plan brings Augment's repo-aware refactors, context-rich reviews, and agent features into reach for everyone.

Now you can go from "idea" to "shipped" for $20 a month.

Check it out and get started with Augment at [augmentcode.com](https://www.augmentcode.com/blog/augment-is-now-more-affordable-introducing-our-usd20-per-month-indie-plan).

**Break:**

**Jerod Santo:**

[Free little tools without signups or ads](https://toolbrew.co)

Toolbrew is a well-designed website brimming with common utilities. If you ever need a quick case converter, word counter, URL encoder, video downloader, check splitter, PDF converter... check it out!

There's no need to sign up, there's no ads, and you can suggest new tools to be added to the site. Many of the top requests are "In Progress."

**Break:**

**Jerod Santo:**

[Why over-engineering happens](https://yusufaytas.com/why-over-engineering-happens/)

In this article, Yusuf Aytas does an excellent job defining over-engineering, explaining why it happens, how much it costs, and what we can do to avoid it. The setup:

> If you’ve worked in software long enough, you’ve probably seen it: a CRUD app serving a handful of users, deployed on a Kubernetes cluster with half the CNCF landscape stitched together for good measure. On paper it looks impressive. In reality, it’s a Rube Goldberg machine solving problems the team doesn’t actually have.

When it comes to the why, Yusuf blames good intentions gone sideways, misaligned incentives, or "plain old human nature." The biggest drivers:

1. Premature optimization
2. Resume-driven development
3. Management incentives
4. FOMO and trend-chasing
5. Misaligned priorities

These forces are troublesome alone, but when combined they can add up to some seriously over-engineered, seriously expensive systems.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Users only care about 20% of your app](https://idiallo.com/blog/users-only-care-about-20-percent)
- [Examples are the best documentation](https://rakhim.exotext.com/examples-are-the-best-documentation)
- [Write the damn code](https://antonz.org/write-code/)

Get in on the newsletter at changelog.news

Last week on the pod we hosted Charlie Marsh from Astral talking high-performance Phython tooling and Feross Aboukaedijeh diving into the recent barrage of npm hacks and what we can do about it. Find those in your feed. Coming up this week we have Vue and Vite creator, Evan You, on Wednesday, and Elixir's own Jose Valim on friday.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
