**Jerod Santo:**

What up, nerds?! I'm Jerod and this is Changelog News for the week of Monday, May 22nd 2023.

I know, I know. We're pumpin' out 5(ish) hours of podcasts each week and some of you don't have time to keep up with all that. One friend/listener recently confessed to me that News is the only thing he listens to because, hey, it's 8 minutes short.

For those feelin' the pain, we got your back. Subscribe to our YouTube channel to get all the highlights! We also post to Instagram Reels and TikTok if that's your bag.

**Austin Powers:**

[That's not my bag!](https://www.youtube.com/watch?v=0N7tFwcgOIk)

**Jerod Santo:**

OK, let's get into the news.

**Break:**

**Jerod Santo:**

Will McGugan from [Textualize](https://www.textualize.io), who we interviewed on the pod last year, is at it again. This time he's using his TUI-creation skills to help Python dev wrap friendly terminal user interfaces around their existing command-line apps with his new project, Trogon. Will says:

> Trogon inspects your (command line) app and extracts a schema which describes the options / switches / help etc. It then uses that information to build a Textual UI you can use to edit and run the command.
>
> Ultimately we would like to formalize this schema and a protocol to extract or expose it from apps. This which would allow Trogon to build TUIs for any CLI app, regardless of how it was built. **If you are familiar with Swagger, think Swagger for CLIs**.

Swagger for CLIs could be pretty cool. Trogon only works for Python CLIs and specifically those using the Click library. But as you can see from Will's words, they have much bigger plans in the works.

**Break:**

**Jerod Santo:**

[DreamStudio](https://dreamstudio.ai) is Stability AI's hosted, powerful web app for generative image creation. It's free to try, but you quickly hit up against a paywall when you want to do any serious work with it. This is one of the ways the company (which is famous for releasing the open source Stable Diffusion models) makes money. I'm sure they have other plans to make money as well, because they raised over $100 million and you know their investors are bullish on their future profit-generating power.

Many FOSS alternatives to DreamStudio exist, but now Stability is entering the fray itself with [StableStudio](https://github.com/Stability-AI/StableStudio), a first-party community interface for generative AI!

What's the difference between StableStudio and DreamStudio? Not much. They removed some DreamStudio-specific branding, turned their API calls into a plugin system so it can talk to different backends, and yanked out business-y features like billing, API key management, et cetera. Other than that, they're the same!

I'm not sure what this means for Stability's ability to charge people for DreamStudio, but I do respect their predilection to open source what they're working on.

**Break:**

**Jerod Santo:**

John Calhoun retired from Apple 1.5 years ago after 26 years in Cupertino and was surprised to find out that he is now programming full-time again, but for himself. John says:

> Though I eventually began programming again, in the first fourteen months of retirement I did all manner of other things in my spare time as well. I kept also-busy with woodworking projects, experiments learning Blender and 3D printing, bike riding — just to name a few. But somehow this year I have found myself tipping head-long back into full-time programming. It is distinctly reminding me of my sleepless days spent writing shareware games for the Macintosh thirty-five years ago.
>
> I’m not sure if that is a good thing. I am back to coding late into the night, and back at it after coffee and an English muffin the following morning (thankfully though I quit the cigarettes decades ago). Programming is beginning again to be to the exclusion of all else in my life. (The table saw sits slowly rusting. The bike hangs on the wall in the garage.)

What's more surprising: he's coding with and against his old nemesis: C!

**The Cable Guy:**

[This is like when Spock had to fight Kirk on Star Trek. Best friends, forced to do battle.](https://www.youtube.com/watch?v=dsrmPJG0iMc)

**Jerod Santo:**

John's years of experience and hard-earned wisdom come through in his prose. I'll definitely subscribe to read more of what he writes and we might need to get him on the podcast if we can tear him away from his code editor long enough for a conversation.

**Break:**

**Jerod Santo:**

You know what time it is, Sponsored News time! cha-ching

Having a clear view of the entire operation flow of a specific action, from the frontend to the database, is a huge advantage for any project. Distributed Tracing provides exactly that, but it isn't always straight forward how to get there. That's why the Sentry team put together an 8 video series demonstrating how to use Sentry’s SDK to implement Distributed Tracing in a Next.js app. So sit back, relax and level up your skills by learning all about Distributed Tracing from the experts at Sentry.

The link is in the newsletter and chapter data. Thanks to Sentry for sponsoring this week's edition of Changelog News.

**Break:**

**Jerod Santo:**

In what appears to be a particularly security-unaware move, Google has added eight new top-level domains, two of which are quite concerning: .zip and .mov. Yikes!

Ars Technica writes:

> While Google marketers say the aim is to designate “tying things together or moving really fast” and “moving pictures and whatever moves you,” respectively, these suffixes are already widely used to designate something altogether different. Specifically, .zip is an extension used in archive files that use a compression format known as zip. The format .mov, meanwhile, appears at the end of video files, usually when they were created in Apple’s QuickTime format.

Phishers and scammers rejoice! The rest of us... beware and be ready to help protect your friends & family from this otherwise completely avoidable new threat vector. The linked Ars Technica article demonstrates a few URLs scammers could now craft and they're darn near indistringuishable from the legit URL even to someone like myself with trained eyes.

**Break:**

**Jerod Santo:**

Pablo Meier was frustrated when he and a friend sat down to discuss their differing opinions on Go and Rust, but ended up talking past each other due to their differing values. Pablo says:

> This was not a fruitful conversation, I think we both felt like we weren't valuing what the other cared about. When people talk about languages they like or dislike, I group the things people talk about into three broad categories, which I'll call **soil, surface, and atmosphere**:

He defines soil as the properties of running code in that language. Surface as the features. And atmosphere as the broader community around a language. No taxonomy is perfect, but I do find it useful to have shared nomenclature when discussing complex topics such as programming language choice. Check the post for more detailed descriptions of those and stick around to the end for some solid flamebait.

**Break:**

**Jerod Santo:**

That's the news for now. If you're hankerin' for more, scan through the companion newsletter for additional stories on data visualization techniques, an e-paper computer for hackers, writing Python like it's Rust, numbers every LLM dev should know, and more.

On Wednesday's interview show we're bringing you **three awesome convos** from the hallway track at OS Summit: Beyang Liu from Sourcegraph talkin' [Cody](https://about.sourcegraph.com/cody), Denny Lee from Databricks talkin' [Dolly 2.0](https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm) & Stella Biderman talkin' [EleutherAI](https://www.eleuther.ai).

Have a great week, **share The Changelog with a friend** who might dig it & I’ll talk to you again real soon.
