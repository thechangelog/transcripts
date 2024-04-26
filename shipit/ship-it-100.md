**Justin Garrison:** Hello and welcome to the 100th episode of Ship It. Autumn, 100 episodes went by really fast, didn't it?

**Autumn Nash:** I know! It's like we just started.

**Justin Garrison:** For anyone that's new here, I'm Justin Garrison, and this is Autumn Nash, and we are the new hosts of Ship It. So thank you so much for Gerhard, for doing the first 91 episodes of Ship It... Because we just got to finish off these last 9 and make it to 100.

**Autumn Nash:** I'm super-excited about the hundredth episode though.

**Justin Garrison:** I've been looking forward to this one since we started the podcast, because I was reaching out to Paul and people from Bluesky, and I was like "We need someone to come on the show."

**Autumn Nash:** Paul cracks me up. I've wanted to meet Paul for forever, so I might have fangirled like a tiny bit. Super-excited.

**Justin Garrison:** It was not only a great interview, but I learned a lot of things, and also, I liked that it was slightly different than some of our other episodes maybe that are a little more infrastructure-focused. This is more about like mobile apps, and websites, and how to maintain and ship and run that software as well... Because that's what Paul does at Bluesky, is he maintains or is on the team of maintainers that builds the mobile apps. And that was just really cool to hear from him, because this isn't a deep interview about like the app protocol, or Bluesky networks, or decentralization. It was like "No, we build real stuff on top of this."

**Autumn Nash:** Not just that, but I think it's cool because we've seen Paul for so long on Bluesky, and it's a product that we both actually use... So I think that makes it even cooler. And it's really cool to -- I don't know, he's really passionate about what he does. He's very passionate about Bluesky, so it's really cool to see someone building something that they're so passionate about.

**Justin Garrison:** Yeah. And I don't want to spoil the interview, but he's been doing decentralized stuff for quite a while, and this seems like the first one that really was successful, and able to "Hey, I work on this thing, and also, you might have heard of it." And that's really fun. That's just like a great place to be as a developer who's been doing this over and over again, with different projects.

**Autumn Nash:** Yeah. And how cool is that...? It's rad to be able to work on things that you're passionate about, and then get your big break and it's such a success... Your passion projects, not just something that you're doing because it's paycheck. That's really cool.

**Justin Garrison:** If Paul's listening to this, just - hey, slow down on the Red Bulls, and just get some rest some time.

**Autumn Nash:** He's so sweet. For somebody who has a big online presence, and that has achieved things, he's not all like tech-broey. He's like such a nice person.

**Justin Garrison:** So we'll get that interview in just a little bit. First, we want to go over a couple of links that we've found this week that are interesting, or we think you might find informative. And I'm gonna go first, because this one relates exactly to the interview and the episode today, which is an article called "How does Bluesky work?" And this doesn't go into all of the details underneath the app protocol and things like that, but it lays out some of the fundamentals of what Bluesky -- how it's layered, which I thought was really, really cool... With things like the personal data server, which is kind of where your information is stored, and how relays work, and how feed generators work, and labelers... They're all components of how it's built, that make the social network just kind of seamless for people to be able to just use, because it's just behind the scenes stuff.

\[06:24\] I've found it really interesting just how they broke it down, because it was different than like developer documentation. This was more like "Oh, what is this piece? Why is it here? What does it do?" And it was a really good article. So yeah, it's interested in those details, especially how it is different than from something like Mastodon, or a, I don't know, monolithic or traditional social media platform like Twitter. This kind of goes into what do you need to kind of build this from scratch, and what do you need to make this scalable for as many people as Bluesky has.

**Autumn Nash:** I think it's really cool that they are so open to tell people how it's built, and the features that people want to add... And it's the best world in between Mastodon and kind of like if you came from Twitter, because you can either have a lot of control, or have just enough that you feel comfortable and it's not too much extra work. So I think it's really cool the way that it's built and learning more about it.

**Justin Garrison:** it feels a lot more like a product than Mastodon, which - every time I have used it and even tried to run servers, it feels like an experiment that's trying to be productized... And Bluesky seems to have taken a different approach, which I enjoy.

**Autumn Nash:** I appreciate that some people want to manage those things, and they really want to be on that layer of managing their servers... But for me - like, I have a job, and kids, and I do not want to manage my own social media server. But I think it's absolutely hilarious that true social has this crazy evaluation, and it's basically a Mastodon server. That's hilarious. Like, who is investing in this? And then they have people actually spending their own money to donate for them to run it, and have this crazy evaluation? It's bananas.

**Justin Garrison:** Well, and that's been interesting just in Mastodon in general, is like all of the money is coming from donations. Even the official mastodon.social is --

**Autumn Nash:** Oh, really?

**Justin Garrison:** Yeah, it's just donations. And there's been interviews with -- I'm blanking on his name; the creator of Mastodon, who is in charge of it. He's had multiple interviews where he's lik "Oh yeah, no, we don't want to monetize this. It's just gonna be donation-based." And friends I know that run their own servers, like Hachyderm and some other ones, they're donation-based, and everything is "We're gonna make money--" and a lot of the brunt of the cost is on the server side. And Bluesky changes that, where the PDS, the personal data server - it shouldn't be that expensive, because not everyone's pulling from your server; you're getting scraped from a scraper or a handful of scrapers. And then all of the responsibility, the uptime, the scaling is on the people that run those app layers of the system. And so the data is just data; you just store it, you're responsible for it, but you don't need to scale data. And that's a very different approach from what Mastodon does, where the server is actually caching a lot of things, and doing a lot more work than just storing data.

**Autumn Nash:** And I'm totally not knocking Mastodon. I think it was really cool when it came out, and I think they've done a good job... But I think that Bluesky's protocol and the way it's built and it gives you that option - but like you said, how you're not scraping everything... I do think that at some point Mastodon servers may -- like, I think Hachyderm's amazing; that's like the best server to me. I really enjoyed being there. But at the same time, I just feel like it's not sustainable, or it may not be sustainable at some point... Because it gets to a point where you have to scrape such large servers to interact with them... Like, that's a lot of cost eventually, especially the way things are going with Redis, and everything. Eventually, that could just really be expensive for the people who are owning those servers.

**Justin Garrison:** \[09:59\] I didn't even think about the Redis fork, and how that fits into -- because that's a big component of Mastodon. And if you're making money from it, or you're charging money from it, does that fall under that? I don't know.

**Autumn Nash:** Building something as big as Mastodon is still an achievement, right? Like, they built something from nothing. They open sourced it. So I am in no way knocking it, and I think that it'll always kind of go down as a great refuge for people leaving Twitter, and I think it was made with the information they had at the time... Because who would have known it would get so much more expensive? But I do think that it's going to get into a point where it's going to be like "How does it go forward with the stuff with Redis, with things getting so expensive, with Threads...?" I think it's going to be interesting what happens from here on out.

**Justin Garrison:** I have been pretty vocal about my distaste for Mastodon decisions, as much as it's an achievement to be able to create something like that. I have blog posts and YouTube videos and things of that nature that go into why I think that it wasn't a great decision on how the servers are run, and how they're monetized. We do have someone coming on the show scheduled from a Mastodon server, which I'm really excited to hear about how to do it at scale. Because every Mastodon server I've ever run in the past was for like me, and it was just like "Oh, I'm playing around with this", and then quickly finding out "Oh, this costs a lot of money", or "I need to scale things in these ways." I want to hear from someone that actually is doing it, how does this work and how are you maintaining that stuff.

**Autumn Nash:** I think hindsight's 20/20. Obviously, these problems are now going to cause issues \[unintelligible 00:11:24.25\] But sometimes you build it, and -- I guess they could have thought about those things more, but you know... It's an achievement to get to make something that so many people use, but...

**Justin Garrison:** Yeah, for sure. So how about your link? Speaking of social media...

**Autumn Nash:** I feel like all of ours really fit well together. So Twitter decided it was going to do this odd blob of regex... When you mention a twitter.com link, it's going to switch it to x.com, and of course, we've all used regex, which can be a pain in the butt, but very useful... And it instead started truncating things to actual other websites. So people started -- wait, I just want to say that I love when tech Twitter gets petty, and does ridiculous stuff... And this is so petty. People started buying websites. Let's see what are some of them... They bought \[unintelligible 00:12:22.20\] Basically, you just buy the website, whatever website that ends with an X, but with --

