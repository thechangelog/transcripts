**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 28th, 2024, but recorded on Sunday, because Adam and I will be manning the booth at All Things Open 2024 when this episode drops.

Ok, let's get straight into the news.

**Break:**

**Jerod Santo:**

[Developing with Docker (the right way)](https://danielquinn.org/blog/developing-with-docker/)

Daniel Quinn has used Docker differently at *every job* he's started in the past 10+ years. It's time for some consensus, he thinks, on how to do it Right™

> The argument here is that the use of Docker and various tooling shouldn't be unique to any particular project, that this sort of thing should be so standard it's both common and boring to even think about. My experience tells me that we're not there yet though, so this is just me making the case for what I think constitutes a good setup.

His major argument is that if you're using Docker, you aren't writing software anymore. Instead, you're "building immutable images."

> Images that are developed locally, tested in CI, and deployed to production, but importantly, the image at each of these stages is exactly the same: reproducible at every turn. There's little value in developing and testing one thing if what you roll out to production is something else entirely.

Check out his article (link in the newsletter) for why he thinks the [12-factor app](https://12factor.net/) is uniquely suited to Docker-based systems.

**Break:**

**Jerod Santo:**

[Ghostty 1.0 is coming](https://mitchellh.com/writing/ghostty-is-coming)

Mitchell Hashimoto says his new terminal emulator will be publicly released this coming December:

> In short, Ghostty 1.0 aims to be the best drop-in replacement for your current terminal emulator on macOS and Linux. Ghostty will be fast, feature-rich, and have a platform-native GUI while being the most standards-compliant terminal emulator available.

Why Ghosttty? Mitchell felt that existing terminal emulators "pushed an unnecessary choice between speed, features, and platform-native GUIs." With Ghosttty, Mitchell says **pick any *three.***

And since Mitchell previously built a publicly-traded company around his open source work, this note on finances is worth highlighting as well:

> Ghostty is a passion project for me and I have no plans to pursue any sort of commercialization of the project. As stated in the first paragraph, Ghostty will be released as an open source project under the MIT license.

**Break:**

**Jerod Santo:**

[Learning to learn](https://kevin.the.li/posts/learning-to-learn/)

Maybe we spend too much time learning and not enough time learning how to learn better. Kevin Li:

> Learning to learn is extremely high leverage. 40 hours at 25% efficiency is the same as 12.5 hours at 80% efficiency. And it turns out that being productively honest is one of the most effective and kindest things you can do for yourself.

If you want to take your learning process more seriously, maybe try this suggested "optimal learning flow"

1. Very quickly identify what the foundational knowledge is.
2. Build a personal curriculum to become an expert and avoid the trap of the expert beginner.
3. Sprint hard the first 15-20 hours to impress initial memory, then decelerate to a more regular pace.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[AI GPU clusters, from your laptop, with Livebook](https://fly.io/blog/ai-gpu-clusters-from-your-laptop-livebook/)

There's an excellent post on Fly's blog that recaps Chris McCord and Chris Grainger's ElixirConf keynote. It starts with:

> Livebook, FLAME, and the Nx stack: three Elixir components that are easy to describe, more powerful than they look, and intricately threaded into the Elixir ecosystem. A few weeks ago, Chris McCord (👋) and Chris Grainger showed them off at ElixirConf 2024. We thought the talk was worth a recap.

Did you know that any [Livebook](https://livebook.dev/), including the one running on your laptop, can start a runtime running on a Fly Machine, in Fly.io’s public cloud?! That's pretty cool... That Elixir machine lives in your default Fly.io organization, giving it networked access to all the other apps that might live there. But that's just the start...

Check out the post to see how the Chris' used [FLAME](https://fly.io/blog/rethinking-serverless-with-flame/) to generate a cluster of 64 GPU Fly Machines, each running an L40s GPUs to do hyperparameter tuning on a laptop. 🤯

**Break:**

**Jerod Santo:**

[Arc is a dead browser walking](https://www.howtogeek.com/arc-browser-creator-moving-on-to-new-project/)

I verbalized my concern with the (otherwise exciting) Arc Browser being venture-backed on a [couple](https://changelog.com/friends/14) [occasions](https://changelog.com/friends/29). Concerns realized!

> Arc has gained a loyal user base but ultimately hasn't achieved mainstream adoption, which the Browser Company wants. CEO Josh Miller spoke on a YouTube Video about the company's realization that Arc, due to its complexity and unique features, caters more to power users and might not reach the wider audience the company wants...

They're now working a new browser that they hope will go mainstream. That's a hard pass from me. Fool me once, shame on you. Fool me twice...

**Break:**

**Jerod Santo:**

[React Native's new architecture is here](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)

Congrats to the React Native team for shipping a major rewrite that sets the project up for the future:

> The New Architecture is a complete rewrite of the major systems that underpin React Native, including how components are rendered, how JavaScript abstractions communicates with native abstractions, and how work is scheduled across different threads. Although most users should not have to think about how these systems work, these changes bring improvements and new capabilities.

The old architecture was holding the team back, making it difficult (or not possible) to properly support React's concurrent features. To solve these problems, the New Architecture includes four main parts:

- The New Native Module System
- The New Renderer
- The Event Loop
- Removing the Bridge

The new architecture is now ready for prime time. In fact, it's been in production use for months at shops like Expensify, Kraken & BlueSky.

**Break:**

**Jerod Santo:**

That's the news for now, but scan the companion Changelog Newsletter for even more stories worth your attention. Like: /tmp is usually a bad idea, embeddings are underrated & Stephen O'Grady's freshest take on the Open Source AI Definition. You can find the newsletter link in your show notes or at changelog.com/news

We have some great episodes coming up this week: DHH talks Rails 8 with us on Wednesday and on Friday, we'll bring you the best from our All Things Open conversations that we're probably having right now while you listen to this.

Have a great week! Tell your friends about Changelog News if you think they'll dig it, and I'll talk to you again real soon.
