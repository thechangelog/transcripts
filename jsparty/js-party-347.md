**Jerod Santo:** Hello, party people. I'm Jerod, your internet friend, and I'm joined today by half of the team behind an awesome document called the Nine Node Pillars. Maybe you've heard of them... Matteo Collina is here. What's up, Matteo?

**Matteo Collina:** Hi, Jerod. Very happy to be here again. Everything is absolutely fantastic. I just came back from Ireland for the Node.js Collaborator Summit and NodeConf EU. It's been a blast.

**Jerod Santo:** Nice. Always a blast to have you, Matteo. Frequent guest here on JS Party. And a first time guest - Natalia Venditto, who is the lead owner of the JavaScriptDX and DevTools at Azure. Natalia, welcome as well.

**Natalia Venditto:** Thank you. Thanks for having me here. I'm very excited.

**Jerod Santo:** I'm excited about this document, this piece of work you all put together, because I think it's excellent for giving people foundations on building Node apps in a proper, enterprise-ready way. We're going to dive into hopefully all nine pillars. I might take them out of order... Because some of them are very generic, and I think apply to many kinds of applications, and then there's some like Node specific ones. I would love to hit the generic ones first, so we make sure we get to all those, and then loop back around. And you may disagree with me on that, Matteo, but we'll get into that.

**Matteo Collina:** I do agree with you. I actually agree with you.

**Jerod Santo:** You do?

**Matteo Collina:** Yeah.

**Jerod Santo:** Okay.

**Matteo Collina:** Let's get started.

**Jerod Santo:** Let's get started. So first, let's hear about quickly how this came together. You have four people writing a document... Whose idea was this? Why did we write it? Etc. How did it go?

**Matteo Collina:** The main idea was mine, essentially. We started coalescing a lot of ideas about -- I've been doing this for a long time, and helping companies, doing consulting. Before Platformatic, my startup, I started to -- I did consulting for a long time, and basically I collected a lot of bad, bad experience on what companies do wrong with Node.js. And then I decided "Well, there's a lot of bad opinions out there... So maybe we should spread good opinions. So what can I do about it?" And I said, "Well, if I just write them, it's just my opinion. Let's take a group of people to write them." And therefore, here we are. At the beginning I think there were less than nine.

**Natalia Venditto:** Five.

**Matteo Collina:** We started with a lower number.

**Jerod Santo:** Oh, scope creep. A little bit of scope creep.

**Matteo Collina:** Then we became nine, and nine was a good number.

**Jerod Santo:** That is a good number, especially because of the alliteration. Nine Node Pillars. Natalia, how did you get involved?

**Natalia Venditto:** Well, I've been collaborating with Matteo for a while already, ever since I joined Azure... But I think a little bit earlier also, following him because of his work in the technical steering committee. And I've been working with Node.js for a very long time, actually in enterprise for more than a decade, as a webmaster of the time, way before that... That wasn't with Node.js, but anyway, with JavaScript. And yeah, I've also seen everything, all the pitfalls, all the bads, all the goods, actually leading a consultancy at the frontend team, or frontend department, with a consultant back in the day, with leading enterprises doing a lot of stuff that -- yeah, basically ruined their applications... And tried to inform people how to not make the same mistakes they did, and we did. Because I'm not going to say I never made any mistakes. I probably made a lot of the mistakes we're trying to avoid people to make in the future.

**Jerod Santo:** Sure. You can't really know good until you've known bad. You've made the mistake and you're like "Oh, that's not good. Let's not do that anymore." So this is very much the hard won learning process. And not all of us have to go through it every single time. Of course, certain things you have to learn on your own... But if you can glean from people who have made the mistakes, how to avoid them in the first place, then you're ahead. And so I'm glad that you all put your knowledge into this Nine Node Pillars.

Now, I want to take them out of order, but are they ordinal? Is it one through nine and one's the most important, Matteo? Or can we --

**Matteo Collina:** No, I don't think so. It's a "Let's put it that way", a marketing decision on the orders of them. There might be something that comes before the others, but it's mostly put on what would resonate more for people at the beginning.

**Jerod Santo:** Gotcha. So I'll read through them real quick. We will then discuss, as we see fit. No way we're going to be comprehensive and cover all nine in extreme depth. That's what the document is for. So of course, to our listener, if you've learned something from this conversation, go dive deep into that, and pull out some gems. But the Nine Node Pillars... One, "Do not block the event loop." Two, "Monitor Node-specific metrics and act on them." Three, "Use Node LTS versions in production." Four, "Automate testing, code review and conformance as much as possible." Five, "Avoid dependency creep." Six, "De-risk your dependencies." Seven, "Avoid global variables, config or singletons." Eight, "Handle errors and provide meaningful logs." And nine, "Use API specifications and automatically generate clients." There you have these folks, nine pillars of good enterprise-ready Node.js apps.

Now, I think some of these are good for pretty much any application, and I think some of these are Node-specific. Matteo, did you agree with me? I couldn't hear what you said. Did you disagree with me on that?

**Matteo Collina:** No, I absolutely agree.

**Jerod Santo:** Oh, okay. Cool.

**Matteo Collina:** \[08:04\] Some of them are -- so there's a thing to say. Some of them are -- like, the principle might be generic, but a lot of the content within the section is Node-specific. So while the principle might be generic, the content in there has Node-specific examples on how to implement that principle in Node.js. So they were worth mentioning anyhow.

**Jerod Santo:** So let's start with the ones that I think are the most generic, and we can dive into all the noding details. And those are the ones like "Avoid dependency creep." This is number five, for you all. And certainly that to me is like a universal thing for all software development. Avoid dependency creep. Say more, Natalia. Do you agree? Do you disagree? What do you think about this particular pillar of Node.js apps?

