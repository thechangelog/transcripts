**Kevin Ball:** Okay, hello! Kball here, reporting live from JAMStack Conf SF. I'm here with Brian Leroux, CTO and co-founder at Begin.com. Brian, how are you doing?

**Brian Leroux:** I'm great, how are you?

**Kevin Ball:** Doing good! Pumped up on coffee, as is my want...

**Brian Leroux:** Nice, nice...!

**Kevin Ball:** So Brian, you're speaking tomorrow, is that right?

**Brian Leroux:** Yeah, tomorrow I'm gonna be talking about progressive bundling.

**Kevin Ball:** progressive bundling, I'm excited to dig in. Can you tell us more?

**Brian Leroux:** Yeah. I completely made that word up, so no one's probably heard of it before... When we were building one of the initial versions of Begin.com, we really wanted to get past the build step. We hear about how builds are blazing fast, but usually that's measured in minutes, and that's not a great iteration speed. Browsers recently shipped ES Modules, and there's ubiquitous support now. They were always promised to be this faster way of building things, and we thought "Well, can we just build our front-end using straight up ES Modules with no build step?" And not to spoil my talk, the answer is no... \[laughter\] But you can get really far, and you don't have to trade this off and you don't need Webpack.

The trick that we ended up arriving on was using Rollup in the background with a Lambda function to build it once, and then cache it in a CDN and leave it there, so it's not a user intervention thing, it's more of an automated process.

**Kevin Ball:** Okay, so what happens the first time it's requested?

**Brian Leroux:** So the first time you request it, your markup is gonna have clean, beautiful, normal HTML, not generated goods, or anything like that... So you'll see source, script=the JavaScript name that you want, type=module. We'll request that half, but that path will actually hit a Lambda function. And that Lambda function will go "Oh, they need this module. Do I have it in my cache? Cool, I do. 302 redirect to that cache. If I don't have it in my cache, I'll run Rollup once, leave it in the cache, and then 302 redirect to that module.

**Kevin Ball:** Interesting. How fast is that Rollup build then?

**Brian Leroux:** So it's been pretty fast for us. We're rather lean on our module selection. I don't think this is gonna be something everybody can suffer dynamically today. And again, you don't have to do this across the board. This could be just something you do for some modules.

Our entry files typically take around 900 milliseconds the first hit. They're still sub-second, and we're dealing with around 80 modules... So this is pretty quick, sub-second... And then obviously, subsequent \[unintelligible 00:03:40.02\]

**Kevin Ball:** \[unintelligible 00:03:41.26\] Okay, interesting. So you are essentially doing request time bundling for the first request...

**Brian Leroux:** Yup.

**Kevin Ball:** ...and then everything else is cached and is just the same as if you'd built it statically ahead.

**Brian Leroux:** \[03:56\] Yeah. So it's only one hit. What I like about this is it keeps your markup clean, so that your markup is just referencing files that conceptually, logically you have on your file system... But the 302 redirect is doing all the caching smarts for you, and so all the ugly GUIDs are hidden away.

What I don't like about this is that performance penalty, and we're rolling our own caching logic, so... You know, the old joke in computer science is that the hardest problem in computer science is cache invalidation and off-by-1 errors...

**Kevin Ball:** Yes. And naming things.

**Brian Leroux:** And naming things. So two problems in computer science.

**Kevin Ball:** But you already named it, progressive bundling.

**Brian Leroux:** Yeah...!

**Kevin Ball:** So you got that one out, now you're just down to caching.

**Brian Leroux:** So it made sense, and we think that this is -- so then it gets better with time. Right now, Rollups are running with some speed penalty, because it's gotta look up that graph locally and do all this hard work of caching... But Lambda functions aren't getting slower, and AWS isn't getting smaller, the scale is growing.

**Kevin Ball:** \[laughs\]

**Brian Leroux:** I imagine as time comes along we'll be able to do this and have zero penalty.

**Kevin Ball:** Interesting. Now you've got me thinking... So how does this interact with, for example, module splitting and having a bunch of per-component modules, and things like that? Do you end up having request trees, or is it able to fetch it all at once, or how does that work?

**Brian Leroux:** No, totally. We build out our own entry files on a per-page basis, and we progressively enhance those pages. That's how we've built Begin.com. But that's not gonna be tenable for everybody. There's different ways of going about this.

Some people like using syntax as their code-splitting points. So if you use the new async imports, Webpack is smart enough to know where to do all that splitting. This technique isn't that smart. Effectively, the code splitting is a manual process where you figure out where you want those splits to happen and then treat those as entry files.

