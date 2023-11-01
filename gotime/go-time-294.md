**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we are indeed getting a little bit spooky. We're going to talk to John Gregory about his Seven Deadly Sins of Go. And it's the perfect season for it - nights drawing in, it's starting to get dark, we've all turned our gain up a little bit, so we feel more close into your ears... So it's gonna be a very cozy chat here. Joining me, it's that John Gregory that I just mentioned before. He is called John Gregory. Hello, John.

**John Gregory:** Hey there. Yeah, yeah. Well, I'm John. Yeah.

**Mat Ryer:** Yeah. Okay, good. Well, I'm glad we're confirming that. That's how we normally like to start the show.

**John Gregory:** Well, you never know...

**Mat Ryer:** Kris, can you also confirm that your name is Kris please, in a very formal way? Kris Brandow is also on the show.

**Kris Brandow:** Yes, yes. That is in fact my name. I don't know how to make it more formal than that than you are correct. That is my name.

**Mat Ryer:** Thank you. I accept it. And also Johnny. Johnny Boursiquot is also here. Johnny, confirm your name. It's Johnny, right?

**Johnny Boursiquot:** Yes, it is. But this episode, in this episode only, I shall be henceforth known as Count Golang Johnny. \[laughter\]

**Mat Ryer:** Oh, that's brilliant. Okay, I'll have to be Bat Ryer, I suppose. So I'll be Bat, Count Johnny. Do you two want to quickly now improvise a quick name for yourselves?

**Kris Brandow:** Absolutely not. \[laughter\]

**John Gregory:** I'm good with one of them.

**Mat Ryer:** Okay, great. Well then, Richard, why don't you kick us off? We're talking about the Seven Deadly Sins of Go. So what are the seven deadly sins, first of all? And then tell us a bit about your talk.

**John Gregory:** Most people are, I think, vaguely aware of the seven deadly classical sins of lust, wrath, sloth, greed, gluttony, envy and pride... Depending on what site you look at, there may be some slight disagreement about the order or some of the actual wording of them, but those are the ones I kind of went with.

**Mat Ryer:** Interesting. I can't believe they can't agree on the order. What's going on?

**John Gregory:** I know, right? I mean, it's probably written down somewhere...

**Mat Ryer:** Is it about like these -- they're in order of how bad they are, and that's why people are debating it? Is that the big debate going on in the old deadly sins world?

**John Gregory:** I suspect people write it down in whatever order they think looks best. But I think yeah, classically, one is probably supposed to be worse than the other, but... Let's have a look at how these potentially refer to how we code Go. I thought it'd be a fun little thing to do.

**Mat Ryer:** And it was. It was a great talk. It was at GopherCon UK this year, 2023, in London. Yeah, so basically, talking about a sin, and then lining that up with a Go misspractice/antipractice/antipattern, something like that.

**John Gregory:** I mean, I'll admit, some of them may be a little tenuous, but I think they generally work.

**Mat Ryer:** It's not gonna be perfect, is it?

**John Gregory:** No.

**Mat Ryer:** You did the right thing. Okay, cool. What order should we go in? I'll tell you what, how about this - Kris, can you please, out of the list, pick what is in your opinion the worst of these sins?

**Kris Brandow:** Oh, what is the worst...

**Mat Ryer:** Yeah, we'll start with the one -- oh, no, no. Should we go the other way around?

**Kris Brandow:** The least?

**Mat Ryer:** Yeah, go on. That's it. So Kris, tell us. Which one?

**Kris Brandow:** What's the least worst?

**Mat Ryer:** Yeah. Absolutely.

**Johnny Boursiquot:** Careful. I'll be judging you based on what you pick first.

**Mat Ryer:** Yeah, everyone will be. Everyone will be. \[laughter\]

**Kris Brandow:** I would say pride is probably the least worst. I mean, these are all just -- looking at the subscriptions, these are all terrible. But you know, over the opinion of the libraries, my justification is that I just don't have to use those libraries. So that's why they're the least worse. These other ones are just like "Ah, no, this could affect any code that I write."

**Mat Ryer:** Oh, I see. So you're actually looking at the Go version of it. I want to know which of these sins in your opinion morally is the most acceptable.

**Kris Brandow:** Oh, the morally sins. Oh, okay.

**Johnny Boursiquot:** It's a different show now.

**Mat Ryer:** It's spooky time. It's Go Time Spook Town after dark.

**Kris Brandow:** And I have to remember what these are in like the moral sense, and not just the --

**Mat Ryer:** Yeah, because they are quite weird. One of them's just sloth, which -- I just thought that was an animal. The sloth. It's an animal. I don't know why it's in the list.

**Kris Brandow:** Wait, what is sloth in a moral context?

**Johnny Boursiquot:** It's laziness, I believe. Yeah.

**Kris Brandow:** Oh, that seems like the least worst one from a moral standpoint.

**Mat Ryer:** Okay, here we go. It's got a get out of jail free there with the sloth. I think that's a fair shout, actually, Kris. I probably agree with that. So John, why don't we start with sloth, and why don't you tell us what was your Go version of the sloth sin?

**John Gregory:** So yeah, this is probably one of the most straightforward ones, because I just went with this one of lazy coding, in the sense of lack of context. So not adequately commenting your code, or writing comments that are probably not worth the amount of time it took you to write them... And a big bugbear of mine - not adding context to errors, where people just go "If I were not equals nil, just return error. I'm sure someone will figure it out later on down the stack."

**Mat Ryer:** Okay, interesting. So it's interesting what you say about comments. If you think about -- I used to do this, where I would think "I want to comment everything to make it very clear, because that's what you do if it's professional." That's just too much, isn't it?

**John Gregory:** \[00:05:56.18\] Yes and no. I would argue maybe I overcomment to an extent, but then I tend to write my code with newer people in mind, so I tend to be a bit more over-explicit about, essentially, the business logic that's going behind it, so people can follow it a bit better... But yes.

**Mat Ryer:** You mean new people like babies.

**John Gregory:** I mean, I would contend Go is an easy language to pick up, but there may be the odd limit... Yeah. I mean, you've got to be able to at least handle the keyboard, not dribble on it too much.

**Mat Ryer:** Yeah, that's true.

**John Gregory:** That hasn't stopped me so far.

**Kris Brandow:** When it comes to contextual comments though, I don't know if you can have too much. I feel like you can have too many, just like, set a variable, a equals five, and you're like "This sets variable a to five." Like, not that. That's not a contextual comment.

**Mat Ryer:** Yeah, not that.

**Kris Brandow:** But when you have contextual comments that are adding to the code, I don't think you can have too many of those. I just think you can pile on quite a lot. But that's not the type of comment that people usually write...

**Mat Ryer:** You read novels though, don't you, Kris?

**Kris Brandow:** I write novels. What are you talking about? \[laughter\]

**Mat Ryer:** Oh, there you go.

**Johnny Boursiquot:** Oooh...

**Mat Ryer:** You're into the words...

**Johnny Boursiquot:** Wait, hold up. There's another thing here I think we have to sort of call out. In the age of AI-assisted coding, when you can ask some sort of AI assistant to say "Hey, tell me what this function does" or whatnot, piggybacking on what Kris is saying, the why is more important than the how. Because you can always ask "Hey, tell me what this code does if I don't understand what it is", and you'll get an algorithmic description of whatever it is the code is doing. But I think this kind of requires the documentation that you're adding to be more sort of at a higher level, meaning that this is what this service does, and these are the components of this service that interact with each other in this particular way, to deliver this kind of value... I think, to me, that becomes way more important, and so seldomly do I actually find those things at big companies, small companies... I never find, "Why does this service exist? Why does this component exist? Why does this plugin exist? What are we using this for?"

So somewhere along the line, like maybe a product manager or a project manager had that information, because they talked to the business to relay that to the developers, but all of that background context is completely gone. It's completely lost. So here I am, walking into this codebase that might be 2, 3, 5, 10 years old, and I have no context for the existing of this thing. Should I delete it? If I delete it, if something breaks, that actually does more to tell me where this thing fits in into the grand scheme of things, than the actual code itself. Because I have no idea why this code exists.

**John Gregory:** That is exactly the crux of what I was getting that. To be fair, you pretty much summarized everything I had in my talk, and all the bits I cut out, because I didn't have enough time to get it all in. \[laughter\]

**Johnny Boursiquot:** You're welcome?

**John Gregory:** Because yeah, it's exactly that. I don't want comments that say "Add two numbers together", because I can see it's adding two numbers together. I wanna why you're adding two numbers together. The example I came up with was very similar to you. It's like, you find a bit of code within 10 years time, if it's still around, where someone in the middle of doing something changes a field, or adds 10 to a field. And it's like "Why?" That might be a business-critical function, that if someone changes it, you're going to lose millions. Or it could be a bit of debugging code that someone left in and has forgotten to take out in th last 10 years. But you have no idea. So yeah, that for me -- it's that context of why, in the wider context... Because it's not just that service you're potentially looking at in the micro service world; this could be referring to some functionality that's way off somewhere in the cloud or microservices elsewhere, but it relies on it here.

