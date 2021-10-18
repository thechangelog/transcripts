**Jon Calhoun:** Hello everybody, and welcome to Go Time. Today I'm joined by Matt Holt to talk about Caddy v2. Matt, how are you doing?

**Matt Holt:** Hey, Jon. Doing good, thanks for having me today.

**Jon Calhoun:** Thanks for joining us. Alright, Matt, we're gonna be talking about mostly Caddy v2, and the sort of transition, and things that led us to that... But can we start with a little bit of background information? Basically, what is Caddy, and where did it originate, what caused you to build the first version?

**Matt Holt:** \[03:54\] Yeah, so I was in undergrad at NYU and I was taking a network programming class... And I think at that point I was just fed up with the options that were -- I was making a lot of little sites for work, and for school, and just personal projects... And I was kind of fed up with the options that were out there. There were basically two, Apache and NGINX. I mean, there were a few others, \[unintelligible 00:04:17.02\] did some of those... And they're fine, but I wanted something different... And I just started working on it. I was getting into Go -- I'd been into Go for a few years at that point already, so I figured "You know, Go has all the right stuff for a web server, so I'm gonna write one." So I just kind of did it on nights and weekends as an undergraduate student, and just put it out there for people to check out... And I guess they liked it, for the most part. But as we'll maybe talk about later, some people didn't.

**Jon Calhoun:** I think that's kind of true of anything with success... if you make something that nobody hates, that usually means that there's nobody who's gonna like it a lot.

**Matt Holt:** Caddy scratched a few itches that I had, and I think it turned out to be well-rounded...

**Jon Calhoun:** Alright. So when you were setting this up, I know one of the big things that anybody who's seen Caddy in the early stages would have noticed is that it used secure HTTPS pretty much from the get-go. Maybe not the initial version, but pretty early on.

**Matt Holt:** Yeah, the initial version actually did, you're right. They started working on it in 2014, it was released in early 2015, and Letsencrypt went into public beta at the end of 2015, like December(ish). And I remember the Letsencrypt team reached out to me and asked about some integration... I think I had heard about Letsencrypt and I was like "Oh, that'd be cool. I wanna do that", and then they reached out when they saw me put that on the website about adding that in. So that came out six months later, but Caddy had it on day one of the public beta. So that was definitely one of its earliest features. But that wasn't something I had in mind going into this, but it's definitely its flagship feature now.

**Jon Calhoun:** Looking back on it, does it feel like that timing was part of the reason that Caddy took off and did so well?

**Matt Holt:** Yeah, I think timing was a huge part of it... Just the whole push to HTTPS and the all the hype around Letsencrypt, and the ACME protocol, and also the Go language... Go started having its first conferences, GopherCon in 2014(ish), 2015... So everything was just very -- kind of enjoying the hype train, at the right time. I don't think Caddy would catch on right now, these days.

**Jon Calhoun:** Why don't you think that's the case?

**Matt Holt:** It got a lot more saturated, there's a lot more web servers now, a lot more specialized web server tooling... And a lot fewer people are using web servers because of serverless, which actually use servers, you just don't have control over them. So there's that, and there's a lot of the specialized toolings for service meshes, and microservices and things, and data planes... So you've got all this variety of tooling, and you've got a lot of integrated systems that were old legacy applications that use older web servers... And people that are motivated to change their web server, they would only use a new server for a new project usually. There are also a lot of language runtimes - or standard libraries, I should say - that come with web servers these days too, like Node, and Rust, and other trending, new languages... So if you're writing the applications in those, you don't need a web server, typically; a separate one. They're still handy; I think a lot of people will still use them, but I don't think Caddy would catch on these days as much.

**Jon Calhoun:** That makes sense. You say that it would have been hard to take off, and the timing and stuff all worked out pretty well... Letsencrypt, like you said, did have a lot of hype, which was probably a huge contributor to helping out... Is Letsencrypt -- are you still kind of locked into that as the one HTTPS option, or do you offer other options?

**Matt Holt:** \[08:05\] No, so that's the really cool thing... Letsencrypt is just the implementation of the ACME protocol. They're kind of the initial pioneer implementation. The ACME protocol is actually RFC 8555, which implemented properly allows you to automate your TLS certificates. So anyone can do this. You can do this at home in your garage, or whatever... But Letsencrypt is a fully, publicly-trusted certificate authority, and that's why that's a big deal. There are other publicly-trusted CAs that also implement the ACME protocol now, and Caddy is compatible with any of the ACME's certificate authorities.

**Jon Calhoun:** Nice.

**Matt Holt:** So ZeroSSL for example is Caddy's executive sponsor, and they're an ACME certificate authority. So Caddy actually defaults now to Letsencrypt and ZeroSSL. So if Letsencrypt is down, you can get ZeroSSL, and vice versa. So that's pretty cool.

**Jon Calhoun:** The RFC 8555 you mentioned - that wasn't what Caddy was using initially, was it?

**Matt Holt:** No, that RFC didn't technically exist. There was Letsencrypt's kind of experimental implementation, kind of dubbed ACME v1, which is no longer active... But it was kind of similar to ACME v2. It was definitely recognizable.

