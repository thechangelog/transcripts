**Jerod Santo:** We're here with the I think legendary Scott Guthrie, and his legendary red shirt...

**Adam Stacoviak:** I agree.

**Jerod Santo:** Fresh off a keynote, day two at Build. You've just finished your keynote. Very good. Curious - I mean, you're so cool, calm and collected up there... I'm sure that's from years of experience. Do you still get any nerves at all when you do these keynotes, because there's thousands -- is it thousands of people? I think it's probably a few thousands, so that's a lot of people listening to every word. Any nerves at all? Or is it just like old hat now?

**Scott Guthrie:** I still get -- I don't necessarily get nerves about being on stage. I think the biggest thing that -- one of the things that I like to try to do is live demos in my keynotes. And so with live demos, there's always a little bit of -- you know, I hope the network works, I hope...

**Jerod Santo:** ...nothing goes wrong.

**Scott Guthrie:** ...nothing goes wrong, and... You know, it is live, and so sometimes people do click the wrong things, or accidentally close a window... So that's the only part in the keynote where I sometimes hold my breath a little bit. And thankfully, today both the live demos --

**Jerod Santo:** Very smooth.

**Jerod Santo:** ...were super-smooth, and all the speakers were awesome. So it's fun. And you know, a little bit of adrenaline makes it fun. If it was no stress, then it might be a little boring.

**Jerod Santo:** You don't want to be too comfortable up there. One thing I noticed about these keynotes is that it's all very orchestrated. I would be nervous not having a clicker to just advance to the next slide... Someone's in charge of that, so it's a team work thing. But then you're relying on somebody else to like transition at the right time, and you don't want to talk too slow... Those are the things that make me nervous up there. I'm sure it's always a concern for everybody.

**Scott Guthrie:** Yeah, it's only in the last year that I've given up my clicker. It's always been comforting to have it in my hand. But when you have animated slides that show architecture, getting your \[unintelligible 00:05:28.19\] You know, sometimes I get so excited, and I'll talk, and then I'll forget to have clicked... And so really in the last early last year, I think, I've kind of done the trust fall, and I now have someone backstage that clicks Next on the slides for me. That does make it a little easier for me. It means I can kind of focus a little bit more on what I'm talking about.

**Adam Stacoviak:** It looks more polished, too. The execution looks a lot smoother, like as if it's -- like Jerod said, orchestrated. Just very smooth.

**Jerod Santo:** A well-oiled machine. Very impressive.

**Adam Stacoviak:** Yeah. Very polished. The question I think though, having been through - this is day two, is the word AI being mentioned pretty much every slide. Are you excited about keeping to say AI? Are you kind of tired of saying AI? What is your personal perspective on AI at this moment, of having to say it so much?

**Scott Guthrie:** I like saying it. I think both because for a lot of developers it's still somewhat new... And I think also for the world and the industry at large, we're still fully comprehending all the use cases for how we can use AI. And I think it's a bit like when the internet first came out, or mobile phones suddenly became connected, and the iPhone moment, where people are kind of still in that "Could we do this?" phase... And I think that's sort of exciting, because it is very much a platform shift, and we're still in the early innings of kind of even understanding the art of the possible. And then everyone's trying to figure out how to make the possible happen.

**Adam Stacoviak:** Well, even thus far at least, it's been more of skill stacking, where Azure is matured - and you're obviously still advancing the platform; it's the supercomputer for AI, for the world, as you say in your keynote... But all the discussion has been around integrations of AI; how to essentially give this superpower to all of Azure. All of Copilot. All of the agents that you can build yourself. Which I think is different than the last Builds we've been to. We've been to one Build before this, right here in this very city... And I think even then, it was around loving GitHub. I think the acquisition was still fresh the last one we were here. Was that 2018, 2019?

**Jerod Santo:** Something like that...

**Adam Stacoviak:** Something like that.

**Jerod Santo:** Ancient history.

**Adam Stacoviak:** Yeah, almost ancient history, basically. But now it's about the integration of it. So you have to be excited, because that is what the next layer of functionality is on top of the supercomputer, is the AI that you can not only leverage yourself as a platform, but give those feature sets to others to leverage as well.

**Scott Guthrie:** \[08:01\] Yeah, it's been a great ride with GitHub. One of the things we talked about when we acquired GitHub was recognizing the responsibility we had, which is GitHub is a very loved developer tool; it is the home of open source...

**Adam Stacoviak:** You're wearing the shirt, too. Your GitHub hoodie.

**Scott Guthrie:** I've got my GitHub sweatshirt on. And we recognized when we acquired GitHub that there's a lot of responsibility. It is open source, it is open platform, it needs to support multiple clouds... And I think we've tried to be good stewards, similar to what we've done with VS Code, and similar to what we've done with .NET, of recognizing that we're going to maintain the openness, we're going to maintain the open source, and we're going to also do good integrations, both in terms of across our products, but have it be an open platform. Even this week we talked about the open ecosystem around plugins to GitHub Copilot. We've announced a whole bunch of integrations with I think 20 other platform companies and tools vendors, to make sure that we also just keep honoring that spirit of making sure that GitHub is truly open, and truly developer-first, in terms of the methodology.

For AI, one of the things that we showed today that I'm also excited about is how to use GitHub with AI. And obviously, some of that is for the developer with GitHub Copilot. But I think also, the new support for what we call Prompty, which is an open source library, that we're embracing with our Azure AI platform, so that you could basically check in artifacts into your source code, which basically describes your prompt that integrates with a model that can be versioned, that can be source-controlled, that can be unit-tested, and is very developer-friendly. And that's a change even from our last Build a year ago, where we showed very much using our Azure AI tools to do all the development, which were incredibly powerful... But for a developer, it's like "How do I write code? How do I version-control? How do I do CI/CD?" And part of what we showed this year is "How do you still use those great Azure AI capabilities, but also how do you have a very developer-first, developer-focused experience?", which ultimately has text files, source code... Again, source control integration, and CI/CD natively built-in.

