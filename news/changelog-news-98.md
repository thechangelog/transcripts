**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 10th, 2024.

The AI gold rush has Nvidia breaking profit records left and right. [Turns out](https://sherwood.news/markets/nvidia-is-now-worth-usd102m-per-employee/) at their current market cap they're now valued at **$102M per employee**. I think it's time for some serious raises...

**Jerry Macquire:**

[You gonna show me the money. You gonna show me the money.](https://www.youtube.com/watch?v=-B04jhdDfDk)

**Jerod Santo:**

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Apple finally gets Siri-ous ](https://www.apple.com/apple-intelligence/)

The seemingly sleepy tech giant in Cupertino woke up today at their annual WWDC event. Their response to the recent transformer-infused language model boom: **AI**, which is short for *Apple* Intelligence (see what they did there?)

This "new" _AI_ will weave its way through the entire suite of Apple platforms / 1st-party apps, but the primary interface is still Siri. Yes, _that_ Siri.

This means Siri is getting a new look & feel, the ability to query it via text, better natural language detection, on-screen awareness, app intents, personal context & a gazillion other things. The demo was quite impressive, but aren't they all?

Oh, and Siri can also ask ChatGPT when it doesn't have an answer for you. If nothing else, this is a huge upgrade from "Here's what I found on the web."

**Break:**

**Jerod Santo:**

[Git push deployments to your own servers](https://piku.github.io)

piku's creators say:

> We wanted an Heroku/CloudFoundry-like way to deploy stuff on a few `ARM` boards, but since `dokku` didn't work on `ARM` at the time and even `docker` can be overkill sometimes, a simpler solution was needed.
>
> `piku` is currently able to deploy, manage and independently scale multiple applications per host on both ARM and Intel architectures, and works on any cloud provider (as well as bare metal) that can run Python, `nginx` and `uwsgi`.

Heroku 100% changed the deployment game with its `git push` UX. Ever since, people have been trying to replicate that experience in different places, with varying degrees of success & failure (but mostly failure). From my early reading, it appears that the `piku` team has done it for the 80% of common use cases. The best part, it's not a PoC or early Alpha software:

> **`piku` is considered STABLE**. It is actively maintained, but "actively" here means the feature set is pretty much done, so it is only updated when new language runtimes are added or reproducible bugs crop up.

**Break:**

**Jerod Santo:**

[A nanoGPT pipeline packed in a spreadsheet](https://github.com/dabochen/spreadsheet-is-all-you-need)

This "Spreadsheet Is All You Need" repo (a play on the [Attention is All You Need](https://research.google/pubs/attention-is-all-you-need/) paper that originally introduced the Transformer architecture) is great if you're still trying to wrap your head around how GPTs actually work. It's also just an impressive feat. Dabo Chen:

>While reading about LLMs, I realised that the internal mechanisms of a transformer is basically a range of matrices calculations being connected in a certain order. I started to wonder if the whole process can be represented in a spreadsheet since all the calculations are fairly simple. I'm a visual thinker, I couldn't think of a better way to do it. Then with some trial and errors, I wrote the full inference pipeline of the nanoGPT architecture into a single spreadsheet.

Follow the link in the newsletter or there's an image in your chapter data. Give it a look.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[What's causing those poor Core Web Vitals?](https://sentry.io/resources/tracing-frontend-issues-with-backend-solutions/?utm_source=changelog&utm_medium=paid-community&utm_campaign=tracing-fy25q2-traceworkshop&utm_content=newsletter-tracingworkshop-register)

Join Salma Alam-Naylor & Lazar Nikolov from Sentry in [this FREE workshop](https://sentry.io/resources/tracing-frontend-issues-with-backend-solutions/?utm_source=changelog&utm_medium=paid-community&utm_campaign=tracing-fy25q2-traceworkshop&utm_content=newsletter-tracingworkshop-register) so you can learn how to identify the issues causing your poor Core Web Vitals. Then, discover how to trace issues to slow database queries or the dreaded server-side request waterfall. You'll learn how to:

- Discover common sources for poor web vitals
- Setup tracing with Sentry
- Trace issues through your stack to the code-level with Sentry

The workshop is on June 20th. Don't miss out: register now [right here](https://sentry.io/resources/tracing-frontend-issues-with-backend-solutions/?utm_source=changelog&utm_medium=paid-community&utm_campaign=tracing-fy25q2-traceworkshop&utm_content=newsletter-tracingworkshop-register)!

**Break:**

**Jerod Santo:**

[You'll regret using natural keys](https://blog.ploeh.dk/2024/06/03/youll-regret-using-natural-keys/)

I've often [talked](https://youtube.com/shorts/vJFqAJ9_0SU) about the nature of software development and its lack of truly generalizable rules, but experience _does_ reveal anti-patterns that we can pass down/around to save others the pain & suffering that we had to endure to uncover them. One such database design anti-pattern that Mark Seemann wants to save you from is using [natural keys](https://en.wikipedia.org/wiki/Natural_key):

> Is it ever a good idea to use natural keys in a database design? My experience tells me that it's not. Ultimately, regardless of how certain you can be that the natural key is stable and correctly tracks the entity that it's supposed to keep track of, data errors will occur. This includes errors in those natural keys.
>
> You should be able to correct such errors without losing track of the involved entities. You'll regret using natural keys. Use synthetic keys.

Take his word for it (he does explain why, of course) or learn the same less for yourself **the hard way**? Your call...

**Break:**

**Jerod Santo:**

[A grand unified theory of the AI hype cycle](https://blog.glyph.im/2024/05/grand-unified-ai-hype.html?utm_medium=mastodon)

Glyph Lefkowitz describes a 13-phase AI hype cycle and then enumerates five cycles we've already been through:

1. Neural networks and symbolic reasoning in the 1950s.
2. Theorem provers in the 1960s.
3. Expert systems in the 1980s.
4. Fuzzy logic and hidden Markov models in the 1990s.
5. Deep learning in the 2010s.

> Each of these cycles has been larger and lasted longer than the last, and I want to be clear: each cycle has produced genuinely useful technology. It’s just that each follows the progress of a sigmoid curve that everyone mistakes for an exponential one. There is an initial burst of rapid improvement, followed by gradual improvement, followed by a plateau.

So where are we now? Glyph provides some heuristics, but it's hard to say exactly when the current cycle will end. But he does feel confident about saying *this*:

> What I can tell you is that computers cannot think, and that the problems of the current instantiation of the nebulously defined field of “AI” will not all be solved within “5 to 20 years”.

**Break:**

**Jerod Santo:**

That's the news for now, but do scan the companion newsletter for more stories on managing motivation as a solo dev, DuckDB 1.0, and a big list of new dev tools you should try. If you aren't a newsletter subscriber, get in on the double dip at changelog.com/news

We have some great episodes coming up this week: **Kelsey Hightower** joins us on Wednesday & **Justin Searls** joins us for WWDC reactions on Friday.

Have a great week, **forward this to a friend** who might dig it & I'll talk to you again real soon. 💚
