**Jerod Santo:** Chad, it's been a very, very long time since we've talked about Ember on the Changelog. In fact, our last episode with members of the Ember team was called The Road To Ember 2.0, with Tom and Yehuda Katz back in November of 2014.

**Adam Stacoviak:** 2014... What?!

**Jerod Santo:** Coming up on four years. Ember's still here and kicking. We have a lot of catching up to do, but first let's get to know you a little bit and maybe even look at Ember through your eyes. Tell us how you came to be an Ember core team member.

**Chad Hietala:** The path for me to get into the Ember core team was I joined LinkedIn in 2014, and at that time we were building a lot of applications that were interactive-heavy, and so we were using Backbone for this... But a lot of the meetings that we had internally at LinkedIn at the time were many hours of figuring out how to do some of these very basic patterns - how to do routing, how to do \[unintelligible 00:03:17.18\] how to efficiently tear down parts of the UI, as the user interacts with it and navigates away from page to page. What I kind of recognized was that this is a huge cost; we're talking like 20 people sitting in a room, trying to figure out all of these ideas of how to build these applications and these fundamentals.

So I started at LinkedIn looking at potential solutions to this problem, how can we build these rich applications, and kind of up-level people in terms of what they're actually concerned about. We have a lot of engineers at LinkedIn that are product engineers, and what we want them to be able to do is build these really great product experiences for people, and not spend a whole lot of time figuring out problems that frankly I felt were already sold by a variety of frameworks and technologies in the space at the time.

In 2014 we did a big internal project at LinkedIn to kind of \[unintelligible 00:04:29.11\] a bunch of different technologies. One of the technologies we kind of landed on and I championed was Ember, just because I had built these types of applications that Ember was kind of the audience for, and that's kind of like how I got involved in Ember in general - we had a need, we were building very rich applications, and I thought Ember did a very good job at doing the routing, and the components, and views, and all that type of stuff for the client side applications.

We're one of the larger consumers of Ember, and because of that, we were working on the framework and everything like that. I got into contact with Tom and Yehuda at the time, and they did a little bit of consulting work with us at the beginning. We as LinkedIn, we had specific needs, so LinkedIn pays me and several other people at LinkedIn to work on Ember and other open source technologies... So just by virtue of working on larger and larger portions of the open source project, they asked me to join the core team about a year and a half ago. So that's kind of how I got involved with the Ember project.

I also was doing a lot of things with Ember CLI, which I think is what Tom and Yehuda were really excited about when you talked to them in 2014 - it was Ember CLI. I worked with Stef Penner on a lot of things early on with Ember CLI, and that was kind of like my kind of getting my feet wet, working on somewhat large open source projects.

**Jerod Santo:** Well, I think we should maybe give credit where credit is due, and give props to LinkedIn. What do you think, Adam? We talk about companies putting their money where their source code is, and this is a shining example - LinkedIn really coming alongside a framework that didn't start there. We see companies like Facebook having React coming out of Facebook, but here is Ember which preexists and exists out in the open source world, has its own ecosystem, and then LinkedIn really buying into it and supporting it for a very long time.

**Adam Stacoviak:** Yeah, I mean... From a consulting side, on through to now... Does Tom still work there?

**Chad Hietala:** Yeah, Tom is at my team at LinkedIn.

**Adam Stacoviak:** And it sounds like your employment at LinkedIn predates Tom joining, so you may even be a part of that whole process.

**Chad Hietala:** Yeah, so I was there basically from the beginning, and I'm still there today. I've just celebrated my fifth year at LinkedIn, so I've been there for quite some time.

**Adam Stacoviak:** Is it safe to say that the reason that LinkedIn has gotten involved and supports Ember is because of you?

**Chad Hietala:** I don't think I would say that. I think that the business has specific needs. We think that from a core team's perspective we want Ember as a framework to cater different sized companies, different use cases and everything like that. This was kind of one of the luxuries of having everything be open source - you see all of these different use cases and everything like that. I think what I brought to the table from the open source perspective is like, you know, a rather large company with hundreds of engineers - how do we build a better system to suit those types of use cases.

**Jerod Santo:** Well, one thing that we can say about Ember - even back when we had Tom and Yehuda back on in 2014, they were talking about playing the long game. Do you remember that, Adam?

**Adam Stacoviak:** I do, and we liked that.

**Jerod Santo:** Yeah, how they were investing for the long term... And one thing that we can say about Ember is it has just continued to iterate, continued to improve; there's been many innovations that have come out of Ember... The focus on the CLI I think was huge; there was another one I had on top of my head that I just lost, but...

**Adam Stacoviak:** Glimmer...

**Jerod Santo:** Glimmer - yeah, absolutely. The mindshare of developers kind of ebbs and flows, and we've seen other things come along... You know, Angular became big, and now React is very big, and Ember has just continued to be kind of the "slow and steady wins the race" attitude, of just like continuing to push and push and push, and it's kind of a picture of sustainability in that sense.

**Chad Hietala:** Yeah, I would agree. It's kind of funny sitting here in 2018, and a lot of these ideas that I think Ember kind of championed early on - things like having a conventional CLI tool - were pretty radical I think at that point in time. Now you have Angular CLI, there's a Vue CLI, there's a React CLI tool for kind of like scaffolding out these projects.

