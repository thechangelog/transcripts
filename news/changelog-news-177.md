**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 19th, 2026.

After nearly ten years, the jQuery team has released a new major version ([4.0](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)) of the library so good, it still runs on ~71% of all websites. Many of the breaking changes are *removing* features; more proof of its transcendence. I'm calling it: jQuery is the GOAT 🐐

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Agent psychosis: are we going insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)

Here's Armin Ronacher:

> Many of us got hit by the agent coding addiction. It feels good, we barely sleep, we build amazing things. Every once in a while that interaction involves other humans, and all of a sudden we get a reality check that maybe we overdid it. The most obvious example of this is the massive degradation of quality of issue reports and pull requests. As a maintainer many PRs now look like an insult to one’s time, but when one pushes back, the other person does not see what they did wrong. They thought they helped and contributed and get agitated when you close it down.
>
> But it’s way worse than that. I see people develop parasocial relationships with their AIs, get heavily addicted to it, and create communities where people reinforce highly unhealthy behavior. How did we get here and what does it do to us?

We're all trying to grapple with perhaps the most dramatic change the software world has ever undergone. In this post, Armin grapples with it right out there in public. I appreciate him for doing that. He's been a "thought leader" for many years, and it's comforting to know that even folks like him are struggling to see this new world clearly.

**Break:**

**Jerod Santo:**

[A social filesystem](https://overreacted.io/a-social-filesystem/)

Dan Abramov starts this excellent article by praising the portability and effectiveness of the Files paradigm:

> Apps and formats are many-to-many. File formats let different apps work together without knowing about each other.

(This reminded me of Steph Ango's [File over app](https://stephango.com/file-over-app), which I revisit often.)

Then Dan goes on to describe how the Files paradigm could apply to social apps like Instagram, Reddit, Tumblr, GitHub, and TikTok. But this is no hypothetical. It's literally how the [AT Protocol](https://atproto.com/) works, which Dan calls a "social filesystem."

> I’ve previously written about the AT protocol in [Open Social](https://overreacted.io/open-social/), looking at its model from a web-centric perspective. But I think that looking at it from the filesystem perspective is just as intriguing, so I invite you to take a tour of how it works.
> 
> A personal filesystem starts with a file.
> 
> What does a social filesystem start with?

**Break:**

**Jerod Santo:**

[RepoBar puts GitHub at a glance from your menu bar](https://github.com/steipete/RepoBar)

> RepoBar keeps your GitHub work in view without opening a browser. Pin the repos you care about and get a clear, glanceable dashboard for CI, releases, traffic, and activity right from the macOS menu bar.

[![RepoBar in action showing a specific repos' details](https://cdn.changelog.com/news/177-repobar.png)](https://github.com/steipete/RepoBar)

RepoBar works with GitHub Enterprise, but it doesn't work with Linux or Windows. NBD. Fire up an agent and you could have this idea ported to your OS of choice in a few hours, tops. (Or have it fork and add multi-platform support?)

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Your Agent's dependency choices are a liability](https://fandf.co/4ahP5MZ)

Coding agents are good, but they don't know when a dependency is compromised. That's a liability teams want to avoid. But how?

Agents are great at writing code that works, but they're pulling dependency recommendations from training data that's stale and outdated. That package version Copilot just suggested might have a known vulnerability that was disclosed six months after the model's knowledge cutoff. **Your code compiles. Your security posture does not.**

That's why teams are choosing [Sonatype Guide](https://fandf.co/4ahP5MZ) to select the best open source components from the start and maintain the safest dependency versions.

Sonatype Guide is an MCP server that integrates directly with your AI coding assistant, so when you're generating code, the dependency recommendations come from Sonatype's live component intelligence, not frozen training data. They've been the trusted resource behind Maven Central for over 15 million developers, and now that same component knowledge can feed directly into your AI workflow.

You can use Sonatype Guide with Claude, Cursor, and other assistants that support MCP. Explore the product for yourself. It's free to start. No credit card required.

Learn more at [sonatype.com](https://fandf.co/4ahP5MZ)

**Break:**

**Jerod Santo:**

[Life altering Postgres patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)

Believe it or not, Ethan McCue doesn't think that title is clickbait. He's found the set of things shared in his linked post so valuable that they have, indeed, altered he and his coworker's lives for the better. The list!

- Use UUID primary keys
- Give everything created_at and updated_at
- on update restrict on delete restrict
- Use schemas
- Enum tables
- Name your tables singularly
- Mechanically name join tables
- Almost always soft delete
- Represent statuses as a log
- Mark special rows with a system_id
- Use views sparingly
- JSON Queries

I agree with *most* of these, but plural table names FTW...

**Break:**

**Jerod Santo:**

[Web dependencies are broken. Can we fix them?](https://lea.verou.me/blog/2026/web-deps/)

Lea Verou says:

> Dear JS ecosystem, I love you, but you have a dependency management problem when it comes to the Web, and the time has come for an intervention.

The topic of that intervention? We all know what it is...

> In healthy ecosystems dependencies are normal, cheap, and first-class. “Dependency-free” is not a badge of honor.
>
> And yet, **the web platform has outsourced this fundamental functionality to third-party tooling**. As a result, code reuse has become a balancing of tradeoffs that should not have existed in the first place.

She doesn't think incremental improvements can get us out of the mess we're in, suggesting one radical solution that she isn't entirely sure will work. In the end, this post is a call-to-action for the community. 

> To browser vendors, to standards groups, to individual developers. Let’s fix this! 💪🏼

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Cloudflare acquires Astro](https://astro.build/blog/joining-cloudflare/)
- [Dead internet theory (again)](https://kudmitry.com/articles/dead-internet-theory/)
- [Why senior engineers let bad projects fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.