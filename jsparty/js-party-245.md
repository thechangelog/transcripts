**Amal Hussein:** Hello, JS Party listeners! We are so excited to be back with you this week. We have a super-hot, off-the-presses show. This announcement just got dropped, literally less than an hour ago. I haven't even finished reading the blog posts, but that's okay. But we're here to announce and usher into the world a new baby that's open source, from the Node community. It's called Platformatic. We're here with the founders/creators today. Before we meet them, on the panel with me today is Chris Hiller. Hello, Chris.

**Christopher Hiller:** Hello, Chris.

**Amal Hussein:** Hi. \[laughs\] You always make me laugh. Don't distract me. We have a tight show today. I have to stay focused, okay? No distractions. So Chris - hello, Chris.

**Christopher Hiller:** Hi.

**Amal Hussein:** Hi. Okay.

**Christopher Hiller:** I'll try not to screw things up for you.

**Amal Hussein:** Thanks! On the show today to introduce their new project, Platformatic, are Matteo Collina... Hello, Matteo.

**Matteo Collina:** Hi, Amal. Hi, Chris.

**Amal Hussein:** Hi!

**Christopher Hiller:** Hi...

**Matteo Collina:** So glad to be back!

**Amal Hussein:** Yeah!

**Matteo Collina:** Yay!

**Amal Hussein:** And Luca. Luca Maraschi.

**Luca Maraschi:** Maraschi. That is perfect. Hey, everyone.

**Amal Hussein:** Hi. Hi, welcome. We're so excited to have you both today. So Matteo - this is so funny; I have not talked to you since the last time you were on this show... And so today's show is going to be a mix of me catching up with what's been going on in Matteo's life, because a lot seems to have changed since he was last on the show... And we're also going to learn about his new project. And what's really great is Luca is someone who as well is in my wider friends circle. We have a lot of very close mutual friends, and Luca and I have had this friendship that was supposed to get started a few years ago, and it never happened... So now, this is hopefully the beginning of that friendship. So hopefully informal show, we're learning about their new projects, and before we get into Platformatic, Matteo, can you tell us a little bit about yourself? And the same thing for you Luca.

**Matteo Collina:** \[04:10\] I don't know where to start... Let's remember what I said last time in the show... So the previous part - it's on the previous show. So you go and watch and listen to that one. No, I'm joking... I have been coding for more than 30 years. I have been doing Node since 2010-2011, putting Node in production since then. Part of the Node Collaborators group since 2015; after a few years got into the Node.js Technical Steering Committee... Kept working, maintaining Node.js.

Meanwhile I started on a new project called Fastify, which we talked about maybe in one of the shows at some point probably... Which is a web framework for Node that is getting some traction lately. So it's great, it works very well, it's super battle-tested for high-production usage of Node.js.

For the last eight years and a half I've been in professional services, I work for a company called NearForm. This is where I actually -- when I was working in NearForm is actually where I met Luca. We've been colleagues for a bit, then we both had kids in 2020, which is --

**Amal Hussein:** Wooh! The world's greatest year. The most fantastical year of the most fantastical century.

**Matteo Collina:** Yes. And then we kept in touch after -- he left NearForm a few years back, and then we kept in touch. And in mid-June I've left near form, and I have jumped into this new adventure with Luca, Platformatic. And you can see, we have been keeping it quiet for a couple of months, because we needed a little bit of time to actually develop something to announce to the world...

**Amal Hussein:** Yeah. No vaporware. That's the opposite of most developers though, because most developers - their first thing is they buy the URL, then they make the vaporware announcement on the internet, then they go build the tool, then they get demotivated halfway through, and then it just fizzles out. I'm so impressed that people who managed to get to the end and actually launch something... But then I'm also amazed at people who launch something in secret. I didn't even know about this, and Matteo, we have so many close mutual friends. Granted, I've been living under a rock for the past few months too, but I'm just like "Whoa!" I heard about it this morning from Jerod and I was like "This is hot stuff. I can't wait to hear about it and also catch up with Matteo."

And then Luca, I had no idea that you went to NearForm. I missed that. That's so cool that y'all had a little bit of overlap at NearForm, because NearForm is a really fascinating company, for those of you who might not be familiar. If anyone is out there looking for Node consultants, Node contractors, people who understand how to build Node services at scale, go to NearForm They are deep experts in JavaScript, they're deep experts in scale, and distributed systems, and how to cleanly scale your architecture. They're incredible engineers. And they do a lot for the community as well.

**Matteo Collina:** I love my previous company.

**Amal Hussein:** Yeah. Huge open source element to their work as well. So that's the roots that Matteo is coming from, and I guess it's great to hear, Luca, that you had some of that. So yeah, why don't you tell us a little bit about yourself, Luca?

**Luca Maraschi:** Yeah, I also started very early coding... I still remember the first time... But I come from a family of entrepreneurs, and so I blended my passion for computers with the passion for building businesses and making impactful progress. I started when I was very young, at 12 years old, and I built along the way a few companies that I was able to sell... And I went through this cycle of learning something new and applying to business.

\[07:57\] In 2014, something like that, I met Matteo. Or '15. I met Matteo in the backstage of Node Summit. And yeah, basically, in 2016, I was in front of a big decision to switch from moving to a large company or joining NearForm. And I still remember Cian in the castle, in Ireland, convincing me to join the NearForm. So it took just a few months and I joined NearForm, mostly because I was excited to work with people like Matteo. I had a very close friend, Dave, at the time, Peter... So I was very excited about all these people as well; it was a great opportunity.

So Matteo and I started traveling a little bit around the world for a couple of years, and in 2017 I moved to Canada. Well, not I moved to Canada, sorry. I visited Canada and then I decided to stay in Canada, where I moved in.

**Matteo Collina:** You remember when we were all in Canada?

**Amal Hussein:** Yeah, I was there. Yeah, I was there.

**Matteo Collina:** Luca then stayed there.

**Amal Hussein:** Yeah, we hung out. It was a really fun time. Yeah, I was there.

**Luca Maraschi:** Yeah. We met through Achmed; he was the common denominator.