**Jerod Santo:** Raw materials. Prompty - it's a file format, right?

**Scott Guthrie:** It's a YAML-based file format, and basically it allows you to kind of instantiate a connection to AI, and to a language model. And if you use an LLM, typically you're providing prompts to the LLM. I mean, you certainly can concatenate that as a giant string as developer. But the nice thing about the Prompty file is it is a --

**Adam Stacoviak:** It's readable.

**Scott Guthrie:** It's readable. And again, you can check it into source control.

**Jerod Santo:** Yeah, exactly.

**Scott Guthrie:** And you can write unit tests against it. So what we're trying to do is kind of provide...

**Jerod Santo:** Primitives, or...

**Scott Guthrie:** Primitives, exactly, in an open source way.

**Jerod Santo:** That's awesome.

**Scott Guthrie:** So it is an open source library, there's nothing exclusive to us... But you're seeing a sort of integrate GitHub with Prompty, with Visual Studio Code, and then making it work first-class with our Azure AI platform. But I think the combination is very powerful for developers, and very natural for developers.

**Jerod Santo:** Yeah. I mean, you guys are trailblazing, for sure. There's so much to figure out here... And certainly, if Azure can figure it out really, really well, it makes Azure such an attractive platform for people to build on. You showed a lot of people that are using it, 30,000 companies I think was referenced that were like starting to do these things, to build their own Copilots and stuff... And then I was out in the lunch area during lunch, talking to a couple of people like "Hey, are you using this stuff?" and everybody says no. Because I just feel like there's almost one percenters at this point of the trailblazers, the really, really bleeding edge people, and then the rest of us common devs are just like "No, I'm not doing anything." What do you say to the 99% - I'm just making up that number - the people who haven't adopted anything? There's so many questions, so many potential pitfalls, you don't know where to get started, etc. What do you say to those folks about how they can bridge that gap?

**Scott Guthrie:** \[12:25\] I think one of the things that's interesting about AI - and I think this is similar to kind of, again, going back to whether it's the internet, or whether it's kind of the iPhone revolution, is it has entered the zeitgeist of people. And so even though there's lots of developers that haven't built an AI application, I think it'd be hard to find a developer on the planet who hasn't tried ChatGPT, who hasn't tried some generative AI app. And increasingly, we're seeing just millions of developers that are using GitHub Copilot as part of their day to day activities.

So I think generative AI is something that we're all -- most developers now are using in some way, shape, or form, or have certainly at least tried. And to your point, I think where we are is still in the early innings; it's sort of 18 months since ChatGPT was unveiled... And so people are still trying to figure out "Okay, how do I actually pivot to be an AI-first app? How do I incorporate AI into my app?" And part of what we try to do with Build is not just talk about the science and the art of the possible, but actually from a practitioner perspective "Here's how you do it."

And the first demo, or one of the first demos in my keynote was showing how you build a customer-facing chat experience into an existing website, or it could be a mobile app. And things like our Copilot Studio are really designed so that you can actually safely and securely build your first app, integrate it into an existing app, and not have to be a data scientist, not have to understand groundedness.

You know, Copilot Studio isn't going to be the tool for every scenario, but if you're looking to kind of build 80% of solutions, or 90% of solutions, it's probably good enough out of the box. And then what's nice is it has that no clips extensibility, so that you can call any API. And that was sort of the second demo that we did, that was live in the Azure AI section, where we used Python, we used Prompty, we basically grounded a model, it could use vector databases etc. And I'd probably encourage people to start and build a simple app using Copilot studio, and then as a developer keep going. Hopefully, what we're showing with each of the events that we're doing, each conference, it is becoming easier and easier. And ultimately, I do think in the next two years, I think pretty much every organization on the planet is probably going to have a custom AI app that they built.

**Jerod Santo:** Yeah.

**Scott Guthrie:** And again, similar to other platforms waves, like the web, or like smartphones... Everyone has one, and everyone has built an app for it. And I think that's what makes being a developer so exciting, is there's always these types of platform waves happening, and it's an opportunity to keep learning new tools, and become even more valuable.

**Jerod Santo:** Ride the wave. How far into the Microsoft stack or the Copilot stack do you have to be in order to start dipping your toe in the water? If you're just a Python dev, who maybe uses open source stuff generally... Do you have to be like all-in on Microsoft to try some of the stuff with you guys, or how does that work?

**Scott Guthrie:** Not at all, really. I mean, if you look at the demos we showed in the keynote, it's Python with VS Code. You could run it on a Mac, or on Linux, or on Windows, using GitHub. That was the core editing experience. And we did log into an Azure AI subscription, but it can be with any browser or any platform.

**Jerod Santo:** Sure.

**Scott Guthrie:** \[15:58\] And you didn't have to be very deep at all in terms of Azure in order to kind of do everything that we showed. And what's nice also about Azure is we have world-class Kubernetes support, and you saw that with our AKS automatic support that we talked about as well in the keynote... So it's really easy to stand up a Kubernetes cluster, it's really easy to deploy a web app, whether it's Python, Java, Ruby, Node etc. It runs on Linux, so if you're familiar with Linux, great.

Our past services work with Linux, we've got great Postgres support, we've got great MySQL support, we've got great Redis support... So we're trying to make sure that when you approach Azure, you're not kind of having to learn a different OS, or a different tool chain, or a different language... And you know, many of the same kind of core building blocks, like Kubernetes, like Postgres, like Linux, like MySQL, we just provide as a service. And as a result, it should be very easy to approach.