And this also doesn't solve the problem that a lot of these bundlers solve really well, and that's legacy support. If you are targeting IE8, I'm so sorry for you, but you're gonna have to stick with that Webpack for a little bit longer.

**Kevin Ball:** Interesting. So does it only work then with things that are supporting entirely ES6 modules?

**Brian Leroux:** Yes... Which is all the major evergreen browsers. That's a line in the sand that we can draw; maybe the enterprise can't though. You might be stuck on IE6 in the VM, for some reason.

**Kevin Ball:** But also on the bundle side -- because we've had a conversation related to this before, talking about "Okay, how do we get everybody upgrading to using ES6 modules?" and one of the challenges is there's a million packages on Npm right now that different things are referencing, and some of them are essentially stranded, not gonna update any time soon...

**Brian Leroux:** Totally.

**Kevin Ball:** Is this able to consume modules that don't use ES6?

**Brian Leroux:** Yeah, in theory you could do this with Rollup. We're just writing ES6 modules for our client-side JavaScript. I really hope Node gets their ES Modules support up sooner. It's a shame that TC39 didn't pave that cow path. We're here today, so there's no point in reliving the past... If only the million existing models had been taken into consideration... But it's a problem.

We're using Preact actually largely because they do nice ESM builds for us. You have to curate your choices, or you end up retranspiling back from Common.js to ES Modules, which adds build time and creates overhead, and creates obfuscation also. Look at the result of a build Webpack app and good luck debugging that.

**Kevin Ball:** Yeah, okay. So you're still in essence using a build step, but you're just doing it in a deferred manner.

**Brian Leroux:** Yeah.

**Kevin Ball:** So what are all of the benefits that you end up seeing from this? ...if you were to spell them out.

**Brian Leroux:** \[07:59\] We're not thinking about how this build works. The build script that we wrote I think is clocking in a rough 80 lines of code, which I thought would probably change and modify a lot, but we've been with it for almost a year now, and I'm very happy... As we add new modules, we just add them. When we're debugging, we can add a flag - and I'll show this in my talk - where we'll allow the waterfall to happen.

So even in production, we can say "Alright, we don't want the fingerprint of file 302 redirect all the way to the original source files." And then when we do that, we set no cache headers, just to make sure that we don't bite ourselves in the foot... And it works great, because we're debugging the real source. There's no source maps, there's no translation step. We're just writing the code that we expect to write, and we see what we expect to see.

**Kevin Ball:** Interesting. And then in development you're probably doing that as well. Everything is just built on request.

**Brian Leroux:** Yeah. It just works the way you would expect it to work, instead of having this kind of moment where your source code transformation becomes a problem that you have to solve in your head, where you're like "Okay, how is this gonna build? Where is this gonna build?" No more thinking about that, we're just throwing files up.

**Kevin Ball:** That's pretty cool. So you mentioned this is something you built yourself for Begin. Is this open source, is this something people can play with?

**Brian Leroux:** Yeah, I extracted it just today, and I'll be open-sourcing it with my slides. It's actually not a lot of code, it's one Lambda function, like I said, and it's really quite short. It doesn't do a whole lot. It only relies on vanilla Rollup right now. If you wanted to add more things like code mods, or Babel, or whatever, you could; you would slow it down in that process, but... Yeah, it's just one Lambda. You could run that anywhere Lambdas run, which is mostly AWS, but Netlify has an answer for that, too. Yeah, it works.

**Kevin Ball:** That's interesting. I'm in this JAMStack world these days where I'm thinking about pre-compiling everything, and I'm like "Okay, there's the benefit of you can cut through", but maybe when you push it out, you automatically hit all those things just to regenerate the cache anyway. But then you're back to a build step.

**Brian Leroux:** You are... And maybe that's okay. I think we're always gonna have one, because of this caching thing. When we were doing this initially, we didn't have any build step, we just had a lot of modules. We were like "Okay, this works", but we started to fill the waterfall. You'd have a module, that downloads a module, that downloads a module... So we solved that by moving all of our manifests up to the top, and we do all of our imports in one file. HTTP/2 is supposed to do it; it would download all the modules in parallel, and then the graph would resolve a lot faster. It worked, but all the devs had to know and remember to put things back at that top level, and one bad waterfall can ruin the whole dev experience.

Worse, you can't control proxy caching. If you use a CDN, these things will cache stuff forever... And if you name your file something benign like "shoppingcart.js", that might be the only file they ever get for the rest of their life from that browser. And if you need to make a change to shoppingcart.js, that user might never see it. So you have to fingerprint these files, and make sure they have a unique fingerprint (usually a SHA). You get this for free with Webpack, and Vue, and all these other ecosystem tools.

