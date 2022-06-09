**Kris Brandow:** Welcome, welcome, welcome, gophers! We are here for another episode of Go Time, and this week we're gonna be talking about another interesting little topic in the continuance of our maintenance series... For those of you out there that are counting, this is our eighth episode in the maintenance series.

The genesis for this episode was a little chat we had in the Gophers Slack, in the Go Time channel. Shout-out to the Go Time channel; if you're not in there, you should definitely join... But it came -- it started with one of our listeners who pointed out that in a lot of our recent episodes we've been talking about how maybe we shouldn't have any structure for things, or maybe we should have all these nice brownfield projects... And we kind of noted that, and our wonderful producer, Jerod, came around with a beautiful analogy of experienced painters liking a blank canvas, and some other folks just liking paint by numbers... And of course, my brain, as a writer, just went immediately to "We're gonna make that into an episode."

So that is the very episode that you're listening to right now. We've titled it The Myth of Incremental Progress, and I think it's going to be a lot of fun.

Joining me today I have my usual co-host, Johnny Boursiquot. How are you today, Johnny?

**Johnny Boursiquot:** Doing alright.

**Kris Brandow:** And we also have our wonderful producer, Jerod. How are you today, Jerod?

**Jerod Santo:** Happy to be here.

**Kris Brandow:** Awesome. And we have someone who you've all heard multiple times on the podcast, but instead of joining us as a guest, this time he is now a panelist, so congratulations on joining us in the co-hosting ranks, Ian... How are you doing today?

**Ian Lopshire:** I'm doing great!

**Jerod Santo:** \[04:00\] Yay! Welcome, Ian! Congratulations!

**Ian Lopshire:** Thanks!

**Jerod Santo:** \[laughs\] It's kind of self-aggrandizing, isn't it? ...congratulating you for being a panelist on our show...? \[laughter\]

**Johnny Boursiquot:** "You won a prize."

**Kris Brandow:** "Congratulations for joining my podcast!" \[laughter\]

**Jerod Santo:** Yeah. \[laughs\]

**Kris Brandow:** Alright. So we don't need any introductions, since we're all hosts here... So given Jerod's comment, I am gonna make the analogy - or I guess the translation? I don't know what I'm about to call this, but... That you know, this idea of painting by numbers is really nice. You can paint some really good stuff by numbers, when you go out there into the world and get those nice coloring books... You're like "Okay, I'm making a nice picture." But I'm gonna make the conjecture that you can't paint by numbers your way to being one of those blank canvas artists. These are two separate and distinct skillsets, and one does not lead into the other. And the reason I say that is because I think a lot of the time when we think about these things, we think "Oh, well, I can start by painting by numbers, and I'll eventually wind up being this grand artist, or something like that." So I'd like to hear from my panel, do you agree? Do you disagree ? I'm sure, Johnny, you have tons of nuance, and we're gonna go meta straight away... So yeah, who wants to jump in first?

**Jerod Santo:** I think it would be useful to attach the analogue to the subject at hand. So if we're talking blank canvas, this was mostly in reference to instructions on what tools I should be using, what practices I should follow, the structure, the architecture of my software project. And I was saying that experienced developers like a blank canvas. They like to start from scratch and draw their picture.

Paint by numbers - the question is what does that draw across to for you guys? I tend to think of framework, preexisting structure, a scaffold of some kind... Obviously, it doesn't apply one to one, because no one's gonna give you a number and say "Put the code right here, and put the green code right there, and the blue code right there." But is that what you all are thinking when you think of paint by numbers? Because we have to at least agree on what the metaphor applies to, I think, before we can debate its merits.

**Kris Brandow:** Oh man, Jerod, you're already just ruining the whole fun of this.

**Jerod Santo:** I'm going meta. \[laughter\] That's what you guys do, isn't it?

**Johnny Boursiquot:** You fit right in.

**Kris Brandow:** We don't get to defining what we mean by these things until halfway through the episode. You're just all over the place. But no, I think from my perspective you are right there; I think it is these frameworks oftentimes. Or you know, in the context of the way you write your code, it's all of those projects that get you started and then it's like "Here's your predefined package layout of where all of your packages go, and where you put your readme, and these other document files", and all of that. I think that is a bit -- that's when I think of when I think of paint by numbers for code. But Ian, Johnny... What are your thoughts?

**Johnny Boursiquot:** I think it would be unfair to say that folks that use frameworks are deliberately choosing sort of a paint by numbers approach... Because frameworks, scaffolding and all these things - these are productivity tools, not really "Strictly beginner, I'm learning how to do things, I need handholding and help getting things done", which is kind of what (I assume) paint by numbers kind of leans towards. You're not an experienced painter yet, you need some structure and some help and some guidance, and you need a starting point to hone your craft until you don't need that anymore, until you can stare at a blank canvas and start creating.

Frameworks I don't think really fall in that category. They are strictly productivity, I think. Now, can they help somebody who is starting out? Absolutely. But they help you as a beginner to be productive within a journey of building software with other experienced people who are also using this framework for productivity. So I think we should be very careful not to downplay the role of frameworks. They're not really the same thing.

**Kris Brandow:** \[08:03\] I do feel like there's a slight shift in the analogy there though... Because I think when we're talking about things like paint by numbers, or talking less about the thing that the software actually winds up doing, and the structure that we're giving to the software to start with. So when I say frameworks are paint by numbers, I'm specifically saying for the structuring of your project; not necessarily what it does, or the business thing that it solves, but specifically, you are getting handed the places where you put all of your code. You still have to figure out what code you put there. It's kind of like if you do paint by numbers, but you just pick your own colors, because you understand color theory, so it looks different than other people's paint by numbers. But the structure of what you wind up with is going to be that structure there.

**Ian Lopshire:** When I read the paint by numbers analogy, I was more thinking like -- you know, in my first years as a software engineer my manager would give me five tasks, and each of those tasks he's already broken down where this change needs to happen, how you should do it, go do it. And the blank canvas for me was saying "Hey, this is a feature that needs added, or this is a thing that needs done. Go figure that all out yourself."

**Jerod Santo:** I think it's a fascinating way of looking at it, and I see why you did that. The original GoTimeFM chat was around - we had tweeted out a clean architecture template for Go services, which some of the gophers in the chat thought has too much ceremony; it was Bob Martin's Clean Code book, and some of the design patterns laid out therein were implemented directly into this template for you to start from. So it was very much about maybe not -- and to Johnny's point, I agree with you on frameworks; I think maybe we set them aside in this conversation... Because developers build frameworks for themselves to use; so it's not like just for beginners. If you build your own stuff for long enough, you will develop your own framework or tooling. And it is about productivity.

Now, public consumption frameworks that a new person can come to and become productive faster is one aspect of a framework. But you can use frameworks for many productivity things. I think maybe more design patterns, architecture, structure is what Kris was referring to. Is that fair, Kris? More so than laid out tasks and more so than frameworks.

**Kris Brandow:** Yeah, I think so. I think I also have another analogy that is similar to this one, of music, and how there are musicians that can either play by ear, or read sheet music, but can't necessarily compose their own songs. Music composition and music playing are two very different skillsets. But I think you'd also think that hey, if you play music for a long time, you might wind up being someone that can compose music, when that is not the same. And maybe that's a little bit of a better analogy than the paint by numbers versus blank canvas, because I think we can all recognize that musicians are very talented people, that even if they are playing songs composed by other people, that doesn't make them any less of a skillful human.

