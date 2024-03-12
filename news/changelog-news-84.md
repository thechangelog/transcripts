**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 4th 2024

March the 4th be with you, is that right? That's not right...

So, we're dreaming up a new landing page for Changelog News and I'd love to feature some nice words from actual readers and/or listeners on it. I hear social proof is a compelling thing...

Do me a solid and drop one or two lines of high praise into [the form linked in the show notes](https://changelog.typeform.com/to/A6Q3aUTb) (only if you dig my work, of course) and I'll happily link back to a URL of your choosing if we end up using your quote.

If my math is correct, which is admittedly rare, that's a win-win-win.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Apple backs off killing web apps, but the fight continues.

This is a long story and I'm linking to the end (of this chapter, anyhow) so here's a quick catch-up: As part of their (seemingly malicious) compliance with the EU's [Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG), Apple had removed Home Screen web apps in the EU in betas of iOS 17.4. The internet erupted (led by the [Open Web Advocacy](https://open-web-advocacy.org), amongst others) and after much backlash they have reversed this change.

In the wake of this reversal, The OWA says:

> While this is a stunning victory for the web, it is just one part of a longer battle... The fight is not over and will not be over until Apple allows both browsers and web apps to compete fairly on all their platforms globally.

We have members of the OWA booked to join us on [JS Party](https://jsparty.fm) next week, which should be interesting.

**Break:**

**Jerod Santo:**

Shipping quality software in hostile environments.

Luka Kladaric writes:

> I once had the opportunity to work for a startup that had fallen from tech debt into tech bankruptcy. Although we managed to get it back on the right track, it made me rethink the concept of tech debt and how we ship software - especially in hostile environments.

He goes on to tell this true story in great detail, which is horrifying yet echoes so many of our experiences. Here's just one of the many horror scenes he describes:

> There is also a handcrafted build server, a Jenkins box hosted in the office, but no record of how it’s provisioned or configured. If something were to happen to it, the way you build software would just be lost. Each job on it is subtly different, even for the same tech. You have an Android source code that you build three instances out of, but each of them builds in a different way.

This is a solid essay replete with warnings and a plea at the end to ditch the "tech debt" concept altogether. Where have I [heard](https://changelog.com/friends/12) that before?

**Break:**

**Jerod Santo:**

Deno's new package registry is an npm superset.

This registry, which lives at [jsr.io](https://jsr.io), was created not to kill npm, but because "the world today is not the same as it was when npm was originally introduced." Namely:

- ECMAScript modules have arrived as a standard
- There are more JavaScript runtimes than just Node and browsers
- TypeScript has emerged as a de facto standard

> The npm registry has been incredibly successful thanks to the contributions of developers worldwide. We want JSR to build on this success, not fork it. JSR is a superset of npm, much as TypeScript is a superset of JavaScript.
>
> JSR is designed to interoperate with npm-based projects and packages. You can use JSR packages in any runtime environment that uses a node_modules folder. JSR modules can import dependencies from npm.

The Deno team is bankrolling this effort for now, but they've set up a separate GitHub org for it and say in the future it may be funded by other means. However, one of the core design principles (which is not like npm) was to keep operating costs low.

> We expect that the Deno Company will be able to continue paying for JSR’s hosting bills for the foreseeable future - JSR is designed to be very cheap to run.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

Sentry's launch weeki is March 18th through 22nd. All week long, they'll be showing off the major investments they've been making in their already industry-leading suite of offerings. So tune in to their YouTube and Discord daily at 9pm PT to hear the latest scoop. And if you want to be the first to see their new release videos + a chance to win Sentry swag, enter your email address using [the link in the show notes](https://sentry.io/events/launch-week/?utm_source=changelog&utm_medium=news&utm_campaign=changelog-news). While you're at it, use code `CHANGELOG` to save $100 on their team plan when you sign up. Once again, follow the link in the show notes and thanks to Sentry for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

Periodic Face-to-Face.

Martin Fowler makes the case that remote-first teams still benefit from face-to-face gatherings, and should do them every few months.

> But however capable folks may be at remote working, and however nifty modern collaboration tools become, there is still nothing like being in the same place with the other members of a team. Human interactions are always richer when they are face-to-face. Video calls too easily become transactional, with little time for the chitchat that builds a proper human relationship. Without those deeper bonds, misunderstandings fester into serious relationship effectively resolved if everyone were able to talk in person.

This rings true to me. Our team was remote since day one (we're hybrid now) so we have a _lot_ of experience (ten years!) working through issues from afar. However, our bond is always strongest right after a conference or other opportunity to hang together in meatspace. Martin says:

> the most valuable part of a face-to-face gathering isn't the scheduled work, it's chitchat while getting a coffee, and conviviality over lunch. Informal conversations, mostly not about work, forge the human contact that makes the work interactions be more effective.

**Break:**

**Jerod Santo:**

Can we get more decentralised than The Fediverse?

Eugene Ghanizadeh writes:

> I guess that the fediverse will be as decentralised as email: a bit, but not that much. Most people will be dependent on a few major hubs, some groups might have their own hubs (e.g. company email servers), personal instances will be pretty rare. This is in contrast to personal blogging, where every Bob can easily host their own (and they often do). I mean that's already implied by the name: fediverse is a federated universe, not a distributed one.
>
> Why does this matter? Well I like not being dependent on one entity, but I would like it much more if I was dependent on no entities at all. In other words, I like to publish my own personal blog and get all the goodies of a social network, without being dependent on other micro-blogging / social content platforms.

Eugene thinks deeply about this and offers a solution that harmonizes with a "fediverse-viral" [post](https://changelog.social/@jerod/111998881971361258) of mine from last week, which I'll quote for you because it's only so often I have opportunity to quote myself:

> You know what doesn't get _any_ spam? My RSS reader…

**Break:**

**Jerod Santo:**

That's the news for now, but you should also scan the companion newsletter for more goodness, like Blazer, an open source Ruby on Rails app for exploring your data with SQL, ingestr, a CLI that lets you ingest data from any source to any destination using a single command & a blog post about serving blog posts as Linux man pages. Because why not, right?

We have Internet hall of famer [Paul Vixie](https://en.wikipedia.org/wiki/Paul_Vixie) coming up on [The Changelog](https://changelog.fm) this week, so stay tuned for that!

Have a great week, leave us [some nice words via the form in the show notes](https://changelog.typeform.com/to/A6Q3aUTb) if you dig it & I'll talk to you again real soon.