**Natalia Venditto:** People that work with me know I'm a hater sometimes, because I try to avoid dependencies at all costs. And of course, you're not going to reinvent the wheel and write whatever it's already written and maintained by other people, and you know that it's reliable, and you can add to your codebase... But I think that we tend -- and I'm going to say "we", because it's an ecosystem problem; we tend to add dependencies where we don't need them. We tend to not consider the cost of maintenance. We tend to not consider the cost of being tied to a piece of code that somebody else is leading, or has control over the roadmap of.

Yeah, and that's something that we need to keep under control. And that's what we are trying to -- and you're absolutely right, that's not only a JavaScript ecosystem problem, it's a software development or web development in general problem. But yeah, it's a very, very important thing to keep in mind.

**Jerod Santo:** Yeah. And I've spoken with hundreds and thousands of devs, and we all kind of agree on this. And yet we all find ourselves still with unwieldy dependencies. So Matteo, maybe the question becomes, like, how? Like, we agree that we should, but how do you actually decide how do you do that?

**Matteo Collina:** That is true. There is a very important thing to say... The JavaScript community and npm have solved a problem that plagued the industry for decades. "How to reuse software at scale?" And this is -- but whenever there is a big problem to solve, you need to say "Okay, be careful what you wish for." And now we have Node modules full of modules that maybe we use, maybe we don't, maybe we can get without. And there are a few things to say... A lot of the time, some of the modules might not be necessary anymore, because we have been adding APIs to Node.js Core for a long time. And also, the web has been adding APIs itself. And therefore, let me make a very clear example.

Fetch is a fantastic spec, is a fantastic API. Everybody loves Fetch. But whenever I open an enterprise codebase, most of the time I see Axios. I'm pointing at an example -- and I love Axios. I like Axios. I'm just saying.

**Jerod Santo:** Sure.

**Matteo Collina:** It's an example. Or - I've opened a codebase recently and they still use the Request module. Now, I just want to check how many times the Request module, which has been deprecated ages ago, is still used every single day. Because it's actually a very good number. The Request module is still downloaded 70 million times per week.

**Jerod Santo:** Wow. That's astounding.

**Matteo Collina:** And it's been deprecated for five years. Five years this thing's been deprecated, and it's still being downloaded 17 million times per week. This is the problem, that you need to keep those APIs condensed, and try to reuse them. But being smart in what you \[unintelligible 00:12:02.08\] what you do today, versus what you do in two years. Things change, and you need to keep your codebase liquid in that sense. You can't put things in stone. And a lot of teams put things in stone, and say "This is our kit, and we decided it three years ago." But you don't need this anymore, "We decided it three years ago, and the staff engineer said so."

**Jerod Santo:** \[12:24\] Right.

**Natalia Venditto:** Yeah. And this is why we're big proponents of the web platform... Because first of all, go and check what's there. That's future-proof. And then go and find it somewhere else when that's not supported natively.

**Jerod Santo:** Are there heuristics or best practices that you can give regarding dependency selection, or that choice to go search npm, versus just coding something? Is there a certain size or a difficulty level of a feature where you say "You know what? Grab a dependency." Fastify, for instance. Matteo, you're not going to say "I should go roll all my own routing, and HTTP stuff." You're saying "Probably grab Fastify", most likely.

**Matteo Collina:** But you probably should. It's a lot of fun. \[laughter\]

**Jerod Santo:** I probably would if I had the time... Because I like having fun.

**Matteo Collina:** See?

**Jerod Santo:** Yeah. So that moment, that threshold, how do I decide "Yeah, I'm going to grab something", versus "I should just build this"?

**Matteo Collina:** I tend to not rewrite code. So if I find something that meets my standard, I'll use it. I use it from npm. The question is my standard is usually pretty high, and therefore -- whenever I use something, my question is "Okay, if I adopt this, will I be able to maintain this thing?" And this is the question that everybody needs to ask when they adopt a piece of software, especially a company. If the thing is small, the answer is always yes. If the thing is big, then you need to ask, "Okay, I cannot maintain this. If I don't maintain this, then who can? And how can I get them access?" And then it gets to "Who do I need to pay?", essentially, as a company. And this is important - company versus individual developers is a different mindset. You need to reason about this long-term stability of your project. So if there is a problem and you don't know how to solve or what to do...

I've recently been very, very -- I am in a fork frenzy. A lot of the time I like a module, but maybe I don't necessarily agree on some of the choices of the maintainers, and I just say \*bleep\* it. Fix it, make it my own, and that's it.

**Jerod Santo:** Fair. Well, that leads us to our next one. We could definitely do a whole episode on this topic... And our next pillar actually is on the same topic, which is de-risk your dependencies. So Matteo, you're kind of talking about dependency risk... You fork it and maintain it yourself...

**Matteo Collina:** Yup.

**Jerod Santo:** Larger the dependency, I think larger the risk. There are some things you can look at with regards to bus factors, for instance, like how likely is this to get abandoned... But de-risking your dependencies, Natalia - this is pillar number six. Speak to that point.

**Natalia Venditto:** In enterprise specifically, I think that one of the suggestions or things we would like to encourage stakeholders to do is to get more people involved in open source. Because you cannot understand the risks of using code that you are not involved with. So if you're using XYZ, or you decide you're going to be using XYZ module, go and investigate about it, get involved; understand the activity in that repo, and understand the security concerns that people may have brought forward for certain choices, design choices, architecture choices... And that's one way of de-risking. And the other one is making sure that you understand that codebase that you're integrating. Because you are going to have to debug it, you're going to have to maybe make the decision of patching something on your end. And if you have to do that, you probably want to contribute back upstream, right? So everybody benefits from whatever you have solved, whatever problems you have solved.

\[16:22\] But yes, definitely, getting to know the code that you're going to use is a -- and then keeping an eye, again, on the ecosystem at large, because whatever vulnerability you're going to have in a dependency, it might be a vector to access other parts of your application.