**Justin Garrison:** x.com. Anything that's x.com, you put a Twitter in there, and...

**Autumn Nash:** Exactly.

**Justin Garrison:** ...like Netflix, like SpaceX, FedEx... There's so many of these things that you may not even think about. They're like "Oh yeah, there's an X at the end of that." It's right before the .com, and you could just put a Twitter in there, and it would replace it.

**Autumn Nash:** So then people started buying these domains, and then putting petty messages, like "Are you serious, X Corp?" Which I think is absolutely hilarious, because -- I mean, who is going to deny the fact that you fired a bunch of engineers, you got rid of a bunch of technical knowledge, and then... We knew they were going to run into issues like this. I mean, honestly, I'm surprised they don't have worse problems at this point. So I kind of don't feel bad for

them.

**Justin Garrison:** Yeah. And apparently, they have fixed it, at least according to the reports... But this was definitely something that once I saw this, I was like "This is no longer failing over in an annoyance. This is actually kind of dangerous at this point." When you can't trust some of the things you're seeing, versus clicking on, that's when it's like "Okay, I don't know that I want to be here anymore." And actually, this week was my 16th anniversary on Twitter, and I posted that I'm done. I'm not sticking around, I'm not coming back; I have no plans to engage with the platform. I actually blocked it at DNS for my phone and my tablet. I still have it on my development machine, on my desktop, because I do need to maintain some things on Twitter for work... But otherwise, I'm done. This was too much for me, and I don't want to provide my free services to Elon and to the people there, so I left, and that's okay.

**Autumn Nash:** \[14:11\] It makes me feel bad being on Twitter, because we're basically making him money, and the content is why people go there.

**Justin Garrison:** And the reason I deleted all of my old tweets was I read his biography years and years ago, and after reading the biography, I was like "I will never work for that person." I was like "I cannot work for that person." And Nilay Patel from The Verge, when all this happened, he said "If you are on Twitter and you're posting things, you are working for Elon for free." And I took that to heart. I was like "You're right, because I'm making him content, and I'm bringing in ad revenue, and I'm bringing in traffic." And I couldn't do that anymore for myself, and so that's when I deleted all of my old tweets. And I had planned on stopping at that point, but I also knew that I was switching jobs, and I needed a few little bit of networking. I was still connecting with people, I still had open DMS, I was still having conversations with people... But now that I have fully transitioned into a new role, and I'm in a much better place just socially... I have a lot of phone numbers now. I text a lot of people, and that's actually really great. It's great having fewer deep connections with people. And so that's where I was just like "I don't need Twitter at this point." And I know a lot of people aren't in that same situation. I'm not putting judgment on anyone that still needs to be there. I still will miss people that I know only or primarily tweet or post on Twitter... But yeah, the things I kept seeing, that were just like "This is just kind of dangerous and stupid, and I don't want to do it anymore."

**Autumn Nash:** I would love to get off Twitter if all of tech Twitter and all the people that I love to interact with could just pick one place to meet in the middle. There's some people who only do Mastodon, and I can't just -- I just can't get into Mastodon. I'm not knocking it. I have one, I go back and check every now and then... But I just can't do it. I enjoy the algorithm, and I love that Bluesky gives me access to multiple algorithms, but not everybody is on Bluesky. When Twitter blew up, it was almost like the pieces of that social circle or the social circles that we got to interact with scattered, and none of them have come back to one central place, which is really hard.

I feel like with technology, especially the ability to learn passively on Twitter was amazing. And the way to like meet people, and to learn about conferences... It was so great for networking and making friends. How many internet friends do you have that you've met in person after at a conference, but you had on the internet for years? I knew you were on Twitter for a while, way before I met you... So it's really hard to give up that central place to meet other people like you.

**Justin Garrison:** I miss the conference side of Twitter, which was a big piece of it for me... But thinking about it, too -- because I closed my Instagram a decade ago, and I never looked back. And I'm like "I'm missing a lot of conversations there, and I just don't have the bandwidth, I don't know the time." And it's fine. And I know that for me Twitter will be the same thing, where it's just like "I didn't want to support Facebook either, and I don't want to support Musk, so I'm off. And it's cool. I have other places that I can be." And I will miss those conversations, but again, I am very appreciative of having DMs from people, and just like having real conversations. I'm like, I'll jump on a phone call with someone.

And Twitter Spaces were fantastic. I loved doing that. I was doing like white paper reads, and all that stuff... And I ran a community; I actually ran like three communities on Twitter when communities were a thing. I was having a lot of fun doing that stuff, and then a lot of that --

**Autumn Nash:** But see, that makes me sad. That was a central space where people could get together and do that. It wasn't Twitter, it was the community that took place on Twitter. So that's humans. But it's like, how do we get all those people to pick one spot? Like, at this point, I don't even care what the spot is. I would prefer Bluesky, if possible. But honestly, if everybody had gone to like Mastodon, I would have even been more so on that train. But everybody was going to like \[unintelligible 00:17:51.26\] It's scattered, and we haven't figured out one common place to go back to. And hopefully with the distribution of people maybe over time we get back to it, but it's kind of sad, that thought of maybe --

**Justin Garrison:** I don't think there'll ever be another Twitter, at the peak of Twitter.

**Autumn Nash:** Don't say that. It's so sad.

**Justin Garrison:** \[18:10\] I don't think that's ever going to be a thing of like this big social place, that had - not necessarily all the people, because Twitter actually is a very small social network compared to Facebook, and Instagram, and others. But it had a lot of the mindshare of people. When CNN would just read tweets; that was literally like shows. And sports networks would just read tweets, and that was...

**Autumn Nash:** That's what I'm saying. Well, not just that, but... Did you ever feel like you had -- I don't know, I feel like it was the place that people had all the nerdy hobbies that I did. You could find your people there. Facebook is at this point our parents and grandparents, and just posts that nobody really wants to get into, and you post pictures of your kids and get off... And Instagram, I'll post pictures of like trips or fun things I'm doing, but it's primarily picture-based. And Twitter was my jam. Like, I found all the things -- people that were interested in the same things I was; the algorithm would just send me the coolest people, and I was like "Ah, this is cool. What are they working on? What are they excited about?" And now it's really hard to replicate the people it brought into your life, in the circle.

**Justin Garrison:** I think the hard part is finding real people. Instagram is influencers, and Facebook is people that you knew in person, but they're just showing one side of their lives...

**Autumn Nash:** And half of them you don't know anymore, because you knew them in high school, because no one's used Facebook in a serious manner in the last 20 years.

**Justin Garrison:** Yeah. So I think in LinkedIn is just like everyone celebrating their business things...

**Autumn Nash:** Or just really career-wise. I wouldn't say I bring my whole self to LinkedIn, you know what I mean?

**Justin Garrison:** So finding a place where you were just yourself, and you could be either a little opinionated and wrong about things... And Twitter had, for sure, its faults, especially against women, and people of color, and whatever. There was a lot of downsides, but...

**Autumn Nash:** It also had the people who were speaking out about those things, too... Which I think is why I really like Bluesky, because I felt like a lot of people that were upset about what went wrong in Twitter wanted to go to Bluesky to make a better Bluesky... Which is also a lot of people on Mastodon too, for their credit... But I'm really hoping that everything centralizes, or a majority of it, to have a new place soon.

**Justin Garrison:** I don't think that's going to happen.

**Autumn Nash:** Stop bursting my bubble.

**Justin Garrison:** I think that we're gonna smaller, focused communities. And I think that's okay. But anyway...

**Autumn Nash:** I guess there's Discord, too.

**Justin Garrison:** Discord feels -- some discords feel like old IRC, and I love that about it. But also, I don't have time. I don't have the time to sit on IRC anymore.

**Autumn Nash:** Well, it's just too many to manage. You have to have a new one for each friend group. And interests...

**Justin Garrison:** The way those overlap, and then they don't...

**Autumn Nash:** See, that's why we need one central place. That's too much. We all have kids, or we're adults, with like jobs and stuff now...

**Justin Garrison:** Autumn, I think this is an us problem.

**Autumn Nash:** You think so? I think a lot of people want to get off Twitter though, and go find their people.

