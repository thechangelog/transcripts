**Jerod Santo:** Alright, we're here with Birk from Polar, which is an all in one funding and monetization platform for open source and indie developers, that's built entirely open source itself. Birk, welcome to the show.

**Birk Jernström:** Thank you so much. Happy to be here, Jerod and Adam. Excited to chat about open source and Polar today.

**Jerod Santo:** As are we.

**Adam Stacoviak:** He said it's slightly different than you, Jerod. You said Polar, he says Polar.

**Jerod Santo:** Oh, well...

**Adam Stacoviak:** What do you think, Jerod?

**Jerod Santo:** We're on different parts of the -- different parts of Earth. You tend to say things slightly differently.

**Adam Stacoviak:** I also say Polar, not Polar.

**Jerod Santo:** Did I say it weird, or who said it weird?

**Adam Stacoviak:** That's you, Jerod. It's you. I'm calling you out.

**Jerod Santo:** Okay, I'm the weird one out. I don't mind. I can be different.

**Birk Jernström:** I'm not even hearing the difference.

**Jerod Santo:** I didn't hear it either.

**Birk Jernström:** So I'm saying Polar...

**Adam Stacoviak:** It's a slight nuance. Listen back, listen back.

**Birk Jernström:** Yeah. It's a Swedish --

**Jerod Santo:** For those listening at 2x, they'll have no idea what we're talking about, because it was just way too fast.

**Adam Stacoviak:** Nick is like "What are you talking about? Nah..." Well, this is cool.

**Jerod Santo:** Yeah, for sure.

**Adam Stacoviak:** First donation to IPO. I'm jumping the gun a bit, but what's the backstory, Jerod? How did we get here, to have this conversation?

**Jerod Santo:** Well, I would love to hear Birk's backstory, of course. The backstory for this conversation was pretty much Mitchell Hashimoto, who we've known for a very long time, announced that he was becoming an advisor to Polar. And anytime I see somebody trying to help open source maintainers and developers make a living doing what they love, I think "This is awesome." So I basically just reached out to Birk and said "Let's do a show", and he said "Yes." I don't know, was there more to it? I think that was pretty much it.

**Birk Jernström:** Yeah. And I'm really excited to be on. I love the podcast. I know you guys have covered a lot on the open source topic before as well, so... Yeah, excited to just have like an organic conversation about open source, and how we can help the ecosystem get more funding, and for more people to do it hopefully full time.

**Adam Stacoviak:** So you're a listener of the show, too. That's awesome.

**Birk Jernström:** Yeah. I can't say I've listened to all the episodes, of course, but...

**Adam Stacoviak:** Well, you're not a listener then...

**Jerod Santo:** You're out of here. Get him out of here... \[laughter\]

**Adam Stacoviak:** Just kidding, just kidding. So how then -- if we're trying to get to how you began with this, why do you care about open source, and why do you care about specifically funding open source? Because there's different angles to sustain, and I imagine part of your story is the sustainability factor of open source. Why do you care?

**Birk Jernström:** Okay, so I think the reason why I care goes back to why I fell in love with computers to begin with. So a bit of a personal story, but my mom was an entrepreneur when I was a very, very young kid. And she ran a business, and we actually lived in San Diego for a few years when I was 6 to 9 years old. Unfortunately, that business ended up going bankrupt, and my mom took it pretty hard, and became depressed and had a rough time... So it was a bit hard at home when I was about 10 years old. So I kind of recluded into my own room as much as I possibly could... And Sweden had this great program at the time where they subsidized computers. So I was fortunate to have a computer in my room. And I was playing this online video game basically every single second I got, and then one day I accidentally right-clicked View Page Source, and that's when my future presented itself.

**Jerod Santo:** Oh, wow.

**Birk Jernström:** It looked like gibberish, but I understood -- I saw some sentence here or there that I recognize from the site... And my first thought was actually that I accidentally kind of hacked this game.

**Adam Stacoviak:** "I've broken it."

**Birk Jernström:** Yeah. So I just hit like "Save this file", shut down the computer, and expected the cops to just come like racing in any given second. But then I double-clicked that file again, and I saw a website locally... And then I just started to tinker, and breaking the site, and just fell in love with programming very, very early. And I was fortunate, my stepdad was a software engineer, and he saw this and he came home with some books... But very early on -- like, I didn't have the notion of open source. I don't think we really called it that back then. This was like '98. But there were a lot of these forums, where people were sharing code snippets, and these different libraries. Sourceforge, and all of these kinds of services. And through that, that's basically how I've become a self-taught developer. And so I really feel that I owe my entire career and my passion of coding to open source. It's the way that I've learned and become self-taught. So it's always been very near and dear to my heart.

**Jerod Santo:** So what about this particular platform you're building now? Was there a trigger moment? Was there a story that's more modern, that leads to Polar itself?

**Birk Jernström:** Yeah, definitely. So quick background on me... So I started a company called Tictail, that was an eCommerce platform, that was acquired by Shopify in 2017. '18, sorry. And so 2022 I was tinkering on this project on the side, and long story short, I need to build like an OAuth provider in Python. And this is something that I had actually done myself like 10 years earlier, at Tictail, the company that I started. There was an open source library at the time, so it took me about two weeks to build my own solution for it.

This time, I went to GitHub and I searched again, and I found this library called authlib. And an hour later, I had solved that same problem that took me two weeks to solve 10 years earlier. And I just -- this happens sometimes, right? You stumble upon a library that solves a problem that you've sold yourself sometime in the past, and you just recognize the effort and craftsmanship that went into this library.

I went through the code, it was much better than the one that I had implemented... So I fell in love with this library, I was super-grateful, and so I raced to GitHub Sponsors to show my gratitude. And I see that this library has thousands of dependents, thousands of commits, but it's getting like $5 a month in sponsorship. And I've always known the disconnect between the value given of open source, versus the value received from its creators... But I guess this time, it just really rubbed me the wrong way. And I just remember getting upset that they were getting like $5, and just thinking that "How can this still be the status quo?" and why isn't more being done to kind of just stir the pot and - I don't know, experiment more to see how we can change this, and create a pathway where independent open source developers can actually get decent funding.

So that was sort of the trigger moment, and the thought of just like "How would you go about solving this?" that threw me down the rabbit hole, that I haven't been able to leave since. And that was about a year and a half ago.

**Adam Stacoviak:** What caused you to execute? Because being impressed and being inspired and having a feeling is one thing, but then literally doing something, forming a team, and executing is just like -- that's kind of part of it, but not really. So what made you actually do it?

**Birk Jernström:** I think there were two things. So the project that I started was the reason why I needed to build an OAuth provider in the first place - so I had quit Shopify, and I was thinking about what I want to do next. And I wanted to build something from scratch again. And the idea I had at the time was fairly just like logical. It was just my brain trying to come up with an idea. And so I could always explain it and pitch it, but I always felt that my heart was never like truly in it.

And then this moment came where I just thought "Why can't we fix this problem of open source funding?" and it was the opposite. It made zero sense... But I just felt in my heart that this was a problem that I just got really riled up about. And so I just immediately started just thinking and exploring, like "How would you go about this? How could you solve this?" and I started getting some principles on how I thought that I would go about it. And then I started communicating that, talking to some open source developers... And the more and more I thought about it, the more convinced I became that this was something that I just had to do, I was excited to do.

**Jerod Santo:** So there's lots of different ways that people can bring in money around or with their open source work. And we've covered many of them over the years. I think even in one of your blog posts you were talking about Caleb Porzio's Sponsorware, I remember talking with Caleb when he first kind of invented the thing and realized that it might work for certain things... And that was very exciting, because it was like "Okay, here's a new avenue." But there's no great one where it's like "Everyone should just do this." And it seems like your strategy with Polar is "We're going to provide tooling for all of them, and you just pick and choose which one you want to do." Because you've got newsletters, you've got private stuff, you've got what looks like sponsorware perhaps... There's just a lot of different ways that you can execute currently inside Polar. Maybe talk about the current ways people can make money with Polar, and then we can talk about the strategy that you're employing there to build it out.

**Birk Jernström:** So to start, the way you can get money on Polar today is we have donations, we have classical sponsorships, so basically subscription tiers for people who just want to sponsor you without any quid pro quo whatsoever... Then we have membership benefits; so sort of imagine Patreon, but explicitly for developers and the open source ecosystem. So this is subscriptions, but where we build native, built-in benefits that you can offer. And those benefits are things like invitations to your Discord channel with a premium status, for instance; access to some premium posts, or newsletters, where you can provide content and updates, or deep-dives into your library.

And the next phase, which then brings membership benefits into pure sponsorware is access to private GitHub repositories as well, however many you want to set up. And then the last one is issue funding. So you can very seamlessly just embed the funding badge that we offer on select GitHub issues. So imagine you have a backlog or a roadmap of maybe 10 ideas that you would want to pursue for your project. You could badge them with our funding badge, and basically invite your community to help out fund those efforts specifically. So those are the ways you can get funding on Polar today.

The next step for us is more like pure commercialization. So I see it like two kind of chapters or two buckets of monetization tools, basically. So one is like patronage, which is all the ones that I talked about. And the next phase for us is like commercialization. So this is the ability to sell products, whether that's like digital downloads and digital files, to eBooks and courses, to full-fledged SaaS as well, and access to private packages, or license keys, and things of that nature as well. So those are the things that we're actively working on right now, and hope to launch in the next three, four months or so.

**Adam Stacoviak:** That's pretty quick.

**Birk Jernström:** Yeah. We're a very small team, but we have a very just clear idea on the roadmap \[unintelligible 00:15:57.18\] ahead, and just ship early, and listen to our customers, and iterate quickly, as fast as we can.

