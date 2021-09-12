**Adam Stacoviak:** Well, Kurt, thanks for joining me. Welcome to Founders Talk. I'm a big fan of what you've been doing. Very impressed with what you've done over the years - MongoHQ, to Compose, to acquisition with IBM, and now really innovating in the cloud, in a space that, from my understanding, not many people are trying to put apps everywhere and databases everywhere... And you've really been in this innovation position, from what I can tell, your entire career. Have you always been a bleeding edge, on the edge of your seat kind of person? How did you do that? How do you get there?

**Kurt Mackey:** Hey, thanks for having me. That is an interesting question. It's hard to identify myself as innovative. It's one of those things that seems like calling yourself humble... It's like, I can notice it in other people, but I'm not sure I ever would have framed it that way.

**Adam Stacoviak:** Well, I think even databases in the cloud even... I can recall back when we -- we actually had Compose as a sponsor...

**Kurt Mackey:** Yup.

**Adam Stacoviak:** ...post IBM acquisition, and I think even then - and I'm gonna show, I suppose, some of my naivety... I was like "Databases in the cloud? Does that make sense, managed databases? Who's gonna trust that? Who wants to shell their API out to other databases. It doesn't makes sense."

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Obviously, in retrospect, it does... So there you go.

**Kurt Mackey:** That's interesting. I think one of the things that I'm intimately aware of that's maybe not obvious from the outside is I'm not sure these are fully formed ideas that I produced, as much as -- particularly databases, entirely not my idea... Until I saw it. It was like "Obviously, this is a good way to do things", and started working on it with the folks who really came up with that particular idea.

Maybe the one personality quirk I have that I'm maybe more committed to than other people is I get really irritated when it seems like things are broadly wrong... Particularly when I've started building software. It really drives me \[unintelligible 00:04:03.00\] when I hit this feeling that's like "What's there doesn't work the way it should."

**Adam Stacoviak:** \[00:04:12.07\] Yeah.

**Kurt Mackey:** In most of the places I've worked, that's led me astray, frequently... I spend a lot of time on \[unintelligible 00:04:18.04\] arbitrary stupid stuff, that had no value to anyone other than my own personal like "Oh, yes, now it's the way I want it to be."

**Adam Stacoviak:** No one sees the rabbit holes you chase down that ended nowhere, right?

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Y'all see the successes, not the failures really.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** That's what I like about this show too, is we kind of show some of those things... So feel free to bring those out as it makes sense. I think so many people look at somebody successful, someone like you even, is that they only see the filter, so to speak...

**Kurt Mackey:** Right.

**Adam Stacoviak:** ...or what the press covers, or what you share on your blog, or the things that sort of like hit critical mass. They don't see all the endpoints that went nowhere.

**Kurt Mackey:** Right.

**Adam Stacoviak:** So I love this kind of conversation, to bring that kind of stuff out.

**Kurt Mackey:** Yeah. I think one thing I've been really fortunate about is I've mostly been working in places where I could kind of go off on a tangent... One of my favorite things I've ever worked on is Ars Technica, the tech magazine that's now owned by Condé Nast. I started working with them in college, and I wanted to write code; I didn't particularly wanna write words. I did write words, occasionally... Notably, I wrote a review of Firefox when they introduced tabs, and the review was like "Tabs in a browser are stupid. Why would anyone want that?"

**Adam Stacoviak:** \[laughs\] So clearly, not all of your --

**Kurt Mackey:** I was incorrect, I think. Yes.

**Adam Stacoviak:** Yes. I mean, tabs have lived it to live on. They've stayed.

**Kurt Mackey:** Yeah. So I feel like maybe I lost that argument. And if you look at my browser now, there's 47 tabs, so it's like--

**Adam Stacoviak:** Which is funny, because I can remember the tabs coming out with Firefox back in the day, and I'm thinking like "Yes! Absolutely! 100%. Give me more. Let me tab."

**Kurt Mackey:** \[laughs\] Yeah. I was a big ol' operating system nerd at the time, and I was using BeOS, if you remember BeOS... I don't know if you've ever even heard of it.

**Adam Stacoviak:** Nope.

**Kurt Mackey:** It was invented by a guy named Jean-Louis Gassée, who worked on Macintosh long before it was what we have now. One of the things Microsoft did that was interesting then was made some interesting window management choices, and you had your task bar, and you almost had like a global tab thing... And I was like, "Cool, the operating system should do good." In hindsight, what works better, it seems like, is the operating system getting out of the way, and the browser being able to do it on tabs. But anyway, that's why I would rather write code than--

**Adam Stacoviak:** I see.

**Kurt Mackey:** You can probably still find that article, but that was one of the notable things that I was just wildly wrong about... Which has made me sort of temper how loud I am about opinions about how things should be.

The cool thing there was I kind of had full control over the whole technical stack that Ars Technica was published on. So I got to build interesting things for both publishing and the forums, because the forums were actually a very big part of that site, and still are.

One of the things that I did that I probably shouldn't have was built a custom CMS for them using F\# and .NET, which - F\# was a fringy language, .NET was not Linux; it was like a weird \[unintelligible 00:07:09.00\] software even back in 2004... It's funny, I've been tempted to build a CMS multiple times, and it's not a thing I should be building. My ideas of how content should be published are probably very specific to me, and not an interesting thing for most people. Definitely not something people were gonna give me money for.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** So Ars now runs on WordPress, like the rest of the planet... \[laughs\] And my CMS - I don't know if the code exists anywhere, but I'd prefer it just be gone for good.

**Adam Stacoviak:** I'm sure there was something you learned though, right? I'm sure there's something the business learned... That's even early days. WordPress probably wasn't as prevalent back in those days. It was early days for WordPress, early days in their ability to conquer the publishing world, or at least be a dominating player in the space... So I can't blame you for trying to go down your own route, because that could have been very fruitful.

**Kurt Mackey:** Right.

**Adam Stacoviak:** \[00:08:00.12\] Even now, I'm sure with Fly, and in the path of MongoHQ, turned Compose, that you chased directions that you thought would be dead ends, that ended up being pretty fruitful.

**Kurt Mackey:** Yes, that's fair.

**Adam Stacoviak:** In hindsight you may say "That CMS sucked, and I really wish it die", but it could have been the next WordPress, had it been what it needed to be, I suppose, beyond what WordPress was.

**Kurt Mackey:** We did one really interesting thing though... After my half-ass mess, we moved to Movable Type. I don't know if you remember Movable Type...

**Adam Stacoviak:** I do, yeah.

**Kurt Mackey:** Movable type is interesting, because it was a static site generator before--

**Adam Stacoviak:** Was that pre or post acquisition? Weren't they acquired and then it got different? I remember Movable Type being obviously web hosted, unless installed...

**Kurt Mackey:** Right.

**Adam Stacoviak:** ...and it would be static files, similar to, I suppose, where we're at now, full circle, with a lot promise around static site generation. And they would compile your site in the browser, and then it was ready for your users, and all that good stuff.

**Kurt Mackey:** I think we ran an open source version. The static site thing is super-interesting to me, watching static site generators now, because we outgrew it -- obviously, a place like ours will outgrow that...

**Adam Stacoviak:** Yeah. Especially in those days, with that technology... It wasn't like it was today.

**Kurt Mackey:** No. One hack there that we did, that actually fits sort of the Fly mission now, is we ended up rather than generating static files for articles, what we did was we generated PHP files that were actually static code, basically. So it wasn't just a CDN serving an HTML file. And what that let us do is it let us do things like update all the listings. You have the article and you'll have all the related stuff next to it. And it let us insert things in the category pages without having to rebuild anything.

One of the variants of that used MongoDB, and we ran MongoDB replicas next to the app servers that were doing kind of the publish PHP file, so that PHP could go back and talk to MongoDB to do things like search... I mean, now talking about this, that never really clicked with me before - we just wrote a blog post on Fly about running Postgres read replicas everywhere. That's exactly the same architecture, it's just useful for more people than just me. So it was literally like 16 years later it became a feature that we shipped for a company that I hadn't even thought about at the time. So that was sort of interesting.

**Adam Stacoviak:** Yeah. What's even interesting too is you mentioned -- was it F\# the architecture for the CMS?

**Kurt Mackey:** F\# and .NET.

**Adam Stacoviak:** I think it's safe to say WordPress obviously is good software, but it hasn't been successful only because it's been good code.

**Kurt Mackey:** Right.

**Adam Stacoviak:** So even if your code was amazing in comparison to, say, WordPress, and now that Ars Technica probably uses Wordpress - the difference between your code and that code wasn't necessarily just simply good or bad code. It was a product direction, it was a person behind it... \[unintelligible 00:10:49.05\] been very influential in that space, very committed to a certain community focus... So sometimes good code isn't just good enough. It requires more than just simply the best code.

**Kurt Mackey:** Right. I am prone to kind of trying to build the perfect thing, with the perfect language, and the perfect computer sciency -- you know, the most pure possible thing... Which is probably not the best way to do things. I've been lucky, I think, because I've always really appreciated developers who just build things and don't worry about it. They just ship stuff and they make it work for people and they solve their problems... And I think one of the reasons I'm lucky is now I'm on company number two that's literally targeting those people as customers. And building tools for productive developers is one of the most fun things I can imagine at this point. It's really interesting to watch people go off of whatever you've built and make a living, or some money, or feed a passion with it. It's incredibly rewarding.

And I think tech startups in general - they don't always really value the... I call them blue collar devs. It's like the worst word ever, but they never really value the blue collar developers in the way that I think they should, because again, they're all kind of after perfection, like I was, and that perfect architecture, and all that stuff...

\[00:12:05.03\] So yeah, I don't know why I like them so much, but I always have, and I think I've always sort of wanted to be one of the blue collar devs. I've always felt like it's sort of a flaw, that I like making things fun and glitzy and perfect... Anyway. That was a little bit of a tangent there.

**Adam Stacoviak:** Describe a blue collar worker. What are some attributes that describe a blue collar worker.

**Kurt Mackey:** A blue collar dev?

**Adam Stacoviak:** Yeah, a blue collar developer. What's some attributes for that kind of developer?

**Kurt Mackey:** I tend to think of these people as like they're not on Twitter, because they don't care and they don't have time for that, and they're probably building -- there's an interesting community of these that are like Shopify developers, and what they're doing is they're building tools so they can make money... And it's not sexy what they're doing, and they don't care about that. They see kind of a small commercial need, and they're doing something to scratch that itch.

**Adam Stacoviak:** Right. They're swinging the hammer, they're getting the beer on the way home, and they're hanging out with the kids.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** They're not out there on Twitter, saying "This s what I've built today. Praise it, praise it. Like it, like it. Fork it", whatever.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Whatever you might be doing as part of promoting the code you write. They're just simply writing the code, doing the thing, getting the commercial value, increasing the users' appreciation of it etc. and going home.

**Kurt Mackey:** Yeah, that's exactly it. And there's a lot of them still writing PHP, because that's how they can get things done, and PHP is an incredibly productive language, particularly with Laravel now. It's a place to build a lot of very interesting stuff. If you extend that, too -- what's fascinating is if you watch Silicon Valley-funded startups... I'm gonna get myself in trouble for this, but particularly JAMStack-adjacent... The whole JAMstack idea is -- what I'd call it is architecture perfection. JAMstack sounds like architecture perfection to me. And it makes a ton of sense for a lot of companies, but what's happened with companies is they've hoovered up all the investment money in the JAMstack world, and in some ways they've left all of the blue collared devs behind. And the blue collar devs are getting their itches scratched by people you wouldn't think... Like, Shopify is a really good example of this, WordPress is a really good example of this... And it's actually super-interesting to me, if you break down all the devs in the world, to think about how few of them even understand the JAMstack architecture, and how many of them are actually shipping real useful stuff for either the companies they work for, or their own particular purposes.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** In some ways we've been lucky that I think this, because Fly - we can target the blue collar devs, and it's working. They don't have a lot of infrastructure built for them. And what we're building actually works pretty well for really boring applications, and it gives us a lot of ability to build something that I think is not perfect yet, but is vastly better than the tooling that a lot of them are still using.