**Justin Garrison:** And I will invite anyone that is on Twitter - I am JustinGarrison.com on Bluesky. Because you can have your domain as your handle, which is an awesome feature, I think. So you can find me on Bluesky; please reach out. Happy to talk to people there.

**Autumn Nash:** Yeah, let's get to the interview, so hopefully we can get more people on Bluesky.

**Justin Garrison:** Autumn, what's yours? Yours is withenoughcoffee.com?

**Autumn Nash:** Yeah, it's withenoughcoffee.Bluesky.social.

**Justin Garrison:** So you don't have the custom handle.

**Autumn Nash:** I did. And then I used it for my GitHub pages.

**Justin Garrison:** You can have it both.

**Autumn Nash:** It told me that the domain thing was messed up. It was very upset with me.

**Justin Garrison:** Okay. Well, withenoughcoffee, you can find Autumn on Bluesky as well.

**Autumn Nash:** I'll figure it out eventually, but GitHub kept yelling at me.

**Justin Garrison:** So with that, let's go ahead and jump into the interview with Paul, the staff engineer at Bluesky.

**Break**: \[21:54\]

**Justin Garrison:** This week on the show we have Paul Frazee, a staff engineer at Bluesky. Welcome to the show, Paul.

**Paul Frazee✌:** Yeah, thanks for having me.

**Justin Garrison:** If anyone has been on Bluesky, they kind of know who you are, especially if they've been around for more than maybe a month. And I was lucky enough to join last year, and you were everywhere on the app.

**Autumn Nash:** You're like the Bluesky celebrity.

**Paul Frazee✌:** Yeah.

**Justin Garrison:** So can you tell us who you are there, and what software or technology are you responsible for?

**Paul Frazee✌:** Alright, so I'm mainly the product guy. I also do protocol work, so I kind of have one foot in each camp, and my job is to kind of bridge the two. And then I'm also the loudest on the team, which is why you see me so much on the app... Which kind of has me talking to users a whole lot, which works out pretty good, because you want to talk to folks. So that's my job. It's mainly making sure the product's in the right place.

**Autumn Nash:** What language is Bluesky built in?

**Paul Frazee✌:** Almost entirely TypeScript... Yeah, including in the backend. We've got some Go as well, for kind of the high-scale core services... But a lot of TypeScript, yeah.

**Justin Garrison:** I think Autumn just checked out of the conversation. It's okay.

**Paul Frazee✌:** Oh, so that was a bad sound. That was an "Oh, no" sound.

**Autumn Nash:** It's okay, I have to write a bunch of infrastructure in TypeScript coming up. It hurts my heart a little bit, but...

**Paul Frazee✌:** That's a lot of hate. I will stand by the TypeScript for us... And we can get into why it works for us, but... Yeah, the Go devs kind of feel similarly, so we've got a little bit of a rift on that one...

**Autumn Nash:** It's like the fight of Bluesky. Go devs versus TypeScript.

**Paul Frazee✌:** Pretty much, pretty much. I mean, we get on. It's alright. It could be worse.

**Justin Garrison:** Paul, you've been there for a little while. You've been around doing this... And I even saw in your history you were doing other sort of TypeScript frontend social media sort of stuff beforehand... But there's so much complexity in like app protocol, versus the apps, versus the website, versus the backends... And you're focused mostly on that TypeScript, and everything I see you doing is a lot of the web interface on the mobile apps... But also there's app protocol in there. How do you go about building all that? It seems like you're a one-person team, at least early on.

**Paul Frazee✌:** Yeah, see, actually, I really dislike that it seems like that, because it's so not true. This is what I mean when I just say I'm the loudest one. I just talk a lot. It's a huge team effort. And a lot of the other folks -- like, at this point, the frontend team is up to... Boy, I think we're up to five now. We've just brought on a fifth. And frankly, they're doing a lot more than I am at this point. We've got about seven or eight handling backend things... So we have a full team, and even from the beginning, at best, I was a quarter of the team from the start. So it's always been a group, from the start.

**Justin Garrison:** And what is it -- I mean, you said TypeScript. Is that React? What is the actual frontend and sort of frameworks you're using?

**Paul Frazee✌:** Yeah, so front end is React Native and Expo.

**Autumn Nash:** At least you picked a good flavor of JavaScript.

**Paul Frazee✌:** Yes, yes. I'll stand by it. It actually took me a while to get on the TypeScript train, because I was a hardcore JavaScript guy, so I'm like "Oh, I don't need the typed system." And then now it's the most horrifying thought possible to me. You've got to do the TypeScript.

**Autumn Nash:** I feel like React is the best, and then TypeScript.

**Paul Frazee✌:** Oh, yeah. That, too. Yeah... And the thing is our constraint was that we had to ship on Android and iOS and web. So we didn't want to kneecap ourselves early on by just being like an iOS app, or something along those lines... So if you're going to ship to all those platforms, you're gonna need something that's going to abstract away all the different things, so that you're not doing multiple codebases... Because if you have more than one codebase, you basically have more than one product. So we needed something that was gonna get us into all those different platforms, and React Native fits that bill. I know that there's also in the Dart ecosystem there's Flutter.

**Autumn Nash:** I love Flutter.

**Paul Frazee✌:** I haven't messed around -- yeah, I hear good things about it. I haven't really touched it yet, so I can't really speak to it... Partially because it's what we come from, the teams that had a TypeScript history, and React Native pulled it off. So that's how we wound up doing that.

**Autumn Nash:** What did you do before Bluesky?

**Paul Frazee✌:** Before this I was working on a peer-to-peer web browser called the Beaker Browser. And before that, I was working on something called Secure Scuttlebutt, which was another peer-to-peer social network. And that covers - the two of those combined - about 10 years.

**Autumn Nash:** \[26:16\] What's the difference between what you do now and peer-to-peer?

**Paul Frazee✌:** What we do at Bluesky actually takes a lot of ideas from peer to peer, but we just still use servers. So it's almost like the servers are talking to each other with the peer-to-peer network, instead of users' devices. That was like the weird thing that we did with this leading up to it, because like I said, 10 years of doing this stuff - there's a whole community of these peer-to-peer software engineers that have been trying to decentralize social media or web browsers, things like that... And we developed a lot of really great tech, but peer-to-peer is really hard to get to work the way that you need it.

**Autumn Nash:** I think that's kind of important. Can you kind of explain the decentralized part of Bluesky? Because I feel like people have heard it, but I don't know if people fully understand what that means, and why you guys made those choices, and what's unique, and what value does that bring to Bluesky.

**Paul Frazee✌:** I mean, that was our founding principle when Bluesky got started. The whole point is that it's not just one company running this thing indefinitely; that all of the pieces of infrastructure, all the servers get replaced by somebody else at any given point, and that network would continue to exist... Ideally, without any kind of interruption to the experience. There's a couple of different groups trying this. Mastodon famously is also doing a decentralized thing. It just means there's more than one person running it... And then in a practical sense, it actually affects the experience in Bluesky, because the algorithms that people get inside the feed, the thing that is driving the experience - actually, anybody can make one of those. You can set up a server and like run your own feed off of that. So we're sort of really investing in that idea that the entire network is an open network. Same as the web is supposed to be, and the same as the internet is supposed to be. There can be lots of people that run the thing.

**Justin Garrison:** I have so many tangents I want to go on with all of that... Because I was doing a lot of protocol reading, I have some videos and stuff about ActivityPub \[unintelligible 00:28:03.02\] and I was trying to do these things even last year, learning a lot more... I think it's really cool. But I keep wanting to come back to this - like, you build this React Native thing, and then you push it out to web, Android and iOS... And how do you test that? Because those are very, very broad. It's almost IE 6. IE 6 was like this weird, customized thing back in the day that we had to build towards... And then Mozilla Firefox was coming out, and Safari was there... All these different, weird things that just bubble up because they're implemented differently. And I still see change logs that you push out, of like "Oh, wait, we fixed the Back button on this Samsung device from eight years ago", or something. It's like those super-weird things. How do you make that scalable? How do you test that stuff?

**Paul Frazee✌:** Oh man, I'll tell you the straight answer... It's super-hard. \[laughter\] It's exactly what you're saying. I do have some experience from doing web development, which gives you a pretty good dose of that... It's gotten better with the web in the past few years.

