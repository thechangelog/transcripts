**Nick Nisi:** Hoy-hoy, welcome to another exciting JS party. I'm your host this week, Nick Nisi, and I am joined by my good friend and yours, Mr. Kball. Kball, how's it going?

**Kevin Ball:** Going good. Ready to have some fun, get a little goofy, and learn about OpenNext.js.

**Kevin Ball:** So exciting. Yeah. And with that too, to help introduce OpenNext and the serverless stack - is that what SST stands for?

**Dax Raad:** Oh, that's a long story. We can get into that in a little bit, yeah.

**Nick Nisi:** Cool, cool. And that voice you hear is Mr. Dax Raad. Dax, how's it going?

**Dax Raad:** Good. Glad to be here. Good to meet you all.

**Nick Nisi:** Really excited to have you here. Why don't you tell us a little bit about yourself?

**Dax Raad:** Yeah, so my name is Dax, I work on an open source framework called SST. We are very focused on helping people build applications on AWS, really just focus on the serverless pieces of AWS, what we think are the parts you should be focusing on... And we build a framework that really smooths out the rough edges of what can otherwise sometimes be a painful experience, as many people know.

**Nick Nisi:** Yes. \[laughs\] Yeah, definitely. So I guess, to start off, what is SST? How did you get involved with it, and how is it doing that smoothing?

**Dax Raad:** Yeah, sure. I can give you a little bit of my story with kind of how I ended up joining, which is maybe a little bit interesting. So I'm a software engineer, I've been a software engineer for a little over 10 years now. My entire career pretty much has been either founding companies, or very early stage, or consulting at early-stage startups. So I basically was taking a break after one of those stints, where I did work at a bigger company as a director of engineering, where I didn't touch any code at all, and I wasn't doing -- I mean, I went from just touching every single part of a company, working in early-stage companies, to then having a very narrow management, like middle management role. And at that time, I had been doing everything in Elixir, Terraform, Kubernetes, just kind of deploying containers... That's how I viewed the software world. And because my role was a full-time manager, I was like "I've got to hear a lot of time on my hands. I have time to learn other stuff. Let me just mix it up and try and learn something new." So I found this whole serverless thing, which at the time I just saw as like a little toy that you can use for -- you know, little utility things here and there. But I found like a whole group of people talking about how you can build like real full applications this way. The benefits of doing that - not just technical, but even an impact on your business, how that enables all kinds of new business models... And it really clicked for me, so I started getting more into "Okay, let me try to build stuff in this way." It was very different from everything I was doing before. What I was doing before was very stateful. Everything here is stateless and event-driven.

So I was learning all of that, and in that process, I was like "The experience around this kind of sucks. I can tell that there's like a lot of potential here", but my literal experience of doing all this - like, there's so many unsolved questions. Anything from how do I do local development, to "Okay, I have like a secret. Where do I put that?" There was all kinds of stuff I had to figure out for myself. So I was in the process of doing that when I found -- and I was building some of my own tooling at this time, just to make it easier. It's really bad tooling. It just wasn't very good. I found SST, which had recently launched, and I started to use it, and I was "Oh, look, they address a lot of the things that I was trying to solve myself." And it was very early, so I was contributing a lot back to it. \[unintelligible 00:04:17.13\] rewrite entire parts of it, so I was a very heavy-handed contributor... And they were actually going through YC at the time, and they said, "Okay, we're raising a round", and I actually decided to invest, because I was like "Okay, I believe that the future is going to be more serverless, and these people have been in that space for a while, they're trying to do something there. I'm sure eventually they'll figure something out." So I invested in the company, and I continued to contribute. Then a few months later I ended up just joining them. And the joke I make is it's a very tax-inefficient ways to do all of this. I invested money in them, then they gave it back to me when I joined them, and I owe taxes on it, so it's just kind of like a dumb, dumb circle. But yeah, that's how I got interested and involved. So I think that answers the first half of your question, but I'll pause there.

**Kevin Ball:** I'd love to learn a little bit more about SST and what is, for example, different between SST and Architect, or other things that people have tried to do in this space of making kind of an architecture framework for serverless applications.

**Dax Raad:** Yeah, so at the end of the day, there's a few things -- if you're trying to do something like this, there's a few things you just need to do. And I think people typically start in the same place. So when you do these serverless systems, another way to think of them is they're very serviceful, so you're really taking advantage of all these primitives that your cloud provider has. Obviously, people think of things like functions, but it's also things like queues, or event buses, or cron jobs... All kinds of little primitives that you need, spun up, so you can actually use it.

So the place where a lot of these frameworks start is on the infrastructure as code side. So you want to be able to define all the things you need, and this tool needs to be able to actually like deploy them. And that's kind of where SST started; it started as an infrastructure as code tool, where you can define all these things; we're built on top of CDK, so even if you go outside of the bubble we focus on, you can still use SST to orchestrate all kinds of things.

\[00:06:09.17\] So that's where we started... Then we just discovered rough edge by rough edge by rough edge, and we continued to progress that way. So the first thing is local development, right? Spinning up a full copy of your whole app is actually a pretty awesome way to do just development when you're working on an application. But the feedback loops whenever you update function code, or whatever - now you need to recompile that code, upload to AWS, wait for the function to restart... And that was at best a four to five-second feedback loop, which is just kind of unacceptable. So we saw "Okay, that's a clear problem that's going to make people use this stuff and say, "I hate it. I don't want to use it." So we'll try to figure out how to how to address that."

Now, that was kind of the first features that really kind of put us on the map, which was our live lambda debugging. So we made it so the feedback loop can be now measured in like milliseconds, and effectively instant. You can add breakpoints, all this kind of stuff that you're used to in a local environment, even though it's still running in the cloud world. Your environment still is 99% identical to what actually gets deployed, so there's not really any like discrepancies from "Okay, it works on my machine. Why isn't working when I deploy?"

So that's where we started. But basically, that's the pattern that we took - we'll solve the biggest pain point, then we'll solve the next biggest pain point, then we'll solve the next biggest pain point. And over time, our scope has gotten extremely broad. We'll probably talk about this in a little bit, but now we're going all the way to like "How do we deploy these more complex frontends to AWS?" Now we're very deep in the frontend world, doing a bunch of things to help frontend projects get deployed.

