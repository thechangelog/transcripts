**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 4th 2023.

But delivered a day late because of the Labor Day Holiday here in the States. Or maybe I was stuck at Burning Man and Labor Day is just a convenient excuse... you decide.

**Jon Lovitz:**

Yeah, that's the ticket!

**Jerod Santo:**

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Dan North tells the tale of Tim, the worst programmer he's ever worked with (who also happens to be "a heck of a programmer"). Tim scored _zero_ points on the company's productivity metric and almost got fired, but...

"You see, the reason that Tim’s productivity score was zero, was that he never signed up for any stories. Instead he would spend his day pairing with different teammates. With less experienced developers he would patiently let them drive whilst nudging them towards a solution. He would not crowd them or railroad them, but let them take the time to learn whilst carefully crafting moments of insight and learning, often as Socratic questions, what ifs, how elses.

With seniors it was more like co-creating or sparring; bringing different worldviews to bear on a problem, to produce something better than either of us would have thought of on our own. Tim is a heck of a programmer, and you always learn something pairing with him.

Tim wasn’t delivering software; Tim was delivering a team that was delivering software. The entire team became more effective, more productive, more aligned, more idiomatic, more fun, because Tim was in the team.""

Two takeaways from this excellent post: Measuring developer productivity is hard, and be like Tim.

**Break:**

**Jerod Santo:**

Four years in, Kevin Lin declares that OpenTelemetry delivers on its promise for open observability.

"It has to date provided a stable standard for the three pillars of observability (metrics, logs, and traces), a collector that can receive, process, and export telemetry in any environment, and SDKs to instrument code in all major languages. It has also continued to expand its scope and introduced additional standards around semantic conventions and agent management. Today, OTEL is the second most active project in the CNCF, behind only Kubernetes in popularity. Its contributors are spread across all major observability vendors and its protocol has near-universal adoption among observability providers."

We use OTEL to send data from [our Phoenix app](https://github.com/thechangelog/changelog.com) to Honeycomb and while it "just works", it strikes me as (overly?) complicated... but maybe that's inevitable for a spec that serves so many interests in so many ways.

**Break:**

**Jerod Santo:**

Justin Garrison thought now is a good time to take stock of the infrastructure automation tools people should be using. Here's a quote from each of the three contenders he writes about in detail.

Terraform: "Terraform is a single-player tool in a multiplayer world. It’s great for infrastructure management when teams are small and complexity is under control. But once you try to hide complexity in wrappers, abstractions, and deploy pipelines, it’s time to look for other options."

GitOps: "GitOps works for Kubernetes, but outside of that ecosystem, you end up writing HCL to manage everything else... You turn everything into a Kubernetes problem, and everyone who needs infrastructure needs to be a Kubernetes user."

System Initiative: "System Initiative has the potential to bring application and infrastructure developers to the same table, speaking the same language and collaborating... The biggest drawback I see with SI right now is it’s not ready. The ecosystem is small. It’s not stable for production
workloads, and many of the ideas are not fully solidified."

**Break:**

**Jerod Santo:**

It's now time for Sponsored News.

You've probably heard us discuss [Warp](https://www.warp.dev/?utm_source=changelognews&utm_medium=podcast&utm_campaign=changelognews_08_28) on multiple occasions. That's because we're fascinated by this super cool rethink of what the terminal should be. Unlike any terminal you’ve used before, Warp is designed for team collaboration. You can save and share your team’s terminal docs in a shared Warp Drive right next to the command line. Everything in Warp Drive is searchable and stays in sync so your entire team has what they need for incident response or onboarding new devs.

And with Warp AI, you can generate commands from natural language, debug errors, or even accomplish complex tasks without visiting Google or Stack Overflow. Visit [warp.dev](https://www.warp.dev/?utm_source=changelognews&utm_medium=podcast&utm_campaign=changelognews_08_28) and get started today or download the macOS app and let them know Changelog News sent you!

**Break:**

**Jerod Santo:**

Inc. published an interesting piece about Apple and how it's upholding its hustle culture while creating a happy workplace.

"It's not just that it's willing to splash out on high salaries, lavish offices or fat benefits packages. What makes a corporate job at Apple so appealing is how "cushy" its roles are-and there's a brilliantly simple, yet highly effective reason why that is--despite its fast-paced and demanding hustle culture that would send many running for the hills. What Apple is doing that employers often overlook is rewarding hard-working employees. Not with more money, a bigger office or Steve Jobs' favorite employee perk. But the best perk of all that keeps people happy to hustle: freedom, according to a current employee, and recent Glassdoor reviews seem to attest."

I don't share this to toot Apple's horn, but because it reinforces something I believe deeply: that freedom (in its many forms: autonomy, agency, etc.) is the most important factor to produce work satisfaction once your financial needs have been taken care of. Seek it in your career and give it to others every time you have the opportunity.

**Break:**

**Jerod Santo:**

Speaking of your financial needs... after coaching hundreds of people through salary negotiation, Aline Lerner published some great advice about two things you _must_ avoid. Both involve how you talk to recruiters at the start of your job search, way before there’s an offer: 1) Revealing information too early in the game, and 2) Negotiating before you’re ready

In the linked post, she explains why these two mistakes "routinely sabotage salary negotiation efforts" and what you should say to recruiters instead.

**Break:**

**Jerod Santo:**

That's the news for now, but it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Daniel M, Nick H, Jarvis Y, Nicholas H, Dan B, Thomas E, Philipp K, Parker S, Bard A, Robert E, Benjamin & Michael D! _We appreciate you_ for supporting our work with your hard-earned cash.

(If Changelog++ is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, directly support our work & get shout outs like the ones you just heard.)

Speaking of bonus content, our Steve Yegge episode back in July featured a bonus ten minutes where Steve shared an epic unpopular opinion with us. If you're a ++ member, you already know this. But for the rest of you, we decided to share that bonus with the world on our YouTube channel. Here's the premise:

**Steve Yegge:**

My unpopular opinion is that Git is awful and it needs to die, die, die.

**Jerod Santo:**

Find the full clip at youtube.com/changelog I'll link it up in the companion newsletter as well.

Have a great week, share Changelog News with your friends who might dig it, and I'll talk to you again real soon.
