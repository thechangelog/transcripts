**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer. Today we're talking about publishing and programming, and we have a special guest, Peter Cooper, of Cooper Press, who published the famous Go Weekly Newsletter. Hello, Peter. Welcome.

**Peter Cooper:** Hi! Fantastic. I'm looking forward to this.

**Mat Ryer:** It's great to have you. We're also joined by a couple of regulars, the kind that you'd see at your local tavern, for example... Johnny Boursiquot and Jon Calhoun. Hello!

**Johnny Boursiquot:** Hello!

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** Pretty good. I feel like that was directed at me.

**Mat Ryer:** No, no, no... I'm not trying to make any suggestions whatsoever. Peter, thank you very much for joining us. This is actually the first time we've met, but I've been following the Go newsletter since it started, which was - when?

**Peter Cooper:** Well, I didn't start it. A guy called Matthew Cottingham started it back in -- I think it was around the early days, like 2012, somewhere around then... And he did about 40 issues of it before I took over. So I didn't take over until the start of 2015. It was kind of a little bit longer than that.

**Mat Ryer:** Yeah. But it's become such a staple for the Go community, hasn't it? I know it's a place where I go to find out what's going on. It's definitely one of the big resources. How has that happened? How do you think that came about?

**Peter Cooper:** Well, I kind of built on what Matthew had already done. He did the hard work at the start. I've got a history in doing these newsletters for other different topics as well, particularly Ruby Weekly, which is the community that I'm originally from. I'm still very much a Rubyist even now, although I do play around with every language, to a certain extent... But I had to do that work, and I knew the people in the community, and I could build things up, and he was in a similar position with the Go community.

So I managed to put together a deal with him; he didn't wanna do it anymore, and make that sort of weekly commitment, because it is a pretty big thing to publish something every single week... And because I was already familiar with doing it, I got in touch with him, I said "I've noticed you've kind of missed a few issues here and there" and he's like "Yeah, I need to focus on other things in my life...", and I took it over and we kind of came to an arrangement.

\[04:02\] That's kind of where it all just comes from. I kind of built on that initial core of people that he had originally brought together... And I can't remember how many subscribers it had when we bought it, but I think it was like within four digits. It was like 4k, 5k. It wasn't huge, but it was enough that there was something to build upon.

**Johnny Boursiquot:** I'm wondering what got it on your radar. I'm curious, did the newsletter -- you're so into newsletters... Every time I think of you, I think of newsletters. Did the fact that there was another programming language newsletter out there that sort of piqued your interest, or was Go the first thing that drew you in?

**Peter Cooper:** A mixture of both. I always keep an eye on what newsletters are out there, but nowadays I can't keep track, because nearly every single person's got one for their own blog, and everything... But at the time it was a lot less common. You could count like a hundred different programming-related newsletters, and that would have been pretty much all the ones regularly actually doing anything, as opposed to thousands now...

And yeah, I was interested in Go because I've always been interested when there's something new coming along in the programming space. That was also true when I first got into Ruby back in 2004 - I saw something about Ruby on Rails on Slashdot, and investigated, and turned my nose up at it for a bit, and eventually got into it. There's a whole story behind that, but this is true for most technologies that come along.

When Go first came along and I first saw those posts that the Go guys were doing, it struck me... Because if you go back even further from Ruby and all the rest -- I was originally a C programmer essentially; I sort of learned that when I was a teenager in the '90s, and spent a lot of time with C and Pascal, and doing x86, and doing some demo coding, and that type of thing... And Go just really appealed to me because I could see the pragmatism of languages like -- perhaps Python is a better example than Ruby, in this case... Although the way I code Ruby is in a very Pythonish kind of way, I must admit... But I saw that practicality, mixed with the low-level aspects that Go gives you, and it just was so readable.

I know that's one of the goals of the project, to make a readable language, but it just kind of struck me, so I was like "I'm interested in this. I wanna get involved in some way." So I did actually start including things in some of the other newsletters that I was doing, saying "Oh yeah, here's Go, and this is a kind of cool thing. Don't switch to it, because I'm doing a Ruby newsletter, but it's still kind of cool anyway."

Of course, many people - like Mark Bates, for example, who is from the Ruby world - did switch to Go, and now he runs the Buffalo project...

**Mat Ryer:** Yeah, and as I hear, he's not welcome back in the Ruby community at all. \[laughter\]

**Peter Cooper:** Well, I don't know about that, but...

**Mat Ryer:** No, I'm sure that's not really true.

**Peter Cooper:** \[laughs\] Yeah, so I'm a big fan of Mark's. But yeah, a lot of people from the Ruby world did actually come over to Go... Perhaps not as many from other languages. I think a lot of Pythonistas went into Go in particular, but a few Rubyists did... And I was interested, but I wasn't interested enough to become a full-time Go developer, or anything like that.

I did have a publisher approach from the very early on, because they knew about my work writing Ruby books, and they were like "Oh, we want someone to write a beginners Go book." I think it might have been Manning; I can't remember. I think it was Manning, or Addison-Wesley... I went into talks with them and I just decided against it, because I didn't actually want to learn a whole new language and get that deep into it. I was happy with Ruby. But it put it on my radar.

I was learning enough Go that I kind of knew how it operates and what its ethos was, and I knew that outside I was doing in publishing, that it was something that I'd wanna cover at some point or another. Without necessarily being a Go expert, I knew enough about it that I could objectively look at the language and know how it ticked.

**Mat Ryer:** It's funny, I also used to do a lot of Ruby, and I knew of Mark even back then, from the Ruby community. He did a couple of books on it as well, and some posts, and whatever... But it's interesting, there's a lot of people that are interested - or people that were interested in Ruby and also have a shared interest in Go... But it's funny, if you think of the two languages, they're very different, aren't they? They're almost opposites, in some way...

**Peter Cooper:** \[08:12\] In some ways... I think it's because a language like Ruby attracts people that are -- I mean, just discount all the people that are beginners, that have just come to Ruby as their first language. Ruby otherwise attracts people that are kind of looking for something a little bit different.

That was definitely true in 2004, when David Heinemeier Hansson came to it and began working on Rails... Or, as it was, Basecamp, which then he kind of extracted into Rails. But he kind of came to it almost like a progressive developer. I don't know if this is the right world... It might be a little bit politically charged to use, but... I kind of see people like DHH and maybe some of us as being reasonably progressive.

That means that if we see a new language or a new thing, we'll look at it and we'll take it on its own merits and say "Yeah, this kind of fits in for this task, and I would use it if I wanted to do that type of work." That's true of Go for me, for example. I would use Go if I need that low-level access to concurrency, but I don't need something that is quite as low-level as C; if I want some kind of guards around what I'm doing, I would pick Go. I wouldn't pick Rust, because I just don't get along with that language at all. I tried it and I was just like "Nah..." Go feels a lot more C-like to me; C with the good parts, and the bad parts removed.

I think there's a lot of progressive developers who come to a language on its own merits, as I say. So the fact that it's not the same as Ruby, that's fine. If I wanna go back and I wanna build something like a Rails app, I can come back to Rails. I don't have to just think "Oh, I'm just doing Go, and now I have to do it as a Buffalo app." Some people do, like perhaps Mark for example, but I'm happy switching between languages. Maybe that's just an aspect of the work I do... But yeah, I can just take it on its own merits.