Our scope is crazy now, and I love it, because I feel like no matter what's going on in the tech world, we have a way to participate in that, which is really awesome. I don't ever feel okay we're kind of stuck in our little zone. But yeah, it started out pretty narrow, and it's just gotten wider over time.

**Nick Nisi:** That's awesome. So one, I wanted to take a step back maybe and ask how you envision a team deciding to use SST? Is there like a common path that you think teams take to that? Is it like "We want to build this", and then "Oh, we want to build it on top of an AWS stack" and then...?

**Dax Raad:** Yeah, so this has changed over time as we've expand to just bigger audiences... But in the beginning, it was people that were already pretty competent with AWS, already understood the serverless mindset and the benefits of it, and they knew that they wanted to build that way... So first, our initial product goals were to say, "Okay, there's a bunch of tools -- if you already know that stuff, I know you can assemble all that yourself, because you are very skilled with all this stuff... But use our framework, as we kind of encode a lot of those best practices that you already know to do in it."

Over time, it's now become "Okay, then let's expand to anyone that just wants to use AWS in general, but they may not know about serverless, they might not know that there's like a million services in AWS, which approach do I do?" So there, a lot of our work was just making it feel like the easiest way to use AWS, period, even if you're not even aware of all the lofty serverless philosophies, and all of that.

So at the end of the day, there's just a certain set of businesses that will always need to use AWS, typically the type of things I work on, just kind of bigger companies, like even startups... I mean, a lot of our focus is on startups; just startups that are trying to become bigger companies. There's just -- most companies, when they get successful, end up on AWS anyway; certain people recognize that from day one, so they just start there... But starting on AWS historically has meant a lot of learning, a lot of things to figure out.

**Kevin Ball:** And they've helpfully left a lot of friction in there for you to smooth out.

**Dax Raad:** \[00:09:47.26\] Yeah. Something I always say is I have like a weird mindset with all this stuff, because on some level, I'm frustrated that AWS is better in certain ways. I'm always like "Well, why can't they do this? Why can't they make this better?" and "I'm always running up into that." But then I also recognize that our whole opportunity to do what we do is because they do leave that gap, and that's kind of where we step in.

**Nick Nisi:** I was raising my hand there for a minute...

**Dax Raad:** I can't see your hand. I noticed it like go up on YouTube; I can only see like your face, because the screen's cut in third, so \[unintelligible 00:10:12.04\]

**Nick Nisi:** Oh, yeah. I was raising my hand in the "not up to date on all of the AWS pieces" part.

**Dax Raad:** Oh yeah, exactly. Yeah, it's impossible. Like, my full-time job is so -- and it's not even as simple as "Okay, you want to do this thing, you learn this service in AWS." It's actually "You want to do this thing, there's nine different ways to do it in AWS. Which one is actually the correct one to do?" So a lot of our work is spent trying everything and figuring out "Okay, this is the best option. We should code that as the default in the framework." And there's always escape hatches, but a big reason people use us is because we have a sensible set of defaults when using something as big and complicated as AWS.

**Kevin Ball:** So you have defaults at the infrastructure level of like what stuff is coming out. How does that play out into the application level, in terms of whether it's like how you design your application, or what frameworks you can or can't use, or things like that?

**Dax Raad:** Yep. So over time, we have just -- I think we have the unique advantage that we see thousands of companies using our framework, and we can see the issues that they run into at all kinds of scale. So over time, in the application layer we have started to form our opinions; these opinions aren't super-encoded into the framework. So you can still do whatever you want, but our standard templates that spawn out of the box - there are certain patterns that we encourage. We have like a pretty standard monorepo setup that we think works for most people, we're big believers in domain-driven design, but like a lite version of it, so you're not just loading all this business logic in your functions, which then makes it inaccessible in other places where you need it... So we have like a separation of your domain layer, which then gets called into from your functions layer, which could be an API, or like maybe scripts, or whatever else you need.

So we have like rough patterns that are in our templates, that we've seen work literally for anyone.

People always deviate, of course, and that's kind of -- you know, as someone that builds an open source framework, you have to kind of have judgment on this, because the more you let people deviate, the higher support burden you have. A big thing we do is we're very active in our Help channels. We try to make sure everyone is addressed, and not blocked. Typically, our highest support burden comes from people that deviate from our standard templates.

The reality is this is a complex space. Even just Node.js... Like, anything as simple as "I'm going to have a package, and I'm going to import it from another package", it's like, okay, how are you bundling a package? How are you building the package? Are you specifying things correctly in pkg.json? There's just a lot that people aren't aware of when they go to do some of these things, so I think people take on a complexity that they don't expect, and they kind of end up in in our Help channel. And that kind of is more support burden for us, so over time, we've been kind of pushing more to have a little bit more opinion... But generally, we're still going to be very flexible. Our model is an open source model. We're not a managed service. A benefit of open source models is you can kind of bring your own libraries, frameworks, whatever it is, and you kind of expect that to work.

**Kevin Ball:** And that ties into a question, which is - you brought up this as a company that's raised funding, and all sorts of different things, but it's also an open source framework... What is the business model? We as developers are always a little skeptical of incentives... How are you aligning your incentives and the open source pieces of this with developers?

**Dax Raad:** Yeah, so - yes, we are a business, and we're doing this not for any altruistic reasons. We're here to try to make a lot of money. That's straight up why we're here. So the reason we are open source is because we actually believe in the model, like strategically. The thing I said earlier is we're not trying to create some idealized platform for doing development, because we fundamentally don't believe that those types of platforms work at scale. Everyone just needs to do things a little bit different.

\[00:14:06.04\] And yes, maybe your idealized version is like a much better experience than SST, but the reality is that technology is always shifting, there's new frameworks coming out... You just can't predict this stuff. So I fundamentally believe something like this needs to be open source, because we need help integrating with all kinds of things. So we've integrated with every single meta framework; not every single one, we're not done with this. We're continuing to do more and more of this, but integrating with things like Astro, with Remix, with Next.js... I didn't know any of this was going to -- or I didn't know that a lot of this was going to exist years ago, right?

