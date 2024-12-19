**Adam Stacoviak:** Well, Kurt, are you cool with just pretty much anything? You can tell me when there's limits, too. Like, we do edit. So if we're going down a road that's like two TMI...

**Kurt Mackey:** It's like, almost all the things I'm working on now are at risk of like pissing someone off. It's actually kind of funny... It's the downside to trying to decide who gets money and who doesn't.

**Adam Stacoviak:** Okay... That's a good place to begin then. Fly is one of our tried and true sponsors as well, so let's get that out there.

We love the fact that we here at Changelog use Fly. We are hosted on Fly.

**Kurt Mackey:** Yup.

**Adam Stacoviak:** Our listeners are well aware of this, so having you on a full length podcast will be welcoming, but at the same time, hey, they're also a sponsor, so make sure you mention that.

**Kurt Mackey:** Yeah, pay for play, you know? It's just like, I'm not interesting to talk to unless there's a check attached.

**Adam Stacoviak:** Well, thankfully, there is no check attached to this episode here, which is why I put that caveat out there. And I say that because we've gotten emails about other platforms saying "Hey, I know you're sponsored by and you use Fly, and all that good stuff, but would you mind having us on your podcast?" And I'm like "Of course!"

**Kurt Mackey:** Right, no kidding.

**Adam Stacoviak:** Yeah. I mean, we want to talk about everybody. Just because we chose Fly and just because we have this deeper relationship doesn't mean that we don't think there's other platforms or things to cover for developers.

**Kurt Mackey:** Yeah. I do think you should invite me on as well when they come, though...

**Adam Stacoviak:** Really?2

**Kurt Mackey:** Just to just -- I'm just kidding.

**Adam Stacoviak:** That'd be kind of cool, honestly, though. I think developers would honestly appreciate not so much a debate, but a non one-sided conversation between folks like you and others like you that are building platforms like Fly, to enable developers to do what AWS is not innovating towards, let's just say. Right?

**Kurt Mackey:** I wonder how you could do that with a bunch of people that are just going to give you the political nice answers, and actually get some kind of disagreement going.

**Adam Stacoviak:** Yeah. I'm down with that. I'm down with that.

**Kurt Mackey:** It'd be fun to talk about -- I think if you talk to all of us, we're all think we're doing something different... And then really like find those differences in what future we think we're working towards would be kind of an interesting... Like, Jake from Railway and I - I don't know what they think they're doing. I know what we think we're doing. I bet it's not even close to the same, even though it looks the same, sometimes.

**Adam Stacoviak:** Yeah. And they've been doing great, too. Railway is an example, Render is an example... Can't think of any others that really is on the top of my list... But you can name off competitors if you'd like. I mean, if that's how you do things. Whatever. I won't stop you.

**Kurt Mackey:** Oh, sure. \[laughs\]

**Adam Stacoviak:** AWS...

**Kurt Mackey:** There's still all the old school server companies that are like -- like, Vulture is not old school, but they kind of come across more like dedicated servers than modern clouds. But Vulture, and Hetzner, and OVH, and... I don't know who's -- usually, they end up sounding budget, because it's like their cost comparison, but a lot of them are doing really interesting stuff. So that's cool.

**Adam Stacoviak:** We talked about Hetzner recently with - just really in passing, with David Heinemeier Hansson. Does that name ring a bell to you? Do you know who that person is?

**Kurt Mackey:** No. Is that --

**Adam Stacoviak:** I think his acronym, or short name...

**Kurt Mackey:** Is he a politician?

**Adam Stacoviak:** His nickname's DHH. No, that's a race car driver.

**Adam Stacoviak:** He's a race car driver. Yeah.

**Kurt Mackey:** Ugh, rich people...

**Adam Stacoviak:** I think he may have been part of a framework creation. I don't know. I mean, I don't know.

**Kurt Mackey:** Yes. He also threw shade at us on Twitter one time while we were having issues, which is not anyone's favorite, so...

**Adam Stacoviak:** Oh, man...

**Kurt Mackey:** ...we are at odds, and he doesn't know it!

**Adam Stacoviak:** But now he does!

**Kurt Mackey:** No, he's probably not even gonna listen to this. Are you kidding? He's not gonna know...

**Adam Stacoviak:** He does listen to the show. I think he listens to the show. He might listen to this show.

**Kurt Mackey:** We should talk about what he said on Twitter about us, because I actually think his take on this stuff is fascinating.

**Adam Stacoviak:** Say it. What did he say?

**Kurt Mackey:** I think we had an outage... So the nature of our platform - and this is part of the problem with AWS, is if you're doing one simple thing and you buy, call it a laptop to run it on, it's gonna actually work really reliably, because no one else is messing with that laptop. There's no other people on there that can possibly ruin the experience. It's probably overpowered for what you're doing, and there's very few moving parts. And so us and every other cloud ends up with these things that literally every customer impacts in some way... And so ours is our -- we have this global proxy. So every request that comes to Fly goes to the same cluster of basically Rust proxies, that sit on something like 100 servers we run right now. Or more, like 200. Maybe 300.

**Adam Stacoviak:** Wow.

**Kurt Mackey:** All of my server numbers are wrong. By the time you listen to this, I'll be more wrong. But I'm just wrong because I'm always like --

**Adam Stacoviak:** \[08:06\] It's like doubled since you've talked, yeah.

**Kurt Mackey:** ...eight months behind. So we have all of these servers running a Rust proxy, and every request on the platform and every TCP connection on the platform goes to this basically one project, that's complicated. And the two things that happen there are, one, one person can find - by accident usually; it's not like a security -- usually, the security and the DDoS vectors we've guessed about and done a pretty good job of mitigating... But what happens is when people actually run real apps to get any kind of volume, they do things that nobody would have predicted. And so I think the whole adventure of building a cloud is building this thing, getting people to use it, seeing how it goes wrong when they use it in a way that you didn't expect, and then adjusting for that, and then doing it for the next 100,000 customers that are going to do that thing. And so ours is our proxy, and that's the thing that has failed in the ways that we couldn't predict most, and affected the most users at the same time. Because if a proxy has issues, people's apps stop serving requests. That's literally down for them.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** And a lot of stuff -- ironically, when I ran a database hosting company and AWS had issues like this, and then our databases went down, nobody actually complained to us, because their apps already weren't working. Like, the database is actually the last thing that people go check on when their app's not serving traffic. And so we were sort of insulated from it. But now that we're at the front of the request cycle between them and their users, it's a lot more sensitive position to be in.

Anyway, so DHH's thing was something like -- I think he called them merchants of complexity, or something... Which I thought -- we like our strong phrases here. But the general thing he's talking about is our global proxy is really complicated, because it has to be to serve the needs of a million people running apps at a given time. And when that goes wrong, it takes your apps down in a way that you don't need it to be that complicated for your own specific purpose. It's that complicated by nature of having to service a million different customers like you.

And so if you put something like HAProxy, or one of the modern -- I just blanked on all of these things... Anyway, if you put something like a load balancer in front of your own stuff on your own servers, and you're the only user, you're just not gonna have that scale of issues. So that's roughly what he was going after us for.

My general take - I'm kind of sympathetic to the merchants of complexity thing. I think he applied it to us sort of unfairly, because there's parts of our stack where we're kind of forced into this... But the real thing that I've also been wary of is there's a lot of reasons a lot of people would sell you very complicated infrastructure that you don't need, to make a lot of money. And like for a long time, Kubernetes sort of fell in this thing. But there's stuff like giant -- who's the best example of this? You remember Hortonworks?

**Adam Stacoviak:** No, that doesn't ring a bell.

**Kurt Mackey:** Hortonworks was -- I think it was Hadoop. Anyway, they made a lot of money by selling a lot of Hadoop to companies, and nobody actually needed what they were selling. It was kind of a flash in the pan company that got really big, really fast, because they were way better at selling something, and way worse at building something anyone needed, if that makes sense... And so to me, the merchants of complexity should be applied to people who are kind of like overselling what you need for your particular application... And I would be a little more hesitant to say it about infrastructure that by the nature of what it's trying to do has to be complicated, if that makes sense. Because we're not gonna run -- there's no feasible way for us to do the things we do with our proxy, and run a bunch of HAProxy instances for people. We actually tried that. One of our actual big priorities when we do cloud features is to isolate what customers are doing as far as possible, and make it as close to running an isolated environment as we can possibly get.

**Adam Stacoviak:** Was this recent, or was this a while back?

**Kurt Mackey:** Everything over the last two years feels recent. I feel like this was like six months ago, eight months ago, something like that.

**Adam Stacoviak:** \[11:53\] Okay. I just googled "merchants of complexity" and landed on a Hey World post from David. I don't see Fly being mentioned in the article, but maybe it was a shadow proxy mention, I don't know, kind of thing. Talking about what it means to hard sell etc. One thing I like about David, honestly, is that he is so passionate about his opinions that you tend to, when you're in conversation with him, want to believe and agree with the things he's saying...

**Kurt Mackey:** Yup.

**Adam Stacoviak:** But then when you think about it afterwards, you're like "You know what, I don't really agree with that one fully, or that one fully..." But what I really appreciate is that he thinks really thoroughly about his hard opinions. That's what I appreciate; more than his wrongness or rightness at all, really, is just the passion for thinking deeply about what you believe, and being bold enough to share it. That's the number one thing I think I appreciate about him, especially leading Rails, as - iit's like a new Rails renaissance happening now. A lot of people are kind of looping back to what was old is now new again, kind of the better way again... And we had him on the show recently and talked about that.

