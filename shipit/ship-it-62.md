**Gerhard Lazu:** So in Changelog episode 450 we talked about why we love Vim. And in this episode, we will talk about why we love to keep things simple. Starting with a simple development setup, a simple code editor config, very important, and the simple production. It gives me great pleasure to invite the person that cemented my love for Vim. Gary Bernhardt, welcome to Ship It!

**Gary Bernhardt:** Thanks. I'm happy to be here.

**Gerhard Lazu:** So this, I want to say, it's been a long time coming. And it has, but in unexpected ways. Because I have been a huge fan and a follower since \[03:29\] the one that really opened my eyes was Ruby - I forget which Ruby Conf... 2012, I think... 2011.

**Gary Bernhardt:** I think it was 2012, yeah.

**Gerhard Lazu:** And that was an amazing talk. Now, nothing beats, in my mind, Destroy All Software. You call them the classics; I still have them, I still watch them every now and then, when I feel like doing something different... And I think there is an art to approaching software the way you do. What's the secret?

**Gary Bernhardt:** \[04:01\] Well, thank you for that. I don't know what the secret is. Being extremely easily frustrated maybe? I don't know. I think probably if we really found it, it would be some personality trait that's generally considered undesirable. But I definitely don't have any magic. I don't know. I just -- I do it what I do.

**Gerhard Lazu:** I think there's something to it. Knowing what you're like, knowing who you are, this is what works for me... And apparently, it works for other people, too. It definitely worked for me, that approach to simplicity. I mean, hearing you talk about how use Vim with little plugins - I thought it was me that likes to develop in production, where Vim has no plugins... But apparently, it's you as well. \[laughter\] And what I mean by that is Vim with no plugins. Is it a matter of keeping things simple because of all the weird ways in which stuff breaks? Or is there something more to it?

**Gary Bernhardt:** There are things that people call like Vim distributions, where it comes with dozens or even hundreds of plugins installed... And if you use one of those, five minutes in you're gonna have seen a break, because there's just the interactions between all that stuff. Even if all the plugins themselves are correct, the interactions lead to failures, which is like a good summary of software development in general; you know, the more pieces there are, the more they're gonna interact. And the other thing is, I like consistency over time, in my keyboard shortcuts in particular. There's a big difference between using a set of keyboard shortcuts for a year versus a decade; you get a lot faster, you don't have to think about them, you don't even know what you're doing anymore... And I don't want to change that by changing my editor config over time. So those are the big reasons.

**Gerhard Lazu:** I really like the long-term approach. You mentioned a decade... Now, the majority of software developers have not been doing that for more than a decade, right? Because there's more and more people joining software development, and they haven't been around for long enough. It's just how it works. And it's great that the industry grows in that direction. But people that have been on the job, have learned on the job for one, two decades are rarer... And how do you spread that knowledge? How do you explain the trade-offs that you have seen in the decades that you've been doing this? I think that must be really difficult, especially when it comes to complex systems, because there's always this false belief that the more complex it is, the more magical it is, the more things it handles for you.

**Gary Bernhardt:** Yeah... I don't think I'm very good at it either. I'm not a good mentor. I mean, I think we'll probably get into some descriptions of specific trade-offs at some point in this conversation... But even -- we think about learning things in terms of teaching, as like a kind of active process... And to be honest, that is not how I learned software development. I basically am self-taught. And I do have a CS degree, but I had already been programming before I started that, and I have never had any kind of like long-term mentors. You can do it by just banging on the thing, and getting it wrong, seeing what went wrong, and correcting.

**Gerhard Lazu:** So I have mentioned Destroy All Software, which is where I got my fix for screencasts before YouTube was as popular as it is today. And I think there's something even newer, which I'm yet to explore, which is called Execute Program... So we can talk about that a bit later, what it is. But what I'm really curious about, and I'm sure our listeners too, is how does it run? Like, what is the tech stack? What is the infrastructure setup? How do you basically run Execute Program?

**Gary Bernhardt:** Yeah. Well, I own the company, and I am the lead software developer, so I know how it all works, and there's no one who can tell me not to tell you, which is a fairly unique situation, you know...

**Gerhard Lazu:** That's amazing. \[laughter\] So it's only you to disagree with yourself. And that's okay too, because you can change your mind.

**Gary Bernhardt:** Yes, right.

**Gerhard Lazu:** Permission to change my mind granted. Go for it! \[laughter\] Okay...

**Gary Bernhardt:** So before I actually describe all this stuff, let me say upfront. Big opinions stated upfront. Most systems are far more operationally complex than what's needed, at least small to the bottom end of medium-sized systems. I have no opinion about large systems, because I just don't work on them.

**Gerhard Lazu:** \[08:13\] When you say operational complexity, what do you mean by that?

**Gary Bernhardt:** Everyone means something different when they say complexity, right? So let me say what I mean by operational complexity specifically. When we say that a function is complex, we mean that it has a complex structure, which is there's no time element, right? It's complex now, and if we look at it a year later, it'll be equally complex. But when we say a production system is complex, or a deployment is complex, that's operational complexity. It's about running it over time. It's about how it evolves and how it's maintained. So it's an active thing, versus a passive thing.

And I'm much more concerned about and interested in operational complexity than I am about the static complexity of some code or something.

**Gerhard Lazu:** Okay.