And even with our Azure AI platform, we obviously have our Open AI models in there, which are incredibly powerful, and very unique to Azure. But we have Mistral, we have LLaMA, we have Cohere, we have 1,600 other AI models in our catalog... And we do provide our models not only as models, but also as a service. So you could just, say, stand up a LLaMA or a Mistral model, and --

**Jerod Santo:** Right. Hit an API.

**Scott Guthrie:** ...and hit an API. And you don't even have to think about managing or operating the backend.

**Jerod Santo:** That sounds nice, because I always think about that as being some sort of huge pain in the butt. I haven't actually done it yet, because I like to just hit the API. But that sounds like a lot of work. Certainly, there's people who like that work and are good at that work.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** But there's those of us who aren't. Just a side note, how instrumental has VS Code become? I remember hearing the story of how VS Code began inside of Microsoft years ago. We interviewed --

**Adam Stacoviak:** 2017.

**Jerod Santo:** Yeah, we did a show on that. And it had meager beginnings, as many things do... But wow. I mean, the success of it, and now just - it is kind of the foot in the door to a lot of what you guys are doing. That's just pretty amazing, isn't it?

**Scott Guthrie:** It's been a fun ride.

**Jerod Santo:** Did you see that coming?

**Adam Stacoviak:** It's like long bets paid off.

**Scott Guthrie:** It's long bets, yeah.

**Jerod Santo:** Seriously.

**Scott Guthrie:** Yeah, there's certain things that we've done where I had high expectations... But VS Code has sort of taken far --

**Adam Stacoviak:** All the cake.

**Scott Guthrie:** 10x higher than my highest expectations.

**Jerod Santo:** Yeah, seriously. What a success.

**Scott Guthrie:** And I think with developers -- you know, developers don't like to be marketed to. You've got to earn developer trust, and earn developer love... And I do think with VS Code the team really embraced that ethos of really being opinionated, and really focusing on that developer love. And candidly, without the VS Code project, I don't think we could have done the GitHub acquisition.

**Jerod Santo:** Right.

**Scott Guthrie:** In some ways, it was the GitHub team looking at VS Code. And at the time, GitHub even had their own editor called Atom, if you remember...

**Jerod Santo:** Oh, yeah.

**Scott Guthrie:** And I remember the GitHub CEO saying "I use VS Code." And he's like "I love it." And that was a key part of even sort of showing Microsoft is very much a developer-focused company. And a lot of people don't remember - Satya mentioned it yesterday - 50 years ago we were formed as a developer tools company. Our very first product was a developer tool, which was Microsoft BASIC. Not Visual Basic, not \[unintelligible 00:19:34.11\] but actually the original BASIC.

**Jerod Santo:** Microsoft BASIC.

**Scott Guthrie:** So that developer tools ethos, and that developer focus has very much been from the very beginning of the company.

**Jerod Santo:** \[19:46\] Yeah. That's so interesting. I would say that VS Code definitely was instrumental in changing my mind about Microsoft. Because when I go back to my youth, I was very much like an evil empire guy; no offense. But I was like anti. And I could see, from our perspective, the change in attitude writ-large at Microsoft, towards the open source world. And it made sense with Azure, and like everything you guys are doing. In retrospect, it makes total sense. But I would still kind of like side-eye, and everything. And then VS Code was like "No, this is legit." Very impressive. Great tool. And now, it's just like -- now it's your foot in the door to all of this new AI functionality, which otherwise is very unapproachable, I think. And so just a cool, cool story, and such a success.

**Adam Stacoviak:** We've been seeing the thing run inside of VS Code, too. All the integrations. Seeing it run in the tool is just -- it's accessible to anybody. Anybody can go and install it.

**Jerod Santo:** It's just an extension, right?

**Adam Stacoviak:** It's just like one install away, basically; one service away. So the black box of AI is a lot more accessible to common devs these days, I think, with VS Code, for sure. And I liked the idea of a long bet paid off. I'm sure somewhere along the line it was like "Yes, this is a good idea", not "This is the best idea ever." And over time it's become the best idea ever.

**Jerod Santo:** It's when those download numbers took off. That's when they're like "Okay, let's double down on this thing." \[laughs\]

**Adam Stacoviak:** Right.

**Scott Guthrie:** And again, you kind of -- yeah, I think there's lots of companies, Microsoft included, in the early days, which would sort of say they loved open source, they would sponsor events, they'd put out marketing... But again, if you really want to prove your open source credentials, you kind of need to --

**Jerod Santo:** Show up.

**Scott Guthrie:** ...to show it and do it. Yeah. It's not about telling, it's about doing. And a lot of kudos even to the VS Code team. I mean, in the early days there was a sort of maniacal focus on performance, responsiveness, and really focusing on being an amazing code editor.

We had obviously Visual Studio IDE, which we still love... And it had lots of designers, and kind of a GUI at times first attitude. And the VS Code team basically said "No, we're only going to put things in VS Code that are really focused on code optimized editor. And we're not going to lose that ethos, we're not going to create a project system. We're really going to be optimized around a very opinionated perspective." And I think a lot of kudos -- that's partly why it's such a loved tool, is at its core it's still a very lean, efficient, fast, performant system. And you can opt in to add extensions, but we don't come with 1,000 extensions out of the box. And that's gonna be true as well with AI. But I think even today, showing the Prompty support, the fact that you can download the file, you do get IntelliSense, you do get colorization, you can run your prompt locally now, and set breakpoints inside VS Code and debug it... And it works with every model. It's not just -- we showed Open AI today, but it'll work with Mistral, it'll work with LLaMA. And the Prompty library is open source.

So just that having, again, that integration, I'm hoping that we actually -- you know, similar to the approach we took with VS Code, is really speak to developers, and really build something that developers love and want to use. It's not about marketing, it's not about keynote demos; at the end of the day, it'll be about "Are we driving real usage?", because it solves a problem that developers need a solution for.

