**Jon Calhoun:** Alright, welcome everybody! In this episode of Go Time we're going to be talking about Play with Go. This is a new project that was created by Marcos and Paul, our guests... So I guess I'll just start with introducing them. First we have Paul Jolly. Paul, do you wanna say hi?

**Paul Jolly:** Hi!

**Jon Calhoun:** And then we have Marcos Nils. Marcos, do you wanna say hi?

**Marcos Nils:** Hola! Hi, everyone. Marcos here.

**Jon Calhoun:** We also have our panelists - Carmen is with us. Carmen, I believe you were involved with this, correct?

**Carmen Andoh:** Yeah. Hi. I was.

**Jon Calhoun:** Okay. So it'll good to get your perspective on this. And then lastly, we have our newest panelist, Kris Brandow. Kris, do you wanna say hi to everybody?

**Kris Brandow:** Hello, everyone.

**Jon Calhoun:** Okay, so I guess to get started - Marcos and Paul, do you wanna tell us a little bit about yourselves and what this project is you've been working on?

**Marcos Nils:** Yeah. You were saying, Jon, that Carmen was involved. Actually, I believe Carmen is the reason why in the very beginning this was possible. The short story is that I met Carmen and Paul at the Go meetup in London. I was happening to be living in London not so long ago. I'm in Argentina right now, by the way... And speaking about Go, of course - it was funny, because it was a session, if I recall correctly, about testing.

\[04:01\] And the presenters were discussing about different testing tools. After the presentation I reached out to Carmen and I told her "Hey, I actually wrote a Go testing library." And I don't know if someone recalls -- it's called Goblin. It was one of the first BDD libraries that was written for Go. I'm coming from the Node.js world, so what I tried to do is basically replicate Mocha into Go.

Anyways, we started drifting conversations, and then I talked to her and I showed her Play with Docker, which is where Play with Go takes inspiration from. She introduced me to Paul, and I'll let you, Paul, tell the rest of the story.

**Paul Jolly:** Yup. So I'm Paul, and as Marcos said, we met at London Gophers. In the last few years I've been a co-organizer of London Gophers. And Carmen, I think you were actually speaking at that particular London Gophers. We were hosted at Cloudflare, from memory... This was all in the pre-Covid days, when I think we had about 250 people there.

In addition to organizing London Gophers in my spare time, I also maintain a number of open source projects, and co-organizers of the Golang Tools group as well. But as Marcos was saying, he and I have been working on Play with Go for the last six months. It's a series of hands-on interactive browser-based guides that introduce the tools required to work with the Go programming language. So it's really like a zero cost way of getting up and running, beyond the Tour of Go and beyond the Go Playground, to actually get programming with Go.

**Jon Calhoun:** Okay. So I guess my next question would be what exactly is Play with Go? Why would somebody wanna check it out, and what problems does it solve, I suppose?

**Paul Jolly:** Yeah, sure. So the simplest way to describe it is to think of -- the Tour of Go is very familiar to people as a way of starting to learn the Go programming language... But once you want to go beyond the language and actually wrap your hands around something and create something, you need to understand the Go tooling. And that's where you need to get something set up locally, generally speaking. You need to install Go, have your computer set up with an editor etc.

So Play with Go is a very low-cost way, that doesn't require you to have anything installed locally. As I said, the guides are browser-based. So when you open a Play with Go guide, on the left-hand side you've got the guide, which reads as a guide, or a tutorial as usual. On the right-hand side of the page is an actual interactive terminal that is hosted on Google Cloud. So this is effectively real compute resources that are live in the browser for you. So as you're working your way through the guide, you've got command blocks in this left-hand side, which is the tutorial part, and you can actually click on those command blocks and they will execute in the right-hand side, the terminal, on that, in the Google Cloud compute resources.

For example, you could have a command block at the left-hand side that simply just ran *go version* and that would run the command on the right-hand side and show you the output from it. So that's the interactive nature of it.

You can also create files as you're going along. For example, let's just imagine you're creating a guide that explains how to create tests in Go. You would obviously create yourself a package, and then within that package you would have perhaps a regular package file and then a test file, as well... And you would create these two files by having code blocks in the left-hand side of the guide, and then with the final command block you would click on the command block and that would run go test, and you'd see all this happening live within your browser.

So this is a bit of an experiment really to see whether this kind of interactive type of documentation works... Because the Tour of Go and Go Playground are incredibly popular as a way of getting to know the language, but then at that point there's kind of nothing; you're left to your own devices. And this is a way that, as Carmen said in her closing keynote at GopherCon, of trying to lower the barriers to entry, if you like, for the next one million Gophers, i.e. not place any requirements on them to have anything installed locally, and just try things out in the browser, in a nice, fun, interactive way.

**Jon Calhoun:** \[08:14\] So if I understand this correctly, that would mean that this is -- like, if you wanted to show somebody exactly how running go test works, you could do it there. But then you could also jump into other tools like gofmt, and things like that, and actually show them how it formats code, and different things like that.

**Paul Jolly:** Absolutely, yeah. And it's not just limited to tools that run just on that machine. As you can see, if you actually go to play-with-go.dev, there are a number of module-based guides on there as well, that show the full lifecycle of a module, from just creating your first Go package, to then creating and publishing a module, to then actually getting that module through the Go proxy. So it is really a beginning-to-end story when it comes to modules, as well as tools themselves.

**Jon Calhoun:** So with something like this, do you imagine it being used -- I guess where I'm seeing this is another use case is the fact that when modules were first introduced, it was sort of hard to wrap your head around it unless you actually grabbed the code that had it, and installed it, and then got to play with it a little bit. Do you see this as something that would also help with that, where they're doing proposals and they can actually show documentation and see how it would work?

**Paul Jolly:** Yeah, absolutely. That's one of the things that we tried to do with the launch of Play with Go as well. Jay Conrod, who works on the Go team, actually put together a guide that demonstrates a new feature of modules that's gonna be present in Go 1.16, which is the ability to retract a module version.

Let's say for example you accidentally publish version one of your module when you didn't mean to; you intended to stay on version zero, i.e. unstable. Module retraction allows you to say "No, hang on... That was an accident. I didn't mean to publish that." So not only can you look at the documentation that Jay has already written for module retraction, but you can actually go and see how does that workflow actually pan out when you're doing it in practice. So there's a full example there of you publishing a module, accidentally publishing a v1 etc.