The other kind of interesting thing is the way that Yehuda and others got involved with the standardization process. There's this manifesto, it's called The Extensible Web Manifesto; I think multiple people that are pretty prominent in the industry wrote and said that they were gonna become part of the actual standardization process... You had people that weren't like academics or language designers, but actual practitioners, going and working on the standardization body. So you kind of see some of those things in how Ember APIs have been created. In the past they were (I think) very forward-looking, and this is one of the things that I'm probably most excited about - the Ember 3.0 Roadmap... It is finally having a lot of the now specced out things to be the main line APIs inside of Ember.

For example, I think Yehuda has been working on ES6 decorators, or if you're familiar with Java, there are annotations for two years now... That looks like it's going to finally land, and that's kind of the last feature that we need to represent all of Ember's object model in native Javascript syntax. So the first thing was we need a class system - that came on ES6 and Yehuda was very involved with that in the beginning; now we have this notion of like computer properties which we need decorators for.

I think within Ember 3.0 we'll definitely see how this class system that when was released was targeting browsers like IE7, IE8, IE9, that have no shot of like ever having these Javascript features, and how we have evolved from a class system and those days, to the framework that I think everybody would expect you to have in 2018... Using basically a non-userspace-defined class system and other APIs like that.

So there's other APIs I think in Ember itself - there's a whole innumerability class, and mix-ins and everything like that, and those APIs have now been standardized, I think, in IE10 and forward.

I think it goes to show that not only was Ember early on some of these concepts; the APIs themselves I think were ahead of their time, and we have just been -- we're slowly but surely going to land everything that these APIs were kind of designed for, or at least for forward-looking in terms of landing the actual native thing.

**Jerod Santo:** Yeah, and then the web itself is better off for it, for sure. The other thing that I had top of head and couldn't remember as I got mid-sentence is the release cycle, which was -- I think the Chrome Dev team really was the trailblazers of this continuous release pattern every six weeks with the multiple channels... But Ember was very early, if not the first framework. Right now Chrome is an end user program, but the first dependency framework to really say "This can work for us as well", and just continue down that road for all these years has been... We've seen that mirrored elsewhere, so that's another place where you all have innovated.

**Adam Stacoviak:** On the Builds page it's actually laid out pretty good, too; the path of 3.2.0 is laid out graphically even, and it seems like it's part of this release cycle to say "Hey, this is where we're at April 10th, this is where we'll be at May 21st, and here's what you can expect in between now and then - beta 1, beta 2, beta 3..." It sets an expectation to developers contributing, and also community stepping in to say "What is the release cycle path for the next release?", that kind of thing. It's very good to set that expectation, because that's half the battle of diminishing confusion.

**Chad Hietala:** Yeah, I think one of the other things that we are really trying to push forward is we actually have a status board. The Ross project I believe has a similar thing; if you go to Emberjs.com/statusboard or /status, you can see all of the efforts that we're currently working on, and what's the state of those things, the RFC's associated with them, relevant PR's and all that type of stuff.

Some of the things that I mentioned, like updating the object model is one of things on there. Glimmer Components is another thing that's on that list. We're still playing with it, but we want to let the community know how we are actually evolving the framework over time.

**Adam Stacoviak:** And just in case you're listening to this and you went to /status -- it's actually /statusboard, so... Check the show notes for the true link.

**Jerod Santo:** That is very cool, and I definitely would advocate for other projects to have similar -- I mean, just very explicit and clear on where things are, where they're heading, and that's super valuable.

Just thinking about Ember and this kind of Energizer bunny of Javascript frameworks, and really as a model for sustainability. It makes me wonder, at a macro level... Can you describe to us how the Ember -- not Ember.js the source code works, but can you describe to us how Ember the open source project runs? Governance, we talked about the release cycle a little bit, sponsorship... Give us a picture of how this machine moves down the road.

**Chad Hietala:** The way that the core team works is that there's individuals that are kind of stakeholders, I would say... They own their own business, they work at a company that uses Ember, their consultants - those people have been kind of like hand-selected by other people on the core team. Obviously, this started off as a core team of two - Yehuda and Tom. As the project ratcheted up and people put more eyeballs on it, they identified people within the community that were I guess contributing a lot to the system, that had a fairly good understanding of the system, and were moving forward.

I think every year at EmberConf they kind of announce new people that they recognize to become part of what's known as the Ember core team... But there's also other core teams. There's a core team that is responsible for the actual Ember CLI, we have a learning team, which is all the docs and the learning resources; they also do infrastructure for the emberjs.com website. Then there's the Ember Data team, which is responsible for everything related to the data layer.

We think of all of these teams as being peers to one another there's isn't this over-arching group that is the core team, or whatever. We really would like to think of it as -- we have people that are just very focused on very important parts of the overall ecosystem.

Now, the Ember core team historically has met I think once a quarter face-to-face. We have two days, we go somewhere and we talk about -- we have different types of meetings. There's like "Okay, what are the things we wanna do the next quarter?" We kind of come up with a plan, we write RFC's during that time...

Then there's kind of the long game type of face-to-face meetings, where we kind of ask the question of "Where do we wanna take Ember and what are the logical steps of getting there?" They're both long and short-term meetings that we typically have. I guess the funding for the meetings and everything like that is a lot of people's employers -- LinkedIn sends me to go to those meetings that talk about the future of the framework and everything like that.

Other people are funded or sponsored in some way through -- if they're consulting at the time and they're working on something specific, that's kind of blocking what they're doing in the consulting work for, then they can kind of get their trip paid for, or whatever. But I think a lot of it is people do actually spend their own personal money to drive the framework forward, because they care about it and they have kind of a vested interest in terms of where the technology should go. A lot of people have different points if views in terms of where it should go because of -- like I mentioned before, Ember is trying to suit the needs of many different things, from consultancies, to small applications, to really large applications... So having people with their own viewpoint is super helpful.

