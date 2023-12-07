**Amal Hussein:** Hello, everyone. It's me, your host, Amal Hussein. You're listening to JS Party, a weekly celebration of JavaScript and the web... And I'll have to remind everyone this week that JavaScript extends to the server, and washing machines, and beyond. JavaScript runs everywhere. And I'll share some more context for why I'm saying this in a minute.

*Okay, this is a bonus add-on, because I realized after we finished recording this podcast that I forgot to tell you why I was trolling on JavaScript being beyond just web browsers. So this week, The State of JavaScript launched, which is the annual survey, and unfortunately this is the second year in a row where they've left out JavaScript server runtimes. And as somebody who loves Node.js, it's very disappointing. People who write server-side JavaScript essentially support all the modern infrastructure and tooling that we all use every day, and so to isolate and leave that community out of the state of JavaScript survey just seems ridiculous, right? So where would modern JavaScript be without things like Node.js, or any other... Or Node.js. \[laughs\] Just kidding. But no, seriously, so that was what I was upset about, so now you all have the backstory... And hopefully, we'll fix this problem for next year, but now you know.*

But with me today is Nick Nisi. Hello, Nick. Welcome.

**Nick Nisi:** Hoy-hoy! JavaScript runs in me... But it's typed.

**Amal Hussein:** Oh, my God. You know what? We had to go there.

**Nick Nisi:** Of course.

**Amal Hussein:** You know, Nick, if you manage to get through a whole show with me without bringing up the word "type", I don't even care if it's in the word -- forget TypeScript. Just the word "type". If you can manage to avoid that, I will give you a million future equity dollars.

**Nick Nisi:** Have I already failed for this episode, or...?

**Amal Hussein:** You've failed already. You've failed so hard, my friend...

**Nick Nisi:** Next time...

**Amal Hussein:** But I hope you're doing well, Nick. Did you have a good Thanksgiving turkey day?

**Nick Nisi:** I did. We had a lot of fun, and then over the weekend I took my kids to Monster Trucks, and they loved it.

**Amal Hussein:** That's so fun. That's awesome. That stuff is so much more fun than people even realize... Smashing things is fun.

**Nick Nisi:** For sure.

**Amal Hussein:** Especially when you're not doing the smashing. You just get to cheer it on from the sidelines... an angry mob.

**Nick Nisi:** I don't have to pick that up...

**Amal Hussein:** Right, exactly. But anyways, so we're so excited about our guest today... She's a really cool person all around. Welcome, Laura Kalbag. Hello.

**Laura Kalbag:** Hello, hello. Thank you for having me.

**Amal Hussein:** Yes, and we're so excited to have you. We're going to learn about you, learn about what you're doing these days, we're going to learn about this cool project that you're involved with... But first, let's talk about our origin story, Laura. You and I met at NodeConf a few weeks ago, which is was also -- the town that the conference was in, Kilkenny, is where you live as well, right? Kilkenny, Ireland.

**Laura Kalbag:** It is. It was a very last-minute edition. By the way, I love that you say origin story. It makes us sound like superheroes...

**Amal Hussein:** Oh, yeah.

**Laura Kalbag:** So I wasn't originally going to speak at NodeConf, and then I found out a bunch of cool people that I'd met at other conferences were going to be there, and I kept saying "Oh, you'll be in Kilkenny. You should come hang out with me while you're there!", not even thinking I was going to go. And then last-minute, I think they had a speaker that wasn't able to make it, and they were like "Oh, Laura, you're local. Won't you come give us a talk?" So with about a week ago, I was like "Right. Gotta get me a nice demo together and then come give a talk about Stately , and Stately-related things at NodeConf." And it was good fun. And we got to meet there.

**Amal Hussein:** Yeah, we did. And I hope the speaker who wasn't able to make it is doing okay, but their absence is my win, because I got to meet you, I got to meet your wonderful partner... If you're listening to this, hi, Erol. So good to meet you. And then just first of all, I just want to take a minute to acknowledge how incredible that conference was. It was my first time attending NodeConf EU... And holy moly, y'all. Best conference I have ever been to, hands down. Hands down. Was that your first time going as well, Laura?

**Laura Kalbag:** It was my first time going. I'd never been, even though I live literally a five-minute drive away, I'd never been to the hotel that it was in, which is really the fanciest hotel I've ever been to in Ireland. It's this really nice spa hotel, with these beautiful grounds... They have falcons, and things like that flying around.

**Amal Hussein:** It was otherworldly.

**Laura Kalbag:** \[unintelligible 00:05:29.20\] It's bizarre... But a really well set up day, curated talks. Or days. Three days. Loads of great content, really nice people, good food, and loads of fun stuff to do in the evenings as well.

**Amal Hussein:** \[00:05:48.10\] Yeah. I mean, absolutely. I think for me, what I loved was, as a senior person, the talks were really geared towards advanced content, essentially. I didn't feel like any talk was really very beginner; it was intermediate or advanced. And even the advanced talks, all had an intermediate slant... So maybe there's a couple slides where they lose you, but really, for the most part... It was just fantastic.

So I would say, everyone, please put this on your calendars for next year. Just a fantastic conference. Community-run, community-oriented, really great setup. It's in the -- not in the middle of nowhere, but it's outside of Dublin. So you have to really want to be there to get there. And so you get 300 people that are just really excited to be there, and excited about Node, and they're stuck in the same venue and hotel for three days, and the venue/hotel is just amazing, the food is amazing... And the best part I think I liked about the conference was it started off with talks in the morning, and then you have lunch, and then after lunch it's like workshops... Which I think is so much more productive than sitting in talks for eight hours a day... Because usually, after lunch, I'm done. I don't want to listen to talks. So...

**Laura Kalbag:** Yeah, you totally burn out on sitting and listening. You want to start doing stuff, and joining in.

**Amal Hussein:** Yeah, absolutely. So yeah, Nick, no FOMO, but you definitely missed out, and... You should submit a talk next year.

**Nick Nisi:** Next year, yeah.

**Amal Hussein:** But that doesn't include the word "type" in it...

**Nick Nisi:** We've gotta get like a Pee-wee Herman, like, "You said the magic word!"

**Amal Hussein:** Exactly. \[laughs\] So Laura, now that you've given us that awesome origin story, let's dig into why we invited you here, which is to talk about XState, and Stately... For those who aren't familiar, XState is an open source, free and open source state management and orchestration solution for JavaScript and TypeScript apps. Essentially, it brings the power of state machines into the world of web application development. And Stately is a new SaaS platform that was launched to supercharge that experience. So before we get into all that goodness, Laura, why don't you tell us a little bit about yourself?

**Laura Kalbag:** Yeah, so my origin story I guess is similar to quite a few people, but I guess not the same as a lot of people working in tech, in that I'm originally a designer. I went to art school. I know a lot of us don't study computer science to start out, particularly those of us that have been in the industry a while... Because the right courses weren't really around when we were starting out. But yeah, so I started out studying design, and I wanted to make websites, I loved the web, I loved the idea of being able to publish everywhere, I loved the idea that people could learn anything from the web. It was really -- as long as you could afford an internet connection, then you had so much of the world at your fingertips. And I wanted to work in that medium.