**Adam Stacoviak:** Well, as Jerod mentioned, there's many ways to fund, and I would say the Goliath potentially in the room is GitHub Sponsors. It tends to be the centerpiece when it comes to open source, because a large majority of open source happens on github.com. It doesn't mean they own it, but they've definitely captured the heart and ecosystem of open source, and we've mostly been happily hosting open source there as a community.

We think that Microsoft has done a pretty good job of its stewardship of GitHub. Obviously, we're fans of GitHub, we've got lots of friends inside of GitHub, so nothing against them whatsoever, but... I think the one challenge they've also had with Sponsors is how to grow it, how to get it to even bigger. There's great stories from Caleb -- what's his last name? You talked to him. I wasn't on that podcast.

**Jerod Santo:** Porzio.

**Adam Stacoviak:** Porzio. That story is a breakout hit, obviously, for GitHub Sponsors. What's challenging for that is that it doesn't do what you've done, which is provide waypoints in. GitHub Sponsors is like a surface level, and you've got to find out how the value permeates down into the person or projects.

Now, we just had a great conversation with the creator of Gleam. Jerod, again, help me with the name? Gosh...

**Jerod Santo:** Louis Pilfold.

**Adam Stacoviak:** Louis Pilfold. Sorry, Louis. You're my best friend. And he has getting great sponsorship on there. Gleam is very popular, he's getting great support there... But what I like about what you just said, at least phase one or part one, or product one - I don't know how you phrased it - is that it kind of gives you waypoints in. You let the developers or the creators dream about where this project could go, and just tag the issue or tag the whatever it might be with "Here's how we can use your support." With donations, or waypoints into funding the thing. That's uniquely different than GitHub Sponsors, or even Open Collective.

**Birk Jernström:** So my principles or my thought process on this - this is, to your point, Jerod, no project is the same as the other. Everyone's unique, and so Caleb has been very successful in coining the term sponsorware, and those success stories are amazing. And there's a lot more that could deploy that model. But not all open source projects can deploy that model successfully. And so I think with Polar we're basically giving you the toolkit and trying to optimize and build the best possible experience around all of these different ways, so that you as an open source developer or indie developer can sort of cherrypick and choose what makes sense for your initiative, but also what stage you are in your journey. Because I think that's key. If you take HashiCorp, or Sentry, or a lot of these commercial open source projects that have become very, very successful, I think a lot of them just start out as someone scratching their own itch, as like this passion project. And so you can start at like the far end of the spectrum of just getting that initial donation, and a token of "What you're doing is awesome, and I want to see this succeed" or like "I want to help push this forward." And growing from donations, to sponsorship, to like membership benefits, issue funding, sponsorware. And then if you want to go full on, adding that commercial layer as well.

**Jerod Santo:** One of your many methods includes something that gave me pause, which is automated sponsorship inside of READMEs.

**Birk Jernström:** Yup.

**Jerod Santo:** And I wonder if you know the story of Code Sponsor. Are you familiar with that platform?

**Birk Jernström:** No.

**Jerod Santo:** Okay. So Eric Berry began Code Sponsor, which was very much that as a feature... And nothing else, Adam, I think. It was specifically that.

**Adam Stacoviak:** It was that and some display ads, eventually. But it was mostly --

**Jerod Santo:** Yeah, display ads outside. But the nut that he cracked was - which was a brilliant idea for about six months - was "Let's put ads inside of your readme, because that's where all the guys are already." And there are people who embed sponsorships inside their readmes. You can do that. But GitHub took issue with the way that Code Sponsor did it, and basically shut it down. And I'm curious -- I mean, I realize that Polar has a suite of tools, and so that's just one thing you're offering, and so you're not exactly... You're hedged more than he was with that platform. But that makes me think, "Well, what if GitHub decides that Polar isn't cool, because it's duplicating some stuff that Sponsors does?" ...maybe it's doing stuff like readme, ad insertions that it doesn't like... I'm sure you are highly tied into GitHub APIs and everything else. Is that something that concerns you?

**Birk Jernström:** No, not at all.

**Adam Stacoviak:** "No." I like it.

**Jerod Santo:** Okay. I thought I laid out a pretty good concerning case. But tell me why.

**Adam Stacoviak:** You did. You did.

**Birk Jernström:** No, you absolutely did. So I didn't know the name, but I know of that story. And so I know that GitHub closed that down because it was essentially pure ads on one side of it, where people would just buy display property on the READMEs for --

**Jerod Santo:** It was developer ads. It wasn't like Google double-- or double-click? Add click?

**Adam Stacoviak:** Double-click, yeah.

**Jerod Santo:** I don't know. It wasn't that, where you could just put whatever, it was vetted developer tooling. A lot like Carbon, or what is now Ethical Ads, run by like the Read the Docs folks. So it was targeted, but it was ad insertion, dynamic ad insertion into readmes. So yes.

**Birk Jernström:** Yeah, exactly. And I think, to your point, that's still happens today, but I think the nuance, which is a very subtle one, is that you're a sponsor, and so you have your logo type represented as a sponsor, versus you're buying that advertisement placements...

**Jerod Santo:** Like real estate.

**Birk Jernström:** ...with the pure intent or like reaching a broader audience, even though that might still be the underlying reason why they're sponsoring. And so to your point, we have many different features that we offer, and so would it come to that, we don't stand on that hill alone. But on the second more important piece, we have very close relationships with the folks at GitHub. There's no competition or animosity there whatsoever. In fact, I would say it's the opposite, where both of us want open source to get more money at the end of the day. And the difference is that it's our singular focus to equip developers to get more funding, or even commercialize their projects.

And so we're an official funding partner, so you can use Polar in the funding.yaml, to make sure that it shows up nice on GitHub. And I've talked to them many, many times, and very transparently about our roadmap, and the way we position this readme automation is that it's automating the sponsors and the subscribers for your project, versus you buying in for that advertisement.

**Adam Stacoviak:** Yeah. That is slightly different. Very nuancedly different. Is nuancedly a word?

**Birk Jernström:** Yeah. \[laughs\]

**Adam Stacoviak:** Very nuanced to be different.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Do you think -- just because we're on the topic here I'm gonna ask this question... But do you think it's a possibility, considering that you've got this head nod, let's just say, from GitHub - do you think that because GitHub Sponsors has struggled... I mean, it's still doing amazing. I'm not saying it's bad at all. But there has been growth struggles that I'm aware of, with GitHub Sponsors. Is it possible they might wanna acquire Polar, and just turn you loose?

**Birk Jernström:** I mean, I wouldn't say it's impossible... We haven't discussed it. And I'm in full transparency... I wouldn't entertain that today. I am super-bullish and excited about the platform that we're building, and especially this next chapter on just continuing the path, and offering commercialization tools for developers as well.

So I think what we're building has legs, and I hope it can be a platform that has significant impact. And I think from GitHub's side, the right strategic approach is to just double down on their app strategy. I think, historically, they risk spreading themselves too thin, trying to do too much within one core platform, versus just like doubling down on what's core, and then offering great APIs and great entrypoints for dedicated companies to go deep on other verticals, which is not their core focus.

And I think that's the difference between GitHub Sponsors and Polar, where GitHub Sponsors is great because it offers donations and sponsorship, which is the most accessible and the broadest applicable type for all developers on GitHub... But I think it would be challenging for them to like really go deep on products, and SaaS, and these commercialization tools without spreading themselves too thin, or potentially even upsetting their customer base as well. That's why Polar is a great add-on for those who choose, and they can cherry-pick amongst the tools that we offer as well.

**Break**: \[00:25:07.19\]

**Jerod Santo:** So I love the tagline - Adam started with it - "From first donation to IPO." Is that real? I love the way it sounds, and so grandiose and awesome... But do you expect to ever take somebody from first donation to IPO? Because those are radically different things.

**Birk Jernström:** Yes. So as I mentioned, I worked at Shopify for three years when our former company Tictail was acquired. Shopify is an insanely inspiring company, and Toby Lütke in particular. And one of the most inspiring things with Shopify is that they've always internally talked about them being a 100-year company. So they operate on a very long time horizon. And one of the most inspiring stories when I worked there was this company called Albirds, which was a small company that started out, and then eventually IPO-ed, and saw that journey by building on Shopify. So I don't think "From first donation to IPO" is going to happen this year or next year; I think it's going to be -- give me maybe 15 years, because I think the rule of thumb is like 10 years for a company at least before they can IPO... So within a 15-year time horizon, that's the ambition of Polar.

And it goes back, again, to - most of these fantastic companies that are built just start out with someone scratching their own itch. Maybe just launching it as a sort of small gimmick on GitHub; it gets some traction, it gets some donations and sponsorship, and now all of a sudden you have that validation, and so you're excited to continue pushing forward... And we want to be the platform that just continuously breaks ceilings for you, so that you can easily just expand with Polar. And that we're the only platform that builds monetization tools for developers, and makes it as seamless as possible to go the step beyond just Stripe, or other payment platforms out there.

**Jerod Santo:** I love it. I hope you get there. I hope someday -- I guess you probably would IPO before anybody else would IPO. That would be a massive win, of course... But if somebody else could IPO on Polar, and you realize that dream, that would be a very good day.

**Birk Jernström:** Yes.

**Jerod Santo:** I would definitely cheer.

**Birk Jernström:** Me too. I think that is definitely the most exciting carrot and ambition that I can imagine to wake up in the morning and just continue iterating on the product.

**Adam Stacoviak:** Well, let's zoom out and then zoom right back in... Because to zoom out would be "Where would this apply?" Or how would it apply? And to zoom in would be to talk about Mitchell Hashimoto being one of your advisors; also launched Vagrant... I mean, he talked about Vagrant on this podcast, legit before HashiCorp was a company. Like, when it was just an open source project.

**Birk Jernström:** Oh, wow.

**Adam Stacoviak:** Yeah, that's how long we go back.

**Jerod Santo:** We go from first guest appearance to IPO.

**Adam Stacoviak:** It's true.

**Jerod Santo:** So here you go, Birk. \[unintelligible 00:32:04.19\]