**Jerod Santo:** Is there a trump card? Let's say there's a disagreement about a direction... Can Tom just say, "Yeeea-no", because Tom's one of the two? How does that work?

**Chad Hietala:** We're largely a consensus-driven team. All of the teams -- you have to get consensus of all the members on the team. There's no BDFL, "I'm gonna come in and tell people this is the way that it's going to be."

As one can imagine, consensus-based things can be typically grueling at times, when people aren't convinced that a specific direction is the way to go.

A lot of it is thinking about all of these use cases and all of these concerns that people have, and trying to come up with the best solution for it. Typically, when people do have concerns, it's not like flipping tables and telling people "You're just wrong!" and you give concrete examples of why that specific direction is wrong. It's more or less there are very true things that just need to be incorporated into the larger design that a person is pitching.

**Jerod Santo:** So then eventually some sort of vote...?

**Chad Hietala:** We don't really vote. It's more or less we ask like "Does everybody agree?" and then we move forward.

**Adam Stacoviak:** \[unintelligible 00:21:12.00\]

**Jerod Santo:** Speak now, or forever hold your peace, right?

**Chad Hietala:** Yeah, right.

**Adam Stacoviak:** It's not an official boat -- boat, gosh... Not an official ballet, that's what I was thinking. I said b for -- anyways...

**Jerod Santo:** If there was an official Ember boat, that would be neat.

**Chad Hietala:** Yeah, another thing that is kind of interesting is the RFC process. The vast majority of the ideas that we talk about in these face-to-face meetings - and we also have weekly meetings on Friday - are talking about the design... If we're writing an RFC or there's RFC's that the community have talked about - everything is out in the open, and that's kind of the point of the RFC process. There isn't some smoky room where we're concocting up all these plans, or whatever... No, it's like -- everything that we do, that we talk about, becomes an RFC. Then the community can comment on it and think if it's a good idea or not.

For instance I have a couple RFC's out right now - they're somewhat controversial, I guess, so we're hearing from the community in terms of like what they think about some of these ideas.

**Adam Stacoviak:** How do you go about starting an RFC? I'm trying to find docs on the process to get there, and just poking around the EmberJS website... Where would somebody go that may not be aware of the process to learn this, and then at the same time know how to actually fulfill an RFC? Someone that may not be familiar with the process.

**Chad Hietala:** I believe that the process is outlined in a GitHub repo. It's at github.com/emberjs/rfcs. Basically, anybody can write an RFC. There are required parts to this document. This document has to give a quick TL;DR of what are you trying to solve with the RFC, and then give a very detailed breakdown of why, the new in detail design, and then after that you have to explain how this thing is gonna be taught. So if you're introducing a new API, one of the issues with that is 1) you have to be solving a problem that is real, and then 2) if the API is so convoluted, then nobody is actually gonna use it, or know how to use it.

That's probably one of the more important sections that we've added recently - how do we teach this concept or this API? Then you also have to include drawbacks or alternatives; then there's like an open questions thing, and then basically anybody -- you can basically open up a PR against the repo, and then typically the core team will look at it, take a glance at it, give feedback in it, and then ask the person... If we think the idea is good, but it requires some rework in a couple areas, we provide that feedback and it's a very iterative process.

**Adam Stacoviak:** I like this "How we teach" part of this RFC process, because it's like -- maybe \[unintelligible 00:24:28.01\] Jerod, if you like this too... But it feels like it's like teachable-driven development, which is like, you know, not only "Here's the problem and here's the design for how to solve it", and maybe even some open-ended questions that may be out there, but how do we actually teach the community how to use this? That seems so -- does that happen often out there? I haven't really noticed that this process is part of like the RFC baked-in process anywhere else. I'm looking at the repo, actually; the RFC repo actually is pretty informative, and there's a template in the repo that kind of goes through all this - the summary, the motivation, the detailed design, how we teach this... And you've got blog posts for \[unintelligible 00:25:03.02\] for saying "This is how this process works. This is what we expect to see here. This is an example of what you might put in here." Drawbacks, alternatives, unresolved questions... This is pretty thorough.

Maybe this is a huge credit to the stability of this project - you've got a process for how a change should go in, and how changes get proposed, and it becomes a much more successful project because you've got good \[unintelligible 00:25:31.02\]

**Chad Hietala:** I think that having that section actually changes a little bit on how you introduce concepts, because you have to think about the teaching aspect, and to some level, the documentation and the guides aspect vary, before you've actually written any code, right? So it puts that, I guess, in front of you, to answer that question very early on, in like how it fits into the bigger picture.

**Adam Stacoviak:** The only thing I'm kind of bummed about - maybe this is just me not googling well enough yet... Is just not seeing this template further along earlier in the process, like a blog about it, or something like that. This is such core information, I think, that's really useful to would-be contributors, that they may have to dig a little too far to get.

**Jerod Santo:** My intuition on that is - and Chad, correct me if I'm wrong - by the time you get to the point where you're going to write an RFC, you've kind of been initiated in to the Ember community long enough that you've stumbled upon or you've seen other RFC's, and you've talked -- so for the uninitiated maybe it's overkill or maybe it's overwhelming, so maybe that's why it's not upfront.

**Chad Hietala:** Yeah, I think that's kind of the way that we think about it - the people that are really passionate about things in the community and have a somewhat detailed understanding of how the community works and everything like that are the people that typically write RFC's. We definitely talk about it in (I think) different blog articles. It's probably been several years since we introduced the RFC process. I think it might have happened right around 1.0. So once we hit 1.0, \[unintelligible 00:27:26.24\] we said "Okay, this is the operating model going forward in terms of introducing new APIs." So it may have been just a long time since we've introduced it.

