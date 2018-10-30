**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode 218, and today Jerod and I are talking to Evan Czaplicki and Richard Feldman. Evan is the creator of Elm, the best functional programming language in your browser.

We have three sponsors - Rollbar, Toptal and DataLayer, a conference put on by Compose.

**Break:** \[00:00:33.19\]

**Adam Stacoviak:** Alright, we’re back. We got a fun show, Jerod. I think Richard’s got an alarm set or something like that. We've got Evan Czaplicki and Richard Feldman we’re going to introduce here in just a second, but his is a catch-up show. Six months ago, back in January, we had Richard on, talked about Elm, got really excited about it, and a lot of people loved that show. We actually got asked recently, "Another Elm show, so quickly?" What’s going on here?

**Jerod Santo:** Yeah, like you said, I think Richard set a reminder. I remember at the end of that show, we said, "Oh, we got to get you back on. Six months from now, a year from now, come back; bring Evan, or not… Let’s talk about Elm again!" And then maybe six months to the day, Richard, that e-mail came in and you’re like, "Hey, it's six months, let’s do this." It was that easy.

**Richard Feldman:** I wish I could take credit for having that good of a memory, but… Yeah, I set a reminder. \[laughter\]

**Jerod Santo:** Well, it was that easy. Adam, I want to take a second, and talk about some of our upcoming shows, because… I don’t know. Have you looked at our schedule lately? It’s looking spectacular.

**Adam Stacoviak:** Oh, man... I’m so excited about the schedule. It’s rockin'.

**Jerod Santo:** Yeah, everybody who's been listening knows just recently we had both Electron and Sourcegraph on the show. Upcoming after this show - of course Elm, huge topic - we have Cory Doctorow coming on, Eli Bixby; both of them will be at OSCON London, which we'll be at as well. Hillary Hartley and Aidan Feldman from 18F, Gavin Wood with Ethereum, Sandi Metz… Come on, Sandy Metz?

**Adam Stacoviak:** Right.

**Jerod Santo:** \[00:04:04.10\] Bertrand Le Roy talking about .NET Core, and a whole bunch more. If you’re listening, and maybe you just came for the Elm, stop right now and hit the subscribe button, because we’ve got some good stuff coming down the pipeline.

**Adam Stacoviak:** That’s true. We do.

**Jerod Santo:** But let’s talk with Evan and Richard. Guys, thanks so much for joining us, and taking time to talk about Elm today.

**Evan Czaplicki:** Thanks for having us.

**Richard Feldman:** Yeah.

**Jerod Santo:** Richard, like we said, we had you on the show back in January; that’s episode 191. People can go back and listen to that one as well, to get your backstory. Evan, this is the first time that we’ve had you on the Changelog. We do like to find out about people’s background. We find that it’s both interesting and inspiring to hear where people who are doing cool stuff in open source have come from. Can you give us a little bit on your background in terms of maybe an origin story, how you first got into programming, or open source… What can you tell us about where you’re coming from?

**Evan Czaplicki:** Sure. I think in my age group there’s a lot of people that started with TI-83 as their first programming experience.

**Jerod Santo:** Boom.

**Evan Czaplicki:** But trying to… You learn Pythagorean Theorem in class and you’re like, "I can solve that forever!" But I really got into it in high-school, and was really intrigued by games. As soon as we could do basic Java things on the command line, I was like, "Alright, command line game." And as soon as I learned how to draw a rectangle, I was like, "How do we move this rectangle around with the keyboard?" Really, it was this sort of push towards something, some sort of game I could show friends or family. One thing that’s been interesting as I’ve been working on Elm is coming back to the same thing, except many years later. It’s better than my Java code partly because I’m a bunch of years older, and way more experienced, but also because I made a language. \[laughs\] I’ll come back and be like, "I did it again, and this time — oh, it’s so much nicer! All I had to do was make a programming language." \[laughter\]

**Adam Stacoviak:** No one ever says that.

**Evan Czaplicki:** That’s been one of the fun… One of the early examples with Elm was if you walk around as an RPG-type character - and I actually used art from a project I did in high school - it’s the same look, it’s just you know… Just write a compiler, and it's way shorter to write a program. \[laughter\]

**Jerod Santo:** That’s hilarious.

**Evan Czaplicki:** My interest has always been in not necessarily games per se, but in the joy of sharing something fun. When I got into language stuff, it was with an eye towards, "What cool thing can I make for people?" To tie this in a little bit mo, I had this experience at a place I was interning. I was interning at Google, and I was backend-focused. I was writing C++, writing callbacks in C++, wondering why you would write callbacks in C++. But that project finished a bit early, so I had a bunch of weeks, and ended up helping out on a frontend project. I had this feeling that I was working on... In theory, I was in the best environment to have a good experience, and the kind of things that were difficult were just comically bad. I remember we wanted to put the logo in the middle of a box, both vertically and horizontally in the middle, and at some point we just were like, "Nah, maybe we don’t want to do that." \[laughs\]

**Jerod Santo:** Yeah.

**Evan Czaplicki:** \[00:07:46.20\] We had a sidebar, and the sidebar was going to be reused on all the pages. We were like, "Oh, how do we reuse this code?", and the answer was like "Oh, there’s not really a good solution for that. You can maybe make an iframe. We have this custom templating language internally, and you can…" And I was like, "This is a 20-year-old technology that’s running the whole internet? This is the ideal…?" I don’t know. There’s just these kinds of problems that seemed so silly, and that really stuck with me. And having a background in languages, this ended up being a big motivation for how this project came to be.

The root there isn’t like, "Oh, I want to make a thing", it was, "I specifically want to vertically center this picture." That desire got out of control.

**Jerod Santo:** How long was it between "I vertically want to center this picture" and you dove deep into this creation of a language, and an architecture? Give us the timespan in months, perhaps, before you had your thing that you could vertically center your picture.

**Evan Czaplicki:** Probably the initial story of being an intern, that was about a year or two before I started working on Elm, before doing anything. It was just percolating in my mind as like, "Man, that was a terrible experience", but at the same time, "I want to make cool stuff in that realm."

**Jerod Santo:** Right.

**Evan Czaplicki:** In the meantime, I’m writing more about compilers, writing parsers, these kinds of things. Building these skills, not in a directed way, but just in a way where by the time it comes around for me to do my senior thesis, these things all aligned to make a project I was really passionate about.

**Jerod Santo:** I can definitely relate, and being a longtime web developer, you learn to just work around the craziness and the hard stuff, because that’s how you get your job done, or that’s how you accomplish your goals. I had been doing it for so long that I forgot how insane a lot of the CSS hacks that we have to do are, until I started teaching people who are fresh to web development, teaching the basics of HTML and CSS.

You know, HTML in terms of a markup language is pretty straightforward, and people are like, "Oh, that makes sense, I wrap stuff in tags, I can give them attributes, and put my content into it." Then you get to the CSS part, and things like, "Yeah, I just want this to be lined up vertically, or dead center in the middle of the page," and you have to teach somebody how to do that. That’s when you’re like… With fresh eyes, it’s so ridiculous.

**Adam Stacoviak:** Yeah, the box model really, for the longest time and obviously still yet as well, is the bane of the existence of frontend web. It’s like, teach somebody the box model; you think they get it, but still... Even then, you’re like, "That’s the box model? That’s how it works?" And all the browser course that goes with it, all the things you have to do to hack around it... You’re right, Jerod - teaching someone brand new CSS is like, "Good luck." You really have to want to learn it.