**Kurt Mackey:** Alright, I've found it. If you google "DHH Twitter merchants of a complexity", it'll pop up. It was a retweet. He didn't say those words in that tweet. Somebody was reflecting that back then, but it was about us. It was September 1st. So definitely not six months ago... Which actually gets me to another thing. It's funny, because an individual dev's perception of when they have a problem is that our whole platform isn't available... And that's almost never the case. And so when you start talking about outages and things, it's an interesting -- I've learned a lot about talking to people about complicated infrastructure and how it fails, and how it impacts them. Because I think this week S3 also went out. It's just like, the internet fails. Everything on the internet's gonna fail at some point.

I think for a good solid day, S3 wasn't working the way we needed it to, and it was like a big -- it's interesting, AWS is actually getting a pass these days, because they're the new IBM. Not necessarily getting a pass from DHH other than on pricing, but in general, AWS is the new IBM. You don't get fired for buying AWS. And so when something goes wrong with AWS, obviously that's what's happening to everybody. When you make a bold choice to not use AWS and something goes wrong, it actually is a much bigger deal to people. I'm gonna sound like I'm whining about that, but it's just the way things are. Clearly, I wish that we got the same kind of pass as AWS, but in some ways we haven't earned it... In other ways it's just a really interesting look into the psychology of developers.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** Because the one thing about DHH's tweet here too is people want no downtime, and they also want to spend $0. And so there's this actual tension between even what he's offering; even the $5 Hetzner servers you can run your apps on are more than people want to spend, a lot of the time. And what people actually want is for their apps that don't matter to cost $0, and for their apps that do matter to cost as little money as possible. And actually trying to solve this problem for people is just sort of inherently complicated.

**Adam Stacoviak:** Well, I think it's to some degree, not so much rightfully so, but the downtrend of let's say like even DigitalOcean a decade ago... You know, "Blazing fast on SSDs." They came out with this phrase, right?

**Kurt Mackey:** Droplets on SSDs...

**Adam Stacoviak:** That's right. And they were an early sponsor of ours, and we were early days with them back in the droplet days, when it was a brand new noun in our lexicon, essentially... And they were driving down to like $5. These very fast, blazing fast, on SSD... This whole new revolution. SSD was newer than, a lot newer, and to get to that price point on something that fast... So the state of the market almost makes the user want what you've just described. My insignificant projects to be completely free, and my significant projects to be mostly free.

**Kurt Mackey:** \[15:55\] You know, I actually -- I'm hugely in favor of that though, because I think that... So we've actually started showing people what they can run... There's free-ish, right? Like, we've started showing people how much they can do for less than a dollar a month on Fly... Because I want to build a lot of apps. Developers want to build a lot of apps. I want to put these things out there. I don't want it to cost me a lot of money in 12 months when I've forgotten about this thing, and I don't want to think about it again after I've shipped it. So I'm actually like pretty wildly in favor of almost like cheapium. Like scale to almost nothing.

We used to have a free tier. And what we've started doing instead is telling people "This costs money, but not very much." It's almost like you can run an app for pennies, but it's going to cost you pennies. It's not going to be free. And I think part of the reason for that is because the implication is it'll cost more when it scales up. But it's been a really pretty good move for us to have the free stuff.

And if you've paid any attention to Postgres options, basically Neon's value proposition is you can create a million databases for very cheap... Which is not what people who are running an app on Postgres want. It's not like -- the one thing we've learned about databases is people will pay almost as much money as they have to make a Postgres run reliably, for an app that's important to them. What they really want is to be able to create a ton of databases that are basically disposable, and not spend very much money doing it... And it's really fascinating to me that this is sort of like what Neon's found as a niche. And on the flipside you've got RDS, which has never lowered its price ever, because they've never had to.

**Adam Stacoviak:** Yeah, that's where the compelling part of serverless Postgres becomes really cool, with Neon. And it's funny you mentioned Neon, because Supabase is one of, I think, your partners in a way; I'm not really sure, but you mentioned Neon first, versus Supabase. So at least you're not biased.

**Kurt Mackey:** Well, I feel like Supabase is doing something different. And Postgres for them is an implementation detail, and a growth vector. If you're building in Firebase, it's not portable. When your app grows, you probably want to move to something like RDS anyway, because this proprietary data store is not great for them. To me, Supabase is using Postgres because it makes sense to their customers as they evolve. But Supabase's goal is not to then get devs to use a million Postgreses directly, it's been get devs to use a million applications. And Neon's goal is very much like scale to zero Postgres... Which I actually think is very different than Supabase.

**Adam Stacoviak:** It is from their marketing. So I would say you're not wrong, but you're wrong in your supposition of Supabase, because we've had a conversation with Paul Copplestone on this podcast... And I thought so, too. Because we're fans of Neon. I'm a fan of the idea of serverless. They're one of our sponsors, so this is by no means now -- I just happened to have this glimpse into this world of the compellingness of Neon... And in particular, what they did with Retool. With Retool, building RetoolDB on top of Neon, spinning to zero... I can go on. It's just amazing that Neon built that kind of thing for a player like Retool to build on top of, so that they didn't have to spend a year building the same thing. Just to offer RetoolDB and instant databases. That's my long story short.

**Kurt Mackey:** So I have a hot take here if you want it...

**Adam Stacoviak:** Throw it down.

**Kurt Mackey:** ...which is that if Neon was an easier company to work with, Supabase would be running on top of Neon.

**Adam Stacoviak:** Oh... \[laughs\]

**Kurt Mackey:** Because realistically, Supabase --

**Adam Stacoviak:** That is a hot take.

**Kurt Mackey:** ...needs what Neon has, which is like Supabase needs small Postgres to be cheap. And so because Neon is not as easy to work with as I think they should be, Supabase just... There's just no world where Supabase builds on top of Neon. And I actually have a lot of history here, because when we were pitching Fly to Investors, I had this whole Rebel Alliance idea, of like "We're going to do compute well, somebody else is going to do database as well, somebody else is going to do X well." And the reality is no startups are actually very good at working together, both for good reasons, like they have competing customer priorities, which is why we've not really been successful in using Supabase to offer managed Postgres to our users...

\[20:02\] Because Supabase has entirely different user needs than we do. It doesn't make any sense to make a good Postgres for us. But I think that companies are just -- we're all still competitive in some ways, and in a lot of ways I think that I -- my guess is that Neon sees a future where Supabase doesn't really exist, because they're going to grow to take it over... But the reality is what Neon is really good at is what Supabase could actually take advantage of. That's why they've got the OrioleDB thing going, which is great. I love more open source Postgres alternatives. This is good for me.

**Adam Stacoviak:** Yeah. You mentioned the phrase rebel alliance. I didn't know that was a public phrase.

**Kurt Mackey:** It's been public and not... I had a landing page up and I would talk to individual companies about this... Because to me, it's obvious that I should be focused on being very good at one thing. It's like the Unix sharp tools and pipes, basically. To me, it's obvious that if there's a company that's extremely good at compute, and they're easy to work with, the next hosted database company should just build on top of, but in partnership with them... And the next object storage company should build in partnership with them, and be using that compute, and then our customers use their object storage... Which actually worked out pretty well with Tigris. But that's the only time that's paid -- Tigris and Upstash are the only two companies that this worked out well for us. And I think a lot of this -- in some ways I damaged the company by waiting way too long to do our own managed Postgres, because I was principled about like "We're not gonna do a better managed Postgres than anyone in the world... So we're gonna wait for the right company to come along and partner with us on this." And then what I've learned is what our users don't care about is they don't really need the best managed Postgres in the world. What they need is the best Postgres for Fly apps in the world, which is actually something we should build for them, if that makes sense.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** So Rebel Alliance has been destroyed by the empire, or whatever you wanna call it... That's maybe a good take here.

**Adam Stacoviak:** Oh, dang. It's not a real thing anymore?

**Kurt Mackey:** No, I don't think the world's gonna shake out that way. There's some real practical issues here. Like, for example --

**Adam Stacoviak:** Can you zoom out and explain? I mean, I'm being limited in my -- like, behind the scenes we've had some conversations because of our relationship, and there's things that we've actually purposely not said on the air, because they're your ideas, and they're part of your strategic advantage and what you're trying to do...

**Kurt Mackey:** Oh, yeah.

**Adam Stacoviak:** Can you explain what you're trying to do, so that the context is there for the listeners?

**Kurt Mackey:** First of all, Rebel Alliance is something investors ate up. There's always things you can pitch that you will get a huge amount of funding for, that actually when the rubber meets the road - or whatever euphemism you wanna use - you don't go that way. So the general belief here was that if you take the top 50 AWS services... AWS has like 300 services, and 50 of them are pretty good. And like 10 of them are really good. And so if you take the top 10 AWS services, there's probably a really big startup for each one of those. There's probably a really big RDS startup. There's probably a really big EC2 startup, or Lambda, or whatever you wanna call it. That's us, by the way. There's probably a really big -- what was the other one I was thinking of? There's storage ones, there's DynamoDBs, there's really big caching services... Anything you can provision that isn't -- if you go to like Vantage... You know Vantage, the cloud billing accounting company?

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** They have a top what people pay the most for in AWS. If you look at the top 10, those should just be individual, standalone companies that are building the best possible version of that thing. And the best example I can give of why I think this should be is like S3 was innovative in 2008. It made it so I could build new kinds of applications that I couldn't previously build, which to me is what cloud services should be offering. And then it ceased to do anything. And then ultimately, it's not doing that anymore. S3 features are not allowing me to build new applications I couldn't previously build. But then you've got Tigris, who - I'm 99% sure I'm supposed to say Tigris, but it could be Tigris. I'm gonna check after this, but I'm gonna keep going with Tigris.

**Adam Stacoviak:** I think it's Tigris. I've always called it Tigris, personally.

**Kurt Mackey:** Alright. Well, we'll go with Tigris then, and I'm gonna blame you... Because I think it sounds better.

