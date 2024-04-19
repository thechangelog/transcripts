**Justin Garrison:** Hello, and welcome to Ship It. I am your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hi!

**Justin Garrison:** This episode has been fun to record... This is our third time tried to record this one for audio issues, for various reasons... It's always fun to try to record things.

**Autumn Nash:** I blame your lack of hair.

**Justin Garrison:** I am bald now, and maybe that had jinxed it. It's very possible.

**Autumn Nash:** I think Riverside doesn't know what to do with the lack of hair, so we're having audio issues because you shaved all your hair off.

**Justin Garrison:** This is all AI-generated now. My voice has been cloned, and that is why we had audio issues.

**Autumn Nash:** I low-key thought someone kidnapped you and was impersonating you.

**Justin Garrison:** Someone broke into my office, and jumped on the Ship It recording studio, and says "We're going to record this episode." \[laughs\[

**Autumn Nash:** Okay, in my defense, I show up to the studio and your camera's black. And it's never black. You're always here before me, and you're always doing something in your garage. And then I show up and it's black, and I was like "Either this is the beginning of a Saw movie, or something's wrong." And then you turn your camera on, and you have no hair. I thought someone attacked you and shaved you, or something, or something happened...

**Justin Garrison:** I lost that battle. I lost the battle with age. \[laughter\] All my hair's falling out. It's fine.

**Autumn Nash:** You're not even that old. You know what's funny though? You look really young, and I feel like you are my favorite big kid friend; me and you are ridiculous together... So we'll just be young when we're 85. It'll be fun.

**Justin Garrison:** That's fine. I plan on never actually acting old. That's totally fine.

**Autumn Nash:** I don't think you know how to.

**Justin Garrison:** I would be terrible... I'm still just gonna be playing Lego, until I can.

**Autumn Nash:** Sometimes I look around and I'm like "Who gave me kids and let me be the adult?"

**Justin Garrison:** Really -- yeah, "Who gave me responsibilities?"

**Autumn Nash:** Yeah, do you ever just look around and you're "Oh, s\*\*t, I'm the responsible one"?

**Justin Garrison:** I mean, when you first get that pager and you're like "You want me to what?"

**Autumn Nash:** Oh, dude... I was terrified for the first year. Terrified. I would have so much anxiety... And now I'm just like "YOLO."

**Justin Garrison:** I mean -- but kids have no runbook. I'm just gonna say, 24/7 on call, no runbook. It was terrifying.

**Autumn Nash:** That's why they should hire especially moms. People always want to downplay the fact that people have to take off work and go have kids, and I'm like "Yo, we are resourceful. We solve problems. And we live Team No Sleep." We are perfectly made to be engineers. Like, duh. We literally manufacture our own projects, and then keep them alive. We are constantly on call. Like, you're welcome.

**Justin Garrison:** Yeah, you have maintenance down, everything. That's full cycle.

**Autumn Nash:** Right? We be maintaining stuff, like, keeping them alive... Can we get some credit? Moms are made for this life. I was like "You know what? I've kept kids alive. Software can't be that bad."

**Justin Garrison:** Yeah, that's true. Speaking of shipping software, on today's episode we have Adam, who talks all about moving developer environments from a Kubernetes-based local development into Nix OS. And Nix package manager, whatever you want to call it. A really cool episode on just why they decided to go a different route from what production looks like... Because usually, the idea is you want your development environment to look just like production... And they've found that's not the case. So stay tuned for that.

But first, we want to talk about links of the week. As always, this isn't a new show, this isn't something that we're trying to bring you all the latest and greatest news, but we do find links that we want to talk about, and we found them interesting. So Autumn, why did you go first this week?

**Autumn Nash:** I love tech news. Also, one thing I did want to say about our show with Nix is I thought that was a really good explanation of Nix, because I phoned several people trying to explain what Nix does at scale, and I thought he did a really good job of an overall explanation, you know?

**Justin Garrison:** Yeah, it's one of those things that's really hard to trim down, partially because it means different things. There is an operating system, there is a package manager, there's the idea around these environments... But the thing that he points out in there was the Dev Env, which is a project built around Nix packages, which I've found really cool. It's like "Oh, I don't have to do this from scratch."

**Autumn Nash:** Yeah, so I thought he did a really good job summarizing kind of the functionality of it all, and how it made it better for his developers. So I thought that was cool. I felt like I had a better understanding after he talked about it. So my link is NASA's new moon car for Artemis astronauts will be inspired by Mars rovers. You guys know how excited I get about space... So I'm super-excited about this. This is going to be the moon car to explore the dark side of the Moon... So that's really interesting, being that it's so cold on that side. What did you say it was?

**Justin Garrison:** Negative 300 Fahrenheit, just about.

**Autumn Nash:** \[05:57\] Okay, but it's crazy, because the pictures for the article look it's kind of -- if you took an ATV, and a Mars rover, and it had a baby... So I'm like "How are they gonna stay warm?" I mean, I know your space suits are warm, but...

**Justin Garrison:** Yeah, hopefully they have some heaters in there... Because yeah, if you're on the dark side, that is very cold. But I mean, on the light side it's also very hot. So spacesuits are kind of amazing.

**Autumn Nash:** That is true. I heard that if you're a certain height, you can't fit in the spacesuit, so you can't be an astronaut.

**Justin Garrison:** I imagine in general saving weight and space inside of spaceships - like physical space, not space space - is pretty difficult.

**Autumn Nash:** My best friend wanted to be an aerospace engineer, and she wanted to be an astronaut, and she got into Georgia Tech, and started taking these classes... And then they're like "You're too short to be an astronaut." It's rude. Y'all couldn't just make a small mini spacesuit? She would have been the most adorable, tiny mascot. Not mascot, but astronaut. Well, she would have been a really cute mascot that was an astronaut also, because she's so tiny... But rude. Short people deserve to be astronauts, too.

**Justin Garrison:** It's true.

**Autumn Nash:** And she'd be super-compact, and you could fit her in things... I mean, she could have been the real MVP of astronauts, but... Anyways, I think this is so cool, because they contracted three different companies. I know one is SpaceX, and there's two other ones... But they announced the new concept car, and they're building this for the Artemis space exploration launch. So I just think it's going to be really cool to see the new generation of space cars, and what's added to it... And I just want to know, are they running Linux in the software, and what's it built on, and all the things.

**Justin Garrison:** Well, and NASA does have a GitHub. There is some software out there that if you want to look at some of the open source software, they publish stuff. And that's one of the cool things that I started digging into. I was like "Oh, what's this written in? How does this run?" And yeah, it's gonna be embedded systems, and it's one of those "We care about memory, and how much we're using, and bugs cannot be fixed easily." So all that stuff is really cool, just seeing how they develop and build this stuff, and how long it takes to kind of go from "We have a plan, and we're going to send someone to the Moon again", or robots, or whatever, "in a decade."

**Autumn Nash:** How amazing is it that you could build software that's going to be in NASA's car that's gonna drive around the Moon? That is so cool. There's also a Java -- one of the coolest open source projects that I've seen is a NASA project, and it does a lot of simulation software, and different things... But it's written in Java, and it is an open source NASA repo. I think it's so cool that they open source and you can contribute to NASA. How cool is that? What if you contribute to something that's running in space? That seems so neat.

**Justin Garrison:** Yeah.

**Autumn Nash:** What's your link?

**Justin Garrison:** My link for this week is called Software Needs to be More Expensive. And this is kind of a reaction to the Backdoor XZ thing that happened, the CVE that happened just a couple of weeks ago, about how do we make this better. And in this article, one of the major arguments is - similar to what happens with the coffee industry, where coffee is kind of expected to be so cheap at the end, where you're like "I'm not gonna pay more than five bucks for a cup of coffee", that affects the entire supply chain. Everyone that works on it doesn't get paid living wages, because at the end, the end result needs to be this "I need less than $5." And open source software is free. And how does that affect that supply chain of people that write it? And even though it costs $0 to duplicate the bits, the maintainers' time is what's affected, and the people that are building features, and creating new values, or fixing bugs inside of the open source software does cost money, and those people need to be paid.

So this person is arguing that we should have some sort of discretionary fund for any company that uses open source software; all their developers should have a $50 stipend, and it just goes to wherever. And I think it's an interesting idea, but I don't think that money --

**Autumn Nash:** \[10:05\] It's an interesting concept.

**Justin Garrison:** ...it just puts more money into the system, and I do think that that would be valuable to some extent, but I do think that the outcome of that is going to be something like popularity contests between open source projects, and a lot more competition between open source... Which isn't really necessary. Because open source doesn't have to compete. The people that write it also don't have to maintain it. There are reasons that open source can exist just because they wanted to, and that's okay. Putting money into it also is like this level of "How much money is going into it? If I'm only getting $100 a month, I can't make a living on it. But if I'm making $10,000... Like, oh, wow, this is a full-time job. I should just do this." And in figuring out that balance for who's maintaining the software, and how it's being maintained and paid for over time is a hard problem.

**Autumn Nash:** I almost think it's kind of like volunteer firefighters. On the West Coast I didn't even know that people had volunteer firefighting until I got moved to the East Coast... So a lot of them will have a few firefighters who are paid a full-time wage, and then the rest will all be volunteer, and they'll be called in to volunteer when something really bad happens, or they need it. Ad I almost wonder if they could pay maintainers maybe, or pay a certain amount of contributors, but I'm not really sure $50 donations are going to make a huge difference. Not just because of -- I mean, depending on how many people contribute, I know $50 could eventually grow to a lot... But I think the variety of open source projects - some need much more maintenance, some don't... It's really hard to have a one-size-fits-all...

**Justin Garrison:** Yeah. I mean, at scale, with enough developers putting in $50, maybe there's a lot of money going around. But also, I help out on the Kubernetes infrastructure SIG, and our bill for running Kubernetes tests is hundreds of thousands of dollars. That's just to run the infrastructure. We just have to pay for it. And it's like, where does that money come from? Thankfully, cloud providers put that money into it and say "Hey, you can run on our stuff." But the maintainers themselves, the people running the infrastructure aren't getting paid for that work; that is all volunteer work. It's just like "Hey, we have bills. We have real infrastructure costs." But all the money is going to that. And so different projects will have different amounts of requirements for how much it costs just to test it and validate it, and make sure things run and release it.

**Autumn Nash:** Also, I love open source, but there can be a lot of gatekeeping. And then how do you pick who gets paid?

**Justin Garrison:** Yeah. And the back door that happened, the XZ Utils, that was someone stepping up --

**Autumn Nash:** That is wild, because that was a long game. It's almost impressive. At some point that will be taken into cybersecurity classes and taught, because that is the new Trojan horse. He contributed multiple contributions, and multiple bug fixes before he created a backdoor. And it was a very creative backdoor that was built to download a binary, wasn't it? So it's not like it was a straightforward backdoor either. So it's really interesting; what mechanisms can you even put into place to do that, because how long do you have to watch and not trust your contributors at that point? And people need help.

**Justin Garrison:** Even the reports that came out, that there were other people adding comments to the mailing list of like putting pressure on the one maintainer to say "Hey, you need to add someone else to be a maintainer." It's like, those were fake accounts. It was just the one person --

**Autumn Nash:** Those were fake accounts?!

**Justin Garrison:** Yeah, the one person was putting pressure for -- hey, emails are free. You can make an email and a profile and say, "Hey, I'm a user. I need this feature", and bug someone.

**Autumn Nash:** I didn't even think of -- that is some evil genius bad actor. That could be a TV show.

**Justin Garrison:** So there's a lot in there that's just like "How do you trust this--"

**Autumn Nash:** \[13:53\] That's what I'm saying. Can you imagine, we're trying to figure out how to make open source less gatekeepy and to allow more people in... But then you get people like this, who spoil it for everyone. And we're trying to break down the barriers, and now we're like "Do we need even more barriers?" This is wild.

Also, open sources iis N a weird place right now, with OpenTofu versus Hashi, and Redis... It just seems like nobody can agree on where we go forward and how we melt corporate engineering power and money and open source... So I think -- well, not just that, and then the EU law that open source is working with... It's just interesting, like, what does the future of open source look after all this? Because there's a lot of changes happening, and things are going to have to reconcile at some point.

**Justin Garrison:** And you mix that with just the ability to have computers write code that functions, and sort of gen AI...

**Autumn Nash:** That's another interesting one.

**Justin Garrison:** It's going to be a very interesting year, maybe two years of what does open source look like when writing the lines of code is essentially - not free, but the effort is much lower. It's like "Well, do we trust certain AI, or certain people?" or whatever. That's a really weird space, and licensing is completely separate. That's all for distribution, like, who can use it, and how do you use it? But yeah...

**Autumn Nash:** Well, and it's also more complicated, because we don't know what the courts are gonna decide for intellectual property that comes out of AI. So that's a whole other thing, like, who owns that code when AI creates it? And then also, maybe you don't have a bad actor maintainer, but what if a bad actor starts writing stuff into AI? And then it gets AI to create bad code.

**Justin Garrison:** Yeah. If you think your build system is complex, try to track where that line of code came from, that was generated from some LLM...

**Autumn Nash:** Sometimes I think that AI will make us more efficient, but it may also complicate things more than it's worth... You know what I mean? I don't know, it's gonna be really interesting. I feel like we were talking the other day about how far infrastructure has come, and how much it's changed in the last 5 to 10 years... And now we're about to go through a whole other revolution of open source, and AI... So it's interesting, like, where will we end up later.

**Justin Garrison:** Speaking of writing code, let's jump into the interview with Adam, and we will talk to you after.

**Break**: \[16:17\]

**Justin Garrison:** Alright, today on the podcast we have Adam from LastPass. Thank you so much for joining us, Adam.

**Scott Chacon:** Thanks for having me.

**Justin Garrison:** Can you tell us who you are and what technology you're responsible for?

**Scott Chacon:** I'm a principal architect with LastPass Platform engineering organization, and we are running our production infrastructure on Kubernetes. And obviously, we have our developers trying to develop for this platform. And we had Kubernetes developer environments, but due to struggles with decided to switch it to Nix. So this is what hopefully we will talk today about.

**Justin Garrison:** Yeah, that desire to "Hey, production looks like Kubernetes, so I should put Kubernetes everywhere" is a real struggle. And the fact that you just "We tried some things and moved to Nix" is really interesting to me. So you're responsible for specifically the developer environments, or for the production environments? Which part do you do?

**Scott Chacon:** Unfortunately, my responsibilities - or luckily - are a little bit broader. So basically, as a platform engineering architect, we are doing both the cloud infrastructure, CI/CD, all the kind of stuff that you usually call DevOps, and we are also managing the developer experience, and the internal developer portal. So everything that is basically from DevOps to platform engineering's buzzword probably belongs to us.

**Justin Garrison:** So basically a sysadmin, we used to call that. Just, you did everything that was beyond the code, and...

**Scott Chacon:** Yeah... I mean, I usually try to label us as everything that is not feature development for the product.

**Justin Garrison:** So how does that play out? You have developers, they're going to ship something to Kubernetes, but they need to test something locally... And you mentioned that you were starting with Kubernetes, and there was "struggles", which is a very loaded term now. Can you describe how that kind of came about and what you were trying in the past?

**Scott Chacon:** Absolutely. So basically, I was using Kubernetes for like six years now, even before LastPass, and I also used \[unintelligible 00:22:03.10\] and Kind at my previous workplace... And when I joined, then the developer environment was mostly Docker Compose, and they are running the containers, mounting stuff into that... And that worked somehow okay-ish, but obviously, it wasn't without challenges. And obviously, anything that makes a difference comparing how we run our software is making any development effort much more difficult. So like config differences, how you set up things, and you don't test what you actually run in production - it never ends up well, in my experience.

**Justin Garrison:** Yeah, using Docker - it was like this great boon for production environments. It was like "Hey, we can ship something that's reproducible, and we can distribute it with these registries..." But also, developers now have a much more complicated environment to spin up. And sometimes they can reproduce it easier... Right? Because I can take a Docker Compose file from an open source repo or an internal repo and say "Oh, just run all the components here." But how I get into those containers, how I manage and mount files into them, how I do all this stuff locally becomes really difficult. And when you add a layer of Kind, or Kubernetes API on top of that, you're just like "Oh, actually -- I don't understand how big production is, or how complex it is. I don't want to bring all that complexity to my machine."

**Scott Chacon:** No, actually, you don't want to do that. But if you start to build containers, and you start to want to make sure that the developers can have access to their debugging tools, and everything, then you already started the first. So then you will have two container builds. And then, obviously, on LastPass we traditionally use PHP. So PHP is like Python, you don't compile it, you just mount it under the PHP runtime... But obviously, if you want to run a PHP container in Kubernetes, you won't mount your files into the container. So you already make differences.

\[23:59\] And obviously, for PHP you even have to compile the PHP runtime with Xdebug flag if you want to do debugging. So again, that will make the production different. So this is adding up, and basically, this is what didn't work for us, so we wanted to try something else... So we -- because I had experience, I did a POC on top of Kind, and maybe we can run it in Kubernetes... Obviously, it can happen, and we can make it, but the issue was more about the developer experience that the developers had. So comparing to saving files locally, and then reflecting in the runtime instantly; we could do syncing files from local to remote... But it's error-prone. And if \[unintelligible 00:24:44.08\] breaks the syncing part, then it rebuilds the container, which takes a lot of time, especially if you have a ton of code. And this is \[unintelligible 00:24:55.01\] for frontend developers. I mean, you can run the frontend locally, but if you start to \[unintelligible 00:24:58.20\] it into containers, then you have to compile it, so likely you use the hot reload, and every other nice things that they can enjoy in their local environment.

**Autumn Nash:** What made you pick Nix, and what is Nix, I guess?

**Scott Chacon:** So this is a very good question... So basically, Nix is multiple things. So you have the OS, that is a Linux-based OS. Then you have the Nix CLI, that is basically -- sometimes they call it package manager, but it's slightly more than that. So basically, this is how you basically interact with the whole Nix ecosystem. And you have Nix the language, that is a purely functional, lazy-evaluated language, which is usually the issue with Nix to actually -- you have to learn Nix the language to use Nix the CLI, so you can build basically Nix derivations, which is what we can call packages, basically.

**Autumn Nash:** When Justin likes a technology, or knows what someone's gonna say next, he has like this proud ad face, like...

**Justin Garrison:** My face was really just around "I'm hoping that I understand and could explain --" I would love to be able to explain Nix the way Adam just did, because that was great. Because Nix to me is -- yeah, it has the operating system... But then after that, it always gets to this weird space; like, the definition of Nix seems to be the topic of Nix communities a lot of times... Like, what part of Nix are you talking about? Because it's the same word used over and over again for the language and these -- I don't know if it's a package, or if it's a tree of symlinks, whatever you want to call it. So why would you go with something like Nix, that says "Hey, we need to have this language that we need to evaluate and start running to be able to let developers run environments?" What benefits were you getting with Nix that you were trying to eliminate in Kubernetes?

**Scott Chacon:** So two thirds of our developers are on macOS. So if you ever run Docker on macOS, then you will realize soon that the --

**Autumn Nash:** It's horrible.

**Scott Chacon:** \[unintelligible 00:26:58.05\] performance is horrible. They improved a lot, but it's still horrible. And if you think about running your Kubernetes on top of kind - so basically, you have a Docker VM that is running containers with the Docker runtime, and then within the Docker container you are running a Containerd runtime, that will actually run your containers. So you have lik three layers of abstraction, which obviously hits your performance significantly. So you need much more resources than you ever needed for running them locally.

**Autumn Nash:** What is Kind exactly?

**Scott Chacon:** Kind is an awesome project by the Kubernetes team, that is Kubernetes in Docker - that's what it's abbreviating - and is basically running Kubernetes CI to test different scenarios. So for example, you can define multiple nodes with a simple YAML, and then different settings, you can install a custom CNI, you can do a lot of things with it. So basically, it's better for testing different failure scenarios, or things like that... But also, it's very easy to start.

**Justin Garrison:** \[28:10\] And I guess, taking a step back from that development environment, the main ideas behind "I want to develop something that's gonna run in Kubernetes" is you either bring all the Kubernetes stuff locally on your machine, and that's like you run Kind locally, and that gives you an API server, and then Redis for your database, whatever it is that you need to develop against... Or you use another service that would ship your code or mount your code to a remote Kubernetes cluster, and say "Oh, the Kubernetes cluster \[unintelligible 00:28:31.23\] over there, and I'm just mounting my filesystem and syncing it back and forth, because I have everything running over there." And with Nix, you're just getting rid of both those things. You're just like "Actually, this is just files on a disk, locally, and we're gonna develop it', right?

**Scott Chacon:** Absolutely. And actually, we were thinking about, okay, let's run it like, again, Eks, or running Vcluster on top of Eks, or something like that... But at the end, we realized that, obviously, the team that deals with this environment has experience with Kubernetes, but most developers don't. And after running over more than - I don't know - 18 months this environment, we noticed that most of the developers doesn't contribute. They only have sometimes issues, and they expect then someone to help them fix it. Troubleshooting is hard, getting \[unintelligible 00:29:18.14\] hard. You have to educate them how to use KubeCTL, or let's download K9s to have a better UI, and everything... And it's adding up. And also because Kind was designed for like this throw-away cluster, so you basically start the container, you finish your testing, and then kill it. But if you want to have persistence, then it's getting even more tricky, because then you have to basically simulate everything that the Kubernetes clusters usually do \[unintelligible 00:29:48.02\] they cannot have a proper CSI driver that is using some random cloud storage that automagically binds the volumes. You know you have to use local storage. So to use local storage, then you have to basically bind mount something from the running Docker container into the actual Kind container... And then you have to bind mount that to the actual local filesystem you are running; then you are running into file permission issues, and all the magical stuff that a Unix file system can provide for you.

**Autumn Nash:** Usually when you hear people talk about Docker and Kubernetes, you talk about them separately, like Docker versus Kubernetes. What's the reason to run Kubernetes in a Docker, I guess? What made that decision to, I guess, start there?

**Scott Chacon:** So basically, we wasn't prescriptive about what to use, but my experience is much more stable than the Kubernetes built into the Docker for desktop application. I managed to crash completely my Docker for desktop Kubernetes so much that I actually had to manually edit the config file, because I couldn't even disable it. On Windows we had less issues with Docker for desktop Kubernetes. I'm not sure what's the difference between them, but on Mac, it was completely unreliable.

**Justin Garrison:** My guess, just not knowing the details, is Hyper-V on Windows is actually really good, and macOS'es virtualization layer is not so good. Which is also a reason that I've run Linux forever. And performance-wise it's great. But I want to get back to this, like, how do we talk about Nix now? You're gonna say "We're gonna throw away all that work, that 18 months or whatever that we were doing this stuff, and developers weren't used to it", and at some point, developers know how files work on a disk really well. And that's something that people can usually understand. But which portion of Nix are you using? You mentioned that it's an operating system, it's a language, it's a "package manager." How are you using Nix to set up developer environments?

**Scott Chacon:** Okay, so basically how we get to that, that we wanted to do this... So again, it started as a POC, because we obviously want to listen to our developers, because even if we are supporting their environment, they are the ones that use them all day. We obviously run them, test them, whatever, but we are not developing in them per se. So they are the ones that are experiencing all the pain that we caused them. I can say that.

\[32:17\] So we listen to their feedback, and because of the performance reasons and multiple other smaller issues that we couldn't fix, like the persistence... I mean, if you have both Windows, WSL, and you have Mac, and you have to do this persistence through Docker and Kind, it's practically impossible to make sure that in every single environment it will work reliably, and you don't run into local configuration issues.

So basically, I was eyeing for Nix for a while. There was a new project that was very, let's say, encouraging, called Devenv. And Devenv is a very nice way to get into the Nix ecosystem. So it's kind of abstracting away some of the complexity, but also giving you reusable parts. You obviously sooner or later want to have some other services than yours. So for example, you need a Postgres, or a MySQL database, or Redis. Or maybe you want to have some S3 storage simulated locally with MinIO, then you can just basically enable that with a flag, and all the config is provided for you, and if you want to customize it, you can do it. So basically, it had the building blocks, and it has the process manager to actually start it for you. So this is kind of an easy way to get started with a complex environment, I think.

**Justin Garrison:** So it is a wrapper on top of Nix for packaging. Right? It has a command line that interfaces to a config file, and you say, "Okay, Devenv \[unintelligible 00:33:50.28\] start your environment, which is going to switch your libraries and your dependencies to the correct versions, as well as create services that you can access with whatever you're trying to program, right?

**Scott Chacon:** Yes, so basically, it has its own CLI, so you can use the very simple abstractions over Nix, but you are still writing Nix code. And the CLI has some benefits comparing to using directly. Or you can choose to run it with the so-called flakes. That is a controversial topic within the Nix community. It's deemed experimental, but practically in the last two, two and a half years it gets traction, so practically, if you run into any Nix trouble, you probably will need a flake.nix file, and this is how you can run without the CLI this Devenv stuff. So basically --

**Justin Garrison:** I'm not familiar with the -- I've heard the term flakes, but I have no idea what that actually does.

**Scott Chacon:** So basically, if you write a Nix file, then it has to be evaluated. And if you use the Nix packages repository, then basically you've got all the dependencies of the whole ecosystem together. And basically, how you can evaluate that - as I mentioned at the beginning, Nix is lazy-evaluated, so it only executes a code path when you actually want to access it. So basically, this is how you can load the whole Nix packages into memory, all the tens of thousands of variables... Because most of the time it's not used, so it's not actually loaded into the memory unless it's evaluated. And it's a nice way to do this, but if you want to build a derivation locally, you write the function, you write the inputs, and you have to provide the inputs. And if you provide Nix packages as an input to your derivation, then it will defer basically whatever you define Nix packages as. So the flake concept was a way to solve this dependency pinning issue. So in a flake-based project you will have a lock file that is basically pointing to a certain commit of the Nix packages or any other input, and that way you can basically get absolutely reproducible builds by not depending on local settings. I hope it makes sense.

**Justin Garrison:** \[36:11\] Well, essentially it's a lock file; it's a way to lock your dependencies and say "Hey--", every language net today has some form of lock file, and say "I want this version of this thing."

**Scott Chacon:** Yes. And it also defined the schema, that is basically having inputs, and having outputs. That's it. But the issue is that in every Nix expression you only have a single input, and you only have a single output, and you don't have basically anything in between. So if you want to have multiple input values, then you have to use an attribute set, like an object. And if you want to have a multivalue output, then you have to use an attribute set again. Nix doesn't have too many types of variables, because it's not a general-purpose language. It's designed for building, basically, packages.

**Justin Garrison:** In the five minutes we've been talking about this, you haven't yet convinced me that Nix is less complicated. \[laughs\]

**Autumn Nash:** Well, in a way, I can see how you're not having to run Kubernetes and Docker, and all of that, and it does seem simpler. But how do you balance that with learning a new language and learning this new other system?

**Scott Chacon:** I never said that Nix was easy, so...

**Justin Garrison:** None of this is easy, for sure, but you're going to something that's at least a little more reliable, or more reproducible for people. And to Autumn's point, less resource-intensive to run, if we're running it locally.

**Autumn Nash:** Isn't that kind of funny though? Just going to Scale and just going to different talks, and people talk about Docker versus Kubernetes versus Nix, and all these things... And it's like, essentially, in a way, they're all ways to operate things, like virtual environments, containers, and all these things, but they're also so different. They have so much that relates, but it's also amazing how complex they all can be in their own environments, I guess. It's just amazing how people make these choices, and then you're kind of -- I wouldn't say stuck with them, but you know, it sounds good, and then you get in there and you're like "Wait..."

**Scott Chacon:** Yeah. So basically, the language is simple, but you obviously have to understand how to deal with functional programming, which many people struggles with, because there is no order in the execution. You basically execute whatever is resulting at the end, so you can easily write syntactically valid, but completely unevaluated code, which actually doesn't even work unless until you hit that code path, and then it breaks the build. And sometimes these error messages are obscure. But I don't want to deter anybody from doing Nix stuff.

So why we ended up with that... So basically, it's complex because it's makes you deal with all your build complexities and all your environmental complexities upfront. So with Docker you can say "Okay, let's build an old JS app, so I will just use Node.js latest, or Node.js 20 from Docker Hub. I will copy my source code, run npm EI, or npm CI, whatever you fancy, and then npm run build, and then you're done. Then you realize that you probably need multistage builds, so you will start to do that. And then you have to create your runtime, you have to probably provide NGINX and stuff like that to run your static app, or you have to use, I don't know, Node.js slim, because you don't need Python for Node, but probably you don't care, and you just use the non-slim version... So basically, it ends up somewhere, but basically you always end up with much more dependencies. With Nix you don't have any dependencies to start with, and then you have to declare all of them upfront. So basically, this is how it's getting kind of complex... So you have to have that build.

Also, Nix build's running in a sandbox. So if you want to run secure builds, then you have to be sure that how you are building your stuff. So the sandbox means that it does not have logs output, it does not have any user inputs during the build, and it also has no network.

\[40:04\] So basically, whenever you want to build something, everything has to be provided upfront. And this is where it gets tricky. Basically, how you can provide these inputs up front and not run npm install during your build, because you have to fetch all the npm packages that you want to use for your frontend build up front, provide it some way, and then \[unintelligible 00:40:26.04\] way of npm setup automagically, so it will be symlinked together and provide the reliable build at the end.

**Justin Garrison:** What is a build in this sense? Because you're not building an artifact like a container, right? Or maybe you are still building -- I mean, assuming you're still running in Kubernetes in production... So is your build step that taking the Nix environment and taking the dependencies and putting it in a container? Or are you building some other artifact?

**Scott Chacon:** Every Nix build results in a derivation. But what the derivation contains is completely up to you. I mean, obviously, there is some standards... And this is what the ecosystem tried to make sure, that you will end up with the same results across the different stack. But basically, the derivation will be a folder under Nix store path, and it will contain something that you declare there.

So I don't know, if you have a Go app, then you probably end up with the store path slash bin, slash your package name, and that's all you've got. But if you want to provide, for example, some config file next to it, you can still CP it into the old path, and then it will be in your derivation as well. But basically, whatever you end up with has been declared upfront, and can be deterministically calculated upfront. So this is how it gets a hash.

So if you change any of the build inputs, then the hash will change, so your output will change... Which is kind of nice, because in case of Docker, there is always some kind of impurity in the build process... Like, you don't declare the image, the logs will have different meanings... And ultimately, even tar is not deterministic when you're compressing the layers. So even the tar layers cannot be compressed reliably.

**Justin Garrison:** So I have a folder now. I ran a Nix build and I have a folder with some files in it that I can reproduce. And then what?

**Scott Chacon:** Then you basically can use it to execute the binaries. So basically, how Nix works is that - it's not gruesome; if you use brew on Mac or Linux, you install something, and it will be available globally. In case of Nix, people usually don't install anything globally. They store it in the store path, and then for whatever they need, they include it. So for example, you probably have multiple frontends; one of them is on Node 18, one of them is on Node 20, somebody experimenting with Node 21... And then you probably end up using NVM Node Version Manager. And people maybe install, maybe not. Maybe installed the Node version with NVM, maybe didn't; maybe you have the same minor version, maybe you don't. With Nix you have your shell.nix, or flake.nix file with the \[unintelligible 00:43:16.24\] attribute, and then it actually says that "Okay, I want to have Node.js 20." And in that Node.js 20 with the lock file you actually get the same minor version, regardless what you do. And if you had this a year ago, and back then you were in Node.js 18, then when you go back with the commit, and you go into the shell, then you will get Node.js 18. You don't even have to care what was declared, because everything will be worked for you when you open the Nix shell. And when you exit, nothing will be installed per se in your computer, because it's not in the path. So basically, all the tools that you use is basically symlinked and added to the path variables, basically simplifying it. And this is how you get these isolated environments with Nix.

**Justin Garrison:** \[44:08\] Do you know how that's different or similar to something like a Python virtual environment? Because it's not in my path. It's a isolated environment. I can declare my versions. I'm curious how those are different or compare --

**Scott Chacon:** Conceptually I think it's very similar, but it works for basically everything. So for example, you want to run, I don't know, CloudFormation. Then you can include your AWS CLI, and then people doesn't need to figure out "Okay, do I need to use v1, v2? Which version it was working with", because there is obviously sometimes API changes, and things like that. So basically, you can get this reliability without people actually having to read the readme, and do the installation, and then ending up with a different version because time passed by, a few months, so they updated the package... So it's always kind of a hit and miss how reliable your install scripts or readme are to provide the same experience for everybody. This way, you can basically automagically do that.

And there is the DRF project, which you can hook into your shell, and when you enter the folder, it automatically loads the environment. And when you exit the folder, it unloads everything, and then you have a clean slate.

**Autumn Nash:** Do you feel like Nix has improved developer life for your developers? And how did you train them to go from Kubernetes to Nix for it to be a better experience, I guess?

**Scott Chacon:** Yeah, so this was one of the concerns that we had, that this is obviously complex, and even less familiar to them than Kubernetes. Because they can read Kubernetes, there is lots of resources, lots of videos to get help, and lots of great educational content. But Nix - there is some gaps with the documentation, especially around flakes; because flakes are not considered stable, then the official documentation doesn't contain anything about this. So everything else is somewhere on the internet, except the official documentation, which kind of makes it difficult to use.

But at the end, because everything is on the file system - so for example, you start a db and you see it in your git ignore repository, in the .deveng/slate, that there is, I don't know, a MySQL folder, or a MinIO folder, and my files are there. So questions like previously, like "Okay, how can I reset my db to zero and reinitiate it?" It's simple - you delete the folder, and that's it. So you don't have to explain that to people, because everybody uses folders and know how to remove it.

And then when you want to -- okay, I need to do some kind of script... So they look into it, and at the end it's Bash. So like "Okay, I can write my shell script." Obviously, most of developers don't write 100 lines elaborate Bash scripts, but they can write easily ten lines of Bash script that does what they want. And they can actually test it easily, they don't have to build a container, create a job YAML from some random template, so they can run it, and figure out how to trigger it... But I have to retrigger it, but it doesn't work like that... So basically, by having just the simple building blocks, we already see much more contribution from varying people that previously with the Kubernetes won't. Because the complexity is there, but for their problems, most of the time they can manage it, because they see the configs, they can see the changes, and they can retest it. And building all the containers for a developer environment, because we have a ton of services to actually run the full-fledged environment probably took sometimes more than an hour. And even just to start from like a well-worked cache, a local container registry probably still took five minutes to actually start the cluster, because on Mac it's just slow. And even on Windows it's slow.

\[48:06\] With Nix I start the environment, if everything is prefetched, it runs it in less than 10 seconds, fully operational; everything works, everything started. All the database, all the services, everything is running. If I have to start from a cold start, nothing installed, probably, depending on the internet speed, it takes like 15 minutes maybe. And we are still trying to improve that to be under less than ten.

**Justin Garrison:** We started the conversation with trying to make the development environment look like production. And I'm assuming you still have Kubernetes in production, and now you have a very big difference between local environments where they do development, which are simpler, but when they ship it somewhere, when it actually goes out and runs somewhere, it's a completely different mindset of how they're going to interact with that and debug things. How has that played out?

**Scott Chacon:** Before I reflect exactly to that - so you would say that, okay, running or Kind, running on Kubernetes (and we run production on Kubernetes) would be kind of similar. But actually, we struggled a lot with this. Not because it's so different, but because in production you want to have multiple replicas, you want to have maybe auto-scaling; you want to have network policies. You probably want to have, I don't know, service mesh or some sophisticated CNI. In developer environments you don't need that. You don't want to deal with that, because you already have enough complexity. And at the end, we ended up to remove stuff from our production manifest, to dump it down, basically, for development... And that created a lot of headaches. Because you start to remove stuff, and then you accidentally forget to remove something else, and it breaks things. And to be honest, Kubernetes and Kubernetes even, they wasn't similar. We believe that we could make it happen, but this was the kind of realization that it's having to have a simple dev environment is so different to run in production. You cannot add tolerations, or anti-affinity rules, or topology hints, or whatever. You cannot add that to local, because it's a single node at the end. So all of this magical stuff that Kubernetes can help you with is gone, and you have to remove that. And this is adding basically even more variations.

So to answer your question, with the Nix environment we have a completely different set of problems, but at the end, you can build containers with Nix... Because at the end OCI artifacts is basically tarballs with a JSON file. So you can do that, and you can actually do that reliably. So we have immutable texts in every container registry. And that was very -- like, okay, if we rebuild this same code because the somebody modifies the readme, and we want to \[unintelligible 00:50:53.19\] CI for a readme change, if it is not set up properly, then it will fail on the build push. But actually, it didn't, because the actual digest that build process generated was matching, so the ECR just told us that "Okay, we have this. Fine. So you can push it. All green."

**Autumn Nash:** What kind of feedback have you got from your developers?

**Scott Chacon:** So actually, we wanted to make the transition gradual. So we first started with a closed beta, so we get our feedback. That's what kinda got broken during the development. We fixed it, then we kind of opened the public beta... And at the end, everybody migrated away from the Kubernetes one, even before we close the public beta titles.

I mean, the reliability - we got feedback like with the previous one sometimes it just didn't start, and they have to troubleshoot it for an hour. And to be honest, we didn't even know what break locally between yesterday. He shut down the PC, and then the next day it doesn't work. With this, I've heard "I can do my work, because I can trust that I opened my Mac, and in five minutes everything is running, and that can continue frontend development."

\[52:09\] And also, as I mentioned, syncing files is no longer present. So if you modify a PHP file, it's reflected instantly. If you want to do frontend development, everything on localhost. So you don't have to hack around port forwarding, what you expose. With Kind you have to do load boards, and all kinds of stuff... And at the end, so if you're running a localhost, then all this how to expose services for a frontend dev is not existing, because everything is exposed already, so you can run it. I want to connect to a db - the port is open on my machine, so it's absolutely there.

So basically, these are the troubleshooting issues that they don't encounter every day... So until it runs, most people doesn't care. And it runs because everything is basically reliable, because we don't have local issues, what kind of config they have... Everything that needs to be set up is set up within the environment, and doesn't need to really provide a readme file to "Let's go through this." No. You install, you start, it works. And that's it.

**Autumn Nash:** That's huge, because - I mean, nobody wants to sit there and troubleshoot for four hours, trying to figure out why your machine won't even work. And I mean, let's be honest, developers are expensive, and if they're not doing their job and they can't develop, then that's a huge waste of money and time. So it sounds like it's been really effective...

**Scott Chacon:** I mean, we had issues that we troubleshooted hours, and at the end we figured out that there was a new CLI version came out, and the developer downloaded the latest instead of the version that was mentioned in the readme. And - I mean, it happens. With the lock files, basically, every CLI is provided for them, so they don't even have to care what version. If I move back between commits, it will be checked out automatically. So retrospectively, you can easily test that if that change broke something or not, because this build basically moves with you when you are running in your repository.

**Justin Garrison:** One last question for me is - and maybe this is a misconception on Nix OS and Nix the package manager... When I am developing on something and Nix makes those symlinks for a version of the CLI, or whatever it is I'm using, you said that gets loaded into memory at - not compile time, but when I'm looking at "I want to execute this environment or work on this thing." And long time ago, when I was first playing with Nix, it would do that with symlinks and set up that environment variable. But then if I opened a new shell and I said "Oh, I want to go work on something else that needs a different version", I couldn't, because it was like a global change. Is that a problem in these environments, or is that just because I was doing something wrong a long time ago? It's one of the things that I always wanted to ask about Nix, and it never kind of came up.

**Scott Chacon:** I'm not a Nix expert, I'm just an enthusiast... But basically, this is how Nix packages set up. So if you have a Nix packages commit, then you have certain versions of certain tools. If you update that commit, basically the new version of Nix packages, then you updated your desired tool, and every other tool probably, that is there.

**Justin Garrison:** Globally.

**Scott Chacon:** Globally. So this is sometimes a struggle. Obviously, multiple softwares have multiple versions. So for example, Node.js or Go has all their actually supporting version; there is always a default one... There is a rule of which one they choose, but there is multiple versions. But if you want to have a specific version, then you have to do some workarounds. So for example, with flakes you can declare multiple inputs, and you can declare an input for a certain state of the Nix packages repository, and you can use from that input that certain dependency. It's increasing your memory usage, and it's slightly slowing down the environment, but at least you can actually make sure that you can pin to some version.

\[56:06\] And also, there is some other workarounds, like using so called overlays for Nix packages, or for any other input, which practically means that you are declaring your own stuff. And declaring your own stuff doesn't mean that you want to change... Even the versions - for example in our case we are changing PHP. Why we're changing PHP? Because PHP works by providing your necessary extensions, and the extensions have a default set, but we need more than that, especially for local environment, like, as I mentioned, Xdebug. Xdebug is not part of the default PHP runtime, because it's for development purposes.

So if you want to have your own PHP versions, then you can even overwrite what is in Nix packages locally, and then you can build it for yourself. And this is kind of the Nix guarantee that -- because the compilation is stored in the derivation, whatever you choose until you don't break the build, anybody can build the same version, with the same output.

**Justin Garrison:** Well, Adam, thank you so much for coming and explaining how this has been working for you at LastPass, and making the \[unintelligible 00:57:12.15\] environments. If someone wants to learn more about this, or reach out to you, is there a place that they should go? Do you have a social media or a blog or something like that?

**Scott Chacon:** Yeah, I have Twitter, I have a BlueSky account, which I don't really use, and obviously -- I mean some of this Nix Discord as well... So there is multiple places to reach out, for sure.

**Justin Garrison:** Well, we'll add some of that to the show notes, and thank you everyone for listening.

**Autumn Nash:** Thanks.

**Break**: \[57:40\]

**Justin Garrison:** Thanks again, Adam, for coming on the show and talking to us all about how you went from Kubernetes to Nix. And the thing that I thought was really cool was just the fact that they boiled down all the complexity of running this whole container orchestration system down to files. And it's just like, at the end of the day, people know how files work, and that is much easier to deal with than layers of containers and VMs and networks. And the more we can put into files on a file system, the kind of easier it is to reason about and debug.

**Autumn Nash:** I think that's a really valid point too, because when you're onboarding people, the majority of the people are going to understand and be able to kind of get on board and innovate faster when it's concepts they've already kind of been accustomed to, you know?

**Justin Garrison:** So for today's outro, we actually want to talk a little bit about remote development environments, because this is something that's kind of come and gone in waves with different products that have come out... And just wanted to talk about what's out there, and what we've been using or trying. And the kind of OG, or the original remote environment - it's just like a straight-up RDP, remote desktop protocol. You just have a client on your machine, and you have a VM somewhere else, and you just stream the whole desktop. Just like "Give me the whole thing, go full-screen", and you're in that environment. It can be Windows, it can be Amazon WorkSpaces, it can be a lot of these options.

I used to manage a VDI environment, a virtual desktop infrastructure environment; that was kind of how I got into being a sysadmin with Citrix... And so I was really used to like "Oh, we can run a VM over here, and we can stream the screen to you wherever you are on a thin client." And remote desktop environments still can work that way, and it just kind of gives you the whole computer experience. You don't have to worry about which pieces of this are here, which ones are over there... It's just like "Oh, here's a big box, and we're just going to give you the display portion of it."

**Autumn Nash:** I think this is, again, kind of the "Is it worth the trouble?" For something small, it's just so easy to SSH and use Vim, if it's a small change.

**Justin Garrison:** Right. And that's the other, like "Hey, I don't need the GUI, I don't need all this other stuff. I do most of my development via SSH in Vim. And I just use the console." And I always kind of kept the console as my lowest common denominator. I can always get a console on something, and so I've done things where I've made code changes on my phone, and I regularly do programming on an iPad now. And then I'll be at my desktop.

**Autumn Nash:** You and that iPad...

**Justin Garrison:** I always just SSH back to the desktop, and that's kind of my central point. And things like Tailscale and VPNs have made that so much easier to get access to the system from wherever. My iPad has a 4G connection, or 5G, whatever it is, with Tailscale. And I can be anywhere.

**Autumn Nash:** He loves his iPad, y'all. He loves it.

**Justin Garrison:** \[01:04:03.26\] I like the size. It has limitations, for sure. There are things I cannot do, and I want to do on it, that I cannot do, that I used to be able to do on a Linux laptop... But for distractionless, sort of just "Give me a console", and Vim, it's great.

**Autumn Nash:** I think if you're making a big code change, or it's something that involves formatting, where multiple files -- I don't know, it depends on how big the change is, or multiple files. Sometimes I do think remote desktops and being able to run an IDE on your virtual desktop is valuable, but 98% of the time, unless it's a big code change, I'm just too lazy, and I'm just going to SSH in and use Vim.

**Justin Garrison:** Right. And the size of the repo matters a lot sometimes, where it's like "Oh, I've gotta --"

**Autumn Nash:** It does, because your performance is horrible if it's too big, you know?

**Justin Garrison:** And that's where you really need something like a big IDE. And VS Code has the remote server and code server, which is -- you can have a web-based version of it, or even just your local VS Code that can connect to a remote system over SSH...

**Autumn Nash:** I want to love VS Code, but I just can't. I'm definitely an IntelliJ, PyCharm person, and I just can't do it. I'll download IntelliJ on a remote dev desktop and run it on a remote connection before I even attempt to use VS Code.

**Justin Garrison:** Yeah, every time -- I tried really hard for a few years to use VS Code as my main IDE, mainly for dev mode...

**Autumn Nash:** I've tried plugins, I've tried everything. And the fact that you have to save it, when IntelliJ saves -- don't me wrong, IntelliJ had some moments where I was like "What are we doing?" But for the most part, it just works better for my workflow, and the way my brain understands things. What's your favorite IDE?

**Justin Garrison:** I've always just gone back to Vim. People say it's not an IDE, it's just an editor, but the amount of stuff I put into it... I use Lazy Vim as kind of a framework on top of it, which makes it much more IDE-like, and actually, you can run some VS Code extensions.

**Autumn Nash:** I'm going to try that.

**Justin Garrison:** I'm still getting used to Lazy Vim. I switched to it when I switched to this new job, so only a couple of months ago, so I'm still learning keyboard shortcuts that are brand new to me... But a lot of the fuzzy-finding and file opening and management is what I liked about VS Code, where it's really quick to do. And because it's all terminal-based, I have it in Tmux. And I just disconnect from Tmux, I go somewhere else, I come back to it...

**Autumn Nash:** What's Tmux?

**Justin Garrison:** Tmux is a shell multiplexer. It's like a virtual terminal inside your terminal. So when I disconnect from a server, it stays running. Tmux is always there, and you can attach and detach from it, from multiple systems. And you can even do it from multiple systems at once. And so I always have Tmux open. I've always had Tmux, since I was a sysadmin, and that's like the first thing that I run on any terminal. And then when I SSH somewhere, I open Tmux, I can disconnect it... If I get disconnected over SSH, Tmux stays running, and everything I was running stays there, and I don't have to worry about "Oh, I can't close this connection" or "I can't lose internet."

**Autumn Nash:** Isn't there a Bash command that will keep your connection open, even when your local may disconnect?

**Justin Garrison:** There's ways to keep the connection alive, but there are some things, like firewall settings and stuff that are always a little more aggressive. VPNs, firewalls, that sort of stuff kind of gets in the way. And so Tmux is just a way to always allow it to be available, if I'm connected or not. And I can always reconnect in, and then rejoin the Tmux session.

**Autumn Nash:** I like it.

**Justin Garrison:** So yeah, I've used that one for a very long time.

**Autumn Nash:** Do you feel like Emacs fans are a religion?

**Justin Garrison:** I don't know. I mean, I feel like Vim fans have a similar sort of fandom...

**Autumn Nash:** I've never met people that love anything the way people love Emacs.

**Justin Garrison:** It's like people love Arch Linux. As soon as you run Arch Linux, you have to tell everyone you're on Arch Linux, and I feel like maybe Emacs is the same...

**Autumn Nash:** My best friend's kid does really love Arch Linux.

**Justin Garrison:** There you go. And actually, there's one for Dvorak keyboards as well, which - I use a Dvorak keyboard, so now you know.

**Autumn Nash:** Tell them why, Justin. Tell them why.

**Justin Garrison:** Because I have limited mobility in my wrist from an old injury.

**Autumn Nash:** How'd you get the injury?

**Justin Garrison:** I broke my arm crowdsurfing at a concert. In high school. A long time ago.

**Autumn Nash:** There are pictures on the internet. First, you have to see Justin's high school hair. That's where we've got to start this. And then... Guys, I was traumatized.

**Justin Garrison:** \[01:08:18.22\] If you go to JustinGarrison.com and search for "crowdsurfing", you will see --

**Autumn Nash:** He traumatized me with his arm completely broken and going the other way, and I was like -- and he did this on the same day he decided to be bald, and it was just a lot for one podcast. \[laughter\] I was like "Whoa..."

**Justin Garrison:** A lot of new information.

**Autumn Nash:** I was not caffeinated enough for this information...

**Justin Garrison:** Yeah, so that injury, as -- I use a Dvorak keyboard, because it's more comfortable for me. I also use a 45-degree angle keyboard, because I cannot bend my wrist that way... But yeah, and keyboard shortcuts, not moving my hand back and forth to a mouse has helped me a lot, which is one of the reasons I use Vim.

**Autumn Nash:** You're so effective. Also, children, this is why you don't crowdsurf.

**Justin Garrison:** It was fine.

**Autumn Nash:** Did you stop crowd surfing after that, or did you do it again?

**Justin Garrison:** I stopped for a while...

**Autumn Nash:** You're like "I went back after a while..."

**Justin Garrison:** I mean, it took a while for the bones to heal, and then I had to prove to myself that I wasn't scared of crowdsurfing again... So we did it some more.

**Autumn Nash:** But why?!

**Justin Garrison:** It's fun. It's fun. The last remote dev environments I just want to point out to are things that are fully browser-based, where it's like you don't have this sort of remote connection. And it's meant for environments where it's like - maybe this is a Chromebook, maybe you don't control the environment... These work great in lab settings. We just did Scale, the Southern California Linux Expo, and people that came with workshops that were fully web-based had a fantastic time. When you had to clone it locally or rely on someone's local machine to set stuff up, it became a little more difficult. So...

**Autumn Nash:** Something's always broken when you have to rely on how something works different on your local.

**Justin Garrison:** Yeah. So GitHub has Code Spaces, which is really nice. It's integrated into GitHub. It's different than the code editor that's just in the web browser. So if you're on a repo and you hit the period key, it'll open the editor... But you don't get a terminal; you don't get a full VM. You have to go to Code Spaces to get that side of it, which is great. It works for doing a little more inside of the repo, especially if you want to modify multiple files in a commit.

**Autumn Nash:** I really like just the straight code editor, when you just need to make something really small, something like documentation.

**Justin Garrison:** Single file readme... Yup, I just do the code editor, I submit a pull request from that.

**Autumn Nash:** It's so much easier.

**Justin Garrison:** Gitpod is another one. Gitpod has a self-hosted version, which integrates really well to GitLab, but it's a separate product.

**Autumn Nash:** Oh, interesting. I've never used that before.

**Justin Garrison:** Yeah. And it's very similar to Code Spaces, where you get that whole code server VM environment, and you can run it yourself. So I tried that a little while for a little while too in my home lab Kubernetes cluster, trying to run Gitpod and see if I would want that... And I always just kind of went back to SSH and Vim.

**Autumn Nash:** I think it's just easier. Like, it's harder when you first start --

**Justin Garrison:** It is really difficult, yeah.

**Autumn Nash:** ...and you're like "Why do people do this?" And then all of a sudden you're like I'm just gonna Vim into it", and you're like "They've got me."

**Justin Garrison:** And I was a baby developer, learning just what terminals were. And my onboarding, when I started at Disney Animation - someone came and they did the onboarding, and I watched them navigate Vim like a ninja. And I was like "I do not know what you did at all, but I want to learn how to do that", because it was amazing. And ever since then, I've been hooked.

**Autumn Nash:** I was like "I'm never gonna be able to do that." Now I'm just like "Oh, let me set the number lines, and do this real quick." And I'm just like "I love it." It's just so easy.

**Justin Garrison:** Yeah, the muscle memory is so -- you don't have to think about it after doing it for a while, so...

**Autumn Nash:** It's definitely a hard start. So if y'all just started, don't feel bad.

**Justin Garrison:** And Vim has built-in tutorials. There's a game built into Vim.

**Autumn Nash:** Really, there's a Vim game?!

**Justin Garrison:** Yeah, it's just built it. I don't remember what the command is. I'm gonna look it up now.

**Autumn Nash:** I'm gonna give that to my kid. I'm trying to get him to type more.

**Justin Garrison:** Vim Tutor. Is that it? Yeah, yeah.

**Autumn Nash:** I didn't know that was a thing.

**Justin Garrison:** Colon vim tutor, and it'll start going through "Hey, let's do keyboard shortcuts. Let's show you how this works." And that just kind of launches it in, and you can -- it's movement in some small things, like delete a word, go to insert mode, that stuff... It's hard to get used to at first, but I've been using it for 20 years, and it's definitely paid off for me.

**Autumn Nash:** I can't believe you've been an engineer for 20 years. Not because like -- I always forget that you're older than me, and I'm like "But how?!" Compute the numbers... Now you're really going to look younger, because you have no hair.

**Justin Garrison:** I'm trying to stay young, you know?

**Autumn Nash:** You went from crowd surfing to dad jokes, Justin.

**Justin Garrison:** \[laughs\] It is the circle of life.

**Autumn Nash:** It's okay, we still love you, even if you're getting old. You're gonna be the old man at conferences.

**Justin Garrison:** I remember when I was a kid at concerts, and there was always someone that was older, right? At that time, because they're like 30 or something like that... You're like "Oh, they could be 30, they could be 40. They might be 50." I'm like "Why are they here? They're so old." Now I'm like --

**Autumn Nash:** You called people old, and now it's come back to you...

**Justin Garrison:** Yeah. I was just at a hardcore show in Japan two weeks ago, and it was amazing. I was the old person. And that's fine.

**Autumn Nash:** Now you're the old dude. It's so cute.

**Justin Garrison:** It's fun.

**Autumn Nash:** You're gonna be like the hardcore grandpa. It's gonna be so adorable.

**Justin Garrison:** It's gonna be good times.

**Autumn Nash:** And Beth is gonna still look like she's 20. It's gonna be great.

**Justin Garrison:** Thank you everyone for listening to the show, and we will talk to you again next week.

**Autumn Nash:** Bye!