**Amal Hussein:** Yeah, Achmed is one of our \[unintelligible 00:09:08.21\] mutuals. Yeah.

**Luca Maraschi:** Yeah. And so basically, long story short, I moved to work again for large corps like Talos, following the path of Achmed... And then back into startups, and doing some --

**Amal Hussein:** CTO work.

**Luca Maraschi:** ...consultancy, yeah. And so basically -- it was actually natural; Matteo and I kept in touch for such a long time. We were so close. And we have been thinking about this idea for way too long. So basically, in the beginning of the year, we like gathered all our thoughts together, and here we are, a few months later, making off a small side project, a crazy idea that we were building just in our minds. It was all in our minds. There was nothing really solid. We talked and said "Well, it could be nice one day to build a company", and then...

**Amal Hussein:** "We can call it mozzarella.js, or pizza.js" or I don't know...

**Matteo Collina:** Pasta.js...

**Amal Hussein:** Okay, so honestly though, I'm just fascinated that you both are Italians, in tech, from the Node community, have both had really prolific and very successful careers, independently... And you're now forming a union around this company, in this project. I think that's so cool. And Matteo, you're an Italian that's still living in Italy, and then Luca is an Italian that's globe-hopping and is currently based in Canada. That's so cool. So can you tell us a little bit about Platformatic? What is it? What inspired it? What problems is it uniquely solving? Give us all the things.

**Matteo Collina:** I've been building backend systems for all of my career. And to be honest, it has always been more or less a disaster. It's actually very ugly, building backend systems. It requires a lot of sweating, a lot of hard work, to some swearing... Because if you're sweating, then you're also swearing, because from time to time the computer reacts better if you start insulting it... \[laugh\] I'm insulting my computer in Italian every now and then...

**Amal Hussein:** \*beep\*

**Matteo Collina:** Yeah, you know...

**Amal Hussein:** That's probably gonna get censored out, but okay...

**Matteo Collina:** Beep!

**Amal Hussein:** Because it's in Italian doesn't mean it's not a curse word. \[laughs\]

**Matteo Collina:** Right... And then, when I became a consultant, I helped teams deliver software and building backend systems, and I saw all the problems that they were facing. And this is what has prompted me to create Fastify, and create a lot of the libraries that a lot of people now are using to build those systems.

\[11:50\] The next step for me was - I started thinking, "Well, how can I increase my impact? How can I help more people? How can I improve more?" and it seemed natural to build a company around this dream. It seemed the next step mainly because after being so much in consulting, I really wanted to build a product now, and use what I've learned to build something new. That was essentially the gist of why Platformatic, and why now. Why now is because of other things, but yeah. Go for it.

**Amal Hussein:** Yeah. No, that makes sense. So I just want to share something really insightful here... Actually, one of our other mutual friends, Jory Burson, is the person who I heard this from. Her and I were having a conversation about this... So I worked at a place called Bocoup a long time ago, that's this famous web platform consultancy; other experts in JavaScript. But we were more everything above the API more so. We did a lot of stuff full-stack as well with Node, and Electron, but I would say that a lot of what Bocoup is famous for is deep expertise of the web platform. And so interesting echo to NearForm, just on the other side of the spectrum.

**Matteo Collina:** Yeah.

**Amal Hussein:** But anyway, so Jory was CEO of Bocoup for a while, and interestingly, her and I were talking about this pattern of once you're in consulting, a lot of consultants end up starting successful businesses after they've been in the game for a while, because they see patterns. You see patterns, the same problems at different companies, just different flavors of the problem... And it's so interesting, because I'm seeing this now -- I'm at a point in my career where I have enough experience where I've seen multiple phases of web technologies, and also I've worked at enough companies where I see every company is having the same problem in a different flavor. So it's interesting to see how your consultancy -- being a consultant in the Node space and API space for such a long time, you were able to see the needs and the gaps in the tooling and in the process... So how does Platformatic uniquely fill in the gaps in the whitespace that's in the community right now?

**Luca Maraschi:** Yeah, maybe I can tell you something. It's about the pattern, right? So what Matteo and I observed is that there was some sort of gap in between different successful stories on the market. And on one side we saw the frontend being enormously accelerated and commoditized, in a certain stance... And a perfect reaction to what happened to infrastructure with the cloud and different initiatives -- you will know about, for example, TerraForm. It has been revolutionary, changing the world of infrastructure... We're exactly sitting in the middle, where most of our experience in building for clients and for our own companies when I was, for example, at Talos, building a platform that would accelerate the day to day job of developers, making their life not a repetitive task, but transforming what was seen before as a repetitive task to some sort of innovation. And for us, the most important thing was the social impact of that change; the fact that could actually catalyst new ideas.

And so when we spoke on the ideal world, what we were looking on the market, we were basically looking on some sort of experience that would put building backends on some sort of rails, and focus on building the best train in the world, and not just the best set of rails in the world... Because we wanted to provide to our users - being first ourselves, the consumers - something that could facilitate and accelerate building APIs.

For example, today we just released this first bit - how can we actually commoditize building APIs on top of databases? How many times I've been going through my \[unintelligible 00:15:56.25\] and my tool box to look "Which library should I use to connect to Postgres? And how can I actually structure that?" And so on and so forth.

\[16:08\] And transforming all this repetitive task; not really mechanical task, because that would still imply a lot of work, but in something that would basically be an out-of-the-box experience for people. And so we imagined this ecosystem, the digital platform work to be a puzzle, to be -- as you can see there, I'm very passionate about Lego. And luckily, you don't see that side, but I am completely bought into the Lego mentality, right? We have all these pre-made \[unintelligible 00:16:34.21\] but you can -- fantasy is just the only limit that you have. And so the same thing is for Platformatic - we want to give the tools and the building blocks to build whatever people want to build, but having the constraints of four by two blocks, right? The most famous \[unintelligible 00:16:48.08\]

**Amal Hussein:** Yeah, I think that is so cool. I love this idea of you're not interested in just building the rails, because I definitely think you're absolutely right; that has been the focus for us for a long time. Everyone's focused on, "Let's build the rails, let's build the rails, and everybody builds their own train." But guess what - trains are 95% the same; you need an engine, you need a core, you need this, you need seats etc. So I love this idea of "Okay, what innovation can come out of people having more time to focus on the business logic and the interesting parts of their applications?" All this other stuff is busywork, and I couldn't agree with you more.

