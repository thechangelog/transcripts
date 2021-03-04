**Jerod Santo:** Oh yes, friends, you know with the sound of those Breakmaster Cylinder beats that it is party time once again. I'm Jerod, I'm your internet friend, and I'm joined by a few of my friends. Nick Nisi is here. What is up, Nick?

**Nick Nisi:** Ahoy-hoy!

**Jerod Santo:** Ahoy-hoy to you. And we're also joined by Kball... What's up, Kball?

**Kevin Ball:** Hello! I am currently an internet friend, but hopefully someday we'll go back to being friends in person. One day we'll be able to travel.

**Jerod Santo:** Someday... One of these days we'll visit all five continents together, and do JS Parties on all five continents. Fact-check - false. We are also joined by an impostor from our sister program over there. He's a gopher, but he secretly likes JavaScript. Shh... Don't tell the Go Time listeners. It's Mat Ryer. What's up, Mat?

**Mat Ryer:** Hello! We're more of internet acquaintances, aren't we, Jerod?

**Jerod Santo:** Yeah, let's keep it formal...

**Mat Ryer:** Yeah. Boundaries.

**Jerod Santo:** Boundaries are good.

**Mat Ryer:** Yeah.

**Jerod Santo:** And someday hopefully we won't become real friends.

**Mat Ryer:** Okay... It's a brutal way to find out, but... No, it's fine.

**Jerod Santo:** \[laughs\] You may know Mat from a past episode of JS Party. Mat is actually a Svelte user, and came on to talk about how they're using Svelte on Pace.dev, so there you go - happy to have you, Mat.

Today we are going to do a few things, maybe even four things, which is we are going to do our recurrent segment Story of the Week, we are going to do TIL (Today I Learned), we're also gonna sneak in, if we have time, an unpopular opinion segment... And then finally, again, if we have time, shout-outs to people doing cool stuff in the industry.

\[00:04:03.19\] So let's do Story of the Week, shall we? This is a fun game we play, where everybody takes turns sharing what they believe is the most important, or the biggest, or the most interesting (or at least the one that they could find) story of the week, and we discuss.

Now, we like to have jingles for our segments... And you may remember that Nick came up with this excellent jingle for Pro Tip Time.\[jingle 00:04:25.28\]

**Mat Ryer:** Brilliant.

**Jerod Santo:** So we do not have a story of the week jingle, and what you may not know is that Mat Ryer is actually very musically inclined. He plays the guitar; if you're watching live, you can see some guitars back there. He sings songs, he writes songs... So Mat, if I might just really put you on the spot and challenge you, can you please come up for us a Story of the Week jingle, live, on the spot, without any rehearsal?

**Mat Ryer:** Yeah.

**Jerod Santo:** We appreciate that.

**Mat Ryer:** But there really is no rehearsal; because you're saying it like we've planned this.

**Jerod Santo:** I know... But \[unintelligible 00:05:01.22\] embarrass yourself.

**Mat Ryer:** Story of the Week.

**Jerod Santo:** Yeah, Story of the Week.

**Mat Ryer:** Right, okay. Okay, ready? \[live jingle 00:05:12.10\] "It's time to take a peek... It's time for the Story of the Week."

**Kevin Ball:** Damn...

**Jerod Santo:** That's actually better than I was expecting, dude. Nice job.

**Nick Nisi:** Way to play my jingle first, just to give like the opposite of that...

**Jerod Santo:** \[laughs\] Well, we wanted to lower the bar and make sure there wasn't too much of expectation... And that was actually completely ad-hoc. Mat did not know about that. So... Nice job, Mat.

**Kevin Ball:** The first of many surprises that we're going to spring on him today.

**Jerod Santo:** That's right.

**Mat Ryer:** This does feel increasingly like an ambush.

**Jerod Santo:** Well, you are a guest, and we like to ambush our guests... No, we like to treat them. So please lead us off, as our guest, the very first story of the week. Mat, what did you bring?

**Mat Ryer:** Well, I've found this very interesting story about Citibank, who due to bad UI design accidentally sent out 500 million dollars. So yeah, apparently there was a form in this very complicated, old bit of software, and it's not very clear when you look at it what you should do, and I guess there's no confirmation... So somebody actually paid out -- they had loans that they owed, and they accidentally just paid off all the loans, to the tune of around half a billion.

And apparently, in New York, according to New York law, if you make a wire transfer by mistake, then you have to pay it back... Unless it's to pay off a debt, and that was this case. So the judge found against Citibank; it's ongoing, the case, but... There you go, the importance of good UI design. I think it's vital, and this just highlights that. Your websites might not lose 500 million dollars, but it still can be annoying.

**Kevin Ball:** I saw some screenshots of this UI that had a form with approximately 30 checkboxes, close next to each other. Right to each other was "Pay the interest" versus "Pay the principal", and then apparently they do have a confirmation, but it doesn't say anything about what it's confirming. Just "You're gonna send some money somewhere. Do you wanna do it?"

**Mat Ryer:** Yeah. See, I like optimistic UIs. If the operation is easy to undo, then I like to be able to just click Delete, and it's gone. And if that was a mistake, I can undo it. But when you're sending out 500 million dollars...

**Jerod Santo:** It's pretty optimistic.

**Mat Ryer:** Yeah. You want slightly better confirmation, don't you?

**Jerod Santo:** So whose fault was this? Is there any insight onto the process that created this, the systems in place? Or was it just kind of like an ongoing story...? Because it's easy to just blame the designer or the developer... But surely, there's systemic failures that have allowed these things to go out, right?

**Mat Ryer:** \[00:08:07.27\] Yeah. It'll definitely the fault of the project manager, won't it? We would never blame the developers, of course. But no -- and actually, it went through like three people who had to confirm it, because it's such a big number that they're dealing with... And they all just, by looking at the UI, they all inferred the wrong thing, they all assumed the wrong thing. And it was apparently a very reasonable thing to assume as well, when you look at what they put... So I don't know... Whose fault -- I don't know... I don't know if we have to blame, do we? Yeah, we do. It's 500 million dollars.

**Jerod Santo:** That's right. Someone's gotta pay for that.

**Mat Ryer:** Someone's gotta be fired.

**Jerod Santo:** Pretty much...

**Nick Nisi:** I wonder, as the developer of that program, if you could work -- knowing that loophole exists, develop towards that loophole; what are they gonna do, fire you? You're 500 million dollars richer, so... \[laughter\]

**Jerod Santo:** Like a salami attack, but in a UI. UI salami. It worked on Office Space, didn't it? I mean, he ended up on a beach somewhere, with a bunch of money...

**Mat Ryer:** Yeah. And Gus Gorman from Superman 3 was also able to -- it wasn't a UI thing, but he was able to scrape the pennies, and got himself a lovely little sports car, if I remember correctly.

**Jerod Santo:** That's right.

**Nick Nisi:** I only know of that reference through Office Space.

**Mat Ryer:** Oh, really? \[laughs\]