And we're kind of continually -- I'd mentioned we added a learning section recently, so it is something that we're still iterating on, as we learn new things from other people that are doing RFC's now. I believe React is now doing RFC's, Rust does a lot of RFC's... So yeah, we're learning from other communities as well.

**Jerod Santo:** The amount of detail, and the template, the fact that you have this all written down -- I was even thinking, as I read through the RFC's readme, where you talk about substantial changes... Like, you don't need an RFC if it's not a substantial change (that's a typical pull request) and then I was like "Well, what is a substantial--" because there's quotes around the word "substantial" a couple times... And I'm like "Well, what is a substantial change?" and then it goes on to describe "This is what we would consider a substantial change..." So it just speaks to how...

**Adam Stacoviak:** That's funny.

**Jerod Santo:** ...how much thought, time, and really iteration has gone into this just over the years, just constantly churning, improving, getting better, and fleshing it out. This repo - the RFC's repo - is the sign of a very mature project, and community that's been through stuff and learned along the way... So it's just very impressive.

**Chad Hietala:** Yeah... I don't know how many Javascript \[unintelligible 00:28:52.12\] Ember has been through, but it'll probably go through several more... \[laughter\]

**Break:** \[00:29:02.15\]

**Jerod Santo:** Alright, Chad, so do your best to catch us up -- you don't have to give us the full four years between Ember 2.0 and Ember 3.0, or 3.1, which is the latest release... We'll talk a little bit more -- I know you got into a little bit of the innovations and also where you see things going with the status board, but tell us what's new... For those people who have maybe used Ember a couple years ago, or check it out then and moved on, didn't dive deep into it and have it on a production application; if they revisited the project, what would they find now that they wouldn't have found last time around?

**Chad Hietala:** I think a large portion of what we spent the time on during the 2.0 series - it was a fairly long series... And what we kind of recognized was some of the infrastructure that we have, primarily around the rendering layer, wasn't going to set us up for success. So around 1.0, or going from 1.13 to 2.0, at EmberConf we talked a little bit about this project called Glimmer. The name has evolved from that point, but what Glimmer was trying to do was modernize the underlying rendering engine. In Ember 1.0 it was primarily doing string concatenation and interpolation with dynamic values... Then towards the tail end of 1.11, or towards the end of the 1.0 series, we released this thing called HTMLBars, which was going from string interpolation into just generating compile templates that were effectively what you would handcraft if you were to write all the DOM methods to construct the DOM, and then there was a system there to keep that DOM up to date.

And then right around that time, that's when React came out and really made us kind of rethink on like what the programming model should be, and that is like driving all the state through property setting, or in React it's "set state", which causes you to basically re-render the entire view. So the first iteration of Glimmer was kind of getting to those similar semantics, and not necessarily using the virtual DOM itself, but the same idea that whenever you need to update the UI, you call \[unintelligible 00:32:57.17\] with a new value, and then you basically have committed that change into the system and then the rendering engine figures out how to most optimally update the view. That was the first version of Glimmer.

Then 2.0 kind of started, and then we realized we wanted to implement what was known as these angle bracket components, which were supposed to be a lighter weight version of what existed in Ember 1.0 and still exists today \[unintelligible 00:33:27.15\] these Glimmer components is what we called them, or angle bracket components, were meant to be a lighter weight thing that did have some of the performance issues and APIs that we just don't really wanna live with anymore, but when we try to implement them on top of this infrastructure, the HTMLBars with these React-like semantics, they weren't actually faster... So we felt that the underlying architecture made a lot of assumptions on how the old rendering engine worked. That kind of started this big kind of iterative change to figure out what the new rendering engine should look like.

We typically are all about incremental improvements over time, and not do big bang rewrites... So I think Yehuda forked the HTMLBars repo in 2014 or something like that and started working on the next iteration of what we called Glimmer 2.

Glimmer 2 is kind of from the ground-up rearchitecting how we think about the rendering engine from an architectural point of view. Templates themselves are kind of an interesting concept. A template is at its truest form a pure function. You have a template and you have a context, and you mash those two things together and you get some output. Now, if the context and the template are the same, it's referential transparent, right? If the context doesn't change, then you'll get the same output every single time.

So we think about the templating -- we've changed the focus of how we think about the templating layer from like this thing that creates views and we actually wanted to model the underlying rendering engine as if the template language was an actual programming language. So we think of the templating language now more as a functional language itself, so part of what the Glimmer rendering engine does is that -- or it is a virtual machine. So what we do is instead of compiling the template into a bunch of Javascript code that is then just kind of like called into from Javascript land and then it produces the DOM, the first iteration of the new Glimmer rendering engine was compiling the templates into a JSON structure, and then we interpreted that at runtime and we compiled into a program that then created the view.

This is a pretty fundamental difference between -- where I think a lot of Javascript frameworks are today is that you have things like JSX, or you have Angular templates, and they're all compiling into Javascript and then running it on the client.

One of the founding principles is that we felt that we could make the compiled output much smaller if we compiled to a JSON format, and then interpreted it at runtime. That turned out to be true.

When we did this work and we landed inside of the LinkedIn application, I think we reduced the compiled template size by I think 5x...

**Jerod Santo:** Wow,

