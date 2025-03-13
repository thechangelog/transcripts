**Jerod Santo:** Today we are catching up with Salvatore Sanfilippo. You may know him as Antirez. You may also know him as the creator of Redis. I say catching up because you have not been on the show since 2011.

**Adam Stacoviak:** Gosh...

**Jerod Santo:** That's a long time. Welcome back.

**Salvatore Sanfilippo:** Thank you. Thanks for inviting me.

**Adam Stacoviak:** Let's say forever ago, Jerod. It's the beginning, almost.

**Jerod Santo:** Different times. Those were different times, for sure.

**Adam Stacoviak:** Different times, for sure. Not mainstream tech; underground tech, as you said.

**Salvatore Sanfilippo:** We were younger, for sure.

**Jerod Santo:** We were all much younger. Yeah, like 13 years younger.

**Adam Stacoviak:** We were younger...

**Salvatore Sanfilippo:** Yeah, it was a different environment. There was still the spirit -- even maybe IRC news groups were starting to fade... There was still this spirit of community, what you made, it's cool, let's collaborate about that... It was a lot of underground thing.

I believe that, on the average, programmers are very nice to each other, are very good at communicating with each other. And in general, I believe it was a very nice environment. And in some way, I miss that, but maybe it's just that I am old.

**Jerod Santo:** Rose-colored glasses, we all put them on from time to time, and look back at the old days. Well, we're still talking Redis, though. I mean, 15 years later, and we're still talking Redis. Had it been a few years back with you on the show, we probably would not have been talking about Redis so much. That's part of the story. But can you go back to the beginning for us, and why you built Redis in the first place? First of all, thank you so much for building that piece of software. It's been so influential. I've used it for many years... Dozens, hundreds, thousands, hundreds of thousands of people have also deployed it and it helped improve their lives... So thank you for creating it. But can you go back to the beginning and tell us why, and how, and when, and where?

**Salvatore Sanfilippo:** Actually, thank you for using it, because if you think at Redis, even if it compiles certain ideas in new ways, they are all old ideas. So I believe that software is mainly a platform for people to communicate concepts. And without a community -- Redis was so resilient; it lasted so much time because the community created a mental framework about fixing problems with such tools that are inside Redis. So basically, the community is Redis, in some way.

And the way it started was because -- my first days as a programmer were all about security. I worked in security for a couple of years. Then what happened in security is what is happening right now to software. It started to be cool, it started to be business, a lot of business. And security was no longer research, it was a product. And I grown immediately tired of this industry, so I started to write embedded systems.

\[00:07:52.07\] And then I started to get a bigger project, because I was in a very bad situation in my life. I had struggles with my relationships, I had a son that was like three years ago, and I was - I could say depressed, but it's impossible for me to get depressed physiologically, because the kind of attitude I have in general. But I was low in my life, and I needed a project to focus my energies.

So the first weeks I just watched Star Trek Voyager nonstop, and South Park... And then I started to work to an interpreter for the Tcl programming language, for embedded systems. And much of this code was the foundation to make Redis one year later.

So basically, with this interpreter, which was not just a toy interpreter, it was compatible with all the Tcl programming language set, extended it in many ways... It added continuations and other stuff, and was in some way, in some things even faster, and so forth. Finally, it clicked something in my mind about how to design bigger systems. But then I forgot about this, and since I had no money, I remember that in this period in my life, I often looked under in my car to see if maybe one, two euros was around. And then I asked even for money to the girlfriend I had at the time. So I said, "Okay, that's not possible. I need to do something." And so a friend of mine \[unintelligible 00:09:47.11\] went and said "Do you want to collaborate? Let's do something together." And this was the start of Web 2.0 in the United States. But in Italy, there was still -- what was Alta Vista, basically, in the U.S. So these portals, static portals, no user generated content. So we said, "Probably if we just copy what they are doing, we will have an edge."

And we created two services. One was exactly like Delicious, and another one was an improved Digg, much more like Reddit now, basically. So there was complex moderation, there was a Tcl program that did the advanced filtering in order to avoid friends voting themselves. And this became popular in Italy, and so Telecom Italia, which is the biggest ISP here in Italy, a telephone company, called us. They didn't know in any way us. They called and said, "Why you don't join the Telecom Italia network with your services?" \[unintelligible 00:11:01.01\]

I remember when we went in Milan I was dressed so badly that they didn't want to let me at the hotel in. They're like "Are you sure that you have a reservation in this hotel?" I said, "Call this number." They said "Okay, you can enter." Because we were underground people. In Palermo we had Linux systems with cables in order to pay, and we had illegal greens to connect to the telephone to internet... We did this kind of thing, so this was our mood. They were business people, so there was a cultural gap, in some way.

And so we entered the network, and from one day to the other, we had to sustain the traffic of a lot of users, all the Italy connected. And our systems were not ready. So the first thing that I did was in PHP - the system was written in PHP - to write a memoization function that basically whatever you could call inside this function, the return value was stored, serialized into some kind of BTree that I created on the disk.

\[00:12:22.15\] And this way we had some kind of cache in order to avoid stressing MySQL too much. And this worked the first weeks, but then we created a new service that was a real-time log analyzer, and the use case was not static caching. You know, till this point I didn't know even that Memcached existed. So I could not use it, just because of the lack of knowledge of existence.

But even if I had Memcached, that was not enough for me, because I needed a cache with data structure where I could add items and remove all the items. So I took Tcl and wrote a prototype, and they tested it, and it worked so well. And they said, "Okay, that's good, but it's not a scripting language thing. I want an actual daemon in the ground, with a low memory footprint." And especially, I realized that I wanted a fork in order to persist on disk with the other child.

And since I in the past had background in security and low-level programming for cryptography, I studied the very in-depth the Stevens books, all the system call of Unix, the implementation of small Unix systems like Minix, provided a few patches to the TCP/IP stack of Linux... So I was a very low-level already, and I realized that with fork - this is an interesting story, because fork, after 15 years, still is the best way to do the Redis thing from the point of view of persistence; this magical thing of copy and write of the kernel pages. So this fundamental idea back then survived to these days.

And so I started to write this Redis thing, and it took me two weeks to have the basic core in order to apply it in our system. And since I had a long story of releasing open source software, \[unintelligible 00:14:34.05\] device drivers for the Canon cameras, web log analyzers, many projects that were in Debian and in other Linux distributions, I said "You know what? If I release Redis, this will not impact in any way our business", because the other application was closed source. So I released it on Hacker News, because Hacker News was very new when I released Redis in Hacker News... There were like 10 upvotes, a few people commented, but basically nobody cared at all. But Ezra Mobius...

