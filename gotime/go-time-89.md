**Mat Ryer:** Well, hello there, and welcome to Go Time. I'm Mat Ryer, and thanks for listening, thanks for putting this podcast in your ears every week. It's much appreciated. Today we're gonna be talking about the art of execution, how we actually get things done. Is there a right way and a wrong way, or is it (as I suspect) more dependent on team dynamics, personalities, context and other interesting things. Let's find out. We're gonna dig into this and get to the bottom of it once and for all.

Doing that with me are three gopher detectives. Two familiar voices, and a new one, I think, for this show. I'm joined, first of all, by Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** How's it going?

**Johnny Boursiquot:** Well, it's going well. I've had some excitement recently; I've started a new gig.

**Mat Ryer:** I saw a tweet, you're moving jobs, right?

**Johnny Boursiquot:** Indeed, yeah. Officially an SRE for Heroku, owned by Salesforce.

**Mat Ryer:** Hm, interesting. That sounds exciting.

**Johnny Boursiquot:** Yes, and you can bet I'm gonna have opinions on this dev process talk of yours.

**Mat Ryer:** Good! Well, you can share them with me, and we're also joined by a regular on the show - it's only Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** Pretty good!

**Mat Ryer:** Great. What have you been up to, mate?

**Jon Calhoun:** Just working on new course website stuff, so I'm really interested to talk about this, especially because -- I mean, Johnny working at Heroku and me working pretty much by myself, I imagine our processes are gonna be pretty different.

**Mat Ryer:** We'll find out, yeah. And somebody else who's joining us today was somebody that I met in person for the first time at the recent GopherCon EU conference in the Canary Islands. Beautiful place for a conference, by the way... It's Egon Elbre. Egon, how is it going?

**Egon Elbre:** It's going delightfully.

**Mat Ryer:** I'm so glad to hear that. Would you like to pronounce your name in your voice, just so we know how it really should sound?

**Egon Elbre:** Sure, sure. Egon Elbre.

**Mat Ryer:** Elbre.

**Egon Elbre:** \[04:11\] Close enough. I'll accept that. \[laughter\]

**Mat Ryer:** In my ears that was exact, but now fair enough... Yeah, so what did you speak about at the GopherCon EU?

**Egon Elbre:** I did a talk about the psychology of code readability. How we analyze and see code, and what we can code from psychology and how to apply it to code writing.

**Mat Ryer:** Yeah, and that video will be available online, so I recommend people search for that. It was a great talk. Very interesting, and quite an interesting subject that I haven't seen before, actually.

**Egon Elbre:** I don't think it's a new concept in that sense, but... Yeah, it's not widely talked about.

**Mat Ryer:** Yeah. But I recommend it, it's very interesting. So why don't we just jump straight in and talk about the development process? I think we can mention what it's like working in teams as well if that's part of it, but I have a feeling that team dynamics and things might even be its own show, because it changes things quite dramatically... But that'll depend. Jon, you mentioned that you work primarily on your own... Is that your choice, or will no one work with you?

**Jon Calhoun:** \[laughs\] I don't know if people still work with me or not. I haven't tried in a while... No, most of the time it's just what I'm doing hasn't been enough work to justify more people. I have historically worked with other people, and I can get other people occasionally, it just hasn't been as much what I've been doing lately.

**Mat Ryer:** Yeah. You did some work with Egon, right?

**Jon Calhoun:** He did the illustrations for my testing course.

**Mat Ryer:** Oh, so Egon, you illustrate as well as write code.

**Egon Elbre:** Yeah, that's one of my hobbies.

**Mat Ryer:** Nice.

**Jon Calhoun:** He's one of the people who are blessed with both the artistic talent and the coding ability.

**Mat Ryer:** Yeah. I usually don't like those people... But no, you're right.

**Egon Elbre:** \[laughs\] I completely understand.

**Mat Ryer:** Well, I love the artwork in Jon's courses, actually. It looks nice, and it's a cool, interesting way of contributing as well for people. I know Ashley makes this point, that if you're young or new to the community - and I know this doesn't quite apply to you, Egon, but if there are people out there that have other skills that aren't directly coding skills, you'd be surprised how useful they can be and how much they can add to a project. So that's very cool.

Right. So, the development process... One of the things I tend to do is rewrite code. I read a thing ages ago talking about writing novels, and it said "The art of writing is rewriting...", and that I think applies to software as well. Every time I rewrite something, the second time I write it (or the first time I rewrite it), it's significantly better because I've figured out a lot of the things in the first draft of it. Usually, my first draft isn't production-ready, but I have everything fresh in my head, and then writing the second one allows me to either fix any design assumptions that were wrong, or just do a better version of what I've done. Does anyone else do that?

**Johnny Boursiquot:** \[07:46\] Yes, absolutely. And to add to that, the more time goes by, the clearer it becomes what the rewrites should be. The more you work with a system, especially if you actually get to put it in production or derive some value out of it, the more you see it actually work in the real world, that feedback is gonna allow you to rewrite it better next time. There might be a slight difference in terms of how you are originally presenting it... I'm not sure if you meant that basically if you write it today, tomorrow you wake up and you're like "Hey, I'm gonna rewrite this, and I know exactly how to do it", because I have slept on it, I've had a chance to think about it and I know what to do with it.

On my side of the fence it's more of -- actually, after having seen it in action, and getting that feedback and knowing "This is how it behaves today, and this is how it can be better tomorrow..." I think that element of time adds an extra level of clarity to what you were saying.

**Mat Ryer:** Yeah, I actually pair a lot with David Hernandez, who was my co-founder of Machine Box, and we basically almost exclusively at the moment pair-program everything... And one of the rules that we set ourselves is a cool-down period. Whenever we have an idea for something, we get so excited about it we really do just want to get in and start doing it and start writing code and building it, and we sort of have to force ourselves to just take a step back and let the idea cool down a little bit.

This applies to adding features, as well as new things, because it's easy to just get too excited and jump in and not really think too much about it, that that cool-down period really helped us to make sure that what we were gonna do was worthwhile. Sometimes we'd say "Yeah, you know what - I thought about it. I'm sure now..." Or sometimes "Yeah, I just don't like that idea... I don't love it. I loved it yesterday, and I'm just not feeling it today, for some reason." And then other times it validates, and we're like "Yeah, I even thought of additional things, and we should definitely do it." Then you can get excited again.

**Egon Elbre:** Yeah, I tend to also let those ideas sit and mature, and afterwards the result is usually much nicer. This means that I have this "work in progress" that takes a year or more to do, however while I'm doing other things I'm learning how I could be doing that better, as well.

**Mat Ryer:** Yeah. Do you ever do deliberate rewrites of things?

