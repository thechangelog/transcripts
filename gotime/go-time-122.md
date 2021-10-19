**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about the zen of Go. On today's show we have Johnny Boursiquot, Carmen Andoh, and the one and only, Dave Cheney. Hello, everybody!

**Carmen Andoh:** Hello!

**Dave Cheney:** Hello, friends!

**Mat Ryer:** How's it going, Dave?

**Dave Cheney:** It's going well. How's everybody doing in radio land?

**Mat Ryer:** Yeah, not bad. Carmen, it's been a while since you've been on actually, hasn't it?

**Carmen Andoh:** I know. I've missed you all, it's nice to be back...

**Mat Ryer:** Yeah, and we've missed you. I was about to say that.

**Carmen Andoh:** Dave is fave! I didn't come back for you, I came back for Dave, sorry...

**Johnny Boursiquot:** Ouch.

**Mat Ryer:** None taken. None taken. \[laughter\] Johnny, how are you, mate?

**Johnny Boursiquot:** I'm doing well. Not too bad.

**Mat Ryer:** Good. What's been going on?

**Johnny Boursiquot:** You know, not much... Just crackin' on. Just trying to be nice to everybody. Unlike you, I think.

**Mat Ryer:** Oh, that's hard work. It's too hard.

**Johnny Boursiquot:** From what you've told me, yeah. It's hard. \[laughter\]

**Mat Ryer:** This show is called The Zen of Go, and Dave - I wonder if you could just kick us off and tell us what does that actually mean, and where does this come from?

**Dave Cheney:** Okay. Well, first things first - I have to give credit where credit is due. The idea for the Zen of Go came from many places, including here in Go Time. I think the last time when I spoke, we were talking about try. One of the things that Peter Bourgon said - and maybe for him it was just a throw-away comment, but for me \[unintelligible 00:03:21.28\] was when he was talking about error handling should be explicit. He said "This should be a core value of the language. We should write it down, we should make this explicit." So that was one of the ideas.

In some of the other extended discussions about try - this isn't all about error handling - Daniela Petruzalek said other languages have core values, and she kind of pointed to the zen of Python. So that was what had kind of got me percolating for a year. Then a couple months ago I was lucky enough to be invited to go to the second GopherCon in Israel. They said "You have an hour" and I was like "Well, what have I got that would fill an hour?"

\[04:03\] So very much the talk that came out of it and the ideas that came out are kind of an hour's worth of ideas... As well as recognizing these really are not my ideas, these are just things that I've pulled together. I also need to apologize for everyone having to read an hour's worth of text. That's the reason why that document is so long; if they gave me 30 minutes, it would have been much shorter.

**Mat Ryer:** \[laughs\] That's great. There is a kind of mini-site as well, where you've written out a set of these rules, or these points... How can we find that?

**Dave Cheney:** I guess we'll put it in the show notes, but it's thezenofgo.netlify.com. The main reason I do that - and this is perhaps a little kind of presentation inside judo is when I'm giving feedback to people on their presentations, I always say "Look, I have a superpower. I can control what people in the audience are thinking. And the way that I do that, is I put the words really big behind me." So if I want them to think something, I write those words -- like, if I want a very important thing out of a sentence or a paragraph to be the key message, I put that behind me in a million-point font.

**Mat Ryer:** Dave, I'm gonna write this down. I've been doing my talks wrong, for sure.

**Carmen Andoh:** Yeah. Total Jedi mind trick right there. \[laughter\]

**Dave Cheney:** Also, if you want people to quote you well on Twitter, like with a photo, make sure that the words that you want them to repeat are behind you.

**Mat Ryer:** Oh...! That's a good idea.

**Carmen Andoh:** I tried that, but it was a Dave Cheney quote, so the picture is of me and a Dave Cheney quote behind me... Just - sorry.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Yeah, I do that sometimes... And then there's not enough space to fit the credit on, so I just take that off... \[laughter\]

**Carmen Andoh:** And just take credit yourself?

**Mat Ryer:** Well... It's default, isn't it? I can't help it. That's the default value of that.

**Carmen Andoh:** You know, even though thezenofgo.netlify.com are the-zen-of-go.netlify.com, I actually quite like the blog post better, because I don't mind reading an hour's worth of text. I find it quite enjoyable, all of it.

**Johnny Boursiquot:** It's more contextual, yeah.

**Carmen Andoh:** Yeah.

**Dave Cheney:** So a part of it was to have something snappy to take away. One thing you always do in marketing on a trade show is make sure you give somebody something with your name on it, so when it's on their desk, they look down at it and they're like "Oh, I remember that."

So part of the little mini-site was a thing to give to the audience to take away... And there's always a tension between a 6,000-word blog post and people who don't have the time to read the whole way through... So I think there's kind of a notion of giving them something more concise. Again, to give props to all the inspirations, Rob Pike's Go Proverbs was another big inspiration there. Maybe we'll get into this later...

I have this notion that the proverbs are kind of like advanced level, maybe... Because popped out of the idea of proverbs in both the way that Pike said them and the original gang of Go inspired ones - they were these little kind of these whimsical observations... Which kind of make sense, like "Oh, now I understand the \[unintelligible 00:07:03.17\]" But is that really useful to someone who's never seen the game before?

So that's why each of them comes with at least a little paragraph to describe them... Because ideally - this is kind of my take on it, that they should be usable especially by novices, because this comes back to my whole rant about idiomatic Go actually being quite an exclusionary term. I didn't want them to be vague in that way, that you could have a long stand-up argument about it, in the way that the zen of Python is actually a -- it was a thought devised to prompt people in the Python community to really say "Well, hang on... That doesn't seem to be how I'm actually writing Python." Tim Peters was obviously being like "A-ha! That's the trick."

**Mat Ryer:** You're right, the titles of each little point are quite poetic, so it does leave a lot of room for interpretation. They aren't code, are they? So yeah, I appreciate that, and it's a good point to make... And I've seen this actually happen where someone will give a talk, and they'll kind of skip over some of the fundamentals just to get to the higher-level ideas, and then somebody that perhaps didn't have those fundamentals - their experience of it is then very different... And I've seen that happen a couple of times. So I think that is a thing that we have to look out for. But the little descriptions on the site I think for sure help that.