**Jerod Santo:** Right.

**Kris Brandow:** But there's a distinction there, and I think that's what I wanted this episode to be about, is like when you have those types of close distinctions, how do we kind of help ourselves not fall into the trap of thinking that we'll wind up becoming a great composer one day by just practicing a lot of music.

**Johnny Boursiquot:** You become a great composer by composing. You can become a great musician by simply playing music. Maybe yesterday or the day before I saw some tweet, maybe from Mat Ryer or something, maybe he was retweeting somebody else - of a kid, five years old, who's ripping apart a sonata from Bach, or something. The kid's hands are moving fluidly through -- I mean, I'm thinking "Man, this is a prodigy. This kid's genius." I don't know any other five-year-old who can do that.

And then you obviously have people -- this being on the internet, it's like "Ah, that's nothing. If he can't write music, then he's not a prodigy." I'm thinking "Okay, I can see what you're saying, that in the pantheon of music maybe this particular piece that he happens to be playing, albeit eloquently, could be considered sort of a beginner sonata, versus something that is more complicated in structure, and tempo etc." So while I understood the nuance that people who are critiquing this five-year-old kid, and their music skills and talents - I get the nuance. But to me, at the end of the day I'm thinking "Wow, this kid is pretty good."

\[12:36\] Now, I wasn't slicing it and saying "Oh, he's good at playing music, but he's bad at composing music." I was saying "Okay, here's somebody performing the art of playing music, and they're pretty good.

So if I bring this back to software, and I'm like, okay, can I identify somebody who's pretty good at coding, at flying through the keyboard, knowing everything that needs to go in, knows the syntax of the language, knows exactly how to implement an algorithm and do all these things - I can now say "Well, they might be pretty good at those things, but they don't know how to engineer software", or larger-scale software, or distributed systems software. They're good at coding, they're very efficient, they're a great coder, but maybe they're not a programmer, or an engineer... Because these things - you don't just master and memorize syntax and start ripping across the keyboard and doing things. That's a skill, but that's not the complete set of skills you need to build and engineer software that has value to somebody who's willing to pay for it.

So that's how I see these things. I don't wanna take away from the act of knowing how to code, but at the same time I understand that knowing how to code alone is not sufficient for engineering software. Hopefully, that makes sense.

**Kris Brandow:** I feel like the YouTube video I sent to you has resonated with you then...

**Johnny Boursiquot:** Yeah, I think so. Definitely. I could understand it. Basically, we tend to throw around the "What's the difference between a coder and an engineer?" or whatever it is... And this person who actually - I'm ashamed to say, I didn't even know his name, Leslie Lamport, and so much of what he's done impacts my actual day-to-day, like how I make a living, and I didn't even know this person... I feel kind of ashamed of myself; I'm like, "Okay, I have to make the point to go research this person." And he calls out -- and I sat down to, I was just basically, he was effectively having fun, he didn't start out with paint by numbers. He wasn't starting out with somebody else's thing; he sat down, somebody gave him space and pay, he sat down and -- he came from a different background as a mathematician. He came into this field and basically applied what he knew and had mastered in a different field into ours, in the field of computing, and created all these wonderful things that we now take for granted. So that's blank canvas. To me, that is a blank canvas. That is a master of something that comes in and says "Well, how can I apply what I know, what I've been doing for decades? How can I innovate in this space?"

So I think those who start with a blank canvas are seeking to innovate. Those who start with, for a lack of a better term, the paint by numbers, are seeking to execute. I think there's a difference there.

**Jerod Santo:** The point that I was trying to make and I'll try to make here again is that while I agree with that, that man is a master who changed the way that software is written. He's like a Picasso. And lots of us are never gonna be Picasso. I'm not saying you all can't be, and I can't be; I'm not trying to limit anybody. And I don't necessarily wanna lift him up to a level that's higher than it deserves. I only know him from the seven-minute video as well. Much to my shame, I didn't know his name prior, so thanks, Kris. We'll link that up in the show notes. I've put it in the chat for those who wanna watch that great little video featuring this man's work, and some of his thoughts.

\[16:04\] Some of us wanna paint because we love painting. And we're never gonna be Picasso. And we maybe wanna be a working painter, maybe we wanna paint portraits for people who paid us. Isn't even George W. Bush paints portraits now in his retirement? He's average at it, but people still give him respect about it, because he's an ex-president... We're not all gonna be that. I bet he starts with blank canvases now. He probably didn't start there. And so I guess I was trying to say lots of us just wanna be like working software developers who put in an honest day's work, do our best, write some good software, help people out, but aren't necessarily gonna make it to the level of a person who reinvents stuff. So how do we help those people as well, I guess?

A lot of the conversations on Go Time - which I very much appreciate, but I've also been in the business for a very long time - are very deep, and nuanced, and from an expert perspective, and... Hey, y'all are experts, so of course we want an expert perspective. But sometimes the question is like - well, Ian, when you start a brand new project now, or given that feature today, to build, and you've got your blank canvas, what do you do? Where do you start? You don't have to tell me where I need to start and paint by numbers me; but if I can listen to the way that you go through that process, and get to your end goal, your painted picture, maybe I can learn from that. And so I'm actually setting that up, but I also would love an answer... Like, let's say your boss gives you a feature to build, Ian. You've never built this before, maybe you have... What do you normally do? Where do you get going when you're just staring at a blank screen?

**Ian Lopshire:** Yeah, it's a great question. I don't know. I don't know the answer to that. \[laughter\]

**Jerod Santo:** Okay, fair enough.

**Kris Brandow:** At the beginning, of course...

**Ian Lopshire:** Yeah, exactly. I mean, I start in one big file and I just go, you know?

**Jerod Santo:** You just start writing code? I mean, then you're coding. Surely there's steps before that. Okay, let's pass it to Kris. Kris, you write software for a living, you're a blank canvas kind of guy... Where do you start? What do you do?

**Kris Brandow:** I think because I am who I am, I usually start with a combination of writing some sort of document to make sure I kind of understand what the problem is. Actually, I guess in the beginning-beginning, when someone brings something for me to build, I ask a lot of questions, and make sure that it's like "Okay, well, are you actually asking me for the thing you want, or are you asking me to build the thing you think you need?" That's usually where I start whenever it's a kind of -- actually, it doesn't matter. It doesn't matter if it's a product person or if it's something I'm building for myself. I say "Is the premise that I have assumed here, or someone else has assumed, the correct one?" And once I kind of figure that out, I'll start with writing up a design doc, or a scope doc, and being like "Okay, this is what we're going to build." And then I usually jump into some prototyping, and that's where I start actually throwing some code into a codebase, and then the project usually gets legs from there, and we kind of -- you know, if it's something for work, we develop out that design doc more, we start having discussions, then we actually make the for-real codebase, which might unfortunately be taking that prototype code I built, or it might be starting from fresh, which is definitely a preferable thing, because prototype code is never really written as well as we'd like it to be.

That's usually the on-ramp that I take... But that's really a lot because I'm a writer, so my comfort zone is an empty document in Google Docs, or an empty Vim window where I can just start typing out, "Okay, what is it that I'm trying to do?"

**Jerod Santo:** Blank canvas.