**Egon Elbre:** Oh, yeah. The more critical the system is, the more I rewrite it. Actually, I did six rewrites in 4-5 different languages, so...

**Mat Ryer:** Wow... What was it?

**Egon Elbre:** It was a synchronization algorithm between browsers through a legacy system. And if you get synchronization wrong at some point, or you switch two lines, then all hell breaks loose. So you need this consistency and clarity in your codebase.

**Johnny Boursiquot:** Well, let me ask you this, Egon... With that particular project, was there any sort of upfront design done, or did you figure that you're gonna learn what you need to learn in terms of how you need to approach the rewrite, each subsequent rewrite; basically, you're gonna figure it out as you go.

The reason I ask is that for me, I don't typically tend to go to code first. I sort of learn what I need to do with code first; I'll probably sit down, maybe do some readme-driven development, and try to reason through and think through what I'm trying to do before I put down code. That might be different for different people, and it's neither right nor wrong, I'm just saying that I can't go straight to the code. How is that process for you?

**Egon Elbre:** \[11:52\] Before doing those rewrites on the final thing, I also implemented 5-6 different approaches, and went through like 20 research papers, or something like that, on different synchronization algorithms... But that's an exception for me, or the extreme case of this rewriting. I usually don't do that much.

**Mat Ryer:** I think you might be a bit of an over-achiever, Egon... \[laughter\]

**Jon Calhoun:** A bit?

**Mat Ryer:** That's interesting you say that... So it needed to be correct, and therefore you paid special attention to it and put a lot more time into that thing. So if there's a little throw-away tool that you're writing, I suppose you wouldn't necessarily give it that same attention, is that right?

**Egon Elbre:** Oh, no. Often in Slack, when I'm helping some people, then I don't even see whether it compiles... So there's definitely these different degrees of correctness that I care about.

**Mat Ryer:** Yes. I find that to be the same, as well. Depending on a few things... Like, how long is this code gonna live for? If I expect this code to have a long life, I probably will treat it differently to if I just want to solve a task and I'm gonna write a program that runs something once; it's very clear whether it's working or not. Sometimes I'll even skip writing tests for that... And I'm a kind of TDD fundamentalist almost. So yeah, I think the context, the life span of a codebase and things like that I think all play into these kinds of decisions.

Jon, do you do things differently for quick, simple things? Or do you always have a single process for everything you're building?

**Jon Calhoun:** I definitely do things differently for simple stuff. I don't remember where -- it came up on Twitter where people were talking about globals and how they're always bad... And I think globals to me at least are one of those things that's useful when you're just writing a quick draft of something. I can give you some examples of things that I do that are bad engineering practices, but are helpful for me early on.

For instance, if I'm using an API library, I will just hardcode my key into my code as a variable for the very first pass. Now, I'll put a to-do there to pull this out on the final version when I refactor, but when I'm just getting started, a lot of the times just using globals and not really thinking about how would I structure this in a useful way is nice to just set that aside for "Once I see how this all works together, I can refactor it. But right now I don't really know, so it doesn't make sense to waste the time figuring that out."

**Mat Ryer:** Yeah, that's a very interesting point, and I think that applies to other things as well. One example I can think of is -- I hosted with Ellen Körbes the lightning talks at GopherCon EU, and we wanted a way to select who is gonna speak next, so we wrote a little Go program. And I started to use the Rand package, because I wanted to just have a slice of the names, and I was gonna just pick them randomly and have the computer just speak out the name and introduce the next person; so it's kind of a silly, little thing. And Bill Kennedy was there, and he came over and said "Do you want random? Why don't you just range over a map? Because that's random."

Of course, technically that's unspecified behavior, as Peter Bourgon was very kind to point out on Twitter... The randomness in a map is unspecified. It's not be relied upon. And actually, the reason is there, I think - it's because people were relying on the map being like a queue, that we're using it with a deterministic order, and that was also a misuse of it, because actually technically it's unspecified.

\[15:50\] The order that Go will range over a map is unspecified. But in that case, of course, just for a one-off tool that we were gonna run on that day, it worked perfectly, and just ranging over the map selected random speakers, so we got a random order for the lightning talks. It was really cool. But Peter made an interesting point, that that is unspecified.

**Johnny Boursiquot:** When we're talking about readability, or rather simplicity of code, to me if I saw that in production code, I'd probably not let it through. If that code was depending on my PR approval to get in, I probably wouldn't let it through... Because especially someone who is new to Go, or is still trying to wrap their heads around Go, if they didn't know this bit of esoteric knowledge about maps in Go, they wouldn't know that this is what's gonna happen. There's nothing in the code that says "Hey, we're supposed to pick something randomly here, not just iterate over a map because we happen to know that's gonna be in random order every time \[unintelligible 00:16:57.22\]" That happens to be the case, but there's not enough explicit called out behavior about that.

**Mat Ryer:** Yeah. You should make friends with Peter Bourgon, because that was exactly his point. Now, my counter to that, of course, is that the order of the speakers was unspecified, and therefore, unspecified behavior was kind of what I was going for... But that was absolutely -- just trying to get it out there.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** But yeah, you're right. You shouldn't do that. So this is it - in the real world, how hacky do you allow things to be if they are just a short-lived little thing, just for you or just for a few people for right now? Johnny, do you insist on that quality from the beginning for everything?

**Johnny Boursiquot:** There's a certain threshold, for sure, that I'll have... If I'm continuously training myself when I write code, I'm saying "Okay, I'm gonna do this right...", especially if I'm teaching. If I'm teaching something, or if I know I'm gonna teach something, I don't wanna have a double set of standards. Definitely there's a threshold there.

Like Jon was saying, if I know that I'm gonna replace something, or I might hardcode something, I'm just playing around, I'm just sort of exploring... But the moment I know that I've crossed that threshold where I'm no longer playing around, and I know this is going to be a thing, whether it's for production code or for a project online, or whatever the case may be, once it leaves my laptop, once I commit it somewhere, once I make it public for public consumption, then basically my mind just won't let me get away with that.

I have to spend some time making sure that it is following some best practices, that it is doing the right thing, that I'm not gonna confuse somebody who happens to be learning from that code, or anything like that. But that threshold for me comes up quickly. I'm not gonna basically build an entire program, an entire package without at some point saying "You know what, there's enough of these shortcuts in the code that it's starting to bother me." I do realize it's more of a personal thing, but that threshold, that tolerance for me is very low.

**Jon Calhoun:** It sounds like what you're saying is part of it depends on the audience... And I think for at least me, a second part of it tends to come down to who is gonna become responsible for that code. I mean, you're talking about stuff getting checked in, or going through a PR process, or something... I think if code is gonna be owned by a team, then you have the right to be more particular, as a team especially, because then somebody else is gonna have to maintain it.

