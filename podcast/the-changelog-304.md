**Jerod Santo:** Okay, so we're joined by Corey Sanders, head of Azure Compute. Corey, first of all, thanks for joining us.

**Corey Sanders:** Of course, great to be here. Thank you for joining us to Build.

**Jerod Santo:** It's great to be here for us as well.

**Adam Stacoviak:** We're honored to be here, honestly. Thank you very much for having us.

**Corey Sanders:** Yeah, absolutely.

**Jerod Santo:** So for the completely uninitiated, never heard of Azure perhaps, have been living under a rock, what is Azure Compute? Give us the high-level first.

**Corey Sanders:** Yeah, totally. It is a set of services (not just a single service) that on the core VM side offer you Agile infrastructure - you can spin up virtual machines, you can run your services on it... But then the services in my team go well beyond just the core compute. We also do the Azure Kubernetes service, which we've talked a lot about today in the keynote.

\[00:04:09.10\] We have also Service Fabric, which is a sort of managed PaaS service, and then higher-level services - some of the eventing services, messaging services are also in my team; Event Grid is also in my team - sort of more of an event-based pops up type solution.

They're all a part of our overall cloud offering. I don't know how much broad of a spectrum you want me to give, but that's our cloud offering on Microsoft.

**Jerod Santo:** So let's talk specifically maybe about Event Grid first, because it seems like that's a good place to dig in.

**Corey Sanders:** Sure.

**Jerod Santo:** What exactly does it offer? You mentioned it's event-based, but that's about all -- you said it pops up, but... Go into it more.

**Corey Sanders:** Totally. With the growth and excitement that we're seeing from serverless-based application models, we've sort of identified that there was a gap in some of the model, where certainly there's the ability to run just arbitrary code functions, which is basically an event fires, and you run some code - great. There's also sort of workflow - we have an event fire, and we run through a workflow called Logic Apps services. These are kind of our core serverless platforms.

The thing that we've identified was those are great, but there's no platform in the cloud (period) that offered sort of an event-first platform to make it very easy to launch those services. Basically, a publishing and subscribing model where different services, whether inside Microsoft or outside Microsoft, can create an event.

Let's say every time you drop an image into a storage account, this will create an event using our event service, and then this event service will fire whoever's subscribing, whoever is saying "I will now listen when you publish." You can make that something like Azure Functions, and so on. The reason why it's so important for serverless is that your classic eventing model is a polling model; it's like "Okay, I've got an event, now listen..." But for serverless, that's nonsense, because the whole point of serverless is you don't launch until you need to launch... So now you need something to call into you, and that's where this idea came from.

What's really cool about Event Grid is that it's not strictly tied to our services. You can have third-party calls that will create events, and you can also call out to third-party services or applications that you write. You can basically write your own serverless application services using Event Grid as sort of the backbone.

In fact, even just last week we launched an open source model called Cloud Events, which is basically a CNCF-led open source model that will allow pretty much any service anywhere to call into Event Grid and take advantage of it. It's very cool.

**Adam Stacoviak:** What's the name of that?

**Corey Sanders:** Cloud Events was the CNCF solution, and then Event Grid is the service that we offer.

**Adam Stacoviak:** Gotcha. So did that go through the natural incubation period? Is it a project?

**Corey Sanders:** It's version 0.1, announced last week at KubeCon.

**Adam Stacoviak:** Okay. Well, we've missed that. We weren't there.

**Corey Sanders:** I'm sorry, it was in -- where was it in?

**Adam Stacoviak:** Copenhagen.

**Corey Sanders:** Copenhagen, I was gonna say. It's far away, but...

**Jerod Santo:** Yeah, it was a long one.

**Adam Stacoviak:** We came here instead \[unintelligible 00:07:15.21\]

**Corey Sanders:** I owe you, I owe you...

**Adam Stacoviak:** Yes, sir.

**Corey Sanders:** I have people who were at both, so just to--

**Jerod Santo:** People who were at both? So we're slacking, is that what you're saying...?

**Corey Sanders:** I didn't wanna say it, but you said it. \[laughter\] Yeah, we had people who were there Friday for this announcement, and then flew in this weekend.

**Adam Stacoviak:** Wow. Congratulations, that's awesome.

**Corey Sanders:** Yeah, it was a cool thing.

**Jerod Santo:** That is cool.

**Corey Sanders:** If you wanna see something super-cool, Friday morning the keynote had a demo that had us, I think it had Google, it had AWS... Basically, it had all the cloud providers taking part in this sort of end-to-end event experience using this Cloud Events thing that we're part of the work group for... So it's very, very cool.

**Adam Stacoviak:** So this is open source then... Is it an extension of Event Grid?

**Corey Sanders:** Cloud Events is a spec that now we've implemented.

**Adam Stacoviak:** Okay, gotcha.

**Corey Sanders:** \[00:08:03.19\] We were the only cloud actually that did a "You can publish out of Cloud Events", but many of the cloud providers you could subscribe into. With Event Grid you can both send out Cloud Events format, and listen Cloud Events format. It's a specification that now you can use, and it's a nice thing with where events are going and where IoT is going... Having sort of a standard that you can go write your events to is really nice, because it means you're not tied in with any cloud.

**Jerod Santo:** Exactly, which is awesome.

**Corey Sanders:** We're pretty excited to support that.

**Jerod Santo:** We like that as users because we think it makes the clouds compete on a level that we would prefer them to compete...

**Corey Sanders:** Of quality of service, versus an ability to lock in.

**Jerod Santo:** Exactly, so that's spectacular.

**Corey Sanders:** I'm with you.

**Jerod Santo:** Is there any other examples of that going on?

**Corey Sanders:** Tons. Cosmos DB is a great example of this. Cosmos DB, if you saw this morning...

**Adam Stacoviak:** We did, but give us the -- we're uninitiated.

**Corey Sanders:** So the exciting thing about Cosmos DB is it's a NoSQL offering, it's a global offering. It has some really interesting things -- it's got multi-master write, so you can have writes happening all over the world and figure out how to sort of reconcile that... You've got different consistency models, so you can decide whether it's strictly consistent, so it'll automatically write all the time, or eventually consistent it'll get there... And then it has some crazy SLAs - latency SLA and five nine SLA for availability.

**Jerod Santo:** There's a latency SLA? I don't think I've ever heard of that before.

**Corey Sanders:** There's a latency SLA. It's the only service that has a latency SLA. Yeah, it's really cool.

**Jerod Santo:** Interesting. So how does that work? You say, "I need like \[unintelligible 00:09:33.20\]

**Corey Sanders:** It's basically a commitment of sort of "When contacting the service, this is how long it will take you to get reads and writes out."

**Jerod Santo:** Huh. Okay.

