**Mikeal Rogers:** Welcome to JS Party, where it's a party every week with JavaScript! I'm Mikeal Rogers...

**Alex Sexton:** I'm Alex Sexton...

**Kyle Simpson:** And I'm Kyle Simpson.

**Mikeal Rogers:** Kyle is guesting this week, filling in for Rachel. We're gonna ask him all kinds of questions about IoT and Robots, just to make sure that he's properly filling in... No, no...

**Alex Sexton:** Put him through his paces a little...

**Mikeal Rogers:** Right, exactly. \[laughs\] No, we're not gonna do that. We're gonna talk about some very interesting topics that I think we can all get into... The first one is not a contentious topic at all; nobody has differing opinions about this. This is Async Flow Control, so...

**Kyle Simpson:** Yeah, it's very uncontroversial.

**Mikeal Rogers:** I mean, there's generators, there's callbacks, there's promises... Pretty much nobody has an opinion about which one of those to use; everybody does what they want. I just wanna get into some of the pros and cons, and also because we have Kyle here, who spent a lot of time writing educational materials, talk a bit about which ones of these are the easiest to teach.

Alex has a lot more experience in like a bigger company dealing with this stuff, so there may be some opposing perspectives there. Kyle why don't you tell us a little bit about this? I know that you have some libraries around this as well...

**Kyle Simpson:** Yeah, I do. I've been at this Async stuff for quite a while. I was just recounting the other day that some of the earliest exposure that I had was the very early spec discussions when Mark on the TC39 committee was bringing up the idea of putting promises into JavaScript. He had this e-programming language that he has Futures in and he wanted to put promises in JavaScript, and that's when I started following the topic and building libraries around it. That was probably early to mid-2009, so it's making me feel really old how long that stuff's been around.

Async has been a cornerstone of the language for a really long time, since practically the beginning, but it's a kind of a modern invention that we thought that we should have some higher order patterns for organizing asynchronous code beyond just the callback. When I teach about it, when I write about it, I have to go back to the beginning, because I think a lot of people take the callback for granted; if you ask most developers, they don't even know why it's called a callback, what does that even mean? So we kind of have to go back to the beginning and say "Well, this is how it was waaay back in the day..." But there is, as you mentioned, a ton of really cool patterns that have come out over the last few years, and from my perspective I think the good part about all of that is more choice allows developers to more appropriately express their intent in their code, and make their code more readable.

**Mikeal Rogers:** \[00:04:07.07\] When you say "way back", are you talking about DOM addEventListener() and then jQuery kind of normalized that and made it a little bit more reasonable... Is that what you mean by "way far back" for the async programming?

**Kyle Simpson:** Well, some of us were writing async programming before we even understood what closures were... I remember back in 2002 - JavaScript was comparatively pretty young and immature at that point, but I remember writing an internal application that ran only on IE4, and 5 is when they introduced the XMLHttpRequest object, so you could do "asynchronous" stuff, but we didn't even know what that fully entailed. We literally asked for XML from the server, but we didn't even understand that you could close over a variable and know which request paired with which response, so we were investing crazy stuff like generating IDEs to match them up, and so on.

**Mikeal Rogers:** I remember when jQuery came out, a lot of new people just kind of jumped into jQuery and did a ton of stuff, and they were doing all this async programming without really realizing it. Alex, could you give us some perspective on that, since you were definitely heavily involved in the jQuery community during that time? There were like a million new web developers that came to the web and just started doing async programming without doing a bunch of research on monads or anything.

**Alex Sexton:** Yeah, it was definitely the case that, being in the jQuery IRC channel at the time - whenever it kind of exploded - you'd get the paste bin of a lot of various people's different sites. And generally, people weren't doing the same type of massive, large, single-page application, but it was more like "I need to add functionality to a server-side rendered page." But that grew and grew and grew, so you'd end up with these files, and it would just be one big, long set of calls into jQuery, and then massive indentation of "Well, if they click on this and then this handler gets called...", you know just copy and paste... A clear misunderstanding of control flow, because it just sneaks up on you.

It's like, "Well, first I can do this, and then I iterate all the elements and then I change them and it's good", but as you start handling more complex actions, async control flow, and even like a callback, it's really easy, real fast, but then when you need to wait for like two callbacks to both finish, you end up writing the silly counter-logic where you count up the number of things that have completed until it matches whatever... You know, everyone had their own implementations for that, and it became like a well-known spaghetti case where people had app.js and it was just one big, long set of callbacks inside callbacks inside callbacks inside callbacks. Now I think is when people started looking towards things like Backbone.

I think Backbone was a direct answer -- not that it solves a lot of that stuff, but just the structure of those files. So it wasn't even like an async solution, but it was just code organization, being able to split up files and actions, and some asynchronous control when it comes to models and stuff like that... But I think that's why everyone globbed onto Backbone so directly; it was because it immediately solved some of the problems with async control flow, even though it wasn't an async control flow thing. It just split stuff up enough for people to feel okay again.

Then naturally, their apps got bigger and they were like "Oh my god, we still need async control flow", and I think we're just getting to the point where people have solid -- you know, kind of the promises revolution and all that kind of stuff; it's the first time people kind of had solid understandings of all of this stuff, back when it was the promises A and Dominic Tarr... Or was it Tarr?

**Mikeal Rogers:** \[00:08:11.06\] No, it was Denicola.

**Alex Sexton:** Yeah, Denicola.

**Mikeal Rogers:** And Kris Kowal.

**Alex Sexton:** Yeah, Kris Kowal, that's the wizard. Yeah, so all the Promises A, plus all that kind of stuff... It was right when people were like "Okay, we definitely want this set of bags of tools and we should standardize it."

I think that's when the front-end world finally -- a lot of the front-end stuff actually... They got around it in different ways. Rather than putting handlers whenever you get data, a lot of the stuff is just like automatically updating. We didn't actually solve any control flow async stuff, it was just like the way that we render stuff on the page no longer needs a callback whatsoever. A lot of that kind of got hidden. I don't know... At Stripe it's something that we definitely have very firm tooling around doing asynchronous actions, and we're constantly rewriting it in order to make it more firm and more solid. It's the most constant source of confusion and bugs.

