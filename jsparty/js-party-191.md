**Nick Nisi:** Hello, internet. Welcome to JS Party. I'm your host this week, Nick Nisi. Hoy-hoy. I am joined by two wonderful co-panelists. Kball. What's up, Kball?

**Kevin Ball:** Hello! Good to be back. Hello, everyone.

**Nick Nisi:** Welcome. We're happy to have you back. And I'm also joined by Amal. Amal, how's it going?

**Amal Hussein:** Hello, hello. I'm having a fan girl moment, so I have to restrain myself today.

**Nick Nisi:** Absolutely. I think we all are. It's a very exciting podcast today. Today we are talking to David Khourshid. David, how's it going?

**David Khourshid:** Going good. How are you all doing?

**Nick Nisi:** Fantastic. And we are talking about you and your fantastic project, XState. Why don't we kick off learning a little bit more about you? Tell us what's up.

**David Khourshid:** Sure. So you might have noticed my screen name, DavidKPiano. Piano is not my last name, as you probably surmised... I went to college for piano and then discovered that doing web development actually pays a lot more than playing piano, so I sort of switched fields, went into that. I started at a startup as a junior developer, and it was like this startup where there were just all of these crazy workflows in multi-part forms... And one of those things were like you would click a check box and then a certain field would show, unless this other check box was clicked, then you'd have to do this and you might go to a different step etc. That was just really confusing to me as a junior developer, so I'm like "There's gotta be a better pattern for doing all this."

So I was doing some research, and I actually just stumbled upon state machines. So it's nothing that I learned at university, like a lot of other developers might have learned. It's just like "Wow, this is a nice visual language, and I'm a visual learner", and as a musician, that's important too, because you have sheet music, which is a visual way of representing what you're supposed to play. So I was like "Hey, I really dig this visual language. Let's dig more into it and actually find out why it's not more popular today."

Fast-forward a few years, I decided to just put all of my learnings into what at the time was a toy project. I actually called it Estado, like the Spanish name for estate, but I eventually changed the name...

**Amal Hussein:** \[laughs\] That's awesome.

**David Khourshid:** Yeah. So that toy project had all of seven GitHub stars for many years, until I actually decided to give a conference talk about it... So yeah, it became XState, and here we are. I have a lot of really good contributors working on it, and I'm just really excited where it's gotten to right now and where it's gonna be in the future.

**Kevin Ball:** Before we dive into XState, I'm curious to hear more about piano. Do you still play a lot? I know multiple developers who development is their -- it's their equivalent of serving tables. It's how they pay their way for either professional music or professional theater or whatever it is career. So are you still going strong on the piano?

**David Khourshid:** Yeah, I am. In fact, my piano is right here. Actually, the piano is actually over there, but I have a Lego piano right there.

**Nick Nisi:** That did look very tiny.

**David Khourshid:** Yeah, yeah.

**Amal Hussein:** Tiny piano...

**David Khourshid:** It is playable, actually.

**Nick Nisi:** Really?

**David Khourshid:** Yeah. From time to time I still perform, just at small concerts, things like that. So yeah... I try to keep it up.

**Nick Nisi:** That's very cool. And is there any kind of correlation between instruments like that and state machines, now that you've really dug into those?

**David Khourshid:** I would say the only correlation is the fact that -- what I talked about, sheet music, a visual representation of like... You have notes, and bar lines, and just a really limited set of notation for expressing a huge variety of music, like centuries' worth of music... And I'm like, "Okay, is there any sort of visual -- whether it's called visual \[unintelligible 00:06:27.20\] that exists for application logic in the same way?" So I think that's the connection. State machines and state charts can really describe not everything, but almost everything.

**Amal Hussein:** Okay. So I'm really digging this analogy, and... I don't consider myself a state machine nerd, because I'm very familiar with people who really love nerding out about state machines, and a lot of my state machine nerd friends who happen to also write JavaScript for a living love XState, and I'll share some interesting back-stories later... But this kind of analogy of the state machine needing a visual representation, and how it's similar to sheet music... If you really think about an orchestra - I mean, it is this giant kind of state machine between multiple musicians that need to coordinate events and activities in a synchronized fashion, for a set duration of time. It really is a very interesting analogy, and I think your background and your story is just one small example of why diversity in tech is super-important; not just age, and race, and \[unintelligible 0:07:41.22\] Literally, like - what did you do before this job? That unique perspective that you bring - it shows in the way you approach problem-solving, so we're really lucky to have you, and I'm glad you've picked this profession to help pay your bills as well.

**David Khourshid:** Thank you.

**Nick Nisi:** \[00:08:01.25\] So before we dig too far in, maybe let's take a step back and define what a state machine is.

**David Khourshid:** A state machine - it's one of those things that sounds really complicated. It's like, "Oh, I need to go get a CS degree or something in order to really understand it." But as scary as it sounds, it's actually pretty simple. A state machine is... You could describe something - even a human; let's take me as an example - as being in one of a finite number of states. And I can't be in one more than one of these finite states at a time.

An example of a finite state would be sleeping, or awake. I'm either sleeping or awake. I can't be both sleeping or awake, otherwise I'd have to go see a doctor and deal with that whole thing. Don't wanna do that. So I can only be in one of those states, and I could also transition between sleeping and awake. So if my alarm goes off, hopefully I go from the sleeping to the awake state. So what finite states really are are behaviors... And by behaviors I mean how you or how some entity reacts to events. I'm gonna react differently to events when I'm sleeping versus when I'm awake.

So finite state machines are just a collection of those behaviors or finite states and events that come in. So a more practical example - I mean, this is JS Party after all, so let's talk promises, and fetching data. You're either loading data, or the data loaded, or there's an error, but you're not gonna have more than one of those happen at the same time. You can't get both error and success, or you can't get both loading and error. And the problem today is that there's lots of applications where they do do that. I'm sure you've run into an application where it's like, "I know my internet's fast, but this loading spinner has been going on for like two minutes now... I'm pretty sure there's an error, but it's just not gonna tell me. It's gonna show the loading spinner indefinitely." So problems like that are solved by state machines, where that's impossible. You can't be both in an error state and in a loading state. You have to be in one of those.

