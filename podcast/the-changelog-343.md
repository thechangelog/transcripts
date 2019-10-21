**Jerod Santo:** So we're talking about OpenFaaS (Functions as a Service), a thing that's out there to make serverless functions simple. Alex, open up telling us about OpenFaaS; start with the start, and tell us where this project came from.

**Alex Ellis:** Yes. When I think about where OpenFaaS and why I even started it, it feels like such a long time ago now. In the container world we've seen many projects come and go, and one of those projects in particular is Docker Swarm. It's perhaps not quite as popular as it once was, and Docker is not going to market with its own version of Kubernetes, on Docker Enterprise Edition. But if you wind the clock back to 2016, I was a Docker Captain, which is part of the influencer program that they set up in the community, and I was trying to find new ways of using distributed computing with Docker, and at the same time I was playing with AWS and the Lambda service when it's programmed my Alexa...

And what I realized was that I was quite locked into this Lambda developer experience, and also I couldn't run it on my own machine; I couldn't use the infrastructure that I had, or the technology that I was studying and interested in... So I started to kind of prototype and find a way to run those Alexa Skills on my own hardware; at the same time, that thought experiment led me to DockerCon in May 2017. There I presented this cool hack to 5,000 people, and it turned out that they really loved the idea of it, and it captured their imagination.

Things were pretty early back then, and the project was just called FaaS, and hadn't got a community around it. I did a call-to-action at the end of the talk to come and help on the project, and basically almost nobody responded to it. I learned how to build a community, and how promote content, and how to rally people around an idea... When you look back from now, it's kind of an amazing journey that I've been on with it.

**Jerod Santo:** Yeah, a global community over 190 contributors... Adam, it's kind of funny mentioning December 2016, May 2017 - I was thinking back to our coverage of serverless on the Changelog and on JS Party, and I believe on the Changelog it started back in early or mid-summer 2017 with Pam Selle...

**Adam Stacoviak:** \[00:04:11.02\] Yeah.

**Jerod Santo:** We sat down with her at OSCON, and I think that show was called "The Serverless Revolution" or something... But even on that show, she said "It should be called functions as a service." That was one of kind of her rallying calls; "It shouldn't be called serverless. It's a misnomer, it's a problem." The name "serverless" has gone through the wringer, but the hypercycle - we're still on it... But it's interesting that at that time, Alex, you were out there building a thing called FaaS, and eventually OpenFaaS.

**Alex Ellis:** Yeah.

**Jerod Santo:** So you were ahead of the game there. Let's talk about serverless itself, before we get specifically into OpenFaaS and what it offers... Because it's been a thing -- like I said, we've been talking about it for a few years now; I'm sure we weren't right there at the bleeding edge, as you probably were in December 2016. A lot of people were trying out Lambda, there's been people that moved their business over to it, there's been people that have tried and had false starts... As you said, there's lock-in problems, there's visibility and tracing problems... There's lots of unsolved problems, or problems that are being solved.

In a recent talk you gave - I think it was maybe a year or two back ago - you talked about the serverless hype cycle, and at the time of that talk it was kind of on the upswing of excitement. There's a point where the hype reaches its peak, and we weren't there yet with serverless as an idea and a construct. Where are we at now, in your estimation, and where are we heading?

**Alex Ellis:** Yeah, this is what I mean - in the container and tech world we're in a bit of a time warp. That was only a few months ago in October, and yet it could have easily been two years ago and still have applied just as well. The hype cycle is a completely normal part of our industry, and just like the seasons, the hype cycle will continue and it will be the next technology, and the next technology.

One of the things that I really like - I saw a graphic on Twitter by a guy named @sebiwicb and it's a picture of a guy shouting "Service mesh" over and over again... And then there's some people underneath him saying "He's broken", "Not thing again", "Put him with the other ones." And they were all shouting "Infrastructure as code", "Blockchain", "Serverless".

**Jerod Santo:** Right.

**Alex Ellis:** And I think it just reflects how, as engineers, we do like people to be honest and say things how they are, and we want to know that technology can solve all our problems... And I think when the next thing comes along, and it's clearly over-hyped, hyper-marketed, but it doesn't have the substance to it, we get frustrated as a community. But my intent in that talk was to kind of tell people "Look, this is normal, and it's okay, and it's gonna get worse." But the promise of the hype cycle is once we get to peak expectations, we'll then get disillusioned for this and then finally figure out what it is useful for. Some people are on that journey already, but I think the hype cycle is really referring to the industry as a whole, rather than the early adopters.

**Jerod Santo:** Yeah. That's funny, I'm now looking back at the video; it was just last October, published in January - I'm not sure why I thought it was so far back, but like you said, things move so fast... That's actually one of our oldest sayings, is "Open source moves fast. Keep up", so we are well-aware of just the fast-paced moving of our industry, and it seems like in the operations space, the Kubernetes world specifically, things have been moving so fast, and there's been a Cambrian explosion of different offerings.

We've had the CNCF on the show laying out there their landscape for cloud-natives, and... To me honestly, it sometimes looks a little bit like a minefield or a quagmire. I've often asked people "When's it just gonna shake out and we're gonna have some winners declared, so we can just use the technology and benefit from it?" I think we've seen that with orchestration and Kubernetes, but definitely at the serverless platforms -- well, maybe OpenFaaS will be the cream that rises to the top of the crop.

\[00:08:03.01\] Interestingly, when I came across this project, it was on a blog post by Abraham Ingersoll. He had laid out the state of open source serverless platforms, and what he said about OpenFaaS actually got me to contact you. He said "OpenFaaS is utterly fascinating. It's the only contender boasting a license other than Apache 2.0. I'm not sure if that's 100%, but it is MIT. It's extremely community-centric, added Kubernetes support in mid-2017 after originally targeting Docker Swarm, and it's deliciously lean." Do you think that's a fair description of what OpenFaaS is?

**Alex Ellis:** \[unintelligible 00:08:41.10\] on his initial post, and one of the things that I am learning as a maintainer and as somebody who's really proud of what the community has created is how to influence people that have done their own research and maybe have some gaps in it... So we worked very friendly with Abraham, he was a really nice guy... And he's written something that's very generous, but I think it's also true... And yeah, it's MIT-licensed, when most of the other projects are Apache 2.0. One of the main reasons that corporates pick Apache 2.0 is because it theoretically offers a patent protection on top of MIT.

One of the reasons I picked MIT was that I was trying to figure out what the best open source license was gonna be for the project. I wasn't particularly experienced with it. I'd used MIT a little bit in the past, and it was actually something that I could read and understand very easily. In contrast, Apache 2.0 I think is much more complicated, and so it went well with the values of the project, of making this simple and making it accessible to a community.

