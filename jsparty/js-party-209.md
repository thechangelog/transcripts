**Amal Hussein:** Hello, JS Party listeners! We are back this week with a very, very exciting guest, hot topic as well... So you know, hold on to your butts, everyone. We're gonna be talking to Jon Kuperman, who is a developer advocate at Cloudflare. Jon is here to tell us all about -- every week in December, or maybe every week in the fall I felt like Cloudflare was releasing a major new feature, so... Anyways, we're gonna learn all about that.

And with me today, co-hosting, is Jerod. Hello, Jerod.

**Jerod Santo:** Hello, Amal. Happy to be here with you, and to have Jon here with us. Pretty exciting.

**Amal Hussein:** Yeah.

**Amal Hussein:** Hey! Thanks so much for having me. I really appreciate it.

**Amal Hussein:** Yeah, we're so excited to have you. Jon, it was really hard for me to not call you Jon Kupertino... Because Jon Kuperman -- the word Kupertino has always been stuck in my head every time I think about your last name, for some weird reason.

**Amal Hussein:** I like it. It sounds fancy. I might just start going by that, yeah. Except I already have the short Twitter handle, so I can't give up the k-u-p.

**Jerod Santo:** That's true. You can't go longer on the Twitter handle.

**Amal Hussein:** Yeah.

**Amal Hussein:** So Mr. Kupertino, can you just tell us a little bit about yourself, for those folks who may not know you?

**Amal Hussein:** \[00:04:03.08\] Yeah, absolutely. So I have been in engineering for a long time. I worked at a company called Baracuda Networks, doing security stuff; I worked at Twitter on trust and safety, and then on Twitter.com, worked on the Brave browser, back when there were like seven or eight of us or something like that on it... Then I was at Adobe for four years, working on a bunch of cool, creative cloud stuff... And then I'd always wanted to try developer relations. I'd always done conferences, and meetups, and stuff... So this is my first developer relations job now here at Cloudflare... And then I also run JSConf Hawaii, which is an awesome -- postponed for the last few years, but an awesome in-person JavaScript conference.

**Jerod Santo:** Do you live in Hawaii?

**Amal Hussein:** I don't. About half of our organizing group does... But it's a really fun conference. As soon as conferences happen again, you all should check it out, come to the next one.

**Amal Hussein:** Are you kidding me? I am so there.

**Jerod Santo:** Yeah, exactly.

**Amal Hussein:** Yeah, JS Party should do a whole thing. We could do a whole thing.

**Jerod Santo:** JS Party Hawaii. I think so...

**Amal Hussein:** Yeah.

**Amal Hussein:** I mean, JS Party was basically invented to be at JSConf Hawaii, let's be honest...

**Amal Hussein:** Yes.

**Jerod Santo:** Totally. We've just been failing for years... \[laughs\]

**Amal Hussein:** There was a JS Party, I think, at JSConf Hawaii...

**Jerod Santo:** JSConf Columbia.

**Amal Hussein:** Oh, okay.

**Jerod Santo:** So Kball went to Columbia.

**Amal Hussein:** Okay.

**Jerod Santo:** I don't think we've gone to Hawaii though...

**Amal Hussein:** Is Kevin Ball -- is that your thing, or is that a different podcast?

**Jerod Santo:** Kevin Ball is our thing. He's our thing.

**Amal Hussein:** He's our thing.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** Yeah, he showed up our first year; he was awesome, he was like, "Hey, can I do a JS Party episode?" and we were like "Heck yeah!" And so we just set him up on stage with a bunch of speakers...

**Jerod Santo:** Oh, he did go to Hawaii...?

**Amal Hussein:** It was probably -- I don't know, four years ago, or something like that?

**Jerod Santo:** Wow. So long I don't even remember it.

**Amal Hussein:** Yeah, and he was just like "I wanna do this thing", and we're like "Heck yeah, let's do it." So yeah, we put him up on the stage, a bunch of people volunteered, and we had an impromptu episode back then.

**Amal Hussein:** That is so cool.

**Jerod Santo:** So he loves to travel, and we had -- we do a new year's show once a year, where we set resolutions, and 2019, going into 2020, his resolution was to make a JS Party episode on all (I think he said) six continents... Because Antarctica - pretty tough.

**Amal Hussein:** That's awesome.

**Jerod Santo:** Well, then the pandemic hit and he went no places. It was a total fail, but... Yeah, he's been traveling around, and wants to travel more here, to different conferences all around the world.

**Amal Hussein:** Yeah.

**Amal Hussein:** Totally. Kball - it's so funny; I always call him Kball, so I forget that his first name is Kevin... But no, he'll be really happy to hear that we've volunteered him to go to Hawaii.

**Amal Hussein:** Yes, I'm sure.

**Amal Hussein:** Yeah. But anyways... So JS Party and JSConf aside, we're here to talk about Cloudflare. And for anyone that's in web development, I'm sure a lot of folks have noticed - I feel like Cloudflare has had a huge coming out party. It's everywhere, in all the places. Can you just tell us, for folks who maybe are not familiar with Cloudflare, what is Cloudflare?

**Amal Hussein:** Yeah. I guess I think of it often as an internet company... I know that's really generic, super-generic, but I feel like -- so they started off in the CDN and security space. That was their big thing, providing security solutions, DDOS prevention, helping people host their content on a cloud network... All this kind of stuff. And then it's not even that much of a pivot. I think just getting more and more of the internet's traffic, they started noticing all of these amazing things that they can do with that, and so they've now spun into also a serverless company, a video and a stream company... Basically, all these common things that happen on the internet, trying to use their massive network to make better experiences with those things.

I feel "internet" is the word that always comes to mind when I'm asked big-picture what Cloudflare does. We're an internet company.

**Amal Hussein:** Yeah, that makes a lot of sense. I love that that's the branding that you've taken. For me, I was exposed to the scale of Cloudflare for the first time when I was at Npm, and I realized "Oh, wow... Actually, the massive scale of Npm is pretty much -- the majority of that is actually fronted by Cloudflare", because all the cached reads for every single install is coming from Cloudflare caches.

**Amal Hussein:** Yeah.

**Amal Hussein:** \[00:08:10.09\] And many folks don't know that, but really, we're very grateful to Cloudflare and how it's actually helped the JavaScript community support Npm and Node as it was scaling. I have to wonder, if it wasn't for Cloudflare's generosity, I don't even know what we would -- I don't even know what the internet would look like, because we have like a ridiculous discount with Cloudflare. I don't even know if you're charging us even a fraction of what you should have been charging us... So thank you, Cloudflare, for supporting the JavaScript community as it was growing and scaling, and figuring itself out.

But I love this kind of remarketing as like a web security and performance company. So can you tell us a little bit about this shift towards being not just a CDN company, but so much more? Was it just kind of like a natural thing for Cloudflare?

**Amal Hussein:** It's funny, because I'm sort of new... I have my opinions, and I've been \[unintelligible 00:09:00.16\] with some people a lot higher up to check this thing... But the way that I view it - I've been really liking this analogy of like we used to be a passive company, where all of our services were these passive services that you added on, you configured, they were kind of set it and forget it... So like the CDN, security stuff, the js-captcha to prevent bots, things like that. And we have sort of transitioned over the years into -- we're still maintaining those world-class services, but offering a lot more active solutions.

For example, we have a serverless platform called Cloudflare Workers, we have the video platform Cloudflare Stream, we have Cloudflare Access to do a smart VPN... So we have all these things that are not set and forget. We're moving into this applications space, where application developers are using us to actually build stuff, to store files, to stream videos, to build these massive applications.

