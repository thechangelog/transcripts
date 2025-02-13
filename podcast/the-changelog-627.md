**Jerod Santo:** We are here with Bert Hubert, a geeky entrepreneur from the Netherlands, with a 30-year track record in commercial and open source software. Bert, welcome to The Changelog.

**Bert Hubert:** Yeah, thank you for having me.

**Jerod Santo:** Happy to have you. Excited to talk about what you're up to these days and what you've been up to historically. 30 years - that's a long time. I read that you landed your first job hacking a cable internet provider? Do you want to tell that story?

**Bert Hubert:** Yeah, it was a fun story. So we lived in this university town and we were quite late to get the cable modem. And it may be interesting to know that in Europe, in many places, if you had dial-up internet, it was actually charged by the hour. So we had no local free calls as in other places, so it was a very big deal to get a cable modem. And when I got it, it was very much delayed, and the cable company had issues with it... And when they had it going, I started scanning their infrastructure, and I found out that while they had finished setting up their internet, they had not finished setting up their security. So I could sort of waltz right into their servers, and stuff... And so I sent a message to the system administrators using the famous wall command. I said, "Hello, I'm here." And they said, "Well, if you're so good with security, then come over."

And so I got on my bicycle - this being the Netherlands - and I drove to the cable company. And on my way there, I was like "Yeah, this could end up really well, or I could end up being arrested", because I'd just waltzed into their systems. And it ended up really well. A little bit too well, because that was the dotcom boom times, when there was such a shortage of staff that I came in, they gave me a chair and they said "Sit down." And that actually ruined my studies of physics, because then I had this job over there.

But it was quite cool. It was very nice to scale an internet service provider from like 50 users to 50,000 users. Everyone should maybe one day scale a company by three orders of magnitude. It's very educational. So I had a great time there. And it was a wonderful way of sort of learning how to run an internet service provider from scratch, which is very educational. Because if you mess it up at that stage, it's not so bad. But if you mess it up by this paradigm and you're at Comcast scale, it is pretty bad.

**Adam Stacoviak:** Yeah, you can't mess around at that stage. You've got to have the uptime, right? All the nines.

**Jerod Santo:** So what were some of your learnings as you scaled up? These are kind of like the first time things are scaling up, so you can't exactly go read a book about it, right?

**Bert Hubert:** Yeah. I actually wondered if anyone had written the book about it, but I don't think we had that rate of scaling that we had in 2001, where you would double every month, or something like that. One of the main things I learned there is that it was quite amateur stuff. So you need to professionalize and figure it out.

For example, at one point I did take down the whole internet service provider, because I had fixed a bug in the LDAP server and I was very pleased with myself that I had fixed that bug... So I shut down my laptop and I went home. And I had forgotten that I left the LDAP server running in the foreground. And the moment I shut down my laptop, the whole internet service provider shut down. And on my bicycle back home again, I got already -- I was barely out of the building before they called me and said "What did you do?" And so I had to rush back in. So I learned a lot there, in the sense that you really need to -- it's nice to hack yourself around these bugs and then feel really good, but it's also maybe really good that once you fix the thing, then to also sit down and really tighten things up again, and not just shut down your laptop and shut down the whole internet service provider.

**Jerod Santo:** Well, unintended consequences, right? You just don't know what's going to happen. You shut that laptop, think you're done for the day...

**Bert Hubert:** Yeah. Well, there is one really interesting thing that I learned there, and I've been passing on this message since forever, and I'm also going to pass it on to your listeners.

**Jerod Santo:** Okay.

**Bert Hubert:** \[08:00\] So we had a redundant email setup. And we thought it was good, it was redundant... So there was this guy in charge there and he said "Well, are you sure this is redundant?" I said "Yeah, it's all redundant." And then he pulled the plug on one of our servers. And then everything broke, because it turned out that it was sort of -- yeah, we felt that it was redundant, but we had not actually had someone pull the plug on us, and see if it actually was redundant. And then it turned out that it was not redundant. And since then, every time someone says "Hey, we've built this redundant system", I say "Can I just go in there and start shutting down some random servers now? Is it going to fly?" And they said, "No, no, no. Don't actually be doing that." And I'm like "Well, maybe you have to work a little bit more on your redundancy, until you can live with me going in there and just shutting down some random stuff to see what happens." So that has always stayed with me. If someone says it's redundant, I'm going to ask you "Can I just shut down some stuff for you then?"

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's not a good thing, you know. Pull the plug, things fall over.

**Bert Hubert:** Yeah, yeah. Well, it's a good thing. I mean, if people say "Look, it's sort of redundant in the sense that we can make it work again", okay. That's fine. That's my level of expectation that something could fail over and you could rapidly make it good again.

But if you're telling me that "Look, this is going to be automatically redundant, and it's going to work anyhow", then I should feel free to just unplug some stuff to see what happens.

**Adam Stacoviak:** We all learn those lessons to some degree, right? Like, whenever you think something is safe and secure, or redundant, or whatever you might want to call it, and then chaos engineering happens, essentially, you know?

**Bert Hubert:** Yeah. And you only learn that, you only learn that -- recently I've been... I mean, we might come to that. Recently, I'm now running some actual services again that people depend on 24 seven, and everyone has to sort of live through that for a bit. It's experience being on the line. Like, people are relying on this stuff, and I should be doing a good job here. And that's a whole new level of thinking that you get, which is very different from a programmer that just programs and never gets those 3am phone calls.

**Jerod Santo:** This is why I've been trying to convince Adam to run our Zulip community from his home office... Like, just host it for us. Self host that sucker. We've only got a few hundred people using it, but they're using it all throughout the day.

**Adam Stacoviak:** For the learnings?

**Jerod Santo:** Yeah. And for that upgrade of yourself, just what it feels like to have people depending on your service. It changes you.

**Adam Stacoviak:** Okay... I'm not against it necessarily. It's just I prefer not to.

**Jerod Santo:** \[laughs\]

**Bert Hubert:** I mean, I get that feeling. I really understand, because it really sucks. Because once you have that stuff running in your house, you have to start planning around things, because you can not just have an electrician come over and redo your wiring and be like "Yeah, we're going to be down for three hours." I mean, it does make you think.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** So straight out of university, I ran some mail servers on a Linux network for a company, maybe a few hundred people. And there were two servers, and they worked in conjunction, and there was Spam Assassin, and it's all kinds of stuff. There was PostFix... And when we had issues, it would just queue up. As long as the servers were online, even if a mail server is offline, it comes back on, that delivering server, they're going to try again a little bit later. And so it would just queue up. And so there were times where I would come into work and I would look at the mail queues and people are thinking it's a quiet morning, like "I don't have any email this morning." It's like "Oh, you do. I just haven't been putting them in your inbox."

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** And then I used to love just watching that queue just work its way down back to zero. I definitely know the feeling of other people relying on your network services. It can be stressful.

**Bert Hubert:** It can be. It can be.

**Adam Stacoviak:** Yeah... Unnecessarily, if it's unnecessary.

**Jerod Santo:** Right. If you've got someone else to do it for you, why do it, right? Bert, what are you running these days? You said you're running some stuff now?

**Bert Hubert:** Yeah. So I built a sort of parliamentary monitoring system. So we have also an upper chamber and a lower chamber in the politics house here, and they have a pretty competent website. So it's not that it's bad, but half a year ago at one point there was a new law here in the Netherlands, which was quite impactful for the internet community, and we hadn't noticed. So the law was about to enter into force and we didn't know about it.

**Jerod Santo:** \[12:19\] Okay.

**Bert Hubert:** And luckily, the law was not so bad, but we only had a few days to look at it... And we knew that if it was bad, we would not have been able to do anything in those few days. So back then I said "We can never have this happen again."