There are so many cases in asynchronicity that you have to handle, like loading error states, completion states with errors versus completion states that are successful... There's just so many things that by default you just think "Oh, I wrote this code and it'll be perfect every time." It just adds so much unknown, and you don't know you need to handle that... There needs to be a lot of tooling around that. I don't know, I have strong opinions, but... Yeah.

**Kyle Simpson:** I have a throwback reference that I think at least some listeners would maybe appreciate. This is a metaphor I use to describe the state of managing state over time. I remember way, way back in 1986 when the original Nintendo came out, and I still think the best game ever made, Legend of Zelda on the original Nintendo... But one of my favorite parts of that game is if you remember the 2D map that you walk around (or pseudo-2D map). When you went into a cave, the whole screen went black except for this tiny little illuminated circle around Link, where he was holding a torch **Alex Sexton:** Yeah like a spotlight.
**Kyle Simpson:** Exactly.

So you could move around the whole map, but you couldn't see the whole map at once. That is to me what modern JavaScript applications and asynchronous programming are. We can understand this one little part; I can understand these two or three steps of the flow control, but then it forks over to this other part, and as soon as we make that non-local jump, our brains kind of shut off. And as soon as there's any kind of non-linear, if it splits and forks and then comes back together, our brains just don't handle that well.

I think that's a big contributor to why people keep trying to reinvent the wheel with frameworks; it's because we didn't really solve one of the core problems, that we can't with the language - or we couldn't for a long time - express sophisticated flow control in a way that people are gonna be able to read. So we just kept burying those details deeper and deeper inside of frameworks and libraries.

**Alex Sexton:** Yeah, I agree with that.

**Mikeal Rogers:** So there's been a lot of work that's happened on this over the past few decades. We had a discussion a few episodes back about if you're learning JavaScript today, is there any reason to even learn the function keyword, or should you just go straight to arrow functions and just be done with it? When you're teaching JavaScript today to somebody new, do you really go back over everything that's possible, or do you just go "Look, here's a way to do this with either async/await, or with Node's standard callback interface..."? Do you just pick one and go "This is what we're gonna learn for now, because it's the easiest to get your head around"?

**Alex Sexton:** \[00:12:15.08\] I don't think it's necessarily an equivalent thing to arrow functions, to all functions... Because there are times when you still need the old thing, whereas theoretically you could completely replace the async control flow stuff -- or, sorry, I'm not talking any sense. I guess what I mean is that I think you're gonna still need to know what a callback is. You may not need to know all the different ways to handle callback hell more directly, and I think that's fine, but it's not like you can just like get away with not knowing what callbacks are. It just seems too fundamental, even if you're using promises everywhere.

**Kyle Simpson:** People are gonna have different answers on that one for sure, they will have a lot of different opinions among those that are listening, and I'm sure many of my peers in the teaching world have strong opinions on it. Speaking for myself only, I do teach the fundamentals. I teach a course called "Rethinking Async", and we start at the callback, and then we talk about why callbacks, and there are several major reasons why they're limited, and problems of callback hell. It's not really nesting an annotation, there's really deeper problems there.

Then we talk about thunks. The reason for thunks is because they are a really good conceptual base for promises, and the reason promises are useful is because generators can let you do the sync/async thing. I build from the ground up, not that I expect that people will write lots and lots of callbacks still, or will ever even necessarily write a thunk, but I think those are still really deeply important conceptual understandings for people, so I still teach them.

**Mikeal Rogers:** You kind of glossed over some of the other fundamental problems with callbacks... What are some of those issues? In Node core right now there's actually an argument about "How do we make promises as good as callbacks are for a lot of the debugging stuff and a lot of the error tracking stuff that we have in Node?" There's like a huge amount of instrumentation inside of Node that really depends on some of these structures that aren't there yet for promises, so I'm curious what you feel are the limitations of callbacks. Is it just a composability argument?

**Kyle Simpson:** I would say to me there are three main drawbacks that callbacks alone don't solve. The first one is that callbacks, unless you introduce a pattern like a thunk or something with closure, the callbacks don't have any memory, they don't have any way to pair state with them, and managing state over time is the whole thing, that's the whole problem that we're trying to solve. Time is the most complex state in the entire application, and callbacks alone don't have a particularly good solution for that, so people create a lot of ad-hoc stuff; they just happen to close over some variable, or some people just still use global collections of variables to store stuff across callbacks.

The callback -- you just pass in a callback to a function and latently close over some state object is not good enough for the kinds of complexity that we're typically modeling. The second major drawdown...

**Mikeal Rogers:** So hold on, I wanna dig into that just a little bit more. I wanna explain a little bit deeper, so that some of the newer listeners can follow as well... So when you create a callback, you create this sort of inline function, and if you reference any variables on the top, those get closed over; that's what the closure is. The VM actually does a very good job of optimizing, only keeping around references to the things that you're referencing inside of your function. But what we are saying is essentially like the state of the function that it's going to be manipulating is just these variables that are up in the closure, and there's really no way to inspect them, right? There's no visibility into them, other than just looking at the code, right?

**Kyle Simpson:** \[00:15:56.02\] There is that aspect, you're absolutely right, but I think I'm going at something even deeper, and some of this is that I've over the last few years become a lot more interested in applying functional programming concepts. When you just willy-nilly close over variables out of any scope, and those variables are pointing to state objects that just change because any one of a dozen different callbacks can change them, you're violating some of those fundamental principles like pure functions, and things.

Now, closure itself is not anti-functional programming, it's actually right at the heart of functional programming. But when you use closure in functional programming, you have to close over something that isn't gonna change. If you close over something that is going to change, you're asking for all of the problems that -- when you look at a function, you don't know how it's gonna behave unless you mentally execute the entire program up to that point. But if you do use a pattern where you close over something that isn't gonna change - which is what I was referring to with the thunks pattern - if you close over some state and keep that with the function so that that state is preserved and now the function is the value that you're passing around and reasoning about, and that value that it's closed over isn't changing, then it's really not that much different than a promise. That's why I said thunks are kind of like promises but without a nicer API.

