**Autumn Nash:** Welcome to Ship It. This is Autumn Nash, and I'm here with Justin.

**Justin Garrison:** How's it going, Autumn?

**Autumn Nash:** Hi! Okay, so this week we're going to talk with Kyle Quest about small containers. Do you want to give a little intro to that, Justin?

**Justin Garrison:** I mean, minimal containers, DockerSlim... All sorts of things of just how to make a container small, and why it's important is a good topic, I thought. And for people that are running containers, which is a lot of people these days, whether it's in Kubernetes, in the cloud, on prem, on your laptop, whatever... Small is pretty powerful, and Kyle has been around for a while as the creator of DockerSlim and various other tools. It sounds really cool. We already did the interview, and I want anyone else to hear it, to see why it's important and kind of how it's different than some different solutions.

**Autumn Nash:** I really love that it impacted areas that you wouldn't necessarily think of when it comes to small containers. You don't really think about how much that -- like, you think about it'll make start time faster and all that good stuff, but not where \[unintelligible 00:01:46.22\] But you don't really think about how it impacts security, and I thought that was the coolest part, that it really impacts the way, for one, that you think about doing security. And then the way that you are making a more secure application because you're starting off with a more secure image. That's really cool.

**Justin Garrison:** It also made me think about why isn't this a thing for other packaging tools?

**Autumn Nash:** I kind of think it should be. It makes you think differently about creating packages, or where your starting point is, because that's how you have less tech debt.

**Justin Garrison:** Even in all my years, I've never seen a minimization tool for Deb packages, or jars, or things that are "Here's my thing to run, and I give it to someone else." I've never seen anything that for "How do we make this slimmer?" But containers, it was "Oh, well, because it's a Linux distro, and because it's a file system, we kind of know how to take some of that stuff out, and why would it be important to do that, and what other benefits can we get?" And so that's really interesting that it's only a container problem, or a container solution space.

**Autumn Nash:** Well, even the process of taking things out; just the thought of "Can we build with less?" Because there's less to go wrong. There's less to debug, and there's less security risk. I think that idea alone, you could run with it, in a lot of different aspects.

**Justin Garrison:** Yeah. And we even talked to Kyle a little bit about how much is too minimal, right? Because you want less, but then at the same time you need to be able to debug something, and you want a little bit of tools there or a little bit of access to be able to say "Actually, I don't want nothing. I want enough that I can figure out what's going on", because things will break. And our outro for today's show is all about things breaking. So we're gonna tie it all together today.

**Autumn Nash:** I honestly think just the conversation of building with less, and what do you actually need, and giving people the education of "You could do this, with this", or "You could do it with less", or "This is something that we do need, and this will make it easier for you to build with less." Maybe that's how we do get to building more securely from the beginning, and using less. Let's get into links for the week. I'll go first. "How layoffs affected women in tech."

**Justin Garrison:** That's the slug, but what's the actual title? ...which I think is more...

**Autumn Nash:** Okay, so "How the tech industry broke its promise to women." The title is actually better than the link title. But I think it's really interesting, because we dumped so much money into diversity. There are so many diversity programs. And it's crazy, this is not something that is just warm and fuzzy. This is something that Harvard Business has done studies on over and over again. It says that you will get a better return on investment, you'll make a better software, you'll have better teams, and they'll innovate faster. And this is all stuff that Forbes, Harvard Business, all these huge names in finance and business and how to build a business that are very well known have told us, "This is going to add more value to your business." And just the amount of wealth that is going to happen in the wealth transfer to women over the next couple of years, economics are saying that it might be one of the biggest wealth transfers in history. And we're "But we don't need 51% of the population. We don't need their inputs."

And it's crazy, because women actually -- I think we dictate 71% to 80% of spending, and we influence that much spending, and I think 70-something percent, 72% or 76% of discretionary spending. So think about it, when these companies are selling products to people, you have one person who does a lot of the family spending. Or just in general is your customer. And you are not taking in their perspective to what kind of products are they looking for, what kind of testing should you be doing. And we not only sold women "Hey, come, be in tech, we need you", and then we were "Just kidding, because money is an issue, and we're in a tech recession, so we're no longer interested in diversity."

So what does that mean for tech? What does that mean for how we build software and our return on investment, if we have this thing that statistically shows we are not going to build as good of software, and have as good of a return on investment without having people from different backgrounds, especially women, who is going to be a majority of your audience, and the purchasing power, and then we've decided to just abandon that? Where do we go forward?

\[06:11\] Also, retention is horrible. It's 56% by mid career, by 35. So not only is only 25% or 27% of the industry women, and that's not even mostly a technical... I think black women are 1.6%, Latino women are 2%, and those are not widely, like, engineering, right?

**Justin Garrison:** Yeah, "in tech" is a very broad term for management, PM, various things.

**Autumn Nash:** Exactly. And it's a proven fact that most are not holding engineer jobs, which is terrible. I don't think I've ever met a real black female engineer in real life. I think I know two on Twitter, and two engineer managers.

**Justin Garrison:** One sec, too... Call-out to any women in tech right now. If you would to come on the show, we would love to talk to you.

**Autumn Nash:** Please. We can't only interview dudes. Please come. I would love to talk to you and talk about shared experiences. But also, if you cut that number by 56%, what are we left with? Point three? That is horrible.

**Justin Garrison:** Diversity, and multiple voices - this isn't only a problem when stock prices are going up. When stock price goes down, when it flattens out, all of those things, it's still a problem, and we can't just ignore it or throw it -- like, "Hey, you know what? That process, that thing we were doing - nevermind anymore." And even all of the benefits that aren't even directly targeting for women, or diverse, people that don't have tech backgrounds... Like, work from home is a big thing, where it's - hey, guess what, the flexibility you get to work from home basically went out the window as soon as big companies decided.

**Autumn Nash:** And think about it, how many women -- 75% of women are caregivers, either to elderly people or to children. 91% of military spouses are women. All of this -- I think people think of warm and fuzzy, like, diversity is what you do when things are good, and to make you feel better... No, it gravely affects your bottom line, and the fact that you -- think about when we had the cameras that didn't even see people that were different. You know what I mean?

**Justin Garrison:** I remember that...

**Autumn Nash:** I mean, come on now. Not only are you not getting the return on investment you get, you now have to scrap projects and start over. We've had racist Twitter bots, we've had all these different things that have shown us "Hey, guys, we need to do more testing. We need to have more people in the room to have more opinions." And now we want to put AI and data in everything when the main component to fighting data bias, which is diversity and diverse opinions, we're getting rid of diversity. Is that not scary? Because I love AI, and I love data, but what are we doing to make sure it's good for everybody?

**Justin Garrison:** Well, Autumn, it's almost like you should give a conference talk about this.

**Autumn Nash:** I know...