**Gary Bernhardt:** So Execute Program - very quick summary of what it is, just because some of this is going to be relevant... So it's an interactive platform for learning programming languages and other tools. The lessons mix text with lots of interactive code examples, which is going to be important, because that code has to run somewhere. So it's a very unusual sort of infrastructure requirement. It's been a commercial product for three years, the code has started maybe five years ago in early forums. A maximum of four people have ever worked on it, so this is a small product, although most products in the world are small, even though mostly we hear about the big ones, which is sort of a distortion in the way that we talk about things. And it's a bootstrapped company. So it makes real money, but it's small. It's not a giant unicorn or whatever. So that's the product we're talking about.

Here's the architecture. The primary database is Postgres. I love Postgres. I think it's great. It can do almost anything you need any database to do, ever, unless you're at truly huge scale. The backend servers are at Heroku. It's a monolithic backend. One repo, one server process, that's it. It has some workers, with a queue, and the workers auto-scale as needed to accommodate load, just like the web processes do. And the workers in the queue are used for things like transactional emails, reminder emails, interacting with third-party API's where we just want to sort of shield ourselves from those API's if they're flaky, or slow, or whatever. We receive one type of incoming WebHook, and that's from Stripe. And the reason that exists is if we create a subscription and the underlying credit card is later expired or something, then we need to know that, so we can remove that person's access, because they're no longer paying. So Stripe hits us with a WebHook for that.

And then we get to the weird part, which is how do we execute the code that the user is putting into these exercises? So we have a fleet of executor VMs that exist only for this purpose. They scale up and down as needed, to handle whatever user load we have, because you know, if there's a peak, it could be a lot of these VMs, and they're expensive. And it's a very difficult process, because they have to be security-hardened, because they're running completely arbitrary user code, ultimately. And if we don't harden them, and you know, firewalls and all that stuff, and sandboxes, then people are going to send spam, or mine Bitcoin, or do all kinds of nefarious things.

They also have the wrinkle that as the code is executing, they're putting tracing information into the queue, which ultimately gets aggregated into the database, so that we can debug things when things go wrong... Because it's ultimately a distributed system executing arbitrary code; it's quite a complex problem. And this, of course, is the most difficult part of the architecture.

So it's Postgres, a single backend, workers with a queue, Stripe WebHooks coming in, and executor VMs. That's basically the architecture... Which I think is like -- this is pretty normal, I would say. Well, the executor VMs are weird, because it's a specific property of our problem space. But I think this design is pretty normal and not particularly complex.

**Gerhard Lazu:** \[12:06\] So I'm wondering, how much of this simplicity is down to you being the sole architect, implementer and debugger of this architecture?

**Gary Bernhardt:** Certainly, that's a factor. I mean, I'm not the sole person working on it, although it is definitely fair to say I've made all of the sort of architectural decisions. And I do like to keep things simple. I also sometimes lie in public to make a point, which I have done here... I'm sorry, I lied to you. You knew I was gonna lie, but you didn't know what I was gonna lie about

**Gerhard Lazu:** No, no, don't say that. Don't say that. I didn't know you were going to lie. Is it too early for the reveal? \[laughter\] Hang on, I still have a few follow-up questions before you do that.

**Gary Bernhardt:** Oh, okay. Okay, okay. Then I didn't lie. I would never lie.

**Gerhard Lazu:** Okay. Yeah, no, no, no. Let's just keep going with this.

**Gary Bernhardt:** I'll follow up. We'll follow up.

**Gerhard Lazu:** Okay.

**Break:** \[12:54\]

**Gerhard Lazu:** So I'm wondering, if you were part of a team where there was like two three of you, and each have strong opinions, and especially the K opinion, "We shouldn't use Kubernetes, because why not? It's really important." And someone else says, "No, not Kubernetes. Let's use maybe Knative." At that point, there are three opinions. Which one do you go for? And each of these are strongly held.

**Gary Bernhardt:** It's very difficult for me to answer, because I have no actual experience with Kubernetes or anything in that ecosystem. Generally speaking, for things like that, for very high risk, potentially high cost modifications, where I don't know what it's gonna look like, I like to prototype them. So usually, I want to do that in a sort of simplified form first and see how it goes. For example, I was considering doing server-side rendering for everything, for SEO reasons. So I manually made the landing page server-side rendered, waited a couple months, nothing happened, so I just rolled it back. So I'm not going to take on that complexity if it doesn't actually make the difference it's supposed to make. So I would try to do something like that. I don't know if that would really apply here, because we're talking about infrastructure. We could probably prototype it, deploy it not to users, but just leave it running and see how it goes... Because you know, there's nothing that stops you from running multiple side by side copies of your infrastructure and just only sending users to one of them.

**Gerhard Lazu:** Oh, yes.

**Gary Bernhardt:** \[16:15\] You could do that. And you could push every deploy to each of them and see "What happens over time, how does it feel?" So I might consider something like that, but like I said, this is outside my area of expertise.

**Gerhard Lazu:** I'm amazed that you settled on this setup, single-person, and I settled on Kubernetes single-person. I had other reasons for it, okay... So it wasn't just like, "Let's just use Kubernetes." It was also for the content. It was also for a couple of things that I thought we needed to do... And then I realized, "Actually, you know what - we can delegate them to some other third parties, so like software as a service." Now, with that case, we have to manage those, so it's a bit less obvious where all these things are, rather than having everything in a single place. For example, managing DNS, managing certs is not all in one place. And when you have a platform as a service like Heroku, a lot of those concerns, like certificates, for example - they're just managed. It's there, you don't have to worry about it.

