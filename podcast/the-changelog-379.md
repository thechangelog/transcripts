**Adam Stacoviak:** Back in October we logged a post from Jon Thornton, three kinds of good tech debt. Those words don&#39;t often go together - good, tech debt. It&#39;s often like this dirty word, this thing that you&#39;re trying to avoid. Yet Jon, here you are writing about this. Tell us about this tech debt that is good. How is it good?

**Jon Thornton:** Yeah. Thanks for having me, Adam. The title was definitely designed to provoke a little bit, because I think tech debt often gets thrown around and used to describe almost anything an engineer doesn&#39;t like about their codebase. What I&#39;m talking about in the post is more about not spending time fixing the things that don&#39;t matter. So really, good tech debt is the bugs that you don&#39;t have to fix, the race conditions that you don&#39;t have to fix, the things that you don&#39;t need to make perfect, so that you can focus your time on the things that do have to be perfect.

**Jerod Santo:** So, in the post you draw an analogy to debt... Well, I guess the analogy&#39;s already there... But in finance, you mention that debt can be problematic, but it&#39;s not automatically a negative connotation. If you&#39;re in debt to the point that you can&#39;t get out from under it - maybe you have student loans, and there&#39;s no way of declaring bankruptcy in this country, and you have crippling debt, that&#39;s really a problem. But there&#39;s also like a smart use of debt. We do it all the time, it&#39;s just part of the way that we live life. You point out a home mortgage. So draw that analog for folks. Of course, we know there&#39;s a debt analog, but you say with a home mortgage, you&#39;re not crying about it, you&#39;re happy about it.

**Jon Thornton:** Right, right.

**Adam Stacoviak:** Or a car loan, things like that. Things that you&#39;re trying to use from this debt to get something you need now. It&#39;s very intentional.

**Jon Thornton:** Exactly, exactly. You&#39;re using debt as a tool. It&#39;s so that you can get something you need now and you can pay for it later. Sometimes that can be a pretty reasonable thing to do with like a mortgage on a house or a car loan. Or it can be a pretty dangerous thing to do if you spend a bunch of high-interest credit cards and go into debt on that. That&#39;s debt that&#39;s going to compound very quickly and get out of control. So, a big part of using debt safely is doing it in a way that you&#39;ll be able to keep it under control.

**Jerod Santo:** \[04:02\] I was thinking about that analogy to a home loan, and it&#39;s interesting even the difference in debt between a home loan and a car loan. Because a car loan is a depreciating asset, you drive it off the lot and it&#39;s worth less than before. You buy a house, and assuming no market crashes, the general flow of the markets is upward, and the real estate market tends to flow upward because, well, they aren&#39;t making any more real estate. Although there are a few countries who are building islands, and stuff. But aside from that, land is a constrained asset... So, your value on that home goes up over time, and you have a secured asset with a home loan. You have a secured asset with a car loan as well, but it&#39;s often the car isn&#39;t worth as much as the loan itself.

So I&#39;m just curious, when it comes to software, and we look at these different kinds of loan types, or different kinds of debts - you have now smart debts, dumb debts, secured debts maybe, like ones where there&#39;s an asset behind it... Curious how far the analog moves, and if it just drops off right there, or could you have a mortgage style tech debt where there&#39;s some sort of thing that&#39;s a value in trading for the value?

**Jon Thornton:** So I&#39;m not sure this is a perfect analogy, but I think knowledge is the really valuable asset that you can get with tech debt, where you can use tech debt to get a feature, or a user interface, or something that you&#39;ve built out into the world, in front of users, and get it into use so that you can start learning about how that thing you just built solves the problem or doesn&#39;t solve the problem. Depending on the complexity of the thing, there might be a lot of stuff to learn over time, so your knowledge is going to keep growing; you&#39;re never going to lose that knowledge.

I guess an analogy around a car or something that depreciates is maybe when you&#39;re trying to rush shipping something that maybe you&#39;re not going to learn from, but getting it out a couple months sooner maybe brings in more revenue for the company, or allows you to turn off a different system a little bit sooner, save some money on expenses. So in that case, you&#39;re taking a shortcut for like a very defined benefit, but it&#39;s not one that&#39;s going to stick around forever.

**Adam Stacoviak:** This is a perspective though, simply from maybe a developer&#39;s perspective, and the reason why I say this is that I talked to this fellow named Travis Kimmel, who recently had his company acquired for many millions of dollars from Pluralsight. The company was called GitPrime. He came on Founders Talk and opened up this idea of tech debt, and doing it with intentionality. Jerod, you mentioned this secured debt, and that kind of thing... Well, the startup behind the tech debt sometimes is the assets, so to speak. So something he had said on Founders Talk was that all startups take on technical debt, and often (hopefully, often) do it very intentionally. If you can think of that as a parallel to financial debt, like we have been doing here, it makes a lot of sense because 90% of startups fail.

So he said, &quot;Imagine someone could give you a loan, but there&#39;s a 97% chance that you would never have to pay it back. Imagine you&#39;re building a startup, and it&#39;s good to build this debt, because you might get to exit three years later for billions, maybe millions, who knows, and the debt doesn&#39;t even matter at that point.&quot; Maybe I&#39;m saying it doesn&#39;t matter potentially with air quotes, because you&#39;ve got more money to solve those problems, maybe potentially more people too.

**Jerod Santo:** Yeah. It matters who&#39;s buying that company, right?

**Adam Stacoviak:** Well yeah, sure.

**Jon Thornton:** Sure. And it matters to the developers who are going to be addressing that tech debt. But if your company&#39;s getting bought for a billion dollars, I could put up with fixing a lot of tech debt for that.

**Adam Stacoviak:** [laughs]

**Jerod Santo:** [laughs] It&#39;s easy to hire that -- to pay it off; you pay off the debt.