**Kevin Ball:** I recently ran into a similar kind of issue... My dad was trying to get signed up for his Covid vaccine, and he had recently had a shingles vaccine... And there has to be some sort of gap between when you have one and the other... And whoever the programmer was had developed it so not only could you not schedule an appointment within that gap, you couldn't even do the scheduling within that gap. So he had to wait till the shingles gap was over to get in line for the Covid vaccine. Brilliantly stupid.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** It's funny when you think of tech that's working in such important areas, and little mistakes like that - which are very easy to make when you're a programmer...

**Jerod Santo:** Right.

**Mat Ryer:** ...or even just a dev team. When you say "You can't schedule this in this time." I would probably think that was probably an easy fix that they did at the time, and it just turns out -- that's the importance of testing, I suppose. You should really test your bits.

**Nick Nisi:** Also, knowing the app as a whole, or the purpose of what you're trying to do as a whole... Because when you dive down into those micro-requirements, it all makes sense... But then when you start combining them together, then it just kind of goes awry, because it may not fit with either the actual goal that you're trying to do, or how people will actually use it... Because when they're all put together, nobody really thought about how things will go.

It kind of reminds me of a similar story - it was either Venmo, or Cash App... Sending money and requesting money look the same in the UI, so people would just be like requesting money, and people who got those requests for like $500 would be like "Oh, somebody's sending me $500. Accept", and they were sending them $500, or whatever... Yeah, bad design.

**Jerod Santo:** It reminds me of the original Ethereum blockchain, which was pure insofar as it was immutable, you could never make a change to it... And that was part of the system. "The code is the contract" was kind of the motto. And that was all well and good until they got hacked, and I can't remember the exact details of how somebody made off with millions of dollars in cryptocurrencies... And the entire Ethereum ecosystem -- actually, they divided in half over this. That's why there's Ethereum Classic and then the one now. They basically decided "That whole immutable code as the contract thing - yeah, let's throw that out and fix this bug."

**Kevin Ball:** There's so many things like that in the crypto space, where it's like, we can replace everything with the assumption that once it's in code, it's infallible... Forgetting that "No, wait - actually, humans have to write that code. And humans create bugs."

**Jerod Santo:** \[00:12:00.29\] Right. What we do is we make our bugs immutable, we put them into an immutable system. So yeah, when money in involved, and life or death is involved, things need to be taken more seriously than the typical web developer mindset.

**Mat Ryer:** Yeah. I had a manager once, who in my performance review said "We don't want to have any code that's got any errors in it." That was the thing.

**Jerod Santo:** Were they firing you when they said that?

**Mat Ryer:** No, no... It was leading up to it.

**Jerod Santo:** Yeah. \[laughs\]

**Mat Ryer:** The proposition was they didn't want any bugs in the code, obviously...

**Jerod Santo:** Right.

**Mat Ryer:** ...but yeah, I don't know. There seemed to be this idea -- and in Go in particular... Because Go doesn't have -- I'm not gonna talk about Go on JS Party...

**Jerod Santo:** We're gonna edit this part out anyway.

**Mat Ryer:** Yeah, sure. Well, the error handling is explicit. It's just another value that you can return from functions, and things. So error handling is something you put a lot of thought into, because it's something you explicitly handle all the time. So there's a lot of talk about errors, and things... And I think he was just tired of hearing about errors and wanted to hear about features instead... So that was it. One of my KPIs was "Fewer errors in the computers."

**Kevin Ball:** He just wanted you to get up and go.

**Jerod Santo:** Just tell him, "I want a toilet made out of solid gold, but it's not in the cards..."

**Mat Ryer:** Yeah...

**Jerod Santo:** Here's your Austin Powers reference for the day...

**Mat Ryer:** Not solid gold.

**Jerod Santo:** No.

**Mat Ryer:** Just get gold-plated, because the solid one - it's actually quite a soft matter...

**Jerod Santo:** Malleable, yeah. Good point.

**Mat Ryer:** Yeah. And especially if you're on there for a while... Once it's warmer, you're in trouble. I'm just saying, but...

**Kevin Ball:** You've put a lot of thought into this...

**Jerod Santo:** Alright, well let's move on, because Mat's trying to make this the longest Story of the Week entry. We don't vote on longest, we vote on biggest, or most important, so... It's not gonna work, Mat. Kball, what do you have for Story of the Week?

**Kevin Ball:** Something that is not gonna win biggest or most important...

**Jerod Santo:** Okay. \[laughs\]

**Kevin Ball:** However, I thought it was really interesting. I recently saw a release announcement for a JavaScript framework called Blitz.js. And what made it interesting to me is not the framework itself, which looks like another take on trying to do kind of an all-inclusive JavaScript framework, kind of similar to what Redwood tries to do, things like that... But what made it interesting is that they are touting that they're built on top of Next.js. We've had this trend for a while, where - okay, React and Vue and all these frameworks, they become a base layer, and then people are building these higher-level frameworks on top of them, like Next, and Nuxt, and Redwood, and whatever.

This is the first time I've seen someone explicitly going yet another layer, and saying "Okay, that first layer of additional abstraction configuration etc. - that's good, but that's not good enough. We're gonna go even further." And it made me wonder... I mean, this is a common pattern in the tech industry - you build an abstraction, once it gets solid enough you build another abstraction on top of it, once it gets solid enough you build another one on top of it... So I'm wondering if this is an outlier, or if that's the phase we're in now, where we're actually going up yet one more layer in the JavaScript framework space.

**Jerod Santo:** I think the key phrase there was "Once it gets solid enough", and I just wonder, if things are so moving, and at a certain point when you're playing Jenga, the top of the Jenga just gets so wobbly, because it's built on these layers that have lost some of their footing... So yes, we always wanna be adding layers on top, because that brings functionality to more and more people, which is the goal... But it's definitely a challenge to do that.

I don't know... Next.js feels pretty high-level, but... Is this where they start calling things meta-frameworks? Like, it's not a framework, it's a meta-framework.

**Kevin Ball:** I already call Next a meta-framework, or a higher level of--

**Jerod Santo:** So this is a meta-meta-framework.

**Kevin Ball:** Yeah...

**Jerod Santo:** Well, we have had Blitz's creator on JS Party last year, I believe; so he did speak Blitz, if anybody wants to go deep on that. It was just myself and Brandon talking about Blitz... So if you want a full conversation about that, the episode is called "Blitz puts React on Rails", episode \#133, so go listen to that.

**Kevin Ball:** Interesting.

**Jerod Santo:** \[00:16:13.28\] I'm curious what Mat or Nick says about Kball's question there.

**Nick Nisi:** Yeah, it's interesting that we're seeing these, and a lot of them tend to be built on top of React. Next is, obviously, and then Redwood is too, right?

**Jerod Santo:** Yes.

**Nick Nisi:** \[unintelligible 00:16:26.29\] is React?

**Kevin Ball:** It's built on React, yeah.

**Jerod Santo:** Yup.

**Nick Nisi:** So it's kind of further cementing something that Laurie Voss said on JS Party a few years ago now, that React may just end up becoming part of the -- not necessarily part of the language yet, but it's just expected in the ecosystem, in all of these frameworks... And maybe future frameworks - it will just be implied that it's React. It's just kind of interesting.

**Kevin Ball:** Oh, you're cueing up my later Unpopular Opinion.

**Jerod Santo:** Warm it up.

**Nick Nisi:** Yeah. I added \[unintelligible 00:16:58.13\]

