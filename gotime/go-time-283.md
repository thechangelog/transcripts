**Kris Brandow:** Hello, hello, hello. Welcome to Go Time. I am your host, Kris Brandow, and this week we are talking about the solo gopher - developing a software on your own. Or I guess with a small community of other people, but mostly on your own. Joining me today, I have my wonderful co-host, Ian Lopshire. How are you doing today, Ian?

**Ian Lopshire:** I'm great. Good to be here.

**Kris Brandow:** Fantastic. And joining us as well is Ben Johnson. How are you doing today, Ben?

**Ben Johnson:** Hey, I'm doing well. Thanks for having me on.

**Kris Brandow:** Great. So I think since, Ben, you were on a few weeks ago, we don't need to do any kind of big introduction... So let's jump in straight to the content. So to begin with, let's try and define what we mean by a solo project here, because this episode is all about building stuff on your own, not with a big team of people, not hundreds or tens of people, but just kind of your own... But we don't really ever do anything completely on our own, right? So I don't know, Ben, let's start with you. How would you define a solo project?

**Ben Johnson:** Yeah, sure. I mean, for me, I think a solo project is really where you're probably contributing 90% 95% of the code, the docs, the support, all that stuff. I feel that's probably most projects out there, honestly; there tend to be kind of a lot of little islands, and people will come visit you on the island, and help out a little bit and then leave, but you're kind of the one steadying the ship in the long-term... So I guess that's kind of what I consider to be a solo project.

**Kris Brandow:** Ian, how do you see solo projects?

**Ian Lopshire:** Yes, I would mirror that, where you're doing most of the committing, where you're not having to worry about other people's contributions; you can force-push on your branch and not worry about it&lt; that sort of project. I do think we should make a distinction between a solo project and a side project. One is for, let's say, your job or for work, or to be consumed by an organization... And I do think that's a different type of work than a side project you're doing on your own, with no company backing, or...

**Ben Johnson:** Yeah, I could see that.

**Ian Lopshire:** I would call that a side project, versus a solo project.

**Ben Johnson:** Yeah, I could see that distinction.

**Kris Brandow:** So something, for you, Ben, BoltDB - that would be a solo project.

**Ben Johnson:** I mean, it started as a side project, originally... I was originally just trying to learn about a database, so I tried porting it to Go... And then we ended up actually just needing it at work, so we swapped it out with the underlying database we had, and found a bunch of bugs that I had written... And then it kind of is what it is today. But yeah, it definitely started off just coding on the side, never expecting to see the light of day whatsoever. You know, it could definitely change over time.

**Ian Lopshire:** Yeah, I suppose when you start expecting other people to actually use it, it becomes a real solo project, versus a side project.

**Ben Johnson:** Yeah, for sure. It really does motivate you though, when you know that there are actual people, or corporations, depending on your code... It's motivating and terrifying at the same time.

**Kris Brandow:** Yeah, I can imagine... Because Bolt now is -- I mean, even though you don't maintain it anymore, but Bolt is a major part of Kubernetes, which is used by so many people all over the place.

**Ben Johnson:** Yeah, it was actually -- I don't know, maybe late last year, I think... So Bolt is inside of Consul from HashiCorp, and they had an older version, and it actually took down Roblox, the game, for three days. And the root cause analysis was BoltDB... A design decision I had made a decade ago. That's -- I wouldn't call it a claim to fame, or a claim to infamy, I guess, but... Yeah, it's weird the consequences your solo side project a long time ago can eventually have.

**Kris Brandow:** Yeah, it reminds me of that XKCD comic where it's just kind of -- the one dude in Nebraska, with that one piece that's holding up the entire modern internet. I never remember which project that is about... I always want to say Curl, but I think the guy and Curl is in Europe, right? The Curl guy...

**Ben Johnson:** I don't know. Was it actually an actual person it was referring to? I thought it was just a general -- this is half the projects on the internet. Open SSL or all those...

**Kris Brandow:** Yeah, yeah. It's a treacherous area, for sure. So yeah, I guess - do either of you draw a distinction between the size of the project? Does the size become important when thinking about solo projects? I guess, do you have an opinion on whether solo projects should have a cap in size, I guess I should say?

**Ben Johnson:** I think for your sanity, probably. For Bold, I was pretty intentional about keeping the scope. I even got some blowback... At one point, I just said the project was basically done; I'm not adding more features, because it was complete... And I think that's a good thing to do. It's really easy to just take on one more feature, and then that has other effects on other features... And then it just kind of grows and grows, and you kind of get this project you don't really recognize anymore, and you probably don't want to maintain after a while, honestly... Especially if it's not for a job, or anything. So there's some cap, I don't know what it is though.

**Ian Lopshire:** How long was BoltDB a kind of side/solo project for you before it kind of caught on in the community and other people started contributing?

**Ben Johnson:** It was kind of a side project, I would say, for maybe a year or two. I was working at Shopify at the time, and we ended up using it internally. So it kind of got a lot of testing and validation from that. I think that kind of helped push it out to the community and people got more comfortable with it.

\[06:11\] I think there's also just -- there weren't really any other key-value stores at the time; this was 2012-2013. So when you have just a dearth of options out there, people will use anything., it's shocking, honestly, the number of people that used Bolt in the early days... And thank goodness they did, it's better for them, but they're definitely living on the edge. Some people are just fine with using some cutting-edge database, and that's great. I mean, it takes those people.

**Ian Lopshire:** Yeah, sorry, to derail your question, Kris...

**Kris Brandow:** No, I mean, you're a co-host; you can derail as much as you. \[laughter\]

**Ian Lopshire:** But, I mean, I don't think there's actually a size limit... But for the sanity, yes. What is the project that powers all the backward-compatibility stuff for JavaScript?

**Ben Johnson:** Are you thinking Babel, or...?

**Ian Lopshire:** It's what powers the Babel compatibility layer. It's core something, or... And a single guy maintained that.

**Ben Johnson:** Is it JavaScript core? I don't know, I'm just gonna make up names now.