**Corey Sanders:** But the really cool part about it is that it's multi-model, which means you can write to it using a wire protocol with Cassandra or Mongo or Gremlin, which are all open source-based solutions... So you can basically write a Cassandra-based application, point it at Mongo DB, get this high SLA, get this multiple-region replication, get this consistency model... So you're not locked in, you've got portability, you can move to another Cassandra deployment if you want to, but the service that we offer I think is the best around, so you'll hopefully want to stay because it's such a great service. And Kubernetes service that we've talked a lot about this morning, as well - similar category.

**Jerod Santo:** Yeah, absolutely. Let's go back to serverless and this Event Grid...

**Corey Sanders:** Sure.

**Jerod Santo:** ...because I've taken a few stabs at serverless... I think it makes tons of sense for the IoT space, especially when there's like -- maybe not single-use devices, but simple use devices... Areas where I get into confusion are like -- I'm like "Well, am I doing this wrong, or what's the deal?" I start shoving all this stuff into a single function, or I start wondering "As a developer, how do I get my--"

**Corey Sanders:** Where do you draw the lines \[unintelligible 00:10:53.05\]

**Jerod Santo:** Yeah, like, we believe in the single responsibility principle, and refactoring into smaller functions etc. How do you architect these serverless things? Do they scale up, or is it only good in the small?

**Corey Sanders:** It's like the old porcupine joke, "Very carefully."

**Jerod Santo:** Yeah, exactly.

**Corey Sanders:** I think that this is one of the challenges that actually we as an industry have with serverless. Serverless is fantastic when it comes to IoT, as you mentioned, and there's going to be a core capability there, because it really breeds that scenario, right? Like, you've got your edge solution, you've got your IoT solution; when you need it, it fires, and when you don't, it's quiet.

**Jerod Santo:** Exactly.

**Corey Sanders:** I also think actually it's a great scenario for automation. This is where we've seen a lot of usage for serverless, in fact maybe even more than IoT, which is every time a VM gets created, do this thing; every time a storage thing happens, do this thing. This type of automation, this type of dev ops experience - I've seen a lot of usage of serverless in very exciting scenarios.

\[00:11:56.24\] The one that I think is still pending, frankly, is an entire app being written with serverless. It's very hard... It's very hard because the tooling is just not there, and I feel like we're farthest along in some of these things - like, you can do local debugging of functions, so you can basically bring a function down, you can run it locally in your box, you can debug it, you can put breakpoints and so on, just like you'd expect for a normal app... But still, function chaining, which you need to write a large app, is very hard.

**Jerod Santo:** Exactly.

**Corey Sanders:** Monitoring a function chain - where does the function fail... It's really hard, and I sort of think back to the early days of object-oriented coding, where the way you would debug object-oriented coding would be you'd actually go into sort of the C language and look at what your variables were, right? None of it actually worked, so you basically had to fall back down to --

**Jerod Santo:** Yeah, it was a facade.

**Corey Sanders:** Exactly right, it was a facade... And with \[unintelligible 00:12:52.28\] So until you sort of got to models that were actually built with object-oriented first class... I think we'll get there; I just don't think we're there yet. That would be at least my perspective on the serverless world.

**Jerod Santo:** Well, that's heartening, because I just thought maybe it was--

**Corey Sanders:** Maybe it was just you?

**Jerod Santo:** Yeah, like I don't get the serverless -- I mean, I get it... But I didn't get.

**Corey Sanders:** I mean, that may be true too, I don't know; we've just met, so I don't know. I don't wanna speak on behalf of--

**Jerod Santo:** Yeah, very possibly.

**Adam Stacoviak:** What's some of the tooling out there for this scenario, for serverless?

**Corey Sanders:** Well, the integration with some of our dev tooling I think is a good example, like VS Code, which is nice, open source, run anywhere, so the ability to take it and debug it locally - that's some things that could really help. And then monitoring - I think that the monitoring tooling is getting there; both us and other clouds - I think we're getting this ability to monitor between it... But you really need -- I think you need some sort of programming model abstraction on top that is going to understand function chaining and sort of take care of it for you, and sort of be able to build out how to go monitor and debug it along the path...

I feel like there's constructs that are still missing, and frankly, we're working on some things... I know some of our cloud friends out there are also working on some things... I think we'll see a lot of improvements over the next year in this area.

**Jerod Santo:** Do you believe that it is inevitable that serverless will be the way to go for large-scale applications and we're just not there yet, or do you think perhaps that's just a round peg in a square hole?

**Corey Sanders:** I think it's gonna be a fundamental part of the overall programming model. I don't know how long it will take to get there. I actually do return back to the object-oriented world, where in the early days of object-oriented if you'd ask some of that questions, they'd say "I think probably C is gonna stick around for a long time", right?

**Jerod Santo:** Yeah, exactly.

**Corey Sanders:** I mean, it has, right?

**Jerod Santo:** It's still going.

**Corey Sanders:** Exactly. So I think that there will be a long time before we say a majority of the world is even written in this way, but I do think we will start seeing that, because the benefits are so clear.

**Jerod Santo:** I was gonna ask, what are the virtues?

**Corey Sanders:** I think both the agility and the cost... Imagine effectively having a program that you've written, an application that you've written and it's split up into functions today... Now, imagine in your mind you only pay for each one of the functions when they get called, and never any other time. So it's never sitting on a server, it's never sitting anywhere in a PaaS service...

**Adam Stacoviak:** It's priced in milliseconds, right?

**Corey Sanders:** It's priced in milliseconds, by the lines of code that are executed. It's hard to get much more agile in your pricing than that...

**Adam Stacoviak:** Yeah, that's as minute as you can get. Next is nanoseconds though...

**Corey Sanders:** That's right. Nanoseconds... \[laughter\] That's right.

**Jerod Santo:** And then picoseconds... \[unintelligible 00:15:35.27\] Give me some pico.

**Adam Stacoviak:** Either way, it's getting smaller, so keep it going.

**Corey Sanders:** That's right. What comes below pico? I should know this...

**Adam Stacoviak:** Zepto... I don't know, I made it up.

**Corey Sanders:** You may be right.

**Adam Stacoviak:** Something like that...

**Corey Sanders:** Well, zepto is \[unintelligible 00:15:47.04\] Anyway, you can look it up.

**Adam Stacoviak:** Jerod's googling right now.

**Jerod Santo:** "What is smaller than pico..."

**Corey Sanders:** \[00:15:58.07\] Either way... And then the other aspect of that is that you look at something like a microservice model - and we showed this a little bit today with some of the cool, new development tools that we've talked about when it comes to Kubernetes, and being able to basically take a microservice, take it out and build sort of updates to that microservice while leaving the rest of the service untouched... With serverless, that's even easier. You're function-chaining, you start saying "Great. Take this function and just update it", and it's like that, updated and calling in into it, and suddenly you've got an entirely new path for your application going through that new function... So the agility and the cost reductions I think will drive it there.