**Birk Jernström:** That's a nice tagline. \[laughter\]

**Jerod Santo:** We never IPO-ed, but other people have after; not because of our show, but after our show. So correlation, causation... You do the math.

**Adam Stacoviak:** That's right. That's right. So zoom out, zoom in... But let's apply it. Mitchell obviously is bullish of you all. He's an advisor, but he also created Vagrant, which spawned the company called HashiCorp, which did IPO. It was largely built on an open core model, open source. There was a recent acquisition... That's not the point of this piece here necessarily, but the fact that it did go from a developer with an idea, solving problems, open source, to founding a company, finding product-market fit, getting market share, adoption et cetera, open source, to IPO. How would you apply Polar to something like -- or does that even make sense to apply it to a Vagrant-like story, to kind of quantify truly the dream of first donation to an IPO?

**Birk Jernström:** Yes. I think we certainly still have work to do to support that entire journey, but --

**Adam Stacoviak:** Well, dream with us. Don't imagine what's there now. Imagine what could be there.

**Birk Jernström:** Yeah, exactly. Yeah. So let's imagine - and I'm not speaking for Mitchell Hashimoto here, but to play out this case... Mitchell builds Vagrant as this side project. He's scratching his own itch, and he launches it on GitHub one day. And I know the story - he launched it on GitHub... This is - what is it, 10 years ago, 12 years ago now, right? More. So it was an entirely different ecosystem at the time. There was not the same amount of GitHub stars, there was not GitHub sponsorships... So I don't think he had that validation at the time. But hopefully today he would have started to be able to receive donations and sponsors, and people showing gratitude towards Vagrant, and for him to explore offering like membership benefits, issue funding, or even sponsorware for early access to the cutting edge of the Vagrant development itself... To expand on the patronage model to the point where hopefully, like Caleb, he could reach a point where it's plausible that he himself as an indie could do this full-time.

But then there's obviously a second part to the story, right? ...which is that Mitchell and his co-founder, they decided to commercialize the project to build a company and to raise venture capital behind that company. And I think if you look at all those businesses, starting out from open source, there are a lot of challenges that they face, in like how they can build monetization, which - the monetization tools themselves, how you can charge for subscriptions, or sell products, or licenses... They're all sort of the same mechanics, but operating those and operating it in a way that makes sense and still connects to the open source ecosystem and the open source codebase that you have requires a lot of infrastructure. And a lot of these companies today are building that in-house themselves, and they're venture-backed, so they can do it. But that is the next phase for Polar, where "How can we provide those tools?", so that Mitchell, beyond just "Now I can work on this full-time myself, with my patrons, basically... How can I commercialize this? How can I sell licenses? How can I offer subscriptions?", where Polar is the merchant of record, and handles VAT and sales tax internationally, and all of that headache, where I'm chatting with lawyers and accountants and dealing with these boring stuff, so that developers hopefully can just focus on what they do best and code the product, and just plug and play with Polar without any ceiling whatsoever.

And I think the analogy you can make there is you can still do -- you can have venture backing; I'm not at all opposed to that in any means whatsoever. But then when you're commercializing, I think you could imagine what we're building with Polar as the next phase is more like say Paddle, or even Stripe, right? But how can we take that a step further, and just make our APIs and our tooling that much more seamless, efficient, and developer-focused, and focused on like open source and indies, than those platforms have historically, so that we're the best choice to build out monetization with.

**Adam Stacoviak:** Very good. Paddle's the -- I've used Paddle a couple times. I have a couple pieces of software, MacOS apps that I purchased via the Paddle platform. There's not a lot of value to me as a consumer though in that regard. It's certainly helpful to the developer and the company to not have to build yet one more thing, and manage yet one more thing... But as a consumer of that software, it's just been generally like "Meh, whatever. It's just a processor." Not "just" like "bad", but there's no value truly to me, aside from knowing my indie Mac devs can make their apps and keep moving fast, and not build things they shouldn't have to.

**Birk Jernström:** Yeah. I think that's right. Paddle, Lemon Squeezy, Stripe... It's mostly value -- it's b2b, right?

**Jerod Santo:** Right.

**Birk Jernström:** I think the difference is, especially when you're the merchant of record, you are managing that end relationship, that invoicing, billing, and so forth. So I do think there's a layer... A good analogy is probably like Shopify and shop, originally, where Shopify is the platform for merchants, and then you add shop, which we were building, which is sort of the consumer layer. And it starts with just being that sort of authentication for consumers, where they can track all of their orders across the Shopify ecosystem, and how that eventually then expands into its own sort of marketplace as well. I think that's a future for Polar, but that is much further out.

**Jerod Santo:** Our future.

**Birk Jernström:** Yeah.

**Adam Stacoviak:** Well, I was gonna mention it, because I can't think of the name of it, but I know -- I can't even remember the person's name, but before there was Shopify... Oh, Storenvy . Does anybody here remember Storenvy ?

**Birk Jernström:** Yes.

**Jerod Santo:** I do.

**Adam Stacoviak:** Okay, so Storenvy predated Shopify, and really tried to unify that whole thing you just said, which was Shopify and shop. That whole story was played out once before. It did not have obviously the success that Shopify has, otherwise Shopify would not be Shopify. And a good friend of mine - can't remember name in the moment, because old brain and whatnot, and that's just how it works, but... Storenvy was really cool, where it had -- you could be an indie maker, similar to like the Etsy way; you could be what Shopify is today, just be someone who wants to build a store, they will give you the storefront, they will give you all the tooling, and all that stuff... But they will allow the customer experience to have this unified cart to say "Everybody gets -- the creators get this platform, but we'll unify the creators on the platform with a major storefront, that says "If you want to shop shoes, you can go shop all the shoes that are on our platform" et cetera." And to have one unified cart, unified checkout. And that was a hard nut to crack. I mean, that was -- they didn't fully crack it. It was successful, but - what a capital-intensive business. You had to like ramp up engineering... This is maybe slightly ahead of its time in terms of even leadership... But you mentioned store of record at least twice now, and you mentioned - I don't think so yet, but three people in the company.

Now, store of record for a global developer community who wants to build on sustainable funded open source in all the ways you said you could do sounds daunting when it comes to merchant of record. Can you explain what's required to scale that to do that?

**Birk Jernström:** So being merchant of record, what that basically means is that we're integrating Stripe, and Stripe Connect specifically. And so we're the platform account that all transactions go through. And then our customers or developers using Polar, they can connect Open Collective, or their own Stripe accounts that we then transfer that funding to through payouts, once it's ready to be paid out, essentially.

And so legally speaking, as well as in terms of money flow, customers are buying these products or services through Polar. So they're getting the receipts from us, we're in charge of managing VAT in case the sale happens in Europe, from say a Swedish customer... And these are things that are like massive headaches for individuals... Especially when I talked to a lot of open source developers, people who wanted to explore sort of Caleb Porzio models, they have been concerned doing that with GitHub sponsorship, because they know that if you offer value adds as part of your sponsorship package, technically speaking, you're offering a service, which makes you liable and required to capture sales tax or VAT for those transactions. And this is not something that GitHub handles, and so you face some risks there as a developer.

And so we take that on, which means we get all of the payments processed through Polar, we capture VAT on a quarterly basis, I work with accountants and do all the reporting and accounting work to make sure that that's filed appropriately, and work with lawyers to make sure we are compliant... So yeah, it is a lot of work, and I would not want any individual to have to bear that burden, and so that's why we're doing it instead.

**Adam Stacoviak:** I think Open Collective did a similar thing when it came to like fiscal sponsor, right? That's a thing in the nonprofit world - when you donate, you have to have an entity that can take the donation and deal with a similar thing, essentially, this fiscal sponsor.

**Birk Jernström:** Yeah.

**Adam Stacoviak:** How long will you bear that burden?

**Birk Jernström:** How long we'll bear that burden?

**Adam Stacoviak:** Yeah. Like, if it's such a pain in the butt... I mean, can you/are you excited about that burden?

**Birk Jernström:** Yes and no.

**Jerod Santo:** Excited about it...?

**Birk Jernström:** No, but as the CEO, and sort of as a strategy, I'm very excited about it, because I think -- I've talked to so many open source developers wjere the risks they face offering services through GitHub sponsorship is too scary for them to try. They're grateful that we're doing it, and that has opened the door for them to actually try these models. And so I am 100% convinced that the world is sort of broken in that way, in terms of legislation hasn't followed up with how the internet works. We're just distributing software, and selling to everyone globally, from day one... But now you need to deal with VAT across Europe, GST in like Australia. No single individual can ever do that themselves and stay sane on this side of a full-time job. And so from that point, I'm really excited. Then personally, do I enjoy the work of chatting with lawyers and accountants and all that is required to offer this? Not always... But it's an awesome value-add to provide as a platform, and so that's why I'm excited.

**Adam Stacoviak:** Have you reached fit yet? Is this worth it?

**Birk Jernström:** Product-market fit?

**Adam Stacoviak:** Yeah. Are you still kind of getting there?

**Birk Jernström:** Yeah, I would say we're getting there. I would say we've reached community fit, if that's a good word. We're getting a lot of excitement and buy-in and developers who I look up to and are amazing that are on the platform, and loving what we do. And I think the challenge, which has always been the case, is for us to just build out this suite and just help more and more of these developers really become successful and able to work on this full-time. There are developers on Polar now that are making more than they did with other offerings in the past, but we still have a long road ahead before we completely pave that path. But I think this next chapter is very, very exciting to open up more doors and more capital to flow in for developers.

**Jerod Santo:** How do you guys make money?

**Birk Jernström:** So we take a 5% revenue share of all the transactions that happen on Polar. That's our cut, and that's how we make money.

**Jerod Santo:** No monthly fees, no hidden taxes...

**Birk Jernström:** No monthly fees, no.