**Justin Garrison:** When you're listening to this podcast, Autumn is probably on stage giving this talk at the Southern California Linux Expo. So if you want to catch the recording, they will be up on YouTube. There are live streams if you can't make it in person, but if you are there in person, we're both going to be at SCALE... And we actually might be doing some recordings in person if we can make it work.

**Autumn Nash:** I want to talk to all the people. I'm so excited. Also, I'm such a data nerd, and I love this stuff, so I'm so excited to give a talk about the things I rant to my friends about it, and they're probably like "Is she ever gonna shut up?" and I'm just like "I'm going to tell everybody."

**Justin Garrison:** You'll have a roomful of people, and they want to be there, they want to hear more. It's gonna be great.

**Autumn Nash:** I'm so excited. What's your talk going to be about, Justin?

**Justin Garrison:** My talk at SCALE is about, of course, Kubernetes, and on-prem, actually, and data centers, because I love hardware, and I think data centers are still very much a good option in the year 2024.

**Autumn Nash:** I'm so sad that I'm gonna miss some of your talk. I'm going to be literally getting from the airport to SCALE.

**Justin Garrison:** Yeah, it's alright. We're still gonna meet up, it's still recorded. Again, if anyone wants a live stream interview there in person, come find us. I'll be around Thursday, Friday, Saturday and Sunday, because I help organize SCALE and KCD. And then Autumn, you'll be there mostly Saturday and Sunday, but a bit on Friday.

**Autumn Nash:** \[10:06\] And we're getting tacos. So everybody, let's meet up and get tacos. I'm so excited; we're gonna finally meet in real life. Also, we have to not forget to talk about your link. What's your link for this week?

**Justin Garrison:** My link is all about the Fediverse, actually, for Mastodon specifically. I've found this link interesting, mainly because it talks about how to kind of discover infrastructure, and how to discover what the backend of something is. So if you're not aware, Mastodon is a server that connects into Fediverse instance with Activity Pub, and someone walked through how they were figuring out where the instances were running, and what providers they were on... Because all of these Activity Pub endpoints have well-known endpoints, and one of the things at the very beginning was about 50% of it is on, or at least fronted by Fastly and Cloudflare.

**Autumn Nash:** Oh, wow.

**Justin Garrison:** And you're like, okay, Fastly and Cloudflare. A lot of people cache hits. That's fine. That's probably a normal thing, if we're just looking at the front end. But they actually go through the effort of hey, let's make those servers talk to us. What if we make a call to one of their endpoints that make them reach out to us? Because then the backend has to do it, and then they can find out where that backend is stored. And so they actually do that.

And one of the coolest things in here was there was a good percentage of - anything behind Cloudflare, because coffer was the largest CDN in front... But 30% of the Cloudflare endpoints were hosted at home. For BGP tools, it just showed it as a home internet access point. So people are running Mastodon servers at their house, putting Cloudflare in front of it so that they don't get DDoS-ed.

**Break**: \[11:44\]

**Justin Garrison:** ...which is a German cloud provider. 51% was there, mostly because of Mastodon.social, which is the big instance. It's like the largest default instance.

**Autumn Nash:** That's so cool. I wouldn't think Germany.

**Justin Garrison:** Yeah, Hetzner is a really good, cheap provider, and there are some other Mastodon hosting services that are like "Hey, you can give us five bucks a month and we'll run the Mastodon instance for you." And I think most of those do use Hetzner, just because of the really low, basically VM costs for it every month.

**Autumn Nash:** Do you still use Mastodon? I feel like I haven't used it as much.

**Justin Garrison:** No, I don't.

**Autumn Nash:** I feel like I'm more on Twitter and Bluesky.

**Justin Garrison:** Yeah, I've moved most of my effort over to Bluesky. And the reason I actually wanted to bring up this link this week, because we will have people from Bluesky and Mastodon in the future, talking about different instances they run.

**Autumn Nash:** I'm so excited to talk to Paul. So excited!

**Justin Garrison:** Yeah, Paul is gonna be great. I'm still trying to get Jacob from Bluesky... And then we have someone from the Mastodon instance HachyDerm, which is a really large tech-focused Mastodon instance. So we're working on schedules for all of those.

**Autumn Nash:** They do such a good job at HachyDerm. They really do.

**Justin Garrison:** Yeah, so I'm excited about that coming in the future. But right now, I was just kind of looking at "Oh, where are people running this stuff?" And I know HackyDerm runs mostly in an on-prem environment, but is fronted by Cloudflare... So seeing how people are doing this is cool.

**Autumn Nash:** I love the way that you approach infrastructure, in a very physical, cool way, where you get excited about it, and then you talk about it \[unintelligible 00:13:15.01\] actual projects, and the way that it kind of interacts with the real world... Because I think it makes it so much more accessible to people that want to get into that. Your approach is so much more accessible. You don't talk about it in a way that is so high level that it makes it intimidating. You talk about it how it affects the real world, which makes it so much more accessible to somebody that wants to learn about it... Which is how I think we get more people into tech and more people in infrastructure... Because the percentage of people that can meet people at these high-level places - it makes it so hard. So I think that's just a really cool way to being helpful to let other people in and kind of get people interested, which I hope that's what this podcast does, it makes infrastructure more accessible and obtainable, and that is intimidating, you know?

**Justin Garrison:** \[14:04\] Yeah, and I appreciate it, because that's how I understand things, and that's how I learn things. If I'm going to try to figure out "How does security work?", I need to be able to relate it to something that I physically know.

**Autumn Nash:** Yes. I'm like a very -- I need to draw that relationship, you know?

**Justin Garrison:** I also like to do it in entertaining ways... I've recently started a series on my TikTok channel about acting out different technologies, and people seem to like it, because --

**Autumn Nash:** Oh my God, I'm so excited.

**Justin Garrison:** I have a handful of them out, and the very first one got over a million views. And I'm like "Oh, this doesn't usually happen..." And so I just started doing it. And it's been really fun, because it's like you can get creative, and --

**Autumn Nash:** When are you gonna help me with my TikTok? Because I just stand there and look awkward... I'm like "Oh God, I can see myself..."

**Justin Garrison:** It is intimidating, for sure. And you're just like looking at yourself, and you're looking at all of your own flaws or whatever, and...

**Autumn Nash:** I know. Can we talk about the teenagers? They are so much cooler. They're dancing, and I'm just like "I'm too old for

this."

**Justin Garrison:** Before we go to the interview, I have to say, someone left a comment on Reddit on a blog post, and they called me a --

**Autumn Nash:** Wait, y the way, guys, you can't see it, but he's making his excited Justin face, and it makes my entire life. Like, his eyes light up, and he gets excited, and it's the best. Okay, go.

**Justin Garrison:** But I was embarrassed, because they left a comment and they called me a Chad. And I was like "I don't know what a Chad is."

**Autumn Nash:** Oh no, they did not call you a Chad...! No, they didn't...!

