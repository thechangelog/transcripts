**Amal Hussein:** Hello, JS Party listeners. It's me, your host, Amal Hussein. I am on JS Party, which is, as you know, a weekly celebration of JavaScript and the web. And it's like a double party today, because we're going to be talking about none other than PartyKit. You may have seen the buzz around PartyKit in the recent weeks. Obviously, it's a one-year overnight success. But anyway, so we're excited to talk about PartyKit. This is gonna be such a fun show, I can feel it in my bones. And with me on the show today is Kball. Hello, welcome Kball.

**Kevin Ball:** Hello. Excited to be here. I love how, you know, we're playing the intro music, and Amal and I are just like rocking out, and Chris is... Completely... Silent. And Sunil has got his face, he's checking us out, he's like "Okay... What have I gotten myself into?" But b0neskull, your deadpan just every time blows me away.

**Amal Hussein:** Every single time. It gets me every time.

**Christopher Hiller:** It's like I'm not even trying...

**Amal Hussein:** Oh my god. Okay.

**Kevin Ball:** "Except I can't do it if I try..."

**Christopher Hiller:** Yeah...

**Amal Hussein:** So this is why you're funny, because - yeah, I couldn't even be that funny if I tried, you know what I mean? For what it's worth. But anyways, welcome, Chris. You're also on the show today. Hello.

**Christopher Hiller:** Yeah, I guess I am.

**Amal Hussein:** Yeah, indeed. Indeed. He's here all week, folks... And our very, very, very, very, extra, extra, extra special, special, special, special guest on the show today is Sunil Pai. Welcome!

**Sunil Pai:** Hi. Thanks for having me. I didn't realize that the intro music is what I can only call like robot dance makeout music, but... That was pretty good. That was a surprise. I liked it.

**Amal Hussein:** That's a hot genre. I think we need that genre on the internet. I wanna listen to robot dance makeout music... It's great.

**Sunil Pai:** I mean, if you have alumns writing documents and doing art, the next step is of course having them kiss, I imagine. So...

**Amal Hussein:** \[laughs\] Oh, gosh... Anyways. Alright, well, so we're here to talk about PartyKit. It's a developer-first platform for multiplayer collaboration. What are all those things we're going to find out today? So Sunil, before we get into the double-party situation that we've got going on here, can you tell us a little bit about yourself? I feel like you're kind of internet-famous... So tell us, tell us. And you're also internet-mysterious, because he's one of those people that doesn't have a real photo on Twitter... It's like, something yellow and black to represent, I'm sure, his love of JavaScript... Yeah, so you're kind of mysterious. So tell us about yourself, Sunil. Who's the man behind the party?

**Sunil Pai:** Well, first of all, thank you so much for having me over. I'm extremely grateful. I've followed JS Party for a while, I loved some past episodes... And yeah, the who's who passes through here, so it appears I needed to raise a pre-seed round and become a real founder to show up, so thanks for having me...

**Amal Hussein:** Oh, gosh...

**Sunil Pai:** I also appreciate how y'all named the podcast after my company... You're welcome, of course. I've been an engineer for a little under 20 years now. I've done a bunch of things... Which is nice. In the past I've done like eCommerce, I've worked on government websites, small startups... I think the last six years are kind of what people are most familiar with. I moved to London and I worked in Oculus for a while. By the way, writing React for VR applications is the most sci-fi job I've had in my life. I miss it. It's crazy.

**Amal Hussein:** Wow. That's trippy.

**Sunil Pai:** Yeah, it is. Then I spent a year in the React team. I think I'm probably the worst person to have been on that team. I wear that badge with pride. It takes a lot of hard work to do that.

**Amal Hussein:** Yeah. And so that just means you scored 99.99997, instead of 99.9999... Like, just to be clear. Bad at contributing to React means you're -- yeah, you're like a one percenter, my friend... But it's fine. You can be modest.

**Sunil Pai:** I shipped some things there. I shipped like a testing API, which was nice. I helped do a bunch of releases... It wasn't a bad year all around. I worked in a bank for a year... I don't recommend that to anyone. Companies are way better. But I worked in Cloudflare for a year, and that was cool. What happened is I got interested in the tech right about the time the beta for Durable Objects happened. And we'll go into that in a bit... But I tried using the product, and it was a pain in the ass, so I complained about it online. I got into their DMs... And at one point, I was like "Do you want to just hire me to come fix it?" So they said "Yeah, sure. Let's go." And it was fun.

\[00:08:02.18\] What we did was we rewrote the CLI from Rust to TypeScript, which is the opposite direction that most other projects go in, and it was the right thing to do. It was a lot of fun. So I did that for a year, and not only was it fun, but I really got insight into I think what the next phase of like computing, edge computing -- the way Cloudflare does it is absolutely fascinating. And then I left, because as you know, it's a time of global world peace; the economy's doing so well... It's a great time to start a company, I figured. And I did that.

And I think I left Cloudflare in September last year, and it's been an absolute ride since then. Things escalated really, really quickly, to the point where we just announced a funding round for BodyKit, a team, an office, I have my first office... I love it, it's beautiful. We share it with TLDraw. But yeah, people might know me otherwise from a CSS-in-JS library I did a while ago called Glamour. And that was right in the middle of it being an extremely divisive topic...

**Amal Hussein:** Oh, yeah.

**Sunil Pai:** I have a lot of stories from there that I'm saving for my memoirs...

**Amal Hussein:** Oh, wow. I bet.

**Sunil Pai:** Yeah, I think just being a part of the React community really brought me into like the public because there was a lot of experimentation in the past. But otherwise, I like making friends, and I have a loud mouth, which is why people hear me, whether they want to or not.

**Christopher Hiller:** So can I ask you a question? So did you start building PartyKit before you left Cloudflare?

**Sunil Pai:** No, not really. So I left Cloudflare, and I knew that I wanted to do something in real time with Cloudflare. I was like "Okay, this is special. There's something here, and very few other people get it." I was hanging out with the TLDraw team, and they were doing a full -- so TLDraw is an online collaborative infinite canvas, and it's beautiful. The founder is a friend of mine. He obsesses over arrows, which is why tldraw.com has the best arrows in the business... His words, not mine, but I agree. And they were doing a rewrite, and they needed to do multiplayer well, because they want to compete with big shots in the business - Figma, Adobe, whoever it is. And it struck me that there was a match here for the technology and their desire.

So I built out the deployment platform for how they do multiplayer. The rest of their app is deployed on Vercel, but all the multiplayer networking stuff happens there. And it went really quickly. We had like a prototype sort of working in about a week, two weeks, and it was production-ready in like two months. With a team of like three, four people... Which is kind of unheard of for that. And it went really well. The launch went well, it scaled really well for such a small team, and it made it like really cheap for them. That's when I knew that this product -- I was already thinking about real-time; to be clear, I was thinking about it for the past six years, through Oculus, through React... Even in the bank, because I was in the investment branch; lots of grids and stuff... That's when I was like "Oh, this deserves to be a product platform for everyone."

So I just started -- I made a Twitter account for PartyKit, and every day I just started saying what I'm building and shipping. And the interest for it was super-intense. My DMs got trashed on a daily basis for like weeks and weeks, because they were like "How are you doing this? This looks cool. This looks so easy. Can we be a part of it?" I mean, the other VCs started getting into it by January, and I refused to talk to any of them. I'll tell you about my fundraising journey in a bit. But I sort of knew in Cloudflare that whatever I work on next has to be in this space.

Another detail here is as an immigrant in the UK on the visa that I'm on, after about five years you get something called ILR, which is indefinite leave to remain. What that means is you don't need a visa sponsor anymore. You don't need an employer to stay in the country.

**Amal Hussein:** Oh, that's awesome.

**Sunil Pai:** And like I said -- I mean, I have great skin, but I'm turning 40 this year. I know I don't look it, but...

**Amal Hussein:** Yeah. I mean, you don't look a day over 30, my friend.

**Kevin Ball:** Welcome to the dark side, right?

**Amal Hussein:** \[laughs\]

**Christopher Hiller:** \[00:12:01.27\] Look at this face. If I get a trim and a haircut, \[unintelligible 00:12:02.12\]

**Amal Hussein:** I know...

**Kevin Ball:** I don't know about you, but I have to be careful. I look young, so long as I don't let my beard grow out. When I let my beard grow out, my eight-year-old says "Daddy, why is it all grey?"

**Christopher Hiller:** Oh, no... Oh, that must hurt.

**Kevin Ball:** Stab to the heart...

