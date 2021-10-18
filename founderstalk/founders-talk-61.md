**Adam Stacoviak:** JavaScript is in every corner of software development, so that means Npm is in every corner of software development. After reading a recent announcement to hire a CEO, I knew it was time to talk one-on-one with Isaac Schlueter, co-founder and former CEO, now Chief Product Officer of Npm, about his choice and journey of hiring a successor. But first, we have to get some perspective on where things began, so that's where we started.

Let's go back to as far back as we need to around Npm, and when you thought it should be a business. We understand mostly the story of Npm registry, the CLI, things like that, but when did this thing become a possible business for you?

**Isaac Schlueter:** That's an interesting question, actually. It really was a process of elimination, given the mission that I had, and the goal that I had, of keeping the registry up. The entire Npm experience, the Npm community - it really depends on this registry service being there to provide all the packages, and all the metadata and everything that people are publishing and installing. And we got to a point near the end of 2013 where the way that that was running was clearly not scaling to the size of the community.

It started out as just a CouchDB instance on my own personal VPS, and then this company offered to provide/donated infrastructure for it to work, and then that grew into the point where they could no longer support it, and it was starting to fall over. We had some pretty massive periods of downtime near the end of 2013, and my thought process there was, "Okay, what are the options? What do people do to fund things?"

I could fund it myself, that was one possibility, but I'm not unfortunately independently wealthy...

**Adam Stacoviak:** Bummer.

**Isaac Schlueter:** ...and couldn't afford to keep paying server bills. I could run it as a project inside of a bigger company. There was some talk of doing that inside of Joyent, the company I was working for at the time, running the Node project... But I could have also gone somewhere else, I probably could have talked Microsoft or Google into hiring me and making Npm a Microsoft or a Google thing. There were some pretty serious downsides to that option. It's a very precarious position to be in if you were not the moneymaker within a big company; you're always kind of in danger of being decommissioned, or deprioritized...

**Adam Stacoviak:** Squashed, yeah.

**Isaac Schlueter:** \[03:46\] ...squashed, yeah. You have to fight for resources there. Another option was starting a foundation. That was something I looked at very carefully, and really looked at very closely. The downside of that - foundations are well-suited to a certain shape of problem. They work very well for things like the Linux Kernel, the Node Project, where you have essentially no infrastructural overhead. There is some, I don't wanna say no, but not very much infrastructural overhead; they don't have a ton of servers. The Linux Kernel isn't gonna stop working if they don't have servers to service all of the Linux Kernels out there in the world. This is not the shape of that piece of technology

**Adam Stacoviak:** Right.

**Isaac Schlueter:** What they do need is they need people contributing to it, and foundations are a great way to marshal the human resource of 30 different companies all have a vested interest in this project succeeding, they all wanna put engineers on it, and they need a way to work together. So the foundation is really structured to enable that kind of solution.

The finances of how a foundation works are you go out to each of these big companies and you say to them, "Pony up a quarter million dollars this year and you get to be a platinum member, which means you get a voice on the governing board, you get your logo in very large size on the website, and you get to nominate two people..." etc. There's different ways of structuring it.

Then every year you go back to them and say "Pay us again. You made this investment, you got this return, let's do it again. Let's renew." And if they keep being happy and they keep being involved with the project, or invested in the project's success, they'll keep ponying up. The problem with Npm is that we really didn't need that many developer resources. What we needed was we needed to pay the server bills, and the community was growing at an exponential rate. If you look at the graph of downloads and the graph of the number of users, the number of packages, it follows an exponential curve so well you might think that we are faking it. The problem with an exponential curve is it gets bigger and bigger. That's kind of the only thing about an exponential curve.

**Adam Stacoviak:** The trend is going up.

**Isaac Schlueter:** Right, and the bigger it gets, the faster it gets bigger.

**Adam Stacoviak:** Yeah. Compound interest kind of thing.

**Isaac Schlueter:** Exactly, exactly. Because the more people that are using Npm, the more value there is in Npm, the more people will decide to start using Npm. And it would be a really tough sell to go to a company and say "We need a quarter million dollars for all our platinum members" and then the next year say "Good news, now we need a million dollars." And the next year after that, "Now we need five." It just does not scale.

There was, however, this fourth option, which was to start a company. A venture-backed company is actually uniquely-suited to handle things that have exponential growth curves. That's exactly the kind of thing that venture capitalists get very excited about, because what that means is you have something that's providing value based on how big it is, and the bigger it gets, the faster it gets bigger.

They're kind of like always sniffing out for things that have an organic, exponential growth curve of anything... Even though in this case, when we're talking about the growth of our downloads, I'm literally showing them a growth -- it's like, "Hey, our costs are spiraling out of control." Like, "Oh, good news..." Because what it is - it's an indicator of interest and value.

So we raised some money, I talked to a bunch of VCs in December 2013, started the company formally at the very beginning of 2014, and we were off to the races, with True Ventures putting in the first seed money.

That doesn't mean the problem was solved, obviously. The other thing you need to have if you go down the venture route is a reasonable assumption that you can turn that exponential growth curve of cost into some kind of revenue-generating engine... And I didn't at the time know exactly what that would look like, but what I did know was there's a lot of big companies that are using Npm; they have different needs than what the open source community has, and so there's a good chance that we can do a thing that will help them have their needs met, and they'll pay for that. And as the growth of users and packages and just the relevance of Npm continues, then that can be a way that we can sort of tie a revenue to that growth curve and fund Npm sustainably long-term.

**Adam Stacoviak:** \[08:12\] Had you done anything like this before yourself? Some founders come in green, they've never founded anything before; obviously, they've run some stuff, they've been an adult, they've been responsible, but building a company, building revenue, maybe even seeking a seed round or venture capital is just things people don't often do, unless they're in a position like you - one day you're like "I need to somehow keep doing this, and I want to", so as you'd mentioned, through a process of elimination you made your choice.

**Isaac Schlueter:** Right. No, I'd never founded a company before. I'd worked at a handful of startups, I'd worked at Yahoo and some other companies, but no -- the only actual business-business experience I had was as a consultant, just kind of doing my own side work. So I'd done some stuff, it's not like I was completely green on that side of things, and I had managed people before, but no, this was a brand new adventure for me; I was a first-time CEO, and again, doing it because I sort of had no other choice.

