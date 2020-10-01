**Jerod Santo:** Hello, and welcome to JS Party. We have an excellent show for you today. We talk about frameworks a lot, we talk about technologies, and sometimes we talk about them in the abstract, or we have our toy apps, or our weekend projects, but it's not every day that we get to see and talk to some folks who are using a framework which is definitely on the upside of the hype cycle in a brand new production business - like, they're betting the business, to a certain degree, on Svelte. So today I'm joined by the creators of Pace.dev, David Hernandez, and Mat Ryer, whose voice you may be familiar with if you listen to our sister podcast, the not-quite-as-good-but-still-okay Go Time. Guys, thanks for joining me.

**Mat Ryer:** Great to be here. Thank you.

**David Hernandez:** Thank you. Yeah, great to be here.

**Jerod Santo:** How does it feel on the good side of the Force? It's kind of like your Kylo Ren moment. You're used to the dark side, but you've been drawn. You've been drawn by the JavaScript to the light side.

**Mat Ryer:** Yeah... We're used to static types, and things, so this feels now like anything could happen.

**Jerod Santo:** That's right.

**Mat Ryer:** You know, there's no rules.

**Jerod Santo:** It's exciting, isn't it?

**Mat Ryer:** \[laughs\] Yeah, it is exciting.

**Jerod Santo:** So we're here to talk about Pace, we're here to talk about Svelte, and the first thing that I would like to know is how you go about making these kinds of decisions. So you've decided to pick Svelte for the frontend, and I'm sure you're doing Go for the backend... Give the quick understanding of what Pace is. We don't need to go deep into Pace yet, but then tell us how you went ahead and chose Svelte as your tool du jour.

**Mat Ryer:** Well, Pace is a project management tool, and we're trying to do it in a very minimalist user experience... So the user experience was kind of vital, really, for us. We wanted to make sure it was a beautiful experience, and also easy to use and hard to abuse, and these kinds of things. So we knew that we couldn't just render static things on the server and serve them to the frontend. We wanted them to be more immediate than that, and we wanted tighter feedback loops for users and things. So we knew there was gonna be some rich element to it in the frontend... And we started looking at Vue, didn't we, David?

**David Hernandez:** \[00:04:16.05\] Yeah, at the beginning we were doing a little prototype with Vue. We'd been doing it for a while, like more than 2-3 weeks doing it, isn't it? But at some point we didn't enjoy it. It was a little bit cumbersome. It basically didn't feel right. We liked the component side, the thing that React started, with three layers in the same file, like the JavaScript, the HTML and the CSS in the same place... But dependencies and state management was a problem. We basically didn't enjoy it, we didn't feel it was right; we were struggling, the learning curve was a little bit high... So we were evaluating new things. I don't know how Svelte came in, to be honest. It was a tweet, or we just googled it, or whatever, but we just said "Oh, we should try it."

**Jerod Santo:** Yeah. Mat, do you remember how Svelte came in? Was it a tweet, was it a...?

**Mat Ryer:** I don't remember, but I know that when we were researching it, Svelte stood out because of its minimalism. It makes the point that these frameworks actually -- they're very powerful. Vue is very powerful, React - they're extremely powerful. But you really have to put a lot of effort in, I think, to learn it, in order to be effective in it. So like state management, and other kinds of common problems, probably have really nice solutions, but they weren't very accessible to us. And since we're kind of doing the whole stack, it mattered that we could get up and running quickly.

**Jerod Santo:** Yeah.

**Mat Ryer:** So I remember Svelte's minimalism, and they sort of made the point that it doesn't do all the things that other frameworks will do. It sort of sticks to the basics. And that resonated with us, especially with Go, because Go has that same kind of attitude; it tries not to offer every possible language feature. In fact, the language features are relatively small in Go. But what it does, it does really well, and it's easy to pick up and get running with. So that was important for us, since we had to do all the work.

**Jerod Santo:** And it's nice, because the two of you are a team, right? So in terms of team size, a lot of us have a situation where we're interested in technology, we think it's superb, or at least we're curious, we'd like to give it a short, but we have to sell that idea to somebody else. Whether it's upper management, or the CTO, or maybe -- who knows...? You have to get buy-in. And it's that old saying, nobody ever got fired for picking Microsoft. Or was it IBM? I don't know what the saying was, but... At this point, no one's getting fired for saying "Let's use React." It's safe at this point.

Svelte would be a challenge, or potentially a tough sell inside of a larger group, but it's just the two of you. You guys are building this together, so you make your decisions autonomously.

**Mat Ryer:** Yeah, and actually, there's a lot of benefits that come from being such a tiny team. And it was a deliberate thing. We founded Machine Box together in the past, and that was the same kind of situation really, where we were the ones that had to live with our mistakes... So if we make a mistake, it's kind of on us to then fix it. And that's why after a few weeks we essentially gave up on the Vue code that we'd written, to switch to Svelte... So that in some contexts can be quite an expensive thing to do. But for us, tiny team...

**Jerod Santo:** Early days.

**Mat Ryer:** Very early, greenfield project... It's a different story.