**Chad Hietala:** So we went from almost 10 MB of compiled Javascript templates down to whatever that is -- it was like a pretty massive reduction, because we can see the templates kind of at one time and we can do different types of optimizations that you wouldn't otherwise be able to do if you were compiling to a Javascript program. This is like hoisting interesting parts of other templates that may be shared, and everything like that.

**Jerod Santo:** So they're stored as JSON then - is that what you said? I'm just making sure I tracked you.

**Chad Hietala:** Yeah, so the first pass of it was "Let's take the templates, compile them to JSON." There's kind of some interesting articles out there around the performance of JSON parsing versus if you were to have that same string in Javascript land. A lot of engines, because if you use a JSON parser or whatever like that, the parsing of the JSON string has to do less checks and everything like that, because the grammar of JSON is much more constrained than Javascript. You can have a string, and all of a sudden it's calling a function, and now you have to go into that function and get the return value out and interpolate the string. So parsing the JSON and then putting it through basically an interpreter - we got some runtime wins from that as well.

If you've looked at other functional programming languages that are built on other languages - if you look at something like Clojure, that's built on top of the JVM, you kind of have a similar story as to like the next evolution... So instead of doing this JSON format, we would go from the JSON format into an actual bytecode set. We wrote our own bytecode set that we compile the JSON into, and then we have the actual virtual machine loop through that, and it's encoding all the instructions to build the UI. That was somewhere in 2.0, towards the tail end.

Then I worked on a project at LinkedIn last year which was if we're compiling at runtime, this JSON into this binary format and then running it, can we actually do all of this stuff ahead of time? We felt like it was 100% possible, but part of the challenge of this, with a templating system, is that you have a very declarative -- a template is very declarative, but it's talking about things that are in Javascript land, so you need a way of bridging this gap between "I'm talking about this declarative template, and then calling into Javascript land to create components, and everything like that."

So one of the challenges is if we are going to precompute the binary that we're creating at runtime, we have to have some way of resolving components at build time, so we built almost like a bridging technology that when we discover an invocation to a component, what we do is replace the call site with a number (which we call a handle) and at runtime what you're responsible for is basically replacing that handle with a live Javascript object.

This is similar to how things like \[unintelligible 00:41:01.14\] worked this way, or the first versions of asm, where we're gonna create this -- which became WebAssembly, but you have to have some way of talking about invoking things that are actual Javascript objects, versus --

**Jerod Santo:** Right, a reference.

**Chad Hietala:** Yeah, a reference inside the binary code. So we did that, and we were able to reduce the template size further, because now your programs don't get compiled into Javascript, they don't get compiled in JSON, they actually get compiled into an array buffer. And the reason why we felt like this was where we wanted to go is one of the things that a lot of the folks at Google have been talking about for the past couple of years in terms of like Javascript performance or getting up and running -- I think Addy Osmani has written an article about Javascript startup performance... And one of the big costs of these client-side applications, especially on mobile devices, is parsing compiling Javascript. So you're going from this high-level code, and it has to compile it all the way to machine code, and there's definitely costs to that.

So we felt that if we can compile templates, which represent a rather large portion of a client application, into something like binary data that doesn't have to go through the Javascript parsing compile pipeline, then we can get some decently-sized wins from that. Especially as your application grows and grows and grows, the more templates that you'll have inside of your application, and if you're compiling to Javascript, you have to \[unintelligible 00:42:46.21\] the Javascript parsing compile cost.

So this is kind of like the state of where we're at with Ember. We haven't landed the compiling to binary code inside of Ember yet. Last year's EmberConf we announced this thing called Glimmer.js, which is a lightweight component library that you kind of like equate it to kind of like React; it's just the view layer, it isn't like a router or anything like that. It's like a class object, and a template, and it allows you to put components onto a page.

So we use that project kind of as a proving ground for a lot of these crazy ideas, like "Can we take this templating layer and compile it to binary code?" Ember has strong guarantees around stability and semver and everything like that, so we can't just go off into the desert and come up with some crazy idea and try to shoe-horn it back into Ember. We have to design a system that allows us to make large leaps, but then also bring everybody in the community along for the ride in terms of like the performance.

So with Glimmer.js it's the same rendering engine that Ember uses. They have the same dependency on it, so what you can express -- the VM, you can think of it as just like a virtual machine runtime; the templating language between these two things are equal, so it ends up working out. So you're able to basically do this experimentation, but have the guarantee that it is going to eventually land in Ember in some form.

**Jerod Santo:** You're answering a few of my questions as we go along there, I think... Because the first one I started having was these are major rewritings of the underpinnings, so do the ergonomics change, from the Ember.js user perspective? And it sounds like you're saying no, because you've gone through great pains to take the volatile bits and move them over to Glimmer, and then slowly introduce this back into Ember. Is that what you're saying, or am I not following you?

**Chad Hietala:** The way that we have designed the VM is that we put a hard constraint on "This has to be able to work in Ember", so while we've done a bunch of experimentation with the underpinnings, the semantics of the system have to basically remain the same. We think that React got this bit right, in terms of how to think about the programming model, so as long as we have the same semantics of like when I need to update the state I call some method or I set some property and it updates the view - that all remains constant. It's more or less that because the templating language gives us an abstraction that isn't Javascript - we're not tied to the Javascript runtime or whatever like that - we can fundamentally change the underpinnings of this system.

**Jerod Santo:** And then my other question I was having - and I believe you've answered this, but I'll reiterate it so we're all on the same page... Glimmer.js - which actually has its own website (glimmerjs.com) - could be used completely standalone, and perhaps you would maybe even advocate for people who just need a UI library and don't need all of the other things that Ember offers... You could just use this by itself.

