**Natalie Pistunovich:** It's a great evening here in Berlin, it's a finally nice, warm weather, and I'm very happy to welcome my co-host, Jon. Hi!

**Jon Calhoun:** Hi, Natalie. How are you?

**Natalie Pistunovich:** Good! I hope you're also doing well.

**Jon Calhoun:** A little tired, but I think that's to be expected with a newborn in the house.

**Natalie Pistunovich:** Yeah, congratulations for that. It's crazy.

**Jon Calhoun:** Oh, thanks.

**Natalie Pistunovich:** We are joined today by a crew of Caddy people, Matt and Mohammed. So Matt is the author of the Caddy web server, and you're working on it full-time, relying completely on sponsorships. And Mohammed is a product manager by day and a Gopher student by night, and also the creator of Caddy SSH. Hi! Where are you joining us from?

**Mohammed S. Al Sahaf:** I am joining from Saudi Arabia.

**Natalie Pistunovich:** It must be super-late for you.

**Mohammed S. Al Sahaf:** Yup!

**Matt Holt:** And I'm joining you from Utah.

**Natalie Pistunovich:** \[00:03:56.18\] So we're kind of like across so many different timezones... Always fun to have those shows. The benefit of the internet. So tell us a little bit about yourselves, and your intro question will be not an animal that starts with the first letter of your name, but WHEN did you start using Go?

**Matt Holt:** Mohammed, you go first.

**Mohammed S. Al Sahaf:** Okay. I started playing around with Go sometime in 2014. In 2013 I was doing a program of networks and system administration and I was chatting with a friend who's a software engineer, and he kept telling me there is a new language called Go by Google... And it returns the errors, so you're forced to deal with it, and you never forget it.

In 2014 I was doing a web dev job as my full-time. We were a Java shop, and I was so much annoyed by Java that I decided to look into this new language my friend has been bugging me about. I got hooked since then.

**Matt Holt:** Very cool. I started writing Go probably about ten years ago now. Ten or eleven years ago, right around Go 1. Because our company was a .NET shop, and we were looking at easier to deploy, faster alternatives, and just kind of a more fun language overall. So then I started using it, and we wrote a couple products in it, and then I started using it for personal projects, including a web server... So that's how that all started.

**Natalie Pistunovich:** What was the web server that you were using at work back at that time?

**Matt Holt:** It was a mix of NGINX or Apache, whichever had better copy-paste examples... I could never figure Apache out at least.

**Natalie Pistunovich:** Yeah. But also, NGINX was not very straightforward without those examples, I would say. At least for me.

**Jon Calhoun:** My experience with both of those has been you figure out enough to get whatever you need done done, and then you forget about it in six months, so then you have to figure it all out again. So nobody really understands it, they just learn enough to do what they need to do.

**Matt Holt:** Yeah. There's a lot of moving parts, too. I've found myself setting up four or five different components just to get a basic website up and running... So I wanted to kind of simplify things.

**Mohammed S. Al Sahaf:** So it's pretty much like the XKDC comic of Git, except it's now web servers.

**Matt Holt:** Yeah, I suppose so.

**Mohammed S. Al Sahaf:** You call up the friend who knows how to \[unintelligible 00:06:08.13\]

**Matt Holt:** Yeah.

**Jon Calhoun:** I wonder if these days, Matt, you're making it worse... Because more of the people I talk with are using Caddy. So finding people who know how to use NGINX and Apache is gonna become a rarity, and when you've got a company relying on it, that could be a problem.

**Matt Holt:** I don't see that as a problem.

**Jon Calhoun:** Well... It could be a problem for that company, for a short period at least.

**Matt Holt:** It could be. We are encouraging all companies to switch to Caddy.

**Jon Calhoun:** So I guess we can jump into the Caddy stuff then... Because I think - Natalie, correct me if I'm wrong; I think the goal is to talk a little bit about Caddy and then start talking about this project Mohammed is working on as well, and going in a little more depth there.

**Natalie Pistunovich:** Yeah, definitely. And for those who are less familiar with the -- for the two people who are listening that are slightly less familiar with Caddy... So far, those people figured out that we're talking about a web server. What is special about that web server? Unlike NGINX and friends...