\[19:56\] But for instance, like you were saying, checking something in - I don't mind throwing something on my own GitHub profile that's kind of rough, as long as I'm not advertising it as like "Hey, go use this for whatever." Or if I'm not clear.

A good example of this is - I have the Gophercise's exercises, and the code there is not good code. It's not bad, but there's many cases where things should probably be done differently in a refactor... But my goal there was very much to get people practicing, so I had to force myself not to go back and refactor and only show them the good version, because I'm like "They need to see that when you're just learning to program in Go, you aren't gonna start with that final version."

**Johnny Boursiquot:** Yeah, I definitely agree with that, and I've done the same thing. Sometimes I'll put up deliberately not necessarily bad code, but not what I would put in production, just to illustrate that very point. In that way, I definitely agree. The audience that you have in mind for that code - the one thing I'd say is that basically that caveat must be called out; they will know what is the intent behind the example or the exercise that you have in mind. That way, they're not gonna pick up the bad habits, if you will.

**Egon Elbre:** I have a maybe slightly different approach. I try to write as good code as I can during the first run, I just might not rewrite it... Because often I've noticed that people copy and paste your code, even if you like it or not. It's probably nicer for the community in general to have this "good enough", so they can copy and paste it. Of course, for learning purposes, having so-called bad code is actually beneficial, I think.

**Mat Ryer:** Yeah, it can be, as long as you can have the conversation, I suppose. It's really interesting... It's true, every time we have code that's out in the wild, it is a learning opportunity for people. That's a good argument for actually trying to make sure your code does do or meets the standards that you maintain, I suppose. It is a learning opportunity, and we sort of do learn by osmosis a lot of the time; we read something and probably remember, even if it's subconscious. So that's a very interesting point; maybe I shouldn't have used the map. I'll blame Bill Kennedy.

**Jon Calhoun:** At the very least, you probably educated more people about the fact that it's an undefined order.

**Mat Ryer:** Yes. Well, that's usually my interaction with Peter Bourgon on Twitter - it's some conversation around something, and I'm perfectly happy to be wrong and be out in public and learning in front of everyone else. I think that's quite a healthy thing for us all to do. And as we've talked about before, I might be coming from a position of privilege by being able to do that, but we shouldn't punish each other for bad code; it's an opportunity for a conversation, and we can talk about it. I'm always grateful when we do.

Has anyone else ever been told off by Peter Bourgon on Twitter?

**Johnny Boursiquot:** I wish... \[laughs\] Yeah, I'll echo what you've just said. A brief tangent - there's this sort of feeling that Go is sort of elitist, if you will; that folks who do Go are higher than thou kind of thing, they breathe rarified air kind of thing... We have to dispel that whole notion. We're all learning, even those of us who have been doing Go for a while; we learn something new every day about the language. At least we learn what not to do sometimes.

Even though folks might not be as public, or perhaps they're not as comfortable as you, Mat, basically saying "Hey, I'm learning in public. I don't mind looking foolish a little bit for the greater good." I think that's something we should all be doing. We shouldn't assume that everybody we see out there doing Go knows exactly what to do, because that's certainly not the case for me, for sure.

**Mat Ryer:** \[24:14\] Yeah. I appreciate the conversation. And sometimes it's not about right or wrong as well. In fact, often in software I find there isn't really a right or wrong; there's usually trade-offs with things, and that's usually what the conversation is about. I always say this when I do a talk, I say "Don't just blindly follow these rules, or treat it like some kind of gospel or anything. These are things I do, and there are reasons for that. You might like those reasons, and they might apply in your case, too." That's always my approach with it... Because too often I think I haven't made that clear, and then people will try and apply a pattern in a place where I wouldn't even have applied it in that particular case, and then they come into some pain with it, or there's some friction there, for some reason.

But yeah, I think that's all part of the learning thing, and I love having those conversations publicly, especially when two people disagree and they could both be right. I like that, too.

**Break:** \[25:26\]

**Mat Ryer:** We talked a little bit about design, and upfront designing things... Some people - and I think more traditional waterfall kind of dev teams - like to do big design; they design the entire solution in documents first, or something that's really low-fidelity, so it's very quick and easy and cheap, that you can have this thought process. And then in a waterfall world, that would then go into development, and then later that would go into test, and then into release and into production, or whatever.

I always prefer iterative development. For me, I learned by doing, and I design often by actually implementing it, and I think that there's something to be said for the feedback that you get from your code as you're building something. How do we feel about how much upfront design do we do, versus just jumping straight into the code?

**Jon Calhoun:** I'm assuming by design you probably mean design doc type of -- maybe not design doc, but thinking about the entire system... But what I tend to use -- a lot of the times I'm working on web pages, so I've found that most of my upfront design work is just sketching out all the pages that I'd expect to have, and all the interactions I'm expecting. And I might not do them all. I might decide "Alright, I need an authentication system that supports all of these things. Let me sketch that out real quick."

\[27:55\] But for whatever reason, I find that whenever I sketch the things out at a very -- not pixel-perfect design or anything, but like a high level, it really helps me reinforce what type of data I'm gonna need at different pages, how those interactions are gonna work, and later, when I go thinking about the entire system and how I'm gonna actually code it, it helps me really verify whether or not something will or won't work, because I can be like "Well, that's not really gonna blend well with this design."

**Egon Elbre:** Yeah. I tend to do large-scale sketches, but not design per se. This is to understand the wholeness of the system, in a sense, so that things will things will fit eventually together nicely. But going into detail at that large scale probably would create so many errors because I'm missing so many details at the lower level. From there on, I would go from starting to implement those smaller pieces incrementally, gradually building them up.

**Mat Ryer:** Yeah, that makes sense. If you have an existing system that's quite big, then that probably changes how you should approach the design bit, whereas if you're just starting on something completely fresh, then I think that might change it, and it probably does for me. You have a lot more flexibility, but also there are a lot of constraints with an existing system. Decisions have already been made, and trade-offs have already been decided, so you have to live within that reality, don't you.

**Egon Elbre:** But Mat, are you ever starting from a blank page? The whole system also includes people, and ideas, and things that we want to improve.

**Jon Calhoun:** I would guess that when Mat says starting from a blank page he means like, let's say you're a contractor and somebody says "I need you to build this brand new page", we generally have this set of technologies that we're gonna probably use out of the box; we might use a SQL database, a couple different things, and we can just sort of set them up... Whereas if you're working at a big corporation like a Microsoft or a Google or a Heroku, they probably have a whole lot of things internally that you're gonna have to start plugging into and using however they are; you can't just go out and be like "Oh yeah, I'm just gonna make my own message queue and do all these things." Chances are they have all of this there and you need to figure out which ones make the most sense to connect to.