**Jerod Santo:** Okay. So you wonder - we used to have this conversation around jQuery. React in a way is at least getting to the point of jQuery's ubiquity; not really much else in similarity, but... What happened when jQuery? Wasn't that like everything eventually became built on top of it? It's like that jQuery became somewhat built into browsers... So you wonder if a React-esque thing -- I mean, then you go back to Web Components, right? Like, how much of React will just get into the platform, so that we can not have to rely upon a library, but just use some of those as primitives and build different things from there.

**Mat Ryer:** Yeah, that's something that's quite exciting for me, is seeing all the innovation that's happening in browsers. I mean, some of the APIs that you have now, some of the things that you can do... Web Components is an interesting example. I find that all to be amazing.

So is Blitz.js - is that like a server-side thing as well? Is it kind of a backend and a frontend thing?

**Jerod Santo:** Yeah. So Next.js is hybrid. So you can do all pre-rendered stuff. Similar like a Gatsby would do. You can also have some server-side functionality with Next. So they can call themselves a hybrid framework, where it's kind of pre-rendered by default, but it also has server-side hooks to do different things... And then Blitz tries to flesh that out, I think in a way that's akin to what Redwood is doing, which is to kind of give you a full-stack, but kind of JAMStack-first approach at applications. That's going from memory by the way, so I could be...

**Mat Ryer:** It's got massive potential, something like that... Because there's a lot of things you have to worry about when you're working in those two different arenas. And if you could through a good abstraction do away with that... And I liked Rails; I used to be a Rails developer, actually... Some other things like convention over configuration, things like that. Go also has sensible defaults; so by default, things will kind of basically do what you want them to do, and then you kind of configure them from there. So those kinds of ideas I think are really quite nice... Especially for people that are new, and just want to get something built.

**Jerod Santo:** Absolutely. Well, let's do our last story of the week... This one's mine, although I didn't write it; I just found it. It's a very cool thing coming in from the V8 team.

**Mat Ryer:** I didn't write mine, the one about Citibank...

**Jerod Santo:** Oh, you didn't? I thought you were reporting...

**Mat Ryer:** I didn't know it was a -- yeah...

**Jerod Santo:** And Kball actually wrote Blitz.js, so it's really interesting...

**Mat Ryer:** Yeah, for this show.

**Kevin Ball:** Of course.

**Jerod Santo:** That's why he was surprised when I said we had the creator on the show, because he just didn't remember being a guest... This was from the V8 team, specifically written by Victor Gomes; the frame shredder - is that what he calls himself? He does. So on this piece, which I'll link in the show notes, he calls himself Victor Gomes, the frame shredder, which is a pretty sweet moniker if you ask me... If self-proclaimed. Maybe somebody gave him that. But his post was called "Faster JavaScript calls", and he's detailing some amazing work that he and the V8 team have done to make function calls in V8 quite a bit faster. I'm trying to pull up the numbers here...

\[00:20:21.10\] So when they're able to pull this off, they have 11% performance improvement in JIT-less mode, when you do not have a just-in-time compiler... And when using TurboFan - which I did not click through on TurboFan to see what it is; TurboFan is one of V8's optimizing compilers leveraging a concept called "Sea of Nodes". I'm just reading this off the website... So this is like another level of performance improvements that V8 can do. They get up to 40% speed-up doing this interesting trick.

I will just read a little bit from it, because he explains it pretty well. He writes:

"JavaScript allows calling a function with a different number of arguments than the expected number of parameters, as in one can pass fewer or more arguments than the declared formal parameters. The former case is called under-application and the latter is called over-application."

So this is a feature of JavaScript that allows you to do this. And he says:

"In the under-application case, the remaining parameters get assigned the undefined value. In the over-application case, the remaining arguments can be accessed by using the rest parameter and the arguments property", which is the arguments keyword. "Or they are simply superfluous and they can be ignored." So lots of cases, they don't really matter.

And V8 has this special machinery in place to deal with this argument size mismatch. So if you're passing in the wrong number of arguments, either too many or too little, there's like this whole dance that V8 has to do in order to handle that. And this performance improvement that they managed to do basically just optimized that case, and they do it by reversing the arguments.

And he goes through, in the blog post, details on how they're changing the way things get put on the stack and off the stack. It's way over my head - or way underneath, in terms of its depth - for me to completely understand, but it's really awesome work. I just love when lower-level things get improved, and just everything in the world benefits... Because that's the power of leverage in software development. You can do this tiny little thing, which was a lot of work for them... But at the end of the day, the change they made in code I think is probably minuscule, compared to the entirety of the V8 codebase... And it can just squeeze out performance for everybody who uses V8 all around the world. It's pretty cool.

**Mat Ryer:** Yeah. So that case you mentioned - would that only work if there's the wrong or different number of arguments? Or is it like the check that it has to do that was expensive? How often do you send the wrong number of arguments to a function in JavaScript?

**Kevin Ball:** Well, we're talking JavaScript developers, so...

**Jerod Santo:** I was gonna say I never do... \[laughs\] But that's because my code is always perfect. I don't know.

**Nick Nisi:** It's because you use TypeScript, so you know exactly how many...

**Kevin Ball:** I actually think it's not too uncommon of a case to have a REST parameter, right? Or instead of framing it as...

**Jerod Santo:** ...accidental.

**Kevin Ball:** ...the wrong number of arguments, there's two versions. One is optional arguments, and the other is variable numbers of arguments.

**Jerod Santo:** Right.

**Kevin Ball:** So this is the mechanism by which both of those are implemented within JavaScript.

**Jerod Santo:** Yeah. Which doesn't scale very well, but is a feature that's been there for a very long time. Lots of people, when you have optional number of arguments, they'll just pass an object... And you can set defaults... There's better stuff you can do. I think the use of arguments as a keyword or as a -- I think it's a keyword inside of a function... Which represents that and returns you a list, is not something that I use very often. Maybe some library authors have to deal with in order to provide a nice API to some of their functions... But I think in many cases that pattern has been replaced by objects in terms of optional arguments, or variable parity, basically.

**Nick Nisi:** \[00:24:16.20\] Yeah. And I don't even think arguments exists anymore in things like arrow functions.

**Jerod Santo:** Oh, really? So Mat's question stands though, is it improving all function calls, or only the ones -- well, I guess, is it the check that improves the...? I don't know the answer to that, Mat - is it the check that improves the speed, or is it the process once you get into that that deals with it. I don't know, I'll have to grok the blog post better than I did to answer that one.

**Kevin Ball:** One of the things that he highlights at the end of the post is that while this may not be super-common in user space code, the feature was used often in web frameworks to create more flexible APIs.

**Mat Ryer:** There you go, yeah.

**Kevin Ball:** So there's another example where because some of the libraries or frameworks that almost everyone is using utilized this feature, even if it's relatively obscure for some people, it is actually showing up in a lot of code.

**Mat Ryer:** Yeah. And people like the frame shredder, they really measure -- you know, when they're doing optimizations like this, they're really measuring this stuff. It's often very data-driven, so they probably wouldn't waste their time if it's not gonna have a big benefit.