**Justin Garrison:** I had to look it up, and I'm like "Okay, it's a good thing. Thanks." That was...

**Autumn Nash:** That is not a good thing...!

**Justin Garrison:** No, I looked -- okay, maybe it wasn't. I said thanks, because I didn't know for sure.

**Autumn Nash:** Being a Chad is not a good -- how dare they...?

**Justin Garrison:** Okay, so maybe I'm wrong. I'm just too old for this.

**Autumn Nash:** I would to vouch for Justin, and he is not a Chad, y'all.

**Justin Garrison:** \[laughs\] The one definition I saw, it says you're either extremely good, or extremely bad. And the comment was related to being a Chad in a room of disappointment. And I don't know, I think it was a good thing...

**Autumn Nash:** Oh, okay. Maybe \[unintelligible 00:15:53.14\]

**Justin Garrison:** It's like, everyone else was bad. I don't know. Maybe I'm just too old; it's alright.

**Autumn Nash:** Yeah. I feel like when it's Chads for dating, you're just like "Oh, you don't want to be a Chad." But maybe it was a good Chad.

**Justin Garrison:** I don't know. It's a gaming thing, I think; at least all the definitions I saw. And some of them were like "Chad is awesome." I'm like "Cool."

**Autumn Nash:** Guys, this is how you know we're old, when we have to look on Reddit to figure out what people are calling us...

**Justin Garrison:** I don't know what they're saying. Does that mean we're old...?

**Justin Garrison:** If someone can break it down into terms I will understand as someone from the '80s and '90s...

**Autumn Nash:** Comment in the comment section if you can explain Chad to people in their 30s.

**Justin Garrison:** I am 40, okay? I definitely need these explanations.

**Autumn Nash:** I was trying to help you out and bring you to 35 with me, okay?

**Justin Garrison:** I appreciate it, but all the grey is showing. It doesn't matter. If anyone watches these clips, they know I got gray in my beard and in my hair.

**Autumn Nash:** Also, if you invite Justin to any states that are under 50 degrees, he will freeze.

**Justin Garrison:** I'll have three jackets on, it is okay. I will survive. I just need a little a few more layers. Alright, so let's go ahead and jump into that interview with Kyle right after the break.

**Break**: \[17:01\]

**Justin Garrison:** Alright, we're really happy to have Kyle Quest on the show. Kyle was a founder at SlimAI and DockerSlim, and has a lot to say about Docker containers and how to make them smaller, but also how to make them more useful. So Kyle, welcome to the show. Can you tell us about yourself?

**Kyle Quest:** Sure. Good to be here. Yeah, like you said, I created DockerSlim. It happened a few years back. I did it during a Docker hackathon, one of those global hackathons. I had a problem, and the team I worked with had a problem delivering production-ready containers, and I figured "This has to be an easier way to do it", and that's how it happened. DockerSlim allowed me to create production-ready containers without changing the tools I used, and without changing the workflow I had. So I had those fat Ubuntu images, but I still got really, really small images, hardened, and all of that. So I got the outcomes without making all of those changes.

And then later on, SlimAI was founded to take advantage of some of those concepts, and now I'm actually exploring a new adventure that combines the application intelligence concepts from DockerSlim and combines them with the new automation opportunities that emerged in the last year-plus in tech, that everybody knows about; I'm not going to go into that. But yeah, I solved my own problem, it worked great, others liked it, and since then, more and more people benefitted from it.

**Autumn Nash:** I think you should go into the things that you feel are the new automation opportunities, because you never know what you may know, or think that is common knowledge that maybe isn't common knowledge... So what is the new automation opportunities that you feel are out there, that changed your mind to want to pursue this new venture?

**Kyle Quest:** Sure. So I mentioned application intelligence, and the idea, one of the core concepts with DockerSlim was this application-centric approach as opposed to the infrastructure-centric approach with most of the cloud-native tools. You take a TerraForm, for example, or other tools - they help you interact with the infrastructure, but they are application-agnostic. So what happens with those tools? And it's not TerraForm-specific; it's just an example. You have to program those tools with the application knowledge. So you build the configurations, and all of that... And it's a very manual process, and it requires a lot of domain knowledge. So this is where the application-centric approach comes in, and application intelligence comes in. You capture the information about the application, and once you capture it, you can automate the activities you had to deal with manually, that required a lot of domain knowledge as well.

For example, not everybody is a container expert, not everybody understands the magic with layers, caching, and security, and all of that. So you have this problem where you have a lot of manual work, and a lot of domain knowledge. Capturing the information about the application solve the first step of the problem. But then you need to automate what you do, and use the information that's collected.

Originally, the automation opportunities were pretty basic. You kind of had to hardcode it the old school way. But now with the new generative AI advancements, and the autonomous agent capabilities, you can take that application knowledge and you can automate the activities associated by the infrastructure and the application. So that's where I'm trying to focus now.

**Autumn Nash:** That's really interesting. I love that it came from a hackathon, the original idea. That's so exciting, because I'm a huge proponent for hackathons and giving people the opportunity to be exposed to new technology, and be able to build and solve for real world problems, because I think it's really good experience.

**Kyle Quest:** And it's always good to solve your own problem.

**Justin Garrison:** Yeah, and that hackathon to project to product is a really cool cycle just to kind of explore. And I was gonna point out, SlimAI was I think one of the first domains I ever saw that had the .ai. You were doing .ai domains before they were cool.

**Kyle Quest:** So the reason AI was there is not because of the actual artificial intelligence. It represented two concepts. One I mentioned, application intelligence, and then the other one is autonomous infrastructure. So the idea was application intelligence leads to autonomous infrastructure. But we never got around to that, and that's what I'm trying to do now, take the application intelligence and get to autonomous infrastructure.

**Justin Garrison:** \[25:46\] So the original problem you were solving though was - I don't assume it was just "My containers are too big." There had to be something that was driving that. My very first container that I ever built was 60 gigs. And it was large, but it was still useful. So what problem actually drove you? Why did you need a small container?

**Kyle Quest:** Production-ready containers, or VMs, or anything, when you prepare your application for production, you go through this hardening phase, where you go from a developer-friendly setup, either a VM or a container, to a more locked down setup, where you look at the security too to make sure it can't be easily exploited. For example, when an attacker exploits a vulnerability, they persist, and then they move laterally.

So one of the goals with hardening, manual or either way, is to mitigate those activities. If there is an exploit, you try to mitigate the persistence of it, or you try to mitigate the lateral movement. That way, you limit the blast radius. So that's one of the classic things you have to do. But again, now you have to be a security expert, and it's a very manual process. You might get lucky and have a hardening script that you run, but that actually ties you to a specific OS, with a specific version. And that's related to the idea of small container images, and minimal container images, and other alternative solutions that will be good to explore, compared to what you get with DockerSlim, or later on it was called Slim Toolkit, and now it's evolving into MinToolkit. Min stands for minification.