**Ian Lopshire:** It might be JS Core. But that was a single project by a single guy; that was huge. And it definitely -- you can look through the history of that, and it's definitely a hard thing to do... So for your sanity, that does make sense. Keep it small.

**Kris Brandow:** Yeah. I guess small can also be the scope and size of the thing that you're maintaining, or just the scope and size of the people who are using it. So I feel there's a lot of small, solo projects around building an operating system, or something that. But the number of people using it is small enough that it's just kind of "Okay, well, this isn't going to create a lot of pressure on you, or burn you out", or anything that. Whereas if you're trying to build and maintain a production-level, or general-purpose operating system, that might wind up being a bit more challenging. So yeah, I guess, Ben - here's someone that's maintained a rather large solo project... Do you have any tips or advice, especially for people writing Go, that maintain solo projects, or want to maintain solo project, or want to start a solo project?

**Ben Johnson:** Yeah, sure. I don't know if I have anything Go-specific. I mean, I think that make your code as simple as possible..., if you can avoid concurrency, avoid concurrency. Or just find ways you can make it testable. Over time, you're not gonna remember how to test a feature six months from now, so automated tests are obviously a huge deal... But I think more generally, just say no to people is a great skill to have... Because people will want you to do stuff, and you're probably gonna take on too much... So the more you can say no, and honestly, just push back on people... And honestly, just kind of ask more of people., if someone says, "Hey, you should add this to your project", then I think having them do the legwork of even just understanding the problem, or writing things up, or getting tests and whatnot around things...

I think there's a certain level of trust you need to have with contributors as well. Some people just kind of do drive-by PRs. They drop some functionality, and then you never see them again, but you're kind of stuck maintaining it in the long-term... So I think it's okay just to not accept people's PRs, honestly. And you have to be a jerk about it, but just being able to push back is a good thing... Again, for your sanity.

**Kris Brandow:** Yeah, that's definitely something that I think in general, from an open source standpoint, it's always tough. It's not that your idea's bad, it's just that there's not the infrastructure to support it long-term. I've also found a lot in the past - once again, more generally, with open source stuff - where people will want you to implement something in a very specific way, that solves just their problem... And it's, there's a general class of problem here that we could probably solve and put in the work and effort around that.

**Ben Johnson:** Yeah. And there's just so much context other people don't have around the project, and you kind of see all the use cases over time of how people use it, and everyone else just doesn't have that, so it's hard to kind of communicate that as well.

**Ian Lopshire:** And how do you communicate that? Do you write documentation? Do you write articles? Just existing around the project?

**Ben Johnson:** \[10:06\] Yeah, actually, docs is a huge thing. Honestly, if you're gonna start your own project, if you want it to become popular, really write docs. Devote time to docs, because no one else does. It's shocking, the level --, when I wrote Bolt... Honestly, it was always kind of put out as an example of really great docs... And I don't think it has amazing docs, but it's really just so many other projects -- basically GoDocs, and you just have the API, but no context around how to use things, or why things are implemented, or the design of it, any of those pieces... So I think people are really super-appreciative of that.

Again, I think software in general is kind of a -- there's a lot of trust; you can't read everyone's code all the time, you just have to trust that this thing works. And we go off of other people's use of it in the past, and someone else recommends a tool, and depending on how much we trust them, we might trust that tool as well. So I think anything you can do to kind of build that trust, docs, or writing blog posts, things that. Coming on podcasts... I think that goes a long way to actually just helping people feel more comfortable. At the end of the day, ultimately, it might just break down anyway; maybe it'll break, but hopefully, you can kind of develop trust over time.

I tend to pick projects from other people that I have used in the past. I know a lot of people that -- sorry, Armon from HashiCorp. He wrote a lot of distributed systems stuff at the time, and they were great tools. So whenever stuff came out from him, I was always quick to adopt it. Whereas other people I didn't know as well, I think a little more hesitant. So I think just building trust in the community really goes a long way. That was a roundabout answer to your question... \[laughs\]

**Ian Lopshire:** Good answer. How do y'all think it changes for an open source project, versus something closed source that you're doing for a company? Is it different?

**Ben Johnson:** Yeah, I mean, I would say so... Sorry, Kris, I don't mean -- if you're gonna jump in...

**Kris Brandow:** No, go ahead. Go ahead.

**Ben Johnson:** I think that for personal stuff, I think there's a lot of reasons, a lot of kinds of motivation you can have for personal projects. Some people just want to expand their network and reach. When I started doing Bolt, I think that was a motivator for me. I didn't know a lot of people in the open source world, I didn't really have much of a name... And just getting that out there has helped me professionally. But then kind of where I'm at now, when I build projects, I just want to build a weird stuff that kind of fills some interesting niche, or is a hard problem to solve... And I wanted to solve real-world problems, but I don't have the networking side of it that I need to be as concerned about. So I think there's different motivations on the personal project side.

From a corporate project side, the main motivation is probably money. So things that drive adoption of it, and then probably adoption of the company's products, and things that... I think they just have different vibes. It's not good or bad, just different.

**Kris Brandow:** Yeah, the way I kind of think about it is that solo projects are good if you're not in the corporate environment. I think they're kind of terrible ideas inside of corporate environments for anything that's even remotely important, which is probably most things. If it's not important, then why are you doing it? I think this is probably where I'd make a distinction between a learning project and a solo project. if you're building something to just learn and tinker, and expand your skills, I think that's one thing, and I think those types of projects can absolutely exist within a corporation. I think we should have more of those. People should spend more time tinkering and learning, so they don't tinker on the main thing you're building. But I think as far as projects, you're "Oh, I'd to maintain this for a while, or use it in some useful capacity." Yeah, I think from a business perspective, that's a pretty huge risk. Because if that one person leaves, then what are you going to do? Is someone else going to pick up that project? Does someone else have the bandwidth? Did they, once again, write enough docs, and enough other information around it to actually shore up, so someone actually could come on and just continue the project forward?