**Amal Hussein:** Okay, so first of all, I want the United States to just -- I hope the United States government is listening... Like, please institute this. There are so many talented workers in this country that just need to be a part of this place forever, you know what I mean?

**Sunil Pai:** By the way, if you want to take that tangent for a bit, I can tell you, as an Indian, it's easier for me to move to the UK... So five years, you get ILR, and a year after that you get to apply for citizenship, which we are doing soon... Which is kind of weird, for an Indian to get a British citizenship. And there's a whole lot of context there; we won't even go into that. But you can get a British citizenship, and then move to the US, and it is way easier for me -- like, it takes a lot less time to do that than it would be to move to the US, do the H1B, get a Green Card... That would be like 20-30 years; maybe longer now, by the way. I don't even know. It's a mess right there right now. And I'm like, y'all are missing out on like so many people who want to come and like live and actually build great things there. American immigration is weird.

**Amal Hussein:** Yeah, it's super-messed up. But also, I'm just really glad that -- I was gonna ask, so you're based in London, continuing to stay there... You're able to raise funds without coming to like the Valley... That's dope. That's so great. And by the way, for the record, I have to state, I invited Sunil on this pod before he announced his funding round.

**Sunil Pai:** That's true. You did.

**Amal Hussein:** So I just want to put that out there, Sunil. So we didn't need you to be funded before you came on the show. I was just off Twitter, and then I came back on Twitter, and then I was like "Oh, PartyKit. Cool."

**Christopher Hiller:** It does help though, to be funded...

**Amal Hussein:** Oh, no, of course it does.

**Christopher Hiller:** Did I say that? Nevermind.

**Amal Hussein:** No, it does. It does. Money - I mean, everybody needs to eat. People need to -- you know, you need to be able to hire people. Anyway. So we're taking tangents; we're gonna go back, rolling ourselves back out of this tangent. So we were talking about the PartyKit kind of collab, so the origin story, I guess.

**Kevin Ball:** Can we even like go into what is PartyKit? What is PartyKit?

**Amal Hussein:** From Sunil's mouth.

**Kevin Ball:** Because I know you've been getting tons of stuff on Twitter, but there's probably a fair number of people listening to this who are like "Okay, all this back-story for a thing -- I don't know what it is yet."

**Sunil Pai:** So the one-liner that I like telling people is it's like Vercel or Netlify, but if you're building real time collaboration apps. Your next Google Docs, Figma... Your next game, your next literally even triple A games, but literally if you're building a game, you should build it on PartyKit from day one. It's great for brownfield apps as well... But that's like the one-liner. Hey, if you're building something in this space, you should use PartyKit right now. It works well with other stacks. So if you are already using Vercel, AWS etc. for the rest of your app, that's great. You should use this, because we make something that used to be extremely hard; you had to be like a distributed systems expert. It used to be very expensive, you had to like get clusters of servers across the planet to do it right... And it used to be hell to maintain; you'd have to hire a team of people and pay them salaries, and stuff. We changed the physics of that. Like any other technology paradigm, things that were expensive and hard, we have commoditized.

You know how in the late '90s, early 2000s you had to be an expert to set up a blog, because you needed to know Linux, and Apache, and MySQL, and whatever... But then it became commoditized, to the point where most people who use websites now don't even use a credit card. It's mostly free. We're doing the same thing for real-time apps; we have taken that and made it so dramatically simpler, accessible... Junior developers love using this, which is, by the way, just a source of pride for me, I should tell you. It has been one of the goals of PartyKit to do that.

\[00:16:04.25\] The longer version is that the internet is moving towards a multiplayer real-time model, simply because the technology is suddenly becoming more accessible... And PartyKit hopes to be the primary way that you do that, because we're just removing all these roadblocks and friction, making it open source so that it is so transparent; you could probably host it on your own infra. And we want to usher in this next age of the internet. It becomes a lot more interesting when you start thinking about the way LLMs interact also in multiplayer things, but we can talk about that in a while.

So PartyKit is a regular -- man, let me put it this way... On some days, I wake up and I'm like, I'm so glad to be working on the cutting edge of internet and LLMs and real-time collaborative stuff. It's amazing. But on other days, I wake up and I'm like "Senator, we make websites. That's what we do."

**Amal Hussein:** \[laughs\]

**Kevin Ball:** Yeah. So I like your one-liner. This model of "Okay, we're the--" Vercel and Netlify did something great, which is "Okay, if you're a frontend developer, you know your stuff... Deploy on us. We'll handle everything else, and we'll make it easy to deal with these other different things." And you're saying, "Okay, I want to be that for multiplayer." Now, for somebody who is not in the gaming world, and is not doing other stuff, what are the primitives that make something multiplayer? What is it about -- like, I use Figma, and I love the fact that I can follow somebody along. But what are the underlying technological primitives that you have made cheap?

**Sunil Pai:** Great question. By the way, the Figma blog has a bunch of blog posts about how they did it, which is just a great reading for -- and they're written really well. So for any kind of engineer, whether you're a junior or senior one, you should literally go and -- I'd be happy to share links in a while. But traditionally, the way real-time multiplayer worked is by setting up messaging pipelines. Literally, a JavaScript object that says "Hey, this is an event which changed this square's background to red." You write a little object like that, and you'll send it into the void, and there are little pipes that make sure that message reaches everybody who's connected to that particular drawing, so that everyone sees the square with a different background color. Fair.

It turns out, this is a hard problem, because computers are -- we are not all using the same computer; you have to make sure that the messages are ordered in the same order, I guess, so that everyone sees the same thing on their screens. You have to make sure that the infrastructure is fast, so that there's not a lot of delay in between these things... Something like 100-200 milliseconds might be fine, but if it's in the order of seconds, and let's say you're also having a video call while doing it, you're just -- it's a terrible user experience.

What happens if you're both editing the same item, at the same time? Let's say one person changes the background color, and somebody deletes the square. What should the user see? It's a hard question. So that's why -- and for the crew out there, if you don't know, distributed systems is one of the hardest computer science problems. The other three you might have heard is caching, and naming variables, and misogyny. So those are the ones that we aren't actually working on right now, but we are working on trying to fix multiplayer and collaboration.

**Kevin Ball:** Well, and through the course of this, we should figure out how multiplayer is going to fix misogyny, because I would love that.

**Sunil Pai:** I have some ideas, we can talk about that. Anyway, so that's how it traditionally used to be done. And still, it's expensive. But as hardware and infrastructure started getting a little cheaper, one of the things -- Figma kind of made this mainstream. A lot of other people did it, but Figma did this mainstream... Which is like "You know what - what if instead of we do this message passing stuff, what if we also spun up one process on a machine somewhere, and we made sure that every connection, usually a web socket--" WebSockets were announced in 2008, landed in Chrome in 2009. So like real-time has been mainstream since then... But Figma was 2014, 2015... I forget when.

**Amal Hussein:** \[00:20:15.19\] And landing in Node this October. We're recording this podcast October 2023... And yeah, Node 21 is going to have WebSocket support. And that issue has been open for years.

**Sunil Pai:** I love it.

**Amal Hussein:** It's very exciting.

**Sunil Pai:** So folks like Figma, who can afford to build this sort of thing, Evan Wallce and gang - I love them. Evan Wallace, of course, creator of ESBuild as well. I'd love to talk about that later. They say "Hey, it's one process, and we make sure all these connections connect to this." It makes the programming model a little simpler, because now you don't so much have to worry about ordering of messages, because it's all happening in one space. It's easier to have a source of truth. Literally, let's say a variable in this process, like a const, or a var, or a let. So it becomes a little easier to make sure that the folks who are connected to it are seeing the same object. And it simplifies the programming model a little, but it still isn't cheap per se. You still have to make these clusters, you have to invest a lot as a team into figuring out the routing in the world, from wherever people are connecting to it, to make sure that it connects to the same thing. But they did do that, and it works really well. In fact, one time -- I think the Figma homepage was down, so they just opened up one Figma document to the world as their homepage. I don't know if you remember this... It was great. There were just like hundreds of cursors on the page, people just waiting for -- and having little cursor parties.

**Amal Hussein:** That was like such a good day for the internet.

**Sunil Pai:** Yeah, it was good.

**Amal Hussein:** I feel like it was just going back to like the spirit of what the internet was supposed to be. It was always a collaboration tool. Like, that's exactly what it was for. And fun fact, funny, funny story about collaboration... Wi-Fi was birthed out of Cisco, because two grad students at Stanford, that were like dating, wanted a way to email each other, but they weren't on the same land network. And so they invented a Wi-Fi router.

**Sunil Pai:** That's amazing.

