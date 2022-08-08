**Jerod Santo:**

What up, nerds?

**Revenge of the Nerds:** [NERDS!](https://www.youtube.com/watch?v=gZEdDMQZaCU)

**Jerod Santo:**

I'm Jerod and this is Changelog News for the week of Monday, August 8th 2022.

We start with a little bit of news from us, your friends at Changelog. Last week we added chapters to the episode pages on changelog.com.

**Bill and Ted:** Excellent!

**Jerod Santo:**

You'll find them between the show notes and the transcript. Each chapter is titled with its time offset that's clickable, of course, so you can play the episode starting from there.

Next up, we're working on adding the very same chapters to our mp3s so you can use them in your podcast app of choice. People are calling it the single greatest technical improvement to Changelog podcasts since transcripts. And when I say "people", I mean "me". I've been calling it that.

I can't give you an ETA on the mp3 chapters, because no self-respecting developer would opt in to a deadline that's easily avoidable. But hopefully they'll ship Real Soon Now.

Ok, let's get into what else is news.

**Break:**

**Jerod Santo:**

First up, it's the [PiBox](https://pibox.io). Designed for hackers, tinkerers, and self-hosters, the PiBox combines a Raspberry Pi CM4, WiFi, 8 gigs of RAM, up to 16TB of SSD Storage, and a suite of software that provides an app store, backups, remote access, and more.

They call it the most versatile personal server ever. It's powered by KubeSail, which works on any Linux OS that can run Kubernetes. KubeSail looks sorta open source? There's lots of open repos on their GitHub org, but there is a KubeSail.com control panel and other private parts, as far as I can tell. However, since it's all about self hosting, they aren't running your apps as a service.

Entry level pricing is $159 with the plug n play maxed out offering at $529. Batch 1 of the PiBoxes are shipping now, but they're taking pre-orders for batch 2, which is expected to ship in October.

**Break:**

**Jerod Santo:**

Speaking of hosting, Nima Badizadegan

**Heisenberg:** [Say my name.](https://www.youtube.com/watch?v=5eZOOEkrf6Q)

I tried, I really tried. Nima writes on the advantages of using one big server over a distributed system architecture. Nima says, "We have all gotten so familiar with virtualization and abstractions between our software and the servers that run it. These days, “serverless” computing is all the rage, and even “bare metal” is a class of virtual machine. However, every piece of software runs on a server. Since we now live in a world of virtualization, most of these servers are a lot bigger and a lot cheaper than we actually think."

The article covers the capabilities of one server, what it'll cost you, how scaling up is easier than scaling out, and rebuts a bunch of common objections to the One Big Server approach.

**Break:**

Gergely Orosz has a two-part series about how the software industry approaches oncall. Part 1 covers [healthy oncall practices](https://newsletter.pragmaticengineer.com/p/healthy-oncall-practices) and part 2 dives into oncall compensation for software engineers.

The article goes through more than 80 data points on how much different companies pay for oncall. So you can find out which companies pay the most, which companies pay the least, and which companies don't pay at all.

**Peter Venkman:** [24 hours a day, seven days a week. No job is too big, no fee is too big.](https://www.youtube.com/watch?v=slFsrr6Lp48)

**Jerod Santo:**

A valuable resource, for sure, if and when you're job shopping.

**Break:**

**Jerod Santo:**


Are you always swamped with work? Greg Kogan says that's normal and not impressive. Ouch.

**Hansel:** [And I felt like, this guy's really hurting me. And it hurt!](https://www.youtube.com/watch?v=scy0PV_vZHY)

**Jerod Santo:**

"I used to think being swamped was a good sign. I’m doing stuff! I’m making progress! I’m important! I have an excuse to make others wait! Then I realized being swamped just means I’m stuck in the default state, like a ball that settled to a stop in the deepest part of an empty pool, the spot where rainwater has collected into a puddle."

Reading this reminded me of Woody Zuill's distinction between productivity and effectiveness.

**Woody Zuill:**

There’s so much more than thinking productivity is important. I don’t think productivity is important at all. I think being effective is important.

So productivity is like another proxy measurement that a lot of managers need to use, because that’s how they think work should be, and they do it. But there’s a famous quote from Russell Ackoff, I think, who said, “Because managers can’t figure out how to measure what they want, they start wanting what they can measure.” This is like a critical thing to think about. What do we do in our daily work that we do because we can’t really figure out how to do things a better way?

Here’s the thing… If we’re focused on flow, that is taking something from beginning to end directly, there are many benefits we get from that.

**Jerod Santo:**

When he first said it to us on the show, I thought it was a distinction without a difference, but the more I thought about it, the more I think Woody (and Greg) are on to something.

**Break:**

**Jerod Santo:**

Have you heard of Tabler? It's a premium open source dashboard template with a responsive and high-quality UI. It works cross-browser of course, uses modern HTML and CSS, and is built with Bootstrap. Remember?

**Obi-wan Kenobi:** [Now that's a name I haven't heard in a long time. A long time.](https://www.youtube.com/watch?v=031vKBPk5eA)

**Jerod Santo:**

There are also React components available for Tabler in a separate repo. Links to both are in the show notes.

**Break:**

**Jerod Santo:**

Last, but certainly not least: our friends at Charm released a new tool for glam'ing up your shell scripts. It's called gum, which gives you the power of their Bubbles and Lip Gloss tools without having to write any Go code! When Toby Padilla from Charm was on the show, he sang Go's praises for writing CLIs:

**Toby Padilla:**

We think Go is a good language to build command line tools in, for a number of reasons. One is you get a compilable binary that you can ship, a single file, and you don’t have to force all of your users to install all of the dependencies that you’ve used to develop, a la Node.js or Python or something like that. So it’s sort of a natural fit for this type of tooling. It’s just a nice language; it’s got a really good standard library… So a lot of stuff that you might want to do to make a really cool command line app is just straight up available in the Go standard library. It’s got an HTTP server, it’s got an HTTP client. It’s got a lot of stuff inside of it. So that was why we focused on it.

We like lots of languages, and we come from backgrounds where we – I was a Clojure developer for six years. I was doing Rust actually for two years before I moved to Go… And Muesli - I follow him on GitHub, and I got jealous of all the cool libraries that he was starting all the time. I’m like, “I want that.” Because he’s a Golang developer, and he’s like “Super-cool crypto thing”, or whatever. And I’m like, “Hey, that looks neat. I’m in Rust, writing my own bencoding library, because such a thing doesn’t exist.” At some point I just thought “You know, I love Rust, it’s really cool, it’s a super-exciting language”, but I jumped ship. I’m like, I wanna be more productive, I wanna use all the fun toys, and so I started doing Go.

**Jerod Santo:**

But it's super cool to see Toby and the team bringing their CLI tools to the broader community.


**Break:**

**Jerod Santo:**

That's the news for now. Stay tuned for our regular edition of The Changelog on Friday when I go one-on-one with Liz Rice. If you've been living under a cloud native rock, Liz is the Chief Open Source Officer with eBPF pioneers Isolovalent. If there's one person on earth who could best school us on the power of ePBF, it'd be Liz. And she'll do just that on Friday. Have a great week. Talk to you then.
