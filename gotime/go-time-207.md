**Kris Brandow:** Welcome to Go Time! I'm your host, Kris Brandow, and today we're doing another episode in our mini-series on maintenance. The topic of today is open source, but before we get into that, let's introduce our panel today. First we have Sam Boyer, who's been on the show a little bit before. He's been on one of our maintenance episodes before. How are you doing today, Sam?

**sam boyer:** Hi. I'm just lovely, and delighted to be here.

**Kris Brandow:** Excellent. And then joining us as well is Aaron Schlesinger. He's been on the show in the distant past, but he's very welcome back... How are you doing today, Aaron?

**Aaron Schlesinger:** I'm great. Thanks for having me.

**Kris Brandow:** Awesome. And my co-host today needs no introduction, but it's Johnny Boursiquot. How are you doing today, Johnny?

**Johnny Boursiquot:** I'm doing well, happy to be back.

**Kris Brandow:** Awesome. I'm excited to have both you and Sam on the show again, because we can get into some nice meta conversations here... But to kind of set the stage for today - so we're going to be talking about open source. And as most of us know, open source and other source-available projects are a huge driver of progress in our industry... But there's often a lot of focus on just like the initial building of those projects, but not a lot on the maintaining of the projects. Both maintaining the code, and maintaining the human aspects of projects. So that's what we're gonna talk about today.

So to just kind of dive right into it, let's start with the beginning stages of maintaining an open source project... Like, just getting it started. I'll send this one over to Sam... Thinking about initial projects, what makes for a good start to an open source project? What do you look for when you're looking at maybe early-stage open source projects?

**sam boyer:** Well, so are we talking about what I look for when I make one, or what I look for in judging someone else's?

**Kris Brandow:** Let's start with judging someone else's.

**sam boyer:** Alright. Landing on a page, I want a readme, I want to have a decent sense of what this thing actually is that I'm considering using for whatever purpose. The quicker I can get to figuring out how to actually slot it into whatever I'm planning on using it for, the better. Although that can depend a bit. If I'm trying to install a Vim plugin, it's a little bit different than if I'm trying to figure out how to use a SetSolver assisted library, or something like that. But still, the question of how the project connects to the larger ecosystem of software is one of the first that I go after... And then it's on to examples, and -- I mean, really, this is a process of how do I load as much information into my mind as fast as possible about what this thing is intended to do, and optimize for that.

**Kris Brandow:** Okay. Yeah, I think those are the same kind of things that I've been looking for. I definitely agree with having a good readme, having a good "Tell me what you are. Don't let me have to hunt through your source code to figure it out." Aaron, do you agree with that? Do you have other things that you look for?

**Aaron Schlesinger:** Yeah, I certainly agree with that. I think vision, like you pretty much alluded to there, Sam... Just having a vision. Why did you start the project? You being the creator, or whoever wrote the readme. Why does this thing exist? What is it trying to fix, or solve, or create?

For me, also, I like (I guess I would call it) ergonomics. So I like to see how easy is it for me to actually get this set up as a contributor. And of course, this really applies primarily if I'm looking to be somehow involved with this project over the long term. But yeah, I wanna know, "Hey, can I pretty easily", for some relative definition of "easily", depending on the focus area of the project, but "Can I relatively easily get set up and fix a bug later on down the line, or add a feature or whatever?" Because that's really important, I think, for long-term health.

**Kris Brandow:** Yeah, I like that. Those are some good answers.

**sam boyer:** And I think you're connecting already to the contribute back bit, right?

**Aaron Schlesinger:** Yeah, I guess I am.

**sam boyer:** So I actually have a question there... Are you coming at that from the perspective of the person coming into somebody else's project, or from the person as the maintainer of the project, the importance of providing a path back to contribution?

**Aaron Schlesinger:** I would go with both, but I have different concerns as a consumer versus a producer. As a consumer, I might not ever contribute, but it's important to me that I see that the project has thought of contributors, because I think that's a pretty good indicator of long-term sustainability and success.

As a creator, part of the reason I like a great contributor experience is because I'm gonna be a contributor; future me is gonna forget how current me set up the makefile, or whatever... But also, that tends to make things, at least for me, in my experience, it tends to make things way easier down the line when you have a community of even low-single-digit contributors. It tends to make things a lot easier if most people can download, do a git clone, and maybe download Mage, or just run make, whatever, and it just works. That tends to cut down on most of those annoying bugs... Like, "Oh, I didn't install this code-generation library, I didn't install X, Y and Z, so I'm stuck. I literally can't do anything until you, the creator of this project, comes and helps me debug this over a GitHub issue." For me, that's a little bit selfish, I suppose... But in a good way, because it helps folks down the line get started without that toil.

**Kris Brandow:** So you mentioned there wanting to see a good way for contributors to contribute to a project, even if you weren't planning to do it yourself. How do you feel about projects like Litestream and what Ben Johnson is doing, where it's like "No, I don't wanna have any contributors", and explicitly saying that. Do you see that in the same kind of vein, where it's like 'Well, they're being upfront about how they do it", or do you think you should always wanna be taking on contributors? Would you see that as a negative there for a project?

**Aaron Schlesinger:** Oh, no. He's thought about it. He's thought about what he wants the long-term vision of this project to be, and he's said "I'm not interested in contributors." So as long as you've thought about it... Because a lot of people, I think myself included - I may be one of the bigger offenders of this... I wanna build, so I start something and I build, build, build, and then it gets to a point where it's mostly feature-complete, or at least the biggest features are done... And then what? Then you have to figure out how this thing's gonna live over the long-term. But he's thought of that already, and I think that's wonderful. If he's saying "I am prepared to be the only contributor to this project over the long-term", then that's totally fine with me.

It's really the projects that clearly haven't thought about it yet... It's not to say they're not gonna be successful; there's plenty of projects that haven't thought about it in the first X number of months, weeks, years, whatever, and then figure it out later... But I do think it's a good sign when there's a plan put in place earlier, rather than later.

**Johnny Boursiquot:** I think Ben could be an outlier in my mind. So to add my two cents to the original question you posed, Chris... Obviously, there's gonna be the consumer side and the creator side, as Aaron has alluded to. So if I'm gonna consume an open source project, perhaps I need to run some self-contained service, whatever it is, that code happens to be open source, and it's maintained, and I'm gonna have that criteria of "Okay, does this thing have legs? Has it been used for a while? Has it been in production? Am I gonna have a mess on my hands if I deploy this thing?" Because the moment I download that code and I start running it in production, I'm responsible for it. It's not the people who wrote it that are responsible for it; I'm responsible for it when it's operating.

