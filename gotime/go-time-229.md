**Kris Brandow:** Hello, hello, hello! Welcome, everyone out there in the land of Gophers. We're back for another episode, and this is actually the seventh episode in what used to be called the Maintenance Miniseries, and now is just a maintenance series, I suppose...

**Johnny Boursiquot:** Or just one big, long rant.

**Kris Brandow:** Yeah. Just one big, long rant. So if you've tuned into our maintenance series before, you know we've talked about buying versus building, how to build actually maintainable software, how to maintain it ourselves, how to maintain open source software, and legacy code... And even how to reuse some of that reusable code.

So in that spirit of that last one though, where we kind of dove in on a particular topic and got more into the nitty-gritty of it, instead of it being this more expansive thing, we're back to a kind of more confined topic, and that topic today is "What do we do with projects when they get big and messy?" For this topic, I am joined by Ian Lopshire once again. How are you today, Ian?

**Ian Lopshire:** I'm doing great!

**Kris Brandow:** Awesome. We're also joined by Sam Boyer. How are you today, Sam?

**sam boyer:** I am just lovely.

**Kris Brandow:** Amazing. And I have a wonderful co-host with me, and that is Johnny Boursiquot. How are you doing today, Johnny?

**Johnny Boursiquot:** You know, I always say that I've been better... I'm getting better... Yeah, I'll stick with that.

**Kris Brandow:** Okay. Yeah, it's always good to be getting better. Alright, and since all of you are now veterans of the podcast, I don't think we need any introductions, so we can just kind of jump right into it, I suppose.

\[03:51\] So I will caveat this by saying it was just a month and a half or so ago that we did talk about legacy projects... So obviously, we're trying to talk about big, messy codebases that we don't want to throw away. We talked a lot about legacy, and wanting to do greenfield, and wanting to get rid of big, messy codebases because we just don't wanna work with them anymore. We want something smaller. But today's episode is on those brownfield projects, and all of that.

I'll start with saying -- you know, I think the answer from all of you was gonna be yes, but... Do all of you agree that we should be focusing more on those brownfield, and just kind of taking those big, messy projects and advancing them forward? Or is anybody here just in absolute disagreement with that?

**Johnny Boursiquot:** Oh, I love me a brownfield project. Oh, I do, I really do. You know why? Because if it wasn't making money, if it wasn't valuable for the business, it wouldn't be around and I wouldn't be employed to work on it. So I love me a brownfield project.

But joking aside, brownfield projects are worn in. There are fewer things to figure out, unless it's still actively being -- you know, features are still being added, and development is active. There's no new big pieces to figure out. The patterns have been established, the abstractions, for better or for worse, are there, have been discovered... The mistakes have been identified, and hopefully documented somewhere, for some poor soul to try and address at some point... But there's clarity in the brownfield projects.

It doesn't sound sexy, or there's nothing appealing about a brownfield, but there are few things, there are fewer gotchas. Or at least the gotchas have been somewhat documented and identified. To me, that's some of the pros of the brownfield projects.

**Ian Lopshire:** It sounds to me like you had some really great brownfield projects, if all that's documented, and... \[laughter\] That's not my experience. I mean, those gotchas you said are hopefully documented - no.

**Johnny Boursiquot:** Not always.

**Ian Lopshire:** In the ideal world, I agree with you. And even if it's not a good brownfield project that's been documented and well-maintained, it's still keeping the lights on, because it exists and you're working on it, so... Bonus points there.

**Kris Brandow:** I feel like Sam just had something \[unintelligible 00:06:09.08\]

**Johnny Boursiquot:** He's trying to find a nice way to put it... \[laughter\]

**Ian Lopshire:** No, actually I'm trying to -- I'm feeling like a little kid and I'm stuck back on the idea of... Johnny, you said you like brownfield projects because they make money, which got me thinking... So the value stream runs through the brownfield; what's in the value stream that's making it brown? But I'm not gonna go any further there... \[laughter\] I'll just leave it, and say that my six-year-old would be very happy to supply some opinions about what's in the value stream. \[laughs\]

But after we get out of this sewer, I think it's interesting that -- Johnny, I feel like you must have some projects in mind that you're picturing, that they have the questions answered; some of the mystery pushed out of them, that there sort of aren't these gotchas, because that doesn't seem like something that's necessarily true with brownfield projects at all.

**Johnny Boursiquot:** So don't get me wrong... They tend to still have a pile of technical debt. Just things that people just wish they could fix. And engineers work on these things, and they're always like "Man, if we could only get a month or two to not be building and tacking on additional stuff at a slow rate." That's one of the downsides of the brownfield; it takes forever to ship new things, because you've got this pile of technical debt that you're just trying to work your way around, and "Oh, don't touch that bit of code. Nobody knows what it does anymore. The person who worked on that no longer works here, and they're the only ones who know what this thing does." You have all these skeletons, and those clauses, and whatnot.

So the code - I guess that's the nuance that I failed to articulate. The code - usually, it's crap. Let's be honest.

**sam boyer:** It's that value stream! \[laughter\]

**Johnny Boursiquot:** \[08:03\] That value stream, you know? It's full of things that makes it brown, you know what I mean? It's not just the sun hitting down on the grass and making it brown... Yeah, there's that stuff in there. But the business at this point hopefully knows what it wants; it's not changing its mind constantly. And these are some of the things that lead to the technical debt, the brownfield... Because business moves fast, and us engineers - we're just at the mercy of "What does the product team want?" or whatever. "What does management want? What is the direction that the company is headed in? How do \[unintelligible 00:08:34.04\]" And we never get the chance really to sort of address some of that cruft that just builds up... Which is something that I'm hoping we're gonna get into. Obviously, a natural consequence of these big and hairy and long-lived projects is the technical debt they accumulate. Hopefully, we can have some insights for our listeners on how we address that. There's lots of ways to address that. But the fact that you address it is a necessity. That's the nuance. The business itself hopefully has figured itself out, but as engineers we've inherited all the code that was written when the business was still trying to figure itself out.