**Mat Ryer:** Yeah, exactly. Okay, great. So I think that's really great. By the way, John, it sounded like you said "In 10 years time, if you're still around..."

**Johnny Boursiquot:** If the code is...

**Mat Ryer:** Oh. Right. I thought --

**John Gregory:** Or if you're still around at that company, because otherwise it's someone else's problem... In which case it's even more important that you leave decent context behind it. Otherwise they hunt you down in the future.

**Kris Brandow:** \[00:09:51.06\] I also think that those contextual comments can be useful for debugging. So if you're reading some code and you're like "This code isn't doing what I think it should be doing", you can just go and look at it and it's like "Oh, well, there's a comment here saying it's supposed to be doing this other thing. So either this comment's wrong, or this code's wrong. Let me go figure out which it is, instead of just assuming." I've gone to many new companies and seen codebases like that. And then I go talk to the person that wrote the code and they're like "Oh, yeah, we decided to change some stuff, so now this comment's not right." It's like, "Oh, I'll just change the comments and now it's the correct thing."

**Mat Ryer:** That's a good point. You've got to also look after it, maintain your comments as well. That's a rabbit hole \[unintelligible 00:10:23.00\]

**John Gregory:** It is. I've seen that so often, where someone's changed the code and then they haven't changed the comment; they went along with it and now it makes no sense whatsoever.

**Mat Ryer:** Yeah, that's why I like tests, honestly. Tests do a lot of that lifting for me. They don't completely replace comments, but I like tests for that same reason. And commit messages too, actually. Good commit messages. I did want to say on Twitter, it's fine to sometimes follow up commits with like tweaks; just making that statement, because I wanted to do it and justify it... And then I got piled on on Twitter... But I don't care. Come and get me.

**John Gregory:** I think it's an interesting point you make about tests, though... Because the same thing kind of applies. I've seen plenty of tests that absolutely 100% test the function. And it's absolutely correct. However, the function doesn't do what you actually meant it to do. If you've got a function that adds two numbers together, and it's unit-tested to the nth degree, and it's perfect... But what you actually needed to do is multiply two numbers together.

**Mat Ryer:** Yeah, so your tests have got to be right as well. Pretty good one that. Any other comments on this? This is quite a good sin. A good choice, sloth... Which is also an animal. \[laughter\]

**Kris Brandow:** I do to say that if you don't add comments to things, that's how you get haunted gardens. And it is spooky season, and people generally like haunted things now, but they will not like it the rest of the year. Or really even now. People don't like haunted gardens. They don't like that scary part of the codebase. So prevent the haunted by commenting.

**Mat Ryer:** Yes. Excellent. Excellent. Okay, Count Johnny... By the way, congrats on nailing it earlier, Johnny, on that bit where John said you said exactly what he was gonna say. That was really good. That was really cool.

**John Gregory:** So if someone else can get the next one perfectly accurate as well, that would be fantastic.

**Mat Ryer:** Well, I think it's just become a game show. \[laughter\]

**Johnny Boursiquot:** Yeah, John can just confirm.

**John Gregory:** If you can get word for word what I was going to say... I'm not sure Mat will sort you out with a prize, or \[unintelligible 00:12:11.24\]

**Mat Ryer:** I'll sort you out with an accent. I think I can pull off John's accent. Count Johnny... This isn't -- I'm just doing general Dracula voice. Count Johnny Golang... Why don't you pick the next --

**Johnny Boursiquot:** The next least morally objectionable one?

**Mat Ryer:** Yeah, in your opinion, yeah. That you were prepared to publish knowing that people who you work with watch this and listen to it.

**Johnny Boursiquot:** Yeah, don't be judgy, alright? Neither y'all on this here recording, or those listening later, don't judge me for this. But...

**Mat Ryer:** All the HR department...

**Kris Brandow:** Didn't you just say that you were gonna judge me if I'm gonna --

**Johnny Boursiquot:** Hey, hey... Do as I say, not as I do. Okay? Alright? \[laughter\] Alright, alright. Let me pick what I think is the next least egregious one. I think I'd have to go with pride.

**Mat Ryer:** Pride.

**Johnny Boursiquot:** Yeah, I think pride would be the next least egregious one. Yeah.

**Mat Ryer:** Yeah. But then people say you should be proud of your stuff. What does this mean? Why is this a sin?

**Johnny Boursiquot:** Yeah, it's that when you cross that line, which I can't wait for John to elaborate on what he means by overly-opinionated libraries... Are we talking frameworks here? Or what do you mean?

**John Gregory:** Writing the sin for this one was hard, because it's like, pride is a good thing. So how can I make this a bad thing...? So it may be one of the more tenuous ones... So I took it as maybe assuming you know what's best for people when maybe writing libraries or frameworks. It comes from some very real experience of mine, where I was looking for a library just to do a fairly simple thing, or so I thought... I was doing some JSON schema parsing. Yeah, great. But no library I found would do what I wanted to do, because I wanted to be able to parse it, and then generate some code from it. But every library I found that did something similar, did it in their own special way. They all worked wonderfully, but none of them quite did what I needed to do. So I'd have to like postprocess do something else to it, or whatever.

\[00:14:18.07\] So that was the first issue. And then I thought "But hey, you know what? This is Go libraries. I could just hook into it, use whatever functions they're using, and just write my own wrapper around it, and maybe do the bit that I didn't like myself." Until I found out all those bits were private inside the packages, and I couldn't get at them. Because whoever wrote the library had decided "Ah, you don't need to know about this. This is fine." Which, you know, for some things in libraries is perfectly fine. Some stuff is genuinely -- it's internal to the library, it's private. You don't want to have to maintain it, because of course, if it goes into the public API, you've got a contract. You've kind of got to maintain it in your library. But sometimes you've got some fairly arbitrary functions that you could just expose, but they've just decided to make them private, and now your library becomes useless to me, because I can't use it.

Another very good example is I was writing a little program to check that people don't commit secrets into Git... Because you know, that's generally a good thing to make sure that stuff don't get committed. And almost every Git tracker thing I found always works on the Git history in the most part; or certainly it did a few years ago when I was looking at it. And what I wanted was it not to get into the Git history in the first place, rather than have to go and find it and then strip it back out. So I wanted to use somebody's library to do that, but none of them worked in that way. So "Hey, let's try and use whatever checking function they're using, because they've done the heavylifting of writing all that, and just write my own wrapper that does it earlier in the process." But again, I couldn't get at it, because it was all private, and I ended up having to write my own from scratch... Which was fun, and if I do say so myself, it's a rather nice little library... But I shouldn't have needed to do it.

**Mat Ryer:** What's it called?

**John Gregory:** It's gitdiffcheck. It's in my GitHub.

**Mat Ryer:** We'll put a link to that in the show notes, and people can judge for themselves if it's a good library. They don't need to be told by you, John... \[laughter\]

**John Gregory:** I mean, I still use it...

**Mat Ryer:** That's a good sign.

**Johnny Boursiquot:** I do have a question on this, though... Why do you think - you, from your perspective - the library is opinionated? Is it because it's doing too much? Is it because maybe it should be broken up into smaller libraries that work together, and allowing you to pick what you need? Or what makes it overly --

**Mat Ryer:** What's your beef?

**Johnny Boursiquot:** \[laughs\] Yeah, John, what's your beef, man?

**John Gregory:** Or meat of choice.

**Mat Ryer:** Yeah, or meat supplement. I just wanna make sure it's all-inclusive.

**Johnny Boursiquot:** What's your lamb, John? \[laughter\]

**Mat Ryer:** What's your \[unintelligible 00:16:47.17\]

**John Gregory:** Anyway...

**Mat Ryer:** We should move on. Edit it.

**John Gregory:** It's about putting a little bit of extra thought into when you're doing something... Because you said about breaking stuff up into smaller chunks. Yet again, that was actually something I did when I was writing something a while ago. I don't know if you've come across ELIZA, one of the first ever pseudo/pretended-to-be AI chatbots way back when. So a long time ago now, I fancied writing a Slack bot. Because you know, everyone writes a Slack bot at some point in their career... And I needed something for it to actually do. I just wanted to write it to learn how to write it, rather than to actually do anything. So I thought "Why not just implement an ELIZA chatbot in Slack?" Great. Loads of fun. But when I did it, I wrote it specifically split up such that the ELIZA engine is completely separate. So if you want to import that into your own -- write your own Slack bot, Teams bot, command line app, you can do that. The actual Slack bot part of it, the opinionated bit, of like "I'm writing this as a Slack bot" is a totally separate wrapper that just happens to use it. So if you wanted to do it, you have options; you can either just install it as is, as a Slack bot, or you can go "Ah, I don't want any of that stuff you wrote. I just want to use the core implementation." So yeah, it's just more around that kind of thinking, of assume someone is going to use your library potentially in a way you didn't originally intend. Not madly, but you know...

**Mat Ryer:** \[00:18:24.02\] Yeah. Give them options.

**Kris Brandow:** I feel like the pride part of this would come in as like assuming that everybody's going to use this in the way that you want to use it, so you're prideful in thinking "Oh, of course, the way that I think about things is the correct way."