**Mat Ryer:** Yeah, I think that's quite healthy for everyone to think like that. It's very easy to get into your little world, in an echo chamber, and then you start seeing tech wars, and things... Yeah, of course, sometimes it's good to choose one thing, sometimes another.

**Peter Cooper:** I come from the world where we used to do in-line code a lot. So this was definitely true in the Perl world, to a certain extent, which was the language I focused on before Ruby. I was very heavily into Perl. And it was quite common to sort of drop into doing some in-line -- you know, putting other languages in, just because it was kind of easy to do... But going back even further, when I was a Pascal developer in the '90s, and I was doing demo coding and stuff, it was really common in that space to drop back and do in-line x86 for setting up your mode X screens blitting pixels all over the place, and all this type of stuff... And to draw lines on the screen, doing sort of the interpolation of the pixel positions and stuff like that, you would drop down into x86 and it just made it a lot more performant on the machines of the day, which were very slow...

So maybe it's something that I would associate even with older developers; I don't know if that's fair or unfair, but... The idea of just seeing new languages and jumping backwards and forwards, and taking on bits and pieces from other languages just seemed very natural to me.

**Jon Calhoun:** So when you're jumping back and forth, especially with like a newsletter, I feel like it would be challenging to pick articles and things like that that you wanna share with people when these languages have very different ideas of what is correct or what is idiomatic for that language. In Rails or Ruby in general it's okay to have this magic and a lot of other stuff, whereas in Go it's the complete opposite. If you publish an article where it's like "Look at all this magical stuff I did", people are gonna react a little bit differently. Does that make it harder to find good articles and things like that to share with people when you're looking at the publishing side?

**Peter Cooper:** Now that you've explained it like that, I get your point... \[laughter\] But I think this is one of the things actually where people talk to me and they approach me at conferences and stuff and they're like "How did you even do this? I can't imagine doing one newsletter every single week, let alone 10-11, or whatever it is." And I'm like "Well, it's just easy. It's just what I do."

\[12:08\] I've just kind of realized it's actually something that I just am innately good at, just through practice and persistence and having done it a lot of times. It's a bit like when you see people that are really good at Rubik's cubes; you know, the cubes with the colored squares on each side. There are people that can look at that and then just go \[unintelligible 00:12:24.11\] with their fingers, and bam! They've solved the puzzle. And I look at it and I don't even understand where to begin, and how you even get to that point.

Maybe to a certain extent - and I'm quite a modest guy - I'm kind of doing that when I'm putting together these newsletters. I'm kind of looking at a lot of stuff, but I can keep those separate narratives in my head and I can just do it like a Rubik's cube, and bam, I produce what I need to produce and it's just correct. Obviously, I'm not saying I'm perfect. I do make mistakes. But as time goes by, I do get better and better, and I just seem to keep it in my head. I'm just saying natural skill might not be the most attractive answer, but it's kind of where I'm at.

**Johnny Boursiquot:** So what would you say if I told you that as a publisher with many readers, many subscribers, that you hold power over the ideas that are disseminated within any given of the communities in which your newsletters circulate? Do you think about it that way, or is this another aspect where we're kind of getting you to sort of realize it?

**Peter Cooper:** I kind of get the point; I probably don't realize necessarily to what extent. Because my interactions with the different communities tends to be reasonably detached. I only attend a certain number of events, just because I travel extremely poorly... So I don't often get to walk the streets, as it were, and hear from readers in the flesh very often. I don't even do calls like this very often, because I tend to find it as a thing that is quite difficult to do... So I operate in a very detached kind of way... But I see other people do very similar things, like industry analysts, for example. That's a really interesting can of worms to dig into if you ever get bored one day.

If you look at what some of these industry analysts do, at places like Gartner for example they write entire papers about how different companies are using JavaScript, or what web frameworks developers are using in the real world type stuff... And then they offer these for sale for hundreds of dollars, or thousand dollar subscriptions to big companies. I'm sure some of you have had run-ins with people from those types of places, where they're grilling you with questions... At least the people I talk to that work at startups are like "Oh yeah, my boss told me I've gotta speak to this analyst, and he just gave me all these pointless questions, and produced this crappy report."

I hear that a lot, but the reason I kind of am okay with doing it is because I do actually code, and I've worked with customers before, and I've built projects with software, and I've sold them, and all that type of stuff... So I feel like I've got enough skin in the game; I've released libraries, I build libraries and I do open source... I've got enough skin in the game that I kind of hopefully understand what that power is and how it relates to newer developers, even though I don't necessarily have the same day-to-day developer experience as everyone else.

**Mat Ryer:** It's really funny you mentioned that... And you mentioned that you are somewhat detached from the communities. It really doesn't feel like that when you look at the newsletter, so I wonder how the quality remains. It's always been very good. Sometimes, some of my articles have slipped through... \[laughter\] But on the whole, they are generally -- I mean, how do you keep that quality? It must be a difficult thing to do in the first place, and also sustain.

**Peter Cooper:** \[15:54\] I think part of it is that if the quality ever slips, I tend to get people telling me it has. So if I've included an article that is just really bad - and this happened a few times; I don't think with Go. I've made a couple of factual errors with Go that I've been pulled up on... Such as when I think I said the Go Modules proposal had been accepted by the core Go team a week before they actually accepted it; I had some people pull me up about that. It just said something like "Oh yeah, we're close to agreeing it", and I kind of went with "Oh, it's all been agreed."

So occasionally I have errors like that, and occasionally I will link to something that isn't quite right... But I tend to get people reach out and say "Why did you link to that? It sucks, blah-blah-blah..." and I tend to learn from that experience. But I don't know... You could say it's luck, you could say it's skill... It's just like trying to ask a footballer "How is it that you score those goals?" It's hard for them to break down and think about the meta-processes that they use.

I do spend time thinking about that type of thing, and I've realized actually when I'm trying to find other people to help me curate the newsletters, it's actually very hard to describe the process to someone else and get the right results back out. And that is actually why I do lead most of the publications (bar one or two that other people edit almost entirely). It's because I've really struggled to find anyone that I can instill those skills into. And maybe that's why I'm one of the very few people that are doing this sort of thing, at this sort of scale, week in, week out. It's just the thing that I'm good at.

**Mat Ryer:** Yeah, you're almost like a search engine that was built by natural selection somehow, and it's highly tuned to that particular thing... \[laughter\] But whatever it is, it does work, and it isn't an easy thing, for sure.

**Peter Cooper:** No... I mean, it kind of relates to a lot of things in my life. I might cover this a little bit more in-depth later, but one of the things that I've discovered in the last few years is I've actually diagnosed as being autistic. And actually, in that process, I've managed to reflect back on a lot of the things I've done in the past, or how I've acted, and how I see the world, and it really fits. I wasn't even going to have a diagnosis for that, it's just something that came out of a separate process I was going through... But I've realized that has actually given me some skills to really pick things up very quickly.

One of the things that I do - and I'm sure many of us are guilty of this - is you'll hear about a plane crash in the news, and you go onto Wikipedia and you read about the plane; it was a Boeing 737 Max, for example. You read about the plane, and you read about the problems it's had in the past, and then you read about a previous disaster that it's had, and then you see what the correlation is between that disaster and the new one. Then you dig into things about aeronautics, and then like two hours have passed and you've tried to learn about everything to do with aviation... That type of thing is just like every single day of my life.

