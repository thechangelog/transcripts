**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode \#236, and today Jerod and I are talking to Mark Nadal about his hacker story and his venture-backed open source datastore project called GunDB. We talked about all the details behind this database, how Mark secured funding, why yet another datastore, who's using this database, how Mark plans to sustain this project through products and services.

We've got three sponsors today - GoCD, Linode and our friends at Flatiron school.

**Break:** \[00:01:06.15\]

**Adam Stacoviak:** Alright, we're here today, Jerod, talking to Mark Nadal, talking about GunDB and a bunch of other fun stuff, to kind of tee this up. I think this began in the ping repo - is that right?

**Jerod Santo:** Yeah, two shows in a row. \[unintelligible 00:01:51.13\] Mesos last week and now GunDB. This one is from a long-time friend of the show, Kevin McGee.

**Adam Stacoviak:** Yes, Kevin... Thank you.

**Jerod Santo:** Kevin's the one who likes to give us a guest idea as well as set up and even script portions of the show for us, which is always appreciated.

**Adam Stacoviak:** Yes, very much.

**Jerod Santo:** So Kevin thought Mark would be a great guest, specifically to talk about your project GunDB, Mark. Thanks so much for joining us!

**Mark Nadal:** Shout out to you, Kevin, thanks so much. I really appreciate you guys having me on the show. I'm honored to be here.

**Jerod Santo:** Very good. Well, let's get to know you a little bit more. We know that you are the creator of GunDB, that is a graph database... Think of it like Firebase open source. A lot to say around that, but first we'd like to get to know our guest a little bit. Can you give us a little bit of your origin story and how you got into software and open source?

**Mark Nadal:** Yeah, you nailed it. To go way back, I was born in San Diego -- I'm kidding, I'll skip forward a couple of years.

**Jerod Santo:** Thank you.

**Mark Nadal:** I like to focus on mathematics, philosophy... That's kind of my groove. However, I realized if I didn't wanna stay in academics and become a PhD and all that jazz, I probably wouldn't have an aspiring career as a rogue mathematicians without any credentials behind me... So I was like, "Hey, what's the closest industry to doing things that are like formal systems, logic, that I could actually make a living off of?" Well, code looked like the closest cousin, so I jumped on that bandwagon; I dropped out of university and -- well, I didn't even go to university, I dropped out of community college and started programming.

Over time, I realized that code, when it comes to implementation, is a completely different world than mathematics and philosophy. But I got over that curve, jumped on the Node.js bandwagon back in 2009, except for... I'm just a basement-dwelling programmer, so I didn't pay attention to the forums or the chat rooms. Even though I've been using Node from 0.2.2, I didn't really actually get involved with the community until much later, and I kind of feel like I missed out on that opportunity.

\[00:04:10.14\] I was building a collaborative web design tool, because I'd done lots of freelance stuff for making websites for clients, and I was like "This is ridiculous. I'm just moving some boxes around on the screen. Why is CSS so dumb?" I sit down with a client, I figure out exactly what they want, and then I go and build it.

A week later I come back and I'm like, "Hey, here's exactly what you wanted." They're like, "Oh, this is so cool, but could you move that sidebar to the other side of the screen?" and I'm thinking in my head, "Nooooo...!"

**Adam Stacoviak:** The worst nightmare of all CSS developers is that right there.

**Jerod Santo:** Yeah.

**Mark Nadal:** Yeah, so I was like, "Shoot, I gotta go back and redo all of my CSS just to switch the sides on things." And I figured, you know what? There needs to be a tool that allows me to build websites on the fly, as I'm talking to the clients. This should be easy. Come on, it's like 2010, right? We should be able to build websites. it's the greatest platform to express yourself to people, to have a medium and an open conversation with others. The technology needs to exist.

So I decided to jump on that, build it out. I met a couple of people that wanted to join me, and we got some attention. We got onto Startup UCLA, which is an accelerator. Even though I'd spent my entire life running away from university, I wound up getting suckered back into it. But this time, the nice thing was I got to sit down and have lunch with the department heads of psychology at UCLA, the department heads of communication, and they gave me a grant to work on what I wanted to work on.
So rather than me being the struggling college student, trying to pay off tuition and load and debt, and only getting to talk to the teacher assistants and stuff like that, I basically bypassed college and I'm now in the circle where I actually get to chat with the department heads. That was really exciting, and I realized, "Wow, the tech industry is just something completely different."

At that point I started struggling with the backend of the system I was trying to build. Being a mathematician and a logician and a frontend web developer, how am I supposed to figure out dev ops and system administration and command line and all that stuff? So I'm very much an outsider, and when I struggled with that, we got a burst of traffic... 300 users came onto our website, signed up and in the middle of the night my entire backend exploded.

I'm like, "Okay, come on... Why is it that now that I've built a web design tool that lets people quickly create really cool websites, nobody wants to hire me to build websites? They want to hire me to build backend systems, even though I don't know anything about backend systems." So I figured, "Okay, I need to start fixing this problem. I need to build a database that can handle the needs that I have."

Quick lead into Gun here - you'd think that a website creation tool should use a document-based database, because pages are documents. That's what I did, but the problem and what ends up happening is that you've got the sidebar, you've got the header, the footer, you reuse those across all the pages, so you end up having a mix between document-structured stuff, as well as relational structure stuff. That's at the point where I was like, "Well, I can't just switch over to a SQL database, because I need the ad-hoc creation of websites in documents, and I can't use a document database, so what do I do?"
\[00:07:55.11\] I discovered graph databases and then Firebase was taking off at that time, so I thought "Okay, the real-time stuff has a benefit." That's kind of a quick history.

**Jerod Santo:** So where you are today is with a product called GunDB which, as Kevin McGee describes it "a floss graph database written in JavaScript that was developed by a frontend guy", and then he says, "What!?" Somewhat intriguing... Of course, we've just heard a little bit of your path to getting where you are, and in that thread you mentioned a lot of buzzwords, \[unintelligible 00:08:27.24\] and so on and so forth. Did you just go out and study everything to do with graph databases, or how did you get from frontend guy with a logic and math background to "I'm now building what is a venture-backed company around an open source graph database"?

