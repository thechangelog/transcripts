**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 21st, 2024.

Forever ago, Devon Zuegel came on the show and told us about [the making of GitHub Sponsors](https://changelog.fm/370). In that conversation, we learned of her fascination with city planning/building & even encouraged her to start a podcast about it ([she did btw](https://devonzuegel.com/tag/order-without-design))

Turns out, Devon's been doing far more than just studying & talking about city building. She [announced](https://x.com/devonzuegel/status/1847025286061162540) late last week that her and some friends are creating a new town in California wine county, called Esmeralda! How cool is that?!

Kinda makes you want to throw that CRUD app out the window and think bigger, huh...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Naming conventions that need to die](https://willcrichton.net/notes/naming-conventions-that-need-to-die/)

Here's Will Crichton, writing in November of 2018:

> Names are an important tool of thought. They provide a loose, lightweight way to manage and structure knowledge. However, bad names inhibit learning and impede progress. We should root out and destroy the processes that lead to bad names.

Will takes umbrage with names pointing back to their inventor/discoverer (Planck constant, Bernoulli distribution, etc.), using numbers as names (Type 1 error, Type 2 error, etc.), lazily choosing a random word (Pig, Flink, Spark, Hive, Arrow, Kafka, etc.) & historical accidents (master/slave, `car` vs `cdr`, etc.)

I'll add another: stop using names that are already overloaded! For instance, if the name you like has [a lengthy disambiguation page](https://en.wikipedia.org/wiki/Go) on Wikipedia, maybe pick something fresh? Or I guess you could sometimes throw "lang" in there at the end...

**Break:**

**Jerod Santo:**

[Bitwarden: no longer free software?](https://github.com/bitwarden/clients/issues/11611)

GitHub user [brjsp](https://github.com/brjsp) noticed that the Bitwarden team recently [introduced](https://github.com/bitwarden/clients/pull/10974) a dependency in their clients that contains a proprietary statement in its license:

> You may not use this SDK to develop applications for use with software other than Bitwarden (including non-compatible implementations of Bitwarden) or to develop another SDK.

Since it is not possible to build Bitwarden clients without this dependency, it appears that this has leavened the whole lump of software. GitHub user [xndc](https://github.com/xndc) followed up with:

> Also see [bitwarden/sdk#898](https://github.com/bitwarden/sdk/issues/898). It looks like this is part of a deliberate campaign by Bitwarden, Inc. to fully transition Bitwarden to proprietary software, despite consistently advertising it as open source, without informing customers about this change.
>
> For whatever the opinion of one user is worth, I've switched away from Bitwarden due to this.

Later on in the thread, Bitwarden founder/CTO (Kyle Spearrin) posted this reply:

> Thanks for sharing your concerns here. We have been progressing use of our SDK in more use cases for our clients. However, our goal is to make sure that the SDK is used in a way that maintains GPL compatibility.
 >
> 1. the SDK and the client are two separate programs
> 2. code for each program is in separate repositories
> 3. the fact that the two programs communicate using standard protocols does not mean they are one program for purposes of GPLv3
>
> Being able to build the app as you are trying to do here is an issue we plan to resolve and is merely a bug.

Kyle's statement was [analyzed & addressed by gasche](https://lobste.rs/s/31eacf/bitwarden_version_2024_10_0_is_no_longer#c_bmbed6) on Lobsters. How far down the rabbit hole will this go?

**Break:**

**Jerod Santo:**

[Forking best practices](https://joaquimrocha.com/2024/09/22/how-to-fork/)

Joaquim Rocha:

> Fork maintenance — keeping your changes in sync with the latest updates from the original project — can quickly become a mess. Trust me. Over the years, my work did sometimes involve maintaining forks of various open source projects. That’s not the case with my job now, but when a colleague reached out for help with a fork that hadn’t been rebased in ages, it got me thinking that the steps I follow might be useful for other developers too. Hence this article.

This is an excellent guide for what can be a tricky (a.k.a. frustrating) task. Before Joaquim gets into the rebasing/merging section, he kicks off with some great day-to-day development tips, such as:

1. Use atomic commits
2. Identify your fixes and non-fixes
3. No evil merges
4. Rebase early, rebase often
5. Contribute changes back
6. Keep a good relationship with upstream

Side note: we shouldn't need all these guides! There's a lot of value (a.k.a. money) to be made by anyone who makes the entire code collaboration process an order of magnitude easier...

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Socket adds support for Java, Ruby & Socket Optimize](http://socket.dev/blog)

You know we're fans of Socket and we're even bigger fans of secure open source dependencies. Socket recently announced three major wins taking us another huge step in this direction.

1. **Java Support**. With this release, Java teams can now leverage Socket’s comprehensive security tools to protect their software supply chain from the rising threat of attacks. Whether you’re building large-scale Java enterprise applications, maintaining a legacy Java monolith, or shipping an Android app, Socket has your back.
2. **Ruby support** (now in Beta) is ready to try for all users enabling security scanning and zero-day supply chain attack prevention to your Rails projects in just two clicks via the free Socket for GitHub app.
3. **Socket Optimize** is a new powerful CLI command you can use for proactive dependency hygiene. It's designed to make it easy for developers to reduce dependencies, leverage new platform features, improve performance, and address security issues - all with one simple CLI command.

Learn more about these announcements and more at Socket's *awesome* blog: [socket.dev/blog](https://socket.dev/blog)

**Break:**

**Jerod Santo:**

[You should go to conferences](https://localghost.dev/blog/you-should-go-to-conferences/)

Sophie Koonin (whose website is *too cool*, btw) makes her case for you spending time/money on attending conferences. I agree with all of her major points, but especially:

> The talks are obviously very important, but one of the best things about conferences is the "hallway track" – that is, meeting and chatting to like-minded folks. Organisers will often encourage the "Pac-Man rule" - standing in a circle with a gap to always allow new people to join in.

We love the hallway track so much (coming soon to [Raleigh](https://2024.allthingsopen.org), fyi) that we created an [entire flavor](https://changelog.com/friends) of The Changelog in its image! Sophie also gives some conference-attending advice & shares some of her favorite smaller web conferences in the UK, Europe & the rest of the world.

**Break:**

**Jerod Santo:**

[Press Onward (putting WP on SQLite)](https://exple.tive.org/blarg/2024/10/18/press-onward/)

mhoye:

> Mullenweg’s been melting down for most of a year at this point, and there’s no end in sight. My heart goes out to the people who work there – kids, when somebody offers you money to quit you take that money and run, every time – but ultimately his tantrum doesn’t matter. It’s all free software; people might depend on the code, but nobody depends on the companies. That’s sort of the point.

To make life easier on those of us caught up in the crossfire, he created [a repo](https://github.com/mhoye/pressonward) that takes the WordPress tarball and modifies it to run on SQLite.

> But it’s nice; you can have WordPress without needing babysit MySQL, run a big machine or really much of anything. Installation is a breeze, and if you turn off comments and put WP-Supercache in front of it, it’ll be perfectly happy humming along day to day on the tiniest VM you can find.

**Break:**

**Jerod Santo:**

That's the news for now, but do scan the companion newsletter for even more stories worth your attention, like: why Ben Werdmuller is still excited about the web, a new NodeJS MVC web app framework, and everyone's favorite pyramid scheme of awesome links. If you don't get the newsletter, fix that bug at changelog.com/news

we have some sweet episodes coming up this week:

- On Wednesday: Elastic CTO Shay Banon on Elasticsearch's return to open source
- On Friday: freeCodeCamp founder Quincy Larson celebrates 10 years

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