So that's how I see the transition... But again, the CDN and the DDOS and all of that is vital. It's not like we've transitioned into a serverless -- like, those are new arms to the company, but I still feel like... My favorite things are -- our execs will always post little tweets about "Oh, there's a giant DDOS attack and nobody even got paged." You can see this graph of all this traffic, and we just handled it autonomously, and it just went back down, and stuff like that. So I'm still fascinated by those core products.

**Amal Hussein:** I mean, that is so freakin' cool. I was just trying not to curse live on-air, so...

**Amal Hussein:** I saw it.

**Amal Hussein:** ...I had to correct myself. I had to catch my tongue.

**Jerod Santo:** Well played, well played.

**Amal Hussein:** So that's fascinating, and I love your analogy of set it and forget it... Going from set it and forget it to more active application management. Because you're absolutely right - when I think of how I've dealt with my CDN providers, and even to some degree Cloudflare at Npm... Because we use workers, and we'll get to that in a second. But it was very much like a set it and forget it thing, because it just worked. You configure it, you set up all your routing, you set up all your mappings, and you're good to go. So now, moving more into the land of AWS, but it's almost like a lot better than AWS in many ways, because there's a lot more focus towards the needs of web development, and I would say very JavaScript-heavy applications. I think that's the interesting value prop.

Can you maybe tell us a little bit - how is Cloudflare more supportive to JavaScript developers than AWS? Because for me, it's very clear that Cloudflare is geared towards modern web applications, specifically frontend-heavy ones.

**Amal Hussein:** Yeah. It's so interesting, because I feel like you sort of make these decisions early on in a company's life, and I know really smart leadership folks will be able to see the 5-10 years down the line, but for people like me it's often a surprise where we end up... So I think that - just to get into some of the architectural decisions when you look at Fastly, Cloudflare, AWS, these big players in the serverless space, it's that Cloudflare, unlike the other two, we don't have these VMs. If you boil it down to this base concept, you've got Amazon with this virtual machine, it spins up when a request comes in, you have this idea of like a cold start where it was off and it needs to turn on, versus a warm start, where it's already on, it's a lot faster... All this incredible technology. I'm a gigantic AWS fan. I think what they've built is just incredible...

\[00:12:23.26\] So we're going with this different approach, which is that we run V8 in our data centers; Chrome V8, the JavaScript engine... So V8 has this concept of isolates. So V8 can have tons of these different isolates, which are little security sandboxed instances, but they are in VMs that turn off and on. So the V8 VM is always on. So basically, you have some of these trade-offs here that go pretty deep, but one very cool thing about us is in order to be super, superfast, we went with this architecture that's always on. So as soon as you hit a worker, it just runs a lot of times within 20 or 30 milliseconds, the response time. Very quickly. And one of the effects of that choice is that we natively support JavaScript and WASM, which is what V8 supports, because we're just running V8 at the edge.

So all of a sudden, we have this platform that is very familiar, very comfortable for anybody doing these Node or JavaScript apps. They literally just point it at Cloudflare, we use the same module format, event listener format... All these browser and APIs that V8 supports, we support.

So I think that -- my speculation is it was originally done just for speed and performance, but maybe they had the vision from the beginning, but the outcome has been this extremely familiar ecosystem for everybody doing Node, or JavaScript, or WASM with Rust, stuff like that. It just feels really good, really natural.

**Amal Hussein:** For me what's really cool is -- there's also some other innovation, which... If we can't share this, we can edit this out, but I'm pretty sure we can share this... Regarding timing attacks. So in order to prevent timing attacks because you have folks leveraging some of the same resources at times - you know, there's certain things you can't use if you're using Cloudflare infrastructure, like set timeout, or --

**Amal Hussein:** Yes.

**Amal Hussein:** Like, there's certain built-ins in JavaScript, for example, that you can't use. Can you maybe share some of that?

**Amal Hussein:** Yeah, there's quite a lot. One thing that's interesting for us - things get a little bit muddied, right? So we're V8, and so people will often try to take this big, gigantic Node.js application that they have, stick it on Cloudflare Workers, and then are surprised when it doesn't run. That's a really common thing that I run into feedback of.

So though we are using V8, we're not Node; we're not guaranteeing that any Node API -- so we have a lot of stuff turned off... Stuff related to security, stuff related to memory and CPU performance, stuff related to (like you said) these timing attacks... Quite a lot of stuff is turned off.

Basically, what we've done is kind of put V8 at the edge, trimmed down everything that could be a problem, and now we're at the stage where we're actively engaging with the community, being like "What are we missing? What do you need?" and maybe we can't turn it back on, but maybe we can provide some standards-compliant way of getting that functionality back for you.

For example, James Snell, who's like a Node core contributor, he's come on board to start building in a lot of these APIs that we turned the whole thing off, because we knew there were some problems with, but maybe we can actually safely support 90% or 95% of it.

So that's actively where we're at right now - we have a lot of stuff turned off, trying to engage with the community, trying to see what kind of apps people are building, trying to see what we could turn back on, or what we could polyfill, at the very least. That's definitely top of mind for us right now.

**Jerod Santo:** What kind of cold start times can you get out of V8 when you trim it down like that? I assume that's a priority for you all, is like "How fast can this sucker --"

**Amal Hussein:** Yeah, they're really fast. The numbers are tough because of latency and because we have pops all over the world, and things like that, but I think that a lot of people are able to see full runs of their worker returning data in under 50, often under 30 milliseconds.

\[00:15:51.16\] At a certain point there's like a little bit of diminishing returns on speed, but what I love about our speed is it's fast enough that you can do dynamic stuff as fast as people are used to seeing static stuff. So I've built a lot of these apps -- like, we have this cool thing called HTML Rewriter, which is an API that runs in workers, that can do all of this cool manipulation of HTML, and stuff like that. And then we have data stores, like KV and Durable Objects. So you could literally pull a static page and decorate it with like a like counter, a view counter, or comments, or anything that you could imagine, about as fast as people are used to seeing a static website; still 30-50 milliseconds, and it could have all sorts of dynamic information on it, which is really fun for me. A lot of fun to play with.

**Jerod Santo:** Yeah, I think 50 milliseconds is the threshold of which the human eye doesn't notice. To us it's instantaneous. So as long as you don't have additional bandwidth latency or whatever, at least execution time - you can't ask for much better than 30-50 milliseconds.

**Amal Hussein:** Yeah. And 50 milliseconds is what people are seeing on the client. That's not us starting up and running. That's what people are actually getting back their data from.

**Jerod Santo:** That's roundtrip time for the request.

**Amal Hussein:** Yeah.

**Jerod Santo:** That's spectacular.

**Amal Hussein:** Yeah. And we even have -- I think it's on our workers.cloudflare.com, you can scroll down a little bit... So you go to workers.cloudflare.com and you can start clicking this Test Again button under High-Performance Global Network, and you see what the real latency of going out, hitting a worker and returning with the data is, and it's often under 50 for that whole roundtrip.

**Amal Hussein:** That's great. So we're gonna get into Workers and some of these specifics in our next segment, but to close this out for now - we've been skirting around this edge computing, we've been throwing the word around... Can we just take a minute and define that for folks? What is edge computing, why is it important? Why is it a game-changer?

**Amal Hussein:** yes.

**Amal Hussein:** And more specifically, what is this V8 on the edge thing? What does that even mean? Why would you ever even wanna do that? So educate us, Mr. Kupertino... \[laughter\]

**Amal Hussein:** \[unintelligible 00:17:48.09\] I sort of hate this term now... Like, have you ever kind of fallen in love with something because you need it to be like "Hey, we're different", and then a few years later you're like, "Oh, I wish this would go away a little bit"?

