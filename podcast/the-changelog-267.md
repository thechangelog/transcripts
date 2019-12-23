**Jerod Santo:** So Eric, functional programming is not a new idea; in fact, Lisps go back to like the 1950s or 1960s, but definitely something that's in vogue in a conversation that's being had from developers around the world, functional versus object-oriented versus some other thing... Kick us off with a little bit of what you know about functional programming writ-large; we'll obviously focus a little bit in on Clojure, because that's your bag of tricks, but let's talk about functional first. Can you give us a little bit of the background and the state of the world?

**Eric Normand:** Yeah, so functional programming - it has a long history, like you said, beginning with Lisp. There was a paper in 1958 where John McCarthy described the language, and the challenge that they faced at that time was "How do we actually write papers about programming and ideas in programming? Do we just do it all in Assembly? Which machines Assembly do we use?" (there was no standard back then) and he proposed a language that was much higher level than Assembly that you could easily implement on any machine, and then say "Well, this will be a good language for talking about programming, and describing algorithms and things like that." He never thought it would be a real language that you would actually run on a computer, but his grad students did and they implemented it, and it just ran from there in the lab because it proved to be so useful.

This was also at the same time as Fortran was being developed. Fortran was the first non-Assembly-level programming language, but what's interesting is that Lisp was done by a team of grad students in university at MIT, and Fortran was like a multi-billion dollar project... So it always had this bootstrapping route. Anyway, that's a little bit about Lisp.

\[00:03:50.28\] Functional programming has sort of evolved over time to be this paradigm that uses functions, that uses Lambda calculus... It grew mostly in Academia because of its roots in math, roots that go back to Lambda calculus and theorem proving, stuff like that. And recently it's gotten a lot of attention in the industry; no one really knows why... I've tried to figure out if there's some event or something like that, but what I can see is that big names in the industry have been warning people about functional programming - we need it, and it's better than object-oriented for some things like concurrency, for parallel programming...

I actually want to take a very simplifying view of why it's increasing in popularity. I think the size of the industry, the number of programmers is just growing by itself, it's doubling every five years, so what we're seeing is that small portion of people who were always into functional programming are growing, and because of the internet they can connect no matter where they are in the world, so now we're hearing about it. It's just the network effect.

So the 5% of the industry that cares about functional programming - I'm just throwing that number out there, I just want a small number - is now a sizeable absolute number of programmers. And coupled with the fact that most software now, it doesn't matter what language it's written in, because it's running on a server in the cloud somewhere, and it's not running on somebody's machine; that was a big obstacle back in the day, to like what languages you could actually write software in... I think that it's just an opportunistic thing, just being able to run everything you want.

**Jerod Santo:** One of the reasons that I heard maybe three, four, five years ago of people kind of prognosticating why functional programming as a paradigm is necessary now or is going to take off was because of - you mentioned it's lent itself well to parallelization, and we had Moore's law breaking down, and we had this statement that we are going to now go sideways and have all these cores, so you need to be able to parallelize across those cores... And I think so far in practice -- I mean, I just bought a brand new laptop this year and I think I have four cores, or maybe eight, but it's been like two cores, four cores, eight cores (I'm talking PC-grade hardware, not server stuff) for a while now... So what do you think, has that just not happened yet, still going to happen, or people were off on the whole parallelization of cores?

**Eric Normand:** The background on that is that they can't make transistors smaller anymore; it's reaching fundamental physical limits of how many electrons you need to push through the transistor versus the amount of heat it's making and the leakage to other transistors next to it, so there's what's called "the right-hand turn" on the curve; the curve was like this exponential curve -- this is Moore's law curve... How many transistors we can fit? The cost of transistors is like doubling every 18 months... So they started just spreading out and just making more cores, that were essentially identical processors that shared memory.

\[00:07:55.16\] Yeah, so there was this idea that now there's no free lunch; you can't just wait 18 months and your software is twice as fast... So what are we gonna do? We actually need to use all of our cores in our software. I think about ten years ago that was a pretty good argument, that's what it looked like was gonna happen. Cores started coming out - you had two cores, and then really soon after that four cores... That was ten years ago, and I think the Mac Pro (the all-in-one one) has like 16. So we haven't really had that doubling every 18 months.

I was promised thousands of cores. I remember people saying "You're gonna have it in your laptop, thousands of cores."

**Adam Stacoviak:** \[laughs\] That sounds so crazy.