**Jerod Santo:** Well, let's see how simple it is just to describe what it is and what it offers, maybe from a first run perspective of somebody who says "Okay, I would like to run some functions as a service. I'd like to execute my functions that I have or haven't written yet (choose your own adventure) on a cloud, and I heard OpenFaaS is cool." So what happens next? Tell us the use case and what it feels like to use it.

**Alex Ellis:** Yeah, so the easy way, I find, to kind of relate this for people is to look at what experience they may already have. The experience many people may have is of a cloud function, where often times text is typed into a text edit box on the UI; there's no compilation checking or unit tests, there's no good engineering practice there... It's basically hacking in production. That's then deployed to an endpoint somewhere, and whatever code you wrote in, if it's supported by that platform, will then be executing for your end users.

Some of those platforms now allow you to upload zip files, but again, there's some potential problems with how dependencies might be managed for some of the code that you need to upload.

With OpenFaaS it takes a slightly different approach. It looks at what's the point at which we can consolidate. At the time, I believe that to be the Docker container, and I still strongly believe that is the industry standard way of shipping code. With OpenFaaS you use a CLI to scaffold a function in whatever language you care about (or microservice). You can also use a plain Docker file. Then you'll handle it just like you would in a cloud function; that will receive a request, and then you populate a response.

A really nice, real-world example - and it might sound contrived, but this is actually a real-world example - is resizing images. There's a start-up out of Bangalore called Iconscout, and my main contact there just recently wrote a blog post on the OpenFaaS.com about how they're using OpenFaaS to resize all the images for their catalog of icons and stock photography.

\[00:12:04.07\] He found that very simple, that developer experience of knowing exactly what Npm module he needed, how to access it in Node.js, and then it was really just a case of him looking at whatever had been configured for that deployment, looking at the request coming in, reading a file, and then outputting one at the end. That's really one of the classic use cases that people often talk about with serverless.

**Jerod Santo:** Yeah, it seems like the sweet spot is -- I don't know if one-off, or ad-hoc is maybe a better term... Ad-hoc functions or functionality as you want to have available to you or to another service. Maybe even you think of them as a microservice... And in terms of where it runs and how it runs, and all these other things that we usually have to think about - provisioning, and scaling, and everything else - it's like "I couldn't be bothered. I just want this to run somewhere, when you hit this endpoint." It seems like that's really the sweet spot.

**Alex Ellis:** Yeah... I mean, the way that I often introduce the paradigm is to look at what is serverless anyway, and from my perspective, it's an architectural pattern or an approach to designing systems where there's a decreasing concern for the infrastructure that this stuff is running on, or how it's packaged, and also what services you're consuming and where they live. It just becomes a configuration or a string or a connection string.

Microservices tend to have multiple responsibilities that may be quite cohesive. It might be an employee, or an enrollment service that maybe creates updates to leads, and does a few other things; maybe generates a report. In the function world, you may have those as separate endpoints or separate deployments that can scale independently, and you may actually find that they live quite well together as a single function... But really looking at decomposing things down -- and those microservices really aren't micro enough, in some cases... And it might actually be that we can get this promise of code reuse that we never really realize there's an industry... And finally, you get that through functions. So the resize image can now be used by a number of other functions, or a number of other microservices.

**Jerod Santo:** Yeah, I think the real mental hurdle for folks - and I guess I'm just maybe speaking for me; so I won't say for people, but for me - with this is what scale of function is appropriate? And I think the idea of a microservice, as you said there - maybe it has too much functionality to be a single function as a service. Maybe it's a couple of functions talking to each other. When I think about functions that I write in my software, sometimes they're five lines of code, and then you have other ones that are tying together other things, and you look at it and you're like "Wow, this is a really big function." So I wonder, are there heuristics, or is there best practices on the size and scope of a function that runs as a service, that are being developed or that are out there to be read?

**Alex Ellis:** Yeah, so you can get an opinion on everything these days, and there are those, there have been some Twitter threads that I've watched, and people have said "Functions must x, y and z. This is a best practice." Then the way I've seen users over the last 2,5 years use OpenFaaS is they're solving real problems, and they're doing it in a way that makes sense to them, and at the end of the day I'm not bothered whether they have three or four different things that they're doing in a function, and I'm not gonna tell them either.

Where I see the core value is in having some principles about what is a stateless and ephemeral workload, and then allowing people to solve problems the way that makes sense for them. Generally, a serverless workload or a function is short-lived, it's generally single-purpose, it has no state between invocations, and auto-scales for demand.

\[00:16:11.03\] Now, there are some practical reasons why you may want some state in terms of a connection pull for a database, but the state that I'm talking about there is really things like having particulars in memory; a lot of monolithic applications would perhaps rely on certain things being established as singletons, and knowing that that's there for the next request.

**Jerod Santo:** Right.

**Alex Ellis:** In effect, it's taking all of that and it's forcing you to make your code cloud-native. And by the way, there's not a lot to really differentiate between a function and a microservice, and that's why they're so easy to deploy on Kubernetes. I wrote a blog post earlier last year about stateless microservices, and the premise is that if you conform to a certain serverless contract, then you can deploy your microservice on OpenFaaS, access it through all of the ecosystem, get the metrics and auto-scaling for free.

**Jerod Santo:** That's interesting. So what does that contract look like, and what is all in there that you have to conform to? ...just out of broad strokes.

**Alex Ellis:** Yeah, so this is a contract that basically I kind of landed upon when I first put the project together, and it was packaged in a container, in a registry, and it listens to HTTP traffic on port 8080, and it has a health check. Furthermore, it needs to be ephemeral, such that at any point it could be replaced by an identical copy and serve the purpose.

**Jerod Santo:** That's it. I thought you were gonna keep talking. That's a short contract.

**Alex Ellis:** It's a short contract and it's one that other parts of the industry have actually started adopting. Google launched a new project last summer called Knative, and I just saw they launched a new managed service called Cloud Run last week. One of the things I was able to do was take an OpenFaaS function and deploy it straight to their platform. It's not the same thing as running it on the OpenFaaS platform, but it's the same code, and it's deployed on their system, which is basically a container executing system... And that's because they somehow, either by luck, or by looking at the traction the project had gained, they picked the same contract that I defined and we've been using in the community.

**Jerod Santo:** That's nice. Are there any efforts to formalize and make a contract around that particular contract?

