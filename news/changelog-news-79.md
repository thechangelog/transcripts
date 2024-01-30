**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 29th, 2024... but recorded on the previous Saturday, because on Monday Adam & I will be hallway trackin' it at [THAT Conference](https://thatconference.com/tx/2024/). Stop by if you'll be there. We'll also be recording on the main stage at 4pm and _frontend feuding_ at game night!

By the way, I'm not covering the Apple vs EU App Store story. It's big & complicated! Also there's lots of [good](https://daringfireball.net/2024/01/apples_plans_for_the_dma) [coverage](https://www.theverge.com/2024/1/26/24051823/apple-third-party-app-stores-50-cent-fee) of it. Which I link up in the newsletter.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Pooya Parsa, creator of [UnJS](https://unjs.io) and one of the maintainers of [Nuxt](https://github.com/nuxt/nuxt), writes what so many maintainers have (or haven't, but wanted to) write before:

"The thing is, maintaining multiple open-source projects is not as easy as you might imagine. As a full-time open-source maintainer, I roughly receive more than 200 notifications every 12 hours plus random messages and all are expected to be responded to. They often come from completely different people with different contexts, skill levels, priorities concerns, and so on."

He goes on to describe various circumstances in which messages come to him and responses from a tired maintainer. One example, when discussing pull requests you'd like to see merged, Pooya says: "In all cases, please BE PATIENT. Be sure that maintainers love nothing more than triaging PRs and moving them forward. Please understand that making decisions in a project is not as easy as you might think. Most of the time there is more context that you might be less aware of."

Good stuff to know if you're not a maintainer. Even better, send this to your maintainer friends. Maybe they can add more letters for other tired maintainers.

**Break:**

**Jerod Santo:**

Zed, the multiplayer code editor from the team behind Atom, is now open source. Listeners of [our conversation with Nathan Sobo](https://changelog.com/podcast/531) on The Changelog know, this has been on Nathan's mind for a very long time.

> We're excited to announce that Zed is now an open source project. The code for Zed itself will be made available under a copyleft license to ensure any improvements will benefit the entire community (GPL for the editor, AGPL for server-side components). GPUI, the UI framework that powers Zed, will be distributed under the Apache 2 license, so that you can use it to build high-performance desktop applications and distribute them under any license you choose.

They also took this opportunity to introduce _Fireside Hacks_ based on a new Zed feature called Zed Channels.

> Starting tomorrow, we'll be using Channels to run a new program called Fireside Hacks, in which we'll be streaming into a public channel regularly we work on Zed live with whoever shows up. We'll be experimenting with different formats, but we're hoping these regular sessions give us all an opportunity to get to know each other better, beyond what's possible in a static pull request.

I love this idea! Unfortunately, I missed the first stream, but I'm excited to see if and how this format takes off.

**Break:**

**Jerod Santo:**

Ollama is an [open source](https://github.com/ollama/ollama) effort to help devs run llama2, mistral & [many other](https://ollama.ai/library) language models on your own hardware. This week, they [released](https://ollama.ai/blog/python-javascript-libraries) Python & JavaScript libraries:

> Both libraries make it possible to integrate new and existing apps with Ollama in a few lines of code, and share the features and feel of the Ollama REST API.

Now you can `pip install ollama` or `npm install ollama` to be up and running in no time. Basic usage requires very little code. Cool stuff! Worth a try.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News.

[NATS](https://nats.io) is becoming the **go-to open source tech** that brings secure, multi-tenant, connectivity-first thinking to distributed systems design that scales with your application and your organization.

Use a single developer SDK to build all of your core services and data streams. Pub-sub? Request-reply? Data streaming? Key-value storage? Object storage? NATS does that!

Synadia helps teams take NATS to the next level with a global, multi-cloud, multi-geo & extensible service that is fully managed. Learn more and try it out for FREE by going to [synadia.com/changelog](https://synadia.com/changelog)

**Break:**

**Jerod Santo:**

When Taylor Troesh was on The Changelog last year, I asked him about [Scrapscript](https://scrapscript.org), his in-development programming language that solves the _software sharability_ problem. At the time, the project's status:

> I hope it comes out in 2024. I just put that there because it’s not coming out this year. \[laughs\]

And when I drilled down on the project's status, Taylor said:

> The only reason it’s private right now is I’m trying to get – I’ve already been getting some feedback and trying to tune a few more things in private, so that when I put it out, I think everyone can have like a little bit more fruitful discussion…
>
> I don’t know, it’s hard as an open source person trying to make something…

That was the beginning of the story, from my perspective. But little did I know about Max Bernstein & Chris Gregory. Max:

> In April of 2023, I saw scrapscript posted on Hacker News and sent it to Chris. We send each other new programming languages and he’s very into functional programming, so I figured he would enjoy it. He did!
>
> But we didn’t see any links to download or browse an implementation, so we were a little bummed. We love trying stuff out and getting a feel for how it works. A month or two passed and there still was not an implementation, so we decided to email Taylor and ask if we could help.

This was the beginning of a beautiful <strike>friendship</strike> [implementation](https://github.com/tekknolagi/scrapscript) that Max writes all about in the linked blog post.

**Break:**

**Jerod Santo:**

I volunteered to judge the last couple [React Game Jams](https://reactjam.com). (It's a fun way to help out and all I have to do is play some video games with my kids and talk about which ones we like the best!) As a result, I've come to know of the [Rune](https://www.rune.ai) platform for multiplayer mobile games. Looks like the folks behind Rune would like more people to know about it:

> We at Rune believe that tons of amazing multiplayer games are just waiting to be made by talented indie devs. We've created this $100k grants program to help such indie devs and grow the open-source web game community. Based on us searching GitHub, we've found only 25 open-source multiplayer JS games. We hope that these grants will dramatically boost the ecosystem!

$500 "spark" grants and $5000 "ignite" grants are both on offer. If you needed a good excuse to finally build that game you've been thinking about forever...

**Break:**

**Jerod Santo:**

Let's finish up this week's episode with a quick list of new tools for your software trade.

- [remoteStorage](https://remote.storage) persists data across browsers & devices reusing the localStorage API
- [dive](https://github.com/wagoodman/dive) is a tool for exploring each layer in a docker image
- [deadcode](https://go.dev/blog/deadcode) finds unreachable functions in Go programs
- [Tart](https://tart.run) is a virtualization toolset to build, run & manage macOS / Linux VMs on Apple Silicon
- [Refine](https://github.com/refinedev/refine) is a React framework for building internal tools with "unmatched flexibility"
- [WhisperSpeech](https://github.com/collabora/WhisperSpeech): is a text-to-speech system built by inverting Whisper
- [Keploy](https://keploy.io): converts user-traffic to test cases and data stubs
- [pgxman](https://pgxman.com) is like npm, but for Postgres extensions
- [verto.sh](https://www.verto.sh) isa directory of open source projects that are beginner-friendly

Find links to all of these tools in the companion newsletter.

**Break:**

That's the news for now! Have a great week, **tell your friends about Changelog News** if you dig it, and I'll talk to you again real soon. 💚