**Adam Stacoviak:** Yeah. We could talk about the passion if you want; clearly, you're passionate about Npm, and the JavaScript community and where it's gone, and you've played a huge role in making that possible. I don't know anybody who doesn't use Npm, so congratulations...

**Isaac Schlueter:** Yeah, thanks.

**Adam Stacoviak:** I'm kind of thinking, what was the December 2013 visits with the venture capitalists like? What did you do to prepare? Were you crazy nervous? Paint a picture there for us.

**Isaac Schlueter:** So one of my co-founders had some experience raising money - quite a bit of experience raising money at Joyent, actually - and he knew a bunch of investors. Also, the CTO of Joyent -- or I don't know if he had left Joyent already... The former CTO of Joyent, Jason Hoffman, was also giving us some advice and helping to make introductions and provide a good reference for us... But it's really fascinating the way that the -- you know, I look back over our pitch decks from the seed round, and some of them are like "Well, yeah, that is still a good idea. We're still planning on doing that. We haven't gotten around to that one yet...", and other ones are just so laughably bad, I'm like "Why did anybody think that was a good idea?"

But the thing about raising seed money is you're really trying to convince investors of a couple of things - you're not trying to convince them that you are a profitable company; that's more the growth phase, it's a much later phase kind of approach. What you're trying to convince them of is that this is a real problem, this is a legitimate approach to that problem, and "I am a person who can figure out what the solution to that problem is gonna look like." You're almost trying to sell the positioning of the founders, rather than the particular solution... Because any seed venture firm is gonna know that whatever thing you're pitching right now, you're gonna change it 4-5 times before you achieve product-market fit.

So from their point of view it's like, "Do I think this is a legit thing?" and "Is this a space we wanna be in?"

**Adam Stacoviak:** Right.

**Isaac Schlueter:** What that also means is -- and this is a controversial opinion, a lot of people probably disagree, but I think what's in your pitch deck almost just doesn't matter. The main thing you're pitching is just "Here's a big thing. I know about it. You should give me a lot of money." That's basically it.

You need to have the pitch deck, because it's part of the whole ceremony of it, but the products that are included in there, or the approaches that are included in there are...

**Adam Stacoviak:** \[12:07\] Just to give confidence that you've actually thought to the problem and you have some indications of how you might go about generating revenue, basically.

**Isaac Schlueter:** Right, right. I don't know... Any VC who really nitpicks your model that's in your pitch deck for a seed-funded company - they're just being an a\*\*. They've already decided no, they're just kind of trying to justify that.

So there were a handful of people we talked to who just completely left us out of the room, or were just jerks...

**Adam Stacoviak:** Really?

**Isaac Schlueter:** Some people in the VC community are not nice. \[laughs\] Most of them are very friendly, though. Most of the people we talked to were at least extremely professional. The biggest thing I got -- there's some folks who just don't get how to make open source a business, and they think "How do you build a business around open source" is a single problem. And in reality, that's like saying "How do you build a business around software?" Well, there's 8,000 different ways, and any of them can fail or succeed in a million possible outcomes.

There is really no one way to make a business in open source, so occasionally there's be investors who we talked to because they'd invested in a handful of other "open source companies", but when we talked to them, they'd be like, "Well, you don't have the Node contributors on your team, so how can this ever succeed?" It's like, "Well, I have the entire Npm contributor base on my team, because that's me, pretty much... And this isn't just for Node, and why would I need that?"

But people get assumptions in their head. And probably that heuristic served that investor pretty well. If you try to and create a startup around Node and you didn't have the backing of the Node core dev team, you'd have a really hard time. You're coming in sort of as an outsider to this open source community. In the case of Npm that's just not the shape of the situation.

**Adam Stacoviak:** Were you the "official" package manager of Node at the time? I know that was early days for Npm, but were you the official...? Because it says that on your About page, and I'm just curious if that's like a blessing thing, or if it's just a "you've earned it" thing.

**Isaac Schlueter:** I don't know what office would need to stamp what TPS report to make it "any more official" than it already is... Npm has been shipped with Node, bundled in the Node installation package since version 0.6.3, so quite a while ago. We're effectively the only package manager of any real relevance for JavaScript. There are some other clients and some other endpoints, but ultimately everything goes through the Npm registry.

**Adam Stacoviak:** The reason I ask that is because that would be the stamp. If I were in the VC's shoes, I would think like "Okay, Node is going here, JavaScript is going here, Npm is here, poised in the middle there, to enable both of those things to keep going where they're going", you know what I mean? That would give me the assurances I would want.

**Isaac Schlueter:** You're touching on a really interesting thing. In 2013 and 2014 it was not clear that Npm would be a big success in front-end JavaScript.

**Adam Stacoviak:** We had Bower, and what were some other registries at the time? Bower was after Npm maybe... Definitely after, but in terms of what it was trying to to. There were a couple other competing registries; it was sort of like you put your stuff in several places, not just Npm... But Npm ultimately won.

**Isaac Schlueter:** Yeah, yeah. So Bower was a big thing that was really popular in the front-end world... And really, Npm was THE package manager for Node, but for the front-end -- people were still just sort of putting jQuery in the script tag. The whole modular JavaScript revolution hadn't really made it into the web browser... And there was a lot of work going on with specs around ES modules, and different loader approaches, and it was really not clear that Npm would "win".

\[16:10\] Of all the major web front-end frameworks none of them used Npm in any kind of significant way other than Browserify. Webpack I believe still didn't exist yet. I could be getting my Diesel mixed up, but it certainly wasn't the thing it is today. And yeah, that was a big open question at the founding of this company - how do we get front-end developers to put their code in Npm, and how do we get them to consume their code from Npm?

As it happened, we just always had bigger problems to solve, and a couple years in we kind of looked back and we were like, "Oh, I guess we did it." The answer was "Continue existing and wait."

**Adam Stacoviak:** Right. "Be reliable" I think would probably be another one in there, because there's been some - and I'm sure this is probably a thing that keeps you up at night - ups and downs that a registry can have.

**Isaac Schlueter:** Sure, sure.

**Adam Stacoviak:** The speed... The global speed even, not so much just here in the United States where we're at, but Europe and China and other places.

