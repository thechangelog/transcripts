**Mat Ryer:** Hello, and welcome to a very special Go Time GopherCon mash-up. I'm Mat Ryer, and today I'm going to be putting your questions to members of the Go team... So please, hang out in the Discord channel. It's Go Team AMA. Ask your questions in there. Let's see who's on the panel today then.

We're joined by Sameer Ajmani. Hello, Sameer. Engineering director. And you run the Go team, right?

**Sameer Ajmani:** That's right, I manage the Go team at Google. Basically, I have to keep everyone happy and get them all paid.

**Mat Ryer:** I'm sure they appreciate it. We're also joined by Cameron Balahan, who's looking at the product side of Go, right Cameron?

**Cameron Balahan:** \[00:04:00.00\] Yeah, that's right. I'm a product manager. I'm one of two product leads for Go, along with Steve Francia. My focus in Go is primarily on the IDE tools and security spaces, but I also work across all of Go, especially as it relates to how we position it in Google.

**Mat Ryer:** Yeah, very interesting to think of a programming language having a product. I'm keen to dig into that a bit more. We're also joined by Alice Merrick, who's a UX researcher, and you run the Go Developer Survey, right Alice

**Alice Merrick:** That's right. If you took the Go Developer Survey in the last couple of weeks, thank you very much. \[laughs\] I'm a part of a small group of UX people that - we work on various things, but yeah, the Go Developer Survey is definitely the largest or most visible one.

**Mat Ryer:** Yeah. What happens if you get nobody answering? Can you just have a day off?

**Alice Merrick:** That's never been a problem...

**Mat Ryer:** Good.

**Alice Merrick:** We got over ten thousand responses this year, it was amazing.

**Mat Ryer:** Wow, great. Okay, we're also joined by Rob Findley. Rob, you do the tool side of things, particularly the generics, recently...

**Rob Findley:** Correct, yeah. I'm on the Go Tools team at Google, and we work on gopls. Recently, I've also been working on support for generics in the Go type checker and parser.

**Mat Ryer:** Yes, very cool. Everyone's very excited about generics. I'm keen to also kind of understand what the impact of these kind of big language decisions are on the tools, because obviously, there's a domino effect down the chain, no doubt.

And last but not least, we're joined by Keith Randall. Hello, Keith. What is your focus on the Go team?

**Keith Randall:** I work mostly on the runtime and compiler, do performance mainly, although I've been working on some of the generics implementation recently.

**Mat Ryer:** Very cool. Okay, I feel like we're gonna learn a lot about generics today, which is exciting. Yeah, so maybe we could kick off then, Sameer. We're asking questions that have come from the community. So anybody watching live, if you wanna head over to the Discord and ask your questions, we will try and get them answered for you. We've had some questions in already...

Sameer, the Go team, when it started, it was just kind of a few people, and it's grown so much over that time. What sort of challenges have you seen in that time, as it's grown? What's changed?

**Sameer Ajmani:** That's a great question. Yeah, when I joined the Go team, I think it was 12 people. Now, including our cross-functional partners, we're upwards of 50.

**Mat Ryer:** Wow.

**Sameer Ajmani:** And it's really quite a remarkable growth over a period of time... But it's been a bit spiky. So a lot of our recent growth was in 2018-2019, so a lot of our time since then has just really been about scaling our team and the way we work, to really gell... You know, new processes and all the sort of managerial, to make sure the team works well. But it has allowed us to take Go from just being a language to more of an end-to-end platform. We have full-fledged IDE support, we have Go Command, which has been a platform with all sorts of extensions... Of course, there's our suite of libraries, and then our web suite around Go.dev and \[unintelligible 00:06:50.13\] This larger team has enabled us to really build something much more holistic, so Go feels like Go throughout the various things developers have to do.

In order to succeed, we've invested a lot, having more cross-functional partners. On the call we have Cameron and Alice, who are two examples, and we have many more. Challenge-wise - scaling. Scaling the team, scaling the user base, scaling with larger pieces of code, and a lot of this is driven by mainstream usage. So instead of our early adopters, we're now dealing with mainstream adopters, enterprise adopters, who are maybe looking for slightly different things from Go... And security is top of mind, both for enterprises and all the supply chain security \[unintelligible 00:07:30.06\] Cameron I'm sure can help speak to more of those issues.

**Mat Ryer:** Yes, that's very interesting then. One of the things about Go that I appreciated when I first looked at the language was some of the principles, like the simplicity and some of the trade-off and the taste that was in the design. How do you make sure that people that join the Go team really understand those principles? Is it something that you find you have to teach a lot, or do you find people that naturally think that way, or does it not matter, do you prefer the mix?

**Sameer Ajmani:** \[00:08:03.10\] It used to be that we heard a lot from the community, in which case we were hiring like-minded people. As we've grown and diversified, there's a bit more of an on-boarding journey to get the ethos across. I think a lot of it is peer-to-peer. New engineers will work with existing engineers on the team... Within Google, we have processes, we're helping people learn how to use Go and write idiomatic Go, and there's of course documents on this as well.

For example, our tech writer is a good example. He came in with a great experience writing for enterprise use, and had to learn really what the Go voice was, how we communicate... But he also educated us on how to better connect with the users. So it's bi-directional.

**Mat Ryer:** That's very interesting. It's funny to think of Go really starting out as a language, and as you say, growing like that. It kind of makes sense that you have a product perspective on it. So Cameron, how does that work? What sort of things do you care about as the product person for the language, and the toolchains, and the community, and the ecosystem?

