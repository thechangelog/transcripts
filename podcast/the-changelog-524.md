**Jerod Santo:** Alright, we have Cameron Seay here, who's a mainframe thought leader and an adjust professor at East Carolina University. Hey, welcome to the show, Cameron.

**Cameron Seay:** Very glad for you to have me. Very glad to be here.

**Jerod Santo:** Very glad to have you here as well. We were at All Things Open, and somebody walked up to me and she said "Have you guys ever covered mainframes?" And I said "No." And she said "Would you consider it?" And I said "Sure, we'd consider it. But I have no idea who I would talk to about mainframes." And she said, "Oh, I know the guy." And she gave me your name. And I said "Alright, I'll reach out and talk to him and see if he'll come on the show", so here you are. It's pretty cool.

**Cameron Seay:** I'm very glad. This is very nice. I think that was a prodigy of mine, that -- because I usually go to All Things Open. I've had some health reversals the last few years, so I don't travel as much, but I used to go to all of them. Todd's a really good friend of mine, yeah.

**Jerod Santo:** Oh, cool.

**Adam Stacoviak:** Big fans of Todd as well, big fans of All Things Open. I think it's just a strong conference for software at large, but really those who are pursuing the dream of open source, essentially, whether it's from hardware, to software, to ancillary businesses around it... Anybody who really cares about software being open for people to use. I love that conference a lot.

**Jerod Santo:** So until we're otherwise informed, Cameron, you are the person with the most mainframe students in the university class this term in the U.S. You have about 100 students learning mainframes from you. Is that correct?

**Cameron Seay:** Let me correct that data right now. Let me correct that right now.

**Jerod Santo:** Okay.

**Cameron Seay:** That was based on some projections that I had four sections planned, only three of them materialized, so I actually have 75 students. My colleague, Geoffrey Decker, who's a good friend of mine, he asked 88 in Northern Illinois, so he's got the title this year. But I wanna keep the record straight; I don't wanna \[unintelligible 00:04:04.14\] but I'm very happy to have 75. And usually I have over 100, so that's not an unrealistic number. And that's a lot in the U.S.

**Adam Stacoviak:** Well, either way, a contention for the title is enough for me. I feel like mainframes will be the last thing on the list to try to contend for a title.

**Cameron Seay:** Right, exactly. Nobody knows about the crown, so that's why it's so sweet; it savors so sweetly because nobody knows about it.

**Jerod Santo:** That's right.

**Cameron Seay:** But it's a big thing, and in this conversation you'll see why it's a big thing, hopefully.

**Jerod Santo:** Yeah. Well, let's start right there. First, give us a definition or a general explanation of what they are, just for the people who are completely uninformed. Maybe they've just started programming, they listen to this show... Mainframe is probably a term they've heard, but have never even come across a real one, or the concept. Define it, and then we'll talk about why it's still such a big thing, even though they seem like they're ancient, but it's still a big thing. There's still students signing up for new classes.

**Cameron Seay:** Absolutely. So the term mainframe used to be a pretty generic term that applied to a whole class of machines that did business computing. The original technology was developed by IBM in 1964, but there were spin-off companies. Gene Amdahl, the designer of the IBM mainframe created a company called Amdahl. So all these machines - they did large-scale, high-transaction business data processing, and there were 5 or 6 companies: Xerox, \[unintelligible 00:05:32.08\] Everybody had a mainframe. These were all "mainframes", which was synonymous for computer back in the day.

Now, with the advent of the PC and the kind of elimination of a lot of those companies, all of them but IBM - so the term mainframe really means IBM System Z. That's what it means today. IBM System Z. That's a very specific technology, a very specific, proprietary technology. But the term mainframe used to be a broad definition.

**Jerod Santo:** \[00:06:04.26\] So System Z - is it a hardware, is it a software, is it both?

**Cameron Seay:** When you use the term Z, you're speaking about an architecture. And as some of your listeners may not know - I'm sure you gentlemen know - when you talk about architecture, you're not really talking about a real thing. You're talking about an idea, a gameplan, a plan, a blueprint. But it applies to both the hardware and the software. So System Z, mainframe, IBM mainframe, software. All proprietary. But we're starting to use a lot of open source stuff. We can talk about that. But that's what we mean when we say IBM System Z. That's what we mean, the architecture.

**Jerod Santo:** Okay. So we know there's a lot of those systems out there, especially in the Fortune 500's large data processors, medical facilities, credit card transactions etc. Are there new IBM System Z systems and businesses being stood up today, or is it all legacy?

**Cameron Seay:** Well, that's an interesting term... Yes and no. But just so we have a correct context, IBM makes a new mainframe every two years. Every two years they have a mainframe that does stuff the previous mainframe didn't do. So it's not just a nominal upgrade, it's a specific upgrade.

So yeah, those machines are -- they're new; those machines are being stood up now. But the thing is that there is this existing suite of applications. What most people don't know is that probably 90% of business transactions globally go through a mainframe. Somewhere, they go through a mainframe. 90%, 95% of all credit card transactions globally go through a mainframe. It is the core and the foundation of the global economy. That's just a fact. And most of those programs are in COBOL. And that's not gonna change any time soon.

So these companies have to -- when you use the term "legacy", yes, it's legacy, but it's actually the core applications of their businesses. You're talking about Bank of America, you're talking about Wells Fargo, you're talking about a Home Depot etc. If a company runs a mainframe, the mainframe applications are the core of the company's business, because the company is using the mainframe because it has to. The nature \[unintelligible 00:08:16.29\] use a mainframe.

So those applications on the mainframe are the mission-critical applications of the business. That's a true statement, and most people don't know that.

**Adam Stacoviak:** So you couldn't just string together a bunch of PCs network to create a mainframe, because a mainframe, like you said before, is an architecture, an idea, a gameplan to get to a certain place, right? So what exactly is IBM Z mainframe today, or System Z now, in terms of a machine itself? Obviously, it's about throughput, and transactions, and things like that, but what is the machine itself?

**Cameron Seay:** So you make a very, very relevant observation, in that why not just put a bunch of commodity processors together and do what a mainframe does, à la supercomputer? It's a reasonable assumption, and that's the assumption everybody made in the '80s and '90s. I'll say "everybody", but a large portion of people. Not mainframe people, and not any serious computer scientist who really understood the differences between the architectures. Most people did not understand the differences between the architectures, so they just assumed you could take a bunch of AMD or Intel processors and do mainframe stuff. For some very easily explained reasons, you cannot do that. The mainframe's claim to fame is the fact that it can process transactions.

Now, let's think about the nature of transactions. They can't be done in parallel, right? Because you can never get the scheduling so precise, so that you can guarantee transaction B is always gonna come after transaction A. You may get close, but you're gonna mess up sometimes. And you can't afford to do that in banking, or insurance, or hospitalization. You've got to have those transactions done in sequence, on a single thread. That's the key. The stuff has to be done on a single thread.