**Alex Ellis:** This is what I'm hoping to do. Part of my talk at GOTO Chicago coming up at the end of the month is I have a talk there called "Serverless 2.0". Part of my proposition is, well, we have these problems of portability and finding a standard, and we can't write a function that will run on every proprietary cloud vendor's functions framework, so perhaps we need to look at something else that's a bit broader, where we can agree... And seeing this in Google's project I think is a positive sign that perhaps this could actually be where we can start to consolidate around a contract.

**Jerod Santo:** What all players would have to get involved there? Anybody else running cloud services, in order for that to actually be adopted as what we would call a community adoption of that? ...aside from OpenFaaS.

**Alex Ellis:** You know, this is one of the things that can be incredibly hard to get to, and does need a lot of coordination. One of the ways that the broader servers community has collaborated in the past is through a serverless working group, which is part of the CNCF. I've been attending the calls and participating in demos, and getting my community involved in that pretty much since I heard about it after my talk at DockerCon. The first output of that was something called Cloud Events, and that got adopted as a sandbox project by the CNCF.

\[00:20:05.19\] What Cloud Events does is it started to say "Well, I have all of these events in (for instance) Azure - when cloud storage is accessed, or when a database row is updated, but every cloud platform needs a slightly different way of consuming or producing the event", so what we are trying to do in the working group was to come together with something that all of the open source frameworks would be happy to implement, but also that we'd be able to see become a standard, and have some of the cloud providers adopt as well.

I think the first cloud provider that probably adopted it was Azure, and that's because its spec was very close to the one that the work group came up with... And then most of the open source projects that you'll see in a serverless landscape of the CNCF will have some support for cloud events as well.

**Break:** \[00:21:02.12\]

**Jerod Santo:** Alex, I have done a little bit of serverless on Lambda. It was probably a year or two back. I know they've added things, but it was very much use the tools that they have; specifically, it was like "Well, it's gonna be Javascript." I know they've added languages, but... You mentioned containers with OpenFaaS, so I assume that means if it can run in a container, it can run on OpenFaaS. So any language, any framework, pretty much anything?

**Alex Ellis:** Yeah, that's absolutely right. That's been one of my goals from the beginning, in terms of -- if you have this experience where you really don't have any kind of infrastructure and you can't even find it with Lambda, and a managed service that may come with a SLA, if you're gonna offer an alternative to that, you need to have some unique selling points, you need to have some value-add over and above a clone that just happens to work on your own hardware... So that's one of the reasons why I've never called OpenFaaS a Lambda clone. It very much is something else, which is serverless functions made simple. One of the ways that that's done is through using that container image and having that contract that we talked about, so that whatever binary you have, whether it's for Linux, or Windows, or even for an ARM device, it can be packaged in a Docker container and then run, built and scaled through the project.

**Jerod Santo:** That sounds awesome right there. You even talk about binaries such as FFmpeg, or ImageMagick, there doesn't seem to be -- like if it can run in a container, does it have to have some boot-up time, or anything that runs too slowly maybe breaks that contract...?

**Alex Ellis:** \[00:23:46.11\] Yeah, so the timeouts in a proprietary product are very often set in stone, and there's a very good and smart reason for that, which is because often an SLA is offered by that company, and they wanna make sure they have a great experience for their users. However, if you're deploying your own functions and you can commit to a longer or shorter timeout, then you should be able to pop the bonnet and actually do that... And that's part of the freedoms that you get from using this open source - they're the same defaults, but you can actually get in there and you can tune them as you need to.

**Jerod Santo:** That's awesome. And then when you're ready to deploy, is there specific clouds that you can use? Is there like an OpenFaaS specific cloud? You mentioned it runs on Google's new Cloud Run via that contract...

**Alex Ellis:** Yeah, so if you like, there's two parts to the story, when I talked about Cloud Run. The first part is packaging up your code into a container, and that container having a contract. The second part is actually being able to deploy it to a platform. Now, when you're deploying that with OpenFaaS, you can deploy it to any cloud you like, including your local computer, your laptop. The new stack surveyed about 150 developers, and one of their top pain points was (and 60% of people said this) debugging and tracing is a problem, and lack of skills.

So for something that actually claims to be no-ops, completely easy as can be, it's kind of strange that almost 40% of people thought they had a lack of skills, and 60% of people had issues with debugging. Now, if you deploy with OpenFaaS, the OpenFaaS on your laptop is exactly the same as the OpenFaaS that you may deploy to Digital Ocean's Kubernetes service, or Amazon's new EKS Kubernetes service. That means there's an opportunity for you to open up to that.

Some may say the cloud-native landscape is confusing and overwhelming, but actually it represents a huge, thriving ecosystem, and all of the tools that are built to target containers in a cloud-native approach will work with tools like OpenFaaS... So very often when I've been working with end users like Vision Bank out of Paraguay, we've seen they've just picked their favorite tools from the cloud-native landscape, or ones they were already familiar with, and because of the way OpenFaaS is so pluggable, they've been able to build something that suits them really well.

**Jerod Santo:** So what would be the built-in or the de facto logging/tracing/debugging story if I was just using OpenFaaS directly, and my functions that I'm here writing on my laptop? What would that look like in terms of me being able to poke at my code and see what it's doing?

**Alex Ellis:** Yeah, there's a number of ways that you can do that. One of the things that I've tried more and more in my career to do is to not get into a breakpoint debugger. With some kind of coding like writing a front-end in React and just being completely confused, there's definitely a need for that kind of thing... But as much as possible, I've tried with all of the functions I've developed to just write unit tests locally and figure out what I'm doing, and then deploy that into the project.

Some of the ways that you can get data back, even using a lockdown platform, is through simply logging things... And the logs are fully accessible because we're just dealing with a container.

In terms of specific debugging tools, there are a lot of different options out there. I recently put a video together with Node.js, showing how if you pass the correct node - I think node inspect environmental variable, when you deploy your function, it opens a second port, and you can connect straight to the function from your VS Code or IDE, and you can hit those breakpoints without actually rebuilding the code... Something that you struggle to do with a lockdown platform.

**Jerod Santo:** Changing gears a little bit, I noticed on the website you do have what you call pre-built community functions, from the functions store. I kind of like that idea, just go to the store, pick your favorite function off the shelf and slap down your credit card and take it home with you. What are community functions? Is it just like "Hey, you can resize an image with this community function", is that the idea?

**Alex Ellis:** \[00:28:08.13\] Yeah, the functions store came about -- OpenFaaS has been a journey; to start with, it didn't even have a CLI. Then we built one, and then we made it amazing, with lots of input and feedback from the community... It didn't have a functions store, and if you look at almost any successful project that's taken off and had traction, one of the cool things that it has is an ability - this is going back to the same thing we saw with Web 2.0, this idea of sharing and participating and discovering content.

