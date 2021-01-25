**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 33, and our sponsors for today's show are Backtrace and Ardan Labs' Ultimate Go Series of training.

Today on the show for hosts we have myself, Erik St. Martin... Brian Ketelsen could not be with us due to a family emergency, but Kelsey Hightower has graciously stood in to take Brian's place today.

**Kelsey Hightower:** Yeah, just like your Go runtime, we're going to even upgrade your host. \[laughter\] We have a few bug fixes, a few patches, but I think you're gonna like what you get.

**Erik St. Martin:** And we also have Carlisia Pinto on the call...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our guest for today - he's been speaking a lot and is also an author... Welcome, Mat Ryer.

**Mat Ryer:** Hey, thank you! Good to be here!

**Erik St. Martin:** For those who aren't familiar with who you are and the things you're working on, do you wanna give just a little bit of a backstory and then we'll kind of get into some interesting stuff you've been working on?

**Mat Ryer:** Yeah, sure. So I started programming when I was really little, with my dad. We used to type content out of magazines, little BASIC programs to make things work, and then we'd play around with it, change variables, see if we could break it and see what we could do with it. I just loved that. I loved the fact that we could build these things, and that never left me.

I'm very lucky to do that now as a career, and Go is a very interesting choice for me, because I started it when I was gonna build something for Google App Engine, and it was either Java or Python, or there was these weird little experimental language called Go. That was a very appealing thing because of this nature that I have around just wanting to find things out and see what I can do with new technologies. That was before Go 1.0 actually, so I just got into it very early and was kind of building bits and pieces here and there for App Engine. Then the language has just kind of taken off over the last seven years.

It's great, and that's kind of why I talk about it all the time and why I use it... Basically, almost exclusively now I write in Go.

**Erik St. Martin:** It's kind of funny, and I know Kelsey's been in the community for a couple years, and same with Carlisia... It's interesting to reminisce on just a couple years ago you could have a conversation with other tech people and mention Go and they're like "What's that?" and now it's so much bigger... it's rare that you run across people who aren't at least familiar or heard of the language.

**Mat Ryer:** Yeah, absolutely.

**Erik St. Martin:** When did you jump in, Carlisia?

**Carlisia Thompson:** I got started with this whole thing when I went to GopherCon in 2015, and when I got back I started doing it on the side, learning and getting involved with the community, and going to the Go meetups in San Diego.

**Erik St. Martin:** And Kelsey, you spoke at the first GopherCon, so you were using Go for quite a while before then, too. Were you pre-1.0?

**Kelsey Hightower:** \[00:03:56.04\] Yeah, I think during the pre-1.0 days I was at Puppet Labs still, where everything was written in Ruby, and we were exploring a replacement that had to be cross-platform. We wanted something faster, so C++ was on the table. We were doing Clojure at the time, and I think Go was a bit too early then, but that's when I kind of did my first project that I've shared with anyone - it was in Golang, to replace parts of Puppet in a different language.

**Mat Ryer:** Actually, I remember... Kelsey, I was at the first GopherCon where you did your talk on Gopher sysadmins. That was the time that we decided to build something that we could put into production, because before that it felt like this was an experimental language, and you were talking about using this... And sysadmins in my head were like the guys that really keep the lights on, so that's like serious stuff, that's not just like playing around... And when you were talking about Go, that was kind of something that stood out as something that concreted the fact that we were gonna go and do Go in production. So I actually probably owe a bit of something to you for that.

I looked up the presentation just before this, and just a bit of trivia... Your last slide in that presentation is titled, "It's GoTime!" \[laughter\]

**Kelsey Hightower:** Yes, that is a good observation! And you bring up a good point, because I think the Go community, if you look at most of the popular projects that are in Go, things like Docker, Hacker, Terraform - all these systems oriented tools Consul, Etcd databases, and I think that the maturity that's required by that community, things need to be stable. Not just the language, but the runtime, troubleshooting debuggability - these are all things that come from that backend demand or what sysadmins expect out of a mature set of tooling. We've been using Perl for decades, and Bash - those things are pretty stable in terms of API and what you build with them... So I definitely think the sysadmin community had a big impact on Golang and the stability going forward.

**Erik St. Martin:** It's interesting that you point that out though. We tend to view sysadmins as kind of like the gatekeepers to production, and ultimately they take ownership. The dev ops role has changed that a bit in the recent years, but before you had to throw it over the fence and the system administration side had to be willing to support it, so you're right in having sysadmins stand up and say, "We're using this and we love it." It does speak volumes to traditional run environments where you're kind of separated from production - the development team rather.

**Mat Ryer:** Yeah, and Go was a systems language in a lot of people's minds for a long time. I've been building websites in Go for a while, but it's not as easy as it is in Rails. At least it's not yet. I'm quite hopeful for Go Buffalo, because I think what Mark Bates is doing on Go Buffalo I think is going to bring some of that Rails-esque stuff for Go to the web. People want to actually get stuff done, and Go is awesome for that, but it's harder... If you wanna build websites and UIs and things like that, all this stuff's now coming into the language, and I'm excited to see over the next couple of years what we're gonna do there.

Because actually Ruby was never -- no one would know Ruby if it weren't for Rails. Go has taken off without its Rails, but we might see a much bigger explosion in the use of the language, once we can make building web very easy and enjoyable.

**Kelsey Hightower:** \[00:07:42.28\] I always think about that... You brought up a good point - Rails did a lot for Ruby, and I would say maybe Docker did the same thing for Golang. Docker adopted Go really early on, and I think most people -- because they attracted a huge open source community of contributors, and I can even remember when I was at CoreOS that all their stuff was also written in Go, and I think those projects force a lot of people to look at Go seriously, because they wanted to contribute and get their features in. So in some ways, in my mind, I consider Docker the Rails for Go; even though it wasn't a frontend app, it was just one of those applications that was so popular, had so many contributors that it introduced so many people to Golang for the very first time.