**Matt Holt:** Well, you'll find that it comes with all the benefits of a Go program. So it's easy to deploy, and it has no external dependencies, and it has memory safety, which you don't get from C servers like Apache, NGINX and Envoy... And with Caddy 2 we have made it kind of a very powerful platform on which you can deploy your Go services, and you can extend it -- it's pretty much infinitely extensible. It's not like writing some Lua code, or some little scripting things that's interpreted. You're compiling your Go code natively, so you're getting native CPU instructions for your extensions. So there's a ton of benefits there.

And probably the thing that people mostly talk about when they think about what's special about Caddy is that it uses HTTPS by default. So it's the only server that does that automatically and by default, without needing any config; it will just try and make TLS work for your site, and manage that all automatically.

**Jon Calhoun:** \[00:08:06.14\] See, I can say for myself that was pretty much the original draw to Caddy, was - you wanna set up some sort of HTTPS, and setting it up in other places has always historically been a pain in the butt. I remember the first time I had to get a certificate, and I was probably a teenager at the time... And it was one of those things where trying to do that while not having the money to really wanna do it for a side project was a nightmare for the longest time. So seeing things like Letsencrypt, or - is it ZeroSSL, is that one of the other ones? There's a bunch of them out there.

**Matt Holt:** Yup. There's a few others.

**Jon Calhoun:** Seeing different companies like that that are offering much easier options out of the box has been pretty awesome. Alright, so Matt - Caddy is written in Go entirely; is that correct?

**Matt Holt:** Yup. Pure Go.

**Jon Calhoun:** Okay. And Mohammed... You, I believe, wrote an extension. So Matt was saying that it's extensible... Can you verify that that's easy to do? Can you talk a little bit about that process?

**Mohammed S. Al Sahaf:** Oh, it made my life a lot simpler. I only had to focus on the logic of the SSH server as in authentication, session management, and PTY, and all of that... And that was a breeze, because I didn't need to write any of the logic for the listeners, and the reload management and the config management loading and all of that stuff - it was all handled by Caddy. I only had to focus on my own project.

**Natalie Pistunovich:** You said that you're a Gopher in the evenings, and by day you are a project manager... So why going on a web server as a fun project? Was that a need, was that just something fun that you've found?

**Mohammed S. Al Sahaf:** Yeah... My day job is not into the software development side of things. It's still related to tech; I'm a product manager of the payment gateway at a local bank. So I don't get to practice programming day by day. And programming at night, in the evening is basically my stress relief.

**Natalie Pistunovich:** And from all the projects, a web server is the interesting one?

**Mohammed S. Al Sahaf:** Well, Caddy was fun enough, and interesting, and easy to contribute to. There are a lot of sides and angles that you can nibble at, and at the time - whenever I started getting involved, the Caddy versioning tool was still being written, it was still in the beta phases... So there were a lot of angles that I managed to look at and work on. So it was kind of, let's say, a ramp to get on.

**Natalie Pistunovich:** So it's interesting that you said that it was easy to get involved in and easy to contribute to. That sounds like a fun place for starters. Can you tell a little bit more about this for people who want to get involved and are not sure how to start, what to start, what makes starting easy...?

**Mohammed S. Al Sahaf:** Yeah, sure. So there are a lot of sides that can be looked at... And the architecture of Caddy is engineered well enough that if you're looking at a certain handler, for example, most likely you don't need to look anywhere else besides that particular package, or one or two files that you need to look at. And depending on what area you're trying to get at, you will find something to work on.

If you wanna work on the CLI, it's there. If you wanna work on the config loading and reloading, and the config structure itself, the configuration files - it's all there. If you wanna write a handler that simplifies the lives of a particular process on the web server, you can look at some of those. There's a ton of things that are in there. If you wanna look at PKI, it's in there.

And you'll always -- it's the nature of projects; there's a fractal nature. There's so many things that yo can work on, and you will always find something that's either a good first issue, or something that requires more depth and knowledge about the project itself, its architecture, or the Go runtime; if you wanna look at performance, you can go begin there. That will be perhaps a bit challenging. \[unintelligible 00:12:09.12\] it's all in there.

\[00:12:13.23\] For example, one of the first things I worked on was basically looking at the warnings or the messages golint was giving (golint CI). It was basically saying "Change the order of these fields and that struct to make it more compact", and stuff like that.

So it was easy to get into the project and learn more about it as I worked on it more and more, picking up stuff like that.