**Kris Brandow:** Yeah.

**Jerod Santo:** Johnny, does that resonate with you? Is that similar to your process?

**Johnny Boursiquot:** Yeah, I'd say so. Obviously, there's gonna be basically what am I being asked to do - is it to add a feature in existing software, which hopefully that's an easier task, or it's supposed to be an easier task than basically building something brand new... \[laughter\]

**Jerod Santo:** It depends on how legacy code that sucker is.

**Johnny Boursiquot:** \[19:49\] Depending on how old that thing is, right? And whereby Kris jumps into a Google Doc or a Vim window and whatnot and starts writing things out, I tend to be more of the -- I'm a visual thinker, so I tend to fire up one model or build us a chart or something, and I start mapping out flows; what data is coming from where, where does it need to go, what are the boundaries? Basically, I think in systems, so I'm trying to identify what systems am I dealing with here - internal, external, what are the constraints, how much data needs to flow through this pipe, and things like that. So I sort of picture a system in my mind and try to represent that on some sort of canvas, in this case a digital one.

And then from there, I start to write about the different pieces of that system. Then I take Kris' approach and say "Well, what is this thing? If I were to get a readme for a codebase for this particular repository that represents this component in my system, what should that readme tell me?" So I do readme-driven development for that reason... Because I wanna be able to say "Okay, well if I hand this to an engineer on my team, are they gonna know what to do with it? Are they gonna know where this fits into the bigger picture?"

So I kind of approach it that way... Basically, I guess you call that top-down, whereby I try to get a "What's the 30,000-foot view of this thing?" and then I sort of slowly descend into the nitty-gritty.

**Jerod Santo:** I'm similar. I'm an outliner though, so I work in outlines; I think in outlines - you know, top-level, and I star to drill down and start to feather it out as it makes sense... What depends on what, what do I know versus what do I not know, what's easy, what's hard? And then substeps. Trying to take that blank canvas, which to me still after almost 20 years in the industry can be intimidating, and give myself a task list, like Ian received from his boss. Like "Can I produce that, and come up with --" And this is kind of the process of user stories, or whatever, which I've never been good at writing those. As an admin, I want to finish this feature, so I can go home. \[laughter\]

**Break:** \[21:51\]

**Jerod Santo:** One thing Dillon Bork said in the chat which I would love to pull into this, which I think is a great point - he says the danger of paint by number in his opinion is that it can lead to a cargo-culting of the various patterns and idioms without any insight or understanding about why the things are done that way... Which, by the way, I think is a great aspect of having conversations like these, is because we hear about some of the why's and the "it depends", and not so much of the blog posts where it says "Here's how you ought to do it because it worked for me." It's harder to cargo-cult a podcast, I think, than it is a blog post or a book.

\[24:12\] That being said, sometimes you just have to follow the other person's path until you realize when it doesn't actually work for you. I'm totally fine with cargo-culting some sort of rule... I was gonna say the Law of Demeter, but that one's too hard to explain. What's a very simple -- DRY, right? Everyone can remember that one. We all get it wrong, but we can all remember the acronym... And all of us here, I think, would all talk about how DRY is not the best principle in many cases. I think I've heard you guys talk about that. But we didn't realize that until we had tried to DRY the crap out of everything for a while. And then it came back to bite us.

So I think it's okay to go through that process of, like I was saying in the post, go ahead and paint by numbers for a little while. Don't live there, don't stay there, but until you can start to realize actually blue doesn't look great on the number four. A little bit lighter blue would look nicer there. You start to develop your taste, your experience, your own history of that working well in this context, not in that context.... Then you don't need it quite as much. But I think we do need to start somewhere, and I think that a lot of these idioms, best practices, rules, clean architecture, whatever that means - those are decent starting places.

**Kris Brandow:** Yeah. And there's something you've said a while back, when we were talking about Leslie Lamport and his path of like "Okay, I'm a mathematician that stumbled into computer science, and then I was studying physics, and then I realized that this distributed database someone's trying to build is actually violating the laws of physics, so we can't possibly build it..." It's interesting that you've kind of said "Okay, we all can't be that", because I think in some ways the way that we've set up our industry is that we idolize people that can do those sorts of things, and we assume two things; and I've seen this over my career, it's happened to me personally, and I've seen it happen to other people, where this assumption that if you're new, you can't possibly be someone like that. Like, having that type of knowledge only comes from years and years and years of practice. And the other side of it is that if you want to stay in this industry, you should want to wind up to be someone like that.

I think for me personally - it's kind of funny that you say like "Oh, we're not really people like Leslie Lamport." I think my own path through computer science is very similar to the one that Leslie Lamport has taken, and the way that he approached everything. I am - as we know from this podcast - a very heavy analogy person...

**Jerod Santo:** You're a writer.

**Kris Brandow:** I'm at my core a writer that happens to write programming languages... And I think that is a very distinct path for me, and that has resulted in me, in my career - like, I was never a junior engineer. I've never been like an SE1, or an SE2. I've never had that experience. I don't quite understand what that experience is like. But I also know that I wouldn't want to be an SE1, or what we usually conceive as an SE1 or an SE2, someone that gets handed tasks and just executes them, and that on-ramp to learning. For me, I always wanna be at that stack+ level that higher level of "Okay, give me the tough problem to solve. I'll sit down and I'll figure it out."

I think we've mentioned this in an episode a while back, but I think that's actually an important differentiation and distinction that we need to make as an industry, that goes along with this kind of thought process of incremental progress of - there are some people who are those Leslie Lamports, who are the people that can design really great, big systems, or find the next new thing. And there's not a ton of them, but they're not going to take that climbing up the ladder approach to things, so we need a way for them to get onboard. But we also need to recognize that there are plenty of people that are perfectly happy just being handed user stories all day and executing on that.

**Jerod Santo:** Sure.

**Kris Brandow:** And there's absolutely nothing wrong with that. There's nothing wrong with being the person that paints in all of the colors to make the beautiful portrait at the end of the day. Because starting with a blank canvas is very intense, and it takes a lot of energy to sit down and figure all the things out... And quite frankly, some people don't need a blank canvas.

\[28:19\] Your marketing company needs a website; we don't need to spin up a whole new custom Go backend... Just go use a framework. Just go use WordPress, or Drupal, or Wix.com, or something. You don't need to do all of the intense effort. But I think we do, as an industry, have to start realizing that these are not things that stack on top of each other. These are things that are next to each other.

**Johnny Boursiquot:** But what about resume-driven development? I need to build a brand new framework for this website. \[laughter\]

**Jerod Santo:** That's true.

**Kris Brandow:** Kubernetes-driven development. \[laughter\]

**Jerod Santo:** Yeah, and then we find out in the big tech co's there's now promotion-driven development, which drives all sorts of new projects, because you can't get promoted working on the current project, even though the value is there... And these are incentive structures that people are realizing are misaligned with effectiveness etc. and hard problems to solve internally. I don't envy anybody trying to set those structures up inside of a large company... But yeah, a lot of it is -- not a lot of it; some of it can be exactly what you said, Johnny... It's like, "Yeah, but how do I get that raise? How do I get that new job? How do I get that promotion?"

Some people - actually, that's the advice they're looking for. It's like, "Hey, I wanna be a software engineer. Y'all have been doing it for all these years... I'm trying to break in. What do I do? Where do I start?" And again, unfortunately, the answer to that still can be "It depends" or "Just pick React." I'm just kidding... \[laughter\]

