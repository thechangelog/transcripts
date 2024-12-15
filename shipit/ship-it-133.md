**Justin Garrison:** Hello and welcome to Ship It, the podcast all about everything after git push. I'm your host, Justin Garrison, and with me, as always, is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm very happy to be here. Slightly caffeinated, almost there...

**Justin Garrison:** Getting there. A little more coffee. Autumn, are we are we telling people about your new job?

**Autumn Nash:** Yeah, we're good to go now. I mean, the world knows at this point.

**Justin Garrison:** That's right. You announced it on LinkedIn. We're good. So what's your new job?

**Autumn Nash:** So I am the product manager for Azure Linux. So the Azure Linux distribution at Microsoft.

**Justin Garrison:** Just started this week. Congratulations.

**Autumn Nash:** Well, actually, the security product manager.

**Justin Garrison:** I'm sure there's a lot of PMs on Azure Linux.

**Autumn Nash:** Yeah, so I am the one that works on the security vision for Azure Linux.

**Justin Garrison:** So anyone listening to the podcast, if you have problems with security on Azure, you know where to go...

**Autumn Nash:** Rude, Justin. Rude. Don't lie. The DMs are going to be from you making different accounts.

**Justin Garrison:** All my bot army.

**Autumn Nash:** It's going to be Justin's bot army being like "Can you fix this for me?

**Justin Garrison:** "I've got a bug." For any longtime listeners of the show, you'll know our guest. How's it going, Gerhard?

**Gerhard Lazu:** It's going really well. I'm very happy to be back. This feels very cozy.

**Autumn Nash:** I'm so excited to meet you. I feel like I'm geeking out.

**Gerhard Lazu:** Likewise.

**Justin Garrison:** I was a longtime listener of the show, I thought it was great... Can you bring us back? Why did you start Ship It?

**Gerhard Lazu:** It started with all the work that we were doing on Changelog with Adam and Jerod. I mean, there was a lot of infra work, and setting everything up, and going through all the motions that you normally do when you take an application to production... And we've been doing that for I don't know how many years before Ship It started, but it's been years in the making. And there were blog posts before that... And one day we realized, "Actually, there's so much here that we could start a podcast, start a new show, if you'd be up for it." And the rest is history.

**Justin Garrison:** And you carried that on for - I think it was 90 episodes, which is awesome. And then also we have -- going full circle from you stopping at the 90th episode, we have some news to share with everyone else... That Ship It as this podcast on the Changelog is going to stop at the end of the year. So at the end of December 2024 - I don't know when you're listening to this now, but we're stopping the podcast... Again for you, Gerhard. First time for me and Autumn to stop it.

**Gerhard Lazu:** Well, that was all news to me as well. When we scheduled this conversation, we didn't know about that. And I'm glad that I was able to come back one more time, before the original Ship It in this form will be put on pause. I always like to say it's on pause; maybe indefinitely... Most likely indefinitely. But you're right. It's like history repeating itself.

**Justin Garrison:** Yeah. And for anyone listening, sorry about the news breaking to you... This is a decision for Changelog as the network. They're stripping down -- not stripping down. They're not going to do a lot of the extra podcasts they were doing. I think Go Time, and JS Party... They want to focus on the main Changelog podcast. And that makes total sense to me. I think we have up to seven right now... I came in -- when we restarted Ship It, we're just like "Let's just see what happens." And Autumn and I have been doing this for almost a full year... And they wanted to trim it back, and that makes total sense.

Autumn and I are planning on continuing on with some form of this podcast, at least for a little while. We still have a bunch of amazing people to interview about all these different topics that we're just like "You know what? This is already has some momentum." We already appreciate everyone that's listening, and talking to us, giving us feedback and telling us what they like about the show... So we want to continue that. We think there is space for this in the podcast universe, and it's a passion that Autumn and I and a lot of people share, just about infrastructure and technology, and just the responsibility of running software in general.

**Autumn Nash:** \[08:21\] And it's awesome meeting all the people that maintain and run software and infrastructure.

**Justin Garrison:** And the variety. of people. Everything from 3D printer software, like the Octoprint stuff, to stuff in space... It's been awesome just learning all of the things that are different and the challenges in each space, but also all the things that are the same.

**Autumn Nash:** Yeah, that are very much the same in the most hilarious of ways. We should also see if listeners want to send us some ideas for the name of our new podcast... Because that would be neat.

**Justin Garrison:** That's going to be unhinged.

**Autumn Nash:** Yeah. But that's when you get the best stuff.

**Justin Garrison:** So yeah, so this episode -- I think we have three more episodes after this one to finish out the year, and hopefully on that last episode we will have some more formal announcement about where you can find us, where this is going forward. Jerod and Adam had been great, and they are encouraging us to continue, and allowing us to keep doing this, so they might keep some sort of redirect up for people that are listening to this later than the end of 2024. But yeah, we want to be able to keep that going for some people, and make it as seamless as possible... But also, you're probably going to have to add a new feed in your podcast listener.

**Autumn Nash:** I'm really excited, though. I feel like this just allows for like a new evolution of Ship It.

**Gerhard Lazu:** Yeah. I mean, you had 40 episodes, right? Nine months. More than 40 actually, at this point. Close to 50. How would you summarize that in a few words? All the episodes that you've done so far, in this format.

**Autumn Nash:** I think kind of going back to what Justin said, it's amazing to see - you can be running a satellite in space, or you can be running pipelines, and platform teams, and it's so much that is different, but so much of it is the same. So much of the new technology that we've built to make infrastructure easier is also just reminiscent of like the past. And it just makes it -- it's like all the different ways that you can solve this awesome big puzzle. I think sometimes tech gets really weird, and this podcast has made me remember why I love what we do, and kept me loving it even in like the last year.

**Justin Garrison:** For me, some of my favorite episodes were the throwbacks. Talking to Rich, and Mandy, and people that were like "This is what it was like to run the AOL chat rooms." That was awesome. It was basically the same thing we're doing now, just with tools that everyone's like "Oh, you shouldn't use those anymore." That ran the internet for years and years and years. We can't just throw out all the old stuff that was super-functional because we don't like it anymore. So those were really cool to me.

**Autumn Nash:** Also, I just think that it's wild, the amount of people that we've met, and they were just like "We were doing this cool thing, and I found it, and I started doing it, and then it leads to this job, and this whole career." Learning how you run Linux and different things in space is just wild to me, and how you have to make sure that it can be updated, and just all the thought that goes into it... But the people that we've met are almost cooler than the technology.

**Justin Garrison:** Absolutely. I mean, yeah, the people in their journey into it have been really fun to learn from. In almost every case it was someone just like "Well, I just stepped up and learned a thing."

**Autumn Nash:** That's what I'm saying. But how many jobs can you make this type of impact on the world, this type of money, and this type of community? ...and just because you thought something was cool and you nerded out about it. That is the essence of what makes us still want to do this at the end of the day, you know?

**Gerhard Lazu:** Yeah. I think my favorite ideas start with "This can't be done. This is too crazy. There's no way. This is never going to work." And going through the cycles to either realize, indeed, "This will never work the way I thought it would..." But the learnings and the relationships that you make along the way - those are the ones that will take you wherever you're going next.

\[12:17\] So it's all little steps, some missteps... And usually, the missteps are the ones that teach you the most. That would be one of my takeaways, I think, from Ship It and from all the work that you do in this industry. Learning from mistakes. So powerful.

**Autumn Nash:** So true... I used to be like really scared of making mistakes, and wanted to be perfect at everything, which was my toxic engineer trait... I think at a certain point when you've done so much stuff in production, and just worked in this industry for so long, you're no longer scared of making mistakes. You just kind of almost have to like get joy in the ambiguity, and the doing hard things, because you have no other choice.