**David Hernandez:** Yeah, we didn't try to migrate, we just started again from scratch. It was like "Oh, these three weeks in the frontend..." It wasn't worth it; we just started again from scratch. And Svelte passed really quickly the tests. The two-minute or five-minute test that you \[unintelligible 00:08:03.28\], see if you'd be able to do something useful with it... Svelte passed it very quickly. So yeah, up to that, we fell in love with the framework. We really like it right now.

**Jerod Santo:** \[00:08:16.12\] So how would you describe Pace in terms of an application? Is it an API with a single-page app? Is it server-rendered web pages that you're sprinkling interaction on top? How does that actually all fit together?

**David Hernandez:** Okay, so it's a single-page application on top of our -- it's not a REST API, it's a Go backend in App Engine. We used Google Cloud for most of the infrastructure. We have to communicate server-side/frontend-side. It's \[unintelligible 00:08:44.00\] it's called Oto. It's a way that we can define the interfaces in Go, and generate the JavaScript client or other types of clients. We have the JavaScript client and the Go client automatically generated, so we can just connect with any kind of language, but at the moment we only have that.

Basically, you can type an interface in Go, strongly-typed, and automatically generate the types and the methods to call that interface from JavaScript. That flow is brilliant for us, because it allows us to iterate very quickly, in a safe way.

**Jerod Santo:** That's really great. So you're using TypeScript on the client-side in order to get those types, or are you just using plain old JavaScript?

**David Hernandez:** We wish we could use TypeScript... I don't think it supports very well TypeScript right now. It's something that they are working on for the future. We are keen to migrate when Svelte is supported. Also, when we learned about TypeScript, we were kind of -- both of us knew how to use it... But yeah, it's one thing that we are very keen to migrate. We have a couple of bugs already related with the strong types, and date conversions, and things like that... So we are very keen to migrate to TypeScript if we can. Right now it's just JavaScript... But the thing about client generation in Go - we can easily change the client generation to make some checks. So it makes sure that for example if at development time if you pass a field that the backend doesn't expect, it produces an error in the console. So it's very useful to know in development I didn't refresh my backend, or it stopped the backend and I didn't realize it, things like that - it's quite easy to put it into the client.

**Mat Ryer:** Yeah, and that's another example, that little API layer. We wrote that ourselves. In a team, that would be a hard sell, because of course, you don't want to invest and have to maintain something like that, ideally... And there are solutions that you can use off-the-shelf. But again, it was about the balance between the learning curve of learning one of those things, and also the control you give up whenever you use a framework or another existing technology. That technology already comes with trade-offs that are already pre-made. We wanted to be so iterative, we weren't sure how we were gonna be using things, and what we'd need from this API layer.

So literally, as David said, they're Go interfaces, which are strongly-typed interfaces. We then use templating to generate then code. And that process allows us -- because since we control those templates, it allows us to just do whatever we need to do in the client and in the server. And actually, that's the idea behind the project. It's actually an open source project, and we can put the link to it in the show notes, if you like.

**Jerod Santo:** Yeah, absolutely.

**Mat Ryer:** Yeah, it's nice... But again, that's another decision you probably wouldn't get to make if you were in a team situation, because sometimes we'd reach a barrier; we couldn't do something, and we'd have to go and add a capability to this API layer, the Oto project. But that's okay for us to do that, since we were not only just two of us, but we were also building the entire stack ourselves.

**Jerod Santo:** \[00:12:07.12\] Right. So that generated JavaScript code - do you go ahead and just check that into your repo and it just lives there, or is it generated on the fly during a deploy? How does that work?

**Mat Ryer:** I think it might be both. We do check it in... Do we, David? I don't remember. I know sometimes we do...

**David Hernandez:** Yeah, we check it in. And the same when we change something in the interface definition - we invoke a command to re-generate the client. And the thing is, we check in that client, so if you check out, you're able to just run it... But we have a slightly different version from dep and production. In dep we have some checks to give warnings and other types of errors when you pass a field that the backend didn't inspect it. Or when you \[unintelligible 00:12:52.25\] that the backend inspected, we have that slightly different behavior for development and from production, because in development it's quite useful too to have it, to just iterate quickly and have that feedback loop. And in production, the reason that we don't have it is because if you are actually sending a field that you don't expect and that works, it shouldn't stop the user to be able to perform that operation. So it's more important. But apart from that, they are basically identical; they are all the same.

**Jerod Santo:** Well, that definitely makes refactoring easy later, especially if you can switch to TypeScript; you just change the code that you're generating, re-run the generation, check it back in... You \[unintelligible 00:13:37.06\] which is a beautiful thing.

**David Hernandez:** Yeah, hopefully it will be that easy.

**Jerod Santo:** Hopefully... \[laughs\] It sounds like it'll work.

**Mat Ryer:** Well, somebody already contributed a Rust template to the Oto project... And we're not Rust programmers, so we wouldn't have been able to do that, but somebody's made a Rust client, essentially. It does have that flavor to it. It's quite minimalist. We chose Go because our backend is in Go, and we're familiar with Go. And actually, when it comes to choosing technology, familiarity I think is quite an important aspect to consider.