**Erik St. Martin:** I think it was kind of like a perfect storm though too, because even when I first started getting into Go, Docker hadn't really been released yet, but Heroku was doing Doozer and Etcd, and then Consul came out... So it was really this perfect storm of distributed systems outside of your major Googles and Facebooks and stuff; it was starting to grow, and a lot of the new tooling that people were finding was written in Go, because people were looking for something different than their typical C++ and Java they had been building these things in, and then Docker, like you said, changed the way we think about -- there's a lot of arguments between containerization and virtualization, and there's use cases for both, but people really saw it as a new way of bundling their app into this reproducible thing to deploy, so the container world just took off, and Docker really made it approachable for people. It's weird, like, is that the final match that ignited it all? It's interesting.

**Mat Ryer:** Yeah, but the other thing is Docker and all those early projects - they're kind of serious things, I think. Rails, you can kind of build fun apps, and the performance wasn't a primary concern; productivity was, performance of the dev team was something that they care about being rapid in all this. And it didn't have a great reputation for stability and for things like performance, and stuff. Projects like Docker and those sorts of projects that we talked about - there's sort of grown up problems that they're solving, they're serious things I think, so Go got a bit of a head start in that because of projects like Docker. It was already kind of seen as a bit of a serious language from the beginning, rather than something like Ruby where you can almost guess in Ruby and write long sentences and it works somehow, magically.

I think Go benefitted from some of those projects, because they just felt grown-up and it felt more serious, and stable, like you could use it in production.

**Kelsey Hightower:** Looking back, I think one of the biggest sticking points for Go was the ability to create that single binary, as we entered the GitHub era where you build an idea and you throw it on GitHub. But I can remember a lot of things you would try on GitHub, especially if it was written in NodeJS or Rails - you'd have to do so much work to get an environment set up if that wasn't your primary language... Download it, hopefully you don't trash a machine in the process, just to try it out. Then Go comes along, and all the projects in Go - that was kind of like the tagline you know 'X' written in Go. One binary, and off you go, you can try it. You can try it on your Mac, you can try it on Linux, you can even try it on Windows in most cases...

I think that was also a sticking point that really got people setting the new bar. If you wanna make a project that people can try out fast, it needs to be almost a single download, and off it works.

**Erik St. Martin:** \[00:11:47.02\] Yeah, that's a fair point too, because everything before... You had conflicting Ruby versions or Python versions. Even in dynamically-linked binaries you can get into dependency issues. So I think I'd agree that just having that single binary, like "Hey, here's the 64-bit Linux version of it. Download it in Go."

**Kelsey Hightower:** I wanna switch gears, I'm actually stalking Mat on the internet right now, and his GitHub repository is a goldmine. There's these things like bitbars, running scripts inside of your MacOS bar, Gopherize Me... That's a pretty epic project, I see everyone making their avatar using that thing. And you have all of these things like Goblueprints and Try. What's the motivation for all of these things? This seems like you're scratching the itch and just sharing with everyone.

**Mat Ryer:** Yeah, I'm a terrible businessman... \[laughter\] That's one thing that I've learned. So I don't really know... I think if you have to do something to solve the problem for yourself, there is just something very nice about the idea that you've just solved that problem for other people as well. So that's what appeals.

Bitbar was an interesting experience... That's actually an Objective-C app and as you said, it puts the standard output from any executable, and it takes each like and puts it into the menu bar on your Mac. It's a dead simple idea, it was something I needed \[unintelligible 00:13:17.00\] and I wanted to see it in my menu bar, so I was gonna just build it for that, which is why it's called Bitbar, actually. Then I thought, "Well, I could just abstract this very slightly and just have a script that's gonna go and get the Bitcoin value for me. I'll put that in there, and then in theory, people could add other little scripts that have different information." Then something happened at the beginning of last year where it went to the top of Hacker News and suddenly just got inundated with different pull requests for plugins that did all kinds of things.

If you look through the getbitbar.com, there's a wealth of different things in there that you can just put into your Mac menu bar, and it's all free because it's actually not that hard to write. It's easy to put stuff in the menu bar. The nice thing was the idea of abstracting it and letting people just write scripts to do it.

**Kelsey Hightower:** Mat, I've gotta ask... Do you keep stats, do you check the star count on your repository? The reason why -- I have this theory that people that do serial repositories (I'm guilty of this, too)... But do you check the stats? Do you look at the star counts? Do you know roughly the number of stars you have on your projects? Be honest.

**Mat Ryer:** I do know on some of them, because that is a way for me to gauge interest. You also know anyway by the interactions you have in issues or pull requests, and things... But knowing which projects are taking off or getting interest I think is a nice way to know where you should put your efforts. A lot of times in startups we spend a long time building something... I think the main reason startups fail is because no one needs the thing that they're building, so I love the idea of building something little, getting it out there and then if it gets interest, if people like it, if it they use it, if it's useful, then it's worth putting more effort into. Otherwise it might not be.

**Erik St. Martin:** I think I'm a terrible businessperson from the perspective of I build stuff, I put it out there, and then I forget about it. I don't even look. Two years later I'll go to pull up the project and there's pull requests, there's issues open, and I would just wanna be like, "I'm so sorry..." \[laughter\]

**Kelsey Hightower:** Yeah, Mat, you make up a good point. I think that's the perfect use case for the stars. I look at them as like thank-yous and true indicators, because it seems like most people rarely give out a star unless they really are either using the project or they really appreciate the content that they find there.

