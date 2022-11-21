**Jerod Santo:**

What up, nerds?! I'm Jerod and this is Changelog News for the week of Monday, November 21st 2022. Let's do it.

**Break:**

The top story from Sunday's edition of Changelog Weekly was Matt Healy announcing, "Your next smart home device is a $30 used Kindle". He says:

"... a lot of tools that used to be separate have now converged into one: the phone.

You might not buy another camera again, and you probably won’t buy a calculator. For the most part, it’s a good trade-off: what we lose in the tactile pleasures of a good single-purpose device, we gain back tenfold in having all those devices in our pocket all the time.

That’s all fine for calculators, cameras, music players, and the like — things that are there when we need to use them, and can forget about when we don’t. But our phones are also the nexus of all kinds of data we want pushed to us — news, messages, notifications, alerts, status updates. Things we want to know about without going looking for them.

A phone isn’t actually great for this kind of ambient awareness. It’s usually in a pocket or purse, so the ways it can get our attention are limited: a buzz, a notification on the lock screen, a red dot on an app icon. I can choose to let myself be interrupted, or I can compulsively check in to see what the latest alerts might be.

I’ve found myself wanting a less intrusive channel for ambient data. Something I can glance at in passing, without giving my full attention or opening myself up to whatever other interruptions my phone might have in store. It should be easy to check, but just as easy to ignore."

The device he landed on is, you guessed it, a wifi-connected Kindle 4 mounted on the wall. In the post he walks you through why this is the perfect setup: why e-ink, why a kindle, why a screenshot of a web page... he also provides instructions so you can set up a $30 Kindle to do the same.

**Break:**

**Jerod Santo:**

Amidst all the Twitter turmoil, Mastodon is bustin at the seams as technologists from all around the world turn to the Fediverse and ActivityPub as a potential answer to their social networking woes. As a result, I spent some time last week setting up an official Changelog instance hosted by our partners at Fly.io. It was pretty easy, thanks to Docker and a config repo by Aman Gupta Karmani that I forked and customized for our use. I'll link to his and our fork in the show notes, if you're curious how everything's wired together.

**Series of Tubes:**

[Tubes!](https://www.youtube.com/watch?v=_cZC67wXUTs)

**Jerod Santo:**

Adam and I first spoke with Mastodon creator Eugen Rochko in September of 2018. That was episode #315 of The Changelog which, it turns out, is more relevant today than ever. Take a quick listen.

**Eugen Rochko:**

In March 2016 I just wanted to check, “Well, how is that GNU social thing doing right now?” I saw that it was still alive, but it obviously looked kind of awful visually… So I was like, “Yeah, I like using TweetDeck; I kind of wanna make an interface for it that works like TweetDeck, and that looks good, and maybe people will switch.” But I didn’t have any big ambitions about that; I just I’d make something that people who really used GNU social would just switch to. I wasn’t expecting anyone from outside that circle to make a jump.

I soon found that GNU social had a rather arcane codebase, and very old-style PHP. I kind of decided to try starting from scratch…

**Jerod Santo:**

We called that episode, "Join the federation?! Mastodon awaits..." and I did set up a changelog account on mastodon.social after publishing, but we never ended up using it. I guess Mastodon had to wait a few years for us to finally join the federation, but we're here now. You can find us at changelog.social/directory

**Break:**

**Jerod Santo:**

The AI-in-your-devtools revolution continues apace.

**T2:**

[Come with me if you want to live.](https://www.youtube.com/watch?v=pfw-MgDlE4w)

**Jerod Santo:**

This time, Anurag Bhagsain puts GPT3 all up in your CLI, answering your questions. After installing with `npm` and configuring your OpenAI API key, you can ask it how to do things, such as `ai ask "Check process running on port 800"`. It will take that question, hit OpenAI's GPT-3 API, and return its best guess at the matching command. In this case, `lsof -i tcp:8000`

**T2:**

[Trust me.](https://www.youtube.com/watch?v=pfw-MgDlE4w)

**Break:**

**Jerod Santo:**

What's better? Bad software architecture? Or no architecture at all? Kirill Rogovoy argues it's the latter. He says, "It took me several years to learn how to write code that scales to 10s of team members and a million lines of code. It took even more time to learn to write stupid code again.

Turns out, "building a solid architecture" in your code can easily be busy work and procrastination.

Turns out, you can waste a lot of energy trying to get rid of all code duplication and coming up with powerful abstractions to support "future use cases."

Turns out, one part of your code can intentionally be a well-thought, protected piece of engineering marvel, while the other one should get you fired."

He doesn't claim to have the answers yet, but shares a few practical heuristics that have helped him avoid poor outcomes: one: no code is equal, two: let it beg for structure first, and three: always start with one

If you want to know what exactly those things mean, read the post.

**Break:**

**Jerod Santo:**

That's the news for now, but stick around for a fun bonus conversation with Mish Manners in the hallway track at ATO '22.

Coming up on Friday, we revisit last Fall's episode with Gergely Orosz on the insane tech hiring market. Things couldn't be more different than they were a year ago, and Gergely has been tracking and reporting on all the goings on. He has some great insights on where we're headed, solid thoughts on how to avoid being laid off, if possible, and actionable advice about moves you can make to get back on your feet quickly.

Have a great week and we'll talk to you again real soon.