**Mark Nadal:** Yes, so I am the last person that should be building a database. I'll come out and admit that right now.

**Jerod Santo:** Is that what you tell your investors? \[laughter\]

**Adam Stacoviak:** It's not the first time I've heard this, Jerod.

**Jerod Santo:** I know.

**Adam Stacoviak:** The first time was a SQL.

**Jerod Santo:** Yeah, SQLite.

**Adam Stacoviak:** SQLite.

**Mark Nadal:** I've told my investors that it is a high-risk open source startup, but if we hit this trend that's taking off with graph databases and NodeJS that has grown by 120,000% in just a couple of years, then there could be something huge here. This could be redefining databases in the same way we had the shift from proprietary databases of Oracle into open source with MySQL, and then we had from MySQL into the shift of the NoSQL craze, which now a lot of people look back and judge. Then going from the NoSQL craze into the big data craze, right?

Alan K., who's a pretty big computer scientist out there, he's inspired a lot of Bret Victor's work - we'll get to that later - came and said "Big data isn't very useful. What we need is a meaningful data. If we have all the data in the world, but can't decipher what its intent is, there's not much use there." That's gonna come quickly back around to a couple exciting things...

I actually wanna get back to answering your question, which is the future of machine learning, artificial intelligence and graphs - you just cannot build data structures based off of a rigid format. Trying to model reality in data -- reality is not clean, it's not clean-cut, it doesn't fit in a table, it doesn't fit in a single document. You need a data structure that will match how the universe works.

I'm gonna pull a little back into the mathematics here... I comment about this a lot - graphs are amazing because they do just that. In mathematics, a table is called a matrix, and in mathematics a document is called a tree. Both a tree and a matrix can be represented as a graph, but not all graphs can be represented as a tree or a matrix. Some of them can, but not all. Graphs are actually this superstructure of a data format or just an algorithm format, so you can represent a lot more.

A lot of the machine learning stuff that you see - which I still think is kind of hyped up a little bit too much, but a lot of the machine learning stuff has to learn off of very flexible data to find the relationships and hierarchies, and graphs are a better fit for that.

There was a part I wanted to focus on in your question... Would you mind repeating your question?

**Jerod Santo:** It was kind of along the lines of where did you acquire the qualifications to build such a thing?

**Mark Nadal:** Yes, and I have a saying "I'm the last person qualified"...

**Jerod Santo:** \[laughter\] Right.

**Mark Nadal:** This is something I wanna strongly emphasize to all newcomers coming into the tech industry, as well as programmers that have been around for a long time. I am a frontend developer, and it was 2010-2011... I expected people out there to have solved the backend, to make it easy for me to build a solution. I set myself up on Amazon Web Services because I heard that it was scalable, that things would auto-scale. They just didn't tell me that I had to go in there and figure out how to program everything to auto-scale.

\[00:12:15.13\] I don't have those skill sets, I don't know how to do those things, so when my server crashed in the middle of the night, I was like "What on earth? I thought this was a solved problem."

So I'd been frustrated for long enough, whether it just be my desktop operating system or tools that I use while trying to program -- and hey, I'm using JavaScript. JavaScript should be one of the most laughed at programming languages out there. Why do these things just seem not to work? And if they don't work, why on earth am I sitting around, trusting these databases that have been around for 30 years, 20 years, 10 years, 5 years? I'm not saying those databases aren't good - they're fantastic, but when I have a problem and they don't deliver, I would argue - regardless of whether you're a newbie or have been programming for a long time - that is an opportunity to strike at.

So if you're a newbie and you're like, "What is up with all this weird programming stuff? I don't understand any of it" or "There's bugs that are getting thrown at me", don't put yourself down and assume that you're just a stupid programmer; you're not, you're brilliant. You can take that frustration that you have and build a solution around it. You can tackle it and handle it yourself, and maybe, like me, a few years later you'll be doing podcasts and talking to investors... Because that's what matters - taking the initiative to see problems and tackle them. I just want to be really encouraging to everybody out there. You are a hacker, and that's at your heart, so don't sell your heart out to the latest trends or the latest tools, or even legacy software that everybody swears by. You have the insight to see a problem and to tackle it yourself, regardless of whether you have credentials.

**Jerod Santo:** I love that attitude... I think it probably explains a lot of how you got where you are now. I wonder, with regards to graph databases and the way that this format is, like you said, a super-structure and you can do documents and you can do relations with it, and I agree with all of that... There are other graph databases - Neo4j is the one that comes to my mind, it's probably the most popular open source graph database, and I wonder... Did you try those and they also didn't fit the specific need? Was it "I'm just gonna build this thing, I'm just gonna start, I'm gonna go"? Or was there a survey of existing -- because you can go to Wikipedia and there's a list of graph databases that's probably three scroll pages long. Maybe some of these are the legacy systems, as you were referring to, but I'm curious... Once you realized that graph was a way to build a great datastore for the modern age, was there a survey of other ones?

**Mark Nadal:** Yes, great question. Really quickly I'm gonna nitpick on Wikipedia. Gun's been listed on Wikipedia I think since 2014, and then recently a group of "deletionists" - I think that's what they're called; I don't know Wikipedia well enough - \[unintelligible 00:15:16.23\] has started deleting a bunch of -- they even deleted a ArangoDB and a bunch of these other databases that are totally legit and worth appearing on the site. So now we're not on Wikipedia anymore, but hopefully somebody out there will put us back on and fight the annoying moderators.

**Jerod Santo:** Yes, there's an entire society and social microcosm that you could do a documentary on, so Wikipedia editors and all of that... It's like a power struggle and there's all sorts of things going on there behind the scenes.

**Mark Nadal:** Yeah, if you want a lesson in trying to overcome haters, just get on Twitter or get on Wikipedia, right? You'll get tackled enough, and... Anyways, going back to your question.