**Kris Brandow:** Oh, Lord, Jerod...

**Jerod Santo:** Sorry, I am from JS Party, so I had to get at something...

**Kris Brandow:** You've been spending a little too much time on that, on that topic there

**Jerod Santo:** I think Ian disagrees with something Kris said, because he had a funky look on his face, and then Johnny talked. So Ian, do you wanna say something?

**Ian Lopshire:** Yeah. Let's go back to that idea that these don't stack, that they're beside each other. I kind of disagree with that on a lot of levels... But let's just take Go, the language, for example. That didn't come out of academics; that came out of a bunch of people's years of experience, knowing how a language should work to be productive, right? I mean, obviously, they're all brilliant people, but that didn't come out of these mathematicians, or that sort of thing.

I think they can be beside each other, but it definitely does stack. Gaining context and experience does allow you to contribute more later.

**Kris Brandow:** Yes, but I would say that looking along the dimension of time is likely going to walk you into problem areas... Because it's like, the reason the founders of Go were so great at creating this language that we have is more because of the experiences they have, not so much the length of time of those experiences. So I do agree with you that time is a factor here, but I think it's a factor we need to discount heavily, because I think -- if we were to start from a blank slate, if we start from the beginning, I think we can weigh time pretty well, and it'd be okay. But I think because we have this assumption now that time = experience, we actually have to kind of subtract, or kind of push that down on our levels of understanding... Because I've met so many more people that it's like "Well, you have ten years of the first year of experience or you have twenty years of the first two years of experience."

So I think we overweight time too much of the time, and that has resulted in us as an industry just saying "Okay, just grind for a few more years." And then you see things on job posts that are like "Okay, we need 70 years of experience in this, or 10 years of experience in that." And I think that's exactly the thing I was talking about, where it's like "You can learn what it takes someone ten years to learn, in one year, if you have one of these brains that just loves learning, or loves exploring." So it has a lot to do with who you are as a human, more than how long that you've been doing something. We don't have really good ways of differentiating that right now, but...

**Ian Lopshire:** I'll agree that time doesn't mean much there, but by experience I mean like quantity of... I don't even know how to say it.

**Jerod Santo:** Some other measure that's not time... \[laughter\]

**Ian Lopshire:** \[32:14\] No, it's not time. It's like --

**Jerod Santo:** What he means is like 10,000 hours... \[laughter\]

**Ian Lopshire:** No... By experience I mean like a base of knowledge. Like, yeah, if you do the same thing every day, you're not growing and learning. But if you're gaining new experiences, that is experience. It's new experience. It's not length of time doing a certain thing.

**Kris Brandow:** Right.

**Jerod Santo:** So on our job postings we have to say "Seven years of experiences..." \[laughter\] I'm not disagreeing with you, I'm just saying it's really hard to quantify this thing if it's not time-based.

**Ian Lopshire:** Yeah, time is like a good analog, but it's not the thing.

**Jerod Santo:** It's a proxy.

**Ian Lopshire:** Yeah, exactly.

**Kris Brandow:** Yeah, I think that's also what I was trying to get at there... Maybe we just shouldn't use time, because it's too easy for us to gamify it. It's too easy for us to sit there and be like...

**Jerod Santo:** Yeah, you just wait.

**Kris Brandow:** "Oh, you've been around for ten years, so obviously, you can design systems now." It's like, please, don't...

**Johnny Boursiquot:** I mean, isn't that a fair assumption to make though? We don't have better heuristics for that, so... There's an assumption that you must make as an employer, or a hiring manager, managing director, whatever, that given enough time, somebody has seen enough kinds of problems that they are experienced enough to help us not repeat certain mistakes. That's a fair assumption to make. I know it happens - people will have seven years of experience and it's just the first year repeated seven times; they don't grow and learn and mature... But I'd argue that those are far and few between. At least in my career, which I've been grateful enough to be doing this for close to 25 years now... I've come across maybe one or two people during that time that basically had a lot of years of experience in the industry, but really that didn't show in the kinds of things they were proposing, the way they communicated... And \[unintelligible 00:33:56.17\] language barrier, and all these things. More like communicating a design, and things like that.

So it's possible for years to have gone by, for you to not grow as an engineer. And mind you, they were great coders. If I give them a specific tasks, with specifics on "This is what I want you to do. Do this, do this here, go find out what you need to find out there, what you need to fix is over here..." Very specific things - they will get it done quickly and efficiently. But if I said "Okay, design me a web scraper that scrapes this website", they'll be at it for like 3-4 months, until I come back and say "So where are we?"

So it's one of those things where if you've been experienced enough -- let's use that example... Somebody comes to me and says "Hey, design a web scraper", and they give me the parameters and they say "Hey, this is what it needs to do etc." The first thing I do, I'm like, okay, I go to Google and say--

**Jerod Santo:** "npm install a web scraper." \[laughter\]

**Johnny Boursiquot:** Right? Right?! I mean, why am I gonna reinvent that wheel? I've got better things to do with my time. I need you to be experienced enough to recognize that. And go get a damn package off the internet that does this. I don't need you, as a junior developer, reinventing that wheel. That's not where your time is the most valuable to me.

So that kind of judgment I think is what comes with time. You've seen a few patterns, you've been coding for a while, so you know how to deal with syntax, and you've been around other people who know what they're doing, so you pick up some of the tricks of the trade, that kind of thing... And then you allow time to allow these things to just gestate and become part of your skillset as an engineer. So I think that's the element, time... I don't think we can discount time here at all.

And again, I'm biased because I've been doing this for a while, and I can say that "Okay, yeah, time has added so much to my skills", and whatever it is... But I think in my experience you need the time to grow.

**Kris Brandow:** I wonder if this has to do with where in the industry each of us is positioned... It's interesting to me that you, Johnny and Jerod, had never heard of Leslie Lamport before; I think part of it is before I've spent so much time in distributed systems that it's just like "Oh, yeah, Lamport clocks. Leslie Lamport. Of course."

\[36:10\] But I think distributed systems specifically is one of those areas where it really isn't the amount of time that matters nearly as much as like the knowledge that you have obtained. And you can obtain that knowledge very quickly, but it takes a -- people's brains are different, so your ability to understand things like the distributed system concept... There is no now, and you can't use time. That's not something that you -- I mean, maybe. Maybe I'm wrong here. Maybe you can sit there and work through these problems long enough and you'll eventually figure out and wrap your brain around the concept that time is not at all what you've thought it is your entire life... But I think that's more of like a way that we have to teach people things, and the way they have to kind of like be curious and be okay enough with being frustrated at not understanding something to kind of dig into... And I think that's a better marker of how experienced someone is and the length of time they've been doing something. Curiosity, at least for this section of things...

I think part of the problem here ultimately is that -- it's like we're trying to storypoint right now. We're trying to reduce a huge space of things down into a single entity... And it's like, how you gain experience as a frontend engineer is vastly different than how you gain it as a backend engineer, and it's different from a distributed systems engineer, or from an embedded engineer... There's all these different types of engineering, and I think that saying length of time is like an easy thing, because that's something you can trace across all of those different types of engineering... But I think it means a different thing in each space. So I don't think they're as comparable. I have no idea if any of that made sense... Sorry if it didn't. \[laughter\]

