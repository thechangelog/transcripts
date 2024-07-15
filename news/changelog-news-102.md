**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 8th 2024.

Fast Company has [a fun piece](https://www.fastcompany.com/91140068/how-the-internet-went-mainstream-in-1994) on what the internet looked like back in 1994, featuring 15 webpages born that year. My favorite one is a page that lived on microsoft.com which shows _the_ server and _the_ webmaster at Microsoft...

It says: "Here is a picture of the server and the webmaster here at Microsoft. Clicking on the image will download a larger JPEG image. We are sending JPEG images with a MIME type/subtype of image/jpeg."

See it for yourself in this chapter's image, or here's my best attempt at describing it. A smiling, plump man in blue t-shirt and black shorts stands next to a white server rack housing a single computer and CRT display.

ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Programming advice for my younger self](https://mbuffett.com/posts/programming-advice-younger-self/)

Marcus Buffett finally thinks he's a decent programmer, so he rounded up a bunch of his learnings and wrote them down with the idea of “what would have gotten me to this point faster?” Here's a sampler:

1. If you (or your team) are shooting yourselves in the foot constantly, fix the gun
2. Assess the trade-off you’re making between quality and pace, make sure it’s appropriate for your context
3. Spending time sharpening the axe is almost always worth it
4. If you can’t easily explain why something is difficult, then it’s incidental complexity, which is probably worth addressing
5. Bad code gives you feedback, perfect code doesn’t. Err on the side of writing bad code

Marcus unpacks each of these conclusions and provides more as well. Good reading, especially if you want to catch up to him quickly.

**Break:**

**Jerod Santo:**

[DevRel's death as Zero Interest Rate Phenomenon](https://dx.tips/zirp)

Swyx asks and answers a question that's been bandied about lately: **"Is Devrel dead?"** His answer: **No**. BUT!

> I prefer to think of the Devrel excesses of 2020-2022 ([example](https://www.swyx.io/measuring-devrel)) as a "Zero Interest Rate Phenomenon", and that we are now seeing a relative right-sizing of expectations, one that perhaps has a lot more room to go.

He goes on to back this conclusion up with five bullet points and a list of devtools that are succeeding with no/minimal DevRel staff. In conclusion, DevRel is not dead, but ZIRP DevRel is. Folks need to adjust accordingly.

Stay tuned. We're having Swyx on [Changelog & Friends](https://changelog.com/friends) to unpack the implications in great detail this coming Friday.

**Break:**

**Jerod Santo:**

[The Ghost team opens up their ActivityPub server](https://github.com/TryGhost/ActivityPub)

> A mult-itenant ActivityPub server for Ghost, built with Fedify. This service makes it possible for independent websites to publish their content directly to the Fediverse, enabling networked publishing to the open social web.
>
> This repository is being actively developed and is currently in early alpha - expect many breaking changes. It is not suitable for production use.

I still have no idea when (or if) ActivityPub will deliver on its potential, but the builders keep on building... (via [Andy Piper](https://macaw.social/@andypiper/112751208077594833))

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[How Neo.Tax accelerated their development lifecycle](https://neon.tech/blog/from-days-to-minutes-how-neo-tax-accelerated-their-development-lifecycle)

Neon has been a game-changer for the engineering team at [Neo.Tax](https://www.neo.tax), reducing their dev lifecycle from days to minutes thanks to branching. Here's what Miguel Hernandez (Backend Tech Lead) has to say about it:

> Neon shortened the lifecycle for us between making a change in the product, validating it, and generating the PDFs we expect. Before, it used to be terrible: resetting your database, running migrations, all of that. With Neon, we just create a database branch, link it with the ticket, and use that URL in local development. This has significantly streamlined our end-to-end testing process”

Miguel also calls Neon's database branching "the best quality-of-life improvement to my tech stack that I can think of in recent years. Second to maybe only Copilot."

Read the [full case study](https://neon.tech/blog/from-days-to-minutes-how-neo-tax-accelerated-their-development-lifecycle) and [experiment with database branches](https://neon.tech/flow) by following the links in your chapter data and the newsletter.

Thank you once again to Neon for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Pongo is like Mongo but on Postgres](https://github.com/event-driven-io/Pongo)

> Pongo treats PostgreSQL as a Document Database benefiting from JSONB support. Unlike the plain text storage of the traditional JSON type, JSONB stores JSON data in a binary format. This simple change brings significant advantages in terms of performance and storage efficiency.

Essentially, Pongo takes the MongoDB API and translates it to native Postgres queries. This could serve as a nice temporary shim layer while transitioning a Mongo project over to Postgres... one bit at a time. Not saying you'd want to do that, but you _might_ want to do that.

**Break:**

**Jerod Santo:**

[I'm funding Ladybird because I can't fund Firefox](http://jackkelly.name/blog/archives/2024/07/06/im_funding_ladybird_because_i_cant_fund_firefox/)

Jack Kelly, in light of last week's announcement of the [Ladybird Browser Initiative](https://ladybird.org/announcement.html):

> Chrome is eating the web. I have wanted to help fund a serious alternative browser for quite some time, and while Firefox remains the largest potential alternative, Mozilla has never let me. Since I can’t fund Firefox, I’m going to show there’s money in user-funded web browsers by funding Ladybird instead. You should too.

If you're curious why Jack can't fund Firefox, TIL _they won't let you_?! 🙈

> Despite desperately trying to find more revenue sources, Mozilla Corporation stubbornly refuses to just let users fund Firefox. Mozilla Foundation even has a specific donation form for Thunderbird (Mozilla’s mail client), but not Firefox. I’m sure they could have found some way of making it work with their corporate structure, and it baffles me that they haven’t.

Adam & I discussed the Ladybird news on [last week's Friends](https://changelog.com/friends/51) and we're hoping to get Andreas back on the show for an even deeper-dive... 🤞

**Break:**

**Jerod Santo:**

That's the news for now, but I leave you with Hyrum's Law. I hadn't heard of [Hyrum's Law](https://www.hyrumslaw.com/) until Kris Krycho brought it up on [our SemVer discussion](https://changelog.fm/597), but now I can't stop thinking about it. Put succinctly, the observation is this:

> With a sufficient number of users of an API,
> it does not matter what you promise in the contract:
> all observable behaviors of your system
> will be depended on by somebody.

While listening back to [our recent convo with Daniel Stenberg](https://changelog.com/friends/49), I couldn't help but conclude that if Hyrum's Law holds true, _somebody_ is depending on each of curl's 263 (!) command-line flags...

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