A lot of people try and sit down and look maybe purely at the performance of different technologies - JSON/Rest vs. gRPC, for example. If it's just a space race on tech, you would say "Well, it's gonna be gRPC, because it's a binary protocol, it's got lots of other streaming features, and all these things... But actually, if the teams never used that technology and the concepts are new, that learning curve is a cost that you have to also consider.

So for us, tech that we enjoy and that we're familiar with - all those things play into it, and they end up being much more important than performance considerations, because of the situation that we're running it in.

**Jerod Santo:** So would you consider this client for Oto that you wrote - is it a Svelte client, is it a JavaScript client? Is it outputting plain old JavaScript objects that Svelte is then consuming, or is it outputting Svelte components?

**Mat Ryer:** No, it's plain JavaScript.

**Jerod Santo:** Okay.

**Mat Ryer:** Svelte is, like most of the frameworks, you import things. There's a build process that happens. One of the things that makes Svelte special, actually, is the work it does at compile-time, which we could talk about in a bit.

**Jerod Santo:** Which we will, yeah.

**Mat Ryer:** Essentially, it's just plain old JavaScript. It uses the fetch API to make calls. It's just HTTP. And it is actually at the moment HTTP in JSON, but it's just a case of tweaking the templates to change that even into something else. So if we wanted to get those messages even smaller, we can do that in the Oto project, and we just then run the latest version we'll generate, and we won't have to touch any of our other code. It'll just work.

**Jerod Santo:** \[00:16:00.03\] Is this a pattern that you two have done previously, maybe at Machine Box or elsewhere? Because you would think in terms of familiarity, something that's more familiar to more people, like the GraphQL API, for example, might be just a simpler choice. You don't have to make all these decisions. But if you've already done it before...

**Mat Ryer:** Yeah, it might be more about control... Because that's the thing - we want to make this thing do exactly what we need it to do... So this is a way to do that, if you write it yourself. I don't necessarily recommend this, actually, as a strategy for teams, or anything.

**Jerod Santo:** Sure.

**Mat Ryer:** But for David and I - I mean, we have got quite a lot of diverse experience between us, from big backend-scale things... I mean, David doesn't like me saying this, but he worked on a project for the Olympics, for the BBC.

**Jerod Santo:** Why doesn't he want you to say that?

**Mat Ryer:** He's a very modest person.

**David Hernandez:** A little bit sometimes, yeah.

**Mat Ryer:** We balance each other out nicely. \[laughter\]

**David Hernandez:** That's the trick!

**Jerod Santo:** There you go.

**Mat Ryer:** But that was like collecting live data at the Olympics, at scale, and distributing it... So that's not an easy thing, and you can't say "Can we just have a quick Olympics before to test out this tech, please?"

**Jerod Santo:** Right.

**Mat Ryer:** He did ask, and they said no.

**Break:** \[00:17:21.03\]

**Jerod Santo:** I would love to hear the user experience of building Pace with Svelte. Give us a feature that's built out that you've done, what it looks like in Svelte. Maybe as a developer and then as an end user of course we have the website; maybe people can go to the website and see that feature... But a lot of these tools is about developer experience, and you want it to stay minimal, you want it to stay tight and lean, and that's what was attractive. Of course, compile-time stuff is a huge attractor for performance; another reason was Svelte simplicity... And you seem to like it, because you're here to talk about it, so tell us what it feels like, what's a practical use that you're doing.

**Mat Ryer:** Yeah, one example that stands out to me is this Grouper control that we made. We have a few places in the app where we show a list of data, and we wanted to group that data by some heading. For example, if it's comments, then if I comment and then David comments, and then I comment, we insert the little avatar each time. If I comment and then I comment and then I comment, there's no need to repeat those avatars each time.

**Jerod Santo:** Right.

**Mat Ryer:** What we wanted was a way to group basically -- and it felt like this was gonna be a difficult thing, and we were even thinking of doing it on the server, initially... And then I think it was just one Saturday morning I was kind of playing around with Svelte, and -- there's nothing unique about Svelte, probably... I think you could do the same thing in other component libraries...

**Jerod Santo:** Sure.

**Mat Ryer:** \[00:19:45.26\] But essentially, we built a control which -- you give it a set of data, an array of data, you give it also a grouping function, and then it essentially calls that function for each item, and if the group is different to the previous one, then it renders the group header, and if not, it doesn't. So it uses what they call slots in Svelte, which is like passing little templates, little bits of markup into a component. So you just say Grouper -- it looks like a normal HTML element; you pass the data in as attributes, and then you create a slot for the group heading, and a slot for each item, and then that's it. It will render that and group it up for you. And if you wanna change how things are grouped, it's just a case of changing the little Grouper function, which is really simple - it takes in the item, and you return the value, wherever that group value is. And it's kind of as simple as that.

That served us quite a few times, actually, in Pace so far... So that was a nice one. Can you think of any others, David?