I think there's still some low-hanging fruit for other beginners or fresh contributors wanna look at. You can basically fire up the project on VS Code and run the linter, or any of the available linters, whether it's Golang CI Lint, or whatever, and find some areas to fix. And we have a few in the issue list that can be looked at.

**Matt Holt:** Yeah. I might also jump in and say you can learn a lot from hacking on Caddy, but it might not be the best project for absolute beginners, if you're absolutely new to Go, or absolutely new to open source... Just because its sheer size - there's a lot of packages and different pieces. So it might be a little overwhelming if you're brand new. But if you're experienced with Go and/or experienced with open source, it's a lot easier to work through the feedback cycle.

Mohammed from the beginning has been awesome about optimizations and little nuanced things that I had never thought to figure out. So that was really cool.

**Natalie Pistunovich:** Is it complicated to write such an extension? How much time would you say such a project will take? Or it depends if the extension would be complicated, or simple...

**Matt Holt:** I guess Mohammed can answer, too. He's probably written more third-party extensions than I have. But I think it depends. If it's a simple extension, some extensions are just a couple lines of code. Others are thousands of lines. It just depends on \[unintelligible 00:14:11.28\] I think it took two years to put that together. That's a huge app module.

**Mohammed S. Al Sahaf:** Well, the two years is because my time is divided between work, school and this side project, plus my personal life... And this is why it took such a stretch. It shouldn't have taken two years, honestly.

**Jon Calhoun:** So when you're talking about these extensions, I assume with Caddy - based on my knowledge of it - it's a server where you started out and you provided a config file, and it sets up a server in some way based on that... So whether it's grabbing a certificate for your domain and reverse-proxying it to something on a local host, or something like that. When you build an extension, what exactly is that doing? Is that giving it new config variables that it can then take and do stuff with, or is it something else aside from that?

**Matt Holt:** So at its core, all Caddy knows how to do is - there's like four keys in its config. There's admin, logs, storage, and apps. And all it knows how to do is set up admin and logs (logging) so you can see output, and then storage and apps are all modular; they're all extensible. So Caddy expects apps to fulfill an interface that have a start and stop method. That's it. So it calls starting all the apps when a config is loaded, and it calls stop when it's unloaded. Beyond that, it's up to the app module to do its job.

So the HTTP server has a start function and when it's called, that's when it starts its engine, so to speak, and starts serving your site. And then when it's stopped, it shuts down gracefully. So Caddy doesn't know anything about HTTP, really. So that's why I use C now... I don't know if this is clear to the listeners yet, but the implication with Mohammed's work with Caddy SSH is that you can now deploy a Caddy instance that does all that you need to do with one unified configuration. So you need to run an HTTPS server, you put that in your config; you need a memory-safe SSH server - you put that in your config. And you just deploy this one binary that's static and has no dependencies, and is memory-safe, and such, and it takes care of all the TLS for you. Obviously, SSH doesn't necessarily use TLS, but the idea is that it's kind of your one-stop-shop for memory-safe static deployments.

**Break:** \[00:16:39.09\]

**Jon Calhoun:** Mohammed, if I were to install your Caddy SSH extension and to run it, this would allow me to SSH into the server that's running Caddy, correct?

**Mohammed S. Al Sahaf:** Yeah, exactly.

**Jon Calhoun:** Okay. And the idea was to give it useful defaults and things like that, so that people setting this up are less likely to make mistakes that are, I assume, pretty common when setting things up like that?

**Mohammed S. Al Sahaf:** Yeah, especially with the SSH, because over the years - SSH has been around since the '90s, and the defaults have been changing and improving over time, but we have so many blogs and tutorials written that were probably \[unintelligible 00:19:45.05\] the early 2000's, while we are here in 2022 and SHA 1 isn't safe anymore, and RSA - you would need to have a minimum of 2048 bits, and so on.

\[00:20:01.05\] At the same time, you'll find those tutorials, those blog posts saying "Well, generate an RSA 1024-bit key and it should be alright to use with your SSH server." The goal is just like Caddy now is working with \[unintelligible 00:20:14.10\] defaults for the certificates will do the same for the SSH server. So one of the things that I made sure to implement is the keys that are generated automatically, they follow the modern recommendations. For example, if there is no RSA key available minimum, one will be generated automatically for you, and it will be 4096 bit by default.

The other key that's automatically generated is the ECDSA, but the regular DSA isn't generated, and so on. All of that is written in the comments, in the docs, in the code docs itself.

