**Jerod Santo:** Alright, Adam, so in September of '21, at the end of the last time we had you on the show, we said "Come back when System Initiative launches, and you said "I'll dive as deep as you want. I'd love nothing more than to spend however long you want to talk to me, being nerdy about it. Believe me, no one wants to tell the story of what that thing is and why it's amazing more than I do."

**Adam Jacob:** That's super-real.

**Jerod Santo:** Yeah. And so here you are, nerd out with us. Tell us the story. It's a couple years later and you were already toiling for some time when we said that, so...

**Adam Jacob:** Yeah, it was not an easy thing to build.

**Jerod Santo:** What's been going on man?

**Adam Jacob:** Yeah. Well - so yeah, System Initiative, now like a public thing. You can go learn what it is, and watch a demo video, and you can come in join the community... We're going to open source it soon. There'll be a little tracker that can tell you how close we are at open sourcing it. Basically, we need to add a couple of features before we're ready to open source it, but soon... And yeah, I'm stoked about it. And basically, we're trying to rebuild DevOps from the ground up, and change the outcomes for what I think are kind of mediocre outcomes that the majority of us have sort of come to experience.

**Adam Stacoviak:** When you rebuild, do you demolish along the way? Do you obsolete things along the way? And if so, what dies?

**Adam Jacob:** Well - yeah, okay, look... So I suppose we should back up. Maybe I \[unintelligible 00:05:28.14\] straight to incendiary too soon... \[laughter\]

**Jerod Santo:** wait a few minutes...

**Adam Jacob:** But I want to make it cool, you know?!

**Adam Stacoviak:** "Rebuild from the ground-up!"

**Adam Jacob:** It is rebuilding it from the ground up. Here's the thing. So I went back and watched John Allspaw and Paul Hammond's talk from 2009, the "10 deploys a day at Flickr." That was basically the moment that DevOps started. Patrick Debois I think was in the audience, or at least saw the talk shortly thereafter. I think he was there. And that's sort of what led to DevOps. And if you watch them give that talk, it's an amazing talk today, and they describe how they deploy Flickr 10 times a day... And the way that they deployed Flickr in 2009 is essentially exactly the way that we tell people to do DevOps today. the tools are completely different, we've replaced the tools 50 times... You've got a ton more options about which things slots into which part of the workflow, or whatever... But that workflow - unchanged since 2009. You put in some code, it goes into CI, at some point someone \[unintelligible 00:06:29.01\] a button, you do some feature flags, you do a little dark launching... Like, you put it on a blender, get some monitoring and observability... They were using Ganglia; now you'd be like "We use Honeycomb", because observability is better than monitoring, or whatever... You got some Data Dog... But essentially, it's identical to what we did in 2009.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** And the last DORA report talked about how there was 88% of all the companies reporting can't deploy more often than once a week, to once every six months. And that's insane. 14 years later, 88% of us are stuck, can't deploy more often than once a week...

**Jerod Santo:** Wow.

**Adam Jacob:** And it's not because we didn't optimize each individual tool. It's not like you can point it at a single tool and be like 'Oh, it's whatever. It's Jenkins' fault", or "It's like Chef's fault."

**Jerod Santo:** We try to do that though, when we're mad, don't we?

**Adam Jacob:** Yeah, we try. But, but it's not, right? The truth is that what worked for us in 2009, in the small, when you say "Now I want to extrapolate that same way of working to solve the problems of every enterprise on the planet", the problem was the system itself. The way that we interacted with it, the way we conceptualized how all the pieces come together, that's the reason that we're not getting the outcomes we want. It's not because we're not like DevOps-ing hard enough. Do you know what I mean? Like, nobody wants, really, I think -- people actually are now saying that they want to go back to a world that was more like devs do devs and ops do ops, and never the twain shall meet, because the experience of doing DevOps the way that we conceptualized it in 2009, when you extrapolate it out to 2023, is kind of miserable.

\[08:15\] And so when I say we have to rebuild it from the ground up, I mean it, in terms of like, I think the shape of the system as a whole is actually what's holding us back. And our ambitions were the right ambitions to begin with, but our ability to actually achieve those ambitions - we now know that if you just sort of DevOps a little harder, swap one tool for another, but keep the basic shape the same, you're probably going to wind up deploying once a week, once every six months, it's going to kind of suck, and you'll be kind of miserable about it.

**Adam Stacoviak:** What was the reason for this once a week with the DORA report? Did they cite why it was once a week? What were some of the bottlenecks that made it once a week? I mean, we can deploy... I mean, we're a smaller team though, but what would make you not be able to deploy more than once a week?

**Adam Jacob:** Yeah, I mean, sometimes it's the complexity of the deploy. So if you think about how you deploy the software, if you think about how the build pipelines work, if you think about how -- like, do you need to make changes to infrastructure? How do you collaborate together on the infrastructure changes? How do you coordinate them together with the application deployment changes? What about your QA team? Maybe you have one; does that mean there's a lead time where they get to like bake in the software? There's a million questions like that, where like we have answers, but once you glue it all together, it's quite complicated.

If you've ever seen people use like an enterprise-grade TerraForm repository, that's like a lot of code. You know what I mean? It's not like an easy-peasy thing. It's like a whole giant computer program that's factored in a particular way... Slack had a post not that long ago, where they have -- I think it was like 1,000+ state files that they were tracking for how they use TerraForm at Slack. And so if you want imagine, as a developer, trying to influence -- you wrote some code, and it needs to change the way the infrastructure at Slack works. What do you do? How does that work? Do you load that all into your head? Where's the collaboration? And the answer is "In pull requests." So maybe somebody told you "Well, you have access to the repo, so maybe go figure it out, man..." Or they didn't give you access to the repo at all, and then you just had to go find somebody else to do it. But mostly, we do it in code review. And code review is great, but it's not very collaborative. Like, "You do the work, and I review it." It's there in the name, you know?

**Jerod Santo:** I submit it, I wait for you to review it, and then...

**Adam Jacob:** Yeah. And then you tell me if it's good or bad. You're probably wrong... You were busy when you reviewed it. Maybe you got it, maybe you got it wrong...

**Jerod Santo:** How dare you...?

**Adam Jacob:** No, obviously, your pull requests are always correct. But it's a real thing. And if you ask people how they feel about it, very few people will tell you that they love the experience of doing DevOps work. The user experience of it; the actual human "What's it feel like to do this?" We're good at it, and we're proud of it, and it's unequivocally better than it was in 2009. So don't get me wrong... If your choices are "Do it the way we do it today" or "Do it the way we did it in 2008", all day, do it the way we do it today. All day. But is it good? I don't know. Like, not really.

**Adam Stacoviak:** Well, you're the kind of person, Adam, that looks at things from so many different facets, and I think you have a way to express your ideas well, and then you're also the kind of person to examine a system, to say "Okay, is this the right way this system should be?" Obviously, System Initiative makes good sense in the name of the biz...

**Adam Jacob:** Yeah. Suddenly, the name makes sense...

**Adam Stacoviak:** Right. I think that's a good thing. So if we're rooting for somebody, it's you. It's you we're rooting for.

**Adam Jacob:** \[11:55\] Thanks, man. But I think actually we need to be rooting for us. I mean, more than anything, if you think about it, what's amazing about DevOps is that it happened at all. Basically, the message that said "Operations people and software developers are the same, and we need to work together to create these outcomes that are better, not only for our day to day work and how we feel about each other, and our personal experience of the work, but also for the businesses that we serve." And it's kind of amazing that that cultural transformation is so widespread. Very few people -- you know, it's like what happened with Agile; lots of people are maybe doing waterfall, but if you ask them, they'll almost all be like "Oh, we're definitely doing Agile. We wouldn't do waterfall..." You know, because the culture of Agile is so dominant that even if you're not doing Agile, you're doing Agile.

**Jerod Santo:** Because it's embarrassing to say what you're actually doing.

**Adam Jacob:** Yeah, because it'd be embarrassing to do anything else. And DevOps is kind of the same, right? You wouldn't say "No, we don't allow the ops people to talk to the devs." That's insane now. And it definitely wasn't insane in 2008. But I think what needs to happen in DevOps, I think, is we need this second wave of DevOps tooling, where people realize that the problem was systemic, and that we need to actually build new solutions that change some of the fundamental rules of how these things worked.

We made choices -- John and Paul, I love; they're incredible. But so is everybody else that influenced how we work. But we just made choices based on what we knew and what we had, and built the systems that we thought would work. And it's okay to realize that they didn't work the way we wanted them to in the end. And that what we need to do now is experiment again. Like, now we need to actually go try new ways, and be like "Well, what if we did explore new ways to deploy applications collaboratively? What would a world where we could deploy applications, but we didn't require a code review, but we still had all the same safety properties look like?" I don't know the right answer to that question, but I want to. I think that could be better. And I think once people realize - I hope people start to realize that we shouldn't give up on those aspirations that we had in 2009; that we were right, and the evidence that we were right is how pervasive that culture has become. And what we need to do now is live up to our own aspirations by being willing to do it. Being willing to actually do the work, and create something fundamentally different than what we have now... Because, right now, we kind of know what happens. Like, if you adopt all these tools, whichever ones you choose, and you put them together roughly the way we told you to, you're probably going to wind up, 88% of you, deploying once a week, once every six months. Not collaborating super-well. That's what's going to happen. And we can do better. We should do better. We deserve better.