**Adam Stacoviak:** What do you know about what's happening on Shopify in terms of development? Because we have merch.changelog.com, it is our Shopify store, and we use a very simple system. We use their theme kit, which is super-cool. Shopify's theme kit is super-cool tech. I mean, just to get a store up and deliver it via the API with a single command... But beyond that, what do you know about what's happening on Shopify? Maybe even how you relate that back to how you're solving productivity issues for developers on Fly.

**Kurt Mackey:** Yeah. They announced some stuff, I think it was last week; they had like a developer conference... And one of the things they're doing is they're going hard at this headless commerce stuff, where the idea is they're all -- they're almost like the Stripe, but for stores now, is kind of what they're positioning themselves as...

**Adam Stacoviak:** It's almost like if I'm online and I'm at a store and I go to the checkout process, I'm like "Oh, this is a Shopify checkout process. Okay, I'm safe." The store is great and I'm happy, but when I get there I feel like "Okay, I can for sure easily check out with Apple Pay" or all the pays, because they just easily integrate it and make it so easy for retails or e-tailers to just deliver a store that's great.

**Kurt Mackey:** Yes.

**Adam Stacoviak:** So I almost trust that store more by choosing Shopify as a consumer.

**Kurt Mackey:** Right. I also feel good about it because it's not Amazon when I'm buying from those places.

**Adam Stacoviak:** \[00:15:59.21\] Yeah.

**Kurt Mackey:** It's like, "Oh cool, this was a mom-and-pop probably" is sort of what it feels like. I think what they're doing is opening up more of their stack to be consumed by developers instead. So you kind of did the theme stuff for your store, but I think what you'll be able to do with their new things is go even deeper... And what you do is you ship your own store that kind of hooks into all their plumbing, and maybe dumps to them for the checkout process... But for what you're doing -- like, maybe you start listing your products next to the podcast, for example, on the listing; you kind of integrate it way more deeply into your particular application.

**Adam Stacoviak:** In that case it'd be our Elixir app could call out to their API and pull back our store ID from a collection within Shopify.

**Kurt Mackey:** Yeah, exactly. And so they're really going hard at that, I believe. And as far as I can tell -- so I've been paying a lot of attention to developer communities (because we need to turn to developer communities), and there's the obvious ones, like Rails, and there's the non-obvious ones, like Shopify... But I feel like they have 50k to 100k developers active on the platform.

**Adam Stacoviak:** So many. They're a behemoth. They've IPO-ed. That doesn't just say one thing, but they've definitely killed it. I can remember Tobias -- I think his last name, did you say Lütke?

**Kurt Mackey:** Toby? Yeah.

**Adam Stacoviak:** Yeah, I can remember when he was just a developer in the Ruby community. And he's still just a developer in the Ruby community too, but he's also that same developer who led a company that IPO-ed, and Shopify is a big deal. So I'm very happy for what he has done, both in his career and for the world at large.

**Kurt Mackey:** Yeah. He's one of the public company CEOs who ships side projects on Fly. We saw his name fly through one time and we're like "Wow, that's really cool. He's still deploying whatever little projects that he's doing..." To probably keep himself sane. That's why I write code. It's like, "I need a break from people, and I'm gonna go into this more deterministic computer thing."

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** But it's very cool that he's still building stuff, too. I think it's part of why maybe their developer story is working. If you imagine a public company that's doing e-commerce, that has a functional developer as the CEO... You would think they'd have a pretty good developer platform if that became important for them.

**Adam Stacoviak:** You know, I think that's good for representation, too. I think as part of what we do here at Changelog - I think a lot about the full lifecycle of a developer. We're not just simply targeting "senior" engineers, or novices, or beginners... We don't have a particular developer target in terms of who we speak to. We just sort of talk about what we think is important. But one thing we see often is that everyone's welcome, no matter where you're at on your hacker path. This is a place you can call home.

Now, we may not have absolute, absolute beginner content every single day, but we want everyone to feel welcomed. And I think what a CEO who codes, like Toby might - or does - is representation to anybody out there who's like "I've got an idea. I'm nowhere today; I'm 20, I'm 15, I'm 30... I'm 50 even." Whatever age you are. I'm here, and I don't have this success in the tech world, but I wanna do this thing or I have this idea. You could be CEO, but you could still also code as well. But that's an opportunity, it's possible.

**Kurt Mackey:** It is.

**Adam Stacoviak:** I think that's what's cool about that.

**Kurt Mackey:** And it's always been the promise of the internet. You don't have to ask permission to build things. Nobody's gonna stop you. I think we have a long way to go to get more Tobys out there, that look different, but -- in general, nobody's stopping anyone from building something interesting and getting it shipped. We have a long way to go to get investment to a good group of people, because right now you kind of have a prototype that can raise money from the traditional investors. But still, it's not even the only path to making a successful (or unsuccessful) product.

**Adam Stacoviak:** Earmark that investment part, because I wanna talk about that with you at some point... But I would think of you as like a Toby. You're a CEO. You're still slinging code.

**Kurt Mackey:** Maybe like baby Toby. \[laughs\]

**Adam Stacoviak:** Well, let's definitely say -- Fly hasn't IPO-ed yet, but you've had an exit, you've been acquired by Big Blue... I mean, IBM is one of the oldest tech companies in our ecosystem. They've been there forever.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** \[00:19:58.28\] I mean, that's cool. I would compare you to Toby, for sure.

**Kurt Mackey:** Well, that's flattering. \[laughs\] It's funny -- I think that it's hard to recognize maybe status of privilege. Again, non-identifying innovation. It's like, you're always aware of the people who are doing better at X than you are... I mean, it was an interesting problem, because they -- anyway, I can talk about IBM for way longer than we have, if anyone actually cares about IBM these days, which I think is probably not the case.

**Adam Stacoviak:** I think they're winning in their own spaces, but I think maybe a good dovetail to that might be potentially what you say about yourself in your Twitter bio. You say "I do random, sometimes useful things with computers and fire." Which - I don't understand the "and fire". I suppose that's a barbecue reference, which I'd love to talk to you about that if that's the case...

**Kurt Mackey:** Barbecue and fireworks... \[laughs\]

**Adam Stacoviak:** Okay, fireworks. Yeah, firecracker, fireworks... Literal fireworks?

**Kurt Mackey:** Yes.

**Adam Stacoviak:** You know, I do think that you -- maybe, like you said, it's hard to recognize, so let me tell you... I think you're cool. I think what you've done is cool. I would definitely say that you're representing the developer as a CEO. Still leading, still innovating, even in the CEO role... Not that CEOs are limited. I think too often -- that's why I love this conversation here on Founders Talk, is because we talk to the founders, CEOs and makers, which... I think all those could be CEOs. Not all founders are CEOs. Not all makers are CEOs either. But too often do we think a CEO is a limited role.

**Kurt Mackey:** Right.

**Adam Stacoviak:** And I think it doesn't have to be. And so often, the struggle that you have as a CEO is very different than any other role, because very often you're so different in your organizational chart, even if you don't have one. The problems you have as CEO are way different than an IC (individual contributor) for example. Because you've got funding thoughts, you've got bills to pay, you've got runway to consider, and you've gotta (in your role) innovate and think about the future of where this platform should go... Version 1 vs. version 2... I know you've had a version one of the platform. You've got all these things to juggle where that person has such a limited concern scope, whereas a CEO can be so much, and can be very limited in terms of what they do for an organization, and how they lead... Or they can do coding every day and shipping something arbitrarily on the fly, for fun... Because Toby did that. You know what I mean?

**Kurt Mackey:** Yeah. I joke that if I wrote as much code as I want, the company would fail, because it's not exactly the thing I should be doing at all times... But actually, that was one of the things I learned -- so when I stopped working on Ars Technica and then decided to do Y Combinator in 2011, one of the things I really wanted to do was to learn about building particularly like an investment-funded startup company, and what that process is like, and what you go through... Because I've never been good at school, but I've always liked the idea of like an MBA.

One of my favorite classes when I did do college - and I did actually get my bachelor's degree, finally, just in case my mom is listening; she's proud of that more than anything I've done.

**Adam Stacoviak:** Yay!

**Kurt Mackey:** But I actually really liked the finance class more than anything. It was super-interesting and not something that I would be inclined to like... But the idea of how companies choose to spend money and debt and equity financing - that was really interesting. So Y Combinator \[unintelligible 00:23:13.26\] I think it probably still is; it's like a way to maybe learn some of this stuff without having to go to school... Kind of do it instead of learning it. And it's been fun to see and fun to learn, and also mildly distressing at times to really find out how stuff works, the whole how sausage is made thing.

I kind of loved that even broader than the CEO, the founder job at startups is almost like a choose your own adventure thing... And it took me a while to learn that. That as the company grows, one of the things that you can really take advantage of is you can start offloading stuff that is a real chore, is a real grind, and we're actually really focused on the things that are incredibly interesting to you.

\[00:23:57.27\] The CEO of New Relic, Lew Cirne - I think he was like the OG founder, coder, CEO guy... Like, the guy that maintained the CEO job and managed to offload a lot of what was happening to the COO position... And I think prior to him, investors were like "Oh no, a developer guy is not gonna be a CEO. They don't have the right DNA for this." But learning all this over time has been really fascinating. It took me a long time to learn how to actually choose your own adventure in the context of a startup... And more importantly, it took me a long time to learn that part of my job is helping other people choose their own adventure...

We're going from seven people now, we're gonna be hiring pretty quickly, so we have this level-up stage between 7 and 30, where the people who right now have been focused primarily on development on Fly have had to do a lot of other stuff along the way. And helping those people offload those things and make the right hires to ease their life and have them focus on what they find really interesting and is probably way more valuable for us for them to be spending time on...

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** ...it's like, part of the job I didn't recognize as being part of the job until basically I did it wrong. There's a lot of "I did these things wrong." \[laughs\] And on take two, I can try to do them differently.

**Adam Stacoviak:** And that's okay. That's where learning comes from, right?

**Kurt Mackey:** Yes.

**Adam Stacoviak:** The best learnings come from failure. As you'd mentioned \[unintelligible 00:25:09.00\] I think you can learn by learning, and you can learn by doing, obviously. Right? But if you learn by learning, you eventually have to learn by doing too, because what you've learned you have to put into practice and then actually do it.

**Kurt Mackey:** Right.

**Adam Stacoviak:** Let's say you go to school - you don't always learn by doing, you sort of learn by learning. You learn by lecturing or reading... You may observe, but you're not really doing, in most of those cases. Not every single case. And I think eventually you learn by doing, and that's why Y Combinator does - it lets you be assigned... I mean, I'm not sure of all the processes, but assuming, based on past conversations, and also what I know about the process of selections and whatnot for Y Combinator... But you have people that are mentors to you etc. that are not in your company, or advising you based on the whole Y Combinator process... So you've got people that are feeding into you, and your school essentially is learning from them, and then you go that same day, or that very moment, in tandem with the conversation, by doing, too. So it's like the best proving ground for -- it's like microwaving, too. You condense -- it's like an 8-week process, 10-week process? It's something like that, I'm pretty sure...

**Kurt Mackey:** Yup.

**Adam Stacoviak:** ...in terms of its length. So it's compressed, and you've got the learn by doing and the learn by learning all in one, to sort of like speed-round you to the next level of a founder... And then jettison off to the company, and being a CEO in the long-term; you've got that process there that's sort of compressed in that time zone.

**Kurt Mackey:** It is. They do a really good job there. We did Y Combinator again, and I felt like I knew everything, and it was still helpful to get their advice and get their harsh feedback sometimes. One interesting thing about the partners there is they see hundreds of companies do things, and there are patterns to how these companies do things... And in many cases, they're able to give people confidence to do something that they're afraid they can't justify to the world at large.