**Eric Normand:** Yeah, and you would think "Oh man, my software can't parallelize that much. What am I gonna do? I'd better learn a language that lets me do that", but it just has not panned out for probably a number of reasons. I think the biggest reason is that for software that you have to run on your computer, there's so many programs running anyway; your operating system can handle the amount of parallelization you need. What I mean by that is like I have a Slack window open, I have tabs open, the tabs are each in a different process... So the operating system process - it can soak up a lot of the cores that you've got; you don't need a single OS process that can do parallelization so well right now. That said, I think that it is the only way to grow, really.

**Jerod Santo:** Yeah, it's future-proof in the sense that we can go that direction. Another reason why I think it's at least delayed is because of consumer demand with regard to what kind of features we want in our machines. Most laptops are fast enough already for most people. We want some battery life up in here, right?

**Eric Normand:** Yeah, exactly.

**Jerod Santo:** And the manufacturers, the Intels of the world, the AMDs - they've started to focus on power efficiency more so... Maybe because that's where they can get big wins; I don't know, not my area of expertise, but I think that's delayed our demand. We're not demanding faster computers, nor demanding smaller computers; we're demanding higher efficiency computers.

**Adam Stacoviak:** Well, it depends on the kind of person you're speaking about, though. Because of the proliferation that he was talking about of the internet, we've got a wide chasm of user types. You've got some people who simply use mobile type devices (iPhones, Android phones) tablets that only really consume -- there's some creation in there in terms of like images or user-generated content kind of creation, but our type of creation is software creation. I wouldn't dare say true creation, but it's a different of like what you need to create; so our difference are way different than their differences, or their desires or needs, so maybe the...

**Eric Normand:** We're in a minority, and there's just not enough volume to justify designing a whole 10/24 core machine just for programmers...

**Jerod Santo:** Right.

**Adam Stacoviak:** ...which is what the Mac Pro was, which was what you were talking about - it's for the extreme video editors, the extreme audio editors; maybe they're even doing data science type stuff that need 12 cores to spread those processes across... But you also need software that actually utilizes those cores. The hardest part about buying that machine is like "Do I actually have software that uses 12 cores?"

**Eric Normand:** Exactly.

**Adam Stacoviak:** And in most people's cases it's no.

**Eric Normand:** Exactly, and then there's another aspect to it, which is... I mean, I hate bringing up this example, but I think it's so important - some of the biggest, most scalable websites in the world are built on PHP, which is a single thread per request; the concurrency model is simply one request has its own memory, you do whatever you want, and then it's just blown away by the operating system when it's done. And that works. Like, do we need to have one process that can handle the concurrency and all the problems that that comes with?

\[00:12:21.27\] So even on the server you don't have that thing. Now we have these virtualized things where if you need to scale, you scale horizontally. The servers themselves might have many cores, but then they're running 20 VMs on them, and so each of those is taking up its separate core. We've worked around that problem in so many ways that I don't think we've had an opportunity for functional programming to have a real need, like a real pressing "this is our future" kind of need.

**Jerod Santo:** With that being said, you're building a business around teaching people functional programming; you're obviously big into it... \[laughter\]

**Adam Stacoviak:** Whoops!

**Jerod Santo:** You're doing it all wrong here, you're not selling it the way you need to. \[laughter\] We appreciate the honesty there... If that promise is being worked around in other ways, and we're seeing it even with clustering and all these other cloud infrastructures scaling out horizontally... There are pros and cons to programming paradigms, and functional programming is something you've been doing for a long time and you are out there teaching people the gospel of that piece, so what is the benefits then if it is not just mere parallelization?

**Eric Normand:** So the summary of my answer - I know this is like a programming interview talk show, so it will get longer, but the summary is that when we're programming, especially when we choose a paradigm, like object-oriented, and we start to approach problems, if all we have is one paradigm, one perspective to solve that problem with, we're going to be limited in what we can actually do. We could paint ourselves into corners and things, which we often do when we only have one solution, one way of solving a problem... So to me, functional programming is a way to break out of that by just approaching a problem from a totally different perspective. It's to get out of your local maximum, get to a higher hill where you can combine different paradigms.

I went to college, started in the '90s, and then the hype cycle for object-oriented programming was crazy.

**Jerod Santo:** Peak.

**Eric Normand:** Yeah, it was at peak hype. It was a panacea, it was going to solve the software crisis, the reuse, maintenance... And it just hasn't. And in no fault of the paradigm; people were just over-selling it, and I don't wanna do that for functional programming. When I look at my code, I see the influence of procedural, functional, object-oriented all throughout my code, and they were all useful in the same block of code. So I don't think I would wanna sell functional over any of the other paradigms.

**Jerod Santo:** I like that. The idea is not to pick the better hammer, it's to have multiple tools in your box, and being able to wield them when it makes the most sense, and knowing the differences also.