So we believe in the open source model; whenever there's a feature that we want to build, if it can be built in an open source way, we're going to put it in a framework. Our business model for making money is there's certain things you need once you go to prod that doesn't really make sense to be part of the framework. Our strategy is pretty simple - when our users go to prod, there's additional services they're using to round out the product experience. It might be anything like error reporting, maybe they're using Sentry to catch exceptions. It might be something they're using for logging. And we're starting the process of this now, we're building complementary, completely optional services that integrate very nicely with SST. So because we deploy all your infrastructure, we know exactly what to monitor for exceptions; no configuration will catch all your exceptions, will alert you to do all that, kind of Sentry-like experience for that.

So we can do these complimentary things. Even those things, we're actually building in an open source way. So if you want, you could go self-host that whole control plane and do everything. We don't think anyone is actually going to do it; we're open-sourcing it more so people can learn from how we build things. But that's open source... But obviously, we're gonna have our own hosted version of that, that people sign up and pay for. And this model has been like -- it exists in a bunch of other places, and I think it's well proven. The thing we look at is in the Laravel ecosystem - Laravel is the framework, kind of similar to Next.js, or something like that, just a lot more like complete... And then Vapor is a deployment platform for Laravel projects, which you pay for, and it contains a bunch of production-level features you need. So we have no shortage of ideas for stuff there, so we're not super-concerned about the monetization part. Just given where our framework sits, there's just like infinite opportunities.

**Kevin Ball:** Interesting. I've seen this -- as you highlight, this is a very common approach to dev tooling... Most of the companies I've seen tried to do this end up failing in some form, or being acquired. And often they're acquired by companies that still maintain the tooling, and some of that; like, they're acquired by the big hosting companies. And so a question I have is how are you handling governance of the open source pieces of this such that if SST the company goes out of business, or is acquired, or something like that, there's some amount of continuity for the framework?

**Dax Raad:** Yeah, at the end of the day there's no way to guarantee continuity... Because right now, we're able to fund ourselves doing this. We actually have another product that predates SST, that makes a good amount of money, and that's where a lot of our sustainability comes from; we're kind of transitioning over to like a more SST-focused product now. There's a chance that SST can fail; there's a chance SST can get acquired... There's all kinds of things that can happen. There's a chance we just get bored, and we're not motivated anymore, and we move on, right? There's all kinds of things that can happen with open source. So that risk is always going to be there. The licensing is completely open, so people can fork it, take it, and if they want to run with it, they can. But realistically, motivation is a big part of it. It's very unlikely someone's gonna come around with the same level of motivation we have to make this continue to exist.

So that kind of is a real risk. If there's not enough community interest in supporting it, just like any other open source project, it can go away. I will say, we are venture-funded, we went through YC... I will say, we look quite different from a lot of these companies. We are still just three people, and we continue to plan to be extremely small. I think the reason that you see a lot of bumps with a lot of the other things you might be referencing is the project itself is probably pretty healthy, and the business model itself maybe it's also even healthy.

\[00:18:08.29\] The mistakes actually entirely come from - it's maybe someone's first time building a startup, so they make the classic mistakes of trying to raise as much money as possible, as high valuations possible, which immediately means you have to spend all that money as fast -- not as fast as you can, but like within a certain amount of time, which means you grow your team massively, which means like all sorts of other problems show up.

So I think a lot of these things that have failed -- I mean, some of them yes, but I think a lot of them could have been successful; it was more of an execution failure. I think for us, we're not super-concerned about that. Everyone on the team -- like, we've all made those mistakes a million times before, and we're being pretty intentional with this.

You can go look at projects that are a lot smaller than us in terms of like adoption, that have teams that are five times our size already. But we're being very intentional with growing very sustainably for that reason. We've just seen this enough times to not want to repeat those mistakes.

**Break:** \[00:19:02.29\]

**Kevin Ball:** What does the contribution distribution look like between sort of members of the company, as opposed to sort of folks in the broader community?

**Dax Raad:** Yeah, so this used to look really bad, because -- so SST is on 2.0 right now. From 0.0 to pre 2.0 we were not accepting a lot of contributions, because we hadn't really figured out what we were. And people wanted to fix things in places that we were planning on blowing up anyway. SSt 2.0 was a full rewrite. We really rewrote every single thing. Everyone told us not to, but we did it... And it's at of phase now where it's so -- it's incredibly friendly to accepting contributions. I think within the first two weeks of 2.0 going out we had more contributors than like the entire previous year. So the distribution is looking a lot better now, and the thing that I said earlier is a big thing of what we do is we integrate with literally every single framework. We don't use every single framework. We're here to talk about OpenNext. Guess what - no one on the team uses Next.js. So we do not have the expertise to understand how Next.js is supposed to work, what are all the features we're going to support, all the little details. We have a fantastic community that really made OpenNext possible; like, digging into like the most obscure stuff that we just would never have understood, and piecing it together. So yeah, we're always shocked and taken aback by the level of effort people put in, and the big reason we're able to just be three people and do everything we do. It's obviously working on the framework, but doing the support, the marketing, design, all kinds of things; the reason we're able to say so small is because - obviously, we drive the core. I think the way we think about it is we kind of get features to like 80%, which is pretty easy; it's just the last 20% that's tricky. The community fills in the last 20% with "Okay, it's not working in this scenario, in this edge case. Let's fix this thing." So I'm not going to say that anyone outside of the company is massively driving the core direction. That is not happening. But we do have a lot of activity on just rounding it out and making it a very complete framework.

**Nick Nisi:** \[00:21:59.28\] And it sounds like a big part of that marketing push would be the amount of like friendliness that you have in supporting all of these frameworks and additional add-ons. I guess what went into getting that right? Is that something that you can break down?

**Dax Raad:** Yeah. You mean in terms of how do we -- the integrations, or like kind of the environment we create?

