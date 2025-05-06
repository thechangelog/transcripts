**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, May 5th, 2025.

Adam asked a BIG question on the most recent *Friends*: ([chapter link](https://changelog.com/friends/91#t=1575))

> "Who here is addicted to their phone?"

I've been hyper-aware of my own phone addiction ever since, and I even left it at home **on purpose** for an entire evening out last week. What happened next might shock you... 

Nothing. I didn't miss an emergency. I didn't get lost driving. I didn't even think much about my phone beyond that first 15-30 minutes of feeling "naked" without it. It was just a *really nice* time.

I say all that to say this: maybe try life without your phone for a bit. Can't suffer the thought? Come on, [dream a little](https://www.afterbabel.com/p/on-the-death-of-daydreaming)...

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Firefox could be doomed](https://www.theverge.com/news/660548/firefox-google-search-revenue-share-doj-antitrust-remedies)

The court's ruling on the *U.S. v. Google LLC* case on search competition won't merely impact the tech giant itself. 

> The DOJ wants to bar Google from paying to be the default search engine in third-party browsers including Firefox, among a long list of other proposals including a forced sale of Google’s own Chrome browser and requiring it to syndicate search results to rivals.

Mozilla CFO Eric Muhlheim testified in Google's defense that losing the revenue from Google's default placement deal would doom the company and serve to only further Google's browser monopoly. Why? Because Firefox makes up 90% of Mozilla's revenue and ~85% of Firefox revenue comes from that single deal alone.

> On cross-examination by the DOJ, Muhlheim conceded that it would be preferable not to rely on one customer for the vast majority of its revenue, regardless of the court’s ruling in this case.

This *single point of failure* for Mozilla's business may be shocking, but it's not new. I consider it a case of gross ineptitude that Mozilla leadership hasn't found a way to diversify their income, considering just how beholden they are to a single customer (who also happens to make a rival browser to theirs). What path might they take to get there? I enjoyed this comment by "Sly Mr. Fox" on the linked Verge article:

> Let me pay you money for Firefox. Stop doing all the other weird crap and just make a good, user-focused (really, actually user-focused, not “we value our users voices!” user-focused) browser, and let me pay you money for it. This is not hard. Resolve all the conflicts of interest, be the Kagi of browsers. No, you won’t beat Chrome, but you’ll do good work and help to keep a free internet.

**Break:**

**Jerod Santo:**

[I'd rather read the prompt](https://claytonwramsey.com/blog/prompt/)

Clayton Ramsey, a PhD student studying C.S. at Rice University, grades students' assignments and regularly sees ChatGPT copy pasta. So, he wrote this article as a plea to everyone (not just his students, ALL of us):

> **Don’t let a computer write for you**! I say this not for reasons of intellectual honesty, or for the spirit of fairness. I say this because I believe that your original thoughts are far more interesting, meaningful, and valuable than whatever a large language model can transform them into.

My name is Jerod Santo, and I approve this message. I write. A lot. I've literally written this newsletter every Monday morning *one hundred and forty three times* and I am here to tell you that I never filter a single character through an LLM. Not because I'm not lazy. I'm super lazy! So lazy, in fact, that I didn't take the time to rewrite that last sentence to make it more scrutable. And guess what, I'm not rewriting that one either! See, my laziness abounds.

I don't use an LLM for writing because their stuff is just *mid*. By design. They're professional *C* students. And I'm just not interested in *C* content. I'm shooting for at least a *B-*

**Break:**

**Jerod Santo:**

[Tim Cook's big (losing) gamble](https://sixcolors.com/post/2025/05/tim-cook-gambles-big-on-the-app-store-and-loses-for-now/)

Surely you've heard of the recent judgment against Apple's "requirement that apps only use Apple’s payment methods and not link to external methods." Developers rejoiced when Judge Yvonne Gonzalez Rogers excoriated Apple in her finding:

> Apple’s response to the Injunction strains credulity. After two sets of evidentiary hearings, the truth emerged. Apple, despite knowing its obligations thereunder, thwarted the Injunction’s goals, and continued its anticompetitive conduct solely to maintain its revenue stream. Remarkably, Apple believed that this Court would not see through its obvious cover-up.

One interesting fact that was exposed in the process was that Tim Cook eschewed Phil Schiller's advice that Apple comply with the original 2021 injunction:

> Internally, Phillip Schiller had advocated that Apple comply with the Injunction, but Tim Cook ignored Schiller and instead allowed Chief Financial Officer Luca Maestri and his finance team to convince him otherwise. Cook chose poorly.

I'm reminded of the ancient king of Israel, Rehoboam, who eschewed (elderly) wise council when he came to power, opting to increase the tax burden on the people. The 12 tribe kingdom divided, leaving only two tribes under Reheboam's rule. Will Tim Cook's iOS kingdom see a similar fate? Dan Moren thinks so:

> To paraphrase the immortal words of one of our greatest heroines, the more Apple tightens its grip, the more revenue will slip through its fingers.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Use AI to generate fully-working apps in Retool](https://retool.com/blog/ai-generated-apps?utm_source=changelog&utm_medium=newsletter)

Retool has been hard at work building powerful, enterprise-ready AI capabilities. Today they're opening an invite for customers to request early access to something new: *using AI to generate fully-working apps in Retool*.

If you're interested in getting early access to these powerful new capabilities and helping shape the future of AI in Retool... 

[Join the waitlist](https://retoolin.tryretool.com/form/d56c26d9-4847-449b-a4f5-bddda838d9bf) for early access. There's a link in your chapter data and the newsletter. Thank you to Retool for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust)

In 2023, Brandon Reinhart picked Rust and the [Bevy](https://bevyengine.org/) game engine to build his game, *Architect of Ruin*. However, over the course of six weeks, he rewrote the game entirely in C# and has been using it with Unity for the past three months. In this blog post, Brandon explains why he decided to migrate away from Rust / Bevy:

> I want to begin by stating that I anticipated many of these challenges before they manifested. I knew that using a game engine early in its development lifecycle would pose unique risks and costs. I considered those costs to be likely worthwhile and surmountable. My love of Rust and Bevy meant that I would be willing to bear some pain that other game developers might choose to avoid. I didn't walk blindly into these specific problems, but they bit harder than I was expecting.

He goes on to describe challenges he faced with collaboration, abstraction, keeping up, learning, and modding with Bevy. Looking back at the rewrite, Brandon learned two important lessons from the entire ordeal:

1. "**I failed to fairly evaluate my options at the start of the project**. Rust is great and I love it, but I didn't give alternatives a fair shake. In particular, I didn't spend time examining the differences between Unreal and Unity more closely."
2. "**Sometimes you have to burn time to earn time**. I think we are way ahead of where we would have been had we stuck with Bevy. Our agility in implementing rendering features while also pushing gameplay forward is much higher."

**Break:**

**Jerod Santo:**

[I use zip bombs to protect my server](https://idiallo.com/blog/zipbomb-protection)

Ibrahim Diallo came up with a fun, new (to me) way to troll malicious bots that cause havoc in his life:

> At my old employer, a bot discovered a wordpress vulnerability and inserted a malicious script into our server. It then turned the machine into a botnet used for DDOS. One of my first websites was yanked off of Google search entirely due to bots generating spam. At some point, I had to find a way to protect myself from these bots. That's when I started using zip bombs.

A zip bomb starts off as a small compressed file, but upon download it expands into a very large file that can overwhelm a machine's disk. Ibrahim will tell you exactly how he build and sends zip bombs, but first:

> Before I tell you how to create a zip bomb, I do have to warn you that you can potentially crash and destroy your own device. Continue at your own risk.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Redis is open source again](https://antirez.com/news/151)
- [The enshittification of tech jobs](https://pluralistic.net/2025/04/27/some-animals/#are-more-equal-than-others)
- [A Rust web framework that does not use async](https://github.com/BersisSe/feather)

Get in on the newsletter at changelog.com/news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