So it does give you a good way of demonstrating to other people "Okay, what does this actually feel like when you're using it? Is the UI/UX around this tooling correct?" A form of early feedback, if you will.

**Jon Calhoun:** Okay. Marcos, you mentioned this was based on Play with Docker. Is that a similar type of project, and what specifically about this makes it related to Go? Or is there anything specific that makes this more Go-specific than Docker?

**Marcos Nils:** Yes, good question. Play with Docker is actually a project that I started with a friend that is called Jonathan; we need, of course, to give him attribution, because this wouldn't have been possible without his efforts. We started it in 2018. It's funny, because it was actually part of a hackathon project that we did in a weekend, I believe, because we were basically developers.

The reason why we did that is because we saw, I believe, someone that you know in the Go community, which is Jérôme Petazzoni, an ex Docker employee. He was actually trying to teach Docker to people. And the way that he did that in the past was provision a dedicated VM for each participant of his workshops, and then he needed to provide five VMs per student; because you needed to make a cluster, and so on.

And the UX around that experience wasn't the best one. Basically, he literally gave a piece of paper to each student that he had to print beforehand, and then each student would have to have an SSH connection to the terminals, and then the whole thing became very difficult to manage.

So we were looking at this workshop with Jonathan and then we said "Hey, this could be easily done in the browser, where you could have all your sessions in a single place. You can jump between terminals and you can run Docker there, you can expose services, you can access all services with a host name, super-easy..." And then in -- I believe it was one night that we sat and started doing some coding, and then we got the PoC running. Of course, Play with Docker is an open source project and it's written in Go...

\[12:21\] After that, as I said before, when I met Paul, I told him "Hey, this could be easily translated to anything that's pretty much terminal-based." Like either Go CLI, it could be any programming language... We even did a Play with Kubernetes. It's also something that is based on Play with Docker. We did Play with Nomad, and now Play with Go. We're trying to bring new experiences for just people that need to learn through this type of experience.

**Jon Calhoun:** So you said that Play with Docker is open source. Is Play with Go also open source?

**Marcos Nils:** Yes, it is. Everything is open source. If you go to the Play with Go GitHub organization, you're gonna find several repos there. You have the Play with Go, which is the main repo that basically brings all the components together. There are different components that I believe Paul can explain better... And then there are some other repos out there that are basically like the website, the tool that generates the guide and makes sure that the guide is consistent...

And this is a very important point, Jon, because you were mentioning about, for example, leaning how to use modules, right? It is funny, because if you go to the Go blog right now and you see the first blog entry about using modules, you're gonna find that there were some examples using Russ'es repos in GitHub, or his basically vanity URLs... And you're gonna find that those do not work right now, because the URLs changed, or maybe the repos are in the wrong version right now...

The benefit of Play with Go is because everything is automated and tested, we run the complete tests on each iteration; every time we do a commit, we add a new thing, we change a guide, we update a guide. Paul did an amazing job on rerunning that stuff constantly, so we can always guarantee that the tutorial is gonna be updated and working.

**Paul Jolly:** Yes. And Jon, back to your point of it being open source - yeah, it is an open source projects. One of the questions we've had from folks who've actually tried it out so far is why do need me to log in when I'm accessing play-with-go.dev? It's a great question, and it's kind of related to the fact that this is an open source project. We're not logging in in order to steal email addresses, but as I said in the introduction, there's a real container that is running per guide that you launch within play-with-go.dev. So there are real compute resources, and hence money that we are spending whenever anybody ever opens a guide.

So yes, we are an open source project, and we're funded by sponsors entirely. But the focus, as Marcos was saying, is that this really is a project that is by the community, for the community, to coin a bit of a phrase there. Whilst it does look like this is an official Go project, this is an open source project, and the intention is that anybody should feel free to contribute in various different ways, whether that be just feedback on the site itself, contributing to Play with Go, Play with Docker, or any of the open source projects that are a part of it... Or if anybody wants to contribute content, as well. There really is sort of an open door as far as how we can make this content platform better. As Marcos said, there's ways in which we've tried to lower the barrier to contributing by making sure that if anybody does contribute any content or any fixes, we can know instantly whether there are any problems with any of the existing guides. It should be a fairly resilient system.

**Jon Calhoun:** So you mentioned that it's a funded project... Before we move on, do you wanna take a minute to just mention some of the -- do you remember who the sponsors are? I don't wanna put you on the spot...

**Paul Jolly:** Well, at this point we should actually say a big thank you to Carmen, because Marcos said that it was Carmen who helped originate this project. And it's been through the support of Carmen and her team at Google that this has actually happened in the first place.

\[16:07\] I think along the lines of Carmen and her team sponsoring Staticcheck and TinyGo; that's where the support of Play with Go comes -- it's sort of that same kind of sponsorship. So Carmen, a huge thank you to you, because I think it's this kind of model of supporting open source projects is one that obviously Play with Go has originated from... But I think it's a fantastic model as well, because it then helps those projects to support other open source projects as well... And I should just call out a couple that we're actually using. We're using Staticcheck, but we're also using Gitea as part of Play with Go...

So this model of larger organizations sponsoring open source projects like this is, I think, a very healthy one for the ecosystem, specifically the Go ecosystem here... Because it encourages those open source projects to flourish, and as we know, quite a lot of projects, including Go itself, have benefitted from a lot of open source projects in the Go ecosystem itself. Let's just take Staticcheck as an example - it's benefitting massively at scale from projects like Staticcheck.

So in different ways, these open source -- so Play with Go is a very different sort of project to Staticcheck for example, but it is looking to grow the Go ecosystem and the number of gophers out there. So supporting open source projects like this and the people who contribute to it. So this is something I think we want to look at down the line, as well as if there are people who become just absolute top contributors of content, or reviewing of content, or fixes to the site itself... Those people should actually be rewarded in some way for doing that, because that's the whole point of this sort of ecosystem. But I've been talking a lot on that; I think Carmen is the expert to actually speak to that point a bit more.

**Jon Calhoun:** So Carmen, it seems like the Go team is actually putting money towards making sure that educational material and teaching people Go is a big focus. Is that actually the case, and do you wanna talk about what's going on there?

**Carmen Andoh:** Sure. So one of the things that we have a problem with in terms of strategy is we have a finite number of engineers on the Go team... And I always am hoping to tap into them to write blog posts about modules, or update documentation... I know Effective Go needs to be rewritten with modules in mind... There's just a lot with regards to educating.