Now, I'm gonna have a different set of criteria than if I'm, say, creating an open source project whereby in the creation process, oftentimes even the popular projects, they don't -- there's a difference between starting to write your code out in the open, versus starting out saying "I'm gonna build an open source project." Because you don't know how popular it's gonna be, you don't know what the interest level is gonna be. Sometimes a lot of open source projects that become popular, they become so accidentally. So now the originator is basically like "Oh crap, I've got something on my hands here", and they might be sort of contributing, and leading, and providing a vision/direction for the project... And then eventually they need to step away and whatnot, and that's why you have a lot of popular projects that end up getting forked, and the vision doesn't perhaps get fully realized. That may or may not happen.

But bringing this back to someone like Ben Johnson, who has created projects that have become popular... I'm thinking of BoldDB, for example. For those who don't know about BoltDB, it's sort of its own \[unintelligible 00:11:47.23\] and it'll actually do storage for you; you can use it as a storage mechanism inside your Go code, you can say "Hey, store this", it'll serialize it, and when you need it back out, it'll deserialize it \[unintelligible 00:11:58.29\] dedicated database service, or something. It's part of your code.

So he got to the point where that project in his mind was feature-complete. It was done. It was a finished, completed project. Folks were trying to open pull requests, trying to make it do more than it originally wanted to do etc. So Ben basically said "Okay, I'm gonna archive this project. I'm gonna freeze this project. Because in my mind, it is done. It is a complete project." That is a very hard decision to make. When you see there's interest, there's even love in the community for that project, and people wanna keep extending it and adding things to it and whatnot, and for you to be like, "Okay, I have realized my vision for this project. I'm gonna stop adding things. I'm not gonna ship any pull requests, I'm not gonna receive any fixes, or whatever it is... For what it is, it is complete." And he just stops it.

So having had that experience, and bringing that experience with him into something like Litestream, he's basically deliberately saying, "I've been there, I've done that. I know exactly what I want out of this project." And maybe at some point he'll change his mind, and it'll be open to contributions, but today he's driving towards a vision.

So again, Ben might be an outlier in that clarity for an open source project. Not many people come into the open source and try to build projects with that clarity. But I think that clarity is valued, and I wish more people were more cognizant or just more aware of what happens with the longevity of open source projects, what are your plans for it, and if you can establish those plans ahead of time. As people are in the evaluation phase, looking at this project and saying "Hey, do I wanna bring this into my code, or should I just fork it now and do my own thing with it?" So there's a difference between coding out in the open, and having a project accidentally become successful, and now you've got something that you have to maintain, versus being deliberate about exactly what you're doing with it. I think those things should be separate.

**sam boyer:** I like this. I agree. I'm not sure I would call him an outlier necessarily, but maybe that's just to sound contrary on a podcast... I think of it as a gradient, but everything you're talking about there, Johnny - they're the elements to the gradient. The question is "What is the purpose of the project? What is its intent? What is its goal?" And when you think about writing your contributing.md, or what Litestream effectively has saying "Nope", what I think you're really doing is you are saying "Okay, here are the undefined, unexplored, not fully explored areas of the project. Here is where there is enough space", at least when it comes to code contributions, "Here's where there's enough space that a human mind should really come in and exercise its full creativity, and here's the bounding box that we're asking you to keep that creativity inside in order to keep it constructively within the goals of the project."

In the case of Litestream, I know what that purpose is. There are no questions at that level. There are contributions that are valuable to be made, but -- it's funny actually, because I was thinking of Litestream before Kris mentioned this... And it's not in the readme, but somewhere else in the docs, he explains that the motivation behind this was essentially in this particular class of application, the cost of attempting to integrate external changes and to verify the correctness of all of the other parts to the system was so high that it contributed significantly to burnout, because he felt caught between wanting to be responsive to people's shown interests and maintaining the correctness of the project.

So when you have such a strong vision that you are clear on what the correctness criteria are in the first place, and you don't need to make up new functionality and therefore new correctness criteria, it's perfectly fine. But that's what makes it a gradient; it's actually about how precisely defined are all the different pieces of your project and what they're supposed to do... And also why, to quote the readme here from Litestream - initially, Litestream was closed to outside contributions. The goal was to reduce burnout by limiting the maintenance overhead of reviewing and validating third party code. However, this policy is overly broad, and has prevented small, easily testable patches from being contributed. Because yes, when the project does deviate from its own stated goals, in some way, surely if someone can contribute a patch that brings it back in line without introducing new goals, \[unintelligible 00:16:15.06\]

**Aaron Schlesinger:** I think we see value similar to value planning a technology project. As you said, Sam, I am going to choose as early as possible what the bounding box is, in the contributing case, for how if at all people will contribute code, or tests, or documentation, what have you. And for \[unintelligible 00:16:40.08\] "I'm going to choose how far the feature set of my project X is gonna go, and I'm gonna use that vision in either case to decide probably indefinitely, to decide am I going to a) take a contributor or an issue or pull request or whatever, or b) am I going to say yes to a feature?"

That is a hard thing to do, because that is planning. And planning is hard. As we all know, that is planning. But it's also hard to have the confidence later on to stick to that plan, when there's a really cool feature that you've always wanted to do, or that'll let me use this awesome library if I wanna build this feature... Or I see some GitHub stars now, and maybe if I accept this pull request, I'll get more GitHub stars. We're all human, we want to grow, we want to see growth... We wanna do cool stuff, we wanna learn, so it's hard sometimes to stick to that plan.

I would actually say, assuming that you do have a plan, sticking to it is probably harder than making it, and that is a hallmark of a good project overall, with long-term sustainability.

**Johnny Boursiquot:** Aaron, if you don't plan, planning is not hard. \[laughter\]

**Aaron Schlesinger:** Ooh... Is that the first unpopular -- or maybe that's the most popular opinion.

**sam boyer:** But also, plans are useless, but planning is essential... So where does the balance of the proverbs land here? I don't know... Anybody else have another planning proverb?

**Johnny Boursiquot:** If you fail to plan, you're planning to fail, or something... \[laughter\]

**Aaron Schlesinger:** This might be the first majority philosophy podcast out there on Go Time.

**Johnny Boursiquot:** Yeah, it's unplanned. \[laughter\]

