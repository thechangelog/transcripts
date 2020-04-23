**Johnny Boursiquot:** Hello, and welcome to this episode of Go Time. I'm your host, Johnny Boursiquot. Joining me is Mr. Mat Ryer. How are you, Mat?

**Mat Ryer:** Hello! I'm good, thanks. How are you?

**Johnny Boursiquot:** I'm okay, I'm feeling quite chipper today. Joining us is a special guest; in some circles he doesn't need any introduction, but we're gonna give him one anyway.

**Mat Ryer:** Not in this circle...

**Johnny Boursiquot:** Not in this circle... \[laughs\] So our guest today is Mr. Bryan Liles. Bryan is currently a senior staff engineer at VMware, where he actually runs multiple projects, including Octant, which you might have heard about quite recently. He actually unveiled it on Twitter, for all to see. I think the project has been getting some popularity and getting some contributions from the broader Kubernetes community, so that's awesome; we'll probably touch on that too a little bit.

Bryan is known to talk on a number of different things, from machine learning, to developer health, to programming techniques... When I first came across Bryan, back in our Ruby days, where he was talking about "Test all the effin' time"... \[laughter\] Yeah, so Bryan has been around quite a while, and I've had the pleasure of knowing him for a few years as well. For those of you who don't know about Bryan, do check him out on Twitter; he's hilarious, and he'll get you to think with some of his tweets as well. Bryan, welcome to the show!

**Bryan Liles:** Well, that was a great introduction, Johnny. If I could blush... If I was not brown, I would be blushing right now.

**Mat Ryer:** I can blush, but I've never needed to, because Johnny has never been nice to me. \[laughter\]

**Johnny Boursiquot:** No, the way you should look at it is if I'm not in the act of being mean to you, that means I'm being nice to you.

**Mat Ryer:** Oh, so that's just like a sensible default.

**Johnny Boursiquot:** \[00:04:01.02\] Yeah, you should look at it like that. So today we have Bryan on the show because we've been kind of stumped on something. We're trying to figure out what Go in the enterprise means. What does that even mean, "Go in the enterprise"? If you google it, you'll find a bunch of different opinions, and things... Some would say Go is even built for the enterprise; a lot of people who are trying to solve enterprise "problems"... But I don't think I've ever written Go differently, whenever I've written Go, I'm like "Oh, I'm writing for the enterprise now. A bunch of different things that I'm not doing when I'm writing for the non-enterprise." Like, what does that even mean? Bryan, please, enlighten us.

**Bryan Liles:** Alright, so... I don't know, actually, what Go in the enterprise means. Johnny said "Come up with a topic, Bryan", and I went over all the other topics and I said "Well, no one's ever talked about this. We'll just explore it together." But I will say that now I've worked in two enterprises where Go was not a foreign language. Where I work at VMware right now, we have multiple business units using Go. When I was at Capital One - I've been there away long enough, so I can say this now - things that your credit card transactions ran through are now based on Go. And I think that's interesting.

The reason actually why I thought this was an interesting thing to talk about - whenever I fire up whatever I decide to write Ruby in in a day, and I write code, or I write for an open source project, you code in one way. But whenever you introduce this horrible thing called "people", and then "a lot of people" to your process, things change. So that's why when it's a -- and I knew I would have Johnny here, and I guessed I would have Mat here, so I just wanted to throw out some ideas that I've seen, and then we can talk about those types of things for a little bit.

**Johnny Boursiquot:** Does enterprise mean big money, big corporations, big expenditures? Because personally, when I think of enterprise, that's what comes to mind; I'm thinking "Big corporations, big tech companies, maybe non-tech companies that have lots and lots of software, lots and lots of process, and people and getting anything done takes months or years... That's what comes to mind.

**Bryan Liles:** Yeah, that's interesting - what is an enterprise? I don't know... I do think that once your company has multiple business units, because they're chasing revenue in multiple directions, they've reached out beyond that one thing that they were known for... So VMware started with VMs, now VMware does software-defined data centers - so it's networking, computes and storage... And now Kubernetes, and protecting office devices, and whatever hyperconverged infrastructure is, and a few other things - we're now an enterprise.

And generally, what it is is that whenever we can totally separate our cloud-native revenue line from what we're doing in vSphere in your clusters. Maybe that's what it is. Or a more simpler explanation is that an enterprise is whenever your chain to the CEO goes through a director, a senior director, some kind of VP, and then their boss who's a VP, and then their boss who's a VP, and then maybe a C-level person. Then you're an enterprise, even if you only have one product.

**Johnny Boursiquot:** Layers.

**Mat Ryer:** I've seen five-team startups that has that kind of a hierarchy.

**Johnny Boursiquot:** \[laughs\] That's unfortunate....

**Bryan Liles:** And you know, it's funny, you laugh, but yeah... \[laughter\]

**Mat Ryer:** \[00:08:00.03\] For me, security also comes up a lot with enterprises. It seems to be a thing that almost there's a suggestion that startups don't care about it being secure. It's only when it's an enterprise that they suddenly have all this concern.

**Bryan Liles:** Well, here's a secret fact here - and I'm not speaking for my employer when I say this, I'm just speaking in general; Bryan, that guy - most companies don't care about security. They care about SOX compliance, and HIPAA compliance, and they care about regulators, and they care about people who can cost them money if they don't get it right. And this is not a negative one, all the great security people that I know and don't know. I think there's people out there doing a great job, but really, a lot of companies don't care about security as a thing, they care about it as a liability. And when it becomes a liability, then that's whenever they start investing lots of money and people into it.