So we launched learn.go.dev, which was kind of a beta site curation that takes in and just helps organize some of the information... But at this point it's pretty static, and it could be akin to the Wiki on GitHub for Go. So we realized pretty soon on, either Google has to hire a ton, dozens and dozens of content creators and tech writers to scale this for the next 10 million (or however many million), or we need to think about an open source strategy for this.

The other thing - when I researched the learning landscape of Go, I recognized that the current material that is existing that is produced by the Go team is static, and it's text-heavy. We do have the Playground, and we do have the Go Tour, but that's the extent in terms of being able to provide modalities of material.

So we rely largely on third-party people to either do training, so Ardan Labs or Gopher Guides, or we have people who are enterprising enough to create Gophercises, such as yourself, Jon.

\[19:48\] So the missing link, I feel, is that as both Paul and Marcos have alluded to, there was a big gap in what I call the interactivity and the ability to make documentation not stale, and have it come alive, so that people can try out what's being meant by it... And it also is a change in -- so we have a change in people for Go coming to the language; lots and lots of people. But we also have people that are a different kind of persona, which is mostly enterprise. And when you dig deeper into the persona of an enterprise or a person who uses Go professionally, they're not similar to the early adopter.

The early adopter is curious, and they probably want to try out all the new languages, whereas the professional programmer using it at work - they just want to get the job done. They wanna see what it looks like, and they're very practical and pragmatic, and they don't wanna wax eloquent about the philosophy a bit, or the context a bit... They just wanna get it done.

So we've heard that we can call it as meat and potatoes, or beans and rice, but really to the heart of it... And I think that play-with-go.dev is that gap that fills for everything that's happening with Go right now.

So a long-winded way, Jon, of saying "Yes, we're looking at ways, with limited funds, to be able to scale out content that would be useful to a lot of people, but also get the ecosystem involved, and empower them..." Because some of the most useful materials that I've found is when people wanna share and teach. Everyone wants to feel useful. So I think this is a convergence of both strategy and product that is trying to meet all of those things at once... And I have a lot of hope and confidence that we'll achieve that.

**Paul Jolly:** I think I'll just briefly add to what Carmen said... What we have there with play-with-go.dev at the moment is the first cut. It's really important to not see that as the finished article, because it's a starting point in terms of content, but it's also a starting point in terms of the UI, the UX... And the point of making it open source is that people will have really good feedback, and we have had some excellent feedback from a technical writer on the Go team, as well as Bill Kennedy, as to how we can make the UI/UX better, but also how we can write the guides, this style of interactive guide in a different way, as well.

So I strongly encourage people who have had a play around with it - and we've already had some feedback as to how we can tweak this, and "Okay, what is the target audience for this guide here? If it is this type of audience, then actually you're gonna need to cut down the introduction and not make quite so many assumptions about the technical proficiency of somebody who's starting here." So yeah, there's so many gaps to be filled still, but I think we at least have a solid starting point here for, as Carmen was saying, this different style of learning.

**Break:** \[22:58\]

**Jon Calhoun:** So given that this is a starting point, I assume that means obviously you want to expand it, and make it better, and improve... So in my mind I guess there's a couple of ways people could help. Are you looking for additional sponsors? Is that one way that organizations can help?

**Paul Jolly:** Yeah, I think we would definitely welcome that, because I think there's a number of ways in which these guides could actually be improved, just sort of building on this starting point here of this interactive guide. As Carmen was saying, there's a large enterprise contingent effectively that's going to start jumping on the Go ship fairly soon. They have already started jumping on... And one of the excellent bits of feedback we've had from Bill Kennedy has been that a fairly significant percentage of those people are gonna be Windows-based.

So quite honestly, if you have a -- as you'll see if you go to play-with-go.dev, these are Linux-based guides at the moment... And actually, to make it a welcoming place for someone who's coming from a Windows background. It would be really nice to actually have a Windows container that is running, where you have either a command prompt, or a WSL 2... And guess what - it'd be fantastic if instead of just having a plain terminal, you had VS Code integrated there as well, with absolutely zero setup costs required on these. So then you're just opening a guide, and much like Marcos said, in the early Play with Docker days you had no requirements on the user to install anything on their machine and they've got everything up and running for them. Here it's the same type of idea. This should be possible as well when it comes to learning Go, and when you actually need to come to use tooling. So you should just have the editor in the browser with you, as well as the terminal.

Marcos, you should just chip in here, but that's one area where further sponsorship would enable -- that's a fairly significant build, to get those two features supported... But that to my mind would be where sponsorship would be well-placed, I think.

**Marcos Nils:** Yeah, I completely agree with you, Paul. Right now, as you said, cloud resources and the ability to expand to different platforms - I think it would be very appealing to us to maybe host Play with Go in a place like Packet where we could run ARM64, especially since now everyone is gonna have M1 which you can run on the ARM as well. And of course, Microsoft Windows would be amazing to try it out.

**Paul Jolly:** I think sponsorship should also be considered to be going towards content creators as well, back to Carmen's point... This really needs to be viewed as an exercise as well in trying to grow an ecosystem for creating content. And we've got the agreement from members of the Go team as well, that for those guides which are core fundamentals, that they will help to review those... And I'm sure we're gonna have an army of people who are actually gonna try out these guides and give feedback where the guide doesn't read well, or whatever.

The hope is that we can use this platform as a start on the content creation side of things as well... So I think it would be important to reflect that sponsorship should really go towards ongoing costs, in some way, of people's time in that respect, as well.

**Jon Calhoun:** \[28:02\] So you'd mentioned that sponsoring and helping from an enterprise perspective would help expand what's there, and also help with contribution... For individuals, I assume either giving feedback or contributing new guides is a good way to -- is that one of the ways you expect or hope people will be able to contribute individually?

**Marcos Nils:** Yup. I think we cover pretty much all the aspects of the platform regarding contributions. It can be either from the content side of things, as I said, it can be from the UI side of things as well... Take into account that neither Paul, nor myself are UI experts, not at all. Very far from that, actually. So the UI needs a lot of rework, and some polishing, as we said before...

Another very big aspect that we are already working on is translations. Right now, as you might have probably seen, pretty much everything is in English. We are, of course, looking forward to expand it. The platform is already based on a multi-language architecture, basically, so it's very easy to extend the current guides in a different language. So we really foresee a near future where we could have tens of different languages due to the easiness to basically extend it. I don't know if you have any other things in mind, Paul...