**Kris Brandow:** I guess I would pose a question as well of -- I know we like to think and talk about greenfield projects and building all of this stuff, but is it actually possible for us... You know, not in like fantasy land, which we all like to think in when we go into a greenfield project, all optimistic about everything that's gonna happen... But like, can we actually create a project that creates value, and has that business stream, that doesn't wind up being brownfield? Are we just inherently in the sewage industry, and we will be dealing with sewage, and the reason we see them as greenfield is because - well, they just haven't accumulated any sewage yet, because they're not in production yet... So is that just like an innate thing, and are we kind of fooling ourselves at the end of the day when we think that our large projects aren't gonna wind up being big and messy? Or is it that there's a way to maybe do this better?

**sam boyer:** No, I have a take on this...

**Ian Lopshire:** Yes! \[laughter\]

**sam boyer:** No, I think it's really important to identify... Like, we do the greenfield/brownfield distinction in part because - or maybe it's just my flawed perfectionist mind, but I think we are excited about the new project to some extent because it is shiny, and because it has not been sullied by production and the realities of actually working for someone else, and the little processor in our mind... And it's important to maintain that kind of greenfield mentality, otherwise you sort of never really want to make anything new and shiny. But recognizing that part of the gap between these just has to do with our expectations, and what we're bringing to the table is a first important step for approaching any project. Which mentality did you apply, at what point? The field's not "Wait, wait, wait... So we have a dress moment." Instead of "Is the dress black and blue, or white and gold?", "Is the field brown or green?" And the answer is yes. \[laughter\]

**Johnny Boursiquot:** That's not very hopeful, Sam. You're usually a pretty hopeful guy. \[laughs\]

**sam boyer:** I imagined it kind of hopeful... I don't know. Things have happened. I mean it to be hopeful in the sense that there is the reality of business value actually having set in. We know what this thing is for, we know how we get value out of it... And there is something exciting about that sort of uncertainty, and plunging into new territory. And that's important... It's a great way to generate excitement, to get people involved, to get people moving in a direction. It's fun to work on new things. But I don't know, if you can make greenfields inside the brownfield, if you can recognize that part of this is what you're bringing to it, as opposed to something intrinsic to the project - then you can make greenfields out of anything.

**Kris Brandow:** \[11:56\] I kind of wonder if -- what you're saying here is the way that we get to a greenfield is by embracing the fact that it's a brownfield. You know, manure is used to grow things, so maybe you have to embrace that, and we get to the greenfield by actually sewing the revenue stream into the land and planting things, so they grow. This analogy is just gonna go through the entire episode, by the way...

**Johnny Boursiquot:** Yeah, I was kind of waiting for us to get there... \[laughter\]

**Kris Brandow:** It is not going to stop. But when you think about it in your mind, I feel like that kind of makes sense, and that's why I did really wanna talk about this topic, too... Because it's like, I think a lot of people go into projects thinking that they're going to start with a greenfield project, they're gonna start with something new, and it's not going to wind up in this big, messy state. That we're going to have something that will happen that will avoid this problem... And people just kind of think that later it won't happen, and we'll figure out how to make it not happen later... Whereas you have to think about that as you're going along from the beginning, if you want to avoid having your brownfield project be brown forever.

**sam boyer:** So we're talking about this like brownfield is old, and greenfield is new. Can we talk about what that transition looks like? What do you do on a project that you did wrong, that makes it now brown? I have some theories about this, but I'd love to hear what you guys think...

**Kris Brandow:** Time. You wrote more code. \[laughs\]

**Johnny Boursiquot:** Or you wrote code on a greenfield project. That can make it brown quickly.

**Ian Lopshire:** You change your mind.

**Johnny Boursiquot:** You change your mind, yeah. Change, really. In other words, time.

**Kris Brandow:** I said that half-jokingly, of time, but I think at least to me and the things I've seen, that usually is the big marker. It's like, we just kept doing what we were doing when we started. Because if you think about how you usually start greenfield projects, we all very much don't like the big upfront design kind of ideal, but that's how you would (in theory) avoid having a brownfield at the end of the day, is planning what it's going to look like in the future. But when we start greenfield projects, we wanna think about all of the good stuff, all of the fun stuff. No one wants to go put monitoring and telemetry into a brand new project. That's awful and terrible.

**sam boyer:** Hey! Hey! \[laughter\] I've got dinner to put on my table. What are you doing telling people they don't wanna do that?!

**Johnny Boursiquot:** "You're messing with my bread and butter here." \[laughter\]

**Kris Brandow:** I mean, they have to... You have to put some monitoring and telemetry and logging and all of that in, or you're gonna have something worse than a brownfield... So you've gotta put something out there, eventually. But we don't jump into a project and immediately start being like, "Okay, well how am I going to do my telemetry?" But you know, I think those are the important things. I think that's part of the start of the process of how to make something not brownfield at the end of the day, as time goes on.

**Break:** \[14:45\]

**Johnny Boursiquot:** I have a very painful memory of a project which started out green, quickly became brown; or it started browning, but we were moving so fast that there was "no time" to go back and face it. We just kept rolling. I think we've touched on some of this over previous episodes, but we had a proof of concept; indeed, a brand new project, greenfield. New GitHub repo, and everything. Brand new stuff. And we sat down with the customer, identified business processes, and this is what this thing needs to do, this is the problem domain, and all the good stuff, all the due diligence, the architecture... We didn't wanna do too much architecture upfront, we didn't wanna do big design upfront (BDUF); we're trying to avoid all that, we're trying to be agile... Gosh, that terms sort of gets under my skin now, but - we were trying to do a little bit of design, a big of development, a bit of design... So basically trying to do the right thing; trying to not run before we can crawl.

Despite doing all these things, a year later we ended up somewhere we didn't originally think we were gonna end up, despite all the requirements gathering, despite all the sitting down with the customer... Because again, in time, they kind of changed the scope of the project, they changed the nature of the project, they had a pivot in there... And this wasn't like a startup or anything; this was like an existing business, with a new business unit that's trying to do things. So this was like a well understood problem domain.