**Amal Hussein:** You mean like Web 3? \[laughs\] Buzzwords around that?

**Amal Hussein:** Yeah, something like that.

**Jerod Santo:** That didn't take a couple of years though...

**Amal Hussein:** That didn't take so long. Yeah, so edge computing... So if you think back in original AWS days - and now they have Lambda@Edge, so they do edge computing, too... But the idea being like you would originally, when serverless came out, and -- okay, from the top down, you used to have your own app, and then you would \[unintelligible 00:18:19.29\] go online, you'd rent a server, you'd install Linux on the server... All this stuff that you had to do, and all you wanted is your API to exist. So serverless was like this revolution where basically the revolution was like "Stop worrying about a lot of stuff." You don't have to worry about operating system, you don't have to worry about hardware, you don't have to worry about bandwidth, if it goes up we just charge you more... Awesome revolution. So when people talk about serverless, they mean deploying a single function, and you don't have to worry about upgrading Ubuntu, you don't have to worry about anything like that.

The one thing that it left out, in my opinion, was location. That still felt odd. So you'd have this amazing, magical serverless thing, but you still had to pick what data center you wanted it in. You'd be like "I'll put it in Seattle. I'll put it wherever." So the idea of edge computing was that Cloudflare is the CDN, hundreds of data centers around the world, and that every function you deploy, you don't even get to choose where it goes, it goes to all of them. So it spreads out to all of them, and then, when your users hit it, it gets load-balanced to the closest one or the most efficient one for them, right? So you can imagine your code running on hundreds of data centers, and your users just accessing the one closest to them.

So the edge meant - if we're looking at our CDN - what we call each individual point of presence is like an edge network, that's like the closest thing to the user. So the actual code is running at the edge. As opposed to before, if you had a Lambda in Seattle and then you used Cloudflare to cache your responses, that cache would be at the edge, but the actual code, when there was a cache miss, would have to go all the way back to Seattle.

\[00:19:50.02\] So that's kind of like edge computing. The reason I hated it is because it's like, at what point does it become edge? If you have two data centers with a load balancer, is that edge computing? And you go to the closest? Is 10 edge, is 20 edge? So I think it's a little bit tricky and there are diminishing returns, but edge meaning that your function is deployed somewhat all around the globe, and your users will hit the data center closest to them automatically.

**Jerod Santo:** Yeah, I think it's overloaded as well, because many companies use edge to refer to IoT devices, and stuff...

**Amal Hussein:** Yes.

**Jerod Santo:** So if we're looking at a global network, that's even more leafy. That's even more edgy. But if you're talking about a CDN, now you have points of presence around the world - those are the edges.

**Amal Hussein:** Right, absolutely.

**Jerod Santo:** The domain matters, and it is an overloaded term.

**Amal Hussein:** So I think the thing is that when you use Cloudflare, you don't choose where it lives; it lives everywhere that we have the offer. And your users - you can just rest assured knowing that they'll hit the closest one.

**Break:** \[00:20:40.01\]

**Amal Hussein:** So Jon, that was a really great introduction into what is Cloudflare, how the company has grown, and how the company is reshifting its focus to better support modern web development, which is very exciting... And I think it'd be really great to clarify something for our listeners before we get into some of the nitty-gritty nuts and bolts of the new features... can we maybe clarify that like Cloudflare isn't a second-tier cloud? It's not like Vercel, where you're building on top of --

**Amal Hussein:** Us!

**Amal Hussein:** Yeah. You guys have your own data centers and stuff, right?

**Amal Hussein:** Yeah. Right. We don't build on top of Google Cloud or AWS. It's our own data centers, our own points of presence, we manage all of that stuff. Yeah, absolutely. That's a really good point of clarification.

**Jerod Santo:** And Vercel is built on Cloudflare?

**Amal Hussein:** Yeah, both the CDN and their new serverless stuff is on Cloudflare Workers, which is awesome.

**Jerod Santo:** Cool.

**Amal Hussein:** That's quite the endorsement also, so... Congrats. \[laughs\]

**Jerod Santo:** Right?

**Amal Hussein:** They're awesome. They're a great team. They're such a cool company.

**Amal Hussein:** Yeah. I mean, I think whether folks realize it or not, if you write JavaScript, you are already using Cloudflare; or you have used it. Because they support the Npm ecosystem. So that's one thing. But that being said, getting into Workers, and Durable Objects, and pages and all these things, can we maybe start to break some of this stuff down? So what are Cloudflare Workers? And also -- like, from my understanding, Durable Objects are a somewhat adjacent thing, but that folks are often confused about...

**Amal Hussein:** Yeah, it's all in the same ecosystem, for sure. So Cloudflare Workers were the initial building block; so they are a serverless platform -- you can think about it like an app, that's your request-response, that's what it is. So you handle requests coming in, you can do all sorts of stuff; you can add headers, you can interact with other Cloudflare APIs, like bot detection... All sorts of stuff like that. You can take advantage of all those APIs, you can run your business logic and you return a response. So they were like our initial thing.

And then pretty much right away there was all this need for state. People were like, "I just need some place to have some state..." Like if I'm doing a comment system, or a likes counter, or keeping track of -- you know, anything. So our initial state offering was KV, a key-value store. That also runs in all of our data centers.

So it's real simple... If you've ever used MongoDB, or -- a lot of companies have their own key-value stores, where you can keep track of how many times a user has visited the site, you could have the key be their IP address and the value be 0, going up, whatever. Stuff like that.

\[00:24:01.26\] So KV is really awesome. And in fact - I'll get into Pages in a minute, but our original concept of static site host was this thing called Worker Sites, which we still support. Basically, it's like a build tool that takes a static website, markdown files, and sticks each markdown file on a KV store. So the key is the path, like my first blog post, and then the value is a bunch of HTML or markdown. And then a worker that reads the path from the request, fetches it from the KV store, and returns it. It's a basic kind of static site, even though it's dynamic, technically.

So KV is awesome, it's just incredible. The only problem with KV is that it's an eventually consistent system. So if you imagine having this KV store running on all 200-300 data centers, it takes some time to populate. For the blog example it's great, because it's like, "Okay, I updated my blog, and it takes you 20 seconds before you can actually see it." That's not a problem, right? But when you start doing really performance-based state, it's a problem.

So Durable Objects is like the counterpart. Durable Objects would be not eventually consistent. Durable Objects is a single instance of this state. So if you're doing something like real-time comments, or a voting system, or a chat room, or a Google Doc - something where that's really important, then Durable Objects is the use case that you'd wanna use there.

So we have two options for state, one of them is really fast, but eventually consistent, and then if you need things to be strongly consistent, then durable objects are the right choice. So yeah, does that make sense?

**Amal Hussein:** Yeah, that definitely makes sense. Thank you for that great explanation. So I guess maybe taking it from the top, just to drive this message home - you know, Workers, still supported, they were the original thing... There's a lot of evolution in terms of even just debugging support, and there's a dashboard etc. Can you give folks some context around when you would even use a worker, especially in the context of a static site? It's a little confusing and counter-intuitive, right? We're mixing a lot of concerns here. How is this different than like an application server somewhere else?

**Amal Hussein:** Right. So the static site example might have been confusing. What I was trying to illustrate is - let's say you have this desire to build something similar to Netlify, where people upload their stuff and it turns it into this really cool thing, with an application server that serves it. You could build your own Netlify using those pieces, that's what I was trying to say.

**Amal Hussein:** Ah...