**Jerod Santo:** It seems like what you're arguing for mostly is for diversity of experience... Because the unique perspective is what sometimes - and in the case of Leslie Lamport - actually leads to the innovation. Looking at it from a perspective that nobody else looked at it from, because of his background. Or because of your background as a writer, you look at software differently than I do, for example. So that can be very profitable for all of us, and beneficial, is having diverse perspectives, chipping away at these various problems, which I think we're all for.

**Kris Brandow:** And this is why you're the producer. You've put that perfectly, you know? \[laughter\]

**Jerod Santo:** Well, I think when you take the diverse perspectives and then you also give them experience - like, let's all get the experience - I think they all get better. I think he would confess that he's probably better at everything he did when he was in the business for 25 years than when he was in it for five years. That being said, a lot of newbies invent brand new, radical things that nobody else sees, because they don't have the experience to say "Well, that won't work." They just try it. And the rest of us are like "Well, that's never gonna work", because we've been in the business 25 years.

So a lot of new things, new techniques, new frameworks, thinking about it differently, come out of people who are 21, 22, or three years into the business. Maybe you're not actually young, but young to the industry.

**Ian Lopshire:** So just kind of riffing on something you said... I think the one piece that you're discounting about time is you might be able to gain all this knowledge very quickly, but what time does provide is opportunity to have decisions that you thought were good, turn out to be bad... And without that time aspect, you don't gain any of that experience. You need the retrospect, you need to look back and evaluate if this was a good or bad decision.

**Johnny Boursiquot:** I wish I could find some of the people that have written software I've inherited, and be like "Look. Look at what you've done. Look at what you did." \[laughter\]

**Jerod Santo:** "Look how bad this idea was." That would be a cool reality show... It's like, Johnny just chases down people that used to work on software and shows them the ramifications of their decision-making. That would be a good show. "Look at what you did...!" \[laughs\]

**Kris Brandow:** \[40:02\] The thing I just thought of when you were saying that, Ian, is like - time is a useful way of comparing yourself, and on your own trajectory. So it's like, you at one year of experience versus you at ten years of experience, or ten years of doing this, hopefully you have acquired a lot more and you've moved a lot more.

I think the thing I'm pushing against is that that's not comparable between people. I think that's the issue at hand - ten years of my experience is very different from ten years of Johnny's experience, or Jerod, or your experience. That's different, and that has a factor of what is the industry like over the course of ten years... Sometimes we have a lot of change in a small period of time, sometimes there's not much change in a period of time... But yeah, I think Jerod, you put it precisely there, with just like the diversity of experiences that you wind up having.

I think part of the thing that I disliked about this kind of incremental thinking approach to our industry and the way that we kind of ramp up engineers from SE1 to SE2, to senior, to staff etc. is that a lot of the times when you're in those lower roles, you're kind of indoctrinated into the way of doing things that everybody else is doing, because it's assumed that the people that have more experience know how to get things done, and they've been doing this longer, and they've been successful, so they wanna give you all the tools and they wanna shortcut you from having to do the work that they had to do. But it's like, the work that they had to do is what made them successful. So you can't get around that.

And I've seen at a number of companies I've been at, this attempted to happen. We've even had someone -- a senior in a company I was talking to, and my philosophy is just hire good people, hire people that are curious and wanna learn, and you'll do well. And he was like shocked at this. "We can't do that. My philosophy on this is I hire you, and then it's like a cook in the kitchen. I teach you how to chop carrots, I teach you how to chop onions, I teach you how to chop this, and then you show me that you can do those things..." And the thing I very much disliked about this is that kind of "I will show you how to do this thing, and I will show you how to do things as I know how to do them, and that's the way that we learn and grow." But that really pulls away a lot of the diversity that we'll wind up having, because once again, we're saying "Well, I'm the one with the experience and knowledge, so I'm gonna give that to you. And you're gonna have it, and you're not gonna have to make the same mistakes that I made."

**Jerod Santo:** I understand where you're coming from. I don't know if in practice it works out that way all that much, because you yourself buck against that. Maybe you go through it for a little while and you're like "Well, this is BS. I'm not gonna do it that way. This way is better." And I think that people that have those different experiences will start with their boss or their mentors set of rules, and "Here's how you're gonna do it, here's how you chop celery", and then eventually their experience and their knowledge, they're just like "Yeah, I actually learned this other way. I'm gonna start doing it that way." And maybe in certain circumstances you get in trouble for that, or whatever.

But that brings me to Sandi Metz's rules. Are you guys familiar with these? Sandi Metz is a great OOP teacher/programmer, very experienced. She teaches people how to do object-oriented programming... And she has rules that she just hands out to new developers. And the rules are "Classes can be no longer than 100 lines of code." She has a set of rules, and she's like "No, you're gonna follow these rules. Methods can be no longer than 5 lines of code."

Most of her work I think is in Java and Ruby, most of her experience and the most people she's teaching. "Pass no more than 4 parameters into a method; hash options are parameters." This to me is paint by numbers, to a certain degree... And I would never follow any of these. But... Okay, a couple of them. 4 parameters is -- I mean, these are good rules, but I probably wouldn't follow them. But if I was just getting started and needed to ramp up, or if I had somebody starting fresh and I was like "How do I do this?", I think starting with a strict set of rules is actually a pretty good place. And then you say "Follow these--" This is Sandi Metz, this is me. She says "You just follow these until you know better. And once you can explain why you're breaking the rule, then go ahead and break the rule. But until then, just follow the rule and your code will be better." That's a pretty useful teaching technique that a lot of people have appreciated.

**Johnny Boursiquot:** \[44:15\] And you need time for that understanding.

**Jerod Santo:** Exactly.

**Kris Brandow:** I feel like the last part of what you said there is the crucial part. Like "Use these until you can basically articulate why they're wrong." And I think there is some form of time component to that, but I think some people will be able to do that much quicker than other people.

**Jerod Santo:** Yeah.

**Kris Brandow:** This is just me begin very, like, "I'm glad I never started off as a junior engineer, and I don't want people that are like me to have to slog through that", when they're like "No, but I wanna go design things", and people are like "But you don't know enough. You haven't been around long enough." It's like, "But I'll be around longer."

**Jerod Santo:** Well, when I was green behind the ears - or wet behind the ears; I don't know how these sayings go. When I was green, I wanted rules. I wanted structure, because I didn't know how to do it otherwise. So I was happy to have them. And that's why in that chat I did say "Some people just wanna paint by numbers for a while." That "for a while" - it was a flippant statement, but that was part of it... Because I don't think anybody should want to paint by numbers their entire career. What kind of joy in life are you gonna get out of that? That being said, there's worse careers, where it's worse off, so...

**Kris Brandow:** You'd be surprised... I've met a number of people in my career that have just -- they're literally just like "Just give me the task. I will do it. That's all I wanna do."

**Jerod Santo:** I have, too. I've never understood those people, but I'm happy that they're happy. I totally get it. But I think you should want to advance. I don't know... From my perspective, you should wanna go on from there. If you don't, Godspeed.

**Kris Brandow:** Once again, diversity of perspectives.

**Jerod Santo:** Yeah.