And so once I started designing for it, I was like "Well, I need to actually know how to build the stuff I'm designing." And so slowly but surely I started teaching myself how to do dev. And when I left uni, I was like "Right, I'm gonna get a job doing this", and started working for myself straight out the gate. Maybe a little bit naive... But it worked for me for a long time, and I ended up -- I think I ran my own thing, or a combination of things by myself and with other people for about 12 years before I joined Stately as I became sort of a more employed person.

**Amal Hussein:** Yeah, that's so cool. And then you have this book that I own; it's somewhere in the shelf behind me, in my messy shelf, I actually own that book. Yeah, I love A Book Apart. I love all the books that they publish.

**Laura Kalbag:** They're the best.

**Amal Hussein:** For folks who aren't familiar, you want just like a little tech book that just it's no fluff, just stuff, great for busy individuals... It's not like a few hundred pages, but it's like 75-80 pages, 100 pages of really good material... And yeah, your book's one of them. And I didn't even realize that you were the person that I met at the conference until I reached out to you to do this podcast, and it's like "Wait a second, hold on... That's that accessibility person? That's the person who I'm --", you know... But yeah, can you tell us a bit about that life?

**Laura Kalbag:** \[00:10:10.03\] Yeah. So it was really exciting. A Book Apart approached me not long after they started up. And what was really nice was I was a massive fan of their books already. I knew a bunch of people who'd written them... The fact that they let people write in their own voice is really cool. So they're not dry textbooks. They have humor, and they have personal voice... I mean, I say personal voice... My book is in US English, and you might be able to tell, my accent is very British... So that was a little bit jarring... Like, taking all the use out of the word "color", and things like that... \[laughter\] But it is very much -- it sounded me... Although I did have a very good editor that made me sound like a better version of me.

**Amal Hussein:** Yeah.

**Laura Kalbag:** And yeah, so I've been writing about accessibility on my blog and in other places for a while. It's always been an issue that I really care about, because I have a brother who's disabled, I know a lot of disabled people... And since I started out, it always made sense to me that "I make this accessible. Of course I do. I want everyone to be able to use the things that I build." So when I was asked to write a book, it was a little bit scary, but I was like "I can't pass up on this opportunity." And it took me a few years. That was an unusual process - A Book Apart are wonderful people to work with - because I had a lot of life going on at the same time... But once we got it out there - I think it was 2017 that it came out, so it was a long time ago now... But the benefit of accessibility is that the field moves quite slowly, and things improve even slower, so pretty much everything in that book is still completely relevant today. Very rare for a tech book.

**Amal Hussein:** Oh, 100%. Yeah. I guess I consider it just one of those foundational things. Accessibility is this horizontal layer in developing web applications or mobile applications, and so I feel like the fundamentals are pretty -- they're pretty baked. It's like, this is the way to do it. There may be better ways to do certain things in the future, but for the most part if you're following accessibility guidelines from five years ago, you're still in good shape, you know?

**Laura Kalbag:** Yeah, totally. Those basics have stayed the same. And I guess, in some ways, it's the same with developing anything for the web in general.

**Amal Hussein:** Correct.

**Laura Kalbag:** The basics and the fundamentals, even though we put new libraries and frameworks and all sorts on top of it, those fundamentals have stayed the same.

**Amal Hussein:** Yeah, totally. And speaking of foundations and fundamentals, I feel like we've -- so we've invited you here to talk about the world's most nerdy topic, which is state machines, and also the world's most hotly-contested topic, which is state machines... I wouldn't even say state machines; state machines is like an avenue for doing state management. Really, I would say that state management is the hotly contested topic...

**Laura Kalbag:** Indeed.

**Amal Hussein:** And really, at this point everyone should just be using XState. I mean, let's be real... But anyways --

**Nick Nisi:** I do, I do.

**Amal Hussein:** Exactly. Right? And so we're gonna talk about that and explore all of that with you today. So we've had David Piano on the show, and he's definitely due to come back... We're excited to hopefully have him back again in 2024. So we talked to David when he was a Microsoft employee, and he had this fun little open source project called XState. And I think if you're a JSParty listener, that's where we left off that discussion. Fast-forward to 2023, there's this company called Stately, which has people working for it, like yourself... And I'm just like "David, whoa, what what's going on?" First of all, I'm tremendously excited, because XState is one of my favorite projects on the web, period.

**Laura Kalbag:** Yay!

**Amal Hussein:** \[00:13:50.10\] Yeah, I mean, come on. It's just the best. I mean, it's like solving a solved problem in a way that makes sense for JavaScript applications, you know what I mean? We're using fundamentals from computer science from the '50s. It's not just like Joe Schmoe invented some new way to do a new thing... So that's the part that I love about it the most.

But for folks who may not be familiar with XState, or state management -- well, I would say state management might be a stretch. For folks who might not be familiar with state machines, or XState, or Stately, can you just talk us through all that stuff and tell us about how you also became involved with the project?

**Laura Kalbag:** Yeah, absolutely. So as you said, David Khourshid, also known as David Piano... Two people that are the same on social media...

**Amal Hussein:** Oh yeah, that's so funny. I call him David Piano.

**Laura Kalbag:** Most people know him as David Piano.

**Amal Hussein:** I know that's not his real name, though. I think that's what counts, David.

**Laura Kalbag:** He's an incredible pianist... So if you do ever get the opportunity to see him play piano, that is why he is called David Piano. But yeah, so he made the library XState, and it's been around quite a long time now. It's really popular. It's for using state machines anywhere that JavaScript runs. So I guess it's mostly used on the web, but it can be used in cars, in TVs, in all sorts of things we've discovered is where it's used. It is used all over the place, so it's really cool. And what that does is it basically uses this old-school principle of finite state machines, which is basically you can model what your states are, what the events that trigger transitioning from state to state... So you can model that, and you can also model actions that are triggered, like your side effects, when you go into a state, or exit a state, or when you hit a transition as well...

But what it also does is it layers on this other call - it's called a visual extension, I guess, called state charts. And state charts add a whole more greater amount of complexity than you can manage with just state machines... And so what that does is it adds things hierarchy, so you can have parent states and child states, and you can have parallel states, which allows you to have concurrency, so if you have different states happening simultaneously... You can also invoke actors as well. So if you want to go even nerdier than state machines, we can talk about the actor model, which is the idea that everything is an actor, and can send events to each other that trigger each other's behaviors... And so you can invoke actors from your state machines, your state machine can be an actor... And so there's cool things that you can enable with state charts. And that sounds really, really overcomplicated, but actually, what it ends up being, if you're trying to read your state machine inside of your JavaScript, it's essentially a JavaScript object. It's actually really readable as code... And then you can do a lot of different stuff with that, with what's provided in the library itself.

And so I think it was a couple of years ago, during COVID, I was looking around for something to work on, and I was like "Oh, I can do various things, because I have a design background", but I also enjoyed doing development... "I write a bit, I speak a bit... I love free and open source, and I love community work..." And I was like "Does anyone have a job that they want to give me to work in this area?" A very unprofessional way of getting into the employment bubble.

**Amal Hussein:** I don't know, that sounds like a woman who knows what she wants, and went after it. It's like, "Take me as I am." I love it. That's awesome.