They didn't sound like they were looking for product-market fit, or anything like that, which are things that cause a lot of change, a lot of churn. But the conditions for this were effectively perfect. When you establish a business, who wants to build a new piece of software to basically take over manual processes? There's nothing more clear-cut than that. Yet, a year later we ended up in a place that nobody on the team was happy with. Unfortunately, somebody went home and over the weekend came up with the "idealized" version of what the data model ought to be. Kind of surprised everybody the next with the new thing. People weren't surprised in a bad way, they were surprised like "Oh, you did that. We'd been waiting to do these things forever", or make these changes, or change these class names. All the things you wanna do as a developer, like "Oh, this thing doesn't really mean that anymore. We've overloaded the term, so let's come up with a new term to represent this. Let's come up with a new name for these processes", whatever. You're just refactoring the whole thing with reckless abandon.

What ended up happening - we now had two models. \[laughs\] Because clearly, we couldn't just replace the old with the new that the developer had done over the weekend. It was unproven, it was all the things you'd expect. So we were like, "Hey, let's change the tires on this 18-wheeler", or 16 -- I don't know how many tires trucks have. But "Let's change the tires. Let's change some of the tires on this thing as it's rolling down the highway", right? We just tried to change too many tires all at once, and now we ended up having this monstrosity of some parts of the application referring to the new data models, and new class files, and new things, and then some of the old ones referring to the old ones.

\[19:53\] So now we onboarded a new developer... Worst-possible scenario, right? We bring in a new developer. Now they're scratching their heads, wondering, "WTF happened here?" And we kind of didn't have a good answer. It was like, "Well, the old stuff was kind of old and brown and really kind of -- that's not what the business was about anymore, and the new stuff is kind of an attempt at reimagining that, but we just haven't had a chance to make the old stuff go away, so that we can only have the new stuff. Now we have both of them." To me, that is the worst possible scenario. It's like saying "Give me all the negatives on both sides, and let me have that."

So every time we talk about greenfield, brownfield, I just think to that project. It's okay to have brownfield, it's okay to have legacy stuff, it's okay to have cruft, it's okay to have these things, but the naive thing, especially if you lack the benefit of time on your side as a professional, the naive thing to do is to think that you're gonna come in and over a weekend just re-envision the whole thing, and just come as "Hey, folks... Look at what I came up with." What, you think none of us had this idea? You think none of us wants to just go home and over the weekend just remodel the thing? What, you think we've just been lazy? No. This stuff is not as straightforward as just swapping a few class files.

So I think we need to learn -- to me, if you've only ever worked on greenfield stuff without the benefit of having sat down and grown with the project and see it in operation, experience the pain of it, get woken up at night by a page... All of these things that give you that well-rounded perspective on these business systems that we're writing. If you've only ever done greenfield stuff and you don't get to see it through, and you move on to another greenfield stuff - you're lacking, to me... Not through a fault of your own, but you're lacking a certain aspect of understanding how -- basically, that's the stuff that takes you from coding to engineering. Engineering is where you add time to the mix, to understand how do you keep this thing running over the longevity, over the long-term.

**Kris Brandow:** I feel like maybe a good, succinct way to put that is when you are dealing with these big, messy projects, avoid trying to just fix everything in one fell swoop. You've gotta slowly deal with the mess over time. It's not an overnight or over a weekend kind of process. It's like running a marathon, right? It's this thing you have to pace yourself. And you might want to sprint those first 200 meters, but if you just keep sprinting, you're never gonna be able to finish. So you wanna take it a bit slower than that and kind of plan the way that you're gonna go from the mess that you have, to the cleaner world that you want to live in. Does that sound like a good, succinct, or sort of succinct version of what you said, Johnny?

**Johnny Boursiquot:** Oh, I like it. Don't mind me, I can be a bit verbose... So thank you for summarizing into a TL;DR for me.

**Kris Brandow:** Yeah, no problem. \[laughs\]

**Ian Lopshire:** The hard part there then is knowing which things to fix, given the that they take time. What's valuable enough to work on, right?

**Johnny Boursiquot:** And I propose that engineers are not always in the best position to make that determination.

**Ian Lopshire:** Scratch your own itch is not necessarily -- because everybody is gonna have plenty itches, and it's very easy for perspective to get warped on that by which things seem itchy to you.

**Kris Brandow:** I feel like this is a part where the types of engineering roles you have plays a pretty big role in your organization. Because I think there are people that you need to have in this kind of middle space. It's like, you have the people that are up to the senior engineering level, that are sitting in to code every day, and there's a lot of itches that they have. There are a lot of things that they wanna fix. And then you have the product people on the other side, and they have all of their own things that they would rather see fixed... And I feel like there's this space for like the staff plus engineers that have a good enough understanding of the codebase to know what are the things we should fix, but also have this higher understanding of what the business needs and what the product needs at the end of the day, to kind of like keep going and growing.

\[24:05\] So I'll just kind of throw out there another thing, another way to help deal with big, messy codebases is to have people that are kind of sitting in the middle and can see a bit more of the world, at the end of the day. If you just have people on the opposite ends, it's gonna be very difficult to actually get the valuable things that you want at the end of the day. Basically, everybody's gonna be mad... \[laughter\]

**sam boyer:** I think you're right on the money there about having to really choose what you wanna fix... I can't even do a pretty crusty codebase at my current job, and kind of the way we go about thinking about that is looking at the year ahead, what we have planned... And if we're doing something just to do it, we're not going to. We're gonna look at -- like, if we wanna experiment on these three things in the next year, we're gonna fix things that make that easier. And the rest of it that's working, we're not gonna touch it.

**Ian Lopshire:** Every move you make should make a set of visible moves on the other side easier.

**sam boyer:** Exactly.

**Johnny Boursiquot:** One of the reasons I like observability and metrics and traces and all that stuff - it's not because it's trendy, whatever trendy name for these things now; it's because they help put a number to things. They help identify inefficiencies, they help identify problem areas. And if you can tie problem areas in the code for your infrastructure that you're responsible for as an engineer, or SRE, or whatever - if you can put a number to it and if you can tie that somehow to some business process which is valuable to the business, you're way more likely to be able to successfully argue for perhaps time to do some refactoring as you implement new feature X, Y or Z.