**Jerod Santo:** Stripe is required, though... So you're still paying Stripe fees?

**Birk Jernström:** Yes. So it's 5% plus its payment processing fees. So now we have Stripe, so it's their fees. In the future we'll offer PayPal and others as well. In full transparency, I am evaluating how we can offer a model where I want to make it completely free, so that there's no risk for independent and open source developers to try this out. So that's the 5% commission piece. But I think if you're going to offer commercialization and for companies to IPO on this one day, you need to be flexible here as well. And so taking Shopify as the analogy again, I do see a future where we could offer SaaS tiers where you can pay a SaaS fee, and transaction fees go down along with it as well. Those are things that we're exploring for the future, but key for me is that it's accessible and available without any upfront payment required for people that are just starting out.

**Adam Stacoviak:** Well, you can tell you worked at Shopify, because -- it's not so much a negative to say copy and paste, but it's like "Let's look at this model that worked here, and let's apply this model to another place I care about", which is not the negative copy and paste, but it is a lot of inspiration in terms of you're not there with the SaaS models yet, but they're possibly right around the corner, and the 5% post fees is similar to the way that Shopify makes money, and the way that the purchaser, I suppose, in this case the open source developer, can curb that number down or up, is to kind of offset it with a monthly fee, or even a yearly fee.

**Birk Jernström:** Yeah. So Adam, you mentioned Storenvy, and I'm very familiar with Storenvy. So as I mentioned, I started Tictail, which was an eCommerce platform, and we also built a marketplace, so very similar to Storenvy. And we were acquired by Shopify to basically lead the consumer efforts at Shopify, which became Shop app as we know it today.

One of the key learnings for me as part of the Tictail journey was - we were very young when we started that, and we basically tried to innovate everything we touched. So everything we tried to have a unique approach to, or "How do we want to do this?", whether it's hiring, or perks and benefits for employees to the product as well. And one of the learnings for me is you just have to be focused, especially because we are three people, and just being ruthless about what's the core thing for our mission, which is to allow developers to get paid building their passion. And for all the rest to just copy what's working in the market. There's no point for us to innovate in these regards, when others have proven a pathway that has been successful in other verticals. Then we can steal, for lack of better words, great ideas from others, so that we can just focus our thought process on the unique things about Polar and how we build these services specifically for this audience, which is open source and indie developers.

So yeah, probably having worked at Shopify, seeing how they work with a very long time horizon in mind, is how I approach it with Polar as well. We're not going to do the marketplace thing, and being very, very mindful about not trying to do everything in a short timeframe, but rather build something really amazing as a platform first. Solve that, and then that opens up doors later on in the future. And copy business models that have been proven in similar markets.

**Adam Stacoviak:** Have you taken any funding? Is this venture-backed?

**Birk Jernström:** Yes. So it did raise a pre-seed about a year ago.

**Adam Stacoviak:** Pre-seed, huh? It's like before the seed?

**Birk Jernström:** Yeah, exactly.

**Adam Stacoviak:** I love fundraising these days. There was just an A round, or a seed round, or angels. Now it's like pre-seed?

**Jerod Santo:** You didn't raise a pre-pre-seed this time? You decided not to go for the pre-pre-seed?

**Birk Jernström:** No... No pre-pre-seed.

**Jerod Santo:** Okay. Maybe next time.

**Birk Jernström:** Yeah, exactly.

**Adam Stacoviak:** Who was in that seed round? Can you share numbers? What can you share about, I suppose, the starting capital to make this possible?

**Birk Jernström:** Yeah. Happy. So we raised $1.8 million from Abstract Ventures and Mischief Ventures as well, along with about a dozen angels as well, that has been with us now for a little over a year since we raised that round. So a company of three people; we have decent amount of runway left, which is a great position to be in. And we built out a lot of the foundations, but the big next step is the commercialization piece, which we are excited to start gradually unveiling in the coming months, and expect to have more flushed out within four months, say. So I'm really excited about that, and getting that out, and then being able to support a lot of different cases.

**Adam Stacoviak:** It's coming this fall, basically.

**Birk Jernström:** I think we're going to launch products maybe next month already; like hosted downloads, the ability to sell files, or programming books, or what have you, next month as well. So a lot of the building blocks will happen gradually and incrementally, but I'm really excited... Three or four months from now, basically what we've done over the past few weeks is taking a step back and just a blank canvas on. If you would commercialize these things - like, forget about all of the platforms that exist today; how can we do that so that you can do it like 10 times faster than any offering out there today? And that is just so much more enjoyable, and designed for this ecosystem. And the things that we've come up with, and how we're shaping that are super, super-exciting, that we have internal prototypes for... And I think those pieces, sort of the packaging is something we'll launch in three months.

**Jerod Santo:** Can you wet our palate?

**Birk Jernström:** Yeah. Intentionally... I don't want to --

**Jerod Santo:** Get a little bit more wet.

**Adam Stacoviak:** Just pour some water on it.

**Jerod Santo:** Give us a little bit of a for instance. What was an insight that you've had that - not saying you're building exactly this, or whatever, but what are some of these insights, that would be so much faster, so much better to commercialize software today?

**Birk Jernström:** So one is just, if you look -- okay, so yeah, I'll share one, which is... If you look at all of these different platforms for monetization and charging, it's designed very much from their product in mind. So you sign up for the service, you go through this dashboard, you need to learn how the dashboard works, you're setting up these products, and eventually you get to the point of like "Okay, how do you actually package this and sell this to your end customers?" And we've taken the complete opposite approach of developers first and foremost. We just want to get our hands dirty, and write some code, and build the product that is our product, that we're shipping to our end consumers, and sort of inspired by how we're forking repositories on GitHub, how you can just immediately dive into code, and coding your service that you're selling to your customers, with all of the monetization pieces readily available to enable directly in your development environments... And for the dashboard, and all of that jazz to sort of be secondary, and something that you then manage that through, rather than having to set it up and do a lot of housekeeping upfront.

**Jerod Santo:** Sounds cool.

**Birk Jernström:** Yeah, it is.

**Adam Stacoviak:** "Yeah, it is..." I love that response. \[laughs\]

**Jerod Santo:** Well, I think flipping the perspective changes a lot of things. I mean, obviously you're just teasing here, you're not giving us full details, but I do know what a mind shift it was for GitHub to put the source code right on the homepage... Versus Sourceforge, which I would use previously, which was like where you go to download your software, not to build it and collaborate on it. And so as an open source consumer back then of people's cool projects, I knew that you could click around and find discussion forums, and people behind the scenes building the downloads... But all I knew was "You go here for the downloads." And then GitHub, which was very similar in function, took a completely opposite approach, and was like "No. You land on the homepage, you see source code, and a readme." And that was just the different angle of the same thing, completely changed it in my mind. I was like "Wait a second... I can actually contribute to this. I can read it, I can understand it."

And so I think likewise, perhaps, taking an opposite approach that you're describing - although as vague as you're being about it, I can only guess - hopefully you have that profound change, and really I think spark a lot of productivity, and hopefully some monetization as well.

**Birk Jernström:** Yeah. I think I heard Mitchell - this was not a conversation Mitchell and I had, but I heard him chat with someone else about it... But like the story around TerraForm, and how they were designing the products that they were building in HashiCorp, where Mitchell would basically, on a plane without Wi-Fi, just build like a dummy CLI on what's like a great developer experience, and the API that this CLI should have... And that's what they defined first, and then worked their way back from there. And very much that's the approach we're taking here, which is just forget about what the product looks like today. Just, what's the intent that we're building here for developers to commercialize? How would they want to do that in their own projects? And from there, what do we need to shape our products and APIs to be able to support that?

**Adam Stacoviak:** I can't wait till you ship it, so I can see what you're talking about. It's gonna be so exciting.

**Jerod Santo:** It's the best vaporware of all time.

**Adam Stacoviak:** It's like, I want to be excited. I want to be excited with you, and I'm trying so hard to be following you... But it's so unclear.

**Jerod Santo:** That's alright...

**Adam Stacoviak:** But I'm feeling it. I'm feeling you, and I'm feeling it.

**Birk Jernström:** Well, there's some -- I'm being vague because there's some very critical pieces for this to work, that I would say has not -- really, I haven't seen any other player do it out there in the market today... And so we have some internal prototypes where we have sold some of these pieces... But we still need to make sure all of these pieces can be glued together for something that's compelling as a total package.

**Adam Stacoviak:** Right. It's like middle-out. You can't explain that to people. Then everybody else would just start doing a middle-out compression algorithm and try to be \[unintelligible 00:55:05.01\] and beat you to the marketplace. No, thank you.

**Birk Jernström:** \[laughs\] Yeah, exactly. Don't want a Hulu on my back.

**Adam Stacoviak:** That's right. You don't want a Hulu on your back, that's for sure.

**Birk Jernström:** Yeah.

**Adam Stacoviak:** So it might go one layer too deep, but this satiates my personal thoughts... Because there's developers out there eventually gonna be doing something like following their dream, like you did... And you pitched, you got 1.8 million, you got two venture funds to buy into your idea, 12 angels... You're telling us this story, but what was it that clicked for them to say "Okay, let's fund one more platform out there?" And I don't say that negatively, because we're asking you questions to help differentiate between you and what the market's gonna do. How do you differ from GitHub Sponsors? How do you differ from Open Collective, or ethical advertising, or ads, or whatever it might be? How do you differentiate how you're gonna help developers sustain and create funding models? What did you say to them? What was it that was like "Yeah, here's mills"?

**Birk Jernström:** I mean, the true story is that I said a lot of things... But I would say the core thing is the way I saw it was - so I'm Swedish, and so one of the companies that we're very proud of here is obviously Spotify. Huge success story, right? But before them, we had PirateBay, which also came from Sweden. Complete opposites.

**Adam Stacoviak:** That's right.