**Dave Cheney:** \[08:30\] To give some background - in a growing community like Go's growing community, which we all hope it is, most of the people in this community will have joined recently. We know this makes sense mathematically, and it also makes sense anecdotally. If you think of all the conferences you go to, like \[unintelligible 00:08:46.01\] you might do a show of hands of like "Who's been here a long time? Who's their first time here?", the majority of the people at conferences and at meetups are newcomers... So we should optimize for the newcomer rather than over-focusing on the old hands who've been here a long time.

**Mat Ryer:** Yeah, I think that's a nice decision if you have to make that decision... Because the thing about people with more experience is they have more experience. So they are more kind of equipped to be able to find the right information, and things like this. I do feel like whenever I give a talk, I always try and give it to someone that's new. I always want to make sure they're at least covered... That's why sometimes - even on this show - I sound like an idiot... It's not because I am one, it's because I'm being nice.

**Johnny Boursiquot:** \[laughs\]

**Carmen Andoh:** Well, you mentioned new, and I think one of the beautiful phrases for making sure that you have that perspective is Zen Mind, Beginner Mind, which is why I love the title of your talk and of the blog... Someone who's never heard of it - "Well, what is Zen Mind, Beginner Mind?", it says "In the beginner's mind, the options are many. In the master's mind, the options are few." So sometimes the proverbs that Rob has - the brevity and the wit comes from layers and layers and layers of meaning... So when you get it, that is the delight of those proverbs, but it also is exclusionary of those who haven't yet gotten there... So I'm glad that you did this and made it more explicit.

**Johnny Boursiquot:** I'd like to perhaps briefly touch on the fact that you consider the term "idiomatic Go" to be exclusionary, in some way... I kind of take a slightly different view of it, in the sense that I think it's an aspirational goal almost. So when you join a community, there is going to be an idiomatic way of writing, be it Go, or Rust, or Ruby, or whatever. You want to fit in, in a way, and to write the programs like most others are doing... At least the correct way that most others are doing it.

So to me, it's an aspirational, less so an exclusionary term... But I can definitely see where you're coming from when you say that. To me, when I juxtapose the Go proverbs and the Zen of Go, I see the Zen of Go as something you understand and take to heart on your way to the Go proverbs. Once you reach the Go proverbs, you're like "Oh, okay. Now so much starts to make sense", because you've been working with Go for a while, you understand the layered meaning in the proverbs. The Zen of Go is more explicit, it's deliberately an explanation of how you should approach your Go work.

So I see writing idiomatic Go as aspirational, something that everybody should be striving to do... Not necessarily shutting the door on folks who don't quite know how to do it yet, whether they know if they're doing it right.

**Dave Cheney:** Yeah. I think you touched on my key uncomfortableness with this idea of idiomatic Go. It is not that we shouldn't be writing code in the idiomatic style, but actually the word "idiom" itself - I went to the dictionary, and the definition of "idiom" is "The way that we do things around here." It's sort of the accepted norm. And any kind of culture that has that "This is the way that we do things around here", it can be groupthink. "We write code like this because we write code like this."

\[12:14\] Now, the reason that I said idiomatic Go can be exclusionary is not the ideas of "We should write good Go code in the style that we've all become accustomed to", it's the way that that's actually administered. Scott Meyers, the C++ author, has this amazing blog post on writing The Effective C++ books. He totally breaks the fourth wall about how he went about writing the Effective C++ books, and the thing that I took away from that is -- well, first of all, avoid absolutes. You have titles like "You shouldn't say always and never, but say prefer or avoid." So first of all, moving away from absolutist language is important.

The second one was that, in my observations - and I really wanna ask the rest of you how they perceive it... Most of the times, the way the idiomatic Go has been used, it is usually with a negation in front of it. That's not idiomatic. You did that wrong. And that's the key thing which I'm concerned about idiomatic Go as a teaching too.

**Carmen Andoh:** Good point.

**Dave Cheney:** Does that seem fair? Like, when you've seen idiomatic Go used as a justification or as a goal... I've generally found that it's very close on the page with words that imply that the thing that the person did is not idiomatic, it is not in the tribe, it is not following the accepted standard. They did it wrong.

**Mat Ryer:** Yeah, it somehow encodes a suggestion of naivety, doesn't it?

**Dave Cheney:** Exactly.

**Mat Ryer:** ...in that criticism. And we don't need to do it. You can probably get the same ideas across without resorting to that... Which kind of makes sense. I've found that it's sometimes useful to follow patterns that other people are doing, even if I don't quite understand why they exist... And then I can sort of learn later. I've found that happens too, do you know what I mean? Sometimes I think if you expect everyone to learn everything straight away -- it is a lot to learn. Sometimes we say "Oh, it's easy", and that's a mistake. This stuff is not easy at all. In fact, it probably wouldn't interest us if it was that easy.

So yeah, I feel like if you expect people to know everything too quickly, it can really put people off. So I like the idea that people can follow these ideas around, even if they don't have a full grasp of their deep, textured meaning, but it can still be a good shortcut for people.

**Dave Cheney:** To come back to your point... The concern I have with idiomatic Go is that everybody is well-meaning, it's just the way that I've generally seen it expressed in code reviews, in comments, online - it's always with that "The thing that you did is not idiomatic." And what struck me was that negative feedback right at the point when the person is most excited about trying Go, most interested in investing, most interested.

So this whole exercise was really a question of "How can we reframe that commentary or that feedback to be just in a positive frame?", so nobody has to hear "Don't do it like that, do it like this." And to go back to Meyers' work, rather than saying "Never use some of the millions of \[unintelligible 00:15:23.14\] in C++" make a suggestion that is "Do do this. If you have a world of choices, start with this one." That was really how I wanted to reframe it.

**Johnny Boursiquot:** Yeah, that makes sense.

**Carmen Andoh:** Getting to the heart of what idioms are for in programming - many ways for the code to compile, but in order for understandability to increase, in order for the code to grow well, age well, be able to be refactored, we have to layer the shared meaning on top, which is idiomatic Go.

\[15:52\] So what I'm hearing is when you say "No, that's not idiomatic", there are certain contexts for which that might be okay... If the person is already at a certain level of understanding of Go. But we should also be very explicit in saying "The reason why we like idiomatic Go is because it helps us later on for X, Y and Z." I just love that we're even talking about this, because this transcends just Go, to any programming language.

**Mat Ryer:** I like that idea that you've just brought up, which is instead of saying "Oh, this is rejected because it's not idiomatic", even if you don't say "idiomatic", you could say "This is a way to do this." And it's a sort of teaching opportunity, isn't it? ...which we don't always feel like we have time for, but sometimes it can be just a different way of framing the same thing you were gonna say before... And suddenly, like you say, Dave, it's a positive experience then, instead of a negative one.