I guess as a follow-up question what I'd kind of ask is when you guys are in those environments, do you find things -- in school you learn about XML; or not XML... Those big diagrams, I forget the name... UML maybe?

**Mat Ryer:** UML.

**Jon Calhoun:** Okay, UML diagrams and all these things where you design all this stuff together, and you'll actually sit and write a design doc that covers all the different things and how they're gonna interact together... And I've done that before and found it useful in some projects, especially when I was first starting at Google; it was super-useful because I didn't know about half the technologies there, so people could review it and tell me "Oh, this technology would actually work better for you. Swap these things out." But I've found that later as I did more consulting type stuff and working on my own, that I kind of just went to a standard stack, and designing that way didn't generally become as useful.

**Johnny Boursiquot:** Let's start by basically saying personally I haven't used UML in 15 years. I find it to be -- well, let me not badmouth a technology that other people might still be using... It's just not my favorite. That said, I do use diagramming tools, and especially in the beginning. I like to think of it in terms of a topographical map - there's different layers of the tail that you're gonna add, especially if you have to basically communicate what you're thinking and your design.

\[32:00\] I think you kind of hit the nail in the head earlier, Jon, when you said that basically if you have to talk to other people and show them what you're thinking, you're gonna need some abstracted level concepts to be talking about. Rather than mentioning specific queuing technologies, you might basically say "Okay, this symbol represents a queue." Rather than mentioning "Okay, this thing uses Postgres" or "This thing uses Redis", or maybe you're just mentioning database, or cache... You're learning to think of systems, and not technologies, if that makes sense.

You have to be able to articulate and talk to your team about "This is what I plan on doing." That could go from building and implementing a feature, to designing large-scale distributed systems. So you have to be able to communicate. That's the key takeaway here - you have to be able to communicate to your team, and the level that's appropriate for your team is based on team dynamics, team culture, what folks are gonna find most useful... But you have to be able to communicate.

Personally, like I mentioned before, I start out with a readme, sometimes I start out with a mind map tool - that's one of my favorite tools ever. I use it for everything. It helps me reason about what I'm thinking, and I can start seeing the different layers that are applicable to a design, and basically then synthesize this into maybe a quick little write-up, and then accompanying that write-up I might have a boxes and arrows type of thing; there are tons of tools out there to help you do that. Draw.io is one of my favorite.

Having these things in hand helps you communicate and it helps you get valuable feedback that you wouldn't get otherwise. If I have to sit in a meeting and explain everything to you while you're trying to keep everything in your head - that's gonna be very hard to do. These tools exist to help you communicate. That's their value. Sequence diagrams is one of the best things invented. These things help you with communication and getting feedback.

**Mat Ryer:** It's funny you mentioned UML... UML I think was like an OO. It's very OO-heavy, as I remember it. You can model classes and sub-classes, and things like that, in all sorts. And since Go doesn't really work like that, maybe there are some changes when we get to using Go, maybe there's some things that are different.

Sandeep in the Slack channel mentions the maxim of "A little copy and paste is better than a little dependency." This is a subject that comes up quite a lot, and it seems that the default position is that you just abstract it and have a dependency immediately; as soon as you notice you're gonna use something again, that's the time to do it. And I personally have learned to resist that instinct and actually just copy and paste a few times first... And sometimes even just write a different version of it, something that's more directly specific to what I need right now.

So it seems a little wasteful, but the problem of course is if you abstract too early, odds are you're gonna get it wrong; you only really have one implementation in your mind, and so that's what the abstraction ends up mirroring, and doesn't necessarily suit future cases. So do you tend to go for the dependency early, or do you not mind a bit of copy and paste?

**Johnny Boursiquot:** Personally, I don't try to refactor anything until I've seen the same sort of pattern at least three times. That's when I know for sure that "Okay, this thing shows up here, here and here." Because otherwise that's a form of premature optimization. You don't yet know what it's going to be, it's okay to copy and paste; I don't need to abstract anything yet, I'm still trying to figure out what that thing is. But once I know, once I've sat down, I've seen it come up over and over again, that gives me an opportunity to see "Okay, is there a variance in how this thing is gonna come up?" Whereas if I had abstracted earlier, maybe I've painted myself into a corner and now I have to abstract again in something that ends up looking similar, but not quite the same as the first one... It's a premature optimization. I don't do it.

**Jon Calhoun:** \[36:14\] I can say that even as an experienced developer, I think we still sometimes do this when we shouldn't. To give you an example, I was recently messing around with some React stuff and I decided to take some of the SVG icons I had and just turn them into React components to make my life a little bit simpler... And in the process of doing it, I tried to generalize it, so I could just add in just a couple of small path strings and make all sorts of different icons... And I had three or four of them, so I knew there was at least some that had that, but later on as I went through the project and actually started doing more and more, I realized how they all diverged enough that doing it the way I was doing it was not the right way... And you'd think at this point in my career I'd know not to do that, but we still sometimes make those mistakes, and have to back-track on them and be like "Yup, that was a learning experience."

**Egon Elbre:** Yeah... I also tend to use the rule of three as that breaking point, and I also occasionally mispredict what's going to happen in the Go space, so...

**Mat Ryer:** Well, I think it's very normal. In fact, I have a feeling that we train ourselves really to look for these things, and we become too good at it... Or at least too good at thinking we've found those abstractions. And yeah, I think it's a discipline that we have to work on, all of us... Because I'm also tempted to do it sometimes as well. It's quite exciting, I think, because what we're essentially doing is multiplying the value of what we're building.

If you do find that interface in Go that just is the perfect sweet spot between the different implementations, especially if it's a single-method interface, I get extremely excited about that; I can't wait to do it... And yeah, I have to take a step back. It is a discipline thing for me.

**Jon Calhoun:** Taking a step back to when we were talking about using design diagrams and stuff like that... Egon, when you said that you had to redesign the synchronization algorithm, that sort of project - was that because you didn't come up with a good design upfront, or was it just something where you needed to try it in different languages or different algorithms just to find out which one was the most effective?

**Egon Elbre:** There are different aspects. The initial different prototypes were about just understanding the problem domain and space, like how these different synchronization algorithms work, so I can more efficiently design the system such that it fits the rest of the things better. With regards to rewriting the actual implementation, the idea there is that since I was using different paradigm languages - I was using functional programming, I was using JavaScript (which is kind of weird), Delphi, Go and Prolog, all of these give me different insights into what is nicer and what is bad in one paradigm. But once you get this knowledge, you can integrate them into a single whole that is much nicer to read and understand. So you're gaining different insights because different languages have different restrictions.