**Adam Stacoviak:** I couldn't help but think about Clicky -- Clippy, though. Clicky. Clippy.

**Scott Guthrie:** \[laughs\]

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** You know, Prompty...

**Scott Guthrie:** It's a little different. But yeah --

**Adam Stacoviak:** Slightly.

**Jerod Santo:** They both end in y.

**Scott Guthrie:** They both end in y, that's true.

**Adam Stacoviak:** It's a nod, of sorts, I can imagine... Somewhere along the way the name resonated.

**Break**: \[23:49\]

**Adam Stacoviak:** One thing you said early on in your keynote, you said "Every app will be reinvented with AI." And you also said the data is the fuel to enable this. Can you talk about this also having this world's most loved developer tooling, GitHub, VS Code - we've been talking about that - and how do you think in the next maybe year, I guess till next Build, will AI be reinventing applications? How will we be doing that? Is it just the agents, is it Copilot? What are some of your thoughts on that?

**Scott Guthrie:** I think the thing that you're going to see over the next year or two even is I think you're going to continue to see kind of the AI use cases inside applications evolve. We have lots of scenarios, and we're doing it at Microsoft, where you have kind of a Copilot experience inside your existing tool. And I think there's gonna be an awful lot of that over the next year. And that's a very logical way that you can start to integrate AI conversation scenarios with natural language into existing workflows, into existing applications that you already have, whether they're a web, or mobile client.

I do think you're gonna start to see a point, and it's probably starting now, but I think you'll see it even more over the next year or two, where the model will invert a little bit, where instead of starting in an existing environment, and there's sort of this Copilot on the side, the Copilot becomes the primary environment. And maybe you still go to the other application for some scenarios, but more and more you're going to be able to you use natural language for more and more of the tasks. And I think consumers and end users are going to start to expect that.

And even if you look at, say, the Copilot demos that we showed a year ago, the ones we showed six months ago, and then the GitHub Copilot workspace scenarios we showed today, you're starting to see that evolution, where instead of "I started my code, I highlight something, I ask it for something" in Copilot, you can start to now ask multi-turn-style scenarios in natural language, and drive that experience. I think you're gonna start to see this application pattern evolve...

**Adam Stacoviak:** Shift, yeah.

**Scott Guthrie:** ...and as the models get richer, as developers get more comfortable with building these types of AI applications, I think that's going to be one of the big shifts that you'll see. And I think that's, again, not too different from when the web came out, or when the iPhone came out. Often these apps started very simple, the website started very simple, and then as people got comfortable with it, they became richer and richer. And the paradigm shifted from "Let's replicate what was previously done in Win 32 into a web app", to "No, let's actually having an optimized web experience." Same with the iPhone. Let's not just shrink our website, let's actually think about a native mobile app. And I think you'll see that same evolution with AI as well, where you start to see more and more native AI apps.

**Adam Stacoviak:** Yeah. It shifted too, the iPhone, with application design; more and more designers went essentially mobile phone-first. They began there with their designs, their initial footprint of how an application would work, and they expanded to different viewports, obviously. It sounds like this AI world will -- when it reinvents the applications, it's not so much just the application, but the way we interface with it. I think we've mentioned with Mark yesterday essentially how this single pane of glass, this single prompt can sort of be the interface, to some degree - and you're saying natural language. I imagine at some point potentially voice will become ubiquitous; it's already kind of somewhat there... But this interface is no longer "Let me go to different panes of windows, let me go to different things and do things." It's more like "I want to stand up a new cluster." And I just want to describe, "I need three nodes, I want Kubernetes, and I want this stack on there." Maybe a natural language processing prompt could be simply "Give me that." Versus me having to be a dev, literally clicking buttons on "I want these three nodes", and going and manually doing all these tasks. I that what you mean by the reinvention of applications, is the way we interface and act with them?

**Scott Guthrie:** \[32:32\] Yeah, I think as AI gets richer, you're gonna see a lot of these scenarios become more like an agent. To your point, instead of the dev having to click 8 things, or type five things in four different files, you can sort of effectively ask the AI "Change this number in my website to be highlighted more", and that might then update your CSS, it might update the text, it might update the HTML. And again, what's nice with GitHub is that you have source control, you have diffing tools. It's very natural to be able to see "Okay, what were all the changes that just happened?" and as a developer, you can review it, you can revert it, you can make different changes, you can commit it. So I think that that model with GitHub and source control works super-well with these types of kind of agent-based activities.

I think the other thing - and we showed this a little bit in one of the demos today - is you're also going to start to see the paradigm for AI shift from being synchronous, meaning you type something into whether it's ChatGPT, or Copilot, get a response, to more asynchronous, where you can sort of say "Okay, I want you to go work on a problem, ad get back to me." And that "Get back to me" might be immediately, but it might also be five minutes from now, or it could be tomorrow. And as we start to think about activities that we do as developers, you know, "Hey, cost-optimize this", or "Come up with recommendations for how I can cost-optimize this app that's running in my cloud." It might need to look at the usage for a day or two. It might need to go examine a bill, it might need to hit a couple of different systems.

Us being comfortable about having an agent that can go off and do that, and then get back to us, starts to open up a lot of activities and a lot of scenarios that I think will really change how we work. And ultimately, if we're successful, it will give every end user back a whole bunch of time. Because if you think back to what you did in the last day, and wrote down -- what you did minute by minute, and looked at that log, there's an awful lot of busy work that we all have to do in our lives, that hopefully AI will help automate more of, and allow us to actually focus on the things that we enjoy, and ultimately give us productivity that improves our lives, and the businesses we work for.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Is there anything in sci-fi that you point to, like Jarvis, or HAL 9000? Is there anything out there in sci-fi that you're like "This is --"