So I noticed different people were writing very similar functions for things like detecting faces in an image, and building the store actually helped them find that. Then I started to put out a call to action and send people T-shirts and things like that to try and get it populated more and more... So you can find interesting things that you can deploy very simply, and start to make sense of functions.

One of the things that I quite like is a tesseract function. Vivek Singh, from Bangalore, one of my contributors - he put that one together... And simply because most projects and open source software either works in Node, or Python, or has instructions, or its own Docker file already, it's very simple to get from that to something that's deployed in OpenFaaS. And then submitting it into the store, something that's now an icon on everybody's screen who's got OpenFaaS, and they can deploy in one click.

**Jerod Santo:** That's super-cool. I was curious if there's some sort of web interface, or some sort of looking at the store without having OpenFaaS yet, because that would be a nice way of bringing people in; they find something that they need, and they say "Oh, I can run this in OpenFaaS", and then they're like "Well, maybe I should check out this OpenFaaS thing, because I would really like to run this function." Is there a way of seeing those outside of the software?

**Alex Ellis:** That's a really great question, and it's something that people have raised in the past. If anybody's listening and they'd like to help contribute, this is a community project and it's definitely something I'll be interested in getting some help with.

**Jerod Santo:** Pull requests welcome, it sounds like.

**Alex Ellis:** Right.

**Jerod Santo:** Maybe that's a good queue to move a little bit into the community, because Alex, one thing you have going for you, as we can tell here, is traction, and is a community, as I mentioned earlier; over 190 contributors... And Adam, I know you were curious a little bit about how he's gone about that. It seems like, to a certain degree maybe, it's coming out of some of your foundational principles and precepts for the project... So maybe we start there, and just dig into how you've built not just OpenFaaS, but you've built a community that's building OpenFaaS, which is really impressive.

**Alex Ellis:** Yeah. When I go back and I think about this project - I think I shared the example at DockerCon that I've built this project, people are really interested in it; it received a lot of attention there, and then when I got back home from Austin, there were no pull requests, there wasn't even a dedicated Slack... So I started to model what I'd seen as a Docker Captain in a Docker community, which is one that's very outgoing and really embraces people running their own meetups, and participating... And I started to model some of the stuff that I'd seen there, and tried out for size, and also learned some things at the same time.

I gathered together probably around ten people that had worked with me on my other open source projects, or I just knew one way or another... And we had something like an Alex Ellis Hackers Slack that we renamed to OpenFaaS Slack, started to have Zoom calls... I'd pay up, I paid the $15/month just out of my pocket money to have a Zoom call that we could all join. So it'd be 7 o'clock on a Sunday night, and it'd be every week... We'd just get together and talk about the project and what we wanted to do.

\[00:31:58.19\] Then I really started to think that we needed some values writing down... And it wasn't that these ones just went away, and had too many espressos and came back and said "This is what we're doing." It was what we'd already done up to that point. So I started to write that down and reflect on it.

The three key values were "Developers first. Operationally simple. And community-centric." Now, the community-centric one - you can already see how that was starting to become really applicable. There were developers from all over the world joining, and from the U.S. Different jobs, different backgrounds. Today there's 197 people that have submitted pull requests and had them merged, which I think is pretty amazing.

**Adam Stacoviak:** Yeah.

**Alex Ellis:** In terms of the operational simplicity, I had made a contact at SUSE. It was a guy named Troy Topnik. He had been in an executive planning meeting, and somebody there had got excited about OpenFaaS in the ranks, and he thought to himself, "I'm just gonna try it." He was able to have it up and running on his laptop in about two minutes, and he was deploying functions, and that's while half-concentrating.

The reason why is because it's operationally simple, and that's something that has to be guarded and that's something that has to be defended... And it's something that doesn't make sense to big enterprise Java architects. When they go about building a serverless framework, they may go about it in a very different way, because they've got different concerns. This is a project that we want people to use, and we want people to love, and that goes back to that developers-first.

**Adam Stacoviak:** Especially when you have so many people trying to figure out the path... You know, adoption is core to open source, so if you make it difficult to adopt and/or get started, which is what you're talking about here - being operationally simple - you're not going about it the right way, where you can let people get involved sooner, and get their feet wet and get some courage, I suppose... A win under their belt, as you've said before, Jerod... Because as soon as you get a first win, even if it's small, it gives you enough confidence to keep trudging forward.

**Alex Ellis:** Yeah, that's definitely a part of it. Also, something that's helped is having clear guidelines of how new contributors are expected to put that together, or any contributor. The contribution guide is one that particularly when I was with VMware last year, that other teams that were looking too for inspiration, and that people have often asked me about "How do you even create the Zoom call? How do you start to get people to come and talk about the project and to be present?" And for me, it goes back to this idea of investing in people and investing in individuals. It's something that can be incredibly demanding personally, and I think I've sacrificed a lot, but at the same time it can be really rewarding when I see that one of my friends, a core contributor at the time, basically was made redundant; he was very out-skilled, and he was able for his work on OpenFaaS to go and get a job for double the salary that he'd been on before, and he's now moved on to something even better from that.

**Adam Stacoviak:** I wanna rewind it back to that Zoom call, because I'm kind of interested there... But I also wanna talk about diving further in what you mean by developers-first, and how you defend or even define operationally simple. I think you gave an example of that, but what does it really mean to you.

So let's zoom back to the Zoom call, because that's kind of interesting... And just the fact that you have this weekly opt-in, "Come if you want to" kind of meetup. Can you describe how long it was, how you organized it, was it self-organized...? What did you expect from that? Has it been repeated since then? Has it been weekly for years now?

**Alex Ellis:** \[00:35:59.22\] I have pretty much all the recordings on YouTube on an unlisted playlist that people can get to... But one of the things that I find really inspirational with some of the old videos I found, where Steve Jobs was talking to his early company about his work at Apple, or creating the subsequent company next... And he always went back to this example of creating the Apple One. What he said was that he and his friends wanted to create something so they could use it, and so that their friends would want to use it, too. I think that was really the core idea in the kernel of what we've been doing with OpenFaaS, and why it drove to those values.

Some of the early people involved in the project were coming along for that reason, too. I think that's why they put a stake in it, and why they're still there now - we were and still are building something that we want to use, enjoy using, and we want our friends to use, too.

**Adam Stacoviak:** So is this still a weekly thing then happening? You mentioned you've got it all on YouTube...

**Alex Ellis:** Yeah, I mean--

**Adam Stacoviak:** Is it still happening every Sunday at seven today?

