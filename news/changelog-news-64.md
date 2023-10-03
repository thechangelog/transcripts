**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 2nd 2023.

It's hard to believe this little podcast+newsletter combo goes 64-bit with today's episode! This reminds me of the greatest N64 game of all times: [GoldenEye 007](https://en.wikipedia.org/wiki/GoldenEye_007_(1997_video_game)) (change my mind)

It's also hard to believe that our [JS Party](https://jsparty.fm) pod is creeping up on its 300th episode! This reminds me that we're accepting listener text & voice messages to compile a "Best of the fest" episode: [Submit yours at jsparty.fm/300](https://jsparty.fm/300) (get a free t-shirt)

Ok, let's get into the news

**Break:**

**Jerod Santo:**

A watchful Redditor posts /r/rust: "Looks like influxdb flipped the switch, deleted all the Go code, and is 99.5% Rust now!"

And InfluxDB co-founder/CTO replied with a detailed post on why they made the switch and their multi-year journey to arrive at this milestone. The 'why' (which Paul calls the normal reasons) include:

- No garbage collector
- Fearless concurrency (thanks Rust compiler)
- Performance
- Error handling
- Crates

And, of course, he felt compelled to answer for The Big Rewrite itself, saying: "I realize people think we're insane to rewrite the database yet again, but it's one of those things where hindsight is 20/20. If I knew then what I know now, I would have made different choices, but we also didn't have the same tools available in 2013 when we started it. I'm very confident that what we've landed on now is a very solid foundation that we can build on for many years. As long as I'm at Influx, it's going to be the last rewrite we'll ever need. I definitely don't have the stamina for another one ;)"

**Break:**

**Jerod Santo:**

Four years since the launch of the Raspberry Pi 4, the Raspberry Pi 5 has arrived with a performance boost and in-house silicon that adds support for PCIe 2.0.

A nice upgrade from the 4, notably includes a a component made by the Raspberry Pi Foundation for the first time: the southbridge. They call this "a step change in peripheral performance and functionality."

The Pi 5 will be available for purchase before the end of this month, starting at $60 for 4GB of RAM and you can get 8GB for $80.

**Break:**

**Jerod Santo:**

You know what time it is: Sponsored News!

Debugging distributed systems can feel like chasing ghosts. When requests fail or slow to a crawl, or are causing an error in another part of your stack, how do you pinpoint the issue when there are dozens of services involved?

Join Sentry's 20 minute workshop! Lazar Nikolov & Ben Peven will explore how distributed tracing can help you uncover those elusive bugs and performance problems. You’ll learn the nuts and bolts of distributed tracing and how Sentry visualizes requests and operations across your stack so you can find an issue’s root cause faster.

This event is 100% free and it runs on October 16th. Sign up today using the link in your show notes and get your tracing on. Thanks to our friends at Sentry for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Postman](https://www.postman.com) and other API explorer tools are rad, but as I told Abhinav Asthana (founder) when we had him on The Changelog [years ago](https://changelog.fm/360): they lost me when the product started focusing on teams, cloud stuff, collaboration, etc.

Bruno is cool because it's a lot like Postman (et al), but it stores your collections directly in a folder on your filesystem, using a plain text markup language called 'Bru'. Or maybe it's 'Bru', I dunno we might have to ask them...

"You can use git or any version control of your choice to collaborate over your API collections. Bruno is offline-only. There are no plans to add cloud-sync to Bruno, ever."

**Break:**

**Jerod Santo:**

Ok so InfluxDB is done with Go, but Xe Laso is not. Here they are on what makes a Linux distribution, why they believe Android isn't one, and why [gokrazy](https://gokrazy.org) (a Linux implementation written entirely in Go) is really cool:

> It boots in literal seconds, uses an insanely small amount of RAM out of the box, and runs with nearly zero overhead. When you configure your gokrazy install to run additional software, you do so by adding the Go command path to a configuration file and then updating to trigger a reboot into the new version...
>
> This is a very minimal system, and it's all you need to run statically linked Go programs. It's very easy to deploy your own services to it too. It's probably the easiest platform I know of that lets you just deploy a Go binary and have it run as a service, automatically restarting when it crashes.

Sounds pretty cool to me!

**Break:**

**Jerod Santo:**

This post is Matt Rickard doing what he does best: taking _years_ of hard-earned wisdom gained through experience and distilling it down to an easily-digestible list of learnings. "Debugging is programming, and programming is often mostly debugging. One of the most useful skills you can pick up as a developer."

Here's the first three (of 16) pieces of advice, all of which I've parroted on various pods over the years:

1. Reproduce with the smallest example. In the simplest environment.
2. Read and re-read the error statement. Read the stack trace. Add more logging if you don’t know where the error is thrown.
3. Change one thing at a time.

Check the full post for more of Matt's lessons. Here's one more to remember, from yours truly...

**Clip from JS Party:**

[It's almost always your fault.](https://www.youtube.com/watch?v=X42aF-ofrx8)

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great pods coming up this week:

- [Wednesday](https://changelog.fm): Daniel Thompson from Tauri on _The Changelog_
- [Thursday](https://jsparty.fm): Jarred Sumner from Bun on _JS Party_
- [Friday](https://changelog.com/friends): Mat Ryer returns on _Changelog & Friends_

Have a great week, **tell your friends about Changelog News** if you dig it, and I'll talk to you again real soon. 💚