**Justin Garrison:** Because everything's mostly the same engine underneath?

**Paul Frazee✌:** Right, Chromium. Yeah.

**Justin Garrison:** Yeah, it's like this WebKit thing, and it's like, it's more or less the same... But yeah, you're gonna get those still out of the blue, like "How does that work on Firefox? How does that work on Safari?"

**Paul Frazee✌:** There was a lot of hard work between the ones that are still around, and get their engines onto the same place... But you're not really getting that in the React Native ecosystem. They're trying with React -- I mean, if I ever have any kind of criticisms or something that sounds like a criticism of React Native, I just want to caveat that it's really a great piece of software. We wouldn't have been able to do this without it. But it's an incredibly challenging thing to get a single application to behave the exact same way on all these different platforms, and the quarks absolutely come out, just in a variety of ways.

So we set up some simulation tests that we run before every release to make sure that we're not breaking anything core to the application... So that's sitting there and we use Detox to drive the application, have it be inputting gestures into the simulator... But other than that, it's honestly mainly manual QA and just responding quickly to the users.

**Justin Garrison:** And you don't have any sort of like device farm that you're renting out, and all that?

**Paul Frazee✌:** \[30:09\] Nah...

**Justin Garrison:** Which is amazing to think that Bluesky now is open for everyone to sign up, you've passed 5 million users, and a lot of people think "Oh, if I'm ever gonna get like 100 users, I have to have all this automation, I have to have all these things perfect." And instead, it's not fully YOLO, but also, there's exciting things like the Hellthread from last year, and things that were not really expected; that weren't intended, but also --

**Autumn Nash:** That was kind of fun though.

**Paul Frazee✌:** It was fun. We got T-shirts made. I love the Hellthread.

**Autumn Nash:** You got T-shirts made?

**Paul Frazee✌:** We did, yeah. \[laughs\] That's what I should be wearing...

**Autumn Nash:** I know. How did you not show up with that shirt?!

**Paul Frazee✌:** I mean, you can't wear a Hellthread shirt every day.

**Autumn Nash:** It's gotta be special.

**Justin Garrison:** You didn't buy 10? \[laughs\]

**Autumn Nash:** You don't want it to get washed out, you know? You don't want it washed out.

**Justin Garrison:** Well, then it's vintage. And then you have a vintage Hellthread shirt.

**Paul Frazee✌:** \[unintelligible 00:30:59.08\]

**Justin Garrison:** Yeah.

**Autumn Nash:** Now you're gonna have to send Justin a shirt.

**Justin Garrison:** I was sad because I missed the sale.

**Paul Frazee✌:** Yeah, I don't know if you can get one now...

**Justin Garrison:** I saw Jake with one, and --

**Autumn Nash:** There was a sale?!

**Paul Frazee✌:** Yeah. Actually, a user made them. We bought up some for the team.

**Autumn Nash:** That's awesome.

**Paul Frazee✌:** Yeah. Anyway, so we're not fully YOLO, but we're a little YOLO, for sure. I don't know if this works for everybody, for every project, for every company, but for us, for sure. Our users have been extremely gracious about some of the issues that have come up... And we respond quickly. We're not relaxed about it, to be sure; we're trying not to have regressions. It's important not to. But especially early on, it's just way more important to be getting something to people that they want to have, and that's what you've got to focus on, not getting your \[unintelligible 00:31:46.02\] to make sure that it's 100% grade. This is like really cliché advice now in the startup world, but it's just true. The bugs are not what kills you.

**Justin Garrison:** A lot of it reminded me of like early days of Twitter. The Fail Whale, and the things that were like "Oh, this is terrible, and also it's a shared experience and kind of fun." It was something that I was kind of reminded of. I'm like "Wow, when was the last time someone launched something fairly large with more than a million people?" I mean, I guess anything AI right now is kind of a dumpster fire with being shipped out --

**Autumn Nash:** It's not a fun dumpster fire though... It's a depressing dumpster fire. \[laughter\] This was like nostalgic, because Twitter was going to hell, and we were all like "Yay, maybe this is what will save us. We can all just jump ship here." And it was like a cute nostalgic thing. And AI is just like "Oh, is this gonna ruin the world? Did we do this to ourselves?" \[laughter\]

It's completely not the same.

**Paul Frazee✌:** Yeah. Or it's like a car. It wouldn't be as cute with a car, you know what I mean?

**Autumn Nash:** Exactly. There's some things you're like "It's okay. We can all just get through this together." And then other things you're like "How about we don't ruin the world?"

**Paul Frazee✌:** Yeah. And there's also an upper limit on how cute it is from us, too. We're definitely trying to improve on it as we go, and one of the things we're working on right now is getting over the air updates and voice, which I can explain in a second, but it'll help us kind of push out hot fixes faster... So we're definitely trying to solidify it as we go. But the simple reality is that we're not a huge team at this point. We're still around 20 people, so we just kind of have to pick and choose what we're going to make really great, and not worry so much about the polish sometimes.

**Autumn Nash:** I mean, it helps people to communicate back and forth together. I think you guys have done a pretty good job. Even last year, when you first started, and you were still letting a limited amount of people over, I felt like you did a really good job. You guys fixed things really quickly.

**Paul Frazee✌:** Yeah.

**Justin Garrison:** How has the open signups affected anything on your end, or adding millions of people in a matter of a month or so?

**Paul Frazee✌:** \[33:55\] I mean, way less than I thought. We were definitely nervous about it, but that time of staying closed did exactly what it needed to do. A lot of people didn't really know why we were doing that. There was a lot of people thinking it was an exclusivity thing, and that was not what it was about. It was quite literally that we could not handle the users, and we had to scale things up on the moderation side, and on the server side, and the implementation, everything like that. So we just needed time to get it right. And we gave ourselves enough time, because yeah, once we opened up, it was smooth going. I was expecting worse. So I was pretty happy about it.

**Autumn Nash:** Also, when you're trying to \[unintelligible 00:34:27.04\] something different, and it's new. That's a lot harder. It's not like you were just doing something that's already been done, so...

**Paul Frazee✌:** Well, yeah. And that's a big part of -- like, if you want to understand what's going on with Bluesky when you try it out, and like "Why is it kind of one way or another? Why don't we have like DMs yet?", something like that, you've really got to understand that a big part of what we're doing is getting the technology into a good place. Like, I just spent the last month completely heads down on the whole labeling system, the community moderation system. That's a really key part of decentralized moderation. It's just sort of beginning to reveal itself, and the way that we brought it in were people could start to run what we call labelers, that run inside of it... And it's a little bit more circuitous than usual, right? We kind of have to invent some things before we can act on it inside of the product. So it's an interesting kind of experience.

**Justin Garrison:** Any social network - the product they actually sell is moderation, at some level.

**Paul Frazee✌:** Oh, yeah.

**Justin Garrison:** That's the thing you stay inside of a social network for. If there is no moderation, or if it's not your flavor of moderation, you're not gonna wanna stick around, because it''s not for you. And having that as a composable layer is really interesting. And I'm curious to know why, or what benefits you might get for open sourcing things like Ozone. We were talking about that earlier, which is like this current open source implementation of a custom labeler. Why open source some of that? Why not make it a hosted service and say "Hey, you have to pay us to make it?" Because you could do it either way, and you say "Here's an open source thing. You run it yourself, you label it, and you can run your own moderation stack."

**Paul Frazee✌:** Yeah, I mean, we may still do that. We're kind of starting from the extreme of making sure that the technology and the pieces are out there, so that anybody can do it... Because again, that's the strong mission orientation that we have, is making sure that this stuff is in a way kind of a public domain, so to speak.

And then after that, we sort of focus in on making it easier to use; we're bundling it, and kind of offering services around it, things like that, to make it a little more accessible to folks. So we kind of have this viewpoint of \[unintelligible 00:36:29.09\] the extreme of making sure that it's all out there in the most kind of independent way possible, and then we can kind of bundle it up as we go.

**Justin Garrison:** You were talking about over the year updates for clients. How is that going to play out, or what are your plans there for making it easier to maintain?

**Paul Frazee✌:** The main theme for this podcast is ops, right? That's what we're all about, right?

**Justin Garrison:** Yeah. Maintaining software. Anything after that commit.

