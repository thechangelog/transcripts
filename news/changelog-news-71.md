**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 20th 2023.

Merch Alert! Our [Merch Shop](https://merch.changelog.com/) is all stocked up (except for a few Go Time variants)! So, if you’ve been holding on to a coupon code or just waiting for your size to be available, now's the time to buy. We even have [Kaizens](https://merch.changelog.com/products/kaizen) available, but not for long! Get yours at merch.changelog.com.

Ok let's get in to the news.

**Break:**

**Jerod Santo:**

The OpenAI unraveling is still underway, and it's all happening so quickly that my coverage might be outdated by the time you're hearing this. The major events thus far, in case you weren't plugged in over the weekend (yes, all of this happened in the last 72 hours)

1. OpenAI's board announced that co-founder/CEO Sam Altman was fired
2. The reason: "he was not consistently candid in his communications with the board"
3. Co-founder, Greg Brockman (gdb), quits in response to Sam's ouster
4. Sam tweets "i love the openai team so much"
5. A (seemingly coordinated) barrage of OpenAI employees quote tweet his with their ❤️
6. Microsoft CEO Satya Nadella is furious, demands board reinstate Sam
7. After rumors swirled that they would renege, board doubles down on decision
8. Board hires former Twitch boss, Emmett Shear, as interim CO
9. Microsoft hires Sam and Greg. Sam is named CEO of a new advanced AI research team
10. 505 of 700 OpenAI employees threaten to resign and join Microsoft

Are you out of breath yet? I haven't even mentioned any of the reasoning, analyses, or backroom whisperings... And I won't! Because they're probably wrong and will definitely be outdated faster than your local Firefox install.

There will be countless blog posts, threads, books & maybe even movies telling this tale once we can look back at it and gather all of the evidence. For now, all I will say is that this is the biggest shake-up in the tech industry since last November when these same people launched ChatGPT in the first place...

**Break:**

**Jerod Santo:**

tldraw, the "very good free whiteboard" has a new experiment going with GPT-4 Vision where it will take a picture of the mockup you created, send the picture to GPT-4V & get back the HTML / CSS for a working website based on the drawing.

Wes Bos posted a quick demo video [on YouTube](https://www.youtube.com/watch?v=bnEf-4Kdwkg) where the feature makes him utter such adjectives as:

**:Wes Bos**

"unreal", "pretty impressive" & "unbelievable"

**Jerod Santo:**

The source is out there and you can try it for yourself (if you are cool with sticking your OpenAI API key into someone else's web app). This seems to be the start of something very cool. tldraw's Steve Ruiz says:

"We’ve barely scratched the surface of what you can do with this technology. And we can’t possible explore it all. Our hope is that you can take this starter and run with it, too.  You’ve got a canvas that can hold the whole internet and an AI that can see and think. What will you make?"

**Break:**

**Jerod Santo:**

HTML First is a set of principles that aims to make building web software easier, faster, more inclusive, and more maintainable by... Leveraging the default capabilities of modern web browsers, Leveraging the extreme simplicity of HTML's attribute syntax & Leveraging the web's ViewSource affordance.

Dang, that's a lot of leverage. I hope nobody gets hurt...

Tony Ennis, the author of the HTML First website, says: "The main goal of HTML First is to substantially widen the pool of people who can work on web software codebases... A second goal of HTML First is to make it more enjoyable and seamless to build web software. The way we achieve these goals is by acknowledging that **HTML is very easy to understand**, and thus using HTML as the bedrock of our product - not only to define content and structure, but also to set styling and behaviours."

As we've seen in the previous tldraw story, HTML is also **very easy to generate**... another great reason to use it as the bedrock of your product.

**Break:**

**Jerod Santo:**

It's now time for some Sponsored News!

Our friends at Neon have been taking the developer world by storm with their serverless Postgres offering.

What makes Neon's Postgres different? They separate storage and compute to make on-demand scalability possible. Compute activates on an incoming connection and scales to zero when not in use. Their storage is different too. The fault-tolerant scale-out system integrates with cloud object stores like S3 to offload cold data for cost optimization. Cool stuff!

Plus, their [Developer Days](https://devdays.neon.tech/stage?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) event is happening this week. Tune in to learn all about the new stuff they've been cooking up for Postgres and Neon users.

Oh, and did you know you can try serverless Postgres with a single command?!

Just `psql -h pg.neon.tech` and you're up and running with a scalable, cost-efficient & easy to use database.

Thanks again to Neon for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

James Somers wrote a "eulogy" to coding for The New Yorker: "I have always taken it for granted that, just as my parents made sure that I could read and write, I would make sure that my kids could program computers. It is among the newer arts but also among the most essential, and ever more so by the day, encompassing everything from filmmaking to physics. Fluency with code would round out my children’s literacy—and keep them employable. But as I write this my wife is pregnant with our first child, due in about three weeks. I code professionally, but, by the time that child can type, coding as a valuable skill might have faded from the world."

You already know the villain in this unfolding drama, but this long read by James weaves beautifully as it describes a future that is all-but inevitable:

"In chess, which for decades now has been dominated by A.I., a player’s only hope is pairing up with a bot. Such half-human, half-A.I. teams, known as centaurs, might still be able to beat the best humans and the best A.I. engines working alone. Programming has not yet gone the way of chess. But the centaurs have arrived. GPT-4 on its own is, for the moment, a worse programmer than I am. Ben is much worse. But Ben plus GPT-4 is a dangerous thing."

But where does that leave James' (and all of our) children? What do we teach them in the wake of change? He concludes,

"So maybe the thing to teach isn’t a skill but a spirit. I sometimes think of what I might have been doing had I been born in a different time...  was reading an oral history of neural networks recently, and it struck me how many of the people interviewed—people born in and around the nineteen-thirties—had played with radios when they were little. Maybe the next cohort will spend their late nights in the guts of the A.I.s their parents once regarded as black boxes. I shouldn’t worry that the era of coding is winding down. Hacking is forever."

**Break:**

**Jerod Santo:**

Laurence Tratt says:

"Premature optimisation might be the root of all evil, but overdue optimisation is the root of all frustration. No matter how fast hardware becomes, we find it easy to write programs which run too slow. Often this is not immediately apparent. Users can go for years without considering a program's performance to be an issue before it suddenly becomes so — often in the space of a single working day."

I'll forgive Laurence for accidentally spelling optimization with an 's', because that folly aside, the guy has some great advice on the subject. He shares his four main ways of going about it:

1. Use a better algorithm
2. Use a better data-structure
3. Use a lower-level system
4. Accept a less precise solution

In the linked post, Laurence goes through each of these and gives suggestions for the trade-offs involved.

**Break:**

**Jerod Santo:**

That's the news for now, but [stay tuned](https://changelog.fm) because on Wednesday we're sitting down with Emil Sjölander from Figma to hear all about how they brought Dev Mode to the designer/developer world.

Have a great week, **tell your friends about Changelog News** if you dig it, and I'll talk to you again real soon.