**Justin Garrison:** And you have to be given the freedom to do that. The number one contributing factor to good, performant teams is psychological safety. Being able to say "I don't know", or "I made a mistake" and everyone's like "Great. What do we learn from that? Where are we going forward?" And that's okay, to have that freedom to make the mistakes. And there's a lot of privilege in that for some of us. I guess as a white dude in tech I've been given the benefit of the doubt more than I should have been throughout my career, to be able to say "Actually, I don't know that." Or "I messed up. Sorry, I'll fix it next time." Which - I know a lot of people don't give that, but also a lot of companies don't give that, because they're just like "We hire senior people, and senior people know what they're doing." But no. Senior people don't know what they're doing either. They've just taken down production before. It's just like the only real difference of like the junior people are like terrified to take down production, and the senior people are like "Oh, no, this is gonna be alright."

**Autumn Nash:** But that's why I think this podcast is important, and that's why I'm proud of the last 50 episodes that we did... Because I feel like there's a lot of podcasts that are big on tech, and they're very technically depth... But I appreciate the way that we talk about making mistakes, and the way that we talk about the people aspect, and how you have to have that safe environment, and we can talk about diversity and all these different things, because -- like, I think people really think that diversity or safe places or all these things are like an added bonus to technology... But you can't make good tech without thinking about the people, without thinking about how to make a better environment. So whatever we can do to use whatever privilege we have to influence and to make things better and to like help people know that like they can get started... And also just to talk to people that are really good technically, but are from all these different backgrounds. Look at all the people that we've had on the show. So I just think it's cool to be able to use the privilege that we have to try to make it better, and make other people seen, and to also show that you can be different and still very technically depth.

**Justin Garrison:** Well, I guess we'll just transition right into - Gerhard, what have you been doing since you've kind of left Ship It, since you left the Changelog? What have you been working on? What software have you been responsible for?

**Gerhard Lazu:** So it feels like I never really left Changelog, because first of all, the Kaizen episodes, of all the infrastructure improvements that we are still driving, they're still very much present... Trying all the things that we did over the years, and taking it to a place where it is now, and continuing the journey - that has been a long-term, very satisfying journey.

That's the way I would put it. I'm very happy that that is continuing, and we've figured out a way to make that work with Adam and Jerod. So that is personally a very satisfying thing, and also professionally a very satisfying thing.

After Ship It, and the reason why for me, even like back then, when I was on the last episode, 90, "Embracing Change", it was a priorities -- I had to reshuffle a bunch of priorities, basically, and I had to give more time to my main job, which at the time was Dagger... And it still is at Dagger, even to this day. And I think that was one of the big changes that happened between me starting Ship It, and then having to part ways at that point.

\[16:25\] 2021 was a very interesting year, and it was not because of COVID, but that obviously did make it interesting for everybody... But for me personally, I was transitioning into a startup again. I went from a large enterprise at the time that was VMware... And at VMware, I had been working on RabbitMQ for, I think, six or seven years. And I went through like different types of teams, until eventually I ended up on the core RabbitMQ team... So you get all the Erlang, you get all the Make... And there's a story there, because it connects to Dagger... And you just get to see a lot of really important systems, distributed systems, distributed systems problems... And you realize how important the kernel is, even when you're not using containers. So little differences between the different kernels can have a huge impact on how something like the Erlang VM behaves. And these are really important applications, like things for banks, financial institutions, GPS trackers... And you may be thinking food deliveries, but there's also some other GPS trackers, which are really important they work correctly. Tails, payment systems... It's all over the place.

At some point - we didn't realize this - some cars, the doors wouldn't open. And RabbitMQ was in that stack. I was not expecting that. You would honestly not expect that.

**Autumn Nash:** That's wild.

**Gerhard Lazu:** It is wild to see where tech ends up, and how it ends up being used. A lot of the time it gets used wrong. So having those conversations, and going through those cycles when you have big teams, and big budgets, and big enterprises is fun, but also it's a certain type of game.

So after playing that game for like six, seven years, something like that, I said "You know what? It's time to go back to the startup world." Because I did start on that journey before getting to VMware. We were a small startup. We were Cloud Credo, we were consultants for Cloud Foundry at the time, and Bosch, for those that remember Bosch... Maybe a few listeners will. And Chef wasn't working for those systems. So a team of 20-something people, then we became Pivotal, as in we were acquired by Pivotal... But in my mind, we took over Pivotal in some way, because of that craziness, the crazy spirit that we had... And that worked really well. So being part of Pivotal was great. And pair programming, and extreme programming - that was at the core of it. And then Pivotal eventually got acquired by VMware. So those transitions from 20, to 2,000, 40,000 were huge jumps, and huge changes. So I rode all of that, and I said, "You know what? It's time to go back to the startup world." And that's where Dagger enters.

So Dagger was interesting, because I was fascinated by Docker, and I was working with Docker and using Docker, but I haven't helped build Docker. So Dagger was in the moment where "I could try that." And I took it. And three years later, here I am.

**Justin Garrison:** For anyone that doesn't know what Dagger is, describe - what are you doing, or what does Dagger actually make as a product, as a startup that's like "Hey, we're going to change the world for this thing"? What is that?

**Gerhard Lazu:** So Dagger is what happens when you get tired of all the YAML. When you get tired of all the YAML in your pipelines, especially your CI/CD pipelines, or when you get tired of your Jenkins file, or when you get tired of your scripts, you want something that scales with teams, and with ideas that can -- it's really hard to capture them in YAML.

\[19:56\] If you are finding yourself starting to template YAML, for GitHub Actions, or CircleCI, or any CI/CD system, you know you need Dagger. The other option is to go towards Bazel, and to go into that world. But for anyone that knows that world and experienced that world, knows that that is a very heavyweight, enterprisy world.

So Dagger takes all the scripts and all the YAML, and it allows you to capture that in code. So what that means is that imagine writing your automation - it can be a makefile, it can be your GitHub Actions YAML, it can be your CircleCI config, your Jenkins file... All those things you can take, and you can put them in the code that you are familiar with, whether it's Python, whether it's Go, whether it's TypeScript... And some more legacy languages, which are still very much present, like PHP, or Elixir, for example. Rust, some newer ones... Any of these languages you can use to write your automation, and you can package it in something called modules. You can distribute these modules as you would any package, and you can assemble them just in time, and you can combine them with other modules.

So what that means is that now you're writing automation, you're integrating with CI/CD... It's just a matter of calling the right function from the right module, and making sure that that function gets wired with everything else that it needs.

For example, you have your tests, and build. And you say, "Okay, but you could do this with make files, or you could use a just file, or you could use anything like that." And that is true. You can. But what ends up happening with that is that there will be assumptions about the context in which that automation runs. Dagger - the only assumption which it makes is that there will be an engine, which is a container runtime, and in that container runtime you always have to specify "Hey, which container image do you want to run? Which one do you want to start with?"

So all these functions, they always have a context, and the context is the same, regardless where you run. Which means that if you want to run this locally, it will run exactly the same as it runs on any CI platform, anywhere in the world. You can run Dagger in Jenkins if you want. It is an option.

**Justin Garrison:** I've been doing containers and make files for a long time. That assumption that I can run make in Jenkins or my local machine, and it runs the same... I don't need Dagger for that, right?

**Gerhard Lazu:** Correct.

**Justin Garrison:** I've been doing it.

**Gerhard Lazu:** Of course.

**Justin Garrison:** A lot of stuff just works like "Oh, just execute the container. Here's some arguments for variables to the make file. That's fine." So that side of it doesn't really change how I've been doing things, at least. Now, I know it does change how a lot of people are doing it, because Bash is prevalent. The second thing here though I think that is interesting... To me, Dagger has always been almost the dagger, if you will, the blade for the DevOps team. How DevOps used to work for me at large enterprises was application teams would go write a bunch of code, and the DevOps team would come in and drop a Jenkins file in. "Here's your PR for your Jenkins file. Now this is all going to work magically." We had a whole team at Disney Plus that was like a lib Jenkins team. We wrote libraries... I didn't do it. I hate Jenkins file. But they wrote libraries for this Groovy script, so that everyone in their Jenkins file would import that team's lib Jenkins, and then it would do a bunch of stuff for them by default. But that's still required.

