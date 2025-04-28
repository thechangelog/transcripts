**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 28th, 2025.

It has come to my attention (thanks, Camilo!) that this newsletter has been "redesigned" in Gmail. I have changed nothing. Google has announced [nothing](https://blog.google/products/gmail/). But the exact same email I sent a couple weeks ago looks radically different now.

Just another day in the world of distributed systems, where a complete stranger pees into the wind and you get the *privilege* of washing urine off your clothes...

Oh well, let's get into this week's news.

**Break:**

**Jerod Santo:**

[I just want to code](https://www.zachbellay.com/daily/i-just-want-to-code/)

Zach Bellay's life-long enjoyment of both a) computers, and b) hustle culture, has cultivated in him the classic angel and devil on the shoulder. 

> I constantly find the devil on my shoulder trying to convince me to start a new side hustle. Starting a new monetizable side project is like a latent addiction. Giving in feels like relapsing. The angel says don't worry about some side hustle, just do well in your day job and code for fun as a hobby. But the devil keeps telling me that you can "be your own boss" and "earn what you're worth".

Zach has decided (when this was written in 2023) that he must manage the devil, not vanquish it, because the bills will never stop coming. But he's also learned:

> that I can no longer force myself to work on things that I don't like forever, since I will burn out. As I mature, I am better honing perception for when and when not to give in to the devil's call to build something for profit.

**Break:**

**Jerod Santo:**

[AI horseless carriages](https://koomen.dev/essays/horseless-carriages/)

Pete Koomen noticed something the other day: he enjoys using AI to build software more than he enjoys using most AI applications (software built with AI). Same here!

> When I use AI to build software I feel like I can create almost anything I can imagine very quickly. AI feels like a power tool. It's a lot of fun.
>
> Many AI apps don't feel like that. Their AI features feel tacked-on and useless, even counter-productive.

Pete is beginning to suspect that "these apps are the 'horseless carriages' of the AI era. They're bad because they mimic old ways of building software that unnecessarily constrain the AI models they're built with."

To illustrate this point, Pete picks apart Gmail's AI assistant app and explains how much better it could be if they rethought it from the ground up. His biggest gripe is his inability, as the core user, to edit the system prompt, which would make all of these apps more personal/useful.

**Break:**

**Jerod Santo:**

[Open source furniture](https://hyperwood.org/)

Well, this sounds incredibly cool:

> Hyperwood is an open source system for crafting furniture from simple wooden slats... Hyperwood empowers anyone — DIY enthusiasts, designers, interior architects, and small manufacturers — to build beautiful, robust furniture using minimal tools and locally sourced materials.

The concept is intended for everyone, but the state of the project right now makes it more suitable for hackers like us. All you need to get started is a terminal, a chop saw, and some wood slats. There are two published designs so far: a bench and a trough. The trough 👇

[![A picture of the trough design after it is built with the trough command line options above it](https://cdn.changelog.com/news/142-hyperwood.jpg)](https://github.com/jo/hyperwood-trough?tab=readme-ov-file#usage)

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Next-gen Heroku is built on open standards](https://blog.heroku.com/planting-new-platform-roots-cloud-native-fir?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)


The next generation of Heroku is called Fir, and it's being built on open source standards and cloud native technologies like the Open Container Initiative (OCI), Cloud Native Buildpacks (CNBs), OpenTelemetry, and Kubernetes (K8s).

This next technology stack represents the next decade and beyond for Heroku while building on their core principle: maximize developer productivity by minimizing distractions

Here's what Terence Lee has to say about Fir:

> Fir is still the Heroku you know and love. It’s rooted in the world renowned developer experience while built on a bedrock of security and stability. We achieve this by offering seamless functionality out of the box with the flexibility to customize as needed. In today's complex development landscape, minimizing cognitive load is crucial. This allows you to focus on what truly matters: delivering value to your customers.

**Break:**

**Jerod Santo:**

[YAGRI: You are gonna read it](https://www.scottantipa.com/yagri)

Here's a fun twist on [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it), one of my favorite acronyms. You might not *need* it, but you probably are gonna *read* it.

> It means that you shouldn't just store the minimum data required to satisfy the current product spec. You should also store data that you'll highly likely use (read), such as timestamps and contextual metadata.
>
> This problem tends to happen when a UI design shows that you only need to display a few specific bits of data to the user, so you only store those exact fields in the database. You've satisfied the design and ship it. Then later you realize you're missing valuable information to help debug an issue, do internal analytics, etc.

To guard against this eventuality, the author suggests adding these fields to "almost any table"

- created_at
- updated_at
- deleted_at (soft deletes)
- created_by etc
- permission used during CRUD

See also my post from a few years back: [You might as well timestamp it](https://changelog.com/posts/you-might-as-well-timestamp-it)

**Break:**

**Jerod Santo:**

[Three myths that keep engineers stuck](https://utopianengineeringsociety.substack.com/p/the-three-myths-that-keep-engineers)

Antony Henao believes software engineers don't get stuck in their career because they lack skills, but because they follow outdated assumptions about how their careers are supposed to work. To help you get unstuck, Antony is here to debunk three common myths:

1. Someone Will Guide You
2. Promotions Are the Only Sign of Growth
3. Career Progression Is Linear

Antony wants you to pause for a moment and answer this question:

> If I could break free from these myths, how would I want my career to look?"

I like that question, especially the second half. Myths aside, it's always worth asking yourself what you want your career to look like. But more importantly, append "and why" to the end. Then you might get to the heart of what matters.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Self-host your own open source AI research agent](https://cleverb.ee)
- [A web-based, free alternative to Screen Studio](https://www.screenrecorder.me)
- 

Get in on the newsletter at changelog.com/news

Oh, and I did want you to know you can
[****]()now buy all of our [Changelog Beats](https://changelog.com/beats) albums as digital downloads direct from our [Merch Shop](https://merch.changelog.com)! And (for a limited time) use code **BOGOBEATS** to get a **FREE album** with each purchase!

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