**Jerod Santo:** So when you started down your path to where you are now, with something to show, and you thought to yourself, "We can do better, we should do better. I'm gonna try something fundamentally different", what was your starting point? What was your base premise that you built from and said "This is going to be different. Here's where I'm going to start"?

**Adam Jacob:** Yeah. So I had two co-founders, Mahir Lupinacci and Alex Ethier, and I think my starting place was that there was something wrong with the system as a whole. So that insight that what was wrong was the way we did it; that that was the whole thing, not just a single tool that was wrong. And I had some ideas around making the automation smarter, basically using like relationships and inference and constraints theory to think about how we could infer more of the configuration instead of so much repetition.

\[15:48\] One of my co-founders had a background in visual effects, and so he had a lot of ideas around how the interface itself could be changed to serve us better. That if you thought about the way we deal with really complex -- you know, the level of complexity that you see in big video games, triple A video games, or those sorts of things - we have really powerful tools that are very collaborative with people across multiple disciplines, working together to produce those triple A games. And the user experience they're having versus the experience that DevOps people are having is pretty dramatic, right?

**Jerod Santo:** You're talking about the people building the games, not playing the games, right?

**Adam Jacob:** Yeah, totally. Yeah, building the games.

**Jerod Santo:** Okay. I guess I'm not familiar with what tooling they have that's better than what DevOps has...

**Adam Jacob:** Well, if you think about Unreal, or you think about the way that you can collaborate on building scenes, or building shaders, or rendering, and you can go from like a high-level interface, where you see all the relationships of all the different objects in the scene... But then you can also get down to the C++ code, that actually makes that particular thing work... And you can do that dynamically, in the same IDE. And you can't do anything like that in DevOps work. You're in your editor, writing code, then you run a plan, you hope it works, you apply it later... None of that is possible. And so a lot of where we wound up was really focused on the user experience, and saying "Okay, if we want it to be collaborative, if we want it to be more intelligent, how do we build a system that actually enables that to happen?" And there's a bunch of stuff that sort of gets in your way. So some of it is the feedback loops... You know, if you have to talk to the real AWS API, or actually create the infrastructure to do something, that takes forever.

**Jerod Santo:** It's slow, yeah.

**Adam Jacob:** So suddenly, everything's slow. So if we want to speed them up, then the only way we could figure out how to do it was to basically build a digital twin, and say "Hey, even though this asset is digital, let's build a model of it that's like one to one, and then simulate that model the same way that like a Formula One race car gets simulated", because you don't like tweak the race car and then drive it and then tweak it and drive it. You put it into a big model, tweak it, and you do a bunch of airflow simulation, and...

**Adam Stacoviak:** We saw this in Cars 3. They did that in Cars 3. It was a great simulator.

**Adam Jacob:** Exactly. The inspiration was Cars 3.

**Adam Stacoviak:** That's right.

**Adam Jacob:** There'd be no System Initiative without -- what was that little car's name, the red race car?

**Jerod Santo:** The Italian one?

**Adam Jacob:** Yeah.

**Jerod Santo:** Or are you talking about the guy who was working on stuff? I don't know...

**Adam Jacob:** Anyway, I forgot all of their names...
**Adam Stacoviak:** Well, Lightning McQueen is the main character...

**Adam Jacob:** Lightning McQueen, yes.

**Jerod Santo:** Oh, that's who you were looking for, was the main character? Okay.

**Adam Stacoviak:** Well, he said Ka-Chow...

**Jerod Santo:** He said like Ka-Link, or something.

**Adam Jacob:** No, Ka-Chow. He's right, it's Ka-Chow.

**Jerod Santo:** No, I'm saying what you said, Adam, was more like --

**Adam Jacob:** Yeah, it wasn't right, because it wasn't actually him. It wasn't Ka-Chow.

**Adam Stacoviak:** It was a caricature of what should have been true, yeah.

**Jerod Santo:** Right.

**Adam Jacob:** Yeah. It was a poor simulator. So we could have given me -- see, you gave me immediate feedback, that my Ka-Ching was wrong, and that it was in fact Ka-Chow. And so now I can adjust and do the right thing. And so System Initiative does the same by basically building this really full-fidelity model of all the stuff that you use. And then we use that model to infer configuration. So we can say, "Hey, your model of a Docker image knows that this Docker image exposes a port number, therefore if you wire that up to a Butane configuration to run on a Fedora box, then it'll automatically expose that port when it writes the Systemd unit file for you that you need to boot that service." And you don't have to remember it anymore. And if you change the port number, it'll automatically get changed everywhere, and you can watch it happen and sort of flow through this visual graph of all the configuration. It's super-cool, and much faster than doing it yourself.

**Jerod Santo:** Can we dive into the digital twin thing for a moment, into the weeds?

**Adam Jacob:** Yeah, man.

**Jerod Santo:** How do you build a digital twin of a moving target? I mean, it's gotta be difficult when your twin diverges from the real thing, because... AWS is not a solid-state service.

**Adam Jacob:** What a great question. Yeah, I mean, the thing is, it moves slower than you think it does.

**Jerod Santo:** Okay.

**Adam Jacob:** \[19:53\] So this comes back to some of the reasons that people tend to be less ambitious than they should be. Like, when you think about -- when you look at something like AWS as a target, you're like "How could anyone ever cover off on all of these services that are in AWS?" And you're right, there's a lot of them. And also, they're not that hard. It's mostly documented, it's quite detailed... You can like understand them... And yeah, it's going to take a minute to like write all of the models, and also, you can then refine the process of writing models. So for example, in System Initiative one of the things we know needs to happen before we open source it is that you need to be able to write the model in System Initiative itself... So that you can immediately just write the model, tweak it a little, play with it, tweak it, play with it, tweak it, and never have to leave the flow. And that makes creating models both fun, and also not that hard. And the same thing is true with sort of extending them.

So yeah, it's a big list, but also, it's kind of straightforward... And they don't actually change as much as you think they do. So if you look at like the EC2 API, it's only really had a handful of dramatic changes over the years. We had like new instance types, we had new stuff, but mostly, it stays the same. If you look at the S3 API, it's gotten more complex, but mostly because they've added more objects and more things you can do around the core of the S3 API. Again, that core API, kind of the same. So yeah, there's a lot to do there, but lots of people, some venture capital dollars...

**Jerod Santo:** Right. Throw money at the problem.

**Adam Jacob:** Next thing you know, you've gotten a lot of AWS coverage, right?

**Jerod Santo:** Right.

**Adam Stacoviak:** How do you keep these digital twins in parity? Like, if there is a change, how do you institute that new change?

**Adam Jacob:** So you bake it into the system. So basically, the idea - we have a schema that defines the digital side of the model. It also defines the sort of resource data, so the real world information about it, and you track both. They're both true. So there's not a single source of truth, there's actually two; there's the simulation, and then there's the real world, and you track both. And then what people do - what we do is let you reconcile between them, right? So choose which one is actually correct right now. And so you can go from the world to the model, or the model to the world. But you basically just make a new variation.

So under the hood, the way this thing works is you can just imagine every configuration option, and every action you can take the as a function that's sitting on a graph, and it takes inputs from other parts of the graph. And then anytime the inputs change, the function runs. And then we take the output of the function and we store it as the output on the graph. So when you set a configuration value, what happens is we calculate all the inputs, then we take the output and write it.

And so when you think about how you would then change over time, you're gonna have all these schemas, which then people build variations of, and those variations might be because the upstream API has changed, but it could also be because you've been adding customizations on top of the existing thing. Because it's one thing to have a cool model, it's another thing to be like "Hey, here in my company we're only allowed to use these 3 AMIs. And you can't launch a system with another one." So that's something you can encode in System Initiative in a qualification, and it would make a new variation of AMI, that is like the upstream AMI, but is now yours, right?

**Jerod Santo:** Sure.

**Adam Jacob:** And so that shape of easy, quick customization is built into the system, so that you can just evolve the model as it makes sense in your environment over time.

**Jerod Santo:** Sounds like Lisp. Are you using Lisp?

**Adam Jacob:** It's not Lisp, but it does sound like -- but I'm so glad you brought it up, because it's actually probably even closer to SmallTalk.

**Jerod Santo:** Okay...

**Adam Stacoviak:** Cool.

**Adam Jacob:** So if you cast your mind back to the old like alto demos, where they would like tweak the way the alto worked in the demo... There was that one where they had the bouncing ball, or whatever, and then he like --

**Jerod Santo:** You're going way back now.

**Adam Jacob:** \[23:59\] ...he like edited the window, and changed the code for the streaming thing so that now he could take single stills of the bouncing ball... Or maybe to animate it; I don't remember what the order was. The point was, he changed the operating system in real time by clicking a button and being like "Let me edit the source code for this part of the operating system."

**Jerod Santo:** Right.

**Adam Jacob:** And we just forgot that was a thing you could do. And so a lot of what's in System Initiative actually draws a very direct inspiration from that moment, where I'm like "Hey, you know what would be great in DevOps work? If anything I see that I need to change, I could just change the code, without having to stop", which is exactly what it lets you do. And it's better. It turns out that's super-good. At least I think it's super-good...