There was some other team doing some other thing, in some other language that was external to the application team. And my sense with Dagger is the fact that Dagger requires that the application team now owns CI/CD, as like they are the ones -- because the familiarity of code doesn't matter if you're not the one writing the code. If you're some external person, you're going to have your own pep formatting for Python, and your own modules, and formatting. So it's not going to jive well with the application team. So in this case, Dagger makes the most sense when the team writing the code is also the one doing the CI/CD. Is that right?

**Gerhard Lazu:** \[24:07\] Yes, that is a valid take, for sure. We see different teams and different companies use Dagger in different ways. At this point, we've seen every which way, and they're all valid. The point is that it forces the different perspectives to come together as code. So forget like make file, or Jenkins file, or a script, or anything. Just -- we will be writing the code that our company is most familiar with... Whether you're a DevOps person, whether you're someone in the community that wrote a module... It doesn't really matter. The point is, we will all be looking at the same code, we understand the same code, we can contribute to the same code, and all the automation ends up being code that we can run locally, from wherever it is.

So just to give you an example of how powerful this is, let's say that you would take the Dagger repository as is today. The Dagger repository has a module for the entire repository which encapsulates all the things that can happen in that repository. So without you knowing anything about how it runs, or what's needed, you can start discovering what is possible in this module. For example, "build me the docs, but also serve the docs." You have one command that will build, lint, serve the docs on your local machine, the Dagger docs, without you knowing anything, or having to install anything apart from the Dagger CLI.

In the same way, you could build yourself a Dagger CLI, if you wanted to, once you discover what the command is. And it's all self-documenting, it's all there... So it provides a very nice way of consuming things without you knowing much about what this piece of software is. It's almost like an API to code... But an API to consuming code, to consuming resources... I don't care whether it's Python, whether it's PHP. What I want is the artifact, or what I want is the docs, or what I want is the auto-completion, whatever the case may be. So how do you encapsulate that in a way that others can understand and consume it in an easy way?

**Justin Garrison:** Well, but there's a separation there of understanding something and then using something without needing to understand it. Because again, I've written plenty of things that were just like "You just run make docs, and docs are there for you." Like make docs dev. And they don't need to know what's behind the make file. And it's running containers still, it's doing that stuff. The thing that I think is really interesting here is the fact that those modules are shareable. And the modules are something really powerful that Terraform did for us. Terraform modules were powerful, because you're just you don't have to know behind the scenes. And granted, at some point, you might need to escape the module. You might need to override the module. You might need to go build your own module. But you can get started with something that has some opinions on how we think you should be doing this.

And in the Dagger sense, and in the Terraform sense, most of the time those things are just going to work for you, without needing to care. So it's like, I can dagger init, or whatever; I can start off with the module like "Oh, this is the thing I wanted. This looks right. I'm going to go with the defaults, and if I need to change it, I can."

**Autumn Nash:** So essentially, can you get rid of the make file and all of that, with Dagger, and just have -- say you were building a startup or application, and you didn't have the experience that Justin has. And you just needed to figure out how to make your CI/CD and your DevOps, just the whole realm work, and you don't have that experience. Does this now enable you to skip all of those extra files in different ways, and just have your whole team learn how to do your infrastructure in that way using Dagger?

**Gerhard Lazu:** \[27:50\] Yes, if you would go to the modules that Justin -- so first of all, it would require Justin to take time to write the modules, and to share them, so that others can discover them. It's just a matter of basically putting them on his GitHub repository. The convention is Daggerverse, so many people have the Daggerverse repo, which is a collection of the different modules that people use and wrote.

So at this point, there's I think five or six implementations of the Go module, which does all things around Go applications: testing, building, linting, all those things. So you're right in the sense that you would need to figure out how to write that automation; just a matter of using it. If you have a Go app, great. This is how you provide the source, and this is what options are available to you. And you can try running it locally. It works? Great. So how do I run this in CI? The same commands. The same commands that you'd run locally, you'd put in CI, and it would work exactly the same.

No more figuring of YAML, no more figuring of a lot of things like caching, for example... I mean, we haven't even unpacked this aspect of Dagger - how it caches, how it, for example, sends open telemetry traces for every single operation which happens inside of it... There's so much here.

At the surface, it looks like it's a replacement for your scripts. A way of embedding this knowledge and sharing it with others. But other tools have done this before. So how is this special? It's all the other things which we haven't gotten into, which makes it a very comprehensive way of putting automation in code, sharing it with others, and letting others reuse it, rather than everyone having to write the same thing in their own specific way.

**Justin Garrison:** I think the code piece for me is always kind of that barrier, for a lot of people... Because saying you get to write all your automation in the code you're familiar with is a lockout for a lot of people, because a lot of people are not comfortable with code. All the people writing YAML are expert YAML engineers. They know how the GitLab YAML is going to do something different on some thing that has a list, versus an array, or whatever it is. They're like "I know this thing, but once you ask me to like go write some Go code, I'm not as familiar with that. And I feel a little bit out of place if I'm the one that is like an external person going in to do and maintain and do this thing for another team, that's an application team."

A lot of companies I've worked at the app teams were always this high-level, like "You don't mess with them. They're the ones making the money, and all you other people are just overhead." And you're just like "Oh, you write the YAML, everyone else writes code." And that I think is a barrier for a lot of people.

**Autumn Nash:** I think it's also perspective though, because think about it, when you go to school for computer science, or you first get into computers, you're writing Python, or Java, and nobody tells you about DevOps, nobody tells you about scripting, unless you somehow just stumble on that.

So I think for people that maybe started in systems, or started with scripting, yeah. But it's a huge barrier for people who just started writing the high-level code, and then all of a sudden they're thrown into a production environment. Well, now they have to manage infrastructure.

I think you have more people coming from the, like, writing code... Because think about it, when you hear bootcamps, or school, or you go to these different ways that people are being educated to get into the tech industry, everybody tells you about the code and nobody tells you about the scripting, and the version control, and the DevOps, and CI/CD. So I think this is a great tool for those people, and making it more accessible to get into DevOps and CI/CD, and to be able to maintain your infrastructure... Because everybody talks about making this really cool app, and nobody talks about maintaining that really cool app, and releasing it. You know?

**Justin Garrison:** That's why we're here. That's what this podcast is for.

**Gerhard Lazu:** Yeah, exactly.

**Justin Garrison:** And I think that's a great point, where it's like, it's a barrier both ways. There's the person that's only ever written web apps with Spring Boot. They're like "I don't know what this Docker thing is. I'm not going to go into the weeds of something that's not my thing." It was like "Actually, it's all your thing." And same thing for the system people, like "I don't know how the JVM is going to do that thing." Well, you better learn, because that's also your thing.

**Autumn Nash:** \[32:03\] Because I feel like when they -- they'll be like "Okay, you have to learn frontend, but then you have to learn the backend, and then you have to learn how to make that connect to a database." But nobody is ever talking about how to keep all of this working together, and maintaining it. So I felt like -- all the whole time during school and going through training at AWS, and going through different bootcamps and everything, I was "Why are we always like --" We talk about the main, the big, main products, but nobody talks about all the secrets you need to make all of it work together.