**Alex Ellis:** It was weekly, and then every two weeks, depending on what was available at the time. The recordings are the way; the way that I set it up was in the beginning I'd try and come up with a word or a theme, and it might be something like "contribute", or "build", or "engage", and try to communicate the values, try to rally the community around a certain area, or topic, or call-to-action... But also, I would often give over half of the time to going going round robin around the room, not like a scrum call, because nobody likes feeling like they're at work when they're not, but in a way that actually gave people a chance to say where they were at and what they were doing.

Some of the best calls that we've had are where I've had an update from a conference, or a specific message or rolldowns, and actually most of that has just been parked because we spent 40 minutes engaging with each other and actually seeing where people are at.

There was a call that I did about 18 month ago, "How to contribute to OpenFaaS." It was probably the most over-subscribed call that we'd done. Then we repeated it again about a year later, and again it was the biggest call we'd had. Why? Because I think people want to have a sense that they belong to something bigger, and that their contribution counts.

**Jerod Santo:** You mentioned earlier, you said you sacrificed things to build this community, obviously, when you upgraded to the paid Zoom, you were sacrificing some of your hard-earned cash... What are some other things that you've sacrificed to get this ball rolling, personally?

**Alex Ellis:** Yeah... I can think of about half a dozen software maintainers in the industry that I know quite well, and I think we all feel like we're in the same boat, which is that being a maintainer and leading a project can be a very thankless task, where people will expect much from you and very high standards, and they'll potentially just taking until you burn out. So one of the things that I think people learn - certainly that I learned very early on - is to try and set boundaries.

My wife has helped a lot with cooking meals when I still had a day job, doing most of that kind of stuff, so that I could spend those extra 2-3 hours working through issues, or helping users, or whatever it may be.

It's also meeting with the end users... Working late into the evening, meeting with BT, or Minio, or whoever it would be at the time, who had reached out very excited about the project, and kind of had this expectation that a big company was behind it, with a lot of money and a lot of resources; the actual fact - it takes a lot of energy to keep something like that afloat.

**Break:** \[00:40:02.10\]

**Adam Stacoviak:** Let's break down the first two pillars of your values - developers first and operationally simple. The example for the second - you'd mentioned spin-up time, to sort of adaption-focused... But break down for me what you mean by developers-first. What lens do you look at that from? How do you ensure that's true?

**Alex Ellis:** Yeah, so the way that I look at that value and the others is as a compass direction... And some of the ways that that relates to the project is things should just work, and it should always be as much as possible only one click away, and follow the UNIX principles of "convention over configuration", which is probably one of the reasons why a lot of people think Kubernetes is complicated, is because it goes the opposite way - it's configuration over convention. Configure everything under the sun, and maybe that's right for Kubernetes, but for a platform like OpenFaaS, that's targeting developers and productivity, some of the ways that we've done that is by creating a CLI that does the Docker build for you, and types in all of the correct arguments that can take a handler for Node.js and put all the right things in all the right places, so that when you come to use that on a daily basis, there's no duplication between each of your Node.js functions... Being able to abstract some of that away in a way that makes sense.

Now, the CLI is also one of the areas -- I think it might still be the second-largest area for commits in the project. It does look it is on the stats page... And that, again, is because developers, at least the ones in our community, love CLIs, and they love to make it theirs, and make sure it makes sense... So that's why so many commits have come into that area.

There's a UI that also is very popular. It's not particularly sophisticated, but it kind of shows you where you are and what's available, and that's where you can interact with the function store as well. So by getting a script or one command that would deploy everything for you in about 60 seconds by doing our darndest to make sure that the instructions you see are always correct and will always work, and really protecting that, and checking it, and going over it again and again, I think is one of the things that it means when developers use OpenFaaS, the feedback that I predominantly get is "We get it. It just works. We know what to do when something goes wrong. We really like it. Can you send us some stickers?", and that kind of thing. That shows me that we're kind of going along the right lines with that one.

**Adam Stacoviak:** When you add more people - because this is called community-centric - the simplicity is somewhat a subjective term, meaning that my version of simple is not exactly the same as Jerod's. How do you ensure -- you mentioned the word "defend" earlier, and "protect"... How do you ensure and defend that state there? Is it in pull requests, does it simply apply to code? Is it sort of project-driven, or is it sort of community-focused, this operational simplicity?

**Alex Ellis:** \[00:43:59.19\] Yeah, so one of the ways that I think we get to this is by having these values and seeing what they look like, and then working with that. Now, there are a core group of people called the Core Contributors - it's about five of them at the moment - who probably know these values really well, because they've been around the longest... And they know what this looks like and what it doesn't. And I think instinctively, like a kind of tribal knowledge, this is something that they pass down and that they are using when they review code, and they know what is OpenFaaS and what isn't OpenFaaS.

It does go back to some of those principles of being able to run anywhere, any code, any scale, having things like a function store, a templating system, to make that simpler to remove duplication, but also as far as possible to go and say "Right, we're doing this by convention, not by configuration first."

**Adam Stacoviak:** Let's go with connection, too. The next part is community, and I think that the one oddity I see on your homepage is you've got Twitter, you've got Slack, but in the middle of those two is LinkedIn, which is not normal for groups to sort of organize. Why did you choose LinkedIn and what do you do in LinkedIn say over Slack or Twitter? How do they differ?

**Alex Ellis:** Yeah, I can't remember how many followers there are on the Twitter account at the moment. I think I still have more my personal. Slack has around 1,300 people, and LinkedIn - there's almost 300 people there. That's something that I'm really proud of, because it's only been going for about 4-5 weeks.

One of the things that I do and I'm always thinking about is how do we keep the traction growing, what channels do we need to be using, how do we keep people from falling out the funnel, or at least convert some of the dozens of people coming into the community or seeing the project - how do we get them to the point where they're really engaged for the project? They may be giving back, or they're becoming a promoter and they're helping the project to succeed and be sustainable.

I was reading a book called Traction - I think I have it up here somewhere - and one of the things he says is "Don't keep hammering the same channels that you've been hammering and getting successes off, because you may be able to get the same successes in other channels." And I think it's quite an old book; some of the stuff in there we don't really use anymore, like StumbleUpon, or to some extent Digg...

**Adam Stacoviak:** StumbleUpon, huh...?

**Jerod Santo:** StumbleUpon...

**Adam Stacoviak:** I haven't heard that in a while.

**Jerod Santo:** In a long time. I used to love StumbleUpon.