**Nick Nisi:** Yeah, making such a friendly environment to accept integrations.

**Dax Raad:** Yeah, I think at the end of the day -- I can probably only mostly speak for myself, but I am just a fan of everything going on. Like, no matter what's going on, I'm super-interested in it. Even if I'm not using it, even if it's something I don't want to use, I still am very interested and excited to learn about it. So I think the reason we've been able to do a lot of these integrations is because I've just been interested in these other projects that I don't even use from a very early stage. Like, all the other meta frameworks - you know, Remix, Next.js, Astro etc. I've been part of those communities for a very long time, and I've gotten to know the founders of them, and we're all very close at this point... And our stance is we just don't have an opinion about what is best. If you want to deploy it, you probably have a reason to; our job is just to make it easy for you to do that. And obviously, all the framework authors love that, because they don't want to figure out what the intricacies of AWS -- they want to focus on the frontend framework's features, they don't want to figure out the intricacies of AWS and supporting. I'm running into like an account limit here; like, how do I fix -- it's just like weird stuff that they would never run into themselves.

So it's been a really nice relationship, where we can take that off their plate by serving everyone that needs to deploy these frameworks on AWS. And the benefit we get is their community learns about us, and we kind of can be involved in all these projects that are really incredible, and the people behind them are like "We could never do anything like that, but we get to kind of ride their coattails, in a way."

**Kevin Ball:** Can I ask a few more questions on the sort of community side? So it sounds like, if I'm understanding correctly, right now, in terms of long-term vision, in terms of decision-making, in terms of that - it's all kind of centralized within the company. And then you've got a bunch of people doing sort of integration-type commits. And looking at the GitHub repo, that pretty much maps, right? Like, there's the three of you being incredibly productive. Looking at it, there's like tons and tons of stuff going on. And then like the next committer has maybe 63 commits, and the next one after that has seven. So it's like a lot of people doing edges. Is that kind of your vision going forward, is to keep it centralized within the company, or do you want to start building kind of more of a community vision group, or community core maintainers group, things like that?

**Dax Raad:** So this is the my opinion here isn't global; it's just kind of scoped to the thing we're working on. I like the sound of that, I definitely do. Like, I would love to have this be a much bigger thing than it is today. But the speed that we need to move at given the phase we're in, and the level of commitment we would need for someone to like meaningfully help us make some of these decisions - it's a lot to ask, and it's kind of unlikely... At least for now, it's unlikely that someone can have that level of influence without this being their full-time thing.

So at some point, we will grow the team, so obviously, it'll go that way, but realistically, where we are now, we are still trying to grow it. And the thing with startups, specifically in the dev tool world, you often have to kill your own thing, because you discover there's a better way of doing things. It's painful, because you already have a set of people that like your current thing, and they like the way you're doing it. If you think long-term, if there is a better way to do it, your thing eventually just goes away, because there's a better way. So you have no option, you have to adopt the better thing, and that's hard, right? We've had waves between the different version versions of SST where we've definitely lost people, because they didn't like the direction we went... But with each wave, we've gotten a lot better, and gotten a lot more accessible, and more people find what we do useful... But it did require like shedding some people, and it's always painful. Even us internally, fully aligned with thinking long-term, we struggle with that. So that's why it's a little bit hard to -- unless your fate is really tied to the future of this project in the way it is for ours, it's hard to really collaborate in that way.

\[00:26:12.27\] It's a bit different with other things that are -- you know, with something like a frontend framework, that can definitely be a much more open process, because it's not just exposed to the same level of... Like, we're not even sure if we are allowed to exist yet. So we're still in that phase. Once we get to a place where we're like "Okay, this thing exists, and it's good", then we can kind of think about some of those things.

**Kevin Ball:** It's an interesting direction where you say "Are we allowed to exist?" And I think one of the beautiful things about open source software, and startups too to some extent, is if you can make it, in some ways you push that boundary and you wait and see if reality pushes you back. Are y'all engaging with -- so your primary focus it sounds like is AWS. Are you engaging with folks there at all?

**Dax Raad:** Yeah, so we have a very tricky relationship with them... And I'll just be kind of very honest about it. So initially, when we started doing all this stuff, I tried to engage more with AWS open source \[unintelligible 00:27:07.22\] some of their open source stuff. You know I expected to have a very normal open source relationship, because I worked with all of these other open source projects, and I've been in open source for a while... So I had what I thought was "Okay, this is just gonna be another one of those relationships." AWS open source is a little bit different. I think what I like about -- like, when I went work with the \[unintelligible 00:27:26.02\] team, or with the Astro team, the people leading those efforts are like very bought into what they're doing. And that's maybe not even their full-time job, it's just like a thing that they're doing. They're like kind of betting their future on it. So it's very easy for me to spend some time there and get connected, and like understand their way of thinking, and align myself, and we can I do something efficiently. We're effectively coworkers at that point. The tough part of AWS open source is any interaction with them, it's kind of - it resets every single time you interact with them. They don't remember who I am, they don't remember that I have spent more time in their codebase than anyone outside of AWS... Like, every interaction feels like -- I'm not able to like build up any kind of like relationship with anyone there.

And it's a little bit tricky, because the team there is rotating. People leave AWS and they don't really care about the project anymore. They're not as tied to it, so it's been tough for me to have a similar type of relationship there. And that's more of an example of what I think of as like -- like, we are trying to be a business as well, but I think we still retain the type of open source fuel that I'm used to from other purely open source projects. The AWS open source project - it definitely feels more like "Okay, this is like a corporate-sponsored thing", and there's kind of like an invisible wall, and you don't really know what goes on behind it. So it's been tough to be productive. They don't feel like my coworkers, they feel like very -- like I can't really reach them.

The other flipside of this is - and this hasn't helped... My role is to help people use AWS, but also to convince people to use AWS when I think it's appropriate. For me to do that well, I need to be really honest about where it's bad, or where it sucks, or when you should not use it. So as much as I spend most of my day trying to help people use AWS, I spend an equivalent amount of time being very critical about them. Their environment is just different. I think when they see that may be critical, I think their level of sensitivity to it is different than what I see in like the crazy frontend world, where everyone's \*bleep\* on each other all the time... So because of that, that's also stressed the relationship a little bit.

