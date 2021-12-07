**Adam Stacoviak:** We're here today joined by Richard Hipp. Now, Jerod, this is a deep topic because SQLite or SQLite (different pronunciation) - we'll debate that during the show - is such a prolific, widely-used technology. This is something you pointed out, in terms of this technology to kind of interest you, so maybe we should open up with why, why did it interest you so much?

**Jerod Santo:** Why it interested me was basically for the ubiquity of it. You know, it's one of those technologies... I think, I've said before on the show - I think it was the cURL show - we were coming to software development around the year I guess 2001, 2002... Anything that predates my inception into software, I just kind of assumed it always existed. And so this is one of those programs that I just haven't thought about in the historical context, until I saw something like an article, I think the Guardian article which was actually written back in 2007 but still seemed pretty poignant until this day, and got to just reading about... You know, I knew what the technology was, but reading about the technology and how many - I mean it's just like in almost every device in the world.

**Adam Stacoviak:** Right.

**Jerod Santo:** And it's public domain, super interesting. So I said, "Oh, we gotta get this guy on the show", and Richard, thanks so much for joining us.

**Richard Hipp:** Thank you for having me guys.

**Adam Stacoviak:** So here's the way we kick off the show - diving a little deeper, especially Richard to someone like you, who's got a deep, rich history of software development; kind of figuring out where they came from, what made them get into technology in the first place. So take us back to as early as you want to that got your influence, that got your feet wet in technology. What were the first steps that got you into software development?

**Richard Hipp:** \[03:46\] When I was in the 9th grade, I saw all a Teletype connected with an acoustic coupler 110-baud modem to a mainframe computer. And I said, "I've got to learn to program that." And I went to the school library and I checked out every single book about computers in my high school library, all three of them, and I read them cover to cover that night. And I got an account on that little computer and started programming away in BASIC. Saved up my money... Shortly after that, the Apple I came out, and I was about to buy the Apple I and the Apple II came out. And I bought just the motherboard for an Apple II. Got it.

Had to build my own keyboard, my own power supply, soldered it altogether. The first board I got didn't work. I called up Apple, they put me through the technical support and Steve Wozniak answers the phone.

**Adam Stacoviak:** Whaat?

**Richard Hipp:** ..and said, "Oh, yeah. Send it back. We'll send you another board." They sent me another motherboard and that one worked. That's how I got started in computers, trying to write programs in 4K of RAM, and that 4K included the video memory. So that's how I got started.

I went to university, studied Electrical Engineering, didn't do anything with computers for a while. Coming out of university with a master's degree, I took job at Bell Labs, and the first thing they did was sit me down in front of a console, running Unix, and I learned Unix and C, and work there for a few years, quit, went back to graduate school, came out of graduate school in 1992.

Back then getting a tenure track position was really, really hard. There were hundreds of candidates for any open position, and I was not the best candidate. My application was near the bottom of the stack, and so I just started my own company, just developing bespoke software, solving hard problems for people.

That company has been in business now for 24 years. In the course of doing that one time we had a problem where we needed a database engine. We were using Informix. The customer said \[\\00:06:06.28\] Informix and, you know, that's a big hassle to set up and stuff for development purposes. We needed something simple. We used Postgres for a while, that worked well for development. But it was read-only, the database was read-only, and I thought why can't we just read this database directly off of the disk? And so I just said, "Well, I'll write my own database engine." So I wrote SQLite and I got to be real popular, and here we are.

**Jerod Santo:** That might be the purest love at first sight type of a story in terms of technology I've ever heard.

**Adam Stacoviak:** Absolutely.

**Jerod Santo:** It was just like I saw it and I thought, "I'm gonna go get every book from the library I possibly can and I'm gonna do this."

**Richard Hipp:** Yeah, that was a lot of fun, playing with computers in high school, but I stayed away from computers all through college.

**Adam Stacoviak:** It should also give anybody that's new, I guess, you should say - it's the easiest way to say it - some inspiration, because you cared so much that you created your own hardware to access the motherboard that you had bought from Apple. To me, that's determination. That's the purest, simple version of determination I've ever seen, because...

**Richard Hipp:** Well, there were no options back then.

**Jerod Santo:** Right.

**Adam Stacoviak:** By any means necessary, you had to. Right? You didn't …

**Richard Hipp:** Yes, that's all you had to do. And, you know, we didn't have computer monitors of any type. You had to video output, you had to modulate it to RF, into the RF range and hook it into the antenna wires on a TV set. And of course, with the limited resolution a TV set, the whole screen was 40-characters wide and 24 lines long.

**Adam Stacoviak:** That's a low resolution, folks.

**Richard Hipp:** We thought it was magic. It was the most amazing thing in the world.

**Adam Stacoviak:** \[08:03\] Well, take us back to that. Share with us if you can, Richard, a magic -- a story of a magic moment then. Since it's such magic to you, if you can remember back to those times when you were first enamored by this thing - what story can you share that sticks out most to you about something magical?

**Richard Hipp:** You know, it's hard to say... There's just something magical about making things work. I've always liked building things from scratch and making things work. That goes back in my family, my father's the same way. When he builds things... My father is sort of the original maker. You see the makers now, but modern makers, they always have computers built in. The things my father makes usually involve an internal combustion engine of some sort. But it's the same idea. I just do it with abstractions on a computer screen.

Writing programs is a really, really interesting thing, because we can build entire worlds out of just pure thought stuff. We don't have raw materials, it's just pure ether, and it materializes, and it becomes a whole other world.

**Jerod Santo:** That makes me think of a very specific domain where that other world comes into the real world, which I think nowadays is somewhat considered a solved problem, but I think probably you faced, at least when you were getting started, which is printing. Do you have any memories of the early days of printers? I mean, did you have to write your own drivers? How did printers originally…?

**Richard Hipp:** Yeah. We just... I didn't print things out. \[laughs\] It'd go up on the screen and you'd write it down.

**Adam Stacoviak:** That was faster.

**Richard Hipp:** Yeah, it really was.

**Jerod Santo:** Right.

**Richard Hipp:** Printing was not an option. I looked at ways of making my own printer. You know, they had daisy-wheel printers that would print things, but that was a lot of money and I didn't have any money back then. You're thinking 1977, the Apple II motherboard costs $600. That was just the motherboard, and that's $600 in 1977. Jimmy Carter was President of the United States. That would be like paying thousands of dollars today for just the motherboard, and it had 4K of memory on it.

Printers were ridiculously expensive. I did manage to get a hold of a used electric typewriter and I played around trying to figure a way to get that to be my printer, but it turned out that that electric typewriter was mostly mechanical, there was not much electrical interface to it. So that didn't work out well.

**Jerod Santo:** Yeah.

**Richard Hipp:** I would figure out a way to hook up an internal combustion engine to this electric typewriter exactly...

**Adam Stacoviak:** Yes. Yeah, exactly. You mentioned that you went away from computers in college and I read that you got a philosophy degree, or you got a Doctor of Philosophy from Duke... Can you talk about your college years and why did you move away from software and then why did you move back?

**Richard Hipp:** Well, so as an undergraduate at Georgia Tech, I did electrical engineering, and I stayed away from software because I think that was easy. I knew how to do that already, and I wanted to learn new stuff. So I did digital signal processing, which in the early 1980s was a really phenomenal thing. This was brand new stuff. Now everything is digital, but back then it was just the beginning of the digital age.

\[11:49\] I'd never taken him a computer programming class until I went to Duke in graduate school, and I studied in the Department of Computer Science there. It was computational linguistics, artificial intelligence, and my thesis was on a speech recognition system and a dialogue system. I figured really cool ways, I devised some really cool things for resolving elliptical utterances and anaphora. It was interesting work, but once I left - I did that for five years at Duke and left that and never looked back. I haven't done anything with it in two and a half decades.