But then you start thinking to yourself, all CI/CD -- I mean, what CI/CD pipelines have you seen that really have deep chaining of functions and sort of pipelining of functions? They don't really exist. We do have CI/CD updating with functions, but it's still pretty primitive. So I think we're getting there, and I think we WILL get there, and I think it's gonna be a core part of many services, but I think it's gonna see the progression like object-oriented saw.

**Jerod Santo:** Real-time update - a picosecond is one trillionth of a second...

**Corey Sanders:** Makes sense.

**Jerod Santo:** Smaller than that is a femto...

**Corey Sanders:** Femto...! I did know that.

**Jerod Santo:** Smaller than that even is an attosecond, which I've never heard of in my life...

**Corey Sanders:** I did not know that one.

**Jerod Santo:** ...and I can't even pronounce what that means, so we'll move on.

**Adam Stacoviak:** So zepto doesn't even exist then... \[laughter\]

**Corey Sanders:** Zepto -- I think it's the other side, it's the big one.

**Adam Stacoviak:** I made it up. It was pretty -- it sounded on point...

**Corey Sanders:** It sounds like something from Superman, I think, so that makes sense.

**Adam Stacoviak:** Yeah... Corey agreed, in the moment...

**Corey Sanders:** In the moment...

**Adam Stacoviak:** There you go.

**Corey Sanders:** I'm a trusting soul, I'm a trusting soul.

**Jerod Santo:** Zeptosecond I think you're referring to - one sextillionth (you've gotta be careful how you say that one) of a second. Alright, so we've covered that...

**Corey Sanders:** It sounds good. I'm glad we got to the bottom of this.

**Jerod Santo:** This is an educational show.

**Corey Sanders:** We've all learned.

**Adam Stacoviak:** Now we know.

**Corey Sanders:** Now we know.

**Adam Stacoviak:** One of the slides in Satya's keynote - I think it was almost an opening slide - was "The world is a computer", and I'm in this, I get it, but I didn't really consider that being the truth, right?

**Corey Sanders:** It's crazy, that's right.

**Adam Stacoviak:** That seems so profound to see on that screen... What does that mean to you in compute?

**Corey Sanders:** This is where when you look at some of the services and things we've talked about today with like the IoT Edge, this is really where you start seeing this become a reality, with the sort of explosion of IoT, where just everything is gonna have some level of intelligence to it... That sort of pushes down this whole edge concept of "Great, now that you've got that, you're going to need these edge components to be able to do some work." You can't just have them all calling home and saying "Tell me what to do." They need to be able to do some work... So this concept of taking computation, pushing it out to the edge -- but then the principle of that, it's just a part of the cloud; that's not creating something different from the cloud, but actually creating sort of a--

**Jerod Santo:** It extends it.

**Corey Sanders:** It extends it, exactly. And then how do you take a consistent programming model, a consistent application model and make it possible to deploy on that edge? This is where IoT Edge, which we open-sourced today, which is very exciting... So that means, again, portability - you don't need to feel locked in with our platform.

**Jerod Santo:** Come back to tell us exactly what that means, but keep going...

**Corey Sanders:** Yeah, I will. And then the ability to deploy -- perhaps even more important, the fact that all of the components that deploy into IoT Edge are containers, which means again, they have portability, they can deploy anywhere... So you take our cognitive services, you take our function platform (also open source) - you can take those, you can containerize them, you can deploy them in this IoT Edge, and suddenly, that IoT Edge can run disconnected, so we can start doing intelligence and using the cognitive services that you've built/developed in the cloud, but it can run without talking to the cloud.

**Adam Stacoviak:** Which you open-sourced with the runtime portion of it.

**Corey Sanders:** With the runtime portion of it, exactly. I think that is super-compelling -- and then Azure stack sort of up the chain, where it can run even the full cloud in that environment... It's super compelling when you look at that sort of cloudy picture, where it's got the center cloud, and then sort of the edge cloud... It's just super-compelling to say "Look, you write once and you can deploy anywhere." It's just a very, very exciting world that that could be.

**Jerod Santo:** \[00:20:14.21\] Yeah. Let's go back to the open-sourcing of the runtime...

**Corey Sanders:** Yeah.

**Jerod Santo:** What is that runtime, what does it look like?
**Corey Sanders:** It's fairly simple. It effectively runs containers and manages the health of the containers running inside that edge device. In the example today, the camera - it could run containers inside the camera, and the camera had enough computing power to be able to sort of do that, and do that work. That included cognitive services, it included functions, it included those aspects, and then the IoT Edge was basically taking the containers that were built in public Azure and accepting them and deploying them, and sort of managing them so they could take updates, and they could communicate back, and they could communicate the health of the containers, and so on. So it ends up being sort of a hosting platform for the actual container \[unintelligible 00:21:01.18\]

**Jerod Santo:** Kind of like an operating system, or actually, well--

**Corey Sanders:** It's sort of a layer above the operating system, right? Because those things have an operating system. It's more of a PaaS type environment. It's more of a container or orchestrator, but on the local host.

**Jerod Santo:** What technologies is that built with?

**Corey Sanders:** Well, it's built with a lot of technology inside Azure. It uses components of actually Service Fabric, which has got some capabilities to do container management, but it also has actually Kubernetes-based support as well. So it's ending up trying to be kind of an enablement of whatever type of orchestration you want, but it also shouldn't matter. So it's built with those sort of core functionality capabilities, but in the end the customers just see that their containers are deploying, so \[unintelligible 00:21:41.26\]

**Jerod Santo:** We saw that today running on a Raspberry Pi.

**Corey Sanders:** You did, exactly. Raspberry Pi, you saw it on the copter.

**Adam Stacoviak:** The Maverick I think it was...?

**Corey Sanders:** Yeah exactly, the DJI... And then you saw it running on the camera directly, the Qualcomm camera; all of those were running that runtime directly.

**Adam Stacoviak:** It's an interesting partnership too to see you guys working with DJI. I mean, they're obviously the number one drone--

**Corey Sanders:** Yeah, I called that a copter and I'm embarrassed, because I don't think that's actually what we call it... Drone is the word. I'm embarrassed...

**Adam Stacoviak:** I'm not correcting, I'm just saying the proper term...

**Corey Sanders:** Don't edit that, people should know that I'm embarrassed. \[laughter\]

**Adam Stacoviak:** There's all sorts of people using drones, from the DJI's perspective... I'm a drone user, we do some filming, and stuff like that; it's a lot of fun. I guess, where do you see -- the example they gave us was agriculture, in the industry, examining pipelines or going over fields... This is an interesting place to put that. Do you see, say, agricultural companies becoming software companies and using this runtime on the edge? Who's using this runtime? Is it DJI, or is it farmers...?