**Amal Hussein:** Right. And so it's interesting how our need to connect as people drives innovation in technology. So yeah, it's really great to hear this back-story of your PartyKit origin story.

**Sunil Pai:** Right. So Figma has that, but that is not technology that's available for everyone. That's on the Figma platform. In 2020, Cloudflare announced this tech called Durable Objects. So Cloudflare Workers - incredible product. So Cloudflare started off as a CDN company, just making -- the way Cloudflare does its network is incredible; they don't necessarily have even their own data centers. They go and install that hardware directly in the ISPs etc. Which is why things that are fronted by Cloudflare are so fast. They are the default choice for a CDN in this day and age. There's nothing better. They hired Kenton Varda, who was doing a bunch of stuff, previously ex Google; he came into Cloudflare and he invented Cloudflare Workers, where he was like "You know what - you have all these machines that run CDNs. We're going to run JavaScript on it." And it's wonderful, because you can write a little function that takes a request and returns a response, and it finds it in a spot that's closest to you as a user. So inside London, it's like - I want to say like 10 millisecond latency on a good day, which as far as I'm concerned, it's instantaneous. That's sometimes faster than a Service Worker in your browser responding to responses. So it's crazy fast.

**Amal Hussein:** Hold on, hold on, my JavaScript's still waking up, you know? \[laughs\]

**Sunil Pai:** Exactly, exactly.

**Amal Hussein:** My React app is still loading. Hold on. Hold on.

**Sunil Pai:** Exactly. React constructing your DOM tree is probably slower than the response time from --

**Amal Hussein:** \[00:23:59.03\] Also, fun fact -- another fun fact about Cloudflare is that anytime you install something from anywhere, any package manager, as long as it's coming from the Npm registry, it's fronted by CloudFlare... Unless Microsoft has changed that.

**Sunil Pai:** I think they still do still do.

**Amal Hussein:** Still do, yeah.

**Sunil Pai:** \[unintelligible 00:24:14.09\] So they have Cloudflare Workers, and in 2020 they announced Durable Objects, which are like Cloudflare Workers, except they're stateful. They do things which are awesome. One is they spin -- for a given ID, which could be a document, a game session, a codebase... Who knows. Whatever you're using to build a collaborative thing. It spins it up in a location closest to the person who first initiates it. And secondly, much like the Figma model, it guarantees that every future connection for that ID connects to the same process. Which suddenly -- like I said, it makes the programming model for someone who's building an application like this extremely simple. There's a \[unintelligible 00:25:00.26\] this real-time programming model calling a broadcast, right? One user will send one of these edits to a document, and you have to do a broadcast to everyone else that's connected. So this would be a hard problem in the past. But in a durable object, it's a for loop, because you can store all the WebSocket connections in an array, and literally do a for const connection in this array, send the message. In fact, that's how .broadcast is implemented in PartyKit. It's a for loop.

So they built this stack, and that's one of the reasons I also got interested. I was like "Oh, this is some sci-fi s\*\*t. I really need to learn more about it." That's how I got into Cloudflare, learned more about it. And when I left, I was like "There is a potential to build something very -- to bring this to the rest of the world. To show people how to use this." And there's a way to simplify it if we figure out what the use cases are, instead of just -- like there's a whole bunch of boilerplate etc. that PartyKit simplifies for you. But there are two or three key things about PartyKit that I really like. The first thing is the name is fun. It's nice, I like it. It's a kit for making parties, which is cool... But I think the abstraction layer is important, because it lets you write the code that runs on these systems.

If you want to use one of these funky CRDT libraries, which are data structures for building collaborative stuff - they do resolution for... Like I said, the hard problem is when the same object is being edited, which edit wins? It makes that a lot simpler. Yjs is a very popular one. Kevin Jahns is the person who built it. Amazing project. And you're going to see a lot more Yjs in the future, I think. But if you don't want to use Yjs, if you want to use a state machine by the folks at Stately; if you want to use XState, you can use that. If you want to use AutoMerge by the folks at Ink & Switch, you can use that. If you want to just make a regular JavaScript object that you do last write wins, you can do that. I think this is important... I think it's important that this thing is treated as infrastructure, and not as a third-party black box service. That is how we make it accessible to literally everyone on the planet.

There are a lot of other third party services, other players in the space who take a different look at this, and that's great, because they get to build very polished developer experiences around it... But the PartyKit story has to be at this level of abstraction so that we simplify it and make it accessible to everyone else on the planet. It's also why -- I keep saying the way that we do pricing, but we don't have a pricing page; hopefully, \[unintelligible 00:27:32.21\] But we should. People want to give us money. But it means that we price it as infrastructure; you pay for CPU, bytes on the wire, memory, that sort of thing. The way that you're used to paying for any other kind of web infrastructure, right? We don't want to do it on a per-user pricing, because then someone who connects for like five seconds is charged the same way as someone who connects for 20 hours, which tilts the bias for the kinds of applications you build in with this.

**Kevin Ball:** Can I jump in real quick and make sure I'm understanding?

**Sunil Pai:** Yeah, sorry. You should stop me, because otherwise I braindumps.

**Kevin Ball:** \[00:28:11.24\] Yeah. So just so that I'm understanding... I'm going to reply back what I think I heard. So talking about initial versions of distributed systems, or real-time systems - you essentially have an event-driven model, where you're sending out these events with changes to all the users. But you don't have a central process that knows who are all the people connected. So there's some sort of like query-based or database-driven, like "Oh, this change happened. I need to look up all the people who are connected and go." Version two is I have a central process, so everyone connected to this particular document, or whatever it is, who is currently connected, it's easy for me to access. Those are the people to send things to. Now, question on this - is it still an event-driven approach, where you're sending out these events that are the changes, or is it somehow communicating a snapshot of current state?

**Sunil Pai:** It's still event-driven; you still send out these events. But importantly, unlike the previous thing, which was only messages, you now have a digital server where you can run code that acts on these messages, and decides how to act on them. Like, what you should do; who do you respond to. This makes sense where you might want to run some logic which -- you literally want to make sure that they are the right types of events. You want to make sure that no one is spamming this particular document with unneeded things that might break your machine. You might want to do stuff like rate limiting, you might want to do stuff like batching, you might want to change the events itself that are sent. You might be getting some event from -- presence is an interesting one. Like, if you go to the PartyKit homepage right now, it's a lot of fun, because it shows everybody's cursors from across the world who are on the page, and everybody keeps playing with it. So the events you send down are probably "Okay, this is my mouse position, and this is the country that I'm from." Actually, the country flag is added on the server side, which is not something you can do otherwise from a browser, unless you ask for location, and we don't want to do that. But also, we don't necessarily have to send all the events that are happening. We could buffer it, we could throttle them... And these are things that can make the application better. You actually get to run code that defines the behavior of this application. Does that help?

**Kevin Ball:** Got it. So basically, in the old event-driven world, because you didn't have a centralized place where there's keeping track of state. You just have to send everything and make the clients really smart.

**Sunil Pai:** That's right. Exactly right.

**Kevin Ball:** And in this version, you have kind of a central process that you know every event is flowing through this process. I can write logic thinking about these events, aggregating them, doing other fun things, and then send them out to my clients. So my clients can be a little simpler, easier to understand, and the programming model is more centralized, easier to reason about. Is that accurate?

**Sunil Pai:** Bang on. Yeah, that's exactly right. You can even do different logic based on the kind of people that are connected. If you're connected from a mobile phone, then you want to send them a little slower, so that the person's phone battery doesn't die. Such very basic decisions on every second of user experience you can define in these little servers.

**Kevin Ball:** Got it. Okay. This makes sense. Can you now flesh out a little bit -- maybe you said this already, but I missed it... How do the Cloudflare primitives around having Durable Objects and these edge-based workers help you in writing this type of infrastructure, and making it available to everyone?

**Sunil Pai:** Right, so the Cloudflare primitive durable object is extremely powerful, and a little more low-level than what PartyKit provides. It expects you to do a whole lot of handshaking for checking whether the header is coming from a web socket, upgrading it... The way that Cloudflare does bindings for declaring these kinds of rooms etc. - they're extremely powerful, but right now they require a little bit of... You need to be a little bit of an expert to understand how these systems work.