And the reason why it's evolving to the new name is because when the tool was going through the sandbox process in CNCF, they didn't like the name, and they asked for the name to be changed, but I couldn't change the name right away, and now I'm just getting to it. So now there's a new name, but the idea is the same. You keep everything you have. For example, if you use whatever base image, you keep it and you get the small images. And you get to keep your hardening scripts, so if you run additional things there, you won't have a problem. But if you try to change your base image, you might get lucky, or you might end up with a lot of work. So that'd be good to explore as well.

**Justin Garrison:** And how does it actually work? How did the original hackathon DockerSlim work, and is it still working mostly, or similarly today, through all these cycles, and productization, and name changes?

**Kyle Quest:** So the open source project works pretty close to what it is now. It's just added a more advanced capabilities and added adjacent capabilities. For example, one of the adjacent capabilities is the X-ray command that helps you understand what's in your container images. So that way, you can see what's inside, and then you can make sense of them. It's super-useful, and you get a lot of insights that you normally wouldn't get. And then the other adjacent capability, also related to visibility, is linting. Now, there are a lot of linting tools, but it is complimentary to the X-ray visibility.

And one of the newer capabilities is debugging. So you create a minimal container image, but it doesn't have a shell. And then you want to use that minimal container image in production. And I heard this over and over again when I talked to people about it, developers, DevOps engineers, SREs... They say "Okay, how am I supposed to debug it? There is no shell. What if it crashes?" I mean, if the application is perfect, great. It never crashes, it has no problems, but it never happens. It doesn't work that way. So not being able to debug minimal container images has been a barrier to adoption for the minimal container images in general, regardless of how you build them; whether you build them from scratch, doing it manually, or using tools, you've got to be able to debug them. And that's one of those additional adjacent commands.

\[30:12\] In terms of the core capability, minification core capability, the intelligence to handle more advanced applications, runtimes evolved and improved, but the main idea is to combine static analysis with dynamic analysis, and build this profile in terms of what it is that you have, what it needs, the dependencies, and all of that.

**Justin Garrison:** You have these extra abilities on top of slimming things down. You have the "We need to give you best practices around your dockerfile to make sure your cache is good. And we can get rid of all that apt or yum cache" or whatever it is that you don't need anymore for your application. But there's got to be a middle thing here, of like "I do from Ubuntu, and my application is a Python script." Are you profiling the application as it starts, and then saying "Hey, here's all the files you opened. Let's delete everything else"? Or are you compressing files? Or are you just relayering the container images, so polls are faster? What is the actual technology that allows you to make this from a few hundred megs down to tens of megs, hopefully.

**Kyle Quest:** So it's a combination of several different things. The origin of this is the security tech I've used in the past, because I've been involved in security for more than a couple of decades. I've been wearing a whole bunch of different hats. A builder, a breaker, a defender... It used to be my job at Microsoft to break Windows, for example...

**Justin Garrison:** The software, not the physical buildings. \[laughter\]

**Kyle Quest:** Yes, the software. Yeah, exactly.

**Autumn Nash:** You still fit in a dad joke...

**Justin Garrison:** It was right there. I couldn't not take that one.

**Kyle Quest:** It was fun. It is fun. So I had a lot of background in tech, in terms of what was used, and a lot of the stack in security is about catching the bad guys, catching malware. So I thought "Well, why not leverage the same tech, and repurpose it? Instead of trying to catch the bad stuff, why not use it to discover the good stuff?" So I repurposed the security technology that's available in the Linux Kernel, for the most part.

For example, one of the capabilities DockerSlim uses is this fanotify capability in the Linux Kernel. So that was created for the antivirus software. So the antivirus software on Linux hooks into this interface, and then it sees when applications run, the excess files, their right to file... So that was one of the capabilities it leveraged. Then it leveraged ptrace, that's used by debuggers. So whenever you're debugging something, you're using ptrace. So then it use that as a capability. And then one of the newer capabilities is based on eBPF, that allows you to observe what's going on in the system.

**Autumn Nash:** What's eBPF?

**Kyle Quest:** That's a good question. So eBPF is an evolution of the old school concept behind BPF, Berkeley Packet Filters. And it was a networking construct that allowed you to capture packets from the network, and allowed you to filter packets that you're capturing. So a couple of decades ago network sniffing tools, and networking tools have been super-popular. They're still popular, but I wasn't involved in that space a lot... So all those tools used eBPF to capture packets. But then, the new version was created that allowed you to capture not only the network traffic, but other things in the system. And e stands for extended BPF.

\[34:03\] So with that extended eBPF system you can get the networking information, you can hook into different parts of the networking stack, but also hook into different parts of the OS stack as well, including the parts that allow you to see what's going on in the system. And now it's used by a lot of different tools, security tools. A lot of the runtime security tools use that, especially in Kubernetes. And then a lot of continuous profiling tools are using it, observability... In the last couple of KubeCons, continuous profiling and observability powered by eBPF had been big themes, and it's growing in popularity. And there's also a number of tools, security tools, like Falco, Tetragon, Tracee, that leveraged this capable already for runtime security needs in Kubernetes clusters or endpoints, and that's one of the new tools that DockerSlim or MinToolkit is integrating with in order to get more data to use for application intelligence.

**Autumn Nash:** what was the coolest thing that you got to break when you were at Microsoft?

**Kyle Quest:** One of the coolest things I liked at Microsoft, that our team had, was the fuzzing setup. So with fuzzing, what you have - an application that generates input for the target application. And that input is meant to trigger unexpected behavior, and crash the target application.

**Autumn Nash:** It sounds like so much fun.

**Kyle Quest:** And Microsoft had, and still has this awesome set up where it would observe the target application, and it would adjust the input that was generated based on the bytecode coverage in the application in order to get to different parts of the application. And that allowed that fuzzer to break a lot more things, and find bugs that you wouldn't normally find.

And this is actually a source of one of the ideas that I'll be working on as well, in terms of automating container-related activities. Testing containers... Because testing is a common problem. Nobody has enough tests for their applications. Everybody knows that you're supposed to test your applications. Maybe some people have their unit tests, some people have integration tests, some people have end to end tests... But you never have enough. And that's one of the things that's useful to have when you're trying to understand what the application is doing, and leveraging this fuzzing magic and fuzzing technology is an opportunity to unlock some of those automation opportunities.

So the fuzzing tech was great. I think it was the best compared to other vendors, and it's been a while, more than 10 years... But Microsoft was ahead of Apple, and I'm pretty sure it was ahead of Google in terms of that tech, because they had a headstart there. But maybe other vendors caught up.

**Autumn Nash:** Microsoft seems to do security well. I love the working backwards of security, where it's like "Let's go break some stuff, and then we're going to figure out from breaking some stuff how to build really good, secure software." It's probably one of the most exciting of working backwards in software. It's pretty cool.