**Jon Calhoun:** I only was fairly confident of that one, only because I recently had a server that basically had lost its cert, and I couldn't figure out why it wasn't renewing, and then I bothered to go -- it's something I haven't looked at in a long time... And I looked and I had a really old version of Caddy running, and I'm like "Oh, I should probably upgrade this at this point."

**Matt Holt:** Yeah, Letsencrypt is in beta for a long time, so...

**Jon Calhoun:** Yeah, I was gonna say - I found out the hard way that sometimes running a really old version of something isn't the best choice, in that case. I don't even think it was the v1 of Caddy; I think it might have been like a v0 version...

Alright, so you're currently on v2. What motivated you to -- because going from a v1 to a v2 was a big step for pretty much any project, especially one with as many users as Caddy has... What motivated you to make these presumably breaking changes and make that step to a v2?

**Matt Holt:** Yeah, good question. So these major version bumps, especially for server-side software, are kind of scary... So I don't know if you remember or recall about five years or so ago I was also on this show, after the release of Caddy v -- not v1, but some pre-v1 version, whatever the first major releases were... So it's been six years or so since then, and a lot has changed on the internet, and in the Go language, and in the tooling... And we've got a lot of feedback, too. I was looking today, we've closed over 2,300 issues in the Caddy repository. We have a really good cycling rate of going through issues. And pull requests, we have less than 100 open at any given time, typically... And most of them are feature requests.

So I think just a lot of community feedback and seeing how people are using it and seeing the needs of people... With Caddy, the v1 design was very much kind of a toy, honestly. I set it up for my personal projects, and it was fun to experiment with it, but it definitely struggled to be useful to a broad audience, and had a lot of limitations, especially in like enterprise or the really big services scene.

So there were a whole lot of factors, and I think 3-4 years ago I was like "Yeah, I wanna make a Caddy v2 and we'll solve all these open issues and problems", but it took until 2019 to actually get around to doing it.

**Jon Calhoun:** So could you ever imagine yourself foreseeing what Caddy v2 is now without having built the v1?

**Matt Holt:** No, probably not. Caddy 2 is a really cool design, definitely inspired by a lot of the struggles and limitations of v1. Some of the major changes or features there that came out of the first version were things like the config API - that was actually one of the earliest feature requests. I think Kelsey Hightower opened that way back in the day.

\[12:15\] And I was like "Yeah, Caddy v1 was designed to do dynamic config loading, no problem." It turns out it's not... So that was one of those things that got pushed back to v2. That's a huge thing - so you have like these online and dynamic config updates with an HTTP endpoint, a REST API...

The module system was a huge improvement over previous plugins, because modules can extend Caddy to do basically anything, literally anything in v2, whereas before it was kind of hacked together, honestly; plugins came later, they were an afterthought... So a lot of first-class design decisions went into v2 that were inspired by the needs that I knew of from v1.

**Jon Calhoun:** And just to clarify, for anybody listening - when you say modules, you mean like plugins, essentially?

**Matt Holt:** Yeah, good point. Yes, plugins. Plugins that extend Caddy's config structure. That was a whole other thing, too - we had this Caddy file that was an easy way to configure a web server, and a lot of people liked it, but it was also very limiting and very confusing and quirky... So Caddy v2's native config format is JSON, which is a little trickier to use when you're writing it by hand, but it's also highly programmable and automatable... And we have this concept now of config adapters so that you can actually write a config in whatever language or format you want; all it has to do is convert that to JSON, and those config adapters are themselves plugins. But that JSON config structure can be extended to add functionality to your server, and I consider those to be the Caddy modules. Not to be confused with Go modules...

**Jon Calhoun:** It's one of those naming things where if two teams had talked ahead of time, somebody might have changed it, but because you don't know it's coming...

**Matt Holt:** I think we just ran out of words...

**Jon Calhoun:** That works, too. It is kind of hard to name things. So if somebody's writing software and they're looking at lots of feature requests like you were, and they're trying to decide whether it makes more sense to just try to implement those features in what they have, versus doing a v2 rewrite -- because the v2 was a complete rewrite, wasn't it?

**Matt Holt:** Yeah.

**Jon Calhoun:** So if somebody's trying to decide between that, do you have any advice for them trying to weigh the pros and cons of whether rewriting from scratch or trying to force the features into what's there?

**Matt Holt:** Yeah, I mean if you want really good software, don't try and force it into something that isn't designed for it, that's what I would say. It's worth it to do the rewrite.

**Jon Calhoun:** Do you think because Caddy is open source and it's not -- I could be wrong, but I'm assuming paying customers wasn't a huge part of that decision... Maybe it was, I don't know. But is it different for an open source project versus a business, where usually stopping to rewrite something in a business means no new features come out for a while, and there are business impacts there...

**Matt Holt:** Yeah, so we had a few businesses using v1. The upgrade path to v2 wasn't too bad. I did a little bit of guiding along the way there for some, and that's fine. Did that answer your question?

**Jon Calhoun:** I guess, sort of... I guess what I'm trying to figure out is it seems like in your case during a complete rewrite was the right choice, and it worked really well for you. But I've also seen several cases where companies, especially startups, will have a pretty rough version, and they'll be like "We're gonna rewrite this." And in some ways, it kind of ends up being the death of them, because getting that v2 out and getting through that phase where they're not releasing as much can be really detrimental... And I think as developers we tend to underestimate how much work it is to rewrite something... So trying to figure out whether it's worth it or not I guess is the type of advice I'm looking for.

