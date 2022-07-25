**Jerod Santo:** Hello, there.

**Obi-wan Kenobi:** [Hello, there.](https://www.youtube.com/watch?v=wFBB-Xp9GZI)

I'm Jerod and this is Changelog News for the week of Monday, July 25th 2022. Let's get right to it.

**Break:**

**Jerod Santo:**

[Soft deletion is probaby not worth it](https://brandur.org/soft-deletion), says Brandur, an engineer at Crunchy Data. What he's referring to is the practice of not actually deleting data in your application but instead marking it as deleted (often with a `deleted_at` timestamp) in your database. There's a few reasons to do this, sometimes it's regulatory. And it allows for undelete, which is a nice feature. I've done this in the past but it always felt a little "icky", like, yeah my man we totally deleted your account. No probs.

**Monty Python:** [Wink wink. Nudge nudge. Say no more.](https://www.youtube.com/watch?v=4V8KdGqUfek)

But that's not Brandur's point in the article. He says soft deletion has some major downsides. It bleedgs logic to all parts of your code because you have to filter out the deleted_at records every time. It also makes foreign keys kinda worthless because you aren't actually deleting records, which triggers the safeguards that foreign key constraints provide.

But most of all, Brandur says soft deletion is a common case of YAGNI. You ain't gonna need it! He worked on systems that soft deleted at Heroku, Stripe, and now Crunchy Data and says, "never once, in ten plus years, did anyone at any of these places ever actually use soft deletion to undelete something."

**Break:**

**Jerod Santo:**

Over on the orange website user Uptrenda asked HN: [What are some cool but obscure data structures you know about?](https://news.ycombinator.com/item?id=32186203)

745 comments later, this discussion thread got thick.

**Ian Malcolm:** [That is one big pile of sh\*\*](https://www.youtube.com/watch?v=nnun8y7r8_U).

**Jerod Santo:** There's good stuff in there, for sure. In fact, Uptrenda kicked it all off with their own favorite: bloom filters. Saying, "Lets you test if a value is definitely NOT in a list of pre-stored values (or POSSIBLY in a list - with adjustable probability that influences storage of the values.) Good use-case: routing. Say you have a list of 1 million IPs that are black listed. A trivial algorithm would be to compare every element of the set with a given IP. The time complexity grows with the number of elements. Not so with a bloom filter! A bloom filter is one of the few data structures whose time complexity does not grow with the number of elements due to the 'keys' not needing to be stored."

I did not know that, but I'm glad I do now!

**NBC PSA:** [The more you know jingle](https://www.youtube.com/watch?v=GD6qtc2_AQA)

**Break:**

**Jerod Santo:**

Podge O'Brien blogged some solid advice on [how to drive away your best engineers](https://blog.hulacorn.com/2021/09/08/how-to-drive-away-your-best-engineers/). Advice like, Hire managers that cannot build software, do as many meetings as possible, make delivering software painful, and make engineers estimate their work.

Speaking of estimations, Go Time's Mat Ryer shared his opinion on them in gotime.fm/236

**Mat Ryer:** We should keep estimation sessions, but throw away the estimations. The sessions themselves are great. They’re so useful to talk through all the work, get all our ideas out, see where the interest lies, of who’s going to maybe do the work, but the estimations are useless, pretty much…


**Jerod Santo:** That sounds brilliant to me. I like the way you framed that, and I think it's a smart idea.

**Natalie Pistunovich:** Yeah.

**Jerod Santo:** So I think this is not an unpopular opinion, but just a good idea.

**Mat Ryer:** Well, I sure hope it makes it to the Twitter feed... \[laughter\]

**Jerod Santo:** We'll see.

**Mat Ryer:** We will see, because I'll be keeping an eye on it like a hawk.

**Jerod Santo:** Have you done an unpopular opinion before? Or is this your first one ever? Because it's gonna be wildly popular, by the way...

**Mat Ryer:** I've done one, and I've regretted it ever since. And I knew I would. So I knew before I said it that was going to regret it. I then said it, thinking "I'm gonna regret this" and then later now, I regret saying it. Do you know what I mean?

**Jerod Santo:** \[laughs\] I do. That's utter. They call that utter.

**Mat Ryer:** Utter.

**Jerod Santo:** What about this one? Do you regret saying this one?

**Mat Ryer:** No, I think this is alright, this one.

**Jerod Santo:** That's because it's gonna be popular.

**Natalie Pistunovich:** It might not be unpopular, but still a good opinion.

**Mat Ryer:** We'll see what people say on Twitter. We'll let them decide really.

**Jerod Santo:** Yeah, they're brutal out there.

**Mat Ryer:** They'll are. They tell the truth when you ask them a question.

**Jerod Santo:** Turns out I was correct on the opinion, 84% of GoTimeFM followers that voted on the poll agreed with Mat. That's episode 236 of Go Time, which is a good listen, in my humble opinion. Back to Podge's how to list... it ends by saying, "The above are some common anti-patterns for running engineering teams. There are fixes. Some of them are very easy to say and hard to implement because you live in a system, and changing systems, especially ones based on humans, are complex. So I leave you with this common saying I acquired from a boss I had in the UK many years ago. If you cannot change your company, change your company."

**Guinness Ad guys:** Brilliant!

**Break:**

**Jerod Santo:** Here's a new service that looks interesting: prose.sh

A blog platform for hackers where you can create an account with nothing more than an SSH public key, create posts with your favorite editor in plain text files, and publish your posts by copying the file to their server with `scp`.

There's more to it than just that. A few of the team's goals are to promote human communication and collaboration, build a space for the smaller web, use modern tools with care, and do one thing, well.

**Mr. Burns:** Well, well, well

**Break:**

**Jerod Santo:** Speaking of blogging, Matt Rickard shared some of his thoughts on RSS, which you know is one of our favorite technologies here at Changelog.

**Lloyd:** [I like you a lot.](https://www.youtube.com/watch?v=XXYiW5aHeGA)

**Jerod Santo:** Matt writes, "No technology other than RSS has had more think pieces written proclaiming the death of RSS (2006, 2009, 2010, 2012, 2013) and the rebirth of RSS (2009, 2010, 2011, 2018, 2018, 2019)."

Matt's thoughts about the forces acting on RSS in 2022 got us thinking about RSS again, too. So, we invited our old friend Ben Ubois back on The Changelog. Ben is the creator of Feedbin, which has been my daily RSS driver for many years. He has a lot of thoughts of his own on RSS and we had a great conversation on the indie social web, podcasting 2.0, and more. That episode will drop on your podcast feed on Friday.

**Break:**

**Jerod Santo:** That is the news for now. If you dig it, share it with a friend. That'd be pretty cool. I'll talk to you next time.