From my perspective it's weird, because I'm like -- compared to what's going on in the frontend world, I'm like the most reasonable person on the planet. But I think from their perspective, it's -- I think they interpret it a little bit differently. And by the way, if they someone from their team sees this, they're gonna post it, and it's gonna be a thing that they talked about internally. So it's tough. Like, I've tried to build stuff there, but it's just culturally very different. And the third issue is they also have internal competing projects to SST. So there's like that whole angle of it. It's just complicated. You would think we just have a direct partnership, but a lot of things are complicated.

**Kevin Ball:** \[00:30:05.05\] Do you see SST ever going beyond AWS and into some of the other serverless platforms out there?

**Nick Nisi:** Yeah, so historically we've been built on top of AWS CDK, which is very AWS-focused. We do plan to shift that over the next year and be built on top of Terraform. Not exactly to support the other cloud providers, like Google Cloud, or Azure. The reason we home on AWS is because to build something fully serverless, there's certain primitives you need, and AWS really is the only place that has that. But there are emerging components that everyone is sprinkling in with AWS deployment.

Me personally, I use Planet Scale for my database. I don't use AWS. But that lives outside of SST right now, and we want to make sure we can support other providers that are complementary to -- even if your core is on AWS, you might be using Planet Scale for database, or like some of these other one-off... We've been thinking about unbundling; there's a bunch of providers that are unbundling serverless offerings in AWS, and building a very good experience for one specific part of it... And more and more people are using that; we want to make sure you can kind of control all that within your SST application, which you cannot do today. So we do want to support that. Are we going to offer the exact same experience, but do it on Google Cloud or Azure? That's pretty unlikely.

**Break**: \[00:31:25.18\]

**Kevin Ball:** This might be shifting slightly, but now I'm curious... One of the things we wanted to talk about today was OpenNext.js. I love some of the -- like, where you all are leaning into the snarkiness there, and I think Next is actually a great example of the challenges of having for-profit companies and hosting companies owning or driving development of open source frameworks... Because the reason you need OpenNext is because Next has gotten so hooked into Vercel, and Vercel's layer. Does OpenNext build on top of SST? Should we be calling it AWSNext?

**Dax Raad:** No, because Open-- so, okay, it right now is very focused on AWS. So it definitely is very tied to AWS. I don't know if that is going to be something -- it's a very young project, I don't know how it's gonna evolve over time. I think OpenNext is an appropriate name. I can see us expanding outside of like just the AWS output that we do now.

The thing with SST is when an SST user wants to deploy Next.js, we use OpenNext under the hood. We could have just made this an SST thing, but the thing that we recognized was there's so many disparate parties doing this, like recreating this effort, whether it's other businesses, like Netlify, or Amplify.. Or there were like half a dozen open source attempts at doing this that were kind of fragmented. We realized, "Okay, we have a pretty solid community that's always bugging us about "How do we deploy Next.js in AWS?" and we're always like "We don't know, we don't use it." And there was enough of a buildup of that demand where we were like "Okay, I think we're in a good position where we can give it a shot, and our community can help us kind of actually nail it. So let's try to create an open source thing", because I don't really think this thing needs to be closed-source the way it is in these other companies. I don't think they're doing it in like a malicious way or anything, I just think they hadn't thought about it, or like there's the overhead of making it open source they didn't want to deal with. But we want to centralize the effort on figuring out how to deploy Next.js to various environments.

**Nick Nisi:** \[00:34:17.11\] So what goes into building an adapter for Next, for AWS? What are kind of the highlight pieces that need to exist?

**Dax Raad:** Yeah, so Next.js has a crazy set of features. I think they are kind of similar to us, where they started in a narrow place, and anytime a user ran into a rough edge, they were like "We're going to solve it. It doesn't matter what it is; if it's a rough edge, we're gonna address it." And I think what they were able to rely on is some of this can't entirely be solved just in the framework. There need to be complimentary things that your host does to support it.

So obviously, you take your app, you can split it up into a bunch of different functions, and you need to be able to deploy these things as serverless functions. There's things like ISR, incremental static regeneration, and that requires asynchronous processing of different routes in your application... There's things like the image resizing, that requires like an image resizer thing to run... I think Next.js's position is you can always just run this in a container, and the container can do all of that, because it's like a long-running task... Which I think for a lot of people it does work, and I think you can see platforms like Flightcontrol; they do deploy Next.js in that way to people's AWS accounts... But the people we target are kind of the people -- it's less the people that are like just deploying their Next.js app for the first time, because you just use Vercel. Actually, mostly, when people come to us and say, "We want to put Next.js in AWS", we kind of make sure that they shouldn't just be using Vercel. It's usually people that are at a higher scale, where the Vercel pricing gets too expensive, or it's weird just to have like one part of their app, which might even be like the lowest value part of the app, in a completely separate place, when everything else is in AWS. So for organizational purposes, they want it all in one place. Those are the people we try to address, and they definitely need serverless deployment, so the pricing is as cheap as it can be, and they're using their resources in an effective way, and the performance is as good as it can be.

So yeah, the architecture itself, because Next.js has so many features in it, it's not straightforward for the average person to figure out how to -- like, one, what even is architecture inside AWS? It's kind of a pretty wonky architecture you have to come up with. And two, how do I massage the output that you get from Next.js into actually working? There's like all these little flags you need to set, there's all these little -- both on the Next.js side, but also on the AWS side. It just took a ton of trial and error of us like deploying through Vercel, and looking at the little output, and then deploying through our thing, and we're like "Okay, it doesn't match", kind of just going through that process... And we're gonna have to continue to do it with every new version of Next.js, so we're always gonna be a little bit behind. It's always going to be a little bit worse, because Vercel can mix and match. Like, they can use AWS for some things, they can use Cloudflare for other things, whereas we can't do that... But the benefit being, one, the pricing, and the performance might be good enough for most people, which is what we think it is... And two, just like the control of having it alongside the rest of your stuff.