I think a lot of startups are having just a ridiculous amount of -- maybe "confidence" isn't the word. Maybe like "Drink your own Kool-Aid." You have to really be committed to doing something that might look odd to a lot of people... Because if it was obviously valuable, somebody else already would have done this.

I think the other interesting thing about YC versus an MBA is you get a really concentrated experience... What I would call the more interesting thing is about running a company, but you don't necessarily get -- when we went to IBM I realized how much I didn't know about how big organizations operate... And a lot of this is like I don't care; I think it's unhealthy and it's not a thing that I would necessarily wanna spend time learning... But I think that the school would have been helpful for navigating giant corporate structures and understanding procurement and how the politics of an international organization work... Which is way far removed from building an interesting product and selling it to people.

**Adam Stacoviak:** Yeah, totally.

**Kurt Mackey:** It's like a distilled MBA on the things that I think are more interesting than I think what most businesses are kind of spending all day on.

**Break**: \[00:28:03.09\]

**Adam Stacoviak:** How do you get to Y Combinator status? To represent for those out there listening that might be like "Okay, Kurt... Cool. Y Combinator vs. MBA. Compress it, condense it, whatever..." How do you get to that place? Do you run your company for a little bit and then you apply? Do you have the idea and then you apply? How do you get to that application and then maybe the luck of the draw to get accepted?

**Kurt Mackey:** I think I was rejected three times before they accepted me. Part of it was they really like founding teams -- I don't know, it's hard, because it's probably the most fair selection process for any kind of investment, and it's still very fixated on a certain kind of people... And I think they're trying to improve that.

The nice thing about their application process is what they -- I think what they're really looking for and the thing that got us in is... I mentioned earlier that I fixated on building technical perfection and didn't focus a lot on how that would actually be deployed to the world, or how it would be useful or valuable... And when I finally got in, it's because I'd gotten a little bit better and found a co-founder that was also good at this. We were like "Alright, cool, we can build this thing. We can look ahead and see how this might be incredibly valuable to the world in the future." It was a little bit of telling the story to not me. In fact, that's one of the most useful things about fundraising, I've discovered... It's almost like a chance for me to stop working on the things that I'm focusing on every day, which are very small and targeted and will matter within three days, and think a lot harder about where this could actually go, and where this is going, and whether we're on the right track for this.

So I think the best way to get into Y Combinator is probably -- and this is gonna maybe sound backwards... I would probably build something interesting that I thought I could sell or get people to use very quickly, and then I'd figure out how to make it big. And it's not so much that you have to start with the big... So like with Fly, with this company, I actually started with sort of the big idea, and then it took three years to find the small one that would get us going in that direction...

\[00:31:54.25\] If you can build something interesting that scratches a small itch for people that \[unintelligible 00:31:58.02\] it's relatively easy to expand that into how this could become a giant thing down the road.

And I think the really cool thing about Y Combinator is you're not committed to making it giant. You don't ever have to get out of that small business mode if you don't want to... But actually having that thought process is probably pretty helpful.

I think the more specific YC advice is once you have this idea and a prototype -- I wouldn't go to YC without a prototype. I think going with an idea is probably -- even if you get accepted, probably fraught with risk, because you don't have a lot of time to go from there to actually trying to get users.

**Adam Stacoviak:** What's the time for it? Is it 8 weeks, or is it 12 weeks? What's the timeframe?

**Kurt Mackey:** I wanna say it's about 10 weeks, and then fundraising stuff happens. The goal there is to come out with enough progress to raise money from kind of seed round investors, which are frequently like funds, or even successful founders who just write small checks on this stuff they think is interesting.

The problem is you can't build a lot in ten weeks. You can build a very small version of something... I think it's better to probably go to Y Combinator with a pretty strong MVP maybe, than it is to just show up and try to do that from scratch.

**Adam Stacoviak:** So you did this with MongoHQ. Was it Compose yet, or was it just MongoHQ then?

**Kurt Mackey:** So the funny story there - and I learned this happens relatively frequently - is I went with a... I and a different co-founder went with a company called \[00:33:20.15\]; we were doing ad tech. And that company became Perfect Audience. But one of the things I learned at Y Combinator is there's a lot of founder switching... So I met the MongoHQ guys at the time and joined their company...

**Adam Stacoviak:** Interesting.

**Kurt Mackey:** ...towards the end of YC. It was like, ad tech wasn't the right thing for me to be working on. Brad, my original co-founder \[unintelligible 00:33:41.25\] became Perfect Audience, and he sold that several years ago. He's now a partner at Y Combinator. So we've kept in touch a little bit... He invested in Fly, but it was -- YC was a cool place to go to find another company to work on. Even if it didn't work, it's like a really good group of people to be involved with.

And then when we went with Fly, we were actually older, and we had kind of the bones of what we shipped and what we sell now were built, and it was like "This is the thing. We wanna launch this to devs. It's ready to be used. Now we just need to sort of figure out how to get people to use it", which worked out very well.

So when MongoHQ went to Y Combinator, it was even more mature than I think most YC companies were, because there was a product that was getting sold; people were buying it. It was a reasonably successful, very small thing, I think... And then it became obvious how to tell the story of how to turn this big. YC likes seeing ten people that really love something, and then a story for how to get a million people to repeat this process.

**Adam Stacoviak:** Would you say that it's a -- let's say you had a business in place for five years, ten years, that's still small, because let's just say you just naturally kept it small; you never pursued VC funding. You just kept your things small, but there's such a big opportunity, both technically and just in other ways, too... Would you say that's still a safe thing to pitch to Y Combinator? Are there no bounds, basically?

**Kurt Mackey:** I don't think there's time-based bounds. I think there's two kinds of companies that have been around for 4-5 years. So we went to Y Combinator when we were three years old for Fly. We were three years old and we'd tried two things that were wrong for -- the purpose of Fly at the beginning was we were going to \[unintelligible 00:35:20.26\] So Fastly, and Akamai, and Cloudflare at the time were kind of crap for developers. They didn't really solve the --

**Adam Stacoviak:** Hey, careful... Fastly is a sponsor, you can't say that stuff. I'm just kidding now... \[laughter\]

**Kurt Mackey:** Oh, I hope they don't listen to this.

**Adam Stacoviak:** They are a partner. They're probably listening, but it's okay. I'm just kidding around with you. I'm just joking.

**Kurt Mackey:** Yeah, yeah. I mentioned earlier it really irritates me when things don't seem like they work the way they should... And it would always seem like they didn't work the way they should to me... And this came from Ars Technica - I'm building an app, there's also a CDN out there... I should be able to use all of the CDN plumbing to enhance my application. So our theory was like if you build a CDN that developers really love, that they pick up as they're building an application instead of just trying to bolt it on later and add another layer, that'd be pretty valuable. So we kind of kept that premise the whole time, but we tried 2-3 different things beforehand that just weren't doing what we wanted.

\[00:36:18.20\] And when we had this sort of epiphany that maybe part of the problem is that a lot of applications shouldn't need a CDN... Like, if you build the right infrastructure, maybe you can run applications and not be forced to put a CDN in front of them - that's when we were like "Alright, cool, this could actually get big."

We were seeing the early signs... We had the ten really passionate users at that point, of something that just barely worked... But we were three years old and still trying to kind of find our path. If we'd been -- I think there's businesses that you've been running for several years that it's kind of like you're chipping away at the same thing without making a big shift... I think maybe it's the word "pivot", but not exactly. I think a lot of times pivots are like "Throw out the idea and go build \[unintelligible 00:36:57.00\]" or something.

**Adam Stacoviak:** I'm thinking more like "Add a bigger gas tank."

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Like, by default, Ford gave me a 15-gallon gas tank. I'd love to have a secondary 35-gallon gas tank.

**Kurt Mackey:** Or a giant battery.

**Adam Stacoviak:** Yeah, exactly. I'm speaking in obviously fossil fuel terms... Or a giant battery. Whatever it is, give me the additional resources. Because I think as any indie business, I would say -- because if you're a non-venture capital, non-funded business, you're indie, right? You're independently owned; that's what indie is. So if you're in that space, and like you said, chipping away -- and I think that's exactly what it is... If you're chipping away at the same idea, maybe you're making progress, but maybe you're not making enough progress, because you can't see the vision.

**Kurt Mackey:** Right.

**Adam Stacoviak:** You said before - solve enough of the problem to see the bigger vision. And I think if you can see the bigger vision, and that bigger vision requires more resources, and it's gonna take you a while to bootstrap to those resources, venture capital or Y Combinator is an acceleration process.

**Kurt Mackey:** And there are really interesting companies that worked for a long time before raising money, and I think the answer -- maybe the broad answer here is like if you can imagine pouring money into your company and making it grow quickly, it's a good time to start thinking about investment. I think a lot of people are prone to "If I could just hire five more developers, I'd ship more features and then we could finally crack this nut of building something valuable", which I think is a bit of a fallacy... I think that in general, the reason for raising funding is to -- for the classic companies I work on. If you're building a rocket company, you need a ton of money to literally get the thing off the ground. But for most software developers and people I talk to most of the time, almost everything they're building can be done very small and cheaply, especially now. It's totally different than it was 15 years ago. And the time for them to raise money is not so you can hire a second developer or ship more features, because there's the feature fallacy that I think is hugely tempting. It's always tempting to wanna add little things here and there to make your product better. The time is when you can imagine taking a bunch of money and doing three things at a time to make the company grow faster, while you'll kind of be building the same features, at the same pace.

I think it's a really hard choice, and I think that might be where Y Combinator isn't the best at selecting. It's really hard to look at a company that's been alive for five years and imagine that it's suddenly gonna get big in year six if you put the right amount of money into it. One of the interesting things you see is Atlassian did this, and then Calendly now. The Calendly story I love. I don't know if I've talked to you about this before, but...

**Adam Stacoviak:** Behind the scenes we've talked about it, but yeah, we haven't gone into detail... So please, feel free.

**Kurt Mackey:** So the Calendly CEO, whose name was Tope - I've only ever read it, I don't know how to pronounce it. I should have looked before I started talking out loud about this... But he basically wasn't able to raise money when he was working on Calendly.

**Adam Stacoviak:** Because of immigration reasons, right? Or something like that. Or nationalization reasons.

**Kurt Mackey:** \[00:39:50.08\] I don't know the precise reason. I do firmly believe that traditional venture capital investors have a profile of people they invest in, and they did not match that profile... So -- we could get way off in the weeds here, but in general, he was not able to raise money for Calendly. I think immigration might have been a component. I think he's from Atlanta; I think he's building a company in Atlanta. It wasn't Silicon Valley. Not connected to anyone in Silicon Valley. Didn't match the chiseled, white guy physique that investors really seem to seek out even still...

**Adam Stacoviak:** Right.

**Kurt Mackey:** And what he did is he build Calendly and made this really valuable service that I've been using for a long time...

**Adam Stacoviak:** Me too.

**Kurt Mackey:** And in his first round of funding it was like hundreds of millions of dollars, and it was like -- it's a little ridiculous that he had to prove beyond the shadow of a doubt that he's building an insanely valuable company to raise money... But he was able to just keep building this thing over time. And it finally worked.

And then Atlassian also did that. Atlassian didn't raise money until they were like 12 years old. I think those companies are super-interesting. What happened is those people built really successful companies, and then thought "Hey, I can strap the gas tank onto it." They didn't build a thing that wasn't working yet and spent five years on it. They built a thing that was working, and they could add the fuel or the battery to the rocket, basically.

**Adam Stacoviak:** And with your experience with Y Combinator, having gone through it once, would you say that you built Fly knowing you would eventually go to Y Combinator, or did you build Fly thinking "Maybe." I imagine some will go and understand prior to; they'll know what Y Combinator is, what the opportunities are, and they'll begin to build and get a certain threshold through it to say "Okay, we're ready now." The plan was always to go to Y Combinator and get selected and go through that process, and strap on the gas tank, and resources, and mentorship etc. And also, the alum. The alum status of being a Y Combinator company is a big deal. So that gives you a lot of new opportunity that was not there before, because you've sort of been stamped by the VC gods, so to speak.