**Matteo Collina:** Let me make a very simple example here. As all of you know, Express has been rebooted; the project had a change in leadership. And one of the things that the new leadership did as soon as it got on the driving seat was to publish a flurry of CVEs. Now, a lot of people have known of those CVEs or those vulnerabilities for a long time... And what was the problem? Well, because the project was not in a good position. So this is one of the important things to look at. Is the project well maintained? \[unintelligible 00:17:23.05\] Tools can help you a lot tools. I'm talking about tools, but tools is the minimum. You need to go do more than the tools. Tools help, but tools help after the problem happened. Tools are like "Bam!" And this is the famous meme of the duct tape.

**Jerod Santo:** Slap it on there.

**Matteo Collina:** Slap it on there. But you need to look at the problems beforehand, most of the time.

**Jerod Santo:** Yeah, to add to Natalia's statement around getting to know the code, and to de-risk, get to know the maintainers - get to know the team behind the thing. Hop in their issues and say hi, or just read about the reasons for their motivations, who they are, why they built it... Some people will just put their intentions, "I plan on maintaining this for the next 10 years", or "This was me scratching my own itch. It's free for you to use, but I'm done with it." Those kinds of things are very useful to know in order to de-risk. So get to know the code, but also get to know the team or the individual. You don't have to have be on a nickname basis with them, like Matteo and I are, for instance, my Fastify maintainer. But I know the team behind Fastify, and that gives me confidence in the project.

**Break**: \[18:45\]

**Jerod Santo:** Another good pillar of many applications... Number seven, "Avoid global variables, configs or singletons." Now, this was yelled at me very loud by my university professors, and I didn't really know why, but they're like "Globals are evil. Globals are evil." And I was like "Okay, I won't use them." And here we are, years and years and years later, and y'all are saying, "Don't use globals, or avoid them." Why, why, why, why, why? They're so handy. They're so useful. They're so easy. Who wants to take that one?

**Natalia Venditto:** Go ahead, Matteo, since you're hitting yourself...

**Jerod Santo:** Matteo's hitting something on his head as I talk.

**Matteo Collina:** I am literally like -- this is insane. The amount of JavaScript applications on Node.js that are full of globals, the \[unintelligible 00:22:25.07\] through how the system back and forth, without any possible control of how the project is booted, and setup, and so on and so forth - it's everywhere. A codebase becomes an absolute mess in no time, because "Oh, I need some data that's parked somewhere... Oh, I just export it from my module, and then require it somewhere else. Job done." And then, I don't know, 10,000 iteration later, the codebase is unmaintainable. And now it's a problem of Node, and Node that makes all the problems, and therefore you need whatever else to fix it, and move it from JavaScript to TypeScript, or something like that. But the reality is you probably did not apply any structure to your code.

This comes from the history of JavaScript. In the browser, we can use globals. One user, one global. Okay, fine. I can \[unintelligible 00:23:32.08\] Probably not, okay? And then in order to support this pattern, we had to invent all sorts of things to make it feasible for users to use globals without having actual globals, so they can have a nice DX, and a nice DX is called having globals now, for some frameworks... But the reality is we have a lot of async local storage magic behind it to make it happen. Popular framework \[unintelligible 00:24:01.28\] if you want the headers of a request, you can just call the headers function exported from a module, and you'll get the headers. Fantastic, right? To make that happen, there is a lot of state being handled behind the scene, so the right requests get the right headers. And it's a lot of complexity behind it, a lot of performance that's being lost by providing this kind of developer experience... Mostly because developers love globals.

**Jerod Santo:** \[laughs\] Yeah, we do. We really do. Well, they're so convenient.

**Matteo Collina:** If you want to avoid this kind of stuff, don't do it. The other problem is NODE\_ENV=production. This is another one of mine... I don't know, Natalia, do you want to talk to talk a little bit about this disaster? NODE\_ENV=production.

**Jerod Santo:** Say more, Natalia.

**Natalia Venditto:** I think that you were very good at explaining why NODE\_ENV shouldn't be used, and I would like you to elaborate on that. But one thing that I really like that you made a distinction about was the use of globals in the browser, the use of globals in Node.js, in the server. That's two different stories, and we've seen a lot of overengineering on the browser side to manage state, which I don't want to talk about, because I'm going to -- but that's for another chapter, right Jerod? Another episode.

**Jerod Santo:** Yes, exactly.

**Natalia Venditto:** But it's very, very important to not pollute -- to understand scopes. Before you start writing JavaScript. And I got a lot of also people angry at me for saying that before you learn frameworks, try to learn those mechanics of JavaScript.

**Jerod Santo:** Yeah. Well, Matteo said something very interesting, which is I think how we get into this mess... Is that what works in the small does not work in the large. And what he said was "a thousand iterations later", or something like that, where it's like, when you started, it made sense in that small little "This is just a single file. I'm just running a little Node server. I'll have a global for my database. It'll be fine." And it is fine at that scale of code.

\[26:16\] And then we take that and we just like one by one add to it, add to it, and we kind of grow these organic applications out of a single file... And a thousand iterations later you have a huge mess on your hands, and you did not think about the structure ahead of time when it was small, and it comes back to bite you. And of course, blame the runtime is what Matteo said, but... I mean, it happens a lot. It happens a lot. And so how do we avoid it? Well, you have to kind of know what your app is going to turn into eventually, and maybe add some structure up top, or just avoid them altogether, or set NODE\_ENV=production at all times. This is what this document says, Matteo. Why?

**Matteo Collina:** Well, the NODE\_ENV=production is one of the biggest example of this pattern failing spectacularly. Some time ago, a long time ago, a friend of mine, Tim Caswell, decided to add the NODE\_ENV environment variable to a library called Connect. I don't know if you were doing JavaScript when doing Node with Connect.

**Jerod Santo:** I remember Connect, and I know Tim. We've had him on the show. But lots of people probably don't, so feel free to fill in the gaps.

**Matteo Collina:** Ah, it's fine. So Connect was the predecessor of Express, very early days. By the way, Tim Caswell - hi. You did a fantastic job.

