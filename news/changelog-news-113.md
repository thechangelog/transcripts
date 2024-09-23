**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 23rd, 2024.

Have you heard of [the Dead Internet](https://en.wikipedia.org/wiki/Dead_Internet_theory) theory? It posits that most social Internet activity today is artificial & designed to manipulate humans for engagement.

Let's set aside how hard it is to define _"most"_, for now. If this theory is even *approximately* true, what does it mean for those of us who work, play & often *live* our lives on the Internet? Could AI slop be the first salvo in the rise of The Machines?!

Maybe [ignorance is bliss.](https://www.youtube.com/watch?v=OLv6ycYcpGI) Or maybe, just *maybe*, the time is coming (and now is) to take the red pill...

*(Sorry, I've been watching too many clips of The Matrix lately. [Best shootout scene ever](https://www.youtube.com/watch?v=Z2eCmhBgsyI)?)*

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Imagine Fly.io on your own VPS](https://github.com/MightyMoud/sidekick)

Sidekick creator, Mahmoud Mousa:

> I'm tired of the complexity involved in hosting my side projects. While some platforms, like Fly.io, stand out in the crowded field of Heroku replacements, I believe a simple VPS can be just as effective. That's why I created Sidekick: to make hosting side projects as straightforward, affordable, and production-ready as possible. You'll be surprised how much traffic a $8/month instance on DigitalOcean can handle.

Grab a VPS (or your own hardware if you prefer, just need a public IP) with Ubuntu on it, set up SSH access for yourself, and let `sidekick init` take you from there to a deployed production application "in minutes."

**Break:**

**Jerod Santo:**

["Oracle, it’s time to free JavaScript."](https://javascript.tm)

Node & Deno creator, Ryan Dahl, has had enough of Oracle bogarting "JavaScript" but not even using it:

> Dear Oracle,
>
> You have long ago abandoned the JavaScript trademark, and it is causing widespread, unwarranted confusion and disruption.
>
> JavaScript is the world’s most popular programming language, powering websites everywhere. Yet, few of the millions who program in it realize that JavaScript is a trademark you, Oracle, control. The disconnect is glaring: JavaScript has become a general-purpose term used by countless individuals and companies, independent of any Oracle product.

He goes on to detail exactly why Oracle's hold on the JavaScript trademark "clearly fits the legal definition of trademark abandonment." At the end of the letter, there's a place to sign your John Hancock alongside 11,495 others (including yours truly).

**Tommy Boy:**

John Hancock? It's Herbie Hancock. Duh.

**Break:**

**Jerod Santo:**

[kty is a terminal for Kubernetes](https://kty.dev/)

> kty is the easiest way to access resources such as pods on your cluster - all without kubectl. Once kty is installed on your cluster, ssh gives you a dashboard to interact with the cluster.

With kty, you can:

- Use your GitHub or Google account to log into the cluster. No more annoying kubectl auth plugins
- Get a shell running in pods - just like you would when SSH’n into a host normally
- Access the logs for running and exited containers in a pod
- Forward traffic from your local machine into the cluster or from the cluster to your local machine
- scp or sftp files from pods
- Access the cluster from any device that has an SSH client, from phones to embedded devices


**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Secure every PR from vulnerable & malicious dependencies](https://socket.dev)

Who has time to run a security audit on all of their dependencies?! Socket does.

Socket is a developer-first security platform that protects your code from both vulnerable and malicious dependencies.

The easiest way to get started with Socket is the 2-click GitHub app install. From there, whenever a new dependency is added in a pull request, Socket analyzes the package's behavior and security risk and tells you at that moment, **before the code is merged**, whether or not you're introducing a vulnerable or malicious dependency.

You can run Socket in your CI/CD pipeline, as a CLI tool or even as a web extension so you can spot malicious packages on the web.

Socket helps developers and security teams to work more efficiently and cut through the noise to focus on real threats. Get actionable alerts for the supply chain risks that matter.

Learn more and get started at [socket.dev](https://socket.dev)! Thanks to Feross and our friends at Socket for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[~70% of Redis users considering alternatives](https://www.theregister.com/2024/09/20/redis_users_considering_alternatives/)

> According to a survey by open source database support biz Percona, the move to the Redis Source Available License (RSALv2) and Server Side Public License (SSPLv1) has motivated almost three quarters of the 151 developers and database managers questioned to look for alternatives.

The biggest question when Redis relicensed was _which_ fork would make the most sense for the most people. It appears the Linux Foundation's [Valkey](https://github.com/valkey-io/valkey) effort is leading that pack, with 60% of respondents considering or actively testing it out. I love how much this topic effectively snipes the nerds (myself included). The Register's [comment thread](https://forums.theregister.com/forum/all/2024/09/20/redis_users_considering_alternatives/) on this story is, unsurprisingly, almost entirely filled with arguments for/against the GPL. 😆

**Break:**

**Jerod Santo:**

[Nine Node.js pillars](https://www.platformatichq.com/node-principles)

A bunch of smart JS folk (James Snell, Natalia Venditto, Michael Dawson, Matteo Collina) got together to write up "nine guiding principles for creating robust, scalable, and maintainable Node applications in enterprise environments." Briefly:

1. Do not block the event loop
2. Monitor Node specific metrics and
 act on them
3. Use Node LTS versions in production
4. Automate testing, code review and conformance as much as possible
5. Avoid dependency creep
6. De-risk your dependencies
7. Avoid global variables, config or singletons
8. Handle errors and provide meaningful logs
9. Use API specifications and automatically generate clients

Many of these are pillars of _any_ well-factored application... We have Matteo Collina and hopefully Natalia Venditto coming on JS Party in October to talk through it.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion Changelog Newsletter for even more stories worth your attention, like: Avdi Grimm on how to cope with technology FOMO, All is not well in WordPress-landia as Matt Mullenweg lashes out against WP Engine, and a database management TUI for Postgres.

Oh, and I forgot to mention this here on News, during the month of September we're trading free changelog sticker packs for thoughtful 5-star reviews and blog posts about our pods. Just send proof of your review to stickers@changelog.com along with your mailing address and we'll ship the goods directly to your mailbox, anywhere in the world. Let's do this.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