**Gerhard Lazu:** One analogy that I think works really well when you're trying to approach Dagger and you're trying just to figure out "Where does this thing fit in?" Imagine that what you're building is a software factory. Your startup, your company, your team, whatever it is, you are a software factory. You are delivering value to your users in the form of software, or through software. Great. Where's the thing that helps you maintain your factory? Where's the thing that helps you do all the things that you normally -- I mean, there's not that much value in figuring out, for example, how to run your tests, or how to cache them properly. Or how to maybe lint. That's another one. How to package? I mean, how many hours do you want to spend figuring out how to package a JVM container, or a Java container? Seriously. I mean, sure, there's recipes that you can copy, and AI is very helpful... But what if some people that were really passionate about this and had the time, they encoded this in Java? Let's say using Java. And then you just get to use it. Wouldn't that be nice?

**Autumn Nash:** But not just that, but when you have AI do it, it's very hard to get the context. But if somebody else on your team, or somebody else that works at the same company as you, that you can ping and be like "Hey, I want to reuse this, but I don't understand this part", you know?

**Gerhard Lazu:** Yeah. And if you give people make files, or Jenkins files, or YAML, what do they say? When was the last time you received a YAML package and you said "Wow, this is cool. I'm going to use this. This is amazing"? When did someone get excited about a Jenkins file? Rarely.

**Autumn Nash:** Not just that, but it never works the same for everybody.

**Gerhard Lazu:** Exactly. That's it.

**Autumn Nash:** Everyone's like "Use this, and it's so easy." And you're like "Is it, though...?"

**Justin Garrison:** I mean, same thing could be said for a lot of code though, right? So many npm modules and Python things I've tried to solve, like "This is broken. What is the expectations of this thing to work?" And I think that encapsulating that in a holistic container, that can do some of that has been the solve for a lot of those things. But once I'm like "I need to go write some software around this thing, but I can't even run this thing", it's a problem.

**Gerhard Lazu:** Yeah. And when it comes to introspecting, it's like, okay, great, so I have this command, which I run... Great. I'll figure out how to run it. Let's say it's in the make file. So what is actually happening in this thing when it executes? How can I visualize the execution of the different steps? How do I know when a step runs or doesn't run? I mean, I used to love make. I still have make files around, which I still use to this day, and they're great. Just files - same thing. Only recently on the Kaizen we talked about just files, and how just makes more sense in the context of Changelog. That's great. If you're happy with your make file, if you're happy with your just file, any automation that you have that works for you, keep it. It's a good thing. It's an asset. It's not a liability. But when that thing stops working, when you get frustrated, when you get all the issues with YAML, and all the things that you've been maybe toiling away for years and years, when you will consider something better, have a look and see if that makes sense. And then discover the web UI, discover the traces, discover all the things which are available, and which are getting better, discover the shell... I haven't even talked about the shell. By the way, that's like a hidden, experimental feature, that is coming in a future Dagger release, that's being shipped silently for a while... But if you are interested, you can join the community calls, and you can find out more. But enough about Dagger. We can talk about infrastructure if you want.

**Justin Garrison:** \[35:59\] \[unintelligible 00:35:59.03\] all the other things you're talking about, because like -- I have plenty of makefiles. I've never loved make. I've always thought it was arcane, and hard to learn, in a very gatekeepy way. This is like someone learned it once 18 years ago, and they're like "Yeah, I wrote that makefile. I have no idea what it does." And it's always been really hard to get back into it. You're like "This is all obscure, old docs that aren't relevant anymore." But it works. If it's the thing, if it keeps working, cool. It's probably a you problem if it doesn't work. It works somewhere.

But you talked about like Dagger is a drop-in replacement for some of those things. But what are the other things on the edges there where actually "What are we missing out on by not doing this?" By not having a newer tool to be able to do that. You've mentioned open telemetry, you mentioned the shell, you mentioned modules... Like, those are all pieces, but it's hard to understand "Why do I need those things? What can't I do today?"

**Gerhard Lazu:** Okay. So modules as a category, it's a way to package the code that you wrote, and share it with others. Think about it like an atomic pieces of code that go well together. For example, the Go module would encapsulate all the code for writing with Go apps. There's something for Node.js, there's something for Helm, there's something for even Kubernetes. If you want to figure out how to run K3S inside of Dagger, that is possible. Many things like this are in the Daggerverse. Daggerverse.dev is the place to go to check what modules are available, "What can I pick and choose?" So those are the modules.

The open telemetry is how we capture what happens inside of a Dagger call when basically Dagger runs. And we are sending all that information to Dagger Cloud, using these traces, so that we can visualize what happens in your run, and think of like the network graph. So in the browser, if you were to open the network graph and you would see how long resources take to load, the spans, the traces, it's exactly the same concept.

So that gives you a very deep insight into what happens in your automation, and you can see which are the steps which take a long time, or which are the steps which, for example, don't cache well. All that information would be conveyed, in this case, in Dagger Cloud. So the way to do that, you just basically connect your CLI to your Dagger Cloud account, and you have to create one for -- it's basically free for individuals; for teams, it is a paid plan. But as an individual, you can try to see what this looks like. And you can maybe bring your team members over your shoulder to look or share your screen to see what it looks like. Everyone can do this. So that gives you an insight and appreciation of all the things that happen in your automation.

And then the shell, the third thing, is a way to put yourself in a context where you're trying to discover what automation is available, and how to stitch the different functions together. It's exactly how you'd use pipes, how you'd basically get functionality from different parts, and try experimenting with it to see what makes sense.

So what is the right arrangement for this, for example pipeline that caches well, that works well, that the expensive steps happen first? And you can do that in the Dagger shell. So it's a way to interactively discover and work with your automation. And the perspective is the functions that are declared in Dagger. So that is the starting point.

**Autumn Nash:** I think that's really important, because we don't have enough observability and actual insight into our automation. Automation is a great tool, and it makes it where you can scale, and take a lot of the human error out. But if you don't have a deep understanding of your automation, it makes it really hard to maintain and to scale it, and just to use it in general. And when it breaks, you're kind of out of luck.

**Gerhard Lazu:** \[40:02\] All these things put together, it's about an experience which is a bit more visual, it's an experience which is a little bit more curated... It's almost like "What would you do if you had to do automation properly? What would you do if you had to --" not reinvent, but I would say rethink how make files and how your Jenkins files and how your scripts should work in a container-first world.

And containers are important, because it's that immutable thing, right? Because those are -- like, having something immutable, having something that caches, having an actual layer is able to speed things up in a way that's difficult to do otherwise. Make file is local. How do you distribute in make file resolution? It has a DAG, but how do you distribute the DAG? And that's something which today, for example, in Dagger, we're getting very close to that being possible.

**Justin Garrison:** What do you mean by close? Like, what's missing there?

**Gerhard Lazu:** So how do you have a cache -- like, we tried a couple of iterations and we know how this fails. How do you have a remote cache, that you can safely store operations in at scale? So imagine every single step that runs - it has some inputs, it does a function, and then it has some outputs. If you're able to cache those outputs, put them somewhere, like a CDN or an object storage... By the way, the object storage is what we have, and we had... And then when a pipeline runs again, or the same call runs again, it doesn't matter where you call it from, as long as the engine is connected to this object store, it can retrieve the steps. It can retrieve the layers. It doesn't have to recompute them.

Sometimes it's a lot more efficient to pull down these layers rather than recompute the operation. How do you do that safely at scale, in a way that is easy to use, and is easy to operate? That is the hard part.

**Justin Garrison:** Caches should always be invisible. The easiest cache is the one you don't know you're using.

**Gerhard Lazu:** That's the local one. Locally, it works well. When you go distributed, that's when problems start. That's when you have race conditions, that's when you have pruning, for example... That's when you have all sorts of things that you have to deal with. When you're dealing with many terabytes, hundreds of terabytes of this data, it becomes a hard problem. And sometimes, depending on network - I wouldn't say even like network conditions - it can be cheaper to recompute it locally.

**Justin Garrison:** How much of that can you rely on like what Docker does for caching? Because I can have my build X cache somewhere, which is basically the same thing of "I get this layer that has a SHA", and I can say "Oh, I'm going to get the same SHA, just give me the data." How much of that is using what's under the hood by relying on containers, versus building something net new?