We ended up having to add that ourselves, and we did our bundle step with Rollup. It turns out it's pretty trivial, but it's just one of those other things that we had to think about and get bit by to really appreciate what you get out of that build step.

**Kevin Ball:** Yes... \[laughter\] I don't know, I'm maybe dating myself, but I definitely remember having things that I thought were gonna be static forever, and I didn't worry about fingerprinting, and then having to go and rewrite everywhere that loaded them to add a query param to something... \[laughs\] And busted caches everywhere...

**Brian Leroux:** Yeah. Different operating systems and different users... We found that out from a user in Boston, so they must have had a proxy at their ISP level, or something... It was a painful day. That said, adding all this stuff back wasn't too bad either, and it built my appreciation for why we do these build steps. \[laughs\]

**Kevin Ball:** \[12:10\] Yeah, for sure. I wanna explore something else that you've worked on.

**Brian Leroux:** Oh, yeah.

**Kevin Ball:** We were talking a lot about using Lambda functions and things like that, and I was looking at Architect, which I think is also... Is that right?

**Brian Leroux:** Yeah, yeah.

**Kevin Ball:** That's your baby, or one of them...

**Brian Leroux:** I'm a maintainer on it. I'm not the sole individual dictator on that project. One of the drivers of it - it's a solution for making AWS a little more tenable. Amazon is an amazing ecosystem. It's the largest cloud provider by far, and it's not getting smaller, and it's not getting easier to use. And when you go into that console for the first time, it's extremely intimidating.

**Kevin Ball:** \[laughs\]

**Brian Leroux:** There's services all over the place. I had to write out this document the other day to explain how to set up DNS, and it involved four services, and there's nothing you can do about that. You need certificates from ACM, you need to put your records in row 53, you probably have a CDN at CloudFront, and the amount of configuration it takes to set these up is... It's a lot, and it's intimidating. So this is why there's a lot of solutions out there to make AWS more tenable, and Architect is one of those.

**Kevin Ball:** I was looking at it, and at least the marketing for Architect seemed very focused on serverless JAMStack-style stuff. Is that an accurate representation?

**Brian Leroux:** It's for webby stuff, and you can do JAMStack stuff... I think it's a fair(ish) way of looking at it. A lot more dynamic though. We do the wild and crazy thing -- we put a Lambda function at the root apex of our website. And that Lambda function serves HTML -- I know, it's wild... At first everyone's like "What-- can you do that?" Yeah, you can serve text, you can even serve JSON, and JSON and HTML are both text. Why would you do this? Well, maybe you want a server render stuff, maybe you wanna dynamically render things... And you have to remember, we're putting it behind the CDN, so you're not hitting it millions of times, you're hitting it once, and it's getting cached ideally forever.

**Kevin Ball:** Right.

**Brian Leroux:** So Architect allows for the JAMStack pattern, but it goes a little bit beyond that, in that you can do anything that you can do with CloudFormation. We paved the path for doing DynamoDB, Lambda functions and background tasks using SNS and SQS, make that really easy... So this kind of encompasses the core of what you would need for building a web app, traditionally anyways. You might need a database, you might need background tasks that are long-running... If you don't need those things, absolutely don't do that. But when you do hit a certain point of scale or a certain amount of sophistication with your application, you're gonna need to do these things... And when you do, going into Amazon seems like a pretty big ask. So Architect just paints over the CloudFormation, it has a high-level manifest format, it's plain text, you can read and write it, and it generates CloudFormation under the hood, which is Amazon's blessed way of generating infrastructure.

So we see build times for like a new project, we can get one spin up in just under a minute. That includes a URL. Within ten minutes you can have a database and a background task server rendering the whole enchilada... And it's all open source.

**Kevin Ball:** That's pretty freaking cool.

**Break:** \[15:43\]

**Kevin Ball:** I was looking at it -- I've been doing a lot of work in Kubernetes recently, and I was like "Holy smokes! This looks a lot simpler!" \[laughter\]

**Brian Leroux:** Yeah... In a way, Architect was a little bit of an allergic reaction to the container thing. I don't wanna trash on any technologies, I don't believe in zero-sum thinking; I think tech's all additive... But if you have a monolith and you're load-balancing it, Kubernetes is probably the way to go. If you're starting a greenfield project today and you wanna build it serverlessly, you probably do not need Kubernetes or wanna even get near it... And it's totally okay. If you're using Kubernetes, it's totally fine, if that is something you think you need. But we probably don't need it for most webby use cases anymore. It's more for traditional application server type things.

