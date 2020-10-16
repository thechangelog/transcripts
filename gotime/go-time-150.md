**Mat Ryer:** Hello, and welcome to Go Time! Today we're talking about cloud native, whatever that means... We're gonna find out. Joining us today, Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** How are you doing?

**Johnny Boursiquot:** Feeling a little cloudy...

**Mat Ryer:** Oh, that's good. That's good today. \[laughter\]

**Aaron Schlesinger:** I like it.

**Mat Ryer:** And we're also joined by Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** It's going well.

**Mat Ryer:** Great. This conversation intro is really good. Let's see if I can lift the spirits...

**Jon Calhoun:** I'm just ready to get past this and get to the cloud-native part. \[laughter\]

**Mat Ryer:** I know, you're so excited.

**Jon Calhoun:** I, like you, don't know what we're talking about today.

**Mat Ryer:** Yeah, Jon doesn't know what it is either. Well, we're also -- I've got very special guests today, as well. We're also joined, believe it or not, by Aaron Schlesinger. Yes!! Hello, Aaron.

**Aaron Schlesinger:** Hello, hello.

**Mat Ryer:** Welcome back!

**Aaron Schlesinger:** Thank you. I think you get better every time, with the last name there.

**Mat Ryer:** Ah, yes. Thank you.

**Johnny Boursiquot:** He's so excited too, when he gets it right.

**Aaron Schlesinger:** Yeah.

**Mat Ryer:** I introduced him at a conference once, and spent a lot of time learning how to do it... And I became the fastest Schlesinger swinger in the West. \[laughter\]

**Aaron Schlesinger:** That was the talk, actually. It was just you learning...

**Johnny Boursiquot:** Learning his name. \[laughter\]

**Jon Calhoun:** He's like going over all the background of it, and how they started pronouncing it this way...

**Mat Ryer:** I'm actually really interested in that.

**Jon Calhoun:** Live chat with his grandma... \[laughter\]

**Johnny Boursiquot:** Etymology of parents' name... Yeah, cool.

**Mat Ryer:** \[00:03:54.26\] Well, speaking of etymology, cloud native - I genuinely don't really know what this means. Now, I looked on the CNCF website on GitHub actually, and they have a nice description for it. And they have it in lots of languages, so which one should I read? I could do the German one maybe, or... Oh, maybe the Korean one could be cool. Maybe Jap-- do you know what, I'm think I'm gonna take a stab at the English. Cloud native technologies empower organizations to build and run scalable applications in modern dynamic environments such as public, private and hybrid clouds. Containers, services meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. Okay, does that help us?

**Jon Calhoun:** Is that like the UK English version? Is there like a US English version? It's probably dumbed down a little bit.

**Aaron Schlesinger:** Yeah, dumb it down.

**Johnny Boursiquot:** Is there a five-year-old version? What does this mean?!

**Aaron Schlesinger:** Yeah, explain it like I'm five.

**Mat Ryer:** I need that... Well, what do we mean then by cloud native?

**Aaron Schlesinger:** I'll take a stab at it...

**Johnny Boursiquot:** Stab it.

**Mat Ryer:** Please. Stab it to death.

**Aaron Schlesinger:** I'll only do it in four paragraphs instead of the five that you got there.

**Mat Ryer:** Okay.

**Aaron Schlesinger:** So to me, cloud native is the new way - maybe the trendy way, but I'll just leave it at the new way - to build applications for production. We call it new because there are new technologies, like containers - Docker, runC, and all that good stuff... But also there are new techniques. And the one that I go to every time I talk about this is the declarative API that you mentioned, Mat, in that description. That's a really powerful idea, because you don't write any more scripts to deploy to cloud-native systems. You do write YAML... And the rest of this podcast is now gonna be about YAML. \[laughter\]

**Mat Ryer:** In YAML, I thought you were gonna say. Now we have to speak in YAML, including somehow pronouncing the white space...

**Aaron Schlesinger:** Yeah, yeah. Tab-tab... \[laughter\] Yeah, so you describe what you want to happen, instead of how it should happen, essentially.

**Johnny Boursiquot:** Aaron, you're jumping into the implementation details of all a bit. Let me add some preceding layers; speaking of layers... Let's try to define cloud native as sort of a layered cake, if you will. So your first layer -- first of all, let me go before that. Back in the old days - I'm making air quotes here - you used to have your monolithic applications that run somewhere in a data center with your rack of 1U servers, disaster recovery maybe, you have multiple data centers, and all these things, and you're managing all this infrastructure. You have a team dedicated to swapping out hardware, and all these things.

And then we're like, okay, the cloud providers, like AWS, and now we have GCP and Azure - these things exist, so we don't have to have our own data centers. Why are we spending so much money managing our own hardware? So we're like "Okay, let's take advantage of infrastructure as a service."

And then, what started to happen is that, okay, now that we have people taking care of the hardware, and the virtualization and all this stuff that we don't have to take care of ourselves anymore, we started thinking "Well, how can we then make developers more productive?" We've got infrastructure relatively taken care of; how do we make developers productive? Because in the world of monolithic applications - so it is said - things take longer to change, you don't have as much flexibility in all these things, and people are kind of stepping on each other, release processes are long, and all these things that folks attribute to monolithic applications, which - some of it has merit, some of it is just incorrect, but we'll get to that...

\[00:08:19.26\] And then now we're like "Okay, let's build ourselves a layer here of abstractions, so we can actually allow developers to be more productive." So you take the cloud infrastructure, the infrastructure as a service component, you add on top of that a nice smattering of schedule and orchestration - this is where your ECS, your EKS, your Kubernetes, your OpenShift, all these things, this is where they live. And you're like "Okay, now we need some services, some application and data services to lay on top of that." So we put a nice smattering on top of that. This is where your databases live, your storage layer, this is where you have provider-supported building blocks and application building blocks. "Hey, you don't wanna run your own Redis caching server? We'll run that for you." Or "Hey, you can use DynamoDB. You don't have to run your own database, we'll run that for you", these kinds of things.

Now we're like "Okay, how do we abstract things even more?" And now we have application runtimes. We used to call these things middleware back in the day... But that layer -- now we start to standardize things like logging, and events, and tracing, because with cloud native comes the whole shift to break up your monolith, and instead of having one big ball of mud, you've got now 500 balls of mud, smaller balls of mud... And they all need to talk to each other...