**Evan Czaplicki:** That’s something that I should’ve had been worrying about. As Elm gets really nice for writing HTML and CSS, I worry that I’m losing that outsider perspective on those things. Because the initial dream was "What if there was a better way?" and it turns out that’s a very hard problem. But I still feel like that’s something we should be thinking about. It’s really easy to think about other things instead, or fix things around…

**Adam Stacoviak:** I think if you look at the stack, the frontend stack, the thing that is the most… Oh man, I hope I don’t get beat up by the CSS people out there, because I’m one of them, too... But you have to admit that CSS is probably one of the most quirkiest pieces of the frontend, right? It’s the hardest part, in my opinion. Learning CSS is like a dark art. Getting to mastery is almost unattainable. It takes at least 10 years of CSS to become a master, I would say.

**Richard Feldman:** I think I would agree. Absolutely, CSS is one of the hardest parts about web development. Possibly the hardest, honestly. But I think what’s tricky about it, coming from a perspective of using Elm, is that with JavaScript it’s a pretty reasonable proposition to say, "I want to take this part of my web app, and pull it out and replace it with some Elm code", and just sort of introduce Elm that way. It’s pretty hard to do that with styles.

\[00:12:22.14\] CSS very much encourages having these global style sheets that are sort of everywhere, and unless you’re already on some inline style type bandwagon, you’re going to have trouble with that. Even if you’re on the inline style bandwagon style, usually deeply nested styles result in the hierarchy mattering, and it’s pretty hard to pull something out and say, "I’m going to drop in this new Elm thing that’s styled in its own way..." Basically, what I’m saying is even if Evan said, "Hey, Elm now has a great way to do styles, so you don’t have to learn the box model, and so forth" - that still would be difficult from a "how to introduce it" perspective, because one of the things we’ve learned is that the critical thing for people to start using Elm in production is introduce it gradually. I don’t know how somebody would do that with styles, just because the way that CSS is designed.

**Jerod Santo:** Yeah, absolutely. Let’s backtrack just a little bit here, Richard. We’re talking about Elm, and I want to talk about that in-depth with regard to sprinkling it in, because that’s a new revelation to me as somebody who’s interested in Elm, but not quite ready to dive into the pool, so to speak. I didn’t realize that you could do that. I know that you guys had a popular post just recently this summer about how you could do that, and ways you can get started on that.

But first, for those who didn’t listen to \#191 or just catching up, Richard, can you give us the high-level synopsis of what Elm is, Elm architecture, the problems that it solves? We’re talking around them, but can you lay it all out there for us?

**Richard Feldman:** Sure, at least from my perspective as a web developer. I guess Evan’s probably the best at talking about what Elm is, since he made the whole thing. \[laughs\] At least from my perspective, I see Elm as… First of all, it’s a programming language that compiles to Javascript. You can use it alongside your Javascript, which is how we used it at work, how I’ve used it on my side projects... Basically, the problems that it’s solving are maintainability, reliability, and ease of use.

I feel I have a better UX, I have a nicer time with Elm than I did with JavaScript. My error messages come to me earlier; the compiler finds errors before they can reach my end users, which I really appreciate, because I’m somebody who cares about user experience, and I don’t want errors getting to my users. I also really appreciate the way that it’s designed in terms of how it feels to maintain an Elm codebase; it feels really nice. It’s very reliable, very easy maintain. I’ve just had a really pleasant, delightful experience around it.

Statistics-wise, at work, what we’re using now - we did introduce it gradually; we can talk about that in a bit. Right now, we’re at 36,000 lines of production in Elm code. We’re hiring, by the way, that's NoRedInk. \[laughter\] So if you want to use Elm, we’ll teach you, you don’t have to know it coming in. Basically, we use it for pretty much all of our new web development. At this point Javascript is pretty much just legacy; if we want to use a third-party library, NPM is obviously a lot bigger than Elm package system, but other than that, we don’t really reach for Javascript at all anymore. It's just legacy code, and quite frankly, we have legacy code that’s still in JavaScript. We write it in Elm as soon as we get the excuse. Another statistic is that we’ve been running it in production for a little over a year, and the total number of runtime exceptions we’ve gotten from our Elm code is zero, still.

**Jerod Santo:** \[00:16:14.15\] What?!

**Adam Stacoviak:** That’s crazy. \[laughter\]

**Evan Czaplicki:** So that might be the short version of what Elm is.

**Richard Feldman:** Yeah.

**Evan Czaplicki:** Yeah.

**Richard Feldman:** I mean, it’s the short version, but it’s like… I've definitely used systems in the past, where it’s the way they achieved reliability was by pushing it all onto the programmer, but I think it’s important to note that Elm achieves reliability by making it really nice. \[laughs\] By telling you about problems early on, and telling you about them in a friendly way.

**Jerod Santo:** And another thing to add, Richard mentioned it’s a language, it's also the Elm architecture, so it's very opinionated about how you should be building your web applications. On the other side of the break, we’ll talk about how it’s recently gone through a big change with regards to functional reactive programming. So maybe not that deep yet, but what’s the Elm architecture, and give us — round out what Richard had to say.

**Evan Czaplicki:** Right. So when you’re writing a program in Elm, you’re going to be using the Elm architecture. It’s easy to think of that as being opinionated, but in Elm it’s just the way things come out. This is something we’ve discovered as we observed people writing programs over the last couple of years.

**Jerod Santo:** There’s only one way to do it, is that what you’re saying? There’s no "This is the right way, but you can do it the wrong way." There’s only one way to do it.

**Evan Czaplicki:** Yeah, so if you think of alternatives, they all fall within the scope of the Elm architecture, which is broadly defined to cover things that work in Elm. The alternatives often are, "Well, what if we had mutable state in this component?" and it’s like, "Well, this language doesn’t have mutable states, so that’s not an option."

**Jerod Santo:** Go somewhere else, yeah.

**Evan Czaplicki:** Yeah. A lot of the alternate architectures or differing opinions on architecture are really about, "I want to have mutation, or I want to have use mutation or side effect in my architecture in various ways to make my code look a certain way", and because of the nature of Elm, it makes a lot of those choices for you, and the end result is really nice. A lot of the sneaky problems you’d have are often, "I have this thing over here, it touches this variable; that variable is touched by four other things. Now, is that up-to-date in all other places? Now you have a bug."

There are tons of strategies you can use "Okay, we’ll make that reference a reactive thing, so everyone will get notified." This ends up with issues around, "Which direction do these messages go?" You end up with some quite complicated stuff along these lines.

In Elm, by starting out with the foundation of all those that are immutable, the architecture falls out of that. I think it might be interesting to see what the discovery process looked like. I noticed that my programs always were written a certain way. One of the first bigger programs that I wrote was actually a presentation about Elm in Elm. I was hacking it together very close to the time I was going to be showing it, and I finally got it working, and I went through to clean it up, and I was like, "Actually, this is decently architected. That’s weird." I had this experience a couple of times.

I made a little Mario game for myself, and I was like, "Oh, this is fine." I wouldn’t expect it to come out that way, but then I was also like, "But I made it, so maybe I have an intuition for it, or something." So I went to what was at the time called Hacker School, and someone there, just in the course of a week, they made a little side scrolling type game, and asked me for a code review. I was like, "This is good!" Not in an "I don’t think YOU would write good code" but after a week of coming from no experience with functional programming or Elm or anything like that, to write something that was well architected, I was like, "This is a little weird."

\[00:20:24.29\] That’s when I started noticing this pattern that we ended up calling the Elm architecture. This idea of, you get messages in, you have an update function that updates the state of your application, and then you have a U function that says, "Here’s how I show that on the screen." That’s just how Elm programs come out, if you use the language.

