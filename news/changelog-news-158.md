**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, August 25th, 2025.

Did you [hear](https://www.teslarati.com/elon-musk-targets-bill-gates-microsoft-new-ai-venture-macrohard/) that Elon Musk is *taking aim* at Microsoft with a new "purely AI software company"? It's called "Macrohard" and its OS is called "Doors". Seriously. But was it it, exactly? Musk says:

> We are creating a multi-agent AI software company at xAI where Grok spawns hundreds of specialized coding and image/video generation/understanding agents all working together and then emulates humans interacting with the software in virtual machines until the result is excellent.

As a lover of good software, I hate everything about this. But as a lover of good names, "Macrohard Doors" is amazing.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Omarchy 2.0: The best Linux setup ever?](https://github.com/basecamp/omarchy)

DHH calls [Omarchy](https://omarchy.org) "his latest love letter to Linux." Up until today, it was a script that turned a fresh Arch installation "into a fully-configured, beautiful, and modern web development system based on Hyprland." Now it's a lot more than that.

[Version 2.0](https://github.com/basecamp/omarchy/releases/tag/v2.0.0) just dropped, adding an ISO installer, a package repository, a snapshotting setup for easy rollbacks, a minimal [Starship](https://starship.rs/) prompt, Chrome theme matching, and a bunch more. This version features over 30 new contributors and a lot of love being poured into the project. 

David sure knows how to inspire and enable people to get involved and contribute to his software ideas. This begs the question: Could Omarchy become to DHH what Git has been to Linus?

**Break:**

**Jerod Santo:**

[Managing developer's block](https://underlap.org/developers-block/)

> Writer’s block is the paralysis induced by a blank page, but software developers experience a similar block and it can even get worse over time. Sometimes a good analogy is that your wheels are spinning and you need to gain traction.

In this post, Glyn Normington explores different kinds of developer's block, what causes them, and how to get unblocked. You probably already know what causes your developer block, so I'll just highlight his unblock methods for you here:

1. Take time with learning
2. Realize when you're tired
3. Work incrementally
4. Write a prototype
5. Start with draft documentation
6. Avoid premature optimization
7. Release early, release often
8. Choose which yaks to shave

Glyn explains each of these, so click through if you want 'em unpacked.

**Break:**

**Jerod Santo:**

[AI tooling must be disclosed for contributions](https://github.com/ghostty-org/ghostty/pull/8289)

Mitchell Hashimoto makes a rule for Ghostty that I expect will be copy/pasted all around the open source maintainer community. Here it is:

> If you are using **any kind of AI assistance** to contribute to Ghostty, it must be disclosed in the pull request.

And here's why he thinks this common courtesy is necessary at our current stage of AI:

> In a perfect world, AI assistance would produce equal or higher quality work than any human. That isn't the world we live in today, and in many cases it's generating slop. I say this despite being a fan of and using them successfully myself (with heavy supervision)! I think the major issue is **inexperienced human drivers of AI** that aren't able to **adequately review their generated code**. As a result, they're pull requesting code that I'm sure they would be ashamed of if they knew how bad it was.

In the comments of the linked PR, Tobias Lütke weighed in with this good idea:

> I think this is an opportunity for ai tools, too. GitHub should publish a standard for a special AI byline that all ai tools can write to. Anytime you use an ai tool, it adds itself to a .git staging file and the next commit lists all the involved tools appended to the message similar to co authors.
>
> Then GitHub lists and links to the tools. This way the tools get some exposure, but maintainers also can require this standard to be followed. Everyone wins. And the tools can stop spamming the co-authors byline which is the current viral loop which is a bit obnoxious.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Is the future of software engineering beyond the IDE?](https://www.augmentcode.com/blog/beyond-the-ide)


Our friends at Augment Code thinks so. Their conviction is that the real bottleneck in software development isn't typing code into an editor, it's understanding the whole system: the repo, the history, the intent, the hidden complexity. IDEs are great at syntax and autocomplete, but they weren't built to reason across your entire codebase.

Augment believes AI changes the equation. By giving a model access to your repo and context, you can shift from "editor assistance" to "system-level collaboration." That's more than faster autocompletes. It's about AI helping you reason, refactor, and evolve software at the scale it actually exists.

It's a thought-provoking take. Maybe the future of engineering isn't about cramming more into the IDE, but about moving beyond it altogether.

The link to the post is in the chapter data. You can read this post and many others at augmentcode.com/blog

**Break:**

**Jerod Santo:**

[U.S. buys 10% stake in Intel](https://newsroom.intel.com/corporate/intel-and-trump-administration-reach-historic-agreement)

We've been wondering how Intel might survive its long, slow decline. I don't think they're out of the woods after this deal, but they've certainly bought some time. The details:

> The government’s equity stake will be funded by the remaining $5.7 billion in grants previously awarded, but not yet paid, to Intel under the U.S. CHIPS and Science Act and $3.2 billion awarded to the company as part of the Secure Enclave program. Intel will continue to deliver on its Secure Enclave obligations and reaffirmed its commitment to delivering trusted and secure semiconductors to the U.S. Department of Defense. The $8.9 billion investment is in addition to the $2.2 billion in CHIPS grants Intel has received to date, making for a total investment of $11.1 billion.

As a hobbyist investor, I wouldn't have touched Intel stock with a 10-foot pole. As a U.S. taxpayer, I wasn't given that choice.

**Break:**

**Jerod Santo:**

[Do things that don’t scale. Then don’t scale](https://derwiki.medium.com/do-things-that-dont-scale-and-then-don-t-scale-9fd2cd7e2156)

If recent coverage is an indicator, I'm clearly on a 'personal software' kick. Adam Derewecki is too.

> A little over a decade ago, Paul Graham popularized “Do things that don’t scale.” The idea was: at first, you do the scrappy, personal, labor-intensive stuff just to get traction… and then you figure out how to make it huge.
> 
> But with GPT-assisted coding, I think we’re in an era where you can just stop after the first part. You can do something that doesn’t scale — and leave it that way. That might actually be the best version of it.

Adam goes on to describe a few of his projects that he intentionally hasn't scaled and why he thinks they're better off for it. The pattern he follows (and maybe we should too):

1. See a need that matters to you
2. Build the smallest, simplest thing that solves it
3. Resist the urge to make it bigger
4. Enjoy it

Step 2 used to be the hardest part. These days, step 3 wears that crown.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [C.S. grads are struggling to find jobs](https://www.finalroundai.com/blog/computer-science-graduates-face-worst-job-market-in-decades)
- [The missing protocol: "Let Me Know"](https://deanebarker.net/tech/blog/let-me-know/)
- [Recreationally overengineering my Location History](https://overengineer.dev/blog/2025/08/19/overengineering-location-history/)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
