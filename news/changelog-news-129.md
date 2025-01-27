**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 27th, 2024.

On one hand, there's [The Stargate Project](https://en.wikipedia.org/wiki/The_Stargate_Project): a joint venture by OpenAI, SoftBank, Oracle, et al that's aimed at investing **$500 billion** over four years to build out infrastructure that "will secure American leadership in AI."

On the other hand, there's [DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1): a Chinese AI lab's MIT-licensed reasoning model that gives OpenAI's o1 a run for *its money* and only cost **$5.6 million** to train.

It's Big Money vs Big Brain. I'm jealous of both...

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[DeepSeek-R1's epic pull request](https://github.com/ggerganov/llama.cpp/pull/11453)

Speaking of Big Brain... Xuan-Son Nguyen opened a pull request to Georgi Gerganov's llama.cpp repo that doubles the speed for WASM by optimizing SIMD instructions with the following PR comment:

> Surprisingly, 99% of the code in this PR is written by DeepSeek-R1. The only thing I do is to develop tests and write prompts (with some trails and errors) ..
>
> Indeed, this PR aims to prove that LLMs are now capable of writing good low-level code, to a point that it can optimize its own code.

I can't judge whether this is *good* low-level code or not, because I don't know what good low-level code looks like, but Georgi and Xuan-Son sure are impressed! Xuan-Son also shared [the prompts](https://gist.github.com/ngxson/307140d24d80748bd683b396ba13be07) they used to get the desired results.

This, of course, resulted in a long [X thread](https://x.com/ggerganov/status/1883888097185927311) where both humans & robots debate and meme whether or not "it's over" for folks like us or not quite yet...

**Break:**

**Jerod Santo:**

[Tailwind CSS v4.0 is official](https://tailwindcss.com/blog/tailwindcss-v4)

Adam Wathan:

> Tailwind CSS v4.0 is an all-new version of the framework optimized for performance and flexibility, with a reimagined configuration and customization experience, and taking full advantage of the latest advancements the web platform has to offer.

This looks like it was a massive undertaking. It has a new high-performance build engine, simplified installation, automatic content detection, reimagined CSS-first configuration, and too much more to list here.

**Break:**

**Jerod Santo:**

[The most influential papers in C.S. history](https://terriblesoftware.org/2025/01/22/the-7-most-influential-papers-in-computer-science-history/)

Matheus Lima opens up the history books to create this (admittedly subjective) list of influential papers, dating all the way back to 1936!

> These seven papers (sorted by date) stand out to me mostly because of their impact in today’s world.

For each paper, Matheus provides the big idea and why he thinks it still matters to this day. Here's the quick list:

1. “On Computable Numbers, with an Application to the Entscheidungsproblem” (Alan Turing, 1936)
2. “A Mathematical Theory of Communication” (Claude Shannon, 1948)
3. “A Relational Model of Data for Large Shared Data Banks” (Edgar F. Codd, 1970)
4. “The Complexity of Theorem-Proving Procedures” (Stephen A. Cook, 1971)
5. “A Protocol for Packet Network Intercommunication” (Vinton G. Cerf & Robert E. Kahn, 1974)
6. “Information Management: A Proposal” (Tim Berners-Lee, 1989)
7. “The Anatomy of a Large-Scale Hypertextual Web Search Engine” (Sergey Brin & Larry Page, 1998)

He also provides a bonus list of five papers that almost made his list, finishing with this:

> These days, we’re flooded with new stuff: fresh languages, mind-blowing AI breakthroughs, quantum leaps, and the JavaScript framework of the week. It’s all super exciting, but here’s the thing: foundations matter. Without them, we’re just piling on new toys without fully understanding the ground we’re building on.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Replay '25 in London, March 3-5](https://replay.temporal.io)

Our friends at Temporal invite you to [Replay in London, March 3-5](https://replay.temporal.io) to break free from the status quo.

Replay '25 is an in-person conference focused on transitioning away from outdated, monolithic systems and methodologies to embrace cutting edge technologies.

Immerse yourself in two days of technical talks from backend software engineering leaders at top organizations, then enjoy connecting on day 3 at the afterparty — live it up, connect, and continue conversations with food, drinks, and fun alongside your Replay community.

Early bird tickets are on sale now! Early bird pricing ends January 31, so get your ticket soon if you plan to attend.

Learn more and register at [replay.temporal.io](https://replay.temporal.io)

**Break:**

**Jerod Santo:**

[AI is creating a generation of illiterate programmers](https://nmn.gl/blog/ai-illiterate-programmers)

Namanyay Goel has a confession to make:

> A couple of days ago, Cursor went down during the ChatGPT outage.
>
> I stared at my terminal facing those red error messages that I hate to see. An AWS error glared back at me. I didn’t want to figure it out without AI’s help.
>
> After 12 years of coding, I’d somehow become worse at my own craft. And this isn’t hyperbole—this is the new reality for software developers.

He doesn't think he's the only one who's become a human clipboard, a mere intermediary between his code and an LLM.

> We’re not becoming 10x developers with AI.
>
> We’re becoming 10x dependent on AI. There’s a difference.
>
> Every time we let AI solve a problem we could’ve solved ourselves, we’re trading long-term understanding for short-term productivity. We’re optimizing for today’s commit at the cost of tomorrow’s ability.

Does this sentiment resonate with you? See also [this recent paper on metacognitive laziness](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13544)...

**Break:**

**Jerod Santo:**

[How to improve WFH lighting to reduce eye strain](https://rustle.ca/posts/articles/work-from-home-lighting)

Russell Baylis is NOT an ergonomist or optometrist. He's just a Worker-From-Home-er who is susceptible to eye strain, eye pain, and dizziness. In this post, Russell shares what he's learned about optimizing home lighting to reduce eye strain. Here's the quick list:

1. An even, diffused lighting environment is best for the eyes
2. When it comes to light brightness, too much is just as problematic as too little
3. Use natural light wherever possible
4. Quality of artificial light matters
5. The best lighting for camera, is not necessarily the best lighting for ergonomics
6. Even the perfect lighting environment will fatigue you — take breaks, and take care of yourself

Click through to see renderings of the changes he made to his environment and steal some of these ideas to improve your WFH life, just like he did.

**Break:**

**Jerod Santo:**

That's the news for now, but also join the 23k+ bright, incredibly good looking people who subscribe to our companion newsletter for even more news worth your attention. Such as: you probably don't need query builders, a great primer on Kalman Filters, and build your own airtags with openhaystack. Get in on it at changelog.com/news

ICYMI, last week we published two great shows: Ashley Jeffs on going from open source to acquired. One listener called it, "very funny, and a great guest choice + interesting story!"

And Fall Out Boy sorry Fallthrough Boys, Kris Brandow and Matthew Sanabria joined me on Changelog & Friends to discuss tools we're switching to, whether or not Go is still a great systems programming language choice, user-centric documentation, the need for archivists & more.

Find those in your feed and look forward to this week when we are joined on Wednesday by Glauber Costa to talk about Limbo, a complete rewrite of SQLite in Rust, and on Friday by Dan Moore for an "It Depends" style conversation on modern auth strategies.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