**Jerod Santo:** Very interesting. We are hitting up against our first break. On the other side we’ll talk more about this discovery process, because it seems like you’re still in it, to a certain degree. Just in May, I believe, Elm 0.17 came out with a big change to the way Elm works. It seems like a dramatic simplification, so we’ll ask you about that on the other side of the break.

**Break:** \[00:21:18\]

**Jerod Santo:** \[00:22:31\] Alright, we are back with Evan and Richard, catching up with Elm and what’s happened since January. We’d like to say around here that open source moves fast, and in the Elm language and community that’s more true than you would know, because things are moving fast. Back in May you guys released Elm 0.17, in which Elm said goodbye to functional reactive programming, which is a term that’s near and dear to a few hearts, but also big and confusing, perhaps, to other hearts. Let’s start with a description of FRP or functional reactive programming is, why Elm was using it, and why Elm is no longer using it.

**Evan Czaplicki:** That’s a big question. If you trace the roots of the term to the academic literature, it means a very particular thing. There’s a disagreement within the academic literature about what the scope of that term should be. In the original conception it was about a continuous model of what’s going on. It would’ve been really nice for animations or 3D things, where you could describe the physics of your situation, which is the closed-form physics equation. You basically write down Newtonian physics, and it does the right thing. That was the initial vision.

\[00:23:56.01\] So I came to this independently, I didn’t know about this literature. I came to it from this perspective of, "I have this library, basically, from making visuals, 2D layout, so I can put things in the middle of a box" —actually the middle, it’s very easy. You put it in the middle of the container, it works. At some point, I was like, "This is cool, but I’d like for it to move and interact." I was coming from a functional background, and I didn’t want to just introduce all the kinds of mutations and side effects that are not in this language, that make them so nice. So my question is, "How can I get interactivity without signing up for these kinds of ideas?"

So I had this idea, "What if we had values that change over time?" What if, instead of saying, "What’s the mouse position right now?", when you say "mouse position", it is always the current mouse position, and anything that depends on that mouse position is updated as appropriate? So that’s kind of where the root idea came from. For a couple days, I thought I invented this. I was like, "Oh my gosh, the whole world’s going to be different."

I told my mom about this, and she was like, "You should see if there’s any related work, or anything." It turns out I was 13 or 14 years late on this one. If you really trace it back, it’s much older than that. It comes from this idea of how do we things from a functional way, without introducing all these imperative techniques that are typically used? That’s the academic side of things.

The term came to mean "we have interactivity and we have a map function." Basically, it’s functional and it’s reactive, so we’re going to use this terminology. It means dramatically different things to different people. In our case it meant updates come in and we handle them in a certain way. What we noticed is people were setting up the same programs, right? So I'd take these inputs, I'd merge them all together, I update my model, I send it out to My View. So no matter what your program was, people were setting up the same network signals - that's what we called them; other people called them observables. Everyone was setting up that same system. At some point, I think Richard did a lunch talk somewhere, and everything was good, but we…

**Richard Feldman:** \[unintelligible 00:26:34\]

**Evan Czaplicki:** Yeah. Everything was good, but we stumbled on the signals by just explaining it. So on the walk back to the office we were just chatting, and I was like, "I bet I can hide all of that with a library before you can get back to work." So I walked upstairs and did it, and he walked back to his office, and I had it out there.

I essentially found a way to create that signal graph, that basic setup that worked for, I want to say 100% of programs; we didn’t know that at the time. But we were like, "99% of the time, this is going to be enough." That was called StartApp and everyone started using that, and it was much easier way to get people started; they just didn’t have to think about a lot of concepts.

At some point we realized, "This actually can cover everything that people need, just flat-out." It is generating this signal graph underneath, but messing with that isn’t actually essential complexity.

\[00:27:39.20\] When 0.17 happened, we did take out a… Essentially, we took out an API that was no longer was in use, and it felt very essential, but in reality, the underlying ideas behind Elm stayed the same, and the code that people were writing stayed the same. There just was this layer that fell out of use, that we just took out, so we have a simpler story, and a simpler way of thinking about all these kind of things. Does that make sense? I hope that makes sense.

**Jerod Santo:** It does. You have this new, simpler thing that people use in Elm now called Subscriptions, which… I love how you think it would cover only 99%, but it turned out being 100%.

**Evan Czaplicki:** \[laughs\] Well, we just had a gut feeling, you know? Yeah.

**Jerod Santo:** Yeah. Why not just bat 1.000, I guess. \[laughs\]

**Richard Feldman:** This has actually been very dramatic for me, because I’ve been teaching these workshops in preparation for... I’m doing a two-day frontend master’s course in September, and I’ve been doing these weekend workshops to prepare for it. I’ve been doing them both before and after this change. The difference in how the workshops go has been extremely dramatic.

The percentage of people who walk out, just feeling, "Oh, this is awesome! I get it," has been very different. When I don’t have to explain any signal stuff, they’re building the same programs fundamentally, they’re organized in the same way, I talk about them in the same kind of language, but the difference is people get it more easily. It actually seems like not only is it a simplification, but it also presents a much nicer learning curve.

**Evan Czaplicki:** Part of what the change is, before and after this you really didn’t have to know about signals, but before that you felt like you had to know about them. I think that’s the important thing that’s easy to forget about - it’s the fact that something exists will inherently make you feel like you should know about it. I’ve used many languages that are this way. There are concepts and terms that exist, and the fact that I don’t get them yet makes me doubt what I already know.

I also want to push back against the idea of Elm changing quickly… I think it’s true that we aren’t afraid to make improvements, but I don’t think they’ve been crazy if you think about the actual code that people are writing. When 0.17 came out… I don’t know if maybe Richard can give a better estimate, but the actual code that would have been invalidated or not work anymore is 5% of code. It’s not really a huge change, and I think I’m pretty deliberate about "How can I prove things and make an important change without disrupting everyone’s stuff?"

**Richard Feldman:** For us, the change from 0.16 to 0.17 is largely a mechanical process; it’s just like, "This thing has a different name now, this thing needs to take one fewer argument, because we don’t need to pass as much stuff around." Actually, honestly, the big thing we had a lot of conversations about was how do we deal with merge conflicts? You know, baseline programmer stuff. How do you upgrade a large codebase? And of course, as pretty much always turns out to be the answer, the answer turned out to be, do it incrementally. Spoiler alert! \[laughter\] Conceptually, not a big change if you’re already using StartApp, which we were.

**Jerod Santo:** On the practical side, if you were using signals, that gets changed over to subscriptions, and signals just is gone -you don’t have to worry about it anymore?

**Richard Feldman:** \[00:31:49.03\] Signals are gone and you don’t have to worry about it anymore, but actually subscriptions are… This is my take on it, but basically there were things where before you needed to use signals, but now you don’t need to use anything; they’re just a first-class thing. For example, an onClick handler. It used to be you had to pass an extra argument to onClick in order to make the wiring happen, and now you don’t. OnClick just takes one fewer argument, just one less thing to learn, and it still works the same way.

**Evan Czaplicki:** Yeah, yeah. I generally categorize 0.17 as, we learned what it would look like to write good code, and we just made Elm accommodate that better. So it’s not like anything was fundamentally changing in Elm architecture. We were just taking the next step based on what we’d observed, what people wanted to do.

**Richard Feldman:** So subscriptions are basically just… Almost all of the changes were just taking stuff away, but the one case where they weren’t was how do you respond to a global event that’s not scoped to a particular DOM element? For example, a full-screen change - if I changed my browser from full-screen mode to not full-screen mode, it’s like how do you listen to a global thing like that? You can’t put an onClick handler on that, you don’t have access to the document directly, so how do you do that?

Subscriptions were just like, "Oh, if we just introduce one new thing to cover that one particular set of cases, then you don’t need signals for absolutely anything at all."