\[14:00\] So it's a lot of open questions. And from having worked in a fair number of companies, people inside companies are even worse about not writing docs than I think people out in the open world. I think there is this kind of minimum amount of docs that you need to have to have a successful project in the open source world, so people can at least run the thing... But the number of codebases I think many of us have run into internally, that are just "Oh, here's a readme that just has the name of the repo, and nothing else." And it's "How do I make this thing work?" It's "Oh, there's a wiki over there", or something.

**Ben Johnson:** Yeah. I mean, I think personal projects, open source projects are great; it's almost a training. You really kind of think about your code differently in how you present it when you know other people will read it. So I think being able to take those skills and then bring them into a corporate environment, where you do actually document things you're doing, or include a readme on a repo - I think it really goes a long way.

**Ian Lopshire:** Yeah. So I work in a pretty small company where you're often working on things - not alone, but at least a section of something alone, for a good amount of time... And something we've implemented is a decision log. So every big decision, you write down why you did it, and it's 001: "Why we're building this project. 002: Let's think about the architecture." And in other projects, going and being able to read why they made a decision is huge.

**Ben Johnson:** Yeah, it's nice to have that history.

**Kris Brandow:** Yeah, I think you've mentioned it before, Ben, as well, but I think an important thing is documenting not just how the thing works, but your thinking around it... Because especially for a solo project, you're not going to remember that six months from now or a year from now why you made that one decision. It definitely feels in the moment "Oh, there's no way I would forget why I made this decision." And then a week later, you come back and look at it and you're --

**Ben Johnson:** "Who wrote this...?"

**Kris Brandow:** "I sort of remember some of my thoughts around this..." Just write down what you're thinking, and it'll probably be a bit better.

**Ben Johnson:** Yeah. I tend to read a lot of comments in my code. I know there's some debate about whether you should comment your code a lot or not... But I do it because I tend to write out how I'm thinking about the problem in my comments. And if it doesn't match what I'm actually commenting, then it's easy to kind of see that disconnect, versus coming back and seeing a bunch of variable names, and pluses, and whatever; all those things. So it's almost a bad unit test, I guess, within my code; just to check my thinking, versus what I actually coded. I can read it back.

**Kris Brandow:** I've been trying to think about how I would name that type of thing \[unintelligible 00:16:34.25\] too much thinking about like "what is code, and how should we think about it?" I think one of the things that I've come up with from that is this idea of redundancy. And I think when you're doing that in your code, you're adding layers of useful redundancy. I think probably a lot of the time people's issue with those types of comments are they are useless redundancy, where it's just "Oh, x equals five, and then you right above it, "Setting x to five." It's, that is not helpful. You gave me a redundancy, but that is noise. Whereas I think the thought process of "This is why I'm writing this code in this way", I think that's very useful redundancy. So I guess if we were to sum that up as a tip, I would say "Add useful redundancy to your solo projects, so it's gonna make it easier to come back to them if you leave them alone for a little bit." Or for someone else to come through and add something, or send you a PR or whatnot.

**Ben Johnson:** Yeah. Honestly, even if you worry about things getting out of sync, you may have written something and it's changed somewhere else later on -, people do come along and comment, or open issues, "Hey, your docs say this thing and it doesn't actually work that way" or whatnot. So people actually will pick it up later on and help you out. People are pretty good about actually fixing English bugs, I guess, or things that are written, versus actually writing unit tests, and things that. That's a little harder.

**Kris Brandow:** Yeah. Ben, I think you've had a couple of -- you had Bolt... I guess Litestream sort of started off as just you, or maybe it was just you and someone else, I think...

**Ben Johnson:** \[18:10\] No, it was just me, yeah.

**Kris Brandow:** Just you. And there was kind of a big difference between Bolt and Litestream. I think probably still you had this policy of not accepting contributions... So I figured that's a struggle that you faced in kind of Bolt originally, of taking contributions... Maybe you can talk a little bit more about that, and also other struggles that you have faced around maintaining these kinds of more, I guess production-level solo projects.

**Ben Johnson:** Yeah. Honestly, it's boundaries, I think, is the biggest thing. I think it's really easy --, if you get a project that gets popular, you'll have people opening issues, and you just kind of become the one person that kind of shoulders a lot of that stuff... Again, it kind of depends on the motivation of your project. If you're doing it to kind of expand your reach, then accepting PRs and things that can really help. Litestream is more recent, and I think for me -- I kind of knew the tool I wanted to build. I wanted to keep it simple. Litestream, if you're not familiar, is basically you can take a SQLite database, and you can run Litestream with it, and it'll automatically continuously stream changes up to S3.

So you can run a single node of SQLite, and basically have durable data, even if that node crashes. That's kind of what I wanted to do; it's, "What's the one problem with SQLite, and using it for an actual server context? It's that you don't want to have just one server and then it dies, ad then you lost all your data." So I wanted to fix that problem, and kind of that problem alone. So when it came to restricting contributions, I think it was really just -- yeah, I guess honestly having the vision and just knowing exactly how I wanted to do it.

And sometimes you need help in other ways... I think people contributing issues and docs... There's a myriad of things that make a project successful, and I feel code is kind of a very small piece of it. And it's also kind of the complicating piece. You need people to have a lot of context, especially with low-level file system interactions and things that, that a lot of people kind of lack... At least at that low-level context.

So yeah, that's another roundabout answer, but I think that's kind of why I kind of restricted code contributions. I don't think they're that useful for all the work it takes to accept them, versus something a docs contribution, or someone writing a blog post about Litestream, or adding testing, and things that.

**Kris Brandow:** Yeah, I mean, I guess I can say "Fair. That makes sense." I think sometimes we as an industry get to this point where we're just code is the most important thing, and I don't know if it really is THE most important thing. It's important, but it's also the place it's easiest to mess things up, and there's other ways that you can help and contribute, and all of that, and maybe focus on us more.

I think also that's a good way, if you did want to potentially have contributors in the future, having people that have consistently contributed to docs, and helped explain things in blog posts, is probably a good way to figure out if someone's kind of will be around for a while, or if they're just going to kind of drive by and then disappear if you were to think about opening up a project to more people.