**Adam Stacoviak:** It's like a little tail \[unintelligible 00:24:01.12\]

**Kurt Mackey:** \[24:05\] Yeah... You know what's funny, is I have hot takes about how people should pronounce their company names, and then I hear how they say it and I'm like "No, that's not correct." And the last example of this was MinIO. It's called MinIO, that's how they say it. And I was like "No, it's MinIO. It should be MinIO. I'm sorry you say it that way." But I'm wrong, obviously...

**Adam Stacoviak:** How should CentOS be called?

**Kurt Mackey:** Oh, my God... Cent OS. How do they say it?

**Adam Stacoviak:** CentOS.

**Kurt Mackey:** CentOS sounds like a cereal. Like something you put milk in. Anyway...

**Adam Stacoviak:** Well, Cent OS makes it sound like a currency, and low-value.

**Kurt Mackey:** Like eight people that are gonna see this know what CentOS is, by the way, because that's just 2008 level Linux knowledge...

**Adam Stacoviak:** You'd be surprised. You'd be surprised.

**Kurt Mackey:** \[laughs\] Oh, boy. Wait, where was I? I got off on a way big tangent there.

**Adam Stacoviak:** You were talking about Tigris, and correcting yourself... Tigris is basically like the promise of object storage, but it allows you to actually build a CDN. Like, you can basically run a -- you can write some JavaScript, use Tigris, and you have a CDN baked into your application. You couldn't build anything like that before. You could try and do this with S3, but it's so complicated to like manage multiple regions of data that it's impossible. Supabase for Postgres is like this. Supabase is a Postgres that lets you build new kinds of apps, or build apps faster. It really gives developers power.

And so the Rebel Alliance idea was if the future is developers are picking cloud platforms, the best possible cloud platform for developers is 10 companies that have built a very special version of infrastructure, that makes developers more powerful by itself... And then obviously, developers would just use those 10 to 50 things together. Like, why would they use my object storage when they could use Tigris? Why would they use my Postgres when they could use Supabase? Why would they use my GPUs when they could use Replicate, for example? And I think it's like -- I don't know, it's one of those things that I could still rationalize it. It seems like a thing I'd really enjoy, but there's actually huge structural problems with it, which is what people tend to want when they launch an app, is actually a really consistent UX, that solves a higher order problem than they can solve by themselves. So a PaaS like Heroku -- Postgres isn't a product. It's actually part of the product. It's a feature of the PaaS. And so you can do cool things like do PR reviews with your existing Postgres data, for example. And so there's a UX issue here, where you can't actually solve problems as well with 10 to 50 different companies as you could if you were just doing it all yourself. And there's weird compliance issues...

One of the things about getting a HIPAA BAA, so you can do a healthcare app, is you actually end up having to sign with each of those 10 companies. You can't just do one HIPAA BAA with us... Which I think is a real burden for developers. I don't think they wanna do -- even if you can unify \[unintelligible 00:26:52.14\] I don't think they wanna do multiple contracts with companies, you know? It just creates more and more friction.

So there are actual practical issues with like a Rebel Alliance cloud. But also, I think that a lot of it is just politics. There's just very few companies who have a low enough ego to give up a big chunk of potential revenue like that. Us saying "We're not gonna take the Postgres revenue" is pretty big, because EC2 -- I mean, most of AWS'es profits come from RDS. That's like a huge market, that we just said "Hey, we're not gonna have this. You can have this." And that's not a thing most companies would be saying. In some ways, we needed a company to come back and be like "Fine, then we're gonna give up the compute revenue", you know? And that was actually relatively rare, to find people who were that... Communist? I don't know. \[laughs\]

**Adam Stacoviak:** Communist... \[laughs\]

**Kurt Mackey:** Anyway, that was very rambly, but I'm very fascinated by how this all went... Because it still seems like it should be the ideal state, but I don't believe that's gonna happen anymore.

**Break**: \[27:49\]

**Adam Stacoviak:** So you are pro Rebel Alliance. You thought this would be the future of how Fly would grow, because you would say "Well, I don't want to do Postgres because there's Neon, or Supabase, or somebody else that can do that."

**Kurt Mackey:** Someone's going to do a very good Postgres, and I want to give the very good Postgres to our customers. I don't want to give them another Postgres.

**Adam Stacoviak:** And now you don't agree with that. So are you planning to build out these other pieces?

**Kurt Mackey:** Well, I've changed it a little bit. So Tigris worked really well. Upstash worked really well. Upstash is doing our Redis, and they have a unique take on Redis that I think is really good. Tigris has a unique take on object storage I think is really good. Both of those companies are kind of like ego-less, in the sense that they're very comfortable working with us on these things. Tigris isn't out trying to find new servers to run their kind of like compute on, because they're comfortable kind of like sharing the benefits of this with us. They're comfortable doing their thing, and us doing our thing, and believing it'll go well for both of us.

Both of those, Tigris in particular -- like, one of the big problems with Postgres is like we have to run it on our own hardware or it's not very good. And so all of these people who've built clouds - Crunchy is a good example of this, but even Supabase. People who've built on top of AWS aren't necessarily incentivized to make it work on our infrastructure too. And so we can't just use them as is; they actually have to do a lot of work to make this happen. I just went on another tangent.

So your question here was "Do you think this is --" Oh, right, we're gonna build some things ourselves, and we're gonna still... And actually, when I've talked to companies about this, there's a couple of things that I want for our users, that I have gone to companies now and I've said "We're gonna build this. I'd rather give them what you're doing. Should we work on this together?' And so it's become -- if I \[unintelligible 00:32:15.14\] four years, that's what I'd do with Postgres. I'd say, "We're building managed Postgres. I like what you're doing. I think it'd be a better thing to offer to our customers. Can we work on this while we build managed Postgres along the side?" and then make a decision when we see kind of which one's better for users. So we have a thing we're building that I would like another company to just do on top of us, and we'll see how it goes.

**Adam Stacoviak:** And you're not saying what that company's name is.

**Kurt Mackey:** Or the thing. We are building managed Postgres, though. So that's coming.

**Adam Stacoviak:** What do you think you can add to that then? If Postgres will run on your servers, and to share a slight marketing part of your story, globally distributed... So when you launch on Fly, you can be anywhere, basically. You've solved that problem with your networking and your machines around the world. How will you solve that better or differently?

**Kurt Mackey:** Well, so the reality is -- and this has taken me... We have a lot of devs signing up each day to launch their applications. So the problem we're trying to solve -- so here's my pitch on Fly lately. Not pitch... Here's what I think about what we're doing. When people come in and launch an app, that's a business that we should do well for them. That's sort of like a long-term funnel. And so we're shipping managed Postgres because it will make those people more successful. It will keep them on the platform longer, and it will help them get kind of down deeper sometimes into what we're able to do for them.

To me, the thing that we do the best is we get compute running anywhere in the world, for whatever you need it for. That's it. In the past, the platform as a service stuff takes advantage of that, but it's not like we're trying to out-compete Heroku necessarily. We already have a ton of users coming, wanting this. We don't have to like justify this to anyone. We just need to do well for the people who are already there... Which actually took me a bit. It's really hard to look at something and be like "We need to do really well for these people", and kind of let go of "We also need to convince them this is the best choice for them", because it's just not important. We really have no pitch to do for the people that are coming to the platform right now. All we really have to do is like check boxes for them, and they stick around and grow and we're all very happy.

\[34:21\] It's almost like relief, in some ways. Like, we're gonna ship really good deploy tools for people. We're gonna end up shipping -- I think we might've already had, but it's gonna get better. Like PR review apps, right? At first, it was like Heroku pipelines is really good. We shouldn't even do anything if we can't do better than pipelines. And now it's like, our users actually need very specific things for PR review apps. We'll just do that, and literally ignore what everyone else is doing, because it's irrelevant. And so we're not even really pitching -- stuff like running close to users is the thing that makes their app perform better when they launch it. And people legitimately notice that. But we're not really putting it in their face. And we've still got tweets. People are like "Well, I launched my app in Tokyo. My dumb little Rails app, and it was really fast, and I've never experienced that before, because all my previous Rails apps have been in Virginia, or Amsterdam", or whatever.

And so there's still like huge benefits that I think keep people around, but it's not like a pitch, if that makes sense, which has been a big mind shift for me. And now truly the big pitch is like we have compute that's safe to -- there's really good sandbox compute... And one of our biggest use cases right now is people running LLM-generated code on machines, because it's -- in fact, I think something like 60% of our revenue is people are using machines as sandboxes, for some reason or another. They've sort of built their own platform, that's either LLM-generated code running in a sandbox, or people taking a traditional full-stack app and letting people run kind of untrusted JavaScript or whatever as part of it, if that makes sense.

**Adam Stacoviak:** Yeah. Well, I do want to talk about the cloud, so to speak; the developer cloud, so to speak... But I also want to talk about the - I suppose the business side of things, to some degree, as well.

**Kurt Mackey:** Sure.

**Adam Stacoviak:** Like, what does it actually take to place these bets, to stand up your own hardware? I mean, you alluded to this slightly with Tigris. They built on top of Fly, and they had no ego, as you've said... And maybe it would be challenging to go and rebuild on a different cloud if Fly failed, or began to fail in ways that was not suitable for them, because they're betting on your hardware, right? They're betting on the bets you're betting on, which is you want to put your own hardware out there, control your own hardware across the globe, you want to build your own stack on top of that... You're not building on top of AWS. You've built your own machines. And they're on those machines, and they scale when you enable them to scale. If they need to be on RAM, or on very fast disks, they're waiting for you to create the new colo stack in the various places, so they can add this new feature set to Tigris, for example. They're not doing that themselves. They're not building their own servers. They're leveraging your servers. That's how the cloud works. But they're uniquely positioned in the fact their foundation is you.

