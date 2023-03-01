**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about Go 1.20. We're going to dig into this next major release of Go and find out when it's due, and pick out some favorites there. I'm joined by my wonderful co-host and friend -- friend? Yeah, friend... Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello, friend.

**Mat Ryer:** Yeah, friend. Right? That's okay to say that. I didn't wanna presume...

**Johnny Boursiquot:** You didn't wanna make a mistake of thinking we were friends... \[laughs\]

**Mat Ryer:** Yeah, I don't want to over-familiarize myself in case you wanted to deny any knowledge of me, which I would understand... But no, it's good. We're also joined by - you won't believe it... It's actually becoming a bit like our correspondent, really, for what's new in Go... Carl Johnson's back. Hello, Carl. Welcome back!

**Carl Johnson:** Hi, guys. Well, it's great to be back.

**Mat Ryer:** Great to have you. How have you been?

**Carl Johnson:** Pretty good... I don't know, I have kids now, so like my sense of time and everything is completely shredded. The other day I got like a little news push on my phone that was like "How to sleep better", and I just laughed at it, because I'm not sleeping... At 2am my kids walk down the stairs and come into our bedroom, and then it's either -- like, we've got to buy a king bed, because this queen is not cutting it anymore. And so like half of the time I just like go off and like sleep on the couch somewhere, because I don't fit in my own bed anymore... \[laughs\]

**Mat Ryer:** I love that... It's like "How to get more sleep. Step one is don't have kids" and you're like "Arrrgghhh!!"

**Carl Johnson:** It's a hard one to undo... They don't let you take them back to the hospital. You just like come back to the hospital and they're like "No." "Well, I got them from here..."

**Johnny Boursiquot:** No takesies backsies...

**Mat Ryer:** Well, how old are they, if you don't mind me asking?

**Carl Johnson:** Four and two. And yeah, a lot of fun... We showed the two-year-old Thomas the Tank Engine the first time the other day...

**Mat Ryer:** Nice.

**Carl Johnson:** And he was like losing his mind. He was like "Chug-a-choo-choo!", and he was dancing...

**Mat Ryer:** \[laughs\] Lovin' it!

**Carl Johnson:** Yeah... I was kind of against showing it to him, because of course now it's like "Want Thomas. Want Thomas. What are we doing? Why are we not watching Thomas? We want Thomas."

**Mat Ryer:** He's got a point.

**Carl Johnson:** Yeah.

**Mat Ryer:** Was it the one that Ringo Starr narrated?

**Carl Johnson:** This version was narrated by George Carlin. I think it's like the -- they just recorded different audio over the same clips, for like different regions, and stuff.

**Mat Ryer:** Ah, so Ringo Starr didn't narrate it in the US?

**Carl Johnson:** I think he did, for some of it, but maybe not on this version that we were watching... Anyway.

**Mat Ryer:** George Carlin doing it?

**Carl Johnson:** Anyway, my son was like totally psyched about it. The idea of like trains that have little adventures... It was like the coolest thing he had ever seen in his life. So yeah.

**Mat Ryer:** And faces.

**Carl Johnson:** And little faces.

**Mat Ryer:** A train with a face is brilliant. Yeah, Ringo Starr used to do it, because he was like "And then Thomas came into the station." And it's just like a Beatle reading your bedtime story. It's just the perfect way to send yourself off. That's number two on the "How to get more sleep", it's "Need to have Ringo Starr read..."

**Carl Johnson:** \[04:07\] Yeah, just read anything to me. Yeah.

**Mat Ryer:** Yeah. And tell you train adventures. Nice. I'm glad they love that. Okay, brilliant. Carl, we should do introductions, I think... Because people know who you are by now, but tell us - who are you, and where do you work, please.

**Carl Johnson:** I am the Director of Technology at Spotlight PA. We're a non-partisan newsroom based in Pennsylvania, USA, and we do investigative stories, we try to hold government accountable. We finished doing the election coverage in 2022. That was exciting... And so now there's a new governor who has just come in, and we're watching the transparency and how they're appointing people, and the campaign finances, and all that good stuff.

**Mat Ryer:** Oh, nice. Keeping power to account.

**Carl Johnson:** Yeah. If you live in the USA and you want good news reporting, check us out and give us money.

**Mat Ryer:** Oh, fair enough. Will you be investigating who set fire to the townhall?

**Carl Johnson:** Oh, so that wasn't in Pennsylvania.

**Mat Ryer:** Oh, right.

**Carl Johnson:** Before we started recording, I was telling Johnny - we're both here in Baltimore, which is not in Pennsylvania... But I was going to the post office, I was just standing in line, and the two people behind me told me that there was -- the one person that had jury duty, so she was at City Hall doing jury duty, but she had been dismissed early. But after she had gotten the $30, which was important... She'd gotten her $30, but then they dismissed her early, because there was a fire at the City Hall... And hopefully, that's okay. I don't know how that went. I'll check in for that later.

**Johnny Boursiquot:** The important part is done. She got the 30.

**Carl Johnson:** She got the 30, so she's ready to go home.

**Mat Ryer:** What's that, like $30 you get a day, or something?

**Carl Johnson:** Yeah, no, actually, she was complaining about that. She's like "It's better --" It used to be $15, and they've moved it up to $30, but it's still like -- you're taking a whole day off of work. They should probably give you more than 30 bucks.

**Johnny Boursiquot:** I know, right?

**Carl Johnson:** It's enough to get lunch... You get gas, you get lunch, you get parking... I mean, if you get parking, actually, you might just lose all your money right there. But...

**Johnny Boursiquot:** Right, right, right. Yeah, but you're being rewarded for performing your citizenly duty. So that's your reward.

**Carl Johnson:** Yeah, the sense of civic pride is the real reward. And the $30.

**Mat Ryer:** I'd just be immediately just trying to get it over with. I'd be like "Guilty...? Anyone?"

**Johnny Boursiquot:** \[laughs\] "Can we get on with it?"

**Mat Ryer:** Yeah, I'm like "What are we thinking guilty? Yeah, I'll just be swung wherever you want."

**Johnny Boursiquot:** But there's evidence... What do you mean?

**Mat Ryer:** What do you mean, evidence? Yeah, sure... We're in a post-truth world.

**Johnny Boursiquot:** Nothing is true.

**Mat Ryer:** Let's have a look at him and we'll decide.

**Johnny Boursiquot:** Let's ask the socials. Let's ask the socials what they think.

**Mat Ryer:** Twitter poll. It'd be much quicker.

**Johnny Boursiquot:** Twitter poll. \[laughs\]

**Mat Ryer:** Yeah, wouldn't it?

**Johnny Boursiquot:** Oh, man...

**Mat Ryer:** Johnny, we've got some community updates. Maybe you could give us a little update on the old community stuff going on.

**Johnny Boursiquot:** Yeah, we've got quite a few things happening. Personally, I'm glad to see a lot of the conferences coming back in-person, and some of them even doing the hybrid thing... We've got sort of GopherCon EU happening in Berlin... That's in February. Aactually, the conference is in June, but the CFP is going to close soon. So if you've got a talk that you've been thinking about giving at GopherCon EU, the CFP closes this month, on the 26th, so you'd better get on that. Speaking of CFPs... Mat, do you want to add to that?

**Mat Ryer:** Yeah, I was just gonna say, I've heard -- I don't know, but I heard the host of GopherCon EU is a really good man, was really good hair.

**Johnny Boursiquot:** Oh, okay. So he's been working on the hairline?

**Mat Ryer:** Yeah, he's been trying his best.

**Johnny Boursiquot:** Like, using some sprays and sort of bring it back kind of thing?

**Mat Ryer:** Like, they say caffeine shampoo is meant to help... It might just be nonsense. I just get granules and just rub it into my head. I just go straight to the source.

**Johnny Boursiquot:** \[08:01\] Caffeine shampoo... Dang, that's a thing?

**Carl Johnson:** They have that. They have like the tea shampoo, or something... This is one of those things I only know from when I'm a guest at somebody else's house...

**Mat Ryer:** Sure, because you've got amazing hair. Shut up.

**Carl Johnson:** The worst part of being a guest at somebody else's house is figuring out how to use their shower.

**Mat Ryer:** Yeah.

**Carl Johnson:** I always had this opinion, but then XKCD had a comic about it the other day, so I felt like it really confirmed the truth that the worst part of being a guest is like how the hell does their shower work? But you go over there and people have like these green tea shampoos, and you put it on your head and it like tingles. \[laughter\]