**Birk Jernström:** And music was in this phase where everyone thought music was dying; everyone just expected it to be free. No one's gonna pay anything for it. And here came Spotify along, and just like "There's a new way." And that became a success story. And they've flipped that narrative all the way around. Like, I think Shopify now is doing more than the entire music industry was doing back when they originated and started out. And I think venture capital fundamentally is taking these moonshot bets that can become something game-changing, and define a new market. And I think that's what Polar really had going for it.

There's a lot of players out there that are pitching great ideas, but probably great indie ideas at the end of the day... And and for us it was just "You have the developer ecosystem and the open source ecosystem, which are immense and incredibly valuable to the entire ecosystem of technology, but we haven't cracked funding and monetization yet." And I want to build a platform that can crack that code. And if you're able to do that, I think that can have a really meaningful impact for those individuals, as well as for Polar as a business. I think that's fundamentally what excited VC's about Polar and what we're building.

And then there was slides about all of the things that we talked about, like these different monetization tactics that we would offer eventually, and... But we launched and we just started out with issue funding. And so we've been just iterating one funding tool, and now soon one monetization tool at a time, to just continuously learn from users and continuously adapt, to hopefully solve it for as many people as possible.

**Break**: \[00:58:24.26\]

**Jerod Santo:** So the Polar platform itself is open source, it looks like Apache 2.0 license, building on top of the GitHub platform, which itself is not open source. And Polar backed by Mitchell Hashimoto, whose company was open source, in a sense \[unintelligible 01:00:44.06\] but recently re licensed to business source, or functional source. I can't remember which one they used. Curious your thoughts on Polar itself being open source. Are you afraid of somebody coming in and just copy-pasting Polar, and renaming it, and competing with you? What are your thoughts around that?

**Birk Jernström:** So my thoughts around that is we're operating very much in like a blue ocean, in the sense that there's not a lot of competition in our market, because there hasn't been a market... That's the one we're trying to create. And so I definitely foresee that once Polar becomes successful, certainly we'll have more competitors, and maybe we're competitors with Paddle, or Lemon Squeezy in a couple of months as well. But I'm a big believer in if we get the community, that's the differentiation. The code itself is not the secret sauce of Polar. It's the innovation that we have, what we're building out, the vision for the future... So even if copycats comes along, that wouldn't concern me in the short term.

Having said that - I mean, you mentioned HashiCorp. I think there's a lot of cases where they've changed licenses, and I know there's been huge debates about this in the ecosystem... I think it's really healthy and good for our ecosystem that we're starting to have these debates, and that we're starting to experiment a lot more, in any given industry. It's not going to be perfect, and it's going to be rough. We're going to be upset, and s\*\*t will happen. But I think the key thing is that experimentation happens, because I think it's been quite stale for a long time, where it's just been donations and sponsorship. And I think you have like free open source, and everyone who's like free in all senses of the word, and then you have commercial open source. And I think we need to see this as a spectrum, and allow for people to operate within that spectrum, without animosity on either side. And I think it's really, really important that we can experiment to figure out commercial open source, and celebrate when open source developers get paid to do what they do, rather than holding them back. I think that's an old concept, from the old Microsoft versus Linux days from the '90s, that in my opinion would just hold us back for the future open source.

**Jerod Santo:** Do you think this is a winner-take-most market? Meaning like similar to Shopify. You know, there's Amazon and there's Shopify, and... Is there anything else? I don't think there's pretty much anything else. Shopify is very much the platform for people who are selling online. I guess you could say "Well, there's Wix", and there's other things that are kind of multipurpose, that also have the eCommerce component... But it's kind of Shopify is the winner of that particular game. And Amazon's a bigger winner, of a bigger game. And that's about it. And I think, in many ways, GitHub and GitHub Sponsors is kind of -- well, GitHub is definitely the winner-take-most of the developer world. Of course, GitLab also doing very well, more on the enterprise side of things, less on the indie side of things. But what about this? I mean, I guess you have Patreon, you have... I guess Twitch is a different thing. I'm trying to think of like creator platforms. You have Patreon, then you have the big social media platforms themselves... I don't know, your thoughts into that place, of like "Do you think Polar hass to get --" Because if it was, and had network effects, that would guard against clones, that would guard against copycats, if you had the actual network effects going for you.

**Birk Jernström:** Yeah, exactly. Yeah, I think for a lot of those businesses you have those network effects that eventually leads to like there's just one winner in the market. And I think that can and is likely to play out here as well in the future. What I also just believe in is in terms of how we're just shaping products these days - like, historically there's been this, you build a generic solution, eventually, that just works for the broadest possible market as possible. And now with the advances in AI, I'm very bullish and believe in more verticalized software, and that's very, very personalized.

So I think there's a winner take all, but I think those markets are going to be a lot more verticalized and specialized in the future, than generalized, as they've been in the past. And maybe that's a copout answer, because it's sort of like standing in both camps... But I do believe in the notion of just like the pies themselves growing larger, rather than fighting over a zero sum game at the end of the day, when it comes to like the creator economy, and just helping more people make a living off of their passions.

**Jerod Santo:** Are there subverticals inside software, that would niche down even beyond developer? I'm thinking InfoSec, researchers... I'm honestly asking; I don't know the answer to this. But is there a point where Polar becomes the generic one, and there's also verticals that get carved out from there?

**Birk Jernström:** Yeah. Game dev, for instance. How do you build -- it's actually a question that I'm thinking about, but I could certainly see that if Polar becomes the Shopify for this genre, which is obviously...

**Jerod Santo:** You would love. \[laughs\]

**Birk Jernström:** ...something that I would love, I could certainly see that another Birk would be like "Well, I want to do this, what Polar did, but specifically for game devs."

**Jerod Santo:** Yeah, that's a good example.

**Birk Jernström:** "And here's other ways that--" I think there's two types of innovation, fundamentally. Either it's a complete technical innovation, which is a game-changer (take advances in AI now), or it's just about making existing things a lot faster, and more seamless. And you had like payment service providers back before, and now you have these merchant of records like Lemon Squeezy and Paddle, which is just, again, a way to make it faster for the end user. And now you have Polar, which is sort of this vertical version of that. And so there might be a vertical of Polar's vertical in the future as well, to just make it even more seamless and even more faster.

**Adam Stacoviak:** I saw authorize.net for the first time in like a long time, in an email...

**Jerod Santo:** Oh yeah, I remember authorize.net, yeah.

**Birk Jernström:** Yeah, that's an old one.

**Adam Stacoviak:** I was like -- this is back in the day. You used to have to call your bank. This is pre-Stripe, you know?

**Jerod Santo:** That was '90s, wasn't it? Or maybe early 2000s.

**Adam Stacoviak:** Oh, it was such a mess. Such a mess. We've come a long way.

**Birk Jernström:** Yeah. And it was probably the bee's knees back then, because it had like an XML API, and...

**Adam Stacoviak:** Oh yeah, it was it was innovation. You didn't have to call your actual bank.

**Jerod Santo:** It was certainly XML API. I remember using it. It was. And SOAP maybe even. But it was enabling insofar as it took you from zero to one. It was a painful progress, but you could actually do ecommerce, whereas you couldn't otherwise. I mean...

**Birk Jernström:** Yeah, exactly.

**Jerod Santo:** ...it let it happen. It made it happen. It was just so painful.

**Adam Stacoviak:** I was on your homepage... I guess maybe your only page, aside from maybe sub-docs, and stuff like that... But this section was on -- the headline said "Serving world-class developers", and I couldn't help but notice our friend Andreas Kling, Serenity OS. And so as we're in this conversation, I'm sort of digging around... Can we use this project and Andreas as an example of how a success -- I mean, it's on your homepage. They're there for a reason. Can you share more of that story, your relationship with Andreas and Serenity OS, and how -- because I went to Serenity OS and clicked the sponsor button on GitHub, and it pops up and says "Hey, go over to Polar." So what you mentioned with being -- I forget what you call it... Like a funding source with GitHub is obviously true, because you said so. But it does work, yeah.

**Birk Jernström:** Yeah.

**Adam Stacoviak:** Help me understand what I'm seeing here when I go to Polar.sh/serenityos, and what their story is. What are we seeing here? What is the story for someone like them?

**Birk Jernström:** Yeah, absolutely. So for those listening that might not know, just a quick -- like, Serenity OS is this project run by Andreas, a Swedish guy who's building his own operating system since like four years ago, five years ago. And now also Ladybird, which his own browser as well. And to be fair, it's a community now of thousands of developers contributing to the project. But it's this absolutely wonderfully ambitious and insane project that one person took on, that just is one of the best examples of where open source shines, and what's possible. So that's Andreas and Serenity OS.

And so September of last year I came in contact with Andreas, and we had issue funding. That was the only feature we had at Polar at the time. And the next chapter that we were in was what we called rewards, which is how can you take the funding that you're getting for these issues and easily split it with contributors that are helping out solve that specific feature, or whatever it might be? And Andreas had I think about around the same time just received $300,000 in sponsorship. $100,000 from Shopify, amongst others... And so he was in this phase where now he had like a larger pool of capital, and he brought on two engineers full-time to work on Serenity with him... But he just started thinking about how can he distribute the funding that he started to get more and more of, to more of the contributors that are helping out with Serenity.

So we sort of met at this perfect timing... So Andreas was actually part -- I shared Figma designs with him on how rewards would work, and got his feedback, and we've sort of designed that feature together in many ways. And that's how Serenity is primarily using Polar. So they have select issues for Serenity and Ladybird, where contributors can help out and they would get 100% of the funding that the community funds those particular issues. And it's been working really, really well for Serenity and the team. And the reason why they switched so that it points now to Polar from GitHub is because of that as well. Like, Andreas loved the idea that with Polar he can highlight more developers that are part of the project, and help distribute that funding, versus centralize that funding to him alone.