**John Gregory:** Yeah.

**Kris Brandow:** "So this is how people are going to use it." So you're not making it open to extension, and all of that jazz.

**Mat Ryer:** Other examples are things like logging... You know, let people figure out, bring their own loggers. I think let people do their own concurrency as well.

**Johnny Boursiquot:** Yes...

**Mat Ryer:** Sometimes it's very tempting to want to just solve that problem for them.

**Kris Brandow:** Yeah.

**Mat Ryer:** But it's kind of hidden. And it's much easier to do a bit of concurrency just in a little function, rather than everything else. The other one is panic. Don't panic. Have errors instead.

**Kris Brandow:** Yeah. That's -- that's another sin!

**John Gregory:** Yeah, don't get into it. You're gonna ruin the other sin!

**Mat Ryer:** Don't get ahead of ourselves...

**Johnny Boursiquot:** You ruined the other sin.

**Mat Ryer:** Bat strikes again...

**Johnny Boursiquot:** Dang it, Bat! \[laughter\]

**Kris Brandow:** I do feel like on this one, too -- I was thinking about this the other day... I could never find the video; maybe I'll go search for it again at some point... But I remember there was -- I think it was about custom elements. This is like frontend stuff, web platform... I think it was like after AppCache, where they were like "AppCache sucks." And for those people that don't know, AppCache was like the first attempt to do offline web applications in the browser. It was this kind of big API that was unruly, because it tried to kind of do everything... And it didn't work for anybody. And the lesson that they learned from that is we should build lower-level APIs and give them to people, and they'll build the things that they need, instead of us trying to dictate something toward them. I feel like that same advice applies to Go libraries, where it's like, provide something small, of value. And if you want to provide a larger value, provide many small things you can assemble together into that bigger thing. Because that also opens up -- you know, for that use case, like you had, John, where it was like "I just want this one little part of this. Can you just like let me have this one little part of it?"

**John Gregory:** Yeah.

**Mat Ryer:** Okay, well, we've got a lot of sins to get through, so we'd better crack on. We've had sloth, we've had pride... John, what's the next not as bad one?

**John Gregory:** Not as bad one...

**Mat Ryer:** And I think that is proper English, if you care to google it.

**John Gregory:** Let's go with envy then.

**Mat Ryer:** Envy... Envy. Yeah, envy. I don't know, it depends what you do with it, doesn't it? If you're envious of something, and it makes your work hard to go and get it, maybe that's not so bad.

**Johnny Boursiquot:** I can think of a few examples. Guby, Gython, Gava... \[laughter\]

**Kris Brandow:** I would say this might be the worst sin for Go.

**John Gregory:** I mean, yeah, writing Go as if it was a different language. Yeah. I think it's the commonest sin, in general, and I think it's the one that I was most guilty of when I first started coding Go, because I came from a background of different languages, like Perl, Python, Java... Four of my other sins.

**Mat Ryer:** What did your Go look like?

**John Gregory:** Well, I think I made the mistake everyone makes, certainly if they're coming from Java - I tried to write Go as object-oriented with classes, and I very quickly got into a mess and I realized why that was a very bad thing to do, and I spent the rest of my life trying to stop people falling into the same trap.

**Mat Ryer:** And that's why you did this talk, and come on podcasts, and stuff, isn't it?

**John Gregory:** Yeah.

**Mat Ryer:** Yeah, so learn why the decisions were made in Go, and how to make the most of those by structuring your projects and writing your code, really, in a way that kind of suits that. Right? And it's funny, because factories is an example I hear a lot in Java, where they say "Don't make factories", and stuff. But genuinely, sometimes it is the perfect pattern if -- say it's driven by a config or something, and you need a thing to create another thing. Do you know what I mean? So I also think we go a bit far on the "Exclude everything from other languages, just because they're in there", too.

**Kris Brandow:** \[00:22:15.20\] I feel like this happened with locking specifically, because in that early days of Go it was like "No, use channels for everything. Don't use mutexes. Mutexes are bad." And that was definitely one of the things that I struggled with for a while, because I was just like "Oh, I'll just use channels instead of mutexes." I'd write all this code, and it was just like "Just use a mutex. It's fine. It's not that terrible." And I feel like we as a community have moved on from that, so now everybody's like "No, it's okay to use locks and mutexes. You're good." That was one of the early day things, where it's like "No, no, Go is all about concurrency, and you should use channels for concurrency. If you're using locks, you're doing it wrong."

**Mat Ryer:** Yeah, because that was the cool feature that Go had, that other languages didn't have, so of course we want to use it...

**Kris Brandow:** Right.

**Mat Ryer:** But yeah, I actually think we've swung probably too far the other way a bit, again, on that issue. I think we will settle a little bit somewhere in the middle, because I think people are just not using channels at all anymore. I don't think anyone uses channels anymore.

**Johnny Boursiquot:** Wow, that's pretty extreme, Bat... \[laughter\]

**Kris Brandow:** I feel like -- and maybe this is an unpopular opinion, but I feel like channels would be slightly better if I could pass multiple values down at once; kind of like I can return multiple things if I could just like pass a value and an error at the same time. That would be nice... But I understand why that doesn't work that way.

**Johnny Boursiquot:** So you want a multi-lane highway, as opposed to a single-lane highway...

**Kris Brandow:** Yes. I would like to not have to do it myself. Because obviously, you can make a little struct that has the value and the error in it. But I'd like to just have it be part of the language. Just like multivalued returns are part of the language.

**Mat Ryer:** Yeah. Could they not add that on? I feel like we could have that.

**John Gregory:** I think that would make life so much easier, because the amount of times I've got a separate error channel, or \[unintelligible 00:23:55.25\] Or just using like an any type, and then having to interrogate what it is back on the other end, or something, depending on what you're doing... Yeah, you could just, say, return an error. Because I know there's -- obviously, we've got error groups and such now... But you know, different situations.

**Mat Ryer:** I mean, the solution, really - you have to create a new little type that has the value and the error for each of these cases, and you get around it.

**Johnny Boursiquot:** We should be careful not to sound hypocritical, right? Because we've just said "Hey, make small things we can build on top of." Now we're arguing for making bigger things, that do more things.

**Kris Brandow:** I mean, in theory, you could probably, now that we have some generic functionality, do this sort of thing with generics on your own, and make it not... But yeah, I understand that this little thing could also have massive implications for the language, so I'm not saying that we should just go do it. I'm just saying it'd be a nice thing, that we could probably maybe use channels more often.

**Mat Ryer:** Go Time has not yet reached the point where us just chatting decides the future of the language. We are just not there yet.

**Johnny Boursiquot:** Not there yet.

**Mat Ryer:** We are growing, we're always growing, but...

**Johnny Boursiquot:** Not enough clout, not enough likes, not enough followers, not enough retweets...

**Mat Ryer:** Not yet. Yeah, exactly. Tell your friends, everybody. What do you mean they don't know what Go is? Of course they don't, because they don't listen to Go Time. What do you mean they don't even have a computer? Get them one for Christmas, or one of the other festivals in the world. There's loads of them, so you've got no excuse... And get them into it.

**John Gregory:** I will say, on that front at least - yeah, Go is very easy to set up. I had the misfortune of trying to set up Java and VS Code the other day... My laptop almost went out the window.

**Mat Ryer:** Oh... \[laughter\] And Go, of all the languages, is one of the quickest to type into Google.

**John Gregory:** As long as you remember to put Golang, not Go. Otherwise...

**Mat Ryer:** You get in trouble.

**John Gregory:** Yes.

**Kris Brandow:** No, in recent years, just writing Go has gotten much, much better.

**John Gregory:** Yeah.

**Mat Ryer:** Are you in Incognito mode? Because otherwise, isn't it just learning your --

**Kris Brandow:** \[unintelligible 00:25:52.25\] incognito, yeah. As long as it's like something that looks kind of Go-ish... If you're just saying like "Go function" or something like that, then it's gonna be like "Oh, here's some random stuff about computing."

**Mat Ryer:** \[00:26:04.08\] Why are you searching for Go in Incognito mode?

**Kris Brandow:** To see if it works. Because people say you have to use Golang. So I'm just like "I don't think you have to use Golang, so I do it in Incognito."

**Johnny Boursiquot:** I think Bat's trying to insinuate that your next sin will be lust... \[laughter\]

**Mat Ryer:** It was a link...

**Kris Brandow:** I mean, Mat gets to pick the next least worst sin, so... I don't think that lust is the next least worse though...

**Mat Ryer:** Oh, well, it's up to me, mate...

**Kris Brandow:** Oh, it is, but we can judge you...

**Mat Ryer:** You can.

**John Gregory:** We really should get into wrath here... \[laughter\]

**Mat Ryer:** It's turning into it, isn't it? I can feel a little bit of hostility, to be honest... Let's go for lust as the next one. Lust of course is what happens to people when they love Rust... \[laughter\] I don't want to get into the moral side of this, but you know... It's very natural stuff going on there, you know...