**Adam Stacoviak:** I think that&#39;s his point too, this different perspective... Like you&#39;re offering here in your post, it&#39;s this different perspective on technical debt. If you do it with intention and with specificity like you do with financial debt - that&#39;s a great analogy for it - then there&#39;s a lot of gain. So look at it differently. Rather than saying it&#39;s a bad thing, how can we change this bad thing into something that we could leverage?

**Jon Thornton:** \[08:11\] Yeah. The place where I&#39;ve found it most useful is for rearranging the order in which I&#39;ll build things. One example I talk about in the post is I was working on building email campaigns, Squarespace, which is their email marketing platform... And when we started building it, the very first place we started was the email editor itself, the place where you built and styled your email. That was because Squarespace is already well known for its website building tools, so we knew we needed to get the editor experience really, really good. But in order to fully test that, we wanted to get our co-workers using it to send real emails. We didn&#39;t want to take all of the time to build a real email delivery infrastructure.

We now have a backend system that&#39;s capable of sending billions of emails, but it took us a very long time to build that, and we didn&#39;t want to have to wait just to get some feedback on the email editor. So what we ended up doing was building the simplest, jankiest, quickest thing we could that would send emails, which was literally just a for-loop that took a list of email addresses, loop through them and one by one sent an email to each individual person, which was definitely good enough for testing in our 600-person company at the time. Obviously, it would have fallen over the minute a customer tried to use it to send a mailing list. But we weren&#39;t sending to real mailing lists.

**Jerod Santo:** That wasn&#39;t the point.

**Jon Thornton:** Exactly. So we were very deliberate when we built this janky for-loop solution. We spent about a week on it, knowing that it was going to be throw away work. Another benefit we realized is because we were thinking about it as throwaway work, it changed the way we built it. We were a little bit cleaner with our interfaces, because we knew that the code that interacted with this -- we wanted to keep the editing code around, but we wanted to be able to throw away all the delivery code. So it kind of forced us to keep things very decoupled.

**Jerod Santo:** That&#39;s interesting, and maybe unintuitive to me... Because I&#39;d expect, if you&#39;re thinking about throwing this away anyways, it would make you write it with more abandon, less care. But I guess what you mean, at the interfaces, the places where that prototype or that throwaway system actually attached into your existing software, where the modules connect, you had to be more serious about that aspect of it because you knew you&#39;re going to be swapping them. Is that what you&#39;re saying?

**Jon Thornton:** Yeah, exactly, exactly. So, everything behind the interface could be pretty bad.

**Jerod Santo:** Just terrible. [laughter]

**Jon Thornton:** We still did code reviews for it, but we all kind of laughed, and looking forward to deleting this code soon. So, we didn&#39;t spend time going back and forth trying to make the code inside the implementation perfect, which was another benefit; we didn&#39;t spend a lot of time talking about code that we knew was going to be deleted soon anyway.

**Adam Stacoviak:** Which is interesting to look at it from a habits&#39; perspective or a goal-setting perspective. The reward to you and the team was, &quot;Can&#39;t wait to delete this code.&quot; So, deleting the code would have been a milestone. It would have been a success. It would have been an outcome goal where you hit some target, and it&#39;s like, &quot;The day we get to delete this code is the day we hit our mission, we achieved our goal, we&#39;re at the next level.&quot; That&#39;s a good thing. That helps everybody stay motivated.

**Jon Thornton:** Yeah, that&#39;s right. It also compartmentalizes what&#39;s built and what&#39;s not built. It was really helpful to have areas of the codebase where it was known that this is scaffolding code. This is going to get deleted later, don&#39;t worry about fixing small bugs and things in here. But that also meant that there were other areas of the codebase that were declared &quot;done&quot; or places where we would be polishing and perfecting things.

\[12:12\] I think it ties in a little bit with the broken windows philosophy, in that when you have defects scattered across your codebase, it can be a little bit difficult to prioritize which things you&#39;re fixing. By being very deliberate about which parts of our codebase were finished and ready for polishing, versus which ones were still not even building the real version on yet, or which ones were in active development, it really helped us focus our efforts and also avoid development regressions, too... Because we were putting in tests as we went along with this, but test coverage would obviously come in when we were building the real version; we wouldn&#39;t spend time testing the scaffolding. Just by separating each part of the system into components and being deliberate about what stage of the development it was at, we were able to put the right effort and have the right piece at the right time.

**Adam Stacoviak:** What about team size? What&#39;s your team size? Does it get difficult to manage or determine or declare what tech debt might be in a feature set? Does it happen in a meeting, demarcated and code somehow with code comments? How do you even determine that? How do you communicate what is and is not tech debt to the team?

**Jon Thornton:** That would tend to happen through the team&#39;s planning meetings. So we had a pretty typical two-week Agile-ish sprint process. Every two weeks, we&#39;d have a new set of goals for the team, and if we were going to take on a big project, such as building the system that would send emails to mailing lists, before we got into working on the actual code implementation of that, one or two members of the team would go and write a design document that laid out in broad strokes the components of the system, how they&#39;re going to interact together, and it would be the blueprint for how we were going to code this thing.

So there was always a bit of lead time before we were splitting up tasks for everybody to work on. There would be a couple, one or two engineers doing research on this thing, and they would be talking to individual engineers to collect ideas and get feedback. So there was always great awareness within the team of where the active development was, which parts were finished, which parts were throwaway work for later.

**Jerod Santo:** What was the total time span of this particular project? Are we talking a month, six months?

**Jon Thornton:** It was about 15 months of development work from the first line of code until we launched it to external users.

**Jerod Santo:** What about until a point where you said, &quot;Okay, it&#39;s time to go back and pay down the debt&quot;? The prototype or the idea validation that you&#39;re referring to - was that a much shorter time span?

**Jon Thornton:** Yeah, I&#39;d say the email sending prototype, that lasted maybe four months. Some of the other-- we had some scaffolding for analytics, and it turned out that it actually worked a lot better than we thought it was going to. So that one stuck around for 18 months.