**Adam Stacoviak:** Morbius, yeah.

**Salvatore Sanfilippo:** Yeah, that unfortunately now is no longer with us - he was a very smart guy, and I want to take a minute in order to remember him, because when I went the first time in San Francisco, he interviewed me and we did a talk... And basically, he realized \[unintelligible 00:15:39.29\]

**Adam Stacoviak:** \[laughs\] I've just found this recently, because I was in his office... I've just found that recently.

**Salvatore Sanfilippo:** He was doing the operations for GitHub. So basically, Ezra said to GitHub, "You have this delayed jobs thing, but you could use Redis", and he started to talk. But for six months, one year, I continued to work to Redis just because I liked it. And also, there was the contract with Telecom Italia, so I received the money in order to pay the bill... So who cares about actual work? I want to do Redis, and I did Redis.

\[00:16:18.12\] And actually, as a kind of person, I am so erratic from the point of view of doing only what I want, that it's a miracle that I was able to work so many years to Redis. And what the trick was to just focus every time in a subsystem that in a given moment interested me. So it's like if you have many projects, basically.

So thanks to this start of conversation, and I continued, and then I posted again the news... And also, one thing that I did was that every open source user that I had, I handled it as a customer. Like, it didn't matter if he or she is not paying me, I offered basically premium customer service \[unintelligible 00:17:11.01\] So people started to trust me, and this trust that they had in me started to migrate to Redis, because I believe -- you never trust just systems. You want to trust also the people that are behind a given system... And everybody started to use Redis more and more.

But after like two years, it looked like it was inflating. Like, there was a very strong movement about very consistent systems, serializable systems. And I was very against it, in the sense that I thought "That's great that you have systems that have very strong form of consistencies, but not all the kinds of problems are made the same, so I believe it's a good idea we also have other kinds of systems." Because my motto was "The system usefulness is the sum of what happens when the system works without failures, and when the system works with failures." It's true that during severe failures, if you make complex partitions, Redis may lose \[unintelligible 00:18:23.04\] and so forth... However, on the other side, because of this sacrifice, you have things that otherwise are impossible to achieve from the point of view of latency, the kind of data structure you can support, and so forth.

But many, many followed this path. For example -- I don't want to tell names, but they failed, because they were so compelled... At same time instead, for example, MongoDB prospered, inferior initially. Now I believe they are very strong; initially, technically, infrastructure. Because sometimes people want things that work, and not that work in the worst situation.

So basically the thing inflated, to the point that one of the people that was contributing with me back then brought me one night and said "Save yourself and run away from Redis, because it's a ship that is sinking."

**Jerod Santo:** \[laughs\] You didn't listen?

**Salvatore Sanfilippo:** No, no. I said, "Okay, I understand. It can inflate, but then I will find a new project. I will not die if Redis is no longer used." But instead, after this stage, especially in the San Francisco area, to use Redis was worse than saying "I vote for Trump", or something like that. It was impossible to say "I use Redis" without people watching you very -- or it was even worse than not having a kitchen in your house, because it was very big to have a kitchen, you know?

\[00:20:13.01\] And so people that I ran away from this Redis thing... But then, for example, there were very important companies that in the wave of this feeling was switched away from Redis, and then six months again they were back to Redis, because they created a lot of issues, trying to serve with other services. And so I continued. And at this point they said "Okay, this thing didn't die in this moment, so it's worth to --" Also, I was with VMware at that point, and they paid me a good amount of money, so I was no longer working for free... And then I switched to Pivotal, and then to Redis Labs. And it was a good setup. Basically, this was the start of the story. And then the story continued with incremental improvements to different subsystems of Redis, always trying to avoid making it too much complicated.

**Jerod Santo:** So we started off talking about how times have changed, and you mentioned that when you first started it, or those first couple of years, you treated every new user like a customer, and that's part of its success story. Would you advise that today, for people who are starting open source projects, or do you think that was foolish, but it happened to work for you? What are your thoughts on that strategy today?

**Salvatore Sanfilippo:** I believe it is very important to don't fall in the trap of saying "This is an open source project. I put it on GitHub, and then you don't ask me anything, because I'm already providing this work for free." But actually, the involvement of the users that try to use your system is not inferior to your involvement. They do things for work. When they use your system, they are exposing themselves to you faking up in some way or the other... So it's a big gift that they are doing to you. And I believe that minimum that you can do is to be as helpful as possible, as long as you maintain the project. Then if you don't want to maintain it anyway, you say "Okay, I'm done with this. I'm doing some other stuff." So absolutely, I believe.

Also, the first users are not the mass users that you have in the next years. They often are extremely bright persons, that will provide you very valuable ideas. And there is so much value in that community, in that initial community. So I absolutely will do this again.

**Jerod Santo:** So you had a couple of jobs along the way. You mentioned VMware... There's one in between that and Redis Labs. What was the one in between?

**Salvatore Sanfilippo:** It was VMware, Pivotal and Redis Labs.

**Jerod Santo:** Okay, so Pivotal. And so these organizations employed you full-time to work on Redis at your discretion, or was there strings attached? And then how did you get all that going? Because back then that was pretty rare. I think it happens now and again now, but that was pretty rare. So how did that work out in practice?

**Salvatore Sanfilippo:** Okay, this is one of the best sides of capitalism. I believe that inside VMware there were two persons - basically Derek Collison, was one, and Mark Lukoski was another one, that realized that I did some good work, and they just did this for me without return. I believe it was like a gift. I will be always, you know -- thank you to them, basically.

**Jerod Santo:** \[00:24:15.17\] Yeah, grateful.

**Salvatore Sanfilippo:** I don't know if I ever said clearly thank you to these two persons... Because they didn't reason back then in terms of just "What's better for our company", but "Our company is big, and this money don't change anything. And what's a good thing for the software landscape, for the underground software landscape that we can do?" Sure, there was also a cloud strategy about VMware, and stuff like that, but I was free to do everything.

**Jerod Santo:** That's amazing. And Pivotal was similar?

**Salvatore Sanfilippo:** Initially yes, but they were probably a bit less happy about this setup. And so because Pivotal and Redis Labs had the same VC, they talked and said "If somebody has to pay this guy, let's pay you, that is Redis Labs, and not us, that do something else." And so I switched.

**Jerod Santo:** I see. So the Redis Labs one is the confusing one, because Redis is your baby, and this is a third party that named themselves Redis Labs and hired you? Or did you start it? Can you explain that, how that worked?

**Salvatore Sanfilippo:** Basically, they started the company and approached me immediately after starting the company in Germany. We were in Germany, there was some kind of conference, a NoSQL conference of some kind... And they asked if I wanted to join the effort earlier. But I was in a too good situation, basically taking money for free, and working on my system, so I said "It's okay for me if you do business with this thing. The license allows it, so..." But eventually, it was the most obvious thing that trying to make money with Redis would also pay me.