**Jerod Santo:** So I guess -- I mean, thinking about just the surface area of some of these APIs, I now know why you've been working on this for so long. I mean, there's just a lot of work there, or was that a small percentage of

the overall effort?

**Adam Jacob:** It's actually -- so there's not very much coverage right now in System Initiative.

**Jerod Santo:** Okay.

**Adam Jacob:** A lot of what we have spent time on - like, everything I just said, no one had ever built before this way. I didn't talk about the fact that -- like, that graph I just described, it also has built-in change control. So when you decide you want to make a change... It's not actually a graph, it's a hypergraph, because it's N-dimensional. And so you can have a different function, at a different moment in time, depending on your perspective... Which is what you need, because part of what you do when you collaborate with other people is just like put up a whiteboard and be like "Well, I think it's this. Or what if it was that? Or what if it was this way?" And sometimes you want to keep that, and sometimes you don't, but you want to be able to do it in the same environment as the one that you'll finally do get the right answer in. And all of that is wickedly complex. Like, how do you build change control into this hypergraph of functions that are all dispatched in real time? It's a lot. It's complicated.

**Jerod Santo:** Maybe just fork Git, or something. Shove some Git in there. \[laughs\]

**Adam Jacob:** Yeah, just fork Git... Except you can't, because part of how deep this rabbit hole goes is that once we decided -- like, Git's beautiful for source code, but if you look at what the root causes of a lot of the bad user experiences we suffer in DevOps work, it's source code. It's that it's words; it's that it's factored the way that it is. It's that it's not a digital model that I can ask questions about, or interrogate, or programmatically update. I can't do any of those things. All I can do is declare them, write them in some files, and hope.

**Jerod Santo:** Right.

**Adam Jacob:** I can see a textual diff of -- Git will give me a textual diff of whatever it is I'm looking at. But it can't tell me the impact... It can't tell me "Hey, you don't want to restart the production database 2pm on a Tuesday", because it has no way to know that that's a production database. It just knows that it's a block of code. You know what I mean?

**Adam Stacoviak:** There's no intelligence.

**Jerod Santo:** Yeah. It's like a connection string to Git? It's like "Here's your connection string."

**Adam Jacob:** Yeah, exactly. It's just a string. I don't know, what do you put in there? Whatever you want. Did you get it wrong? How do you know? Well, I deploy, and nothing connects anymore, because I foobar the connection string. But even that you have to know, like what file us it in, and how do I find it?

So a lot of the effort that went into building System Initiative was really just the effort of just continually pulling on this thread and being like "Oh, man --"

**Jerod Santo:** You're gonna have to build everything.

**Adam Jacob:** Yeah. If we actually want this to be better, you have to just keep tugging, and be like "Okay, yeah -- well, nope, we can't make that feel good, because this other thing is in our way. So I guess we've got to rethink how that thing works, so that we don't lose all the good parts..." If there weren't integrated change sets in System Initiative, and instead it was just like YOLO mode all the time, you would reject it immediately as a toy.

**Jerod Santo:** Yeah.

**Adam Jacob:** You'd be like "Oh, no, I can't use this thing."

**Jerod Santo:** Right. We'd get fired.

**Adam Jacob:** Yeah, it'd be insane. So that's why it's taken so long, is that it can't just be one piece where you're like "Hey, look at this cool toy I made", where you can build a little diagram and it does some infrastructure stuff for you. No, it has to be like a full-fledged power tool that actually proves that you can do some complicated, hairy shenanigans with it.

**Break**: \[28:16\]

**Adam Stacoviak:** We were getting to the point where we were talking visual, because you described Diagram... We've had the pleasure of watching your five-minute demo, which is essentially you're laying out a diagram that seems like a model of what should be infrastructure; and you're connecting Docker images, and you're correcting them along the way, and you're choosing Fedora CoreOS, and you're choosing EC2, and deploying... Like, this is a model. Can you describe, as best you can, what that diagram is? Do you call it a diagram? What is the interface for System Initiative? What was that demo?

**Adam Jacob:** Yeah. So it does sort of center around the idea that there's -- we struggled with what to call it, so yeah, we call it the diagram.

**Adam Stacoviak:** The diagram, okay.

**Adam Jacob:** But I'm sure it's gonna need a better name. I'm sure there'll be other diagrams. We've called it a schematic in the past... But what's interesting about it is that essentially, you need a way to think about the relationships between the models. So if you're building -- we're building these full-fidelity models, so we're not abstracting things from you, we're not translating them into a different domain... So if you know how Docker works, you know how the model works for Docker. If you know how AWS works, you know how the EC2 model works. And then visually, we're letting you create sockets, essentially, that have data that flows through them. And so you can connect the data about a Docker image to things that can use the data.

So an example here is like Docker images have a socket that exposes their port numbers. If you have port numbers that you've exposed in your Docker image, there's a socket that will take that data and emit it. And then visually, you can just connect that socket to something that takes it as an input, for example an ingress rule in AWS that sets up a firewall rule that lets that traffic flow through. And then it will automatically translate between the shape of the data in the Docker image and the shape it needs for the ingress rule. So in the Docker image, it's like 80/TCP is the syntax, and then in the ingress rule, you need the port number, but they don't care about the protocol, blah, blah, blah.

And so when you think about doing all that stuff in code, it's actually kind of tough, because you'd have to describe the relationships... How do you do it? What's the declaration look like? But if I just take all of what is fundamentally code in the end, and I slap a visual interface on it, it's suddenly quite straightforward, because you're like "Oh yeah, I can just click on this thing, and drag to the other thing." The fact that behind the scenes it's all software, it's all JavaScript functions, and you can just call them and manipulate them... That's true. But it's a lot faster to just do it by putting them on the screen and connecting them. And it's certainly easier when you think about collaborating with other people, because you can visualize it, you can see it, and be like "Well, this is what the architecture is, and this is how it works", and it's kind of laid out that way. But it's mostly a diagram of configuration more than anything else.

**Adam Stacoviak:** Yeah. It's easy to go from that visual artifact to the code, which is sort of in the sidebar, but it's easy to go from what would normally be YAML files, essentially, or some sort of config files; pick your battle. Like, a visual interface is the natural way humans think anyways.

**Adam Jacob:** It is. And if you think about how then the YAML file gets generated, it's just another function. Inputs are the object, or is the model, then we have a function that emits code. And you can generate it and write it yourself. So if the model needs to emit some YAML, you attach a function to it that emits it as YAML, and maybe manipulates the data, and gets it in the right shape or whatever, in the middle. And then every time you change the information on that model, we automatically regenerate the code for you.

So this is how we do things like populate user data in an EC2 instance. So you can go from a Docker image, to the Butane configuration, which then gets translated into a thing called ignition, which is a JSON Syntax for configuring a Linux instance running Fedora CoreOS, and then that needs to get packaged up as user data, which is Base-64-encoded to get to the other side. And all that just happens automatically for you, because we've just written some functions that are like "Yeah, whatever is in user data, Base-64-encode it and pack it in." And then you don't have to remember to do it anymore. It just sort of happens, because it's in the model. It's pretty cool.

**Jerod Santo:** \[34:34\] It sounds cool. It sounds like the opposite of what we have. So we've been toiling on our system, and Gerhard has spent years experimenting, changing things, swapping out different component parts... And when he gets a nice system that he think works really well, he goes out and he painstakingly creates a diagram that shows the system. And it's like, this is just starting from the other way. You just start with the diagram, or the schematic, or the blueprint; maybe blueprint is a cool word. Blueprint's kind of overplayed; a lot of people say blueprint.

**Adam Jacob:** Exactly. That's why I didn't call it a blueprint. I'm like "If I call it a blueprint, everybody's gonna be like "Oh, man, that's not a blueprint." And it is kind of an architecture diagram, but it's not. Like, it is really a configuration diagram; it turns out that the configuration relationships also tend to be architectural. Do you know what I'm saying?

**Jerod Santo:** Yeah.

**Adam Jacob:** Those relationships tend to mimic the architectural layer. But one of the things that I think is most promising about the approach is that once all the data is in a model, that's like a living thing. So instead of it being locked up in code, now we can start to add layers on top of that data. You can start to like imagine, "Oh, well, if we want to show an architecture diagram, why wouldn't we just allow you to express architectural relationships on the same components?" And that could just be a different layer, it could be a different diagram, it could be a different way of viewing the same information.

**Jerod Santo:** You almost need a brand new word that's not currently used. Maybe something like Ka-Chow!

**Adam Jacob:** It's the Ka-Chow. That's what I'm gonna call it from now on.

**Jerod Santo:** \[laughs\] There you go. Until you think of something; it is a good placeholder, at least.

**Adam Jacob:** I'm CEO, so I get to do what I want.

**Jerod Santo:** That's true.

**Adam Jacob:** I'm kidding. It's not at all true. I have a team of incredible experts, who will--

**Jerod Santo:** I was just agreeing with you because it sounded like it might be a good idea.

**Adam Jacob:** No, they'll 100% stop me from calling it the Ka-Chow, but...

**Jerod Santo:** Okay.