**Laura Kalbag:** Yeah. And David was like "Well, I've got this team that I'm starting up around XState - it's going to be called Stately - and we want to do state machines as a service." So the really cool thing that Stately does - and initially, it was this XState visualizer. So that allows you to visualize your state machines as you've written them in the code, and inspect them as well. And the benefit of having Stately is that you can actually build state machines visually, using a drag and drop interface.

\[00:18:08.10\] So suddenly, this opens up the world of state machines to folks who may not be familiar with them, who just want to look at something that's like a flow diagram of app logic... And it also is a much quicker way to be able to build things. And once you can visualize them, you can also simulate your machines, so you can see exactly how they would work inside your app as live. So you can go "Oh, when I'm in this state, what events are available to me?" And that makes it really easy to spot things like unreachable states, or transitions you don't want to happen, or where you've just completely missed out a transition that you need in your app logic. So it just makes it a lot easier to understand. And then we've made it so you can export that to your code, and soon we'll have ways you can sync that to your code as well... And oh, there's a whole bunch of really cool features that we've put in there recently, but maybe we'll talk about that in a minute.

**Amal Hussein:** Yeah. Oh my gosh, wow... I'm gonna let Nick take the lead on this. \[laughter\] Nick's salivating. He's like the biggest fanboy.

**Nick Nisi:** Yeah, when we had David on the show, way back, XState was something that I was really interested in. I saw a lot of people talking about it on Twitter, and things like that, and I was like "Oh, that sounds pretty interesting." And then this opportunity came up at work. So I talked to David about it on the show, and was interested in it and really wanted to learn more, but then at work, we were going through this whole revamp of the most complicated piece of our application, to handle all of these different types of states... And I was in all of these meetings where they're just drawing everything with Miro. And I was just like "If you're in this, you go here. Otherwise, you go here." And I'm just like "This looks like a state chart. I really think that we could just do this in a state chart, and then export it..."

**Amal Hussein:** And have it be interactable.

**Nick Nisi:** Exactly.

**Amal Hussein:** And shareable.

**Nick Nisi:** Yeah.

**Amal Hussein:** Yeah, that was the thing that blew my mind when I first started using it; I was a principal software engineer at the time, and we were building a bunch of new, greenfield things, and just creating a little chart, and then being able to just generate a hosted version of that state machine... And then being able to share it with my product manager and designers... That was so clutch. Game-changing.

**Laura Kalbag:** One of the things that really appealed to me when David asked me if I wanted to join - it's the idea that I, coming from a design background, and I did development, so it always really intensely frustrated me that we were continually treating all of our different areas of expertise as completely separate... We had our requirements in different formats, we provided feedback to each other in different formats... We were always chucking stuff over the wall at each other. And there's really very few ways you can have a source of truth that stays live and updated, and is accessible to everyone. You might have a source of truth in a design system somewhere that a few people understand, you might have a source of truth in, I don't know, your Figma files, you might have a source of truth in your code... But getting all of those to work together is really difficult. And so this is what really appealed to me about state machines, is "Oh, we've got the visual version... And even if you edit it visually, it's still going to output decent code." Not like your standard no-code situation, where you're building a lovely website with all these drag and drop blocks, and then it outputs a load of inaccessible junk. It's actually doing useful stuff.

**Amal Hussein:** Yeah.

**Laura Kalbag:** Which is because of the explicitness of state machines it allows you to be able to do that.

**Amal Hussein:** Yeah. It always feels like they're spitting out blindfolded HTML and JavaScript and CSS... Because it's like somebody typing blindfolded on a keyboard, just slapping their hands... That's what it feels like, those build outputs that are for Flutter, and all these other different kinds of web target things... But yeah, so Nick, let's go back to your story. We interrupted you.

**Nick Nisi:** \[00:22:07.08\] Yeah, well, so I just approached everyone and I'm like "This really looks like state charts, and I think that we could do this in a way where we can actually build the logic into this diagram, basically, and then come back and actually watch the diagram go, and make sure that it works." And so I was given a week to do a quick spike with it, just to put something together... And I used XState with Storybook, and didn't do any UI, except for using Storybook to literally just show that state chart visualizer in there, with some buttons to control, "Now we're in this state. Move to this next state", and do all of that. And after a week, I had all of the business logic done. And we could walk through the entire flow of the app and what we needed it to do with none of the UI. So then we could just go back and hook in the UI.

And the way that we broke it up is one state machine to rule them all, and then each individual section had its own. So there was five smaller state machines that it would just invoke when it gets to that state, and it made it really easy... Instead of just a 1,000-line state chart. It was very manageable... And then we just got to go plug the UI into it. And I have some thoughts around that part of it, but it was overall very successful, and is still in production today.

**Laura Kalbag:** Oh, that's cool.

**Nick Nisi:** Yeah, yeah. Pretty much looking forward to version five.

**Amal Hussein:** That's amazing. First of all, I'm excited to click into that problem that you just highlighted, Nick, that you're like "Okay, now getting it to work with my existing UI libs." It's a different situation... Because I would agree with that. But I feel it's because you're from Venus, and you're talking to someone from Mars, you know what I mean? But in this case, let's say that Venus is more advanced than Mars. But that being said, just the whole state machine inception is another thing that I was really excited about... I love that you could create these little "Here's a state machine for this, here's a state machine for this", and then you can have this bigger state machine, that controls these little ones... And it's just so clean.

I think the big win for me as an engineer first using XState was it just allows for really clean decoupling of the development process. So step one, discovery. Step two, design. Step three, development. That's the idealized state. But you and I both know the reality is like discovery, design, development... They're all in bed together, and someone broke up with someone, someone now is dating someone else, so they're back together again... It's like a Kdrama, developing and shipping software.

But I do feel like having that state machine - it just allows for all the stakeholders to come together at the table when they're developing a new feature or requirement, and just "How's this thing supposed to work? Okay. What are the error states? Okay. What happens when we hit this edge case scenario? Okay." And you can even leave room for edge cases and come back to them later when you're ready to tackle them. So it just gives this centralized, getting everyone on the same table...

I've never worked so collaboratively in my life with non-technical stakeholders than I have when I'm using tools like XState. So I cannot say that enough. When I say I love this thing, I really do. I think Nick loves it more, but I'm right there with him, right after him. We're big fans.

**Nick Nisi:** Yeah, definitely. I have lots to say about XState and things that, but... I'm curious, it seems like Stately and the Stately --

**Amal Hussein:** We have more love letters for you.

**Nick Nisi:** Yeah, absolutely.

**Break:** \[00:26:02.03\]

**Nick Nisi:** I wanted to ask about Stately though specifically, because it seems it's grown beyond XState. Is that a correct way to look at it?

**Laura Kalbag:** Yeah, so the idea is that -- I mean, right now the best thing to use it with is XState. But you could use it by itself. You can use it to model whatever you want, really; anything that is flow-like. And we're trying to also help bring in other members of the team by not necessarily always using the word "state machine", because that's going to scare a bunch of people off. But if you talk about it in terms of flows, and -- states and events are pretty universal, and easy concepts to understand. But if you start talking about flows and things like that, then people can comfortably use it to model.