That makes composing, as you said earlier, those different pieces, those functions with each of their different states closed over - composition of those is a lot easier when that state doesn't change. So that's what I mean by a callback by itself is not a great pattern for that. But when you apply some extra formality around it, it gets a lot better.

**Alex Sexton:** Yeah, I definitely agree that, even in the promises case, we're almost always generally adding more state and more process around any async action, to the point where there are still fundamental pieces, but we need things like -- the actual async action might not be cancelable if it's a promise, but we need to be able to cancel some async actions. So adding that state, whether something's canceled, and then preventing things from happening while things are in flight, and extra state around that...

So I guess, to some extent, if I'm often wrapping promises in a certain way, then I guess I could wrap callbacks in that same way and manage all that state with the thunk, and that kind of stuff, and I suppose that's fine. But it seems to me I always need at least as much state as promises give me, in any complex application. For sure, I write 500-line or less programs all the time, a script to do X or Y or Z, and I'm rarely using promises or anything like that just I know I need a callback to do a readFile, and I just throw in a callback and that's fine with me.

**Mikeal Rogers:** And the states that promises have are just success & error, right? But you know, it also says if it's done doing the action or not.

**Alex Sexton:** Sure.

**Kyle Simpson:** Yeah, the done is implicit in whether or not there has been a resolution to success or error, but as of yet, promises don't have a canceled state, so as Alex is saying, people create ad-hoc wrappers on top of promises to represent that particular... And I think there's at least some that believe - and I guess I would probably me more in this audience - that observables for example are a better thing than a cancelable promise. An observable already has some really nice abstraction built into it that you can model that idea of "it's been canceled" or "it's no longer subscribed", whereas a promise is kind of a lower level thing and maybe it doesn't need that extra state.

Alex, I think your point is taken - that state is necessary, and that's the whole reason why I tell people, look at the pain of all of the ad-hoc stuff you have to do when all you have is a callback. Then when you put a promise on, see how much of that you don't have to do anymore. Then when you put an observable on top of that, see how much less you have to do now. It develops a deeper appreciation for those shortcomings than if you just said, "Well, all I've ever done is write an observable." You're not really sure exactly why, and you're never sure if a promise in any given particular scenario might be enough.

\[00:20:24.17\] The second problem that I believe plagues callbacks is inversion of control. And by the way, inversion of control as a general concept is actually generally a good thing. Martin Fowler says that's the difference between libraries and frameworks, it's inversion of control. I think that's a good thing. But specifically related to callbacks, when you wrap up a portion of your code, a portion of your logic in a callback, and hand it off to some other piece, whether that's another part of your own app or some other part of the system that you're not in control of, you have given up all control to ensure exactly how, when and how often that callback might be called. When you erode that trust, you lose understandabillity.

One of my getaphise laws, if you will, is "Code that you don't trust is code that you don't understand, and vice-versa." So I think that inversion of control problem is a big deal, and promises are actually really well designed to fix that, because promises un-invert that; instead of me passing a callback to you and you getting to decide when and how often, you pass me a promise and I get to decide if I'm gonna subscribe to it, and I know the promise is only going to resolve once, so a lot of those concerns that I might have had about your usage of it, I don't have to worry about anymore. So inversion of control is the second one.

The third one is a little softer to describe, but it's essentially that callbacks - the syntax promotes a very non-local, non-sequential reasoning, but the way our brains work... Neuroscientists tell us that our brains are very synchronous at the highest level of cognition; the way we plan things out is very sequential. And callbacks promote a style of programming that is very much the opposite of that. I think we struggle to communicate well all the complexity of our flow control because we're limited by the syntactic choices that only callbacks give us.
You hear people talk about observables and things like functional programming being more declarative - it's because we can list out a flow control in a program in a much more linear way. My preference is the synchronous style that you get out of async/await style functions. That works a lot closer to the way our brains work, and if you can understand the code, you can read the code a little bit better.

So those I think would be the three things that I consider to be callback hell.

**Mikeal Rogers:** Alright, I think that's pretty good. I can definitely say this has been really enlightening. I think we got a lot of the good arguments out. I personally will continue to use callbacks because my brain is broken, I guess.

**Alex Sexton:** Yes.

**Mikeal Rogers:** It's just better... \[laughs\] We're gonna take a break now, and when we come back we're gonna talk a little bit about the future of the web and who's trying to kill it.

**Break:** \[00:23:24.00\]

**Mikeal Rogers:** Let's talk a bit about the web. There was an interesting thread recently from Joe Hewitt on Twitter... For those of you that are newer to programming, did not use Firebug back in the day, a long precursor to the Chrome DevTools was this Firefox plugin called Firebug. It introduced really the first web developer tools. That was written by Joe Hewitt. Joe went on to create a small company that got acquired by Facebook really early in Facebook's time, and then Joe would almost by himself write the first mobile app for Facebook, which was actually in a web container. It says in this thread that apparently he was in multiple screaming matches with Steve Jobs over email to get that accepted into the App Store.

Generally, I don't think that Joe has to work anymore, I think that he's pretty set... But he's a really ardent defender of the web; he really tries to make sure that the web is going to win, and really sees it as being attacked on all sides right now, and probably not going to move into the future, and that we're gonna move towards more proprietary alternatives, because that's what everybody's trying to do. So who is he talking about in terms of attacking the web... Kyle? \[laughter\]

**Kyle Simpson:** Well, where do we start...? First off, I didn't follow that thread. Some people that follow me know that a while back I kind of stepped away from Twitter, so I did not follow that particular thread and it sounds like, just doing a quick Google search, that I'm probably glad I didn't, because I might have gotten myself into trouble with some things I might have said there. But if we take a step back and we just ask what does even the open web mean, because probably a lot of listeners would have different opinions on that? I think the open web means a web where the developers and the users of the web are at least as important in making the decisions for the future as the people who are really making the big bucks, like the Apples and the Googles of the world.