**Evan Czaplicki:** And my alternate phrasing of that is that before, you would to use signals for that, and signals in some way were tough to weave into the basic Elm architecture that everyone wanted to write. It’s not that the fundamental mechanism changed, it’s that the API around that sort of shifted to make it easier to get those messages.

**Jerod Santo:** Well, easier is always better. I think that as a user of Elm, or as a casual observer of Elm who’s thinking about using Elm, anything that you could simplify - mental models, or even the codes that I have to write... I’m all for that. Do you guys see any other - I don’t want to call them "big changes" in regards to the way things work, but low-hanging fruit or aspects of Elm that are perhaps confusing now that you can find similar wins, like you did with signals?

**Evan Czaplicki:** I don’t see anything like that. I think signals was the last real stumbling block. So one of the things Richard and I think a lot about is how can the learning curve for this basically be as smooth as possible? And it's at a point now where I’m pretty happy with how it looks. I don’t think there’s any point where there’s a huge jump where we’re losing tons and tons of people. There might be blocks, but there’s nothing that's even close to what signals were like in terms of learning curve.

**Richard Feldman:** I do think honestly the biggest changes that we have left are not language design changes, but rather communication changes. We’re still figuring out the right way to present things, such that people end up proceeding with their exploration of the language and getting into it in a way that leads them to a good outcome. So this is a big thing that I’ve been seeing recently...

We use Elm a lot at NoRedInk; we love it. We’ve been extremely happy with it, and we ended up with — I think honestly, by accident— doing what turns out to be the right thing in terms of how to scale an Elm application. I’ve talked to a lot of people, especially the beginners, who seem to not be as lucky as we are, and seem to be starting off going down the wrong road, and I’ve really struggled to communicate how they should basically learn from our experience, and end up in a happy place. I can’t claim to be really good at that, yet. I’m still learning how to communicate that effectively.

**Evan Czaplicki:** \[00:36:17.21\] Yeah, and we've had things like this in the past where we needed to introduce a particular concept that is generally useful. The language that was paired with it, by social accident or historical reasons, was really confusing for people. There are examples where we spent a year more thinking about what’s the right terminology to pair with this idea, so that the idea becomes easy, and not change the idea in any way. I think that’s the kind of thing that we’re working on now.

Richard mentioned components. A lot of people come to Elm from JavaScript, where components are really a common concept. Thinking in that mindset often leads you to do odd things. The reason why is that one way to look at a component is as an object, right? So you have your local state, you have these publically exposed methods... If you came to Elm and said, "I want to structure my whole application around objects", everyone would say, "Oh, Elm doesn’t do things in object-oriented way, you should reconsider." But if someone says, "Oh, I want to structure everything in terms of components", because it’s a different term, the fundamental similarity between those two things doesn’t trigger in anyone’s mind, so they’re like, "Oh, okay, let’s see how we can make that happen." I think that’s allowed a lot of people to try to do object-oriented patterns in a functional language, which is inherently… If you use the right terminology, it’s easy to see when you’re making that mistake.

**Richard Feldman:** Basically, when I tell people about certain characteristics of our codebase, they’re just very surprised and kind of disbelieving. So I say, "We have no runtime exceptions," and people are disbelieving because that sounds too awesome to be true. But then I tell somebody, "We have a page. This is us our assignment form", and it’s incredibly complicated. It’s like every time we add a new feature for our teachers, like a new type of quiz they can do, we have to modify that thing. So this is like our most heavily maintained page. Before we started using Elm, it was in React, and it was really difficult to maintain. Tons of message components, like React components, following best practices to the best of our ability...

Today we wrote in Elm and we’ve had to maintain it a lot since then... Now it’s not scary; we’re just not afraid of it anymore. People are like, "Okay, cool, so how is that organized?" I’m like, "Really, really flat." We have a model that’s just a record with like 55 fields in it. I counted yesterday, that’s what it is right now. Then we have a message; that message has 40 different possibilities in it. You say numbers like that and someone’s like, "Obviously, you need to split that up. You’re doing something wrong." No, no, no... Distributing state just makes stuff harder to maintain. It just does. Distributed systems are not legendary for having good UX; actually, they have the exact opposite reputation.

\[00:39:41.04\] But the thing is, React is designed to do that. That’s how you’re supposed to do things in React. If you look at React homepage, they don’t say, "Your first render", they say, "Your first component." The word 'component' — I did this search, too. If you search Command+F for 'component' in the React docs, you get ten hits just in the sidebar. If you Command+F for 'component', you bring up the Elm guide and do the same thing, you get zero hits. Because it just doesn’t make sense in Elm. It’s the wrong way to go about doing things.

I can know from personal experience that we’ve had incredibly great success making things maintainable and scaling things, even that hardest parts of our app by just not doing that. But yet, people have this reflex that they feel like they need to do it, like if they don't do it, they’re doing something wrong; because in object-oriented programming, that’s what you’re supposed to do, but it’s not true in Elm.

I actually had a personal experience where I did this to myself. DreamWriter is this application that I built — it was my first intro to Elm. If you look at my contribution graph over time, it’s really, really high because I was just going nuts with it, and just having an amazing time building it for a very long time, until I got the idea into my head that I needed to reorganize in terms of "components", where each sidebar had its own state, and the notes had its own state... Basically, introduced distributed state. If you look at my contribution graph — and I did look at it recently, because I was curious about this — basically it just takes a nosedive after I did this, because I just made my own codebase no longer joyful to maintain. I just made it a lot worse by componentizing everything.

**Evan Czaplicki:** I want to emphasize something here, which is not that modularity is a bad idea, it’s just that modularity looks very different in an object-oriented language that doesn’t have types versus a functional language that has a module-system and a type-system. It provides certain affordances to you that let you write code in different ways. Richard is not at all saying, "Don’t care about code quality." It's just that doing something nice looks quite different in these languages.

**Richard Feldman:** Yes, that’s it, exactly.

**Jerod Santo:** What does modularity…? The end results sound amazing, but what you just described there sounds like, in certain ways, a big ball of mud. It’s like, "I've got 40 fields, and 55…" I can’t remember what the 55 was on, but lots of stuff in one place. What does modularity look like then in Elm and in a functional-type language?

**Richard Feldman:** To me, the metaphor that makes more sense is databases. So let’s say you have one database, and it’s got a bunch of tables inside, it’s got a bunch of rows, and then you’re like, "Okay, I have this one database and that’s cool, but what I really want is like 20 databases, and I’m going to have them all talk to each other." If you worked with databases before, you know that’s not going to be better. That’s actually going to be much, much worse. It’s actually going to be a way better experience maintaining that system if you just have one database. Two is worse than one, but like, whatever. Even though that means that one database is going to have more stuff in it. It’s kind of a question of like, "If all you’re dealing with is data, that’s the database’s job - it’s just to hold a bunch of data." It’s not a big bowl of mud, because what we’re talking about it just data.

So you asked what were the things that we have - we have a record with 55 models in. If you have an object 55 methods in it, that’s a ton of logic. But if you have a record, a record is an immutable value. It’s just a big bunch of data, like a large database. So maintaining that is actually easier than splitting it up into a bunch of small databases that all have to communicate between one another now. That’s what it feels like to me.

**Evan Czaplicki:** \[00:43:54.07\] I’m not sure if I have the same perspective as Richard on this. Knowing how their code turned out, it makes sense to me that it turned out well, but I think of modularity in a functional language in terms of... Instead of reusing state, we’re reusing functions. The way I write a program in Elm or similar languages is I start with a file and I essentially let it grow until I notice things that are used in many places or things that are sort of related concepts. I might create a type of data structure using a bunch of places, and maybe there are a couple helper functions around that data structure. So I’ll move that out to a module. That’s sort of the whole process of modularizing a codebase. I want to make this concrete... I’m not sure if I have a good example.

