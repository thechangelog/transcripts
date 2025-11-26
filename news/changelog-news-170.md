**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 17th, 2025.

As a long-time fan of all things *Legend of Zelda*, I am both excited and terrified of the upcoming live-action movie. Today, Nintendo [released](https://www.vooks.net/first-photos-of-link-and-zelda-in-the-legend-of-zelda-live-action-movie-released/) the first official pictures of Link and Zelda. My first impression: not bad!

Is that Hyrule or Middle-earth? Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Why is Zig so cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)

Nilo Stolte begins this article all about Zig's cool parts with some seriously high praise:

> I can’t think of any other language in my 45 years long career that surprised more than Zig. I can easily say that Zig is not only a new programming language, but it’s a totally new way to write programs, in my opinion. To say it’s merely a language to replace C or C++, it’s a huge understatement.

Nilo enumerates the features the he found most alluring in the language, but he sticks to the simplest ones to keep the article approachable. For him, it all starts with the compiler:

> Probably the most incredible virtue of Zig compiler is its ability to compile C code. This associated with the ability to cross-compile code to be run in another architecture, different than the machine where it is was originally compiled, is already something quite different and unique.

He goes on to give a bird's eye view of the Zig language, shows how to build programs and test modules, then provides a deeper view on how low level programming can be done. A must-read for the Zig curious!

**Break:**

**Jerod Santo:**

[How to be creative (without taking drugs)](https://essays.highagency.com/p/how-to-be-creative-without-taking)

George Mack, who has done a lot to reify my thoughts around agency, takes on creativity in his classically distilled form:

> The mistake people make is treating creativity like productivity. They try to work harder and expect creativity to appear. Instead, sprinkle in new inputs and watch new outputs appear.

What follows are twelve *easily acted upon* inputs to help increase your creativity. I'll share just one with you, to whet your creative appetite:

> 5. **Increase time in the bathroom** - Aaron Sorkin, the writer behind A Few Good Men and The West Wing, takes 6-8 hot showers per day when he’s writing. Another hack is to be slightly overly hydrated. You may only have shower thoughts once per day, but you can increase your bathroom thoughts by drinking more water.

**Break:**

**Jerod Santo:**

[What if you don't need MCP at all?](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/)

Devs have been experimenting with MCP servers long enough now to start forming opinion/conclusions about them. Mario Zechner shares his findings:

> After months of agentic coding frenzy, Twitter is still ablaze with discussions about MCP servers. I previously did some very light benchmarking to see if Bash tools or MCP servers are better suited for a specific task. The TL;DR: both can be efficient if you take care.

Mario lists a few of the MCP downsides: they're often inefficient for a specific task, they're hard to extend, and they aren't composable.

> I'm a simple boy, so I like simple things. Agents can run Bash and write code well. Bash and code are composable. So what's simpler than having your agent just invoke CLI tools and write code? This is nothing new. We've all been doing this since the beginning. I'd just like to convince you that in many situations, you don't need or even want an MCP server.

Click through if you're ready/willing/able to be convinced.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[BuildKit makes Docker builds faster. But how?](https://depot.dev/blog/buildkit-in-depth)

Depot just published a comprehensive teardown of BuildKit, the engine that powers every `docker build` you run. Despite millions of developers relying on it daily, BuildKit has remained surprisingly undocumented. Depot's team spent years reverse engineering it, and now they're sharing what they learned.

The key insight? BuildKit is essentially a compiler for containers. It converts your Dockerfile into an intermediate representation called LLB (low-level build)—a directed acyclic graph that models dependencies between build steps. This enables parallel execution of independent stages and smarter layer caching that doesn't invalidate your entire build when one thing changes.

This post from Kyle covers frontends, backends, and every LLB operation type. They even built a free Dockerfile Explorer that visualizes your Dockerfile as LLB operations in real-time. This is useful for understanding exactly what your build is doing under the hood.

Read the full breakdown at depot.dev, or follow the direct link in the newsletter.

**Break:**

**Jerod Santo:**

[On alchemy and AI art](https://joshcollinsworth.com/blog/alchemy)

Josh Collinsworth compares creating AI art to medieval alchemists' attempt to transmute lead into gold:

> The materials are different, but the idea is the same: if the owners of AI can bypass the intensive process of procuring art, or music, or video, or any other sort of creative content, then they can, in a way, create their own gold.
> 
> Except: it won’t work that way.

So far, this is correct. He goes on:

> The public reaction to AI-generated art, of every kind, might have been awe or joy at first. But the longer time goes on, and the more of this newly cheap material floods the figurative market, the more the reaction becomes decidedly negative.
>
> The output of generative AI is novel, to be sure, and it can even be enjoyable at times. But what it isn’t any longer is: *valuable*.

Josh concludes that Generative AI is incapable of creating figurative gold because "gold is rare and difficult to come by" and most of its value is due to that rarity. I agree with his premise, but Josh also says:

> An ever-growing segment of the population can now sniff out AI art. It’s obvious, when you know what to look for. It sticks out. It’s glaring. It’s immediately off-putting. People actively avoid it when they can, and instantly de-value everything associated with it.

He's right as long as (and *only* as long as) we humans can easily "sniff out" AI art. That's true today, but I fear it's a truth that teeters on a spinning plate atop a long stick balanced on a clown's finger.

**Break:**

**Jerod Santo:**

[AirPods liberated from Apple’s ecosystem](https://github.com/kavishdevar/librepods)

LibrePods is a program that unlocks Apple's exclusive AirPods features for Android and Linux systems.

> Get access to noise control modes, adaptive transparency, ear detection, hearing aid, customized transparency mode, battery status, and more - all the premium features you paid for but Apple locked to their ecosystem.

Pretty cool stuff, but downloader beware: as of now, there's a bug in Android's Bluetooth stack that requires you to have rooted the device to get it all working. I'm sure you can manage that, but I'm not sure if you want the hassle. If/when Google fixes the bug (which you can +1 [here](https://issuetracker.google.com/issues/371713238)), LibrePods will be much more approachable to your average Android user.

## 📰 The Classifieds

✨ This is a new (and experimental) segment creating opportunity to share your startup, passion project, opinion, big idea, upcoming event, etc. with your fellow ~25k readers and ~30k listeners. Feedback welcome! ✨

[Web Tools Weekly - A newsletter for web developers](https://webtoolsweekly.com/?utm_source=newsletter&utm_medium=email&utm_campaign=changelog)

[Media Masher: open source, browser based video editor](https://masher.media)

👉 [Book a classified ad for $50](https://forms.gle/yCJirHRCWkdbG5qK6) 👈

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [The fate of “small” open source](https://nolanlawson.com/2025/11/16/the-fate-of-small-open-source/)
- [Fully automatic censorship removal for language models](https://github.com/p-e-w/heretic)
- [I think nobody wants AI in Firefox, Mozilla](https://manualdousuario.net/en/mozilla-firefox-window-ai/)

Get in on the newsletter at changelog.news

Last week on the pod: prolific software blogger, Sean Goedecke, on an episode called do repeat yourself and a Changelog News director's commentary with Adam and myself, titled retreat to attack. Find those in your feed and stay tuned for what's coming up this week: On **Wednesday**, I'm joined by [Spencer Chang](https://spencer.place), creator of the alive internet theory, and on **Friday**, Chris Benson from Practical AI stops by to tell us about his work orchestrating fleets of autonomous drones.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