\[00:32:07.25\] An example I can give you is the difference between running your own Node server, versus writing a serverless function for a platform. When you're running your own Node server, not only do you need to say "Hey, create an app with Express.js", which is a popular library for building the servers, "run it on this port, put all these middlewares for doing rate limiting", what have you. "On the machine itself run process manager that runs it eight times because there are eight cores on the machine..." A lot of things that are otherwise not so much in the purview of an application developer. But serverless changed that, which is like "Hey, can you write me a function that takes a request and returns a response object? And we'll take care of all the rest of it." And that's a good abstraction for a big number of use cases. Application developers get it, they don't need to become subject matter experts... Importantly, for the people who are managing the platform, they can optimize and make changes in this layer without needing their users to change the code. They can change the platform, it's built this way.

So PartyKit is very similar for that in a real-time context. You still have to write a little class which says "Hey, on connect, on message, what is it that happens?" But we take care of so much more, so much boilerplate. It's open source, so you can actually look into it and see how we do it. It's not a secret... Which is just a strange thing to do in 2023, but I believe in it. We take care of all this boilerplate, and adding error logging, reporting, analytics... Hell, even like just figuring out the efficient way of doing billing for you; some performance benefits that you would miss if you had to do this by hand. That is what PartyKit adds on top of the Cloudflare platform. And because it's 2023 and developers expect a lot, there are a number of features that we add again on top of it. So - environment and secret management. Hey, you want to connect to a database from inside PartyKit, and you want to store a secret token that you attach for it? Well, we're good for that. Hey, you want for every GitHub PR that you put up, you want it to spin up a little preview environment, that goes well with the Vercel preview environment for the rest of your app, test those changes and push it up to production? Open source libraries that make this simple. So what is the React.js for real time? It's probably something like Yjs, it could be something else. There are a lot of players in the ecosystem. Can we give them first-class bindings and libraries so that they work well on PartyKit? All of these things require a whole other company. That's why we say we are a developer-friendly tool.

One of the big motivations for building this was building a platform that I enjoyed using. And I love Cloudflare, but I figured for a specific set of use cases, for this vision of the internet we have coming up, what does the platform look like? A lot of it is boring stuff that a lot of people expect from a platform, and we're building that... But there's also the "How do we make it easy for someone to build something so cool from zero to one? Can we give them a starter template for building a game?" You know what I mean? So that's kind of also like what PartyKit adds on top of this. And my handsome face, which is nice...

**Kevin Ball:** Okay, so I like your metaphor of basically - Cloudfare, what they're exposing right now is "Run your own server for this type of stuff. We're the Express of this world", if I'm understanding a durable object properly... Which - I have not used them, so I'm trying to like pick this up as we go. But they're basically giving you kind of a way to do that centralized process that's going to have state that you're able to do it, and they take care of picking it up and making sure the state is there, and spinning it down, or whatever happens in the background. And then what you're providing, conceptually, is "Okay, now we're at the serverless function layer, where you don't even have to think about all the things that go into making your server. You write your functions, you conform to this API, and we'll make it happen like magic." Is that fair?

**Sunil Pai:** \[00:36:02.19\] Bang on. It's with the requirements, right? Like "Oh, here's a little state object that you can hold on to. There's a little storage, a key-value thing that you can use to store if you're not using your own database." We try to get you to writing the code that you want to write really quickly, without all this boilerplate, and a whole bunch of nice developer tools and libraries to support you.

**Amal Hussein:** Yeah, that's really cool. So it seems like Durable Objects are -- clearly, it's the innovation, it's the secret sauce behind what you're doing at PartyKit, but I think what a lot of other folks are also doing around like this incredible technology. Could you share a little bit about that? Because one of our listeners, when we posted on our Slack channel that we're gonna be talking about PartyKit, he was like "Oh, wow, that's so cool. That's really neat. I feel like I should start a new acronym for like Yet Another Durable Objects Wrapper." \[laughs\] So can you talk a little bit about that?

**Sunil Pai:** So the broader theme here is -- so I think I was mentioning this, too... I don't like calling them competitors, and I have a very specific reason why. For multiplayer real-time collaboration to sort of win, to become mainstream, one of my insights over the last year is that there actually have to be multiple players in this space, exploring different avenues. PartyKit doesn't do some things, and we would be a different company if we tried it... But there have to be multiple companies that try out different approaches to making this mainstream, simply to provide the spread of options for different use cases etc.

Don't get me wrong, I think PartyKit is very good, because it is actually fairly general and low-level... But hey, sometimes you just don't want to have to write even the code that we give you. There are specific use cases that other companies build highly integrated, vertically integrated stuff, or they do it differently. I'll give you examples. Some of the older players in the space - it's kind of weird; in this industry, even a few years is like older player... They are still going strong. So I think about other message passing companies like Pusher, Ably, I think PubNub is also one of them... All great players. I know some people who work there, wonderful people. Then there are people who are trying to build that, but with Durable Objects. I think one of those is called Sockety. There is a company that is trying to build its version of Durable Objects. They call them Session Backends; the name of the company is Drifting in Space. Love that company, love those people. They're New York-based, I think.

There is a popular player in this space right now called Live blocks. They have a highly -- I want to call them like vertically-integrated solution where they provide CRDTs as a service, a comments widget as a service; even a Yjs backend as a service. Very easy for you to add cursors etc. to your application. So they take these vertical use cases and provide not just a very polished experience for using it, but great documentation and examples for those use cases. I like them; they're a French company. I think that they're doing a great job.

There are others that I might not even know right now, or are probably building it as we speak. Oh, another one I heard recently is called Velt. They're also trying to do vertically integrated comments as a service, cursors etc. Here are React hooks that you can put into your application and get going.

**Amal Hussein:** So more is good, is what you're saying, right? More players is good for everyone. It raises the tide for everyone, essentially.

**Sunil Pai:** Exactly. The mistake would be thinking that there is a particular size of the market and someone should go to win it. The truth is that what you can do is dramatically expand the size of the market by having multiple players competing with each other, but trying to provide great experiences for different use cases, so that more and more people use it. Because I think I mentioned, WebSockets landed in Chrome in 2009, and it is not a mistake that it's taken multi-billion-dollar companies to build a Google Docs, a Figma, or Triple A games. Because it wasn't just about the software, it's about how expensive it was.

\[00:40:11.28\] So we have like 15 years of unlearning to do for the world, for millions of developers, to show them that it is now, if not easy, it's definitely straightforward. It's copy-pastable. If your game gets popular overnight, you're not going to go bankrupt with the bill that hits you in the morning. Very basic documentation of what the primitives are. We call it a party that is a highly technical term for these little rooms, things that -- other people call it rooms. So technical, right? We keep talking about that all the time, and we're like "I guess we're sticking with it." Everyone likes the red balloon; I guess the red balloon is the thing we stick with now.

**Amal Hussein:** So what's the value prop for PartyKit though? You can do multi-collab already in the world, right? ...with or without Durable Objects. And so what's PartyKit bringing to the party that's unique? Because you guys pitch yourselves as the Stripe of multi-collab. And Stripe is really unique in the sense that it really puts the developer in the power seat, right? Like, you can kind of create your own experience, run the code on your hardware etc. So what's the value prop there for PartyKit?

**Sunil Pai:** \[unintelligible 00:41:21.05\] she told me this great quote a few months ago, that I need to tattoo on my butt at some point... Which is that developers don't necessarily want magic, but they want to be magicians. It's not like writing code is a bad thing, but making it easy to write the code that enables people is such a thrill. Frontend developers know this, that you can write some code and refresh your page, and immediately it's there. And you can do this 1,000 times a day. I think PartyKit is special in that way, that it gives you complete control over what's happening in these little servers. Much like writing a serverless app, deploying a Next.js app to build your next great startup, you can build these experiences, really look inside it, be in control, choose the trade-offs that you want... I think this really separates us from other systems right now.

And the other thing that we do, of course, is we are a boring infrastructure company. Even though you get to build all these cool things by yourself, you get to treat it like you would any other boring web hosting infrastructure company. You pay for the CPU bytes...

**Amal Hussein:** And the reliability. The uptime.

**Sunil Pai:** And the uptime. It just works.

**Amal Hussein:** And the support, in the future, as you continue to scale...

**Sunil Pai:** I have to tell you, one of the nice things about building on Cloudflare is that when Cloudflare goes down, half the internet goes down... So no one's looking at your thing. You're like "Okay, I'm taking an early lunch. It's fine." They don't go down that often. It's like once, twice a year. But I think I will do team lunches when that happens. But yeah, that's what developers want. They don't want to really care about async/await, and the actual electrons flowing through these bytes. They want a mental model that works on their laptop, gets them running quickly. They want to deploy and have it available to everyone on the planet in seconds. And they want insight into it. Trying to build a non-open source infrastructure company in 2023 is a dead end. This is what we do, we try to demystify the whole thing and make it so accessible.