And you know, you just imagine, at your job, the thing you do makes JavaScript a bit better, and then the whole of the internet just gets a bit better. That must be quite good for job satisfaction, don't you think?

**Jerod Santo:** One hundred percent. I think if you want to maximize impact, one of the thing you can do is go work for a large B2C platform. You could work for a Twitter or a Facebook. If you wanna maximize effect, like "I wanna affect the most people this way", something with a lot of users, the other way you can do it is go the other direction and work on the platforms that people create the apps with. You could work on Apple's Swift and -- what's the name of their frameworks? I'm forgetting, because I haven't done Apple stuff a long time...

**Jerod Santo:** Cocoa? That's old.

**Nick Nisi:** SwiftUI?

**Jerod Santo:** SwiftUI, but what's the name of their iOS SDK? Anyway, it doesn't matter. Apple stuff.

**Mat Ryer:** It's not open source though, that...

**Jerod Santo:** No, I'm saying you can go work on it.

**Mat Ryer:** Oh, right. Yeah.

**Jerod Santo:** You could still have a large impact, right? Everybody who builds on Apple's platforms is gonna be impacted by that work. But the web is the most impactful platform you could possibly work on, to your point, Mat... And working on the things that we build on top of is a huge job satisfaction, I think.

**Mat Ryer:** Yeah.

**Nick Nisi:** Could you just resign to calling V8 the web, as in THE JavaScript engine?

**Jerod Santo:** No, I didn't mean to, but... \[laughs\]

**Kevin Ball:** You kind of did. I mean, I think it really depends on what you find satisfactory.

**Jerod Santo:** Yeah.

**Kevin Ball:** Same thing can be said for working deep in operations inside of a Google or an Amazon or something like that. You spend all of your time finding these essentially micro-optimizations, things where you're saving a few percent overall here and there. In this case it's a large percent on a particular thing, which is actually a relatively small percent of any sort of overall runtime.

So you find these micro-optimizations and then you scale them out over the fact that you're running this on however many billion copies, or machines, or what have you... And I agree that doing it for something like Chrome, V8, what have you, is one of the widest scale-outs you're gonna see on that... But for me, that's actually not very satisfying, because it's focusing on these tiny little pieces, and you have to scale it out. The actual impact on any one individual is very small... And it's having massive overall impact, you're probably saving hundreds and thousands of CPU hours, and yadda-yadda, spread out across the entire world, but no individual is likely to notice the difference. I'd prefer to swing the other way, where there's a set of individuals for whom the work that I'm doing is extremely impactful, even if that set of individuals is smaller.

**Mat Ryer:** \[00:28:10.17\] So you'd rather make a few people very happy, rather than loads of people a little bit happy.

**Kevin Ball:** I mean, ideally I'd make many people very happy, but I'm gonna start at the first part of that. And this is one of the reasons I'm kind of a startup/small company guy for a long time... You start with figuring out something that makes at least a subset of people very happy, and then you try to gradually expand the set of people that's it's applicable to.

**Nick Nisi:** But even if you're only making a percent of a percent of web users happy with some optimization, that's still potentially millions of people.

**Kevin Ball:** I'm gonna make a percent of a percent of people happy...

**Jerod Santo:** He doesn't care. Kball doesn't care.

**Kevin Ball:** Well, here's the thing... I think these tiny improvements aren't actually -- like, over time they add up, absolutely. But you need 20 frame \[unintelligible 00:28:55.18\] to make something that ends up being user-visible.

**Jerod Santo:** I think it's just two different views of the world and both have a big impact, but what do you like to do and what do you care about? Maybe you'd like to see that impact big-time in a small number of people's lives... Or maybe you like to think that about the fact that "I just made this one patch to this one project, and even in the most minuscule way possible, I've touched millions of lives." So it's kind of just a perspective thing.

I definitely appreciate your perspective, Kball, being represented, because I do tend to think of like - the person who makes Ruby faster, and then look what that leverage does. But that's just -- because I've never worked on those kinds of things, maybe I have a little bit of envy of like "Man, I wish I could reach that many people with that small a change", because I just never have.

**Nick Nisi:** See, I'm going the opposite way. I'm aspiring to be the next left-pad.

**Jerod Santo:** \[laughs\]

**Break:** \[00:29:48.06\]

**Jerod Santo:** Alright, we are now ready to share things that we have learned recently. This is our "Today I Learned" segment, or TIL. We have an awesome jingle for TIL. Wait, no we don't... But we would love if Mat could provide one on the spot. Mat...

**Kevin Ball:** Since you did so well on the previous one.

**Jerod Santo:** Please give us a royalty-free TIL jingle.

**Mat Ryer:** Royalty-free?

**Jerod Santo:** Yes.

**Mat Ryer:** Okay. \[live jingle 00:32:07.29\] "Today I learned." Yeah? I mean, I didn't know where that was going, but... Is that right?

**Jerod Santo:** \[00:32:16.09\] \[laughs\] It started great... And it ended great.

**Kevin Ball:** And it wasn't very long, so there wasn't much of a middle.

**Jerod Santo:** That's right. So all around, high marks.

**Mat Ryer:** Great.

**Jerod Santo:** The only problem with it is the segment is called TIL, which you didn't even say, so...

**Mat Ryer:** Okay. If I've got time, I'll do another one.

**Jerod Santo:** Maybe we'll do a reverse-royalty, and every time we play it you have to give us a nickel. \[laughter\]

**Mat Ryer:** Right, TIL... I could do with a word that rhymes with L.

**Jerod Santo:** Fell. Like, I fell.

**Kevin Ball:** Going to hell...?

**Jerod Santo:** Going to hell... Under my spell...

**Mat Ryer:** \[live jingle 00:32:59.24\] "I've got a story that I'm going to tell/ You're gonna love it, baby/ I think it's swell./ I only learned it today, a TIL..."

**Jerod Santo:** That's it!

**Mat Ryer:** Rock and roll.

**Kevin Ball:** Brilliant.

**Jerod Santo:** That's the winner.

**Mat Ryer:** Cool.

**Jerod Santo:** Cool.

**Kevin Ball:** Could we have him on every week?

**Jerod Santo:** \[laughs\] Now you learn why we brought you on, because we just really needed jingles. \[laughter\]

**Mat Ryer:** You're really living up to your name... Because it's JS Party, and you expect dancing, music, booze...

**Jerod Santo:** That's right.

**Mat Ryer:** With Go Time, all we're really guaranteeing is it's gonna take up some time. And to be fair, we deliver on that promise every week.

**Jerod Santo:** \[laughs\] That's right.

**Nick Nisi:** Well, you're talking about Go, so...

**Kevin Ball:** I dance every week I'm on.

**Mat Ryer:** Yeah. I saw you dancing earlier, mate, actually. I'm impressed.

**Jerod Santo:** That's why you're welcome here. Well, if Go Time and JS Party had hair, JS Party would be a blonde and Go Time would be a brunette, what can I say...

**Mat Ryer:** I don't know what that means.

**Jerod Santo:** Well, blondes have more fun.

**Kevin Ball:** You lost me too, Jerod.

**Mat Ryer:** I'm triggered by the mention of having hair...

**Jerod Santo:** \[laughs\] You guys don't know the old saying "Blondes have more fun"? Come on.

