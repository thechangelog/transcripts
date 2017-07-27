**Adam Stacoviak:** Welcome to our Spotlight Series titled The Future of Node, recorded at Node Interactive 2016 in Austin, Texas. We produced this in partnership with the Linux Foundation, the NodeJS Foundation, and it's sponsored by IBM and StrongLoop.

**Break:** \[00:00:44.25\]

**Adam Stacoviak:** In this episode we talked to Gaurav Seth, lead program manager of Chakra and TypeScript, as well as Arunesh Chandra, program manager of ChakraCore. We talked about their polite fork of Node to introduce the community to Chakra, the high-performance Javascript engine that powers Microsoft Edge. We also talked about why Microsoft is so interested in the Node, the future of Chakra and ChakraCore, VM neutrality and more. Listen in.

Let's start out with "Why Node inside of Microsoft?" Why is Node important to Microsoft?

**Arunesh Chandra:** You know, Node as a platform has been having an amazing growth over the last few years, and it's right in the space of Javascript and Javascript developers. One of the big directional things for us or a guidepost for Microsoft is really any developer, any app, any platform... So kind of looking at that guidepost that we are after, where we wanna go support any app, any developer and any platform, Node is a very important aspect, and that's why it is very important to us to make sure, because it plays into our developer community that we wanna go reach out to.

**Adam Stacoviak:** How does it play into the overall platform when we talk about Windows as a big platform? Is that what you mean by that too, in terms of an operating system? You mean devices...? Obviously, we're growing from just simply desktops to more devices now; what do you mean by a platform?

**Arunesh Chandra:** Right here by a platform I was not really specific to any OS, but even if you look at -- Node in itself is a platform which people use to write the backend stuff. There's also other things like iOS, there's Apache... There's all these technologies. These technologies can come together to form a platform that any developer uses.

In terms of the platform, you can imagine the platform also constitutes the operating system; it's the app stack that people are using, so it's the app platform. So it's both of them, in a way.

**Gaurav Seth:** High-level \[unintelligible 00:03:06.11\] was that Node is a really fast-growing application framework, and from the history, Microsoft is always about developers' productivity. There's a huge growth in the developer interest in Node and that's what has us excited about this platform, as well. We're going where the developers are.

**Adam Stacoviak:** That makes sense. That brings us over to the next topic, which is VM neutrality. To go where the developers are, you have to have neutrality, you have to be able to take it beyond V8. I think it was roughly nine months to a year ago, if my memory serves me correctly - you guys forked Node and did something with ChakraCore where you were able to speed it up, and you had your own fork and that was sort of like the way you even got back into -- it might have even opened the door for Node involvement with Microsoft... If I remember that correctly.

**Arunesh Chandra:** \[00:04:10.25\] Last year, we announced our involvement with Node ChakraCore. That stemmed from the fact that the Windows 10 IoT Core was being brought up, and the default Node did not target that platform because of the instruction side difference in that platform. And Chakra being part of that system already, we thought we could bring Node to be powered by an optimized Javascript engine on the platform, and that's how we got started with Node ChakraCore.

We've submitted a PR earlier this year in January, with the fork we had.

**Adam Stacoviak:** My time was roughly correct, then... Roughly nine months ago I think it was -- almost a full year... Ten months or so.

**Arunesh Chandra:** Yeah.

**Adam Stacoviak:** That's interesting.

**Gaurav Seth:** The one thing I would add there though - you did say that it was a fork... It was a fork only in the GitHub sense...

**Adam Stacoviak:** Yeah, I didn't mean -- exactly...

**Gaurav Seth:** Yeah, so...

