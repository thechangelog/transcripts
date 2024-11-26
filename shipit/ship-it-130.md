**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me, as always, is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hey, everyone.

**Justin Garrison:** Today on the show we have a conversation I've been looking forward to for quite a while, because I've been interested in ActivityPub and Mastodon and specifically how that infrastructure runs, and how to scale that, and just how the servers talk to each other... And I like decentralized things in the non-scammy financial ways. It was kind of something that I --

**Autumn Nash:** I love that you had to be specific about that.

**Justin Garrison:** I love the internet. And the internet is the most decentralized system you can get, and it scales really well, for a lot of reasons... And then I see this Mastodon thing that's like "Hey, we can kind of do that internet thing, but like portable, on social networks, and let people connect." I've been blogging for a very long time. I used to have a list of WebRing sites that I also would send people to, if people are old enough to remember WebRings...

**Autumn Nash:** Wait, what's WebRing?

**Justin Garrison:** WebRings weren't like a way to communicate between sites, but it was a way to like list out like sites you're also reading. It was like a recommendation engine for people that had websites. They're like "I have a blog. If you like my blog, you'll probably like these other people's blogs", and they would link to other people. So it was like a discovery engine before things had discovery engines. It was all like personally curated, and then no one ever updated them.

**Autumn Nash:** You're like my favorite old best friend.

**Justin Garrison:** It's weird, because I never grew up with a computer...

**Autumn Nash:** I know, I've had a computer since I was like -- I fell in love with computers in elementary school, and you're like "I got one in college..." How, sir? Did you just not come out of your dorm room at some point? Did you just lock yourself in there and you found every -- how did you have time to date Beth? It's a miracle that you got married.

**Justin Garrison:** We met because I fixed her computer.

**Autumn Nash:** That is the cutest nerd thing ever.

**Justin Garrison:** I needed a job in college, and I got a job because there was a lab across the hall -- the dorm room had a lab, which is what I used all day, every day, because I had no computer myself.

**Autumn Nash:** Can we talk about how cute and nerdy that is? You fixed her computer, and then you were married for 20 years.

**Justin Garrison:** I didn't fix her computer, though. I worked on her computer.

**Autumn Nash:** Did you break it?

**Justin Garrison:** No, I didn't sabotage it. It was a whole thing where --

**Autumn Nash:** He was like "She has to come back if it doesn't turn on ever."

**Justin Garrison:** I worked at the IT departments. It was a student, IT-run thing, and so we would repair computers. We also were one of the first colleges that had Wi-Fi throughout the whole school. And so every year when people would come, they would come with desktops. No one had laptops in 2001. And so they would come with desktops, and be like "I need to get on the network." "We're we're going to install a Wi-Fi card for you."

**Autumn Nash:** You went to college when there were no laptops?

**Justin Garrison:** Yeah, we had a laptop rental program, so that people could rent laptops if they wanted to. And those came with optional Wi-Fi. It was like -- yeah, it was the thing. But she came with a desktop that was an old MacTel.

**Autumn Nash:** Like, she carried a desktop into your --

**Justin Garrison:** Yeah, everyone moved a desktop. Everyone came with desktops. And she needed a Wi-Fi card to connect... And it was in our shop or whatever, and they were like "Oh, we need to go deliver this to the customer. We have to go bring it back to the dorm room." And they're like "Okay--" I was working the time. "Hey, where is it?" And someone else knew her. Someone's like "Oh, it's Beth." I was like "Who's this? I don't know where this person is." "Oh, yeah, she has a shaved head." And I'm like "I've seen her around. I want to meet her. Can I please bring that computer back?" And I literally was like "Let me take over this ticket." I delivered the computer, and I did none of the work.

**Autumn Nash:** Okay, but this is the cutest thing I've ever heard of. He was like "Bro, this is my ticket. Don't even look at the ticket."

**Justin Garrison:** I'm literally -- I'm pointing over on my left and I can see the computer. I still have the computer. The computer, the reason we met. I still have the computer. It is a terrible knockoff Mac, when Apple used to license their operating system.

**Autumn Nash:** This is like the cutest thing ever. This is the most warm and fuzzy... It's like, okay, I believe in love again.

**Justin Garrison:** That is how we met. Because I -- I didn't fix her computer, I delivered her computer after it was fixed.

**Autumn Nash:** That is the most adorable story ever. It's so cute. I might have like a small tear right there. It's so warm and fuzzy. This is the cutest nerd story.

**Justin Garrison:** This was way before Bumble and dating apps.

**Autumn Nash:** Yeah. I mean, I have to fix people's computer to find my soulmate? This is bullshit.

**Justin Garrison:** If you can fix someone's printer, that might be like a new --

**Autumn Nash:** I want someone who can fix my printer.

**Justin Garrison:** Where's your 3D printer coming?

**Autumn Nash:** Never...

**Justin Garrison:** Sorry. Anyway. That's not what we're her to talk --

**Autumn Nash:** I did a chargeback, okay? I'm so bitter... Do you see the filament on the ground? Do you see it? Do you see it? It's just haunting me.

**Justin Garrison:** Boxes of filament.

**Autumn Nash:** Tons of filament, but you're sad, and you have no 3D printer.

**Justin Garrison:** You're over there with like a blow dryer, trying to melt it into some sort of like figure... Anyway, sorry. That's not what we're here to talk. Preston Doster is on the call. You are an infrastructure architect at Twilio, which is not at all what we want to talk about.

**Preston Doster:** \[08:02\] No, not today.

**Autumn Nash:** I have questions, though. What does Twilio do?

**Preston Doster:** What does Twilio do? So I would call us a telecommunications company. We kind of grew up by building APIs that abstract the complexity of doing things like making phone calls, or sending SMS... We've grown into a lot of different channels now, and into almost like the contact center space.

**Autumn Nash:** Like, who uses Twilio and for like what?

**Justin Garrison:** I'm a paying customer, just FYI.

**Preston Doster:** Yeah, yeah. So we started out really marketing to engineers. So people who wanted to build apps to send, say, SMS. And what we've grown into is this CPaaS, or customer service platform, really, where it's all about -- so like when you order from Uber Eats, or from DoorDash, or whoever, and you get that text that says "Hey, your dasher is waiting for your order." If it sends it to you by SMS, there's a potential that's going through Twilio. Because they would use our API to abstract all that complexity. 2FA... Yeah, exactly.

**Justin Garrison:** The thing that I've been wanting - and I've been paying for a Twilio number for years...

**Preston Doster:** Awesome, thank you.

**Autumn Nash:** He's like "Thank you."

**Justin Garrison:** ...because I generated a number, and it's like a buck a year. It's like "Yeah, you keep the phone number for a year." And it was like an L.A, a 323 number, and it was a good... I don't remember what the number was. I'd have to look it up now. But I'm just like, every year I'm like "Yeah, I'll pay the dollar. I'll keep it." It's like a domain name, basically.

**Preston Doster:** Yeah, exactly.

**Autumn Nash:** I love how engineers just collect domains, and phone numbers...

**Justin Garrison:** They've got all the good ones, right?

**Autumn Nash:** Yeah.

**Justin Garrison:** But the thing I've been wanting forever from Twilio is iMessage or RCS support. And I know you can't talk about roadmaps or anything like that, but I ended up going to another one, SendBlue. I'm pretty sure they're built on top of Twilio, and they implemented the iMessage stuff on top of like the base number handling. But it does iMessage properly.

And so I was always like "Oh, I want RCS." Like, I just want like straight -- now that Apple's iOS supports RCS too, I'm like "How do I get a good number RCS interaction that's a little more portable than iMessage?"