**Johnny Boursiquot:** Not to go down too deep of a security tangent here, but when I think of developing software, I like the boundaries that security provides. Once I know what the boundaries are, then I feel free to explore up to those boundaries. It's liberating in some way. If I know what the constraints are, if I know what security review is gonna entail... Because I know I can't just ship my software out there and assume that there are no holes in it, and assume that it's just gonna do the right thing all the time, and if somebody tries to crack it... Like, I'm not perfect, and I don't think any team out there is perfect in how they create their software.

Security is not a switch you just flip. You can't buy it off the shelf and apply it to your product and you're done. It's a continuous process, it's something that mitigates... So I feel comfortable working within that boundary. Shouldn't that be how we view things like security, and compliance, and all these other things?

**Bryan Liles:** Yes. And not to go super-deep into this - in a perfect world, yes, of course, it is liberating. But in the real world that we live in there's people and there's ulterior motives, and it is a little more complicated than that. But there are better parts of enterprise, like Go in the enterprise...

I actually have a premise. My premise is this - we have lots of companies out there, whenever you say "enterprise development", what they think of first off is they think of Java. Really deep Java. And I say this as a company now where we own Spring Cloud platform. There are many enterprises that do literally everything on Spring Cloud platform. But I'm actually here to say that Go - what are we, almost 11 years in now? Go in many cases is a viable language and ecosystem for enterprises. And we actually just got here recently, but I think now is a good time, and that's why I wanted to actually think about and riff on with you all today.

I have my first controversial item... And this is something we could do years ago, but I will throw it out there right now and see what you all think. It's actually the same concept that I was brought on Go Time to speak about a few years ago with Brian. Whenever you have a monorepo - I love that word - and you have the right amount of tooling for it, Go becomes very, very powerful... Because it's strongly-typed, and fast compile times, and it generates binaries; there's no need for a runtime. These three things right here are great for whenever you have to code with lots of other people. You can define not the soft APIs that we define in Python, JavaScript and Ruby, but we actually can get some firm, strongly-typed APIs.

\[00:11:54.07\] Then, when you put this all in a monorepo and it's all in the same place, then what you get is that in a perfect world, of course, you get this thing where if I'm depending on a library that someone else is using, I can always make sure it's up to date. And yes, there are definitely arguments of why that might not happen or why it's hard, and I can do that.

Then another thing which is actually super-important for many large enterprises now, especially when we're all trying to move to this cloud-native technology, so there's a lot of containers and things like Kubernetes, being able to generate a binary that I can actually run and not have a runtime - oh my gosh, this is amazing. So this is why I just wanna talk about Go in the enterprise.

**Johnny Boursiquot:** That's a very good observation, because a lot of folks are gonna think "enterprise Java" when you say the word "enterprise" and "programming" and things like that. Back in my Java days even some of the product launches had the word "enterprise" in them. Like, you were doing enterprise JavaBeans, enterprise service bus, and this and that. The name alone implied that you were programming differently, or you had different concerns, or additional concerns that you had to worry about when you were doing enterprise versus non-enterprise Java development.

Now, in Go, is there a material difference in how you program, say, your startup's business logic in Go, or your network layer, or whatever the case may be? Is there a material difference between how you do that, say, at a Google, at a Salesforce, at a VMware?

**Bryan Liles:** You know, I don't think so. I think that there is this misconception that in large enterprises, large enterprise development teams aren't capable of producing code... So we give them Java, so we can give them all the pacifiers and all the hand-holding they need... But actually, after seeing this -- and I worked at a large bank, and after seeing what these teams were capable of... No, I don't see any difference. Most of them spent their day inside of IntelliJ. I mean, that's cool... I spend most of my day inside of Go land. Made by the same people. It's literally the same editing engine. It's the same thing.

I think we need to remove those misconceptions, because that's all it is - I hate to use the term FUD (the whole fear, uncertainty and doubt), but that's all this is. We use Java because -- it's the old IBM saying, "No one got fired for buying IBM" and "Oh, we're using Java because everyone else is using Java." But now in 2020 - I think that's the year - there's multiple viable options out there. I'm talking about what Microsoft is doing, what .NET and this dude over there David Fowler - amazing stuff, what Go is doing...

I only bring up this because a friend of mine now works on the Go team, Carlos Amedee. And if you've seen an email from him lately, he's shipping Go right now. And then there's other languages... I think it's time to not diversify, because diversification is bad whenever you're in a big place, but I think it's time that we can explore other big projects... Because look right now - is Kubernetes almost the largest project on GitHub right now? They're doing fine(ish)...

**Mat Ryer:** Bryan, earlier you mentioned that now Go kind of got there; it's now at the enterprise. What had to happen? What was it lacking before that? And is it just a sort of maturity thing, and a community kind of adoption?

**Bryan Liles:** Well, there's only one thing that I'm really thinking about, and that was sort of kind of fixed recently... So in 2015(ish) I wrote this blog post - it was pretty popular - when I was at DigitalOcean, about DigitalOcean moving to Go. I didn't do that work by myself (as a matter of fact, I tried to do none of it), but I was definitely the person who got everybody on board with moving Digital Ocean to a monorepo. And the reason we had to move to a monorepo the way that we did is because Go package management five years ago was horrible. Yeah, I could make stuff, but it was bad.

\[00:16:12.00\] And then just until recently, with the introduction of vgo, and now that we have modules on Go - it took us a little bit of time to get used to it. And I won't say it's perfect, but I will say that it's more than good enough now that we can actually do dependency management in Go in a proper way.