**David Hernandez:** Yeah, we also have a blog post about that one. So the code of that Grouper is also open source, if anybody wants to check it out. For me, one of my favorite features of Svelte is the use directive. It's a way to interact with other libraries, third-parties, \[unintelligible 00:21:11.10\] in a nice way. When you use use directive - it's called Actions in Svelte, I believe - you put it to an element and you get the note \[unintelligible 00:21:22.05\] but whatever time you update some parameter, it calls that function again. So it's ideal to interact with all the libraries. For example, if you want to use the autocomplete from an old jQuery plugin, or something in UIkit (that we also use), it's perfect, because the lifecycle of that integration is just one function; it's just self-contained, it calls destroy when the node is destroyed, so you can just tear it down quite easily. We use it a lot for many types of features, especially ones where we have to interact with other libraries; it's the perfect use case. We haven't written much about it, isn't it? We probably need to write a little bit more about it. It's a really nice use case.

**Mat Ryer:** Yeah. And to write Actions in Svelte - it's just a function, and it takes in the node and some options, and then what you do is you return another object that has a destroy method or a function, I guess, and also an update in there. So if anything changes, as David said, you can actually run some code and respond to those changes... And Svelte manages the lifecycle for you. So if you navigate away from a page that has that on -- and by the way, this is a single-page application, so you're not really moving pages.

**Jerod Santo:** Right. Client-side routing, and all that.

**Mat Ryer:** Yeah, exactly. If you move to a different page, it will run that code to go and -- whether it's remove listeners, or whatever... In some cases, there's allocation that happens that you have to tidy up after yourself. But what's nice is it's a single function to write an action, and you return the cleanup, which is a pattern that we use in Go a lot, as well... So again, very familiar for us.

**Jerod Santo:** I feel like you might be on a personal journey to say the word Go as many times as you -- did your panelists at Go Time put you up to this, Mat? ...you've just gotta keep saying "Go" on our show as many times as you can? Because you're hitting double-digits here, brother...

**Mat Ryer:** Oh, I'm sorry... I'll try not to mention it again. \[laughter\] Don't bleep it out though, will you?

**Jerod Santo:** Oh, I should...

**Mat Ryer:** Let's bleep it out, yeah.

**Jerod Santo:** Yeah, every time you say it, the curse word.

**Mat Ryer:** It's a swear word.

**Jerod Santo:** Anyways, I cut you off terribly, but you deserve it. I'm just kidding. Keep going.

**Mat Ryer:** That's alright. I know, I did. Yeah, so it's nice that the setup and the teardown is all in one place. If you think about code maintainability, having -- a bit like the reason why we like components... It is you get to bundle things that are meaningful together. So in the same way, yeah, you have a function - it returns the cleanup. So everything's in one place, and if you forget to clean something up, it can kind of see it, because it's in the same file. It's right there, actually... So we really like the way they've done actions, and it speaks, again, to the minimalist design that Svelte has, which really appeals.

**Jerod Santo:** \[00:24:24.26\] What about downsides? I'm sure it's not all puppies and rainbows and unicorns. Have you hit any rough edges, bugs, things that are missing, that you expect to be there? Anything that you would not like about it?

**Mat Ryer:** There is a concept of kind of "on mount" and "on destroy", and there was some weirdness around when you could call "on destroy." And if you called it at the wrong time, then things weren't getting called properly. I actually think they got fixed. So we updated Svelte, we updated our dependency, and I think it fixed it... But also, because we're using client-side routing - which, by the way, is how we say that word in British English...

**Jerod Santo:** I was gonna say, what's that...? Rooting?

**Mat Ryer:** Yeah, sorry.

**Jerod Santo:** So do you have a rooter then?

**Mat Ryer:** Yes, we have a router... No, I'm joking. \[laughter\] We have a router, yeah. Don't bleep out when I say words in British English as well...

**Jerod Santo:** \[laughs\] I'm just gonna bleep out a bunch of your words randomly and see how it shakes out. \[laughter\]

**Mat Ryer:** Yeah. For example, we have a page component, and it might show you a page of data. Now, in the beginning, we were loading that data on mount, which kind of makes perfect sense... But then of course, if you interact and switch to -- it's the same component, but a different URL, so you're looking at a different page of data, that component doesn't get mounted again. It's already there. And what happens instead is that the parameters from the route itself is what's changed. So that's what we have to be reactive against, not the unmount. So we ended up not really using mount and destroy in the end very much at all.

**Jerod Santo:** Hm.

**David Hernandez:** The router is one of the things that is not part of the built-ins that Svelte has. There's a podcast that we users -- one of the recommended ones I think is just called Svelte Routing... But it's not part of the official distribution. We have to find it...

**Jerod Santo:** Is there an official...

**David Hernandez:** I don't think so at this moment...

**Mat Ryer:** Yeah, but that one's good.

**David Hernandez:** It's kind of one of the recommenders, but it's good enough. We didn't have any problem with that. Yeah, it was good.

**Jerod Santo:** Have you interacted with the community at all? Open issues, spoken with the core team...? Was it Rich, or Rick? I think it's Rich Harrison, the guys... Any interaction there, or you've just been happy users over on the sideline, for the most part?