Someone recently asked, "I want to have a user that’s logged in or not. If they’re logged in, they definitely have a username, that’s not an empty string. How do I represent that kind of thing?" To me, the way you do that is you create a module that represents the data in a particular way, and presents only a small number of functions that let you manipulate it. You check that those functions are correct, any use of any combinations of those function will work out. And now to any user outside, they can use it however they want, and never mess things up. Essentially, you can never sneak into that module and mess with things.

This is a big difference between object-oriented and functional programming. That’s sort of unfair - it’s a big difference between having mutation and not. If I give you a value - let’s say it’s a very complicated record like Richard’s talking about - and I have this transformation that I know from A to B, the result is correct. Now add to that I do some mutation. Suddenly I’m having these effects that are very hard to track down and that makes things a lot more complicated. I wouldn’t frame it exactly like Richard’s database thing, but I would say when you have 20 components with their own individual state, you end up in a situation where you’re synchronizing state between all these different things. The right way to bundle things up is to create these strong abstractions around particular pieces of information. I know all these transitions are valid, none of these other ones are valid, so I can write a module that has that, and it can be used by everyone. That’s the kind of modularity that you’re looking for.

I think there’s often a pressure to try to draw those lines when they don’t necessarily exist. What Richard might be observing in the production setting is these fields actually are related to each other. There’s no way to draw a clean line where none of this stuff is dependent on the other stuff.

I don’t know enough about particulars, but hopefully that gives an idea.

In the end, I would argue that the ability to write modular code is just fundamentally better because of the lack of mutation. In a sense, I can have two independent components, and they can have no shared anything. But if I hand them a function, to both of them, that mutates the same state, suddenly they’re clashing with each other, even though they’re written separately and they have no overlapping code. You just can’t do that kind of thing with Elm in the first place. That’s probably the biggest source of… When you have a system that seems modular, but actually you have these weird action at a distance problems.

**Richard Feldman:** \[00:48:05.00\] One of the important things to note about this is that although we have on that page one large record with 55 fields in it, that’s just because that page is complicated; those are 55 individual data points that we need. The question then becomes, "How do you organize that?" Like Evan said, the idea in Elm is that the cheapest way to make things modular is with functions. So yeah, we have one record with 55 fields in it; guess how many functions we have? I don’t know, I haven’t counted, but it’s a lot.

We have tons and tons of functions working on that thing, and they’re not all just taking the entire model. They’re all saying, "Oh, this is a function that just deals with this, this, and this particular piece of data", so we just make them function arguments. And because the way that Elm encourages you to write your code, with lots of small functions that do the simplest things they can do, it ends up that the business logic of that page ends up being really simple. In large part it's really simple, because we don't have to do all this synchronization. We're just like, "Okay, we have this one central source of truth, and when we want to work on it, we can call a particular function that just does one particular thing, and we just give it whatever pieces of data off of that big database that it needs." And that’s it.

We could, instead... Like, say "Only these functions get to work on this subset of data, and we’re going to carve that off and make it its own small self-contained system." We could make things a lot worse on ourselves.

**Evan Czaplicki:** It may also be that we have an odd scenario. Or maybe a common scenario, but for the kind of things I write in Elm, it’s different. I've recently been working on a little Expando. So you know the console in the JavaScript developer tools, how you can open up arrays and see all of the things - I’m working on a version of that for Elm values, and that’s something where the Expando logic is in a module. When I want to show an expando I grab it from there, and there’s a certain interface that I use to mess with that kind of thing.

That’s a case where there’s a pretty obvious line, and they’re invariants about an expando I want to maintain, so by putting that in a module I can make all that happen. The ability to do this kind of modularity is totally there. I think what I would take from Richard’s scenario is when you have a language that’s really easy to test, and catches errors for you with the compiler as aggressively, you can have really big chunks of data, and it works pretty well.

**Jerod Santo:** Let me make an observation, and I think this will tee up the next part of our conversation around adoption. I’m looking at Elm from an outsider’s perspective, and Adam can attest that I'm very interested in it. In fact, this happens quite often on the Changelog, but I think I hung up that call with Richard, and I told Adam, "Oh, I gotta build something with this." And I never did. \[laughs\] Unfortunately, that happened as well. But just looking at the interest around Elm - because you guys have a lot of interest - I think the features are super-compelling. Zero runtime exceptions, the error messaging that are friendly — it's kind of famous for that - the semantic versioning that’s been forced on libraries... So many cool things about it, and so much interest in the community. I can’t think of another project — say I guess Elixir and Phoenix, that’s two Changelog episodes in the same calendar year, for instance. And people are really excited about it. And then we look at adoption; there’s a lot of different hurdles that you guys have to overcome to move people from interested, and, "It’s mysterious, and I would like to try it, but I’m not really sure how" and

Richard’s full-in... Like, "NoRedInk is full in on Elm, 37,000 lines of production code."

\[00:52:07.12\] Going from interest to there, what are the things in the way? I’m seeing a few different aspects of that. One is just the preconceived notions that a lot of us bring to Elm from object-oriented programming or this idea of components which many web developers, especially in the frontend, have either been thinking about or using for years. Unfamiliarity with functional programming in general, immutability, the general messaging, and some of the complicated things which you guys have been making less complicated.

I did look into signals for a moment. The part that confused me was, "How do I now interact with the outside world? How do I talk to the APIs? How do I deal with these different third-party things?" That’s where I believe signals, and now subscriptions, play in that realm, and that was an area that I was confused about Elm. And then you have this other thing, which is just a misconception. It seems like an all-in proposition, probably because it’s a language, it has its own tooling, and everything, and people think, "I have to have a greenfield project that makes a lot of sense in order to give Elm a real shot." I actually thought that, even after our initial show. Because I was waiting for an opportunity to try Elm, but I was thinking that I had to have… More of a situation with Ember; you have to have basically an ambitious web app that you haven’t written yet, and now you can try Ember. That’s what I thought with Elm, and you guys completely changed that -- or not changed it, but changed the misconception in my mind, with your recent post about sprinkling it in and just like, "You don’t have to go all-in, you can incrementally sprinkle Elm into your web applications." That’s a revelation - for me, at least - in terms of like, "Oh, I can give this a try in small ways, and see if I like it, or if it makes sense. I don’t have to necessarily dive all the way into the pool."

I want you guys to speak to that. We are up against our next break. So we’ll talk about what that means, how you can actually get started with that, and then we have a roundtable Q&A - just a bunch of questions for you all that we’ll ask to close out the show. So let’s take a break, and we’ll be right back.

**Break:** \[00:54:02.18\]

**Jerod Santo:** Alright, we are talking about Elm and one way that they are making it easier to adopt - or maybe it’s always been easy to adopt, we just didn’t realize this before. Evan recently wrote a post back in July called "How to Use Elm at Work." And the key of that post — tons of detail, we’ll link it up to the show notes, but you can gradually introduce Elm into your production applications at work. Guys, tell us the details of this.

**Evan Czaplicki:** I’d say this is similar to how we learn a lot of things in Elm. We just observed over time, "Oh, this is how it works," and then just share that as we learn. So this was definitely a case where whenever I talked to people that have a success story on Elm, it was, "We tried this little corner of our project, and that was nice. And then we started to grow that, and grow that, and grow that." Or, "We have this little page over here, and we thought we'd give it a try."