**Justin Garrison:** So you have all of these technologies you have as part of slimming this down... Fanotify... You're basically looking at, when you start the process, what does it access? What does it do? Anything that's not in that list, let's get rid of it. Let's just throw it away.

**Kyle Quest:** \[37:54\] Almost, almost. What it is - it's one of the sources for data. So each monitor, each different monitor type collects different types of telemetry, it provides different information. And then there's additional processing. For example, let's say the fanotify monitor saw that one of the Python object files was loaded. And the way it works with Python applications - the Python runtime, it compiles the Python application into bytecode. So you end up with these Python object files that are cached. And when the application runs, it loads the object file. So what you see loaded is actually the object file, but you still need to have the source file. And that's an example of additional processing that needs to happen.

So you see the object files being loaded, you see that "Oh, it's the Python runtime. We need to have the source files as well." So the source files are also added. So there's a number of additional post-processing steps that collect additional data based on the application type, based on what's going on... So it's not just what's loaded from my fanotify. There's a lot more going on there.

Plus, let's say you load an application... I don't know, kubectl. Now, kubectl is a binary -- or any other binary. Ping, for example. It's an \[unintelligible 00:39:19.18\] binary that most likely has dynamic dependencies. It has shared libraries that it loads there. So one of the other additional post-processing steps and an example of static analysis is analyzing, identifying that the file you have is an \[unintelligible 00:39:39.05\] binary, understanding the kind of imports and the dynamic loads it does, and then finding those dynamic shared libraries and fetching them as well, and then doing it recursively. So there are multiple layers of processing and post-processing to combine all of that application-related data into this one complete manifest.

**Justin Garrison:** That I think brings up the application intelligence piece of it, right? Because if I just take all the .pyc compiled Python and then stick them somewhere else, I'm still gonna have a bad day when I try to run it and do something with it.

**Kyle Quest:** Yeah.

**Justin Garrison:** But a lot of what you've been talking about is security-related specifically, for like "Hey, we want minimal for security." What other benefits -- I remember when I was looking at DockerSlim, it was just like "Oh, your polls will be faster." Or "Oh, your disk space will be less." Or even like "Let's optimize this so we can share layers between containers a little easier." What are the other things outside of security that are like "Hey, this is something that you might want to do because of something else"?

**Kyle Quest:** So let's start with security either way, because there are interesting benefits there that you normally wouldn't get otherwise, or you would have to do a lot more. So about security, you're removing the attack surface that you have in your container. The concept of attack surface is one of those fundamental constructs in security. The more stuff you have, the bigger attack surface you have. And with DockerSlim, you automatically reduce the attack surface. And not only that; the way you do it, you do it in a proactive way, not in a reactive way. If you use the traditional security controls like vulnerability management, the way it works - it's a very reactive control. Somebody discovers a vulnerability. Then that vulnerability is recorded. Then scanners look for that vulnerability. Then you try to fix or remove that vulnerability. It's very reactive, and you secure your application only after the fact. But the DockerSlim approach and the proactive attack surface reduction, you're removing a whole bunch of stuff that may be exploited in the future, before there's a CVE discovered and before the scanners know about it. So that's one of the benefits, and it makes it easier to do... And it's actually related to container best practices; that will be good to talk about.

**Autumn Nash:** \[42:06\] Honestly, that's really good best practices for all software, right? Having the least amount of attack area. And just the fact of having less dependencies, and stuff... It can really help you, but people don't think of it in advance. You now take on all the security risks of every dependency that you pull in, and every -- like, half the time we have packages that we don't even use, and they're just sitting there, waiting to make your application more vulnerable, and you don't even need them.

**Kyle Quest:** Exactly, exactly.

**Justin Garrison:** It turns out it's hard for people to understand that. That's a really difficult thing, to say like "Hey, I want you to go through and tell me which files we need or not." Like, "No, I'm not."

**Autumn Nash:** Well, and you also need to understand all those files, right? We don't all understand what all of those things do, so you're like "Well, do I need it? I don't know, maybe I might need it." You know what I mean?

**Kyle Quest:** Exactly. And that's actually related to one of the key constructs behind the container best practices. There, they say "Only put the things you need in the container." It sounds great in theory, but in practice there is a disconnect, because nobody I know, nobody I've talked to ever put stuff they don't need in containers intentionally, just for the fun of it. "You know what? I'm going to put junk in my containers, because it's fun." Nobody does that.

**Autumn Nash:** A lot of times they just download whatever they can, or whatever seems like it's going to fit. I mean, that's kind of security everywhere. There's so many best practices... But for one, security's ignored a lot. Two, I don't know if people always have the tools to know what they should be leaving out, or what -- you know. So I think we always have good intentions, but a lot of it does not translate to practice. And if we could find a way to bridge that gap to help people to make those good decisions, and to be informed in that way, having things like this, where it's the least amount of dependencies, and the least amount of files that you can run and be successful with... If we built more images and things to provide the public, and kind of educated people more on what they actually need, I wonder if it would make it easier to follow those best practices.

**Kyle Quest:** But some of it is also related to application lifecycle, because some of the things you have is application development and debugging-related, to make it easy to troubleshoot and all of that. So technically, you might need it, but you might need it in the early phases of the development process, or maybe potentially later, when the application crashes. And that's one of the problems people need to solve as well. How can you have those tools, but not all the time, only when you need them?

So creating minimal container images, regardless of whether you do it from scratch, with distroless, DockerSlim, you need to have a story there to complement those minimal container images that allow you to bring in the tools you need, when you need them. And that's where the debugging capabilities in Kubernetes, leveraging ephemeral containers, and other runtimes come in. You need to complement those minimal container images, where you can say "Okay, I'm gonna remove those tools in the image, but then I can bring them back later."

**Autumn Nash:** And I love that you have debugging, because that's the hardest part of software sometimes. Writing code to me feels like is easy, but the debugging and figuring out what happened can be hard... And especially when you're pulling in something new; like if you're new to Docker, you know... And I wonder also, because you have a minimal image, if that makes debugging easier to figure out where things are coming from also... So maybe that would be a lot of the value also, security, and the fact that it's easier to debug and to know where things are coming from and what's not working.

**Kyle Quest:** Yeah, it's definitely a part of it. And those two things go together. But in terms of other benefits, a couple of other benefits, classic benefits that developers like - faster pools, that's one. And then faster startups, that's another one. So that, in some environments, it's a bigger problem than in other environments. Because let's say you use some kind of containerized function environment like Lambda. There you get billed for each load, and Lambdas get loaded a lot. A lot happened with Lambdas in terms of optimizing, and different advanced image formats, and all of that... But fundamentally, you get charged every time your image gets loaded, and that's one of the benefits that others liked, too.

**Justin Garrison:** \[46:33\] How does removing files I don't use increase my startup time?

**Kyle Quest:** It makes it faster, but it decreases the time it takes to load the image.