**Jon Calhoun:** So getting into this, I assume that this means you had to actually learn about all of the proper ways to do things now, versus the past... And you had mentioned that reading blogs - sometimes you find blogs that were written in 2000, when security practices might be a little bit different. Would you have any advice to people? How did you go about managing that process of trying to figure out if what you're reading is actually up to date and accurate, versus understanding what current practices are, versus like "Oh, this is an old practice. I shouldn't be doing that one."

**Mohammed S. Al Sahaf:** That's a tough one. One of the things that I had to look at, that's an easy one to look at, is look at when was it published. If it was published in the '90s, cross it out, look for something more recent. I'm not a cryptographer, I'm gonna admit this, but I know from a few readings that elliptic curves is a bit controversial, probably... And if you know that, then you might correct me. But at the same time, there is a strong recommendation for it. And this is why one of the defaults that I opted for is to have elliptic curve DSA.

The same thing for RSA. We know from recent findings that RSA 1024 bits isn't safe anymore... So higher bits, and so on. It's more following the recommendations of well-known cryptographers, for example.

I remember reading one of -- some of the stuff I came across, and I used a few blog posts by Matthew Green; I don't remember exactly the titles, but it was part of my research that I went through and I've found which algorithms should I use and which not.

**Jon Calhoun:** So when you're going through these algorithms, has Go been a language where you've found a lot of them were already implemented for you, or have you had to go and try to implement some of these on your own?

**Mohammed S. Al Sahaf:** No, I never needed to implement any of those on my own, which is delightful. Go had everything battery-included. Again, one of the things that's readily available is the \[unintelligible 00:23:00.26\] That was already in there, and it's part of the standard lib. I just had to only grab it from there and generate the keys with it. Same for all of them. The crypto package of the Go standard library is pretty comprehensive for my needs.

**Natalie Pistunovich:** One of the skills you picked up in this project is cryptography. Is there any other interesting skill that you picked up along the way?

**Mohammed S. Al Sahaf:** Oh, I had to learn a lot about pseudo-teletype. That has a ton of stuff that I had to go through, whether it was for Unix systems or for Windows. Especially on the Windows side, because it didn't have the PTY interface, and then they developed the \[unintelligible 00:23:45.04\] interface, but it had its complexity, so I had to wade through all the Windows-provided dll's, and so on... So definitely PTY was a good, interesting area to work on and learn about.

**Matt Holt:** I'm glad you did that, because I don't even really wanna go there... It sounds kind of gnarly.

**Mohammed S. Al Sahaf:** \[00:24:06.06\] Oh, it is. It's funny, because here we are, we have the basic kind of system we work on almost always virtual machines, yet we're still SSH-ing into a server. The other side - and the name still implies it; it says teletype, pseudo-teletype, and you will tell the server "Here are my screen dimensions. Give me the text or the output based on those screen dimensions." And when you change the window of your shell, your SSH client will tell the server "Okay, these are the new dimensions of width and height. Now resize everything and give me back the response." Which is strange, because the remote machine isn't really connected to a screen. It's emulated all the way down, and it all goes back to, I think, the '60s or the '50s, whenever they had actual teletypes connected to the actual hardware, and it actually had to tell it "Yes, I have a screen of this particular size, and you have to redraw everything to that size." But now, here we are in 2022 and we still have to do all of that, because hey, we are emulating everything down to the pixel, because we have legacy.

**Matt Holt:** I was just looking at the list of modules... If you go to the Caddy download page, or the modules page, and you look at the SSH app that you wrote - it registers a lot of plugins or modules. I see SSH actors, actor matchers, ask, lots of ask and authentication, different providers and flows, config loaders and matchers, session authorizers, signers... Even an SFTP subsystem, it looks like. This is pretty thorough. What can you do with this exactly?

**Mohammed S. Al Sahaf:** Okay, so the actors are equivalent or analogous to handlers in HTTP. And the actor matchers are analogous to the matchers in the HTTP app. So just like you can define multiple possible actions or handlers for a particular request based on certain criteria, now you can use the matchers to match - if it's user Jon, then run this actor. And if it's user Natalie, run this other actor. And if it's Matt, just - sorry. Shut it out.