**Scott Guthrie:** Hopefully, it ends up differently than HAL 9000... \[laughter\]

**Adam Stacoviak:** Well, that may be a bad example. But hey, you can still be like "We like portions of that." Or even in WALL-E... I think WALL-E was HAL 9000-esque, and it was Sigourney Weaver's voice as the voice for the AI robot that was over this stuff. Is there any sci-fi that you personally lean on as just a nerd, that's like "You know what, if we could be more like Jarvis...?"

**Jerod Santo:** You're assuming Scott's a nerd.

**Adam Stacoviak:** Because Jarvis from Iron Man is kind of like "Hey, go analyze this for whatever and get back to me." That kind of thing is almost what Jarvis did, except for Jarvis was non-visual. It was simply a voice.

**Scott Guthrie:** Yeah, I think back to the Isaac Asimov books that I read as a kid... There's one -- I can't remember the name of it, but you had the detective pair, I think, and one of them is a robot, and the other one is a human. And I think that ends well. Yeah, I do think this ability where we can -- again, it's not about replacing; it's about, how do we automate our experience --

**Adam Stacoviak:** \[36:19\] Enhancing. I feel like it's an enhancement, yeah. To me. For now.

**Scott Guthrie:** Yeah. Well, even if you look at the world today, take the last two or three years where we've had higher inflation, in lots of places it's very difficult to hire workers, because there's parts of the world where people are retiring. There's more people retiring every year than entering the workforce. So I do think the world right now, thankfully, is desperate for productivity. And if you look at demographic trends, we're going to need more productivity every year, because we will have more people retire every year, than enter the workforce, probably from this point on, in most developed countries. So some productivity will help us in terms of improved quality. And we've got to do it responsibly. And I think that was also one of the reasons why in the keynote we showed so much around safety and responsibility, is we don't want this to be like HAL 9000. We do want to make sure that every developer thinks of safety and security, from the moment they start a project. It's not an after the fact, it's not after you've had an issue. No, we need to really design this upfront. Because there is bad stuff that you can do with AI as well. And that's probably why we're kind of building it into our platform and tools, and really trying to make sure we raise the consciousness of thinking about this, in the same way that we thought about SQL injection attacks way back in the day. These are just things that developers need to kind of think about, and guard against as they build great applications.

**Jerod Santo:** Yeah. It's kind of stuff that you can't just latch on top after everything's finished. You'd have to actually build that in at the foundation. So it makes total sense that you guys are doing that. I think as the platform operator, owner, runner - president, I guess, is the correct word - you probably geek out with what people are building on your platform, right? Of course, you could look at numbers like users and revenue and stuff, but what you're enabling people to build probably is exciting to you. We're at the very beginning. Like I said earlier, it's burgeoning. A lot of people haven't built stuff. But you showed a lot of companies doing cool stuff... Is there anything in particular or a few examples of like people who are leveraging Azure as an AI platform to build cool stuff right now, that you can share with us? Maybe plant a seed of inspiration for folks.

**Scott Guthrie:** Yeah, there's many, many scenarios. I mean, I think we talked about 50,000 companies using Azure AI already in production today. It's always dangerous to pick one, because then you upset 49,999 others.

**Jerod Santo:** Alright, good disclaimer. Now go ahead. \[laughter\]

**Scott Guthrie:** I think some of the stuff I get most inspired by is in healthcare. Partly because the healthcare industry has just gone through a super-difficult time with COVID. Physician burnout is at an all time high. This is an industry where there are fewer doctors leaving every year than entering the workforce. And peep doctors and nurses are just tired. And they've gone through a lot these last several years. And unfortunately, in parts of the world, including here in the US, the demands in terms of documentation are very high. And so part of what doctors don't like isn't that -- they like medicine, but spending two hours a night writing up your case notes from the people that you saw during the day - they don't like that. They'd much rather have dinner with their families and unwind. And if we can really add productivity to their lives and take that drudgery away, they have much more fulfilling experiences.

\[39:53\] And we're doing some work ourselves with Nuance, which is a company we acquired two years ago... And it's with clinical documentation. And now you can basically just put -- the doctor has a cell phone, ask the patient "Is it okay to record this conversation from my notes?" Pushes a button, and then the doctor can have a conversation with the patient, look them in the eye, have empathy, not have to take any notes. And at the end, it'll automatically create not a transcript, but actually a summary that you can save in the EHR, of the complete visit. And the doctor can review it, edit, save.

And we literally get love notes from doctors who are just like "This transformed my life. I now see my family, I'm spending -- I leave at the end of the day, and I don't have work I'm taking home."

And we're also - and we showed it in the keynote - working with Epic, who is the leading healthcare provider system. And in the keynote we showed scenarios where if you use My Chart, as an example... In the US, lots of people probably are familiar with My Chart. A lot of health systems expose it directly to patients. And it's where you can message your doctor. And it's great -- at the same time, sometimes doctors then have to respond. And if all their patients are sending them hundreds of mails a day, that his work. And what My Chart now does with the built-in Copilot support they've done is they can draft responses for the doctor, and it adds more empathy, it helps bring in a lot of the details, it helps the doctor understand, and potentially understand things they might have missed, based on the medical records and based on what the patient's saying.

It's a great example of leading to much better healthcare outcomes, much better patient experience, but at the end of day making physicians so much more productive, happier and more engaged with their jobs. And that gets me kind of excited, because it's -- I've literally had doctors cry in front of me, as they're describing how it's changed their life. And you know, that feels good. Cry in a good way.

**Jerod Santo:** Well, you give somebody two hours of their day back, five days a week, maybe more. And that's serious.

**Adam Stacoviak:** That's ten hours.

