**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 15th, 2024.

Struggling to ship? Want to hear about others struggling more? I got you!

Kien, a video game for the *Game Boy Advance* that started development in 2002, has finally been released. After 22 years it holds the record as "the longest development journey in history."

The [Duke Nukem Forever](https://en.wikipedia.org/wiki/Duke_Nukem_Forever#Engine_changes_and_delays) devs can finally sleep at night 🫠

Ok, let's get into the news.

**Break:**

[The six dumbest ideas in computer security](https://www.ranum.com/security/computer_security/editorials/dumb)

Can it still count as News if it was written in 2005?! Let's check the conclusion and see if it's still relevant:

> Computer security is a field that has fallen far too deeply in love with the whizzbang-of-the-week and has forsaken common sense. Your job, as a security practitioner, is to question - if not outright challenge - the conventional wisdom and the status quo. After all, if the conventional wisdom was working, the rate of systems being compromised would be going **down**, wouldn't it?

Well I think we have our answer... here's the list (with brief explainers):

1. Default Permit (ask for forgiveness)
2. Enumerating Badness (listing known bads)
3. Penetrate and Patch (new code to fix old holes)
4. Hacking is Cool (penetration testing)
5. Educating Users (a fool's errand)
6. Action is Better Than Inaction (end up doing dumb things)

Click through for full explainers & a couple predictions that have aged like milk. This one is my favorite:

> My prediction is that the "Hacking is Cool" dumb idea will be a dead idea in the next 10 years. I'd like to fantasize that it will be replaced with its opposite idea, "Good Engineering is Cool" but so far there is no sign that's likely to happen.

**Break:**

**Jerod Santo:**

[Story points are pointless, measure queues](https://www.brightball.com/articles/story-points-are-pointless-measure-queues)

I knew I was going to like this piece by Barry Jones before I even clicked the link. Setting my confirmation bias aside for a moment, here's the hook:

> Their creator has disavowed them. People cannot agree on what a story point even represents. The measure is different for every team that uses it. They sow confusion, create conflict, unreliable timelines, are easily gamed, demotivate and degrade the performance of your team.
>
> For everyone involved, this is a waste of time. Let's deep dive into why Story Points are so broken and how to avoid dealing with them ever again.

This is a detailed piece with a lot of strong arguments against story points, but it doesn't stop there. Barry also makes the argument for measuring queues instead.

> Measured Queues address short term and long term estimation issues, handle scope changes naturally and provide a much more valuable exercise to larger teams while removing uncertainty from the team's initial plans...
>
> Measured Queues also provide a leading indicator of problems 20 times faster than Velocity or Cycle Time related metrics.

If this sounds at all familiar to you, it might be echoes of [our conversation with Lucas F. Costa](https://changelog.fm/507) that touched on much of the same. That's worth a (re)listen if this topic interests you.

**Break:**

**Jerod Santo:**

[A powerful HTTP client that lives in your terminal](https://github.com/darrenburns/posting)

> *Posting* is an HTTP client, not unlike Postman and Insomnia. As a TUI application, it can be used over SSH and enables efficient keyboard-centric workflows. Your requests are stored locally in simple YAML files, meaning they're easy to read and version control.

Looks excellent! Built with [Textual](https://github.com/textualize/textual), which means you can install it with `pipx`

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Instant branching for Postgres](https://neon.tech/branching)

We create branches in our code all the time, but what if we could branch our database just as easily? Thanks to Neon, that's actually a thing!

Branch your data with a single click or API call & their copy-on-write technique makes it happen instantaneously and cost-effectively. This is great for dev, but also for easily rolling out preview environments with up-to-date copies of your production data.

Don't take my word for it, try branching in your project [by following the link in your chapter data and the newsletter](https://neon.tech/branching).

**Break:**

**Jerod Santo:**

[es-toolkit is a major upgrade to lodash](https://github.com/toss/es-toolkit)

> es-toolkit is a state-of-the-art, high-performance JavaScript utility library with a small bundle size and strong type annotations.

Thanks to built-in tree shaking support, es-toolkit [bundles down 97% further](https://es-toolkit.slash.page/bundle-size.html) than lodash. It also has built-in TypeScript support (if you're in to that), boasts 100% test coverage & achieves [2-3x better performance](https://es-toolkit.slash.page/performance.html) in modern JS environments.

This looks like a no-brainer swap out if you're still using [Lodash](https://lodash.com) (or, God forbid, [Underscore](https://underscorejs.org)) for your utility function
needs.

**Break:**

**Jerod Santo:**

[Going fast slowly](https://varnish-cache.org/docs/trunk/phk/thatslow.html)

Varnish ceator Poul-Henning Kamp (_phk_) reflects on ten years of working on the HTTP cache and the accumulated 150K lines of code in the repository.

> Varnish has been in existence for 10 years, so that’s 15K lines per year.
>
> 200 workdays a year makes that 75 lines a day.
>
> 7.5 hours of work per day gives 10 lines per hour.
>
> Even though I have written the vast majority of the source code, Varnish is far from a one-person project.
>
> I have no way to estimate the average number of full time persons over the last ten years, so lets pick the worst case and say that only two persons were full time.
>
> It follows that there is no way average output of those two persons exceeded 5 lines per hour, measured over the ten year history of the project.
>
> Does that number seem low or high to you?

It surprised me at first, but I knew very little about the project (and nothing of its makers) prior to this post. Then I read this:

> I was 40 years old when I started Varnish and I had 22 years of professional experience, a lot of them staring at, and often fixing/improving/refactoring, other peoples source code.

Surprise deleted. Poul gets it. I've been saying this since 2010 (!): [if you want to move faster, you have to slow down.](https://changelog.com/posts/slow-down-to-go-faster).

**Break:**

**Jerod Santo:**


That's the news for now, but... I leave you with a quote from Antoine de Saint-Exupéry, which phk quoted in his Varnish post:

> "Perfection is attained, not when there is nothing more to add, but when there is nothing more to remove."

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