The mistake we make as engineers is to think that we can simply tell the business that "Hey, we need to do some refactoring. We need to \[unintelligible 00:25:57.20\] we need two springs to go fix things. And if you happen to be lucky enough to work somewhere where the business can afford not to have any features, or fixes, or whatever happened for a couple of months while you go and refactor things, that's awesome. Keep that job. Most jobs I've worked at - that's never the case.

What I've seen work is that if I have numbers, I can tie numbers to pain points for the business. I don't even have to argue about refactoring. The business doesn't care about refactoring, testing... These are our concerns. The business cares about this process is error-prone, it takes forever, it takes five hours to get a customer's issue resolved, it's costing us X dollars every time we do it. The business cares about that, and I can say "Oh yeah, we understand why." And I have the numbers to say "Yeah, it's because this, this and this."

Now, equipped with that, I will get the time I need as an engineering manager to get something refactored. Again, we're not gonna do the whole codebase, we're not gonna turn the whole thing from green to whatever color is in between brown and green. I don't have a color chart in front of me, I'm sorry... \[laughter\] But slowly, you're gonna get there. But you have to tie those engineering pain points to business pain points. Otherwise, if it's just engineering pain points, good luck. That's just little pet peeves that you've got. The business is just fine with it.

**Kris Brandow:** I will say, I've worked with quite a few product managers in my past, and other business people, who are very understanding of the fact that we do need to fix technical debt in codebases and we need to fix these things that bother us... The thing that I have always noticed - I think engineers have a lot of the curse of knowledge, where it's like, they understand things so well that they just think everybody understands them, whether it's these people over here that are like "I'll give you the time, but just assure me that you're sure that at the end of this time this thing will be done." So they enter with that, and then we say "Oh yeah, yeah, we'll definitely get it done by then." And then that two-month thing actually takes four months, and they're like "Okay..." And then you do that three or four or five more times and then they're like, "Hey, look, you're always wrong with this. So how am I supposed to just trust that this time you'll be right?"

\[28:25\] And we all come up with these, "Well, it got delayed because of X, Y and Z, and this was it", but it's very difficult for us to articulate that. And I think that is part of the reason we wind up with these big, messy codebases, is that we fail to articulate why we need to do this thing, and we fail to go back and actually do some of these steps in agile, of like have a retrospective and ask ourselves, "Okay, this thing that we said would take two months took four months. Let's actually write down why that thing took four months instead of two months", so then we know what it is that made it happen like that, and we can give that to the business, but also use it for ourselves. Because I think there's a lot of projects inside of these large codebases that are like "I wanna fix that thing", but we go into it without having a strong idea of how long that will take. Because if we did, we might say that thing's not worth it. Like, two months might be worth it, but if it's gonna take six months, we might say "Okay, well, it's probably fine the way it is."

So I think that's probably another tip there of like, if you have a big codebase, the way to get it less messy is to be real and raw and honest with yourself and your team about how long is it gonna take you to fix things, and give yourself enough information, even if the business does give you that unlimited runway; even if it is the first time. You say "I need some time to fix this", and they say "Take what you need", you still should sit down for yourself to make sure that you have an understanding, so you don't waste that precious time that you get. And it is quite rare, as you said, Johnny, but there are places that have it. So if you are lucky enough, then make sure you give the gift to the product people of seeing good engineering, so the next place they go they might give that team the same kind of leeway that they gave you, instead of the other way, where they're like "Oh, well I just had this bad experience, so I'm gonna carry that with me for the rest of my career and spread it to the rest of the product people I know." It's like, everything has an effect. It's a ripple effect, it's not just an isolated incident.

**Ian Lopshire:** Well, you know, not the next place... Like, future you, or future your co-workers. It feels like a truism to me perhaps, but I should verbalize it and see if y'all share the assumption... I'll go back to like "Is the field brown or green?" I think it might be a perception thing. And if that's a perception thing and not an actual color of things in field thing, then we should recognize that no amount of time did we spend refactoring the project is actually gonna make it green again. You know, paying down technical debt is going to make it green again. And if that is the case, it's pretty reasonable to put limits on the amount of time that we would spend on doing that refactoring, and all the more important, that skill to find the patches of green inside the larger thing of brown.

**Kris Brandow:** Yeah. I've had this kind of expanding take on the "Grass is always greener on the other side." But why is the grass always greener? It's like, well, they take care of their lawn, and they plant grass seed, and they do weed killer, and they do all of this work to make their grass super-green. And your grass might be green, but not as green as their grass. And you want your grass to be as green as their grass, but as you said, it's a perception thing... Like, "Does my grass need to be that green?" Like, do I want to spend all the time de-weeding my lawn, and setting up a good sprinkler system, and watering it, and doing all of this other work, just to have a lawn as green as theirs? Or is mine green but kind of weedy, has a lot of dandelions and stuff in it? Maybe that's fine. Maybe that is just okay of a lawn to have, and we should be alright with that.

I feel like there's some amount of keeping up with the Joneses, and us having rose-colored glasses about previous projects and thinking "But that project was real good. I wanna do that thing again." We filter out all of the bad parts of it, so it becomes this idealized green project.

**sam boyer:** \[32:04\] First of all, I'm glad that we have just so many metaphors right now. I can just picture the faces of people rolling their eyes at me when I use all these metaphors... \[laughs\] But that's okay. So I wanna ask a question - what does "Grass is greener on the other side" mean to you? Because I feel like it might mean a different thing to you than it does to me.

**Kris Brandow:** What does it mean to you?

**sam boyer:** I'm not trying to call you out. What it means to me is that you always think the grass is greener on the other side, but when you get there, you realize all the dandelions and all the patches in the grass that you had, that you were noticing, are also on the other side of the hill, and it was just you not realizing that they were there until you got there.

**Kris Brandow:** Yeah, slightly different interpretations of that... Because I'm like, "Okay, the grass is actually greener over there."