**Preston Doster:** Yeah, totally. I can send you some docs on RCS stuff.

**Justin Garrison:** Is it working?

**Preston Doster:** Yeah.

**Justin Garrison:** The last time I looked at it was last year.

**Preston Doster:** Yeah, I'll send you some stuff.

**Justin Garrison:** Sweet. Man, not another project... I've gotta finish that project I shelved a year ago. Cool. But we wanted to talk about Hachyderm. You are part of the infrastructure team at Hachyderm.io, which is one of the largest Mastodon instances that I know of. I know there are some big ones out there. I mean, obviously, Mastodon Social I think is the largest, still, by probably orders of magnitude...

**Autumn Nash:** I'm on your server.

**Justin Garrison:** You're on Hachyderm ?

**Autumn Nash:** Yeah.

**Justin Garrison:** And so I wanted to talk about like -- you've had that for a little while now. I know Kris Nova and friends started it, and it's been going for a long time... And one of the things I loved about how you're running it is how open you are with the data. And you're like "This is how this works, and this is how the metrics are, and this is how we scale it, and this is --" All that stuff is really cool to see from the outside. I'm like "Oh, cool. I don't have to run it to see your dashboards."

**Preston Doster:** Yeah, absolutely. I was super-fortunate to cross paths with Kris while she was with us, while I was at Twilio... What was it - probably about like two years ago now, when there was the large Twitter exodus...

**Justin Garrison:** One of the first waves.

**Autumn Nash:** I know. It seems to be like another one every six months.

**Preston Doster:** Yeah, yeah. We're on like wave seven now, or something like that.

**Autumn Nash:** Yeah.

**Preston Doster:** But yeah, Kris had started Hachyderm literally running it out of her basement. There was an old Dell PowerEdge named Alice that got us through like the first days of Hachyderm. And then we realized with that really big wave from Twitter I think we went from something like 500 people to - I think we had a peak of like thirty six thousand over the course of like a handful of weeks. So you know, ridiculous growth. Which kind of prompted us to say "Hey, we've actually got to get out of the basement and build some proper infrastructure." So like I said, I crossed paths with Kris, and she was like "Hey, do you want to come help out?" And the rest is kind of history.

\[11:53\] So it's been fun writing the growth waves, especially using purely open source software, purely decentralized software like Mastodon is... And yeah, just really learning it, and how it scales, and building our infra and tuning it to serve the folks that are on it today.

**Autumn Nash:** She was so cool, watching her do like the different -- she would do kind of like... I don't know if it would be an AMA, but she would talk about the different infrastructure and how she was building it, and all that. That was the coolest part about Mastodon; just the different ways that she would be so open and talk about the different servers that she was using, and... She would talk about how she's going to like do maintenance, or... You know, all that cool stuff. And it was really cool that she would --

**Justin Garrison:** Just live stream it. She was just like "I've got some stuff to do. Let me jump in front of a camera and we're going to talk through it."

**Autumn Nash:** That was the best part of Mastodon. That's probably the only few things that I would look forward to on there.

**Preston Doster:** Hm. Yeah.

**Justin Garrison:** So how has that -- you're using the official Mastodon instance, right? Because there are forks, there are other options. I used one for a little while that Cloudflare wrote, Wildebeest, which was all integrated into their workers, and stuff like that... And I thought it was really cool, because it was like a "serverless" Mastodon, but it was like extremely difficult to upgrade and to change things. But you're using the official Mastodon software, which is a Ruby on Rails app, with like a Postgres database, right?

**Preston Doster:** Yup. You got it. That's kind of the core. Yup.

**Justin Garrison:** Yeah. And if anyone ever run Ruby on Rails, you're going to deal with Sidekiq, you're going to deal with PgBouncer, things like that, or like the traditional ways of scaling. Can you describe that path of like "Hey, we went from 500 users to over 30,000"?

**Preston Doster:** Yeah, totally. What's awesome is you actually hit the main kind of actors in the ecosystem. So really looking at it from bottom's up... We went from Alice, which was one server that was hosting everything. The plan was then to break things out, and like you said, Postgres kind of at the bottom, as the database. What we ended up doing there is we purchased and we actually run metal servers in Hetzner, in Germany, in their Frankfurt data center. So Postgres sits on that. So it's a metal server. It's quite large. Plenty of spare capacity for growth, those sorts of things. And there's supposed to be. And this is one of our big projects that we've got to do, is build up our secondary replica, so that we've got some good failover, good redundancy there. But that's kind of at the bottom. And as you mentioned, as we go up the stack, PgBouncer, absolutely, for connection pooling, and making sure that we're not overloading the database in that sense.

There are a pair of Redises that do both ephemeral caching and a bit more like permanent type caching, and that help speed up interactions through the web server. As we go up from there, you mentioned Sidekiq. Sidekiq is really the heart of how all the decentralized stuff works. If you can imagine, at any point in time in the Fediverse, so many events are happening, and you've got to both advertise events out, as things are happening on your server, you've got to be able to pull events in, that are happening in the world, and process those in a reasonable amount of time.

So lots of Sidekiq. So a good amount of our time and energy, and some of the server capacity... It was just making sure those jobs are doing what they need to go to. And we've got a lot of different cues involved, a lot of parallelism involved there as well...

**Justin Garrison:** And I think that, at least from my understanding, that's like the core differences to me between something like Mastodon and something like Blue Sky, where all of the heavylifting of how the world is interacting is on individual Mastodon instances, where every single one of them... I like a post, I send an update, I do something - that needs to go tell all of my anyone I follow on different servers, and then I need to hear from all of those other people on all the different servers. So like on a single server, it seems like it's pretty constrained. Like, if everyone only followed people on Hachyderm, you're probably fine. Like, you're not doing a lot of network traffic... I can do internal processes, and do that stuff. But once you start having dozens of other servers, or lots of people following other people on other instances, that seems to cause a lot of extra stress on your instance.

**Preston Doster:** \[16:03\] Absolutely. Yeah. Yeah. Yeah. Federations work is fun, because - yeah, as you can imagine, as that social graph grows, you've got to interact with increasingly more and more and points around the world. We've got some folks who have some really large followings, and what's fun is sometimes that causes spikes. You can go look at Grafana, you can go look at our \[unintelligible 00:16:26.05\] and see where certain events are happening just because there's so much of that kind of chat and back and forth happening.

**Justin Garrison:** I remember a long time ago Twitter had -- they said they had a whole dedicated server rack for Justin Bieber.

**Preston Doster:** I wouldn't be surprised.

**Justin Garrison:** Because of the architecture, whenever someone with a big following was sending out an update, it caused so much traffic they had to scale it up, and for a long time they were on prem, they had bare metal stuff, and it was just like "We have a rack for Justin Bieber." And it's just like "Wow!" That was amazing, just to think of that, of like "Okay, how often is he interacting?" it doesn't matter. It's just, because we want that to go out to the millions of people that want to see the thing he's saying, and then they come back and interact with it, and all that stuff... And all of those jobs just have to process in some order. They have to coordinate, and they have to resync, and everything. Wow.

**Preston Doster:** Yeah, exactly.

**Autumn Nash:** That's one of the best stories, or I guess use cases in --

**Justin Garrison:** Data-driven applications?

**Autumn Nash:** Yes. Designing data-intensive applications. They talked about when they had to split the architecture for really popular Twitter users, versus like regular Twitter users... And it's amazing how much work and how different each user was.