And on the Dutch parliamentary website you can put some search terms and it will send you messages if any new documents match those search terms. It's a bit clunky, it's not that great. So I thought let's make some kind of advanced warning monitor that we on the internet can put up searches and say "The moment you have a meeting about internet censorship, I want to know about it." And not only do I want to know when it actually happens, I want to know as many months in advance as possible. And from that, I built this monitoring website, and it grew and grew and grew...

And actually, the sort of fun thing is if you are outside the government, you can innovate rather quickly. And the Dutch parliament is completely open data. So everything they do, you can effectively monitor the state of the parliamentary documentation system to your house, which I do. And that grew and grew and is now quite popular, in the sense that even many politicians are using it, and many civil organizations are using it. And the most interesting thing, and which I find most important, it turns out that my simple parliamentary information website - and it's like really straightforward; plain HTML, almost no JavaScript - works really well with software for blind people. And it turns out there are some government workers that have to work with these parliamentary documents, and they've found out that their screen reader software has a lot of fun with my site.

**Jerod Santo:** Easier to read on your site than the official site.

**Bert Hubert:** So I now have a few low-vision government workers that are actually relying on my site to do their job. And that has added to my sense of that is not just a hobby anymore, it's just that people actually need this stuff. So from that, I learned all these very interesting things that you only learn when you go live with services, with things that you don't know.

One thing, for example, that I learned is that if you have an iPhone and someone enters a search term in your form, and you do that within quotes, because you want to search for a sentence, the iPhone will turn it into smart quotes. And that is not something your search engine is ready for. Your search engine doesn't recognize these smart quotes as smart quotes. So I had this weird situation that iPhone users couldn't find anything. And this is the kind of thing that you only learn in production.

And the other thing I learned - I have these signup emails, passwordless login email, so you can just log in with your email address, which is quite popular these days... And for some people it didn't work. And it turned out that Microsoft now runs a security scanner that will actually attempt to log in for you.

**Jerod Santo:** We know this very well. We were just talking about this topic on the previous episode with somebody... But you have new information now, because we have the same thing, passwordless logins on our website. And what my trick to fix that was, was I switched the actual requests from a get to a post, but I read on your website that that's not going to even work anymore, because Microsoft is now executing JavaScript in their --

**Bert Hubert:** Yeah, they're posting it to your website.

**Jerod Santo:** They're now posting.

**Bert Hubert:** \[15:54\] And the weird thing is -- so the strange thing is they do the post, which is already, I think, violating many people's assumptions. You should not be posting on behalf of anyone else... But the other thing is, when they do that post, my site actually used to return a cookie, a session cookie, which means that Microsoft with this security measure... So the reason they do this is they want to see "Is there malware on this site? And might that malware only pop up after a post?" I see where they're coming from. But when they sent that post to you, my site would use to respond with a session cookie that said "Welcome. You're logged in now." Which means that Microsoft is receiving tons and tons of these session cookies right now.

**Jerod Santo:** Oh, cookie monsters.

**Adam Stacoviak:** Literally.

**Jerod Santo:** \[laughs\]

**Bert Hubert:** These cookies are very valuable, because these are the session cookies that allow you to do stuff. Well, it now appears that the new barrier is they will execute your JavaScript, they will execute your posts, but they will not, for now, click on a button. So you must have a button in there right now, and that button then does the post.

**Jerod Santo:** Okay. So you are actually -- you're adding a step for the real people, because now they have to click on the link in their email, and then come to your site, and then click on a button to sign in.

**Bert Hubert:** Yeah. But Microsoft did not announce that they would be doing this, and they have also not announced that they're not going to click on buttons. So maybe one day they will click on buttons.

**Jerod Santo:** \[laughs\] Well, you need a monitoring website where you can monitor Microsoft's changes...

**Bert Hubert:** Yeah, well... But it is the kind of thing - and I cannot stress this enough... This is the kind of thing that you learn when as a programmer you go into production again.

**Jerod Santo:** A hundred percent.

**Bert Hubert:** And I've since heard many people, they told me that Trend Micro also does this... And I actually ordered some hardware stuff from a store today and they have a link that is vulnerable to this. You have to click, and it says "I'm going to collect my hardware now." And that is already useless for them, because Microsoft is doing all the clicking right now.

**Jerod Santo:** Because Microsoft's already registering everyone's hardware for them.

**Bert Hubert:** Yeah.

**Jerod Santo:** Yeah, it's a crying shame. It's tough out there in the real world of the internet, isn't it? I'm going back to your monitoring site... What formats does the government put stuff out? Are you like diffing HTML, or is it better than that?

**Bert Hubert:** Oh, this is a story... This is a story. So on the one hand, they have a glorious API. And actually, I didn't read the manual. They use this thing called OpenSync, or something like that... And that is apparently a sort of weakly determined standard by which you can replicate a relational database to somewhere else, as a series of XML changes. And you can pull these, you can say, "I want to get all your changes since marker such and such." And that's actually pretty nice.

So it is quite convoluted, because I think it would have been easier if they just said "Look, this is our SQL database and you can query it." But no, you get this stream of XML messages. And that is actually quite glorious and good. Now is where the problem comes. Governments, when they send you documents, they love PDF. PDF has a lot going for them. You have PDF/A, which is an archival form of PDF, which is actually nice, because that's the sort of PDF variant where you can say "I'm sure I'll be able to read this PDF 50 years from now." So it only uses built-in fonts, it has no language, it doesn't do anything... So governments really love their PDF files. The thing is, web users do not love their PDF files. Web users want to see web pages. They want to see HTML, they just want to click... And the thing is, when the Dutch government gets a document, it starts life as a Word document, so docx, which is easily processed. Then they convert it to XML, which is also easily processed. And then finally, they convert it to PDF, which is not so nice to process.

\[20:00\] So in order to make all this stuff work, I've found out that there is a sort of official government archive of government documents, and there they also publish the XML. So in the course of this trajectory, I retrieved the document like four times, and to save it, I have to retrieve it from some kind of official government archival site where there is XML. And that XML actually is glorious. So when someone speaks in Dutch parliament, they make a note at the exact timestamps when they speak. And this is how they can match it up with the video.

But it also allowed me to make these statistics to say "Who are our Congress people that talk the most, or that talk least, or that have the longest sentences?" And because they log it all so well, I could also "Who are the fastest talkers of our Congress? And who are the slowest talkers?" And this is of course not very necessary, but it is a lot of fun. I never used to be a fan of XML, but it actually does get the job done in this case. It's actually not so bad.

**Jerod Santo:** Yeah, relative to PDF, it's better, right?

**Bert Hubert:** Yeah. Well, everything is better than the PDF. I mean, people -- I understand that people sort of love it because it feels like it's a standard format, and you have everything in there that you need... But to process it, it's nasty. For example, if you have a two column PDF file, it's actually not easy to figure out that it is a two-column PDF file. Because if you look at the postscript, it's just a sentence, then a bunch of spaces, and then another sentence, which is the next column. So it's all not that great.

**Jerod Santo:** So do y'all have the filibuster over there?

**Bert Hubert:** Actually, no, we don't. And I try telling people that our politics are also becoming wilder, and less useful, but we haven't yet sunk to the level that we need a filibuster kind of thing. So for now, if you have a simple majority, you can actually get stuff done in Dutch government... But I worry where it's going.

**Jerod Santo:** I always thought the filibuster was just the dumbest thing. It's like, "If we can just talk long enough, we can run the clock out." It's so silly.

**Bert Hubert:** Yeah, yeah...

**Jerod Santo:** But I ask that because - then do you have any blowhards? Do you have a ranking of "Here's our most wordy politicians, versus not"?

**Bert Hubert:** Yeah, we do. We have these people that actually -- well, they will talk your ears off... And actually, it's not always who you think it is. It is sort of funny to -- when you run these numbers, you find out that it's actually quite often that it's different from what you thought it would be.

**Adam Stacoviak:** What we all need in government is a haka.