**Jerod Santo:** Never to return, or maybe eventually?

**Richard Hipp:** Maybe eventually. I'm not in any hurry. You know, people get really enamored by AI and that sort of thing these days, but I lived in it for five years and I still think that a lot of the hype is just that, it's hype.

**Jerod Santo:** Even to this day? Even the …?

**Richard Hipp:** Even to this day.

**Jerod Santo:** I think the Alpha Go situation - I don't know if you have to speed on any of that, with the AI program beating the Go champion.

**Richard Hipp:** That was a significant event. And the IBM thing, the Watson thing - that was significant. These were significant, but still there's a long way to go. The material available to people these days compared to what I had is enormous. I mean, what I wouldn't have given when I was in graduate school to have this Internet full of text that I could study. Just getting a corpus of text to use for analysis was really, really hard in the '80s. Whereas now you can trivially download gigabytes of it, and that helps. It is moving the field forward. But if you read newspapers and magazines, you'll think that HAL 9000 is just around the corner, but I don't think so.

**Jerod Santo:** Yeah, I think from those seeing it from the inside. Even though, as you said, the major milestones and we are daily making advancements, but as people who work in software day in and day out, I think we definitely see a different angle at that the world of software advancement than other people …

**Adam Stacoviak:** We still have trouble getting graphical user interfaces, right? Let alone something, you know, that understands itself and is self-aware. I mean, forget it.

**Jerod Santo:** Oh yeah.

**Richard Hipp:** Self awareness is a huge, huge thing.

**Jerod Santo:** Yeah. So I read an interesting tidbit on your Wikipedia page which -- I don't even know if the fact itself most is interesting... I mostly want talk about it because it said there's a citation needed, and I thought, "Can a podcast be a citation?" If so, we can get one right here. You can confirm or deny this, and we can go on and edit Wikipedia when we're finished with this call.

It says, "He married Ginger G. Wyrick on April 16, 1994, changed the name of his company to Hipp, Wyrick & Company, Inc, and signed all stock over to his new bride."

**Richard Hipp:** I did. She's is the president of the company. It turns out I had to buy half of that stock back from her at one point.

**Jerod Santo:** Oh, really?

**Richard Hipp:** Yeah. We were working for a company and of course I was the prime on that company, and they insisted that I be a significant shareholder in the company. So we went out to eat, we declared a business meeting and I handed her a $50 bill and took 50 shares of stock.

**Jerod Santo:** She can hold the ransom from you.

**Richard Hipp:** Ginger is a musician, so we are yin and yang. She's very prolific, and all of her stuff comes through the same company.

**Jerod Santo:** \[15:58\] Very cool.

**Richard Hipp:** She's the president. I am Head of Research.

**Jerod Santo:** Was there a reason why? Is it personal?

**Richard Hipp:** No. It's just... \[laughs\]

**Adam Stacoviak:** Just why not?

**Richard Hipp:** Yeah, why not? It seemed like a fun thing to do, and I was excited about getting married.

**Jerod Santo:** Right.

**Adam Stacoviak:** That's one way to earn trust.

**Richard Hipp:** You know, I thought getting a PhD was hard... You know, convincing Ginger to marry me was the biggest thing I ever accomplished.

**Adam Stacoviak:** Wow.

**Richard Hipp:** Way harder than writing the most widely-used database engine in the world.

**Jerod Santo:** Well, it's quite an accomplishment then.

**Richard Hipp:** It is. My proudest accomplishment.

**Jerod Santo:** I had a similar move, but not quite as profound as yours. I incorporated my consultancy as well, and you do have to name, just for legal reasons, board of directors and all these things. And I made Rachel, my wife, the treasurer of the company. Just figured there was some poetic \[\\00:16:55.19\] to that. But I think president would have won me more brownie points, for sure.

**Adam Stacoviak:** It's true, yeah.

**Richard Hipp:** So that is true?

**Jerod Santo:** Alright. Well, we can go edit Wikipedia, Adam. We can add the citation and say "Refer to this time stamp of this episode."

**Adam Stacoviak:** Since we're on the note of Wikipedia, is there any sort of heading there - I haven't scanned it fully - that debates how you pronounce the technology?

**Richard Hipp:** How do I pronounce the name of the product? I say S-Q-L-ite, like a mineral.

**Adam Stacoviak:** Okay.

**Richard Hipp:** But I also hear a lot people say, "Sequel lite and SQL lite." You know, I don't care. Whatever comes off of your tongue easily is fine with me.

**Jerod Santo:** Whatever keeps it being used...

**Richard Hipp:** Right, just use it. That's the only thing, that's it.

**Adam Stacoviak:** But the official correct way is S-Q-L-ite?

**Richard Hipp:** Yes, like a mineral.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Hm, like a mineral. Were you playing on the word "light", or were you just playing on mineral...?

**Richard Hipp:** I was, I was.

**Jerod Santo:** It seems like it.

**Richard Hipp:** Many people pointed out to me that I'm not good at marketing. My marketing person would have picked a better name.

**Jerod Santo:** Yeah, it's funny, because in our pre-call, when Adam and I were just kind of talking about this call, I thought you had pretty decent marketing, didn't I, Adam? I said you do a pretty good job. I even like your little tagline, "Small. Fast. Reliable. Choose any three."That appeals to me as a nerd.

**Richard Hipp:** I didn't come up with that. That's something that …

**Jerod Santo:** Oh, you didn't... Okay.

**Richard Hipp:** No, somebody put that on the mailing list; who it is, is lost in the sands of time. If you're listening please, please call me and tell me, remind me what your name is. But somebody said, "Hey, why don't you put that on the website? I said, "That's great", and I put it there. So that one's not due to me.

**Adam Stacoviak:** Do you recall when you put that on there and has it been any sort of like real driving force, or has it been something that just entertains Jerod?

**Richard Hipp:** It's been there for over a decade. We haven't messed with it.

**Adam Stacoviak:** Okay.

**Richard Hipp:** Everybody likes it, it's a cute little line.

**Jerod Santo:** It is. Well, I think we want to talk about SQLite. I'm gonna try my best to pronounce it that way for you. I've called it "Sequel Lite" just because... Even SQL and sequel are, you know... You pick which one you want to say, I guess.

**Richard Hipp:** Seriously, call it what you're used to calling it.

**Jerod Santo:** Okay.

**Richard Hipp:** Seriously.

**Jerod Santo:** Okay, I'm just gonna call it natural.

**Richard Hipp:** Yes.

**Jerod Santo:** But we wanna talk about it, we wanna talk about its history. You mentioned kind of its inception a little bit, but we wanna draw down on that, and then we'll get into the technical features. We'll talk about the ubiquity, the community that you've built around it, the business that kind of is there that supports it, all sorts of things. We'll take a quick break and when we get back, we'll talk about all those things and more. We'll be right back.

**Break:** \[19:50\]

**Jerod Santo:** Alright, we are back with Richard Hipp and we are talking about SQLite - I can't say it my way anymore, I have to say yours …

**Adam Stacoviak:** He gave you permission...

**Jerod Santo:** I can't make myself do it naturally, even though you've told me to do so.

**Adam Stacoviak:** He's a rule follower.

**Jerod Santo:** Yes. So let's talk about its origin. You mentioned that it came out of a specific need in your consulting. We know that it was around the year 2000, that was about the time that it became a product. Maybe that was 1.0, I'm not sure, but give us the reason... Go deep on the reason of why you started a brand new thing, why it needed to exist. You mentioned that you had Postgres as an option, but this made more sense for a particular customer or the circumstance. Give us that genesis story.