**Justin Garrison:** Tim Banks on the show just a few months ago or whatever was talking about that, with like the hot girl problem.

**Autumn Nash:** Well, he was talking about the Tinder version, which is wild, because we think of -- it's even just funnier, because people use travel mode so much. You know what I mean? And like just moving from place to place... Who would have thought that would be a whole different reason that you had to change architecture? It's crazy the way that we have changed the way that we use the internet and interact with different applications, and applications for different things, and how that causes different architectures.

**Justin Garrison:** Am I the only one who -- I'll go download an app or I'll go to websites and something slow or something acts weird, and I try to figure out what the architecture behind it is... Because I feel like a lot of times -- I'm like "Oh..." I was like "I bet this is like a Sidekiq problem." Like, they're trying to scale up something -- like, there's a queue somewhere.

**Autumn Nash:** Trying to diagnose random apps...

**Justin Garrison:** I totally do it. I'm just like "I bet this is like a queuing problem somewhere, that someone is like "Oh, you didn't scale up this portion of it", or retries, or something like that.

**Preston Doster:** Yeah. Yeah. Let's see... So other stuff in the architecture... So Mastodon Web is a Puma application. So in our ecosystem, we actually -- we only have one instance of that. And again, that's another little mini project that we've got, is to build some redundancy in there, and a scale point there. And then the last edge for us is what we call our CDN edge. That's something we're hosting in Linode, or Linode, I guess, depending on how you like to say that. And we've got points of presence across the world, just for caching for speed...

**Justin Garrison:** Linode got bought by Akamai, right?

**Preston Doster:** They did. Yes. Yeah. I'm still stuck on the old name.

**Justin Garrison:** Oh, I'm pretty sure the branding still stays. They have like Linode by Akamai, or something like that.

**Preston Doster:** Yeah. So we have those points of presence, so like West/East U.S., Europe, Japan, and occasionally light those up.

**Justin Garrison:** At what point did you feel like you had to have a CDN?

**Preston Doster:** So actually, when we did the move from Alice, from the basement, into kind of our current architecture, we implemented it then. And actually, a big part of it was a lot of the traffic involved Mastodon is media files. So images, movies, audio, whatever. And the stress that it put on just like the core server, even with caching, to provide that better experience... We were like "Okay, we've got to do CDN. We have to have something that's closer to our folks." And it's distributing that cash to take the load off the core server. So that was already in the architecture there.

**Justin Garrison:** \[19:52\] If I remember correctly, when it was on Alice, the limiting -- there was NFS for that storage, right?

**Preston Doster:** Oh, yes. Yeah.

**Justin Garrison:** It was NFS on the backend that was storing that. Where is that stored now? Because that's a lot of just data. Because it's on a CDN, but you've got - what, hundreds of gigs maybe that are coming in?

**Preston Doster:** Oh, terabytes. Easily. So that's all in DigitalOcean now. So we're using their Spaces product.

**Justin Garrison:** That's right. Okay.

**Preston Doster:** They're an S3-compatible API.

**Autumn Nash:** Not to distract from like where this is going, but how do you guys fund this?

**Preston Doster:** That is a super-great question. So we were super-fortunate in that throughout the lifetime of Hachyderm we are part of what we call the Nivenly Foundation, which is a kind of open source nonprofit foundation that Kris founded, again, about two years ago. I'm a member of the board there. And that's kind of like the umbrella organization. And we have folks who are kind enough to contribute to us, who believe in the mission. And part of those contributions go to Hachyderm as well. So we have people who are directly contributing to Hachyderm, we have people who are contributing to Nivenly, and that's where that comes from.

**Autumn Nash:** What does Nivenly do outside of Hachyderm?

**Preston Doster:** Yeah, totally. So Nivenly - we're all about... And again, this is a lot of Kris's vision, was building a foundation that can help open source projects really identify what we call pattern of patterns. So how do we start new open source projects? How do we fund them? How do we help them self-govern, so that the contributors, the maintainers of those open source projects can retain control and direction and vision for their individual projects? So really about teaching and finding different unique ways that we can support them. So again, open source contributors can go do the open source thing, right? And the dream would really be be able to support them in such a way that maybe they don't have to have their normal day job.

**Autumn Nash:** It's really interesting.

**Preston Doster:** Yeah, totally. And we've got a couple of a couple of projects under that right now, Hachyderm being one of them.

**Justin Garrison:** I know Nivenly's been around for a little while, and Kris and I were talking about it like back in the day. Are you open about the funding for that? Because I know there's a donation side of it, and some of it is like actual "I pay dollars for it", and there's some of like sponsorship; Digital Ocean is sponsoring the object storage for Hachyderm. Do you break out the where the spend goes? Is there a line that says "Hachyderm costs this much money"?

**Preston Doster:** Yeah. So funny enough, I'm the treasurer for Nivenly.

**Justin Garrison:** Great.

**Preston Doster:** So yes. So we do track all that on the backside. We have not - or I will actually even say I have not done a good job of publishing that regularly. But our intent is to publish that on a quarterly basis, and be fully transparent about what are what are the types of in-kind donations are we getting, what are the types of membership donations that we're getting, and then where do those costs break down.

**Justin Garrison:** So how much is Hachyderm cost?

**Preston Doster:** So Hachyderm right now probably runs us just over six hundred dollars a month. So the vast majority of that spend goes towards media storage.

**Justin Garrison:** Well, the CDN portion, right? Because the DigitalOcean side is sponsored, right?

**Preston Doster:** It actually isn't.

**Justin Garrison:** Oh, okay.

**Preston Doster:** So I think right now we're getting like a little bit of a discount. So yeah, DigitalOcean, if you're listening, sponsor -- we'd be happy to talk. But yeah, that all comes out of Hachyderm's funding. Yeah.

**Autumn Nash:** So did you guys buy the hardware up front with like donations?

**Preston Doster:** Yeah. So we're actually leasing that through Hetzner. So they have actually -- Hetzner has incredibly reasonable pricing, both for metal and their cloud products.

**Justin Garrison:** Who'd have thought?

**Preston Doster:** Yeah. We lease a few servers from them, and - yeah, that's how we're operating today. So we actually don't own any of the hardware at this point.

**Autumn Nash:** I didn't even know that they had a cloud. Like, I knew that they did leasing for like bare metal, but that's really interesting.

**Preston Doster:** Yeah, totally. And that's actually one of the interesting quirks or maybe features of Hachyderm... As we talked to the stack there, all these pieces are in different clouds. We explicitly chose not to go with one of the larger clouds, and put all our eggs in one basket... But the idea being that, because again, the Mastodon footprint is relatively straightforward and simple. Simple is probably the wrong word, but --

**Justin Garrison:** Simple if you're familiar with Rails, right?

**Preston Doster:** Exactly. So there's effectively one application that we're hosting. We said "Hey, we're going to go multi-cloud, so in the event that we have an issue with one of them, we can easily flip that piece that's being hosted there elsewhere.

**Break**: \[24:12\]

**Justin Garrison:** How big is the team that manages Hachyderm?

**Preston Doster:** It's a rotating cast of folks. We've got some core folks, I would say probably like four or five core folks who are around, and then volunteers who kind of come and go. And what's nice about the infrastructure that we've set up so far is that it's -- I mean, it's relatively stable. Probably the main stressors that would cause it to become metastable would be maybe like another Twitter exodus. Another big surge of growth. But even with that, we've kind of planned for the future. We have got spare capacity in kind of like the key scale points right now.