**Amal Hussein:** Wait a second, David... Are you not familiar with a tiny little project called GraphQL? \[laughter\] Because I feel like GraphQL has broken all the rules there... I mean, you can get your success response, you can get a partial response, and you get a list of your errors. And of course, zero respect for HTTP codes, and everything is a post, and like "What the F?" You know, I love GraphQL, but some things about the spec are really bothersome to my heart.

**Kevin Ball:** I think GraphQL is highlighting David's point, right?

**Amal Hussein:** Yeah, yeah.

**Kevin Ball:** So the web in general - anything on the web, people will say "Hey, can this happen?" Hey, it's the web. Anything could happen. You could ask for things in order, they could come back out of order, all these other things... And what the state machine lets you do is collapse that infinity down to a few manageable states you can think about.

**Amal Hussein:** Right. Some determinism right? You want determinism.

**Nick Nisi:** You used that word "finite" - is that just synonymous with state machine? Like, if you're talking about a state machine, is it always a finite state machine? And does the word "finite" mean there's a finite number of states, or three's a finite number of states it can be in at once?

**David Khourshid:** So finite is basically how you organize all of the possible states that your application can be in. So it's more of a communication mechanism than reality, because obviously, in this world there's an infinite number of different states that things can be in. But finite is just for grouping.

For example, sleeping versus awake - my body is still the same number of cells, it's just that some are... I don't know how -- I didn't take anatomy. But it's just that we discreetly define sleeping and awake as two separate states. So again, it's a communication mechanism, and it's a necessary one too, because we as developers wanna talk about what can happen in certain states, instead of "Oh, just check this boolean flag, and if this is false and that's true, and this and this are false, then do this." That's really confusing. So yeah, it's a social construct, sort of...

**Kevin Ball:** \[00:12:12.09\] I think we do have to be careful, too. Sleeping and awake is a really convenient pair to talk about, but we need some sort of way to capture the state of mind which is "I fell asleep on the couch, but now my 8-year-old has jumped on top of me." I'm definitely not all the way awake, but I don't think sleep captures that either.

**David Khourshid:** Right. I mean, we're going really forward here, but that's where you get into state charts, where now you have all of these little states, like this half-sleep/half-awake state, where you're definitely not sleeping and you're definitely not fully awake, but you're like in between there... But you could say that's a subset of being awake. Or maybe a subset of being asleep, however you wanna categorize that. And state charts help you organize that.

**Kevin Ball:** I like that. So I haven't dealt that much with layered state machines in that way... So how do you think about that when you have these sort of sub-states that are going on? Is it kind of similar to what you might think of as a class hierarchy or something, where you inherit things from the above state, but you can override things? Or how else would you address that?

**David Khourshid:** It's not so much inheriting, it's more just grouping similar behaviors together. The way it works is my event propagation, too. Basically, when you have a state and that state has nested state, those nested states take priority, so if an event happens, those smaller child states are going to respond to it first, and if it doesn't handle it, it goes to the parents etc.

All state charts can be made into state machines, it's just that when you convert the state chart to a state machine, you get what's called state explosion, because you get al of these unorganized states. Honestly, I think this is sort of meta, but that's one of the biggest reasons for the learning curve behind XState, is that there's so much to learn with state charts... But I want to emphasize that state charts are just an organization mechanism. It's one of those things where you don't have to learn at all before you start using it. Just know that there are tools there that help you better organize your states. And all of this is a lot better than, of course, organizing it like a ton of boolean variables.

**Kevin Ball:** So if I was to play that back to you, the state machine is essentially the flattened version.

**David Khourshid:** Yeah.

**Kevin Ball:** It doesn't have all the context of how these states relate to each other, except in the rules that are written out. So it can be potentially hard to understand that higher level structure... Whereas the state chart is kind of a grouped set of state machine pieces, so that you can see that bigger picture a little bit more. "Oh, these are really substates of this, and this is how they relate to each other, and what priority." Is that a fair assessment?

**David Khourshid:** Yeah, exactly. Imagine making a web page where you have no nesting of elements. That would be your state machine. So state charts are sort of a revolutionary thing that says "Hey, you could nest elements however you'd like."

**Amal Hussein:** Yeah, it's a really great summary and analogy, David. Great summary, Kball, great analogy, David. So props, points for both of you. So for me, I think this concept of encapsulated states is maybe something that isn't explicitly said here... Having that encapsulation where nested states are not necessarily triggerable by higher-level state machines, so you have to get to this path, and take this left, and take this right in order to trigger this nested state - that's kind of cool, but I think for me it kind of... It still goes back to that age-old question of global application state and when to encapsulate what. If you have a calendar widget and users picking their dates, and maybe that's part of a form, and let's say you wanna have some form state - what are you persisting, what are you saving, what's the application state if the user wants to rehydrate after a refresh? Where are you bringing them back?

\[00:15:55.26\] And for me, that's something that XState doesn't have as strong an opinion on, right? It's kind of like, you design it how you want to. However, I do think there are still some principles around encapsulation, when something can be shared by other things, and when it should trickle down, and also the directional management of state events... That's still a little bit fuzzy, I think, for most folks, including me. I always have to think about it. It's not always like an automatic thing for me, where I know how this is supposed to flow. And it's okay to also refactor and you get it wrong, you know?

**David Khourshid:** Mm-hm. So that's where we get into the actor models. So that's sort of like the second half of XState, which again, people think it's a big learning curve, but it's actually a lot simpler than you might think. So with the actor model, instead of having just this one giant state chart determining, or even ad-hoc machines, like just figuring out the logic for different components, you have this actor model where you have individual actors where -- you can think of them as class instances, or just things that you could send messages to... And the behavior of each actor is guided by a state machine. So an actor can send a message to another actor...

For example, you could consider, if you're listening for \[unintelligible 00:17:15.05\] events on a DOM element, that's an actor. So when you're setting up an event listener and checking for those mouse moves, you would send those events probably to something else. So that would be another actor. That actor might be in charge of coordinating all these movements... You know, if it's a drag-drop actor, or something like that. That's another conceptual shift, at least in frontend development - thinking of everything in your app as just little entities talking to each other... And it's also something that's very different than, for example, Redux, where Redux it's like "Okay, everything is in this one global store", and if you don't have things that fit in this global store, good luck. Find somewhere else to put them. They can't live in Redux.