**Isaac Schlueter:** Yeah, getting it behind a CDN was a huge way to get our operational house in order. But yeah, what ended up happening was people just sort of invented new front-end frameworks, and they did so in an environment where Node existed and where Npm existed, and so it just seemed natural to those developers, like "Well, yeah, I'm gonna use the module system and I'm gonna put my stuff in the Npm registry", and Babel and Webpack can paper over all the differences, and there you go. And now we have things like Vue and Angular and React, and they're all using Npm. So it's really become the package manager not just Node, but for JavaScript as a whole.

**Break:** \[18:00\]

**Isaac Schlueter:** You know, my number one startup maxim is just "Stay alive long enough to get lucky." I think there are very few cases where success is not 99% luck, but you do have to be there to get lucky, which means whatever the fires are, you have to put them out fast enough that when you get some lucky break, you're in a position to grab it.

So it's not that there's no skill in getting lucky, but it doesn't mean you're a genius; it just means you managed to be present and alive and still a relevant concern. If you go out of business, then you can't really get lucky anymore.

**Adam Stacoviak:** \[19:33\] Did the name ever have an issue? I know that there's always been a constant debate of what Npm actually means... Because I do believe in episode \#101, when we first talked to you - this was August 2013, on the Changelog, "Npm origins and NodeJS" was the title of the show... I'm pretty sure we called it "Node Package Manager." I'm pretty sure it was called Node Package Manager back in the day, but since you've kind of zoomed out a bit at a macro level and de-named it, and now on the top bar of your site you even -- I'll just hop over to the next tab and see what it says right now...

**Isaac Schlueter:** We sort of joke about it, yeah.

**Adam Stacoviak:** Yeah, I mean... Because at first it was Node Package Manager, and I think now it says naughty I can't pronounce the middle word something made. I don't know that's what it says on your site right now.

**Isaac Schlueter:** Well, that's randomized; it's just for you.

**Adam Stacoviak:** Yeah. But what I mean to say that is -- you know, originally if it was called Npm and Node Package Manager in parentheses, to explain the longer version of it for venture capitalists, or someone not in the software world, you'd be like "Hey, you should trust me. You should trust this team. We have good ideas. We're gonna do something awesome" was to couple or decouple from Node, or JavaScript at large; somehow to paint a picture bigger than -- the vision, I would probably easier say it like that... It was like the bigger vision that you had.

**Isaac Schlueter:** So when we were doing our seed round we kind of just accepted that "Yeah, Npm is a Node thing. It'd be great to provide some features for front-end JavaScript, but first we've gotta not be on fire. And there's some pretty clear enterprise opportunities we can go after; a lot of big companies using Node, depending on it, so let's go there." And some of the pushback that we got was, like I mentioned, you don't have the Node team on your team, so how are you gonna succeed as a Node thing?

Some other folks just kind of doubted the -- I wish I'd taken notes, I wish I'd kept better receipts, but there were a couple VC's who said "Node is never gonna be a really big thing in the enterprise" or "JavaScript is never gonna take the place of something like Java or Go." And I think that Node itself as a server-side language platform has really found its niche, which is as a thing for web developers. It's a thing that you use to run tooling, it's mostly to run tooling, but also a lot of times build out kind of the last server-side layer, like the view layer of your web application... And you know, it's good for other things too, but that's kind of where it shines. That's where something like Rust or Go don't do as well as Node.

The other thing - "Well, we don't know how big JavaScript is." That's just not a bit of pushback we get now. A half or more of all developers are using JavaScript on a regular basis; every single company is using Npm, every single web app is using Npm... That's not the pushback we get now. Now it's more like, "Well, can you turn this into a commercial success?" And as you get later and later in the stages of a company, you become less judged based on the potential and more judged based on your actual results. They don't wanna see a big community, they wanna see a product that's actually in the market, that is getting really good buying signals and producing a lot of revenue.

**Adam Stacoviak:** Well, let's turn to that. Let's break it down first, the components of Npm. You do it well on your About page, which I really appreciated, by the way - just sort of breaking down what Npm Inc. is, versus Npm the registry, versus Npm the CLI client that kind of pulls everything together, stuff like that. I broke that down I guess for the audience, but what are other things that you've done that are paid for, that generate the revenue? When did you first launch a product, when did you first start earning revenue and what was that like for you guys?

**Isaac Schlueter:** \[23:49\] This is an interesting story... I'd had people from various companies come to me and say "Npm is great. We love Npm, we use Npm all the time. Hey, here are these three problems we have." And these weren't small companies, they were big, well-known companies with lots of money. That's one of the reasons why I started the company, because I was like, "Well, this is a way that I could fund the registry and keep it running."

One of the things that we heard in a lot of our very, very early beginning customer chats was people seemed to split about 50/50 between absolutely not being able to use anything that is not on-prem, and absolutely not being able to use anything that's not a SaaS. So we thought, "Okay, we're gonna have to have some kind of a two-pronged attack here", where we have an enterprise product which is on-prem, and like more of an SMB type of thing, which is a SaaS product. And we looked at GitHub - that's kind of the obviously corollary, right? GitHub had GitHub Enterprise, which is run on-prem, and GitHub Orgs, which is their paid SaaS for teams and smaller groups.

So the first thing we built, just because we found our first customer for it, was this on-prem Npm enterprise product. I would not recommend that any company today create both an on-prem product and a SaaS product. I don't care how well-intentioned you are, I don't care how much you say it's not gonna happen to you, it will.

A lot of people told me "It's important that the codebases don't diverge", and we were like, "Okay, let's keep the codebases in sync." What they didn't say is "No, no, no. They will. They will diverge. You can't stop it. It's just going to happen, there's no way out of this...", and the reason why is that it takes two completely different kinds of company to make an on-prem product work, versus making a SaaS product work, and you really just have to pick one and go with it.

An on-prem product - the big challenges are onboarding, customer success, managing upgrades... The whole account management process, and just feature delivery. It's really challenging to get any kind of upgrades or features out to a customer; you have to convince them to do an upgrade. You have to make them successful, you have to build in the kinds of corporate competencies to handle that kind of a customer need. So it's not just about having a good support team, it's about having really proactive, technical account managers who can reach out and be like, "Hey, how's it going? How many people do you have on this thing now? Okay, we're gonna need to upgrade your server. Let's take a look at your CPU logs and make sure you're not getting yourself into trouble."