**Kris Brandow:** I do have to say, when starting a project - I guess this is kind of a question, too... Should you do that upfront kind of constraining of the project, or should you just kind of build it and see where it goes? Because there is the one school of thought where it's like "I kind of know what I wanna build, so I kind of build it and put the constraints around it." But then there's also this other effect, where sometimes you build something - or this happens to companies here - you start something and it's meant to do one thing, but then it kind of goes in a different direction, and it kind of finds a better place to sit in another area, that wasn't within your original constraints. So I'm wondering, how do you balance -- or is it even worth it to balance those two things? Or is that just something that we can't really determine early on, and we should just kind of go... Okay, Sam, you're pointing at me, but how do you --

**sam boyer:** Yes! \[laughter\] No, you can't. No. I really believe actually the planning is essential, but plans are useless. All of my teammates will tell you that they hear that from me a lot. I think it is good to go in with the clearest possible intent that you can. Over the course of my career I've gotten more and more into having a sort of well-defined constraint on what something is supposed to do at the outset, but you have to be flexible enough to recognize when you actually have to shift those goals, and the right reasons for doing so.

**Kris Brandow:** Do you happen to have an example of a reason?

**sam boyer:** God, no. \[laughter\] To make something shift? I feel like the easy ones that jump to mind are more like I was unaware of some underlying technical reality that I was assuming was easier than it was, and that has become such a -- basically, you assume that a dependency was gonna be there. What's coming to mind is "Oh, distributed systems are easy. I don't have to worry about consistency." And then you realize, "Oh wait, everything's broken because I didn't worry about consistency" and you have to pivot the whole way that your application works, once you realize the horrifying pit of complexity that is distributed systems. But those almost feel trivial; that almost feels like a more learnable set than "Oh, people just actually don't care about solving this problem in this way. I have been thinking about this problem wrong, which I'm wracking my brain to be more concrete, and I'm not coming up with anything." But this seems both more challenging and more common, because I think we just routinely don't actually understand what problems people are actually having when we try to write software to solve them, even when those problems that they're having are software problems. It's difficult figuring out what the actual problem is.

**Johnny Boursiquot:** But it's okay, because there's no way you're gonna create something that meets the needs of everybody. That's why you have forks; you want something that meets 80% of your requirements, and there's a 20% that doesn't - you fork it and you add the 20%, and you're good. The only problem now becomes if you need the fixings, and the 80% that you got, if you need to keep that up to date, then it's your responsibility to bring in that new code on a regular basis and whatnot... And most people don't do that. They'll fork it, add their features, they YOLO the rest, and hopefully there's no updates to be made... But that might be okay, too.

So I think for me, the smaller the scope of a project, open source or otherwise, the better. We get into trouble when we accomplish the initial vision. And this is not just open source. This is just every company out there with a product, we laud the simplicity of things. "Oh, this thing is so much simpler than this other thing which is bloated and has all these bells and whistles that I don't use, or need, or whatever it is..." But that company/group has been building stuff and adding things because there were some people the original solution satisfied, and some that it didn't, so they keep trying to add all the things to try and cover as wide a base as they can. And then all of a sudden we're like, "Oh man, that thing's gotten too big, it's this, and that..." Now we laud simplicity, and then we start the cycle again. It's like, "Oh man, I wish that simple thing add just one more thing." And 200 other people saying "Yeah, one more thing", and then you start the cycle again.

So again, that's not a bad thing. If we accept that this is how software works, then it's okay. Again, it's a matter of hoping for quality, hoping that you're gonna get to a point, you've accomplished a vision because the scope was tight and small... Again, to use Bolt as an example - the scope was tight and small. It got done, it was finished, and then the author moves on to something else. If you wanna use Bolt, you can, and it's excellent at what it does. If you need something else, you can go find whatever that thing is. And it's okay to finish projects.

In the open source community I see things that drag on and on... You go to an open source project and you see a bunch of issues that have been opened, the maintainer(s) are no longer paying attention to them, and they're falling out of maintenance and repairing things... You have pull requests that are open, people are begging - "Hey, can you please merge this in? This is gonna fix this bug, and here's the tests, and here's all the due diligence..." But the original maintainers/creators have moved on to whatever that next thing is for them... Again, nothing wrong with that; again, if you bring in these projects, you inherit them. You inherit the responsibility of those things. So these maintainers don't own you anything. You use their software at your own risk, right? But it's okay if there was one lesson here that I think open source maintainers can take away - it's okay to call a project done. It's okay to say it's finished. It is feature-complete. You will accept patches for fixes, you'll accept security updates, whatever the case may be, but it's okay to say "This project - its original intent has been accomplished. This project is done. Moving on to something else now." That way, when somebody stumbles on it, they know "Okay, if I need a, b and c, and it checks these boxes, this is a complete project that does that, and I'm good with that." You take it, you inherit it, you're good with that... Rather than hoping, "Oh, I hope they're gonna keep maintaining it." No, it's okay to complete things and move on.

**Break:** \[00:24:45.06\]

**Kris Brandow:** I do wish that the tools we use, like GitHub, were a bit better about this... I feel like if there was an option in GitHub to mark something as like "This is feature-complete", like if you find a bug or something, like "I'll go fix it", as a maintainer. If you log an issue and it's a big bug, it's like, "Okay, I can go maintain it, because it's within the original scope."

Because that's the thing about Bolt - I love Bolt, but every time I look at it and it just says "Archived" in \[unintelligible 00:26:32.25\] it feels like a big "Don't come here, son. Don't use this. This is old software. It could have problems with hit." So I feel like that's a platform issue that we can help fix.

And I think too some projects really do need to rein their scope in, and I think sometimes they have this effect of just making it more difficult. I think for people that do wanna be as pragmatic about these things as I and many of you tend to be... I'm thinking about like Viper specifically, where I remember -- this was years ago, where my whole team was telling "We've gotta use Viper. We've gotta user Cobra. We've gotta use Viper." And I was just sitting there, writing all of this boilerplate because Viper had grown, and grown, and grown, to be able to do any kind of configuration you wanted; you just had to configure the configuration...

And I sat down one day and I just wrote my own implementation, from scratch, using the Reflect library... And it was fewer lines of code to do all the configuration we needed than just the boilerplate of Viper. And I just sat there and I was like "This is a project that everybody wants to use." It's like the quintessential example of "Oh, you wanna write a command line utility, or something? Go grab Cobra and Viper and use them." They're spread everywhere. But it's like, "Okay, now I have more code to maintain. It's not even really doing the core thing I want it to do." It's just boilerplate there, because the project expanded too wide. And I feel like there's a class of projects that's like that, that are super-popular, but have expanded their scope too much... And I just wonder, how do we back away from that sort of stuff?