**Corey Sanders:** Yeah, it's interesting... One of the points we do talk about a lot is that we think every company is becoming a software company. I think as you sort of look at both AI and you look at the cloud capabilities, there's a little bit of every company getting involved in technology, because they have to; that's the only way to compete.

Specifically in this case, it can be a combination of both of these. I would actually expect in this case that DJI is creating the environment and the platform to be able to deploy and control the drone and engage with it, but the end business requirements are gonna come from that end customer.

**Adam Stacoviak:** Right. How I use the drone is how I wanna use the drone, and...

**Corey Sanders:** Yeah, exactly, and what sort of machine learning am I doing? Am I detecting broken pipes, or am I detecting broken fields? I presume that's a different model. So even if it is the demo that we showed on the stage - take a bunch of pictures and identify it and learn the model in Azure, take the container and deploy it, that should be fairly easy; it doesn't take a lot of development skills to do it.

**Adam Stacoviak:** That's so interesting to put that kind of power in general developers' hands...

**Corey Sanders:** Yeah, it's unbelievable.

**Adam Stacoviak:** \[00:23:58.26\] It's astounding. It takes so much to train these models and do all this interesting stuff around machine learning and neural networks and all the necessary things, and you've--

**Corey Sanders:** We democratize all the time. Democratizing AI, making sure that whether you're a data scientist or an entry-level developer, you can take advantage of these tools.

**Adam Stacoviak:** Tell him, Jerod... We have to make a practical rhyme; we're Practical AI people around here... Tell him.

**Jerod Santo:** \[laughs\] Yeah, we have a show in the works, a brand new podcast...

**Corey Sanders:** Is this a secret? This is for real...

**Adam Stacoviak:** We're announcing it. Right now!

**Corey Sanders:** This is an announcement!

**Jerod Santo:** Nobody knows this but you!

**Corey Sanders:** Okay, good.

**Jerod Santo:** And maybe a few other people.

**Corey Sanders:** The people that may be listening...

**Jerod Santo:** Everybody else who's listening to this. \[laughter\]

**Adam Stacoviak:** It's known...

**Jerod Santo:** It's called Practical AI. It's a brand new podcast. It's not an episode, it's a whole new show.

**Corey Sanders:** A whole new series. A spin-off series, as it were.

**Jerod Santo:** That's right. And we're quite excited about it.

**Corey Sanders:** So it's gonna be focused on... Practical AI.

**Adam Stacoviak:** Making it practical.

**Jerod Santo:** Making it accessible. We're democratizing it. It's very mystical to many of us still, and there's so many high-level concepts that need discussing... There's ethical implications, there's privacy, security, there's the nitty-gritty of how you deploy it to the edge and whatnot, and there's so many conversations that would take over the Changelog if we were to have them all... So it's like, "Well, let's give it another outlet." So anyways...

**Corey Sanders:** You saw the video at the end of Satya's keynote. Very touching... But it's a good example of sort of the power of AI, which is just being able to change the rules of accessibility. The two parents who are visually-impaired, who are blind, raising a child who's not, and using machine learning and computer vision to tell them what's happening in their surroundings. It's changing our lives in front of us. I'm sorry, I'm getting choked up; I don't know if it's the video or the beer or what, but anyway... \[laughs\]

**Jerod Santo:** It's exciting stuff. There's a lot going on, especially in the robotics space, in the AI space and in the serverless space... It's very exciting. What else are you excited about that we haven't asked you about or haven't talked to you about today?

**Corey Sanders:** I think we talked about a lot of the things I'm excited about. We talked about IoT edge, we talked about the overall edge strategy and where we're going, which I think is exciting; we talked about AI and the opportunities there, and we talked a lot about the open source work; we talked about Cosmos DB... I think maybe one that we didn't spend as much time around was the Azure Kubernetes Service, which has been really exciting to see our container-based implementation of this, and then the developer tools around it.

Some of the things that we showed today, the developer tools, things like doing live share, being able to edit a single container in a microservice environment without touching the rest of the environment...

**Jerod Santo:** It's particularly hard to demo that one, because it's kind of invisible, if you don't look closely...

**Corey Sanders:** Exactly. It should just work, right? You shouldn't see anything wrong.

**Jerod Santo:** Yeah.

**Corey Sanders:** And then even one of the things that we didn't show today, but is very cool - IntelliCode... Which you should go take a look at as well if you haven't yet. This is actually built as part of Visual Studio, and it goes in and it uses AI - again, using AI for practical purposes - to try and detect bugs that you may have in your code... Do you like the pitch that I used for your show?

**Adam Stacoviak:** I love that.

**Jerod Santo:** We love it every time somebody says "Practical AI." We nod. \[laughter\]

**Corey Sanders:** So that practical usage case there... Now you have to get these guys on your show to talk about this.

**Adam Stacoviak:** We will.

**Corey Sanders:** It goes in and it can predict bugs that you're writing based on other ways that you've written your code. So it'll come in and say "92% chance that you meant this when you wrote this in your code." And it can even use external, sort of like "Hey, we've seen other people do this, and they always use this instead." It's really pretty cool, actually.

**Jerod Santo:** What if you don't write bugs? Just asking for a friend...

**Corey Sanders:** Then you become the model that AI needs to learn from.

**Jerod Santo:** \[00:27:59.15\] Oh, I like this... Tell me more. \[laughter\]

**Corey Sanders:** You are patient zero for the system, so we need to study you, I think.

**Jerod Santo:** Okay.

**Adam Stacoviak:** That' interesting.

**Jerod Santo:** I'm very expensive to study. \[laughter\]

**Adam Stacoviak:** However, one downside potentially to this is the feeling of over-the-shoulder as you're coding.

**Corey Sanders:** Sure.

**Adam Stacoviak:** Coding is kind of an intimate, personal thing...

**Corey Sanders:** Sure.

**Adam Stacoviak:** you get in your zone, put your EDM on, whatever... And you kind of feel like your editor is always watching you.

**Jerod Santo:** \[laughs\]

**Corey Sanders:** Fair.

**Jerod Santo:** Cue the police song...

**Corey Sanders:** There's actually a deep discussion on this exact point, and the way it's been implemented is very similar to IntelliSense, which is why we use the same name... So when you're using it and IntelliSense comes in and tries to autocomplete your thing, you don't mind.

**Jerod Santo:** Not creepy.

**Corey Sanders:** So this is the whole point. It's like spell-check.

**Jerod Santo:** But it's better.

**Corey Sanders:** When you're typing, squiggle-squiggle-squiggle, "Hey, are you sure this is what you meant?" Yeah. Done.