**Jerod Santo:** Oh, excuse me?

**Adam Stacoviak:** A haka.

**Jerod Santo:** What's this?

**Adam Stacoviak:** I may or may not be pronouncing that properly... Have y'all seen this in New Zealand? This tail end of last year?

**Jerod Santo:** No.

**Bert Hubert:** Yeah, no, that was very impressive. And they should do more of that.

**Adam Stacoviak:** Oh, my gosh... I'm not sure the context of the protest, but very much a spectacle. And I think we all need versions of that in ours. Describe it, Bert. Describe it in your best words.

**Bert Hubert:** Well, that is in New Zealand... That's what you're referring to, probably.

**Adam Stacoviak:** Yes.

**Bert Hubert:** Yeah. So they had a law that was passed which was not good for the indigenous people in New Zealand, and then they got really upset. And then the indigenous people or the people affiliated with them in Parliament actually performed a whole song, a protest song in government, which is really a very important thing in New Zealand. But it was, I think, a great way of making a point. And I cannot imagine US Congress breaking out into a song.

**Jerod Santo:** Oh, goodness gracious. Please, no.

**Adam Stacoviak:** This is a may-be a song, but I would not describe it necessarily as song.

**Jerod Santo:** \[laughs\] It doesn't sound very nice?

**Adam Stacoviak:** It's more like a screaming song, and like a dance, and a performance...

**Jerod Santo:** A chant, maybe?

**Adam Stacoviak:** Like a chant, yeah. It's probably more akin to a chant.

**Jerod Santo:** Right.

**Adam Stacoviak:** Very performative. One person began it...

**Recording:** \[24:00\]

**Adam Stacoviak:** A great demonstration. I think it's turned into a meme in terms of how to protest... She tears up whatever it is they're protesting, and then many people that are in the Parliament space begin to join in with this dance, that turns into song and dance.

**Jerod Santo:** Wow.

**Adam Stacoviak:** And so it's very -- it demonstrates very well. So if you feel very strongly against something, clearly it's got a very visual and a visceral process to like make you pay attention, you know? So it's interesting... You should check it out, Jerod.

**Jerod Santo:** I will. I'll go check that out.

**Break:** \[24:47\]

**Jerod Santo:** Well, one thing about governments, it seems, as they go on, they either incline or decline. And many of them decline. And this is a very poor way of segueing into the topic of long-term software development, which is something you've been interested in, Bert, and I'm also interested in, as we have systems that exist for decades and become quite crucial. Software has never been more crucial in the life of everybody out there in the world than it is today. And a lot of these systems are not built to last, or they weren't built to last, or they thought they were building it to last, but they actually weren't... And you've done a lot of thinking, and even writing and talks about long-term software development, and I think we would all benefit from hearing your learnings and what you've been talking to other folks who've been experienced or believe about this. We all have thoughts about how you actually write for the long-term. I'm curious what you have found.

**Bert Hubert:** Yeah, so I was invited -- so I'm a very part-time technical advisor to the Dutch government also, to what you would call the FEC, the electoral board... And they built this software for tabulating the national elections. And they are revamping it, and they said "Would you take a look at our code? Can you tell us what you think about it?" And I looked into it and I've found that they were doing sort of more or less standard 2025 software development... And then I wondered -- and that means having like 1,600 dependencies. Because if you have a Node.js built project these days, and you install it, it will, for starters, pull in like a thousand dependencies. And then you haven't done anything yet even.

So I looked into that and I thought "Well, this is not going to be something that's viable for the next 10 years", because these dependencies change all the time, and npm might go away for the next 10 years... So I turned that into a study, "What would you do these days if you had a 10-year software project?" And I went to Mastodon; that is a really good social network to ask these kinds of questions, because it's full of nerds, and they're my people... And so I asked them, I said "Look, what are your thoughts, for anyone doing long-term software development?" And we had people weigh in that have a software with an 80 - and not 18... 80-year horizon. And these are people that study, and have to measure the radioactive decay of nuclear waste. And they are tasked with measuring and supporting that for the next 80 years. So they spent quite some time thinking about this stuff. And it turns out, actually, it's sort of modern software development. It's like sort of the complete opposite of what you would do if you want to have software that works 10 years from now... In the sense that we have these huge -- that even building software is fragile right now. So not even that it does the same thing, but if you want to build a sort of standard 2025 software project, you need a working internet connection, and like hundreds of servers around the world that supply you with data, even before your software runs. And that is not something that is a healthy thing to have if you want to promise people that it will work 10 years from now.

So I got a bunch of very strident feedback from people. They said "Well, if you look at the problems that people have with old software, something goes wrong with the software, there is a problem..." Something always goes wrong, of course... And then in your mature software project, you need to figure out what is actually going wrong. And what almost everyone said is keep it simpler. Of course, we all know that we should not write software that is as complicated as we can make it, because that's not going to end well... But everyone said "Look, we've had a very bad experience. We needed to figure out seven years ago why this clever code -- what it actually does." And then often you find that this clever code, there was no need to make it clever. So if you have like 10 political parties, or -- in the Netherlands \[unintelligible 00:31:15.12\] we have 25 active political parties. So that's -- I mean, you have two?

**Jerod Santo:** Yeah, can we borrow some?

**Bert Hubert:** Well, having 25 is not an optimum, I can tell you that. But even if you have 25, there is no need to set up a complicated data structure to hold 25 political affiliation names. But one day you might sit there and say "Hey, wouldn't it be useful, wouldn't it be fun if we had a complicated red-black tree so that we could make really rapid searches of our 25 political parties?" And then you sit there maybe in 2032 trying to debug why it doesn't work, and that's because you tried to be clever. And so many people came to me and they said "If I have one regret, it's that we built things too complicated, and then seven years later no one understands the code anymore."

\[32:06\] And the other thing that people came up with is that people change jobs a lot, for a number of reasons. But if you want to do long-term software development, the easiest way to do that is with long-term employees. Because they build up knowledge, they know how the stuff works... But if you have people that are changing in and out all the time, then you become very reliant on good documentation. And it's, of course, always good to have good documentation. I mean, by all means, do it. But it's very hard to compensate for all that knowledge walking out of the door after two years.

So people also said, "Look, you really need to--" I mean, it's old fashioned and it's almost crazy talk these days, but that you really need to just invest in keeping your developers happy, and wanting them to stay for like maybe seven years, or eight years, or something like that... But again, this is also not how many places work these days anymore, because they have contractors, and they zoom in and they zoom out...

So as a result -- so I wrote the article based on my presentation to the Dutch electoral board, and it hit Hacker News, and other people... And amazingly, almost everyone agreed with it. It's very rare that that happens. But like 30,000 or 50,000 people read it. And based on that, I got a lot more feedback from people that said "Look, we are doing nothing like this here. We are following sort of the Facebook model of software development, where we deploy all the time, and most days of the week it actually works. And sometimes we go through a bad patch." But then there are all these kinds of people that have to make software that opens and closes bridges, and doors, and MRI scanners that could physically tear themselves apart, or pacemakers, or robots that actually do surgery. These people are like "No one understands us anymore. Because if we do the regular software development thing, they start with stuff that is so fragile that we would never entrust that to open or close a bridge, or launch a rocket, or whatever."

So it's actually becoming quite a rare skill to build the kind of software that has like safety of life consequences to a bunch of people that will start with downloading the latest JavaScript framework... Even though that might be very nice for your website.

**Adam Stacoviak:** A lot of great stuff in here. Dependencies, choosing those wisely, keeping it simple, obviously... These are all, I suppose, tried and true; kind of, to some degree, well known. So it's not like you've reinvented the simplistic wheel. You've just sort of collected what might be a good zeitgeist for folks to follow.