**sam boyer:** Right.

**Kris Brandow:** So it's like, "Okay, but why is it greener?" But I think both are nuance in analogies of things. I think they're both good ways of thinking of it. It's like, it's greener because they take care of it, but that doesn't mean there's no weeds. It's very hard to have a weedless lawn. So yeah, it looks greener from where you're sitting, and it might actually be a bit greener, but it's about how much do you care about how green your lawn is, at the end of the day.

**Johnny Boursiquot:** So my neighbor... \[laughter\] Literally... \[laughter\] Quite literally, I kid you not...

**sam boyer:** Oh, boy... We're getting out that axe, I can feel it right now. \[unintelligible 00:33:27.15\] \[laughter\]

**Johnny Boursiquot:** I mean, he quite literally has greener grass than I do. And you can see -- and if you can tell where your grass ends and your neighbor's nice, lush, green grass begins... That's all you know, right? \[laughter\] Because there's no artificial barrier -- it's not like there's a wall in between their grass and mine, right? It's just like, my stuff is just all ruggedy, and it has some brown in it... So I'm looking at his grass... Literally, when I sit outside my window, I look down \[unintelligible 00:34:01.08\] and I'm like, "How does he get -- he has \[unintelligible 00:34:04.11\] something green?" \[laughter\] And I'm like, "Every year, here I am, I'm going to Home Depot and picking up stuff, and just tossing it on there..." Like, literally, I have no clue what I'm clue what I'm doing. And then one day I was like "You know what, Johnny? Rather than watching YouTube videos about people's grass that might really have nothing to do with yours, how about you go talk to your neighbor, and say "Hey, neighbor, I noticed that your grass is really nice, really green. I'd like to have similar-looking grass. What do you do to yours?" And he proceeded to tell me exactly what he does at different times of the year, so that when spring comes around, the grass is healthy, things start growing... He's basically in maintenance model. He's not doing -- I just see him out there mowing his lawn, and every once in a while I see him spray some stuff... I'm like, "What is that you've got there? What are you doing over there?"

So he's literally -- he understood his grass. He was like, "Hey, so call this company, they're gonna analyze the soil... In this part of the country the soil tends to be -- you've got some red clay in it, this and that... So he started telling me why my grass is the way it is, because he had the experience to understand the land; he understood the soil... Obviously, he's an older gentleman, he's owned his house a lot longer than I have, and he understands the area. And I realized, "Okay, I thought I knew what I was doing. But I didn't know what I was doing."

Now, these days my grass is a lot greener. It's still nowhere close to what his is, but I've got fewer patches in my lawn, fewer brown spots... And I think it's the same thing with software. We think we know what we need to do to fix the brown patches, but that's just hubris. We're just arrogant. Like the person who goes home and comes back after the weekend with a whole new data model... \[laughs\] You know, we think we know; we don't ask. We don't ask the people who have been there for a while, like "Hey, so why is this the way it is?"

\[36:20\] If we only sat down and listened, we would start to pick up and understand why things are the way they are, and figure out how to move it forward, how to change it, and realize we're not gonna do it overnight. It takes time, multiple years, as it took my grass... It took me like three years to get it to where it is now. But it took me asking, and being humble, and saying "You know what - I don't know the history of this. Can you tell me, can you help me out here? Can you help me understand what I don't understand?"

I think it's the same thing. I think if you're gonna go into a brownfield project and it's new to you, rather than going in guns blazing and saying "Oh, I know how to engineer software. I'm gonna architect this. I'm gonna do what y'all couldn't do." That's just arrogance. Just slow down, ask around, talk to the business, talk to the business analysts, talk to engineers that have been there for a while... Heck, if I'm feeling adventurous I might even call people who no longer work there, because they'll be like "Man, I couldn't deal with this... I tried to do what you're doing now and nobody was moving." That's a data point too, right? So understanding and having humility I think is necessary to dealing with these long-lived brownfield projects.

**Kris Brandow:** I feel like there's another point you had in there as well, of like - before you asked your neighbor, you were watching YouTube videos and you were trying to figure things out, and I think that's how a lot of people try and solve these brownfield problems. They go pick up The Gang of Four, go pick up some book, and they're like, "Oh, I'll just go read all of this other stuff. This is general knowledge." Which is useful and is helpful, but you need much more of that localized knowledge of talking to people that have worked on that project for a very long time, and understand all of the nuances of that project and how it came to be, and then you can start working on it.

So if you're someone that's jumping into a new project, like a new project that's big and messy, it's definitely good to get acquainted with the land first. Understand what type of soil that you have, and then start trying to fix things. Don't think that you can come in and just fix things from day one. And I think this is something that companies could do a little bit better too, because I think there is this very intense focus on having engineers be as productive as possible, as soon as possible. "You commit to production on day one." And while that can be good from a morale or an excitement perspective, it can be very harmful in the long course of maintaining the codebase... Because now you're trying to optimize for, say, newer people being able to just kind of jump into the codebase, instead of optimizing for the health of the codebase overall... Even if it does take -- maybe it takes a week or a month before someone can commit into it, but the codebase is healthier as a result.

See, it's okay to have analogies as long as we tie them back to the topic at hand...

**Break:** \[39:04\]

**Ian Lopshire:** Johnny, I liked your story, and your tying it back in, and I was reflecting on how I have recently pushed too hard and charged too much in a direction, and did not indeed do enough of the exact kind of listening to local knowledge that you're describing... And problems arose. \[laughter\] And actually, I'm gonna point to another part of your story, too... As your neighbor noted to you; or you noted. I can't remember if it was him telling you, or you noticing... That - don't do a lot. Like, do the specific right things, at the right time. And I think it is - maybe this is another place where it's the greenfield versus the brownfield mentality is different. When you're starting a new project, empty repository, blank page, you do have to throw a whole bunch of effort in a whole bunch of different directions to get the thing just bootstrapped, right? But for something that's already moving, that's already got its direction, it's probably often a lot more about the right taps, at the right spots, to guide it in the right direction. That same kind of full-boar energy can be counter-productive. You end up fighting the inertia of the project, and it's not helpful. You've gotta figure out how to actually make it fit.