**Adam Stacoviak:** I've got a word for you then...

**Jerod Santo:** "I wouldn't do that if I were you..."

**Adam Stacoviak:** Bugcheck.

**Corey Sanders:** Bugcheck. \[laughter\]

**Adam Stacoviak:** Spellcheck, bugcheck.

**Corey Sanders:** Yeah... That may mean something else, though.

**Jerod Santo:** Bug...

**Adam Stacoviak:** Bugcheck.

**Jerod Santo:** Okay.

**Corey Sanders:** Yeah. That means blue screen in my world, so that's a bad thing.

**Jerod Santo:** That's way worse, yeah. It's a bad connotation.

**Adam Stacoviak:** I'll take it back then. \[laughter\]

**Corey Sanders:** Let's think harder. I mean... I don't mean to be critical, but you're better than that; that's all I'm gonna say. \[laughs\]

**Adam Stacoviak:** What's the official name for it then? If it's IntelliSense, what's --

**Corey Sanders:** IntelliCode.

**Adam Stacoviak:** IntelliCode, okay. That is slightly better...

**Jerod Santo:** That's a better name.

**Corey Sanders:** It's a good name.

**Jerod Santo:** Better than bugcheck.

**Corey Sanders:** Bugcheck... This went sideways quickly. This is totally an evening show.

**Adam Stacoviak:** Either way though, you've got the feeling of like somebody looking over your shoulders, and I think if you're--

**Corey Sanders:** You could turn it off. \[laughter\]

**Jerod Santo:** This is turning into a counseling session.

**Corey Sanders:** That's right, that's right.

**Jerod Santo:** "It's okay... Turn it off."

**Adam Stacoviak:** Making it like that makes it more approachable, to not feel like somebody's watching you? \[unintelligible 00:29:51.17\]

**Corey Sanders:** Oh, gosh... I'm not allowed to bring that up, am I? No...

**Corey Sanders:** It's a soft spot...

**Adam Stacoviak:** That's a soft spot.

**Jerod Santo:** We're hitting the borderline here... Adam, do you have any more questions?

**Corey Sanders:** I'm gonna get the knife here... I loved Clippy.

**Adam Stacoviak:** You know... That's it. That's it. \[laughter\]

**Jerod Santo:** Okay... Closing out gracefully then. \[laughter\]

**Adam Stacoviak:** It's been fun...

**Corey Sanders:** He doesn't seem convinced...

**Jerod Santo:** No.

**Adam Stacoviak:** Obviously, we have a show coming up where we can talk a lot about AI together, so I would say any conversations you think make sense...

**Corey Sanders:** Practically. We'll talk practically about that.

**Adam Stacoviak:** We'll talk practically... In a future show.

**Corey Sanders:** Alright, I love it.

**Jerod Santo:** Thanks, Corey.

**Corey Sanders:** You guys, this was fun. Thank you for having me.

**Adam Stacoviak:** Thank you.

**Break:** \[00:30:48.02\]

**Jerod Santo:** So we're joined by Steven Guggenheimer, vice-president of Microsoft AI. Steve, thanks for coming on the show.

**Steve Guggenheimer:** Thanks for having me. Excited to be here.

**Jerod Santo:** We're excited. We love AI, we're very interested... We're kind of outsiders, in terms of we're not like using it in our day-to-day lives yet... I feel like a lot of people are in that circumstance, right?

**Steve Guggenheimer:** Well, I think you are, you just don't know it. The core origin of almost all of the search engines that are out there, be it Google, or Bing, or even Amazon - there's AI at the core of that, sort of looking at very large sets of data trying to proactively give you a little bit of help. You may not think of that as AI, but it's there.

**Jerod Santo:** Yeah, it's deep down underneath the covers, right?

**Steve Guggenheimer:** Exactly. And those building blocks are now finding their way into lots and lots of software and programs. It's still early, make no mistake. We're really high on the hype cycle, and sort of low on the "It's broadly available", but it is there, and I think people are just starting to understand that.

**Jerod Santo:** So when you speak to laypeople about what you do and the progress you're making with artificial intelligence, what's the way that you go about describing it? Maybe even defining what AI is to somebody who's not on the inside of the scene.

**Steve Guggenheimer:** Yeah, I think there are a lot of definitions for AI, but in general, how do you, on one hand, take large sets of data and find information from that? And then, more importantly, how do you sort of move from a reactive "Hey, I know something. Let me help you", to a proactive, "Let me proactively help somebody in any activity that they're doing."

So the most useful case I think people think about is robotics. When people see movies... It's sort of a physical instantiation of AI; something that can communicate with me, hear me, see me and interact with me on what feels like a natural level. In some way, AI is trying to bring those different capabilities to life... Whether it's a virtual agent on a website, whether it's proactively giving you ideas on what to buy next or what movie to go see, whether it's the ability to have ambient computing around, so that ability to have speech-to-text translation or language-to-language translation... It's woven in lots of ways, but at the end of the day, how do we allow people to interact naturally with the computing environment around us?

**Adam Stacoviak:** A lot of our space that we're speaking to in this podcast is developer, but I think I still sit back and think like "When is AI a threat?" Being responsible about it... When can it be like Skynet, which is the typical thing...? You talked about responsibility in terms of the way you approach that kind of thing... What's Microsoft's stance towards responsibly deploying artificial intelligence, making frameworks, making it practical for the users out there?

**Steve Guggenheimer:** Well, I'll start by saying the good news is for all the hype on AI, we're still pretty early, so we've got a ways to go before it gets to the levels you see in most movies, in most commercials...

**Adam Stacoviak:** It's getting close though.

**Steve Guggenheimer:** I think for us, we're trying to take a leadership position and enabling the conversation. When the web first came out, we all sat around going "Oh, the web is gonna change the world", and it has. We didn't sit around and say "Okay, now let's have a conversation on the ethics of the web and how we wanna manage it and how we should work..."

**Adam Stacoviak:** That's true.

**Steve Guggenheimer:** With AI, I think we can see the potential for the transformation we'll have, and in that light, it's not one company that's gonna define it; frankly, it's not one government that's gonna define it, and there's no particular group in society... So how do you create a conversation between sort of society as a whole, government and industry, to have the conversation? We've been trying to get that proactively out there.

\[00:35:55.01\] We published a book - our chief counsel and our head of AI published a book called The Future Computed, and it's meant to sort of start the conversation. We have a council inside of Microsoft on the ethics of AI, and it works across the entire company. On the ethics side, we have sort of published a set of base-level things to think about for the ethics of AI. There's seven areas; things like transparency, removing bias... So we're trying to drive that conversation proactively and get ahead of it. Again, it's not up to use to define per se, but if we're not in a healthy way trying to move forward, we're all gonna collectively sort of not get to the point we want. So that's our approach right now.