**Adam Stacoviak:** It makes sense thinking about it in the light too of the OS show we just had, Jerod, because he said we're not paid to write code, we're paid to think. The code is an artifact of the process of thinking, so if you only have one perspective for which to think from, then you're limited in your ability to solve the problem.

**Jerod Santo:** Absolutely.

**Eric Normand:** \[00:16:08.21\] That's right. And I like to look at the paradigms in terms of -- you know, a lot of people look at them like a list of features, like "Object-oriented is message passing with encapsulation", or "Procedural is subroutines..." Functional would be like "First-class functions, immutable data", that kind of thing. I think that's a useful perspective; you know, like a perspective about a perspective. It's useful to see the paradigms that way, sort of like a naturalist, you know? Like "Well, the red-breasted robin has red feathers on the breast...", so it's useful to be able to identify like "Oh, this language is object-oriented, because look, it has classes and methods...", but I am starting to really develop more of a notion of them as holistic approaches to problem-solving.

This is still being developed; I don't wanna say "This is it, this is THE idea, it's the end-all", and I would love to discuss this with you, I'd love your input on this... So I see procedural as a very valuable paradigm, because so many ways that we approach a problem are step-by-step. You have a certain number of operations that you're allowed to do and you just compose them in sequence, and you can build up solutions and sub-problems you can solve with subroutines, and stuff. So it's kind of like, with procedural, the features are very much in line with the sort of abstraction that you're trying to build, right? It makes it easy to confuse the two, the features with the thinking process.

And then object-oriented is all about objects that pass messages to each other. So how do you build this network of little computers that talk to each other to solve the problem? Which to me is like very unintuitive, because that's not how I perceive the world, right? As like communicating objects? No. Like, I'm the one solving the problem; it's not like these two things are passing messages to each other to solve it for me... But I still like it as a paradigm.

And then the functional - to me, functional is all about identifying the data that you need, the calculations on that data that you need, and the effects (often called side-effects), the things that aren't pure calculation; they are like sending a message, sending an email, outputting something to the screen... And when you break the problem down into those three pieces, you can start to compose them together and get a solution out of that.

**Jerod Santo:** I like thinking about it like that. I think something about when you look at a list of features, or your naturalist, observationalist way that you're mentioning - which we tend to do... "Let's compare two things. Well, let's list the pros and cons of the one on the left and the pros and cons of the other on the right", and just thinking about that in light of procedural programming, which is very frowned upon because it's the simplistic, less featureful, old-school way we used to do things... But what you said there resonates with me, because a lot of what we do is literally like procedures.

When the procedure is known, you're breaking it down into subroutines, sub-procedures that are manageable sizes, but it's like the perfect solution for a job of a list of known procedures, right?

**Eric Normand:** \[00:20:16.07\] Exactly. You know the steps to solve it, just write them down.

**Jerod Santo:** Right, and it's actually one of the most satisfying things you can do, because it's like - I don't know, it's just very straightforward and accomplishable. You know, we denigrated it a little bit by calling those scripts, like "Oh, it's just a script." Anyways, point being is thinking about them holistically means that you recognize when procedural is actually a perfectly fine paradigm for a problem that you need solving.

**Eric Normand:** Exactly, exactly. And when you think about it, if you're doing object-oriented programming very often inside of a method, it's just a list of steps that you need to take. It's very procedural.

Like I said before, I find myself going through my code, like "How did I do this? Oh, actually I was thinking of it as a series of steps. Oh, this one is where I was like oh, these are objects that need to talk to each other, or at least the main thread is talking to this other object, it's doing something else on the side and I'm just passing it messages." I'm thinking of it in terms of these paradigms, and then sometimes I'm separating out the data and figuring out what my calculations are and where my effects are gonna happen... So I hope to get this more formalized and publish a really nice blog post about this, because I feel like this is something that has been argued about for so long, like "What is object-oriented programming?" and really the key insight that I think is valuable is to remove the features from it and put the features in their place, like "Well, of course in object-oriented programming you're gonna see a way to define the object's behavior", the data and behavior and that's the class; it's just an artifact of how that language happens to let you express what an object does. But there's other types of object-oriented programs besides class-based; there's prototype-based, there's actor-based like in Erlang...

If you remove the features and say those are just incidental, those are things that have been built up over time as useful ways of doing that kind of thinking, or expressing that kind of thinking, then you just look at it as an approach, as like a holistic perspective.

**Jerod Santo:** Let's look at some functional languages. First let me just say, for a guy who runs a website called PurelyFunctional.tv, it sounds like you're not quite as a purist as perhaps one might assume, because you're saying multi-paradigm approaches are good, right? But you're not saying functional only.

**Eric Normand:** Right, I'm not.

