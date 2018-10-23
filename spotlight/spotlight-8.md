**Jerod Santo:** \[00:00:31\] Welcome to our first Spotlight series recorded at OSCON London 2016. I'm Jerod Santo, managing editor of Changelog. Sid Sijbrandij, the CEO of GitLab, was on the Changelog recently, discussing GitLab's Master Plan and a new style of development they call "conversational development."

I saw down with Sid at OSCON to see how they're doing executing that plan, and we also discussed the recent controversy around GitLab and the removal and subsequent reposting of security research data. I think you'll enjoy hearing how Sid turns everything into an opportunity as much as I did. Take a listen.

**Sid Sijbrandij:** You have a nice setup here. This is great.

**Jerod Santo:** Yeah, it's pretty cool, right? We had a good turnout... The hardest part about doing these things is getting people to actually sit down. Because certain people are intimidated or they have no idea what the Changelog is...

**Sid Sijbrandij:** I love the Changelog. I got so many positive reactions due to the last podcast, it's just insane. It's the most responses to a media thing ever.

**Jerod Santo:** That's awesome.

**Sid Sijbrandij:** There's people that applied to the company because of that podcast.

**Jerod Santo:** That's really cool. I think you did very well on it, and you guys have a lot to say at GitLab, so I think that resonated very well with our listeners. We're always excited when -- you know, listen counts are one thing, but when people actually do things based on the shows that we put on, that's pretty cool. We had Cory Doctorow on kind of leading up to this, and he had a pretty strong call-to-action at the end, and there was like half a dozen people that signed up for the EFF specifically because of him on the show. It's a cool feeling.

**Sid Sijbrandij:** Yeah. The EFF, that was my first donation ever.

**Jerod Santo:** Was it?

**Sid Sijbrandij:** I printed it out.

**Jerod Santo:** \[laughs\] Yeah, be proud about it. So when we had you on the show, we were talking about your Master Plan and conversational development, which is a very interesting thing and I feel like it's kind of catching on... It's kind of like slapping a name on something we were already doing, which is smart. Don't you think so?

**Sid Sijbrandij:** Yes, trying to brand whatever we see happening already.

**Jerod Santo:** Yeah, which is a smart business move I think for GitLab, and also helpful, because we were kind of already doing this, and now we can call it something, which is always nice.

Since then, you guys have had a release. Tell me about the big release.

**Sid Sijbrandij:** We had a big release, but the most important thing is that we started executing on what we showed. We revealed the Master Plan and we showed this montage of how things should work, and it really energized us. We said, "Okay, what we're gonna do every day for half an hour - we're gonna get gather this group of people and we're gonna do nothing else, and try to make this thing real."

Lots of people have been working really hard to make it a reality. Now we're basically a month later, and we had two weeks of just making little improvements every day, and 80% of what we envisioned is there. It's not yet all shipped, but it's in the product.

Yesterday I gave a demo here. We were sitting opposite the booth of Red Hat, the OpenShift booth, we installed GitLab on OpenShift and then we demo-ed ChatOps to create an issue training issue open up a coding environment - so you press a button, you get a terminal in your container...

**Jerod Santo:** Nice...

**Sid Sijbrandij:** \[00:04:01.23\] ...doing the CI, it auto scales on the container scheduler, doing CD and seeing it in cycle analytics... And I can demo that with a plain vanilla OpenShift installation within 20 minutes.

**Jerod Santo:** That's pretty cool. That had to feel pretty good.

**Sid Sijbrandij:** It felt really good, and we kind of surprised ourselves how fast we're making progress.

**Jerod Santo:** That's awesome.

**Sid Sijbrandij:** The only thing we're still thinking about is the online IDE, and what's giving us pause is that people seem really attached to their editors, so where first we thought it's gonna be something in the browser, now I'm thinking like, "I don't wanna be the one that tells people to give up TextMate or Sublime..." People are very enthusiastic about VS Code and Atom, so maybe we should just sync the file system from the container to the local client. That's the path we're on right now.

**Jerod Santo:** That's a decent value. Remember Heroku started off as an online editor... Do you remember that? And they were way early on it, and they had like this whole integrated environment in the web; that was probably ten years ago now. They moved away from it... I think the web wasn't quite ready for that kind of technology. I think the web is there as far as doing what you wanna do in the browser, but also people wanted to develop local. Like you said, they like their editors, they like their own terminals... I feel like an online editor is a nice-to-have for like - you may already have this - "I'm just gonna update this readme", or whatever... A decent file editor inside of GitLab is good, but I think you're onto something with syncing the file system or integrating into editors and having tight integration into all the different popular ones.