**Jerod Santo:** He's awesome.

**Matteo Collina:** You did a fantastic job for the community. So I'm sorry to put you on the spot for this thing. But he had this idea of "We need to have this library make some different choices between the development environment and the production environment." Which makes an absolute -- it's a great idea. We need that. We need that in all our code. Any app these days has a development mode, and a production mode. This is great. The idea is great. Then something horrible happened. A few people thought "Oh, but that's an environment. So I can add a staging environment, and have the configuration of my database be selected by that same variable." And that's the disaster happening, because the ops people think that the environment is a server running somewhere. The JavaScript people think that the environment is my computer. And it's basically a big language barrier, a big language problem of an overlap of two terms with two completely different meanings.

**Jerod Santo:** So to resolve that, you just set to production at all times...

**Matteo Collina:** Everywhere. Yes.

**Jerod Santo:** ...and don't use it.

**Matteo Collina:** Yes. And there is a specific module called, I think, Config, that uses that library. Don't use that module, please, guys.

You would put yourself into big trouble. There's a lot of people using it, by the way.

**Jerod Santo:** How then do you go about achieving the same goals of like "Well, it's different in dev than it is out there in the real world"?

**Matteo Collina:** Oh, you can use whatever you want, really. You can even use NODE\_ENV with that specific meaning. But then you have two meanings. It's either dev, or production. There is no staging.

**Jerod Santo:** Okay.

**Matteo Collina:** Because then your staging makes nothing. Okay? Because a lot of libraries in the ecosystem will react to that specific environment. They will react in that specific environment specifically. And if you don't set it, you will get very different results. So you need to always set it for your final -- when you are deploying on a server, that needs to be always set, even if it's your staging environment.

**Jerod Santo:** Yes.

**Matteo Collina:** Otherwise your staging environment is not equal to your production environment, and then you are in trouble.

**Jerod Santo:** I've actually fallen into that exact trap, where I had a staging environment, but I had to set the environment to production in staging in order to get it to look like production. I can't set it to staging, because things don't work. So I can feel what you're saying. I've felt it, and I agree with it.

\[29:59\] Singletons - same story, different thing. So pretty much the same. I think we can skip that one. Let's move on entirely, lest we don't get to all nine, and I become a liar. Number eight, "Handle errors and provide meaningful logs." This just sounds like "Breathe, eat food, put one foot in front of the other..." But sometimes we have to state the obvious, and oftentimes as devs we're in a hurry. We have things to do, features to ship, and we have a propensity, I'll admit it, to be a little bit lazy sometimes. And that error is not going to happen very often... What's the big deal? Natalia, do you want to kick off on this topic? "Handle errors and provide meaningful logs."

**Natalia Venditto:** Even if the error happens once, that's it, right?

**Jerod Santo:** \[laughs\] Just once...

**Natalia Venditto:** Yeah, just once. I think we are not good sometimes at handling errors all the way from the database, the API, and the application. So we should start there, very low-level, and go up. And of course, you need to create meaningful logs in order to simplify your life at the time of debugging, but also because we're building applications that are going to interact with users, right? And you also want to pass that to the client and make sure that everyone understands what's going on at all times. It's essential. Error handling is, like you said, like breathing for developers. It should come naturally. It should be top of mind, and never a second thought.

**Jerod Santo:** It's certainly part of your application. I'm not too big of a person to admit that I've just punted on errors plenty of times throughout my 20-plus years of coding. Most of the time when I don't do something with the error, it's because I just don't know what to do. I'm just like "What am I going to do if this actually is an error?" I don't know, console.log error, and move on. Matteo, do you have advice on error handling? I guess it's very contextual, so maybe you can't give generic advice... But have you ever come across a situation and you're like "I don't know if it's errors here"? What do we do?

**Matteo Collina:** The biggest problem is knowing that somebody will catch your errors. Especially with long promise chains and long async await, you need to know there is somebody at the end catching your things.

**Jerod Santo:** Holding the bag.

**Matteo Collina:** Pretty much. The other point is implementing a graceful shutdown pattern. It's very important for your application, most of the time, unless you specifically don't want to do that. But I will not get into that case. So when an error happens, and is not caught, it will crash your system. It will crash your Node server. Now, what you want to do - you want to try to land as gracefully as possible, which means typically stop accepting new connections, stop accepting new requests, process what you have in flight, and then --

**Natalia Venditto:** Exit.

**Matteo Collina:** And then exit.

**Jerod Santo:** \[laughs\]

**Matteo Collina:** Otherwise, if you have 10 connections running at the same time and you cut them, they will not get anything in their hands. So that's typically the problem. A lot of people solve this problem by saying "Oh, I'm just running Node.js in my Lambda, and I fixed it." Well, they pay for it, but yes. That's a fix. But otherwise, you probably want Close with Grace.

**Jerod Santo:** Do you see that often, this lack of graceful exit out there, and --

**Matteo Collina:** All the time.

**Jerod Santo:** Really?

**Matteo Collina:** Or implemented incorrectly, which means all the time.

**Jerod Santo:** Okay. Is it hard? It seems like ChatGPT can do that for you.

**Matteo Collina:** ChatGPT cannot do that for you.

**Jerod Santo:** No?

**Matteo Collina:** No, it's not good enough.

**Jerod Santo:** Okay, what's good enough?

**Matteo Collina:** There is a module linked. So read the document. I wrote a module, but there are a few that are identical. If you use the module, then you're good. But there is a few edge cases that you need to keep into your head when doing these things, and played well with, I don't know, with Kubernetes and a lot of the other ecosystems like that.

**Jerod Santo:** \[34:09\] Alright. So the moral of the story here is npm install Close with Grace. Is that the module you're talking about? Close with Grace?

**Matteo Collina:** Yeah. That's the one that I wrote. Yeah.

**Jerod Santo:** There you go. One more dependency ain't going to hurt you. Go ahead.

**Natalia Venditto:** This is a good one. This is one that we allow.

