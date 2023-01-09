**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, January 9th 2023. What are we waiting for? Let's get into the news.

**Break:**

**Jerod Santo:**

First up, this week's top clicked link in yesterday's Changelog Weekly newsletter. And it's Brandur Leach's simpler alternative to `deleted_at` for soft record deletion.

Real talk: the popularity of this one surprised me. Seven hundred-ish people found it interesting enough to click through in the first 24 hours since we shipped the email! Y'all are either super in to posts on application and database design, morbidly curious of the details  behind Brandur's proposed strategy, or were sold on this epic pull quote, which I get zero credit for writing, but 100% credit for pulling, when Brandur said: "Speaking from 30,000 feet, programming is all about tradeoffs. However, this is one of those rare places where as far as I can tell the cost/benefit skew is so disproportionate that the common platitude falls flat."

Did you click on this link in Changelog Weekly? If so, I'd love to hear from you 'why' you clicked. Let us know in the comments or hit me up with a quick email at jerod@changelog.com

**Break:**

**Jerod Santo:**

Lane Wagner wrote up 20 rules of thumb for writing better software, and my oh my am I a sucker for the intersection of listicles and software development best practices.

**LLoyd Christmas:**

[I like you a lot.](https://www.youtube.com/watch?v=XXYiW5aHeGA)

**Jerod Santo:**

I'll read you five of Lane's rules. If you like them a lot check out his post for the other 15.

1.  Optimize for simplicity first
2. The cost of building a feature is its smallest cost
3. Reading is more important than writing
4. Changing the rules is better than adding exceptions
5. API surface area is a liability

Ok here's a bonus one because I don't really get it and maybe you can help me out: Any style is fine, as long as it’s black. I don't know what that means, maybe he's referring to 'black', the popular Python formatting tool? Beats me, but it does give me an excuse to include this gem of a one-liner from the Fast and Furious movies, whose creators are much better at product placement than they are at writing...

**Dominic Toretto:**

[You can have any brew you want, as long as it's Corona](https://www.youtube.com/watch?v=2bWfayKf_iM)

**Break:**

**Jerod Santo:**

You've probably heard the popular refraign: fake it till you make it. Well,  Nicolas Carlo out a new spin on the old saw. He says fake it until you automate it. And I agree with him.

In a post detailing how Nicolas automated the deployment process of an old legacy project, he lays out a powerful template for habit creation writ large, especially in software teams. In his case, he wanted a single command to deploy the software, so he created the command that would eventually do all the dirty work, but built it in an iterative fashion starting with it just spitting out a step by step guide to doing it manually. Then, one step at a time, he could automate the manual parts, replacing the documentation with working code.

His post isn't generic at all, though. Nicolas includes working code that he actually wrote along the way. He then lists the merits of this process: first, it creates a deployment command that your team will get used to call, it also forces you to collect information about the deployment process and update them, it creates an executable source of truth for deployments, it creates clear next steps for truly automating them, and finally, it splits the problem of "automating deployments" into smaller steps that can be addressed incrementally.

This idea doesn't only apply to deployments though. Perhaps you could wield it in your own work to great benefit.

**Spaceballs:**

[Now let's see how well you handle it.](https://www.youtube.com/watch?v=dy40xASCl00)

**Break:**

**Jerod Santo:**

Felix A. Crux thinks feeds are the only civilised way to read online.

**Obi Wan Kenobi:**

[An elegant weapon for a more civilized age.](https://www.youtube.com/watch?v=vQA5aLctA0I)

**Jerod Santo:**

Felix decries social media, saying it has a "host of problems like clickbait; outrage amplification; snooping targeted advertising; radicalising rabbit-holes; echo-chambers and filter bubbles; algorithms choosing what to show you based on “engagement” rather than what you’d want for yourself; and on and on."

He then says, "There’s a better way — and there has been for decades!" And, yes, he's talking about RSS. I couldn't agree more! In fact, this very thing was on my wishlist for 2023 on JS Party's 4th annual New Year's episode last week.

**JS Party:**

[Clip.](https://jsparty.fm/257)

**Jerod Santo:**

We all have our reasons, but for Felix it comes down to these three: 1) it just works really well, 2) in his opinion it's healthier than social media, and 3) it promotes the older, more independent, non-commercial version of what the Web could be.

**Break:**

**Jerod Santo:**

Last story for this week, it's Ben Johnson on AI and the big five tech companies. Ben says that the big story of 2022 was the emergence of AI with DALL-E, MidJourney, Stable Diffusion, followed by ChatGPT. It seems clear to him that this a new epoch in technology, so he took some time to analyze how Apple, Amazon, Meta, Google, and Microsoft stand to win or lose in the new age.

Ben goes deep on each and I wouldn't be doing him justice by summarizing, but that's never stopped me before, so here's one sentence summaries that pale in comparison to their subject...

Apple is seizing the opportunity that Stability AI dropped in their lap by making Stable Diffusion open source.

Amazon sits pretty with AWS available to run both training and inferrence at scale, but that depends on factors like whether they can provide enough GPUs for the demand and how much of these tasks will be run server-side vs on-device.

Meta's advertising tools stand to gain, but who knows what will happen if and when the end-age for algorithmic timelines is AI content.

**Dodgeball:**

[I just threw up in my mouth a little bit.](https://www.youtube.com/watch?v=TGPYBb2DRsg)

**Jerod Santo:**

Google's position is the most tenuous, since generative AI is a direct threat to search, their cash cow.

and Microsoft seems the best placed of all. It has cloud services like Amazon, deep investments in OpenAI, and perhaps now a way to make Bing truly compelling over the next few years.

Those summaries were not written by an AI, but they also weren't that great, so you should read Ben's words directly, I think.

**Break:**

**Jerod Santo:**

That is the news for now. This week's interview episode features a one-on-one conversation with yours truly and Yehonathan Sharvit, author of data-oriented programming.

Have a great week, and we'll talk to you again on Friday.