\[00:15:57.18\] On Twitter, people just put a heart on everything, like "Hey, I fell down." It's like, "Really? Are you enjoying my pain, or did you really find that to be an incredible tweet?" But GitHub stars seem to have a little bit more substance to it, especially when you look at who's giving you the star.

**Mat Ryer:** Yes.

**Carlisia Thompson:** I think so, too. At least for me, I only star things that I would actually like to find again, even if I don't remember I starred it. It's like a bookmark for me.

**Erik St. Martin:** That's interesting, the way you use the things on the different platforms are different. You're right, Twitter is more like a nod, like "I saw this. I'm listening, I hear you." It's not like, "Oh my god, I love this." Most people just use it as a way to recognize that they're listening to you, but GitHub stars are kind of different... Those are things that you're really interested in.

I don't go through an unlike somebody's tweet, but I will unstar a GitHub project.

**Kelsey Hightower:** Mat, tell me about this Gopherize Me. I've been seeing everyone, or at least a lot of folks in the Go community, with these little gopher avatars, and I'm like, "Where are people getting these things from?" and then I discover this thing... I admit, I spent about 30 minutes trying to get my gopher just right. It wasn't really complex, I just picked the brown gopher that was bald and threw a Kubernetes shirt on it, and I felt really good about that. What's the thing behind that, and are you seeing a lot of people starting to build their own personalized gophers?

**Mat Ryer:** Yeah, Gopherize Me was a very interesting... The way it happened was kind of crazy. The same way you saw these little cartoons appearing, I saw a couple of them - Mark Bates got one, Brian got one, Erik got one... You got one, right?

**Erik St. Martin:** Yeah, so Ashley McNamara did all the artwork for the new GopherCon site, and when she did that, Brian was talking to her and she made him an avatar, and I'm like, "I want a cool avatar!", so Ashley made one for me. Then, of course, Mark Bates was like, "I want one, too!" and that's kind of what leads into what Mat was saying.

**Kelsey Hightower:** Hold on, so let's give a good shoutout to Ashley, because she has been doing a fantastic job with all this artwork, kind of an extension of all the other artwork we saw in the community... But man, she's been so consistent with it!

**Erik St. Martin:** Every time somebody makes a request about some trait that they'd like to see, she's like "I'm on it. I got it!" Mat took the lead and had some reference code and stuff that was like, "I can turn this into something people can do themselves."

**Mat Ryer:** Yeah, somebody on Twitter said, "You should build a site that just lets people build their own", and I actually replied and said, "I'd love to do that." I was at a point where I needed -- because I work at Grey Matter, and we work on a big project that's a long-running project, and sometimes you need a break from those big projects and you need a quick win. You need to be able to do something that has a beginning, middle end and you can do it quickly and get it finished, because most big projects don't have a finish, and finishing stuff feels great.

So this was a perfect timing thing... It was one evening, I had an evening to spare, and I thought "I can quickly put this together." I'd never met Ashley, but jut over Twitter I said, "Let's put some of your artwork into this Google Cloud storage. I'm gonna see if I can load it through an AppEngine app, render it and just see if it works."

Then she put the assets in there and we then figured out a few little rules, like all the assets should be the same size, and then we'll just rely on the fact that they are -- we'll layer them up in a certain order in order to build up the picture. And it kind of just happened very quickly. It was less than five hours of work just to get a version one ready. This is, again, down to my previous point - we kept it really simple. All you could do on the very first version was you could pick the artwork, it would show you a preview, you could then download it - which would take a while, because it then in the background went and got all the assets and blended them together, and then delivered the file.

\[00:20:15.14\] It was actually quite slow. Also, the thumbnails originally were the full-size images, because generating thumbnails is something you'd wanna do to optimize it, but initially it works without doing that. So it was very MVP, very much "whatever we have to do for the absolute minimum to make it work", so that people can play with it.

I actually shared it before I was even ready, but it was kind of working. Then it started to get traction. It's had about 15,000 users. I put a Google analytics on it from the very first version, because I was interested if it was gonna take off. Suddenly then I started noticing things in AppEngine like "Okay, there's actually a lot of storage being used with these images, and rendering the thing when you click the download button took a long time", things like that. But because it had that kind of buzz around it, it was worth extra effort to then go and improve the little bits and pieces that needed improving.

**Kelsey Hightower:** Well, fantastic job. I think there was another important thing that you said in all that - getting those quick wins. I've seen a lot of people - even who don't use Golang as their primary language - use it as their escape language. When they go home, they just wanna build something and get it done and get it shipped, and I think a lot of people, especially that are doing full-time development, dealing with all the bugs, feature requests, never-ending projects - Go seems to be that language that allows you to take an idea and execute something that's usable pretty quickly. Do you see yourself doing that quite a bit?

**Mat Ryer:** Yes, and I used to do it in Rails, too. The only difference is now, especially when I build it for AppEngine, I know that if I put it there, it is ready to scale - it REALLY is ready to scale. I'm confident, as long as there's budget for it, if a million people suddenly went and started gopherizing themselves, that wouldn't be a problem, at least from a scalability point of view.

Go, the default HTTP package, the comprehensiveness of that - that is something that I think we sort of take for granted a little bit. We just write a handler, it's easy, and we can just bind it to a path and that's it, we're done. But really, that is a highly concurrent web server going on there. Especially in AppEngine, as I've said, you get the benefits of all the hard work that's been done in order to power these massive scale applications at Google. Well, you can kind of get to use some of that.

I like the fact that you can be rapid with Go, but also it really is ready to scale if a project takes off. I'm convinced if this was a Rails app and I just had it on a little server somewhere, I would have seen many more problems with the traffic it got. It did on the first day get thousands of users hitting it straight away, which I didn't expect, and it sort of just wasn't a problem.

**Erik St. Martin:** So challenge accepted! We need a million people to gopherize themselves, to prove it out.