You kind of need to observe the system, you kind of need to know what each piece is doing when a customer makes a request... It hits one frontend, and then that talks to a dozen other backends, and if something happens, you don't know where to look. So you need instrumentation, you need observability, you need these things to be connected to each other. This is where you've got the service meshes, and all these new, fancy things; the Istios, and things like that - that's the layer where they live. And then you've got your application code. This is what we've basically trying to get to all along - the Nirvana, developer productivity, where the only thing you need to do is write your code, package it up in a container, and then ship it. This is where your Dockers and Rockets and things live. This is where your serverless is - even another layer of abstraction on top of that.

So basically, we're just trying to get to the point where we can actually ship software faster. So that's the layered cake. Visualize it. And it's complicated.

**Mat Ryer:** Wow. I could listen to that for hours.

**Jon Calhoun:** While Johnny is explaining how this is the modern way to do it, I'm looking over at an old Linux box sitting on my shelf, running a server that I use for stuff... And I'm like "Yup, that's not modern... But okay."

**Mat Ryer:** What's running on there, Jon?

**Jon Calhoun:** It's some backup file storage and some other stuff like that, that I sometimes wanna access if we're off traveling and my wife wants to get some photos off of it, that sort of stuff.

**Mat Ryer:** Oh, right. That's cool though, that we have these ideas. And they obviously have come out of people solving the same problems again and again... And once you've done that a few times, and actually sometimes before that as developers, you sort of see these patterns, these common things that we could then build abstractions on. And it is very useful from a developer's point of view, of course, because -- and this is how I actually use this technology personally; I write applications, and I let then something else (the cloud) do all the heavy-lifting of making things work, and making things scale.

\[00:11:48.14\] In our project, if we get a sudden spike of traffic, then more instances are automatically spun up to deal with that. And they'll spin down as well after, when they're not being used. So things like that then become possible, because we have these abstractions. But what does it mean for application developers then? Do we do things differently now, now that our code is gonna run in this different way? ...it's running in this abstract environment, versus on Jon's computer in a corner of his office.

**Johnny Boursiquot:** Jon, you need more reliability, man... My apps keep crushing, man. You need some redundancy. \[laughter\]

**Jon Calhoun:** I mean, luckily, these are things that don't need really high reliability. My reliability is a back-up battery plugged into the wall in case the power goes out.

**Mat Ryer:** Oh, that's fancy.

**Jon Calhoun:** That's pretty much it.

**Johnny Boursiquot:** That is fancy. I don't have that. \[laughter\]

**Aaron Schlesinger:** I wanted to add something to what you said, Johnny... There was a part of that cake in there that made a transition from what I think of as the traditional ops role... I don't really know if it's dev ops, or ops, but that kind of role... And it made the transition into the developer role, the developer realm. And I think that's a really important one, because we have a different transition now than before we had cloud native stuff. Before, we were talking about IS, VMs, and VNets, and all of that stuff. But now we have things like Kubernetes, that abstract over a bunch of compute resources and network resources, and storage, and all that stuff.

So now, whether you look at Nomad, or Kubernetes, or ECS, or even App Engine, Heroku, that kind of stuff - now there is an API to abstract over your entire cloud, or your entire subscription to the cloud, or whatever you've got... Even over your entire physical data center as well. So that is really interesting to me now, because we kind of have an operating system here that describes your entire system; whether it's 1,000 VMs, or two VMs, or Jon's Linux box, whatever it is...

And Jon, if you had it, of course, you could add more Linux boxes, and the system would work the same. I think that's a really powerful abstraction that lets us pretty easily standardize on that transition from traditional ops to the development experience you were talking about, Johnny. And your experience too, Mat, because we've got now this API at the OS layer, and now we've got standardization on that, so we can move up the chain and get to things like serverless... And I know you use App Engine, Mat; so you get to stuff like that, and maybe beyond. I think we'll have to see.

**Jon Calhoun:** So can I ask you two a question, Johnny and Aaron? What problems were you first facing when this type of solution really looked like it was going to save you a lot of headache? Do you remember, when you first started looking at it, what problems you thought it would solve? Or did you have something in mind?

**Johnny Boursiquot:** Before I answer, when you start talking to folks about what does cloud native mean, inevitably the conversation drifts into "Well, you need to decouple components, you need to transition from your monoliths to microservices and nanoservices, and serverless", and all these things that are supposed to work with each other, and all that stuff... There's an inevitable push towards breaking apart. And very seldom are you told why you need to do that, which is why there's such a backlash around microservices and all these things. It's trendy to have microservices, two-pizza teams, and all this stuff, but there's a reason why you break up a monolith... One of the reasons being to be able to independently scale one piece that has higher demand on it than another piece.

\[00:16:11.08\] Because without that, you're forced to now scale your one application vertically. You need to beef up the server, add more RAM, more CPU power... That's called vertical scaling; you need a bigger server to run your one thing. Whereby if you have smaller components - well, this component only requires two logical CPUs, and another requires eight logical CPUs, then these things will have to live in the same box. You can sort of distribute that. You can scale these things independently and horizontally. So that is one of the great benefits of having this break-up into small components.

So that was my first true realization of what -- I guess even before cloud native... I think the term cloud native, if I'm remembering correctly, came either around the same time as cloud native, or it was before it; I can't remember exactly. But I think the idea, the promise of microservices in cloud native in connection to that is have enough flexibility. It's all about flexibility. Because at the end of the day, we're doing this not because it's cool to break things apart into smaller pieces; we're all engineers and supposedly we all like Lego pieces to play around with and assemble things together - that's all well and fun and all that, but at the end of the day we work for businesses, and businesses have the goal of making money, and one of the ways to make money is by being innovative and being agile... And I'm really using the lower-case word agile here, to be explicit... \[laughter\]

So the innovation comes in terms of speed, get to market first, or go to market quickly, to respond to market demand, and that kind of thing... When you have smaller pieces that you can orchestrate and put the horsepower where you need it kind of thing - all these things feed into the innovation. And having developers who can work on different pieces of the platform - it's not one big thing, and then you have to worry about deploying that one big thing; you have release managers whose entire job is to just move things around, and just prep things for release... You can have that flexibility of teams being able to ship things independently, and still have some sort of interconnectivity within these things. That's the flexibility; that's really why we have cloud-native applications. Not because it's cool to break out of a monolith into microservices, not because it's cool to run infrastructure.

**Jon Calhoun:** Okay, so making sure I got that right - and I know this paraphrasing is gonna be butchering it... But it sounds like a huge part of it was that your organization needed to be more efficient, and part of the ways you could do that was by breaking things up into smaller pieces that could be independently deployed, worked on, everything like that.