\[00:09:57.20\] Now, you can use multiple threads if you're clever and you're tricky, but you just can't throw the workload on AWS and say "Process Bank of America's transactions." It's not going to work, because there's no infrastructure that can process a million transactions a second, except the mainframe. And if you need a million transactions a second to process, as do Walmart, as do Bank of America, as do Mastercard and Visa, then you need a mainframe. There's nothing else that does it. Nothing can even think about it. It can't even contemplate doing that, because the architecture will not support it.

**Adam Stacoviak:** I wanna throw TicketMaster into that mix too, because I tried to get my T. Swift tickets and I just could not do it. Come on...! Anyways...

**Cameron Seay:** Yeah, I heard about that, man. Now, if there was a mainframe, that problem would not have happened. Because see, the mainframe scales vertically.

**Adam Stacoviak:** Is that right? Okay...

**Cameron Seay:** It would not have happened, because the mainframe scales vertically. It doesn't scale horizontally at AWS and Azure. They scale horizontally, and they do so very beautifully. But when you talk about scaling in the cloud work, you're talking about more servers, more wiring, more cable, more space, more connections, more wiring... With a mainframe, you're just talking about adding a processor, and keep it moving. And worst case, bringing another box to double the capacity, but you're only talking about the size of a rack. These things are conventionally racks today. So you're talking about a mainframe taking no more space than a rack of conventional servers. So it scales vertically instead of horizontally. That explanation -- I forgot your question. I don't know what your question was. I hope I answered it.

**Adam Stacoviak:** No, it does. It does. It's interesting to bring this show to the Changelog, because I think to talk about mainframes in this day and age - it seems like we shouldn't.

**Jerod Santo:** Antiquated.

**Adam Stacoviak:** Exactly. It seems dated, it seems like "Wait, isn't that old? Isn't that busted?", essentially. And clearly, it's not. But defining what a mainframe is, and understanding that you can't just string together a bunch of PCs to create -- a mainframe is designed transactionally to be very precise, very... Timing, and stuff like that. That makes a lot of sense.

The interesting part I think is -- there's two sides of it. There's the hardware side of it, and there's the software side of it. But then particularly once you get to the software, what language is still relevant? It seems COBOL is still the leader in mainframes; I'm curious why... But from a hardware standpoint, what exactly is a mainframe? Is it a bunch of hard drives? Is it a bunch of CPUs? Is it like an insane power supply? What is a mainframe itself, hardware-wise?

**Cameron Seay:** You ask really good questions. I can tell you guys are a couple of young techies, because you know how to find out stuff you don't know. You ask really good questions. So I will tell you, without getting into the weeds too much, when you talk about a mainframe you're simply talking about a processor. That's what you mean, is a processor. That's where all the magic is. In a mainframe, the general processor.

Now, the mainframe's key to success is that it offloads as much of the workload as it can to something other than the general processor. So something else -- the only instructions the general processors are running are the ones it absolutely has to run. Like, backups can run in the background. That networking isle - that goes on somewhere else, in something called Open Systems Adapter. That's not run on a general processor.

DB2, the database, is a subsystem. I don't know if I used the term subsystem, but that's what these things are, subsystems that run below the general processor, while that general processor is doing its work. So it is very, very efficient, and you use close to 100% of the instruction cycles. Whereas on a PC, on an Intel -- and you know, my lectures never disparage any technology that's not mainframe. This is not a competition, it's not a comparison. Each technology does what it does well. But from a processing instructions standpoint, AMD and Intel are very inefficient. Now, they don't see themselves inefficient. They see themselves as efficient as they need to be, because they get the job done. But mainframe people are like "Okay, you're wasting 80% of your cycles? Are you crazy?" Mainframes don't waste 5% of their cycles. So it's very, very efficient technology, and everything built in.

\[00:14:04.27\] Now, storage is always a separate issue. That refrigerator box that we call the mainframe - your storage is never physically on that box. You RAM is, your local storage is, but your long-term storage disk is somewhere else. Usually connected via fiber. Always connected via fiber. So that's what a mainframe is, is just a processor --

**Adam Stacoviak:** A big 'ol processor. Wow.

**Cameron Seay:** Yeah, a big 'ol processor that has a whole bunch of subsystems connected to it. That's it.

**Adam Stacoviak:** Yeah. I've gotta imagine the reason why it's also probably something where you don't wanna waste cycles is because it's so expensive... So there's time and cost, right? You've got the idea of time-sharing back in the day, like when you first came into programming, and needed to punch cards like Bill Gates back in the day... He had a time share, because these things were so expensive. I've gotta imagine why you don't waste cycles... Because one, you wanna be efficient, and then two, it's just extremely expensive to scale vertically, even if you can, it's just so costly.

**Cameron Seay:** Yeah. I don't know who told you that IBM charged by the cycle, but that's how they charge. So it's cheaper, yeah.

**Adam Stacoviak:** Is that right?

**Cameron Seay:** It's efficient. Yeah. But that's by design. It was designed to be as performant as possible, whereas -- and see, it's not a comparison which one is better. Intel and everything else on the mainframe - its purpose is to be available, to be cheap and to be accessible. That is why Intel processors are created. That is why Windows as an operating system is intended to be cheap -- well, you can debate cheap, but available. Accessible.

**Adam Stacoviak:** Right. Affordable, yeah.

**Cameron Seay:** Accessibility for the mainframe is an afterthought. "We're gonna build what needs to be built, and then you figure out how to get to it. You figure out how to pay for it. We're gonna do what needs to be done." It's just a different way of thinking. One is not better than the other, it's just a different way of approaching the situation.

**Adam Stacoviak:** So how is the mainframe world then different or the same as high-performance computing? HPC seems very similar in terms of like availability, and time sharing, and cost... And even form factor, in terms of like being the size of a rack. They're very similar based on the description.

**Cameron Seay:** Yeah. That's a common thinking, that there's some synonimity between mainframes and a supercomputer. But they do different things. What a supercomputer does - it takes problems down and then breaks them into digestible pieces that it can work in parallel. A mainframe doesn't do that. A mainframe runs on a single thread or a few threads. So parallel is gonna use as many threads as it needs to get the job done, and the \[unintelligible 00:16:28.01\] So you put the pieces together on the other end, but they don't necessarily have to be in sequence. I mean, if you're doing some type of imaging, they don't have to be in sequence until they get to the destination. Then you can assemble them. But with a mainframe, you have to do everything in sequence. So they have different workloads. Their intentions are different.

**Jerod Santo:** So ballpark for us... We say it's very expensive. Ballpark for us what it would cost today for IBM's latest mainframe, to acquire and operate one of those for a year. Are we talking hundreds of thousands, millions, 50 bucks? What's the ballpark?