When I see something like an article about a goroutine, or something like that, I'm immediately thinking like "Alright, goroutines. What's a goroutine? How does it relate to green threads in Ruby? How does it relate to a normal thread in the operating system? What's the correlation? How does the runtime fit in with everything?" I'm always trying to build up and deconstruct all of these ideas, on a daily basis. Every time I run into a concept, I tend to reconstruct it again, just because I find smashing things down and rebuilding them helps me get a mental grasp on stuff.

I talk to people about this sort of thing, and some people are just like "Oh, I totally get what you mean. I do the same thing", but a lot of people are just like "What are you even on about? I can't even keep up with what you're saying. You're speaking at 500 miles an hour..." So yeah, it's complicated, is probably what I've realized. But I'm just so big on absorbing concepts and learning things that even if I do make mistakes, I tend to relearn stuff again the next time, so quickly that I kind of make up for my past mistakes. That's probably the best way I can put it.

**Break:** \[19:52\]

**Jon Calhoun:** So when you're looking at all this different stuff - you're working on multiple newsletters and you're exploring different solutions to problems, and as you said, you deep-dive into these things, do you ever look at a problem in one language and think "These idiots... This is solved in other languages. Why aren't they just following their lead, or doing what they're doing?" Because I can imagine looking at different languages; that would be frustrating to see one language struggling with something that maybe two other languages just sort of figured out already.

**Peter Cooper:** I probably see that most on the social side of languages, actually. I do see it on the technical side, but as I mentioned before, I kind of respect the fact that different languages have different wheelhouses, and have different levels of responsibilities and how they interact with the world; that's totally fine by me. I don't necessarily expect a procedural language to take on lots of functional qualities to it, because I'm happy of the fact that there is a separate language that I can write stuff in F\#, for example, and I don't have to think about "Oh, let's take all these things out of F\# and bolt them into another language."

Now, I know the JavaScript world is very keen on "Let's just absorb everything from everywhere." I'm not. But when it comes to the social side, I do see a lot of the same mistakes occurring again and again. That's particularly true in how people interact with each other.

If you were in the Ruby world about 6-7 years ago - and I'm not even gonna recite a lot of the things that happened, because I don't even remember half of them, but there was a lot of drama in the community, and Ruby has kind of gotten this reputation of "Oh, there's always a drama kicking off in the Ruby community. There's always something happening at a conference, or there's always someone having a fight on a GitHub repo." JavaScript developers - or Node developers, more accurately - were kind of laughing on Hacker News and saying "We've got all the cool people. We don't have these kinds of fights." And I said "You will. It's gonna happen."

We had this in all the different worlds; going back where we've had internet communication and we can kind of say stuff quickly, this has always happened. There's always been drama, there's always been problems... And so, of course, it came to the Node world, perhaps in an even more explosive way than the Ruby world. We're now even seeing with Rust, for example, there's been low-level drama; it's been reasonably well handled, because that community has such a good grasp on social issues by the people at the top... But they've had issues. I saw someone today saying they were gonna quit doing documentation, and stuff. It just happens. It's just human nature, and I do see that between the different communities. But I think things actually get better the more we each adopt different languages and we each morph between being different types of developers.

So if you're doing Go, but you also do some C and you also do some Ruby, because you're participating in all those different communities at once, you can kind of bring back and forth some of the values and keep things going. And then really it's just a goal of bringing newcomers into the fold and making sure that they adhere to the community norms.

\[24:06\] I think that's something we're seeing a lot more happening now with codes of conduct, and things like that. People have really had to start thinking about this, and it can't just be some sort of "Old boys club" all the time. Actually, a lot of the most valuable contributions in our different communities come from a diverse array of people. It's taken especially some of the older people like me a really long time to see how that works, but it's really valuable and I'm really happy that that work is ongoing.

**Mat Ryer:** That's really interesting to hear. The way you talk about the drama in the Ruby world makes it sound like I wanna see that on Netflix.

**Peter Cooper:** \[laughs\] Yeah.

**Mat Ryer:** The Ruby Diaries.

**Peter Cooper:** Yeah, Netflix wasn't around quite at the time, but it would have been good.

**Mat Ryer:** Yeah, it would have been. It sounds great. Well, this still could happen, let's see... Yeah, that's really interesting. So the advice then to people is to reach out and join other communities as well, and go and mix with the different people, because you'll be exposed to different ideas, and all that is just good.

**Peter Cooper:** But be happy being a novice. That's one of my big things, I'm really happy to be the dumbest person in the room, because that is quite often the case. Even though I pick up things quickly, which is perhaps my plus point -- actually, that makes me more happy and more confident about being the dumbest person, because I know that I'm gonna look around the room and see all these smart people and be like "Oh, I can learn this from them, I can learn this from them, I can learn this from them." And I think everyone can do that, to a certain extent, whether or not you're a quick learner or not. Just be happy to go into those spaces and those new communities, and be happy to open that first page of a "Learning how to use Rust" book.

I'm not gonna use Rust as a full-time development job at all, but I've spent time learning it, and I've enjoyed it. It did teach me some things. So yeah, just do more of that.

**Mat Ryer:** Yeah, I think that's great advice. I agree with that thing about the joy in being a novice. There's nostalgia in it, isn't there? Because when we were first getting into computers, it was hard. We didn't know what we were doing. So it feels nostalgic to me when I encounter new languages or new ideas that I'm not familiar with, and I get to then be that kind of naive person and have to go and figure it out... Because that's such a fun process.

**Peter Cooper:** You just have to watch that you don't get overwhelmed. That's the real issue nowadays. Because back in the '80s or the '90s if I was picking up a language you'd have a book. That would be it. I would have a book, I would have no one else who knew anything about the topic, and that would be it. I would be treating that like a Bible. I would believe everything that book says. That doesn't happen now.

If you learn about JavaScript, someone will say "Oh, you should use Webpack", and someone will say "No, you should use Parcel for packaging stuff." Someone will say "No, you should use Snowpack", or whatever is this new thing that's come out... If you can't cope with that, you're gonna have problems, and I don't know what the solution is to that, because I've not really thought about it until I just said it. But there is that level of overwhelm when you come into new topics, and that's something that I think with the newsletters I've actually become quite good at seeing through.

If there's a lot of noisy people saying "You must use a certain tool", "You must use goroutines for absolutely everything", I can look through that and see "Well, I know just historically that what everyone is suggesting at one period of time is not gonna be cool in five years' time." So maybe I can get ahead of the curve by just not doing it.

**Mat Ryer:** \[laughs\]

**Peter Cooper:** I'm kind of exaggerating a little bit there, but we've seen it happen with REST, for example. I remember when everyone was like "Oh, REST, REST, REST." All the time. REST everything. And now people are like "GraphQL. Don't use REST. REST sucks. Use GraphQL for this and that." GraphQL is gonna be very uncool in ten years' time. It will be something else. Probably REST again, or REST+, or something... \[laughter\]

I guess just the older you get, the more you see these loops constantly happening... And yeah, maybe it gets easier to be a novice as you get older. I don't know, just throwing that out there.

**Johnny Boursiquot:** \[28:03\] A couple of points... The sheer volume of content coming out... And for me, this is really the value of the newsletters; they provide me with a filter. Basically, rather than paying attention to 300 things for that week, I can wait for the newsletter, whether it be one of yours, or maybe The Changelog on Sundays, or something... And basically just sit down and see what's been going on this week, and then even further do some selection myself and then say "Okay, these are the things that I consider to be important. These are the things that Peter or the Changelog team considers to be important", and then I'll take a look.