**Jerod Santo:** So all three pretty good setups, some better than others. Obviously, the VMware one was the most, I don't know, philanthropic, or less capitalist. They just decided to do that and let you do your thing, which is awesome. Eventually, you grew tired of Redis? I mean, you left - was it 2020, as lead maintainer?

**Salvatore Sanfilippo:** Not of the system. I was very happy of the work that I was doing. However, till the very last day, even if I had -- inside Redis, the company, there are many gifted people in the Tel Aviv side. There are very strong programmers that are in the company. Since I started Redis, they never left, and they have a very detailed understanding of the core of Redis, so they helped me with the most complicated bugs, and stuff like that. However, many of the user-facing features were still developed 80% from myself. And after 11 years, of all these users -- I, for example, remember that even when I took vacations of any kind, I always had my bag with my computer, and oftentimes I had to open it every day, because there was some issue that could be critical, some bug report from crash... And since a lot of systems run on Redis, for me the stability of Redis was the most important thing. Absolutely the most important thing. So every bug was investigated in details, with even weeks of efforts in order to replicate it, track the bug, to the point that after some time we realized that many of the bug reports were broken memory.

\[00:28:12.04\] So when Redis \[unintelligible 00:28:10.08\] performs for 10 years or even more a memory check of the system it is running on in order to report broken memory. And now it's of no use, because most memory is error protected. But back then, a lot of cheap memory created problems.

So basically, it was a life completely dedicated to this system. And I said, "I want to stop." Also, when I saw GPT-2, and then GPT-3, I said "This is going to change everything", so I wanted to write a novel about this thing. And I started to write while working, but I realized that the writing thing was a full-time stuff, so I said "I need to retire sometime in order to write this."

What's happening - for example, in the novel, there is, I believe, the first description to date of prompt engineering... Because it was written in the novel before ChatGPT and -- there was just GPT-3 without the instruction tuning models... But it was obvious that we were headed in this direction, so I had the urge of doing this thing, and so I stepped back.

**Jerod Santo:** So along the way Redis went through some license changes with various feedback from community members, and non-community members, from open source, to SSPL, and AG... There's lots of stuff we could talk about here. How interesting is licensing to you, Salvatore? Do you like this topic? Do you dislike it?

**Salvatore Sanfilippo:** I believe that we that formed ourself in the '90s were extremely aware of the licensing stuff.

**Jerod Santo:** Yeah.

**Salvatore Sanfilippo:** Now I see younger developers not really caring about this, but we basically started to write code, and starting to be mini lawyers, understanding all the subtle things about GPL, BSD, MIT... So yes, I care about license, because the way that you express your willing about what others can do or cannot do with your code.

Also, I think that without the copyleft idea, the computers technology could not accelerate to the point that it accelerated. Because when open source was created, basically in order to create a startup, you had to buy complicated workstations, Unix licenses, database licenses... So it was impossible to have the landscape that then it was created by the open source movement. So for me, licensing is very important.

Initially, what I did with my software was to use GPL. Then I started to realize that GPL had two problems. It created problems to myself, because sometimes I thought -- and if this becomes big, I want to have a business model. And I don't want to get some paper signaled by all the contributors that I had so far. So I started to switch to BSD, saying "This is a protection for me. Also, it's a protection for other people based on the environment they use my software." And sometimes it can be a problem, even if they don't want to violate the license, and stuff like that.

\[00:32:00.06\] When I started Redis, I was very into this BSD stage of my life, so I released the Redis as BSD also because there is also behind that an idea about accelerating society, improving society to be more important than basically what is going to happen to me, in some way. However, then it must be said that the cloud situation changed the landscape, because even if it was very complicated to create a product business model, even before - basically, Red Hat was the only one that really succeeded in this kind of game in the open source, and a few more... But still, if you wanted to sell services, you were the to-go person as a creator of the software.

And then after AWS everything changed, because there was no longer need of somebody supporting you, because it was handled for you. And also, you couldn't even compete with the others, because in order to compete in cloud services, you have to pay for the instances, and they have them for free. Also, even the billing is complicated. There are many companies that just because of billing will just get what AWS has, and stuff like that.

So I understood at some point that the BSD license that I picked, with the changing world of the software, created serious issues to create business. Now we can go a step back and say "But why it should create business? It's an open source software." And I believe that more or less every complicated open source software has in one way or the other an economic system behind it, because it's a lot of hard work for many years. Either people are paid very well, or they will not afford to do all this kind of work. So I believe that both things are needed to redistribute to the community, and also.

And inside Redis, they didn't want to change the license, and I didn't want for a long time... But there was this discussion, but it was some kind of taboo. So it never happened as long as I was there that somebody asked me "But what do you think? We want to change the license." It's a conversation that didn't happen. I just created the module system, and Redis the company started to have the modules that were enhancing Redis capabilities, and that was it.

Then when they changed the license, I understood that it was basically some kind of a forced move in some way, because with BSD it was too complicated to compete in this market. However, now we are realizing - me and also inside Redis - that SSPL was not accepted by the community in some part. And we care about this thing, because you know, I don't believe that SSPL is a terrible license, because it's very similar to other GNU licenses. It's just a couple of sentences... But the reality is that culturally it's not accepted. And so we are starting to discuss inside the company about this problem.

\[00:35:52.25\] Also, one important thing is that because of that, we are going to add in Redis a lot of the features that are now only for the paying users. For example, now I'm working a lot to vector sets, which is the first fundamental data type that Redis gets after many years... And it will be released in the community edition, like normal Redis. And like everything I did in the past, it's no dependencies, so it compiles because the data structure -- so the HNSW data structure for vector similarity I wrote from scratch, the quantization I wrote from scratch, the hybrid search... So it's some code, it's like 6,000 lines of code in total, the other Redis data structure. So you can open the code and understand how it works. And it was impossible before to do that, but still, maybe there are setups that make everybody happy, enough protection and the community will be more happy. So there is an ongoing discussion inside the community now. I'm not sure what will happen, but we are focused on the problem.

**Jerod Santo:** So you probably heard that Elastic went there and back again. They are fully open source, with Elasticsearch specifically, once again. And we had Shay Bannon on the show last year, talking about that decision, and he says that he thinks nowadays, in today's culture, the AGPL license, which is accepted from the OSI as an open source license, gives entities enough of a foothold or legal precedence or holding that you can safely, in his opinion, use that and not be too worried about the re-hosting scenario. Now, he detailed some of that in that show. I don't know all of his reasoning why he thinks that's the case, but it's possible that -- because SSPL and AGPL are very similar, are they not?