For me, I feel like a challenge that I've hit in the past - and I've seen this at multiple places now - is this "not invented here" syndrome that we have. Engineers want to reinvent the wheel, because - I don't know; I have no idea. It's not a personal value of mine, so I have a hard time relating to folks who want to reinvent the wheel for a 1% difference in API interface... Like, oh, they use strings instead of integers, or something. I have no idea. For 1% or 2% difference you're going to reinvent the wheel completely, because you're not happy with this thing's interface. Why? I don't know. But it's a real problem. How do you fight that problem, of people wanting to do it their way?

**Luca Maraschi:** Yeah, and there's also the other affecting enterprise for example, the space where we operated the most. It's just that the enterprise has different types of needs than the startup developer, for example, or the independent developer. The enterprise has really the need of having those predefined also structures that they can work within, the so-called best practices, right?

And so we actually felt that especially in the Node space, Matteo extensively - and myself too on the architecture side, we have been actually like every time trying to redefine those best practices, bringing them from the outside to the inside. But with Platformatic we just want to standardize those best practices and say, "Well we bring--"

**Amal Hussein:** Oh, wow. That is so cool.

**Luca Maraschi:** You know, so the best value of open source, so the best value that we are generating in the century, that is the community work, the collective work, into a space where we actually create an harmonized way to distribute those best practices into some sort of predefined starter kits, predefined libraries... And we give you actually the space - not to start a contention or a discussion around the same topics, but an evolution-based discussion, and say "How can you make it better?" In music you give the first note to set the tone, and the same we are giving with Platformatic. We want to set the stage and say "This is how we from our expertise and the community we see this particular problem being resolved and being commoditized in a set of tools."

**Amal Hussein:** \[20:01\] Yeah, yeah.

**Luca Maraschi:** Now if you want to contribute - it's all open. Please, help us make it better.

**Amal Hussein:** That's so cool. I love this bold bet of elevating and setting standards. That's such a Matteo thing to do, is to just say, "Here you go! It's done now. Problem solved." Bold bet. I can totally see that, and that's so cool. But anyhow, I'm eager to hear from Chris...

**Christopher Hiller:** Yeah, so can you tell us about what did you release today? It's called Platformatic DB... What does it do?

3:Okay, so it does a few things. So at the outside, what you can scratch from reading the Getting Started - it reads up your database schema, and it creates a REST API with an open API definition, as well as a GraphQL API on top of your schema. So that's the simple, or easy part of it. It supports relations, and a few other bits... It also does migrations, it does logging, it does what you would expect from a daemon.

**Christopher Hiller:** Is it like a code generator, or no?

**Matteo Collina:** no, it just runs -- so it is what we wanted, okay? We believe that the best line of code is the one that you don't have to write. So if you need a code generator, you are essentially implying that you will need to maintain that code. We want to minimize friction, we want to remove the problem.

**Amal Hussein:** \#justdoit. \#itjustworks.

**Matteo Collina:** Just do it. It just works.

**Amal Hussein:** \#therightkindofmagic. Certain things I'm okay with being magic. I don't need to see the boilerplate; you're welcome to hide that, or abstract that. I don't need to maintain it, I don't need to see it either. That's beautiful. I love that.

**Matteo Collina:** Pretty much my take, because if I needed to generate stuff, it will require even -- I've tried different things of this kind. There is a catch though, and it is why the code generators are somewhat popular in the industry. It's because those code generators enable people to deeply customize the behavior that they need. And this is why they are so powerful. How do we cater for that case in Platformatic DB ? Well, what we do is we enable you to completely customize our server using Fastify plugins.

I've talked about Fastify before. Fastify is this more or less 3 million downloads a month web framework for Node.js. Right now it's probably the -- I'm the author/lead maintainer of that, so I can probably boast a little bit... It's probably the best way to write servers in Node these days. It has, I think, 17-18 collaborators maintaining it now. Every single release, it has commits from 20 different people, 10 of which are first-time contributors, something that.

**Amal Hussein:** That's so cool.

**Matteo Collina:** It has amazing stats. So that's battle-tested. And you can use that battle-tested framework to actually completely customize Platformatic DB. In fact, Platformatic DB is just built as a set of Fastify plugins. So if you want those features, and you have an existing Fastify application, you can just use our Fastify plugins and get the same functionality yourself without needing to -- you can just directly jump into the advanced case, okay? And essentially completely write the stuff yourself.

On top of that, it has a few more interesting things. It has a development environment embedded. It does hot reload of Node.js modules. And... Yay. So next, I'm hearing - that I need to talk about this feature later, so...

**Amal Hussein:** Yes, yes, yes! I'm like, "Matteo, Matteo, let's save this for the second segment!" I want to dig into all this and more. This is so cool, though. Oh, my God, oh, my god. Alright, so I'm gonna just I need a minute to even just contain my excitement... But we will be right back, y'all.

**Break:** \[23:48\]

**Amal Hussein:** Okay, everyone... So I had a minute to kind of freak out offline. We're back, and this is amazing... So Matteo, I'm eager to hear about all of this, and I love this concept of like boilerplate is popular because boilerplate lets you take the custom code which is the hot path for most people, but then it lets you edit that code to customize it. And you're like,

"Okay, well, how about we use a plugin architecture, so that we can actually abstract away that boilerplate hot path, but then enable that extensibility through a clean plug in interface?" That is freakin' genius, but in many ways, it's also the core principle and architecture behind Fastify, which is what we talked about last time you were on the show; we had a show on Fastify and Pino. Totally awesome, worth a listen; we'll link it in the show notes. But yeah, can you just jump back in there and talk us through that?

**Matteo Collina:** So the plugin architectures enable us to cater for the complex part of your application. So you can write your custom business logic, your custom routes, your customer solvers... Or even, I don't know - would you want to add Next.js into the system? Yeah, you can throw the Fastify Next.js plugin and it will work.