**Johnny Boursiquot:** Did you know -- I just now realize, while I was looking at the word, that the letters in lust also spell out \*bleep\*. \[laughter\]

**Mat Ryer:** That one's getting cut... \[laughter\]

**Johnny Boursiquot:** It just dawned on me. I'm like "Wow!" Was that like premeditated? Was that on purpose? Whoa... Mind blown.

**Mat Ryer:** Wow... Count John as a saucy kind of guy.

**Kris Brandow:** That's a bit for Plus Plus...

**Mat Ryer:** Yeah, yeah. That's a "Subscribe to Changelog Red" right there. Alright, John... Lust. What was your Go sin for lust?

**John Gregory:** Well, I mean, you sort of said it a little bit earlier... Again... When we were talking about channels and things - it's exactly that. Especially when new to Go we're all thinking "Hey, the thing about Go is concurrency, right?" So everyone jumps in and goes "I've got to write goroutines everywhere. I've got to do everything with channels." And they end up with this massively complicated bit of code, where they step back and go "But it's fantastic Go", and you go "Yeah, but you could have just done that with three lines of code, and not had all the issues."

**Mat Ryer:** Yeah.

**John Gregory:** Because all those features are really powerful, and they're really great if you need them... But I think a trap a lot of us fall into is that "Go is concurrency, therefore you should use goroutines for everything." And then you very quickly realize, "Oh, actually, now I need to instigate channels, and waiting patterns... And how do I debug this thing? And how on earth do you unit-test?" And you fall into all these little rabbit holes.

**Mat Ryer:** Yeah, I think that's a really good one. And I like the link to -- like, you're lusting after these cool features. John, do you think channels are sexy?

**John Gregory:** I mean, I've never quite thought about them in that context... \[laughter\]

**Mat Ryer:** But they're sort of attractive features... And I remember -- it brings a lot of people to Go. Channels milkshake brings a lot of...

**Johnny Boursiquot:** The boys to the yard? \[laughter\]

**Mat Ryer:** Yeah. It brings the gophers to the yard.

**Kris Brandow:** It brings the gophers to the hoard. There we go.

**Mat Ryer:** There we go. So yeah, so I think that's a nice one. And honestly, "Simplify, simplify, simplify." Just make things as simple as possible.

**John Gregory:** Because I think people don't realize in a lot of cases that Go is performant enough for what they need without having to do it... Because it's a big selling point for Go, with the performance and the concurrency... And so if they come from another slower language, or an interpreted language, they come in and they go "Right, we need to use goroutines, and all these channels, \[unintelligible 00:29:36.17\] Get all this hyper-scaling." And it's like, "No, you just do standard HTTP server, and it already handles thousands more requests per second than you had before." You don't have to do anything special. Just save that for when you need it.

**Mat Ryer:** Yeah. And I'll save that little sound effect of you standing up and down when I need it as well. That was a brilliant little sound, and I hope we have that on our soundboard for future episodes.

**Kris Brandow:** \[00:30:06.23\] Oh, Mat... I feel like with the complex features as well - people usually do come to Go because they're like "Goroutines and channels, and all this concurrency", and all of this... But I think there's this other selling point of the simplicity that you get from Go, from it pushing back on you very hard when you're trying to write overly-complex things. Like the lack of cyclical imports, or... I think Kaylin talked about this on the podcast a couple of weeks ago, where she mentioned that the talk that she did at GopherCon was inspired by her sitting with a bunch of other gophers and looking at code at GopherCon in 2019, that they'd never seen before, and they were all like "Oh, you're looking for this thing? Scroll up." And she was like "Well, how do we all know that this specific definition--", I think was like a method or something, "is gonna be up and not in some other file, or somewhere else?" And it's like, those are the things that I think make Go a) more performant overall, but also, that's one of the selling points, is like "Hey, you kind of know where things are. You can walk into any Go codebase, as long as it's written in actual Go and not \[unintelligible 00:31:01.08\] or something, or Guava... Guvy? Guvy. Not Groovy. Guvy. You kind of walk in any Go codebase and you can see "Oh, this is where these things are supposed to be." And there's also a sense of "Something is missing here. Something's not where it's supposed to be. Why isn't it here?" and you can go fix that as well. And I think that's one of the big selling points of Go, is that once you know Go, you can kind of read any of these codebases.

**Mat Ryer:** Yeah. How do you learn that? Does that come with experience? Because I know what you mean about looking at a file and you sort of have a sense of where a particular type is going to be, based on almost the importance of it in the file.

**Kris Brandow:** Yeah, I feel like it's just that thing you have to go read a bunch of code, and you eventually pick it up. It's something we could probably write down, but I don't really know how we articulate it.

**Mat Ryer:** Yeah. Interesting.

**John Gregory:** Yeah, I think it's one of those things idiomatic in Go, where you don't want to be overly prescriptive about it, but at the same time, a little bit of extra pedantry when someone's first learning Go, to get them into those good habits, saves so much time later... Because sometimes you'll get a lot of pushback on pull requests etc. People will be like "Oh, yeah, but why do I have to put it there? Because I can just put it over here." Well, yes, you can. They both work. Go lets you do it. But if you do it this way, then other people will be more familiar with it, they'll be able to just easily parse it, and it will just make your life easier in the future. But it's hard to articulate exactly how at this point. It's only later when you've hit that revelation, you've hit the issue, when you go "Oh, I see why I shouldn't have done it that way."

**Mat Ryer:** Yeah. That goes for a lot of the complexity, and avoiding it. We want to do what's interesting and hard. We want to do hard things. So it's fun to do, but it's later when you pay the price. The Reaper comes to reap the -- Ghost of Christmas Future comes back and it's like "What have you done?" No, it doesn't speak like that. It's just "Dong!" A bell chiming. Terrifying.

**John Gregory:** The celestial garbage collector. \[laughter\]

**Johnny Boursiquot:** Nice!

**Mat Ryer:** Right. Whose turn is it to pick the next one?

**Kris Brandow:** I guess it's mine again.

**Mat Ryer:** Yes, it is.

**Kris Brandow:** We've got wrath, gluttony... I'll go with gluttony.

**Mat Ryer:** Okay. Gluttony. And this one in real life is just -- is it simply just eating too much?

**Kris Brandow:** I think it's overindulgence maybe...

**John Gregory:** Yeah.

**Mat Ryer:** Oh, right. It's more general.

**John Gregory:** This was a difficult one, because if you look at the definitions, greed and gluttony are fairly interchangeable in terms of definitions. So I came down on this one as - yeah, it's more overindulgence on pulling in more stuff than you need. So greed is more the accumulation of -- more of just wanting other things, whereas gluttony is more of the actual physical consumption.

**Mat Ryer:** I see. Yes. So this is like being greedy, pulling in frameworks and dependencies with abandon, just pulling all in, anything...

**John Gregory:** Exactly.

**Mat Ryer:** And why is that bad?

**John Gregory:** As with a lot of these things, in its place, it's not, because these may be the deadly sins, but none of these particularly on their own are wrong. It's all very contextual as to about how right or wrong they are.

**Mat Ryer:** \[00:34:14.12\] You need a lawyer.

**John Gregory:** Indeed. So if you need a framework for something, there's nothing wrong with using a framework for it.

**Mat Ryer:** Right.

**John Gregory:** The sin here is more reflexively reaching for the framework before you know you need it. So coming back around to coming from other languages, the mindset in, say, something like Java is "Right, what framework do I need? Cool. Now what's the problem I need to solve?", rather than "What's the problem I need to solve, and do I need a framework for it?"

**Mat Ryer:** Right.

**John Gregory:** So it's more the inverted thinking. The example I gave in the talk was massively overlysimplified and contrived, as most of my examples are, of just a simple Hello World HTTP server and handler, just using pure Go. It's several -- just a few lines of code, which just does the job... As opposed to doing exactly the same thing using a framework, in which case now your code is like twice as long, and some file is off the page because of all the dependencies and things it's brought in... Which, if you need all those things, it's fantastic. But if you don't, as I said then, it's like every dependency you use is a dependency that someone could stop supporting. It's a dependency that could have a security vulnerability in it, which if you work in a particular high-security environment, it could be another dependency some poor security person is going to have to audit for you. So if you don't need it, it's not wrong to use it, because it does exactly the same thing. It's not like it doesn't work, but...

The example I kind of tried to use is it's overpacking for a holiday, where - you know, you're going away for a couple of days, and you just chuck up a few things in the bag. That's all you need. Whereas if you reflexively say "Oh, whenever I go on holiday, I always pack three cases, and I pack my swimming things, and my snorkel, and my thing, and all these things", and you take them with you on your little city break... It's not wrong, but at the same time, you'll get back thinking, "Hmm, I didn't even open half those cases. Or the ones I did open, I had to \[unintelligible 00:36:04.11\] through stuff to find what I wanted... And it probably cost me more in travel costs."

**Mat Ryer:** Yeah. And I had to go snorkeling in the Trevi Fountain just to use the snorkel. It's not a good reason to do it.

**John Gregory:** I mean, if you want to admit that right now, that's good. \[laughter\] I mean, considering the weather while we're recording this now, I think I could probably do a snorkel if I went outside.