**Paul Jolly:** No, no. I think that's a great point, and I can't believe we didn't already talk about that... As well as extending it to multi-platform. The idea is that it should be possible to write a guide that you write the script for it once, essentially for a platform, and then you could say "Okay, if this script is running on Windows, then instead of running this command here, you run that command there", which of course, there are gonna be platform specifics...

And as Marcos said as well, when you're then presenting that to the user, you want it to be in their local language. So the vision is sort of that when you land on a guide, you say "Hey, I'm on this platform, and this is my chosen language here." And if there exists a translation for it, for that guide, and then \[unintelligible 00:30:04.19\] present that to the user... And we also show it to them on whatever platform they're interested in as well.

So again, back to Carmen's point from earlier - that's really being as welcoming as possible. If we can provide people something in a language that's familiar to them, for their chosen platform, it's such a low-friction way to get started. They don't have to install anything; they have VS Code in the browser. It's just a "Okay, fantastic. I'm up and running. It feels like I'm making progress already."

**Jon Calhoun:** That makes sense. So what is that contribution process like? How would somebody get started if they wanted to either provide a translation, or to write a whole new guide... What would your advice be?

**Paul Jolly:** Yeah, this is a good question. So we're just in the process of finishing up a guide that explains how to write a guide at the moment. That's awfully meta, but... That will give somebody a starting point. Literally, how you check things out, how you create a directory for the guide itself, what structure the guide takes. It's just split into two basic parts, which is a markdown file and then a script, which takes the form of a QFile.

So the guide process itself -- the guide that explains how to create a guide will just walk you through that entire process. There's people who will be on-hand to answer any questions you might have on Slack as well... So kind of expecting that initially, that guide contribution process will have a few rough edges. We're gonna work through those with -- Jon, we're working with you as well on the guide around Go testing... We're gonna be working with Bill Kennedy and a number of others as well. So that's hopefully gonna smooth off those rough edges for the guide contribution process.

Language translations are not something that we support just yet... But again, that's where with a bit more sponsorship, dare I say, towards the buildout required for that, we can easily get language translations in there as well, as the multi-platform support.

**Jon Calhoun:** \[32:00\] So you mentioned briefly that it's a markdown file, and your scripts, which is a QFile... And I had a chance to go with you and look at a lot of those in more detail... So for anybody who's wondering, it's kind of like you write a markdown file, inside you that you put a special command that essentially says "This is the code or the script that I want you to run at this specific step." So when you're writing in other languages, you just keep those script commands at the same spots, and you just replace the actual text with whatever language you want. So that's what the process looks like.

And Marcos, earlier you mentioned that these documents were testable... Meaning that if I write a guide, you can actually verify that the guide still works, whereas some of the guides on the Go blog right now aren't always working. Do you wanna talk a little bit, one of you, about how that works and how that current setup you have enables that?

**Marcos Nils:** Yeah, I guess Paul would be the right person to explain in detail.

**Paul Jolly:** Sure, okay. Yeah, Jon, it's exactly as you said. We have a tool that's called Preguide that was written -- actually, a bit of a back-story to Preguide. When I first was talking to Carmen and Marcos about this project, the idea was that I was initially going to start by writing a few guides, and then we sort of stepped back and said "Okay, what does this look like? What do we need to change?" etc.

But the guide writing process to start with was pretty frustrating... Because as soon as I'd got halfway through the first guide, I had no way of checking whether the steps that I'd written still actually worked. And so I fairly quickly thought to myself "It's a problem for me now. This is just not scalable at all when it comes to multiple people contributing, potentially in separate languages." And as we agreed at the beginning of the project, the community aspect to this is going to be very important. So having a process by which people could contribute was fairly important. So that's where a tool called Preguide was really born.

It's a simple tool that, as you said, takes the markdown part of a guide, and the Q script, and effectively smashes the two together, producing a markdown output. And that separation of the markdown, which is the prose, if you like, from the guide, from the script part, then allows for multiple translations, but it also allows you to add a bit more structure to the specification of the script as well.

We talked about the ability to have multi-platform... If you've actually defined the steps in your guide in a more structured way - and we're using Q for that, as I said - you can then much more easily say that "Actually, you know what? At step number five here, if we're running on Windows, instead you need to run these commands here." Or step number six...

So that allows you much more easily to have not any platform-specific variations in your script, but even language translations as well. So the canonical Hello World program - you might actually choose to provide a localized version of that, which would require you to have a localized version of the file that you're running as well.

So splitting apart the prose and the script was a key part of that, and the structure that Q gives us within the script specification allows us, as I said, to have those specializations. Preguide is then just responsible for pooling all of that together, running a whole lot of sanity checks, and so it effectively acts like a compiler as you're writing the guide. You can just have this very tight edit and compile iteration loop. And whenever you change anything within the script itself, as Marcos was saying earlier on, it actually just reruns the entire script to validate that all the steps work as you expect, and that the output is as you expect as well.

And Jon, as you were saying as well, then using this sort of text template style, templating within the markdown file, Preguide takes the output from the commands that have run in that automated process, the commands that have run in Preguide, and then generates for you a markdown file. And that's the markdown file that you ultimately see rendered on the Play with Go website, that is the combination of the markdown template and the script output as well.

**Jon Calhoun:** \[36:05\] That's really neat. For anybody listening who's kind of curious, what this also enables is let's say Go releases 1.17, or Go 2, or whatever; they could actually take all the guides, run them and see if they work in Go 2, and they would actually know immediately which ones work for it and which ones don't. So if you've even gone on the internet and read a tutorial and been like "Okay, this is exactly what I want", and then you realize that nothing works because it's an old version of whatever you're using, this will hopefully prevent that type of issue, and really make it easy for them to maintain... And even if you need to update a guide, you don't have to get rid of the old one. You can almost have a guide for the new version and a guide for the old version, and have that backwards compatibility.

**Paul Jolly:** Yeah, that's exactly it. So just to build on that slightly... This is something else that we have - effectively the building blocks for you, but would just require \[unintelligible 00:36:52.02\] is this concept of multiple scenarios. Multiple scenarios is sort of like a variation of the multi-platform support. But Jon, just as you were saying, you would have multiple scenarios for like Go 1.15, Go 1.16... Because there are subtle differences between versions, where the command go is concerned; the output is slightly different, and if you're not able to show the user a guide in the version of Go that they're using, it's quite easy to get spooked sometimes by something that is not quite working as you expect... And with Go 1.16 in particular, there are some subtle changes to the way that modules work that will actually require that new ones to be explained, particularly if you're coming from Go 1.15.

