**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 22nd, 2024.

Friday's CrowdStrike outage sent shockwaves through every Windows-dominated industry. Hospitals, banks & airlines were hit particularly hard. Delta, American, Spirit, Frontier, United & Allegiant all had issues, but [not Southwest](https://www.yahoo.com/tech/windows-version-1992-saving-southwest-171922788.html). How'd they do it? By running their entire operation on Windows 3.1 and Windows 95 machines! They don't make 'em like they used to...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[No more blue Fridays](https://www.brendangregg.com/blog/2024-07-22/no-more-blue-fridays.html)

Brendan Gregg sprinkles some optimism on the waste & wild landscape left behind after Friday's "largest outage in the history of information technology."

>  For Linux systems, the company behind this outage was already in the process of adopting eBPF, which is immune to such crashes. Once Microsoft's [eBPF support for Windows](https://github.com/microsoft/ebpf-for-windows) becomes production-ready, Windows security software can be ported to eBPF as well. These security agents will then be safe and unable to cause a Windows kernel crash.

He goes on:

> The worst thing an eBPF program can do is to merely consume more resources than is desirable, such as CPU cycles and memory. eBPF cannot prevent developers writing poor code -- wasteful code -- but it will prevent serious issues that cause a system to crash.

And finishes with this call to action:

> If your company is paying for commercial software that includes kernel drivers or kernel modules, you can make eBPF a requirement. It's possible for Linux today, and Windows soon. While some vendors have already proactively adopted eBPF (thank you), others might need a little encouragement from their paying customers. Please help raise awareness, and together we can make such global outages a lesson of the past.

**Break:**

**Jerod Santo:**

[GitHub is starting to feel like legacy software](https://www.mistys-internet.website/blog/blog/2024/07/12/github-is-starting-to-feel-like-legacy-software/)

Misty De Meo, writing about her frustrating experience using GitHub's `blame` view:

> I’d heard rumblings that GitHub’s in the middle of shipping a frontend rewrite in React, and I realized this must be it. The problem wasn’t that the line I wanted wasn’t on the page—it’s that the whole document wasn’t being rendered at once, so my browser’s builtin search bar just couldn’t find it. On a hunch, I tried disabling JavaScript entirely in the browser, and suddenly it started working again. GitHub is _able_ to send a fully server-side rendered version of the page, which actually works like it should, but doesn’t do so unless JavaScript is completely unavailable.

I've stumbled across a fair number of UI bugs in recent months, myself. But Misty isn't solely pinning the "legacy software" vibes on the fallout of a React rewrite:

> The corporate branding, the new “AI-powered developer platform” slogan, makes it clear that what I think of as “GitHub”—the traditional website, what are to me the core features—simply isn’t Microsoft’s priority at this point in time. I know many talented people at GitHub who care, but the company’s priorities just don’t seem to value what I value about the service.

I can't tell if Microsoft is ignoring GitHub or if they're just busing helping their customers recover from largest outage in the history of information technology...

**Break:**

**Jerod Santo:**

[Why I hope Rust does not oxidize everything](https://gavinhoward.com/2024/07/why-i-hope-rust-does-not-oxidize-everything/)

Gavin D. Howard is NOT against Rust, but he IS against Rust being used for everything.

> Don’t let Rust infect *everything*. Don’t let the culture of the programming industry shift towards Rust or bust. If you make your choice between alternatives purely by if one was written in Rust, *you are the problem*.
>
> Rust does not automatically make things better. It should be used where it can make things better, but not any more than that.
>
> In other words, a programming language monoculture would be disastrous for our industry. Don’t let it happen.

If ever there were a time to warn your fellow developers about the danger of monocultures, it'd be right after a single vendor caused the largest outage in the history of information technology...

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Intel Innovation 2024 – Accelerate the Future!](https://reg.oneventseries.intel.com/flow/intel/innv2024/InnovationReg/login)

Registration is now open for [Intel Innovation 2024](https://reg.oneventseries.intel.com/flow/intel/innv2024/InnovationReg/login) in San Jose, CA!

> This event is all about you – the developer and technologist community – and the critical role you play in tackling the toughest challenges across the industry. Ignite your passion for AI and beyond, grow your skills to maximize your impact, and network with your peers as we unleash the next wave of advancements in technology.

Hear from industry experts, technologists, entrepreneurs & fellow developers along with Intel leaders:

- CEO Pat Gelsinger
- CTO Greg Lavender

Don't miss early bird pricing! It ends August 2nd. Register today using the link in chapter data and the newsletter and thank you to Intel for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[How we sped up Notion in the browser with WASM SQLite](https://www.notion.so/blog/how-we-sped-up-notion-in-the-browser-with-wasm-sqlite)

The Notion team published a deep dive into how they used the [WASM version of SQLite](https://sqlite.org/wasm/doc/tip/about.md) to improve browser performance:

> Using SQLite improved page navigation times by 20 percent in all modern browsers. And the difference was even more pronounced for users who are subject to especially slow API response times due to external factors like their Internet connection. For example, page navigation times sped up by 28 percent for users in Australia, by 31 percent for users in China, and by 33 percent for users in India.

It wasn't easy. They had to develop a novel shared ServiceWorker approach (where only one tab access SQLite at a time) & overcome multiple major stumbling blocks along the way. I love engineering deep-dives like this, they're great reading while you wait for those Windows machines to reboot in the wake of the largest outage in the history of information technology...

**Break:**

**Jerod Santo:**

[How to build good relationships inside and outside your engineering team](https://newsletter.eng-leadership.com/p/how-to-build-good-relationships-inside)

This article by Gregor Ojstersek might help you out in more than just your work environment:

> ...engineers who are considered high performers often have two things:
>
> - Their overall skillset is at a high level.
> - They have good communication & collaboration abilities which helps them build good relationships with their colleagues.
>
> So, building good relationships is a prerequisite to success in the role.
>
> Remember, Software Development is a team sport and relationships play a huge part in contributing effectively.

Gregor goes on to detail three main pieces of advice, all of which I can co-sign:

1. Be genuinely interested in getting to know your colleagues better
2. Actively put in the effort to understand their problems and help resolve them
3. Focus on asking great questions instead of making strong opinionated statements + say “I don’t know” if you don’t know

The hard part about #1 is the "genuinely" bit. That means you actually have to care. But if you do, that makes #2 much easier. How do you gin up genuine interest, if it isn't already there? I don't know, maybe ask them if they, too, were impacted by the largest outage in the history of information technology...

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up: Adam Lisagor from Sandwich joins us on Wednesday and on Friday, Robert Ross from FireHydrant is coming on Friends to talk with us about, you guessed it,
the largest outage in the history of information technology.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