**Salvatore Sanfilippo:** Exactly. I believe so as well. There was, I believe, some -- I was not part of the company when this happened, but I believe that this was a consideration. But then, you know, sometimes also the legal advice that you get... I will say something a bit maybe unpopular, but I think that the legal offices in companies sometimes create the worst possible setups for companies. Because the legal offices don't really try to usually balance the risk, the legal risk with the company potential, but they are mostly going always to err on the safe part, in order to be right later. If you are super-conservative, you never do anything wrong from your point of view. However, you are paralyzing the company.

Many times when I had to do contracts, I skipped the lawyers that were in between and we could not understand each other, and said "Okay, I will write the contract. This is the contract. If you want, you can fix the form", and immediately, the thing started to immediately to work, the conversation. And I believe that sometimes it can happen that choices are -- but if you read the AGPL license very, very well, you actually discover that also the form is not extremely clear. It's not very well written. So I believe that it's very hard that somebody will authorize to use it in a software as a service setup without any kind of a signed paper by the folks that have the copyright. And this could be a good -- I think that they did a good thing switching back. Basically, in this kind of changing setup, you try, and you believe "This is very similar to AGPL. People will accept it." Instead, you find the cultural resistance, and then you step back, "It makes sense. I can understand that."

**Break**: \[00:40:09.20\]

**Adam Stacoviak:** So you said that you guys are considering licensing updates, let's just say, to paraphrase it... Is AGPL back on the possible table? Since the SSPL and the AGPL is so similar, do you think - to be culturally fit again, let's just say - that's a wise consideration?

**Salvatore Sanfilippo:** There is, I believe, a part of the company that wants to do some change in this direction. However, there is to basically find an agreement about that. But personally, for myself, I am positive about doing this switch, and I will keep the conversation going about this.

**Adam Stacoviak:** Yeah, I think it'd be a win. I mean, we started off with, you know, basically 15 years ago, and your journey to create it, and how it prospered in the community. Obviously, BSD license, open source - thrived, beloved, to this day. And many mourned its license change because it limited their ability to use it as it was prior to be open source. And I get it. You've got the Goliaths and the behemoths, and you've got the challenges, and license changes are sometimes necessary to protect all of your work, and the company you built, and the customers you've gained that pay you. And then we kind of forget, in a way, this open source land, this thriving, free ecosystem that's not just free in dollars, but also free in freedoms... I can feel that tension there, obviously, but I think it'd be super-cool if you guys went back to open source. Could you imagine, Jerod?

**Jerod Santo:** It'd be awesome.

**Adam Stacoviak:** Redis, open source again.

**Jerod Santo:** There you go.

**Salvatore Sanfilippo:** Yeah. To be honest, I'm investing my time, both in creating the cultural conditions inside the company, but I don't want to stop there. Also, with the vector sets, with \[unintelligible 00:45:24.22\] I want to in some way show the company also back the Redis way from the point of view of simplicity, of also -- one important thing about the vector set data, the API compared to the other systems that do vector similarity is the trust to the user using them. Instead of exposing a system that is an index, we expose the data structure, because Redis users have shown us in the past that they are very smart, they are very capable, and they know how to use building blocks in order to shape them exactly for the kind of problem they want to fix. So this kind of thing is also part.

So pressing about the license, pressing about the different vibe in the community - in general, this changes. I want to be in some way the flag of this new revolution inside the Redis company. And I see that I have many, many people that are aligned with this vision. For example, today I received the second pull request from the CEO of Redis Labs, that hacked the C code in the vector sets in order to fix a bug. So in this moment Rowan, which is the new CEO, is hacking to the code that I'm showing to my colleagues, and sending pull requests. And since I see he's really a community person, that has this kind of background, I believe that the company can be aligned towards this vision.

**Jerod Santo:** Mm-hm. Was this one of the reasons for your return, or did you find this once you got back, that you wanted to make this cultural change inside? Or did you see it as a reason to come back to Redis and Redis Labs?

**Salvatore Sanfilippo:** Honestly, I started to think that my comeback could be useful from the point of view of recovering what was created in so many years. And I didn't want -- you know, after I left Redis, I didn't watch again the commits, whatever. Zero. Because I said "Okay--" During my term I tried to take the direction straight, but then now it's too simple to look at the commits and saying "This is wrong." If other people are working to the system, you have to let them work.

\[00:48:06.03\] But then, when I saw the conflict inside the community, I thought that since I know a lot of people inside the company, and I was sure that many of the technical staff, for example, it's not what they wanted happening, I said "Maybe I can return. And I can return also without feeling too much stress, if from the point of the code, I focus on only a subsystem each time. And from the point of the other work I do, I focus on the community." That was the idea.

**Adam Stacoviak:** Let's paint a picture, because you keep saying the company, and I imagine - you've got Salvatore here, you answer as the person we've known since the beginning... And then you say "the company." Can you quantify what that means, the company? How many people? Who's involved? Is there a lot of open source lovers or purists there that really appreciated or loved the days when Redis was fully open source? Help us understand what you mean when you say "the company."

**Salvatore Sanfilippo:** Okay. That's a very cool question, because I believe that Redis is one of the worst communicated companies in the world...

**Adam Stacoviak:** Okay...

**Salvatore Sanfilippo:** Because it's much better in the inside than it looks in the outside. Basically, we are 1,000.

**Adam Stacoviak:** 1,000 people.

**Salvatore Sanfilippo:** Yeah.

**Jerod Santo:** That's a lot.

**Adam Stacoviak:** Holy moly, that's a lot of people. Okay, the company's big.

**Salvatore Sanfilippo:** A lot of people.

**Adam Stacoviak:** It's not Google-big, but it's big. That's a lot of people.

**Salvatore Sanfilippo:** It's a lot of people, and the development part is almost completely in Israel. A lot of remote work is inside Israel, in many places of Israel, in the North, in the small cities, small villages... And there are truly talented people there. Incredible persons. Also very loyal persons to the company, that understand the project and understand it is very important. Also, they are people that kind of fight for the AGPL thing, because they thought it was a good thing. So people interested in the project. And I believe it is a very strong pool of talented people in Tel Aviv.