So yes, not only do we have all of these, as Marcos was saying earlier on - we have all of these guides being checked in CI every time there's a change made to any of them. It's trivial to say "Okay, it's time for us to release all these guides as Go 1.16. What changes are actually required in them?" and then we'd be able to validate them and then publish those with confidence that every single one of the guides works.

**Kris Brandow:** I'm also kind of wondering if this would be a helpful tool for library maintainers; it could be like an integration... Because I know one of the things I always struggle with is when I find a new package that I wanna use, and it's just like "Oh, alright, how do I get started with this thing? How do I actually use it?" It'd be really helpful if there was just like an easy guide that the maintainer could just update, that has like "Okay, here are the steps you need to do. Here's exactly what you need to do to use this package, or this library."

**Paul Jolly:** Yeah, Chris, that's exactly right.

**Marcos Nils:** Not only would we just mention about the fact about writing guides, but we realized that this also allows to close the gap between the language maintainers or contributors and users... Because imagine that you develop a new feature, or you want to get immediate feedback about something that you're basically coding, and instead of writing a comment in GitHub, and the fact that you have to tell people to clone or fetch the latest changes from a branch and build the thing locally, you could just for example leverage Play with Go, like "We're looking for a sponsorship", and basically have a way to show that to your community super-easy and super-fast, and telling your users "Hey, can you please go to this, try it out and give me feedback to see if that's the expected UX functionality etc?" And maybe eventually you could even start playing some sort of sandbox and then share that session to someone else, so they can reproduce what you're also doing there. Similar to the Go Tour, but imagine it for CLI tools as well.

I believe that the possibilities here are endless. It's just a matter of putting the focus right now on teaching Go, the community, and see what are the immediate quick wins we can do for people to get engaged on the project.

**Carmen Andoh:** Marcos mentions a really important point for the future, which is - we talk about ecosystems, and this tool can be that force multiplier for library authors, for companies that are trying to ignite their own open source communities based on Go.

\[40:11\] Again, when I think about all the things that his can enable, and the new future of open source - I know that sounds very pie in the sky, but I think that the old open source which is static and just text-driven is gonna be no more in a couple of years... And this is the harbinger. We're gonna see readmes that are interactive. We're gonna see issues where you can click and test there, instead of having to (like Marcos said) get your own environment set up.

This can be a way to bridge the gap between beginners, for whom -- not only do they have to learn the things in order to be able to contribute, but they also have to overcome the biggest gap of all, which is the setup, which was mine for years. I think I lost one or two years about seven or eight years ago, because I was too shy to ask about the setup; I thought it was just me, and then people were like "No, it's this janky thing that you've gotta do, and you've gotta pull in this thing, and we forgot to document it etc." If this is just done for you, then you can get right to it and then learn along the way.

**Paul Jolly:** Kris, I've actually got a really good example to pick up on the point... Gio is a project that I think has actually been talked about on Go Time before as well. Elias, who's the creator of Gio -- I sort of gave a quick demo of Play with Go to him, and he said "Hm... Hang on a second. Is there some way that we can not only have these interactive guides where you're running these programs on this remote session - can I actually render something back to the frontend as well? Because Gio being very much a visual thing, obviously, it's gonna be pretty useless to run a Gio program on a headless remote container. Can we render the results back to the frontend?" And again, that's absolutely something we can do, because Gio is cross-platform and can render via Web Assembly. That's the plan, is to try and give that a try as well.

So Gio would be able to use something like Play with Go to not only, as you said, Kris, explain "Okay, this is how you would get started with your first Gio application", but actually render the results to you as well. So then, if you can imagine this sort of interactive environment where you've got VS Code there as well, the user hasn't actually had to install anything at all and they're already running a graphical Go application within the browser. So that's a pretty powerful offering, I think, exactly as Carmen said, because it just can't settle that friction for people who are getting started... And I don't think back when I started programming what sort of friction it was, particularly when it came to Linux, or anything like that. It's just a very different story these days, and I think it's a good one for newcomers to the language.

**Kris Brandow:** I'm also thinking of the Playground, which I think is a natural extension of this at some point... Because I know there's lots of times where I have some application or some little thing I wanna try out, and my modules directory is filled with all these x.kris.whatever... of just like "Oh, I wanna play with this little thing", but I can't go to the Playground, so I can't import other packages into the playground... And this just feels kind of like a precursor to us actually having a playground where we can import third-party packages, and maybe even have something that's a little bit like a gist, where it's just like "Oh, here's my files, here's everything. I want you to go run them, and I can share them with other people and collaborate."

**Paul Jolly:** \[43:39\] Yeah... To the credit of Go Playground, it has actually got some limited support for third-party imports at the moment. It's limited somewhat by how long it takes to then download, fetch and install those; I think it's a fairly conservative limit there. But I think you're right, Kris. This was kind of the thinking with getting this full lifecycle of module publishing going on, because so many guides that I started looking at - and I've been looking at the modules in Vgo since the early days, which is almost three years ago now, unbelievably... So many of them stopped at saying "Alright, and now at this point you Git push", and then there's quite a lot of hand-waving going on, saying "Oh, you Git push and then you can do a go get, and you tag, and you push that tag", and you're stuck; if you can't follow something at that point, and/or it's not working, then you are stuck. Whereas with the Play with Go guides that we've got - not only have you got that remote container, but it actually automatically creates remote repositories for you as you need in order to complete that guide. So you have the full experience of actually publishing modules and getting them via the proxy, exactly as the end user, albeit they'll be publishing to a different module path, exactly as the end user should be experiencing it as well.

**Break:** \[45:03\]

**Jon Calhoun:** Also, a positive side to this is that right now teaching somebody how to create their first package and then import it and use it is -- you pretty much have to install Go to do that... And the Playground doesn't allow you to do that. So this type of thing should work really well for that, because - even if it's really like a package with one function and you just wanna export that function and show them, there's not a good way to do it. A guide like this really enables that type of education.

**Carmen Andoh:** One of the early things that turned into -- when I was trying to improve learn.go.dev, we said "Wouldn't it be wonderful if we had added to a Tour of Go a tour of modules?" And this is what that became. Because we recognized that there are an existing 1-2 million existing Go users who already have a firm grasp on the language, but need the next step. And this is exactly what that is.