**Kris Brandow:** I think that the kind of two big areas where this comes in as well is with both HTTP servers, and with flags/application bootstrapping, kernel things, where people are just like "The standard library isn't good enough for me." Or like "I need all of these specific features for things." And I also think what winds up happening is people reach for these frameworks because they don't know how the thing works. Like, I'm building a web server right now for the first time in a very long time, and it's a struggle, but it's a struggle because I don't quite remember all of the things I need to do. And sure, a framework would be also like "Help me just spew out the stuff I want." But I'm like "No, I've gotta remember, okay what are the methods I care about? Do I want to have proper HTTP hygiene, and return 406 if it's unallowed method? Do I want to have options available? Do I want to use caching properly?" If you actually know all of those things, it's a very small amount of code that you need to write. I think that same thing is true with flags, where people are like "Oh, I've gotta go reach for that flag \[unintelligible 00:37:24.05\] or that flags framework, or go use Viper, or go use Cobra..." It's like, there's a few things that you really need to do as the base level of your application, and that's probably good enough for now. And if eventually it's becoming unwieldy, then you should bring it in. But doing that as a starting point is just probably going to give you a headache.

I remember a few years ago at a previous job we had -- I think it was Viper, and it was just this absurd amount of boilerplate... And I was like "This is silly." I got rid of all of that and I wrote, using the Reflect package, something that did the same thing, and it was like 100 lines of code, and that removed like 500 lines of boilerplate code. I'm like "This is obviously the better thing. Now we don't have this dependency that no one really understood, that was causing a lot of problems."

**Johnny Boursiquot:** \[00:38:09.21\] But it's cool to use the frameworks. Don't you want to be one of the cool kids?

**Kris Brandow:** Absolutely not.

**Mat Ryer:** The little devil's appeared on the other shoulder... \[laughter\]

**Kris Brandow:** Don't you want to be popular? It's like, nah...

**Mat Ryer:** You are popular, Kris.

**Kris Brandow:** I am.

**Mat Ryer:** John, is it raining where you are?

**John Gregory:** It's raining quite a lot, yes.

**Mat Ryer:** Yeah. So I was just gonna say, rain would go down the snorkel, I think... I was gonna say that before Kris ruined it by being professional.

**John Gregory:** Well, if you've got an angle...

**Mat Ryer:** Yeah, you've gotta go the opposite angle to the angle of the rain.

**John Gregory:** I assume you've never done this before...

**Mat Ryer:** No.

**John Gregory:** I live in Wales. I'm used to this. \[laughter\]

**Mat Ryer:** Fair enough. Okay, Johnny B... Count Boursiquot. Golang Johnny, or whatever \[unintelligible 00:38:50.26\]

**Johnny Boursiquot:** Yes, yes...

**Mat Ryer:** Yes... Can you do the voice?

**Johnny Boursiquot:** Yes... \[laughter\]

**Mat Ryer:** We've got wrath and greed... Which one do you reckon?

**Johnny Boursiquot:** Wrath might be the next one...

**Mat Ryer:** This doesn't seem like you though.

**Johnny Boursiquot:** Well, because I think greed sits on top of the pile.

**Mat Ryer:** I see.

**Johnny Boursiquot:** I think greed leads to most, if not all the other ones, in my view. But yeah, I think wrath, yeah.

**Mat Ryer:** I've never seen you angry though, Johnny... Yet. I'm working on it. \[laughter\] It must happen. It must happen. As a normal person, you must get angry at times.

**Johnny Boursiquot:** Yes, I am human, and it does happen. But not -- you know...

**Mat Ryer:** Yeah, but I bet you're just like "Well, I'm quite distressed by that..." \[laughter\] How far does it spike your emotion chip?

**Johnny Boursiquot:** I work very hard, very hard, Mat - Bat - not to allow my highs to be too high, or my lows to be too low. I try to stay in between there, you know?

**Mat Ryer:** Right. So what, you're having too good a time?

**Johnny Boursiquot:** I never want to have too good a time, because then I let myself go...

**Mat Ryer:** Because it's too good.

**Johnny Boursiquot:** Because it's just too good. Right?

**Mat Ryer:** Yeah...

**Johnny Boursiquot:** And I never want to let myself get too far down, because then it's hard to get back up.

**Kris Brandow:** He doesn't want to engage in sloth and gluttony... So you know, not too much, not too little...

**Mat Ryer:** Same with the frameworks; you need some dependencies... Just don't go mad on it.

**Johnny Boursiquot:** Some dependencies... \[laughs\] Some uppers and downers...

**Mat Ryer:** Yeah. Okay, I mean --

**Johnny Boursiquot:** And those are dependencies...

**Mat Ryer:** I look forward to seeing how much of this episode makes it to to air, into the podcast. Okay, John, wrath... We touched upon this earlier, and you did start to get a bit angry... But tell us, what is this one?

**John Gregory:** It's okay, \[unintelligible 00:40:43.02\]

**Mat Ryer:** Okay, good.

**John Gregory:** \[laughs\] Yeah, so this one is misusing panic what you shouldn't do... When I first started learning Go, the first thing I was kind of taught was "You don't want to panic", because you know... The clue is in the word, really...

**Mat Ryer:** Right.

**John Gregory:** No one really likes to run around screaming. Well, I mean, I'm not speaking for all of you... \[laughter\]

**Mat Ryer:** That's how Johnny calms down...

**John Gregory:** We've all turned our webcam off at times in meetings, and just have a bit of a moment... Or at least hopefully turned the webcam off. But yeah, so Go was very predicated on checked errors, so actually forcing you to properly handle your errors... Because I've come from far too many other languages where error handling is "Oh, just throw it somewhere. I'm sure something up the stack will catch it and do something with it at some point", and then that usually ends up with some big stack trace down the user screen, where they look at it, get a bit of a headache, and have no idea actually what went wrong, and just try again.

\[00:41:52.10\] So it's about, again, either treating Go as if it had try-catch exceptions, which you can do with recovers, if you really, really, really, really must not fail code, where stuff's outside your control... But don't use that as a standard programming flow. Treat an exceptional case truly as an exception, rather than "Eh... Routine." And always try and use actual errors where they are. And also actually handle those errors. Because again, like I say, don't just go "if error not equal nil, just return the error", and again, just hope something else handles it... Because that's not handling the error.

And it also comes into the other thing that I've seen misused a lot, is must functions, because I think a lot of people don't quite understand what they are. It's only by convention, for a start, that people don't --

**Mat Ryer:** Tell us what it is.

**John Gregory:** Yeah, it depends where it is.

**Mat Ryer:** You must.

**John Gregory:** Indeed. I must, I must. But I've seen it far too many times where people have put regex must compile right in the middle of a web handler... And that's probably right up until you've made a typo, and now every single request is now failing. If you're going with must compile, at least do it at the package level, so it happens at startup time, so the service never got started in the first place, rather than waiting for your first customer to come in and then have an error.

**Mat Ryer:** Yeah, that's a good point.

**Johnny Boursiquot:** I challenge you to have a must compile for user-submitted regular expression input in your handler. \[laughs\]

**John Gregory:** I mean, that's probably a sin in itself, isn't it?

**Mat Ryer:** Yeah. Well, that speaks to the point.

**Johnny Boursiquot:** For a good time. \[laughter\]

**Mat Ryer:** Well, if you want to do some incident practice, it's quite a good way...

**Kris Brandow:** Misuse of wrath -- or misuse of panic will definitely induce wrath in others. They will come after you with a vengeance.

**Mat Ryer:** Kris, the way that you accidentally said that, I genuinely had the image of a new keyword in Go, which is like a super-panic called wrath... \[laughter\] You can just wrath it... In the recovery, if you do something and that doesn't work, then you can wrath... Do you know what I mean? And that means business.

**John Gregory:** That just deletes the codebase.

**Mat Ryer:** Yeah.

**Kris Brandow:** You invoke wrath on your co-workers, and then like Rob Pike shows up and disgorges them for whatever they did.

**Mat Ryer:** \[laughs\] When you panic in real life, you don't get to just stop... Do you know what I mean? In Go, programs just like "Alright, that's it. I'm done."

**Johnny Boursiquot:** "I'm outta here."

**Mat Ryer:** We can't do that. If you panic about something, you can't just be like "Nah, I'm done. Here's a little error message. Here's a bit of a stack trace. Bye!" But we should have that feature, I think.

**Johnny Boursiquot:** I think in real life? Leave a stack trace after you panic in real life?

**Mat Ryer:** Yeah. Well, not that specifically... \[laughter\] No, not that. Now you've said it back. Now I've heard it back. I don't think I want that.

**John Gregory:** It's a stack trace, not just your list of grievances.

**Mat Ryer:** Yeah, exactly. That's why I've done it. \[laughter\] Yeah. You're right, it's just like "Ah, s\*\*t!" and then it just \[unintelligible 00:44:55.24\] You scratch it off and you're like "There you go. You caused me to panic because you--" Yeah, it's probably because if you're crossing the road in the US, the cars are allowed to go at the same time as humans, and that gets me every time... They start to go. They start to go as well. They don't just wait back where they are. They actually start to go, as if like "What are you doing?"