**Jon Calhoun:** \[39:59\] So I guess coming off of that, for the rest of you, do you find that writing Go code allows you to essentially design differently in any ways? I guess the best example I can come up with off the top of my head is - I wrote Java a while back, and I always felt like in Java it was kind of a pain to come up with an interface of some sort. It was a very involved experience, it felt like... Whereas in Go, one of the things I love about it when I'm coding is that say I'm writing some code that a user signs up and I need to email them a welcoming mail and do a bunch of other things, I don't actually have to think about all of those other things; I can just in-line some interfaces or functions into my type that I'm doing, and I feel like Go makes that very easy, so I can make what I'd consider -- it's kind of like a working prototype, but I don't have to think about the entire system; I can just sort of interface it away as I'm designing... Does that ring true for any of you?

**Mat Ryer:** For dependencies, absolutely. Yeah. I think that's also a nice way to talk about the kinds of dependencies that you need. It's an opportunity to say, for example if there's a big struct in some package, but you're only gonna use one or two of the methods, you can take it as a storytelling opportunity to just have the interface that describes those two methods. And obviously, the fewer methods your interface has, the easier it is to implement, and therefore the more likely the chance of it being implemented is.

And I think Go's philosophy of minimalism, and having fewer language features helps... Because you don't have this big, bloated toolkit from which to pull things. Of course, you can still write bad Go code, and you can still get into a mess, but I think the minimalist approach and the philosophy for Go helps there. It helps us a lot. In fact, especially if you pay attention to it and start to apply those principles yourself, I think all that really does help.

I think Go code -- we talk a lot about it. I know that people who do training on Go, and if you spend time in the Go community, it's a recurring thing that you hear, this minimalism; shrinking things down and trying to focus. I think that as a philosophy really helps us in lots of ways.

**Johnny Boursiquot:** Jon, what I picked up from what you said earlier was that Go in some way influences how you design software. It's not like we're basically taking some abstract concept and basically saying "Well, we can simply drop it in this language and we just change the syntax and you're ready to do", and then you take the same thing and drop it in this language, you just change your syntax and you're ready to go.

The language sort of informs how you think about it, for better or for worse; I don't really know if that's a good thing or a bad thing. Speaking personally, for my own career, I think it has helped, again, for that simplicity you were talking about, Mat, but... I don't know. I think the technology you use - I don't think folks like to agree with what I'm about to say, but I think a lot of times we basically identify a technology and we say "How can our problem fit into the what that technology solves?" We may not be willing to admit that, but sometimes that does happen. But I think in this case, if I'm being honest, I think Go has influenced the way I design software for the better.

**Mat Ryer:** Yeah, same for me. And honestly, they say that constraints can really encourage creativity. I've heard that said before, that by having those constraints and having fewer options, you actually can drive up creativity potentially, and that means we think about -- especially because the goal has to be simplicity... So we get to be creative about how simple can we really make this. I love that about Go, and I think you're right, it's done that for me, too.

\[44:09\] I think in the next major release of Go we should look at taking things out of the language, and of the toolchain, and things. There might be things that get added too, but there's some languages -- I know that Swift, for example, if you look at the development of Swift, that is extremely powerful, but there's a lot to learn and there's a lot to do, and if we care about simplicity so that we can work together more easily, then for me Go wins there.

**Egon Elbre:** Yeah, I think Go has been the most influential language in my design process in general. I think one interesting thing I've noticed about Go is that bad Go code feels bad... Which isn't the case for all the other (or most of the other) languages I've seen.

**Mat Ryer:** Yeah, that's a good point, actually. Go code can sometimes -- I'll look at a repo and I feel like I wrote that code. That happens to me more in Go than any other language that I've worked in. And similarly, sometimes if you're a Java developer and you start to write code, you really start by writing Java code in Go syntax... And it starts to look strange when you get used to Go. So yeah, I think that absolutely happens.

**Break:** \[45:45\]

**Mat Ryer:** What about assigning work when you're working in a team? I've seen it done lots of different ways, where there'll be some kind of manager or tech lead who actually assigns work... And I've worked in teams where we take the work, the dev team picks the tasks instead. Do you have any views on that, and any preferences?

**Egon Elbre:** I think it partly depends on the skill of the team in general. If you have a senior member and many junior members, then assigning tasks out such that they can learn and it's appropriate for their skill levels is beneficial.

At the same time, of course, if you have all senior developers, then it's going to be so much faster if they can decide amongst themselves and do it ad-hoc, essentially.

**Mat Ryer:** Yeah, I think that's probably true. In fact, I've noticed a theme here around context being quite important when it comes to the answer to any of these questions. "It depends" is often the answer. But when I've seen teams that have this "Take responsibility" approach, I noticed a very different kind of feeling towards the work.

\[47:57\] I've noticed that if you take responsibility for something, first of all you know you've got it, versus it's just assigned to you in some email in JIRA and you might miss it, but you know you've got it, so at least it's in your consciousness... But it's a kind of automatic ownership and responsibility that you just feel for, because you took it. And if you can't do it, for some reason, and you need help, then of course the team should enable that. But you could put it back. You can say "Okay, I took this, but it's beyond me. I'm gonna need help with it" or whatever.

It's a great opportunity to then collaborate and spread knowledge, and all that stuff... But I noticed this change, just the simple change of taking responsibility really dramatically impacted how people felt about the work, and therefore the quality of the work. Not to mention the natural selection of people picking things that they either have particular knowledge in, or a particular interest in. That also can happen, too.

**Johnny Boursiquot:** Yeah, I totally agree. If there is interest, if you get to pick the work that you have a preference towards, I think you'll probably enjoy that work more. But after doing this for a while, I've also seen the negative side of that. I've seen developers who take on a piece of a component or a piece of the architecture and they're running with it, and if they don't have somebody checking on them, they can sort of get into a rabbit hole, and they're afraid of coming back out just to say "You know what, I am struggling. I do need some assistance. Maybe I bit on more than I could chew" or maybe "This feels like I'm doing way more work than is necessary." There's a certain level of humility that must also come with this sort of responsibility. The humility must be part of the responsibility. You have to be able to put some distance between yourself and the work, not have so much of an attachment to it... Whether it's like "Oh, it's mine. I'm the one who's gonna work on this." Or "Crap, I bit off more than I could chew and I can't finish it, but I'm not gonna talk about it."

You have to know enough about yourself and your tendencies to be able to step back and say "You know what, I need help." Again, raising your hand, communicating with your team... And ideally, you're in a team that's not gonna judge you for that. They are willing to help you and pair with you and have a conversation with you hopefully about your high-level design if you have one... Ideally, those are the teams that function very well, and not just getting something in a JIRA email that says "Hey, you've now been assigned to this thing."

**Mat Ryer:** Yeah. That's another thing that the team needs to decide - if you take the responsibility for something, that doesn't necessarily mean you have to do all of that on your own, and the next time the team hears about it it's done. Absolutely not. You're really just taking the lead on that particular issue or that task.