Speaking of which, solo projects don't have to remain solo forever... So have you thought about the process you might take if you wanted to bring more people in to help maintain Litestream, or you started another project solo and you wanted it to eventually become something where there's more contributors?

**Ben Johnson:** I mean, I've thought about it... I feel my favorite projects out there tend to have the benevolent dictator for life model, where there's one person basically kind of doing a lot of the work on the project, and it has kind of a narrow scope. Think of projects, or even products you just don't, Jira - it does everything, and everyone hates it...

\[21:51\] So I think there's a certain -- I don't use a word "artistry", I hate that. But you have a certain vision of what you want, and if you can keep it narrow and tight, people really using those kinds of tools. And those are the kinds of tools that I to build.

So for me personally, I don't necessarily want to run a project that's larger than me, or maybe me and one other person. If you really focus and have a vision on something, I think you can really do a lot with it before you really need to bring on other people. At that point, honestly, you're probably starting to talk about actually maybe building a business around it, if it's actually that scale of tool... That's a different conversation.

**Kris Brandow:** Right. I suppose it matters a lot who you are as a person. I think you, Ben, are someone that's writing code, and doing those types of things... Whereas if you're more someone that's organizing people, and leading people, and doing more of the project or product management work, perhaps starting something solo but then getting other people on board could be kind of not as heavy of a bandwidth thing as it might be for someone that really just wants to be writing code.

**Ben Johnson:** Yeah. I am definitely a hermit, so I'll admit that. I'm probably the worst person to ask about bringing other people on.

**Break**: \[23:00\]

**Kris Brandow:** Ian, you mentioned at work you're doing some solo projects and whatnot, or you kind of work more in isolation... I guess in kind of a similar vein to what I asked Ben, what's it like when you need to bring more people in? Are there certain things that you do? Are there ways that you work when you're operating solo that then you shift, so that you can bring someone else in? Or are you just kind of always operating in the mindset where someone could jump in at any time?

**Ian Lopshire:** Yeah, you kind hit the nail on the head there. Working in a company solo, I think you always have to assume someone's about to jump in. Especially if you care about the success of the company in the future even if you're not around. Something I used to do is have branches that don't get merged for a while, and that kind of stuff. And then as soon as someone jumps in, that sort of stuff just doesn't fly. So all those bad habits that you can develop - do your best not to develop them at all. Stop force-pushing on branches a lot that other people are using, that sort of thing.

I think a lot of it is around the tooling, too. Maybe not the code itself, but being a good user of Git, a good user of whatever your best practices are for deployments, that sort of thing. There's so much more to working with more than one person than just the code, that's what I'm trying to say there. It's not about the code, it's about the process and about the tooling and about the documentation, and all of that.

**Kris Brandow:** \[25:55\] Yeah. That's fair. In a corporate context it seems like you should be thinking that someone could jump in anything -- Mostly because it's like, I don't know, what if you want to go on vacation and now all of a sudden this thing needs to get done, and you don't want to have to be stressing before your vacation, like "I have to do all this knowledge transfer" and whatnot, and it's like, just have it ready to go from the beginning.

**Ian Lopshire:** Yeah. I too live by the "Always have things two-deep" motto. There should be at least two people that at least are somewhat familiar with this thing. I don't want to be on call for something 100% of the time just because I built it, right?

**Kris Brandow:** Right. Yeah, and I guess from -- back to even with this kind of open source kind of style... Bolt was used by a lot of organizations, and I feel like Litestream will hopefully be used by a lot of organizations... How did you handle support with Bolt? And how are you planning on handling support with things like Litestream? Are you like "Oh, well, charge people if they want a support thing", or have this type of - just handle it in the issue queue in GitHub... How do you handle that sort of stuff?

**Ben Johnson:** Yeah, I mean, I think for Bolt, most definitely pretty hands-on, and trying to figure out everyone's issues all the time whenever something happens, and being more proactive about it... But I think that for Litestream -- I mean, eventually, I closed down Bolt. I archived the project and it got forked as Bbolt from CoreOS. So it kind of lives on in a corporate world, I guess.

As far as Litestream, I think I push back a lot more. If people have issues, I'll help them figure out what the underlying issue is... Like, kind of asking questions, or try things, or what they can look for... But I think I don't try to take ownership of that issue necessarily. If someone can give me a reproducible way to get to the hidden issue, then it's usually super-simple to figure out what the problem is. But trying to guess, and futz around for hours trying to reproduce the thing - it's a pain. It's someone else's environment.

So I think really pushing back and having people kind of own more of that process, I think, helps a lot. So no, there's no money coming in from often OSS projects.

**Kris Brandow:** Okay. So it's just like a support out of the goodness of your heart sort of thing to keep the project going.

**Ben Johnson:** And honestly, open source I think makes zero sense. I do a lot of open source just because I enjoy -- I like solving problems, and it's a different feel from writing corporate code, where you're really free to just kind of make whatever solution you want, and you can try different things, and you can spend as much time on it as you want... Which is kind of freeing, and you kind of learn a lot along the way. That's kind of why I do it. But yeah, there's no money.

**Kris Brandow:** I feel like that's the interesting paradox of -- open source in general, but also our industry as a whole, where so many things are just like... It starts off as one person's project, because they wanted to learn how to do something, or figure out how to do something, and all of a sudden... I mean, that's how Linux started, right? Linux just wanted to write an operating system kernel, and he's like "I don't care if this is the best design, or whatever, according to researchers and academics. I'm just gonna write what I want to write." And now it's, I think, probably the most popular operating system on the planet. Or at least the most deployed operating system on the planet.

**Ben Johnson:** I think you're right, yeah.

**Kris Brandow:** And that's weird, because it's like, I don't think that anybody is really starting these projects thinking "I'm going to try and get rich off of this", or "I'm going to try and make a ton of money off of this thing."

**Ben Johnson:** Yeah. I hope not... They're in for a surprise...