**Kurt Mackey:** Yeah, and there's a couple of things there. One is we still have to do better than they could do themselves. And I think that's a funny problem, because we are, but it's sometimes hard to convince people of that... I think we're all very prone to be like "Oh, I can stand this up in 10 minutes." And then you take the problem on.

**Adam Stacoviak:** Sure.

**Kurt Mackey:** And it actually feels better sometimes. It's nice to have everything in your power. It's nice to own all the things, because you know where to go to fix stuff. It's really hard. That's what DHH's tweet was about. It's really hard to wait for someone you don't have a good relationship with to go fix things... And so what we're actually doing -- what they're taking advantage of us for right now is not only... So we run our own hardware and networking for basically economic purposes. We need to have a good business, we need to make good margins. This is a good way to control costs, and also make sure things are kind of optimal for what we need... So we can buy the best mix of CPUs and memory and disks for a given piece of hardware, because we kind of know what we need the most.

\[38:15\] And we can avoid -- when there's supply constraints on things, we can work around that, for example. And this is what we did with GPUs. We couldn't get A100s, so we got these L40S'es, and that worked just fine for us, because we knew it would. We weren't kind of at the mercy of paying four times as much because we didn't have this level of control.

So what Tigris is getting from us is they're getting all of our run global compute, including a load balancer bit, at scale, that they don't have to build. And even if you go to someplace like AWS, you end up just building this same thing on top of another cloud.

And then they also get the economic advantage. We make a little money when they buy hardware, but in general, they're paying close to what it would cost them to buy similar hardware for themselves... And then we make a little money when they -- no, we don't make any money. We don't make money when they push bandwidth anymore. We're kind of like giving that to them at cost, because a big part of their pitch is like free egress, because this is a big deal to everyone but AWS. Only AWS can get away with charging insane amounts of money to move a gig of data out of S3.

And so they're kind of benefiting economically. They can do these things, they can sort of punch above their weight, because we've already done a lot of this work... And then they can technically punch above their weight because we've already got a lot of this infrastructure in place. But it still has to stay pretty good for them. It has to stay pretty close to better than if they were just doing things themselves. And so that's the -- over time, I'm actually like... I'm in some control of this, but I'm actually really curious to see how this plays out with them and us, and which things that we can continue doing better for them, and which things as they scale, it makes sense for them to take on themselves.

A really good example of this is they probably need cheap, slow disks at some point, and a lot of them. And we have absolutely no reason to ever buy cheap, slow disks for anything we're doing. It's just not an important part of the product, and it's not a thing we... And so I would expect that when it comes time for them to do cheap, slow disks, that's obviously gonna be a thing where there's a pretty good chance they won't use us for that, and that's fine. It makes total sense to make those decisions for things like that.

**Adam Stacoviak:** Probably for like cold storage, right? They're gonna have some active storage to make the storage cheaper over time.

**Kurt Mackey:** Yes, exactly. And I think for what they're doing -- we have an article about Tigris we're gonna post, but it's not out yet. But one of the things we've talked about in there is like S3 -- all of the engineering work in S3 right now is going towards storing more data, more densely, for cheaper. That's like their entire goal in life, is basically to optimize cost underneath. And Tigris is gonna have to do that too, because they're in a stage where they wanna acquire customers. And storing a lot of data on our NVMEs is not cheap enough for what those particular customers need. And it's because of things like cold storage. But even more granularly, almost nobody needs all their data available on NVMe at any given time. And we did this because we wanna run transactional databases. But for like cramming stuff into object storage, we have a lot more power to be very precisely optimized on the cost of storing like an individual four megabytes, for example.

So there's definitely gonna be stuff they do outside of us, because it makes total sense for their business to do that. And what I'm actually most curious about is how much that Venn diagram continues to overlap. So like how much of what we're doing makes total sense for their business, and how much they diverge from us over time.

**Adam Stacoviak:** Yeah, that is interesting. I think the promise of -- and I wanna harp on this for one more second, not so much to promote Tigris necessarily, but I think this is an interesting take where you've got not just an application that somebody can build on top of Fly, but a full-on company/service that without Fly, otherwise, they would have had to build it on a cloud they're trying to compete with, which is challenging, right?

**Kurt Mackey:** Yup.

**Adam Stacoviak:** \[41:57\] Or the other option would be to do what you've done, which is build the servers, define the CPU, the RAM, the storage, stand them themselves, and build these things globally, to even be able to offer the basic promise of what Tigris is trying to offer. They would have had to do so much extra to even get there. And they're a unique kind of developer to come to Fly and build something of substance within a year, and be respectable; respectably competitive, even.

**Kurt Mackey:** They're an interesting case too, because they're very important to our customers. Everyone who runs an app needs a place to put user uploaded images, or whatever. Object storage is a critical piece of almost any application people ship these days. And previous to Tigris, we were like "Here's how you go get your S3 bucket", which was 47 steps. And "Here's how you hook it up to your Fly app", which is one step. And now it's just one step. We got to get rid of 47 steps, which is great. That's an exaggeration, by the way. I don't know if it's actually 47. But it's definitely double digits.

**Adam Stacoviak:** 75 actually. I counted. And not everything is like that. That's true for Redis, it's true for Postgres, it's true for object storage, but there's not a lot of other things that every app, every full stack app on the planet can take advantage of in the same way. And then the other unique thing about object storage is it's actually kind of hard to build object storage and get traction from developers, because it's not -- you're not really there at the right time to get picked, if that makes sense. If I'm building and launching an app, and I need to go find object storage, I'm probably just going to go get it from S3. I'm probably not going to spend any time looking for someone else to sign up directly with, because it's just really irritating.

And so one of the big things, and one of the big values for Tigris, I think, is they sort of get access to our signup flow. All of the thousands of developers a day who are creating accounts on Fly can get Tigris through that signup. And if they do deploy an app, they can add Tigris to that app they're deploying... And I think it's a relatively unique kind of like pipeline for an object storage company, that is hard to replicate otherwise. Upstash did the same, because they did both us and -- they're like a Vercel add-on. It's like, you can't use Redis without the application, so like go where the app developers are going.

**Adam Stacoviak:** Hence the Alliance, right? I mean, you could charge somebody the value of being accessible to the developer during the problem set, versus -- like a command away, built into the Fly CLI, for example. I mean, wow. You've really given them such a nice red carpet, and they're walking on it.

**Adam Stacoviak:** Yeah, we've gotten even better. Right now, if you launch an app on Fly, we'll take a guess of if you need object storage or not and just offer it to you. So we can actually see kind of what apps need when they're at launch time, and just bundle that stuff in.

**Adam Stacoviak:** Interesting.

**Kurt Mackey:** Again, you can see the draw of the Rebel Alliance. But I think what Tigris is doing with us is unique, and it works because of basically all the things we've just talked about. At Upstash, in a similar way. And I don't actually think there's many other companies... Like, part of the reason both these companies worked well with us is because we were bigger than them when they got started, and I do think startups -- I mean, you can't afford to have an ego when you're launching for the first time, and so that's the right time to give up on some future, and go faster with a company like us. So I think we've managed to bypass a lot of the friction to these types of things with those two companies. And maybe those are the only two that'll ever happen. We'll see.

**Adam Stacoviak:** So you believed in the Alliance, now you don't really believe in the Alliance as the future... I'm assuming that's probably a byproduct of some version of failure. Or a failed relationship, or the fruition didn't really come to full fruition, for example. Can you give me some examples of where it just didn't pan out as you expected or wanted to?

**Kurt Mackey:** Yeah, I'd probably phrase that as I hoped for the Alliance, I'll be happy if it happens, and I'm not betting investment, I'm not betting our future on it, or company money on it anymore. And Postgres is the best example of where that happened, where if we rewound to 2020, and just shipped managed Postgres, we'd probably be five times bigger than we are right now.

**Adam Stacoviak:** You would be. You know why? We talked about that. Remember that?

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** \[46:05\] That was one of the things we really wanted to come to Fly for, was we didn't want to manage servers, obviously. We didn't want to specifically manage our Postgres. We wanted to have our Fly and eat it, too. Which is a terrible analogy or phrase. Like, I don't eat flies, but you know.

**Kurt Mackey:** I asked Render in 2020 if they would do Postgres for us. So this was not a fast thing. I spent four years basically being -- find a really good Postgres for our users... And it went everywhere from like companies just wouldn't... Like, I think that there's a bit of like -- actually, one of the big problems database providers have is that they are kind of whale-driven. They have their huge customers that pay them $100,000 a month for a database, which is not what we're doing. We're not bringing them $100,000 a month customers. And they don't necessarily know how to contextualize this bottoms up, get a bunch of developers on the platform thing. There's very few that do. So Supabase, we made a really good effort with, and I think both Paul and I would tell you that we both needed to do different things that made it so like we couldn't spend the time solving each other's problem, if that makes sense. Supabase doesn't need to do the things on Postgres that would make them work on Fly otherwise. And so it doesn't make any sense for them to work on that stuff. And then we don't need to be shipping something like EBS, which is something that can make Supabase's databases work really well. Really resilient single-volume storage is just not that important to us.

So we tried really hard, and I think both of us would still wish it had worked, and it just became clear this was just going to take forever. It wasn't even like a big blow-up. It was like "This is really ponderous. Why don't we just not focus so much on it?"

And then there were a couple of people that were just like really prickly to work with. I think that there were just some that were -- there were some difficult Postgres providers out there that I think I could have gotten to play ball, but they weren't really buying the vision. They were just trying to make a lot of money off of us, if that makes sense.

**Adam Stacoviak:** Right. They were less Alliance and more leech.