So the idea is that you can completely customize how that server is running. As I said, it also provides some level of developer experience/live reload on it. So you can just edit your files, and it will automatically reload them as Fastify plugins. It's actually pretty neat. This is a problem that some of you who have been in the Node community -- it's actually a hard problem, because I also support ESM, and you know \[unintelligible 00:26:41.28\] I think Chris' face is a little bit skeptical on how that would work, but it actually does.

**Amal Hussein:** Oh, my God, did you say "sane ESM experiences in Node"? Oh, my God...

**Matteo Collina:** Yeah, seamless.

**Amal Hussein:** That's a heavy promise. \[laughs\]

**Matteo Collina:** It's completely seamless. You just load it up and it will just --

**Amal Hussein:** How about if I add different packages from different npm libs...

**Matteo Collina:** It's fine.

**Amal Hussein:** ...that are in different module formats? All good and supported?

**Matteo Collina:** Yeah, because you just use Node.

**Amal Hussein:** Oh, okay.

**Matteo Collina:** So you have all the same rules for Node, but what we do is that we have hot reloading of all of this... So even if some dependency changes and stuff, it gets hot-reloaded in code via isolates. So there is a little bit of C++ in there, and stuff. Really fun stuff. By the way, I did not invent most of this stuff, or most of the key fundamental, the stepping stone, if you want... What gave me the inspiration for this feature came from Anna (@addaleax on Twitter). She wrote this module called Synchronous Worker that does the --

**Amal Hussein:** Did you say Anna?

**Matteo Collina:** Anna. Yeah, Anna.

**Amal Hussein:** Oh, my God, I love Anna so much...

**Matteo Collina:** Yeah, me too.

**Amal Hussein:** She's so humble... She's so incredibly humble. I've been trying to get her come on the show for a while.

**Matteo Collina:** \[28:06\] Yeah. Well, insist. She's amazing.

**Amal Hussein:** She's brilliant, yeah. I love you, Anna, if you're listening...

**Matteo Collina:** Yay. And basically, this module enables you to create a full worker thread, completely isolated from the rest of your main Node.js execution, but on the same thread, and on the same event loop.

**Amal Hussein:** So different execution contexts that are sharing --

**Matteo Collina:** The same event loop.

**Amal Hussein:** ...the same event loop. That's black magic right there.

**Matteo Collina:** Pretty much!

**Amal Hussein:** So is this leveraging V8's --

**Matteo Collina:** Yeah, isolates.

**Amal Hussein:** ...isolate technology? Okay, okay. Interesting. That is some really black magic. I didn't even know that was a thing. Are they using this for atomics, to support atomics in the browser as well? Or is this just a Node thing?

**Matteo Collina:** This is just V8 isolates; it's just more or less the bits that you can already do. It's how Cloudflare Workers are implementing certain things, and so on and so forth.

**Amal Hussein:** I see.

**Christopher Hiller:** What are the chances of something like that getting into Node core?

**Matteo Collina:** That's my next step. All of this is open, and Anna did the first implementation... I had to fork the module, because I needed some modifications for my staff to get through... But I would really love to get into Node core, because it's so powerful that it will be -- like, right now, in order to run Platformatic DB it basically -- if you don't have a compiler available for compiling this little bit of C++ glue to make everything work... We run with a polyfill that does some of it, but that's the best that you can do with the tool \[unintelligible 00:29:41.09\] But the full experience is amazing. You have to figure out a few hard crashes, which are a lot of fun when your systems have a very bad crash...

**Christopher Hiller:** That sounds cool.

**Matteo Collina:** A V8 crash, okay? Like, not another V8 crash. It's fun to debug. So that was very, very interesting. It provides the core of the development experience for writing plugins, so that you have -- imagined Nodemon, but instantaneous. It was so fast that I had to introduce a timeout, because -- I had to introduce a 100-millisecond timeout, because it was too fast.

**Amal Hussein:** Oh, my God... And you're a fast typer and you're saying that, so it's like... Oh, my God, I can only imagine. Yeah. That's awesome.

**Christopher Hiller:** Something like that seems like it could even fix Jest.

**Matteo Collina:** Actually, yes.

**Amal Hussein:** And this is not a miracle worker \[unintelligible 00:30:32.15\] You're asking for too much now. Don't tempt the gods, okay?

**Christopher Hiller:** I'm serious. I'm serious.

**Amal Hussein:** No, I think you're right. Yeah, Jest, and also all of the TypeScript memory leaks... You know...

**Matteo Collina:** Yeah... I will tell you about that. TypeScript is on the path.

**Amal Hussein:** Oh, yeah. Let's talk about that. I wish Nick Nisi was on the show. He'd just perk right up right now. "Did somebody say TypeScript?"

**Matteo Collina:** TypeScript!

**Amal Hussein:** I'm not on the fence about TypeScript. I totally get it, I see the benefits, and all of that... Like I said, I just -- I'm more pragmatic TypeScript. I'm not spending a ton of time on generics. I'm not going to spend a ton of time fighting TypeScript for use cases that are inner, inner, inner, inner, inner, inner deep interfaces... I focus more on my public interfaces, and places where it's touchpoints... So anyways, I'm team pragmatic TypeScript. But anyways, I'm tangenting.

So Luca, I'm curious - before we get more into the specifics of the functionality here, what's your role versus Matteo's role? Are you CEO, CTO? Are you co-CTO? What's the dynamic here between the two of you?

**Luca Maraschi:** Yeah, the dynamic is I'm CEO, and I try to do all Excel and more legal side...

**Amal Hussein:** Yeah. All the PowerPoints...

**Luca Maraschi:** While Matteo helps and leads the --

**Amal Hussein:** So you're building the business, basically, and he's focusing on the tech. It's a good partnership.

**Luca Maraschi:** \[32:00\] Yeah. We both like to design the product and design the different features... Like I said, the product itself came out from the experience that we share together, and sharing architecture, and ideas around that. So the product is very organically designed. But that's how we split. I'm more focusing on getting the engine to always have oil in, and smoothly work and operate...

