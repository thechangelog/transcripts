Break: \[00:00:00.07\] to \[00:01:57.07\]

**Adam Stacoviak:** Pam Selle, welcome back to The Changelog.

**Pam Selle:** Yeah, it's nice to see you all here.

**Adam Stacoviak:** Good to have you.

**Adam Stacoviak:** I think you go to lots of conferences, because we go to very few conferences, but every one we go to, I think you're there. \[laughter\] Is that fair, do you go to a lot of conferences?

**Pam Selle:** You know, I've been taking a little bit of a break. What I've been trying to do is to go to a couple big ones... So I'm here this week at OSCON, and I'll be at Google I/O...

**Adam Stacoviak:** Nice.

**Pam Selle:** ...and I might be at Strange Loop later this year.

**Adam Stacoviak:** Okay.

**Pam Selle:** I've volunteered to review some proposals, and I can tell you you all should go. It's gonna be a really good conference.

**Adam Stacoviak:** Strange Loop?

**Pam Selle:** Mm-hm.

**Adam Stacoviak:** I've been telling this guy for years...

**Pam Selle:** Have you been ever?

**Adam Stacoviak:** We have not been at Strange Loop, but...

**Pam Selle:** Oh, my goodness...

**Adam Stacoviak:** Every year I say "We should go to Strange Loop this year..."

**Pam Selle:** You have to go. I've been twice. I love it.

**Adam Stacoviak:** It's an audio show, Adam. Adam's nodding his head in agreement.

**Adam Stacoviak:** I'm nodding my head because at the same time I'm nodding I'm trying to find out who runs Strange Loop, because I forget the person's name...

**Pam Selle:** Oh, Alex?

**Adam Stacoviak:** Alex.

**Pam Selle:** Yeah, Alex is the public face. There's many people in the Strange Loop team, but yeah, he's the public face.

**Adam Stacoviak:** Yeah. So because we try to run a sustainable business, we try to go in a way that helps us, I guess, gain some revenue to get there, so to speak...

**Adam Stacoviak:** Right.

**Adam Stacoviak:** With OSCON, that's how we're here.

**Pam Selle:** Yeah, which makes sense with O'Reilly.

**Adam Stacoviak:** We have family, we have mortgages... We've gotta try to go places -- which kind of sucks in a way, because I wanna go to a lot more places than we wish we could, but we both have lives, I guess, schedules, so to speak...

**Adam Stacoviak:** \[unintelligible 00:03:40.11\] no life... \[laughter\] He just goes to conferences, whatever you want.

**Adam Stacoviak:** I mean, I just can't wait to \[unintelligible 00:03:46.09\], but yes, Strange Loop - we'd love to be there. It's an awesome conference, and I wish we could go. Alex, if you're listening to this, e-mail us.

**Pam Selle:** \[00:03:55.14\] Yeah, if Alex hears about it, or someone else in the team... But yeah, I mean, you might not be the first person that I've heard from that can be hard to get a hold of. They just have so much on their plate, and there are also a few other conferences that collocate with them... Racket, which is a Lisp - they collocate.

**Adam Stacoviak:** Yeah. Elm-conf...

**Pam Selle:** Who?

**Adam Stacoviak:** There's an elm-conf, like the day before...

**Pam Selle:** Yeah, elm-conf, you're right, and papers-we-love I think collocated... They really try to do a lot - since they go through all this work - to have all this conference space, that these smaller communities might not...

**Adam Stacoviak:** That's super cool.

**Pam Selle:** ...especially these edge functional conferences. I have a friend who went to Racket Conf when I was there, and he said he had so much fun. Racket, in terms of a Lisp community, has a lot of academics, but it's also really small in terms of who comes to Racket Conf, but very interesting...

**Adam Stacoviak:** So you're here to talk about the serverless revolution. In fact, you have a T-shirt on that says "Join the serverless revolution" - so why is that and why should we join?

**Pam Selle:** The serverless revolution I feel like is the thing -- if you already know about it, the people who know what it is say "Well yes, this is definitely going to be the next big thing." Serverless right now I think is where you wish three years ago that you knew everything about containers. Serverless is that thing right now, in terms of the hotness.