**Richard Hipp:** So the customer... They were using Informix for the database engine. The problem that I was working on, it was a really interesting problem. We had to solve an NP-complete problem, which of course we couldn't solve, but we could do really good approximations and that's what it was about. It was a really, really cool product and I was a contractor, but I was sort of leading the design. Anyway, we put this thing out in the field for testing, and it was in an industrial site, and the people were operating the equipment. They would sometimes power cycle the machine that it was running on, and when it would come back up, Informix database sometimes would not come up, and this was a configuration problem, that's all it was. There was nothing wrong with Informix. They just hadn't installed it right.

When in the database it didn't come up, the users would double click on my application. I would try and connect to the database and wouldn't be able to, and I would pop up a dialog box that says, "I'm sorry, I can't connect to the database." And course, it wasn't my problem, but my application painted the dialogue box, so I got the support call. And I thought "This is not a good thing. I'm not in the database business." Being a database guy is never part of my career goal, and so what can I do about this? And I thought, "Well look, the way we're using this database - it's read-only, at least us, and it's very, very slowly changing otherwise. If the computer is healthy enough to bring up my application, why can't I read the data directly off of disk? Why do I have to go through a server to get to my data?" There was a funding interruption, I had couple months off and I thought, "Hey, I'm just gonna go and cobble together a really quick and simple database engine that just does a few very simple SQL commands, insert the lead, update and select." No joints, wasn't trying to be efficient... All I needed to do was pull stuff off of a disk in that memory.

And I put it out there and... I've been doing open source for years before this, putting things on my website, and people would find my thing -- or well, you know, I'd put things on my website and it'd get like five downloads per year, or something like that. I'd figured this would be just another one of those things, but for whatever reason it really resonated with people.

I remember seeing on Net News, somebody had this really exciting post on Net News about, "Wow! I have an SQL database engine running on my palm pilot. This is no joke."

Of course, whenever people get excited about your software, an ego boost kicks in any you're like, "I'm gonna work on this and make it a little bit better."

**Jerod Santo:** \[24:07\] Motivation...

**Richard Hipp:** Yeah, so that was motivation to kind of work when I had the opportunity. The first version, it used GDBM as the storage engine, which is the GNU Database Manager. It's a hashing-based database, which is \[\\00:24:23.17\]. And so SQLite version one was GPL. It was also hash-based, and I wanted to expand SQLite to be able to do range queries. For that you need an ordered storage engine that orders the keys, basically a B-tree.

I looked at Berkeley DB, which was the big thing at the time, and I spent a couple days studying the documentation and I realized that the documentation was sufficiently vague that I was gonna have to write test programs to find out enough detail to make this work. I thought, "It's gonna be easy for me just to write my own B-tree storage engine", so I did, and that was SQLite version two. That got to be really popular.

**Jerod Santo:** What year was it back then?

**Richard Hipp:** 2001.

**Jerod Santo:** Okay.

**Richard Hipp:** Yeah. The first release of version 2.0 came out just a couple days after the 9/11 event... But that got to be really popular, and before long I started getting phone calls, and I got a phone call from Motorola. I don't know if you remember, but back then Motorola was the world's leading manufacturer of cell phones. And they said, "Hey, we wanna put SQLite on all our cell phones, but we need you to make some enhancements for us. Can we bring you on contract to make these enhancements and to support it?" I said, "Sure, of course." I hung up the phone and felt "Wow! You mean you can make money off of open source software?" Who knew...?

And I had to figure out some kind of pricing structure. We put together a contract and it wasn't for a lot of money, but for me at the time I thought it was all the money in the world.

I hired some people and we made some changes, and that went great. Then AOL contacted me and said, "Hey, we want some enhancements." And AOL needed to be able to handle binary data. SQLite version 2 can only handle text data.

So AOL said, "Hey, we'll give you some money, fix it to handle binary data." So we did. Once again, I was able to hire some people... I got Dan Kennedy working for me at that point. He's from Australia, and he has been working for me ever since.

We started SQLite 3 - I think that was in 2004, about this time in 2004. Once SQLite 3 got out, it got loaded into everybody's products, and it just grew and grew.

I was still doing bespoke software for various companies back then, but within a few years I stopped that and we now just do full-time supporting and maintaining SQLite for companies around the world.

**Jerod Santo:** I like that, it's very kind of organic. You're kind of adding big customer to big customer, each one brings you on a contract to add some features, and so the overall product gets better.

**Richard Hipp:** Yeah.

**Jerod Santo:** You mentioned the first version was GPL, and it's public domain now. Let's put that on hold. I want to talk about it specifically soon, but I want to get to the ubiquity, because you said Motorola came in and they wanted to put in their phones - that's a lot of phones, and now you have AOL and then you start to add all these other ones.

\[27:52\] If we go to the website now, there's a page which was the one that I just sent to Adam, and I was like, "We gotta talk about this." Because I knew that it was in like every Linux basically, but I didn't realize it's on every android device, every iPhone, iOS device, Mac, every Windows 10 machine, so that pretty much covers all computers there.

**Richard Hipp:** Yes.

**Jerod Santo:** You know, we're using Skype to talk, it's inside of Skype.

**Richard Hipp:** It's in Skype, that's right.

**Jerod Santo:** It's in iTunes, it's in DropBox, it's in TurboTax. ..It's embedded into languages, PHP and Python have it. Even television sets and set-top cable boxes...

**Richard Hipp:** Most of the uses, I don't even know about. People write me and say, "Hey, I was messing with this or that and the other and I found this SQLite database file. Did you know they're using your software?" No. \[laughter\] I'm glad they are. I'm glad they' find it useful.

**Jerod Santo:** Yeah.

**Richard Hipp:** It's used in most everything. I think... It's impossible to tell, but I think that SQLite is probably... There are more instances of SQLite in use every day than all other database engines combined. Clearly, the other database engines make a lot more money for their creators, but I get the usage award.

And I also think that SQLite is probably the second most widely used software component in the world behind zlib.

**Jerod Santo:** Which is the …?

**Richard Hipp:** The compression library.

**Jerod Santo:** Compression, yeah. gzip and what not.

**Richard Hipp:** I haven't been able to identify anything else that I think might be used more than SQLite.

**Jerod Santo:** That's gotta feel pretty good.

**Richard Hipp:** Yeah, it's a little bit scary, a little bit intimidating.

**Jerod Santo:** It's gotta make your decisions weigh on you more when you're like, "Well, it's gonna affect everybody."

**Richard Hipp:** It does, it changes your whole perspective. The way I look at software today versus the way I looked at it 15 years ago is very different because of that.

**Jerod Santo:** So let's talk about why. I mean, I think I have a good guess at why it's so widely distributed, but as you said, there were many other database engines out there, many that are very good, even Postgres, which you say you use as kind of a reference implementation of at least the SQL stuff.

**Richard Hipp:** Yes.

**Jerod Santo:** But why is SQLite so ubiquitous? What do you attribute it to, personally?

**Richard Hipp:** I would believe your opinion more than mine. I don't know. I put it out there and people really liked it. I'm flattered that they like it. The team and I worked really hard to make it a solid product that stays true to what it is; the goal is that it just works. It should be in the background, it's not something that you have to think about. It's there when you need it, and it's gonna work. It's like a utility. You don't think about, you know, the people at the water works, so when you turn the spigot, fresh water comes out. That's an amazing thing, and we want SQLite to be just like that. It's just there and you take it for granted.

