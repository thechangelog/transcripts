**Jerod Santo:** We are excited to do a show about OSCON, before OSCON, with Adam Jacob, talking all about your keynote that will be at OSCON. What is it, July 16th and 17th?

**Adam Jacob:** Yeah, something like that.

**Jerod Santo:** Adam, in your bio it says you like beaches more than mountains, you're allergic to plants...

**Adam Jacob:** I am.

**Jerod Santo:** And you get nervous every time you speak in public. Now, I was thinking about this - OSCON in Portland, and you might see Mount Hood on the way in.

**Adam Jacob:** For sure.

**Jerod Santo:** There's lots of plants there, I'm not gonna lie.

**Adam Jacob:** Yeah, I know. I grew up there.

**Jerod Santo:** And you're also gonna public-speak, so... Are you looking forward to this, or...?

**Adam Jacob:** It's funny... Like -- yes, of course I am. And also, no. Through my time at Chef, so much of that work that I did -- we started as consultants, and then it actually grew into Chef, and the way we found all of our customers was through public speaking. I would go and speak at whoever would have me, really, and then you would try to generate leads by talking about how to do infrastructure automation, or whatever... And that was great, and I'm so thankful for it. And also, I did it a lot, for a decade...

So there is a part of me that -- most recently what I've been doing is hanging out with my kid, and playing with my cats, and not getting on airplanes... So OSCON is one of those moments for me where I'm gonna get on an airplane, which I don't really wanna do, but I'm gonna do, because I wanna go to OSCON... And then I'm gonna speak in public, which I do wanna do, because I'm excited to do it, and I'm excited about the message I wanna share... But also, I could stay home and play video games, and that would be okay, too. So I'm in a funny middle ground.

With public speaking and being nervous, I think if you're not nervous, then you're not putting enough attention into how important it is to be good. Because people come, and they're gonna spend their time and their attention and their money, and if the speaker just winged it... I don't wanna show up and be like "Well, I slammed my talk together yesterday, and I've never practiced... But you know, it's cool." That's what you do when you're not nervous.

**Jerod Santo:** Right.

**Adam Jacob:** I don't think I ever wanna get to the point where I'm not nervous.

**Jerod Santo:** Absolutely. Let's hone in on this "allergic to plants." This is like a Bubble Boy situation, or how bad is it? What plants are you allergic to?

**Adam Jacob:** I mean, it's pretty bad... Modern medicine makes a big difference. Being able to wake up in the morning and just take allergy meds every day kind of cuts that down... But yeah, when I was a kid -- you know, your dad is always like "Mow the lawn. Why do you have sons, if it's not to make them do yardwork for you...?" And I would just puff up. My eyes would just turn red... And I mowed the lawn twice before my dad was like "Alright, fine. You're maybe not the lawn-mowing son."

And I didn't know that I wasn't a big fan of that sort of thing until I had a daughter, and then I realized that I was just avoiding those things, but I had never really thought about it. If you'd asked me "Do you like camping? Do you wanna go out?", I would be like "Sure, yes. Of course." Because I have fond memories of camping. It's not like I never camped. And also... No. I don't wanna be dirty at all.

**Jerod Santo:** \[04:42\] \[laughs\] Also... No.

**Adam Jacob:** Also I don't wanna do any of those things. Yeah, so I'm allergic to most things that are green. It's just sort of how it goes.

**Jerod Santo:** Well, you are not allergic to OSCON itself, you're excited to be there, and we're excited to always work with O'Reilly on promoting the conference, on attending the conference... Adam and I will be there, so check us out. We'll have a booth with a big Changelog -- what's is called, a banner? I don't know.

**Adam Stacoviak:** Sure.

**Jerod Santo:** Eight by ten.

**Adam Jacob:** Yeah, man. You print a banner.

**Jerod Santo:** That's right. We'll print a banner, we're gonna do all the things. And one of the things that we do is we like to bring on a keynoter or two before the conference goes. Now, I was looking at the different keynotes for this year and I couldn't help but stop and think "Oh, this is perfect for us!" when I saw "The war for the soul of open source."

**Adam Jacob:** Yes...

**Jerod Santo:** That's a cool title.

**Adam Jacob:** Thanks! Yeah, I kind of stole it from \[unintelligible 00:05:26.27\] who wrote this article that I don't love... I like him as a human being, I'm sure he's a fine person, but he wrote this article about how open source is failing because it's not allowing MongoDB and friends to appropriately monetize in the face of Amazon.com. And I think he called maybe the war, the crusade, or something similar. It's sort of been in the air lately, where there's been quite a bit of a resurgence of source-available licenses, and conversations about what sustainable open source means, and then also what sustainable business models are... And it turned out I had a lot of opinions about that. I have some experience with that from Chef and from building that business, and from thinking about how to build those open source communities...

I've spent maybe the last nine months where I felt like I've been having a bit of an existential crisis about my relationship to open source, and my feelings about it, and my feelings about business and how those things work, and it all sort of has come to a head here in the last couple of month's worth of thinking and talking with other people about what open source is, and what it means to me, and how it's working and how it's not.

**Jerod Santo:** We'll dive into all those things. I would personally love to hear a little bit about your story with Chef, because I think that undoubtedly informs your perspective on these things. Can you tell us about Chef? A little bit of the back-story and where it stands today.

**Adam Jacob:** Yeah, for sure. About 13 years ago I ran a consulting company that did automated infrastructure; I am a systems administrator in real life, that's my actual thing... And I had spent a lot of time doing automation, and building automation for a string of different companies. Eventually we started a consulting firm, me and some friends. We went out and our consulting firm was doing great; we were building a lot of automated infrastructure for people, but we were struggling to maintain it after we built it. So that led us to build Chef. We wanted a better way to manage bigger infrastructures, spread across more people.

We hooked up with a guy named Jesse Robbins. Jesse of Velocity, fame and former Amazon.com master of disaster. It was Jesse who was like "Hey, this should be a company. We should actually take this thing and build a new product, raise a bunch of capital, and go for it." So we did, and it really super-worked. We built this product called Chef that did configuration management. You describe how you want a service to work when you run it; it sees if they work the way you described, and if it doesn't, it figures out how to fix them.

\[08:12\] Our original business model was that we were gonna open-source Chef itself, and then we were gonna run all of the server-side infrastructure as a SaaS. This was right at the peak of SaaS hype; this was when SaaS was taking over the world, and that was the business model everybody was gonna choose. It turned out that was not the best business model for enterprise software; they weren't quite ready to let their configuration information go out to a random person's SaaS. But the open source part of what we did - we open-sourced it under the Apache license, on purpose, knowing that we were sort of opening ourselves up to competition, but that it would garner the biggest possible spread of adoption for Chef... And that's super-worked.

We had companies like Engine Yard, BrightScale... There's a pretty long list of those early cloud providers and the early people who built on top of those cloud providers, all of whom built stuff on top of Chef because of how the license was constructed and because of the way that we built that community, in a pretty open and collaborative way.

As we grew, that changed into selling on-prem software. We went from being "It's all open source and you run it as a SaaS" to "It's mostly open source, but we sell proprietary software, too", so we became open core. And we were always what I would call a pretty loose open core, versus tight open core. The difference there would be tight open core is like there's core features that exist in the product that you don't get unless you pay me money.

If you wanna back-up the database - that would be tight open core. Things that everybody needs. Loose open core means you build stuff around the core software, and then I monetize that. So if you wanted to buy a web UI, or you wanted rule-based access control in the server... Some of those things maybe you do. But it was disconnected from the core value prop; you could still just use the core of the software to do whatever you wanted, without having to do a lot of work.

We stuck with that model. We still had a SaaS, we still sold on-prem software, but sort of going back and forth through that and managing both the community, managing our business, what features are in, which features are out, why do people buy... And then most recently we took a long look at our business and why people were buying the software, and it felt like we were sort of on this treadmill of constantly putting features either into the commercial product or out, but ultimately people were buying the product because the product worked. The product itself, Chef, and the thing it did for them - that's why they bought it.

After a lot of soul-searching and looking at the business model, we decided that what we were gonna do is open-source everything. Rather than have any proprietary software at all, we were gonna follow essentially Redhat's model, where we were gonna open-source all of the software, and what we do is build a distribution called Chef. And if you want that distribution called Chef, you have to buy it from me. And what you're paying for is both the means of that production, my support, you're paying for the marketing, you're paying for all of those things that surround it. But anybody is free to take that software and build a distribution of it, and to distribute it under whatever terms they want to. They just can't call it Chef.