**Adam Stacoviak:** It's not the big thing, it's the next big thing.

**Pam Selle:** Yeah.

**Adam Stacoviak:** Right. Ground floor.

**Pam Selle:** I'll talk about this on my talk, but -- especially since this probably comes out after it, right?

**Adam Stacoviak:** Yeah.

**Pam Selle:** So you can watch the video on YouTube. \[laughter\]

**Adam Stacoviak:** There you go. Do you have the URL for us? Because that would be cool! \[laughter\]

**Pam Selle:** So when you watch the talk, I cover that serverless really is this... First of all, we'll get it out of the way - it's a terrible name; everyone agrees.

**Adam Stacoviak:** yes.

**Pam Selle:** No one said it was a great name.

**Adam Stacoviak:** A lot of people never even get past the name.

**Pam Selle:** Obviously, they are servers, just like the cloud is not made up of water vapor...

**Adam Stacoviak:** Of actual clouds, yeah.

**Pam Selle:** So we got over it for the cloud, we can get over it with serverless.

**Adam Stacoviak:** It took us a while... It will take us a little bit.

**Pam Selle:** Like you say with the cloud - you can talk to even people in the grocery store and they know what that means.

**Adam Stacoviak:** So to be clear, they still involve servers.

**Pam Selle:** Yes.

**Adam Stacoviak:** Okay.

**Adam Stacoviak:** So you're saying they're servers...

**Pam Selle:** So serverless is the idea of the general category of doing software development so that you don't have to care about servers. There's two different sections of it - there's serverless computing, which is functions of service, and then there's back-end as a service. When you do things like use Firebase, or using let's say PubNub, which is a real time Pub/Sub service... That's back-end as a service, but function of service is what I focus on and what the serverless revolution is really centered around... It's this AWS Lambda and its friends. AWS Lambda and friends, coming to the Nickelodeon. \[laughter\]

**Adam Stacoviak:** Yeah, those sound like a cartoon. Not a great cartoon...

**Pam Selle:** I think this is another reason why people have such a hard time wrapping their head around it, because it first starts as an AWS service, and god knows if anyone knows what anything on AWS does, until you use it.

**Adam Stacoviak:** We were just talking with Justin at AWS...

**Adam Stacoviak:** Yeah..

**Adam Stacoviak:** That it just has so many services that it's hard to even know what they all do.

**Pam Selle:** They have a big conference every year, re:Invent, and when I was watching the live stream in December I had a little cheat sheet of what the logos meant opened in another tab, because darn if I know what they are...

**Adam Stacoviak:** They all have the Amazon logo in there, or something like it...

**Pam Selle:** \[00:07:57.08\] Well, they just don't mean anything, and they just throw them on slides and talk about --

**Adam Stacoviak:** It's a shame too, because they've got so much good stuff...

**Pam Selle:** It's so confusing...!

**Adam Stacoviak:** I think they're rallying around, it's getting better...

**Pam Selle:** They're working on making their design better, but the thing is, I don't really care that they're not that good at design; they make great cloud infrastructure. It's good stuff.

**Adam Stacoviak:** So they start with AWS Lambda, which is like "Write a function, execute it there."

