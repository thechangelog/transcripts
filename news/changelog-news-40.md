**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 17th 2023.

Good news, everyone! Our companion Changelog News(letter) now has 100% more dark mode support. Thanks to the many, many readers who hit reply and let us hear about it last week.

**Darth Vader:**

You don't understand the power of the dark side.

**Jerod Santo:**

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

GitHub Accelerator launched their first cohort last week. First time hearing about it? First announced last November, GitHub Accelerator is a 10-week program where open source maintainers receive an initial sponsorship of $20K to work on their project, paired with guidance and workshops from open source leaders, with an end goal of building durable streams of funding for their work.

Kara Deloss announced the 2023 cohort which spans 20 projects and 32 participants from all over the world. Check Kara's blog post for the full list, but here's a few of the repos that will sound familiar to Changelog listeners:

- htmx, Carson Gross's library which makes AJAX, Web Sockets, and more available directly in HTML
- nuxt, The Vue community's framework for building web applications
- and datasette, Simon Willison's open source multi-tool for exploring and publishing data

**Break:**

**Jerod Santo:**

Hello, Dolly!

**Louie Armstrong:**

[Hello Dolly](https://www.youtube.com/watch?v=l7N2wssse14)

**Jerod Santo:**

Earlier this month, the team at DataBricks released Dolly, a large language model (LLM) trained for less than $30 to exhibit ChatGPT-like human interactivity (aka instruction-following).

Two weeks later, they released Dolly 2.0: the first open source, instruction-following LLM, fine-tuned on a human-generated instruction dataset licensed for research and commercial use.

Licensed for commercial use? That seems like a big deal to me... What this means is that any organization can create, own, and customize powerful LLMs that can talk to people, without paying for API access or sharing data with third parties.

Databrick's announcement post goes into detail on how they made it, including how they crowdsourced 13,000 demonstrations of instruction from their own employees. Fascinating stuff...

This is, in my opinion, a huge step toward bringing production-grade LLMs to all, but just how good is Dolly 2 when compared to results you'd get from bellying up to an API from one of the big providers? The Databricks team says:

"As a technical and research artifact, we don't expect Dolly to be state-of-the-art in terms of effectiveness. However, we do expect Dolly and the open source dataset will act as the seed for a multitude of follow-on works, which may serve to bootstrap even more powerful language models."

**Break:**

**Jerod Santo:**

Tailscale Engineer Mihai Parparita writes how he improved Tailscale thanks to Apple's open source. Mihai says, "The ability to peek under the hood of the operating system can be a powerful tool for debugging... A recent blog post by Daniel Jalkut struck a very familiar chord with me, reminding me of times I spent poring through WebKit internals at my previous employer. I've been able to continue that pattern at Tailscale, now more focused on Darwin (the operating system at the core of macOS and iOS), its kernel and its userland tools."

He goes on to tell a tale of how he fixed two network-interface related bugs by reading Apple's implementation of ifconfig. (ifconfig, that's what I call it at least, is a tool for configuring network interfaces on Unix systems.)

Mihai's post served as a solid reminder to me just how cool it is to be able to peak under the hood of the platforms we build upon. To learn, to adapt, and sometimes to get our job done.

**Break:**

**Jerod Santo:**

Up next a solid writeup by Arnaud Lauret at Postman on how to enhance your API-first design process. What makes this post different from the rest? It's sponsored content. Yes, for the first time ever on Changelog News we're making money. What a concept!

Now, if you despise sponsored content have I got a deal for you. Check it out at changelog.com/++

On the other hand, if you're cool with sponsored posts as long as they're actually good and interesting, let's get into it.

Arnaud says API-first design should be "reusable, interoperable, modifiable, user-friendly, secure, efficient, pragmatic, and—crucially—aligned with the organization's goals." He then explores how you can achieve an API-first design by integrating the following five actions into your API design process:

1. Use natural language to analyze and challenge needs
2. Observe context and identify constraints
3. Fully describe and document your APIs
4. Leverage existing APIs and guidelines
5. Integrate automated and human feedback loops into the process

Read Arnaud's full post for the details on those five actions. And for even more, check out the book they're writing on the subject.

Thanks to our friends at Postman for putting out good content for the developer community and for sponsoring this episode of Changelog News.

Oh, and if your organization could benefit from a Changelog News sponsorship. Please do get in touch.

**Break:**

**Jerod Santo:**

Passkeys: what the heck and why?! That's the question asked and answered by Neal Fennimore on a recent CSS-Tricks post. I've been wondering the same thing... Neal says, "They were a main attraction at W3C TPAC 2022, gained support in Safari 16, are finding their way into macOS and iOS, and are slated to be the future for password managers like 1Password. They are already supported in Android, and will soon find their way into Chrome OS and Windows in future releases."

So it's probably something you want to learn more about. In fact, we had an episode request a little while back asking us to do an interview with somebody from Apple on the topic. I tried hooking up with someone, but no dice. If you want that to happen, let us know and I'll work on it harder.

Anyways, back to passkeys. In brief, passkeys are a specification that is built on top of WebAuthn, which allows for public key cryptography to replace passwords. Instead of presenting something you _know_ to prove your authenticity, you present something you _have_, which is a hardware device holding your private key. The challenge with this historically is that sometimes you lose that thing you _have_, which means you don't have it anymore and you're locked out. Passkeys build on WebAuthn by providing cloud sync of your credentials to other devices you have. Hence, iOS and Android play a big role here.

That's as far as I'll go into it on the pod, but Neal's post goes into extreme detail. It's a great primer, for anyone who's curious.

**Break:**

**Jerod Santo:**

That is the news for now. Of course, there are more noteworthy things going on in the software world. Which is why today's companion email has an additional 19 links for you to comb through.

**Space Balls:**

[We combed this entire desert and ain't found...](https://www.youtube.com/watch?v=g4OBUupicWg)

**Jerod Santo:**

You can read it right now by following the link in your show notes. Or get it delivered directly into your inbox by popping your email into the form at changelog.com/news

**Ben Stiller:**

do it DO IT.

**Jerod Santo:**

On this week's interview episode of The Changelog, Adam and I are joined by Zach Latta. Zach dropped out of high school after his freshman year to work in tech and had over 5 million people using his software by the time he turned 17. He has since gone on to found Hack Club, the program he wished he had in high school.

Have a great week, share Changelog with your friends if you dig it, and we'll talk to you again real soon.