**Kris Brandow:** I read a series of books years ago, the Good to Great, and in it they kind of tell you how to think of the momentum of your business as like this giant flywheel that's moving. I think that when we start new codebases, we're kind of just like pushing on it, and it's not going anywhere. But as the codebase grows, as it adds value, the flywheel starts going, it starts moving really, really fast... And then it eventually kind of takes over its own inertia, and you're pushing it rather lightly and you're getting huge gains out of it... And I think when someone new does come into your project, then they're like "Oh, no, no, no, we've gotta stop everything. We've gotta change everything." Well, now you've gotta not just stop that flywheel, but then start it going again in a different direction, and that's a lot of organizational force to make something like that happen.

So I think your point is right on the spot there, Sam, where it's just like - yeah, we have to understand what is this project. It's not greenfield, it's not new; we're not starting from nothing. We have this whole thing here, and this thing is doing the thing. So we need to figure out how to do what we want to do, while the flywheel is still moving. Like, gently change the direction of it, not just abruptly stop it and start it again... Because while we're here now and we're amazing, so of course, we know how to do everything great - it's like, no, no, no. It's already moving, the people got it moving; you need to respect that and you need to understand that. And I think the same consideration goes in if you have a big project like that and you just wanna do a v2 of it, you just wanna do a brand new version of that thing... Because we've all had experiences with those plagued projects where it's like, "Okay, we're gonna declare bankruptcy, make a new one", and then you're still kind of relying on the old one because it has so much momentum. You're trying to bootstrap the new one and it feels so bad, because now you're in the new one and there's all this pushing that you have to do, and you're like "I didn't have to do this much work on the old one." Like, it's draining at the end of the day.

So I think it applies both to if you just kind of get dropped into a new project, or if you're in a project, \[unintelligible 00:43:50.17\] historical knowledge, and you're thinking, "Alright, I think we should start a new thing. I think we should try this again."

\[43:59\] So just remember, you're gonna have to put in a lot of effort to get it to where your brownfield project is, and you should take that analysis into consideration when you decide "Is this thing so bad? Is this thing so messy that I should get rid of it instead of just fixing it where it is?"

**sam boyer:** That goes the same. We've been riffing on the brownfield/greenfield thing, but what are we trying to do with the brownfield? Are we trying to change what it is? Is that what's important for business? Are we trying to just extend it? Is the problem that it's messy? There's a lot of different sort of things you can do or spots that an existing project can be in.

And if we're talking maintenance - I mean, are we just bug-fixing, or is what we're doing trying to refactor in a direction such that you're sort of enabling further improvements? I don't have an answer; I'm throwing it out there because I feel like we have strayed from the question of what kind of work we're actually doing and basing our goals on.

**Johnny Boursiquot:** You should have maintenance. It's in the name. You're trying to maintain it so that it can continue to provide value over time. The mistake we make is in thinking that we can keep projects green forever. That's not realistic. And I looked it up, the color between brown and green, by the way, I'm told it's forest green. It's like earthy green. It's still green, right...? \[laughter\] But the thing is, it's not like a brand new green; it's not fluorescent green, it's not something like early spring green. It's more like late summer. The sun's kind of beaten it up a bit.

**sam boyer:** It's green that's seen some stuff.

**Johnny Boursiquot:** Yeah, yeah, it's seen some stuff. Maybe the kids were out there and just ran over it and just \[unintelligible 00:45:42.02\] You know, it's seen some things, but the hallmark of good grass - as long as we're talking about grass here; \[unintelligible 00:45:50.09\] But if we're talking about good grass, one of the nice properties of healthy grass is that if you step into it, it'll depress, as grass normally does. But once you step off of it, after about 2-3 minutes or so, it sort of springs back up. It doesn't stay flat, it just comes back up. It comes back alive. So that's healthy grass, meaning that the business can come in, step all over it, abuse it, and your system somehow is resilient to all the different changes, all the different abuse that can come its way. Yeah, the sun will beat down on it, but at the end of the day, you're realistic enough that, okay -- like, this is not early spring grass. This is used, well-worn grass, but it's still green because you're doing the things you need to do, you're keeping the dandelions off of it, you're applying the \[unintelligible 00:46:44.04\] in early spring, you're weeding and feeding... You're out there all the time, just taking care and maintaining; and that's what you want - you want maintenance to keep it resilient, not to keep it from ever browning... Because sometimes it will brown; sometimes the kids go out there, they put a slippery slide water thing in there... And at the end of the day I move the thing and I'm like, "Oh my God, there's a patch of brown on my lawn because of the kids that were out there." But again, because it's healthy enough, the surrounding area is healthy enough that after a couple of days it comes back to normal.

You want that resiliency, you want your software to be resilient, and that comes through maintenance. You're not gonna get the everlasting new green. That's not what you should be after. You should be after resilience.

**Ian Lopshire:** And here we're talking about not operational resilience, but codebase resilience.

**Johnny Boursiquot:** Correct.

**Ian Lopshire:** So what are the properties of that?

**sam boyer:** I actually have some thoughts there... I was kind of reflecting on that earlier today, and I keep coming back to this idea of like bad projects being calcified, like they get rigid and hard to change, so throughout the codebase you don't know the repercussions of changing one piece, you don't know what the side effects are... You know, there's not the documentation... So the bad projects are the ones where you don't know what a change will do. That's the summary of it. That's what I think you need to identify and fix. Do you agree with that, or don't agree?

**Ian Lopshire:** \[48:04\] I would certainly say that's one of the properties. I would certainly agree. I think that you can tease out more... I think last time we talked about failure locality as a property, as a good test. That not only do you have things that help you know when things break, but you know where they broke. And this is not as simple as writing good log messages in your tests; it has to do with the way that you design your codebase, it has to do with building layers, it has to do with having clear separations of responsibility...