**Adam Stacoviak:** Well, when I was watching this demo, and I was seeing you kind of lay this system out from start to finish... And then you said, "Okay, this is a working model because you can see the relationship between, okay, this would work on EC2, or this Docker image would not, because it doesn't support X", and then you made some changes - that all seemed very logical as you were going through it. And I think at the end, if I understood it correctly, you clicked some sort of button and it was like the button just basically said, "Make it true." And then boom, it was in real life, and you went \[unintelligible 00:36:45.27\] website, and there you go.

**Adam Jacob:** Yeah, that's pretty much it.

**Adam Stacoviak:** That to me seems very logical, but what are the components in there that make it so hard to pull off that visual to reality? ...like, the relationships, and the communication, and the interoperability etc.

**Adam Jacob:** So the big one is just separating out the sources of truth. So infrastructure as code taught us that there should be a single source of truth, and that the source of truth for that should be the code. And there's a bunch of reasons why it does that, but the biggest one is actually that there's no way to do it the other way anyway, because when human beings write code, we write code and then we refactor it, we structure it differently, we put it into modules... We add all these semantics to it that you can't just serialize and deserialize. It's more than just the YAML, it's "Where's the YAML on disk?" How's that YAML related to the other files on disk? How does it get committed to the repository?" There's a lot of information in there.

And so when you imagine trying to go from a real world thing to the code, you can do it. There are projects that generate you TerraForm, or generate Pulumi, or whatever... But you don't live in those projects. You do them once, and then you tweak them so that they make semantic sense to you.

\[38:02\] And so when you think about how you apply that stuff to the real world, you think of it as a reconciliation process, where you say "Well, I have this model that's trying to be as full-fidelity a thing as it can be of the way that whatever the thing I'm dealing with, the AWS instance, the EC2 instance I'm dealing with (for example) thinks about itself." And the closer those two things are together, the easier it is to go bi-directionally between them. It's easier to say, "Well, I don't have a resource that exists in AWS that I can find, that looks like the one you've described. Therefore, the action you should take is probably to create the EC2 instance." And those can just be, again, functions on the graph.

So if the model, for example, doesn't have a resource attached to it, then most likely the action to take is creating it. But in the case of an AWS instance, if you update the tags, for example, on that EC2 instance, what you probably want to do is call the tags API to just update the tags. You don't probably want to destroy the EC2 instance and create a new one just because you wanted to update the tags. That feels wasteful. So that's a different kind of function, that would then look at an existing resource and go, "Oh, hey, I see that you do have a resource. If I look at the model, and I look at the resource, the tags aren't the same. Now I have to let the user choose. What do you want to do? Do you want to update the tags in the model, so they're reflective of the real world? Because maybe somebody logged into the AWS console and just fix the tag, because they had a problem, and that's actually the right set of tags." So in System Initiative, you can just say, "Well, update the tags on the model, so now the model matches, and we're cool." Or it could be that they're the wrong set of tags, that you in fact have updated the model, and the model is correct, and what you need to do is change the world by updating the tags. And all of that basically can happen relatively easily, because we've turned it into a problem of reconciling the data and then taking action, as opposed to having to declare the correct state up front.

**Jerod Santo:** So in System Initiative, where does this graph live?

**Adam Jacob:** I mean, in System Initiative. In Postgres.

**Jerod Santo:** Yeah, but what's that mean? Okay.

**Adam Jacob:** Yeah, in a lot of ways, it's inside of the database, and then in some Rust code. And then if you actually dig into the architecture, a lot of System Initiative is old techniques applied in new ways. So there's a lot of very dope stored procedures that actually work on a lot of this data, or like the way change sets work are baked into the database, and through stored procedures.

**Jerod Santo:** Wow. That's actually kind of a cool tagline, like "Powered by dope stored procedures under the hood."

**Adam Jacob:** Kinda...

**Jerod Santo:** \[laughs\]

**Adam Jacob:** Like, we built versions of it in every possible way before that was the one we built, and it turned out that it was just too hard to work with, until you made a database that essentially feels custom from the outside, because you interact with it mostly through these stored procedures that handle all of this bookkeeping of like "Okay, you want to run this function because these inputs have changed. What's the calculation for what the inputs are? How do I know they've changed? How do I decide which other functions to run?" They're all in a database, and you can query the database and it'll tell you.

**Adam Stacoviak:** So you tried other databases than Postgres, is what you're saying?

**Adam Jacob:** Yeah. Oh, I tried every possible version of not putting it. The last thing we tried was putting it in stored procedures, because -- right? That's not a thing you'd normally want to do. \[laughs\]

**Jerod Santo:** If you can avoid it, yeah.

**Adam Jacob:** But one advantage of being 45 is that I was working when we did that. I worked with DBAs...

**Jerod Santo:** You're not afraid of it. You're just like "We can do this."

**Adam Jacob:** Yeah. I was like "You know what would work? It's like, what if we just put it in the database, and then did it that way?" And it did work. And it was great. And go figure...
**Jerod Santo:** I actually think that we're gonna start trending back towards put it in the database. I've started to see it already. So this might help in that way... Like "Hey, Adam Jacob got away with it..." Because we go away from it, and then we come back. That's what we do in software. We swing the pendulum.

**Adam Stacoviak:** \[42:03\] Wasn't there something recently we were gonna do to put it in a database? Was it like a cache, or something like that?

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Is that worth sharing a micro-story version of that, just to commiserate with Postgres?

**Jerod Santo:** Well, I'm just putting some data in there that is probably unwise; he's putting code in there... So a little bit different.

**Adam Jacob:** Well, the code's in there, but it's also data.

**Jerod Santo:** Yeah, sure.

**Adam Jacob:** So the actual execution of the function is not in the database. That's out. There's like a whole separate subsystem that knows how to do that for you. But all the bookkeeping about what to run --

**Jerod Santo:** Just one big eval, basically...

**Adam Jacob:** Yes, exactly.

**Jerod Santo:** You're just eval-ing our JavaScript, at the end of the day.

**Adam Jacob:** Yeah, I'm just running it all in the browser through eval. That's the answer.

**Jerod Santo:** \[laughs\] Don't put that on the tagline. Yeah.

**Adam Jacob:** System Initiative, powered by stored procedures and eval.

**Jerod Santo:** And eval. Yeah. I mean, you get some hacker cred...

**Adam Stacoviak:** Dope. Dope stored procedures. \[laughter\]

**Jerod Santo:** Alright, so let's imagine that I'm coming to System Initiative... You know, I go down to Circuit City and I'm gonna buy one.

**Adam Jacob:** Yeah, you're gonna buy a System Initiative.

**Jerod Santo:** I'm gonna buy myself a System Initiative. What part of my infrastructure am I replacing? What do I not need? Because there's still a lot of components - you're talking about Docker, I know you're talking about Kubernetes, you're talking about - blah, blah, blah.

**Adam Jacob:** So by design, we're trying to meet people where they are. So one of the things that is hardest about adopting new DevOps tooling is that in general, it sort of forces you to throw away what exists. So today, it's still pretty early on. And so some of these features we've had working in earlier prototypes, but we've sort of stripped out in order to get it shipped. But one of the great things about being able to go bi-directionally is that you can start from your existing infrastructure and build a model from there. So rather than onboarding being, "Hey, rebuild all your stuff in System Initiative", in a not too distant future we want that to just be "Give us your AWS credentials. We'll look at everything that's in AWS, and then we'll build the model backwards based on what you have."
And then if you think about the bi-directionality of it, if those resources were built by TerraForm, or by Pulumi, or whatever CDK, you can keep doing it that way, and what System Initiative is going to do is notice that they changed every time you run it. And so it's just going to be like "Hey, do you want to update the model?" and you're like "Yeah." And now you can visualize it, and see it, and you can keep doing it.

But then you're probably going to be like "You know what would be easier than futzing around in this TerraForm module? I could just maybe click on the instance that I want to reboot, and say 'reboot', and then hit the Apply button", and then it would do it, and then you could see it happen, and it would just happen visually. So the goal is more that, than it is like rebuild all your stuff around System Initiative. I think the number one thing that it changes for now is that sort of infrastructure as code layer. So if you think about all the things that go into doing infrastructure as code well and at scale - so when you think about "How do we actually define it? How do we collab write on it? Do we need deployment pipelines? Do we need reviews?", all that stuff, we're streamlining all of that stuff first, partly because it's the world that I know best, and also because when you really look at where the pain is in the DevOps workflow, a lot of it's right there. Like, that's actually where a lot of the papercuts live right now. Not because those tools are garbage, they're not, but just because how they fit into the systemic workflow, the overall arc of what we do, it causes a lot of downstream problems.

**Adam Stacoviak:** Is this the death of GitOps?

**Adam Jacob:** I mean, I hesitate to say it's the death of anything... Because look, I'm full of hubris, right? I've got plenty of ego, and I even have some aspirations around feeling more confident in my own ego, if that makes sense... So I'm more than willing to be like "No, I'm great at this." But is it the death of it...?

**Adam Stacoviak:** Well, let me rephrase... If this is successful, is this the death of GitOps?

**Adam Jacob:** If it's successful, you won't need it.

**Adam Stacoviak:** Okay, it's the death then.