**Alex Ellis:** Right. But that's how I got the idea of LinkedIn. You know, it's like getting a great encyclopedia from the library that's 20 years out of date. There's still a lot of principles in there that you can learn from. So I thought "I'm gonna try LinkedIn." I have a pretty good community there of people that are following my posts. Something that I've learned probably over the last three years is how to use social media to promote and amplify content, how to work with partners and other brands to cross-market... So the LinkedIn group at the moment is a very concentrated way of just keeping people up to date with what's happening, telling them what the developments are... And not all of the people that are into the project are necessarily developers; it has a much broader appeal than it did in 2016.

So Twitter is probably the broadest kind of reach at the moment, but I think LinkedIn is just a little bit more concentrated. People are there because they want to be; it's a group that you have to join... And then Slack - I think we all know that Slack can be a double-edged sword; it can be overwhelming, it can actually be a really great experience at times as well... So I wanted to try and make sure that people knew what we were doing in the project, that they had a way to connect, and so far it's been really positive, and I'm hoping it's just gonna continue to grow.

**Adam Stacoviak:** \[00:48:00.26\] What I find interesting about this is how mentioned how you're personally using posts, which I'm curious about just because so many people I hear from that are developers, engineers, or in software, aside from say on the business side of things, the relationships side of things, which everyone is in relationships, but... Developers are so inundated with requests for new positions, and just...

**Jerod Santo:** Recruiters.

**Adam Stacoviak:** Yeah, recruiters... It's just terrible. I mean, it's great, it's a good thing, because it assumes there's a lot of opportunity, which there is, but it can also be kind of cumbersome in the fact that you're just constantly being bombarded. You're overtaken. So LinkedIn generally isn't the best place where you wanna camp out at... So it's sort of counter-cultural, in a way, for you to be in your position, the founder of this project, and leverage LinkedIn in a unique way.

You mentioned the book, Traction - is that what made you think "Hey, I should try out something different", and that thing different was LinkedIn?

**Alex Ellis:** Yeah.

**Adam Stacoviak:** And I'm curious also, as a follow-up to that, how you personally use posts on LinkedIn.

**Alex Ellis:** Yeah, so as the lead of the project, there's certain things that I feel I need to do to make it successful, and there's different elements that in a regular business would be played out by different people or different departments. You would have a VP of marketing whose job it is to find these channels and put this content out there, believe you me, they will be using LinkedIn, they will be using Twitter, they will be using Facebook, and they'll have scheduled posts that go out at different hours of the day; maybe you guys have that as well.

So no, I don't think it's odd at all for me putting that hat on to go out and actually pursue those channels, and broaden the reach of the project. And at the end of the day, there's 300 people there now; they seem to be a group of people that are really interested in the project or interested in the topic. It's an opt-in group, and people can come and go as they will. Again, it's a bit of an experiment. OpenFaaS itself was an experiment. I didn't think it would get to where it is now when I first started hacking around with it.

**Adam Stacoviak:** What I like about the LinkedIn group is the focus of it. You mentioned the number are smaller at this point, but in this current state it seems what it is -- as you mentioned, Twitter's more broad; Slack is obviously real-time, it's got some pros and cons to it, but to truly focus on, say, a core group, 300 people, even if it goes to 1,000 in the next couple months, it's still fairly focused for you to be able to communicate with them. I may be going a little deep here on this, but is this a broadcast system? I've never really used LinkedIn in this way...

**Alex Ellis:** So I've created a group, and the group basically says that "It's about OpenFaaS. Join to share your knowledge, find speakers, get connected with the community. The rules are collaborative, friendly environment, share knowledge, build community, encouraging others on their open source serverless journey", and that's really basically how it's being used. If you're not in the group, you don't see the posts; if you are, there's a feed, and there's a guy, Scott Rosenberg, out of Israel, and he posted about a webinar he was doing with VMware. There's another post from Keiran Smith at SolarWinds, who had just written a template for Swift. Then there's something from where I did a partnership with spotinst and the blog post is posted there by that guy as well.

**Adam Stacoviak:** Yeah. So it's definitely an invitation to the community to say "Hey, share what you're doing in this world. What you're up to, if you're giving a talk, or a presentation, or whatever." It's kind of like that. But then also threaded conversations when you need it, too.

**Alex Ellis:** \[00:51:45.21\] Yeah. There is a community.md, a markdown file in the FaaS repo, and that is absolutely full of hundreds (if not thousands now) of blog posts and events that are coming up, and then some industry awards and notable mentions... And if anything, it's just one way of bubbling that up. For instance, in France today, at Devoxx France, Philip from GitLab, and a friend of mine Laurent, were talking about OpenFaaS. I think they spent something like three hours going through just about everything there is to know about it... And it seemed like they had a great talk. But it's very hard for people to know what's coming up, and so this is something that I do, is kind of seek out who's gonna speak, or who's speaking, and help them amplify it and get more people to turn up, if I can.

**Jerod Santo:** Let's talk about community financial support, because as you mentioned off-hand, you are doing this indie, full-time now; previously, you were doing it at VMware, but you're out on your own, trying to make a go at it. What's your ideas around sustainability? I know you do have a Patreon, you also have an Open Collective, so there's a few things out there where people can support the project financially... But tell us bigger-picture - is this all experimental? Do you have a path towards monetization of some sort of cloud offering? What are your thoughts on that?

**Alex Ellis:** Yeah, that's a hard one, and I don't fully know the answer to that. As I said before, there are half a dozen buddies of mine, we're all in the same boat where we're these open source maintainers; projects we are behind maybe have a lot of traction, but there's not a clear way, unless you're perhaps a behemoth kind of enterprise company, to actually go and support a project like this.

Some of the models that I think we've seen in the past are providing enterprise support where it can help a company sleep better at night to know that there's someone they can call.

Another model that isn't actually necessarily helping the project, but may bring funds, is what SpringSource did when they started out, which is training and consultancy. I think we're starting to see a move away from open core, with Chef for instance open-sourcing all of their components for their enterprise add-ons.

And then really, it's like, okay, as a SaaS, do you want to compete on price? Because there's no way you can. So I'm not probably the best person to ask about how to monetize open source software and how to make it sustainable... But one thing that I do know is that whatever we're doing here, and all the things that I've been trying, have helped build a really healthy, thriving community, that really care about the project, and have created something that's now basically on the critical path for some very large companies... And there's some even bigger ones that are doing PoC's with it at the moment, that I can't give names for.

**Jerod Santo:** Well, let me ask this... Close your eyes for a second and imagine three years, maybe five years - that's probably too many; imagine three years down the road, and OpenFaaS has been extremely, extremely successful. All of your goals being met. What does it look like three years from now? What does success look like, if you had it your way?