I would say though that those things are hard to add after the fact. This is perhaps one of the main frustrations with brownfield codebases. It's like, "So wait, you want us to change 30,000 lines of code in order to redo an architectural abstraction that we didn't have and we're clearly surviving without? Now, what's the impact of this supposed to be?" And this imaginary person that I had begun impersonating, without saying who they are, is not a product manager either. Like, that's another engineer being like "Really? Really? Really...?" And they're not wrong, because it is hard.

**Kris Brandow:** Yeah. I think there does at the end of the day need to be some good justification. I think that's good, too... Like, if you're gonna rearchitect something, then at least make sure you know the value that you're gonna derive from it. It's not just because it's the new, shiny thing at the end of the day. I think our industry does suffer quite a lot, especially in certain parts of the industry, perhaps related to browsers, where people just get very excited about the underlying architectures, frameworks and libraries that you're using, and the new patterns that we have... And I think it's like, "Well, what is that giving us? What is that adding to us? Why were those things developed?" And understanding those things at a deep level I think is important to actually having that more resilient codebase. It's not "I have this pattern--" It's not that like "Oh, I just decide to start using queues everywhere because queues are cool, and async is the hot thing." It's like, no, this problem can actually be solved well with a queue; it can be solved well with this type of technology.

**Johnny Boursiquot:** The interesting thing about this conversation is that as software veterans I think we have this intrinsic understanding of what it takes to build software. So for somebody -- like, if I put myself in the shoes of somebody who's new to this... Maybe you've been doing this for 2-3 years, you simply haven't had enough time around to understand there's a deeper meaning that we're trying to put forth here. That's why lessons have been captured in books; that's why we go back and we read these things, and that's why we have The Gang of Four, the pattern books... All these things were designed to basically help engineers build better software, more maintainable software, and things like that.

For example, open and close principle - it's something I know we're all aware of, that is a way of basically saying hey, one aspect, one characteristic of maintainable software is classes, for example, should be open to extension, to modification. So if every time you need to add new business processes to your software you end up changing your classes rather extending them, rather than adding new functions, new methods or new capabilities - if you have to go back and change a few things and now you have to change the things that depended on this thing... To support one new things you're changing a dozen other things, which really aren't related to the thing you wanna do, that's a good smell, that's a good indication that okay, your software is not as maintainable as it perhaps ought to be. But these things aren't new. We have this knowledge, it is buried in our books. Not all of it is perhaps still relevant in the modern day that we find ourselves in for software engineering and whatnot, but a lot of it still very much is.

\[52:03\] So if you're new to this - and perhaps one of the things that we can do in the show notes is to provide some books and some articles and some references to some of these principles that have basically stood the test of time to help you understand how to build better software... And this transcends Go, it transcends Java, .NET, Ruby, whatever it is. These are things that you can apply regardless of the technology you're using.

Basically, I guess we're not telling anybody anything new here that hasn't been around for a while. I think what we're trying to say is that "Look, we're old hats at this", and we now more than ever understand the people who were writing about this stuff when we were coming into our own. Now we see more than ever where they were coming from, and we can apply some of these things.

So if you're new to this, there's help out there to understand this. You don't have to rely on us four telling you, giving you anecdotes about grass, and things, to wrap your head around this. \[laughter\] There's stuff you can learn out there.

**Kris Brandow:** Yeah, I think that's a good place to end this part of the conversation. I have one question before we jump into the final segment of unpopular opinions... And that is, is Go a good language for big, messy codebases? And I feel like this can probably be its own episode... But I just wanna get a cursory "How do y'all feel about that?" Is Go good for this type of stuff? Does it have the right features for dealing with these types of large, messy codebases?

**sam boyer:** Yeah. Strong static analysis is the first thing that jumps to mind for me with big, messy codebases. If we're talking about being able to \[unintelligible 00:53:39.20\] It's difficult to understand the effects... It's not like static analysis is gonna cover you everywhere, but being able to just quickly enumerate "Where are all the references to this thing?" and know that that is a complete list, that is a very, very important piece, being able to manage a large and messy codebase. You can write Go in a way that doesn't really let you do it; there is no gun that cannot become a footgun. \[laughter\] But still, I think that is a thing Go has going for it.

**Kris Brandow:** Ian, Johnny?

**Ian Lopshire:** I think yes as well... I feel like I always come back to the simplicity of Go thing... But even poorly-written Go and messy Go is pretty easy to untangle compared to where I came from in PHP, where the classes were autoloaded in and you kind of figured out where the files even existed... So I think it is. I think it's easier to untangle than a lot of others.

**Johnny Boursiquot:** Thank God we don't have method missing... \[laughter\] You know how many times I've pulled my hair out doing Ruby and figuring that something was implemented somewhere deep up the chain and I couldn't figure out where to go to get something? Anyways, Go is -- I think one of the strong cultural aspects of Go, the idioms of Go contribute to helping keep the things you write in Go not simple, but perhaps simpler than they otherwise would be if they were written in a different language, like Scala, or Ruby, or PHP, or whatever.

I've been fortunate enough to have been doing this for a while and I've come across similar software written in different tech stacks, including Go, and I'm thankful for Go because of that, because I can understand these systems way better than I was able to understand these other systems written in other languages. Now I understand the nuance of time, with more experience and more understanding overall; I'm sure that contributes to that. But like Ian's saying, even poorly-written Go is readable Go. It may not be elegant Go, but it's readable Go. I can more quickly understand what the intent is.

\[56:05\] But yeah, I think the language itself, what it supports out of the box, and also the cultural, idiomatic approach that we overall have as a community - those of us who do Go, who have been doing Go for a while, hopefully these are things that we can import in the new generation, because these days we have way more new Go developers than we have old. People are adopting Go left and right, and there's way more new people than there are old Gophers like us.

**Kris Brandow:** I will add at the end, as a funny thing, Gophers also live in the dirt, so... Of course Go's great at brownfield projects. \[laughter\] They love being in that dirty grass. And with that, we move on to our final segment of unpopular opinions.

**Jingle:** \[56:43\] to \[56:58\]

**Kris Brandow:** Alright... Sam, you're up first. Do you have an unpopular opinion?