**Jerod Santo:** What else won't you need?

**Adam Jacob:** \[46:05\] Well, you won't need infrastructure pipelines anymore. You won't need continuous integration pipelines. None of that for your infrastructure, you won't need it anymore. It'll all be done real-time. You won't need pull requests and code reviews. Instead, you'll replace them with -- think about it this way... This is all stuff we're gonna build.

**Jerod Santo:** Yeah, we're aspirational now.

**Adam Jacob:** This is all aspirational. So just so we're clear, I'm not saying you can come do this stuff right now; if you think you can, you're going to be disappointed. But this is what we're building for. And we know it will work, because we've built prototypes where they work this way. So you can say, imagine that you need a DBA, or someone... Let's say I need a DBA and a principal engineer to approve any change that requires rebooting the production database. And so Jerod and Adam, go and whip up a change that requires touching the production database, that's going to require the action rebooting it. So rather than just being able to apply that action immediately, instead of pulling it into a PR, we can just use the data about the impacted objects, and say "In order for this to be applied, you need the real-time permission from these four people." And then they can just log into System Initiative and in real time join your change set and see the screen that says "Hey, Adam and Jerod - this is what they want to do. Here's all the things they said. They want to do it right now. Yes or no?" And it's a little more like submarine captains launching nukes, which is a weird analogy, and I'm sorry I used it, but I don't have a better one, and it feels really evocative, from \[unintelligible 00:47:42.16\]

**Adam Stacoviak:** Requires like two keys, right?

**Adam Jacob:** Yeah, you've gotta have --

**Adam Stacoviak:** You've gotta turn them at the same time... It requires synchronization.

**Adam Jacob:** Right, Star Trek self-destruct sequences, or whatever...

**Adam Stacoviak:** It's not async. This is a synchronized action.

**Adam Jacob:** Because it's about collaboration again. Because if the DBA is like "Why do you have to reboot my database?" Like, you actually don't want him to ask you that in a PR. You want him to just say it to your face, right? And so you can just literally look at the interface and be like "Say it to my face."

**Adam Stacoviak:** "This is why."

**Adam Jacob:** "This is why."

**Adam Stacoviak:** And this makes sense. So yeah, sure.

**Adam Jacob:** And so all those things could start -- you can imagine all those things sort of fading away. The same thing when you think about like continuous delivery pipelines. So the way we talk about application delivery today is often through a series of activities we take on infrastructure. You're like moving something somewhere, or you're building a new thing, you're doing that kind of stuff... What if we turned those into workflows that you could collaborate on, and then trigger with inputs as part of the API?

So instead of having like a continuous delivery pipeline that defines all those things outside the flow, what if they were just calls to models that said "Find all the models related to this thing, and call this action on them, and then we'll trigger it under this trigger?" So over time, the ambition is to rebuild the whole shootin' match. The whole thing could work differently. And if it worked differently, it would be better. And it's ambitious, and nutty... And also, we're not wrong. Like, it is in fact better. And you can see that it's better already. It's just gonna take a lot of people and effort and time to understand -- like, all of those suggestions, they might be better, but no one's tried them. Like, we know all the ways that code review is bad, we know all the ways that the existing process fails us... We don't know what the alternatives are when you really try to use them at massive scale, and so we've got to figure that out together.

**Jerod Santo:** Well, you said together, and I've been thinking a little bit about community, because you have a long tradition of open source, and open things, and community. You have Chef in the backpocket... You're 45 now, so you have lessons learned the hard way, the easy way... And you get a chance to restart. Like, you're launching a new thing now. What are you doing differently, or what are you thinking about differently, that hopefully will be better, or successful with System Initiative?

**Adam Jacob:** \[50:11\] I mean, in terms of open source, a big one is that it's not open core. And it won't ever be. Because a) I think that model sucks to execute; it's just no fun on the inside, and I don't think it's better for your community. But b) I just went on this whole ambitious rant about like rebuilding the entirety of the DevOps workflow from scratch. And that's not a thing you do alone. That's only a thing that happens because other people are like "Yeah, I agree with you. I think that it could be better, and I like your groove." And whether they like System Initiative or not, I hope what it inspires people too is to break a bunch of rules. We need to build more wacky stuff, because we need to see if it works. And we're kind of not doing that right now. We're building a lot of variations on the theme, and I want to a second wave of DevOps that's full of new, interesting stuff.

And so part of what we're doing is open sourcing all of System Initiative. So it's the Red Hat model, it's the same as what Chef's model was in the end. So every single piece of software that we use in System Initiative, all of the System Initiative software is open source... And what you're not going to be able to do is make a distribution of it and call it System Initiative. Only I get to do that. And that's it. And we're doing that because I can't invite people to explore what's possible with me, and to see if this new way is better, while simultaneously telling them that I'm the only person who's allowed to make money off of it, or I'm the only person who's allowed to better my life in the way I want to with it. I can say that, but what it means is it's not actually about the outcome, it's about me. Does that make sense? Like, it means it's about, whatever, the money in my pocket... Which it is; I want money in my pocket. I think I said that on one of these podcasts earlier.

**Jerod Santo:** Yeah, you have.

**Adam Jacob:** I've got no shame about it.

**Adam Stacoviak:** That's totally cool, right?

**Adam Jacob:** It is great. It's a lot better to have money than not to have money. I think anybody who tells you otherwise is wrong. But it's not the only reason to do it. And my ambition, our ambition for it is a big one, and you can't really think about how to get there -- it's impossible, really, to me, to imagine how to get there without building a giant community of people who share that point of view. And if you want that to happen, I can't simultaneously believe that and also say "But here are all the ways you can't make your life better. If it involves you making money in the way I want to make money, I don't like that." Or "If it involves you doing anything I don't like, you're not allowed." Or "If you disagree with me in some fundamental way, and you're like "Adam is totally wrong. What the System Initiative software needs is to work with Git", then you've gotta be able to fork System Initiative, make the Adam Initiative, and -- well, you shouldn't call it the Adam Initiative, because I can find you and be like "That's too close to my trademark." But you know what I mean? You can call it Lacroix, or whatever... Let them sue you... And make it work with Git.

**Adam Stacoviak:** Get more specific with the Red Hat model. What do you mean -- for those who don't know the details of the Red Hat model, what does that mean for how the software gets distributed, used, deployed, how you make money from it, how you hold a trademark over it, the name... Break that truly down in practical terms.

**Adam Jacob:** Alright, so there's three levers in sort of open source business models. There are no open source business models; open source isn't a business model, blah, blah, blah, blah. Let us just admit that that's true, and then we're going to go on calling it open source business models, because that's just what you have to do.

So open source business models - three levers: copyrights, trademarks, patents. All three of those things - you can think of them as just ways that you create scarcity. And then in order to get people to pay you for things, there needs to be scarcity. So you don't tend to pay for things you can get for free, is the way to think about it. So the one people are most familiar with is copyright. So we say, "Hey, I made System Initiative, therefore you can't have it unless you pay me money. And if you think it's valuable, you pay me; if you don't think it's valuable, you don't. No harm, no foul." That's the copyright lever.

\[54:10\] The trademark lever says "Only I am allowed to make System Initiative and call it System Initiative. And if you want to build something similar, and also call it System Initiative, you can't, because that's my brand. That's the thing I do. That's how I make money. That's my brand promise."

And then patents are the third, where you can be like "Hey, we do this in a novel way, and nobody but us are allowed to do it in this novel way, because if you try, we'll find our little patent and we'll waggle our finger at you and be like "You can't do it, because my patented algorithm says you can't, unless you pay me money."
So most open source business models hinge on copyright. They say by keeping some amount of features proprietary, and so you can't have them without paying the money, then I find someone who's willing to pay for those features, and they do, and therefore we're happy. Or you say, "Hey, here's my SaaS, and I'll run that here... But I'm the only one who's allowed to, blah, blah, blah, blah." Lots of shenanigans sort of around copyright.

So the Red Hat model says, "Okay, the actual value, the value people get is in products, not in software." So when you buy a product -- for example, when you record this podcast, y'all want us to record a separate audio track, just in case the one we're doing right now doesn't work. And I'm using Audacity to do it. And it's not a very good product. And so if -- I mean, it is; I'm so sorry, Audacity people...

**Adam Stacoviak:** Gosh...

**Adam Jacob:** Oh, no, I just really made a booboo.

**Jerod Santo:** It's providing a lot of value, for a lot of people.

**Adam Jacob:** It's providing a lot of value for a lot of people, but I really struggle to get it to work... Because I don't use it very often.

**Adam Stacoviak:** It has challenges.

**Adam Jacob:** Right. I'm so sorry, Audacity people. It's great. And it's working for me. God bless it.

**Jerod Santo:** Right now.

**Adam Jacob:** So if you think about that software, it's valuable to me because I could get it and just use it. But my mom, not so much. If I throw Audacity in front of my mom - not good. But my mom could use Riverside, which is the platform we're using that records this podcast, because you basically log in to Riverside and talk. And then it's all done. Because the product is better. And it's not just the software. If I gave my mom the Riverside software, that's not better for my mom. She'd be like "How do I run Riverside?" Well, you launch this service, and this one... Don't forget to configure the S3 bucket your stream to", and like all this stuff you've got to do.