**Kurt Mackey:** Yeah. \[laughs\]

**Adam Stacoviak:** I mean, it's such a prestigious name. Really, it is. And they've done such a great job over the years... Sure, there's been probably a thousand one flaws, but still, all amazing things have come out of Y Combinator. I've only ever heard great things from every founder I've ever talked to through that process.

Sure, there's probably some blemishes which you can talk to, or scars, or bloody knuckles through the process, but for the most part, you see success, and you've come up successful because of the experience of it.

**Kurt Mackey:** The plan with Fly was always to make it very big, if possible. And for what we're doing, you need to raise money to try and make what we're doing big. We're building software, but we're basically building servers in a whole bunch of cities, too. It's just an expensive thing to do. And the second part of that is we're also getting developers to use the product, which is a good way to make money, but it could take three years before you get critical mass of developers on it and then actually paying any reasonable amount of money. And so the plan with Fly was always "Hey, make this as big as possible", because in some ways I still wanna learn how startups work. I think we sold Compose at a time when I felt like we were 30% of the way there. There was a lot more to figure out.

One of the things we never did at Compose was learn how to go from selling to developers to getting big customers, which I think is something interesting, something that I'd like to see happen and make work.

**Adam Stacoviak:** Yeah. When you say "sell to developers", do you mean individual developers, like indies building their apps? Or do you mean devs within a company that have -- they're sort of one of many, so to speak, inside that larger organization?

**Kurt Mackey:** Basically, developers with a credit card is a pretty good description. Twilio always talked about this, how developers act like consumers, but they have a budget behind them sometimes, or a lot of the time.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** So when you build things for individual devs or people's side projects, they tend to actually be things that you can get devs within large companies to use as well, with the right amount of work. But it takes a tremendous amount of trust for those large companies to start putting infrastructure on top of someone like us, or even Compose.

**Adam Stacoviak:** \[00:43:51.27\] Right. It's that trust factor that you're sort of getting to. Technically you're there, but that trust factor is, I guess, ephemeral, to some degree, to get to... Like, what is okay? Trust Fly. At what point do we become trustworthy?

**Kurt Mackey:** Yes. And there's that old maxim of "Nobody ever got fired for buying IBM." It's like, no one's ever gotten fired for buying AWS, and in some ways we're asking them to use something that's not AWS for projects... Which is a tough sell.

**Adam Stacoviak:** A big risk.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** That's their potential job on the line. That's a wrong choice on infrastructure... We had a Black Friday sale, or we had a Father's Day sale, or a Mother's Day sale, or pick your day sale, and everything crashed. If it's e-commerce. Hey, they should be on Shopify, by the way... Then they wouldn't have that issue. \[laughs\]

**Kurt Mackey:** Agreed. \[laughs\]

**Adam Stacoviak:** But let's say it's something else. If you're not making those choices, then "Our database crashed, and we lost data."

**Kurt Mackey:** Right.

**Adam Stacoviak:** To be more pertinent, I should say MongoHQ/Compose.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** I keep saying MongoHQ because I grew up in the day when it was called MongoHQ, and switching to Compose - it was only after IBM for me, knowing the Compose brand... So for me, I feel like they're two different companies. Maybe you can agree or disagree with that.

**Kurt Mackey:** There was a distinct change there, because it was when we went from just doing Mongo to doing all the databases, basically. It did teach me -- so part of the reason this company is named Fly is it's not associated to... Someone told me at one point to pick an empty vessel for a name; like, something that's a name that you can then fill up. Changelog is actually a pretty good example of this. You could do a lot, if you ever decided to pivot away from podcast. Changelog is a very good, useful name that you can do-- I literally name a company Empty Vessel Inc. at one point, because I didn't know what I was gonna do exactly yet... But yes, the MongoHQ name was helpful and it worked, but we changed the name on purpose to do other databases.

The funny story there is MongoDB at the time, the company that creates the Mongo database, versus MongoHQ, that was hosting this company's database, and at one point making more money than MongoDB off of it, which was not always the best political situation... MongoDB at one point came to us and was like "Look, we're not letting people use Mongo in their names anymore. All these companies that are Mongo-something, we're gonna ask you to change the name." Or pay us a fee to license the name was maybe what they were after... I think they wanted to get us on a big partner program that would have funneled a lot of our revenue to them. And it wasn't like a direct threat, but the little bit of a threat there was "Or you can't use the name of your company anymore. We'll be after you for that."

**Adam Stacoviak:** Which is never a good place to be in a company, whether it's the threat or not. You just don't wanna live in that world, right? It's not a good citizen world kind of thing. You're not being a good player.

**Kurt Mackey:** No. But we'd lucked out. We had changed the name of the company two months earlier, we just hadn't ripped off that Band-Aid and told everyone yet. Still, within the next week we'd actually announced the company name change to all of our customers, swapped the domains and stuff over... Which I don't think is the effect they were after, but it was fortuitous for us at that point to do that.

And then MongoDB ended up buying Mongo Lab, which was kind of the primary competitor for hosted Mongo databases at the time, so... It was all very interesting. I really respect the MongoDB company. I think some of the people that we dealt with there that are no longer there were kind of like flailing and trying to do anything they could to figure out how to make money off of the database. They've pretty much cracked that now, but I think that they're maybe better off that some of those folks don't work there anymore... \[laughs\]

**Adam Stacoviak:** Yeah. They've made a lot of, I suppose, wise choices over the years, I think... Even with their licensing process, and stuff like that. They've really been leaders, in many ways. I haven't followed the story well enough to speak to all the details, but my (I suppose) perspective of what I know is positive, not negative.

**Kurt Mackey:** Right. I think one of the very cool things about that company, and then one of the ways that I feel like I would like to be, is they're incredibly good at just continuing to work, just staying alive and finding progress and finding wins. When I went from being a developer to both managing people and trying to make decisions for our company -- and I find the managing people to be a harder problem than the decision-making for the company necessarily... I have a little bit of YOLO in me, so I'm not risk-averse in not healthy ways sometimes...

**Adam Stacoviak:** Right.

**Kurt Mackey:** The hardest thing for me to learn there was that at least half of everything I tried was just not gonna have any effect whatsoever. As a developer, I'm used to writing some code, and something happens, and maybe it's wrong, and maybe it breaks, but there's an obvious path to fix that. And managing people and building a company - it was really hard when things weren't working. I was like "This seems like a good idea. I'm gonna give it a try" and then nothing happened. There were like crickets, or no response. I'm still trying to learn that that's okay, and I need to keep -- almost like the boxing metaphor of like I need to keep the feet moving right; it's important whether I'm making progress or something's working or not.

\[00:48:37.19\] It's been something I've learned from the MongoDB company. It's like, there's no reason that company should still be alive, but they didn't stop moving, and it worked. It's one of those few things with successful people that you can actually copy. I think a lot of times success advice is just like "Well, just be successful, and then you'll be successful. " That's not actually helpful...

**Adam Stacoviak:** My blanket advice is "Show up and do what needs done" to be successful. Show up consistently and do what needs to be done, in whatever your pursuit is. And I think eventually, to sprinkle some flavoring in there, like salt and pepper, it might be "Care."

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Right?

**Kurt Mackey:** Pretty much.

**Adam Stacoviak:** Because care is sort of the keyword. If you don't care, then you won't pursue that rabbit hole that ends nowhere with such vigor. You'll just flounder around.

**Kurt Mackey:** It's true. Mine is probably a variant of care, but it's always -- one of the things that helps me is there's small little wins that you can look for, that I can look for, to say "Hey, this is basically working. This thing has happened, thus I'm feeling good about this."

And the flipside of that is when those things aren't happening, it's pretty easy to be like "Well, the things I said I was looking for did not happen. We need to do something else." Or what sometimes happens is "I will know what's working when we get another big customer", for example, and then we don't get another big customer, and we get like a hundred developers to sign up in a given week instead, and then I'll be like "Oh, cool. That counts." The thing that I was looking for didn't happen, but this other thing happened that feels really good, so we'll kind of carry on with our lives.

**Adam Stacoviak:** Yeah. You know, you've gotta be hyper-aware of what's happening... And it's kind of cliché to even say this, but I always say "Celebrate the wins." But it's really -- I was thinking about this literally the other day, driving... Because I had to be alone, which doesn't happen often... I've got a family, so usually there's all these people with me, and so my solo time doesn't get to be very contemplative... I sort of don't get to do that as often as I want, when I'm driving at least... So in this case, I was driving alone, and I was thinking like "What does that mean, to celebrate the wins?" I think it's celebrate the progress. And if you're someone who's read Atomic Habits, or aspire to improve daily 1% in any way, I think that's sort of what I mean by that. Celebrate that small win. That small bit of progress. Any sort of bit of progress. Any sort of bit of forward motion to whatever it is that you aspire to do. If you can celebrate that every single day, you can sort of have gratitude to what you're doing and why you're doing it, and how you're going... And that even changes your personal mood, and maybe even your attitude, and that transpires into your team, and to those you're closest to, and then who they're closest to inside of your team... So that's how you keep a healthy team, is just consistently show up and celebrate that progress, those wins.

**Kurt Mackey:** Yes. It's a weirdly unnatural thing to basically say "We did good" or "You did good" or "That thing was right", or this is like a thing to cheer about. I don't know if it's a cultural American thing, or a cultural Midwest thing, or who knows, but it's really -- like, I have to work to tell people "That was good." It's really easy to find fault, and everybody's used to hearing when they've screwed up. But it's an interestingly difficult problem to tell people that this was right, this was good, and we've done good, and we should be happy about this.

\[00:51:57.26\] I guess one of the problems is people are so used to looking for reasons that something that's looking for even flaws, is like -- even the good things, it's like, "Well, we're not perfect yet, so we shouldn't care too much about the little bit of thing that just happened there." And it's like, it's important to recognize that we're never perfect, particularly in a company. I don't know if your company is like this; I would bet it is, because every company is like this... Every company is like a slow motion train wreck. There's no perfectly good, comfortable company to be a part of. They're all slow motion train wrecks, in different ways.

**Adam Stacoviak:** Sure, yeah.

**Kurt Mackey:** That was actually an interesting advice from Y Combinator - they tell every company "It doesn't matter how good the company looks from the outside. It is a disaster on the inside. So you should not feel bad when your company is a disaster. You need to make it better and not get caught up obsessing about that."

**Adam Stacoviak:** Right.

**Kurt Mackey:** It helps to go to big companies and realize they're a train wreck. Not only is it a slow motion train wreck, it's like a much bigger train that's getting wrecked. But it's too easy to be like "The company is not doing what I want it to do, so I shouldn't be happy about this particular small win we just had." Which is wrong, right? No company is perfect, and it's still okay to be happy about the good stuff.

**Adam Stacoviak:** The reason why I think that makes sense though, to celebrate the wins - and I will attribute a lot of this to... I'm digging deep into Atomic Habits right now, so a lot of this is really from James Clear and that book... But the goal is just a ramification of the process. So if the wins and the progress is a result of the process, then you've got to celebrate those wins, because those little things add up to big things. If you only celebrated your goals, then you're really missing out on the daily opportunity to be happy, the daily opportunity to be proud of -- not in like a prideful way, but like pride of what you've done and what you're team's done, or share that admiration of what somebody's done. Because even if it wasn't the goal, it still gets you to the goal. It's still progress towards that goal. And I think that process -- even falling in love with the process is a cliché thing to say, but I think after reading that book and hearing James Clear's story in Atomic Habits, and if you can subscribe to that kind of idea, which... I totally agree, all too often do I fixate on a goal and forget about the process to get there, and fail at getting to the goal. If you can fall in love with and adhere to that process and celebrate those wins, I think you just -- as a team. I'm assuming a lot of this about you, because I've talked to you several times and I think that's the way you think, too; you've gotta love those daily wins.