**Chad Hietala:** Yeah, that was the idea with Glimmer. We kind of recognized that there is a spectrum of applications that one may want to build. There is the highly interactive, single-page application experience that Ember I think is well-suited for, and then there's like "Hey, I need to put this dynamic widget on this page, and I just need a little bit of state management, but I don't need a full framework."

That was kind of the idea around Glimmer.js, but what we're actually thinking about with Ember is how can we make an actual experience like that inside of Ember? This is thinking about "Can we serve a bare backbone of Ember, that can do the same things that Glimmer.js has?", so that's why we don't bifurcate. While the Glimmer VMs are the same between these two things and you can totally take -- you'll be able to take a component from a Glimmer.js app and put it in an Ember app and it just works... That's one of the things that we're actively working on right now. But we're also coming from the other end and saying "Can we make it so that you can build very lightweight applications with Ember itself?"

**Break:** \[00:48:08.24\]

**Adam Stacoviak:** It sounds like Glimmer is similar to the way Vue is heading, in terms of drop-in, ease of use, that kind of thing.

**Chad Hietala:** I think yeah, that's kind of the use case that it's trying to solve - this very lightweight thing that you can just drop it into an application, do a little bit of interactive components, and then be done with it. At LinkedIn we have a couple different use cases - embedded widgets and CRM's, like Salesforce or something like that... And we want to have just a little bit of functionality; it's not a whole app, it's just a component that needs to go somewhere in another person's website, but you could use it for any type of website... But that's kind of the use case - a small component library that can be used inside of a sort of rendered application, or it can be... The idea is that you can also use these components inside of an Ember application. So you have this cross-stack use.

Another use case we have at LinkedIn is we have a bunch of internal shared components, and we wanna be able to have high leverage, so no matter what stack you're on, you're kind of writing these components for -- if you're on like an old application that is still server-side rendered, you can still write using the Glimmer component API, or if you're working on an Ember app, you use these components and drag and drop them into your application. So that's kind of the idea - to basically span the spectrum of use cases for this template-driven approach to UI.

**Jerod Santo:** We all might need to change your tagline, because it's "A framework to create ambitious web applications", but it sounds like it's "...and any other thing that you might be creating."

**Chad Hietala:** \[laughs\] Yeah.

**Adam Stacoviak:** So a follow-up to that might be will this be able to be dropped in with just a script tag into HTML, and if I wanna pop it into a page or drop the script into a head - is that how it might be used, or is there a different process to make it that lightweight?

**Chad Hietala:** Glimmer.js uses Ember's CLI to actually produce the asset, so at the end of it you have some script tags, but it isn't like \[unintelligible 00:51:51.23\] just grab a script tag and drop it onto the page. Now, you could probably do it if you wanted to; it's not gonna be fast, because you need a compiler basically to compile the templates into something. So I don't think it's like how jQuery was, where you can just drop it on the page and start using it. There's still a little bit of build step to get the app running.

One interesting thing that we've thought about is we can totally vend the Glimmer components inside of a custom element, and we have -- I think there's a repo on the Glimmer.js repository that basically did this. So the way that you would introduce these components onto a page wasn't necessarily through a script tag, but it was like a custom element that could fetch all of its resources and render that component to the page.

**Jerod Santo:** Tell us a little bit more about tree shaking. The way I understand it is you have Ember the library, and it exposes n numbers of functions - maybe there's 500 functions - but in my application code I'm only actually calling into three of those, and maybe those three call into 17 others... So of Ember's 500 functions - I'm just making these numbers up, of course - my system calls 20... And so tree shaking is the process by which we can actually just shake those 20 out and leave the rest of Ember on the cutting room floor, hence reducing the dependency weight? Is that what it is?

**Chad Hietala:** Yeah... I mean, I don't know why in the Javascript community we've come up with new words for explaining --

**Jerod Santo:** Crazy words...

**Chad Hietala:** It's dead code elimination is basically what it is. \[laughs\]

**Adam Stacoviak:** It's not tree shaking.

**Jerod Santo:** I know. It's mystical... You know, you're gonna shake a tree...

**Chad Hietala:** Yeah.

**Adam Stacoviak:** Before you go forward, Chad, what's a good way you say it? What was the terminology you used for this?

**Chad Hietala:** It's static linking. You're just gonna link all of the -- so you're gonna follow the imports back basically to depth, and you retain only the code that you have statically set inside of your Javascript that you're using. There's projects like Webpack that do tree shaking, Rollup does tree shaking... It's just another way of saying that we're gonna remove all the code that you're not calling into.

**Adam Stacoviak:** But you just used the phrase we're trying to get rid of based on what you've just said in your description of it...

**Jerod Santo:** \[laughs\] Well, that's the industry phrase though. He's just using the jargon. On the lines of tree shaking - maybe you guys know this, maybe you don't. I've learned this recently - do you know that there are web performance junkies who will effectively tree shake their web fonts? I think they call it subfonting or subsetting. So you're loading web fonts, and they're expensive for performance and what have you, but you're only using - let's just say of the English alphabet, 26 letters, I'm only using 17 of the letters, so I'm gonna actually tree shake out the other letters out of my web font, and reduce my web fonts' subset to just the letters I'm using. Ain't that crazy?

**Adam Stacoviak:** Is this at render for the individual user, or just like add a new compile time for the app?

**Jerod Santo:** I don't know, man... I've never looked into it.

**Adam Stacoviak:** Because if it's on demand, that's pretty crazy. It makes sense though, because if you have many more characters than 26 and you're using only 10, and the font weighs 2 megs and you can cut it down to less than 1... Why not?