**Mat Ryer:** Oh.

**Jerod Santo:** It's a terrible stereotype about people based on the color of their hair, but...

**Mat Ryer:** \[laughs\] You're walking it back...

**Jerod Santo:** It turns out it plays into your favor...

**Kevin Ball:** Jerod, when your foot gets far enough in your mouth, you wanna start pulling it out, rather than continuing to swallow.

**Jerod Santo:** You're saying that because you're brunette, Kball. Alright, let's move on. Add a break right here... \[laughter\] TIL. Nick, hit us up. You've learned lots of things. I heard there might be even more than one that you might be sharing, so... Please do.

**Nick Nisi:** Alright. Well, this is something that I actually learned yesterday, and I used yesterday, which is pretty awesome... Have you heard of this cool thing called optional chaining? It's a new operator in JavaScript...

**Jerod Santo:** I have.

**Nick Nisi:** Yeah. It goes ?. And it's really cool. Because then you can say "I wanna get to foo ?. bar" And if that exists, I get the value of bar, but if it doesn't, I just get undefined. Did you know, in Today I Learned, that you can use that for calling a method as well? So instead of saying \[unintelligible 00:35:10.08\] and call it. And if it doesn't exist, it won't call it.

**Kevin Ball:** Yeah, that makes sense.

**Jerod Santo:** I did not know that.

**Kevin Ball:** Because methods are properties in JavaScript, right?

**Nick Nisi:** Yeah.

**Kevin Ball:** So just living on those objects.

**Nick Nisi:** Yeah. It's amazing.

**Jerod Santo:** That's cool.

**Nick Nisi:** It's so cool... I can't wait to see how it goes over in code review.

**Jerod Santo:** That is cool. Now, how many times can you do that in a row? Can you just nest and nest and just keep on going?

**Kevin Ball:** I would imagine it depends on if your function is returning an object itself that's gonna have a method on it, right? Because it's still using the same question of "Does this property exist on this object?" But in that case the property is a method. So in like a jQuery style API you could use it indefinitely. You could ?. to your heart's content.

**Jerod Santo:** \[00:36:09.02\] That sounds fun. That sounds like a good way of taking back that new optimization they've put in V8 and just wiping it out. \[laughter\] "Oh, you saved us 40%? I'm gonna cost us infinite percent."

Anything else you learned recently, Nick?

**Nick Nisi:** Yes. I have been playing around with SSH tunneling. It's really simple, and I don't really have a clear goal with it, other than I was trying to -- I run a lot of Docker containers, which means that my fans spin up a lot... And I was like "I wonder if I could just have a machine running those Docker containers, but pretend like it's just my machine." I could totally do that, to an extent, with SSH tunneling. So I could just SSH into that machine, and local forward all of the ports that I need, like localhost:3000. Anytime I try and hit localhost:3000 on my machine, I actually go hit 3000 on the machine that I'm SSH-ing into, which is really cool.

And you can do it the opposite way too, where you could expose your local machine globally... But I'm scared to do that right now. I don't really have a use case.

**Jerod Santo:** Make sure you do that on purpose.

**Nick Nisi:** Yeah. But it's really cool that you can do that, and it's one line to set up. Or you can add it to your SSH config, so that every time I SSH into that machine, I can just have it automatically forward those ports, and everything is immediately set up... And then when I disconnect, it's all taken down. Easy peasy.

**Jerod Santo:** Right. That is cool. Here's a use case for that, which I used to do quite often... If you have an admin tool, like a GUI to connect to a database, and you wanna connect to a remote database, but you do not want to expose that port remotely of course, because you do not want your database to be exposed to the world, and if your tool does not have tunneling built-in, which a lot of them nowadays will have tunneling built-in to the connection inside the tool... But if they don't, and they just have regular SSH connections -- or not regular SSH connections; regular direct database connections... You can basically tunnel to that remote machine, expose it just locally through the SSH tunnel, and then connect directly with the database client. Pretty nifty.

Nick, are you going for the trifecta, or should we pass it on to Kball?

**Nick Nisi:** I've got one more, I could do it.

**Jerod Santo:** Let's do it.

**Nick Nisi:** Alright. I've been playing around with template literal types in TypeScript 4.1. And the new type -- it's using template literals how you would use them normally in JavaScript, but you can use that to dynamically build types... Specifically like string literal types, where you can say "This value can be the string Jerod, or Kball", and if it's anything other than that, you get a type error. Well, you can dynamically create that, so I could have a list of all of the guests on JS Party, and then create a type, meaning that the current speaker is one of these three types, and it's Mat, Jerod, or Kball... And combining that with the ability to import only types where you just say "import type" and it's just a regular import statement after that, but when it goes to build, it won't actually have a binding to that library. So it's only importing the values to be used as types in your local code, so that you won't accidentally massively increase your bundle size. And the ability to call recursive types, so putting three things together.

So putting all of those together you can create some really cool combinations of dynamic types. And the specific one that I've been playing around with is - for all of our internationalization, we have this massive JSON file, and it's nested. So you can have like this page is the account preferences, and that is an object that contains subkeys, and there might be subkeys in there, but they all end up becoming a string at some point, and that's your English translation of whatever, and then you can have a French file, a Chinese file, all of those.

\[00:39:57.07\] And the way we reference that by using \[unintelligible 00:39:59.21\] to get that. But that's just a string in my code. But using recursive types and template literal types, and using import type to import the shape of the JSON file, I can then create a dynamic type that is the dot notation, so I can just get an array back, or a union type back of all of the possible combinations of combining account preferences \[unintelligible 00:40:30.16\] and it will all be perfectly typed... Which is really cool.

**Kevin Ball:** I feel like you need to write this up... \[laughter\] Because I was trying to hold that all in my head as you were saying it, and completely and utterly failed.

**Jerod Santo:** I think I followed you, but I couldn't repeat it back, so I probably didn't follow.

**Nick Nisi:** I'll put it in a TypeScript Playground link in the show notes, and I will get around to writing something up, for sure.

**Kevin Ball:** Yeah. I feel like you just proved that typing in TypeScript is Turing-complete.

**Nick Nisi:** It is.

**Jerod Santo:** Wow. What's TypeScript again? Just kidding. Kball... Hit us up with a TIL.

**Kevin Ball:** Alright. Today, or last week, something like that, I learned that you can embed SVG filters inside CSS filters. CSS has a filter property that you can put on images; it is cool, but not as powerful -- well, powerful in general as SVG's filtering capabilities... So it used to be "Okay, I've got an image, I wanna filter it more than I can do with CSS. I need to actually embed it inside an SVG." But it turns out you can flip that around and embed your SVG filter in the CSS filter property, and just reference it there..I think that's super-cool.

I'm a long-time huge fan of SVGs, but they do have this pain point of like it's hard to get them to interact with the rest of your HTML, unless you embed it straight in the page, and yadda-yadda-yadda. Here you can put it in your CSS and get all that power just out of the box.

**Mat Ryer:** That's great.

**Jerod Santo:** Yeah, that's cool. Link us up more info on that for the show notes, please, sir. Mat, how about yourself? What have you learned today, and/or recently?

**Mat Ryer:** Yeah. Well, it was today, actually. I think I'm the only one that's really respected this segment in that way...