**Mat Ryer:** Yeah. Yeah, but you go into someone's shower and they're like -- I'll show you this, because \[unintelligible 00:08:39.25\] "You turn it this way and it's hot." It's like, "Okay, yeah. Is that right." "But hang on, that's not all... Turn it this way--" "Go on." "It goes cold." "Does it?" "Cool. Okay, thanks."

**Carl Johnson:** No, it's never that easy. It's always like first you have to wait ten minutes. So you turn on the water, you've gotta wait 10 minutes. Then it'll be scalding. So what you have to do now that it's scalding is you've got to turn it just like two degrees back, but now it's gonna be freezing. So now you've got to turn the cold up by four degrees, but then turn the hot over, just like very slightly..." And with some of them there's like multiple knobs, in different directions... It's like, it shouldn't be hard. It's a very simple user interface. There's two things; there's the temperature, and the water pressure. And I want medium temperature, like hot, but not scalding, and I want high water pressure, personally. I don't know. Maybe you guys want low. But it's like, there's only two things, but somehow it's very difficult to get it to work.

**Johnny Boursiquot:** Yeah. It sounds like there's nothing generic about this interface, huh...

**Carl Johnson:** No...

**Mat Ryer:** Good point.

**Carl Johnson:** Yeah, they need to use generics for this, redo the implementation, and...

**Mat Ryer:** So Johnny, have you just been using decaf shampoo all this time?

**Carl Johnson:** \[laughs\]

**Johnny Boursiquot:** This whole time. I just -- I didn't know. I just was clueless I could have been so much more hyped up with every meeting I go to.... Like "HEY, EVERYBODY!! HOW ARE YOU DOING TODAY?!? LET'S TALK ABOUT SOME CODE, YAY!!"

**Mat Ryer:** "I've had one coffee, but I've washed my hair three times, so I'm really jacked up..."

**Johnny Boursiquot:** Yeah, jacked up, ready to go.

**Mat Ryer:** Any more CFPs?

**Johnny Boursiquot:** es, indeed; there are more CFPs. GopherCon, which is near and dear to my heart, is happening in September... And March 30th is the deadline to submit your proposal. And as with, I'm sure, every CFP and with every conference, at least the ones I'm familiar with, there's always sort of a deluge of talks coming in towards the end of the deadline, towards the deadline. So please don't do that... \[laughs\] If you can manage it... Because the reviewers, while they love to see your talks, they're getting a massive amount of talk proposals all in the last day, and it adds a certain level of stress. We're not complaining, we're not complaining. We still get through it, and we still do it... But yeah, it's a labor of love. Let's just call it that. But yes, March 13th is the deadline for GopherCon.

**Mat Ryer:** Get your papers in, don't DDoS the tea.

**Johnny Boursiquot:** Exactly. Please don't DDoS us. GopherCon UK is also coming up in August. The CFP for that is not yet open, but stay tuned for that. I'm sure it'll be all over the socials once that information comes out. And we also have some local meetups. Mr. Ryer, why don't you tell us about those?

**Mat Ryer:** Well, yeah, I always like to do a shout-at; it's not a shout-out... I think that might be a US term, like a shout-out to something...

**Johnny Boursiquot:** You can borrow it. You can borrow it.

**Mat Ryer:** Okay, well, I borrowed it, but I got it wrong, so I said shout-at. So we're just gonna shout-at the London Gophers Meetup.

**Johnny Boursiquot:** Try not to do that...

**Mat Ryer:** Yeah... So it's London Gophers Meetup. February 22nd, that is. By the way, I feel like we should say the year, because --

**Carl Johnson:** You're allowed to listen to old episodes.

**Mat Ryer:** \[12:08\] You are allowed to. And in 2091, when this is the biggest entertainment show in the world, because of the Event, and this is all that survives, we should tell people, like, the year is 2023 right now. Not to age myself... It doesn't, does it...?

**Carl Johnson:** Well, I think people will be able to remember the year though, because what happened in 2023, February 1st of 2023, is the release of Go 1.20.

**Mat Ryer:** Yay.

**Carl Johnson:** Unbelievable.

**Mat Ryer:** That major event, which actually did -- some people believe it was the cascading event that led to the destruction of everything, but... No, we're not going to get into that. Actually, by the way, if you haven't heard the episode with Ron Evans that we did, I recommend it. Ron Evans - he basically hacked into... We were doing a Go Time episode, and Ron Evans hacked in from the future, and told us all these warnings about Go's future. And the production value... It was amazing. Like, he went to a studio and did this. I got to hang out with him at FOSDEM recently, and he's such a great guy.

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** His energy in-person --

**Johnny Boursiquot:** Nonstop.

**Mat Ryer:** It's like -- yeah, it's just his energy is amazing. But you're right--

**Johnny Boursiquot:** He's a total nerd; he geeks out on everything and anything. He's a wonderful, wonderful person.

**Mat Ryer:** Yeah. He does a lot with Tiny Go and hardware and stuff, and that's always very exciting. At FOSDEM he released a balloon that -- it was doing tracking, and things. I think the US may have shut it down.

**Carl Johnson:** Yeah, no, that was him.

**Mat Ryer:** Yeah, that was Ron.

**Carl Johnson:** They blamed China...

**Johnny Boursiquot:** The balloon that flew over our heads... It came from Ron Evans' lab. \[laughs\]

**Mat Ryer:** It's got a tiny gopher on the bottom, and they're like "We don't know what the Chinese are doing here."

**Johnny Boursiquot:** "Shoot a sidewinder at the gopher, please."

**Mat Ryer:** There we go, a bit of topical news mixed in with your Go Time. So like and subscribe. Smash that Like button and punch the Subscribe in the face. I don't know how we say it... How do cool people say that?

**Johnny Boursiquot:** No, you got it. Smash that button...

**Mat Ryer:** Kick it...

**Johnny Boursiquot:** I mean, the punch in the face is new, but I think we can work it in.

**Mat Ryer:** Okay. Well, if you enjoy the show, uppercut the Share button, send that over... Do a roundhouse kick on your socials and share it that way, please. But whatever you do, don't share things peacefully. That's boooring.

**Johnny Boursiquot:** Nobody wants peace and calm.

**Mat Ryer:** No, no. But so much can go wrong with that... Which leads us nicely on to our first topic here. Sometimes not just one thing goes wrong, many things go wrong. But because in Go we have return an error as the second argument, it's kind of tricksy -- it's been solved in lots of ways, but like sometimes you want to return a set of errors. Maybe you're like doing some work on an array of data, and it's okay if some don't succeed, and some do, and you kind of want to know that... And we're gonna get multi-errors. Is that right, Carl?

**Carl Johnson:** Right. So Go 1.20 was just released a few days ago as of this recording, and it has a lot of new features. One of them is multi errors. So multi errors are a feature that have been sort of bubbling in the background for years. I looked it up because I was interested in exactly when this happened, but there's a popular multi error package, and it's a -- there's one that's from HashiCorp. The first implementation was released in 2014...

**Mat Ryer:** Wow...

**Carl Johnson:** ...so that's nine years ago that people have been making multi errors. So maybe just to take a step back... So in Go, errors or values, right? They're not anything special in terms of the language; there's nothing in the language that designates errors as being a particular thing that have to be returned in a special way. It's just the same way that you would return an int, or you could return a string, or you could return a floating point, or a struct, you can return an error. And an error is just an interface, and the only requirement of that interface is that you have a method called error that returns a string, and by convention, that string explains something about what went wrong.

\[16:18\] And so apparently, all the way back in 2014, HashiCorp released a multi error thing where all it did is it just took a slice, so basically a variable length array of errors, and it gave it an error method, and so now you can have a bunch of errors and collect them into one. And so if there's something that needs to just return an error, it can actually pack in multiple errors in one spot.

So this is something that people in the community have been doing forever, but in Go 1.20 it was finally made part of the actual language itself. And there had been proposals to add it to the standard library for a long time... Again, I was interested in what one of the older proposals was, and I've found a proposal from 2017 to add it to the standard library... So I guess that's about four years ago, somebody proposed adding it to the standard library. Is that right? No. How many years -- 23 minus 17. What is that? That's more than 4. Anyway...

**Mat Ryer:** Johnny? Can you do that?

**Johnny Boursiquot:** Oh, I can't do math. I haven't had coffee yet.

**Carl Johnson:** Three plus six - it's five or six years ago... Okay, something like that.

**Mat Ryer:** Go wash your hair and try again.

**Carl Johnson:** Go wash your hair, come back...

**Johnny Boursiquot:** I need to wash my hair, yeah.