**Jon Calhoun:** Yeah, I think that'll help a lot, because I know -- like, I've just actually helped somebody today... They had some code and they were importing a package, and they just didn't quite understand - like, if you're not using modules, that the GOPATH actually matters. They had something that worked, and then they moved the code somewhere else, and it wasn't working, and they're like "Why is this all breaking?" And just having to explain that to them and show them "This actually matters, where your code is... Or you need to use these modules...", which is then, all of a sudden, introducing a whole new thing that you don't necessarily want to introduce to somebody right away when you're going to confuse them with it. So having options like this would really help with that.

**Paul Jolly:** One other thing as well, as Carmen mentioned the wiki earlier on... There's actually a really good wiki for Go modules, but it's a bit of a double-edged sword, because it's so easy to edit the content. As we've also kind of discussed, it's so easy for that content to Go out of date. It's impossible to check that it's still valid... And all of these sorts of things make for a fairly daunting experience; if someone says "Oh, just go and take a look at the Go modules wiki for an explanation of how to do that." It's just a -- well, good luck if you're coming out the other side, if that's actually gonna work as intended.

\[48:05\] And one of the things that -- I had an example of this last week, actually. Somebody asked a question in the modules channel on Slack... We were just debating a point - if you have a module, which is major version, greater than or equal to 2, what strategies do you have for actually publishing those multiple major versions? And it took me literally ten minutes to pull together a very simple guide that demonstrated the different options available to you.

I then published that guide. It's not actually part of the index on play-with-go.dev now, but... I know that guide works, and I can just put some prose around it, a bit of explanation as to what I've done in each step... But it's a really crisp way of sharing with people -- Kris, this is the point you were making earlier on as well, of "Okay, if you wanted to structure your module with a branch-based strategy or a subdirectory for your major version modules, this is how you do it." And not only is it the explanation of it, but you know it works.

So Jon, as you were saying earlier on, as we go through the new Go versions that come up, we just know this is gonna continue to work, this guide, because we can check it as part of CI every single time.

**Carmen Andoh:** And I also think -- what's been weighing on my mind a lot lately is the software supply chain security; this new software reuse problem, which I believe is a collective hurdle that we have to get over and figure out... And I believe that the modules toolchain is along one of the better language ecosystems that has figured that out. But now, with play-with-go.dev, we can even be able to do some early testing and sharing, and you can do some scrapbook or sandboxing of pulling in these dependencies and kind of checking them, without having to worry about -- you know, yes, we have other ways of sandboxing; we sandbox on VMs, we sandbox in the cloud, we sandbox on our own machine, but this is just yet another way to do that. Again, when you iterate on all the different use cases of this, this is one of those great ones.

**Marcos Nils:** I have one more observation... I believe this week we \[unintelligible 00:50:13.02\] about it with Paul. After looking at the analytics metrics of Play with Go, we'll realized that 50% of the audience is coming from mobile devices. Unfortunately, our awesome UI skills that we mastered with Paul in these past weeks - now we can look for a job and say "You are an engineer, Paul. Don't worry." Surprisingly, the site works pretty well in landscape mode on a cell phone, on any regular cell phone.

So now, going back to what Carmen was saying regarding that the tutorials and the instructions should be interactive, or are going to be interactive in the near future, if you actually for example see a new release of either a CLI tool, or a Go feature, or whatever, if you can give a lot of people access to that information super-easy in their phone devices while they are commuting to work, or while they're on their sofa, without a computer in their hands, that enables a whole set of learning paths that are just unbelievable. And the numbers talk by themselves. 50% of Play with Go users are coming from mobile devices.

**Carmen Andoh:** That's incredible.

**Marcos Nils:** Yeah.

**Carmen Andoh:** I'm really curious, because I remember making a joke about merging a PR via my phone on the GitHub mobile browser... And I've just thought, you know, I'm coding, and I'm reviewing, and I'm using my little thumbs to check the code, and I just wonder "Will someone write a tutorial or a guide only on a mobile device?" That is truly like wow to me in terms of the future.

**Kris Brandow:** Yeah. I'm really excited for the -- hopefully, if we can get the barrier to entry low for writing guides as well... So I feel like there's so many things that I've searched around the internet to figure out... Semantic import versions is definitely one of them, where I'm like "How does this work again?" If someone could write one guide, that you could just go to and find... Because yeah, when you go to the wiki, I grep around, or I use Find in Page, and I'm like "I think I've found the information that I want", and I just really wind up asking Bryan Mills like "Hey, how does this thing work?" and he just tells me. But most people can't do that... So just having some real good guides around that would be fantastic.

**Carmen Andoh:** \[52:25\] Yeah. And that's how we can scale someone like Bryan. For those unfamiliar, Bryan is on the Go team, working on the go command in the open source team... And I wish I could scale 100 of Bryan - to write guides, to do content... But he's gotta make the go command better, and I think that's why I really believe that if we continue to do it this way, we can totally scale that content and have that.

**Paul Jolly:** Yeah. Kris, I'll just build on what Carmen said there by saying that getting that barrier to entry low for content creation is key. As I said, there's gonna be a few rough edges as we get started there, and feedback is very welcomed there... But I think an important part in having this building block now, as Marcos was saying earlier on - the ability to rerun a guide and just check and validate that it actually works. Because if you've got that sort of edit/compile cycle with writing guides just as you have code, you as the developer can just very quickly - as I did with that example I cited from last week - in ten minutes put together something that is the barebones demonstration of what is going on in a situation... And then actually you can have other people contributing to the process as well by putting a nice introduction in place, actually writing the guide around it, the prose itself.

So I think there are ways in which to make that barrier to entry nice and low by making sure the tooling is good, and fast etc. But also, if we have a good process for review and editing as well that is very light touch... Imagine a world where we didn't actually have this automatic checking of guides; it would be pretty hairy as a reviewer, because you're basically saying "Okay, I've now got to go through and check it myself", and then if there's another change made, you've gotta go through and check it again... That's just not scalable at all.

So the barrier to entry is not only the tooling thing, all the content creation itself, but it's the review process as well. So that's where, picking up on Carmen's point - yes, we need more Bryans and Jays, absolutely; but if we can make their job of review of these guides much simpler, then that's how we can scale things as well.