And I can share that idea, which is something we're working on now, but we're taking that concept of rewards and really centralizing it throughout everything we're doing at Polar. So inspired by the 1% climate program that Stripe launched, we're going to introduce like a 1% OSS program, where the idea is if you're building commercialization, and you're like building or wanting to build a HashiCorp or a Sentry, whatever it is, that you can automate and recognize "Here's the upstreams, and here's my dependencies that I'm dependent on", and automatically that gets distributed to them. You can set it at 1%, you can set at 10%, 20%, 50%, whatever you want. But that's I think a very key distinguisher from other platforms as well, where hopefully that will open up the door that like commercialization can push even more capital through, as part of the model being set up to distribute the income from that to your transient dependencies.

**Jerod Santo:** That's super-cool. I also like your issue splitting feature, which seems similar, where you're actually taking the funding for an issue and you're distributing it amongst participants to multiple people, because the maintainer may not be the one doing the work etc. And so I think that's all really cool. That's the kind of stuff you can build when you are focused on developers vs. genericism.

**Birk Jernström:** Yeah, spot on. We've also integrated that feature quite deeply. So the issue finding embeds very seamlessly on the GitHub issue itself, to make that a delightful experience. Rewards works by - you know, we're polling and looking up all the contributions that are referenced to any given issue, so that when the issue's closed out, we can suggest "Here's the people that contributed to this effort" for the maintainers very, very easily; just split it out with them.

**Jerod Santo:** So do they have to be signed up for Polar in order for that to work, or how does it work if a person just happens to contribute to Serenity OS and Andreas says "Split this with them", but they're not on Polar?

**Birk Jernström:** Yeah, so that works. So basically, Andreas badges an issue, and maybe he sets a funding goal for it, and himself and others, they contribute funding towards it. Let's say, Adam, you chime in and you open up a pull request, you close it out and solve it... So now Andreas sees that Adam closed this and solved it, and he can just confirm that it's completed... And Adam, you don't have a Polar account at this stage, but Andreas rewards your 100% of it, and creates a GitHub comment seamlessly through our dashboard, that basically just pings you out and says "Hey, you now have this reward waiting for you on Polar. Sign up", and automatically, once you've signed up with your GitHub login, we automatically obviously verify the identities, and just top up your account with that reward.

**Adam Stacoviak:** So it sits in an account. Can you explain where this money sits at then? Because you mentioned a lot of money that Andreas got, $300,000... How did that -- can you walk me through the flow of money, and account it sat in, and how that money was added to my account or topped up my account? Explain to me where the money sits.

**Birk Jernström:** Yes. So just very, very important to make clear, now I'm not talking about Andreas' $300,000, because that is something he has received. I don't know where that's housed.

**Adam Stacoviak:** Okay, that was outside the model. Okay.

**Jerod Santo:** Tell us exactly where the money is, Birk. We wanna know where the money is.

**Adam Stacoviak:** "It's under his pillow...!"

**Jerod Santo:** \[laughs\]

**Birk Jernström:** No, I'll definitely tell you... But I just want to make clear that I'm not in this case speaking about where Andreas keeps his money, so to speak. So on Polar, in this scenario that I painted, let's say, Jerod, you're funding an issue, $500. As I mentioned, Polar is the merchant of record, so that $500 is paid to Polar, and arrives into our platform account on Stripe. That's where it sits, and that's a liability on our books. And for you as a maintainer, and any eventual contributors, once that issue is closed out, that money becomes something that you can get and withdraw. We have our own ledger internally where we keep track of like "Who do we owe money from this liability that we have?" So the moments when you say "This issue is completed, I want to split the funding." Then in our ledger we basically say "Jerod --" Like, if you said 50/50 split, Jerod, you're gonna get $250. Adam, you're gonna get $250, minus our 5% fees. And that then is showed up in your Finance tab on Polar, where you at any given point can just hit Withdraw, and that's when we issue a payout or a transfer and payout to your connected Stripe account.

**Adam Stacoviak:** So to accept the money from a reward, you mentioned Stripe. Is Stripe the only way currently? Is that the way it is now?

**Birk Jernström:** So we do have a partnership with Open Collective... So you can point to a fiscal host on Open Collective instead of a Stripe account.

**Adam Stacoviak:** Okay. It's like a donation, basically.

**Birk Jernström:** Yeah. So most of our users are doing Stripe, even though we do offer the Open Collective route. In like complete transparency, this is on our GitHub as well, but I definitely foresee and I'm excited about expanding our payout possibilities in the future. Like PayPal, direct ACH payouts as well to your bank, to just scale that more internationally, and to make it more convenient as well for developers.

**Adam Stacoviak:** Yeah. That's awesome. So I went to Serenity OS on Polar, pulled the first -- I think they're called top issues... I just pulled the first one. That's libweb. It says "Add support for border radius in GPU painter." It goes on to explain who opened the issue, how much has been funded, it's got some avatars there, it kind of explains some things... It mentions that contributors get 100% of the received funds after fees... And then on the right-hand side is the option to go ahead and fund. You've got Fund, you've got Contribute... I'm not sure what the difference is between those two, but I guess probably Contribute Code. That makes sense, now that I clicked the button. It didn't reveal what it said. I do understand what it means to be a contributor, thank you very much... But I can go and fund this --

**Jerod Santo:** I think when you put in funds, you kind of are contributing, aren't you?

**Adam Stacoviak:** Well, that's why I couldn't understand what's the difference between funding and contributing... But yeah.

**Birk Jernström:** Yeah, that's good feedback. Sorry, go ahead.

**Adam Stacoviak:** But it gives me the chance to choose my funding amount. It defaults to 20, because the minimum is 20... But I can certainly change that to a couple hundred bucks. What I can't understand so far looking at this UI is if it's been -- I think that means it's been 500 funded. There's no requests on a certain amount, so I could just be throwing money onto the bucket, and whoever eventually does this just gets this pool of money. I don't know what the value is necessarily of it... I'm not even sure what my question is, but I'm just looking through what the user experience is, and I'm like real-time analyzing in a way, and to some degree not doing a great job... But it's not a bad UI. But you're giving this on-ramp to folks, they understand what the issue is, they understand how much it's been funded, and they can give money, or as we just mentioned to be confusing, they could also contribute, that is not funding. It's actually code, potentially.

**Jerod Santo:** To give Birk a little bit of credit here... Next to the Fund button there's a heart icon, and next to the contribute button there's a terminal.

**Adam Stacoviak:** There is.

**Jerod Santo:** And so they are different; they give you some more affordances to know which one is which.

**Birk Jernström:** I hear you. I mean, I think this is awesome. Like, by no means have we perfectly sold everything. So I really just enjoy hearing your first impressions here...

**Jerod Santo:** \[laughs\]

**Birk Jernström:** ...even though it's somewhat painful. \[laughter\]

**Adam Stacoviak:** Sorry about that.

**Birk Jernström:** No, no, not at all. And so yeah, I think, as you mentioned or kind of referred to just quickly there... So if you set up Polar for your project as a maintainer, you can select \[unintelligible 01:19:03.04\] complete control on which issues do you want to badge, so that people can fund towards it. Now you can have it open-ended, so that anyone can fund anything, and there's no specific goal, or anything like that in mind. But you can set a funding goal as well, which is very compelling, and helps with some conversion as well. Like, we've seen people set like $500 as a funding goal, and then you get maybe like $320, say, from three backers... And then someone swoops in and donates $180 specifically, just to sort of like "Let's get there."

**Jerod Santo:** Yeah.

**Birk Jernström:** So that's certainly a helpful tactic, but you don't have to deploy it. And I think this goes back, again, to -- it's just a key principle of ours... Like, this is not issue bounties for open source. I'm very much against them. We've designed issue funding and rewards with maintainers in mind, and putting them in the driver's seat. So some maintainers, they don't want a funding goal, because they don't want to necessarily say that "By X amount I promise to do it." They want to leave it open-ended, and so we give them that complete control and flexibility.

**Adam Stacoviak:** That makes sense. Let's dig into this UI one more layer, and then I want to get your opinion on why you're so against bug bounties, because I think that's --

**Birk Jernström:** Let's go so far that you actually fund it.

**Jerod Santo:** Haah! \[laughs\]

**Adam Stacoviak:** That's where I'm going. That's where I'm going, honestly.

**Birk Jernström:** Nice. Nice.

**Jerod Santo:** \[unintelligible 01:20:26.17\] Adam's money.

**Adam Stacoviak:** It was at 100 bucks, I took it back down to 20, because your explanation now just scared me... So now I'm scared a little bit, so it's down to 20 bucks. I don't really care about this... I want to put some money on it, but I'm not -- whatever, I'm just kidding around.

**Birk Jernström:** At $10,000 there's a golden ticket.

**Jerod Santo:** Oh, that's a cool feature.

**Adam Stacoviak:** Right. The Fund This Issue button, which is big and blue, doesn't become really blue; it can't become until I put my email there. Which then sort of unlocks this new UI down below, which lets me choose how to give the money. Not just how much and the button; it gives me the chance to say how much, what is my contact details, and the primary way to do that is my email address. And then it unlocks Card, Apple Pay, Bank... You can even affirm this, so if you want four interest-free payments, 50 bucks to this thing, you can certainly do that, it seems. Cash App Pay is an option, which - I do love Cash App. I'm a big fan of Square and Cash App. Klarna I believe is also four interest-free payments of $12.50 to fund this... I lied, I put 50 bucks in, so you're probably doing the math... And then AfterPay, which is another Square/Cash app ecosystem world. Four more interest-free payments of $12.50... So I could, on credit, fund this thing and go into debt if I wanted to.

**Jerod Santo:** Let me just go on record and say "Don't do that, people. Don't do that." If you can't afford it, don't fund it. Go buy some groceries, or pay your rent.

**Adam Stacoviak:** Thanks, Jerod. Yeah, I was gonna point that out... Because that's why I brought that up. I want to go through the funding methods, but I was surprised to see that I can on credit fund this thing 50 bucks. So let's break all that down, I guess.