\[00:56:10.02\] I don’t know of any full rewrite or greenfield... I guess there’s some consultants who are able to do that, but typically when people are doing that, they already have built the expertise through this gradual process on other hobby projects or smaller projects that already exist.

So I think there’s this idea—I’m not sure where it comes from, maybe Richard will know better — but that it’s all Elm or no Elm. It’s always been true that the way of interacting with JavaScript has let you drop it in in this way. A big goal of "How to Use Elm at Work" was really just to tell people, "Hey, I know this used to come really late in our documentation, but check it out. This is how you embed it, and this is how you use it gradually." We had made an almost necessary presentation error. Talking to JavaScript happens through this idea of ports — so essentially you can send messages into Elm and send messages out to JavaScript, and all the communication happens through that. And pre-0.17, that needed signals, so essentially you needed a big conceptual framework to be able to use that. With 0.17 it became way, way easier to do that all within your Elm code. It still was at the end of the documentation, though. We really wanted to have a way for people to know that approach, and also have it be possible to present it very, very early on in the learning process.

**Jerod Santo:** Very cool. Anything to add to that, Richard?

**Richard Feldman:** Yeah… I’m just trying to ponder why it feels like what you’re "supposed to do" is wait for a big rewrite, and the answer to that is that it’s just a different language. You have a different compiler and conceptually, when you’re starting a project, you pick a language and that’s the language that the whole project uses. But the thing is Elm interoperates with JavaScript and it’s totally fine, and in fact, it’s totally great to have Elm side by side with JavaScript. If you think about it, when you’re writing your Elm code you end up talking to JavaScript anyway, because as previously noted, there’s an enormous ecosystem of JavaScript out there, and you don’t want to just ignore all that, you want to use it.

**Evan Czaplicki:** But I’ll add though, to counter this theory, that a lot of the languages we had that did become big, became big through use with the language they were sort of edging out. When you have C++ becoming popular, it’s totally backwards compatible, so you’ll have these large codebases that are part one, part the other. A lot of languages take this route, and I guess you have the micro-architecture theories of how to gradually introduce languages gradually in the backend, but I just don’t know a story of totally replacing with a language. I don’t know of any success stories along those lines, of "We just do it different now, and our business also still exists after this process." \[laughter\]

**Richard Feldman:** Yeah, that’s a good point to frame it that way, because that’s what lead us to do it this way, the incremental approach. It’s a question of risk. If you do it all or nothing, you’re taking an enormous risk. What if you don’t like it? What if you try it and then your team is like, "Eh, no, we actually prefer it the other way." Why would you ever do that?

**Evan Czaplicki:** \[00:59:57.07\] Yeah, that’s something that from my perspective... If folks try out Elm and they’re like, "No, it’s not for me", my response is one, I want to know what they ran into, and see if I can make it better, and two, I’m not going to push it on them if it’s not the right tool for the job. I think it’s great, but there might be some scenario... A big thing for me is Elm isn’t interesting unless it’s the best tool for the job, and it’s my goal to do that. If it’s not right for your case, or… There are a lot of things to consider here, so it’s easy to think it’s just a technical problem. You have this code, and we want that code.

What I’ve noticed is that it’s almost entirely a social… All the challenges are social. You have a team - they all have different backgrounds, they all have different perspectives on what it means to write good code, what is fun, what their role is on that team, what their expertise… What it means for everyone else. A lot of what it means to start using a new language or a new technology is to bring the whole team along.

One thing that’s been great for Elm is to have the JavaScript ecosystem start to edge towards ideas that show up in Elm. As React goes more towards components with outside effects, or immutability, or projects like Flow and TypeScript, or introducing people to type-systems... You’re working on the social problem that we face in a very direct way. Suddenly the distance between a team and using Elm conceptually is much less. I’d say that’s where a lot of the tough problem is when you’re thinking of using a new technology.

**Jerod Santo:** That actually leads into one of my random questions, and answers it to a certain degree, but I’ll state it back anyways. You mentioned how React community is moving more towards some of Elm’s ideas. Dan Abramov, the fellow who created Redux, we’ve had him on the show, and he shamelessly — he credits you, but he shamelessly said that he just basically took Elm’s dataflow, style, and architecture and he almost considers it a port to his Redux library.

**Evan Czaplicki:** Yeah.

**Richard Feldman:** There’s also the library Choo which is just an overt port. It's like, "Hey, we’re talking Elm architecture and bringing it to JavaScript."

**Adam Stacoviak:** In addition to that, we’re also seeing people imitate Elm’s famously good error message, saying "Man, we can do some of that stuff over here. We can write great error messages." So the question was going to be, "How do you feel about all these people stealing your awesome ideas?" It sounds like you like it.

**Evan Czaplicki:** Well, it’s been an emotional journey. \[laughter\] There are times when I would get frustrated about this kind of thing. It never bothers me when it’s properly cited, right? If someone says, "Hey, I saw this thing in Elm. It was inspiring, and I did this." That’s awesome, I love that. But there are cases where something just comes out, and you’re like, "I did that, and I presented it like that, and I talked about it like that", and you don’t get a good citation on that - that really bothered me. I’ve gotten over it just because it’s silly to be upset about it, because it’s still really positive for Elm, even if no one knows that there’s any direct inspiration; even if there’s not. So when React comes out, they’re coming with this, "What if your views work in this particular way?" and it looks quite similar, but it’s a case of co-invention, as far as I can tell. We just came to a similar conclusion, working from similar premises. And no matter what, that helps us out. The fundamental wager is, "I’m going to try to do a really good job; if it’s great, then we’re going to come out good from all of this exploration and effort to figure out how to do this well."

**Jerod Santo:** \[01:04:13.15\] Yeah, ultimately I think the cross-pollination of ideas is just better for everybody overall. So a follow-up question to that: who are you watching and learning from? Whose ideas might you steal and bring back to Elm?

**Evan Czaplicki:** I’ll keep an eye on other type-functional languages. Often, things are a little too crazily abstract there to really be super useful. A lot of the stuff I’m working on these days are tooling stuff.

One of the things that people -- preconception they have about functional programming is, "Those people don’t care about tools. They don’t care about testing. They're just like "Oh, well, if it compiles - neat!’ I find those excuses not actual good arguments. A lot of the things I'm focusing are… Given that Elm has a design that’s very structured and lets you do interesting analyses, and given that the tooling can be written however we want -- like, how can we make tools that are delightful in ways that have never been seen before?

You mentioned earlier our package ecosystem; every package that’s published, we have a semantic versioning automatically enforced based on API. So we know if there’s a breaking change or minor change in your API. So there aren’t any libraries in the ecosystem to break that rule.

I’m really focused on, "How can I find opportunities in debugging?" Richard’s thinking about testing, where we can bring these ideas in a way that’s never been seen in a typed-functional language before, just because they’ve been thinking about other things.

**Richard Feldman:** We actually just came out with a new version of Elm Test, which is Elm’s unit testing library, and basically what we’ve done is we made… I don’t know if you’re familiar with it; - it goes by a lot of names, but there’s property-based test, or generative testing, or fuzz testing, which we like because it’s fun. But it’s the idea that you write your test once, and then the test runner just runs for you like one hundred times with different randomly generated inputs. So you get a much wider coverage of corner cases, without having to write all of those corner cases yourself.

**Evan Czaplicki:** I guess, to answer your questions more directly, when working on a particular problem like this, I’m not picky about what I look into. A long time ago, I remember, I had to pick the format of the documentation comments. It’d be easy to look at similar languages, but those languages haven’t really been used in big, enterprise codebases, so I really focus on what a Python document comments looks like, and what a Java document comments looks like. Just like those languages, whatever you think about them, good or bad, do that really well, and so what can we learn from that? I think there’s definitely just a focus on a particular problem, and then asking, "What’s ever been done on this?" and "What can we learn from what people have done before?"