**Jerod Santo:** So you shipped it?

**Jon Thornton:** We only recently addressed that one. So that&#39;s the other nice thing, is that you can build these things and plan to throw them away, and sometimes things work out better than you thought they would, and your seemingly not so great code ends up performing pretty well.

**Jerod Santo:** That was a nice scenario where you&#39;re like, &quot;This is a prototype, but it turns out it&#39;s pretty good, so let&#39;s ship it.&quot;

**Jon Thornton:** Yup. [laughs]

**Jerod Santo:** \[15:50\] Can&#39;t complain about that. So if we were to categorize-- I think the hard part is deciding when it&#39;s smart and when it&#39;s dumb. Or maybe &quot;misguided&quot; is a better term. You mentioned that it&#39;s all about intentionality. Like, if you&#39;re intentional with it, then that&#39;s what&#39;s important. And I think that&#39;s true, but you can also be intentional, but miss the mark. You can misfire and make a bad call. So there&#39;s gotta be some heuristics, some decision-making; like, times when taking on debt is smart, and times when paying down debt is smart.

It sounds like you&#39;ve identified at least one, which is idea validation, or maybe it&#39;s the idea of-- it&#39;s not even idea; it allowed you to build a thing before you could have otherwise, if you had gone in the other direction. So are there other ways that you can say, &quot;In this circumstance, tech debt is wise&quot; and we can use those as waypoints when we&#39;re making decisions?

**Jon Thornton:** Well, I think one thing that helps is, even when you&#39;re building your tech debt implementation of it, you probably should have some idea of what the &quot;real implementation&quot; is going to look like, so that as you&#39;re building the scaffolding version, you have some sense of what&#39;s going to go in place of it. You&#39;re not just leaving it as a complete question that you&#39;re not sure you&#39;re going to be able to figure out later. Another thing to keep in mind is is the tech debt gonna grow? Typically, the places where this works best is where you can take all the bad stuff and just hide it behind an interface, and not look at it until you&#39;re going to replace that component.

If you&#39;re building something and some of the more tech debty aspects of what you&#39;ve built are leaking out into other parts of the system that you&#39;re not planning to replace later - that&#39;s a big sign that you&#39;re doing something that&#39;s going to compound over time, and it&#39;s actually going to be a lot more work if you leave it in there.

**Jerod Santo:** So isolation is important in that regard?

**Jon Thornton:** Yeah, yeah. I mean, a lot of it comes back to being able to put this stuff behind in interface, choosing the right interface... So, I definitely don&#39;t think building things with tech debt is easier than building things without tech debt. It&#39;s more a matter of just focusing your efforts in specific places.

**Jerod Santo:** And again, the analogy of buying a house comes back here, because why do you take out a loan to buy a house? Because you could afford a house for over 30 years, but you want to live in that house today. So, you&#39;re willing to pay more for the advantage of living in that house today. In case of those features, you&#39;re wanting that feature now. You could build it very slowly and have it 30 years from now, but the market opportunity is today, so you take on some debt in order to afford yourself that luxury or that advantage.

**Jon Thornton:** Yeah. I think the house analogy can be extended even further, because sometimes you can end up building things that you didn&#39;t actually need. Those things can have maintenance or operational costs that are much bigger than a different implementation might have been. You can almost compare that to buying too much house, more house than you can afford, and then you&#39;re stuck with all of this maintenance overhead.

**Adam Stacoviak:** A lot of the reasons too is this data gathering process; you&#39;re doing it to learn. Often, the data that you can gather from this debt - it informs your future the same way that a house will provide your shelter for the time being; it&#39;s giving you an opportunity to level up other areas of your life while you take on this portion of debt with intention.

**Break:** [00:19:38:01]

**Adam Stacoviak:** I would imagine that not all tech debt is equal or the same. But given your examples here, Jon, the different kind of debt you&#39;ve taken on for the features that we&#39;ve talked about, when do you decide to start planning to pay that down? Maybe give me some scenarios that are not just this scenario, if you can imagine other times you&#39;ve had... What are some telltale signs for when you should start to pay down that debt?

**Jon Thornton:** Yeah. I think one sign is when you find yourself spending more time maintaining the debt than it would take to fix it. That&#39;s a pretty obvious case where you&#39;d be better off just paying that debt down. But I guess it depends a lot on your requirements.

One example is you can hardcode things as a way of using tech debt, where rather than building a system to manage adding and removing items from a list and UIs to interact with that stuff, you can just have a list of things in your code. That can work really well, as long as you don&#39;t need to make updates any faster than it takes to normally make deploys to your code. But if you find yourself having to make urgent updates to this list pretty frequently, you&#39;re going to end up having a lot of fire drills. That can be another sign that the functionality of the tech debt solution you built just isn&#39;t matching the requirements you have anymore. So, I think it comes down to paying attention to your requirements, paying attention to where your team is spending your time.

**Jerod Santo:** It seems to me that a lot of people get themselves into untenable circumstances because they are always going to pay down their debts tomorrow. The day of reckoning never actually comes, because systemically, culturally, it&#39;s always pushing forward, and the debt is ostensibly being managed, but it&#39;s actually just being pushed underneath the covers, and eventually, the market is going to crash, or whatever. I mean, that seems like that happens a lot. That&#39;s when the big rewrite begins. A big rewrite, a second system, or call the contractors... I mean, there&#39;s entire firms. I used to do rescue projects quite a bit when I was freelancing.

So there&#39;s a lot of people that are going to-- the consultants are going to come in and help you save this system because you never actually pulled the trigger on paying down that debt. You just kept accumulating, and accumulating. That&#39;s very normal because, in business -- I mean, forward is the way businesses move, and in the competitive marketplace, it&#39;s hard to slow down and to do things the right way and actually pay your debts down. So maybe you can talk to Squarespace&#39;s culture around this, and how you guys manage internally, as a leader of a team or inside the teams... Do you allocate time for refactoring and paying it down? Talk about culturally how that works.