**Adam Stacoviak:** What are your thoughts on organizations like OpenAI, for example? You know, just doing the research behind things, kind of putting the information out there in a non-biased way...

**Steve Guggenheimer:** I think that's what we're all after - trying to get information out there in an unbiased way, and honestly, in an educative way. To your statement earlier about a layperson who's not living and breathing AI - how do you help people understand what's possible? This is tough. To some degree, it's generational. If I look at my parents and trying to help them with computers - they didn't grow up with computers, so there's not a super comfort level there. If you take even our generation, they didn't grow up with AI.

I talk to people, my friends that are our age, who worry about data privacy, they worry about the things they hear about different providers and their information... You take the next generation, you take my 19-year-old and my 20-year-old, they understand a lot more about how their data is used, they understand how these things work, how to turn them on and off... So a part of this is generational, a part of this is sort of trying to help people understand what's there, and making sure the tools and conversation are going forward.

**Jerod Santo:** It seems like in the current state of the world, with these technologies, there's -- maybe it's an uncanny valley...

**Steve Guggenheimer:** Uncanny valley?

**Jerod Santo:** Uncanny valley, are you familiar with that term? It's from CGI graphics, where if we see computer-animated things and they're not trying to look like humans, it's fine. But then if they try to get to a certain point looking like a human...

**Steve Guggenheimer:** And they don't quite get there?

**Jerod Santo:** It's almost worse. It almost looks like a monster, or something...

**Steve Guggenheimer:** It's like the Turing test for things, which is "Can I interact with something and not know it's a computer, versus a human?"

**Jerod Santo:** Right, and we're in the place with AI where there's insights that these systems can make - the proactive stuff that you're talking about - but it's not so useful that humans perceive it as helpful; we perceive it as creepy sometimes. I'm thinking specifically of like specific ad targeting based on data models and profiling, and those kinds of things... And I guess the question is what steps is the community taking to get over those hurdles? Is that like a thing that soon enough it will be less creepy or is it gonna get more creepy as these systems learn more and more about us?

**Steve Guggenheimer:** I think that's up to every person to sort of define what's creepy to them and what makes them comfortable or uncomfortable...

**Jerod Santo:** Yeah, their thresholds...

**Steve Guggenheimer:** It's a little like sort of the trade-off between privacy and security. People want more security, but to do that you often give up a little less of your privacy, so there's this balancing act where you have to find your own personal comfort level. People like free stuff, so what is their willingness to trade off their information for free?

**Jerod Santo:** Yeah, exactly.

**Steve Guggenheimer:** For me, when I think about it, I tend to think about -- like, if you do a good job infusing AI into systems, people don't know you've done it. They just work better. So it's all about "Do things work better?" and if they work better, they don't necessarily feel creepy. For us, with Office, the fact that we can filter out spam - a lot of people would find that positive, but that's sort of AI in the background.

**Jerod Santo:** Yeah, exactly.

**Steve Guggenheimer:** The ability to help people when writing a paper know "Hey, that sentence looks like this sentence, and maybe you wanna change it", that's very comfortable. Laying out pictures - the ability to take a set of photos and throw them on a slide and have it give you 4-5 layouts and give you a sub-caption - that's AI. It feels like PowerPoint's just working better; it doesn't feel like "Hey, that's a creepy AI thing." So again, it's sort of how it gets used relative to the scenario it's in, and does it feel natural or does it feel unnatural?

**Jerod Santo:** \[00:40:09.24\] Yeah. Going back to the point about responsibility, and kind of the community deciding maybe self-regulating or determining what's the responsible ways to go about these things - are there any efforts across organization (the Microsofts, the Googles, the Apple) by the people who are working and making huge progress in AI to kind of standardize and work together, share...?

**Steve Guggenheimer:** Definitely sharing, in particular on the ethics in the AI conversation. Look, sort of like this podcast, there's very few forums you go to where you don't get some combination of the -- you know, if it's all developers, you get more depth on the technical side, but you do get these sort of social conscience type questions... So trying to have that conversation in a vacuum isn't too useful, so we do talk with the Facebooks of the world, we talk with Amazon... I get a lot of interesting questions from other large corporations and we connect them with the folks in our company who are sort of leading that dialogue on behalf of Microsoft.

What you wanna try and do is have an industry conversation. It doesn't mean everybody agrees with the approach, but this notion of "What are the ethics of AI? What are the seven principles we have? What are the n number of principles a different company has? How do we have a unified conversation? How do we have a conversation across borders, across countries?"

**Adam Stacoviak:** Can you say again about the seven principles, what book is that from? You put out a manifesto, right?

**Steve Guggenheimer:** Yeah, The Future Computed is the name of the book. It's sort of about "Hey, what are the things we should be thinking about with AI?" For developers, should we have -- I forgot what the oath is that the doctors take...

**Jerod Santo:** The Hippocratic Oath?

**Steve Guggenheimer:** Yeah, the Hippocratic Oath - is there something equivalent for developers in the future? They talk a little bit about their Geneva Convention for the Use of Data. When you think about the things that have traditionally had boundaries for countries, which are borders, data doesn't quite work that way, AI doesn't quite work that way, so what are some of the new tools we might need in terms of how we think about this? That's why it comes back to some combination of government and companies and society, because there's not one group that's gonna sort of be able to make it work across the world that we live in.

**Adam Stacoviak:** This is the second time we've been to a Microsoft conference in the last year. We were at Connect(); last November...

**Steve Guggenheimer:** Oh, nice. We're glad to have you back.

**Adam Stacoviak:** Thank you. Artificial intelligence was a big conversation there. It's a big conversation at Build. Obviously, this is more towards a developer conference for Microsoft, so I guess maybe the devs out there are thinking "How is my job gonna change because of artificial intelligence? How are the tools, the things I'm making...?", how will this impact developer's lives over the next decade?

**Steve Guggenheimer:** Well, I think one of the things we're working on is how do you take what's traditionally lived in the research world - computer vision is a research, or natural language processing is a research area... How do we sort of create a normalized set of tools for developers, that they can think now of a new layer in the developer stack specific to AI? Traditionally, we have the cloud as a layer, we have data as a layer - we had these cognitive services; here's how you, as a scientist, could work with computer vision, or here's how you could take CNTK or TensorFlow and build your own models.

We're starting to build a normalized set of cognitive services - the ability to understand speech, the ability to talk, the ability to see, the ability to reason, and taking them from being sort of individual research area in projects to a developer toolkit where there's documentation, where there's a consistent set of APIs, where there's sample code... And then making them more enriched over time.