**Cameron Seay:** Yeah, you're talking millions. You're definitely talking millions. So I'll tell you this - the IBM answer for everything is "It depends." Of course. But I'm gonna give you a real number. When I was at North Carolina A&T, we were using the IBM software stack for free. So I had a project where I needed some in kind support, and I needed to put a value on the software I was using, which IBM doesn't wanna do - it was like 5 million dollars per year. Just for the software. And that was a real number, because IBM doesn't give you something if it's not a real number.

To acquire the machine, at least -- I mean you can trick it out... I don't think you can have any serious implementation for less than two million. I could be wrong about that... But now, understand what you're doing. You've got to weigh the total cost of what it is you're trying to do, against another way to do it.

\[00:18:02.20\] So while a rack of servers might be a lot cheaper than a mainframe - well, how many racks do you need? I tell people all the time - I can move an inventory of goods from Durham, North Carolina to Los Angeles, California in my SUV. How many trips would it take me? Is my SUV cheaper than a Peterbilt? Absolutely it is. How many trips will it take me? A lot of trips. How much time would it take me? ...where I can take everything in a Peterbilt. So it depends. But to give you a number - so five million was the value of what we were using, and we were just using generic stuff; we weren't using anything sophisticated. And probably two million to get in from a hardware standpoint.

But IBM - they have variety, they have an infinite number of plans... We're talking millions, we're not talking hundred thousands. We're talking millions.

**Jerod Santo:** Okay. So orgs, companies that need a mainframe - they already know it. They're well aware. They have huge revenues, they have huge problems, they have transactional problems specifically, that a mainframe can solve, so they're up and running... Which - like you said, approachability is not necessarily the point here.

From a software side, what's interesting to me is - like, you have 75 students this year, you're colleague that you named has 80 students... There's people that are still enrolling, taking classes, learning this stuff. COBOL, I've heard - you can confirm or deny this - all the COBOL programmers are basically retiring, or sadly passing away... Like, they're aging out, the ones that help get all these mainframes established, and build the software in these complex systems... And there's like this growing underground demand for COBOL, which makes it a very interesting language, for that one reason - you're gonna have demand. Is that true? Is that why people are still enrolling in these classes?

**Cameron Seay:** That is absolutely true. And it's gonna get worse. Now, there is not a critical shortage now, even though there may appear to be one; the people that need COBOL programmers don't know where to find them, but they're people like Bill Henshaw and other people like that who have identified this horde of people that are available to work, but they're aging, and no one is teaching the language.

**Jerod Santo:** Right.

**Cameron Seay:** There's 17 campuses in the UNC system, ECU is the only school teaching COBOL. And my colleague, Geoffrey Decker, who has more students \[unintelligible 00:20:13.18\] Other than him, there's just a few of us. I don't know anybody teaching COBOL. I don't know anybody teaching it.

**Jerod Santo:** Yeah. I don't know anybody learning it, until speaking with you and seeing your students. So is COBOL the only player in the game though? Are there other ways of communicating with mainframes that isn't learning COBOL? Can we have like a translation layer between JavaScript and mainframes, or something that everybody else is learning already?

**Cameron Seay:** Well, that's interesting... A mainframe would ask you "What do you need that for?", but I get your point. We're doing more stuff on the mainframe now in Python... I'm in good with the IBM compiler team in Toronto, Canada. Well, Toronto -- everybody knows Toronto is in Canada. I didn't need to say that. But they're younger guys, they're 20-something, 30-something... Now, can they write COBOL? Absolutely. These guys are young geniuses. Can they do Assembler? We need to talk about Assembler. But we're doing more and more stuff in more conventional languages. Also, we're doing a lot of COBOL in Visual Studio and an Eclipse-based IDE called IDz. So we are bridging that gap, Jerod. But mainframes - I'd say that gap doesn't really need to be bridged, but... To your point, yes, we're bridging the gap.

**Adam Stacoviak:** Well, I think IBM wants to sustain their ability to operate at that financial clip, right? So somehow you've gotta backfill the primary language that drives the mainframe. And if it is true that there's an age-out process happening, and a lack of teaching, and then just by nature less coming in, we're gonna eventually have some sort of problem if these machines are so critical to large-scale business. As you mentioned - I don't know if it was in the show or in the pre-call, but many transactions that you're doing on a daily basis are happening on a mainframe, whether you know it or not. At some point, these things are critical functions of society.

**Cameron Seay:** Yes, they are. They keep the global economy running. And the companies are seeing it now, but they just aren't depending on the universities to fill that gap, and I don't blame them. My students all get jobs; they all get great jobs. But there's not enough of them to go around. So companies are looking at alternate methods, and there's some pretty successful methods that they're employing... But the need is there, Adam. And companies are aware of it now; they're feeling it. IRS - they want us to train 600 people, yesterday. So they need a lot of people.

**Break:** \[00:22:43.14\]

**Jerod Santo:** So let's say, hypothetically, on this point, if I'm a working developer - let's say I'm a Java developer, I work in enterprise, I make my 80k to 150k a year, I've been doing it for a while... Is there a reason for me to go out, maybe take some night classes, pick up COBOL? Would I be able to increase my salary potentially, or like really upgrade by adding this skill? Or is it kind of like "Well, you're already making that much. You're gonna make about that much"? What do you think? I know it's different in different areas...

**Cameron Seay:** That is a very good observation, Jerod. And I would not say that somebody that's a seasoned Java or C++ developer needs to add COBOL to their portfolio, but I would say that -- first of all, they wouldn't need to take a class. They could just do some self-study, if they're a seasoned developer. They may need some help on the mainframe piece, because you've gotta know how to use it on a mainframe... But I would just add it to my repertoire. I don't know that we'd get you a higher-paying job, but it's gonna expand your options. And if the need gets critical enough -- because my folks are getting like $65/hour now. Now, you know, in the Java world you can get that. You're getting that if you know what you're doing.

**Jerod Santo:** Yeah.

**Cameron Seay:** Now, from a career standpoint, I will say -- let's dehypothesize a little bit. Let's say this is a 26-27 year-old developer, with 4-5 years in the game. I would definitely recommend for them to retool, to expand their skillset. Try to get on a mainframe career track, because I'm pretty sure the upside financially in the long-term is gonna be better for them in the mainframe space than where they are.

**Jerod Santo:** Do you think so?

**Cameron Seay:** It's just arithmetic. There's more people that know how to write Java than there are who know how to write Assembler. So your skills are more valuable. And what I'm seeing is a lack of managerial expertise. So these enterprise-wide decisions about moving to the cloud etc. these decisions are made in complete ignorance of what the mainframe is and what the mainframe does. So people that understand the mainframe can help the company make better long-term infrastructure decisions. The mainframe is not right for everything, but what it's right for, it needs to be used. If you have a mainframe workload, you need to be using the mainframe. No argument about that.

**Adam Stacoviak:** Okay. So you have a managerial opportunity there, if not a direct implementation opportunity there... So what kind of decisions are being made out there, that are going towards cloud (I guess) options that are better suited for mainframe? What kind of workloads?