**Cameron Balahan:** You know, it's not that different from something that's not an open source language ecosystem. Everything's different in its own way. We're not looking to monetize this, or something of that sort. So there are some differences, but really, it's got the same sort of things any product would have. You've got to think about its strategic direction, like the complete end-to-end picture of what we're trying to accomplish, and whether all the different pieces are lined up to sort of get us there... And then you also wanna think about what is the -- you're the voice of the user. What is the research we have, and what have our users been telling us? How can we synthesize all of that to try to add more value and make Go a better product, a language that more folks wanna use to accomplish their goals? That's just our goal, just to try to keep that whole vision together, and moving forward as a coherent whole, rather than a bunch of individual pieces.

**Mat Ryer:** Yeah. Have you seen any examples so far of tension between the technical perspective and the product perspective? Is it joined up quite nicely because of the nature of the project, or are there ever those sorts of disagreements between you?

**Cameron Balahan:** You know, I'd say not that many disagreements, really. It's like, the whole Go team is interested in trying to make Go a better experience, and something that contributes value. We're all hungry to figure that out, and so we all collaboratively work together to try to do that. Nobody's really trying to just go engineer something that is off the value path; everyone is looking to see what's next, what are our customers really looking to do, and how can we better service that? So I'd say the answer is no. It's all been a good, coherent thing together.

**Mat Ryer:** That's really interesting. And of course, a big part of product is hearing from users, as you say... So that's another unusual thing, I think, that you wouldn't expect to have on an open source project, if it was just a programming language, is user research, user experience research. What sorts of things do you research, Alice?

**Alice Merrick:** Yeah. Well, I'll talk a little bit about what I have researched, and also what some of my fellow researchers have worked on. The lower-level stuff is too low-level for us. We're kind of looking a little higher, at things like developer workflows. So how somebody might look for documentation, or packages when they are writing Go, for example. Things like when you are in your IDE, what kind of challenges do you have there, when you're debugging? Looking for those kinds of challenges and opportunities of "Where could we improve something, where could we maybe introduce something new into the ecosystem as far as tooling goes, or smooth out some workflow there?"Those are some of the interesting questions that we've looked at.

\[00:11:55.05\] Another thing is that we do run the annual survey, so looking at "How happy are people using Go? Do we see more usage in particular areas, and where are opportunities that we might wanna grow?" Cameron sort of mentioned leveraging some of that research on the product side...

And then recently, we were looking at "What are people really concerned about as Go developers, and what other areas might we branch into?" This year I did a study that looked at specifically people who considered using Go, and then didn't, and why. And is there something that we could do there, that would make it easier for more people to use Go.

**Mat Ryer:** "if err!= nil", isn't it? That's the big complaint.

**Alice Merrick:** Actually no, but... \[laughs\]

**Mat Ryer:** What is it then?

**Alice Merrick:** It's only a problem for people who are using Go, apparently...

**Mat Ryer:** Fair point, yeah. But that doesn't drive people away? I met somebody once and he just said "I saw how many times I had to write that, and I just thought - no... No." Like, proper dramatic. He wasn't happy about it.

**Alice Merrick:** That's true. And at that point, I might not have even spoken to them, because they didn't consider Go seriously enough to even make it through the filter of people for us to talk to.

**Mat Ryer:** \[unintelligible 00:13:10.26\]

**Alice Merrick:** That's true. They could have turned somebody off very early in the pipeline, and we just didn't find them.

**Mat Ryer:** Yeah. I think that's very interesting -- well, you see, I mean, I actually like it; I love the fact that we sort of are faced with errors all the time, and we have to deal with it in some way. I think that turns out to be a positive for us. But yes, I've heard that in the past.

So obviously, generics is a big feature that's coming, and this was one that was talked about in the community for many years before... This one is a reason why I've heard people avoid Go, because for a particular class of problem, generics kind of are perfect. So Rob, you've been tasked with the responsibility of making generics work in the tools. What kind of impact does it have, and what sort of work have you had to do there?

**Rob Findley:** Yeah, it's been really interesting to see the way such a large language change propagates throughout the tools ecosystem. There's been a lot of work on support for generics in tools - which is how I'm interpreting your questions - and I think there's a lot of work yet to do. I'll say that the -- it was nice to see how much just worked once we updated the parser and type checker. A lot of things in the basic editing of code in gopls, for example, just worked.

But where we've seen the most update required is for things like static analyzers, things like the vet command, that need to understand Go code. Well, now there's a whole new way to understand Go code. You don't worry about the type of a variable anymore, you worry about which types of variable it could be. There's many types that are possible. So how do we manifest that in tools is an interesting question, and one that we're still exploring.

**Mat Ryer:** But people with experience, like if they've used the AST stuff, if they've used those packages - has that been completely rewritten, or has that just changed a lot because of generics?

**Rob Findley:** No. So we've had to preserve -- I mean, we have back-compatibility promise, and we've kept that promise... So we have updated those packages to support generic code. So we introduced some new constructs into those packages, but we've done it in what we hope is the least obtrusive way possible... And a lot of those packages deal with generic constructs, like what's an object in a program. And that we've translated into the generic realm. So that's why a lot of stuff just works, because those packages were updated in such a way that things just make sense, I hope.

**Break:** \[00:15:37.29\]

**Mat Ryer:** Well, we have a question from Aaron on Discord, related to this... And Keith, this might be a good one for you, since you've worked on generics at the compiler level. The question was "How are you measuring success of generics?" How do we know if it was a good thing to have done or not, in say five years?

**Keith Randall:** Well, I think the major signal there is adoption. Like, how much do people actually use it, how much do they get value out of it? And that's a very nebulous evaluator; it's sort of hard to say "If we get X adoption, we've had success; otherwise we fail." That's hard. But we can look at more specific things, like "Are there libraries that people write that use generics, that other people then use?" So we can look for all kinds of signals about "How much adoption is happening? How much new, interesting code is being written? How many people go from a v1 to a v2, where v1 didn't have generics and v2 does?" So there's sort of things like that that we can look at.