**Johnny Boursiquot:** You don't, Kris. You don't. Let's take another example that is not necessarily grounded in the Go community. Let's go with Ruby. So in the Ruby ecosystem you have Rails, which basically is very popular, has continued to grow every year, it keeps adding new things, it keeps trying to take toil away from the developer, and all that stuff... And some people love it. Even if they need a simple API that could be done with something like Sinatra, they will go the Rails route, because it's popular, lots of people know it... If the developer leaves today, you hire somebody tomorrow, they come in, they know Rails, they're productive.

Even if your project could have been done with something like Sinatra, the simple route for tossing together your API endpoints, you're gonna go with the more complicated thing. Or maybe you're sensible enough to realize, "Okay, I'm just gonna start with something small. So I'm gonna go the Sinatra route", and then you start basically falling back into your habits that you know and love, with the more popular things like Rails, and you're like "Oh, I wish I could do this. I wish I had an ORM. Oh, I wish I had the special routing." And then next thing you know, you're inching your way to the more complicated thing, because you're used to the complicated thing.

So rather than saying that projects need to change, we need to change ourselves. We need to change our approach to how we're building things. So there's a reason I love Go... Because Go is not trying to be all things to all people. It is a very specific language that was designed to solve a very specific set of problems that it saw.

So when we talk about Go, versus Java, versus Rust, whatever it is, I look at these and I'm like, "Hm... I kind of don't really care whether you think this language is better than Go or not." Because for me, Go is solving a very specific set of problems. I'm not really gonna compare feature by feature. I could care less. I honestly could care less about this other language's feature, because that is not a problem that I have.

So if we start looking to solve -- whether it's picking a language, or the right package, or the right full-on open source project that we're gonna run, whatever it is, if we start saying "Hey, let me not jump to the deep end. Let me not pick the most complicated thing, the most feature-rich thing, the thing with the prettiest website, the most stars, whatever--" If we started looking at like "Okay, what problem am I trying to solve?", we'd get ourselves in fewer hot waters than we needed to.

And I'm looking at a lot of people that are jumping on the Kubernetes bandwagon right now. That is one example I will always fall back into. Most of you don't need Kubernetes; that's my unpopular opinion... \[laughs\]

**Aaron Schlesinger:** You mentioned a really specific type of consumer, which I think most would agree is the most common consumer of open source, which is a business... You talked about hiring. So that brings up another point - a business might not choose or build technology that's the simplest. It might not even want to build technology that's technically the simplest. And you mentioned the community, and that might be -- I've never built a business. I've never run a business, so all I can do is make educated guesses here... But the community quality and size might be one of the biggest reasons why you would choose a technology that's more complicated than an alternative.

So Rails is your example, right? Rails has a probably bigger community, probably a lot more quality engineers that you can hire that will know and be attracted to a Rails job than a Sinatra job. And that might be a reason to choose Rails, even if you've gotta build a Rest API with two endpoints, or something like that.

**Johnny Boursiquot:** Then let's not pretend this is a technical problem.

**Aaron Schlesinger:** I would agree, yeah.

**sam boyer:** There's an essay written ten years ago, which I could have sworn I shared last time I was on here, and I don't think that I did... It's by a guy named \[unintelligible 00:31:51.09\] who was an early member of the Drupal community, which is where Kris and I met, in the mist of time in the past... And he wrote this essay -- he famously departed the Drupal community, and wrote this essay ten years ago, which I've put in the chat here... I don't know if that goes to YouTube, but we'll put it in the show notes... In which he described, amongst other things, how communities can become self-fulfilling prophecies that just continue to produce things inside of the context that they've already created. At least part of the reason that happens is yeah, once we have a community and you have other people around who are watching and paying attention and speak the same language that you do - and I don't necessarily just mean programming language... You could start at the programming language level, Ruby, then go down to Rails or PHP, and then down to Drupal. Like, this is a community of people you can have a conversation with. It's a medium through which you can express, which is both important from a purely practical solving problems perspective, but also from a human expressing your creativity and having it seen by others perspective. And I do think that there's a fundamental tension there between the growth of a community and keeping things small and simple... Because there isn't really enough space often for everyone to make those creative expressions and still have things remain sufficiently simple.

**Aaron Schlesinger:** Long-term, I think that's the most productive way to grow open source though.

**sam boyer:** Yeah. I'm not saying it's not good, but it's just tension. It's a constant tension.

**Aaron Schlesinger:** We need that to evolve, right? Have the next programming language, the next systems language, the next web framework, whatever.

**sam boyer:** Yeah. Well, this is part of why Johnny's cycle thing matters, right? Like, we're gonna see the growth, and then something new will come along and will displace it... Because we have to allow the humans who are in the space to be humans.

**Aaron Schlesinger:** Yeah.

**Kris Brandow:** But I feel like there's also this amount of -- because there's that... You know, we have to build those communities, and there's a lot of good focus on growing things... But I'm also always struck by how the things that we actually depend on at the end of the day are very old things, that haven't changed a lot, like I said in a previous podcast... But HTTP has three versions over 30 years that are all compatible with each other. And this is the bedrock of not just technology, but of our society. If HTTP broke in some horrific way tomorrow, we would all be panicking. Financial markets would stop working. The world would collapse. \[laughter\]

So we talk about this open source stuff and how important it is to build these projects and to grow this stuff, but then you turn around and you look at "Well, what is the actual bedrock of how we operate and what we do?" and it's these boring, very slow-moving technologies. I feel like there's space in the world for both of these things to exist, but I feel like we're having this creeping that's happening, where people are creating things that want to be that bedrock, but they're creating it with this hyper-growth/startupy mentality; once again, Kubernetes. Kubernetes wants to be this foundation, and wants to be this thing on which we can build the other things, but it's also just like a giant mess, I wanna say, at the end of the day. It is an extremely difficult beast to operate. If HTTP was this difficult, HTTP wouldn't have won. If Linux was even as difficult as Kubernetes is, I don't think Linux would have won.

So I guess, is there a way to shift us back? Is there a balance here that needs to be struck in some way? Or maybe we've just gotta keep trying, and eventually someone will make another one of these things -- people just make lots of open source stuff, and one of them catches on, for some reason...

**Aaron Schlesinger:** That's what's happening now...

**Johnny Boursiquot:** It depends on whether you're building -- I like your use of HTTP as sort of a fundamental piece to pretty much most of what we do in this field... But I look at that as sort of a much lower-level component. So to me, it's the differentiator between a component versus a solution. Kubernetes is a solution. HTTP is a component, in my mind.