To me, that's what an open web means - a web that we are a part of the future of that; it's not just being dictated to us. If you compare that to - and I'm old enough and have been around long enough to remember vividly and have participated in a web where we were just handed the web by what Adobe shipped to us in Flash, and what Microsoft shipped to us in Silverlight. That for a long time was like, you know, there's the web that's like the plain HTML pages, but if you really wanna built compelling games or experiences or graphics or video or any of that stuff, you've gotta go play in this special sandbox that you don't control, that isn't discussed publicly in terms of how it works, and at any given whim they can just decide "We're gonna change it, mess around with it or whatever." I think that's the best way to describe what that open web is - to think about what it was before, when we weren't in control and we didn't have any say, and it was just being dictated to us.

\[00:27:45.17\] We now are in control in the sense that anyone of us can participate in the specification bodies, for example. We can go participate in W3C, or WHATWG, or whatever specification bodies for web platform features; you can participate in discussions around TC39, maybe even get invited to one of their meetings or something like that, and have some say in the future of JavaScript, because there isn't one company that's controlling any one of those features. That's a hallmark of a good, healthy open web, but that doesn't mean that there aren't people that wanna challenge that, for sure.

**Mikeal Rogers:** I wanna challenge just even the presumptions that you've already laid out. First of all, Firefox has lost a lot of market share, and a lot of people don't really see Mozilla pushing at the forefront of a lot of new standards, because they're so resource-constrained. A lot of new standards now are being pushed by Chrome and by Edge. I don't have numbers from Microsoft and how many people work on Edge, but just Chromium, just the web fundamentals - there's over 500 people at Google that work on it. So they're investing a huge amount of money, but also that means that it's relatively inaccessible to just dig in and write some code on Chrome and get that out there. So we are sort of reliant on the fact that -- many Google open web evangelists really go out into the developer community and pull in feedback, and we're really somewhat dependent on that goodwill effort.

On the standards front--

**Kyle Simpson:** Well, wait a minute... We've gotta give credit to Microsoft Edge, because they're a whole lot more present in that discussion than they ever were before, and they deserve credit there.

**Mikeal Rogers:** Yes, I apologize... Yes.

**Kyle Simpson:** And I don't know that we should be so quick to throw Firefox under the bus either, because...

**Mikeal Rogers:** No, I mean, they're losing market share, and that has a real impact on how much that they can really do. Things aren't looking very great. I still have a lot of love in my heart for Mozilla having worked there and really believing in that institution, but to say that they are not hurting right now would be a lie.

Yes, I apologize - Edge is doing an awesome job. In particular, they're pushing a lot of offline use cases and stuff like that right now too, so they're doing great work. But I really wanna challenge these standards part. The W3C in particular has a structure in which members buy seats, and part of buying a seat at a certain level is that you get to veto certain work going in, and Apple has used that pretty aggressively, and it's one of the reasons why we don't have touch standards, it's one of the reasons why we don't have a lot of standards around things that Apple asserts IP in. So we are some what limited but like in terms of how much we can innovate on the web, we're a little bit limited there.

**Alex Sexton:** I think to be fair, Apple would be able to scare the W3C away from implementing touch standards, regardless of whether they're a member or not. I don't think it was their member status that made that hard, I think it was the fact that they have a bunch of lawyers.

**Mikeal Rogers:** I actually don't agree. We step on open patents all the time in web standards, and one of the things that standards bodies try to do is get all of those companies to agree to -- yes, they get them to agree to not assert those patents, but there are also outside patents.

One of the things you're really trying to do is just basically berate each of these companies into just like giving up on that.

**Alex Sexton:** Yeah, but I don't think Apple would do that.

**Mikeal Rogers:** So Apple has the opportunity to disagree with a standard going out, or disagreeing with their patents going into a standard before the standard gets published. But instead, what they're doing is vetoing the work ever beginning, and that's really problematic, because then we don't get to see that implementation in other browsers or see any kind of competitive pressure on Apple to adopt the standard, so that, you know, five years after everybody else does, Apple will put it in Safari, or whatever.

**Kyle Simpson:** \[00:31:53.02\] Well, I think we'd be better off if more of the web platform could work a little bit more, like TC39, and there's some huge caveats there, of course. I think what's good about parts of the open web is that we can see things like somebody saying "Here's an idea for a feature that should go into JavaScript" and any one or any mixture of the browsers can make an early implementation of it to test out, and we've already seen a couple of times that two browsers implementing a feature and saying "We really like this, we think it's compelling" and users liking it, has been enough to sway the opinion so that one of the browsers that might have trailed behind or said "We're not necessarily liking that feature" went ahead and implemented it anyway.

I think that there are still ways that we participate, and I wanna just go back to -- yes, it's true that there are some mechanisms in place where people's paid memberships do give them some veto power, but having a group of four or five players that have a bit of an adversarial setup between them is still far better that one vendor getting to completely decide a dictatorial style.

So when I say that the web means that we get to participate in it, I'm saying that at least it's not controlled behind some one closed door in a boardroom; there is a group that controls it, and we don't get all that we want, but we get a lot more now that we would have were flashed to be the web that we were building.

**Mikeal Rogers:** Also, I think one of the keys though is that you really do wanna get rid of that veto power. TC39 tries to reach a consensus, but at the end of the day if they have to, they'll come down to a vote and each member just gets a vote. If you have more members, it decreases the power that any one particular participant has.

And I do wanna give a shoutout to TC39 who runs the -- they own the JavaScript standard. They've done a tremendous job at just improving their process over the last few years... One, in making sure that things don't get certified before we know if they can remain compatible, a lot more participation from outside people and outside groups and developers... They've done a tremendous job at this, and I think that we should probably take some of the cues and some of the processes that they've pioneered and try to port them to other standards groups for the web.