So yeah, largely the software just kind of runs . The big activities end up being stuff like major upgrades, so version bumps from Mastodon upstream... So we just did 4.3.0 last week, which is probably our biggest upgrade that we've done in a while... And then we did 4.3.1, which was basically none of it, because it was super-simple. But generally, the hard upgrades are upgrades that involve database migrations.

**Autumn Nash:** Those are always the hard ones.

**Preston Doster:** Exactly. Exactly. It's just because you're touching the real data. There's always a little bit of fear there, but we've got some good mitigations in case --

**Justin Garrison:** Is it still Rake?

**Preston Doster:** Yeah. So it's just core Rails stuff.

**Justin Garrison:** Rake migrate DB. Okay. Cool.

**Preston Doster:** There you go.

**Autumn Nash:** Has the Redis licensing affected the way that Hachyderm runs at all?

**Preston Doster:** It hasn't... But we have had conversations about moving to something that is truly open source. And kind of in the same vein Terraform going to the BSL license... We talked about OpenTofu... Actually, at this point we've been -- I forget which version of Terraform it is. But we've pinned the very last version of Terraform that was the open source license. And then again, at some point another mini project could be "Let's go OpenTofu."

**Justin Garrison:** You have multiple clouds, which Terraform is just great at -- it's just like "Hey, we'll make this look like one thing, basically." But then you only have a few servers in Hetzner. How are you actually deploying that? Is it like Terraform create my server or manage my server, and then like Ansible provision the application? Is it like a Kubernetes cluster on those servers? What are you doing?

**Preston Doster:** Yeah, so less glorious than that. So we actually -- again, another key infrastructure decision that we made pretty early on was no Kubernetes, because we wanted to avoid really the complexity that that introduces. And again, don't get me wrong; I use Kubernetes all day at day job. But for this, we made a key decision. We're like "Hey, it adds, layers of indirection", especially when we think about the network and the abstractions that you have to deal with your Kube API.

And we said, "Hey, we're going to treat this just like a simple application." And right now - I will be super-honest - deployments are pretty manual. So it's SSH in, go do the thing.

**Preston Doster:** We've done some light Ansible work around kind of the post provisioning after a host boots... But yeah, for the most part it's actually manual, with the core info around the hosts themselves being Terraform.

**Justin Garrison:** Yeah. You're like "I get an IP address and I'm going to go do the thing as an admin that I know how to do." I think a lot of people overemphasize "Everything needs to be automated." It's like, no. I've run a lot of infrastructure in a lot of places, and having manual steps is actually really important for some things...

**Preston Doster:** Yeah, totally. And there are certain runbooks for activities that happen a lot. So again, mastodon upgrade. There's a standard script that we run every single time we do a Mastodon upgrade. And it's relatively -- like, it's not that it's unattended, it's just very automated, and a human watches it, and when it's done, it's done.

And yeah, maybe an upgrade takes -- again, without a database migration, maybe an upgrade takes 30 minutes. Even when we did the fourth \[unintelligible 00:31:35.17\] upgrade, I think that we did that over the course of like maybe two hours. And again, largely uneventful, pretty straightforward. It just involved a database migration that took a little bit longer.

**Autumn Nash:** Do you guys have like a team of people that get paged for Mastodon?

**Preston Doster:** We actually don't. So the way that we've got it set up right now is we've got Uptime Robot that will kind of do our synthetic checks to our public-facing properties. That will alert into Discord. We've got folks kind of around the world, and we've got an infra channel. If somebody sees something, they will go do something. So nothing as fancy as actually getting paged.

**Justin Garrison:** \[32:13\] I'm on the infrastructure team for Southern California Linux Expo, and we have a Slack channel that has a Pager -- not PagerDuty. Data Dog that's like "Hey, guess what? The site's down." Someone's like "Oh, I'm on. I'll check it."

**Preston Doster:** Yeah, absolutely. And then, to kind of continue the observability stack again, another mini project coming up here in a second... So we've got Grafana. There's a public side of Grafana. So if you actually want to look at our public dashboards, you can just go to grafana.hachyderm.io. You can see the public dashboard that kind of has like the key vitals. Not quite at the level of like SLO, more like an SLI. We're looking at very specific health attributes of the different services that we provide.

**Justin Garrison:** That requires a login.

**Preston Doster:** I might have to send you the public dashboard specifically. Yeah, it's probably --

**Justin Garrison:** I was going to put it in the notes, but yeah.

**Preston Doster:** Yeah. I'll send it to you afterward. But yeah, you can look at kind of the key metrics. And again, we talked about Sidekiq earlier... That's probably one of the main things that we watch, is how hot are the Sidekiq queues. Are they getting super-deep? Are they getting backed up for some reason?

**Justin Garrison:** What if it gets stuck and you have to kick it?

**Preston Doster:** You've gotta do something. So Grafana kind of is that main visualization layer, backed by Prometheus for metrics... We're manually registering servers there, for scrapes, and things like that. Not too long ago we set up Loki and \[unintelligible 00:33:27.26\] so they're available on Grafana as well. And - what else from \[unintelligible 00:33:33.16\] Oh, the mini project that's coming up is in Mastodon 4.3.0 there's finally support for OpenTelemetry. So next little mini project is get \[unintelligible 00:33:43.29\] and start presenting that... Which is actually going to be pretty important, because as of 4.3.0 they also deprecated the StatsD, I guess, commission.

**Justin Garrison:** Oh... We just had Austin Parker on the show, who's on the OTel board, which was a really fun conversation. So yeah.

**Preston Doster:** Awesome. Super-cool. So that's going to be a fun little mini project. That might be something I'd try to do this weekend, or something. So yeah, totally.

**Justin Garrison:** You said you've been going through these waves of people leaving everything, and you went from that 500 to over 30,000... How many active users are on it today?

**Preston Doster:** So I think the last time I checked monthly active users was somewhere around 11,000 to 12,000. So that's still a lot of folks. So I think total accounts was something like 55,000. That's on the public dashboard as well. I think monthly active was like 11k or so. Yeah.

**Justin Garrison:** I mean, it's been running okay, you've scaled up the things... The things that -- like, the Redis queues and the PgBouncers... Are there other areas that you think like "This is the next thing that's going to fall over"? If you get to if you get to 100,000 users or 30,000 active monthly, what's the next thing that's going to break?

**Preston Doster:** Yeah, totally. I think insofar as just like scaling... It's probably Sidekiq, where there's probably good opportunity for us to do a bit better -- maybe like reactive auto-scaling even, with Sidekiq, where it's like "Hey, we have a predefined threshold where we go spin up another maybe machine that goes and runs X number of Sidekiq queues or replicas to go handle load whenever we're a certain percentage behind, or a certain percentage deep in the queues." But I mean, that generally tends to be the thing that gets stressed the most. That's where we see things get hot. The website - I mentioned earlier there's a project to put some redundancy there. That's more from like a redundancy and a failure mitigation perspective, and less from like a scale or a stress point. It actually tends to do pretty okay. And then -- I mean, I'm always afraid of the database, just because the data is the data... So I think there's some good opportunities there.

Again, less from like a scaling perspective, because Postgres does a freaking awesome job of just like running so well. So it'd be more, again, from like a read replica perspective, maybe offload a little bit from the primary, but more from like a "Hey, if the big database goes down, do we have a place to to flip quickly without having to restore from backup?" That sort of thing.

**Justin Garrison:** Yeah.

**Autumn Nash:** How many backups do you have currently?