So the lower down the stack you are, if you're talking about "Okay, I wanna create something that's operating at the TCP level, the network level. I wanna do \[unintelligible 00:36:10.03\]." At that level there's a lot less churn, and - I don't wanna say lack of innovation, but there's fewer things to change; there's fewer groups trying to append and sort of reinvent that wheel. So we'd rather build things that are much higher up the stack, basically inching your way closer to a complete solution... Because at the end of the day, that VC money is for solutions, not for components... So that's where you have most of the activity, happening at the solution level. So you have people that are building on top of those solutions to create their own solutions.

So the higher up the stack you go, the more contributors you're gonna have, the more people who can use higher-level languages to create things, and to build solutions on top of other solutions. So to me, it's like - if you are at the systems programming level, yes, there's some innovation there, but not the same kind of innovation happening much higher up the stack. So I think it's important to differentiate those different layers and the kinds of contributions, the kind of open source projects you're gonna see in those arenas, versus things higher up the stack.

People are creating Go packages that do very specific things all the time, but fewer people are trying to reinvent how Go does net/http, or how Go handles networking requests, or whatever it is... But they are building these things much higher up the stack, to say "Hey, I need a package that's gonna do this encoding in a very specific way that I don't get from the standard library or from any other third-party library." So they create one and they open-source that. So those kinds of innovations, those kinds of contributions - there's a lot more of those, and those are the ones I'm very critical of. Those are the ones I'm gonna sit down and say "Hey, so do I need to bring in this third-party encoding? Or can I use what's already in the standard library? Or even better yet, is there a way I can design my solution not to require this different, high-intensity encoding, unless that is part of my secret sauce for my solution?" If my solution is to package and serialize something in a very specific way - high efficiency, whatever it is - then maybe it's worth writing my own encoder to solve that particular problem, because that is my business. But any other case, I'm being very critical with these things. Do I wanna bring this into my world? Because I'm gonna be responsible for it. So I think we have to be very cautious as to what layer are we looking at here in terms of contributions, and open source, and maintainability.

**Aaron Schlesinger:** So Kris, you asked "Is there a solution to this problem?" And Johnny, you mentioned what I believe is part of the solution. Not the whole thing, because we still have people involved, and... I mentioned before we went live, I said "People are hard", right? But part of the solution is what you said - you said there is a difference between solutions and components. Solutions are not composable, they're generally not interoperable, and sometimes they're not open either. Components are, though. HTTP is a component of most every application, every business that's being started today on the internet... And it's completely open, anyone can pick up the RFCs of HTTPs 1, 2 or 3; anybody can build their own implementation of it for their favorite language. Everybody can use it to communicate with anybody else. Even Kubernetes is a solution, but the internals are moving towards componentization.

**sam boyer:** I was gonna say, it's fun to pick Kubernetes there... API servers as a pattern.

**Aaron Schlesinger:** Just because people have all these components. Even if they're very high-quality, very well-documented, very strong communities behind the components. It doesn't mean, of course, that we're going to make open source better. We have to ensure that people buy into the concept of small, open components. In the Unix philosophy, they do one thing and do it well... But also that they're incentivized to create and use those things, too. That is a problem that I cannot solve, because people are hard. I'll probably say that a few more times today.

But the mere fact that the pattern is established and popularized... And again, we're in the Kubernetes world, we're picking on Kubernetes, so... That's becoming a more popularized pattern in the cloud-native world. The mere fact that it's becoming more popularized is a massive step in my eyes towards improving the state and quality of all of those components that are growing in the ecosystem. I think that's a really good thing, because you have that there; the next step is to figure out how to get people to believe in it and use it, and so forth. But at least it's there, and I think that's a really strong direction to go in.

**Kris Brandow:** Yeah. I guess I wanna maybe push back a little bit on this HTTP as only a component and not as a solution... Like, HTTP/1, I think that works for... But the genesis of HTTP/2 and HTTP/3 was very much a solution-oriented thing. HTTP/2 came out of Speedy, which was Google's desire of "We don't want all these connections coming into our servers, so we're gonna invent this new protocol, do all this stuff to kind of make all this work", and then after that they've figured out "Oh, head-of-line blocking is still a problem", so then they created QUIC, which then kind of made its way into the IETF and this whole standardization process. And I feel like that's sort of the same thing that Kubernetes is trying to do, to your point, Aaron, of like "Okay, we've built this main solution", and before, in the long-ago era, there were all of these different solutions, that then kind of came together to be part of Kubernetes, and now Kubernetes is itself trying to do the same sort of standardization thing... But I also feel like the HTTP route of standardization, while very, very long, has felt like a bit less hectic than the Kubernetes route. And I wonder if that's just because they're different layers in the stack, as you said, Johnny, or if this is a different approach to maintenance as well, of like - you know, HTTP/2 and HTTP/3 were very much Google decided to go do something, and then convinced everybody else that that should be adopted... Whereas Kubernetes was more of an open community thing, so maybe that's just like the messiness of trying to go through a big community standardization and get everybody on board... I'm not really sure. But in my mind, it doesn't really feel like there's that much of a difference between HTTP and Kubernetes, except for HTTP being much older, and being a slightly different type of solution or platform than Kubernetes. It's on a different level, I will give you that. Definitely.

**Aaron Schlesinger:** I feel like maybe "solution" is used in two different ways here.

**sam boyer:** Solution doesn't necessarily mean that -- the sense that you're talking about there, Kris, I think is solution as the thing on the other end of a problem... But that's not necessarily the sense that Johnny originally used the term in, right? ...like, solutions being problem-driven, whereas Johnny was talking more about the completeness aspect of it.

**Kris Brandow:** That's kind of the angle I was going as well. I think maybe part of the problem is because we do take HTTP as this kind of like -- because it moves a lot slower, and it's more of this kind of foundational thing, that it is a lot easier to see as a component than it is to see as like a solution... Because they are doing work to make it like "This is the platform on which you should build your API. Here's all the tools you need to do it. Go forth, use those tools to build i."

**sam boyer:** Well, so what we're really talking about then is certainty in scope, right? Which is what we were talking about before.

**Kris Brandow:** True.

**sam boyer:** What is the reasonable balance of responsibility for HTTP? That's a more well-defined question that what the reasonable balance of responsibility for Kubernetes is.

**Aaron Schlesinger:** I don't think that question has even been answered.

**Kris Brandow:** No.