**Johnny Boursiquot:** Yeah, it's contextual. Yeah, that's context. If you're in New York specifically, yeah, you'll get run over by a cabbie any day of the week. Yeah. \[laughter\]

**Kris Brandow:** Oh, if you're a tourist in New York, please, obey the signage. Don't follow the New Yorkers; that will get you hit by a cab. The New Yorkers know how to walk? We'll just like "No, I'll just go..."

**Mat Ryer:** Yeah. Literally, on Google Maps, in New York, if you do directions, you've got taxi, car, public transport, or panic. Panic is actually one of the options for you how to get around New York, which is how I do it. The only time I will panic in Go code is to protect against something that's already going to panic, like a nil pointer exception... I've done this a couple of times, and I feel justified. I'll basically check if it's nil, and then panic with a more specific error. That's it. Or a more specific message.

**John Gregory:** Yeah. Is that still panicking at that stage? Because you've kind of handled it...

**Mat Ryer:** \[00:46:14.15\] Well, I literally send the panic -- I panic though, in the if statement. Because it's gonna panic anyway. And in this context, I'm not returning an error. Because actually, sometimes I like to design -- I like to set myself the goal of trying to not return an error with something... You know, just so that it's easier to use. It depends on what it is, obviously... So sometimes I'll do that.

**Johnny Boursiquot:** That sounds like a code smell, Bat. \[laughter\] I don't know, you'd have to justify yourself with some code examples, I'm afraid... Because here's my take on panic - don't. Right? So the only place I will panic - to go back to the regular expression example... If I have a library -- not even a library. I don't like panics on libraries, first of all. But if I'm initializing my application, whereby I know that during initialization I absolutely must have a particular piece of configuration - I can't have a reasonable default, I can't have anything... Like, this thing just doesn't run without this particular config, or value, or whatever it is... Then I panic, for sure. But once the program is running, and it's doing things and whatnot, to me there is no justification for having a regular function call... Do a panic. Even if there's defer and recover somewhere up the stack, to me that's just a bad code smell.

**Kris Brandow:** Yeah, I feel like panic should be used if it's not possible for your program to proceed and have it be in a correct state. Like if something happened where it's just like there's no way for you to recover in this part of the program, or the program at all, then it's just like, okay, blow up. But if there's of chance of recovery, then you should be using errors.

**Mat Ryer:** Yeah. So Johnny, do you check nil, if you've got things that need to be set? Do you always check a nil and then return an error if it's nil, and you need it? I guess you would, right?

**Johnny Boursiquot:** Yeah. So depending on what it is. Again, if it's like initialization, for example, I don't mind panicking and dumping something, and letting the program crash in a spectacular fashion. If I'm really trying to be a good citizen in a Unix/Linux world, I might sort of capture something that's missing... But even then, most of the time I so go out of my way to avoid panics; I'll capture whatever is missing, I will emit some sort of error message, or \[unintelligible 00:48:31.00\] my trace if I'm using OpenTelemetry... Like, indicate somewhere that something went bad. And I'll do an OS exit with a nonzero exit code. That's a clean exit. That way, if my tool is being used in, say, a Unix pipeline or something like that, I'm behaving well within that ecosystem by returning the right exit code. These things matter in certain environments... So I'm trying to do my best to have my program, my process, and be a good citizen within the host in which it's operating. But panicking to me - it's just like, I'll panic if I'm debugging, and I'm writing the code right then and there, and I just want to see what happens; I actually want the full stack trace. But like for operational, production-ready code - no way.

**Kris Brandow:** Although, I do have to say, when it comes to panic versus OS exit, if you're writing library code, do not call OS exit. \[laughter\] Please, call panic instead. At least a panic I can catch. If you call OS exit, it's like "Oh, why is this thing --" It's like, "I don't know, some code, somewhere in some dependency decided that this is how it was going to handle things." No. No, no, no. Don't do that.

**Mat Ryer:** Right. John, this leads us to our last deadly sin... Do you want to take us home with this one?

**John Gregory:** So apparently we're closing out with greed.

**Mat Ryer:** Apparently we are...

**John Gregory:** Which I took as to be preemptive over-engineering.

**Mat Ryer:** Hm... Preemptive over-engineering.

**John Gregory:** Yes...

**Mat Ryer:** When should you over-engineer? Later?

**Kris Brandow:** Never?

**John Gregory:** \[00:49:55.28\] Ideally never, yes. So you don't want to do before you even need to. Because future-proofing to an extent is not a bad thing. As somebody said, there are like known knowns, known unknowns, and unknown unknowns... So if you have a known known coming down the track, so you know in a little while a new feature is coming in, then coding now knowing it's coming up is fine. Because even if that feature gets pulled, it's like "Yeah, whatever..." But you've got a reasonable expectation that it's coming up.

You can also potentially have a known unknown, where maybe business hasn't quite made the decision about what they want to do, maybe they want to go with this product, or this product, or this product... But you know they're going to do something, so you can still at least code with that in mind. You don't necessarily need to put it all in place, but you at least make sure you don't code yourself into a corner that cuts off avenues to make it harder to do those things that you don't quite know what they are, but you know they're coming down the track.

But the trap a lot of people fall into is the unknown unknowns, where they start going "Hmm... But what about this? It could do this in the future." I mean, no one's ever mentioned that this business wants to branch out into, I don't know, a whole load of self-service car washes... Because we're a bank, or something. But you never know what the board might come up with... And so let's build a module that can handle that, just in case.

**Mat Ryer:** Could be seen as money laundering as well.

**John Gregory:** Indeed, yes. \[laughs\]

**Mat Ryer:** Good point me...

**John Gregory:** Indeed.

**Mat Ryer:** I've contributed.

**John Gregory:** \[laughs\] The example I kind of came up with was -- again, being way more over-contrived, and just starting with a very simple service that literally has to say "Return your company motto." So you've got a reasonable expectation that at some point in the future the company is going to change their mind about what their company motto is... So a solution that fixes that is just a format print line, because you can just go into the codebase and change it. That does it; you don't know what they might change it to, but you've got a reasonable expectation that that will still work.

But where you don't fall into the trap of is like "Hm. But what if a non-technical businessperson wants to do this? Maybe we need to start putting this into a database and build some kind of CMS frontend, so that they can edit it." Or - you know what? Maybe they don't want to do it in text; maybe somebody wants to write it on a bit of paper, and scan it in, and then use some AI to turn that into some funky thing, and add some music to it. So let's put in a module to do that now as well.

**Mat Ryer:** I'm smelling a tiny bit of scope creep...

**John Gregory:** Indeed, indeed. But you'll be surprised how often this kind of happens... And I think where I've mostly seen it recently is, unfortunately, with generics, where people have got a bit carried away with "Let's make everything generic, because this could be any type, and this service could handle absolutely anything that's thrown at it." And they've actually ended up coding themselves into such a corner, that when an actual feature request came in to change, to do something else, they realized they basically needed to throw away the entire service and write it from scratch.

**Kris Brandow:** I feel like -- I like the know known and all of that. There's a talk, actually Kevlin Henney has done this in many talks, but he goes over like those three, but there's also a fourth that is like an unknowable unknowns. You never know what's gonna happen in the future. That is an unknowable unknown. And I think that's the bucket that most of the things people are trying to preemptively engineer for falls into... Which is just like, you shouldn't. We're trying to be like "Oh, we'll save some time in the future", and it's like, that's a risk that you haven't really quantified properly. It's like, what are the chances that thing happens in the future? And what are the chances that when that thing happens, the work you've done is going to properly fit? And if it does fit, how much time have you actually saved yourself, versus just building it for what you need right now, building for the known knowns? ...building for what you already -- the requirements you have right now.

So I think like a lot of preemptive over-engineering, or just preemptive engineering in general is people thinking that they have some idea of where things will go in the future, and the future is always an unknowable unknown. You have no idea what's going to happen in the future. So just write whatever works for right now, and then move forward in the future.

**John Gregory:** \[00:54:07.29\] Yeah, 100%. I think it comes back to what you said earlier about the frameworks and the HTTP server. It's like, you could pull in an entire framework now to be able to handle all those cases, but right now you just need to write a simple service that just returns a string. You don't need that complexity. And due to the nature of Go, it's not like if you don't use the framework up front, you're precluded from ever using it. You just layer in the complexity as you go along, as you need it, so scale out to that complexity as the requirements come along, rather than trying to preempt and saying "Let's build this wonder service that will do everything", which will actually just make your life harder, probably more bugs... Just more complex, when you could have just added an extra bit in later.