**Dave Cheney:** Precisely. To take my favorite one, which is \[unintelligible 00:16:51.03\] to not use a negation in there... "When you start a goroutine, always know when it'll finish." It's a much better way of saying that. Imagine if you hyperlink that in a code review. Like, thumbs down, hyperlink to something that says "When you start a goroutine, always know when it'll finish" is much better than someone writing "Hey, you've got a leak there."

**Carmen Andoh:** Yeah. Being able to describe it by saying "Here are the consequences, all the way through to the way that the data transforms" shows a level of understanding and awareness... But I often have caught people who say "That's not idiomatic Go" with just kind of cargo culting, and not knowing why. So I love that if you're ready to give a constructive criticism to somebody, or some feedback for "Let's do it this way", I would love that whoever is doing that feedback be able to give some time to be able to talk about why that is. And that's hard to do. I think when we are asked to do that on the spot, very few people can actually do it. So we kind of then default back to "Oh, that's not idiomatic", without understanding why.

**Johnny Boursiquot:** I was going to ask you at some point, which one was your favorite of these sayings, and you sort of mentioned that before... One thing I've noticed of the set - most of them (at least eight of them) are very explicit. You can literally read it and you know exactly what it's telling you to do or to avoid. At least two of those, maybe three, can be interpreted more subjectively... I'm thinking perhaps the most abstract one is moderation. "Moderation is a virtue." Obviously, in my mind I see moderation as a virtue as the top most abstract one; the one that requires a bit more experience, like having seen a few things to kind of know what the right amount, quantity is... And then obviously, maintainability, which different people will have different ideas about what maintainability means... And then the third one in my mind is each package fulfills a single purpose.

So again, these three... Depending on who you're talking to, the teams that you're in - these things are gonna mean different things to different folks. I'm wondering, what is a tool that you would employ, especially for the first one, especially for the moderation part. What is a tool that you personally employ to know how far is too far, or how much is just right.

**Dave Cheney:** Yeah, an excellent question... And I need to give some editorial context here. To talk about public speaking - I'm sure everyone's been through that wave where you're like "This is a great idea. I'm gonna propose this as a conference talk." And then even better, you get accepted and you're elated; you're like "This is fabulous!" And then you're making some notes, and you're gonna drink some coffee, and you write in your book for a little bit, and then in about a month you come back and you say "Right. Time's ticking, I've gotta go and write that talk", and you sit down and write it, and you're like "Crap. This idea is not as good as I thought it was. This isn't gonna work out as well as I thought it was. I've made a terrible mistake."

**Carmen Andoh:** \[20:01\] \[laughs\]

**Dave Cheney:** This is a process that I go through every talk that I write. And then it's a process like pulling yourself out, saying "Okay--", you've promised to do this talk, on this subject, you probably missed the point to change a topic, so you've just gotta grin and bear it... From talking to other speakers, I think this is actually a very common thing, that happens to everybody.

So to break the fourth wall a little bit, as I got into it, I ran out of similarities I could find between the zen of Python and a potential zen of Go. The talk -- I thought there was gonna be a lot of cross-over, but I actually found that I had to reinterpret what Peters wrote quite heavily in some points. Towards the end of the talk I said "Look, I've mined as much as I can from this." They're fundamentally different languages, although Go is roughly 30% Python anyway, if you look at its lineage... Some of those points worked really well with the material, others were a bit of a stretch, some just have no lineage at all.

So moderation is a virtue. There were some in there that I felt had to be said. Like simplicity - we cannot talk about Go without saying simplicity. Simplicity is a core value, and if this is a list of things that Go programmers as a tribe/group hold dear, simplicity has gotta be in there. So no matter how handwavy and hard the final conclusion is, you've gotta say it's simple. And that's totally subjective.

Moderation is a virtue... I thought about that, and I thought about my own experiences a lot. When I came to Go, I was very excited about the things in Go that were different from the languages that I was using before... Like concurrency, the fact that it was compiled - that was great, compared to the JVM languages... So those things that were unique about Go - I wanted to use all of them. Concurrency for everything, channels for everything, and everything is gonna be its own goroutine. "There's a reason these special features are in the language; there's a reason, so therefore I should use them" was the theory that I had. And I don't think this is uncommon.

In another point I wrote that Go has reasonably performance so people will use it for the things that it's for that. Go has good concurrency support, so the programs that'll be written in it will use concurrency heavily. So we can't deny that the things which are done well in the language will be the things that people want to use. So there's a tension there between "Well, I want to use all." This kind of novice thing of "I want to use all the features. They're there for a reason. I should use them."

And the realization which I think each of us is going through in our journey through learning Go and becoming proficient in it - realizing that, just as in life, overuse of any one of those things just leads to code that is either hard to read, not maintainable, or fundamentally just kind of too clever for what it's doing. That was certainly my experience when I went overboard with these goroutines. I broke the program into tiny little pieces, and then missed the bigger point that actually they were all waiting on each other, so it's fundamentally sequential, but I'd just made it harder to follow.

One of the big pieces of code that I contributed to the Go project was working with Adam Langley on the SSH package. That initially had channels for everything. Every possible thing, every message -- SSH is kind of a stacked protocol, so at every level they communicated through channels... And again, very complicated, as well as checking the ownership of those channels, closing them, all that stuff... We fundamentally missed the point that this is a stacked protocol where nothing happens at the higher level until something's happened at the lower level... So those are just function calls.

At the end of moderation is virtue. I was left with this unsatisfactory thing of saying "Do you feel that you've done the least you could? Have you used the features in Go in the least?"

To point to maybe some guidance here - does everyone remember the blog post a couple years ago called "Choose boring technology"? This idea of innovation tokens... Has anyone heard of innovation tokens?

**Mat Ryer:** Yes. But maybe some of our listeners won't have, so maybe we could -- for their benefit...

**Johnny Boursiquot:** \[laughs\] Sure...!

**Dave Cheney:** \[24:06\] We'll definitely put it in the show notes, but the idea of innovation tokens is that every time you start a new project, you bring with you all the knowledge that you have. So you're doing a new web application - well, you're gonna pretty much start from the old application, and maybe you'll change a few things. Maybe you'll be like "Oh, that database... That was a poor choice. For this I think we need a different kind of database." But then in taking on something new, like changing your database, you've just spent one of your innovation tokens. You've taken on a big risk, because that's a unknown. The main push of this "Choose boring technology" blog post was you don't have unlimited innovations tokens. You have two, maybe three. More like one.