XState takes a different approach. It doesn't matter if it's local or global, you can set up that actor hierarchy however you want and access it wherever you want.

**Kevin Ball:** That sounds to me a lot like the type of encapsulation we're used to thinking about in terms of data for component-level data... But in this case, it's not just data, but it's this whole state machine of like "What are the potential states?" Is this once again sort of syntactic sugar to help us think about this? Could you compile that up into a single global state machine if you wanted to? And if so, are there any sorts of interesting analyses or invariant checkings we can do on that?

**David Khourshid:** As far as like compiling a bunch of actors into a single state machine, I would say not really. It's sort of like asking "Can we compile all four of us into a single mega-human?" It doesn't really work that way. As far as state machines itself, that could compile down to just normal code. You don't need to use a library. And in fact, I wrote an article, "You don't need a library for state machines." Actors sort of work the same way, too. It's just this contract between objects where you could just talk to different objects...

**Amal Hussein:** So what constitutes an actor? Also, by the way, does this mean, Kball, that nine women can't make a baby in a month? Because that just ruins my plans...

**Kevin Ball:** I have heard that, yes... No, I guess where I was trying to get to is - conceptually, where are the lines of a state machine? Because one of the real benefits of state machines is that they're extremely analyzable. You can put something in an exact state, you can reproduce that state exactly, you can always understand what's gonna happen here. And when we talk about breaking apart into actors, there is in and of itself kind of a useful abstraction there, right? The actor model, if we're thinking about things, is quite useful. Message passing is a nice way to delineate things, and within each actor you have that property of - there's a nice, analyzable state machine.

But it does make me wonder, if we put in the restriction of only actors can send messages to actors, so we're keeping -- everything is within our model of XState state machines... And to be fair, I've never played with XState, so this is all hypothetical in my head.

**David Khourshid:** That's fair, yeah.

**Kevin Ball:** \[00:20:14.02\] You have a much more concrete model. At that point, every message is potentially the result of a state transition or something along those lines... So conceptually, these state machines are part of a larger global state machine. If we say "Only actors can send messages to actors, all actors are themselves state machines", then we should be able to do some amount of combination of actors and say "Okay, even though it's a useful organizing technique to have these be isolated, we can model them as one larger thing, so that we can run global checks and say "Are there loops that we might get into, or other situations where this is not a valid state machine?"

**David Khourshid:** Alright, I understand you now. So yeah, this is more along the lines of orchestration. With orchestration you have this hierarchy of actors where - again, this is not global state like Redux, but you have a global orchestrating actor, and then you have maybe child actors that respond by it, and those child actors could also spawn child actors, and all of these actors could be talking to each other, but you are ideally organizing your app in a way that you have a central orchestrator, just like an orchestra conductor, that is receiving messages and maybe delegating to other actors "Okay, you do this and you do that." Sort of like working at a company where it's not co-workers telling each other what to do, at least hopefully. It's more like the manager is understanding what needs to be done, is getting changes as they happen and other signals, and then is telling their employees like "Okay, you do this, you do that."

So doing it that way, you could think of just this massive network of actors as just like you have a central orchestration unit and events come in from the other actors. So you don't need to worry about like "Okay, how do we combine those actors together?" Just note that there's a potential number of events that are gonna come from somewhere. So with that, you can fully test your orchestration and ensure that "Hey, if this event comes in, this is gonna happen. If this other event comes in, then this behavior might change, and this might happen."

So abstracting it that way - it actually makes it a lot easier to test. And that's sort of one of the central ideals behind model-based testing, it's called... Where you're not even thinking about "Man, I have to mock this, I have to make sure that this is integrated with that." It's more like "Okay, everything is just events." So you receive those events and you receive just a whole bunch of combinations of events, and you ensure that the states resulting from those events is as expected according to your model.

**Break**: \[00:22:55.20\]

**Amal Hussein:** \[unintelligible 00:24:22.28\] that happened, because XState was originally formally known as Estado.

**Nick Nisi:** Not to derail, but I would love to know why you didn't stick with that.

**Amal Hussein:** Yeah, exactly.

**David Khourshid:** I don't know.

**Amal Hussein:** Who made you change it, darn it?

**David Khourshid:** Okay, there was Redux, MobX... The whole X thing was going on, so I'm like "Okay, I have to find something with X." And XState was available, so I took it. And then I backpedaled and added meaning to the X. It means like a transition, like a crossing of some sort... I had no idea what they mean in Redux and MobX, but at least I came up with some sort of meaning.

**Amal Hussein:** They mean nothing.

**David Khourshid:** It's just cool. \[unintelligible 00:25:05.16\]

**Amal Hussein:** \[unintelligible 00:25:06.10\] and GitHub names... But anyways. So - back to question time. We talked a little bit about orchestration and actors, we kind of did a little bit of a deep-dive, so I'm just gonna ask you to take a few steps back, because I'm a little lost... So can we talk a little bit about what actually constitutes an actor, what is an orchestrator, and really what are the general moving pieces for production-level XState state machine?

**David Khourshid:** Yeah. So actor - think about ourselves, really. I'm an actor -- not like an actor actor, but I'm an entity, and I'm just calling us an actor. Nick's an actor, Kball's an actor, Amal, you're an actor, so --

**Nick Nisi:** I'm an act-or.

**David Khourshid:** Yeah, act-or... \[laughs\]

**Amal Hussein:** I'm actually a diva, thank you very much...

**David Khourshid:** Alright, well - subset of actor.

**Kevin Ball:** Yeah, specialized sub-class of actor.

**Amal Hussein:** Thank you, thank you, gentlemen. Thank you.

**David Khourshid:** So with actors, what we're doing right now is we're talking to each other, we're sending each other messages... So that's one of the primary functions of an actor. The way that actors communicate is by sending messages. So actors can send messages, actors can receive messages of course...

**Amal Hussein:** But can they choose what they wanna listen to?