One of our longtime users is actually a project manager who uses it to model a whole load of things, and then passes it on to his team. And I love that; it's really great for it to be accessible to people who want to use it in that way. But we've also recently released some features so that you can actually import from Redux, and from Zustand... And so getting your reducers and your stores in so that you can then translate them into something that is more state machine-like as well...

**Nick Nisi:** Nice.

**Laura Kalbag:** ...which is a pretty cool feature to help people... Because sometimes one of the complaints that we often get about XState itself, and to some degree Stately, is that it's hard to get started or to know where to start, and it is quite a big learning curve... And a big part of my work at Stately has been trying to reduce that learning curve as much as possible, whether it's through making goofy state machines based on dog walks and things like that, and trying to make these concepts easy to understand... But also just trying to make it easier for people to get into a state machine. And once they can see it in action, they can start to understand how it relates back to their work.

**Nick Nisi:** Yeah. That's one thing that we really ran into as well, is it's solving our really complex problems very well... XState is, specifically. But then we're still using things like React's built-in state things, like use state... And looking at things like Zustand and things like that for simpler cases, where a state machine almost felt a little bit overkill.

**Amal Hussein:** There's no such thing, in my opinion. I wanted to bring up earlier -- the first time I heard about the actor model... And by the way, Laura, great description earlier, explaining that concept; it's a hard concept to explain. And hopefully we can dig into it a bit more later. But the first time I heard that I thought of this Shakespeare quote that was like "There are no small parts, only small actors."

**Nick Nisi:** I like that.

**Amal Hussein:** So, I think it's okay for there to be a small state machine. I think that's the point. I think it can be one node, 100 nodes, 4,000 nodes... But the point is, all the relationships between the nodes make sense, and they're intentional. And you don't have to worry about one-way flow, or this way flow... It's just what's your logic, and here it is visually, represented in a way that is going to be consistently reproducible, you know...

**Laura Kalbag:** Yeah. Well, you can also mix state machine logic with non-state machine logic as well. So that's what's quite useful about it. So if you do have something that is really simple and linear, and you aren't worrying about multiple states, you're not even really worrying about many events or anything like that, then you can probably keep that really small and basic. But then use that to communicate with a state machine, and use the state machine to send it events, and things like that, so that you can modularize it in different ways.

And that's what I always say, is state machines - you don't want to see it as the hammer to every single nail. If you start thinking that way about any technology, then it gets dangerous... Because you're thinking shiny and exciting. I mean, I'm not sure how many people say that state machines are shiny and exciting, but still, you're overusing it. If you're over-evangelizing to that degree, then you can't trust someone if they are saying that what they're building is a solution to everything. You can't trust them.

**Nick Nisi:** Join my cult... \[laughter\]

**Laura Kalbag:** \[00:32:00.04\] But the second you have started getting the complexity... And really, with state, the smallest addition of a feature can introduce so much complexity in state... So that's where having state machines is really valuable, and also where visualizing them is really useful, because a lot of the time you can be staring at a bunch of code and it's hard to grok what's going on there, and what all the implications are... And that's one of the nice things I find about being able to visualize state machines, is the idea that you can get a completely different perspective on how something's working.

**Nick Nisi:** Yeah, absolutely.

**Amal Hussein:** Yeah. So let's dig into some of the gaps that Nick highlighted around - okay, I now have this great, perfect state machine, I've perfectly represented my business logic... Now I've gotta go plug it into my actual productionized web application that has legacy code, and this, that and the other thing... 17 flavors of Redux... And by the way, it's also worth noting - so I love Redux, just putting it out there, and the Pub/Sub event-based model. I think these things play nicely together. But I'd love to hear from you as well, is there a world where these two things can live side by side in a large-scale application? Or do you really have to be intentional about what's responsible for what? So two big questions, Laura...

**Laura Kalbag:** Well, I'd be curious to know what Nick's experience of this is, because honestly, the application that I have the most experience using state machines in is of course Stately Studio, which is full-on into state machines... \[laughs\] We have - I think I lost count... 51 state machines used in the code for the Stately Studio app.

**Nick Nisi:** Nice. So ours is a React application, which I think caused some of our initial confusion, potentially... Because the way we design, the state machine technically lives outside of React. We're not developing it in a React hook, or something that, to where it has access to other React hooks... And that's important, because a lot of our existing business logic, and the way that we fetch things from APIs and all of that is with React Query. And so all of that exists over there, and we went down a path for a while where we were like "Oh, a fetch is a promise, and a promise is a state machine, so we could just do that as part of the state machine flow." But then that's duplicating a lot of things outside of there, where we also need them in React... And so the other way is we could just do it in React, and then send a message to the state machine that "Here's the data", and then it can run with that there.

And the main problem I think that we ran into with that was just in the initial POC we had this perfect, enclosed state machine that had all of the steps that we could take within this application. But then, as we start adding in these UI bits and the React chunks to it that are actually fetching the data and putting it in there, the lines got convoluted to where state might exist or originate from... And I think that that really caused a lot of tight coupling between the UI that we had, or that we were creating, and the state machines... Whereas in the initial thing, my initial vision for it was "We can just have this perfect state machine that is totally decoupled from the UI, and then the UI can just be this dumb UI that gets fed data from the state machine, and displays it and sends it messages." And the lines really got blurred on that.

**Laura Kalbag:** Yeah. And I think utilizing more of that actor model way of thinking about things is a really great way of doing that decoupling... And that is -- I think you mentioned earlier, being excited for XState version five, which is being released this week, by the way...

**Amal Hussein:** Oh, wow. We caught you at a good time.

**Laura Kalbag:** Just in time. Yeah, so it's a lot more focused on the actor model, and also making concepts just generally a bit easier to understand if you're starting fresh with XState as well, using terms that are easier to grok, and just making everything more straightforward.

**Nick Nisi:** \[00:36:14.08\] Yeah. That piece specifically, "easier to grok terms", I have been saying since the start of this, with teammates and stuff... I'm like "Oh, that's a little confusing, but it'll be fixed in XState 5." So I'm so excited about this week!

**Amal Hussein:** Yeah. So can we talk a little bit more about the actor model, I guess? I have some more questions on retrofitting this into your app, but I think maybe it's worth it to just lay the ground for folks on "Can we dig into the actor mode?" Qu'est que ça? You know...

**Laura Kalbag:** Yeah, so at the most basic level, the actor model is breaking things into such small modules that all they are doing are sending events to each other, and triggering behavior based on those events. You can do it with anything, but in state machines it's your way of breaking your state machines up. So you can choose to invoke an actor -- so it's a bit different from if you want to just fire off a fire and forget action, some sort of effect, which you can just fire off and forget about it. Whereas with an actor, you can actually invoke something that's a lot more long-running, a process, and the state that you invoke it on - it will start in that state, and then when you exit that state, you can stop it. And then in actions, you can use actions to send events to and from your actors as well. So it is more of this decoupling behavior. Trying to break things into the smallest possible pieces that you can, in order to make it easy to understand where your data is flowing and how everything's supposed to behave.

**Amal Hussein:** Yeah. So can you give us an example of what's coming in version five that's going to make something more turnkey? What's the before/after snapshot for...?