**Kris Brandow:** Yeah. Your chances of building something that -- even the things that do get popular... There's very few that start off open source, and then wind up as something monetizable. \[unintelligible 00:29:32.11\] doesn't end up long-term monetizable is the question because usually, some company will come along and be like "We're just going to do this, and steal all your business away", which is just a whole other type of weird problem...

**Ben Johnson:** Yeah. Actually, VCs start reaching out to you as well. That's another interesting one. You just start writing open source projects, and all of a sudden these people just want to have meetings with you. It's weird... It's like "I just sit in my basement and I wrote code. I don't know why you're calling me. Why do you think that I can run a business? I have no idea. I can't."

**Kris Brandow:** \[30:07\] I feel like there's probably some market for trained business leaders that can effectively help solo developers build products, and run the rest of the business for them, and just be like "Okay, you just keep working on this, and then we'll do all the other things to make it monetizable." I mean, slightly off-topic, but you have a whole VC thing of us taking people who are just like "I just wanna write code, man", and then being like "Here, run an entire company. And here's $150 million, go have fun." It's kind of like "Um..."

**Ben Johnson:** Yeah. The irony of it too is if you end up taking an open source project and then trying to build a business out of it, and you become CEO, and it becomes successful, you basically stop writing code. CTO is not a coding job, it is a managing people job. I've been in companies like that in the past, where we had open source databases, and the CTO had barely written code in the last five years. So it's a weird curse.

**Kris Brandow:** Yeah. I guess that's helpful info for people that are interested in doing solo dev; it's like, think about it... Even if people sell you on this whole story of "Yeah, you're gonna make so much money, and you're gonna have all of this networking you can do, and all this cloud, and all of this..." But you're gonna have to give up the thing that you love doing so much that you're doing it in your free time, for no money. It's a weird thing that our industry is structured the way it is, and perhaps that's something that we should think more about as a whole, of just like, you know, maybe the founders shouldn't be the C suite; maybe the founders should just be engineers that are very respected, and have a lot of control over the technical aspects of a thing, but not the business as a whole.

I wonder too if that kind of perspective would help more people that - kind of as I mentioned before, people that want to do a solo project, or want to do something but don't have the skills to write the code themselves, to go out and actually start projects and kind of lead projects and communities of people toward building things... Because I think that would be also helpful. I feel like that's probably a gap that exists.

**Ben Johnson:** Yeah, I can see that.

**Kris Brandow:** Because a lot of projects are like -- it's either one person, or it's a company. And the place in the middle is also this weird, strange place.

**Ben Johnson:** Yeah, for sure.

**Ian Lopshire:** I feel like we've talked a lot about what I would perceive it as advantages of solo dev. It's kind of freeing, all of that. What are the pitfalls? In my mind, you could get stuck not getting feedback, not learning from what you're doing... How do you know what you're doing is correct? How do you learn from stuff when you're doing it solo?

**Ben Johnson:** Yeah, for sure. There's a long list of things that are bad about solo dev... I'll try to be brief. Not to talk disparagingly about it; everyone has their thing. But I think that motivation, I would say, is a huge one. Especially in the early days, when you have four stars on your project, and it's just like "Has anyone ever seen this code, or actually run it?" You have no idea. And honestly, even projects like Bolt - I have no idea how many people used Bolt. It's more -- the number of people that have actually reached out to me, and have been like "Hey, I used Bolt on this terabyte-sized database that we run our company on" or something that - it's like a dozen people maybe, over the last 10 years. But it's not very often.

So really, you kind of just like extrapolate it from either GitHub stars, which is not a great way... Or the other way is - I used to do consulting, and basically every Go shop I went to had a thing that used Bolt. So I was like "Oh, I guess it's used places." But you don't really have a sense of it otherwise.

So I think motivation is a big thing, and actually knowing when it's used. So actually, if you are using code, I think just like reaching out to people, and letting them know, "Hey, I use your code. It's great. Thanks for writing this", because they probably don't ever hear that. It's shocking how often we kind of forget about that. So yeah, motivation was one... There was another one I had, that I've forgotten now though.

**Kris Brandow:** \[34:03\] Yeah, I think that's a good -- you know, for those people who are consuming to remember, to go back and actually... Even if it's just like a "Thank you for building this thing." Like "Hey, I use this, and this was useful for me in that way."That stuff can be really motivating to people that are kind of maintaining these things out by themselves."

**Ian Lopshire:** Going back to the learning bit, I think when you are doing solo projects like this, that network that you build from it becomes so much more important than other places, right?

**Ben Johnson:** Yeah, for sure. With Bolt, again - honestly, the earlier version had a lot of things wrong with it. There was one guy out there, he goes by \[unintelligible 00:34:37.14\] on GitHub... And he just went through my code and basically pointed out a bunch of places where I had forgotten to do a read full instead of a read on a reader, and a bunch of little bugs... And I learned a ton of stuff just from his feedback early on.

So the community can be great, honestly; people that engage. And honestly, when you put stuff out, people will immediately tell you what's wrong... And I think it's important not to attach your sense of self worth to your project too much. It's just the best you know how to do right now, and that's great. You can learn, and the next time you'll do better, and just keep improving. But I think it is really easy -- like, when people are like "Oh, I've got this bug", or "I lost my data" or something like that, from code that you wrote... It's kind of demoralizing.

**Kris Brandow:** Yeah, I feel like that's a really, really good point. If you're going to be a solo dev, you should probably find a way to disconnect yourself from the thing you put -- you are not the thing you've produced. The thing kind of needs to stand on its own, and I think that's something I learned in school with my writing classes, was just like "You are not your writing." And the way you get better as a writer is by getting constructive criticism, which usually just feels like people tearing your work apart. But that helps you grow. It's like "Oh, okay, I did this wrong" or "I didn't tell this thing in the right way", or whatever. I think that is very -- I mean, as you said, very helpful when it comes to building projects, and all of that.

