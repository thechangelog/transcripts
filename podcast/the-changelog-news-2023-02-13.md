**Jerod Santo:**

What up nerds, I'm Jerod and this is Changelog News for the week of Monday, February 13th, 2023.

My favorite nerdy artifact from last night's Super Bowl was [Twitter user pattymo taking a picture of Rihanna floating above the field on her platform and overlaying Bowser, Kirby and Captain Falcon from Smash Bros on it. The tweet's text was an all caps: RIHANNA LOOK OUT](https://twitter.com/pattymo/status/1624948022277771265)

But I digress. Let's get into the news.

**Break:**

**Jerod Santo:**

How much can you really get out of a 4$ VPS? That is what Alice GG was wondering when she decided to perform her own load test to figure out if the promise of running your production app on such a low budget is realistic.

So, she coded up a simple CRUD app in Go, hooked it up to MongoDB because...

**Mongo DB Is Web Scale:**

[Relational databases weren't built for web scale. MongoDB handles web scale.](https://www.youtube.com/watch?v=b2F-DItXtZs)

**Jerod Santo:**

and deployed it all to a $4 VPS of an unnamed provider using Docker with docker-compse.

She then used K6, an open source load testing suite that generates virtual users who continuously run test scenarios using JavaScript, to see what the machines was capable of.

**Maverick and Goose:**

[I feel the need. The need for speed. Ow!](https://www.youtube.com/watch?v=4PzpztFJZP8)

**Jerod Santo:**

I'll leave out the gory details, you can read them if you'd like, but her final conclusion is this: "as long as you don’t plan on building the next Twitter, a very cheap VPS might be fine for the start of a project."

She goes on to say YMMV, DYOR, and shares the source code to her app, K6 scenarios, and analysis script.

**Break:**

**Jerod Santo:**

Brett Cannon asked an interesting question on his blog the other day. Should we use TOML for `.env` files? He's specifically asking in the context of the Python extension for VS Code, which Brett helps to maintain, but it might be a good thing to consider across the broader developer ecosystem.

If you aren't familiar with `.env` files, they are a very common way of defining configuration settings outside your app code so you can keep them out of source control and easily load them as environment variables at run-time. But, they have their problems. The two that Brett lists are that `.env` files don't have a standard and they aren't cross-platform.

His proposed solution to this: use TOML, which is a widely supported config file format for humans, as the format for `.env` files.

Brett wants to know what you think! Is this a good idea or a bad idea? Do people like the idea of a e.g. .env.toml (or env.toml or .env with an assumption of TOML syntax)? Is this worth trying to get various tools to support?

Have opinion? You can message him on Mastodon @brettcannon@fosstodon.org or hit him up in our Slack community, changelog.com/community

**Break:**

**Jerod Santo:**

Nic Mulvaney and his team at Normally.com developed and wroute about a super cool hack. The challenge: count unique visitors to a website without using cookies, UIDS, or fingerprinting.

**Hackers:**

[Hacking Richard Gill's Accounts](https://www.youtube.com/watch?v=zcqxCeYkkhk)

**Jerod Santo:**

Privacy is why they're doing this and how they're doing it is the following. "When the browser pings our server from a website for the first time, we send back a response with a header set to Cache-Control: no-cache, telling the browser to store the request in its cache but revalidate it with the origin server before each use. But most importantly, we send a header which is a date set to the beginning of each day. From now on, every time this request is made again, the server receives the date and adjusts it by one second, and returns it to the browser. This way, the server can calculate the distance in seconds since midnight to give us a visit count."

If that sounds confusing to you, check out the blog post which has a nice image of the process. I'll also embed it in the chapter data so take a look there if your podcast app is cool like that.

**Digable Planets:**

[Rebirth of Slick (Cool Like Dat)](https://www.youtube.com/watch?v=sVhT7H1jh8Y)

**Break:**

**Jerod Santo:**

Chris Coyier says after a few months, he's still using the Arc browser.

**Jack Twist:**

[I wish I knew how to quit you.](https://www.youtube.com/watch?v=nd8n33R6ZBw)

**Jerod Santo:**

Here's what Chris has to say about it: "It’s Chrome under the hood, so any extension will work, it has the exact same platform features, it has the same DevTools, etc. But the UI and UX are pretty different! That could put it at risk for a switch-back, but so far I find nearly every choice Arc makes an improvement."

Things Arc does that Chris likes include syncing tabs between computers, providing easily editable user stylesheets, building in a split view, which he says is great for writing, moving tabs to the side, which he's convinced is the future, and more.

High praise from a web developer who's opinion is highly refined after decades of doing this stuff. Unfortunately for many of us, Arc is Mac only for now and you can't just go and download it. Instead, you pop your email into a Typeform to join the waitlist.

**BeetleJuice:**

[The netherworld waiting room scene.](https://www.youtube.com/watch?v=GAwnYHoyYZ8)

**Break:**

**Jerod Santo:**

Last up for today, Alex Kladov is loving Deno and wrote up all the reasons why on his blog. It's a long post, covering many aspects of Deno that he appreciates, but here's Alex's main point: "historically the domain of “scripting” and “glue code” was plagued by the problem of accidentally supergluing oneself to a particular UNIX flavor at hand. Deno finally seems like a technology that tries to solve this issue of implicit dependencies by not having said dependencies..."

Deno is a fascinating project and one I've used just briefly but want to sink more time in to when I get the opportunity. If you missed my recent interview with Ryan Dahl on JS Party, you really should take a listen. We covered a lot of ground. Here's one moment from it:

**Clip from JS Party #256:**

[Big news in Deno Land featuring Ryan Dahl](https://jsparty.fm/256)

**Break:**

**Jerod Santo:**

That is the news for now. If you were looking forward to our Nathan Sobo interview last week, sorry about that. It got rescheduled last minute, but it sounds like our Git with your friends episode with Mat Ryer was a hit, so that's cool.

We have some amazing guests coming down the pipeline. Rachel Potvin this Friday followed by Even Prodromou talking ActivityPub & Mastodon, Brigit Murtaugh on dev containers, Nathan Sobo, of course, Sarah Drasner, Cory Doctorow, and a bunch more.

I'll leave you with this amazing quote from the one and only Grace Hopper: "The most damaging phrase in the language is, 'It's always been done this way'"

Have a great week and we'll talk to you again next time.