**Kevin Ball:** Yeah. So maybe you can talk through a little bit... Because my head is still very much in -- even as I have some projects that are kind of microservicy, but still, I'm running a bunch of web servers...

**Brian Leroux:** Yeah, yeah...

**Kevin Ball:** And that is not necessarily the architecture of the future that we're talking about here... So what goes into thinking about a modern webby architecture from your perspective?

**Brian Leroux:** Yeah, so the beauty of the function is the primitive lets us step away from that metaphor of a server or a monolith... So now every route in your application can just be a function that responds to an HTTP request. And it's a little bit weird way of thinking; if you came from the Node community, you might be used to the small modules world. The sort of joke I like to say -- people will be like "Oh, now you have all these functions, all this different stuff, and it's hard to manage..." But a Rails app has a lot of functions too, it just doesn't have any isolation between then. And that's a key thing to note, because this isolation allows parallelization. So we can deploy functions in parallel.

When you're deploying a monolith, you deploy the whole thing all at once, and if it's a big thing, it might be multiple gigabytes. That means multiple minutes - if not an hour - before you've rolled all your fleet of orchestrated servers. With Lambda functions your deployment time is as long as your largest function, which is usually sub 5 MB. And if you have hundreds of these, they still all deploy in parallel, so you get these super-fast iteration speeds.

The isolation also just gives you better security, and you don't have to think about patching servers, or maintaining your runtimes, or Canary deploys where you're having rolling deploys going across fleets of servers... Once you deploy, you're online and you're ready to go. It's a whole new model, and I think the main problem with it is it's just so much faster, and you tend to start experimenting maybe a little more than you would have in the past...

**Kevin Ball:** \[laughs\]

**Brian Leroux:** ...and you can go crazy, and be like "Well, it's cheap to replicate this stack, so why don't we try out that experiment over here?" You can go a little bit wild with it, but I absolutely love it, obviously. I'm gushing right now...

**Kevin Ball:** So if someone who's new to that world or new to development in general and doesn't have a strong conception of how would go, where would you point them to start?

**Brian Leroux:** \[19:53\] I think arc.codes is the website; it's a good place to go. That's our open source core, and how we build stuff on AWS. If having an Amazon account seems like too much or AWS seems like too much, Begin.com is our answer to that. If you go there and sign up, within 30 seconds we'll have a serverless app deployed on our AWS account, and you can eject at any time; it's a standard CloudFormation under the hood, so you can run it on your own Amazon whenever you want. Our hope is that you'll choose to upgrade and you'll stick with us, and let us continue deploying to either ours or your Amazon... But that's probably the easiest way to get started. It's a big world, it's a long journey, and there's a lot more to the web than just GET request; there's also POST, and other things that you can do... And maybe eventually you'll outgrow just building static sites and wanna get into these more hardcore tools.

**Kevin Ball:** So you've been talking a lot about AWS; arc.code is open source...

**Brian Leroux:** Yup.

**Kevin Ball:** Does it compile down to other back-ends, like running on Google Cloud or Azure or some of these alternative areas that have cloud functions, similar to Netlify, or - I think Cloudflare has cloud workers and things like that now...

**Brian Leroux:** Yeah, not yet. And there's not a technical barrier for us to do this per se, but I do think that there are reasons to not pay too much attention to the other clouds... And this is getting massively subjectively personal. I think Azure's got a lot going for it, and I especially think that GitHub acquisition was smart. They're a little bit behind on both infrastructure as code and on performance, for Azure Functions in particular... And the database store isn't quite there yet; Cosmos is looking good, but it's not quite there... I don't even think that serverless thing is on the map for Google, honestly. I know they advertised that it is, but their functions offering is not that great, and they don't really have an infrastructure as code solution. Their solution is use TerraForm, best I can tell, which is adding another dependency...

So I'm not super-excited about the other clouds yet. And I'm not saying that they're not gonna be great eventually, but if I'm going to choose a cloud provider and my solution to lock-in is to not choose Amazon, that's not very smart... Because the way things are gonna go here is that it'll consolidate and there will be a few winners, and we already know who one is...

**Kevin Ball:** \[laughs\]

**Brian Leroux:** So Amazon's kind of a safer choice... My last big gig I worked on was in mobile, and I remember in 2007 when I saw that iPhone for the first time, I was like "Oh my god, Blackberry is in trouble." But you know, I think they're gonna be able to pull this off. And that was a credible thing to think at that time, as a Canadian especially... But you know, time was not too kind for Blackberry's mobile story. I think right now we can say safely that AWS is the iOS, but we don't know who the Blackberry is.