**Adam Stacoviak:** That's how I think... I would think that like just like that; my first experience with it was Ruby on Rails, and as soon as you get Rails going it's using that, and there's no need for something extra. You could add it if you wanted extra, if you need different things, but it came with it. And just the fact that it was so simple, a single file that you can copy and move it around as you wanted to. It seems to me like the access and barrier is so low to use it, it's so simple, and everything else has so many hoops to go through.

**Richard Hipp:** \[31:50\] Yeah. We try and keep it simple. Now one of our earliest patrons was Symbian. The company made the operating system that -- and they were \[\\00:32:04.19\] and that was operating system on all the phones sold all over the world, except for the United States. They never really penetrated the US market. But this was in I think 2005, Symbian needed a database for their operating system, and apparently they had a big bake-off where they got 10 different embedded database engines - they told me about this later - SQLite was one of them and they competed them: seven commercial, three open. The other nine, they actually brought in engineers from that company to help tune it for their tests, where they ran tests on it and then they said that SQLite won the bake-off. And they called me up and said, "Hey, can you come over for a meeting?" "Sure." So I flew over and it was -- we had a meeting on Thanksgiving Day. They don't do Thanksgiving in London, apparently.

**Adam Stacoviak:** But then they had the Mayflower. \[laughter\] That's a good reason. They were the Mayflower.

**Richard Hipp:** There you go. So apparently there was a bake off and we did well in the competition. I don't know what the criteria was, but apparently we were very competitive against the other databases. And more recently - and I won't name this other company - I've heard the same thing about another company. I won't name them because they're still current and actively using it, I just don't want to embarrass them... But they also had a bake-off and chose SQLite. So apparently we win the competitions, and I don't know why or how, because there's a lot of really good products out there and I don't know why we happen to win, if it's luck or providence, I don't know. But we do try to keep it small and simple - we solve a problem and that seems to resonate with a lot of people.

**Jerod Santo:** How about the embedded aspect? It's not client-server, which I think plays to its simplicity, as Adam said. There's less to setup, less to get started, there's less moving pieces to break. I think you said that Informix situation where there was a configuration problem, but it was trying to connect to some server, or something.

**Richard Hipp:** Yeah. As far as I know, SQLite is the only SQL database engine that is not client-server. The other embedded SQL database engines, like MySQL embedded and so forth, they start a separate thread which is the server. So they don't have a server's process, but they do have a server thread, as far as I know. And, you know, why didn't I do a server thread or something like that? Well, you know, it was easier not to is one reason. Another reason is that, you know, I'm not a database person. I didn't know I was supposed to. Nobody told me. \[laughter\]

**Jerod Santo:** Oh, that's rich, right there. No one told you, you had to.

**Richard Hipp:** No one told me that that's what you're supposed to do, and so I just sat around and thought, "Well, how can I do this?" and the way I did it seemed to make sense to me, so that's what I did.

**Adam Stacoviak:** Somebody had said before that you stumble on the best things in the world through accidents. It speaks to your curious heart going back to your original story, which is how you got into this in the first place was complete curiosity. And maybe that's a good thing.

**Richard Hipp:** Yeah. I learned a lot about SQL just writing SQLite, which is kind of scary but true.

**Jerod Santo:** It's just humorous in light of how widely deployed it is in the entire world, and it's like, "Wow, you're not really a database guy."

**Richard Hipp:** \[36:02\] Especially when early on when I was writing it in and I had come across something and I went, "How is this supposed to work?" and I had to go ask people, "What's it's supposed to do when you do this?" \[laughter\]

**Adam Stacoviak:** So we've got just a few minutes before the break, but something just dawned on me, that given what you had just said, something that a lot of software developers deal with today is this notion of imposter syndrome, where they don't belong. And given the fact that you never thought you were supposed to be a database guy or whatever, the story is... But yet as Jerod mentioned and now that everyone else knows how ubiquitously SQLite is used, have you ever dealt with or had to get over serious impostor syndrome? Has it ever been something where you're like, I don't belong here in this database world?

**Richard Hipp:** Well no, not really. But that just goes back to my personality. I don't really belong in any little group. I don't fit in very well anywhere, I'm sort of a weird person. Eclectic, we'll say that.

**Adam Stacoviak:** Eclectic, that's a good way to say …

**Richard Hipp:** Droll, droll is a good adjective.

**Adam Stacoviak:** So no imposter syndrome ever around, you know, not supposed to be a database guy, but yet you have …

**Jerod Santo:** You have won all of the bake-offs, so that kind of destroys imposter syndrome when you keep winning all the competitions, I guess.

**Adam Stacoviak:** Well, I meant personally; less technology, more personal.

**Richard Hipp:** No, it's intimidating when I'm invited to talk to groups of database experts. It can be a little bit scary because these guys know -- they have been studying databases their whole life, that's their passion. And for me it just sort of happened. One day I was going along solving hard problems, and the next thing you knew I'm a database guy. What happened?

**Jerod Santo:** Well, it's a hard problem. Well, I think not knowing any better is a great way to renew yourself into success in many situations. And it seems like whether you meant to or you stumble upon a lot of good design decisions, which really does set it apart from other database engines... Like you said, you're the only one that is that way, it allows it to be distinct. And I think you said you're not much of a marketing guy, because the name is troublesome, but I think the name does indicate a lot about it, which is to say this is light and it is simpler and it's different than those other things.

The other thing that's really different and probably helps with adoption is the fact that you put it in the public domain, which is the ultimate form of open source. We're gonna tee that up, I wanna talk about in detail.

We do have another break to take, so we'll take that now. And then on the other side we'll talk to you about why you made it public domain, what the implications were that is public a domain, and then how you still sold some licenses against it anyway, which I think is hilarious. So let's take that break and we'll be right back.

**Break:** \[39:04\]

**Jerod Santo:** Alright, we are back and we are definitely going to talk about licensing and the public domain side of this. But before we get to that, I think we could actually cover some more of its technical merits. We talked about how some of the stuff was providential, or you stumbled upon perhaps some of SQLite's advantages over other database engines in certain contexts, but we shouldn't short come all of its technical merits. \[40:00\] I think what our listeners could probably use help with is knowing the clean lines when it comes to comparing and contrasting from a MySQL or from a Postgres or from anything that you choose, Richard. Could you just kind of enumerate for us a few things that make SQLite different?

**Richard Hipp:** Well, from the perspective of somebody who's just using a database engine, one thing that's very different is the type system that we use. SQLite really started life as a Tcl extension, Tcl being the programming language, the Tcl/Tk. The project I was working was working on was written in Tcl/Tk and so SQLite began as a Tcl extension and as a scripting language, like Perl or Python, where you can put any type of value you want in a variable. So a variable might hold a string, a number, a byte array or whatever. So I made SQLite the same way, where just because you've declared a column of a table to be text doesn't mean you can't put integer in there, or just because you declared a column in the table to be a short int, why not put a 2-megabyte blob there? So what? It'll do that.

This takes a lot of people by surprise. The way SQLite works - it's completely compatible with other databases. Where it causes problems is that people do their initial development work for say on Ruby on Rails app and they're doing it with SQLite, and they take advantage of this flexibility in typing that SQLite provides without realizing it. And then they get ready to go to production and they switch over to Postgres or my MySQL, and those systems don't do that and then suddenly their application breaks.

For example, they might've declared a varchar 40, and they didn't realize they were putting strings in there that were longer than 40 characters.

People have criticized SQLite about this. They say it's weakly typed and the other systems are strongly typed. I think those are \[\\00:42:21.17\] terms. I prefer to say that SQLite is flexibly typed and that those other systems are rigidly typed or judgmentally typed. But it's a criticism.

**Jerod Santo:** That seems like a point of contention, because …

**Richard Hipp:** It's a point of contention.