Also, another thing that happened that I believe is extremely cool is that we are acquiring new people that are like that. What happened is that one of my colleagues, Oran, which is truly a genius of programming, together with Yossi - they are two really superstars that nobody knows. For example, Yossi was the one that wrote the abstraction layer in order to make Redis SSL as a module. So you load a module and it is SSL, otherwise you don't have the complexity, and stuff like that. For example, this Chinese person starting to do pull requests only on comments. This comment, this -- and another guy, which is a Portuguese, for example, also doing initially simple pull requests. But he recognized that they were smart, and started to help them to create more complex pull requests. And since Oran works a lot, since he's responsible of all the developments of Redis on Flash, which is, you know, the way that we have to offload part of the data from RAM to Flash; it's a complicated fork of Redis. You know, he had to do a true investment, and now these two persons are very strong core contributors of Redis, making complicated stuff.

\[00:52:00.19\] Also, another guy, which is the one that implemented the expires in the hash type elements, single elements - he's very talented, and he optimizes this thing to a so low level. And for example, one thing that I still love about Redis, and I think that we have an edge here compared to, for example, Valkey, is the design idea. In Valkey there are a bunch of people and they do a lot of agreement design, which is a way of working that I don't believe will be optimal. And why I hope that Valkey is going to be great, because in some way this was -- you know, the thing about the BSD is that whatever happens to the company, to myself, the code in some way can go forward, because it takes other streets, like Amazon, or Google forking, \[unintelligible 00:53:00.11\] However, from the point of view of the software idea, I don't think that Valkey can do a better job than us. And one thing that I would love is we go back in to AGPL to be also OSI-approved it again, and then compete on the quality of the ideas, and the quality of the developments... You know, because Redis is going to diverge a lot.

For example, one of the leaders of the project said, after seeing in my blog post the vector sets thing, "We will never do something like that", because they don't trust in this line of, you know, AI is this terrible hype. For example, this is one way to approach the problem. I am, for example, an AI enthusiast, and this already creates a different take on the project.

**Jerod Santo:** Sure.

**Salvatore Sanfilippo:** So I believe they will diverge a lot.

**Jerod Santo:** That's really interesting. So -- and you're happy about that, because now you have basically... Like, Redis gets pushed forward, but also Valkey gets pushed forward in different directions, and different things work for different people, in different circumstances, so it's kind of spurring some innovation. Did you see Redka? Is that one that crossed your radar? Because there's a bunch of forks that came out back when Redis was first announced that the license changed. Redka was not a fork, it was like a re-implementation. Are you familiar with this one, Salvatore?

**Salvatore Sanfilippo:** No, no. I heard about it, but I didn't go to check what they are doing.

**Jerod Santo:** You didn't check it out. This was just a re-implementation with a SQLite backend, trying to just get the Redis API up and running with a different backend. It was kind of a greenfield thing that was inspired by the re-license, but I thought it was pretty cool, the explosion of new projects and ideas that happened... Which was kind of like open source working, in a sense. Like, this is the spirit of hackers hacking, and starting new things. And it's kind of cool that all of this has inspired you to come back to Redis and like push it forward in new directions. I think that's pretty cool.

**Salvatore Sanfilippo:** Yeah. It's like, all the teams together optimize to search the space of potential possibilities, basically.

**Jerod Santo:** Well said, yeah. That's cool. So where do you take it from here? AI, it sounds like, huh? Redis AI. \[laughter\]

**Salvatore Sanfilippo:** I think that vectors -- I mean, learned embeddings. Because vectors -- okay, the way I am implementing vector sets is one way that allows the user to also use vectors outside AI. For example, I implemented binary quantization, and if you want, you can put binary vectors where just each bit is a product that a user got in an e-commerce system, and you still can do cosine similarity, and it takes similar products to this user. But of course, the main thing is learned vectors created by models that compress something, some object, be it text, image, whatever, in an embedding that captures the semantic value of the initial object.

\[00:56:22.03\] I believe this is going to be useful in the future, even if I am not a fan of rug, because I believe that RAG created a lot of issues. For example, one of the reasons I believe Claude Sonnet is often in the real world so strong for programmers is that when you attach a file there, the model sees all the file. They don't use RAG. Instead, when you attach a file in the Open AI systems, it uses RAG. So you don't see it, but the model is just seeing fragments of the code. So in some way, Claude looks magical because of that.

**Jerod Santo:** So do you know what technique Claude Sonnet is using to get that information that's not RAG?

**Salvatore Sanfilippo:** They just put everything in the prompt.

**Jerod Santo:** Oh, they put all -- I mean, do they have a huge prompt, I guess? Big context.

**Salvatore Sanfilippo:** Exactly. That's the reason why Cloud Sonnet, after you fiddle with it a little bit, says "Return in five hours."

**Adam Stacoviak:** Yeah, I was gonna say...

**Jerod Santo:** \[laughs\] "Return in five hours..."

**Adam Stacoviak:** My experience with Claude so far has been just that. They almost -- they start to yell at you, essentially, when you have too many back and forths. And I'm like "That's the whole point, is to have the back and forths", essentially. The prompt, the response, the prompt response, and you iterate and massage and form whatever it is you're forming. And it's like "Well, that's the whole point of this chat system." And we can debate the usefulness of chats if you'd like to, but they discourage long chats, essentially.

**Salvatore Sanfilippo:** I agree, but I believe that this is a feature, and the way why so many programmers speak at the Claude. Why I'm saying this - basically, like Redis, they are putting you face to face with the limitation of the system. Instead, what Open AI does is to implement two things. One is memory, which is after the context is too long, the model will summarize it in some way, or use RAG itself in the history. And so you believe that the model is still aware of all your chats, but the model is no longer seeing the full details, and they start to act erratic.

**Adam Stacoviak:** They do, that's true. I experienced that as well.

**Salvatore Sanfilippo:** So I am more happy \[unintelligible 00:58:39.18\] but they can understand very well what's happening. And also, DeepSeek V3 and R1 does the same, that when you attach a file, the file is completely inside the prompt. And since attention is quadratic, it burns a lot of GPU compared to using RAG.

**Adam Stacoviak:** How much are you studying this? Because this is something that I'm still sort of catching up to how the GPU interacts with a model. Let's just say you've got an off the shelf one, 24 gigs of VRAM. How does that translate to the model being in the VRAM to consuming the GPU's ability to compute? How are they different? Like, memory and compute on a GPU is not one and the same. Because you may say "Well, I've got one or two GPU's and I can consume 24 to 48 gigs of VRAM", but you still have compute on that GPU. Can you explain, do you know much about that, or are you becoming more familiar with that?

**Salvatore Sanfilippo:** \[00:59:44.05\] Basically, what is happening right now is that all the frontier models are MOE, mixture of experts. They are no longer like, for example, LLaMA 3.3 or the initial models, dense models. Starting with GPT-4, Open AI started with the idea of using a mixture of experts. Basically, the model is partitioned inside, like a cluster, and then there is a layer, which is the routing layer, which selects at each layer, for each token, which part of the model to activate. In this way, a subset of the model becomes expert in the English grammar, another subset in Python, and so forth. However, this division is not so clear. The model learns how to split the knowledge, and it's very mixed \[unintelligible 01:00:41.26\] inside.