So I ask that not because I think cloud native is a bad thing... Because I worked at Google before I went off into my own stuff, and while it wasn't Kubernetes and Docker, they had essentially their own internal version of getting resources for all this stuff... And Google wasn't just spinning up a monolith. I think we all pretty much know that wasn't what was happening. They don't make computers that beefy that I'm aware of.

So you know, it's just one of those things where I'm trying to figure out from other perspectives what problems you were solving as you dove into them... Because from my perspective, I haven't seen an obvious need for these things, and I think part of it is just because of the things I'm working on... But I also want to know, are there problems that I'm not paying attention to, that these might be able to help me with?

**Aaron Schlesinger:** \[00:19:44.11\] The last job I had, we were building a platform as a service... And it was all these containers. We started on CoreOS, with their Fleet system. I think that's deprecated now. It was sort of "We will take a container and we'll put it on X number of machines", and that was what Fleet did. And that was pretty powerful at the time, because you had these sort of beginnings of that abstraction, of "I don't need to care about VMs anymore. I can give an API a container name, and it'll do its thing."

And once we got to that point, we then had to start breaking things apart, because a platform as a service has lots of different logical components that don't necessarily fit together. And this is right along the lines of what you said, Johnny. It has a Git SSH server, it's got a logging component, it's got an administrative interface, and a control plane... And the list goes on.

So once we hit that point where we said "We just can't have a monolith with all of that stuff in it at once, because managing that thing, opening all the different ports and managing certificates and all that - that's just not feasible for us." So once we got all of our stuff running on Fleet, we then had to reinvent the wheel and figure out how to do secrets, and distributed locking, and all that stuff. And then Kubernetes came out and then we just adopted all the primitives that Kubernetes gave you... But stripping away the Kubernetes part, even though that was great, and stripping away Fleet as well - the idea that we could have implemented it ourselves would have been painful, but we probably could have - I'm not gonna say definitely; we probably could have... It's the fact that - yes, we had a technical requirement that stuff was split up, while at the same time stuff could interact with the other stuff.

Service A could interact with services B and C in a way that was manageable and that didn't require two different operations and release management teams to manage services A, B and C. And for me, right at that moment - and I remember this - I was dreading having to build those systems, to manage all the things and route network traffic and all that stuff. And once we've found Fleet, that was when -- we went down this road of starting to think about an abstraction, and starting to think about independently scaling, and starting to think about how to organize the team around all these different services, and manage the sort of organizational aspect of this... I started thinking about a lot more things, too... But right then and there was the seed that got planted in my mind, that started me down this whole cloud native road.

**Break:** \[00:22:52.09\]

**Mat Ryer:** So when you're building something simple and little, would you recommend that people still build it in this way? Or should you start with a monolith, and then when you need to break it out later, do it then? How would you approach that? What would your advice would be?

**Aaron Schlesinger:** I'm gonna use my Unpopular Opinion card right now... \[laughter\]

**Johnny Boursiquot:** There you go.

**Aaron Schlesinger:** Yeah, absolutely not. If you're one or two people, write all the code in one repo and deploy it all as one thing... Because the overhead of taking your two-person team and trying to manage all of the different microservices, and getting them to talk together and play well together - that effort is gonna outweigh the actual code you write. Let me share one more metric there...

**Mat Ryer:** Go on, please.

**Aaron Schlesinger:** I've worked on and seen apps that have more Kubernetes YAML than they do code... So that metric is disturbing.

**Johnny Boursiquot:** That's a sign right there you're doing it wrong.

**Aaron Schlesinger:** Yeah, yeah...

**Jon Calhoun:** That's when you ask "Is this a project for school? Because otherwise it's a little scary..."

**Aaron Schlesinger:** Yeah, yeah, for sure.

**Mat Ryer:** I was thinking then - so it's not that you can just use Kubernetes and everything's easy. There are still challenges that come with deploying in this way. It is still a big trade-off, right?

**Aaron Schlesinger:** Yeah, absolutely.

**Johnny Boursiquot:** To follow up with Aaron's statement here - I totally agree you should definitely not jump into microservices and all these things, and doing orchestration, and all that stuff, especially if you don't have the staff for it... It's a different competency; you're required a different kind of mindset. Yes, you can be a developer and be operations-minded. I can define myself as that; I'm a software engineer who happens to do operations. So the thing to keep in mind is that if all you need is to ship an app and have it run, if you stick with the monolith, use a pass; use Heroku, because they're taking care of all that for you - I guess I'm unconsciously biased here, because I work at Heroku - or something like it, to run these apps, so that you don't have to worry about...

Again, remember why we were leaning towards cloud native, or want to take advantage of cloud native applications? Keep the ultimate goal in mind - it is for developer productivity. Your job is not to run operations; that is not where the business makes money... Unless your business is to build a Heroku or a PaaS, you have no business really trying to run your own Kubernetes, or something like that. To me - and I'm gonna get some heat for this, but that's kind of nonsensical. You're not building a platform as a service for other people to run stuff. Maybe you're an enterprise, you have lots of different departments that have a lot of business software, and things like that, and maybe having your own orchestration tooling and all these things to allow different teams to develop/deploy things is the right approach... But you have to get to a certain scale, a certain level right before you can reach that. If you just wanna launch an app, just run the darn thing on a PaaS.

One of the mistakes I see developers make all the time is they get lured by all the announcements coming out from re:Invent, and from Google's conference, or Azure's conference. They see all these nice, shiny bells and whistles... Listen, AWS released 2,000 products last year; that's an average of six a day. That's ridiculous. So all these things are just lures, and to "Oh, let me see if I can integrate some ML services into my app here. But before I can do that, I need to set up an AWS account, I need to run things on EKS, or ECS... I can't just deploy this thing on an EC2 instance. I've gotta break it up. I've gotta have microservices, I have to have a container, and now I need a CI/CD pipeline, I need to break this thing into different storage components, and I've gotta use DynamoDB, and I've gotta use S3..." Now you're bringing all these things so that you can actually take advantage and do things the way it is prescribed, the way it is being marketed to you as a developer.

