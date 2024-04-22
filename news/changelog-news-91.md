**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 22nd 2024.

We put a fresh coat of paint on the ol' [Changelog News](https://changelog.com/news) website! The goal was to feature our content more prominently and add some social proof to help nudge potential subscribers in the right direction. Thanks to everyone who lent us your kind words! How'd we do? Hit reply with your feedback & bug reports...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The threat to open source comes from within](https://newsletter.goodtechthings.com/p/the-threat-to-open-source-comes-from)

Forrest Brazeal wrote this not-thought-leadership piece before OpenTofu published its response to Hashicorp's lawyers, but the general sentiment still stands.

First, he lays out why he doesn't believe external threats like the XZ backdoor are existential for the open source community. Then, he turns inward with the horror movie classic twist: "The phone call is originating from inside the house!"

> External threats, as the XZ thing demonstrates, seem to have a galvanizing effect on the broader open-source community. OSS just gets stronger under stresses like that.
>
> The thing I’m most worried about now is the opposite: a chilling effect. And it’s been creeping up on OSS like a glacier for over a decade.

After a quick history lesson (Current situation: " Everyone is mad at everyone") and Forrest's viewpoint of the OpenTofu / Hashicorp legal drama, he concludes with this somber note: q

> Here is where, if I were a thought leader, I would make some grand-sounding call for companies to “do better”, or for OSS foundations to “revisit their governance structures”, or something. But this is an impasse that can’t be solved with platitudes. Cloud companies, fundamentally, see open-source as something to exploit; OSS software companies see it as incompatible with a sustainable business model. Contributors who don’t work for either side are getting trampled on. And eventually, as the ecosystem fractures, everybody loses. The whole situation is just sad.
>
> In the end, the fragile balance of open source—that unlikely blend of personalities and incentives that has driven tech’s innovation engine throughout the 21st century—won’t be upset by the odd state actor, or by malicious spam, or whatever scary new thing The Register is up in arms about tomorrow. It can only be disrupted when the community comes to believe maintaining that balance is more trouble than it’s worth. That’s the threat we should all be concerned about.

**Break:**

**Jerod Santo:**

[Redis is forked](https://vickiboykis.com/2024/04/16/redis-is-forked/)

Vicki Boykis:

> I, as a cynical Eastern European, hate almost everything in software. But I love Redis with a loyalty that I reserve for close friends and family and the first true day of spring, because Redis is software made for me, the developer.

That's high praise, which makes what she says next land with even more gravitas than it would in isolation:

> The old Redis was for developers. The new Redis is for enterprise sales, and for generative AI. It’s true that it’s not yet entirely clear what all of this means for the future of Redis the software. Some say the licensing changes won’t impact much if you’re not a large-scale Redis reseller. Because it’s true that the license changes were all legal and all parties acted in accordance with both what’s acceptable and what the market dictates to sustain the software. And yet at the same time, projects that depend on Redis are withholding updates or migrating.
>
> But the problem is not only that the license changed suddenly, without warning, it’s the messaging behind the change, and the message is, even though there is extremely active community development, Redis is no longer in and of the community. We are no longer being consulted.

If you heard Adam and I [on Changelog & Friends](https://changelog.com/friends/40) over the weekend, you already know how I feel about this. But if you didn't: I'm with Vicky. Redis is no longer for us, and I'm no longer for Redis. May a thousand ideas/forks rise out of its ashes.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

FireHydrant offers modern engineering teams less stress from ring to retro. Full end-to-end incident management, alerting, on-call, and of course, streamlining every aspect of your incident process.

From webhook, to alert trigger, to notifications, to incidents opened, to retro tasks, to mean-time-to-X analytics...everything is inside FireHydrant for modern engineering teams.

What you're about to hear, are real reactions from PagerDuty users when seeing signals from FireHydrant for the first time.

**FireHydrant Clip:**

PagerDuty, I don't want to say they're evil, but they're an evil that we've had to maintain. I know all of our engineering teams as well as myself are interested in getting this moving the correct direction as right now just managing and maintaining our user seats has become problematic.

That's, that's, that's really good actually. This is, this is a consistent problem for us and teams is that covering these sorts of ad hoc. time frames is very difficult. Um, you know, putting in like overrides and specific days and different new ships is, is quite onerous. Oh, and you did the most important piece, which is, didn't tie them together.

Cause that's half the problem with Pager duty, right? Is I get all these alerts and then I get an incident per alert. And generally speaking, when you go sideways, you get lots of alerts because lots of things are broken, but you only have one incident. Yeah. I'm super impressed with that because. Being able to assign to different teams is an issue for us because, um, like the one, the one alert fires for one team, and then it seems like to have to bounce around and it never does.

Uh, which then means that we have tons of communication issues because like people aren't updated. No, I mean, to, to be open and honest, uh, when can we switch?

**Jerod Santo:**

The next step is to go to firehydrant.com/signals

Assemble the team and work the problem without a single swivel of the chair. FireHydrant delivers end-to-end incident management and on-call alerting for the modern software teams.

Get started for free at firehydrant.com/signals

**Break:**

**Jerod Santo:**

[Ghost is federating over ActivityPub](https://activitypub.ghost.org)

John O'Nolan and the Ghost team:

> In 2024, Ghost is adopting ActivityPub and connecting with other federated platforms across the web.
>
> This means that, soon, Ghost publishers will be able to follow, like and interact with one another in the same way that you would normally do on a social network — but on your own website.
>
> The difference, of course, is that you’ll also be able to follow, like, and interact with users on Mastodon, Threads, Flipboard, Buttondown, WriteFreely, Tumblr, WordPress, PeerTube, Pixelfed... or any other platform that has adopted ActivityPub, too. You don’t need to limit yourself to following people who happen to use the same platform as you.

Instead of building this all behind closed doors, the Ghost team is inviting everyone to be part of their process. With each publishing platform that rolls out ActivityPub support, the promise of the Fediverse becomes less of an idea and more of a reality. Who's next?

**Break:**

**Jerod Santo:**

[Llama 3 now available for "businesses of all sizes"](https://github.com/meta-llama/llama3?tab=readme-ov-file)

On April 18th, Meta released the latest version of their open(ish) LLM with "state-of-the-art performance." [The Verge](https://ai.meta.com/blog/meta-llama-3/) rounds it up like this:

> Meta claims both sizes of Llama 3 beat similarly sized models like Google’s Gemma and Gemini, Mistral 7B, and Anthropic’s Claude 3 in certain benchmarking tests. In the MMLU benchmark, which typically measures general knowledge, Llama 3 8B performed significantly better than both Gemma 7B and Mistral 7B, while Llama 3 70B slightly edged Gemini Pro 1.5.

What followed was your typical _X Bros_ posting "N mind blowing demos" of what Llama 3 can accomplish (where _N_ = the number a rival _X Bro_ just posted + 1). Not interesting... But two things did stand out as interesting about this announcement:

1. They didn't compare Llama 3 to GPT-4 at all, so we can only assume it still comes up short
2. They continue to call Llama "open source" even though the license retains the commercial requirement of your business not being too big (700 million MAU)

So I guess Llama 3 is open for businesses of all sizes, depending on how you define "all" and "sizes"...

**Break:**

**Jerod Santo:**

[Questions to ask when I don’t want to work](https://eieio.games/essays/questions-to-ask-when-i-dont-want-to-work/)

Sometimes it's easy, but other times (especially if you work for yourself) it's necessary to _put_ yourself to work. This post by nolen might help you get that done on days when you'd otherwise struggle. Here's some bullet points to start from, but the details matter too.

> To summarize, when I don’t want to work…
>
> - I don’t call myself lazy. I trust that I haven’t changed and look for what needs to.
> - I get excited about the end result and share what I’m doing with others.
> - I consider whether my tools are getting in my way
> - I give myself the same grace I’d give someone else, and consider taking a proper break
>
> Last week I was struggling to work. I wasn’t excited about my current project. I took two days off and played a bunch of games and piano. I realized that I was excited to write this essay. And so I sat in a chair (not on the couch!) and wrote it.

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up this week: Louis Pilfold, the creator of the [Gleam](https://gleam.run), on Wednesday & Adam Jacob, from [System Initiative](https://www.systeminit.com), on Friday!

Have a great week, **send our shiny new website to a friend** who might dig it & I'll talk to you again real soon. 💚
