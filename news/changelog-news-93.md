**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, May 6th, 2024.

Mere days before Google [proudly announced](https://blog.google/technology/safety-security/google-passkeys-update-april-2024/) that over 400 million accounts have used passkeys, William Brown (developer behind [webauthn-rs](https://crates.io/crates/webauthn-rs)) penned [Passkeys: A Shattered Dream](https://fy.blackhats.net.au/blog/2024-04-26-passkeys-a-shattered-dream/), in which he describes how corporate greed from Apple and Google destroyed our passkeys-based future.

How's that for some 2024-style, tech-distopia juxtaposition...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Why your framework doesn't matter](https://gebna.gg/blog/brief-history-of-web-development)

Bahaa Zidan takes us on a brief history of web development ("Remember websites?") then reminds us why the framework we choose doesn't really matter:

> Wanna keep using React? Wanna switch to something better like Svelte? Wanna avoid JavaScript like the plague and use HTMX? It doesn’t matter to the end user. As long as you’re providing value to people and/or having fun doing it, you’re good. Don’t feel bad about your technical choices because someone on the internet wants you to.

I agree wholeheartedly with this sentiment, but would temper Bahaa's premise just a bit. It's not that your framework of choice doesn't matter, it's that it doesn't matter nearly as much as you've likely been led to the believe.

**Break:**

**Jerod Santo:**

[Magic machines](https://world.hey.com/dhh/magic-machines-10c534bd)

DHH writes about a phenomenon that I've both noticed and _inhabited_ in my software career:

> There's an interesting psychological phenomenon where programmers tend to ascribe more trust to computers run by anyone but themselves. Perhaps it's a corollary to imposter syndrome, which leads programmers to believe that if a computer is operated by AWS or SaaS or literally anyone else, it must be more secure, better managed, less buggy, and ultimately purer.

The logic I've employed when coming to this conclusion goes something like this: "They have more X resources, more X knowledge & (arguably) more to lose than I do if X fails, so they've gotta be better at managing X than me."

David's not buying what I'm selling:

> There's no magic class of computers and no magic class of computing clerics. "It works on my computer" is just the midwit version of "it works on THAT computer". It's all just computers. You can figure them out, you can make them dance.

Are you buying what _he's_ selling?

**Break:**

**Jerod Santo:**

[Reviewing 1,000s of opinions on HTMX](https://konfigthis.com/blog/htmx/)

Speaking of frameworks, here's Dylan Huang on the new(ish) hotness:

> [HTMX](https://htmx.org) has brought an absolute whirlwind of controversy with its radically different approach to building user interfaces. Some folks are skeptical, others are excited, and others are just curious....
>
> To analyze how developers truly feel about HTMX, I went to where developers live: Reddit, Twitter, Hacker News, and YouTube. I parsed 1,000s of discussions and synthesized my findings in this article, striving to present only thought-provoking opinions.

What resulted was a radically diverse set of opinions ranging everywhere from "HTMX is just hype" to "HTMX makes you productive." You can click through and read some of the spiciest opinions if you're interested, but here's Dylan's big takeaway, which is quite a bit less spicy, maybe even a bit _bland_:

> Competition is good. HTMX is thought-provoking, but I think its great because it forces developers to entertain new and novel ideas. Developers can often be wary and cautious of new technologies, since it might not be solving a personal problem they are already facing. But for the developers that are resonating with HTMX, there is an enthusiastic group of developers who are starting to use it in production.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[3 questions to ask of any DevOps tool in 2024](https://firehydrant.com/blog/3-questions-to-ask-of-any-devops-tool-in-2024/)

FireHydrant CEO (and recent [Changelog guest](https://changelog.com/friends/34)) Robert Ross:

> Is your DevOps tool stack out of control? I feel like every day, I talk to someone who feels this pain. The technological golden age of the past few years created a lot of niche tools, but now that CFOs and boards alike are demanding budget restraint, many of these tools are being scrutinized.

If you're one of the many tech workers currently being asked to evaluate your tools, he gives you 3 questions to ask:

1. Will this tool help me reclaim time through automation?
2. Will this tool help me ensure accuracy?
3. Does this tool help me identify efficiency and value?

Read [the whole thing](https://firehydrant.com/blog/3-questions-to-ask-of-any-devops-tool-in-2024/), where Robert fleshes out these questions with data, examples & the _why_ behind each.

**Break:**

**Jerod Santo:**

[Programming is mostly thinking](http://agileotter.blogspot.com/2014/09/programming-is-mostly-thinking.html)

Tim Ottinger (in 2014) makes the assertion that "programming is 11/12ths thinking", then goes on to show why that is (at least approximately) the case. Then, based on that fact, makes this provocative conclusion:

> If programming is 1/12th motion and 11/12ths thinking, then we shouldn't push people to be typing 11/12ths of the time. We should instead provide the materials, environment, and processes necessary to ensure that the thinking we do is of high quality.
>
> Doing otherwise is optimizing the system for the wrong effect.
>
> What if we changed our tactics, and intentionally built systems for thinking together about software and making decisions easier to make? I think that productivity lies in this direction.

**Break:**

**Jerod Santo:**

[Small language models FTW?](https://medium.com/cloudera-inc/small-language-models-sml-for-the-win-ea0c6fee8061)

Tim Spann shares a sentiment which I _very much_ want to be true (because it reduces our dependency on large-cap model providers), but I _honestly don't know_ if it's true or not:

> I don’t need a model that knows a little bit about a lot of things up to last year. I need a model that knows everything about Apache NiFi or Python programming or how Bitcoin works. Not only are these trained on just the problem space, but they can run faster and on smaller hardware. We can usually run on smaller, cheaper machines with simple or no GPUs with just CPU.

Maybe this large-vs-small model debate won't matter in the long run as all models become open source commodities. Or maybe the move will be to take an off-the-shelf, open source, large model and RAG it (and/or fine-tune it) to specific problem spaces. How do you think this will play out?

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for more stories, like the Pareto principle applied to Mario Kart 8, woodworking as an escape from the absurdity of software, and the heat death of the Internet.

We have some great episodes coming up this week: On Wednesday, we talk to Paul Orlando about his new book, [Why Now? How Good Timing Makes Great Products](https://www.amazon.com/Why-Now-Timing-Makes-Products/dp/B0CYXSNMT3) and on Friday, we're joined by Annie Sexton from [Git your reset on](https://changelog.fm/480)!

I'll leave you with this quote from Shopify's Tobi Lutke: "Not all fast software is world-class, but all world-class software is fast. Performance is _the_ killer feature."

Have a great week, **share Changelog News with your friends** who might dig it & I'll talk to you again real soon. 💚