And I think too, not enough people give constructive feedback on projects, which can also be a thing, I think that maybe dropping in the issue queue, just being like "Hey, this thing looks a little weird. Not sure if you noticed", or whatever, and not being afraid to do that. Because I think that's another -- on the other side of it, if you're someone that's consuming solo people's work, especially if it's someone like you, Ben, who knows a lot, or like Armon, or these people who are really well known... It's like "Do these people make mistakes? I don't think these people make mistakes. There's just something wrong with my knowledge. I'm not gonna say anything." And it's like, no, no, they're still regular humans. They make many mistakes, just like the rest of us.

**Ben Johnson:** Many, many. Yeah, I think that even just prefacing an issue, just being like "Hey, thanks for the project..." Just some kind of thing where it's not just like complaining to somebody, I think, does go a long way, honestly, just in setting kind of some context.

I think another interesting thing too, with open source is that since it is such a global community, and people from all over the world use it, there's an interesting mix. First of all, people where English is not their first language; the way that they write an issue may be very direct, or they might just come from a culture where for someone -- like, I grew up in the Midwest. We trip over ourselves to not say a mean thing ever, to anyone, and whatever. And people from other parts of the world may just be like "Hey, this is broken. This sucks", or whatever. They're not trying to be mean, that's just their approach, or maybe it's how they translate, or how they talk in issues. And I think that just being able to be okay with that, or move through it helps a lot with your sanity.

And also another issue we in our -- not issue, but I'm autistic myself, and I know a lot of software developers tend to be autistic, and we tend to be very direct in the things that we say... So I think there's a lot of that social nuance that can be missed with issues. People just pop open an issue real quick, type something out and send it... So I think from both sides, trying to be a little more accommodating, and also on the receiving end, just knowing that the person is probably not trying to tell you that you're a terrible person about everything. It's okay; they just had an issue, and that was it.

**Kris Brandow:** \[38:09\] I would assume from -- maybe you can confirm this, but I assume having templates for things where it's just like "Hey, this is the information I'd you to tell me", and maybe having some sort of document that people can read, of like

"Please, these are good ways to express tone", or whatever. Do those types of things help? Or is it just kind of still --

**Ben Johnson:** My impression is that the people that are going to take the steps to read those things or actually fill them out appropriately - they probably care enough to actually do that stuff... Whereas the people that are just gonna -- the people that are gonna be jerks are gonna just blow through that, or delete your template and just write their own thing. So I'm not sure it helps the right people, if I'm being honest...

**Kris Brandow:** Okay, that's fair. So I feel like that maybe is like a -- not necessarily a downside, but definitely a thing to be aware of, is you've gotta be a bit tougher, I think, if you're going to solicit input from other people to be a solo dev, of just being like "Yeah, no, sometimes people--" Some people will just be straight up rude, or somewhat hostile, and you're kind of like "Okay..." But yeah, sometimes it's just communication, or they're just like -- I have some friends that are Eastern European, and even they'll say it, they're just very direct with things. They're like "We don't understand why Americans -- why are you adding all these extra words to express something? Just say it." It's like, yeah, it's just cultural differences. And being able to discern between those two things... But I think is a good life skill in general.

**Ben Johnson:** Yeah, for sure.

**Kris Brandow:** Going back to the whole "Assume positive intent" thing, which is very difficult to do on the internet. Yeah. So is there anything about Go specifically that you think makes it good or bad for solo projects, and kind of solo development?

**Ben Johnson:** I mean, everything's kind of bundled in really well. I feel like, you know, you produce a single static binary... I think that can be great for reproducibility. I think the build chain is pretty simple, generally; beginner stuff like Ruby, or you have to worry about all your shared libraries, what happens to be running locally... I think those can be painful, for sure. So I think that's a really nice part about Go. I don't usually have an issue with the environments and setting those up correctly. And also, just from version to version things don't -- there's the Go 1 compatibility promise; you don't have to worry so much about the Go versions. That's not usually a big question that I have when I'm debugging issues... So I think that's great, honestly. We don't have a bunch of browsers we have to worry about, that's another nice thing. It's not JavaScript.

**Kris Brandow:** True. True.

**Ben Johnson:** I started writing back in IE 5, and Netscape Navigator days, and that was horrific.

**Kris Brandow:** The frontend is a -- it's a challenging space, for sure. I also feel like we in the Go land don't have -- we have a standard library, and that gives you most of what you need... And I feel like we have a really strong community; you don't need extra frameworks, or libraries, and all that to do really basic stuff. But sometimes you might want some for -- I think there's a few that are staples. You probably don't use the built-in flag package, because it kind of sucks, and it's --

**Ben Johnson:** I use the built-in flag package.

**Ian Lopshire:** I also use the built-in flag package.

**Kris Brandow:** I wish they had not done that thing where it's just like -- it's not like UNIX flags; it's just...

**Ben Johnson:** I think it was because it supports Windows as well, so they're trying to take the common ground between the two. That's my understanding.

**Kris Brandow:** So I guess even there - it's like, okay, I guess most people do use the built-in flags package. But I think that could be the one place where it'd be like "Yeah, if you want to bring in--" I don't remember what the name of the external flags package, but if you want to bring that in, I can see that. But it's like, if you're gonna spin up a web service, you can bring in a framework, but you don't have to bring in a framework. Or if you want to do parsing of args, or whatever, you don't have to bring it in. If you want to do configuration, you don't have to bring in an external library; the internal JSON one is probably just fine. So I think that probably helps a lot as well, because then, once again, you're not pulling in extra dependencies, and all of that.

**Ben Johnson:** \[42:15\] Yeah, everybody kind of knows the standard library pretty well. Not everybody, but a lot of gophers, they all just kind of know how to use JSON, or whatnot. It's a lower barrier to entry.

**Kris Brandow:** Ian, do you have any things you think makes Go good for solo dev?

**Ian Lopshire:** I mean, the built-in documentation stuff; just knowing where I should be putting comments is nice. Does that make sense? And being able to automatically generate that out to post somewhere internal... Because you can't use GoDoc for the private repos. It's nice. So on the corporate side, I do think that's a big deal. And then mirroring everything you just said - just getting people up to speed is a lot easier than, say, Python or JavaScript. The same thing people will always say.