**Justin Garrison:** Just because of the image pull times, not because the actual application startup?

**Kyle Quest:** It's both. So there's the image pull time, that's one. And then there's the actual startup time. I had a benchmark that measured the pull time and the start time individually. For different runtimes, it's different. And for example, one of the adjacent examples and tests I had was with containerized lambdas. So I had the original, fat, containerized lambdas, and it took significantly more time there. And there it's a combination, too. So yeah, it depends on how you measure it, but there is the pull factor and the startup factor. And depending on the application, the startup time is also different... Because again, it takes time to load the file data in memory, to set up the LayeredFS and all of that magic.

**Justin Garrison:** But that's a cold start problem, right?

**Kyle Quest:** Yes.

**Justin Garrison:** ...because that's still a size of cold start, not necessarily application startup. If I have two cached images, one is slim, and one is fat, the application is not going to start faster, but the size of the file system in a Lambda cold start situation could cause that as a "Oh, here's a side effect, because image pulls faster, and we don't load this in the memory, or even layer this on top, because we just have less files."

**Kyle Quest:** Yeah.

**Justin Garrison:** So what's the difference here with -- we were mentioning, we can start with Ubuntu and take all the stuff we don't need... What's the opposite approach? Why don't we start with scratch? Why don't we start with something that's minimalistic to start, and only add the things we do need? Vladimir was just talking about this is best practice for all software, and for Talos Linux, where I work at Sidero, we have 12 binaries, and that is it. Every other operating system has hundreds and hundreds of binaries on the default install. We just start with the one purpose-built thing. We have almost nothing installed on it. So we can start from scratch in a container and just be like "Oh, I can go the reverse route." Why trim down instead of build up?

**Autumn Nash:** That's the whole working backwards thing, where you start --

**Kyle Quest:** Exactly. So the biggest problem is that you don't always know what you need. Let's take a Go application as an example. A classic application, an application example there you see is a statically-compiled Go hello world. It's static, it's a single binary, you take the scratch image, you just copy the binary there, and you're all set. But in the real world Go application, there's a good chance that you need a lot of different things beyond that. Certificates, one. The timezone information, two. The user information, three. And it just keeps piling on. So you keep on discovering that you need a lot more. If you cGo, you need more stuff, and so on.

So it comes down to this - when you control the environment, especially when you have a dedicated operating system like you guys, you know exactly what you need; you control that and you design that environment to work the way you need it to work. But for the general-purpose operating systems, for regular application developers, they simply don't know.

So one of the things I see with people when they use multistage builds - so that's one of the recommendations that you hear: "Use multistage builds. You build the image in one stage", you run npm install, for example, if you have a Node application, or an npm CI if you really follow the best practices...

\[50:18\] And then you copy the stuff from there, from that stage, to your release stage. Well, there, again, you need to know what to copy. So most of the time, you see people just copying the entire application folder with everything in it... So it's pretty much going with "I'm gonna just copy everything, and that's it." And there's a lot of junk there still. And then you can't necessarily have a scratch image in the release stage, because you need to have dependencies. So you will have a minimal release stage image; that's great to have. But again, that's the main problem - you don't always know what you need. There is a middle ground, the idea with distroles images.

**Justin Garrison:** That's exactly where I wanted to go. I was like, what is the difference here with slimming it down from a fat image, versus distroless, and how do those compare?

**Kyle Quest:** Yeah. So with the distroless images you have this minimal foundation for the runtime you have, for example, for Node applications. You have a set of basic OS libraries, and then a set of runtime-specific libraries; Node.js libraries that you need to have. And then you just add your application code on top of it with that multistage build, and you're good to go. And that's one way to do it, and it's a middle ground where you can say "Okay, I have a foundation that's stable, and then I'm just going to put everything in the application on top of it." But if you want to optimize it even more, then you can use something like DockerSlim, because you can run DockerSlim on the distroless-based images. You're not going to get a 10x size change, but you might get 50% change, or 30% change. So depending on the environment and how small you need to go, you can still benefit from that. And those distroless base images, they help you with the base image part, but not the application part of it. And if you look at other available options, like Wolfi, and Chainguard... They also help you with that foundation, but then you're on your own with the application itself, and you need to have this full end-to-end solution for the end user.

**Justin Garrison:** And runtimes are almost operating systems unto themselves, because they need to be generic enough so you can run anything within the Java ecosystem or npm ecosystem and still be able to "Hey, we don't know what's underneath us and we don't know what's above us, but we need to be big enough to cover as much as we think is possible."

**Kyle Quest:** Yeah, they're like stem cells. The base images in general, base OS images are like stem cells; they can become anything. Those images can become anything depending on the application. The same with the runtime images; they're a little more purpose-built, but again, they're open in terms of what they're going to do, so they need to have a lot of extra components that you may not need. That's why slimming distroless-based images also works, and you get benefits from 20% to 50% there as well.

**Justin Garrison:** Well, thank you so much, Kyle, for coming on and explaining how that works, why you might want small container images, and how it compares, DockerSlim versus something like distroless. That's a great example of when you might choose one or both, and some of the benefits around each one.

**Autumn Nash:** Yeah, I've learned so much. It was really nice meeting you. It seems it provides a ton of value with just like the security and the faster pulls in general. It's just a lot of value.

**Kyle Quest:** Yeah. It helps developers, it helps DevOps engineers, and it helps security engineers. Those are the three personas that I encounter all the time.

**Justin Garrison:** If any listeners wanted to find you online or reach out, where's the best place to contact you or talk to you?

**Kyle Quest:** Twitter, @kcqon, and LinkedIn, Kyle Quest.

**Justin Garrison:** Sounds great. Thank you so much, and we'll be right back with the outro of the show.

**Break**: \[54:15\]

**Justin Garrison:** Thanks again, Kyle, for coming on the show and talking to us all about slimming down your container images, and different options for doing that, and why it might be important... Because that's just always a really interesting thing, to see not only if it's only a big tooling sector for containers, but also - hey, maybe this might be a good way to get better security benefits, or you even faster debugging by eliminating some of those files and things that you don't need anymore.

**Autumn Nash:** Yeah, I thought that was really interesting, the security and the debugging.

**Justin Garrison:** Yeah. Pieces that usually in a dev environment you just throw everything in there, and then when you're in production, you're like "Actually, what do I need now?"

For the outro of today's show, we are doing a segment called "How things break." And I don't think I've had a consistent naming on any outros yet... But it's fun, because we're just kind of mixing it up. And in today's outro, we're gonna talk about a couple different outages. Because while we were recording this on March 7th, we had two major outages this week on Meta/Instagrams/Threads, and then also LinkedIn had a fairly large outage... And just a couple of weeks ago AT&T and Verizon had outages.