**Jerod Santo:** Okay. You also have a subsection here about what to log. Do you want to get into that? Because sometimes you're logging too much, sometimes you're logging not enough, there's log levels... It gets very detailed, but I'm not sure if we want to open that can of worms here on the show. What do you think? Read the document...

**Natalia Venditto:** Yeah.

**Matteo Collina:** Read the document.

**Jerod Santo:** \[laughs\] Read the document. Let's move on... Pillar number nine, "Use API specifications and automatically generate clients." This is a very opinionated one, because you know, automatically-generated clients can be not so awesome at times. But what if you don't like the API spec? What API spec should I use? Why can't I just hand roll a thing? It's all JSON anyways... Who wants to pick this one up? Because I think I agree with you, but I can see myself skipping this one in my own applications.

**Natalia Venditto:** Do you work alone all the time? Because I don't --

**Jerod Santo:** Yes. I skip a lot of ceremony, because I do. So yeah, I'm not your target audience, because this is for enterprise apps... So fair.

**Natalia Venditto:** Yeah. You need contracts. How else are you going to agree on what the shape looks like of your API? There is none.

**Jerod Santo:** That's true. So don't listen to anything I say. I'm coming from the indie side. Go ahead, tell us - you need contracts, you need to have an agreement on what it's going to say... And I'm assuming -- and you don't want to have to just invent that every time.

**Natalia Venditto:** Right. And you want to be consistent across your many APIs. You want to use the same patterns, you want to use the same exceptions, you want to make sure that anybody that comes to work with you will understand right away how to create that connection server-client, or server-server, or whatever.

**Jerod Santo:** So how do I pick a spec? There's OpenAPI, there's GraphQL...

**Natalia Venditto:** For me it's OpenAPI, but I think this is something we don't necessarily agree with, Matteo...

**Matteo Collina:** We might be in agreement, but yeah.

**Jerod Santo:** Let's hear it.

**Natalia Venditto:** Yeah, I'm a RESTful person.

**Jerod Santo:** Natalia says OpenAPI.

**Natalia Venditto:** Yeah.

**Matteo Collina:** I say OpenAPI.

**Jerod Santo:** Oh, look at that!

**Matteo Collina:** What do you say, Jerod?

**Jerod Santo:** I want to say GraphQL. No, just kidding. I just wanted to have some disagreement on the show.

**Matteo Collina:** Oh, I like GraphQL. I like both, to be honest. It really depends on the application. If you can't really -- just use something.

**Jerod Santo:** Just use something, and then auto-generate the client. So what do we use on that side? I think there's probably proprietary solutions, there's probably lots of ways you can get that done.

**Natalia Venditto:** I have a maybe biased opinion, but we are working on an open source generator, emitter, API shapes thing at Microsoft. It's called TypeSpec. It's a tool to define API specs, and generating code.

**Jerod Santo:** Is it out there?

**Natalia Venditto:** Yeah. TypeSpec.io. Actually, I'm going to be speaking about it at an upcoming conference, TypeScript Paris. So yeah, we're just rolling it out.

**Jerod Santo:** Cool. I'll scoop that one up for the show notes as well. TypeSpec.io. Matteo, do you sign off on this? Do you use something else?

**Matteo Collina:** To be honest, it's on my to-do list to play with that. I am more of an OpenAPI fan generically, mostly because it comes \[unintelligible 00:37:40.02\] JSON schema, and it's all integrated well and nice... I also really like GraphQL too, depending on what we need to do as part of an application, and what the use case is. So there are certain things that are better spec'd as GraphQL. If you don't know how the data will be queried, probably GraphQL is the right choice...

\[38:04\] If you have a variety of different clients, and teams are disconnected with each other. Otherwise OpenAPI is actually pretty good. So it depends on the company, on the use case, it depends on the business... There's no one-size-fits-all in that discussion. Just use something.

At some point I was chatting, and every single time, because of the process that they had and the boilerplate that they needed to do, they needed to add one more API call from the consumer front, from a company I was consulting with. It took them four hours.

**Natalia Venditto:** Wow.

**Matteo Collina:** Like, it's literally money burned. You're literally burning money. And it's like, this is something that a computer should do. Maybe even ChatGPT is a good generator. I have no clue. Going to the point of, if I need to unroll it, I'd probably try to ChatGPT it, because it seems a lot of work to -- a lot of busy work. I'm not delivering anything of value at that point.

**Natalia Venditto:** Yeah, I don't want to hijack the conversation of the pillars, but we also wrote them because, working in enterprise, you understand how this is something that stakeholders, like economic buyers, the ones approving the time of developers need to understand. Because sometimes developers go and say "I need XYZ time, because I need to write the specification, because I need to write error handling", and so on. And they're like "No, no, no, no. You just need to get the feature done and roll it out." And no, because that's going to cost you more money. You're going to be -- you have the idea that you're going to be faster in the market, but then you're going to have to solve a lot of problems that you didn't want to deal with at the design specification and architecture decisions phase... Which is a big, big error.

**Jerod Santo:** Yeah. It goes back to a saying I've been repeating for years now, which is "Slow down to go faster." And it's difficult to get that across, but it's 100% the way to do software, is "Slow down to go faster."

Well, let's go faster. Now, we've reached the end. There's one more generic one, but I'm going to save it for the very last, because we don't want our listeners to fall asleep on us talking about testing, and stuff.

**Break**: \[40:24\]

**Jerod Santo:** Let's go back now to what I'll call the Node-specific ones, although maybe not necessarily Node-specific, but more Node-specific. Back at the top, number one, "Do not block the event loop." Of course, other things have event loops, but Node certainly does as well... Yeah, this seems like a good one to put in number one. So who wants to kick off on this topic?

**Matteo Collina:** Well, do not block the event loop. It's one of my favorite; it can be a catchphrase, okay?

**Jerod Santo:** Yeah.