\[00:16:04.07\] I had these problems with my database crashing back in like 2012-ish. It wasn't actually till late 2013, early 2014 that I started struggling with like "Oh, I need the header and the footer in my collaborative web design tool to be reused across pages", and that's when my friend mentioned Neo4j. I'd never heard of graph databases before and I'm like, "Oh, well... I've been wanting to get off of the current database I have long enough anyways, so I should try out Neo4j." Neo4j is fantastic, it was great. The setup was fantastic, they have this really cool interactive tutorial in their admin dashboard to learn how to do a Cypher query, which is their query language; they've got D3 plugins built right into their admin panel so you can visualize the graph... Really neat, but there's two fundamental problems still.

First, and this is where we get to talk about some really exciting things like WebTorrent and IPFS and the whole peer-to-peer decentralized movement. Neo4j is still what's called a master-slave database. That means ultimately all rights have to go through a master, and/or if you wanna scale up at some point, you're going to have to run a fancy algorithm known as Paxos or Raft to make sure that there is consensus of the consistency of the data. And I personally have discovered that while those are very useful for certain industries that you cannot go away from, like banking - you really wanna make sure that the account balance in somebody's bank account is correctly reflecting the amount of money they have before they overspend it or underspend it... Most web applications out there, especially with this movement that Firebase has been pushing, of the real-time web, having everything interconnected, IoT -- doesn't need that. You can have a much more resilient system that will scale a lot better if you switch over to a decentralized architecture.

So that was my first problem with Neo4j - I was still going to have the problem that in the middle of the night, if I got too much traffic, things were going to explode, break down; I'd have to do dev ops, I'd have to make sure that Neo4j is running properly and could scale.

The second problem is that I am a JavaScript junkie, probably to the disappointment of a lot of people out there. I wanted to use Neo4j directly in Node... I think there was one or two drivers at that time, and even if there was a driver, I tried it out and it was very verbose. It turns out that Neo4j's wire protocol and how -- I didn't do enough research, so I could be wrong here... They would take the graph data, transform it into a table such that there would be the properties in each node in the graph would correspond to a column, and then they would repeat the same node for as many time that it shows up for each column, and that's how they would send the data to you. And to me... I'd already written a MongoDB driver back in 2010-2011, so I liked to get close to the database and know what's going on.

Neo4j's spec for talking to a client was just way too verbose, and I decided, "Okay, either I use one of the existing drivers out there, I'm gonna have to learn all the Cypher stuff", and I felt uncomfortable with that, OR... Well, two strikes against Neo4j, even though it's a great database, I could just take the effort I'm doing now and whip out a prototype of what a peer JavaScript-NodeJS graph-based database is, especially with all the Firebase quirks -- not quirks... All the Firebase perks to it slapped on top, as well as it then being the peer-to-peer side of the equation.

\[00:20:08.16\] So I made a prototype, proof of concept, only spent a couple weeks on it, posted it to Hacker News, and whow! Got to the homepage of Hacker News and I could tell that even though I hadn't even really written this thing yet, I just had a proof of concept, people wanted this. It wasn't just me that was struggling with the academic snobbery of databases. A quick shoutout to a guy named Aphyr (Kyle Kingsbury). He did a series called "Call Me Maybe" Jepsen tests where he analyzed a ton of databases out there and found out that a lot of the marketing claims of these databases just weren't true; they didn't stand up to the sort of things that they were claiming.

Between those three or four things, I decided "Well, it seems like a great timing, a great opportunity... We might as well go for it."

**Jerod Santo:** That's a good spot to pause, actually. We've got to take our first break in a second, but you brought up decentralization as point number one; point two, JS junkie - I don't think anybody listening to this podcast is hating on you for being a JS junkie, so no worries there. Then you mentioned IPFS and stuff like that... Let's take this quick break and when we come back we'll dive a little deeper into some of those things and why decentralized makes this even better. We'll be right back.

**Break:** \[00:21:29.24\]

**Adam Stacoviak:** Alright, we're back with Mark, talking about GunDB. Mark, you mentioned decentralized, you mentioned JS junkie, you mentioned IPFS, but what we may have not done perfectly yet is give the elevator pitch to Gun. Give us the elevator pitch - what is Gun, how do people use it, what did you make it for?

**Jerod Santo:** I think you were right that the best way to explain Gun is that it's an open source Firebase. The cool thing that then people can discover afterwards is that it's got Raft features, it's offline-first, it's peer-to-peer, and that just makes it all the more awesome. But I like to introduce it as being the open source Firebase.

In terms of what offline-first and peer-to-peer and being a graph database mean - that's something that just winds up being a deep dive of a discussion. Going back to decentralization, I think that's a great place to start because there's this new movement - and it's not new, because the internet was based on decentralized protocol, but there's a resurgence of us in the community, whether that be Tim Berners-Lee, IPFS, me... There's people that are trying to push this once again, and here's the reason why: they expect by 2020 up to five billion new people to come online.

When Twitter is bragging about how they have these 300 million users active monthly and how they've learned to scale and all that stuff, with the advent of things like Pokémon and these apps that just get tons of people really quickly, scaling is not going to be the exception. Having millions and millions of users is not going to be the exception for these monoliths, it's going to be the default that most apps have.

\[00:24:07.26\] So out of the box, there's an expectation now that we're going to have to have systems for any average developer to spin up and be able to handle that type of load with the five billion new users coming online. That's more than what's currently online.

How do we do that? Well, this actually is not a computer science problem, it's not a programming problem. You can't throw those things at it; it winds up being a physics problem. It goes actually back to the roots of the web itself and looking at it as a decentralized protocol, a decentralized algorithm. I think that's where a lot of the excitement people might have heard about the resurgence of peer-to-peer is coming from - it's looking at the root, and now is the time to capitalize on that.

**Jerod Santo:** So you cast it in light of Firebase, and I think that's probably useful for most of our listeners, but for those of them saying, "Well, I don't really know what Firebase is, and now I feel dumb", can you give us the lay of the land with Firebase, so we can understand what it means when you say "an open source Firebase"?