**Kurt Mackey:** Yeah, I don't know if leech -- they wanted us as a customer and not a partner, if that makes sense. The distinction is always very small. But they didn't really want to be peers with us. They didn't really want to kind of -- they didn't really want to bet on a future where we're both doing well. They really just wanted to sell to us and other people.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** And then there were -- I think that was all of it. I think that was -- the other thing truly is that... Oh, so this is where it really hurt us... If you're running app servers on Fly, and not using a database, we're not actually very sticky. If you get pissed off with us one day... And this is where -- I've thought a lot about this, because we have kind of operational incidents, just like every other cloud. And so maybe something goes wrong one day and we break a hundred people's apps, and those hundred people move off. Or like more commonly, someone's just not having a good experience on the platform, because it doesn't do what they need, even though it's working the way we intended it to, and they move off. And I think the biggest problem we have is that if you're not storing data on the platform you're using to host your app, it's really easy to leave. If you are actually storing your Postgres data on top of Fly, and also running your app on Fly, you're much more committed, I think, to the platform.

And the reason I said five times bigger is I know exactly how many customers, how much retention has been an issue for customers without databases... And you can sort of go into a spreadsheet and actually do the math on like what we sort of turned down. And it's not because we waited on the Rebel Alliance, it's because we could not give customers a reliable Postgres in time. And that's because I was very stubborn about waiting on the Rebel Alliance. And I still think it's the ideal outcome, but we're just not gonna make -- we just got smacked with reality, or whatever. And so instead, what we're doing is we're actually working with Percona, and doing our own managed Postgres with Percona's backing. Because I've done managed databases before, and it's not fun, and it's hard... And it's hard in a way that I don't think people expect, which - it's actually hard to be DBAs for a hundred thousand developers.

**Break**: \[50:02\]

**Adam Stacoviak:** So if you thought that RDS, and you knew RDS was such a boon for AWS in terms of revenue... This is four years ago you knew this. We had conversations, because I think it's been about three-ish years, I want to say, maybe four years...

**Kurt Mackey:** Ten years ago I knew this, because we even had a whole startup basically offering a managed database, you know...

**Adam Stacoviak:** Remind me the name of that? Mongo-something.

**Kurt Mackey:** It was called MongoHQ at first. We renamed it to Compose, and then it got absorbed by IBM. And then people didn't get fired for buying it anymore.

**Adam Stacoviak:** So you've been in this game for a while, long enough to know what you should do. Knowing the value of a managed database, the difficulty of doing it even... But in particular to Fly, knowing how valuable it could be to your future. But yet, you bailed on the Alliance, and you punted. Why?

**Kurt Mackey:** Well, so there's the startup tension of sometimes if you know too much about a problem, you talk yourself out of doing it. Like, running managed databases is a giant pain in the ass. In the same way running global hardware infrastructure is a giant pain in the ass. But the difference between managed databases and global hardware infrastructure is I'd done one of those things before and realized how much of a pain in the ass it was. And I wasn't like gung-ho, naively jumping into a problem without realizing the downsides. And I think one of the problems with -- it's always interesting to me that people start startups... I don't know if this is true, and it's probably not, but I'm really aware of people who start startups, they have no real credentials for it. Not credentials, but like they don't have the right experience to build this startup. And in some ways that's an asset, because they're so naive that they don't even notice what they can't do. And so a lot of times they end up finding stuff that seems impossible to people who know better. So for me, managing databases is a really known, complicated problem.

And there were two things at play for us in particular. One is I'm like hyper-focused on like doing something novel, which you might've noticed when I was talking about people that come and sign up and just wanna run their apps, how I've had to really let go of not trying to do something novel for them, trying to just give them a good experience based on what they already want. But I'm hyper-focused on doing something novel, and I'm very skeptical of doing something everyone else is doing, that's really complicated and hard. And so databases fell in that for me. It's like "I know how hard it is to run databases. I also wanna do something -- I wanna put all of our energy into doing something that's really meaningfully different than what already exists out there..." And so I skewed way hard to "Let's do the meaningfully different than that exists out there." Which in some ways wasn't wrong, because we got this machines API three years before people needed to realize they needed to run like LLM-generated code in a safe environment. We didn't know LLMs would even be writing code at that point, but it was a thing that we kind of saw the need for vaguely, and needed for ourselves and managed to ship.

But I think that I over-fixed it on how hard managed databases were... And then a component of that is -- and so I know what it takes to run a managed database, and it's really just a lot of people who know how to operate that database, and a lot of tooling that lets them know when to go look at a customer's problem, and do something about it. And so that's kind of why we opted for Percona, because they're really good at running people's Postgres. So we know that within 15 minutes of us noticing an issue with the customer database, we can get a hold of Percona if we want, and have them looking at it with us, which is the key, I think, to a managed database service from day one, is just fixing problems so people don't have to. And it's almost like a human element. It's almost like a human and support problem, and less of a product problem, in some ways.

**Adam Stacoviak:** Did Percona build their own hardware across the globe? What's their stack?

**Kurt Mackey:** No, we are a customer of Percona, and we're actually using all of their Kubernetes, Percona operators and tooling. So what we've actually ended up doing is shoring up our -- we shipped Fly Kubernetes Service, FKS... Someone on Twitter the other day was like "You should name it something other than FKS, because that sounds like f\*\*ks." And I was like "No, that's on purpose. It is FKS for that reason. So we will keep it."

**Adam Stacoviak:** Are you a Silicon Valley fan, by any chance?

**Kurt Mackey:** Oh my God, yes.

**Adam Stacoviak:** Then you know where I'm going with that, yes? This guy --

**Kurt Mackey:** Vaguely. But you've got to tell me, because I'm going to laugh again.

**Adam Stacoviak:** Geez, I'm blanking on the person's name... He's the VC. Gosh, what is his name?

**Kurt Mackey:** Oh, the doors that go like this, and not like this?

**Adam Stacoviak:** Yes, that guy.

**Kurt Mackey:** That says "This guy f\*\*ks a lot"?

**Adam Stacoviak:** That's right, that's right.

**Kurt Mackey:** Yes. That's not why we named it that, but it was not an accident that it was FKS. Anyway, we shipped this.. Kubernetes runs really well on top of Fly machines, and we hadn't quite -- we didn't have all the features in it we needed for like bog standard Kubernetes operators to work properly.

\[58:18\] And so like the first -- actually, what we did was we decided we're going to run out of the box operators from Percona to start. We're not going to fork any of this. We're not going to solve problems from scratch. What we're going to do is make our Kubernetes work well enough to use Percona, which is a little counterintuitive, but it made sense for us. So Percona has a bunch of products for basically launching, managing, upgrading, doing backups for all of the things you'd need to do with databases on top of Kubernetes. And we're kind of building around that.

And part of the reason for this is we know we can go beyond that at some point, but we don't want to start with something like -- Postgres major version upgrades, for example, are a nightmare to build. And there's zero reason for us to build this, that already exists. That's obviously something we shouldn't spend time on.

And so Percona is basically like a Build or Buy vendor that we've decided to buy from, if that makes sense, for our particular users. One of the neat things about what we're doing, because I've in some ways let go of the novelty of it, is we just want -- we don't need anything novel for Postgres. We need really reliable Postgres for our users, because that's all they're asking us for. And so I don't have to come up with a VC pitch for how our managed Postgres is gonna be world-beating, because it's just not the purpose of this thing. It will be world-beating, but it's only because it's doing what people are asking for, instead of what I'm pitching to VCs, if that makes sense.

**Adam Stacoviak:** Very interesting. Well, I'm excited for you that four years later you've come back to where you began, and where we began... I mean, we really came -- that's not the only reason, but one of the many.

**Kurt Mackey:** I had an advisor/investor basically shit themselves, and I told them we were gonna build our own Postgres service... Because they're actually looking at what PlanetScale and Neon are doing. And these are what I'd call exotic database services. They're actually building serious, serious engineering, to change how Postgres does storage. Or make Vitesse, which is the infinitely scalable version of MySQL. Like develop the actual database engine themselves. And I think the neat thing about watching Amazon on this is we don't need those things. We really just need RDS, which is like the vanilla version of this database, that just works well... And we can charge whatever we need to charge to make that happen. So it was kind of funny to actually start looking at what investors see as the Postgres market, and compare it to what we actually need to do, and how very different it happened to be.

**Adam Stacoviak:** Yeah. I think your use case is different, obviously. It didn't have to be full-on Neon, because you're not trying to attract someone who would manage fleets, necessarily... Maybe, I suppose, on top of you. I mean, maybe I actually get back to the same problems, to some degree. Like, you'd still have serverless, right? It would still be managed, it would still be serverless...

**Kurt Mackey:** What I need is something that works well for people who spend $25 to $2,500 a month on their database. That's basically -- it doesn't need to be less than that, and it doesn't need to be cheaper than that. But yeah, maybe we get back to that. I think that you could run Neon on Fly. I think this is the cool thing, is that you can actually build the exotic stuff on top of us someday, for your own customers. That's just not what our customers need.

**Adam Stacoviak:** What's stopping somebody from Tigrissing the Neon, so to speak, on Fly? If you can build a Neon on Fly...

**Kurt Mackey:** Well, that would be Neon doing it, and that's not something that's gonna work out. It's not how their company needs to go. I think one of the things that happens with companies is they launch with -- like, Neon raised so much money, they launched with huge expectations... And your ego is necessarily big if your expectations are big. Does that make sense? Like, you look far forward and be like "I'm not gonna give up that part of the market", even though it may not be relevant at that time. It's like "No, we have big expectations, with money. We're gonna do big things." And so Neon not building Neon on Fly made sense, but that would be the company that did it. There's not really another one. There's been a couple of small ones...