**Kris Brandow:** Like what you've just said, of when you started, you wanted a nice set of rules. I think the thing that actually got me to be in this industry long-term was that in the beginning there weren't any rules, and I had to figure all of this stuff out. And even though I was quite literally screaming at my computer sometimes, because I had the unfortunate start in Drupal, which if you ever use Drupal, it's like the most complex piece of software on the planet; it's absolutely ridiculous. But that screaming is actually what pulled me in, and what made it worth it for me at the end of the day... That I figured this stuff out. I learned how this thing worked. I understand this now. And that is what gave me the energy to continue going through the industry. And I think if I had had someone just kind of giving me the answers, or giving me the rules, it wouldn't have stuck with me. I would have found something else where I could have done that more curious and creative exploration.

So I think at the end of the day what we're all saying here is diversity matters, and understanding that we are all different, and we have different backgrounds, and there's no single type of engineer at the end of the day. And we should have roles in organizations and promotional paths that allow us to be the diverse individuals that we are. Not thinking that the kind of average engineer is the one that everybody should go after, or aspire to be.

**Johnny Boursiquot:** But we won't. We're a cog in a machine somewhere, and we just -- \[laughter\]

**Jerod Santo:** Unfortunately, there's a lot of work to be had in turning spreadsheets into web forms... And that's what a lot of our jobs are. Take this spreadsheet, put it on the web.

**Kris Brandow:** Spreadsheets though... Let me tell you, spreadsheets are one of the most advanced forms of programming that is out there.

**Jerod Santo:** I don't disagree.

**Kris Brandow:** People are like, "Oh, you just write Excel." I'm like, "Have you tried building something good in Excel?"

**Johnny Boursiquot:** I've seen enterprise-scale software built in Excel, my friend. You have not seen software until you've seen software written in Excel.

**Jerod Santo:** Yeah. I've seen efforts to replace Excel with custom software written to do the exact same thing, but the people won't adopt it because they're just -- they built that Excel themselves... Like, "No, this is how I do my job. Don't make me do my job some other way."

**Kris Brandow:** And half the time that custom software doesn't even do everything the Excel does.

**Jerod Santo:** That's what they're saying. \[laughter\]

**Johnny Boursiquot:** Exactly.

**Jerod Santo:** \[48:04\] That's their own point. "This is worse off than what I have now."

**Kris Brandow:** I feel like Excel is like a peak of programming. It's just like, I don't know, this is like this super-dynamic, instant compilation and -- you just start plugging in some formulas and you can just do some crazy stuff.

**Johnny Boursiquot:** Yup.

**Kris Brandow:** If you couldn't tell, I just built out an entire system using -- not Excel, but Google Sheets. So I am very hyped on the spreadsheet train right now.

**Johnny Boursiquot:** Hey man, spreadsheets will get you a long way. Don't sleep on spreadsheets. Look at Airtable - they built an entire business around spreadsheets... \[laughs\] I mean, come on... You know.

**Jerod Santo:** Yeah.

**Kris Brandow:** Yeah, yeah.

**Break:** \[48:39\]

**Kris Brandow:** Alright, so we've gotta get to our last segment, but does anybody have anything else they wanna say before we jump into that?

**Jerod Santo:** I think the coding versus programmer distinction is kind of silly.

**Kris Brandow:** Oh, come on, Jerod. Now we have to --

**Johnny Boursiquot:** Disagree. I disagree. Hard disagree. \[laughter\]

**Jerod Santo:** Should I save that for unpopular opinions? \[laughter\] No, we've gotta move on. Well, I mean, we should play maybe a little bit of the audio from Leslie Lamport, or at least let people go listen to what he had to say about it... And Johnny described it a little bit, but he does make this distinction between being a coder and being a programmer...

**Leslie Lamport:** People confuse programming with coding. Coding is to programming what typing is to writing. Writing is something that involves mental effort. You're thinking about what you're going to say. The words have some importance, but in some sense even they are secondary to the ideas. In the same way, programs are built on ideas. They have to do something. And what they're supposed to do - I mean, it's like, what writing is supposed to convey.

If people are trying to learn programming by being taught to code - well, they're being taught writing by being taught how to type. And that doesn't make much sense.

**Jerod Santo:** And I think he elucidated it in a way that was okay... I think that these are interchangeable terms that mean different things to different people, and we end up splitting hairs and inventing our own definitions of the words in order to kind of do a weird form of gatekeeping where we're like "You're not a programmer, you're a coder." And I don't know, I just feel like -- come on, guys... We're all trying to do the same stuff here... So that's my hot take on it.

**Johnny Boursiquot:** People who actually say that though in real life - yeah, those are d-bags. Don't listen to that nonsense.

**Jerod Santo:** Agreed.

**Johnny Boursiquot:** This is something that when you're doing some introspection, and you say "Hey, what does someone like Leslie Lamport mean when he says there's a difference between a coder and a programmer", within the context of the things that he was building and actually putting together and innovating on? What does he mean in that context?

Or if you go into any other company, do they say "Oh, for these people - we consider them coders. We pay them less than those that we consider programmers." I mean, nobody actually does this, right? So it's supposed to be something that helps you -- personally, I think it's introspection. Like, am I coding, am I programming, am I engineering? I don't tend to use coder vs. programmer, I tend to use coder and engineer more readily than I do programmer, because I think --

**Jerod Santo:** What's wrong with programmer?

**Johnny Boursiquot:** Nothing wrong with programmer. I think engineering is --

**Jerod Santo:** I agree.

**Johnny Boursiquot:** \[laughs\] I think engineering is what happens when you add time to the mix, where your decisions were good decisions back when you were coding.

**Jerod Santo:** But that's your definition of engineer. I think that we all kind of create these definitions, because I've had these conversations with hundreds of people, and they all define it a little bit differently, and a lot of times it's positioning. And I don't think that's what he was doing. But I think what he was doing was putting two words on what I consider busy work, and then hard work. He was like "Here's where I need to be creative and thoughtful, and then the rest of the time I'm coding." It's like, that's not how other people use the terms, so I felt like it was a weird play. But in his headspace if it made sense, I'm not mad at him or anything. I just think that when we tend to use coder, programmer, developer, engineer, architect, we're positioning. And coder tends to be at the bottom of that totem pole, and I agree with you, people do that; they're kind of d-bags. But they too tend to kind of do that, so I just think it's all kind of silliness.

**Kris Brandow:** \[54:27\] Yeah. If you don't know who Leslie Lamport is - because he's the same person that's like "Unit testing is BS. You should be writing TLA+ instead." \[laughter\]

**Jerod Santo:** I heard him say that. I was kind of interested in the TLA+ thing. I'm like, "Dang, am I a total loser?"

**Johnny Boursiquot:** "Brush up on my math here..."

**Kris Brandow:** Once again, he's a mathematician. He's like, "Why are you taking this -- oh, does addition work? Let me add 2+2, and 4+" It's like, no, just write a proof to make it work. But I think the reason what he said about coders versus programmers resonated with me so much is because it's something I think I've been talking about for like four years now, of like - there are people that love to study the language, and love to write the language well, and do that well. And there are people that are trying to tell a story with it. I feel like the programmers are the people that are trying to tell a story. They're trying to solve a problem. And they might not be the best at writing actual code.

I think there are plenty of novelists out there who are absolutely crap with the English language, and their vocabulary is super-tiny, but they tell phenomenal stories. And then there's another group of people who are absolutely fantastic with the English language, and know all of the little intricacies, and read the Chicago Manual of Style to themselves to go to sleep at night... And those people are extremely necessary to us.