And then you think about the introduction of the GOPRIVATE environment variable, and local caching - okay, now my enterprise doesn't have to take down the world's infrastructure to actually be able to do modules properly. Even better yet, I can use [Athens](https://docs.gomods.io/) and now I can have a private proxy where I can actually do this. So the infrastructure is now getting there, and I really appreciate that. That's what I'm saying, that Go wasn't ready. I guess in the last year or so - we're just right there, right now; we're at the point where I'm like "Yeah, I could actually recommend this to you and not laugh and you turning your back."

**Mat Ryer:** Do you think that the fact that Go is open source was something that held it back? In the past I've worked in some big companies, and this may not be as true - and hopefully isn't - but definitely there used to be this attitude of open source wasn't proper software, and if you want proper software, you have to pay for it. Do you think that held Go back at all, when it came to the enterprise?

**Bryan Liles:** It did. And guess what - 50 years ago, black people had to sit at the back of the bus. Or no, it's more than that now; now I would say 60-70 years ago. Was it right then? No. Is it right now? No. This is the same thing. The reason why a lot of these things held true for so long is because someone influential said these things... And was it right? No. And actually, it's great now, because as we go into this new decade, we're seeing that there's a lot more diversity in development.

Because of David Fowler that I mentioned earlier, from Microsoft, I actually follow .NET development. And just a few years ago, ".NET - wow, is that a great idea? I don't even wanna run Windows." And now people are successfully deploying it off of Windows, and there's some really cool tech in there, made by some really good people. We need to start looking in other directions.

And also because, think about it -- are they ready to do Java 14? Look at what Java 14 is doing. They're getting to the point now where they're like "Uh-oh... The world is catching up. Maybe we need to do some great things" and some of the new language features coming in in the new version of Java are definitely -- you can definitely see that languages like Go had some impact on them. But you know, Java has had generics for forever, so I rest my case...

**Mat Ryer:** Yeah, that's definitely true, the different kind of language features, and things... I've seen Swift also has a defer statement. It doesn't quite work the same, but the trouble is they tend to add onto what they already have with these other languages. One of the nice things about Go is that it is quite a tiny little language, and there aren't too many ways of doing one thing... Which turns out to be quite important, because taking choice away means "Oh, then it's kind of obvious what you're gonna use to solve a particular problem." What are the Java features -- do you know what sort of things they're adding to it?

**Bryan Liles:** You know what, no. I didn't come prepared to talk about that.

**Mat Ryer:** Yeah... Sorry, mate.

**Bryan Liles:** But I do remember - and someone's gonna check me on this and tell me on Twitter, and I'm gonna tell you right now, I don't care... What we're thinking about is one of the biggest complaints with Java is the -xmx flag. You know, whenever you're actually saying how big this thing is going to be, and that Java needs a runtime. And I think actually as we move on in years, I think Java is gonna move past that. We're just gonna assume that the JRE is part of the linking, and "We're just gonna give you a binary that runs on your platform." I see them moving there, and I think that it's actually a pretty good idea. But years ago, I can definitely see why they had a JRE.

\[00:20:18.00\] But you know what - it's Oracle, and I don't understand how they are doing their development, but I do know that there's definitely some super-smart people over there, so hopefully they're trending toward the right direction.

**Johnny Boursiquot:** Speaking of enterprise... Oracle - you're almost at the pinnacle of what you can think of as enterprise... So with all these projects - and I'm talking about the projects that you don't have to go and pay for. I'm talking about what you were talking about earlier... For open source projects to succeed -- Go, for example, is an open source project. It still has a corporate benefactor, it still has a corporate entity behind it. From what I can see, be it Go, be it other languages with backing from corporations, it seems like those are the projects that are faring quite well nowadays, than the non-funded, the non-backed projects. Is that me, or is that something that you're noticing as well?

**Bryan Liles:** Yeah. I'm gonna tell you all a secret - it takes money to develop stuff. And you're like "No, no, no... I developed this on my weekend." Alright, that's cool... But to have a large, sustainable project, it takes lots of money. I don't know how big the Go team is, but I know that from the first time I went to GopherCon till right now it's a huge difference. And \[unintelligible 00:21:36.11\] to have all these hugely popular open source software projects, the reason why they all come from companies is because they need a lot of money.

This is also why you have groups like the Linux Foundation, CNCF under them, or to a lesser extent the Apache Foundation... Because it takes money to not only write the code - because if you think writing the code is the easy part, ha-ha-ha - but to take care of the governance, all the legal aspects... And who's gonna pay for your security review?

People don't think about that. They think about "No, this is easy. I can just write this on the weekend." And you can, to a certain level. But with a project like Go - think about all the pieces of Go. There's the build infrastructure, there is low-level language things, there's people who are getting their PhD's to think about how to make a better defer (I'm just guessing, I don't really know). Or how do we actually do generics - you can't just code that up on a whim.

And then there's all the other support things, like the module depth infrastructure that we have for Go. Someone has to take care of that. And then all the advocacy. Someone has to go out and talk about how we're using these things, and work with their internal partners at Google to make sure that they're using it in a certain way.

When projects get to a certain size, we realize that it's not easy anymore. Kubernetes itself - just go look at their repository, the kubernetes/kubernetes repository on GitHub, and then look at all the work that goes into that. You can't do that without financial backing. And then I know that at one time Google was footing the bill for Kubernetes' backend. It was not cheap. I mean, Johnny, you and I aren't gonna chuck in a couple bucks and pay for that. No, no, no...

**Break:** \[00:23:37.16\]

**Johnny Boursiquot:** Maybe I'm jaded... I've been on this Earth for a few years, so I've seen a few things... So once you accept money, that means "they" (the proverbial they) can tell you what to do. Do you think that this model, based on what we're seeing out there right now, the examples of open source projects that are backed by some sort of corporate benefactor - do you think that model is in the long-term going to retain what works best for everybody, instead of just what works for the corporate benefactor? For example, I'm sure there are some who do not like the way the Go team does certain things with the Go language, right?

**Bryan Liles:** They're all on Hacker News right now. \[laughter\]

**Johnny Boursiquot:** Yeah, there's no shortage of opinions on things like Go modules, for example... And semantic import versioning is a hot topic these days, which makes a few people not happy with that. But to them, you may seem like "Okay, well, the Go team decided to do something that works against the broader community's interests. Something that may work well at Google, but not for everybody else." But you're always gonna have these things... So is it naive of me to think that the corporate benefactor is going to always look after the best interest of the entire community, and not just for things that work well for "it"?

**Bryan Liles:** A corporate benefactor is \*never\* looking out for the community. No, no, no. Companies, CEOs have fiduciary responsibilities to make money for their shareholders... Or - you can go to jail, in the United States.

**Mat Ryer:** What if you don't make enough money?

**Bryan Liles:** Well, the board will get rid of you.

**Mat Ryer:** But you mean there's like a legal duty though to look after shareholders?

**Bryan Liles:** Yeah. Your job is to do things that make more money. This is why companies should not be considered people. They do not work on the same set of ethics. This is just how the law works in the United States. And that's fine... But think about it this way. Companies aren't looking at big open source projects where -- and this is just speculation, but Google looking at Go, Google and whoever else looking at Kubernetes... They're not doing this to be nice to the community; they're doing it because if you support this project properly, ultimately you have one of two things - you either have a better funnel of people who are coming to use things that you can charge money for, or you have better integrations with other parts of the industry. For example with Kubernetes.

\[00:27:53.21\] It's actually like with Linux. Linux was a good operating system that was free ("free", air quotes) that allowed us to build and work on all sorts of different types of hardware. Think about that. We didn't have to pay Microsoft to do these things. Kubernetes is now taking that a level up, where now I can actually install Kubernetes - and I'm going to really gloss over this, because we're not selling Kubernetes right now... But I can install Kubernetes, and with that I can run workloads that span over multiple machines. It's making it easier. The industry is looking at that as actually a boon; it helps us sell this type of thing, it helps us do these things better. And I think that's great.

Actually, last year at KubeCon I alluded to this in a talk - industry is a bunch of verticals. Think about this - your company, whatever they're doing, they're looking up and down at "How do we take from 0 to 100 to make as much money as we can?" But they realize that they're not by themselves, they're not islands, and the ecosystem is horizontal. Now, there's certain things that we need to worry about on the horizontal, whether it be our operating systems, or our platform or platforms like Kubernetes, or certain standards.

Think about this - if we didn't have an SMTP standard, how in the world do we send mail? Or even better, if we didn't have our TCP, or any of the OSI stack; how would we actually communicate? So there are certain things that we realize as companies in the industry that we need to standardize on, and then we compete around the edges, or we bring another angle to it. And you know what - I don't think that's a problem.

I think that if we try to judge companies and what they do as people - yeah, it looks like companies are jerks. But if you look at companies as doing what they're supposed to do to actually make money - yeah, I guess they're doing a good job. And here's the best part - we don't have to like any of it. That's the biggest thing that I think -- and here's a soapbox that I will stand on... Us as adults, we need to understand - and especially as a black dude, I can just tell you this - that a large part of the world sucks, and it wasn't made for me. And you know what I learned to do? I learned to maneuver within it. There's things that I cannot change without killing myself, literally. So guess what. Knowing that, now what do I do? And actually, you know what - it's crazy; all these developers out here should embrace that.

We love constraints, and we actually work better in constraints. I've actually used these constraints society has given me to do better things in certain places. What we should do in our technologies, with our languages - we should be doing the same thing. And yeah, it sucks, but guess what - that's okay. Not everything is made for you. It's made for society, and we should look at how it's benefitting society as a whole. I know there's another whole huge capitalist conversation that needs to be had here, but guess what - that's not what Go Time is for.

**Johnny Boursiquot:** \[laughs\] And we appreciate that. We do have a segment on this show called Unpopular Opinions, but I think you might have been dropping maybe a couple already, sprinkling a few...

**Mat Ryer:** Yeah, maybe we should change it to Popular Opinions for Bryan. Maybe he can give us one of those at the end.

**Johnny Boursiquot:** \[laughs\]

**Bryan Liles:** I actually had another one too, so we can do that later.

**Mat Ryer:** Okay, we'll do that.

**Johnny Boursiquot:** Good, we'll reserve it.

**Mat Ryer:** On that, about the enterprise playing nicely with communities, one of the biggest resistances I've seen in the past to people adopting open source, or contributing even to open source, is this kind of -- it's almost a blanket, default attitude that all of our software is our IP, and it's valuable, and we need to protect it. It's a kind of default position that companies take, often by people that don't necessarily understand the nuances in that. So that's part of that, I think, and I've seen this happen; it's definitely getting better.

\[00:32:01.21\] Cory on the Slack channel mentioned Rails, and Ruby. And maybe Ruby did pave the way a little bit for Go. Ruby was this open source project, Ruby on Rails of course the framework that became popular kind of at grassroots level... And it took a long time to get into enterprises. Compare that to Go. Go has kind of gone almost -- well, it hasn't taken as long as it probably took Ruby... So I feel like maybe Rails did help us there. But I think the attitude shift that I've seen is suddenly people realize not everything's gonna be that valuable to the company. Some things, like you say, Bryan, you're better off collaborating with, because then you all get the benefit of that particular problem being solved... So I think it's a great one, but that's the attitude, I think, that we need to bear in mind.

**Bryan Liles:** I have another metaphor for you. The other day I went and bought a sampler, an MPC ONE. It was not pricey. Go look it up; you're gonna be like "Bryan, you have too much money." And no... I just like having hobbies. I bought the sampler --

**Mat Ryer:** Is it an audio sampler?

**Bryan Liles:** An audio sampler. So I'm going to, in my spare time now, make hot beats. That's what I'm gonna do. You can call me Kanye Junior Junior. The less self-hating, more righteous beat maker.

**Mat Ryer:** More righteous... Wow.

**Bryan Liles:** More righteous. \[laughter\] So I bought this thing, this box. It's the size of 11x11, it has lots of buttons on it... And I went to go make a beat the other day, and realize I can't even figure out how to sample. Okay... So I go to YouTube, and I learn, and I'm watching this guy and I'm like "Holy crap. This is hard." But here's the thing - our software is this sampler. You make a software, and it's a sampler. What does it do? Well, until you can actually use it in a proper, novel way, it's not useful. I could make a song that you could hear on the radio; literally, I can make songs that you hear on the radio, off of this machine. But because I don't have the knowledge and the expertise and all the practice, I'm just over here, entertaining myself with loud noises.

And I think it's the same thing with software. We approach software like "My software is my IP." I said "Unless it's encryption codes, or things that we can't export, or something that was really novel, like pagerank when it first came out, back in the '90, most of your software is not that serious, dude..." And I did say dude; I meant that. "And to tell you the truth, it's probably not very good." That's something that we need to realize. It's how we employ our software, how we are helping our users. That is just a tool. We just happen to be using software to help our users out, because they are using computers. It works that way.

But just the ability to have source is not super-helpful. Or it's not a thing that should be a differentiator. And companies want to actually optimize for that. And the reason they do is because... It goes back to this whole thing -- I'm reading a book called "Good Strategy, Bad Strategy", and I've read a couple of strategy books... It's because we're not good at strategy. We don't understand how to actually get from here to there. We play goals "I should be stronger" and "I'm going to work out". Then we don't really follow through, and we don't have actionable plans to actually get stronger. And the same thing, companies do this all the time. Developers do this all the time. We're lazy. We're people.

And I'm not going to try to argue any company's lawyer down, because I would lose, but I think that we can see by having something like Kubernetes or something like Go, or something like what Microsoft has done with .NET - isn't it all open source now? Think about that. It doesn't matter... Because guess what - we are architecting now at a level that is so high... Who cares what letters people are using? I want novel applications of this thing.

\[00:36:08.15\] And then soon - maybe in 20 years - we might even not be thinking about software in the same way we think about software now, and this is all silly. But you know what - it keeps people entertained, and it definitely makes a lot of money, so that's why a lot of people are sticking to it. That's controversial...

**Mat Ryer:** A little bit.

**Bryan Liles:** And you know what, it's fine.

**Mat Ryer:** I like it.

**Johnny Boursiquot:** If you're a language geek -- admittedly, this is niche, right? If you're a language geek and you revel in the esoteric knowledge of how language does things, and constructs, and all these things, then yeah, maybe you're writing code, and maybe just the source alone is valuable to you. But again, very niche, and that's not gonna really be of value to anybody than yourself, right? So it's okay, it's a play, it's okay to experiment, but not everything we write as software developers is of value.

We always think that by virtue of writing code we're giving this gift to humanity. Well, not exactly... It actually has to be useful beyond you. Just writing the code - that's just the start; that's where you begin. Can it be used and produce value for others?

Every time I hear somebody say "Oh, Facebook and Twitter - that's just a stream. You just scroll down and auto-refresh. I can build that in a weekend." \[laughter\] Every time you hear that, you look at them with the side eye, like "A-ha... Sure." For some reason -- maybe it's programmer culture, coder culture; I don't know what it is... And usually from dudes. We have this sort of ego about us, about the ability to create. We call ourselves "makers" and "builders", because we think just the act of creating something makes it valuable. That's only the beginning.

**Bryan Liles:** Yeah, and that's my unpopular opinion, by the way. I'll share that when it comes time.

**Mat Ryer:** Okay. That's true also even down at the code level... I had a friend who was looking at Go, and they started to learn it and they sort of dropped it, because they were confused about arrays and slices... And I was kind of heartbroken, because actually you don't need to really know everything about how arrays and slices work in Go to be able to use them, to be useful.

This sometimes sounds a little bit anti-intellectualist or something, and it's not that. I think the more you learn, the better, of course... But there is something about that getting useful and solving real problems for people. If that's your focus - not nothing else matters, but almost nothing else matters. I feel like that's a way to give yourself a best chance of doing something that's gonna stand the test of time, or be useful, or be used, or be successful, whatever it is you're doing.

**Bryan Liles:** Yeah, definitely. You're exactly right. I think I have definitely indoctrinated you into my church of haters... \[laughter\] I was called a Kill-Joy... Now I'm a professional Joy-Stealer/Killer. And it's not that, it's just how I get through today. I realize that the world is not friendly, and our goal is to make it better for people that come behind us... And that's really all we can do. But we realize that you can't change the whole world. I tried boiling an ocean once, and guess what happened - nothing.

**Mat Ryer:** Was it a digital ocean, or analog?

**Bryan Liles:** Ha-ha... That was good.

**Mat Ryer:** No, I mean, was it a DigitalOcean? Were you making a pun or not? That's what I'm asking.

**Bryan Liles:** No, I wasn't. I mean, I definitely boiled things while I was there... \[laughter\] I am definitely not one of those seen and not heard people. You're gonna feel me if I'm here.

**Mat Ryer:** \[laughter\] Well, good.

**Break:** \[00:40:03.27\]

**Johnny Boursiquot:** I'm curious if you've witnessed situations where Go didn't take in an enterprise/organization...

**Bryan Liles:** You know, I have not seen that yet. I've seen places where Go didn't take over. At VMware I will guarantee that our ESXi - that's our hypervisor that runs your virtual machines on bare metal - is never gonna be written in Go... But I think in places where it has been applied at a higher level, where we are building APIs, and doing distributed computing, I've never seen it loose. But I've been hearing more rumbles about Rust lately, and I've been learning it... And I look at it like this - a programming language is a programming language is a programming language. And it's not what you say, it's how many people are listening.

In my professional career I've touched over 20 languages. And we're doing Go now. We might not be doing it in the future... And guess what - that's fine.

**Mat Ryer:** Yeah. This is a Go podcast though... That's like going on the Great British Baking Show and going "Yeah, an oven is an oven is an oven. Food's all food...", and you're gonna make a casserole today. \[laughter\]

**Bryan Liles:** But. The best part about this being a podcast is that the majority of people listening to this are not live, so if they have ill feelings about this, I'll just be like "I don't know what you're talking about." \[laughter\] Or even better yet, "That wasn't me."

**Mat Ryer:** Yes. Fake.

**Johnny Boursiquot:** That's a different Bryan Liles than the one who's behind things like Octant... Speaking of which - let's talk about Octant. That is arguably an enterprise project, because it's solving problems that the enterprise have.

**Bryan Liles:** No, I disagree.

**Johnny Boursiquot:** You disagree...

**Bryan Liles:** 100%.

**Johnny Boursiquot:** Yes, tell me about that.

**Mat Ryer:** It doesn't solve problems?

**Bryan Liles:** No.

**Johnny Boursiquot:** \[laughs\]

**Bryan Liles:** First of all, shout-out to Johnny. I launched Octant to the world at Johnny's meetup in Baltimore last August. He was the first person who had seen that, outside of folks at VMware. But to go back even further, we started Octant at Heptio. We were way less than 100 people at that time. Or maybe around 100 people. And it wasn't enterprise software.

The problem I have with software, or just tech in general - it's all too hard. Yeah, I can code in over 20 languages, and I have code in the Linux source -- well, probably not anymore; that's probably been dropped off. And I've done all these crazy things... But guess what - my kid hasn't. And I hate to say my mom, but I do say my mom, because she's particularly tech-adverse.

We need to realize that if we are trying to bring up technologies - and in my case Kubernetes - we can't just say "Oh, go use the command line." \[laughter\] That doesn't work.

**Mat Ryer:** But you're not saying that to your mother, right?

**Bryan Liles:** No, my mom doesn't know what Kubernetes is, nor does she care. And she shouldn't care, because it's not in her sphere.

**Mat Ryer:** I don't even care... I don't even care about it. \[laughter\]

**Bryan Liles:** \[00:43:51.14\] And you shouldn't. If it's not in your sphere, you shouldn't care. And actually, it should get to the point where it doesn't really matter. But it was like, "How do I know what's going on with my workloads in Kubernetes?" That was the first premise. Then it kind of evolved into a dashboard, and people are like "There's a dashboard." I'm like, "Well, no. It's not a dashboard. It has a dashboard in it", and now we're evolving it in a couple different directions, where for a long time I was really resistant.

So Octant runs as a Go app, and Angular, and TypeScript... But it's a Go app that runs on Windows, Mac and Linux just fine. We're moving it to two different directions. We're moving it to the cluster, running in the cluster, as a website, because I come to find out -- and here's a lesson for everyone out there... You have to build software people wanna use, and you have to meet them where they are. So we find, with our enterprise customer - and this is the enterprise feature - we wanna run it in cluster. That's cool, we'll make that happen.

But for our other users, and for our small office, home office people, or people like me, who just want a tool that can talk to different clusters, we're also moving it to an Electron app as well. And I know people hate Electron, but go look at what else is out there, and then come back to me and say that you hate Electron. Electron is the best thing, if you look at everything else out there. And go look at what VS Code has done with Vim. It is possible to make a good app. If it's not great, guess what - that's someone else's fault; it's not Electron's fault every piece of the time.

So we're moving this app, but we use Go, and the reason we use Go is first of all because the first client we could find for Kubernetes was in Go. But when you write an app that's small, write in whatever you want. But when the app gets bigger -- so Octant is super-complex. It probably has about 12-13 different domains, different things that it does... And we find that having a strongly-typed language in this case makes it easier for people to come step in. We have no weird duck typing; there's only three lines of reflect in the whole entire app, and I've figured out a way to get rid of those.

It's easy for people to be able to hook up to something like IntelliJ or Go land. And now they can actually view this thing and they can navigate through it. There's lots of benefits there. But here's the crazy part - have you ever tried writing a web app in Go? Don't do that...

**Johnny Boursiquot:** \[laughs\] It's painful.

**Bryan Liles:** Don't do that. So Go just serves a website that actually is an Angular-TypeScript app, and we do it that way. So really it's go find the best tool for your problem. If you run around with the Go hammer for everything, you're just gonna make Go-size holes everywhere, and that's not gonna work. \[laughter\]

**Mat Ryer:** That's brilliant. Now I want to buy a Go hammer. \[laughter\] But I actually remember the launch of Octant. I was following the Twitter storm when you announced it in the Baltimore meetup. I mean, I say storm... They had likes in the high ones, but that was --

**Bryan Liles:** I hear what you are saying. You say that, but I look at it like this - it's success, to me. At VMware I have a team of people working full-time on software that I made. I won.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Well, actually, what I love about it is it just solves a real problem. And the thing is that is a fundamental thing that a lot of projects miss, I think... Especially, we like to write packages; I love making packages and open-sourcing them. I really love doing that, and I used to do it all the time. And the only reason I don't do it as often now is because that process can involve a lot of imagining things, and building hypothetical software, solving hypothetical problems.

When you solve an actual real problem that you have, it's a whole different ball game, and everyone who's working on software should understand the why. Really make sure that you are solving a real problem for somebody and it hasn't just been imagined, I think.

**Bryan Liles:** \[00:48:02.27\] Yeah, that's a real thing. Now, don't get me wrong, if you go look at my GitHub right now - I think I looked at it this morning - I have 255 projects that I've created over the life of GitHub... And that's not even everything I've created, because I think I have some GitLab stuff, too. I enjoy writing software. But every once in a while, you have to write software that is usable. It either solves your problem or solves someone else's problem. You can't just go out there and be like "I'm writing software" all the time... Unless you're independently wealthy or you just don't care. But if you wanna progress in this world, you need to actually write software that helps people.

**Mat Ryer:** Yeah. I mean, that's what we all want to do really anyway. It's just easy to forget that. Or often it gets deferred, as well. It's like "Well, that's the product -- that's that team's responsibility... So I just take instructions, or something." And I just think it's never as good as when you understand the problem you're really solving yourself.

**Bryan Liles:** Well, that's another problem that we have... You know, we're all over the map on this conversation, but - that attitude "Well, that's someone else's problem." No... No, no, no. I mean, it might be someone else's job to solve it, but if it's blocking you, it's your problem, too. And today especially, people I work with that I see - and this is like no complaint; it's actually great where I work.

But I see this now, and I see it on social media, where people are like "Oh, it's not perfect for me", they throw their hands up. They throw the whole baby out. And you really can't do that. Villages are full of people, and if someone doesn't do their job, the village could fail, or we have to kill that person and find someone else.

**Mat Ryer:** Whoa, whoa...

**Johnny Boursiquot:** That's been dark... \[laughter\]

**Mat Ryer:** That's quite a strong policy...

**Bryan Liles:** It is, but we can't kill people anymore. And we don't wanna kill people at all, because that's wrong.

**Mat Ryer:** Oh, alright...

**Johnny Boursiquot:** Good, good, good.

**Bryan Liles:** So we need to realize that no one's perfect, and we have to work with everyone around us to make that world we want to be in.

**Mat Ryer:** Why did that sound so forced, Bryan? I feel like you've had a lawyer tell you before that you have to say "No, no, no. Remember, killing people is wrong."

**Johnny Boursiquot:** \[laughs\]

**Bryan Liles:** No, I mean -- if you sat down with me, I am anti a whole bunch of bad things. I don't like any of that stuff. So this is all metaphorical. The village doesn't even exist.

**Mat Ryer:** Oh, you don't actually do any murders or anything.

**Bryan Liles:** Oh, gosh, no.

**Mat Ryer:** Okay, good. That's great.

**Johnny Boursiquot:** Yeah, this would be a different podcast.

**Bryan Liles:** Yeah...

**Mat Ryer:** Or at least save it for the unpopular opinion bit.

**Johnny Boursiquot:** Speaking of which - we're at time for unpopular opinions.

**Bryan Liles:** Oh, my...

**Mat Ryer:** This episode has absolutely flown, I think...

**Johnny Boursiquot:** I know, right?

**Bryan Liles:** Yeah. Welcome to my world of Random Bryan Thoughts... \[laughter\] Now you see what my Twitter is like.

**Johnny Boursiquot:** \[laughs\] Alright, drop it like it's hot.

**Jingle:** \[00:51:03.19\]

**Bryan Liles:** Alright, my unpopular opinion. Here it comes. In my mind, the world owes you nothing. So if you go to a job and you're a beginning developer, and you say "Well, I've worked four years. I should be a senior." Nope. Nope, you should not be a senior. What the world owes you though is not blocking you from moving forward. And that's the difference.

So my unpopular opinion is that you don't deserve anything. You should have to go work, and get, and earn everything you have. And it should be fair. Whenever I see people out there saying "Well, we deserve this..." No, you don't. People hate when I say that to them. But guess what - your life is great. You know why it is? Because you can see my tweets. \[laughter\] And you're like "What does that mean?"

\[00:51:58.18\] Well, there's a whole part of this world that either can't because they're sick, can't because they can't afford to get here, or can't because they're just looking in other directions because they're so busy trying to actually get through life... And I think you're not one of those people.

This is not basically saying that there's someone worse than us, but think about this - you don't deserve anything. Everything you have, you earned it. This is how you get rid of impostor syndrome. You know how you're here right now? Because you earned it. There is no impostor syndrome. What it is - you're here because you're supposed to be here. And that's it. Don't question it.

**Johnny Boursiquot:** I can live with that.

**Bryan Liles:** Hold on one second though...

**Johnny Boursiquot:** Oh. Another one?

**Bryan Liles:** No... In the peanut gallery somebody said that's not unpopular. Alright... So one more quick one. Here's what it is. Twitter fame, work fame - it's all crap. Maybe this is not unpopular either, but here's the thing. That famous person you know is only famous because they impressed another famous person. And people who are seeking that, trying to be famous, and trying to do this - basically, you're not even measuring up to your own levels, if that's what you're seeking. What you're actually seeking is someone who probably doesn't really care about your acceptance and you really have to stop that.

So those are my unpopular opinions. And actually, here's the most unpopular opinion - and this is where we'll leave it... I hate to say this, but most likely I am smarter than you. And you might wanna debate it, and you might think "Oh, no, Bryan's wrong..." No, literally. I am probably smarter than you. So we can debate that, but you will be wrong, and I will leave it at that, definitely.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** That is a great ending... \[laughs\]

**Johnny Boursiquot:** If there's rebuttals, they can come debate you on this show.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** It's like a mic drop, right there.

**Bryan Liles:** Because I'm smarter than them. \[laughter\]

**Johnny Boursiquot:** Oh, my goodness... Awesome, awesome. Well, Bryan, this has been an educational and entertaining show. Thank you so much for coming on the show. It's been a pleasure having you. Yeah, any parting words?

**Bryan Liles:** Yes, I've got a parting word... Leave the world better than you've found it. There's always someone doing worse than you. You don't have to help everyone, but turn around and help that next person, and tell them the only way you can continue doing this is if they turn around and help that next person.

So realize that the world gets better when we all work together to make it better. And it ain't about politics, it ain't about anything else. It's about people helping people be better people. That's it.

**Mat Ryer:** I love that, that you don't have to help everybody, but just help the next person in the line. It's like some kind of kindness blockchain... Yeah, I like that one.

**Johnny Boursiquot:** \[laughs\] Awesome. Well, listeners, we hope you've enjoyed the show. Please tune in next time on the next Go Time.

**Break:** \[00:55:10.13\]

**Mat Ryer:** Okay, yeah... I was thinking, actually, earlier - do you prefer to change code when you're refactoring something, to just change it? Or do you prefer to kind of rewrite it wholesale, that piece? Does anyone have any references?

**Bryan Liles:** It depends... That's a really weird question, but it really depends. It depends on really how bad past Bryan was. I was looking at this code earlier - it was yesterday, or the day before - and I was trying to figure out how to refactor it, because I was like "We need to change this, because I need to add new features." And I was going through the call tree, and I usually just write it down; I don't even use the debug print stack trace. I just went through all the method calls to see what it was doing... And it was pretty much eight more calls than it needed to be. In that case, I am actually going to rewrite it. And just wholesale -- I actually said "No, this is done. I'm gonna rewrite the whole thing." But generally, if it's just a small piece and I'm either 1) confident I have test coverage, or 2) don't really care, I might just go in and say "You only live once."

