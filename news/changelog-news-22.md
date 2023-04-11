**Jerod Santo:**

Hidley ho!

**Ned Flanders:**

[Hidley Ho, neighborinos!](https://www.youtube.com/watch?v=o_YBngq5mc0)

**Jerod Santo:**

I'm Jerod and this is Changelog News for the week of Monday, November 28th 2022.

It's hard to believe, but 2022 is almost a wrap. Adam and I are prepping once again for our 5th annual state of the “log” episode where we look back at the year, discuss some of our favorite episodes, the most popular ones, and talk a bit about what we have in the works for 2023 and beyond.

Last year we included listener voices for the first time, and I thought it turned out super cool, so we're doing it again. Please share with us your favorite Changelog guests, topics, or a-ha moments you’ve had over the last year.

If you get your message included in the episode, we’ll send you a free t-shirt.

It doesn’t have to be super produced. Just pop open your Voice Memos app on your phone or use QuickTime or Audacity on your laptop. Tell us what’s on your mind.

Then upload your audio to [changelog.fm/sotl](https://changelog.fm/sotl) (short for state of the "log"). Once again that's changelog.fm/sotl.

**Ben Stiller:**

Do it. DO IT.

**Jerod Santo:**

Ok. Let's get into the news.

**Break:**

**Jerod Santo:**

We start with a PSA: Heroku will delete all free dbs and shut down all free dynos today. And by today I mean Monday, November 28th. If you're listening to this on delay... sorry too late.

**Bloodsport:**

[Too late? No such thing as too late.](https://www.youtube.com/watch?v=lMYZX50ILMc)

**Jerod Santo:**

"free" dynos, "hobby-dev" Heroku Postgres, and "hobby-dev" Heroku Data for Redis plans are affected. It's the end of an era, for sure. Where will you move your small and personal web projects? What about starting new ones? I'd love to hear where and why. Let us know in the comments.

**Break:**

**Jerod Santo:**

Stable Diffusion 2.0 dropped last week to much excitement... but it quickly turned to mixed responses once people started playing with the results. Shawn "swyx" Wang has a solid rundown of what's new and what's disappointing the Stable Diffusion community on his L-Space Diaries Substack. After displaying a bunch of side-by-side results from identical prompts Swyx says: If you looked closely and couldn’t decide if SD2 was better than SD1, you weren’t alone...

That said: the task of deciding if a generated image is “better” or “worse” is quite subjective and hard to quantify across a literally infinite unbounded latent space - FID scores being the best we have so far.

and: prompts are a moving target - the same prompt generates different things in SD1 vs Midjourney 3 vs Midjourney 4 vs Dall-E 2 vs SD2 - and users will discover new magic keywords and best practices that subjectively improve results. So perhaps SD2 initially looks “worse” than SD1, but then improves as users learn how to wield it better.

He goes on to explain why "prompt engineering" itself is a product smell. Good stuff, worth a read.

**Break:**

**Jerod Santo:**

Real Twitter SRE, Matthew Tejo, writes: "Twitter supposedly lost around 80% of its work force. What ever the real number is, there are whole teams with out engineers on it now. Yet, the website goes on and the tweets keep coming. This left a lot wondering what exactly was going on with all those engineers and made it seem like it was all just bloat. I’d like to explain my little corner of Twitter (though it wasn’t so little) and some of the work that went on that kept this thing running."

Matthew was an SRE for five years at Twitter, working on the Cache team. That's Cache with a capital "C", not the generic idea of caching things, Twitter's Cache is a core part of their infrastructure. He explains in this post how the Cache works and how it keeps running even with nobody around to scale it up and down. It's a fun and interesting read, but the coux de grace is in the comments, where Johnny Manu 40 said, "When everything works fine, they wonder why they hired you. When everything stops working, they wonder why they hired you. IT in a nutshell"

**Austin Powers:**

[No, this is me in a nutshell...](https://www.youtube.com/watch?v=rsmfH0On_ds)

**Break:**

**Jerod Santo:**

Odds are, you've never heard of Git Notes. Tyler Cipriani calls it Git's coolest, most unloved feature... and says they're almost a secret. What are git notes? They're a built-in place to stow metadata about anything tracked by git—any object: commits, blobs, and trees. All without futzing with the object itself.

One example use of this is the git project itself, which uses notes to link each commit to its discussion on the project's mailing list. But that's just the start and we'd see a lot more uses of this if more people knew about the feature. Tyler shares a few ideas of his own in his blog post, but just having knowledge of its existence is half the battle.

**GI Joe:**

[Knowing is half the battle.](https://www.youtube.com/watch?v=pele5vptVgc)

**Break:**

**Jerod Santo:**

That is the news for now. Up next in our All Things Open bonus series we have Joel Lord telling us all about how he brews beer with help from IoT and JavaScript.

Have a great week and we'll talk to you again real soon.