**Alex Ellis:** Again, I think that's a great question; it's also a very big one. For me, where I am now is that I wanna help people understand serverless, and Kubernetes, and I want to help them solve problems that they're encountering on a daily basis \[unintelligible 00:55:30.21\] more and more. So the compass direction for me is really the values of the project that have been defined.

There's some chunky stuff on the roadmap that I'd really love to get into, given enough time and resource, but really I think there's a potential future where, as I said earlier, this serverless 2.0 idea comes to fruition on a larger scale, where it's that container image and that basic contract that is what is portable between every cloud... And it may not be that it's running only on OpenFaaS; there's a provider that has been put together recently by one of my contributors, Ed Wilde. This can target Fargate.

\[00:56:14.07\] There's another one that we kind of came up with the idea for over lunch here at Christmas, which was FaaS Lambda, as you can literally build the same function and deploy it through exactly the same tools, monitor it in the same way, and that same function can deploy to Lambda and Kubernetes at exactly the same time.

So I'd love to see OpenFaaS the packaging layer, and the runtime, the interfaces become something that's very broadly adopted, and is helping companies big and small to start solving these problems and make complex tools like Kubernetes more accessible.

**Adam Stacoviak:** Maybe the other question should be whether or not this should be an open source project that makes money... Because whether it can is one thing; whether it should is another... And it seems like a lot of your success has been focused on what makes the project itself thrive, not so much how to get people to pay to use it, or sustain it, or maintain it, whatever word you wanna wrap around financially giving to it.

**Alex Ellis:** Yeah. Okay.

**Adam Stacoviak:** Because you've said yourself you don't feel like you're the person to do that in particular... I'm wondering, does that mean bringing somebody else on

**Jerod Santo:** I think he may not have the answers maybe.

**Alex Ellis:** No, I don't know if that's what I said at all. I think what I said is that it's very challenging to make money commercially -- get a commercial proposition of something that's given away completely for free, and is super-easy to use.

**Jerod Santo:** Right.

**Alex Ellis:** I don't think the project itself can make money. A company could potentially have a go-to-market strategy building a product around a project, but this is something that while I was at VMware I really defined a bit further, and I think they reinforced as well... Is that projects are not products. Products are products. Now, you may create a distribution of OpenFaaS that is a product, that has a paid support contract with it; companies will be willing to pay a corporation, either one person, or three, or five, or five hundred, to support... But on its own it is not a product. It's completely free, it's MIT-licensed. That means that it cannot make money; it can make money for you when you use it in your business... I was speaking to a developer at Ytel; I don't know if you're familiar with the company out of Orange County...

**Jerod Santo:** No.

**Alex Ellis:** And they sell SIM cards in stores. One of the things that was kind of a joking point for them was that they're getting less than excellent customer service because they would click the button and the system would kind of choke. And that was because they were trying to run these things synchronously. Well, by moving into OpenFaaS and using the asynchronous capability that's built-in, they could run these processes in the background and free up the system to do the next thing for the customer. So for them, they'll totally be making money out of that, with their customers.

But now I think we've gotta be really careful when we use this term "project" and "product" and monetization. The project, from my perspective, would really benefit from sponsorship, especially from some of the larger companies that are making use of it, and it's profitable for them, and they're making big savings... But this isn't always the way the world works, as you see with some of the other big open source projects.

I did start a Patreon campaign, and try as I may, I've still not got anywhere near even minimum wage levels of someone flipping burgers (not even 10% of that probably) to be able to support even myself, on a minimum wage. That's how hard it is.

\[01:00:06.21\] So I don't have all the answers, but the project is doing really well. There are people that are really committed to it, and it has growing traction. We spoke about LinkedIn - I get several people, from directors to VPs, reaching out every week, saying how they're evaluating OpenFaaS, maybe using it in a PoC, or they wanna connect back to the community in some way...

So if there are people out there who have ideas, concrete ideas, I'd love to know. This is something that I'm working on and I'm trying to figure out at the moment.

**Jerod Santo:** So we've asked you to look down the road, we've asked you about sustainability and money matters and all those things... Let's zoom in a little bit and talk about tomorrow. As the maintainer and leader of the project, when you wake up in the morning, how do you decide what to work on? What's most important in what you should be doing today or tomorrow?

**Alex Ellis:** When I wake up, I usually ask my wife if she slept well... \[laughter\] And then the next thing that I do is I'll turn over to my phone and I'll check my emails to see if anybody had any problems with OpenFaaS. Then I'll check the Slack to see if there's anything important; then I'll check LinkedIn, then Twitter, and then I may get up and go on and start the day, at which point I maybe drill into some of that stuff.

So at the moment it's very much like -- you know, my time at VMware was very similar; it's putting on the maintainer hat, putting out any fires that are there, keeping the lights on, and part of that is reaching out to this network of contributors through various Slack channels and other mediums, seeing what PRs need merging, which ones I'd promised to review, who I need to spend a bit more time with, if there's anybody that I need to schedule a one-to-one call with, and give them some feedback, or ask for some feedback for myself.

So I try to run this, for all intents and purposes, as a business that hasn't quite figured out a monetization strategy yet... And that can be hard. One of the ways that I try to manage this is to try and stay out of the minutiae where I can, and to delegate. Delegating is very hard when the people you're delegating to are volunteers. Sometimes I feel bad for asking them to do things, or to help out, because I know they have their own full-time gigs and lives. So I'm quite sensitive to try and not ask people to do more than two things at once, and to try and always ask them how their day was, or how they are as a person; if I know there's something going on with them, I'll try and kind of foster that relationship.

I've also sent out swag and handwritten notes to people... And this isn't like the ones that I've seen on Twitter from a well-known corporation recently, where they're all just cookie-cut, and it says at the end "Please share on Instagram." This is really trying to foster that relationship with that person.

**Jerod Santo:** I think it's interesting, because you said you try to avoid the minutiae, but you start off by describing most of your day as...

**Adam Stacoviak:** Minutiae.

**Jerod Santo:** ...dealing with minutiae... And it makes me think that maintainership and leadership are really two separate roles, and often times they are done by the same person because of the state of the world... And that's the same thing with small business, or startups; you end up wearing all of the hats. But you need to be able to dedicate time to not just maintaining the status quo, but actually pushing OpenFaaS towards that future that you see for it... And I'm sure it's incredibly challenging to do that when you're putting out the fires, and maintaining the relationships, and answering the questions, and delegating.

**Alex Ellis:** Yes. When I say minutiae, what I may mean is that if I've delegated to somebody to add a certain CLI command, that I will leave them to go and do that, and they may be working with someone else; and if they've reviewed it and they're happy with it, that it's not gonna be an in-depth review that comes from me next... It's gonna be an eyeballing and a nod to it, and "Have you thought of this?" and then getting it in there.