**Amal Hussein:** Yeah, yeah. No, that's so cool. Okay, we'll have to talk about the business later. So back to the tech now... So Matteo, what else can this thing do? So we have crazy, awesome, hot module reloading, that's instantaneous, basically, which is incredible... It's leveraging under-the-hood black magic via V8...

**Matteo Collina:** Pretty much... If it doesn't crash, pretty much. It seems stable. We tried it heavily. It seems stable.

**Amal Hussein:** Is that like an experimental feature for now?

**Matteo Collina:** Well, in the world of Platformatic DV, I would call it experimental. I just marked 0.1.0. So just to be clear, this is the first time this has seen the light. We have been using it ourselves in production for some of the commercial parts of the business, which we are developing, which Luca is the person leading all of that... But right now it's essentially the first time that we are exposing it to the wide world, so I expect a lot of bugs...

**Amal Hussein:** Yeah, yeah. So it's still not v1, right? We haven't hit --

**Matteo Collina:** No, I would say it needs a little bit of seasoning to get to a v1 type of --

**Amal Hussein:** Release.

**Matteo Collina:** ...or general availability type of thing. It's more of, "Oh, we've built this, and we would some feedback." And we are looking for early users to help us out in debugging and making sure this is great.

**Amal Hussein:** Okay, so we have this Platformatic DB, and there's an SDK on top of it that helps you manage your routes, and requests, and whatever else... So what else can this thing do besides having great developer experience?

**Matteo Collina:** Platformatic DB is the SDK, to some extent. You use it with your SQL database. So you can use it with SQLite, you can use it with Postgres, you can use it with Maria DB, you can use it with MySQL.

**Amal Hussein:** Cassandra?

**Matteo Collina:** Well, you can't use it with Cassandra, unfortunately.

**Amal Hussein:** Hah! I've found a \[unintelligible 00:34:19.19\]

**Luca Maraschi:** ...yet.

**Amal Hussein:** I'm filing a bug. I'm filing a GitHub issue right now. No, I'm just kidding.

**Matteo Collina:** So we focused on SQL at the beginning, for two reasons. And I want to reconnect a little bit on what we talked about before, okay? Part of our challenge and of what we want to solve is to empower developers in building backends. And this is essentially our call. And in fact, we see there is a huge amount of material out there right now on how to use SQL databases, how to use MySQL, how to use Postgres, how to use SQLite. There is a massive amount of material, okay? 40, 50 years' worth of material on how to build SQL databases. This is taught \[unintelligible 00:35:03.00\]

**Amal Hussein:** Yeah. Solved problem.

**Matteo Collina:** It's taught in all possible courses. And using SQL as the base, it's one of the fundamental reasons, because most of developers will know this stuff, okay? So they know that they can use the database. And to some extent, it's a little bit better, from my point of view, especially my use case, of just using ORM on top of your custom code... Because if you use an ORM, you have the problem of -- you're always passing through the ORM interface, right? While when you start developing stuff straight on top of the database, by using plugins, you can actually write raw SQL, and that's what we recommend using.

In fact, internally, we use another project from another phenomenal developer that you should probably invite here... It's called AtDatabases, and it's from Forbes Lindesay.

**Amal Hussein:** \[36:01\] AtDatabases, like \[unintelligible 00:36:02.05\] Is that like a Twitter handle, or what is that?

**Matteo Collina:** Yeah, I'm posting a couple of links now...

**Amal Hussein:** Okay. You don't have to do it live. You can do it later. \[laughs\]

**Matteo Collina:** Yeah, but you see --

**Amal Hussein:** Thank you for sharing them.

**Matteo Collina:** Here is the link. It's an amazing library by Forbes. This is another of the old Node.js people type of--

**Amal Hussein:** Did you say Forbes?

**Matteo Collina:** Forbes Lindesay.

**Amal Hussein:** Okay. I thought you meant Forbes like --

**Matteo Collina:** No, not \[unintelligible 00:36:34.10\] It's called the same.

**Amal Hussein:** I was like, "Forbes, the business magazine? What do they know about Node...?"

**Matteo Collina:** Nope.

**Amal Hussein:** Okay. Got it. The person.

**Matteo Collina:** It's Forbes Lindesay. It's one of the most -- it's a very old Node.js author, npm author out there. And it's a great project. It supports all the databases that I mentioned, and more.

**Amal Hussein:** Nice, yeah. atdatabases.org. We'll put the link in our show notes as well

**Matteo Collina:** So in this way, you can use your own SQL queries to build your own -- and all the top features of your databases. If you are building just ORMM -- if you're using ORM, you're stuck to what the ORMs provide you.

**Amal Hussein:** I'm team No ORM. I think that it's a really not worthwhile abstraction. I'm so sorry to say that.

**Matteo Collina:** Pretty much...

**Amal Hussein:** It's more headache than not. And then what happens is, the ORM stops getting maintained sometimes, and then everyone's like "Oh, darn it, end of life for this thing is in a year and a half. What are we going to do?" Like, come on! No. It's not even worth it. Your database is your gold. Why put something between you and the DB that is crap, and buggy, and slow?

**Matteo Collina:** Pretty much. If I need to write code, okay. I want to talk to my database directly.

**Amal Hussein:** Yeah.

**Matteo Collina:** And that's the gist of the reason why we are using this tool and not other staff that mediates between us and the database. It was a pretty good journey about these... And we hope to help all those developers that are coming up from bootcamps, or they're juniors, after university, and so on and so forth, so that they can be productive immediately, essentially.

**Amal Hussein:** Learn it the right way. Also, SQL is one of those things where it's like "Learn once, write everywhere, use all the time." It's like Git, and Bash... You just have to bite the bullet once, and you're gonna use it for the rest of your career.

**Matteo Collina:** Like Vim.

**Amal Hussein:** Is this a new library? How do I not know about this? Atdatabases.org. I've been living under a rock, clearly.

**Matteo Collina:** I don't know. It's been around for quite some time now.

**Amal Hussein:** Yeah, this is the first time I've heard about it. And I think for me what's exciting is a few years ago I was in that situation where some popular Postgres ORM was going out of style, and was heading end of life, and then the whole company was freaking out. So yeah, good to know. But anywhoo... So back to Platformatic. So you have a sane DB line of communication, no ORM, so it's fast, and it will scale for many use cases... So what else? What else is in the oven here that we're getting with this first release? And what's coming? What's coming soon?