So now as a developer I can say "Hey, can I infuse sight into my application, or listening into my application, or reasoning? How can I start to infuse AI into the applications I'm building and how do I have that as a tool set where I can pull it from Visual Studio or whatever tools that I wanna use? I can use them against the cloud, I can use them at the edge..." So you're moving from a world that's been pretty heavy research where you pretty much do it on your own, to a set of tools that are more standardized, so every developer can use AI, or every data scientist now can more easily work with data and create models.

**Adam Stacoviak:** \[00:44:12.16\] It almost kind of reminds me of Javascript Sprinkles in a way... Like, AI Sprinkles.

**Steve Guggenheimer:** Yeah, Sprinkles, for sure.

**Jerod Santo:** I've been waiting for this for a while, because as a developer, I'm like "Just give me the API call, give me the SDK..." I don't wanna go learn the math necessarily, or the deeper concepts required to deploy these things. I just wanna be able to sprinkle some AI onto my application and immediately affect my users. Are we there? Are we coming to that point?

**Steve Guggenheimer:** We're getting there. We're at a point now where -- I always say, it's too early to do everything with AI and it's too late to do nothing.

**Jerod Santo:** I like that.

**Steve Guggenheimer:** It's been an interesting time... You know, I liked your notion of Sprinkles...

**Adam Stacoviak:** I stole that, by the way. \[laughter\]

**Steve Guggenheimer:** I know, it's been here for a while.

**Jerod Santo:** Everything's a remix.

**Adam Stacoviak:** It's a remix.

**Steve Guggenheimer:** It's a remix. You know, this notion of starting to work with AI and infusing it into what you do - that is the point in time we're at in. Sometimes I get asked, "Hey, where do I go get AI developers?" Generally, you don't. You can go find AI researchers who are really deep in computer vision, but AI developers - that doesn't really sort of exist.

But if you say, "Hey, are we at a point in time where developers can start to infuse AI into what they're doing?", the answer is yes. You need to go spend some energy on it, it's sort of a new set of tools, and there's sort of a different approach if you're trying to create a solution that's sort of more probabilistic in nature versus linear coding... but we're there, so now is a good time for developers to start to at least spend some energy on this.