**Cameron Seay:** What I'm seeing a lot of is trying to put things on Azure and AWS. I'm a daily AWS user. I have nothing bad to say about AWS. But it's just not gonna run mainframe workloads unless you have a mainframe there. So I'm seeing a lot of that attempted.

There's kind of a famous case study now at TSB Bank out of Canada. They tried a migration and it ended up being an utter catastrophe. I think it's salvageable, but it cost them a lot of money. It should not have been attempted. So those types of decisions, Adam.

I'm not saying -- look, if you have an application that's gonna run fine on a cheaper platform, that's not as expensive as a mainframe, you'd be crazy not to. But you've gotta be really careful about trying to put things in the cloud proper, that actually belong in hybrid cloud, with a mainframe somewhere. So that's what I'm seeing; I'm seeing a lot of that.

**Adam Stacoviak:** What's the API, I suppose? Does the enterprise often own their own mainframe, or are they borrowing time? You mentioned before the amount IBM charges per cycle, I believe... Am I essentially renting time, or am I buying the full thing? What's the common path? And is it simply an API call to run the workload there, and then data out and ingest somewhere else? How does it work?

**Cameron Seay:** \[00:28:08.23\] Both... I see probably many more leasing machines than I do actually buying them outright. But companies do buy them outright. I don't know the cost figures well. Now, exactly what are you looking for in terms of API? Do you mean to get to the machine, to run the application on the machine, is that what you mean?

**Adam Stacoviak:** How do you put your workload on the machine, essentially? What's the -- I guess API is the common term, but I specifically mean how do you interface with the mainframe to make the workload go?

**Cameron Seay:** I know exactly what you mean. So there is kind of a default interface called ISPF; Interactive Systems Productive Facility, or something like that. I can tell you what it means, I can't tell you what the words mean. But ISPF is like the default. Now, it's very old-school... It is the green screen, although it's not green anymore; it's different colors. But it's what you would call a green screen. That is probably still the interface of choice for mainframes. That's what I teach. But I am seeing now they're doing a lot of -- there's a RESTful plugin called Zowe, that runs, that you can use to connect to ZOS. ZOS is an operating system. So Zowe connects -- and Zowe is written all in REST. It's web-oriented, you can write to it through Python, Java, whatever you want. Or Assembler. So you can do all your development in Visual Studio, VS Code, and then run it on the backend, on the mainframe.

We connect to the machine usually with a 3270. 3270 is a monitor type. We have an emulator for that. So that is our classes connecting to the mainframe. That presents us that ISPF interface. But there's all kinds of Eclipse-based interfaces to it now... The mainframe is very accessible. And I'm on the Open Mainframe Project, so we look at using open source mainframe... Because Linux runs on a mainframe great. I use Linux on mainframe all the time.

**Jerod Santo:** I was just gonna ask that. We noticed that on IBM's website, that you can run Linux on it, and I wondered if that was kind of missing the point or not. Like, does it make sense to get a mainframe and then run Linux on it?

**Cameron Seay:** Oh, absolutely. Absolutely. I'll tell you when it does, Jerod... ADP, for example - they've got an instance, they have 4,000 virtual Linux servers doing their business. A guy by the name of Phil Scully, he's the manager of that. So yeah, it makes a lot of sense. Plus -- see, we don't have enough time to get into the business of this. There's a lot of business involved in this, for a variety of reasons. There's a lot of history to this, there's a lot of politics to it. You can run Linux on a mainframe a lot cheaper than you can ZOS. And that's just because IBM says so. Things are expensive because IBM says they're expensive. But if I've got an application running on COBOL in ZOS, it's entirely possible I can take the same application, run it on Linux, on the mainframe, in COBOL, at a lot lower cost. I do see that happening. But no.

And by the way, just so you know... You guys don't know this, but by far -- both of you are familiar with the concept of a hypervisor. IBM's hypervisor, z/VM, is by far the most powerful hypervisor on the planet. There is nothing close to it in terms of performance, in terms of security. Now, I don't say that to malign VMware. VMware is a nice product. But the comparison is worse than comparing Windows to Linux. It's that great. z/VM can do things that VMware can't even dream of doing. In the mainframe world they call them guests. They don't call it virtual machines, they call them guests. One guest is never gonna bring down another guest. That's never going to happen. The guest is completely isolated. Now, I know that's an issue in the VMware world; it has been improved upon later, but I remember that used to be a big issue. One virtual machine could take down a whole sector. So that doesn't happen in the mainframe space. Not at all.

**Jerod Santo:** \[00:31:53.10\] You mentioned IBM names their prices, and that's obviously just because of the circumstances; they are the king, and you serve at the honor of the kind, so to speak... Has that ship sailed? Is there an opportunity? Because all you would need is one competitor. You'd need Pepsi to their Coke to really keep IBM in check, and maybe make this stuff more economical in general... Or is that just never gonna happen? These companies tried and they failed, and IBM is just gonna have that little monopoly, and sit on it? What do you think?

**Cameron Seay:** I'm a tech guy like you, I don't use the term "never". I don't know. I can tell you what I can foresee. I don't foresee any competition from a technology standpoint, because it would take hundreds of billions of dollars in R&D to do something like what the mainframe does, in my opinion. What I do see in competition is competing solutions. Everybody's always trying to figure out how to do these transactions, and there is a company called LzLabs that swear to God they've figured it out. Now, they're in court right now with IBM; I was part of the case. The case may have been resolved. I don't know. They're in court with IBM right now, because IBM says "No, you're telling lies." But to answer your question, Jerod, I don't really see a competing technology. I see competing solutions. That's what I see.

**Jerod Santo:** I see. That makes sense.

**Adam Stacoviak:** Well, I asked that question earlier about how do you interface with the mainframe itself to consider maybe AWS mainframe being a thing at some point. I mean, AWS loves to compete with everybody, and eat everybody's lunches, so I've gotta imagine at some point they will just give out some sort of interface to a developer, or to a team.

**Cameron Seay:** Oh, wait a minute, I didn't wanna imply -- I mean, AWS is involved with several hybrid solutions involving a mainframe. It's just not a textbook solution. It's just not the standard. A good friend of mine was a senior vice-president at AWS \[unintelligible 00:33:41.26\] They're not jokers. Those guys are great. So they are working on a solution where people can -- and AWS is not trying to do what the mainframe does, but they're trying to provide pipes. This thing is not necessarily about what you're running on, it's about where it's running. Is it on-prem? Is it remote? How secure is it? How reliable is it?

So yeah, I do see people coming up -- it's not that AWS is not in the game, or Azure is not in the game. They're not Johnny Come Latelies; they're working on this stuff, and they might find something that takes the mainframe out. I don't see it, but it could happen. That's why I don't say never.

**Adam Stacoviak:** Right. What about the flavor of Linux? How specialized Linux -- what distro is it? What distro is running on the System Z mainframe?