**Jerod Santo:** Speaking from experience?

**Kris Brandow:** I know people who have. Not me. I tried, but...

**Jerod Santo:** Okay...

**Kris Brandow:** But I think for us as an industry, we're missing that. Because the writing industry - those people are called editors, and they are in some regards at the top. You think of the editor-in-chief of a newspaper - that's top dog, and that's not a person who's a writer, that's a person who's an editor. And that's a different training skill.

I remember I was talking to Angelica once and she mentioned how when you're in J-School, you can choose to be a writer or an editor, and you go down these different paths and you learn different things...

**Jerod Santo:** Sure.

**Kris Brandow:** ...and I think that's a distinction we need to make as an industry. Because the reason we can swap these words out so easily is because we haven't taken the time to really say "Does the distinction between these two roles matter?" And I think it does.

I've run into a lot of people who are excellent at taking code that's written and making it phenomenally better, getting better algorithms in there, making it cleaner, doing all that sort of stuff. But if you ask them to write the code themselves, they'll be like "I don't know..." They'll be like, "That's not what I do." And there's also people that are really good at solving the problem, but don't use efficient algorithms, don't design the code well, don't write comments or document anything... And I think you need to have both of those people in the organization, and I think it's valuable to separate those two things, and I feel like that is, in his own special way, the thing that Leslie Lamport was trying to get at.

**Jerod Santo:** I think that's fair, and I do think he was being introspective, like Johnny says. I don't think he was being obtuse, or damaging in any way. I agree with you, Kris; I think that we need to go through that work... If we could go through that work and have an RFC or a spec that says "Here's what these different roles mean", and we're all going to agree, then I would be okay with it. It's that they mean different things to different people, and I hear people using them as a way of positioning or gatekeeping a lot, and I think that does more harm than good.

**Kris Brandow:** Yeah, I absolutely agree with that. We should be looking at these as positions on equal footing, not as like "Oh, you're a coder? You're not as good as me." I hate it. I don't like when people do those things. Anyway...

**Jerod Santo:** Alright, sorry for throwing that bomb in there when you were trying to transition...

**Johnny Boursiquot:** \[laughs\] Last minute, he's like "Yeah, hey guys..."

**Kris Brandow:** Are you supposed to be the one that's keeping us on time? \[laughter\]

**Jerod Santo:** I'll edit this whole part out...

**Kris Brandow:** Okay, time for unpopular opinions...

**Jingle:** \[57:51\]

**Kris Brandow:** Alright... Ian, do you have an unpopular opinion?

**Ian Lopshire:** I think I do, actually.

**Johnny Boursiquot:** Hang on...

**Jerod Santo:** Alright...!

**Kris Brandow:** Becomes a host, and now all of a sudden he has unpopular opinions...

**Jerod Santo:** He's official...

**Ian Lopshire:** Alright, so I've seen a lot of pushback on Twitter and everywhere about this idea of like a take-home project during interviews. I think that's okay. I think a take-home project is fine. I think there should be a time limit; if it's more than 3-4 hours, it should be paid. But I think that take-home projects - great way to interview. Way better than the whiteboarding and the crazy other things that they do in interviewing.

**Kris Brandow:** I will agree with you, but only if it's actually something that has to do with what the company does, so no LeetCoding, none of that nonsense... And also, if the person doesn't have a crapload of open source code out there. The thing that is annoying is when it's like "Look, there's all of these examples of me being able to write code in the wild", and they're like "But we just need you to write some code for us." That irks me a little bit. But if it's something related to what the company does, I think it's alright. But yeah, definitely make it paid... And also, give people as much time as they want...

**Ian Lopshire:** Of course.

**Kris Brandow:** None of this "Get this back to me in a week." If it takes them a month, it takes them a month.

**Ian Lopshire:** And by take-home project I don't mean any kind of LeetCoding thing, but an actual... I've had it where I've done an issue on a public repo, that kind of stuff. I think that's one of the best ways to do it.

**Jerod Santo:** So I would agree with you here... So you've got two for two.

**Ian Lopshire:** So maybe it is popular...

**Jerod Santo:** There's good ways of doing it and bad ways of doing it. We had Jacob Kaplan-Moss on the Changelog - I'll link that up - talking about principles for hiring engineers... He's put a lot of thought and time into this process; he's been hiring for a very long time... And he has these rules that you can follow, that he thinks are empathetic and fair, and a good way of doing that.

He also describes how hard of a problem it is, finding out if somebody is a good match. So I'll link that up; it's worth listening to if you haven't yet. Johnny, are you with him? Can we go full-panel-agreement?

**Johnny Boursiquot:** Yeah, I think especially when you start to rank from worst to best practice around this stuff, I'd definitely pick a take-home instead of a "Let's flip this binary tree together on this whiteboard" kind of thing.

**Jerod Santo:** On a whiteboard, yeah... Too popular, Ian.

**Ian Lopshire:** So a popular opinion. My bad, my bad.

**Kris Brandow:** \[laughs\] I do feel though that people when they go to vote on the Twitter poll, they'll probably be like "No!" We added a lot of nuance to that unpopular opinion, so...

**Jerod Santo:** Yeah, we'll cut all that out, too. \[laughter\]

**Ian Lopshire:** None of that nonsense. \[laughs\]

**Kris Brandow:** Johnny! Do you have an unpopular opinion?

**Johnny Boursiquot:** Yeah, I don't know if that's gonna be unpopular, but I know for me something I've been struggling with - passion is so overrated, man... It really is. I have a bunch of projects that I'm working on; I was passionate about them when I first started. Now I'm not passionate about them anymore, but I've still gotta get them done; I've still gotta ship them, I've still gotta do the writing, do the recording, do all the things.

I wanna move on to the new and shiny thing that caught my eye three months ago, but I can't, because I made commitments and I've gotta get these other things that I was passionate about done. So passion fades. The only thing that really matters is doing the work. Do the work, get it done, ship it, and move on.

**Kris Brandow:** I agree with you. I think I've read a few things that are like, you know, passion is good to get you started, but it's the stubbornness that actually winds up being the thing that gets you through it all. You've gotta be stubborn about something, and be like "I'm getting this thing done, because I said I wanted to get it done, and I like the idea." But yeah, I think passion is overrated. Ian, Jerod?

**Jerod Santo:** It's a good way to pay somebody less money to do the same job, is for them to be passionate...

**Johnny Boursiquot:** Oooh...! I like that.

2:\[01:01:53.29\] So it seems like -- it could be predatory at times, I think, to call on someone's passion, because their excitement, their pure love allows them to say "Well, I don't need as much money" or "I'll work more because I'm passionate." So I think it kind of can be that way...

**Johnny Boursiquot:** Hm. F U, pay me. \[laughter\]

**Jerod Santo:** That's your experience talking, Johnny... No, I agree with you, I think it is overrated... And it's the whole 99% perspiration thing. 1% inspiration, 99% perspiration. It goes back -- I don't know who said that originally. Probably Mark Twain, or Abraham Lincoln, or Albert Einstein. One of those three says all the quotes.

**Ian Lopshire:** I'm along the same lines. I think passion is an internal shortcut to getting things done, but at the end of the day it's the output that matters. So yes, I agree. It's overrated.