**Matteo Collina:** Most people do not realize how the event loop works, and that's the reason why it's number one, to be honest. When your code is executing, you're not doing any IO. That's the key part of the event loop, and people don't understand that. And they don't think that that is a problem. So they don't think that, I don't know, if something takes 50 milliseconds of CPU time to get done, they think, "Oh, it's pretty fast. It loads super-fast on my machine. How come it's super-slow in production?" Because 50 milliseconds is a small number, right? You can perceive it locally. However, on a server, 50 milliseconds means that you can do 20 requests per second on a single machine. Now, is 20 requests on a single machine fast or slow?

**Jerod Santo:** Slow.

**Matteo Collina:** And that's the point. But if I try locally, "Oh, it's 50 milliseconds. It's super-fast." I was in a few of those debates. And then that's a major problem. How you can solve it, do it - there's a lot of tricks and they're listed there. But the generic part is be aware that that's a problem. And if you think that most of the time the solution to your performance issue is the most obvious one, you have architected your application wrong, and you need to rethink your system so that it does not block the event loop.

**Jerod Santo:** Natalia, anything to add?

**Natalia Venditto:** Yeah, I agree with Matteo, and I think that there are several people trying to educate the community on how the event loop works, because it's so essential to write everything in JavaScript, understanding how - and in Node.js, of course - the stack works, and how things move forward, or get stuck, and why, and how to make sure you're not causing those blocks. But yeah, essentially also my favorite one...

**Jerod Santo:** Is there low-hanging fruit in terms of the how? I know the doc has the details, but is there like a common thing that people are always doing? Or is it just not understanding the event loop itself is the common thing?

**Natalia Venditto:** Not understanding how it works is a common thing.

**Jerod Santo:** Alright. Well, get out there, folks, and understand the event loop, and you will save yourself a lot of pain.

**Matteo Collina:** This might also be that because you understand your event loop, you might make different choices in the libraries that you're going to use. Because most of the time the problem is in your choices. You make choices, you thought something that was very good according to some parameter, then you learn something else, and then you say "Ouch, maybe I made a mistake." Okay. Well, at least you know now.

**Natalia Venditto:** And you can fix it.

**Jerod Santo:** That goes to one of your bullet points there in terms of things you can do is monitor event loop utilization, and you point out a few tools you can use in order to understand. If you have no event loop problems currently and you pull in a dependency and now you have event loop problems, that's a pretty clear reaction to that. And if you're monitoring that, then at least you can see when that thing explodes and/or slows down.

**Natalia Venditto:** Yeah, Matteo, I think you had suggested some tools?

**Matteo Collina:** We are moving essentially to pillar number two, which is a good segue. "Monitor Node-specific metrics and act on them." The biggest number -- like, very often I'm still called to "Can you do a consulting for me? My node.js process keeps crashing" or "I'm having poor performance", or whatever. Well, what are you using to monitor and evaluate the performance of your system? "Well, I'm using generic metrics provided by Kubernetes." Well, you're trying to make choices of your road with a blindfold. So what do you expect? You crash. You try to drive with a blindfold. You're looking at the wrong things. You're literally not watching what you need to be watching.

\[46:24\] And that's essentially what this principle is about. Specifically, with the event loop. If you have a Node.js application in production, you need to know the health of your event loop, and act on it. If you don't act on it, you're screwed. You have no traffic, and you have no users. And if you have no traffic and no users...

**Natalia Venditto:** Nothing happens.

**Jerod Santo:** \[laughs\] I feel that I built a few websites like that. No traffic and no users... Yeah, I've done that before.

**Natalia Venditto:** No resources used.

**Jerod Santo:** Yeah. Everything's humming along nicely. The load average is really low. What are the key metrics to watch then? What do you care about in a Node app? What are the key metrics?

**Matteo Collina:** Well, I said the event loop utilization is this new method that we added recently. Most people don't know about it. Read, study, guys. It's basically a percentage of the event loop that is processing events. It gives us a very immediate number. Then we want memory. But not RSS. \[unintelligible 00:47:20.10\] Don't use that. That's a horrible metric. You need to keep an eye on that, but to be honest, that's not the important one. The important one is heap use versus heap total. Because Node.js will use all the memory that you give to it. If you take Node, you say "Okay, Node, use one gig." "Yes.

PacMan." Yeah, Natalia. It eats all of it. But then it manages it -- we've seen all of it with Chrome. When you open a lot of Chrome tabs, each one of them consume gigabytes and gigabytes of memory, guys.

**Jerod Santo:** Right.

**Matteo Collina:** It's horrible. Anyway, track how much of that memory is actively used. Track that.

**Jerod Santo:** Gotcha. So when your Node server starts, it is going to allocate for itself a certain amount of memory, and it may be over-allocated by a lot. It could say "I'm using one gigabyte of RAM." No, it's not like that. It's more like you have one gig, you know... Typically, it happens in this way. You have a chunk of your application, you can name it -- a part of the application that allocates a lot of memory. That memory does not get cleaned up very quickly. And then basically the garbage collector of V8 thinks "Well, cleaning this thing up is going to take a lot of time, so I'm going to park it there, and maybe later on, I will have time to clean it up." And then, "No, but there is memory available on the system. It's free. I can just get it." So I'm getting more memory. It's very lazy.

**Jerod Santo:** PacMan.

**Matteo Collina:** And then it eats all. Yeah, PacMan.

**Jerod Santo:** Right.

**Matteo Collina:** It looks like a kid, to some extent, it looks like a teenager that prefers to do something else than cleaning up your \[unintelligible 00:49:10.19\] room.

**Natalia Venditto:** Exactly.

**Jerod Santo:** Right. Get some new clothes out, versus cleaning the ones that are laying on the ground.

**Natalia Venditto:** "It's exhausting to be cleaning up, so I'm going to just use whatever is out there, free for me."