**Adam Stacoviak:** \[01:02:17.16\] Have you heard the conversations of us talking about our CDN saga? Have you paid attention at all?

**Kurt Mackey:** No.

**Adam Stacoviak:** I'm gonna do my best, because I'm less in the details. Gerhard and Jerod are deep in these CDN saga issues... And I'm gonna try my best to not be negative, but we've not had the best experience with our CDN. It's been challenging. We've had some challenges, and they seemed insurmountable. And so we essentially came back to "Well, we really need a simpler version." It's almost like what you just said with -- speaking for you. "We don't need to be a Planet Scale or a Neon. We just need this RDS, the sort of like simpler sliver of Postgres." The same for us. People go to CDNs as a media company and have infinite needs. And we don't have those infinite needs. We have very simplistic needs, but we still need the kind of crux of what a CDN is for our little indie media company.

And we have this thing called Pipe Dream. We'll talk about it next Friday; actually, this Friday, sorry. This Friday, officially, and then it'll release the following Friday on our podcast. So it's December 4th, listeners. Kurt, it's December 4th, you know this... So not Friday the 7th... Or 6th... Yeah, 6th. It's like Friday, whatever. Next week. I'm not in front of a calendar. I'm trying to do math in my brain on the calendar.

**Kurt Mackey:** 13th. We'll go with 13th. Friday the 13th. Well, it actually is, too.

**Adam Stacoviak:** Oh, gosh.

**Kurt Mackey:** Good luck with that. \[laughs\]

**Adam Stacoviak:** Okay. There could be a reason for that, who knows...? So our idea is let's build a really simple CDN for us, on top of Fly. And so that's what we're currently doing. I'm not sure if it will be the future, but for a while it's been an experiment. A toy. Let's see if we can actually do it. Does it make sense? Can we solve our own problems? Can we build this little thing on Fly? And the reason I bring that up is because I said "Well, could you Tigris Neon on Fly?" And well, maybe we don't need to be a Neon on Fly. Maybe we just need to be our own version of our own CDN on Fly. And it's our own. We never had to go and build all these servers you've built. We never had to go and globally distribute CPU and compute, like you've done. We could just leverage the fact you've done it, on our own, and maybe potentially it could be something that's usable by other people, because it's just really simple. It's everything Cloudflare is, everything Fastly is, and others that are like them, but just the simplistic version of it. The varnish layer, the simplistic varnish layer, not the complex, crazy crap.

**Kurt Mackey:** Yeah. Okay, that's actually really exciting to me, because this entire company exists because I was annoyed that there was no cloud I could build a CDN on top of, if that makes sense. As an individual developer, I could not ship a CDN, because Fly didn't exist, effectively. And so actually, I was really excited when we launched Tigris, because to me that was like the last bit of the puzzle I would have needed to build a CDN. And so I'm fascinated you all are doing this, because -- I love that you say simplest, because CDNs do a lot of really interesting stuff that you may not need, but really at the core of it you just put a file somewhere, and they make sure it's fast for other people in other places, which is all like cramming something in Tigris does now. It's just like, it's just there. You don't have to -- and even Fastly... I remember when Fastly got big... Because you were talking about DigitalOcean with SSDs, and Fastly took off because they were a CDN with instant purge. It was like that simple. It was like they went to all the media companies and said, "When you ship a typo that's really embarrassing, you can purge it and nobody else will ever see it, within seconds. It's not gonna be there for another few hours", which is what was happening with Akamai and others at the time.

\[01:06:06.17\] And so it's kind of funny, because like the infrastructure will now support instant purge. You don't need a CDN to like build a bunch of shit for you to do that anymore. You just need to use Tigris effectively, and then have a button that deletes an object from Tigris, and you're done. Or it just uploads a new one. Anyway, that's really cool. I'd love to hear more. What stack are you building this with? Is this Elixir?

**Adam Stacoviak:** So I'm not building the application... Gerhard is building it, for the most part. I think Jerod's chiming in on different details. It's being built on Varnish.

**Kurt Mackey:** Oh, nice.

**Adam Stacoviak:** So we're not using Tigris at all.

**Kurt Mackey:** Oh, that's interesting. You should have them look at Tigris and see if that changes how they build it, because I feel like Varnish is even harder than I think it needs to be.

**Adam Stacoviak:** Maybe. It's possible. I think it would be a good conversation with Gerhard. He's definitely in the details of the whats and the whys. I am more like "Let's just figure it out" kind of thing. Because we've been -- this is in the weeds a tiny little bit, but we've been bottlenecked by our inability to move to the next thing when it comes to a CDN.

And much love to Fastly. They've been amazing to work with over the years, but there's challenges with -- there's a lot of challenges, I think in particular... The VCL inside of Fastly, just to be very specific, is not versioned.

**Kurt Mackey:** Right.

**Adam Stacoviak:** So Gerhard and Jerod, two developers on our team -- I would chime in too, but I would just ruin it. It would be the worst. They have to coordinate like humans would coordinate. Like "Hey, I'm working on the VCL right now. Don't touch it." Or "This is the version of it, and export it by copy and paste into our own Git repository, so it's shadowed by version--"

**Kurt Mackey:** Wow...

**Adam Stacoviak:** It's like, even something that simple. That's innovation at the Fastly layer that we would absolutely love, but it's just not there. Or APIs changing and things break for us, and we're like "Why are our feeds not updating? Why are these things happening?" "Oh, the API changed and we were not made aware of this API change." I think it's kind of prudent to tell a developer when your API changes.

**Kurt Mackey:** Yes. \[laughs\]

**Adam Stacoviak:** And maybe they did, and maybe they didn't. I don't know.

**Kurt Mackey:** Right. That's actually a hard problem, is communicating this stuff to people. It's actually incredibly difficult, even if you decide to do it...

**Adam Stacoviak:** So I'm not trying to say they're bad. I'm just saying we've had some hurdles over years with this... And they're aware of it, and they may even be listening right now, so I'm really sorry we had to bring this up. But it's just....

**Kurt Mackey:** Oh, somebody there knows.

**Adam Stacoviak:** Yeah. I mean, they pay attention to any time we talk about Fastly, for some reason, shape or form. It happens.

**Kurt Mackey:** Fastly and Cloudflare are fascinating to me, because in some ways they're doing things on hard mode, because they got big and then had the money to do things in a way that wouldn't make any sense to people like us... So we originally started like four iterations ago. This was pre-2020. We shipped a multi-tenant JavaScript engine for just running JavaScript at the edge... Which is just like Cloudflare Workers. And then that didn't do what we wanted. Big companies were happy to come buy this and build stuff on top of it, but I wanted individual devs to just ship apps. And individual devs were not interested in writing JavaScript for some unknown platform.

And I was always grateful that we didn't have like the captive customer audience that Cloudflare does, because Cloudflare has so many customers, they ship multi-tenant JavaScript, they get enough traction from it, they think it's successful... And the reality is those customers were just willing to use more of Cloudflare features. It wasn't like attracting new customers at the rate that we needed to as a startup, for example.

And Fastly is really similar, because they did this instant purge thing, it was all based on Varnish... And when you kind of start with this black box, how you evolve from there is really kind of hard. And we got really lucky, because at some point -- and I don't want to say this as like because I'm smart, it's because it wasn't working.

\[01:09:54.19\] My brain flipped from "I want to build a CDN that devs can take advantage of", which is where you'd get scripting CDNs and customizable VCL and all of these things, into "Why are we building proprietary stuff for the CDN when in theory you could just have a cloud that lets you run a CDN on it pretty easily?" And I'm really happy we flipped for that reason, because I think that there's probably people within both those companies that understand how constrained their path has been... And it's all because they were successful - I'm not going to say at the wrong time. It's because they were wildly successful and like locked them into this decision, that doesn't make any sense if you're starting from scratch anymore. And I think VCL is a version of that. And then they also -- when Fastly did the Wasm stuff, it was the same way. I was like "Wow, this looks like a project a company does when it has too much money to spend, and can't, and isn't being forced to be pragmatic about how people use the thing."

So anyway, it's just really interesting y'all are experiencing this, because I've watched specifically those two companies for like eight years at this point, and I've watched them kind of be at the mercy of their previous choices in a way that cloud provider infrastructure hasn't been, and it's quite the same way.

**Adam Stacoviak:** Let's time-box this, what I'm about to share, to five minutes or less.

**Kurt Mackey:** That's a good code for "Talk less, Kurt. Be more efficient." I love it.

**Adam Stacoviak:** No, no, no. I just have bigger things I want to talk to you about, but I'm really -- this is all open source, so I've just shared a URL with you here in Riverside... So go to that URL and just peruse briefly the codebase, because it's very small. Just give me a glimpse and an initial reaction.

**Kurt Mackey:** This is a -- one of my favorite things I wrote for a blog was called "The five-hour CDN."

**Adam Stacoviak:** This inspired it.

**Kurt Mackey:** Yeah, okay. Yeah. I love it.

**Adam Stacoviak:** Yeah, we actually -- so Jerod... It's quoted here, and on a podcast -- we do these shows called Kaizen, which... Do you know the word Kaizen?

**Kurt Mackey:** No.

**Adam Stacoviak:** It's Japanese for continuous improvement, or always be improving. And so we've, of many pillars, give them what they came for, keep the main thing the main thing, slow down and check yourself when you're going too fast, and Kaizen. These are the four pillars of our psyche when it comes to our business.

**Kurt Mackey:** Yup.