I look at generics at a much lower level, which is "Make sure it doesn't crash. Make sure that it's as fast as writing the code out with a code generator." All that type of stuff. And then I can get more concrete evaluations of that sort of thing. So that's where I'm at. I think at a higher level, like at Sameer's level, they're thinking more about "How do we measure adoption?" That's a more nebulous thing. I'm very concerned about "Is generics 2% slower? Is that enough, or is it too much? Why? Can we fix it?" That's the sort of stuff I concentrate on.

**Sameer Ajmani:** I can pick this up if you wanna hear the higher-level success criteria. For the last several years -- you know, we've been running the developer survey now I think at least since 2016...

**Alice Merrick:** Yeah, this is the sixth year.

**Sameer Ajmani:** Right. A few things have been sitting at the top of the "What I want from Go" list, and generics are number one, dependency management I think was up there... If you look at our issue tracker, fuzzing is up there, and better support in my editor... We're really taking all of that to heart, and really -- you know, we took our time with generics, because we needed it to feel like Go, and I think Robert and Ian's talk this morning really showed the effort that was taken to really make it fit the language really beautifully.

Our hope is not necessarily that we need people to adopt generics a lot. So it's not like more generics is better. But generics should solve the problem it's designed to solve. So we wanna really see that whatever problem people were saying "Oh, we need generics to solve this", that concern goes away. And if we've resolved that concern, if we've resolved dependency management... Vulnerability scanning is another one. If we resolve that, what then starts bubbling up in the concern list? So this allows us to look at the next set of concerns and resolve that, and hopefully we keep making Go better for the users over time.

**Mat Ryer:** And if people wanna influence that process then, I guess the developer survey is the way that you're asking them to do that.

**Alice Merrick:** That's a good way to do it, definitely. Definitely tell me all about it. \[laughs\]

**Mat Ryer:** Yeah. Okay, so here's an interesting question from segfaultAX - do you expect there will be any changes to error handling idioms post-generics? So this is kind of a general question, in lots of ways...

**Sameer Ajmani:** So Mat, we did try...

**Mat Ryer:** You did. We'll put the drums in \[unintelligible 00:19:55.04\] don't worry. That definitely deserved one.

**Sameer Ajmani:** \[00:19:58.28\] Yeah. So we did explore simplifying error handling with the Try proposal a few years ago, and our assessment - or the assessment of the community really, not ours - was that it didn't make things better. That the explicitness, the debuggability of the current way of handling errors was simply better. That all the work we tried to do with condensing the syntax, then moving the handlers up to defer - it just made things worse. And so I think this is a case where we really want to understand what is the problem that users are struggling with, and I think people like Alice and Todd or other UX researchers can really help us dig into that. That'll help us understand what solution we should be going forward with. But I think we need to understand the problem better first.

**Keith Randall:** I think it is an interesting question of whether generics is the new tool in the toolbox that can make a new, interesting design that may be better in some way or another. I don't think anyone's come up with a good answer to that question yet, but it's certainly something to explore.

**Mat Ryer:** Yeah, I mean - for sure, if you've got code that's working in a generic way, I expect the errors to kind of work in a generic way, potentially... Like, if it's gonna return some object that contains a value that there's some error to the value, or whatever, then I could see that kind of happening quite easily.

Is anyone worried about us overusing generics? This was one of the big arguments that people make against having generics in the language, is that it can be abused... How do we feel about that? Are we worried?

**Sameer Ajmani:** Yes... \[laughter\]

**Mat Ryer:** So what's the remedy?

**Sameer Ajmani:** Education, I think... Setting a good example... But honestly, we need the community to help with this. This isn't something that can come top-down. I think Go has a reputation for being a simple, comprehensible, readable language. It is very easy to use generics to create things that make code inscrutable... So I think we as a community, when we do code review, when we adopt libraries, need to be conscious of the trade-off we make between perhaps a \[unintelligible 00:21:57.05\] one-liner that is very concise, but very inscrutable, hard to debug, hard to manage the performance of it... Versus the more explicit way we write things in Go, that - yeah, it costs you a little bit more typing, but when you have to debug and optimize it, it's way simpler. So that's where my head is at, but I would love to hear from others on the panel.

**Mat Ryer:** Any other takers?

**Keith Randall:** Yeah, one thing that is coming out in 1.18 is generics for the core, but much of the standard library doesn't have any generics in it. In fact, there are only a couple packages that were added that have generics in it. Most of the rest of the standard library is still pre-generics.

So we wanna find a way, probably in 1.19, to make some of those packages generic. And when we do that, we'd like to set a good example by making them generic in a way that makes sense. So I think to some extent we'll be piloting a good experience with converting existing code to generics, and maybe in addition adding the Maps package, or some other new package, and what does a good generic code look like. I think that will help.

If you're interesting in what good generic code looks like and don't wanna wait for 1.19, you can sort of follow along in the CLs or on the issues, to look at what the prototypes look like.

**Mat Ryer:** Very cool. So do you expect that to be generic versions of some of the libraries, and you can kind of have both, because of the backwards compatibility? Or will there be non-generic types inside the packages? How do you see that happening?

**Keith Randall:** Well, we're certainly not gonna break any existing code. So we sort of have to leave the things as is. There's some discussion about how we might add generics in a backwards-compatible way to functions, so that the type inference all magically works out. I don't think we know whether that's possible yet, but we're talking about it. And if not, then there'll be a set of parallel different packages, or different names within the same package that will be the generic versions of various things, like container list, and whatever else.

**Mat Ryer:** Yeah. Interesting.

**Sameer Ajmani:** And you can automate migration from, say, the interface-based version to a generic version as well. That should be fairly straightforward.