So if you're thinking about trying to apply moderations of virtue to your Go code, say "Well, this code sure does use a lot of concurrency." Maybe that's the one innovation token. Using a lot of goroutines to kind of break up this problem, then maybe we shouldn't think of something hypothetical; maybe we shouldn't have a lot of complicated data structures as well. It's really about recognizing "Hm, I've used a lot of a certain part of Go. The goal is not to us all of the parts at the same time." I've pushed my stack in on that one idea.

**Mat Ryer:** Yeah, so it's sort of taking that minimalism a little bit further as well into the choices that you make about stuff. It's interesting, because that kind of thing is at risk of becoming one of those headlines, like "Don't use channels." That could easily fall into that same trap. And the thing is - I'll admit - I have over-indulged on channels in the past... And I actually end up tying myself in such knots. But that learning process I've found to be probably quite valuable, so I wouldn't necessarily want to deprive anyone of that. You're dead right - on a real team, in a real job, in a real situation, of course, there's limits. There's only so much you can do. And I like that idea of having a "Don't over-indulge on something." Having a healthy kind of use of these things. It's kind of a nice idea.

**Dave Cheney:** I'll give you another example of where something could be overused. In my first talk at dotGo I wanted to talk about Rob Pike's functional option pattern, and how I applied it in the design of some code that I was working on. Two years later a number of people had said to me "Look, I really like that talk, but I'm not sure that to other people I can propose these ideas. It's too weird. Like, this idea of anonymous functions that return anonymous functions - it's too weird." That was kind of the impetus for another talk about "Hey, free functions are a thing. We should use them."

But it's a realization that that is probably -- like, if everything in your codebase is functions that return functions that call functions, that's a really big innovation in tech. You're mixing that with heavy channel use and heavy goroutine use - that's a pretty pro level move. That would be one of those cases where you seem to have used all the features of the language. Isn't that gonna be a little bit hard to follow?

**Carmen Andoh:** Yeah...

**Mat Ryer:** Yeah, if you use all of the 25 Go keywords in the program, then yeah, I reckon you probably are. \[laughter\]

**Break:** \[27:17\]

**Carmen Andoh:** There was a recent post about the six stages of a Go programmer, and it was the evolution in a small, quippy GitHub gist... Which is basically this - you start out simple, but "No, now I wanna use all the features." Then you realize over time you go back to the very beginning, where you started. Then there was another cheeky Rob Pike homage without syntax highlighting. \[laughter\]

But again, it's not just programming or even Go; it's human nature that we want to be able to try to be clever. There was a reason why the word "sophomoric" exists. "Oh, that's so sophomoric." It's when we're just starting to master a thing, but we're overdoing it, we're overcooking it... And you start to see time and time again, when you look at the masters, they have -- I think there's a reason why the simplicity matters, or simplicity is complicated, from a person who had to go through the hard knocks. Or some of the quotes that we hear time and again from -- like Brian Kernighan, "If you are not smart enough to debug the code when you write it, you won't be able to debug it later."

So this is all part of the journey, and there's just not fast way through it. You have to let the learners abuse some of these features, and then come out the other end. I feel like it's just like Dante's Inferno - you've just gotta go through that hell; descend deeper and deeper and deeper, and then you'll come back out the other end. You'll be fine. \[laughter\]

**Dave Cheney:** Can I ask a question of the group...? Have you joined a project - this could be joining a new company, or just moving between teams, or being assigned a new project - and you thought "Ugh, this code... Ugh. I need to rewrite this." \[laughter\] This isn't gonna look great on radio, but... Show of hands - who's done it? \[laughter\] The records show that I'm raising my hand, Johnny put his hand back down, Mat's is raised as well...

**Carmen Andoh:** You know what - I internalized it as the impostor syndrome. Like "Maybe I'm not that good after all. Maybe it's me." I didn't have the courage to be able to sort of \[unintelligible 00:31:05.07\] my elbows and have the confidence that what I knew was probably a good way. Or equally a good way.

**Mat Ryer:** Yeah. It definitely happened more for me in languages where there were more choices to be made. Having gofmt do all of that for us and take that decision away kind of removed--

**Carmen Andoh:** Oh, okay, so formatting...

**Mat Ryer:** Yeah, sometimes I think even just stylistically. Not just the style, but even if it's an OO programming language, the class hierarchies. There's lots of different ways to slice that, and sometimes you think "Oh, there's a kind of clear abstraction here", and there's a few weird abstractions that you can tell have got dust on them now... And yeah, of course, you just think "Now this could be written so much better." That is what we always think, isn't it?

**Johnny Boursiquot:** The reason why I raised my hand sort of sheepishly - it was because I was like--

**Mat Ryer:** A coward? \[laughter\] Oh, we'll cut that out, for sure.

**Johnny Boursiquot:** \[32:02\] Like, I realize I've done this -- so you do this enough times in a project and you realize the ego that you're bringing to a project. It's almost like you're dismissing months or years' worth of people's hard work and effort... And requirements are never clear the first time around. So there's just so much you don't know about a project before, and then here you are, you just show up and you're like "Oh, this is nonsense. I'm just gonna rewrite the whole thing over the weekend." The ego about that, it's just like "Get over yourself." \[laughter\]

**Dave Cheney:** This is fascinating. I think as we grow in our careers and put on some hat or some little lapel pin that says "Senior" or something like that - maybe we don't say it out loud anymore. Maybe we say it in our heads. We're a little more cognizant of "Okay, so the code is written in a time and a place." But can I ask you this question - so that's the project you've been assigned, you've got a group of humans you're working with... But what if it's a library that someone comes along -- you have a vendor library, and you're asked to integrate with that; I'm not gonna name any names, AWS...

**Johnny Boursiquot:** \[laughs\]

**Dave Cheney:** And you look at it and you're like, "Ugh, this doesn't look like any other code I've ever written in this language." And it's not just that it looks weird/strange, but you think "Well, if this breaks, I'm on the hook to fix it. I integrated this into my codebase, I'm taking responsibility for this." And wouldn't it, on balance, be safer if I just wrote it myself?

**Carmen Andoh:** This is against the grain of being a software developer in 2020, when you can just npm-install. Like, you're actually reading through every line of dependency that you're pulling in... So bravo to that, at least!