\[00:28:34.13\] Again, it's tempting, it is very tempting, because we're engineers, and when we see new and shiny, we're like "I wanna use that." Or you're thinking maybe -- and I think we've all seen resume-driven development here too, and said "Hey, I wanna use that tech. Let me find a reason. Let me convince my boss that we need tech so and so." Now you're bringing in that complexity into your world, and now you have to orchestrate around it... It's basically like a self-fulfilling prophecy almost. You're bringing all these things, and now rather than having one problem, which is ship this app and then get paid for it, now you have two problems - ship this app and all the small pieces that go along with it; now I have to manage, and orchestrate, and all these things, and then still trying to make money.

**Mat Ryer:** So why is Kubernetes so popular then, if most people shouldn't really be paying any attention to it, for example?

**Aaron Schlesinger:** I think a lot of people have really good use cases for Kubernetes.

**Mat Ryer:** So are they running it themselves, or are they building platforms as a service? ...or platform as a services. I don't know how to pluralize that.

**Aaron Schlesinger:** Is it like deer, where you just say deer?

**Mat Ryer:** \[laughs\] I don't know. Do you just say deer? Are people building deer?

**Jon Calhoun:** Do you just say PaaS, and since it's an acronym, then you can put an s, or whatever ending they need on there?

**Mat Ryer:** Brilliant. Thank you. You've solved it.

**Aaron Schlesinger:** So I think it depends. The amount of PaaS increases as the organization size increases... Because once you get to your 30, your 40, your 50-person engineering groups, now you have to really draw those lines between "Oh, hey, here's the dev ops team. Oh, hey, here's the ops team if we have that. Oh, hey, here's release management. Hey, here's development." And those role - that's a Venn diagram; that's not separate and mutually-exclusive groups. So now you're gonna have people on Kubernetes who are touching it as YAML developers; and you're gonna have other people writing Flask apps, who don't care about YAML. They wanna get their app up, and they need a public IP, and they need an SSL certificate, and whatever else.

So those are really, really different personas, and at that point - now you're looking at a group of probably SREs who are gonna be writing code to make it really easy for developers to deploy that Flask app, but also make it really hard for them to mess up the Kubernetes install, and make it really hard for them to do something that's gonna deploy an API that doesn't have an SSL cert, for example, or something that's bad practice, pretty much.

**Mat Ryer:** I didn't realize there were YAML developers now. \[laughter\]

**Johnny Boursiquot:** Yeah, that's us.

**Aaron Schlesinger:** That's us, yeah... For better or worse.

**Mat Ryer:** Right.

**Jon Calhoun:** They didn't ask you to start YAML Time yet? \[laughter\]

**Mat Ryer:** It's YAML Time!

**Aaron Schlesinger:** Today is the day. This is it now. \[laughter\]

**Johnny Boursiquot:** \[00:31:46.01\] Here's another thing I'll add to that here... I think sometimes teams are also lured by the perceived discipline that running something like a Kubernetes brings. And by that I mean the microservices approach to tie these things together, the microservices approach requires -- basically, you have a network boundary between these things. So now these components have to have clearly defined APIs to talk to each other, which kind of forces some discipline... Hey, team X, you promised that you'd have these end points for this thing; or you promised you'd implement this RPC service for that thing, whatever it is. So it creates some nice sort of compartmentalization and some discipline. You have different managers managing different teams, different timelines, different deliverables, all these things. So it bubbles all the way up.

That discipline that we're sort of inherently seeking as part of adopting these orchestration tools - I think that lure is dangerous... Because if you're an undisciplined team before orchestration tooling, you're still gonna be an undisciplined team after orchestration tooling. The tool is not gonna make your team more disciplined. You can have discipline around a monolith, you can have discipline around established processes for delivering software, which has nothing to do with the actual tooling itself. Tools are enablers.

Basically, if you're relying on tools to help you establish discipline, that's like saying "Okay, I'm gonna buy a piece of software and I'm gonna shape my business to fit into how this software is coded. Now you're following somebody else's business processes, however they've chosen to encode that. And businesses -- I'm pretty sure your business is probably not seeing things the way you are. So again, try to be disciplined about your practice, the engineering practice, the software delivery practice that you have internally, before you attempt to bring in new tools into your world, because that's just gonna add to your chaos.

**Mat Ryer:** That is a really interesting thing, because I kind of felt like yes, if you have a framework - and I know some companies essentially do this; they have a prescribed way, including command-line tools that will generate the stubs for services, and things. So in a way, and because everything else is automatic, you do get a lot for free; and like you say, you can't make those kinds of mistakes. But it does seem a little bit too good to be true. So that is very interesting, to hear that you still have to build good software... Which is kind of nice, isn't it?

**Aaron Schlesinger:** I'll really quickly riff on that concept of discipline... So this will probably make me sound like a curmudgeon, but I--

**Johnny Boursiquot:** "Back in my day..." \[laughter\] Here it comes...

**Mat Ryer:** Can you do it in an old voice? That'd be great.

**Aaron Schlesinger:** Maybe next time... \[laughter\] I guess I do sort of the misery-driven development thing, personally... So with code, what that means is you copy and paste it three times, and then you figure out what the abstractions should be. For infrastructure, for me, I need to see the mistake maybe 2-3 times before I can justify finding a technology that fixes that. So with Kubernetes, we're talking about a mistake like "I deployed service A, and it broke everything, because I didn't know what was talking to service A..." Or it wasn't compliant, whatever it might be. You almost have to crash your app (almost) in order to make that jump... Because Kubernetes is such a big leap, and a big commitment also...

**Mat Ryer:** Well, I think that should be quite good for people to hear that, because in a way, people that just don't have a clue about this stuff, in a way we're saying "Don't worry about it yet. Focus on the bit your care about, the bit that's important and unique to what you're doing, and you will then be able to solve these problems later." But how easy is that? Should we be building even our monoliths in a specific way, with an eye to the future? Or should we just build them however we have to build them to get it working?

**Johnny Boursiquot:** \[00:36:16.00\] Nein, nein, nein, nein...! No, that's me trying to have a German accent. No. Like--

**Mat Ryer:** Oh, I thought you were doing an SLA... \[laughter\]