**Jon Thornton:** \[24:24\] Yeah. That&#39;s a tricky problem, and you&#39;re right, I think a universal one... Because customers aren&#39;t asking you to fix tech debt, customers are asking for features. That&#39;s what the business wants to be working on.

So there are a couple techniques we use at Squarespace to manage this. First is that product management needs to be a partner in understanding what tech debt we have, and product management needs to understand what the benefits of addressing tech debt are, so that it&#39;s not just engineering versus product management, competing for priorities.

Some ways we&#39;ve done that is when we&#39;ve used tech debt intentionally to accelerate getting a certain feature out there, we&#39;ll talk a lot about the tech debt; we&#39;ll almost brag about how bad and how simple the scaffolding component is, just to make sure that all of the stakeholders for the project understand that we took on debt here, and we&#39;re going to have to pay that debt back later.

So we put a lot of effort into getting that into the planning process when the debt is intentional. But obviously, not all debt is going to be intentional, so that doesn&#39;t work for everything. So another tactic we have on some of the teams I work with at Squarespace are  we&#39;ll designate one day out of the sprint to work on tech debt. I think Google is famous for their 20% time. Or I guess it&#39;s 10% time. It&#39;s one day out of a 10-day sprint. But we tend to focus that day on developers fixing the things that bother them about the projects they&#39;re working on. So that&#39;s the day where you would work on making the build faster. Making the build faster is going to make everything faster because every time you make a change, you have to run a build.

Or if there is some process that&#39;s manually operated by the engineers, such as updating a hardcoded list or something, that&#39;s the day that somebody who&#39;s bothered by that could work on fixing it.

A key aspect of this day is that the product manager, the team tech lead aren&#39;t the ones dictating what gets worked on. It&#39;s each individual engineer saying, &quot;Okay, this is the thing that bothers me about the development experience of this project. This is what I&#39;m going to fix today.&quot; We have some rules around that to keep things from going off the rails. So things that get worked on on that day ideally should get completed in a day. We don&#39;t want to pick off a three-month data migration without talking about it with the team. But if somebody wants to tighten up the lint rules or improve our UI testing suite, we want to have as little friction as possible for that.

We&#39;ve found that one day out of the sprint has been the right ratio for addressing that stuff. What it does is it helps us avoid the prioritization challenge of &quot;How do you compare the benefit of making your UI tests 10% faster, versus getting half of a user-facing feature built?&quot; It&#39;s really difficult to prioritize those things when you&#39;re planning a sprint, so by just setting aside some time, we just sidestep that prioritization process entirely.

**Adam Stacoviak:** Once you&#39;ve had a chance to do some this stuff, how do you communicate those upgrades or debt paydowns back to the team? Do you update documentation? How do you say, &quot;Hey, we&#39;ve got -- this lint is now in a better situation, or faster, or has these new opportunities&quot;? How do you communicate those things through your processes? You said Agile-ish before, so I&#39;m assuming you mean Agile, but maybe it&#39;s Agile-ish, I don&#39;t know.

**Jon Thornton:** \[28:18\] Well, I think everybody has their own flavor of Agile that works for them. For the team I work with -- the team uses Slack to communicate, they&#39;ve set up their code review tools so that anytime somebody puts a PR for the project, that gets posted to Slack. So, there&#39;s generally a lot of visibility on what sorts of changes are going into the codebase.

Honestly, if it&#39;s something like making the build faster or adding a lint rule, either you&#39;re not going to notice those things because they don&#39;t impact you, or maybe one day you&#39;ll say, &quot;Huh, that build finished in six minutes instead of seven.&quot; Or you&#39;ll be coding and that new lint rule will find you when you interact with it. So we actually haven&#39;t had to be too intentional about communicating the little improvements, because those have tended to be the things that get talked about naturally.

I think the tech debt that&#39;s been the most challenging to address has been the unintentional tech debt. It&#39;s been a challenge of learning how to articulate the benefits of paying down that debt, and then figuring out how to come up with a way to prioritize those benefits, versus spending time building features or new products or other things like that.

**Adam Stacoviak:** Yeah. It&#39;s unintentional tech debt, if we go back to the whole financial model; it&#39;s like accidentally taking out a loan, or accidentally spending too much money or how do you-- what&#39;s the analog to that?

**Jon Thornton:** I think it&#39;s like buying something with your credit card and saying, &quot;Oh yeah, yeah. I&#39;m gonna pay that bill at the end of the month.&quot; Then the end of the month comes around and it&#39;s like, &quot;Oh, but actually, I want to buy this other thing, too.&quot; Then you carry a balance, and then the interest starts compounding.

**Jerod Santo:** Right. It&#39;s even worse in software though, because you almost can just accidentally buy things, right? You can just be so off, or make such a bad decision that you didn&#39;t decide to go buy that outfit, but you bought it because you didn&#39;t realize that this was just a really bad architecture that you designed, and now you have to pay it down even though you didn&#39;t want to buy it. You were just trying to do the right thing but you did the wrong thing. So it can definitely bite you.

This is why I&#39;m... If you remember-- if anybody listened to the Back to the Agile Basics episode we did last year, this is why I&#39;m really down on estimations, because I feel like it&#39;s like &quot;Do you want me to lie to you in the big picture, or granular? You want granular lies or vague lies?&quot; It&#39;s kind of the way I look at it. That makes me say this next thing very-- well, let me just throw this out there... So I&#39;ve been thinking as we talk, the nice thing about financial debt is that every month, your credit card or your bank, whoever holds your mortgage, sends you an update and says, &quot;This is how much you owe.&quot; And you can quantify that, and you can look at it, and you can say, &quot;Okay, I&#39;m doing poorly,&quot; or &quot;I&#39;m doing really well.&quot; Or, &quot;Hey, I&#39;ve got some extra cash. I&#39;m going to pay some principal off of that loan.&quot; I&#39;m wondering if it&#39;s worth-- I think it would be valuable to have some sort of an analog to that.