I try to explain to my kids what is it about programming, and I said "Well, if you like writing, programming is really writing, because what you're doing is you're taking other people's paragraphs and you're putting it into your book, from all over." Peter Bourgon - he once tweeted out "My Bash is like Hemingway. It's short, it's brief, it's clear." And I'm like "My Bash is like Shakespeare - kind of obtuse, and..."

**Mat Ryer:** Like tragedy? \[laughter\]

**Carmen Andoh:** "...I don't know if people understand it." Kind of like tragedy... \[laughter\]

**Mat Ryer:** Lots of people die in it...?

**Carmen Andoh:** That is what you're criticizing, Dave, I think, when you're seeing these libraries. They probably work perfectly well, but they're just not you, they're not your voice... I think there's a level of acceptance of pulling in -- barring bad, insecure code, and monkey patching... That's kind of what I tell my kids you have to live with when you program.

**Dave Cheney:** Guilty as charged on all those counts, but the point I was trying to lead to was the one that I closed on in the Zen of Go, which is that maintainability counts. Peters wrote "Readability counts", and I've thought a lot about this over the last couple of years in the writing I've done and in the talks that I've done, and in my experiences, being tech leader across a bunch of projects - the honest truth is that I've written Go for about 5-6 different companies, and I've left all of those companies, which means somebody else has to maintain this code after me.

I have felt anxious about that... Not as in "Oh, is someone gonna mess up my work?", but literally like "I'm leaving this debt for other people. And I've said it a couple of times now, if code can't be maintained, either because there isn't -- to give an example, the first Go code I wrote Atlassian was rewritten after I left, because I was the only Go programmer. It was reasonable that they rewrote it. But that is not a strategy for the growth of a language. Code that we leave behind as we move between jobs has to be maintainable and has to be sustainable.

\[35:51\] To summarize the whole thing, these are suggestions for maintainable Go code that other people coming into the project are going to be able to understand and work with, and also Go code that you'd be happy to work on yourself. In a way, it is trying to find a way of explaining idiomatic Go without saying "Don't do this. Don't do that", because idiomatic Go can also be quite positively absolutist, in like "Always do this, always do that."

The real take-away I want from this is that, for the success of our language and for the success of any project, it has to be maintainable, and that exists beyond any one individual.

**Mat Ryer:** Yeah. It's important even for yourself. When we write code, we often think "How are we gonna feel about this when we've forgotten about it next month and we come back to look at this? How obvious is it gonna be then?" It's obvious now, because we're in the weeds, but once we've lost all that context and we look at this later when we eventually find there's something wrong with it, how do we feel about it?

So when you think like that - imagine that you're gonna forget about this completely and come back in a month, if you think about writing it for that person, or for those people instead, I feel like that helps a little bit, rather than... When you're in the weeds and you're writing it, everything is very clear, because we've just spent hours trying to figure it out. So you've got so much extra information that \[unintelligible 00:37:14.13\] it's gonna go. Unless you can capture it somehow, you will lose it. So yeah, it is important to think about that, even for yourself.

**Dave Cheney:** I think the top -- Google C++ Group have a style guide; there's a version on the web. And the first item of that is "Write for the reader", or something like that. Obviously, an idea that has infused in Go, which is that the act of writing is immaterial compared to the cost of reading tens or thousands of times. It's probably a Kernighan or a Strung and White quote, "Write for the reader."

**Carmen Andoh:** Ha-ha! Kyle Simpson in The Economy of Keystrokes - another wonderful talk. He talks about the taxonomy of needs in the JavaScript world, which is "How do we rank the needs?" The needs of the reader trump the needs of the writer, trump the needs of the maintainer... And he goes on to explain in that talk - some of these idioms that we have, what are they for? Is terseness really better if you can't read it?

I really love the ideas coming out of that talk there. They're very similar to your words, Dave.

**Dave Cheney:** To give a shout-out to the author of Bitbar here - your ideas of "keep to the left", "return early", the patterns of guard clauses, and not putting successful code inside the indented block totally speaks for the reader.

**Carmen Andoh:** Yeah. You've talked about glancability before, Mat, and I think this is a different flavor. It's a visual flavor of this very topic.

**Mat Ryer:** Yeah, you're right. If we think about a database and we're gonna write some data and we wanna mix it with some of the things, we might choose to denormalize that... And that's a bit expensive at write time to do. But if there's so many reads happening on that, then of course, it makes sense. When it's that world, it feels okay, it feels normal. But when it's code, I don't know that we think like that, and maybe we should... Because like you say, David, it gets read if it's successful. It gets read a lot more times than it was written.

**Carmen Andoh:** Yeah. The one thing I keep thinking about though as Go enters in two million people, and new people coming in all the time - most of the new people are coming in with previous ideas, previous assumptions, previous idioms, previous culture... And that is the thing, when you ask questions like you show up to a company and "Do you wanna rewrite everything?" or what do you do when you want to try to get to some sort of consensus about culture idioms or whatnot... So how does that clash when you either are getting a team to try Go from another language, or writing a new service, and it's traditionally been thought of as a Java shop or a Python shop...

\[40:02\] In the same way that an American is going to maybe make some faux pas in another country, what are the faux pas that you get when you come to Go from other languages?

**Dave Cheney:** That's the $64,000 question.

**Carmen Andoh:** Yeah... \[laughter\]

**Dave Cheney:** To bring it back to where I think idiomatic -- the idea of idiomatic Go not particularly a good teaching tool is because it's literally saying "We don't do that around here. You're not fashionable. It looks weird." To take some examples, as Go is taking off inside Canonical, almost to a person, the first comment was like "Where are my list comprehensions? What is this rubbish? I have to write a for loop like an animal?"

**Carmen Andoh:** Yeah.

**Dave Cheney:** But this is just the starter time. It's important to note that at that point where this new programmer has been put on a team, and like "I've been told I can't use Python on this. I have to use this other language; I'm already feeling a little bit anxious", and you're told "This is just the way we do things around here" - that's the wrong message to send.

**Mat Ryer:** It sounds like you're in a Western, doesn't it?

**Carmen Andoh:** Yeah...

**Dave Cheney:** It is really a "Put up or shut up" kind of thing... That's not gonna lead to success for anybody. Either people are resentful that they don't have the things that they like from another language, or they're just confused, or they're embarrassed... There's a whole lot of social pressure involved there, of like "I've been put on this team. I don't wanna fail." So I just dislike that whole notion of the way that idiomatic Go is pointing to what other people have done and tapping the screen and say "Make it look like this." It might be a very didactic teaching tool, but it's not very humanistic.