**Preston Doster:** \[36:07\] So right now we do a weekly full backup. I think we're keeping those for -- I'll have to go double-check how long we're keeping the full backup for three weeks at a time, 21 days. And then we do a daily incremental diff. So we're actually in a pretty good position from a backup perspective.

**Autumn Nash:** That is actually really good, especially for how small your team is and the money you're spending per month.

**Preston Doster:** Exactly. Well, and for us too, we can have that small team, and have some solace in the fact that "Hey, if something really, really bad happened", like let's say all the disks for whatever failed on that primary, we can get back and have a reasonable kind of like RPO, RTO.

**Autumn Nash:** I think it's also because you have a very talented team. I don't know if it could be run the same with the amount of people you have if you guys didn't have so much experience.

**Preston Doster:** Absolutely. Yeah, don't get me wrong, the folks that we had building the initial architecture to get us here that actually executed on it, the folks that have been helping us over the years, even the folks who have just showed up for like a month or two, done a little bit and then gone and done the next thing - everybody's been amazing. And we absolutely wouldn't be here, we wouldn't be able to run this without those folks.

**Autumn Nash:** Well, you're one of the talented people, too. But...

**Preston Doster:** I try to help, you know? But just think about other scale points, again... Like, I just always come back to Sidekiq, because that is, again, as the Fediverse graph grows, that's the thing that gets really, really stressed.

**Autumn Nash:** Has Sidekiq and database been the most painful part of your infrastructure?

**Preston Doster:** Yes. Yes, period.

**Justin Garrison:** I mean, Redis is pretty commonly known, and just kind of works, and then Puma is like "Yeah, Puma's fine."

**Preston Doster:** "It's there." Yeah, exactly. Yeah, when I think back to incidents that we've had, or challenges that we've had, or like the scary moments that we've had, it's generally been - yeah, Sidekiq queues are way backed up. What's up? And then really figuring out like the tuning... Hazel Weakly did a lot of really great work around tuning of those queues, parallelism, number of queues, where they're actually deployed, that sort of stuff. And then the database. It's just like --

**Autumn Nash:** The Postgres.

**Preston Doster:** Yeah. For Postgres. And then it was essentially just "Let's give it a lot of power, a lot of CPU, a lot of memory, fast disks, and let's over-provision, so that we know it's ready for it."

**Justin Garrison:** Which is interesting too, because the vertical scaling side of it when you're using a metal server is just so much more cost-efficient than "Oh, let me scale up this EC2 instance", which is like my cost is going to go up four times.

**Autumn Nash:** But that's hard with relational databases, because they take so much CPU.

**Justin Garrison:** They'll take what you give them, right?

**Preston Doster:** Yeah, exactly.

**Autumn Nash:** So everybody's like "We can just do everything on Postgres", which - Postgres is a beast. But I think we're also going to learn why we have non-relational databases or NoSQL databases, because everyone's just like "Put everything in." And I'm like "I think you forgot the scaling problems that people have on a relational database." But Postgres is like the GOAT, and everything runs on it.

**Preston Doster:** Yeah, exactly. And the other thing that we have to keep in mind is because they're metal servers, if we want another one... If we say we're going to go add another server, that is a process that takes a week.

**Autumn Nash:** That's actually fast, though.

**Preston Doster:** Yeah, don't get me wrong. That's fast. Hetzner has been very responsive, very reactive from that perspective. But it's not "Hey, I go to EC2 and go do a run instances, and suddenly I've got another machine in a couple of minutes."

**Autumn Nash:** Yeah, exactly.

**Preston Doster:** So we've got to have some pre-planning and foresight there. And again, it was just like "Hey, let's get a big box."

**Justin Garrison:** Yeah. You mentioned Hazel, and we're going to have her on the show in a couple of weeks... But she and I were talking about just like the progression of database infrastructure, and I thought one of the most fascinating things was when it was running off of Alice, one of the things that Kris kept getting calls from her ISP... Like, you're doing a lot of traffic. You need to get you need to get a business plan, right? So that was part of the motivator of like "We actually -- we can't run this big social network from someone's house."

**Preston Doster:** \[40:08\] Yeah, exactly. That was a big part of it. Transferring it to like a foundation -- again, \[unintelligible 00:40:12.03\] basement was a big part of it as well... And then also starting to even think about things like data residency, and just thinking about the different legal jurisdictions that we operate in, where we have folks who have data... And it was like "Okay, hey, we're going to move to the EU very specifically, as a very specific choice, and Germany as a very specific choice", because of the protections offered there, and the strength of those laws.

**Autumn Nash:** I remember she posted a picture of Alice in her basement, and it was so cool... You almost forget how much servers do for social media, because just everything lives in your phone and in the cloud, and to see a physical server and everybody like being connected on it... It was so cool.

**Justin Garrison:** And the fact that that one physical server from someone's house could handle 500-ish people on "Here's my server. Like, this is fine." Before the ISPs come knocking at the door, before scaling out, and you don't need PgBouncer, and all that stuff... You're like "I have enough disk capacity, with some manifest maybe, to do this." It's maybe not amazing, but it works.

And people underestimate, like "I want to go start a blog. I want to go do something --" Like, just go run it from your website, or from your house. You have a public IP address. You can DNS that, and you can even rotate, all that stuff. And you can just do it from your house and start, without needing to like go pay for all this other stuff.

**Preston Doster:** Yeah, absolutely. And one thing the Mastodon project has done really well... I know I said we don't use Kubernetes, or containerized Mastodon... They've done an excellent job of building this little micro ecosystem, where - yeah, if you run Kubernetes, you can very easily just say "I want a Mastodon", and you go apply the deployment and you've got one.

Which is super-cool from like an approachability, a low barrier to entry perspective.

**Justin Garrison:** As long as you know Kubernetes.

**Preston Doster:** As long as you know Kubernetes.

**Justin Garrison:** The bar is actually kind of high... But also the same with Rails, right? If you know how to run a Rails app, then you're like "Oh, this is all familiar." That was the whole point of Rails, was just to make it familiar to everyone. If you go from one Rails app to the other - guess what? This is going to scale the same way, and it's going to be very familiar to debug it and to see what's going on.

**Autumn Nash:** Okay, but why do they use end so many times?

**Preston Doster:** Why do they use what so many times?

**Autumn Nash:** For Ruby, when they do like end, end, end, end, end, instead of the brackets... It drives me nuts. I just want to know who did this, and why are they so mean.

**Justin Garrison:** Do you want your curly braces?

**Autumn Nash:** Yes.

**Preston Doster:** Give me curly braces, yeah.

**Autumn Nash:** Because you close the braces. \[unintelligible 00:42:40.05\] I've spent so many hours with a missing end... Like, I have flashbacks, like...

**Preston Doster:** Yes, I am not a Ruby person, but I've learned enough to be dangerous and to at least keep Mastodon running.

**Justin Garrison:** I mean, I would rather tune Sidekiq than try to dive into the JVM again. The two big apps I've done in my life are JVMs or Ruby, and I'm like "No, give me give me Ruby."

**Autumn Nash:** I'll take the brackets and the structure, because I hate unstructured --

**Justin Garrison:** You like sentence long functions?

**Autumn Nash:** Yes...

**Justin Garrison:** It's cool. Do you want to \[unintelligible 00:43:15.28\]

**Autumn Nash:** But we know like specifically what we're asking it to do. Okay, so what were some of the laws that made you pick the EU? And Germany, specifically. What were some of the things that motivated you for that?

**Preston Doster:** Yeah, absolutely. So GDPR, obviously, is probably like the big prevailing one. And again, the type of data we have is really interesting, because in a lot of ways it's -- I'm not going to say it's PII, in the sense it's like personal identifiable information...

