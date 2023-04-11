**Jerod Santo:**

Hey hey, guess who's back?

**Slim Shady:**

[Guess who's back, Guess who's back, Guess who's back, Guess who's back...](https://www.youtube.com/watch?v=YVkUvmDQ3HY)

**Jerod Santo:**

Adam did a mighty fine job while I was out. In fact, listener Lars Ellingsen in our Slack channel even revelled in the fact that he was finally able to understand 100% of the references on Changelog News.

**Jared Dunn:**

[You reckless child!](https://www.youtube.com/watch?v=s5mYCemlflg)

**Jerod Santo:**

Apologies in advance to Lars and other fans of HBO's Silicon Valley. Reaching 100% references acknowledged on this episode, might be painful.

**Bill:**

[Do you find me sadistic? You know, Kiddo, I'd like to believe that you're aware enough even now to know that there's nothing sadistic in my actions. t this moment, this is me at my most... masochistic.](https://www.youtube.com/watch?v=qwg2bvY3_Ek)

**Jerod Santo:**

Did you catch that one? It's from one of my favorite Quentin Tarantino films: Kill Bill. It's not his best film, that's Pulp Fiction. but if I could watch just one Tarantino flick for the rest of my days, I'm pretty sure I'd pick Kill Bill.

But that's niether here nor there. Let's get into the news.

**Break:**

**Jerod Santo:**

First up, it's a calculator. Yes, a calculator.

**Rain Man:** [246 toothpicks](https://www.youtube.com/watch?v=kthFUFBwbZg).

**Jerod Santo:**

It's called "Qalculate!" with a "q". And it's not just any ole' calculator, an open source, multi-purpose, cross-platform  desktop calculator that provides power and versatility normally reserved for complicated math packages, as well as useful tools for everyday needs (such as currency conversion and percent calculation).

Here's something cool about it that I learned on the r/commandline, it has a companion CLI `qalc` q-a-l-c that's super handy. It can handle stuff like: `1500$/week to btc/year` or `5 apples + 3 oranges - 1 apples`. The coolest part is it doesn't merely give you the answer, it shows the broken down steps along the way. For example, give it `100 / 1000` and it will give you back `100 / 1000 = 1/10 = 0.1`

A link to the Reddit thread with more examples is in the show notes.

**Break:**

**Jerod Santo:**

Restic 0.14 has been released with a much-anticipated feature: compression!

(Don't you dare insert a Pied Piper joke, Jerod. Don't do it! Error: E_TOO_MANY_SILICON_VALLEY_REFERENCES!)


What's Restic? It's a backup program that can back up your files from Linux, BSD, Mac and Windows to... nearly anywhere you want.

We've had Restic's creator, Alex Neumann, on both The Changelog and Go Time. Restic is seriously impressive software and Alex is a thoughtful dev and kind open source maintainer. Here's a moment from my conversation with Alex on The Changelog:

**Alexander Neumann:**

This was one of the very interesting discoveries when I discussed it initially with my friends and my co-workers, that the most important thing about the Restic project is not the implementation itself, but it is the repository format… Because users expect that they can restore their backups even ten years or twenty years from now. So the most important thing is not what features does the backup program have, but how good is the specification of the storage format.

There are toy implementations that reimplement all the things needed to access data in a Restic repository from scratch, just by using the design document. This is somehow like the – I think there’s a FreeBSD manual which explains the design of the operating system FreeBSD from the ground up. I haven’t read it, but it’s on my bucket list to do that. This is something like that for the repository format.

**Jerod Santo:**

Well said. You obviously saw where I was driving to when I said “You need Restic to restore Restic”, because if restore is the feature and it’s not stored as like an operating system level primitive - although it is, at the end of the day, but it has its own format - then you obviously want Restic to be around… But it sounds like you guys are well prepared for backwards compatibility, and even this specification where Restic could disappear, it could be completely changed, but somebody could go out and reimplement the restore, because it’s been documented so well…

Hearing how careful he is with the repository format, leads me to believe that adding compression was no small task for Alex and the team. We'll link to the announcement blog post which detailst the new feature as well as that episode of The Changelog if you want to hear more on the topic.

**Break:**

**Jerod Santo:**

Emery Berger, a professor at the University of Massachusetts Amherst writes a warning to their fellow Computer Science educators: AI-based dev tools are gunning for your assigments.

**The Borg:**

[Resistance is futile. Your life as it has been is over. From now on you will serve us.](https://www.youtube.com/watch?v=rtEaR1JU-ps)

**Jerod Santo:**

Emery says, "Using Copilot, students can instantly generate code solutions as auto-completions, given just the problem statement or even just the function name or even by concentrating really hard and staring at the screen, ok not actually the last one but I expect that feature any day now."

This is an interesting phenomenon, and something to think about. AI-based tools will contine to proliferate and disrupt most areas of our work/life. I'm not too worried about it. Resistance is futile, but adaptation is not. So, CS teachers can adapt. You know, like math teachers did when students started showing up to class with calculators in their pockets.

**Kraftwerk:**

[I'm the operator with my pocket calculator.](https://www.youtube.com/watch?v=oD7rJ4ufciM)

**Break:**

**Jerod Santo:**

Heroku's next chapter does NOT include free plans.

**SNL Jingle:**

Here comes [Debbie Downer](https://www.youtube.com/watch?v=TfE93xON8jk)

**Jerod Santo:**

Salesforce EVP and Heroku's General Manager, Bob Wise, writes: "Starting October 26, 2022, we will begin deleting inactive accounts and associated storage for accounts that have been inactive for over a year. Starting November 28, 2022, we plan to stop offering free product plans and plan to start shutting down free dynos and data services."

Listener joerick commented on the story on Changelog.com, asking: "Has the hacker culture left Heroku? In the blog post, I see a lot of language focused on small / medium sized business, but none about celebrating the creativity of individuals and tiny teams. This is confusing to me, because I always felt that Heroku’s key strength was that as a single developer, you could focus entirely on your product, and outsource all the ops to the service. And it’s fantastic for that... So then the question is - if not the hackers, where are Heroku going to get new customers from? Because cloud ops is a hella crowded market."

I agree, Joe, and as one of those solo developers, this change in direction makes me sad. The good news is, other players will step in to fill this gap Heroku is leaving in the market.

**Break:**

**Jerod Santo:**

That is the news for now. So, how many of the 7 pop culture references did you catch? Let us know in the comments. There's a link to the thread at the top of your show notes. Oh, and while you're there suggest an awesome sound byte we should use in future episodes. If your suggestion makes the show, I'll send you some free Changelog stickers. How about that?

Hope you have a great week. Talk to you soon.