So products are the full experience that someone has around getting the value that they desire. And it's not just the software. The software is a big piece of it, but it's not all of it. And what Red Hat does is say "Yup, we sell enterprise products for money. And we build them primarily out of open source software." So Red Hat makes a billion dollars in ARR on top of Kubernetes, selling OpenShift. Every single thing you get in OpenShift is open source; you can have it for free, right now. They make a billion dollars a year, with a B. A billion dollars...

**Adam Stacoviak:** Billion!

**Adam Jacob:** ...a year. One billion dollars. One billion dollars. And like HashiCorp - they don't make a billion dollars a year. That's a public company, that is the incredible success story; nowhere close to a billion dollars a year in ARR. Nowhere close. Why? Well, Red Hat takes software and sells it for money exclusively. If you would like the product that is OpenShift, the vetted experience that comes with Red Hat, there's only one way to get it. And it's to pay them. Feel free to take all the piece parts and try to cobble together some OpenShift yourself. God bless and keep you. And some number of people will, and that's great for them, because it keeps you in Red Hat's ecosystem. You don't leave Red Hat's ecosystem, even when you don't want to pay Red Hat. You're still there, because they provide so much value in the software that even when you don't want to pay them, you're still hanging out, using their stuff. And that's such a better competitive advantage, because now you're not competing on a closed source basis; you're not competing on your software's specialty. You're competing on the experience of what it's like to receive it.

\[58:31\] And the people who have the most money, and will see the most value in what we build tend to be people who need the experience to be better. And they're willing to pay for it. And so that's the business model... And it's better because you don't hold anything back from the community, it's better because it's more straightforward to execute, because the business model is really easy... Like, we build System Initiative, and we sell it for money. That's the business model. And if you want it from me, depending on what you need, you have to pay me. And if you don't want to pay me, that's fine. You can use the software. Now, you might have to get that software from somebody who's not me, because I produce that software to sell it for money. But that's cool; you don't mind, because you don't want the product from me anyway, because to get it from me, you've got to pay for it.

**Adam Stacoviak:** So in the future, when it's open source, I'll be able to download or do something with...

**Adam Jacob:** ...all of it.

**Adam Stacoviak:** Systems Initiative. And I put it on my own server, and I have to orchestrate it, and fine-tune the database, and make sure the database works, and the APIs are all working...

**Adam Jacob:** And you've got to call it something else, and you've got to remove all my branding...

**Adam Stacoviak:** Well no, I don't have to if I'm just using your thing. I'm using it for me.

**Jerod Santo:** Just to run it.

**Adam Jacob:** Nope, you can't get it from me. If you want to run System Initiative, you have to get it from me, under my commercial terms. Now, my commercial terms will likely be incredibly easy for you to get it for $0. So for example, you do this everyday with VS Code. VS Code, the thing you download is not open source. That is a commercial piece of software, that happens to be $0, and you don't even notice. So for some huge number of people, System Initiative will be basically $0. But then for other people, it won't be.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Because VS Code that you download is packaged and wrapped by Microsoft, and therefore "sold" by them.

**Adam Jacob:** Using the VS Code trademark, and a Distribution License to change the terms on which you get that distribution. Even though every line of code in VS Code is open source. Right?

**Jerod Santo:** Right.

**Adam Stacoviak:** Okay.

**Jerod Santo:** So there are people that will take the VS Code open source stuff and they'll repackage it with a name, like --

**Adam Jacob:** Yeah. VS Codium.

**Jerod Santo:** Yeah, exactly. And they'll do what you're talking about, Adam.

**Adam Jacob:** And they totally get to. What they don't get to do though is use Microsoft's extensions store. Because Microsoft builds services that make VS Code better, and the only people who get to use those services are people who use VS Code. And that's likely the same thing that happens with System Initiative. Like, there's services that make System Initiative work, that everyone who's using System Initiative uses. Those services are open source, you can take them, you can run your own versions of them, you can do whatever, but the data that's in there doesn't come with them. You know what I mean? Like, those things aren't. But we'll work with people to do it. Like, if that's what needs to happen, I'm down to collaborate. I want System Initiative in the world, I want it to succeed, I want that software to win, I think it's better... So when those things come up, we'll cross those bridges when we come to them.

**Jerod Santo:** When you explain it, it makes total sense. But then when I walk away and try to tell somebody else about it, I'm always like "You see, it's free, but you still pay for it." \[laughter\] And they're like "Why?" Like, "Because you like what they're putting out there."

**Adam Jacob:** The struggle is that you start by saying it's free. It's not free.

**Jerod Santo:** Well, you know what I mean.

**Adam Jacob:** I do, but this is why I'm telling you, this is how you solve your problem, man. I'm helping you get through this as a brother.

**Jerod Santo:** Okay, I appreciate that.

**Adam Jacob:** And what you've got to do is just say "It's not free." The software is open source. The software.

**Jerod Santo:** But the product --

**Adam Jacob:** \[01:02:01.23\] But the product is not free.

**Jerod Santo:** You have to differentiate between the product and the software.

**Adam Jacob:** That's right. And we buy products. And it's important that the software is open source; it's important that the software is free, because this is software that, if it's successful, run to the world. And it's better. I everything I know in my career happened because people open sourced their software, and I got to understand how it worked by looking inside of it and figuring it out, and munging it, and doing all of that. It's incredible, and it's a unique thing that software can be not a zero-sum game in this way. And the thing you just have to believe as a business person is that sometimes the products we build are best served by not being zero-sum games. That the path for them to become most successful in the world, and therefore for my business to be as successful as it can possibly be, is actually that it go out in the world and just be valuable to whoever it needs to be valuable to, in whatever way they find that value. And the more you try to construct it, the worst you make it. And I think it just -- it's better.

And the hard part is that most people don't actually believe what I just said. In the end, if you push them, they believe that because they built it initially, or because it was their idea, that they deserve more. And I don't think I deserve more. I think I'll wind up with more. I think that's probably real, if I'm a good steward of it, and I take good care of it, and I do the work of building a great company, and finding incredible people, and putting them against that problem, and building a big community... All that stuff will bring good things to my life, unquestionably. But that doesn't have to be at the expense of other people's ability to do the same thing.

**Adam Stacoviak:** Does a license matter in this scenario? Like, you choose a particular license to ensure the war for the soul of open source survives this initiative you're on?

**Adam Jacob:** Thank you, \[unintelligible 01:03:50.14\] That was a joke. That was a deep cut.

**Adam Stacoviak:** I didn't catch it.

**Adam Jacob:** MongoDB.

**Adam Stacoviak:** Oh, okay.

**Adam Jacob:** Wrote that blog post with the Soul for the War of Open Source, or whatever. That's totally gonna get edited out of this podcast.

**Adam Stacoviak:** Nope, it's in there.

**Adam Jacob:** Oh, it's in there forever now?

**Jerod Santo:** \[laughs\]

**Adam Jacob:** It's who we are? Okay, so I think one of the things that happens here is you -- I've totally lost the plot now, because I'm thinking about how it's not being edited out of the --

**Jerod Santo:** Licensing.

**Adam Jacob:** Licensing. Yeah, so the Apache License is particularly good for this model, because it's very explicit about not granting you any trademark licensing. And so when you look at licenses like the MIT license, which is also a good liberal license, it doesn't say anything one way or the other... Which most lawyers will be like it means you don't have those rights. But lots of humans on the internet will be like "No..." And then you just wind up in all these ridiculous arguments about what people can and can't do.

So I like the Apache License quite a bit for this... I think the MPL would also work just fine for it. I think if there's a piece of you that really loves the GPL, then get on with your bad self. Lots of GPL-ed software in Red Hat products. So If that's what grooves you, go for it.

**Adam Stacoviak:** So do you Apache License across the board then, in this case, since this best fits -- so all of the open source System Initiative produces will be AGPL.

**Adam Jacob:** Not AGPL. Apache license.

**Adam Stacoviak:** Sorry, Apache. My bad.

**Adam Jacob:** Yeah, yeah. And I mean... Yeah, the only things that maybe won't be are the code -- like, we're going to run managed services, we'll run SaaS services. We'll do that stuff. So the code for us to run those services - we probably won't open source it. But it will be if we need it to be. If it's better for our engineers, if it's better for the way we build it - like, I wouldn't necessarily hold those things back. I don't believe that I have to hold them back in order for the product to be valuable. I just think it's just weird to imagine how you would in a way that allows you to do the things you need to do safely and securely. Like, it just gets weird.

**Break**: \[01:05:54.26\]

**Adam Stacoviak:** Does things like development environments in the cloud play a role in System Initiative in the future? If you're doing more things in this sandbox, this toy box, this hypothetical, that could be true, that maybe mirrors true, or gets sucked in this mirror of a true - is that a thing in the future?

**Adam Jacob:** Yeah, it is, in many ways, a dev sandbox in the cloud already. The IDE is built into the product... That stuff is kind of already there. So it definitely draws inspiration from those things. We'll see what the future holds in terms of like bringing your own IDE, or like some of those sorts of pieces... It's hard to imagine how you make that user experience as good as you want it to be, because so much of what you're doing is this tight iteration between tweaking some code and then seeing it happen in the product; and then like how tight that loop can be is really important. So I don't know... We'll see what that is. I think it's going to be like the number one thing people bring up. They're gonna be like "Can I write all this code in my own IDE?" And the answer is going to be like "Oh, maybe."

