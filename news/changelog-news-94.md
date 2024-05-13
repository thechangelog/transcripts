**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, May 13th, 2024.

Over the weekend, OpenAI teased a big announcement for today, which made many people guess they'd launch a search engine. Turns out [no](https://twitter.com/sama/status/1788989777452408943) it was a desktop app, a slightly better GPT-4 model & other goodies, but this wave of rumors begged the ol' Netflix/HBO question:

_Can OpenAI become Google faster than Google can become OpenAI?_ My money is on... neither! Open source FTW, obvi...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Avoiding the soft delete anti-pattern](https://www.cultured.systems/2024/04/24/Soft-delete/)

I've hard deleted. I've soft deleted. I've never found a pattern that I like. In this post, Tim Fisken explains the problem with soft deletion and lays out "a number of better ways of ensuring access to old data." The problem:

> The main problem with soft deletion is that you’re systematically misleading the database. This is most obvious in the case of foreign key constraints.

Fact check: true. But what can we do instead? Tim's four alternatives are:

1. YOLO (just hard delete)
2. Lifecycle (archived state)
3. Temporal tables (lots of timestamps)
4. Data warehouse (not my problem)

I think each of these can make sense in different situations, but I tend to think YOLO + appropriately granular backups are the general strategy most people should start with.

**Break:**

**Jerod Santo:**

[A simple measure of software dependency freshness](https://libyear.com/)

A "libyear" is a newly proposed **single number** telling you how up-to-date your dependencies are. For example, Rails 5.0.0 (released in June 2016) is 1 libyear behind 5.1.2 (released June 2017). Why "libyear"?

> There are more nuanced ways to calculate dependency freshness. This approach is simple. You can explain this calculation in 30s.

I do appreciate the simplicity of this measure. To determine the overall freshness of your system, add up the libyears and see what you see:

> If your system has a one year old dependency and a three year old dependency, then your whole system is four libyears old.

In addition to explaining this simple proposal, the linked website also provides libyear calculation tools for many common languages/ecosystems.

**Break:**

**Jerod Santo:**

[The Sound of Software](https://www.notboring.software/words/the-sound-of-software)

This is the last in an excellent four-part series on the role sound plays in software design. (I previously covered [Part III: The World's Most Satisfying Checkbox](https://www.notboring.software/words/the-most-satisfying-checkbox))

> Sound is an outcast in Software Design. We may embrace the aesthetics of animation and visuals, but sound is different. It’s intrusive. Unlike visuals on a screen, you can’t look away or ignore it. It’s enough to make you rip the batteries out of a toy or frisbee an iPad across the room (speaking from experience).
>
> And yet, play a video game without sound and its powerful punch lands with no force. Without music, once moving moments in a film become dull, even comical (Jurassic Park, Rocky). Sound holds an immense power to elevate any experience—including the most boring of software.

This is a must-read for anyone who designs software and hasn't thought seriously about the sound design. They cover when to use sound, what makes good sound design, implementation details & how to get started. Good stuff!

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Find slow queries and errors in your database](https://sentry.io/resources/supabase-sentry-workshop/?utm_source=changelog&utm_medium=paid-community&utm_campaign=general-fy25q2-supabaseworkshop&utm_content=newsletter-no-headshot-rsvp)

Supabase & Sentry are teaming up to put on a workshop on **May 16th** that you might want to check out:

> In this workshop, the Supabase developer relations team will demo connecting a Next.js project to Supabase, and integrating Sentry. Learn how Supabase can improve the performance and scale of your PostgreSQL database, and how Sentry can notify you about issues in real-time and surface the context you need to fix them.

Here's what you can expect:

- Overview of Supabase and how Sentry helps
- Connecting a Next.js project to Supabase
- How to integrate Supabase with Sentry
- Code-level context and metrics available in Sentry

This event is completely **FREE**. [Sign up today by following the link in your chapter data and newsletter reserve your spot](https://sentry.io/resources/supabase-sentry-workshop/?utm_source=changelog&utm_medium=paid-community&utm_campaign=general-fy25q2-supabaseworkshop&utm_content=newsletter-no-headshot-rsvp)!

**Break:**

**Jerod Santo:**

[Handy tools for developers](https://it-tools.tech)

This web app hosts 80+ little tools you might need as you go about your daily development work. It has generators (UUIDs, pass phrases, QR codes), it has converters (JSON to CSV, YAML to TOML, TOML to JSON), it has web tools (URL parser, slugify string, emoji picker), it has... you get the point.

And since each tool is implemented as an [open source Vue component](https://github.com/CorentinTh/it-tools/tree/main/src/tools), it's easy to poke under the covers and copy how they work into your own codebase.

**Break:**

**Jerod Santo:**

[Programming mantras are proverbs](https://lukeplant.me.uk/blog/posts/programming-mantras-are-proverbs/)

A good reminder from Luke Plant that it's easy for us to take programming mantras (DRY, YAGNI, WET, etc.) too much like laws and not enough like proverbs. Why proverbs?

> Proverbs encapsulate a small bit of wisdom in a pithy phrase, but you still need to learn to apply that wisdom correctly.
>
> Good proverbs are also supposed to make you **think**. They slow you down before you leap into something that is likely to be bad, or they help you reflect on what did go wrong.

He goes on to illustrate this using Proverbs 26:4-5 (a favorite of mine) which says:

> 4: Do not answer a fool according to his folly, or you yourself will be just like him.
>
> 5: Answer a fool according to his folly, or he will be wise in his own eyes.

Luke's overarching point is that we need to slow down and think through our decisions vs blindly following a rule or a mantra. It depends! This is why I've long had a mantra of my own: [Slow down to go faster](https://changelog.com/posts/slow-down-to-go-faster)

**Break:**

**Jerod Santo:**

That's the news for now, but don't forget to scan the companion newsletter for even more, including: [The search for easier safe systems programming](https://www.sophiajt.com/search-for-easier-safe-systems-programming/), [How Ahrefs gets a billion dollar-worth infra with a 90% discount](https://tech.ahrefs.com/how-ahrefs-gets-a-billion-dollar-worth-infrastructure-with-a-90-discount-5edd473b2399) & [Slop is the new name for unwanted AI-generated content](https://simonwillison.net/2024/May/8/slop/).

We have some great episodes coming up this week: Birk from [Polar](https://polar.sh) (Wednesday) & Alex Kretzschmar from Tailscale (Friday).

Have a great week, **forward this to a friend** who might dig it & I'll talk to you again real soon. 💚