The team is there to support each other, and the team wins or loses together. There is no individual kind of heroism within teams. \[unintelligible 00:51:16.17\] Lazy? No. They work very hard, and do a great job.

You succeed or fail as a team, so just by taking the responsibility, really what you mean is "I'm gonna take the lead on this, and I'm gonna for sure seek help where I need it to get this across the line." I think that's right. That's the right kind of approach to it, for sure.

**Jon Calhoun:** \[51:42\] I suspect this is also why teams that have worked together a lot more - even if they're not composed of the best engineers - are still better than if you took the best engineers you knew and threw them all together and they've never worked together... And I say that in the sense of you get to know what people can handle, you get to know what their workloads are, and if you're going to need help -- let's say I really wanna take on some new project, because I wanna learn this new thing, but I'm kind of worried that if I need help I'm gonna have to go to Mat's desk for help. I think understanding that, talking to Mat and being like "What's your workload like for the next couple of weeks, in case I need to sit down with you a couple days?" Because if Mat's really busy, then that's probably not gonna be a good idea.

But on the other hand, if Mat is like "Oh, I can set a couple things aside and we'll be golden", then as a team you can decide these things. But as Johnny said, you have to have a team that feels like they can openly discuss these things and actually tell each other "There's a chance I might not be able to do this, or I might need help, or I might have to rely on you a little bit more than somebody else might have to."

**Mat Ryer:** Yeah, absolutely. And for me, it's clear that the answer really has to be that. It would never be "No, I'm too busy." Because we want to succeed, so a part of everyone's role is to support other people in the team. And actually part of this taking responsibility idea - it also has a built-in kind of rate limit; if you're working on something that's taking a long time, you're not gonna then also be taking new work, so you kind of get a natural rate limiting in things, as well as part of it. I really have seen a lot of benefits to just that simple change of having people elect to do the work, rather than just have it assigned to them.

Okay, so what about estimation? This is probably a major subject in its own right, but... I don't think we're very good at predicting the future. I don't think we are good at knowing how long things are gonna take. Most of the time we haven't built this thing before. If we've built exactly this thing, then maybe we've got a good chance of having a good estimation for when it's gonna get done... But most of the time, aren't we building new things? That's our job. So I find estimation to be somewhat of a troublesome aspect of what teams are asked to do. The trouble is, of course, lots of people will be very confident and tell you when something's gonna get done by, but I'm not sure that they know any more than I do. How do you three feel about it?

**Johnny Boursiquot:** I was having an internal chuckle, because I'm like "Um, even with 20+ years of experience, I don't feel qualified to talk about this..." It is literally the thing that has plagued my entire professional career... When I think something is gonna take X amount of time and I end up doubling or tripling it. Like you're saying, there's an element of predicting the future there that you simply do not see coming. Even if you were to do the big design upfront, which unfortunately some teams still do, there's no way you can see what's coming, especially if you're gonna get feedback along the way.

If you isolate yourself and say "Okay, here's the set of requirements, from day one. I'll see you in three months" - you might come out on time if you're lucky, but it's pretty much guaranteed you're gonna come out with the wrong thing, because you didn't have feedback along the way. If you're trying to do the right thing, there's sort of a negative feedback loop there whereby the more input you get on the way to getting the right thing, the more it sort of deviates from the original plan. I'll basically throw up my hands and be like "Look, I don't know what this is really gonna take."

**Mat Ryer:** \[55:45\] Yeah. Well, you see, I think the problem is this question gets asked, and people who ask it, ask it with a very straight face, as though it's the most normal question in the world to ask. They'll say "And how long is that gonna take?" Unfortunately, it's rare that teams will basically question the premise. That question in itself is very complicated. That's one of the things I like about iterative development - you actually start seeing results much sooner, and that is a different approach really to this idea of "Yeah, okay, we're gonna have it done in a month" and then I'm just gonna go away and be on my own for a month.

Doing the iterative thing you can kind of get a sense for the progress of it and how long it's going. And it also comes down to trust. You have to really trust the development team that they're not gonna just waste loads of time doing nothing; that they are going to be doing this, and this is a focus, and things. I think a lot of the time these things come from a time when there either isn't trust, or just the philosophies are all different, and like it's from a waterfall design process, or something like that. What about you, Jon?

**Jon Calhoun:** One of the biggest issues I always have with estimation is that there are so many unknowns... It's like somebody says "Hey, can you deliver this package across the river?" and you're like "Well, how wide is the river? How fast is the water running? Is there a bridge? Do I need to build a boat?" There's all these different things that you don't know until you get there, and they're just expecting you to know "Here's the time."

So I feel like I tend to have better luck at this whenever I can actually dig into a project a little bit more, with some prototypes and that sort of thing... But the hard part there is that sometimes you don't even know how long that prototype is gonna take you to actually really understand things. So it's like this cyclical problem where it's like "I can't really tell you..."

I do think experience helps a little bit, in the sense that you start to -- I don't know how to describe it... It's not that you actually know. It's more that you're better at judging whether or not there could be some pitfalls, or you're better at recognizing potential pitfalls, but that doesn't mean you're gonna actually recognize them all or you're gonna be perfect. It just means that you're smart enough to say "I don't know fully, so here's my padding" or something.

The downside to that is that you end up with teams who have a bunch of tasks that all in reality take an hour, and everybody's saying "Oh, these are each four-hour tasks", and then you have management pushing back like "There's no way that's the actual development time."

**Mat Ryer:** Yeah, I worked at a place in London where the minimum time estimate for a task was one day. So there'd be a task to change this URL somewhere, and that would be a day, and then another task is to change the text in that same link, and that's another day. The company got used to just these massive slow-moving things, and then that slows everything down. The actual engineering teams worked at that pace then, and it was the most frustrating place I've ever worked... Because I like to do iterative and deliver things very quickly, but deliver less.

One way to be a 10x developer is to divide the work by ten, and just do a really good job on a tenth of that. Then every end of the week or couple of weeks later you can do demos and you can show things. For me, that's a much nicer way, it's a much better conversation to be having, rather than trying to predict how long it's gonna take. And like you say, John, building in padding. I like to just be completely honest, just basically generally... And I feel like padding is dishonest a little bit. I understand it completely, and by all means, teams, if you have no choice and you're being forced to do estimation, then yeah, of course, there's gonna be padding, because actually that's uncertainty. That's what you're doing, you're adding in an uncertainty buffer for yourself. And that's the other thing - if a task is uncertain, or there's a lot of uncertainty around a task, you should estimate it much bigger, because that's really what we're saying, is how certain are you about this thing... And the answer usually is "Not very. Not yet."