**Mat Ryer:** \[00:24:03.03\] I see. Yeah, help people out with tools. And speaking of tools - I wonder, what was the biggest challenge, what was the hardest thing to do when trying to get generics to work with the tools? Was there one thing in particular that stood out as difficult?

**Cameron Balahan:** I would say that Robert is probably the better one to speak to this, but I can say that the overall theme has been that because this is the biggest change that we've ever made to the language, by its nature it's very deliberate. I couldn't identify a specific thing as well as Robert could though, so maybe I'll yield to him to potentially give you a better answer than that.

**Mat Ryer:** Okay. Robert, over to you.

**Rob Findley:** Yeah, I mean - I can tell you the package...

**Mat Ryer:** Oh, yeah?

**Rob Findley:** The more that a tool needs to understand about your Go program, the more difficult it's going to be to update. In our codebase, the most sophisticated package that we have like this is the ssa package. So there's still more work to be done there. And I know other external third-party tools like static check also use a form of ssa. So those things are hardest to update.

**Mat Ryer:** So with the Reflect package - is it that there'll be extra methods and things in there, but all the other stuff will still work, but there'll be a way to find out if it's a generic type, and things like that, that get added?

**Keith Randall:** So it turns out that a lot of the generics stuff is completely gone by the time that you get to runtime. So there's very little in Reflect that needs to understand anything about generics.

**Mat Ryer:** Does it just see the types that they end up being then?

**Keith Randall:** Right. So if you have a generic function that has a generic type in it, and you make a reflect value out of that thing, if you ask what type it is, it'll be the real concrete type of it. It won't be the generic type of it. So almost everything in generics is in the compiler. There's some stuff at runtime, but it's pretty minor... Like, putting better stack traces than you would get otherwise, and various in-lining heuristics, and stuff. But all that stuff occurs at compile-time; there's very little at runtime that you need to worry about, and particularly, Reflect is all gonna work the same way as it did. The names will be a little weirder, because you'll have brackets in them, but otherwise you won't notice a difference.

**Mat Ryer:** Hm. That's very interesting then.

**Rob Findley:** Keith just reminded me of one other thing that was difficult, which was producing good error messages.

**Mat Ryer:** Oh, great. Yeah. Well, we do appreciate good error messages, to be fair... So it is worth it. And actually, that's an interesting kind of point. When we think of -- like, generics was at the top of the developer survey Most Wanted list for a while... But how do you decide what to work on? How does that happen? Does it happen somewhat organically? Do you have some process where you think about it? And I'd also like to hear your thoughts more generally on -- we had a question specifically on Twitter from Tim \[unintelligible 00:26:45.06\] who asked about governance, and how you think these things should work, and will work in the future.

**Sameer Ajmani:** I guess I'll take this one. You know, we do wanna be informed by our users. So we start with our users, and the developer survey is one example, but Alice and her partner Todd on the UX team have done a number of studies to really help us zero in on pain points. And then our products team, Cameron and Steve, look at the broader ecosystem, look at specific users, use cases, they look at things in the aggregate, and also look at the strategic landscape, like how is software engineering changing.

As I mentioned earlier, one thing top of mind is security. When we interviewed certain large-scale enterprise customers, one of their first questions is "How do we check Go programs for vulnerabilities?" And there's a compliance reason for that, but it turns out when we interviewed the users that it's top of mind for all the developers, because it's scary. So we knew we wanted to make that streamlined and easy, and it turns out that the work we did on modules actually really helps us with this. So we're able to build a vulnerability-checking system that leverages modules and packages.

And then we have a team that works on deep static analysis, and we're able to leverage their work to really build something much more precise than you might get just checking the module level for finding vulnerabilities.

\[00:28:03.09\] So it's a bit of looking at what developers are concerned about and how to meet those needs, and also looking at what assets we have. The fact that we have modules, the fact that we have static analysis means we can do something really interesting, that still helps solve the user problem, but in a differentiated and better way. We save you time by eliminating a lot of false vulnerability reports, for example.

That's just one example... I think the other major driver is that we have a lot of users, and users are gonna have production issues, scaling issues, performance issues, and we will get reports from all over the place. And then we've got our IDE and web... So we do listen to our users and we prioritize the issues we're hearing from them. Some of those turn into larger projects to make strategic changes to what we have.

**Rob Findley:** I'll add a little bit... It is a bit organic, actually. We all sort of think about this together, we take all the data that we have, we synthesize it, we try to see what's prevalent in the landscape overall, and how we're fitting in that scheme. We're also thinking - and this is similar to something Sameer said, but maybe a little bit different... We think about the whole end-to-end experience. We think about what it's like to be a Go developer, what you were trying to achieve as a Go developer, and of those options, how can we be sure that each part of that chain is accounted for and is a good experience. And if it's not a good experience, how can we make it a good experience. And then we think about how we're gonna integrate with security, for example, which is a really important topic right now. We know that Go is very well-positioned for that, because it has a strong focus on security from the start... And now that it's becoming a more important, scarier issue, we think we're well-positioned to work out strengths, think about that end-to-end, and say "Alright, at this stage what kind of security would I want to be thinking about? As a developer, what vulnerabilities do I wanna know about right now, and what do I not want to know about at some certain stage? What might overwhelm me and detract from the overall experience?"

So some of my message there is we try to think about it holistically, and we start with the user in mind, and the user's goal as the end of this journey, and we try to pack in all of our data and everything that we learned, and then talk about it internally... You know, we're all very passionate about making Go a better product, so together we're able to accomplish this. And we're always interested in hearing from the users as to how we're doing, and how we can do better, and what we may be missing.

**Mat Ryer:** Yeah, very interesting. And actually, there was a release today, on this very day, Go 1.17.5 and 1.16.12 were released... Those were probably easier decisions to make, because these are security-related.