**Kevin Ball:** Interesting.

**Brian Leroux:** I'm playing it safe, I'm de-risking, and I'm doing the boring thing by choosing the market leader. That's my personal, subjective view. I'm sure the comments are gonna be interesting on this one, but... Anyone else that's competing with Amazon - you're risking that they might go away.

**Kevin Ball:** Yeah. As people start to see serverless as the future, and pushing everything out to the edge, they're saying "Oh, we don't actually need all of AWS to compete anymore."

**Brian Leroux:** That's right.

**Kevin Ball:** "We just need to provide a few things, and we're ready."

**Brian Leroux:** I agree with that, and that's how we approached it with both Begin and Architect. I think Architect supports 12 AWS services of the 370-odd that they have... And that's something that Amazon can't do or say. Amazon's never gonna say "Don't use 90% Amazon", but that's something that I can say as an individual, that I don't need EC2. It's not helpful for me anymore. I understand that it exists; if it's working for you, that's great, but if I'm building a website, I'm not spinning up an EC2 instance ever again... And you can do that with any of these things, for sure. Subsetting...

**Kevin Ball:** \[24:13\] Alright. So we've talked about Architect, what it is today, we've talked a little bit about Begin, we talked about this idea of progressive bundling... What do you think is next on the horizon in this space?

**Brian Leroux:** Oh, boy... Well, I think data gravity is an interesting thing to talk about and think about. A lot of people are getting really excited about GraphQL, and rightfully, because it's unlocking databases for the front-end. And there really hasn't been a breakout new way to understand or do this. I think Fauna is kind of interesting; I'm personally a huge fan of DynamoDB... But where our data is and being able to get our data fast remains a massively unsolved problem. And who owns that data, and how do we access it from multiple places - because it's not just a website probably accessing it; you might need to ad-hoc query it for the business guy, or you might need to replicate it.

So I think the big, new interesting thing is gonna be "How do we deal with all these data sources? Where do those data sources live? How do we interact with them?" Because there's no clear standards here. I think everyone can agree we don't like trying to scale MySQL shards... \[laughs\]

**Kevin Ball:** I will agree with that...

**Brian Leroux:** And I think that's where the agreement ends.

**Kevin Ball:** \[laughs\]

**Brian Leroux:** After that, someone might say GraphQL, someone else might say "That's preposterous! I don't need multiple disparate data sources. I just need one." And I don't know that anyone is right or anyone has a real answer for this. It's a tough problem.

**Kevin Ball:** Yeah, that is an interesting -- so I think of GraphQL as it's almost an interface layer, rather than a storage solution, in some form...

**Brian Leroux:** Right, totally.

**Kevin Ball:** That's almost an extension of the state management solutions we have in the front-end, just taking it a little bit further... But it doesn't solve the "Where am I putting it?" problem. In fact, it hides it.

**Brian Leroux:** Yeah, yeah. \[laughs\]

**Kevin Ball:** So... That's nice; okay, we in the frontend may not have to care about that, but if you're talking about "What does the web-native architecture of the future look like?", we still have to make those decisions.

**Brian Leroux:** That's right.

**Kevin Ball:** GraphQL doesn't fill that niche.

**Brian Leroux:** No, and I remember the first brushes I had with it; everyone would say "Just use GraphQL" and I realized I had to write all the resolvers...

**Kevin Ball:** Yeah, exactly.

**Brian Leroux:** So really, what you're saying is "Just write your data access layer twice", which is not a benefit to the backend team... \[laughs\] That's a downside.

**Kevin Ball:** No, I mean... GraphQL does some really interesting things, especially when you look at network-constrained situations, where you can say "Okay, with GraphQL I can resolve all of my stuff within my fast network, inside of my cloud, and only send you the minimum possible that you need over the slow network." That's pretty cool. That's really powerful for mobile, that's really powerful for web, in bandwidth or latency-constrained situations.

**Brian Leroux:** Totally.

**Kevin Ball:** But yeah, it's not a back-end solution.

**Brian Leroux:** No, and also the client-side resolving subscription thing is still a little bit janky, feels a little bit weird. Mutations still feel a little bit weird... So I think there's work to be done. There's a lot of work to be done in this world, especially now that data is cheap... And the clients are getting more powerful, and they're staying on longer, and they've got local storage... There was this project PouchDB back in the day that did a lot of awesome sinc-ing with CouchDB instances. It felt like we were getting close to some answers in how we would do these peer-to-peer apps that way, but... It recently feels like we sort of stopped the conversation at GraphQL. It hasn't really matured that much, and it's because it's a tough problem.