That's the most recent evolution of Chef's open source business model, and that's been working great. They're having the best quarters they've ever had, we have customers who weren't paying us, who are now paying us, because of that change... So it's been working pretty well.

From a community point of view it's also been working well. Before this change no one knew how to build a release of Chef, but Chef. If you didn't work at Chef, this wasn't a thing you could do. Now there's a relatively robust community of people who are building new releases of CINC, which is the community distribution of Chef. They're hosting it at the OSU Open Source Lab. There's a much richer ecosystem for the software than existed before we've made that choice. So that sort of brings you up to date, I think.

**Jerod Santo:** \[12:11\] That change is relatively recent, correct? Within this calendar year...

**Adam Jacob:** Yeah, for sure. January, basically. Maybe even later. Maybe more like April.

**Adam Stacoviak:** Based on your tweet it's April.

**Adam Jacob:** Yeah, April.

**Jerod Santo:** So do we feel like it's been long enough, or do you feel like it's been long enough -- I don't have a take, that's why I'm asking... Do you feel like it's been long enough to know if this is working? Sometimes the initial shockwave of a change will have positive feedback, but then over time not so much. Has there been any signs of that?

**Adam Jacob:** Yeah... It's too soon to know for sure. It's always too soon to know for sure. When you think about the enterprise sales cycle, typically you're looking at like a six-month window from initial conversation to "I closed a deal." It would be pretty common. So you're probably still a little too close to really know for sure. But the early reads are in, and they're good.

I think the feedback - not on the business side, but on the community side - has been mostly positive. One of my experiences is that you sort of never can please everybody. I don't know if you know what a utility monster is, but essentially - in utilitarian philosophy, the idea is that we make good life choices because we put more aggregate happiness into the Universe. So for whatever your metric of happiness is, if you're putting more happiness into the Universe, then we're making good decisions, versus bad decisions... In the smallest philosophical nutshell.

And the utility monster is someone who when you feed them whatever the happiness is, they get more happiness out of receiving it than anyone else. A great example there would be the Cookie Monster. The Cookie Monster loves cookies; so when you feed the Cookie Monster a cookie, he's like "Hum-hum-hum-hum! That was the best cookie I've ever had! I looove cookies! Cookies, cookies, cookies!", right? So that means that we should definitely give all the cookies to the Cookie Monster, because his happiness for the cookie is so much higher than ours. So the Cookie Monster just gets all of the goodness in the world.

I think when you're running a big open source project, you're kind of surrounded by Cookie Monsters. Everybody has a point of view about what the most important piece of it is, and it's whatever they need; it's the business, it's that patch that I wanted filed, it's my ability to influence the direction of the project... Whatever it is that their utility is, whatever their most important thing is, that's their point of view... And they kind of assume that everybody else shares that point of view. And if they don't, there's kind of a No true Scotsman moment, where they're like "Well, then you're the one who's not really living up to the true ideals of open source."

I think the community feedback has largely been that it's great that everything's open source, where it will be great if it brings more contributors into the system. "We're a little irritated that you're no longer producing distributions that we can just use the way we used to...", because you know, I used to drop the cookies off at your house; now, if you don't wanna pay me for the cookies at least a little bit, for some number of people, then you can't use the software anymore. And that's irritating, if you were in that camp. Now there's a cost.

There's also -- I hesitate to classify it this way, but I'm gonna anyway, because I get to say what I want... But there's the cynical crowd as well, who are like "This means that you're not really open source", which to me is just the most insane conversation I've ever heard. But there is a tangent of that community that looks at that decision and goes "Well, this is just you stealing all of the goods", even though it's all in the open, and it's free, and we're supporting creating those community distributions and doing all that work... They kind of don't care about all of that, because what they want is us to keep producing -- they would like all the software to be open, and to be able to get it for free, and to not have to worry about paying for it... Which sounds great, but it just means there's no more business to support it.

So that's sort of what I think the full gamut of feedback has been. Oddly enough, a lot of the folks who are maximally cynical used to work for Chef.

**Jerod Santo:** \[16:22\] Did they leave because of this, or did they leave for other reasons?