**Matt Holt:** \[16:02\] Yeah, I mean - I think if you can ship it, it's good. It doesn't have to be perfect; just get something out the door. v2 was in beta for almost a year, or like pre-beta must have been for about a year. We had like a month or two of release candidates, and then version 2.1, 2.2 came pretty quickly after that. We're on 2.4 now, and it's very close to feature complete, as far as I can tell... But yeah, just ship what you can when you get it done, as you get it done; let people be involved and give you feedback, and form it into a really good product.

There were a lot of decisions in v2 where I was like "Well, this could kind of go either way. I don't know what's best. I'm just gonna choose one, put it out there, and see what people say." It's in beta, you can do what you want, you can change it... So that was really helpful in shipping a new major version.

**Jon Calhoun:** No, that makes sense. I assume that means you had a v1 that was like the stable release, and then you had the v2 beta at the same time.

**Matt Holt:** And actually, tagging v1 was a formality. I was like "I wanted to throw this away, because I already had decided we're gonna write v2. I guess we should tag it v1." So I tagged it v1 just to get it out of the way, and then literally started working on v2 after that.

**Jon Calhoun:** Well, I was gonna ask, how was supporting customers during that transition? Anything that you wish you'd done better, or what would you suggest?

**Matt Holt:** So I had to kind of drop out of like the public issue tracker for a while, because basically everything just got chalked up to "We'll fix it in v2. We'll fix it in v2." But we did. We actually did. And so I told a lot of customers that, too. I was like "Critical things, security vulnerabilities or whatever we'll fix in v1." That's why there's like 1.0.5 I think was the last release; just five patches after that 1.0 release... But for the most part - yeah, we just told our customers "Yeah, it's just going into v2. You can try the beta..."

**Break**: \[17:56\]

**Jon Calhoun:** So what were some of the major changes from a customer endpoint, from their perspective when they were changing? Because you mentioned the Caddy file was the core of Caddy v1, and then it went to JSON. So from their perspective, did things get simpler? Did they get more verbose, but more customizable? What changed there?

**Matt Holt:** Yeah, good question. So in my opinion Caddy is just about as easy to use, but it's a definitely more complex tool now. So you can still write a five-line Caddy file and do things it would take dozens of lines in another web server of config... So Caddy 2 really is, I think, just as easy to use as Caddy 1 once you know how to use it, once you know what you're doing... The configs are very simple and readable. But it is a more complicated tool, because you can do more with it; it's more flexible, it's more advanced... It's definitely a tool for professionals, or enthusiasts, I think, at least... I mean, you can just set up a Caddy website just in a couple of minutes and not care, but you still have to know how networks work, and how your computer works, and all this stuff. And you have to know the basics about how Caddy works.

\[20:02\] So I wouldn't say that Caddy 2 is simple. It's definitely a complex tool. And I think that was a big problem or mistake in Caddy 1, was kind of advertising it as like "It's so easy, it's so simple. Everything just works." I stopped doing that, because in Caddy 2 - yes, that is still mostly the case, but a lot of that complexity is hidden from you, when you use the Caddy file especially, and it's just converted to JSON behind the scenes... Which you can look at; you can adapt the JSON and see what it's really doing. You don't have to write that JSON by hand though. So it's still easy to use in that sense, but it's also very powerful and flexible when you need it.

**Jon Calhoun:** That makes sense. You gave a talk at one point where you actually had a slide where I think it said "Simpler is not equal to better." And in that, you were talking about the fact that -- like you said, you sort of pitched Caddy v1 as "This is simple to use." And I think a lot of people resonated with that strictly because the first time you used something like NGINX, especially in the past, it was not exactly an easy tool to get up and running with, and having an option where, like you said, you can use a simple Caddy file or something to get it going is nice... But a lot of things you said kind of reminded me of big web frameworks. If you look at Rails or any of those ones out there, where early on people loved the simplicity of it, but then when you need to do something more specific and more complex, all of a sudden those tools can almost be a barrier.

**Matt Holt:** Yeah. I think in a way we saw that problem, for web servers anyway, with config adaptors... So you can bypass the syntactic sugar and go straight down to the native config. The JSON structure mirrors the struct types in memory, so you have a lot of control... But you still get the magic. You could still run Caddy reverse proxy and get this reverse proxy if it runs over HTTPS, fully-managed certificate. It's just a command; you don't even need a config file. If you do have a config file, you \[unintelligible 00:22:01.29\] and you're done. It's still magic. Auto HTTPS, production-ready... You can do that. But if you need more control, you can dive down into the JSON or in caddy adapt and see what you can fiddle with there. There's a lot of knobs and levers.

**Jon Calhoun:** I've seen a couple of Go tools... There's one that had a more specific name that I'm forgetting. But I've seen a couple that instead of going the framework route -- or I guess you can even see this with ORMs. Instead of going the ORM route of like "We've built this magical ORM that's "simple" (I'm gonna put that in air quotes)", instead of doing that, they'll basically generate stuff for you. And it seems like Caddy took a similar route, where you can still use the Caddy file, but it essentially generates the JSON, which then can be very complex if needed. The user might not be able to edit the directly-generated JSON. I'm not actually sure on that front.

