**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 11th, 2024.

🚨 Merch alert! We're doing a (first ever) [year-end sale](https://merch.changelog.com) with discounts **up to 40% off**. There's never been a better time to grab yourself (and/or a friend, a collaborator, an open source maintainer) some threads! Get in on it at merch.changelog.com.

All threaded up? Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[The democratization of spreadsheets](https://www.ironcalc.com/)

IronCalc is an MIT-licensed, work-in-progress spreadsheet engine, written in Rust, but usable from a variety of programming languages like Python, JavaScript (wasm), nodejs and possibly R, Julia or Go. Here's why they're building it:

> For over 40 years, spreadsheets have been integral to countless applications. Despite numerous proprietary and open source options, finding a universally accessible, reliable, and high-quality engine remains a challenge. Many existing solutions are expensive, require accounts, or suffer from performance and stability issues.
>
> **Our Mission**: To fill the gaps left by the industry and empower every user with a robust, open source spreadsheet engine that caters to diverse needs.

Their ambition extends beyond code, too. They want to drive the spreadsheet industry forward through R&D, community building & a knowledge base. Cool stuff!

**Break:**

**Jerod Santo:**

[Algorithms we develop software by](https://grantslatton.com/software-pathfinding)

Grant Slatton outlines a cool feature-development method he learned from another engineer:

> Start working on the feature at the beginning of the day. If you don't finish by the end of the day, delete it all and start over the next day. You're allowed to keep unit tests you wrote.
>
> If, after a few days, you can't actually implement the feature, think of what groundwork, infrastructure, or refactoring would need to be done to enable it. Use this method to implement that, then come back to the feature.

I've never tried that method *exactly*, but it rhymes with techniques I've tried in the past. That got Grant thinking about other  other heuristics and generalizations. Such as:

1. "Write everything twice"
2. "Quantity has a quality all of its own"
3. The "Gun to your head" method

That last one reminds me way too much of a scene from Swordfish (if you know you know!)

**Break:**

**Jerod Santo:**

[The ultimate in debugging](https://ilearnt.com/blog/ultimatedebugging/)

Here's Mark Rainey:

> Engineers are currently debugging why the Voyager 1 spacecraft, which is 15 billions miles away, turned off its main radio and switched to a backup radio that hasn’t been used in over forty years!
>
> I’ve had some tricky debugging issues in the past, including finding compiler bugs and debugging code with no debugger that had been burnt into prom packs for terminals, however I have huge admiration for the engineers maintaining the operation of Voyager 1.
>
> Recently they sent a command to the craft that caused it to shut off its main radio transmitter, seemingly in an effort to preserve power and protect from faults. This prompted it to switch over to the backup radio transmitter, that is lower power.
>
> Now they have regained communication they are trying to determine the cause on hardware that is nearly 50 years old. Any communication takes days.
>
> When you think you have a difficult issue to debug, spare a thought for this team.

Whoops, that's his entire post! I guess I saved you a click. Sorry, Mark! I'll link to [the source](https://www.earth.com/news/voyager-1-shocks-nasa-by-communicating-with-radio-system-that-hasnt-been-used-since-1981/) of the story he's talking about in the newsletter.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Kurt Mackey says, "Clouds generally suck"](https://www.youtube.com/watch?v=T5e4PnjrviA)

Our friends at Fly have a [great YouTube](https://www.youtube.com/@flydotio) channel and they recently published a chat between Kurt Mackey and Annie Sexton about why public clouds generally suck. The main takeaway? Public clouds aren't really built for developers. Here's a taste:

Follow the link in your chapter data or the newsletter to listen to the entire 15 minute conversation. Thanks once again to Fly.io for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[We’re leaving Kubernetes](https://www.gitpod.io/blog/we-are-leaving-kubernetes)

Gitpod's Christian Weichel & Alejandro de Brito Fontes tell the story of how they realized that Kubernetes is not the right choice for building development environments.

> This is not a story of whether or not to use Kubernetes for production workloads... This is the story of how (not) to build development environments in the cloud.

Whatever you do, do NOT take this as generic "Kubernetes BAD!" advice. Their findings are specific to building development environments, which are unique for many reasons. Such as:

- They are extremely stateful and interactive
- Developers are deeply invested in their source code and the changes they make
- They have unpredictable resource usage patterns
- They require far-reaching permissions and capabilities

So, if you're building something that shares those characteristics, you might *really* want to read their post before choosing Kubernetes... For the rest of us, though, this serves a high quality deep-dive into the trials & tribulations of their engineering team. Just remember:

> You are not choosing Kubernetes vs something else, you are choosing a system because it improves the experience for the teams you support.

**Break:**

**Jerod Santo:**

[Convert entire websites to Markdown](https://html-to-markdown.com/)

There's a lot of tools out there that convert Markdown text to HTML. No surprise: that's literally what John Gruber's original [Markdown](https://daringfireball.net/projects/markdown/) program was built to do! But there AREN'T many tools out there that go the other direction: converting HTML to Markdown. Johannes Kaufmann's [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) project does exactly that, in the form of a fully extendable Go [library](https://github.com/JohannesKaufmann/html-to-markdown?tab=readme-ov-file#golang-library), a [CLI](https://github.com/JohannesKaufmann/html-to-markdown?tab=readme-ov-file#cli---using-it-on-the-command-line), a REST API & [webpage](https://html-to-markdown.com/demo) where you can copy/paste the inputs/outputs.

The best part: it's built to handle entire websites, which make it super useful for migrating a site, taking documentation offline & de-cluttered reading!

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more news worth your attention. Like

- how Vercel thinks about Next.js
- Will we care about frameworks in the future?
- Everything I've learned so far about running local LLMs
- Being in tech means being a lifelong learner

And more! You can find the newsletter in this episode's show notes or at changelog.com/news

Now, this is issue #120, so that means it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Brian F, Benjamin M, Carrie K, Adon M, Johannes R, Carl M, Mark A, Przemyslaw B, Simon S, Paul S, Jesse T, Poul H, Sid K, Justin D & Warren Y!

_We appreciate you_ for supporting our work with your hard-earned cash.

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, receive a free sticker pack in the mail, directly support our work & get shout outs like the ones you just heard)

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
