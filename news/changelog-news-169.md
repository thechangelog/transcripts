**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 10th, 2025.

So, [Spencer Chang](https://spencer.place) made a thing. A thing that made my day. 

It's called the [alive internet theory](https://alivetheory.net/) and it makes the case that "the internet will always be filled with real people: looking for each other, answering calls for help, and sharing laughs even in the midst of arguing." This is a website that's better felt than tell't, so I'll leave you to follow the link in the newsletter

[![A computer desktop from February 15, 2009 littered with various images, movies, and sounds from the internet archive on that date](https://cdn.changelog.com/news/169-alive-internet-theory.jpg)](https://alivetheory.net/)

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[This new AI role is exploding](https://www.interviewquery.com/p/ai-forward-deployed-engineer-jobs-2025)

AI-related job losses (and future non-hires) are the talk of the software town right now, but (at least in the short/near term) a new AI-led tech role has emerged with a massive increase of job postings (800%) over the last 9 months:

> Forerunners in the AI race, such as Anthropic and OpenAI, are actively recruiting software engineering specialists called forward-deployed engineers (FDEs) to help with tailoring AI models to meet customer needs. More than just working with back-office coders, these engineers are embedded within customer and product engineering teams.

Still not sure what an FDE does, exactly?

> Unlike traditional software engineers, FDEs go beyond writing code to go out in the field and understand where AI can make the biggest impact. Their mission is to bridge the “last mile” of AI: transforming a general-purpose model into scalable AI solutions that reflect complex client requirements and solve their problems.

If this trend has any staying power, and if you want to be in demand in 2026, now is the time to ensure you can confidently (and truthfully) put FDE on your resumé.

**Break:**

**Jerod Santo:**

[Younger devs won't tolerate pain in the AWS](https://www.theregister.com/2025/11/04/aws_genz_misery_nope)

Corey Quinn (who is hilarious, btw) finally realized what I've known since the first time I tried shipping a Rails app on EC2: AWS, for the uninitiated, is pure pain:

> Recently, I was spinning up yet another terribly coded thing for fun because I believe in making my problems everyone else's problems, and realized something that had been nagging at me for a while: working with AWS is relatively painful.

Corey lays out what a typical *zero-to-one* AWS setup often requires, then compares it to the silky smooth experience Vercel provides on top of AWS. His explanation for the discrepancy: it's generational

> This feels generational to me. For folks of a certain age (Gen X and Millenials), AWS and GCP have made their bones. We came of technical age with the platforms and we're used to their foibles. Azure is of course the Boomer Cloud, but Gen Z is using platforms that aren't designed as tests of skill to let customers prove how much they want something.

Hat tip to Cory for calling Azure the "Boomer Cloud". That's amazing. However, I don't think this is a generational thing. There's an entire group of elder devs, like myself, who have always preferred Heroku-style deployment platforms over AWS. 

While his view of the past seems skewed from inside the AWS bubble, he might be right about the future:

> AWS spent two decades building the most powerful cloud platform in the world. They may spend the next two watching it become irrelevant to anyone who wasn't already bought in. 

**Break:**

**Jerod Santo:**

[You should write an agent](https://fly.io/blog/everyone-write-an-agent/)

Thomas Ptacek makes the case that to truly grok LLM agents (so you can be the best hater (or stan) that you can be) you need to write one.

> Agents are the most surprising programming experience I’ve had in my career. Not because I’m awed by the magnitude of their powers — I like them, but I don’t like-like them. It’s because of how easy it was to get one up on its legs, and how much I learned doing that.

I had this experience [back in April](http://changelog.news/141) with Thorsten Ball's [post](https://ampcode.com/how-to-build-an-agent) walked me through it step by step. Thomas isn't wrong. Building one for yourself brings clarity to what is likely the most important developer-facing technology of the decade.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Why GH actions/checkout is slow for 98.5% of orgs](https://depot.dev/blog/why-organizations-have-slow-actions-checkout)

Depot just dropped another deep-dive, and this one hits home for anyone using GitHub Actions. They analyzed thousands of workflows and found that 98.5% of organizations are running actions/checkout slower than they need to.

Turns out, the default settings most teams use are...not great. Cold clones, missing shallow fetches, and bloated histories waste precious CI minutes. And this is BEFORE your build even starts. Depot's post breaks down why this happens, how much time it's costing you, and what you can do to fix it.

The takeaway? CI performance isn't just about bigger runners. It's about smarter ones. Depot's obsessed with shaving seconds off every step, and this new data proves there's a ton of low-hanging fruit hiding in your pipelines.

Read the full breakdown at depot.dev and see why speed matters more now than ever. Full link to the blog is in the newsletter.

**Break:**

**Jerod Santo:**

[Dead framework theory](https://aifoc.us/dead-framework-theory/)

Paul Kinlan says he was wrong last October when he predicted that LLMs would abstract away framework choice. Well, maybe not wrong. But wrong about the timeline.

> The reality is more interesting and more permanent: React isn’t competing with other frameworks anymore. React has become the platform. And if you’re building a new framework, library or browser feature today, you need to understand that you’re not just competing with React—you’re competing against a self-reinforcing feedback loop between LLM training data, system prompts, and developer output that makes displacing React functionally impossible.

When he says "self-reinforcing feedback loop", he's not exaggerating. TIL Replit, Bolt, and tools like them are literally hardcoding React into their system prompts.

> They have to. If you’re building a tool today to attract developers, you need to give them code they can maintain. And “code developers can maintain” now means “React” for the vast majority of web developers.

I remember back in 2022 when Josh Collinsworth [declared](https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react), "React isn't great at anything except being popular." (He even debated this with us [on a pod](https://changelog.com/jsparty/244))

Turns out that might be all it needed...

**Break:**

**Jerod Santo:**

[Stop vibe coding your unit tests](https://www.andy-gallagher.com/blog/stop-vibe-coding-your-unit-tests/)

We're still trying to figure out this agentic coding thing. 

Should we make the agent write the tests and write the implementation ourselves? 
Should we write the tests and make the agent write the implementation? 
Should we just sit back and say,  "agent, take the wheel"? 

Andrew Gallagher has thoughts:

> There is a growing sentiment [that LLMs are good for CRUD, boilerplate, and tests](https://www.assembled.com/blog/why-i-code-as-a-cto#:~:text=Knowing%20where%20AI%20shines%20(crud%2C%20tests%2C%20boilerplate)%20and%20where%20it%20fails%20(precision%2C%20system%20nuance)%20always%20beats%20making%20decisions%20based%20on%20Twitter%20hype). While I am not so sure about how good AI is at making CRUD or thumping out boilerplate, a year of working as an SWE in the modern LLM-powered AI codescape has proven to me that LLMs write unconstructive, noisy, brittle, and downright-bad unit tests. Please do not vibe code your unit tests.

Andrew does say there's a way to get good tests from LLMs, but right now it requires you to make them write tests *one at a time*. Ain't nobody got time for that!

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Reviving classic Unix games](https://vejeta.com/reviving-classic-unix-games-a-20-year-journey-through-software-archaeology/)
- [Off-grid, long range, decentralized mesh networks](https://meshtastic.org)
- [What is special about MCP?](https://jessitron.com/2025/11/09/what-is-special-about-mcp/)

Get in on the newsletter at changelog.news

Last week on the pod: Andrew Nesbitt told us all about the world of open source metadata on Wednesday, and on Friday, we played a heated game of #define with our previous champs!

Coming up this week, it's Hacker News' favorite blogger, Sean Goedecke!

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.