**David Khourshid:** They can. That's an actor's behavior. So I have a behavior, and that behavior can change, depending on the message that I get... You know, like if someone offends me on Twitter, then my behavior might be a little bit different. So it depends on the messages you receive. Also, actors have their own local private state. So with this whole analogy, I have thoughts in my head right now, you're all thinking something... I don't know what those thoughts are; I can't read your mind. So how do I get that information out of you? Well, I ask you. Just like you're asking me questions right now; we're sending a message, and we're hopefully anticipating a message back, otherwise it would be really awkward. That's how actors communicate.

So actors are just things that send and receive messages. Now, actors could also do things like spawn other actors and just create this network of actors, but those are the three basic parts of actors.

**Amal Hussein:** So just to recap - it's sending messages, listening to messages that you subscribe to, and then spawning other actors.

**David Khourshid:** Exactly. And that's all there is to it.

**Nick Nisi:** Actors are state machines as well, right?

**Amal Hussein:** Well, they encapsulate state machines, right?

**David Khourshid:** Yeah, you can think of it that way. So actors exhibit state machine behavior, whether it's implicit or explicit, just because state machines and actors go really well together. Since actors define their behavior based on the events they receive, and that's exactly how a state machine works.

**Nick Nisi:** Would you have a scenario where there's no actor, it's just the state machine?

**David Khourshid:** Well, so a state machine - it's like a blueprint; it's a description. It's like saying there's a blueprint of a house, but there's no actual house. So yeah...

**Amal Hussein:** \[00:28:02.10\] So then can an actor contain an actor, contain an actor? Is there infinite levels of nesting? So actors, even if they're nested and encapsulated, they still can listen to messages that are outside of their immediate scope? Like, in the upper levels of the bubble, versus the inner...

**David Khourshid:** Yeah, so -- first of all, yeah, actors could span actors all the way down. But as far as receiving and sending messages, that's another constrain of actors, in that I can only send messages to someone that I have contact with. So right now, I could talk to all of you, but if I want to talk to someone in the YouTube chat or some other livestream somewhere, I don't have a direct connection with them, so I cannot do that right now. And likewise, if you don't have a connection with me, then you can send messages to me. Same thing with actors.

So the way that actors talk to each other is by having reference to other actors, like having their email address or phone number.

**Kevin Ball:** That raises a question that I had, which is are all these messages point-to-point, or can you subscribe to messages so you could get like a multi-cast type of phenomenon going on?

**David Khourshid:** Yeah, so actors are just the building block, and you could create abstractions on top of that. So one of the most popular libraries for just the actor model in general is \[unintelligible 00:29:12.27\] ecosystem. They also have the notion of subscribing in topics and other things you might find, like multi-casting, and all of that. So yeah, you could definitely build abstractions on top of just those basic actor model rules. For example, if you want to build your own subscription mechanism on actors, it's nothing new. It's just "Okay, as part of my internal state, I might have a list of subscribers", and whenever a subscriber sends a message saying "I want to subscribe to you", I add it to that list of subscribers and now I have a reference, so when I feel like emitting or multi-casting something, I will go to my list of subscribers and just iterate through and message each one of them.

**Amal Hussein:** I'm still a little confused. Sorry if I'm super-slow brain today...

**David Khourshid:** It's all good.

**Amal Hussein:** ...but I'm still a little confused at how an actor is supposed to know about another actor before they can communicate. You can't just publish a name of an actor -- or is that what you mean by that they need to know the name, or that they need to have a contact?

**David Khourshid:** It's more like they have to have reference. For example, how did you all know about me, how did I know about you? Someone probably told you, or you saw something on Twitter, which - Twitter, you can think of Twitter as its own actor...

**Amal Hussein:** Yeah.

**David Khourshid:** So actors can come to know of other actors by two basic mechanisms. Either they're born with it, so when a parent actor creates a child actor, it could say "By the way, do you know this actor?" Or even as simple as "You know me as a parent." Or I could send them a message and say "Hey, you should check out this other actor. This is a reference to that actor."

**Amal Hussein:** Okay.

**David Khourshid:** Yeah. So you could send through messages.

**Amal Hussein:** That makes sense. That's awesome. I also love the "Maybe they were born with it." It's a good reference to Lady Gaga's "I was born this way", and then - what's the other? Maybelline?

**David Khourshid:** Yup. \[laughs\]

**Amal Hussein:** Anyways... So the question I have is, in terms of event flow, the thing that flux architecture has popularized in the frontend was this kind of downwards data event propagation workflow, right? And it kind of was an attempt to wrangle all of the spaghetti events that were flying everywhere in the frontend community before that. Like, think of jQuery codebases that didn't use frameworks. jQuery is a library, and code is just - whatever. Things are using iffies, and function scope in order to encapsulate... So there just was never a predictable way to debug a problem, because you never knew what was talking to what...

**David Khourshid:** Right.

**Amal Hussein:** \[00:31:51.21\] And then we introduced this sane pub/sub pattern in the frontend, and downwards data flow, and good component architecture and hierarchies, and so... Are there some best practices that are just like recommended flows for events, or is that just something that doesn't matter in the world of XState? ...because you know, once you are in a given scenario, there is going to be a level of determinism, regardless of whether that arrow came from above, or below, or from the side...

**David Khourshid:** Mm-hm. So I think one of the most important things is separation of concerns. With flux libraries, that love to just put everything in one global store - it's like, you're either making an artificial separation of concerns, or you're completely eliminating it entirely and saying "Everything is either global, or figure it out", like I talked about. So with XState, it really encourages you to be like "Okay, if there is some actor that's concerned with this and another actor concerned with that, then those should be two separate state machines or actors, however you wanna make it... And it's also forcing you to abstract everything via events. So that further reinforces separation of concerns, because now it's no longer about like "Oh, what's the right method name, or what part of the data do I have to read from this state, and when's the right time to read it?" No, it's all just events. You're just sending in events and hoping that the actor does the right thing with it. As far as getting state, it's receiving in events. Whether you're subscribing to it implicitly or you're actually explicitly getting that event sent directly from the actor to the other actor.

With XState, the architecture is really about simplifying, and having everything in terms of isolated behaviors and message passing... And that's pretty much it. So I feel like that makes your logic a lot more predictable, and it's something that you could even extract and communicate with non-technical people.