**Jerod Santo:** There you go. So the key there is heap used versus heap total. You're going to get less information out of the resident set size... Which is unfortunately also RSS, but not really simple syndication. Of course, in context it's not confusing, but for us just talking about it, perhaps it is. And of course, like you said, the event loop utilization, that's probably the big one... And then of course, CPU usage; overall processor being used, right? Typical stuff there.

Alright, let's move on to pillar number three. "Use Node LTS, long-term support, versions in production." This one seems to me as the most enterprisy of them all. But Natalia has got the face palm going, so I'm thinking people should just do this and --

**Natalia Venditto:** \[50:15\] Yeah, I have seen so many instances of - you know, you're analyzing an app that is not working, and then you go and check what version of Node they're using it. Of course, 15, 17, 19... But why?

**Jerod Santo:** "But why...?" Well, I can answer that. Because that new one had something fancy in it that I wanted to use, right?

**Natalia Venditto:** Right. But not in production, right? Until it's released in LTS.

**Jerod Santo:** So what does LTS give us over non-LTS, for those who don't know how Node gets released?

**Natalia Venditto:** Well, first of all, they recycle their long-term support... Which is 18 months right now, Matteo?

**Matteo Collina:** The current version is six months. Then it's supported for another two and a half years after that.

**Natalia Venditto:** Oh, two and a half years. Okay. Yes.

**Jerod Santo:** So three total years?

**Matteo Collina:** Yeah, three total years. Yeah. But it only gets 12 months out of that as active LTS, which means it gets back parts of new features, and things. It's great.

**Jerod Santo:** And non-LTS gets something - I think you wrote seven months?

**Matteo Collina:** Six months. Seven months. Seven months. One month is - I will call it six months, but yeah, seven months.

**Natalia Venditto:** Why is it a month? That's so arbitrary.

**Matteo Collina:** Because it's six months plus one month of grace time in which we also fix security vulnerabilities.

**Natalia Venditto:** Okay.

**Jerod Santo:** For the slow folks.

**Matteo Collina:** Yes, for the slow folks. But to be honest, I would just cut it. I would actually remove that. If I had an axe, I would axe it.

**Jerod Santo:** Yes. If you were the Node release --

**Matteo Collina:** I'm not. I don't do Node releases.

**Jerod Santo:** ...BDFL, or something. You would just axe that. But you are not.

**Matteo Collina:** Yup.

**Jerod Santo:** Alright, so LTS, longer support... You get benefits like reduced risk of breaking changes, enhanced security, improved stability... And Natalia just says, "Why not? Why not just use that one and get all the goodness in production, versus the six or seven-month one?" Six months with Matteo in charge.

**Natalia Venditto:** And there's also people that use LTS, but they use it for 10 years, right? And so they are on version 10 now... Don't do that.

**Jerod Santo:** Don't do that.

**Natalia Venditto:** Keep your versions up to date.

**Jerod Santo:** There you go. Now, how is Node with backwards compat? Like, as I get newer versions, am I breaking major changes all the time? Is it a huge pain in the butt to upgrade? What's your guys' experience there?

**Matteo Collina:** I maintain the thing, so I can't, to be honest... We try not to break anyone most of the time.

**Jerod Santo:** You're too close to it to answer that.

**Matteo Collina:** I am too close to it to answer that question. So I hope not, but if we do, we are sorry.

**Natalia Venditto:** You need to consider there's going to be a point when you cannot offer backwards compatibility, because otherwise you would never introduce any innovation, any changes in the specification. Like, how do you do that? There is no way, right? You have to. It's one thing or the other.

**Jerod Santo:** You want to innovate. You want to change. You want to --

**Matteo Collina:** That's the problem.

**Jerod Santo:** ...get that TypeScript support in there, you know?

**Matteo Collina:** Yeah, but that's not breaking.

**Natalia Venditto:** No.

**Jerod Santo:** No.

**Natalia Venditto:** It's not breaking because you don't use it. Because you use a flag not to use this, right?

**Jerod Santo:** That's right. It's opt-in, so it's not breaking.

**Matteo Collina:** I've been a laggard on the TypeScript team group, so...

**Jerod Santo:** That felt like a personal dig against you, Matteo.

**Matteo Collina:** Oh, yeah. She absolutely knows how to dig it.

**Natalia Venditto:** I am JavaScript all the way, so...

**Matteo Collina:** She's poking the finger at me on the TypeScript stuff... She's Microsoft, so come on... What can you expect?

**Natalia Venditto:** No, no, but I am JavaScript. I own a JavaScript site.

**Jerod Santo:** \[54:02\] Oh, you are? Alright. Well, we have three JavaScript users here. I'm also not on team TypeScript, but mostly because my co-host, who's not here, Nick Nisi, is the biggest TypeScript fanboy you could possibly imagine. And so we can't have that much agreement on the pod, so I just refuse to use it for that principled stance, pretty much only. And the fact that I don't like ceremony. And like I said earlier, I'm kind of an indie dev, so I don't need all of the hunky-dory team-oriented things, you know? Which leads us to our last pillar, which is also generic, but I left it for last, because it's like eating your broccoli. Although, general tip on broccoli, if you don't like it, actually eat it first, because when it's cold, it's even worse. When it's warm, at least... So here we are. "Automate testing, code review, and conformance." Oh, that's three pieces of broccoli. Why? Why do I have to do it? Can't we just skip that one, Matteo? Test in production.

**Matteo Collina:** YOLO.

**Jerod Santo:** \[laughs\] That's right. That's right.

**Matteo Collina:** If you care about your job, don't do that. That's a good genetic principle of life.

**Jerod Santo:** Yeah, I agree. If you care about your body, you eat the broccoli, right? So I hear. It's good for you. Natalia, what's your take on --

**Natalia Venditto:** You don't have to love it, but you have to do it.

**Jerod Santo:** You don't have to love it, but you have to eat it.

**Natalia Venditto:** Yeah. I don't love it. I am the person that always finds somebody else to write the tests. Because I don't love the broccoli... But you have to do it, and that's it. There is no way around it.