And we're not gonna throw any shade on any of these companies for having outages, because outages happen, and the engineers behind them are doing their best. We don't want to ever imply that you're terrible at your jobs. If any of those people work at these companies, and would like to come on the show and talk about one of these outages, we would love to talk to you, because for Autumn and I those are some of our favorite things to talk about, is when things break, and you get paged, now what?

**Autumn Nash:** Yeah, hugs to ops for sure. I think postmortems are the best way to learn how to be better at being an engineer, because it's always good to learn from the struggles that other people are going through, so you can make your stuff hardened, and better, and more threat-tolerant. So that way you can do better. So I think you should always have empathy for people, and you should always use it as a good story to make sure you're doing what you need to do, but I don't think you should ever throw shade, or look down on other people.

**Justin Garrison:** Yeah, it is definitely a difficult situation when you're on call, and it's your job to fix it, and the company is losing money, or whatever... There's a lot of stress there, and it's not fun.

**Autumn Nash:** You're making me sweat thinking about it. Just like "Oh, God..."

**Justin Garrison:** But at the same time, sometimes those outages might be trickle down effects of company initiatives, or laying people off, or causing people to come into the office, or downsizing in various ways... All of those things also can be affected. And it's not because the engineers are bad. Maybe the company didn't allow them to do their best work.

**Autumn Nash:** I do think that there's gonna eventually be some sort of a correlation to the fact that we are asking people to do more with less, and the fact that so many people have been laid off, and we've lost so much institutional knowledge and so much tribal knowledge, that at some point that's going to come back to bite us. How many times have you tried to make a tweet on Twitter, and it said "Hey, do you want to save this into your draft?" Because it's broken.

**Justin Garrison:** "Sorry, I can't do that right now."

**Autumn Nash:** And the fact that the engineers that used to work at Twitter - props to you for building something that could go through the type of reduction in force that it's gone through and still survive. That in itself is a testament to engineering. But I think a lot of things are very obviously broken, because there's so many less engineers that have been working at these companies, and so many people have gotten laid off. I think we're gonna continue to see outages until we care more about the people that are building them.

**Justin Garrison:** And running it and maintaining it. And that's kind of this show, right? We want to talk about that other side of it. Like, hey, the software development lifecycle is 90% running it. And writing it is a very important part, and architecting it is a very important part, but the tail end of what software does is super-critical.

**Autumn Nash:** Not just that, but it's a whole process. You need good and diverse opinions to build it and to design it; then you have to build it, then you have to go through testing... This is a whole process. So you can't make rash decisions halfway in a process. You need those people to be there and to follow along. What if they've designed it in a certain way, and then you've lost all that experience?

**Justin Garrison:** And all that context changes over time, too. As you hit scaling milestones of "Oh, we need to do more stuff now, because we have more users", you have to sometimes rearchitect it, and you have to split up single-point databases into highly-scalable multiple endpoints, or read/write replicas. That sort of stuff all happens at different stages, and the thing that got you your first 1,000 users or 10,000 users may not get you to 100,000 or a million.

**Autumn Nash:** \[01:04:11.24\] I read this book about data-intensive applications, building data-intensive applications, and they talked about Twitter's first algorithm, and then how they had to scale when they got celebrities \[unintelligible 01:04:19.24\] and how the algorithms had to be different. And we always talk about best practices, right? And we all want to follow those best practices. But sometimes there are trade-offs that you have to make, and you don't know why they made that trade-off if you weren't in that room, or if there was no context given to you.

So every time we lose a ton of people, or the first people that built it, or we go through those cycles - it's one thing to go through cycles, eventually over time, and it's another thing to lose a huge chunk of who built it and kept it up for so long. So many SREs were fired, and laid off... And dude, SREs - that's a hard job. That's not something you learn overnight. That is a process to get to that level of knowledge and being able to keep things available. We should treat engineers better. It's a hard job, and we're all in it together, and I think I hope that we get to learn from these things.

**Justin Garrison:** Yeah. Before starting, rejoining and starting the Ship It podcast again, I was last year planning on doing a podcast all about outages, and talking about how things fail... And I bought a domain for it, and all this stuff. And then I realized there was another podcast that already existed that talked about it, and that they were great.

**Autumn Nash:** But I think we should do more of those, because I think that's how you learn. You learn from your mistakes.

**Justin Garrison:** Again, if anyone part of these outages wants to come talk about their major outage, or something that happens, we would love to talk to you about it, and all learn together from that... Because those are super-important.

**Autumn Nash:** Seriously, I love postmortems. I love reading them.

**Justin Garrison:** That's the last link for the show today, is Kagi, which is a search engine, had a postmortem, and they actually had a great write-up. They had an outage for almost seven hours, which is a lot, if you've ever been under pressure for being on call. And I don't know why their main link actually is gone. It 404s for me now. But thanks to the Wayback Machine, we can still get to what was in the postmortem.

**Autumn Nash:** And I think they did such a good job. For such a small company, their investigation was amazing. They did such a good job of pointing out what went wrong, what could have gone better. I think that's how you make better software, and you make sure things don't continue to happen.

**Justin Garrison:** And one thing I really appreciate in this postmortem is the fact that they talked about all the things that they thought were the problem, and didn't end up being the problem. Because they were like "Oh, at first we started rolling out new instances with more memory. We chased that tail for a little while, like, it might be this, because this is the only change we did recently. Maybe it's that." And then they started rolling it back, and like "No, that maybe it's this provider. Maybe we'll restart these instances." All of that stuff kept leading them to not the right solution. And they called that out in the postmortem. Because that does take time; that investigation, all of those things, looking at what changed, how do we revert it.

**Autumn Nash:** But I think that's so important. Everybody has a process. No matter what industry you're in, there's a process in how you work, right? And when you're new to engineering, the process of "Hey, how do you take an on-call moment, and how do you go through the process of figuring out the problem?" That's so important. So many people can learn from the fact that they had a process. Maybe there's good things that you can take from their process that you can implement in your process, or maybe it's a good starting point if you don't already have a process... But that's how we grow.

**Justin Garrison:** And for me, pair programming is a great tactic for learning how to pair things... But pair debugging is the thing that has let me grow more in my career than anything else.

**Autumn Nash:** Oh, my God. My brain grows five different -- if you want to know how to scale junior engineers, that's how you do it. Even if they're not saying anything; you guys could both be working in silent, and they'd be working on what they're working, and they're just watching you.

**Justin Garrison:** \[01:07:49.04\] I still remember the first time I actually saw someone do strace in production on a Linux host. And I'm like "How did you do that?" And they're like "Oh, well, here's the process. I attached, I found the --" I was like "What?! That's possible?"

**Autumn Nash:** It's mind-blowing. I feel like people don't realize, when you're new there's so many things you don't know. But when they're writing documentation, or they're writing out processes or designs, they're writing from an area of having all this contextual knowledge. The only way things are going to get better -- that's why mentorship is important. So senior people realize how hard it is to start, and they remember the problems that you go through, and the struggles you go through, and then you're up-leveling those junior people. That's why it's this great two-way relationship that we forget about. We think that only the mentee grows in these relationships, and that's not true.