**Richard Feldman:** Another answer to your question earlier about what are we looking at - Erlang and Elixir come immediately to mind.

**Jerod Santo:** Wow. Adam, that tees you up?

**Adam Stacoviak:** Yeah, actually I've been quiet here most of the time listening to you guys dig deep into quite a bit of stuff here, but we’re obviously building the next version of the Changelog on Elixir and Phoenix. Chris was on a most recent show, \#208, he talked about this harmony between Elixir and obviously Phoenix -- specifically Phoenix... But this kind of harmony between Elm and Phoenix. What do you guys have to say about that?

**Evan Czaplicki:** \[01:08:03.19\] One thing that I’ve been slowly working on… Elm has, in the core library, a module called Process that lets you spawn these processes that will run independently, and if one of them blocks, we can swap over to another one, and do work over there. It’s still quite an immature API, but it’s the building blocks of what every Elm program is built on behind-the-scenes. I think over the next couple of years, we’ll be fleshing that out more and more. My original thesis work was focused on concurrency in particular, so this has always been an interest of mine. Over time, I’ve become really enamored with how they did the fundamental API in Erlang, so I’m trying to see how we can work nicely with that, to have a concurrency model that’s really excellent. It’s unclear where that will go, but that's some thoughts.

**Adam Stacoviak:** Some other questions we have towards the end here is... It’s not really a FAQ, it’s more like disbelief. We've covered it a little bit earlier in the show, but just no production errors - I’m just wondering how. One of the goals that’s stated in a recent blog post from you, Evan, it says, "One of Elm’s goals is to change our relationship with compilers. Compilers should be assistance, not adversaries." Jerod mentioned earlier you’re famous for your polite and helpful error messages or compiler error messages, but you also say compilers should not just detect bugs, but they should also help you understand why there is a bug. Can you talk about why this is such an important piece to Elm?

**Evan Czaplicki:** Yeah. That kind of came about by accident, that we have these really nice error messages. But it’s always been a big weakness of typed-functional languages. The story used to be, "You have an error message, it doesn’t make any sense, but after a couple of years you get it, and it’s really nice." That’s not good enough, right? If we want to be competitive with these other languages and frameworks and stuff, we can’t have a three-year learning curve.

**Adam Stacoviak:** For NoRedInk to say that they have zero… What was it again, Richard? Zero errors in production? What exactly did you say earlier?

**Richard Feldman:** Yeah, zero runtime exceptions. Basically, the way that we know that is because we use Rollbar to track runtime exceptions in general, because our JavaScript code still throws them all the time. But specifically, to be very explicit about this, every single Rollbar error we’ve seen in the past, ever since we’ve introduced Elm, the fix has always been in 100% of the cases not changing any Elm code. It’s always changing JavaScript, even sometimes server-side code. The answer is never "Elm did something that we didn’t expect to the degree that it crashed." It’s just that good at finding stuff.

**Evan Czaplicki:** It’s a mistake to credit me with this; the ability to find this class of errors this way and rule them out entirely; it goes back to the ‘70s. There’ve been languages that have these kinds of properties for decades, but you get a communication problem around it. Often when people are trying to present this, they'll say things like, "If you can have a type-safe program and it's a sound type system, and you get these properties, and these properties are really nice." Essentially, what we realized is you can just say, "These programs don’t get runtime errors." That’s the summary of all the theory that people have been working on for decades. So we took that core idea, and that’s just a part of Elm. The thing that I’ve done differently than other languages in this realm is really focus on the reporting quality.

\[01:12:26.25\] The big realization wasn’t, "We have to do it a totally different way." It was "If you put in engineering time, you can make really big improvements, and get very specific error messages." I think it’s just part of my writing style, that I like it to be fun and friendly. So if you mess up sometimes, I’ll give you a little trouble about it… I had this idea about -- oh man, I forget the exact scenario. I wanted to have an "I told you so!" if you ignored compiler advice from other times.

**Adam Stacoviak:** That’s so funny. \[laughter\]

**Evan Czaplicki:** But then if you hadn’t seen advice the first time, it didn’t end up making it. \[laughter\] Having this kind of fun relationship with the compiler is just… It’s just fun for me to work on. I recently did some improvements of the error messages for this upcoming release, and it’s just really delightful.

We have a thing called error message catalog where if you ever see an error message from Elm that you think could be clearer, you report it there. Periodically we’ll go through and group them all, and see how we can fix a big swath. I just went through and it took a couple days. You can make these really nice improvements, and you see the person learning Elm who’s just not going to have these problems anymore. I don’t know, that’s really, really fun to me.

**Richard Feldman:** I totally get what you’re saying about not wanting to take credit for the work that so many other people have done, but I think you can legitimately take credit for your relentless focus on user experience. Very few other languages take that as seriously, I think, as you do. For me, that’s made all the difference. Those other languages have all been around, and I’ve gotten interested in them over the years. I’ve been programming since I was nine and I have never latched onto anything like I’ve latched onto Elm, and just had this much fun with it. I think the reason for that is exactly that - it’s delightful. It’s not that it’s just reliable; I know that there are tools out there that can make my code more reliable, but reliable and delightful? That’s a very different thing. I think that’s commendable.

**Evan Czaplicki:** Before we had nice error messages, there was a time it was bad, not even okay. At that time I was thinking, "What should the model of Elm be?" I wanted to make web development pleasant because I felt like it would be too far to say 'delightful'. You know how you’re riding a train, and it’s just fine? That would be amazing if we could get to that level. \[laughs\] So yeah, that definitely has been a sort of, "How can we make this fun?" Something you’re proud to have.

**Adam Stacoviak:** I like the idea of having a smart compiler, though. You think of your compilers as real-time directing you, knowing what to do, basically. To have this learning aspect to it, to educate you over time, like, "You hit this error or this compiler bug several times. You keep making this mistake." Or like, "Hey, I told you so." I think it’s just an interesting way to turn it into that non-adversary and more assistant role, like you mentioned, you know?

**Evan Czaplicki:** \[01:16:02.05\] Yeah, I was joking about this with my mom at some point. I was like, if we get the same error ten times, maybe the compiler could be like, "Don’t you get it?!" \[laughs\]

**Jerod Santo:** I was going to submit the Jurassic Park error message for you guys to add to your list. "Ah, ah, ah! You didn’t say the magic word!"

**Evan Czaplicki:** Oh yes. I've actually been thinking about how to make these error messages more interactive. We have a certain class of error messages. We don’t know where this term is, maybe you meant one of these other ones, maybe there was a misspelling... In theory, we can just do these suggestions and let you pick one really easily, like you click a button, or something. I’m very interested in seeing how far we can go with that in that direction. And once the compiler exposes more ability to know information about the program, your editor can start doing interesting things. Instead of just suggesting names that we know exist, we actually can know the type of argument that you need, and then we can know all the values that have that type, so we can start giving suggestions based on that. I think there’s a lot of cool stuff we can do there, but in time.

**Adam Stacoviak:** It’s going to be tough too, to imagine - what you can do and what you should do is two different things, right? What you can do is make the compiler more of an assistant and more fun, but what should you do? You talked earlier about the roadblocks to adoption, and the various things you have to deal with. We cover that in the show, but is that the perfect place to say it? That might actually tee up... The next mention for you guys is ElmConf. You might actually be able to learn about some future things happening, not just on the show, but to cover things that we’ve covered here, but at this conference. What’s happening at ElmConf? When is this conference?

**Richard Feldman:** September 15th. It’s right before Strange Loop at St. Louis, which is one of my absolute all-time favorite conferences, quite possibly my favorite all-time conferences.