**Kyle Simpson:** So now that we are all completely in 100% agreement on what the open web is and should be, let's talk about some of the things that are I think existential threats to the open web. I don't know if I agree with some of the claims that Joe Hewitt would be making, but I'm serving as a coach here this year of the Fluent Web Conference, which is happening in about a week and a half in San Francisco. The theme of Fluent this year is building a better web. For me, I had to internalize "What does that even mean to have a better web?" We have to then think about what the web would be -- if it wasn't going in the direction of better, what direction would it be going in? And there are several movements or flows towards things that can rip apart the open web. I think one of those that is almost universally decried by developers is this idea of digital rights protection (DRM stuff) being put directly into the web platform, so that vendors get control over the video content being played in a browser, or things like that.

**Mikeal Rogers:** It goes beyond just for videos. It goes way beyond just that.

**Kyle Simpson:** Sure, but they want control because they wanna be able to sell stuff and not have piracy, and that makes sense, they need to make money, but they are biting into one of the fundamental principles of an open web, which is that a developer is completely in control of that experience, and they're saying "No, no, no. There's going to be this outside (like you said earlier) veto power that you won't be in control of."

**Mikeal Rogers:** \[00:36:08.24\] Not just developers, but users as well. The users of the open web are no longer in control of their browser.

**Kyle Simpson:** That's true. That's why Tim Berners-Lee is so vehemently against it and why he's campaigning so vehemently against it. He created this thing and he's saying "Wait a minute, we need to be worried about the direction that that's going in." But there's no clear right answer here, because keeping it out means that content producers have to go back to the drawing board and figure out a different monetization model than just straight up content access cost; they have to figure out how they're gonna account for piracy and other bad actors and things like that. So that's an existential threat to the open web; to me, that's not just a single step, that is A step in a direction that goes much further, where lots of different people, governments and other people say "Well, if Hollywood can step in and control that experience, then the United States government now wants to step in and control that experience, and we want a hook, too." There's a lot that that road can go down, and I don't think we should even open the door.

The other big one is ads. That's the big elephant in the room, because again, there's a monetization model that we need to support for the web; people wanna build businesses on the web and not just have hobby websites. We need to support business on the web, and part of that is people giving away content "for free" but then showing you ads to get it back. There are some very interesting plays going on right now with what they're doing with the Brave browser and trying to upend this world, but the way that content publishers see it right now, they should be in total and complete control to track your experience, and they'll sort of nod with "You know, we'll personalize your experience so the ads that you get, you'll like", but that, as a user, is yet another control that's being taken away from me; my privacy control is being taken away from me. These are things that I think really harm the future of the web.

**Mikeal Rogers:** I think even just beyond privacy, these ad networks have actually also become vectors for people to do different phishing attacks, and things like that... And not just phishing, but also getting you to download something and then taking over your entire computer and having that kind of extortionware model where you have to pay them Bitcoin in order to get your computer back. A lot of that stuff is actually delivered over these ad networks.

Most people, when they put an ad on their site, they don't do the content deals to get that ad placed; they rely on some kind of ad network to do that placement, and those ad networks are being constantly scammed by incredibly sophisticated attacks to get these ads in. So literally, these are not verifiable; it's not possible to get them out without just saying "No, we're not gonna have ads anymore." Just like it's not possible to protect privacy without saying "You know what, we're just not going to allow certain features in the browser that allow this kind of tracking as well."
Brave has been incredibly aggressive about ad-blocking and tracker-blocking, and as a result a couple sites won't work, because they're reliant on those features. But if you look at some of the announcements that came out from Safari, and I know that even some of the Chrome people are looking at it - some of these features that we have on the web that certain sites depend on may actually get turned off because of these concerns.

**Kyle Simpson:** And maybe they should be, right? Maybe we did put features into the web that sounded great, and then we kind of came back afterwards and we're like "Ugh, I don't know about that."

I remember -- I think one of the classic cases was when you have a link that gets changed to a different color when it's been visited, and then some enterprising hacker has figured out "Oh, I can track somebody's browsing history by making links in the background and checking the colors to see if they visited it."

\[00:40:06.26\] Well, rightly so, we had to rein back in some of that functionality to say "Whow, whow, whow... Your ability to check on the color of a link is not more important than a users' need to have privacy." That goes back to -- the web platform is guided (or should be guided) by this thing called "the principle of constituencies." Go look it up if you haven't read this before; it says "Wherever possible, where there's a conflict between priorities, the users come first, and then developers, and then implementers", and way, way down the list is gonna be somebody who wants to track and make an ad more personalized to somebody. So it's right that we sometimes have to rein those things back in.

**Mikeal Rogers:** I think one of the things that we really need to point out too is that the reason why this is an existential threat to the web is that there are constantly competitors to the web, and they are predominantly proprietary competitors. But the reason that the web has always won, and why the web won when everybody was writing Windows software and all of a sudden the web exploded was that 1) it was more secure, and 2) it was usually more performant if you were using multiple applications. Anybody who ran a Windows computer in the late '90s knows that the more that you install software, the slower your computer gets.
If you go to a bunch of different websites, your computer doesn't get slower the more websites that you visit in a single tab. And the security model is really important. You're literally running arbitrary code that random developers wrote, on this computer, and somehow these browsers aren't constantly being taken over. And that is just not the case with desktop software or with a lot of the software in these app stores and things that we're running.

So the reason why an app store like iOS has might beat the web isn't because people just love their iPhones and there's some kind of experience thing, it's the performance and the security, and we need to be better, we need to be leading the way in terms of performance and security. If we're not, we're gonna lose out.

**Kyle Simpson:** There's obviously a huge push in the last year or two, and Google spearheaded the effort largely towards progressive web apps, to try to bring web apps to parity with native apps. Some people say "Well, maybe there shouldn't even be parity. Maybe they really should stay distinct", but there's a big push to blur or erase as many lines between the web platform and the app platform as we can. I think some of the discussion about that - and about the word "performance" even - misses the fact that users... End users, not developer users, but real end users, like your relatives and random people on campus or whatever - there's only a few currencies that those end users really care about.

