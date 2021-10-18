**Jerod Santo:** Oh yes, the sound of those Breakmaster Cylinder beats means it's time once again for JS Party. My name is Jerod, I'm your internet friend, and I'm very happy to have three of my internet friends with me. Suz is here. What's up, Suz?

**Suz Hinton:** What's up!?

**Jerod Santo:** JS Party is up. And Amal as well... Howdy, Amal.

**Amal Hussein:** Howdy, howdy!

**Jerod Santo:** And we have b0neskull here. What is going on, Chris?

**Christopher Hiller:** What's up, everybody in the house?

**Jerod Santo:** Everybody in the house say "Yay-ya!" Okay, we have a listener request once again -- hey, we're just answering our listener requests left and right lately... So kudos to us, I guess.

**Amal Hussein:** They're so smart.

**Jerod Santo:** Did you know that we take requests, like any good wedding DJ? Or maybe even the bad ones probably take requests. You can head to Changelog.com/request, let us know a guest, a topic, a panelist... In fact, Amal, you were request this time, my friend. And we would like to take it up on a future episode... So that's completely free and accessible. This one was requested by Thomas \[unintelligible 00:03:08.25\] who also happens to be hanging out in the live chat room, so shout-out to Thomas. Did you know we record live? Probably, because I say it all the time... But I'll say it again - Changelog.com/live every Thursday at 1 PM U.S. Eastern.

Thomas wrote in, and he said:

"In a previous episode, Amal said jQuery has a well-designed API. I kind of know it when I see it with good API design... But I would love to hear about the learnings, mistakes, pitfalls and guidance for how to make a good API."

So the gauntlet has been thrown... We all have opinions on the matter; some of us are expert API designers... I'm more of an expert API user; I have opinions... Because I use a lot of them. But we're happy to talk about that in detail.

So first up, let's define the term, let's lay the ground rules... I think a lot of people when they think API, they immediately go to probably a subset of what the term is applied to, which is usually like a web API or a service... But it's more broad than that. Would anybody like to tackle API, define it, and then talk about the scope of the term?

**Amal Hussein:** \[04:13\] I nominate Suz...

**Jerod Santo:** I'll second it...

**Suz Hinton:** Well, we can start with what it stands for first, because otherwise that would be bad, if we talked for an entire episode, saying "API, API, API..." It does not stand for American Petroleum Institute...

**Jerod Santo:** Good point.

**Suz Hinton:** ...which I think has an API... It stands for Application Programming Interface, which actually sounds like a mouthful. I guess being able to describe it in a broad sense, usually I describe it as a collection of software abstractions that programmers used in order to -- you have two contexts of software that need to talk to each other... And for different reasons, you would create an API in order to make it easier or a nicer experience in order to interact between those two interfaces (to use the word in the definition).

I guess that's the most abstract, broad definition you can give it... But as an example, jQuery is a library, and it provides an API or a programming interface to the DOM in the browser; and what it does is it smoothes over and creates consistency across all the browsers, but it also gives you a really nice feeling, enjoyable to use. We'll talk about what makes a good API in another segment, but it just makes it a nicer experience, so that you can be much more productive as well. So I think an API does a lot of different things, and that almost helps define what it actually is.

But then there's other things - Jerod, you talked about how there are internet, web-based APIs that actually link out to external services; the two software pieces coming together - your particular website needs to speak to another external website in order to do something that that external website is way better at doing for you. Instead of having some kind of awful, low-level interface to do that, you can provide everything, from libraries to HTTP routes in order for people to communicate with you.

So it's really just a communication layer between different pieces of software, I guess... Can anybody do any better than that, given that I was put on the spot? \[laughter\]

**Christopher Hiller:** You mentioned the awful low-level things... But there are awful low-level APIs, right?

**Suz Hinton:** That is true.

**Christopher Hiller:** So if you have a -- I don't know... Maybe you've got \[unintelligible 00:06:39.02\] some sort of sensor or something, and maybe it speaks SPI, or something... You need to send it a series of bytes back and forth to talk with it, and that sort of thing. And there's an example, I would say, of an API. SPI may be the protocol, but whatever those bytes are that you're sending back and forth to the module as the programming interface.

**Jerod Santo:** Right.

**Christopher Hiller:** Likewise, things like - if you're old like me, maybe you remember modems, where you would call up to a BBS, and the API for your modem was the AT command interface. So there are low-level APIs and high-level APIs.

**Suz Hinton:** I think that's a good point, because when you think about it, SPI is almost like the higher-level than the lower-level, which would be literally pushing electrons and bit-flipping by hand, right?

**Christopher Hiller:** Totally.

**Suz Hinton:** So it's interesting how -- you can get even lower than something like SPI, even though SPI is considered a low-level thing. So it's kind of like totals all the way down, I guess, as far as APIs go.

**Amal Hussein:** That's honestly such a good segue to how I kind of interpreted API. And by the way, Suz, your definition was amazing, and perfect, as always. For me, I kind of think of API as like A Poke Interface... \[laughter\]

**Jerod Santo:** Explain...

**Suz Hinton:** I love that so much.

**Amal Hussein:** \[08:05\] Yeah, A Poke Interface... So it's like the way you are leveraging someone else's code. It's like "Here, poke my code this way, if you wanna get this thing." Kind of like a game of Twister, but with your fingers on the keyboard, and you're typing things to make this other thing do a thing. So it's really a contract. It's like "Hey, this is how I'm used. I do all this stuff underneath. I'm an iceberg. All you see is my tip, the tip of the iceberg." You don't know what's underneath.

What's really nice about APIs in general is the abstraction. Someone(s) has done the job of taking away some piece of complexity and bundling it up, packaging it up into a nice interface for you to poke.

**Jerod Santo:** Right. I like that.

**Suz Hinton:** I love this so much. This is such a great definition.

**Amal Hussein:** Thank you! And to segue into things we're gonna talk about later, A Poke Interface should have a perfect intuition for a user... In the sense that there's a set of typical, I would say, patterns for tools that fall within certain genres... And I think the more alignment there is for what a user would expect when using this type of a tool, the easier it is for a developer to just kind of run with a new tool. The less cryptic and the less domain knowledge that you have to attain to use said thing, the faster you're able to move.