**Amal Hussein:** So you could build your own Netlify using a worker, and a KV store of all the users' posts, and then you could get all those posts and kind of serve that static content. So I wasn't trying to say that workers are for static sites. I was saying if you wanted to build your own static site service, you could do something cool like that with a worker.

But we also have an offering now called Cloudflare Pages, which simply is a static site host. That's another dead-simple -- you connect your GitLab or your GitHub repo to it, it just does all the cool stuff, it puts everything on our CDN, it does all that stuff for you... But I was more trying to illustrate the gravity of things you could build with workers, including some of these popular services that exist.

**Amal Hussein:** Thank you for clarifying. That makes a lot more sense.

**Jerod Santo:** So a worker is about compute, and a durable object is about basically persisting your JavaScript objects around the world for you.

**Amal Hussein:** KV and Durable Objects are really just simple for state. Durable Objects name is because the syntax for it is a JavaScript object... But at the end of the day, they really are these key-value stores for any kind of simple state.

**Jerod Santo:** Sure.

**Amal Hussein:** The KV is this eventually consistent system... Durable Objects is really cool - there's just a single instance of it and it moves around data centers based on where the requests are coming from. So it tries to make itself live next to where a lot of requests are happening right now... But it is strongly consistent, but it'll have higher latency than the KV, which is everywhere.

**Jerod Santo:** I see.

**Amal Hussein:** Yeah, is there a time where someone would wanna use key-value store versus a durable object?

**Amal Hussein:** \[00:27:53.09\] Yeah, I mean the debate is really truly consistency versus latency, for those that are trying to make their chart... Like, if you don't care about eventual consistency, if you don't care about things taking a little while to update, then KV is a far superior platform, because it's so low-latency. It'll return super-quickly. If you're making chat room comments, Google Docs, something where you just can't have like a 20-second wait time in between updates, then Durable Objects is the way to go for that.

**Jerod Santo:** And the drawback of Durable Objects is...

**Amal Hussein:** Higher latency... Depending. I mean, there's only one of them. There's one piece of state. So if you and I are hitting it from California, and then somebody hops on from Japan and requests it, there will be latency, because it will actually have to go to California, where that one durable object lives.

**Jerod Santo:** So it's not replicated around the world.

**Amal Hussein:** It is not replicated. It is like a singleton --

**Jerod Santo:** It's ping-ponged.

**Amal Hussein:** It's ping-ponged all over the place on our network.

**Jerod Santo:** \[laughs\] I'm gonna stick with KV myself, but... I think it depends on the use case.

**Amal Hussein:** Yeah. So I think KV is always the best starting place, and then as soon as you need something like real-time -- if people are building cool (like I said) chat applications, or live editing, or anything like that, you would move it to durable object.

**Amal Hussein:** Very cool.

**Jerod Santo:** I love the idea of having an arbitrary object and just saying "Hold on to this for me."

**Amal Hussein:** It's awesome. For JavaScript developers, it is super-good. I love that syntax a lot.

**Amal Hussein:** Have the crypto folks discovered this yet? Are they like "How do we blockchain this?" \[laughs\]

**Amal Hussein:** I know...

**Jerod Santo:** Durable objects, on the blockchain...

**Amal Hussein:** It's really interesting, because we offer gateways, like for Ethereum... So you can hit one of our public gateways, or whatever... But we haven't done a ton in the cryptocurrency space. We do a ton in the cryptography space, but...

**Jerod Santo:** Son of a gun...!

**Amal Hussein:** Yeah, it will be interesting to see... I wonder if people will start using us. People do use our gateway, so stuff that lives in the blockchain. We have a cool gateway where we put the address at the end and it'll fetch it... But I wonder if Cloudflare will go Web 3 in the next couple of years. We'll see.

**Amal Hussein:** Oh my God, that's amazing. Alright. Well, before we kind of move on to the next thing, I just wanna circle on Workers again, just because - again, there's so many possibilities, and for me, it took me a long time to even just wrap my head around the power and the possibilities...

**Amal Hussein:** Same.

**Amal Hussein:** So can you maybe give me a scenario of like when is a worker useful?

**Amal Hussein:** Absolutely.

**Amal Hussein:** ...more useful than Lambda, or an application server. What's the true value prop of a worker?

**Amal Hussein:** Yeah, absolutely. So I would say the value props would be the same with a single Lambda function worker, a Fastly function... Those are all the same. It's like, a single serverless instance. But say you have like an Express.js app, some Node app with ten endpoints on it, and you're like, "Oh, why would I use--" Like, the equivalent would be ten workers, right? One for each request endpoint. So I think it's a few things. One that's important is when you manage the whole application, you're gonna have to go through the whole renting a server, picking the operating system, stuff like that. Breaking it into these little \[unintelligible 00:30:44.24\] is kind of nice, because then you just deploy them all via Cloudflare, or AWS, or whatever, and they just kind of live -- you don't have to worry about that.

And the other thing is scalability. If you've ever hit your VPS and all of a sudden you're getting a ton of traffic because you're on Hacker News and it's like "We've hit the max requests for the server", and you're on the phone trying to get another server - you don't have to worry about any of that. That's all automatic.

But when it comes to simple examples for a worker - because I've done a lot of work at companies that have a robust application server, and they're just looking to sprinkle some Workers magic on top of it... So one really common thing is adding a header. Let's say you have this big app and it has 600 endpoints, and you wanna add a security header. Or a really good example is we have this cool bot detector API, that's a Cloudflare product. And what it does is it uses all these great heuristics, and it'll give you a number 1 to 100 how much do we think that this request is coming from a bot. So you could just block things, you could be like "Oh, it's an 80. I'm blocking." Or you could have a simple worker that intercepts all of your requests from all 100 of your endpoints, grabs the bot store, and just sticks it in a simple header. And now all the clients can do whatever they want with that score individually.

So you can think of these areas where you're just intercepting, doing a little something, and passing it on. And it goes all the way from there -- you could build your whole application on workers, but I think for people that already have big API surfaces, thinking about things like that, like adding a simple security header to all of your endpoints, that's a great use case for a worker.

**Amal Hussein:** \[00:32:13.13\] That's some hot stuff. I mean, it's a great proxy layer, and also we use it heavily at Npm, and yeah, I can say, blocking a specific IP - super-easy on the Cloudflare dashboard.

**Amal Hussein:** Absolutely.

**Amal Hussein:** You know, just a really great use case for that stuff, too... So thank you for explaining that. We had one of our listeners actually message us and they had a bunch of specific question, so... I don't know, Jerod, do you wanna...?

**Jerod Santo:** Yeah. Shout-out to Matt \[unintelligible 00:32:37.05\] who requested a show all about Cloudflare Workers. And no specific questions, but a statement that I wanted to at least pull in. So they've recently said "Seeing the sophisticated coordination with respect to application state and serverless environments was extremely difficult, if not impossible, due to the stateless nature of serverless function invocations. Then the Workers team created Durable Objects." Matt is a huge Durable Objects fan. I know I just said I'd pick KV, but here we have a counter-point, perhaps...

**Amal Hussein:** \[laughs\]

**Jerod Santo:** "Globally-unique instances of plain old JavaScript classes running in the edge cloud, each with their own access to a strongly consistent, persistent storage API." I think Matt might be able to work for you guys, by the way.

**Amal Hussein:** Man, you should have just brought Matt on here. He's killing it, that's great.

**Jerod Santo:** Right? He says "These lightweight stateful objects permit sophisticated state to be handled on the edge in a serverless environment and unlock immensely cool possibilities like running an entire real-time chat app using a single durable object class definition." He linked out to one which you guys have on GitHub; we'll also link to that. A Workers chat demo on the Cloudflare org.