There's just too much. It's not a judgment call on the quality of everything going on, it's more like as a human being with a limited amount of time - I have 24 hours in a day, and a good chunk of it is already spoken for... There's only so much I can consume.

So going back to all the different dogma around "Oh, you have to be using this thing", or "If you're not using this thing, you're doing it wrong", whatever it is. To me, that's part of the noise. So I think over time - and maybe this is something that happens to folks who have been doing this for a while... I think over time my desire to limit the number of things I want to master - be it a programming language, or technique, or a particular way of doing something - over time, that desire has become stronger... Because I'm trying to narrow. Maybe this is like career suicide to some people or something, but I'm trying to narrow the things I have to pay attention to, because there's just so much of it out there... And I think that newsletters play a role in that. For me that's the value of these content filters.

**Peter Cooper:** Yeah, I think one way I look at some of that stuff is that I'm trying to be sort of 80th percentile with everything that I can find. I wanna be not the best, but just proficient in everything. I understand the big picture and I can connect a lot of dots together... Whereas I think perhaps you and people who I would consider to be senior developers or career developers essentially want to become 95th percentile or higher at a very small handful of things, especially over time. If you're going into Postgres consultancy, for example, you wanna be in that top 5% of people who know how to use Postgres, because otherwise who's gonna employ you as a consultant specifically about that thing?

I think a lot of developers move down that path and they become very specialized at a handful of things. What that means is that let's say -- and this is where I'm waving my arms in the air, just for everyone to kind of benefit who's listening on the podcast... If you assume that I've got a straight line of my 80th percentile of everything, and then all the different developers have basically got these little peaks that kind of -- you know, they're better than me at a whole bunch of different things...

In aggregate, my readership is better than me at everything, because there's an expert in everything amongst the readership. But the thing is, for each individual person -- if they've got this kind of like mountain amongst the... I'm trying to think about how best to put this... If they've got these peaks, then anything that's outside of their absolute special points, I'm just high enough for them to feel like "He kind of has enough of a feel about this, so I can trust what he's saying, and then build upon that. I can stand on his shoulders on these other topics."

So you will know in Go you will be 95th percentile or higher, on a small group of things, I assume. Like, you are really like "I'm the S on this thing." I won't be the expert on that, but I will have seen enough of the entire community that I know what tools people are using in all different areas. I know how people are interacting with things like Kafka, or Postgres, or what the biggest library for talking to MongoDB is - although actually that's a very small number now, but... I will have an idea of all these things. So that's why when you come to the newsletter, you can be like "Okay, I'm an expert on this thing, and I'm gonna skip all these articles that I know I don't need to read, but on all these other things I'm gonna trust Peter to be good enough at all these other things..."

\[32:15\] I think that's the relationship that perhaps people like you have with the newsletters. You've perhaps not put it into words, but that's how it's kind of seen. I don't have to be an expert at all this stuff, I just have to be good enough that I'm better than you at a bunch of stuff.

**Mat Ryer:** Yeah, that is really interesting. I wonder if you could talk a little bit about some of the technical challenges around doing this. Presumably you've got some tech that you've built yourself, or use, that makes it happen... How does it actually technically work?

**Peter Cooper:** There's a lot of moving parts, and I guess this is one of the good things about being a developer myself - I've managed to just build these parts as I need them. I'm definitely one of those developers who spends two hours writing a script to save myself ten minutes. I'm very much in that group, just because I know what happens over time.

If you have a job that you need to do more than once, you generally need to do it 100 times, so building tools makes sense. So I ended up building tools for doing our booking system for our sponsors, and so on. I've built our billing system, because at the time I built it there was nothing that could handle all the different weird combinations of VAT and stuff like that that we have to do in the U.K. as a business. Those systems now exist, I could move on to them, but at the time they did not.

I built systems for keeping track of projects, for keeping track of different websites, for keeping track of RSS feeds - all of these different things. There's tons and tons of tiny apps that we use here at the company. I mean, I don't even touch a lot of them now. The booking and the billing system and stuff like that is pretty much for use by the people in the company that handle that stuff. Other than that, my curators lean heavily on some of the discovery things I've built, which kind of scrape different websites, and looks at different projects, and things like that.

Perhaps one of the most recent ones I've built actually was a tool that uses the GitHub GraphQL API... It's like a 50-line GraphQL query, or something. I had to learn so much ridiculous nonsense to make it work... But what it does is it looks for projects that match a search query that I might give. I might say "I want all stuff that's to do with Go" or "I might want all stuff that's to do with MongoDB", and then it looks for stuff that has a release or a tag within the past X number of days, and it brings out the information about the star count, who's watching it, what language it's in, or what secondary languages it's in, all that type of stuff, and then works out the version number, and all that type of thing.

So I can find that literally within seconds now what are all the biggest releases of Ruby libraries on GitHub within the last two weeks. I have a lot of work to do to go through those and be like "Well, actually this is just a pointless minor release" or "This is a big deal" and so on and so forth... But at least it gives me the pointers to those things. So I have lots of tools of that nature.

Probably another one actually is the system that sends the email, which is quite an undertaking. The thing runs all the different websites, for all the different newsletters, so it's actually one app. When you go to GolangWeekly.com, or JavaScriptWeekly.com, it's actually hitting the same app... So managing all of that, and all the security certificates, and stuff... That's yet another job.

The editor that we use to put issues together, which is now used by -- well, three of us in the company use it. It's basically a live text editor that we can all use at the same time if we wish, so we can actually work on an issue live. We have a kind of weird version of XML that we use to align all our newsletters on the left, and then on the right it's the live preview, which we can resize to see what it looks like on mobile, and everything... But it's completely live. So as I'm typing, it updates visually what it looks like immediately. That's why we can do in the newsletter some interesting visual things, like we can include breakout boxes and stuff like that, that for other people -- I've seen a lot of people do newsletters, but they're very formulaic; they always look the same, every single week, whereas I can change the layout of the newsletter almost like on a whim. We don't tend to, just because of time, but it's possible to do.

\[36:17\] So yeah, I've pretty much built all the tools for this thing, and maintained them, and that's pretty much what keeps me in the development world for sort of 50% of what I do - just mucking around with these tools... But there's a lot of parts.

**Johnny Boursiquot:** So how much of that is in Go?

**Peter Cooper:** Very little. I have some stuff that does some crawling in Go, because it's just very well suited for that task, and keeping up with the feeds, and stuff... But principally it's in Ruby, because as I said, I am first and foremost a Rubyist. I lie, there's some JavaScript actually as well, but it's principally in Ruby. It's a good fit. These systems are not designed for hundreds of people to use, so they don't need to scale. So when you don't need to scale, Ruby is a great language. It scales with me. It's one of those languages that fits to the developer very well. So yeah, now I'm gonna go podcast, selling the Ruby language to everyone... Yeah, come back to 2004; it's a great language. \[laughter\]

**Mat Ryer:** It is though, actually. I always think it is. I actually do encourage people to do that as well though, to go and check out those other languages. Especially, one of my favorite things in Ruby was method missing, where it's basically a catch-all method that would be called if the method that you'd actually called didn't exist. And so it'd give it a sort of last chance to parse the string of the method name and do something useful with it... Which is just kind of -- when you think of Go, and the way Go thinks about things, that now is so alien. It's kind of gone all the way around through ridiculous, back to being really awesome again.