What's the sort of process for that? How do they happen, and at what point is there a decision that this is important enough that we're gonna do an update and a release?

**Sameer Ajmani:** We have extremely talented security and releases teams who make these decisions, and they basically say "We need to do this." And we're not even in their way, basically. I got told yesterday that it was happening, and I got told this morning that it was done. And there's a deep trust in the expertise these teams have.

**Mat Ryer:** Yeah, no one's gonna say to the security team, "Nah, it'll be fine." You can never say that, can you?

**Alice Merrick:** You only live once... \[laughter\]

**Sameer Ajmani:** Yeah. What Cameron described and what we were just describing bridges a bit over into governance. Go is unusual in that we have this talented, well-paid employee team at Google, who's driving this major open source project. We do try very hard to engage productively with the community, and we try to increase our transparency over time. I think Russ Cox has done a lot of work to make the proposal review process more transparent, and things like that.

In the end, we also try and build a highly-functioning cross-functional team, that leverages the diverse talents we have, like Cameron's and Alice's and several others. And we believe this is an asset to the community. We serve the community better by building this highly-functioning, well-managed team; I take some credit for that...

So the question of governance comes down to "What are the problems we're trying to solve?" And this is where we wanna hear the community, like "What's not happening, that you would want to see happen?" Because governance is a solution to a problem. And again, we really wanna understand the problem well, and to understand how best to serve the community in that way.

**Break:** \[00:32:16.26\]

**Mat Ryer:** Okay, so we've got a fun question coming, and we're gonna do a quick roundtable. You're just gonna say your name, and then just tell me what IDE you use day-to-day, generally. Sameer, what is your IDE?

**Sameer Ajmani:** Google Docs and Gmail. \[laughter\] No, in the rare times that I code, it's VS Code, because I wanna use \[unintelligible 00:35:06.24\] But it's rare that I get to code. It's sad.

**Mat Ryer:** Yeah. I should just say, this question came in from BillyDroptables. Billy wants to know what everyone's IDE is. Cameron, do you use an IDE?

**Cameron Balahan:** Well, I certainly don't do any of that for work, but in my own time, I am a Vim user, but also a VS Code user, because I like to use our products and know what's going on. But previously, Vim.

**Mat Ryer:** Oh, Vim...

**Sameer Ajmani:** Previously Emacs over here...

**Mat Ryer:** Oh, there we go. It didn't take long, did it? You've just earned loads of street cred though, Cameron, by the way... Alice, how about you? What is your IDE of choice?

**Alice Merrick:** I've actually got VS Code in the background here. I don't have to code very often; mostly, it's just R scripts, because I'm just doing some data analysis... But VS Code is handy.

**Mat Ryer:** Yeah. And you've gotta open now. You're just working on something while you're just working on something while you're doing this.

**Alice Merrick:** Yeah, I was just working on generating some graphs... \[laughs\]

**Mat Ryer:** Fair enough. None taken, Alice. To be honest, this fraction of your attention we're getting is great, so... Yeah, don't feel bad.

**Alice Merrick:** Yeah. \[laughs\] I mean, it's definitely on a different screen, you know?

**Mat Ryer:** \[00:36:17.26\] Oh, what more can you ask for?

**Alice Merrick:** Not even looking at it...

**Mat Ryer:** Yeah, it doesn't count if it's not on the same screen. It's not rude.

**Alice Merrick:** \[laughs\] Yeah.

**Mat Ryer:** Rob, how about you? You work on tools a lot, so do you have to use the same ones that the users are using, too?

**Rob Findley:** I primarily use Vim, but I also work on VS Code. I use VS Code as well, so I understand the way that gopls looks in VS Code, and in Vim, and sometimes I even use Emacs.

**Mat Ryer:** Well, there you go. And then what about you, Keith? What's your IDE?

**Keith Randall:** I'm an Emacs die-hard. I use Emacs with a bunch of plugins. I've tried the gopls plugin, which works pretty well, and I've got that set up on my Linux machines. I still don't have it set up on my Mac, which I need to do... And that's my primary sit-down-to-code platform. I still don't use it day to day, but I have used it in the past. But yeah, Emacs is my editor.

**Mat Ryer:** Yeah. These text-based editors, when -- because I use the mouse, or a trackpad... I've never been into that; and I used to have Windows, and so it was very much point-and-click, and stuff, and MS Access, and Visual Basic... But yeah, when I see it, it looks like magic still. It looks like the Matrix. People are tapping stuff, and things are happening. It's amazing, I love it.

Okay, we have another question here from \[unintelligible 00:37:31.04\] They say, "Hi, Go team. If there was anything you wanted to remove from Go, what would it be?" So this is assuming that there's like a Go 2, or you can do breaking changes now... What would you break? And Keith, since we were chatting, why don't you start?

**Keith Randall:** Hm... That's a good question. I'm not a big fan of the three-argument slice operation. I think there should be a slice to length and slice to capacity operations as separate things.

**Mat Ryer:** Oh...

**Keith Randall:** And I lost that argument many years ago when we first added it, and I'm still angry about it...

**Mat Ryer:** So you would have had two, so you could either specify the capacity or the length, is that right?

**Keith Randall:** Right.

**Mat Ryer:** Yeah. \[unintelligible 00:38:14.06\]

**Keith Randall:** You often don't wanna modify the capacity. You're generally just slicing because of the length, and it's only occasionally when you need to talk about the capacity... In which case you don't need to talk about the length; or you could do that as a separate slice. It makes the language a little bit simpler... But yeah, otherwise -- it's not a huge deal. It doesn't come up one way or the other either all that much.

**Mat Ryer:** Yeah. No, but that's a nice answer. Rob, do you have an answer for this? What would you like to get rid of?