**Nick Nisi:** Yeah. Speaking of those features, does OpenNext support Next 13's app directory?

**Dax Raad:** Yeah, so we do support Next 13's app directory. I think one of our biggest contributors has been using that since the beginning. There's some stuff that I think -- so there's other features in SST that are unrelated to Next, but are used in Next... Like, we have a whole secret system, which requires top-level await. I believe if you use app directory, top-level await doesn't work unless you enable another flag that's experimental. So besides that, it pretty much works out of the box.

**Nick Nisi:** Nice. Yeah, that's why we were initially looking at SST, because AWS Amplify doesn't support the app directory yet.

**Dax Raad:** \[00:37:50.22\] Yeah. And that's a good example of why we believe in the open source model beyond just it being a thing we're doing arbitrarily. When there's an issue with Amplify, you guys have to file an issue and wait for them to prioritize it. Whereas for us, there are plenty of things people brought up where we're like "That's not our concern right now", but they just went and fixed it. So with something like this, you just need -- it's just nice to have that support.

I think someone in the past couple days also had an issue where when they added Google Analytics, then Amplify stopped caching all their pages, and then they ended up switching to SST so they can kind of control some of those header settings in the CDN. The control is important. If you don't need control, you can probably just use Vercel. So if you're gonna be an alternative, you do need to give people kind of like power user features.

**Kevin Ball:** So you talked about OpenNext eventually potentially -- or like the motivation was everybody's trying to do this for their own providers. Do you feel like you have identified kind of the core set of capabilities that are needed? And are those abstracted in a way that for example if a Netlify wanted to build an integration to OpenNext rather than trying to do their own thing, they could plug into it?

**Dax Raad:** Yeah, I think they could. I think the little -- I'm just not super-familiar with exactly what they do, so I don't know how much help we even would be, at least today. Netlify is \[unintelligible 00:39:07.13\] we're like "Why would they just limit themselves to AWS?" If they provide a much better offering through some like crazier architecture, they should just do that, because that's a great way for them to compete and offer better service.

I do think OpenNext will eventually get there. We will allow "Okay, here's the AWS-only configuration", or "Here's the best AWS plus Cloudflare configuration." So I think we will eventually get to that, and we'd love to have a centralized effort there... But you can see why given Netlify has already done this, they probably would just continue down that route, versus kind of like starting over.

I feel like if you're at the beginning, if you're starting a new hosting platform now, you're very likely to help us, because that boosts you forward. And like Ampt, which is another serverless platform, they support Next.js 12, and not 13. I think they're very likely to just use OpenNext and help contribute to it, because they don't have anything right now. \[unintelligible 00:40:00.09\] further along, so I don't know if they would shift over.

**Kevin Ball:** Yeah. I mean, thinking as a developer, I don't want to deal with migrations if I change hosting providers. So that's why I'm like "Okay, give me everything." Maybe right now I'm on Netlify; right now I have a couple of sites on Netlify. If I were building a Next app, I'd probably do it there, so I don't have to set up new accounts. But if it takes off, I want to be able to migrate it without having to change a bunch of stuff around.

**Dax Raad:** Yeah. We see a lot of people coming from Vercel, obviously. I can't recall off the top of my head if we've seen people coming from Netlify. Most of it is from Vercel. And it's pretty much been drop in and everything still works. Like I said, some stuff works with a little bit worse performance, because of the magic that Vercel has that we don't.

**Nick Nisi:** Who's Jim?

**Dax Raad:** \[laughs\] Good question. Jim is a random guy. Are you guys -- I mean, you're referring to the OpenNext video we made...

**Nick Nisi:** Yeah... \[laughs\]

**Dax Raad:** Have you guys seen the original thing that we based it off of?

**Nick Nisi:** No.

**Dax Raad:** Okay. We based it off of an old Tim and Eric skit called "Free real estate." It's almost like an exact copy of that video. And their whole shtick was like they just made a commercial targeting one random person. So we just stuck with it. But yeah, a lot of fun making that. A lot of effort. Too much effort, but we had fun.

**Kevin Ball:** Do you want to reenact it here on the pod?

**Dax Raad:** No, definitely not... \[laughter\]

"It's free! Free! Next.js! It's like Next.js, but FREE!"

**Nick Nisi:** I had not seen that Tim and Eric skit. I definitely knew that there was something that I was -- some context that I was missing...

**Dax Raad:** ...we were referencing, yeah.

**Nick Nisi:** Yeah. We'll have a link to both of those in the show notes.

\[00:41:43.07\]

"The following advertisement is intended for Jim Boonie only.

It's free, Next.js. We're giving you functions. It's three... We're giving you a deployment. It's Next.js, and free.

It's a free deployment for your, Jim. This is free Next.js.

Well, you've got to bring the code, but the deployment is free.

Two functions, no servers. It's free. You push a commit to your free Next.js and we got you a deployment.

It's a serverless deployment. It's free. It's got a CDN \[unintelligible 00:42:05.16\]"

**Dax Raad:** It was funny making that, because -- so here's a funny backstory. So Frank, who is the other one person in the video, one of the founders of SST - pretty quiet. He just cranks out a bunch of work... You don't really think much of him. But believe it or not, he was on the U17 Chinese soccer team; excellent, excellent soccer player. Like national level. Then, when he went to college, he decided to try to be an actor for a little bit, and he has a few acting credits on a few smaller movies. So I will upload this eventually... I gave him the lines he needed to do, and he messaged me a day later, "Here's a zip file with all the takes." And I couldn't breathe. I was laughing so hard." We can only use like a quarter of them, but they were all so funny... Like, he just got into this crazy character.

**Kevin Ball:** Oh, you've gotta do the outtakes.

**Dax Raad:** Yea, exactly. So I want to post them all, because I literally kept having a pause just to recover from laughing. I just couldn't believe the level of effort he put into it. And he didn't say anything. He just was like "Okay, I'll do it", and then he just gave it to me, and wasn't like "Hey, I tried hard."