**Matt Holt:** This is cool. So you can kind of compose your own SSH logic with JSON in a memory-safe SSH server... And it looks like you have two actors so far - a shell and a static response. So you can start a shell for the user who logged in, or just write a static - like a screen, basically, to the user... And it's cool - so you can match on various SSH connection properties, like user, their IP address, their group, their protocol extensions, the critical options in the certificate of the user... This is really neat.

**Mohammed S. Al Sahaf:** For the shell actor there are a few enhancements that I've been working on locally. I know there are certain areas or gaps in the implementation that I have picked up on -- that I've fixed locally, and I haven't pushed yet... Because C is in the way. So the shell needs a lot of enhancements. There are a lot of actors that could be implemented. Perhaps proxy... I don't know. It takes a bit of creativity. Shell and static response were the least creative things, and they were probably the mostly used actors or expected functionalities out there... And this is why I went with them.

**Matt Holt:** \[00:27:54.15\] I could see this being extended to implement custom SSH apps. I've seen kind of a resurgence lately in graphical, SSH-based applications, and I could see this maybe being a good platform to launch and deploy those. So you can deploy a website, but you can also deploy an SSH app. So if a user wants to SSH into it, you can have this nice tty. But that's really cool. It's retro and it's cool.

**Jon Calhoun:** I think one of the ones I saw recently was by Charm, I think was the company... They have like a self-hosted Git server that made it look all pretty and stuff when you SSH-ed in. But every time I see one of those, I just think that like that's its own style of programming, making something look good in the terminal, and doing all that stuff.

Mohammed, you had said you had to figure all that out, and I feel like that's a skill that if somebody asked your average developer to go build that right now, they would need some sort of reference material, because it's just not something people do as much anymore.

**Mohammed S. Al Sahaf:** Making anything look pretty is difficult, and it takes skill.

**Jon Calhoun:** That's true. So Mohammed, you've spend, it sounds like, two years - granted, it was a part-time project - working on this. And it's a massive extension. If somebody was gonna get started building an extension for Caddy, or getting involved in that sort of thing, do you have any recommendations for them that you've learned throughout the whole process, or have there been things that you wish were different?

**Mohammed S. Al Sahaf:** As Matt said, there are four basic concepts that you need to look at. If you're implementing a module for Caddy, you're 99% of the time - or probably 100% of the time - implementing an interface, and you're registering your module as part of a namespace where Caddy can find it and load it up.

So I would say find exactly where within Caddy do you want to add your module, which particular functionality or namespace you're looking at. Is it a \[unintelligible 00:29:49.18\] is it a handler, is it a connection policy? And then find the interface that you need to implement for that area and start from there. You can start small, and then add more features into it.

I admit this is pretty much a generic advice for all projects. But this is what it is like for Caddy. And you need to look at how you're config structure is gonna look like. So consider how you would like your JSON configuration to look like, and move from there. And this was the only complex part, or the difficult part for me to work on - which shape of JSON structure of the configuration is the nicest to work with, or the one that makes more sense? So once you figure your JSON out, everything is easy from there.

**Matt Holt:** Yeah, I wrestled with that, too. I think when I first started writing Caddy 2, the first 3-4 months was to me just going back and forth on what the JSON should look like... So Caddy's native config structure is JSON, but most people use the Caddy file for ease of use... But I've actually got quite a few users who do use JSON because you can program it, you can automate things a little easier. Everything compiles down to JSON, and you can always output JSON, you can ingest JSON everywhere... It's very ubiquitous.

We actually do have a lot of business users in JSON... So that might be helpful if you wanna contribute - knowing your native config, what that looks like, and kind of getting that right. Because that'll impact a lot of future capabilities as well.

**Jon Calhoun:** Matt, I think you had said that pretty much everything inside of Caddy is essentially a module that's running... Am I recalling that correctly?

**Matt Holt:** Yeah. Everything except for its core, like, module loading and logging; it's core API, and such. Yeah.

**Jon Calhoun:** So are any of those built-in extensions that would be worth checking out for somebody who's just getting started, versus the ones that are a lot more complex?

**Matt Holt:** \[00:31:58.26\] Yeah, I would check out extensions or modules that are like what you want to build. So if you want to build an HTTP handler that handles requests, then you should look at HTTP handlers. A simple one is the static response handler, where you just hardcode a response. That's a pretty good one. If you wanna write an app, the HTTP app is pretty complex. The TLS app might be a little better. There's also the PKI app, that's even simpler. So yeah, just look at the kind of module that you want to implement, and we have documentation pages explaining what the different kinds of modules are, and kind of how that works.