**Mark Nadal:** Great point. It's so important to me... In a conversation I have a tendency to throw out jargon words and I really dislike it, because the more jargon there is, I feel like it's just covering your butt that in reality there's nothing behind it, so I really appreciate it... Firebase was a popular database as a service, which basically let you plop in the Firebase library on a couple of HTML pages, and then immediately have data between those different devices that have loaded the page sync in real time.
They're the ones that pioneered making -- well, just as a quick example... If you look at the Facebook news feed, you get updates as it happens; if you look at Twitter, you get updates as it happens. Previously, only big companies had access to that type of technology, but with advents of websockets, Firebase came along and quickly made it easy for a developer at a hackathon to spin up the type of service that has things updating in real time.

**Jerod Santo:** And then what happened with it? Why an open source Firebase, why not just Firebase, just use it?

**Mark Nadal:** Yes, so Firebase is completely proprietary and recently just got purchased by Google. They had a couple competitors, I don't know if they were real-time or not, like Parse - they were bought by Facebook and just shut down. Open source to me is really important not only as I'm talking about the origins and the roots of the web, but also open source in a more specific setting.

For instance, a lot of databases out there are licensed under something called the GPL or AGPL license. Gun's licensed under an MIT or Apache 2.0 or zlib license, which basically says "You can do whatever you want and you don't have to pay us a dime." Having technology available to the masses that they can use it without any concern or care - whether it's for personal use cases or commercial use cases - is really important because if you look especially at the housing crisis in 2008, the entire world economy collapsed, but the one exception was the tech industry. The tech industry just kept on growing and growing. My argument for why is because it's based on an open foundation. The web itself, in its protocol, whether it's HTTP or other things out there, is open.

It might seem like nothing when you just have a couple university \[unintelligible 00:27:40.10\] coming together and saying, "Oh, here's a proposal for how computers can talk to each other." It's so ethereal... It's not like you're moving gold around. There's no tangible, physical resources to it. But because they came together and said, "Hey, here's something, here's an idea that has amazing potential, and we're gonna give it away for free to anybody and everybody", suddenly you get the rise of the Googles, the Microsofts, the Apples.

\[00:28:10.29\] You have to admit, Microsoft and Apple, or software or hardware companies - a lot of the money they've made is off of the services being internet-enabled and stuff like that.

You get the sudden rise of technology and growth and prosperity that keeps on growing, even during some of the world's greatest recessions. That is why open source matters so much. The foundation of technology, if it's based on, "Hey, I know you, you know me, or I don't know you, but I'm gonna give you this for free, because I believe in this cause of decentralization and in open source" only helps things grow, and it makes the world and our lives better collectively. That's why I'm passionate about open source.

**Jerod Santo:** We absolutely share your passion.

**Adam Stacoviak:** Yeah, totally.

**Jerod Santo:** When I look at it though as an investor, I put on my capitalist hat, capitalists like proprietary things, because they can sell them for lots of money. So you have an open source liberally licensed, use-it-however-you-want product that's venture-backed, and I just think "What am I missing where this is a great idea for venture capital, and you've convinced people that it is", when it's decentralized. Is services even a thing? How are you gonna make money on this?

**Mark Nadal:** Yeah, so I first wanna shout out and compliment my investors. It's very likely that my investors are forward-thinking compared to other investors. I'm gonna pick up from the story that I posted to Hacker News; we were on the homepage, we got a lot of attention, I knew this was something that people wanted. Well, within two months of that, I got invited to an accelerator out in San Francisco called BoostVC, that primarily focused on Bitcoin, blockchain technology, virtual reality - sci-fi stuff.

I was like, "Wow, this is a really incredible opportunity", so I jumped in. Within three months of me posting it on Hacker News and getting the traction and attention, that people want this technology, I'm already at an incubator and they're helping, mentoring me on how to focus on the business side, helping me actually write Gun from scratch, because the prototype I had, the proof of concept wasn't gonna go very far.

When I came out of that program, on demo day I got connected with the guy who had originally invested in Skype, which we're using right now, which its big selling point was that you could make audio calls and video calls around the world because they're using decentralized protocols - hint-hint; there's a theme here about peer-to-peer...

**Jerod Santo:** Well, Skype is closed source.

**Mark Nadal:** Sorry, Skype is closed source, but it's using decentralized technology. Now it sold to Microsoft and it seems like technology is getting worse, not better. So I pitched the VC and I totally blew it. I'm a basement-dwelling programmer, so I'm trying to explain the speed of light in physics and eventual consistency, and he's like "Whaat...?" \[laughter\] I had 15 minutes with this billionaire and I blew it.

At the very end he was like, "Hey, would this be good for gaming?" and I'm like, "No, you don't use a database as a gaming engine; that's just ridiculous." I left the meeting and I'm like, "Shoot, I blew it." Forty-five minutes later though I realized, "Huh, what if he wasn't asking me a question? What if he was giving me an insight from all of the experience he has being a billionaire and investing in all these companies?" I'm like, "Okay, so hopefully I can get another meeting with him. I'm gonna build the game that he suggested I build in that meeting."

\[00:31:57.01\] So I come back to him in the next meeting. I only have like 10 minutes with him, and the first thing I do when I walk into the room is I say, "Hey Tim, I built the game that you wanted. It's a gunslinger game, so whoever can tap on the screen faster than the other person wins." He was actually the one who said that I should build a gun-slinging game and I totally missed the pun, since my database is called Gun.

So I walk into the meeting and say, "Hey Tim, we're gonna play this game you told me to build. I built it. If I win, you have to invest some amount of money in my company." He was like, "Okay, game on!"

He whipped out his phone, hit the website, because being a JavaScript database, you don't need to install anything, you don't need to load anything; you just go to a website and it works. And I'd been practicing for like two weeks straight with how fast I could tap the screen. I had unhuman skills, I had like sub-hundred-millisecond speeds. So I tap the screen and of course, I win. I'm like, "Phew!" And he's like, "Are you cheating?" So I'm like, "No, no, no!"