**Autumn Nash:** Sometimes it is, when it's on social media...

**Preston Doster:** \[43:45\] But it could be. People could put interesting PII out there. But it's information that is very personal to the people who are posting it. Again, the intent was for us to be in a place where we could feel safe that maybe the prevailing government or whatever wouldn't show up and be like "Yo, Hachyderm, you're hosting this type of content. We're going to shut you down."

**Justin Garrison:** Mastodon instances have gone down for that. That's not even like a theoretical "Oh, no, this maybe is happening." It was fascinated talking to Hazel about it. One of the reasons that it's under Nivenly as a foundation is to protect the people that are doing the work. Because it's like "Oh, you're the web admin on this thing? You're coming to court."

**Preston Doster:** "We're coming to you." Yeah, exactly. Especially a world where it's like DMCA takedown notices... Think of just all the different legal ways that people can go after.

**Justin Garrison:** Can you describe why that's specifically an issue for something like Mastodon? ...where it's like, if I run a website, that's not a problem.

**Preston Doster:** Sure. Like DMCA --

**Justin Garrison:** I mean just like the content. Why is other people posting content on other servers a problem for you?

**Preston Doster:** Sure. Yeah. So part of it is -- you know, people can post whatever. And again, depending on the location of the server, depending on the authorities, the prevailing government, and the type of content that's being posted, we could be put in the crosshairs where the government would be like "Hey, you're hosting this content that in our jurisdiction is illegal, or offensive, or whatever. You need to take care of it." Or "We may block your site" or "Hey, we may go after your company, or the officers of your company, because again, you're potentially doing something illegal in our jurisdiction." So finding kind of that sweet spot, and again, Germany was it when we did the move. It was super-important for us.

**Autumn Nash:** It seems like you put a lot of care and thought into it, which is cool.

**Preston Doster:** Yeah, absolutely. I mean the intent was -- it started in Kris's basement. The intent is for this to be a thing that's around for a really long time. And again, that's where the technical architecture, the legal architecture, even though we're not lawyers... We spent that energy putting all that thought in there because we wanted to be around, in five, ten, however many years.

**Break**: \[46:07\]

**Justin Garrison:** How do you go about -- because Mastodon also caches from other servers. Like, I follow something from another server, and then I'm just going to get random content from that other server, even if I'm not following the person. And again, it's not even just your users. Like, your users, you could kick out. Like, someone keeps posting something that's illegal, you're like "Actually, you can't do that here. Go somewhere else", and you can just ban them, basically. But other people posting things on other servers - you can't ban the person over there. Is the only recourse to block all access to that other server?

**Preston Doster:** Yeah, so that's actually -- so I'll say it two different ways. So it's something that Mastodon is doing well, but can continue to do better. Because they've actually started to build some good moderation tools, where like you said -- like, locally, you can absolutely say "Hey, this member, they're banned because they posted whatever; they've offended the server rules, or whatever." But you can actually also do that for people who are not on your server. So if somebody from Mastodon.social is spamming, let's say... Which actually happens very, very often. You can individually block that account, even though they're on a remote server.

If you find that the server as a whole -- let's say there's an unmoderated server, or a server with questionable content, or positions that don't agree with your kind of code of conduct, you can actually de-federate from that server entirely. So that means anyone posting on that, any activity that's happening on there is no longer relayed through your server.

And honestly, as much as we're talking about the infra here, to me the real magic of Hachyderm is the moderation team.

**Justin Garrison:** Every social network is the moderation. That's the thing that is important.

**Preston Doster:** Exactly. Ultimately, the network and the experience for the people on your network is only as good as your moderation team, and that's something where our folks, again, spent a lot of time and thought and energy just thinking about "Okay, what does it mean to moderate? What does the moderation experience look like? What should that look like for folks who are on Hachyderm?" ...or even off Hachyderm. Because there's always the potential that somebody joins Hachyderm and start spamming from us. How are we on top of that? How are we treating people with respect, but at the same time making sure that we've got good boundaries, so that we're keeping a healthy community for our folks.

**Justin Garrison:** Because you mentioned that relay blocking thing - that immediately to me sounds like what I would do with a Pi-hole. Like, I've got this big host file, where I'm just like "No, you don't reach any of that." Is that like a subscription? Is there known Mastodon servers that you subscribe to, a black hole list of "We're not allowing that here"?

**Preston Doster:** Yeah, totally. So I think this is a big evolution point for Mastodon, and potentially the Fediverse as a whole, is actually figuring that out. So there are a number of services or organizations that do provide things like that, where you can say "Okay, I want to subscribe into a defederation list." And again, this is actually a really big, active debate that's going on in the community right now, is "Should they be allow lists? Should they be deny lists that you're subscribing to? How do the subscriptions work, both on a technical or a social level?"

\[51:49\] So yes, you can... And again, depending on how your moderators like to run your servers, some people do, some people don't. And right now it's not something that's built into the core -- subscribing to a defederation list is something that's built into Mastodon core right now.

**Justin Garrison:** Not ActivityPub.

**Preston Doster:** Yeah, correct. Yeah, so Mastodon has like the Upstream Mastodon project.

**Justin Garrison:** Yeah. Because I know other Mastodon servers that don't have those features, and they don't even do relays. It's like a super-lightweight -- like, I can run this for myself. I don't do -- a lot of the things that are really heavy about a Mastodon server, I don't do it. And it's fine, and you don't have to do those things, but the actual subscription, "Let's make sure that this works across services" is mainly just for the upstream Mastodon server, official -- I don't know if it's... I guess it's official. It's the one at Mastodon.social.

**Preston Doster:** Yeah.

**Justin Garrison:** How does this relate to Threads. Threads is peering with ActivityPub, Tumblr is starting to do that... Are you seeing any uptick in traffic, or new places you have to scale or block or moderate because there's these -- Facebook has a lot more infrastructure than you do... And they can just throw more money and more servers at the problem to say like "Sidekiq? You just get a whole data center. I don't care. It doesn't matter to us."

**Preston Doster:** Exactly.

**Justin Garrison:** How are you -- is that causing extra stress on your instances?

**Preston Doster:** So far, no. Right now. That being said, particularly with Threads... And again, I'm actually not super-familiar with their internal infrastructure, how they're set up... But they're starting to engage in limited federation.

**Justin Garrison:** They're very piecemeal about how -- they're like "We want this feature from this thing, and make you feel warm and fuzzy that we have ActivityPub."

**Preston Doster:** Exactly. Exactly. Yeah. Super early on, when Threads first announced "Hey, we're going to federate into the Fediverse..." Again, big conversation, big controversy about "Should servers even allow that? Is it okay for Meta to start to push things into the Fediverse?" Big discussion there. From a technical perspective, just like you were saying, Justin, the concern is "Okay, well, what if they turn it on for literally everybody?"

**Justin Garrison:** You would just blow it out of the water.

**Preston Doster:** It just destroys - yeah, exactly - the Fediverse. And some people thinking "Hey, that's the plan. That's how they're going to destroy the Fediverse and take it over." But yeah, to this point so far, again, because I think they've taken kind of this limited, measured approach to federation, we haven't seen anything, from like a Sidekiq perspective, or just a general scale perspective, that's broken anything at this point. Now, is that going to change the future? I don't know. But so far, so good.