**Natalie Pistunovich:** \[unintelligible 00:32:32.06\] for people who want to start, and Mohammed, you gave a very good answer of "Start something small, and build on top of that. Don't make that too complex." Do you feel that your experience as a product manager helped you start in an organized way? And if yes, if you've found something that works well in your team at work and you took with you to building this, what are some tips that you can share?

**Mohammed S. Al Sahaf:** Yeah, it's been really a great feedback loop where at my job as a product manager I have to fix something or develop something in a certain manner for customers and I know the product is gonna be large, so I have to structure it in a way where it is extensible and easier to implement new functionalities, that will not make it a breaking change for the customers. At the same time, in my project I have something similar where I need to develop something, but the only difference is at my job the product I have is something I inherited. But here I have something that I have to develop from scratch...

**Natalie Pistunovich:** Which do you prefer? \[laughs\]

**Mohammed S. Al Sahaf:** Develop from scratch. It's a hundred times easier than inheriting something and I have to fix it. \[unintelligible 00:33:52.04\] You have a legacy and you have thousands of customers already using it, and there's this edge case that's not an edge case anymore, and it's really a painful corner that you need to fix, and it cannot be fixed in a way that's backwards-compatible... And now either I have to live with it and add bandaids on top of bandaids as we go on, or I have to do the breaking change and go through the pain of migrating or teaching thousands of customers how to follow the new, correct way.

And you know, if it's a breaking change, you're gonna have all of those customers yelling at you over \[unintelligible 00:34:37.03\] And with that, I find developing something from scratch is way better. The way it feeds back is - for me as a product manager, one of the things I took upon myself, because I was frontline support at one point in time, and then I shifted to product management... And what I do all the time is I take an hour or two every day and I sit with the frontline support team and I ask them for feedback - what do the customers complain about? And when I started working on the project, the SSH app, I had to take a similar perspective to that, like "I'm gonna structure this app in a way that will be used in a critical function, in a critical area. Now, I need it to be done in a way where support is gonna be easy, the customer onboarding is gonna be nice and simple and straightforward, and it should be intuitive." And this is where I had to take on the frontline support hat, like "What is gonna be a stress point for them, and how do I work around that?" I don't know if that makes sense or not...

**Natalie Pistunovich:** \[00:35:57.11\] This is an interesting answer. It makes a lot of sense, and it also makes me think about people who take the path from project or product management into developer... Because you hear a lot about people going from software into product management, but I have to say, I personally know less people who took this path. But it sounds like this gives you such a toolbox that you wouldn't have otherwise. So that's an interesting to think about.

**Matt Holt:** I think more software should be written like that, with that approach.

**Jon Calhoun:** I think in general there's a lot of people who get into software development and -- I don't know how to describe this... It's almost like they view things like this is the way it should be for good software, and they ignore the fact that there are real business needs that need to be achieved, and things that need to be maintained. And I think it takes - especially newgrads who are going into software, it takes them a little bit to realize that there is a business, and business actually matters more than the actual software being the prettiest thing in the world... So being a product manager probably makes that very clear, like "The only thing that matters is my project moving forward." Whereas a software developer -- I know some software developers that could probably sit there, rewriting the same application for like six years, trying to make it perfect.

**Break:** \[00:37:07.17\]

**Jingle:** \[00:39:24.01\]

**Natalie Pistunovich:** So, gentlemen... What is the unpopular opinion that you brought onboard?

**Matt Holt:** Mine is that vanilla JS is enough for anyone.

**Natalie Pistunovich:** Okay...

**Jon Calhoun:** Do you mean like modern vanilla JS?

**Matt Holt:** Yeah, of course. I'm writing kind of a frontend app in my spare time right now, and there definitely are a few little pain points, but it's kind of like those pain points in Go, where you just write a less function, or something like that. So you do that in vanilla JavaScript, it's such a -- like, the traditional way of building web applications, it just runs so fast, compared to... And it's way less clunky than a lot of modern ones, with just kind of a plain stack, nothing fancy.

**Jon Calhoun:** \[00:40:24.13\] I kind of wonder if half that issue stems from the fact that for the longest time vanilla JS was very hard to use, by itself at least... And I agree with you that it's gotten way, way better, to the point that if somebody started over, I'd be like "You can start with vanilla JS." But I don't know if I'd use it to build an entire frontend or not... I haven't tried recently, so I can't really speak to what that feels like... But I can definitely say that I understand why people are in the mindset of "That's the way we do it."

