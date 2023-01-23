
**Jerod Santo:**

What up fellow nerds, I'm Jerod and this is Changelog News for the week of Monday, January 23rd 2023.

**David Spade:**

My fellow nerds and I will retire to the nerdery with our calculators.

**Jerod Santo:**

Here's a quick shout out to everyone who joined Changelog++ last week: Thank you to Justin, Tim, Tim, and Andrew. We truly appreciate your support.

Remember yall, Changelog News is a labor of love. We don't make a dime on it. If you get value from these Monday episodes, return some value with a Changelog++ membership.

**Carl Spackler:**

[Hey, Lama! How about something, you know, for the effort.](https://www.youtube.com/watch?v=TkLH56VlKT0)

**Jerod Santo:**

As with everything we do here at Changelog, ++ is a work in progress. If you've considered signing up, but something stopped you... We'd love to hear about it. Please email editors@changelog.com and tell us what's up. Okay, let's get in to the news.

**Break:**

**Jerod Santo:**

Max Countryman wrote up a framework for prioritizing tech debt. Remember, not all technical debt is bad, It's a lot like financial debt. Debt that is secured again an asset, especially one with good odds of appreciating like a house, is much better than debt that is wrapped up in depreciating assets, like cars, or highly volatile things, like crypto currencies or startups.

One of our favorite episodes of 2020 was with Jon Thornton from Squarespace talking about what he thinks are three good kinds of tech debt. Here's a moment from that conversation, where we compare tech debt somewhat directly to your mortgage:

**Tech Debt Clip:**

[The Changelog #379]()https://changelog.fm/379

**Jerod Santo:**

Reading Max's post, he agrees that tech debt is often a necessary thing, stating "if a growing company isn't taking on some measure of leverage, then it's likely not shipping as fast as it should be."

But there comes a time, and sooner is usually better than later, when you have to pay down the debt you've been accruing. But how is the best way to go about it? That's where Max's post focuses most of its efforts. His suggested process includes surveying the debts you have, assigning effective interest rates based on how active or dormant the subsystem is and how much it costs to maintain, then prioritizing paying it down based on those rates, much like you'd pay off high interest loans before the low interest ones.

Finally, Max has this to say about the entire process. "In the end the key thing here is to use frameworks like this to remain solvent in terms of our code base and product workflow. With tools like this, we can avoid bankruptcy (literally and figuratively)."

**Michael Scott:**

[I declare bankruptcy!](https://www.youtube.com/watch?v=T_d3teq6pWw)

**Break:**

**Jerod Santo:**

When's the last time you saw a GitHub repo reach over one thousand stars without any code in it? The only one I could think of is Kelsey Hightower's hilarious nocode repo, which has over 55k stars. But that one's just a great joke, this UI repo by user shadcn... or maybe shadcn... I dunno how to say it: s-h-a-d-c-n has a UI repo with over 1300 seemingly legit starsgazers and no UI code in it. What's being promised sounds promising though.

It's not a component library. Instead, it's a set of components that you can copy and paste into your apps. It's being built with Radix UI and Tailwind CSS and the author has been posting some impressive looking screenshots on Twitter as it's being built.

What I like about this most, and why I'm featuring it despite its vaporware-iness, is the idea. There's a Go proverb that says "a little copying is better than a little dependency". I've found that to be true most of the time, and I have a feeling it's even more true when it comes to UI components than when it comes to most other areas of the stack.

Not that this is an entirely new idea. I'm thinking of it a lot like those SVG icons where you can just copy/paste the svg tag into your html and you're done. Only this is much more ambitious than that.

Now, the code is supposed to materialize by the end of January, so maybe it's there by the time you're listening to this, I'll be interested to see how this copy/paste style plays out in practice.

**Break:**

**Jerod Santo:**

Justin Etheredge shared 20 things he's learned in his 20 years as a software engineer and Changelog Weekly readers were there for it, making Justin's learnings the most-clicked link in yesterday's newsletter.

If you're a weekly reader, you already know my three favs from Justin's list. 1. The best code is no code, or code you don’t have to maintain, 2. Every system eventually sucks, get over it, and 3. Your data is the most important part of your system

There are 15 more where that came from. Reader Dwayne Bradley commented to share his favorite: "Sometimes you have to stop sharpening the saw, and just start cutting s!@$", or in Dwayne's words: “stop TALKING about doing something and and just DO it already.”

**Break:**

**Jerod Santo:**

In an attempt to demystify git for users of all experience levels, Jacob Stopak got thinking: "What if you could easily get a visual picture of how any Git command would impact your local repo, without interrupting your dev workflow?"

What resulted was git-sim: a command-line tool written in Python that allows Git users to quickly and easily generate images (or even video animations) illustrating the impact a Git command will have on the local repo.

You can simulate a git reset, a merge, a rebase, all kinds of stuff! Install git-sim with pip and check out the source on GitHub.

**Break:**

**Jerod Santo:**

Trying something new this week!

**John Cleese:**

And now for something completely different.

**Jerod Santo:**

I put out a request on Twitter and Mastodon this morning for people to link up cool or offbeat projects they're working on or playing with and we're featuring the most interesting one, IMHO, here on the show.

Mattias Wadman tooted me his jqjq project. It's an implementation of jq in jq. And when I say "in jq" it means it's written in the jq programming language. Yes, jq, which started life and still is primarily a command-line JSON processor is, according to Mattias, a very expressive, capbale, and nice language!

jqjq is mostly for learning, experimenting and fun. He was researching how to write decoders directly in jq for fq, his Go-based jq-alike for binary formats, which ended up involving some syntax tree rewriting and walking and then it grew from there.

**Fake Johnny Carson:**

[That is weird, wild stuff. That is funny I did not know that.](https://www.youtube.com/watch?v=Sas71tmPFAs)

**Jerod Santo:**

We might do this again soon. If you're building something offbeat or weird, follow me on Twitter @jerodsanto and on Mastodon @jerod@changelog.social and hit me up with a link some Monday morning.

**Break:**

**Jerod Santo:**

That is the news for now. If you dig the show, share it with a friend and consider a Changelog++ membership to directly support our work.

We'll be back in your ear holes on Friday with a fascinating conversation all about mainframes. Yes, mainframes are still very much a thing and we talked to a pre-eminent educator who's teaching Cobol and other mainframe tech today. Like, he's probably in class right now.

Have a great week, and we'll talk to you again on Friday.