In our case we always had a CDN, so how do you get the certificates to the CDN? Then you have to start writing like your own things that get those certs from the platform to the CDN if it's not built-in... So there's complexity like that which is hidden, and then you may feel good about yourself about solving it in your own way... But maybe there's something that you can just leverage, and you know, that's what we end up doing.

And this evolution - so we started with Docker, we went to Kubernetes, and now we went to a PaaS again, which is not too different from Heroku. It just has a couple of like nice features. In all this time, that simplicity that you talk about, it's always worth bearing in mind. What is the simplest thing we can do and get away with it? And in your case, what you settled on - I'm sure it worked really well. But I'm wondering, were there moments when things broke? Especially that queue, because I'm intrigued about that queue. What is this queue, how does it work? I mean, tell me more about it. I think there's something there.

**Gary Bernhardt:** Can I reveal the lie now?

**Gerhard Lazu:** Yeah, you can, you can, because I think that was the one... I just wanted to zone in on it, because I think I know what it is... But go for it.

**Gary Bernhardt:** Okay. It's interesting, so you have an idea... Well, queues are notorious, and the queue has never broken, but the reason it hasn't broken is because it doesn't actually exist. \[laughter\]

**Gerhard Lazu:** No way...!

**Gary Bernhardt:** The queue was a lie. In fact, most of the details of that architecture were lies, because most of that stuff just doesn't exist. It's not necessary. So that architecture that I described, despite sounding -- I think I tried to make it sort of on the simple end of what would sound pretty normal...

**Gerhard Lazu:** It did.

**Gary Bernhardt:** That is massively -- okay, good.

**Gerhard Lazu:** Except the queue.

**Gary Bernhardt:** Except the queue, okay.

**Gerhard Lazu:** The queue was like "I'm not sure about that one..." Do you need a queue? Like, you need a database. Okay, sure...

**Gary Bernhardt:** Yeah, you need a database. There is a database. \[laughter\] But it was massively overcomplicated, and I know that because... Because we don't have that stuff. So now let me describe the actual system.

**Gerhard Lazu:** \[laughs\] Oh, this is too good. Alright. You can sneak a little, a little one. Let's see how much of this is true. \[laughter\]

**Gary Bernhardt:** No more lies.

**Gerhard Lazu:** 75% correct. \[laughter\]

**Gary Bernhardt:** So going through those same things in order... The primary database is Postgres. I do love Postgres. It's great. The backend servers are at Heroku, and they are a single-process, monolithic, one repo, one service. Fixed number of dynos though. We don't bother with auto-scaling; we just have a bunch of headroom. The thing is quite efficient. It doesn't need to auto-scale.

So here are the things that are actually different. Everything else is different. There is no queue. There's exactly -- there is a worker process. There's exactly one worker process. Never zero, never two. I mean, it could handle -- it wouldn't be bad if there were zero or two, but there's just always one, just by convention, I guess. So no auto-scaling or manual scaling on that. No queue, I think I said that...

\[19:55\] So the way that the worker works is that every hour it wakes up, and it sends some reminder emails and does a little bit of housekeeping related to building stuff... And then it just sleeps; it just sleeps for an hour, and then an hour later wakes up and does it again. So what that means though is that a lot of things that are often put into queues, things like sending an email, or anything you wouldn't want to block the request flow - we just let those block.

For example, when you register an account, you don't see a success message until the API backend has sent the confirmation email to our email provider. And it's fine. Like, nothing bad happens. And this means we avoid all the problems with queues, like operations getting split into pieces, the before queue and after queue part, backpressure management, and migration problems where you change the data format of a queue entry, but there are potentially queue entries live in prod when you make that change... None of that stuff exists.

So whenever I explain one of these lies, I want to show the trade-offs that we could have, made versus the trade-offs that we actually did make. So the bad trade-off that we could have made was to think that we cannot suffer an extra 50 milliseconds of blocking registration or a few other infrequent operations. Also thinking we must gracefully handle any failures in our upstream email provider and be able to retry from the queue. And so we have to have a queue and workers to process that kind of stuff. But the good trade-off that we actually made is I don't care. The users can wait 50 milliseconds, it's fine. It's registration. I wouldn't do that on every page load, of course, but it's fine. And in three years of commercial operation, our upstream email provider has never had an outage that caused them to reject an email that was going out. We've had like spam marking problems and stuff, like everybody does, but we've never actually had a problem because of this.

**Gerhard Lazu:** Since they're so amazing, can we mention their name? Because I'm curious. Who are they? Who's this amazing company?

**Gary Bernhardt:** I would not recommend them, so I kind of don't want to say it.

**Gerhard Lazu:** Alright, okay. \[laughs\]

**Gary Bernhardt:** Not for this reason. They are very reliable in this way, but we've had significant spam problems, and the support has not been great...

**Gerhard Lazu:** I see.

**Gary Bernhardt:** ...and will just tell us problems don't exist when I can see them happening. So...

**Gerhard Lazu:** So in the next three years, if you come across an email provider that is good, and you enjoy, do tell us about it.

**Gary Bernhardt:** When I have a good one, I'll come back for a 45 second podcast, and I'll be like, "X is good."

**Gerhard Lazu:** Well, if you embrace the lie first, then the real thing. I'm sure we can make it at least 90 seconds long. \[laughs\]