**Adam Stacoviak:** Like a ledger?

**Jerod Santo:** Yeah. Or a way to quantify the current software stack&#39;s debt, like &quot;Where do we stand?&quot; and maybe some code quality things could help out along that way. I feel like we move into the place of estimations, like you have to go ask a developer &quot;How much tech debt do you have?&quot; and they have to give you a point system, and it could be ridiculous... But I think there would be value, at least from a high-level strategic place of saying like, &quot;No, we can&#39;t actually afford to continue to take on debt, because here&#39;s where we stand. We already owe a million dollars. We can&#39;t take out another loan right now.&quot;

**Adam Stacoviak:** Right.

**Jerod Santo:** Curious what you think about that.

**Adam Stacoviak:** Your balance to your debt - you have a certain limit, I suppose. Your ratio to limit ratio is off.

**Jerod Santo:** \[32:11\] Yeah. I mean, the point would be adding that visibility that currently, Jon, you and your team -- like you said, you just have to continually, orally report it, like &quot;By the way, remember, this is not a real thing.&quot;

**Adam Stacoviak:** We forget, too. We forget often, and so I&#39;m thinking, Jon, how do you make a log? I guess what Jerod is saying, almost a ledger. I wasn&#39;t referring to an actual Bitcoin ledger, that kind of thing. It was just more like, how do you maintain and know this debt over time so that you can not forget it once you&#39;ve shipped the feature and the rewards have been paid out and everybody&#39;s deleted the code that was yucky or nasty, and you&#39;ve moved on and you&#39;re on to the new feature set that the customers are demanding - how do you keep this log of debt to eventually squash? Or is it just there, looming?

**Jon Thornton:** I think it becomes part of your project documentation. So most projects are going to have, ideally a readme that tells you how to build the project and run the application on your laptop, and things like that. Hopefully, you&#39;ve got some comments in your code. I think it can work in either places. But what&#39;s key is that you&#39;re writing down somewhere in a place that a developer is going to find it when they&#39;re looking around the codebase, you&#39;re writing down what you expect the limitations of what you&#39;ve built are.

As an example of that, with the email analytics that we built, for the first pass, we knew what we were building wasn&#39;t scalable, so we deliberately ran some load tests to understand when this debt was going to come due. We&#39;ve been monitoring how close we are to those limits all long. That&#39;s made it pretty easy, because having these numbers to watch, you can just set an alert or an alarm or something like that, and then the computer is going to come and remind you to do it.

Another way to do it is just with a code comment on the interface between the debt part and the non-debt part, explaining the rationale behind what was built behind that interface, and explaining what was intended to come after it. But as for keeping track of the unintentional tech debt, that feels like a much tougher one. I feel if I could come up with a tool or a system to solve that, I&#39;d probably go start a company for it.

**Jerod Santo:** Yeah exactly. One example you put in the post, which is a form of taking on tech debt, is not fixing all the edge cases. Basically, you&#39;re staying mostly on the happy path. &quot;We&#39;re just going to address the happy path right now. We realize there are these ten different things that could go wrong, and production-grade software would handle all those cases, but today we&#39;re just doing the happy path.&quot;

So a form of documentation on that kind of debt is documenting all the things that you&#39;re not doing, like, &quot;Here are the ten ways that this could go wrong. I&#39;m not going to code them up right now, but I&#39;m at least thinking about it with enough intention that I&#39;m intentionally skipping these ten things... And it&#39;s worth me putting in a number list right here, one through ten - maybe there&#39;s more I&#39;m not thinking of, but here are the edge cases that we&#39;re explicitly not solving today.&quot; At least then, when you return to that area, or someone says, &quot;Go add a feature&quot; and then you realize, &quot;Oh, no. This is in production? This is only happy path code. Who put this in production?&quot;, you can go back and say, &quot;Well, before we add that feature, I have to do these nine other things that we skipped.&quot;

**Jon Thornton:** Yeah, yeah. You can also build your code in a way that it will tell you when it deviates from the happy path. That way, you can even sidestep the question of, &quot;Is this actually going to happen in production or not?&quot; Ship it and let production tell you if it&#39;ll happen or not.

**Jerod Santo:** Yeah, then you&#39;ll have error reports...

**Jon Thornton:** Exactly.

**Adam Stacoviak:** Use your tooling, yeah.

**Jerod Santo:**...which can turn into tickets, which can turn into stories, right?

**Jon Thornton:** \[36:03\] Granted, if that&#39;s something that really does impact user experience, you might not want to take that approach. Or if it&#39;s something that might annoy your users, you&#39;re going to need to be ready to respond to it really fast. So, I think it&#39;s important to understand what the effect on the user would be if any of those no-happy path things happen.

**Adam Stacoviak:** You bring up a good point with QA support. What are the different departments, I suppose - it&#39;s probably an easier word to say... You mentioned project management before, product management, engineering... What are the different stakeholders that care about tech debt, that need to collaborate and communicate through? As you&#39;d just mentioned, if you ship this and you get some errors, and it diminishes the user experience to a point that users get upset, QA might want to know &quot;Hey, just give some slack on this particular thing&quot;, you might want to give support a heads up like, &quot;Hey, expect some emails about this, and see me if you get anybody.&quot;

**Jon Thornton:** Yeah, yeah. Definitely customer operations or customer support is a huge stakeholder for that. Even to the level of &quot;We will build things in order to reduce the volume of incoming support requests&quot;, because we have a large, really well-trained support team here at Squarespace, but we don&#39;t want to build things that put a bigger burden on them. So, if we have a feature that we think is going to result in support requests, we&#39;ll probably end up changing that.