**Mat Ryer:** When we encountered some confusion around mounting and destroying, I did reach out through GitHub and opened an issue. We've got a lot of experience in open source, and as a maintainer of some open source projects myself, I feel like I know how to open an issue... So I think they appreciated the detail that was there. It wasn't too much information, it was hopefully just right... But they responded so quickly, and I think they gave me a workaround immediately, and then I think things maybe changed in the next release, or something.

**David Hernandez:** But pretty much we're happy users, isn't it? We didn't interact a lot. Not at the level that we have in the Go community, where we are more active. Here it's just good users, more than active contributors.

**Mat Ryer:** \[00:27:44.19\] Yeah. There's a thing that we grew to love, which is definitely weird about Svelte... Which is this kind of -- it's a dollar syntax for making something reactive. So I think it's technically a label in JavaScript. So you do $: and that is valid. JavaScript - you're just defining a label, I think, called $... But in Svelte's world, that means something, and essentially, you can write a line of code or a block of code, and any variables that are mentioned in that code, if they change, this will get basically reevaluated. So that turns out to be a very nice way of describing almost in a declarative way what you want to happen... Because of the responsive nature of it, it feels a little bit magical, but yeah, it was something that initially -- because we sort of didn't want there to be lots of new syntax, or anything like that to learn. And this one, I thought "Hm, I don't know about this", initially. And they even said that on the side; they say "We know this is weird. Bear with us, you're gonna love it." And we do. They're right.

**David Hernandez:** Yeah, it takes a while to learn it, and it takes a while to make your mind, "Oh, I can use the dollar thing." Once you get it, it turns out to be pretty good. I quite like it.

**Mat Ryer:** Yeah.

**David Hernandez:** At the beginning I was like "Oh, let's not use it for a while. Maybe we don't need it." But no, we were wrong on that one, and it deserves a little bit of a learning curve in that sense. For the rest of the framework - it's pretty easy to learn, and I quite enjoy learning it.

**Break:** \[00:29:32.13\]

**Jerod Santo:** So let's talk about Pace itself a little bit. This is not your first rodeo... You guys built and sold Machine Box, so you're successful entrepreneurs, so they say... And here you are with Pace; it's a project management tool (?), entering a market built with the JIRAs, the Trellos, the Pivotal Trackers... What else? Microsoft--

**Mat Ryer:** GitHub Projects.

**Jerod Santo:** GitHub Projects...

**Mat Ryer:** TextPad...

**Jerod Santo:** Right.

**Mat Ryer:** People just use TextPad, yeah.

**Jerod Santo:** Notion, which is on the come-up...

**Mat Ryer:** Mm-hm. Monday...

**David Hernandez:** Yeah. You can make it a drinking game. So the one that runs out of \[unintelligible 00:31:54.11\]

**Jerod Santo:** Oh yeah, you just keep going around, and whoever can't think of one drinks.

**David Hernandez:** Yeah, exactly.

**Jerod Santo:** I like that one, actually.

**David Hernandez:** \[laughs\]

**Jerod Santo:** \[00:32:03.27\] So I've already spilled the beans, I've named like seven of them, so I guess we can't play. Maybe next time around. But the point is it's a crowded market; lots of people trying to solve this problem. Basecamp's another one. Project management tools, communication tools... Why would you pick this space, and then how are you actually trying to carve out a niche and make Pace stand out?

**Mat Ryer:** Yes. Well, like with Machine Box, it comes from solving our own pain... And I always think, whenever I've worked on something where I really understand the pain myself, the results are so much better. Whenever we try and imagine something, that we're gonna build a solution to some problem that we're sort of imagining or we don't really have personal experience with, you make sometimes very fundamental and sometimes quite silly mistakes or assumptions, and it takes a lot of work to test and retest assumptions, and all this kind of thing. So we definitely got a little bit addicted to this idea of solving your own real personal pain... And we were using JIRA, which is extremely powerful -- it's a platform, really, for this kind of thing.

**Jerod Santo:** Yeah. It's complicated.

**Mat Ryer:** It's very complicated. I heard Tell once, many moons ago, that you can configure it to be simple to use... But I've never seen that happen. So I think it's because of trying to do everything that it ends up being this kind of crazy monolithic monster that's difficult to use. And actually, it ends up being quite slow, and sometimes you just wanna nip in, have a look at something, make a change, say "Oh, this is in progress", or make some comments, or ask a question, and nip out. We were spending too long in these tools, even to the point where I once was trying to say "Oh, this works. Done", and I clicked Done, and it said "Oh, you didn't enter these four fields." So I was like "I don't know what those four fields mean." So I couldn't mark the work as done, because it wouldn't let me. And it was just like "What...?!" So it's things like that... And David, what was the other one? Slack was the other thing that were kind of getting at.

**David Hernandez:** Yeah, basically we understand product or project management, or even team management, as a communication. The ground of JIRA and other tools is not based on communications, it's based on tasks that you create and you assign to people. That's the basic flow that any project management tool has. We tried to \[unintelligible 00:34:43.16\] in the way that we were spending a lot of time in Slack also, to just communicating the day basics. We were losing track what -- it has to go through Slack, it has to go through JIRA, or it has to be an email.

