**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 29th, 2024.

After a tornado on Friday afternoon knocked out the power to my home office for 50+ hours, I planned to record this episode from my parents' basement (like the nerd that I am) but...

Thankfully, the lights flipped on last night ~8pm and the _Series of Tubes_ pushed that sweet, sweet internet back into our lives.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Good ideas in Computer Science](https://danielchasehooper.com/posts/good-ideas-in-cs/)

Daniel Hooper:

> Programmers love arguing for their favorite technologies. C++ vs Rust. Mac vs PC. These arguments overshadow the victories of Computer Science — the ideas that we all agree on. To unearth these ideas, I recently asked a simple question on Twitter/X:
>
> > What ideas in computer science are universally considered good?

The resulting list includes 17 ideas (not implementations) that are “universally considered good”, which means _not debated_. What's interesting (in addition to the ideas themselves) is that they were all thought of/discovered **prior to 1974**. Where are all the _new_ good ideas in Computer Science?! Perhaps we're still *debating* them...

> By 1974, 50 years ago, we had most of what we call modern computing. Today’s fundamentals are the same — a C programmer from 1974 would feel at home on a modern computer except for the alien-like speed. I hope we have new ideas that in 50 years will be universally considered good.

**Break:**

**Jerod Santo:**

[Corporate Open Source is Dead](https://www.jeffgeerling.com/blog/2024/corporate-open-source-dead)

Instead of linking to and IBM press release announcing their purchase of HashiCorp for $6.4 billion, let's enjoy our friend Jeff Geerling's analysis!

> As free money dries up and profits slow, companies slash headcount almost as fast as community trust.

Can you smell what Jeff is cookin'?

> Open source culture relies on trust. Trust that companies you and I helped build (even without being on the payroll) wouldn't rugpull.
>
> But time and time again, that trust is shattered.

He goes on to declare 2024 as the year that 'corporate open source' dies. But it ain't all bad, not in Jeff's eyes:

> In fact, this could be a huge opportunity; what happened to the spunky startups like Ansible, HashiCorp, Elasticsearch, or Redis? They were lighting their industries on fire with great new software.
>
> What happened to building up communities of developers, crossing cultural and economic barriers to make software that changed the world?
>
> There are still projects doing that, but so many succumb to enterprise money, where eye-watering amounts of revenue puts profit over philosophy...
>
> Maybe it's time for a new open source rebellion. Maybe this time, money won't change company culture as new projects arise from the ash heap. Maybe not, but at least we can try.

**Break:**

**Jerod Santo:**

[WIP is waste](https://thoughtbot.com/blog/wip-is-waste)

Jared Turner writes on [thoughtbot's](https://thoughtbot.com) blog (which I've linked to seldomly in recent years, but I'm tickled at the opportunity. They did a _lot_ of good for me in my early consulting career):

> Work in progress has zero value. Ship!
>
> - Before a task is shipped it provides **zero value**.
> - Any work in progress is **pure cost**.
> - Two tasks in progress **adds cost, for no value**.
> - Only after shipping do you create value. **Always ship**.
> - One task shipped is infinitely better than 4 tasks “almost done”.
> - Ship something of value first. **Then begin something new**.

This is a good reminder for me that our (super cool) "custom feeds" feature that currently only I am using provides **zero value** to the people I'm building it for until I actually **ship** the sucker...

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Join Tauri's "DevTools Premium" waitlist](https://crabnebula.dev/devtools/)

If you're building with [Tauri](https://tauri.app), this might be the best news you hear all week! [DevTools Premium](https://crabnebula.dev/devtools/) is right around the corner. Here's what you can expect:

- A native desktop app built with Tauri
- First-class support for Tauri 2.0
- Powerful collaboration features
- Usable as an embedded drawer in a Tauri app
- Or popped out for a bigger view just like Chrome DevTools

The CrabNebula team is even experimenting with more advanced features like record/replay of debugging sessions. It's not just about finding and fixing issues; it's about understanding, optimizing, and perfecting the application development process.

[Join the waitlist](https://crabnebula.dev/devtools/) today by following the link in the newsletter and chapter data and thank you to Daniel and our friends at CrabNebula for sponsoring this week's Changelog News.

**Break:**

**Jerod Santo:**

[A leadership crisis in the Nix community](https://lwn.net/SubscriberLink/970824/0d89c6d83efad1e0/)

Daroc Alden, writing for LWN:

> On April 21, a group of anonymous authors and non-anonymous signatories published [a lengthy open letter](https://save-nix-together.org/) to the [Nix](https://nixos.org/) community and Nix founder Eelco Dolstra calling for his resignation from the project. They claimed ongoing problems with the project's leadership, primarily focusing on the way his actions have allegedly undermined people nominally empowered to perform various moderation and governance tasks. Since its release, the letter has gained more than 100 signatures.

That open letter isn't merely *lengthy*, I'd call it meandering and difficult to follow. Thankfully, the good communicators at LWN grokked it so we don't have to:

> The open letter has several related complaints, but the most central one is that they allege Dolstra has repeatedly strong-armed the board and members of other community teams to overrule their decisions.

The crux of the matter seems to be that Nix is governed by the [NixOS Foundation](https://github.com/NixOS/foundation), but Dolstra is acting like a [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life). The authors (and signatories) of the letter are calling for Dolstra's resignation from the board. If he doesn't, a fork is likely.

**Break:**

**Jerod Santo:**

[Ruby might be faster than you think](https://www.johnhawthorn.com/2024/ruby-might-be-faster-than-you-think/)

**Break:**

**Jerod Santo:**

After running a "[crystalized](https://github.com/wouterken/crystalruby)" version of Fibonacci (which embeds Crystal code directly in Ruby) to confirm it executed 4x faster than a pure Ruby version, John Hawthorn noticed something...

> But something is a bit off here. The Ruby implementation has a subtle mistake which causes signficantly more work than it needs to.

Turns out by tweaking the Ruby implementation and enabling the built-in JIT compiler, he flipped the benchmark on its head:

> Now it’s Ruby that’s 5 times faster than Crystal!!! And 20x faster than our original version...
>
> I thought it was notable that by making some minor tweaks to Ruby code it can now outperform a precompiled statically typed language in a purpose-built example of when it is slow. I’m hopeful that someday with future advancements in the Ruby JIT even the small tweaks might not be necessary.

My takeaway from this post isn't that Ruby is finally Web Scale™️ now, it's that we do well to _know our tools_ deeply, whichever tools we decide to use.

**Break:**

**Jerod Santo:**

That's the news for now, but be sure to scan the companion Changelog Newsletter for more stories, including MS-DOS 4.0 going open source, the end of the free tier, Google laying off its Python team, and a sweet list of new tools for the ol' toolbox.

If you are audio-only, pop your email address in at changelog.com/news or use a service like Feedbin or kill-the-newsletter to pipe it into your RSS reader.

We have some great episodes coming up: Dustin Bluck (the new owner of [Castro](https://castro.fm)) on Wednesday & [Ron Evans](@deadprogram@social.tinygo.org) (from TinyGo) on Friday.

Have a great week, **email me your 5-star review if you want free stickers** & I'll talk to you again real soon. 💚