**Adam Stacoviak:** It should be called MostlyFunctional.tv.

**Jerod Santo:** It's a good play on words.

**Eric Normand:** KindaFunctional.tv... \[laughter\]

**Jerod Santo:** Exactly, that's my point, the purity is being lost, but... I agree with you with regard to multi-paradigm usage as a good thing. Let's list some languages out there in the wild - so you said Lisp, you mentioned Fortran previously as a procedural language... What are some that have both, that are out there, that people would recognize? Beyond JavaScript, which maybe people don't realize that JavaScript has functional aspects to it, and prototype-based object orientation as well, and kind of has a little bit of everything into it... But what are some other ones that people can kind of look at latch onto and say "Oh, okay, that's what multi-paradigm is."

**Eric Normand:** \[00:24:05.19\] Multi-paradigm languages... So often you'll see something like Python - Python is kind of just basic procedural, but then they added classes to it. There's also a little bit of features from functional programming; you can have lambda statements, and stuff.

So I kind of object to the question, because...

**Jerod Santo:** \[laughs\] Okay...

**Eric Normand:** Because it's kind of going back to the features and not the thinking. Like you said before, thinking is the job of the programmer, and writing down the...

**Jerod Santo:** Well, I was more thinking of like not feature lists, but languages that represent these paradigms.

**Eric Normand:** Languages which represent the multi-paradigm paradigm, which are sort of friendly to all...?

**Jerod Santo:** Yeah, exactly. You mentioned Erlang. So Erlang is a message-passing language.

**Eric Normand:** Right. People say it's the most object-oriented language ever because it's all about message passing; the processes have a little bit of state in them... But then the interesting thing is that it's very functional, too.

**Jerod Santo:** Exactly, so that's a good example that I'm looking at.

**Eric Normand:** Okay, right. Okay, that's good. \[laughter\] And then it's also procedural, because when you're passing messages you have to sequence the messages, and so you're thinking in terms of "Well, I do this and then I do that..." I would say Clojure is a good example of multi-paradigm. It's built on the JVM and its objects system. The problem is the JVM doesn't really have messages, it has methods, but they're a close approximation. And you have this ability to create objects and define their interfaces, so then you can -- Clojure wouldn't be possible without that idea of like an object with an interface to it that has its own encapsulated state that is totally managed by the object... And then the procedural - the inside of a function, you can do anything you want in sequence, so it's very procedural that way.

**Adam Stacoviak:** Coming up we talk through a post Eric wrote on dev.to, a site we highly recommend, by the way. Eric's post answered the question "Can I do functional programming in my language?" We also talked through object-oriented programming and functional programming on the front-end, ClojureScript and React, and PurelyFunctional.tv, a site Eric runs to help any programmer get into Clojure. Stay tuned.

**Break:** \[00:27:20.16\]

**Adam Stacoviak:** So Eric, you've got an awesome post on dev.to, which is a great website... Anybody can go there and publish, we highly recommend you check it out if you haven't yet - dev.to. And you recently published "Can I do FP in my language?" which seems like a fairly logical question that you would wanna ask... You're a wayward programmer, you're not really sure of a paradigm, or you get turned on to functional programming, and the next thing you know you're thinking "Well, I know JavaScript. Can I do it in this language?" Can you kind of state some of the things you share in that article and kind of help us understand why this question is so commonly asked?

**Eric Normand:** Yeah. Alright, so I'll start with the last thing... Like a stack - you drop questions on the stack, I pop them off.

**Jerod Santo:** \[laughs\] Keep them poppin'.

**Eric Normand:** The reason I think people ask this question a lot is they -- like we were saying before, they hear of functional programming as a list of features, and they're like "Well, I have functions, and I have data, and I have recursion in my language... What does some functional language give me that I don't have?" and they want some magic feature that you need when you switch over. It's almost like a challenging question, it's like "I know functional programming, because I know how to make my data immutable, I know how to work with that; I know how to write a function, I do callbacks all the time."

So the question is more like "Why can't I just do functional programming in my language? Why should I learn Clojure or Haskell?" My answer to that is yeah, you can do functional programming in any language, just like you can do object-oriented in any language, including C. You write your own little object system that passes messages and encapsulates state, that kind of thing, but are you really gonna learn object-oriented programming by learning C, by staying in C? Probably not. When someone actually does develop an object system in C, it's probably because they've been versed in Java or C\# or some other object-oriented language and they're kind of back-porting that into C, because that's what language they have to use.

So I have the same answer - if you want to program functionally in any language, sure, but it's not gonna give you any help for learning it, and to just think of it in terms of a few features, such as MapReduce, filter and those kinds of functional tools, you're not gonna really get that holistic perspective, that holistic approach to a problem; you're just gonna sprinkle it where it seems convenient, and it's gonna be too easy to just back out to the stuff you're already familiar with.