**Adam Stacoviak:** Yeah, for the listeners out there, I meant a "good" fork... Which is great, because the platform GitHub, social coding - that worked out great, because you all at Microsoft wanting to target any app developer, any device, that mantra you're sort of driving upon, being able to have that freedom in open source to do a polite fork, in an intention to further expand. And today, fast forwards to I think two days ago's announcement (or yesterday's announcement) of VM neutrality, and this bigger play with IBM, you guys, Microsoft... If I remember correctly, IBM, Intel, Microsoft, Mozilla, Node Source - joining forces around Node with VM neutrality... How important is that to developers?

**Arunesh Chandra:** VM neutrality is something that is really important for Node developers in terms of being able to run their code on any device, any workload, any platform, in a highly optimized way. Currently, you can run Node on a lot of platforms, but with the VM neutrality the vision is that you have this ubiquitous Node platform which is optimized for that particular workload or platform device type. That is the ultimate vision for VM neutrality.

The way to achieve it is that you allow different VM vendors to kind of plug into the Node infrastructure, to be able to provide that kind of optimization. There's a growing trend of people trying to fork Node into creating their own optimized version, and Node I believe has to kind of recognize that trend, and kind of bring it in its fold to enable the growth we envision for it.

**Gaurav Seth:** I like what Arunesh is saying here... I think I look at it from three perspectives - from the perspective of people who write code for Node, which is the Node module authors. I think for them VM neutrality or the work that is being done helps shield them from the changes that keep coming in Node in itself. For example, if you move from one version of Node to the other version of Node, many times if native module authors have a dependency, they would have to recompile their stuff as they move ahead. That is the advantage for them, that it kind of shields them from Node in itself moving.

From a consumer perspective, like "I'm a consumer of Node" - for them it's like, "Hey, if there are these modules that target this new VM neutral Node, I don't have to worry about revving up my modules every time I rev up Node. So you're making those two pieces independent in itself, so that you don't have to rev it."

\[00:08:14.05\] And from a platform or a Node ecosystem perspective itself, I think getting to the VM neutrality is almost like analogous to having more than one browser available to everybody, so that there is more than one party which is interested in making sure that we are pushing Node forward. For example, we work with the V8 team very closely in the web client space. We go together in TC39, we often go into design reviews, we've been designing things together alongside V8, Mozilla and other guys that own Web Assembly.

Getting more than one VM player into the Node market means that now more than one of the VM players can actually start thinking about the server side functionality for Javascript, and kind of think about how do we have to evolve that also in a period of time.

In a nutshell, I think all three win - the people who are writing code, the people who are consuming Node, and even the Node platform in itself.

**Adam Stacoviak:** That makes a lot of sense. As a Node developer, as a module developer, as you mentioned, the last thing you wanna worry about is testing multiple platforms or having that concern... Writing once, and because of this VM neutrality being able to not have that concern as a module developer certainly makes it that much easier, because Node has a very UNIX-like function where a lot of things are broken out into individuals parts; that's why there are so many modules out there, that's why there are so many dependencies out there... Because of that. It's the way to do things.

For those out there though who may be listening to this that aren't very familiar with Chakra or ChakraCore, can you break down the difference between those two things? Because one is in the Edge browser, and ChakraCore is sort of the core code that anybody else can use... Is that right? Help me understand that.

**Arunesh Chandra:** ChakraCore, as the name suggests, is actually the core part of the Chakra (Javascript) engine.

**Adam Stacoviak:** Okay.

**Arunesh Chandra:** And Chakra Javascript engine powers the Edge browser and Windows 10. There are core parts of the Javascript engine, and then there are Windows-specific bindings around diagnostic APIs or bindings through the browser; if you add those on top of the ChakraCore engine, that becomes the Chakra engine that ships with Windows and Edge.

**Adam Stacoviak:** It was about a year ago, I believe, when Chakra was open sourced - is that right?

**Arunesh Chandra:** Yes, ChakraCore is open source, ChakraCore is cross-platform. Chakra, on the other hand, is \[unintelligible 00:10:47.12\]

**Adam Stacoviak:** Gotcha, okay. How important was it for the development of Chakra to open-source it? Obviously, we're seeing a new Microsoft in terms of embracing open source, but why open source? How has that helped the overall mission of the Edge browser being more any developer, any device, being more open - this neutrality, so to speak, generally across developers? How has open-sourcing it made a big deal for the development of it?

**Arunesh Chandra:** ChakraCore open-sourcing has provided us the opportunity to really work with the open source community and developers. There's a lot of people out there, and it has allowed us to engage with that community and organically grow the platform for us. Also, it has given us an opportunity to reach a larger audience with the technology we are building, and allow the innovations coming out of our technology to reach a larger audience.

It comes both ways: we get to benefit from really organic discussions and PRs and reviews that happen online on our repo, and on the other hand we are able to also bring our innovation to a larger audience in that way.

**Gaurav Seth:** \[00:12:12.18\] I would say that the bigger focus really was mostly about -- we had a technology that we had worked on that we felt was in a good place, and given the model we were in, we had it restricted only to be used in the Edge browser. We really wanted to open up for any sort of developer to come and start using it if they would like to, and at the same time there was also this Node effort that was going on, and we were seeing how much momentum the Node community had behind Node, which was an amazing example, right?

**Adam Stacoviak:** Right, it's definitely been fast-paced and growing fast.

**Gaurav Seth:** So Node was one example, TypeScript was another example, because our team works very closely with TypeScript as well, and we were looking at that project and seeing what an amazing momentum the community created for that project, as well. And at that point in time it was kind of clear that "Hey, if you want people to build amazing things with your stuff, you should go open source", and that was one of the biggest motivations. Like, "Hey, let's work in the open, let's innovate in the open, let's help the community in whatever way we can."

**Adam Stacoviak:** Rewinding back to that moment, what had to happen to go from Chakra, which is with Edge's bindings, certain things that Microsoft \[unintelligible 00:13:29.02\] needs to have to do Windows 10 and various things? What was the effort needed to top down? How did you have to sell it? Was it developer up, was it executive down? Talk to me about the process to kind of take it from just simply Chakra to ChakraCore being open. What effort had to happen to the codebase?

**Gaurav Seth:** I think it was neither -- I mean, it was a pretty flat thing... It was neither top-down or bottom-up. But I would say it was more bottom-up than top-down. I think as we were working on things, it was all about figuring out where the people are, where the momentum is, what is the next set of things we should be doing.

The point when we went open source - there were things where Chakra was already leading in terms of the language support it had. It was already leading in some of the \[unintelligible 00:14:12.02\] benchmarks that we saw. Chakra has an amazing architecture which is a dual pipeline of having an interpreter and a JIT compiler, both traded together in place.

**Adam Stacoviak:** When you say JIT you mean Just In Time, right?

**Gaurav Seth:** Just In Time, yeah.

**Adam Stacoviak:** Okay, just making sure.

**Gaurav Seth:** So when we were kind of looking at the technological roadmap for us, I think from what we wanna do, I think we had achieved quite a lot of it. Nothing is ever done. It's \[unintelligible 00:14:41.04\] always improving, in continuous improvement, but at that point in time we were like, "Hey, what is the best big thing that we should do for the community, to help the community?"

It was suddenly becoming obvious that "Hey, we should not keep ourselves restricted to only one platform and be there, because that is not the way for us to really grow and help the community." We started out conversations internally and we just decided that it's the best thing for us to go and maybe open-source the thing.

In terms of the technical steps that you asked, like how much of an effort it took us, it was actually pretty minimal. One of the reason was, you know, when you think about the bindings we had to the Edge browser, those were already gone when we had started working on supporting the Windows 10 IoT platform, because even when we enabled the IoT platform, that IoT platform could not work with the Edge specific binding. So we had already written this new modern hosting API as we call it, to enable that scenario. It was all about just going and making sure that we open up and we open source that particular thing, and say "Hey, here's the format that you're gonna be using."

\[00:15:54.10\] So we had already been working on creating -- because today, if you look at it... Or actually even when we went open source, it was not only Edge which was using us... Azure DocumentDB uses Chakra, there's Outlook.com that uses Chakra. Both of them are server or cloud scenarios where Chakra was not being used in a web browser context, but it was more used in a SaaS platform context in the cloud. So there were already uses before, and it was just about like "Hey, if folks at Microsoft or products in Microsoft can use it, let's just open it so that anybody in the community should also be able to use the technology..."

**Adam Stacoviak:** That makes a lot of sense, the natural way of trying to open it internally... A lot of people -- I think we even had this conversation with some of your friends at Microsoft on the TypeScript team; we talked about inner open source, that kind of thing. Because you have a natural desire to use Chakra inside of Microsoft in various different platforms within Microsoft, you naturally created ChakraCore, and why not just open that up to everyone else?

**Arunesh Chandra:** Yeah, that's true.

**Adam Stacoviak:** For those who may be catching up - I'm still catching up to myself, it's a fast-paced world... I think we've broken down Chakra to a good degree, but give me the 10,000 ft. overview of what Chakra is. I know it's not a runtime, it's the engine inside of the Edge browser that runs Node, is that right?

**Arunesh Chandra:** Yes, that's correct. Chakra is the Javascript engine that runs and powers Microsoft Edge, all Javascript applications on the Windows platform, and multiple services like Azure DocumentDB, Outlook.com etc.

**Adam Stacoviak:** Gotcha. I just wanted to cover that real quick, because it's always catching up for me, too. It's just... New kids on the block, so to speak; you're one year old, so to speak - maybe a little more than that, but still catching up, so...

Let's talk about the future then. Where is Chakra going, where is ChakraCore going? What should Node developers be looking out for for the future of Chakra and ChakraCore?

**Gaurav Seth:** I think one of the biggest things that we are working towards is really taking Chakra cross-platform. When we open source Chakra back in January, it was a Windows-only platform and at that point in time it was clear that even to come true to the mantra of "any developer, any app, any platform", we have to make sure that this technology is not Windows-only and it is available on other platforms, as well.

We've been making pretty good progress, and Chakra is now available both in Linux, in the Ubuntu x64 version, as well as we did a preview on the Mac OS X yesterday, that is available. So on these other two platforms we have a fully functional Chakra engine now, but it is still not as optimized as we would like it to be so that it is sort of on parity with the Windows version. There's still some work that is pending in the JIT compiler and the garbage collection pieces, which we are working on.

The big thing for us is to make sure that Chakra goes cross-platform and is almost on par in terms of what functionality, performance, and of course, the fundamental characteristics across all of these platforms. So that's one of the biggest things that we're working on.

Outside of that, I think there are a bunch of innovations that continue to happen on the engine there. We've been working very closely with the Microsoft Research team to advance or innovate the state of the art of Javascript debugging, and they have been experimenting with their stuff on the Chakra engine. We call that technology time-travel debugging.

**Adam Stacoviak:** Interesting.

**Gaurav Seth:** We showed a demo yesterday. Up until now, we only had time-travel debugging work in like -- you attach and run, and you can move back, and yesterday we just previewed the ability to record a snapshot in Javascript and replay that.

**Adam Stacoviak:** Wow.

**Gaurav Seth:** \[00:19:58.10\] That's something new, and it's all happening in the open. It's not that any of that code is behind, it's all in the open. I think that is another big thing that we're working on, and our goal is to make sure that we get that technology to a stable state so that we can start shipping that in ChakraCore, and maybe with Node, as well.

I mean, Node would probably be the first target. That's where we started, with Node.

**Adam Stacoviak:** When you say "in the open", do you mean open in documentation, open in GitHub issues...? Describe open...

**Gaurav Seth:** The code is in the open. The code is on GitHub.

**Adam Stacoviak:** Okay, the code is in the open.

**Gaurav Seth:** Issues are in GitHub.

**Adam Stacoviak:** Of course. So if someone's listening and they're like, "Hey, I wanna get involved in this", the easiest place to do that is just to go to the GitHub repo...?

**Gaurav Seth:** Yeah. ChakraCore GitHub repo.

**Adam Stacoviak:** Gotcha.

**Gaurav Seth:** You've got it all... I mean, our roadmap is completely open, our code is open... It's all MIT-licensed, so it's very easy to get started and to consume...

**Adam Stacoviak:** Right. This is a new thing from Microsoft, I'm excited. We had Bertrand Le Roy on the Changelog not long ago, talking about .NET Core, open sourcing that; I believe the show was about 1.0-ing that and what not...

So we're seeing a new resurgence, so to speak, from Microsoft in the fact that you're embracing open source, you're doing things in the open... As developers inside of Microsoft, how does that make you feel in terms of the future of Microsoft, and then also for developers? How does that new Microsoft make you feel?

**Gaurav Seth:** It feels beautiful from the inside.

**Adam Stacoviak:** Have you been there for a long time?

**Gaurav Seth:** I've been with Microsoft for over 10 years.

**Adam Stacoviak:** Okay, so you're seeing the transition real-time, then.

**Gaurav Seth:** I've seen the transition and I think the last two, three years have been the best ride in my career till now.

**Adam Stacoviak:** Wow...

**Gaurav Seth:** It's just the amount of intense interactions you can have with developers, how much confidence you can instill in them when you open the codebases and say, "Hey, whatever we are doing, we're doing it in the open so that you can take a look at it. You can always contribute back to it." It's a completely different world from that perspective; you're just opening up, you're being transparent to people, and people love it if you're being transparent to them.

**Arunesh Chandra:** That's the exciting part... The open-sourcing effort of Microsoft is also well received by the community, and there's good appreciation...

**Adam Stacoviak:** Yeah, definitely! I'm excited about it.

**Arunesh Chandra:** Yeah, so whenever we go out to conferences and stuff like that, I always meet people and the first thing they say is "This changed Microsoft, this type of open source activity happening, and we love it." That gives you more fuel to go and keep powering through all this.

**Adam Stacoviak:** I missed your demo yesterday, but Gaurav, you had tweeted that Arunesh is demo-ing all this on a Mac for the first time ever in an event. How big of an event was that to do it on a Mac? What's the big deal there?

**Arunesh Chandra:** Node ChakraCore was only recently made available on Mac, so it was certainly a very exciting time, for the very first time to show that demo on a Mac. So cross-platform is a big deal, and we are working towards it. As Gaurav was saying, we are still trying to optimize it. This was a preview bit that we were doing when demo-ing, and it was really exciting to show this technology on a Mac.

**Adam Stacoviak:** So if the community out there is listening to this and they're thinking "Man, I wanna get involved in ChakraCore... Even from an outsider perspective, I wanna dive into the code, I wanna look at the roadmap, whatever..." - give some waypoints. We talked about going to GitHub, but what's over the horizon? Is there issues people can tackle? How can the community step in to help you take ChakraCore to the future?

**Gaurav Seth:** I'll talk about the Node ChakraCore project where the TDD technology we are building is still working with the MSR (Microsoft Research) to really push the state of the art here. The community that wants to get involved in this - the best way would be to go to aka.ms/nodetdd.

**Adam Stacoviak:** \[00:24:15.29\] Okay, we're gonna put that in the show notes.

**Arunesh Chandra:** Yeah, and there I've listed out ways to get involved. One of the best things that people can do is try this new technology on their own app and see how this works, file issues, report problems... If you wanna get into code, maybe just dive into code and see if there are issues they can fix and contribute back. Those are some of the ways they can tangibly and immediately help us harden the technology we're building.

**Gaurav Seth:** I think that is one part of it. There is another part... The part Arunesh was talking about was really directly getting into the ChakraCore bits. The other piece is also really the Node ChakraCore piece, wherein we're working with the API Working Group to evolve these new -- what we call Nappy, which is the new Node stable ABI layer, or APIs.

**Adam Stacoviak:** What is it called? What's the acronym?

**Arunesh Chandra:** It's Node.js API.

**Adam Stacoviak:** Okay.

**Arunesh Chandra:** What it does is it provides an ABI stability guarantee across versions of Node, and even \[unintelligible 00:25:23.26\]

**Adam Stacoviak:** Okay.

**Gaurav Seth:** Coming back, one of the other places people can really contribute is to join in that effort and help Node really have the solid Nappy layer. This is basically, in essence, if you think about it, this is the backbone of VM neutrality. We all need this layer and we wanna make sure that this layer is great. It's seamless from a functionality perspective, it has great performance etc. So that's another big place where people can contribute, and it's all, again, in the open; it's in the Node Core project, in the API Working Group.

**Arunesh Chandra:** Yeah, and the part that could also use a lot of community help is the Nappy project.

**Adam Stacoviak:** Where can I find this Nappy project? Is it on GitHub as well?

**Arunesh Chandra:** Yeah, it's on GitHub. You can go to GitHub.com/nodejs/ABI-stable-node. That repo also has steps to get involved. As Gaurav was saying, Nappy is supposed to be the stepping stone towards VM neutrality. This provides the fundamental piece of technology where we create the stable Node API for module developers. The current stage we are in - it's a very early prototype stage right now.

We have converted two native modules onto this API, and the third one is being converted right now. The help we can use here is that people who own native modules, they can come and take a look at these APIs, try to convert them; if they find some gaps in the APIs we have provided, they can file an issue and let us know that "Hey, there are some gaps in this API", or if there's performance concerns... Things of that nature.

Or, if people have a folk version of Node, with some sort of runtime of their own, we actually invite them in this project as well, to be able to give us a perspective of the API design we are doing from their VM point of view. Because currently we are involved -- there's some expertise in the V8 way of functioning, certainly we bring the ChakraCore perspective, we have also folks from Mozilla who provide the SpiderMonkey perspective on some of these things...

\[00:28:12.19\] We actually want a more diverse set of VM vendors to kind of really test out this API design we are currently working on. So there's a ton of ways to get involved in this, and certainly this is an exciting area for the future of Node.

**Adam Stacoviak:** I was looking over the docs as you were talking there, so I think I've broken it down - Nappy stands for Node API...?

**Arunesh Chandra:** Yeah.

**Adam Stacoviak:** Okay, because I was like, "What's Nappy?" I was catching up as we were talking here...

**Arunesh Chandra:** Yeah, we'll probably change the name to call it N-API.

**Adam Stacoviak:** N-API? \[laughter\] It's almost the same...

**Arunesh Chandra:** It sounds cooler.

**Adam Stacoviak:** It does sound cooler. So let's talk about anything else that I might have missed. We're sitting down here, we're at this conference, Node Interactive, you gave a demo, we're excited about this new VM neutrality, a lot of stuff is changing here - a lot of stuff for the good - but what is out there that we haven't covered yet that's just important on your mind? So that anybody listening to this can see where Microsoft is taking Node, and the involvement in Node, and obviously Chakra and ChakraCore.

**Gaurav Seth:** Yeah, I think one of the big pieces that we have not talked about is stuff that's happening outside of ChakraCore, and the work that we are doing for Node in general. One of the things we're doing is, given that -- Node ChakraCore is one piece, but one of the efforts that we've been working on is like, for today's Node developers, you wanna have a great experience of allowing them to use Node on Azure as a cloud platform.

We've been doing a lot of work, ranging from "How do you really improve your inner loop scenarios?" When I say inner loop, it's like as soon as you start to code up your stuff right from editors such as VS Code, there's a lot of effort that has been going there... How you use the programming language; there's a lot going on in TypeScript that helps and works along with VS Code and powers some amazing experiences in VS Code, to kind of now enabling and working with Docker and the container servicer to bring all of these things light up on Linux, on Azure... Which people typically think like "Hey, you talk Azure? Azure maybe is just like a Windows cloud", which is totally incorrect.

So kind of taking these things - VS Code, TypeScript, Docker is working on Linux, on Azure, either in the form of PaaS or Azure Container service, bring your own container... Then, once you have your app deployed, how do you go take the next step with app insights, and have some amazing experiences from a production diagnostics perspective? That is one.

The other thing is having the ability of full stack diagnostics experiences in VS Code, which is like "Hey, I've got the backend and frontend both in Javascript - how do I target both of them in the same editor?" So there's actually a lot of work that's going on right now, to make sure that we kind of go nail the end-to-end experiences, so that as developer start working with Node, they have an amazing amount of productivity and they can get to the end solution that they wanna get to, in as minimum time as possible, let me put it that way.

**Adam Stacoviak:** Awesome. Well, let's leave it there for now. Thank you so much for sitting down with me, thank you for all the work you're doing on Node and playing a great part there from Microsoft's perspective. I'm excited for the future of both of you at Microsoft and the future of Microsoft itself with being far more open to open source. I'll say it for the entire community - we're excited about that change of heart from Microsoft. We're excited to have you all back on the Changelog and doing fun stuff with us, so it's a bless seeing you guys here.

**Arunesh Chandra:** Yeah, thanks for having us over.

**Gaurav Seth:** Thank you, Adam.