So we've reached a point that the communication is also as important as the project management, so we wanted to blend those two concepts in one and make a tool that solves both problems, so you don't have to context-switch for one to another; you can do a conversation in Pace, and not really create a card, or a task to someone to do it, or just want to have the opinion of some piece of work to a team, so you can ask questions, send a message to a team and they can decide to convert that message into a card, and so on and so forth. That kind of workflow wasn't reflected at all in the current tools that we tried or we used before. At that point, we say, "Oh, yeah. It's okay. We can just make our own, see how it goes", and see if we're really keen to use that tool.

It turns out that from around a couple of months we've only been using Pace, we don't use Slack anymore, absolutely we don't use JIRA, we don't have to, nobody tries to make us to use JIRA, or any other project management tool... So we built Pace with Pace, and that is even a good motto, isn't it?

**Jerod Santo:** \[00:36:16.07\] Right. So what was the core functionality of Pace? It seems like there's this concept of "The medium is the message", and we think of certain applications... Trello is a list of lists, and so cards are the thing; JIRA - I feel like the ticket, or whatever that thing is called, is like the center of the world... And you kind of get boxed into these concepts. With Slack it's really like the chat, it's the message, and it's a stream of messages... So you're trying to blend worlds, but keep it simple, you're trying to provide some structure for project management, but you're also trying to provide some sort of just discussions, and commentary, which is a place that GitHub is also playing in that world as well, with their new Discussions stuff, which is kind of like Issues, but not issues... Anyways, what's Pace's core functionality? Is it a list of things, is it a conversation? What is it?

**Mat Ryer:** Well, it does have the concept of a piece of work... I mean, some of these things that we've seen modeled elsewhere are modeled like that for quite good reasons. We were very open when we started. We would just allow anything to happen. We weren't strict with ourselves as we were exploring it... Part of why we wanted to quickly get into rapid prototyping and building things is because that process is how we learn, really, what we're doing.

So you do have this concept of cards - they're the tasks that you do - and we also have conversations... And with those two things, it turns out you can kind of solve a whole raft of problems, and actually -- because it's a bit like how Svelte was designed, and the popular programming languages, now no longer allowed to mention...

**Jerod Santo:** \[laughs\]

**Mat Ryer:** ...it's minimalist, so you know where something's gonna be, you know what something's gonna be. And so yeah, it's about that. You mentioned GitHub - the other thing is we know people use GitHub, so therefore we built already into it a GitHub integration that allows you to mention your work in Pace, and we link those two together for you. That's something that we've found useful a lot... But actually, you might say with Pace it's things that we've left out, and it's things that we aren't going to allow.

One example is you can't assign work to other people in Pace, you can only take work. So that is a big shift, because often you'll have situations where people are just assigned work by somebody else, and it becomes somebody's job really to dish work out. But that turns out to not be a very efficient way of sharing our work, because nobody knows better than you the things that you're interested in, the things that you're good at, the things you're gonna be able to do a good job on... So this shift - it's probably not gonna change things too much, but it's a slight shift in the balance of power, and it empowers the team to pool the work, rather than it being pushed on them. Even just psychologically, that has quite a significant different feeling to it. You'll still have a manager say "Oh, I think you should do this. Is that okay? Please assign it to yourself." "Oh yeah, okay." You're then doing it with consent, with kind of collaboration. It's less command and control.

\[00:39:43.00\] So there's a few little quirks of it like that that are bringing in really our years of experience of how we've successfully run teams, and it encodes it into the tooling, so it's kind of a no-brainer. You don't really have to be thinking "Who's best to do this work? I'm gonna assign it to somebody." And there's no worse feeling for a developer when they're assigned a task that they have no idea about and they feel completely out of their depth, especially when that happens to more junior team members.

So instead of that, just being pushy, and a very impersonal, just "Assigned. This work is just assigned to you", it becomes a conversation. And when you're comfortable then, you go and accept, "I'll assign this to me", and that has a very different feeling to it. I've seen that be very successful. So there's a few little quirks of the app like that, which we hope will find and resonate with people; find the right people where that works.

**Jerod Santo:** You wanted to say something, David?

**David Hernandez:** Yeah, so the other thing that we pay a lot of attention is in the UX, especially not trying to steal your time. The most precious time of a developer of a team is the time actually producing code, producing something useful, not the time that you spend in application. I'm sure that it's likely one of the ones to blame to steal your time. That is really put effort to steal your time into UX. You always have the red point to track your attention, the counters in the app, so you are missing something, the activity in the channel... Just all those signals make you pay more attention.

So we try to respect the time that you spend in Pace, even if you have a conversation, even if you have notifications... So you can just enjoy missing things out. You can turn off your notifications, do some code, get back to pace, look for another piece of work, or look for the conversations that you are a part of. And I believe we put a lot of effort in the UX to be in a very natural way, so you are responsible of your time. And I think that philosophy is what makes Pace good.

**Jerod Santo:** Yeah.

**David Hernandez:** We're gonna try \[unintelligible 00:42:05.12\] is true, but it's what we probably spend most of the time, like just changing little things \[unintelligible 00:42:13.27\] and see if it resonates with people.