**Johnny Boursiquot:** So rule of three. So for those who are still early in their -- for those who are still listening... \[laughter\] If you've managed to make it this far \[unintelligible 00:55:00.03\] For those who are still early on in their professional software engineering careers, listen to old man Johnny... Even if the business says "Yes, this is coming. We're gonna want to do X, Y and Z. This particular thing you're building now - yes, we're gonna wanna support 20 different widgets for this thing. It's going to be pluggable, it's going to be all these things; do all these things", and you start and go ahead and create this elaborate system to be able to be the Swiss Army knife of all the things... Let me tell you right now - very, very seldomly does that actually happen, because business changes all the time; decisions change all the time. Yes, the person who was telling you "This thing is coming down the pipe. We need to make it reusable, we need to make it this, that", whatever it is - yes, they might have it on good authority that it is indeed the plan... But guess what - plans change. So, my friends, rule of three - here's what I mean by that.

The first time you're asked to do something, just make the thing the simplest possible thing that could work... Because you don't even know if the thing you build is going to exist tomorrow, because again, plans change. The next time you see it, now you have an additional data point as to "Okay, is there reusability in here?" Cool. Project manager, product manager, whatever it is, they tell me "Yup, it's coming, and this is the next \[unintelligible 00:56:16.13\] that's great. Now you have another data point. It's still not yet time to refactor, to make things modular.

Only on the third iteration, only then do you start to seriously consider "Okay, this thing is coming up a few times." Now, the different ways it has come up - is that something I can maybe abstract? What are the similarities? What are the differences? Where are the edge cases for me handling this kind of situation? Only then do you refactor and have the uber-thing that can handle different variations on a particular process, right? Rule of threes. If anybody tells you different, they're probably full of chocolates.

**Kris Brandow:** \[laughs\] I do have some nuance for the preemtive over-engineering as well, because I think the thing is that people -- once again, especially with business requirements, I think that the unknowable unknowns are really known knowns... But I think the things that people want to pretend are unknown unknowns or knowable unknowns are actually known knowns. \[unintelligible 00:57:16.10\] example of this, and like one of the things I'm really annoyed about constantly is things like content negotiation for HTTP. There will be a point in the future when you will want to change the structure or format of what you're sending over the wire, or what you're receiving over the wire, and if you don't build content negotiation from the beginning, it's going to be nearly impossible to put that in later. So you really do build yourself into a box with something that you will want to change. I mean, we see this all the time with like API version 8, where it's impossible to get rid of an old API version, because you haven't built yourself a way to easily move forward.

\[00:57:53.15\] And I think a really good example of this is what is happening with Qwik as a protocol, where they've already revved to version 2 of Qwik, because what they've realized, the problem with TCP was is that they never revved the version. So when they needed to rev the version, they couldn't rev the version, because everything had ossified into knowing this very specific image of TCP. And if you changed it, everything would break. So with Qwik, they're like "No, no, we're going to intentionally rev the version, we're intentionally going to make a new version of this." Not adding any new features, but it just changes some bits in the image, so that middleboxes and things can't ossify around this specific thing.

So it's like, you know in the future you will want to change things. That's a given. We will want to make advancements where you want to change how Qwik works, change how all these protocols work, so we put in place the things now to enable ourselves to do that in the future. So I'd say that's one bit of preemptive engineering that is extremely important to do. That's also the thing that engineers never want to do. If you build -- like, not even many of the HTTP frameworks don't even properly do content negotiation. I actually was looking this up, and it's kind of hard to find a library in Go that will properly do HTTP negotiation as far as what the spec says you should be doing. But it's a very important thing to do to give yourself the flexibility to move in that future. Even if it's just around optimization. If you have one API call that is a lot of boilerplate data, and you don't want to be sending this giant JSON blob, being able to just be like "Okay, I'm just gonna make a little binary protocol, and we'll do some content negotiation. If you can accept this, then I'll send it to you." That's a very easy way to be able to pick and choose the things that are taking up a lot of bandwidth and reduce their bandwidth a lot, in a way that's backwards and forwards-compatible. But if you don't do that content negotiation in the beginning, you're gonna have stuff that's just like "Nope, I expect Jason, and I will spit JSON back at you, and I don't care what you tell me, I will always just do this."

**Mat Ryer:** Well, a knowable unknown is what does the spooky unpopular opinion song sound like? I have a button here for it... I don't remember it from last year. Let's find out.

**Jingle**: \[00:59:59.10\]

**Mat Ryer:** Whooooo's got a spooky unpopular opinion?

**Johnny Boursiquot:** It sounds sad.

**Mat Ryer:** It does sound a bit sad. Well, and it's spooky, ain't it?

**Johnny Boursiquot:** It sounds more sad than scary. \[laughter\]

**Mat Ryer:** Okay. John, why don't you kick us off with your unpopular opinion?

**John Gregory:** Well, I guess \[unintelligible 01:00:36.24\] I wanted a nice, Halloween-themed one, which is that vampires are way overrated... Especially in popular culture.

**Mat Ryer:** You actually wrote it down, which I thought was really good... "Vampires suck." I thought that was actually quite clever.

**Johnny Boursiquot:** Was that intentional? Very good, very good.

**Mat Ryer:** So what's up with them? Why don't you like them? Because they can't go out in the sunshine?

**John Gregory:** I just think they're a bit over-represented in popular culture these days... It's just a bit of a "Ooh! Vampires!"

**Mat Ryer:** Not fair on the Franken people, is it?

**John Gregory:** Well, interestingly, we did a vampire-themed escape room the other day...

**Mat Ryer:** It does not surprise me...

**John Gregory:** And I think half the team were expecting romantic vampires... And we spent about half our time huddled in a little group in the middle of the room, almost crying because of the jumpscares, to the extent that -- we ended up with a discount off our next trip to the escape room, because they were so traumatized.

**Mat Ryer:** No...

**Kris Brandow:** Oh, no...

**Mat Ryer:** Well, you're telling everyone not to panic... They've got a discount for doing it.

**John Gregory:** I know, I know. We weren't in our favor. The other rooms were pretty good. But yeah, I think they were expecting a slightly different flavor of vampire, and weren't quite expecting a scary zombie thing appearing in the mirror right in front of them. \[unintelligible 01:02:00.08\]

**Mat Ryer:** \[01:02:01.04\] That's your Twilight generation.

**John Gregory:** I know, I know...

**Johnny Boursiquot:** Yeah, the glittering kind. You want them to glitter.

**John Gregory:** I don't think they were quite that bad, but...

**Mat Ryer:** Shiny-glittery. Quite hard to say that, shiny-glittery. Try and say that quickly, John, for me.

**John Gregory:** No.

**Mat Ryer:** Shiny-glittery, shiny-glittery.

**John Gregory:** Because I see what you're trying to get me to do. No.

**Mat Ryer:** I just said, so... That's how I knew it was gonna work. Alright. Does anyone disagree with that? Vampires? Do you love them? Kris, you love vampires.

**Johnny Boursiquot:** I do agree that they suck...

**Mat Ryer:** Because they \[unintelligible 01:02:26.29\] blood. They drink blood, don't they? That's their thing. That's like their favorite dinner.

**Johnny Boursiquot:** Yeah, yeah...

**Mat Ryer:** So yeah, I don't like anything in horror films -- like with zombies. Like, they're dead or whatever, and the bits are all not working... They can't still be walking about. Physics wouldn't -- like, do you know what I mean? All the physics of what makes our bodies have to be like this, all that still applies in the universe. It doesn't suddenly go away. So if I saw a zombie, I'd just be like "I'm sorry, I just \[unintelligible 01:02:57.06\]

**John Gregory:** Does this happen often?

**Mat Ryer:** No, no, it has never happened, because they're not real, John. \[laughter\]

**Kris Brandow:** Is this your unpopular opinion, Mat?

**Mat Ryer:** Yeah, actually, it is. Inconsistency -- like, it's horror. Horror genre - fine. I can't really get on with it, because it's inconsistent. Like, there's one Paranormal Activity where there's this beast, and it grabs people and pulls them around, but they can't touch it. Do you know what I mean? It's like, either you can touch me and then I can touch you back, and stab you in the bit of your \[unintelligible 01:03:29.28\] beast; just go for the soft bit, whatever. So it has to be fair; consistent, actually, not even fair. So that's my thought. I struggle with horror films for that reason. And also though, don't get scared. Ever since I was a kid, I'd go into the dark room in the house, and I'd say to the ghosts, "Come on then. Come and get me", just to see what would happen. And they never got me, and I just knew they were more scared of me than I am of them. Like spiders...

**Johnny Boursiquot:** You get more scared by code than you do ghosts, and things, and beasts...

**Kris Brandow:** I mean, some of the code that's out there...

**Johnny Boursiquot:** It's kind of spooky.

**John Gregory:** I know, I've seen some pretty terrifying stuff...

**Mat Ryer:** Those are some horror stories... Those are some horror shows.

**John Gregory:** \[unintelligible 01:04:10.26\] GitHub now. It's fine.

**Mat Ryer:** Johnny, I feel like your unpopular opinion might be inspired by something I've said, in which case I'm prepared to take this unpopular opinion personally.

**Johnny Boursiquot:** And make it your own?

**Mat Ryer:** Unpopular opinion... Yeah, no, I feel like this is against me, but go on. Let's have it.

**Johnny Boursiquot:** Yeah, my unpopular opinion. Nobody's going to read your commit messages. Deal with it.