**Peter Cooper:** Yeah. I mean, I think of Go as being like a cross between C and Python, with a good concurrency story. That's what the story is in my head. That's how I think about it. So it's used for certain things... If I wanted to write a port scanner or something to enumerate subdomains or something like that at scale, I would use Go. It's the natural fit there. But if it was for building the sort of things that I build, which are very non-scaling, kind of just slapping text together, a language like Ruby - or even Perl - is a good fit.

**Mat Ryer:** Once your assets are generated then, are they kind of dynamically generated from a database, the newsletters on the website? ...or are they static files that are accessed?

**Peter Cooper:** When you're looking at the -- let's say if you go to golangweekly.com/issues/209 (or whatever number we're at), that is actually being dynamically generated by a Sinatra app. That's a Ruby app, Sinatra being the inspiration for many a framework actually, in other languages, like Express.js. But I think the actual issue content is cached. So it's not like all of those different items in the newsletter aren't stored in like an items table or something, and they're all being pulled together on the fly.

When we produce a newsletter, it produces a kind of a text and HTML kind of artifact that then remains forever more... So that is then what goes into the website.

**Mat Ryer:** I see. So it generates those kind of static assets then, and then that's what gets shipped around. Is that right?

**Peter Cooper:** Yes. This was a decision I've made quite early on, because I realized that doing it in a formulaic way would end up with very formulaic results... So I wouldn't be able to very easily put interviews in, or just stick a comic in. Front-end Focus, which is one of our newsletters, had a comic just randomly appear in it the other day. Just chucking random things in is very hard when you make it formulaic...

So I was actually thinking more like a publisher than a developer at that point, because the way I look at it is like a clean newspaper page, and I wanna put something here, and put something here, and maybe run a big headline across here... I kind of have that freedom to do that with this. Whereas some of the tools - and I know people that have built some of these curated newsletter tools that are a bit more structured and automated, where you can put items in and it formats, and everything... But you can't just randomly throw different types of content in, or put multiple-column layouts in, or stuff like that, and I can just do that... So I wanted that.

**Mat Ryer:** \[40:20\] And the trick there is that you've got that immediate feedback system where you could see the live preview, isn't it?

**Peter Cooper:** Yeah.

**Mat Ryer:** That is something I've encountered too, and I think it's a good lesson for everyone, actually. When you give users that immediate feedback from whatever it is they're doing, it means that they're kind of free to be more creative, because they can just make mistakes, and see it live. If you had to make those changes and then submit it, and wait for it to be rendered, and then look, you wouldn't do as much... So having that tight loop I think is important. That's a lesson I think everyone can learn with the things that they're building at home, or at work.

**Peter Cooper:** Yeah, I think that actually might be one of the slight downsides to Go as a language, actually - just bringing it back to Go - is it's a difficult language to have super-fast feedback loops with. Now, \[unintelligible 00:41:08.26\] you might disagree with this, it's very fast to compile and run and everything... So in terms of comparing it to a C or a C++ - okay, yes, it's really quick. But it's not quite the same level as like having a JavaScript sandbox, for example, where you can literally change a number in a sandbox and see a different result immediately. There is that extra kind of step. But as I said, it's its own type of language, it's not designed to be used in perhaps a REPL-y kind of way. I know there are some REPL attempts out there, but it's not really designed for that type of use.

**Johnny Boursiquot:** Easy - just don't make mistakes. \[laughter\]

**Peter Cooper:** Exactly.

**Jon Calhoun:** That's one option... But I do think it's useful to look at things like Go Playground and to see that when it was created they did think about this... Because if you have to install Go and do all this stuff before you can even see your first mistake, it's like, okay, that feedback loop is incredibly slow for your first program. Whereas if you can just go to a website, type in some code and hit Run, that actually adds a lot of value. And while it's not the same as a REPL, or as like a Rails app, where you're seeing things visually changing, or like a JavaScript thing where you're in the browser, I do think that it's better than many other compiled, static languages that you might see, in that sense.

**Peter Cooper:** Yeah. For a systems language it is very good.

**Mat Ryer:** Yeah. I mean, I use unit tests for that purpose. That's probably the primary -- when I'm doing something where TDD is a good fit for it... Say I'm gonna write a little package that's gonna parse some strings, and I know what the input strings are (the valid ones), so I can really unit-test that and TDD that quite easily. That's then the feedback loop for me. And it is quick then, when you're doing it like that.

But for visual things or anything - I mean, we don't tend to do too much that's visual... But I've seen some of the graphics things that people are working on, and they do want that feedback loop. We notice it's important to them to have that, because I guess in that world it does make more sense.

**Peter Cooper:** Yeah.

**Mat Ryer:** So yeah, it's an interesting observation there.

**Jon Calhoun:** I think this is also why languages like PHP were so good at attracting new developers. It was like, you know enough to write tests and to use that TDD approach to get instant feedback, but when you're first starting with a language, that's kind of asking a lot, to be like "Okay, think about what inputs you're gonna get, and what outputs you'd expect", and they're like "Um, dude, I'm just trying to write a function that puts a name in a string, that's it."

**Mat Ryer:** I'm just trying to write \[unintelligible 00:43:23.21\]

**Jon Calhoun:** But you know, with PHP and those languages you could literally jump into the server and edit files live, and just see them rendered on the website.

**Johnny Boursiquot:** Oh, good Lord...

**Jon Calhoun:** It's maybe not the best idea for production-type stuff -- I say "maybe"... Definitely not the best idea for that. \[laughter\]

**Mat Ryer:** Hedging...

**Jon Calhoun:** But for whenever you're learning, it's a great way to just jump into something and instantly see that feedback... And I think that's why some of those languages are so appealing to beginners. I think JavaScript has that allure, where you can just open up the console on any website and mess with things; that's very, very appealing, and I think at times you'll probably see that Go doesn't attract as many new programmers as say JavaScript or some of the other languages because of that.

**Peter Cooper:** \[44:11\] Yeah. I mean, editing work in code I think is actually a very underrated learning technique. A way that I have always tended to learn very quickly is if I find a program that works really well. When I was trying to learn modern C -- as I said, I did C in the '90s for quite some time, but I didn't touch it for quite a long time after that... And then I kind of came back to it and I was like "Oh my God, I can understand what's going on, but people are laying it out in a different way, they're putting different structures into their programs..."

So I looked at codebases like Redis - it was a really good example of that, the data structure, the database thing... And the way he wrote that is just very elegant, and I could go in and I could work out it has an "add a command" to it. I think I even did a YouTube video about this - I added a command and showed how that all worked, and everything... And it kind of really -- editing is something that already works and is already... Not perfect, but good. It helps me learn, at least.

That's a way for me to learn, is from examples, rather than going from first principles of saying "Right, we're gonna do #include stdio.h printf("blablabla")" from scratch again, because sometimes you might lack the imagination to think "Well, what is it that I can build with printing stuff to the screen? I want something that works, and then I'll tweak it, change a few numbers here and there."

**Break:** \[45:33\]

**Jon Calhoun:** Peter, when you were talking about using a book, and that being your Bible essentially when you were learning a language - you bringing this up made me think of that, because I remember as I learned, I'd be like "Well, do I really understand this?" and that working program that was in the book was the only thing you had to go from... So a lot of the times you'd go through and be like "Well, let me try tweaking things. If I wanted to do this, is this the right line to change, so that it actually makes those changes?" And I think for a lot of people that's just kind of how they learned. One, you write the code and you read through and try to understand what it's saying, but to verify you understand, a lot of the times it's "Let me change this to see if it actually does what I want."

**Peter Cooper:** Absolutely, yeah. I've seen a few people teach in that way. It's not very common in book form, because the problem with books is that you can't really put a massive program in and say "Here you go, play with this." It definitely suits the modern way of having the web, and downloading a GitHub project, and off you go.

I think Zed Shaw did a little bit of this... He's quite well known in the Python and Ruby spaces. He's learned Python the hard and learned Ruby the hard way. He was very driven about doing everything by example. He's like "Just type this stuff in. You don't have to know exactly what it means, but just do it. And by the fact of doing it, you will eventually learn what it means... Because it's just how it works. It's like learning a foreign language. They don't teach you word-by-word what everything means. You have sentences, and then you kind of derive meanings from it. So I think that's a really good way to go in learning.

**Mat Ryer:** Yeah, and when most people join teams, that's what they're doing as well, isn't it?

**Peter Cooper:** Absolutely, yeah.

**Mat Ryer:** They start completely from scratch, yeah. So it does make sense. I used to copy the code out of Amiga Format Magazine to build little games, and stuff... And then we changed that; we made a pool game once, and then we changed the cushions and just made the pockets really big, so the game was really easy... And just being able to go and figure out how these pockets were described in this weird array, just that process - that's kind of the time when I fell in love with code... I realized we could create things, and make things happen using these strange, magic spells almost.

**Peter Cooper:** \[48:17\] Yeah. There's a lot to be said for watching other people do things... And I guess that is exactly what my job is. I am spending nearly my entire job watching what other people are doing and what other people are releasing, and kind of turning that into personal wisdom that then I can hopefully use to inspire what it is that I choose to go into the newsletters.

**Mat Ryer:** Yeah, that's great. How many people does the newsletter reach?

**Peter Cooper:** We've got a total of about 480k subscribers right now.

**Mat Ryer:** Wow.

**Peter Cooper:** Of course, some of those are subscribed to multiple publications... There's a lot of JavaScript people on the front-end newsletter, for example, and the Node newsletter as well. I don't actually track the unique number of people, just because it doesn't interest me. I'm more interested in looking at it from a publisher's point of view; you know, "10 people bought this magazine, 10 people bought that magazine." I don't care if they're the same 10 people, I sold 20 magazines. That's the way I look at it.

**Mat Ryer:** But what if it was one person buying all 10 magazines? You'd wanna know about that, wouldn't you?

**Peter Cooper:** Well, I don't know... I'd probably be okay with that. \[laughter\] That's the publisher in me speaking. It's all about getting the sales of the magazines. So I don't know exactly, but I know on Go, for example, it's 29,000. We did actually pass 30,000 briefly, but we've recently been going through a process of deleting people that haven't engaged for a certain amount of time, so that process has knocked a bit off, and we're back to 29,000 again.

**Mat Ryer:** Alright. That's not bad. I thought you were gonna say you posted something someone didn't like in the last one, and you're like "Aarrrrgghh!" \[laughter\]

**Peter Cooper:** Actually, that's something you need to watch out for - if anyone is listening and ends up doing a newsletter, don't look at the number of people that unsubscribe, unless you're literally losing half your list overnight. I've found it's actually a way of people that are new to it actually becoming quite depressed very quickly. They're like "Oh, I just sent a newsletter and ten people unsubscribed." But I'm like, "Well, you've got 10,000 subscribers." That's a statistical anomaly.

**Johnny Boursiquot:** Perspective...

**Peter Cooper:** Exactly, like "Don't even worry about that."

**Mat Ryer:** It could have been the same person unsubscribing ten times.

**Peter Cooper:** There you go. Exactly.

**Jon Calhoun:** I think you also have to view it from your personal perspective. You might be interested in the newsletter, and then a couple weeks later, or maybe a year later, you might realize "I've moved on in my roles" or "I'm not doing the same things", and it's not that I don't like the newsletter, it's just that it's not the right fit for me right now.

I think people, like you said, get upset about stuff like that, but realistically, having people unsubscribe is their way of saying "You're not providing me value right now, which is okay." It just means you shouldn't be spending money or whatever your resources you're spending to send them letters are a waste of your time and their time... So it's better than doing what you said, where you manually have to go through and pull people out who haven't engaged in months, or however long it's been. That takes way more effort than having somebody unsubscribe and do it for you, and signal for you they're not interested anymore.

**Peter Cooper:** Yeah. Sometimes it's not even just that; it's also that perhaps they just don't like the way that you present stuff. They don't like the layout of your newsletter; they just have a gut feeling about you, and they're like "Oh, I don't like this guy. I'm gonna unsubscribe." But you have to be okay with that. If you do some tweets and you mention about politics and someone unfollows you and says "Oh, you should do developer tweets all the time." Like, it's actually not wrong for them to say that, but it's also not wrong for them to leave, and it's not wrong for you to be like "Well, I don't care."

I think we ought to be a bit more forgiving of each other and a little bit understanding that we can't satisfy everyone. That's definitely true of us. This is one of the points I put down in my notes - you can never fully saturate an audience. I can never reach 100% of all Go developers. That's just not gonna happen.

\[52:10\] I encounter people that -- say the JavaScript world; we've got 170k subscribers, and I run into people at conferences, and they're like, "Oh, I've never heard of JavaScript Weekly." And it's like, I don't sit there thinking "Well, that's a bit weird... Surely, everyone knows about us by now", because there's millions of JavaScript developers. There's just all these different pockets of different places. JavaScript developers don't even know about each other half the time, let alone all the different resources are in the community.

So there are definitely Go developers who have never heard of this podcast, and it's never even crossed their radar... And I kind of wonder, do we need to actually improve that or not? It's always good to extend your reach, but is it something that's worth worrying about? I don't think it is.

For that reason, that's why I also think it's okay to have multiple versions of the same thing. So you've got Go Time, but then of course - and I'm not gonna name them, but there's other Go podcasts out there; don't listen to them, everyone... \[laughter\]

**Johnny Boursiquot:** That's right, that's right. Yeah.

**Peter Cooper:** Exactly. There's loads of different Go podcasts -- I say "loads"... Like a handful of them. But some of the listeners to some of those other ones won't have heard of Go Time, and some of the Go Time listeners won't have heard of some of the other ones... And people relate to different things in different ways, and that's fine. So if people come along and they try and do another Go newsletter or something like that, it doesn't bother me at all, because I know they're gonna have their own audience. Just the fact that they exist isn't gonna take away from what I'm doing.

The only problem is I think there are some people that haven't had that revelation, and they think that perhaps because I've got 30,000 subscribers, they think "Oh, what's the point of me doing something, because he's already doing it..." and "Oh, he sucks" and blah-blah-blah. I've had this run-in with a guy before, who does a Go newsletter and he was kind of like having a go at me on Reddit, and saying "Oh, don't subscribe to it. Subscribe to mine, because it's better." And I was just like "You don't need to be like that. There's room for everyone."

If your friend says "I'm gonna go and write a novel about a political scandal" or something, you're not gonna go "Oh, I've got a friend who's also writing a novel about the same thing. You must go and get in touch with them."

**Johnny Boursiquot:** "Don't write yours!"

**Peter Cooper:** Exactly. "Write the same novel together. You can't compete." It's just not the case. So I guess the point I just wanted to get across is that if anyone wants to do the same sort of things that I'm doing, then by all means, go ahead... As long as you're not using my name, or copying every single thing that I do, then fine. There is enough audience out there to warrant it.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Do you have non-English newsletters currently, or are you planning on having anything like that?

**Peter Cooper:** No. I struggle enough with English, let alone other languages. I must admit, I'm definitely a single-language person. I know a tiny bit of French, and that's all I know. I know there's a huge Go community in China. I come across some of their output quite often actually; they have GitHub repos that are just like long lists of links that they've found in the community, and stuff... And I can't understand a single word of what they're saying, of course, but I know they've got their own things going on over there.

We've had people approach us, and say "Oh, I'd love to translate the newsletter for such-and-such language", but it's literally been a handful of inquiries over the past however many years... So if someone came to us and said "Oh, we wanna just copy what you do and just translate it into Russian..." That's probably a good example, because that's a culture that's just different enough from our culture that they're probably not gonna read my newsletter en-masse in Russia. Because it has its own alphabet, it's own culture, and everything. And if someone came to me and said that, I'd probably be like "Yeah, just do it." Because it's not going to affect me in any way, and it just will help the community, which is partly what this is about. It is my business, but at the same time, if I just wanted to make money, there's a lot of things I could be doing that I don't do, just because it's not right to do... So I am very keen on helping the community.

\[56:00\] So if anyone is listening and you're in a different land - I'm not gonna say Australia or something like that, of course, because people from Australia or America or England or Ireland and whatever will all subscribe to the English one... But if you're in a different culture - Poland, Saudi Arabia... Or I don't know - where is Go popular other than China...? Yeah, just get in touch, because I'd be interested in seeing you do stuff like that.

**Mat Ryer:** Great. Well, first of all, I don't know if we thanked you really yet for the work that you and the team put into the newsletter... It really is a resource that is valuable for everyone. I'm sure I speak for everyone.

You mentioned not satisfying everyone and not being able to satisfy everyone, and that brings us neatly to our new regular slot, Unpopular Opinions.

**Jingle:** \[56:55\] to \[57:12\]

**Mat Ryer:** So Peter, maybe you could kick us off and give us an unpopular opinion.

**Peter Cooper:** Well, I've spent a lot of time on Hacker News - that's probably an unpopular opinion straight away... \[laughter\] I've spent a lot of time on Hacker News, and Twitter, and stuff like that, and I always see, whenever the topic of advertising comes up, people will absolutely lose it. They're like "Oh, I hate being tracked! I never click on a banner, I've never clicked on an advert in my life. On the TV I close my eyes when the adverts come on." \[laughter\]

Now, I think this is an unpopular opinion amongst geeks, but it's actually not a controversial opinion, in that this is actually how the world works, and that is that advertising is generally (or can be) a force for good. And I know that's a slightly controversial statement, considering just how badly it's been used by so many companies and so many media... But I think that if you are an ethical person and you approach it ethically, then advertising is actually better than most of the alternatives.

Just to give a quick example of that, I've had people come to me and say "Oh, it really sucks that you have to run sponsors in the newsletters. You should let us pay whatever per month, and do it that way. It'd be much more honorable. You're a bad person for having adverts in there." And I've researched it and I've looked at case studies, and other industries where people have done this, and the best I can make out - and I've looked at other developer newsletters that have done this as well - is perhaps I would convert 3%, 4%, maybe 5% of the audience to paying me a pittance each month.

And it would pay quite well, because 3%-5% of my subscriber base is quite a lot. But. My newsletters would then only be reaching 5% of the people they do now... And I don't think that has a good enough effect on the world or the community as a whole, than if I let everyone have what I have - and that happens to be some sponsors which are clearly marked, don't do any kind of onerous tracking or third-party whatevers, all that type of nonsense. We don't sell our lists to them, all that type of stuff. So I actually think the way that -- if you can do advertising ethically, it's better than the alternative, which is paying for stuff.

**Mat Ryer:** That is very interesting. I think of that sponsorship model as well when it comes to conferences. It's very common for conferences - people pay for the tickets, but the prices would be a lot higher if it didn't have any sponsorship there. So it's actually a good one, because you're right - I think if you ask people generally, they'll say "I hate ads" or...

**Jon Calhoun:** \[59:51\] See, it's a challenging subject, because generally speaking, I think people want things as free as advertising makes it, but they don't want the advertising. And it's like, you can't have your cake and eat it, too. You've gotta kind of choose. And I get that there are cases where people are overly zealous and they track you, and they do all these things that you don't want them to do, and that can be troublesome... But then there's also cases, like you said, where conferences are cheaper, newsletters are made available... This podcast is possible because we have advertisers. Otherwise a lot of this stuff would be very hard to do. We wouldn't have people to edit the show and do different things like that.

So I can imagine this podcast would be a very different thing if we had to charge everybody, and it would also make the people that you can reach - it would limit it so much. You could no longer help people who are struggling to get into tech from a rougher background, or maybe they have a job that doesn't pay that well... And I think being able to reach those people is worth it, in many cases. But I do agree with you, Peter, that you kind of have to approach it ethically. You can't just be like "Let me just track everything, do whatever, and just abuse all of my readers/listeners", or whatever they happen to be.

**Mat Ryer:** Yeah, you don't support advertising smoking to kids, do you? \[laughter\]

**Peter Cooper:** Yeah, I mean - we've had a few interesting run-ins, actually. The only one I can think of that we had a bizarre run-in with was we had a company - that I'm not gonna name, because their name is actually a little bit suspect... But they were basically a company that offers sexual services online, and they were advertising a job with us. Now, I was a bit like "Hm... I wouldn't link to them as a service, because it doesn't make any sense. But since they're trying to hire a JavaScript developer, let's go with it." And they were quite subtle in the way they worded it, and everything... And one of the people in the JavaScript world just went absolutely bonkers, because he's like "Oh, this is encouraging..." - and it was actually about a particular fetish, so... That's just to kind of give you an idea. He's like "Oh, this fetish is absolutely wrong, and even if people consent, it's actually not good etc. You shouldn't be running their ads" or whatever.

**Mat Ryer:** And you should have strong types in your language, and that sort of thing.

**Peter Cooper:** Exactly.

**Johnny Boursiquot:** It's the not-a-number fetish, yeah. I've heard of it. \[laughter\]

**Peter Cooper:** So we do tend to steer clear of that sort of thing now. We've kind of learned a few things. Even if I agree with it, the optics can be a little bit weird on things like that... But yes, there's definitely a lot of ethical issues that you have to figure out. And one of the things that I think we do - yeah, we obviously abide by all the laws, which now there's quite a lot of them, with the whole GDPR thing, especially here in the EU... Oh, sorry, I say "Here in the EU", but I'm no longer in the EU; I keep forgetting, but... \[laughter\] Yeah, don't get me started on that one.

**Johnny Boursiquot:** ...too soon. \[laughs\]

**Mat Ryer:** You can tell by the screams in the street. \[laughter\]

**Peter Cooper:** Yeah. So we abide by stuff like that...

**Johnny Boursiquot:** That's what that is... \[laughter\]

**Jon Calhoun:** So you're trying to tell me that the U.K. was just like "You know what, we don't wanna do this GDPR thing. We're gonna go ahead and just leave."

**Mat Ryer:** Yeah, we're gonna purge instead.

**Peter Cooper:** Well, it's still the law, but yeah... So we abide by all that sort of stuff, but the other thing that I've always been really keen on doing is making sure that we aren't out-pricing the startups and we aren't out-pricing the small sponsors... And that's been really important to me, because we've had people like -- and this isn't so true in the Go world, this is more true in the JavaScript world... We've had a couple of independent companies that were very small kind of build off of the back of our audience, and become popular with our audience, and then they've grown and grown and stayed customers just by virtue of that...

Frontend Masters is a good example of that; they're kind of like a screencast type training website... And there's a JavaScript tool called Wallaby.js, which is like a live coding debugging thing - they've had the same experience. In our early days we had IBM come to us - their marketing agency came to us and said "Look, we wanna buy all the inventory on all of your newsletters, but we have to spend at least $100,000/month. We can't spend less than that, because otherwise it's not worth our time." And I looked at the inventory I had and it was worth a percentage of that. And I'm like, okay, even if I marked it all up and I said "Yeah, it's gonna cost you $100,000/month", do I want IBM Cloud as every single sponsor of every single thing? For me, that's unethical. That's the sort of ethical decision I have to make.

\[01:04:09.29\] I have to think "I could sell this inventory for tons and tons of money", say double what I make now, and have one company plastered everywhere, that -- who cares about IBM Cloud? IBM Cloud is a good thing, but it's not something you wanna see week in, week out. It's just one service among many, that people wanna consider. And that's what I want the newsletters to be.

So when sponsor go in, I want them to be sponsors that people can look at and say "Actually, I am interested in checking that out", because it's a different thing each week, and we try not to let people run sponsorships back to back... And because it's relevant to me, because it's teaching me something, or because it's a service that's like a hosting company that - maybe I need a new host, I'll check them out. I want them to be things like that. I want them to be indie developers, I want them to be startups, and that is definitely an ethical decision I've made.

Separate from all the tracking, and all that sort of stuff, it's that the sponsors are actually good. And I know that's also something that's happened here with the Changelog - you've got sponsors like Linode, for example; they're good companies, that are worth checking out, and are actually relevant to our day-to-day jobs. They're not just some enterprise play that we're only gonna recommend if we've got like a million-dollar budget to play with.

**Jon Calhoun:** Whenever you say you try to keep it approachable for the smaller players, like the indie developers or the startups, do you have to do anything else? Let's say you have a mailing list that's 200,000 people. You'll probably have some set price for like a job listing. Do you have to do anything special to try to make that accessible, or is it just certain types of spots?

**Peter Cooper:** We've not really got to that point. JavaScript Weekly is our biggest publication, with 170,000, so that does have a price premium upon it... But I would say actually - and this is part of the whole pricing thing I mentioned before - if you scaled up one of our smaller publications to the same size as JavaScript Weekly, the amount you'll be paying if you apply that multiple would be a lot more than we actually charge. So we undercharge on JavaScript Weekly, and I don't wanna say we overcharge on the others, but we charge more healthily on the smaller publications.

We've got a database publication, for example, that only has 15,000 subscribers, but because the database space is awash with money, let's say, and it's a relatively small space (kind of) in terms of the sponsors, there's more competition for wanting to appear in the newsletter, so we can charge a premium there... Whereas with JavaScript weekly, less so.

**Jon Calhoun:** One of the things I guess I'm thinking about is that you have the added benefit of you send letters out to people uniquely, and you have sort of control over what you're sending to each person... Whereas for a podcast, for instance, they insert the ads, then they put it out to distribution channels, and you can't really dynamically insert an ad for each person. And I don't mean tracking, I mean like - let's say you have 175,000 people and you wanted to sell "Okay, we'll give your job ad to 25,000 of our subscribers", and you can sort pool that ad listing with maybe five other advertisers... Does that make sense?

**Peter Cooper:** \[01:07:14.08\] We have the technology to do that. It's only ever come up in one context, with a sponsor, and that was where they're saying "We're an Israeli company. We wanna advertise that job just to the Israeli people." The only problem with that is that in that situation we looked at the numbers and we were like "Okay, 1% of our audience is from Israel", or it was probably less than that. And it's like, "Do I really wanna charge --", "Even if I charge them double, do I wanna charge them 2% of our normal pricing, to go through all that effort and then not have it appear in the main one?" It just seems pointless. So we're not at the scale to do that.

**Jon Calhoun:** For something that small you almost have to charge them the regular price and just say "We'll limit it to maybe like half-price" or something, because of the amount of effort and overhead. I guess I was just thinking, you know, keeping things accessible and making it so startups and smaller indie people can access it, looking into those pooling options and things like that are unique approaches, I think

**Peter Cooper:** Yeah, we're not quite there with that. I mean, we have the tech to do it, but we're not quite there. If we had millions of subscribers to a single newsletter, then obviously that would be very pressing... But then part of the problem with that is that people are gonna start wanting targeting at that point; so they'll say "We wanna reach certain companies." It's very easy nowadays to actually take email addresses and turn those into names, occupations, and stuff like that.

There's companies out there like Clearbit, for example - you throw emails at them and you get data back... And we began doing some of that. This is pre-GDPR. We began doing some of that, so that we could kind of build audits of who our subscribers are - what countries they're from, what companies they work for, and that type of thing... But we've since discarded that data, because it just doesn't fit ethically with how I see things going data-wise. It's nice to know that we have a bunch of people from Microsoft subscribe to us, but you can kind of tell that from the email addresses. I don't need to run all this weird, clever stuff over it.

So yes, it's possible to do that slicing and dicing, but both for demand reasons and ethical reasons it's not something we really do. And I wouldn't wanna run a different ad to different blocks of the subscriber base... Because I think a bit like a magazine, like a copy of Vogue, for example - you'll open it up and there'll be a big thing in there for PRADA, let's say... That's part of the experience. The fact that they're there, it says something about PRADA; they wanna be in there. So the fact that you open up a Go newsletter and you see a certain company is the prime responder - I actually want that almost to be a talking point in its own right now. I'm not big-headed enough to think that people are sitting on Twitter and going "Oh, did you see this hot sponsor in Go this week? It's fantastic", but there is still kind of a narrative there you can have with sponsors, and say "Look, you are the sponsor." And that's actually worth it to them.

**Mat Ryer:** That's really interesting to learn about. It's the sort of thing I never really consider. Well, Peter, we could talk to you all night, but unfortunately that's all the time we have for today. Thank you so much to our special guest, Peter Cooper. If you wanna get the Go Weekly newsletter, go to golangweekly.com. You can sign up there. And we'll see you next time on GoTime.

**Break:** \[01:10:30.13\]

**Jon Calhoun:** I feel like I'm a tech support person, where like "Have you tried restarting your modem?" \[laughter\] It's like, "No, the phone line has a tree in it. That's not the issue."

**Peter Cooper:** Everyone's a tech support person when it comes to video conferencing.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** And families.

**Peter Cooper:** \[laughs\]

**Mat Ryer:** It's like other people's showers, as well... \[laugh\]

**Peter Cooper:** Oh, very true.

**Mat Ryer:** I always notice that those are so complicated.

**Jon Calhoun:** Every Christmas I get mad at my brother-in-law, because he comes home, he gets his mom some fancy new technology, then he goes back to California.

**Johnny Boursiquot:** \[laughs\] Leaving you to deal with the wreckage.

**Jon Calhoun:** He'll get it set up, sort of, and then she calls me "How do I do this?" and I'm like "I don't have that thing. I don't have a clue." \[laughter\]

**Mat Ryer:** "Where do I get games for my Switch?"

**Johnny Boursiquot:** \[laughs\]