**Justin Garrison:** Going through this process, it helps you understand... When I asked my coworker that was doing strace, I'm like "How did you know to look there?" And they're like "Well, I've seen an outage that looked kind of like that in the past." And these outages give off vibes that you just kind of get this "Oh, this feels like the other one... So I'm going to try that direction first. And that's where we're going to start." You have to learn some of that, you have to experience it some of it yourself. But being able to -- once I saw that the next time in a ticket, I'm like "Oh, you know what? This problem might be the thing that they told me before. Let me try their steps and see if it gets me a similar conclusion."

**Autumn Nash:** But that process is going to teach you so many things that you would not have learned on your own. You could have just banged your head against the wall for forever.

**Justin Garrison:** And you don't even know what to search for. You don't know what you don't know, and there's no way that I can google search a solution if it's completely opaque, and not within my toolbox of like "I can rely on this thing to solve the problem." It's not going to happen.

In the Kagi postmortem they call out, a couple paragraphs further down - I was just gonna read some snippets of it, where they say that to this day, we've yet to exceed 50% load capacity on their single-core database server. They had the cheapest GCP database. And they were like "We never went over 50%, so we're probably fine." And the next paragraph, "We then took steps to identify bad actors, and we found that accounts created within 24 hours had over 60,000 searches performed in a short period of time." And in this case, it was one of those situations where it was like "Oh, It wasn't something that changed." It wasn't the obvious "Well, just revert the Git commits" or "Rollback the machines", or whatever it is. It's "Actually, because we weren't checking or validating what users could do, they did whatever they thought was available. And they could do 60,000 searches in a short period of time." And obviously, other things led to this, where it was like doing those searches was adding writes to the database, which was causing other slowness, and so their connection pools were basically disappearing as soon as the machine would come up.

But I really appreciated that as a postmortem, where they walk through all the steps, they show all the debugging. At the end of the day, it's like "We were down for seven hours because a user kind of took down everyone, and we didn't check for that. We didn't know that someone would even try that." And if I've learned anything in my time, is users will try anything that is available to them, even if it's not documented.

**Autumn Nash:** I also think that for a company that I had never heard of, a search engine, their postmortem was so detailed and wonderful.

**Justin Garrison:** Yeah, it was really good. And I wouldn't have known about it if it didn't bubble up into my feeds of "Oh, this was an outage." I'm like "What? What's going on?" And it didn't affect me, but I can appreciate a good postmortem, especially a publicly-written one.

**Autumn Nash:** It's hard to talk about your mistakes in public, but also, I think user endpoints and database connections is such an underrated issue that people should look for. I feel like nobody ever thinks about that, and it can be such an issue with databases, especially when you're letting users -- like, the way that they connect to it. So I think that's something that a lot of people will learn from, because it's not one of those things that are talked about a lot. So I'm really glad that they wrote about it.

**Justin Garrison:** Yeah. When basically every application is an API in front of a database, you're like "Oh, what happens when the database does something?" Your database choices matter, and your schema matters, and all that stuff.

**Autumn Nash:** Well, data modeling is such an underrated skill. And just the fact of like - I think people don't fully understand databases. They know that they want to dump stuff in databases, they know that databases exist, but I think there's a lot of knowledge on how to interact with a database that is not very common. So I think problems like this... It's amazing how you can create your own problems when it comes to your database. That's the worst thing to -- not the worst thing, but it's so hard when either you take a database down, or you don't have a redundancy policy... Data is so important to products. It could be your user data, it could be data that you're tracking things, and like "What do you do if you accidentally take down your own stuff because you weren't thinking about that?"

**Justin Garrison:** \[01:12:28.23\] Alright, well thank you so much for listening to the show. And again, if you would to be on the show, or have a topic to suggest, please reach out to us. We are shipit \[at\] Changelog.com. You can just go ahead and email us. Autumn and I both get them. We'll reply at some point next week. For us it's a little busy, but by the time you hear this, we'll be getting over that.

I don't know what the next show will be, but I know we have a couple of good ones lined up. So we will have about a month of various shows, and I can't wait to talk to everyone else, and share all the great context on how people run infrastructure, especially social media accounts.... There's some platform engineering coming up, there's a little bit more container stuff...

**Autumn Nash:** I'm really excited about the Mastodon and Bluesky, because Mastodon I felt like exposed a lot of people to running their own servers. Even if you've been in tech, maybe you hadn't run your own server before, and just the good, and the bad, and the ugly that we learn from those situations, and the exodus from Twitter... And then you come with this completely, really different version of Bluesky. And then Bluesky was so much fun, and I think we've all interacted with Paul at some point on there, because at first it was so small... It was like getting into the cool club, and it was such a welcoming community... And then to go and meet Paul and to hear "Hey, what was it like when you first started building this?" That's gonna be so fun. And how has it changed since it's grown and matured, you know.

**Justin Garrison:** And now that it's completely open for people to sign up... All of those things are really interesting. And to your point, a lot of people don't run their own data, or don't run their own servers. No one ever talked about the responsibility aspect of - when you own a server, a database... Yeah, then you are responsible.

**Autumn Nash:** I think Mastodon, everybody was so excited about it, which makes me a little sad, because I feel like it didn't get a full shot... But I think we were all like "We're so busy. How are we going to run our own servers?" and we're like "Thank God Bluesky \[unintelligible 01:14:10.19\] Because sometimes we're just like, we don't know if we can moderate -- I think it's funny, because we're always like, we want to do our all of our own stuff, and not be governed, and we want to have our own things... And then you're like "Okay, wait, this is too much responsibility." So it was really interesting how that kind of cycled through. At first, people were so excited about their own instances, and then you could see halfway through they were like "Can I jump on yours?" And then Bluesky, they're like "Okay, this does all the cool things that we wanted for Mastodon, with less responsibility."

**Justin Garrison:** I have all my own biases on Mastodon and Bluesky and Twitter... But yeah, it's --

**Autumn Nash:** I wanna hear all of them.

**Justin Garrison:** I have plenty of blog posts and YouTube videos already out there about both of them... So if you're very interested, you can find them. But yes, at the very least, I am still interested and love talking about infrastructure and how the architecture of both impacts what people can and can't do with the systems, and how portable they are, and how they interact with each other, and even the protocols of Activity Pub versus AT... Those things are really cool, just to see that design impacts how the rest of it works, and what people can and cannot do.

**Autumn Nash:** Also, it's a really fun learning opportunity. It's one thing to build your own server to test, and it's another thing to actually have people use it and interact with it. So I think these are all really fun learning opportunities also.

**Justin Garrison:** Yeah, for sure. So thank you so much, Autumn, for joining again. This was a great talk, and we will talk to you all again soon.