**Matteo Collina:** So what's so what's coming - I believe what's coming to Luca. What we didn't talk yet, it's the basic authorization capabilities. So essentially, you can integrate Platformatic DB with your JWT authentication server, for example. So if you're using Auth0 or analog, you could just send the tokens to Platformatic DB and implement very basic role-based access control.

**Amal Hussein:** Oh, nice. That's another big one that's usually tricky and most people get stuck. Oh, my God...

**Matteo Collina:** Yeah, pretty much...

**Amal Hussein:** What is up with them?! Everybody messes this up. It's so --

**Matteo Collina:** Oh, it's everywhere. Everybody messes this up.

**Amal Hussein:** \[40:08\] It's like -- yeah... Geez. In the UI AND in the API. Both implementations are always messed up.

**Matteo Collina:** We are not talking about the UI.

**Amal Hussein:** Yeah, I know.

**Matteo Collina:** I am as bad as a frontend developer-designer that you can probably get... I was fighting last night in order to get the website up. I literally Googled up "How do hide the HTML element?"

**Amal Hussein:** Oh, that's hilarious. Actually, you know what - I saw you use Docusaurus. That is so cool. Isn't Docusaurus amazing?

**Matteo Collina:** Yeah, it is.

**Amal Hussein:** We'll have them on the show sometime, yeah.

**Matteo Collina:** This latest release - they've done this 2.0 release. This 2.0 release is actually amazing. It overcomes all the previous bits that I didn't like about Docusaurus. So there were quite a few parts of the workflow that were not great before, and this 2.0 release they actually cracked a very hard problem, which is the multi-version setup. And we did a very interesting integration with GitHub Actions...

**Amal Hussein:** Oh, interesting.

**Matteo Collina:** ...so that whenever we do a release on the main project, it gets its documentation lifted from there, copied into the Docusaurus website, and committed by itself. So all of this happens behind the scenes.

**Amal Hussein:** Very cool.

**Matteo Collina:** And so it's frozen. We don't need to maintain multiple versions on the docs on the current tree... Because that's been a problem...

**Amal Hussein:** That's revolutionary. \[laughs\]

**Matteo Collina:** It enables these kinds of workflows...

**Amal Hussein:** Yeah. That's so cool.

**Matteo Collina:** And I'm very happy about the setup. The build is not fast, but we'll get there.

**Amal Hussein:** Yeah, yeah. You can't have it all. We can't have it all. But anyway, so that sounds really exciting. So you've solved the role-based access, permission-based access problem, you've built in some good conventions and standards and good rails there... That's exciting. And so there's just so much to dig into; I'm eager to hear about what's next, I'm eager to hear about the business plan, I'm eager to hear about what's your plan to make money...

**Matteo Collina:** It's all Luca, you see... I've been so entrenched in shipping this that I completely more or less got into my hole and coded on my keyboard. A couple of things on what's next. Next week we are going to NodeConf. Or this week; I don't know when you're listening to this.

**Amal Hussein:** Yeah. Well, the show's dropping next week. Yes. So this week...

**Matteo Collina:** So this week, on Sunday, we are heading to... \[laughter\]

**Amal Hussein:** I've been in so many shows lately where there's some time warp...

**Matteo Collina:** We're in a time warp...

**Amal Hussein:** Yeah. So this week, on Sunday, in a few days from when the show drops...

**Matteo Collina:** On Sunday, in a few days, we will head to Kilkenny for NodeConf EU. And at NodeConf EU we will be doing a workshop on Platformatic DB.

**Amal Hussein:** Oh, fancy...

**Matteo Collina:** So essentially, we will be there promoting this, and then we will be around talking about Platformatic in November, in London...

**Amal Hussein:** Wearing T-shirts, giving away stickers...

**Matteo Collina:** Giving away T-shirts... You see, we have T-shirts. That's the important part. We have T-shirts, we have stickers. You see, I have stickers. I have nice swag.

**Amal Hussein:** Priorities are all correct for Platformatic DB, honestly. Yeah, who needs API features when you have cool stickers...? But anyway, so we're gonna get into all this stuff and more - the business, the open sourcing strategy, roadmap of what's next... All that, in our last segment. We'll be right back, y'all...

**Break:** \[43:49\]

**Christopher Hiller:** Luca, so can you tell us more about Platformatic the business? What's coming next? How do you plan to actually make your money?

**Luca Maraschi:** Yeah, we're not gonna -- like in every good Michelin star restaurant, we give you a little bit of the --

**Amal Hussein:** "We're not gonna spill our secret sauce..."

**Luca Maraschi:** ...the plating thing, and make you a little bit more hungry... But we are actually gonna progress into a broader vision and product. Our first step is to work towards our cloud proposition, which is not yet another AWS. We just want to actually provide a simple and easy way for developers to test outside of their own machine what they're building. And from there, we actually imagine that that journey shouldn't stop. Developers should be able to have a first entry to the open world, where they can test their API, then a way to scale it, and a way to integrate it within their own organization. Because we imagine that the journey is a multi-step journey. A crawl, walk, run approach.

We try to reverse it, we try to let them run as fast as they can, then walk and slow down into the crawling when we touch compliance and other kinds of enterprise-level requirements. But our progression in terms of the overall strategy is going to be around our \[unintelligible 00:47:42.02\]

**Amal Hussein:** We'll host your \*beep\* basically, to sum it up.

**Luca Maraschi:** We'll host your \*beep\*

**Amal Hussein:** We will host your \*beep\*, yeah. Okay. Not quite exactly that, but yes...

**Luca Maraschi:** Yeah.

**Amal Hussein:** In summary, yeah. That's the Vercel strategy, right? Open source the core...

**Luca Maraschi:** Correct.

**Amal Hussein:** ...and we'll give you a whole bunch of really awesome, even better developer experiences in cloud integrations with your deployment pipeline.

**Luca Maraschi:** Correct.

**Amal Hussein:** Very strategic and solid strategy, dude. High five from me.