**Amal Hussein:** Yeah. That's so cool. And to be clear, when you say "everyone in the world", it's not just like US East, West Coast, West... It's everyone, right? Like, if you're in Australia, if you're in Japan, London, South America...

**Sunil Pai:** If I might make it a little personal here...

**Amal Hussein:** Please.

**Sunil Pai:** \[00:43:50.03\] This guy - I'm pointing to myself, for those who are listening to this - when he had access to the internet as a teenager, cheap internet access, and it brought him all the way here; his entire career, he made his closest friends, he had access so he could participate on the world stage... And I feel very, very blessed to have had this journey. If the company that I build cannot do that for the next generation of people everywhere on the planet, then that would be a personal failure for me. That's what I mean when I say we charge as an infrastructure company. We are building this thing so that the version of 16-year-old me sitting in a coastal town in India can see this, get started, and deploy to the rest of the world in seconds. That is the goal here. We want to get this -- when I say millions of developers, I mean it. This is something that everyone should be able to have in their hands and use right now, if you're listening to this. You can run npm create partykit in your terminal right now, and deploy onto the internet.

**Amal Hussein:** Wow... Yeah, that's beautiful. I'm gonna stay quiet for the rest of the podcast, because honestly, I think you're done. This is the biggest mic drop. I am like Miss The Internet Is For Everybody. Please Build It For Everybody. So it's just so great to hear you have these values with your company, and understanding the importance of that having been that person yourself, that like was able to benefit from access, you know? So yeah, thank you for sharing.

**Kevin Ball:** So you're spreading the ability to be a magician... Because I've gotta say, I resonate with the desire to be a magician. I feel seen.

**Sunil Pai:** Right?

**Kevin Ball:** It reminds me of that XKCD comic where it's like "Hey, you're flying. How?!" He goes "Python!" The sense that you can make something real in the world visible, impacting for people, with very little work, and very little code, by knowing the secret, by knowing "Oh, npx install partykit. Now I'm on the inside, and I can make this magic for you without really having to do that much work...", because you already wrote the recipes, you already did the magic. There is something really special about that. Now, I'm not sure I want to tattoo it quite where you mentioned. I think that's a little bit -- well, you know, it's just not visible. When are you gonna see that? I don't know if you're -- right? Like, you want a reminder...

**Sunil Pai:** It's true. I don't think anyone other than myself -- it's not even like I will see it that often, right? Like, it's for nobody really, I guess... Yeah, you're right.

**Kevin Ball:** It's for nobody, right? You want a reminder; you want to tattoo it on your forehead, so you see it when you're recording one of these... Or on your arm, or something, to remind you as you get up in the morning that "Hey, I don't have to do magic. I just have to enable magicians."

**Sunil Pai:** I agree, I agree. I love speaking to founders, and one thing that I've noticed as a pattern - when you speak to other founders of startups about the short term, they keep talking about competitors, the landscape, funding environment, stuff like that. But you stretch it out and you start talking about their vision for the next 5-10 years, nobody really talks about competitors, or the funding landscape. They talk more about vision, about getting this thing into people's hands, about the things that they want to achieve on the long-term, but also the dream they had when they made the thing. And that's kind of like -- when I wake up and I'm like "Wow, PartyKit accelerated really quickly. That's amazing. Oh my God, we have so much work to do", I just remind myself "Yo, it's fine. You're doing the right thing, people like you." Very few people get to this stage - technology that works, a team that you love, an office with great sunlight... I'm so blessed to find myself in this position, and all we have to do is execute and just get it into people's hands.

I think there's a Friday Night Lights quote about this: "Eyes open, heart open." You can't lose as long as you just survive, and you be ethical and work hard, I guess. That's what keeps me going, when I'm like "No, no, we have something here. All we need to do is keep pushing."

**Amal Hussein:** \[00:47:52.25\] That's great. And I'm really sensing a lot of customer obsession from you as well... And your whole story, your career arc, I think the places that you've worked, the projects that you've worked at, I feel like every little thing was like a little unlock for you. Like, you unlocked some skills, you unlocked some insights. And I feel like a lot of it has kind of come together in PartyKit. And obviously, Cloudflare being the bedrock of that... But still, all these other experiences, and thinking about also the frontend developer experience, and how to kind of put that developer in the driver's seat, and let them just go and have this turnkey experience... That's pretty dope. So let's talk about the developer experience Sunil. So what is that like? So I npm-what? Npm-install, or do I -- how do we use this thing? You tell me.

**Sunil Pai:** So if you're making a new project, the thing you want to run inside your terminal right now is npm create partykit. That spins up a whole project, including a little frontend thing - which we should make a little more polished, I think, but \[unintelligible 00:48:56.23\] that uses PartySocket, which is our client that connects to it... But also a fully-fledged backend that listens for messages etc. That's really nice, because you can deploy that entire thing, frontend, to the PartyKit network.

We have a little metric internally where we're like "From install to deploy, it has to be under one minute." Right now it is under one minute. We really like that. I think it's about 12 seconds.

If you're adding PartyKit to an existing project, instead what you should run is npx partykit init. So it doesn't try to make a whole fully-fledged project to you, it just detects how your project is constructed, it makes a little partykit.json file, one of these little servers. That's great.

By the time this podcast is out there, we will also have support for templates and a range of templates. So you will say "Hey, npx partykit init --template vite react", for example. So it'll be like "Hey, here's a thing that uses Vite, this thing." And with support for multiple providers. Hey, here's a thing that deploys your frontend onto Vercel, but does everything else on the PartyKit network. Something with a chart template, something that does cursors. That's part of the goal. Like, I want 100 templates for a number of use cases, and like combinations of those... But that's how you get started. Right now, if you're listening to this, I think a good thing to do is to just run npm create partykit in your terminal. It'll ask you a few questions." Hey, do you want to use TypeScript? Do you want to do so and so?" And it'll customize it for that.

You can open Visual Studio code inside this, and it should all just sort of work. You can explore the files... I think our readme also gives you little indicators of what to do next... You can run npx partykit dev, which runs a local server, fully running on your machine, by the way, which means you can also use it to run tests, by the way. Again, since it's open source, it's so nice that we are able to do this. You don't really need to be connected to the internet to develop. So if you're on a train or a plane, it just works.

Once you're happy with it, run npx partykit deploy. It will ask you to log in so that we can get a little user name that we can attach to the domain. So projectname.username.oartykit.dev. Custom domains are coming soon, definitely before the end of this quarter... But those are the three commands. You can say npm create partykit, npx partykit dev to run it locally, and npx partykit deploy to deploy it within seconds onto the rest of the internet. That's it. That's what it takes. If you have feedback for making that shorter, I'd love to hear it. But that's what we've landed on right now.

**Kevin Ball:** Yeah, I just ran npm create partykit, and it was done in seconds. This is pretty fast.

**Sunil Pai:** I love that.

**Kevin Ball:** Three questions, I think... It asked me what I wanted to call it, do I want to use TypeScript (thank you), and should I install dependencies.

**Sunil Pai:** \[00:51:53.23\] Yeah, if you want to install dependencies. Maybe you just don't want to. We stole that from Astro, by the way, who have the cutest CLI in the market right now. It has a little Houston thing that keeps smiling at you that's doing that. We should probably do something with balloons... But I think the Astro CLI is the gold standard that we shamelessly copy from. I'm pretty sure we give credit to them as well in our readme, but... That's who we've copied from.

**Amal Hussein:** Yeah, you're in good company. So can you give me an example of like a customer success story, or like a customer use case? Who's building on PartyKit and what are they building?

**Sunil Pai:** I can give you two different use cases, because they just happened in the span of the last few days. So yesterday was ViteConf, which is the conference everything Vite, which is the bundler developer tool... And the Like button on their page was powered by PartyKit. It's an interesting use case, because as you can imagine, the events are very simple, right? Button click, and you say "Hey, increment the counter." But it can be like thousands of people clicking it at a time, and thousands of people receiving these events. The backend for this - I'll have to check, but I wanna say it's under 50 lines of code, the PartyKit server for this. If it's not, we should make it less than 50 lines of code. It's such a nice use case... And then the frontend is like a little -- I think they built it with Vue. I'll have to check; again, I'm only speculating here. But ViteConf used it, and it went off without a hitch, like thousands and thousands of users... And it's dirt cheap.