**Jerod Santo:** No unpopular opinions on this episode.

**Johnny Boursiquot:** Goodness.

**Kris Brandow:** Okay. Jerod?

**Jerod Santo:** Alright, I've shared this one elsewhere, but I'll share it here to see if gophers agree or disagree. I think that most of the time that we as developers spend tweaking our configs, customizing our shell, putting our shortcuts into our text editor, writing those one-line shell scripts - most of that time is time not well spent.

I think we spend hours to save 30 seconds. I think we could just learn the editor as it exists, and I think that we could get a whole lot done in a whole lot less time if we weren't always tweaking stuff.

**Kris Brandow:** I agree with that.

**Ian Lopshire:** I agree.

**Jerod Santo:** Dang it! \[laughter\] Johnny?

**Johnny Boursiquot:** I will disagree... I will disagree.

**Jerod Santo:** Yes...!

**Johnny Boursiquot:** Because there is a productivity gain that materializes once you understand how you work best, how quickly your hands move across the keyboard, for example... It can be as simple as that. Having the right shortcuts in the right place, or being able to write your script, invoke it on your shell in the morning and it does a bunch of things for you that you otherwise would have had to do manually; it saves you time.

I think all these things have value, and I will agree that there's a threshold. There's an amount where you have diminishing returns on that stuff. So if I'm gonna do something that yes it's tedious in the world of SRE toil is a thing, and sometimes we can't always fix toil to the degree we'd like to... But because doing the toilish thing that takes an hour this week and the next week and the other week - a total of three hours - as opposed to sitting down and taking up the entire week to automate something... You spend like 20 hours to automate something that takes 3 hours - yes, you've automated it, but what was the gain? Especially if it's something that might go away in two months.

So there's decisions to be made as to where is the value, where does this start diminishing. So I think there's nuance there, on its face, as you're about to cut out all the nuance that I've just said... \[laughter\] I will say "No, I disagree."

**Kris Brandow:** I feel like though that you just agreed with him... Because he said that --

**Jerod Santo:** He did. He agreed with me. \[laughter\]

**Kris Brandow:** He didn't say it's all useless...

**Jerod Santo:** But I hedged. I said "Most of the time that we spend..." And the reason I say that is because we have a natural inclination - and I speak from my own personal experience" to overdo it, to over-automate, to over-tweak, to over-customize... Because it's fun, it has dopamine hits, and it's a good way to procrastinate and not do what we're actually supposed to be doing... So we tend to overdo it. So most of the time we spend, it's not time well spent. I'm not saying none of it. Definitely, if you can save 30 minutes every day by spending two hours one day, and you're gonna run that for the next year, you're way in the green. Or in the black? I don't know colors very well. I need to paint by numbers. \[laughter\]

**Kris Brandow:** It's in the black.

**Jerod Santo:** You're in the black.

**Johnny Boursiquot:** Then you just have to change your opinion to "Always" not "Sometimes", and then I'll be right.

**Jerod Santo:** Okay. That would be more bombastic, probably more unpopular. I'm still learning. I'm still learning how to be as unpopular as I can be.

**Kris Brandow:** \[01:06:00.10\] Okay, I've got an unpopular opinion...

**Jerod Santo:** Let's hear it.

**Kris Brandow:** I was thinking about this episode and I was talking to a friend about it... I will make the assertion that Rust is the Esperanto of programming languages.

**Johnny Boursiquot:** Oh...!

**Jerod Santo:** Hm...

**Johnny Boursiquot:** \[laughs\]

**Jerod Santo:** Say more. \[laughter\]

**Johnny Boursiquot:** And for those who don't know, you'd better go watch Encanto.

**Kris Brandow:** Esperanto is this language that's designed to be like easy to learn... Basically, a better version of all the languages that we have, and to do all those things in a more capable way, by making it easier for people to communicate in all of this... And it has all these aspirations, and in some ways it's kind of mean to replace languages like English, which are difficult to learn, very wordy, really annoying if you don't learn it as your first language... And I feel like that's kind of like what Rust is, where it's kind of targeting, trying to replace C, replace this dominant language in the world. And while it is a nice language - Esperanto is a nice language; I know a fair bit of Esperanto - the aspiration that it'll be the language that everybody will speak, or it will replace something like C in the future is just incorrect, and it will not do that.

I'm not saying we shouldn't have it, I'm just saying that it's basically Esperanto, but in programming language form.

**Jerod Santo:** Okay. I don't have a take on that. I don't know enough about Rust. I can't either agree, nor disagree.

**Johnny Boursiquot:** I just thought you were talking about Encanto. \[laughter\]

**Kris Brandow:** No, no, no...

**Johnny Boursiquot:** That's an actual language... And you learn something new every day.

**Kris Brandow:** Yeah, Esperanto is a real language that people around the world speak and write.

**Johnny Boursiquot:** Alright. You learn something new every day.

**Jerod Santo:** Where is it mostly spoken?

**Kris Brandow:** It's one of those global languages. So it's not centralized anywhere. Literally, someone in the early 1900's sat down and was like "I want to design a good language." So they sat down and they literally created a language, and was like "Okay, this should be easy to learn, it should be very consistent..."

**Jerod Santo:** Right.

**Kris Brandow:** It is a very consistent language. It has a nice set of features. It's kind of the opposite of German, or something, where it's just like "Why do I have nine different versions of "the"? It's kind of the opposite of that.

**Jerod Santo:** Right. I think it's like the XKCD, there's too many specifications. What we need is one more specification that fixes all the problems with the other ones. And then there's one more specification...

**Kris Brandow:** Yeah, yeah.

**Jerod Santo:** N+1.

**Kris Brandow:** That's where Log15 got its name. The popular Go logging package Log15 got its name from that, from the XKCD comic.

**Jerod Santo:** Wow.

**Kris Brandow:** That's why it's called Log15, because there are 14 specs; we need to make a new one, and now there are 15.

**Jerod Santo:** Oh, it's the 15th logger.

**Kris Brandow:** Yeah.

**Jerod Santo:** That's cute, I like that.

**Johnny Boursiquot:** That's a resume-driven project right there. \[laughter\]

**Kris Brandow:** "I wrote a logger." Okay, well - I guess my opinion is not unpopular... Or I guess it's neither.

**Jerod Santo:** We'll see. We'll have to vote it out. We'll have people -- I don't know if gophers are gonna... Is it a chance for gophers to dunk on Rust? It might go popular just because of that.

**Kris Brandow:** Hm, yeah...

**Ian Lopshire:** If I saw this on Twitter, I'd click "Yes, I agree", but I don't have a reason. \[laughter\]

**Jerod Santo:** That's how most of the voting goes, I'm sure...

**Kris Brandow:** I told my friend that I was talking to, I was like "This is gonna be my unpopular opinion in the next episode", so... I'm sticking to that.

**Jerod Santo:** There you go, friend.

**Kris Brandow:** Alright... Well, this has been a fun episode, hopefully not too meta for our listeners out there, and you've learned a bit about the myth of incremental progress... I feel like it's buried somewhere in the content of this episode... But yeah, so thank you for joining me, Johnny and Jerod, and welcome, Ian, and thank you for joining as well.

**Jerod Santo:** Thanks for having us.

**Ian Lopshire:** Yeah, it was fun.