I would argue that end users understand stuff like "This zaps my battery really quick and it makes me have to recharge my device a lot." I'd argue that they understand stuff like "Wow, that cost me a lot of bandwidth." That's for people in parts of the world that don't get unlimited bandwidth, like we might get here in the U.S. If they're on metered bandwidth, "Wow, this is really data-heavy. Every time I use this app, my data bandwidth costs go through the roof."

Those are currencies that users really care about, and if we want to get to the point where end users care so much about the web versus app platforms, that they vote with their dollars that they buy the web rather than buying apps. We're gonna have to speak to those currencies and not just to the "Oh, I feel really good because I can write better code than a service worker."

\[00:43:54.10\] I totally get why service workers are awesome, but an end user is never gonna care whatsoever about that. They will maybe care about offline, but they're several steps removed from what we focus on as developers and what a real end user is gonna vote with.

**Alex Sexton:** Sure. It's a weird discussion to me, because we had a time when the web was the leading thing, and it was not a good time. I don't think the web is set up to be a good leader, because things are so difficult to change in a good way. The process for adding or removing or changing something in the web is a lot harder and different than the process for so-and-so's proprietary application/operating system to do so.

I actually find them to be this really good, symbiotic relationship; it's the gut bacteria inside of a human, or whatever. The explosion of good, fast mobile applications was an absolute 100% driver in quality, good improvements in the web. It is the single most important event that occurred that caused the web to get better in the last ten years, in my opinion. And I think the web will always be a little bit behind, because they wanna do it right and they wanna do it in a backwards-compatible way. They have a lot more constraints... And that isn't to say the web doesn't ever innovate; there's plenty of innovative parts of the web, but I think as far as the edge of what users want, the fact that some proprietary thing can iterate so much more quickly means that the web will always be a little bit behind, and the web shouldn't always just do everything that they do... But it's like a consideration, it's kind of like a testing ground. I think the web will outlast all of those things. There will be new types of applications, augmented reality space, blah-blah-blah-blah are the things that are pushing the web forward in 15 years from now. So I think it's a symbiotic relationship, I don't think it's a killer. The web just lags a bit.

**Mikeal Rogers:** Are you telling me that I shouldn't build my brand new artificial intelligence virtual reality startup on the web?

**Alex Sexton:** I'm telling you you shouldn't build that at all, because it sounds dumb.

**Kyle Simpson:** \[laughs\] Alex, I think you have a fantastic point. It does really kind of ask the question for all of us (developers) to ponder - is the fact that the web (and especially JavaScript) values backwards-compatibility so deeply in its DNA (something written 22 years ago is supposed to still keep working today)... That's always been touted as one of our strengths, but is it a strength, or maybe it's a weakness? Because I think one of the reasons why we're slow to change is because every time we make a decision we feel like we're stuck with that decision forever.

**Alex Sexton:** Yeah, I think it just causes us to need to create different solutions. Rather than making a backwards-compatible change, we make a sister standard that can work alongside the old one. There are plenty of ways to store data in a browser that aren't cookies now, and we didn't have to kill cookies in order to make those work. We were able to make them faster or more secure or asynchronous - all the different ways that those things are different, we were able to add those things. The difference I think is that when Apple puts out a new device, you've gotta get it. You can only be one device back, two devices back max before you have a bad time, and I think you can still be on -- you know, XP is pretty dead now, but even for a long time, you could be on XP with a Chrome install, and it'd be fine for the most part... Especially since mobile devices were so far behind CPU wise and if people were talking about that.

**Mikeal Rogers:** I think the only wrench in your argument is that the Apple watch is the number one device that's sitting in somebody's cupboard somewhere. \[laughs\]

**Alex Sexton:** Sorry, I'm confused about what that has to do...

**Mikeal Rogers:** You were saying that you can only be one device back, or you constantly have to be getting the new device, and I think that there's actually like a fair amount of fails that happen as well. I'm still not convinced with all the VR stuff at all.

**Alex Sexton:** It's riskier on their end, especially when they have to make hardware. That's a business I don't wanna be in. But I guess the openness of the web and the hopeful inclusion of the most amount of people via the web -- like, the non-prioritization of companies, or Americans, or whatever, hopefully... Of course, those things happen; the democratization, or whatever words you wanna use to say that everyone's welcome means that the web works longer for Americans, but it just works for people who are in situations where they can't have the latest devices and run the latest iOS, and upgrade their $700 phones once a year.

I think it's pretty fundamental to the inclusion, the neutrality, whatever. Even though we fall flat in that way and in so many other ways, we should always be getting better. I think that's why it's a fundamental part of that, and I don't think we should get rid of the backwards-compatibility stuff. Rarely is that the cause of problems. It's the cause of frustration. Rarely is that like the blocker, I guess; it's always just a concern that we have to work around. It reminds me of the .mjs stuff in Node... That's stupid \[mumbles\]

**Mikeal Rogers:** Don't get me onto this... You're gonna make me go off on a random tangent now.

**Alex Sexton:** Yeah, it's stupid and sucks and like there those people who use the bad thing are the ones who should change. But at the end of the day, add a freakin' letter to your thing and it'll keep working. It's an uglier platform because of that history, but it doesn't fundamentally break anything, in my opinion. While the web may be dirtier and uglier and have really long names for grabbing selectors even though it doesn't need to, it's just like... That's the web that we have. The backwards-compatibility is worth the extra characters to type.

**Mikeal Rogers:** We're gonna take a short break, and when we come back we're gonna get into our project of the week, which is the first WebAssembly based project that we've done on the show. Stick around.

**Break:** \[00:50:59.02\]

**Mikeal Rogers:** Alright, so the project of the week is Blake2b-WASM. I'm not gonna spell this out, I think that you're just gonna need to check the show notes if you want a link. This is Mathias Buus, one of my favorite programmers in the Node and JavaScript community. BLAKE2 is a fast secure hashing algorithm, and this is used in Sodium encryption and a bunch of other encryption libraries.