He says "I've loved exploring these technologies on my own, as I feel very empowered by the potential and ease of use of the platform, and I think other developers might feel the same way." So there's a ringing endorsement from one of our listeners.

**Amal Hussein:** I love it. And I do wanna cover -- I think we can talk about it a little later, but I wanna cover why I'm long on Cloudflare for building your next thing. Kind of like he's talking about. I think that if you wanted to build a SaaS application or something like that, I feel like we're starting to get to the point where it's so easy. And especially as a DA, where I just get to play with the stuff that they've built, that these \[unintelligible 00:34:12.01\] teams have built... I am shocked at how easy it is to spin that.

I did a blog post recently on spinning up a whole video app where you can upload or stream video, and you can gate access based on all this stuff... It's like shopping. I'm picking through Cloudflare services and I'm like, "Yeah, tick that, tick that... Tick the stream API, tick the CDN..." So I really think we're heading towards this area where I hope to empower a lot of big creativity with that stuff.

**Amal Hussein:** Yeah, it's certainly a game-changer... I'm really excited about seeing the best practices kind of come out of this, because I think there's so much new stuff that we've put out into the wild, and you know web developers are like the smartest people ever, but they also like to push things to the limit... So I'm really curious if in a few months we're gonna see a best practices guide from Cloudflare around how to normalize your durable objects... Like, how big is too big, right?

**Amal Hussein:** Yeah.

**Amal Hussein:** Just things like that. I'm curious to see that shape over the coming year.

**Amal Hussein:** Yeah, I think that's like a big part of my team's charter this year, is getting to know folks... Like, we do some really cool interviews, we do sit-downs with folks that are building on us, we try to pair with customer success people as issues come in... But I think that's like a big thing for my team, is trying to come up with best practices, common issues, ways to avoid them... Like, kind of our thinking, our rationale for the way we're building things... I think a lot of that needs to now get written down, highlighted, stuff like that.

**Amal Hussein:** Yeah, that makes sense. So R2 - what is R2? I think R2-D2 when I see that -- but clearly, that's not what it is.

**Amal Hussein:** \[laughs\] I think R2-D2 when I see it, too. So yeah, R2 is our actual storage. It's coming after S3, basically. Amazon has S3, we have R2.

**Jerod Santo:** They subtracted one from each...

**Amal Hussein:** \[laughs\]

**Amal Hussein:** Yeah, did you just -- is R before S in the alphabet?

**Jerod Santo:** Q, R ,S... Yeah, for sure.

**Amal Hussein:** \[00:35:59.28\] I think there's gotta be something there... And also, they call it radically reprogrammable, or something like that.

**Jerod Santo:** Didn't you want to make it better? Like, you are less than Amazon, but which one -- would it be like T4, if you were gonna be better than S3?

**Amal Hussein:** Maybe...

**Jerod Santo:** R2 is like a less than. You have subtracted from what Amazon is doing. I think they're subtracting from the price...

**Amal Hussein:** Yeah... I don't know. I didn't name it. Or build it.

**Jerod Santo:** \[laughs\] Well, R2 is endearing, that's for sure.

**Amal Hussein:** Yeah, it is.

**Amal Hussein:** Less is also more.

**Amal Hussein:** Less is more.

**Jerod Santo:** Well, the price is less. I think that's the main thing that we wanna talk about.

**Amal Hussein:** \[laughs\]

**Amal Hussein:** On one hand, it was inevitable that we have some kind of storage, right? Some place that you can stick your media, videos, images, stuff like that. But then on the same hand - our CEO wrote a post on this - we've been monitoring Amazon's financial structure for how they charge for this... And so this whole concept of egress, where it's like, you put up a video, and then Amazon is charging you every single time that that video is consumed or watched, things like that... Even though -- I mean, it's just sitting there, right? It's just sitting there.

So the whole idea with R2 that we think is really revolutionary is that we have zero egress fees. It's a totally different billing structure.

**Jerod Santo:** Right.

**Amal Hussein:** So you can think about it as just S3, with a totally different billing structure that ought to save you a large amount of money if you're somebody who puts a lot of content on Amazon S3 buckets.

**Jerod Santo:** Well, if for example you wanted to host your own -- like, yeah, you used video as an example... One of the reasons YouTube became what it is today is because the cost to stream video to all of these people is so prohibitively expensive for individuals, right?

**Amal Hussein:** Yup.

**Jerod Santo:** The other reason is discovery, and it became like a magnet. But just the price -- I mean, you had to host on YouTube, because if you're gonna have a million people watch a 10 MB file - well, you can do the math on that. It's just prohibitively expensive. But if egress -- if outbound traffic is a zero, and you can put it on R2, now you can self-host your own videos and you can use the old HTML video element...

**Amal Hussein:** Absolutely.

**Jerod Santo:** ...and put them right on your own website and not rely upon somebody like YouTube to host that content for you. I think that could be a game-changer.

**Amal Hussein:** Yeah, we're hoping so... And I think that it's still like -- you know, it's one of those nice ways of disruption where like "Wow, people are making a huge amount of profit off this", but you speculate that you could still make an okay profit charging 100x less than your competitor. I do think it's an area that's ripe for disruption right now in that sense. I still think that you can make good money by charging people to host their stuff with you, without charging them a million dollars because they got popular one day and it's that same one video, it's just getting watched by a lot of people, and the bill is astronomical.

**Jerod Santo:** Well, that's just the beauty of competition in markets. Like, here comes Cloudflare, and they're just gonna undercut the crap out of it. We were talking about this on the Changelog recently - I think it's still like sign up for the waitlist kind of a thing... But the way that you guys structure it even with the ability to just slurp in your current S3 setup...

**Amal Hussein:** Yes...

**Jerod Santo:** It's like, is there a downside for a developer? It's kind of like, I'm paying money and then I go to zero on this bill.

**Amal Hussein:** Right.

**Jerod Santo:** Obviously, you have to pay for what you upload, and probably like a total stored amount, but the outbound is such a huge part. It's like, who isn't gonna switch...? And what is that gonna do? It's gonna make Amazon better. They're gonna have to react at some point.

**Amal Hussein:** They have to respond, yeah, totally.

**Jerod Santo:** So that's just better for everybody, this competition.

**Amal Hussein:** Yeah, I really hope so, and I think that it's just -- yeah, the billing cycle just doesn't make sense the way it is... So I think that -- yeah, I think this will be really cool for a lot of folks. I assume Amazon will also introduce massive discounts into that stuff as well.

I do think it's cool for me as like a user, advocating for the users - again, to what you said, like "Oh, let me revisit... Can I host my own podcast? Can I host my own video series? Could I have an internal video thing for work that I build?" You know what I mean, like - a lot of new creative ideas are opening up, which has me really excited about that.

**Amal Hussein:** For me it's a huge empowerment to content creators. So Jon Kupertino, what I would like to say to you is --

**Jerod Santo:** People will actually think that's his name by the end of this show...

**Amal Hussein:** I know, I know... They're gonna be like "Oh, Jon -- I can't find this Jon Kupertino..."

**Jerod Santo:** \[laughs\] "Does he work for Apple? I can't remember..."

**Amal Hussein:** Yeah... "I keep googling, but nothing turns up."

**Break:** \[00:40:10.18\]

**Amal Hussein:** So okay, Jon Kuperman, my request to you is --

**Jerod Santo:** \[laughs\] Just call him Jon.