**Jerod Santo:** So your section on hardcoding, the topic you brought up earlier about hardcoding, made me think of something that I was doing just the other day... A style of coding that I&#39;ve taken up in the small, that I&#39;d like to share and get your thoughts on. So you work at a large company, with large teams, of course, and we are a small company, with a team of-- well, you&#39;re looking at us... [laughter] So we carry many hats, and there are tons of indie devs in this area, whether you&#39;re freelance, or a startup, or on your own, where a lot of the decision-making process isn&#39;t even, &quot;Can we move faster?&quot; For us, it&#39;s like, &quot;What can we actually do?&quot; Because I have these other things on my plate and software development is a part of what I do. It&#39;s not like there&#39;s a team that&#39;s writing our platform; we carve out time, so prioritization and what&#39;s important is key.

Something I&#39;ve been doing the last few weeks, which I think has been fruitful, is thinking about things in terms of minimal viable feature set, which is the same exact concept as an MVP, only just in the small. So I asked myself, &quot;Here&#39;s a large goal we have. What&#39;s the minimum viable thing that I can do today, to push that forward and be usable today? Or maybe tomorrow? Or maybe on Wednesday, or this week? What&#39;s viable? What can I do?&quot; This requires a lot of sidestepping. This is not the full feature. This is a step on that path, so it fits in with my baby steps philosophy. But it requires a lot of hardcoding.

An example of that is transcript notifications, which is something that I&#39;m building right now. As we told you, Jon, each show gets transcribed, those are in markdown, and they&#39;re put on GitHub, and they&#39;re synced into our website, and they show up on the show page. Well, the transcripts don&#39;t come out until the show comes out. So it&#39;s actually-- in the case of the Changelog, it&#39;s usually one to two days later; in the case of our other shows, it could be three, five days later. That&#39;s just the way that our workflow works. We&#39;re not planning on changing that. We don&#39;t want to hold back the episodes, so that the transcript is ready, but what would be nice is knowing when the transcript is ready.

So we have features like &quot;Email me when Founders Talk ships an episode&quot;, and that&#39;s a feature that exists inside our platform. And it would be nice to have a button right there for a show that doesn&#39;t have a transcript; if you go looking for the transcript - because a lot of people would rather read than listen, they don&#39;t have the time - to have a button that says,&quot; Yeah, let me know when the transcript is ready.&quot;

\[40:01\] So that&#39;s the feature that we&#39;re building - email notifications around transcripts. But that requires different moving parts. The actual knowledge inside the system of when the transcript has been attached to the episode, the ability to email people, and the ability for them to subscribe to those email notifications, configure them, unsubscribe, etc. There are probably five things. What&#39;s a minimum viable feature? What can I build today that would be useful today? And just to move that along; not trying to get all the way there, but how can we move it forward? I don&#39;t know if that&#39;s technical debt, but it requires some hardcoding and things.

For example, on that particular feature, I thought &quot;Well, if I can just do it for myself, then that&#39;ll be forward.&quot; That means I have to have the ability to know that the transcript&#39;s been uploaded. After that, the ability to email at least one person. But I can sidestep the UI for the notification management, I can sidestep the unsubscribe routines, all that kind of stuff.

**Jon Thornton:** Oh, man. Yeah, you could work so much tech debt into shipping that feature, because it sounds like there needs to be a component that tells your application when the transcript is ready, you need some way to collect a recipient address from the user, you need some way to send the email...

**Jerod Santo:** Right, exactly.

**Jon Thornton:** So I could see building something that version one just has your system find out when the transcript is ready, and maybe it just outputs a logline to say that it happened. Maybe the first version only sends emails to you, because your address is hardcoded in there, and that saved you from having to build the user interface to collect the recipient address.

As you&#39;re describing it, it all sounds very reasonable, MVP-driven development. So I don&#39;t think good technical debt is that radical of an approach. It&#39;s just putting labels to things that I think a lot of people are already doing in their software practice.

**Jerod Santo:** Absolutely. I should say, I just got an email. &quot;The transcript for Becoming an Accidental Founder is ready.&quot;

**Adam Stacoviak:** Ha-ha! Nice.

**Jerod Santo:** I mean, right now, in our codebase, what I did was what you said - I skipped step one, so combined those two, I had enough time to build the thing that notices that the transcript has been added, and then hardcode-- you can go check, it&#39;s open source, and it says email, and the string is jared@changelog.com. It&#39;s just going to email me when there&#39;s a new transcript. But it&#39;s already in a for-loop, so I can go ahead and get to the next step pretty easily, add multiple email addresses... So I&#39;m looking forward to a little bit, but hey, it&#39;s a feature that -- I&#39;ve always wanted to know when the transcript&#39;s ready, and now I do. So... Baby steps.

**Jon Thornton:** Yeah.

**Adam Stacoviak:** I guess you can learn the value of the feature too, to you individually.

**Jerod Santo:** Right. Like, maybe I don&#39;t care. I&#39;m like, &quot;Ah! Another one of these... Why are we building this?&quot;

**Adam Stacoviak:** Right. Or you can see what the lag is even. It could be -- like you&#39;d mentioned before, Jon, some of this debt intentionality is data collection; being scientific about it, like &quot;Do we need this feature? How useful would this feature be? What is the user experience criteria around this as it plays out?&quot; So in this case, a precursor to this might have been maybe just some smoke and mirrors, fake UI to say, &quot;Do people actually care when they go to where the transcript typically is in the UI, find that it&#39;s not there, get upset?&quot; If we could show them some UI and say, &quot;Tell me&quot; and then essentially, let that be this collection of interested parties; opportunity, essentially. That might have been a precursor. Sure, I can see some benefit in it, but I&#39;m just talking through hypothetical of how you can essentially gather data, determine if you should, and then if you should, how is it actually working out?

**Jon Thornton:** Yeah, I&#39;ve heard that. So, it sounded like you were flipping it around and saying, &quot;What if we built the UI first?&quot; I&#39;ve heard that referred to as the Wizard of Oz pattern, where there&#39;s a man behind the curtain.