**Mat Ryer:** Just tweak it, hack it... Test coverage does enable that, doesn't it? With quite a lot of confidence you can sort of be quite bold. But I always find if I have to change something that already exists... You're right, it depends; if the design is changing a lot, it's different... But I like to just rewrite it. It's just like "Now I know what it's meant to be. I can do it again." But I wondered if that was just a preference thing, or if others do have a different thought.

**Bryan Liles:** But I think it's a testament to 1) how well your tests are written, and 2) how well your abstraction is around what you're trying to do.

Not to sound like an old guy, but really when it comes down to it, if it's hard to change, you've messed up. And that's fine. We're developers. They wouldn't give us Backspaces and Git history if we were gonna get it right the first time.

**Mat Ryer:** Wait, there's a Backspace? I could have really use that. I've been just starting again when I make a mistake... \[laughter\] Yeah, Backspace. I like that it's called Backspace as well. It's like, it properly comes from old typewriters probably, doesn't it? Like underscore... Right? Backspace. Literally, it's just moving it back a space, I suppose.

**Bryan Liles:** Yeah, we definitely dropped a good chance to give it a much better name...

**Mat Ryer:** Yeah. And then Delete, of course... It's this strange deleting the other way. On Windows it was that, wasn't it?

**Bryan Liles:** Yeah, I don't know how it works. I have a Delete key on my keyboard... I don't think I ever use it. No, I do. I use it because my keyboard can control Spotify, and I think that's the Stop command if i use it with the Fn key, so...

