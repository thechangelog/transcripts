**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, August 12th, 2024.

Has open(ish) LLM parity arrived?! Llama 3.1 is close enough for me. I'm in the process of ditching "ChatGPT in a tab" as my daily driver. So far, [Ollama](https://ollama.com) plus [Enchanted](https://github.com/AugustDev/enchanted) for Mac are proving to be a powerful combo. What else should I be using/doing to maximize my gains? Let me know in the comments...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The best, worst codebase](https://jimmyhmiller.github.io/ugliest-beautiful-codebase)

Jimmy Miller writes on his blog:

> My first job was a trial by fire, to this day, that codebase remains the worst and the best codebase I ever had the pleasure of working in. While the codebase will forever remain locked by proprietary walls of that particular company, I hope I can share with you some of its most fun and scary stories.

This post is too glorious to summarize. Just grab some popcorn and go read it. Ok, fine, here's a few samples to whet your appetite. On the database:

> Every morning at 7:15 the employees table was dropped. All the data completely gone. Then a csv from adp was uploaded into the table. During this time you couldn't login to the system. Sometimes this process failed. But this wasn't the end of the process. The data needed to be replicated to headquarters. So an email was sent to a man, who every day would push a button to copy the data.

On the codebase:

> But to describe this codebase as merely half VB, half C# would be to do it a disservice. Every JavaScript framework that existed at the time was checked into this repository. Typically, with some custom changes the author believed needed to be made. Most notably, knockout, backbone, and marionette. But of course, there was a smattering of jquery and jquery plugins.

That's just the tip. Wait 'til you hear the part about Gilfoyle's hard drive...

**Break:**

**Jerod Santo:**

[The great npm garbage patch](https://blog.phylum.io/the-great-npm-garbage-patch/)

The Phylum Research Team:

> Like the island of discarded plastic twice the size of Texas floating in the North Pacific Ocean, npm has accrued an astonishing amount of spam packages over the past six months...
>
> Our 95% confidence interval for the estimate of Tea protocol spam in new packages over the past six months jumped to between 68.66% and 74.67%, or somewhere between 613,000 and 667,000 packages. In other words, among all new packages published to npm in the past six months, about five out of every seven packages are Tea spam.

I first covered the unintended consequence of the Tea Protocol's crypto rewards back in February ([issue #83](https://changelog.com/news/83)). It appears the damage is even worse than previously discovered! What a mess...

**Break:**

**Jerod Santo:**

[The sneaky costs of scaling serverless](https://www.zachleat.com/web/serverless-cost/)

Zach Leatherman decided to migrate the [11ty Screenshots API](https://www.11ty.dev/docs/services/screenshots/) off Netlify and learned a few things along the way! He ended up parking it on AWS Lambda, but shared the entire journey, plus a handy [little spreadsheet that shows how different serverless providers grow based on hours of usage](https://docs.google.com/spreadsheets/d/1gsTXuAcZdjuvp0rt0HtL1w7WiyAljjRaDiojbWT_Sx8/edit?usp=sharing) at various memory configurations. Link in the newsletter!

Zach's final word on AWS is it's "a huge pain to setup but it’s nice to have a fallback plan that isn’t going to cost an arm and a leg."

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Dangers of compromised Git dependencies](https://socket.dev/blog/how-to-mitigate-the-risks-of-using-open source-packages-with-git-dependencies?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)

Sarah Gooding the risks associated with using Git dependencies in open source projects:

> While there are some legitimate use cases for referencing Git dependencies, and not every package that does this is malicious, it’s important to understand the security risks associated with them:
>
> - Non-Immutable Dependencies (code can be tampered with after it's downloaded)
> - Unpredictability (Git tags can be moved around, much like a branch)
> - Reproducibility Issues (remote Git URLs can make it difficult to ensure a reproducible build)
> - Security Vulnerabilities (directly refs to Git repositories can bypass typical vetting processes)

Is this something you actively think about? Thankfully, Socket has your back!

Check out [the article](https://socket.dev/blog/how-to-mitigate-the-risks-of-using-open source-packages-with-git-dependencies?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) for the full rundown and how to navigate Socket's **Git Dependency Alert** features. Link in your chapter data and the newsletter.


**Break:**

**Jerod Santo:**

[Do quests, not goals](https://www.raptitude.com/2024/08/do-quests-not-goals/)

I love David Cain's re-framing of short-term goals (which are uninspiring) into _quests_!

> Whereas “goal” has become a tired and bloodless descriptor for the (supposed) intention to do something great, the word quest instills the right mentality for achieving a real-life personal victory:
>
> - A quest is an adventure, and you expect it to be one...
> - A quest changes you, not just your situation...
> - A quest has a dragon to slay (and it’s inside you)...
> - A quest can change the world...

The cool thing about _quests_ is we already have terminology that further delineates: a *side quest* might take a few hours of your day, whereas a *main quest* may require a multi-step plan executed over many months/years. Plus it's just a lot more fun to talk about!

_"I'm on a side quest to fix my Vim config"_  is a lot more fun (slash impressive) than "I've been tweaking my Vim config the last 4 hours" 🤣

**Break:**

**Jerod Santo:**

[7 rules for an effective meeting culture](https://ashleyjanssen.com/7-rules-for-an-effective-meeting-culture/)

Meetings: everybody likes calling 'em, nobody likes attending 'em. Unfortunately, they're a necessary evil for all but the most privileged (or isolated) in the business world. So, if you're going to have them, you might as well make them *effective*. Ashley Janssen:

> Your meeting culture is the combination of etiquette, protocol and expectations for what happens before, during and after your meetings. It’s all the things (good and bad) that make up how they are run and inform the participants' experience in the meeting.

She's written a lot about how to have more effective meetings. I think this list of **seven rules to follow** is a great intro to how she thinks about meetings. In brief:

1. Be on time
2. Be prepared
3. Be engaged
4. Be a good listener
5. Be inclusive
6. Be accountable
7. Be reasonable

Common sense stuff, really. But that doesn't make it wrong! Click through for full explainers of each rule. Link in the newsletter.

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up this week:

*Wednesday*: Andreas Kling & Chris Wanstrath (defunk!) from Ladybird
*Friday*: Jordan Eldredge on Winamp skins & the bizarre secrets they hold

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