And I'm saying this very much in the context of the go command, but Kris, back to your earlier point - could this be used for other tools, other libraries etc? Absolutely. So the tools and technology that exists for Play with Go is open source, and it should be able to be used for other people as well.

**Jon Calhoun:** So if people have additional questions, or they wanna learn more, where do you recommend they go at this point?

**Paul Jolly:** The best place to start is play-with-go.dev. That is the main site. And @playwithgo is the Twitter handle. There's also a Play With Go channel on Slack, as well as the GitHub project that Marcos mentioned earlier on. Happy to answer any questions that people have, take any feedback... It's a good starting point, but there's plenty still to be done, not only with Play with Go, but just effectively the experiment that we're trying here, this interactive form of documentation. As Marcos was saying earlier on, there's many, many ways that people can contribute, and a feedback is a massive form of contribution.

**Marcos Nils:** One last thing that I would like to highlight - it's also a very nice, interesting project to start basically learning about different aspects of technology. Play with Go has a UI, it has Qlang, which is a very trendy technology - or language; I don't know how to describe it, but it's very interesting to learn. It has Go, of course, it has infrastructure, it has containers, because all the infra is running on containers; it has Docker... It has security concerns, because as you may imagine, running a container where you can basically compile and write code, and basically play funky with bandwidth, and some things - it's a challenge, as well.

So if you are into DevOps, coding, UI, content creation, UX, whatever you feel like you can contribute, please talk to us, so we can help you out in whatever you need.

**Paul Jolly:** \[56:23\] And we're gonna be starting to mark issues in the GitHub issue tracker as "Good first time issues", "Help wanted", sort of categorize things a bit better. And Marcos also had the suggestion of pulling together a GitHub project board, so people can see "Okay, where are we now? What things are planned?"

But kind of drawing back to your earlier question about sponsorship - sponsorship will actually help this project to live on in terms of its infrastructure cost, but also where it goes next.

**Jon Calhoun:** We're kind of running out of time, and I forgot to prep you both for this, so I apologize... But it's time for our Unpopular Opinions segment.

**Jingle:** \[57:00\] to \[57:16\]

**Jon Calhoun:** So if you've never heard Go Time, basically, if you have one and you want to share, we ask you to share an unpopular opinion. It can be related to tech, or anything at all; I'm trying to think of some past examples... One example is that the subway (I think) was the fastest form of transit in New York... Maybe they said buses; I don't remember which one they said. But we've had different ones in the past.

Others have been more tech-related, so people have said like -- I'm trying to think... Does anybody remember some off the top of their head? I'm drawing a blank.

**Paul Jolly:** Didn't you have someone who was speaking from GitHub say that Git is too hard to learn as a command... Wasn't that the most recent one, I think?

**Jon Calhoun:** I think we had that one. We've also had -- we've had somebody say that dogs are bad in the workplace... Different things like that. So if you have any unpopular opinion you'd like to share, we can talk about it a little bit. Usually, what happens is after the episode has aired, Jerod will actually take the unpopular opinion, cut it out and put it on Twitter with a poll, to see if it's actually unpopular or not.

I will warn you that, because most of the audience is gophers, sometimes things that would be unpopular in the whole ecosystem of developers is popular inside of the Go ecosystem. But do either of you have something you'd like to share?

**Marcos Nils:** Going back to Paul's comment around Git - if only you had a good platform, Paul, to learn interactive things...

**Paul Jolly:** Well, that's just it, right? \[laughter\]

**Carmen Andoh:** \[unintelligible 00:58:33.06\]

**Paul Jolly:** If only someone wanted to write some content for the Git command... \[unintelligible 00:58:39.00\]

**Marcos Nils:** We need to build something. We need to build something right away. \[laughter\]

**Jon Calhoun:** I feel like those guides are gonna have to be like -- you're gonna have to have 20 hours of guides, because there's all sorts of weird things to do in Git that nobody remembers, because you do it once a year.

**Paul Jolly:** Oh, exactly.

**Marcos Nils:** Now it's called Git Restore, right? They killed me with that one. It's not Git checkout anymore. I have one, which is -- it's interesting, because I'm actually on my vacation from code from work this week... And we just decided with my girlfriend that we wanted to bike around the city... And we realized that even though the city has all these new bike lanes, basically the problems regarding how the city operates are the same ones. People not respecting rules, either drivers, other cyclists, the people that walk on the street as well... So the unpopular opinion is that it doesn't matter the different ways or means that you can implement to try to fix an issue; if you don't basically change the core, it will not happen.

**Jon Calhoun:** Okay.

**Carmen Andoh:** Totally not unpopular. This is gonna get like a 90% agreement rate on Twitter, I bet you, Marcos.

**Kris Brandow:** Yeah...

**Paul Jolly:** Okay, I've got one that is Go-related... Is that allowed?

**Jon Calhoun:** That's completely fine.

**Paul Jolly:** I don't know whether it's -- we'll see whether this is unpopular, or controversial, or both... But Go modules will be the last dependency management system for Go.

**Marcos Nils:** Interesting.

**Jon Calhoun:** I don't know how to respond to that one.

**Carmen Andoh:** \[01:00:10.24\] Kind of like the way that npm is for Node? Hm... \[laughter\]

**Paul Jolly:** Well, I guess there's a number of -- understandably, coming from a background of their different dependency management systems, it feels like for me there is a real net benefit to what modules brings. Yes, there are bits that people find frustrating, but I think that the focus that it places on the module author to respect non-breaking changes and/or bump major versions - it kind of places the onus on the author, in much the same way that it places the onus on the author of Go code to write code that is easy for the reader to understand. It's exactly that right shift, where you wouldn't just leave the reader of some code to just make a whole load of mistakes as they're trying to understand your code. You make it as clear and easy to understand as possible.

In exactly the same way, I think it's sort of encouraging - helping to encourage, at least - module authors to be more responsible. Not that they're being irresponsible, but you perhaps get the idea.

And there's obviously tooling improvements along the way that are desperately needed, and I think we're sort of in the Go way just taking our time to work out what they are... But it does feel like modules is very much a net positive to things. So the unpopular/controversial opinion is that it will be the last dependency management system. There will be no others.

**Marcos Nils:** For Go, right?

**Paul Jolly:** For Go, yeah. Well, other languages are welcome to copy... And guess what, there is another language that is going to copy Go's module-based Q is gonna follow the module and package-based approach. It's influenced extremely heavily by the way that Go and its tooling works; the modules will follow a very similar pattern.