**Jerod Santo:** That's what I was gonna say, "Of course you cheated, that's how you win. It's your code, right?"

**Adam Stacoviak:** Right, you had the chance to cheat if you wanted to.

**Jerod Santo:** Integrity...

**Adam Stacoviak:** Yeah.

**Mark Nadal:** I knew the timeout on the system, so I could roughly approximate by counting down myself. If I responded too fast, I'd immediately get killed, and then I'd lose the game.

I hand him my phone and he starts playing against himself and laughing and enjoying the game, and five minutes later he's still playing with the game and I'm like...

**Adam Stacoviak:** "Can we get back to this conversation?"

**Mark Nadal:** \[laughs\]

**Adam Stacoviak:** "Where's my money?"

**Mark Nadal:** Yeah, "Tim, can we talk about the investment?" Then my time was up and he said, "I'll email you if we're interested." That was really nerve-wracking.

**Adam Stacoviak:** Did you get the money?

**Mark Nadal:** Yes, I did. \[laughter\]

**Jerod Santo:** Of course he got the money. I mean, terrible story if you didn't get the money.

**Mark Nadal:** There's another story to that, which is he had actually sent the email on Friday evening, and I hadn't heard anything the entire week, so I emailed my mentor from the accelerator "Have you heard from Tim? I haven't heard from him... Even if it's just a no, I wanna see that email." The mentor's like, "No, we haven't heard anything." An entire week had passed, and the email had been sitting in his inbox, he didn't even notice it. It was an offer for a quarter-million-dollar investment in the company. He just like, doesn't even notice this email sitting in his...

So then on Monday he emails me like, "Oh, whoops... Here's an email with an offer", and I'm like, "Oh, my goodness!" It was a crazy time.

**Adam Stacoviak:** Very crazy time.

**Mark Nadal:** I'm fortunate enough that I got into this program, that was a huge blessing. I was fortunate enough that the program connected me with Tim Draper, and then once I got Tim Draper, it allowed me to raise from other VCs.

The important thing that I wanna highlight is that it's easy for me to chat about this after the fact, now that I'm here two years later, but I want to remind people... I was a basement-dwelling nerd two years ago -- I mean, I'm still a basement-dwelling nerd, who am I kidding...? But I did the scary thing of putting myself out there and having haters attack me and ridicule me for writing a database in JavaScript, for having no experience in database and all this stuff.

But because I identified that problem, that a lot of people would just say, "Oh, well I'm too stupid, I'm the problem here", I decided to reframe it and say, "No, if I'm having a problem with this and I'm just a stupid frontend guy, we need to make this a better experience for everybody else." So I wanna encourage people out there, like "Hey, if you're struggling with something, don't put yourself down. You are brilliant because you're hacking on these systems, or even if you're learning these systems."

\[00:35:44.28\] You have the genius insight that's already above the rest of the world which collapsed in the economic fallout of the housing crisis. You are already on the game and figuring out and being ahead of the curve, so don't put yourself down. Take that hacker insight that you have that says, "Hey, I'm having to hack around this" or "I'm having to hack to do this - there's a problem there." Stab at it and leverage the connections that you have currently to just keep on building up slowly, year after year. Keep on persevering, keep on fighting for it.

A piece of advice in here... First, never take people's advice, because if you take people's advice it's probably two years late.

**Jerod Santo:** And now here's some advice... \[laughter\] Nice.

**Mark Nadal:** A second piece of advice is -- shoot, I already forget it. \[laughter\]

**Jerod Santo:** But I think that's perfect. We'll just leave it there. \[laughter\]

**Mark Nadal:** It must not have been that important.

**Adam Stacoviak:** That's hilarious.

**Jerod Santo:** Well, I have a takeaway from this story - whenever you're in a room with a billionaire and you're describing your software or your thing, and he or she says, "Can it be used to do X?", the correct answer is "Yes, it can." \[laughter\] That's what I've learned.

**Mark Nadal:** Yeah.

**Adam Stacoviak:** That's actually the quintessential rule for selling anything, whether it's your idea, yourself or a product... If a prospective customer and/or investor asks you if it can do something - obviously, you wanna be true to yourself and true to the product; you don't wanna lie - if there's even an inkling that it could be, the answer is always 'yes', because you've got at least 24 hours to make it true. \[laughter\]

**Mark Nadal:** Yeah. It is so hard as an engineer to say that, but... I hate the fact that -- now that I am running a company, I'm realizing that the hard thing is sales and marketing. This is terrible, because I am that person that just a few years ago was like, "Oh, that marketing guy wants to find us cool programmers, they want us to build their cool idea; they can't do anything without us actually building the system", but I'm gonna say this to other engineers... Sure, if you're a marketing guy and you don't have an engineer, then yeah, you don't have much of a chance. But if you're an engineer guy, you can build the best system out there and nobody will buy it, which is unfortunate.

That's not to say that you shouldn't build the best system out there. You should, because we're still gonna fight for what we believe in; we're still gonna fight for re-decentralizing the web, bringing everything back to the peer-to-peer roots and blah-blah-blah... But if we want to make the impact on the world -- maybe that's a separate philosophy that I have. There might be a lot of programmers out there that are happy with the stability of the job that they have. If you're a person who's listening to this and you're happy with that, keep on doing that; don't let the hypes or the trends or people like me come along and be fancy... Don't let us exaggerate what we're doing; we're just people, passionate about stuff, doing stuff.

But if you're also a person that wants to actually get their technology in the hands of people and let them benefit from it, well first off open source it; don't you dare keep it proprietary. Second, pay attention to the people that come along and say, "Yeah, can it do X or Y or Z?" because that's a leverage point. This has taken me two years to figure out, that business is all about finding those little leverage points, capitalizing on it, and then using that leverage point as another leverage point to go to another customer or another investor or another engineer or another hire or another talent or whatever it is, and say "Oh, we just did X with Y", and then get them in.