**Amal Hussein:** ...as somebody who deeply cares about the web, let's now make R2 interfaces easy and accessible for non-technical people, so that they can then roll that into their Wix site, or whatever, their WordPress site... Let's educate non-technical content creators about the power of owning their own content, and also being able to serve it in a way that gives them maximal control, and not having to worry about ads, or what's my user gonna click into next... You know, if you're really trying to control the messaging of your content, think R2. You know? That's my poke.

**Amal Hussein:** No, I think that's fantastic. And I think two things for the dev advocacy team are like 1) always trying to build libraries. This is still for technical people, but \[unintelligible 00:42:41.24\] interfacing with our stuff easier. That's always top of mind. But then 2) yeah, really trying to get the messaging out, trying to sit down with folks, trying to be active. We're on Twitter, we've been seeing a lot of people building SaaS apps on top of Cloudflare, and I think that for the next year that's gonna be a big place where we spend energy, is like reaching out and being like "This sounds awesome. Can we chat? Can we sit down? Can we help? Is there feedback you have?" Stuff like that. So yeah, I totally love that.

**Amal Hussein:** Yeah, that makes a ton of sense. So just really quickly -- I guess, perf... We've talked about how Cloudflare's CDN caches have certainly helped speed the build times of your npm install, yarn install... But that being said, there's so much more. And especially, it seems like a huge shift for Cloudflare has been actually around "How do we make things go faster on the web for all different types of assets?" So can you walk us through some of those features?

**Amal Hussein:** Yeah, I'd say there's the big things, like to check out -- if you start a new Pages app, or if you move your site onto Cloudflare, just playing around in the dashboard, which we've been working on design tweaks to, but... We basically have a lot of cool stuff about automatic image optimization, making your images smaller, or reading the device size and serving images... So that's like Polish and Mirage.

\[00:43:59.14\] Then we have the Rocket Loader, which will turn off unnecessary \[unintelligible 00:44:02.07\] So we've got a lot of these options, and these are all one-click options for the most part. So if you start a new Cloudflare Pages app, or if you move your website over... Sort of looking at these things - automatic imagery sizing, automatic compression of JavaScript and CSS and HTML, serving images by the device width... Or with the automatic resizing, every time we have to do a resize, we save it, too. That's like a paid service. And so then you just upload one image, and then as devices come in, we start resizing it based on their width, and then we save all those cached in the edge... So you end up with 10 or 20 copies of your image. Rocket Loader for speeding up JavaScript-heavy sites...

And then the other one that I wanted to talk about which I think is really cool is we have this tiered caching initiative which is now available in the dashboard... So the idea being let's say you have 200 data centers, and you use our CDN. Or we have 200 data centers, you use our CDN. So your stuff gets cached in all 200 data centers, but then every time you do a cache purge, or a user requests something where there's a miss, it has to always go back to your application.

So a hypothetical, I guess, would be like you have an app, you go buy a DigitalOcean VPS, you put it in your New York City, and you put your app on there... And it gets overwhelmed, so then you sign up for Cloudflare CDN, and poof - all of a sudden there's all this caching stuff. But you can still have this problem where if somebody's hammering on an end point, or just users are trying to request an end point and it's a miss for the cache - all the caches will start going back to your one DigitalOcean VPS that you bought. It's almost like a mini-DDOS, an innocent/accidental one...

But you see this -- like, Facebook went down the other day... So all of these big sites, like Facebook, Twitter, Google - they take in more traffic than they could possibly serve cold; like, if all the computers went off and all went back on again - they'd just get hammered. So they rely on these caching mechanisms. So one of the problems for these companies when they have an outage and things go actually down - you'll see this all the time, where they keep trying to go back up, and it's like up and then down again. And then it's like, they go up and they go down. So they have to come up with these clever ways of like "Okay, we'll go up, but we'll block any users whose names don't start with A", or they'll come up with these ways of doing these slowly booting back on, so they don't get just decimated again.

So the same thing can happen with just anybody's application, where you have like this one VPS that can handle (whatever) 100 or 1,000 hits a second, and then something gets purged from the cache and all of your users are trying to hit it - boom, it takes it down again.

So we came up with the idea of tiered cache, where we take those 200 and we mark, let's say, 25 of them as top-level cache CDNs. Like, cut top-level endpoints. So what happens is now the other 175 are no longer allowed to hit origin when they have a cache miss. What they have to do is they have to find their closest top-level cache system and ask it for the file.

So it's like, "I need a JPEG, and I hit this one -- I'm in Florida, so I hit the Miami one. Miami doesn't have it. Miami is no longer allowed to just hit New York." \[unintelligible 00:47:10.19\] it can't do that anymore. It has to find its closest one, let's say like in South Carolina, and be like "Do you have the JPEG?" And only if that doesn't have the JPEG, South Carolina has permission to hit New York now.

**Jerod Santo:** That just sounds like the way DNS works.

**Amal Hussein:** Yes. But there's advantages where it can do a lot of things that DNS can't. It can monitor slowdowns, or different routes, or different paths towards hosts... This is where I feel like we kind of have built this -- I don't wanna be too tooting our own horn about it, but it's kind of cool the internet has some... Like, the way that networking works has a few of these shortcomings, like traffic jam is a thing, right? Where like a certain popular data center will be slowed down... So we have some cool things with the fact that we're sitting on top of that. So we can basically have these caching systems that can re-route based on real-time analytics and stuff like that, and prevent you from hammering origin servers. So I really like that stuff...

**Jerod Santo:** \[00:48:03.08\] Is that because you own every hop, whereas in DNS you're going outside your own networks, but in this system you control each hop, and so you can route around certain things, whereas you wouldn't have that information inside of a DNS architecture?

**Amal Hussein:** Yeah, absolutely. So we have some cool stuff -- I think Argo Smart Routing is that product. If you search Argo Smart Routing, you go to the site, it has really cool -- our design team did these awesome visualizations of like... You know, let's say there's something going down in this really big data center in the middle of the country, and how Argo Smart Routing can move around and get back to origin in a faster way, not just optimizing for least number of hops.

**Amal Hussein:** For me it's like Google Maps versus Waze almost... At least old Google Maps, before they acquired Waze, but still have not integrated...

**Amal Hussein:** Yeah...

**Amal Hussein:** Waze is using a lot of smart crowdsourcing data to actually help you find the true fastest route, not just based on the same two dimensions that we've been using for years, right? So it's very interesting...

**Jerod Santo:** Right. Distance and speed limit is the simplified one...

**Amal Hussein:** Exactly.

**Jerod Santo:** ...but this has actually traffic jams, and an accident, and a closed road... Yeah.

**Amal Hussein:** Yeah. \[unintelligible 00:49:08.12\] or whatever else. So it's just very, very cool, Jon. Honestly, my jaw is on the floor. I'm very impressed at this. And I think what's for me very cool is to see -- I don't know, engineering and cloud architecture focus heavily on resilience. And for me, it just feels like the North Star maybe within the engineering org at Cloudflare is clearly resilience, because it's very clear just even in the products that it's about resilience, but also don't do more than you have to.

You mentioned the image resizing optimizations... Images only get resized when an actual request comes in from a new device that requires this new size; it's so much better than creating a bunch of JavaScript or like bit trash...

**Amal Hussein:** Right.

**Amal Hussein:** ...because I'm gonna create one image and I'm gonna have 50 versions of it hosted on some static site, and maybe only three versions are ever actually used.

**Amal Hussein:** Yeah.

**Amal Hussein:** So I've just created garbage on the internet, and potentially I'm also paying for garbage on the internet that I'm not using, you know?