**Jerod Santo:** I mean I can see both sides, because if I want this to be a varchar 40 and you let me put anything in there, then why did I declare it to be a varchar 40 in the first place? You know what I'm saying?

**Richard Hipp:** Yeah, exactly. If you say it's a varchar 40 and you an integer there, it will change it into text. Or if you have a comment that's declared integer and you try to put text in it, it looks like an integer and it can be converted without loss. It will convert and store it as an integer. But if you try and put a blob into a short int or something, there's no way to convert that, so it just stores the original and it gives flexibility there. And this is useful in a lot of cases, because sometimes you just have a miscellaneous column in a table that you might need to store lots of different things in. And in traditional database systems you actually have to have multiple columns, one for each possible data type, whereas in SQLite you put it all in one column. So it works well.

And for that matter, with SQLite you don't have to give the column a type at all. You can just say, CreateTable T1 (a,b,c) and then you've got a table with three columns named a, b and c and you put whatever you want there.

**Jerod Santo:** \[44:03\] That's just for flexibility purposes, I see.

**Richard Hipp:** Well, it flows directly out of the scripting language traditions. You don't declare types for variables in Tcl; you didn't used to do it in Python, I guess you can do it some, now. You don't do it in JavaScript... You just say it's a var.

**Jerod Santo:** Yeah. I mean, I guess some of that leads to what I know as, you know, scripting roots from the web development perspective, which is where Adam and I are mostly coming from. And I think Ruby on Rail wasn't my first exposure to SQLite, but it definitely was one of my first like using it, you know, more than just on the surface. And there's this feeling or there's this general, I don't know what you call it, a consensus that like it's for development purposes but when you get to production it's foolish to use it in production, because it's -- I don't want to call it a toy because it's used in production more than any other thing out there, but I think that sense of it, where it will allow certain data in because your users will put in, which you didn't expect - I think that's probably where that feeling comes from, do you agree?

**Adam Stacoviak:** I had the same thoughts honestly, Jerod. I thought that because it's sort of a getting started thing with Ruby on Rails, and as I said that's my first exposure with it, I kind of... And no downplay, because that's why we have this show, that's why we have people like Richard on this show to come and debunk big myths likes this, because someone may not ever think that SQLite is worth anything, because it's just a beginner or just a starter thing it. But that was not exactly my thought; my thought was that it's just for getting started.

**Richard Hipp:** No, it's definitely for more than that. Now for a website where you've got a lot of right concurrency, you need to move to a client-server database engine because you need that server process there to coordinate the concurrency.

**Jerod Santo:** Yeah, the connection before laying this stuff.

**Richard Hipp:** There's just no way to do that in a serverless database like SQLite. So for so many things you don't have that concurrency.

**Jerod Santo:** Right.

**Richard Hipp:** You've just got a single actor or one or two actors accessing at a time; it's not a factor, and SQLite works great in those situations. It's where you get into big concurrency that it breaks down.

**Jerod Santo:** Yeah. I mean, just take the example of what we talked about earlier where it's inside of the Skype client. Well, I have my own and you have your own, and Adam has his own, and there's no reason to have --

**Adam Stacoviak:** Concurrency.

**Jerod Santo:** -- a server in that case. It's completely usable right there. So that plays to its strength. So again, it's the right tool for the job --

**Richard Hipp:** Exactly.

**Jerod Santo:** -- situation, and with websites.

**Richard Hipp:** One of our sayings is that, "We don't compete against Oracle, we compete against fopen."

**Jerod Santo:** I like that one too. You've got lots of good taglines. Here's another aspect of it that I think is a technical thing, which is probably pretty poignant considering recent events and the greater JavaScript community with dependencies: it doesn't have any. So listen to this quote from the website, "All of the deliverable code in SQLite has been written from scratch." It goes on to talk about how there's no third-party code, everything is in there, there's nothing that has a different license besides the public domain, which again we'll get into. Tell us about that decision.

**Richard Hipp:** \[47:41\] Well, this -- it does relate closely to the public domain thing. I'm just one of these people... I don't like dependencies. I really like to statically link things, because with dynamic linking you just never know what version of a library you're gonna link in a runtime, and if you're delivering many copies of this, there will be some users who will come up with a bad version of a DLL or a shared library. Then they'll call you for support and it's really hard to debug if you don't know what they're running. And then, yeah, with upstream libraries and that sort of thing you're -- there's a dependency there that just makes life a little bit harder. Sometimes it works better to build your own tools.

I know a lot of people say that you should never reinvent the wheel; the hacker credo is "Steal the code, don't rewrite it." I understand the point of view, but I've always been sort of the person that I'm more willing to write it myself. So rather than find a different SQL database engine that would work better than Informix, I just wrote my own. And the text editor that I used to write SQLite is one that I wrote myself.

**Adam Stacoviak:** Really?

**Jerod Santo:** Really?

**Richard Hipp:** It is.

**Adam Stacoviak:** Is it published anywhere?

**Richard Hipp:** No... I think I put it out there a couple of times. It's nothing... It does what I want. I cannot imagine anybody else…

**Jerod Santo:** You still use it to this day?

**Richard Hipp:** Yes. It does what I want, and I cannot imagine anybody else finding it useful for anything. But rather than use Bison or Yacc for the language parser in SQLite, I wrote my own parser generator called Lemon. When we needed to beef up the development processes for SQLite and put more rigor in them... It was originally using CVS, because in 2000 CVS was just cutting-edge, state-of-the-art stuff that was really cool. But we needed to move something better and I looked at Mercurial and Git, and they weren't gonna meet my needs, so rather than trying to work around this problems, I just wrote my own version control system.

**Jerod Santo:** Now, that's reinventing the wheel right there.

**Richard Hipp:** I just tend to do that a lot. I tend to write my own stuff more than other people would. That's either a failing or a virtue, depending on your point of view I guess.

**Jerod Santo:** When you mentioned your own version control - that's Fossil correct?

**Adam Stacoviak:** That's correct.

**Jerod Santo:** Yeah. So Fossil SCM is a tool which Richard has written and another one that we've had people request us actually to talk to you about. We don't have time for it, but we might have you back to talk about it.

**Richard Hipp:** Sure.

**Jerod Santo:** Interestingly, it does have a dependency which is SQLite.

**Richard Hipp:** That's right.

**Jerod Santo:** So I guess it depends on you're writing a library versus an application. Right?

**Richard Hipp:** All of the SQLite source code is managed by Fossil, and Fossil uses SQLite. And you can ponder that recursion at your leisure.

**Adam Stacoviak:** Right. Well, it shows you can depend on yourself too, that you're internally trusting, not externally trusting.

**Richard Hipp:** We eat our own dog food, absolutely.

**Adam Stacoviak:** There you go. Do you think that this mindset you have with writing your own stuff... Because now, as we talked about the barrier to entry, today I think people tend to lean on others because they're sort of bootstrapping themselves into developer world. They didn't go to school or they typically didn't go to school or they did go to school; it's like a boot camp, or something like that. And that's not the downplay that whatsoever, it just means that they don't have the breadth of experience that you do.

**Richard Hipp:** Well, yeah. They've got so much more to learn than I had to learn in 1977. There's just so much information out there. And I've been doing this for so long, and it seems natural to me, but I've been doing it for decades, and I've been constantly learning that entire time. So yeah, I don't know what -- if you're starting out, you've got to build on what other people are doing. I don't see any other way to do it.

**Jerod Santo:** How would you start? Say you want to become a software developer with zero knowledge today, and you are looking for a starting point. What would you try?

