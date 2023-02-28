**Jerod Santo:**

What up, nerds. I'm Jerod and this is Changelog News for the week of Monday, February 27th 2023.

Let's do it.

**Break:**

**Jerod Santo:**

Some fascinating details about Stack Overflow's architecture were shared by Sahn Lam on Twitter. It is a multi-tenant monolithic app serving 2 billion monthly page views across 200 sites.

It's hosted on-prem, with only nine IIS web servers, each running highly optimized .NET code, handling 6000 requests per second.

SQL server has 1.5TB of RAM with no caching layer. The entirey of the questions-and-answers dataset is about 4.5 terabytes, so it can keep up to a third of it in RAM.

No microservices, no cloud, and a single database instance? Quick, send them some high-priced consultants to rearchitect from first principles before the site falls over.

**The Simpsons:**

[Sarcasm detector!](https://www.youtube.com/watch?v=EZ73Q4DwrGM)

**Break:**

**Jerod Santo:**

Hillel Wayne started a killer lobsters thread the other day by asking, "what are some killer libraries for your language of choice?"

**Fry:**

[Shut up and take my money!](https://www.youtube.com/watch?v=uASUHbFEhWY)

**Jerod Santo:**

Two examples he gave in the setup were Ruby on Rails, which was so good for webdev at the time that it justified using Ruby and Pandas, which is so good for data science it justifies using Python.

117 comments later... there's a lot of gems in this list. I read it so you don't have to, but I'll highlight just a few of the most upvoted responses, so if you want more like this follow the link in the show notes.

Go Time regular guest Carl Johnson picked Go's standard library, with some dissent in the replies...

user rcorder says Rust's serde is a go-to for them, because it makes writing simple network services in Rust so nice...

Yonkeltron says one of the biggest reasons they gravitate towards Elixir is because of OTP, a set of tools and libraries that Elixir inherits from Erlang...

And finally, user x64k says they kept slashing their list down until it was just Qt. Claiming, "I know a lot of really good libraries for all languages but realistically there are probably good alternatives for all of them if you look outside their language’s ecosystem. Qt is hands down the one killer library I know."

**Break:**

**Jerod Santo:**

The recently released Linux 6.2 is the first mainstream Linux kernel you can run on Apple's M1-powered machines.

**Young Frankenstein:**

[It's alive!](https://www.youtube.com/watch?v=0VkrUG3OrPc)

**Jerod Santo:**

Getting Linux ready for the M1 wasn't easy, writes ZDNet's Steven Vaughan-Nichols. Fortunately, Asahi Linux's Alyssa Rosenzweig was up to the challenge.

Side note: Are you Alyssa Rosenzweig? Or, more likely: do you know Alyssa Rosenzweig? And how do you say Rosenzweig?

**Young Frankenstein:**

It's Frank-en-stein!

**Jerod Santo:**

We'd love to have her on The Changelog to discuss Linux hacker tinkering with graphics drivers!

Linux 6.2 with M1 support is out now and it's expected to become Ubuntu 23.04's default kernel and to be included in Fedora 38 before the late April release of Linux 6.3.

**Break:**

**Jerod Santo:**

After hearing Justin Searls on our "Don't sleep on Ruby on Rails" episode and reading all of the recent hubbub around Single Page App fatigue, including Zach Leatherman's "History of React criticism", Alex Russell's The Market for Lemons, and Lauris Voss' "The case for frameworks"... Johan Halse decided it was time to weigh in.

His post, titled "What to expect from your framework" starts by pointing out how React, Vue, Svelte, Solid and friends aren't actually frameworks. They're view layer libraries that don't make an application, Enter Next, Nuxt, SvelteKit, Blitz, etc.

But from where Johan sits, even these are barely frameworks. He says, "The frontend component ecosystem is a very bring-your-own-ideas, have-fun-reimplementing-CSRF kind of party."

"It’s all SO MUCH WORK, and why are we doing this again? Optimistic commits? Fewer redraws on state change? Avoiding jQuery soup? I mean I agree that these are laudable goals: we probably don’t want to devolve back to an imperative programming hairball, but man, I wish there was a better way."

If you've been listening closely, you know what Johan is going to say next.

**LLoyd Christmas:**

[Samsonite! I was way off](https://www.youtube.com/watch?v=G4ev-BtPMM8)

**Jerod Santo:**

Did you guess Rails? Yes, he says Rails. I'll leave it right there, but Johan has more to say. Worth a read, for sure.

**Break:**

**Jerod Santo:**

Eli Bendersky is now using GoatCounter for his blog analytics.

**Goat boy:**

[Mee oohhhh aahhhhh](https://www.youtube.com/watch?v=daugz1DSQ5I)

**Jerod Santo:**

GoatCounter is an open source web analytics platform available as a (free) hosted service or self-hosted app. Here's four reasons why Eli picked it:

1.  Very privacy oriented, collecting so little data that a GDPR notice isn't even required.
2. Light-weight; the added JS file is only 8 KiB and the server is fast: 99.9% of requests are answered within ~2ms
3. Can be self-hosted, which both reduces the cost if I already run a server and reduces dependencies.
4. OSS and written in Go. This is not just a stylistic preference; since Go builds static binaries, the goatcounter tool is trivial to download and run. Much easier deployment than, say, tools written in PHP.

I love all those reasons! But I have to admit the web UI leaves a lot to be desired...

**Freeway:**

[Look who got beat with the ugly stick](https://www.youtube.com/watch?v=Ph3aCaj86oo)

**Jerod Santo:**

In all seriousness, it's not that bad. And it's a great opportunity for an open source design contribution. Hint hint. Nudge nudge.

**Break:**

**Jerod Santo:**

That is the news for now. This week on The Changelog we are joined by Brigit Murtaugh from the VS Code team to learn all about development containers, which let you use a container as a full-featured dev environment locally or remotely, in a private or public cloud.

Have a great week, share the show with a friend if you dig it, and we'll talk to you again real soon.