**Mat Ryer:** Because I said it earlier, didn't I? I said earlier commit messages are a sort of way of commenting code... And you didn't pipe up then, Johnny. You waited until a format segment that I created, Unpopular Opinions, to come back and let me have this.

**Johnny Boursiquot:** Yeah. So do you want me to state for the general public that your original statement inspired my now better, and much more improved version of your statement, my unpopular opinion?

**Mat Ryer:** Happy to help, Johnny.

**Johnny Boursiquot:** Hey, yeah.

**Mat Ryer:** If I've improved something that you were about to do, then I'm good with this. Let's carry on.

**Johnny Boursiquot:** Great. Great. Thank you. Thank you, Renfield. My context, if you'll allow me... So the last time -- I can't remember the last time I personally went and looked through commit messages to figure out when something made it into the codebase, not made it in, or like when I'm doing an investigation... I can't remember the last time I did that. The first thing I'm gonna look at is is there any documentation about it? Maybe is it mentioned in the readme? Is it in whatever your favorite issue tracker is? Is it in there somewhere? Is there something in there somewhere? Heck, even is there a PR at some point that talks about this thing? Very rarely am I ever -- it's like a last resort. Very rarely am I actually going to clone the repo and start looking, commit by commit, what the message was, or searching through commit messages to see if something did something. It's the last resort.

**Mat Ryer:** \[01:06:17.25\] Yeah, I think that's fair. Do you not have that thing on in Visual Studio Code where it shows you on the line, it shows you the blame, it shows you who and when they edited this?

**Johnny Boursiquot:** Yeah, the who is important to me, but only because I get to know who is familiar with this code. Not because I'm looking for something someone did.

**Mat Ryer:** No, no, no. I mean, it's called blame, but it really is a bad name, honestly.

**Johnny Boursiquot:** Right. Yeah. Like, I only need to know who's familiar with this particular piece of functionality here that I'm looking at right now.

**Mat Ryer:** Well, who last worked on is useful, too. Who added this, and why? That's a fair enough question.

**Johnny Boursiquot:** But any comment in there, I don't -- I don't know, maybe I've been bitten one too many times, but any commit messages in there - I don't trust commit messages, first of all. Oftentimes - and I say this only because I myself am guilty of actually committing things that are unrelated to the commit. It's only because they happen to be on my path to getting something done. I'm like "Oh, this thing is really annoying. Let me just fix it right now."

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** I forget to make a commit just for that thing, and I'll just keep on going. Then by the time I'm done, I'm like "Oh, man... I just committed this whole thing, and this particular change had nothing to do with it... Do I really want to go back?" And then my sloth kicks in. Do I really want to go back and start to extract this thing, make it its own commit? Now I've got to create a separate ticket, so I can track things all the way down...

**Kris Brandow:** This sounds like a self-fulfilling prophecy. \[laughter\] You don't read commit messages; you don't write commit messages anybody wants to read, so you don't want to read anybody's commit messages. I see what you're doing...

**Johnny Boursiquot:** I mean, you know... \[laughter\]

**Mat Ryer:** I'm loving it now it's turned around on Johnny.

**Johnny Boursiquot:** Fine. Dang it, Kris... \[laughter\]

**Mat Ryer:** You cracked quite quickly then, Johnny... If you don't mind me saying...

**Johnny Boursiquot:** I know, yeah. I have strong opinions, loosely held.

**Mat Ryer:** Very. It just takes a glance from Kris. Great. Right. Oh, well...

**Kris Brandow:** I have an unpopular opinion...

**Mat Ryer:** Kris, we would love to hear it.

**Kris Brandow:** Okay, okay. So my unpopular opinion is that if you are doing -- obviously, I'll have to add context to this, but if you are doing software engineering, Go is one of, if not THE best languages to then write your software in. I will not name the languages that Go was better than in this respect, but you can fill in the blanks. So that's the opinion. And the reason I say that is because I feel that software engineering is actually about software design. And if you design your software, Go is wonderful to write your software in. If you don't do design, there's a bunch of other languages that have nice features, like memory safety and type safety, that will help you with your not designed software to make it less terrible and more manageable. But if you just design your software, a lot of those problems aren't really problems. And so Go is wonderful in that respect, even though it has some memory safety (ish) problems, and some type (ish) problems, compared -- I guess as some from the stronger opinion world would say about those things. We have very flexible typing in Go. You can do a lot of bad stuff with Go's memory model, but... You design your software, it goes great. If you don't design your software, you go do something -- but why are you not designing your software is the question there.

**Mat Ryer:** Good point. But your entry in a competition to try and find the most unpopular opinion in the Go community is "Go is great", if I summarize that.

**Kris Brandow:** Yes. \[laughter\]

**John Gregory:** I feel someone didn't read the spec...

**Mat Ryer:** You know what, I've seen weirder ones... \[laughs\]

**Kris Brandow:** Because you see, last time I tried to have a very unpopular opinion, and it wound up being very popular. So now that I'm just trying to make a popular opinion, it'll be unpopular.

**Mat Ryer:** \[01:10:16.04\] Very interesting. Interesting. We'll see.

**Kris Brandow:** I also, kinda, you know... Yeah, yeah, we'll see. We'll see.

**Mat Ryer:** Yeah, we'll see indeed. Well, thank you very much, everybody. I'm afraid our time has come to an end. Let's pack up our cauldrons, put away our broomsticks...

**Kris Brandow:** It's not like we're witches here... What are you talking about?

**Mat Ryer:** What's a small spooky things? We've done spiders. I think that's it. Ghosts... They're not real. Star signs, they're not real...

**Kris Brandow:** Oh, there's an unpopular opinion.

**Mat Ryer:** I know, I'm such a Capricorn... \[laughter\] I don't believe in star signs. Typical Capricorn. Well, that's all the time we have, I'm afraid. Thank you so much to everybody here. We talked about sloth, we talked about pride, we talked about envy, lust, gluttony, wrath, greed... And we went through all of them, which was pretty good stuff, to be fair. You also heard - I think of all the podcasts in the world, this one, this episode probably contains the most occurrences of the phrase "known unknowns", or any of that variation... Listen back. We've got them all.

Thank you so much, Johnny Boursiquot. Count Boursiquot. Johnny Golang. Were you counting the whole time as well? Like with Sesame Street.

**Johnny Boursiquot:** One... Two... Tree... \[laughter\]

**Mat Ryer:** Very good. Kris, we didn't get a spooky name/pun for you, so we'll just imagine your name covered in blood.

**Kris Brandow:** Okay, that's excessive. Thank you.

**Johnny Boursiquot:** Knight of the Living Kris...

**Mat Ryer:** Yeah, the Knight of the Living Kris. That's subtle. \[laughter\] Nightmare on Kris Street is another one...

**Johnny Boursiquot:** That's an unknown unknown.

**Kris Brandow:** With the nonsense that happens in the building I live in...

**Mat Ryer:** And of course, John Gregory. Thanks so much for coming and chatting with us. And thanks for listening, everybody.

**Johnny Boursiquot:** Wait, wait, hang on. Hang on. Are we really going to not acknowledge the horns that have been on John's head this whole time? \[laughter\] We did an entire episode and not mentioned them horns? Am I just seeing things?

**Mat Ryer:** Johnny, I think it's your time.

**Johnny Boursiquot:** \[unintelligible 01:12:39.03\]

**John Gregory:** Wh--what horns?

**Kris Brandow:** Yeah, Johnny. What horns?

**Johnny Boursiquot:** Okay...

**Kris Brandow:** I mean, Matt did call him Satan a couple of times, so you know...

**Mat Ryer:** Are we gonna do this whole episode and we're not going to mention the fact that John has a Bostonian accent?

**Johnny Boursiquot:** Bostonian accent?

**Mat Ryer:** Right that's definitely getting --

**Johnny Boursiquot:** Ah, I'm not getting that. I'm not getting that, my friend. I'm not getting that, mate.

**Mat Ryer:** What is your accent? Is it just South Wales, John?

**John Gregory:** Yeah, yeah. I mean, I have an English family, but then I was born in South Wales, even though near Swansea, which is a quite strong accent... It's not a particularly Welsh area, so wherever I go, someone probably thinks I'm from somewhere else.

**Mat Ryer:** Yeah, it's just you sound a tiny bit like a pirate.

**John Gregory:** I've never been accused of being \[unintelligible 01:13:26.15\]

**Mat Ryer:** You're joking. And you're literally talking like that...

**Johnny Boursiquot:** I know what this is...

**Mat Ryer:** It's not, Johnny...

**Johnny Boursiquot:** This is Bat setting himself up to do another pirate --

**Mat Ryer:** I wasn't. \[laughter\] I wasn't. I'll have to do it now, obviously. But this wasn't what I wanted.

**Johnny Boursiquot:** Yeah, no kidding. Do it. Do it. And you have to do a spooky addition.

**Mat Ryer:** Okay. Join us next time on Go Time, mate. We'll bring \[unintelligible 01:13:55.24\] because I've messed it up. Anyway, thanks for listening. See you later, mate.