Unix is for me best API design ever. Unix, and then jQuery as well... But Unix had some very forward-thinking stuff when they were like "Do one thing, and one thing well. Make things composable." If you think about how Unix APIs are like these LEGO blocks that all connect into each other... It's kind of amazing.

**Jerod Santo:** Well, I will add my Amen to that \[unintelligible 00:10:18.26\] Unix philosophy.

**Amal Hussein:** Yeah. So a good API is intuitive to use, because it generally follows a set of standards that other tools in that suite have used... But a good API is also interoperable, it's extensible... There's so many things. I have a comment on bit-flipping, but I'm gonna save that for later. \[laugher\]

**Jerod Santo:** Let me add a couple of thoughts here real quick. We talked about high-level and low-level, networked, and maybe local hosts - the broadness there, or maybe the depth, where you can go all the way up the network stack to an application API (maybe you're talking about the Stripe API) and you can go all the way down to the hardware, and talk about those low-level APIs, and bit-flipping, and different things.

There's also kind of an inside-out way of looking at it. I joked earlier that I'm more of an API user... But if an API is an interface to your program, and you're a programmer, then you write APIs. So the simplest way to think about it is when you define a function, your function's name plus its external properties such as the parameters it takes, and those types, if it's typed - you are designing an API when you write a function.

Now, you may be the only consumer of that API. Your own code may be the only one ever consuming it. But it's an API nonetheless. Or when you do a capital upper-case poke API like the Stripe API, or the GitHub API, you're now writing a very similar thing conceptually, it's just that it has way more depth to it, and things underneath it. And it's third-party, so you're calling into that from somewhere else.

\[11:53\] So that's why I say it's so broad... Because it can go from "How do I name my functions and how do I accept parameters?" to "How do I do OAuth, or how do I do REST correctly, or GraphQL?" or these kinds of decisions. So it really is such a broad thing.

That being said - Amal kicked off what we like, so we're gonna talk about what makes a good API, and Amal enumerated a couple of characteristics, but she also says an API that she loves, or really a philosophy around APIs, which is the Unix philosophy... We thought it would be nice to talk about APIs that we admire, or that we think are good, because when you talk about how do you design a good API, a lot of times the way you do something good is by imitation. You say "I think that thing over there is good. I'm gonna do it like that." This is how good authors become good, oftentimes - they read a bunch of books, and they find authors they admire, and they say "I would like to write as well as this guy, or that gal." And we can do that with APIs as well. So what are some APIs that we consider good, here on the panel?

**Amal Hussein:** Honestly, I think for me, I love the GitHub API, as problematic as maybe some consider it. I think the REST API is a good example of how to have good documentation, structure, organize your resources...

The jQuery API... I used to really like the React API; not so much anymore. I thought one of the reasons why React really took off initially was it really had a low amount of domain knowledge required to get started with it... It just leveraged a lot of JavaScript... Versus something like Angular, which I felt at the time there was a lot of cryptic knowledge around "How do you do loops in your templates?" and pipes, and filters, and all this other syntax that you had to learn that was custom to Angular.

So low domain knowledge is good when folks are using your tool, but... I don't know. I mean, there's so many tools. Stripe has an incredible API... So it's usability plus documentation, and also the way Stripe handles its backwards-compat is kind of amazing. Certain companies I've worked for in the past are using actually very old versions of the Stripe API... But Stripe isn't maintaining an old version of a package for one company, it's just that they've designed their API to just be backwards-compat at all layers, and that's really very good design, that really saves the company a lot of money, and lets people have enterprise users... Because enterprise people -- we know enterprise... One version for life. That's enterprise. \[laughter\] So yeah... And we have Suz here, who can talk all about Stripe, so...

**Jerod Santo:** Absolutely. Chris, what do you think? What are some APIs that you admire or that you appreciate as a user of those?

**Christopher Hiller:** I don't do a whole lot of work talking with web-based sorts of network APIs... But I agree that much of the GitHub API is pretty good. I often find myself frustrated, like "Where is this thing?" Well, it turns out the thing hasn't been implemented yet; or maybe it has, but it's not been exposed to the user, and so that's where I start to pound my head on the keyboard. But I like async/await a lot.

I picked up promises pretty early... Certainly before it was -- I feel like it was before it was standardized. And I was using Q, if you remember that library that had a promise implementation. So I wrote a whole lot of thens... And now I just do not touch then, because I do not have to... And it is very nice. I like using async/await and promise.all to make sure I don't shoot myself in the foot with it... But yeah, I'm really happy about that one.

**Jerod Santo:** \[16:18\] That's a good one as well. Suz, anything that you'd like to add? Stripe has a pretty good API, but we've covered that one, so...

**Suz Hinton:** I can't talk about that, because I would be biased.

**Jerod Santo:** You're right. \[laughs\] And we've already said it.

**Suz Hinton:** Quick note though... So the first time I used the Stripe API, I was working at Kickstarter... Because Kickstarter transitioned to using Stripe for payments shortly before I started there. So we still had some work to do with just making our implementation more robust... And I remember the first time I looked at the Stripe docs - you know, I wasn't expecting a lot, just because, you know, sometimes API docs are not the best, and I'm sure that we'll get to this topic very soon, too... But I looked at the API docs and I was just so blown away, because there were like the little things, like putting your test mode API key embedded in the documentation, and things like that, so that the copy-paste things just worked, and stuff like that.

That actually made me say "Wow. I would love to work at a company like Stripe, who has this attention to detail in their APIs." So that is the reason why I'm working at Stripe now - because I had such a good experience with the API, as an engineer I wanted to be part of improving that even further, which is really exciting.

But to give a slightly less biased opinion - I've used a ton (and I mean a ton) of APIs over probably the last 5-10 years, and part of it is just due to hackathons, part of it is just due to the nature of my job... I think the biggest standout to me have been whatever I reach for the most often. I reach for Twilio all the time, because one, their SMS API, because I know they have a billion APIs now... But their SMS API is just incredibly efficient. It is full-featured. Even TwiML is a great concept...

So whenever I have to create a thing - and it's usually a web page scrape of that \[unintelligible 00:18:05.29\] when something updates; that's always what I use Twilio for. I reach for it time and time again, because it's solves my problems so quickly. It's not that "Oh, it's the kind of evil that I know the best", it literally is a good experience, and that's why I reach for it every single time, because it solves my problem really quickly.

The other thing that I was impressed with when I worked at Microsoft was the cognitive -- I can't believe I only quit a year-and-a-half ago and I forgot what it was called... The Cognitive APIs.

**Amal Hussein:** Are you using Bing or Google to look up your--

**Suz Hinton:** I'm using DuckDuckGo. \[laughter\]

**Jerod Santo:** Just duck it.

**Suz Hinton:** That tells you what kind of person I am...

**Amal Hussein:** Just curious, you know...

**Jerod Santo:** Do you duck things, or do you go them? I don't know how to verbify that...

**Suz Hinton:** I think it's just literally Cognitive Services. Yeah, it's Cognitive Services. So you don't have to create all your bespoke, artisanal artificial intelligence models, and things like that. So if you want to do some relatively cliché things with artificial intelligence, such as computer vision, automatic voice captioning and things like that, they have this huge family of different services, but it's a very nice interface to most of them via REST.

I've been really impressed with how much you can do with just one API call with the Cognitive Services. That was always very impressive to me when I worked there, and I thought that that was a great example, too.

**Jerod Santo:** Well, I won't add any, because mine have already been said. Y'all stole mine... But I will talk about a couple of library-style APIs. We already mentioned jQuery. I think jQuery's API was brilliant, for many reasons, which - you can go back to listen to that episode, "An ode to jQuery", wherein we enumerate a lot of the reasons why... And therefore, anything that derives from that, Cypress being another one... A lot of tools. I like Mocha's API, by the way, which is really a nice one as well; Chris won't say it... I like BDD-style test APIs, like RSpec style. "It should do this, it should do that", those kind of APIs are nice.

\[20:02\] I come from the Ruby world, and there are some really nice APIs over there. Active Record for Ruby on Rails, which is an ORM which allows you to manipulate a database in a way that I still think is unparalleled in its ease of access, and just doing things from memory and from guess and check... Like, you just guess, and it does it the way that you want to. It's a nice API to look at if you are looking at developing APIs... But yeah, GitHub.

Twitter's API used to be sick; I loved it. Now, they've kind of bastardized it over the years, much to their shame, I think, and they're trying to recover, sort of... They've treated third-party developers very poorly for a while there, and they're trying to recover that... But trust is easy to ruin and hard to gain back. But their API used to be very solid.

GitHub's is really good... I like the REST API. GraphQL - I'm just not totally into it yet, but I hear that's also a good one. Believe it or not, there is some design that has to go into a GraphQL API, even though it is kind of like pick your own food... You do have to decide what's on the buffet... And we talked about that back on our GraphQL episode, where we used a buffet style analogy for GraphQL, which - it works once in a while, but it also has its faults. Most metaphors fall apart. And most sentences fall apart, and this one's also falling apart. Amal, what have you got?

**Amal Hussein:** I don't know, I thought that that buffet analogy was pretty strong... A hard thing to follow, you know?

**Jerod Santo:** Well, we beat it to death on that episode. Kball really latched on to it.

**Amal Hussein:** Really?

**Jerod Santo:** Oh, Kball loved it. You've gotta go back and listen to that one.

**Suz Hinton:** Oh yeah, Kball would have had a field day.

**Jerod Santo:** He did. I think the episode is called "GraphQL is the bacon to your... Something" \[laughter\]

**Amal Hussein:** To your something... \[laughs\] I can imagine Kball salsa-dancing around a buffet, because he's such a good dancer... Have you seen him dance? It is impressive...

**Jerod Santo:** Oh, he's really good at it, yeah.

**Amal Hussein:** Yeah, very impressive. I think just to kind of piggy-back off of Suz's comment on Twilio - I would plus a million that. That's really one of the better APIs, because they've just put a lot into ramp-up, I would say...

What's really cool about tools that really invest in onboarding - they kind of think of everything. "How can we make this a one-click experience?" or "Add the CDN, start working." Anything tools do to reduce the time that you need to be productive. So if you need an hour or more to be productive when you're importing a new tool... In 2020, I would say that's a very low bar. So you should really aim to get folks productive as quickly as possible; and that's a combination of docs, examples, started kits... There's many ways to do that, to kind of really round out that number of "How many minutes is it gonna take for a person to be productive when using my thing", whatever that is. Time is money, money is time. Right, people? So... Gotta keep it movin'.

**Break:** \[23:06\]

**Christopher Hiller:** When talking about what makes a good API, for me, I appreciate an API that is at the -- it finds that sweet spot in terms of the level of abstraction. When you are using one -- for example, maybe you have this API you're talking to, and you need to do some certain task... And to do that task, you need to make four different function calls. But then you switch to this other tool or library and you only have to make one. Now, to me, the one that only requires a single function call probably maybe better understands how its users are trying to use it. They've done that research and they say "Oh, well this is a very common use case, and we're gonna optimize for that." I think that's really important when designing an API, is to really know what your users wanna get done and how they wanna do it.

**Amal Hussein:** Yeah. You know what, Chris - you bring up a really amazing point, and one that is definitely not lost on me... Because you're absolutely right - giving power users the ability to extend and override, whether it's default options or whatever else, is super-key. And I'd like to share a philosophy with you that I learned while working on a Scratch project - Scratch, like MIT Scratch programming language for kids, and really anybody; it's very cool, check it out. We'll link it in the show notes.

Scratch has this really cool philosophy of how they approach their API design, which is they want Scratch to basically have low floors, such that it's easy for anyone to get started. They want it to have wide walls, such that you can do many, many things with it... But then high ceiling, so that its power users can go as complex as they need to.

So the idea is low floors, wide walls, high ceiling. And that's something that's stuck with me for so many years now. I revisit it all the time. When you're designing something, make it accessible for newbies to be productive right away, and make cool things. Let people do lots of things with it, and then let power users still not be shackled; let them have the composability and extensibility that they need to do what they need to do. It's just such a good point.

**Christopher Hiller:** It's easier said than done, though... When I'm designing an API, it's generally some sort of library or something like that, and it's really a tug of war between "Okay, how easy should this be, or how extensible should this be?" and it's really tough to get that right.

**Suz Hinton:** Yeah, one thing that I've heard be described - and the first time I've heard of it was someone at Stripe mentioning it, but I'm not sure who the original person was... But this idea of a slow reveal. When you first start using an API, or you first start reading the docs for an API, it shows you how to do the thing that you're most likely gonna wanna do with it. And then because the API has been designed intuitively with what it exposes as you want to do more complex things, or as you start having corner cases with what you're trying to do, there's this really lovely way that the rest of the API reveals itself to you, without you having to learn a ton of stuff right at the beginning if you're just trying to get started with it. And I think that is definitely, in my opinion, one of the hardest problems to solve an API design, is trying to find that compromise right there, between power users and beginners, as we've sort of been discussing right now.

**Jerod Santo:** \[28:11\] I like that, the slow reveal... It makes me think about a swimming pool. Maybe you have the shallow end. And even the ones that you just walk right in, and you just kind of go slowly down to three feet... And everybody can swim in that side of the pool - the kids, the adults, whomever. It's very accessible, it's achievable, and it's not scary. But then you get past a certain line, and it may go down to eight feet, it may go down to ten feet, you'll have a diving board, you'll have expert apparatus, and that area of the pool is clearly for a different audience. But they can get the exact same access through that shallow end as well.

How do you do that though? How do you actually achieve a slow reveal? I think you do have to know your audience to a certain degree first, much like writers have to know who they're writing for... I think API designers have to think "Who am I designing this API for? What does that audience look like?" as best as you can. But how do you slowly reveal...? Do you have to just think like "What's the main thing everyone's gonna do?" and start there?

**Suz Hinton:** A really simple version of this -- obviously, there's lots of different tactics, but I would say that a really simple example that everyone can understand is having a ton of defaults of the way it operates, and then actually having very smart and intuitive overrides. That way, you're starting with little, but then when you see how extensible something is - similar to what Chris and Amal were saying; people who wanna then go and extend something, they can easily jump to that section in the docs, and the same methods that they were using this entire time actually have this whole next level of things that you can not necessarily leave as default, if that makes sense.

**Jerod Santo:** I like that.

**Suz Hinton:** Smart defaults, I think, can kick-start that kind of slow reveal.

**Amal Hussein:** Yeah. And the smart defaults thing is so important, because we are not born as experts. Experts are made. Experts are made, because experts were beginners at some point. One day I was learning JavaScript. That day is not today... But thanks to some level of low-flooring, I was able to learn. You have to keep the door open for folks, and I think one of the things that for me is so lost on many, many good tools and libraries in our community is context.

We don't often do a good job of setting context for users, like "What is this tool being used for, why was it made, what problems is it solving, what's some prior art..." A lot of that stuff is accumulated over time and experience, but for someone who's brand new to something, that context is really key. So between the good defaults to get new folks ramping up -- and not just even new folks, but anybody productive right away... WebPack did this with its zeroconfig. Create React App kind of did that; you know, don't worry about the tooling, just focus on the API...

There's so much restraint that API makers have to practice in order to keep that floor low... Because one of the things that's really challenging when you're a maintainer of a project - you have all the context in your head, and you're actually the worst person to write the docs because of that... So it's a challenging thing. It's almost like you need a team of people who are able to mirror and ask you questions and make sure that you're keeping that floor low, because you need a reality check to keep you honest. It's very challenging as a maintainer to write good docs for people who are new to the tool.

**Suz Hinton:** I agree.

**Jerod Santo:** \[31:47\] So what are some other aspects that make for good APIs? One thing that I go back to is that good API design -- actually, you can just take the API part out, and still most of the rules still apply... Like "What is good design?" Or you could say "What is good software design?" Because again, go back to like - you're writing a function that you're gonna use; you are API designing, whether you think about it like that or not, you are. And then of course, you could take the software out and say "Well, good design principles apply to good software design." Not one-to-one, or not every single one, but generally speaking. So when I think about good design, there are a couple of things that I go back to, a couple of principles and idioms...

**Suz Hinton:** SOLID...

**Jerod Santo:** SOLID. Yeah, that's a solid one. The one that I was thinking of, which kind of plays into this conventional idea and into the "Everyone comes in through the same entrance, but then you can dig deeper" is the idea of the principle of least surprise, or principle of least astonishment, where there's sensible defaults, or the configuration is provided for you, what makes sense for most people. And then as you navigate and expand your use of that API, it works the way that you think it's going to work; as you explore a great API -- GitHub's is like this... Chris says sometimes he gets mad, because he tries to find something and it ends up that's not even part of their API, but he probably could have guessed where it was if it was there. The things are where you'd expect them to be, and that's the principle of least surprise. It should work how you think it should work. That allows people to explore and learn much quicker, without constantly referencing the documentation.

In fact, if you're trying to bring joy to a user, the best thing you can do for us is make us feel smart. And you know when I feel smart? It's when I can just guess where this part of the API is, or "How do I do this? Oh, I bet I know how I do this, because I understand RESTful APIs. It should live under /users, or it should be I post this to there." And when it is, then you're like, "Oh. I don't actually need the docs anymore. I've figured it out, and I can just keep doing what I'm going to do."

So try not to surprise people. Try to put things in obvious, clear places, whether it's endpoints, whether it's function names, or whether it's the way you accept arguments... And one of the ways you can be less surprising and less astonishing is to stay consistent. So if you accept a certain parameter to a function, and you accept that in multiple functions, always accept it in the same order, if it's an order thing. Take it first, every time.

jQuery, again, goes back to a very good example of this. You can call all these functions and use them pretty much the exact same way, and you find a new function and you're like "I wonder if I could chain this on like I could the other ones. Oh yes, I can do it the exact same way I've been doing everything else. It's not surprising. It's actually obvious." It's hard to be obvious. We take it for granted when it's there, but to come up with the obvious solution is difficult; that's why it's called design.

It makes me think of a book which is very famous in the design world; it's called "Don't make me think", I believe... It's one of these books that everybody buys. I've never read it, because I already got what I think from the title... \[laughter\] It's a great design of a title; I already know what he's gonna say, and I completely agree with him. I'm sure there's tons of good details in there. But a good API doesn't make you think... Or at least tries its best to be consistent and not surprise you. And I think that's one aspect of a good API.

**Amal Hussein:** Wow. Yeah, I would say that that book really targets its audience, doesn't it? \[laughs\] You know, you open the book and it's actually just blank pages... \[laughter\] Empty book.

**Jerod Santo:** Yeah, it could be. Best-seller. I think it's a best-seller.

**Amal Hussein:** Jerod, you had some amazing points. The whole thing of "Just don't do something unpredictable." SOLID principles help you align to that, and do one thing well... And just keeping things modular, and don't throw curveballs at people; don't name a function "get blah-blah-blah" and then have that function actually doing a mutation or a post. Naming also is a way to signal what this thing is supposed to do...

\[36:17\] But you know what - I kind of wanna take it back a little bit, because I can't believe no one brought up Git... Because Git for me is one of my favorite APIs. I love Git. I'm like a power user. I have reached the point in my git-foo where I'm not afraid of looking at my reflog, or I'm not afraid of complex merges, or whatever... It's fine, I rebase all the time, I squash, whatever...

The API is just so good... And one of the reasons why it's also so good is because you just git man and you can see the docs right there in your terminal; you don't have to context switch, what flag was this thing, or how do I do this thing... The docs are right there. It's very hard to beat that. It's very hard to beat that experience of not having to leave your terminal while you're learning something and using an API and not having to-- it's very hard to beat.

**Jerod Santo:** I'm gonna diverge on this one, because I like Git as a tool, I think it's very powerful, but I don't find its API or its -- its interface was very difficult...

**Suz Hinton:** I'm on Jerod's side here, yeah. I agree with Jerod.

**Jerod Santo:** I do know it now, and I do think it's powerful, and I appreciate what it does... So I think technologically, it's spectacular. And the fact that the man pages and everything have gotten a lot better, and everything is right there at your fingertips, so I'm with you on all those points...

**Christopher Hiller:** I agree, yeah.

**Jerod Santo:** I think the actual command line interface - which is an interface - is very difficult to learn.

**Christopher Hiller:** It's hard to learn. It's really hard to learn.

**Jerod Santo:** Once you learn it, it's kind of like Stockholm syndrome... But for me at least - it was hard for me to pick up.

**Suz Hinton:** Yeah. There's no slow reveal, there's no consistency in flags...

**Amal Hussein:** That's very true, actually. \[laughs\]

**Suz Hinton:** It almost feels like every context within Git is this completely separate story you have to learn. It feels like it's a bunch of tools thrown in together to kind of achieve the one goal you have, which is distributed versioning. It's amazing how -- I use it in a daily basis and still, every time I delete a tag or rename a branch, they are the two things that I get wrong every single time, because they're different between the different commands with the flags.

**Amal Hussein:** Yeah. I have to concede to all of you, because I think you're right. I think I'm confusing my love of the tool and what it does with the ease of use. And you're absolutely right. It did take me a number of years to get to where I am, and it wasn't easy, and I think you're right. So I'm gonna walk that back. I was wrong. Yous is right.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** I think you're right. But it's interesting though, isn't it? Imagine a world where everyone could become an expert in Git within a month. Imagine that world.

**Jerod Santo:** Right...

**Amal Hussein:** That would be a different world, right?

**Jerod Santo:** I feel like GitHub is kind of interestingly bridging that gap a little bit, with all of their UI... I don't know if most people realize this, but I'm gonna maybe blow your mind... Pull requests aren't a thing inside Git. Does everybody know that? Does anyone know that pull requests aren't a thing? If you go to projects like Mozilla, and Chromium, and all these things...

**Suz Hinton:** And Linux, too.

**Amal Hussein:** Linux... Yeah. They use patches...

**Jerod Santo:** Yeah, they email each other patches.

**Amal Hussein:** ...emailing each other files... \[laughs\] Some of the most important projects in the world are not on Git.

**Jerod Santo:** Well, they're on Git, but they're not on GitHub.

**Amal Hussein:** They're not on GitHub, sorry. Sorry. Thank you very much. Thanks for correcting that. So you know, it's just funny... It is what it is. What kid is not on Git, by the way, I think... Unless that's changed in the past two years; I don't know.

**Jerod Santo:** Well, there was a long time where there was Mercurial versus Git, and Git was not the de facto. They had to battle it out, kind of like VHS and Betamax.

**Amal Hussein:** Right.

**Jerod Santo:** And Mercurial has kind of gone the route of Betamax, but it still has its constituents, for sure.

**Amal Hussein:** Right, right.

**Jerod Santo:** \[40:01\] I think Mercurial actually has a better API -- well, interface. I don't know if it's a programming interface, but at least a command line interface. It was way more approachable, which was one of the reasons why people liked it.

**Amal Hussein:** That's interesting.

**Jerod Santo:** But GitHub really mitigated that.

**Amal Hussein:** Yeah. But isn't it interesting though that GitHub just made -- I feel like it just really bridged the gap in so many ways, with confusion on the terminal and what you can do... Now you can even suggest comments in-line in a pull request. You can actually say "Hey, here's a suggested change" and someone can accept it... So essentially, you're kind of abstracting away people's need to ever use the terminal, between that and then their GitHub UI. I don't know.

Basically, I think the lesson for you here, kids, is if you build a bad API, someone is gonna build an abstraction around you... \[laughter\] And make lots of money.

**Suz Hinton:** Build just another layer...

**Amal Hussein:** And make lots of money, really. Because even at Npm -- I mean, there are so many things with Npm that were missing, or not there, and mainly because the team was under-resourced, and had so many other things to do... But the community builds all these things around Npm that should have actually be in Npm. For example, BundlePhobia, or Unpackage... You know what I mean? There's so many features that would be great to just be in Npm directly, that people had to build abstractions around it, because it wasn't supported with the Npm API.

Yarn even - workspaces wasn't a thing... So "Oh, we're gonna build an abstraction around our connection to the registry." So just lesson learned - if you're not solving it well, someone else is going to solve it better and faster.

**Suz Hinton:** That's a great point.

**Break:** \[41:52\]

**Jerod Santo:** Amal, you mentioned SOLID, and I think we should probably just lay out what that is. So those are a set of really object-oriented programming design principles which have been formalized in books, and courses, and stuff. There's five principles there... I don't know them all, because I don't write good code, but... \[laughter\] Single-responsibility, I know open-closed... The L I don't know; it's like somebody's name...

**Amal Hussein:** Yeah.

**Suz Hinton:** Liskov.

**Amal Hussein:** Liskov's substitution principle, yeah...

**Jerod Santo:** There you go. Dependency inversion is another one...

**Amal Hussein:** Yeah.

**Jerod Santo:** So these are all good things to learn and to apply in any sort of software design, specifically object-oriented software, which a lot of times if you think about an API, it's a lot like an object. It's kind of a black box that you access via the way it exposes itself, but you don't care how it works behind the scenes; so it's very much an object-oriented thing. But that's that; we'll link up the Wikipedia page as a starting place. It's a deep-dive into SOLID, but it's definitely something you should be familiar with.

**Suz Hinton:** \[43:48\] I like that you brought up -- people shouldn't have to be able to care about how you implemented it, and things like that... I think the thing that gets my goat the most about badly-designed APIs is when you can feel the limitations that the software engineers who designed the API were running into, and you can feel that they've pushed that work back onto you. It's called implementation leakage; they've basically made something hard for the user, when the user should never have had to care about it in the first place, because you ran into a specific limitation that isn't even relevant to having to limit the library, if that makes sense. That sounds very abstract, so I can give an example...

**Jerod Santo:** Please do, yeah... Because I'm trying to think of one and I can't.

**Suz Hinton:** It's really hard to think of it. I actually have two examples... So I'll cover React at first. The thing that annoys me about React is that when you have a loop and you're iterating and you're spitting out things based on an array or a map, and you're returning components, you have to give it a key attribute, right? And it barks at you if you don't do that. That is not something that should ever have to be necessary, in my opinion, in an API. You should not have to actually give a numeric key in order for React to be able to do its thing properly.

It has no bearing on your app at all; you'll probably never ever use it... So warning you that you didn't do it and forcing you to when you're not even gonna use it in the first place - I think that's implementation leakage.

**Jerod Santo:** That's a really good point. I've always just been annoyed by that... But I thought it was just me. So you've actually empowered me to complain more. Why do I have to pass that to you all the time? It's such a pain.

**Suz Hinton:** It's really annoying. And another example is having to use class name instead of class; that's literally implementation leakage, and I actually really don't like working with React, and think there are better options out there for these reasons... But again, let's not do a turf war.

One concrete example that I can talk about, that happened in open source for me with Stripe was we released official types for the Node.js client library recently, because there was a definitely-typed community contribution, and then we actually put in a type definition into our actual library... We knew that this was gonna be something that we would have to maintain going forward, and we wanted to know how expensive it would be to maintain it, and we wanted to know just how much attention to give it.

So we really wanted to know who's actually using types in this library, versus not using types. We just wanna see-- what's the word...?

**Amal Hussein:** Adoption...

**Suz Hinton:** Adoption, that's the word. Thank you.

**Amal Hussein:** You're welcome.

**Suz Hinton:** So we didn't really have a good way of being able to see that in the telemetry, and track that property that was introduced, where if you wanted to use the TypeScript types when you instantiated the library, you needed to specify a property that was TypeScript true. And when I saw this, I immediately burst into flames, because it's just -- implementation leakage is the hill that I die on at all times.

So I saw it, and I just said "Hey, I'm just curious, what's this property about? What was the technical limitation where someone can't just use the types out of the box?" And they said "Well, we actually just want to know through telemetry -- if they set that, then we know they're using it, so we've made it a mandatory property, just so that we can get accurate adoption statistics. And it's really just for the users, so that we know if we can give more resources to it, and we can argue for more resources that work to maintain that."

So it was actually in the spirit of actually helping the user, but also having them specify that is just not an idiomatic thing that you should have to with TypeScript. It felt weird, and sure enough, we got people on Twitter asking about it... So we had a big conversation about it, we were like "Okay, so is it really that important that we know adoption? Can we really just commit to actually maintaining this? Can we maybe talk to users after a while to just see what the adoption actually is in other ways?" So we ended up pulling the plug and we completely removed that property that same day and released it... And I felt that was a huge win. But it is really interesting how quickly you can just leak one property and then it kind of opens the gate for other leakages as well, so...

**Amal Hussein:** Wow... I wish you could lint that. Wouldn't that be cool, if you could automate it, where it's like "Hey, am I leaking my implementation details? Yes/No?" \[laughs\]

**Jerod Santo:** It seems like a nuanced thing...

**Amal Hussein:** Very nuanced.

**Jerod Santo:** \[48:06\] I feel like I can sense that, as somebody who's just used a lot of APIs, but I've never been able to verbalize it. Maybe you have a super-power for like "That's leakage right there!" Because I don't know if I'd actually identify something as leakage... Even though I could point it out in retrospect, like "Yup, that was that." So it seems like a nuanced thing, to be able to actually determine "This is an implementation detail, not something that should be on the external side of your API."

**Amal Hussein:** Yeah. But in all fairness though, Suz, you brought up such a good point about the React class name, because--

**Suz Hinton:** \[laughs\]

**Amal Hussein:** No, really. All of the deviations between JSX and HTML could have easily been abstracted and handled by the compiler. There's no reason to expose that to the user and confuse them, and/or confuse designers who maybe are co-working with you... So I think that's such a good point. From my understanding, the React team -- that's just a decision they can't easily go back on right now...

**Suz Hinton:** Exactly.

**Amal Hussein:** If they could do it differently, they would, at this point...

**Suz Hinton:** Yes...

**Amal Hussein:** I also think this is why it's important to have a diverse team designing an API, to kind of bring it back to empathy... Because you have blind spots as an engineer, no matter how good you are. Always, always you have blind spots. So having people validate your work, use it, make sure it works for their use cases, and hopefully having those people maybe not be like you, whether it's demographically, whether it's they're working on a different thing... You know, diversity in all factors counts here... Just someone that's not you, ideally.

**Jerod Santo:** Right. So we've covered a lot of ground here, but we have not covered one of the mainstays of good APIs - documentation. We've talked about it as we revered certain APIs; we talked about their docs. And I will say that Stripe gets a lot of credit here, because they did come out with great API docs; web-based, readable things, with all of the little details... Which has since been emulated and repeated elsewhere; so we're thankful for that, but Stripe doesn't stand out quite like it used to... But that's because everybody basically copied that and they're like "Oh, this is great." You have to give respect to the ones who changed the game. This is why Michael Jordan will always be the greatest basketball player, because he actually invented all the things that these guys now do... That's a hill I'll die on.

**Amal Hussein:** \[laughs\]

**Jerod Santo:** But Stripe really did that. So a lot of the things that you see, like having the curl commands, or like the four different languages that you can just like click your language and see what the call looks like in your language... Stripe invented a lot of those ideas, and it was amazing. Thankfully, it's gone across the industry; especially businesses that run APIs have good docs. But again, to go to the APIs in the small - your functions, your packages, your modules, your libraries; these things are all APIs. And even if they adhere to these principles like least surprise, \[unintelligible 00:51:01.17\] all these things, still you have to describe what's going on to folks. You can't just leave us out there to figure it out ourselves. We need help. That's the core of accessibility - telling people about your API. So docs have to be there. What makes them good?

**Amal Hussein:** Wait a second... Hold on, Jerod. Are you trying to say that my code isn't good enough for you? Like, reading my code isn't just intuitive enough for you? Like, it's too much work, or something? Like, why do I need to put this into English text when you can just read the code? Come on.

**Jerod Santo:** Not your code, Amal. Yours is fine. Yours is good. \[laughter\]

**Amal Hussein:** Yeah, no -- for anybody who maybe that bad joke was lost on, that was definitely not a true statement for me... But yeah. I don't know, I go back and forth between like "Do I need to put comments in my code or not?" It's tough, because there's comments and documentation that -- like, an application is very different than a library, because a library, for example, or a tool that's publicly-facing, there's version management and all kinds of stuff that's a little more baked in. Application code is -- I don't know, it's a tough one. What do you think, Chris? I wanna hear from Mocha man.

**Jerod Santo:** \[52:17\] Mocha, Mocha man... \[laughter\]

**Amal Hussein:** Has anybody ever called you Mocha man? "I wanna be... A Mocha man..." \[laughter\]

**Jerod Santo:** I like it.

**Amal Hussein:** Okay, Suz is literally falling off her chair...

**Suz Hinton:** This is the greatest moment in JS Party, in my opinion...

**Amal Hussein:** No, no. I think the greatest moment is gonna be hearing his reaction to being called Mocha man. Go for it, Mocha man. \[laughs\]

**Jerod Santo:** Go for it!

**Christopher Hiller:** I'm gonna have to ignore that... \[laughter\] What was the --

**Amal Hussein:** I told you! Told you! "I wanna be..."

**Christopher Hiller:** ...comments, and stuff - okay, so I tend to comment my code a lot.

**Amal Hussein:** Me too.

**Christopher Hiller:** Because I think I'm probably not that good, and so my code is not self-documenting, like the geniuses...

**Jerod Santo:** Like the geniuses... \[laughs\]

**Christopher Hiller:** ...who write self-documenting code. So what I write in the comments tends to be "This is my intent for what I'm trying to do here." It's useless if -- you know, it's just explaining what the code does...

**Jerod Santo:** Not how you're doing or what you're doing, but why. Exactly.

**Christopher Hiller:** And as soon as you go and change that code and you don't update the comment, then the comment's out of sync with the code, and it's just horrible. But I think it's really important if you're writing code that somebody else is gonna come along and try to read and understand, is to make sure that your intent is clear, because... I don't know if you've heard of Chesterston's fence...?

**Jerod Santo:** No.

**Christopher Hiller:** I don't even know where it came from, but it's a thing on Wikipedia where it's like there's a fence out in the middle of the road, and somebody comes along and says "Why is this fence in the road? Let's tear it down. It doesn't make any sense." I don't know -- the moral of the story, to skip ahead, is that you shouldn't remove the fence if you don't know why it's there.

**Jerod Santo:** \[laughs\] Yeah, exactly. It's there for a reason, even though you don't know what it is, right?

**Christopher Hiller:** Right. So I don't wanna write code where it's not clear why it's there, because that's like the worst thing if you're in the business of maintaining software long-term, is to have this code that you're afraid to touch... Because you don't know what really the intent was in that bit of code. So I feel like the comments from that level -- but if we're talking user-facing APIs, yeah, I've tried to use Docstrings, and I tried to auto-generate API documentation for my libraries.

Whenever I can, I'll try to provide type declarations; I don't write TypeScript. I think it's necessary for even the most simple and small libraries. If you look at any of Sindre Sorhus' libraries out there - they're all tiny, but they all have documentation, they all have typings, and they're all consistent. So you know that "Oh, if I want the sync version of this thing, I'm gonna hit the .sync function." I think it's really important to have that good documentation in place, just like -- it just seems like you've gotta have it. It's basic.

**Amal Hussein:** Actually, Mocha man -- just kidding. I'm gonna stop now... Okay, maybe one more time. Just kidding, I won't... I won't, I won't. Okay. Chris...

**Christopher Hiller:** Yes...?

**Jerod Santo:** \[laughs\] I don't know what's coming next, but I'm scared...

**Amal Hussein:** ...nobody has mentioned yet the importance of tests as a communication of intent in documentation as well.

**Jerod Santo:** That's true.

**Amal Hussein:** \[55:55\] I feel like tests really can document your code, as well as the intent, and whatever else. So I think one of the many benefits of tests is that they serve as a point of documentation. So write tests, people. And tests are first-class; for production code, first-class. I'm sorry.

**Christopher Hiller:** Yeah. It's a thing you don't see a lot in JS, because I think the community and the culture hasn't really picked up on it... But if you look at an ecosystem like Rust, all the API documentation - they're really big on automatic API documentation in Rust. And that's cool. There's other shortcomings in the documentation, but having these tests present and part of the -- maybe I'm not even thinking of the right thing, but essentially, assertions are part of the documentation, and you can look at the code sample. And the code sample is a test, and it makes an assertion about the result of your API call. And you can copy and paste that, and just run it...

I think that's great. I think that's something that I would hope to see more of in JavaScript, but... We don't do it here. JavaScript is more about the kind of free-form readme instead of these really strict API docs. In Rust, every crate has these API docs. But not in JavaScript... Which is too bad.

**Jerod Santo:** I will add my amen to that. We did an entire episode on docs. Safia led it. It was really good. We did a deep dive. Obviously, we're not gonna do a deep dive right now; that's episode 50 of JS Party, hosted by Safia Abdalla. Chris, you were on that show, and I was on that show, so surely we've said things that were interesting; I don't remember them. Maybe I should go back and listen as well... But if you want more on documentation, definitely check out episode 50.

We're running short on time... Any final thoughts on APIs, what makes them good, what makes them bad etc. before we call it a day?

**Christopher Hiller:** It's okay to provide a low-level API if you are clear about who you're clear about who your audience is. There are tools out there that are really low-level...

**Jerod Santo:** It's a good point.

**Christopher Hiller:** ...and people probably shouldn't be using directly, but they are anyway, because there's no reasonable abstraction yet around them. I can think of a few in JavaScript... I mean, it's okay to do that, but no library you make has to be totally high-level, all the way to low-level. You don't have to do that slow reveal, depending on the scope of what you're trying to provide users.

**Amal Hussein:** Yeah. It's funny, actually the Fetch API -- Fetch, like F-E... You know. I'm not gonna spell it. You know what I'm talking about...

**Jerod Santo:** Yeah, we get it. Fetch.

**Amal Hussein:** So the Fetch API was actually designed as a low-level API, that was supposed to be for library authors and whatnot. Similar to typed arrays, and atomics, and SharedArrayBuffer etc. All these other low-level APIs that maybe the average web developer is like "IDK. What do I do with this?", they're designed to be used by libraries that create abstractions that are useful for developers to use... But Fetch actually -- it was a really big surprise when community started adopting Fetch at scale. So that's interesting how that worked out, but... I don't see much use of TypedArrayBuffer, orSharedArrayBuffer, or anything else. I don't think too many people are using things like that, that are low-level.

**Christopher Hiller:** I tried to use it a couple of days ago. It was unusable.

**Amal Hussein:** Yeah? \[laughter\] Like we said earlier, good API design is a hard thing, for sure.

**Jerod Santo:** Mm-hm. There's also a lot of constraints in software. We talk about ideals a lot, because of course, we're not gonna talk about things that are kind of good; we're talking about what could be the best. But we know that as we go out and build things, that the real world hits up against our ideals, and we have to make trade-offs.

\[59:51\] So sometimes you have to suffer -- your API design, or the purity, or the principles, they have to suffer at the behest of the amount of time you have to spend on this, the amount of money you have to spend on this, the team, your own knowledge... Because one of the things we know is that we don't know everything. So "I'll know more later" is pretty much the way I live my life... So as you're designing your API, you may think you have designed the best thing you can do, until six months later when it hits the real world and you realize that design doesn't actually hold up.

One thing we tend to do as software developers is get stuck in the paradox of choice, in the analysis paralysis, and just not ever get that API done, because we want it to be perfect. But you actually do have to move things forward. So you may not be able to design the perfect API today, and you may never get to that perfect point, but you design what you know and you ship it, and then you find out more once people start using it. So don't forget that, as well.

Anything else? Suz, final words before we call it a show?

**Suz Hinton:** Yeah, I wanted to actually share an article that was -- again, \[unintelligible 01:00:55.12\] plug Stripe, but we have this magazine that we put out...

**Jerod Santo:** This episode, brought to you by -- nah, just kidding.

**Suz Hinton:** \[laughs\] We should talk about a deal though, yeah.

**Jerod Santo:** Yeah, we should. \[laughter\]

**Suz Hinton:** So Stripe puts out a magazine called Increment Magazine, and our latest issue was actually about APIs. So it's very timely to this episode. All of the articles are really, really good; yup, Jerod is just holding his up.

**Jerod Santo:** I'm a subscriber to the Increment Magazine.

**Amal Hussein:** I read it on the internet. I should subscribe. I didn't know you could do that.

**Jerod Santo:** It's so cool there's a print edition. I just wanted to support that.

**Suz Hinton:** They only just started distributing the print edition, so it's a newish thing...

**Amal Hussein:** Oh, wow... Well, well, well.

**Suz Hinton:** But one article I wanna call out - because this is almost sort of a \[unintelligible 01:01:35.06\] segue to take us out... There's an article in that specific edition called "How should we build the APIs of tomorrow?" and it's by my colleague, Tomer... And it just talks about the fact that because we use computers and services at a rapidly evolving pace, we're starting to find that a lot of things that we've talked about today on what makes a good API and how to write one might actually start limiting us too much in these compromises that we're making, given how many people are coming online, and the different even networking challenges we're seeing with that...

So I think that it's a great read, because it just talks about the fact that we're sort of starting to hit a ceiling, and maybe we should be letting go of some of the status quo around how we do APIs now, and what we should rebuild in order to get to the next level of being better at this kind of thing.

So I really loved the article, it was a really satisfying read, and even though it doesn't answer a lot of the questions that it poses, that's kind of on us as a developer community in general to start trying to think outside the box a little bit. So I just thought it was a really great one to inspire people to think beyond what we currently do with APIs.

**Jerod Santo:** It sounds awesome.

**Amal Hussein:** I'm inspired just thinking about it.

**Jerod Santo:** Yeah, definitely. We'll need to check that out. Well, listeners, all the links to all the things mentioned on the show will be in the show notes. You know where those are; they're there for your easy clickings. Definitely check out that article, check out some of the other things mentioned...

That's our time for this week, that's our show. Hey, you don't have to go home, but you can't stay here... Talk to you next time.

**Outro:** \[01:03:21.02\]

**Horse JS:** In 5+ years of writing JS full-time, I've basically never needed to know it.