**Carmen Andoh:** Yeah.

**Mat Ryer:** Another one of them on the list that I like is "Leave concurrency to the caller." This idea that as a package author, you really do want to deliver this amazing package... And especially if it's doing something and you know that it's gonna be used in a concurrent way. It's almost the fun bit, isn't it? It's the fun bit of the package, sometimes, and you have to maybe give that up for the sake of simplicity. What are the other benefits of leaving concurrency to the caller? Why is that important?

**Dave Cheney:** To give credit where credit is due, this is another one of Peter Bourgon's fantastic observations. I'm probably forgetting other people have contributed to this debate, but you're absolutely right. If you're like "I'm writing a find function, or a search function. I can bring all the power of the computer to bear on this. I'm just gonna start a few goroutines, we're gonna do this in parallel..." And that's great. You're like "That's the fun bit. I get to write the fun bit. I don't have to do the API call, or write the documentation etc. I get to do the fun bit."

But the difficulty with that - and I'll give a link for the show notes - is Peter talked about... I think he had a presentation at GoFest (the one that happens in San Francisco), called "The way I do things", which is about his experiences running Go. And one of them was this idea of "It all comes down to not losing track of that goroutine you started." A part of it is the very kind of dogmatic way I put it, of "If you start that goroutine, make sure you know where it's gonna finish." It's probably not one of the better ones on that list... But Peter's observation of "There needs to be some high-level concept of keeping track of that goroutine." If that goroutine is one that you started and holds resources, you need to know when it stopped, because you might need those resources back.

How many times have you fought with tests that are flaky because they're hitting little residual parts of the previous test case, that haven't quite shut down yet? That's the fundamental problem of concurrency - it's not that we can't start and use it very effectively, it's that we have to know when it's all shut down and finished... Because if you want to do it again, you can't run over yourself with the previous instance.

To bring it back to "Leaving concurrency to the caller", one of the best ways to do that is (unfortunately for the author) to give up the responsibility of "Who's gonna start that goroutine?" to the core, to somebody else. To provide them hooks... I mean, the easiest way to provide a hook for someone to run your function concurrently is just write a function. They can put it in a goroutine if they want.

\[44:14\] Those are some of the ideas that Peter has, these more complex notions of when we have workers. You think of the workers that collectively represent providing a service, like an index, or a search, or a thing that accepts connections - they kind of all conceptually work together as a group; you need a way of managing them as a group. So Go Kit's run package has some good ideas in there.

**Mat Ryer:** I was gonna say, one of the other things - if you do the concurrency inside your package... You know, in Go it's very easy to make something concurrent. It's not very easy to do the other way around, to take concurrent code and synchronize it, especially if it's running inside some package, and there's other channels and things that exist that you don't have any access to.

So that's another good point that people should remember - it's easy for people to make their own concurrency, and then they know what's going on. They're responsible for it. It is just a shame.

But I'll tell you one trick - and I've actually had this very recently... One trick is to write a little example that does it. You still get to do it, you get to prove it, you still get to see it working... You get the fun bit, if that is a fun bit for you... But it doesn't have to be a part of the package API. It could be an example that ships alongside the project.

**Mat Ryer:** I think the testable examples that we have, that just fall out of go test, are one of Go's undiscovered gems. They should be an example for every single API function. There isn't, because, basically, the documentation... But the power that they give to someone reading GoDoc - there's literally a piece of sample code. That isn't just from a code comment; it's tested, it works with the example that you're seeing, right there on the screen. It was such a straightforward thing, such a simple thing, but incredibly powerful. I can't think of another language in the contemporaries that has that baked in... Not just in the documentation, but the integration through the testing package and through the way that they're highlighted in GoDoc is just a hidden gem.

**Break:** \[46:15\]

**Johnny Boursiquot:** I would like to touch on the bit where if you think something is slow, prove it with a benchmark. That's actually one of my favorite features in the language. You don't have to bring in third-party tooling or anything like that to test the efficiency of your code; it's built into the language. It's built into the test framework. So if you think something is slow, don't just eyeball it; actually write the benchmarks to actually prove it, and then do the work.

\[48:00\] And to that point, I think there's this sort of -- early on, when I first started doing Go, there was this constant buzz around the community about "Oh, Go is fast, Go is fast, but you have to know how to use goroutines, you have to know how to program it just right." There was this constant murmur, a focus on pure performance. If this thing wasn't doing zero allocation, speedy... This was a time when we were coming out with that HTTP router every other week... Maybe this was a period where we as a community had to mature a little bit, get to know the language, and grow as developers...

But this whole notion that "Oh, if it's not fast (by some arbitrary measure), then you need to go back to the drawing board" kind of thing. So yes, please, do touch on that... Because to me, Go already solves a vast majority of the problems I have from a speed standpoint. Very rarely do I have to actually try to optimize just one part or one area of my code. Maybe that's just me, but... I don't find myself constantly having to worry about optimizing my Go code.

**Dave Cheney:** Yeah, so if you think it's slow, cards on the table, that was a little bit of my opinion doing this workshop on performance I come head-first into that Is-this-the-fastest-it-could-possibly-be-mentality, and unsurprisingly, I have had opinions about that.

The two things which I think are important in this discussion - there is a continuum between readability, between maintainability and performance. Does everyone agree that to make the fastest possible code sometimes the readability and the maintainability of the code has to suffer? And if the fundamental goal of this work is maintainability is the most important theme, then when you make that decision to de-optimize the readability of the code for performance, optimize performance by making it more subtle, harder to maintain... And it doesn't necessarily need to be even like "That code looks like crap on the page", it can be "This has very subtle invariance", like that part having been niled, or "That can only be said once." Very, very fragile things, which hurt more than just the readability and the maintainability. People are like "That code is very sensitive."

There are some examples in the standard library where a function is split into two, so that the simple case which usually is in-lineable, but the exceptional case is not - very subtle code, that if there wasn't a comment saying "Don't move that line", because literally \[unintelligible 00:50:30.06\] would never know.

The other point I was speaking to is dogma. Defer is slow. Always use atomics, never use a mutex. Those absolutist statements which drive that kind of thinking. So how do we know when is the right time to invest in more subtle, harder to maintain code? Use the benchmarking tools that Go comes with. Don't optimize for -- I'll give you an example... In Go 1.14 a deferred mutex unlock is almost as fast as a non-deferred version. When I say "almost", on my machine it was like 0.7 of a nanosecond slower.