Another one is recently a company called SiteGPT. I love this use case, by the way. They are a company that lets you add a little chatbot onto your company website, that can be trained on your documentation or your business processes and little actions that you can carry out. Great project. The CEO's name is Bhanu Teja, and they started off as a regular chatbot, but then they realized that they needed the ability to call a human into the conversation, an actual customer support executive... Because you and I know that LLMs are not all the way there yet. And they can be fooled, and they lie -- they'll not just lie to you, I think they think it's the truth as well. And I say 'they' like they're actual humans...

**Kevin Ball:** I think they don't have a concept of truth.

**Sunil Pai:** They don't, no.

**Kevin Ball:** Their only concept of truth is "Does this linguistically make sense?" There's no reference to the real world.

**Sunil Pai:** So at some point, a customer will say "Hey, I want to talk to a proper support agent", which makes it a multiplayer scenario. To a user, it's a support agent, maybe multiple support agents and an LLM connected to the same thing. There are no third party services that let you sort of build this right now, unless you control the code that runs it, that lets you do all these actions. So they built out a backend that enables all of these things, and shipped it to production just a few days ago. And it's been going great for them is what I hear. We look into their code --

**Amal Hussein:** \[laughs\] "We look into their code..."

**Sunil Pai:** We had a look at their code, and stuff... They shared some of it with us. No, not the thing they deployed. We can't do that, by the way.

**Amal Hussein:** I know, I know. I was just giving you a hard time. That's good to know though.

**Sunil Pai:** Yeah... Which is -- it's one of these things that we decided early enough that we don't want to lie to our customers, and we're like "Oh, listen, can you put a console.log statement and show us what it says?" And they're like "Can't you do it for us?" and I'm like "Yeah, but that would be super-unethical if we did." But anyway, so they built out this, and it's great. They scale it out to like hundreds and thousands of users, and it goes without a hitch.

I'll give you even a third use case, because I think it's public knowledge now... Stately, the company, is a company that loves state machines. They have a popular library called XState, that you can use to build UI interface state machines, user interface state machines. They're coming out with a product they called Stately Sky, which is - hey, state machines in the cloud, that you can use to build business workflows, or have multiple people jump in and see what the state of the machine is, and possibly add their own actions and stuff. And all of that is powered by PartyKit. Like, it's such a cool use case. I hadn't even initially thought about it, but they are building a platform on top of our platform.

**Amal Hussein:** \[00:56:06.22\] Oh my God, that's awesome. That's like basically bringing like a Google Docs experience to manipulating a state machine graph.

**Sunil Pai:** Yeah, exactly.

**Amal Hussein:** And we love David Piano on JS Party, I hope to have him back again next year... But that's so cool. I would never have even thought about that as like a use case. That's so neat.

**Sunil Pai:** Yeah, I love David, and Jenny, and the whole team, and they've been such good partners to work with as well... It's nice when there's like just a bunch of nerds that are like "What do we do for our users?" I'm like "Let's go!"

**Amal Hussein:** Yeah, yeah.

**Sunil Pai:** So those are three separate different use cases that people are using. There are others. There are some that we can't talk about publicly just yet... But it's going well so far. It's nice to see a broad range of use cases for this. That was the goal, which is hey, we want to be as broad as possible. And these are people who are willing to suffer the rough edges with us. We have a lot of work to do. Like, we don't even have a dashboard you can log into right now. It's coming soon, I promise. But that's the kind of people using PartyKit right now.

**Kevin Ball:** So one thing kind of cool about that, as you highlighted - it doesn't have to be a full application, right? You had an example there that's like "We want this button to have a live update feature." And because you make it simple enough, the overhead of integrating that is really not so hard.

**Sunil Pai:** You get it, you get it. That's exactly right. We are not interested -- well, maybe in five years, who knows... But right now, we're not really interested in competing with other players. Look, the tagline of the company is "Everything's better with friends." I love that line, by the way. It's not just a personal philosophy, it's not just why I hired my friends right now... I mean, I do; I love them. But it's also, I think, a tagline for the company, where the way that we are successful is if we collaborate with interesting people and organizations. We love to be partners with other players in the system. That's kind of how we win. There's plenty of space. The future of the internet is a lot bigger than it is right now. And the way to do that, I think, is by "Hey, it's fine if the rest of your app is here. Npm-install partysocket. That lets you connect to us. Feel free to put encryption on it if you don't want PartyKit to see the --" Again, we can't really do it anyway... But the thing we are selling is infrastructure; the thing we are giving you is access to this crazy planetary compute network, and making it so easy to do so. And yeah, you're right, it's so easy to integrate into existing applications. In fact, some customers that I speak to, during the call will be like "Hey, do you want to just try doing it right now? Let's just share screens and npm-install the stuff and get going. Can we do it?" I'm like "Yeah. \[unintelligible 00:58:44.03\] 10 minutes. And that's usually how we do prototypes, during the length of a call.

**Kevin Ball:** That is very reminiscent of the Stripe thing, the early Stripe days. They would be like "Here, yeah, I'll set up credit card processing on your site for you. Let's do it together."

**Amal Hussein:** Three lines of code. Yeah.

**Sunil Pai:** Right? Copy-paste this onto your HTML page and let's go. That's a big inspiration for us.

**Kevin Ball:** Well, and question on that... Do I need to go through Npm, or can I just drop an HTML Snippet in, linking back to where you have hosted PartyKit clients somewhere?

**Sunil Pai:** We've actually done a couple of -- so the answer is yes, but soon... But we already have a couple of web components that you can drop on your page and get a hit counter, or "Hey, there are 12 people on the page right now" etc.

\[00:59:34.19\] We did an experiment with polls. We have been working with \[unintelligible 00:59:37.05\] on Twitter. And he's like "Yeah, here's a little web component you can drop on your page, and it like just sort of works." But that's the frontend part. Regarding the hosting, right now, as of 6th October where we are recording this, you have to deploy onto the PartyKit platform, simply because the rest of it isn't mature enough to do two more models that we want to do in the future... Which is Cloud Prem, which is "Hey, can I deploy this onto my own Cloudflare account? My company has a Cloudflare account. Can I just use that?" Sure, we will do that. And on-prem. Self-hosted. That's a little more complicated, because we have to recreate the entire -- not just the runtime, which is open source right now; it's Workerd, the Cloudflare runtime. But we also have to invent this whole routing layer, which gives you the guarantees that Durable Objects have. How do we make sure this WebSocket connects to this? We are going to be collaborating with some other players to do this. I can't share any details right now. But that is very much the goal of the company. At some point, I want JPMorgan to use this, and they will never deploy onto our own platform. They will deploy onto their servers.

**Kevin Ball:** Well, the other thing I was thinking about is going the other end... Like, somebody who has very little coding background - can you have like a library of services that you can one-click deploy, and drop something into their marketing site or something like that, and suddenly, you have a real-time aspect on a marketing site without having to write any code?

**Sunil Pai:** Oh, that is so much on the roadmap. We badly want to get it. We did a roadmapping exercise yesterday, and we covered up a wall with post-its. We were like "Oh, I guess we are in business for like five years." Not to say that that feature will take five years. That will come a lot, lot sooner. But no, that is very much the plan. Just open-source all these things, build these little things for -- the marketing side is such a fun one, right? Like, how do you just make sure that everyone knows how many people are on it, and have this crazy cursor party that everyone seems to love, by the way? Or have a little chat window for everyone who's on it.

\[01:04:00.14\] One of the use cases that keeps coming up is EduTech, like educational technology, especially now that a lot of kids are not even in the same classroom... How do we make those use cases easier? Speaking to a number of partners to do that easily as well. So the answer is yes. You should see our linear board. It's a bit of a trash fire right now...

**Amal Hussein:** That's so cool. This is really neat, because it's the building blocks for anything that requires collaboration. So you're creating the Lego for anyone who wants to build anything that's collaborative, and they want to integrate that into their business. And so I'm curious, at what point does PartyKit start spinning services that are a little bit like higher, like one more layer, "Here's what we think you should do for chat", "Here's what we think you should do for kind of collecting feedback from people real-time"? I'm just curious, do you see yourself kind of offering these higher orders building blocks eventually? ...because so many of the customers are doing the same thing over and over again.

**Sunil Pai:** Well, we have three answers for it. If it is something we believe that only if we uniquely can do very well, then we will build it ourselves. But that's actually less true than you would imagine, because the other two solutions are "Do we create or do we help someone create, either financially or just with support, create an open source library or experience that deploys onto PartyKit that does it?" We'd be very happy to do that. And the third one, which is a little ambitious, but I want to do it, is how do we help people build companies on top of PartyKit? How do we help people build other organizations and things that leverage our things, but that they can focus on? We're very few; we're three people right now, and I don't think we're going to become a 500-person company anytime soon.