**Mat Ryer:** I thought you were gonna say you could delete sounds, or something. Anything that you just don't like - gone. That'd be good, wouldn't it...?

**Johnny Boursiquot:** Alright, I'm ready if you are...

**Mat Ryer:** Yes, I believe so. This is just a pre-show. So if the pre-show is that good, then the rest of it...

**Johnny Boursiquot:** It's gonna be, you know...

**Mat Ryer:** It's gonna be great. Unless we've peaked.

**Johnny Boursiquot:** No, not yet. We haven't peaked yet.

**Mat Ryer:** Okay, good.

**Johnny Boursiquot:** We haven't jumped the shark, as they say...

**Bryan Liles:** I mean, this is my second time on Go Time, so... Yeah, maybe it has jumped the shark. If you're back to me... My gosh. There's so many interesting people out there. Yup. Maybe we're done. This is it, people.

**Johnny Boursiquot:** \[laughs\] This is the last episode we didn't know about.

**Bryan Liles:** Yeah, the last one. \[laughter\]

**Johnny Boursiquot:** Alright, let me get in character here. Let me get my voice... I should have drunk some tea before this...

**Mat Ryer:** You're not wearing your wig?

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** He normally wears a podcasting wig.

**Johnny Boursiquot:** Yeah, my podcast wig, and socks... \[laughs\]