When they first started talking about WebAssembly, one of the things that they kept talking about was "We'll be able to do these incredibly fast and efficient algorithms." This is actually a pretty discrete algorithm that we need for a bunch of different crypto. Mathias has actually written this in C++'s native module in Node.js. He's written it in pure JavaScript, so that it will work in the browser today, and now he's actually implemented it in WebAssembly. He's got benchmarks comparing the three of them, and also if you dig into how this library is being used, you can see how to poll in a WebAssembly library if your browser supports it today, and still have plenty of fallbacks, and stuff like that. So what do y'all think of this?

**Alex Sexton:** That seems like the whole idea behind WASM, like being able to still write in regular web languages - you build your interface in JavaScript and React, whatever you wanna do, and then you have a worker that hits WASM stuff for really complex things, like the BLAKE algorithm, or any kind of hashing algorithm would be a really easy choice to do this with. So it seems like a perfect use case; it's THE use case.

**Kyle Simpson:** Do we have any idea -- I was just taking a quick look at the repo... Do we have any idea what the source language of this is? When I look at that repo for Blake2b-WASM, it just says "implemented in WASM." Did he literally write the s-expressions, or was that transpiled from some other source language? I think that's the bigger narrative about WASM - what shift will there be from writing stuff in JavaScript, to what other languages and what will that mean for JavaScript?

**Alex Sexton:** Yeah, I imagine he took the standard implementation of BLAKE. I'm trying to find the thing... I think it's C++.

**Mikeal Rogers:** Yeah, based on the comments, it's compiled.

**Alex Sexton:** Oh, actually... There's a Go implementation as well; it could be Go. I think it does matter, but in this case it seems like he \[mumbles\]

**Mikeal Rogers:** I think he may have compiled, but I think he may have also tweaked it by hand. The wat file is only 25,000 lines.

**Kyle Simpson:** Only 25k? Wow... \[laughter\] What I'm getting at is that I'm excited about what WebAssembly is gonna do for performance. I'm waiting around until we start to see, because I don't think it will be too long - maybe a year at most - before we start to see frameworks saying "You know what? We went ahead and re-implemented our Virtual DOM diffing (or whatever) in Rust and compiled it to WASM", or whatever language they choose... So it makes a lot of sense to push the most performance-heavy kinds of things into WebAssembly. The question will become, once you've done that, once you've opened the door as a library, as a framework or as just a company that wrote an application, can you just start making the performance argument for virtually every line of code, to where we get to a future where 80%, 90%, 95% of a web application is actually in something entirely not of the web, if you will; it was written and deployed on the web, but it was written in a more traditional sense, so there isn't as much of that open "View source" DNA to the web as we used to have. That's the part that I'm curious about. But like you said, Mikeal, Blake2b just seems like a perfect use case for WASM, I'm glad to see it.

\[00:56:15.23\] It's very cool that we now have all the major browsers on board, so there's almost no reason to not start exploring this space, because they all have it, so we might as well start seeing what we can do with it.

**Alex Sexton:** Yeah I heard it's written in C; the official implementation is C, not C++. Yeah, I think we're already past the point of "View source" being super useful.

**Mikeal Rogers:** \[laughs\] Yeah... I think that I do want line numbers; I like having line numbers, and pulling those up in an inspector and looking at the source, but yeah... Literally clicking "View source" and sorting through the million lines of code in an average application today is slightly less useful.

**Alex Sexton:** Of minified code, right?

**Mikeal Rogers:** Yeah, I forgot... \[laughs\]

**Alex Sexton:** I think we're already doing so much compilation that the compilation "View source" argument is already mute. We just need better WASM decompilers. In the same way we can pretty-print the minified code of a Webpack-compiled React application that was also transpiled with Babel and somewhat backwards figure it out, decompilers exist for most languages; we could reverse-engineer the C in this and get a similar thing, you just have to read C.

I think the fact that we do this more is only because we used to do it a lot, and I don't think it's a bad thing that we do decompilation to figure out how things work. There's still no fundamental thing that makes that illegal on the web, even with WASM; it's just that we need new tooling. There's no reason DevTools couldn't implement a WASM decompilation view for minified or precompiled WASM.

So I'm not sold on the idea that we're gonna break the web by having compilation targets, but I'm also not necessarily sold that at any given time more than a small chunk of people will be wanting to write in C.

**Kyle Simpson:** Well, maybe not C, but I think there's probably a pretty significant chunk of people in the Node ecosystem that have at least considered writing parts of their Node applications in Go, for example; that seems kind of a natural bridge, and many high-profile companies have moved there.

**Alex Sexton:** They have that option.

**Kyle Simpson:** They have that option of course now, but I'm saying they could have the option of not even moving outside of the Node ecosystem. If V8 supports WASM and Node supports that, you might potentially see people writing Node applications with very little JavaScript.

**Mikeal Rogers:** I don't think I've ever seen it with Node. I've seen it with Rust a bunch, though.

**Alex Sexton:** Yeah, but why wouldn't -- I guess on the server people already have the option to do whatever they want. They can just write their whole application in Go, with a Go server. We already see this choice being made by people, and people still choose to write in modern JavaScript. I'm not saying there won't be websites that are completely written in other languages, but I don't feel like people choose JavaScript because they're forced to only. I think people like it, and as it improves, it will have the things they need to not want to switch... And if it doesn't, then good. There's no reason to hold on to JavaScript just because we all have fun memories of Ajaxy in 2009, or whatever. \[laughter\] If it gets beat as the best thing and it's compatible in a way that makes the web principles not break, then cool; I'll be the first to switch over to it, but I don't think that's the case.

**Kyle Simpson:** \[01:00:14.04\] Speaking of JavaScript the language progressing, I did find it interesting that just apparently at the most recent TC39 meeting we saw another -- and I say "another" because I keep track of where proposals are, and this is at least the second or third one that made it all the way to stage three, which ostensibly seems like "Hey, this thing's gonna land in the browser, or in JavaScript", and then they pulled it out. The latest victim, if you will, is SIMD extensions. It seems like the story is "Hey, we don't need SIMD in the language because now we have WebAssembly."