What happens with Npm is that the more you use it, the more you wanna use it within a company. So people would spin un a proof of concept with 20-30 developers at their company, and then expand that out to a couple hundred or thousands, and then it would fall over; and it's like, "Yeah, I've seen this happen." This is 2013, it's like a microcosm for what the open source community went through between 2009 and 2013.

**Adam Stacoviak:** Right.

**Isaac Schlueter:** At every company we went to, this was the same story every time. So you can do that. You can manage that well, you can do that with a lot of really good, proactive, professional services, and customer success, and so on... But that's like a certain kind of team that you need to build.

On the other side you have SaaS, where you really benefit from extremely rapid delivery, continuous deployment, metrics to be able to determine when customers are running into problems before they do, so that you can get fixes out. It's extremely easy to push new features out; you kind of just push it out, and then there it is... And the big problem is doing the operations. You're not in a position where you're facilitating an ops team at another company; you're in a position where you are that ops team, so you need to build that technical competency.

Those two companies are diametrically opposed in terms of how they're actually built. You can do both once you're a 200, 300-person company, because you have enough hands to actually manage both approaches, but doing that as a seed stage company is just impossible. It was a fundamentally bad idea that took us a long time to unwind from.

**Adam Stacoviak:** I'm curious with that then, so the state of those two - so you do have enterprise, and you do have your SaaS, so what did you do?

**Isaac Schlueter:** \[28:13\] That's a good question... We haven't' made a ton of noise about his; it's not in GA yet, but what we did was we went back to the drawing board... I had some revenue targets that our investors wanted to see; they're saying like "Your revenue should be growing about this much, over this much time...", so I did the math and I was like, okay, we can do that if we land -- given the typical annual contract value of our enterprise clients, if we land about two new enterprise clients per week over the next year, we're gonna hit that target.

I could hire a sales team that could do that, we could invest in the marketing to do that... It's not easy, but it's not particularly challenging either. The what-to-do is very straightforward.

**Adam Stacoviak:** Right, you've gotta do the work.

**Isaac Schlueter:** Right, right. The work is hard, but it's easy to know what it is. But the problem is that would completely destroy this team. That's gonna burn out every engineer here; they're not gonna do anything other than onboarding and customer success, and then the open source is gonna suffer, the registry is gonna suffer, we're not gonna have enough people to maintain the uptime we need. That means we can't do that. We're not a big enough company to do both things... And we can't give up the SaaS part, because that powers all of the world's JavaScript, so we have (I feel like) some personal responsibility to make sure that our SaaS offering doesn't die, since the free users are all JavaScript users.

**Adam Stacoviak:** It's the main thing!

**Isaac Schlueter:** Yeah, exactly.

**Adam Stacoviak:** Right...? You have to keep the main thing the main thing.

**Isaac Schlueter:** Exactly. And even if we said "Hey, business is business. Free users gotta deal with it", if we are not the package manager for JavaScript, then what are we? Then where is our credibility? So there's actually a self-interested business reason to keep being a good citizen here.

The moral of that story was "Let's start looking at how we're gonna go to the enterprise in a different way." So we reimagined our enterprise offering as a SaaS, and basically what it is is the public registry and the public website, with all of the features that those have, but sort of in miniature, and rolled up into a Kubernetes cluster that we run for the customer. This really leverages a lot of our strengths; we're very good at scaling an Npm registry. We're probably the only team in the world capable of scaling an Npm registry... At least the only one that's ever done it at this magnitude. And also it's just a lot easier for the whole sales cycle.

We were also wading into these companies with this minefield in front of us, where on the one side we have the developers, who are bringing us into the company, saying "We need Npm, we need this tool. It's how we do our work. Collaboration is getting really hard across the company lines; we need something like Npm." And the infrastructure teams at that same company, they saw us as the enemy more often than not, because what we're doing is we're making work for them. They're not getting any benefit, really, from having Npm. What they're getting is yet another thing to kind of care for and feed. It's often coming out of their budget; they have some limited tools budget and they have to deliver what the development teams need... So their pushback was always like "Well, can't you use this other thing?" The dev teams would say, "Yeah, we could, but it's not as good", and they'd say "Okay, great. You're gonna get the thing that's not as good then." \[laughs\] Because the last thing that they wanted was some new thing to be aware of and manage and worry about scaling, and in fairness, we weren't able to provide them with enough support to be successful at that... You know, back to the whole SaaS versus on-prem thing.

So reimagining this as a SaaS and redesigning it as a SaaS actually opens that door up a lot. Now the infrastructure and operations in the IT side of the companies is saying, "Hey, you just took a big headache away from me." The dev teams can get started a lot faster, and in a lot of cases there's nothing to install, they don't have to requisition any hardware, so they just swipe a credit card and off to the races.

**Adam Stacoviak:** \[32:25\] That's right, yeah.

**Isaac Schlueter:** So it's in beta now... We have gotten some pushback from some companies about it not being on-prem, but the interesting thing here is kind of the subtle repositioning of like "This doesn't have to be where you put your private code, if that's a problem for you to have that in a SaaS repository." You could just look at it as a way to kind of enforce policy compliance within your company, because you are using a SaaS, right? You're using the public registry. I guarantee it.

We can look at our logs and find 500 of the Fortune 500 companies. People think you're lying when you say "100% of the Fortune 500." They're like, "There's no way that's true." No, it is actually true. It's not 99%. There aren't five that aren't using it; it is 100%. Given that, then the thing is "How do we help the policy and compliance teams? How do we help the IT and the security teams?" and not just sort of give developers what they need... Because that's our bread and butter; that's who we identify with and who we've always served. In the open source world, that's really the only person to serve. But looking at things through the lens of security and policy compliance, you start to see this as a bigger equation, and there's a lot more opportunity to offer value by thinking a little bit more holistically about everybody within a large organization.

**Adam Stacoviak:** That's pretty smart. If I understand you, the current state of enterprise is moving towards a SaaS-based version of it; it's in beta. Prior versions were a little separate project/codebase that was installed on-location, and then you had sales teams and technical teams kind of like paying attention to them, and monitoring it, or whatever, to keep them getting the value that Npm on-prem would bring.

**Isaac Schlueter:** Yes.

**Adam Stacoviak:** It's also interesting to look at that from the world of cloud, too. We're trusting someone else to host and run and operate your codebase, or at least infrastructure that runs your code has become --