**Gerhard Lazu:** So that makes sense when the inputs don't change that frequently. In this case, an input is source code. And source code churns a lot. So how can you still have a good cache hit ratio when your input is something that changes with every commit? So how do you sequence your source code? How do you compartmentalize it so that you know which functions depend on which source code, so that you get invalidations working properly, and you don't bust the cache too often? And that is a hard problem.

**Break**: \[43:27\]

**Justin Garrison:** I was digging around in Dagger while you were talking about things, and you have a shell SDK... Is that like a thing?

**Gerhard Lazu:** Yeah... So the Dagger shell which I'm talking about -- yes, so the shell SDK used to be a thing. I mean, okay, so let me just unpack a little bit... The power of Dagger, one of the qualities of Dagger is that it puts a GraphQL API. It exposes a GraphQL API that all SDKs talk to. So the engine itself, which is where the work happens - I can think of it like the server, and the way to interact with it is via this GraphQL API. The SDKs - all they do, they are GraphQL clients that expose all the operations and all the resources from the GraphQL API in a language-specific way. Whether it's Java, whether there's a Java SDK, whether it's shell, in this case... So if you're able to model the interactions with the GraphQL API through shell functions, it would work.

**Justin Garrison:** One of the things that Dagger shipped a while ago was the ability to mix and match the SDKs. So I can use a module that's written in Go, but my app's in Python, and I can write my function on top of it in Python. And that seems like an outcome of everything talks to the GraphQL API, right?

**Gerhard Lazu:** That's correct.

**Justin Garrison:** Okay. It's like, we all just talk to an API. I don't care how you got here. If you're doing curl commands, you can get to this GraphQL, do something, and then the next step is on you to write that in whatever language you want.

**Autumn Nash:** That's also awesome because it makes it accessible for multiple teams working at the same startup or enterprise, that are writing in multiple languages... Because it gets to the point where enterprises want to just start making everybody use two languages, and you're like "Dude, this language does not work for the things that you want it to do." I mean, it can, but it's not the right -- you know? It just gets to the point where you're using a hammer for every project.

**Justin Garrison:** Well, they want to optimize shareability, and it's like "Hey, by making everyone write Kotlin, then everything's going to go smoother."

**Autumn Nash:** Don't lie, it's usually TypeScript. We all know.

**Justin Garrison:** It's TypeScript. But those are the two languages, right? Like, everything frontend -- that and maybe some backend's Kotlin, or something like that. And it's just like "Okay, everyone writes these languages now, because we have to be able to share this stuff. And we have this DevOps team over in the corner, and they're out there writing YAML." And they're like "Well, I'm just going to plug in this YAML thing", and the team's like "No, I don't want that." But if the Kotlin team is writing a Dagger module, and the TypeScript team wants to also use that module, they can, because you just said our lowest common denominator is the API. If you can call the API, I really don't care what language you call it in. We're going to give you the same functions. And every language has a way to call a WebSocket, or some way to call an API somewhere that's external and say "Here's data. Give me back something."

**Autumn Nash:** You're enabling the dev team to do it in the language they're more comfortable with, and you're allowing them to fit it into whatever they've already built, which means that you're not trying to completely -- what's the word I'm looking for...? There's so many times where they're just like "Go restructure all this code to fit this one API", and then you break six things, it doesn't work... You know? Any way that you can make your life easier without having to do a huge restructure is --

**Justin Garrison:** Enabling and forcing are kind of the same thing... Because not all dev teams want this. They're like "Actually, I just liked it when the external team was responsible for the thing. And when it broke, I just sent them an email and I went to lunch." That was how a lot of devs liked it.

**Autumn Nash:** \[49:59\] True. But in this time, when we have less resources, and we're trying to do less with more, I don't know if people are going to always have a whole other team. You know what I mean? Think about the restructuring of enterprises and just the fact of what you have to work lean with a startup. You may not have the option to have that whole other team. There's a reason why cloud services and managed products and SaaS products - people pay so much money for it. Because it got rid of your DBAs, it got rid of parts of your ops teams, and you could have a smaller ops team, because at the end of the day, people want us to do all the things with the least amount of resources.

**Justin Garrison:** And I would also say, if you went to RDS and got rid of your DBAs, you made a mistake, right? That's not necessarily the thing you thought it was going to be.

**Gerhard Lazu:** I also think that these things evolve. So instead of needing a DBA, now a lot of people need data architects. So maybe you don't need somebody running around a data center and doing the DBA in the traditional sense... But just because you got rid of the DBA, you need a data architect to now tell you how to do your access patterns, and how to optimize your database. But one is easier to contract, and one you need every day. So they're all trade-offs. It's all like what works for your business and what works for your use case. But I think the problem that we have is that people don't know enough about the differences, and we just tell them like it's this new shiny thing, so they're not enabled with the right information to make those decisions. They both have value, but what has the most value for what you're trying to do, you know?

**Justin Garrison:** A lot of that also to me, at least in my experience, has been people that were going after promotions, and you see bigger -- like, "Hey, guess what? I'm going to rewrite all of our make files in Dagger, and that's going to have an impact on the business." And someone else will be like "But why didn't you learn why we had the make files in the first place?" Because that's hard, right? That side of the business is a lot harder, and it also never gets you a promotion. \[unintelligible 00:51:55.04\] for any engineer.

**Gerhard Lazu:** Yeah. I would not recommend that, by the way... If you have a make file, what I would say - don't rewrite it in Dagger. Try running it in Dagger first. That would be a much smarter first step. And always focus on documentation first. Ship It episode 44.

**Autumn Nash:** Can you say that louder? Because I think people think that automation means we no longer have to document things, and it hurts my entire soul so badly... Automation is not documentation.

**Gerhard Lazu:** I'm going to emphasize this in a couple of ways... First of all, Ship It episode 44 was a very important moment in my career, when we sat down with Kelsey and we went through all the things that are important for understanding how complex systems work. And documentation is the first step that you should do before you even think about automation. Because when you document, you realize about all the inefficiencies, and you realize that if you were to change your automation at any point - as back to what you were mentioning, Justin... Make file, rewriting that in Dagger - what you really want is the blueprint for the make file. And the blueprint is the document that you don't have. I was one of those people. I remember Daniil Fedotov, I will not forget him... We were on the RabbitMQ together, and he was asking me for the documentation and I said, "Hey, Daniil, you don't need documentation. I wrote this beautiful make file. It does everything for you. It's self-documenting, it tells you what the targets are... What do you mean, where's the documentation? This is the documentation."

\[53:45\] And it took me many years to understand how wrong I was in that moment. And I did it right. So when I joined Dagger, one of the first things which I did, I made sure that the releasing process is documented. So how we released Dagger - we started with a document. That document has been updated almost every other week for the last three years... And that is the blueprint which we use for all the automation at Dagger.

**Autumn Nash:** That makes my heart so happy.

**Gerhard Lazu:** \[unintelligible 00:54:16.17\] So I've learned my lesson, and I hope that you will, too. Dear listener, write the documentation first. Keep it up to date. Keep refining it. Keep working on it. Keep sharing it with the team.

**Justin Garrison:** It's not done.

**Gerhard Lazu:** It's never done. And then add your automation.

**Autumn Nash:** Did you guys hear him?

**Gerhard Lazu:** Replay.

**Autumn Nash:** Yes, because -- it blows my mind. You know how you were saying people want to do that for promotion, where they rewrite everything? Or people are like "We've been doing it in Bash the same way for 20 years, and we're never going to change anything. And there's so many new ways to do it, but let's just do it this way forever." And you're like... Not that -- I do think sometimes if it's really simple, Bash sometimes is just the way to go. But never thinking about how you can onboard new people, and share knowledge, and make it easier for everybody... Like, you're just doing the same thing forever.