**Sid Sijbrandij:** Yes, so GitLab has an editor; it's not a development environment, it's just editing the file it's just editing the file. There are so many awesome solutions for online editors... like coding has a great product and we're working to integrate with them even closer. There's Codenvy, there's Cloud9 (awesome Dutch people, just got bought by Amazon). There's all these solutions out there, but when I hear developers, they never say "I wanna use a browser editor." They are complaining like, "I have too little memory on my machine. My CPU gets hot and my battery drains when I'm running my tests."

It's kind of annoying to have to boot up an entire Elasticsearch cluster to properly test my dev environment. It used to be that you just had parity between your pre-production environment and your production environment, but I think with container schedulers we should go all the way. We should go "Your dev environment is similar to the production environment", and that means it runs just that hot, it will need as many resources, and we're not gonna do that on your laptop, it doesn't make sense. It should be in the cloud.

So you want that in the cloud, but I'm not sure you want the editor there. It's super hard to do, and if you get really down to it, that online editor should do stuff like autocomplete -- it's super hard to do. Codenvy has done a great job with Eclipse Che. It's like an API to do those look-ahead things, because then you query the file system for like, "What else is there?"

We think that's hard to do, and we're into the boring solutions business, so we think "Why not dump it down?" It's a file editor. We just get the files out to your editor and do that, but have all the stuff running back on that container scheduler.

**Jerod Santo:** \[00:07:53.22\] Switching topics a little bit, you were recently in the news - I'm using air quotes, because it's like Hacker News, basically - not for a feature release, but for a bit of a controversy around some scientific research that was published on GitHub and GitLab, and you guys took it down, and then you reversed your decision, and you spoke very plainly about it. Can you tell that story from your perspective?

**Sid Sijbrandij:** Yeah, of course. So Saturday morning I woke up and I saw a lot of chat going on in our internal chat channels... Like, "Oh, people don't seem to be very happy about our decision", and I looked at what it was, and it was a guy called Willem de Groot that published a research, and he disclosed over a thousand vulnerable servers, and then he complained that we removed it.

My initial reaction was, "Of course we removed that. You shouldn't disclose that to the internet first. You should disclose it to the people that have the affected server and give them time to patch." But two strange things... I know this guy, he runs an internet hosting provider in the Netherlands called Byte - really good Magento hosting... And what he did - there was more nuance to it, because he wasn't just trying to warn the owners of the server, he was trying to warn users of those servers, because these were effective web shops. I think they were Magento shops, I'm not totally sure.

But if you'd go there and you leave your credit card details, those details will get \[unintelligible 00:09:29.04\] because these servers were rooted and had malware on them. So it was more complicated.

We looked into it and we said, "Okay, what way to have here? The interest of those owners, that they get time to figure out what's going on and not have reputational damage? \[unintelligible 00:09:51.05\] so it will be easy for another person to add additional malware... Or the interest of the users, that should be protected?" We figured the interest of the user weighed heavier.

It's not so likely that everyone will add this list of servers to their etc hosts file or something... but by publishing it, they're putting more pressure on these people to fix their servers, and that's what started happening. 650 servers were fixed since publishing the files with names, so there was an acceleration in people fixing their stuff.

So we reversed the decision... The first thing, I give Willem a call, apologize that we took his list down. He was kind enough to walk over somewhere where he had internet access and tweeted about it, and we did a small blog post, and that was well received. It turned into number one on Hacker News, and someone in the comments said, "I now have to apply to GitLab. They're doing such a great thing." \[laughter\]

**Jerod Santo:** You were surprised by that level of praise from that action, or...? Maybe it was just refreshing to see...

**Sid Sijbrandij:** I was very happy to see it... What you're afraid is that you're correct, but people will only notice your initial takedown and not the reversal, so I was happy that that also got visibility.

**Jerod Santo:** The initial takedown - was it automated, or it was a decision one of your employees made?

**Sid Sijbrandij:** No, it was a decision that we talked about internally, and we made that decision. We just thought this is a responsible disclosure issue, and there are clear policies about that. We subscribe to responsible disclosure, so if people are not doing that, we're not going to facilitate it.