**Jerod Santo:** Yeah, you win.

**Mat Ryer:** Yeah. I'll tell you what - I mentioned earlier the APIs now in browsers, and this might be old news to people that do a lot more JavaScript than I do... But there's a WebAuthn API that lets you use the fingerprint or Face ID stuff in your JavaScript code for authentication, things like this... Which is kind of what you need, isn't it? It's what you expect. But you see, when I started doing this, everything was sandboxed so tightly... The world was so different, the JavaScript world was just so different. You didn't really interact much with the device at all. And increasingly, as they open all these APIs, I think we're just gonna see more and more powerful things being built... And I kind of love seeing that.

I remember when I first discovered about local storage, and there's IndexedDB in the browser... It is kind of amazing to see that... But yeah. So I learned that. That's what I TIL-ed today, was that you can use fingerprint auth in your JavaScript.

**Nick Nisi:** That is awesome. You can access sensors as well on the device... GPS coordinates I guess have been around a while... But also things like the battery. So maybe don't do some things; turn off animations if the user's battery is low, or something. Be a nice citizen for them. It's a good one.

**Jerod Santo:** Absolutely.

**Mat Ryer:** Yeah.

**Jerod Santo:** And the fact that you learned it today means you really respect my authority, you know...?

**Mat Ryer:** Yeah.

**Jerod Santo:** Which I also appreciate.

**Mat Ryer:** Yeah. I feel like I'm having dinner with Saddam Hussein, and I'm really nervous about upsetting him.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** \[00:44:16.23\] I've never had dinner with Saddam Hussein, or any dictator...

**Jerod Santo:** We need to back that one off...

**Kevin Ball:** You haven't had dinner with Jerod yet. You don't need to mention any dictator.

**Mat Ryer:** Yeah. \[laughs\]

**Kevin Ball:** That's right, internet acquaintances.

**Jerod Santo:** Remember, I already said, hopefully we'll never have dinner... Didn't I say that earlier on the show? Hopefully we'll never meet...

**Kevin Ball:** Jerod's not so bad over dinner. Or lunch I guess is what we shared...

**Jerod Santo:** We did.

**Mat Ryer:** What did you have?

**Jerod Santo:** Lunch. He just told you.

**Mat Ryer:** Well, what specifically?

**Jerod Santo:** Food.

**Mat Ryer:** Okay, thank you. \[laughter\] See what I mean? I'm kind of nervous now... I don't wanna upset the king.

**Break:** \[00:44:52.24\]

**Jerod Santo:** Okay, we are back... And did you know that Go Time has a regular slot called Unpopular Opinion? You may have known that, because we've stolen that slot once before, and did better on Unpopular Opinions than they generally come up with... But we actually have the man, the myth, the legend -- Mat Ryer sings the jingle for that. He went in the studio, he produced it, it took weeks... Didn't it, Mat?

**Mat Ryer:** Yeah.

**Jerod Santo:** And really put a lot of effort into it. But today we're gonna have the live, acoustic version of the Unpopular Opinion theme song for you. This is a special treat, folks. Let's listen to it.

**Mat Ryer:** \[live jingle 00:46:53.00\]

**Jerod Santo:** One thing I've noticed as the producer of Go Time is that you like to cue up other people's unpopular opinions, but you rarely turn the spotlight back on yourself and share your own thoughts. I feel like it's a cowardly move, to be honest... But now here you are, you're the guest, and you've obviously shown you have the bravado to rock'n'roll a theme song... Can you share with us an unpopular opinion?

**Mat Ryer:** Yes, I can. And it's about JavaScript, too.

**Jerod Santo:** Okay, let's hear it.

**Mat Ryer:** \[00:47:30.26\] I think there's too much stuff in JavaScript. When I write JavaScript, I use a tiny little subset of the things you can do, really tiny. And I try and shrink that as small as possible. And I feel like that improves readability. I don't have to learn all the new features... Because there's lots of really cool stuff. The ?. thing - I loved that. I'm definitely gonna be using that one. That's extremely useful. But I try and use just a really small, little -- I almost have like a subset of JavaScript that I use. It could almost have its own name...

But yeah, that's my unpopular opinion. I think JavaScript has too many language features, and should be smaller \[unintelligible 00:48:21.01\]

**Jerod Santo:** Well, what do you think about food options? Do you feel like there's too many choices of what you might eat out there in the world, and you'd prefer if there were less? Or would you like to just select the subset of food options that you appreciate and use those?

**Mat Ryer:** Yeah, I mean... What I actually like -- if you go to a restaurant... Nice restaurants only give you a small menu, don't they?

**Jerod Santo:** But you also have the option of restaurant, so that's kind of a subset of a subset in that case. I've got no problem with that. That's their view of the world. That's their little particular... You could have its own name, like its own little MatScript.

**Mat Ryer:** Yeah. But if you're collaborating though, if we're writing open source things, there's a benefit to having not all those features used in a language. There's a benefit that you get when you can look at the code and you know immediately what it is.

With all the language features that you could use, that's a steeper learning curve. It's just a simple kind of numbers game really there. So I feel like there's a benefit always to smaller and simpler, but I'm not gonna have a go at anyone if they're using complicated things... Although if I'm in charge of reviewing the pull request, one of the things I'll say is "That is really clever. Well done. Can you just write it in a really verbose, boring way, please, so that I can read it?"

**Nick Nisi:** It sounds like you're gonna decline your own pull request with the ?. function.

**Mat Ryer:** Yeah, but I don't know...

**Jerod Santo:** He likes that one.

**Mat Ryer:** We've needed that for a long time... Because I still have code that's like "If this, and this..." or using the tertiary operator to try and find out if I'm gonna show something... And I'm surprised that Svelte -- I use Svelte a lot, and I was quite surprised that they haven't solved that, actually... Because it's all processed at compile-time. So they do have an opportunity to -- they could have implemented that, frankly, quite easily. Maybe they knew about the ?. thing that was coming, but...

Yeah, it's a very common case to say, in dynamic languages and with dynamic data, to say "If this \[unintelligible 00:50:28.24\] and if not, we'll use a different field, or we won't show it", or something like that. I'm actually a fan of that ?. thing... Although it is weird that you use the dot when you're calling a method. I always expect it to just be the question mark and then brackets/parentheses, but... Too late.

**Jerod Santo:** There might be some backwards-compatibility reason why that couldn't be the case.

**Nick Nisi:** So you said that you would prefer to only use a smaller subset of JavaScript... Could you give a name to that?

**Kevin Ball:** Go.js? \[laughter\]

**Nick Nisi:** How would you enforce that?

**Mat Ryer:** Well, you could do a linter. You could actually have a compiler that only understood a subset of JavaScript. You could do away with older patterns, or older languages features that you don't wanna support. There's projects that do this kind of thing sometimes, but... I don't know really exactly what it is, but... You know, when junior devs come to a project, if it's trivial for them to get going, I feel like that's kind of a good property to have in a project.

**Jerod Santo:** Sure. Isn't that what a linter provides though? Or a style guide, like ESLint and/or Style Guide. Doesn't that provide that guard rails?