**Cameron Seay:** I'll tell you what I've run on it. I've run Ubuntu, I've run Suse, I've run Red Hat, I've run Debian -- I mean, I know Ubuntu is Debian, but I've run pure Debian... Just about every major distro, there is a port for -- it's called S390. S390 is the port. And you just port it.

My favorite one is Ubuntu, because I like Ubuntu. Ubuntu runs exactly the same. I've got Ubuntu on AWS, Linux on AWS, I've got Ubuntu on the mainframe. I've noticed no difference.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Which is awesome. I've gotta imagine at some point the Linux Kernel people or those driving those distros are gonna wanna have access to a mainframe - or maybe they do, I don't know - to sustain the support.

**Cameron Seay:** Well, it used to be -- I don't know if this is true now, Adam, but it was a fact that 12% of Red Hat's revenue came from the mainframe space. I don't know if that's still true.

**Adam Stacoviak:** is that right?

**Cameron Seay:** Yeah, 12% of their revenue. I knew the guy who was over there, Brad Hinson. They had a huge mainframe -- IBM used to give them mainframes so they could run stuff on it. So yeah, they've been in -- and I don't know if they still are... And that was part of IBM's willingness to buy them, because Red Hat worked more closely with IBM than Suse did. Suse in the business of mainframe computing - which is a thing; business mainframe computing on Linux is a thing... Suse is a top dog. But Red Hat had courted IBM more carefully. So that's why there's a port for Red Hat. And that contributed to IBM's 34 billion dollar \[unintelligible 00:36:03.02\] because they felt they knew enough about Red Hat to make it -- that's not the only reason; I know there's a lot of reasons, but that was involved. I had a conversation with both ends.

**Jerod Santo:** \[00:36:12.11\] Yeah. Smart by Red Hat. So you mentioned earlier the Open Mainframe Project. It seems like we're talking open right now... Can you dive into that and tell us what that is?

**Cameron Seay:** Absolutely. It started I think in 2016, with several large companies using mainframe. IBM was one of them, CA Technologies at the time, before they've been bought out... ADP, and a couple of other companies. My university, North Carolina A&T was involved... So it was just an attempt - or it is an attempt - to promote and report on the use of open source software in the mainframe space.

Now, I initially had a problem with that, because our focus was Linux on the mainframe, right? Which, Linux on the mainframe doesn't run -- it runs on a proprietary operating system, z/VM, that's owned by IBM. So that's a conflict right there. But my \[unintelligible 00:37:03.20\] is you can actually take Linux out of the disk and pop it in a mainframe and install it. So it's true, Linux is truly open source on the mainframe.

And we're getting together, we have projects... Zowe was a manifestation of that. I'm a member of the COBOL Working Group, I'm co-chair of the COBOL Working Group. We have published a survey about misconceptions of COBOL etc. So we're very busy promoting open source software in the mainframe space. It's a lot of fun, too. I'm on the governing board, by the way.

**Jerod Santo:** That's cool.

**Adam Stacoviak:** I saw your name there, second on the list.

**Jerod Santo:** Boom. Always second there, Cam. Always second.

**Adam Stacoviak:** You're second, again. \[laughter\]

**Cameron Seay:** With those guys, second is just fine, because these guys are really sharp. I look around, "What the hell am I doing in this room? I don't belong in this room." But I like hanging out with them. They're super-sharp guys.

**Jerod Santo:** I feel like that a lot on this show...

**Cameron Seay:** Yeah, yeah.

**Jerod Santo:** That's very cool. So you've mentioned COBOL again... Let's loop back around to COBOL. So you said you've published something about misconceptions? I mean, I don't know a lick of COBOL, but I have misconceptions, I'm sure... And it generally is frowned upon by us modern developers. Can you tell us about COBOL, and maybe help us fix some of our misconceptions about it as a language?

**Cameron Seay:** Gladly. Gladly. The paper was authored by my -- the first author was Maggie Hall; she's a professor in Austria, but she's an American... And it just listed the -- I don't remember what they are right now, but they were... I mean, obviously, you'll link to the paper... It was like five misconceptions, and like, nobody uses COBOL anymore; so many people said nobody uses it anymore. Or it's hard to learn. So those things. A lot of misconceptions. People just don't know -- and you didn't ask this question, but let me fill in the blanks a little bit and explain to you why COBOL is used so pervasively.

So first of all, COBOL was not intended for computer scientists and mathematicians. It was intended for businesspeople. It was developed for back-office people, so they could write programs. So it uses language: perform, do until, read, write... It's not cryptic at all; it's business English.

Also, its procedural nature makes it very efficient to process raw data. So if I've got a block of data that I've gotta chop through, the terseness of COBOL syntax where the processing is concerned - you know, no layers of stuff to go through, just code and data. Just code and data. And COBOL is very tightly interwoven to Assembler, so it's almost an Assembler-like language... So it's very efficient.

The object model - people ask "Why don't you rewrite everything in Java?" Well, that's not gonna gain you anything, because the object model doesn't bring anything to the dance in terms of the nature of the data that COBOL processes. There's nothing to adding classes, or the modularity that Java brings to that; it's not gonna add anything, it's just gonna increase the complexity of it. COBOL is very terse, and very simple, and it's a very easy language to follow. So it became by far the language of choice for the entire world for about a 30-year run before Java.