**Adam Stacoviak:** I bet.

**Richard Feldman:** I’m super excited that ElmConf is co-hosted with Strange Loop. It was very generous of them to get us under its wing, as it were.

**Adam Stacoviak:** Is there a particular affinity from the folks behind Strange Loop to ElmConf?

**Richard Feldman:** Oh, yeah!

**Adam Stacoviak:** Yeah? How did that happen?

**Richard Feldman:** Well, basically the guys who decided they were going to organize it, Brian Hicks and Joseph Hager; they live in St. Louis with Alex Miller, who runs Strange Loop. I guess at some point they... I haven’t talked to them about what the exact story was, but my guess would be that they were asking Alex for conference advice, and he probably offered to be like, "Why don’t you do it with Strange Loop? Let’s just make it happen."

From what I understand, he’s been this behind-the-scenes, incredibly helpful in so many different ways to making the conference happen. Basically, because he wants it to exist. I could not be more grateful, because Alex is an awesome guy, and he does a great job with Strange Loop. I’m not a Clojure person so I haven’t been to his Clojure conferences, but I just assumed based on the quality of the other stuff that he’s done that they’re awesome, too.

**Evan Czaplicki:** There’s actually a funny connection, which is the first talk I ever did I believe was at Emerging Languages Camp, which was the day before Strange Loop, a couple years ago. I think that’s the first time I talked about Elm in public, giving a talk. So the Emerging Languages Camp—ElmConf is in the same spot as that one.

\[01:20:05.02\] Interestingly, I believe Jose Valim of Elixir was at that Emerging Languages Camp, as well. There’s been a lot of support for languages in Elm’s age group. Strange Loop’s a conference that’s really open to new approaches or different perspectives, and has been I think, really supportive of these communities.

**Jerod Santo:** So share the details on ElmConf. Is there a CFP? Are there tickets available? What are the details there?

**Richard Feldman:** Oh, yeah! Tickets are on sale, and you’re running out of time to get them, because it’s September 15th.

**Adam Stacoviak:** The URL for that is elf-conf.us.

**Richard Feldman:** Yup.

**Evan Czaplicki:** Yeah, so I’m pretty excited to meet everyone. We got some speakers from all over, who have different angles on they’re using Elm; maybe that’s for production cases, maybe that’s for hobby projects, for art projects... I think it’s going to be a really fun set of talks. I’m working on having something cool to show for first.

**Richard Feldman:** I’m excited about that. \[laughter\]

**Evan Czaplicki:** Well, yeah. The thing I’m most excited about though is to get to meet everybody who comes out, and hear what they’re working on, what things are working for them, what things can be better, and just get to meet everyone in the community. That’s been one of the things, the most valuable kind of feedback, but also just really fun to… I love it when someone surprises you with a thing you didn’t know Elm could do. I had someone show me this 3D concentration game with particle simulations, and I was like, "I’m pretty sure Elm can’t do that." Somehow, this person had figured it out. It’s just really cool to start to see what people are up to and how I can help.

**Jerod Santo:** Nice.

**Richard Feldman:** it’s also exciting... Something I’ve already experienced on the Slack, and I’m looking forward to seeing in person is just how many people are using Elm in production at work, and we have no idea. Like I was posting on Slack, "We have 36,000 lines of production of code" and some other guy was like, "We have 15,000." I was like, "Who are you? I’ve never heard of you."

**Evan Czaplicki:** I’ve heard of this happening… There’s a phase of growth in languages where at first, everyone’s talking about it, and they’re like, "Oh, this is amazing." Then there’s a phase where everyone thinks of it as their competitive advantage, and no one’s talking about it. Then of a sudden you're like, "Holy crap, there’s tons of companies using this language!" I’ve heard this story for other languages, where all of a sudden they’re just like, "Oh, what?"

**Adam Stacoviak:** This is the first ElmConf, right? This is the first time for you to basically meet face-to-face, aside from meetups and, Richard, you doing courses and doing some teaching. This is the first time you’re going to get face-to-face with some larger known people that are using it, like Jessica Kerr, and others in that list of speakers, to share some interesting things about it, but also get to meet general users that you didn’t know had 15,000 lines of code in Elm. That’s kind of interesting.

**Richard Feldman:** I’m a little worried we’re going to find out that we’re not the biggest anymore. \[laughs\]

**Jerod Santo:** Uh-oh.

**Richard Feldman:** Someday we’re going to talk to somebody, and they’re going to be like, "Oh, we have more than you do." \[laugh\] I’m going to be like, "Aw man, \[unintelligible 01:23:49.05\]." We still have Evan. If you come to work at NoRedInk, you get to work with Evan. We still got that.

**Adam Stacoviak:** \[01:23:56.24\] There you go. Yeah, of course, that's always good. Lines of code isn't a good judge, anyway. That’s probably a good place to close things down for this show. I know that we have had our eyes set on the next wave of changes from Elm, and have you guys back to talk through some different things. I think we’ve covered quite a bit in today’s show. Is there anything, any last rock unturned that you want to mention, besides ElmConf, and to go?

**Richard Feldman:** I want to make a shameless plug for my book, Elm in Action. Chapter three just came out, it’s available for early access. Manning Publications, check it out.

**Adam Stacoviak:** Nice. We’ll make sure we put a link in the show notes for that, to Manning’s site. Is that set up for MEAP, is that what it is? Where you can actually read it in line with you writing it?

**Richard Feldman:** Exactly.

**Adam Stacoviak:** Nice. That’s good.

**Evan Czaplicki:** Yeah. And I’ve been doing reviewing, and I like it a lot. Often I’ll be like, "Oh, that’s such a good way to present this."

**Adam Stacoviak:** That’s cool.

**Evan Czaplicki:** I guess, if I have any advice, if you’re curious about what’s going on with Elm, I’d say just give it a try. Worst-case scenario you’ll be like, "Eh. I don’t like it." \[laughs\] But I think a lot of times folks end up learning stuff; even if they don’t end up using it ultimately, that it’s is helpful in whatever they go back to. Immersing yourself in this set of tools that help you think in a different way is going to help you grow as a programmer. I wouldn’t say "Do it because it’s the bomb", but just do it because it’s fun.

**Adam Stacoviak:** Yeah. On the note of trying too, if you go to Elm-lang.org - for all those listeners going there right now, there’s actually a Try or Install, in marketing terms, a CTA, a call-to-action. You can try or install it. If you click on Try, it takes you to Elm-lang.org/try, where you can actually go through Hello World!, buttons, clocks, drag-and-drop, and tons of other examples. I was bummed not see the centering example, since that was the impetus of Elm in the first place. I think that should be one of the examples there, centering something, at least to prove that you can actually do it an easy way. This is a great place to go. If you’re listening, go there. Actually /examples has a ton of examples there as well, everything from effects to even types, recursion... A bunch of stuff that’s available to dig through and see how it actually lays out, and play with it.

Let’s leave it there, fellas. Thank you so much for taking the time to come back and share so much of this journey with our listeners and what you’re doing with Elm, obviously the conference, the book coming out, and all that you guys do at RedInk —NoRedInk… I said that last time in that little short… RedInk. It’s NoRedInk, my bad.

**Richard Feldman:** Happens all the time.

**Adam Stacoviak:** I’m sure it does, I’m sorry about that. Let’s leave it there, and again, thank you for coming on. Listeners, thank you so much for tuning in, and let’s say goodbye.

**Jerod Santo:** Thanks guys, bye.

**Evan Czaplicki:** Bye.

**Richard Feldman:** Bye.

**Evan Czaplicki:** Thanks for having us.