So basically, with MOEs you still need the VRAM to contain all the model in your RAM. So for example, if you have -- let's talk about DeepSeek version three, which is more or less as big as Claude, and we have the actual data public for DeepSeek. It's a 600 billion parameters model.

**Adam Stacoviak:** That's big.

**Salvatore Sanfilippo:** Yeah, it's very big. And it seems it is 8-bit for a parameter. You need 600 gigabytes just for the model. And then you have the cache for the \[unintelligible 01:01:26.25\] And for a very long context, you need more RAM. So basically, with mixture of experts you need less GPU, and you need more VRAM. So this is changing. The GPU power is becoming, in some way, for inference, at least less important than VRAM... To the point that I have a MacBook M3 Max with 128 gigabytes of memory, and I can run DeepSeek in my computer. Not the distillated versions. The actual thing, extremely quantized to 1.5 bits per -- but still, because I have enough RAM, \[unintelligible 01:02:13.13\] inference, it's able to run this beast. So basically, what will be the dream for all us will be computers with like one terabyte of RAM. And even if the GPU is not so powerful, we could run frontier models inside our machine.

**Adam Stacoviak:** Let's clarify runs. Tell me tokens per second.

**Salvatore Sanfilippo:** Four tokens per second in my computer right now.

**Adam Stacoviak:** Which is so slow.

**Salvatore Sanfilippo:** It's very slow.

**Jerod Santo:** \[laughs\] But it runs, Adam. It runs.

**Adam Stacoviak:** Yes, I know. I want to be clear though, because --

**Jerod Santo:** 600 gigabytes, he said.

**Adam Stacoviak:** Yes. No, I get it. But, I mean, you've got people who are dabbling more and more into this, and runs and is usable is potentially two different things, because... It can run, and I do agree with that. Your hypothesis that more RAM and less GPU makes sense because the Mac, the M1 systems or the M systems allow you to essentially allocate this RAM as VRAM, as what would normally be VRAM for a GPU. So you can utilize that 128 gigabyte that you have available, and maybe a less powerful GPU, and still run an inference. However, you won't have super-fast tokens. And then if you want to program a Python program with that, you're going to spend a couple of days, a serious amount of patience, and potentially a ton of errors, who knows.

**Salvatore Sanfilippo:** \[01:03:52.01\] Yeah... Also, a lot of people don't realize that if you are talking in English with the model, often a single word is one token. However, because of how the tokenization work of large language models, if you talk with them in Italian, for example, since the Italian was very underrepresented in the dataset, or even if it's writing Python, and often for each parenthesis, a new line, it's a token. This means basically that you have to generate a lot more tokens for each sentence, and it becomes incredibly slow, because every two characters are one token; not one single word.

**Adam Stacoviak:** It really makes you weigh your words that you put into the prompt too, right? Because the weight and the structure -- it almost kind of brings back prompt engineering in a way, because you want to, not so much engineer, but you want to be particular with how you prompt the LLM in this scenario, when you have resource-constrained systems. Whereas if you've got Claude, you just realize that "Oh, you can't have long chat histories." Or if you're on open APIs, ChatGPT 4.0 or whatever model, you can go to infinity, basically, but like you had said before, it's not real. It's faking the scenario. It's ragging it later on, which is just like retrieving stuff in fragments.

**Jerod Santo:** So what you're saying, Adam, is don't waste precious tokens by thanking your models when you're done.

**Adam Stacoviak:** Precisely.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I longer -- that's a deep cut, Salvatore, because I am the person that says "Thank you" or is generous with my words, let's just say... "Can we please", you know... Or "Let's do this", versus "Generate", which is --

**Salvatore Sanfilippo:** Me too, but this is nothing. The trick is when you start to have a mid-longer chat, to start a new one... Because since attention is quadratic, once they go -- okay, there is the KV cache, but still, you are accumulating a too much longer chat... And instead, you start anew, fresh. Also, sometimes the model can focus much better on the latest version of the code when you start fresh. It becomes more selective, and it gets less confusing. So my trick is this one.

**Adam Stacoviak:** Yeah, I like that. So you pull out the latest -- you may have like a 10-minute session, let's just say, a couple of back and forth, but then you take the final artifact you're liking from that session, sort of whole brand new session, and bring that latest version of whatever you're liking to that new session and allow it to begin again... To have that new, finalized context, versus all the different bifurcations you could have taken along the path.

**Salvatore Sanfilippo:** Exactly.

**Adam Stacoviak:** Okay.

**Jerod Santo:** That's a pro tip right there.

**Adam Stacoviak:** There you go. Prompt engineering is back.

**Jerod Santo:** It's back... Until we have sufficient VRAM that we don't need these things. So Salvatore, when do you think this new Redis vector set stuff you're working on will be baked? When will people begin using it? It's out there, it's somewhat open source? What's the status?

**Salvatore Sanfilippo:** I think it will be released in one or two months, something like that.

**Jerod Santo:** Cool. And what are some use cases or some people that are currently using Redis that they would be like -- what would this unlock for certain folks?

**Salvatore Sanfilippo:** Okay, an example... Sometimes when I take weight, I want to lose this weight. Normally, I do calorie jacking with my \[unintelligible 01:07:27.17\] or other applications, and stuff like that. However, it's so boring. And I do that for 10 years at this point, but still it's boring. So I'm writing to a Telegram bot where I just say "I am eating 10 grams of honey, and one slice of bread of 40 grams", and it will do it for me. However, you cannot trust the model to have accurate informations about the calories of each kind of food. So basically, what I did was to create a vector set inside Redis, where it has each line of a very big database where there is each food with the macronutrients, the calories, and whatever.

So what the bot does is that based on my query, it asks Redis for similar items. Then I take the similar items of foods that are similar, and it takes that in the context of the LLM when asking the question. "The user reported eating this thing. Based on this table, don't invent the macronutrients. Please tell me what are the total calories and proteins and carbohydrates and fats." This is one use case that works very well.

**Adam Stacoviak:** Key phrase there, or key word there, Jerod, was please.

**Jerod Santo:** He did say please.

**Adam Stacoviak:** He did say please. \[laughter\] The debate is still out.

**Jerod Santo:** It's only one token in English, you know? I don't know about in Italian, but... It's only one token in English. Okay, that's cool. That's very cool. I'm sure there'll be countless other people with ideas on how they can leverage this to do cool stuff, whether it's commercially, or healthily in their own time, to track their calories. I think it's pretty sweet.