\[00:33:52.17\] It's just like learning a spoken language - you wanna immerse yourself in the language, so you set up conversations with a buddy, so you can practice speaking. "The first rule is we cannot use English, right? We can only speak French for this hour", or whatever language you wanna learn. If you don't have that rule, you'll notice by 30 minutes in you're mostly speaking English, with a couple of words in French, and you need to just like jump in, jump in the deep end.

**Jerod Santo:** I like the idea of immersion. You state that you can do functional things or you can do functional programming in any language, but if you want to learn the concepts, the paradigm of functional programming, you can't just sprinkle it into your current environment because you're not going to expand, you're not going to actually learn.

I took six years of Spanish through high school and in college - that's a lot of time, right?

**Eric Normand:** A lot of time, yeah...

**Jerod Santo:** ...but I was never immersed into an environment that I could actually use it beyond the classroom with a bunch of other English-speaking people that were just joking around in Spanish. And because of that I never became fluent in the language, even after six years of study, because there was no immersion. Now, I had a classmate who she went to -- I can't remember actually where she went, but she got immersed, she was baptized in Spanish...

**Eric Normand:** To a Spanish-speaking country.

**Jerod Santo:** Yeah, she was immersed in the language for a summer and she came back just like -- she had learned it, she was fluent. So I think that is a good translation... See what I did there? \[laughs\]

**Adam Stacoviak:** Oh, yes... Well, embracing is a form of focus, and it's a well-known fact that if you want to do anything, whether it's learn something new or achieve a goal or whatever it might be - in this case examine or fully check out the idea or the paradigm of functional programming - you've got to totally focus on it. Without that total focus, you can't expect focused results. You're only gonna get focused results by focusing, or in Jerod's case, immersing.

**Eric Normand:** Right. You might learn a thing or two, you might learn a few vocabulary words or something...

**Adam Stacoviak:** That's why they have bootcamps, why they have the bunkers where you disconnect from the internet and program for a week straight...

**Eric Normand:** \[laughs\] Bunkers...

**Adam Stacoviak:** ... with blinders on, and you can't see your buddies to the right or to the left of you, or whatever...

**Eric Normand:** Your eyelids are taped-open, your hand is glued to the keyboard so you can't use the mouse, you've gotta learn Vim...

**Adam Stacoviak:** Intravenous Mountain Dew, whatever it takes... \[laughter\] That's how you get there.

**Eric Normand:** Right.

**Adam Stacoviak:** Well, that's not the only path, it's one way of getting there.

**Jerod Santo:** You get there faster.

**Eric Normand:** And you have to convince your brain that you actually need it, right? You need to learn this thing. If you have the option of speaking English, you're not gonna learn Spanish. Not as well. But if you have this -- let's say two hours a day where you're only speaking Spanish (you set this up with somebody), after a couple times your brain is gonna be like "Oh man, I really need to start thinking in Spanish a little bit more", and it's gonna kick in. It's the same with functional programming - you're gonna struggle with it for a week, and then one day you're gonna wake up and you had a dream with immutable values and recursion and stuff, and you're gonna be like "Oh, I get it! I see how to solve the problem now!" and you can't do that just by learning the pieces in isolation.

**Adam Stacoviak:** So you CAN do functional programming in any language, however your argument is that you shouldn't.

**Eric Normand:** You can do object-oriented programming in Assembly too, if you want to.

**Adam Stacoviak:** Yeah, but if you really wanna learn the paradigm, don't limit yourself.

**Eric Normand:** Exactly.

**Adam Stacoviak:** Gotcha.

**Eric Normand:** You've gotta jump in.

**Jerod Santo:** Alright, so you've set us up for the big hook now, so how do you jump in? I think you'll say "Learn Clojure."

**Eric Normand:** \[00:37:53.13\] Clojure is a good one. I like Clojure -- I've been into Lisp for a while, and I also learned Java in college, so to me it was just like "Oh, this is the best of both", so it was an easy transition for me. There's a bunch of other ones that might be better for each individual, depending on their history. Haskell is notoriously very functional; it takes functional programming very seriously. If you wanna jump right in the deep end and you've got a couple of years to spend figuring out how to -- I wanna put this in a good way.... Haskell is a good language, so if I say something frustrating from my experience with Haskell, it's only because it is frustrating to have to learn a totally new type system and a totally new environment.

It took me a while to learn Haskell, even though I'd been doing functional programming for a while, just because the type system is so different. And it's powerful. Once you get on, you learn it, you get it on your side, it actually does help you.