**Richard Hipp:** \[52:01\] Well, I would probably try the wrong thing. \[laughter\] But if I were to advise people... One thing that I see is everybody's flocking toward integrated development environments and I want to encourage new developers to get really familiar with the command line and shell prompt. If you're on Windows, that's fine. Certainly get familiar with Bash on Unix. I see so many people coming out of school, they're new programmers, and they cannot operate without pointing and clicking, and somehow that limits their level of understanding.

I make the analogy, if I go to a foreign country where I don't speak the language, I can go to the market and I can point at things and we can make hand gestures and I can buy food to eat and stuff, but I cannot start a business or carry on a deep conversation about the meaning of life and the relationship of God and man. For that, I have to speak their language. And it's the same with computers. If you're just pointing and clicking, that's great if you're a casual observer or if you're a user and you don't want to spend the time to learn this foreign language. But if you really wanna get deep, you've got to learn the language. Once you do learn the language, it's much easier to communicate that way, much easier. So I encourage people starting out, go low level and do things from the command line rather than depending on point and click GUIs.

**Jerod Santo:** Well, some good news that came out of Microsoft's Build conference today is that they have partnered with Canonical to bring Bash to Windows.

**Richard Hipp:** I saw that, I'm so psyched about that.

**Jerod Santo:** I think that's very cool.

**Richard Hipp:** I was thinking right after this podcast I'm going to figure out how to get that on my Windows machine.

**Adam Stacoviak:** I'd seen something, Jerod, in our tweet stream, but I hadn't got that news yet. We tend to stay timeless with our shows versus timely, but why did they do this?

**Jerod Santo:** I can't speak to their motivations.

**Adam Stacoviak:** Well, was there any mention of why?

**Jerod Santo:** You know, that's the new Microsoft - they're embracing open source, they're embracing Linux, they want to be more developer-friendly and so they're having kind of a first-party user mode Linux executables in Windows 10; I haven't read beyond that. So all I saw was a Verge article, but everybody is pretty excited just about... They have the purpose to bring the Bash command line to Windows and not in some sort of virtual machine. First-party user mode.

**Adam Stacoviak:** Well, that's funny too because I'm looking at our tweet stream, because I haven't opened up Tweet box on this show with you, recording this. There's one that says as a response to our tweet "April fool's." I know that April fool's is just around the corner, but not that kind of corner.

**Richard Hipp:** No, I think this is real.

**Jerod Santo:** This is real. We gotta be careful on April Fool's day not to be, because I know we tweeted that out. We're gonna make sure that our stories are legit. I'm pretty sure this one's real.

**Adam Stacoviak:** We've been there, we've done that.

**Jerod Santo:** Okay, so we've covered the technical, some intricacies, and we'll probably go deeper into that, but we are inside a time limit. I definitely wanna get to your take on licensing. So you started off GPL, but that sounded like because you had a dependency that was perhaps GPL back in the day.

**Richard Hipp:** Correct.

**Jerod Santo:** And for a long time it's been public domain. And I think the piece in The Guardian which said basically, the subtitle was "Richard Hipp's database is used by some of the biggest names in IT, but he has not made a penny from it", And its whole emphasis was this aspect of you giving it away not just GPL or even LGPL, but like "This belongs to the public." So tell us your decision behind that, and then we'll probably take a break and then we'll talk more about it on the other side.

**Richard Hipp:** \[56:01\] Sure. Well, just to correct The Guardian article, it was correct when it came out but, I mean, we've got a business built around this now.

**Jerod Santo:** I assume.

**Richard Hipp:** Just to be clear.

**Jerod Santo:** Yeah, and they didn't mention consultancy in that. So that was 2007, but it was just... It peaked their interest, so...

**Richard Hipp:** Yes. So when I ditched the dependency on the GPL to GDBM library and wrote my own, it was all my code at that point, and I could put whatever license I wanted in it. And I thought I wanted a much more liberal license so people could just toss this into their application and not have to worry about it. And I looked at the BSD license and I looked at the MIT license and I thought, "You know, really, what's the point?" Why not just say, "Hey, it's public domain" and put it out there? And that what I did.

That was a little bit of a tough decision. That's kind of letting your baby go because you're casting it into the wind and hope that it does well.

Also at the time I did not realize, having lived my whole life in the United States, which is, you know, under British common law, where the public domain is something that's recognized. I did not realize that there were a lot of jurisdictions in the world where it's difficult or impossible for someone to place their works in the public domain. I didn't know. So that's a complication. And for that reason some companies started to say, "Hey, we need to buy a license anyway", so we made this product available. "We'll sell you a license for SQLite."

We do our best to talk them out of it and explain they don't need this, but for a lot of people it's cheaper to pay the fee and get the license than it is to convince their lawyers that they don't need one.

So that's one way that we have, you know, making a little bit of money to fund continuing development. It's more than just a license, though, it's also a warranty of title. The document we send them represents and warrants that all, every byte of source code is an original work that we control, it came from us. In other words, they are not bits and pieces that we just pulled off of the Internet, that might be contaminated with licenses that you don't know about. And if you are doing a large project with potential legal exposure, you wanna make sure that you really can use this without incurring possible are lawsuits down the road.

Maybe Google wishes that they had thought more about Java before they put it in the Android. They don't want... Ten years down the road, if their product's a big hit they don't want somebody coming back and say, "Oh, that SQLite actually had stolen some code from us and so now you have to pay a license to us."

**Jerod Santo:** Right.

**Richard Hipp:** So just to protect their portfolio and their product, a lot of companies are eager to pay us that money. So that works well, that's nice. It's a nice little supplement of income so I can hire some people, and we can work full time on SQLite and not have to do other things on the side just to keep food on the table.

**Jerod Santo:** That's excellent. I think we wanna to drill down on that a little bit more, because you have the license, you also have an encryption, you have some extensions that you sell. Interestingly, there's even a test harness which seems to be an annual thing. These seem to be like their products that exist because they've been specifically requested, right?

**Richard Hipp:** Yes.

**Jerod Santo:** ...they're not like your guy's ideas.

**Richard Hipp:** Yeah.

**Jerod Santo:** But let's hold that off, Richard, we do have to take our final break, and we'll hold that for the close of the conversation. So we'll be right back and we'll talk money and licensing next. We'll be right back.

**Break:** \[01:00:07.21\]

**Jerod Santo:** Alright, we are back. Richard, before the break we were talking about the public domain aspect of the project, the fact that you do sell licenses because often times it's cheaper to buy a license than to convince your lawyers that you don't need one. And also because public domain isn't recognized in some provinces, which I wasn't unaware of as well.

**Adam Stacoviak:** I was, too.

**Jerod Santo:** I'm sure that one took you by surprise. As I mentioned, these seem like they're on-demand type of things, they don't seem like fully-fleshed out product ideas. I would be questionable if you could make a living off of what you have here. You also have some support from sponsors. Can you talk to us about all different ways that you guys stay afloat?

**Richard Hipp:** Right. So back in 2007 when Symbian was starting to put SQLite in all their phones, they came to the same realization... At that time it was just me working on it pretty much. Dan was helping me on a part time basis. But they realized that if this is a critical part of their infrastructure, they needed to make sure my business was sustainable. So they said, "Look, Richard, you need to set up a consortium or a foundation to provide support for your developers so that you can work on it full time." They told me they wanted to increase the bus factor of SQLite. The bus factor being the number of people who have to be hit by a bus to cause all development to stop.

**Jerod Santo:** Right.

**Richard Hipp:** And they were concerned about that, because I was kind of the only person at the time. So we started working out this idea of the SQLite consortium, which would be companies that would sponsor us to keep the project going. And somehow Mitchell Baker at the Mozilla Foundation got wind of this and said, "Oh, Richard, let me show you how to do this." And so I got with her and she really -- she knows how to set this up, and we really did everything according to her specs and started the SQLite consortium.