**Johnny Boursiquot:** No, no... I can see how that-- here's the thing... So the earlier part of my career as a software engineer, I'd read the books, read the blogs, watch the videos, watch the conference talks... I'd basically be trying to become the perfect engineer, who's building reusable software, reusable components, and trying to basically have well-orchestrated systems... All these things are still good. But over time, I've been around this industry long enough, going on 23 years now; I've been in this industry long enough, I've been around enough businesses long enough, built enough businesses and applications over and over and over again to see that this dogma that we have around building the perfect system, kind of like Clu, and -- what's that Disney...? The TRON movie. Basically, solely concerned with building the perfect system, that you're failing to see what surrounds you. You're failing to see that "Okay, well, this perfect application that you wanna build right now, and have all these abstractions and these reusable components that you think you're gonna reuse - nobody's asking you for these reusable components yet, but you wanna build them ahead of time. You wanna create a future that you may have... And then you find out next month that the business is going in a different direction on all the painstaking work you've spent trying to build these abstractions and layers upon layers upon things is now trash... Because you don't know what's going on above you, how many levels above you.

Now, in a smaller company, in a startup or whatnot, that tends to happen a little less. You have a more -- the information radiates to you, so you kind of get a sense of "Okay, this is generally what's happening", or maybe you have one product, you have one line of business focus, and you know exactly what you're building... So you can kind of a little bit look ahead... But not too far ahead, because business is always changing. Business is what controls what your software is going to do tomorrow, not you.

So trying to build abstractions early on in the process -- again, I take Aaron's approach; I need to see something showing up 2, 3, 4, 5 times, and become a pain to deal with before I create an abstraction around it... Because I don't know what the business is gonna want tomorrow.

So this whole notion -- we ingest all these notions, these best practices, as we like to call them in our space, around how to build reusable software, and all these things... Yes, but also add a layer of realistic lenses to that. Look at your software as something that needs to evolve because the business side that it's serving also needs to evolve. Don't get way ahead of yourself; that's just recipe for disaster.

**Mat Ryer:** That's very interesting. And I think even if the business doesn't change, still, the best time to design solutions isn't at the very beginning, because we know the least about the problem then, don't we? Even if the business doesn't end up changing, still, the learning that you get from building is so valuable. Ernest Hemingway said "The only kind of writing is rewriting." He was obviously talking about poetry, novels, books... But that applies to software too, doesn't it? When you rewrite things, you're doing it usually for a good reason, and because you've learned something significant... Which can only help.

**Break:** \[00:39:51.21\]

**Jon Calhoun:** Earlier we mentioned that, Mat, you run an App Engine... And I think one of the reasons people levitate towards this "I need to do this all now" is that in their mind they're like "If I don't do it now, it's gonna be a lot of work later, and we're better to just put in the time now." And like you said, usually you don't know what your pain points are gonna be and what's gonna work for you...

But what I like about a Heroku or an App Engine or any of those is that I think they get the major ones out of the way. They generally suggest "You're not running your database on the same server as your code. Your code usually doesn't have a file system that it can rely on being on the same physical hard drive." That could go away; they could talk to a different server. And if you get those major parts right, I feel like you're in a good position to start refactoring towards that, and that covers your major bases...

At least from my perspective, when Heroku and App Engine and those got big, that was probably my favorite part - that it kind of got you the major ones, the major wins, and then later when you get to a really high scale, you'll know at that point what to focus on, because it's gonna be specific to your business.

**Mat Ryer:** Yeah. I mean, you're still designing APIs, aren't you? If you're building a monolith, you're still internally building APIs. You're gonna have objects, or structs, or services, or something; you're gonna have functions with inputs and outputs and things... So you are already designing APIs. Of course, there's something nice about when you do have microservices, because you have to communicate in a more official way. You're not gonna necessarily have compiler time help making sure that you're passing in the right types for arguments, and things... So it is a little bit different. But that kind of thinking can be quite useful, I think, even if you're building a monolith.

For example in Pace we have different services inside, even though it is a monolith. We still break things up by -- we sort of group them up by functionality.

**Johnny Boursiquot:** And that's the discipline that you want, right? Expecting a network boundary to help you create that discipline around your componentization efforts is the wrong approach. Again, infrastructure is not going to make your team more disciplined. You have to be disciplined, within a monolith. Again, we seem to somehow now associate monolithic applications with bad. Monolith - bad. Microservices - good. It's never that simple.

I've seen beautifully architected monoliths, that do the job really well. They have clean boundaries and separations between different components within the monolith. When I see those, I smile inside, because I'm like "Okay, somebody is being disciplined about how they build a software."

\[00:43:51.15\] Now, when you need to take something out of the monolith, to make it a standalone service, you already have a nice, clean separation. You don't have that tight coupling between all the other things within that monolith. You cannot easily take it out, and now just have an interface, some sort of RPC or HTTP interface, a REST API, whatever it is that you want; this thing you've ripped out, that is now standalone, that can be scaled independently. Again, that's the ideal scenario for me - you have a well-architected monolith where the components are loosely coupled, that you can easily take something out, put it in its own server or in its own container or wherever you need it to run (serverless, or whatever it may be), and now you have the rest of the monolith still able to communicate to that thing very cleanly. That's the perfect world, in my view.

**Mat Ryer:** Yeah, I like that. Writing components that are easy to throw away also turns out to be a bit of a super-power. If you build a monolith and there's functionality that's just spread throughout the codebase, then it's very difficult to unpick that. So if it stops serving you in the way that you want it to, you get stuck with it. And I've worked on projects where people will say "Just don't touch that area. Just don't go near it, because we're scared of it", or whoever built it, the wizard that originally built it has now gone to work for Microsoft. I lost the metaphor there... So people then become scared to touch things.

Another thing that is a handy thing to have is the ability to be able to rip those things out later, and throw them away. And to do that without feeling like you're really losing to much, or it's such an expensive thing to do, or a risky thing to do.

**Jon Calhoun:** You describing that to me -- I've talked to a lot of different people about ORMs, and using them in your code... And I feel like a lot of the times when people have really big issues with them, a lot of the issues come down to the fact that they worked in a Rails codebase, where people basically accessed essentially the database anywhere in the code. And it led to these issues where you had code that really should be interacting with an interface of some sort to get the data, is instead writing code that's actually executing SQL queries... And like you said, that makes it so that refactoring the code, or changing it as you need to, or throwing something out is like next to impossible at that point, because you couldn't change your database implementation - at least not easily - without rewriting all of that code.

But Go, for instance, is one that -- I feel like interfaces in Go make it so much easier to separate these things, without actually caring how you're communicating. Like, I don't care if this is a microservice, or if it's something that's running on the same server. I just need an interface here, and I'm gonna talk to it. That's one of the things I've really liked about Go, is that it just makes it so much easier to completely ignore that part of it and just write your code to be like "If you can get me this little set of functionality, I can do my job."