**Justin Garrison:** And the comments aren't docs, too. That's the thing. A lot of developers are like "Well, that has a bunch of comments." No, no, no, no. You pull those out somewhere else. You make it searchable for someone else that isn't in the code to be able to find.

**Autumn Nash:** I've had people tell me not to put comments though, because the script is self-explanatory.

**Justin Garrison:** Job security?

**Autumn Nash:** No. They'll be like "The automation is explanatory if you write it clean enough."

**Gerhard Lazu:** That was me.

**Autumn Nash:** And I'm like. "No. No, it's not."

**Gerhard Lazu:** That was me seven years ago. Yeah, yeah, yeah, I know. I know now...

**Autumn Nash:** I'm just like, when you're new and you've never seen this before, it's not self-explanatory. Like --

**Justin Garrison:** Every job I've worked at, the docs I've written have lasted longer than the code I've written. And if you want to do the lasting impact, the docs are the thing that's gonna --

**Autumn Nash:** But we don't incentivize docs.

**Justin Garrison:** We don't reward it.

**Autumn Nash:** Yeah, that's what I'm saying. And it doesn't make sense, because what is the number one rule in school or wherever when you learn to code? What do they always say? Write it down, plan it out, and then you start coding. But I don't know where we missed that with automation. We were just like "Oh, but that's only for code, not for scripting, or anything else that's important." Or release processes. Dude, release processes and scripting and like doing the infrastructure usually takes longer than writing the code that you want to release. So why would you not do your due diligence to make sure?

**Justin Garrison:** Well, I mean, let's be honest, the meetings about writing the code take longer...

**Autumn Nash:** Oh God, yes. But that's what just kills me, when they're just like "Engineers just need to be able to write really good code, and be technical." And I'm like "That is such a small part of being a good engineer."

**Justin Garrison:** A lot of people that are afraid of AI being able to write code is like -- you're just looking at just such a small part of what the engineers are doing.

**Autumn Nash:** Those are the parts that we incentivize and reward, to be this 10X developer who can write and build things super-fast. But think about it, those are the people that job-hop every two years, and somebody else has to go fix the 10X developer stuff that you put together and duct-taped it, and nobody knows what it does, nobody's documented, and you're ruining someone else's on-call life.

**Justin Garrison:** Autumn, you can just drop names if you want.

**Autumn Nash:** I was a little triggered for a minute there... I'm so tired of tech bros.

**Justin Garrison:** So where do you think this goes, Gerhard? What is the end goal here for something like Dagger, or something that is making this a -- I feel like Dagger is the productized make. If I erased everything and said "What if this was a really good product? And we put it in here, and we gave them good experience, and good tools, and a good UI around this thing that is kind of opaque and always been weird, that one or two people on the team understand even remotely"? Like, let's just make it so it's easier for everyone to understand, let's make it so it's a thing that's maintainable, is shareable, is scalable. What's the end goal there? What's the thing that you're at the end of it like "Oh, if we get here, we've made it"?

**Autumn Nash:** You've just made me think of like the difference between VMs and the cloud. Dagger is like the \[unintelligible 00:58:14.09\]

**Gerhard Lazu:** \[58:22\] Well, remember what containers did for applications. That is the moment that I envisage for all the scripts that we write. That moment for all the automation that you write. The container moment for all those things, where we agree to put these things in containers first, in a way that's immutable, in a way that's content addressable. And if we do that, if this grows to a certain point, we are no longer writing automation. The automation knows how to consume the resources that others have built, without us having to go and figure out how to plug them together.

For example, how many times have you gone to download a package, or like a tarball, unzipped it, checked the SHA-256, made sure it's okay, make sure -- read the change log, read what changed, figure out what things have deprecated... All of that times a thousand. In your career, you will have done this a thousand times at least.

**Autumn Nash:** You're giving me PTSD of like flashbacks.

**Gerhard Lazu:** Is there a better way that I can consume these things, I can run it, I can validate that my software works? Whatever I'm trying to do, it combines well with all these things, in a way that is just friendlier? You get like a whole new experience of consuming software, of building, of distributing... Doing anything that you have to do with your source code before it gets out in front of people. Encapsulating all that knowledge, encapsulating all that knowledge in a way that is also documented. Because, coming back to the documentation, you don't document things, but maybe you're willing to document your argument. Maybe you're willing to document your function, and explain how this function should be used and how it can be interacted. And your function is a very small piece that the world now gets to use, because you're passionate about Java, and you know how to build Java apps, and to have package contain as well.

**Autumn Nash:** Can you just go on a speaking tour about documentation and automation? Because I feel like you could fix the world.

**Justin Garrison:** One doc at a time.

**Gerhard Lazu:** One doc at a time, yes.

**Justin Garrison:** Do you feel like there's any mistakes we're going to make again? I feel like there's -- as much as containers have done well, there's a lot of things that containers haven't done well for application packaging and sharing. Do you feel like there's something in there that's like this -- maybe in general; not Dagger specifically, but maybe there's a process of like writing code, doing a bunch of stuff to it, and then like spitting it out, packaging it and sending it somewhere else. Maybe that's the problem.

**Gerhard Lazu:** I think the problem is that the ambition is too big, and we don't get to capture it in practice well enough. So if we disconnected too much from reality, if we talk about these hypotheticals without having something real to back them up, everything will just not go where it needs to go, because there's too much air in the balloon, and it will pop. And the balloon is just air. That's it. That is my fear. I think with every technology, you tend to get that. Also, you start getting competition, players that - maybe they dominate the market, but maybe they're not the right solution for the problem, but they're the big gorilla, the 800-pound gorilla in the ring, and everyone gravitates towards them, because they have a monopoly on the market, and everyone talks about that. And then you get some huge acquisitions, and then everything goes sideways.

\[01:02:06.08\] So I think there is a real risk of not keeping it rooted in reality, going too far out in hypotheticals, and maybe not dealing enough with like the little paper cuts. Because there is a lot of paper cuts, and we try addressing them.

**Autumn Nash:** So many paper cuts.

**Gerhard Lazu:** Yeah. And now I'm talking about Dagger specifically, but you're right. Even in general, in the software industry, there's so much stuff which is broken, and I think you need some of that, because it is a form of technical debt; you need to innovate at the same time. But if it's too broken, that's a problem. So one of the challenges that we have, or something which I've taken upon myself - and if you want to read more about it, you can go to Dagger issue 8184. And guess how I know it off the top of my head? Because I've been on it for months now... It's how Dagger uses Dagger at scale. What does that mean? The scale that I'm talking about - when our pipeline runs, we are spinning up maybe up to 10, 15 large instances on EC2, that sum up about 500 CPUs to run the pipelines, all the pipelines for Dagger. If you have five or six pull requests happening at the same time, you have thousands of CPUs being spun up to test various things Dagger. That costs real money. That is a hard problem.

The less reliable your pipeline is and the longer it takes to run, the higher the pain, the higher the waste. And that is a hard problem. Every single team will have this at some point, if they're successful. We are getting there. We are looking at our AWS bill and we're thinking, "Wow, this is expensive. Really, really expensive. What can we do?"

And there are certain ways in which we use Dagger which we need to bust the cache. We need to do certain things, at which point - are containers the right way of doing this? That comes up. What is the overhead of using OverlayFS? What is the overhead on the disks? What is the overhead on the networks, of pulling all these bits down? What is the overhead of having to recompute the same thing when you don't have a distributed cache?

So there are some hard problems there, they're fun to solve... And this can either be a great success, or the biggest lesson of my life. And I will accept them both, with equal joy in my heart.