**Amal Hussein:** Right. I think one of the things -- and again, I don't know that it's luck or that it's this incredible vision from leadership, or whatever... But I feel like -- I remember I was talking before about like you make these architectural decisions and they have serious implications down the road... I think that Cloudflare picking DNS as the abstraction point, where we're not making like build tools, and we're not making in-between services that do all this stuff. Like, the abstraction point is you put Cloudflare in front of your site's DNS. That's how you use Cloudflare. But being in that position versus some of these other positions of other companies I think has paid extreme dividends, where we're able to analyze traffic, make really interesting tools... Just do all these things that I think we're very lucky to be in the opportunity to do... But I don't know that it was even luck; honestly, our leadership folks, like Matthew and Michelle, are awesome to listen to, so I don't wanna take credit away from them... But to me, it feels like "Oh, we really lucked out! This is a really great abstraction point to pick!" So I think that it's just been a very nice time to be sitting in this in-between and offering all these creative services.

**Amal Hussein:** So luck for me is opportunity meets preparation, right? I can tell you Cloudflare has been pushing the boundaries for a very long time, and I'll share a story with everyone... My first interaction with Cloudflare was maybe about 5-6 years ago; I knew about the company before that, but I was at All Things Open, and connected with someone who worked at a company that was just acquired by Cloudflare, and I got invited to a workshop that he was giving for a few people to demo his app. It was some drag-and-drop edge compute thing; I can't even remember the name.

\[00:51:58.19\] But anyways, I attended this workshop and I learned about edge computing for the first time, and they had developer advocates from Cloudflare there, and I was just like "Whoa! What is all this stuff?" It just felt like they were talking to me about the iPhone when I still had like a rotary phone. It felt very future-focused. So I think the company itself has been very oriented towards the future for a very long time, so... It's not luck.

**Amal Hussein:** No, I don't think so... I think it's interesting being new and being on more of a customer-focused team. I feel like other jobs I've had, leadership gets on stage and kind of drills into you "This is our mantra. This is our thinking. This is where we're heading." You know what I mean? They \[unintelligible 00:52:41.03\] Cloudflare has this very unique thing where they don't do a lot of that kind of talking. Stuff just kind of comes together, and I feel like one of the cool results is that employees have these micro-epiphanies as they're working, where it's like another ball drops and you're like "Oh, that's what you've been doing -- Oh, okay, okay, I get it." It has this SaaS stuff for me, as we've done the streams stuff, and we've done... It just starts coming together. I feel like it's so much cooler being shown than it is being told. I think that's one thing I really enjoy about working there. The releases are happening, and wheels are turning in my head, and stuff is clicking together, and I'm starting to really see this vision here, which is just exciting.

**Amal Hussein:** These worlds are also often so disconnected, right? You have cloud engineers that are traditionally focused on your monolith applications, and VMs etc. And a lot of that brain power in cloud engineering has been traditionally focused on supporting that... And of course, \[unintelligible 00:53:42.27\] AWS Lambda come out and the adoption of that.

**Amal Hussein:** Yeah.

**Amal Hussein:** You know, the serverless revolution is here to stay, right? But again, it's nice to see these worlds bridge a little bit, because web developers are now with isomorphic JavaScript, with universal JavaScript, and with just workers - where it's like us being able to do so much more with JavaScript in the cloud. It's just very exciting to see these two worlds come together... And I think for me Cloudflare is the bedrock of those two worlds. Very, very exciting stuff.

So real quick, we've gotta talk about security... You kind of hinted at this earlier. There's this big button on the Cloudflare website... I don't know how long it's gonna be there.

**Jerod Santo:** Is it Turbo?

**Amal Hussein:** No. It's like "Under attack?" Literally, on the homepage, on the top-right... I'm like, "Wow." Okay, so clearly there's a lot of good security features here, but I love that you're marketing to folks that are just sick of being DDOSed, or whatever. Can you tell us what's the story here with resilience and security?

**Amal Hussein:** No, I love that... And I do think that was a big part of how we came in the market share, was -- adding DDOS really made Cloudflare a lot of what it is today. DDOS, I mean like anonymous stuff going on, a lot of these DDOSes, and Cloudflare came out with these really great solutions, that are still great.

So the "Under attack" button is awesome. The biggest thing that it does is it puts our \[unintelligible 00:55:03.26\] I don't know if you've seen that... I play a lot of chess, and whenever you go to log into chess.com, it first takes you to this little screen that's verifying, and it runs its own heuristics to be like "Oh, is this a bot? Is it a spammer? Do we feel confident it's a real human?" So it kind of like puts this thing in front of you so you would see -- if you're getting DDOSed and you're seeing this incredible rise in traffic, you kind of stick that thing on, people will start hitting Cloudflare first before they hit you, the heuristics run... They can really protect you from a lot of that stuff, which is awesome. It's just really, really nice.

I feel like it's really empathetic too, to be like "What is in people's head right now?" They just got an email saying "Unusual traffic", they go and their thousand hits a second site is getting 200 million hits, or whatever... Having \[unintelligible 00:55:46.16\] to just cool it is awesome.

**Amal Hussein:** \[laughs\] Cool it. Cool down.

**Amal Hussein:** So we do a lot of really cool stuff, like from product offerings... So we have like the Captcha, which is really nice... It's not one that you necessarily have to play with. It just runs its automated heuristics, where it pops you out to a Cloudflare screen, it says "Give me a second" and then it pops you back. We have a lot of different protections over like bots, and things like that, and spam... So you can set up your own heuristics to be like "Oh, if it's more than a 70, just block it", or "If it's an IP address that's hit more than --"

\[00:56:19.18\] So it kind of comes into this, again -- we try to offer these building blocks where you can create your own experience... So we have the bot detector score, we have Cloudflare Page Rules, which are like an if-else UI that you can use... So you could say "If a user hits this URL, add a header." But you could also say "If a user's bot management score is over 80, send him away. I don't want it."

So we kind of offer this whole package, and then again, being in the DNS spot, a lot of the cool stuff is really just behind the scenes. There's just stuff where -- when that page is sitting, we're running latest and greatest kind of cool security heuristics, and stuff like that behind the scenes.

So I think it's really, really great for the security side, just being behind Cloudflare, having access to those tools, and a lot of them are just one-click installs. Really easy for people to use.

**Amal Hussein:** That's cool. I feel like I need a cool down button for my life, so...

**Jerod Santo:** \[laughs\]

**Amal Hussein:** That would be nice...

**Amal Hussein:** So how can I copy-pasta that?

**Amal Hussein:** Yeah... \[laughs\]

**Amal Hussein:** And yeah, that's just phenomenal... And it's also for me a little bit -- it feels a little "D'oh." I'm like, "How are other copyrighters not doing this?" It just feels like this is the way we should be handling these things, so I hope more folks follow cue... Imitation is the greatest form of flattery in this case, just because obviously it's better for the web as a whole, if we all have better ways to handle these situations. So we can't end this show without talking about Rust...

**Amal Hussein:** \[laughs\]

**Jerod Santo:** It's JS Party, so we've gotta ask about Rust...

**Amal Hussein:** JS Party, yeah...

**Amal Hussein:** Yeah. So I'm having these moments with Rust where I'm like -- I'm still in the phase where I'm questioning, "Do we really need this in the JavaScript ecosystem?" And I'm sure I'm gonna be wrong on this, because lots of people who are smarter than me have hopped on that bandwagon; I'm just skeptical about getting in the car, you know...

**Amal Hussein:** Yeah. I think that's a great topic, that I have a lot of thoughts about, like all these JavaScript tools being rewritten in Rust. I think the Rome team, Parcel... ESBuild is Go, but a lot of this tooling is moving over to Rust. It's big.

