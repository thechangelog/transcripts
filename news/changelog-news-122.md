**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 25th, 2024.

Who would've thought that [Ben Affleck's take](https://www.cnbc.com/video/2024/11/13/ai-doesnat-stand-a-chance-against-actors-or-shakespeare-ben-affleck-says.html) on AI replacing Hollywood actors would so well represent *my* take on AI replacing software engineers...

**Ben Affleck:**

AI can write you excellent imitative verse that sounds Elizabethan. It cannot write you Shakespeare. The function of having actors in a room and the taste to discern and construct that is something that currently entirely eludes AI's capability and I think will for a meaningful period of time...

**Jerod Santo:**

Well said, Ben. Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Busting the ghost engineers (0.1x-ers)](https://threadreaderapp.com/thread/1859290734257635439.html)

From *Ghost Jobs* to *Ghost Engineers*. Is our industry haunted? Here's Stanford researcher, Yegor Denisov-Blanch:

> I’m at Stanford and I research software engineering productivity. We have data on the performance of >50k engineers from 100s of companies. **~9.5% of software engineers do virtually nothing**. How do we know 9.5% of software engineers are Ghosts?
>
> Our model quantifies productivity by analyzing source code from private Git repos, simulating a panel of 10 experts evaluating each commit across multiple dimensions.
>
> We've published a paper on this and have more on the way...

Turns out, the news gets worse the further away from the office you get:

- Remote work: 14% ghosts
- Hybrid work: 9% ghosts
- In office work: 6% ghosts

Maybe studies like this one are helping inform many orgs' RTO policies? Fascinating stuff. Check Yegor's full thread for more findings.

**Break:**

**Jerod Santo:**

[Electrobun is a fresh take on Electron](https://www.electrobun.dev)

This ambitious (but just getting started) project "aims to be a complete solution-in-a-box for building, updating, and shipping ultra fast, tiny, and cross-platform desktop applications written in Typescript."

It uses [Bun](https://bun.sh/) to execute the main process and has native OS bindings written in [Zig](https://ziglang.org/). The end result is small app bundles (~12MB), even smaller app updates (using bsdiff) & everything you need in one tightly integrated workflow. But!

> Electrobun is in the very early stages. We currently only support development on arm macs, it has memory leaks, has no tests, it's not available in npm yet, and many core things are still missing.

If this is attractive to you, now is a good time to star the repo for later or hop in and start contributing.

**Break:**

**Jerod Santo:**

[Handling cookies is a minefield](https://grayduck.mn/2024/11/21/handling-cookies-is-a-minefield/)

April King opens this deep-dive with an all-too-familiar phrase...

> I had been more than content to ignore the vagaries of how cookies function until the end of time, except that one day I stumbled across this innocuous piece of JavaScript

You probably want the meat of her post, too, but I'll jump to the end for the *why this matters* part:

> When I first discovered this in the real world, it was only through sheer luck that it wasn't a catastrophe. A manual tester was playing around with a third-party library update and had run into a strange set of errors on our testing site. Without bringing it to my attention, this update — doing something unlikely to be caught in automated testing — would have certainly been pushed to production. As a result, every future website visitor would have received a broken cookie and been locked out with an inscrutable error until the update was reverted and the cookies were cleared out.
>
> And that's exactly the problem with this specification ambiguity — it's such an easy mistake to make that millions of websites and companies are only an intern away from a complete meltdown. And it doesn't only affect tiny websites on obscure frameworks, as major websites such as Facebook, Netflix, WhatsApp, and Apple are affected.

One enduring quality of our software systems: it is far too easy to unknowingly make catastrophic mistakes! When will we learn?

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Not your grandma's SQLite](https://www.youtube.com/watch?v=XP-h304N06I)

Another awesome video from our friend Annie Sexton on Fly's YouTube channel!

> It's entirely possible to have strong disaster recover AND distributed replicas with SQLite when using Litestream and LiteFS. In this video I chat with Litestream and LiteFS creator Ben Johnson about how this can be done.

Here's a taste...

Watch the full video on Fly's awesome YouTube channel. Link in the newsletter and chapter data.

**Break:**

**Jerod Santo:**

[A career ending mistake](https://bitfieldconsulting.com/posts/career)

John Arundel says when it comes to this post: you came for the schadenfreude, but you’ll stay for the thought-provoking advice.

> This isn’t about the time I inadvertently shut down one of Britain’s nuclear power stations, an entirely true story for which the world is nevertheless not yet prepared. Nor is it about the poor junior developer who accidentally destroyed the production database on their first day (they’ll be fine, bless them).
>
> Instead, I want to talk about another kind of career ending mistake, one that affects more than just the unlucky few. Indeed, it’s a mistake we’re probably all making right now. And that’s *not planning the end of our careers*.

Kudos to John on the excellent word-play there. The career ending mistake is not planning the end of our careers. Got it! Now, what exactly does it mean to plan the end of your career? He describes that by answering questions like:

> Where will you be when you realise that this is where you’ve always wanted to be? Where do you want to end up? And is that where you’re currently heading? If not, what should you do about it?

**Break:**

**Jerod Santo:**

[It's a coding Font Off!](https://www.codingfont.com/)

Do you remember in Ben Stiller's (classic comedy) [Zoolander](https://en.wikipedia.org/wiki/Zoolander) when Derek and Hansel (so hot right now) wanted to determine who was rally the hottest male model? The only way to know that truth was a [Walk Off](https://www.youtube.com/watch?v=InIxKCa3H9g)... Replace Zoolander with [Source Code Pro](https://fonts.adobe.com/fonts/source-code-pro) and Hansel with [Fira Code](https://github.com/tonsky/FiraCode) and you immediately get the point of Typogram's CodingFont.com.

Our conversation with the Departure Mono folks have me re-evaluating my coding font and this site's *blind taste test* game was the perfect tool to pick my new coding font (JetBrains Mono btw) for the next few weeks.

**Break:**

**Jerod Santo:**

That's the news for now, but do scan the companion Changelog Newsletter for even more news worth your attention, such as: A Marble Madness-inspired WebGL game, a website hosted entirely on Bluesky & our world-famous ordered list of additional links. Get the newsletter at changelog.com/news

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