**Amal Hussein:** Well, you don't need to, right? I mean, I think there's plenty of companies that have shown that you don't need to necessarily scale to like 10,000 employees. You can do one thing really well, and I think that that's such an understated thing in today's world, right? Like, do one thing really well. Just one.

**Sunil Pai:** So if our thing is we build a boring infrastructure, fundamental piece for other people to build on top of, that would be our success story. Of course, things change. We'll see. Let me put it this way - we've been talking about "Oh, Google Docs, Figma, games." One of the use cases that someone pointed out to me back in March, and that I haven't been able to get out of my head... It sounds ambitious, and I'll admit, we may or we may not do it... I think countries should be building emergency response infrastructure on PartyKit. When things are going badly, when every second counts, you want push-based infrastructure that has reliability, redundancy, everything built into it, and the ability for non subject matter experts to be able to leverage it, either via like building code, or like little blocks that you can swap together.

**Amal Hussein:** Yeah, no-code solutions.

**Sunil Pai:** Right? We are a while away from -- again, I say this, but trust me, we're not months, we're probably years away from taking on that kind of responsibility. I don't know, things can change. Hey, who knows...? But that is how fundamental I believe the next phase of the internet is. That is the kind of things that we can enable for the people who need it. This is not even about money, or like valuation of the company. That's kind of like where the mission part of it comes. And the moment I heard it, I was like "\*bleep\*, that's right." That's what people should build, and that's how reliable we should be as a company, like as a boring infrastructure company. How do we make it so that they can build it and trust that?

**Kevin Ball:** So related to that, are you -- so if I wanted to do a real-time app, and I wanted to integrate the ability to hop into an audio stream, and doing real-time audio, or hop into a video stream and doing real-time video... Right now, I think I'd have to bring in additional surfaces to manage that. Is that something you're thinking to pull into PartyKit, or find a way to facilitate by partnering? Or how are you thinking about that?

**Sunil Pai:** I'm a terrible CEO, in that I can't keep my mouth shut about my plans... So you're gonna hear what I think about it. Audio/video is very interesting. It's part of the roadmap, but I keep getting conflicting signal from customers and people that we speak to about it... Because some people are like "Wow, yeah, you will be able to build your own Zoom", or Riverside, the software you use for this. But other people are like "Well, we already use Zoom", or "We already use Google Docs. We are way more interested in the data stuff right now."

**Amal Hussein:** Yeah. It's not solving a problem for them, essentially, right?

**Sunil Pai:** Don't get me wrong, if somebody offers us a six-digit, seven-digit number and says "We need it like tomorrow", we'll probably do it. But it is part of the thesis. You're right in that --

**Kevin Ball:** Right. I'm just thinking about it -- when you're talking about the emergency services, right? This is purely data, and there's some amount of like "We need to be able to do an audio broadcast", or "We need to be able to link you up with an emergency provider", or things like that.

**Sunil Pai:** 100%. So it's on our roadmap. I feel strongly about it. It is not clear to me yet what the shape of the solution is, let me put it that. Yeah, that's what I think about it.

**Amal Hussein:** I'm amazed that we managed to get through this podcast without bringing up WebRTC once, but congratulations to us... We rock, I guess, I don't know... I want to make sure that --

**Kevin Ball:** You just brought it up, Amal.

**Amal Hussein:** I know. I know. I know. I want to make sure, before we run out of time, I have a bunch of questions about the company... I mean, pricing. Let's just talk pricing. So I'm startup A, I want to use this... What's this going to cost? Because PartyKit is partially open source, right? What are we paying for when we're paying for -- I mean, obviously, the hosting, but...

**Sunil Pai:** That's mostly it, by the way. I imagine it will be the cost of our infrastructure multiplied by some number. We're actually going to be debuting pricing in October, like very soon, because this is the number one thing people -- well, and I understand. It's the number one thing people are asking for. Don't hold me to this, it's just how I think about it. We'll probably have a generous free plan, and the rest will be metered usage. We want to make sure that we have soft and hard caps, so that it doesn't go wider than like bankrupt you...

**Amal Hussein:** \[01:07:58.09\] Oh, yeah, absolutely. Yeah.

**Sunil Pai:** Yeah. Vercel just shipped it over the last 24 hours, and it's great. I think we'll just try to steal however they have done it... And there are enterprises, bigger companies for whom we can provide better services. Well, different features and options. That's roughly how I'm thinking about it. If you can imagine us to be an infrastructure company, we will have pricing like an infrastructure company. Usage-based, hopefully, as clear as we can get. Everyone says that startups get pricing wrong, and they iterate on it a lot before they get it right... So we are trying to get there as soon as possible, so that we can iterate on it a bunch before we start charging a lot of people for it.

**Amal Hussein:** That makes sense. And I'd love to talk about how the company is structured right now, because I would think, "Oh, you must be the CTO", but no, you're actually the CEO, which I guess makes sense. What's it like for you having a CTO? You have this other person that's your right-hand person to kind of execute on the technical part? And what's that shift been like for you, like transitioning into this founder seat, where you're marketing and kind of vision-boarding and all of that stuff?

**Sunil Pai:** Currently, I still get to write a bunch of the code... But those days are quickly winding down.

**Amal Hussein:** You're one of those CEOs, yeah. Yeah, let's talk in six months, Sunil. Let's see...

**Sunil Pai:** No, no, it's winding down. I can already feel it. Especially now that we're starting to build out the sales pipeline... I know, I know. I partnered with Jani Eväkallio, who's doing CTO, and Sylwia's doing CXO, which is mostly relationships, and we have a bunch of clients who are there. These are my closest friends in the city right now, and Yanni has been like my friend since the day I landed in London. I grabbed a drink with him and we like hit it off immediately. He's seen PartyKit from day zero. He and I used to go -- well, we still do, we just haven't in a couple of weeks... Swimming in the Hampstead Heath pond in London, all the way through winter, which sucks, but I guess the Finnish dude peer-pressured the Indian dude into doing it with him...

**Amal Hussein:** Oh, gosh... You know, the Finnish people... I feel like they need to start a website, maybe powered by PartyKit, where every time they get someone to do a cold plunge in the middle of winter, or even any time of year, the tally needs to go up. Seriously.

**Sunil Pai:** Hey, don't get me wrong, I love it, by the way.

**Amal Hussein:** It is refreshing.

**Sunil Pai:** \[unintelligible 01:10:17.00\] and everything. It's amazing.

**Amal Hussein:** It's super-refreshing.

**Sunil Pai:** But I'm so happy that I get to work on this with him now side by side, and with Sylwia side by side. Because the three of us, I think we share values, but otherwise, we're very, very different people. This is not like Sunil Pai's side project anymore. This is like the sum of the three of us, and whoever joins us next. And it's been great, to be honest. As you can imagine, working with your friends - it was a little weird for the first two, three weeks...

**Amal Hussein:** Yeah. But it's also probably really fun, I bet... Because there's trust.

**Sunil Pai:** Oh, the best.

**Amal Hussein:** And you need trust in a founder team. Yeah.

**Sunil Pai:** So I figured the thing that I could do best was be obnoxiously transparent. They have admin access to the bank accounts, the email, everything. And I brain-dump on them a lot. Like, they know everything that I think of, all the meetings I do, everything. And I think that has helped a lot. And they have ownership in doing the things that they think are right. They push back on me a bunch of times for the things that I thought were right, and I'm glad they did, because it's only made the company better, the product better, the community better... Especially for a company that has grown so quickly. It still stuns me on a daily basis. So I absolutely love it.

Being the CEO otherwise is weird. I learned a bunch while raising funds. I now know how to raise funds.

**Amal Hussein:** Yeah, let's talk about that. I didn't even know -- finish your sentence, because we've gotta get into this... Because I didn't even know there was something called a pre-seed round. Like, that's how out of it I am when it comes to how to raise money from VCs. I didn't even know that there's a pre-seed. That's amazing. I didn't even know you could raise like a formal pre-seed round. Shouldn't that just be --

**Sunil Pai:** Oh, there's a round before that, too.

**Amal Hussein:** \[01:12:09.04\] There's a round before pre-seed? What is that? Is that just like mom and dad? Is it like the \[unintelligible 01:12:12.10\] round? I'm just kidding...

**Sunil Pai:** They usually call it an angel round... No firms. Usually friends and family, that's right.

**Amal Hussein:** Yeah, there's the friends and family round. I knew about that one, but not pre-seeds. But anyway... So tell us about your journey, because you said you now know how to talk to VCs, and you were ignoring them for a while early in the project.