There's all sorts of options, like Elm, which also has a type system, but is not quite as complicated as the Haskell system. PureScript, Elixir... All sorts of great options are emerging right now in functional programming.

**Adam Stacoviak:** Yeah, that's a good that you mentioned with Elm, too. In our most recent issue of Changelog Weekly - I can't remember the exact link we shared, but it was something around front-enders diving deeply into Elm. I think it was the "20,000 lines of Elm" - we linked that, Jerod, if you remember that one... But for front-enders, you might be thinking to yourself, "Well, this is totally foreign to me, I don't really do much programming; I'm more building front-ends or I'm doing JavaScript type stuff", that's a great spot to start, Elm.

**Eric Normand:** Yeah, for sure. I think Elm is a beautiful language; they've solved a lot of the difficulties of front-end programming, but in a walled garden kind of way. So it's not like you can apply this outside. They have their own way of styling things, their own layout model and stuff like that, but it does eventually output HTML and CSS. So you can do front-end web programming in a functional way, and it's nice; people really like it. It's a good introduction to -- it's got a Haskell-like syntax, and a Haskell-like type system, but it's super friendly. The creator is very into making sure that it remains accessible in ways that Haskell, because of its academic roots, has not been accessible to, you know, JavaScript programmers. You're a JavaScript programmer, you learned sort of by copy/pasting from other people's sites; you didn't really learn the type theory and stuff... Well, you can still use Elm and approach it easily.

I like Clojure. That's what I teach on PurelyFunctional.tv. It's got both a JVM backend and a JavaScript back-end, so you can do front-end and back-end programming, and the ClojureScript (that's what it's called when it compiles to JavaScript) uses -- the most common way of doing DOM stuff is with React, and wrappers on React... And React is really friendly for functional programming. You just write functions that output HTML, and boom, you have a UI. I almost left front-end programming because I was so tired of one pixel off, CSS and HTML problems, and dealing with mutable state and updating the DOM and stuff like that...

\[00:42:15.27\] But then React came out and I was just -- I don't know, it just made it fun again. So I recommend React with ClojureScript a lot. It saved my front-end career, I guess. \[laughter\]

**Jerod Santo:** Nice.

**Adam Stacoviak:** That's a good thing to mention too, with Elm and even React - traditionally, the web front-end folks are most often thinking in objects, right? If you're in a design program you're thinking about objects - this is a module, or there's different terms you use for it, so you're sort of baked into this object-oriented type thought, until you hit React or Elm... Then you kind of get to explore other ways of doing things that are foreign to the way you had been doing things.

**Eric Normand:** Yeah, and it's interesting you mentioned that, because when I see -- so I do mostly ClojureScript and React, and it just works; we don't have a lot of fatigue like I hear about in the JavaScript world, and I've dipped my toes in JavaScript and React and the whole Bundlr Builder -- I don't even know what they're called these days... Webpack and stuff like that, and I have to say I see the fatigue, I understand, because people are rewriting their build systems every six months, and having to --

**Jerod Santo:** Well, let's be clear - they don't have to do that. \[laughter\]

**Adam Stacoviak:** It's their choice. Shiny objects.

**Jerod Santo:** Right. This is one of the things... The fatigue -- we're not gonna go down the fatigue route, because I'll get going... But you don't have to grab the brand new thing every time; you can just continue with what you're currently doing.

**Adam Stacoviak:** We're just in a state of constant innovation, and this is the effect of constant innovation.

**Eric Normand:** Well, so I'm gonna push back a little on that...

**Jerod Santo:** Please.

**Eric Normand:** The weird thing is if I -- I was in ClojureScript for like two or three years and I didn't touch any JavaScript. And then I came out of that ClojureScript bubble, and I was trying to help someone with their JavaScript and I couldn't anymore. I know that's a long time to be gone, but the syntax had changed, I didn't understand all this NPM business and what it meant to globally install an NPM thing, and locally... It was really jarring, I had a lot to learn. Even though I was like "I've been doing JavaScript for years, what is this stuff?" And then I went back and did more ClojureScript, and I came back and it was different again! So you say you don't have to learn it, but if you wanna help someone on their program, you have to learn what they're using.

**Adam Stacoviak:** Learning and writing something is two different things, though... So I'll back Jerod up on that.

**Eric Normand:** That's true.

**Jerod Santo:** Yeah, and I mean, honestly, I was speaking to the person who is actively developing a product or piece of software, that maybe is along like "You can just keep doing your ClojureScript thing and everything's gonna be just fine." I'm not stating that JavaScript isn't moving, the state of the art isn't moving - it definitely is - but it's not like everytime it changes its paradigm or its framework you have to rewrite your entire application.