I like Rust the language a lot. I feel like that would be a fascinating topic, like "Does the JavaScript ecosystem need to move everything over into Rust?" I think it would be a good topic. But for us, I think it started as just like a benefit of using V8. So we had a WASM story, and Rust has a great WASM story... And then a while ago we just started offering pure, native, full-on Rust support for our workers, which is really exciting.

But again, I think what's so cool about JavaScript and Rust is it takes groups of folks who have normally been a little bit kept out of this API development scene, which I think has lent itself to \[unintelligible 00:58:48.18\] Java, Ruby, Go, these big players or whatever, and having some of this native support for frontend devs with JavaScript and system devs with Rust is pretty awesome, I think, for people to be able to build their own platforms, their own tooling.

So we have a lot of Rust folks, our CLI is written in Rust, we have native Rust support, we have Rust types, up to date, maintained types package...

So back to your thing about which APIs do we support and don't we support - we have a TypeScript and a Rust package, which I would really recommend if you're writing workers, because they will fully auto fill in with all the APIs that we do support. So if you wanna check file system APIs, or set timeout, or things like that, I would really recommend the types package for that.

But yeah, I think our Rust story is pretty cool. I hope to see a lot more -- I get a huge kick out of watching the stuff people are building with it... So I think that's been really exciting.

**Amal Hussein:** For me, I just don't understand why folks choose Rust to build web application software. Like, I understand build tooling, but Rust in workers for me personally is still like a question mark... But to each their own. This is why people are different. I think people are allowed to use tools the way they want to...

**Amal Hussein:** Yeah.

**Amal Hussein:** Not everybody has to think like me, right?

**Amal Hussein:** \[01:00:01.00\] Yeah, I still think there's a large amount of stuff, depending on the task - very performant-specific tasks are nice to be done in WASM. So I still think the Rust/WASM story is an important one, where if you're doing a worker that does image processing, or something like that - that story there is just gonna be better. But as far as like a Hello World or a request/response or whatever - I'm not sure of that.

I think it's just good for us to support as many languages as possible, but I do think there's something to people building extreme performance stuff that might be a little bit slower, even on our fast network, if it was done in JavaScript. But I'm very interested, too. I'm very -- kind of watching. I haven't done a lot of Rust, so I'm very interested to see how that progresses.

**Jerod Santo:** Well, you all are definitely up to really cool stuff. I love a lot of Cloudflare's offerings... This feels a lot like a job interview where the person asks you "What are your greatest strengths?" And we've been talking about a lot of cool stuff... And then they ask "What are your greatest weaknesses?" and you can't say things like "Well, sometimes I work too hard." Or "I'm almost too humble."

**Amal Hussein:** "I care too much."

**Jerod Santo:** Yeah, "I care too much."

**Amal Hussein:** True.

**Jerod Santo:** So surely it's not all rainbows and unicorns. There has to be things that are missing, things that are not as good, or like "Is it really expensive? Is there a catch?" Tell us some of the things where Cloudflare is like -- provide some balance on this conversation for us.

**Amal Hussein:** Yeah, I think that's great. I think that there's things for sure about the company at its size and growth right now -- like, we're going through this extreme growth phase. Things can get bumpy, things can get missed or overlooked... I think I feel this a lot as a DA where like I just miss something. I forgot to even write a guide for something, or I publish something and people get freaked out...

I think we have not ironed out a lot of our processes yet. I think that's definitely one thing around like -- we could do launches smoother, we could communicate better... And not just like a pipe dream; I mean like I don't think we're doing a good enough job. I'm not saying, "Oh, we could communicate \[unintelligible 01:01:51.11\] But I mean like, there are times that I think small teams growing really quickly, maybe not in the best conversations with each other, we step on toes, or we launch a thing that impacts another thing and we didn't think about it... I think we have not ironed our process out as much as like -- you know, an Amazon, a Microsoft, something like that.

I also think that we're experimental, which is really cool, but I think there are drawbacks to that. I think that some users will probably feel more comfortable with companies that do slow and steady launches of things that are all going to be long-term supported, all going to be fully-fleshed out and documented... We're still a little bit firing like a startup, and I think that culturally, that can be tough for some users. I think users are like, "Wait a minute, you said you were gonna do this, and now you're doing --" You know what I mean. I think we're still trying to kind of get our footing with those things.

So I think a lot of it comes down to we're at a peculiar stage company-wise, and those have these effects. I think sometimes that can make things confusing, or stressful, or just not as smooth as other companies do.

**Jerod Santo:** Good answer, good answer. What about R2? When can we get our hands on R2? \[laughs\]

**Amal Hussein:** When are we doing that...?! I wish I knew. It's funny, because some of the launches I'm very heavily involved in. We just did our Pages with functions, so Workers and Pages living together - I was there, in the room; I'm like, "Hey, let's get going!"

R2 I have a little less visibility into. I'm really excited about it. Everything I've seen from it and used with it is really cool. I don't know when it's gonna GA at. Hopefully soon, because it's awesome. But I don't know, sorry.

**Jerod Santo:** Fair enough. I'm excited about R2, if you can't tell.

**Amal Hussein:** Yeah, me too.

**Amal Hussein:** That's very cool. And Jerod, I thought me being like a poo-poo about Rust was enough to balance the show, but clearly not...

**Jerod Santo:** \[laughs\]

**Amal Hussein:** So it's okay. You know, Rust is awesome for high-compute jobs, right? I think for me it's like --

**Jerod Santo:** I'm a fan of garbage collection. I'm not sure about you, but I like languages that --

**Amal Hussein:** Yeah.

**Jerod Santo:** I'm with you, Amal. Just go ahead and handle that stuff for me. I like --

**Amal Hussein:** Yeah, I don't know...

**Amal Hussein:** \[laughs\] Yeah.

**Amal Hussein:** So we've covered so much ground in so little time, so thank you for a) talking really fast and also somehow managing to explain things really easily... So thank you. You're awesome at your job, and...

**Jerod Santo:** You're hired.

**Amal Hussein:** Yes, you're hired!

**Jerod Santo:** \[laughs\]

**Amal Hussein:** I was gonna say, yeah... It's the end of an interview, right? The hire or the rejection.

**Jerod Santo:** Yeah, you passed the test.

**Amal Hussein:** Alright! Thank you all for having me on. This was very fun; I'm a very big fan, and it was really nice just kind of chatting about stuff and getting into the weeds of it all.

**Amal Hussein:** Yeah, I can't wait to see where Cloudflare is in five years, because I do think they're the ones doing the most exciting innovation in terms of cloud compute that supports JavaScript-heavy applications, so... Very, very excited. Where can folks find you on the internet? I guess you also have a newsletter, right?

**Amal Hussein:** I do, yeah. I have a Twitter and a newsletter; they're pretty cool. So I'm most active on Twitter, I'm @jkup. Because it's not Kupertino, it is Kuperman is my last name...

**Amal Hussein:** Sorry. Kuperman.

**Amal Hussein:** And then also JohnKuperman.com - I blog, and do stuff like that.

**Amal Hussein:** You have a great blog.

**Amal Hussein:** Thank you. And then check out JSConf Hawaii when we start doing conferences again. I'd love to see people there. So yeah, those are my places.

**Jerod Santo:** We should partner up, get JS Party back in Hawaii.

**Amal Hussein:** Yeah. And I was gonna say, I love your Twitter newsletter, it's great. I don't have to read Twitter because you do, and thank you for that.

**Amal Hussein:** Yeah, I figured I'd put my Twitter obsession to good use there, and put a little roundup every week of the too many tweets that I read... So yeah.

**Amal Hussein:** Alright, everyone... We'll see you all next week!