**Jerod Santo:** "Let's break all that down..." \[laughter\] Take that and run with it, Birk.

**Birk Jernström:** Yeah, so I think ideally a lot of that would just be shown up front. I'm a big believer that - just give people the entire form, so that they know what to expect and what's required to complete it. There is a unique challenge here, which is, as I mentioned, we're integrating with Stripe, we use payment elements as an integration there to create payment intents... And so we need to capture your email to basically create a complete payment intent, and process that payment.

Because you're coming in from GitHub, and you're unknown to us at this stage - we obviously don't have your email, or anything of that nature... So we need to capture that before we can then generate that payment intent, and as a result, show the checkout flow, essentially, with the payment details. And I think that's something we can and will optimize even further down the road. But if you paid once on Polar and you have a customer account with Polar as a result of that, immediately all that will be filled out, so it will be even smoother in the future as well.

**Adam Stacoviak:** Gotcha.

**Birk Jernström:** You mentioned a lot of different payment options...

**Adam Stacoviak:** More than I'd like, actually. But I'm okay with that for the moment.

**Birk Jernström:** No, no, it's fine. Yeah, I understand that feedback as well. I think, as developers, we love choice, and we initially launched just with like credit cards, like Visa, MasterCard... The standard. Very, very quickly, the feedback we got was "Hey, can you add Klarna? Can you add Cash App? Can you add X, Y and Z?" And so we did. So we've expanded to all of the requests that people had... But I will be honest and say I think the way that's presented could be a bit nicer. That's the standard payment elements from Stripe, where all of those are shown. It's supposed to have some intelligence behind it as well, based on where you're located, to show you the most commonly chosen options... But yeah, it can get a little bit busy. That's not necessarily a bad thing though, when it comes to payment options. A lot of customers see this as a good thing, and it helps with conversion. We've certainly seen -- you know, people do use Cash App, and not so much the Klarnas of the world... Which, to your point, Jerod, is good.

**Adam Stacoviak:** I concur with Jerod, too. I think I was surprised, which is why I walked through it. I really wanted to walk through it to explain that part, but not so much to say "This is bad" necessarily... But it was unexpected to have an option to pay this generosity I want to give to the world via credit.

**Birk Jernström:** \[laughs\]

**Adam Stacoviak:** You know, via interest-free payments to a behemoth, like a firm, which is just basically everywhere. I don't disagree with the options. I do disagree with just one more way to go in debt... Gosh. I mean, honestly, there's some people out there that would have deep heartstrings because of whatever reason, and give more than they might be able to, if it's an option. Now, that's their choice. You can't change what their choice is as an individual and a human. But at the same time, I do think that there's a line that you can draw there morally, to be like "Well, maybe this doesn't really make sense for our purpose." And you can sort of \[unintelligible 01:25:31.14\] if you'd like, but... I do like choice, I do like Apple Pay. Since you're from the land of Shopify, I'm a big fan of Shopify's checkout process. I almost elevate my trust for the merchant or the place I'm buying it from if they've made a good choice, which I believe Shopify is a pretty good choice... And if they especially enable payment types like Apple Pay, which - I'm not a fanboy, but I'm a user. And so if I can pay with Apple Pay, I prefer it online, just because it's just so simple. My finger does the pushing on this biometric key they gave me, and I'm going to use it, okay? It's just too easy. So I would definitely lean on that side as you explore this UI more.

**Birk Jernström:** Yeah. I hear you, and I think the way I want to approach it is to give maintainers the option and more control again...

**Adam Stacoviak:** True, yeah.

**Birk Jernström:** ...like, which options do they want to show up in the context of their real estate, which is how I see this... But I wouldn't go so far as to say we're actively going to take the decision of not allowing the Klarnas or the Affirms of the world. Klarna is a Swedish company, and I don't know what the experience is in the US, but in Sweden there's certainly that criticism against Klarna as well. There's people that should not be spending with Klarna, and getting in debt with it... And as Jerod said, do not do that. Never. Right?

**Adam Stacoviak:** He was pretty \[unintelligible 01:27:01.02\] with his response. He's like straight on "Don't do it."

**Birk Jernström:** No. Never. Never, ever, ever, ever, ever.

**Jerod Santo:** That's just my advice. But I understand that you give it as an option, you know...

**Birk Jernström:** Yeah, because for me in Sweden, I always buy with Klarna if I can.

**Jerod Santo:** Just to support the company?

**Birk Jernström:** No, not at all.

**Jerod Santo:** I don't understand -- okay.

**Birk Jernström:** It's just for the convenience.

**Adam Stacoviak:** I think it's beyond the interest0free payments though. It's a platform for shopping. It's similar to the way you might use Apple Pay. You put your payments there, and you leverage them... It's different. I just know they have a whole different -- beyond the interest-free payments.

**Birk Jernström:** Yeah. So for me in Sweden, it's at least that when I buy stuff online - this could be like grocery shopping, to clothes, whatever it is - it's that I can pay and manage payments through Klarna, centrally. And then I have all my receipts and everything that I need through Klarna. And I'd much rather prefer that, versus like my credit card, which is then just kind of anonymized transactions on my bank, and I need to go to my email to dig out these receipts. It's just not as convenient as Klarna is for me in Sweden. But to be clear, again, I would never use Klarna to pay off something that I wouldn't be able to afford.

**Jerod Santo:** So buy now, pay later is just one of the things it offers. It's not the entire deal.

**Adam Stacoviak:** Right. Like even there's a Learn More spot there, which comes with the modal, and it says there's four payments of $12.50, at least in my scenario, where I put $50 into the input. And the other option is Pay Now in Full. So I think in different parts Klarna is a platform for payments, not just for interest-free payments, whereas I only know a firm to be -- their only option to me that I'm aware of is just simply legit credit. I mean, it's a version; it's Buy Now, Pay Later. It's four interest-free payments of $12.50, but I've created a debt that I've got to pay over multiple months. I may miss, there may be fees, there may be goons coming to get my kneecaps, or whatever... Who the heck knows how deep \[01:29:06.23\] everywhere... But it's just not your "Hey, here's the cash I have. I'm being generous, I want to fund this libweb add support for border radius and GPU painter issue. There you go." It's a little bit more hairy, and we're camping out here I think a little slightly too long, but...

**Jerod Santo:** Maybe a little bit too long.

**Adam Stacoviak:** A little too long.

**Jerod Santo:** Now, just to go a little bit longer... What if this particular feature enables your business to finally turn a profit, and you need it to be done, but you don't have any cash right now. And if this feature lands, then you're about to take off like a rocket ship. And if you could just buy now, pay later, your life might be saved from utter destruction.

**Adam Stacoviak:** $12.50 later, per month.

**Jerod Santo:** \[laughs\]

**Birk Jernström:** Yeah, I guess the TL;DR from my stance is like I think give the maintainers the control, so that they can offer all of the things that we can offer through Stripe, so they have the complete flexibility. I think it's always a bit dangerous when you make these decisions on behalf of all of your customers... Because I agree, you can use these services, and they are used in ways that are not beneficial or great whatsoever.

**Adam Stacoviak:** Yeah, that's true.

**Birk Jernström:** But like Klarna, it's a great service that a lot of our Swedes at least are using to pay for stuff immediately, just do so in a convenient way. So this is where it gets super-tricky for me, I think... It's like, give maintainers the tools to make the decisions they're comfortable with, but I'm not comfortable saying "I will block these payment methods because of my own political opinions."

**Adam Stacoviak:** Well, it's not politics, but it's a personal opinion. It's not politics.

**Birk Jernström:** Yeah, that's -- yeah.

**Adam Stacoviak:** I mean, I guess it's personal politics... Sure, blur the lines a bit. But -- so here's maybe a vote for. Just me playing the advocate for this...

**Jerod Santo:** We're not moving on. Okay.

**Adam Stacoviak:** ...is what if -- you know, I'm willing to take on that as a responsible human, this four-month payment, and I don't have the cash, but I want to fund this thing, because I'm in the community; I'm talking these people in Slack, or in Discord, or some other real-time channel, and this is just simply the interface I go through to enable. I guess that's okay. That's up to that human to make their own decision. I may have an allergy, and Jerod may as well, to leveraging credit, or a debt in this way... And that may be my choice. That's not everybody else's choice. I do think there is some danger in there, but if you're doing it responsibly... If it's the maintainer's choice too, then so be it.

**Birk Jernström:** Yeah, yeah. And if it makes you more comfortable, Adam, we have yet to have that case where someone actually leverages something --

**Adam Stacoviak:** Well, let's not have any horror stories about somebody overfunding open source and having major troubles. Let's move on to your issue with bug bounties. How deep does this go? Are you gonna pound your fists, are you gonna get red in the face?

**Birk Jernström:** I can, for sure.

**Adam Stacoviak:** Okay. Do what you've gotta do. Tell me.

**Birk Jernström:** Okay. Okay. So there are two core issues with bounties in open source. At least how they've been historically executed. So one thing is just like bounties as a concept is great, but bounties only really work when there's two parties involved. There's the person setting up the bounty, who is also the person in charge of like the quality assurance of the deliverable, and obviously the person that delivers the goods that the bounty is set up for. A classical example is the Western movies, right? You set up a bounty. You capture this bad guy, $10,000. That's the US government that says "We'll verify that you did the right thing, and then pay our $10,000." In open source, the way bounties has always worked is that someone just puts up money for any issue, without the maintainer's involvement, awareness or approval, typically on a marketplace where others can then work on those issues for that bounty. And this always leads to the same thing, where you see these GitHub issues where this maintainer, the poor maintainer, who is already suffering from not having enough time, and just getting constant streams of issues coming in... Now he has a lot of different contributors coming in, that are just there for the incentive of getting the money. And if you look at those issues, it's always the same case, where it's a race towards that cash, and so the contributions are of fairly low quality in comparison to someone being there for the right incentives... And it's a competition and a race amongst the contributors.

