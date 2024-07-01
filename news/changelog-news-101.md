**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 1st, 2024.

At the risk of sounding like [Chicken Little](https://interestingliterature.com/2022/02/chicken-little-folk-tale-summary-analysis/) if/when things reverse course, I think we should all be aware of this concerning trend in developer job postings. Check the chapter image (if your podcast app is any good) what you'll see is:

a line chart that plots a bell curve where postings in May of 2020 ramp up to a high in Spring of 2022 and precipitously decline back to 2020 levels by May of this year.

**Grain of salt**: this data is *only* on Indeed & *only* in the US. But still, stay safe/employed out there...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[A better dotenv (from the creator of dotenv)](https://github.com/dotenvx/dotenvx)

As a long-time user of [dotenv](https://github.com/motdotla/dotenv), I was pleasantly surprised to learn of [dotenvx](https://github.com/dotenvx/dotenvx). The new version still loads environment variables from `.env` files for Node.js projects, but can also do it:

- cross-platform (via `dotenvx run`)
- in multiple environments like prod, dev, etc. (via `dotenvx -f`)
- with encryption (via `dotenvx encrypt`)

**Break:**

**Jerod Santo:**

[Everything about Chrome's new window.ai feature](https://afficone.com/blog/window-ai-new-chrome-feature-api/)

The Chrome team recently announced they're adding [built-in AI](https://developer.chrome.com/docs/ai/built-in) — a Gemini Nano AI model right inside your browser. It's currently only on Canary & hidden behind some flags, but you _can_ play with it right now if you want to. FTA:

> The new `chrome.ai` API is a game changer because it runs locally and completely offline. This feature is set to become a web browser standard, which, in the future, will enable developers to use AI models that don't rely on a third party API.

That _"this feature is set to become a web browser standard"_ part is pure conjecture, best I can tell. But, Google did mention standardization in their overview, so it's at least on the table.

Local & offline language models are coming soon to Apple devices, so the web _will_ have to eventually follow suit to stay competitive.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[A discussion with backend experts](https://sentry.io/resources/behind-the-code-a-discussion-with-backend-experts/?utm_source=changelog&utm_medium=paid-community&utm_campaign=errors-fy25q2-backendroundtable&utm_content=newsletter-be-roundtable-rsvp)

Sentry's **July 16th** "Behind the Code" session features some *amazingly talented* folks, such as:

- Taylor Otwell – Founder of Laravel
- Paul Copplestone – Founder of Supabase
- Søren Schmidt – CEO of Prisma
- Yagiz Nizipli – Node TSC Member
- Sarah Guthals – Head of DevRel at Sentry

Join this all-star cast as they chat through the latest trends, technologies & what’s next for backend development. Hear how they navigate challenges, listen to their community, and leverage cutting-edge tools to innovate fast.

**Don't miss it**: [Sign up by following the link in this chapter and the newsletter](https://sentry.io/resources/behind-the-code-a-discussion-with-backend-experts/?utm_source=changelog&utm_medium=paid-community&utm_campaign=errors-fy25q2-backendroundtable&utm_content=newsletter-be-roundtable-rsvp)!

**Break:**

**Jerod Santo:**

[Polyfill supply chain attack hits 100K+ sites](https://sansec.io/research/polyfill-supply-chain-attack)

Hopefully you already heard about this one, but just in case you haven't:

> The `polyfill.js` is a popular open source library to support older browsers. 100K+ sites embed it using the `cdn.polyfill.io` domain. Notable users are JSTOR, Intuit and World Economic Forum. However, in February this year, a Chinese company bought the domain and the Github account. Since then, this domain was caught injecting malware on mobile devices via any site that embeds `cdn.polyfill.io`.

Yesterday's best practice (loading common static assets from 3rd-party CDNs) are today's malpractice...

**Emma Bostian:**

You did not just say that!

**Jerod Santo:**

I think it's time we transpile Jeff Bezos' **Regret Minimization Framework** for decision making into one for software devs: introducing the **Dependency Minimization Framework**

**Christopher Hiller:**

That's a great idea I'm glad I had it.

**Break:**

**Jerod Santo:**

[What can we remove?](https://stephango.com/remove)

This beautiful, short piece by Steph Ango pairs gloriously with the above:

> Our bias is to always add more. More rules, more process, more code, more features, more stuff. Interdependencies proliferate, and gradually strangle us. Systems want to grow and grow, but without pruning, they collapse. Slowly, then spectacularly.

I almost want to quote the whole thing. You know what... What's stopping me?

> When a piece of trash drifts across the beach, it is our duty to pick it up so the next person can enjoy a pristine shoreline. When a thousand pieces litter the beach, it is too late. We can only lament the landscape. That’s just how beaches are now.
>
> A good system is designed to be periodically cleared of cruft. It has a built-in counterbalance. Without this pressure, our bias drives us to add band-aid after band-aid, until the only choice is to destroy the whole system and start from scratch.
>
> Why is it so much easier to add than to remove? Maybe because we attach our identity to what is visible. But there is a difference between the ornamentation that defines our style and the vestigial burdens we carry.
>
> Remember those who did the invisible work of removing. Their legacy was not to build a sand castle, but to care for the beautiful beach on which we play.

I love this. Please still go visit Steph's website so I don't feel bad about quoting this piece in its entirety!

**Break:**

**Jerod Santo:**

[Cyber Scarecrow](https://www.cyberscarecrow.com/)

I love this idea of running software in the background of your computer that makes it "scary" to viruses and malware.

> When hackers install malicious software on a compromised victim, they first check to make sure its safe for them to run. They don't want to get caught and avoid computers that have security analysis or anti-malware tools on them.
>
> Scarecrow takes advantage of this, by running in the background of your computer and 'faking' these indicators. It's super lightweight and tricks malware into thinking your computer is not the place for them to be.

The idea for Scarecrow came from reading malware analyses where they found that many malwares first check for various indicators on the compromised machine and, if detected, they will stop. I have no idea if this actually works in practice, but I do find it clever & interesting, so maybe you will too!

**Break:**

**Jerod Santo:**

That's the news for now, but I forgot to do our [Changelog++](https://changelog.com/++) SHOUT OUTS on episode 100, so let's do it now:

**SHOUT OUT** to our newest members: John H, Joshua P, Eugen D, Matthew BH, Aidan S, Magnus M, Sylvain R, Ingo V, James M, Tripp M, Blake G, Marcus B, Marco C, Jimmy S, Raphael L & Tim S!

_We appreciate you_ for supporting our work with your hard-earned cash.

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, receive a free sticker pack in the mail, directly support our work & get shout outs like the ones you just heard)

Have a great week, **leave us a 5-star review** if dig it & I'll talk to you again real soon. 💚