**Break**: \[01:09:24.24\]

**Adam Stacoviak:** I don't know if this maps to this, but there's a particular problem I'm trying to solve for me. So as you may know, Salvatore, we are a sponsored podcast. And so we have brands, like Redis - which have never sponsored us - that we would happily partner and share with the world, the developer world, what you're doing, let's just say. And our ability to win these relationships is really predicated on my ability to be fast with accurately quoting people what we can do for them. For the most part, we have packages, but sometimes people are asking for this or for that, and so it's not always just "Here's package one and here's package two." And so what I've done recently is I've gone into Open AI's ChatGPT and I've created my own GPT. And it sounds like what you're talking about with this vector embeddings is like "Give me truths, particulars." Like "This ad spot costs this much. And when you multiply it by 12, it costs this much." That will never change, because it's like a row in a database. The value is X, and so quantify it by Y, for example. However, in my experience with this, even though I've made this GPT and I've told it how I want to format the response, and I just say "Generate it", it's driving me crazy, because it's doing the math wrong... I so bad just want to spit on my own Ruby app just to like generate -- like, this basic text is all I really need. But I want to prompt it to say "Give me 12 weeks of the Changelog, give me 12 weeks of this, and then generate this thing I would normally handwrite", which I already did, I formatted it, "but just do all the word math for me, do the word calculator stuff for me. Because I'm lazy, and I can be slow, and I want you to be fast, and I want it to be accurate every single time."

So I feel like what you're talking about with this vector embeddings is like "Okay, in that world, building my own GPT or my own thing like that is possible because you've got these embeddings in there", and whenever I prompt the LLM, it's going back to those embeddings and saying, "Okay, I know this costs Y, and we're multiplying it." And the word calculator is my prompt, essentially, to say, "Give me this", and it gives me all my words back, but all the math is done. Does that map onto what you're talking about with -- is that an application of vector embeddings?

**Salvatore Sanfilippo:** Yeah, yeah. In general, if you want to retrieve anything -- for example, another example that... For your use cases particularly, one of those systems that have a very large context window, like Claude Sonnet, and that don't use RAG and see all the files in the context could be the best spot for you. If you want to try, you can take some document, put all the information needed, and then you do few-shot learning. So you make examples. Okay? And then if you upload this file to Claude and you ask a question, it should be able to reply in a perfect way.

**Adam Stacoviak:** I want that.

**Jerod Santo:** \[laughs\] "I want that so bad."

**Adam Stacoviak:** The math being off is just like driving me crazy. I just did it today, I was like, it's accurate 95% of the time, and then one time it's like, it does terrible math. I'm like "I could never charge our customer that or our partner that, because that's not the real number." And so I've got to check it every single time. I'm like, "I just want the word calculator part of it."

**Salvatore Sanfilippo:** Another thing that you can do is to specify to the model that you want all the calculations performed using a program. This also is a trick that works.

**Adam Stacoviak:** Okay. Interesting.

**Salvatore Sanfilippo:** \[01:15:43.16\] And Claude unfortunately cannot run Python, but it writes JavaScript and executes it inside your window of your browser, and then takes the calculation back. But to make another example of vector sets, imagine that you want to do something like face ID. So basically, the iPhone face ID works with an embedding. The dot matrix in your face is provided to a given model that outputs a fixed vector. And imagine an evil government that wants to track you in every second, and it has a database of all the faces in a vector set, and then when you scan yourself, it locates that it's you, for example, or you are similar. Or if you have doors, automatic doors that look at your face and open the door. So it's not just text embeddings. You can use it for every application when you can turn an object into a set of features, and you want similar items. So it's possible to use a lot -- and as I said also, it works very well, for example, even outside the AI.

A few years ago there was one guy that did this in Hacker News. It downloaded all the data, all the comments of all the users, and created vectors with the most used 10,000 words, setting the number of occurrences for each word. So in a given vector, there were many zeros, but other things valorized. And using this and cosine similarity, he was able to extract all the fake accounts that were actually cloned. You know, when you write with a throwaway account, because the cosine similarity is very similar. So also, you can use this in order to spot similar texts, and other stuff like that. There are many, many use cases. Basically, I have a very active YouTube channel right now, talking about AI, mostly. And when vector sets will be released, I will write a lot of toy applications showing use cases.

**Jerod Santo:** Cool. What's your YouTube channel called?

**Salvatore Sanfilippo:** Salvatore Sanfilippo.

**Jerod Santo:** \[laughter\] Keep it simple.

**Salvatore Sanfilippo:** The coding videos are in English, a lot of talking videos are in Italian, but what I do is to take the transcript, pass it to Claude Sonnet, and it cleans up the Italian, and then the auto-translate to English works very well. There are other people that don't talk Italian following me in the channel.

**Adam Stacoviak:** So it sounds like you're a Claude Sonnet fan over Open AI's models. Like, you're hanging out in there.

**Salvatore Sanfilippo:** Definitely.

**Adam Stacoviak:** Okay. And how do you get around this limitation of what we talked about before when you volley back and forth? I don't know, you have a long chat history. How do you get around that? You just restart it? That's your way?

**Salvatore Sanfilippo:** Yeah, in general, I use AI a lot for coding, but really big time, but in a strange way. Most of the time I am in my terminal, writing my code myself. When I've got a problem, I go there and often my prompt is like "Don't write any code. Let's discuss about this", because I use it like an improved \[unintelligible 01:19:23.13\] in order to create more ideas, or explore mathematical concepts that are at the edge of my mathematical skills, or stuff like that. For example -- or if I have to do some complicated optimization and there are tricks that I don't know, or stuff like that. So basically, I'm very conservative. I avoid, basically, the brute-force way of coding, of continuing trying to refine... Because I discovered that this often leads to losing too much time to get not great results. So either I spend a lot of time writing the prompt in a very subtle way in order to influence the design ideas of the model, giving a lot of hints, but positive hints, and also "Don't use that, because I already understand it's not going to work very well." So my chats are usually not super-long. And otherwise, I start from scratch.

**Adam Stacoviak:** \[01:20:26.17\] Gotcha.

**Jerod Santo:** So are you using this outside of your editor, or inside of your editor?

**Salvatore Sanfilippo:** Not integrated, because for me this is a way to avoid becoming lazy, basically. I want to be sure that 100% of the code that I use, even if some code is written by the LLM, I understand what's happening. But I use it a lot more to track bugs. Like, I have a bug, oftentimes Claude Sonnet, if I post the code, "What's happening", it can debug it immediately.

**Adam Stacoviak:** So good. Yeah.