**sam boyer:** Oh, boy... I'm trying to formulate this one. We'll see. The most important part of GitOps is not Git and not Ops, at least depending on how you define those things. The most important part is the transform. You have objects on disk, and you have them in Git, and you make a change to them, you push them up and they go sailing out into the universe... Except the actually most important part of what's happening there is what's basically like a cloud compiler, which takes these input objects that you have and transforms them, and transforms them, and transforms them, and passes them off to other systems which transform them and transform them, and result ultimately in the thing that you want. We could do this without Git. We could do it with CVS, we could do it with a different system like that. What matters is the transform.

**Kris Brandow:** Okay. Any thoughts on that, Ian, Johnny? We just leave it there?

**Johnny Boursiquot:** No qualms there...

**Ian Lopshire:** Aren't the transforms the most important part of any software-related thing? Like, that's all software is, is take data, transform data... \[laughter\]

**sam boyer:** Quiet! Quiet! You're giving away the game! \[laughter\] No, that is a good point. Truly, that is what we do, is we just take some bytes in and then we transform them in a bunch of ways until things come out on the other side. So I think actually it is fair to say that Git is not the important part of GitOps; it's not fair to say that Ops is not the important part of GitOps. Because Ops really is the arrangement of the different transform operations... I think that's maybe the way to think about that. And yes, the particular way that you arrange and configure those transforms is what's unique about GitOps.

**Ian Lopshire:** Just to side-track for three seconds... I hear this term GitOps thrown a lot these days... I have no idea what it means. \[laughter\]

**sam boyer:** It's DevOps, but with Git. We've been arguing about this, discussing this internally recently. This is why I offered it as an unpopular opinion. Write your objects in Git, and whatever your objects are, use some kind of tool, whether it's Terraform, or some Kubernetes loader type thing, which then reads those objects and then makes the world look like that, essentially.

**Ian Lopshire:** Gotcha.

**sam boyer:** And the main, obvious advantage that you get out of that is by putting them in Git you have access to a pull request workflow that everyone is familiar with, you have reproducibility... You have a couple of really important properties that just come from having the infrastructure as code. So then you just attach automation, a.k.a. transforms and opsy things, to this sort of familiar flow, and this is an inevitable flow for all your objects.

**Ian Lopshire:** So a fancy new name for what a lot of people were already doing.

**sam boyer:** Kinda... Yeah. I mean, I think it's really just as is often the case, and I'm sure that I will get plenty of disagreement, or having missed some key aspect of this. But this is why it's not tied to a particular tool. It's not the domain of -- it's really just, like, you've got Git, there's objects in it, you make a push, that is the event that triggers the processing of the objects, and whatever that means, which can be literally anything, because you've got Turing machines in between your Git repository and your stuff. So yeah...

**Johnny Boursiquot:** \[59:59\] Yes, infrastructure as code, and the code live in Git.

**sam boyer:** Pretty much.

**Kris Brandow:** Alright. Ian, do you have an unpopular opinion?

**Ian Lopshire:** I'm horrible at this, I really don't. My last one was like 90% popular, so...

**sam boyer:** Was that like the biggest humble-brag ever? \[laughter\] I mean, I don't know...

**Johnny Boursiquot:** "I'm tapped into the people!"

**Ian Lopshire:** No, it just means I'm behind the discourse. Like, I thought this was not popular, and now everyone agrees, so...

**Kris Brandow:** You are at the end of the spicy train...

**Ian Lopshire:** I'm dated.

**sam boyer:** You're giving away the game. You totally won that one. I'm trying to give it to you... Just take it. Take it and run. \[laughter\]

**Johnny Boursiquot:** I've got one.

**Kris Brandow:** Okay, go for it.

**Johnny Boursiquot:** I think when you tweet, Twitter gives you that option to select who can reply to your tweet... If you select of the options, if you go from everyone to people you follow, or only people you mention... Let's go with the people you follow. I think that's the equivalent of saying "You know what - I only want responses from people who are most likely to agree with me." That's like shutting everybody else out. Because if you don't follow those people and you specify that as the only option of people that can reply, that's kind of creating your own echo chamber... Is it not?

**Ian Lopshire:** I agree with that.

**sam boyer:** Yeah... I can't disagree. It's sort of literally true. I think I'm just not sure that it's worse than any of the alternative options, if you sort of play them out a bit. But that feels like a longer conversation... \[laughs\]

**Kris Brandow:** I feel like it's a necessary thing though, because people commenting on the internet are horrible, and they are especially horrible to certain groups of people. So I think it -- I would say it depends on who's using it. If it's just someone that would be praised in bulk, if it was just open and had a little bit of criticism, then yeah, I think I'd go with you. But if it's someone that's just going to be dumped on because of a certain trait about them, and even if what they say is brilliant, they're not going to get positive or healthy responses back, then I think it's less about creating an echo chamber and more about protecting your own psychological safety and mental health.

**Johnny Boursiquot:** Yeah, the fact that we can all agree on the one thing - that should make for a pretty question to ask our followers.

**Kris Brandow:** Spicy...

**Johnny Boursiquot:** Spicy, yeah.

**Kris Brandow:** Alright, I think that sounds like it's it, since Ian doesn't want to come up with an unpopular opinion...

**Johnny Boursiquot:** Hey, Ian... \[laughter\]

**Kris Brandow:** It's okay, it's okay. That just means you have to automatically have to come back next time, because --

**Ian Lopshire:** I could offer you my backup one, but it's got Aristotle in it, and I don't feel like anybody \[unintelligible 01:02:37.27\] with that garbage... So let's just not. That's a terrible idea. \[laughter\]

**Kris Brandow:** That sounds like a good place to end the episode then... Ian and Sam, thank you as always for joining us, and thank you, Johnny, for being an amazing co-host.

**Johnny Boursiquot:** My pleasure.

**Kris Brandow:** Thank you out there listeners for listening to another very meta and analogy-filled podcast. I hope you've enjoyed it.

**sam boyer:** May your grass ever be greener.

**Johnny Boursiquot:** Get some grass... \[laughter\] Get some grass... Get it? \[laughter\]
