**Jerod Santo:**

What up, nerds. I'm Jerod and this is Changelog News for the week of Monday, July 10th 2023.

Did you see Mr Beast gave away a brand new Tesla to celebrate the launch of Meta's Threads app? Troll of the year.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

On June 21st, IBM's Red Hat [announced](https://www.redhat.com/en/blog/furthering-evolution-centos-stream) they would stop publishing public sources of Red Hat Enterprise Linux (RHEL) because, in summary, they do not want others "repackaging it for their own profit." This change was met with community back lash, no surprise. So, on the 26th Red Hat VP Mike McGrath wrote up [an explainer](https://www.redhat.com/en/blog/red-hats-commitment-open-source-response-gitcentosorg-changes) that didn't seem to help things much. Enter... Oracle?

Heads up, this quote has another quote nested in there. It's like a for loop with an i variable and then another one with a j. So bear with me:

> Why did IBM make this change? Well, if you read IBM’s blog attempting to explain its rationale, it boils down to this:
>
>> At Red Hat, thousands of people spend their time writing code to enable new features, fixing bugs, integrating different packages and then supporting that work for a long time … We have to pay the people to do that work.
>
> Interesting. IBM doesn’t want to continue publicly releasing RHEL source code because it has to pay its engineers? That seems odd, given that Red Hat as a successful independent open source company chose to publicly release its source and pay its engineers for many years before IBM acquired Red Hat in 2019 for $34 billion.

Them's is fightin' words! But they're just getting started...

Oracle makes the following promise: as long as Oracle distributes Linux, Oracle will make the binaries and source code for that distribution publicly and freely available. Furthermore, Oracle welcomes downstream distributions of every kind, community and commercial. We are happy to work with distributors to ease that process, work together on the content of Oracle Linux, and ensure Oracle software products are certified on your distribution.
>
> By the way, if you are a Linux developer who disagrees with IBM’s actions and you believe in Linux freedom the way we do, we are hiring.

This is brilliant positioning by Oracle. That's a sentence I never thought I'd write! But there's one last body blow before this round's bell rings:

> Finally, to IBM, here’s a big idea for you. You say that you don’t want to pay all those RHEL developers? Here’s how you can save money: just pull from us. Become a downstream distributor of Oracle Linux. We will happily take on the burden.

Ouch!

**Break:**

**Jerod Santo:**

Did you know that [Mattermost](https://mattermost.com) contains half a million lines of Go, and again half a million lines of TypeScript. Just for the server! Imagine how big Slack's codebase is...

Simple Unix Chat (`suc`), on the other hand, is small enough that I can read its core loop right here on this podcast. Behold the five lines of bash that do as much as half a million lines of Go:

while /usr/bin/true; do... nah I'm not going to do that.

Check the newsletter for the code and The linked article is an awesome breakdown of how `suc` does so much with so little.

**Break:**

**Jerod Santo:**

Justin Jaffray rounded up and explained the many ways you can conceptualize a relational inner join. A join is a lookup, a nested loop over rows, a flat map, a path through a graph, a ring product... (and 9 more) he lists 13 different ways, which is kind of incredible. He also provides explainers with nice diagrams which really help, so I won't read any here. But now you know where to go if you're struggling with how to think about joins.

**Break:**

**Jerod Santo:**

A merged pull request from Shopify founder/CEO [Tobias Lütke](https://twitter.com/tobi) that adds a web chat server to llama.cpp is _super cool_ for a bunch of reasons.

1. The fact that Tobi still codes and contributes to open source at this stage in his career: cool
2. The overall quality of the content, feedback, and collaboration around the PR on public display: cool
3. The feature itself, which now everyone in the world with a networked computer can benefit from: cool

Do yourself a favor and check out the PR, the comments, the code, and the feature which is now embedded right there in llama.cpp.

**Break:**

**Jerod Santo:**

It is now time for some Sponsored News!

Get ready because Speakeasy (the API infrastructure company) is officially launching and this week they're showing of some of the exciting new features they'e rolled out to devs around the world.

> Give your API the #DevEx it deserves. Speakeasy managed SDKs are idiomatic, type-safe, and readable. In other words they're... crafted by developers, for developers.

Learn how Speakeasy manages the full SDK lifecycle, how they validate OpenAPI docs, how **you** should go about creating SDKs, and catch an awesome demo of using Speakeasy to build a terraform provider from your OpenAPI spec. [Check it out](https://speakeasyapi.dev/featureweek/?utm_source=changelog+newsletter&utm_medium=sponsorship&utm_campaign=Feature+Week) using the link in the show notes and chapter data!

**Break:**

**Jerod Santo:**

You may have heard Python Steering Council member Brett Cannon discuss [removing the GIL](https://changelog.com/friends/5#t=2192) with us on Changelog & Friends a few weeks back. Turns out there's [a lengthy discussion](https://discuss.python.org/t/a-fast-free-threading-python/27903) all about that ongoing that got _very interesting_ a few days ago. Guido van Rossum had stated:

> it would be great if Meta or another tech company could spare some engineers with established CPython internals experience to help the core dev team with this work.

And Meta employee Carl Meyer replied:

> We’ve had a chance to discuss this internally with the right people. Our team believes in the value that nogil will provide, and we are committed to working collaboratively to improve Python for everyone.
>
> If PEP 703 is accepted, Meta can commit to support in the form of three engineer-years (from engineers experienced working in CPython internals) between the acceptance of PEP 703 and the end of 2025, to collaborate with the core dev team on landing the PEP 703 implementation smoothly in CPython and on ongoing improvements to the compatibility and performance of nogil CPython.

There's a BIG if in that offer because [PEP 703](https://peps.python.org/pep-0703/) hasn't been accepted by the Steering Council yet. Big decision! But if they approve it, it's great knowing there will be dedicated engineers making the effort happen.

**Break:**

**Jerod Santo:**

That's the news for now!

It's time once again to thank our newest [Changelog++](https://changelog.com/++) members. **BIG thanks** to Peter O, Adam S, Trevor S, Piotr G, Nick R, Mikayel H & Adam B for supporting our work with your hard-earned cash!

If Changelog++ is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, directly support our work & get shout outs like the ones above. ☝

On Wednesday's interview show we're sitting down with [Jake Zimmerman](https://blog.jez.io) from the [Sorbet](https://sorbet.org) team at Stripe to hear all about the fast, powerful type checker designed for Ruby and why Jake believes types will win in the end.

Have a great week, share Changelog with your friends if you dig it, and we'll talk to you again real soon.