**Kurt Mackey:** The way you frame that I think is really good, and it reminds me of a book I never read, but I love the title of... It's a football coach -- it's called "The score will take care of itself." And the point is like you need to build the habits and do the process.

**Adam Stacoviak:** I think he mentions that book in that book. It was either that, or in the Blinkist version of it they mentioned that book, "The score will take care of itself."

**Kurt Mackey:** Yeah. I think even the way you frame that, differently than I was... Like, I was talking about celebrating goals in some ways, but a lot of times you don't even have any control over goals...

**Adam Stacoviak:** Zero.

**Kurt Mackey:** I mean, ultimately, we're building a company and we wanna make money. We actually have very little control over how much money we make directly. The best we can do is we can do the first thing that will get us to making money, and then build the habits that will kind of develop money down the road... Which actually reminds me - at Compose, we floundered for a bit, because we were focused a lot on revenue, and one of the problems I think that companies like Fly even have is when you start building a certain kind of product, there are companies with like $50,000/month budgets that will pay for if you squint something in that realm, and it's really tempting to go "Oh, we're gonna go get that money and then worry about how to actually do this thing for them later."

And at Compose, we've built ourselves in this corner where there were a lot of companies that paid $50,000/month to manage their Mongo database instance, and we didn't have the product to do that yet, so we were just basically consulting to make it work... Because "Growing revenue is the biggest thing possible", which is true; we had to grow revenue to survive as a company and get to another funding round and become profitable...

\[00:56:09.16\] But what happened is we stalled out at one point, and I believe -- it probably doesn't matter. I think this could happen at any amount of dollars. You can find a company that's gonna pay you half a million dollars a year, and use up all your time servicing that company... But we got to, I think, 5 million dollars of annual revenue, and our brains went "Hey, we're spending so much time on these customers that we're not shipping the product for who we really care about, and we're not really building product features to automate all of these things that need to happen." And some of these people probably shouldn't be customers. What they're doing doesn't really fit our product, and never will; or it'll be too long.

So we actually did a big shift and stopped that. We were finally like "Look, we're only gonna start caring about how many developers come and swipe their credit card and turn on a database for a while." Because it was like a "I can imagine how to control that."

**Adam Stacoviak:** And get you motivated, too... Because that's like, something can happen on the weekly, if not the daily... That you can literally email those people and be like, "Thank you. What was it that made you choose Compose?"

**Kurt Mackey:** Exactly.

**Adam Stacoviak:** "What's your experience with it? Where can we improve? Can you give us feedback? Would you be a beta user of our next build?", whatever it is that fuels that motivation.

**Kurt Mackey:** Yeah. So we turned to that, and we turned to basically feature cadence; how often are we shipping new features? Once you've recognized "We wanna build things for a thousand people and not just one", it's like "How often are we building something that these thousand people can benefit from?" It's much more fun. It was much more interesting... Because even on bad days, I can find someone and talk them into trying the product. It's not like I can't go get someone and convince them to use the thing once, very quickly.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** And it was all about the process of like "Cool, we need to build things for a thousand people. If we can focus on making sure we're doing that over time, over and over and over, then we can also work to get people to try it out, and then the rest of that will just work down the road."

**Adam Stacoviak:** Yeah. There's two principles that you said in there, that I'll tell you who I learned them from. The first one is "What are you optimizing for?" and I learned that from Saron Yitbarek. In a moment of her life of criticalness, a friend of her's said -- because she was hemming and hawing over decisions; I can't remember the exact details. I'll paraphrase, so Saron, forgive me... But essentially, the person said to her "What are you optimizing for? What are you trying to do? What are you trying to achieve?" So from that, you have to really introspect and think like, "Really, what am I trying to do?" Because then that'll let you say yes to the right things and no to the wrong things. Because all too often we say "Yes, yes, yes", and not "No, no, no, yes." You know what I mean?

**Kurt Mackey:** Yeah. \[laughs\]

**Adam Stacoviak:** And the other principle is velvet rope. And I learned that from this book called "Book Solid." It's really a salesy kind of book, more for like sales process, how to get your calendar -- how to sell everything you've got. "Book Solid" is the -- I think his name is Michael \[unintelligible 00:58:51.05\] if I can recall correctly. And I've taken this principle beyond just that simply sales process, to like - I've got a velvet rope between me and what I do inside of Changelog. Or me inside of what I do inside of Fly, in your case. And that velvet rope is who belongs? That's what you said with Compose.

**Kurt Mackey:** Right.

**Adam Stacoviak:** Who should be our customer? Devs with credit cards, that can give us feedback. That's the velvet rope. If you're not that, you're not getting past this line. So what am I optimizing for and what is my velvet rope?

**Kurt Mackey:** Yup. You know, the other part of that, the "What are you optimizing for?" I've always thought it was really interesting, because I'm very prone to trying to prevent bad things from happening. I mean, bad things happen at companies, and I think it's really easy to overestimate how bad the effect is actually going to be. It took me a long time to start -- almost like, I would call it "amateur cognitive behavioral therapy." It took me a long time to start talking myself away from worrying and preventing them. Because a) one interesting problem about preventing catastrophes is you probably aren't gonna prevent the actual catastrophe, because your brain hasn't even wrapped their head around this being a thing yet.

It's like, the things that will go wrong are wildly unpredictable. You can predict some of them and hedge against some of them, but the thing that actually really hurts - it's hard to think about ahead of time. But then what you said about "What do we want to be?" It's like, nobody wants to be not a failure. That's not like a thing to strive for. It's not like we're building a company that won't fail.

**Adam Stacoviak:** \[01:00:19.09\] You can't itemize what that means, to do or not do. Like, "Okay, we don't wanna fail." Sure, okay. Cool. That's like a symptom.

**Kurt Mackey:** Exactly. Once I finally convince myself - and this is still a rational thought that is not emotionally true for me at all times... But once I could rationalize, "Hey, the things that go wrong probably aren't gonna be as bad as I think they are." I can't figure out what those are ahead of time anyway... And I care mostly about what goes right. It made it a lot easier to start making choices about what to spend time on, and what to have other people spend time on.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** And in fact, how to tell people -- I think I probably irritate people with several pithy phrases at all times, but I'm frequently repeating myself about like "We're not trying to prevent problems." There's a lot of this, particularly when you're trying to sell a product, where you're like "Well, if we don't do this, people won't buy the thing", which assumes you've already gotten them interested enough to buy anyway... You're making a big leap there.

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** So I think I probably drive everyone crazy by focusing on "We need to get more people to use Fly. We don't need to spend \[unintelligible 01:01:19.14\] breaking down the reasons they don't use Fly, because we probably don't know what those are just yet. We still need to focus on the successful state here."

**Adam Stacoviak:** Right. You need that feedback loop, and you can't get that feedback loop until you get even somewhat interested developers using Fly, right? I mean, you have to sort of attract a certain layer... And I suppose that's where you get a fuzzy velvet rope, so to speak.

**Kurt Mackey:** Yes.

**Adam Stacoviak:** The velvet rope in that case might be, back to Compose days, "Developers with credit cards willing to experiment." Right?

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** That know the future is possible; it isn't always on AWS. They might get fired for choosing something different, but give them an opportunity to try a new thing, or make the dev experience easier to onboard. The on-ramps shorter, the documentation to try to on-ramp faster. That could be the optimization points, versus just simply saying "Don't die." Or "Beat AWS", or "Be better than..." Those are just sort of wishy things, not so much actual things you can say "Okay, today, senior engineer/individual contributor, go do these things." Those are actionable mission-minded things; you can say "Go make docs better to get somebody to use this and experiment away faster. Put this on Twitter, write a blog post about this, or go on a podcast and share your thoughts on what it means to get your app and your database to users all over the world in these ways, to experiment."

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** Even if it's just an experimentation, not just so much like "Move your whole entire infra to Fly, from AWS."

**Kurt Mackey:** \[laughs\] Exactly.

**Adam Stacoviak:** That's the long shot, right?

**Kurt Mackey:** One fun thing I've found to trick myself into making this okay - frequently, I'll be paranoid about... What's a good example of this...? Do you know what SOC-compliance is for data centers? There's basically some compliance certifications you can get when you're hosting people's infrastructure.

**Adam Stacoviak:** Sure.

**Kurt Mackey:** People ask for a lot. There's SOC, there's GDPR, there's HIPAA... People ask for this variation of things a lot. SOC-compliance is interesting for us, because it's about a $40,000 problem that is pretty distracting and will take months to do. And I've always worried that people will not use us because we're not yet SOC-compliant. With that one, I finally was like, "Cool, how much money would it take for me to say we're SOC-compliant now?" and just solve this problem when the right customer comes through.

So for your velvet rope example - you can totally bribe the bouncer and get around this thing at Fly. But it's an expensive thing. I tell people, if you're planning to spend like $10,000-$15,000 a month on Fly services, we'll write this into a contract with you that we will be SOC-compliant within 90 days, or something like that. And it makes it really obvious when we finally need to solve this problem.

\[01:03:54.17\] The HIPAA one is interesting, because we're thinking about solving HIPAA -- it's called a business association agreement. We're thinking about doing what work we need to do to sign these BAAs with people; just anybody, really... Because I think that the way -- and I'm really naive about this, so I'm just rephrasing something that I mostly understand here... So HIPAA compliance requires a company who's doing anything in various medical or medically-adjacent fields to have kind of a philosophy and set of processes in place that aren't really technical requirements, but rules about how to share patient data and who has access to patient data, and all of this stuff.

For an infrastructure provider like us, what you do is you get what's called a business association agreement where the HIPAA-compliant company has an agreement in place with us that says our processes are broadly compatible with what they need to do to be HIPAA-compliant.

So what we'd like to do is just give everyone the BAA. Give any developer on the platform the ability to build a HIPAA-compliant application on top of Fly. And that's, again, hard and distracting, but that one's interesting because there are 10,000 developers out there who want to build medical software, and probably have crappy infrastructure to do this... So we might end up doing that one even before -- the SOC compliance might cover both, I don't know... Specifically to get more of the 10,000 customers, and not because -- not because things are wrong; it's like, there's actually a customer base out there that would really value this, I think, and get us more customers.

Anyway. But the price -- I love setting a price that's like "What dollar amount do I need before I don't wanna say no to this anymore?" Because it just makes the answer so easy sometimes.

**Adam Stacoviak:** Yeah, it does... Because you can say "Well, that's $40,000? Okay, we can ROI this this way, we can eke it out that way... Okay, let's do it" kind of thing. What's the big idea with Fly though? I know we talked a lot about your journey, and in and around some of the things; we've teased out to some degree what you're doing with Fly, but what's the big idea with Fly?

**Kurt Mackey:** So we have a few beliefs about the future that are important to us. One of the beliefs is that basically all applications should run close to people using them. If you squint at the types of code people run, there's the kind that need to be nearby, or benefit greatly from being very close to the user, and then there's stuff that runs kind of in the background, that you should probably put in \[unintelligible 01:06:14.25\] because they don't have to worry about that.

So our general belief is that in the future everything a developer builds that a user will use will run close to that user. And the reason for this is speed, and it's the ability to ship more interesting features. If you can get an application within 40 milliseconds of someone, it seems like it's on their local device, so you can start building highly interactive, really interesting stuff doing that.

And we know this because big tech companies do exactly this. Shopify has infrastructure to get all of the Shopify stores within 40 milliseconds of their users. Facebook has data centers within 40 milliseconds of all the users. Google does this as well. So we're pretty confident that that's a thing that will be true in the future, and we think one of the reasons it's not happened yet is because the infrastructure doesn't exist to make it possible for what I would call boring applications.

So if you take your boring, standard Rails application that reads from a database, it's actually historically been difficult to run that close to people, and people are kind of left -- either they don't do anything to account for this, which is pretty common; they'll just ship it to Virginia or whatever, and let everyone use it and it'll be slow for their users... Or they start kind of shoehorning a CDN on top of it to make certain things faster.