**Jerod Santo:** So we see this migration of (as you've mentioned) these technologies and lines of mathematics and research in Academia, in the labs, for years; many of these things existed 25 years ago...

**Steve Guggenheimer:** Yup.

**Jerod Santo:** ...and then finally, the practical use of that in the industry, and now it's transforming everything... Are there any other things going on in the labs where it's like "This is not ready for primetime yet, but 5-10 years from now..." - are there new technologies in AI...? Because it seems like we have this curve where we have like a massive growth and then like a flattening out, and maybe we're at a plateauing of a phase?

**Steve Guggenheimer:** No. The research is still super-active. There's three things that get us here today to start with - that ability of compute storage and networking that scale in cloud (us, Google, Amazon etc.) It means every developer now can build and work with models that scale; you couldn't do that before, unless you sort of worked somewhere that had that sort of core.

The second is the growth of data. We just didn't have that for building models and working with it... And all that research to bring these APIs to life. So now you're at a point where everybody can start to play with it, but it's actually just fueling more research.

For example, if you look at deep neural networks, there's not one approach to a deep neural network; people are discovering new types or new approaches to deep neural networks for speech, versus vision, versus "How do I apply this to music? I wanna replicate music" or "I wanna replicate art", or "We're working on ambient computing; I wanna be able to mix multiple sensors together, and computer vision..."

So the research is actually accelerating, and when we look at the solutions team, actually part of the team is researchers, keeping up with machine reading and comprehension, because it's changing so quickly we need the latest... And then developers, because frankly, I've gotta go build something that I can ship.

So you're actually seeing an acceleration of the research and you're seeing these records about sort of a human ability, so the ability to recognize as well as a human, or the ability to speak or understand. Now we just did one that was sort of English to Chinese translation; three weeks ago we beat the record. It was Christmas time where the record relative to reading comprehension equal to a human for specific tasks was equal... So you're actually seeing it accelerating right now.

**Jerod Santo:** Awesome. You sound excited about this stuff...

**Steve Guggenheimer:** I am.

**Jerod Santo:** What's the angle into it that makes you the most excited, that you're most bullish on?

**Steve Guggenheimer:** Well, if you think of this, there's patterns relative to AI, and one of them is AI assisting humans. This notion of "How do you help people?" How does Microsoft and the industry and AI help us as humans in any field is incredibly powerful.

\[00:48:10.03\] The one that always catches you the most is healthcare. Project Emma, if you go look that up, and what we're doing relative to Parkinson's... Seeing AI, the ability to help people who are sight-impaired... I mean, the ability to help people, the work going on in genomics and radiomics... Look, I'm getting old; this stuff \[unintelligible 00:48:28.15\] is pretty cool. I might be needing some of it soon.

**Jerod Santo:** Yeah, you might be using it sometime soon.

**Steve Guggenheimer:** It is that ability to amplify human ingenuity or amplify human capability that is so powerful... And I feel comfortable because we're early enough in it that I worry less about the Skynet scenario. And the truth of the matter is the kids coming out of university today - they're gonna grow up with a new set of tools; they're gonna grow up with AI, blockchain, virtual or mixed reality, IoT... So they're gonna grow up with a new generation of people--

**Adam Stacoviak:** Connectedness, yeah.

**Steve Guggenheimer:** ...with a new generation of building blocks which will vastly change the future, and it's kind of fun to be at the beginning of that. We grew up with compute storage networking, and we've been from client, to client-server, to internet, to cloud mobile, to now intelligent edge, intelligent cloud... They've got a whole new set of building blocks, they have a different attitude towards life, and it's pretty cool to be on the front edge of that, and being there at the beginning. I won't be in there at the end, unless of course some of this healthcare stuff comes through, but it's fun to watch, and you can just see people light up when they start thinking about what's possible.

**Adam Stacoviak:** Your notion though of the AI-assisted human I think is a pretty interesting notion, because I think that if we as humans can have more information faster and more relevant, considering our context and surroundings, maybe even the particular tool we're working in or the thing we're working on, or whatever it might be - I can't really consider any particular scenarios, but... Humans are pretty quick with thinking logically about the next advancement and not have to rely on the machine to do it for us, but feed us the necessary information at the right time to make a good decision.

**Steve Guggenheimer:** Well, it's that curation of information... We're drowning in stuff today; between your social networks, and your work networks, and all the information that's out there, having it curated for you proactively, based on you as a human, and having it sort of easier, and whether I'm at a small screen or a big screen (like a TV screen), or at work, having it proactively help me work with that information so that I can sort of leap ahead further, is again, an incredibly powerful concept... Versus me going out and searching.

Bill Gates made a statement... I don't remember the exact phrase, but it was something along the lines of "We all sort of go to computers and have to know how to use them. We're hitting the right point with AI when computers know how to work with us." It's the opposite approach.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Wow.

**Steve Guggenheimer:** And computing is becoming more of a fabric, as opposed to a device.

**Jerod Santo:** So there's a lot of big players in AI. Microsoft is definitely one of the big ones... When you look at the landscape and you look at your competition, what gives Microsoft an advantage in moving faster and delivering more than the other guys?

**Steve Guggenheimer:** I think there's a couple things that differentiate us, and we can decide whether it's about moving faster or not... First off, those core buildings blocks, which is compute storage and networking at scale. Azure is obviously one of the large cloud providers, there's only three of them on the planet, and growing well...

The second is not only do we understand it, but we have some very unique data assets, between Bing, and between LinkedIn, and between the Microsoft Graph.

And third - look, Microsoft research has been there for 25 years. We've been doing research, so we have sort of the core in place.

I think the second thing, frankly, is sort of customer and commercial ethos. When you talk about people using AI, the notion of security and privacy and management and solutions that are on premises and into the cloud, and edge and cloud computing - I think that ethos of sort of a commercial entity and how you apply this sort of in a business setting, I think people get a little less nervous about us, where we have sort of stricter rules on how we use data... We always have, and we're not in industries, we're not adding ourselves into certain industries that others are... So that combination of a commercial ethos, core fundamentals that are very sound, non-competitive, and then sort of taking this proactive approach for example on the ethics - I think that gives people a comfort level in sort of saying "Hey, we're looking for help in AI (because a lot of people are) and you seem like a good set of folks to talk to about it."

**Adam Stacoviak:** \[00:52:23.08\] I think that these keynotes like you did today with Satya, his keynote, the first thing he said was privacy... That was how he essentially opened it up. It wasn't like "Here's how awesome we are and what we're doing", it's "Here's how responsible we are with the data and here's how we apply data to problems."
When you take that and you say "Well, here's artificial intelligence laid on top of big data or cloud software", things like that, you really have to look at Microsoft differently from the point of view of like that's what you came out the gate with, not "Here's our latest tool."

**Steve Guggenheimer:** "Here's all the cool science." I mean, at the end of the day, you need the science... But it comes back to that ethos - what's your ethos as a company, how do you think about the commercial landscape versus the consumer, how do you think about helping other companies use this technology, how do you think about doing it responsibly?

I've been at Microsoft 24 years, been through a lot of ups and downs, and you learn a lot over that period of time... You know, how you work with developers, how you work with open source, how you work with data, how you work with governments, how you work globally... There's a lot to learn to there, and I think that helps us.

**Adam Stacoviak:** What does someone like you do? Your role - vice-president, right?

**Steve Guggenheimer:** Yeah.

**Adam Stacoviak:** Big role, it's over-arching, you've gotta be in the weeds, maybe, managering...

**Jerod Santo:** What does that look like in the day-to-day sense?

**Adam Stacoviak:** What's the day-to-day in your life?

**Steve Guggenheimer:** A good chunk of it is spending time with customers and partners. Before this role, I managed our developer evangelism, and before that I managed our OEM ecosystem, so I'm used to community and partners, so I spend a lot of time with customers and partners, just having this kind of conversation... And then working across Microsoft. Look, we're still a big company; how do you orchestrate the sets of work going on between AI and the research group, between AI and the platform team, between AI and the product groups? And then managing people; how do you build and grow people, leaders in the company? Anyone from fresh out of college, to other leaders... So my time is split between internal and external, and trying to be a good advocate for the company.

**Jerod Santo:** I think because AI is such a cross-cutting concern, like you said, it's gonna be infused into everything... It doesn't lend itself well (I wouldn't think) organizationally into like a siloed approach or a functional approach.

**Adam Stacoviak:** Very integrated.

**Jerod Santo:** You probably have to integrate it into lots of teams. Is that a challenge?

**Steve Guggenheimer:** You end working across teams... Look, you have a set of people that are working on the platform, the things that developers would use, and then you have a set of people who are using it, and really what you wanna do is enable the conversation so that the platform teams learn from the people who are actually using it, and you feed things back into the platform that you need to. Teams that are busy advancing stuff are making the most of it in the products, then you've got researchers on the other side... So a lot of that is enabling the conversation, it's helping get ready for events like this, it's helping sort of bring it to life for customers...

\[00:55:02.29\] So there's a decent amount of orchestration, and having been there a long time, that's actually helpful, knowing your way around... But you know, it's just fun, it's just good. I always say I like being the center of the whirlwind. AI is definitely the center of conversation or energy today, so that's where I like to be.

**Adam Stacoviak:** Maybe as a closing question - biggest challenges moving forward for AI? What are those biggest challenges/hurdles?

**Steve Guggenheimer:** Expectation setting... You've got two ends of the spectrum - you have the "Gosh, it should be able to do all these great things..." Well, it's not that easy; we're not there. Then you have the other side, which is "Oh my gosh, this is scary." So you end up working on both sides, which is sort of the over-expectations on what it can do, from both a good perspective and a discomfort perspective.

So I think once you can get sort of the expectation setting, which is one of the biggest hurdles by far, then it's helping people pick the right path.

**Adam Stacoviak:** How do you apply expectations?

**Steve Guggenheimer:** On the not overdoing it side, it's just sitting down and talking to people. I don't know in terms of any new technology area or any new conversation -- unless you're in the dialogue, unless you're in the community, in with the developers, you're just not there. So I think our biggest way to help is to be a part of the dialogue and part of the conversation. Again, it's not one person or one company, but you've gotta show up; you've gotta show up ready to have a dialogue, and some of the dialogues are easy, and some of them are hard.

**Adam Stacoviak:** That's my favorite advice, "Just show up."

**Steve Guggenheimer:** Just show up. \[laughter\]

**Adam Stacoviak:** You've gotta show up, right?

**Steve Guggenheimer:** I agree. Having been here for a long time, having worked a lot with it - you've just gotta show up.

**Adam Stacoviak:** Yeah, consistently.

**Jerod Santo:** Well, speaking of the dialogue, we have a brand new podcast, Practical AI.

**Steve Guggenheimer:** I love it!
**Jerod Santo:** It's a weekly show...

**Steve Guggenheimer:** That's my kind of show.

**Jerod Santo:** All about making AI accessible, practical...

**Adam Stacoviak:** And fun.

**Jerod Santo:** And fun for everyone. We'd love to have you back on that show to keep the dialogue going around these topics.

**Steve Guggenheimer:** Great, I'd love to be there. I just did the precursor for a sort of Practical AI blog today, so we'll kick that one up and we'll do two more in the next two weeks.

**Jerod Santo:** Awesome. Beautiful.

**Adam Stacoviak:** Thanks, Steven.

**Steve Guggenheimer:** Alright, thanks guys. I appreciate it.