**Laura Kalbag:** Well, for one, just using the term actor... Because that's something that is missing in version four. A lot of the language used around it has been services. And also, one of the most common things you would use to kick off your state machine is using "create machine". And now you can do that with "create actor" as well. So it's really enforcing with people that when you are creating a state machine, you are creating an actor, and encouraging that way of thinking about what you're building from the beginning.

**Amal Hussein:** Makes sense. And so getting back to the Redux thing... So hearing you describe actors has helped me solidify my own understanding of actors as well, so thank you... But I'm thinking "Well, Pub/Sub..." You know, the kind of lovely scalability that Reduxy/Fluxy tools bring into frontend applications, where "Oh, you want this similar behavior triggered -- oh, you want this button clicked to do the same thing on this other page? Three lines of code." Or depending on which version of Redux you're using, 100 lines of code. But it doesn't matter. Point being, it should be pretty easy. Hopefully, you're just copying-pasting... But I'm just curious, where did these -- yeah...

**Laura Kalbag:** So you can do that same thing with a state machine. What you can do is you can just send an event to your state machine, and that will allow you to get into whatever the next state is; it will be able to pick up that event. So that's the easiest way to start interacting with your state machines, is you can just do it on click handlers, and things like that. You can just fire off an event to that. And then you can read the state off that as well.

**Amal Hussein:** \[00:39:48.04\] Right. Because the beauty of XState is you can make whatever you want happen when something else happens, right? It's pretty cool. It just gives you a hook into a series of events. And so I'm just wondering, have you seen people through their adoption journeys - what do they do with their existing state management tools, essentially? I'm an engineer at X company, and I'm really interested in XState. This sentence wasn't supposed to rhyme, by the way... \[laughter\] And I keep seeing on X, everyone keeps talking about "Stately this, Stately that. I want to get them on this bandwagon... But I have this existing state management tool. So what do I do?"

**Laura Kalbag:** One of the things I'll say is you don't need to just pull everything out and replace absolutely everything with a state machine. And you're not gonna be popular if you suggest that anyway; I don't think anyone gets away with doing stuff that in their project. But you could start off by just using XState for a really tiny element of state. So even if you're creating a new feature, or something like that, if you start using a state machine for that, that's a really good way of just starting to introduce it slowly, and seeing how it works, and playing with it in a much more contained environment... And it can interact perfectly fine with other ways of managing state as well.

**Amal Hussein:** That makes sense. Yeah, I think once upon a time React was also something that kind of lent itself to that type of incremental adoption, where it was like "Oh, you have a backbone app? Oh, you have an Angular 1x app? No problem. Just insert this div, and that'll be our root. And then this one piece of your page, or this one new page will be in React." It was that kind of -- like "We can live side by side, unopinionated." Just fantastic. And it seems like that's obviously what you can do with XState as well. So thanks for shedding --

**Laura Kalbag:** That's one of the primary goals of XState too, is that it will always be platform-agnostic and framework-agnostic. So you can use it anywhere JavaScript runs, and that means there is no preferential treatment. Yeah, there are a few helpers that will help you with React, and there are packages for Vue, and Svelte, and Solid... But you could still use it anywhere. To be perfectly honest, my preference is generally using it with vanilla JavaScript, because I like to be able to be like "How does this work before I start getting any other frameworks involved?" And that's how I tend to write things, because that's just the world that I come from. I'm an old lady, as many people refer to me... A grandmother in terms of technology.

**Amal Hussein:** Yeah. I'm the grandma on this show too, so you're in good company, Laura... But yeah, so shifting into -- so there's XState the library, which we've obviously covered and talked about... I'm really curious to hear about this evolution of Stately, because that's where I fall off the cliff. Because I haven't been using Stately. I'm familiar with XState, the project, but I'm not familiar with this new as-a-service world that you all have created. It seems fantastical and delightful and amazing. But can you tell us about what is it?

**Laura Kalbag:** Yeah. So Stately allows you to visualize your state machines, but also create them using a drag and drop interface. So it is really easy to get started. And I kind of liken it to using a whiteboard, or making a sketch when you're starting out a project and you're starting to plan out your app logic... You can just start dragging things around. So you can start sticking some states on there, you can start sticking some events on there, you can be like "Oh, actually, I want that event to go to that state. Oh, actually, I want this --" and just model and sort of play around with it until you get something that you like... Or, because everything has to have AI in it nowadays, if you want to be lazy about it - or not. So "lazy" is the wrong word. I've learned it's --

**Amal Hussein:** If you wanna be efficient!

**Laura Kalbag:** ...efficient! Yeah. \[laughs\]

**Amal Hussein:** Efficiency!

**Laura Kalbag:** \[00:43:53.25\] If you wanna be efficient about it, you can also in Stately - you can give it a text description, and it will generate a state machine for you based upon that description. And it's pretty good, because the benefit of having something that is strict as state machines - you're giving the AI assistants a lot of guardrails there, so it can really quickly build something that is pretty decent based on your description. And as much as we'd like to think that we're unique, a lot of the flows we end up building are pretty much the same kind of apps, doing the same kind of thing all the time. So it has pretty reliable results.

And now we've also made it so that you can -- so what we have with simulate mode is the ability to be able to walk through your machine as if it's live. So you can just -- you have the visualization in front of you, but it highlights the state you're currently in, and which events you can go to from there. So that's quite a nice way of just seeing how things work. But you can also export that to Code Sandbox or StackBlitz, and that will enable you to do the same thing, but it will actually generate you a little React app, so that you can click through it... And now we've even got this little enhanced UI button, so you can actually use it to generate yourself a basic react UI just for your state machine.

**Amal Hussein:** What...?!

**Laura Kalbag:** So you could go from just a text description of "Oh, hey, I want to build myself a little onboarding flow. I want to have logins for Apple, or Google, or Twitter, or whatever... I want to have the option for an email signup, and a password. And this is what happens if there's an error, this is what happens if it's successful... Generate it for me." And it will generate you all the buttons that you need, or the handlers that you need, and a little React UI to get you started. Which is -- I mean, it's fun for prototyping. But you could always use it to kick your app off if you're building something small as well.

**Nick Nisi:** Yeah. I'm curious if that would help with the example that I had when I was doing the prototype of it... I didn't have any UI; I only had the state chart to look at. And it was great being able to pass simple messages, but anything that had -- because on the messages you can pass additional data, and I was kind of copying and pasting some JSON, to be like "Okay, now I'm gonna pass this to make it go to this state." Is there anything with that, to help in terms of, I don't know, AI helping you to fulfill whatever requirement is to go to this state, versus that state? Does it generate that in some way?

**Laura Kalbag:** Yeah. So it can generate all kinds of things... It will generate you the rough idea of the state and events that you need, but it can also generate actions. So there's a context that you can have -- you can build it from Stately itself. So you can just build it from little text inputs, essentially... But it will also build in the actions if you need to update your context, and all of that good stuff. So it can do a huge amount of building that logic for you. And it's doing better and better results as well...

One of the benefits, I guess, is that a lot of these LLMs were trained on massive datasets that included a lot of XState machines, so it knows how to build them well because it's based on what developers have been doing for quite a long time at this point.