**Aaron Schlesinger:** I think once you get to that point where in your Go codebase you really are taking advantage of well-defined interfaces, and have multiple implementations of them hopefully, you're in a good spot then to try to evaluate "Hey, do I need to start splitting out microservices?" But what I think a lot of people underestimate is how much technology you have to learn in order to split that stuff out, just to get one process talking to another process on local host over a network. That's hard enough. And this is all day zero, before you actually see this thing running in production. Just day zero, "I've decided I'm gonna build a third implementation of my interface that talks over the network to this thing that I've split out..." Well, you have to figure out a couple things right then and there. Am I gonna do HTTP, am I gonna do JSON? Am I gonna do gRPC? Am I gonna wade into that 3,000-project list of things in the CNCF site to figure out if there's something else?

**Johnny Boursiquot:** \[00:48:04.09\] \[laughs\] "I think I need Istio", right?

**Aaron Schlesinger:** Yeah, you've gotta have Istio for that. \[laughter\] But that's a good point, because that talks a little bit about compliance, too. Am I in an organization that needs end-to-end SSL? Am I in an organization that needs to get a self-signed cert? The list really goes on and on... And like I said, that's day zero. When you push to production, you start feeling some pain about "Well, I can't debug as easily. I need a stack trace. 99.9% uptime... 99999", whatever it is. There's gonna be a long, long road to get from "It's a function call in memory" to "I have a thing reliably running over here, on another server, and I need my stuff to talk to that stuff."

So like you said, Jon, you have a huge headstart if you've broken this stuff out into really well-defined interfaces... And at that point I really think -- you know, this comes down to good software design, and I really think once you have that, you have a pretty good leg up on getting it to where I can split out to a microservice. But you've got a lot of work ahead of you still, and I think a lot of people underestimate really how much work it is to get something production-ready out, microservices-based... And that's where we get caught up. That's where we end up writing more YAML than code. That's where we end up not getting to market in six weeks, or a year, or whatever it is.

**Johnny Boursiquot:** Because you're still building YAML... \[laughter\] And nothing takes you faster from being a developer, to all of a sudden being a distributed systems engineer faster than trying to adopt microservices and all this orchestration stuff. Like you said, Aaron, now you have to learn a whole bunch of stuff, concerning yourself with a whole bunch of stuff... And really, in the beginning you just wanted to build this app, provide the business with a feature that they wanted, and now you're managing infrastructure, and trying to learn YAML, and Kubernetes, and ECS/EKS, whatever these things are.

I chuckle, and it makes me sort of happy inside at the same time, and I think a part of me is like okay, I don't want -- and hopefully I can speak for you here, Aaron, as well... I don't think we want to be gatekeepers; I think we can sound like gatekeepers, as people who are in this space and are doing these things... We can sound like gatekeepers, and basically trying to warn everybody away from these things... We're not. I'm certainly not. If you wanna be a distributed systems engineer, if you wanna be an operations engineer, if you wanna deal with YAML all day, every day - please, come into the field. We'll tell you "Here's the resources to learn, here are the things you need to know about it." Heck, there's tons of conference talks... I mean, you know how to educate yourselves. You're in this space, most of you are autodidacts, and you can educate yourself. You will find the resources to learn and be that kind of engineer. But don't kid yourself. If what you wanna do is remain a web developer, and produce business value, and build application, whether they be monolith, or serverless, or whatever it is you wanna do - there's a track for that. But the moment you cross into this whole orchestration/cloud-native arena and concern yourself with these kinds of things, that's gonna require you to basically expand what you thought you needed to know to ship an application.

**Jon Calhoun:** Do you think that's one of the things that causes confusion, is that people blend those tracks together as one big "A web developer has to know how to do all of this stuff"?

**Johnny Boursiquot:** I blame the marketing. The marketing from these companies - that's exactly what they're trying to tell you.

**Jon Calhoun:** And I think that's hard, because I run into people all the time who -- basically, in their mind, "I have to learn Kubernetes, and all these things", and I'm like "I've been working as a web developer for quite a while, and I don't know these things. So I can assure you you don't need to learn them."

**Mat Ryer:** Yeah, but you've got it running on a Linux box in your corner, mate... \[laughter\]

**Jon Calhoun:** \[00:52:07.14\] That's not my actual main stuff...

**Johnny Boursiquot:** With no redundancy. You've got a backup power supplier, but you don't have redundancy in your servers... Come on, man. \[laughs\]

**Jon Calhoun:** I mean, this isn't like my really insensitive stuff...

**Aaron Schlesinger:** You put your app on a USB key and plug it all in out there...

**Jon Calhoun:** I mail it to people and say "Alright, now that you've purchased, here's the login." \[laughter\]

**Johnny Boursiquot:** Remember when we used to ship software via FTP? Those were the days, huh?

**Mat Ryer:** Yeah, yeah...

**Aaron Schlesinger:** I have shipped software by rsync more than once in the past six months. It's easier to go binary, right?

**Johnny Boursiquot:** Yeah, that's right. You just ship it over there, yeah.

**Jon Calhoun:** I've definitely done that...

**Mat Ryer:** Is rsync a band? \[laughter\]

**Johnny Boursiquot:** The follow-up band to NSYNC?

**Mat Ryer:** Yeah, it was the one after. They were just copying, basically... They were just copying NSYNC.

**Johnny Boursiquot:** Nice, nice...

**Aaron Schlesinger:** Wow... \[applauses\]

**Mat Ryer:** So back to Go then... This is Go Time... So Go and the cloud - are they a match made in heaven? Why is Go -- and by the way, for balance, I should say... Because I don't wanna exclude satanists... So is it a match made in heaven/crafted by the dark lord in the depth of hell? Is it kind of special?

**Jon Calhoun:** I want the PG rating.

**Mat Ryer:** Is there something special about Go for the cloud?

**Aaron Schlesinger:** I wouldn't say special... I think Go is a very special language, don't get me wrong... But I think Go was in the right place, at the right time. I really think so.

**Mat Ryer:** Because it was designed for modern ways of deploying things. It was certainly designed to make the use of multi-core processes, for example, where in previous languages that's quite a difficult thing to do. So Go was at least designed - just because it is a bit more modern - with all this context.