**Jerod Santo:** It's a tricky problem to solve, and one that I think if you strike a balance well, you'll have a winner on your hands, because there are times when those notifications or those messages are absolutely crucial, and it comes through right now. If I have a question and you're blocking me from progress, and I'm like "David, I need to know this one thing", whatever it happens to be... The password for our Pace account -- no, that would be a bad example. Think of a better example and insert it right here - sometimes I'm blocked; and I can just let you know, Boom! You unblock me, I'm productive, you're back to what you're doing... Maybe you lost a little bit of context, maybe not; maybe you're on lunch, who knows.

And there's a lot of times where it's absolutely death, and that thing was not necessarily important now, time-sensitive, so it'd be better to have everything in an inbox that I can catch up to when I'm on lunch, or when I'm coming in in the morning, or finishing my day... And Slack is putting in lots of work towards this. I mean, it's not great, but they have now the "Do Not Disturb", or the Schedule, where you're just off and it just silences notifications... There's lots of things they're trying to do. I'm just curious how it works in Pace, or what you're thinking of how it might work with regards to a discussion about a feature, where I have just a comment like "Hey, this looks cool. Keep up the great work!", versus "I need help right here." Do you guys find yourselves escalating to other tools? You say you're not using Slack anymore, but David, if Mat's blocking you and you need an answer now or soon, do you text him at that point, or do you say "Notify him anyways"? What's the flow for that?

**David Hernandez:** Yeah, that's a great question. Yeah, if I need Mat, I call him; phone, or -- I never called you by phone probably, Mat... I never need you.

**Mat Ryer:** \[00:44:07.09\] I can't understand you.

**Jerod Santo:** \[laughs\]

**David Hernandez:** Yeah... What is a phone?

**Jerod Santo:** Text is preferred, right?

**David Hernandez:** Yeah.

**Mat Ryer:** Yeah, but Slack is doing that, but at its core it is an instant messaging -- that's kind of what it's good at.

**Jerod Santo:** It sets expectations of real-time.

**Mat Ryer:** Exactly. And the pressure that that can put on -- I mean, you feel bad, if you've been away and you come back and you've got lots of messages. You actually feel bad now, and that's kind of crazy... And it depends, obviously; with some teams this is more of a problem than others, but the trick is really to put the knowledge in the system in a different way, and you can mitigate a lot of those urgent -- you wanna avoid those "This is really urgent, I need you right now" kind of situations. They're not unavoidable completely, but with Pace being asynchronous by default, that gets a step closer, and protecting developer time is kind of vital... Because those little interruptions - it is annoying when you can't get an answer to something you need quickly, but it's not as annoying as when you're in the zone on something and Slack is knocking at your door all day.

So yeah, we've gone the other way on it; we've said "Right, this is it. By default, it's async communication, so don't expect an answer right away." You can still use it in that way, if you both happen to be online at the same time. But it certainly doesn't present in the experience, it doesn't present as though this is an instant messaging kind of situation.

**Jerod Santo:** Right. Expectations are huge. So is Pace for software teams specifically, or is it for projects, and will that scope? I assume it is for software teams...

**Mat Ryer:** Yes.

**Jerod Santo:** ...but is that scope ever gonna change? Do you have aspirations to take over the world and say "Well, it's for any project"?

**Mat Ryer:** No, because that's what JIRA did, and look at it. It had to add all these things, because it has to fit all these different contexts.

**Jerod Santo:** Right.

**Mat Ryer:** Another thing about being a tiny team and having already -- I don't know the polite way of saying that we sold our company, so we don't have to raise money... We don't have to try and show all this future growth and all this -- we don't have all those constraints.

**Jerod Santo:** You're bootstrapping and you can stay that way.

**Mat Ryer:** Yeah, it allows us to be quite sensible really in what we want to do... So yeah, there will be definitely lots of people saying "I love the idea of Pace. It doesn't do all the things I want it to, so I can't use it", that we expect to hear, and really, we're gonna be very tight -- every feature that somebody uses, a lot of people don't use it, and so it's in the way. And hiding it behind configuration is sort of moving the problem.

I don't think it solves it. So it is gonna be a bit of a niche product, we're completely okay with that. It's for software teams... I can see other uses for it. I mean, I've used it in other contexts quite successfully... But for sure, it has a GitHub integration and a few other things that developers will appreciate. That's where our focus is gonna be.

If we're adding features, it's gonna be to make the developers' experience better, or that software team members' experience better... And that's it. We don't want everyone to use it, we don't want to be JIRA. We're gonna be small, and we're sort of embracing that.

**Jerod Santo:** \[00:47:53.01\] One last question and then we'll call it a day... The name makes me think that it's about speed and velocity, and it makes me think of things like XP and Scrum and points and estimates, and tracking, or speed, like Pivotal Tracker style... Is that something you're after, or do you eschew that side and Pace is just like a good name?

**Mat Ryer:** No, actually sometimes that is the right speed for what you're doing. Sometimes going fast is the right speed. Pace is talking about that there is the right pace for something; sometimes going slow is the right speed to develop things.