**Kelsey Hightower:** And make sure you ping me offline... Me being at Google, I love this authentic advertisement for Google Cloud right now. This is totally legit, I appreciate it. But we can definitely help you in terms of credits for the community; we definitely don't want you to bare too much of the cost for something that really feels community-oriented. It kind of speaks in the spirit of Golang itself. GopherCon, this show, all these things we do as a community -- I've seen it in other projects as well, so I can't say it's unique to Go, but it's really refreshing to see the amount of collaboration between you and Ashley, who have never met in person, but yet you guys pulled off this particular service just so people can actually build gophers of themselves. I think that's fantastic.

**Erik St. Martin:** \[00:24:21.11\] Yeah, I absolutely love all the grassroots efforts like that. So now is probably a good time to take our first sponsored break, and then we can kind of jump in and start talking about some other things, other projects you're working on. Our first sponsor for today is Backtrace.

**Break:** \[00:24:38.05\]

**Erik St. Martin:** So we are back, we're talking to Mat Ryer. We were just talking about Gopherize Me before the break, and the grassroots effort of that. Have you had any other projects that have really taken off that surprised you like that?

**Mat Ryer:** No. \[laughter\]

**Kelsey Hightower:** I loved that answer. Straight to it.

**Erik St. Martin:** It's amazing when stuff like that does that, though. It's a little thing that you don't think much of at the beginning and then it just blows up into something much bigger than you expected it to be, and it's really gratifying. I love seeing that.

We were joking last week on the show, all the gophers... It was like I couldn't even look at Twitter anymore, it was nothing but people posting the gopherized versions of themselves.

**Mat Ryer:** I know, I loved it too, and it hasn't stopped... It's actually still growing. We also changed -- you could originally only share it on Twitter, and we added different ways of sharing it, and stuff. We've actually noticed that people outside of the Go community now have started making these little cartoons of themselves, and without really the context of the language or the history or anything like that. That's very exciting to see happen, and fun.

And of course, the source code is available, you can go look at it. And honestly, it's not awesome... It sort of needs a rewrite, and my M.O. usually is "I'll hack at something so that I can sort of understand how to build it, and then I'll do a rewrite of it properly", and usually I'll TDD the rewrite.

The first time I write something, it's sort of like learning, it's like a discovery process where I'm figuring out how to do it, and then the second time I write it, I'll actually write it properly, knowing all the things I learned from the first time.

I think some author said that the art of writing is rewriting. I think we're talking about novels and stuff, but it also applies to software - the second time you write something, it's so much better because of everything you've learned.

**Erik St. Martin:** Yeah, you've got a better understanding of the domain, so if you spend just even a little time - 15 minutes - spiking out a prototype, your new approach is gonna be completely different based on what you learned, and I think that's important.

**Mat Ryer:** Yeah, I agree completely. In fact, I think almost the worst time to design a system is at the beginning of a project, because that's when you have the least amount of information about it. Unfortunately, that's when we have to do it, but there's definitely something to be said for jumping in, just getting something done, because you'll intuitively just understand the domain or whatever it is that you're trying to solve, and then subsequent times will be better.

\[00:28:12.15\] I genuinely do usually write things twice, and it sounds wasteful, I think, to a lot of people, but the value is there; I'm gonna do it on Gopherize Me. I'll tag the repo as well, so that people can see the before and after. There's bits in there now that can be cleaned away, and some things could be a little more performant, but we were able to get it out very early, and now it has its own life, so it's worth the effort to go and improve the bits that might need improving.

**Carlisia Thompson:** That's a very good point about rewriting. Sometimes we might have such a big attachment to code, and code is not really the point. I mean, at least that's the way I see things now after having been programming for a while. Code is just something you output in the process of learning the domain, and learning what it is that you need to do, as opposed to what you think you need to do when you start a project. So when people want to change things around, change requirements and that involves throwing a project away, I no longer resist it because the true valuable artifact that came out of that was the knowledge that you acquired, and then you move on to writing something of value... As opposed to, "Oh no, I wrote this code and I need to hold on to it because, you know, all the time that I've spent writing that code... So we must keep it, otherwise we're throwing that time away." That's not the point at all, I don't think...

**Mat Ryer:** Yeah, I completely agree. And Go does this for us. Go is a minimalistic language, it's a simple language, so you don't tend to invest too much time; as long as you are building things, discrete little packets of functionality, you can quickly get something that you need, get something that's working. And because you don't invest too heavily, you're happy to kind of throw it away a little bit, which I think is very important. And TDD also helps, because if you have good test coverage, you don't mind ripping out junks, you can be quite bold in how you treat the codebase, because you sort of have the safety net of tests; you know that it still works as it did before, whether the promises you've made are still kept. Go, by the fact that it has this minimalistic and simplistic philosophy around it, I think helps no end there.

**Kelsey Hightower:** Yeah, so speaking of improvements, I was going to ask you about Go 1.8. That release is on the way... What are your thoughts about 1.8? Is there anything in there that you're excited about, you've been waiting for for a long time? What are your thoughts on 1.8?

**Mat Ryer:** I'm very tempted to say no again and just leave it, but actually there is defer; defer performance is now improved by a hundred percent, or something like that. It's like half as efficient, or something. Defer is a bit of an interesting subject for me, because I love that you can express the intent in the way you can with defer. You open something, and then you can defer its closing, so that you know whichever point at which you exit a function, that thing is gonna happen, it's gonna get closed.

\[00:31:54.05\] I've seen people complain about the performance of defer, because there's a performance cost to it, but I honestly think we're obsessed with that kind of performance versus the productivity gains you get by just being able to glance at code that uses defers and understand implicitly what it's doing, rather than being verbose and, say, closing a connection at every exit point, or something like that.