**Eric Normand:** Now I regret bringing this up... \[laughter\]

**Jerod Santo:** I told you, we'll get stuck on the fatigue thing and we're not talking about functional anymore.

**Eric Normand:** We don't wanna talk about fatigue, but what I was trying to say ties back to what we were talking about before - when I've looked at React code and JavaScript, I don't see much functional. The potential is there, but it seems like people are...

**Jerod Santo:** It's all components, right?

**Eric Normand:** \[00:46:05.02\] Yeah, they're making components that are very object-oriented, they are like doing all sorts of stuff in the lifecycle methods, that's like Ajax fetching or setting some variable... They're doing something that's very procedural and effectful.

I'll just tell a little story, I was hired as a contractor to functionalize some React Native code, so what I did is I came in, I added Redux, I started stripping out all of the effects from all the components, removing bugs in the process. I would finish up with one class, one component, and I'd go work on something else. Then I'd come back and find that the component I had just functionalized two weeks later was like all sorts of state everywhere... That has been my experience with trying to do functional and JavaScript. The problem I guess is commitment, lack of immersion, lack of understanding of why you wanna reduce the number of side effects, things like that.

**Jerod Santo:** So in that case you have a team that's not in the same mindset as you are...

**Eric Normand:** Exactly.

**Jerod Santo:** The team you're coming into is still on a different mindset, and of course, in that circumstance they're gonna continue doing what they know to do, or what they're comfortable doing, and that's a natural thing. So when it comes time to learning that - you were talking about getting outside of your comfort zone in terms of a JavaScript or a C++ or a Ruby, or wherever you're comfortable at, in some sort of either procedural or object-oriented little bubble, the call to action is immerse yourself into something that is functional, because you can learn more purely, more quickly, more thoroughly.

**Eric Normand:** You're not gonna revert to using some mutable variable somewhere just because it's convenient, because you can't in the functional language.

**Jerod Santo:** Right, you give yourself to constraints.

**Eric Normand:** Exactly.

**Jerod Santo:** Yeah, because the language will constrain you into the way that you have to do it, not just the way you might want to do it.

**Eric Normand:** And then give yourself six months in that language; let's call it Clojure, let's call it Haskell - immerse yourself, and then when you come back to JavaScript, you'll have all the tools, the mental models, the strategies for approaching a problem where you won't immediately turn to variables. You'll say "Well, variables are one option, but there's like three other ways. We can put it in Redux, we can send a message, we can make an action...", whatever it might be. So yeah, that's what I think the biggest advantage of learning functional programming is.

**Jerod Santo:** So when you get back after six months, you can change all your React components into functional, and your team mates will turn them right back into object-oriented when you're not looking. \[laughter\]

**Eric Normand:** Now, a lot of my customers on PurelyFunctional.tv I guess share this similar mindset where they're like "My team does not like functional whenever I do it", or they're just like tired of object-oriented, they're tired of the abstract proxy factoring methods, those kinds of things, and they wanna get out of that world and they see functional programming -- there's jobs now in functional programming and they see it as an escape from that, into a new rationality that they can buy into. So you know, what I do is to kind of holistically show that yes, there are jobs, there is a way to learn the stuff you need, you don't need to learn quite as much as you might think, you don't have to be an expert in functional programming to get a job in a functional language; you can learn on the job. People want good programmers more than they want functional programmers.

**Adam Stacoviak:** \[00:50:11.27\] So where does this fit in then? We've gone through a lot of what you're sharing here, so how does PurelyFunctional.tv fit into your mission, to introduce to all the developers listening to this that have not immersed themselves or don't think they have the time to get involved...? What's your mission here with this and how does it fit in?

**Eric Normand:** The mission of PurelyFunctional.tv is to help people thrive with functional programming - right now I'm very focused on Clojure, so to thrive with Clojure in their career. I have lessons that come out regularly, it's video, and I'm teaching Clojure, I'm teaching functional programming principles, giving lessons and exercises and things like that. So the mission is really to support functional programming, the viability as a job, as a career, that you don't have to just go into object-oriented programming.

**Jerod Santo:** Tell us about the jobs. You gave us a little bit of the history coming out of academia, many Lisps specifically, but even things like -- well, I was gonna say Erlang, but that wasn't Academia...

**Eric Normand:** That was industry, yeah..

**Jerod Santo:** ... a very small niche of industry; important, but kind of a bubble.

**Eric Normand:** Right.

**Jerod Santo:** But you have these things moving out to where -- there are big businesses doing Clojure, they're doing Haskell, there's Scala...

**Eric Normand:** Scala is huge, yeah.