**Jerod Santo:** Yeah. Well, are you constraining this to infrastructure code, or it's just like all the code in your system?

**Adam Jacob:** Infrastructure code for today. Yeah. Because it feels a little nutty. And I'm not sure that -- as an application developer, I actually find the experience of writing modern applications quite delightful. As an application developer, I'm not suffering like infrastructure operations developers are suffering. It's pretty good. My IDE is kind of great. I'm getting incredible AI-assisted search... Like, the things that are happening for software developers, where the outcome is software - that experience is pretty on point right now. But boy, the infrastructure side isn't.

**Jerod Santo:** Yeah. I was just trying to see the scope of your ambitions there... Because as you're talking about like a new change control system, collaboration built-in, all these other things, you start wondering "Well, if its source code at the end of the day, and all these things are great, then maybe it also eventually can replace other things that we know and love." But...

**Adam Jacob:** How weird does it get? I don't know. But I really want to find out.

**Jerod Santo:** \[laughs\]

**Adam Jacob:** But one way to think about it is you could think about the application source code as an input to the hypergraph.

**Jerod Santo:** Well, it's got to get in there somehow, right? Like, that's what ultimately gets deployed, right?

**Adam Jacob:** \[01:10:01.24\] Yeah, so if you think about it as an input though, then you don't have to think so much about "Well, I have to alter my toolchains", or any of those things. It can just be an input that then informs the behavior later on. So rather than thinking about modeling, like writing \[unintelligible 01:10:14.10\] should keep it there, maybe it's more understanding what the outputs of that process are, and then using those as inputs to how the system needs to change when those inputs change.

**Jerod Santo:** Cool. So what does it look like today? You've described it tomorrow, we've described it a little bit today, but let's get exactly what you have on offer.

**Adam Jacob:** Yeah. So today, it's really ready for most DevOps builder of builders. So if you're a person who is an experienced open source developer, you are experienced in building and managing DevOps tools, and you think what I'm talking about is cool, it's ready for you to come and check it out, and see if it's as cool as we think it is... And then to talk with us about what's possible, and imagine with us about what's possible, and write code, if you want to, make the system do the things you want it to do.

Right now, it's mostly good for like deploying containers to EC2, but that's going to change pretty rapidly. The goal is we'll be increasing lots of that coverage, we'll be open sourcing it right as soon as the customization features are in... So one of the last features we want to add before we open source it is the ability to basically package up your customizations and share them. So if you make a new asset, or you change it, add a function to something that already exists, then you can package that up and share it, and then from within System Initiative you can just install those directly. So once that is landed, we'll open source it, and it'll be ready for those early builders to come and dig in.

I don't know that it'll be ready -- it'll be a minute before I think it's ready for people to just show up and consume it. Because to your point from earlier, there is a lot of coverage that needs to happen, there is a lot of exploration that's needed... But it's ready today and super-fun to explore with it, and see what can be built.

**Adam Stacoviak:** Is the feature where you can have a production environment and mirror it into System Initiative - is that close? Or is that near? Or is that today? How far away is that?

**Adam Jacob:** No... I think it's probably going to be more like toward the end of the year.

**Adam Stacoviak:** Okay. So for now, it's greenfield, brand new, create it in System Initiative, merge it elsewhere.

**Adam Jacob:** Totally. And I think the work to figure out how to do that bi-directional discovery - it's in flight right now. But the user experience is really the tough part. So thinking about how it works in the underparts, in the graph, is relatively straightforward. Thinking about what the user experience is for letting you choose - that's where the hard stuff is. And we'll do that through lots of user studies, and lots of testing.

**Adam Stacoviak:** So is this a SaaS, essentially? Will somebody go there whenever it's launched today, essentially, to play with it? They have to put a credit card in... Is it \[unintelligible 01:12:54.11\]

**Adam Jacob:** So right now it's actually just -- it'll be software you download, and you can run it. Or source code you check out and compile. It will be SaaS software as well. So the first one will probably be like a bring-your-own-cloud kind of SaaS, and then roughly when that discovery work lands is when we'll turn on full multi-tenant show up, bring-a-credit-card kind of SaaS, because the onboarding experience will be dope.

**Adam Stacoviak:** So dope.

**Jerod Santo:** So dope.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Cool.

**Adam Stacoviak:** System Initiative. Wow. It's fun being here. Like, we started so many years ago... Was it 2018, Jerod, 2019 when we first time had Adam on? I'm trying to remember the first time we had him on?

**Jerod Santo:** Don't ask me such difficulties...

**Adam Jacob:** It's been a minute, yeah.

**Jerod Santo:** 2021 was the last time, but I don't know what the time before that was.

**Adam Stacoviak:** The war for the soul of open source was July 16th...

**Jerod Santo:** 2019.

**Adam Stacoviak:** Something with like June and July for you, Adam.

**Adam Jacob:** Yeah, you know, that's, it's the time. I was so pleased that you all wanted to talk to me again about this... In part because it's so fun to hang out with you, and your perspectives are always delightful.

**Adam Stacoviak:** Cool.

**Adam Jacob:** And I think there is something about June and July. I mean, part of it is that it has to be June, because if it's July, everybody goes on vacation.

**Adam Stacoviak:** Yeah, forget it, right?

**Adam Jacob:** \[01:14:12.07\] Forget it. You can't do anything useful.

**Jerod Santo:** You want to launch in July? That's like launching on a Friday.

**Adam Stacoviak:** Well, I think OSCON was in July, wasn't it? It was 2019 when we first met you, at least via voice...

**Adam Jacob:** Which must have been the last OSCON, right?

**Jerod Santo:** It was.

**Adam Stacoviak:** It was, yeah.

**Adam Jacob:** What a bummer. Rest in peace OSCON.

**Jerod Santo:** I know. I was so bummed when they said -- like, they never even hesitated. Like, "Our whole conferences division has just closed." Like, immediately. I was like "They must have been waiting for this opportunity..." It was opportunistic almost.

**Adam Jacob:** And what a sad ending to such an important institution. And I feel like that void is gonna get filled, but it does bum me out. Like I said, I was watching that John Allspaw and Paul Hammond talk that they gave at Velocity in 2009, and there's so many examples of talks like that, and conversations like that, that - they just don't happen anymore. Now they happen on podcasts, you know what I mean? Now they happen here. And that's fun, but it's not the same as going to OSCON.

**Adam Stacoviak:** And I kind of think that's kind of almost better, because talks are very one-sided. They're not interactive, in most cases. Not that they're bad. It's great to put out a hypothesis, or a thesis, or a big vision... But I love these interactions, because you don't just get the rant, Adam. We get to push back on --

**Jerod Santo:** We stop.

**Adam Stacoviak:** ...some of your ideas, like "Hold on there, it is Ka-Chow!"

**Adam Jacob:** It is, 100%. And I look, I'm with you. And I would rather prep -- I'd rather do this all day than write another talk.

**Jerod Santo:** There's room for both. There's room for both.

**Adam Stacoviak:** Well, I'm being biased, Jerod, because I love this format.

**Jerod Santo:** I know you do.

**Adam Stacoviak:** It's just such a great format. I mean, people are listening to us right now, in the shower. Someone is washing their hair.

**Adam Jacob:** Yeah. And thinking "I love that show. I'm watching Cars 3..."

**Jerod Santo:** And you like that about it...?

**Adam Jacob:** I hope they looked at their hair in the mirror and were like "Ka-Chow!", you know? I hope they tossed it back with like luscious locks...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right.

**Adam Stacoviak:** The point I was getting to was the war for the soul of open source back in 2019, and then we had this -- this actually predates the ElasticSearch/AWS kerfuffle...

**Adam Jacob:** Yeah.

**Adam Stacoviak:** "The business model of open source", that was in 2021... I was just paying attention to your tweets, and I'm like "We've got to talk about this on the show." And so we were like "Adam, get back on here and school us." And then here we are back now at the end of that show, as Jerod mentioned at the top of the show, just quoting you as talking about System Initiative, and what your plans were, and your vision and like "Hey, I'm gonna come back on here when it's time..." And this is that time. That's what I love about this show.

**Jerod Santo:** We're men of our word. We said we'd have you on the show when System Initiative launched...

**Adam Jacob:** And here we are.

**Jerod Santo:** \[unintelligible 01:16:39.17\] we're gonna do it.

**Adam Jacob:** Yeah, let's get it done.

**Adam Stacoviak:** The loop has been closed.

**Adam Jacob:** The loop has, in fact, been closed. And yeah, I'm so grateful for it. If you couldn't tell from listening to me talk about it, I feel like I have like years of pent-up experimentation and thought that I just haven't been able to share.

**Jerod Santo:** Yeah. Well, I asked you about it last time, and you were like "I can't talk about it."

**Adam Stacoviak:** "I can't talk about anything."

**Adam Jacob:** And like, such a bummer. But now I can, and I'm a little overly enthusiastic perhaps about talking about it, because there's so much of it. I could go on forever.