**Rob Findley:** It's really tough. Nothing significant. It's easy to answer this once we land generics, right? There's a lot of stuff that we would write differently if we had generics. A lot of the built-in functions would be just a generic function. So I think that's probably -- maybe it's a cop-out, but that's my answer.

**Mat Ryer:** No, but that's a good point. With generics, that's the interesting thing, isn't it - you almost wish you could just go back and rewrite the standard library in this. And to be honest, there's even code in the standard library that doesn't now look very Go, because it was written so early. So that's sort of always the curse you bear really with the backwards-compatibility promise... But everyone's grateful, I think, for that promise.

Anyone else got anything that they'd remove from Go if they were allowed to? Sameer, what would you do?

**Sameer Ajmani:** I'll mention a few... Range variable loop capture; this just bites all of us when we write a closure inside a range loop. That may still be fixable, it depends... I think the confusion around nil pointers inside an interface, and that not being nil itself - the whole question of \[unintelligible 00:39:43.22\] interfaces just creates a lot of confusion. I wonder if we could have done better there... And bufio scanner - I don't like APIs where you run a loop and then you have to check whether the loop exited because of an error, because you always forget to check...

\[00:39:58.25\] And I'm sensitive to this because back when I used to write C++ and I was on the Maps team, I had a similar API where I forgot to check for an error, and I dropped half a million places from the map index because I forgot to check that error. So when we introduced bufio scanner, I'm like, "No, no, no... That will create really terrible bugs", but \[unintelligible 00:40:17.11\]

**Mat Ryer:** Did that just wipe out loads of restaurants?

**Sameer Ajmani:** You know, no one noticed, so I think if you drop half a million random places from the location index, you're unlikely to hit stuff that's very important.

**Mat Ryer:** Oh wow, there you go.

**Sameer Ajmani:** But I stayed up late and fixed it.

**Mat Ryer:** Yeah, you just typed them all back in from the phonebook. Very nice of you. You got to it though...

**Sameer Ajmani:** Regenerate the index, yes. \[laughs\]

**Mat Ryer:** Okay, fine. Yeah. Sure. Yeah, very good ones. I would actually probably like to get rid of the new keyword and just have the curly brace way of making things... Because I always use that anyway. And now if I see new, I'm like "What...?" Although I quickly do remember, to my credit...

Okay, so will there be a Go 2? Johann Brandhurst actually asked this one on Discord, and so did \[unintelligible 00:41:03.24\] Will there be a Go 2?

**Sameer Ajmani:** I don't think we're gonna make breaking changes to Go. I think we'd rather find ways to support people -- you know, fix things; maybe some of the things we've just described (range variables, for example), without breaking users. Maintaining compatibility for users -- like, we would much rather do work on our end to minimize the work that the whole Go community has to do to adopt these changes.

So I think once you set aside breaking changes, Go 2 becomes a marketing term. And I think it would probably break a lot more things than it would fix.

**Keith Randall:** I think the one remaining big language thing is the errors problem, and whether we ever come up with a fix for that, and whether that fix requires language changes, and how extensive they would be... I could conceivably see something Go 2 coming out of that. But I don't see anything else, even on the horizon, that would force us to go to a Go 2.

**Mat Ryer:** Yeah. It'd have to be a significant enough change, wouldn't it, to warrant something like that... But I'm kind of glad that we don't have these multiple languages. Python code from one major version won't work on another, and the fact that our Go code has that long life I think really does help us out a lot... And we can sort of rely on that, which is pretty important. Anyone else, anything else they'd remove?

**Alice Merrick:** Maybe the G...

**Mat Ryer:** Sorry?

**Alice Merrick:** ...just keep it be O.

**Mat Ryer:** Just O?

**Alice Merrick:** Remove the G.

**Mat Ryer:** Yeah. That would be good.

**Alice Merrick:** Make it easier to do the internal Go links.

**Mat Ryer:** Yeah, that would be easier. Typing out most project names would be one character easier... Yup. Yeah, the command that kicks of a goroutine would just be o.

**Alice Merrick:** There you go.

**Mat Ryer:** It would just be an oroutine at that point. \[laughter\] Yeah, okay, good.

**Alice Merrick:** I mean, 50% -- you know, just cut that task time in half.

**Mat Ryer:** Yeah, honestly. The amount of internet that would save... I don't know the exact numbers, but I think it's a lot.

**Sameer Ajmani:** I like the idea that O is just a completion of the C... \[laughs\]

**Alice Merrick:** There you go.

**Mat Ryer:** Yeah, there you go.

**Sameer Ajmani:** Missed opportunity, Alice, so good call...

**Alice Merrick:** Yeah... \[laughs\] I wasn't on the team back when...

**Sameer Ajmani:** Yeah.

**Mat Ryer:** It shows.

**Alice Merrick:** Too late now.

**Mat Ryer:** Well, maybe the next breaking version you can really break it... By changing its entire name. It's gonna be Olang. Yeah, I'm not against it. Okay, there's another interesting question that came in from DeafPiano on Discord... And DeafPiano asks "Do any of y'all use GitHub Copilot for work? Either Go or another language, or on personal projects." Have you played with GitHub Copilot?

**Keith Randall:** I don't think I know what GitHub Copilot is.

**Mat Ryer:** Oh, Keith... It does your programming for you. It does all your programming for you.

**Keith Randall:** Well, then what would I do day-to-day if it did all my programming for me?

**Mat Ryer:** Chill out. No, you still have to do some programming, unfortunately, but...

**Keith Randall:** I could day-drink instead of doing programming. It'd be great. \[laughter\]

**Alice Merrick:** \[00:44:05.08\] Does it look up things on Stack Overflow for you?