**Scott Guthrie:** Yeah.

**Adam Stacoviak:** Is that right?

**Jerod Santo:** Good math. Yeah.

**Adam Stacoviak:** Two times five is...

**Jerod Santo:** I mean, that's real time, like you said. That's not arbitrary.

**Adam Stacoviak:** At the same time, you also have this recorded record too, which is kind of like CYA, in some cases, with the patient relationship and the doctor relationship. There's some version of the thing that happened that's like "This is the source of truth. This was what was said, this was what was discussed." So there's probably some liability concerns that get diminished as a result of that, too. And then obviously, you have to have the opt-in for the patient. But we experience something just like that when we do our podcasts. We record in Riverside, and at the end of it, we get a summary, all the show notes, key words in it... And we don't copy and paste, we use it to save ourselves time. "This is what was said."

**Jerod Santo:** Yeah. It's a reminder.

**Adam Stacoviak:** It's pretty accurate. So we're the doctors in the podcasts \[unintelligible 00:42:59.00\] something similar, because that's like a patient visit. You sit down, you can be present, at the end it's transcribed, and we use what we can from it, and we don't have to sit back and say "What did we actually talk to Scott about?" Well, it tells us for the most part what we did, and we're just using that to build our summaries, and to do our intros, or whatever it might be. And if my doctor's doing a version of that in the medical field, that's awesome.

**Scott Guthrie:** Yup. And my example of an internal use case - it's not a product, but it's something that we've built... And I think for everyone that's in a DevOps world is going to ultimately use a tool like this, whether it's something that we ultimately productize or someone else does, is every time we have an incident, like an outage or something that requires getting a team of engineers to work an issue, we create an ICM ticket... And we have a team's room. And so the engineers will log in, it's audio and chat, and they work the case, or work an issue. And especially in the early stages of an issue, there's a lot of audio traffic on that team's room. And inevitably, as we bring in more engineers, they'll say "Can you bring me up to speed on what it's been discussed?"

\[44:13\] And sometimes people take notes, but they're often terse, because people are working the issue. And over and over you hear people describing a summary of the thing to the person, and then someone else joins, and then you describe it again, and then someone else, you describe it again... And I call it the fog of war, where people are trying to understand what's going on, they're bringing in experts... You know, I think every company that works in the DevOps world has probably experienced something like that.

We now use the Teams API to basically take the audio in real time, and we now use the Azure Open AI service to provide a real-time summary of the telemetry from our systems. And we have pretty good telemetry. Plus the Teams chat, which is text, but importantly then, the audio.

**Jerod Santo:** And it's time-synced?

**Scott Guthrie:** And it's all time-synced. It's basically summarizing -- every 90 seconds or so we update, "Here's the summary of where we're at." And so we can basically tell how many subscriptions are impacted, which resources, what dependency graph... Is there a root issue that's causing this sub service to be impacted? And the summary of the bridge conversation. And it's amazing, in three bullets, how we can actually summarize the issue. And if you'd asked a human to write that down, they'd never --

**Adam Stacoviak:** They'd forget it.

**Scott Guthrie:** They'd never be that accurate, and they would never be in real time... And there'd be someone who's just describing, who's having to type that up... And as someone who gets notified every time there's an incident, it's been great for me, because otherwise I'd join the bridge and listen. And now I can just on my phone, actually, keep an eye on it, and decide whether I need to join or not... Because I'm always getting kind of an update information. And that ability to kind of fix the fog of war, and actually help take stress out of our engineers' lives - it certainly takes stress out of my life, too... But also, more importantly, it means we actually solve issues faster. And again --

**Adam Stacoviak:** It goes back to the burnout, too.

**Scott Guthrie:** Totally.

**Adam Stacoviak:** You're not burning out, because you're not in the minutiae of what doesn't matter to you. You're actually effectively using your time, you're being with the people you need to be to do your job well for Microsoft. That's how you avoid burnout...

**Scott Guthrie:** It's much less stressful.

**Adam Stacoviak:** ...is focus on the things that matter, right?

**Scott Guthrie:** Exactly.

**Jerod Santo:** Well, it's even a job that nobody really wants... I mean, we talked about who's going to take MIDI notes, or whatever... It's either dictated by the boss, like "You're going to do it." "Okay. It's my job. I'll do it." Or it's like a volunteer thing, like "Hey, who wants to take --"

**Adam Stacoviak:** "I'm pretty good at it, I'll do it. Sure."

**Jerod Santo:** Yeah. And always that same person, who happens to be the more amiable than the rest, and they don't really want to be doing it... So this is work that nobody should have to be doing. And they're gonna do it, like you said, probably a little bit worse, because you have to be fastidious, you can't get distracted... Right? Then you can't be solving the problem with everybody else. You're just taking the notes. So I mean, there's so many small wins there that add up... It's just really cool.

**Scott Guthrie:** Absolutely. And it's fascinating. If you have someone who's a scribe, who's actually listening to a conversation, the typical human only kind of understands about 93% of the conversation. I think it's somewhere around there, the stat. So if you listen to this podcast, and then ask someone to write the summary of it, they wouldn't actually be 100% accurate; they would actually probably be low 90s. Even if you asked them to listen to a paragraph and write it out...

**Jerod Santo:** Just because we bring our own stuff, or why?

**Scott Guthrie:** Well, we're talking fast, we're going back and forth, there's context that we assume, that the person listening might not... And people bring their own biases, and their own - what have you.

**Jerod Santo:** And history, yeah.