**Paul Frazee✌:** Maintaining software. Alright. So this really is -- if you're listening right now because you're interested in what it's like to build a mobile app on React Native with a lot of users, this one's a pretty key one to know about... Because the thing that I always did, either desktop applications or web up until now -- this is my first time doing mobile... And the app stores are a major part of the release cycle. And if you're used to doing just like rapid deployment of like, okay, you got the feature going, and now you just ship it out to everybody, the app store part of it is a big shock. You now have to bundle into releases, and you have to send those releases for review. And review can take anywhere from -- sometimes it's like overnight, they just knock it out. Sometimes it's like a week, and you don't always get a lot of clarity on it.

Apple in some ways is a little bit better. You can ask them to accelerate a review if you need to. They've actually gotten on the phone with me before, which is pretty nice... Google is way more of a black box. Sometimes you get rejected, and then you're starting over from scratch... And so planning your releases around that is really challenging. It's a totally different experience than what I was used to with the web.

**Autumn Nash:** When you have to start over, did they tell you what's wrong, what they're rejecting you for?

**Paul Frazee✌:** Yes.

**Autumn Nash:** Okay.

**Paul Frazee✌:** Yeah, yeah.

**Justin Garrison:** What has Bluesky been rejected for?

**Paul Frazee✌:** \[38:06\] A fair amount over NSFW stuff. It took us a while to kind of get onto the same page with them about that.

**Justin Garrison:** Which was really interesting... And I actually appreciate the things you were doing early on to make sure that stuff was labeled. It doesn't show up on mobile, and it can show up on web, depending on those settings.

**Paul Frazee✌:** Yeah... I mean, we're trying to make everybody happy on this, and we don't want to just say no to NSFW at all. That's like just not what we're thinking with this. I think maybe our labeler -- we've got an automated labeler in there to try to autodetect stuff to make sure that we can actually reach that goal, and it does not always do what we want it to, so we're still not up to the point that I think we ought to be on that. We're looking at it now and trying to get it more aligned... But it is stuff like that will stop a release.

**Justin Garrison:** But at that point what is -- Apple reviewer's like "Hey, I sign up for an account. I'm gonna scroll through and I'm like "I don't like that. Get this app out here. Let me call up Paul and tell them him, "By the way, I saw something I didn't like. No app for you."

**Paul Frazee✌:** \[laughs\] What's even better is they screenshot it and then they sent it over... Like, "Oh, wow. Yeah, check that out!"

**Autumn Nash:** It seems like Apple's being sued for a lot of things over the App Store and the regulation, so it's interesting that you said that Apple was easier to work with... Which is nice to get like the contrast of different people that have worked with them and different things that people dislike and like, because I think usually you hear more negativity as a whole about things, and you don't really hear both sides. So it's interesting to see what they're good at and what people are not happy with, because it's always interesting to get both sides to see like a bigger picture.

**Paul Frazee✌:** All I can say on why I have a positive impression compared to \[unintelligible 00:39:38.25\] So I think I'll probably just not say anything right now. \[laughter\]

**Autumn Nash:** I mean, so far you've only said good things, so...

**Paul Frazee✌:** Yeah, yeah.

**Justin Garrison:** Except for "Google's a black box." My only time that I ever dealt with any apps was like we were shipping Disney Plus, and I remember the day it was going live we were in the Slack, like "Hey, Disney Plus is going live." And it was like "Okay, it's going out to Play Store." And it was like "Oh, it's there." It was instantaneous. The technology of growth was so amazing. I'm like, "It's globally already available. Everyone can download. It is available", before we even were ready for it. And I'm like "We're going live on Apple." Oh, it's got to sync. It's gonna replicate in their infrastructure, and we're waiting like hours for -- like, Apple, do we have any updates? What's going on here? It was just an interesting thing of like the Apple human policy side of it seemed more polished. They've been running apps for longer, they know how to make developers happy in some ways. And Google had a better tech stack of like "Hey, if I don't need you, maybe this is going to work out for me better." And it was a really eye-opener of just like "Wow, that was a weird experience." And same thing with like we had Chromecasts in stores, and we had all these other things that we're rolling out to all these places, and just like watching those checkboxes go was a fascinating experience.

**Paul Frazee✌:** Yeah.

**Autumn Nash:** Did you give anybody Disney plus earlier to review beforehand?

**Justin Garrison:** I mean, I had it early...

**Autumn Nash:** No, I mean, did you give the app to different app stores, so they can review it faster, or get it out there faster?

**Justin Garrison:** I don't know about for you, Paul, but we obviously would say like "Hey, we're going live on this date. We're going to send you these updates weeks ahead of time. Please review them, so we're not waiting for approval. But hold it till this time, and then we will call you up." When you're also Disney, you're kind of like "Hey--" Bob Iger is pretty good friends with folks at Apple, so he just call them and be like "Hey, push it live now", kind of thing.

So that was fine... But yeah, we just said "Oh, this is the date we're going live." It was pre-published, and now we're gonna say "Hit go", based on whatever timezone. But I'm curious for you, being a fairly small team, without lawyers and people to handle those relationships necessarily... Like, that's on you and the dev team to kind of manage that relationship.

**Paul Frazee✌:** Yeah. Even if you're not Disney, you can get the review done ahead of time, and then hold for release, and things like that.

**Autumn Nash:** That's what I was wondering. I feel like that would be a better cadence to kind of be on the same page about when you want to do your releases.

**Paul Frazee✌:** \[42:02\] Yeah, we always do the thing where you choose when to press the button... Because you want to have everybody come out at the same time, so that people aren't confused... Because that's something else that factors in, is that you don't want users talking about a new feature, and being like "I don't see it yet." You're like "Okay, now we have 100 support requests."

**Justin Garrison:** "Look, I've got a database migration over here. Hold on..."

**Paul Frazee✌:** Yeah, all kinds of things like that. So you do want to coordinate it pretty tightly. So once you get into a rhythm, it's manageable, for sure. But the X factor is if something gets through that's a bug, you're back through the process, the review process. So one of the value props of Expo, which is a toolkit that goes on top of React Native - and frankly, if anybody's using React Native, I would strongly suggest that you use Expo. It's been a huge help to us. One of the things they offer is what they call over the air updates. And what this idea is, is that - like, the entire React Native premise is that it's running a bunch of JavaScript, that is then driving the various native applications. So it's almost like a web app model. And so if you download new JavaScript to run inside of your application, you can change up how most of the applications go, so long as you're not trying to change any of the natively-compiled components, which was the \[unintelligible 00:43:18.01\] Now, it's a little unclear what the policy is between the app stores regarding this. Generally speaking, there's been a lot of signals, certainly from Apple, that they don't really want you to do that... But this is part of why it's only now that we're starting to get into it, where - again, I'm almost not even sure if it's wise to be talking about it, because it's kind of one of those things where they'll let you get away with it if it's not like significantly changing the application.

And I think a big part of what the review process is about is just making sure you're not sneaking things in that cause problems... Which I can appreciate at some level. So you're trying to balance these things, and we'll see how it goes. But it's just very difficult whenever you can't push hot fixes... Because things do get missed in the QA. You mentioned the Back button; that's one that we're actually shipping out right now as a hotfix, because on Android we broke the Back button... Which you don't want to do. That's not great. \[unintelligible 00:44:17.09\] break the Back button. So now we're getting that out. And if we had OTA, we can just ship that right away, same as like on the web, to defense.

**Justin Garrison:** And that has to be difficult with -- you're evolving this protocol, and you were migrating personal data servers, and you're doing all this stuff at like a protocol level, but then also the application itself you're shipping, and then there's just dynamic content in the middle that all the people are actually creating. And your app mostly is reviewing that stuff, but there's all these fringes around like "Oh, but if I want to change that setting, or that setting's broken", or something, like, you have to be able to maybe do that dynamically, and maybe not through a full update cycle.

**Paul Frazee✌:** You know, you'd be surprised that in terms of what we just talked about, like the Apple release cycles and stuff like that, being a protocol doesn't jam us up that badly... Probably mainly because the way we wrote it. The way we ended up approaching things was we took a really kind of rigorous "Write schemas for everything" sort of approach. So it's a really contract-oriented sort of design, so all the APIs are well specified, and there's the compile time -- there's types that get generated, as well as runtime validation. As much as you might think, we don't end up like changing something in the protocol and getting surprised by it in the live system. That ended up paying off pretty well for us.