**Kevin Ball:** \[28:03\] Yeah. And we keep trying to push readable data out as far as we can to the edge; get as much as possible out, distribute it on CDNs, so that you don't have to do a bunch of network ops or anything like that to get it. That doesn't really work very well for mutatable data

**Brian Leroux:** Yeah, yeah... And I have no answers for this...! \[laughter\] No idea. I mean, we've been playing with doing our own sort of subscription stuff with API gateways, WebSockets... It's definitely Wild West right now; there's no good answers.

What I do like are patterns like Redux, and having a single state atom and being able to update that dynamically, and have my tree re-render in a way that I somewhat expect it to re-render... All that -- that feels like we've done a good job, we've figured that part out, but... I still don't know about the transport, I still don't really know about the query language, and I still don't really know about the persistence part. Those are big, open questions. Sorry, I don't have any answers...

**Kevin Ball:** No, it's okay... \[laughter\] Well, I don't either. Otherwise I wouldn't be asking you... But it is interesting. So one of the things that strikes me about what you've just mentioned is the part that feels right to you is that we've moved to this state-driven, declarative approach for the UI. And actually, that was one thing that I didn't mention earlier, but I noticed about Architect when I looked at it - it looked like essentially declarative infrastructure management...

**Brian Leroux:** Very much so.

**Kevin Ball:** ...where you're saying "This is what I want. Make it happen."

**Brian Leroux:** Yes, yes. That's important to me. And there's a little bit of debate about this in the serverless community right now. What everyone can agree on is CloudFormation is verbose and complex and brittle... And some of that is downstreaming is the fact that it's often written in YAML. So if you have a really large YAML document that's deeply nested, and you miss one space, it's still gonna be valid YAML, but it's not gonna be a valid CloudFormation, and you're gonna have a bad day.

**Kevin Ball:** Did I mention I've been using Kubernetes a lot?

**Brian Leroux:** Yeah, yeah... \[laughter\]

**Kevin Ball:** Same problems...

**Brian Leroux:** So it's a bit brittle, and brittle is the same as broken, and broken is the same as slow... And that's tough. Architect - we define our own manifest format, a .arc file, which you can read about on the website. It's extremely terse, and it discourages both syntax and nesting. And we generate CloudFormation from that, so we know we always have a good CloudFormation document on the other side. And that's good, and that's working well for us.

Recently there was a startup called Pulumi, which I definitely recommend people check out... And they took infrastructure as code more literally, and they said "What if we wrote the infrastructure in an imperative programming language of our choice, and it generated CloudFormation documents?"

**Kevin Ball:** Is that like Chef 2.0, or whatever? Or Puppet, or how those things used to be--

**Brian Leroux:** Yeah, Puppet, or Ansible, SaltStack... Yeah, a little bit.

**Kevin Ball:** I will say, Kubernetes is a step up from those. \[laughter\] Because Kubernetes, while it's YAML and it's ugly, it's declarative, and that is really nice.

**Brian Leroux:** Yes. It's deterministic, it's statically-analyzable, it's easier to test, and you know if you've got something wrong before you deploy, which is a good time to know.

So the Pulumi way obviously got people at Amazon excited, because they immediately cloned it, like they do... \[laughter\] They created a thing called CDK, which I guess stands for Code Development Kit. The CDK lets you write in TypeScript, Python, and probably other languages, but those are the ones that people would be most interested in. You run a command called "synthesize" and it'll turn your imperative TypeScript code or your Python code into a CloudFormation document.

\[31:53\] I only have one use case for this, and that use case is I need 100 Qs. I don't wanna write Q1, Q2, Q3. That's a pain in the ass. But otherwise, introducing state into the declarative manifest feels a lot like embedding Bash in YAML scripts. We did that a lot back in the day because we had to, and it always felt bad and it always burned us, and we always knew it was wrong... And I sort of feel like these imperative solutions are taking that path. And the reason people are adopting them is because they get all the tools they get with their imperative language. It's nice to have TypeScript at your back when you're typing out a large object hierarchy, for code-completing for you... Which you don't get that out of the YAML files.

Architect solves this by being terse, so it's just like an extremely readable/writable format. Ten lines turns into hundreds of thousands of lines of YAML kind of thing... Not quite, but it seems that way. I think that's why the imperative things become popular, because the tooling is so good. I feel like it's gonna kick off a generation of people realizing why declarative is good again, so... Sort of waiting to just let that story play out. \[laughs\]

**Break:** \[33:16\]

**Kevin Ball:** In so many ways it sounds like the argument that's played out at least three times in the front-end world, between like "Do everything in JavaScript!" No, it's actually viable to have templates, and markup, and CSS. "Oh, but with JavaScript you have the power of an imperative language" - yes, and that power will hurt you.