**Gary Bernhardt:** Yes. "You should write your own SMTP client." \[laughs\]

**Gerhard Lazu:** Yeah, exactly. But anyway, so wrapping up the queue part... We batched this stuff up in that worker, but currently, all the work that it does takes about 45 seconds total, and it does that once an hour. So there's a massive amount of headroom to -- you know, we could easily grow by 100x before we even had to think seriously about any kind of optimization there.

**Gerhard Lazu:** Yeah.

**Gary Bernhardt:** Okay, so that was the first thing that doesn't actually need to exist. The second thing is the Stripe WebHooks. I did not mention that if you're using Stripe WebHooks, they need to work in dev, because you have to be able to actually exercise the things you're changing about the system. And so Stripe has this mechanism where they basically forward the WebHooks into your local machine, because you don't have a publicly-exposed IP address normally. And unfortunately, I've found that to be unreliable. Sometimes WebHooks don't show up in dev. In prod I'm sure it's fine, but in dev they didn't show up. And you can find a lot of GitHub issues about this, too. So it's not just me.

And I don't ever want to find myself asking, "Is our billing code broken, or is this just Stripe WebHooks being flaky?" Like, that is not a comfortable question. I am very conservative about billing code.

So how do we handle that situation where someone subscribes with a credit card, and then the credit card eventually expires? The answer is one of the things that the worker does when it wakes up is it just -- it hits Stripe with a fairly subtle query that gets all the subscriptions that might have expired recently, and it just processes all of those all the way through. And you know, it's never going to be very many, because this is an uncommon thing. And it was kind of tricky to write, but it's less tricky than having flaky WebHooks. So the trade-offs here.

\[24:02\] The bad trade-off that would have led me to use WebHooks would be if I thought we cannot have the users have free access to the product for like even an hour after their credit card expires. We must process cancellations immediately via WebHooks, even though it complicates dev, it complicates CI, it complicates prod, and it's flaky. And the good trade-off is we don't care if the user has free access for an hour. Or a month, frankly. If they like the product, they're gonna re-subscribe whenever the thing gets actually canceled. So it's a gift to them, and the operational simplicity is a gift to us ourselves, and everybody is better for it.

By using those WebHooks we would be building a real solution to an imagined problem, because it's not actually a problem. Okay, so that's the WebHooks.

So the final lie was those executor VMs. If we ran VMs that ran user code, attackers would inevitably attack them. It's free compute for them. The bad trade-off is we run the user code and executor VMs, we incur two network roundtrips from the browser... This code is typed into the browser, so you've got a bunch of latency added there. We have to security-harden those things, firewalls, sandboxing, constantly staying on top of security patches. Even if those upgrades potentially conflict with the content of the courses, we have to take them, because we can't have insecure executor VMs. It's a huge amount of risk, a huge amount of cost, it adds latency... And what we actually did, the good trade-off is we just run the user's code in the browser. And that requires us to build some infrastructure, but we ship the entire TypeScript compiler to your browser; we ship Babel to your browser. We ship SQLite to your browser, compiled to WASM. We send a lot of bytes over the network, which is a downside, but it's much better, because once it's loaded, the responsiveness is fantastic, and our lives are easier. And you know, that works only because the things we need to do can be done that way.

But suppose we want to make a course on Node, which we can't really run on the browser. I would like to, but I just don't do that, because that is part of the trade-off, right? The trade-off exists not just like "Does it make the code complex?" Not just "Does it make production operations complex?" We also have to make trade-offs across product decisions, across business decisions, in our case across content decisions, what courses do we make, how costly would it be in other domains if we did that...?

So the queue doesn't exist, the WebHooks don't exist, the executor VMs don't exist. The actual architecture is just Postgres, monolithic backend, a single worker process that wakes up once per hour, and that's basically it.

**Gerhard Lazu:** So in conclusion, I think it's safe to say that you optimized for no Wats. Zero Wats is good. Anything above zero, not so good. Is that what happened here?

**Gary Bernhardt:** True. I mean, I don't know if I achieved zero, but certainly, we're trying to limit those as much as possible. \[laughter\]

**Gerhard Lazu:** That was, again, one of the best talks, I think, the Wat talk. And I remember you giving JavaScript as an example. I think Python -- was Python at some point involved in that? I'm pretty sure it was.

**Gary Bernhardt:** Ruby. It starts with Ruby, and then it goes to JavaScript.

**Gerhard Lazu:** Ruby and JavaScript, okay. Why do I remember Python? Maybe someone else gave it as an inspiration...

**Gary Bernhardt:** I think somebody else did, yeah.

**Gerhard Lazu:** Right. I'm sure the equivalent of that in infrastructure exists. I just don't know about it yet. So if someone that listens to this knows that, infrastructure Wats whether it's Kubernetes, whether it's something else, whether it's queues, whether it's all those executor VMs that that run... I don't know, Play With Node, Play With something else maybe, I don't know...

I know it's a really tough problem to solve, and there's so many considerations. So it sounds almost like too easy to remove them... Because it's a hard decision, I suppose, and business is involved, and product is involved... And I think it requires almost like a special type of perspective, because you need to hold all perspectives, and you need to have the authority to make the call, and not argue amongst yourselves why this and why that. And I think that's like a privilege. But I really like what you said, that it's a gift. It's a gift to your users, it's a gift to your business, it's a gift to everyone that works at Execute Program... Because it just makes things so simple.