**Justin Garrison:** It turns out API contracts work, huh?

**Paul Frazee✌:** It turns out they do, yeah. I'm a pretty big believer in that at this stage.

**Autumn Nash:** Where are you from, Paul? You've got a cool accent.

**Paul Frazee✌:** So I'm actually from Austin.

**Autumn Nash:** That's cool.

**Paul Frazee✌:** Yeah. I'm in Seattle now, but...

**Autumn Nash:** How do you like Seattle versus Austin?

**Paul Frazee✌:** I've only been here since August... I like it pretty well, actually. I mean, it's such a pretty city. That's really what it comes down to.

**Autumn Nash:** It is. It's got a lot of cool people, too.

**Paul Frazee✌:** It does.

**Justin Garrison:** Autumn's just like humble-bragging there... She's like "I'm here too, so..." \[laughter\]

**Autumn Nash:** \[46:02\] I am cool, and also live here... But I just meant in general, because think about all the people that work in tech, and new cool things, and biotech, and... There's so many cool industries here. I went to the Museum of Industry in Seattle, and it's crazy the amount of things that have been like founded here; it makes it really special.

**Paul Frazee✌:** Yeah. I can't go anywhere without running into somebody from Amazon, too... Which is pretty fun.

**Justin Garrison:** Especially on those Amazon office days... \[laughter\]

**Autumn Nash:** And you're on the podcast with one former Amazon employee... \[laughter\]

**Paul Frazee✌:** There you go. There you go.

**Autumn Nash:** Quite literally.

**Justin Garrison:** So what's next? What are the things that you are looking forward to implementing in the apps? You have OTA updates as the thing that would help in some of those areas, but what are you looking forward to help manage the software going forward? Is that just "We need a bigger team, we want to do better tests"? What are you looking forward to?

**Paul Frazee✌:** Oh, man, on the ops side, definitely the OTA is the big thing. That's just going to be a huge, huge relief. \[unintelligible 00:46:57.16\] there's anybody else doing this, I would say don't wait like we did; just get it tested out. It's going to be worth it, just to get a little peace of mind. So in terms of process and ops, that's for sure one of the big things.

**Justin Garrison:** It seems like it makes the testing harder too, right? Because that's not a release anymore. What version of your app is out there on this device?

**Paul Frazee✌:** Yeah... Well, I'd be lying if I didn't say part of my anxiety too is pushing a bad update that way... But they've actually -- X did a pretty good job with that. It's smart enough to recognize actually whenever you push \[unintelligible 00:47:28.11\] crashes on startup, and roll it back... So it's pretty good software. So again, I recommend it.

Yeah, so that's gonna be pretty huge... But other than that though, mainly what we're doing now is we wrapped all of this protocol work. We got federation going, so anybody could host their own stuff on their own servers... We got the moderation thing in there... So now we get to kind of refocus back on product stuff, and that's personally what I'm pretty excited about right now, is zooming in on that, and simplifying a couple of things and filling in some missing pieces, so that you're getting more of the social stuff that you're normally expecting...

**Justin Garrison:** Gifs? Is that we mean? \[laughs\]

**Paul Frazee✌:** Well, first of all, it's Gifs...

**Autumn Nash:** Thank you...! \[laughter\] See, I knew I liked you, Paul. I knew I liked you. We've been having this debate for forever, so I'm glad I finally won. Thanks.

**Paul Frazee✌:** Oh boy, we should move on, because I could get into it...

**Autumn Nash:** No, you have to rant about Gifs. \[laughter\]

**Paul Frazee✌:** Yeah, that's an example... We're actually all getting ready to go to our team retreat, where we do a bunch of planning, so I can't promise anything timeline-wise... But that's the idea.

**Autumn Nash:** What's your favorite thing about building Bluesky?

**Paul Frazee✌:** This is the first time I've had anything that actually people used.

**Justin Garrison:** Users.

**Paul Frazee✌:** Yeah. \[laughter\] Yeah. Because I listed off the projects I did before this, and I guarantee 99% of the audience is like "What? Never heard of any of that stuff." Which is cool, because they're all passion projects, they are all things I believe in in a big way... But they were always just kind of scratching it out in the margins. And I'm glad I did it. It's set up a lot of this work now, and things like that. But this time around having actual users - that's just a lot more fun. It makes it feel a lot more meaningful.

**Autumn Nash:** You're a celebrity on Bluesky.

**Paul Frazee✌:** \[laughs\] Well, part of that is -- like you mentioned, when you get in the \[unintelligible 00:49:25.14\] I accidentally Elon-ed it... \[laughter\]

**Autumn Nash:** I love that. That's a thing. You Elon-ed it. \[laughter\] Everyone knew what you were talking about.

**Paul Frazee✌:** Oh, yeah, nobody is confused on that. It wasn't on purpose. It was just an accident of how things kind of worked, that yeah, I just ended up -- because what we were doing... And this is still kind of there, but we're shifting away from it... We would show replies, like if somebody's talking. So I'm just replying to a lot of folks, and next thing you know, people -- like, if I'm one of the few people you follow, then you just start seeing my replies just dominating your feed, and so... Yeah, dev advantage on that one right there.

**Justin Garrison:** \[50:05\] Yeah. The Paul feed. The Paul feed was definitely a good six months of "Oh, you're using this one a lot. This is good."

**Paul Frazee✌:** Yeah.

**Autumn Nash:** But how cool is it that you build something new, that you can actually enjoy using it?

**Paul Frazee✌:** Well, and that's the thing. If I wasn't, then something's wrong. That's a big part of it, in my opinion, is I'm deeply involved in the product. And if I'm not having a good time with it, then nobody's having a good time with it.

**Autumn Nash:** It's really cool that Bluesky gives you a lot of what Mastodon gives you, but also without -- you can choose to have less responsibility. Because I think everybody got into Mastodon, which - I still think Mastodon has its value, but people got in and they were like "Wait, this is more work than we thought it was." So I think it's cool that you have the options of Bluesky, but at the same time you can choose to have less responsibility.

**Paul Frazee✌:** Yeah. And you mean that like running servers, and stuff like that?

**Autumn Nash:** Yeah.

**Paul Frazee✌:** Well, that's really important, too. We're trying to be as practical as possible about making sure that, okay, we're gonna open everything up, but that shouldn't mean that this suddenly becomes like untenable for folks. And if you're interested in a moderation thing, then that's all you've got to do, if you're interested in an algorithm thing, then that's all you got to do. If you're really into self-hosting, then that's all you've got to do.

We want to make sure also that -- in decentralization, a lot of the kind of big ideas are connected to kind of disaster management; like, what do you do when things go terribly wrong? Let's say a crazy billionaire buys your social network.

**Autumn Nash:** We don't know where that came from...

**Paul Frazee✌:** Hypothetically speaking... \[laughter\] Yeah, if that happens, what do you do, right? Most of the time, that's not what's happening. Most of the time things are going normally, and so you don't really care that much. So I call that a mylar blanket feature. It's something that only comes out after a disaster, and you're putting on the mylar blankets. So if it's not something that's like driving the experience in a significant way, then it shouldn't be something that's like taking up a lot of mental energy, and...

**Autumn Nash:** That is really true. Because I think people were so panicked after Twitter, that that became such an intense part of the conversation, when it's like, "How often is this really gonna happen?" And if it's affecting the usability of it on a daily basis, how successful can you be?

**Justin Garrison:** I mean, but that does depend on is this just takeovers? Or is this just general social network failures? Because there has been plenty in my lifetime where it's like "Oh, you know what? I don't have a MySpace anymore." And I closed a lot of accounts in the past. I've probably closed almost as many accounts as I've opened, of things, that I just don't do anymore, because those networks folded, and aren't around... And if you liked it, and you liked the community, there should be some option, but yeah, it shouldn't be like the focus. It shouldn't be like "Hey, we need to make this sustainable forever." It's okay if some things go away.

**Paul Frazee✌:** That's true. Yeah. They come and go. It's kind of "Well, that club went." It sort of depends. For sure -- I don't love that these things come and go always, especially... You know, sometimes you drop friendships, you drop business opportunities that you've built for yourself, things like that, so...