**Aaron Schlesinger:** Yes. I should clarify - it's a great language for the cloud. I think it was at the right place, at the right time for cloud native, for this whole open source CNCF landscape. And actually, it's because of what you've just said. Because when you're a developer and you're looking to, say, build Kubernetes - go back to 2014 or whenever it was that the original folks were building Kubernetes. You've gotta build a system that does need to take care of multi-core, and it does need to be really good at networking, and databases, and more... And your choices then are - let's see... C++, C, Java... I'm probably missing a bunch of those languages that give you good access to lower-level primitives of the system. But when you're looking at Go, you do.

**Johnny Boursiquot:** I see you skipping Node there... That was a sleight -- I saw it.

**Aaron Schlesinger:** Throw Node in there... \[laughter\] Throw everything, I guess. Throw everything in there. But what language can you pick up that doesn't need a VM, that has high-level concurrencies/primitives built in the language, that can do networking in a couple lines of code, that's got really good support for built-in high-level networking protocols... You know there's not a lot of other stuff out there. And if you're three engineers - or however many engineers it was - at Google and you're trying to build Kubernetes, or... Shout-out to Nomad, because I saw some Nomad in the chat there... If you're HashiCorp and you're trying to build a distributed system abstraction layer, you kind of need those things, and you're gonna get up and running with something like that faster with Go than probably with C++, or Java... Not sure about Node; maybe Node will get you there just as fast... Although you don't have access to multi-core on Node, so there's a trade-off there as well.

\[00:56:08.26\] So I think Go really caught on because it has most of this stuff right out of the box that you need... And it was one of the only languages that had it at the time when a lot of these things were coming up.

**Johnny Boursiquot:** Right place, right time. The language of the cloud.

**Jon Calhoun:** I'd say it's probably not a coincidence that a company that probably has to deal with all these types of issues was also backing a language like that -- that it came from a company like that. It would be hard for me at least to imagine Go coming from a 20-person startup that just probably doesn't have the same problems...

**Mat Ryer:** Yeah, which is a good thing in a way, because it is borne out of these real environments. I think that's cool. Well, it's that time again, everybody... It's time for your Unpopular Opinion!

**Jingle:** \[00:57:10.10\]

**Aaron Schlesinger:** I already gave mine...

**Mat Ryer:** Yeah, you did. You broke the format, mate, essentially... And you will be receiving a strongly-worded letter from me. \[laughter\]

**Johnny Boursiquot:** Handwritten.

**Aaron Schlesinger:** Handwritten, alright...

**Mat Ryer:** Yeah, sure.

**Jon Calhoun:** We'll be updating the guest doc to say "Save your unpopular opinions." \[laughter\]

**Aaron Schlesinger:** I can give a second, if you all would like...

**Johnny Boursiquot:** Yes.

**Aaron Schlesinger:** I think I have plenty. I am a curmudgeon after all, so I can give plenty.

**Mat Ryer:** Do the voice.

**Aaron Schlesinger:** Back in my day...

**Mat Ryer:** There we go... \[laughter\] That's what I wanted. Okay, what's your second unpopular opinion, Aaron?

**Aaron Schlesinger:** Well, I would say that Go is not the only language of the cloud, or language of cloud native either.

**Mat Ryer:** Interesting.

**Aaron Schlesinger:** We've started to see some new applications, I guess, of languages in the cloud native space. I'll shout out to some of my old colleagues, who I wrote that PaaS with. They're doing a lot with Rust for Kubernetes right now... And Linkerd is also written in Rust. That's a service mesh. Half of Linkerd is written in Rust. And Rust is turning out to be a pretty good language because of the safety aspect. It's got some really great performance characteristics, including with concurrency... And all that stuff is memory-safe and concurrency-safe when you compile it. So it's a little bit more difficult to learn. Some might say a lot more difficult to learn, it depends on who you ask... But you get some of those same properties of Go while also getting that safety guarantee, so you don't have race conditions, you don't have null pointer exceptions, and that kind of thing. So definitely not the scale of Go yet, but I have some confidence that it's gonna get up there soon.

**Mat Ryer:** Is that also one of the benefits of microservices? You mentioned something's half-written in Rust... Can you mix different technologies and pick something that maybe is better suited for solving particular problems?

**Aaron Schlesinger:** I think so, yeah.

**Mat Ryer:** Because that's harder to do in a monolith, isn't it?

**Aaron Schlesinger:** Yeah, yeah. Of course, at a technological perspective - yeah, for sure. Because you can have Rust talking to Go over gRPC, or whatever... But I think when we're talking about the layer cake that Johnny mentioned at the beginning, you're app-level code can be - and probably should be - something like Node or Python... Because that's where you're writing business logic, and you're talking to databases, and rendering templates, and all that. I would do it with Buffalo, for example, because that's my most preferred web framework right now these days.

\[01:00:11.15\] But then when you're going lower down, while you still might be writing Go, you might end up writing Rust because you've gotta integrate with some C stuff, and that's doable there... You might go and write some C, if you've gotta integrate with whatever is going on there. And this comes down to right tool for the job, but we're now applying it to the cloud native layer cake.

**Mat Ryer:** Right. Hm... Good one. Any other unpopular opinions?

**Aaron Schlesinger:** Thank you. I try... I try to bring the curmudgeon to the show.

**Mat Ryer:** I say good one. What we're doing is taking the clips of all the unpopular opinions and then doing a poll on Twitter. So you can follow @GoTimeFM on Twitter and you can vote to decide whether that is indeed unpopular or not. So far, they've all been popular... And I don't know if it's just that the guests make such a compelling case, and we're just suggestible... Or if in fact people are just not taking the segment seriously enough. \[laughter\] Has anyone else got any unpopular opinions?

**Johnny Boursiquot:** I do... But again, I have to, I guess -- well, let me not poison the world here; I'm just gonna say it, and if you think it's unpopular, that's your business. I think every startup at least, but even within the enterprise - just because you're in the enterprise and you have more \[unintelligible 01:01:35.06\] doesn't mean everything needs to be microservices... But I think you should reason your way out of a monolith before you adopt microservices. Find all the reasons why you don't need to deploy an application as a monolith before you come up with the reasons, and the excuses and whatever it is you wanna tell yourself for adopting microservices and all the orchestration and baggage that comes along with it. Because if you cannot, realistically - and I don't mean just sit down by yourself, write yourself a list and then kind of weigh pros and cons all by yourself, alone... No. Get some feedback. Have your entire team weigh in. Heck, create some language around it and have your business leadership team weigh in on it if you can. I bet they'll ask you "Hey, what's gonna take you longest to do? What's gonna take you longest to manage/maintain? What's gonna cost more in terms of people?"