So our kind of big, immediate goal is to build infrastructure so people can ship the apps they're already building, and run them close to people. And I keep referencing boring Rails apps. The goal has been to get a boring Rails app. And we did that, and I think the user experience is not as good as we want it to be, but it's vaguely possible now. So we're actually attracting users who know that they wanna do this, and we're attracting developers who are like "Yeah, obviously I'd wanna run my app close to users."

But I think the next step for us is make us actually just the default for application deployment, where it's not like you have to think you wanna run close to people, it's that it just works.

**Adam Stacoviak:** Right. It's like, "Okay, why wouldn't we? Of course, yes. Let's just run it on Fly and we get that for free."

**Kurt Mackey:** \[01:08:07.03\] Yeah. It's like, "No, this is just how we deploy applications."

**Adam Stacoviak:** Right. Well, I would say we're a global company, which is sort of odd even... Like, I meet friends that don't have a clue about what I do, and they're always surprised to know that we have listeners in Japan, or South America, or New Zealand, or basically everywhere. So thankfully, you were sort of describing to some degree -- we don't have a boring Rails app, we have a really cool Elixir app. \[laughs\] Just kidding. But Elixir and Phoenix is very similar. Jose Valim, a lot of the fun things that were happening in the Ruby world, he wanted to kind of transplant into the Elixir world... So there's a lot of parallels to the Elixir/Phoenix/Ruby Rails stories. So that's why I say "really cool".

We have a three-node Kubernetes cluster, and we have Fastly as a CDN. I know earlier on you knocked Fastly... I think back in the day, not current Fastly, so we'll let that one slide, but we do have Fastly as our CDN, in front of everything. And we've recently put Fastly in front of literally everything, not just our mp3's, to get that global, never-down, super-fast response time, what we're caching. We're kind of like your prime candidate, so to speak, right? We're not taking our application everywhere. We have it hosted in one place. I think it might be somewhere here in the U.S, our clusters, for example. We might be in multiple data centers, but they're definitely here in the U.S. Our database is not everywhere. It's a Postgres database, hosted on Linode, inside of Kubernetes, and we simply just CDN with Fastly, and they deal with the global problem, essentially.

**Kurt Mackey:** Yes. Well, a) since you're doing podcasts, CDNs are perfect for media files. You obviously would use a CDN.

**Adam Stacoviak:** Right. And we only ever used it for the mp3's for the longest time. We only did CDN just for the mp3 and some of our assets. Not our full -- every DNS query did not land at Fastly; it landed at Linode first, and would, you know, the CDN, the things that we needed to, like assets, and mp3's and stuff.

**Kurt Mackey:** Yeah. Our basic belief here is if you'd had infrastructure that just worked, and worked in a way that was economic, like not just millions of dollars, just putting your Elixir app everywhere would have been a better solution than putting Fastly in front of that Elixir app in one location. Fastly is actually really good; the CDNs are actually very good for a narrow set of problems, and putting it in front of certain apps if you wanna do that work makes a lot of sense.

I keep mentioning that some things feel really wrong to me, and the idea of putting layer in front of my app because my app is not fast enough seems like a really -- if we just look at that in isolation, it seems strange. Like, why would we add the complexity of a CDN if we could just make the app fast enough instead?

**Adam Stacoviak:** Right. And that was our philosophy originally. We thought that this is pre-Fastly in front of everything, and we're kind of getting into the minutiae of our architecture... Which I cannot cover as well as Gerhard of Jerod can; my words are paraphrases and proxies, so to speak, for what smarter people can say about our infrastructure... But we thought -- because Elixir is fast, Phoenix is fast; super-fast response times, highly concurrent, can deal with a lot of users... So we thought "Hey, this is a great choice. Let's just put that out there." But that doesn't account for latency.

**Kurt Mackey:** Right. You still have the speed of light. \[laughs\]

**Adam Stacoviak:** You know? To respond. You still have to get to the thing to get the response time... So that could be \[unintelligible 01:11:23.07\] we came up against... So we made a wise choice on tech, but still yet, just that tech in one place didn't give us the full prospect of what that tech can offer in terms of response time to a user. You have to get to the thing to respond first, and then get it back. So you still have that pipeline between the user and the data center where the application lives. So you know, call that short-sighted, so to speak. But nonetheless, you know...?

**Kurt Mackey:** It's not short-sighted. I heard an entirely made up statistic. I don't know if this is true or not, but I think it sounds correct, and I like it... But I heard that something like 0.5% of AWS customers run in more than one region. It's an impossible problem to solve, which is why we have things like CDNs.

\[01:12:08.22\] So our ultimately goal here is to make it to where you would ship an Elixir app and not have to worry about it. It would just suddenly become a thing that runs close to people, and you don't really have to spend cycles on it, you don't have to put a CDN in front of it, you don't have to worry about caching pages...

For what you're doing a CDN is actually really good, because I don't think you have a lot of per-user dynamic content. There's probably not a lot of places where people would log in and see something very different than the other people... But if you wanted to add something like chat to the side bar of your podcast, or even if you went bonkers and did like a livestreaming event at some point, there's a lot of features that you kind of get if you can just keep working with your app and by-pass the CDN. That's actually the genesis of this whole company. When I worked on Ars Technica back in the ad crunch of -- ad crunches... It seems like ad market has fallen through the floor like 5 or 6 times in the last 20 years...

**Adam Stacoviak:** Sure. Several ad crunches.

**Kurt Mackey:** Yes. I think it was 2006. The ad market just collapsed and we launched a paid subscriber program, because it was like "This is a way we might be able to make money." And the paid subscribers actually kept ours afloat for several years. It's like, one of the earlier ones; I thought it was really interesting. The infuriating thing about this is we went from publishing things that were like we put it up once and a million people were seeing it, to - now we have paid subscribers we'd like to build a dynamic app experience for that does a lot for them, including... Like, if you imagine the types of features you'd wanna give to paid subscribers, a lot of them are very personalized.

**Adam Stacoviak:** Yeah, like a "for you" tab kind of thing... Which is par for the course for any application that delivers dynamic content these days. A "for you" tab is a requirement.

**Kurt Mackey:** Yes, exactly. We even had the forums running, and it's like "Cool, we could actually build this community into the application somehow, right?" One of the things that we learned paid subscribers like is they like being recognized as paid subscribers to their peers. There's like a little bit of a status thing...

**Adam Stacoviak:** Absolutely.

**Kurt Mackey:** Yeah. Speaking of velvet rope, right?

**Adam Stacoviak:** A little star next to their name, or VIP...

**Kurt Mackey:** Yeah. And we couldn't build those features because there was no -- like, I think now we could do the work for it, but at the time it was like "I'm able to build an app to run on these servers. I'm able to put things on a CDN. But I'm not able to build features into the app and also have them be fast for people." It was just not a possible thing to do. So in a lot of ways, we hit this problem relatively early.

Fastly and Cloudflare have some things that you can -- I think you can basically write extra code to make this stuff work. You can basically program their CDNs, to an extent, at this point... Which I think would have helped for someone like ours, because it was that important to us... But again, I think if you're shipping an internal business application, suddenly you have a bunch of people using it from their houses... It's actually valuable to be running your internal business stuff close to your users as well. One of our other basic philosophies is like AWS and modern clouds are incredibly complicated, and it's not necessary.

**Adam Stacoviak:** It is.

**Kurt Mackey:** Right. \[laughs\] You could kind of ship all these features...

**Adam Stacoviak:** I mean, we have two brands working with us, you're one of them. A good friend of ours, Asim Aslam, with what he is doing around Micro... Just simply combating the complexity of AWS. Both a good thing for Amazon and a bad thing for them, because eventually, you both will win, or one of you will win, hopefully both, in terms of pulling some of that market share away, because of that complexity.

**Kurt Mackey:** Yeah. I think long, long-term, if we do what we want, I think we'll become an interesting public cloud option where you don't have to hire people to run your Kubernetes cluster to use it, basically. Most of these things will just work for people who are writing the software. I think that that's probably a great simplification. I think we've gotten -- this world we have, where people build their CRUD-based startup (CRUD in the sense of Create, Read, Update, Delete) just \[unintelligible 01:15:48.15\] and then hire a Kubernetes person to build a Kubernetes cluster for them just seems really bonkers to me. It's an app and a database; it's the same exact architecture that every other app and database uses. Anyway.

\[01:16:04.00\] Kubernetes makes a ton of sense, and there's not a lot of great tooling... Heroku is always very expensive, and the Heroku experience didn't exist on cheaper alternatives for a long time.

**Break**: \[01:16:15.15\]

**Adam Stacoviak:** I wanna talk about fundraising, because I know you did some of that stuff... If we can talk about it. You can give me a head nod if no...

**Kurt Mackey:** We can. \[laughs\]

**Adam Stacoviak:** I do wanna touch a little bit on barbecue, because that's fun... But before we do that, can you maybe give a call-to-action to developers listening to this? Like, what's a sweet spot for Fly? What's a good invitation, so to speak, to the audience?

**Kurt Mackey:** I think if you're building a full-stack or backend application, you should look at Fly for deploying it... For two reasons. One is basically the power of a good segment of something like AWS, for similar pricing. So you're not really paying a premium to get the developer experience. When you ship an app on Fly and you ship a database on Fly, they land on their own same private network, they talk over a private network, like they should. There's no configuration required on your part. But then your database won't get owned by people scraping the internet and finding public ports open. Just by default, because it's sort of an implementation of how you should ship most applications.

So our goal is for Fly launch -- we have a CLI you install, and then you run Fly launch... Our goal is to \[unintelligible 01:18:36.12\] any app you happen to be working on in your working directory and get it up and deployed within just a few minutes. One little cheat when we do this is we actually run the app closest to you. So this is like a little bit of a -- again, our premise is if you run close to people, things seem faster. We've actually gotten compliments from people, like "I'm amazed at how fast this is", all because what we do is we default to the city that's nearest to them to deploy their application... Which I love. It's like the first taste of this. And then what I think is really interesting - again, we're trying to capture developers, because it's like a great place to deploy apps... But what happens I think is this is infrastructure you won't outgrow. You're probably never gonna need to leave Fly for something complicated like AWS, because we're kind of giving a similar set of features, and we also give you a path to make this stuff truly fast.

So almost everyone who's building an app for U.S.-based audience has customers in Sydney. You kind of have to cover the English-speaking world. So we give you basically the tools you need to take this application and also run it in Sydney, and with no architecture code changes; just on top of Postgres, just the way you're used to. You should check out our blog too, if you like technical stuff. We write some pretty deep technical articles of how we've done these things.

**Adam Stacoviak:** That's Fly.io/blog, right?

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** \[01:19:49.04\] And you mentioned Postgres there too, so that was a recent blog post as well, about -- you now have Postgres in place, distributed... So do you wanna maybe speak to what that means? Why Postgres first? Is that a big deal for you, I suppose? Is that the first database you've had? Because you went from apps everywhere, to apps and databases, with that blog post, right?

**Kurt Mackey:** Yes. It is not the first database we've tried. It's the right database, I think. One of the things we've learned about what we're doing, and I think is something that Cloudflare and Fastly are also learning, is that we probably can't tell people how to build applications. The best we can do is be compatible with the applications they're building. So when we finally settled on Postgres, it was because most developers were comfortable with the idea of Postgres, and probably use it. And even if they don't, it's not like a new thing to learn, it's like a portable skill.

If you build an app on Postgres, you're not stuck on our infrastructure. You can put it pretty much anywhere. There's a whole history here of how we try to do data, but what we did is we built a generic, very vanilla Postgres offering, and then we figured out how to run this thing across the world. So what happens when you deploy a Postgres on Fly, is you then deploy read replicas in the cities where your customers happen to be.