**Jerod Santo:** \[00:40:10.09\] So I do have a friend of mine who works at a large credit card processing company, that still runs on mainframes, and probably always will... And feeding into this whole like there's this underground demand for COBOL developers or mainframe developers, he says that there's a handful of people - and this is like a Fortune 1,000, maybe Fortune 500 (I'm not sure) company... He's like "There's a handful of people here who understand this system." And it's not COBOL the language, it's like the actual nuts and bolts of how this business runs through the mainframes. And he's like "Maybe there's a half a dozen; that might be gracious. Maybe there's three people in this company of thousands of people that actually know this thing. And if they're not available, or they're gone, or whatever, we can't do our jobs lots of times." He's a programmer there that works on internal tooling; he's not a mainframe guy. Is that the case at a lot of these big orgs, where it's like -- gosh, it's the domain knowledge that seems so valuable. Of course, you could pick up COBOL, and you can learn how to talk to a mainframe, but is it the domain knowledge that's like so gnarly and so ingrained, and so many lines of code of it at these large orgs, that are gonna keep you busy for years, but also might -- maybe the knowledge of how they work might disappear with a bus factor of one.

**Cameron Seay:** That's my fear. And you guys are really good. Both of you guys ask really, really good questions.

**Jerod Santo:** Well, thank you.

**Cameron Seay:** I'm very impressed with the nature of the questions. I see Adam shaking his head... Dude, don't \[unintelligible 00:41:34.05\]

**Adam Stacoviak:** I love it.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** It's like three times this time, Cam. You're like our best friend now, man. You're invited back every week.

**Cameron Seay:** Yeah. \[unintelligible 00:41:42.17\] somebody's programs have been around for 30 years, and they've not been static for 30 years. We've changed some business rules, changed the program. The logic of the business is intertwined in the code, right? It's intertwined in the code. And you're absolutely right, there's only a handful of people. That's my concern now, is I wanna produce a managerial class that understands this stuff. And look, I'm not emotionally attached to the mainframe. I've had a great career because of it, I'm pretty well known because of it... But if it goes away tomorrow, if it's replaced by something better, I'm good with that. I just don't want it replaced with something that's not better.

So we need to retain \[unintelligible 00:42:24.18\] Because the transition may not be from one generation of mainframe to another; it may be from one generation of mainframe to something else. But that business logic has to be incorporated into that transition, or it's going to be very messy, and very ugly.

**Adam Stacoviak:** So how then do you attract developers into this world then? What is some of your personal mission and what do you think could be the mission of others to bring more folks into this fold?

**Cameron Seay:** I've had no problem -- now, maybe I'm just super-smooth, maybe I'm a pimp and don't realize it...

**Jerod Santo:** You're pretty smooth... \[laughs\]

**Cameron Seay:** ...but I've never had problems attracting students to this platform. And it could be because -- now, let me tell you a little something about me. This is gonna take a minute or so... But I was an IT guy for like 21 years, in a variety of roles: coding, networking... I did it all. Management stuff, which - I didn't like management, because I didn't get to play with stuff enough when I was a manager. But I went into education; that's a long story, we don't need to get into it... But I love it, I love it, and I started educating at historically black colleges... Because I went into education unabashedly, unapologetically to educate black people about technology. That's why I went into education.

Now, most of my students now are not African-American, and I don't care. If you're one of my students, I don't care who you are, I don't care where you come from. I don't care what you look like. All I care about is you're in my class, and I'm gonna do the best I can for you. But that type of attitude, plus I'm focused on them getting jobs. I'm obsessed with it. That's how I keep score. I keep score on how many of my students are leaving my class and going to work. That's how I keep score. And I don't know a lot of professors that keep score that way, and they should. They should. Especially in the tech space.

\[00:44:09.15\] So students know that about me, they know I'm about nothing but them getting a job, or furthering their career... And look, I don't care whether you work in mainframe or not; I want you to have a good job in tech, because tech can be a rewarding career, and it's not for everybody.

But no, so I don't have problems getting students. Why other people do, I don't know, because this stuff is compelling. If you tell them "Look, you're gonna get to work on the most sophisticated business technology in the world, and you're gonna get to make a lot of money" - that pretty much is all it takes.

**Adam Stacoviak:** Mm-hm. What are the prerequisites then for a good student for you?

**Cameron Seay:** That's a good question. My expectations are different for a college program than for a bootcamp. Bootcamp - I'm gonna meet you wherever you are. You've gotta be able to read and write English at the 7th grade level. You've gotta be able to do that. If you can do that, then we can start, no matter where you are. Now, for college students, a good overall background in IT basics is gonna be helpful. You really don't need anything to take this course, but the more you know, the more it's gonna make sense to you.

I had a woman who had a degree in social work. She had never written a line of code in her entire life. She went through four weekends, four-weekend bootcamps, Saturday and Sunday, and now she's a junior assistant programmer in \[unintelligible 00:45:28.23\] So it can be done. But she is unusually focused and unusually mature, but she had no background. She had no background. So that's the attitude. But to answer your question specifically, Adam, the right attitude. That's it. The right attitude.

**Adam Stacoviak:** Okay. And in terms of salary - maybe that's what draws somebody to it, but I think one, it's the opportunity, but then also the financial upside to that, too... If you're in that critical of a role for a company, you've gotta be looking at executive level at some point, or some sort of ladder, rather than just simply mainframe grunt kind of thing. I've gotta imagine that's gotta be a lure to some folks...

**Cameron Seay:** Yeah. I've got several students that are vice-presidents now, so they're making north of 200k a year. I've got folks going into sales now, they're doing 200k a year. So it just depends on who you are. I tell my students, don't compare yourself to anybody, just figure out what you wanna do. But you're right, the upsides are virtually unlimited. I'm very proud of my students, they're crushing it out there. They are crushing it.

**Jerod Santo:** You said you wanna train a managerial class... What exactly do you mean by that, and then what's your strategy to train the managers?

**Cameron Seay:** That's a good question, Jerod. I don't have a strategy to do that, because of the nature of the courses that I teach. Now, I used to teach a graduate-level course in mainframe at A&T, and the \[unintelligible 00:46:44.05\] was a little different. We looked at case studies, we looked at strategy, we looked at other things other than just getting the skills.

For this undergraduate course I just needed them to build some simple chops in the space. So I'm not gonna get into the managerial conversation, but it's gonna be part of -- and to answer your question, I don't really know how I'm gonna do that now; I do know that some of the students, a certain portion of them are moving into management... So that's what I want to happen, because as they ascend up the ladder, then they take this understanding with them. But how I'm gonna do that from my chair right now, when I don't teach graduate courses, I don't know; I don't have an answer. I want to. But if I teach a graduate course, that's perspective -- I'd take a strategic perspective when I teach a graduate course.

**Jerod Santo:** Gotcha.

**Cameron Seay:** Can y'all tell I love doing this? Can y'all tell that?

**Jerod Santo:** I love it. I'm eating it up over here.

**Adam Stacoviak:** You've got some energy. I love it. I love the energy.

**Jerod Santo:** I'm curious what your bootcamp looks like.

**Cameron Seay:** Okay, so let's talk about the one that -- the most successful one we had was this summer, and I use it as a template model, because I think this model is optimal... So we had ten students - we lost two, but we had ten students for 12 weeks, starting in (I think) the end of June, going into early September. So there were ten weeks, six hours a day in class, five days a week. It sounds like a lot, but we broke it up: three hours of lecture in the morning, three hours of lab in the afternoon, so the students didn't get burned out.

\[00:48:03.20\] A mix of people, some of them were college grads, some of them had not been to college at all. And the first three weeks were ZOS essentials... Because we were contracted by a bank to prepare these people to join teams after 12 weeks, so we took that challenge. And then after that, six or seven weeks of COBOL, and then a two-week project. And that worked very nicely.

So they'd come in at nine in the morning, and go through twelve, take an hour for lunch, and come and have lab in the afternoon. And the labs are open; it's not tedious. The lectures can be a bit tedious, but you've gotta have lectures. But to me, that's the best model.

Now, the other model I used was Saturday and Sunday, from (I think) 9 to 4 in the afternoon, four weekends. But you can only cover so much. But that's all the time we had. But those people got jobs, too. So there's all kinds of ways to do it.

**Jerod Santo:** So the eight that survived, did they all find work, the eight that survived the full-time one?

**Cameron Seay:** Yes, they all went to work. The day after the camp -- the camp was over on Friday, and they all worked that Monday.

**Jerod Santo:** Nice. How many of you are there? How many Cameron Seays are there? Because it seems like if we could replicate that education process, we could maybe get this -- this growing demand, maybe we could find more people, more opportunities if there are more of you teaching these courses.

**Cameron Seay:** Well, I know of one who's a better Cameron Seay than Cameron Seay. His name is Geoffrey Decker. He teaches at Northern Illinois University, and he's the guy that has 88 students. He's been doing this for like 21 years, and he's a wizard. He teaches Assembler, too. I don't teach Assembler. I need to learn how to teach Assembler.

But I don't know, I mean -- there's another one of me, Herb Daly, a Brit in the U.K, a black gentleman. He's doing things. But there's not a lot of us. And I understand why that is, because you've gotta be insane to do this. What I'm doing, you've gotta be insane. I did not get tenure at two universities because of this stuff, because the departments didn't understand what I was doing. They're like "This is old. Why are teaching kids this old stuff?" Because they're coming out and making 85k, 90k a year, that's why I'm teaching them this.

**Jerod Santo:** Right.

**Cameron Seay:** Go tell Bank of America this is outdated. Go tell IBM this is outdated.

**Jerod Santo:** \[laughs\]

**Cameron Seay:** Yeah, go tell them that, yeah.

**Adam Stacoviak:** Yeah. What about the ancillary business opportunities? So there's two financial measures I see happening here. Obviously, IBM is selling software. ZOS - expensive, obviously. The hardware - they've cornered it, they are the mainframe, based on your description of what a mainframe is. It's IBM's Z System mainframe. So they own that. They're the largest inhibitor of all this money coming into this world. Obviously, the data centers are raking it in, because they've gotta put the stack there, in all these different things... And then you've got the other opportunity, which is developers coming in to make money, which - no knock against the salary, but it's not millions. It's not a multi-million or billion-dollar business, like IBM is running.

So is there a world where I get skilled enough, or a business can be propped up where I buy a bunch of these mainframes and I host them for people? Is there any other business opportunities around the mainframe that isn't IBM selling the mainframe, or me being an IC in the world?

**Cameron Seay:** What are you talking about? Are you talking about a small universe? That is a very small universe. But I know a couple of \[unintelligible 00:51:22.21\] that figured out exactly what you said, years ago. There's this one guy, Sunny Gupta. Sunny does this stuff globally. He buys old Z9s; now, it may be a newer machine now, but Z now is like an old machine, back in the day. This is an old machine. But a mainframe is still a mainframe. So he does hosting, he does training, and he'll charge you $500 to use his machine. And it's not costing him anything, because Z9 is just a glorified electronic \[unintelligible 00:51:51.02\] A Z9 has no commercial value whatsoever. But he's making money on it.

Another guy, my friend Barton Robinson, he buys his own machines and he runs kind of hosting services on them.

\[00:52:07.07\] So there is a business model. I don't know how standardized it is, Adam, but Sunny Gupta seems to be doing exactly what you said. He has machines all over the place, and he'll train you, he does a lot of training too, he does a lot of contracting for training, and he'll host your application. So yeah, it is done.

**Adam Stacoviak:** So if I'm an enterprise buying in the mainframe, I'm probably buying from IBM. I'm not buying from these folks you've mentioned. This seems to be sort of a side thing, not the main business of mainframe.

**Cameron Seay:** Yeah, you're not buying it from Sunny Gupta, but IBM of course does have resellers on the retail part of it, so you might go through a retailer. If you're buying a Linux machine, you're gonna go through a company called Vicom. But it's not exactly what Sunny does. I don't think Sunny does that. But yeah -- and I don't know if IBM sells to anybody directly anymore. I don't know that part of that business that well. I used to know it pretty well. I know people that do.

The business model is very intricate, and it's a lot of nuance to it, and a lot of secrecy, and IBM is very careful with their figures that they share, so I really can't tell you what type of secondary after-market opportunities are there, but I do know that there are people that are exploiting some.

**Adam Stacoviak:** And IBM is the only company making these machines? There's nobody else out there competing on the hardware?

**Cameron Seay:** No. On the hardware, no.

**Adam Stacoviak:** That's monopoly.

**Jerod Santo:** What does it look like to get into this industry? I'm going back to the indie dev, the person who's like "You know what? I'm gonna take this up." Do you have to move to Carolina and take your course? Do you have to be in a city where these large orgs are, like Bank of America, like where the headquarters are? Is there remote work? Are there trainings online? How accessible is it to get in, and what would my steps be if I wanted to get in?

**Cameron Seay:** So the last - there are three women that I know, none of them \[unintelligible 00:53:51.06\] and they all came in the backdoor, and they all came in different ways. Self-study is a lot of it; there's a lot of self-study. You might try to get picked up with an apprenticeship. The apprenticeship model is pretty hot, because you come in at like 60%, 70% of the salary, but you have benefits from day one... And it's almost like guaranteed. Unless you step on it, you are gonna get hired. So I see that model.

But to get prepared for it, self-study. You can do self-study. You're gonna need mentoring. It is best -- you're best off if you can take one of my classes, so you have somebody like me to walk you through this space, introduce you to this space for a semester. But I'm not necessary. There's a whole lot of people that get started in this game without me. I'm meeting them after they get into the game. I've met these ladies after they were already set up. So there's ways to do it, but it's gonna take some tenacity.

**Jerod Santo:** Are there any self-study resources that have your stamp of approval, or they're like best-in-class? Like, we can point someone to a website, or to a course?

**Cameron Seay:** Yeah, I'll send you a list, but off the top of my head, the COBOL course at the Open Mainframe Project is a great place to start. And then there's this thing IBM does called Z Explore. That's like the default. That's the starting point for everybody. It's like a series of challenges. It's like a treasure hunt, and it's great. And both of those are free. So yeah, that's a great place to start. But there are a bunch of good self-study out there.

**Adam Stacoviak:** I'm seeing this now; there's an active project, this COBOL programming course, there at the Open Mainframe Project... And I'm also seeing this mentorship program. Do you know much about that?

**Cameron Seay:** I do. I know quite a bit about it. So what we do is we take on projects and we give it -- I don't know who on our team changed that from internship to mentorship. I understand why they did it, but it's actually an internship program. It's a paid mentorship.

So that program is to get the mentors, but they're going to be working with mentees that are part of the mentorship program, and they get paid. So they have projects, companies submit projects, and they work on the projects for a certain period of time, ten weeks or whatever. It's really cool. A couple of actual distros have actually come out of that program. Linux distros for the mainframe, one called Alpine.

**Adam Stacoviak:** \[00:56:12.15\] Is that right?

**Jerod Santo:** Alpine Linux...

**Cameron Seay:** The port.

**Jerod Santo:** Yeah, the port.

**Cameron Seay:** I'm not saying we created Alpine Linux, but the port, yeah.

**Jerod Santo:** Right, the port to mainframe. Gotcha.

**Adam Stacoviak:** Yeah. And it's cool that the Open Mainframe Project exists, obviously, but then obviously, having the mentorship/internship, and then the COBOL programming course being there... I mean, you need on-ramps to this. If it's not a university course, undergraduate course or anything like that, you've gotta have a way in. And I'm sure there's gonna be people who listen to this show, Jerod, and who are like "You know what? That's pretty cool." Because how often can you get that close to the center of a business problem? And then fill that vacuum - I mean, you've got like a long-term job at that point, if you can really get in there, domain knowledge-wise... I mean, you've got -- talk about job security. I mean, that's it right there.

**Jerod Santo:** This goes back to the three people who have the domain knowledge inside of these credit card companies... It's like, they are worth their weight in gold; and it wasn't like they planned it that way. It's not like they were being sneaky, like "I'm gonna create the job." It's just the way that it worked out. And so there's a path to that for more people. Obviously, you don't want it to be three, or two, or one; you want it to be like a couple dozen, so you're nice and comfortable.

**Cameron Seay:** Yeah. That's the comfort zone. We wanna be a few.

**Jerod Santo:** Yeah. You don't wanna be getting paged when you're on vacation because you're the only one who knows how the system works, but you do wanna be valuable.

**Cameron Seay:** And see, that's what's happening to these guys now; these guys can't go on vacation. But I would be remiss -- you asked earlier about misconceptions of the mainframe... The woman who wrote that article, Maggie Hall, she also has a National Science Foundation project that I'm a part of called Work Learn. I'll send you a link. Work Learn. You can look it up. And it's a \[unintelligible 00:57:59.18\] got all my material for both the COBOL and the -- the intro class and the COBOL class, including exams. And this is for the homeless. This is for the financially distressed, including the homeless. That's why she did the project.

**Adam Stacoviak:** Wow.

**Cameron Seay:** So how is that for an on-ramp?

**Jerod Santo:** Nice.

**Adam Stacoviak:** That is an on-ramp right there. I mean, I'm not homeless, but I would totally take that... Because that's accessible beyond belief. I don't have to leave my house.

**Cameron Seay:** Yeah, you could do that.

**Adam Stacoviak:** I love it.

**Cameron Seay:** And it's got all my material; my recorded lectures... It's got everything.

**Adam Stacoviak:** Speaking of the homeless, and just the under-privileged folks out there - I mean, that's half the battle. They're looking for any way that's legitimate; it's not legitimate, obviously, to be in crime, or go to jail, or something like that... Just to find a way back into the financially stable, even if it's what would seem low to some of us, 80k or 100k a year - that's a significant amount of money when you have zero, and no opportunity.

**Cameron Seay:** For them, 80k is pretty sweet for them. It's pretty sweet. For us, we know it's not rich. 80k is not what it was 20 years ago.

**Jerod Santo:** \[00:59:08.08\] That's right.

**Cameron Seay:** I used to tell people, I was making six figures when six figures were real money. It ain't real money anymore. But yeah, and that's why I went into this also, Adam - when I went into mainframe, not into teaching. I was at North Carolina Central University in January of 2005. I will never forget. And IBM came there and made a presentation about mainframe. Now, I had been in IT, I knew what a mainframe was, but I had never worked on one. I didn't know anything about it. But I said "Man, this is something my students could use", because we were having trouble getting interviews, because people just don't like to hire from \[unintelligible 00:59:39.15\] a lot of superstars. So it's been nothing wrong with my students, but I don't know what the drawback is. But we needed something, and I said "This is it." And I've taught this at four \[unintelligible 00:59:53.25\] and it's always been the same way. If you get through this course and you understand, you will get a job. That's just the way it is.

I've seen kids -- this has changed lives. Some of these kids, when they get this job, they make more money than anybody in their family has ever made, than they'd ever thought about making.

**Jerod Santo:** Well, that's spectacular, Cameron. I mean, thanks for doing this work, and... Keep on doing it. How long can you keep this going, yourself, personally?

**Cameron Seay:** Ask God, don't ask me. I've got no plans on not doing it. And do what?! And do what?!

**Jerod Santo:** I don't know...

**Cameron Seay:** \[laughs\] Tell me what else am I gonna do? This is fun. I'm gonna do this as long as I -- and East Carolina has graciously said "Look, as long as you're breathing, you can teach here." So I said "Okay." So as long as I'm breathing, I'm gonna teach there. It's been a great ride. You see, I get to talk to guys like you... I would never have met you gentlemen. I would never have met you all. And it's just been a great ride. My gratitude is daily and continuous. And you guys seem like a wonderful couple of chaps; this is a good gig. Is this y'all's day job? Is this your day job?

**Jerod Santo:** Somehow it is.

**Adam Stacoviak:** Some would say that.

**Jerod Santo:** Somehow it's become that, yeah. Pretty amazing, right?

**Cameron Seay:** Yeah, yeah. Todd Lewis told me that his job was putting together conferences. I'm like "That's a pretty cool day job." So you guys - good, good for you. Good for you.

**Jerod Santo:** We're living the dream, just like you are.

**Cameron Seay:** You are, you are.

**Adam Stacoviak:** Well, speaking of Todd and All Things Open - you said earlier you only have recently not gone to the conference, but we're big fans of Todd, big fans of All Things Open...

**Cameron Seay:** Me too.

**Adam Stacoviak:** We were recently there, so listeners, if you haven't gone back and listened to the two anthologies or the several appearances in Changelog News, you should check that out. We were at All Things Open, covering the hallway track... Absolutely loved it. Big thanks to Todd and the team for having us out there. And then Cameron, for you - I mean... Who's the person, Jerod, that introduced us to Cameron?

**Jerod Santo:** She didn't give me her name. Cam, you said you think you know who it is.

**Cameron Seay:** Yeah, I'm pretty sure it's Cindy Harris, because she sent me an email about it on LinkedIn. She's a young lady, she was never my student, but she was like a mentee early on, and I helped guide her. I didn't train her, she was training herself, but she's a good friend... And she's another success story in this space. I think she's native American. I think Cindy's native American. I think she's from that part of the world. And this has been great, it's a good story. There's no downside to any of this.

**Adam Stacoviak:** Absolutely. Well, thank you, Cindy Harris, for mentioning Cameron to us. Something that seems to have gone by the wayside, which obviously is not mainframes, COBOL, and the great opportunity here, the teaching you're doing, Cameron, and there are others in the space doing it... But thank you so much for coming on here and just sharing with us what that is, and...

**Jerod Santo:** It's been awesome.

**Adam Stacoviak:** ...hopefully inspiring some listening to this to take some of the paths you've put out there, and look into this world. Thank you so much for coming on the show today, it's been awesome.

**Cameron Seay:** It has truly been an honor, and I hope our paths cross down the road, gentlemen. You're a couple of fine people, and I really admire what you're doing, and I thank you for taking time with me.

**Jerod Santo:** Thank you.

**Adam Stacoviak:** Thank you, Cameron.