**Justin Garrison:** I heard a recent podcast with whoever's running Threads over there, and they were asking "Are you ever going to turn on, by default, Fediverse interaction?" He's like "Absolutely not. We're never enabling that by default." And immediately you're like, okay, cool. We're never going to get double-digit percentage of Threads users to like go find the obscure setting to say like "Yeah, federate all my stuff across all of ActivityPub, all the time." It's just not going to happen because it's not going to be there by default, and they have no incentive to do that... Because they're the ones selling the ads.

**Autumn Nash:** I don't think most people even know that it exists.

**Justin Garrison:** Right. And that's the point. It's a feature to get the nerds on board.

**Autumn Nash:** Exactly.

**Preston Doster:** Yeah. And you mentioned ads... That was always a big concern, again, with the federation model... It was like "Okay, is Meta going to start trying to push ads through federation?" And then I'm on Hachyderm, and I see an ad for something. So again, to this point I haven't seen that. Obviously, as as the situation evolves, you might change your stance...

**Justin Garrison:** I never really thought about how that might work... Because by default, there's only users that are doing the inbox/outbox sort of handshake between instances. But is there other metadata that gets sent, that they could try to push content to you to say like "This is--"?

**Preston Doster:** Yeah. So depending on the scope that you're looking at... So normally, when you log into the Mastodon you, you're seeing your feed. It's like "Okay, who are the people and hashtags that I'm looking to, or I'm listening to, or I'm watching?" You can actually change scopes to look at "What is happening in the Fediverse?" for all the things that your servers relay to. So in that case, they could push a post. They could have a user, quote-unquote user, that could push a post, that's an ad. It happens to come from threads.net. And it shows up in kind of that global Fediverse view. So that could be one way.

**Justin Garrison:** \[56:13\] You just have to trust them at that point too, because they could say "This post has a million likes", and you have no way to verify or do anything around "Oh, yeah, obviously, that's the most popular thing in the world right now. We should show it to more people."

**Preston Doster:** Yeah. And with the way that Mastodon works right now, there is no algorithm, in the sense that things aren't weighted... There are things like trending hashtags that might show, but in terms of like your feed and your posts, it's linear. It's like first in, first out. But yeah, if they say it has a billion likes, that's what the ActivityPub message said, so it must. Right?

**Justin Garrison:** And I guess they could also just send you a bunch of posts that have a hashtag to get that in trending. Just like "Oh, even if you're not showing this to people, here's a bunch of stuff", and you have no way to verify it. You don't have any way, because it's their infrastructure sending stuff to you, and you're just like "Alright..."

**Preston Doster:** Yeah, that's the interesting thing about the federation model... Or really just the Fediverse in general. In the end it becomes a web of trust. And it's like "Do you trust these other servers to send you things that you want your people to see?"

**Justin Garrison:** It's a web of trust, and it's affecting your site, which is the weird thing... Because my blog, my WebRing, to go back to -- my WebRing, I trusted those people because I was reading their content for a while. But anything they posted didn't actually affect me. It didn't show up on my site. And I haven't had comments on my websites for a long, long time because I was like "I don't want your stuff showing up here. If I want to hear your opinion, I'm going to go out to social media, I'm going to find the opinion out there. But I don't want it muddying the water of like --" Someone just read this -- even like YouTube comments. I'm glad they hide most of them by default now, because most of them are like "This is trash", or whatever. It's just like, it's going to taint someone else's view of "Did I just read something good? Did I watch something I liked?" It doesn't matter, because someone else that was popular said "This sucks." And like, okay, well, maybe 9 out of 10 comments say this sucks, so I'm the wrong one. It's like, it doesn't actually matter. So I turn that stuff off from my sites, but that's fascinating that you now have to trust some other website to send you something that you can't verify, and it might affect how people see stuff that is not controlled by you, but is somehow aggregated and shown.

**Preston Doster:** Yeah, absolutely. Again, it goes back to moderation, having good moderation practices, consistent moderation practices...

**Autumn Nash:** Moderation is key in being able to block people.

**Preston Doster:** Yeah. Like, absolutely. And content absolutely does affect reputation... If we take too long to take action on something, or potentially even if we take what's perceived as the wrong action... People might say "Oh, well, Hachyderm moderation - y'all aren't doing it right."

**Justin Garrison:** And I do find that interesting, that the Mastodon model of moderation is the server, basically. There is individual block lists, but eventually you have to land on a community server that is well run, that you trust the moderators are doing things in your best interests... And then if you're only recourse, if that isn't the case, you'll find another community that you align with a little better. Mastodon doesn't have anything -- Blue Sky has block lists that are individually maintained.

Someone's like "Hey, these are harassers. These are people that I don't like." If I don't like a list of five people, you can subscribe to my block list and you can also not have those five people. But Mastodon doesn't have something like that at the individual level, right?

**Preston Doster:** So at the individual level, I don't think so. I'd have to go double-check. I know there are scripts that will let people import them, and kind of like do individual API requests to do blocks like that.

**Justin Garrison:** Twitter had a similar thing. You could subscribe to like a block bot or whatever, and it would automatically -- it had access to your account by going in and saying "Okay, yeah, I'm going to block all those things that this other person also blocked."

**Preston Doster:** Yeah. At this point -- I know at the server level there's not the notion of a block list, that you can just say "Hey, I want to go use Mastodon.social's block list", or whatever like that. That doesn't exist. And again, there are multiple proposals for how to do that that are kind of flying around right now... And then yeah, at an individual level I don't think that exists. Again, I'd have to double check.

\[01:00:06.18\] But to your point - yeah, if you find yourself in a community that's not aligning to what you want, you can use the migration feature to move. But obviously, that's a heavy toll.

**Justin Garrison:** Well, and migration isn't "Bring your content." It's "Bring your metadata, bring your followers."

**Preston Doster:** Bring your identity and your followers, kind of...

**Justin Garrison:** And it's not even like bring your identity. It's like redirect your identity.

**Preston Doster:** Yeah. It's like "Oh, Hey, redirect to over here."

**Justin Garrison:** Right. I equate it to kind of like if I move my house, my new house is somewhere else, and I can tell the post office "Forward my mail for 30 days." And it's like "Hey, keep sending me this mail if it comes here. It's actually for me. Please just do that for me." Do you see that happening a lot? Do you see people going between servers frequently?

**Preston Doster:** It depends. I mean, that's again the fun part about the Fediverse, is like the graph is always changing. Servers are coming and going. So I would say in general, yes. We do see that happening a lot.

**Justin Garrison:** And that was one of my fears, of like these servers get shut down because they're either too expensive, legal reasons, people aren't interested in running them... Whatever reason. And that's like my post office shutting down when I told them to forward my mail. That post office doesn't exist anymore. Nobody has that rule to forward your mail. Sorry. Like, you're just a new person.

**Preston Doster:** Yeah, exactly. It's just like "Oh, Hey, X site is offline." That domain name doesn't respond anymore, so there's nothing there, right?

**Justin Garrison:** Immediately I thought you meant like X, the site X.com.

**Preston Doster:** Oh yes, sorry.

**Justin Garrison:** I was like "Is X down again?"

**Preston Doster:** I meant that as generic domain.

**Justin Garrison:** Yeah. If X is down, you get more users on your site, so...

**Preston Doster:** Yes. I keep forgetting that that's the domain now.

**Autumn Nash:** I still call it Twitter.

**Preston Doster:** I do, too.

**Justin Garrison:** I call it Twitter when I want to talk about features that I liked.

**Preston Doster:** It's awesome.

**Autumn Nash:** X is like the derogatory term... And it's scary to lose all your like content on Mastodon.