So companies which are typically large companies that really depend on SQLite as part of their product, they just pay us an annual fee. We do support them, they can always pick up the phone and an engineer will be on their site as quickly as possible if that ever comes up. But really the purpose of it is that they want to make sure that the product is sustainable, it continues to be supported and doesn't become orphanware, because they depended on it.

We charge a substantial fee, but from their point of view it's half an engineer, so it's cheap for them. It gives us working capital and allows us to just go and operate and really constantly improve SQLite. And based on those funds, we've done dramatic improvements in reliability and performance, because we have the freedom to work on it constantly all the time. So the SQLite consortium is what's really allowed us to keep SQLite going and to keep the current and real and vibrant.

\[01:03:58.16\] We started working... The other products, you're right, are a one-time thing for the most part, the encryption extension. When people buy the encryption extension, we actually just give them a password so that they can log into our version control system, and it's forever. They can download the source code whenever they want, whenever they need it and constantly stay up to date. They don't have to ever have to renew. We sell support contracts for people, but that's not a big money maker. Our bread and butter is our patrons, our SQLite Consortium members.

**Adam Stacoviak:** It seems to be opposite of what I would expect, though. I mean, I guess as a foundation or as a consortium you would expect at some point that... I mean, a lot of open source businesses build themselves around some sort of support or pro version, and instead you've built it on the good will, and I guess that's what the membership is really about. It's about, as you said, a patron model versus a support-driven or support sales model or something like that.

**Richard Hipp:** It really is more of a patron model. People have built businesses around an annual support subscription or something like that. To make that work, I think you have to have a sales staff.

**Adam Stacoviak:** Yeah. Complexity.

**Richard Hipp:** Yeah, and plus I wouldn't know how to do that. One of the reasons people really like working with this is we are a 100% engineering shop. There's no sales talk. When you talk to somebody at our company, you're getting direct no-nonsense talk with an engineer; you're not talking to sales people. And that's different. And that's not to knock the sales aspect of things. I understand that, and you have to do that in a lot of occasions, and those people work really hard, but we're just doing it a little bit differently.

You mentioned, maybe it was during the break, you quoted something from the article about how people tell me I could have made a lot of money on this if I had any business sense. And I believe them, I probably could have. By hiring some sales people, I could probably make a lot of money, get rich. But you know what, we make enough. It's not a lot. I'm driving a 10-year-old Civic, but that's fine. That's all I need.

You know, everybody - I'm getting off-topic - has this threshold where they get enough money. When you have nothing, you wanna make money, everybody wants that. But at some point you get enough money, so "Okay, now I have enough money, now other things become more important. Family, free time, working in the community, charities... Whatever." And that threshold is different for different people. Some people, they don't reach that threshold until they get into the billions, other people reach it at a few tens of thousands. Me and the people that are on the team, our thresholds are kind of low, so we're okay.

**Jerod Santo:** I'm not sure if you mentioned it directly, but just out of curiosity, how big is your team, your company? What type of a group of people are being supported by it?

**Richard Hipp:** Right now we've got to three other engineers working on it. Dan Kennedy, he's Australian. He has been with me for a long time and he has written major portions of it. He's been instrumental in doing all of the full text search and the rtree and lots of other things like that. Joe Mistachkin's in the Seattle area and he handles all the Microsoft ends of things, which is an enormous, enormous job. Then we've got Mike Owens, who wrote one of the books about SQLite. Right now Mike is full-time employed with somebody else and so he's just handling our website and taking care of all of that, making sure all that work smoothly for us, but he's still on the team.

\[01:08:05.04\] We did have Shane Harrelson. He's the guy that invented the amalgamation. SQLite is delivered as a single great big source file, almost 200,000 lines of code, but that makes it really convenient to use because you've just got one source file that you drop into your application and compile it with the rest and then you've got a database engine. But we don't edit that one great big source file, we have hundreds of individual source files and they get pulled together in just the right order to build this amalgamation. And Shane is the one who invented that force. He took a job with another company, he's not with us anymore. We still hear from him from time to time, he's still a big user. So that's the whole team. It's a small team.

**Adam Stacoviak:** It's interesting to hear who's involved based on the fact that this is what keeps you, as you said before, employed and so SQLite having this patron model, it's interesting to hear who's involved. Because becoming a member, supporting this consortium is supporting those folks...

**Richard Hipp:** Yes.

**Jerod Santo:** ...still there or not in some sort of way to kind of keep this thing do what it needs to do.

**Richard Hipp:** Exactly. It's been a really, really, really fun journey for us. Really, it has. We hope to keep this going for a long time.

**Adam Stacoviak:** Well, since you mentioned a long time... Do you have a plan? You said in the breaks you've got some sort of long-term plan, but you didn't go in the detail. What's the plan for SQLite? What can those who use it now expect 50 years from now?

**Richard Hipp:** Well, at some point surely some new technology is going to come along and SQLite will cease to be an important thing for new products. I don't know when that's going to happen - it could be next week, it could be in 20 years. I just don't know. For example, people are really excited now about the new persistent memory that doesn't lose power when you power down, and there are various types of that, and that could be very disruptive to the whole database industry. But because SQLite is so widely used, we expect it to be used in legacy for many, many years.

A few years ago when Airbus had contacted us - they use SQLite in the A350, Avionics - they asked, "We need you to support this for the life of our airframe, which is 40 years." So we said, "Oh sure, we'll support it through 2050." So we sort of set up the company with the idea that we're going to try and keep it going through the year 2050. The expectation is that at some point the usage will begin to die down and our role will become more of just maintain legacy, but we anticipate keeping it going for another - what is that, 34 years?

**Jerod Santo:** Why 2050? Just because it's a nice round number?

**Richard Hipp:** Well, that's 40 years from the date that Airbus contacted us.

**Jerod Santo:** Okay...

**Richard Hipp:** And they said the life of their airframe was 40 years, so that's where we came up with that number.

**Adam Stacoviak:** That's a big, big airplane. I don't know if anybody's ever seen that thing. In pictures it doesn't do it justice, but to see it face to face... It's ginormous. I wouldn't imagine being the pilot flying that thing, let alone being the database powering it. \[laughter\]

**Richard Hipp:** I don't know what we do inside the -- it's the A350, not the A380 by the way.

**Adam Stacoviak:** Okay, okay. That gives a little slack to you then, but that's still big.

**Richard Hipp:** Yeah, it's still big. I don't know what we do in there, I don't think it's in safety-critical applications. I think they use it to log maintenance activities, so that when the airplane lands, the ground crew can just get a print out of what needs to be fixed.

**Adam Stacoviak:** \[01:11:59.06\] Right. On that note, I mean is there any other really interesting places where this database is used? I mean, that's something I didn't expect to hear on this show. Is there anything else, any other places you've seen it used or know about its uses that's just like, "Wow! That's interesting." Or even ways it's used?

**Richard Hipp:** You know, if you had given me a little prep, I could probably have given you a list. I hear about this stuff all the time, but nothing else comes to mind. Airbus is a pretty cool thing.

**Adam Stacoviak:** That's an on the fly question because the Airbus example threw me for a loop. I didn't expect... I mean, I guess it would make sense, but it's such a well-known aircraft. That's a big deal.

**Richard Hipp:** Sure. Bloomberg, the news agency and the biggest provider of Wall Street data in the world, all of their stuff goes through SQLite, or at least our parser. They took the front end of SQLite, the SQL parser and code generator and execution engine, and chopped off the data storage engine and include their own enterprise scale, massively concurrent, a multi data center storage engine on the backside. All of Bloomberg goes through that, which I think is pretty amazing.