**Justin Garrison:** I think you make a good point there, too... I did a calculation for my local developer desktop, which is like an AMD Threadripper, versus something comparable in Amazon. And when I look at -- the machine that I built out of parts basically cost around 600-something dollars. And to get something in AWS it was 101 times more expensive. Not 10 times. This is consumer grade, not ECC RAM, it's not all that stuff... But I don't need that for some of these things. I'm doing local development and testing. I don't need ECC. I don't need all this stuff. And when you have something as portable as Dagger, it makes a lot more sense to like "Hey, maybe actually just a couple of these PCs that don't have all of the benefits that we don't actually need, could save us a lot of money." And even if they're not used. Because people say "Oh, it's wasted. You're not using it all the time." It doesn't actually matter. When it's a hundred times cheaper, I could use it one one hundredth of the time and still save money out of it. That math works out to just be like "Oh, maybe a pile of build machines just sometimes does make sense." I think that's fascinating.

**Autumn Nash:** Sometimes it does make sense, but sometimes you also have to remember that if you're using it and you're not just playing around with it, and you need it to be reliable, you have to replace it, you have to maintain it, and you have to have people that have the knowledge to do it.

**Justin Garrison:** I mean people build -- you know, I have Terraform code and all that other stuff in the cloud, too. All that stuff needs to be maintained and done. So it's not free either way.

**Autumn Nash:** \[01:06:03.01\] They're not free either way, but I think that we went so hard on the cloud, we went so all-in, and it was the answer for everything, but now our attitude is automatically that we don't need the cloud, and everything can be done on-prem... And neither of those are correct. There is a use case and there is a time for both, and you have to figure out what works best, and what is most cost efficient. And sometimes one works for a while, and then you grow too fast, and you need to do the other. But I do think that it's a disservice to pretend like one size fits all, and we can do everything on-prem. We can't.

**Justin Garrison:** No, yeah, absolutely.

**Autumn Nash:** If that was the case, we'd still be running servers in our grandma's basement. You know what I mean?

**Justin Garrison:** I mean, I still am.

**Autumn Nash:** It's your basement now. But -- you know what I mean? What you use for fun and what you use to maintain, I don't know, a huge enterprise are two completely different things. And it's funny, because there's so many companies talking about how they run on-prem right now, but they're essentially building their own cloud that someone else is maintaining. It's a little bit cheaper, but they're not really truly running on-prem. They're sending their hardware to someone else to run. So it's like another iteration of the cloud almost. You know what I mean?

**Justin Garrison:** It's not all AWS and all the computers in my garage. There's this mix of like "Oh, there's colos. I can rent some things temporarily. I can get bare metal places."

**Gerhard Lazu:** That's what I'm saying. So it's almost an iteration of like the cloud, and hardware, and on-prem. And we're in this weird place that I think because everybody is trying to save money and figure out how we do things differently, that like people are almost scrambling, and it's going to be interesting to see what actually saves people money and time and is good for their use case, or if they end up down a whole other rabbit hole... But I think it's a disservice to pretend like they are all the same thing, and that you are not essentially using a different type of a cloud. You're just using your private cloud.

**Justin Garrison:** If we can remove the word cloud, in Gerhard's words... Like, it's just VMs.

**Autumn Nash:** That's what I'm saying, they're all VMs.

**Justin Garrison:** And so my point was the fact that Dagger is a new tool... Because of the downside of having on-prem build machines, which I've had in plenty of jobs, is always the maintenance costs of "Oh, someone tweaked something and now I don't know what broke." But the Dagger encapsulation of these jobs, of saying "Hey, actually, this should run anywhere as long as this engine exists." And now we can encapsulate that holistically, and not rely on the base OS'es as much, or the version of it. And when we started the conversation you were saying how the kernel matters in a lot of these cases, too.... And so there is some things that aren't generically possible across the board. There is still some maintenance costs there. But for the most part, Dagger should run more portably than my make file that is doing Bash scripts, right? That side of it is like "Oh, now I have that flexibility to make the decision of where do I want to run this? How should I run this? Where is cheap compute available?" I could do spot instances to lower that price, or if I have some extra computers in the closet, I could just plug them in and do that, too. There are options there because of the portability that you're building into the tool. And I don't lose out on the benefits that I might get for something that's like "Hey, I'm doing a VM in AWS. I need logs from it. Oh, cool. Those are just in CloudWatch logs." In this case - no, we're all talking to an API. You get the tracing by default, by using this Dagger cloud, or by using -- you get the logs, you get the stuff out of it. That's why I think there's so much gravity around GitHub Actions, because GitHub Actions is just like "We give you a bunch of these defaults, but it's not portable." It's not something that is easy to move around and decide "I don't want to run this here anymore."

**Autumn Nash:** I think that's going to be the startups that really become the next big tech companies, that are going to really benefit from this weird, sunken place of tech that we're in, where everyone's trying to make as much money with the least amount of what they have... The startups that allow you to lift and shift, and to be portable, and to monitor all your different clouds, all your different instances, and all of what you're running... Whatever gives you that portability and that observability and monitoring into all the different things, because everybody wants to do hybrid cloud; all the different regulations coming. Or the fact that now one cloud or one way to do it or on premise cheaper, and they want to lift off of this thing and go to this thing. All the things that are going to make software more portable and easier to switch are going to be what really expands and like just hits right now.

**Justin Garrison:** \[01:10:25.22\] And that's where I think Dagger fits perfectly. We could say we could run this anywhere; the portability of -- I can't write code anywhere. I need a developer machine. I need something that has some tooling locally that. In all the web-based development tools, and whatnot - I've tried all of them. I've never stuck with any of them, because they always had some limitation for me, or they ended up being really expensive. And I'm like "Actually, I already paid for this computer. I could use the computer and pay myself the maintenance cost of making sure this thing runs." And on the other end it's like, well, we have these containers, we can package them, we have this Kubernetes thing which can run everywhere... We have all these things that like at the other end, we can have the portability. But in the middle there, between writing the code and deploying the code, somewhere in that build pipeline, the CI/CD stuff was always super-sticky, and it was super-hard to say like "I can shift this somewhere. I can't lift and shift Jenkins. I can, but it's a lot of work. It's not actually just an endpoint." And you have to just reproduce the same thing in different environments. And I think that's really cool about how -- like you mentioned at the beginning, this is what containers did for applications. Dagger could do for that CI/CD middle pipeline, of like "This is portable and we have some options here."

**Autumn Nash:** Also, when you're scaling release infrastructure, what used to work can definitely get to the point where you have too many pipelines, and you've grown too much. And then having to lift and shift that is the most painful thing in the whole world.

**Justin Garrison:** And that's a unique problem to a lot of -- not all companies have that problem. Amazon had that problem. That was definitely at Amazon. There's a lot of pipelines here, to make things safe, and roll out, and all that stuff... But not everyone requires that amount.

**Autumn Nash:** But also, when you're building stuff for different architectures too, being able to lift and shift them to different things, because what might work on Mac might not work on Windows... You know what I mean? So just being able to see if this really does work in that architecture natively is really important.

**Gerhard Lazu:** Yeah. One thing that we talked about previously, and I thought was a really important point, was around what makes a good developer. \[unintelligible 01:12:26.29\] go further, what makes a good engineer, a good software engineer. And it is not the documentation, even though that plays a very important role. It is not the code that they write, even though that has to be present. It is not how they present and how they talk. But again, that has to be present. How they share ideas, how they show into the world, and do whatever they have to do... Those are well-rounded individuals. And that well-roundedness, I can see how it translates to what is the cloud, what is the on-prem... Whatever the next thing is, you need to be well-rounded in all these things. And you should be using all of them. Because if you don't use it, you lose it, right? Very simple, very true. It will never change.