\[01:00:18.08\] Plus, as you're actually doing the work, new ideas are gonna happen; new ways of thinking, or a bit of creativity, something might spark, or you might see something else where you think "Oh, I didn't realize we have this. We could use this to solve this problem as well." All that stuff and that creative process should be allowed and should be encouraged, not discouraged. I feel like having these strict estimates, and even designs that are quite strict, I feel like that's not good.

I prefer tasks that talk about problems. That's why I like use cases in the agile world, where they're actually focusing on "This is a user that's trying to do something, and this is why." Even those get misused a lot, but yeah, definitely, that's the important stuff. And just this automatic kind of cruise control of "Give us an estimate and we'll know when it's gonna be done exactly" -- which by the way, is barely ever right... Managers must have noticed these estimates are barely right, so I don't get it; I prefer to say "We don't know." And I think we should, as for now, give permission to junior developers to say "We don't know, but nobody does."

**Johnny Boursiquot:** Here's something I've picked up over the years... In the beginning of a project, if you're working on a greenfield project, I believe it's a lot easier to provide estimates and somewhat be within an order of magnitude close enough to your original estimate... But over time, especially once the software gets released, it goes through a few iterations, things are being added, there are a few more dependencies between things - it does indeed become harder for your estimates to be right, because there's just more stuff there.

The software package might be larger, so it's no longer just about making your change, it's about making your change and it interacts well with other changes that the team is putting in, maybe interact with other systems that are themselves changing and evolving, so what you think you're committing, that works right in your local environment, goes and breaks your integration testing... So there's a lot of variables, and it gets worse over time, when you add the element of time to any production system.

So yes, we can definitely advocate for juniors to feel free to say "You know what, I don't know what this is", and that's absolutely right, because if they're a junior and they're still getting experience in terms of knowing what something should or shouldn't take, that's perfectly alright...

But I think we should sort of be empathetic to some degree for the senior engineers who are working in large systems, where their estimates is not the only thing that can be factored in. So managers do indeed have to add -- I don't think they would necessarily call it padding; it's more like a -- if there was a manager on the call, they'd probably have a name for it, but... I'm sure it's some buffer, some degree of saying "Typically, what we're seeing from sprint to sprint, or from release to release, is that the team estimates this much work is gonna get done, and there's typically about 1.5x that to actually get a release." So they get a pretty good idea of what the team velocity is in terms of being able to get through features and whatnot, so they know how to account for that. That helps with planning releases, that helps with product, and marketing, and all that stuff...

\[01:04:04.03\] So there's a lot of things around that. But I think the element of time, which really screws everything up when you add time to it - whether it's the package you've got right now, which is gonna evolve, or the piece of enterprise software that you're working on, which is also evolving... When you add time to that, then it makes everything, including estimation, harder.

**Mat Ryer:** Egon, we haven't heard from you regarding estimations... How long is it gonna take for you to give us an answer? \[laughter\]

**Johnny Boursiquot:** He's estimating...

**Egon Elbre:** A little. I think there are tasks that you can fairly well estimate in hours... But yeah, there are different things happening usually in the company, or something else comes up, so you get disrupted, and that pushes it out even more. So if I ask you to, let's say, add a new description field for the user, that process might be really well estimatable. However, implementing new things that you've never done before, you can be widely off.

I've spent a lot of time maintaining old legacy systems, so different things became such that I could pretty much estimate things, like... Let's say it's 30 hours, and it was plus/minus one hour. Then there were things that just were like two times off. I don't think it's just coincidence in that sense, so... Tying back to knowing when you're being imprecise with your timing.

**Mat Ryer:** Yes... That's the thing though - if you can estimate some things accurately, should you? Because that plays into this belief outside of dev that you should know how long things are gonna take. But you're right, absolutely. Sometimes if it's like that, we're gonna add a new field, and even if we have to touch a database, and the user interface, and the API - yeah, you can probably fit all of that in your head and have a relatively good idea about it.

And I quite like the idea of -- I've seen this T-shirt size thing done in teams, where they say "Yeah, that's a Small, this one's Medium, and then this one's just Large, or Extra Large, such that it needs breaking down, or we need to do a spike to understand it more." I quite like that, because it's a little bit more open about the fact that yeah, this is a very imprecise estimation.

Here's another thing though, by the way, whenever anybody says "Yeah, don't worry, this is not taken literally. Just do a best guess" - no. It's taken literally. It's almost immediately taken literally. That's why I'm now -- I'm quite lucky; I'm in a position now where I can push back, and I usually use it as an opportunity to sell this idea that "I'll tell you what - instead of trying to estimate this, let's pick a date and I'll give you a demo, and you can see what we can get done in that time. We'll get done as much as we can in that time, but I'm not gonna tell you what's gonna be done." The scope is gonna change, and if you can get that, I think that's the way to do it... Because fixing scope and fixing time leaves only quality as the lever that you can pull, and we should always be writing high-quality code, I think.

**Jon Calhoun:** \[01:07:49.12\] A question for you then - if you're going with this "Here's the date. We're gonna do a demo and we'll see how much we have done", how does that play into your decisions for like -- sometimes you can do some work upfront that will help some features come along, but they're going to slow down current stuff for the demo. Do you think that has an effect on how you design your systems and how you write code that way?

**Mat Ryer:** Well, generally I try and do a tiny piece of whatever that work was. Sometimes it's unavoidable, and there's a lot of foundational work to do, but often there's a little slice of that foundation that you could build first, and build it out later. So I really like this idea of delivering things in vertical slices, rather than big foundational project to get the API ready and the back-end, and then a big project to get the front-end working. I'd rather see a bit of the back-end and a bit of the front-end, a bit of everything working, and useful.

Honestly, we did it with Machine Box. The original versions of our boxes for Machine Box were very lightweight, cut down feature-wise. They had a very small scope. You could just do a couple of things... And there's a lot more we could have done with that, but we were kind of a bit obsessive over this keeping it minimalist. This came from the Go philosophy, I think, and the whole agile movement really talks about this... And it was so good.

We got it quickly into the hands of real people, and then we started getting questions like "In Facebox, how do I remove a face? How do I delete a face?", and we didn't have a way to delete a face. We'd say "Restart the Docker container, and don't teach it that face. Teach it all the other faces again. That was our solution, which is... Fair enough, I suppose. And in most production environments that's actually okay, because that's how these boxes were gonna be used... But we did add delete faces as a feature, and it became an obvious thing once a few people had started asking for it. So yeah, I advocate for that...

Sometimes though - yeah, you have to just make a call, and you might delay the initial releases; the initial demos might not be as good as you want them to be... But again, it comes down to trust.

**Jon Calhoun:** I ask because I worked on a project once where essentially the new features that needed to be added all required a major database redesign, because the way it was set up currently could not support the features, and we couldn't just do quick migrations because it would lead to massive performance issues... So we had to basically take a lot of things into consideration as we were doing it, which made it this really long project that ended up taking several months to actually completely finish the whole thing... But if was one of those ones where had we just tried to iteratively show small demos, I feel like it would have been bad.