**Kris Brandow:** The things that make Go good also make Go good for solo dev. I feel like that's fair... Alright. Well, before we jump into unpopular opinions, do either of you have anything else you want to say about solo dev? Or, I guess, do you have any advice you might give to somebody -- I mean, this whole podcast has been advice, but is there one thing you would say to somebody who's just listening to this and is like "I would to start a project tomorrow"? What would you say to them?

**Ben Johnson:** I think my advice would be just like small iterations. And I think that goes for any project. Motivation is probably going to be your biggest problem when you're a solo dev... And just being able to make a release that has two features in it; that's great. Just make it, ship it, and do that on a regular cadence. You're gonna be so much more successful than trying to have these big features you send out every six months. So that'd be my advice.

**Kris Brandow:** Nice. Ian, do you have any last bit of advice?

**Ian Lopshire:** I mean, just do it. It can be scary putting yourself out there, it can be scary trying something new, and the only way you can do it is to just do it. Borrowing from Nike here.

**Kris Brandow:** Alright. Unpopular opinion time.

**Jingle**: \[44:22\]

**Kris Brandow:** Alright. Ben, do you have an unpopular opinion?

**Ben Johnson:** I don't know how unpopular this is... I was trying to think of something related to our solo devs and open source stuff... I don't think that there's any way to directly monetize open source software. I was a big proponent of it, and I really wanted to make it work for years, and I just don't think it's possible to do. So that'd be my unpopular opinion. I think there's methods like open core... I think you're ultimately always going to sell something that's not your open source software; it might be private features on top of, it might be support, but you're never going to sell the open source itself. Even the GitHub Sponsors - I think it's a great idea, and I wanted it to work, but I think there's just not very many people that are actually making a living wage on GitHub Sponsors. So my unpopular opinion is you can't do it.

**Kris Brandow:** Hm... I don't think I disagree. \[laughs\] It's a tough truth to swallow, in some way, because it's kind of like open source is clearly the core of how we build software in the modern day. If we were to strip away all of the open source things, not even the largest of tech companies would be able to function. It would just be far too expensive for them to operate. And yet, it's just this kind of -- it's the commons that everybody is getting, and... Yeah, it does feel like there should be a way to monetize it... But yeah, I think I agree with you that there just has to be something else that people get, and the reason why people get into open source can't be money. Interested to see how that will do on Twitter, and see how -- Twitter and Mastodon, Twitter and the Fediverse... I don't know we're in such a strange world now.

**Ian Lopshire:** \[46:22\] I'm pretty sure we've had the exact opposite opinion before...

**Ben Johnson:** Oh, really? \[laughter\]

**Kris Brandow:** I wouldn't be surprised if we had.

**Ian Lopshire:** I think it was unpopular, so... I have a feeling people are gonna agree with Ben.

**Kris Brandow:** Okay. Ian, do you have an unpopular?

**Ian Lopshire:** I have one this week.

**Kris Brandow:** Okay. Excellent.

**Ian Lopshire:** I might get some hate for this one.

**Kris Brandow:** That's the point.

**Ian Lopshire:** Safari is the best web browser.

**Kris Brandow:** Oh, God... \[laughs\]

**Ian Lopshire:** It is. It is.

**Ben Johnson:** I mean, I think it's great at downloading Chrome... I mean, I'll give you that. \[laughter\]

**Kris Brandow:** I mean, as far as web standards are concerned, it's objectively not the best. It's very far behind the other two when it comes to implementing the web standards.

**Ian Lopshire:** I agree with that, too... But it is my favorite to use, it's the most ergonomic for me; it's the least memory hungry, the best battery life... All the things I care about, Safari has. All the things I don't really care about -- it's not often I find a site that doesn't work in Safari... Aside from this podcast recording website, but... Yeah, it's what I use day to day, it's my favorite. It is what it is.

**Kris Brandow:** I do kind of daily drive Safari, but I don't know if that's because it's the best, or just because it exists in the Apple ecosystem, so everything is integrated very well with Safari. Everything just kind of works together in that nice little Apple magical way. Okay, okay...

**Ian Lopshire:** I think that one's gonna be unpopular.

**Ben Johnson:** Yeah, I would agree with you.

**Kris Brandow:** Yeah. Maybe if you said like "Firefox is the best."

**Ben Johnson:** What about you, Kris?

**Kris Brandow:** I have so many unpopular opinions... Let me --

**Ben Johnson:** Real quick, I will say - my son brought up... He's 12. He brought up Opera the other day. I was like "Who uses Opera?"

**Ian Lopshire:** Oh, my...

**Ben Johnson:** I was shocked. If he had said Opera is the best, that'd be really unpopular.

**Kris Brandow:** Opera is just Chrome now though, so...

**Ben Johnson:** Oh is it? Ok...

**Kris Brandow:** Yeah, Opera did the thing Microsoft did with Edge before they did it with Edge, where they're just like "We're just gonna build this on top of Chromium." Yeah, we have a dearth of browser engines in the modern day...

Unpopular opinion for me - I've gotta find a way to phrase this to be maximally unpopular. I think that even people who call themselves the most pedantic when it comes to software engineers, are not pedantic at all. I think that's my popular opinion.

**Ian Lopshire:** I'm gonna need some more on that one.

**Kris Brandow:** I think people that are just the "Technically correct is the best correct", people that live in that space and think of themselves as "I go by the definitions of everything" are some of the worst people at actually a) defining things, or following definitions as they were defined.

I was talking with Ben in the pre-show about consistency, and how Lots of people love to talk about consistency... And yet, that word means essentially nothing. Much like asynchronous. Sam Newman has a whole talk about how asynchronous is now a useless word, because you have to put so many extra qualifiers around with it, you might as well just toss out asynchronous and just say the qualifiers in the first place.