You wanna leverage all these things back to back moving forward. It's scary, it really is scary, but...

**Jerod Santo:** \[00:39:57.27\] That actually makes me think about something I just read this morning... I don't know if you've seen it, but our friend of the show, Slava Akhmechet -- he's been on the show a couple times - at RethinkDB, now working at Stripe, just recently posted a post-mortem on RethinkDB with his thoughts on why they ultimately failed. They were in a very similar situation that you are in with regards to an open source datastore product focused on developers, and he has some insight that I think would be interesting to pose to you in light of GunDB, and maybe have a conversation around that.

We've hit our second break, so we'll take up those things on the other side of this short break.

**Break:** \[00:40:40.04\]

**Jerod Santo:** Alright, we're back and we are discussing "the business side" of an open source product like GunDB, and a venture-backed product. On the other side of the break I mentioned RethinkDB's recent post-mortem about why that open source datastore didn't make it as a venture-backed company, and Slava Akhmechet has a nice piece -- the interesting thing is it's a draft... He hasn't published it, but it's public on his GitHub in his Drafts folder. I don't know if he's done with it, he hasn't hit the Publish button, but either way it got circulated today. I just read it this morning, and he has a couple of thoughts around why RethinkDB failed.

I believe that a lot of what he has going on, Mark, probably flies pretty closely to what you're trying to do with Gun. Let me just read one piece of it. He has two ideas: one is that it was a bad market, and two is that they were measuring for the wrong qualities of what makes good in terms of a product.

The first one is what really struck me, and I thought, "Hm, I wonder what Mark thinks about this in light of Gun." He says:

"The open source developer tools market is one of the worst markets one could possibly end up in. Thousands of people used RethinkDB, often in business contexts, but most were willing to pay less for the lifetime of usage than the price of a single Starbucks coffee (which is to say, they weren't willing to pay anything at all)."

**Adam Stacoviak:** Dang!

**Jerod Santo:** \[00:44:01.18\] Yeah, it's one of those sad truths. What do you think about that, Mark? In light of Gun.

**Mark Nadal:** It's brutal, it's true. I know Slava and Mike, I've had the honor of chatting with them several times; they even mentored me in a couple of places when I met with them for an hour or two. Really great guys, incredible product, incredible focus and drive... I can only say good things about them.

But now you're asking me to critique what went wrong, what are my thoughts on the piece, so I'll try and dance around this delicately, because I really respect the team. Yes, it's true - open source is hard. I think that's a good \[unintelligible 00:44:44.24\] right there, but let's move into some other aspects.

Let me zoom back and talk about macroeconomics. Open source is the inevitable future that is going to happen, partly because of what he mentions in his piece. There is so much competition... Any programmer can spin out a new idea and start broadcasting about it and offer it for free and compete. The competition in terms of developer tools is ruthless, and yeah, you basically have to provide it all for free, and if you provide it for free, most people are going to take advantage of that fact.

However, you can't just go out and have a proprietary database or a proprietary developer tool and try selling that, because ultimately you're going to lose out in the long game. Maybe you're successful temporarily, but you're gonna lose out in the long game.

To me, I have to disagree with RethinkDB a little bit where the developer tools market is actually an incredible opportunity, especially with the advent of machine learning, Raft databases, artificial intelligence, self-driving cars... These aren't gonna be technology that only Google and Uber and Facebook use; these are gonna be technologies that have to be handed into the everyman, democratized around the world to the five billion new users that are coming online.

There is incredibly rich opportunity here, and the slight divide - and we'll get into more technical details on peer-to-peer and decentralized vs. distributed and centralized - is that I do feel like it was tough for them because their database was still ultimately master-slave. They had one of the best master-slave databases and you should still use them if you need real-time updates with a centralized server that is making sure bank accounts are managed; you should still use RethinkDB, not Gun. But that niche has been around for a really, really long time and I argue there's not much of a future there, because scaling that only goes so far with the amount of people that are gonna be coming online, versus decentralized algorithms.

There's a whole new opportunity there, because there's very few databases that do that, very few developer tools that do that. So that's my first comment.

The second is about focusing on a metric that is good, and I don't wanna be the villain here, but it's true... I want to have a developer-focused project that gets developers excited, is done correctly - I'm doing that as best as I possibly can, and I feel like we've been pretty successful at that regard. We've surpassed Cassandra and ArangoDB or these other databases in developer popularity on GitHub. We're about to hit 4,000 GitHub stars.

\[00:47:46.09\] We've focused on performance in this upcoming release that we have; we're not faster than Redis, although you have to take benchmarking with a grain of salt. So we're doing our best to be really good at quality software that works, and we have several demos that you can see in our GitHub readme, where we crash all of the servers and we're still able to recover all the data.

We've even invested a lot of energy into building a distributed testing tool to make sure that we can set up real-world scenarios and simulate failure cases, and check! Gun works properly.

Getting away from the technical side, it's true though... That's not the metric that matters when it comes to making money, right?

**Jerod Santo:** Right. I mean, if you look at RethinkDB a few years back, they were never on Hacker News; they've got lots of GitHub stars. Quality product - anybody who looked at it... The technology inside RethinkDB and the \[unintelligible 00:48:41.16\] old school term, the developer hours into it are massive, and it was over my head... I said, "Wow, this is really impressive." The consistency and the guarantees they were able to make about data quality... And yet, one of the things -- okay, this is just his post-mortem; in any failure, there's thousands of inputs for that output. But the fact is that developers are a tough market to sell to, especially when "Why buy the cow when you can get the milk for free?"
How is Gun gonna be different? Because when I look at it as a potential user - you're trying to get users, of course, because people need to be using Gun for it to be useful... Is this gonna be around? So why is Gun different? Why will Gun be around ten years from now?

