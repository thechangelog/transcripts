**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 3rd, 2025.

Remember Skype? Microsoft recently [announced on X](https://x.com/Skype/status/1895477868261412953) that starting in May of this year, it's going bye-bye. As early-days podcasters, we had a love/hate relationship with the O.G. video calling platform, especially after MS took it over. Skype hasn't been relevant for years, but it's still a bit sad to see it go. I don't miss the software, but I'll always have a soft spot in my heart for its classic [incoming call sound](https://www.youtube.com/watch?v=sXmA95q6HOE).

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[JavaScript fatigue strikes back](https://allenpike.com/2025/javascript-fatigue-ssr)

Allen Pike returned to the JavaScript ecosystem after a ten year hiatus. A lot has improved in the interim, but he found one constant:

> These changes have each boosted the ecosystem in its own way. And each has fueled one dynamic that has not changed: **choosing the right JavaScript framework is hard, man**.

Allen thinks through some framework choosing decisions, then ends his post on an upbeat:

> I think, though – and this may just be my innate optimism – that the situation has improved a lot. And now that the JavaScript ecosystem is building frameworks that can share code between the client and server but keep most of it from being sent to the browser, the next 10 years of evolution should be less disruptive than the last.

I hope you're right, Allen. I hope you are right.

**Break:**

**Jerod Santo:**

[The early days of Linux](https://lwn.net/Articles/928581/)

Lars Wirzenius was there at the birth of Linux, having met Linus Torvalds at the University of Helsinki in 1988. In this 2023 contribution to LWN, Lars tells the story from his perspective. It all started with a typo?

> Toward the end of that first year, we had gotten access to a Unix server, and I accidentally found Usenet, the discussion system, by mistyping `rm` as` rn`, the Usenet reader. I told Linus about it and we spent way too much time exploring this.

There's lots of fun gems shared here. Like this one that shows Linus' humble aims:

> In August 1991, Linus mentioned his new kernel in public for the first time, in the `comp.os.minix` newsgroup. This included the phrase "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)"

For many of us, Linux has always been a core piece of our computing lives. It's easy to forget that it hasn't always existed, or that its dominance was at one time unsure (even unlikely). Stories like this, told by the people who lived it, always remind me of this great insight from Steve Jobs:

> Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it, you can build your own things that other people can use.
>
> Once you learn that, you’ll never be the same again.

**Break:**

**Jerod Santo:**

[If it is worth keeping, save it in Markdown](https://p.migdal.pl/blog/2025/02/markdown-saves)

Piotr Migdał says that as a data scientist, he turns things into vectors. As an unabashed archivist, he turns things into Markdown.

> Markdown files are essentially plaintext with some extra syntax for common elements like sections, bullet points, and links. The format deliberately avoids precise control over display details like font selection4. Following [the rule of least power](https://en.wikipedia.org/wiki/Rule_of_least_power), I consider this limitation a feature. For contrast, consider PDF - a format so powerful that [it can run Doom](https://www.reddit.com/r/itrunsdoom/comments/1i02c6b/doom_in_a_pdf_file/).

He goes on to explain how he does it, tools that help, and what he'd like to exist in the world to make this all easier/better. But the main point is the main point. When it comes to things that have to last, plaintext is great and Markdown is a great format for your plaintext.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Next Edit understands the ripple effect of code changes](https://www.augmentcode.com/blog/introducing-next-edit-for-vscode?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)

The newest feature from our friends at Augment Code one I've wanted my entire career.

Every dev out there knows the pain that follows updating a field in one file. Now you're hunting throughout all the various places in the codebase to update SQL queries, tests, and type definitions. What should be a simple change becomes a tedious game of find-and-replace.

Next Edit is their solution to this problem. It extends beyond the cursor by understanding the ripple effects of your changes and automatically suggests necessary updates across your entire workspace. While you code, it's scanning your codebase, identifying dependent files, and generating contextual suggestions that keep your code in sync.

And guess what, Next Edit is available today to everyone using Visual Studio Code. All you have to do is pull the latest update to the extension and Next Edit will be there to help you get more done.

Curious how Next Edit does what it does? The team behind it also shared [their AI research](https://www.augmentcode.com/blog/the-ai-research-behind-next-edit) behind the feature.

Cool stuff! Links in the newsletter.

**Break:**

**Jerod Santo:**

[Git is getting gamified](https://initialcommit.com/blog/im-making-a-git-game)

[Git-Sim](https://github.com/initialcommit-com/git-sim) creator, Jacob Stopak, is back with an even more ambitious project than his original tool to visualize Git commands. This time, he's putting everyone's favorite (but difficult to conceptualize) distributed version control system into a *Minecraftian* voxel world you can explore a repo's history in 3D.

The linked announcement post tells the entire Devlands journey, including the $2,660.16 Jacob dropped on a domain he later realized he couldn't use. Ouch!

**Break:**

**Jerod Santo:**

[Functions in CSS?!](https://css-tricks.com/functions-in-css/)

Did you know CSS is (close to) getting first-class function support?! You can use them today in Chrome Canary (behind an experimental flag) and hopefully in other browsers soon. Where to turn for a nice rundown? CSS-Tricks, of course!

> Arguments?! Return values?! That’s worth spitting my coffee out for! I had to learn more about them, and luckily, the spec is clearly written, which [you can find right here](https://drafts.csswg.org/css-mixins-1/).

Juan Diego Rodríguez does a great job laying out the details on how they work (they can have type-checking, they can have list arguments, they cannot return early, etc.) and imagining cool use cases for them. He thinks the future is bright...

> There’ll be a time when our cyborg children ask us from their education pods, “Is it true you guys didn’t have functions in CSS?” And we’ll answer “No, Zeta-5 ∀umina™, we didn’t” while shedding a tear. And that will blow their ZetaPentium© Gen 31 Brain chips.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan this week's companion Changelog Newsletter for even more links worth clicking on: including, Ludic's guide to getting software engineering jobs, Open source is where dreams go to die, Begrudgingly choosing CBOR over MessagePack, and a new feature I'm testing out called the Developer's Dictionary.



Last week on the pod Adam spoke with Anurag Goel from Render and we both Kaizen'd with Gerhard Lazu! Scroll back in your feed for those awesome conversations and stay tuned for some upcoming bangers!

Redis creator, Salvatore Sanfilippo (Antirez) on Wednesday and we play Friendly Feud with our JS Party peoples on Friday.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
