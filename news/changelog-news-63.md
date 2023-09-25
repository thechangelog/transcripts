**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 25th 2023.

True story: At Strange Loop last week, someone approached our booth quite excitedly and said, "its ya boy!" and I had no idea what he was talking about. Confused, he asked, the Jay-Z sample from 99 problems? Isn't that you?! Finally, it clicked! And we both had a good laugh.

Moral of the story: if you see me at All Things Open in October or KubeCon in November and yell out "sha boy!" I will totally reciprocate!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

ElectricSQL is a project that offers a local-first sync layer for web and mobile apps. If local-first is new to you, here's a primer: "Local-first is a new development paradigm where your app code talks directly to an embedded local database and data syncs in the background via active-active database replication."

Built with Elixir, ElectricSQL is drop-in compatible with your existing data model, migrations tooling, web framework and component library... the only requirement is Postgres. Check it out if your app needs instant reactivity, realtime multi-user interactions, and/or conflict-free offline sync.

**Break:**

**Jerod Santo:**

Ned Batchelder was chastised (my word not his) for advising folks to “learn how you learn” on his blog. That's because the long-believed theory of "learning styles" has been [scientifically debunked](https://www.educationnext.org/stubborn-myth-learning-styles-state-teacher-license-prep-materials-debunked-theory/) for awhile now, but it's still common to believe there are visual learners, auditory learners & kinesthetic learners. But Ned wasn't talking about that at all! He says: "When I said “learn how you learn,” I meant for learners to take an active role in choosing what their path should be... There are many effective ways to learn how to program, and you have to choose your way."

In the linked post, Ned goes on to ask a bunch of great questions you should ask yourself to help decide "how you learn." Questions like: Do you want to start with computer science theory, or jump into writing small programs? Do you want to know the inner workings of things, or just how to use them? and Do you like videos, or reading text?

This is important, because we are spoiled for choice when it comes to software development learning resources and the paradox of choice is no myth...

**Tenacious D:**

[Can't decide, can't decide, brain aneurysm](https://www.youtube.com/watch?v=L25NgHpsMsA)

**Break:**

**Jerod Santo:**

On a recent Go Time episode about Go 1.21, frequent guest Carl M Johnson shared an unpopular opinion that was so spicy that we turned it into a Changelog Post and YouTube video.

**Carl Johnson:**

[Clip from Go Time #289](https://youtu.be/jc2jzDzW0g4)

**Jerod Santo:**

This sparked a ton of discussion online about the virtues and downfalls of XML, YAML, JSON, CUE and many other protocols. Turns out Carl's opinion was a little popular on X: with 55% of 79 voters agreeing with him and a little unpopular on Mastodon: with 52% of 191 voters disagreeing.

**Break:**

**Jerod Santo:**

It is now time for Sponsored News!

Tailscale for VS Code just got a major upgrade. "Machine Explorer" unlocks the ability to explore, edit, and transfer the files on any of the nodes in your tailnet (that you can reach through SSH) directly in VS Code!

> For the millions of developers who use VS Code regularly, this new extension brings all of your remote files into a familiar and powerful editing environment. That helps you get stuff done with your code without worrying about using an ancient version of `nano` on some remote server or getting the syntax of `scp` commands just right.

Check out their linked [blog post](https://tailscale.com/blog/machine-explorer-vscode-extension/?utm_campaign=changelog&utm_medium=podcast&utm_source=sponsorship&utm_term=changelog) introducing this awesome feature to learn how to install it and watch a video showing how the new extension works.

Thanks once again to Tailscale for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

In a post titled "Every programmer should know Itempotency", Berkan Sasmaz says: "In the world of programming, there are many concepts that every developer should understand in order to build efficient and reliable systems. One such vital concept is idempotency, which refers to the property of an operation or function that produces the same result when applied multiple times as it does when applied only once"

Berkan does a great job breaking down why this concept is important for us all to understand and why it has significant implications for building distributed systems. He uses four of the most common HTTP methods (GET, PUT, POST, DELETE) and explains which ones are idempotent and which ones are not. Do you know?

**Break:**

**Jerod Santo:**

HyperDX is like Datadog or New Relic, only open source and developer friendly. "HyperDX helps engineers figure out why production is broken faster by centralizing and correlating logs, metrics, traces, exceptions and session replays in one place. The HyperDX stack ingests, stores, and searches/graphs your telemetry data. After standing up the Docker Compose stack, you'll want to instrument your app to send data over to HyperDX."

It speaks OpenTelemetry, which means it probably works with whatever you're working with. This project is open core, so most features are self-hostable and available under an MIT license. They offer a cloud hosted version and a few additional features that are not open source.

**Break:**

**Jerod Santo:**

Let's finish up with two quick updates to ongoing stories and a follow-up to a question I asked on Changelog & Friends.

OpenTF [joined the Linux Foundation](https://www.linuxfoundation.org/press/announcing-opentofu) and got renamed to OpenTofu, ending their _beef_ with HashiCorp. See what I did there?

Unity [apologized to devs](https://www.gamedeveloper.com/business/unity-apologizes-to-devs-reveals-updated-runtime-fee-policy) and put some constraints around their new fee structure. Too little too late?

On our "what do we want from a web browser" episode of Changelog & Friends, I said:

**Clip:**

[From Changelog & Friends #14](https://changelog.com/friends/14)

**Jerod Santo:**

Meanwhile Clare So from Mozilla was listening along while vacuuming and stopped right in her tracks. She couldn't believe we didn't know this! Yes, there is a Firefox for iOS. So, she approached us at Strange Loop last week to set the record straight. Sorry about that, Mozilla people! I had a feeling there was a Firefox iOS app, but I wasn't sure.

We also received some criticism that we didn't give Firefox a fair shake while discussing the various web browsers. Maybe true, but if it wasn't clear on the show... I have massive respect for Firefox and what it has done for the citizens of the web. And I know it is a huge effort by many people for many years. I thank all of you for your work. In fact, my relationship to Mozilla and Firefox is a lot like Hansel's relationship to Sting...

**Hansel:**

[The music he's created over the years... I don't really listen to it.](https://www.youtube.com/watch?v=wWjJVriFL_o)

**Break:**

**Jerod Santo:**

That's the news for now, but our epic Strange Loop episode will drop on Wednesday and we're experimenting with our very first [game show](https://changelog.com/topic/games) for Changelog & Friends on Friday!

Have a great week, **tell your friends about Changelog News** if you dig it, and I'll talk to you again real soon. 💚