**Nick Nisi:** It's awesome.

**Amal Hussein:** That sounds amazing and also just like "Whoa. Mind blown." I've kind of come around pretty drastically on AI... I think the first time I saw output from ChatGPT, I was just like "This is scary..." And "This is scary" has really slowly - and I say slowly because I think it's really taken me a year to get here... Slowly turned into "Whoa, I'm gonna be able to do so much more." And that's because I use it -- I don't use it every day, but I use it most days, for different things... And it's been a level up. I just feel like I have a super-assistant, and I can do more with my time. So for folks who are listening to this and are thinking "Oh my God, does this mean my job is gonna go away, because Stately has created --"

**Nick Nisi:** \[00:48:08.17\] Yes. Amal says yes. \[laughter\]

**Amal Hussein:** No, it is not! It just means you're gonna be able to do more; you're going to be able to spend more of your time on things that you can uniquely do...

**Laura Kalbag:** Well, and you still have to give it the instructions, you still have to tell it what you want to build, you still have to know whether it's the right thing... And you'll probably want to make changes and massage it to make it do exactly what you want, and exactly what you need, where your use cases vary from common use cases, where things just might need to be called something different...

**Amal Hussein:** Yeah.

**Laura Kalbag:** And I also think that is one of the things that people don't understand about a lot of AI. And I'm very skeptical about these things. I really worry about us giving so much data and information to these massive or powerful corporations, let alone the AI... But the idea is that here you have to give it the instructions, and you determine what comes out at the end. You have to know whether it's the right thing. And so really, it's useful if you've got a blank canvas, and you're just having to put something down... And that's really valuable in just getting you started. Part of that is when you're writing a text description for something, it's actually forcing you to think about what you need in very clear, basic terms. So really, in that way it's kind of an aid for your thinking. But also, you have to know whether what it outputs is correct, and you need to have some level of skill or understanding to be able to do that. So it's certainly not going to replace our jobs, but it will help us get there a bit quicker, particularly with very repetitive tasks, I reckon.

**Amal Hussein:** Absolutely. So well said, Laura, really. And I, for one, am tremendously excited about seeing all the things that people are going to be able to create. And more specifically, actually, I'm more interested in non-technical creators... Like, what is AI going thing to do -- or I guess it's already technically doing it, because I'm seeing people post online, they're like "I don't know how to code and I just pushed two apps to the App Store." I'm just like "More power to you." Seriously. So I'm excited to see what this does for the creator space, especially the indie hacker space... Because some of the times, like, for independent engineers trying to be entrepreneurs, a limiting factor is like I don't have five other engineers to work with... And so now is AI going to help change that? My guess is yes. So I'm very excited to see that.

**Laura Kalbag:** Yeah. One of the things that I about using state machines in this way as well is the idea that having something that is very strict underneath it can actually help produce very good quality code. It is like we were talking earlier about the problem with those no-code tools is the fact that a lot of the time they produce junk.

**Amal Hussein:** Correct.

**Laura Kalbag:** But if you do have something that is based on those very strict rules, it will help people who don't know very much still produce things that at very high quality. And that's one of the things I also worry about with accessibility, is - well, yeah, if you don't understand what you're building, it's very easy to build something that isn't accessible. And so if we're providing these tools that can help people build things that are high quality, that's a game-changer.

**Amal Hussein:** Yeah. That's so well said. And this is such an exciting time to be alive. I've said this several times this month, and several times this week. I'm serious, it really is. I'm seeing some great products from tldraw, and excalidraw, and they're doing some really cool things, especially with AI, without AI, just like - whoa. Just really leveling up that experience of collaboration, really. Because this is really all about collaboration; that's what this all is, right? Especially what you were doing with Stately, and state machine as a service, like "How do we all get on the same page in an easier way? And how do we all collaborate and better serve our users?" And so it's just tremendously exciting stuff.

\[00:52:01.04\] So I have to ask an obligatory testing question, which is "How do we use XState and Stately to better improve our testing infrastructure, our tests, unit tests, integration tests, especially end-to-end tests?" I'm curious, how do we solve that problem? Because that's a very unsolved -- it's not a fully solved problem, I should say.

**Laura Kalbag:** Well, I'm very glad you asked, because one of the things that's \[unintelligible 00:52:23.06\] about state machines is using model-based testing. So you can test against the paths that you have set out in your state machine. And one of the features that we added fairly recently to State Studio is that you can generate test paths now based upon your models. So you can decide whether you want to generate all the possible paths, or whether you just want to have your happy paths... And it will actually also generate the code for that to help you get started implementing it. I think right now we also support - I think it's Playwright for implementation... But we also just sort of give you a rough way of working through all of those paths that you can use with any of the testing frameworks as well.

**Amal Hussein:** Wow, that's pretty cool. So what's been feedback in the wild, I think both on this model-based testing, as well as just in general, with all the release of the stuff that you've been launching at Stately? What are customers saying, and how is this helping them?

**Laura Kalbag:** Well, \[unintelligible 00:53:19.13\] generally quite new to model-based testing... And I think it is really valuable in comparing things to how people are going to actually use things day to day. So testing the right things, really. And honestly, this feature is so new, and not particularly publicized yet, because we've been really focusing on a lot of bigger features, that I'm not sure that that many folks are using it. So hey, if you're listening to this right now, go try it out. Tell me what you think. I'd love to know.

**Amal Hussein:** Yeah. This is the first time I've heard about it as well, so I was just like "Very cool." I know David especially is kind of a quality nerd, right? ...hence working on something like state machine.

**Laura Kalbag:** Absolutely.

**Amal Hussein:** And when I say quality, it's not so much like QA, like what developers think of; it's more actual quality and robustness and predictability of your applications... Because that's the thing, you don't want unpredictable behavior. Even if we get into an error state, you want to have control of that error state, because you directed the code that way, and it's doing what you want it to do when it errs... And so that's just really fantastic. I think if you guys get that piece of the puzzle, that it really just kind of closes the loop on quality.

**Laura Kalbag:** It's what state machines is all about, is really that predictability, and being able to have that control. I think that that's really the benefit of it. And a lot of these other features that we're providing are kind of just nice side effects that come as a result of having that level of predictability and control.

**Amal Hussein:** So I'm looking at your website and it's like Features, Design, Build, Deploy, Understand. Deploy and Understand are the two things that I think I'm less mentally familiar with... So can you walk us through, obviously, what that deployment flow looks like for folks that are using Stately?

**Laura Kalbag:** Yeah, absolutely. So this was one of the features that I demoed in my NodeConf talk the other week, so it was a fun opportunity for me to get playing with this. And it's now that you can deploy your state machines as live actors... And what that does is you literally just hit a button, grab yourself an API key and a URL for your actor, and then it deploys it on Cloudflare using edge workers, via PartyKit, which I'm pretty sure you've probably heard of before, because --

**Amal Hussein:** Oh, yeah. Sunil has been on our show. I'm gonna get bleeped out, but PartyKit's the hot s\*\*t in town, so yeah...