**Scott Guthrie:** \[47:48\] It's interesting also, with some of the AI, once you can get to that kind of - I'll call it human comprehension level... The experience of the end user using that AI application is completely different. So that physician, once the notes look like they're more accurate than what the doctor who just sat through the conversation recalls... Like, "Whoa, that's amazing." Because the physician wouldn't have been able to remember those three or four paragraphs of notes. They would have maybe done one or two paragraphs. And maybe they would have forgotten something, or maybe not picked up on the nuance. And now we're actually starting to see these models, even with audio, be able to kind of comprehend, at times even higher than what a typical human would if they were listening to the conversation and taking notes themselves.

**Adam Stacoviak:** Yeah. Well, you can hear intent in the voice, too. The way you speak, the diction, the speed, the emotion, is a version of intent that the AI can eventually become more and more skilled at, so that the nuance can be connected. Whereas the doctor may be like "I want to be in the moment", and then after the fact there's just sort of the verify part of it, the human verification process that say "Okay, this was accurate. This is what I would agree with." And then maybe in some cases it enhances what the doctor may have, or may not have prescribed as a part of the conversation.

**Scott Guthrie:** And it helps the doctor actually focus on the patient. I think the other thing that we're hearing from doctors is often they were typing furiously in their laptop, and so they're staring at their screen, as opposed to the patient. And as a result, they're missing the nuance; the pause when someone answers. "Are you having any issues?" Or "How often does this happen?" If you're not looking and watching them, you might say "Well, think back again. Is it really happening every day? Or is it happening a couple of times a day?"

And several times we've heard from physicians of "If I stare at my patient, I see more." And then also, the patient feels more comfortable sharing. You don't feel comfortable if someone's furiously typing away at a laptop, necessarily sharing everything that you might have an issue with... So it leads to better outcomes, and a much more emotive experience to the patient, which ultimately builds the trust, and it ultimately makes them feel more connected to their physician, and it ultimately leads to better healthcare outcomes.

**Jerod Santo:** I think that does lead me to the conversation which I guess we've been avoiding thus far, because we've had it with a few other people, but it's important - it's this safeguarding around hallucinating. Because if the record is the AI's summary, and you don't even have the original text, and you're just gonna rely on that, and maybe the doctor doesn't do their job of like reviewing it, they just throw it in the database, and then three weeks later you pull it out and it's like "This one bit was wildly wrong." Or sometimes it's nuancedly wrong... But let's just say the case is it's wildly wrong. That could cause some serious problem in somebody's life. We're talking about we have histories of people who amputate the wrong leg, for instance... It'd be very easy to have the wrong word there.

**Adam Stacoviak:** Or the wrong person in the surgery.

**Jerod Santo:** Yeah, all kinds of stuff that goes wrong. So - I mean, humans, we make mistakes all the time...

**Adam Stacoviak:** For sure.

**Jerod Santo:** ...but these things that we're building, we don't want them to be as bad as we are; we want them to be better than us. So I know you guys are doing stuff in this regard... A lot of it seems kind of like packaging and safeguarding and testing the black box, but beyond things that you're currently working on, which is the prompt shielding... What's the -- the grounding technique?

**Adam Stacoviak:** The groundedness...

**Jerod Santo:** Yeah. These other things that are like verifying, and constraining, checking inputs, checking outputs - is there some way of eventually, or maybe even soon (I don't know what you're working on), like fixing the root problem of the hallucination in the first place?

**Scott Guthrie:** Yeah, it's a great point. And again, going back to even the previous conversation we had, of -- even humans listening often get things wrong...

**Jerod Santo:** Sure.

**Scott Guthrie:** And so I do think it's one of these things where certainly for business processes - take healthcare as an example; you do want to actually have the counterfactual check...

**Jerod Santo:** Yeah, you do.

**Scott Guthrie:** ...before you do something that is certainly life, or safety. Same is true in financial systems. Typically, people have compensating models that actually fact-check, or do the counterfactual before you actually decide. You don't just have one AI evaluation before you do something.

**Jerod Santo:** A second opinion.

**Scott Guthrie:** \[52:03\] Basically a second opinion. And if you think about -- if you ever see a doctor, and you get prescribed medication, there's a reason why a pharmacist has a pharmacist degree. The pharmacist will actually check to see what the doctor has actually prescribed, and compare it to what else you're taking. And the pharmacist will actually stop potential prescriptions if they recognize "Wait a second... You're also on this, and these two things don't work well together." That is sort of standard business process today, pre-AI. And I think we're gonna need to make sure we replicate that with AI as well.

As an example, a lot of the healthcare scenarios that we've talked about, both Nuance, and Epic, do have basically fact checking, where you do have the original audio, you do have the transcription, and it compares the summary to make sure that for everything that is a reference to a drug, or a reference to a dose, or a reference to a particular ailment, it will go back to the transcript and verify that was the exact drug, the exact dose, the exact ailment. And that's going to be important for all of us as we build these models, is to kind of build that type of workflow, similar to what we do with humans in the loop. And that's where, again, in some of these healthcare scenarios, whether it's with Nuance or with Epic, ultimately the physician does review everything that's saved, or everything that's sent to a patient, or an order, and they also make a human judgment call on the output as an additional safeguard. And I think that's similar to what we're doing with GitHub Copilot as well. We never check in code for you automatically.

**Jerod Santo:** Right.

**Scott Guthrie:** You always see the code that was produced, you always see the diff... And as a developer, you're always in control. And I think that's going to be important to kind of embrace as a mindset. At the same time, we are going to continue to kind of make the models better, and even if you look today versus six months ago, or versus 12 months ago, hallucinations are going down. They're not zero, but they are definitely going down. And I think you're going to continue to see models evolve where when you ground them with data, similar to what we've shown here at Build, you can also further reduce the hallucinations. And even with our AI content safety, we're both looking at inputs, like you mentioned, Prompt Guard, but we're also looking at outputs. And so every single model that you use through Azure AI, whether it's Open AI, whether it's LLaMA, or Mistral, goes through the Azure AI Content Safety System, both for inputs and outputs. And that's super-important, because you kind of want to check both the inputs, and you want to make sure that the outputs are appropriate as well.