**Justin Garrison:** There is an export feature that can give you your content. It gives you a zip, similar to what -- I mean, because people forget that X has that, and Facebook has that. And this came out when -- what was it called? Google Plus? Yeah, Google plus.

**Preston Doster:** The waves, that -- I forget.

**Justin Garrison:** Yeah. It was the social network... There was like this huge legal battle that people had to allow you to export your content. And it was like all these big social networks had this -- it was called Takeout. That's what it's called. Google Takeout. They were like the driver of this, because they're like "We want people to move to Google Plus, and so we're going to make this a legal battle to make Facebook do it, we're gonna make Twitter do it, we're gonna make Instagram do it..." And so you can go to all those sites and there's a legal reason, at least in the United States; I don't know about the rest of the world. But you can go download your contents, and they give you a zip. And the Twitter export, if you export your data, you get like a little mini website, and it shows you your stuff, all in the thing. And the idea was that you could then go somewhere else and you would import that into another social network. It's like "Hey, here's all my stuff. Please import this for me like it was yours."
And I know there was some projects that started up around that that would be like "Oh, we're going to take your Twitter and put it in Tumblr. We're going to do those sorts of things." But it never really caught on really large, and then Google got bored, and they turned off Google Plus, and all the stuff that normally happens.

**Autumn Nash:** I might go export my Twitter feed...

**Justin Garrison:** I deleted all of my Twitter, and I kept an export. So I have an export.

**Autumn Nash:** Can you mass delete your Twitter without deleting --

**Justin Garrison:** Not anymore because of the API limits. You used to be able to. So I did it before the API limits came out. And so you can pay for a service to mass-delete your X posts... Because they're like "We will pay to get more API quota for you."

There's also some free scripts you can run, that'll be like "Hey, delete my last 2000." And then the next week you have to run it again...

**Preston Doster:** Over the next day, yeah.

**Autumn Nash:** Yeah. Now that I've moved so much over to Blue Sky, I think I might just mass-delete my Twitter, because just the shady things that that man is doing. Did you see the thing today about how he says he talks to Putin all the time? Just the amount of data that he has on all of us, and...

**Justin Garrison:** \[01:04:02.29\] Yeah, I deleted 16 years of content. I was on that site, I really enjoyed it, and I was just like "Nope, not doing it. I have to get out."

**Autumn Nash:** I just don't want to contribute to the data and to the things that he's doing that are wrong, especially after just seeing like how much icky stuff shows up for my business account that follows nobody... It's just very clear where we're going.

**Justin Garrison:** I am still waiting to shut down my business account. I run it, my company's X account. I'm like "As soon as we get more followers somewhere else, I'm just shutting this down. I don't want it here."

**Autumn Nash:** Yeah. As soon as my Blue Sky started to outpace Twitter, I was like "No. It's icky. I don't want it anymore."

**Preston Doster:** Done. Let's go. Yeah. Going back to -- you know, the largest cost for Hachyderm is generally storage, and it's media storage. So one thing we'll have to figure out probably sometime soon is what's the cost of infinite, unbounded storage.

If we just keep everything forever, we wouldn't be able to run Hachyderm. So at some point, what does archiving look like? And then what's the user experience impact? It's like, okay, if I wanted to go export 16 years of Hachyderm history, do I lose the first 14 years of images and things that I posted?

**Justin Garrison:** That's true.

**Autumn Nash:** Yeah. That would make me sad.

**Preston Doster:** Yeah, exactly. But then at the same time, we can't keep that stuff forever, because then we'll be paying $10,000 a year on S3 storage or whatever.

**Justin Garrison:** Yeah. That's fascinating. Like, as you want it to live for a long, long time, and that storage isn't going to get less...

**Preston Doster:** Yeah. It's like, what's that balance.

**Justin Garrison:** I mean, there's definitely a balance of how much do you keep in a CDN, but there's still a balance of like that hot, warm, cold sort of storage tiers. Are there any other like long-term risks, you think?

**Preston Doster:** Other long-term risks... I mean, from a customer experience perspective, or a consumer experience perspective, I think that's probably the main one. The cost of storage just keep going up. Other big stuff could be political jurisdiction, legal jurisdiction type stuff changing... That's always a thing. To me, those would be the big ones. But I think as far as just like core infrastructure, it's like, we can run this thing for a while. Always looking for volunteers... Again, like I said, even if it's like you're going to rotate in for a couple of weeks, and do a little project here or there, I'm always happy to have folks come help out.

**Justin Garrison:** I frequently recommend people that are like "I want to get into technology. I want to do infrastructure. I don't have any experience." I'm like "Go find an open source project like Hachyderm. Help out." I send people to the Fedora project, the Kubernetes project... I've sent people over to Hachyderm... I'm like "If you want to know how this stuff runs, there are people in Discord that will literally just sit with you, let you watch them do some work, and then hand over the keys and say "Hey, let's do this together." And then you're going to get like actual professional resume experience that you're like "I helped with this project scaling", whatever reason.

So if you're trying to get into this space, there are open source projects, there are foundations like Nivenly, that create and run infrastructure on the public internet that will be beneficial for you to understand, and you can get it for free if you just spend your time there.

**Autumn Nash:** It's a great learning experience.

**Preston Doster:** Absolutely. Absolutely. So yeah, if you want to do Linux, sysadmin work, Postgres work, Ruby on Rails scaling, distributed systems scaling... Yeah, come on.

**Justin Garrison:** Yeah. I see it so often on LinkedIn, Reddit, wherever, people are like "How do I get into infrastructure with no experience?" I'm like "Go find some experience. You can do it at your home lab, that's fine... But open source projects are asking for help." And you can go help out. You can go say "I'm going to show up here once a week, twice a week, whatever, whatever time you have", and they're like "Great. Here's some docs. Let us know where there's problems in the docs." Even that's helpful in so many cases.

**Preston Doster:** Yeah. Even just documentation work.

**Autumn Nash:** If I move out of engineering, I think I'll definitely join one of the Kubernetes release teams just to like not lose experience doing \[unintelligible 01:07:58.20\]

**Justin Garrison:** Yeah. Kubernetes - I was on the release team before, and it's a lot. There's so many sub-projects that roll up into this thing. Yeah, it's a lot of fun. So Preston, thank you so much for coming on the show, thank you for talking to us all about Hachyderm... If people want to find you, what's your Hachyderm handle? Where should they...?

**Preston Doster:** So I am esk@Hachyderm.io. I don't post a whole heck of a lot. And when I do, it's usually like synthesizer stuff.

**Justin Garrison:** No one can see your background right now, but I was looking at all those synthesizers and wires back there. I'm like "That looks like fun." Like, I don't need another hobby...

**Preston Doster:** Yeah, it's a fun hobby. It's kind of like my medium in between doing I guess like real world engineering, where I get to work with electricity and stuff like that, and kind of blends it with creativity, because you get to sometimes create music, usually create noise.

**Justin Garrison:** It's basically engineering, too.

**Preston Doster:** There you go. Exactly. No difference.

**Justin Garrison:** You've described all my Git commits. This is fine.

**Preston Doster:** Yeah, exactly. Exactly. It at least gets me off a computer screen, how about that?

**Justin Garrison:** A different keyboard.

**Preston Doster:** Different keyboard. Yeah.

**Justin Garrison:** I don't have a mechanical keyboard. Mine has \[01:09:04.01\]

**Preston Doster:** Exactly. Exactly.

**Justin Garrison:** Alright, thank you so much for coming on the show, and we'll talk to you again soon.

**Preston Doster:** Absolutely. Thank you so much.