**Laura Kalbag:** \[00:55:50.05\] \[laughs\] Yeah so we worked with PartyKit to create this ability to deploy your live actors. So I guess you could think of them as workflows at this point as well... So that gives you the ability to have them running live, so you have a state machine that you can interact with that is live there already, and also because of PartyKit it enables you to have multiplayer in there, too.

So the demo that I did at NodeConf - it was quite a silly thing. It started out as - I've been doing a lot of demos with white noise machines lately. I'm obsessed with them, because my dog likes white noise machines... And I was trying to build like a fun, interactive demo where you do that... And my demo that I did at NodeConf made use of having these live actors, or one live actor really... And what it enabled was we could have this fun little state machine where everyone has their own state that they're interacting with, that enabled me to play a nice sound, and have a nice colored background of the app... And all the sounds were played by everyone's devices separately. So it generated a random sound, so it kind of had this cool, tonal effect, that everyone around the room was listening to this lovely soothing sound... But shared on all of our screens using the multiplayer aspect I had these little stars; so every time someone joined or someone left, they were represented by a little star in a little nightscape situation. And it was just a very simple demo to show "Hey, you can have things that are individual, state that's individual to the user, but you can also have shared state, shared sessions as well."

**Amal Hussein:** What a time to be alive... That's all I have to say. No, honestly, it's just fantastic. It's also fantastic to see how PartyKit and Stately are playing off of each other as well, and collaborating in this space to supercharge both experiences. I think you're giving PartyKit this real-world, very applicable use case for why you would want to have multiplayer, and then obviously PartyKit is giving you the infrastructure to be able to do that. It's really fantastic.

**Laura Kalbag:** Yeah. And it's nice because - yeah, PartyKit is easy to use as it is... But really, in order to deploy a state machine from Stately, you don't actually have to touch any code at all. And it's just the point where you want to implement it where you can pull in the URL to get the state machine. But then you would interact with it the same way as you would do any other state machine; you can send events to it, and use that to orchestrate your state. So you really don't have to know very much to get it going.

**Amal Hussein:** Yeah. And that's just what developers want, right? ...minimal knowledge, maximal impact. That's our motto as software engineers, especially writing JavaScript...

**Laura Kalbag:** But also knowing this stuff is not going to fall to pieces behind the scenes because you don't know exactly how it works as well.

**Amal Hussein:** Yeah, absolutely. So how do you handle versioning? And I'm also curious for this deployed state machine, if somebody edits something on the deployed version, and then publishes a new version, and I'm running an app in production, does my stuff just grind to a halt? I'm just wondering what's the control flow here.

**Laura Kalbag:** Yeah, so right now we're working on a GitHub sync, so that you can have the explicit version of your machine in your code. But for the live machines and for Stately in general we've actually got version history, so you can have as many versions as you'd like and you can sync them up. And the version that you deploy is kept there, at that version. So if you create a new version, you'll need to deploy your actor again. So you're not just going to suddenly break all of your code in production.

**Amal Hussein:** And then it would require a code update in your application to pull in the new version, right?

**Laura Kalbag:** Yeah, you'd pull in the new URL for the live actor that's been generated, yeah.

**Amal Hussein:** Okay. So it's not like this unhashed URL that's just like "Get the latest, no matter what the latest is." There is like a hard version.

**Laura Kalbag:** That's pretty scary. Yeah. \[laughs\]

**Amal Hussein:** I know, that's what I was wondering. I mean, I'm just thinking of worst-case scenarios.

**Laura Kalbag:** \[00:59:57.22\] Yeah, no, totally. It's good to think of these. And this is a feature that's really early on. What we're hoping is that we're going to continue building more and more of XState's features into the studio itself, so that you can do more and more without having to write it as code. And all of that will be reflected in what you can do with these live actors as well... The live actors all work with XState v5, so you get all of the benefit of those features... But we're going to keep building more and more in, so that they become more capable, too.

**Amal Hussein:** Makes sense.

**Nick Nisi:** I was chuckling because I was just thinking, like, forget AI; Stately is coming to take my job... \[laughter\] In a good way, in a good way, because... Yeah, having that, and having the ability to easily roll back and to just have it deployed in a really nice, easy way is - that's awesome, and I'm excited to see where that grows. So going into the understand part of that - is that where that fits in? Having it all hosted there means that you can have documentation around it, or that you can use it to generate documentation? How does that work?

**Laura Kalbag:** So that's totally -- so the understand part that's on the landing page is really focused around, yeah, you can use it as your source of truth, and you can use it to generate state machines, and things like that. One of the values of having all of this is that you can use it for documentation as well. So having it as a source of truth is really valuable, but it means that you can also do things like hey, imagine in the future if you had a PR, a pull request, and when it was updated, it had a little picture of how that state machine has changed. So you visually get an idea of "Oh, this is how it's changed."

You can do things like -- you can generate documentation from it. So right now we have formats where you can export it as markdown. If you want it to have a list of requirements, you can export it as stories. If you want to use it for more of your experience design, and for the test files, you can export it as that as well... And we have things like "Oh, you want to summarize what's going on in the whole of your app logic?", another one of the little AI features that we added recently is you can just generate a summary of your state machine and it explains what the whole of it does.

**Amal Hussein:** Wow... That's my executive summary right there. It's the thing you share with your manager's manager's manager, you know?

**Laura Kalbag:** Yeah, and one of the --

**Amal Hussein:** Or your release notes, to be honest with you.

**Laura Kalbag:** Totally great for release notes. One of the accessibility things that I find really useful about it is a lot of the time I'm producing stuff that has images of state machines in, and writing alt text, alternative text for those images is a nightmare. Because you're trying to regurgitate what is a really big, complex web of things potentially into some text... And now I just have a button that does it for me.

**Amal Hussein:** That's incredibly cool. I mean, for me, it's just like, I love this -- well, first off all, especially for folks who have never used XState, or who are not familiar with state machines, or who are maybe familiar with state machines, but have never used the syntax, or whatever... Being able to actually just explain your description, like what you want the thing to do, and then being able to actually have a decent working prototype of a state machine, and being able to play around with it... It feels like we've just really smoothed out the on-ramp for everyone...

**Laura Kalbag:** Yeah.

**Amal Hussein:** ...and I hope people use it that way. I hope they use the AI to help with figuring out how this works, learning the API... It's a teaching tool just as much as it is actually a getting stuff done tool, I feel...

**Nick Nisi:** Plus that visualizer will also come in very handy a year from now, when you have to go back and revisit that logic...

**Amal Hussein:** Oh my God, tell me about it.

**Laura Kalbag:** \[01:03:46.08\] A hundred percent. Well, if anyone who's listening has used XSate before, but hasn't actually ever visualized their state machines, I would really recommend you try importing your state machine \[unintelligible 01:03:54.05\] You can import it from a GitHub file as well, or for from a repository... And if you can't remember where your machine is stored, it will do that for you, too. You don't have to remember the exact section of code. And yeah, then you can look at your work in a completely different way, and I do you think it gives you a different level of understanding.

**Amal Hussein:** Yeah, that makes sense. And this is probably a good time to talk about usage... So there's a community plan, and a pro plan, and then the team plan, and then the... Enterprise plan! That's where you talk to somebody, work out a price... You know? Negotiations are made behind closed doors. But can you tell us about the community plan, which I think is probably the most applicable to folks? And as well as like the pro and team plans.