I could have shown a demo with most of the new stuff working, but it would have been in this isolated environment, with a very small dataset it works fine, but if you throw in all the data, then some users are gonna sit here waiting for a page to load for 10 seconds, which is not acceptable.

**Mat Ryer:** Yeah. Well, honestly, if you do know things upfront, then I'm not saying you just don't act on your knowledge. You'd still take action based on what you actually know. My argument is most of the time you don't know that much upfront, and you learn most of it by doing it... But yeah in some cases you probably -- in that case it sounds like it was clear. Did you have to go through a big design process?

**Jon Calhoun:** We had to do some things to prove certain things wouldn't have performance issues, which is what made that very hard and what made the process long - it wasn't clear from the onset, like "If we change it to this, is it actually going to have those issues, or are there ways that we can get around that?" So it took a couple iterations of figuring out the correct way to set up the data, looping back with customers and making sure that whatever trade-offs we made were going to work for them...\[01:11:59.16\] Because that was the other part of it - some of what we were doing was dependent on what customers for the application needed, versus what was easier for us to do... So it was just a very long process in that sense, and it's one of those ones where estimating that, even today if I sat down, having done the whole thing and had to estimate it, it would be very hard to give a fixed estimate, because it depends on so many things that it's just really hard to do.

**Mat Ryer:** It sounds like you did it the right way. It sounds like in that context what other choice did you really have...? Yeah. And again, that's kind of a theme that I've noticed - it depends. There isn't really a right or wrong in this either. Building software is hard, and it's almost impossible, and somehow we still have some software, so it must be possible. That's where my reasoning always leads me.

Anybody else? Final thoughts... We're almost at the end of our show. Anything else?

**Johnny Boursiquot:** The last thing I'll add there - in part because of what I've been doing for the last couple years, and basically being involved in more of the operational side of delivery of software if you will, engineers or folks who are developing features, who are building things that users are gonna end up interacting with, or other systems are gonna end up interacting with, the design process should involve how the software gets delivered, how it actually gets in the hands of the people who are gonna use it, or the systems that are gonna rely on it.

It's not enough to simply design features, it's not enough to simply design what folks see and do, and it's not enough to worry about just the interface, or just the database performance, and this and that... You have to take a holistic view of the entire system, from how much bandwidth does the system have, what's the communication between components like - all these things have an impact on your system, especially the higher stakes this piece of software, the more these things are gonna matter; how fast are your disks... Things that as an engineer or someone who's developing features wouldn't think about.

I have an appreciation for that stuff now, having seen on the back side all the things that go on to deliver high-performing software. As a software engineer who's writing software and working on features, the more of sort of what goes on behind the scenes - the more of that stuff you know... And I'm not talking about full-stack; full-stack these days seems to just mean that you can write an API, or connect a database to the back-end and also write some front-end... Perhaps we can rename it "full full-stack", or something; I don't know, whatever name you wanna give it...

The more you know about what happens when your software gets delivered, the more you know about what happens when it goes on the cluster, the more you know what happens once it's containerized, or when it's interacting with other components, at the network level - the more you know about that stuff, the better engineer you're going to be.

I've noticed my own skills level up the moment I started paying attention to these things; how I design software also improved. So it wasn't just about the language, it wasn't just about some new best practice I picked up, some architectural design kind of thing, it was also about "Okay, care about what happens when your software is running. How does it get operated on?" These things all make you a better engineer, and they are part of the process as well. That's my takeaway from this.

**Mat Ryer:** \[01:15:52.15\] I'm so glad you said that. It's such a good point. And it doesn't mean that new developers need to know everything before they can be useful. But you're absolutely right, the more you know, the better. That also applies the other way, from the user and the customers, and what problems they have, and what they're doing, and what their day looks like, and where your software fits into their day. That kind of stuff on the other side, too - the more you know, the better. And we do have to divide and conquer, of course, and we're a team, and we're gonna have different interests and different strengths, but Johnny, I couldn't agree more - the more you know about this stuff, the better. And also therefore don't be too protective of your domain. Welcome people in and share your knowledge as well, because everything's gonna get better if we do that. What a great point, Johnny. That's really made my date, mate.

Right, I think that's our show. We've actually run a little over... You know, this show is kind of awesome, because we just have these conversations, but we're actually spread all over the world. Where is everybody at the moment? I'm currently in London. Johnny, where are you?

**Johnny Boursiquot:** I am in -- the closest city you might know is Baltimore, Maryland.

**Mat Ryer:** I do know of that one. It's in a movie called The Sum of All Fears.

**Johnny Boursiquot:** \[laughs\] Yeah, that one.

**Mat Ryer:** That's a film in which a nuclear device explodes in Baltimore. Jon, I know that you were disappointed to learn that the Art of Execution wasn't actually about corporal punishment.

**Jon Calhoun:** A little bit frustrated. I thought that's what you invited me for. I was doing research... \[laughter\] That sounds really morbid.

**Mat Ryer:** Where are you, Jon?

**Jon Calhoun:** I'm in Pennsylvania. The closest city people know of is probably Pittsburgh or Harrisburg, but they're both like two hours away.

**Mat Ryer:** Oh. I forget how big America is sometimes. It's enormous.

**Jon Calhoun:** Yeah... Some of us live in the middle of nowhere.

**Mat Ryer:** Yeah. And Egon, are you in Estonia at the moment?

**Egon Elbre:** Yeah, I'm in Estonia. The closest city you might know is Tallinn, but... I mean Tartu, actually.

**Mat Ryer:** Nice. Isn't that amazing, that we can just have this conversation and make a podcast together, and we're spread out all over there? And extra points for Egon for doing this in another language, as well. I'm always blown away. I was at GopherCon EU, and I'm so genuinely blown away by how effective people are communicating in a second language. Same for you actually, Johnny, right? We talked about this... There's a joke that somebody told me; they said "What do you call somebody that can speak three languages? Trilingual. What do you call somebody that can speak two languages? Bilingual. What do you call somebody that can speak one language? British."It's such a burn... But it's correct. Anyway, I just wanna say that... Blown away by everyone, and their communication skills in other languages.

So that's it for our show, and what a great one it was. I learned a lot, and I hope you did, too. We talked about the art of execution - how we actually get things done. And it seems to me that there are some things that are good practices, but by and large it really depends on lots of other things. It depends on your team, it depends on the kind of thing you're building, if you're working alone, if you're working in open source that changes things, too... And also, there probably isn't a right or wrong way. It's about exploration, and find out what works in your context. That's how we can keep building excellent technology.

That's it, we'll see you next time on Go Time!