**Luca Maraschi:** Yeah. Until you land into the enterprise proposition, which --

**Amal Hussein:** \[48:15\] Oh, enterprise is hard to please though. Enterprise - they always want bespoke solutions. It doesn't matter.

**Luca Maraschi:** Correct.

**Amal Hussein:** They are always like "No, our problems are different. We swear." But they're actually not.

**Matteo Collina:** They are actually all the same.

**Amal Hussein:** They're all the same, you know? I swear to God, it's the worst. And I think what's interesting about enterprise is, I'm eager to see if this ever happens in the business world, where they really start to understand the value is in your business logic, not in where your APIs live, what stack you're using... It's about how quickly can you execute and how much agility do you have to pivot with the market. And they need to understand, there's a cost to having a bunch of your engineers -- like, you have 100 engineers; out of the 100 engineers, if 60% of their time is spent doing basic stuff that can be outsourced, then imagine how much stuff you can unlock in terms of your business being agile. And so that's something that needs to happen, and it's just not happening. The whole Platformatic will be part of that strategy. But you know, it's just a gap. It's a serious, serious gap. For me, it's a form of talent waste.

**Luca Maraschi:** Correct.

**Amal Hussein:** I see a lot of smart people doing things that are not that exciting anymore... And it's like, "Come on, man... We solved this problem 20 years ago. Why are we solving it again here?"

**Luca Maraschi:** Correct. And that's exactly our strategy. Our strategy is exactly to tap into that exact problem and give us a solution, this out-of-the-box experience. And the issue with enterprise that we notice and we experienced is, like you were saying, nothing is new there. How can we actually value more the investment that the enterprise does to create value for their customers more than actually trying to actually spend a huge amount of OpEx capital into operating something that on-demand --

**Amal Hussein:** That can be bought.

**Luca Maraschi:** Exactly.

**Amal Hussein:** Yeah, we need to shift the standards for build versus buy.

**Luca Maraschi:** Correct.

**Amal Hussein:** We need to shift the line in the sand a little bit more. And I feel like Platformatic is helping, hopefully, elevate that.

**Luca Maraschi:** Yeah. And there is actually a perception problem there, in build versus buy. And Matteo and I have been also there. For engineers, when you hear "We buy something", you feel like if your brain power has been diminished to something like an implementation, right?

**Amal Hussein:** Yeah.

**Luca Maraschi:** And we actually want to flip the equation completely there and say, "No, actually, the buy is mostly that buy into certain practices, certain out of the box--"

**Amal Hussein:** Oh, right. Outsourcing your brainpower, to some degree.

**Luca Maraschi:** Correct.

**Amal Hussein:** Like, "I'm gonna follow this thought leadership." Yeah.

**Luca Maraschi:** Yeah, exactly. It's all about kind of like also redirecting energy in something that is more valuable. Let's be very honest... Building a login system - I don't find it personally challenging. It's nice to solve it at scale the first time and then it's like, okay, copy-paste, right?

**Amal Hussein:** Yeah. Basically, Auth0's entire business strategy is like "Everybody outsource this."

**Luca Maraschi:** Yeah. But distributed systems, if you think - they have nuances that are nice to solve, but then once you solved them, you can apply them everywhere.

**Amal Hussein:** Yeah.

**Luca Maraschi:** So one thing that we actually are going to accomplish with Platformatic, without revealing the secret ingredients - we actually want to try to abstract away the operational side of building APIs, and also the complexity of, for example, managing the team that builds APIs. So we actually are focusing mostly on how can we actually make sure that people focus only on that business logic. And the rest - it's out of the box. It is a given. Matteo and I always use this term, it's a given; it's there. Just use it. Don't question it too much. But make it still composable, right? Because it has to be composable for the different environments.

**Christopher Hiller:** \[52:12\] So you're planning to build stuff out like, I don't know, load balancing, orchestration, and all that junk that people want?

**Luca Maraschi:** Yeah, kind of... I've been personally very vocal at the time about service mash, when it was just the beginning of exploding... And I always then started calling it a little bit of a lie to developers, because it's a great story for operators, but developers - they don't get any direct benefit out of that. So we actually want to bring that equation back to be favorable for developers. So we are actually trying to build -- our vision there is to build some sort of... Let's call it a runtime, that is some sort of like a kernel to these applications... And then start to replicate itself, in the different distributed applications, distributed teams... We actually imagine that the ultimate abstraction is something that will be able to run this business logic more than produce the business logic.

**Christopher Hiller:** Cool. Also, I wanted to ask about - it seems it's not just you two, right?

**Luca Maraschi:** It's not...

**Matteo Collina:** Yeah, we have a small team.

**Christopher Hiller:** I noticed more contributors on the project than just you two. So you're like - what, five people now? Or are you looking to grow?

**Matteo Collina:** Something like that, yeah. We are just out there. We are not looking to grow, and anything else. Actually, I just wanted to thank all the people that have worked on this journey so far, believing in two wild Italians... You know, you jump on, and a new company, and so on... It's been a huge leap of faith from everybody.

**Amal Hussein:** Well, I mean, I would imagine that you probably will have the best staff meeting food, and just best office parties, right? The food's always going to be great, and... \[laughs\]

**Matteo Collina:** Look, we don't have an office... Some of us have never met in-person...

**Amal Hussein:** Okay, but that is a freakin' cool story though, right? A true modern company. You all are working remotely, in the open... And some of you haven't even met. I mean, that is for me just the cherry on top of the story. Fascinating. It's like, you're pushing things forward in many ways. So do you feel Platformatic is going to be beloved and embraced by startups initially? Because startups are the ones that are always more open to "What can we do to quickly ramp up?" They're the ones that really need that true agility, and they need to catch up on their engineering help... So is it a startup \[unintelligible 00:54:46.13\]

**Matteo Collina:** First of all, I don't care too much about startups.

**Amal Hussein:** Oh no, don't say that out loud.

**Matteo Collina:** What I care about is --

**Amal Hussein:** We have to cut this off the show. No, no, no...

**Matteo Collina:** No, let me finish. Let me finish.