**Matt Holt:** Yeah. I mean, maybe there's a place for frameworks, but I'm not even using jQuery at this time, and it's really been a breeze putting this together. I understand what's going on -- the DOM is a weird place, and there are definitely quirks, JavaScriptisms that are just a little strange; you've gotta read some documentation carefully or you get bit pretty hard... But it's just -- I have full control over things that are going on. I know exactly the performance of something... I have a very good grasp of it, just because it's bare-browser, so to speak.

**Natalie Pistunovich:** I'll just say that already one disagreement showed up on Slack, so... Kudos. There will be a survey afterwards on Twitter... We'll see how that predicts the outcome.

**Matt Holt:** Yeah.

**Natalie Pistunovich:** Mohammed, how about you?

**Mohammed S. Al Sahaf:** Alright... Mine is Microsoft Excel is a net negative in this world.

**Jon Calhoun:** No caveats at all.

**Natalie Pistunovich:** \[laughs\]

**Jon Calhoun:** Can you elaborate?

**Mohammed S. Al Sahaf:** I've seen coworkers spending countless hours trying to figure out some weird issue Excel is doing, and it's just a waste of time. When I come around to help them, what I do is I take their Excel file, convert it to CSV somehow, run it through SQLite and do whatever they need to do, generate whatever information or value they need to generate, and then take that output, put it back into Excel. And most of the time, whatever you're doing in Excel, it would be a lot easier if you just learned some SQL; and it's easy to learn. I can teach some businesspeople how to use SQL. Learn that, use SQLite... There are some tools, there's DB Browser, there's tons of other stuff out there. Just ditch Excel, throw it in the bin, have no regrets.

**Matt Holt:** So you're talking about spreadsheets in general?

**Mohammed S. Al Sahaf:** Yeah. Spreadsheets in general.

**Matt Holt:** So like Google Sheets, yeah?

**Mohammed S. Al Sahaf:** \[unintelligible 00:42:55.03\] please, reach out for SharePoint, use whatever. There are tons of alternatives.

**Matt Holt:** I mostly agree, I think, so...

**Jon Calhoun:** I mostly agree, but then... I guess the hard part there - and like Mohammed is saying, we need to educate people on using SQL, which I think would be great if people understood basic ways to do queries, or just simple ways to automate things... It'd be great to see a generation of kids growing up knowing how to at least write a little script...

I've definitely seen people sit on a spreadsheet, doing things that -- manually typing in, that you should not be manually typing in that stuff, or trying to do what you're doing. But on the other side, I think there's just a whole generation of people working that are just not gonna learn something new. And that puts us in a weird spot of like "How do you keep that still going, while the others need something better?"

**Natalie Pistunovich:** It feels like Copilot just writes SQL for you.

**Jon Calhoun:** I don't know if I'd trust -- you're talking about the AI code stuff?

**Natalie Pistunovich:** The GitHub autocomplete thing, yeah.

**Jon Calhoun:** \[00:44:00.17\] I don't know if I'd trust that fully to write all my queries, but... That'd be interesting to try though. It's hard for me too, because I use spreadsheets for simple stuff all the time, where I just don't wanna code, and it's just real quick to throw something -- now, granted, most of my spreadsheets are throw-away spreadsheets of like throwing a couple things in here real quickly, doing some calculations, and... It's like a calculator almost.

**Matt Holt:** I'm kind of the same way. I use it like a disposable calculator, simple stuff... If I have to start looking up formulas, I'm switching to SQLite.

**Natalie Pistunovich:** Well, we also have a rank of the top three unpopular opinions, and top three unpopular unpopular opinions, which is kind of popular opinions... So it looks like we have a candidate for each from this episode.

**Matt Holt:** It's fun.

**Jon Calhoun:** So Matt, I have another question for you...

**Matt Holt:** Oh, no...

**Jon Calhoun:** How often do you get grief over using the init function for your modules, or for your extensions?

**Matt Holt:** More than once...

**Jon Calhoun:** More than once? \[laughs\]

**Matt Holt:** The counter-argument from those people is that the importing package, so the Caddy main should be calling not only importing, but also calling the register module function. I don't really see the point in that though. I feel like if you're importing it, you want to plug it in.