**Jerod Santo:** Right.

**Scott Guthrie:** And even some of the things that we did announce today - we call them custom categories... You know, previously, with Azure AI content safety system you could look for things like sexual content, or violence, or things that you could set safeguards to make sure it never did; you can now create a custom category. And so things like overconfidence would be a custom category that you can introduce. And you could basically build in safeguards that say "I don't want you to actually answer this prompt saying "You should for sure do this." I want you to --"

**Jerod Santo:** Hedge.

**Scott Guthrie:** ...hedge, or make sure people understand for this scenario that you can't be entirely precise. And that can now be plugged into the safety system, specifically so that you can ensure that you don't get an overconfident answer. And you can take that -- because it's custom, you can now plug in as a developer a variety of category safeguards, that again, run every time you execute your model.

**Jerod Santo:** \[55:54\] So on a technical level, how does that work? If I set a safeguard on an output that says it can't be violent, and it comes out a response, and it's deemed violent by whatever that information is... Does it then reject and just run another inference? Is it gonna loop until you get a non-violent? Or how does that technically work?

**Scott Guthrie:** So as a developer, you can set controls on the API endpoint. Take, for example -- take even the healthcare scenario. There's certain words that are probably appropriate when you're seeing your physician for an annual health check, that would not be appropriate in a typical office conversation. You can't talk about body parts there, you can talk about body parts here. So there's also a sliding scale. Similarly for violence - if you have a customer support chatbot, you probably don't want to be talking about axes. If you're playing a first person shooter game, you might.

**Jerod Santo:** Well, if you sell axes, perhaps you --

**Scott Guthrie:** Or you sell axes, yeah. So you can tailor the language and the use case, and it's sort of effectively a slider in terms of like how "Lock it all down for these specific cases."

**Jerod Santo:** Right.

**Scott Guthrie:** And then to your point in terms of what happens when the safety system triggers - it gives you back a score of risk... So you can effectively say "Okay, where's the threshold once I've set the right safeguards?" And you can basically ask it "Okay, generate a new response." Or you could basically kick in and say "Hey, I think your question I'm not allowed to answer." Or "Can you rephrase the question slightly differently? Because I'm detecting something --"

**Jerod Santo:** "I'm getting violent over here." \[laughs\]

**Scott Guthrie:** Yeah. So you can effectively \[unintelligible 00:57:42.17\]

**Adam Stacoviak:** \[unintelligible 00:57:43.24\]

**Scott Guthrie:** And the other thing that we showed in the demo today is we can now even trigger an alert that can integrate into your security ops system. And so if you have a sec ops team that's monitoring your website, maybe in your CSO office, your chief security officer - you can even have an alert. And so if you think you're being attacked, the same way that someone might be trying to do a DDOS against you, or looking for script injection attacks inside your website, you can have trigger automatically "I think someone's trying to jailbreak me", and it will automatically feed into our Microsoft Defender products. And you can actually see not just the attack on the AI, but you can look "From this IP address what other traffic is going on in my site? Because there's a decent chance they're trying a whole bunch of things to potentially get into my system."

So we now have this all automated, so that you can start to bring in security professionals into your workload as well. And I think that's just sort of a natural evolution from where we were a year ago, when we just started, first of all, how do you build your first app, to now "Okay, how do we integrate SEC ops? How do we actually integrate much more nuanced and rich safety and security systems?" And we're not saying we're done; there's still a lot more that we need to keep evolving... Because we're all going to collectively learn new things as people build these types of AI apps going forward.

**Adam Stacoviak:** Let's close with this... It seems like it's the ultimate shift left for AI chatbot, agent, developers, Copilot developers, whether they're literally developers or engineers, or someone who's learning how to use no code, or low code tooling to build AI agents. This notion of risk, this notion of groundedness seems like the ultimate shift left, because you want to have that safety and security, and even in the demos we saw, we saw that happen right in real time, when they were developing which sources, which actions, which topics... And then you saw that risk and groundedness right in there; that's what you want to see. You don't want to just say "Create this thing" and "Does it work?", but it also has, okay, risk parameters, groundedness parameters; did the original context come into the play? And then I think there was like percentages and stuff like that. To me it seems like the ultimate shift left for this, to put it out there safely; not just securely, but safely as well.

**Scott Guthrie:** And even tying it back to that -- you know, when we talked about Prompty at the very beginning... A lot of this is both how do you do everything you just mentioned in terms of baking in safety, and security, and looking at -- and then to your point on shifting left, how do you automate all this as part of your CI/CD process, so that every time you make a code change, every time you make a prompt change, how are you running unit tests, checking groundedness, doing evaluation, doing safety checks, running thousands of jailbreak attack attempts, using AI to test AI? And that was part of what we showed, and I think is a natural evolution of this sort of shift left mindset, of "We know how to do continuous integration, we know how to do unit testing, and we know how to do that with GitHub, and VS Code, and the tools that as developers we live in every day." And that's probably why in the demos we showed -- we didn't sort of say "Here's a different unit test framework", or "Here's a different CI/CD system", and said, "No, let's use GitHub Actions. Let's actually use VS Code. Let's actually use the techniques that we know, like source control, and CI/CD gates", to now integrate AI in a very, very natural, developer-friendly workflow kind of way.

**Jerod Santo:** Exciting times. We really appreciate this, Scott, sitting down and talking to us. It's been enlightening.

**Adam Stacoviak:** Yeah. So cool.

**Scott Guthrie:** It's been great to be here. Thanks.

**Adam Stacoviak:** Nice to meet you. So cool.

**Scott Guthrie:** Thanks for the conversation.

**Jerod Santo:** Thank you.