\[28:21\] So you were able to observe this long-term, like a decade, give or take a few years... Because Execute Program - it's been going on for three years, but Destroy All Software has been going on even before that, and I'm sure that some of these simple, pragmatic choices have been present in Destroy All Software, too.

**Gary Bernhardt:** They have, but it's a much simpler system. It doesn't have any of this stuff. I mean, certainly, you know, there's no queue... Basically, honestly, it's about the same architecture. Single worker process, Postgres backend servers. But you know, when I was building that, I never would have wanted to express opinions based on it in public, because it is so simple. But Execute Program is -- I mean, it's not the most complex app in the world or anything, but it is certainly a non-trivial system. And so the fact that it sounds plausible for it to be complex, but it is simple, is I think a good illustration of that gap.

And just to really drive it home - I didn't even claim that it was serverless. I didn't claim that it was a microservice architecture. I didn't claim that it was made up of a bunch of separate repos for the different subsystems, all of which are fairly common... So if I'm gonna lie, I try to do it conservatively... \[laughs\]

**Gerhard Lazu:** Yeah, that's why it was a very good one. It was like almost, apart from the queue -- I mean, all were like reasonable choices; things that I've heard other people make before. So it wasn't some outlandish architecture, it was like "Yup, sure, that sounds something that people would do, and that people have done." Apart from the queue. Not enough detail on the queue. \[laughs\]

**Gary Bernhardt:** Yeah. The problem is that I don't run queues, so I had to imagine, "How would I talk about it?"

**Gerhard Lazu:** Yeah. It's a queue... \[laughs\]

**Gary Bernhardt:** Backpressure, I guess? I don't know... \[laughs\]

**Gerhard Lazu:** So I think in the big scheme of things, keeping customers happy and keeping your sanity is far more valuable than the money that you could have made, and didn't. I think that's okay. So imagine all the support tickets, all the frantic "What is going on?" The stress of debugging something that makes no sense, because these systems are really complicated... And despite our best efforts, things will fail. And if we think that we will write perfect code, and we'll architect and build perfect systems - I haven't seen it happen, and I don't think it will.

**Gary Bernhardt:** No... I think the sort of culture of software development has gotten much better at acknowledging this, at least since I started... Because I remember, in the old times people would be like, "Oh, you're having problems manually managing memory in C, with \[unintelligible 00:30:57.01\] Well, you just need to learn how to do it better." And like, "No..." \[laughter\]

**Gerhard Lazu:** "That's your opinion, and I disagree."

**Gary Bernhardt:** Yeah, exactly. And I think that that's not really the way we tend to approach those kinds of things anymore. And that's a great improvement in the culture.

**Gerhard Lazu:** I think just not being afraid of failure, and trying to build resilient systems, but knowing that we will fail, but that's okay, it's like no reason to give up, just keep trying... Keep writing those checks, and the guards for you to know when things are off, and what exactly may be off... Even the printf statements. I mean, you know, a lot of people say "Oh, printf is terrible." And I'm sure that's one of the reasons why the code isn't open source. There's a lot of printf. \[laughter\] I don't know, I'm just making assumptions, but it's things like that.

**Gary Bernhardt:** There's a bit, yeah.

**Gerhard Lazu:** Is it Ruby, by any chance?

**Gary Bernhardt:** No, no, it's all TypeScript.

**Gerhard Lazu:** TypeScript? Okay...

**Gary Bernhardt:** \[31:53\] Frontend and backend, yeah. 100% TypeScript. The backend is Node. In fact, I didn't mention this when we were talking about architecture, but one of the major benefits of all the simplicity, in addition to all the operational stuff - it also makes local dev really easy. All you need is Node and Postgres. And even if your Postgres is a couple of major versions behind, it'll work. And CI definitely runs the right version, so it'll get checked to there. And so you need you do need the right version of Node, it won't even boot without that. And you need roughly a Postgres from within the last few years. And then I guess you need a Stripe key. And that's all you need to run to run it locally.

**Gerhard Lazu:** So when you're saying Node, do you mean Deno? No, Node. Which Node version?

**Gary Bernhardt:** I actually have a branch where I'm upgrading us from 14 to 16... I think that's right. It's got to be right.

**Gerhard Lazu:** Okay. which is the latest Node version these days? I haven't been following it for a bunch of years.

**Gary Bernhardt:** I think that the latest actively maintained one that's going to be LTS is 16, which relatively recently entered its sort of primary lifecycle. Node versioning is a little weird, because not all versions go into LTS. It's like, odd versions don't, and...

**Gerhard Lazu:** What are your thoughts on Deno? I mean, have you even looked at it? I've heard of it on the Changelog, from Ryan, but that's it. I just skimmed through that podcast.

**Gary Bernhardt:** Yeah, it seems promising. I've not looked at it closely. As you can guess, I do like TypeScript quite a bit. But you know, if I'm going to bet a company on something, and spend years writing code that I don't have years to rewrite, I really want to build it on something that I trust to be maintained over time, and so on. And Deno is not quite at that critical mass point for me. If I had a larger dev team with a lot more sort of effort to spend on things, I might have a different opinion there.

**Gerhard Lazu:** Okay. So we talked quite a bit about the stack itself, and what you run locally... And I'm wondering, how does a change go from commit to production? What does that look like? Because June 1st - you wrote this, Twitter, right? Amazing place. "I just needed a small new feature to finish the task I was doing. It took three minutes to write the code, then nine minutes to deploy. So it was live in production 12 minutes after I realized I needed it. I can't imagine working any other way." So run us through those 12 minutes as to what happens, because I think that is an amazing timeline, and it's a great way of putting it.