**Kevin Ball:** This is marketing gold for you. I have in the past worked at a company trying to own an open source framework and run things, and this is probably why I'm being a little bit more critical, because I saw that crash and burn in real time... But that type of comedic take, and the personalities behind it were what, when it was working, really drove a lot of engagement. And so "You've gotta use that, man...!"

**Dax Raad:** Yeah, yeah. It's definitely something we're -- at least in the beginning of this year, we were like "Okay, we've got a SST 2.0. Let's figure out what we want to do in terms of marketing." And we're like "Let's stop trying to do--" And we're still gonna make educational, like tutorial-type content, but let's stop pretending like that's marketing. Once someone already wants to use your stuff, that's when they're going to that. We've got to just do fun stuff and make stuff that people just like seeing. And they'll discover SST down the road, whatever; we don't need any direct tie-in. But it has been working. It's been working really well.

And the other video -- I don't know if you saw the other one I did with Fred, the between two nerds one... That was the first one we did that was like "Let's just do something funny, and not make it about anything specifically." And I posted it, and 30 minutes later Adam Rakis quoted it being like "This is really funny. I don't know what SST is, but I'm gonna check it out." Then like 10 minutes later, he just posted a link to our docs, being like "This looks really cool", and I was like "Oh, cool." Our theory was validated, even step by step in real time immediately.

**Kevin Ball:** A hundred percent. Well, and you can combine them, too. You can have like tutorial videos that are goofy, deploying some really bizarre app, and using your personality to drive that storyline.

**Dax Raad:** Yeah, exactly. We're just scratching the surface of all this. Something unlocked in our brain, where we were just thinking about things in a certain way. If you scroll our YouTube, all our old videos look very different. All of a sudden, they start looking like a lot different. Something just clicked for us, and there's just not a lot of people doing it, so the bar is very, very low right now.

**Nick Nisi:** There's so many places you can take this, like themed conference talks, and such.

**Dax Raad:** Yeah.

**Kevin Ball:** So do you have a stick, or like how you show up there? Nick has his Mr. Burns... That is just how he greets the world.

**Dax Raad:** \[laughs\] No, I don't. This is also weird for me, because I wouldn't have ever described myself as someone that could do stuff in front of camera; it used to always make me really nervous, and I would kind of like think too hard about it... But I've been streaming on Twitch like every single day for a while, and it's really helped me get more comfortable just being -- and when you're streaming on Twitch, you're alone in a room, talking out loud to yourself. I mean, there's other people there listening, but it's very odd, right? You're not really like getting a bunch back, until like you get to a certain size and your chat's more active. But yeah, I'm still figuring it out.

\[00:46:10.16\] So our goal is -- this is the kind of marketing we want to do. We don't particularly think we're like the best in the world at it. As we kind of have more of a budget for this stuff, which will happen over the next year, we just want to find people that are awesome at making content even outside of tech, and just have them come make fun stuff for our community. It's not going to be like selling any of our products or anything, just like 'You're really good at making videos that people love watching. Angle it a little bit at our community, but just do your thing." That's the kind of stuff what we want to invest in. And of course, I'd love to be a part of that, but there's gonna be people that are way better than me at doing this stuff.

**Nick Nisi:** I'm just picturing like Matt Damon pitching SST... \[laughter\]

**Dax Raad:** Well, I mean, I think he learned his lesson with the whole crypto thing, so I don't know if he's gonna be in this space for a bit.

**Kevin Ball:** Yeah, isn't he getting sued for millions of dollars?

**Dax Raad:** Yeah, him and like every other celebrity. It's pretty crazy.

**Kevin Ball:** Apparently except Taylor Swift, who was the one celebrity who was smart enough to say, "Wait a minute, are you pitching unregulated securities? Because that would be legal liability."

**Dax Raad:** Yeah. \[laughs\]

**Kevin Ball:** Whether or not you like her music, good businesswoman.

**Nick Nisi:** So there's actually a question from the chat, kind of going back a little bit... You mentioned kind of rebuilding from CDK onto Terraform... And the question was if you'd be going to CDK Terraform, or just to Terraform HCL?

**Dax Raad:** Yeah, so we haven't decided. So our initial plan is we want to initially allow stuff side by side. So continue to use our current setup, support stuff from the Terraform world, so you can like spin up Terraform, and provide the resources as well. We're very heavily considering CDK Terraform. The only thing that gives me pause is this is a big shift, right? No matter what version it is that we do, it is a big shift. If we're going to make a big shift, I'd love to eliminate as many problems as we can from having been on CDK.

So we have a ton of issues with the CDK design itself. I think the constraints -- and again, AWS hates when I say this, but the constraints of the CDK was we need to support a lot of different languages; we need to support TypeScript, JavaScript, Python... A bunch of other languages. So when you design an API for this thing, it is the lowest common denominator of like what patterns work across all languages. So you ended up with a very specific style of defining infrastructure in code. And there's a lot of problems that come with that. We are extremely TypeScript-focused, so for us, do we want to accept that constraint?

If I was going to build something like CDK from scratch today just for TypeScript, it would look a lot different. And there'd be a bunch of performance benefits from that, there'd be a bunch of type safety benefits from that... A bunch of ergonomic things. So CDKTF would be a quick win, because it'd be very quick to put that alongside the rest of SST... But it's also an opportunity to rethink the whole model. I actually built a very simple TypeScript-to-Terraform compiler, that has a completely different API than CDKTF, that I think is a lot simpler, and allows for some interesting things that CDK doesn't allow for... But it would be a lot more work to do that, so we just haven't decided. CDKTF is an easy win; realistically, that's probably where we're gonna go. But it's also an opportunity for us to like really rethink some of this stuff.

**Kevin Ball:** Beyond that, what's in the roadmap? What are your sneak peeks for the future? What does SST 3.0 look like?

**Dax Raad:** Yeah, so our roadmap right now is -- so 2.0 was a big push, because like I said, we rewrote literally everything, and it's gotten to a really great place now. We're looking at the stats and we're like just about to intersect where 2.0 downloads are going to now surpass 3.0 downloads. I'm sorry, 1.0 downloads. So we're pretty happy and excited that that happened so quickly.