Also, it helps when you're collaborating. When someone new comes to the project and they're working on your code, they don't have to even think about closing that connection, because you've already deferred it. So I'm a big advocate for using defer because of the readability benefits you get. I think it's worth any performance-- and obviously, if you end up spending the time to really tackle a piece of code and improve its performance, then I can see why you might sacrifice that for the performance gains... But I think we should just assume defer is gonna perform very well, and use it.

**Erik St. Martin:** Yeah, if you've got defer in a function that's called repeatedly in a tight loop, in something that needs super low latency, I can see how you could advocate not using defer in those particular hot spots. In those cases, benchmarks tell all, right? Like you said, assume defer is the best thing to do from the beginning and let benchmarks drive that "Okay, in this particular instance we're spending a lot of time there."

Other than that, I think the only thing that I don't like about defer is that people won't necessarily understand it sometimes, and you'll see it used inside of a loop. It's a common mistake I used to catch in people's code (new to Go) - they'd have like a for loop that calls a function inside of it, and they'd use defer inside that, not understanding that... Say you're accepting connections on a listener, in a loop, in a function, and they would have some defer to close that connection, or something like that - those are basically just building up now, through every iteration of the long-running loop. Aside from that, I love defer.

**Kelsey Hightower:** I wanna know what others like about Go 1.8, but my two favorite things so far - and I actually have been using them a little bit early in some of my projects, forcing people to build my stuff with the beta of Go - is clean shutdown, or HTTP kind of being a built-in thing now... I don't have to go and grab library. And another little subtle thing they did on the TLS package - on the client side now you can actually have the client dynamically choose what certificate to present to the server that it's communicating with. The reason why I think that's important is I'm building a lot of services now in Go that are doing end-to-end TLS, so mutual auth on both sides, and that means the server itself needs to have a way of dynamically loading and presenting certificates.

We had that in 1.7, but now we have that on the client side in 1.8, where you can now actually kind of articulate, "Hey, these are the five certificates that I need", and be able to swap out which one you serve based on what you're calling.

**Erik St. Martin:** Oh, that's interesting... I didn't even catch that one. But yeah, I'd agree with the graceful shutdown, because we almost always have to write that ourselves for a well-behaved HTTP server. So having that in there is great.

**Carlisia Thompson:** Is there any link that we can give to people so they can read and understand how that works now?

**Kelsey Hightower:** Yeah, so Brad's comment in one of the issues - I think we should definitely give out the link... He gave -- it was actually from his code and his words... It was a pretty small change to do in terms of the work that has been done up to this point to make it happen. The issue has a great comment on what it does, and also the docs - one of the things that are so great about Golang is the docs have pretty good examples and description on what it does and what it doesn't do. For instance, we don't do clean shutdown necessarily for web sockets, for example. That came up in the issue, and I think you'll find that little note in the documentation. So I just look at tip of the Golang package documentation, and I just read about the particular shutdown function. The function name is shutdown.

**Erik St. Martin:** \[00:36:19.14\] One of my other favorite features if you are like a benchmarking and profiling nut is the mutex contention profiling. That's something that a lot of people who do benchmarks and profiling on their Go apps have been interested in a long time. We can look at basically memory usage, we can look at CPU, but knowing how much time is spent on a mutex is actually very valuable information, and I think the 1.8 release doesn't support the read/write mutex, just the standard mutex... But it's a good start.

I know GC latency improved too, for 1.8. I think it was under a hundred microseconds. I'm vaguely remembering, I need to pull up the release notes. But those were things that I think looked interesting. Anybody else see anything that they liked?

**Kelsey Hightower:** Well, I think the work around packaging is pretty interesting. I saw recently that they released kind of an implementation of all the feedback and ideas around package management from Go. I think that's kind of big, because in the Go community there's this long stance that "We don't wanna be too opinionated about how that should work", yet new users to the community and even existing users still struggle with versioning, "Should we do it the way NodeJS does it? Should we do it the way Ruby Gems does it?" There's all of these reference package management solutions out there that some people seem to like, some people seem to hate, but it seems like Go really never had an opinion - a firm one or an official one - until now.

That's pretty interesting how that's coming to give and shape up. I wonder what the community feedback will be once it's actually put to use.

**Erik St. Martin:** Yeah, and we actually have Sam Boyer who's been a big, huge part of that effort. He will be on the show later this month and we'll be talking to him about that. That will be interesting, because you're right, for the longest time that was kind of a community issue, "Let the community sort that out", and I think Google saw that there was a pain point.

**Kelsey Hightower:** I see Mat here has another one of his GitHub repositories called 'drop - dependency-less dependencies for Go'... That's a lot there. What's going on there, Mat, and also, what are your thoughts on where we are with the packaging efforts?

**Mat Ryer:** I would often write little articles and build little packages, like -- there's a tri-package... Essentially, it's a nice pattern that's encoded as a package, and I'm a big believer in not building in dependencies to your projects if you can help it, and drop was something that I used... You can use it like goget, but you say 'drop', and it basically pulls all those source files into your code, so you kind of take ownership of that code. It respects the licensing too, so you get the note in the comments at the top, it gives you the license and the copyright, and stuff... The idea being there might be useful little snippets of code that you just wanna bring into your project, and really the best thing to do is just to copy and paste them in, and drop just formalizes that and makes it easy to do.

I think dependency management and things like that - this is something that we still talk about a lot in Go, because at develop time it's still an issue, you still do have to solve for having those dependencies. But as you said earlier, the fact that all this stuff builds down into one static binary means at least at runtime and deploy time we don't have that same problem.