**Adam Stacoviak:** So Jerod on a Kaizen podcast, where we were introspecting what we were doing, and I've shared with you our challenges... And now with the rest of the podcast world that's listening, Jerod said "I like the idea of having this 20-line Varnish config that we deploy around the world, and it's like "Look at our CDN, guys, and that's it." So that's what he said on the podcast. And so Gerhard Lazu, our resident SRE and friend for many, many years now here at Changelog, prior host of Ship It, the podcast, etc. He's still involved in all the things we do. He planted that seed in his brain, and went away, and over time brought out this idea of this Pipe Dream. Jerod called it a Pipe Dream. Could we actually do this? Could we build our own CDN on Fly? And your blog post was fodder for the possibility and enablement, so to speak.

**Kurt Mackey:** Yup.

**Adam Stacoviak:** And so we said, "Well, is that even possible? Should we even do it?" And I was like "No", because I want to work with a partner that does it. I don't want to manage more code.

**Kurt Mackey:** Correct. \[laughs\]

**Adam Stacoviak:** I don't want to be responsible for our CDN. So here's me thinking as a businessman around this indie media company, "No, we should partner and get them to pay us, because that's how it should work. We should choose a major winner, enable a symbiotic relationship, and share our story with the world through how that works out." That may not be how this ends up working out. So this is still a pipe dream. That's why we call it Pipe Dream, because we're not sure if it will work out. But this is it - a single-purpose multi-tenant CDN for just us, that runs Varnish cache, it's open source, it runs on Fly... And that's where we're at so far.

**Kurt Mackey:** Oh, that's really cool. You've got me thinking I should go spend the weekend and just do this from scratch, and see what I'd come up with... Because since I wrote that blog post, Tigriss exists, which is -- I think I might do it different now. But maybe I'm wrong.

\[01:13:53.17\] I apparently need my -- I cope with burnout by spending a week writing a little demo... So my last one was called BFaaS. It's Batch Functions as a Service. And it was a -- it hooked up to the ChatGPT AI, or ChatGPT API, and I said "Write me some Bash", and then it would run it in a machine. And I was actually using it to see if I could hack our own machines... And ChatGPT is really good at writing exploits. So that was kind of fun. So this may be my next one.

**Adam Stacoviak:** Wow. Interesting. So in light of this, and having one and a half minutes left on this brief part of the conversation... We've considered, "Well, if this does make sense for us, who else needs a really simple CDN?"

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** That's not so much anti-Fastly or anti-Cloudflare, but just ... It's just bloated. We don't need all those features. We just really need something simple. Maybe we could flesh out what is Pipe Dream into a Tigris, and be part of this alliance.

**Kurt Mackey:** So we've all seen how my predictions go with Rebel Alliance, but I have this little bit of a hot take, that like in the future CDN features will probably just be part of your app, not necessarily a whole separate service... Which is my take on that. Now, if you get to CDN, it's actually expensive, because it's everything from like DDoS protection, to bot abuse protection, to like optimizing video streams as they flow through, and all kinds of stuff like that. But for actually just storing kind of chunks of files, and getting them back to users pretty fast, I feel like that's just the thing apps will do. It won't be like an entirely separate service anymore. And so I'm very curious what your exploration finds for this.

And I actually would love to ask them -- I'd love to talk to them and be like... I'm curious what the benefit of a separate service is from your existing Phoenix app, for something like this. Like, why does it make sense to have a CDN as a bolt-on, and not have the Phoenix app just be doing this work?

**Adam Stacoviak:** We should do a podcast about that.

**Kurt Mackey:** We should.

**Adam Stacoviak:** Well, we should invite you on a Kaizen and talk in-depth about the possibility.

**Kurt Mackey:** I've been meaning to do a Twitch stream of like building something, and I actually wonder if the dumbest CDN ever on a Twitch stream would be a fun thing to build. My version. Kurt's version. Taylor's version of the Taylor Swift songs, you know about that. \[laughs\]

**Adam Stacoviak:** Sure, sure, sure.

**Kurt Mackey:** I mean, I really love this, though. This is the exact type of thing that I would love seeing on Fly. It's like "You can't do this on AWS, or DigitalOcean, or Heroku, or anywhere else. It only works here." It's very cool.

**Adam Stacoviak:** Well, that does bring me to not exactly where we should go, but at least a version of it. You're building a cloud for developers who ship. That's your current, on your homepage, tagline. And I love that. Because it used to be "Apps close to users." And that's great too, but that was not -- and, like, why? I mean, to some developers that makes a ton of sense, but I think "The cloud for developers that ship" to me is if you want to be a productive developer, that's been my rationale for why Fly continues to make sense for us.

**Kurt Mackey:** Yup.

**Adam Stacoviak:** Because that's who we are. Dovetailing that completely off of technical conversations, and more so -- and maybe slightly technical, but... You've had to build this company. You're still an individual human being, you've built companies before... How are you doing personally, as part of this journey?

**Kurt Mackey:** \[laughs\]

**Adam Stacoviak:** Not CEO of Fly, but -- that too, of course, but how is your life as a result of building what you have to build to build Fly?

**Kurt Mackey:** Oh, yeah. Today it's good. I think that -- boy, if you go over the whole journey... Okay, this is like dark-ish. Dramatic. We'll go dramatic. The most interesting thing I've learned from this company about my personal life is how much my work has been a thing that keeps me energized, and not depressed, and like a happy human being. And it wasn't until -- literally, I didn't start therapy until a year and a half ago. And I should have -- I know 10 years ago everyone would be like "Yeah, I should probably do therapy." But you just don't get around to it. And the reason I started therapy is work got hard, and I also was married, and had kids, and all that was also hard. And it was like, my therapist finally told me, he's like "You have three things in your life. There's work, there's family, and there's relationship. And it sounds like work has been giving you all of your emotional energy for like your whole adult life, and you're not necessarily getting it from the other parts of your life." And I thought that was actually really fascinating, because I've always noticed that people who get to basically the stage of the company we're at, for some reason they get divorced at a pretty good rate.

\[01:18:21.04\] I've noticed there's a lot of founders post series B... Again, not data, but like an observation. And I'm kind of wondering if that's why. I wonder if we're all like self-medicating for some kind of depression that exists in our other lives by trying to build a company and make it successful. Because the successful moments certainly keep me going when they happen for an inordinate amount of time.

And so what happened a year and a half ago when I started therapy is like the company had become real work. And it was fewer of the head rush endorphin moments, and a lot more of the "God, I've got to get up and --" not commute, because I work from home, which is almost harder sometimes... But "I've got to get up and do this today. And there's stuff I don't want to do today that absolutely has to happen. And there's things I haven't figured out, and I don't know where this is going to go, and I wish I could just be the type of person that had a real job, and enjoyed a salary and also liked going fishing over the weekend, or something..." But that's just not ever what I've done.

So I would say that the company itself revealed a lot of -- it went far enough... And my previous companies haven't. I don't remember feeling that way. Even the last company we sold, it took me far enough to go actually work on this particular part of my brain... And what I'm actually exceptionally happy about is like I'm actually getting emotional energy from all three areas now: kids, relationship, and work, at different times. It seems much more balanced in my head. So we talk about things like outages and DHH's tweet on September 1st, and I guarantee I did something else that week, with either a relationship or kids, that made me feel good that week, and it helped me get through the DHH throwing a shade thing for us, if that makes sense.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** And so that's been the biggest thing, is I'm great now... But it was a pretty good forcing function for a lot of the stuff that I probably needed to take care of.

**Adam Stacoviak:** Mm-hm. So it sounds like you've gotten divorced...

**Kurt Mackey:** Yes.

**Adam Stacoviak:** Okay. And I know you moved from one place to another. I think you live closer to me now. I live in Texas.

**Kurt Mackey:** I'm in New Orleans.

**Adam Stacoviak:** New Orleans. So you're about six-ish, maybe seven hours away from me. A good drive.

**Kurt Mackey:** Yeah. We basically moved as the marriage was ending. It was like a little bit of a last gasp... And I don't know if everyone's marriage is like this. I've actually talked to a lot of people and nobody really talks about getting divorced, because it's shameful, and it makes us feel like failures as grown ass human men... But my marriage was like so many others, where it was like -- it was long gone. That's the time when it ended, but I can tell you many, many years ago when it actually ended, if that makes sense. And the rest of it was like -- realistically, one of the things that did come up in therapy was like "I was convinced that marriage is ending - we're bad for the children." I just believed that to my soul. And that's not actually the case. There's actual studies about this, and in a lot of cases it's far better for kids when a bad relationship ends, than them just sitting in the toxicity for their whole childlike lives.

**Adam Stacoviak:** Yeah, I'm sure there's a lot of evidence either pro or against that sentiment, but I don't disagree.

**Kurt Mackey:** I think it's like anything, where it's far -- it's really just more nuanced. It's not absolutely true either way. It's very situational, but there are both kinds of marriages. It can go both ways, and it's not absolutely wrong for kids to end a parent's romantic relationship, effectively.

**Adam Stacoviak:** You're good though, right? You're good now, things are better, you're on a good path, therapy-wise even...?

**Kurt Mackey:** Yeah, I think that the thing about an actual divorce is it's almost like a relief when it finally happens. Like, all the bad crap was before that. And since then, it's been like "Oh, okay, cool. Now I know what I'm supposed to be doing", and it's winding this up, it's like learning...

\[01:22:01.19\] One of the weird things is we had a baby and got married in college, and I'd never spent any time alone before. And so I spent a good chunk of the year like learning to actually be content, for a week at a time, when I didn't have my kids, by myself, and not just go drink and get plastered because I'm hiding from it, but like actually be happy. The stupid thing, I never used to be able to watch TV shows by myself, and then I learned if I build a Lego set while I watch TV, I can actually get through them, and it feels really good, and I have a good time. So I will do Lego TV date nights with myself now.

**Adam Stacoviak:** Nice! Do you watch Lego cooking, by any chance?

**Kurt Mackey:** No. Oh, my God, that seems like a thing I should watch. \[laughs\]