In some respects, that's a shame, because I was kind of looking forward to that and I was excited about it, but in other respects I think what's good - Brendan Eich described this a couple years back when he first talked about WebAssembly, that it could sort of be a pressure release valve on the tension of wanting to put so much stuff into JavaScript the language. Maybe what we'll start to see is that JavaScript the language can improve in readability and not necessarily have to improve in adding all these new hyper-performance optimized APIs.

**Alex Sexton:** Yeah... I think it's silly to think that JavaScript was going to be the best way to do things whenever SIMD was -- like, simultaneous operations on a CPU is like not the level that I think most people wanna be building websites in. If your website needs that, then it's likely that there's a better choice for tooling, and all that kind of stuff then exists in JavaScript. So I think that pressure release valve is good. I kind of wish it still existed, because -- for the most part, as long as it doesn't affect me, I'm glad it exists... But I don't know; I like that pressure release. It's definitely a good way of thinking about it.

The Brian LaRues of the world who are very against adding anything I think will also appreciate it... Because there definitely is pressure. "We can't do X and Y and Z that everybody can. How come we can't hit the right frames per second, and all the other things can?" Well, those are built to do those types of operations. Clobbing that on to a language that wasn't built for that is maybe a bad idea. I'm okay if you're doing things that need simultaneous CPU operations. Use the languages that were made for that, and that's fine.

**Mikeal Rogers:** One interesting little thing I find in here is that if you look at the benchmarks, the WASM implementation is doing really well, but the native module in Node.js is actually still quite a bit faster.

**Alex Sexton:** Of course.

**Mikeal Rogers:** Then what's going on at WASM? That's kind of interesting. There may still be a really good place for some of these primitives to make their way all the way up in to JavaScript so that we can do some pure JavaScript stuff; you get some more performance without crossing that barrier between...

**Alex Sexton:** WASM is still pretty early though.

**Mikeal Rogers:** Yeah, that's true.

**Kyle Simpson:** One of the things that surprised me, didn't get a lot of fanfare and hasn't even been talked about much, but reading the release notes for ES2017, they just sort of slipped in that final bullet point that they added Atomics and Shared Memory, which is essentially threaded programming - a very light version of it, but for 22 years the main selling point of JavaScript is it's single-threaded; you don't need to worry about mutexes and semaphores and all that other kind of stuff, and now the pressure point with web workers and sharing memory between web workers was enough that that feature has now landed. I'll be curious to see whether that one pulls back because we moved in the WASM direction for threaded programming, for example.

**Mikeal Rogers:** \[01:04:24.20\] I would not compare this to threaded programming the way that most people understand threaded programming. It's much closer to the message passing structures that you might find in Go and things like that, to be honest.

**Kyle Simpson:** Well, they literally do have mutexes. The Atomics thing is "block on a read until it's alright" Now, I know that's CSPish, like Go, but it literally is "Hey, I don't know whether or not I'm the first one to read, so block on it." And I don't know whether the intention is that's the only API, they just put that very bare bones thing in and there won't be any more, or if that's just the gateway to lots more sophisticated threaded stuff coming to the language.

**Alex Sexton:** Yeah... I don't know. I think it's actually pretty important even in the JavaScript world to be able to share memory between workers though. You could be completely in JavaScript and still want that, and still have that be a very good performance increase, that isn't super CE, other than the fact that -- it's just that memory is tough to manage when you can't manage memory. Workers are a natural place to offload things, but if you have to duplicate memory every time you have a worker, it kind of ruins the whole thing.

**Mikeal Rogers:** And on that note, let's get into our picks. Alex, what's your pick this week?

**Alex Sexton:** My pick this week is Blake2b-WASM.

**Mikeal Rogers:** Oh, no... \[laughs\] We totally mess this up, man.

**Alex Sexton:** Was that your pick, too?

**Mikeal Rogers:** \[laughs\] If you need to think of one, we can go to Kyle.

**Alex Sexton:** Yeah, I'd like to hear what Kyle has to say.

**Kyle Simpson:** Well, I have to pick this week the Fluent Web Conference, coming up on 19th-21th June, out in San Jose. I am, as I said earlier in the episode, co-chairing this conference, and it is not too late to get in. We have plenty of seats open at the conference, we also have seats open in our training workshops... I personally am somehow also doing a class there, in addition to trying to co-chair the conference. We'd love to have you out at Fluent, to continue this discussion of what it means to build a better web.

**Mikeal Rogers:** \[01:06:52.18\] Alright. For my pick, you know, I've done a lot of bread-based picks on here for my bread-making; as a result of doing that for several years, I'm a bit overweight, my cholesterol is terrible, so I made some pretty huge dietary changes. I'm on a keto diet, and the one product that's just been like really saving me and helping me kind of stay in ketosis is this MCT powder by Quest. You can get that on Amazon, Quest MCT powder. If you're doing a keto diet, it's the best.

**Alex Sexton:** That was an interesting pick. My pick is not a dietary supplement this week... It's Preact.js. We've talked a lot about React, and I reach for Preact occasionally, especially for a third-party type thing. If you're used to React and you really don't need very much of it -- it's definitely not API-compatible or anything like that, but if you remember, in the old world there was jQuery and then some people had some jQuery-like versions (I can't even remember what they are called). Preact is just like a 3 kb implementation of some of the most familiar parts of React. So if you need like a little widget and you don't want to start off with 40k and pull in Redux and all that kind of stuff, Preact is a pretty good choice, and we haven't really talked a lot about it.

There are a few other 3k-5k implementations of React and you can kind of probably find some comparison charts and things that people like about the different ones, but Preact is a good choice; the other ones are fine, too.

I find that a lot of people pull for React and the only thing they want is a render function and the change event to work the way that other things work, and then the other 39k is just relatively unused... So Preact.js.

**Mikeal Rogers:** Nice.

**Alex Sexton:** There's a good talk from JSConf EU, "Into the void 0", by Jason Miller.

**Mikeal Rogers:** Sweet! Alright, on that note, that will take us out. Thanks everybody for listening, and goodbye.

**Alex Sexton:** Bye, everyone. Thanks, Kyle!

**Kyle Simpson:** Yeah, thanks a lot for having me, guys. I appreciate it.