**Erik St. Martin:** \[00:40:08.08\] There's actually been some cool projects also that I think many of us have come across this week. Do you guys wanna take a couple minutes to talk about those?

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** So actually now's probably a good time for a sponsored break, and then we'll jump into those. I've got a really cool one that I wanna talk about, too. Our second sponsor for today is Ardan Labs, with their Ultimate Go Series.

**Break:** \[00:40:31.21\]

**Erik St. Martin:** And we are back. We're talking with Mat Ryer and we've been talking about Go 1.8 and some of the interesting things coming up, and other projects and dependency management...

So let's talk about some interesting projects and other news that we've come across. One I particularly am excited about - have you guys seen The App Project? I know I'm gonna slaughter the name, it's github.com/murlokswarm/app. It's basically like Electron, but written in Go. You can build a GUI-based application in Go and HTML and JavaScript, and it runs as a native application.

**Kelsey Hightower:** I don't know, Erik... That doesn't really sound like fun to me. \[laughter\] I'm joking.

**Carlisia Thompson:** It's pretty cool.

**Erik St. Martin:** Who wants to write GUI apps? \[laughs\]

**Carlisia Thompson:** Hey, we need GUI apps.

**Erik St. Martin:** It's really cool, a couple years ago I wanted to build some GUI applications and I was having a hard time -- there was Electron, and I was trying to use the Chrome embedded framework, some Go bindings and stuff like that... That was gonna be more work to get a quick win than I was willing to accept, but this looks really good and I'd like to start trying to build some stuff with it.

**Kelsey Hightower:** Is that a thing right now in the Go community? I'm kind of torn between those - I'd see people that would love to do every single programming task in Go, whether it's a mobile app for iOS or Android, building a desktop application... And in some ways I'm wondering if we're walking around with this Go hammer, treating everything like a nail, or is there really some substance to this? Is there something about being able to stick to one single language and syntax to solve these problems, or are we pushing it too far?

**Erik St. Martin:** I think that's something that I struggle with back and forth. I think that there's a lot of reasons to have native apps, and I love native apps on mobile, and things like that, but I guess for some of the use cases, when you think about the web world... We're all used to building applications for the web, and occasionally want an application locally that is very kind of web-ish, right? And that's probably where I draw the line, just because usually the utilities that I build locally don't really need native components. I'm not doing anything magical there, mostly CRUD-based applications and stick to what you know, I guess...

**Kelsey Hightower:** \[00:43:56.02\] Yeah, because if you're looking at Mat's project here, Bitbar... To me, this is the perfect example of a bridge technology. You do the heavy-lifting in Objective-C, using all the nice things that the platform gives to you, but then you kind of make it Go-friendly, right? The Go way is like, "Hey, spit some output, be as complex as you want in a language of choice", but then you can kind of abstract away those parts that are truly unique to that particular platform, and then you can kind of go do your thing in Golang and just have a single contract to worry about. Is that the way you see things, Mat?

**Mat Ryer:** Honestly, if I could, I would have written Bitbar in Go, but I do know what you mean, and I kind of agree. I think if you love doing something, if you love a language and you love coding in a certain language, then it's not just that it's what you know and therefore you can be more productive... The fact that you love it I think makes you more productive. Gopherize Me, for example - I'm prepared to give up an evening to build something, because I actually love doing it, and I don't have the same feeling if it's Objective-C, nor Swift, believe it or not. \[laughter\]

Swift is almost like the opposite of Go. Go has this obsession with minimalism and keeping things simple, and Swift seems to be -- some of it is history; it needed to have all the same features the Objective-C had, because that's what it was replacing, but it does seem to be quite a greedy language. Any idea anyone has gets into the language.

I started to learn Swift because I wanted to build something in iOS, and I unfortunately gave up, because it just took me too long to learn it. So yeah, I look forward to when we can use Go in more places, but I do get the argument certainly, as far as pragmatism goes, to use the language that's best for the problem, and maybe some kind of sensible and smart abstractions here and there will help and let you keep complicated things where they belong. That definitely makes sense.

**Erik St. Martin:** I tried with Objective-C, I really did. \[laughs\] I tried the same thing, I tried to build an iPhone app... And I could, but I never felt like it clicked, like I really got the language. I didn't spend a lot of time in it, but you said the enjoyment of working in a language... If you wanna get a project done, you either wanna work on something that you really enjoy the language or you're interested in, you need a reason to learn a language, or you need to be able to have quick rewards - you really want the thing that you're trying to build, and because you're using that language, you can throw it together quickly.

I think it's like Rails. I loved Rails, because it was like if I had a cool idea for a little app, I could throw it together in a weekend because of how proficient I could be in it. It didn't even have to come down to how much I loved Ruby or Rails itself, it was just "I wanna see this idea come to fruition, and with Rails I can do it in a weekend."

Maybe that's the motivation for the desktop app, that I know if I wanna throw together something for my Mac, it would take me forever trying to get Objective-C down enough to do what I need it to.

**Kelsey Hightower:** Yeah, I think that makes perfect sense when you talk to it that way. I think it's less "I think my language is the best language and the only language", it's more about -- and I think Carlisia brought this up earlier... Syntax isn't the goal. Putting words inside of a file and compiling it is not the goal. We just really wanna build something, and that is just kind of the price of a mission there. We don't wanna have to pay that twice. If you've already paid to learn one language and learn it well, and you're highly productive in it, you would like to kind of recoup those costs for other projects, and it kind of sucks that. You have to context-switch or learn something completely new before you can even start to work on the actual hard problem, which is your idea.

**Carlisia Thompson:** \[00:47:55.23\] Yeah, absolutely. I'm very involved with Go, as everybody can tell, and some people ask me "Why do you like Go so much? What's the big deal?" Go has pros and cons, and it's a matter of personal preference. I was ready to move to something new, and I chose Go, and that was it. I loved the community, but for me, I'm doing Go exclusively because I don't want to have the context-switch. For me it takes a tool, and that's why I'm doing Go now and Go is all that I'm doing, because I don't want the context-switching. It's costly for some people; some people can do it, but not everybody.