**Mark Nadal:** So this is the villain in me as an engineer coming and saying that yeah, RethinkDB did not spend basically all of their money on getting a sales team, a business development team to go and take over the market. That's again where the villain in me is like, okay, well I'm not gonna sacrifice code quality, but moving forward with Gun, I'm probably gonna be one of those annoying database companies you hear about that's got a big sales team behind them, that's doing the Oracle move, that's trying to push through.

Right now, there's a couple different strategies, just talking separately from Gun, that I think people can take. Vue.js has been very successful as a single developer with his Patreon campaign. He's making $9,000 a month on Vue.js. I definitely recommend developers out there that don't wanna run out and start a startup, they have their stable job they really like, but they wanna take initiative and solve problems and have open source projects on the side, maybe try out the Patreon method.

You have to evangelize yourself, you have to go out and do tech talks, you have to post yourself to Hacker News a bunch - and that's a lot of just game theory where you just post a bunch until one thing takes off and you start getting the popularity that you need. Vue.js is doing very successfully at that point. He can basically now be full-time working on Vue.js and delivering a great product and just slowly growing that and getting more traction, more attention, more companies on board.

Back on the Gun's side, we already have customers that are using us. We're gonna be -- I don't know how much I can disclose yet, but I think I can disclose that we're gonna be getting deployed out to a social network with 1.5 million users, and we're gonna be in a product that just had a really successful (something like) a Kickstarter fundraise. We're gonna be shipping a physical, in-home product to 1,500 homes.

That's our first little grab at the market, and as a database technology, you're fundamental. Once you are able to deliver to people, you're able to slowly grow on top of that.

\[00:51:43.07\] Then there's some other really exciting news, because for the last year - and I can't really share this - I've been focusing on trying to get connected with and take down some really big fish in the market. We have a really sweet strategy play that you guys will get to watch in the coming year, to see whether we succeed or fail at this.

We're gonna hit some pretty big names, and if we're successful, if we land those contracts, then that's an opening to these large deals. I think what I'm gonna argue here is that if you are a startup in the same vein, trying to figure out how to be open source, how to chase your passion and convictions but still make money, I would emphasize - make really strategic plays where you leverage connections that you have. It can take years - it's taking me a long time, too - where you're getting in front of the powers that be currently, and you have a technology that they simply have to use, or else...

It's going back to my comments about Twitter - there's a regime change happening with the fall of Twitter. Monolithic, centralized services just can't scale and they're not working. If you have a technology that breaks that barrier, then maybe there's some really incredible business plays that you can make. It sounds so ethereal and so fuzzy, and still is for me, except in the last several weeks some crazy stuff has been happening.

I don't know if that's the answer, but maybe I can come back pretty soon, because hopefully all those things will close and then I can talk in more detail about how that actually happened. For now, I'm concerned I'm speaking too early.

**Adam Stacoviak:** Well, the question was more towards ten years, and you were sort of forecasting how you might, so you're sort of saying "Here's how I hope for ten years..." I'm thinking more like, if we have people listening to this show that are open source developers, aspiring open source developers, they one day take some of the advice, maybe two years late, like you've given in this show, to get over the hurdle they've hit themselves, what is it that you're actually selling? Whenever you're getting these deals, part of it is open source, it's an open source database... What are they buying from you? What is your product? If you're saying you have a better market strategy, you have a better product, or you're able to execute better than maybe others may have, what exactly are you selling?

**Mark Nadal:** Three things. First off, if you don't wanna do your own startup but you wanna advance your career and still do open source at the company that you're at, I encourage you to just take a lot of initiative, find those problems, create solutions and then work with your company. You don't think that you have to be a Silicon Valley startup company to have a lot of success on your own, or to be very happy with what you're doing. So a lot of encouragement to people out there that you can, with your day job being a programmer, still make a lot of headway into this.

The second thing was what I already mentioned with Vue.js - if you're big enough that you can go public and be popular, then you can take the Patreon route. The third thing here - the approach I've taken - is to build an open source community around your product. Everybody is going to use you for free, but then pay very specific attention to developers in that community that are building products on top of you. Right now, we have people doing everything from data visualization of IoT stuff, to virtual reality, web VR games, to your traditional Trello, social network apps, etc. And look for the people that are in your community that are developing a solution, a product that has big-name buyers that would bite, and that they have the connections to those big name buyers.

Partner with those people, potentially do a lot of free work - I've been doing a ton of free work for the last ten months - and make strategic bets, because that is going to be your partnership as a solution, as a product. You gotta convince them, and basically say "Hey, we're built on your technology, so we have to use you, so why don't we come together and as a consortium or as a partnership, or why don't we, Gun, just hire you, and you bring the technology, the product, the solution that you've developed as one of our own, and you act as the ambassador out to these customers that you already have?"

\[00:56:09.04\] That's the strategy I'm taking - I paid a lot of attention to the open source community and I'm trying to partner with the people that have the solution that these big companies need, and that solution can only be built on top of Gun. Then you capitalize that and crack the market open.

**Jerod Santo:** So ultimately, are you selling services to these enterprises? Are you selling license? Posting? What's the ultimate sale?

**Mark Nadal:** It'd be selling the solution that the people in the open source community have built on their own, and convincing them to partner with us. Does that make sense?

**Adam Stacoviak:** No.

**Jerod Santo:** No. \[laughter\]

**Adam Stacoviak:** I'm missing it.

**Jerod Santo:** Say it again, or say it in a different way. Do you have like a pricing page? Maybe you can just tell us...

**Mark Nadal:** Yeah, in terms of our traditional pricing page, you can just hit gundb.io and then click on the pricing page and there's the boring, old "Pay for support $200/month". That's not scalable.

**Jerod Santo:** And that's your current offer and you're talking about this new go-to-market strategy that you're trying to get going.

**Mark Nadal:** Yes.

**Jerod Santo:** And you're trying to talk about it without revealing specifics, so you're being generic and we're just not tracking the generic.