**Laura Kalbag:** Yeah, so we've actually very recently updated these plans so that it's not like a seat-based situation anymore. So the community plan is free, and will always be free to everyone. And you can import, and visualize, and build as many state machines as you want, for free, and you can save them as public projects, you can share them with people, you can embed them in iFrames, you can export them... We don't block any of that stuff and you can do that all for free.

The Pro features enable you to do some other cool things like exporting to additional formats, like Markdown, and being able to have version history.

Colors - so this is something I didn't mention earlier, that really appeals to me, because I went to art school - is that you can add colors to your states and your transitions, which... You can use it to "Oh, I want to maybe color the happy path", or "I want to highlight a particular area", or I just want to make it look pretty. And it's all those things that help bring in outsiders as well who might not be familiar with building your app logic in this way. You can use it to say

"Hey look, this looks nice and friendly and colorful and appealing to you." And so Colors are great for that.

And the Teams allows you to have shared projects; you can have viewer-only roles and things that, and you can invite people to share your projects. On the Pro Plan as well you have private machines and unlisted machines, so you can share them with folks without sharing them with everyone. And yeah, enterprise has all the usual good enterprise stuff.

**Amal Hussein:** Yeah, SSO, and audit logs, and all the things you want when you're a big enterprise. That makes sense. And more things, obviously...

**Laura Kalbag:** The community plan - it's the same with XState, it will always be free as well. And it will always be free and open. So everything that you can build there will be completely interoperable, and you don't need to worry about any lock-in. Stately might be a business, but it doesn't mean they're trying to lock your code away from everyone else as well.

**Amal Hussein:** That's dope, yeah. That's really fantastic. Like I said, I mean, I love this tool. Sometimes you see yet another SaaS company getting created, and you're like "Really?" But this is one where it's just like "Yes!" Because I'm like "Yes, we need more companies using this for state management. More of this, please", you know...

**Laura Kalbag:** Yeah. And I'm not speaking about myself, but about -- Stately is just a really tiny team. There's only nine of us right now... And it is some of the smartest people -- not just smartest, but also kindest people I've ever worked with... Which, I think as you know, working in tech - not always a given... And it really is really smart people, who care about building good things that people really want to use. And I think that's one of the benefits to Stately, and I hope it comes through. They're really speedy. The amount they produce for such a small team, in such a short period of time, is amazing. But also the fact that they actually do it with the right principles behind it... So they want to help you ship robust application logic, not just produce a lot of junk code.

**Amal Hussein:** \[01:07:56.21\] Yeah, yeah, no junk. No junk, no fluff, just stuff, right? That's super-cool. So David is very sweet, very kind, and he's actually extra-kind to me, because back in the day I talked to David about "Oh my God, you're such a good piano player. We should do a collab", because I like singing. I'm not good at it, but I do enjoy it. And I was like "Wouldn't it be cool if David Piano and I did Tiny Dancer", I think? Is it Tiny Dancer?

**Laura Kalbag:** Nice.

**Amal Hussein:** Tiny Piano?

**Laura Kalbag:** The Elton John song?

**Amal Hussein:** Yes, the Tiny Dancer. Yes. Because I think he had a tiny piano behind him, and I think we were talking about the tiny piano, and I was like "Let's do Tiny Dancer", and he's like "Let's do it." He's like "I'll send you my piano recording, and you can sing over it." So David, if you're listening, I have not forgotten about that. It'll happen someday... Maybe someday in 2024 we'll do our collab remotely. But I'm so glad to hear you're enjoying yourself, I'm so glad to hear that the team is doing well. Thank you so much for telling us about all this really cool stuff. I don't know, Nick, is there anything else we want to ask Laura about? Oh yeah, I'm not supposed to give you last word anymore... Because you took us on a really bad tangent last time.

**Nick Nisi:** \[laughs\] Well, I do have a tangent, but it's a really good tangent, I think.

**Amal Hussein:** Okay, fine, fine.

**Laura Kalbag:** Go on then.

**Nick Nisi:** And it's not really a tangent... I was just gonna say, while you were talking about it, I was mostly paying attention, but also -- \[laughter\]

**Amal Hussein:** Forgiven. Forgiven. It's fine.

**Laura Kalbag:** Well, it depends what he says next.

**Amal Hussein:** Right, that's true. That's true.

**Nick Nisi:** I'd better just stop there... No, no. I happened to log into Stately Studio, and I just imported the JS Danger quiz game into it... Because if you don't know that Jeopardy-style game that we play on JS Party, it's all written with XState backing it. So I imported the machine in there just to visualize it, and - yeah, this is really cool.

**Laura Kalbag:** Nice!

**Amal Hussein:** We'll put it in the show notes.

**Nick Nisi:** Yeah, I'll take a screenshot.

**Amal Hussein:** That's so cool, Nick. That was a good last word. You've redeemed yourself, really... Because last week we were talking to Una Kravets, who's an amazing human being... Web ambassador, queen/king of the web... She was schooling us on all things CSS. And then this dude has the guts to talk to me about Tailwind, and I'm just like "No, no, no, Nick. This is a show about the web platform. Okay?"

**Nick Nisi:** So Laura, your thoughts on Tailwind...

**Amal Hussein:** Yeah, no...!

**Laura Kalbag:** Do not get me started.

**Amal Hussein:** Thank you! Thank you, Laura. I knew there was a reason why I liked you. Okay? So Nick, you've redeemed yourself... Good job. Now it's going to be your job to put that link in the show notes, okay?

**Nick Nisi:** Absolutely.

**Amal Hussein:** Make that happen, so people can see it. And again, Laura, thank you for talking to us. David, you're listening... We're gonna hopefully have you back six to eight months, and you'll tell us about all the new things... And I just want to say thanks for being awesome. Everyone go to NodeConf next year... Let's see, what else? I don't know. Nick Nisi for TypeScript president? I'm just kidding. No, no, no. No, I think that's it. So where can folks connect with you online, and how can they follow your work?

**Laura Kalbag:** You can find everything Stately at Stately.ai on all the various platforms. And you can find me, Laura Kalbag - I am the only one; very easy to find, very SEO-friendly...

**Amal Hussein:** Nice!

**Laura Kalbag:** ...and you can find me everywhere at @laurakalbag.

**Amal Hussein:** That's like the only unique Laura. That's awesome.

**Laura Kalbag:** Yeah. You go to combine an English first name with an Indian surname... It's a guarantee it'll be pretty unique.

**Amal Hussein:** Right, right. I think I had a missed opportunity of introducing you as Laura Kalbag, who's the English person, the non-EU citizen, or something that? I think that was what it was...

**Laura Kalbag:** Yeah... She's so sad she's no longer an EU citizen.

**Amal Hussein:** Yes, yes, exactly. \[laughter\] She's so sad that she left England to go move to an EU country... Ireland...

**Laura Kalbag:** Yeah, one more year... I'll get my \[unintelligible 01:12:06.02\]

**Amal Hussein:** \[laughs\] That's awesome. Alright, everyone, so that's our show for this week. everyone. Cheers... Take care... Bye..!