**Adam Stacoviak:** It's on YouTube. Search it. And the rabbit hole goes deep.

**Kurt Mackey:** Yeah, that sounds like a rabbit hole that will go deep.

**Adam Stacoviak:** It's so good. My kids love it, it's cool; it's so cool. It's so well produced.

**Kurt Mackey:** That's hilarious.

**Adam Stacoviak:** I don't want to share any more, because I don't --

**Kurt Mackey:** No, that's exactly everything I need to know, and definitely don't share any more.

**Adam Stacoviak:** Yeah, I don't want to share any more. You'll love it. And there's tons of folks on YouTube who are doing cool stuff with Lego, obviously... So maybe you can build Lego while they build Lego. I don't know. But anyways, that's cool. What kind of shows are you watching?

**Kurt Mackey:** I watch a ton of movies now. So I've been watching -- I loved Ted Lasso, so that variant of show where it's like a comedy that makes you sad sometimes; it's a fun one. I've been meaning to watch The Good Place, because everyone loves it, and I never actually watched it...

**Adam Stacoviak:** Me neither.

**Kurt Mackey:** I haven't had an easy time getting into that one. Obviously, I watched all of Fallout on HBO. That was really good.

**Adam Stacoviak:** Okay, I haven't watched that.

**Kurt Mackey:** I do like the -- they're not like high-class stuff. I can barely watch something that's serious and not entertaining for 10 episodes... But I can watch anything that's good, that's both funny and sad, or fun adventure is excellent.

**Adam Stacoviak:** Do you listen to books or read books? I mean, I say listen because I listen to a lot of books, more than read.

**Kurt Mackey:** Yeah. I read books. And in fact, actually, one of the things as I was going through my fun, emotional self-healing journey or whatever you wanna call it - I actually stopped reading when things got really bad... And one of the things I realized is I was actually using books as sort of an escape. Like, I only read escapism books. So I'm back to reading now and that's excellent. I did just leave my Kindle in an Uber, so we're all very sad today.

**Adam Stacoviak:** Oh, dang.

**Kurt Mackey:** But generally, I like to read. I actually discovered, I can't listen to audiobooks unless I've already read them, and then I actually really enjoy listening to the audiobook if I've read it.

**Adam Stacoviak:** Really?

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Okay. What about an audiobook that's only an audiobook?

**Kurt Mackey:** I'd have a hard time. I tried this in the car, because we drove like four hours on the way to Thanksgiving last week, and I just -- my mind wanders away from what I'm listening to, and I realize I've missed 25 minutes of something. So I probably couldn't, unless I was doing Legos.

**Adam Stacoviak:** I used to be the same way... Yeah, you might need to be preoccupied, where you can be semi-focused.

**Kurt Mackey:** I think I do.

**Adam Stacoviak:** Dishes, Lego, something like that. Try that. I'm gonna recommend a book, because of the book, as well as the reader.

**Kurt Mackey:** Okay.

**Adam Stacoviak:** So on Audible there is a very well-known narrator. His name is Ray Porter. And for me, I can listen to a lot of books because he is the narrator. He's the voice actor, so to speak. He does tons of different voices... He's not overly dramatic, and he is amazing. And my favorite author, or one of my favorite authors, is Dennis E. Taylor. And he wrote a book series called --

**Kurt Mackey:** Bobiverse?

**Adam Stacoviak:** Bobiverse. Yes, sir.

**Kurt Mackey:** I've read them. So I might like listening to them. \[laughs\]

**Adam Stacoviak:** So you'll love listening to them then. So if you're a fan of the Bobiverse, Ray does an amazing job narrating. So the Bobiverse book - they came out originally on Audible, and not in print. So now they're in print...

**Kurt Mackey:** Oh, I didn't know that.

**Adam Stacoviak:** \[01:25:51.15\] Yeah. I think 2017 might've been when he first launched the original book. But I'm a big fan of Bobiverse series. They're amazing as audiobooks. And if you like audiobooks, then I think you'd really like those books.

**Kurt Mackey:** Yes, no kidding. Wait, do you want another book suggestion?

**Adam Stacoviak:** Sure.

**Kurt Mackey:** So the Bobiverse books are not the same as, but actually remind me a lot of - have you read Children of Time, by Adrian Tchaikovsky?

**Adam Stacoviak:** I have not.

**Kurt Mackey:** Probably a good audio book. It's an excellent sci-fi. I'm very nerdy, so I call things speculative fiction when they're not like the Martian, where it's like heavy science-based sci-fi...

**Adam Stacoviak:** Sure.

**Kurt Mackey:** But it's sci-fi. It just doesn't need to be all the physics behind it.

**Adam Stacoviak:** Let me give you a new name for that then.

**Kurt Mackey:** What's that?

**Adam Stacoviak:** Plausible science fiction.

**Kurt Mackey:** Yeah, that's exactly what it is. It's amazingly good.

**Adam Stacoviak:** It's possible. It's probably not gonna happen, but it's possible. Like, Bobiverse is a stretch. I can imagine at some point in humanity that's a possibility.

**Kurt Mackey:** Right, exactly.

**Adam Stacoviak:** It's not here yet today, but there's a lot of things that align with that being somewhat possible or plausible to be true.

**Kurt Mackey:** Yup. Children of Time is similar to Bobiverse because there's a huge amount of time that passes, so you can see things happening externally, that you wouldn't necessarily get to watch as a human being, which I thought was really cool. That was my favorite thing about Bobiverse. It's like, you can play with time scales, and you can have like whole novas happen and see the effect on the universe around you, when you don't have to care about time anymore, which isn't the --

**Adam Stacoviak:** Yeah, they would travel for light years, and that was like "Whatever..."

**Kurt Mackey:** "Just go to sleep. Who cares?" I wonder if he realized -- I wonder if that was intentional, or he sort of just discovered that as he was writing these... Because I thought that was a really neat thing to explore.

**Adam Stacoviak:** Yeah. I think it's cool how he talks in milliseconds, versus like for a second, and like "I pause for a brief millisecond, or a millisecond", or whatever it might have been. That's kind of cool, in my opinion. Just immersing in that world. Anyways, I love audiobooks, in particular with -- Ray Porter, you'd look up him as a narrator, voice actor, and you'll find a lot of great books. And that's how I discovered other great books as well. But - interesting. So you're doing good.

**Kurt Mackey:** Doing great, yeah.

**Adam Stacoviak:** So in terms of the future for Fly, how has it been? Not exactly asking a funding question necessarily, but how solid is the future of Fly?

**Kurt Mackey:** So I have a weird take on startups. We can basically keep operating Fly as long as we want to... At some scale, if that makes sense. We have a pretty good, established business; we have a lot of ways we could tweak it to make it like profitable right now, for example. But I think the future is still huge. And so we're burning money to try and get big still, because I think there's a huge opportunity for our particular company to be -- the thing I tell people is I want it to be enduring and have an impact. Like, I built a company, we sold to IBM - basically gone now. I have a nice car, that was cool... But there's just no -- nothing I can just keep thinking about for the rest of my life. And I'm kind of -- I really want to keep working on this forever, and I think it would have to be... It has to keep growing or I kind of get antsy, I think. And maybe that's not true as a new, self-healed single person, but it's probably true.

\[01:29:07.15\] And so we're pretty healthy, but I think it's a kind of a toss-up if we're gonna get where I want to go or not, if that makes sense. There's a lot of threats to a company like ours. We're basically competing with monopolies, and in particular we're competing with monopolies in a time in the US where people like monopolies. There's not a lot of work going into limiting kind of the power of giant companies like there was 40 years ago, or whatever. And so there's huge risks to what we're doing.

The thing I mentioned about earning the reputation that lets you have outages, and people are just like "Oh, I guess we've just got to deal with this like everyone else is." It's like, that's sort of an existential threat. Like, there's a world where we can't be perceived as being good enough for companies to want to spend money on us. But I do think -- I keep talking about the LLM on machines thing. I think we have an incredibly good business of people coming and wanting to run their apps on us, and I think it goes very deep, because there's a lot of really valuable, good workloads.

I think the trick for a company like ours is people need to be able to theoretically spend a million dollars a month on the exact same product we're selling, and you can get big. And so I think a lot about Heroku, who you couldn't necessarily spend a million dollars a month on Heroku - it just, it doesn't go that deep - and I think we're in a really good spot there, because we've got kind of the depth of the platform there, and we've got a really good business we can build down to that, if that makes sense.

We're not raising money anytime soon. And part of that is because we don't need to. It doesn't make sense. We can't necessarily spend money faster right now to grow faster. I don't think we're to that stage. And also, why would you raise money right now? Oh my God, it's terrible out there. So we're just batting down the hatches and not for another two years, and hope the world changes. Is that a helpful answer?

**Adam Stacoviak:** That is a helpful answer, because you know --

**Kurt Mackey:** I'm the most skeptical person on the planet, so anytime anyone asks me that, I'm like "I've gotta tell you all of the things I'm worried about", when in fact I'm actually incredibly like drinking my own Kool-Aid. Like, people are still coming to work here, and people are not leaving... I just have no reason to want it to end. It's actually -- it's amazing. It's like all the hardship's worth it, because it's so good when it's going good.

**Adam Stacoviak:** That's all I've got. That's all I came here for. I think there's probably more we can uncover, but I think it would just go way, way deep, and we've got limited time for you to exit stage left on time for your next thing...

**Kurt Mackey:** I know. On to my next call, and go see why the cat is yelling. That's a new one, so I'm going to go check on this cat.

**Adam Stacoviak:** Yeah. Alright. Well, thanks Kurt.

**Kurt Mackey:** Yeah, no problem. I will talk to you later. Have a good week and holidays, if I don't talk to you again before next year.

**Adam Stacoviak:** You as well.
