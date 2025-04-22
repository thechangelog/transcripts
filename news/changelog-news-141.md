**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 21st, 2025.

A recently published study called [The Effect of Deactivating Facebook and Instagram on Users’ Emotional State](https://www.nber.org/papers/w33697) proved what we all knew to be true, but previously didn't have a study to point to: social media, at least in the form we've been using it for the past decade plus, is a total drag.

oh well, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Fresh beats for endless flow state](https://changelog.com/beats/after-party)

Our fourth full-length [Changelog Beats](https://changelog.com/beats) album dropped today! It's called *After Party* and it features beloved [BMC](https://breakmastercylinder.bandcamp.com) tracks from our outros, ad rolls & transitions. It's basically 26 chill beats to help you get into a state of flow and stay there. Here's a sample of a few of my favorites, such as:

- track 5, Severenced Package
- track 11, Do Not Stare Directly into The Changelog
- track 25, Sunken Barge Zone, Adam's Sudden Death Version
- track 26, Last Light

If that one's familiar to you, yeah it's our long-time outro to Changelog Interviews, which many, many people who have asked us to make available to stream/buy... now you can! Head to changelog.com/beats for all the links to all the music platforms or simply Search for Changelog Beats in your favorite music app. See you at the After Party...

**Break:**

**Jerod Santo:**

[The 12-factor Agent](https://github.com/humanlayer/12-factor-agents)

Dex Horthy, who has been hacking on AI agents for awhile, set out to answer the question:

> What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production customers?

What he came up with is 12 factors, in the spirit of [The Twelve-Factor App](https://12factor.net):

1. Natural Language to Tool Calls
2. Own your prompts
3. Own your context window
4. Tools are just structured outputs
5. Unify execution state and business state
6. Launch/Pause/Resume with simple APIs
7. Contact humans with tool calls
8. Own your control flow
9. Compact Errors into Context Window
10. Small, Focused Agents
11. Trigger from anywhere, meet users where they are
12. Make your agent a stateless reducer

If those 12 bullet points are more confusing than enlightening, that's because they're just bullet points! Click through for the full explainers.

**Break:**

**Jerod Santo:**

[How to build an agent](https://ampcode.com/how-to-build-an-agent)

Speaking of agents... you might now be thinking it's *super hard* to build one. Thorsten Ball says you are wrong:

> It’s not that hard to build a fully functioning, code-editing agent.
>
> It seems like it would be. When you look at an agent editing files, running commands, wriggling itself out of errors, retrying different strategies - it seems like there has to be a secret behind it.
>
> There isn’t. It’s an LLM, a loop, and enough tokens.

Turns out you can build a "small and yet highly impressive agent" in less than 400 lines of code. Thorsten proves this out by building an Anthropic-based agent in Go over the course of this blog post. I followed along and I have to say, it's all very basic stuff. Thorsten's closer:

> These models are incredibly powerful now. 300 lines of code and three tools and now you’re to be able to talk to an alien intelligence that edits your code. If you think “well, but we didn’t really…” — go and try it! Go and see how far you can get with this. I bet it’s a lot farther than you think.
>
> *That’s* why we think everything’s changing. 

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Teams with faster builds ship faster](https://www.linkedin.com/posts/kylegalbraith459_when-it-comes-to-cicd-everyone-asks-build-activity-7318226694958473219-66a6/)

Depot's CEO Kyle Galbraith recently shared his thoughts on the age-old question: "build or buy?" for CI/CD.

The fact is teams with faster builds ship faster and more. And teams that know how to CI *well* create faster builds. Imagine what would happen if your builds got 10x faster...

Kyle found that when companies talk about "building their own CI," what they actually mean is self-hosting runners from another CI provider. After analyzing hundreds of engineering teams, he identified three distinct archetypes:

First, there's "The Abstraction-First Team" - these folks know what matters and move fast. They discover Depot and immediately think, "It's ten times faster, half the price of GitHub Actions, and I just change one line of code? No brainer."

Then there's "The Infra-Curious Team" - they're in that honeymoon phase with self-hosting. "GitHub Actions is slow," so they spin up their own runners in AWS. But now they own the uptime engineering, literally, and they now have to learn how to make the builds faster AND keep them secure. 

These folks eventually become the last archetype, which I'll let Kyle cover in his post. It's linked up in your chapter data and the companion newsletter.

Thanks you to Depot for sponsoring Changelog News, check them out at Depot.dev

**Break:**

**Jerod Santo:**

[Pocket Flow is a 100-line LLM framework](https://github.com/The-Pocket/PocketFlow)

The author of Pocket Flow, Zachary Huang, thinks current LLM frameworks (LangChain, CrewAI, LangGraph, etc) are bloated. After reading Thorsten Ball's essay on how to build an agent, I can believe it. The 100 lines in Pocket Flow capture "the core abstraction of LLM frameworks" and you build on top of that to do mutli-agent, workflows, RAG, etc.

One great example of Pocket Flow in action is [this repo](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge), which "crawls GitHub repositories and builds a knowledge base from the code. It analyzes entire codebases to identify core abstractions and how they interact, and transforms complex code into beginner-friendly tutorials with clear visualizations."

**Break:**

**Jerod Santo:**

[Getting forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)

As a sole maintainer of an open source project, Philip Laine was excited when Microsoft showed interest in [Spegel](https://github.com/spegel-org/spegel), his tool designed to enhance Kubernetes cluster scalability through peer-to-peer (P2P) image distribution. But then things got... weird. At KubeCon Paris, Laine attended a talk about strategies to speed up image distribution that mentioned a Microsoft project called [Peerd](https://github.com/Azure/peerd) 

> While looking into Peerd, my enthusiasm for understanding different approaches in this problem space quickly diminished. I saw function signatures and comments that looked very familiar, as if I had written them myself. Digging deeper I found test cases referencing Spegel and my previous employer, test cases that have been taken directly from my project. References that are still present to this day. The project is a forked version of Spegel, maintained by Microsoft, but under Microsoft’s MIT license.

Spegel is also MIT licensed, which does allow for forking and modification without contributing back, but does not allow "removing the original license and purport that the code was created by someone else." Not cool, Microsoft. What's an open source maintainer to do in this circumstance?

> As an effort to fund the work on Spegel I have enabled GitHub sponsors. This experience has also made me consider changing the license of Spegel, as it seems to be the only stone I can throw.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as:

- [Exmerelda is an AI chatbot just for Elixir](https://exmeralda.chat)
- [Pipelining might be my favorite language feature](https://herecomesthemoon.net/2025/04/pipelining/)
- [Awesome collection of GPT-4o images & prompts](https://github.com/jamez-bondos/awesome-gpt4o-images)

Get in on the newsletter at changelog.com/news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