**Gary Bernhardt:** Yeah, the change itself was fast, because it was in an admin interface, so I didn't have to worry about -- I didn't write any tests or anything. I was just basically exposing like one value in an admin interface to answer a support request that a user had made. And then the nine minutes is -- it's a little variable, because CI timing, you know, depending on what VM you get, depending on who else is on the underlying machine... But it's roughly evenly split between the actual CI run and the Heroku deploy. And the Heroku deploy - I have really no levers to pull in terms of performance there. The deploys run on a small VM, you can't change that, at least as far as I know. And I have to do the TypeScript build, I have to do the Webpack build... There's a bunch of stuff that kind of has to happen there.

The CI though, I have spent -- about every six months there's like a CI apocalypse, where I rework it to make it more efficient, because things have changed over time. Currently, that CI build uses all 80 of our CircleCI VMs; that's the maximum you can get without going to like, "Call us on the telephone" kinds of pricing, which a small company like ours is not going to do...

**Gerhard Lazu:** Of course, yeah.

**Gary Bernhardt:** And most products of this size wouldn't need 80 simultaneous VMs for CI, but the reason that we do it is another of the weird things about this product... Our courses contain thousands of code examples that are all interactive in the browser, and we really never want to ship one of those that's wrong. So every single one of those code examples gets individually gone through in a Cypress test, inside of CI, and all of those get parallelized onto those 80 VMs. But even with all that, it's four and a half minutes; without all that it would probably be, I don't know, two, or three.

**Gerhard Lazu:** So four and a half minutes for the CI tests. 80 VMs, did you say?

**Gary Bernhardt:** 80, yeah.

**Gerhard Lazu:** That is a lot.

**Gary Bernhardt:** \[36:12\] Actually, I take that back. It's 79, because sometimes the deploy from the previous CI run is still going... Because CI actually pushes to Heroku, that's the way I've structured it. And so it has to be 79, so that it doesn't have to wait for the previous one. \[laughs\]

**Gerhard Lazu:** Wow, okay. That's a very interesting fact. 79 VMs, okay.

**Gary Bernhardt:** Micro optimization. \[laughs\]

**Gerhard Lazu:** Okay. So four and a half minutes to run all the tests and deploy, and then nine minutes --

**Gary Bernhardt:** Four and a half for tests, four and a half for deploy.

**Gerhard Lazu:** I see. Okay, okay. So first of all, is this 12 minutes fast enough for you?

**Gary Bernhardt:** It depends on what enough means.

**Gerhard Lazu:** So would you like it to go quicker? I mean, that's what I'm thinking.

**Gary Bernhardt:** Of course, yeah. Always. Yeah. I mean, I want everything to be faster, as does everyone, I think. No one would turn down speed. But it's as fast as I can get it, so it's good enough. I am content with it. It is good enough; it does not feel like an impediment. Because I'm not deploying, even -- most days, I don't even deploy five times. An average day is probably two to three.

**Gerhard Lazu:** So in all this setup, when it comes to the infrastructure set up, when it comes to the CI, when it comes to how you get code changes out, the tests that you run, and everything else that happens in between - how you monitor, how you alert... What is the one area that you're very happy about? Like, you're really happy how that area works. And it can be all of them, but I think there's one that kind of stands out; there usually is. One that, you know, makes you really happy, and you feel like that's the best one by far.

**Gary Bernhardt:** You mean specifically in the context of like deployment and operations kinds of stuff?

**Gerhard Lazu:** Yeah, in the context of Execute Program, like when you look at all the different areas, the one that you're really happy about. And I'm sure you can think of the follow-up - the one that you wish was better.

**Gary Bernhardt:** I guess the one I'm happiest with is really easy to say, which is that as far as I can remember, in three years of commercial operation, there has never been any problem that was caused by the actual operations of the production system. Nothing's ever gone down, nothing's ever been misconfigured in a way where it didn't boot... Because there's almost nothing to configure, there's almost nothing to communicate with each other... Even if the worker died for like a month, nothing bad would happen, really. Like, nothing really bad would happen. Just, people would not get reminder emails; that's basically the only major consequence. So you know, that's not a single piece of the system, of course, but... The lack of pieces is the best part. \[laughs\]

**Gerhard Lazu:** Yeah, that's a good one. That's a good one. Okay, okay.

**Break:** \[38:48\]

**Gerhard Lazu:** So I'd like us to switch gears and talk about how Execute Program came to be, and what made you change or switch gears. Let's use that again, from screencasts to a more interactive format.

**Gary Bernhardt:** Well there were a lot of reasons, as you can imagine. One is that software development is an interactive activity, and learning about it through passive media is inherently a mismatch. It's kind of like trying to learn to play the guitar by reading a book. You can learn things about playing a guitar by reading a book, but no matter how much book you read, you cannot get to the point where when you pick up a guitar, you will be ready to play. And so interactive media like Execute Program more closely match what the actual work looks like., and so I think it's a better way to learn overall for that reason.

Also, just as a purely practical concern on the production side, video can't be edited really. You can go back and re-record a video, but you can't edit it. So because technology has changed so quickly, things tend to go out of date very quickly, and sometimes that makes them look wrong, because in a video you might say such and such is true of some programming language, but by the time someone watches that a few years later, it's not true anymore, and so it looks like it's a mistake, but in reality it's just the world changing.