**Bert Hubert:** Yeah, I collected very -- it is a list of extremely obvious things. But once sufficient people have sort of forgotten about the obvious things, it starts becoming worth your while to just restate the obvious things, and say "Look, you're not crazy. You're not --" I mean, because many of these things are obvious, but also sort of old-fashioned.

**Jerod Santo:** Right.

**Bert Hubert:** I think it was worth restating. Also, it has strengthened the spine of a number of people; it has reinforced them to say, "Look, let's work on keeping it simple. Let's refactor this stuff, and let us not optimize these things before they need to be optimized."

**Jerod Santo:** \[35:40\] Right. That's a big one. It's easy to get nerd-sniped into premature optimizations. If we just focus on the simplicity part, let's return to dependencies, and maybe talk about that in detail... But I don't think very many people set out to make a complicated solution. Like, it's not -- unless you're just malicious, or like willfully ignorant, or something. You're not like "I'm going to make the worst possible solution ever." We all want to make it simple, and straightforward, and repeatable, and reusable... These are all things that engineers, software developers strive for. And yet, it seems like we all end up making things that are too complicated anyways, right? Nobody's like "I'm going to make a bunch of spaghetti code, and it's going to be a terrible mess four years from now." And yet we end up there. So do you have -- did people come up with ways that you could actually like deploy a strategy or a tactic towards simplicity?

**Bert Hubert:** Yeah. So I would not actually agree that we -- we all say we like simplicity, this is true. But there are, for example, people that take a language standard and see it as a personal challenge to use all of it.

**Jerod Santo:** \[laughs\] Okay... Well, because maybe that demonstrates proficiency.

**Bert Hubert:** Yeah, yeah. It's like "Look, I'm really good at this stuff... See how complicated this code is." And I think the only people that do this correctly are the people that feel it in their bones. That when they're typing in something complicated, they worry already about the 3am debugging session that's going to ensue five years from now. Because they've been through it.

**Jerod Santo:** They've been burnt before.

**Bert Hubert:** Yeah. And so I think there are actually a bunch of people that really -- maybe it's controversial, but for example, programming in Rust is all the hype these days, and it has many things going for it... But when I tell people, I say "Look, it's quite a complicated programming language", they actually like it that way. It's a challenge to write in there, and some people actually sort of enjoy writing challenging code.

So I think the best way of writing simple code is having been on call. That is like the one way of keeping yourself pure, because you know "If I mess this up, if I write this too complicated, it's going to cost me my sleep one day."

**Adam Stacoviak:** Basically, deal with the mess. You do that in product, you say "Hey, do support for a bit. Hey, if you're an engineer, be on call. Deal with the mess that you create." Because it's pretty easy to write something, throw it over the wall and walk away, because you're not on call.

**Bert Hubert:** Yeah. And in many organizations, there is actually a physical wall. It's just the people that write the code will never -- they will only indirectly hear about it if there are any problems with it. And that means that there's a natural tendency to keep it simple, because you know you're going to be stuck with the mess.

If you put an organizational barrier between dealing with the mess and writing the mess, then it maybe becomes a lot more attractive to try this new style of programming that is like impenetrable.

**Jerod Santo:** And that goes back to your churn mention as well. Like, if you're only going to work somewhere for 12 to 18 months, unlikely that you're even going to deal with the mess that you're creating, because you moved on to the next organization by the time the mess rears its ugly head. And so you actually may be thinking that you didn't make a mess, because you're gone.

**Bert Hubert:** Yeah, you never had the opportunity to find out.

**Adam Stacoviak:** You may even gotten a bonus because you delivered in such a time frame.

**Jerod Santo:** Very complicated, yeah. It's so hard.

**Adam Stacoviak:** The solution's out there, solving the problem, but meanwhile there's something percolating behind the scenes.

**Jerod Santo:** So ego kind of gets in the way. Like, we want to be clever.

**Bert Hubert:** Yeah. And sometimes I write code that is so embarrassingly simple, and I'm like "It cannot possibly be enough." And then like five years later, you go "Well, apparently it was simple enough. Apparently, it was good enough."

And there's also this anticipatory thing. For my parliamentary monitoring system, I have a very interesting situation that in parliament are like seven or eight different kind of important entities. There are meetings, there are documents, there are appointments... And seven or eight - the tricky thing about that is can you write a useful abstraction, that is useful even when you only have seven sort of different things?

\[40:07\] And you could write this lovely generic solution where you could have thousands of different kinds of entities in there, but it would be quite complicated. But because there are only seven or eight entities, it is not always necessary to build this sort of generic solution, but it does feel a little bit bad if you have a switch statement with eight kinds of categories in there. It feels a little bit like "No, I should have built an object, and inherit from that, and made it all generic..." And that's also the one thing I see that people are sort of anticipating huge complexity later on, but that might never happen. You might never get to that point where you needed a generic customer service class handler factory.

**Jerod Santo:** Right. YAGNI just rears its ugly head. So I've had this - have you had this before Bert? ...where it's like, I want to create a simple solution, I go ahead and do that, I put it out in the world, and it's too simple, because the world's actually more complicated than my software will handle. And then, as it kind of grows in order to handle these different edge or corner cases that I didn't consider when I was building simply, it ends up all hairy at the end, because it's like "Well, it has to deal with 17 different things that might happen." And it's like "Well, was there ever a simple thing that would have solved this?" Because the real world is complicated sometimes. And then I throw up my hands and think "I don't know... How am I actually going to do this...?"

**Bert Hubert:** Yeah. So there's one sort of telling story... So I also wrote PowerDNS, which is a name server... And we started PowerDNS in 1999. And DNS evolved over time, and it added cryptography to it DNSSEC. And initially, PowerDNS started out really simple, and then the world turned out to be complicated, and we added more and more complexity to support this cryptography in there. And it was very difficult, because DNS itself, for example, is highly case-insensitive. Case really doesn't matter, until you start doing hashing and encryption, because that's sort of -- yeah, it cares about case. And usually, you sort of end up then -- as you described, you end up with a situation that is just a mess.

And it's very tricky as an organization to allow yourself to say "No, we're going to clean up the mess." So we're not going to do this big, hairy -- we're not going to do version two syndrome, where we say "No, we're going to make the best version ever, that will be so generic that it deals with everything", because it doesn't work. But what does work is actually sitting still and saying "Look, we're going from version two of the software to version three, and we're going to give ourselves a whole year to just do spring cleaning, house cleaning. And we're going to make -- the things that were too complicated, we're going to make them simple again..."

Back when we used -- for example, in PowerDNS we used simple strings to deal with domain names. It turns out domain names only look like strings. They actually have more complicated semantics than that. So within PowerDNS, the big thing we did, we said "Look, we're going to rip out all the strings, and we're going to move to a dedicated DNS name class, that's going to deal with all these weird DNS things." And the only way this could happen is by allowing ourselves a year to do a cleanup. I can very much recommend doing that.

**Jerod Santo:** Did this turn into a business? Was this making money at the time?

**Bert Hubert:** Yes, it turned into a good business... Actually, PowerDNS is a rare example of a fully open source piece of software that actually turned into a commercial success, while still remaining mostly open source.

**Jerod Santo:** So were there pressures on the money side to like not do that?

**Bert Hubert:** Yeah, there were... Yeah.

**Adam Stacoviak:** \[43:59\] Of course...

**Bert Hubert:** But you have to sort of have a little holistic view on that, because it turns out that we could have focused on where we were making all the money. But it turns out that the reason we got paying customers was that the technical community liked what we were doing. They would recommend us everywhere. So if we had focused on purely the financial bits, we would probably have had great business for a few more years, but eventually we would not have been able to do proper DNSSEC. No one in business cares about DNSSEC. They really do not care about that. However, the nerds, the technical people that work there, they really do care about that. And we also cared about that.