**Mark Nadal:** Yes... I'll take a made-up example. Imagine that, because you have enough traction on your developer project, you can become friends with the other hyped developer projects, like React or Webpack, or whatever it is. Make sure you become friends with those guys, and don't just use them... They have needs and they have clients and customers and friends of their own that are gonna have needs, so circle through your network and find somebody who's now built -- let's do IoT... Somebody who's built this really cool IoT app on top of your developer tool. And they happened to mention like, "Oh, we're actually gonna start implementing this at the company I work for." That's perfect, that's a brilliant start!

You know this developer that you've been hanging out with - because it's just open source, you're buddies - hopefully developed that tool or solution not under their company, but on their weekend hours. Partner with them and say, "Hey, join up with us. You already have an existing in at your company. Now, rather than just giving away what you've built on the weekends to your company, we will brand it for you, you will partner with us and we'll collectively sell it to the company." Now you have not only a solution, but you also have an in at a company that wants this product, and that's gonna be your first sale.

Once you have that first sale, you leverage that first sale to get this magical marketing business development team that you hopefully have hired - or if you haven't hired, the other connections that you know... You go back to those people and be like, "Hey, you're not keeping up with the Joneses, because Brad over here just purchased our services, and we're taking off and we're really cool. Do you wanna buddy up with us?"

It's so weird and so ethereal, but just a couple weeks ago it clicked in my head - as soon as I land one deal, I use that as leverage to manipulate another deal... And see? There's my word - manipulation; I'm being a villain here. It's the cool kid factor. You're selling more yourself than you are necessarily the technology of product. You tell them, "I'll do whatever it takes to make sure you guys are happy", and then you deliver. Once you got those people signed up, you then go to an investor or a friend that you know that has a connection to senior product at X and X company that's really big, and you pitch yourself. You leverage your network, you leverage your connections, you leverage your sales, you leverage your technology until you start physically seeing deals happening.

**Jerod Santo:** \[01:00:10.00\] Here's another way to do it - you get that meeting that you're talking about, and then you go in and you say, "Listen, if I can beat you at this gunslinger game, you're gonna buy my product."

**Mark Nadal:** Yes.

**Jerod Santo:** And then you always win. \[laughter\] Let's do this, Mark, because it is hard to track in the vague... When you get this thing rolling, because it sounds like an interesting strategy -- it's difficult to track exactly what you're doing, because you're speaking hypothetically and what not, so I don't fault you for that, because that's just the situation, but when you do get it going and we can actually see one in concrete, give us an email. Maybe we'll bring you back on real quick, have a conversation...

I'm sure that people wanna see it in action, because I don't know if a VC-funded open source life is necessarily the dream, but the sustainable open source life if the dream of many of us and our listeners, so we wanna know these different ways that we can make that viable. It sounds like... I don't know if you have a way, but you at least have a...

**Adam Stacoviak:** A good idea.

**Jerod Santo:** A good idea in the making; we'll see if it pays dividends.

**Mark Nadal:** I can be the guinea pig for...

**Jerod Santo:** Yeah, be our guinea pig, would ya? And if not, just gunslinger it.

**Mark Nadal:** Yeah, feel free to cut out a lot of this section, because it is pretty ethereal.

**Adam Stacoviak:** Nah, we're keeping it.

**Mark Nadal:** Yeah, the gunsling, it sounds like a good way to reference it. And no, you have to work your butt off, you have to hustle... Not only in coding and programming, but also going and speaking at tech conferences and stuff like that.

**Adam Stacoviak:** It's a tough road.

**Mark Nadal:** But I know everybody that's listening to this show is already doing that. Don't undermine the value of your ingenuity. You're a hacker, and you heart can say, "Hey, I can do that, I can solve that problem and gunsling it."

**Jerod Santo:** Gunsling it - I love it. We're actually running low on time... Let's do this: you've given the elevator pitch, you've even given some stuff people are building on it. Give us a quick "Getting started" and a call-to-arms for the open source hackers out there, and if they wanna get involved with Gun or they wanna try it, they wanna see what you have to offer - where do they go, what do they do? What would you love them to do?

**Mark Nadal:** Yeah, so it should be pretty easy to get set up with Gun. Just NPM install Gun and then go into its directory and run Npm.start. If you don't have Node.js, there's some guides on the readme. If it's not easy to get started, jump on the Gitter channel - the URL for that is on the website and the repo - complain about any problems that you guys have had, and get to know the community, because realistically, exciting ideas like Gun and decentralized architecture is about the community and the people behind it.

First and foremost get to know us and other people in the community, and we'll help you out as much as we can.

**Adam Stacoviak:** Excellent.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** That is a good "Getting started". Gun.js.org... You've got a little fun "Try it now" there, which is pretty awesome, and obviously the docs and stuff like that, as you've mentioned. We'll put all those in the show notes, the mentions and stuff like that that you've talked about, the Gitter... All that will be in the show notes. Listeners, you know that; I don't even have to tell you. Just go to the show notes, it's all there for you... Enjoy.

Any closing thoughts before we let you go, before we close this thing out?

**Mark Nadal:** Yeah. To me, it's really important that no matter where you are in your career as a programmer, whether you're a VC-backed startup, whether you're at a day job with nice programming security or if you're just starting to learn, you are able to advance your career by looking for those problems that you've had yourself, taking initiative to fix them and presenting them to people, to the open source community, posting it to Hacker News and other forums, going to your colleagues at work and showing, "Hey, I've made this ten times easier for us", or maybe even trying to get connected and pitch VCs.

\[01:03:59.15\] If you wanna grow in the opportunities that you have, there's opportunity all around you. Nobody is in a different league compared to anybody else, it's just that every person, no matter where they're at, takes initiative to tackle hard and interesting problems that they are convicted and curious about, and follow through with perseverance and diligence. So go get 'em, go strike, make fire and make the world a better place for all.

**Adam Stacoviak:** Yes, please do that, listeners. Mark, thank you so much for joining us, man. This was fun.

**Mark Nadal:** Thank you so much for having me on, I really appreciate it. Shout out to Kevin again for recommending me; it's been fantastic and a huge honor.

**Adam Stacoviak:** We love you, Kevin. Thank you!
