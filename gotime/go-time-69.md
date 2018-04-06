**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 69, and today on the show we have myself, Erik St. Martin, Brian Ketelsen is also here...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Pinto...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And we're peak Brian today, because our guest today is Brian Scott, who happens to work for a mouse. Brian, you actually work on and kind of contribute to a number of open source projects... Do you wanna give maybe our guests who aren't familiar with you a rundown of your history and some of the things you work on?

**Brian Scott:** Sure. On my professional time, obviously, I work on a lot of web operations, guest facing applications, web technologies, cloud automation... But for my open source side of my life, I do maintain a project called [GolangFlow.io](http://golangflow.io/), which was heavily inspired by [RubyFlow](http://www.rubyflow.com/) by [Peter Cooper](https://twitter.com/peterc), out of London, I believe. And it's essentially just that - its' a replica of RubyFlow, but written in [Buffalo](https://gobuffalo.io/en), and obviously, powered by Go. It gives the community a chance to post their favorite news articles and whatnot, which actually get posted to Twitter, and then along with all the other Twitter bots that are scattered all across the Twitterverse.

I also contribute to a bunch of open source libraries. I do have a couple of favorites, for instance like [Colly](https://github.com/gocolly/colly) is my favorite library for scraping content off the web... I am also starting to get into the whole blockchain era, so I've been meeting up a lot of Go packages that kind of integrate with the blockchain.

**Erik St. Martin:** And if I'm not mistaken too, you're also kind of jumping into the serverless world as well, right?

**Brian Scott:** Yes, yes. I've been waiting a long time for Go support on the Amazon Lambda front. That just got released recently, so I've been heavily, you know -- even before that, I used a lot of other tools to kind of push functions either into the Google platform; Azure has their own platform for Azure functions, and I've also been playing around with OpenFaaS as well. I've been doing serverless for quite a while, but I definitely love the Azure native support.

**Erik St. Martin:** So [OpenFaaS](https://www.openfaas.com/)... What's your experience with that? That's one that I've been keeping my eye on but haven't had time to actually invest in it.

**Brian Scott:** I think it's great. I mean, especially for those teams or folks who necessarily don't have access to functions as a service within their current cloud providers. Not all cloud providers support that. It's great especially for environments that are on-premise, like with your local environment if you wanna provide that same type of service to your dev teams that you may support.

I think it's great, and I think there's gonna be a lot coming out of it. I've been kind of playing with it a little bit today, over the past couple of weeks. I think now there's even some full-time support that been added onto OpenFaaS. And I think Go is just a great contribution to that, because obviously, within functions you wanna kind of keep your memory footprint very low, as well as your execution time. And with the concurrency primitives that Go offers, I think that goes very well hand in hand.

**Brian Ketelsen:** \[00:04:19.20\] So how do you see functions sitting in the overall landscape of architecture? I struggle to understand where a good place to put functions in serverless is. Where do you see that fitting in architectures that you make?

**Brian Scott:** I think right now the landscape is still very open. I think folks are still trying to grasp the best approach when to use functions. Right now, I tend to use functions for quick one-offs, for instance like ETL jobs, or even transcoding jobs, where I need to quickly transcode a video file or maybe run some operation against an image file. But even among the API landscape, it's becoming a thing where you break your application more and more into microservices. Instead of having a whole dedicated service to a particular role in your application, it's now just split out as a function. Since functions are also so cheap to actually run, you can now build these massive applications broken up into many different functions.

And if you kind of look where we came from - we came from physical hardware, to running now these virtual machines within the cloud, to now running processes within containers, and now we're even going down even smaller, to where we're now just running functions. And if we think about it, now that there's this movement of pushing functions out to the edge - you see Cloudflare, Amazon, and even others pushing functions as a primitive out to the edge, you can even maybe see like "Hey, maybe my rooftop might become a compute layer where I can run functions", and now you can start leasing out that compute and that space.

I think we're gonna see functions become more of like a mainstream into actually running code. I definitely think that it's gonna be a big boost over the next few years towards functions as a service... And even with OpenFaaS, that's gonna allow even more groups to gain that experience and learn more about how they should design their applications and think more of "Hey, let me make this endpoint an actual function", instead of actually designing an entire service for it.

**Erik St. Martin:** So you mentioned the pushing functions out to the edge... For anybody listening who wants to do that, I have a beefy computer with a lot of idle CPU and a pretty good internet connection. I will happily rent it for functions at the edge in Tampa. \[laughter\]

**Brian Scott:** Well, think about it... Soon, everything can be compute, and you can start literally leasing out your own computing to anyone who needs that time or that power to actually run functions. Now with the whole cryptocurrency coming out, it becomes more of a thing, right? Like, "Hey, let me go ahead and lease this out for some type of actual currency." I think that's even gonna drive down the cost of compute very much.

**Erik St. Martin:** Yeah, I think serverless is really interesting. It's something that -- like, I've had my eye on for, like you said, ETL and batch jobs and things like that, but I haven't connected yet with this all serverless vision that some people have, where the web request comes in to a serverless function, which calls other functions, and there's no real full-fledged service that things have hit... And that might just be because of the use cases of stuff that I've worked on, but I haven't bought fully into that yet; maybe I just don't have the vision yet.

**Brian Scott:** \[00:08:08.28\] Yeah, it takes time. Back when I was doing serverless like a year ago, Go wasn't fully supported within Lambda yet. It was supported within other serverless frameworks, but I used [Apex](https://github.com/apex/apex) to quickly be able to tar up my full web app... And I remember writing a web app in Buffalo and actually running a full app within serverless, and just attaching to that back-end database that's running within like a managed service. But I think over time there's gonna be a lot of lessons learned, and there's gonna be a lot of breakthroughs in how we can use serverless and actually push forward.

**Erik St. Martin:** Yeah, that's true. I mean, it is still early. I think that there'll be better abstractions and things that kind of make it more approachable, right? It's not that I don't see the value in paying for compute by the second only as a request comes in; really, my not sharing the vision yet is really in lots of unanswered questions about the maintainability and debuggability of an application that behaves that way.

**Brian Scott:** Yeah, you're right, and I think the way that we debug applications and the way that we design for clean code and good architecture, best practice is gonna change as we move more and more into serverless, because it does require a different level of thinking. And again, people call it serverless, but just remember, there's still servers running behind those functions, there's still power and cables running into those servers, and then there's still a foundation in people, actual human beings still managing all that equipment. It's good to know there's still some type of operations behind it, there's still a foundation, there's still servers running this function somewhere. But I think as infrastructure climbs up the stack higher and higher, that line's gonna blur and soon, again, as we do move into serverless at the edge, compute is just gonna be a thing; it's just gonna be anywhere that you actually need it.

**Erik St. Martin:** Yeah, and I think you start thinking about that, really like short-lived vs. long-lived processes, because even as we adopt the cloud more and [Kubernetes](https://kubernetes.io/) as a service offerings, managed Kubernetes and stuff like that - essentially, that could be looked at as serverless, too.... Because your managed Kubernetes cluster could be set up to autoscale the compute behind the scenes for you, and all of these things; even the worker nodes end up managed at some point, right? We could end up in a world like that where it's just -- even some of these container-based services (ACI) we have, and some others, you just throw the container at it; all of those things, you don't really have to think about the provisioning of the hardware and all these things that happen. So serverless really is an interesting buzzword, because it could be applied to a lot more as managed cloud infrastructure evolves.

**Brian Scott:** Yeah, you're totally right. And I think the more and more that developers interact with serverless, we're gonna see a lot of new creative things come out of it... Like, just being able to run your own little hobby project, or being able to quickly test and outline something to see if this idea is actually going to work. You can quickly just throw that up as a function and really only pay for what gets used, especially if you're only doing a hobby site, or some actual quick test. It literally costs you nothing.

**Erik St. Martin:** That's true, too. You're not paying for all the idle time of your website running, and you get three hits a month, or whatever.

**Brian Scott:** \[00:11:54.12\] Yeah, exactly. You only pay for what you need. There's a lot of best practice that goes with that serverless; making sure that your execution time is small, making sure that your memory footprint stays within a certain limit. I think we now need to start thinking more of that. Before it was like, "I have a box with eight cores and 32 gigs of RAM. I don't really need to care about how much resources I'm actually using", but I think in the world of serverless you now have to pay more attention to that.

**Erik St. Martin:** I just really want [Kelsey Hightower's](https://twitter.com/kelseyhightower) [No Code](https://github.com/kelseyhightower/nocode) to catch on, so that I can retire... \[laughter\]

**Brian Scott:** Right, right. That project has blown up quite a bit.

**Brian Ketelsen:** My question around serverless is how do you map your orchestration, how do you see what your endpoints and how they map to URLs and which is calling which...? It kind of feels like serverless has the potential to be a big pile of spaghetti that you can't understand.

**Brian Scott:** I think as cloud providers support more and more of like the serverless era of things -- I think even now you're seeing such things like API gateways that are being layered on top of serverless technology such as Lambda, and functions as a service. You're gonna see these technologies start to bubble up that allow you to map your actual endpoints that are exposed out to the public to your back-end functions. And I think with that you'll start seeing new idioms of software come out to where "Hey, we can go ahead and map that out for you and create things..."-- like right now with Kubernetes, if you go to Weave Networks, you can just point Weave... You can go ahead and deploy that into your Kubernetes cluster; you can kind of get this visual map of how all the interactions between all your podcasts are actually talking to each other, and I think that same type of concept will soon be available for even serverless technology, where you can see all your functions, see which API mappings are actually mapped back to those functions and how they all interact together. You can start seeing maybe "Hey, how long did this function actually take to execute, and what is the latency between function A and function B and how that relates to the actual function C?"

I don't think we're actually there yet; I think maybe the most concepts are still starting to be thought about. But personally, I hope that we start seeing those types of tools being created. But yeah, that's still a problem; it is a spaghetti pool of functions, and unless you have that visual map, it's still hard to see, again, "What do all these functions do and how do they interact with each other?"

**Brian Ketelsen:** That makes sense. It seems like we're at the beginning of this process, and some nice patterns and configurations will evolve over time.

**Brian Scott:** Yeah, I believe so. I think with any technology, it just takes time for us to kind of flesh out all the problems and actually create solutions to those problems.

**Brian Ketelsen:** Fair enough. Let's move to another topic that I know you're deeply into. You mentioned a little bit earlier Buffalo... Can you tell me about building Golang Flow with Buffalo and how that's working out for you?

**Brian Scott:** Definitely, yeah. I first met [Mark Bates](https://twitter.com/markbates), the creator of Buffalo, at GopherCon last year, in 2017. But prior to that, we were actually talking quite a bit. For years -- I got started with Go many years ago, and at the time I had a mentor who was kind of teaching me the fundamentals of like AI and machine learning, and he really wanted to get me into Erlang. Now, at the time I was a big Rails guy; I was all about Rails. I just loved the ease of the tooling, I loved the ease of being able to have access to packages and libraries that were able to solve things. For example, if I needed to actually send e-mail, I could use the mailer action or the mailer controller to actually be able to add the mail functionality into my application.

\[00:16:17.00\] So when Buffalo came out, it was just like a revelation for me. It was something that I wanted to jump into right away, and I saw the promise that Buffalo provided to developers, to be able to easily extend and kind of create that same ecosystem that Rails did for Ruby.

During my Rails days, I was deep into things like RailsCasts and I followed Peter Cooper and saw all the cool things that he built, and I felt like you know what, for me to quickly learn Buffalo would be awesome if I can just go ahead and create some type of application that allowed me to utilize all the functionality of Buffalo. So actually during GopherCon last year, I sat with Mark Bates and I had this idea to create something like RubyFlow, but that allowed me to learn all the ins and outs of Buffalo.

So literally, within just like a couple of days, I was able to scaffold and get the majority of the [GolangFlow.io](http://golangflow.io/) site fully operational, and it actually took off pretty quickly. I was able to see that there was a number of users that were creating accounts, that were posting their own news articles and updates on technology that they were passionate about. Then I quickly thought, you know what, it'd be cool if I could tie this into Twitter. So I went ahead and easily extended Buffalo to actually do some pattern-matching and actually pick out which articles it thought would be popular to push out onto Twitter and use the Golang hashtag.

It's been an amazing experience. I'm able to prototype and to literally test out new features pretty quickly, and the roadmap, at least from what I've seen as far as pull requests and issues - there's just a lot more coming, and I think recently now associations just got added to the [Pop](https://github.com/gobuffalo/pop) package, which allow you to do different database actions with associations, which you had when you were developing in the Rails space.

**Brian Ketelsen:** Yeah, that just landed last week in Pop, and it's very exciting. It changed a lot of the code that I have, from many lines down to just one or two. I think you said it really well about the idea that Rails heavily inspired the workflow of Buffalo, but I think my favorite part is the fact that it still feels like I'm doing a Go website.

**Brian Scott:** Yes, it does. It does.

**Brian Ketelsen:** I don't feel the magic, I don't feel like I'm trapped in some crazy paradigm... It's just Go web development, and really staying in defaults.

**Brian Scott:** And I think it's great how open it is; if you're a developer and you do wanna change something, you do wanna swap out something, you can. There's nothing stopping you from actually doing that. And again, it allows you to use Buffalo the best way that you wanna use it. And again, you're still developing in Go, you're still following all those best practices and you still have access to all that best tooling. You can still follow whatever workflow you are normally used to using, but I think Buffalo does make it easier for you.

**Brian Ketelsen:** What kind of traffic spikes have you seen with [GolangFlow.io](http://golangflow.io/)? Do you have metrics on your requests?

**Brian Scott:** Yes, so far, as far as RSS feeds -- so there is an RSS feed that another contributor to Golang Flow actually added, and we so far have about just under 2,000 subscribers on the RSS feed, mainly from outside the US. As far as users, I would say we have about 120 logged in users into [GolangFlow.io](http://golangflow.io/) right now, and that was just in the past month-and-a-half.

\[00:20:04.28\] Ideally, I get roughly I would say about 200 pageviews a day. So it's pretty good. The average user spends about 5-10 minutes, just browsing through all the pages, or at least all the posts that are currently on Golang Flow.

So it's totally gaining traction... I think it's still fairly new, but again, it's really for more of like a learning exercise, and what I do like is that I'm already getting issues where there's other developers out there that are using it to actually learn Buffalo. They're actually going in and seeing how the application uses different features of Buffalo. So whenever a new feature or a new generator gets added into Buffalo, I do try and think of some way to integrate that into Golang Flow, just for others to actually learn how to use that properly.

For instance, when Mark added the whole background workers into Buffalo, I quickly thought of "Hey, I can use this to actually automate the tweeting out of posts out to Twitter." And same thing for the actual mailer. I do plan on adding some type of like newsletter type of a deal into GolangFlow to where hey, if you don't want to go to the site every day, or if you don't wanna be subscribed to the RSS feed, then you can go ahead and just quickly sign up to the newsletter and just get a weekly e-mail of all the recent posts... And we use the actual mailer generator within Buffalo.

**Brian Ketelsen:** That's nice. So is there any real social component to this? Is there up-voting or down-voting, are there comments?

**Brian Scott:** I do have plans to add things like up-voting and down-voting, I just don't wanna give the sense that -- if you're a developer and you're passionate about something that you've just built and you've posted there, I don't want to give like a negative feeling that "Hey, it got down-voted." So it's been something that I've been thinking about... Instead of down-voting or up-voting, I would think about maybe adding likes and comments. So a post can get X number of likes, and then you can also add comments if you want.

But there is a sharing functionality, so if you do see a post that you like, there's a little toolbar that has Twitter, Facebook and such, to where you can easily share those posts out.

**Brian Ketelsen:** That was one of the things that I kind of like most about Golang Flow, is that there is no comment section, so it never turns into Reddit or Hacker News, and there are no up-votes or down-votes, so it's just a steady stream of good posts. I can look at the ones that are titled well to get my attention, but I just... I like not having all of that socially voty stuff.

**Brian Scott:** Yeah, I wanted to keep it very neutral. The good thing is that right now when you create a post in Golang Flow and you actually add your title, it's not very apparent. I need to make those stand out more. But you can actually add your own hashtags. So if you want your posts to stand out in certain hashtags on Twitter, you can actually add hashtags into the title, and those same hashtags would be used when the background worker actually runs to tweet your post on Twitter.

**Brian Ketelsen:** That's really cool.

**Brian Scott:** Yeah. So yeah, it's been growing. It's a growing project. Luckily, it doesn't take too much of my time, and even when I do spend some time on it, those features I can usually code out pretty quickly.

**Erik St. Martin:** You know, I actually feel really guilty about this, and nobody tell Mark Bates, but I still have not written anything in Buffalo...

**Brian Scott:** I mean, I think you really have to find what you -- I mean, for me Buffalo was "Hey, I want to build something in it to actually learn it." I don't consider myself a Go expert at all; I'm still learning, just like everyone else. You know, there's gonna be people out there who wanna use frameworks, there's gonna be people out there who wanna just use the standard library, and that's what they're most comfortable with.

**Brian Ketelsen:** Right. So I think we need to talk about THE topic of the week, because there is one thing that's happened this week in Go, and I'm not moving directly onto news yet, but there is a thing that happened, and that's the big drop of the [Vgo](https://github.com/golang/vgo) app...

**Erik St. Martin:** \[00:24:13.05\] Go 1.10? Nah... \[laughter\]

**Brian Ketelsen:** [Versioned Go](https://github.com/golang/vgo). If you haven't heard because you aren't tied into the news like I am with a drip feed every morning, Versioned Go is a fork of the Go tool that supports versioning capabilities; it replaces go get, it replaces dep, and it allows you to create reproducible builds, and it does that by creating a module file, go.mod, that describes your module and its dependencies. And it's a big deal because it's learning from [dep](https://github.com/golang/dep), but it's mostly not dep. So it's completely new.

**Erik St. Martin:** If you haven't been reading these, at the point of this recording there's been five posts on [Russ Cox's blog](https://research.swtch.com/) kind of describing the problem and how Vgo works, how that mod file works, how imports work, a new algorithm he's designed called minimal version selection, and rumor has it there's two more to come, possibly one more of those today.

So this has been a big discussion, especially with everybody kind of recently jumping on dep.

**Brian Scott:** Yeah. Didn't Sam just post a blog post about dep in Vgo not too long ago as well?

**Brian Ketelsen:** He did. Just a day or two ago he made a response to the Vgo post, talking about the technical merits of the Vgo ideas, and his concerns about the implementation. It wasn't really deep in terms of technical problems, it was more of an introductory post that said he was going to be posting more.

**Brian Scott:** Got it, got it.

**Carlisia Pinto:** He also mentioned he is going to be working on Vgo.

**Erik St. Martin:** Yeah, I think he has been kind of set as a resource to work on some components of Vgo; I forget which ones those are now... But development of dep will still continue, and I believe he said that he's gonna have some more posts coming out. I know that him and Russ have had lots of discussions as well about some of his concerns.

**Brian Scott:** That's good.

**Erik St. Martin:** It's interesting, right...? I accept that Russ and Sam probably know much more about dependency management and building that graph of dependencies and things like that than I do, but I actually really like the Vgo approach, even the minimal version selection. I think that there's some confusion around it, but I actually really like how simple that is... Because I've been bitten more than once by the unintentional updates of transitive dependencies lurking crap and that's just a pain to solve, it's a pain to get back to the old version...

**Brian Scott:** I agree with you. I think there has to be some level of deep effort to solve the problem. Dep definitely solves a lot of problems, and I love dep. It solved all my use cases. And yeah, I've totally been bitten by that too, where something changes down the stream and it really affects you and you really can't find the previous version of it... I don't have that problem too many times, but I'm glad that Sam and the team are definitely working, and hopefully they'll just take the best things out of both Vgo and dep and create something better.

\[00:28:13.13\] I was hoping to see dep actually brought into the Go toolchain, and actually have that native command. I was actually waiting for that. But if there's more time that's needed to actually flesh out a fuller solution not only for versioning, but as well as for dep management, I think they should definitely go ahead and do that.

**Erik St. Martin:** Yeah, I mean, there's a couple points with it, right? I think it's the minimal version selection that is where Sam is kind of debating that that may be too simplistic, and I think that's okay too, right? I know Russ and the team, they wanna move quick and I think they're anticipating trying to get this in to 1.11, and maybe solidified by 1.12... But I know that they will kind of hold back if there seems to be issues, and maybe they're somewhere in between.

But this whole mod file approach I think is really interesting, because tools like dep don't really leverage the dependencies of dependencies, right? Like, transitive dependencies. The dep file is great for that top level, but it's not doing anything for the dependencies of dependencies, and I really like that about the mod file - trying to make sense of your transitive dependencies and what's the best thing to select.

**Brian Scott:** You're absolutely right. I definitely know when you're designing reliable software, you definitely need to make sure that you have those dependencies locked down. Some languages do it better than others, but I think that definitely needs to be solved. I would love to see some type of an early version of that definitely put out there sooner than later.

**Erik St. Martin:** I also really like that it's very much in line with the ease of use of go get that we're used to. I think on the roundtable Russ had mentioned that there's gonna be a post -- the post coming out today I think is the one that's gonna talk a little bit about proxies. But you can look inside the code itself and everything, there's gonna be a notion of proxy servers, so that you don't necessarily have to go directly to GitHub or wherever and have the version control tools locally to fetch that. I think that's a super, super-powerful concept as well, especially when we start talking about people, the whole left pad type issues, and people just kind of taking their toys and going home... And being able to have kind of like a canonical place, maybe even internally, that your company has vetted these particular packages and you can fetch them from there.

**Brian Scott:** I would tell you that that will go very, very far with enterprise, working for the enterprise. Again, this is my own opinions and views, but that will go very far in the enterprise, especially when security teams need to vet packages they are fetching out to the world. If you look at how we write Java now - there's these tools like Nexus from Sonatype that will allow you to, again, have those proxies so you can pre-cache those dependencies internally, and then be able to actually vet them before you actually include them in production software. And I think that will go a very long way into furthering the use of Go as an enterprise development language.

**Erik St. Martin:** Yeah, I think it's gonna be super powerful to do that, and for reproducibility, and being able to have central caches, and things like that. In the enterprise world, without a doubt, having projects vetted is gonna be huge, and just kind of having your own central repo that gets updated.

**Brian Ketelsen:** \[00:32:15.15\] Yeah. You know, I've been shouting that from the mountaintop. Two conference talks that I've given in the last year have been about how much the enterprise needs more control over that and more reproducibility. I think the proxy idea in Vgo will get us much closer to what we're looking for.

**Brian Scott:** Yeah, I totally agree. And even just talking about it now, I really wish that that was into full tuition right now. I could totally use that like right now. I can't wait until that hopefully becomes like a thing, because that's really the type of solution that we need right now.

**Brian Ketelsen:** It's funny, because we were keeping this relatively secret, but I'm reading the last blog post from Russ; I don't think it's today's post, it's yesterday's post... Somebody said something about "We really need a centralized repository for Go modules" and yadda-yadda-yadda, and Russ replies "It's very important to me that there be mirrors that are easy to run, for example Brian Ketelsen, Erik St. Martin, Jess Frazelle and others on their team are starting to work on a plan about what this might look like." Now the cat's out of the bag... Russ dropped the news for us. We are working on a centralized repository for Go modules with Vgo support, and that's very important to us.

**Erik St. Martin:** Yeah, with the proxy ability, so it'll be compatible with the proxying... And also, another concern too is the most recent post of his talks about kind of verifiable builds, where looking at the SHA and things like that to make sure that things haven't been tampered with... But there's also kind of this whole provenance issue too, when we start thinking about that. When we start talking about proxy servers, "Have I been served the actual copy of it, or has it been tampered with?" Even the sense of somebody taking ownership of a repository - it got deleted, and somebody creates a new version there, and you upgrade to it... There's a lot of these types of issues, and we're starting to kind of sketch out some ideas of what we might be able to do to kind of solve provenance and integrity issue there, using cryptographic signatures or things of that nature.

**Brian Scott:** I was just about to say that, you took the words right out of my mouth - the blockchain has so many different applications... If we look at tools for instance like [Keybase](https://keybase.io/), that actually publicizes your keys onto the blockchain to actually maintain that integrity - those same principles can be applied to proxies.

**Erik St. Martin:** Yeah, and it'll be interesting to be able to do stuff like that and to have mirrors of these things, and think about sharing and everything... I can't say that we have a finalized idea, but we're definitely having discussions. We are diagramming some stuff out and bouncing it off people, and when we get more details on what these things will look like and have some working examples, we'll definitely let the world see them. But it is interesting to think about... Like, it's a scary thought; somebody takes control of a proxy or whatever, how do I guarantee that I'm getting the code that I think I'm getting?

\[00:35:51.29\] And especially because we all have this inherent nature of just go install and run it, right? This isn't unique to Go. People have been gem-installing stuff and everything for ages...

**Brian Scott:** [curl|bash](https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/) same thing. So yes, you're absolutely right. I mean, even with Docker pull - you're docker-pulling some image down from the hub. You don't know if it was tampered with. So yeah, we definitely need to create solutions to these problems.

**Erik St. Martin:** Carlisia, have you had a chance to look at any of this stuff?

**Carlisia Pinto:** No, I did not... I started looking at the post and I saw how tiny the fonts were, and I said, "Um, nope." No, I'm joking. I can make the fonts larger, but seriously... Does it have to be that tiny? No, it's a lot of stuff there, I haven't had time; this week was super busy for me... And I'm actually very tired today; I'm sorry I'm not participating as much.

My biggest question is about having the central repository for packages which you guys were just talking about... I think this is a necessary step to have...

**Erik St. Martin:** Yeah, and I think one of the important things is that it not be a forced central repository either... That it can be kind of opt-in, right? So if you wanna just go get stuff straight from GitHub, by all means, you do that... But if you want something that is maybe more trusted for verification of signatures and things like this, then maybe you leverage the central repository.

**Brian Scott:** Yup, I totally agree with that. It's true.

**Carlisia Pinto:** Yeah, and also having the ability of having your own central repository, like Brian was talking about.

**Erik St. Martin:** Oh yeah, without a doubt. Yeah, people need to be able to run their own mirrors or proxies, or whatever we decide the nomenclature for this is...

**Brian Scott:** Yeah, that's gonna be big, being able to actually do that... Especially to have it behind your firewall and mirror from actual trusted proxies.

**Erik St. Martin:** Alright, so what else do we have for news this week? [1.10](https://blog.golang.org/go1.10) came out, which introduces all that built-in test caching, which should make things run much faster. I'm trying to think of new features that came in Go 1.10...

**Brian Ketelsen:** I don't remember there being a ton.

**Brian Scott:** Yeah, there wasn't a bunch. I skimmed through the [changelog](https://golang.org/doc/go1.10) but I wasn't able to actually really remember anything that was major, besides the caching piece. There was a caching piece I believe for tests, I believe. There was a caching added to how test are run.

**Brian Ketelsen:** Right. If the code doesn't change, then the test results are cached, so you don't actually rerun the tests for packages that haven't changed code.

**Brian Scott:** Correct, yeah. That was the thing that stood out to me the most. But again, I didn't finish reading all the changes, even though I have 1.10 installed on my laptop right now.

**Erik St. Martin:** Yeah, I have 1.10 installed, but I can't say that I've written a line of code... Well, I guess I did - yes, I did - but I haven't written much code against it.

**Brian Scott:** I've written I would say quite a bit in the past couple of hours on 1.10.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** Alright, so we talked about all the Vgo stuff... In the show notes we'll drop links to all of the posts that exist. I don't know whether it's reported, but there was actually a roundtable just before the recording of this show where Jess Frazelle, Sam Boyer and Russ were all on, talking about dependency management. If that's recorded, I will [link](https://www.youtube.com/watch?v=sbrZfPgNmfw) to that.

What else have we got? I came across a really cool project called [Gitleaks](https://github.com/zricethezav/gitleaks) as well, that's super cool for scanning your Git repos for leaked credentials or services.

**Brian Scott:** \[00:40:26.25\] That's really cool, especially when a lot of folks -- you don't really think about it, but I'm sure everyone's guilty of putting some type of secret into Git.

**Erik St. Martin:** Yeah, it happens all the time by accident... All the time.

**Brian Scott:** Yeah. At least now there's something that can help you locate those secrets and remove them. I remember when I used to find secrets in my repos I would have to use that tool BFG; that would literally blast away all the Git history for that particular commit...

**Erik St. Martin:** Oh, yeah...

**Brian Ketelsen:** I remember that. That was... Wow.

**Erik St. Martin:** There's another one too for doing stuff like that, and I can't remember the name of it. I pulled it up for somebody like a year ago.

So here's another interesting one - who read the [Cloudflare post](https://blog.cloudflare.com/using-go-as-a-scripting-language-in-linux/) about using Go as a scripting language?

**Brian Ketelsen:** I did!

**Brian Scott:** I did. I read that entire post, and I even gave it a try. I even actually followed and actually tried it out.

**Erik St. Martin:** Yeah, I thought that that was really interesting. It would be a fun experiment to see how many people start using Go for things like that, instead of Perl or Bash or PHP...

**Brian Scott:** I think it'd be great. You just have to think about like, okay, you have to push this minor change to all your boxes, right? You have to push that, and I believe you have to go ahead and extend the exec within the kernel to actually support the .go files. I think that's just something that you have to think about when you do wanna begin scripting with Go. But I think it's a great post, and I actually posted that on Golang Flow, actually.

**Erik St. Martin:** The interesting thing though would be that not a lot of people wanna do that work. But if it could get baked in the distro to begin with, that would make it a lot easier to just use it as a scripting language.

**Brian Scott:** Yeah, it would be great. It would be awesome, actually.

**Erik St. Martin:** So another cool project I've mentioned before is [Pixel](https://github.com/faiface/pixel), which is like a 2D game library written in Go. They released version 0.7, and I'm trying to remember the stuff that changed with it... But I think it's been like a year or more since the last version. All this stuff with Vgo has my mind crowded...

**Brian Scott:** \[laughs\] Yeah. Definitely tons to read. So is Pixel new? I was actually searching for a game library just the other week, the past week, because I've been reading this book "Ready Player One" and it got me thinking about all the '80s games... And I wanted to develop a game in Go, and I was actually looking at game libraries, and actually I did come across that one, I just wasn't sure how maintained it was.

**Erik St. Martin:** \[00:43:27.16\] It's been around for a while; I think it has been like a year or so since it has had an update. There's a couple of others I'll think of and I'll send them to you...

**Brian Scott:** Great, great.

**Erik St. Martin:** ...but there's been a few game libraries and 3D things that we've brought up on the show before.

**Brian Scott:** Yeah, I believe [Francesc Campoy](https://twitter.com/francesc) wrote that whole [Flappy Bird on the Just For Func](https://www.youtube.com/watch?v=aYkxFbd6luY&index=27&t=0s&list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ). He actually literally codes an entire game in like two episodes.

**Erik St. Martin:** Yeah... I need to watch those again.

**Brian Scott:** Yeah, they're really good. He just came up with one about [dependency injection](https://www.youtube.com/watch?v=ifBUfIb7kdo).

**Erik St. Martin:** Oh yeah, I saw that one mentioned; I haven't watched that one yet.

**Brian Scott:** Yeah, they're good. They're good.

**Erik St. Martin:** Alright, so did anybody have any other projects/news/articles? I will take that as a no...

**Brian Ketelsen:** That's a no.

**Erik St. Martin:** Did anybody have a project for \#FreeSoftwareFriday? Anybody you wanna give a shout-out to?

**Carlisia Pinto:** I wanna give a shout-out to the one you're gonna give a shout-out to, so why don't you go first? \[laughs\]

**Erik St. Martin:** So mine for this week - I wanna give a huge shout-out to Russ Cos and Sam Boyer and everybody else who has been working on dependency management tools - the Glide maintainers, GoVendor, GoDep - just because this has been a problem for us, and yeah, we may cycle through some of these while we get to the right approach, but I'm glad that people are investing their time in trying to solve this problem and come up with the final solution. And I know not everybody can agree sometimes on what that is, but it has been nice to see people who care deeply about a problem that we felt was getting ignored for a long time.

**Carlisia Pinto:** Yeah, definitely not a trivial problem to solve.

**Brian Ketelsen:** Yeah, I'll jump on that bandwagon, too. I think that's a wonderful group to shout-out - Carolyn Van Slyck, Matt Farina, Matt Butcher, Daniel whose last name I can't pronounce... Lots of people working on dependency management in Go. Thank you to all of them for moving us forward to here.

**Erik St. Martin:** Did you have a project, do you wanna give anybody a shout-out to, Brian Scott?

**Brian Scott:** I want to say recently I've been using a lot of Colly, so again, out to the maintainers of Colly; it's a great package and library. Also, again, to the whole dependency management space. That's a very big problem to actually solve. I'm really grateful for all the time that everyone is giving to actually try and help solve that problem. Despite any differences in opinion, it's still great to see that everyone's getting together to actually try and solve it.

**Erik St. Martin:** Alright, so with that, thanks for listening, everybody. Huge thank you to Brian Scott for coming on the show today; we got to talk about a lot of fun stuff, and I got to get a little more educated in serverless, which is always good.

**Brian Scott:** Yeah. \[laughs\] Awesome. Well, thank you!

**Carlisia Pinto:** Thank you, Brian!

**Brian Scott:** Thank you for having me, this was a lot of fun. I really enjoyed it.

**Brian Ketelsen:** Yeah, we've covered all kinds of crazy topics this week.

**Erik St. Martin:** Alright, so with that, I definitely encourage sharing the show with fellow Go programmers; you can head over to GitHub.com/gotimefm/ping if you have suggestions for guests or topics. Follow us on Twitter @GoTimeFM, and with that, goodbye everybody. We'll see you next week!

**Carlisia Pinto:** Bye!

**Brian Scott:** Goodbye!

**Brian Ketelsen:** Bye!