**Isaac Schlueter:** It has become commonplace.

**Adam Stacoviak:** Yeah, exactly... Whereas before you were sort of forced to go on-prem, because the trust wasn't there. But now you've got it, so you're able to do enterprise in a much better way, that doesn't divide your company.

**Isaac Schlueter:** Right, right. There is an interesting conversation we had around what that trust means, and if you look at the data and the research on this, in many cases and for many companies, unless you're Microsoft or Google, you're probably better off trusting Microsoft or Google to run your infrastructure, rather than try and do it yourself. Even if you have a very capable team, they're just not operating at that scale... So you get a really big business advantage by going with the SaaS, in a lot of cases.

Now, that being said, a lot of times when people say "on-prem", they don't mean literally on-prem. "On-prem has come to me in our AWS account, rather than yours..." There are some hold-outs, and I think as our enterprise go-to-market kind of progresses, at some point we're gonna find someone who says "No, no, really... I want this thing. I know it's this cute Kubernetes cluster thing, but I'm gonna pay you many millions of dollars to have it on my physical location." Then at that point we'll say, "Alright, let's build the team that can support that." But we're now in a position where we can go to most enterprises and sell them a solution that makes their lives profoundly better for everybody across the company, and we don't have to get into that fight between dev and infrastructure. We don't need to ask our champions within a company to go convince someone who sees no personal benefit to using our product.

\[36:19\] So our existing enterprise customers -- I wanna mention this just in case any of them are listening to this... \[laughs\] We're going to keep supporting our Npm enterprise on-prem product for quite a while. It'd be a little messed up to say "Okay, we're dropping support for our on-prem product, but our new SaaS product is not even out of beta yet." So as we do get closer to rolling this thing out and calling it GA, we're gonna have a comprehensive plan to make sure we take care of those people.

**Adam Stacoviak:** Well said, yeah. In case they're listening, you've gotta make sure that they don't get "Hey, I should be emailing Isaac after I listen to this show, because that was not expected."

**Isaac Schlueter:** "Did I just hear you decommissioning my thing?"

**Adam Stacoviak:** Exactly...

**Isaac Schlueter:** No, no, no... It's cool, it's cool. We're good.

**Adam Stacoviak:** Right. Well, let's turn back to the -- I don't wanna get too far back, but just enough to kind of understand this... So if I understand you correctly based on some of my research, you took an initial seed funding in 2014, in the February range, at least based on announcements... Literally one year later you took another series A for eight million, so you're looking at maybe 10.6 total of funding... And you haven't been funded since then. Does that mean you don't need more money, or you've been just so wildly profitable? What's the scenario there?

**Isaac Schlueter:** There is a third possibility you didn't mention, which is that we got money and didn't say anything about it.

**Adam Stacoviak:** Oh, is that right? Okay...

**Isaac Schlueter:** \[laughs\]

**Adam Stacoviak:** How much money did you get and why didn't you say anything about it?

**Isaac Schlueter:** Well, since we didn't say anything about it, I probably shouldn't say anything about it, but... From the point of view of looking at this as a founder, you should use funding announcements very carefully. It's certainly not required to announce every dollar of funding that you get, and it often doesn't really serve your company's needs.

I think that a seed funding - yes, announce it. Announce it as soon as possible.

**Adam Stacoviak:** It's marketing.

**Isaac Schlueter:** Exactly. A funding announcement is always marketing. If you have a really big round, then you probably wanna announce that; again, because it's marketing. It can rattle the cages of all your competitors, it gets all your buyers thinking, it gets you in front of a bigger class of buyer, who's now thinking, "Oh, they're a significant company, because they've raised 50 million dollars", or whatever. But if you do follow-on rounds, if you do like a A1, you probably don't need to talk about that... Especially if you're doing inside rounds, or anything like that; it doesn't move the needle in terms of taking your company seriously. It's not the best way to brag about your progress, and it doesn't really get you anything to make that announcement.

**Adam Stacoviak:** It makes sense.

**Isaac Schlueter:** So without saying too much more, you know, if you're sitting on the feed of SEC filings or whatever, you would see that we have raised some more money, but nothing that we've made any kind of big news about. Honestly, I think hiring a new CEO is a much bigger deal than any round we've raised.

**Adam Stacoviak:** That's where I was trying to go to, because I wanted to kind of close the gap there... One, to give you a chance to say "Yes, we're so wildly profitable", if that was the case...

**Isaac Schlueter:** \[laughs\]

**Adam Stacoviak:** Because that was at least what I was probably trying to gather from the total -- what it seems, publically... Total raises, and kind of painting a picture or a position for Npm, prior to moving on to the next -- I would say a much bigger topic is hiring a CEO, and what that means for you... Because a lot of the story we have covered, you've been not only leading product, but also leading as a CEO, which straddling those two lines is super-difficult.

\[40:03\] Something you had said actually in your announcement post was basically you said being -- I'm gonna go back to where... You said "One piece of advice I got as a founding CEO of a startup was to start planning your transition and less to be planned for you, so... It seems like this is a big deal for you, obviously. You've personally penned a post deeply about it, which I've just quoted from... So help us understand why this was such an important stage for Npm.

**Isaac Schlueter:** Sure, sure. Yeah, people really responded to that post. It's one of those things where I just kind of was like, "Oh, I should say something", and I just kind of wrote a rough draft, and... I think one of our marketing people was like "Oh, this thing kind of sounds weird. Maybe restructure that sentence", and other than that, it went out as is.

Yeah, why did I hire a CEO...? \[laughs\] No, I really like him. I genuinely like the person I hired. I think we lucked out. Bryan has been great to work with, and for, and... It's kind of a weird situation, as a founder, to hire a CEO. On the one hand, you're hiring your boss, but on the other hand, I'm still on the board. I have all kinds of shares, and a ton of credibility, so it's almost like he's working for me... But it has to be a very good partnership, and it has to be something where you have a lot of trust in each other.

He has to have trust in the company and in what I've built and what I've done so far and what my vision is, in order to get on board and wanna take his own time and energy and spend it on this. And I have to really trust that he's not gonna screw it up. It's my baby, and you're hiring somebody else to be your baby's new parent.