**Matt Holt:** Yeah.

**Jon Calhoun:** But the customization is still there, but there's also the simpler option; it's easier to enter and get a feel for how it works.

**Matt Holt:** Yeah, exactly. You can even actually give it a Caddy or NGINX config, with the NGINX config adapter, and it will spin up JSON. You can run Caddy from your NGINX config.

**Jon Calhoun:** Is that pretty feature complete, or have you found some weird edge cases?

**Matt Holt:** I don't know if many people use it. I haven't used it myself \[unintelligible 00:23:15.05\] work on it. I kind of initially started with just the basic stuff, and then you flesh it out a lot more. I think it works well enough, it sounds like, for most common NGINX configs. I mean, there's some crazy NGINX configs out there, but -- I think it'll get you there for 90% of the people who need it.

**Jon Calhoun:** That probably makes sense too, because realistically, if you're in that last 10%, you're probably not looking to change at that point... At least not without some serious work.

**Matt Holt:** Yeah. It's just kind of a "Hey, look at this. You can do this. This works" kind of thing.

**Jon Calhoun:** \[23:48\] That makes sense. Okay, so another thing I wanted to ask you about was whether or not there were any challenges writing software that is sort of expected to run continuously, without many updates or anything like that. A lot of us will build web servers that get restarted fairly often, and like if a user is connected to a web server - you know, like if we're building a backend or something - we can sort of force updates, because if we update the backend, they're stuck using it... Whereas you're dealing with a binary that people install. And like I mentioned earlier, you might have somebody who's still running a really old version, and it's expected to sort of keep working... So has that presented challenges, to write software like that?

**Matt Holt:** Yeah, I have feelings about this... They're very unpopular. I think ultimately it's your responsibility to keep your software updated. We rely on web browsers every day, all day, to do our work, our livelihood, everything that we do, basically, on our computers. They auto-update and no one complains... I mean, no one really complains... So I think web servers should be able to do that; it's complicated... I can throw a lot of blame around various parts of systems and mindsets and policies and all these philosophies...

I've personally been pushing for Caddy to kind of auto-update. I think that's a really cool idea, this idea of a web server that updates itself when there are security patches and whatnot. I mean, imagine how different Heartbleed would have been if Apache just kind of auto-updated, or OpenSSL shared libraries, or whatever component needed to be updated there. That would have been cool.

We've come closer with Caddy. We have a caddy upgrade command, so you can manually do an update. You can (I guess) put that in a cron and auto-update... But a lot of people use their package managers, and they don't...

It's tricky, because a lot of people will report bugs or issues that are fixed already. Thankfully, it's pretty simple; just use the last version of Caddy. We actually fixed relevant bugs... We usually fix them pretty quick. And in fact, whenever there's a bug report or a help request, one of the first things we'll do is just ask people to upgrade first; then we know that we're working on the same codebase, or looking at the same code.

But yeah, it's definitely a challenge, and I wish people would update their web servers more often.

**Jon Calhoun:** I can say from my experience, most of my stuff when it falls out of date, it's usually like some small -- the server I mentioned earlier, that basically didn't get updated until it stopped working with the SSL certs, all it was was a URL shortener; so it was a short path that would expand into something else... And it was just something I threw together really quick; it was maybe 200 lines of code. And it had just been up and running because I didn't do much with it, and I occasionally would throw some different URLs in there, but I didn't do much.

So I do agree with you that auto-updating is -- in an ideal world, auto-updating that worked would be amazing. I can imagine that that's a very complicated task, especially -- like, you have enterprise customers, and I can imagine that's terrifying for them to think something is changing from out under their feet and they don't have control over it.

**Matt Holt:** Yeah, I mean -- but their web browsers do.

**Jon Calhoun:** Yeah...

**Matt Holt:** And if your web browser works then you still can't get anything done, you know?

**Jon Calhoun:** I could just see it being different just because it's on their server. You never really know what's going on... But I don't know, in my mind it's a slightly different beast, but it's a similar problem.

You mentioned that you could set up a cron job or something... I believe Caddy has install -- I don't remember if it's a script or if it's just a sudo apt-get type install, that I believe comes with Systemd set up, to automatically run Caddy.

**Matt Holt:** Yeah. we have Linux packages for Debian, Fedora, maintained by volunteers in the community. I can't figure that out, I don't know how to do that stuff. It's complicated.

**Jon Calhoun:** Have you considered maybe trying to approach it that way, as like there's two install options and one automatically, like you said, set up a cron job or something to do the auto-updates?

**Matt Holt:** I've proposed this idea to the package maintainers and they hate this idea, where you do apt install Caddy, and then from that point on Caddy kind of updates its own binary. Or apt install Caddy actually installs a Caddy version manager or something, which is Caddy itself, because Caddy can upgrade itself. So it's a weird idea. We could do it; I've thought about it. I've kind of like dangled that threat in front of them before, in like a friendly way, obviously... Just like "What can we do to make this happen?" But I don't think that's gonna happen.

**Jon Calhoun:** \[28:26\] So if we see you actually learning to do that stuff on your own, then we'll know that's why you're doing it, because your dangling didn't work...