**Adam Jacob:** No, usually they were gone maybe for years, in some cases many years... But it's a little bit because - I suspect, I don't know - when you work someplace and then leave (which happens all the time, and it's a normal part of life), you have so much of a point of view about the people who were there and why they make the decisions that they make... So they can sort of read into those decisions their own story, in a way that random people don't do. If you've never met me, you don't really read into my motivations, because you don't know who I am, and you've never seen my motivations, and it's fine.

So the people who I think have been most cynical are the people who have the most ability to try to intuit someone's motivations at a distance and have their own personal story. For the most part that has died down, because it gets exhausting; at some point you're like "Fine. It is what it is."

**Jerod Santo:** So when they say it's not really open source now, what do they mean by that? Because didn't you go from open core to now 100% open source, Apache-licensed?

**Adam Jacob:** Yeah.

**Jerod Santo:** What do they mean?

**Adam Jacob:** What they meant is that we're no longer producing a free distribution of the source code. What most people think of when they think of open source is two components - they think of the software itself, the actual code, but they also think about a distribution that I can just go grab and do what I want with, without any friction. And we've explicitly stopped creating an open source distribution of the same. In the same way that Redhat -- you can't just grab Redhat and do what you want. If you wanna run Redhat Enterprise Linux, you're gonna pay Redhat. You can have a free trial, but that distribution comes from them and you pay them for it. You could run Fedora, you could run CentOS, you've got a lot of options; but what you don't get to do is run Redhat Enterprise Linux. If you wanna do that, you're gonna have to pay Redhat some money. Same story.

So when they say it's not really open source, what they mean is "Well, I used to get a free distribution; I used to go to your website and click a button, or I could run a command, I could do what I wanted, and I could call it Chef. I can't do that anymore, therefore you've moved the cheese, you've flipped the social contract around on me."

**Adam Stacoviak:** What's involved in the distribution, in most cases? And what is the secret sauce in most distributions, say Redhat or even Chef, for example?

**Adam Jacob:** Yeah, so it turns out that there's a ton in the distribution. You've gotta think about change control, so how do I do admissions control on the source code itself; you have "What's the CI and CD process? How do we actually test that thing?" Software like Chef is running on a bunch of esoteric platforms in addition to the ones everybody would expect. Windows, and Linux, and Mac, but also HP-UX, and AIX, and Solaris... And it's running on multiple hardware architectures. So there's quite a bit of that stuff that goes into building those distributions. Then there's actually packaging them up, hosting them over time, security releases and vulnerabilities - all of that stuff is the distribution sauce.

So it's one thing to just take the software and type 'make' and get a bundle. That's great, you can install it, you can even share it, but what's the chain of custody on that thing that you're downloading? If I'm gonna use that thing to run every point of sale terminal in America, do I wanna just get it from a dude on the internet, or a lady? Probably not. I probably wanna see more \[unintelligible 00:19:49.12\] of its provenance.

**Jerod Santo:** So is there a CentOS equivalent in Chef land? Is there a community-driven distribution?

**Adam Jacob:** Yeah, there will be. They're working toward that release right now. It's called CINC. "CINC is not Chef" would be the recursive acronym that they have chosen.

**Jerod Santo:** So SINC...

**Adam Jacob:** \[20:17\] CINC, yeah. CINC is Not Chef. It has a couple of great properties, one of which is that it's four characters long, which means that as we go through the codebase and make it possible to change the name of the program, we don't have to reformat everything.

**Jerod Santo:** That is nice. \[laughter\]

**Adam Jacob:** So you know, there's work to do...

**Jerod Santo:** That's a fringe benefit right there.

**Adam Jacob:** It's good to keep the same number of characters. That's a nice piece of advice for anybody that goes down the multiple distribution road.

**Adam Stacoviak:** I bet. What's the motivation then? So if you were open core, to now 100% open source. What was happening within the business and then within the community that was pushing you all to make this choice and go this route?

**Adam Jacob:** There's a couple. For me personally, I realized that the things I disliked -- well, I'll back up. Let's tell the whole story of how I got started on that journey... And then the business side comes in a little later. So I had decided to leave Chef, but it's on good terms; I'm on the board, and everything's happy. I was there for more than a decade. But I was just done, because... I've gone to a customer meeting, it was a delightful meeting, and the person who was sitting to my right basically made all the technical decisions for this massive Fortune 100 company. And we described how he could solve his problem, and he high-fived me.

He was just like "What's up!? I'm in!" And all I wanted to do was go home. I didn't get a single squirt of dopamine in my brain that was like "Good job!" I was just like "Oh. Great." And I was like "Oh, I have to stop. I have to quit now, because I don't wanna be like a caricature of myself." Do you know what I mean? I know I could keep going, I could show up tomorrow and do this again... And I wasn't wrong, and it was gonna work, but it's wasn't healthy; it wasn't where I wanted to be. I don't want people to remember me as that guy; I want them to remember as that person who is stoked when that happens, and was a part of that journey for them... So I decided to leave.

When you make those sorts of monumental life decisions, you sort of talk to your own small council. You go to the people that know you well, and care about you, and know your context, and you talk about your decisions. So I was doing that with a previous investor of ours, Sunil Dhaliwal, who asked me "Hey, would you start another open source company?" And without hesitation, I just said no. And it wasn't like a weak no. And as soon as it came out of my mouth, I was like "Is that true? Do I mean that? Because that's intense." A lot of my life has been dedicated to open source, and it's done so much for me; I learned to program in the Perl community... So much of my identity and my life is tied up with open source... And it just came out, instantaneously and \[unintelligible 00:23:03.08\]

I was ramping down what I was doing at Chef, because -- I don't know if you've ever exited a company that you've built over a long period of time, but people just assume that you're really busy all the time, doing very important things, and if you're ramping your way out, you're doing the opposite; you're rapidly unloading things, to make sure that people don't miss you when you're gone. Because if it's gonna go badly, you wanna still be there to help them out.

So I've found myself with time, in-between when I had to do things, where this existential dread just kept washing over me, of like "Ugh, is that really real? Is that really what I think?" So I started looking into myself and trying to decide why I said what I said... And it turned out that it was because being the sole arbiter of everyone's hopes and dreams as they related to Chef - I was sort of the benevolent dictator, so from a technical point of view, whatever I said goes. And very rarely did I have to use that power, but sometimes I did.

\[24:10\] And then from a corporate point of view I was the CTO, so my job was to definitely balance the business' needs and the software's needs... And then there's this community of people who love Chef, and use Chef, and contribute to Chef, and I had to balance all of their hopes and dreams... And it felt a little like I was surrounded by the Cookie Monsters that I talked about earlier. I would pay attention to one, and then they'd be like "Oh, you're giving too many cookies to that person. I want more cookies." It was just this constant circle. And doing that in business is hard enough. Just the normal stakeholders and the day-to-day business is hard. Doing it with this massively broad community of people who have this huge number of stakes is even harder... And what I realized was that I don't want to be a part of a community where my job is to manage all of their hopes and dreams, and to be the person who decides whose needs are met. Do you know what I mean? I don't wanna be the person who decides if you can have what you want from this thing that you care about.

And when I reflected on the communities that I had been a part of in open source that I loved the best, it was because there was no arbiter for that. When I loved the Perl community, it was because Perl enabled me to do the things that I needed to do. It made my life; my entire life is built on the fact that I was a part of the Perl community, in a very direct way... And if I was gonna be a part of an open source community or build one myself, that I was never gonna set it up with those incentives ever again. And the only way that I could find to get out of that trap was to say that the project itself needs to be sustainable by the people who love it. If it has a single overlord, if it has Chef at the head of it, well that means that it's my job to sustain it, and I'm giving you a gift.

I'm giving you the gift of my money, of my time, of my sustaining. But if you challenge my point of view... If you, Jerod, want to make a business on top of Chef and it conflicts with my business - well, now you're not in my community anymore. We're at odds, and I have to try to manage that by deciding "Do I let you exist? Do I fight you? What do I do?" And my answer to that was "I wanna let you do your thing. I wanna welcome you into this community, and I want you to do what you want to do with it, and we have to find a way to do that together as people. Because otherwise I, Adam Jacob - I'm just not interested in doing it, because it sucks; it's a terrible job, and it's not rewarding for the people who are part of it, because at any moment you know that someone could just take from you the thing that you value and love... And I just didn't like that setup. I don't like it now, I still don't.

At the same time, Chef was going through its own business hurdles. Docker has happened... All kinds of things. We built a new product called Habitat - it's incredibly dope - and we'd done a bunch of really good work, but we were at a moment where we could make those decisions, where we could decide to change our model. And the hardest thing at Chef had always been if you're a sales rep at Chef, if the feature that a particular customer wants is proprietary, then you're stoked, because you can use that as leverage. If they don't, then you spend a lot of time trying to convince them that the features that they do want aren't the most important features. \[laughs\]

So you have this constant debate, like "What's in the bag? What's not in the bag?" And the truth is, all of it is in the bag; it's the same piece of software. That's the value - the software itself, but also our ability to produce it is the value. You trust me that I can build this thing for you, that you can use it, that I can support you in the thing... That's the value of the product.

\[27:55\] And in business, what you need is a way to create scarcity. I need a way to say "You can't have what you want unless you give me money." That's how I take money, it's not rocket science. So we started looking for a way to resolve that fundamental friction... Which is also a community friction, because if I'm a community member who wants that feature and it's only in the proprietary part, can I send a pull request that adds that feature to the open source part? Would you accept it? Should you accept it? And to me, the answer has to be yes. Of course it should be yes. But man, that's a tough sell if you're a sales rep who is feeding your kids on that feature.

So it was just this perfect storm of my own existential dread... Barry Crist, CEO of Chef, who is an incredibly smart, and one of the most trustworthy and honest people I've ever known... He's so honest that people tend to read into his behavior, because they can't imagine that he's just telling you the truth all the time... You know what I mean? I don't know if you've ever met anybody like that, but he's like that; he'll tell you exactly what he's thinking, and you'll be like "Oh man, was that calculated?" And it's not calculated; it's just exactly what he was thinking in that minute.

And you put all of that together -- Corey Scobie, who's the SVP of Product and Engineering at Chef, and took over for me, who also had started seeing these dynamics... It was just sort of this perfect storm of all of that coming together all at once to make that choice... And I'm proud of that decision.

**Break:** \[29:25\]

**Adam Stacoviak:** So Adam - we share the same name, of course; it's weird saying "Hey, Adam..."

**Adam Jacob:** It's a good name.

**Adam Stacoviak:** It's like I'm talking to myself. But let's go deeper into the business layers of that. So that's a lot of community, a lot of personal, Adam-related stuff... Dive deeper into the business side of things that was happening. Obviously, you mentioned sales reps livelihood depending upon this balance between "give it to them or not", with what's in the bag or not in the bag... Go a little further into the business challenges. Because you said earlier that things are thriving now. We see Elastic and others out there thriving as well, and they have been in similar situations.

**Adam Jacob:** Yeah. I think in order to really go deeper into the business side, I wanna just set some ground rules for how we think about business. So how I think about it, and how I think a lot of people in the modern era of software startups think about it is, in the smallest nutshell, you can imagine that you have this funnel. And at the top of the funnel is everybody who might/could ever use your product; every possible person who would ever care, so that's your target market. The bottom of the funnel is customers; people who pay you money for the privilege. And what you're trying to do is get people from the top of the funnel to the bottom of the funnel, right? It's just "How many people at the top can I push to the bottom?" and there's a ratio there, where you want that number to be as high as possible. You'd love to get 100% of them; you know that you won't. So you're trying to just extract dollar bills from the top, to the bottom.

\[32:08\] There's a bunch more we could go into in terms of metrics, and recurring revenue, and all kinds of stuff, but the TL;DR there is "People at the top, money at the bottom." So with open source - we talk about it as an open source business model, but that's wrong, in the same way that DevOps isn't a job title. DevOps isn't a job title, it still isn't a job title, and it never was a job title, but we lost the war. There's plenty of DevOps in the world, so the idea that that's not a thing - it doesn't matter that I'm a pedant about it. The same thing is true in open source business models; there is no open source business model. There are business models, and then there is open source. They're two very different, very separate things.

There is nothing unique about open source and business. Business is business; you get people from the top of the funnel to the bottom of the funnel. You either do that with unit economics that make you money or don't make you money. If they make you money, then you can pour more dollar bills into the acquisition of people at the top of the funnel to get to the bottom, even if that means you don't turn a net profit, and still be a great business, because as soon as you stop burning money to acquire more stuff at the top, but you make a lot of money at the bottom.

So in open source - we talk about open source business models, but what we really are talking about is "How do I create a channel at the top of the funnel? People come in in multiple different ways, and we talk about those as channels. One channel will be "I'm an open source user of your software. I download MongoDB. I download Redis. I used it, and therefore I'm in the open source channel to the bottom of the funnel."

Another channel would be my boss, the CIO, heard about Redis in CIO Magazine. He tells me "You should use Redis." Now I'm in a very different channel than the open source channel. Or I get a cold email from a rep that says "Have you heard about Redis Labs?" That's a different channel. So we have all these different channels.

There's a partner channel, where maybe the guy at Pivotal, who was consulting on your Cloud Foundry deployment, tells you that you should use Redis. That's a partner channel. So we have all these different channels that people come into our businesses through. This is true of every business, it's not unique to open source. But that open source channel is interesting, because it's humongous.

If you're a successful open source project, that channel is full of people, because there's lots of people that are using the software, and that's why it's a successful open source software. So it kind of dwarfs the others in pure numbers. The sheer magnitude of what's possible is really high.

So when we're designing and thinking about our businesses, what tends to happen is we think about the revenue that that channel produces as belonging to us. If I'm with Chef people, I look at that channel and I go "Any Chef user belongs to me." And if there's competition in that channel, I don't like it, because it means somebody else can compete with me to monetize the people that are at the top of the funnel.

A good example here is if I'm MongoDB and I sell Atlas, which is their hosted SaaS product for MongoDB, and Amazon and Microsoft are both gonna offer MongoDB as a service, that competes with me to monetize the bottom of the MongoDB funnel. I, MongoDB, make this investment at the top of the channel, I expect a return at the bottom, and now they're competing with me at the bottom.

\[35:45\] This comes back to "How do you feel about that competition?" is the question... Because in one point of view you're like "Well, competition sucks. I'm the one who put all the money into building it, I'm the one who did all this stuff", so you look at this thing and you're like "I deserve the money at the bottom of this channel." Well, flip that over though. The value of the channel is that it's massively huge; its adoption, the size of the number of users is why the open source channel is valuable in the first place.

If Amazon or Microsoft create services that sell what I sell, what's the impact at the top of the channel? What does that do to cement MongoDB as an excellent choice for users at the top of the channel? The answer is it jacks it up. Amazon has a Chef service; they sell it for money and they do revenue share. So they sell what used to be my proprietary software, but now my distribution. You can buy it from Amazon as a service, directly from Amazon; we do rev sharing together. Amazon runs and maintains that service. I promise you that my open source channel got bigger when they did that. The fact that that button exists meant more people were willing to use Chef than they were before. The pie got bigger.

So what's happening when the Redises and the Mongos of the world look at that problem is they decide that the top of the funnel doesn't get bigger or that they don't care about it getting bigger, and instead they care about the extraction at the bottom of the funnel. So they're nervous about it; they're like "Oh, Amazon will outcompete me. They'll sell it for less. They'll bring better features." But this in my point of view is completely bonkers. Amazon's never going to invest more in MongoDB than MongoDB. It's insane on its face. And the idea that that competition exists and it limits their ability to monetize also to me feels false.

A good example is Elastic. Amazon has had an Elastic service running for as long as long as Elastic has been monetizable, basically... And Elastic went public, that whole time, with Amazon as a competitor. But you know what - I've run Elasticsearch. I use it as a component in my products. One of the reasons is that it was a dominant standard. How did I know? Well, everybody offered Elastic as a service. It was a de facto thing, so that choice was easy, so I wound up in their channel.

So from a business point of view they're making these decisions because they believe that that's what's best for the extraction of capital/revenue at the bottom of the channel, and they're doing it at the expense of the spread at the top of the channel.

I think there's other situations... I'll use Confluent as an example.

**Jerod Santo:** Adam, can I hop in real quick before you move on to Confluent?

**Adam Jacob:** Yeah, sure.

**Jerod Santo:** I have a couple of questions and a follow-up on these specific things. So in your case, you've got a rev share with Amazon. Is that the case with Mongo or with Redis, or was that unique to Chef? And would that change your outlook at all if that rev share was gone?

**Adam Jacob:** It's not the same. I don't know -- I am certainly not privy to whatever negotiations they may have had. I know the ones I've had. One of the things that Amazon - or any partner, anybody who's gonna run your code as a service - needs is the assurance that they'll always be able to provide that service for their customers. And you know what's hard to do that with? Proprietary software. Because my only hedge is the business arrangement. Do you see what I mean? I can sign a contract that says so, but if I change the terms on my proprietary software, or I build a new SKU, well, can I still run that thing as a service if we bifurcated it? What's the deal? The mechanism there is really complicated, so one of the reasons that that rev share exists is because so much of those assurances about what's in the open was in the open, right? Even more so now. That doesn't mean that that's always what Amazon will do, or even what they should, but that's how it worked for us.

\[39:53\] If it didn't exist, it wouldn't really change my point of view... Because if the question is "Can I as the primary producer of the product, and owner of the brand, and the reason that people attach to those things, outcompete someone who is essentially selling a generic version of what I sell - if I can't outcompete that person, shame on me." You really can't convince a customer that the best person to service their MongoDB is MongoDB? Because if you can't, there's something fundamentally broken in the value proposition here... And I think the truth is that they can. If you look at Mongo's performance, if you look at Atlas' sales numbers, it continues to go up. It was going up before they changed the license, and the reason is it's a good product, and it's a better product that the one that you receive if you just turn on DocumentDB on Azure... Because it's kind of barebones when you turn it on in Azure. And the Atlas version has all kinds of stuff that the other one doesn't have.

So the idea that that competition in open source, where the reason you're here is because you have this massive channel - it doesn't make much business sense to me, but that's the conclusion we would come to. I understand how you get there, but it doesn't make much sense.

**Jerod Santo:** Aren't disruptive products though not necessarily better? They're usually actually worse, but they're good enough, and the cost is disruptive. So in the case of an AWS version of Mongo - yeah, it's not gonna be as good, or maybe as well supported, or have as many features as Mongo's version of Mongo, but it's satisfactory and it's way cheaper; so it's disruptively cheap, and then you add to the fact that there's no R&D, there's no development costs from Amazon's side, so you're not competing with them on features. They're just freeriding all the features that you're building.

**Adam Jacob:** Well, but here's the thing. This is where we come back to the funnel. Now we're back to the business. Sure, this is why it's good business for Amazon to launch your stuff as a service, instead of just compete with you directly. So you brilliantly elucidated why they would want to launch a Mongo service in the first place.

**Adam Stacoviak:** Brilliant! Good job, Jerod.

**Adam Jacob:** Yeah, that's good. But as soon as they do that, if the top of the funnel was fixed, if that created no more interest in your product than it did before, then you'd be right. But it doesn't. Instead, it turns out that the single largest pool of software developers on the planet are the ones that use Amazon and AWS, or Azure, or Google. How many of those developers are using one of those platforms? And if your stuff is on all three of those platforms and it's not on the others, how many eyeballs do you get that Cockroach doesn't? And the answer is a TON of eyeballs! So many eyeballs!

So the size of that funnel, your possible monetization gets bigger, hugely bigger than it was before. And in that moment, your ability to capture that revenue - every single one of those cut-rate DocumentDB users is a potential lead that's already using your product. So all you have to do is go find them and be like "Yo, did you see how much better our console is, how much better our operations stuff is? How you can get on a Zoom with the dude that wrote that indexing feature when it's broken? I dare you to get that out of Amazon." And the next thing you know Citibank is like "You know, Atlas looks pretty good", you know?

**Adam Stacoviak:** What you're describing though, Adam, is a very well-known business tactic, which is turn your liability into your asset, into your advantage.

**Adam Jacob:** Yes!

**Adam Stacoviak:** So "use liabilities to your advantage" is know by many, let's say.

**Adam Jacob:** Yeah, it's not news.

**Adam Stacoviak:** Right. Well, that's good though. I think those kinds of ideas though sometimes seem so logical, but yet not everybody thinks like that.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** So I think it's a great idea of how can you leverage the fact that these platforms are so massive that they actually become your marketing channel for you.

**Adam Jacob:** They are your marketing channel, and the only thing you have to give up is that they're also gonna monetize some number of your customers.

**Adam Stacoviak:** \[43:56\] Yeah. And especially if you can negotiate a rev share like you mentioned before, if you are that good, or can provide that amount of value to them and get that, then it's just a little more of the layer for you.

**Adam Jacob:** Yeah, it turns out that that's a lot easier to do when the service provider can guarantee that they can always provide the service, because the entire kit is open source. I'm just saying.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So on a tactical sense, do you gain access to that? Do you know who those users are necessarily, to go chase them down and get their sales, or is it a black box?

**Adam Jacob:** It's a little more black-boxy than that. There's some two-way deal flows, so you can register a deal being one or the other... It would be pretty weak sauce if I could just go steal all those customers. That would be lame, if they just gave me the list and I could just go to them and be like "Don't buy this through Amazon anymore." That's not a good business partnership, so no - there has to be a degree of... Just like I'm not transparent with Amazon about every customer I have, because that would be weird.

**Jerod Santo:** Sure. So you were gonna move on to other -- you mentioned Confluent before I cut you off... Before he moves on, Stac, do you have any questions on this particular area?

**Adam Stacoviak:** No, I'm tracking.

**Jerod Santo:** Okay. Move on.

**Adam Jacob:** Yeah, so I think when you look at -- it's not a one-size-fits-all solution. MongoDB, Chef, Redis - we all share a thing, which is that we own the upstream brand. So when I told you about the CINC community distribution, you asked "What is the community distribution of Chef?" That's a very important question, because it means that the brand, the thing that you recognize is Chef. Chef brand Chef. Confluent is in a different position, because it turns out that the upstream is Kafka. So there's this Kafka brand Kafka; that's where a huge bucket of your value is, that's built on this free software island, the Apache Foundation.

And then Confluent is downstream of Kafka, creating a commercial product that you can consume. That almost certainly leads you to needing to build something that's proprietary, or at least distinct from Kafka. Because if you don't differentiate yourself one or the other, then that brand leverage that drives the top of your channel starts to falter... Because you might be driving eyeballs to Kafka, not to Confluent. Do you see what I mean?

So it's not that every situation is the same. They're different. But if a company owns the brand, if that brand recognition is theirs, and if that software is connected, then I think the dynamics I have described are basically true. If you don't, then I think you have a different challenge, which is you have to create enough brand recognition about your own software and your own brand to be able to drive that dynamic. So they're in a little bit of a different bucket.

Stepping back into Mongo for a second - they're a good example of an organization that I don't think actually trusts their own product, and I don't think they trust their own users. I think if they did, they would make different choices about what's possible, and about what got them to the place that they are. In their heart of hearts - and this isn't me projecting; I've said this in public - open source was a freemium business strategy. They did it to drive that channel, so that you would buy the product. That was the only reason it was open source. It was never because it was a community resource that we were gonna steward together. It was never because they wanted Jerod to be able to build a business on top of MongoDB to help build the pie for MongoDB. They never wanted that; they wanted all of the pie, the whole time.

So it's not surprising that they're like "I'm very mad that AWS is taking a slice of my pie", because for them, from the day it began, it was always their pie. It was never our pie. There was marketing that said it was our pie. Do you know what I mean? It's good to be a community in the marketing sense, but not in the real sense; not in the foundational, "do we share values, where we work together to create a space where we all benefit." It wasn't a community like that. It was a community where you benefit by using MongoDB, and MongoDB benefits by you paying the money for the privilege. So it's not surprising that when they looked at their business they didn't think or care or believe in the dynamics that I talked about earlier. It's not a shocker.

\[48:13\] And for me, back to my keynote - that's why I think we're talking about the soul of open source. It's not about the letter of the open source, it's not about the law, it's not about the license... It's about as people who participate in open source, what are our values, and why, and how do we use those values to decide where to put our time and our effort and our care? And for me, I don't wanna put my effort and care anymore into communities that don't love me back. It's just that simple. That don't actually want me to prosper and thrive.

That doesn't mean MongoDB is a bad product. It's a great product, and I'm using a Windows laptop right now; I'm not a free software hippie in the way of like I believe all software must be free. I'm not. But I have a very different relationship with those things. I also don't assimilate those things into my personal identity in the same way. I don't work on their behalf. I don't do all of the community building and support and structure and love that happens in actual open source communities, because they don't love me back. I know Apple doesn't love me back.

**Break:** \[49:29\]

**Jerod Santo:** Are you a glass half full kind of person, or do you just have a winning perspective on this issue?

**Adam Jacob:** I'm a glass half full person. I believe in people, and I believe mostly we can do what we want. I did a lot of theater when I was in high school; we did two shows a year, and then every other year we did a musical, that was like the only thing we did. And I remember having this conversation with my drama teacher, like "Why don't we do more shows? There's all these kids who want to act, or wanna do the thing, but they never get a chance, because we don't do enough shows. You might go your entire time in high school and never get on the stage... So why don't we do more shows?" And she was like "Well, because we need teachers, and time, and who's gonna direct... It's a lot of work." And I was like "Look at all these kids. How about we just do all that, and then it's cool." She was like "Well, if you can find a teacher, then sure."

So I found another teacher who would come hang out with us, and by the time I left high school we were doing ten shows a year. And I don't know that they were better... \[laughs\] But we did it, because we wanted to, and because we could. My whole life has sort of been that way. There's just things where I'm like "Oh, I think I want it to be like this", and then you just sort of go do the work, and then it kind of happens. That doesn't mean it's easy, or that it's guaranteed to work (it's not), but it kind of does, in general. So that sort of leads me to the glass half full side of myself.

\[51:56\] I think in open source you can feel the difference between the open source projects that are communities whose existence is to affirm each other's desires, that it exists in order to help people get what they need. I don't know what you need; the beauty of it is I don't have to know. I just have to be here to welcome you in, and to help you get what you need, and hopefully your assistance helps steward this thing we both love and share to a better outcome. And when you're in those communities, you know it; you can feel it. You feel it in your gut. It's not because somebody sent you a note or told you so, it's because you can feel your life improving. You feel the receipt of the thing that you need, and that's what makes open source wonderful and special... And we've lost it. We've decided that it's the license, we've decided that it's utility, or we've decided that it's... Whatever it is. And I don't think it is. I think it is that moment where what it means is that people can do what they need to do in their lives, and they can do it together.

I don't have a lot of patience anymore for stuff that's open source because they've slapped a license on it, and it's supposed to be good for me because I can fix their bugs. It's not good for me, it's worse.

**Jerod Santo:** This is gonna be a good keynote, man...

**Adam Jacob:** \[laughs\] I hope so. I'm a little nervous about it, because I don't want it to feel like a lecture, but I'm a little lectury as a person. I'm prone to fits of self-righteousness... \[laughs\] So I've gotta sort of work on that. And I don't really have a call to action, other than people should focus more on the purpose behind why they're participating, like what's their outcome, what's the thing that they want and why do they value it.

**Jerod Santo:** Yeah, exactly.

**Adam Jacob:** And they should make their decisions based on their values, not on assuming that because some software has a license that you like, that it shares your values. MongoDB had a license we all liked for a while, but it didn't share our values, right?

**Jerod Santo:** Right.

**Adam Jacob:** I mean, maybe it did, if your only outcome is "I wanna use MongoDB and I'm happy to pay you." Then it's aligned. And it's fine, there's nothing wrong with that as a value... It's just not mine.

**Jerod Santo:** Right. Adam, when you talk about the soul of open source, it seems like you're referring to community mostly, people working together, providing value for each other... You mentioned your early days with Perl, and how you know that you benefitted from that community. Being part of the Perl community I think is what you said.

**Adam Jacob:** Yes.

**Jerod Santo:** And I benefitted greatly from open source for years... I didn't really feel like I was part of any sort of community for a long time; actually, probably The Changelog changed that for me... I didn't feel like there was an open source community; I was benefitting from it, I love open source things, starting with WordPress, and Perl, and PHP, and then Ruby, and Ruby on Rails... And it really did transform my life in terms of I built a career around these technologies... And it took me a very long time to find the people behind those. I think GitHub was instrumental. SourceForge was always like "Download this stuff", but there was not much like code, and people, and stuff. So I think things changed, but... Is the soul of open source the community? Is it the value? Share your thoughts... Expand on that.

**Adam Jacob:** I think the soul of it is that there is a beauty in that idea that what people need in their lives -- they want things. You wanted a career -- I certainly did; I wanted to pay my bills, and I wanted to be a grown-up... There's a whole list of things that I wanted. Now I want my kid to go to college, and I wanna go on vacation. I've got a list.

**Jerod Santo:** Sure.

**Adam Jacob:** And I want lunch.

**Jerod Santo:** \[laughs\]

**Adam Jacob:** \[55:50\] And what's beautiful about open source is that it takes what is -- our world is full of resources that are not renewable. There's a finite amount of whatever in the world. Wood. Gold bars. Software is not like that. I can take software and I can do whatever I want with it. Just bits. I can change it, I can mutate it, I can share it, and it costs nothing to do those things, other than the energy required to make that digital thing exist. It's like if you had an infinite source of water that ran forever. So by open-sourcing it, we create this magical property which says "You can take that water and do what you need to do with it."

I don't know what it is you need to do; I don't know what it is that you want. Maybe what you want is relationships with other people, so you wanna go hang out on IRC and talk about your life, because you need friends. Maybe what you need is to build a career; maybe you're gonna use it in your life that way. I don't know what you need it for, I don't know what your circumstances are, but I know that that thing is a resource that's available to you, that you can use to build the life you want and to fulfill the things that you need. That is unique in the world, it doesn't exist - as far as I can tell - in anything else. And that truth -- you said earlier you didn't really feel like you were part of a community until The Changelog happened... My guess is that that's because you hadn't engaged in a way with those things; you didn't need it in that way. You didn't go seeking it out. You were getting whatever you needed from other places. Not that you wouldn't have been happy to be a bigger member of the Perl community, but you just didn't need it.

And then The Changelog happens and all of a sudden you kind of do. And now there's these other people, and they share, and they're also getting a benefit out of the Changelog show. Every time you put out a show, they're like "Oh my God, I needed that show. I needed to hear that perspective. I needed to learn about this piece of software. I needed these things." And you're like "Oh man, I needed that, too. That's why I did it." And now we're a community because we share values, and we share the outcomes, and that is beautiful. That's the soul of open source.

There's a cynical version that says "No one can agree on what community is, therefore it's not actually a value. It's just marketing fluff, it's whatever, it's squishy stuff. If we can't express it in a license, it's not real. And there's people who I love and deeply respect who have said this to me directly. Kyle Mitchell is a good example. I love Kyle Mitchell. He's written more great stuff and is a deeper thinker about open source than anyone I know. License Zero. But I think Kyle is wrong. I think the soul of those things is actually more important. I think the intention that we put into the world and the work that we do with each other is the thing.

So when I say that it's about the soul of it, that's what I mean. I think that as people -- open source has become so ubiquitous that it either now is gonna become just a revenue funnel; it's nothing more than a way of slapping a license on it, so that users will accept that that software is free, and that they can use it and then later be monetized... Or does it mean more. Does it have a value that's deeper.

Clearly, it could just be that it's the license, but I believe that that's not why most of us are really here. The truth is we want to be a part of those communities. We want to share those things. At the very least we want whatever it is that we want from the software to be true. And I think we have an obligation to talk to each other and to think about where we put our time and energy, so that we put that time and energy into places that share our values, and not into things that don't.

**Jerod Santo:** \[59:43\] I think maybe I've expressed this in a sense to you, Stac, when I say every once in a while that open source used to be fun... And not that it's not fun, but there's a certain aspect to it now... We talk about it growing up, and changing. It definitely has matured as a thing over the last 15 years. And I always talk about, with some of the stuff that we do - with Changelog, let's cover the fun stuff, the interesting, the quirky, because... Well, that's kind of what I got out of it early on, besides hacking on your blog, and I wanted to make websites and it helped me make websites. There was just this aspect of...

**Adam Jacob:** ...punk rock.

**Jerod Santo:** Yeah. The hacker side of like tinkering, creating things... And probably because of the position that we are in at The Changelog, we see a lot more really of the capitalist side of the open source industry, where it's business; it's all business, serious business.

**Adam Jacob:** Yeah.

**Jerod Santo:** So I think some of that I'm with you on, in that regard.

**Adam Jacob:** Look, man, I'm A+ on serious business. I ran a venture-backed company, I know exactly what I'm doing.

**Jerod Santo:** Well, that's the thing - I'm not against these things either. It's just this is what I'm presented with more often.

**Adam Jacob:** Yes. And I'm gonna run another one, but it's not the soul of why we do it. And the truth is if we're gonna start a company and I'm gonna write software, and the reason I'm writing that software is only because I wanna monetize the software - if that's what I want, it means I don't actually need that giant distribution channel. Do you see what I'm saying? If it's just a funnel... Like, you could have just given me MongoDB for free; how is it any different? \[unintelligible 01:01:22.12\] The difference is that people wanted to believe it was a community where they could get what they wanted out of Mongo that was more than just the monetization. Even if they didn't contribute, the idea that it could...

We project our values onto those things, because they kind of look like the things that we valued before. And that projection of values is very dangerous, because it's not true; they have different values, and it's okay that they have different values, and I might make choices where I decide that I don't care, because I'm consuming... But knowing which one we're in is important, and not deciding that you are trying to build a business, or a life, or trying to get a value out of a thing that it doesn't want you to have is important... Right? Because it sucks to put in the time and energy and then be told that that time and energy was inappropriate. Do you know what I mean? But yeah, it definitely felt more punk rock before all the business sort of came in and did the thing.

**Adam Stacoviak:** Well, eventually things go mainstream, you know?

**Adam Jacob:** Yeah...

**Adam Stacoviak:** None of that is an exact one-to-one with the maturation that you mentioned, Jerod, of open source... But eventually, something becomes so popular that the more mainstream folks hear about it and become involved, and they don't always have that punk rock, hippie, whatever mentality that might be.

**Adam Jacob:** Yeah...

**Adam Stacoviak:** The fun side of open source, as you've said, Jerod.

**Adam Jacob:** I mean, it turns out for me I don't actually care all that much about open source, or free software. I learned that through my little bit of existential dread here, that open source's value is developer utility. It says "If the source code is open, I can give it to a developer, they can do what they want, therefore they will build better software, that's good in and of itself."

The Free Software Foundation says "End-user utility is the most important thing." If I receive a thing, can I do with that thing whatever I want? Yes or no. That's the most important thing. And then they both use that lens to decide whether they think something is good or bad. The Free Software Foundation says "Is DRM good for end-user freedom? Yes or no. If no, DRM - bad." Open source would say "Can developers participate in the comments? If not, then it's not really good open source." If I can't accept contributions, it's bad.

\[01:03:47.00\] I have kind of learned that I -- I don't think either of those are my version of the most important piece of utility. I actually think the most important thing for me personally and evaluating whether or not I wanna be part of something is something where I get to be a part of it and we get to be peers. Do we get to be equals? Do we get to work together to move this thing forward? Not that I get the same degree -- I don't want the same degree of say, obviously, if I'm joining Jerod's project and Jerod wrote the thing. Obviously, it should be Jerod's, and I want it to be. But can it also be mine? Can I care about that thing, can it matter to me? Can it be as valuable to me as it was to you? Because if it was, now we're a community. Now we're talking about stewarding it together, now we're saying "Yeah, what if we did put a red stripe on that car? I think it would go faster." Now it's sustainable in a way that it's not otherwise. And the 996 license I think is a great example of this.

There's a bunch of Chinese developers who are working these ridiculous, horrible hours, and they wrote a license that said "Anybody who uses this license, you can't use it if you make us work these insane hours", is the TL;DR. The Free Software Foundation was like "This is not a good license", and the reason is that it restricts use... Right? It says "Hey, you're not allowed to restrict who can use the software, because that's bad for end-user freedom... And I'm like "But you know what's also bad? People working themselves to death. So I maybe don't care that you think it's bad for end-user freedom." I'm pretty sure those people get to still be in my tent, because I think they get to decide that their community and their values are aligned. I can decide that I don't share those values, and therefore I don't wanna use the software, but I don't think it's bad on its face that it wasn't good for user freedom... Like, get outta here. Right? No way.

**Jerod Santo:** I agree, and I think that's probably why I've never picked a camp. I've never been hardcore on the free software side or the open source side, the two constraints that you're referring to, because I've always been more like "Well, we can all co-exist here..." We can have opinions, we can express our opinions... I like the healthy debate. But that being said, we're all pretty much on the same side, we're just splitting hairs and causing divisions where there's a whole lot of other people that don't share any of these values, or don't know that they're important... So let's just make the tent bigger, versus dividing it up.

**Adam Jacob:** Yeah. And a lot of that friction comes when someone in the community decides that the resource belongs to them disproportionately. Like, if you're gonna build a community that we steward together, you have to give up the control over the resource. You have to steward it together. That's hard to do, because you could take more. I can have everything go my way. It's tough.

**Adam Stacoviak:** In the case of the 996 license they did - any backlash against this is like, that's their ability to try to influence a world they wanna live in. So if those are their beliefs, then I don't really see an issue with that. You're saying that there's some that would say that that's not open source because it doesn't adhere to, it restricts usage of it.

**Adam Jacob:** That's right, it restricts end-user freedom, therefore it's not an open source license, and it's not a free software license either. And I've gotta tell you, what kind of party is that? And the answer is it's a utilitarian party. It's a decision that says "What's good in the world is more of what I believe, and what I believe is end-user freedom is the most important thing... Therefore, if your thing doesn't create more end-user freedom, it's a bad thing." Well, get outta here with that. I don't care. What I care about is "Are those human beings over there building a world they wanna live in? Are they getting the values they want out of it?"

It turns out that I happen to want to live in a world where there are big tents. I wanna live in a place where everybody gets the thing that they need, because there's this magical property I said before about software not being -- it's not scarce. So we can have it that way and we should, because it's better for us as human beings, as people who want things in the real world.

**Jerod Santo:** \[01:08:02.17\] Software isn't scare, and neither is software bugs. So help us on the disqualification side. Bring your business acumen... You've got a potential customer and you wanna disqualify them as soon as possible, because otherwise you're just wasting your time. How do you disqualify a community or a project? Because you said a community wants you to thrive, and you wanna have shared ownership; you have all these things that you want from it... A lot of us waste time with communities that are never gonna be what we want them to be, and it takes a long time, and there's hand-wringing, and tears perhaps... So how do you know?

**Adam Jacob:** That's a good question. I did a bunch of research, and you can go to this website I built called sfosc.org. Sustainable Free and Open Source Software Communities. And I wrote like a 30-page -- I think the correct word for it is a monograph; it's longer than an essay, but it's shorter than a book. \[laughs\] It's a lot of research that went into that thing, but there's a list of principles of how you can know that a community is a sustainable one.

A sustainable community would include monetization. If there's no money coming in somewhere, that's pretty risky. But it also has things like "Can I achieve my goals? Is it possible to go where I need to go? Is it possible to rise in the project to have authority? Is it diverse and inclusive? Can I be a person of color? Can I be trans? Is it a safe place for anybody to who they need to be to participate in those things?" There's a list, and I came up with that list; I think it's pretty good, but I don't think it's the exhaustive list. I think there's more to do.

For me, I came to those conclusions through thinking about it as -- there's a philosopher named John Rawls, who has a game he plays where he pretends that we're creating a new world, we're creating a new structure, and we're gonna decide on the rules for that world in advance. Then we'll roll the dice and the world will pop into being, and we'll all wind up with whatever role we wind up with. It's called the Veil of Ignorance.

So what are the things you would refuse to give up if you didn't know what position you were gonna have in the world when it appeared? A good example is we would probably outlaw slavery, because no one would wanna be a slave when the world pops into existence. So there's a list of things that we would decide are unacceptable, and I think people need to both collaborate with others to find out what that list is, and come up with your own. What is the list of things where you're like "Nope. I'm out if these things aren't true."

That doesn't mean that you'll never use the software, it doesn't mean that you think it's bad software. It just means that you're never gonna try to participate with it as if it was a place where those things were true. Do you know what I mean?

I think a good place for people to start is asking yourself "What is it I want from my time? What is it I want from the time I'm investing?" Sometimes what we want is just to use the software. That's the most obvious one. But when we want more than that, I think it gets dicier, right? When we want relationships, when we want control, when we want authority, when we want those sorts of things... Now the other things - they start to matter. And I think if we know going in what's available to us, that would be good. I don't know if that means we need to come up with a framework where we can rank things, where we could say "This is like a Creative Commons Zero kind of thing", where you could say that this one's sustainable and this one maybe isn't, or "If you want control over the project, you're never gonna get it, because Google owns all the Go contributors", as an example. So if you're starting out in the Go community with the hopes that you'll rise to the Google core team - that means you're gonna have a job at Google, working on Go.

\[01:12:05.04\] It's not bad on its face, but it's interesting, because it tells you something about what's possible for you when you strive in that community... But I don't think there's a one-size-fits-all answer to what's acceptable. I think ultimately it has to be a conversation that you have with yourself about what you value, and then you need to have a way to look at a community and value it. I think that part is very difficult right now. It's very hard to, at a glance, understand whether a community is one that shares your values or doesn't... And I think it would be great if we wind up in a world where we had a way to talk about those values more clearly and openly, and without as much judgment.

One of my concerns with this whole thing is it can just be another version of No true Scotsman. Like, "Well, you're open source, but you're not sustainable open source." And I don't really wanna be that guy either, because I think that -- look, I don't really care what your values are, I just wanna know. I mean, I do care what your values are; I am judging you, but I'm judging you from my own point of view. You're not bad in an apriority sense, I just don't wanna hang out with you.

**Jerod Santo:** Right. More like match-making.

**Adam Jacob:** Yeah. Yeah, I think that's right. But I think we've lost our ability -- and we had, I think, in the early days of open source; there was more of an ability to have that conversation about our values than there is now. I think now it's so widespread that we don't really talk about the values, we just talk about utilization... Which is fine, but I think is the least interesting aspect of open source.

**Jerod Santo:** Do you think that was just a matter of how many people, how much time was available? Why did that use to be a thing and now it's harder?

**Adam Jacob:** I don't think it was ever a widespread thing. I think it was always like a relatively small number of people who actually were thinking deeply about it. It's just that the pie was smaller, and therefore those people seemed more frequent. \[laughs\]

**Jerod Santo:** Small pond, big fish.

**Adam Jacob:** Yeah, you were more likely to run into MSW when he worked at Redhat. I mean, you were probably not... I remember him, because I patched Redhat's installer, because I found an error in the kickstart code that he wrote, in Redhat 4.2 or whatever... So that's how I learned that that guy existed. And I'm not alone in having had that relationship, do you know what I mean? Because the world was smaller, and I think it's bigger now.

I also think that when we framed up the camps, when we framed up open source and we framed up free software, they were utilitarian things. They both had a point of view in the world and they were defining what the utility globally was for everyone. "End-user freedom is the most important thing. We're an advocacy organization for end-user freedom." OSI is an advocacy organization for developer productivity through open source licensing and business consumption of open source software. That's their utility. It's either good for that utility or bad for that utility. Neither of them are a way to parse values. Do you see what I'm saying? They already have they values; they've decided what it was. Their value is that it creates more of that junk in the world. And that's fine, but I don't think that they're necessarily helpful in deciding whether or not you as a person who's gonna spend your time and effort and life with another group of people around a piece of software is where you should, or cold, or opt to spend your time.

**Adam Stacoviak:** I'm curious -- you mentioned Kyle, and your respect for him... I'm curious of your thoughts around License Zero, and the business source license, and the other ones that have kind of cropped up to protect software teams who make open source software from the AWS effect we've talked about on the show.

**Adam Jacob:** \[01:15:57.13\] Yeah, how I feel about those licenses is that in general I think that they're a mistake. I think dual licensing -- let me be clear... I think they're a mistake not because they don't cause the desired licensing effect. There's a reason why you would choose a license that does something like License Zero, where you could do a license and sell exceptions. There's nothing wrong with selling exceptions. If you wanna sell exceptions, sell exceptions. If what you're trying to do is build a thriving open source business where the biggest channel is that top of the funnel of users who can benefit from your software, I think you're choosing the wrong model from maximizing the size of that funnel. So your business choices around why you would choose that model I think are flawed, because I think it's not good strategy. Not because I think it's a bad license in terms of how it's written, or whatever. I just think it's poor strategy.

When I look at the business source license, or what Cockroach has done recently, which is like a variant of BSL, or MongoDB's SSPL - it's the same thing. CockroachDB - the night before they announced that change I was having a serious look at whether I should start using some CockroachDB. Because I was like "I like what it says on the tin!" The day after, I was out. And I don't think I'm alone. I'm no longer in their funnel because they've decided that the community that they're building and the software they're building is one of pure consumption. And if all I'm doing is choosing a database for pure consumption, there's a lot more sure bets than Cockroach. I'll use Postgres. Even though they're API-compatible and Cockroach maybe gives me better operability or whatever, I know Postgres. And six of one, half a dozen the other, I'm just gonna choose what I'll choose.

I think in general every time that I have seen a company run that play, I find their choices questionable... Because I think strategically they're just making a mistake, because they're taking what was their biggest funnel and they're choking it off and they're turning themselves into just another regular proprietary software business. And as somebody who has run an open core business, I can tell you it's strictly worse than running a proprietary software business. Because what an incredible pain is all of those people who show up, telling me that their values are important, and I don't care about their values. What a garbage is that?! That's terrible. I don't wanna manage all those people; I just wanna sell stuff for money. I know how to sell stuff for money - I just don't give it to you unless you pay me. What a hassle...!

So yeah, I think in general they're not getting the benefit they want. With AWS in particular, I think everybody just completely is whiffing the boat on whether or not they're good for you or bad for you. They are strictly good for you if you're an open source business, because their ability to cause developer reach vastly outstrips your own.

**Adam Stacoviak:** Well, one of the biggest tenets of open source too is adoption, right?

**Adam Jacob:** That's it.

**Adam Stacoviak:** As you start to crop up - it is adoption, so awareness...

**Adam Jacob:** ...is everything!

**Adam Stacoviak:** It enables adoption.

**Adam Jacob:** It's the entirety of the channel.

**Jerod Santo:** Is there anybody else out preaching this, or are you the voice of one crying in the wilderness? Because I haven't heard a single person say this is like a net positive for an open source business until I've talked to you.

**Adam Jacob:** There are people saying it, but some of them work at Amazon, so people discount their point of view... Matt Wilson, and those folks. But there are others. The thing is that -- back to open source's punk-rockness; there's a "That's the man" vibe, where when you're saying that Amazon is a net positive for your business, everybody's like "But they're the man! And Amazon's gonna destroy Elasticsearch." And they're like "Dude, Elasticsearch is worth 1.5 billion dollars, with a B..."

**Jerod Santo:** \[01:20:10.00\] It's like that commercial where the guy is like "Sir, you are the man."

**Adam Jacob:** Yeah. Like, who exactly are we protecting here? Because the last time I checked, they were public and killing it. I mean, maybe they need protecting, but not really. It's not like they took some dude's tiny side-project and stole it from him. They would never do that, because there's no upside.

So I don't think there's a ton of people that are saying that it's net positive. It is a net positive, and it's ridiculous, in my point of view, to think that it's not... But it's a very easy story to tell, that the bad guys are coming to take your jerbs.

**Jerod Santo:** For sure, yeah.

**Adam Jacob:** Even describing why it's good for you - the number of things you have to understand in order to follow the logic is quite a bit. Do you understand business, and channels? Most people don't. Unit economics... I just described unit economics to a friend of mine, for a different conversation a minute ago, because we were having a conversation about "Why can a company be so big if they don't turn a profit?" and I'm like "Oh, it's because they do turn a profit on a per-unit basis. They just are spending more money than they have in order to generate more units." And it's fine, but it's a little mind-blowing if you don't know.

**Jerod Santo:** But presumably these companies that are raising the fuss, and switching licenses - they have businesspeople there that should be able to follow this logic.

**Adam Jacob:** Oh, sure. They could follow it. But they won't.

**Jerod Santo:** But your take was convincing to me as an outsider with no dog in the hunt. Just a basic understanding of business and open source. I'm like "Okay, I can see where that could actually be a win." But I wonder if your -- I'm excited to hear this show go out, because people are gonna listen to it. Other people who are closer to the problem, so to speak - will it resonate with them?

**Adam Jacob:** I don't know if it will.

**Jerod Santo:** Yeah, exactly.

**Adam Jacob:** It does with some subset of them, but I think when you run a business, your lens is very rarely in strategic, as I was just describing. The day-to-day running of the business is about like "Did I make the quarter, yes or no? Did I grow at the rate I wanted to? How is churn doing?" There's this list of things you're starting at, and the feedback loop you get from your own sensor network - your sales reps, and your marketing people, and the engineers in the field... And their lived problems very rarely also were about "Hey, you know, what I need is a bigger channel." That's a very abstract piece of business, versus "I'm having trouble selling." It's very concrete when a sales rep says to you "I lost this deal because they went with AWS."

**Jerod Santo:** Exactly.

**Adam Jacob:** So as a CEO, you have a chart in front of you, and what is says is "Deal lost." And then it was like "To whom?" "AWS." And you're like "Those guys. I don't need those guys at all. Those guys are the enemy." So I 100% understand why they would say that they're the enemy, because there's a chart in front of you that you get, and you stare at it every day, and there's a column that says "Win or lose", and if it says "Lose", you wanna know why, and the answer is AWS, and you are like "That was my money."

\[01:23:35.03\] Now, I think you're looking at the wrong part of the pie... \[laughs\] But I get how you got there. I understand how you've found that place. That that gets linked to moral outrage is fascinating to me... Because there's nothing worthy of moral outrage here. These are billion-dollar companies fighting over the win/loss column, and that we would decide one is the champion of my rights and the other one is a freeloader... Get outta here. They're both companies putting their hand in my pocket. Neither of these people have my interest in heart when we're talking about whether or not I'm in the win or the lose column. That part I find fascinating, that we would defend Mongo on moral grounds from the enemy of AWS. That's a story only someone who has a deep investment in Mongo's continued up-and-to-the-right-ness would tell.

**Adam Stacoviak:** This talk you're giving, this keynote - what's your goal? Is it prescriptive, is it descriptive? When this is over, what do you want people to do with this information you share, this story you tell?

**Adam Jacob:** I'll be honest with you, I'm a little struggling with it right this second... Which I probably shouldn't say. I should probably make it like a David Copperfield thing and be like "I always knew..."

**Jerod Santo:** ...and cut that right out.

**Adam Jacob:** Nobody can see the screen, but my talk is -- the way I write talks is I write them long-hand first, in a notebook, and then I turn them into sticky notes that are reminders about the stories I wanna tell... And then I move the sticky notes around until I get to the end. And my current struggle is that I don't have a call-to-action that is like "Go join the SFOSC website." Do you know what I mean?

**Jerod Santo:** Yes.

**Adam Jacob:** And I could do that. But the truth is that that thing is so strongly my own point of view about how we would create the world I want to see... And the conversation I actually hope people have is "What is the world I want to see?" I think most of the people in that OSCON room haven't spent much time thinking about what they want from the software they participate with, other than "I want it to do the thing it does. I want MongoDB to Mongo. I want Redis to Redis. I want NGINX to be NGINX." But there's a deeper question that I hope people ask themselves, which is "What do I want in my life from this day? Do I want nothing from it because I'm totally satisfied?" Then fine, just take NGINX and run a web server. But "Is what I want a better career? Is what I want friendship?" Because there's friendship to be found inside those communities. There are people to know and to have real, true relationships with, where they'll be glad to see you, and they'll listen to you when you struggle. Is it money? What is it? And can you get it from these places? And if not, why not?

**Adam Stacoviak:** \[01:26:46.26\] Well, thinking is an action too, you know? So I think giving this kind of talk, and if your only desire really is to make people think, would be action enough.

**Adam Jacob:** I hope so... Because when I think about a direct call to action, I feel like I'm contravening my own point.

**Adam Stacoviak:** I've got a free one for you, how about this...?

**Adam Jacob:** Hit me.

**Adam Stacoviak:** At the end, say "Go to Changelog.com and subscribe to the Master feed and listen to our podcasts." \[laughter\]

**Jerod Santo:** There you go, a non sequitur.

**Adam Stacoviak:** That's easy.

**Adam Jacob:** Yeah. Because I know it's unique, right? And as a community, I get value, because I come listen to the show. They'll be like "I sure liked that guy's 15-minute keynote. I should go listen to 60 minutes of him babbling on. I can dig it."

**Adam Stacoviak:** That's right. \[laughter\]

**Jerod Santo:** For your consideration.

**Adam Jacob:** Yeah, my struggle with the keynote right this second is not the middle. The middle is pretty solid. But man, how to end is tough.

**Adam Stacoviak:** Well, now that I know that the ending is slightly open-ended at this point, I'm twice as excited to sit and listen.

**Adam Jacob:** I mean, you know the point... \[laughs\] But yeah, how I'm gonna wrap it all up I think remains to be seen.

**Jerod Santo:** What we've done here with this episode is we've really increased your funnel. The top of your funnel for this keynote is huge.

**Adam Jacob:** That's what I'm saying. It's actually bigger than it was before, and this is why you should share. As a free business tip, since we've been talking about business - it's why you shouldn't hide your business idea from other people. You should just tell everyone, because all you'll get is better feedback. You'll just learn more.

I now know I could end my talk with the Changelog joke -- not a joke with the Changelog ask, and it will make people laugh. And then once that happened, there will be some subset of the audience who would be like "Oh man, I heard that show. I remember when they did that. That's funny, he actually worked it in." The rest of the audience will just be confused; they'll be like "Wait, why am I subscribing to the Changelog?"

**Adam Stacoviak:** "What is this...? I don't get it."

**Jerod Santo:** Well, now you have to do it.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** Look, it's definitely going into my last slide. I don't know -- do I have a choice now? I kind of feel like I don't.

**Jerod Santo:** No, we cornered you, for sure.

**Adam Stacoviak:** That's true.

**Adam Jacob:** It's fine, because we share values.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Well, Adam, it's been fun hearing this journey of yours, and in particular I would say how deeply you think about not just the software, but the community as you describe the soul of open source. It seems like going back to the basics almost. You challenge people to consider "Why are you even here, and what do you get out of it?" I think that people need reminded of that kind of perspective, so... Adam, thank you.

**Adam Jacob:** Oh, it's my super-distinct pleasure. Thank you for having me.