As an example we have a bookstore using us that has a bunch of customers in the U.S. and a bunch of customers in Europe, and what they do is they run their Postgres database in New Jersey or in New York, on Fly, and then they run a read replica in Amsterdam and a read replica in Spain, and our plumbing allows them to basically do this without changing their application. So what happens when requests come into Spain is they use the read replica to handle the request if they can. If a request needs to perform a write, we actually route the entire request back to where their primary database is, and it does the rights there, and it's all very transparent to the users and the developers.

**Adam Stacoviak:** Yeah. Very cool. A lot of fun stuff happening in that space. I know we've had some conversations behind the scenes about fundraising... I'm imagining you've done this a couple of times, not just simply the most recent time here... But as a CEO, I think - from my notes; you can correct me if I'm wrong - for at least a decade now... But you said half of MongoHQ/Compose's timeframe was you as a CEO, so I think it may be more like seven years...?

**Kurt Mackey:** Yeah, I think that's pretty accurate. Dang... \[laughs\]

**Adam Stacoviak:** I'm trying to do some basic math here. Okay, so let's just call it seven years. Would you say seven years is accurate?

**Kurt Mackey:** Yes.

**Adam Stacoviak:** So having been CEO for seven years, how many times have you fundraised? What's been the process for you? Is it fun? Do you like it? What are the do's and don'ts? Show us your scars. Take us into the world of what you've dealt with to get this fuel, this resource that's necessary; the financial resource to build companies.

**Kurt Mackey:** Fundraising is not fun. It's my least favorite activity. It's a real grind. So I've successfully fundraised four times now. There's been at least three attempts where I started going out and talking to investors and then ended up not raising any money. I'm pretty prone to punting; I'm just being like "Now is not the right time. I'm not gonna spend more time on this", partially because I hate it. It's a really easy choice to be like, "I'm just gonna go back to the things that are more fun."

**Adam Stacoviak:** Right.

**Kurt Mackey:** But no, there's more times. There's one I've completely repressed from my memory... \[laughter\] It varies depending on stage. Part of the reason why I talk about Y Combinator is I think if you're building something new and decide you wanna raise the first round of funding for it, Y Combinator makes that much simpler, in the sense that it gives you some structure for doing this, and gets you introduced to this network of people who like to put money into things, that you otherwise might have a difficult time of meeting.

**Adam Stacoviak:** Would you say it's the Hard/Easy button?

**Kurt Mackey:** Yes. I mean, it makes sense. I've raised money five times ever. There's no experts at fundraising, because nobody gets to do it. It's not like a thing I do four times a year. It's a thing I do when I need to, that I have to relearn each time. So the nice thing about Y Combinator with the first round of funding is that they make it -- I'm really comfortable with their process. I don't have to just flounder around and figure things out. I'm basically just following the instructions.

**Adam Stacoviak:** Fundraising \[unintelligible 01:23:47.25\]

**Kurt Mackey:** Yeah. It's like a board game almost. It's like, "Here's a thing with rules", and you follow...

**Adam Stacoviak:** Okay...

**Kurt Mackey:** Yeah, exactly.

**Adam Stacoviak:** \[01:23:56.22\] Roll the dice, go here... Learn this lesson, go back two steps, redo your slide deck... Put more slides in, put less slides...

**Kurt Mackey:** Exactly.

**Adam Stacoviak:** Pull more slides out. Speak less, demo more. Demo less, speak more...

**Kurt Mackey:** Right. They help you simplify. I think the hardest part about pitching companies is keeping the pitch simple. I think that for the seed round I don't dislike that as much as the other rounds. The nice thing about an early round of funding like that is you're kind of almost like pitching a what-if, which took me some getting used to. I'm usually hedging on comments I make. I'm very prone to being like "We're gonna do this, but it may not work." I'll tell people. And investors are used to this language of like -- they're used to looking at things through the lens of like "We only care what happens if it works. We don't care about the possible failures", because I think seven out of ten of their investments are just gonna fail, and they've internalized that...

But at that seed round it's sort of fun to tell the story. It's like, "We're gonna do this and it's gonna get big. And here's how it's gonna get big." I had to learn to be confident about how it's gonna get big, and again, not hedge every moment. But it is sort of fun, because they make very quick decisions; a lot of times they'll make decisions while you're talking to them in that initial meeting, and you'll get the money that week. And you can talk to a bunch of different people.

The later rounds are less fun, because it's more institutionalized, and you end up -- the process for those... And I've always really struggled for this - I think I have a better time convincing an individual than a group, but the process for the later rounds is you talk to a partner at a firm, you get them excited, and then they sort of advocate for you to the rest of the firm. And then you have to go meet the rest of the partners and convince this entire group that this is a place, one of the fewer investments they're gonna make this year.

I feel very poor success with partner-to-partner meeting. I don't think it's worked for me as well as it seems like it should have, and I don't know exactly why that is. Yeah, I don't like fundraising at all. I do like building a pitch, in some ways. I do like coming up with "Here's how this company would get big." I think that's really helpful and valuable.

This last time around I wrote basically a memo that was like "Here's where we're at, here's what's gonna happen, and here's why. I and here's why the money is actually gonna help do this." I thought that was a really useful exercise for us, at least... Again, it gets me out of like "We have a bug, or we have an angry user, or we have a thing that's delayed", that usually is what I'm thinking about.

**Adam Stacoviak:** Can you speak to any details around your most recent round, or is that off the books?

**Kurt Mackey:** So we have a term sheet that should close any day now... So we did raise an A round for Fly -- I mean, the money is not in the bank yet. The way these things go is once the term sheet is signed, other than fraud or a meteor, it's probably a done deal, but there's still a chance...

**Adam Stacoviak:** A meteor... \[laughs\]

**Kurt Mackey:** With a reputable VC, they have their reputation to worry about. So I would call it like we've 98% raised money, but the money is not there yet, so we're being careful to not really make a big deal out of it, or even do a lot of spending in anticipation of this.

**Adam Stacoviak:** Gotcha.

**Kurt Mackey:** We specifically raised money to start showing Fly to various -- we talked about developer communities earlier.. To start showing Fly to various developing communities. We've had a lot of success with the Elixir and Phoenix community, and we think we can replicate that with Rails and Laravel and Django and Node, and even like Shopify devs. There's a lot of interesting communities to look at, as long as we can sort of a) build something that's useful for them, which we're really close to for most of these, and just need to do this sort of last-mile work, but then b) actually advocate for ourselves within the communities. So that's primarily why we raise money. Also, because servers are expensive. That's the other part.

**Adam Stacoviak:** That's an interesting problem, too. You're obviously a developer, so speaking to other developers about why Fly might make sense for them, for their future, especially let's say Ruby on Rails, Elixir, Phoenix is a very sweet spot, because they're pretty similar in their stories... Not exactly similar in technology, but there's a lot of cross-over, even syntax-wise.

**Kurt Mackey:** \[01:27:52.18\] Almost every app that has a database needs the same infrastructure, and there's not a lot of variants there. I love selling things to developers though, because it's a very unforgiving group, and I'm like this, too; I hate being sold to. I don't wanna call people on the phone, I don't wanna do that stuff. So actually selling to them is a much more -- the process appeals to me, because it seems a lot more transparent and less sketchy. Getting a developer to use a product means --

**Adam Stacoviak:** There's no BS-ing.

**Kurt Mackey:** ...you can't get away with it for very long.

**Adam Stacoviak:** Precisely. I can concur. I also love selling to developers, not because they're easy, or hard, or whatever. I just like solving their problems, and I think there's so much minutiae out there in terms of solutions that when I said earlier about what we do here at Changelog - for me, it's just like, we get to put that velvet rope up...

**Kurt Mackey:** Right.

**Adam Stacoviak:** ...with the different brands we work with, different partners.. And we help developers kind of whittle down that list by being that first line of defense. Sure, it's an advertisement. Yes, it is an advertisement. They are paying us to do that advertisement. But before that even happened, we chose to work with them, because of our desire to whittle that list down for developers, to give them actionable choices we also believe in. Not just because they give us money; because we say no to people who just wanna give us money. We do not like transactional relationships at all, and we frown upon them and flat out deny them.

Our velvet rope is we wanna work with them, and then they also wanna give us money, and there's a relationship there and there's a partnership opportunity there. That to me is what I love most about selling to developers - it's helping them choose tools that are worth choosing. And there may be two or three or four - usually two or three; at least two - different brands to choose from in that space of solution... And it's up to them to choose which one fits them. That's not our choice. We help them by selecting the right brands to work with, brands we can believe in etc. I, to some degree, hate the word "brands", but that's the easiest way to describe companies... Companies out there solving problems.

**Kurt Mackey:** Yeah. And for us, what I think is so interesting about what we're trying to do is we think we've built something valuable for devs building with a database. Basically, what we have to do now is go find people in these communities, and then first order of business is to convince people who are kind of active in these communities to come work for us. It's like, "Look, we've built this thing. This is really important to this community. Come help us work on it for this community." I mean, I think it's probably not fair to call sales a lot of convincing people to give you money, even if they may not want to. It's not the fair way of calling sales that...

**Adam Stacoviak:** Right. 100% not a fair way, yeah.

**Kurt Mackey:** It's way farther on the spectrum of like -- it's almost an equal partnership between us and a particular developer. We actually have to build something that's valuable for them, and then they actually have to want it, or the money never happens.

**Adam Stacoviak:** Right.

**Kurt Mackey:** Maybe it's like 0% coercive. I think a lot of sales is a little bit coercive, even it's like 2%. A lot of it is like following up, and reminding people...

**Adam Stacoviak:** I think you have to be influential. I think you do have to -- you know, similar to a leader. You have to cast a vision. You have to inspire people to change. You have to inspire people to take that first step, and I think it's the same thing in sales. You have to be influential. I don't think you have to be coercive, I think you have to say "I wanna help you. This is how I can help you. Can I help you?

**Kurt Mackey:** Yup.

**Adam Stacoviak:** And if the answer is yes, here's what the relationship is in terms of exchange. I give you this, you give me that... And in some cases it's straight-up monetary, in some cases it's bartering... But it's really "I can help you. I wanna help you. Can I help you?"

**Kurt Mackey:** I have a hard time telling people no to their face, and salespeople are really likable... It's really hard for me to disappoint someone that I'm talking to...

**Adam Stacoviak:** Right.

**Kurt Mackey:** \[laughs\]

**Adam Stacoviak:** I'm super-open. I'm super-transparent when it comes to that kind of stuff. I will -- I have a hard time also saying no, but I will tell them why I'm saying no. I do sales, so I can empathize with their salesmanship or salespersonship. I'll give them critical advice. Not like criticizing their sales process, but like "Here's why I'm saying no. For now. And if you wanna get the deal, here's what you can go away and do and come back and have another opportunity."

**Kurt Mackey:** \[01:32:04.21\] It's actually funny, because I think it's one of the things I'm less comfortable with with investors, too... A lot of the actual sale is the relationship and kind of the trust of the relationship, and I think part of what I'm drawn to building for people is -- it's a lot more product-focused. The relationship with the product and trust in the product, and not a person involved, is like a fun thing for me to work on... Because it's the \[unintelligible 01:32:25.21\] I like Costco, and if I buy a car, I wanna go to CarMax, because it's like a buy-it-now price. There's just no relationship developing there... \[laughs\] Anyway. I'm not sure what that says about me, but that's part of why I like selling to devs.

**Adam Stacoviak:** Yeah. Well, I think the relationship, for me at least, is key. It comes back to - and I'm glad we got that point out - the velvet rope and optimizing. What am I optimizing for? I'm optimizing for - not deals, I'm optimizing for deals that can be long-term. Deals that can be long-term are built on valuable relationships, valuable exchanges in that relationship. So if that's what I'm optimizing for, then my velvet rope says "Anybody who does not fit that bill, or any brands or any businesses, dev tools, services etc. if they don't fit that mold, then it's (to use Derek Sivers' way) a Heck No." Or Heck Yes. I said that backwards, actually.