Code is sometimes like - and not just code, but features and products - paint... You have to wait sometimes for it to dry before you can see its true color. Basically, that's kind of a semi-poetic way of saying "If you go too fast all the time, you'll never have space to step back and see what's happening." I think also it's quite unhealthy to have this attitude. Pace doesn't have estimations, that's another thing it doesn't have. Instead, it prioritizes showcasing the work that you've done... Changing the conversation and really encouraging people to not try and guess how long something's gonna take. And by the way, nobody knows how long stuff's gonna take, ever. I hear people that are very confident they know exactly; I really don't believe it. I've been doing estimations for a long time, and the estimation sessions never yield useful estimates.

**Jerod Santo:** No.

**Mat Ryer:** The useful thing about that is the conversation that you have as a team. That's the useful bit of those estimation sessions, in my experience.

**Jerod Santo:** I've been asked for estimations and I'll say "No", and they say "Well, just make it a ballpark figure."

**Mat Ryer:** Oh, classic.

**Jerod Santo:** And then I'll say "Well, do you want me to lie to you in specifics, or in vagaries? Because I can lie in either direction. I don't wanna lie to you, but the answer is I don't know... So if I give you a ballpark, that's a de facto lie, because I don't know if it's true... So what are you looking for here, specific lies, or vague lies?" Either way, it's not good.

**Mat Ryer:** Yeah, well they say "Just a ballpark. You won't be held to it." And it's like "Well, why did we just work the weekend to ship those features?"

**Jerod Santo:** "Why did you just jot that down then...?"

**Mat Ryer:** Yeah, "What are you writing down? Let me see what you're doing."

**Jerod Santo:** \[unintelligible 00:50:12.23\] \[laughs\]

**Mat Ryer:** That's it. So we're trying to be honest with Pace, we're trying to just be honest about stuff like that. No, we don't have estimations, because they're so useless. I know why companies need them and want them, but there's other ways to do it. You can still have a deadline if you want, but you have to let the scope be more flexible. And if you prioritize -- like, we have a showcasing feature in Pace that makes it very easy to record your screen, for example to show off some progress that you've made. In fact, screen-recording is a first-class citizen in Pace. In the comment box you just click a button and it uses the web APIs, the media streaming APIs to record right there...

**Jerod Santo:** Nice.

**Mat Ryer:** ...and then uploads immediately and it's in, and everyone can see it. That is showing the progress, and that's a much nicer way to give everyone all the things that they're trying to get from estimations, which is "I just want to make sure this team's working hard." Well, they are working hard. "If you don't trust the team, then you've got different, much bigger problems, actually. They are working hard, and look, this is what they're producing." That is a much healthier way to work.

**Jerod Santo:** Very cool, guys. Well, best of luck with it. Pace.dev. It is in beta, or beta \[beetah\], if you're on Mat's side of the pond...

**Mat Ryer:** How do you say it in Spanish, David?

**David Hernandez:** Beta.

**Jerod Santo:** See? \[laughs\] Fair enough. You're outnumbered here, Mat. Multiple languages calling it beta. Check it out... You guys have been blogging about your Svelte stuff. Links in the show notes to the Grouper blog post, as well as the open source Oto (I thought it was Auto for a minute there). So check that out as well.

Check out Go Time if you're crazy... What else? Guys, I appreciate you coming on JS Party and telling us all about Svelte and what you're up to with Pace.

**Mat Ryer:** Thanks for having us. It's been a blast! It's one of the best parties I've been to for at least ten weeks.

**David Hernandez:** Me too!

**Jerod Santo:** It's saying a lot. I appreciate it.

**Mat Ryer:** Because of the lockdown.

**Jerod Santo:** I'll cut that last bit out, the lockdown bit.

**Mat Ryer:** Put it in twice.

**Outro:** \[00:52:37.23\]

**Jerod Santo:** Okay, should we get back into the nitty-gritty?

**David Hernandez:** Let's do it.

**Jerod Santo:** I don't really know what nitty means, but it's just a saying...

**Mat Ryer:** It's a good point, yeah.

**Jerod Santo:** The nitty-gritty. Hm.

**Mat Ryer:** Yeah. Can't something just be nitty on its own?

**Jerod Santo:** Well, if it's knitted... You're like "How do you like my sweater?" It's like, "Well, awfully nitty..."

**Mat Ryer:** Yeah... \[laughter\] Maybe that's what they mean then.

**Jerod Santo:** You just need a sweater that just says Grit.

**Mat Ryer:** Oh, that's good. That's meta.

**Jerod Santo:** It'd \[unintelligible 00:53:56.15\]

**Mat Ryer:** Let's back into the knitwear though.

**Jerod Santo:** \[laughs\] Let's kick on, shall we?

**Mat Ryer:** Yeah, let's kick on. Is everything just the opposite in JS Party land to Go Time, is that what's going on?

**Jerod Santo:** Pretty much.

**Mat Ryer:** Yeah.

**Jerod Santo:** Like, things that are bad, are good; jokes are funny... It's the opposite! \[laughter\]

**Mat Ryer:** Great, well done.

**David Hernandez:** I like that one...

**Jerod Santo:** Yeah.