**Aaron Schlesinger:** I'm not sure if it's been considered at scale for Kubernetes... \[laughter\] And just to be clear, I work on Kubernetes and its surrounding technologies all day, every day, so I happen to really love the technology, lest someone think I'm trashing it...

**sam boyer:** Kubernetes is like a general model of computation. Of course it's not gonna be -- there's no limits on that. Universe is. Making Universe is. That is the limit on computation. So there you go. \[laughter\]

**Kris Brandow:** And maybe this is another maintenance thing as well... You can actually go and look at the working group for HTTP and kind of look at the way that they're thinking... They have that -- it's pretty large; it's pretty aspirational what they want you to be able to do with HTTP... And if you actually read through the specifications too, what HTTP can do versus what we often use it for, and the mass reinvention of parts of HTTP that are designed worse, and then put on top of HTTP... I think there's just like this level of misunderstanding, which might go back to what we were talking about earlier, of like "Have you presented your open source project in a way that makes it so people understand what you're trying to get them to use out of it at the end of the day?" And I will definitely say that unless you are someone like me, that likes to go and read specifications for fun and profit, then it's not gonna be something that's easy to pick up on. So I think a lot of the rhetoric in the world is like -- oh, you can do some posts and maybe some CRUD with it, and that's sort of it. And you shove some JSON over, if you're doing an API. But I think that's where people's thoughts of it kind of end.

But anyway, anyway... I feel like we've gotten a little off-track of the maintaining open source route. But I think that this is related to it, of like burnout, and just having maintainers have to think through all of this while also maintaining a project seems really difficult. I think all of us here have maintained an open source project before, so I guess a little content for the maintainers out there... What strategies have you used in the past to not spiral out of control thinking about this existential crisis of bounding your project while also trying to maintain the whole thing, and keep your sanity and be able to sleep at night and not stay up till 4 AM to read how you solve these problems.

**sam boyer:** See, the recursive loop that I get stuck in is "How do I bound my project?" But I try to not get stuck in that recursive loop, because it is the bounding of the project that I use to actually stay sane... So I try to stay only meta-crazy, but day-to-day sane. \[laughs\]

**Aaron Schlesinger:** Meta-crazy... \[laughs\]

**sam boyer:** I lose my mind at the level of "What should the bounding box be?", but I try to stay at least sort of sane as to what I've decided the bounding box is today and make the decisions about how I organize issue queues, how I triage issues, how I'm gonna prioritize things, how I respond to people, how I organize people's interests and efforts, possible contributions to a project in terms of whatever I have managed to pull out of the maelstrom depths of my mind as the scope of the project. That's my solution to existential sanity, for unanswerable questions... \[laughter\]

**Aaron Schlesinger:** I don't know how to follow up on that. I have something far less profound to say. I'll give it a shot...

**sam boyer:** Sorry...?

**Aaron Schlesinger:** No, I can appreciate that, absolutely... The thing that the bounding box defines how you think about it. Yeah, absolutely the same. One thing that I've done with fairly good success to keep myself productive and scalable and sane is just this concept of -- I've heard people call this a contribution letter. I'm not sure if that's the right term. The basic idea is give people an open, documented way that they can take to get from where they are to sort of the next level of contribution, whether they wanna go from nothing to like a contributor, someone who can review pull requests, or they wanna go from that to a place where they have God Mode on the project, or anywhere in between.

Giving people a way to get there, where they don't have to come to me... Let's say I'm a core maintainer - they don't have to come to me every day and figure out what is the next thing that I've decided they need to do off the top of my head to get there.

So taking all the arbitrariness out of that whole process... It tends to free me up to literally just go to the \[unintelligible 00:48:13.29\] think about the technical merits of something that someone has submitted, and then have a discussion on that alone. And that's hard. I don't have a solution to build an AI to free myself up to not do that... That's important, that's necessary for most any project.

**sam boyer:** That's the fun part, right?

**Aaron Schlesinger:** Yeah.

**sam boyer:** Yeah, I think you're totally right... The maelstrom of bounding boxes aside, the thing -- that's absolutely what you wanna do. You want to create a self-served path to participation... Both because if your project is even remotely successful it's totally impossible to scale yourself to interacting with everyone, and because that's how you really give people a sense of empowerment. "Here's how you start, here's how you grow", and look at this wider and wider scope of things that you're able to take on and work on, essentially independently. It's the heart of what we do.

**Aaron Schlesinger:** I've seen that in a project I work on... I joined the project; I'm not a creator, I'm not a maintainer, I just contribute. It's called the KEDA project, inside of Kubernetes. It does event-driven serverless, whatever. They apply that not only to contributorship, they even apply it to part of the technology. They say if you want to add this thing they have called a scaler - if you wanna add a scaler, you either have to pitch it to us, and it's gonna be really hard for you to get it into the core just straight away... But there's another path - you can build an external one, that connects to our API, and you can show... If you use the external one internally or whatever, you can show that this thing is necessary, this thing is useful because of reasons X, Y and Z, and you can prove those via its usage, and then we'll review it, and then you can bring it into the core. It's a very clear way. There's not as much ambiguity in an issue where someone suggests a feature, because you can come with data. You can say "I've been using this, this is important for us. I think this is important for other people due to X, Y and Z, so here's my proposal. And by the way, here's the code as well", so it's fairly easy to do the actual technical implementation at that point as well.

That's really the first time I've ever seen this applied to non-community, non-positions of power type of thing... But so far, it seems to be working pretty well in that context too, which I think is pretty cool.

**Johnny Boursiquot:** All of that to me sounds like this tool that we've had forever really, that works wonders once you discover it. I believe the business people, the project management -- I believe they call that roadmap... \[laughs\] The thing with roadmaps is they kind of force you to begin with the end in mind. The trick is to realize that that end - that's the bit you get to move. And once you're at a comfortable enough place where you've moved up and down the bulleted list of features and fixes and things you'd like to add, you get to label that a version. And then you get to ship that, and then you get to learn from the people who use your software, and then they inform the next list where you put that line. And if you're lucky, you have enough of those bullets that you can start to plan 2, 3, 4 versions out.

So a roadmap is a beautiful thing. That doesn't mean it can't change... The end of where you are gonna ship the next thing - you get to have an end; you scope your work, and then you get to label it, and then you get to ship it. So we have to get in the habit of getting that feedback, in our open source projects or otherwise. We have to get in this habit of thinking about the roadmap. And yes, even for open source projects where you are welcoming newbie contributors and everything else, whatever they pick up, or whatever you label -- you know, "newbie-friendly", "help wanted" or however you wanna tag those things... You know, "small fixes", it doesn't matter - those people in, they can still see "Okay, I'm gonna do a small commit, I'm gonna do... This is my first time contributing to an open source project. This looks like a good one." If they're curious, they can see where that one fits in the bigger picture.