**Autumn Nash:** That's so sad. Now, with tech Twitter, 1/3 of people are on Twitter, 1/3 of people are on Mastodon, then you've got people on Bluesky, and it's like... It's just sad that we probably miss so much information, or so many things that we could be taking advantage of or communicating about, because we're looking at so many different networks at once.

**Paul Frazee✌:** I think that's definitely where it's at right now, is like a lot of those communities got scattered to the wind.

**Autumn Nash:** Yeah.

**Justin Garrison:** And they shall come to Bluesky, so it's fine.

**Paul Frazee✌:** Well, that's what we're trying to do, but we're not there yet. For sure, we have not brought over all of tech Twitter. And we want to try to -- like, that's our goal, is to get to that point where we're hitting all those points... But we've got some things we've got to get in there. We've got to get DMs in there, we've got to make sure that the discovery is working right... Like, part of the problem is you get in there and it's hard to find the folks, right? We just haven't put in the resources into that. So we've got to clean up some of that stuff and make sure that it can actually happen.

**Autumn Nash:** \[53:59\] I hope people do go over to Bluesky, because Twitter's just sad at this point.

**Paul Frazee✌:** We're definitely grabbing folks, and I just want us to grab more.

**Justin Garrison:** My last question is what do you decide not to do? Because there is so many things... Like, we want all the features, so everyone comes. I'm at the point where I'm like "You know what? I never want to have a DM on a platform again." Now that Signal has usernames, I don't need to give them my phone number. I could just keep Signal, and I literally started putting that on all my profiles. If you need to contact me, here's my Signal username. I don't need to give you my phone number. And I can control Signal as a way to do all of my DMs, instead of going and checking five different platforms all the time.

**Paul Frazee✌:** Yeah.

**Justin Garrison:** How do you figure those things out, like what not to put in?

**Paul Frazee✌:** That's something we're always asking ourselves... And actually, the way I'm feeling right now is that there's about 1,000 balls that we can chase, and which ones are we gonna pick? That's kind of where we're at the moment.

**Justin Garrison:** Right now it's a prioritization problem, and it's like "Maybe we never get to it, because it's not a high priority", but at some point you're just like "You know what, maybe it's not worth it." Or the vocal people that are asking for it, "Here's an alternative we could integrate with, or give you some other workaround."

**Autumn Nash:** As a woman in public, I feel like I'm not so upset that we don't have DMs on Bluesky.

**Paul Frazee✌:** Yeah... No, I mean, I think both of those are pretty valid points. Maybe don't do it, or maybe just do a Signal introduction thing...

**Autumn Nash:** I think if we did it, it would be cool. I think it's gonna be the same thing as everything else. I just don't think it's a huge negative thing.

**Paul Frazee✌:** We'll see. Honestly, we hear it a lot, though.

**Autumn Nash:** Oh, okay.

**Paul Frazee✌:** If we didn't hear it as much as we did...

**Autumn Nash:** But I love that you're actually listening to your customers. Can we just talk about how many different apps that you use, and you're just sitting there like "I wish we could stop--" Like, people would listen more, or people would listen to the chats that they have, and forums... I feel like there's so many places where people are giving people feedback for apps on different products, and nobody seems to be listening. So I really liked that about Bluesky, that it seems like you guys are really cognitive of what your users want. And you're such a small team, and it seems like you really deliver on a lot of that.

**Paul Frazee✌:** Yeah, that's by far one of the things I'm like most glad about for us, is that that is what we do.

**Autumn Nash:** I remember when you were pushing fixes at 11:30 at night. I was like "They're amazing."

**Paul Frazee✌:** Well, I kind of don't know how I would have done it differently. It's kind of just how I'm wired, so it works for me.

**Autumn Nash:** How much coffee do you drink, Paul?

**Paul Frazee✌:** A lot. A lot. I use a lot of caffeine, to be sure.

**Autumn Nash:** Same.

**Justin Garrison:** Paul, thank you so much for coming on the show, and thanks for talking about Bluesky, and all the things you were doing with the apps... Obviously, if anyone is looking to reach out to you, or find you online, they should probably check Bluesky and you're going to be in the feed somewhere, so they can find you there.

**Paul Frazee✌:** Darn right.

**Autumn Nash:** You're like Tom from MySpace.

**Paul Frazee✌:** I'm totally cool with that. If that's how I go down, I'm stoked.

**Autumn Nash:** You are the Bluesky Tom.

**Paul Frazee✌:** Sweet.

**Justin Garrison:** Get your picture at your desk with your thumbs up, or whatever.

**Autumn Nash:** You have to take a picture like that now and post it on Bluesky.

**Justin Garrison:** Yeah. The white shirt, and everything. You're good.

**Paul Frazee✌:** Oh, yeah.

**Justin Garrison:** Awesome. Well, thank you so much, Paul.

**Paul Frazee✌:** Thank you all.

**Break**: \[57:07\]

**Justin Garrison:** Thank you so much, Paul, for coming on the show and talking to us all about how you test and deploy the mobile apps at Bluesky, because that's just a cool area that I have almost zero experience with. And it's always fun to hear more about like how complex that can be, and sort of the tools and the pipelines you use to do that sort of testing.

**Autumn Nash:** It's really interesting the architecture and how it's built. It's really cool. Also, I feel like Paul is more than the staff engineer. He's like the mascot for Bluesky.

**Justin Garrison:** He is the blue butterfly?

**Autumn Nash:** Embodied.

**Justin Garrison:** So for today's outro we have what I'm calling Fresh OSS, a fresh open source -- I think we've had this outro once before, so this might be the first repeat.

**Autumn Nash:** Look at us. We're repeating.

**Justin Garrison:** Yeah. But this is a few different repos that you may want to go check out, especially if you're interested in what we were just talking about on the interview. One is Ozone, which I honestly do not remember if I said this in the interview or if we said this after... Because we talked for like an hour with Paul after that interview. We just kept going about everything, and it was great. But I don't remember --

**Autumn Nash:** What's in the interview and what's not.

**Justin Garrison:** We haven't heard the edit yet, so I don't actually know what's in there. But Ozone is their moderation service. So you can have your own moderator inside of Bluesky, and you can run this moderation service that has block lists, and filters and looks at things for labels. And you can run that yourself as a web service, and then people can subscribe to it. So Ozone is how you do that. So it's open source, under github.com/Bluesky-social

**Autumn Nash:** I also love that you can go to the feeds, and you can -- it's basically like an app store for different algorithms and different feeds, and I think that is so cool... Because that's one thing I've really missed on Mastodon about Twitter, is like the algorithm that brings you new people or new things, and the fact that you can subscribe to all these different feeds and have it in one central area. If I had different Discords, it would be like -- it's so hard to keep track of all of them, or keep track of all your Slacks. So it's like bringing all the different subjects that you're interested in to one place. For my life, I need that central location to keep up with it.

**Justin Garrison:** I like the flexibility of those labelers, because you can do it based on labels, or you can do it on hashtags, and I feel like hashtags have just been so kind of overused in most networks, where if you go to Mastodon, there's more hashtags than there are text in the posts. And same thing with Instagram. It has always been really big on that, where it's like "Oh, you can have as many tags as you want on this post." And then try to do it for some sort of discovery, and to get into someone's feed... But I don't have to do that. I don't have to rely on someone manually putting a tag on something, I can rely on labelers. And Ozone can add those labels to things to be able to filter them. So I can label something without adding it to the actual text that I see. It can be labeled in a way that is transparent to me, it's just metadata from the post.

**Autumn Nash:** Oh my God, I've just found the book feed, and if I go missing for a week, it's not my fault.

**Justin Garrison:** Is it all book recommendations?

**Autumn Nash:** Yes. They have art ones. They have so many cool community-run -- sorry, I'm lost in Bluesky.

**Justin Garrison:** \[01:01:59.07\] There is a KubeCon feed which I've been a part of... Since the last couple of KubeCons they started doing that. I really enjoy -- there's @Devhacking is a feed, @protocoldevelopers, and then there's an open source one... I actually enjoy the Japanese cluster. There's clusters of people, and because I've been trying to learn Japanese, it's nice just to be able to go through and try to read some of it. I can't understand most of it, but just...