**Erik St. Martin:** I want it when I'm exploring, but not when I'm trying to get stuff done.

**Kelsey Hightower:** It's funny... My wife, she studied Spanish in college, so she went to Guadalajara to study, and I noticed that some of her friends that primarily speak Spanish as their primary language and English as their language - they also have this fatigue of context-switching when they're talking to certain people. If their whole day has been around family... I've gone to some gatherings where everyone is speaking Spanish, I'm just sitting there lost, but my wife would then just speak Spanish because it was easier for everyone else; no one else had to context-switch to participate.

I've seen that in kids, too. They'll just use whatever language that they use primarily - maybe at school they only speak in English, so when they come home, they may not wanna context-switch, so they continue to speak in English. I think a lot of people have that, regardless of programming language or anything else in life. I think we're creatures of habit, but I've seen it in other places as well, based on the environment.

**Carlisia Thompson:** And obviously, English is not my first language, and I wonder if I'm even more sensitive to context-switching with programming languages, because I also have the context-switching with the national language. Portuguese is my native language, I speak some Spanish (I studied), but I don't have a lot of opportunities to speak it, and obviously, I speak a lot of English during my day-to-day work and a lot of other things.

**Kelsey Hightower:** Carlisia, do you think you do that? Do you catch yourself preferring one language over the other maybe because it's easier to express your ideas in one language or the other?

**Carlisia Thompson:** Yeah, absolutely. English for me is a life-saver. It's so much easier for me to express myself in English, even though it's not my native language. If I get mad, it's English. \[laughter\]

**Kelsey Hightower:** Oh, wow!

**Carlisia Thompson:** Yeah... It's English, for sure. I don't even care if you don't understand it. \[laughs\]

**Erik St. Martin:** See, I think at a point if you get mad and you curse in a language, that's your native language, probably; that's the language you go to. \[laughter\]

**Mat Ryer:** It's weird, because when I get mad, I speak Portuguese, but I can't speak Portuguese. \[laughter\] It just sounds like it. Carlisia, thank you for speaking in English though, because otherwise I'd struggle, for sure. Actually, I noticed this in the Go community... I did a conference in Berlin and there'd be a group of people speaking German to each other, and I'd wander over as you do join a group, and quite quickly somebody would notice and the conversation would just switch to English. It would carry on, but they'd just switch it, and I always appreciate that.

I wish our language education was better in the U.K., because we really have no imperative to learn other languages, and that's a shame, because I feel like we miss out because of that. So I appreciate anytime anyone switches to English for us.

**Erik St. Martin:** \[00:51:53.18\] I wish I knew more languages, so that I could participate in conversations and not force everybody to speak English. I feel like that's something I probably wanna work on over the next couple years, too... At least be able to hold basic conversations with other languages that are becoming more prevalent. I hate the idea of people having to switch out of their native language to accommodate.

**Mat Ryer:** Yeah, you feel a bit bad.

**Erik St. Martin:** I always appreciate it when they do.

**Mat Ryer:** Yeah.

**Erik St. Martin:** Alright, so anybody have any other projects that they've come across that are really interesting? I know there's one that I came across that I'm kind of interested with Kelsey being so active in the Kubernetes world, to see what his thoughts are. Have you seen the Fission.io, Kelsey?

**Kelsey Hightower:** Yes, I've seen Fission.io... I have lots of opinions. For those of you that don't know what Fission.io is, it's an attempt to bring the serverless -- really the functions as a service paradigm to Kubernetes. Kubernetes is this application framework, it lets you deploy your containers and describe how they interact internally and externally, and Fission says, "Hey, let's take that framework and give people something like Lambda." So now you change the contract from having to produce a container to writing a bit of code that meets the interface so when a request or an event comes it - right now I think it's all HTTP - you're given a chance to respond to that event and carry on, and you'll be called at some point.

When I take a step back, to me what makes the whole serverless or functionless stuff worth doing is when you have a robust event system. Cloud functions in Google, Lambda in AWS - what makes those things powerful is the fact that you can watch an S3 bucket or you can respond to a message queue, or on the Google side you can imagine getting an email in Gmail and being able to process that as an event. To me, that makes functionless worth doing, but if you were to think of just doing functions in place of general purpose programming that we do now, I think languages like Golang really have reduced a lot of the boilerplate; it's like, "Hey, import a few packages, express your handler, grab a few configuration things, and off you go." We're really talking about maybe 30, 40 lines of boilerplate, depending on how many fives you have, and then you're right into the programming logic and you get the things that handle the hard situations, like needing to process multiple endpoints or multiple routes.

So I'm kind of on the fence with serverless as just a different way to program, but I am on board with this idea of providing a rich set of events from various sources - email, HTTP, events from the platform itself - and giving people an easy way to process it. I think of this as like a cron job on steroids... Being able to have that event model is really what makes function-based programming work, in my opinion.

**Erik St. Martin:** I'm with you there on the serverless... I'm still on the fence. How about you, Mat? Do you have any experience with serverless?

**Mat Ryer:** Well, as I said, I use App Engine quite extensively... The kind of projects I work on, having this serverless, just being able to push code and it's running and it's available - that's massive for me. That makes all the difference, actually. I would have to be an expert or know an expert, or at least somebody that could do what's needed to actually deploy things to maintain it and all that stuff, so... It allows me a freedom to focus on the app, rather than having to worry about making sure it's available, and things. So yeah, it's massive for me, I love it. I'll always do that if I can.