**Sunil Pai:** Yeah. So the company -- like I said, when I started building it I was like "Oh, this might be a nice little lifestyle project that pays the rent, etc." But then once I started realizing a) the impact that it could have, and b) the amount of work that would be required, I was like "Oh, this has to be a venture-funded company." Just the kind of partnerships that we'll have to do, the kind of support we'll need, the amount of time it'll take before the money makes -- simply because we're usage-based, pricing will take a while before that number goes up.

So I started building in public in late December, and I just did that for a solid two, three months, at which point I found a mentor, Andreas Klinger. Amazing guy. He reached out to me. He's the ex CTO of Product Hunt, done a bunch of things... He reached out to me as "Hey, is this what you're building?" I was like "Yeah." He was like "Okay, I'm going to be \[unintelligible 01:13:24.08\] and I'm going to help you raise." And that was amazing. I'm so glad I took him up on the offer, because he really, really helped me. He helped me with the deck, tried to figure out -- I would not have been able to do even a little bit of it.

The raising was interesting, because I learned the motivations -- and I'm not saying VCs are bad people, but they have incentives and motivations that you need to speak to, that you need to show them what the company is going to be like, and what you think about it. And making sure that picture was clear was one of the tasks.

The second was, I didn't want to spend six months raising. That sounds so depressing. So I just sent out the deck and my scheduling link to a whole bunch of people, and I said "I'm doing it for two weeks. Get onto my calendar, we'll talk."

**Amal Hussein:** Smart.

**Sunil Pai:** So in about two weeks, I did about --

**Amal Hussein:** It's a good strategy.

**Sunil Pai:** Yeah. I did about 108 --

**Amal Hussein:** That's like "You come to me, I'm not coming to you." I like that strategy.

**Sunil Pai:** And it was good passing the deck, because then I could go into detail on it. So in two weeks, I did 108 meetings. I did about 12 hours of meetings every day for two weeks.

**Amal Hussein:** Oh, my God...

**Sunil Pai:** And oh, it killed me, but it was great, because by day two, day three, I had all the \[unintelligible 01:14:33.29\] I had the pitch very clear, I knew how to do it. And I knew what I was raising for, I knew where the money would go... I was so clear about that. I have a tab open in my editor with a blog post for how to raise a pre-seed round, by the way, like "Here are the three things you need to do." I'm going to post it I think within the next few days.

So don't get me wrong, I was still super-surprised and happy and grateful at how well it went. I was like "Oh my God, I have money in the bank in 2023." My leader, Sequoia, is such a great firm. I have such a great partner in Sequoia, Bogomil... He's in the US, actually. I had to register -- I feel very blessed and grateful for the cap table that I have. The CEO of Cloudflare is on it, the CEO of Vercel and Netlify is on it, Sequoia is on it... And some great, great angels, and smaller funds. And I really, really need that for the future of this company. Like, if it has to do well -- it's a journey. I have to pick these people. So that happened... And now I get to spend it on building a company. I'm happy to answer more questions, but that's sort of how it happened.

**Amal Hussein:** That's so cool. Honestly, I'm really proud of you, dude. I don't know, I mean, every time somebody succeeds in building something like this, we all win, because it's another example of success, we all get to learn from your lessons... I don't know, it's just fabulous.

\[01:16:07.11\] So it's been an absolute pleasure having you on the show, and learning about PartyKit, and I can't wait to have you back on maybe in a year, and we'll talk about all the new things on your future roadmap. I don't know, Chris, do you have any kind of last words before we kind of wrap this rodeo up?

**Christopher Hiller:** I guess I was just curious about the -- you mentioned games... And - I mean, it looks like right now... Those SDKs still need to be built out, or what's the vision there?

**Sunil Pai:** Yeah, exactly. Originally, when we started building the company, I wasn't really thinking about gaming as a top-line use case we'd go after. I knew we'd go after it at some point... But a lot of people have been showing up and building this stuff by hand; just low-level WebSocket messages etc. And they perform really well. So I think we are going to build starter kits and helpers and libraries... Because we also landed some performance improvements that make it good for gaming.

Previously, in a game session, one of these objects - we could do a max concurrency of about like 50, which is great for a number of use cases. If you have more than 50 people in a Google Doc, you have a bigger problem. But we landed some optimizations via Cloudflare that dramatically changed that number. For different set of trade-offs, you can do something like 30,000 people in a single room. So if you want to build your own Discord, or a massively multiplayer game, this has now suddenly become like a great fit. You can look up hibernation mode in our docs to learn what the technical details of that are.

But now that we have that, I think we're going to start going after gaming use cases. The shape of the solution will probably be a couple of npm install liabilities that give you a relay server, and here's an example for how you make a leaderboard, and a matching algorithm etc. Just standard stuff like that. But you're right, we don't have much that you can use today out of the box.

**Amal Hussein:** Yeah. That's a great question, Chris. And we didn't have time to get into the games part. We talked about AI agents, we talked about a bunch of other things... It's the last one, so great question. I am going to ask one last question, and then we're going to have a question for our Changelog++ listeners, a bonus question, so stay tuned for that. So if you could talk to yourself like two years ago, what would you tell yourself?

**Sunil Pai:** Oh, so much... This is a message for other founders out there. And I've now been beating this drum on my Twitter account as well. So three, three and a half years ago, when the pandemic started, I used it as an opportunity to fix my health. I quit smoking, I quit smoking weed, my drinking is down to like -- I want to say like a 50th of what it used to be. And I'm doing sober October, so I'm not even drinking this month. I got my physical health into shape, I started swimming, I started walking a lot... Walking in London during the pandemic was very 28 Days Later, like, the city's not existing... I've fixed relationships with my friends and family, I got a lot closer with my wife... And I feel -- if I hadn't done any of those things, I would have faulted at the very first step. I would have fallen apart. Because doing a startup is stressful.

\[01:19:24.20\] Look, I feel very grateful that you called me on to this thing, but announcing this funding round is not really a sign of success. It just extends our chances for success. I realized that we have so much more to do... I'm grateful that I have the opportunity, but we're not there yet. And the way to get there - there are a lot of books about business theory and all, but trust me, the most effective things... And I'm not joking, I'm being very specific about this... It turns out are three square meals a day, eight hours of sleep, making sure that you're in touch with your loved ones, that you take time for yourself, that you're staying healthy, getting a 20-minute walk in every day. Those are so much more effective than any business book that you could pick up, I think. So far it's been working really well.

If I went back two years, I would say "Hey, good call on doing that." If I went five years back, I'd be like "Idiot, you're ruining yourself. You need to fix that earlier." And I guess that's -- maybe it's not just a thing about founders, right? A lot of people, especially engineers in this space - man, the world is in not a great space right now... So finding this space for yourself, your health and your close ones, if you can do that, that's so precious. That is the thing that has been giving me benefits over anything else. So that's very good. Two years ago - well, I would be just starting in Cloudflare. I had a perfect year in Cloudflare. I love almost everyone that I hung out with, and I miss them dearly... So hey, I enjoyed the year in Cloudflare. It was great.

**Amal Hussein:** Yeah. That's great. Oh, so well said. Sunil, thank you for that priceless reminder... I've been on that journey myself, actually. I've been on like a year of "Let's focus on me." My relationships, my health... All the things. And there's a lot to unpack; there's so many bad habits that you have to undo, so many hours of therapy... It's just a lot. But that's the best investment that you can make, which is basically in yourself. So thank you so much for that, and thank you for coming on the show. Where can folks get in touch with you if they want to kind of connect? Where can we find you on the internet?

**Sunil Pai:** Three places. One, as I assume the rest of us all are -- well, actually, Amal, you did a good job of fixing this. I'm on Twitter. It's -- oh, my God. I have to spell this out now. It's @threepointone. All words, no dots. Of course, there's a PartyKit account. It's @partykit\_io. We spend most of our day now in the community Discord for PartyKit, which is called Cool Computer Club. It's the best club. You should come find us there.

**Amal Hussein:** Oh, nice. CCC.

**Sunil Pai:** That's right. We have a great time there. You should come hang out with us there. And of course, you can email me, sunil@partykit.io. These three are the best ways to get to me.

**Amal Hussein:** Sweet. Well, we wish you the best of luck.

**Sunil Pai:** Oh, if you're in London, you can come to our office and hang out with us. Our office is dope. We're in Finsbury Park.

**Amal Hussein:** That's dope. That's so dope. Well, again, many thanks, Sunil. It's been an absolute pleasure having you on the show, and have an amazing rest of your day/evening/night, everyone. Cheers!
