**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 29th, 2024.

Let's get right into the news.

**Break:**

**Jerod Santo:**

[The Swiss government goes open source](https://www.zdnet.com/article/switzerland-now-requires-all-government-software-to-be-open source)

In a move that began way back in 2011 (!), Switzerland recently passed the "Federal Act on the Use of Electronic Means for the Performance of Official Duties" ([EMBAG](https://datenrecht.ch/en/bundesgesetz-ueber-den-einsatz-elektronischer-mittel-zur-erfuellung-von-behoerdenaufgaben-embag-in-schlussabstimmung-angenommen/) for short).

> This new law requires all public bodies to disclose the source code of software developed by or for them unless third-party rights or security concerns prevent it. This "public money, public code" approach aims to enhance government operations' transparency, security, and efficiency.

This is something that every tax-funded government on Earth should do, IMHO, and "public money, public code" is such a simple & powerful way of stating the aim.

**Break:**

**Jerod Santo:**

[Google reverses course on third-party cookies](https://privacysandbox.com/news/privacy-sandbox-update/)

Anthony Chavez, VP of Privacy Sandbox at Google:

> Instead of deprecating third-party cookies, we would introduce a new experience in Chrome that lets people make an informed choice that applies across their web browsing, and they’d be able to adjust that choice at any time. We're discussing this new path with regulators, and will engage with the industry as we roll this out.

Let me also introduce a new experience that lets people make an informed choice that applies across their web browsing: stop using Google Chrome!

**Break:**

**Jerod Santo:**

["Open source" AI is the path forward](https://about.fb.com/news/2024/07/open source-ai-is-the-path-forward/)

_(Scare quotes added by me, because Zuck uses the term "open source" sans [OSI](https://opensource.org/osd) approval)_

Mark Zuckerberg, announcing the release of multiple Llama 3.1 models:

> Today, several tech companies are developing leading closed models. But open source is quickly closing the gap. Last year, Llama 2 was only comparable to an older generation of models behind the frontier. This year, Llama 3 is competitive with the most advanced models and leading in some areas. Starting next year, we expect future Llama models to become the most advanced in the industry.

In the linked post, He outlines why he believes "open source" is the best development stack, why "open sourcing" Llama is good for Meta & why "open source" AI is good for the world.

**Break:**

**Jerod Santo:**

[Anyone can access deleted and private repository data on GitHub](https://trufflesecurity.com/blog/anyone-can-access-deleted-and-private-repo-data-GitHub)

This sounds... _not ideal_

> You can access data from *deleted forks*, *deleted repositories* and even private repositories on GitHub. And it is available forever. This is known by GitHub, and intentionally designed that way.

They're calling it **Cross Fork Object Reference** (CFOR). It occurs when one repository fork can access sensitive data from another fork, even if said fork is private or has been deleted. The *how* is detailed in the linked post, but the most interesting / concerning thing is that it's not a bug, it's a feature? After notifying GitHub, they replied:

> Thanks for the submission! This is an intentional design decision and is working as expected as noted [in our documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility). We may make this functionality more strict in the future, but don't have anything to announce right now.

Perhaps a good takeaway of this is: don't use private forks (just in case) q q

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Go ahead, commit your .env file!](https://1password.com/changelogpod)

1Password makes it easy and secure to share configs & secrets across your team.

You can replace secrets in your `.env` file with secret references & use the 1Password CLI to inject them when you start your app (that's how we do it). Now when new members join your team, they can download the `.env` to get up & running with your development secrets in minutes. We use 1Password and we think you and your team should too.

*Just for our listeners* they're doubling their free trial to 28 days (vs 14 days). Head to 1password.com/changelogpod to get that deal OR heat to developer.1password.com to learn all about their developer tooling.gpod)!

Thanks again to 1Password for Sponsoring Changelog News

**Break:**

**Jerod Santo:**

[The New Internet](https://tailscale.com/blog/new-internet)

Tailscale co-founder/CEO, Avery Pennarun, explains how they didn't set out to be a networking company. They set out to fix the problem of developers scaling what they don't need to scale. Then they remembered the beautify of their '90s era LANs:

> We looked at a lot of options, and talked to a lot of people, and there was an underlying cause for all the problems. The Internet. Things used to be simple. Remember the LAN? But then we connected our LANs to the Internet, and there’s been more and more firewalls and attackers everywhere, and things have slowly been degrading ever since.

The solution they're presenting is to remove the everything that's not essential complexity and, boldly, "fix the internet"

> If we fix the Internet, a whole chain of dominoes can come falling down, and we reach the next stage of technology evolution...

> We’ve built a giant centralized computer system, with a few megaproviders in the middle, and a bunch of dumb terminals on our desks and in our pockets. The dumb terminals, even our smart watches, are all supercomputers by the standards of 20 years ago, if we used them that way. But they’re not much better than a VT100. Turn off AWS, and they’re all bricks.
>
> It’s easy to fool ourselves into thinking the overall system is distributed. Yes, we build fancy distributed consensus systems and our servers have multiple instances. But all that runs centrally on cloud providers.

I have to stop quoting now or I'll run up our AWS bill. Also this might come off as a Tailscale ad, which it is not. (They do sponsor us sometimes, but this is not sponsored at all.) It's simply a well-written explanation of a well-conceived vision.

**Break:**

**Jerod Santo:**

That's the news for now, but this is issue #105, so that means it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Nicholas C, Chris T, Benjamin S, Ciaran J, Matthew M & Jared G!

_We appreciate you_ for supporting our work with your hard-earned cash.

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, receive a free sticker pack in the mail, directly support our work & get shout outs like the ones you just heard.)

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