**Amal Hussein:** It's your bread and butter, Matteo. Everybody has a customer, and they don't always need to love them. They just need to love their money, right? \[laughs\]

**Matteo Collina:** No, no. I deeply love developers, okay?

**Amal Hussein:** Okay.

**Matteo Collina:** The fundamental, great part is that I deeply love developers. I want them to have the best experience that they can have. And of course, we want to \[unintelligible 00:55:20.17\] startup at their best. But first and foremost, at least in these initial phase of our company, what we want is to help developers get off the ground, help them deliver software very quickly... And of course, help companies that wants to adopt this. Help startups, help, medium/small shops, small agencies... Help all the companies that need these kinds of tools the most.

**Amal Hussein:** Yeah, there's a big need.

**Matteo Collina:** There is a big need for this kind of stuff. So we are happy to receive all the feedback and incorporate all the feedback into our product. But that's me. Luca will tell you that he's all-in for the clients.

**Luca Maraschi:** \[55:59\] Just to add, right? For us it's very important that we are taking out of context the problem, and we go back to your point, Amal, that was before, right? We are looking at problems in a very abstracted and lateral way. We actually believe that the context in which this problem is going to be operated changes certain variables of that operation, but shouldn't change the solution, right? Authentication/authorization are exactly the same for a startup with two people running whatever application, to a hundred-thousand-people organizations. The problem is that -- and I go back to my best friend, Einstein... It's the observation point, right? Where you observe this problem from. That's what changes the equation of that solution. And for us, we actually want to try to change that total misconception and say, "Well, authentication and authorization are exactly the same. It's just that you need different types of scales and different \[unintelligible 00:56:59.02\] requirements. But the holistic problem is exactly the same."

**Amal Hussein:** Yeah.

**Luca Maraschi:** And so with Platformatic DB that's how we actually started this journey towards our cloud. And we said, "Any developers that needs to use a database, ourself included, to build our own product, has these requirements. So let's go back to first principles, build it up, and stack upon, stack upon, stack upon." But it's always about the context. That's why we believe that it works on my machine -- it's something that we want to make true; it works on my machine, it works on your cloud, it works on our cloud, with no changes. That's our promise. That's our ultimate goal, is that we want to have this runtime, this atomic application to run everywhere, with no changes.

**Amal Hussein:** That's incredible. And is everything MIT-licensed?

**Luca Maraschi:** So we have an Apache license...

**Matteo Collina:** It's Apache 2.

**Amal Hussein:** Apache two. Okay, interesting. Very, very cool. Yeah, I'm excited about this future. I'm here for it. We've had a huge need in the community, as you know... I'm really eager to hear -- when was the first commit for Problematic, and... Problematic, oh my God...

**Matteo Collina:** Hah! I made this mistake too, in a video.

**Amal Hussein:** You called it Problematic, too?! I was like "What the hell?! Where did this word Problematic even come from?!" \[laughs\] You've been calling in Problematic DB. Okay... When was the first commit for Platformatic, and when was the first handshake for both of you? I'm just curious. Because Matteo said June earlier, and I'm like "Damn, y'all created a company and a concept in four months." I'm like, "Do I need to quit my job?" I don't know, this is so cool. I'm so impressed. I'm not going to quit my job, if anybody's listening. Don't worry.

**Luca Maraschi:** The handshake, Amal, was actually extremely easy. As friends, we have been chatting, we have been sharing a lot of thoughts, and we came to an agreement that it was the right journey to start. I think it was the end of April, beginning of May when we first started to be very, very serious about it... So that was there when we started to say, "Well, probably we need to take the leap."

**Matteo Collina:** Yeah. "We need to incorporate and we need to create a company and quit our jobs to get this going... We need to get this done now."

**Amal Hussein:** Yeah, yeah. All the logistics need to come later. Okay.

**Matteo Collina:** That's the gist, essentially. It was very late. I was on a two-week trip on vacation for two weeks with my family, doing a road trip with our kid in the South of France... And in the meanwhile, during the day I was doing all the family activities and stuff, and during the nights I was reviewing documents for the company, with all the incorporation staff, and so on and so forth, with Luca. It was quite a wild ride at that point in time. So yeah...

**Amal Hussein:** Yeah, super-cool. Well, again, so where can people find you online? Where can they continue learning about the project? You're going to be at NodeConf EU this week. Hopefully, there'll be a recorded workshop that folks can listen to and watch. But what's your website? What's your handle? What's all your stuff?

**Matteo Collina:** Our website is Platformatic.dev. You can find us there; that's the company website. All the open source stuff are at oss.platformatic.dev, or you can find us at the...

**Amal Hussein:** GitHub org?

**Matteo Collina:** You can find us on Twitter, @Platformatic, or you can just simply npm \[unintelligible 01:00:16.16\] and you're good.

**Amal Hussein:** Yeah. All the things.

**Matteo Collina:** All the things.

**Amal Hussein:** Yeah. And Matteo, you have a cool newsletter, too. I'd love to plug that for you.

**Matteo Collina:** Yeah...!

**Amal Hussein:** Yeah, if you want to listen to the wisdom of Matteo Collina, who's a wonderful teacher and very generous with all of his knowledge...

**Matteo Collina:** Thank you...

**Amal Hussein:** He's on the Node Technical Steering Committee, he's a huge open source contributor and maintainer... He's awesome. Someone I think everyone from our community should be learning from, to be honest... But yeah, do you want to tell us about your newsletter?

**Matteo Collina:** Nodeland.dev.

**Amal Hussein:** Nodeland.dev, and we'll put a link in our show notes. So with that said, kids, we are wrapping this show up. I'm super-excited, can't wait to try it. Definitely going to use this for my next few projects to play around with it, and it was really great spending time with you both, Luca and Matteo.

**Matteo Collina:** Thank you.

**Amal Hussein:** I think it's safe to say Ciao...

**Matteo Collina:** Ciao...!

**Luca Maraschi:** Absolutely! Ciao!

**Amal Hussein:** Ciao, everybody. Ciao-ciao!

**Christopher Hiller:** Bye-bye. Thank you.

**Amal Hussein:** Ciao...!