**Pam Selle:** Yeah. So instead of running code on a physical server that you have under your desk, a virtual server on someone's public cloud, or a fake virtual server that is actually a container on someone's cloud, you upload your code literally as a zip file (there's ways you can do that) to the storage on one of these cloud providers, and then you set up a trigger. When that comes into that cloud provider, it will run your code.

Behind the scenes, what happens is it gets spun up in a container, then it runs that code in the container...

**Adam Stacoviak:** They're doing all that stuff for you that you used to be doing yourself.

**Pam Selle:** Yeah, all that stuff will happen without you doing anything. I mean, you should know how it works because you should know what your infrastructure is doing, but ultimately the whole point is that it's managing your infrastructure for you.

It's revolutionary in a couple ways... Just in terms of the technology that makes it possible is really interesting. We wouldn't have functions of service without containers. That's what makes it possible.

**Adam Stacoviak:** Sure.

**Pam Selle:** But the main things that make it really revolutions from a user perspective and from a cloud provider perspective is the way it's run... It's not a persistent service; it's run in response to events. That's one big thing.

The other big thing is that it's metered. That's how you bill. It's metered in 100 milliseconds. Think about just how different that is from a consistent server model.

**Adam Stacoviak:** Hourly billing, things like that, you mean.

**Pam Selle:** Yeah, that billing... Because it's completely different than -- especially your mom and pop cloud provider... There's plenty of cloud providers that aren't this big public cloud... The way they get into this business is they just sell you the same server that you would have put in your own data center, but as a virtual one, in their data center.

So it was revolutionary because there was technology that enabled it, but over time, when you look at the distance between those two points, it's actually not that big a difference, in terms of the distance between these two points and the distance between virtualization and containers, and running code in response to events. It feels to me that it's a much bigger step.

**Adam Stacoviak:** I would say it's definitely more of a departure... So revolutionary in terms of "different", I agree. In terms of "What does that mean...?" So revolutionarily better, or just different?

**Pam Selle:** Well, that depends. To me, I find that topic very exciting, and I'm okay with being in that space. I do think it's revolutionary because you also -- it's similar to how containers are now in the orchestration stage of "Okay, great, we have containers..."

**Adam Stacoviak:** "...now what do we do with them?"

**Pam Selle:** "...now what do we do with them?" and we have our buddy Kubernetes doing stuff, running at the ship's helm...

**Adam Stacoviak:** Right... \[laughs\]

**Pam Selle:** Because you know Kubernetes means "Ship's captain", or whatever. So I think that that's a thing that's going to end up being revolutionary in terms of how people architect. When you architect around that your code only runs in response to triggers and your infrastructure scales theoretically horizontally just because of the kind of service you're running - that's going to have to reflect in your architecture somehow.

One very obvious thing of "Where do you put your state?" It's gotta go somewhere...

**Adam Stacoviak:** \[00:12:09.17\] Where does it go?

**Pam Selle:** Yeah, where does it go? That's a good question. It depends.

**Adam Stacoviak:** Oh, we don't know...

**Pam Selle:** I mean, we use a database. It's kind of where we always put -- for us, in terms of some of the service architectures we run at IOpipe, we use a database, we will use Elasticsearch... We store data in the things that are meant to store data, and we run code on things that run code.

**Adam Stacoviak:** Take me through the process here... So an event triggers your function, your code executes on a AWS or other provider who provides functions as a service infrastructure; that spins up a container... All the things that are necessary for that code to execute properly have to connect to a data store, and then do its thing and maybe put stuff back in -- if you're gonna persist it, it's gotta maybe pull stuff out, put stuff in, then spin down again...

**Pam Selle:** Well, it depends, because the other thing is that -- that's why I think serverless is a terrible name; functions as a service... Even though it's "everything as a service", that's actually not that bad of a name.

**Adam Stacoviak:** Sure. Well, it makes you think about it in the right way.

**Pam Selle:** Yeah, it makes you think about it in the right way; your function is not gonna do everything. It's gonna do this one granular thing. For example, you might have one function that gets something from the database and another function that modifies something from the database. Those are very different things, so you might have two separate jobs that do it. You might even, instead of writing directly to -- if you have other things that have to happen, maybe you don't write directly to the database, maybe you write to a cue, and then that cue can be a trigger, or something like a \[unintelligible 00:13:49.14\] that can be a trigger for another Lambda.

But see, as I describe it -- you asked "What's revolutionary?" It's very easy to end up with a Rube Goldberg machine made of functions as a service...

**Adam Stacoviak:** Right.

**Pam Selle:** I think that's super interesting. I mean, there's a reason why I think Rube Goldberg machines are interesting...

**Adam Stacoviak:** Right. They're intellectually stimulating, but is it a better way of doing it? There's more efficient or direct ways of getting this done. Enter Rube Goldberg machine!

**Pam Selle:** Sure, but at what cost, as well?

**Adam Stacoviak:** I don't know...

**Pam Selle:** So that's the other thing - is that running, and at what scale?

**Adam Stacoviak:** When we come back from the break we talk about the environmental impact of functions as a service and how the serverless architecture removes the need for a traditional always on server system. We also talk about how serverless is being used in production today and where it's going in the future. Stick around.

**Break:** \[00:14:59.00\] to \[00:16:07.16\]

**Pam Selle:** I also think that functions as a service are really cool from an environmental standpoint when we think about the usage of infrastructure... If I'm building what I want to be a standard, scalable infrastructure, I don't want my load to ever go over 50% maybe, because I wanna be able to handle a lot more traffic so that I don't fall over. All that water and energy, all of it is just getting wasted, and I'm paying for it. So it's bad for the environment, it's bad for my wallet, so if I use something where things are run in a scalable --

**Adam Stacoviak:** Less waste.

**Pam Selle:** Yeah, less waste. I wanna use the word "elastic", but that's also been stolen by AWS, too.

**Adam Stacoviak:** They've got it all.

**Adam Stacoviak:** I like it -- I mean, "elastic" makes sense, because it's like a rubber band... It stretches and then it and then condenses.

**Adam Stacoviak:** It does make sense. Why don't you call it "stretchy services"?

**Pam Selle:** Stretchy... Isn't there a superhero that's--

**Adam Stacoviak:** Stretch Armstrong.

**Pam Selle:** Yeah, there you go.

**Adam Stacoviak:** Now you have a mascot. He's the leader of the serverless revolution - Stretch Armstrong. \[laughter\]

**Pam Selle:** What was the -- there was a... Wasn't there a Fantastic Four?

**Adam Stacoviak:** Probably...

**Adam Stacoviak:** I can't recall the name, but yes...

**Pam Selle:** Yeah, I'm not that person, sorry...

**Adam Stacoviak:** I'm not either.

**Adam Stacoviak:** Neither am I, sorry. \[laughter\]

**Adam Stacoviak:** The Incredibles - the mom would stretch... I'm more of that person than the other one.

**Adam Stacoviak:** Yeah, me too. \[unintelligible 00:17:26.09\] \[laughter\]

**Adam Stacoviak:** Me neither. Mom? I don't know...

**Adam Stacoviak:** Yeah, she was the mom...

**Pam Selle:** The Incredibles Mom. Mrs. Incredibles.

**Adam Stacoviak:** That's right.

**Adam Stacoviak:** There you go, Mrs. Incredibles. Take us through like a practical sense - where does it stand today? We're talking not really theoretically, but we're talking big picture about functions as a service. What are people using it for? Are there people taking this to production? Like you said, it's ground floor, but...

**Pam Selle:** No, I really wouldn't put it at ground floor. It's almost like -- in the bell curve we're still on the left side and we haven't reached the top, but we're definitely not at the bottom of the hill.

**Adam Stacoviak:** Okay. So we're making our way up the hill.

**Pam Selle:** We're going up the hill on the bell curve. AWS Lambda was released in late 2014 \[unintelligible 00:18:15.00\] and we're talking right now in 2017. In computer land...

**Adam Stacoviak:** It's a long time.

**Pam Selle:** ...a lot of time has passed. Much time has passed, and there's actually quite a few people running this in production...

**Adam Stacoviak:** In the olden days...

**Pam Selle:** Yeah...

**Adam Stacoviak:** Three years ago... \[laughter\]

**Pam Selle:** And I think this is one thing that makes serverless compute hard to understand - it's a cloud offering, and there's actually lots of ways to use it, especially when it's something so general as "runs code in response to a trigger."

**Adam Stacoviak:** Right. Executes your code.

**Pam Selle:** There are actually lots of ways to do that. iRobot, of your friendly Roomba - they run on serverless. It's popular in IoT because IoT is event-driven.

**Adam Stacoviak:** Yeah, it makes sense in that case, for sure.

**Pam Selle:** You know, sensors send signals, and... Do something.

**Adam Stacoviak:** This happens, and then... Response.

**Pam Selle:** Yeah. Then for more of a web development idea, you can run an API, because you can integrate with -- in Google cloud you could use HTTP triggers, or \[unintelligible 00:19:20.26\] API gateway... So you can run an API by saying "When I get a request, then run this function and send this response."

There's so many... I think one of my most favorite recent ones is in operations, which -- this is interesting, because this is... Although, you know, when I think about this, this probably would have caused more problems, but when there was the great S3 outage earlier this year...

**Adam Stacoviak:** Yeah.

**Pam Selle:** Did you all hear about what -- like, I read the report...

**Adam Stacoviak:** I did, but I've lost it now. Yeah, tell me.

**Pam Selle:** Sure. So what happened was someone deleted something that they shouldn't, and because of a command line argument...

**Adam Stacoviak:** \[00:20:05.20\] Yeah, that's right - it was a command line typo.

**Pam Selle:** Yeah, it was a command line argument, so it was a human error... I hope that person is okay.

**Adam Stacoviak:** They had a very bad day.

**Pam Selle:** They had a very bad day.

**Adam Stacoviak:** They deleted their Bash history. "I didn't do that!"

**Pam Selle:** \[unintelligible 00:20:16.08\] It then caused this cascading failure. So one thing that you could do \[unintelligible 00:20:26.07\] anything you can put in a playbook, you can probably run with functions of service, if I think about that. That's why it actually is a good number, functions of service, because it's a function. It's a list of instructions. Do something.

I've heard people using it for operations task of "If I delete this route, then these other things should happen" and using functions of service to run that script for you \[unintelligible 00:20:58.14\]

**Adam Stacoviak:** It seems really like a good fit. I mean, IoT makes sense, but also bots, because they're completely event-driven.

**Pam Selle:** For box?

**Adam Stacoviak:** Bots.

**Pam Selle:** Oh, bots... For sure. That's actually one of the...

**Adam Stacoviak:** Bots.

**Adam Stacoviak:** That's what I said.

**Pam Selle:** Yeah, like robots. \[laughter\] The internet robots...

**Adam Stacoviak:** You accent may have thrown it off a little bit.

**Adam Stacoviak:** Accent?! I have no accent.

**Adam Stacoviak:** Anyways, sorry...

**Adam Stacoviak:** I thought I said it clearly...

**Pam Selle:** No, because it's event-driven...

**Adam Stacoviak:** It's all good. Bots.

**Adam Stacoviak:** That's what I said.

**Pam Selle:** That's really common if you look for a serverless tutorial, which we have one on GitHub at ioPipe/workshop, I believe...

**Adam Stacoviak:** These bots...

**Pam Selle:** Yeah, you can make a Doge bot for Slack...

**Adam Stacoviak:** Nice.

**Pam Selle:** You give it some words and it will make a Doge meme for you.

**Adam Stacoviak:** Nice.

**Pam Selle:** It's a little 40 minute "Do a tutorial to practice a thing" workshop.

**Adam Stacoviak:** I like it. "Do a tutorial to practice a thing"?

**Pam Selle:** Well, I mean, that's how you learn stuff, right?

**Adam Stacoviak:** Yeah.

**Pam Selle:** We can talk about this as much as we want, but if you --

**Adam Stacoviak:** \[unintelligible 00:22:01.20\]

**Pam Selle:** You've gotta actually touch it, yeah... Especially because all the three big public clouds (AWS, Google Cloud, Azure) all have really generous free tiers. So the pricing for functions of service in the number of invocations and in compute time -- compute time being a calculation based on how much memory you said you want your function to use... It's a very fancy way of saying "duration."

**Adam Stacoviak:** How long it takes, given a memory constraint.

**Pam Selle:** Yeah, and you get charged so much money per hundred milliseconds.

**Adam Stacoviak:** Can you run a Slack bot for free on all those?

**Pam Selle:** Yeah, I would say...

**Adam Stacoviak:** Nice.

**Adam Stacoviak:** Unless it's getting used constantly, or something.

**Pam Selle:** Unless it's absolutely constantly... I think it would be a challenge. Maybe your Giphy instance maybe could hit the limit, but you get a million invocations on AWS, two million free on Google Cloud, and one million on Azure.

**Adam Stacoviak:** On a monthly basis?

**Pam Selle:** It renews monthly \[unintelligible 00:23:12.07\]

**Adam Stacoviak:** It'd be a popular bot.

**Adam Stacoviak:** What was the entry point for you for this?

**Pam Selle:** It was actually when I started working for the company I'm working for now. I work with IOpipe, where we're building monitoring for serverless.

**Adam Stacoviak:** Gotcha.

**Pam Selle:** Before that, I was doing some consulting, and before consulting, I was working on a large scale API gateway for a major company.

**Adam Stacoviak:** That's when we talked to you last.

**Pam Selle:** Okay, yeah.

**Adam Stacoviak:** Things move fast in the software industry...

**Pam Selle:** Yeah, I told you! We talked two years ago, and everything changes.

**Adam Stacoviak:** Do you have a good a-ha moment story for us? When you really got it, you were like "This is really awesome!"

**Pam Selle:** \[00:23:55.28\] You know, I think I almost started having it before I ended up working with IOpipe, when I first spoke with the founders... I was speaking to one of the founders and she was talking about this thing that she was working on and was building, it involved the cloud, and this thing that I think I'd heard of but I hadn't done anything with, and I barely understood it, and that's the kind of thing where you either don't understand it because it's pointless to understand it, or it's because it's something that you probably should sort out, and it will become part of what you generally know. I feel like that's what ended up happening - I kind of had an inkling (even when I first heard it) that this was gonna be a big thing.

Once we started, we spent a lot of time at the company talking to teams who are using serverless in production, and the kind of problems that they're using it on, the kind of production challenges they run into... But all of them ultimately had such amazing stories about the transition, what they saw when they went from persistent infrastructure to -- what is that? I heard someone say that running functions of service is not even immutable infrastructure, it's untouchable infrastructure. Like, you use it and it's gone... So it's untouchable infrastructure.

But moving to that, the difference that they saw in their costs, to the time they spent on random operations task -- it just was blown out of the water. It was just a huge change for them. I think that's one of the reasons why people might hear this trend and they're like "Why does everyone care so much?", which is also a fair reaction when people are super into something... But I would argue this is a big deal, and there's a good reason why they're excited, because they have that lived experience where they've seen that transition and seen what it looks like on the other side of it.

**Adam Stacoviak:** Yeah. Well, we're where we're at in tech because of a consistently lowered barrier to entry, and that's what this does.

**Adam Stacoviak:** This is lowering it one more time.

**Adam Stacoviak:** Yeah, one more time.

**Pam Selle:** I think so. And some of the operational challenges are really interesting, but for your average run-of-the-mill developer too, it's really great... In terms of the barrier between having some code to run a back-end, and having it run and not paying very much money for it; it's pretty great.

**Adam Stacoviak:** Yeah.

**Adam Stacoviak:** The bot you did for Memberful to Slack could have easily been this.

**Adam Stacoviak:** Oh, absolutely. And I actually think I probably will try to write a Slack bot for us, because I have like one or two ideas for our Slack, where I could write it as part of our main website and it just can always be there (because the website's always there), or I could try it as a serverless little thing, and it's small enough that I could move it if I wanted to. But I think it's a good case for trying it out and seeing if there's a happy path there.

**Pam Selle:** Yeah.

**Adam Stacoviak:** Cool. Pam, thanks so much for talking to us about the serverless revolution. By the way, long-time listeners of the show may remember Pam from a CROSSOVER episode we did back in 11th September 2015 - that's episode 173 of The Changelog; we had the entire Turing-Incomplete -- I think it was the entire... There was three of you, but you guys had four though, didn't you?

**Pam Selle:** We had four. I can't remember who didn't make it. It might have been Len.

**Adam Stacoviak:** It was Len. 75% of the Turing-Incomplete cast on The Changelog... And that show has since retired, but...

**Pam Selle:** It could come back... We're thinking about it.

**Adam Stacoviak:** There are whisperings that Turing-Incomplete may return, so follow... Are you @pamasaur on Twitter?

**Pam Selle:** Yeah, @pamasaur on Twitter.

**Adam Stacoviak:** Follow @pamasaur on Twitter, and thanks so much.

**Pam Selle:** Yeah, thank you for having me.