**Kurt Mackey:** Right.

**Adam Stacoviak:** It's a Heck Yes. Because it's either Heck Yes or it's a no. There's not a maybe or an in-between. I'm either excited about it and it fits, or it doesn't.

**Kurt Mackey:** I need to find a place like that that does car selling, that's like "No, we're not gonna sell a car \[unintelligible 01:33:35.04\]

**Adam Stacoviak:** \[laughs\]

**Kurt Mackey:** Anyway. I really enjoy buying cars. It's probably stupid. I don't like selling them, and I don't like owning them as much, but right now we need a new mini-van. This is the level of car I'm buying. It's not like --

**Adam Stacoviak:** CarMax is probably perfect then. I'm not the best person to give car buying advice out there. I do not like the process, and I'm a Ford dude. I've only bought Fords in the last ten years of my life, so...

**Kurt Mackey:** Fortunately, Ford is crushing it now, so it's gonna be easy to remain a Ford dude, I think.

**Adam Stacoviak:** I think so, yeah. I know we wanna talk about barbecue... I think we talked about barbecue before... I think, if I recall correctly, wings is your favorite thing to make? Recently, also my favorite thing to make. I have a big Green Egg. I love to cook them at like 325-350.

**Kurt Mackey:** Yup.

**Adam Stacoviak:** 350 is the high side. If it's 325, that's the sweet spot for me. About 30-40 minutes. I kind of like mine tender, moist... I do dry rubs... What's your process?

**Kurt Mackey:** I'm a lazy barbecuer. I have an electric smoker, which is great, because I can turn it on and feed it wood chips and it just works for as long as I need it to.

**Adam Stacoviak:** Right.

**Kurt Mackey:** Wings is the thing I do most often. My favorite things to smoke ever have been pulled pork, and then I smoked trout once and it blew my mind. I took my daughter to one of these trout farms, and just let her catch whatever she wanted, not realizing how much you pay a trout farm, per pound, when you take all these fish with you...

**Adam Stacoviak:** Yeah...

**Kurt Mackey:** \[unintelligible 01:34:55.08\] I was like, "I guess I'll just smoke it and freeze it." And it was freaking amazing.

**Adam Stacoviak:** Really?

**Kurt Mackey:** Yeah, it was really good. And freezing it was awesome, because you can just pull out of the freezer and basically thaw it and microwave it and it tasted almost like it was freshly smoked.

**Adam Stacoviak:** Wow.

**Kurt Mackey:** Yeah. Anyway, I probably should do trout again. But wings are my thing. I'm experimenting actually today, because I love smoked wings, but I also like incredibly crispy skin. I have a rub -- I've found a technique for baking wings in the oven that I'm trying to adapt, where you basically dry the wings out with baking powder on them in the refrigerator overnight, and then cook them low and then relatively high in the oven. So what I wanna try and do - I did the rub, I'm now gonna dry them out with baking powder, I'm now gonna smoke them like I normally do, and then I'm gonna move them into the oven at like 450 for like five minutes, to see if I can get the skin to crisp up...

**Adam Stacoviak:** Add crispiness, yeah.

**Kurt Mackey:** Smoked wings with crispy skin seems like the best thing ever to me, and I've never managed to pull it off, so it's a little bit of a challenge.

**Adam Stacoviak:** \[01:35:52.08\] So that's why I like my Green Egg recipe, because my method gives me that world without having to move it. I can do 325 for 30-40 minutes and I get both of those in that process. Now, I could pull them at like 25 minutes or basically at 30 minutes \[unintelligible 01:36:08.12\]

**Kurt Mackey:** I think there's a lot of people listening to this that smoke meat...

**Adam Stacoviak:** Believe it or not, we've had a lot of feedback about Backstage having some barbecueness in it; so they wanna hear us talk about barbecue, so that's why I threw this in here as a little taste of what could be to do maybe a Founders Talk with a barbecue flavor into it, pun intended...

**Kurt Mackey:** Yeah. \[laughs\]

**Adam Stacoviak:** But I could pull them early, essentially... Pull them out, and just open up the vents on the Green Egg and let it get to like 400-500, like a bake temperature. Put them back in for five minutes and get that bake. So I haven't tried that. I could try that. But I get mostly there, what you're talking about, just at 325-ish...

**Kurt Mackey:** Nice.

**Adam Stacoviak:** ...for 30 to 40 minutes. And it's a good crispy; I don't have it direct over heat, I have that deflector in there, all that good stuff. So it's indirect, actual \[unintelligible 01:36:53.28\] charcoal process... And it's essentially smoking in that \[unintelligible 01:36:59.26\] So it's a smoky/indirect... That's why I love the Green Egg. It's really just so versatile.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** I've just turned to that thing more often than anything, aside from a traditional real smoker. I have a Traeger, I have a gas grill... I basically never use those things. I only really ever use my Green Egg.

**Kurt Mackey:** The thing that got me to the smoker is when I do wings, I do like 20 pounds at a time, for the whole block...

**Adam Stacoviak:** That's a lot of wings, yeah. I couldn't put 20 pounds of wings on mine. That's way too much. I need a smoker in that case, or something different.

**Kurt Mackey:** So I've got one that looks like a little mini-fridge; it's got Bluetooth on it, so I can see it on my phone. It has four racks, so I can do a ton of wings in there, all in one shot.

**Adam Stacoviak:** Yes...

**Kurt Mackey:** Or I can even do -- I think I did two turkeys in it once.

**Adam Stacoviak:** I bet you can time it, since you have multiple racks... If you can time it where you put one rack in, and then sort of tier them... And you sort of put it in, where you can pull them out in stages, and pull them to a direct fire kind of thing, to get that last ten minutes of crispy... Maybe you could smoke them most of the way, almost like a reverse sear for a steak.

**Kurt Mackey:** Yeah.

**Adam Stacoviak:** And if you could tier your racks where you put them in where you can pull one out at a time and have that last five minutes for each, if you time the insertion into the smoker and then the exertion into, say, something direct, that can give you sort of tiered, 20-pound wings on the fly, so to speak.

**Kurt Mackey:** Right. On the fly. \[laughs\]

**Adam Stacoviak:** Additional pun intended. Boom. We got'em.

**Kurt Mackey:** Yeah. The baking powder is interesting, because there's apparently \[unintelligible 01:38:19.25\] So I'll let you know how it goes next time, how does that sound?

**Adam Stacoviak:** Please do. Yeah, follow up on me and we'll share something somehow; maybe on Twitter, something like that. If you tweet it, I'll retweet it, and we'll do it from the Changelog account as well.

Let's end with something new on the horizon. There's a lot of ways you can answer this question, but what's new, brand new, never told before about your future, Fly's future, whatever... Or what's lesser-known, that you can share more details about here at the close.

**Kurt Mackey:** I think the interesting new things are a) we're gonna start hiring a little more like crazy, to follow the fundraiser talk... Basically, a lot of developers thing Fly is an interesting thing to work on, so you should look out for full stack developer job posts, and even like the dev advocate job posts for different communities... Because I think it's a cool job, and some people tend to agree. I'm not sure I've told anyone that yet.

The product things that are interesting are we're launching more regions. One of the things we've discovered is there's these communities of devs in lots of cities that don't have a great infrastructure for them... Like Sao Paolo, Brazil will be available soon; \[unintelligible 01:39:25.22\] India also available soon. Both have hot developer communities and not a great place to deploy their apps... And both of those groups of people run apps that, again, have global audiences. We might have like South Korea, and Osaka, and other interesting countries and cities in the next year. But the for sures are Sao Paolo and \[unintelligible 01:39:46.16\]

And then Postgres is the default, I think, but the model we came up with is actually generally applicable. So you can run Mongo, you can run MySQL, you can run SQLite in a similar way. There's a fair number of more databases coming over the next year.

**Adam Stacoviak:** SQLite, a production database.

**Kurt Mackey:** \[01:40:05.03\] SQLite is freaking amazing. There's a guy creating a tool called Litestream for SQLite that would be worth having on a podcast sometime.

**Adam Stacoviak:** Ben Johnson.

**Kurt Mackey:** Yeah, that's him.

**Adam Stacoviak:** We've talked to Ben Johnson on the Changelog before about that. We actually talked about his choice to be open, but not open to contributions. We also obviously talked about Litestream, and SQLite...

**Kurt Mackey:** Cool.

**Adam Stacoviak:** We're actually having Richard Hipp back on the Changelog here soon. I think within a few weeks. I can check the calendar real quick... I think it's real soon. We have Richard Hipp on the Changelog in the early 200's. We recorded with Richard Hipp on July 28th, so usually it's a week cycle, so if you're listening to this sometime in the future, it should already be out. If you're listening to it in the near future, and it's before July 28th, maybe the first week of August we'll have that show shipped... But Dr. Richard Hipp is super-cool. We love SQLite. And even Ben Johnson, with Litestream, what he did there... I think he really helped SQLite be more productiony, I suppose, with having that real-time back-up. I can't describe the product fully, but it essentially gives you a production version of SQLite, because it's constantly being backed up with SQLite APIs behind it, and it's just rock-solid. And I think it's only S3 for now, but I think maybe he's opened it up to other object stores, too... I could be wrong.

**Kurt Mackey:** I think there's a fair number of them now, but the cool thing, the way we're trying to use it is for read replicas.

**Adam Stacoviak:** Oh, yeah.

**Kurt Mackey:** Basically, if you can get SQLite streaming exchanges somewhere, you can also create read-only replicas.

**Adam Stacoviak:** Rather than back-up. Oh, that's smart.

**Kurt Mackey:** Even like -- do you know the ghost blog?

**Adam Stacoviak:** Yeah.

**Kurt Mackey:** It works incredibly well with SQLite and read replicas on Fly, if you do the right elbow grease at the moment. But we want a better story for SQLite; it's so incredibly powerful and simple. It's like the right kind of simple, so it's very exciting for me, and hopefully at least 50 other people.

**Adam Stacoviak:** So you mentioned these are horizon things. Is there a place on the Fly website they can go to, the listeners can go to, to sort of like -- is this on the blog yet, is this just simply here on the podcast so far? Is it on Twitter? Where have you sort of talked about some of these details?

**Kurt Mackey:** So we haven't talked about much. We have a community Discourse that we run at community.fly.io, where we tend to talk about things very early. We end up putting everything on the blog or on Twitter after that, but the community is a nice place to tease people... Or even get like early users.

I think the first time we talked about Postgres on the community was in January, and we had people trying it out from the community in February, and then finally, officially shipped it last week.

**Adam Stacoviak:** Yeah. Launched in June. That's cool, yeah. That's a good timeframe... Tease in January and February, launch in June..

**Kurt Mackey:** Yup. So we'll probably do that for other databases and things.

**Adam Stacoviak:** Well, Kurt, I like you as a person, I like what you're doing as a business...

**Kurt Mackey:** Thank you.

**Adam Stacoviak:** I really appreciate you sharing your story here on the show. Really, I do. I love the times we get a chance to talk, and I'm glad this one was recorded, so we could put it out there for others to listen to, too... Because we've had some conversations that were good enough to be a podcast, but were just between you and I. So I'm glad we recorded one that shared more of your story and some of the details about the way you think, and the way you're building your business, and your likes or dislikes of fundraising, sales process, selling developers, and what the future is for your company. I think is just super-cool.

**Kurt Mackey:** Good.

**Adam Stacoviak:** I really appreciate what you're doing.

**Kurt Mackey:** That's great, I've enjoyed it. It's fun to talk to you all, and I love your podcasts as well. I love high-quality podcasts, so it's great that y'all are doing more of them now.

**Adam Stacoviak:** Yeah. We aim to please.

**Kurt Mackey:** Us, too. \[laughs\] No wonder it's fun.

**Adam Stacoviak:** That's right, that's right. Well, Kurt, thank you so much. I appreciate you.

**Kurt Mackey:** Yeah, thank you.