**Carl Johnson:** So anyway, there have been longtime proposals to add this to the standard library, but it never was added before because there's always been this like sort of tricky, weird case. Like, if you just have your own particular error type, and it happens to be a multi error, you're probably not going to run into this. But if it's in the standard library, a problem that you can get is what happens if you have a multi error that has more multi errors in it?

**Mat Ryer:** Whoa...

**Johnny Boursiquot:** A hierarchy of errors? What?!

**Carl Johnson:** Yes, a hierarchy of errors. So traditionally, what would happen is it would just like flatten all the errors out. So if you have one error, and it's a multi error, so it has two errors in it, and then you have another thing, and then you glom them together, and it'll just make a single multi error with three errors in it. And that's fine, except for in some cases you can lose data when you do this...

**Mat Ryer:** Yeah.

**Carl Johnson:** So it gets a little bit confusing. But finally, there was a proposal just recently that got accepted by the Go proposal committee - this is by Damien Neil. And so in this proposal, what it does is instead of just flattening all the errors down into a single slice, it leaves it as a tree. So when you do it this way, then any of the errors in the collection can still be accessed, and you're not losing data when you flatten it out.

So again, it's something where if you're just making your own multi error library, it's probably not a big deal, because when you're doing multi errors.

**Mat Ryer:** Yeah.

**Carl Johnson:** But if multi errors are in the standard library, and then suddenly everybody's returning multi errors, then you could just run into this issue where you're like "Oh, I didn't realize this was a multi error", and then things kind of blow up.

**Mat Ryer:** That's interesting, yeah. I mean, I've definitely had this use case of needing to do this, and I think I've used the HashiCorp one; or I've certainly used a project that had that one. I don't know how they did it.

When you said like error of trees, it made me think of like I have a tree, I was given an actual tree, and I was told "Look after this. You need to water it", and things. Yeah... Dead. Within a week.

**Johnny Boursiquot:** Was it already grown?

**Mat Ryer:** Yeah, it was like a little -- it was like a, not little, but it's really sad, but it's just like its leaves just all fell off.

**Johnny Boursiquot:** So you kill a child tree.

**Mat Ryer:** Yeah, I did. That was just one error though, I suppose... So I could have just used a normal one for that.

**Carl Johnson:** \[20:00\] You could have just used a single error for that. Well, one place where this is nice is if in your application you use errors.is to create like some sort of a hierarchy... So let's say you have a database error, and it can't find a row. But then you want to turn that into like a 404 in your HTTP handler somewhere else. So something that you might do for your application is to say, "In my application, if this database error represents a 404, I'm going to say that this error is http.notfound, or something. http.errornotfound, or something. So you can make up your own little domain of "These are the errors that I know about, and when I get these errors, then I'm going to do this particular kind of response."

Traditionally, that's been a little bit of plumbing to make it work, but now you can do it very easily, because when you do fmt.errorf, so the format package, the FMT package - before, you could only include one error in your format string with %w, but now you can do multiple %w's. So you can just say, "I'm going to create this error, and I'll include my notfound error, and I'll include the database error." And so then those two can be smashed together just very quickly and easily, without having to like create your own type, and have it respond to both, selectors and stuff... You just use the built-in standard library stuff and you don't have to go and write your own type, or use a third party package to make it happen.

**Mat Ryer:** So when you do error is on a multi-error, if there are multiple errors in there, does it just check if any of them -- how does it behave?

**Carl Johnson:** Yeah. So in this case... A fact about me is that I have a PhD in philosophy. And so one of the things about is is that there are multiple meanings... This is also -- American president Bill Clinton once said, "What is the definition of the word is? It depends on what the meaning of the word is, is..." So there's multiple meanings of is. And so sometimes when you say is... Like in Python, if you say "x is none", it means that x is identical to none. But in this case, when we say errors.is, whatever, we don't mean that they're identical, we mean that they are -- to use the philosophy term, they're predicating. So one error can is any of the errors inside of the multi error, right? So if the multi error has 10 different things in it, then it is all of those 10 different things, even though you would think because it's is, it's -- maybe it should be errors.are, because it's plural.

**Mat Ryer:** That's cleared it up.

**Carl Johnson:** Yeah.

**Mat Ryer:** Thanks Carl. That's really cleared it up.

**Carl Johnson:** I hope everybody's properly been putting a lot of caffeine in their hair before they heard that one... \[laughter\]

**Mat Ryer:** When Bill Clinton said that, was it around the time of his scandal? Is that the context?

**Carl Johnson:** Yes, it was absolutely part of the scandal, as he was being deposed by a lawyer...

**Mat Ryer:** He's like "Well, what is is?"

**Carl Johnson:** Yeah, he's like "What is it when you have an affair? Who's to say what the affair is?"

**Mat Ryer:** Yeah, he's not even questioning that though... It's just like "Well, what is is? Let's get to the bottom of that first, and then we can--"

**Carl Johnson:** \[unintelligible 00:23:09.22\] and then I'll tell you about what may or may not have gone on...

**Mat Ryer:** Yeah... Well, if you liked that very clear explanation from Carl, don't forget to smash the subscribe button... The harder you smash it, the harder we'll try to actually make sense from now on.

**Johnny Boursiquot:** Indeed...

**Mat Ryer:** Nice. Wow, that's cool.

**Break:** \[23:34\]

**Johnny Boursiquot:** So we had some changes for relating to generics as well, didn't we? What's the deal with the comparable and the interfaces, and compile time versus runtime...? Can you clear that up as well, or better than you just did for the multi errors?

**Carl Johnson:** Oh man, I think this is gonna go much worse than multi errors, to be honest... \[laughter\]

**Mat Ryer:** "What is change...?"

**Carl Johnson:** What is change...? What is comparable? So this is another -- it's one of those definition things. So in the Go spec there's this idea of comparable types, and then types that are not comparable. So a comparable type is like if you have two strings, you can say String x equals string y. Or string x does not equal string y, right? It's very simple; if they're the same, then they're comparable. And if they're not...

But there are things that are not comparable in Go. So if you have two slices, you cannot say "Does slice one equal slice two?" and part of that is just because it's a little bit ambiguous. It's, again, that ambiguity of "Do you mean that these two slices are identical, or do you mean that these two slices have the same contents?" So there could be like -- if you have a slice that's 123, it could be they both are 123, but they actually are different areas in memory. So if you modified one, you wouldn't be modifying the other.

So anyway, just to get rid of the ambiguity, you're just not allowed to compare slices to each other; you can only compare them to nil. That's the only legal comparison you can make. And so for interface types, this gets a little bit weird. So if you have an interface type, and you want to say x equal to y, and x and y are both some interface type, you can do that even if the type of x, the concrete type underneath the interface is something that wouldn't normally be comparable. So let's say you're comparing two errors, and you want to say "Does error one equal error two?" And it just so happens that error one is implemented by a slice; or error two is implemented by a function. And those are not comparable types. Well, because we're just thinking about them as errors, it's okay. We can do that, the language will let you do it, and it's only going to blow up if it gets down to brass tacks, and it finds out that "You know what - these two, error one and error two, are both implemented by slices, and so the only way I could tell you if they're the same is if I compare the slices, and I'm not allowed to compare slices", and so then it'll panic at runtime.

So that's sort of just all background for -- when generics were introduced, generics have a keyword called comparable. I think it's maybe technically not a keyword; it might be like a pre declared identifier. But whatever, it's essentially a keyword. So comparable - when you're doing a generic, you have to be able to say what you want the types to be. So if you want to do a generic over a map, you can say "I want there to be this type k, and it should be comparable (which means it's usable as a key and a map), and I want this type v, and it can just be any type, because it's the value of the map, and I don't care what the value is."

\[27:47\] So for a while, the problem was that in Go, even with generics, you couldn't write a generic function for a map that used interfaces as the key type, because they weren't considered to be generically comparable. Because there was that risk of it blowing up at runtime, of it panicking at runtime, the Go team were trying to be very conservative and say, "Let's just leave that out of generics, at least for now, so that if we decide later that we want to make it more expansive", which is what they did, "nobody's going to have their code broken. But if we decide later that we want to make it more narrow, well, then people will have their code broken." So they started off with just a very narrow definition of what a generically comparable thing was, and now they've expanded it to include interfaces as well, even though it runs that runtime risk of having a panic.

**Mat Ryer:** Gotcha. I really like that approach that they took with the design there, which is like "We can make progress. Let's not over-commit." Yeah, that's interesting.