**Autumn Nash:** See, that's what I'm talking about. I love reading -- not reading, but learning passively, where you get to read about other people building things, or trying things, or subjects that you would have never heard of if you didn't come across it. I think that's the positives of social media.

**Justin Garrison:** We'll also put in the social app, the actual Bluesky social app, which is what Paul works on. It's open source. You can contribute to it, you can see the code... It runs the Android, the iOS and the web interface for Bluesky. So that's another one that is a really cool thing if you're into seeing how this stuff works and contributing back to it.

I know he was even mentioning - again, I don't remember if it's in the interview - some community contributions that they got, like fixed bugs. There was like "Oh, this is a thing on our backlog", and someone just came in and said "Oh, here's the fix for that thing", and it's awesome.

**Autumn Nash:** I think that's so cool. I love open source.

**Justin Garrison:** The last Bluesky one I'll throw in here is also the PDS, the personal data server. And this is how you actually can run your own instance that gets scraped from the app views and everything else. So it will index your PDS, and your data is stored wherever you run your PDS. And it is an active server, it does require some CPU and a public endpoint, so it can be scraped... But Bluesky is federated now. They have the hosted service, which is what you get by default; no one should ever have to think about it. But for people that say "Hey, I want to run this myself", you can point it over to your own personal data server and ingest all of your own data into it, and you can own that.

**Autumn Nash:** Okay, so tell us about your cool open source projects.

**Justin Garrison:** Well, this is part of my list. I put mostly Bluesky stuff, because I saw that I had recently favorited them.

**Autumn Nash:** Oh, okay.

**Justin Garrison:** I favorite so many GitHub repos. I find them in random places; Hacker News, social media, RSS feeds... And so I star them, but then I forget... I forget what I starred. I don't even know. So I literally have an "if this, then that" as a service that will like do things. It will email me every Monday all of the repos that I starred last week.

**Autumn Nash:** No way. That's kind of cool.

**Justin Garrison:** It's been fantastic, because it reminds me "Oh yeah, I found that thing. It was really cool. I wanted to look into it more." But like when I find it, I might be on my phone, I might be somewhere else... I might be like "Oh, I just want to find this thing." And so every Monday I get an email that's "Hey, by the way, these are the repos you starred." And it's been great. It's been a fantastic thing.

And actually this last repo came up on that, because it's called Prs. Prs. And it's a TUI interface, a terminal user interface for triaging PRs on GitHub. So if you have PRs, a repo that you're working on and you're like "I need to look at my PRs. I need to manage them. I need to do something on them", it gives you a terminal interface to go through them. So it's a little faster than the web interface. It's not like rich text; you can't add reactions and all that other stuff, but you can manage your PRs and figure out if you need to merge them or whatnot through the terminal. And I am a huge fan of terminal interfaces...

**Autumn Nash:** We know.

**Justin Garrison:** I have an awesome Tuis repo that I've been maintaining for I think six or seven years now... And so I remembered this Prs, because I favorited it on my phone, and then it came to me on Monday, and I added it to my awesome Tuis repo. That's kind of my workflow; just like, I collect them down, condense them somewhere so that when I am back at my computer, I can remember to do something with it.

**Autumn Nash:** If you ever lose Justin at a conference, he's either somewhere with an iPad and a terminal, or he's halfway into a Linux soda machine.

**Justin Garrison:** Or I'm taking a nap. Those are the three options for me.

**Autumn Nash:** Or he's looking for Dr. Pepper on an adventure that he has searched for, and he may or may not be back for an hour.

**Justin Garrison:** I might know where most of the, you know...

**Autumn Nash:** He knows where every convenience store with Dr. Pepper is. And if you would like to find him and keep him in one place, what you do is the next days you bring Dr. Pepper and a Rice Krispie treat to said conference. I got you. I got you.

**Justin Garrison:** \[01:06:13.27\] Just a lot of sugar, yeah.

**Autumn Nash:** It's the Justin starter pack. Maybe some candy, too.

**Justin Garrison:** You've learned too much about me in one conference. This is not okay.

**Autumn Nash:** It's cool. Now I'm just gotta come with like the little cute Justin starter packs, so that way we can get through the day.

**Justin Garrison:** I am going to Austin next month, and my favorite thing about going to Texas is this is where Dr. Pepper was created... And they have the best, the actual sugar in bottle Dr. Peppers.

**Autumn Nash:** Oh, no... Are you gonna be like Dr. Pepper-wasted?

**Justin Garrison:** They won't let me bring any back, which is always just a bummer. It's like, I can't fly with it.

**Autumn Nash:** On your birthday I'm gonna ship you real sugar Dr. Pepper, and then like all the Ship Its after that you're just going to be like so hyped the whole time.

**Justin Garrison:** I found out that an Albertsons close to me sells it... And I have cleaned them out multiple times.

**Autumn Nash:** Oh, no.

**Justin Garrison:** It's a real problem...

**Autumn Nash:** Did you finish your Easter candy yet?

**Justin Garrison:** Oh, I keep buying more, because it's on sale. \[laughter\]

**Autumn Nash:** Y'all... If everybody wonders if Justin's more fun the last couple episodes, he is hyped up on Easter candy. How much of your children's Easter candy did you steal? How bad did you \[unintelligible 01:07:24.14\]

**Justin Garrison:** They ate most of it, because I buy my own bags.

**Autumn Nash:** He was like "I'm not relying on their stash. I've got my own."

**Justin Garrison:** Yeah, I'm fine.

**Autumn Nash:** Does Beth just make you your own basket at this point?

**Justin Garrison:** Oh no, I don't need a basket. She just gives me a bag. She's like "Here you go. Here's the candy."

**Autumn Nash:** She's like "I'm not even making it cute here."

**Justin Garrison:** No. It's fine. It just gets in the way.

**Autumn Nash:** He's like "I don't need anything..." Dude, next year I'm gonna send you like a little basket and it's gonna have Dr. Pepper and like all that Easter candy. It's gonna be great.

**Justin Garrison:** I don't want to pretend that I have to open it and be surprised. It's just like "Okay, let me open the bag and pour right in my mouth. It's fine."

**Autumn Nash:** Which one is your favorite? You cracked me up last time we were recording... \[unintelligible 01:08:06.01\] How do you stay so skinny?

**Justin Garrison:** The Starburst jelly beans are amazing, okay?

**Autumn Nash:** Okay, but it's not fair. How do you stay skinny, and you're over here with Dr. Pepper?

**Justin Garrison:** I have a treadmill desk.

**Autumn Nash:** Oh, that's the secret.

**Justin Garrison:** If I'm not recording, I'm walking.

**Autumn Nash:** Okay. I was just like "This is just not fair. I need to know what's going on."

**Justin Garrison:** I walk like 10 to 15 miles a week just standing here at my desk. It's amazing.

**Autumn Nash:** Okay, there was some sort of secret, because I was like "There's no way you eat this much candy. It's not fair."

**Justin Garrison:** And now that the secret is work, you're like "Oh, dang it. That's not what I wanted."

**Autumn Nash:** I thought you were just gonna tell me how to have a good metabolism.

**Justin Garrison:** No, I just work it off. I mean, working it off isn't actually a solution, but... Between eating candy, I just try to eat vegetables as much as possible.

**Autumn Nash:** How do you still have teeth though? Like, that's a lot of candy.

**Justin Garrison:** I got two fillings this week. What are you talking about? \[laughs\]

**Autumn Nash:** Oh, no. Poor thing.

**Justin Garrison:** Granted, those are both old fillings, they cracked, and we're fine. Like, it was not new fillings...

**Autumn Nash:** Sure it is. I saw how big that bag of candy was.

**Justin Garrison:** Well, this is probably where we should end the episode... Thank you all for listening to the crazy 100th episode, and again, if you are on Bluesky, find Autumn and I. We're on there. That is now mainly where I'm active, except for TikTok and YouTube... So yeah, it's been a lot of fun, and I'm looking forward to another maybe 100 episodes. We can keep doing this.

**Autumn Nash:** Let's do it! Also, for episode 101 we're gonna get Justin to drink coffee.

**Justin Garrison:** No.

**Autumn Nash:** He was like "No."

**Justin Garrison:** I'm not gonna have it.

**Justin Garrison:** Alright, thanks everyone, and we'll talk to you next week.