**Matt Holt:** Maybe.

**Jon Calhoun:** Okay, so I guess some other things I'd like to talk about are things like documentation, especially switching from like a v1 to a v2. I guess the first question is "How did you go about making sure documentation is accurate?" And then the second this is how do you manage having both versions of documentation and making sure people are on the right one, and that sort of thing?

**Matt Holt:** So this is a really good question... This is one of the hardest things that we deal with now that Caddy 2 is out there, and stuff. So we work really hard on our documentation; it's definitely not perfect. It's open source, we accept contributions... It's pretty good though. It will get you pretty far. But Caddy is a complicated piece of software, and it touches on a lot of technologies, like the internet, and networks, and operating systems, and kernels... There's all sorts of stuff that, frankly, it has nothing to do with Caddy or DNS.

All these internet technologies, all these computer technologies have nothing to do with the web server. Those are usually what people have questions about. So we need to be sure that we limit the scope of our documentation to just the web server, so things don't get out of hand. We're not trying to document how the internet works, or how DNS works, or how TLS works, really. Those are kind of prerequisites; if you're gonna use a web server these days, you're gonna have to know all those things.

So we show you how to use Caddy, and then that is itself kind of tricky too, because first of all, each build of Caddy is a little different. Different Go version, different Caddy version, different plugins, and versions of those; because plugins are statically compiled in... Which is really nice. It's actually awesome. But this is another kind of beef I have with package managers - they don't handle plugins very well. They expect every build to be exactly the same, but that's not the case with Caddy, where you can customize your build. So that's why we have a download page where you can choose the plugins you want.

And honestly, if a package manager could just make a GET request and download the artifact and just install that in a script, that's all we ask for. But there are reasons - and I've heard all of them - why they don't do that.

But anyways, every build is a little different, so that makes it hard to document. If you go to our website though, you'll see that we break it down in how to get Caddy, with or without plugins, built from source, package managers, those things. We talk about getting started with it, so your first Caddy commands, your first configs... We show you that you configure Caddy with JSON, and that that's kind of a lot of work, especially for simple sites. Then we show you the Caddy file. Then we show you the differences...

So I recommend that everyone does our Getting Started guide to kind of understand how Caddy works. And after that, it's really just a matter of what to put in your config. It's a reference question. A lot of people want to jump to examples, which - I understand the temptation, and I think it's helpful to see some examples... The problem is though a lot of examples that people find are for v1 instead of v2, because they're just using Google and finding random articles on the internet, which we discourage, especially when you're just starting out; definitely stick to the official docs and the wiki. We have a community wiki on our forum that anyone can hit, and that's where we encourage people to put long-form examples, tutorials and things, and to explain every piece of it.

\[31:59\] It's tempting to just copy-paste configs and try and get that to work. We get a lot of support requests that don't make any sense because they don't even know what they're doing.

So I really encourage you to read the documentation, learn how your tool works. Our reference docs are pretty good, I think. The Caddy file, we talk about exactly the syntax and the structure of it, and how it works... And then the JSON docs - those are interesting, because our JSON documentation is dynamically generated. I wrote some of the worst spaghetti code I've ever written in my life, that scans the Caddy codebase... And it's kind of like a godoc command, but it follows a JSON struct tag, all the way down. So if you go to our JSON docs, you can actually click through the JSON structure. And because the structure is modular, you can extend it. We've built the system to support that.

So you'll see a key, and then the value might be like "...", and you can click that and you can see a list of possible modules that you can use there, config modules. So how do you handle an HTTP request? Well, here's always ways - you could proxy it, you could do a static file server, you can code with it, you could just hardcode a response... There are all of these things you can do. Our docs try and compensate for that, so they're very interactive, I guess, in that sense; very comprehensive. It's a complicated problem.

**Jon Calhoun:** The JSON ones that you said were generated from the code, like digging into it - is that like a command inside of Caddy you can do to bring up a server with that? Or is that generated somewhere else?

**Matt Holt:** Kind of. So that code is -- I don't even know if it's published. I think part of it is, because it's just very specific to Caddy only. The community has contributed helper plugins for editors, just to generate the JSON schema... So there is a Caddy plugin that generates a JSON schema. And that's the thing - we can't just hand you the Caddy JSON schema. I mean, I guess we could, for all known plugins in the world, all registered plugins, but that doesn't matter if your build doesn't have those plugins. So you need to generate a schema for your Caddy build, and that's what this schema generator plugin does. So yeah, you can get that.

**Jon Calhoun:** Yeah, I was kind of wondering, because you'd mentioned that you could build different plugins, which I assume would change the documentation there a little bit as to what options were available... For example, I think with logs there's different options for writing logs, whether you're writing stdout, or somewhere else. And I'd assume if somebody wrote something custom and built it into it, that they might wanna look at those docs or use them in some way.

**Matt Holt:** Yeah, you probably wanna see it in your editor.

**Jon Calhoun:** Okay, so I guess my next question is a little bit different... I think it was around -- I'm not sure exactly timing-wise, but there was a time where Caddy was trying to sort of become more sustainable, and you had introduced pricing plans and some things like that... I know that's not the case now, so can you (I guess) talk a little bit about where you are now, and was that part of the v2 sort of involved with that, or was that a completely different thing?