And then the third one is video is a much more like kind of personal medium. I mean, I never had a camera on me, but it's -- I don't know, it feels much more like a performance, and you have to get it right all at once, because it happens in real time, whereas when you're writing code examples or text, you can edit it as much as needed, and other people can edit it to get a different perspective. It's much easier to work with. So there are many, many reasons. I could probably talk all day about this, as you can imagine, but...

**Gerhard Lazu:** Okay. So when it comes to how people interacted with Destroy All Software, and now with Execute Program, how did their behavior change?

**Gary Bernhardt:** \[44:07\] I think Destroy All Software is much more likely to be sort of -- it's closer to entertainment, in a sense... Which was intentional; you know, it was designed to be fun to watch. Execute Program is much more motivated by the satisfaction of coming back the next day, getting a review for the thing you just learned, and finding that you actually remembered it and are able to complete those review code examples. And that feels better to me personally. I mean, both of these things are fine, but it feels really nice to have that sort of very material feedback for people and for us, that they're actually retaining information. And you can't get that without an interactive medium.

**Gerhard Lazu:** Yeah, that's right. I can definitely see that... Like, being able to try things out, seeing what you think you know, or what you think you understand is so valuable, beyond just like a small exercise in a book, or you try it out and see how you can continue this code, or whatever you do in a video. I think that's lot better.

Do you see this working well for environments which you cannot run in the browser? I mean, you mentioned about WASM, and how you ship all those bits, and it runs on the user's computer, in the user's browser... Do you see this working if that was not the case?

**Gary Bernhardt:** Yeah, I think it absolutely could work. There'll be a bit of extra latency, of course, when it's hitting the backend... So you know, we could build those executor VMs, we probably will build them eventually, because we will want to do courses that involve backend stuff. The bigger challenge is not so much where the code runs, but the sort of nature of the output of the code. Currently, all of our courses have code examples where the code evaluates to a value; like, if you're in the TypeScript course, either the code's gonna run and give you a value back, or you're gonna get a type error. You know, it's very concrete.

And a lot of our code examples, most of them, you're actually typing in the return value, as opposed to editing code. Some of them you have to code, but it's a mixture. The real challenge for us is "How do you do a course on React?" for example. Because there's no return -- I mean, you can't ask the user to type in the entire virtual DOM that the thing rendered, right? So you have to have some kind of visual mechanism where you show them like, "Here's what it should have been, and here's what yours rendered", or something. I don't know. We haven't done it yet. That's my main, my number one idea. But that's the big challenge. It's a huge UX challenge to build this kind of thing, and I don't know of any prior art for that kind of interaction yet. We'll get there though, and we'll get to the executers. They will become real. \[laughs\]

**Gerhard Lazu:** Okay. That's a good one. Yes, I can see that. I learned about just what it takes to run, play with Docker and play with Go, from an operational perspective... We talked with Marcos back and forth, and it is a really tough problem. So like, those executers that you talk about - I haven't spent a lot of time to think about it, but when I hear him talk about it, I realize, "Wow, there's a lot to this."

So I do realize the challenge that that is, but have I haven't done it myself, so you know, it's difficult to say, "Oh yes, I have all these battle scars." Ephemeral, for sure. Super-locked down, read-only partitions, even like network throttling, so that -- you know you're so constrained to only do what you're supposed to do. Even time constraint. So yeah, sure, you can like run it for like 15 minutes, 20 minutes, and then that's it; and then you just get a clean environment. So there's like a bunch of approaches that you would take to minimize the impact that someone that is not using it for its intended purpose can have. But even so, it's hard.

**Gary Bernhardt:** Yeah, it's a very difficult problem... Especially in a world where someone can write an automated tool that registers accounts, even maybe pays for them to get unlimited access, because the ROI on it is actually positive.

**Gerhard Lazu:** \[47:56\] Yeah, exactly. Okay. So what do you see for Execute Program, for example, for like the next half of this year, but also beginning of next year? Do you have anything interesting coming up, anything that you're excited about maybe?

**Gary Bernhardt:** I do. A lot of it is not really code, or production-related. A lot of it is just sort of -- honestly, I guess it's marketing, although not in traditional senses. My big focus, in addition to just marketing stuff... Everyone turns into a marketer in the long-term, I find... \[laughs\] Some way or another. But one of my focuses right now is to grow the team with people who are around in the long-term. In the past I've been sort of the one constant throughout the life of Execute Program; other people have worked on it, but they've been contractors, and kind of doing specific things here and there... And I really want to grow it into something where there's a team of people who -- you know, if I, let's say, get sick, or want to go on vacation for a month, or want to retire, eventually, I want to have a team that can that can run it without me. And I certainly don't have that right now. So that's, that's my big goal. It's organizational.

**Gerhard Lazu:** Okay. Speaking of organizations, I know that the whole approach to shipping it - it doesn't apply just to code. It applies to how you validate the ideas, and how you handle complexity long-term. And most of it, let's be honest, it is people complexity; we call it organizational complexity, but it is people that either you don't have enough of, or they're like in the wrong place at the wrong time... And if you're lucky, you have some great ones that just come together in unexpected ways and just make stuff work.