**Adam Stacoviak:** Right.

**Jerod Santo:** [unintelligible 00:43:59.15]

**Jon Thornton:** Yeah, yeah.

**Adam Stacoviak:** Well, I&#39;ve heard of the smoke and mirrors. [unintelligible 00:44:02.19]

**Jerod Santo:** That&#39;s what the Wizard of Oz is. You go into the room, and he&#39;s got smoking mirrors.

**Adam Stacoviak:** I know! Smoke and mirrors, that&#39;s right. I love it.

**Jerod Santo:** It all comes together. [laughs]

**Jon Thornton:** \[44:12\] Well, and it always just makes me laugh that behind that feature is a person sending emails to the people that signed up. It&#39;s not a computer.

**Jerod Santo:** Right. Oh, I love it. It&#39;s sort of the lean startup methodology as well, like build the landing page, prove the idea, and then--

**Adam Stacoviak:** Right, &quot;Do people even care?&quot;

**Jerod Santo:** Fake it till you make it, and not in the way of like you&#39;re lying to people; you&#39;re literally faking the feature, because you&#39;re doing it manually. Then we slap on this &quot;It&#39;s a concierge signup process&quot;, like &quot;Oh, that sounds nice. I think I&#39;ll have that.&quot; [laughter]

**Adam Stacoviak:** It&#39;s very hand-holdy.

**Jerod Santo:** Yes.

**Adam Stacoviak:** I love it.

**Jon Thornton:** Yeah, start with real intelligence before artificial intelligence.

**Jerod Santo:** Exactly.

**Break:** [00:44:50:01]

**Jerod Santo:** So whether the technical debt was intentional or accidental, eventually you&#39;ve got to pay it off... And it sounds like you all at Squarespace had some unintentional debt that you have been paying down lately. Do you want to tell us that story?

**Jon Thornton:** \[47:55\] Yeah, that&#39;s right. Like many successful businesses, the software that powers the business is a monolith. We were talking earlier about when you&#39;re building something, you gotta find out that people care before you really invest a ton in that thing you&#39;re building, and so often it doesn&#39;t make sense to start with a perfectly scalable microservice distributed system architecture from day one. More likely, you&#39;re starting with a monolithic application, and eventually, that gets extremely popular and then you have to scale out your system. So that&#39;s where Squarespace is at.

We&#39;re in the process of breaking up our monolith into separate services. We&#39;ve been working on that for a couple years, and one easy trap to fall into when you&#39;re doing that is, you know, a lot of thought will go into breaking off pieces of business logic into a separate service... But it can be easy to forget that there&#39;s also data that needs to be moved.

If your project ends up going slower than expected, and you&#39;re getting pressure from other stakeholders to switch to working on other things, you might end up building a microservice that&#39;s separate from your monolith, but leaving your data in the main database, which is a thing that happened at Squarespace. The effect of that was what we&#39;ve ended up calling the distributed monolith, where we have separate code bases for different services, but some of these services share the same database. That database ends up becoming an unintentional coupling point for the services... So that you&#39;ve now broken up your system into five or ten separate services, but in order to actually run any of those services, you need to run the other nine, too... And you haven&#39;t actually made your development faster, you&#39;ve just made it more complicated.

A team I work with recently inherited one of these services from a different team, and due to a somewhat-- we sort of made lemonade out of lemons where the team&#39;s product manager had moved on to doing other things, and the team was without a product manager for a little bit, and then had kind of a caretaker product manager, and we said, &quot;Well, this is a good time to take on some technical work.&quot;

What was even better was that the service that needed this data migration was going to be a key foundational aspect for future projects, that product management was really excited about... So we were able to sell this data migration, this very technical project to product management and the rest of the business stakeholders by saying, &quot;Yeah, we&#39;re going to make the development experience better, but what we&#39;re really doing is we&#39;re laying a strong foundation for this big project that we&#39;re all excited about starting in six months.&quot; And it solved a couple problems.

The big one for the engineers is that it fully decoupled this service from our monolith, so that it really was a microservice, and you really could just run it on its own... Or if you weren&#39;t actually doing development on that services at that time, our Squarespace&#39;s local dev setup is designed to just fall back to staging for any of the services that you&#39;re not doing development on. For many teams that build things that depended on this service, their local development setup got a lot better.

Another benefit was that we were able to adjust the data model as we were doing this migration. That&#39;s where we were building the functionality that product management was really excited about for the next project... And kind of the last key piece of making this project a success is we developed the system for tracking progress. Basically, we were migrating data access objects pretty methodically, we were migrating API calls pretty methodically... So there was a pretty easy to interpret burndown of the whole project, and that made it really easy to communicate progress, made it really easy to get trust from other parts of the business.

\[52:07\] We found that when we had that trust, it was really easy to get things done, because you didn&#39;t have to spend a lot of time explaining why you were doing this, or what the outcomes were going to be.

**Adam Stacoviak:** Get buy-in, basically. So if you have unintentional debt looming over you, the question you want to ask is &quot;Who would care if this debt was paid down?&quot;

**Jon Thornton:** Yeah, yeah.

**Adam Stacoviak:** Is that what you did?

**Jerod Santo:** And how can you bundle it in an attractive way to sell it?

**Adam Stacoviak:** Yeah. There were some key factors you mentioned - they had buy-in, early on. You had their trust, so you didn&#39;t have to keep going back to them, explaining what you&#39;re doing and why you&#39;re doing it. You could freely solve this technical debt in ways you felt are necessary to lay this foundation... So getting buy-in was--

**Jon Thornton:** Oh, it was huge. Yeah, yeah.