**Jerod Santo:** That's true. But "Why not" is because that's a lot of work.

**Adam Stacoviak:** But you do it for your Javascript, why not do it for your web fonts?

**Jerod Santo:** Well, why don't you just use Times New Roman, and it's already there? \[laughter\]

**Adam Stacoviak:** Talk to your designer. Talk to your designer, Jerod.

**Jerod Santo:** Anyways, I've derailed us, but I found that amazing, just the length that people will go to to squeeze out a little bit more performance. It's kind of cool. So we were talking about tree shaking in Javascript, and I probably completely derailed us... We were talking about the term itself, but maybe... You mentioned that Ember isn't there yet, like we can't do it. We want Ember to be this framework for both ambitious and non-ambitious websites; we would love to be versatile and have like a slim version of Ember that we could do via tree shaking, but you didn't sound like you were there yet, so I guess the next question is - and maybe this is asked and answered, but just bear with us... What has to change and when is it gonna change, so that Ember can be used in that fashion?

**Chad Hietala:** I think as of like the past couple of days it's basically done. One of the challenges we had with Ember itself is internally there's circular references to things, and you have to be able to sort all that type of stuff out, but I believe Robert Jackson who's on the core team has a branch working where we not only have the modules API completely fleshed out as ES6 imports... The other thing is that we ship Babel with Ember CLI as a default to transpile the ES6 or the newest syntax of Javascript into something that can run in a variety of browsers... So one of the things we've done there is introduced the notion of targets.

What a target is is if a browser supports all of these new language features, then don't compile it into code that could run in like IE10. So he has a branch where we're not only doing the modules API, so you can tree shake out the app, we're also only transpiling the features that aren't implemented in any browser.

This is kind of a way that you can target evergreen browsers, which has kind of been one of the issues of trying to get Ember to a place where you can target different browsers and different types of -- or sorry, not targeting different browsers, but targeting different use cases... Ember comes along with a decent amount of polyfills that are polyfilling things for APIs that aren't there in older browsers. So even though Ember is on 3.0, we still support IE11, and then everything else is evergreen. So because everything else is evergreen, we kind of have to have an answer of like -- I shouldn't have to down-compile this code, I should be able to maybe create multiple builds and I can serve assets for IE11 that will run in IE11, versus I can just use the native Javascript inside of like Chrome, say. So I think very soon this is gonna become a reality.

**Adam Stacoviak:** I looked it up while you were talking there, just to confirm I knew what an evergreen browser was. I mean, I kind of understood that it was future-proofed, but I didn't know how. Can you break that down real quick?

**Chad Hietala:** Yeah, so an evergreen browser is basically a browser that automatically updates; it's keeping everybody at the leading edge, so that people do not get stuck on specific versions. Internet Explorer was notorious for like -- you had like IE6, IE7, IE8, IE9, and everybody's just waiting for these browsers to kind of phase out in terms of their usage, where an evergreen browser, if you have Chrome or something like that, it'll tell you "Oh, a new version of Chrome is available", and then you basically opt in and you have the new version of the browser.

It's very difficult for somebody to get stuck on a specific version. It's kind of pushing everybody forward. Every major browser vendor now does this; Edge does this, Chrome does this, Firefox does it... I believe Opera, because it's effectively Blink under the hood; they're doing this as well. It's just a way to make sure that everybody is towards the leading edge of the technology.

**Adam Stacoviak:** That's kind of funny to think about that. I've just checked my About page for Chrome, and I'm on version 65 and plenty dots after that, obviously... But could you imagine marketing Chrome 65? Like, "Hey, what Chrome are you on...?" You know, you probably still say that behind the scenes in dev land...

**Jerod Santo:** In tech support.

**Adam Stacoviak:** Yeah, but general users aren't saying -- they just know they use Chrome. And I guess going back to the question of being more nimble, Vue has being able to drop a script tag, and obviously you've got the VM, so it makes it harder; you're compiling down to machine code, or bytecode, or something like that to make things faster... You know, one of the issues with jQuery was just the fact that it would ship so much and didn't do all this tree shaking like we've just kind of talked through. You kind of had to ship all of jQuery and support all browsers regardless, but you wanted to use jQuery features. That's what made it sort of go out of style - this lack of modularity.

**Jerod Santo:** Well, smaller is definitely always better, and especially now that we've found the internet very much exists on mobile devices, and those mobile devices are very much on slow internet connections, with low latency, out in the boondocks, and to stay competitive in the front-end space I think you have to be able to scale up and scale back down, and Ember was always in the space of ambitious web apps, so if you know that you need that interactivity, and you need routing, you need all this stuff, it was a great choice... But if you don't need all of that and you still need -- if you're thinking about doing font subsetting because you need to squeeze out that extra bit of performance, it really takes Ember off the table for you, and then hopefully this will move it back into a place where you're like "Okay, maybe I can still just use the parts that I need", which is great.

Tell us what else... We're wrapping up here soon, but what else is coming down the road for Ember? ...things that you're excited about, or something maybe you're working on personally.

**Chad Hietala:** Yeah, so one of the -- I think the biggest boons for the community is actually adopting ES6 classes in Ember itself. It's one of the things that as an Ember developer that you use every single day - you're writing classes, or updating classes, and everything like that... And at this point it feels very old, so we're doing this big refresh of the class system just to use ES6 classes, and I think that's what people would kind of expect of a Javascript framework in 2018.