So it was, in the end, a solid business decision for us, to say "We're going to give ourselves a year to clean this stuff up." And I dare say that if we had not done that, the company would have gone bust later on, because it would have collapsed under its own complexity. But I do not find a lot of other examples, where people gave themselves like a year, put the old software in maintenance mode, and were going to just do cleanup for a solid year, and then come back better. That is actually a very rare thing.

**Adam Stacoviak:** That's rare.

**Jerod Santo:** The only one I could think of is Snow Leopard, which was Apple's version of macOS that was touted as having no new features, even though there were a few features in there... But it was an entire release cycle, all focused on stability, refactoring, performance.

**Bert Hubert:** Yeah, wow. Great.

**Jerod Santo:** And it is, to this day, many people's favorite version of macOS, going back -- everyone's like "Yeah, Snow Leopard was awesome."

**Bert Hubert:** Yeah. Well, I think as a concept it's doing a spring cleaning. We do it for other things. I mean, in equipment you do this kind of maintenance, where you replace the load-bearing parts, and take it out of service for a bit. So yeah... But it's not very popular. I mean, mostly you see people just having version two, second system syndrome, where they say "Look, now the next version is going to be perfect. I'm going to redo everything from scratch." And then they forgot what made the old version great. That's also a thing. But just doing incremental cleanup... Yeah, I very much recommend it.

**Jerod Santo:** It reminds me of something mechanics say, that I learned recently. They say "If you don't schedule your maintenance, then your car will schedule it for you."

**Bert Hubert:** Yeah, exactly. That's actually also part of the blog post I wrote on software maintenance.

**Jerod Santo:** Oh, is that where I read it? Okay.

**Adam Stacoviak:** \[laughs\]

**Bert Hubert:** That's probably where you read it.

**Jerod Santo:** I love it.

**Bert Hubert:** The thing, I put it in there -- I got it from an Australian guy, and he said "If you have dependencies in your software, schedule some time, maybe every quarter, just to take a look at all your dependencies. How are they doing? Are they still being maintained? Are the security releases coming out? Has the new VC started the monetization cycle yet?" And the idea there was that if you do this on your time schedule, you'll find out ahead of time that things are not going well. And the other way is that you figure it out because the stuff doesn't compile anymore.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right.

**Adam Stacoviak:** When I was in the military we had this really awesome term that I still live by. It is PMCS. It stands for Preventative Maintenance Checks and Services. And legitimately, every time I got into a vehicle, I could not just get into it and just drive. I had to do this series of checklists every single time... Because if you don't, eventually you get bitten by this non-Preventative Maintenance Checks and Services. I had this thing called a Humvee. It was a very big vehicle. Yeah, I was in the \[unintelligible 00:47:34.16\] around a lot of diesel fuel in the military called a JP8. But it was diesel, basically. It was 2,500 gallons of very expensive fuel that I had to transport safely, securely... And if my vehicle wasn't capable of getting to and from, or there was something wrong with the tank, or just anything, catastrophe could have been right around the corner.

\[47:59\] So we had this PMCS mindset just ingrained in us, from emptying out connexes to just confirm what was in there last week is still in there. Even though everyone knew it never got opened and it never got used, we had to pull it all out, confirm it's there, and put it back. It's just like, the boring stuff - you have to do that mundane checks, boring stuff to make sure that what's on the rails stays on the rails.

**Bert Hubert:** But interestingly -- it's a very interesting, good concept. I sometimes get that reaction when I tell people about unit tests, and regression tests. They say, "Well, look, the software worked the last time I used it, so it's still going to be working." And I'm "Well, just write some unit tests and see what happens", which is basically the sort of same thing, where you just ask the computer to add two and two, and you check if it's still four. But still, so often unit tests will find that you broke stuff, even though you thought it impossible that something got broken. So I do enjoy that mindset where I say "Look, we're still going to test it every time, and do that", but you never know what happens behind your back. But there are people that are like "I'm not going to write unit tests, because my software worked the last time."

**Jerod Santo:** Right. That test suite becomes such an asset down the road. I was just updating our dependencies today, and just having test coverage where I could say "Okay, here's a dependency, run the tests, everything passed, updated to latest, run the test again, everything passed..." It just has a peace of mind that you're like "Okay, updating that dependency did not break everything."

**Bert Hubert:** No, and it's magical. PowerDNS was, of course, very old, and in 2001 we made the first regression tests and unit tests. And that was like an amazing feeling, that your tests discovered that you made a mistake and they told you before you shipped. I mean, it's still a good feeling. And I sometimes give trainings to scientists on programming, and when I show them the power of unit tests, they go "Wow, that's just awesome, that you get an email message that you made a mistake, instead of getting a complaint later on."

**Jerod Santo:** Yeah, it's like, if you don't run your unit tests, then your customers will for you, to reapply the statement.

**Bert Hubert:** That's the same kind of concept, yeah.

**Break**: \[50:15\]

**Jerod Santo:** Here's a question for you, Bert. How do you know how many dependencies is it too many dependencies? Is there a heuristic? Where do I know that I've just jumped the shark?

**Bert Hubert:** I struggle with this myself... Because I do a lot of reinventing the wheel often, because I know that I could spend the time learning about your dependency, and then I would still be disappointed, because two years from now the dependency would be different again. So I do often spend more time than is wise probably re-implementing some simple things.

I draw a very hard line at cryptography, for example. I mean, unless you are a famous cryptographer, you should not be doing cryptography. You should leave that to someone else. But even then, if you look at the state of many cryptographic libraries, OpenSSL has been a sort of disaster zone for years now. But I draw a very strong line there. You do not build your own cryptography.

But on the other hand, if someone asks me to be responsible for a piece of software - and it's an important piece of software; it's not a birthday calendar, it's something that people rely on. I need to know what is in there. I need to know what I'm shipping. And if I run a modern piece of software development, I end up with like 300 dependencies, which are also included dynamically.

At one point, I was in a situation where we said "We have to audit this software." They're like "Okay." And then it turned out that if you would build the software three weeks apart, and you didn't change anything, it still would have changed, because by that time the dependencies had moved around, and shifted their own dependencies. So I'm actually sort of hardcore in the sense that I don't think you can ship software with like 300 dynamic dependencies. And people are still doing it, of course... But I do wonder what they're doing. And people have said, "Look, you C++ people, or C people, you have one huge dependency, which is called your library. And you rely on your operating system for a lot, and that's also like millions of lines of code." But there you have a little bit of a safety blanket, that everyone relies on the C library.

And so there are a lot of eyes on it. And it also doesn't change that much. And we all rely on the operating system, and lots of people are looking at that.

So I'm sort of maybe on the low end of rebuilding my own wheels too often... But on the other hand, I still cannot understand shipping software where you say "Look, I honestly do not know what is in there, because it gets determined at build time what is in there." And maybe you could audit 300 dependencies if you would have enough... But it requires a lot of work to actually sort of even figure out who is writing all these dependencies, who owns them.

So yeah, I struggle with this, because when I tell people that I simply cannot believe that you run npm install get - I counted it, 5 million lines of code come out when you do that, for the most basic product. How can you ever know what is in those 5 million lines? But apparently -- I'm old, apparently, and it is now considered very normal. And I know for a fact that my car has npm in there. And I find that worrying.

**Adam Stacoviak:** \[56:11\] How do you know?

**Bert Hubert:** Because it tells you so. There is this screen that says the copyright and the licenses and stuff, and it says, "Look, React is in there, and npm is in there..." And I hope it's not in the driving parts of the car. I hope this is just the radio, or something like that.

**Adam Stacoviak:** The entertainment sections of it, yeah.

**Bert Hubert:** I hope that is the case. I hope that is the case.