**Brian Leroux:** Yeah... And configuration management is almost more dangerous. We like to talk about how code is a liability, which it definitely is, so you wanna minimize it. Less code to do the same job, less surface area for problems. Pretty simple why do we wanna keep our dep tree small.

Configuration is also a liability. It's a runtime dependency, and if you have lots of it, it's brittle and dangerous, because you can automate destruction. \[laughter\] You can literally wipe out fleets of databases, or whatever...

**Kevin Ball:** Yes, that is true.

**Brian Leroux:** ...and that is extremely powerful, but extremely dangerous, too. I think the answer is "Do what's feeling right for your team, and try and do as little of it as possible." Don't think there's necessarily a right or wrong answer here. Some teams prefer OO style, and they get good mileage out of that, and they like to be encrusted in tools, and code completion... And that's fine. Some people prefer a more functional style, which is separating your data from the things that act on it, and having pure functions... And I think that declarativy style is also good. It needs less tools, it usually is more terse, it requires digging deeper and understanding what that code is doing, because there's less information hiding going on. It's not really an either/or, it's really where you're comfortable and what you wanna do with your team.

**Kevin Ball:** Makes sense.

**Brian Leroux:** That's the safe answer. I prefer declarative stuff myself.

**Kevin Ball:** You can take a strong opinion... I mean, it's very true. You do what's working for you. At the end of the day, what matters is you ship something that works.

**Brian Leroux:** That's right, yes.

**Kevin Ball:** \[35:57\] Your customers don't care... I mean, you could be writing Fortran, and if you're writing Fortran to generate web apps right now, I'm shocked, but I'm impressed. And your customers don't care.

**Brian Leroux:** Somebody is doing it. Somebody is generating JavaScript from Fortran right now. I guarantee it. It's probably happening.

**Kevin Ball:** I know... Or COBOL, or something...

**Brian Leroux:** Yeah.

**Kevin Ball:** At the end of the day, if your productive and your customer gets what they need, who cares...?

**Brian Leroux:** Yeah, I totally agree.

**Kevin Ball:** I wouldn't wanna work on it, but... I don't have to. You're the one working on it.

**Brian Leroux:** \[laughs\] And that does become an issue, right? ...for hiring, and stuff. And perception. I've noticed people apologize for PHP. It happened today on stage at this conference, and I was like "What's to apologize about? All the top websites in the world are running PHP right now." And it's almost gatekeepery...

**Kevin Ball:** I don't think Google uses PHP.

**Brian Leroux:** Google probably not.

**Kevin Ball:** They're a C++ and Python shop, right?

**Brian Leroux:** Yeah... Well, they love their Java, too...

**Kevin Ball:** They do love their Java.

**Brian Leroux:** There's no accounting for taste. \[laughter\] Now I'm being the gatekeeper; I was just gonna say I shouldn't be... But I think Craigslist - PHP; WordPress, Slack, that Facebook thing - if it's gonna be around much longer... Who knows. \[laughter\]

**Kevin Ball:** I mean, yeah... If it gets the job done, it gets the job done. We get to choose what we work on. If you're listening to this podcast, I'm betting you probably work in JavaScript, so... We can make fun of Java all we like. \[laughter\] No, I'm sure a bunch of folks use Java as well... And it is a powerful language. I mean, all of these - they're powerful languages. The Java ecosystem is incredible.

**Brian Leroux:** Oh, yeah. And these things are coming together. I remember when I was writing Java there was no way no how ever gonna be a concept of a Lambda inside that language... And yet today, here we are, Java has Lambdas, JavaScript has classes... The world didn't end. We can do both these things in either way. Or we can just rely on their ecosystems. The JVM ecosystem is amazing, huge and powerful, and you don't need to write Java to access it. You can write Clojure, or Kotlin seems to be quite popular right now in the Android community, and I'm certain there's good reasons to use it.

**Kevin Ball:** I wonder if anyone has tried compiling the JVM onto WebAssembly yet.

**Brian Leroux:** Oh, my god... \[laughter\] I did hear that someone was working on compiling a Flash player into WebAssembly, and I felt my hair literally fall out... \[laughter\] JVM in the browser - that's...

**Kevin Ball:** How much memory does that thing take?

**Brian Leroux:** It can't be any more than Slack. \[laughter\]

**Kevin Ball:** But that would open some interesting doors, right? Because suddenly, all these people who've been living in the JVM ecosystem because they can access anything can run all that stuff in the browser.