So in the absolutist view you can say "Oh look, that's still slower", but the point is that's an uncontended mutex. That's literally one goroutine taking a lock and putting it back. Once you have that atomic actually contended, the cache line is moving between CPUs. Let me tell you, that 0.7 of a nanosecond is not going to count.

**Mat Ryer:** You're right. It's a good point as well, because as soon as you have a few things in your program interacting, things get very unpredictable, very quickly... Way too quickly, in my opinion. But... Physics, I suppose. Yeah, that's another reason to prove it, isn't it? That's why you sort of say "Prove it", because actually, it might be wrong, and you might be really surprised by how your code actually runs in the wild, or even just at some kind of realistic scale.

**Carmen Andoh:** \[51:59\] Yeah. And the one thing that I would say in terms of idiomatic Go is that you have to know when to also break the rules, and that's hard too, especially when you're a beginner. And when you talk about dogma - I mean, you can't have when each release is fixing previous problems that you were dogmatic about... Defer is the perfect example, with 1.14.

**Johnny Boursiquot:** It's stressful as a beginner who's learning the language, whether because you have to fork, or out of desire to learn something new, learn the language... It's frustrating to always be sort of second-guessing yourself "Am I doing this right? Am I doing this the idiomatic way?" or is somebody more experienced than me going to look at this code and tell me the very thing that Dave was advocating before? ...basically, don't say "Hey, we don't do things like this around here." So it's stressful.

To anybody out there who's learning Go, don't worry about whether it's idiomatic or not. Just learn, play. Hopefully, somebody will say "Hey, there's a better way to do it" and they'll do it the nicer way, rather than just say "Hey, this is not idiomatic" and move on. But even if you have those detractors, that's okay. There's no shortage of detractors, right? Just focus on actually just playing and learning. The idiomatic part - that's just gonna come...

I didn't come to a threshold in my Go journey where I just walked through and I'm like "Oh yeah, now I'm writing idiomatic Go!" That's not gonna happen. There's no marker, there's no milestone there. Your code increasingly just becomes what we subjectively can call idiomatic, but there's no official threshold. So just play, just learn.

**Carmen Andoh:** Yeah. My sister is a university Spanish professor, so she teaches language, just not a computer one... She's done it for over two decades now, and she can pretty much predict who's gonna learn Spanish and who's not by who's willing to get messy within the first week... Because learning is messy. So what you've just said, Johnny, is exactly that - just get messy. Do it wrong.

**Mat Ryer:** Sacré bleu.

**Carmen Andoh:** Yeah, there you go.

**Johnny Boursiquot:** \[laughs\]

**Dave Cheney:** One thing I think about with idiomatic Go - initially, it starts with well-meaning, like "Hey, you're new here. Let me show you around, let me show you the ropes, let me show you where the coffee machine is..." But at some point it can also become gatekeeping. We only do it this way. We're not going to change. And that's another important thing to realize, that in any healthy community -- spoken languages and the use of computer languages evolves. Think of memespeak; 20 years ago no one said 'lol'. That's a word that we just invented, and it changes the discourse.

So to put the final nail in the idiomatic Go coffin - the last thing I want for it to be is gatekeeping. "We've always done it like this." It should be totally right to question "Why do we always do it like this?" "Because we've always done it like that" can never be an answer in a sustainable community.

**Mat Ryer:** Well said. I think that's a really nice summarization of the show, actually. Okay, looking at my watch, I think it's time for our regular slot, Unpopular Opinion.

**Johnny Boursiquot:** Wow, you actually butchered that one up... \[laughs\]

**Jingle:** \[55:32\]

**Mat Ryer:** So does anyone have an unpopular opinion? It can't be about my timing this time... Dave, have you got one, please?

**Dave Cheney:** Do I have an unpopular opinion? Well, I've given you 11. \[laughter\]

**Johnny Boursiquot:** Well, according to Hacker News, you have. \[laughter\] What a fun bunch...

**Carmen Andoh:** \[56:10\] It doesn't have to be about Go... It could be about anything. Yeah, about anything. Here's your moment.

**Dave Cheney:** So... Think about your day. Think about the things that you've done in the day, and think about the things that have interrupted you during that day. Think about the things that have interrupted your focus. A lot of them are probably unavoidable, like "My dog just came downstairs", or your family, or there might be someone at the door... But the thing that occurs to me is that many of these interruptions are actually self-inflicted. Mobile phone notifications, pop-ups, chat messages, the inevitable clamor of Slack... All of these things interrupt your focus.

The thing that it seems to me is that as knowledge workers, we have three skills. The first one is our experience; the experience that we bring to our task. The second one is your ability to communicate. And the third one is your ability to focus. These are in order of difficulty and priority. Experience - we can always just google things. There are people you can talk to, you can get experience. Your ability to communicate kind of gates that; how well you can communicate, how well can you ask questions, how well you can you formulate your thoughts, how well can you convince other people to do things. But I think the most important one - and the one that I struggle with the most - is focus.

Think of all the things throughout the day, "Oh, I'm just gonna pick up my phone and have a look at Twitter." I've deliberately let myself be interrupted. And as a group of knowledge workers - and maybe this applies to everyone - your focus is your super-power. If you can't focus on anything, you can't get anything done.

**Mat Ryer:** That's a great one, actually. I don't think that's gonna be unpopular. I thought you were gonna go on to say you're now selling Dave Cheney straight jackets for developers. \[laughter\]

**Dave Cheney:** No, I think the unpopular thing is that there's a lot of things in this world which compete for our attention. No matter how much money you have in the world, you can't invent the invent the 25th hour in the day.

**Carmen Andoh:** Yeah...

**Dave Cheney:** So your attention is a commodity which is constantly being competed with -- and there are a lot of things in the modern workplace actually quite negative towards that. Being always available via notifications in Slack, and chat, and things like that... Not to say that chat is not fine, or that group chat is not fine, but can you honestly say -- to the radio audience here, can you honestly say that if you turned off your chat notifications for a day you wouldn't either a) feel guilty that you're ignoring your co-workers, or b) feel a little bit worried that your boss thought you were slacking off?

**Carmen Andoh:** Yup.

**Dave Cheney:** Yet, how are we as programmers supposed to work if we cannot create any space to focus in?