**Jerod Santo:** Yeah, the tough thing about dependencies, even when you can audit, if you can and have audited and checked out the owners and the code, and the whole do your due diligence, is that what we're learning over the course of years and decades is even if you do that, if you're loading your dependencies from the network, you can't trust the network. And what you think you can trust today, you can't actually trust a year from now, because the network changes. And so even if you're doing some due diligence, you can still get bit. These so-called supply chain attacks are happening more and more often, where all of a sudden what you thought was your dependency is replaced with code that is not the same code. And that's incredibly troubling for me.

**Bert Hubert:** Yeah, it is. And I come from a world where people also have to develop on networks with no internet connection. And it's just basically impossible for many people to function there anymore, because you try to do something and - yeah, there's no internet. There is no network. And the people that are in national security software, or encryption software, or that kind of stuff, intelligence agencies, they are actually in trouble, because the art of developing without a fully functioning network connection is dying out, because there are lots of people that need a runtime connected to the internet to get anything going. And even then, your software might be relying on third-party services. CDNs somewhere. And if you're running this nuclear power plant where people say "Look, we're not going to connect you to the internet", it is becoming a vanishingly rare skill, of being able to build software that runs without a network connection.

**Adam Stacoviak:** One thing I appreciate about this part of your post on dependencies was just the ways that you enumerated over what might happen over time with dependencies. I'm going to read ,them if you don't mind. You said just basically scrutinize and limit your dependencies, because all of them might over time - and here's a list: drift away, leading to adjustments in your code, or worse, silent changes within behavior... Jerod, you kind of mentioned this. Shift to a new major version, with cemented changes, requires rewrites on your part... It might get abandoned, or simply disappear, or start to decay. It might get hijacked by a nation state. We've seen this happen in recent past by nation state actors. Think npm, PyPy etc. It might start to get monetized by the new VC owner, who's I guess acquired the open source or the dependency in some way, shape, or form... And it might develop conflicting dependency requirements of their own.

I think just enumerating those different things -- because you think, "Okay, obviously, the simple answer is just simple software. Limit your dependencies." But why? And that's the why of those, I think -- and it's not all the whys, but it's several versions of the why that might help you understand why you shouldn't.

**Bert Hubert:** Yeah. And these things all happen. So I've worked with an impossible Python project that just requires two different versions of the same dependency, and they cannot do it. And you also don't know how to recover from that. But on the other hand, it is of course sometimes great fun that someone just moves ahead so quickly, because they embed all of Chrome in their project. So yeah, boom.

\[01:00:02.05\] And I'm sort of this ascetic person that needs to be really -- yeah, I need to work really hard to display something that looks like a webpage, and someone else has no qualms at all about embedding an entire Electron copy. So it is always a bit of tension that says "Look, I'm telling you about these things that will be bad like five years from now", and these people are like "Hey, but I'm shipping today." So I do really feel that stuff. But especially we've -- lately we had InfluxDB, I think, which all of a sudden... Which is a time series database, and I think that they have now limited you to 500 metrics or so, because they want to make money. And of course, I respect that they want to make money, but if you built your whole project on InfluxDB - yeah, you have an issue right now, because your business model might not support their business model.

**Adam Stacoviak:** Is this a recent change that happened, or is it something that's --

**Bert Hubert:** Yeah, it is. I think it's \[unintelligible 01:00:58.10\] from the past two weeks, or something like that.

**Adam Stacoviak:** Is that right?

**Bert Hubert:** Which is why I tend to do almost everything with SQLite, because we know SQLite is going to be around forever. And we know the people that run it, and they're not going to do anything like that. They don't want to do anything like that... I mean, a hundred years from now people will be able to read SQLite files. It's that abundant right now. So I try to stick with these things, that way you can be sure that 25 years from now they will have this software around. So it's not gonna bite me.

**Adam Stacoviak:** It kind of leans into some of the things you mentioned too down the line, which is more of a decision tree of sorts, which is how to scrutinize these dependencies. What does \[unintelligible 01:01:48.25\] Who else uses it? Who writes it? What are their goals? I'm kind of wondering if there's something out there that -- a piece of software we can sort of throw a dependency at it and it spits back some versions of all these answers, you know?

**Bert Hubert:** Actually, that would be good. Of course, we have these sort of SBOMs right now, the software bill of materials, but that is only like -- yeah, it's this piece of software, and it's that version... But it would indeed be very interesting to say "Look, this software is actually funded by this foundation, or something like that", and it's well funded, and it'll be around forever... Or you find that "Yeah, this is actually one guy in Nebraska, the famous one guy in Nebraska..." That would be very good.

**Adam Stacoviak:** Yeah.

**Bert Hubert:** But I do want to share one other technique I use to figure out how my dependencies are doing, is I just use a dependency for a bit, in an isolated fashion... And I will always run into some kind of issue. There's always something. And then engage with the project. See what happens. So you go to the project and say "Hey, I just put --" Take SQLite, for example. SQLite had a new feature for database replication, and it's really cool. I really recommend it. It was very new. And I was wondering, can I build on this? Is this solid enough? And I tried it, and there was an issue, and I filed an issue with the SQLite project, and they fixed it in 25 minutes. And they immediately believed me that there was an issue, and they were on it, and it was just done. And when you do this with a dependency, you will often find out that no one responds to your worries because they're not paying attention.

So actually, trying something and then just opening a ticket and figuring out how do they respond? This is incredibly telling. But again, this requires work. This will require you a few hours, at least, per dependency to figure that out. And then people say "Look, I have a thousand dependencies. I won't have time to figure that out." And my response would then be "Then you should not be shipping a thousand dependencies."

**Jerod Santo:** If you select a dependency wisely, it can save you hundreds of hours of effort. So maybe one or two hours spent putting the work in is worthwhile, right?

**Bert Hubert:** \[01:04:09.08\] I think it is. And there are things that -- I mean, like I said with cryptography... I mean, the cryptographers out there, they have done a better job than you would ever do. Or otherwise you would be a cryptographer. But I think it's somewhat of a lost art... I mean, I tell people -- you probably remember the npm Leftpad thing, which was where you could left-align a string...

**Jerod Santo:** Certainly.

**Bert Hubert:** ...and someone removed that, or made it malicious, and then the whole tower of dependencies came falling down. And when I tell that these days to people, I say "Look, I worry about Leftpad." Then many people go like "What is Leftpad?" Although that should be part of our sort of engineering lore that says "Look, do not go around depending on single-line files that could be taken over by any random internet person someday."

**Jerod Santo:** Are these youngsters you're talking to?

**Bert Hubert:** Yeah, well, relatively speaking. Relatively.

**Jerod Santo:** Sure.

**Bert Hubert:** I mean, there are many people that are like 30, and I'm starting to find people at 30 to be a bit on the young side... But that's just me.

**Jerod Santo:** There you go. It's all relative.

**Bert Hubert:** It's all relative. But yeah, this is something -- I mean, this is just the way modern software gets developed. And of course, we have the die-hards that do embedded software, or really the safety of life stuff... But we are in a small minority, and the minority is getting smaller.

**Jerod Santo:** There's also new tech coming out all the time... And you've been around long enough, 30 plus years in the business to know that not all that new tech is going to be additive, or useful, or last.

**Bert Hubert:** Yeah, so I did a talk on this for the Dutch networking community NLNOG, which is great... And the thing I tried to get across there was you have these new things coming along all the time. The new and shiny. And there are the people that are just always attracted to the new and shiny, and they have a glorious time discovering all kinds of new things, and fun... And there are, of course, people that are still, as I call it, rocking it with awk. Because you get stuck with "Yeah, this worked for me in 1997, and it will work for me in 2029 as well."

**Jerod Santo:** Right.

**Bert Hubert:** You have to strike this balance to say "I enjoy the new and shiny, but not too much." And you should also let go at some point of Perl, or awk, or whatever.

**Jerod Santo:** Specifically Perl...

**Bert Hubert:** Yeah, it's high time. It's high time.

**Jerod Santo:** It's high time, yeah.