So when it comes to organizational complexity, when it comes to how you get your ideas out there, what have you observed in Execute Program, but also along your career long-term? Like, how does that complexity go up and down the stack? You talk about it vertically and horizontally, and you have a very good way of putting it, but I'm sure that you know where I'm going with this.

**Gary Bernhardt:** Well, I will give another caveat here, or really repeat the same caveat that I said at the top, which is I run very small companies, I've never worked for Google, Facebook, Amazon, any of that; I've never worked on a very large system, I've never worked in a very large organization... So you know, anything I say, you have to read it through that lens. But my goal is to understand every aspect of the business, horizontally. So by vertically, I would mean like your specialization; probably everyone listening to this is a software developer of one sort or another. We are all specialists in that vertical section of the work, software development. Horizontally I would mean like can you think about the marketing, or at least an approximation of how a marketing expert would think about it? Can you think about design? Can you think about finance? Can you think about the business operations? I'm not good at most of those things, but I want to be able to think about them enough that I can make at least reasonable trade-offs across the whole business.

And a lot of times what I hear from friends who do work in larger organizations is that other parts of the business are basically setting constraints that the software teams then have to implement, and that can lead to tremendous inefficiencies, when you end up building things that don't really matter. So you have the vertical component of a specialty, you have the horizontal component of all the different specialties that you want to be able to work across, and then you have time, which I guess in this analogy is depth, although it starts to get weird to think about... But all of these things evolve over time. and the thing that really matters is you want like the integral of complexity over time; you want to minimize the total complexity over a period, a long period, like ten years, and most of that complexity is not going to be in the first six months, it's going to be in the maintenance. And many times, most of that complexity is not going to be in the code.

\[52:03\] One example I really like to trot out here, because it's so horizontal, is suppose you're building a billing system, and you're using third-party to process credit cards. It has two modes. One mode is every single time a charge is run, we make a deposit to your bank account. We deposit the money immediately. The other mode is every day we do a deposit of all of the day's transactions. You might not have any preference, or there might be some reason that the per transaction thing is preferable to you first from a software perspective. But what does the bookkeeper think about this? The bookkeeper wants one transaction; they do not want 5,000 transactions a day. And you know, it's an easy to understand example, because even if you're not a bookkeeper, it's clear what it means. Obviously, it's more difficult to do that in more subtle cases, but that kind of thinking, being able to think across domains other than your own area of expertise is so, so valuable. And it's very valuable to an employer, if they're smart, if they see what they're getting.

**Gerhard Lazu:** I think this is a great, great takeaway. I was going to ask you for one takeaway to wrap our conversation today, but this is it to me. We are so comfortable in the areas that we operate in, and it sometimes hurts our brains to think about how money flows around the business, or what constraints is marketing setting for us. And those are some very good reasons we know why certain things need to happen by certain date, for example. Black Friday comes to mind; you know, the election time, things like that. Christmas. You either make it, or you miss it. I mean, there is no in between. And sometimes we have to do things in software, in operations, that sounds unreasonable. But the unreasonable part doesn't come from some of the requirements, it comes from the fact that our systems are so complex; they cannot adapt to these realities, which - that's exactly what they are, and it will happen, whether you like it or not. You'll either make it or you'll miss it. And then what can you do? Wish them away? No. You can keep things simple. You can optimize for all the things that you're not going to do, all those cues that you're not going to have... \[laughter\] Okay, and make it a reality, don't make it a lie, because you may not just need it, and you may not need Kubernetes. And I know this is big coming from me, but I'm coming around... You know, I'm starting to realize when you don't need it, and when you do. So it just goes both ways. Some of the trade-offs - just be more deliberate and have like a wider, horizontal perspective, rather than the vertical one. I really like that.

**Gary Bernhardt:** And the time.

**Gerhard Lazu:** And time.

**Gary Bernhardt:** And sometimes you should have a queue.

**Gerhard Lazu:** \[laughs\] Can you give me an example of when you should have a queue?

**Gary Bernhardt:** You have to pay me a lot of money to give you the one-sentence description of exactly when you should have a queue. It's an expensive answer. \[laughter\]

**Gerhard Lazu:** Okay, I like that. Okay. So if someone feels rich and wants to do that, let's do that. Okay, I like that.

**Gary Bernhardt:** It's like the Wu Tang album that only one person can own. \[laughter\]

**Gerhard Lazu:** Okay. Well, Gary, it's been an absolute pleasure to talk to you today. I had so much fun. I am looking forward to next time, I really am, because I think what you do long term is what has always fascinated me... You know, from your Emacs days, to your Vim days - and those were the haydays - and then to Destroy All Software, which was so fun to watch. Again, I haven't watched them all. I have the somewhere, and I should watch them at some point. I think they're still available, like classics, for people, if they want to get them.

**Gary Bernhardt:** It's all still available.

**Gerhard Lazu:** Yeah. But also Execute Program, I need to check it out a bit more closely to see what it does. TypeScript is not my jam, or my butter, but I can see something there. I can see that simple approach, and I'm very curious to see how it works in practice as a user; just the experience that you as a user get. Because I think ultimately, we're all users of one thing or another thing, whether it's an API, whether it's this operationally complex or simple thing... And there's a lot to learn; always lots to learn, and I'm very curious. So that's it for me...

**Gary Bernhardt:** Alright.

**Gerhard Lazu:** Looking forward to next time. Thank you, Gary. Talk to you soon.

**Gary Bernhardt:** Yeah, thank you for having me.