**Matt Holt:** Yeah, good question. I think I would describe v2 as predominantly unrelated to the funding/sustainability stuff. v2 was a technical goal. And when it became clear we needed to sustain Caddy with some funding, we tried a couple things, like a sponsorship package, and what we called an engineering package, where you could gain access to Caddy expert engineering for your company... And with v1 that didn't work out too well, because people largely saw Caddy v1 as a toy, which isn't super-wrong... I mean, you could totally use it in production. It was built for production use, but maybe not like for enterprise use, and it didn't have a lot of advanced features, so I think we missed out on that market.

Then we experimented with shipping custom binaries from our website, so I built this whole thing that generated a custom build of Caddy for you, click-click-click, download... And those binaries that you downloaded were licensed for non-commercial use, unless you paid, basically.

\[36:26\] So if you're gonna use our build server, and take advantage of using Caddy in your company, we wanted to see if we can make that sustainable, since we knew a lot of companies were automating downloads from our website... And I don't think it was that confusing, because a lot of software packages do stuff like this, where they'll take an open source project and then either brand or license something else on top of it. You see this all the time... Chrome, for example, is a rebranding of Chromium. And there's a ton of examples; the Java world has something like this, I think even VS Code...

Anyways, so Caddy has always been open source. It's always been Apache-licensed, and it has never, ever changed, and it's not going to. We experiment with shipping binaries from our website that were licensed differently for non-commercial use. That was actually more sustainable, probably because it kind of forced a lot of companies into paying for it... And that helped quite a bit, but it was very confusing to people.

So at some point, Bill Kennedy reached out to me, from Ardan Labs, and talked about kind of a partnership, some way to make Caddy more positively sustainable, commercially-viable. So Ardan funded the development for Caddy 2, for the most part, that first ten or so months. So I was able to drop the commercial licensing binaries and just revert everything back to simple open source. So that's kind of where it's at now; it's purely an open source project, with no commercial licensing whatsoever. It's sustained purely on sponsorships.

**Jon Calhoun:** Are those sponsorships like GitHub sponsorships, or something else?

**Matt Holt:** Mostly GitHub. There's a couple that aren't...

**Jon Calhoun:** So if somebody was trying to get into open source and they were thinking about ways to make it sustainable long-term, do you have any advice for them in that sense?

**Matt Holt:** Yeah, so build something that people need and use, and... I think sponsorship is a great look for companies. It's a really good look if your company sponsors a project, either because your company uses it, or because your customers use it. That's an awesome look for you, if you're helping your customers like "Hey, you all use web servers, or you all use this Go package or whatever, or you all use the Go language... So we're gonna sponsor these Go projects to support our customers. Look at how cool we are!" I don't think there's -- other than just making sponsorships easy and available... Especially -- so from my understanding, big companies have an easier time funding through organizations or companies that they already have billing set up with. So for a company to shell out some money to, for example Amazon, for services or whatever - that's no problem, because "Oh, it's for Amazon. It's already approved by the finance department", even if it's going to some sponsorship through Amazon, or something. I don't know if that's a thing. I just remember that we were asked to sell Caddy on Amazon because they could get their company to pay for it no problem. We actually had a really hard time getting on Amazon. We never did.

\[39:52\] But for example GitHub - a lot of companies are configured to pay GitHub for services, so when you pay GitHub for sponsors, it all just kind of flows through that same system. So that's better than, in that sense, perhaps going through something like Patreon, or other kind of random donation sites, because they don't have to go get a whole new financing flow, and approvals and things.

**Break**: \[40:20\]

**Jon Calhoun:** So this is just like a personal (I guess) observation, but to me it's always felt like GitHub sponsorships - it always looked and felt like the tool was designed for individuals... And I know that's something that I'm seeing a lot more, at least in the Go ecosystem - people seem to be looking at what tools they're using and what open source libraries they're using, and trying to sponsor the ones that are making a big impact on them, and trying to help in that sense... And they're becoming more conscious of it, and I think they're even building tools around discovering which open source tools you're actually using. But that's still kind of like on an individual level. Is the GitHub sponsorship something you see a lot of businesses using, or what are your thoughts on that?

**Matt Holt:** We do see some sponsorships come through from businesses on GitHub Sponsors, yeah. On GitHub, an organization can be a sponsor to an individual or an organization, I think, and we also see some just representatives from the company's I guess personal or professional GitHub accounts as the channel for that sponsorship... That's definitely a thing.

I would also recommend too that other developers looking to get sponsorships - I mean, know your audience for one thing, but also don't underestimate your audience. I see a lot of sponsorship profiles that have tiers really low, like a dollar a month, five dollars a month... And that's fine. It depends what your goals are. If you're trying to be full-time sustainable, like I am, so that I can keep working on Caddy full-time, a dollar a month, five dollars a month isn't really gonna cut it, to be frank. I mean, it's appreciated, definitely. I appreciate being able to go grab lunch, for example, once...

So there's like one-time donations, and recurring. If we're talking about sustainability though, typically you'll need professionals or companies to sponsor you at a tier that is actually sustainable. If you're gonna do $5/month, you're gonna need hundreds of sponsors, maybe thousands to be sustainable, depending on where you live.

