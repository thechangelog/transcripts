**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, August 14th 2023

Adam and I are _stoked_ to join Randall Munroe, Julia Evans, Scott Hanselman & many more at the [LAST Strange Loop](https://thestrangeloop.com) in St. Louis, Missouri on September 21st and 22nd. Are you going to be there? Leave us a comment and we'll make sure to connect!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

HashiCorp co-founder Armon Dadgar announces their future is not open source. It's Business Source. "Our open source model has been made possible by the thousands of commercial customers who partner with us on their mission-critical infrastructure. We invest tens of millions of dollars in research and development in our open source products annually, and our commercial efforts enable us to continue to support, and sponsor, our vibrant community of users... However, there are other vendors who take advantage of pure OSS models, and the community work on OSS projects, for their own commercial goals, without providing material contributions back. We don’t believe this is in the spirit of open source."

Much like other companies who have adopted similar licensing schemes before them (Sentry, Cockroach, MariaDB to name a few), here's the kicker: "Vendors who provide competitive services built on our community products will no longer be able to incorporate future releases, bug fixes, or security patches contributed to our products."

Reactions to this change in direction have been all over the board, as you might expect. But one thing is for sure: Each "open source business" that makes this move paves the way for the next. What will the open source landscape look like in five years time? I'm glad we have RedMonk's [Stephen O'Grady](https://twitter.com/sogrady) coming on the show next week to talk through all the angles of this ongoing discussion.

**Break:**

**Jerod Santo:**

In a brief post on his blog, Matt Rickard lays out four bullet-pointed hypotheses on why he believes Tailwind has become "the new ubiquitous frontend framework." 1: No context switching from application logic. 2: It's Copy-and-pastable. 3: Fewer dependencies, smaller surface, and 4: Reusability

"Won" is both subjective and temporary, but I have to admit it has more momentum than any other CSS tooling right now. But the main reason I share this post, is because when you just look at those bullet points (which, of course, Matt expands on in his post)... they're highly desirable attributes of _any_ software project.

So, if you want your software to "win" (whatever that means to you), maybe emulate some of these winning characteristics from Tailwind.

**Break:**

**Jerod Santo:**

Kafka is dead, long live Kafka. That's the name of the post by Richard Artoul announcing WarpStream an Apache Kafka protocol compatible data streaming platform directly on top of S3. Richard says, "It's delivered as a single, stateless Go binary so there are no local disks to manage, no brokers to rebalance, and no ZooKeeper to operate. WarpStream is 5-10x cheaper than Kafka in the cloud because data streams directly to and from S3 instead of using inter-zone networking, which can be over 80% of the infrastructure cost of a Kafka deployment at scale."

Kafka is a powerful tool that's used by tons of tech companies (> 80% of fortune 100s, in fact), but "simple" and "cheap" are not words you'll hear associated with the open source event streaming platform. WarpStream aims to simplify and cheapen the whole endeavor, but they're up front with the trade-offs: "Of course, it's not all sunshine and rainbows. Engineering is about trade-offs, and we’ve made a significant one with WarpStream: latency"

**Break:**

**Jerod Santo:**

It's that time again: time for Sponsored News!

**Just like us** here at Changelog, Tailscale has never supported password-based authentication. **Unlike us** here at Changelog, Tailscale now supports passkeys!

What's Tailscale? It's the simplest way to give secure remote access to shared resources. Tailscale is for teams, for enterprise, and for individuals. Here's how passkeys work with Tailscale:

> To add a user with a passkey to your tailnet, if you’re an admin, you can generate an invite from the Users page of the admin console. Click Invite users, then Invite via link…, and select the role you’d like the invited user to have. Then, share the unique invite URL with that user. When the invited user opens the link, they’ll be able to create a unique username and join your tailnet.

Easy! Passkeys are awesome. Tailscale is awesome. Learn more at changelog.com/tailscale

**Break:**

**Jerod Santo:**

Vadim Kravcenko published an excellent guide for working with (and managing) the many personas of software engineers: "In the grand scheme of a software engineering path, there's a thread that weaves through every project, every failure, and every challenge. That thread is people. As a person with an engineering background, I do enjoy solving hard puzzles and fixing problems. But the most complex, intriguing, and ultimately rewarding aspect of my journey has always been managing people."

He has specific advice for managing The Procrastinator, the Lone Wolf, the Negative Nancy, the Know-It-All, the... you get the point.

**Break:**

**Jerod Santo:**

Russ Cox, in a blog post highlighting some of the "boring" new features in Go 1.21 that improve compatibility: "...when should we expect the Go 2 specification that breaks old Go 1 programs? The answer is never. Go 2, in the sense of breaking with the past and no longer compiling old programs, is never going to happen. Go 2 in the sense of being the major revision of Go 1 we started toward in 2017 has already happened. There will not be a Go 2 that breaks Go 1 programs. Instead, we are going to double down on compatibility, which is far more valuable than any possible break with the past. In fact, we believe that prioritizing compatibility was the most important design decision we made for Go 1."

As boring as it may sound, compatibility is a **killer feature** for a mature, widely-deployed platform like Go.

**Break:**

**Jerod Santo:**

That's the news for now, but definitely skim through this episode's companion newsletter. It has three more big stories, a list of eight other things on our radar, and all the recent good pods from us here at Changelog.

Speaking of good pods, we're celebrating 30 years of Debian with Project Lead Jonathan Carter on Wednesday and talking intergenerational conflict amongst software devs with our friends Justin Searls and Landon Gray from Test Double on Friday.

So subscribe to The Changelog if you haven't yet, stay tuned for more podcasting goodness, have a great week, and share the show with your friends who might dig it! I'll talk to you again real soon.