**Jon Calhoun:** It would probably be more interesting if Peter Bourgon (I think that's how you pronounce his last name) was here, because I don't know if he would agree with you on that one... I don't think he likes semantic versioning I think that's the bigger underlying issue. And if you get rid of semantic versioning, I don't know if Go modules would stick around or not.

I do agree that sticking with something that's built into the Go tooling is enough of a net gain that even if you don't like 100% of it, you'll still use it... It's kind of like gofmt; even if you don't love that format output, there's enough net benefit from everybody using the same thing that it's worth doing.

**Carmen Andoh:** But ten years later gofmt now becomes ossified into the way that modern programming languages add as a feature. We do not wanna fight over tabs and spaces... And also the other benefits that it provides.

**Jon Calhoun:** I still fight with tabs. \[laughter\] The only time I end up doing that is whenever I'm copy-pasting code to put in -- I write an email newsletter; so when I'm doing that, it's easier to turn to spaces, so it's not real wide on the screen... And I know there's some CSS to change that, but it's just sometimes easier to have spaces.

**Carmen Andoh:** But it's not Go... Right? You're in a free-form--

**Jon Calhoun:** I write Go, I format it, and then I put it into my editor and I replace all tabs with two spaces, and then I put it in my email... \[laughter\] I'll just say "Oh, that's not me. That's the email processor."

**Paul Jolly:** I think there are people who definitely don't like the way some of the more opinionated parts of modules... I think the thing that's been interesting, as I said, over the almost three years since Vgo was first announced is that it's really hard, it's a massive space to try and summarize what your objections to something might be, because there's so much context that -- I'll speak personally here... If I consider my opinion on it, it is limited to my experience of modules and/or packaging and/or version dependency management... And it's really difficult to communicate to a very wide group of people why you think in the widest possible context modules is or isn't the right solution.

\[01:04:13.26\] So it's a tough space to win in an argument, I think... And I think that's where having a really good evidence-based approach to things is useful. And that's where having an experiment that was Vgo in the start, that people could try out, that they could give feedback on, and the Go versions that have happened since Vgo, which has been an iteration on the modules experiment, have been fantastic... Because the Go team have been incredibly involved in the tools working group, but also in the modules channel on Slack, getting feedback from people, understanding "Okay, what are the rough edges here?" and trying to think about solutions in that wider context of "Okay, you've got a specific problem here, but actually this aspect of modules is trying to address this wider problem here."

So it's a very difficult balancing act, and one which if you look at a very specific use case, I don't think you're ever gonna say "Yes, modules got it absolutely right." But it's that wider context, which I find very hard to appreciate... Because guess what - I'm not at Google, I'm not at some of these larger organizations. So that's effectively the tough job that Russ, Bryan, Jay and everybody who's responsible for modules has.

But I think there's been some fantastic stuff that's come out of modules; if you look at the pkg site; these are real wins, to my mind... And they don't demand lock-in into the system either; that's another nice feature of it - you're not locked into it. And I think the tooling is getting there. This is something the Tools Working Group, which over the last 2-3 years has been talking about this, is kind of trying to help move along a bit. It's getting there, but there is plenty of room for improvement there, too. And kind of to the point of Play with Go is that if the tooling improves, there's now (guess what) a nice way of showcasing it to people, as well.

**Kris Brandow:** Yeah, I kind of feel like whether you fall on the side of liking modules or not liking modules has a lot to do with whether you're like a library maintainer or just a consumer... So I think historically, modules from a library maintainer's perspective have been really, really difficult. I think it is getting better now. I think the tooling and the knowledge about how to do things is improving... But even at work we have this problem with semantic import versions, and we try to switch something over to modules, and it wasn't using modules before, but it was already on v2, and then when we switched it to modules it was importing the old, old, old code... It was all sorts of broken, and it took us a while to figure that all out.

**Paul Jolly:** \[01:06:46.29\] I really wish that we had Play-with-go.dev two years ago, where we could spin up guides that demonstrated to people "Hey, you're in this situation..." This was actually one of the examples that Bill Kennedy gave as feedback... He said "You know, you can do these as guides, but you could also present them to people as problem-solving situations as well." So you launch a guide, which is in fact a problem, and you explain the background (the problem) that says "Okay, you've got a module that's in this state here. Now upgrade it to a new major version." And how do you actually do that. So you can present challenges to people in this type of environments as well, as a way of enforcing learning.

So yeah, Kris... The frustrations that people have - it would be great to just say "Okay, let's just write a guide from that" or "Let's write an explanation of how you get yourself out of a hole." Because guess what - that's what we should be doing, is providing examples, documentation to people to help them when they find themselves in a bit of a corner, that the tooling has landed them in, fundamentally.

**Jon Calhoun:** That type of tool would help a lot with misunderstandings, too... Because I remember when Vgo first launched, people misunderstood how it worked pretty drastically, in some ways... And all it took was actually grabbing the tools and running it locally to verify that what you thought was a bad idea and it wasn't actually how it worked. But the number of people who didn't do that seemed astronomically high... Especially on Hacker News and sites like that where they might not have even been Go developers, and they're just like "This is a terrible idea." You know, people like to read the headlines and comment. So it could definitely help in that type of situation.

**Paul Jolly:** Yeah, for sure. And that was, I think, part of the thinking behind Jay's module retraction guide; it just gives people a zero cost way of having a click through and saying "Oh, okay, this is how module retraction works. Fantastic. That's gonna solve my use case." Done.

**Jon Calhoun:** Okay, so I think that about wraps it up. Is there anything else that you guys wanted to talk about, mention, to bring up, that I did not get to?

**Paul Jolly:** Nothing. That just covers it from--

**Marcos Nils:** Yeah, I think that's it from my side as well.

**Paul Jolly:** We can say a big thank you to Carmen again.

**Jon Calhoun:** Well, Paul, Marcos - thank you for joining us and explaining everything. Carmen, thank you as well. It's been a while since we've had you. Kris, it's good to have you on your first episode as a host. This is your third or fourth episode in total though...?

**Kris Brandow:** Um, third.

**Jon Calhoun:** Okay. It almost doesn't count at that point then, I'm sorry. \[laughter\]

**Carmen Andoh:** You're old hat by then.

**Jon Calhoun:** Once you've been on the show twice, it's just like "Yeah, he's just here all the time."