**Adam Stacoviak:** I guess, to some degree, on that note, this stealth mode idea - it's not uncommon for a startup to be in stealth mode. It's less common these days. What did you like and dislike about this stealth mode you had to be in?

**Adam Jacob:** Oh, that's a good question.

**Adam Stacoviak:** What did it benefit you, and what did it take away?

**Adam Jacob:** In hindsight, I think -- I'm not sure how much it benefited us in hindsight, except if I started talking about the things we thought might be cool. It was such a big swing, and there was so little knowledge... I think we probably would have over-rotated to the wrong solution too early. Because you'd have been talking about what you thought was right, and people would have agreed with you, and it kind of would have taken the art of it sort of off into a direction that resonated with an audience, before the art had actually kind of achieved its full greatness. Not that it's achieved its full greatness now, but... Do you know what I mean? Like, before the album was ready.

**Adam Stacoviak:** \[01:18:12.20\] Yeah. It's like describing a painting verbally, and you're like "This is an amazing painting. There's hills in this painting, and this was great sunset, but you can't see it. You can't truly appreciate the artifact."

**Adam Jacob:** Yeah. I think the downside of it is that you do get really pent up about it, and the pressure kind of builds up on you a little, because it's been a long time, and you want people to like it... And so a little, I feel like Axl Rose in Chinese Democracy, where it's like "No, I've got this album, and some people have seen it, and they think it's amazing." Maybe it's gonna be amazing, or maybe it's not... That album was actually pretty good, but it was like 10 years too late. If that album had come out the first time you heard about it, it would have been the greatest album you'd ever heard, and you'd have been like "Axl Rose is amazing. He doesn't need Slash at all!" But 10-12 years on, you're like "Meh, you know..."

**Jerod Santo:** Right.

**Adam Jacob:** So there's definitely risks you run. I don't know that I would do it again, be stealthy that long again... But look, if we win, and we're right, then everybody will be like "They're geniuses, because they stayed stealthily until--"

**Jerod Santo:** You've gotta go stealth mode. That's how you win.

**Adam Jacob:** You've gotta go stealth mode until it's perfect, and then you'll win. And if we're wrong, they'll be like "Those dummies... If they'd gotten it to market sooner, they could have known they were wrong and pivoted." And kind of like, you're damned if you do, damned if you don't.

**Jerod Santo:** Yeah, totally.

**Adam Jacob:** But if we win, we're geniuses, and if we lose, we're dummies... And that's just entrepreneurship in a nutshell.

**Jerod Santo:** Along that line, the world can change in the meantime as well, in terms of the software world, the game that you're playing can change while you're in stealth mode, especially a long one like you were in...

**Adam Jacob:** Yeah.

**Jerod Santo:** Of course, you can pivot stealthily, because no one knows what you're up to.

**Adam Jacob:** For sure. AI...

**Jerod Santo:** But was there anything that came out? I mean, maybe some of this AI stuff, which I think I did notice in your pitch deck there was one reference to something, and I thought "It's like, machine learning, somewhere... You've got to have that word in there." Was there any moments where you're like "Oh, crap, we have to change something"?

**Adam Jacob:** Oh, there were a million, but they were all because we didn't know how to build it like it.

**Jerod Santo:** They weren't from external forces, though. They were from internal forces.

**Adam Jacob:** From external forces?

**Jerod Santo:** Yeah, like something happened in the world where you're like "Oh..."

**Adam Jacob:** No.

**Jerod Santo:** Well, that's good.

**Adam Jacob:** But that's because it's kind of -- and maybe this is awful... But it's been a little boring in the DevOps world in the last couple years. Kubernetes hit like a bomb. What are we doing? Well, you're either on the Kubernetes train or you're not. If you're not, you're like "I don't like YAML, or Kubernetes." And if you are, there's Kubernetes and that's it, forever. And okay. But we haven't -- what's the most innovative thing you've seen in the last four years in infrastructure software? Like, variations on themes, for sure, but nothing close to Docker, or Kubernetes. Nothing where you're like "Whow! Whowa!" You know?

**Adam Stacoviak:** Is this a whow moment, then? Do you believe this is a whow moment?

**Jerod Santo:** He wants it to be... I'll answer that for you.

**Adam Jacob:** Yeah, I want it to be. But it's not up to me... It's up everybody else.

**Adam Stacoviak:** Well, you know, what do you think's gonna happen, is what I'm asking. I mean, obviously, I know you want it to be a whow moment. You think, based on everything you know, this is a whow moment.

**Adam Jacob:** Yeah, man. Yeah, I want to win.

**Adam Stacoviak:** I want your affirmative, Adam. I want your full affirmative here.

**Adam Jacob:** Yeah, dude, I want the whole thing. Yeah. And I think this is it. I think we're right.

**Adam Stacoviak:** Based on what I've seen, I think you could be right. I think you need this visual interface; this visual interface is really a good thing, I think. We connect the dots, the configs update across the board when you make changes... Who wants to go and do all that? In the ops world, in particular.

**Adam Jacob:** \[01:21:48.07\] No one does. And even if I'm wrong... Let's say I'm wrong about System Initiative as an alternate implementation of this system of doing DevOps work... I am not wrong about what happens when we do it the way we do it today. We know what happens. 14 years in, we know; this is what happens. And making small incremental changes, or putting another layer on top of it, or whatever - it's not going to move the needle on the outcomes. It's just not. We have 14 years of evidence that it won't. And so whether it's System Initiative that changes the game, or something else, there's somebody who listens to this podcast and they're like "Yeah, I've had an idea. I think it should be like this." And then they go build it, and they're gonna change the game... One of us has to. Someone has to. Or we're just going to admit that this is as good as it gets. And then 20 years from now, there'll be some podcast where somebody does the moral equivalent of what John and Paul did, and blow everybody's mind, and everybody will be like "Oh, it's that way." And I don't know what they'll call it then. Dinosaur Ops, or something. But...

**Adam Stacoviak:** Would you mind if I read a quote from your pitch deck? Is that cool?

**Adam Jacob:** Yeah, that's cool.

**Adam Stacoviak:** I don't know who it's from. It's just a quote. It says "Way more intuitive!" with an exclamation point. "Way better than having to write custom TerraForm providers, way more powerful and intuitive than the very basic TerraForm checks, better than repos/Opa, because they still have horrible syntax... We'll see how this evolves, though."

**Adam Jacob:** Yeah.

**Adam Stacoviak:** So very optimistic, and then like "Yeah, we'll see."

**Adam Jacob:** Yeah, but that's how everybody should feel about System Initiative. That's how you should feel. It's the truth. And also, it's gonna work. Because you can smell it. Do you know what I'm saying?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** Sometimes you're like "Oh, yep, this has legs." And it's got legs. And I don't know exactly how that works, but the right posture to think about System Initiative is to say, "Well, how could it scale? What could we do if we had all that information about large enterprises? What could happen?" And once you start asking those kinds of questions, it's over, in some ways, because now we're doing it together. Now you're in the game. Now you're like "Oh yeah, I actually do want to think about what that could be could it be like. Could it be like this?" And then it's like, yeah, it could, because it turns out the way it is was only ever just us talking to each other. What people forget about that conference talk with John and Paul was that I was there, Patrick Debois was there, \[unintelligible 01:24:14.26\] was there, a bunch of people who started Kubernetes were there... We were all there. We were talking to each other. It was like, we were feeding into each other. And it's the same loop that's gonna happen. And so once we started talking about the future like that, that's it. that's the game.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Well, that's exciting.

**Adam Stacoviak:** Let's send some people back to your home base then. Systeminit.com. You also have a Discord, I believe. Is that true? You have a Discord that's pretty active...

**Adam Jacob:** Yeah, yeah. Well, hopefully it's active. We'd like to become more active, because we think people need to talk about this stuff, with us and with each other... So that's what we hope that Discord community really becomes.

**Adam Stacoviak:** Okay. Systeminit.com. Check that out. If you're down with Discord, be down with their Discord... And no more papercuts, right?

**Adam Jacob:** God bless us. Yeah. I hope so.

**Adam Stacoviak:** That's it?

**Adam Jacob:** That's it.

**Jerod Santo:** That's it,

**Adam Jacob:** You're all great.

**Adam Stacoviak:** Thanks, Adam.

**Jerod Santo:** Thanks for coming back.

**Adam Stacoviak:** It's been so awesome seeing you again...

**Jerod Santo:** Hit us up when it's open source. We'll help share that as well.

**Adam Jacob:** Oh, for sure I will. For sure I will.

**Jerod Santo:** We'll put that on the news.

**Adam Stacoviak:** Later, Adam. Thank you.

**Adam Jacob:** Thank you. You're all great. Sorry, I have to go...

**Jerod Santo:** Just keep telling us that; we'll put that on loop.

**Adam Jacob:** That I'm sorry I have to go?

**Adam Stacoviak:** No, no, no.

**Jerod Santo:** No, that we're great.

**Adam Jacob:** Oh, you're incredible.

**Jerod Santo:** \[laughs\]

**Adam Jacob:** Yeah. Anytime you need it, just call me up, and I'll give you soundbites all day.

**Jerod Santo:** Okay.

**Adam Jacob:** Thanks, guys.