**Brian Leroux:** Yeah, that is interesting. It's definitely possible. I know Clojure has ClojureScript, and Clojure also runs in the JVM...

**Kevin Ball:** I think that's different, because ClojureScript is a compile-to-JavaScript language...

**Brian Leroux:** It is, yeah.

**Kevin Ball:** ...which is different. I'm just saying, JVM is a runtime...

**Brian Leroux:** Literally compile that into the --

**Kevin Ball:** Literally compile the runtime to be running on WebAssembly. I mean, it would probably be slow, because you're doing a runtime on top of a runtime, and how many levels of virtualization can you get, but...

**Brian Leroux:** Turtles all the way down... It's more of a social engineering thing, but in a way, this is what TypeScript is. In a way, in a way...

**Kevin Ball:** \[laughs\] Okay, say more...

**Brian Leroux:** Well, it's a classy-typed thing, that's what that is. It's in the Java heritage.

**Kevin Ball:** Kind of... I feel like TypeScript - they approached classes from a very web-friendly... Like, taking into account the legacy of JavaScript.

**Brian Leroux:** \[40:03\] Yes...

**Kevin Ball:** Classes in TypeScript don't make me scream in agony the way that classes in Java do.

**Brian Leroux:** That's true. And you're not forced to implement every version of an error...

**Kevin Ball:** I mean, I think I actually resisted TypeScript and related typed languages for a long time because the first programming language I ever -- well, the first language I took in college was Java, which is why I did not study Computer Science in college... \[laughs\] Because I went to this into CS course in Java, and it was terrible. Which, once again, if you like Java - no offense. Different minds work in different ways. But for me it was terrible, so for a long time I just tried to stay away from it. I was in the Ruby world, I loved Python... I don't mind some amount of types, but - like duck typing, or casual, or what have you... But modern languages with types are actually not like Java.

**Brian Leroux:** No. Totally.

**Kevin Ball:** TypeScript is awesome, Go is awesome... And they're fully-typed.

**Brian Leroux:** Yeah. And I think there's a difference in the programming style a little bit, too. Where it drew me in was the docs, and TSDoc. Having that declaration at the top of a file that tells me what the hell a person is - that's extremely useful. I'm not hunting in the code, looking to figure out what the properties on that object are. It's almost more like schemas, and... Yeah, I quite like it for those reasons.

I think the vibe of it though is similar, in that you get the same stories that you heard with Java. You get tooling, and code completion, and you get static analysis, and therefore it's conceptually faster. And those are benefits that Java pioneered, and Microsoft copied in C\#, and again with TypeScript.

**Kevin Ball:** Yup. Fair enough. I don't know, I've gotta get Nick Nisi on here.

**Brian Leroux:** This is gonna be very dramatic...

**Kevin Ball:** Nick is a TypeScript fiend, so he would be going hard. I'm a TypeScript dabbles; I still do most of my frontend stuff with vanilla JavaScript.

**Brian Leroux:** Yeah, and I'm not saying one way is necessarily good or bad. I'm speaking to more my own subjective thing with it... We use it. We use it mostly for TSDoc and for documenting our function payloads, and it's been great for that.

**Kevin Ball:** And one really nice thing about the way they did TypeScript is you can progressively adopt it.

**Brian Leroux:** Yeah.

**Kevin Ball:** You don't have to use all the things, you don't have to implement all the things to have it work, right?

**Brian Leroux:** Yeah... That was the problem with Java - forcing you to implement errors to satisfy its compiler.

**Kevin Ball:** Yeah. Cool. Anything else you wanna talk about while we're on?

**Brian Leroux:** I can't think of anything... I guess I should plug Begin. Try out Begin.com, try out Arc.codes. If you find a bug, hassle me on Twitter. I'm a chill person, I'm not mad if there's an issue. In fact, I'd prefer if you did tell me... \[laughs\]

**Kevin Ball:** But be kind. We always emphasize "Be kind." Tell him the issues there, but be like "Sorry to bother you..." Nah, I'm just kidding.

**Brian Leroux:** No, no, no. You can yell at me. I have thick skin. But yeah, we should try and be nice to each other, for sure. I did have a friend a while ago tell me that they'd tried out Arc, but they found a bug, and they didn't wanna say anything. I was like, "No... That's actually the worst thing." \[laughs\]

**Kevin Ball:** Yeah. Don't find a bug and then don't say anything and just go away. Find a bug, file a bug report, and it'll get fixed.

**Brian Leroux:** Please. Yeah.

**Kevin Ball:** Sounds good. Awesome. Thank you, Brian.

**Brian Leroux:** Thanks for having me.