That's the thing with developers - we're always saying "Hey, how do I know my work matters?" Well, if the people leading the project have done a good enough job, you should see that if you work on this feature right here, or you fix this bug right here, that's gonna be an inversion X, or that enables some other things, some other features." You should be able to see how adding this one thing, or fixing this one bug, whatever it is, how that enables the next thing. That's the beauty of a roadmap. That's the beauty of a loose plan... Or not having a plan. \[laughs\] But really, planning... So the roadmap is a planning tool, without necessarily locking you into some big plan, to use Sam's weird philosophical take on planning... \[laughter\]

**sam boyer:** That one is all Dwight Eisenhower, so I claim no credit there. I think that's Eisenhower...

**Johnny Boursiquot:** Yeah. If you fail to plan, you plan to fail, right?

**sam boyer:** Pretty much, yeah.

**Kris Brandow:** I feel like we've talked about a couple times on this podcast actually about people kind of saying that since plans will always change, and \[unintelligible 00:53:40.03\] that we shouldn't go through the process of creating them at all... And I think that misses the point that we've been saying multiple times now, of like "No, the planning, the roadmapping, that action of actually putting something together and having a base to go off of..." Like, we have a base now that we can shift, we can change, we can move it around... That doesn't mean that the process we went through to create that is flawed, or broken, or we shouldn't do it. That's the point of the process. The point of the process isn't to create a plan, the point of the process is to have an idea of where we want to go, and say "Okay, let's get on the road and start driving."

**Aaron Schlesinger:** An idea of where we want to go... I've heard that called a vision before...

**Johnny Boursiquot:** \[laughs\]

**sam boyer:** I think we as a group might do worse with this concept than others, because we're used to the idea that we make artifacts that do functional things. Most of the rest of the world has a less precise mechanical concept of functionality. So the idea of a plan that changes probably doesn't distress other people as much, and they don't get into this loop of like "Well, if we're gonna change the plan, then why are we planning in the first place?" No, no. We might be disproportionately dysfunctional in this regard.

**Kris Brandow:** I think it comes with the territory of like - we are people that work with just thoughts stuff. Like, if we can imagine it, we can create it... But unlike most other people that come up with thoughts stuff, like people that create, say, movies, or books, or anything like that - we have this other very tangible thing that we can create very quickly. Authoring a novel takes a long time. Producing a movie takes a long time. Writing some code to do something does not take much time. So we have that advantage of being able to create artifacts very quickly, but that also allows us to obsess over those artifacts.

I said it a few podcasts ago, I think it was an unpopular opinion I might have posed to Peter Bourgon, where I was just like "Code is the least important part of software engineering." Surprisingly, he agreed with me on that... But I still stick to that, because I think it's important. It's just way lower on the list than I think a lot of people put there. I think that does this kind of problem where we're just like artifact-focused, instead of focusing on the overall process of the project... You know, when it comes to some projects that we've talked about on this show, it's like "Oh, that project is archived", so it's like "Well, if it's gonna wind up being archived, they're gonna wind up not being grown. Why bother doing it in the first place?" The kind of like focus on the destination instead of the journey... Or blow it out to an existential thing, like "We aren't rushing to the end here. The end of humans is death, and no one wants to rush toward that." So we should be more focused on this journey that we're going, not so much on the artifacts, at the end of the day.

**Aaron Schlesinger:** Kelsey Hightower started a whole entire discussion about no code/low code with a repository that's literally called no-code. And it has a readme, and a contributing.md, and I think that might be it... I think it's at least high thousands, maybe even in the tens now, of stars on GitHub. It started a community, and it started a really -- what I think is a really good discussion about the future of low code software engineering. So there's proof...

**sam boyer:** It has 50,000 stars; what are you talking about?

**Johnny Boursiquot:** \[laughs\]

**Aaron Schlesinger:** I did not know that. I must have looked at this a long time ago. \[laughs\] So there - there's even more proof there.

**sam boyer:** Oh, I like it. It's full of empty code blocks.

**Johnny Boursiquot:** Mm-hm. It's like a parody, yeah.

**sam boyer:** I can copy an empty code block.

**Aaron Schlesinger:** I think it started as a parody, but I've seen real substantive discussion about low-code engineering from that.

**sam boyer:** Big thing for me right now, yeah.

**Kris Brandow:** Yeah.

**Aaron Schlesinger:** So there's an example for you.

**Break:** \[00:57:21.21\]

**Kris Brandow:** Alright... Sam, why don't you start us off? Do you have an unpopular opinion?

**sam boyer:** Oh, how many... Observability is not meaningfully different from other data-oriented disciplines. It's just another data discipline, whether you're \[unintelligible 00:59:31.29\] anybody who is going to look at a bunch of data and make decisions on the basis of it. Yeah, we do slightly different things, but no more different than the other data disciplines against each other.

**Aaron Schlesinger:** I agree with you, you know...

**Johnny Boursiquot:** Dang it, Sam... It's supposed --

**sam boyer:** Yeah, but nobody in observability land is ready to talk about it. That's because "But metrics, logs, traces, yo!" Peter said to me the other day, he's like "I'm sorry I wrote that blog post..." \[laughter\]

**Kris Brandow:** I feel like if there's someone that's gonna find that unpopular, it'd be Johnny...

**Johnny Boursiquot:** No, I don't disagree. When you said that, I was thinking - you know, if I handed my observability tooling, the stuff I use right now to help teams... If I handed that to a business analyst, so a number cruncher, somebody who maybe uses Excel spreadsheets, or maybe Power BI, or whatever, these sorts of tooling - if I told them like "Hey, here's a bunch of requests that are coming in. You don't need to be aware of my problem domain. You don't need to understand what an HTTP request is, you don't need to understand the technology stack that I'm using, you don't need anything like that. Find me the hot spots in this data", they would. They would do what they do, run the formulas that they run, they would find me the hot spots. And lo and behold, that would equate to the problem areas in my system, in my architecture, in my platform. They would find me the hot spots.

**sam boyer:** Yeah. I would say the only thing they would maybe need to ask is like "What kind of value are you actually trying to get out of this data as an organization, in order to understand what the hot spots are, how to qualify them, how to describe them?"

**Johnny Boursiquot:** What to look for.