**Amal Hussein:** For sure, yeah. I think that's the whole -- it helps you decouple your design and discovery process, and I have to give credit to Alec \[unintelligible 00:33:52.29\] who's a teammate of mine at Indigo, who was the first person who introduced me to XState. I had spent a few years kind of away from frontend explicitly... So I was at Npm, and I was just doing things with Electron before that... So I kind of came back into the frontend world, and then all of a sudden XState was a thing. Alec introduced me to it, and he was really trying to push us creating state machines with our designers and incorporating that into our development process, because it's like -- you get this artifact that you can then code against, because "Here's your spec. Here's this flow chart." You can host it somewhere, you can put it in a GitHub issue... And it's this thing that helps you decouple the design and discovery process and just makes sure that you've got all your error states, you've kind of thought through all the different scenarios, and then you can decide what you wanna support in this iteration and what you don't; build in placeholders... And it's just a really great communication tool, so kudos for doing that. And kudos to Alec, you know...?

**David Khourshid:** Yeah, yeah.

**Nick Nisi:** I think touching on that a little bit, Amal - you mentioned an artifact being able to look at there... The first things that you'll see, and if you go to the XState site, one of the four links on the page is to the visualizer. And that's this tool that lets you visualize the state machine in a non-code way, that's like a state chart. Or -- is that what you would consider a state chart, David?

**David Khourshid:** Yeah, that's a state chart.

**Nick Nisi:** I really like that, because that is something that you can take to your non-technical stakeholders and show every possible state of an application, or a component... And then you have this hardcoded diagram that then you can code against to actually produce the intended output, and it will only ever be the intended output because you can't be in any other non-defined state... Which is really cool.

**David Khourshid:** Exactly.

**Amal Hussein:** And it's interactive. So it's hardcoded, but it's interactive. There's an interactive GUI to it, which can all be run in memory; you don't even need to be online.

**Kevin Ball:** \[00:35:56.17\] The visualizer was also on my list of things to talk through, because I love it. I think it is a key for thinking about these things. And as y'all are talking about, it lets you bridge between things. The thing I'm curious about is does it handle multi-actor, multi-state messaging systems, or these sort of higher-level architectures with orchestrators and things that you were talking about? Is that something the visualizer can show for us?

