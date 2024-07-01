**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 24st, 2024.

Can you believe this is my 100th edition of Changelog News?! Time flies when you're keeping up with the software world *the easy way*. To celebrate, I'm... well, this is probably all I'm going to do to celebrate... **\*kazoo\***

MORE IMPORTANTLY: This September, we're getting a [Zelda game](https://www.theverge.com/24180615/legend-of-zelda-echoes-of-wisdom-trailer-nintendo-direct) where SHE's the hero who has to save Link! My daughters will finally be able to stop asking me, "_When do we get to see Zelda?_" and just have fun slashing baddies with her magical staff!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[llama.ttf is a font file which is also an LLM](https://fuglede.github.io/llama.ttf/)

`llama.ttf` by Søren Fuglede Jørgensen is a font file which is also an LLM plus an inference engine for that model. Why? **\*crickets\***

How?

> The font shaping engine [HarfBuzz](https://en.wikipedia.org/wiki/HarfBuzz), used in applications such as Firefox and Chrome, comes with a [Wasm shaper](https://github.com/harfbuzz/harfbuzz/blob/main/docs/wasm-shaper.md) allowing arbitrary code to be used to "shape" text.
>
> In particular, this "arbitrary" code could in principle be an entire LLM inference engine with trained parameters bundled inside, relying on treating text containing magic symbols for fake "ligatures" to initialize the LLM and use it to generate text...
>
> what this means is that you can just use the font to run the LLM and e.g. get text generation in any Wasm-enabled HarfBuzz-based application; your favorite text editor/email client/whatever without having to wait for the vendor to include the "Copilot"-like features that everyone is rushing to implement these days. And everything runs completely locally.
>
> So perhaps this silly hack is in fact a billion dollar idea!? This also means that you can use your font to chat with your font.

If the phrases above don't make any sense (does any of this?), Søren made [a video](https://www.youtube.com/watch?v=Q4bOyYctgFI) explaining and demonstrating the entire thing.

My hope is that by embedding an LLM in a _freakin' font_ and having said font rewrite your keystrokes via inference _as you freakin' type_ we have now reached Peak LLM™️ and we can all go back to the simple life when software determinism reigned. Yeah? **\*crickets\***

**Break:**

**Jerod Santo:**

[The demise of the mildly dynamic website](https://www.devever.net/~hl/mildlydynamic)

Hugo Landau has been around long enough to write a fairly succinct history of how we make websites:

> In the beginning, website HTML was crafted by hand. Your average personal — or corporate — website might consist of hand-edited HTML subsequently uploaded, probably via FTP, to a web server which knew only how to serve static files.

Then came server-side includes, CGI & the rise of PHP:

> PHP enabled dynamic web applications for the masses. But an interesting and particular effect of the rise of PHP was that it enabled and led to the rise of what I'm going to call “mildly dynamic” websites.

Let us leave off the "web application" vs "web page" debate and simply enjoy the history lesson:

> Eventually, the era of PHP websites passed and static site generators became the new fad. Everything old is new again! First you had people who made static websites discovering dynamic websites, and then you had people who made dynamic websites discovering static websites. A consequence of this, however, has been the demise of the mildly dynamic website.

I won't quote the entire thing, because I have a modicum of self-control. But you *should* read the entire thing! Especially if you didn't live through it...

Oh, and speaking of history lessons. I gave a quick one on JS Party recently about Jekyll and how it kicked off the static site generator craze. I'll throw it in after the outro, just in case you're interested...

**Break:**

**Jerod Santo:**

[A single binary, single command SQL db explorer](https://github.com/frectonz/sql-studio)

SQL Studio is the simplest little database explorer (in a web browser) I've ever used. It's only fault is that it may be _too_ simple at the moment! Still, it's cool and I can see this tool growing in functionality as the open source community rallies around it. The best part? It works with SQLite, libSQL, PostgreSQL, MySQL & DuckDB.

Check out a screenshot in the chapter image (if your podcast app supports chapters) and follow the link in the newsletter to try it for yourself.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[End-to-end incident management in Microsoft Teams](https://firehydrant.com/blog/introducing-a-brand-new-microsoft-teams-integration/)

Danielle Long, announcing a big new feature from FireHydrant:

> We’ve gotten clear feedback from our customers that we’ve needed a strong Microsoft Teams integration. Responders want a full suite of incident management functionality, no matter what chat application their organization uses.
>
> We heard you. That’s why we’re proud to announce a brand new Microsoft Teams integration with end-to-end incident management lifecycle capabilities.

If you've been interested in FireHydrant, but held off because your org's communication is built around Teams... hold off no more! You can now  manage the complete incident lifecycle from native desktop, mobile, and web - **all without leaving Teams**. [Learn more by following the link in your chapter data and newsletter](https://firehydrant.com/blog/introducing-a-brand-new-microsoft-teams-integration/)!

Thank you to FireHydrant for sponsoring this episode of Changelog News!

**Break:**

**Jerod Santo:**

[GitHub Copilot Workspace reviewed](https://matduggan.com/reviewing-github-copilot-workspaces/)

Mathew Duggan, who had avoided AI tooling until now, was invited to try out the beta for [GitHub's new AI-driven web IDE](https://githubnext.com/projects/copilot-workspace). His results were... underwhelming. TLDR!

> GitHub Copilot Workspace didn't work on a super simple task regardless of how easy I made the task. I wouldn't use something like this for free, much less pay for it. It sort of failed in every way it could at every step.

Am I surprised by this?  Not in the least. Am I mad? No. I'm merely disappointed. The question with all of these AI tools is: how many **epic failures** will people endure before writing them off altogether? It's hard to disagree with Matthew when he says:

> Having a tool that makes stuff that looks right but ends up broken is worse than not having the tool at all.

Ouch.

**Break:**

**Jerod Santo:**

[What to do instead of mocking](https://www.amazingcto.com/mocking-is-an-antipattern-how-to-test-without-mocking/)

Mocks (objects that imitates another service) are common when writing automated tests, because they let you not concern yourself with the service they're mocking and only test your code in isolation. Mocks are also quite dangerous, for many reasons:

> Mocking is an anti-pattern. Mocking adds complexity, is hard to maintain, introduces its own bugs, doesn't test what should be tested and creates a false sense of security.

In the linked article, Stephan Schmidt lays out the case of mocking as an anti-pattern then describes a series of things you can do instead. Namely:

- More unit testing
- Easier to Test IO
- Just do IO
- Separation of logic and services / IO
- E2E integration tests

My opinion: I use mocks (sparingly) not to avoid testing integrations between my code and an external service, but when I'm testing code _around_ said integration code. In other words: it's not "instead of", it's "in addition to".

YMMV, but that strategy has served me pretty well over the years...

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up this week: We go DEEP on Semantic Versioning with [Chris Krycho](https://x.com/chriskrycho) & [Predrag Gruevski](https://x.com/PredragGruevski) on Wednesday... and [Kaizen](https://changelog.com/topic/kaizen) 15 (it's a good one) with our ol' friend Gerhard Lazu drops on Friday.

Have a great week, **leave us a 5-star review** if you dig it & I'll talk to you again real soon. 💚