I live in an area that's kind of expensive... I guess everywhere is kind of expensive right now, but -- I mean, this is not California, but it's still expensive. So I would need thousands of $5/month sponsors; or you know, one, two, five dollars a month. It's insane.

\[43:42\] My lowest tier I think is $25/month, and that's like the baseline for sustainability. I still need hundreds of those. But if you can find companies who can sponsor you at a tier that's comparable to the amount that they're benefitting from Caddy, or from your project in general I should say, then that's a much better arrangement. And I can also give those companies - like ZeroSSL, my executive sponsor - much more attention if they need it, than the $25/month sponsors, who are still helping, but they don't need maybe as much attention.

A lot of sponsors don't necessarily need the involvement. Some just want to support the project and see it keep going, they wanna keep getting software updates, they wanna see the community grow... And those are all valuable things that are worth companies paying for.

**Jon Calhoun:** Yeah, I think that's -- the pricing you mentioned is part of what has always made me feel like GitHub sponsorships are... Like, they almost feel like a middle ground between the two, in the sense that -- like, when a company is sponsoring, at least in my mind, I'm thinking $1,000/month is not... Depending on the company, I guess, but getting up in those realms where hundreds to thousands of dollars a month is really not that outrageous for a company that's using Caddy at a very large scale.

**Matt Holt:** Yeah.

**Jon Calhoun:** But then you have an individual...

**Matt Holt:** Yeah. I mean, if you think about it, a brand new startup paying a thousand a month is probably steep. But you don't have to start there. You can start lower. But for a large company - I mean, a company with dozens of employees and bigger - a thousand a month is pocket change. And your project -- I mean, it depends on what the project is, but Caddy is like the core infrastructure for a lot of businesses. That's your web services right there. How many customer domains are you serving, like 10,000 customer domains? You probably should be investing in Caddy's development and ongoing maintenance, right?

So you just kind of look at those angles, and... But I would like to see open source sponsorships kind of de-cheapified. It would be nice if the norm wasn't asking a dollar a month, five dollars a month.

**Jon Calhoun:** Yeah.

**Matt Holt:** I mean, you can if you want...

**Jon Calhoun:** I think that the hard part there is if you're expecting individuals who use your library to contribute, I think that's where some people tier it at like $1, or $5, to get a person to contribute...

**Matt Holt:** Sure.

**Jon Calhoun:** And I think part of that stems from - in my mind, GitHub sponsorship looks very similar to Patreon, and Patreon tends to stem from YouTubers who basically are like "Give me $5/month and you'll get early access to videos", or something, which is very different.

**Matt Holt:** And I guess -- yes, it depends on your project and your audience... We Go developers are -- probably most of our tools are used by professionals. We're often writing server-side code. Either they are little home personal projects, in which case I don't care, use Caddy for free... But if your business is using it, it probably is in your business' best interest to support the project with a sponsorship. And in that case, a business supporting a project at a dollar a month or five dollars a month is -- I mean, thank you, but you need your web server to be sustained, and we're talking like full-time professional expert development here, so... Just things to think about. But it would be nice to kind of de-cheapify it in like the professional realm. I think professionals and companies should be able to sustain projects largely.

**Jon Calhoun:** I do like that the community seems to be pushing towards this "Figure out what open source you're using and make it sustainable", but it is kind of frustrating that we almost had to get to the point where open source projects get abandoned, and -- people take all sorts of different routes to sort of make it sustainable, and it's kind of challenging in that sense. But I'm hopeful that in the next ten years we'll sort of see a transformation as to how open source is perceived and sustained.

**Matt Holt:** Yeah, that would be nice.

**Jon Calhoun:** Alright, so the last question I have - we can also see if you have an unpopular opinion - is "What do you see as the next steps for Caddy?" You said that you're almost feature-complete, so where do you see it going?

**Matt Holt:** Yeah, so we're at 2.4 now... In 2.4 we released remote management, like remote admin endpoint. You configure the admin endpoint through which you manage Caddy configuration and other kind of administrative things. You can asset that up to be securely accessed remotely, so over a TLS connection that's mutually authenticated... And that's really nice. That lays the groundwork for what I've been working on and designing lately, which is kind of a hosted management UI.

\[48:19\] This has been kind of a dream for 5 or 6 years, where you can log into a website and manage your Caddy instances... So I've been seriously designing that and started working on that now, in the last couple months. It's a bit slow-going... A little slower than designing Caddy 2, where I could kind of drop Caddy 1 on the floor and focus all my attention on designing Caddy 2... Here I can't just drop Caddy 2 on the floor. I have to keep maintaining it, I have to keep evolving the community and such... So it's going a little slower, but the idea is that you'll be able to log into the Caddy website and view your instances there and manage their configuration, and there's lots of cool possibilities there that I won't get into right here... But we're gonna take advantage of these new remote management capabilities. So you can deploy your Caddy instances with a certain static config, with some credentials in it, I guess... And you deploy that and it will just kind of show up in your Caddy dashboard and you can manage it there.

**Jon Calhoun:** Awesome. I'm looking forward to seeing that whenever it's released. Alright, so we're gonna more to the Unpopular Opinion...