**Mat Ryer:** Yeah, this really speaks volumes to me, Dave... Actually, I'm working on a new project that kind of is founded on those exact principles. I think you're dead right. If there was a room with 100 developers working in there, you wouldn't walk in and just shout "HERE!" really loud, wouldn't you? \[laughter\]

**Carmen Andoh:** Right. \[unintelligible 00:59:11.24\]

**Mat Ryer:** And yet, that's what is happening on Slack. And it is a cultural thing too, because it's instant messaging. You expect that instant reply.

**Carmen Andoh:** Yeah. If you don't reply right away, "Why didn't you?"

**Mat Ryer:** Yeah, and you do feel like you're letting people down... So then you do react immediately to get it out of the way, so you can get back to focusing, and then you've just sort of rewarded that behavior and reinforced it a little bit.

**Carmen Andoh:** Yeah.

**Dave Cheney:** I'll ask anybody, in a day that they're at work, to just be cognizant of if you Slack, or Discord, or any chat system; it's not against any one of them... But do you reflectively Alt+Tab and just check the window? Just check to see if there's anything you should respond to.

**Carmen Andoh:** Oh... Guilty as charged.

**Dave Cheney:** \[01:00:01.15\] Because you're actively destroying your ability to focus. And if there's one thing that's gonna determine from two individuals who is gonna be more successful fundamentally, it's their ability to focus... Because that will preclude them from being effective enough as a communicator to reach out and get assistance from everybody, that will preclude them from being able to do any serious deep thinking, because they're either being interrupted by their circumstance or just have trained themselves to interrupt themselves. So this is the challenge that I've set for myself late last year. Anytime that I will reflexively think to pick up my phone to check my phone, I'll pick up a book. I always have a book with me, and I'll try and read a page.

I love reading Twitter when I get up, I love catching up with the world, just like I read the news over breakfast, but I realize just how easy it is for myself to get distracted by it... It's just an Alt+Tab away, or it's just literally sitting next to me, because we have to have these damn things next to us for our 2FA tokens. I can't leave this downstairs, or else I can't log in and do work.

**Carmen Andoh:** Or if you're an on-call rotation... Yeah.

**Dave Cheney:** So just think about how the circumstances have conspired to actively keep you in the state of always being interruptible, and how that fights against your ability to focus. I think Nate Finch had a tweet a long time ago saying "Where are we supposed to focus in open-plan offices?" There's my unpopular opinion.

**Carmen Andoh:** That's another Dantes Inferno's hell - open-plan offices are the real Dantes Inferno. \[laughter\]

**Johnny Boursiquot:** So all this interruption - we should note that you are excused from everything that we've just said about interruptions when you join the \#GoTimeFM Slack channel to participate and willingly choose to be interrupted with our fun discussions. So please, do keep doing that.

**Carmen Andoh:** \[laughs\] Well said.

**Mat Ryer:** Yes. But I fear our time has come to an end today... Dave, thank you so much. Anyone interested, check out the show notes--

**Dave Cheney:** Thank you for having me.

**Mat Ryer:** No, absolutely, it was a pleasure, as always.

**Johnny Boursiquot:** Thank you. Indeed.

**Mat Ryer:** Someone said in the Slack channel \[unintelligible 01:02:15.26\]

**Johnny Boursiquot:** Take it up with them. \[laughter\]

**Dave Cheney:** I barely know myself...

**Mat Ryer:** \[01:02:28.22\] But no, it's been great, and I think that is a lovely lesson as well that we should take away from this, which is if you do find yourself about to say something's not idiomatic, think instead about why we think that's idiomatic. What are the positives, what are the pros for that? Talk about those ideas instead, and be open to people challenging that. I love that idea. I think we should all actually spend a bit of time thinking about that.

**Dave Cheney:** Let me leave everybody with a challenge. This was the challenge that I set for myself - I became tech leader of this project that I've been working on at VMware for a while... As it's happened in many jobs as I've kind of been hired as the only Go programmer that they can find, I'm kind of seen as the expert. But I set myself -- as tech lead, you're expected to really love code, give guidance, things like that. But the rule I set for myself is that I was never allowed to use this "Just do it because..." "Do it this way because..." "Do it this way because I know better. Trust the experts, trust your father. Trust your betters. You'll understand."

I said to myself I was never allowed to use that excuse. So in a way, many of the things that I've been writing and working and thinking on are I can't use "Just do it this way, because trust me" as an excuse. I have to be able to justify everything that I'm saying, like "Thank you for this code review. I have some concerns about this API because of this second parameter. It doesn't seem to be used all the time, and that means it's confusing for a newcomer." Those are statements you have to make when you don't let yourself say "Just do it this way. Trust me. Do it this way. You're wrong."

So the challenge I'd leave to everybody is when you're having a discourse with other people, when you're giving feedback on code review, if you find yourself saying -- especially if you feel frustrated and you're like "Oh, we've had this discussion hundreds of times. Why can't you just do it the way that I said?", maybe it's because you haven't actually justified it. You're leaning on your own history, rather than having the open discussion about it. Rather than saying "Do" or "Don't", say "I think it would be better if..." and those kinds of statements.

So taking Scott Meyers' words to heart, never have those absolutes. Say things like "In general, prefer...", or when you do make an exception, you talk about it." That is the challenge I leave to everybody. When you're talking about code with your co-workers, don't just say "Do it because...", say "I think that this would be better, and these are my reasons." Because it is fundamentally your opinion at the end of the day. But instead of making it absolutist, you say "Here are my suggestions. Do you agree?"

**Mat Ryer:** Well, challenge accepted, and I hope all the listeners do, too. Dave, thank you so much. Please come back. And for everyone else, we'll see you next time.

**Break:** \[01:05:32.09\]

**Mat Ryer:** Hello! \*coughs\* That's a bad start. Sometimes, kids, things don't go to plan... And that was one of those. Just a little cough at the exact wrong time. But don't worry, through the power of editing, this will definitely make it into the end thing.

**Johnny Boursiquot:** Yeah, it's definitely staying in, yeah.

**Mat Ryer:** Yeah, isn't it? This is gonna be like a DVD extra, for some reason... \[laughter\] We don't have many moments to use, but little things like this... Someone coughs - that's gold; get that on the DVD extra. Okay, I'll do it again...

**Carmen Andoh:** "Dad, what's a DVD extra?" \[laughs\]

**Johnny Boursiquot:** "What's a DVD?" \[laughter\]

**Carmen Andoh:** "Dad, what's a DVD?" \[laughter\]

**Mat Ryer:** Oh yeah, I forgot the world's moved on...