**Carl Johnson:** You see that a lot with how the Go team sort of make their decisions; there's this idea of "Well, can we back out of the decision later?" "We have this Go 1 compatibility guarantee. We don't want to commit to something if we're going to need to change it later." And so with multi errors, like we were saying, you can go back nine years of people having multi errors, and another six years of people wanting it to be in the standard library... But they were still like "Oh, I don't know... We might want to change how it works later." And it's only in Go 1.20 that they've said, "Okay, we think we've got a design here where we're very happy with it, and we're not going to want to change it later."

And so yeah, the same thing for this comparable part of generics. They're adding generics to the language, but they didn't want to be like "Oh, you're using generics 1.0, but in generics 1.1 we've changed it, and now all your code is broken... So update, please."

**Mat Ryer:** Yeah. Well, and I think that that is a lesson that all of us can actually apply to our job. And it sounds strange, I think, to some people when they first hear that, but can we do something now that doesn't tie our hands, doesn't paint us into a corner, so that we can change it later? Design for that flexibility. We've talked about this before, Johnny, about using like a string instead of a bool... And Johnny, you said you use a timestamp instead of a bool, which is basically -- I think you said it was true if it was your exact birthday; if not false. It was something like that, right?

**Carl Johnson:** Yes, yes. It was exactly Johnny's birthday. That was --

**Johnny Boursiquot:** Yup, exactly.

**Mat Ryer:** And that's true. And everything else is false. No, but they do it like -- you know, if it's deleted, then it's a timestamp in there. Otherwise, it's empty, and that's how it's not deleted. I think that sort of future-proof design thing is something we can all get a little bit better at, and take the lead from the Go team on that one.

**Carl Johnson:** I've heard that at Amazon one of the things that the managers do when they make decisions is they say, "Is this a decision that's reversible or not reversible?" And if it's a reversible decision, then they say, "Okay, just do it. Whatever your gut says, just do the first thing and we'll run with it. And then if it's bad, we'll take it back. But then if it's an irreversible decision, then we really need to sit down and have a lot of meetings and have a drawn-out process to make the decision, because we're not just going to like "Okay, S3 was a good experiment... We're turning it off, though. S3 is going away tomorrow, guys... It turned out they wanted S4, so..." \[laughter\]

**Johnny Boursiquot:** So one of the tricks or engineering hacks that I like to use is when I'm creating a decision record for one approach or another, or choosing a technology over another, or a library over another, whenever there's contention around, "Well, some people think that we should do this, and some people think we should do that", I whip out a good old decision record that says, "Okay, we're gonna go this way, because reasons XYZ." One of the things I've started doing is also include in there, "When will this solution no longer be applicable or required? When do we deprecate this? What must be true in order for this to no longer be needed or wanted?"

\[32:00\] Because if you're gonna make compromises, if you're gonna make a trade-off, when you no longer need to, it'd be nice if you can remove that, because if you leave it there, it just becomes technical debt; somebody now -- perhaps you in the future, or perhaps a brand new sort of engineer that you're onboarding, is now going to have to pay a price for understanding why something is the way it is... And heck, maybe they don't even come across your decision records, so they have no context for why this is the way it is. It just looks weird, and perhaps not efficient, perhaps... If you've ever looked at a codebase and you're like "Why did they do it like that? Like, what were they thinking? Stupid idiots..." Right? \[laughter\] If you've ever had that reaction, there's probably a decision record somewhere, hopefully, or some decision made by somebody, given some constraints that they had at the time, that may actually no longer be applicable now.

So having something that says "This is when we should take this out", whether or not you do, but this is having some understanding that says "Okay, everybody, we understand that this is supposed to be temporary", although that doesn't need to happen very often... "This is supposed to be temporary; when these conditions are true, we can then remove this."

So I find that to be a very sort of -- it provides a very balanced sort of approach to making technical decisions, and something that you can refer back to, really, to sort of gauge "Okay, is this still the right decision? Is it still the right approach for us, architecturally?"

**Mat Ryer:** I really like that. I have that thing, I had that feeling -- I heard somebody say once that if you see some code and you're just like "This is wrong", and like that reaction of "Why have they done this?" I'm trying not to use language that is -- you know, I'm trying to use nice language, but... You can get angry about it. And the point they made was, "There's always a great reason for it, you just probably don't see that reason. Or maybe the reasons changed." But I quite like the idea that you do that upfront as a thought experiment to see that. If you like these top tips, by the way, everybody, please body slam that Like button...