**Jerod Santo:** What's the conformance part of this? Code review, I understand. Testing, I understand. Conformance...?

**Natalia Venditto:** Oh, you need to have standards. You need to have --

**Jerod Santo:** You're talking about linting, and stuff like this?

**Natalia Venditto:** Well, yes, but also, you have to have conventions. So yeah, you need to have conventions, you need to have standards. I mean, internal standards to your company, that you agree to, that put everyone on the same page on how we're going to do this, how we're going to write this, how we're going to understand each other when we're writing code, and reviewing it.

**Jerod Santo:** Gotcha.

**Natalia Venditto:** How can you review something if you don't know what's right and what's wrong?

**Jerod Santo:** And this is the world of tooling, right? Tools help a lot with this. Otherwise, it would be like a bunch of nitpicky code reviews of saying "Hey, we don't put our semicolons there", or whatever. So like linters, style guides, Prettier etc. Also probably some bigger architectural documents where you decide "Here's how we're going to -- we're not going to use singletons. We're going to read the Nine Node Pillars", stuff like that.

**Natalia Venditto:** Yeah, "We're not going to block the event loop."

**Jerod Santo:** "We're not going to block the event loop." You have some sort of chant that the whole team does at their stand up, right? "We will not block the event loop", like Bart Simpson writing it a hundred times on the chalkboard.

**Natalia Venditto:** Exactly.

**Jerod Santo:** Alright, so that brings us to the end of the nine pillars. I thought we did a pretty good job of covering all those. Of course, the details are what matter, and they are in the docs. We didn't want to just read the doc to you all, we wanted to talk about it... What about pillars that didn't quite make it? I'm sure -- this is a collaborative process. I know you went from four or five up to nine, but certainly there was like a 10th and 11th and a 12th there, like "We're not putting that in there, but that's still good advice." Have you got anything left on the editing room floor that is still worth bringing up?

**Natalia Venditto:** Very opinionated ones. I think "Use TypeScript" could be a pillar, in a sense. But do you want to? Do you want to make people angry? Even yourself? No. We said "Use LTS", but we didn't say "Please don't use very old versions of Node.js", which should be a pillar. But that's common sense, right? We hope.

**Jerod Santo:** Right.

**Matteo Collina:** \[58:03\] On TypeScript, I want to be provocative... I really like -- I came to enjoy the experience of writing TypeScript when working with a team and building an application. I absolutely think that the authorship story, from a maintainer perspective, or somebody that's maintaining a lot of modules on npm - it's so much better with JavaScript and writing the types manually, that it's just like "Okay, I'm probably not doing that." Like, the authorship story - it's so hard. It makes maintaining this thing so much harder.

I can maintain a lot of the modules I maintain because I just pull JavaScript that's super-easy to maintain; not a lot of tool chain. But yeah, that's probably my -- if I wanted to put it as an advice... So TypeScript requires a lot of tooling around it to make it usable. And that's -- it gives you a lot of benefits. So that's true. But if a maintainer with very little time, optimizing for time consumed, is very often...

**Jerod Santo:** Have you looked into JSR? The Deno folks' new registry. They're trying to make it super-easy to publish TypeScript packages without --

**Matteo Collina:** It's a great step into the right direction, I think. That means less TypeScript options, and less variability in the tooling, and so on and so forth. It's a great step. We have a few Node messes to deal with at the moment, unfortunately.

**Natalia Venditto:** I have a controversial opinion. I mean, it's great for library authors, for dependency authors... But in your application you still need to transpile, right? So you still need the tooling, if you're an application author.

**Jerod Santo:** Absolutely. Right. Yeah, I think the sales pitch currently is on package authors, is two package authors more than your regular app dev, who still, like you said, yes, has the build tools anyways. Very cool. We've come to the end. Anything left unsaid? Anything you guys want to shout out or link to in the show notes, how to connect to you? Of course, Platformatic is where you'll find the blog posts... You'll also find it in our show notes... But anything else?

**Matteo Collina:** I want to thank also the other two authors of this.

**Jerod Santo:** Oh, yes.

**Matteo Collina:** Michael Dawson and James Snell. Everybody reviewed this, wrote part of it... It's been a good collaborative effort. Yeah, that's probably my take. I want to make a key part, something very important that was not said - there's been a clear movement there on supporting the maintainers financially. This is very important. There's been very recently something called the Open Source Pledge. I want to recommend major companies to contribute either developer time, or money, to the maintainers of the commons. It doesn't mean joining the pledge, but you need essentially -- everything uses a lot of open source. And if you have a critical piece of open source that you rely on, sending some money to the maintainers usually helps them a lot. Or even just give them a job and an opportunity to do that work as part of your team.

Now, that last part is more important, because a lot of big companies do not consider public open source as part of their promo packs, which is a huge, huge problem for a lot of people that want to do this kind of good open source work. "Look, I'm doing all this work, but this is not getting me any benefits at my job. So why the heck am I doing it?" And at some point you get burned out and it goes all bad. So that's probably my last take...

**Jerod Santo:** Gotcha.

**Matteo Collina:** So please consider, sponsor, help, see how you can make the life of your maintainers easier, and not try to be vampires and sucking the blood out of them and burn them out.

**Jerod Santo:** Well said. Natalia, any final words from you?

**Natalia Venditto:** Yeah, no. I'll second that pledge from Matteo. And also, get involved. Get involved in open source. As a developer, it's very, very rewarding.

**Jerod Santo:** Well said. Well, on behalf of Matteo Collina and Natalia Venditto, thank you for listening to this episode of JSParty. All the links to all the things are in your show notes. Shout-out also to the other collabs on the doc. I think it's an excellent resource for the entire community. Thank you all for writing that.

I'm Jerod, this is JSParty, and we'll talk to you all on the next one.

**Natalia Venditto:** Bye-bye!

**Matteo Collina:** Bye-bye...!