**Adam Stacoviak:** Right... Very tough to hire for. That's why, the larger part of the conversation -- actually, this wasn't the most I wanted to talk to you about, but this is hard, right? And someone listening to this will hear your passion; you've been in the known world since the earliest days... Core contributor, Joyent... Your full story can be heard on other shows; we'll point to them in the show notes, so go back and listen to other shows for that to kind of get some of this back-story if you want to, but... You know, hiring a CEO as a co-founder, as someone who's been in charge, has got to be an extreme exercise of not only trust, but maybe what I'd say is responsibility... I'm not hitting the right word, but a very adult thing. It shows that you don't take yourself so seriously that you have to have that title, have to have that role.

**Isaac Schlueter:** Sure, sure.

**Adam Stacoviak:** But you do take yourself seriously, because you do run things, of course, but you're not putting Isaac on such a huge pedestal that no one else could do the job.

**Isaac Schlueter:** Yeah, yeah. I mean, I had a few sleepless nights over it, to be honest, over just the idea or the concept... And it wasn't even ego; it was just like, "How can I do this, and how can I do this in a way that's not gonna be absolutely terrible and take this risk?" Ultimately, where I kind of got to was like, "Okay, yeah, it's a risk. If I hire somebody else, they might not be good, the team might reject them, we might have this massive upheaval..." We probably will have a massive upheaval no matter what, just because it's a new person who's gonna come in and be like, "Hey, all these processes you set up - this why you're failing. We're gonna change them", and change is disruptive and traumatic, right? There's no way around that.

But it's almost like the company equivalent of a heart transplant, or something. It's like, "Yeah, it might go good, it might be life-saving, but it is not a small thing. It's painful and big." And there was some pressure from our investors... I think some of our investors were like, "You know, you seem to be doing an okay job, but here's what you need... Maybe you need to hire a COO, or hire somebody to run marketing, or somebody to run sales..."

\[44:11\] And we had tried some of those things, and ultimately what made the decision was like "I'm not having fun doing this." I'm not having fun being everyone's boss, I'm not having fun being responsible for our go-to-market plan, and stuff... I'm happy to participate in those things, of course; I have very strong feelings about our messaging and positioning and everything else, but gosh, it's just so much work... All of the operational stuff, and all of the company interdepartmental communication lines and everything else is just not my forte. I could learn it, I can do it; it's not rocket surgery, as they say, but what that means is what I'm not doing is I'm not spending my time thinking deeply about our product, and really figuring out "Where does our product need to be? Where do we need it to go? How are we going to change JavaScript next? If we release this or that feature, what impact is that gonna have and how do we skate ahead of the puck?", or whatever sports metaphor... Run ahead of the ball, I don't know.

**Adam Stacoviak:** The hockey one was good...

**Isaac Schlueter:** \[laughs\] Okay, good. How do we make sure that we're well-suited to handle the changes that we're causing?

**Adam Stacoviak:** You need to be in that position. That's the job that no one else can do. Sure, there's some others who could probably do it, but you probably have a better capability of doing it well.

**Isaac Schlueter:** Sure, sure. I have a track record of doing okay at that. And that's not like -- I'm not trying to be modest or bragging about any of this; it's literally just like stepping outside of my own skin for a second and looking at it as a shareholder, like "What does this company need? What is the mission of this company and how do we serve it?"

And would I hire this Isaac guy as a CEO? The answer is "Hell no." He's a smart guy, but he doesn't want the job, so... That's kind of a deal-breaker.

**Adam Stacoviak:** That is so funny, to say it from that perspective... "Hell no."

**Isaac Schlueter:** Right. So we did this first CEO search beginning of 2017, first half of 2017... And everybody kind of fell into a couple of different categories. There were some people who we really liked, who were very well-qualified, and said "You know what, you're not ready."

**Adam Stacoviak:** As a company.

**Isaac Schlueter:** Yeah, as a company, as a product... One person in particular, she kind of gave us this "It's not you, it's me" kind of comment, and I drilled down into it and she was like "You know, you need somebody with more developer empathy, who can figure out what your product vision needs to be, and I think that needs to be you. Until you do that, you can't hire a CEO." And I was kind of feeling like, "Well, as long as I'm CEO, I can't do that." \[laughs\] So it really was a frustrating time, in a lot of ways.

There were some other folks who really wanted the job, and as we went through the interview process, and especially the background process, I was like, "Okay..." I could see that any company this person works at is gonna be successful, and they're really smart, but I'm gonna be budding heads with them every single day. Do I want that to be my job? The answer is no, I don't really want that to be my job.

What I didn't wanna do is hire somebody who's gonna go very effectively sell this on-prem product that was sort of becoming toxic within the company.

**Adam Stacoviak:** It's the box, from Silicon Valley.

**Isaac Schlueter:** \[47:55\] \[laughs\] Exactly, exactly. I didn't wanna reimagine the entire company around this approach, this product approach that I fundamentally no longer believed in... I was like, actually what we need to do is pivot and change our direction a little bit, and focus on this other direction. And then there were some folks who I think really did get it, but were kind of on the fence... And yeah, again, I think a lot of it is like -- you know, they were looking at this and saying, "Well, I can spend my time figuring out what your product needs to be, or I can spend my time running your company, but I can't do both, so... I'm gonna go somewhere else."

So we did a six-week -- we actually commissioned one of the people who passed on the CEO search to do a six-week market research and marketing customer research project with us, and that's kind of where we landed on like "Look, we need to get into security, we need to be a SaaS, we need to be the thing that serves the interest of the IT and security teams at enterprises, rather than just the thing for developers." Because are uniquely situated to be able to offer a security tool that doesn't cause more friction for developers. And that I think is a pretty unique opportunity, a pretty unique thing in the dev tools space.

**Adam Stacoviak:** Well, given your distribution too as a registry, I think the markets also said "Hey, you need to have some security as well." While it has not been your fault, you've been in the vector of breaches.

**Isaac Schlueter:** Of course, yeah. We're in the toolchain, we're in the supply chain of your software.

**Adam Stacoviak:** Right. You need to be a check and balance.

**Isaac Schlueter:** Right. Actually, one of our investors said to us one time - we kind of pitched them on this "Hey, we're gonna go acquire this security team", they were like... I forget exactly how he put it. He was like, "If you told me that you're going to be a proxy for everyone's JavaScript in order to sell them a security tool, I'd say you're crazy... But you already did the first part, so... Yeah, build the security tool."