**Jon Calhoun:** I'm not saying one thing one way or the other, I just -- I laugh that you go to the documentation and the third line in \[unintelligible 00:45:15.24\] and I'm like "I feel like this right here has gotta lead to a lot of hatemail of some sort..." Although -- I mean, given your use case, I personally don't know a much better option for what you're doing, where you need a bunch of things imported and built with it.

**Matt Holt:** I mean, it's either the two lines of code that you add to - well, more than that; you'd have to import the package and then you'd have to know all the module types in that package and call register module yourself. I don't think that's necessary. I think if you're using a package that has n number of modules, just plug them in. They're already there.

I think Caddy has some other unpopular design decisions, but I still stand by for the most part, some of them especially. Some people still don't love the JSON thing, but the JSON thing is wonderful, and you don't have to use it.

**Jon Calhoun:** So we can just make a list of unpopular Caddy opinions...?

**Natalie Pistunovich:** \[laughs\]

**Matt Holt:** Yeah - to be fair, the number of unpopular Caddy opinions has come down recently. Since Caddy 2, I think Caddy has been a little more on the popular side overall. There's definitely still some debates... And some things I don't think there are good answers to, but come at me. We'll see. We can talk about things.

**Jon Calhoun:** I think what you're saying is -- to me at least, I view what you're doing as you're trying to choose the lesser of two evils... Essentially, of ways to approach a problem, and it is a tough one, with the extension. Because making an application -- I don't think many people have written software that needs to be extensible, especially built with other code... And that's a very unique problem to solve, I think.

**Matt Holt:** Yeah.

**Jon Calhoun:** I think Mark Bates has done it with Buffalo stuff before, but that's one of the few people I know that's even gone into that realm at all. Most projects I just don't think support it. They'd just be like "These are the modules we have. If you want others, good luck."

**Matt Holt:** \[00:47:07.03\] Yeah. I mean, sometimes there is still some debate over Caddy's module design in terms of the fact that they have to be compiled in... Some people kind of hate that. But a lot of people love it, and it has a lot of advantages.

**Jon Calhoun:** What would the alternative be? Having like a second server running that it communicates with?

**Matt Holt:** Yeah, so there's a couple options... You could do some sort of RPC thing, or interprocess communication, so IPC... But that has performance penalties, because you're going through the kernel. You can embed a scripting language, and have some sort of interpreter. There's a few Go interpreters out there, or interpreters written in Go for various languages, like Lua or Go actually, and probably some other languages as well, like Starlark and such... But then you don't know your code is broken until it comes to your runtime. And so it's like -- I don't know, it just made more sense; just compile the code, get native performance, ship a static binary... Don't worry about it. You don't wanna be messing with things in production anyway, so...

**Jon Calhoun:** Yeah, I don't think that's an easy one to come up with a perfect solution for, I guess.

**Matt Holt:** There isn't one, but it's a pretty good one.

**Jon Calhoun:** Because I'm thinking of like VS Code, where every extension is JavaScript, but then there's the fact that -- it's not the JavaScript that's terribly inefficient or anything, but it's definitely not going to be as performant as other languages, in most cases. So you have that limitation when you're setting up things.

VS Code doesn't seem to have it quite as bad, but I know with Atom that was one of the issues, with that editor - because it was JavaScript, there were definitely times where coming from like Sublime Text it felt slower...

**Matt Holt:** Yeah.

**Jon Calhoun:** And I think part of that was because they wanted something extensible, and Sublime Text - it was extensible, but it was Python, and it was a little bit harder to do, if I recall correctly.

**Matt Holt:** There is one more really maybe unpopular decision that I'm lukewarm about, and that is that you can't set a global config in the Caddy file. You can't get one line of configuration there and have it apply to the whole config, to all your sites automatically. We have snippets, so you can put it in a snippet and then import it into each of your sites, but you still have to put that import line. Some people want the Caddy file to work like cascading stylesheets, but if you've ever written CSS, you'll know why I don't love that idea. Anyway, that's all I can think of...

**Natalie Pistunovich:** Cool. To finish, I'll say that the show notes have the links to extending Caddy, and also to the Caddy SSH extension by Mohammed... And we will also include the XKCD that you mentioned in the very beginning.

Thanks everyone who joined, and listened, and responded in the chat, and thank you, Mohammed and Matt for joining. We wish everyone a good rest of your day, whatever time it is.