**Bert Hubert:** And for myself, I also sort of -- I'm a bit ambivalent about this, because on one hand I love the new things, and I think everyone should be... So I do a lot of JavaScript, for example, but I've also been doing C++ since like 30 years... And you could on the one hand say that C++ is starting to get old, and maybe you should move on to something new... But there I decide "No, look, I'm like really good with C++, and I'm getting this stuff done. And I know there are issues with it, but hey, it works for me." But on the other hand, I have no problems with doing all kinds of newfangled JavaScript things. And that was sort of the upshot of my talk, where I said "Look, enjoy the new shiny, and do study it, do look into it, but don't just shift whole frameworks every few years because they are just the bee's knees right now... But also do not get attached to your extremely old frameworks." And I think that that's actually -- that's why I wrote this post and did the presentation, I think this is one of the most biggest determinants of your technical career.

If you would take a look at the technical development over like 20 or 30 years, how you look at new things really determines if you're going to be in technology for the long haul, and continue to be relevant and effective, or if you have to bow out and become some kind of manager, because you're no longer with it. And managing that is, I think, a very important part of a programmer's career also.

**Jerod Santo:** \[01:08:17.11\] Yeah, we're certainly in a career where you can't just learn everything you need to know at university and be done. I mean, if you're not interested in change and adaptation and learning new technologies, this isn't really the space for you. You're not going to last.

**Bert Hubert:** No. But it turns out there are many employers that actually also do not believe in change...

**Jerod Santo:** Sure.

**Bert Hubert:** So you can end up in some kind of insurance place, or a government tax agency and work with 25-year-old technology.

**Jerod Santo:** Writing COBOL on a mainframe...

**Bert Hubert:** Yeah, they're still rocking it over there. So it's not necessarily -- you could come at a point in your life where you say, "Look, I don't need all these new things anymore, and I have only so many years left in my career, and I'm going to spend them in a basement, in some kind of insurance place." So it's not all bad, but it is something that I think you would have to just ponder for yourself, and say "Am I going to invest also?" Because there comes a point in your life - and I think we've touched on this in this presentation also, where I'm just saying "Hey, these 2000 dependencies, they're all bad." And there is a risk that at some point in your career you go "Look, things used to be better, and all this newfangled stuff is just wrong." And when you hit that point, you have to have a real good think, and think about "Am I leaving the industry behind? Am I just old now? I'm just sort of a sad person that sits there and say "Well, in my time..." And you should at least -- when that happens, it should be a conscious decision, where you say "Okay, I love this old stuff more, and I'm not going to pretend that my old stuff is better. I'm just going to admit that I'm really good with this old stuff, and I enjoy doing this old stuff. And I'm not going to tell you that Rust is wrong, or that Swift is wrong, or that whatever new thing is wrong. I'm just going to enjoy my old stuff." But it's really sad to see some people see new things happening, and they just get stuck in telling you how great their old stuff is.

**Jerod Santo:** So how many languages have you invested in, seriously?

**Bert Hubert:** Yeah, so this is a terrible story... So I'm terrible at Python. So I write a lot of Python, and mostly for making graphs in Matplotlib and Jupyter... But my Python is really terrible, and it has been terrible for the past 20 years, because I've never written anything. I only write scripts in Python, and I've never invested in really learning that stuff. So in Python I'm really the copy-paste engineer. And then JavaScript, I actually sort of made a weird decision. At one point, PowerDNS was really not going well, my first company... And then I decided I wanted to invest some time in this new web stuff. And every serious programmer hated JavaScript with a passion. And I was like "Well, that probably is the future."

**Jerod Santo:** That was a good call.

**Bert Hubert:** That was a good call. I probably just got lucky at that time. So JavaScript, I'm sort of reasonably proficient in. And in C++, that's a weird thing... That's my workhorse. And the thing is, I use like 20% of C++. Because over the years, I've learned there is a good core in C++, that's like a really solid language, and it's good stuff... And then there is a lot more stuff. And I'm sort of on a sort of diet version of C++, where I'm like "Look, I know the good parts now. I'm not leaving the good parts. I'm just staying there." So that's the other thing.

\[01:11:46.06\] And lately, I've had to admit that I'm sort of skilled at HTML now, which I never saw coming... Apparently, I got a little bit of that going. But that's really it. I got my start with Perl, which was also sort of -- I've found that people sort of didn't take Perl seriously, and I also did not take Perl seriously. And at one point I had to do a lot of data crunching; like millions and millions of lines... And I thought these Perl weenies - I can do this better in C. And then I found out that these Perl weenies, they do know a lot of stuff about parsing files. And so that was a humbling experience. But these days, I sort of have a trifecta going of C++ and JavaScript, and mostly SQLite in the backend, because I've invested a lot of time in understanding its quirks. And it's tough. And it's actually a really sort of a solid data handling framework, to the point that I now sort of trust SQLite files more than text files. Because it's quite easy to mess up a text file. One stray character return and then it's done.

**Jerod Santo:** Sure.

**Bert Hubert:** SQLite will not disappoint you on that front.

**Jerod Santo:** So how do you see promising technology coming?

**Bert Hubert:** I've actually been sort of not that happy with the tech. For example, programming languages. If you look at the development of programming languages, you see that in the past years, we've not gotten closer to the ideal programming language. So there is something wrong with every programming language right now. Some of them, they're like really safe, and some of them are really fast, and some of them are really simple, until you try to do complicated things. And I'm still hoping that someone, someday will square that circle and have the programming language that is sort of simple, and fast, and safe, and maybe fun... But we're not really getting there. And the other thing I, of course, worry about - we have all these frameworks for website development, and these are also not improving. They're just changing.

And one thing that I have a serious -- yeah, one thing I would love to build... If you look at any kind of software, it involves interactions. So you have to do things with the software, and you might have to sign up for a website, and then you get assets that are yours, and you can configure these assets... And that is a whole workflow kind of system. And I would love for us to move into developing workflows, instead of developing webpages. Because if you look at most interactive websites, they're still like "Well, we've built this page for you", and that page is full of conditions. It says, "Well, you have to fill in this, you have to fill in that, and then you can press Send, and then it happens." But I would love for us to move to a higher level description, where you say, "Look, this is a website where you can sign up for college", or whatever, and this is in a domain-specific programming language, where we say "Look, you can only move from this state to that state once you have filled out the following things." And if we ever developed that, we would get so much more robust sign-up flows. Because the system is just aware of what can happen, and what cannot happen...

And I would love one day for someone to develop this higher-level way of interaction developing... And I'm sure that it has been done in some places, but I would love to have this as infrastructure, so that no one has to write a transition handler anymore that decides if you filled in the right zip code, or whatever. I just want a library that already knows what the zip code is, as a primitive. But I don't see any of that happening. I see new iterations of ways of creating HTML pages. And every five years, you get a new sort of wave of these new frameworks, but I don't see any of the high-level stuff happening.

**Jerod Santo:** \[01:15:56.15\] I do see it happening at the super-high level, almost no code... If you look at like form builders, which we give to people, and they can put in their conditionals, and they can say "Give me a zip code widget, and put it on the screen..." But you know that that's like... Not ad hoc. What's it called? The one that's just like specific use for that one particular...

**Adam Stacoviak:** Bespoke.

**Bert Hubert:** Bespoke, yeah.

**Bert Hubert:** Yeah, bespoke. Just the one thing. So I also do presentations, and you can hire me as a speaker, and my speaker agency wrote a whole low-code solution system just to do the logistics of that. And it's sort of wonderful in a way, because I'm really impressed that they managed to build that mostly themselves... But on the other hand, every time I do something with the system, it takes like three seconds to go to the next page. And I'm wondering, "What is it doing in the background?" But it's sort of -- it is impressive, because it is built on this concept where you click this stuff together without having to be a real programmer. But the thing is, I would love to be a real programmer, and have the primitives that make me do this safely, and at a higher level.