**Jerod Santo:** Was this something that you foresaw when you started GitLab? You wanna be spending your days making sales or making the product better, forwarding the thing, but now you're dealing with controversies around something other people were doing; you didn't ask for this kind of... Did you know this was gonna be the case when you got going?

**Sid Sijbrandij:** \[00:12:02.16\] Yeah, if you're gonna run a dotcom for content hosting - and we have now even GitLab Pages, where you can use any static site generator and host your site - you're gonna have people hosting stuff that will be controversial, and there are no clear guidelines. Some things are very clearly not okay, some things are very clearly okay. There's this gray line, and we looked at all kinds of policies and formulas, but there's not clearcut thing. It's on a case-by-case basis sometimes.

**Jerod Santo:** Did you track the -- this is somewhat related and you'll see why in a second... Did you track the story around the Dash developer in the App Store recently, how he was taken out of the App Store because he had a linked account that had some fraudulent reviews? Dash is a great is a great application, and the developer community said, "What's up with that, Apple?" There's more to the story than all that, but the point that I wanna thread through is that that got all the way up to Phil Schiller, who's VP of marketing. He's a C-level executive. He became involved... It was the kind of decision that made it all the way up to him, and it seems like there's \[unintelligible 00:13:19.10\] I mean, they're huge, right? So if that kind of a decision, in the context of Apple, a small marketing App Store problem is being dealt with by Phil Schiller. Y'all are much smaller, but if this came up to you... It's not the best use of your time to be making this kind of decisions. Now, I figure your current size is totally legit, but do you have thoughts about that? Like, "What's the best use of my time today?"

**Sid Sijbrandij:** I think these kinds of things - you can see them as a problem, you can also see them as an opportunity, and it sounds pretty corny, but...

**Jerod Santo:** \[laughs\] It turned actually into an opportunity, didn't it?

**Sid Sijbrandij:** Yeah... Look, it's not like we're taking down stuff just so we can apologize for it later, but...

**Jerod Santo:** Like, tell your buddy, "Hey, put up something controversial and then I'll... Let's stage a controversy."

**Sid Sijbrandij:** We're not into that business, but every time there is a controversy, people will look and they'll see how long does it take you, and are you doing the right thing? We were talking about this yesterday, and there was this remark, like we should make sure that when we're out there commenting on stuff that we have a unified voice of GitLab. And then we talked about it more, but a unified voice means you have to coordinate internally before you take any action, and it's gonna drastically slow down your speed of \[unintelligible 00:14:54.12\] and our values are around transparency and openness.

\[00:14:59.29\] So I said it's better to just go out there and have a real conversation right where it's happening, whether that's on Hacker News, whether that's on our public issue tracker. I hope that when people see GitLab team members openly disagree, being kind to one another but being direct, that will be a better thing than coming up with this pre-packaged statement two days down the road, of "We're not gonna do this" or "We're gonna do this."

I'm sure it will bite us from time to time, but that's what we're going for. We'll just go out there and we'll say what we think... And it's not a unified voice. It's over 120 individuals - you can see us disagree also on our issue tracker...

**Jerod Santo:** \[laughs\] I haven't seen you guys do it so public.

**Sid Sijbrandij:** Yeah, hopefully it's always kind and respectful, and we try to find the best solution together.

**Jerod Santo:** Let's talk about OSCON for a minute. According to your guys' booth over there, this is like your first stop in the GitLab World Tour.

**Sid Sijbrandij:** Yeah, exactly.

**Jerod Santo:** So you guys are out in full force, you've got a huge booth, you've got lots of people here from the team... Tell us about OSCON and your support for conferences.

**Sid Sijbrandij:** Yeah, so OSCON is our favorite conference. The big one of course is in the U.S., I think it's ten times bigger than this one, but it's great... All the open source projects are here, it's fun. We're growing pretty fast, so some of the team members have never seen other team members before, so this was the first time. So they're in the booth, and three people came up and said, "We love GitLab."

**Jerod Santo:** That's cool, right?

**Sid Sijbrandij:** That didn't happen at their previous work, so there's a lot of love for open source companies here, and that's great to see.

**Jerod Santo:** Sid, thanks so much for sitting down with me. This was fun.

**Sid Sijbrandij:** Yeah, my pleasure!

Thanks again to our friends at O'Reilly for the awesome working partnership at OSCON London 2016. We'll see you again, OSCON, in 2017 in Austin, Texas. If you want to save some money on that ticket, if you're going, use the code "changelog20" to save 20% off your registration to OSCON 2017 in Austin, Texas.