Like I mentioned earlier, the reasons why is that we wanna support the entire class model, the entire class system inside of native ES6 syntax, and we should be able to do that here pretty shortly. Certain things work today, but not the entire scope in which the Ember object model falls in today. But I agree with the sentiment that -- I think the web has a pretty big advantage when it comes to the mobile market, so I am personally kind of excited about this idea of like how small can we get the framework so that we can address different concerns for different markets, and everything like that.

The web in general I think has an opportunity in emerging markets, and Google talks a lot about the next billion users that come online - they have poor connectivity, the phones aren't great, you also have data plans that are rather restricted inside of these markets... So downloading native applications inside of those markets is pretty -- a big non-starter. I think the web can be extremely useful in these use cases, you just have to think pretty diligently about things that you're sending down to the browser and everything like that... So I think it's great that Ember is really taking this seriously and we're doing a bunch of interesting things to bend the curve in terms of what we think about web applications, from the kind of like static HTML applications, to the highly dynamic Ember applications that we have today, or like React applications...

I think that there is a good middle ground, which is taking the best from both worlds - having server side rendering for the first route, and then client side rendering all the subsequent routes. I think that's a huge -- it's a very good pattern that I think a lot of applications should follow, and I think as we land some of these things in Ember, that will become hopefully the default way that we think about building these client side applications, and that is with a very performance-focused point of view from the start, but at the same time acknowledging that as your requirements of your project change, you have to have something, right? You can't just say like "No, we're not gonna build that feature." We have to have some shared architecture for us to build these ambitious things.

**Adam Stacoviak:** That's kind of been the MO for Ember going back to 2014, Jerod. That's the way we heard from Yehuda and Tom - borrowing the best ideas from the community; not so much not coming up with our own, of course, but just like paying attention to what's happening out there and doing their best to adopt best practices that are happening elsewhere, and not just turning a blinder on because it's competition or a different framework or different ideas...

**Jerod Santo:** Exactly.

**Adam Stacoviak:** It's like, "Is it working over there? Okay, how does that fit into the ecosystem of Ember and how does it make sense for the mission of Ember?" Since we've kind of covered a lot of ground here in terms of where Ember has been, where it's going, your involvement in it, maybe share with us -- I think Jerod even asked this question earlier, like "What makes someone come back to Ember if they haven't seen it in a while?" I'm thinking more along the lines of they've never seen it at all, or if this is fresh and new for them, or maybe they've only ever seen React. What makes someone choose Ember? What are good use cases for Ember and maybe what are some good examples of applications in the wild? Maybe even at LinkedIn, how are you using it?

**Chad Hietala:** The value prop that has kind of always been with Ember is we do look at what is going on inside of the community and we try to roll those best practices into the application. This is like the whole "Stability without stagnation" MO, which means that we're going to create really stable APIs, but you're not gonna be left behind by what is happening in the larger Javascript community.

So that's kind of the way that we think about it, and if you're building applications that are going to live for several years, that have many developers working on them... Or they don't even have to have many developers working on it; it's more or less like "I'm building a business. I wanna think about the business, I want the technology to allow me to continue to make my business successful, but I want to not have to think about which libraries should I use for routing, or what's a good way of doing \[unintelligible 01:08:28.18\] or how do I efficiently update the view? It comes along with -- it encodes a lot of the best practices... And I think that it still resonates with me. I've been working with Ember since 2012-2013, and it still resonates with me that we have shared solutions to problems, and recognizing that not all applications are special snowflakes. There's common things that we can build up from. Inside of my organization, this removes our long meetings and "How are you gonna do this thing that is critical to the technology, but it isn't mission-critical for the business?" I think that's one of the areas where Ember strives - the stability without stagnation aspect of it.

I think for people that have used Ember and have left and then are taking another look at it, I think what they will find is I think some of the things that may have been difficult for people to pick up at the beginning was API docs around 1.0, and still kind of like through the 1.x series, where they were good, but they weren't great at explaining how the entire system works together and everything like that.

I think we've invested a lot in documentation and actually having a docs team, so that the concepts are easier to learn. So that's one category of people, it's like "I don't get this thing, it's hard to learn. I took one look at it but the documentation didn't really tell me why I should do this."

Then there is the performance aspects to it. I think we are doing a lot of interesting things, and we have written about the ins from doing those performance things... So if you got into situations where Ember was falling down because of performance or whatever, I think we've addressed a lot of those cases, and in some cases leapfrogged others in the space. So those are I think some of the things that I would kind of like re-examine.

The other thing I guess is the things about the Javascript community are -- it is definitely like every so many years a new thing comes along and makes you have to go and rewrite your entire application, and maybe people have been through this at this point, because like I said, Ember has been around for a decent amount of time... And some people get burnt out by that...

Always chasing the hype train or whatever is another thing that I think brings people back - they went off and tried a bunch of things, but then they're like "Oh, this thing actually works and I don't have to worry about what..."-- basically having FOMO.

**Adam Stacoviak:** That's certainly the truth. There's definitely a hype cycle in Javascript, and I think the interesting thing with Ember is that, like Jerod said at the beginning of the show, is that you've been this Energizer bunny... You say it's stability -- what was the phrase you used?

**Chad Hietala:** Stability without stagnation.

**Adam Stacoviak:** There you go. I mean, you've been that for years... Six plus, seven plus years. You personally even, not just Ember. That's pretty cool to see that. You certainly give a lot of confidence into the future of Ember. We'll leave it there then. Thank you so much for your time today, and thanks for coming on the Changelog, I appreciate it.

**Chad Hietala:** Thanks for having me.