**Adam Stacoviak:** Since you've been in open source for a while, maybe you can help us kind of look back at the last couple of decades. What are some of the most interesting or biggest changes you've seen happen in the community, in open source, in the way software is delivered throughout the years? What are some of the most interesting things that you've seen happen that really got you excited about where we're heading?

**Richard Hipp:** Well, you know, back in the old days they didn't call it open source. I guess it was Bruce Perens who invented that term. How long ago was that? Was that in the late '90s? Back in the day we were just handing a software around and we didn't have a word for it. And so even just coming up with a word, open source, that was a huge step. I think it was Bruce Perens that came up with that, but we'd have to research it.

**Jerod Santo:** It says that he created the open source definition.

**Richard Hipp:** Yeah. So yeah, that was after... Linux started though Linux Kernel, so back in the '90s was when that happened. So that was big, and even think about when SQLite got started, we didn't have broadband like we have today. I remember one of our early patrons was AOL and they were still sending out CD-ROMs to your mailbox that you get online for what? $5 a month or something, with your dial-up modem. That's the way the world rolled when this whole thing started. We lose sight of how much the world has just changed in this past 10 years.

Now everybody has broadband, it's taken for granted. Now, everybody has a cell phone. When SQLite first came out there were cell phones, but we didn't have the smartphones that you have today.

**Adam Stacoviak:** Right. That's still a lot to think about that. I was just on a separate podcast being interviewed, and I was in retrospect talking about how the iPhone was the very first cell phone I've ever owned, because I grew up not very well off, I grew up poor. So to finally make enough money to own a cell phone, I actually worked for people to get a cell phone then rather than buy my own, so I just sort of leveraged that as long as I could. You know, I guess I was just sort hedging my best against it, but man, you know, it's crazy to think about when cell phones became prolific, that's an interesting fact there.

**Richard Hipp:** \[01:15:45.12\] Yeah, and the iPhone just revolutionized the world. Its design, the fact that you had the complete screen, it had the LCD covering the whole screen - that was a radical idea at the time I saw. I was able to see some of their early prototypes of android phones and they all looked like BlackBerrys with a little tiny screen at the top and a great big keyboard.

**Adam Stacoviak:** Yeah.

**Richard Hipp:** But when the iPhone came out, that all changed. So now everybody has a smartphone, it's ubiquitous, everybody has broadband, Wi-Fi's everywhere, and this has opened up a communications revolution. It's really easy to go online and download whatever code you want, it's really easy to search. We have Google, and people take Google for granted, but you just type things into your search engine and you can find whatever you want instantly. Twenty years ago you couldn't do that at all, and that has completely changed the world. But we do it so much every day that we now take it for granted.

**Adam Stacoviak:** I guess since we have you thinking about the future to a degree, because you're \[\\01:16:56.25\] and you've probably got a long list of things that you're really interested in, I'm curious... We have a couple closing questions we tend to ask on this show. Sometimes we omit them when we run out of time, but I figured that this one at least is a good fit for you. So the question is "What's on your open source radar?" but you can frame it however you like. It can be a technology radar. You know, given your expansive history, you may rather just write it yourself rather than use somebody else's, but for that odd day that you want to use someone else's stuff, what's on your radar that you would like to play with if you had a free weekend and you didn't have to do anything with SQLite?

**Richard Hipp:** I wrote the version-control system Fossil and I learned a lot about version control with that. I'd really like to try the follow-on system that improves upon it and is kind of a Git killer. And I've sketched out a design, but have had no time to work on it. I've often said that email - it's everywhere, everybody depends on it, but setting up an email system is really hard, and the world needs a really simple-to-use email system that you just drop in place and it just works. That would be fun to work on.

**Adam Stacoviak:** I would definitely see something like that. You're the right kind of person to do that because one, you're not afraid to just jump into a place where you're not exactly the database guy as you've said before, so you're comfortable being in a touchy territory.

**Richard Hipp:** Yeah.

**Adam Stacoviak:** And it's true, because everyone leans on some sort of cloud service to do it. Everyone I know somehow leverages either Gmail or Gmail for Businesses, Google for Businesses or whatever, and that's the way to do it. There's a lot of people who are ruling their own solution using Ansible or something like that that. They're using somebody else's known ways of doing things to deliver something that's their own solution to the server.

**Richard Hipp:** Sure.

**Adam Stacoviak:** But I would agree with that, however I have zero technical ability to follow you there, but I will be a user. I will be a user for sure.

**Richard Hipp:** Well, I've been saying that for years. I haven't found those free cycles to do that yet.

**Adam Stacoviak:** So, Jerod, he also said something else that peaked my interest for the future show that we'll have with him on Fossil, he said "Git killer." Can you believe he said that?

**Jerod Santo:** Just kill it. \[laughter\]

**Adam Stacoviak:** Do you mean it, Richard?

**Richard Hipp:** Git has done a lot of good, but I mean look at it, Git is the version-control system that everybody loves to hate. I have an extensive collection of people ranting against how awful Git is. And truth, they're mostly right and yet we continued to use it. That amazes me. I don't understand why that is. There are better alternatives that exist today and it's not hard to design things that are way better than anything that exists today. It's just a matter of sitting down and spending a month or two and writing the code.

**Adam Stacoviak:** \[01:20:05.18\] So answer this for me then... We're not gonna talk deeply about Fossil now because that's a future show, but to tee up some sort of teaser or interest, is Fossil in its current form a Git killer or can it be given, like you said, the month or two months of additional work to kind of get there and just sit down focusing on it? Is it ready to be that now?

**Richard Hipp:** No, in my opinion Fossil is better than Git, but the difference is not enough to overcome the additional learning curve of learning a new system that's slightly different. So it's just an incremental improvement, it's not a disruptive improvement. And I think to really overcome... Because Git has huge, huge traction now. Everybody uses it. We have GitHub. In order to overcome that incredible installed base, you've got to have something that is revolutionary.

**Adam Stacoviak:** Well, I mean even Mercurial has had this problem, right? I mean, Facebook gave it the best name brand to as a social proof mechanism to get people to switch, and yet no one's switching in droves.

**Richard Hipp:** It's a hard problem, and I've got a list of features I think that would go a long way toward getting to the Git killer, but it's just a matter of sitting down and implementing them, and that takes time, and something like a version-control system really has to be right, because if it messes up and you lose source code people get really upset.

**Adam Stacoviak:** Yes, yes definitely. Well, that's definitely a teaser for a future show on Fossil, but I guess before we close is there anything else you want to mention before we tail out?

**Richard Hipp:** No, I think we've covered a lot of stuff. You know, we could talk for days on SQLite about technical aspects, but in a one-hour show I think we've covered a lot of ground.

**Adam Stacoviak:** Well, it's certainly interesting to hear your entrance into software development technology. I hope the listeners can appreciate how pivotal that kind story is to have on this show. It's so interesting too to have someone like yourself with such deep and rich history, and also unafraid to just not use what's there and write your own. That to me is pretty interesting, so to live up to that and be inspired by that and share that back with all the listeners who love this show, that's so awesome. I thank you and Jerod thanks you of course too for your time to come on this show and share that.

Then also what you do with giving back in public domain and all the things we covered on the show, that's phenomenal. So we'll leave it there.

**Richard Hipp:** Thank you for having me. You all have been great, I really appreciate it.

**Adam Stacoviak:** Well, fantastic. Listeners, you know we love you. Thank you so much for listening to this; members who support us, you're phenomenal; our sponsors, we love you. Fellas, that's it for this show, so let's say goodbye.

**Jerod Santo:** Bye.

**Richard Hipp:** Alright, goodbye guys.
