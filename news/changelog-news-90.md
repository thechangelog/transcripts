**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 15th, 2024.

For a limited time only, I'm trading [Changelog Sticker Packs](https://merch.changelog.com/products/changelog-sticker-pack) for thoughtful, 5-star reviews on Apple Podcasts and Spotify. Send evidence of a new review (on _any_ of our pods) to jerod@changelog.com with a mailing address and I'll hook you up with the goods. Let's do this!

Ok, let's get into the news

**Break:**

**Jerod Santo:**

[Devin's Upwork "side hustle" exposed](https://www.youtube.com/watch?v=tNmgmwEtoWE)

YouTuber [Internet of Bugs](https://www.youtube.com/@InternetOfBugs) posted a lengthy breakdown exposing Devin creators ([Cognition Labs](https://www.cognition-labs.com)) for falsifying claims about their "world's first AI software engineer." Devin was pitched as a fully autonomous software developer and one of the more impressive demos showed it completing and getting paid for freelance jobs on Upwork.

Sound too good to be true? It did to _Internet of Bugs_:

> I broke down the Devin Upwork video frame by frame, and here I show what Devin was supposed to do, what it actually managed to do instead, and how bad a job of that it did. On the whole that's not surprising given the current state of Generative AI, and I wouldn't be bothering to debunk it, except:
>
> 1) The company lied about what Devin could do in the video description, and
> 2) a lot of people uncritically parroted the lie all over the Internet, and
> 3) That caused a lot of non-technical people to believe that AI might replace programmers soon.

Devin really did garner a LOT of attention (a.k.a. _money_) because of that demo. [We talked about it](https://jsparty.fm/317) on our shows (with a healthy amount of skepticism), so I'm thankful their claims have been debunked and I hope we all give Cognition Labs the side eye from here on out.

Exaggerating your development capabilities? Maybe Devin really is human after all...

**Break:**

**Jerod Santo:**

[Redis re-implemented with SQLite](https://github.com/nalgeon/redka)

Redka is Anton Zhiyanov's attempt to reimplement (in Go) the good parts of Redis with SQLite, while remaining compatible with the Redis API. The goal is to support five core Redis data types: strings, lists, sets, hashes & sorted sets.

This is cool, because so many devs (and tools) already know/love Redis' API, but the project's legal woes and administration needs (not that complex, but one more moving part) aren't ideal. SQLite, on the other hand... is entirely open source and the most deployed in-process database in the world.

Redka _is_ slower than Redis (2-6 times by early benchmarks), but that's no big surprise considering the relational backend and it can still do  22K writes/sec and 57K reads/sec, which is nothing to shake a stick at.

**Break:**

**Jerod Santo:**

[OpenTofu responds to Hashicorp's Cease and Desist](https://opentofu.org/blog/our-response-to-hashicorps-cease-and-desist/)

Last week's big story was Hashicorp's nasty-gram to OpenTofu and the question of whether or not they forked up by copying copyrighted Terraform code in an attempt to maintain feature parity.

The OpenTofu team has now issued their response, which includes a lengthy [source code origination document](https://opentofu.github.io/legal-documents/2024-04-03%20HashiCorp%20C%26D/SCO.pdf) and a 3-page letter written by their lawyer, with this sentence in bold text:

> To my client’s knowledge, none of the Terraform code subject to the BUSL has been improperly copied, incorrectly sourced, or used for any purpose.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[With Tailscale + AWS, you can](https://tailscale.com/events-webinars/tailscale-and-aws-webinar?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)

Save the date! On April 30th, our friends at Tailscale are doing a webinar covering how to connect to your AWS resources easily and securely, which lets you:

- Simplify AWS Connectivity by using Tailscale to reduce the complexity of managing secure remote access to the Amazon resources that power your organization
- Increase Security for AWS Access by enabling secure remote access from AWS VPC to EC2 instances, IP-based connectivity via subnet routing, exposing services in your EKS clusters and controlling plane to your tailnet.
- Achieve high-availability failover, seamlessly connect across availability zones, and deliver persistent resource monitoring and session recording to support compliance goals.

[Reserve your spot today](https://tailscale.com/events-webinars/tailscale-and-aws-webinar?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) by following the link in your chapter data and the newsletter. Thanks to Tailscale for supporting our work by sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Introducing Enhance WASM](https://begin.com/blog/posts/2024-04-08-introducing-enhance-wasm)

Brian LeRoux:

> Web Components are the browser native way to extend HTML. But as a primarily browser based technology they are defined with JavaScript which limits them to either rendering solely client side — which has janky performance, poor SEO, and is not optimally accessible — or within a server-side JavaScript runtime, which isn’t always an option for shops that use other backend runtimes.
>
> [Enhance WASM](https://enhance.dev/wasm) unlocks server-side rendering Web Components for any backend runtime.

Pretty cool! You write standard web components and then deploy them with any backend (Rails, Django, Node, Wordpress, etc). _Enhance WASM_ is an open source initiative, and they're looking for collaborators to join them on this mission.

Oh, and Brian has agreed to join me on an upcoming JS Party episode to discuss this effort in-depth.

**Break:**

**Jerod Santo:**

[PumpkinOS is a re-implementation of PalmOS](https://github.com/migueletto/PumpkinOS)

This is not your average PalmOS emulator... no PalmOS ROM required. It is a full-on re-implementation of PalmOS that runs on modern architectures (x86, ARM, etc) can run m68K PalmOS apps. It currently runs as a normal application on a host operating system, but efforts to [strip down the underlying things is underway](https://pmig96.wordpress.com/2023/02/24/pumpkinos-busybox-and-linux/).

As far as I can tell, this project is purely for the joy of it. That being said, it's written in C... so how much joy could there possibly be? 😉 Regardless, if you have PalmOS nostalgia and/or the desire to hack on some low-level code, check it out.

**Break:**

**Jerod Santo:**

That's the news for now, but this is episode #90, so that means it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Nathn N, Luke P, Addison G, Sonny B, Dominik S, Steven B, Richard W, Eric N & Christian B!

_We appreciate you_ for supporting our work with your hard-earned cash.

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, receive a free sticker pack in the mail, directly support our work & get shout outs like the ones you just heard.)

Have a great week, **don't forget that 5-star review if you want some stickers** & I'll talk to you again real soon. 💚
