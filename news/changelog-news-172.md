**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, December 1st, 2025.

December already?! I guess it's time to get ready for our [8th annual](https://changelog.com/topic/sotl) state of the "log" episode!

We'd love for you to share your favorite moments, guests, topics, and/or episodes from the past year (2025). If your audio is used on the show, we'll hook you up with your very own Breakmaster Cylinder remix!

Please, [send us a voicemail at changelog.fm/sotl](https://changelog.fm/sotl) 💚

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[What actually makes you senior](https://terriblesoftware.org/2025/11/25/what-actually-makes-you-senior/)

Matheus Lima:

> People love to describe senior engineers with a big checklist: architecture, communication, ownership, leadership, etc.
> 
> But if you strip away the title, the salary, and the years of experience, there’s one core skill that separates senior+ engineers from everyone else: **reducing ambiguity**. Everything else flows from that.

One of the reasons that senior engineers are worth their salaries is that they ask great questions.

*What problem are we actually trying to solve?*
*Who’s the user here and what’s painful for them?*
*What are we assuming that might be wrong?*
*What happens if we’re wrong and ship this anyway?*

Boil these kind of questions down and they're all about reducing ambiguity, creating clarity, and then (and only then) solving the problem. So, are you a senior engineer? Matheus provides a litmus test:

> What happens when someone hands you something abstract/fuzzy/complex? Do you wait for someone else to clarify it for you? Do you start coding immediately and hope for the best? Or do you spend time up front making it concrete enough that you and your team can actually execute with confidence?

**Break:**

**Jerod Santo:**

[Slop Evader](https://tegabrain.com/Slop-Evader)

Tega Brain created a browser extension (Firefox, Chrome) for avoiding AI slop. It's a search tool that will only return content created before ChatGPT's first public release in November of 2022.

> Since the public release of ChatGTPT and other large language models, the internet is being increasingly polluted by AI generated text, images and video. This browser extension uses the Google search API to only return content published before Nov 30th, 2022 so you can be sure that it was written or produced by the human hand.

Is this a long-term sustainable approach to avoiding AI slop? Absolutely not. Will it become an interesting cultural artifact showing humanity's last ditch effort to keep their beloved internet alive? Maybe...

**Break:**

**Jerod Santo:**

[Zig moves off GitHub](https://ziglang.org/news/migrating-from-GitHub-to-codeberg/)

Zig creator, Andrew Kelley, explains why he's taking his programming language and going <strike>home</strike> to [Codeberg](https://codeberg.org/ziglang/zig):

> ... it’s abundantly clear that the engineering excellence that created GitHub’s success is no longer driving it. Priorities and the engineering culture have rotted, leaving users inflicted with some kind of bloated, buggy JavaScript framework in the name of progress. Stuff that used to be snappy is now sluggish and often entirely broken... Most importantly, Actions has [inexcusable bugs](https://github.com/actions/runner/issues/3792#issuecomment-3182746514) while being [completely neglected](https://github.com/actions/runner/issues/385).

Andrew says he looks forward to fewer violations of Zig's strict [no LLM / AI policy](https://ziglang.org/code-of-conduct/#strict-no-llm-no-ai-policy) , which he believes is at least partially due to GitHub's aggressive pushing of Copilot to help you file issues. GitHub Sponsors, on the other hand, might be a big loss for Zig's sustainability efforts:

> This product was key to Zig’s early fundraising success, and it remains a large portion of our revenue today. I can’t thank Devon Zuegel enough. She appeared like an angel from heaven and single-handedly made GitHub into a viable source of income for thousands of developers. Under her leadership, the future of GitHub Sponsors looked bright, but sadly for us, she, too, moved on to bigger and better things. Since she left, that product as well has been neglected and is already starting to decline.

Andrew asks that all current supporters consider moving their donations to [Every.org](https://ziglang.org/zsf/)

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Stop donating your afternoons to CI](https://namespace.so)

Think about how much of your day is spent waiting on CI: 

Push code, wait
Open a PR, wait
Merge to main, wait some more

Those minutes add up to hours every week. These are hours you could spend actually building things.

GitHub-hosted runners are convenient, sure, but they're not optimized for speed. Every commit triggers a full rebuild. Caching is hit-or-miss, and you're billed by the minute while you wait. Not cool.

Namespace attacks this problem head-on. Their runners are designed for speed: 

- intelligent caching that remembers what you've already built
- parallel execution that doesn't serialize unnecessarily
- infrastructure tuned specifically for CI workloads. 

The switch is dead simple—point your GitHub Actions at Namespace runners and you're done. Teams using Namespace report builds finishing 7x faster on average. That's not a marginal improvement. That's getting a full hour back every day. And because their pricing model is built for high-volume teams, you'll likely spend less too.

Stop donating your afternoons to CI. Head to [namespace.so](https://namespace.so) and reclaim your time.

**Break:**

**Jerod Santo:**

[No free lunch in vibe coding](https://bytesauna.com/post/prompting)

Matias Heikkilä shares some deep thoughts on the question we're all trying to answer these days: can vibe coding get us *there*?

> In theory, you can produce software with a single prompt, yes. But at what point does a prompt become complex enough to qualify as a project on its own right? Does the whole scheme merely transform programming complexity into prompt-engineering complexity?
> 
> The way I see it is that LLMs are another step in the saga of machine-human interaction. It may even be a revolutionary step, something akin to the introduction of the graphical user interface. This development, however, is orthogonal to complexity. Complexity is not a matter of implementation, but an inherent mathematical property of the whole engagement.

Complexity, it turns out, is where the rubber meets the proverbial road. It can be *managed*, but not altogether removed. And you know what's good for managing complex systems? Humans wielding programming languages.

> Serious programming languages are not obfuscations; they are not intimidating or difficult on purpose. It’s quite the opposite: these are best efforts at making an extremely complex thing as simple as possible. And however you tackle this, that same complexity will be present in one form or another, and has to be managed in one way or another.

**Break:**

**Jerod Santo:**

[Your SSD data isn't as permanent as you think](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data)

TIL our SSD data *at rest* is data *at risk*:

> Unlike hard drives that magnetize spinning discs to store data, SSDs modify the electrical charge in NAND flash cells to represent 0 and 1. NAND flash retains data in underlying transistors even when power is removed, similar to other forms of non-volatile memory. However, the duration for which your SSD can retain data without power is the key here... most consumer SSDs use only TLC or QLC NAND, so users who leave their SSDs unpowered for over a year are risking the integrity of their data.

In practice, this is a non-issue as long as you boot up your machine every one in awhile. Also, it's not a big deal because you have a robust and recently tested backup system. Right? Right?!


## 📰 The Classifieds

✨ A great opportunity to share your startup, passion project, opinion, big idea, upcoming event, etc. with your fellow ~25k readers and ~30k listeners. Feedback welcome! ✨

- [Auggie now works in Zed, Neovim, and Emacs via ACP](https://www.augmentcode.com/blog/auggie-acp-zed-neovim-emacs)
- [WarpStream - Diskless Kafka With Zero Inter-AZ Costs](https://www.warpstream.com/migration?utm_source=newsletter&utm_medium=email&utm_campaign=changelog_news_classifieds)
- [Private Captcha: a privacy-first self-hostable PoW captcha solution](https://privatecaptcha.com)
- [Nostr: really decentralized social network protocol with a chance of working](https://nostr.com/)
- [Hi, I’m Jim Nielsen. I love The Changelog. So much, in fact, I’ll pay to say it in the classifieds.](https://www.jim-nielsen.com/linkedin)

👉 [Book a classified ad for $100](https://forms.gle/yCJirHRCWkdbG5qK6) 👈

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [UX is your moat (and you're ignoring it)](https://eleganthack.com/ux-is-your-moat-and-youre-ignoring-it/)
- [Quit social media by posting more](https://posseparty.com)
- [Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