**sam boyer:** Yeah. And the way that that's phrased is in terms of like "Okay, we have data, we are an organization... How do we make our organization better from this data?" That is the fundamentally common question across data disciplines, is really my point. We have some different tools that we use, and there's some different common patterns in the data, but those are not meaningful differences as far as I'm concerned.

**Kris Brandow:** I don't know if that's gonna be unpopular, Sam.

**sam boyer:** I don't know... We'll see. \[laughs\]

**Kris Brandow:** Aaron, do you have an unpopular opinion?

**Aaron Schlesinger:** Sure, yeah. I do. In the open source Go community, the value extracted from generics is gonna far outweigh the negatives that will be introduced as a result of generics.

**sam boyer:** Oh, that seems obvious. Sorry. Do people not believe that? I don't know... \[laughter\]

**Aaron Schlesinger:** Well, I guess we'll see on the -- do you still do the Twitter poll?

**Kris Brandow:** Yeah. Yeah, these will go up on Twitter.

**Aaron Schlesinger:** I've been reading over the past week or so a lot of the criticisms, so maybe I just thought that would be unpopular... But you know, you see big chunks -- again, in the Kubernetes world specifically, you see big chunks of autogenerated code that can go away as a result of generics... And whether it will or not -- I hope it will. Whether it will or not though is gonna depend on the community. But if it does go away - I think it will, again, but let's say when it goes away, that's gonna be a huge savings, not only in lines of code, but cognitive load for every developer that integrates with those Kubernetes libraries.

**sam boyer:** See, I wanna make that stuff go away with Cue. I mean, generics are fine, but Cue is where it's at... \[laughter\] I have a repository! It's happening!

**Aaron Schlesinger:** Make it so and tag me. I would love to see how that works.

**Johnny Boursiquot:** And for those who don't know, check out cuelang.org. That's what Sam's talking about.

**Kris Brandow:** And Scuemata.

**Johnny Boursiquot:** Ooh...!

**sam boyer:** Yeah, that's actually a thing now. We'll put that in the show notes, too. That's the repository that I'm working on. By the time this is out, it should actually have all the docs posted.

**Kris Brandow:** I've always kind of felt like generics are positioned -- they're gonna wind up being a lot like channels and goroutines, where people use them too much in the beginning, but then they eventually figure out how to calm down and use them in strategic ways. I feel like we all started \[unintelligible 01:03:35.10\] channels everywhere, and goroutines everywhere... And then we've all calmed down, and we're like, "Nope, it's all good. We don't need this stuff as much." So I don't know if that one's gonna be unpopular either...

But Johnny, do you have an unpopular opinion?

**Johnny Boursiquot:** I do. Don't bother having dreams... \[laughter\]

**sam boyer:** Make plans instead, right?

**Kris Brandow:** Oh, wow...! \[laughter\]

**Aaron Schlesinger:** Johnny was just like, "Nope!"

**sam boyer:** Wait, wait, wait! I'm gonna call my six-year-old in, and you can tell o just like kill her dreams. Okay, yeah. Elaborate?

**Aaron Schlesinger:** I'm excited for the next sentence here...

**Johnny Boursiquot:** Yeah, the pause added some drama... Yeah, don't bother having dreams without deadlines. \[laughter\]

**sam boyer:** Could you tweet that? You tweeted that, didn't you?

**Aaron Schlesinger:** That's a really different statement with the end of that sentence. \[laughter\]

**Kris Brandow:** \[unintelligible 01:04:25.06\] and then there's this tweet after it that's a reply, that says "...without deadlines."

**Aaron Schlesinger:** I think if you say it with the same cadence, it's gonna be wildly unpopular. If you say the whole thing at once, I think that's gonna be pretty popular. \[laughter\]

**Johnny Boursiquot:** Yeah, yeah...

**sam boyer:** Oh, man...

**Johnny Boursiquot:** No, seriously... Those things turn into nightmares that just chase you around, you know? And just occupy space in your head.

**Kris Brandow:** Once again... Come on, Johnny! You were supposed to have the unpopular-unpopular...

**sam boyer:** I actually do disagree. I cherish my deadlineless dreams... But now we're actually talking about -- I would say the question is "How many do you keep around?"

**Johnny Boursiquot:** What do you get out of it though, if you just keep them around in your head, rolling around in your head every day?

**sam boyer:** Hope.

**Kris Brandow:** Sometimes you just need that dopamine hit of thinking about what it's gonna be like when it exists, even if it's far off in the future and you have no -- it's like, "Huh. It's exciting to think about."

**Aaron Schlesinger:** So is there a difference between hopes and dreams then?

**Kris Brandow:** Dreams have deadlines. Hopes are just hopes. There you go.

**Aaron Schlesinger:** Wow.

**Johnny Boursiquot:** No, dreams with deadlines are called goals.

**Kris Brandow:** True.

**Aaron Schlesinger:** Wow, we have three statements now that can go on a mug, or a T-shirt... \[laughter\] You heard it here. Merch. There's a gotime.fm/store coming, with a special collection of Johnny quotes. \[laughter\]

**Johnny Boursiquot:** Oh, Lord...

**Kris Brandow:** If we keep having Sam and Johnny on podcasts together, we're just gonna have to name it like Meta Time... Because that's just what that is. I ask you a question, and it's always like "Well, let me question the premise of your question..." \[laughter\]

Alright, here we go... Alright, well - I think that's a good place to end the show... So thank you Sam and Aaron for joining us today...

**sam boyer:** Thank you.

**Aaron Schlesinger:** Thank you.

**Kris Brandow:** ...and thank you, Johnny, for being my wonderful co-host, as always... And thank you very much to you listeners for coming along on this rather wild ride.

**Outro:** \[01:06:35.16\]

**Kris Brandow:** \[unintelligible 01:07:46.26\] That was a wild ride.

**sam boyer:** That was fun.

**Aaron Schlesinger:** It was, yeah.

**sam boyer:** I have to drop -- Johnny, I'm getting you a T-shirt.

**Johnny Boursiquot:** \[laughs\]

**sam boyer:** "Don't have dreams without deadlines." \[laughter\]

**Johnny Boursiquot:** Nice. Nice. Nice.

**Kris Brandow:** I want that to be part of the soundboard... \[laughter\]

**sam boyer:** "Don't have dreams..." Dramatic pause.

**Johnny Boursiquot:** "Without deadlines!"

**sam boyer:** "Without deadlines." \[laughter\]

**Mitch Hedberg:** You know, I'm sick of following my dreams, man... I'm just gonna ask them where they're going and hook up with them later.