**Mat Ryer:** Yeah, it learns and it's smart enough not to pick the top answer; to scroll down a bit, which is already smarter than me.

**Alice Merrick:** Yeah, always go with the second answer.

**Mat Ryer:** Yeah, exactly. It's kind of a -- well, I'm not gonna sell it. If you've not heard of it, I think that speaks volumes. It does all this programming himself, \[unintelligible 00:44:22.25\] Yeah - actually, we've reached our time; this is all the time we've got... But thank you so much to everybody who's joined along and asked questions in Discord, and thank you to Sameer, Cameron, Alice, Rob and Keith. We'll see you next time on Go Time.

**Outro:** \[00:44:40.24\]

**Mat Ryer:** We did have a question from \[unintelligible 00:45:01.05\] instead of reference counting... That's quite an interesting, technical one... Does anyone have an opinion?

**Sameer Ajmani:** I'll give that to Keith.

**Keith Randall:** We can collect cycles, which is harder to do with a reference counting collector. It's not impossible, but it means basically you write a mark and sweep collector also which runs when a reference counter can't keep up. So reference counting isn't a panacea, especially in a general language, where you can have cycles amongst objects... Then things like -- there are some other languages where you basically can't make cycles in various functional languages, in which case reference counting is a bit better. Yeah, that's the main reason...

**Mat Ryer:** That's a great answer. There you go, \[unintelligible 00:45:45.12\] Somebody else asks about your favorite package in the standard library, or if there are any packages outside, in the community, that you would like to see in the standard library? Do you have any favorites?

**Sameer Ajmani:** I like the Exact package. It's really convenient to start sub-processes from Go. I think it was Brad Fitzpatrick's design. It's just -- I really like it, the way it works, and it's easy to understand and easy to use.

**Mat Ryer:** Yeah, it is a pretty good one. Yeah, that's a nice answer. Any other answers anyone?

**Alice Merrick:** I'm curious what the community thinks should be part of the standard library, or what their favorite package is.

**Mat Ryer:** Yes. Well, I know for a long time it was Testify, which was an assert package for writing tests so you could just in one line do assertions. I know this because I made that package. And I know also lots of people don't like that package, and it's quite interesting... Francesc Campoy famously was unhappy with it being one of the most imported packages, because there's kind of like -- obviously, the interface, you're passing through interfaces, so checking for quality in that way can be interesting...

I mean, the Go testing package kind of hasn't really changed that much, apart from obviously fuzzing is coming, which is gonna be a big change. What do you feel about Testify?

**Sameer Ajmani:** Mat, I was gonna ask you - are you gonna generify testify?

**Mat Ryer:** Ooh, generify testify... It rhymes, so --

**Alice Merrick:** I like generify as being the new word for what you do to your package after generics comes out.

**Mat Ryer:** Yeah. It sounds like just making it old though, doesn't it? Generify... It also has that sound, too.

**Alice Merrick:** Yeah.

**Keith Randall:** I'm actually right now writing a tool that I'm calling Generify, which is basically just for testing generics. It goes through the standard library, it takes one package and adds a generic parameter to all the functions and types in that package. That never gets used, but it adds it all, and so we can then run all the tests again on that modified standard library and make sure everything still works. So it's sort of a test of the generics control flow.

**Mat Ryer:** Yeah, that's cool.

**Keith Randall:** Now, the changes it makes will never check in, but it's a good way to get a -- one of the big problems with testing generics is there is no generic code... So how do you test that generics work when there's no generic code to test it on? So we sort of need a way to automatically manufacture generic code, so we can run lots of code through the generic portion of the compiler.

**Mat Ryer:** \[00:48:18.16\] That is getting way too meta. It's like watching Inception.

**Keith Randall:** It is a little bit meta...

**Mat Ryer:** A little bit, yeah. Are you gonna do that while going into someone's dreams? \[laughter\] That's the sort of deal there... That is interesting though, as an approach. It's funny - I wonder if it's possible to have generic code where if you... You sort of hinted at this earlier, but if you ignore the generic piece altogether, could it just fall back by default to any type and still work, but it's generic \[unintelligible 00:48:47.09\] Would something like that be backwards-compatible? I don't know. It just occurred to me, but... Yeah.

**Keith Randall:** That works for arguments, but it doesn't work for return values... So there's sort of this co-variance/contra-variance thing which doesn't quite work. But with the right type-cast, you can maybe make it work... So maybe you can have a tool that goes through and just puts the type-cast in where they're needed, and maybe it would work.

**Mat Ryer:** Yeah, it's gonna be very interesting once people start writing generic code... You know, we had Go for -- it's been around 12 years now, and some practices, things that we considered to be good practice in Go, really only came out much later in its life. So I think we do expect the same thing probably to happen with generics. We'll learn, we'll make those mistakes, and then we'll be like, "Okay, don't use generics like this", and that will be a talk, someone will give a meetup, and then at that meetup they'll meet the person of their dreams, and you've basically made that happen; you made their dreams come true by adding generics, essentially. That's just one scenario that could happen; I'm not saying it's definitely gonna happen...

**Sameer Ajmani:** I like this, because you know -- we did exactly this with channels and goroutines in the early days of Go... We were using channels and goroutines for everything; iterators, have you ever heard of that? It was ridiculous... So we're gonna have to make exactly the same mistakes this time around. Like I said in the livestream, we're gonna need the old -- what's the word I'm looking for? ...crotchety Go community, to sort of constraint the enthusiasm and be like "No, don't be stupid. Do it well. Use it well." \[laughs\]

**Keith Randall:** I do wanna find someone who goes completely overboard on using generics, and then we can have them be a test case of like "This is what you should not do." \[laughter\] So if any of you out there are listening and wanna be that person, go for it, and then email us your package.