All these things factor into that decision. So basically, you need to reason your way out of not choosing a monolith before you adopt microservices... Because sometimes I think we try to look for reasons why we should use the tech we think is shiny, and new, and cool, and we shy away from the stuff that might be old, but it works. The boring tech. There's a reason why SREs like boring tech... Because excitement in infrastructure is never a fun thing. \[laughter\] So yeah, that's my piece of advice, I guess.

**Mat Ryer:** Great.

**Jon Calhoun:** I did YCombinator a while back...

**Mat Ryer:** Show off... What did you do? \[laughter\] On-site Linux...

**Jon Calhoun:** I think it was Paul Graham that had said in his opinion every startup should be using the language that whatever the founders are most comfortable writing with - that's the language they should be using. Because in most cases, as a startup, you're going to be way quicker even if that language is something that's gonna be harder to hire for, or you don't think it's the best language for the job... Chances are you can build the thing faster if that's the language you're most efficient with.

**Mat Ryer:** Right.

**Jon Calhoun:** I forget what the example was... There was one company that was written in -- not Haskell... Maybe that's Erlang. It was some language that I would not have expected a modern startup to come with... And they did, and they did very well for the longest time. That language did not hold them back.

**Mat Ryer:** COBOL?

**Jon Calhoun:** \[01:03:55.15\] Now, I don't know if it did later, and maybe they needed to change some stuff; I don't know. But I think, to Johnny's point, I think at times people think "Oh, I'm doing a startup. This is my opportunity to try these new things", and in reality, if you want this business - which is what it should be - to succeed, you need to focus on solving business problems, not learning.

Now, if you do wanna build a project to learn, I think that's different, but I don't think that should be a startup necessarily. Maybe I'm wrong there, but...

**Mat Ryer:** No, it really makes sense. I think so. It's really about being pragmatic, isn't it, and resisting these shiny objects... But yeah, it is tough.

**Jon Calhoun:** I should also add, if there are investors who wanna pay me to go learn other languages, I'm all for investment. \[laughter\] I will take it.

**Aaron Schlesinger:** Drop them an email...

**Mat Ryer:** Great. Well, next week we are actually gonna be -- this is a subject that comes up a lot. We're gonna be talking about how you can introduce Go into your team... And we talk about people chasing those shiny objects; Go, for some people, is a kind of shiny object, and we're gonna be digging into that and exploring some ways we could do that... So that'll be a very good one. Definitely tune into that.

And also, we don't do ads on Go Time, really. We don't advertise Go Time... So tell your friends that; just tell them about it. Obviously, if they don't have a computer, maybe just leave them alone. But if they're a developer, spread the word a bit for us, please, because we'd love to grow our audience a bit, and meet new people...

**Jon Calhoun:** Carlisia is joining us, for any of our old listeners... Listeners who have been around a long time, not old as in old age.

**Mat Ryer:** Yes.

**Aaron Schlesinger:** Cool.

**Jon Calhoun:** Anybody who's been around a long time, one of the original hosts, Carlisia, is going to be joining us next week.

**Mat Ryer:** Yeah. So that's gonna be very exciting. And we are gonna actually be doing something with Brian and Erik also coming up; they're part of the original cast...

**Johnny Boursiquot:** OG.

**Mat Ryer:** Yeah. What does OG mean?

**Johnny Boursiquot:** You don't know OG -- wow...

**Aaron Schlesinger:** Original gopher...

**Johnny Boursiquot:** Goodness...

**Mat Ryer:** Does it mean original gopher?

**Johnny Boursiquot:** Well, we kind of coopted it, but... Yeah.

**Mat Ryer:** Yeah. It doesn't make sense.

**Johnny Boursiquot:** This is a safe version, yes.

**Aaron Schlesinger:** Yeah. And we're gonna go with that for this part... \[laughter\]

**Mat Ryer:** Okay, now I'm even more in the dark. Can someone on Twitter just -- I mean, can someone just tell me what OG stands for, please?

**Jon Calhoun:** How about this - we'll stop recording, and then at that point we can discuss. \[laughter\]

**Aaron Schlesinger:** Organic grapes. We've got someone -- organic grapes.

**Mat Ryer:** Oh, organic grapes... \[laughter\] Okay, yeah. That's good.

**Aaron Schlesinger:** Erik and Brian both grow grapes, so that's where the term comes from... \[laughter\]

**Mat Ryer:** I don't mind being treated like an idiot... No probs. \[laughter\] Well, unfortunately, it's been great hanging out, but that's all the time we've got today. Everyone who's listening - go away. See you next time. \[laughter\]

**Johnny Boursiquot:** Wow...!

**Jon Calhoun:** Alright...

**Aaron Schlesinger:** Take care, everybody...

**Break:** \[01:07:19.21\]

**Mat Ryer:** Okay, so we'll just do 1-2-3 and then clap after.

**Johnny Boursiquot:** Yes.

**Mat Ryer:** Okay. Here we go.

**Jon Calhoun:** Who's counting?

**Mat Ryer:** We only get one of these, we've been told. Okay... 1-2-3. \[claps\] Brilliant.

**Johnny Boursiquot:** That was like the closest we've ever gotten.

**Mat Ryer:** Yeah, I think that was good.

**Aaron Schlesinger:** Nice.

**Mat Ryer:** We're in sync.

**Johnny Boursiquot:** We're in sync. NSYNC. That's the same as the band, right?

**Mat Ryer:** Not NSYNC...

**Johnny Boursiquot:** Okay, okay.

**Mat Ryer:** No, that's a different podcast, where we invite guests on and we have to do four-part harmonies...

**Johnny Boursiquot:** \[singing\] Everybody... Yeah-yeah... \[laughter\]

**Aaron Schlesinger:** \[singing\] Rock your body...

**Mat Ryer:** Cheers, mate. Yeah, I didn't get in.

**Jon Calhoun:** You could start your own.

**Johnny Boursiquot:** That was actually the wrong band. We're singing Backstreet Boys...

**Jon Calhoun:** That's probably why Mat didn't get in. \[laughter\]

**Mat Ryer:** Yeah... You're singing all the wrong band songs.

**Jon Calhoun:** He's like "I'm a really big NSYNC fan, I swear", and starts singing their own song... \[laughter\]

**Johnny Boursiquot:** That was a setup... Oh, man.

**Mat Ryer:** This is already going well, ain't it?

**Johnny Boursiquot:** Oh, yeah. It gets better?

**Mat Ryer:** It will.