**Carl Johnson:** Just knock it over.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Give it a quick suplex. \[laughter\[ Suplex that share. Get the word out. Shout at people! \[laughs\]

**Mat Ryer:** Or slice it with a karate chop. Speaking of slices...

**Johnny Boursiquot:** Ooh, that's a nice transition. I like that.

**Mat Ryer:** Subtle...

**Carl Johnson:** Speaking of slices...

**Mat Ryer:** Yeah... Is that a good transition? Do a karate slice on it, which - that's not even a thing. It's a karate chop, famously...

**Carl Johnson:** I was gonna say, we should take it to the arena, but maybe that's after this.

**Johnny Boursiquot:** Ooh, that's for later. We're gonna take it to the mat.

**Mat Ryer:** We're getting too professional. Bring it down a peg.

**Carl Johnson:** Okay. Let's do the slices one first though... Because the slices one is pretty simple. So in Go 1.20 they've added a new feature where you can turn a slice into an array. So this is something -- if you're new to Go, one of the things so that you have to learn is just -- you know, the terminology, because the terminology from programming language to programming language is a little bit different. And one of the things -- like, if you're in Python, they have dictionaries. But if you're in Go, you have maps, right? And so if you're in Python, you have lists. But if you're in Go, you have slices.

So Go has what are called slices, which are these dynamic length arrays, but there are also arrays, just plain arrays in Go, and those have a fixed length. So it's always terrible to try to talk about syntax on air, but let's give it a shot... So if you have a square bracket, and then a number, and then another square bracket, and then a type, that is an array, and it will say exactly how many items in it. So you could have like a four int array, and you can say, "Look, I've got an array. It always has exactly four ints in it, and it's a four-int array."

\[35:55\] So to turn an array into a slice, there has always been in Go this little thing where you just put the slice operator after it, you just square brackets and a colon, and then it turns into a slice. And so because slices are variable length arrays, it's always been very easy to turn an array into a slice anytime you need to do that. But in the last few versions of Go, they've been adding a feature to Go in the other direction. So if you have a slice, and it's long enough to become a particular kind of array, now you can just convert it.

So in Go 1.20, you could -- let's say you're working with a hash, and your hash is always exactly, let's say, 32 bytes, or something like that. So you could just start out with a slice, and then you could say, 'bracket 32 byte parentheses' and you could turn your slice into an array just by calling it like that.

**Mat Ryer:** Hmm...

**Carl Johnson:** So that's a nice, convenient feature for those times when you have a fixed length, you know exactly how long your thing is going to be - now you can just very easily convert it from a slice into an array.

**Mat Ryer:** So what happens if you get the length wrong, or something? Is that a panic?

**Carl Johnson:** Well, yeah, if your slice is not long enough to be converted to this kind of an array, it will panic. So if you're not sure if it's going to be long enough, of course you can just do an if statement, and say "If length is less than whatever, then don't try to convert it."

**Mat Ryer:** Yeah. And then in arrays, you can also do a little shortcut; when you're declaring it, at the same time you can do the three dots to say "I'm going to declare an array, and just infer the size from what I say next", basically. I guess that doesn't work, because the point is you know the length, right?

**Carl Johnson:** No, you can't do the three dot trick. The three dot trick requires the length to be sort of a constant that the compiler can figure out from context. So it doesn't work when you're converting a slice. It only works for things like when you're doing like a -- you're typing in a literal array, and then it can figure it out.

**Mat Ryer:** Okay, cool. Nice.

**Carl Johnson:** It's one of those things where somebody was kind of bugged. They're like "Oh, I wish it was easier to convert slices to arrays, because we can convert arrays to slices really easy..." And they wrote up a proposal and they got it through. So

good for them.

**Mat Ryer:** Yeah, good for them. Exactly. And that's a good lesson, too.

**Carl Johnson:** Yeah, that's the fun thing about open source, is like everybody benefits when one person does the work to make something like this happen.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** It's almost like you could say they provided some context with their proposal, and therefore it had a much better chance of getting through, right?

**Mat Ryer:** Oh, Johnny, it's such a good link...

**Carl Johnson:** Oh, wow...

**Mat Ryer:** ...I'm just gonna celebrate that with a little song about Johnny doing a great link. Are you ready?

\[starts playing the guitar\]

Oh, Johnny did a great link...

Yeah, Johnny, you did a great link...!

Subtle.

**Johnny Boursiquot:** Yeah, very subtle.

**Carl Johnson:** Don't underline it too much... \[laughter\] Like, if you had cymbals, and drums, that would be too much. But just the guitar... Just a little guitar.

**Johnny Boursiquot:** Indeed, indeed.

**Carl Johnson:** So the context package - it was something that when it came to Go, it felt like it was a late addition to Go, but now it's been in Go for like ever, and we don't remember life before context...

**Mat Ryer:** And it's everywhere, isn't it?

**Carl Johnson:** Now it's everywhere. Like, it started off, it was just like "Oh, we'll add it, but it's not really anywhere", and then basically every type that can at this point supports contexts.

**Mat Ryer:** Has anybody done like a Twitter account of like no context Go code, and it's just Go code with the context taken out?

**Johnny Boursiquot:** \[laughs\] That's a great idea.

**Carl Johnson:** Yeah. Just put like a black bar over the ctx...

**Mat Ryer:** Yeah, just censor it.

**Carl Johnson:** Yeah, that sounds good. That'd be a great Twitter account, if you could still make those API bots, which I think are now banned...

**Johnny Boursiquot:** Oh yeah, no more of that. I mean, if you've got 100 bucks, you can still do that...

**Carl Johnson:** Alright, not a big deal... That's worth a hondred dollars for that joke \[Laughing\]

**Mat Ryer:** You just need to do jury duty two and a half times...

**Johnny Boursiquot:** Three times...

**Carl Johnson:** Well, three times and some tax, maybe, but yeah.

**Mat Ryer:** Well, yeah, three and a bit. Sorry. I didn't do the math...

**Johnny Boursiquot:** \[39:57\] You didn't shampoo this morning, Mat.

**Mat Ryer:** No, obviously...

**Johnny Boursiquot:** You can't do math yet.

**Mat Ryer:** No... I'm pretty sure I shouldn't be drinking it as well...

**Carl Johnson:** Just chug in that shampoo... \[laughter\]

**Mat Ryer:** It tastes horrible. I think to listen to this episode people are gonna have to chug the shampoo... So the context package - it defines an interface, and part of the interface is that you can cancel the context. So the main use of the context type in Go is to define deadlines. So you can say, "I want this request to try to go in the next two seconds, and if it doesn't get done in two seconds, just give up and abort, because by then the user will have already pressed Back and gone away."

So you can add deadlines, you can add timeouts, you can have cancelation... But one of the things that was kind of a flaw with the context package until now is that you couldn't say why something was canceled. You could cancel a request, but you couldn't say "I canceled it because the user disconnected" or you couldn't say "I canceled because we got a response back somewhere else, and so this is moot now."

So what's new in Go 1.20 is now there's context with cancel cause, and that will tell you why something was canceled. And so you can just pass in there that when you're doing the canceling, "Oh, I'm canceling it", and then put in whatever error you want, and that will be returned later when people look it up.

**Johnny Boursiquot:** So on the consumption side, you have to know to ask for the cause, right? So it's not like it's gonna pop up; you have to ask for it.

**Carl Johnson:** Yeah. Again, going to the backwards compatibility thing, it would be really nice if they could just return it in the existing context.error methods, and whatnot. But with those, because they always returned a concrete error that you would just use == on, they can't change it. So there's context.canceled and context.deadlineexceeded, and because people have code out there that says "If error == context.cancelled do blah-blah-blah", you can't change it, because then their code will be broken. So this is like one of those sorts of unfortunate things.

And so the workaround to keep from breaking people's code is they just added a new method. And so if you use the new method, you could get the actual cause, and if you use the old method, you just get this kind of universal cause.

**Johnny Boursiquot:** This is the perfect example of somebody who's coming into the language, looking at the standard library code for context and thinking "Well, why didn't it just -- why is it so stupid? Why didn't it just return the calls in the error?"

**Carl Johnson:** "Why is it so dumb?" Yeah.

**Johnny Boursiquot:** Exactly.

**Carl Johnson:** People make Go dumb... That's what I've read on Hacker News, so it's true.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** That's a hot take there. Call if you like our hot takes...

**Carl Johnson:** I might have to save that for Unpopular Opinions. \[laughs\]

**Mat Ryer:** You should save it, yeah.

**Carl Johnson:** I could get myself uninvited to all future Go conferences...

**Mat Ryer:** If you'd like these hot takes, one-inch punch the Subscribe button, and follow along... Don't just click it.

**Carl Johnson:** So shall we talk about the memory arenas? This is like the secret --

**Johnny Boursiquot:** Ooh...! You wanna take it to the mat.

**Mat Ryer:** It's not a good sign when the guest interrupts me to--

**Carl Johnson:** The guest is starting to do the transitions because I'm afraid...

**Mat Ryer:** Yeah, because I'm being unprofessional.

**Carl Johnson:** ...that you'll play the pipe organ if I let you do it. You'll be like Phantom of the Opera; you like come down on your rope with a cape, and...

**Mat Ryer:** Yeah, definitely.

**Carl Johnson:** ...yeah, play the pipe organ.

**Mat Ryer:** Mask on...

**Carl Johnson:** The Phantom of --

**Mat Ryer:** Good hair phantom. He's got good hair.

**Carl Johnson:** Memory Arena.

**Johnny Boursiquot:** Yeah, good memories.

**Carl Johnson:** So Go, as you guys are well aware, is a memory-managed language, or a garbage-collected language. So when you use variables, when they go in scope, when they go out of scope, the language has a runtime, the runtime can detect that these variables have gone in and out of scope, and it will automatically deallocate them... And you don't get those things that you get in like traditional C, or C++ programming, where you have to do memory manual allocation, and if you make a mistake, you could accidentally have a use-after-free bug, or you could have a using an uninitialized memory bug... You don't have those problems in Go. Well, what if we did? \[laughter\]

**Johnny Boursiquot:** \[44:07\] What if you wanted to reintroduce allocation in free?

**Carl Johnson:** What if we wanted this? So this is an experimental feature. And in fact, it's so experimental that originally they had it in the release notes for Go 1.20 in the draft version of the release notes, but right before publication of Go 1.20 they were like "Let's just delete it from the release notes, because we really don't want people to use this." But it is there, it's an experimental feature, and what it is, is it's called a memory arena. And the basic idea of a memory arena is that a lot of times when you allocate memory, you do it sort of in a batch. So let's say you have a web server, a request comes in, you allocate a lot of memory to deal with that request, and then the request is over, and you can just go ahead and free any of the new memory that you made for that particular request. Or if you have a game, you might say you're allocating memory for a particular level of a game, and you play the level, and you get to the end of the level, and now you can just free all the memory from that level.

And so an arena is a way in manually-memory-managed languages of just making it simpler to use. You set up an arena, you use the arena for whatever length of the request is, or the level, or the whatever... In some games you might do it all the way down to the level of like a single frame of animation, you allocate everything for that frame, and then you free the arena at the end of the frame... But whatever it is, an arena is just a way of saying "Don't try to garbage-collect inside of this area. We're just gonna throw all the memory away, all at once, at a particular time."

So Go 1.20 has an experimental mode to let you use an arena in Go. Part of the reason that it's experimental is that the Go team are not sure whether or not this is a good idea. It is apparently, according to the publicly-released notes, being used inside of Google in a few applications, and in the places where they're using it, they say that they've seen like performance increases of -- what, it was like 20%...? 15%. So when used appropriately, it has the potential to improve CPU performance by 15% in memory allocation heavy applications, is what they wrote.

So it is an interesting feature, but it also is a very dangerous feature, because if you allocate some memory in the arena, and then you try to use it after the arena has been freed, all of a sudden you're back to the world of C, and C++, where you can have a use-after-free bug. So one of the things that the experimental arenas package has to try to prevent that is the way that they allocate the memory, they mark it in such a way that when the arena is freed, if you try to touch any of the memory in that area again, it should cause a panic. And so their hope is that by causing a panic, at the very least you'll see that there was a bug, instead of having like a silent bug, where you're getting back bad data and not knowing why.

**Johnny Boursiquot:** So you know this is going to be abused...

**Carl Johnson:** Yeah, well... I think this is something that on the one hand it's very exciting. Like, if you're like a high-performance person and you're like "Well, I'm using Go, and I like Go, but unfortunately it's just a little bit too slow for me..."

**Johnny Boursiquot:** "I don't trust the GC."

**Carl Johnson:** "I don't trust the garbage collector, I want to do manual thing..." And you can see these blog posts where like various startups, and even bigger companies have done these crazy techniques of like "We patched in this whole other memory allocator, and we manually memory manage it, and we use unsafe, and we call through the C extensions", and stuff... For people who are doing that kind of work, this is exciting, because it makes their life much easier... but at the same time, it's something where it's like "Okay, well, just don't make any mistakes, because if you make a mistake, this is really going to blow up in a very ugly way."

**Mat Ryer:** Yeah, that's interesting.

**Johnny Boursiquot:** Do you have a response for that, Mat?

**Mat Ryer:** What, a song?

**Johnny Boursiquot:** Could be...

**Carl Johnson:** You're just gonna write an impromptu song about memory management, just to get people to karate-chop the Like button...?

**Mat Ryer:** \[48:09\] Yeah, yeah.

\[starts playing the guitar\]

It's got a long intro, this one...

I'm trying to think of some words.

**Carl Johnson:** I'm pretty sure this is the music that plays on my phone whenever you press like the For You Memories, or whatever, and it's like showing you pictures of when you took a picture of your lunch 10 years ago, with your first iPhone...

**Mat Ryer:** Yeah, that's right. That's me. I do it live. It's really annoying, I get a notification that's like "They wanna watch it" and I'm like "Bloody hell...!" Yeah... No, I can't think of any words, but...

**Johnny Boursiquot:** \[singing\] I once had memory, now it's free... \[laughs\]

**Carl Johnson:** It's getting towards the end of the show, so we need to just slow it down...

**Mat Ryer:** Yeah, and just relax...

**Johnny Boursiquot:** Yeah, we're gonna slow this down... Now, I want you to get in a position with your legs crossed... You're gonna close your eyes, and you're gonna take a deep breath...

**Carl Johnson:** Wherever you are there... You're doing your dishes, you're washing your clothes...

**Johnny Boursiquot:** Doing your dishes, washing your clothes... Thinking about Go memory allocation...

**Carl Johnson:** You're walking the dog...

**Johnny Boursiquot:** And you're thinking "If I only had a tool..."

**Carl Johnson:** You're thinking "Why did I subscribe to Changelog++?" \[laughter\]

**Johnny Boursiquot:** If I could only free allocated memory... On an experiment...

**Mat Ryer:** Yeah...! Okay, I think we've-- I've moved on. this is the future, a glimpse of the future. 

**Johnny Boursiquot:** Oh, wow. Yeah, this is episode is gonna be a special one, I think. Yeah, so should we --

**Mat Ryer:** That was my response, Johnny. Was that a good response?

**Johnny Boursiquot:** \[laughs\] Yes.

**Mat Ryer:** You wanted me to do something specific though, didn't you, in that response? Because I just did-- I was just doing anything.

**Johnny Boursiquot:** Well... \[laughs\] There was something about an HTTP response controller. Maybe Carl can quickly address that for us, before we start to wrap things up... What do you think?

**Mat Ryer:** What's a response controller?

**Carl Johnson:** So HTTP response controller... I guess the theme of today's episode is backwards compatibility in the Go standard library. So one of the things in Go is that you have interfaces, but then you can also have extended interfaces. So you can do a runtime check to see whether something doesn't just have like a particular method, but you could see if it also has other extra methods. And so a very commonly used example of this is in the IO package, you have writers and readers, but you also have writer to, and reader from, which are sort of more efficient versions of IO writer and reader.

And so when you're copying something, you could just pass around IO readers and writers, but the copy function will check "Oh, does this have a reader from method, or writer to method? And then if it does, I'm going to use that, because it's a little bit more efficient."

So in the HTTP package, there have always been these sort of extended methods on the response writer. So there's the flush method... So what that lets you do is - normally, when you're writing out the body to a response, it just sort of is getting written when it's written, and you don't have any insight into when it gets to the client... But if you use the extended flush method, you can say, "Okay, make sure it gets to the client now, and then when you get back from the client, come back to me." And so not all response writers support that.

What else is there...? There's a push method, which is kind of deprecated now, because that was part of HTTP/2, but then people decided they didn't like it, and it was kind of taken out of HTTP/2. And there's a couple other ones. But the issue with these methods is it makes it really complicated if you want to write your own HTTP response writer interface, because now you have to like stub out all of these methods. And if you're wrapping something else, you have to not just create your own versions of those methods, but you have to figure out, "Okay, first, which ones does the thing that I'm wrapping implement? And then I'm going to match it up with a version that only has those particular methods, so that when people look at me, they're only going to see the methods that my underlying thing has."

\[52:17\] And it's always been sort of a mess. It's been one of those things where it's like a good thing that Go has this ability to do extended interfaces, but in practice, it ended up being a mess, and people said, "Please don't use it, because it just has these problems."

So the response controller is a way of trying to get this, so to speak, under control. And what it lets you do is now you can add on your implementation of HTTP response writer an unwrap method, and with that, you can just pass through to the underlying type that you're wrapping. And so instead of you having to have all of the extended methods, you can just say, "Alright, well, really, I'm just wrapping this other thing, so go check with them and see if they can do it."

Where this comes up a lot is people will write middleware, and they'll want to know, "Well did the response end successfully, or did it not end successfully?" And so they'll make like a little wrapper type, but...

**Mat Ryer:** Yeah, I've done that.

**Carl Johnson:** Yeah, but when you do that, then suddenly you get stuck into "Okay, but now do I also have to implement flush? Do I have to implement all the other methods?" And the response controller just sort of is a backwards-compatible way of sort of putting that all into a junk drawer and saying, "Okay, just unwrap and then see what the other person is doing", and as long as the unwrap works correctly, you don't have to add all those methods yourself.

**Mat Ryer:** Yeah. Okay. Nice. Great. Okay, well, we are running out of time, but thank you so much, Carl. That was really good. And that type sounds very useful. There is another one on the list which I'm vetoing; it says changes to math rand. The numbers of random call we're not going to notice--

**Carl Johnson:** Yeah, they're just random.

**Mat Ryer:** They're meant to change, that's the point.

**Carl Johnson:** The actual joke of the thing, which is true, is that they didn't use to be random, and now they are... \[laughter\]

**Mat Ryer:** Oh, gosh...

**Johnny Boursiquot:** Yeah, you've got to seed things, and... Yeah.

**Carl Johnson:** Now you don't have to seed it anymore. Now it's just random.

**Johnny Boursiquot:** Nice.

**Mat Ryer:** Did you notice that, Carl? You're like "Hang on a minute..."

**Carl Johnson:** I was noticing.

**Mat Ryer:** You seem smart like that, like Rainman style kind of--

**Carl Johnson:** I was just like looking at the numbers, like looking into the matrix...

**Mat Ryer:** Yeah. You're like "Wait, I know this... It's a system!"

**Carl Johnson:** It's plan nine.

**Mat Ryer:** We should jump into - you guessed it; it's your favorite part of the show... It's time for Unpopular Opinions!

**Jingle:** \[54:37\]

**Mat Ryer:** Okay, who has an unpopular opinion today?

**Carl Johnson:** I do.

**Mat Ryer:** Do you, Carl?

**Carl Johnson:** So I've been on the show before...

**Mat Ryer:** Oh, yeah.

**Carl Johnson:** ...and if you can't make an unpopular opinion, they force you to come back!

**Mat Ryer:** I knew I knew you from somewhere...

**Carl Johnson:** They make you come back until you get a really unpopular opinion. But I think this time I've gotten it... Although we'll find out. So my opinion is that if you eat a salad with a fork, that is barbaric. And the way to eat a salad is with chopsticks.

**Mat Ryer:** Oh, really?

**Johnny Boursiquot:** Oh, I need to hear your rationale on this one.

**Mat Ryer:** I'm kind of already liking this, but... Carl, why? Tell us.

**Carl Johnson:** Yeah. So my rationale -- so the history of this is that, you know, I lived in Japan for a while, I was teaching English over there... And you know, they use chopsticks for everything, so whatever. I mean, of course they use chopsticks for salad, and for spaghetti, and for everything. They're just always use some chopsticks. But then I moved to Hawaii. And Hawaii is part of the United States, at least --

**Mat Ryer:** ...for now.

**Carl Johnson:** \[55:56\] ...at the present moment... Yeah. You know, I support Hawaiian independence. And that's not a joke opinion, although, I guess it is unpopular... But they use chopsticks all the time, too. And I was like "Oh my God, these guys are right. We should just be using chopsticks for salad, because using a fork for salad is barbaric." The little red tomato, those little baby cherry tomatoes - they just roll away. They're immune to forks. They're like born with this tough outer hard skin that cannot be pierced by any fork in the world...

**Mat Ryer:** It's like "Fork off", is essentially the --

**Carl Johnson:** Yeah, it's "Fork off!" That's what they say every time. And they just roll away and they spin down.

**Johnny Boursiquot:** I don't think you know how to fork right.

**Carl Johnson:** But when you use chopsticks, it's just so much easier. You just grab it with your chopsticks, and you throw it in your mouth. I'm not saying you have to use chopsticks for everything. You shouldn't use chopsticks for eating a steak. That would be very difficult.

**Mat Ryer:** Soup?

**Johnny Boursiquot:** Oh, not with a steak, but with a salad.

**Carl Johnson:** Nah... But with a salad -- salad is already chopstick-sized pieces of lettuce, and tomatoes, and croutons, and things... All the things in the salad are already chopstick size.

**Johnny Boursiquot:** I like big lettuce pieces...

**Carl Johnson:** Well, even that, you've gotta get in your mouth.

**Johnny Boursiquot:** I like large leaves. I like leaves.

**Carl Johnson:** Are you cutting it with your fork before you eat it? No, it's already cut into mouth-sized pieces... And so then you just grab them with your chopsticks and shove it in your mouth. Trying to do it with a fork is totally barbaric, and now I've been converted.

**Johnny Boursiquot:** I don't cut my lettuce. I eat them like a rabbit. Just large leaves. I just try to stick it all into my mouth.

**Mat Ryer:** Well, you just eat it like a big apple.

**Carl Johnson:** That's the cabbage. That's the cabbage.

**Mat Ryer:** A lettuce is round...

**Carl Johnson:** I guess you could do it your way...

**Johnny Boursiquot:** Mat, if it's green, it's a cabbage. Well, there are green apples. Okay, I can see how you might make that mistake, yeah.

**Mat Ryer:** Well, yeah, it's not a mistake. It's a joke. Also, when you squash -- when you sometimes stab a tomato, its defense mechanism, it will squirt --

**Carl Johnson:** It will squirt you. You've gotta get it all the way into your mouth, close your mouth all the way and then you chew it down, so that you're getting the explosion inside of your mouth, and not on your clothes.

**Mat Ryer:** Okay, I am in on this.

**Johnny Boursiquot:** I disagree.

**Mat Ryer:** Great.

**Johnny Boursiquot:** Wholeheartedly.

**Carl Johnson:** Okay, so this is good. I've already got an unpopular opinion with Johnny, so this is gonna be the one.

**Mat Ryer:** Yeah, I'm gonna at least try it. Are you gonna try it at least, Johnny?

**Carl Johnson:** Well, so the other thing is, I grew up in America, and --

**Mat Ryer:** Where's that?

**Carl Johnson:** ...I didn't use chopsticks until I was like 18, or something like that... 17-18. And it turns out it's not that hard. If you are somebody who can hold a pencil and write with legible handwriting, then you can probably learn to use chopsticks. There you go.

**Johnny Boursiquot:** I have metal chopsticks on my desk.

**Mat Ryer:** He's literally got them --

**Carl Johnson:** You have metal chopsticks right here.

**Johnny Boursiquot:** I have metal chops.

**Carl Johnson:** So Johnny, you have metal chopsticks just lying around on your desk, and you're not going to eat a salad with them?

**Johnny Boursiquot:** You know why?

**Carl Johnson:** What do you use them for?

**Johnny Boursiquot:** Because when I'm eating snacks at my desk, maybe like Cheetos or something...

**Carl Johnson:** You use it for Cheetos? You use it for Cheetos but not salad? \[laughter\]

**Mat Ryer:** Johnny you had it go in for salad!

**Carl Johnson:** Johnny, you're even more civilized than I am. That's like eating the Cheeto with your pinky out.

**Johnny Boursiquot:** I mean, you can't put your greasy fingers back on your keyboard, man... I mean, what am I, a barbarian?

**Mat Ryer:** It's a genius idea.

**Carl Johnson:** Okay, so Johnny, you're actually on my side... You're just like on another level.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Johnny, that's also a great idea.

**Carl Johnson:** Yeah, Cheetos with chopsticks... That's, that's legit. Just eat anything that's greasy, or rolls away, or whatever...

**Johnny Boursiquot:** Anything, yeah.

**Mat Ryer:** I did once try -- kind of half joking, but I picked up my drink with chopsticks. And I thought -- it was hard but...

**Johnny Boursiquot:** Like your coffee cup, and stuff?

**Carl Johnson:** You drink coffee with chopsticks? That'd be impressive.

**Mat Ryer:** No, it was like a beer. No just fast like-- Cause if you go fast you can do it.

**Carl Johnson:** I've seen enough anime where I'm sure they do that...

**Mat Ryer:** Yeah. Well, I just picked it up, and I thought "This is really cool." Pint glasses in the UK have this like little bubble near the top. And that was really handy for it. And I'm like "This is cool." Dropped it, smashed it... Yeah, I smashed the glass.

**Carl Johnson:** Are you not allowed in that bar anymore? You're not allowed in that bar anymore.

**Mat Ryer:** \[01:00:03.13\] I just don't go in because of the embarrassment. They were like "Oh, here comes that chopsticks guy again." And I'm like "Yeah, that's me." But i didn't have metal ones. Johnny, you've really surprised me. You're like "That is insane. You can't do that. That's ridiculous." And then "Let me just have a Cheeto..."

**Carl Johnson:** "Let me use these metal chopsticks that I use for Cheetos... They're not for salad, they're for Cheetos. Come on, man...!" \[laughter\]

**Johnny Boursiquot:** Oh, man... Yeah, yeah.

**Mat Ryer:** I've got an unpopular opinion. This show is definitely running long. Hopefully, our listeners have stayed with us...

4: They'll edit it all out. This should be two minutes.

**Mat Ryer:** No, they'll edit it all in... Mine is - on Twitter, and I know Twitter is a little bit unpopular at the moment itself, but I prefer the For You tab than the one that everyone complains about. Like, not all my friends are in my timezone, so I kind of need a bit of a digest, and it serves it quite well. And the stuff it selects is the stuff I'm most interested in. I do miss things sometimes, I realized... So it's not perfect, but I think I might prefer the For You tab, or at least I like both. We'll see if that one's popular. What do you think?

**Carl Johnson:** Yeah... I've switched over to Mastodon, but I still have so few people that I'll just be trying to procrastinate, and I'll look at my phone, and there'll only be like one new toot in the last three hours; I'm just following so few people. So that's sort of -- that's where it is right now. But yeah, back when I was on Twitter, it is true that like at a certain point you can't be a Twitter completionist without driving yourself crazy... And so it is nice to have some sort of summary, or the best of, or something.

**Mat Ryer:** I was hanging out with Kris Nova at FOSDEM recently, and she sets up the Hachyderm Mastodon server; and that one's really growing. There's like 50,000 people in there now. So Carl, you may want to join in on that.

**Carl Johnson:** I'm on the mastodon.social. I joined like in 2017, and then I forgot that I joined until Twitter happened... And then I remembered that I had joined... \[laughs\]

**Mat Ryer:** The Hachyderm project is interesting because they put priority on privacy, and they were hosting it in the best country that they could find, that made sense, that really respects privacy and doesn't let people snooping, and things like this. So it's a really interesting little community then. Kris did a great talk about that, which I'm sure will be available on the internet at some point.

**Carl Johnson:** But are they gonna add the For You tab, or not? They're not, are they?

**Mat Ryer:** It's a good question.

**Carl Johnson:** Wouldn't they have to violate your privacy to figure out what to show you?

**Johnny Boursiquot:** That it's for you? \[laughs\]

**Mat Ryer:** Could be. Alright, Johnny... Apart from eating Cheetos with chopsticks, have you got an unpopular opinion?

**Johnny Boursiquot:** Hey, that's not an unpopular thing to do... As a matter of fact, I think a lot of people are gonna listen to this and be like "You know what? That is a great idea, mate!"

**Mat Ryer:** I think so, yeah.

**Johnny Boursiquot:** And I'll be responsible for starting a whole new trend.

**Mat Ryer:** Yeah, definitely.

**Johnny Boursiquot:** But yeah, but I do have an unpopular opinion... I think layoffs can be a good thing.

**Mat Ryer:** Oh, really?

**Johnny Boursiquot:** Case in point... I know it's probably gonna be an unpopular, but case in point, my time at Heroku is coming to an end, so I am ready for my next adventure.

**Mat Ryer:** Oh, right. Wow.

**Carl Johnson:** Well, I'm sorry to hear that, Johnny, but good for whoever finds you. You know?

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Indeed, indeed.

**Mat Ryer:** How are you feeling about it, Johnny?

**Johnny Boursiquot:** I learned a metric ton, as you can imagine. My teammates were top-shelf engineers. Great org, great people, great teammates, great managers... I had a very good time, and it was very productive. But yeah, like all good things, it's time to find what's next. So I'm gonna be out there. So this might be my first official, I guess, declaration that I'm going to be looking for my next thing.

**Mat Ryer:** \[01:03:57.25\] Oh, wow. You probably won't be looking for very long, knowing you... But best of luck.

**Johnny Boursiquot:** Oh, well, thank you.

**Mat Ryer:** Yeah. Yeah, I know, and it must be tough for people. I mean, some of the ways that gets announced, and all this -- yeah, I feel like we could all do a bit better with that kind of thing, but... Well, I mean, I'm not worried about you, obviously, Johnny...

**Johnny Boursiquot:** I'll be okay.

**Mat Ryer:** Yeah, I know. You'll be more than okay. You'll be like annoyed at the interest, I think... Especially after you've announced it on this.

**Carl Johnson:** Yeah, I don't know... Maybe I don't want to slag off Heroku, but I do feel like the way that they announced that they were going to start charging for the free dynos... I felt like that was a fair thing, but that they only later announced that "Oh yeah, you can just put them on this special plan, where you could have all of your old free dynos can now be on one shared (whatever it's called) plan." And they didn't announce that for a couple of months, and by then I had already like killed all of my free dynos. And I was like "Oh, if you had just told me I could have kept all 20 of them alive for $5, I would have done it", but I wasn't going to pay $5 times 20, and so I just killed them all, and now it's too late to bring them back... So I don't know, I feel like management sort of made a mistake in the way that they announced that. And then, obviously, the whole tech industry right now is going --

**Mat Ryer:** It's one reversible -- or non-reversible decisions...

**Carl Johnson:** Yeah, it's a non-reversible decision... The whole tech industry right now is going through these layoffs, but... So probably, I don't know, maybe it would have been inevitable. But I feel like that maybe contributed to some of their problems. It's just like bad sequencing of how they rolled that out.

**Mat Ryer:** Well, yeah... So yeah, heart goes out to everyone that's affected by this stuff... It's not easy, but I quite like Johnny's attitude, which is "This is opportunity, and time to do something next maybe."

**Johnny Boursiquot:** Indeed.

**Mat Ryer:** Okay, brilliant. Well, that is all the time we have, for sure... And, you know, it's been such a pleasure digging into Go 1.20. Some really useful, exciting things in there, and I think people will be thrilled to hear about them. Let us know what you think; we're on Twitter @gotimeFM. You can just do hashtags if you like, or -- I don't know if we are on Mastodon yet, but we need to sort of get on that...

**Carl Johnson:** I think they're on Mastodon. I was trying to retoot it before the show started, but I didn't see the toot, so maybe we're not. But I thought we were.

**Johnny Boursiquot:** Wait, you toot on Mastodon? You don't tweet. You don't retweet?

**Carl Johnson:** No, it's not tweeting, it's tooting, because it's a little Mastodon, a little woolly mammoth.

**Mat Ryer:** Everyone's okay that that also means breaking wind...

**Carl Johnson:** Everybody knows woolly mammoths toot. Yeah, no, we're fine with that.

**Mat Ryer:** Okay, cool. Yeah, okay...

**Carl Johnson:** I mean, we named our last president President Fart, so...

**Mat Ryer:** That's very true in British. In British, Trump does mean -- that is what that means, so... Yeah.

**Carl Johnson:** Yeah. British people don't realize that's also what Obama, and Bush, and Clinton - those all are also words for fart, just in American slang, so... \[laughter\]

**Mat Ryer:** Well, we change it whenever you get a new president. We haven't got over the independence thing, to be honest, so...

**Johnny Boursiquot:** Still holding a grudge on that one, huh?

**Mat Ryer:** Yeah... \[laughter\] A little bit. You know, we just deny it. You can just deny things now if you don't --

**Johnny Boursiquot:** That you don't like, yeah. If you don't like it, it's not true.

**Mat Ryer:** Yeah. The Kings of America, King Charles...

**Johnny Boursiquot:** You'll be back...

**Carl Johnson:** Oh, yes... \[laughter\] Did anybody tell Charles what happened to the first Charles? I feel like when you're picking out your rein name, you want to be like "And whatever did happen to that first Charles?"

**Mat Ryer:** Good point, yeah.

**Johnny Boursiquot:** Pick up where he left off...

**Carl Johnson:** Maybe try a different name, I don't know... Like, wouldn't that be nice? You're like 80 years old, and then you change your name to be like Reginald the Fourth.

**Mat Ryer:** It was in the cards. They announced it. They choose the name when they become the monarch. And there's actually some -- there's something where you'll never have a new British monarch called James, I think, because it means you have to admit that one of the other previous James'es was legit.

**Carl Johnson:** \[01:08:07.11\] Oh... You'd have to pick your number, and depending on what number you pick...

**Mat Ryer:** Exactly. And they wouldn't be a good monarch if that person was true, so they avoid the issue. Hopefully one day...

**Carl Johnson:** Maybe they could just add another usurper in there, and so then that would be like two bugs that would make a feature, you know? It's like "Okay, well we don't know which of the two usurpers it was, so... Now it's all set."

**Mat Ryer:** Yeah, that's a great idea. Yeah, but you know, it's a monarchy, isn't it? They're not -- they're not known for this sort of outside thinking. I mean, just consider, this is like a modern country.

**Carl Johnson:** it could be like the Z index in CSS, where people set their Z index to like 1 million, because they're like--

**Johnny Boursiquot:** To see what works.

**Mat Ryer:** \[unintelligible 01:08:52.08\] on top.

**Carl Johnson:** They just wanna get higher. I don't know... I don't know what it's gonna take, but I'm going to try Z index 60,000, 50 million." You know, as long as it's bigger...

**Mat Ryer:** As long as they also set their clothes Z index the same. Otherwise, they'd just be naked, because it'd be on top, always. That's CSS for you...

**Carl Johnson:** But you could do that with the monarchy. You could be like James the 5 millionth. You'd be like "I don't know how many James'es were there before me. I'm James the 5 millionth."

**Johnny Boursiquot:** Surely there hasn't been 5 million of them, so...

**Mat Ryer:** Yeah, that's not a bad idea. Or just like Charles Billion.

**Carl Johnson:** Yeah. Charles Billion is actually a very baller name. He should have just gone straight to Charles Billion.

**Mat Ryer:** Yeah, I think so. Well, I won't have a go at the monarchy...

**Carl Johnson:** We can't even end this show without getting derailed on nonsense...

**Mat Ryer:** Not without me committing treason...

**Johnny Boursiquot:** Right. Right, right.

**Mat Ryer:** Yeah...

**Carl Johnson:** Oh, yeah... No, don't commit lèse-majesté. Do they still have those laws in Britain?

**Mat Ryer:** I mean, I don't wanna find out.

**Carl Johnson:** Probably. I mean, they do, they just don't tell you about it, because that'd be lèse-majesté, so...

**Mat Ryer:** Right. Yeah. Okay, well, thank you very much, Carl Johnson. Pleasure. You need to come back more often, not just when there's a major release of Go, but... Definitely every one.

**Johnny Boursiquot:** We'll see you for 1.21, okay?

**Carl Johnson:** We'll see how the unpopular opinion goes... There might be demand that I never come back. People are just slamming that down arrow. They're just karate-chopping that down arrow. Headbutting the down arrow.

**Johnny Boursiquot:** Chopsticking it, yeah.

**Carl Johnson:** Yeah, they're hitting it with their chopstick.

**Mat Ryer:** Yeah. Well, yeah... Otherwise, it's like a rom-com. It's like "Let's meet back in one year." That's like a Richard Curtis movie, with Hugh Grant as the lead... That's who's plays you, Carl.

**Carl Johnson:** Hugh Grant?

**Mat Ryer:** Yeah, Hugh Grant plays you in this.

**Carl Johnson:** I could be the bottle in the Message in a Bottle...

**Mat Ryer:** Okay, yeah... You don't wanna be the message? Who's playing the message?

**Carl Johnson:** Oh, there's this time traveler's wife; she could do that.

**Mat Ryer:** Oh, yeah. Have you seen the Bount-- oh, we can't. Let's do time travel movies next time.

**Johnny Boursiquot:** Yes.

**Mat Ryer:** Thanks, everybody. See you next time, on Go Time!