And I feel a lot of pedantic people in tech like using words like consistency, and asynchronous, and all the fat -- Same thing with like type-safe, or memory-safe, or all those things. It's like "Oh, Rust is a safe language." It's like, okay what do you mean by safe there? It's like, "Well, it's a memory-safe language." Okay... But is it? Is it really? So yeah, I think even the people that are super-duper like "I'm a pedantic person. I care about all of the nuances, and things", I don't think they do. I think they're fooling themselves.

**Ben Johnson:** Do you have someone in mind you're thinking of? \[laughs\]

**Kris Brandow:** \[50:06\] I don't have anybody in particular I'm thinking of. I think it's just in general, in our industry, I think people are just --

**Ian Lopshire:** It's the vibe.

**Kris Brandow:** Yeah, it's the vibe. People should go read some more papers from the '70s, and actually find out what these words they're saying mean... Because that's another -- I think it's an unpopular opinion I had in the past, of just "We like to take words and make them mean the literal opposite of what they meant before." This happened with relational, and object-oriented, and a whole bunch of things, which is like, the person who defined that word meant not that at all. They meant the literal opposite of that thing. I think these are also words that pedantic people use incorrectly... So they're bad at being pedantic. Maybe that's it. That's the concise way when I edit it - the pedantic people in software are bad at being pedantic.

**Ben Johnson:** I don't know, I'll have to think about that one. I'm not sure if I agree or disagree. I probably agree... Unless you're talking about me. \[laughter\]

**Kris Brandow:** I don't know, Ben, would you describe yourself as pedantic?

**Ben Johnson:** Sometimes... So I guess that makes me bad at it, so... There you go.

**Kris Brandow:** Yeah. Oh, okay, so if that one isn't unpopular enough, I do have another one... I think that certifications are a good thing, and that software engineering needs many, many, many more certifications. Like, exams. Exams you've gotta sit down and take, and they have to study for.

**Ian Lopshire:** Then you could call yourself an engineer in certain states.

**Kris Brandow:** I mean, I'm not necessarily talking about professional engineering, but... I mean, we could work ourselves toward that. There technically was a PE exam for software engineering. But after a decade, they only had 81 people take it, so they're like "We're just not going to do this anymore."

**Ian Lopshire:** I didn't know that. That's interesting. I'd to see that exam.

**Kris Brandow:** Yeah, I get the feeling that it had a lot of -- because they tried to build a software engineering body of knowledge, and then use that to build the exam... And I kind of have the feeling that we're just not there yet, as an industry; we don't have -- we focus too much on the new stuff, and don't focus enough on the old, established up. If you're focusing on the old, established stuff, people kind of look at you funny. If you're like "Oh, yes, I use XML, because this is a well-established technology. We should write exams around certification about building APIs with XML." People would be like -- or even trying to make a certification for frontend would be nearly impossible right now, because it'd be like "Well, what are you going to -- certify in React?" Because then it'd be like certifying in Backbone and CoffeeScript a decade ago, so that's...

**Ben Johnson:** Yeah, I think we just need less of a moving target in our industry before we can make a standardized exam... But I'd be for it, honestly. I think there's definitely some -- I don't know, I mean, it's weird to think about other engineering professions; like civil engineering - I'm sure bridges have changed over the last 50-100 years, but probably not over the last five that much... I don't know, I'm not a civil engineer, I have no idea. But it's not like the changes in our industry, of computers getting faster, or memory/disk sizes, and stuff like that, and just the trade-offs change so quickly... It's hard -- it's not like the XML was a bad choice before necessarily, it's maybe just different now, or different technologies come up... So yeah, it just feels like we need to have some consistency in our industry before we can standardize, I guess...

**Kris Brandow:** \[53:28\] Yeah, just more standardization. The whole reason I have this idea is because I started randomly watching CCNA courses on YouTube, and I'm just like "Oh, there's a lot of useful stuff here." And I kind of wish we just had this for a plethora of things in software engineering, that weren't run by companies. I think we do have certifications for those company or technology-specific things... I think there's some Kubernetes certifications you can get, or for somebody's software, I'm sure. AWS has all of their certifications, and all of that. But I don't know if that's the useful kind of certification that I want...

**Ben Johnson:** I think I'm certified in SQL Server, back in 2001, so...

**Kris Brandow:** Yeah.

**Ben Johnson:** Let me know if you have any questions. \[laughter\]

**Kris Brandow:** SQL Server is not a database that I tend to run. No, not Oracle... SQLite --

**Ben Johnson:** I used DB2 recently. That was rough.

**Kris Brandow:** Oh. Can you run DB2 not on a mainframe? Is that just --

**Ben Johnson:** I don't know, actually... I think so.

**Kris Brandow:** Okay.

**Ben Johnson:** I'm not sure if the production server was on a mainframe or not, but it was -- I was shocked to see it.

**Kris Brandow:** DB2... That is --

**Ian Lopshire:** My first ever database class ran Oracle, and only Oracle.

**Ben Johnson:** I was an Oracle DBA for a long time, too. Or for a couple years.

**Ian Lopshire:** There was no joins other than cross-join. So I don't know what version that was, but...

**Ben Johnson:** That's all you need.

**Kris Brandow:** Well -- but yeah, that's my final unpopular opinion, is we should have more so certifications. Useful. Caveat there - useful, company-agnostic certifications. Or benevolent. I feel like Cisco is one of those weird benevolent companies, where it's just like "Yeah, you have your certification, but it seems like you actually care about teaching people general networking stuff." But I also feel like the networking world is very different from our software worlds, or our -- I don't even know what to call the world that we exist in as Go engineers at this higher level... High-tech? Is that what the cool kids call it? FAANG is high-tech?

**Ben Johnson:** I don't know. I'm not cool, so...

**Kris Brandow:** I'm not sure. Anyway... Thank you, Ben, for joining us on this episode of Go Time.

**Ben Johnson:** Yeah, thanks for having me. I appreciate it.

**Kris Brandow:** And thank you, Ian, for co-hosting with me.

**Ian Lopshire:** Yeah, anytime.

**Kris Brandow:** And thank you, dear listeners, for taking the time to hear us through this fun podcast episode on developing Go software on your own.