\[00:49:57.21\] So from here, we are pretty happy with the scope of things we cover. There's always so much stuff we want to do, but we're pretty happy here. So our roadmap - that's actually why I've been streaming on Twitch every day, because I'm working on our production product, the SST console, which is going to be -- again, it's going to be mostly free, but there's gonna be some paid features in there.

So the roadmap now is, okay, we have enough of a community, we have enough of a user base to build a nice complementary product that works alongside SST. That's my focus for the next six months, I would say, or so. We're definitely gonna get it out earlier, and have people use it as we're building it... So that's a near-term focus, and that's to really prove out our models, like our unit economics, everything. We're close to being profitable at our current team size, and I think with this console, we can maybe get to a pretty impressive place, given the size of our team.

So that's really the focus. After that, it's going to be this Terraform stuff. So I think SST 3.0 is really going to be expanding beyond the world of AWS, and whatever, and tapping into like the massive, massive Terraform ecosystem to coordinate literally anything. And I was a heavy user of Terraform before I started working at SST, so I'm a fan of that ecosystem, and excited to be back in it.

**Nick Nisi:** That's awesome. What action would you ask of users to check out SST? Just go to sst.dev?

**Dax Raad:** Yeah, exactly. Go sst.dev. This is an area where we're really trying to rethink, because we've just evolved so much, and we're still figuring out what the initial experience looks like... But I think our docs have improved a lot over the past couple weeks. Of course, we're in a constant state of never being happy with them, but they definitely are a lot better than where they were before.

There's different entry paths, and I think this is where I feel like there's a little bit of confusion. For most of our users, they are building an application. Part of the application might have a frontend framework in it, but it's not the whole application. They might have a Remix site in there for the frontend portions of it, but that's not like the whole thing. That's a typical path, and we have a path for that. But now we also have paths for other situations, where maybe your app is simple and it just is a Remix site, or it just is a Next.js site. It's not worth doing the full SST setup. So we have these - what we call drop-in modes, where you can start with a Next.js app, drop an SST, deploy to AWS. If you need to spin up any additional AWS services, like you want to publish to a queue, or you want to run a cron job, whatever, you can do that as well. So we have paths for that as well. If you still want to think primarily in your framework of choice, whatever it is, you can, and then you kind of use SST minimally, just for the deployment piece.

But there's a lot we have to do... We support all these frameworks pretty decently today, but we're pushing all these frameworks to support route splitting. So right now, if you do an Astro site, even if you have 100 routes in there, it deploys a single function. There's benefits to splitting that up into - maybe not all 100, but splitting it up so they're not just one giant monofunction. As these frameworks support that, we need to support that on our end too, and so there's some work just to make these things perform better in AWS.

**Nick Nisi:** I've seen SST -- a couple of friends have sent it to me before this, just like "Oh, this looks kind of cool." And then I saw the Fred K. Schott video, which is amazing. And then the OpenNext video, which is also amazing. So I highly encourage you to keep doing those. It's just so good.

**Dax Raad:** Yeah. We just got the idea for our next one, like yesterday, and I'm writing it out; probably filming this week, and hopefully get it out next week.

**Nick Nisi:** Awesome. I cannot wait. And I would also encourage everyone to check you out on Twitch. I was actually listening in for a bit today, and I just coincidentally happened to catch \[unintelligible 00:53:40.20\] coming on and talking a little bit.

**Dax Raad:** Oh, nice.

**Nick Nisi:** So that was really cool, about his open source journey.

**Dax Raad:** Yeah. The Twitch community is awesome. I haven't been doing it for that long, and I've been able to -- everyone \[unintelligible 00:53:52.11\] and just talking, and everyone's really fun. Yeah, I love it. It's a big part of my day every day, and it's been great.

**Kevin Ball:** If you ever need someone to do a perfect, deadpan, like deliver-the-cold-line or whatever, reach out to b0neskull. Chris Hiller from JS Party. He has the best deadpan, and he's got this like great, just like "Hmmm..."

**Dax Raad:** \[laughs\] Do you have an example of that? I mean, we definitely need more variety, so that sounds awesome.

**Kevin Ball:** I don't know if he'd be into it, because I don't know how much he actually enjoys doing that, versus that's just who Chris is... But he is the best -- like, just like funny, not taking your \*bleep\* type of guy. \[laughter\]

**Dax Raad:** That sounds pretty useful in the kind of things we want to do, so it would be cool.

Chris Hiller: JavaScript should be destroyed!

**Dax Raad:** \[laugher\] Wait, his voice sounds familiar. I feel like maybe I've seen him around before.

**Kevin Ball:** I mean, do you listen to our show?

**Dax Raad:** I actually haven't, so... Well, I will now.

**Kevin Ball:** No, Chris is phenomenal, and he's good on that. Nick and I are just goofy, but he's funny without even, as far as I can tell, trying.

**Dax Raad:** Yeah, so lucky.

**Nick Nisi:** It's a complement.

**Dax Raad:** Yeah.

**Nick Nisi:** Well, Dax, thank you so much for coming on. We will have links to all of these things, including these awesome videos to SST, and to everything, in our show notes. And anything else you want to plug before we let you go?

**Dax Raad:** No, I think we're all good. Thank you. Thank you for having me on and talking about all this. This is probably the most in-depth I've gone in a little bit, so I appreciate it. It was fun.

**Nick Nisi:** Yeah. Well, we definitely appreciate it as well, and I cannot wait to dig in more to OpenNext and SST, and getting them both up and running. So yea, thank you, and we'll catch you next time.

**Outro:** \[00:55:48.13\]

**Dax Raad:** How often do people just leave when you do the outro?

**Nick Nisi:** Probably -- I can't remember the last time that happened...

**Kevin Ball:** I don't know if I've ever seen it.

**Dax Raad:** Okay. Because every time I'm -- like, when I'm doing it from like your point of view, I'm always like "Don't leave, don't leave." \[unintelligible 00:57:14.02\] \[laughter\]

**Nick Nisi:** That has happened once, I think...

**Dax Raad:** Oh, okay. \[laughter\]