**Jingle**: \[49:26\] to \[49:43\]

**Jon Calhoun:** So the way this usually works is you share an unpopular opinion, preferably in a bite-sized version that they can throw on Twitter and have a poll for... And then they do the poll, and if it's popular, then you have to come back on the show. So you're looking for unpopular, without everybody hating you.

**Matt Holt:** Okay. Like I said, all my opinions are unpopular, but I'll give you one that's been on my mind, because it keeps coming up all the time... And that is that your server's request per second doesn't matter in 2021.

**Jon Calhoun:** So I guess why would you back that up now?

**Matt Holt:** So 10-20 years ago -- a lot of people still do this, but 10-20 years ago it was maybe actually relevant to battle web servers and see who could get higher requests per second. "Oh, this one got 100. Oh, I got 150 out of this one!" Nowadays, those are pathetic numbers for most things... So I think these days it's fair to say that your requests per second just don't really matter. Most people are not maxing out 99% of their web server's capacity, where the web server is the bottleneck.

I remember that when you measure a web server's performance, you're at the requests per second metric. You're actually looking at the network stack of the kernel, you're looking at wire -- if you're doing this remotely, everything over the wire. You're also measuring disk, or if you're reading a file, or if you're proxying, measuring all of that, you're measuring the operating system paging out tasks and scheduling the CPU... And there's all these layers, and dozens more maybe that I haven't mentioned, but... You're not actually measuring your web server's performance, and I think that RPS metric is just silly these days.

\[51:46\] Caddy is not slow. I've gotten over 100,000 requests per second using \[unintelligible 00:51:50.23\] Anyway, I've measured Caddy at over 100,000 requests per second on my MacBook, but that doesn't really mean anything if the MacBook isn't serving 100,000 -- like, it doesn't need to serve 100,000 requests per second. Most of you don't. I mean, Google is using Go in production. Netflix and hundreds of other large companies, Cloudflare, Fastly... You can use a Go server in production on your thing and it's gonna be fine. Performance is not our number one goal, is basically what I'm saying.

I'm assuming at this point you're referring to just measuring Caddy individually, versus measuring Caddy with --

**Matt Holt:** When people suggest Caddy -- I see this all the time. People suggest Caddy, and then immediately people will be like "How does it compare to NGINX? How does it perform?" It's not going to perform as good as a C program if you're talking about requests per second. But if you're talking about things that actually matter, like security and reliability and ease of use, it's gonna perform a lot better.

**Jon Calhoun:** This reminds me a lot of the issue whenever -- like, basically a Hello World server in Go got slower in one major version bump; I forget which one. I don't know if you remember that...

**Matt Holt:** Yeah.

**Jon Calhoun:** And some people were making a big deal out of it, but at the same time it was like -- we're measuring things at an unrealistic point...

**Matt Holt:** They don't matter.

**Jon Calhoun:** Real applications do more than this.

**Matt Holt:** Yeah...

**Jon Calhoun:** So you are referring to Caddy versus NGINX, not like measuring how your entire web stack actually performs?

**Matt Holt:** Kind of both... I mean, if you have a databasing application and it's really slow, you're gonna get low requests per second. You should probably optimize that. Actually -- so Caddy had a performance issue in the early days of v2 with HTTP basic auth. You know how that works, where the client sends a password over plain text in an HTTP header; the only reason that it's even secure is if it's over TLS, which obviously Caddy does by default. And with Caddy 2, we changed the way of configuring this. Typically, to configure basic auth you specify a username and a password in plain text in your config file... And we stopped doing that with Caddy 2. You have to hash the password, because otherwise it's basically like starting a plain text password in your database. That's stupid. That's just a bad idea and you're asking for trouble.

So you have to hash it with a secure hash, like bcrypt, which is slow. So you get these requests coming in with basic auth, and as you know, with basic auth every HTTP request, even images or whatever page resources - they all have this header test and they all need this hash computed in order to check the authentication. So actually loading a web page with basic auth in the very first release of v2 is really slow. And yeah, that kind of thing matters. The bottleneck was the web server. We've fixed it since then, but that is maybe the only time the metric matters... But if you're comparing who can serve a static file faster, no one cares.

**Jon Calhoun:** I mean, I can definitely agree with you that the only time to me that it makes sense to start measuring is when you clearly have a bottleneck, and it's leading to performance issues... But I can definitely agree that the difference between me using NGINX or Caddy in the front of my server is something I'm never gonna notice, or users are never gonna notice.

**Matt Holt:** Yeah. I mean, if NGINX is getting 100,000 per second and Caddy is getting 75,000 per second - "Oh, NGINX is clearly better." Okay... That's fine if you need 100,000 requests per second and no memory safety. Go for it.

**Jon Calhoun:** I think the other hard part is I don't think anybody has ever built a web server that's running behind Caddy, or really anything. It's rare to build one that doesn't end up slowing it down more than the web server itself...

**Matt Holt:** Yeah.

**Jon Calhoun:** It's the same as that Hello World program. The minute you touch a database, that suddenly slows things down so much that it's no -- it's not the same comparison at that point.

**Matt Holt:** Yup.

**Jon Calhoun:** Alright, I suspect you're gonna have a popular opinion, so you might have to come back... But we'll wait and see.