I think that's the second problem, which is it's often a marketplace approach, where it's these directories where you can sort of sort issues by the amount that you can get... Which, again, as soon as someone then funds it, $1,000, you're going to have 5 to 10 developers swooping in there to try to get to this price... And I don't think that that is what open source maintainers need. Historically what we've seen is just that they hate this, and they turn it off. And so we took a very drastically different approach, which is just "Let's put the maintainers in the driving seat here, and let's rather make it about how can we fund their efforts with the backlog and all of the issues that were pouring onto them, and then give them the tools to then distribute that funding with their existing community of contributors?" ...rather than setting a marketplace that attracts people just for the sake of that money.

**Adam Stacoviak:** It's kind of like -- I don't know how it is in Sweden, but it's kind of like garage sales, right? There's a certain type of person... And I go to garage sales, so I'm not saying like socio-economically type of person, but just generally... It brings people into a neighborhood that don't otherwise belong there, and sometimes they're not there with the best incentives. Sometimes they're there to get a deal, sometimes they're there to look at the neighborhood, because now they're able to be there in a way that gives them less side eye, less shade eye, I don't know, whatever it might be. And we've had some bad things happen in different neighborhoods over time with garage sales. It's an invitation to people who generally don't belong there, because they don't live there, they're not of the community, they're not there contributing, and giving, and supporting, and all the things... They're there simply to sort of take away or be there in a sneaky way, and do something that's nefarious, it's not cool. It's kind of like that. It kinda reminds me of that.

**Birk Jernström:** Yeah. I mean, this is something that I very strongly believe in, and I chatted with hundreds of maintainers in building Polar, and designing what it should be... And so far, it seems that this has resonated a lot. We get a lot of credit for going that different route, and that's why there's a lot of developers that are using issue funding, that wouldn't and have opted out of other bounty programs in the past. Even though it would probably be like a quick buck to do it, right? Maybe. But I just fundamentally believe in building for that developer and the maintainers for the long term, rather than doing some short-term optimization.

**Adam Stacoviak:** Gotcha. Let's give a prescription to some folks. We've got lots of types of folks who listen to this, from people who contribute, people who want to fund open source maintainers, folks who are looking at this thinking "Oh my gosh, I'm so glad this conversation happened. They went that deep into that UI... Holy moly. Thank you so much...!"

**Jerod Santo:** They made it past the "Buy now, pay later" part.

**Birk Jernström:** \[laughs\]

**Adam Stacoviak:** Right. Give some direction to the folks who want to look at the platform you're building as a creator, or a maintainer, or whatever terminology you leverage to define that person... What's a good first step for maybe three different people - the creator/maintainer who wants to support their project, and do what Serenity OS has done, and Andreas has done, to somebody who wants to look for the projects that might be on there because they like the way they can be a part of the community and give... And maybe the other one - I don't know who it might be. So two, maybe, or three, if you can. Give me some direction.

**Birk Jernström:** Yeah, yeah. So for all of the maintainers out there, I think the key thing is -- I've spoken to hundreds of different companies as well, of how we can get more companies to invest in open source. I'm very bullish, and we can get into that as well, but... I believe that the route to open source sustainability for individual maintainers is to look at all of the things that they're doing beyond the free code that they're giving, that is value-adds that they're already giving today, such as support, issues that they're crushing, to like Discords that they're creating and managing... And that's where I think you can take a step back and think about how can you package this in an offering where you can actually get people to sponsor you to get these additional benefits, to also benefit you as well.

So I would start small. Like, sign up to Polar, start using issue funding. If that floats your boat, start using donations and sponsorship. But I would encourage you to start offering some membership benefits. And we've designed them to make them really compelling without breaking the principles of open source in the sense that you can have paid memberships, where you can offer premium posts, premium content and insights to what you're building, and your projects, and your progress, what have you. We can also set it up to be early access, so that automatically those newsletters become publicly available after, say, a week.

And so if you're offering a Discord today, and you're writing some updates, set that up as a tier where you're giving early access to those updates, create some roles on Discord where there might be a channel where those people that are sponsoring you, you can chat with them and maybe pick their brains earlier, and so forth. Just give those types of benefits. Because the truth is -- the paradox of open source is that it's immensely valuable, but the value is also in commoditizing the value. And it's really hard to get money from something that has been offered for free. But recognize that you're giving a lot more on top, and experiment with Polar, how you can capture that into more funding with our tools, while still being in the best interest of your community, without completely going proprietary, of course. Striking that balance.

The other audience - who was that? That was like people who wanted to contribute, and more on like the backer side.

**Adam Stacoviak:** Yes. They want to support open source, and they see this as an example, like "Hey, I can't go easily and just look at all the options for GitHub Sponsors", for example. There's no index of -- GitHub is the index. Same with Polar. I can't go to an index either and say "Okay, who's on Polar? Who's on first?" kind of thing. I don't know. I can't figure it out. But I want to give some money, or I want to support open source. Or maybe even that contributor might be an OSS fund or something like that, where they're like wanting to divvy out some things. Give them some examples of like those people; they're not creators and maintainers that need support, but those who want to give support.

**Birk Jernström:** So that was one of those things that when we started out with Polar, I put an equal emphasis on that side of things. So the holy grail when I chat with a bunch of open source maintainers is "How do we get businesses to fund our efforts?" And so we spent a lot of time on how can we build tooling for businesses and individuals to see their dependencies, and fund across it. And don't get me wrong, I think there's a lot that can be done there in the future, but that is where we've made a deliberate choice of "Let's stay focused on building that platform first and foremost", of just equipping the developers with all the tools to improve the funding and monetization for their own efforts. Because they can already reach their audience through GitHub and these other networks, where we can expose that tooling. Because if we would get stuck sort of in discovery - I think the drawback of that would be that we wouldn't offer as compelling and value-add services that you can upsell, and that would put a cap on what the potential could be for you as a developer.

So this is where I think the partnership with GitHub and just recognizing that everyone is on GitHub, like "How can we surface those value-adds that we help developers easily offer through there?", rather than trying to compete and build our own network today.

**Adam Stacoviak:** What's left, Jerod?

**Jerod Santo:** Just take over the world. I think that's the only thing left to do.

**Adam Stacoviak:** That's it.

**Jerod Santo:** \[laughs\] IPO, baby.

**Adam Stacoviak:** IPO!

**Jerod Santo:** I love it. I'm very excited. Every time we talked about GitHub Sponsors with folks from GitHub Sponsors, I say "What about issue funding?" And they always say, for whatever reason, they're not doing issue funding. And so I'm just excited that you've tackled that particular aspect, and it seems that as other ways to fund come out and are invented and proven, Polar just adds that to the suite of options. And I think that's just going to be great for so many people.

**Birk Jernström:** Yeah.

**Jerod Santo:** So I'm excited, I'm wishing you the best, I hope that you become the Shopify of open source developer monetization tooling.

**Birk Jernström:** Me too.

**Adam Stacoviak:** \[laughs\] \[unintelligible 01:42:26.03\] I like that.

**Birk Jernström:** I'm excited about the future. This was a fantastic, fantastic conversation. And Adam, I really appreciated the UX roast... \[laughter\]

**Adam Stacoviak:** Kind of anytime...

**Jerod Santo:** I didn't expect a deep dive.

**Birk Jernström:** Yeah, yeah. Jokes aside, I genuinely appreciate it. It's nice to hear people's first impressions. There were a few things in there that I'll take back to the woodshed and polish up the product further.

**Adam Stacoviak:** Gotcha. Well, it came from a good heart. I want to see the best for you. And we obviously have been in the trenches with developers for so long, and we love them, obviously. We are them. Any thing like you're doing, the way you begin with your mom and your initial story, to loving open source, and now executing to support ways for open source developers to maintain and sustain... I mean, I just want the best for you, so obviously, I'm gonna go deep, and share what I do and don't like.

**Birk Jernström:** Thanks, man.

**Adam Stacoviak:** And I liked a lot of it. I liked a lot of it.

**Birk Jernström:** Nice.

**Adam Stacoviak:** I can see iterating. We're fans of iteration, too. We're software developers. Our first show sucked, okay? I mean, it was good content, but the show sucked. And look at us now. Still just slightly better.

**Jerod Santo:** Yeah, I was gonna say... \[laughs\]

**Adam Stacoviak:** Just slightly better.

**Jerod Santo:** Still completely subject to rabbit holes that last for hour...

**Adam Stacoviak:** And always mentioning Silicon Valley. Alright, Birk, thank you so much. Good on ya. Polar.sh, everybody. Check it out.

**Birk Jernström:** Yeah, of course. Thank you guys.

**Adam Stacoviak:** That's it. Bye, y'all.

**Jerod Santo:** Yup. Thanks, Birk.

**Birk Jernström:** Thanks, guys.

**Outro:** \[01:44:01.12\]

**Jerod Santo:** I was joking about how deep that we had gone on... And I made that stupid joke about -- I can't remember what it was, but it was basically like "Let's stop talking about this." And then Adam's like, "And...", then he went a whole other step deeper, and I was like "Are you seriously still going?" \[laughter\]

**Adam Stacoviak:** I thought it was you who went a layer deeper. Wasn't it you?

**Jerod Santo:** Well, mine was a joke though. I was like "What if somebody --" Yeah, I gave a hypothetical of a person who just needed the Buy Now, Pay Later just to make their business take off.

**Adam Stacoviak:** Oh yeah, I did. And I had to advocate for it.

**Jerod Santo:** And I thought that was gonna be the last word. I was like "Let's move on."

**Adam Stacoviak:** I thought about a way that it's actually useful, and I was like "Well, maybe this..."

**Jerod Santo:** It was very convincing to you? You were like "You know what, maybe somebody --"
