**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 8th, 2025.

Short episode this week (and no new pods) because Adam and I are flying to California to hang with the [Oxide](https://oxide.computer) team during their annual internal conference. We hope to have some sweet content for you on the backside of the trip. Fingers crossed, I'll get a chance to [shout in their datacenter](https://www.youtube.com/watch?v=tDacjrSCeq4)...

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Why AI coding claims don't add up](https://mikelovesrobots.substack.com/p/wheres-the-shovelware-why-ai-coding)

Mike Judge (no, not [that](https://en.wikipedia.org/wiki/Mike_Judge) Mike Judge) has been coding for 25+ years. He was an early adopter of AI coding and a fan until a couple months ago. Now he's mad. Furious, even.

> I read the METR study and suddenly got serious doubts. In that study, the authors discovered that developers were unreliable narrators of their own productivity. They thought AI was making them 20% faster, but it was actually making them 19% slower. This shocked me because I had just told someone the week before that I thought AI was only making me about 25% faster, and I was bummed it wasn’t a higher number. I was only off by 5% from the developer’s own incorrect estimates.

That study left him unsettled, so he put himself to the test. For six weeks, he tested his own productivity with and without AI. What he found out was "really disappointing."

> I discovered that the data isn’t statistically significant at any meaningful level. That I would need to record new datapoints for another four months just to prove if AI was speeding me up or slowing me down at all... I can say definitively that I’m not seeing any massive increase in speed (i.e., 2x) using AI coding tools.

That got him thinking. Is he the only one, or are we all delusional? To answer that, Mike asked a simple question: 

> If so many developers are so extraordinarily productive using these tools, where is the flood of shovelware?  We should be seeing apps of all shapes and sizes, video games, new websites, mobile apps, software-as-a-service apps — we should be drowning in choice. We should be in the middle of an indie software revolution. We should be seeing 10,000 Tetris clones on Steam.

That question sent him further down the rabbit hole. Click through for receipts.

**Break:**

**Jerod Santo:**

[Cactoide wants to be the ultimate RSVP platform](https://cactoide.dalev.hu)

I've been prompting the open source community to kill Meetup for years. It looks like the folks behind [Cactoide](https://github.com/polaroi8d/cactoide) are taking a crack at it!

> Like the cactus, great events bloom under any condition when managed with care. Cactoide(ae) helps you streamline RSVPs, simplify coordination, and keep every detail efficient—so your gatherings are resilient, vibrant, and unforgettable.

They've started off simply, which is great. You can create an event in seconds, get a unique URL to share, and people can use that link to RSVP to the event. No accounts, no waiting. Is it too simple? Perhaps, yes. Especially if it gets a lot of use, which always brings abuse. But for now, it's refreshing. Go ahead, [create an event](https://cactoide.dalev.hu/create) and share it with friends.

**Break:**

**Jerod Santo:**

[The story of how RSS beat Microsoft](https://buttondown.com/blog/rss-vs-ice)

Ryan Farley, writing for [Buttondown](https://buttondown.com):

> Not many people talk about how or why RSS won the content syndication war because few people are aware that a war ever took place. Everyone was so fixated on the drama over RSS’s competing standards (Atom vs RSS 2.0) that they barely registered the rise and fall of the Information and Content Exchange (ICE) specification, which had been created, funded, and eventually abandoned by Microsoft, Adobe, CNET, and other household names.

I'd never even heard of the ICE specification, which predated RSS by almost exactly a year and was philosophically almost a complete opposite approach. Thankfully, "simple and open" beat out "complex and closed." Eventually, Google "killed" RSS by shuttering Google Reader, but that's not the whole story, either.

> All RSS had to do to weather ICE, Twitter, AI, and whatever comes next, was keep things simple and let users build their own feeds, filters, lists, and aggregators. Like email, it probably won’t make anyone a billion dollars or reshape entire industries. But it will always be wholly yours. And if that isn’t nice I don’t know what is.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Use Augment Code's CLI for automated code review](https://www.augmentcode.com/blog/using-the-auggie-cli-for-automated-code-review)

What if you could run a full code review from the command line? No pull request, no waiting. Just a well done code review by a senior level engineer with full context of all the changes. That's exactly what Augment Code's Auggie CLI makes possible. It hooks straight into your repo and runs the same deep reasoning you'd expect from a reviewer, but instantly and on demand.

Why does this matter? Code review isn't just about catching bugs. It's about catching bugs and security concerns early. The CLI shifts review left, letting you see what Auggie thinks before you even open a PR. That means faster feedback loops, fewer back-and-forth comments, and a smoother handoff to your team.

It's a provocative idea: what if automated review at the CLI became as routine as `git status`?

Learn more at augmentcode.com. The link to the blog post is in the companion newsletter.

**Break:**

**Jerod Santo:**

[Ditching Docker for Podman](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too)

Dominik Szymański is old enough to remember when Vagrant "looked like a promised land where every development environment would look the same." (Me too). Then came Docker.

> Docker wasn't just a tool - it fundamentally changed how we thought about application development and deployment. Having a repeatable, separated environment from your local system was refreshing and looked like a superpower.

After many years of Docker use, Dominik's thoughts on Docker began to change.

> Along the way, the quiet Docker daemon running in the background felt less like a comfortable constant and more like a ticking bomb.

The long-running daemon, Dominiki believes, is Docker's security downfall, so he went looking for alternatives. Enter [Podman](https://podman.io):

> Beyond the obvious daemon advantages, Podman brings some genuinely clever features that make day-to-day container work more pleasant:
>
> - Systemd integration that doesn't suck
> - Kubernetes alignment that's not just marketing
> - The Unix philosophy done right

If that's enough to get your attention, I have good news: Dominik says switching from Docker to Podman was almost seamless.

**Break:**

**Jerod Santo:**

[Stripe announces new L1 blockchain](https://tempo.xyz/)

Developed in partnership with "leading fintechs and Fortune 500s", Tempo is a new payments-focused blockchain that supports all major stablecoins. But why?

> Stablecoins enable instant, borderless, programmable transactions, but current blockchain infrastructure isn’t designed for them: existing systems are either fully general or trading-focused. Tempo is a blockchain designed and built for real-world payments.

Tempo will be [EVM](https://ethereum.org/vi/developers/docs/evm/)-compatible, but it isn't meant to displace other general-purpose blockchains (Ethereum, Solana, etc.) because it's "entirely focused on high-volume payment use cases." That being said, *high-volume payment use cases* that route around the banks and credit card companies' stranglehold on transfer fees are (so far) the killer app of general-purpose blockchains.

We'll have to wait and see how this plays out. Tempo has been announced, but it's not yet public. There is an invite-only testnet at the moment, and it will be validated by a "diverse group of independent entities" at launch. In other words, it'll only be as decentralized as Stripe wants it to be "before \[they\] transition to a permissionless model."

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Cloudflare AI Insights](https://radar.cloudflare.com/ai-insights)
- [Spec Kit (by GitHub)](https://github.com/github/spec-kit)
- [Package managers are evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