**Sameer Ajmani:** There was a GopherCon talk on how to abuse struct field tags... And it was delightful, because all sorts of terrible things -- I mean, we need some of that for generics... Like, "How to truly abuse generics and do terrible, terrible things?"

**Mat Ryer:** There you go. So if you want to be Go's generic devil's advocate, get in touch. They'd like to roast you. It could be like a roast... \[laughter\] Yeah, that's how we could do it.

**Sameer Ajmani:** Abuse...

**Mat Ryer:** Yeah. That's true though with channels; I used to be the same. Everything was a channel. If I'm gonna open a file, I'm sending those bytes down a channel. I've got channels now; I'm channeling everything. And honestly, WaitGroup tends to be what I reach for now if I'm writing concurrent code. I'll often have a small little place, and have a WaitGroup, and call out to things... But channels sometimes - again, perfect, for the right situation.

**Sameer Ajmani:** So Mat, you've actually touched on probably one of the most promising, but unexplored areas of generics, which is concurrency libraries. So we have WaitGroup and errgroup, which do a really nice job of packaging up certain idioms around concurrency... Generics might allow us to package them up even more nicely, because you can have things that -- you know, I wanna do a scatter/gather collection of things, and \[unintelligible 00:51:50.26\] like I have a bunch of producer functions that return t's, and I wanna run them all and collect them, and just get back a slice of t's. You can use generics to write that library. You could just wrap WaitGroup or errgroup.

\[00:52:05.28\] So I think there are things like that where as we discover common idioms, we wanna apply a little concurrency. You can wrap that up and you don't even see the concurrency anymore. Now, that has cost and trade-offs, because that's a hidden cost... But who knows.

**Mat Ryer:** Yeah.

**Sameer Ajmani:** It can help eliminate a lot of dumb errors, essentially, or in places where you end up with data races because you just got something small wrong. If you find those idioms, you can correct that.

**Mat Ryer:** Yeah, great stuff. So ESM on Discord asks "What are some other language features that came from other languages that you might like to steal from?" Or maybe you can't, but you wish you could.

**Rob Findley:** Yeah, I think in my experience writing generic code, one of the things I'm noticing is that I use function closures a lot more... And I think a more concise function closure syntax would gell really nicely with generics.

**Mat Ryer:** I see. But this is a bit like having JavaScript; you can have a function typed out, a function with brackets, or you can just have the empty brackets \[unintelligible 00:53:04.06\] and they both work, would you break the way function closures worked? Like, the syntax - are you talking about that?

**Rob Findley:** Pure syntax. I'm not sure if this is a good idea, but it's something that I'm immediately noticing. So don't quote me on this and say that I've endorsed this in the future, but I think it's something that would be interesting to explore.

**Mat Ryer:** Maybe Alice can help. You could change it from func just to fun...

**Alice Merrick:** We could test that.

**Rob Findley:** Yeah, just drop the C.

**Alice Merrick:** \[laughs\]

**Mat Ryer:** Yeah. So these ones are fun, because you know, they're shorter. Loads shorter. 25% saving.

**Alice Merrick:** And they're so much more fun.

**Mat Ryer:** Aren't they? That's what everyone's saying... Okay, any other features you've seen in other languages?

**Sameer Ajmani:** I'm really inspired by what Rust has done around static data race avoidance, and ownership and lifetime tracking. Rust comes at the cost of a very steep learning curve and slow compiles, so the question is "Can we learn and be inspired by Rust to improve Go's static safety with respect to data races by learning from what Rust has done, but maintain the really fast compiles and ease of learning Go?"

**Mat Ryer:** Yeah, that is quite interesting. And I also wonder if additional tooling could help on things...

**Sameer Ajmani:** That is something our static analysis team has looked at, is "Can we provide better, say, safety around mutexes in static data race detection?" And an open question is can we do that with Go code as it exists today, or do we need to add more? Does the programmer have to say more in order to do this?

**Mat Ryer:** Right. I quite like the question mark notation in TypeScript, where if an object is nil, essentially you can do question mark - that would be a panic if you're doing the dot, calling something on nil; you get then a panic in Go. The question mark dot notation makes that okay, and it'll just return an empty value, or something. I don't know if that's right for Go. I quite like how explicit everything is in Go. But when you're dealing with data that you don't understand fully the structure of it, those sorts of things can be pretty useful, especially in the templates. We could probably \[unintelligible 00:55:13.03\] Can maybe someone do that tomorrow...?

**Keith Randall:** It's certainly useful in the fmt package, that if you give a %s and you give it an integer, it knows how to handle that, it never crashes, and if it's confused about what's there, it prints something in the output, instead of crashing.

**Mat Ryer:** Yeah.

**Keith Randall:** So that sort of resilience against failure does exist in portions of Go, but it's not in the core language.

**Mat Ryer:** Yeah. I just do %v on everything.

**Rob Findley:** I mean, Go doesn't panic on null receivers, so that's nice... And we've seen with the protobuf package how nice it is to be able to call methods on null receivers and to make that a more general feature. It could be nice, yeah.

**Mat Ryer:** Yeah, I've seen loggers that had worked with nil; they would just be silent. So the way to make a logger silent was nil, but... I also got a pull request, I think, someone making that explicit, which also kind of makes sense... But yeah, very interesting stuff. Well, thank you so much for staying after the party. This has been the Go Time GopherCon mash-up after-party. Thanks so much, everyone... I'm doing my hosting duties. No one's supposed to laugh at this; this is me being professional.

**Alice Merrick:** A professional party!

**Mat Ryer:** Exactly.

**Alice Merrick:** Yeah. There you go.

**Mat Ryer:** So a T-shirt with a jacket is what you get. \[laughs\]

**Rob Findley:** Yeah.

**Mat Ryer:** Thank you so much, really.