**Adam Stacoviak:** Yeah, it's hard to resist the future, really. Like, you've said, you've got to pay attention to it, but not so much that you're like engulfed by it. You have to weigh it against what you know, where you've been, and where it may go... And hopefully, the wisdom you've gained gives you the ability to discern that future and how it applies to your present. Otherwise, you get left.

**Bert Hubert:** Yeah. So in this talk on dealing with change, I also mentioned AI. And then a part of the audience goes like "Yeah, AI! I want to do everything with AI." And part of the audience goes "No, it's unethical, it's bad, it's not as good, it's not reliable..." And of course, it's tricky to find the middle ground in there. The AI is just astoundingly good at transcribing spoken text. It is actually superhuman. So there's this Whisper system from OpenAI... It does 99 languages, and it even does languages where they didn't know that it could do it. And it is superhuman, because it's better than any human being on the planet. So there is actually really good AI.

And then, of course, there are things where we still have to worry, "Yeah, what good is a model that just hallucinates stuff?" and we could find that really bad. But it is extremely tricky for people right now to understand that "Look, we could do some wonderful things with AI." It really could be good, even though there are some stupendously bad things you could do with it. But I would love for AI to also come into our universe as serious programmers to say "Hey, we have this tool for you, and it can recognize --" If a user enters something, the AI could say "Well, this is probably not what they meant." Something like that, that looks over your shoulder. Or something that deals with -- you have a system that has to deal with user complaints, and you have an AI system that automatically does the triage and says "Look, this user has a real problem, and this looks like only a feature request." I would love to have those kinds of primitives. But there are people out there that are just so in love with AI that they're like "We're not going to need programmers anymore", and there are programmers that hate AI so much that they say "We're not ever going to touch it." And Adam, as you said, navigating that... We cannot hold back the future, but it's tricky to sort of navigate the stuff that is good, and that we should have more of, while staying away from the areas where we say "We're going to just replace the whole thing by an AI chatbot."

**Jerod Santo:** Get out of here, AI chatbots... We've had enough of you.

**Adam Stacoviak:** Yeah, well... I think that this decision tree that you've got listed - which is rudimentary; it's not fully featured in terms of every possible way you would decide against choosing a dependency in this post... I think that's a great example of where you'd throw AI at it, or automation, let's just say. The basis of automation, and AI where necessary to sort of investigate a dependency, and whether or not it checks against your balance.

**Bert Hubert:** Yeah.

**Adam Stacoviak:** \[01:20:02.10\] You know, does a tech look good? I mean, maybe that would be a great example of throwing AI at it. It can do an analysis of a codebase and say "Well, what does good look like?" And then the model obviously depicts some of that stuff. Who writes it? That's a pretty easy one to just automate through databasing, but... Yeah, there's a lot of AI you can do here with this decision tree to make choosing dependencies slightly faster and easier.

**Bert Hubert:** Yeah, I have to admit, I had not thought of that yet... But people did mention it. They said, "Look, I have 1,600 dependencies, and I'm going to make the AI look at them."

**Adam Stacoviak:** Yeah.

**Bert Hubert:** It's not necessarily the worst thing to do, because the AI might in fact very well just figure out that "Look, this is just wrong", or "This code is already in North Korea."

**Jerod Santo:** \[laughs\]

**Bert Hubert:** So yeah, it's actually -- as a layer, it is probably an interesting thing to do.

**Adam Stacoviak:** Well, I mean, if you've got that many dependencies, it's literally impossible to investigate your own dependency tree.

**Jerod Santo:** It's better than nothing. It's one of those "What have you got to lose, besides maybe a few cents?" Well, Bert, what else? Anything else you have on your mind that we haven't talked about yet?

**Bert Hubert:** No, no, I think we touched on the -- yeah, we've spoken a lot about dependencies, of course...

**Jerod Santo:** Of course.

**Bert Hubert:** And yeah, the thing I keep harping on about, about how do you select the new things that you, that you don't like? That's something that I would really recommend people to spend a bit more time on, because it's really strange... If you look at how we choose what technology to use, it's actually quite often a sort of random thing. It's like "Hey, I've found this stuff on Hacker News, and I liked it, and I tried it for a bit... I liked it as well." And then accidentally, we pick the future direction of our career, or over a software project. So I would really recommend people sort of make more of a conscious decision on these kinds of things. But we covered that already.

**Jerod Santo:** Yeah, yeah, yeah. I think that's a really good point. I think we do tend to overvalue social proof - you know, what everybody else is doing - and undervalue our own ability to dig in and make a decision based on what we find.

**Bert Hubert:** Yeah, one of the things I stressed in my talk also on selecting these technologies - you can use your coworkers or the people that work with you on the project, and just tell people "Look, I'm gonna present on this new thing. I've found this new magical database, and it does 300 million lookups per second. And these are my experiences, these are the graphs that I've made..." And then your own co-workers could be the filter, because they might not be impressed by your story, for example.

**Jerod Santo:** Right.

**Bert Hubert:** \[01:22:46.23\] Or you might find, because you actually have to get down with it, to actually make the graphs to present to your coworkers, that you find that the graphs are actually not that great. So in this way, you can both entertain the people around you with your findings, and also use them as a way to keep yourself honest. And if you don't have any coworkers around, you can write a blog, or a vlog, or go on a podcast or whatever... But whatever forces you to take a serious look at something and work on "How would I present that to someone else?"

**Adam Stacoviak:** If you do any of those things, I would recommend going to Changelog.com/community. That's a good place to hang. Share your findings there, share your thoughts there... There's a thriving Zulip there, waiting for you to thread, and be a part of... And it's free, too.

**Bert Hubert:** Yeah.

**Jerod Santo:** Bert, what's the best place for folks to connect with you on the internet?

**Bert Hubert:** Yeah, so that's an interesting one. So I've been pretty enjoying my time on Mastodon. I think it's really a geek heaven. So that works really well. But interestingly, people ask me that question quite a lot, and I've found, and I think it's a very weird, strange sort of regression... Many people are now running mailing lists again, and sending out updates, and newsletters, and stuff.

And I've found it to be a bit pompous, to write mail updates on what Bert has been doing... But apparently, there is demand for that. So I am probably gonna restart a small newsletter.

**Jerod Santo:** Nice.

**Bert Hubert:** That kind of stuff. I also used to tell people to just follow me on LinkedIn, but the problem there is that, on one hand, I'm sort of active in Dutch politics, things which are entirely not interesting to the rest of the world...

**Jerod Santo:** To a lot of people, sure.

**Bert Hubert:** Yeah. And the other way around, there are many people there that follow me for the Dutch politics stuff, and they are sort of confused, they are massively confused to suddenly see me talk about --

**Jerod Santo:** \[laughs\] "What's all this nerdy stuff?"

**Bert Hubert:** C++... And then they go "What is this?" So actually, for the newsletter thing I'm building now, it's actually gonna have like four newsletters. It's gonna be one for people that like Dutch news, that like news in English, that like stuff about politics, and that like stuff about technology. And you can pick your own quadrant in that, to see which updates you want to receive. But for now, if you go to my website - and I'm sure it will be in the show notes, or whatever; or you can just google search Bert Hubert. And then I have a website, which is RSS feeds, and stuff.

**Jerod Santo:** Nice. Gotta love RSS. Here's a name you can name your new newsletter... You can call it Bert's Pompous Update. \[unintelligible 01:25:30.16\]

**Bert Hubert:** Yeah. "Bert's self-important things that you actually all asked for." Yeah, just tongue-in-cheek that sucker. It always works. Cool. Love it. We appreciate you coming on the show. Nice meeting you. Adam, anything else you wanted to talk about or ask?

**Adam Stacoviak:** Keep that software simple.

**Bert Hubert:** Yeah, that's the goal. That's the goal.