So beginning of 2018 I believe we released Npm Audit, which was kind of like NSP built into the Npm experience... And that's had a huge impact already, just in upgrading the security stance of the entire JavaScript community. It's also why we've gotten a lot of data about the security status of a lot of very, very large enterprises, very large companies around the world that are just shipping vulnerabilities every which way... It's really terrifying. I just sort of naively assumed that they must have some process to keep that from happening, and the answer is no, they don't. They need one. So I'm very excited to be getting to a position where we can actually ship Npm Enterprise as a SaaS to general availability, so that we can deliver them something that their developers are not gonna kind of route around because it's inconvenient, or adds friction to their process, and that the policy and compliance and security teams at these big companies will actually appreciate and maybe even push their developers to use Npm, rather than get their code from somewhere else.

**Adam Stacoviak:** You'd said part of -- how do you pronounce his last name? Is it Bryan Bogensberger?

**Isaac Schlueter:** It's Bogensberger.

**Adam Stacoviak:** Bogensberger.

**Isaac Schlueter:** Yeah.

**Adam Stacoviak:** When you mentioned him in your post, you said he brings a wealth of experience from open source, he's got roots in open source, a ton of excitement, obviously, expertise to bring to it... But you said this - you said "Commercializing something like this without ruining it is no small task, and building the team to deliver on Npm's promise is a major undertaking." That's the thing I think about, commercializing something like this without ruining it... Because as you've said in this conversation and many times before this, what a responsibility you have to the JavaScript ecosystem; and any change to Npm - workflows, whatever - is either a hurdle to developers, a time-taker of developers, and ultimately it slows down the progress of massive global software. You have such a huge responsibility to do that, so... Kind of going back to your sleepless nights of hiring a CEO, and Bryan being the winner of this... "Winner" - I don't know if that's the way you said it... You've done the search, "Bryan wins! Great!"

**Isaac Schlueter:** \[laughs\] Right, right...

**Adam Stacoviak:** \[52:22\] So how do you move forward without ruining things?

**Isaac Schlueter:** Npm is actually really interesting, because there are opportunities to provide very, very compelling enterprise tools that don't ruin our community, that don't actually harm the open source users. There's not a ton of open source companies like that. There's usually some kind of contention, especially if you're talking about an open source project that's delivered as a standalone executable. You kind of have one classic example of this, the way that MySQL was dual-licensed for a long time. I forget now... There was like MySQL and then MySQL AB, or something, or MySQL BC... Anyway, there was the commercial version and the open source version. The open source version was GPL; if you want that non-GPL version, you have to pay money.

That's a lot trickier to do in a way that's not very fragile. For example, what ended up happening with MySQL is that it was bought by Oracle, who just stopped updating the free version and said, "No, you've gotta pay." And a lot of the open source community had to just go elsewhere, and you see other things... MariaDB is the main one that all the MySQL folks jumped to.

The other thing is you can build an open source version which is free, and then add features to a commercial version. I remember there was some talk about doing this in Node back at Joyent that I resisted very forcefully at the time, which is that we would have the Node open source platform, and then there'd be another Node commercial platform that would have all sorts of other APIs or other things built into it. And I think when you're in a position of running an open source project, doing that is very, very difficult. It gets you into a very difficult ground, because you have to walk a very fine line between really having this value and then holding it back from your open source community, which to me just feels like -- not like there's anything morally wrong with it, but it just feels gross to me.

I feel like I have this thing, I'm giving it away, but I'm not giving you the whole thing, and there's no real reason why one part should be included or another shouldn't. Now, at Bryan's former company, Inktank, that's exactly what they did, and I think they walked that line relatively well, to their credit... Where Ceph, the storage platform, was completely open source; it was liberally licensed, they had tons of people using it, and then all of the management infrastructure, the line that they drew in it - I don't wanna speak for his former company, that I know very little about actually, because I never used Ceph, I was sort of busy with other things, at the other end of the stack, throughout that whole time... But yeah, there was a pretty clear line in the sand between what is commercial, what is paid for and what is free for the open source community. But there's always gonna be those edge cases.

With Npm, we don't even have to hold anything back. The open source tool can have 100% of the functionality because that's the client to the registry.

**Adam Stacoviak:** It's in your best interest that it be that way.

**Isaac Schlueter:** Absolutely, absolutely. And it's actually competitive, because now people who are providing alternative registries, who are competing with us - they have to either seem a little foolish, because they don't support the whole feature set, or they have to be spending time and energy scrambling to keep up with us, and we're sort of always fundamentally in the lead, and really taking advantage of our privileged position there.

\[56:10\] But the other thing about it - there are features that open source users fundamentally don't need out of their registry service. They don't need private packages, for instance. They don't need the single sign-on, and management and policy compliance stuff that you're gonna see inside of really large enterprises.

There are certainly some arbitrary lines to be drawn. I think GitHub just recently started giving away private repositories for unpaid users, which I think is interesting. They limit the number of repositories you can have. All of their free users get now three private repos, and I can see us doing something similar to that, and continuing to evolve where those lines are drawn, but fundamentally, the needs -- there are needs that a large enterprise of 1,500 developers... They absolutely need a way to say "Here are 25 different projects, and I need to see what's going on in all of them." Nobody needs to know all of the things that are going on in all of the open source projects. That's just -- you couldn't, a. And b, it's not really reasonable to want that.

We can build a lot of really compelling features that are structured in a such a way that we're... As one example - we haven't built this is; this is vaporware, a handwave on the roadmap, blah-blah-blah... But for example, whenever you run Npm install now, we run an audit of all the packages in your dependency tree. That's something that benefits every single one of the people using Npm today. We give that away for free, and why do we do that? Because one of the things that you need in an enterprise is you need to know how are all of the developers at my company -- have any of them installed something that is insecure? Have any of them built an application and shipped it to production that is insecure? Can I go and verify all of the different licenses that are in use in all of our different projects? And these are the kind of things that that same auditing infrastructure enables us to do.

So we're in a position where giving things away to the open source community actually does serve our long-term product and company needs as we go to market in the enterprise.