**Kevin Ball:** \[00:51:55.26\] This is the kind of thing that some languages do it in the language, some languages do it by adoption... Perl is infamous for TMTOWTDI (there's more than one way to do it); you do it however you want. You do you, and you have write-only code. And then Python, which is a similarly flexible language, has the Python way, and there's a right way to do it, and there's a wrong way to do it, and those are both pervasive throughout the communities... And I feel like JavaScript - it's very fragmented. There's some parts of the JavaScript world that are very much in the Perl camp - "Do what you wanna do, write it however you wanna write it..." and then there are subsets of the communities where they have very tight linting, they have various other things to assert a subset of a language.

**Nick Nisi:** Or a superset.

**Mat Ryer:** So it sounds like they all agree with me.

**Kevin Ball:** Subset.

**Jerod Santo:** Nick is just trying to turn this into a TypeScript conversation. Let's cut it off before he succeeds... \[laughter\] And let's move to the next unpopular opinion.

**Kevin Ball:** TypeScript is great, they give you two different languages to mess up in. You can mess up in the typing language and you can mess up in the actual code.

**Nick Nisi:** They have three. You can do that, or you can mess up in your js.comments, because you don't want to write real TypeScript. Oh, wait, did I already give my unpopular opinion?

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Do you wanna go with it? \[laughs\]

**Jerod Santo:** Well, feel free to reiterate it. Or if that was it, we can just go to Kball. \[laughs\]

**Nick Nisi:** No, that wasn't actually mine. Go ahead, Kball.

**Kevin Ball:** My unpopular opinion is that it really doesn't matter at all which JavaScript framework you're using... Whether you're using React, or Vue, or Svelte, or even Angular, Ember, or vanilla JavaScript, or what have you. They're all tools; they make some things easier, they make some things harder. What really matters is that you pick something consistent across your entire team, and that you're all working within that and being consistent within that.

I have worked in mixed codebases, where this team picked this thing and that team picked that thing, and that sucks. But if you're consistent within your team and your codebase, I don't really think it matters at all which framework you're using.

**Jerod Santo:** I like that one.

**Mat Ryer:** Yeah, that's not unpopular with me. I quite like that. And I'd go as far as saying, whatever makes you productive, whatever you can get to the product quicker... We do argue a lot and we care about it, so you understand why, but... Yeah, it often gets into like right and wrong, and people have these sort of fundamental ideas about things, that are fighting. And in practice, it's rarely about right and wrong; it's about taste and trend.

Tailwind is a great example of -- we're almost going back to... Do you remember we used to put the styles in the style attribute, and then we were like "Oh, that's terrible. You're repeating all the styles everywhere. We're not gonna do that." And Tailwind kind of takes a step back in that direction. And because we now have components, it's not as big a deal as it was before. But yeah, it does seem to be quite trendy, and it's worth remembering that when you really love and care about something, it's worth remembering we are just in a sort of zeitgeist of the moment, so chill out a bit, I would say. Chill out, JS.

**Jerod Santo:** \[laughs\] The only problem with not being able to switch your current framework is you can't write your blog posts about how you're switching frameworks.

**Nick Nisi:** What are you gonna write about...?

**Jerod Santo:** Exactly. \[laughs\] That's the problem. Are you gonna write about how you rewrote your blog platform? Those are the two blog posts that we write as developers; we write the one where we rewrote out blog platform, and we write the other one where we switched from one thing to the other. That's pretty much it in a nutshell. Alright, Nick, your turn.

**Nick Nisi:** \[00:55:54.09\] Yeah. So I probably should have gone after you, Mat, because this does kind of tie into yours a little bit, now that I think about it... I think that ESLint is out of control, and it's just kind of ridiculous. There are some good rules to have in there, and linting overall is pretty good, but then I just look at all of the rules that are added to the main project I work on, and it is so constraining, and for no good reason, because I just end up writing the eslint-disable-next-line comment above it, and every time I run across an issue like this, using that optional chaining to call a method, like I mentioned in the first segment - that is disallowed by my ESLint. And if I just did the foo and the long-form of that, where I just check to see if that value exists before calling it, that's also disabled, for the same rule.

ESLint rules are out of control. They don't actually help beyond a certain limit - there's definitely diminishing returns with that - and they completely slow down your editor, because it has to chug through all of those rules and process everything.

So stick to something a little more -- I won't say standard. Standard is good, but stick to some standard, small rules, and don't just go crazy, thinking that every Friday the values have to be ending in a y, or something. I don't know. \[laughter\] Just don't put the silly rules in there.

**Mat Ryer:** And you can configure ESLint, right? You can configure everything about it.

**Jerod Santo:** Right.

**Nick Nisi:** I disable it.

**Mat Ryer:** Yeah. Go has this thing called gofmt...

**Jerod Santo:** Here we go...

**Mat Ryer:** I know, but come on... This is something that could be valuable for the JS community. Gofmt doesn't give you any options at all. It's very opinionated, that's it. You just have to use it. It sorts out your tabs, it makes you use tabs, and the code formatting is done... It's very opinionated. And what that means is a lot of Go code - I mean, all Go code - looks very familiar. Of course, there's still ways you can do different design things, and you can still make a mess... But you get this benefit of -- sometimes I'll go to repositories and I'll read the code and I feel like I've written that code. And if you think about contributing to other projects, that takes a weight off. That's a great kind of property to have.

**Kevin Ball:** It's like Prettier, but--

**Nick Nisi:** I really like tools like Prettier.

**Kevin Ball:** ...Prettier is also configurable though, right?

**Nick Nisi:** Yes, to an extent. But still, it's very small in what you can configure... And it's really nice having that. Like you said, I can go look at code and it looks like I wrote it... I use that as a shorthand to write code, because I know that I can write things as terse as possible, and then hit Save, and Prettier just takes care of it for me and it looks nice, which I really like.

But kind of to that, we are kind of in a very roundabout way getting that in JavaScript, sort of, through Deno. Deno has a fmt command as well, that allows you to do that in a built-in way, where you don't bring in any external dependencies, which is pretty cool.

**Jerod Santo:** Nice.

**Nick Nisi:** I don't think you could add it to Node at this point, but it is pretty cool seeing that in a fresh project like Deno.

**Jerod Santo:** Yeah.

**Mat Ryer:** You also said fumt instead of fmt, so you get points from the Go community for that.

**Nick Nisi:** Oh, no...

**Mat Ryer:** I'll make sure they send them over. No, it's okay, it's not gonna hurt your reputation.

**Nick Nisi:** No, thanks.

**Mat Ryer:** \[unintelligible 00:59:21.25\] rejected it... \[laughs\]

**Jerod Santo:** I have an idea for an awesome fork... I think we should fork the Go project and just track it identically, everything that goes in, except for change the tabs to spaces on gofmt... And then you got me. I'm there with you.

**Mat Ryer:** Yeah.

**Nick Nisi:** We'll call it Stop.

**Mat Ryer:** You can change the width of a tab, you know? I don't think you can change the widths of spaces...

**Jerod Santo:** I don't want to. I want it to look like the way I wrote it.

**Mat Ryer:** Yeah.

**Jerod Santo:** \[00:59:48.21\] Alright... That's an unpopular opinion right there. We're running short on time. I'll just do mine really fast. I think software developers spend too much time on Twitter... And that's my unpopular opinion. And myself included. I also think we write too much on Twitter. I've seen too many blog posts that are tweetstorms, and don't exist anywhere else. That basically goes into the ephemera and disappears, or Twitter gets your Google juice in eternity, or whatever...

So I'm cool with like the one-offs, and the jokes, and all that... But if you're gonna write a blog post, write it on your blog, and then maybe tweet some quotes out of it and get the socials going around there. Just don't write for Twitter for free, because you should write for yourself.

**Nick Nisi:** I look forward to hearing you continue on with this on Clubhouse.

**Jerod Santo:** Ha-ha... Follow me on Clubhouse.

**Mat Ryer:** But actually, I do spend too much time on Twitter. And I find myself getting addicted to checking the notifications sometimes as well, which is a common problem. It got so bad I almost had to discus my phone into the Thames.

**Jerod Santo:** Oh, wow.

**Mat Ryer:** Yeah. You know the discus, the Olympic thing...

**Jerod Santo:** Yeah.

**Mat Ryer:** I would have done it with a spin, and everything... Because you know, it's an expensive phone, it deserves a good send-off.

**Jerod Santo:** Right. Some \[unintelligible 01:01:05.21\] circumstance.

**Mat Ryer:** Exactly, yeah.

**Jerod Santo:** Well, if you ever do that, video-tape it with your other phone... I don't know. I don't have video things once you've thrown your phone...

**Mat Ryer:** I could livestream it, because for a while it keeps streaming, wouldn't it? As it's descending.

**Jerod Santo:** There you go. \[laughs\] Then you can go back and watch it, and get the video that already had been streamed up to YouTube, where they take your value and give it to people. Okay.

Let's really quickly do shout-outs... Make it fast, guys. I will quickly do a shout-out to FreeCodeCamp.org. You all probably know about FreeCodeCamp. It's an awesome place to send people where they can learn all sorts of programming skills... And the reason why I'm shouting Quincy and the team out - right now they are doing a new data science curriculum. So there's a pledge drive going on, and it's going on this month. It's for creating an awesome, really robust data science curriculum. It's being matched right now by Darryl Silver has agreed to match up to $150,000 raised, so every dollar you put in turns into two dollars. So shout-out to Quincy and the FreeCodeCamp team. They're doing awesome work.

I used to have to hem and haw when people asked me how they get started, self-taught style, in this industry, and now I just send them to FreeCodeCamp.org, and say "Come back to me after you've spent a few hundred hours going through this content and doing those things."

So it's an awesome resource, and no doubt that data science curriculum will be a huge resource. It's all free, it's all available once it's out there, for anybody to get those skills. So shout-out to FreeCodeCamp.

Nick, shout-outs.

**Nick Nisi:** Yeah, I will shout out Shawn Wang on Twitter. He's know as @swyx. His whole Learning in Public mantra is really cool, and I've learned a lot from blog posts and things that he's been putting out, as I kind of look into building different things... Doing things more in public, and thinking about that - it's just really cool, and I like that he shares so much and he's very open about that... So yeah, @swyx.

**Jerod Santo:** Awesome. Kball.

**Kevin Ball:** \[01:03:09.26\] I'm gonna shout-out the Vite project. I just learned it was pronounced Vite, which is French for "fast". This is a project that Evan You, the original creator of Vue.js was working on. I thought for a long time it was just doing fun stuff, a static site builder in Vue or whatever, but it has turned into a generic frontend build setup or web tooling build setup that uses ES modules native. It's super-fast, there's a Vue plugin, which was the original, but now there's a React plugin, and various other things... So it's a very cool, new project, and I'm shouting it out because he could have just made this particularly for Vue, but he ended up generalizing it and making it available for everyone. So the Chrome improvements - it's improving the web for everyone.

**Jerod Santo:** Awesome. Last but not least - Mat. Shout-out.

**Mat Ryer:** Yes. I've found this great project... This person doing some great work on left padding strings. It's called Leftpad, and basically... \[laughter\] If you need a string to look like it's over on the right - and remember that, because that's counter-intuitive; you're padding on the left, that's important... You don't have to write that yourself now, so it can save a lot of time for a lot of us. I think we should all pop that in the old dependency tree, no probs.

**Nick Nisi:** You Go developers are on the bleeding edge.

**Mat Ryer:** Exactly, yeah. I was either gonna do that one... I haven't really been keeping up with it. There's another one called jQuery, which I thought was quite interesting; an interesting little project. But maybe we'll do that one next time.

**Jerod Santo:** Well, you assume too much, Mat, because you're never coming back... \[laughter\] Says the dictator. But we appreciate you being here this time, because we needed some royalty-free music... So now that we've got what we want out of you, we will see you on Go Time.

**Mat Ryer:** I just wanna say, I'm not royalty-free. I still have a monarch in the U.K, unfortunately. \[laughter\] Yeah. I don't wanna get into that, but... Yeah. You sorted it out, ages ago.

**Jerod Santo:** We can chat it out on Clubhouse...

**Kevin Ball:** Yeah, we have our own problems now.

**Mat Ryer:** Yeah, different. Yeah. Sorry, I interrupted you, Jerod.

**Jerod Santo:** How do we end the show...? Thanks for coming on the show, Mat. Nick, thanks for always being here... And Kball - I appreciate you. That's JS Party for this week. We'll talk to you next time.

**Outro:** \[01:05:39.06\]

**Jerod Santo:** I was watching basketball last night, which is an American sport where people try to throw around a ball into a hoop - that's for Mat and Nick...

**Mat Ryer:** They're not running around with baskets?

**Jerod Santo:** Something like that... And the Miami Heat have multi-colored jerseys, where the right side is pink and the left side is blue. They're both neon -- well, not quite neon, but bright, and they fade into each other. It's very strange; it's kind of interesting. So as they run down the court one way, it looks like they're wearing pink, and as they run back the other way, it looks like they're wearing blue.

**Mat Ryer:** It's really confusing. Is that like a camouflage?

**Nick Nisi:** We call that a gradient...

**Mat Ryer:** Yeah, could you describe it using CSS gradients, so we can get an idea for what that looks like, Jerod?

**Jerod Santo:** Yeah, so it's about 243,375...

**Mat Ryer:** \[laughs\] We'll put it in the show notes.

**Jerod Santo:** No, we won't. Okay.

**Nick Nisi:** I thought you were gonna do it in Tailwind classes... \[laughter\] \[unintelligible 01:07:35.11\]

**Jerod Santo:** Oh, yeah... I haven't learned Tailwind yet, so I couldn't do that.

**Mat Ryer:** Well, it's great.

**Jerod Santo:** Nor have I learned RGB, so I couldn't do that either... \[laughter\] Alright, are you guys ready for segment two?

**Nick Nisi:** TIL?

**Jerod Santo:** TIL.

**Nick Nisi:** Alright.

**Jerod Santo:** Mat, are you ready to come up with a jingle for us? \[laughter\]

**Mat Ryer:** Okay, I'll do it.

**Jerod Santo:** Okay, let's do it.

**Mat Ryer:** Are you gonna ask me...?

**Jerod Santo:** Yeah, I'll cue you up.