\[01:04:20.01\] An example of that would be recently there was a blog post on Apache Kafka that we did; I've been wanting it for a long time, and this is one of the challenges with delegation, and delegation to volunteers - my sense from the leadership perspective was that this needed to be timely, and probably was overdue. However, delegating that to somebody then meant that it's kind of on their schedule... And one of the things that helped me a lot was there's a kind of tic-tac-toe sort of spectrum graph where it shows you important/urgent/can wait/can be done by me/can't be done by me... And that's the kind of thing where sometimes as an open source maintainer - and my core contributors get into this trap of thinking, that we must always try to get somebody in the community to do something first; we must always find somebody to do a quick PR... When in fact this is one that falls into the quadrant that is important, or is urgent, and can be done by someone else, but actually it's time to just commit and get that done.

Some of the best time that I have is where I can sit down and get into a problem and work on it, and produce a feature. It can be a very frustrating experience trying to coax this out of developers over processes of weeks or months, when I know dedicating an afternoon I can have it completely deployed and tested.

**Adam Stacoviak:** It seems to me like your schedule is proactively planned, but reactively executed, meaning that you're willing to react to the needs, but you're proactive in how you approach it.

**Alex Ellis:** I heard of this blog post from someone at Y Combinator, The Maker And The Manager Schedule... And I told my friend and he said "Don't tweet about that, because people will think that you think they're stupid because it's been around so long...", and somehow I never happened upon it. And he said, "You basically figured it out." I said, "I don't know what you're talking about."

When I read the post, I realized that I'd adopted the best of both worlds, where I was running the maker schedule, and cranking out the features in the code; an example would be an OAuth in OpenFaaS cloud... That needed a lot of concentration; it took about two weeks to develop. But also running the maker schedule, especially now. I've been interviewing with about 5-6 different companies that are very interested in doing something together.

Now, I know, just as it says in the post, if you schedule a meeting at 10 AM or 3 PM, that's gonna mess up your whole day for whatever Maker stuff you had planned... Just subconsciously it seems to do that. So I try and pack those meetings into a single day; it will be exhausting, but it's more efficient, and then I know that I've got that other time free to do these contributions and actually make sense of the world.

**Adam Stacoviak:** That's a great constraint, it's interesting that you pack it all into one day... Because sprinkling across many days seems to be the most efficient, just because it gives you the most variance and flexibility. However, in practice, when actually executing on your plans, I agree; if you've got something on your calendar, you'll probably -- you're mapping some mental space around that, and/or just the rest of your day is somewhat mapped around a couple different key moments in your day, and all bets are off, so to speak.

It's just interesting to look at this. Jerod, I like the point you made about maintainership versus leadership, and I think that when you look at a project like Alex has here, and the success of the community, it's really important/wise to drill into those particulars, because it's not often -- well, I guess I shouldn't say it's not often, but... I guess it is not often. \[laughs\] But it's not often that you get a chance to hear this wisdom, and I think it's part of our jobs as this show to do what we can to get Alex to share that with the rest of the world, because we want more OpenFaaS; it's just not competitors we want, we want other things like it, in ways that's being run.

**Alex Ellis:** \[01:08:19.13\] Yeah.

**Jerod Santo:** Get your own name.

**Adam Stacoviak:** That's right, get your own name.

**Jerod Santo:** \[laughs\]

**Alex Ellis:** You know, I would love to see that too, and I think part of the community I've built here was almost bootstrapped from the community I'd built as a Docker Captain, building tutorials and blog posts, and working with ARM devices and Raspberry Pi... And they still have a place in the OpenFaaS Slack, and one of the things that I've been starting to do is trying to think "Can I spin up a new community that just has a focus on working on some of these interesting open source projects?" But again, this goes back to that strange position between having that maintainership, or let's say the execution side of things, and the leadership. The leadership is a thing that has to think about "Should we have a strategy to pursue new channels and engage people through LinkedIn?" The leadership side of things has to think about who should be part of the GitHub members next, what opportunities need to be pursued, what meetings need to be had - that kind of manager schedule.

Then you've got the execution side of things, that's very much necessary, too. What I'd love is to have the ability to grow out those functions and have other people take it on full-time. That's something that, as we explored earlier, needs to have a very clear business reason for that happening.

**Jerod Santo:** Yup.

**Alex Ellis:** For now, I am doing what I can, and a lot of people are working really hard, and really care about this project. Is it gonna be the one that's winning in three years? I don't know. But I do know that there's a great group of people behind it, that are working really hard, and there's other stuff that we do too, and I think that's really the key thing - I put a project together over the Christmas holiday called Inlets; it's a HTTP tunnel, and the reason I built it is because I used to work at an enterprise and we couldn't use ngrok and things like that, and my team at the time was also working in an enterprise, and they couldn't use ngrok... And I wanted to create something that would solve that problem for them, of being able to test webhooks, and that kind of thing.

All of the lessons that I'd learned over those past three years of development and community management, and one thing or another, I was able to replay in two weeks. All of those learnings that had taken me so long to grasp, I was able to replay them very quickly, and also engage my existing community in that project. Then I posted it into Hacker News and got 2,500 stars in a couple of days.

**Adam Stacoviak:** Kudos to you too, Jerod; you logged this in February, "Inlets - expose your local endpoints to the internet."

**Jerod Santo:** That's right.

**Adam Stacoviak:** Good job.

**Jerod Santo:** Well, thank you. I think that was the first time I saw Alex's name, and I then I saw it again on OpenFaaS, and I was like "Alright..." Two time's a charm here.

**Adam Stacoviak:** And he kind of in happenstance told you what he desired for the next two years of the future, that question you asked that he didn't quite answer... Which is kind of cool, because it sort of came out naturally.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Your desires are to grow out of those roles, but you're trying to figure out how to best do that, which is interesting...

Well, Alex, thank you so much for your time today. It's been an honor to talk to you. It's definitely interesting to see where this project is going... Any sort of shout-out you wanna give here at the end, any core contributors that are just killing it, that are helping you on the daily, that you wanna give a shout-out to before we tail off?

**Alex Ellis:** You know, there's so many people that it would almost be unfair, but I wanna say a big thank you to Richard Gee, that's helped me out right from the beginning, to John McCabe over in Ireland, Ed Wilde, Burton Rheutan, Lucas Roesler, and all of the other people in the community that have been there for me and have been there for the project, and have helped to make it what it is.

**Adam Stacoviak:** Very cool. Thanks again, Alex. It's been awesome.

**Alex Ellis:** Thanks for having me, it's been a pleasure.