**Jerod Santo:** Yeah, so where are the jobs and what kind of jobs are they? Tell us about the jobs.

**Eric Normand:** So just about every big tech company has at least some functional code. Facebook right now has Clojure, it has ML, OCaml... What is that called, their new system that's like a JavaScript system on OCaml? Anyway, they do a lot with that -- they use Haskell for their spam detection... There's a lot of stuff in e-commerce. The system that processes WalMart's receipts from every WalMart store in the world - it's a Clojure system, and it's run by a small team that manages it, maintains it. Banks, finance - they use a lot of Clojure. Amazon uses it, eBay, PayPal... You just go down the list and you can find functional languages at a lot of these companies. There's kind of a curse, I can say that...

**Adam Stacoviak:** Oh, boy...

**Eric Normand:** Yeah, the curse is that these systems are so much more maintainable than the object-oriented systems that have been around for 20+ years now, that they don't require a lot of jobs. \[laughs\] So you have this team of ten people with this receipt processing system from WalMart, that's one example. A lot of the companies that use Clojure - the bigger companies - they probably acquired another company and acquihired the team... So that team is still there and it's still maintaining the system. I think WalMart is an example of that, too. Twitter's analytics stuff was done in Clojure and was acquired.

**Adam Stacoviak:** \[00:54:12.02\] Would you really wanna maintain something that doesn't really need maintaining for the rest of your life just because you need a job though? Wouldn't you want, as a programmer, to be challenged?

**Eric Normand:** Sure, except people really want the paycheck. \[laughter\]

**Adam Stacoviak:** Right. Job retention. Everybody wants job retention...

**Jerod Santo:** Who wants that?!

**Eric Normand:** Yeah, so you know, when you say "We're actually putting programmers out of work by writing in Clojure", that's not the biggest selling point. The thing is the number of jobs are increasing. There's more and more companies every day that are using Clojure, both startups - they're a small team, they're probably not hiring that many people - and big companies who are doing a new system, or sometimes a rewrite of an existing system, and they chose Clojure or Haskell, or whatever functional language, for whatever reason.

There's plenty of evidence for this. If you go to the Clojure conferences, they do a survey of all the attendees and they figure out if they're being paid to do Clojure and where they're working and stuff like that, and it's just growing; every year, a higher percentage are getting paid, a higher percentage have their company paying for them to attend... Things like that.

**Jerod Santo:** Adam, this reminds me of a guest that we had on a while back, and it's one of these -- I'm blanking... Where they had built an open source system that was popular, and their model for sustainability was gonna be support...

**Eric Normand:** Classic.

**Jerod Santo:** Yeah. They were very humble, but they basically said in a very humble way that it didn't work because basically they didn't have enough bugs. \[laughter\] Their software actually didn't need support, because it was just that good, or something. Does that ring a bell for you, Adam?

**Adam Stacoviak:** It does, I'm not placing it though. If you're listening and you know this show, email us and tell us; we'll put it in the show notes.

**Jerod Santo:** Theirs was so good they put themselves out of a support job.

**Adam Stacoviak:** I do recall the conversation, it rings a bell.

**Eric Normand:** It's funny, because that's one of the -- I don't know what you would call it, but it's a thing that people talk about in the Clojure world. They're like "What?! This library hasn't had a commit in like six months", and people are like "Well, there's no bugs. If you report a bug, we'll fix it, but it's done. It solved the problem and it's done", which I think is kind of like -- it is scary when you see there hasn't been any activity on this; is this alive? If I ask for a bug fix, will it happen? But also, it should be the goal, just to finish, to solve the problem and move on. That actually is one of the things that has appealed to me about Clojure, and functional programming in general, really... The way you can just attack a problem, solve it with the right abstraction, and you're done.

**Adam Stacoviak:** That's a good spot to leave it, then. Let's call this show done, and thank you so much, Eric, for coming on, and being so passionate for sure on functional programming... And then obviously all the time it takes to produce teaching around it and encouragement. It's PurelyFunctional.tv, right?

**Eric Normand:** That's right, PurelyFunctional. Not KindaFunctional.tv.

**Adam Stacoviak:** Not Mostly...

**Jerod Santo:** I'm gonna go register that domain real quick... \[laughter\]

**Adam Stacoviak:** KindaFunctional.tv.

**Eric Normand:** SomewhatFunctional.tv... \[laughter\] PurelyFunctional.tv !

**Jerod Santo:** PurelyDisfunctional.tv.

**Eric Normand:** Oh, ugh! \[laughter\] Yeah, thank you. This has been a blast. I hope I wasn't too humble about functional programming. \[laughter\]

**Adam Stacoviak:** Thanks, man.