**Adam Stacoviak:** Something that I read on your About page and I actually wanted to confirm with you if this is still accurate - I imagine that usually most people's About pages are the last thing they look at, but it's one of those things where you seem like the kind of person to be very intentional... So I'll read it real quick. It says: "Npm's mission is to take open source development to entirely new places. When everyone else is adding force, we work to reduce friction. Npm is not a typical product, and we're not a typical "Work hard, play hard" startup. We are responsible adults, with diverse backgrounds and interests, who take our careers and our lives very seriously. We believe that the best way to iterate towards success is by taking care of ourselves, our families, our users and one another. We aim for a sustainable approach to work and life, because that is the best way to maximize long-term speed, while retaining clarity of vision. Compassion is our strategy."

It also said somewhere else too that you just really care about the community, and I think it's important to look at Npm in this way too, that you run the registry, there's some vested value there for you as a company, but also the fact that you run it freely, scalably, fast, for the globe, the entire world, to me says a ton about you as a company. And to find ways to do what you've done just there - bringing security audits to every user, not just those who pay for it - to me says how much you care about the community. But... You need to make money as a company.

**Isaac Schlueter:** Well, I couldn't have asked for a tougher question there, buddy. \[laughs\]

**Adam Stacoviak:** Right...?

**Isaac Schlueter:** \[01:00:13.05\] So that thing in our About page - that's an interesting story, actually. I wrote that as part of our first hiring blurb... When I wrote that, I believe Laurie and I had just gotten done dealing with some huge operational issue, back when he and I were the two technical people at the company. And we were sitting around the table at our VC's office, at True Ventures' office in San Francisco; we didn't have our own office space yet, and it was like 8:30 at night, and it was like...

**Adam Stacoviak:** Feeling inspired.

**Isaac Schlueter:** Yeah. "We've gotta hire some people who are not gonna put up with this stuff... Because this is not gonna keep working." So it was a lie that came true... I guess aspirational is the best way to put it.

**Adam Stacoviak:** Hope.

**Isaac Schlueter:** Yeah. But we've assembled a world-class team here, and I think actually in particular if you look at age distribution at most startups, the average age at most startups is like 30 or younger, and I think at Npm we have actually a pretty representative, or even skewing kind of older, in terms of the people at this company. There's a ton of folks who have been involved with open source for 20-30 years.

On the one hand, we don't ask people to work stupidly long hours. We also do kind of trust that everybody's gonna manage themselves appropriately, and not fry themselves out, but that does happen... But yeah, we do take a very intentional approach to how we build things, and how we set priorities, and try to be very realistic about what we can deliver, and cognizant of what our needs are.

**Adam Stacoviak:** So is it still true?

**Isaac Schlueter:** I think so, yeah.

**Adam Stacoviak:** Is there anything about that you would rewrite, or change, or add to?

**Isaac Schlueter:** I don't know, that's a tough question. There's probably some stuff on our About page which isn't correct. I haven't actually looked at it in a really long time.

**Adam Stacoviak:** I only pulled it up because I actually liked it quite a bit, and I know that the usage of an About page from company to company varies. Microsoft's About page, versus Npm's About page probably skew differently, right?

When I read that, it reminded me that, hey, when I looked up on LinkedIn, you've got 60 employees or less, where you're trying to go, at least - I'm not sure if that's accurate or not, but... It reminded me the utility that the Npm is, but also the company that you are, and the position you've been in, so in preparation for having this conversation asking you about "How do you hire your new boss when you started the company?" is gonna be a tough question, for one, but then what a responsibility it is to the community that you come from this position, this perspective.

**Isaac Schlueter:** Right, right.

**Adam Stacoviak:** I think it's important.

**Isaac Schlueter:** Yeah. I think there's this idea - and especially with a lot of venture-funded companies - of being sort of a "Go big or go home" type of company. And from Npm's point of view, we can't go home, but we do kind of have to go big, or else we won't succeed... Because the Npm registry is continuing to grow, the JavaScript community is continuing to grow, and JavaScript is continuing to be in every corner or software development. So we either keep up with that, or we don't... Which is a brutal way to put it, but it's just sort of the facts of what this company needs to do.

**Adam Stacoviak:** \[01:04:00.07\] Let's close with this one then - what's in the very near future? What's on the horizon for you that people may not know much about, that you can at least tease or share some general details publicly now? What's on the horizon, since this is a transitional period for you, you're moving into the role of Chief Product Office, spending a lot more of your time focusing on the things you love more of...? Where are you going?

**Isaac Schlueter:** We are hiring... We're hiring pretty aggressively, I should say. We've already grown the company -- it's been ridiculous...

**Adam Stacoviak:** Was 60 an accurate number on LinkedIn?

**Isaac Schlueter:** Probably about right, yeah. This is another interesting thing as a founder - and not as a CEO, I should say - we're just now at the point where this last batch of people that we've hired a couple months ago was the first time somebody showed up in Slack that I had never met... And it was just like "Oh, who are you? You work here? Huh, that's novel... I was not a part of your hiring process. How did this happen?" I kind of had this weird, like, "There's a stranger in my house" kind of feeling at first, the first couple times it happened.

**Adam Stacoviak:** Right, and have to trust them in the refrigerator.

**Isaac Schlueter:** Right. I've gotten used to it now. I try to set up meet and greet chats with everybody, with all of our new employees, every so often... But yeah, we are growing really quickly, we have just a team that's exploding. We've built out a whole new executive leadership team, added a head of sales, head of community marketing, a COO, you name it.. We're gonna be talking more about those individuals over the next couple months probably, making some noise about them... And our main number one focus right now is just kind of getting to this GA launch of Npm Enterprise, which should be right around the corner here, a couple months.

**Adam Stacoviak:** Well, Isaac, I'm proud of you. I think what you've done is great. The word I was looking for earlier in our conversation, I couldn't find it when I was saying "responsibility" and "adult" was "maturity". I think you've made a mature choice in understanding your limitations, but at the same time understanding the needs of Npm... And not only the company, but those who work there, as well as those build wealth and thrive and serve an awesome world and do awesome things in software because the Npm registry is trustable, it's reliable, it's secure, all these things. I think you do an amazing job as a company and as a person...

**Isaac Schlueter:** Oh, thanks.

**Adam Stacoviak:** I was excited to have this conversation with you and dive into your past and learn more about where you've been, and the bloody knuckles you've got, and the scars, and the lessons learned, and things like that, so... Thank you so much for your time, I appreciate it.

**Isaac Schlueter:** Thanks.