So you should be using the cloud, but you should be using the cloud the way the cloud was meant to be used. And Justin, you made a very good point, at Disney, how you were using the cloud; possibly the best example of using the cloud correctly, right? Span out, stand up all these instances, and then tear them down. That's how it's supposed to be used, right? It's capacity on demand, massive capacity. You would not want to buy that. But when you need it, it's there, and it's a great commodity. It is a hundred times more expensive, because that's what this commodity costs you. Where else can you turn up and say "Hey, spin up a hundred beef instances?" That wouldn't take months, it would take maybe years to source all of those things. And by the way - no, no, I don't want that AMD CPU. I want that Intel CPU. Oh, ARM? I think I'm going to have some ARM. And by the way, I'm going to have, I don't know, 10,000 ARM CPUs. Where can you get that? It's the convenience of that.

\[01:14:09.20\] Now, if you know what you need, as a business that is successful, as a startup that's successful - well, for the things that you know that you definitely need, and that's like your baseline operating budget in terms of infrastructure, have that in a place that makes sense. Have that cheap. Have that - cheap, I say cost-efficient. Do what makes sense. Hybrid cloud.

What about WASM? What about the WASI runtimes? How do they change how we see containers and how we work with containers? Is that coming? Well, I can tell you that React did not work for Dagger Cloud. React, the DOM, to generate all the things that we had to generate, was just breaking down. The tech was not up to scratch. So what did we do? We looked at WASM v3. That's the v3 cloud. We went through three rewrites to get it to a point where it's as performant as it should be.

And there's so many dragons there. Don't think that this is like the holy place where you pick it up and everything is awesome. Oh, no. The cycle starts again. But that's it. That's the beauty of it. Start those cycles, keep going through them, keep learning, keep iterating... Eventually, you will be able to consider yourself well-rounded. And others will look at you and will say "Wow, I wish he responded to my pull requests. I wish he left some comments, and did some reviews, because I like his reviews. I wish he blogged more. Or I wish she went and gave some talks, because she's an excellent presenter." So look for well-rounded, not for 10x.

**Justin Garrison:** I think that's a great place to end the episode. Gerhard, again, thank you so much for starting this podcast, for putting it out there as a place that people can learn, and just get access to someone that they may not be able to approach and have a conversation with, and then learn from their insights on all of the cycles and failures that they've had from the past, and the things they've learned, and then the things they want to share about that. That's what we are trying to continue. That's the things that -- we're not just having cool people on with exciting conversations, which we do like, but really just being able to help people be a little more well-rounded about "Actually, that database is important. And actually, that CI/CD is important." And all of the things that go around the code, and the business is responsible for, matters. And how do we help them be more responsible and help the people that run them understand them. So thank you so much.

**Autumn Nash:** And I truly think people don't talk about that part enough. That's the information that people need.

**Justin Garrison:** Because we don't reward it, right?

**Autumn Nash:** But it's so true, though. You can't have any of these cool things without the database or without the infrastructure, without all of these things. So it brings me nerdy joy to expose people to things that they may not have been exposed to, and to have people who do that every day tell them the caveats, or what they tried, and what they hated, and where they failed, and what they succeeded at, you know?

**Justin Garrison:** Where should people find you online if they want to reach out and continue the conversation?

**Gerhard Lazu:** Gerhard.io. That's a good place. There's this new space, which - now it has a domain. Makeitwork.fm, and makeitwork.tv. The way I think of it is movies for nerds.

**Autumn Nash:** Come to Blue Sky, so we can like bug you.

**Gerhard Lazu:** I am. I have to start using it. I am there, but I have to start using it, because there's too many social places, and there's so many things to do... That's I think the one area in which I'm not as well-rounded as I could be. Be more present on the social media.

**Autumn Nash:** I think Blue Sky is becoming where everybody seems to be going. I'm really hoping that it sticks, because I can't manage all these social media platforms.

**Justin Garrison:** \[01:17:50.05\] Yeah. I mean, there's a lot. I'm hoping Blue Sky succeeds only for the fact that it will encourage people to hopefully make their own websites. Like, I think that's the true mission and purpose of Blue Sky, is to make the internet be more democratized, and people just understand "I should be able to own and run this data wherever I want, and publish my own content, and own a domain." That stuff is super-important to me, and it's not just another centralization of "Hey, we're the new search engine. We're the new social media thing. Everyone come here." No. Actually, how everyone interacts together and builds on top of what other people are doing, in a democratized way, I think is very critical for the internet to succeed long-term.

**Autumn Nash:** I like that it has the ease of other social medias, but it does, like you said, force you to -- not just force you, but you get to keep what you're investing in. Your data, your content...

**Justin Garrison:** You can't see it. I'm running a PDS on my Raspberry Pi back here behind me, and so I have a user that's on Blue Sky, that's literally reporting back here. I already made a video about it. It'll be posted soon. I'm waiting for Blue Sky to cool down...

**Autumn Nash:** Come get your nephews and teach them how to run stuff on Raspberry Pi, because there's too many things to do, and I don't have time to figure this out, and they keep bugging me. Come get them.

**Justin Garrison:** We will have someone from Blue Sky Infrastructure on the podcast soon. They're dealing with all sorts of scaling million people every day for the past few days... So I'm waiting to post my video, because I was talking to them. I'm like "Hey, would this be a problem for you if everyone started doing this?" And they're like "Yeah. Actually, please wait. Just wait a week, and we'll be fine." But yeah, we're going to have them on the show soon, because I'm fascinated to learn about their scaling journey for the last couple of weeks and months.

**Autumn Nash:** They've done a great job, and also, they've done a great job on-prem.

**Gerhard Lazu:** Yeah. Question for you, Justin - would it work in Kubernetes PDS?

**Justin Garrison:** Yeah. I mean, it's just a web server with a SQLite database.

**Gerhard Lazu:** Amazing.

**Justin Garrison:** That's all it is. It's like a git tree in SQLite, and that's all it is. And if you can publish that somewhere... That's one of the things I think is really cool about Blue Sky's self-owned sort of federation versus Mastodon, where the Mastodon scale-up story was a lot more difficult... You need Postgres, you have a Ruby on Rails app, you need cache...

**Autumn Nash:** I just can't commit to that type of -- it's not that I hate Mastodon, I just can't commit to that type of overhead for social media. I have so many things to do...

**Justin Garrison:** And the PDS is just a -- they deploy it in a container. If you have a Debian thing, it's already packaged in a container. You just want some way to have some reliable storage underneath, so that your SQLite database is always available and backed up.

But otherwise - yeah, it's fascinating. I've already run a few of them. I did a live stream a little while ago, but yeah, I'm still toying with it and figuring out "How does this thing work? How would someone want to own this going forward?" Because more things are being built on this sort of protocol, and personal storage versus app tier scraper sort of thing, where it's like, the app tier is the search engine, and I have a website. And how does that interact?

**Autumn Nash:** Speaking of that, I need to go fix my website. Why can't you just fix my GitHub Pages? Because you obviously enjoy messing with DNS more than I do.

**Justin Garrison:** I love DNS.

**Autumn Nash:** I hate it so much.

**Justin Garrison:** It's fantastic and terrible.

**Autumn Nash:** I hate it so much.

**Justin Garrison:** Thank you everyone for listening. Please reach out online to us if you have suggestions for a show title that we can continue going forward, and we will hopefully have something for you in a couple of weeks on where you can find us going forward for next year, for 2025, and we will talk to you all again soon.

**Autumn Nash:** I feel like Gerhard has to come back for like our new podcast.

**Justin Garrison:** Oh yeah, absolutely.

**Gerhard Lazu:** I'd be happy to. Good luck.

**Autumn Nash:** It was so nice meeting you.

**Gerhard Lazu:** You too. I think you've done an excellent job with these episodes.

**Autumn Nash:** Thank you.

**Gerhard Lazu:** I think it was a very nice transition, and it's great that you were able to carry the torch, the spirit, continue the spirit of Ship It. I think people appreciated that. And I'm looking forward to what you'll do next.

**Autumn Nash:** I'm really excited. I feel like this can be the new iteration of Ship It. It's a little scary though...

**Justin Garrison:** Thank you.

**Gerhard Lazu:** See you next time.