**Adam Stacoviak:** What&#39;s interesting there though is the leadership part of that, is the ability to see that. You&#39;re gonna be at this lead dev conference later this year giving a talk of similar name to this podcast/your original article we&#39;re referencing here, but... How do you help engineering managers bake that into who they are, teams bake that into who they are, to see that cross, that visibility in other teams to see the future of where product management is going? How do you do that? Just pay attention, be a better employee, be a better manager, be a better individual contributor? How do you get that insight? How do you get that, personally?

**Jon Thornton:** Oh, gosh... Making lots of mistakes and trying to learn from them.

**Adam Stacoviak:** Okay...

**Jon Thornton:** There was something that I heard last year, and I&#39;m blanking now on where I heard it, but it was the idea that instead of talking about paying down technical debt, instead reframe it as making technical investments. So instead of talking about making the bad thing go away, you&#39;re talking about what are the good things that are going to happen after you&#39;ve done this technical work.

I&#39;ve found that talking about it that way is a lot easier to get product management or the other parts of the business to understand why it is you want to do this. Or having to come up with the explanation of why this is a technical investment can maybe sometimes tell you, the developer, that you&#39;re pursuing the wrong problem. If it&#39;s hard to explain concretely what the benefit is of paying down tech debt, aside from the bad stuff goes away, maybe you don&#39;t need to pay down that tech debt.

**Jerod Santo:** That&#39;s a really good point.

**Adam Stacoviak:** Yeah. What kind of environment do you pitch this to? Do you call a one-on-one, do you do it [unintelligible 00:54:40.26] do you do it in your Agile workflows, your stand-ups, if that&#39;s what you&#39;re doing...? When is a good time to broach the subject?

**Jon Thornton:** Usually when-- so at Squarespace, we&#39;ll do our planning on a quarterly cycle. Every four times a year, we&#39;ll get together and we&#39;ll write down what each team is planning to do for the next three months. And we&#39;re not just coming up with that on the spot, obviously; we&#39;re thinking about it on an ongoing basis... But these quarterly roadmaps are usually a good way to understand where all of the teams are trying to get to... So they&#39;re a really good guide for ways that you can hitch your project on someone else&#39;s existing project, which is usually the easiest way to get something greenlit, is find something else that&#39;s already greenlit, and say &quot;Hey, my thing is going to help with that thing.&quot;

**Adam Stacoviak:** Like a parasite or a tagalong?

**Jerod Santo:** [laughs] A parasite...

**Adam Stacoviak:** I was trying to find a good word-- parasite is obviously not a good word for that...

**Jerod Santo:** Like a leech.

**Adam Stacoviak:** Like a leech, yeah. A tagalong&#39;s a better example for that... It&#39;s definitely parasitic, but with good intention, not malintention.

**Jon Thornton:** Symbiotic, maybe.

**Adam Stacoviak:** Okay, symbiotic.

**Jerod Santo:** Symbiotic relationship. Yeah, everybody loves a good symbiotic...

**Jon Thornton:** You know, because I think the benefits can go both ways that in that. Ideally, your tech debt project is doing something that does meaningfully move this other project forward, but you&#39;re also getting buy-in for fixing the technical issue that you want to fix.

**Jerod Santo:** \[56:14\] Yeah. That&#39;s good advice in the large. I have a little bit of advice for this problem in the small, working with individual clients, as I have for many years... People ask, &quot;How do I get my clients to pay or to buy into testing and refactoring, and these things that we know are good practices, but aren&#39;t working on a new feature?&quot; And my answer always to that has been, &quot;Well, I don&#39;t tell them.&quot; And it&#39;s not that I&#39;m trying to hide it. It&#39;s like &quot;Nope, this is how I write software. I write tests, I refactor as I go, and that&#39;s just part of what you get when you hire me.&quot; It&#39;s not like it&#39;s a line item on my estimates or my bids. It&#39;s just part of how you write software.

**Adam Stacoviak:** It&#39;s your value-add.

**Jerod Santo:** If they aren&#39;t interested in that style of software, then they can go and hire somebody else to write it for the fifth time.

**Adam Stacoviak:** For less, and accumulate debt.

**Jerod Santo:** Right. Total cost of ownership is an important aspect of that, too.

**Adam Stacoviak:** That&#39;s interesting.

**Jerod Santo:** Cool, Jon. When is this talk you&#39;re giving and where is it? Tell us about it.

**Jon Thornton:** Yeah. So, I&#39;m going to be speaking at The Lead Developer Conference in New York City. The conference is April 7th and 8th, and I think I&#39;m going to be speaking on the 7th.

It&#39;s a great conference. I&#39;ve been as an attendee before; I&#39;ve never ever spoken there, but... Anybody in a technical leadership role or people who aspire to be a technical leader, it&#39;s a great conference.

**Adam Stacoviak:** A two-day conference in New York City, in a decent month... What&#39;s the weather like in April in New York City? Is it beautiful? Is it amazing?

**Jerod Santo:** You never know what&#39;s gonna happen.

**Jon Thornton:** You can get any of the four seasons in April in New York.

**Jerod Santo:** Take your chances. It sounds like a really good conference.

**Jon Thornton:** Bring shorts and a parka.

**Adam Stacoviak:** There you go. Well, Suz Hinton will be there, Jerod...

**Jerod Santo:** Nice.

**Adam Stacoviak:** Bryan Liles will be there... These are two of the several people on the homepage that I know. And now you Jon, you&#39;ll be there. So that&#39;s awesome. NewYork2020.theleaddeveloper.com is the URL. We&#39;ll add it to the show notes, and a deep link to your topic, Jon.

Thank you so much for sharing your wisdom here. More importantly, thank you for writing it down. It&#39;s an important process to future educating future Jons, future Jerods, future Adams, or the listening audience, is like, &quot;Write it down.&quot; So I definitely want to encourage you to write more of your wisdom down, Jon, and we will be glad to feature it, and/or have you back on the show to talk about it. So thank you.

**Jon Thornton:** Awesome. Well, Adam, Jerod, thanks so much for having me.