**Salvatore Sanfilippo:** Incredible. Like, five hours of debugging, five minutes. Because it will say -- after refactoring a few days ago, I forgot a statement; I removed the statement, but the statement removal didn't cause any error in the compilation, but it just created a memory error. And what they do in this case, which is -- I see that many people don't do that. You have to send the file and the commit diff, so that it can see the difference. And then it becomes extremely smart in understanding what you messed up.

**Jerod Santo:** Well, I'm going to have to try Claude Sonnet now. I've never tried it. I've been happily doing the other things. I don't know if "happily" is the right word, but I've been doing other things, and that's one that I just happily ignored so far. But you've convinced me. I need to give this one a shot. Maybe a few shots.

**Adam Stacoviak:** I can toot it a little bit, the horn of Claude a little bit. So I saw somewhere - I think it was on YouTube, or something like that, someone was saying it's really great for building documents. So I needed to create an agreement... And I knew what I wanted to say, but the way Claude works is it will have a file created, and it's open on the side; let's say you have your chat thread, and then on the side the document is open, and it will just update parts of the document. So from a user experience standpoint, you see not a regeneration of the whole document, that you now have to be like "Well, what changed? What did not change?", and you've got to scan it, and you waste your time... But you literally see Claude pull the document out that you're iterating towards, you see the little by little change, in a clause, or a heading, or the very specifics. And as a user, I'm so much more comfortable with the process, because I'm like, I'm working it through, and it's generating what I want it to, and it's not like generating this legalese kind of stuff, but it's only updating the parts that I want. Like, let's focus on this clause. I want it to cover this, this, this, and this, and here's what I want it to say, and it goes and just updates that one part. So from a user standpoint, it's great.

**Salvatore Sanfilippo:** You see it removing the lines, like pressing the cancel key, because it uses the artifact as a tool.

**Adam Stacoviak:** Yeah.

**Salvatore Sanfilippo:** So it can remove, edit, change parts... And also, between Claude 3.5 and 3.7, the generation output length was increased like 10 times. So now it can generate like 1,000 lines of code in one shot or even more, which is pretty impressive.

**Adam Stacoviak:** Wow. That is impressive.

**Salvatore Sanfilippo:** It's a very great system. Also, when Dario Amodei started the company, they were also extremely focused on the ethical part, the safety part, which is also a plus... Even if I believe that what they released a couple of days ago, Claude Code, which is agentic coding, I believe this will start to ignite... It's the right word?

**Adam Stacoviak:** \[01:24:12.24\] Ignite, yeah.

**Salvatore Sanfilippo:** A lot of firing or mis-hiring of programmers. Because it's --

**Jerod Santo:** It's that good?

**Salvatore Sanfilippo:** Yeah, it's -- Claude Code is the first thing I see which is not conceived to empower the programmer that wants to do more, but to replace.

**Jerod Santo:** Ahh...!

**Adam Stacoviak:** So much for ethics... I'm just kidding. \[laughter\]

**Salvatore Sanfilippo:** I understand that it's inevitable that sooner or later it's going to happen, but --

**Adam Stacoviak:** Someone's gonna do it, yeah.

**Salvatore Sanfilippo:** ...what is my interest is that if we have to go forward like that, that governments in all the world understand that they have to find ways for the people to pay their bills. And then it's okay if machines want to code; as soon as people are safe, I am okay with it.

**Jerod Santo:** Well, on that demure note, anything that we haven't talked about that doesn't include the career extinction of us software developers...? \[laughter\] Anything else you want to mention, Salvatore, before we let you go?

**Salvatore Sanfilippo:** Just that -- I see that, in some way, even if we say that our field in some way in these 15 years changed. However, imagine something as big as AI in the hands of other industries, for example pharmaceutical industry or finance. They will never -- it will never be like that that we have most of these tools for free. We have frontier models under the open source, a lot of other models and all the informations available. So I believe that still for IT there is hope, because we are in the environment that created the most incredible revolution is creating after like the industrial revolution, and still there is this idea of sharing, of making the tools accessible.

Also, if you think at the price of Open AI and Anthropic right now, $20 per month is very low. It's very democratizing this tool. So in some way, I continue to be optimistic. I am more about the \[unintelligible 01:26:40.27\] side, which I believe that in the short run the problem that we will face with AI - as a society, we will be able to overcome them, but I will focus on the existential threat... Because the agentic nature of these models, as they become stronger and stronger, even if super-intelligence can be achieved without consciousness, still an agent that breaks all the computers around... This is the worrying part for me, that there is the -- we will survive social change, but we may not survive some extreme event due to AI.

**Jerod Santo:** Well, we're excited that you're back at Redis... \[laughter\] We're excited for the subtle changes, the incremental changes that you're making to help Redis be more useful to more people... Thank you once again for creating such an awesome system and for open-sourcing it, so that the world can take advantage and benefit. I know I've benefited greatly from it in my career, even though I only used it for a relatively short time. I think the API and the way it works and the way you designed it has influenced my thinking as a programmer... You can't go back from that. That's like fundamental change... So I appreciate you for that reason.

**Salvatore Sanfilippo:** Thanks.

**Adam Stacoviak:** Thank you, Salvatore.

**Salvatore Sanfilippo:** Thank you. It was very great to talk with you, and thanks for the hospitality.

**Adam Stacoviak:** Oh, yes. Glad to have you back.

**Jerod Santo:** Yeah

**Outro**: \[01:28:17.29\]

**Jerod Santo:** So you recently wrote a post called, "We are destroying software", which - you know that, but I'm telling you that as a setup... Which was almost a poetic piece of maybe a little bit of a rant, with like 19 things that we're doing, roughly... I didn't count one by one. But ways that we are destroying software, for instance with complex build systems, with absurd chains of dependencies, with rewrites of things that already work. I'm curious what were you doing the half hour before you decided to write that thing? Like, what happened in your life that's like "You know what...?" Because you probably thought this way for a while, but finally you're like "I'm writing it." What inspired this?

**Salvatore Sanfilippo:** In general, everybody I look, I see that the complexity is increasing without a proportional utility, usefulness of the systems. For example, one of the most important things that we have right now, which are LLMs, are like 3,000 lines of code for the inference, and even if you look at DeepSeek today, they released all the training code, the distributed training of mixture of experts models, and it's a simple code. So why the Facebook Android application has 1 million lines of code? They are rewriting it from Java to Kotlin, and it's 1 million lines. And everything is like that. We have the same forms, the same buttons, the same likes of 10 years ago... However, if I check every tab -- now the recent Chromium tabs show you the memory usage, and the Claude tab, the chat is 419 megabytes, just a single tab. And everything is like that. And then also, software developers can --