**Kelsey Hightower:** Yeah, for those that didn't pick up on that, Mat brought out a really great point - what we call serverless to me (and I think Mat agrees here) is not about functions as a service; I think it's about being able to focus on the application, and I think some platform-as-a-service such as AppEngine, maybe even Heroku, fall in this category, removing the need to manage what we traditionally think of as a server as part of the development and deployment process I think classifies as serverless.

**Erik St. Martin:** \[00:56:17.17\] That's a really good point. I know we're basically kind of running out of time here and I know Kelsey has a hard stop... Did anybody have anything they wanted to mention for \#FreeSoftwareFriday before we kind of wrap things up?

**Kelsey Hightower:** I do. I'll give a shoutout to the CNCF. They're doing a good job of extending what the Linux Foundation has done for many years for the Linux project. I think linkerd just joined gRPC; they're also housing Kubernetes, fluidd and Prometheus. And they do a really good job of taking what they call 'the cloud-native software stack', the things that give you the ability to produce these AppEngine-like platforms, giving them a home, giving them some governance, and a way to actually make sure that those projects stick around for a very long time... So I wanna give a shoutout to the people behind the foundation. We tend to talk about the people who write the code and fix the bugs - those are important, but I think those foundations that foster community and make sure that these projects outlive maybe the initial set of maintainers are super-important, so shoutout to the CNCF.

**Erik St. Martin:** Yeah, I agree. They're doing awesome things and building a collection of things for cloud-native. OpenTracing is another one that they handle. Mat, how about you? Do you have anybody you wanna give a shoutout to? This does not have to be a Go project. This is our time to recognize people or projects that make our lives better, that may not get the recognition they deserve on a day-to-day basis.

**Mat Ryer:** Well, GitHub is something that I think is actually awesome; I think we take it for granted a lot, but it probably does get the recognition it deserves, so I don't think that applies. I like Visual Studio Code, I've been trying that out recently... Although it still seems to be burning my machine down with CPU usage for the GoDoc for some reason, at the moment. Once that's fixed, it will certainly be one of the best editors for Go. And that's all completely free, which is nice.

**Erik St. Martin:** Yeah, people have really been loving the Visual Studio Code for Go recently. I'll name off two projects. Over the holiday break I started playing with software-defined radio a little bit. It's still very early into that and I didn't realize just how much goes into that, but two tools that have been really interesting... One is called Gqrx. They sell little $20 dongles that are called RTL-SDRs. If you're ever interested in it, get one of those and plug up Gqrx and look at what the FM band looks like, drawn out in a waterfall where in your local area you can see which frequencies come in stronger than others and tune into them and listen to the radio... Really cool.

The other one is GNU Radio. I didn't realize just how much you could do with that. And there's a GNU Radio Companion (I think that's what it's called) that goes along with it and you kind of assemble a workflow for the radio frequency to go through. Super cool tools, they do a ton.

**Carlisia Thompson:** Can I give a shoutout to something? I just realized that it's timely, because it's gonna happen next Wednesday. I just realized, it's just entering my radar that Gopher Academy has a big marker channel, which is the same as the Go Remote Meetup, that separate channel with separate events. And next Wednesday, 8th February there is going to be one, and the title is "Your First PR. Contributing to an open source Go project." I always love any effort to get people to contribute to open source, so I highly encourage people who have that intention to participate either alive, or afterwards it will be recorded.

**Erik St. Martin:** \[01:00:07.14\] Yeah, definitely... If you've never pushed a PR to any open source project, you should attend that. I think it's important for people to do and to give back.

**Mat Ryer:** The Go newsletter - and this isn't just because I happen to be at the top of it this week... I love getting the Go Weekly newsletter. You can google that, because anyone that doesn't have it should get it. That is a great way to learn about various projects and happenings in and around the Go community. I love it.

**Carlisia Thompson:** Yeah, we do, too.

**Erik St. Martin:** So I think with that we are out of time, and I wanna thank everybody for being here. Huge thank you to Kelsey for stepping in for Brian, definitely a huge thank you for Mat for coming on and for Gopherize Me... All the people I follow on Twitter are now cool-looking gophers. \[laughter\]

**Mat Ryer:** Yeah, just one last thing, this is quite interesting... I found an API basically for this merchandise website, and you basically just link to them and put an image URL as part of the ingoing URL (it's a query parameter) and then you can shop for merchandise that contains that image. They'll put it on a mug, or a T-Shirt, or something like that. It's a really cool API, and I just think... You know, we did it for Gopherize Me, because in theory people can buy stickers with that personalized gopher on or whatever... But I love the idea that anywhere that there's an image, we also have this button where you can just get that image on the T-Shirt. I was thinking of all kinds of different crazy places where you might like that, but I don't know if that's interesting.

**Erik St. Martin:** Oh, nice. I want my own personal gopher sticker. \[laughter\]

**Mat Ryer:** Yeah, at what point do we start to hate these little gophers? That's gonna happen at some point, isn't it? When they take over...

**Erik St. Martin:** They're taking over the world...

**Mat Ryer:** Well, there's already more possible combinations... They're enough for everyone on the planet to have almost like ten each, I think. It's insane, the number of actual different combinations of gophers on Gopherize Me.

**Erik St. Martin:** Oh, wow... So huge thank you to all of our listeners and to our sponsors, Backtrace and Ardan Labs' Ultimate Go Series. Definitely share this show with friends and co-workers who you think might be interested. You can subscribe by going to GoTime.fm. Follow us on Twitter, we are @GoTimeFM and if you wanna be on the show or have suggestions for guests on the show, topics etc. GitHub.com/GoTimeFM/ping. With that, goodbye everybody, we'll see you next week!

**Carlisia Thompson:** Bye!

**Kelsey Hightower:** Goodbye!

**Mat Ryer:** Goodbye, thanks for having me!