**David Khourshid:** Yeah, definitely. Not the \[unintelligible 00:36:20.00\] That's actually an older version of the visualizer, and we're working right now on making a brand new version... But there's also the XState inspector, which works as a visualizer, but not for code that you pieced in, but rather for code that's actually running in your application. And so what you do is you would hook it up to an application that's using XState, and that might be an actor with a machine, which might be spawning other actors... So there's a sequence panel where you could actually see how those actors are sending messages and talking to each other. And this is actually another classic thing that you might have used before (I'm pretty sure) called sequence diagrams. Just like those line diagrams, where it's like "Alright, this is going to here, and that's going to there." And by the way, the little figures at the top - those are called actors in a sequence diagram, too. Exact same thing.

So those are really useful for communicating how different systems or different actors are talking to each other, and what the potential scenarios are. So the inspector can do that, and right now we're working on just like a completely revamped visualizer/inspector that's just going to let you do everything, whether it's copy-paste code in, or inspect applications in real time.

**Amal Hussein:** So XState is framework-agnostic, right? You can use this with any framework. It's similar to Redux.

**David Khourshid:** Mm-hm.

**Amal Hussein:** Does it have a bunch of dependencies, or is it like a zero-dependency library?

**David Khourshid:** Zero. Right now there's zero. And it's always gonna be zero.

**Amal Hussein:** That's awesome.

**David Khourshid:** Don't quote me on that, but I'm really -- that's a high-level goal.

**Amal Hussein:** And in terms of the source -- because obviously, there's a bunch of developer tooling that's not gonna ship with your production source code...

**David Khourshid:** Right.

**Amal Hussein:** ...but out of what ships to production, how big are we talking, of a footprint?

**David Khourshid:** XState is about the same size MobX in that regard. I think between 15 and 17 kb minified. However, in version five we're working on making it smaller. And if you want to just use basic state machines and you're like "I really don't wanna pull in all the back state for it", even though it's only 15 kb, there's something called XState FSM, which weighs in at 1.5 kilobytes. It's really, really tiny.

**Amal Hussein:** It's like XState light.

**David Khourshid:** Yeah, it's a flatter version of XState. So you're not gonna get your nested states or any of the fancy history states or invocations or things like that, but for a basic state machine where you're like "Okay, we could draw this clearly as a flat state machine", XState FSM is gonna be your best bet.

**Amal Hussein:** So have you considered calling it Diet Estado? Because that would be a really good name. I don't know what FSM is.

**Kevin Ball:** You're not letting go of this, are you, Amal?

**Amal Hussein:** I'm just saying, it's such a good name. I don't speak Spanish, but--

**Kevin Ball:** Well, you could call it Estadito.

**David Khourshid:** Estadito. \[laughs\]

**Amal Hussein:** Estadito, there we go.

**David Khourshid:** I think I still have the Npm name, so I might do something with it, just as an Easter egg, or something...

**Amal Hussein:** Just publish copies of what's the latest main branch onto there too, so people can choose to use that package.

**Kevin Ball:** That won't get confusing at all. \[laughter\]

**David Khourshid:** Not at all. It's like how React used to be called FaxJS...

**Amal Hussein:** Oh, no way. I didn't know that.

**David Khourshid:** Yeah, yeah. No one really uses that anymore.

**Amal Hussein:** They used to call it Facts, like --

**David Khourshid:** Like a fax machine, yeah.

**Amal Hussein:** Oh, fax. That's so weird.

**David Khourshid:** Yeah.

**Amal Hussein:** So in terms of what XState offers - there's the visualizer, there's obviously the core source library... What else is there?

**David Khourshid:** Oh, there's a lot. There's the visualizer, the inspector, the core library, there is something called XState test, which - like I was talking about earlier - is a model-based testing library where you give \[unintelligible 00:39:58.17\] describing your application and it will automatically generate all the hundreds of different ways that someone can interact with the application, and then you just run that through Jest or \[unintelligible 00:40:08.12\] right to that, too. And it's going to basically write the tests for you.

\[00:40:15.13\] There's also -- what else do we have? XState Immer, if you want to use Immer with XState... XState FSM, XState Graph, which is just Graph-based utilities for XState... That's really useful for all of our visualization and graph drawing parts of XState, and actually mapping out all of the states.

We're thinking of some future packages too, besides the adaptors to React and Vue and Svelte and all of that; we're thinking about XState Router and then XState Form. We're still planning those. It's gonna become a big ecosystem, just state machining goodness.

**Nick Nisi:** As an example, would XState Router be like a replacement for React Router type of component, or would it work in tandem with that?

**David Khourshid:** It would probably work in tandem... Whereas with React Router it's like "Alright, just define your routes as components", and if you don't want a route showing, then just don't render it on the screen, XState Router is more like "Give us all of your routes upfront. We're going to map it out for you, so that you could either navigate directly", or if you click Next, then the state machine knows exactly where that next link is going to be, instead of hardcoding it into your application view layer.

**Amal Hussein:** Oh, my God... Even just hearing that makes me feel good. But yeah, I think there's a lot of stuff around URL management, source of truth for state, kind of server meets client kinds of transitions for SSR apps. All that kind of stuff I wanna get into, and middleware patterns that were popularized with Redux... Like, what's the kind of XState equivalent?

**Break:** \[00:41:48.00\]

**Kevin Ball:** Let's bring us back and talk a little bit more about what we were just leaving off on, around state-machine-driven routing... And the piece of this that I wanna dive into is one of the age-old pendulums in software development generally and that we've seen in the frontend is between imperative and declarative approaches to programming... And we see this in our frontend frameworks; React is very imperative, even though it enables a more declarative view of components. Vue is actually a much more declarative model for programming (and mental model), but I think when it comes to stuff like routing and application state, one of the nice things that you can get with a state machine approach is it feels, once again, very declarative. Something where you can say "These are the ways that the world should be. Go and make it happen." And I'm curious - is that something that you're seeing people use XState to do? How do you think about that? How much of that kind of mapping from "Here's the declaration" to "What does the app need to do?", does XState do for you, versus you have to implement?

**David Khourshid:** \[00:44:16.02\] Yeah, people have been experimenting with using XState in routing, and there's a handful or libraries just sort of playing around with this idea; it is something that we need to think about more just because there's something that seems to go against what a state machine is, which is the fact that I can navigate to any routes I want just by changing it in the address bar. So it's not exactly an event, it's more like "Hey, just teleport me directly to this state."

It's not really super-against what a state machine is, it's more like there's these implicit transitions where you could just transition to any state at any time. But those still need to be made explicit. You should know what are all the routes you could go to. And also, as state machines are very founded on just having your application logic be safe, there has to be some safeguards for, like, if I go to /admin, it's gonna check, "Am I logged in?" Otherwise, it needs to boot me to a login screen. Ideally, I should be logged in in an admin; I can't just be logged in and do all sorts of crazy stuff... But yeah.

Some of the earliest examples I've actually seen of using state charts was actually before I even started programming. It was with Ember, or when Ember used to be called SproutCore. SproutCore used state charts a lot. This was, again, before I even touched -- well, I touched computers before then, but before I was really hardcore into programming... And it was really interesting. There's actually this experiment with Ember and routing and using state charts for routing, and it actually has some pretty cool state chart diagrams, and that dates back to 2013, I believe. So yeah, this problem has been thought about a lot before.

**Kevin Ball:** When Ember was a big advocate of what you were talking about, Amal, in the break, of everything stateful about your UI being driven by your URL, and your URL representing your state.

**Amal Hussein:** Yeah. I'm convinced that the Ember core team - they're like the game developers of the JavaScript community... Because you know how there's that saying that like "Hey, everything you've thought of as your big, new idea, game developers invented ten years ago"? I feel like Ember -- there's just so many things that they did right.

**Nick Nisi:** Dojo already did that.

**Amal Hussein:** Yeah, yeah. Dojo 2. But the point is - it's just amazing to see how certain patterns were in the zeitgeist very early on, but they just didn't get the traction... Until people burned their hand in the pot, and then learned the hard way. And that's the thing, sometimes people just don't -- you can preach all you want, but until they get burned and/or see the merits for themselves, with increased velocity, reduction of bugs, better predictability, faster onboarding... So this isn't just actually about how your users experience your application, because quite frankly - it's an invisible thing for your users, but it's really kind of a tool for how we do our internal data and code management.

**David Khourshid:** Yeah.

**Amal Hussein:** Communication is a big part of that, I think, both for onboarding, as well as just external stakeholders that are non-technical.

**David Khourshid:** It's funny, I wanted to mention even with game developers - if you talk to them about state machines, they're like "Yeah, I've been using them. We've been using them for decades. Why do you think it's a new thing? It's not." \[laughs\]

**Amal Hussein:** Right. They're like, "Oh, we have something. It's called Estado..." \[laughter\] Just kidding, just kidding, just kidding... I'm gonna stop trying to make Estado happen. This is like my fetch, you know? Keep trying to make fetch happen.

**Kevin Ball:** b0neskull, one of our regular panelists, was commenting in the chat about this. He's like, "Why are there so many state libraries and ceremony around state libraries in the frontend and JavaScript world? Like, this is a solved problem. The solution is state machines. This has existed for a long, long time."

\[00:48:05.07\] I'm actually kind of curious - David, as you've been kind of marketing XState, bringing this to the world, do you have any insight into why the frontend world in particular has been so slow to adopt state machines and be interested in this?

**David Khourshid:** Yeah. And trust me, it's been an uphill battle, because first of all, we don't like being told that the way that we're doing things is not the best way to do them...

**Amal Hussein:** \[laughs\] You could have just stopped right there, where you were like "We don't like being told anything." \[laughs\]

**David Khourshid:** Right, yeah.

**Amal Hussein:** It's amazing we even have people listening to this podcast, quite frankly...

**David Khourshid:** \[laughs\] Yeah, there's people who are like, "No, you're being a thought leader. You're trying to introduce something new etc." and "What I'm doing works, and is just fine." So I'm over here, trying to say "First of all, what we're doing is just a pale imitation of what we should be doing, which is modeling these things as state machines, or at least some sort of events-driven architecture, rather than trying to manipulate state directly." And notice, I didn't say "mutate state directly", because all of these state management libraries are like "Okay, we're technically not allowed to imperatively mutate state, so we're just going to give developers a really easy way to manipulate state", but it's still sort of the same problem, like "Alright, now you avoid the problem of having shared data access, but you're introducing a new problem of like "You don't know when things are gonna change", just because they could change from anywhere. And that's a huge problem.

But yeah, XState takes the approach of something that's been around for just many, many decades. And also, we were talking in the break about how -- someone was like "Why do we even need state machines anyway? The way I'm doing things works just fine." I'm sort of rallying against that "Works just fine", because that's only half the battle. Like, we don't code just to make something work, we code to make it work, to prevent it from not working, and to also communicate to the rest of our team, and ideally even to users and designers and other people, how the app is supposed to work.

So I could code something in Assembly -- actually, I can't; I don't know Assembly. But I could code something in C, where it's like, "Okay, I made this complex thing. It works. Don't touch it", but no one else will understand it. And I feel like my job is incomplete if the code I write is not understandable by others.

**Amal Hussein:** Amen. Can we just take a moment of silence? Just -- preach on, brother. Seriously, I couldn't agree more. Honestly, the other really big thing is that -- you know when you read code sometimes, and you're like "Oh my God, what's up with the paranoia level in this code?" All these shields from all these angles, it's like \[unintelligible 00:50:45.25\] is this like some functions used in every file and every method? Why are you being so shielded? You can kind of reduce that paranoia level as well in your code... And for me, more importantly, if this enables you to optimize your code to be easily changed, and extensible... And we don't talk about that enough. I've been on this kick lately where I'm like "Optimize for change, everybody." I've said that literally a hundred times this week...

**David Khourshid:** Right.

**Amal Hussein:** Because we have to optimize our code for change. If we think that our code is not going to change, or that this thing should stay the way it is - you are not living in a reality that is real world application development. Code is living, breathing, cruft - you name it; people come and go, and libraries die, things need to kind of move on, and you have to be able to kind of weather that change and support easy pivots, especially if you're a startup or a small company that's still trying to validate your product-market fit.

**David Khourshid:** Right.

**Amal Hussein:** It's just huge for bringing that ease of communication and determinism into your applications.

**David Khourshid:** \[00:52:00.01\] Yeah. And that's the point. Our app logic that we write - I want that to be a communication mechanism. Something where we could create that visual artifact and share it with other people, like "Hey, this is how it works", and then if they're like "Well--" Like you were talking about, "If this is gonna change, or I need to add this feature", we could know exactly where the app is going to be affected. Whereas if you just do things the normal way we've been coding for many years, it's like, "Okay, this is another boolean that's going to go in a dozen of our if statements somewhere, and we're gonna have to check it all in. Let's hope we have tests, but there's a really good chance that we don't have tests to capture this behavior."

**Kevin Ball:** I think there is a level to which -- like, this is another thing to have in your mind, another learning curve to climb... And part of the challenge here is we're still navigating this transition mentally from frontends being simple to frontends being where much of the complexity of our applications lands. And that transition is playing out in many, many different domains. But I think even within an application - to your point, managing one boolean is not very hard. It's not very much mental overhead, and if that's all it's ever going to be, probably simpler than incorporating a state machine library.

**David Khourshid:** Yeah.

**Kevin Ball:** So a question I've had for you is do you have a rule of thumb of what level of complexity, what number of different factors or states does it start to become worthwhile from a mental overhead standpoint to incorporate a state machine?

**David Khourshid:** So there's no hard and fast rule. If there was, I would say as soon as you're getting to three booleans or more, then maybe consider how the different behaviors of your app can change, and just what they are.

I always say, you don't need a state machine if your app isn't complex. I also say that your app will never stay complex, unless you're doing some sort of toy project that you forgot about, or just a simple app, like -- even, I was thinking of like the \[unintelligible 00:54:00.02\], where you just press yo to your friends... Even that has enough complexity that merits a state machine. But yeah, we're not writing simple apps; we're not paid to write simple apps. We're paid to write apps that are eventually going to grow in complexity and features and edge cases, and we need some sort of scalable way of managing that.

**Amal Hussein:** We kind of said this a little bit quickly, but - so I am a fan of your source of truth in your application being in your URL. Your applications should always be able to rehydrate from a URL refresh... Somebody refreshes their screen, or they're in a Wi-Fi situation - they should be able to refresh and stuff shouldn't break. I'd like to understand how XState makes that reality easy, the whole rehydration states... In particular when I'm working with clients in local storage, if there are tools or utils or patterns around rehydration of your application state.

**Nick Nisi:** This might tie in a little bit to what I was gonna ask, too... So I'll just kind of throw it out there as well. Maybe I'm not fully seeing how it's implemented in practice; if I were going to try and implement a state machine in my existing app that has a lot of already kind of managed state with a bunch of different things... You know, maybe a lot of stuff in context, and providers, and... Is XState a way to manage that component state that might exist out there, or some other global state? Or is it more it should take the reins from that?

**David Khourshid:** Yeah, that's two really good questions. I'll talk about the persistence one first. XState does have a way to basically take whatever state your state machine is in, including any extra data which doesn't really fall into the finite state category - you could persist that, and then you could restore the same machine at that given state. So in a way, it sort of acts like any other state management library where you could do that... And this is a hard problem to solve, but we're working on a way of also persisting actors.

\[00:56:05.05\] So if your state machine is in a state where there's other child actors who also might have other child actors, then pretty soon you'll be able to persist those as well, and restore those actors to those states, or at least try. For example, if you have a promise request or something, then chances are you're going to need to rerun that promise request when you reload the page.

**Amal Hussein:** Yeah. But you know what - this kind of brings me to my next thing, which is actually middleware patterns... Because I could very easily see there being a middleware that was activated anytime there's a promise, and it knows how to handle a cancelation state, or a failed state... So you know, you're not repeating a bunch of code everywhere, in all these different actors. Because Redux kind of popularized the middleware model... So did Express, if we really go back a little bit further. But you know, it just kind of was like "Here's a bunch of things it'll run every time there's a state update. It may or may not trigger some business logic that's in your middleware. For example, if there's an error, log to Sentry. That's one thing you put in your middleware if you wanna normalize some data.

**David Khourshid:** Yeah. So you might be either happy or sad to know that there is no such thing as middleware in XState, and there never will be... And that's because XState has this abstraction of state and events, and that's pretty much it. And, well, also actors, which encapsulate those states and events. So everything works through that. If you want to add analytics to something, then your state machine has a subscribe method, just like anything in \[unintelligible 00:57:36.28\] and you could do whatever you want with those state updates. So you could send it to some analytics, or some logging service, and do things that way.

Now, Redux and libraries like it - they need middleware to handle side effects, and that's because they are completely hands off with side effects. XState, on the other hand, says "No." Side effects - which XState calls actions - are extremely important. Your app will not work without side effects. So we need some declarative way of managing side effects, and so that's exactly what XState provides. So it does so in terms of spawning, or invoking actors, or even just performing one-off actions... So yeah, it has that built-in notion. So instead of requiring middleware for that, that's just part of just the notion of actions and services... Which you can provide externally, too.

**Amal Hussein:** Yeah. Well, I guess my thing is how do you avoid duplicating subscribes or events everywhere? If I want something to happen every time a data fetch is triggered, how do I avoid needing to update all of these different state machines in my app, you know what I mean? Is there a way to centralize that? Is there like a hook for "before all", or "after all", \[unintelligible 00:58:49.10\]

**David Khourshid:** Yeah, there's different patterns, and this gets sort of more into advanced XState, but you could have parallel states, and you could also have actions that happen on every event, and things like that. But the easiest way to get start with that is just calling .subscribe and handling state changes that way.

**Amal Hussein:** Okay. Wow, very cool.

**Nick Nisi:** Does XState work with Suspense in React?

**Amal Hussein:** Oh my God, can we not talk about Suspense? That is a broken API.

**David Khourshid:** Does anything work with Suspense...?

**Nick Nisi:** That's a better question, I suppose...

**David Khourshid:** Yeah, Suspense and concurrent mode - that was something tricky that we were trying to figure out for --

**Nick Nisi:** Bad idea.

**David Khourshid:** I won't say that loud, but... Yeah. And that's why I'm really glad that concurrent mode sort of just didn't become a whole mode, and it became like, you know, more isolated things... But XState does not work with Suspense yet. By working with Suspense we mean like just having these built-in things where it could actually throw promises and say "Hey, I'm in some sort of pending state." I think that that's a good idea at least to support, so we're going to just experiment with that. Definitely not a priority.

\[01:00:01.25\] Going back to your earlier question, Nick, about how it integrates with existing code in other libraries - you could use XState either at the smallest level, or at some global orchestration level... It doesn't need to encapsulate or take over your entire application state. You could definitely do it incrementally... And that's a good way of using XState as well.

**Amal Hussein:** Yeah, that's actually a good point, because that actually helps with incremental adoption and refactoring. Refactoring in place, you know...

**David Khourshid:** Yeah.

**Amal Hussein:** Refactoring your views and components to slowly be managed by XState - that's pretty cool. So as we're kind of winding down here, how can folks contribute to the project? It sounds like you definitely have a roadmap, you've got an active, healthy project... So how can folks contribute and get in touch with you?

**David Khourshid:** Sure. We're always accepting pull requests, especially for documentation... And we actually have a new -- I mean, I should have done this years ago, but we have an examples directory on the page where we're just filling it up with as many useful examples as we can.

**Amal Hussein:** Like recipes?

**David Khourshid:** Yeah, yeah. The recipes are also in the documentation as well, like how to use this with Vue, or Angular etc. Yeah, so that, and also participating in the discussion forums. If you go to discord.gg/xstate, there's just a whole lot of really helpful people in there, either sharing crazy ideas or offering help at all hours of the day... I know because I'm one of those people offering help at all hours of the day over there. So yeah, just participating and trying it out on your projects.

**Amal Hussein:** That's so awesome. And where is XState being used right now? Because I remember -- this goes back to my conversation with Alec... I have a very healthy skepticism for new technologies, and especially when to adopt them at a large corporation... Because if I'm gonna push a tool, then I have to take on the maintenance burden of making sure everybody's aligned and trained and everything is updated and standardized... So yeah, it's not an easy thing, or something I take lightly.

I remember because I hadn't heard about XState when Alec \[unintelligible 01:02:11.25\] introduced it to me. I was really like "I don't know... Where is this being used?" Especially like -- I don't know if this is JavaScript's new hot thing, you know what I mean? So yeah, can you give us a sense of what that adoption curve has been like for you?

**David Khourshid:** Yeah, sure. I actually asked this question on Twitter a few months ago, and I was surprised to learn that there's a lot of companies using XState in production, notably Microsoft... I didn't work in any projects at Microsoft that used XState, but Microsoft is a huge company, so they've used XState in various projects, including one of their education tools, and also the Microsoft To Do app. Netflix is using it, LEGO... Amazon is using it in their AWS Amplify service to handle authentication. So you could say that XState is being indirectly used by hundreds of thousands of developers that way. It's part of Gatsby as well... Honestly, there's a lot of places that it's being used.

**Amal Hussein:** I can't think of a project that isn't in Gatsby. Gatsby is like the kitchen sink of frameworks.

**David Khourshid:** It's either Gatsby or Next.js, so... Yeah.

**Amal Hussein:** That's so cool. Well, thank you so much for your time, David. It's been an absolute pleasure... And yeah, I'm excited to try this in production.

**David Khourshid:** Please do.

**Amal Hussein:** It's on my recommendation list for the UI architecture at Indigo.

**Nick Nisi:** Likewise, yeah.

**David Khourshid:** Alright, awesome. And pretty soon I'm gonna write a "Getting Started with XState in 3 Minutes" articles, so - zero excuses.

**Amal Hussein:** Nice. Cool. Let us know and we'll retweet it.

**David Khourshid:** Alright.

**Nick Nisi:** Well, thank you so much for coming on. Thanks, Kball and Amal, for joining. We will see you next week.

**Amal Hussein:** Bye, kids.
