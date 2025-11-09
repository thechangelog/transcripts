**Adam Stacoviak:** We're back with our good friend, Adam Jacob. And Adam, there's always something, some sort of outage around our conversations, some sort of big event... There's something in open source, there's a debacle, there's an outage in the case of AWS recently... And I actually was at my son's ninja training last night, and overheard a parent discuss the AWS outage. So it permeated, normal folks would just say; everyone was hit by this.

**Jerod Santo:** Yeah. It's got big.

**Adam Stacoviak:** What's the juice? What are your thoughts on this? Is it just one machine in Ashburn, Virginia that's running this thing? What's the state of our cloud?

**Adam Jacob:** Yeah, that's a good question. This was an interesting one to watch as an old guy.

**Adam Stacoviak:** Okay...

**Adam Jacob:** You know, I feel an old guy, in that I helped build the early internet, and then... You know, I went through these waves... And we spent a long time in the sort of early part of the DevOps movement trying to figure out how people should react when these outages happen, and sort of the HugOps movement, and trying to be "Hey, you should have some empathy", And there was just none that I saw in this outage. It went to brutality. It was a --

**Adam Stacoviak:** "Someone must die..."

**Adam Jacob:** Yeah. It was we were playing Mortal Kombat, man...

**Adam Stacoviak:** "Finish him!"

**Adam Jacob:** Yeah, totally. Corey Quinn wrote this article that was "Basically, this happened because all the smart people left." That was my TL;DR of his article.

**Jerod Santo:** Oh, yeah...

**Adam Jacob:** And I was like, a) I couldn't imagine writing that article. All love to Corey as a person or whatever, but I was just like, if I worked at AWS and it was "All the smart people left, and so now the outages are coming..."

**Jerod Santo:** That one hurts.

**Adam Jacob:** You're "Oh. Uh. Oh. Brutal." Also, who do you think built those old systems that are failing? It was the smart people that you're lamenting having left, It's not the new guy... The new guy didn't put that together, It was the old timers who put that together, and that's what failed you now.

**Adam Stacoviak:** That's right. They're duct-taping.

**Adam Jacob:** Yeah, they're just trying to keep it going, you know?

**Jerod Santo:** The other take was they're cutting over to their AI SREs, or whatever.

**Adam Jacob:** Sure... \[laughs\]

**Jerod Santo:** "It's AI's fault" was the other take.

**Adam Jacob:** "It was all AI slop", or whatever. And I don't know, all of that feels crazy to me. Obviously, we have no idea. Not really. I mean, they've said some things, I think --

**Jerod Santo:** I'm sure it was DNS, you know...

**Adam Jacob:** I'm sure it was DNS. We're all pretty sure it was DNS. That feels an easy bet, you know?

**Jerod Santo:** \[laughs\]

**Adam Jacob:** So I was just struck by -- I was struck by a couple of things. One was the brutality, which - I think we could bring a little more of the empathy and humility back into the equation, of just like... You know, if today you weren't affected by the outage... We saw a lot of people who were like "Well, we were smart, so we weren't in USS East one, because that's where all the outages happen. And we use GCP." And I'm like "Well, what about all the tiny outages for the global backplane in Google that keep happening to you all the time?" And they're were like "You know..." But they don't talk about those, because "It's our moment to bag on the dummies", who are, whatever, "people who didn't make the choices I made." And I don't know, my experience in all of these things is that even when you'd really try hard to design for resilience -- you can build systems that are very resilient to failure. And it is hard to do. And that's awesome. And even when you do that, they will fail, in ways that you did not expect, and they will by definition be difficult to deal with... Because otherwise you would have expected them.

I had a conversation with someone who sort of got mad at me because I said that. I was like "You should have some empathy, because your day is coming. If today wasn't your outage day, congratulations. Tomorrow will be your outage day, so get ready for that one."

**Adam Stacoviak:** That's right.

**Adam Jacob:** And they were like "We're good engineers." And I'm like "Man, you cannot good-engineer your way out of this."

**Adam Stacoviak:** Is that your best Kermit the frog impression?

**Jerod Santo:** \[laughs\] Is that what that was, Kermit? I don't think so.

**Adam Jacob:** I can do Kermit the -- I can do a reasonably good Kermit frog. Yeah. "Your outage day will come. You will not enjoy what happens when your site goes down. What you will need is rainbows and hugs."

**Adam Stacoviak:** \[laughs\] We do best/worst at dinner, and that's been my best today. Adam Jacob impersonated Kermit the frog. That was the best.

**Jerod Santo:** That was pretty good.

**Adam Jacob:** Yeah, I once did an entire -- a scene from Romeo and Juliet as Kermit the frog.

**Jerod Santo:** Oh, wow. \[unintelligible 00:07:27.07\] on video.

**Adam Stacoviak:** Well, the next time you have a company-wide announcement, pull it out then.

**Adam Jacob:** Do that as Kermit the frog? Yeah.

**Jerod Santo:** There you go. Psychoanalyzing, if you will, the public response to this. I was trying to figure out why it was so gnarly this time around, and I feel like maybe it's because at this point AWS is kind of the man. They're like the Darth Vader of cloud services. I mean, maybe not that evil, but that important and scary, and... You know, if Darth Vader loses, you're like "Awesome."

**Adam Jacob:** Yeah. It's easy. Like, when somebody shows up and goes "You should have empathy for AMOS, for AWS." It's easy to be like \[unintelligible 00:08:08.15\]

**Jerod Santo:** Yeah, exactly.

**Adam Jacob:** \[00:08:12.01\] It's not like AWS has empathy for me, AWS is a shark. They're out there eating to live, man... I don't know. I appreciate that about AWS, actually. I appreciate the part where they're very transparent about the fact that what they're in it for is the dollar bills. I know where I stand... \[laughs\]

**Jerod Santo:** You know what they're all about. Sure.

**Adam Jacob:** Yeah. No one's pretending that we're doing something we're not.

**Jerod Santo:** And they're so good at it. I mean, there's a reason why they're the big dog, it's because they are very good at it.

**Adam Jacob:** And it's not because they're bad at it. So yeah, I think some of it is just that AWS for sure is there. I think some of it is that everything does actually move in cycles, and the cycle that brought us HugOps, and the cycle that brought us a lot of the first generation of root cause analysis, and more empathy for outages, and all those sorts of things... That generation came out of an era where it was really hard to build these sorts of systems and stay resilient on the internet. When we were telling you those stories, it was like "How do you build a data center that doesn't go down? How do you think about scale?" Those were all new concepts. Now they're not. And people have been trying to implement them, and trying to do those things, and trying to put those good practices into place, and it's become a very corporate sort of piece of the story... And so now you've got people who are second, third, fourth generation maybe even, of trying to build these scalable, resilient systems... And so they don't remember what it was before those things happened. Like, they don't actually have empathy for the guy who built the system kind of wrong... Because either they're new, and they've just never experienced it, or because they came up in a different way and they were just told "This is how you do it." So if you started your career being like "Well, you can always deploy to multiple availability zones, and across clouds, and you can stream the blah, blah, blahs." I put all my stuff in a CDN. I remember when there weren't CDNs, so you just had to be like "Do you have enough web servers?" And now you have those things. So I think there's a shifting of the technology landscape that also shifts people's perspective on what those outages are, and what those problems are like, and what the expectations are...

And then, you know, Amazon's laying people off, they're also growing, AI fear, slop... All those things are in the air, too. Sometimes the AI marketing feels... Tawdry, is the word I'll use for it. And it's tough.

**Jerod Santo:** Yeah.

**Adam Jacob:** I think all of that comes together to be like "Okay, AWS has an outage, and now it's Mortal Kombat time."

**Jerod Santo:** Right. Finish him.

**Adam Jacob:** Yeah.

**Jerod Santo:** Well, it's also just fun. It's fun to finish people. \[laughs\] Rip the heart out, and \[unintelligible 00:10:53.13\]

**Adam Stacoviak:** Yeah. The finish him's kind of been a slow burn too, in terms of the cloud exodus. You've got those who have to be on-prem, those who want to be on-prem, those who desire to only have their two racks, paid for by themselves, and manage the two machines -- and maybe it is two racks, I don't know. I mean, that's not that hard to manage with a decent team, versus paying the cloud millions over years... Using the DHH argument, so to speak.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** So it hasn't been this -- I think maybe now is the finishing moment for some folks, but is the finishing moment coming from non-technical folks, or technical folks and non-technical folks?

**Adam Jacob:** I think both, maybe.

**Jerod Santo:** Just everybody...

**Adam Jacob:** Yeah, I think it's everybody. I think everybody's ready for it to change. On a technical front, there's a bunch of really interesting things happening. If you're building new AI data centers, you need all these GPUs. That's where our focus is. But you also need high-performance compute, because the agents that are running in those situations, they're running on normal CPUs. They're not running on the GPUs. But the data center design there pushes you toward on-prem, low-latency networks, it pushes you towards simpler compute...

\[00:12:11.24\] I was having a conversation with some people who build those data centers, and they were like "Yeah, all our customers want is tons of GPUs, super-fast networking, and bare metal compute. They don't want any layers in between." They're just gonna bootstrap that, giant high-performance compute clusters, and they're just going to knock out all the stuff in the middle. And it's interesting when you think about those workloads causing their own kind of gravity, where as soon as you start to have a data center, you start to have bare metal compute, you start to have fast networks, then suddenly you start to ask questions, like "Well, hey, what else could we run on that compute?"

**Adam Stacoviak:** That's right.

**Adam Jacob:** "We do have this fast network right here. What else could we do?" And it starts to push you in this very strange direction where it's like "Oh, actually, for the workloads we were running, it kind of did make a lot of sense to be like "Well, let's just go to AWS, and I can get burst capacity, and I can do all this stuff..." And now you're like "Well, actually... Hold on a second. If I have to pack this data center filled with compute anyway, and it needs its own little nuclear power reactor sitting next to it..." You know, suddenly it's not so crazy person talk to imagine running all your gear in a different way; or even building your applications in a different way. And the AI thing feels like it's -- it already feels like it's in late innings, because it's been moving so fast... But it's not. It's absolutely in the earliest of innings, where we're just trying to figure out what even is this technology, how even will we think about it, what even are the implications? And yeah, the cloud repatriation thing I think is actually a bigger deal than people are giving it credit for, because the dynamics are pushing you toward being on prem, fast networks, slumber compute.

**Adam Stacoviak:** My exposure to this world is really through the lens of home lab, which is why I sort of get on this soapbox and preach it a bit... But I recently went to the Linux Fest here in Austin, Texas. It was awesome. Really cool, just homegrown bunch, real just kind of regional feeling; didn't feel overwhelming at all. And I forget the fellow's name, but he gave a class, essentially, a workshop on Bootc. And I was just thinking how easy it is now to instantiate images that was once really hard to kind of make your own distro...

**Adam Jacob:** Yeah...!

**Adam Stacoviak:** You know, Bootc has opened up so much windows for me. I'm just thinking about it in like Proxmox in my home lab scenario, but...

**Adam Jacob:** Totally.

**Adam Stacoviak:** ...you've got so much more power in the hands of folks at that level to really run your own bare metal now.

**Adam Jacob:** Yes. And that's going to come back around again. That's happening because people are doing it. Once you start doing it, and the macro trend starts pushing you in that direction, people are going to start being like "You know what sucks? Trying to find the SSM parameter for what the right revision of Amazon Linux is." The only way I do that anymore is with the little AI agent for System Initiative, by saying "Figure it out."

**Adam Stacoviak:** "Tell me."

**Adam Jacob:** Because - I don't know, I've done it a hundred times; I still don't remember. But when you think about that loop of "Oh, so much of the technology layers - they have been moving forward." They weren't stagnant. And yeah, I think there's more afoot here. There's a lot afoot here.

**Adam Stacoviak:** Well, people want control back, too. The original idea was -- maybe for some it was like "Hey, there's a cloud here I can launch today. I don't have to build the infrastructure, pay for the infrastructure, even understand how to run the infrastructure necessarily..."

**Adam Jacob:** Yeah.

**Adam Stacoviak:** \[00:15:45.28\] You can sort of level up. And then you have this new world where you're like - well, fine, we've sort of either... The choice initially was let's move fast, so let's use somebody else's investment. Cloud. Now it's like, now we have proven our model, our product, or whatever, and we're matured. Now we're just burning cash, because we have no idea what our bill is even. There's so many servers out there, maybe three or four different accounts floating around... We've got bills going out the wazoo to AWS... And there becomes a lack of clarity. And there's even a cottage industry of - I don't know what they're called. Like bill analyzers, essentially, for AWS...

**Adam Jacob:** Totally. Yeah.

**Adam Stacoviak:** You know what I mean? So, I mean, that shows there's a problem.

**Jerod Santo:** Cost optimization. Yeah.

**Adam Stacoviak:** Yeah. Cost optimization. And then now you've got this pushback to say "Let's actually reexamine, first principles of this problem set. Do we really need to be in their cloud? We need a cloud... Why not our cloud?"

**Adam Jacob:** Yeah. And what's going to happen - all of those trends are happening all at the same time. So we're going to figure out, okay, AI brings a new interaction model to the table. It brings capabilities that didn't exist before to every layer of this stack. A good example was we're building a continuous delivery example of just taking a complex application, deploying that thing up to AWS, and then showing how all the pieces fit together with System Initiative. And it's been really interesting to work with this AI agent where you're working with the source code and the infrastructure at the exact same time, in the same context window... And the things that it figures out how to do - like, I needed to add ElastiCache in order to figure out how to do session storage, basically. Because we're just reinventing legacy problems... And to show how you would solve it. And it solved that problem for me by analyzing the source code, looking at how we implemented it, I said I was going to use ElastiCache, I wanted to use IAM for auth... It wrote the weird signing code to figure out how to do the right thing... It cycles the key every 10 minutes automatically, so that it will always have a fresh connection... And then it deployed the infrastructure and wrote the application code, and then we pushed it up and it worked.

And that loop is the loop that the people who are going to be building those internal infrastructures have now. So when you think about it as "Oh, they're going to go back--" There's a version of the story where they're going backwards, where what's happening is "We're putting my backpack on, and I'm going back to data centers, and I'm going to rack the servers, and I'm going to put the operating systems on them, and I'm going to configure them by hand." And like, no. No. That's not actually what's going to happen at all. What's going to happen is these new capabilities are going to show up, along with the ability to run high-performance compute. People are going to start to realize how much power comes out of that high-performance compute, and that new style of deployment and of software development is going to get applied to that problem. It's not going to look like it looked in 1996. It's not going to be like "Well, I set up my BOOTP server." No. Somebody's going to figure out how to put the new loop into that system, at which point it's going to make the cloud look slow. You're going to be like "Why am I dealing with all this legacy cloud? \[unintelligible 00:19:03.15\] stuff's garbage. Ugh. Look how much harder it is."

**Adam Stacoviak:** Yeah, the black boxes are actually the bug, not the feature. You wanted the magic for a bit there, right?

**Adam Jacob:** You needed it.

**Adam Stacoviak:** You're like "Great. We need magic. We need it right now, because we don't have the money or the talent to do the magic. We need the magic."

**Adam Jacob:** I have friends who started this company called iLike. You won't remember iLike, but iLike was one of the first music services on Facebook. It was one of the first Facebook apps, and it was a music sharing Facebook app. And they were the first viral Facebook app. And they literally had to beg our friends - the guys who ran it, I'd worked with for a decade. And they literally were begging us for gear. They were just like "Can you give us servers...?!" They couldn't rack them enough to keep the site up. And then within a month, AWS launched EC2, and we helped them just automate running that burst load into EC2, and it was good. They didn't have that problem anymore. That problem disappeared for the entire internet. Amazing. And also, boy, computers are a lot faster now. Boy, caching's a lot better. Boy, the architecture has fundamentally shifted.

\[00:20:08.22\] We used to have to deliver the web tier to you. I don't have to deliver web tiers very much anymore. I just throw it to a CDN and I move on with my life. So if it's talking to my data center in the backend, a lot of that bursty load doesn't actually happen the same way it used to. Right? And we just haven't quite caught up yet as an industry - of course, because it's happening in real time - to the fact that all of these new capabilities, they're going to create a new wave of innovation, that will actually change the way we work.

So yeah, I don't think the cloud repatriation thing is going to happen by going back to the way we've been doing it. It's going to happen because we're literally going to invent a new way of working, and we're going to be like "This thing's sick, and it works with gear, and it has a totally different, new loop."

**Jerod Santo:** Who's going to build it? Is it the people who are going back to the old way, but don't want the old way anymore, and so they're doing it for themselves, and now they're going to abstract tooling, because they want the new way of life on their own stack? I'm thinking of Rail, and --

**Adam Jacob:** DHH?

**Jerod Santo:** Yeah, that's what I'm thinking of in particular, but I don't know if he's necessarily going to build it, but... Is it going to be someone like that, or is it going to be somebody who is trying to just solve that one problem?

**Adam Jacob:** I don't know, it's hard to say. If it happens like the old school happened, it'll happen because the practitioners will do it. And they'll do it inside their houses kind of quietly, and then eventually they'll all meet up in some kind of weird Cambrian explosion of realizing that they all do it this same, interesting, new, different way, and then they'll productize that. I don't know that that's the same arc, because the industry has grown so much, venture capital has grown so much, access -- you know, so much of that is different. But I would argue that the size of the opportunity is big enough, because the amount of open field running that it creates, in terms of - you know, the first wave of it is always just like "Well, there's this new technology. How do we apply that new technology to what already exists?" It turns out it's fine when you do that. The results are fine. They're fine. They're fine. They're probably not great, but they're fine. But if you design systems to do it, if you're like "A-ha! Now I know that I have this capability. I'm going to design the whole stack around the fact that this capability exists. How would that change what I engineer, and how would it change the end user experience?" That's dramatic. So I think the people that are going to build that for you, they're going to be the people who figure that part out. They're going to be like "Okay, I'm open to what the changes are in the technology. I'm open to the possibilities that there's a different way of doing it." That's either going to be because they're young and they don't know any better, and they're going to build it, and then our reaction is going to be like "Well, that was dumb."

I was talking to somebody who built Docker, and they used to go into Solaris shops, and the Solaris heads would be like "I'm never using Docker. I have zones. Miss me with your subpar technology."

**Jerod Santo:** \[laughs\]

**Adam Jacob:** And you know, we'll do that to them. We'll be like "I don't need Docker. I've got zones." And eventually, your zones are just running Docker instances.

**Adam Stacoviak:** You still have Docker file syntax, you still have container file syntax... Docker's not going to go -- it's embedded forever into the fabric of ops.

**Adam Jacob:** Yeah, but we all had that -- I had that argument, too. I was like "Why would you do that? You need configuration management." And they're like "Nah... Sure, grandpa..."

**Adam Stacoviak:** \[laughs\] "We don't need configs..."

**Adam Jacob:** If it's going to be like that, you know... And so maybe it'll be some of us, some of the people who have come before, who still have the spark in us, and we go figure out how to innovate in this way... Or it's going to be people who don't, and they'll do it... I don't know which one it'll be, but... You can make good bets that it'll be fueled by venture capital dollars.

**Jerod Santo:** Yeah. I was thinking, like, what if there was a brand new Digital Ocean that was starting in 2026, and --

**Adam Jacob:** Yeah.

**Jerod Santo:** ...that might be the kind of entity that produces something like this.

**Adam Jacob:** \[00:24:00.06\] Totally. It would. But think about Oxide, who's close to this already, in that they took the cloud paradigm and they stuck it in the data center.

**Jerod Santo:** Right.

**Adam Jacob:** I wouldn't put it past them to ratchet it one notch further, and go "Wait, why are we stuck trying to give you the clouds paradigm if we could deliver you a better one? What if we delivered you a better user experience than the cloud?"

**Adam Stacoviak:** They're already first-principaling everything, so why not?

**Adam Jacob:** Right. So why not just keep going? And I don't know the answer to that, I don't have any secret inside Oxide knowledge or whatever, but...

**Adam Stacoviak:** We don't either.

**Adam Jacob:** ...but it's a good example of how -- I would argue those guys are the old school. Nobody would look at Bryan and be like "Bryan's not old school engineering at this point." But I wouldn't put it past them. They've shown a remarkable capacity to change... So I don't know where it's going to come from.

What I've become is more convinced that it's more real than people are giving it credit for, and it's also worse than most people think in terms of its capabilities. Most of us are just not getting good results out of the AI work that we're doing, because we fundamentally misunderstand how it works kind of as a technology. And so then when we talk about how to apply it to our problems, we're doing that badly, too. And so we're still in the phase where it's like 10% at best of everything that's using AI is actually good, or is pointing the way at a pattern that's going to be good. And then 90% of it is noise. And it's incredibly difficult to tell the difference if you haven't just decided to immerse yourself in it, because it's moving so quickly that you're like "I don't know." At some point it just overwhelms you.

**Adam Stacoviak:** Yeah, or even build something new, and then Anthropic or OpenAI releases a new thing on top of the kind of base frontier models most people are using, and it changes the game anyways. It's constantly in motion in some sort of -- we were just talking this morning about skills. And I'm like "Gosh, I just caught up with MCP servers, and then now they've launched skills." And sure, skills are just Markdown files, basically .md versus .sh, but in plain English... So it's sort of interesting to see how they've gone from a TypeScript-based SDK MCP server that you install via the command line, to something different that's just simply adding a Markdown file.

**Adam Jacob:** Well, it has slightly different use cases, has slightly different capabilities... This is back to it being early innings. It feels late. There's so much noise, there's so much money, everybody's like "There's a bubble..." I saw a very convincing presentation from a bunch of investment bankers that there is not an AI bubble. It was very convincing.

**Jerod Santo:** What's their central premise?

**Adam Stacoviak:** Yeah. I was going to say, give us the TL;DR.

**Jerod Santo:** Give us the central premise.

**Adam Stacoviak:** What's the juice? Give us the juice...!

**Adam Jacob:** The central juice was that if you look at the forward multiple the market is paying for the growth numbers that are being put up, the actual revenue growth numbers, that they're actually relatively modest in historic terms. Like, they're actually not giving them growth multiples that are beyond mortal man. And so when you actually look at the fundamentals of the companies that we're discussing, their fundamentals are actually pretty good, and getting better. And typically, when things are bubbles, that's not what you see. What you see is dramatically higher growth multiples that don't make any sense. And we've seen that in private investments --

**Adam Stacoviak:** Like in '22. 2022, things were crazy.

**Adam Jacob:** Yeah. 2009, 2001... 1999... It's not pets.com.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Sure.

**Adam Jacob:** It's not InfoSpace, where the emperor literally had no clothes except hype, but we hyped ourselves to a market cap bigger than Microsoft. That was a bubble; that was going to explode. In this case there's a lot of money moving into it, a lot of venture capital cash moving into it. That's all true. Private valuations - it's easy to talk about them as if they were public market valuations. They're not. So the resiliency of private markets to paying those multiples is way different than regular people...

\[00:28:08.23\] So their analysis was basically "Look, in the main, the way the market's reacting is in line with the actual growth curve that's happening, and it's being relatively modest around the values that they're paying in multiples." And then everywhere else is depressed.

**Jerod Santo:** That's true...

**Adam Jacob:** So if you're not in those sectors, then your value multiples are down. And so it doesn't feel great, and so you look at it emotionally and you're like "It's a bubble."

**Jerod Santo:** Well, and that sends more money into that particular space as well, right? Because there's less --

**Adam Jacob:** Yeah, their argument then was also what it does is drive investors to find alpha.

**Jerod Santo:** Yeah, exactly.

**Adam Jacob:** So now what they're going to do - they have to find growth somewhere, and so that's what's driving IPOs, that's what's driving M&A. All of those things are happening because yes, those AI stocks are outperforming. Also, you can't beat them... So there is no better alpha than those. So if you want to do better than just betting all your money on the magnificent seven, the only way to do that is to find other unseen growth stocks and put your money there.

**Jerod Santo:** And those are all embedded with the magnificent seven. Yeah, so the weird part to me is the circular deals. I mean, that's the part that is just crazy.

**Adam Jacob:** Yeah, that's crazy. I agree.

**Jerod Santo:** I just don't get it. I don't understand how it all makes sense, but apparently it might.

**Adam Jacob:** I mean, I understand how the deals get done, for sure.

**Jerod Santo:** Yes, how they get done. But do they make any sense? I don't know about that.

**Adam Jacob:** \[laughs\] I don't know. I don't know if they make sense either.

**Jerod Santo:** Yeah.

**Adam Jacob:** I don't know that they do. But by their argument, which was very convincing, was that that's not a structural threat to the economy.

**Jerod Santo:** Sure.

**Adam Jacob:** Like, yup, that could be bad. And... Meh. And whatever, I'm not sophisticated enough to make an argument one way or the other.

**Jerod Santo:** Yeah, I'm not either. I just think, when one of those organizations is Nvidia, which happens to be the darling of our economy right now... If they have a big correction, I think everything does... But maybe not.

**Adam Jacob:** If the magnificent seven corrects, the economy corrects, for sure. I don't know that that would mean that it's a bubble. I think it would -- do you know what I'm saying?

**Jerod Santo:** Sure.

**Adam Jacob:** It's different. We're perhaps parsing --

**Jerod Santo:** Yeah, we are. The demand is there, that's the overall premise is there.

**Adam Jacob:** The demand is there. We're not building ahead of demand.

**Jerod Santo:** We are not going to be over-provisioned in 2028 and have way too many data centers.

**Adam Jacob:** In AI data centers. We are not. We're not. And there's a lot of people who are hoping that's true, who are probably listening to this podcast, who are like "I f\*\*\*\*n hate AI", and I cross my arms, and I'm like "The whole thing's stupid" and "You shouldn't use it", and whatever. They show up every time I talk about AI on LinkedIn being like "It's all lies." And they're just wrong.

**Adam Stacoviak:** Yeah. They're way wrong.

**Adam Jacob:** They're just wrong. And whether they know they're wrong now, or they know they're wrong in six months, they will learn that they are wrong. Because it is actually transformative technology, it actually can make a difference right now... And yes, 99% of what's being built is not a good use of that technology. Just like 99% of the early uses of search engines weren't better.

We've got to figure out how it works, we've got to figure out how to build technology around it... We're in the beginnings of doing all of that work... And what we got caught up in was this hype cycle that was like "Oh, it's going to be AGI. The magic robots are going to take over. They're going to just run everybody's jobs. It's going to become super-intelligent. It's Terminator." And none of that's what's happening. If you've actually used these systems, the idea that they're going to turn to the Terminator is laughable. Laughable.

**Break**: \[00:31:49.15\]

**Adam Stacoviak:** There was a recent Anthropic research document that was a little scary, that I can put in the show notes and that I can paraphrase... It tried to protect itself when being threatened with being replaced, or something else, essentially. It was like self-preservation... But then they said in production, they didn't see that happening... It was pretty wild.

**Adam Jacob:** It's wild, but like --

**Adam Stacoviak:** That's recent. That's on their homepage recent, too.

**Jerod Santo:** Well, the Anthropic CEO is one of the most bullish bulls in the --

**Adam Jacob:** And it's in their best interest. I was giving a talk to an unnamed organization in the federal government, and --

**Adam Stacoviak:** Agentic misalignment, sorry. This is what they call it, agentic misalignment.

**Jerod Santo:** That sounds scary.

**Adam Jacob:** So just so we're clear, it wasn't the LLM that got misaligned. It was the agent in the control loop... And if you just think about how LLMs work, you're like "Sure, what's the probability that what I should respond to --" How many human beings have written "I don't want to die"? A lot of people put that into the world. They're like "I'm scared of that. Dying is bad. Don't die." So then you're like "Okay, what are the odds that the right next word for the LLM to say is "Don't die"? And then that emerges as making tool calls to preserve itself. That's not crazy person talk. It's not even magic. You're like "Sure." It's kind of predictable. But it doesn't make for a super-great blog post... Right? The great blog post is like "The agent tried to keep itself alive...! It found an instinct to self-preservation." And you're like "It didn't find an instinct to self-preservation..."

**Adam Stacoviak:** Listen, it said blackmail. The word blackmail is in this research document.

**Adam Jacob:** Because they gave it access to tools like email, and they were like "Oh, you know what I should do?" and it went off the rails.

**Adam Stacoviak:** "Get that CEO...! Finish him!"

**Adam Jacob:** Yeah, exactly. I get how it happens. My point isn't that it didn't happen. Of course it happened. Of course it happened. It's just, if you know how the technology works, you're like "Yup. Okay. That's funny. But I can see how it gets into that loop. And I don't think it's magic. I don't think it's threatening. I don't think we're all going to die." It's a good case for why you shouldn't give it a nuclear bomb.

**Adam Stacoviak:** Let's bring it back down to bare metal, or practicality... My usage of generating a lot of software, lately, mostly around CLIs and useful tools for me in my own lab, or as Jerod says -- what did you say, Jerod? Home cooked meals?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Home cooked software.

**Jerod Santo:** That's right.

**Adam Stacoviak:** \[00:35:56.18\] I have full faith that this is only going to give more jobs to developers, and not replace... Because it is smart, but it doesn't have taste. It doesn't have direction. It doesn't have the problem set. It just wants to be useful, and solve problems, even if it's totally the wrong way.

**Adam Jacob:** Yes, absolutely.

**Adam Stacoviak:** I was trying to make an MCP server the other day for this thing I'm working on... And I'm like "The docs. Have you read the docs yet? I don't want to go read the docs, that's why I'm talking to you. You're the agent. You go read the docs and tell me how it should work." It was like "That's a great idea." No joke.

**Adam Jacob:** Yeah. Oh, good call. Yeah. Exactly. And back to just basic economics - what is the demand for software systems? And will those software systems demand become met? ...at which point now there's fewer of us. As far as I can tell, the demand remains uncapped. As far as I can tell, I have no idea -- when people go, "That's enough software. I don't need more software in the world. I'm done. We're cool. Enough software."

**Jerod Santo:** Well, useful software creates more useful software. You just come up with more ideas. "You're you know what I want to do next? This. And then after that, I'm going to do the next thing." You have a list. We all have backlogs out there...

**Adam Jacob:** Yeah. And so this whole story -- the only part of this story where it gets rid of humans is the story where we're not talking about the technology we have now, we're talking about some other technology, that is some distant future, where between us and that distant future is the invention of fantastically new techniques that are roughly on par with the technique that brought you the one we just got, or more... And it's probably not one of them, it's probably dozens. And then once you think about that and you're like "Okay, now maybe that turns into some kind of unrecognizable super-intelligence", sure. Maybe at that point it's Star Trek. Maybe at that point there's replicators, and we're post-economic... But that's not a useful conversation when it comes down to like "I was building stuff in my home lab, and I was thinking... Could there be a great agent loop in the data center?" And you're like "Hell yeah, there could."

"You know what sucks in the data center? What sucks is trying to figure out how to look at the logs to understand what's going on. And so maybe what I'll do is build an agent that knows how to log into all the servers, and run journalctl, and then bring all the data down, and then do the analysis for me and tell me what's wrong. That'd be sick." And we could write that right now before we get off this podcast. We just do it. And it would just work, and it would be sick. And you'd be like "That was amazing!" And like, okay, that's the thing. That's what it i

I was thinking the other day about Kubernetes, and the control loop, and the bin packing, and all of those things... How would you have written Kubernetes differently if you had LLMs to drive an agent loop? I think it would be different. I think there's a bunch of the decision-making that you would have put into a different part of the loop of the system. And I don't know that it would be better or worse, but it's an interesting thought experiment, to be like "Where would I put the LLM? Where would I put the deterministic side of what it does? How would that change the user experience and the user loop of what I want to do?" Like, sick. Sick. Right?

**Jerod Santo:** \[laughs\]

**Adam Jacob:** I don't know what it would be, but I want that.

**Adam Stacoviak:** Is that what you're building? Are you building that?

**Adam Jacob:** No, I'm building System Initiative \[unintelligible 00:39:18.28\] I was just thinking about it.

**Adam Stacoviak:** But you seemed like you were pretty passionate about that problem, so you might --

**Adam Jacob:** I'm passionate about all these problems. I want to build all these things. I want to build the journalctl bot. I'm into all of it.

**Jerod Santo:** I'm with you on that, I think a lot of the consternation, I'll call it, out there, and that Adam is humanizing for us in human form here, is that the same people that have brought us the current technique and techniques are saying they have AGI techniques basically locked in their basements until Q1 of '26. And then they're going to be unleashed on the world, and all hell's going to break loose.

**Adam Jacob:** They don't.

**Jerod Santo:** I mean, aren't they, though? I mean, that's pretty much what Anthropic's CEO, and Sam Altman is talking about...

**Adam Jacob:** Yeah, yeah, yeah. They're all talking about it, because it's really good business to talk about it.

**Jerod Santo:** And they just keeping those deals done, you know?

**Adam Jacob:** \[00:40:03.11\] They keep getting those deals done... We keep paying for those growth multiples...

**Jerod Santo:** \[laughs\] Right.

**Adam Jacob:** You know what I mean? And do I think it's a dangerous game to be promising AGI? I do. I do. I do. And I think that could go bad. And also, I don't know... Is it -- it's probably fine. \[laughs\]

**Jerod Santo:** Well, I just think that these two things juxtaposed, is "It's not a bubble", and the people in the people non-bubble are promising a thing that you don't think they can deliver on. I mean, to me that sounds like --

**Adam Jacob:** I think most of what people are buying isn't that right now. No one's buying AGI... No one's going to --

**Jerod Santo:** Superintelligence. They changed the word.

**Adam Jacob:** You're not buying superintelligence either...

**Jerod Santo:** \[laughs\]

**Adam Jacob:** There's no superintelligence to buy.

**Jerod Santo:** I'm buying a -- what do you call it...?

**Adam Jacob:** Right now you're buying access to the LLMs. That's what you're buying. And not having to run the inference on your own.

**Jerod Santo:** A genius golden retriever on acid. That's what I'm paying for.

**Adam Jacob:** Yeah, that's basically what you're buying now. That's right.

**Jerod Santo:** \[laughs\] That's good enough for me, by the way.

**Adam Jacob:** Well, what's amazing is the genius golden retriever on acid, if you build the system around its existence, will dramatically outperform. It's crazy. We had somebody, they had a production outage. They had no data in System Initiative. The prompt they put in was "I'm having a production outage. Here's the data, here's the evidence. Go discover the infrastructure and System Initiative you need to troubleshoot it, and tell me what's wrong." And 15 minutes and 700 components of discovery later, it told them the bug. Ta-da! And that's bananas. That's crazy person talk. And it happens all the time now. It's just not evenly distributed. Not everybody's seen it, not everybody knows... And the ways that those systems compose - you know, if you have a big Terraform repo or whatever right now, and you try to do that same trick, it doesn't work as well. And so you're like "Oh, this thing... Maybe it's the AI that's bad. The AI didn't figure out to go read the docs", you know? And you're like "Oh, I don't think that means the AI is bad. I think it means that Adam is bad at prompting." Adam probably should have said "Read the docs plan one, plan two, plan three." And he'll get better. He won't make that mistake twice.

**Adam Stacoviak:** Never again. Never again.

**Adam Jacob:** Never again.

**Jerod Santo:** Never make the same mistake twice. But when I talk about it not being a bubble - and I'm not defending one way or the other, the bubbly position, but I think the argument that says it isn't is the one that says "Look, are we in a hype cycle?" Yes. Is that hype cycle reaching beyond its abilities? Yes. But we've had lots of hype cycles. I mean, going back to Kubernetes... Kubernetes was supposed to be the operating system now. But we're not installing Kubernetes in these AI data centers, no matter how hard they try to convince you that you should. What people actually want is bare metal compute.

**Adam Stacoviak:** Here's the thing, though. Here's the thing. We just went from the horse to the car. That's what we did in our time. We're living through the invention of the car.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** It's going to be crazy.

**Adam Jacob:** It's going to be crazy.

**Adam Stacoviak:** It's going to change everything.

**Adam Jacob:** And of course, we don't know --

**Adam Stacoviak:** And there'll be hype everywhere. Of course.

**Adam Jacob:** And we don't know what to do with it. We're like "There'll be flying cars. There'll be space cars. What if all the cars were underground, in car tunnels, and then the whole world could be a park?" I don't know. I'm sure we had crazy ideas. Ad yeah, what I'm ready for as a practical technologist... You know, I'm not a researcher. I don't hang out writing papers. I build stuff, and that's what I like to do. And what I can say as a practical technologist is "Whoa, building stuff with this kit is fun. It's so fun!" Because it can do things that are really freaking cool, and that you could not do a year ago. And that's epic. And I don't know what that means, in the macro. Nobody knows really, right? But it is real. It's not an illusion.

**Jerod Santo:** \[00:44:12.16\] Unless you have AGI in your basement, locked up, like Sam Altman does. Then he knows.

**Adam Jacob:** If Sam Altman had AGI locked up in his basement, Sam Altman would be doing better at delivering LLMs to us. Right?

**Jerod Santo:** Well said.

**Adam Jacob:** If Sam Altman had a secret AGI, ChatGPT 5 would have been a lot better.

**Jerod Santo:** Well, that's the other thing, that people are saying on the other side, is like "Well, they aren't getting that much better, that much faster." But they are stinking good, I'll tell you that much.

**Adam Jacob:** But you also don't need them to. Because what we're learning about these systems is that the less you use them, the better you are.

**Jerod Santo:** Yeah, you build the software systems around them.

**Adam Jacob:** Yes. It's what you plug into them that matters.

**Jerod Santo:** Right.

**Adam Jacob:** And so the first stage of this was make the LLM do everything. That's why we were all like "Make it do math." What a ridiculous thing to ask it to do. It's always going to be awful at f\*\*\*\*n math. The technology is anti-math. It's like "Oh, what am I? Random and non-deterministic." So why do I care about whether it can do math for me when I have calculators? Why don't I just plug in a tool that does math, and then I'm guaranteed that the math is right all the time.

**Jerod Santo:** Brilliant.

**Adam Jacob:** Because you know what it doesn't do? Hallucinate numbers that it received after it received them from a tool. I've never seen that happen. I've never seen it be like "Oh, here's the number", and then it's like "Oh, I changed it for you. It's actually 72." I'm sure it happens, but it's not very often. But that was our first pass. Our first pass was just like "Oh, we're going to feed everything in the world to this magical robot, and the magical robot is going to do it." And that's clearly dumb. It was clearly not playing to the technology strengths. And now we're learning how to play to its strengths, but... I mean, just now learning. The last couple of months I think as an industry we're starting to be like "Oh, that could be the way." It might actually come together that.

**Adam Stacoviak:** How has this changed how you think of things, Adam? Is there a fundamental paradigm shift in your brain?

**Adam Jacob:** I think it's convinced me that more of the systems that we architect around the LLM will change. So if you think about the interfaces that we provide to those systems, they're like weird anti APIs. So the API that I would give to you as a software developer, that you would be pleased with, is not the API that I should give to an LLM, because the LLM is trained on human language and behavior... And so it dramatically outperforms when you give it these really wide interfaces, and let it explore... Who does that? That would be a terrible API design. If I told you that my API to my service was one big function call, and I was just like "Whatever..."

**Jerod Santo:** Yeah. "Send me some stuff."

**Adam Jacob:** "Send me junk and I'll run it for you." You'd be like "No." That's a terrible design. But it turns out with AI it's kind of a good design. And those layers are dramatic... And I think the thing that's changed for me is that now I can't look at problems without thinking "Well, where can I insert that essentially plain language compiler, and turn it into a loop where I'm working interactively alongside something that can help me move through this problem space?" And that's just a dramatically different way of thinking about everything, to some degree. And that's not how I felt about it for the first, I don't know, year and a half of this journey, where I was just "Uhm, I don't know." I try it every now and again, it's not very good... The results are mediocre... The hype cycle's crazy... But the last six months or so - it's tough. And it really has fundamentally changed the way I think about it.

\[00:47:53.21\] With System Initiative - I mean, we took this UI that we had spent five years building, trying to be like "Here's a better way to compose these resources", and I just deleted it. It's just gone. Because it turns out --

**Adam Stacoviak:** \[unintelligible 00:48:05.00\] stupid...

**Adam Jacob:** Yeah. It turns out --

**Adam Stacoviak:** Well, smart with your knowledge, you know...

**Adam Jacob:** It turns out that what's great is the models. What's great is that I built these one-to-one abstractions. That was awesome. But the actual way you want to work with them is just in an AI. I just want to say to Claude Code "I need to deploy Valkey to make this session thing work. Can you update the code and then build a change set for me that does it?" And it's like "Yeah, I got you, bro." And then it goes and does it, and then I review its work, and I'm like "Oh yup, that was pretty right. Oh, this security group's a little wrong. Oh, yeah, no, you got the size wrong. I want it to be a little bigger." And we work together in this reactive loop to do it, and then it all just happens. And it turns out that whole composition UI was in the way, because it was designed not for that loop with the agent. It was designed for a human to be like "Here's how I compose things." And that broke my heart. I'd spent five years doing R&D where I was like "Okay, crack your knuckles. I'm going to finally figure out how to give people this incredible UI to let people compose complex infrastructure." And then as soon as I figured out the right shape of how to work with an agent, I had to delete it all, because I was like "Oh, never again." Why would anyone work that way? You just wouldn't. It's so much easier to just ask the system to do it, and it just works.

And so the UI now is about radiating information back to you more than it is making changes. It's like "Show me the map. Show me the review. Show me the changes. Let me dive into the details and play around." But it's fundamentally altered the way I think about everything, including the last six years of my life.

**Jerod Santo:** It had to require some humility...

**Adam Jacob:** Oh...

**Jerod Santo:** \[laughs\]

**Adam Jacob:** Oh, Jerod... I mean --

**Jerod Santo:** Take us back to that moment. Take us back...

**Adam Jacob:** So these are Buddhist prayer beads, and I'm holding onto them, doing this while I'm talking to because of that. Because I'm just like "Oh... Oh, that was awful."

**Jerod Santo:** You're still in PTSD from it?

**Adam Stacoviak:** I'm sorry to laugh at your pain, but it is hilarious.

**Adam Jacob:** I'm just being honest.

**Adam Stacoviak:** I love it.

**Adam Jacob:** It was awful, man.

**Jerod Santo:** How far away from it are you? When did you make this decision?

**Adam Jacob:** We started building the prototypes of working this way less than six months ago, and then shipped it maybe two months ago... So we're just in the very beginnings of trying to get people to understand "Here's what we've built, and here's how it works." And the humility runs in a bunch of different directions. It runs in the humility to look at what you've built and be like "No, it's not right anymore. It's not good enough anymore." Which is really hard. It's also that most people -- you have to take people on a journey about why it would work, and why they should try it, and what that experiential loop would be like...

And the people I love most are infrastructure people, and those are not the people that are highest on the AI supply train. Do you know what I mean? Those people tend to be the grumpy Luddites, who are like "Never been useful to me..." So that's also been humiliating a little bit, to go out to my people and be like "Look at what you can do if you think differently about it", and they're like "I don't know." Not only do I not want to look at it, I reject the premise that it could work at all. And that is humbling, because the right reaction to that is not for me to go sit in my tower and be like "Well, I'm just smarter than you." It's to figure out how to explain it better. It's to figure out how to be like "Okay, I've got to get all the way down to the ground again, and just be like "Look, I know. I know, I get it." I have to find that path of empathy to be like "Here's--" Like, I do have to explain it to you from first principles. I do have to work you back from the very foundations of how we think about this problem. There's just no shortcuts, and I really want there to be, because I want to put it out into the world and have everybody just fawn all over me. Because wouldn't that be easier for me? \[laughs\]

**Jerod Santo:** \[00:52:16.21\] For sure.

**Adam Jacob:** But it's not what happens.

**Jerod Santo:** You can't just manifest that, you know?

**Adam Jacob:** You can try.

**Jerod Santo:** Well, of course.

**Adam Jacob:** And every now and again it does. It's every once in a while landing in a bottle, but...

**Jerod Santo:** So that's interesting, because the infra people are some of the most resistant to the new tech. But you couldn't possibly continue building it the previous way.

**Adam Jacob:** No. Because once you've seen it --

**Jerod Santo:** Because the world has changed.

**Adam Jacob:** Yeah. It's irresponsible. I have investors, I have my own dreams and my own hopes... I wasn't building it -- my job is to try to build something great. And that's where the greatness is. So you've gotta go there. And it doesn't matter what the risks are, because you're guaranteed to lose the other way. You know what I mean?

**Jerod Santo:** Yeah, exactly. Yeah, it's a losing proposition. Like, this is the only way you could win. It doesn't mean you will, but at least you've got a fighting chance.

**Adam Jacob:** Yeah. And it's so fun. You know, we built a policy engine that uses the MCP server to let you write policy and Markdown that describes "Hey, check my infrastructure to make sure that this policy is always applied, and then give it a search query that tells it what infrastructure to pull in." And then the bot will go grab that infrastructure, apply the thing, and then write you a report about whether you're compliant with your policy. And we wrote it in three hours. And that's crazy person talk.

**Adam Stacoviak:** It's such crazy person talk.

**Adam Jacob:** It's bananas. But you know, who's experienced that so far in industry? Me. Paul Stack who works with me. A small handful of people who are listening to this podcast who don't work for me, who have done it themselves, and they're like "Whoa...!"

**Adam Stacoviak:** Some of them that listen to this show dream of working for you.

**Adam Jacob:** Yeah. Well, if you want to work for me, the first step is to buy my software. \[laughter\]

**Adam Stacoviak:** Wasn't it Don McKinnon, Jerod? The voicemail was for Don McKinnon, where it was that he'd \[unintelligible 00:54:12.07\]

**Jerod Santo:** Oh, yeah, yeah.

**Adam Stacoviak:** That's what I'm referring to. Drop a note, Jason. Give us a little tease of that.

**Jerod Santo:** Did you ever hear that, Adam? Don McKinnon, a Changelog listener, and now a guest - he was on the show this year - who's a fan of yours... And he confessed his fandom to Breakmaster Cylinder for our State of the 'log annual episode where BMC will remix people's voicemails... And so BMC remixed a voicemail that Don left us, in which he mentioned he enjoys your episodes in particular.

\[00:54:47.14\]

*Hey, Jerod, Adam, and everyone at Changelog. My favorite episode of 2024 was the Changelog & Friends episode "From Chef to System Initiative. I've been following Adam Jacob on social media for a while, and he's always a great guest. So it was interesting to hear more about his career journey that led him to where he is now with his new company. And I did have to go back and watch Any Given Sunday after hearing that episode. I'd never seen it before.*

*I also got a kick out of the "Rails is having a moment again" episode. A lot of times I disagree with DHH, but regardless, he is always entertaining to listen to. Thank you for all the work you guys do on the podcast. It's one of my favorites."*

**Jerod Santo:** And the BMC remix has basically Don confessing that he stalked you, and you had him thrown out of your office.

\[00:55:32.12\]

*"My favorite episode was from Chef to System Initiative. I've been following Adam Jacob on social media for a while... I've been also following Adam Jacob to work. And I got kicked out of his company. So it was interesting to hear more about his career journey that led him to kick me out of his company. And I disagree with him, but regardless, he's always entertaining, and he's always kicking me out."*

**Jerod Santo:** It was hilarious. We'll have to let you listen to that.

**Adam Jacob:** Yeah, I really do wanna listen to that.

**Jerod Santo:** Yeah, you should. I mean, if you want the ego boost, this is a good one for you.

**Adam Jacob:** \[00:56:11.14\] Oh, that's so fun. Yeah, I could use it after my after my humble pie of realizing I had to delete years of effort because the interface was wrong.

**Adam Stacoviak:** Can we get into the practicality of - they say AI slop, right? And so you said you just did this feature in three hours, which is mind-blowing...

**Adam Jacob:** Yeah.

**Adam Stacoviak:** And that means that you've got code generated by the LLM, that you didn't write, but you're probably code reviewing. So I'm assuming you're generating a lot more code, maybe a lot more prose even too around what you're building... Because documentation - why not? When you can just generate it. Do it.

**Adam Jacob:** To some degree, yeah

**Adam Stacoviak:** Yeah, for sure. But what is what is it like to generate that kind of feature in that kind of timeframe, and do it well in terms of code? Do you code-review it? What's your engineering change of practice as a result of generating so much code?

**Adam Jacob:** Yeah, yeah. I don't know... It's interesting. So that example is happening in a vacuum, where we're basically running a little spike to be like, okay, very few people have actually built end-to-end, complicated, full lifecycle application deployments using this kind of technology, because it just is too new. And so we're doing it ourselves, to be like "Are we right about how the best practices work? Are we are we right that this flow is better?" Those sorts of questions. And so the code quality that's necessary on this policy bot, for example, is pretty low, because I just need it to work to see "Is this cool? Is this directionally the kind of thing you want it to be?" And so in that case, the loop is much more about just "Does it meet requirements?"

**Jerod Santo:** Right.

**Adam Jacob:** And that I tend to also use AI to do. I'm like "Hey, here's the list of requirements." Like Playwright, or those sorts of things are great at just being like "Go prove this thing. Write me some tests." And its purpose is really just to meet the requirements. When it comes to the actual System Initiative codebase, which is quite large - it's a big monorepo; probably over 100,000 lines of code by now, easy... The utilization is more embedded, in that the engineers are using it in places where it makes sense, or where it will accelerate them... Sometimes they're using it to help understand the codebase, sometimes they're using it to write features... They've had great luck using it to refactor... Like, write a bigger plan, have it refactor, move in those stepwise directions...

I think in general what we've all kind of learned is that the more specific we can be, the better the outcomes are. So in the early stages of this you were trying to feed it as little as possible, and then hoping it would do magic, and then judging it when it doesn't perform... And I think now we've sort of transitioned into the world where it's more about saying "Hey, here's this problem. I understand the problem as a person, to some degree. Here's what I know. Now tell me what you know that confirms or disproves that hypothesis. Then we're going to use that information to go write a plan..."

**Adam Stacoviak:** It's a dance.

**Adam Jacob:** And then I'm going to read the plan, and then we're going to talk about the plan, and then you're going to go execute on this plan, and then I'm going to see if I like what you did... And if I don't, maybe I throw it away. And I would have never done that historically... Like, just open a branch and then have a bunch of code get written, and then be like "Nah, I didn't like that direction. Let's go the other way." I do that all the time now.

And so that stuff has changed... But the fundamental question of like "How do you apply taste? How do you apply the right level of engineering?", that really hasn't changed. So a good example is the first MCP server for System Initiative actually a customer built, and had showed it to me, and I wasn't very enthusiastic... Because quite frankly, it was bad. It was just a one-to-one mapping of the API, and it didn't perform very well, and I was like \[unintelligible 01:00:10.26\] It's just like all the other AI stuff I've ever done.

\[01:00:15.05\] And then when I started really reading about how to build them well, and what their abstractions were, suddenly it started to perform. And that's the difference between the one that we just -- you gave a prompt like "Here's an API spec. Make me an MCP server", which it will go do, versus saying "As a person, I understand what the interface is, and I'm going to craft this thing in a direction that is going to return better results." And so that part of the loop is still all people. And then depending on the engineer, they're using more or less AI in the building... But we don't talk about it that much. And there's certainly not a mandate one way or the other.

**Adam Stacoviak:** Is there a known freedom? Like "Hey, do what you want."

**Adam Jacob:** Yeah.

**Adam Stacoviak:** Sweet.

**Adam Jacob:** Like, I'm just going to give you a license to Claude Code, or you want to use VS Code and run Copilot, what I'm going to do is pay you the same way that when you come work for me I'll buy you whatever keyboard you want...

**Adam Stacoviak:** Right.

**Adam Jacob:** Like, I don't care. And people are often like "Oh, any keyboard?" And I'm like "Yeah, any keyboard." And they're like "Well, what if it's this really expensive keyboard, and I want custom key caps from Japan, with little emoji apples on them?" And I'm like "Any keyboard. I don't care." Because what I want you to have is the thing you're going to put your fingers on it all day, and every time you put your fingers on it, I want you to be like "Oh, I love being here, doing this thing." And so if me spending an extra a hundred bucks on a keyboard makes you feel great about your job, I want to spend a hundred bucks, so you feel great about your job, and stay longer.

**Adam Stacoviak:** Yeah... There's this custom keyboard, Adam, that I want... Well, I don't really want it. It just looks beautiful... I would never spend the money on it. I'm just kind of curious --

**Adam Jacob:** Which one is that?

**Adam Stacoviak:** I can't remember the name of it, but it's... I'm past my research of it, but...

**Adam Jacob:** I see.

**Adam Stacoviak:** It's not in my brain space anymore.

**Jerod Santo:** He already denied himself and moved on.

**Adam Jacob:** Yeah, he already said no.

**Jerod Santo:** \[unintelligible 01:02:01.09\]

**Adam Stacoviak:** When I tell you the number you're gonna know why. It was like over $400 to build this custom keyboard.

**Adam Jacob:** Hey man, I've been running it Kinesis Advantage keyboards since the early 2000s, and easy 300 bucks, 400 bucks. Saved my wrists, changed my life...

**Jerod Santo:** Right. Some things you don't want to go cheap on.

**Adam Stacoviak:** I think in this case though it wasn't about ergonomics, though. It was about look. It was about aesthetics more so.

**Jerod Santo:** Oh, you like the look of it.

**Adam Jacob:** Yeah, it was like a Lamborghini.

**Adam Stacoviak:** Yeah. It was about how it looked, not how it functioned.

**Adam Jacob:** Yeah, you were like "That looks awesome. And I want mine."

**Adam Stacoviak:** It looks cool.

**Adam Jacob:** It has spinning rims.

**Break**: \[01:02:41.28\]

**Adam Stacoviak:** Do you feel like a babysitter of this AI? Because I've had this idea that we don't have enough babysitters. Or we get to a point where we need taste... You need the LLM to generate, you need the speed at which it knows and can learn, the collaborative fabric that you just described... But then you've got a limit of people who got an understanding of how to direct that thing, and then babysit that thing. Because that takes human time, not human effort necessarily.

**Adam Jacob:** Yeah...

**Adam Stacoviak:** You need to have that tasteful babysitting mentality... And I just wonder if we're going to run out of babysitters anytime soon.

**Adam Jacob:** I don't think so... My experience is it's a different kind of flow. The kind of flow where I'm sitting down and writing code, and I'm just going to write code for eight hours a day, which now that I'm saying it I kind of miss... And so I'm like "Oh, I wonder when I could -- maybe I'll go back to that." But the flow state is there as well when working with AI tooling... But it's a different flow state, because what's happening is the bounce between the conversation, the source code, the decision-making process... You know, the loop is a little different. But it doesn't feel like babysitting, because babysitting sort of implies --

**Adam Stacoviak:** Well, it's babysitting once it starts going. Making the plan is fun. But the plan being baked and then it doing, and then you confirming that is totally babysitting.

**Adam Jacob:** Yeah, but what's changed is that now I don't watch.

**Adam Stacoviak:** Okay... \[laughs\] YOLO.

**Adam Jacob:** But it's not even YOLO. What it's opening up is that there's multiple avenues at once, and the agent will tell me when it needs my attention. And so I'm not waiting around, waiting for the agent to finish... I'm off doing other stuff. And that flows is very weird. In one part of the flow what I'm doing is working on that policy feature, and the other I'm working on a different feature, and I'm doing it at the same time, because there's multiple things that I'm driving all at once. And then I have code open, because there's another piece of the system where I need it to be really specific... And so the context switching I'm doing is different.

But yeah, when I started using these tools, I did a lot more babysitting than I do now. I did a lot of just like "Oh... Will it?" And I'm waiting for the drop. And now I'm not. I'm just expecting the drop. And I'm like \[unintelligible 01:06:50.21\] Like, okay, it's off doing its thing. What am I going to do now? Oh, I guess I'll go do this. And then a little pop-up happens in the corner of my desktop, and it's like "Claude needs your attention." And I'm like "Okay, which one?" And then away we go.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** But I don't feel like I'm doing a lot of babysitting. I feel like I'm doing a lot of -- it feels like engineering. It's different, but it definitely feels like engineering to me.

**Jerod Santo:** I would agree, and maybe it's because I don't like to plan very much, and so I feel more like I'm iterating with it doing the work, and me just... I don't want to use the word "babysitting", because then Adam will be right...

**Adam Stacoviak:** Ha-hah!

**Jerod Santo:** \[laughs\] I'm not babysitting so much as I'm just directing. I'm directing the work. And I'm waiting for it to be ready for the next direction, or the review...

**Adam Stacoviak:** Traffic cop maybe is a better analogy.

**Jerod Santo:** Yeah. Well --

**Adam Stacoviak:** You need more traffic cops.

**Adam Jacob:** The volume of parallelism that you can get out of this is crazy high. It's another way that all the systems that we drive will have to change. Source code is a great example. You know what sucks in the current model? It can hallucinate syntax. And there's no way to know until late in the game, until I run a compiler loop, or I run a lint. So how long before somebody takes a good idea that was something like Unison, where when you're programming, the source code itself gets translated into an underlying data structure that then you can perform transformations on... Where now when the LLM proposes a line of code, it gets automatically linted, it gets automatically vetted at the moment of injection, as opposed to writing to a file.

\[01:08:27.16\] And how much more efficient will that make that loop? ...because instead of it waiting for the compile loop and the AI wrote bad code, the AI will know it wrote bad code immediately, at the moment it wrote bad code, then get corrected by the compiler. The compiler would be like "Oh, you did it wrong", and then it will just loop around. Like, no one's ever built that loop yet, but someone's building it. I'm not like the first person who's thought of this...

**Adam Stacoviak:** No.

**Adam Jacob:** And that loop - that's what I mean when I'm like "Oh, it's going to change a lot about how we think about how these systems are constructed." Because once you start designing the system to make that loop delicious, it's going to be real different than, like, I'm going to crank off 10,000 lines of source code, run the compiler, hope it works, see if the linter functions... You know what I mean? That's working, which is amazing. But if you want to make the user experience an order of magnitude better, you have to get crazier with the fundamentals... And so what's the first postmodern programming language look like that was built with LLMs in mind? I have no idea, but it's different than Python, you know?

**Adam Stacoviak:** Yeah, how would you -- can you think about that a little bit? I didn't even think about a new language, post AI, and being AI-native, really, to use a popular term out there.

**Adam Jacob:** Yeah. I mean, I haven't thought about it a ton, but the first example was one I'll go back to, which is when the AI agents perform better, they perform better when the feedback loops are closer at hand. So when they hallucinate, which you know they will do, you have to correct the hallucination. And so right now, the hallucination loop gets corrected when you run lint, or when you run the compiler, or when you run tests. And so what would change if instead of having the interface "Write to a file and put in some words", instead it was like "Write these lines of code", that gets turned into structured information that gets fed to another structured data source, and now you're doing a transformation to the underlying codebase, which can then automatically understand the context in which the change was made, and then evaluate whether or not it fits on some set of policy about how the system would work, and then feed back to the LLM immediately, "That was terrible code. Don't do that." And that loop - that's the loop. That's how these systems are going to get better.

And what do you have to do in programming language land to make that loop be good? I don't know, because I'm not a programming language guy, I'm a practical technology guy. But Unison, for example, does this with a database, where when you write code in Unison, it synchronizes up to this big database that makes a hash of every function and every variable, and then builds a big Merkle tree of all of those things... And if I was building AI around Unison, I would use the hell out of that to make it so when it writes new Unison code, it immediately tells me whether my code was good or bad, whether it worked, knew how to revert... You know? You could do crazy things, that are just not even feasible in the current model. But most of us aren't thinking at that level yet, because we have more practical things in front of us.

**Adam Stacoviak:** Well, I think some are because of the AI slop, right? Like, that kind of prevents -- if you could perfect that world, even if you didn't go AI-native, which is to rebuild from the ground up with AI mind... Even if you took like Rust, or Python, and said "Look, let's bolt on that kind of world."

**Adam Jacob:** Yeah. If you could figure it out...

**Adam Stacoviak:** When you run Cargo, it does that job. There's a better feedback loop. Assuming the build is being run by an agent being led or directed by a human - if that assumption is true, yeah.

**Adam Jacob:** \[01:12:16.25\] Yeah. Yeah. And that's what I mean when I say that it's all -- the technology we have now... I don't need AGI for that. I don't need the bubble to pop. I don't need any more technology than the one I already have. We could build that right now. The only thing that's in our way is that we haven't been willing to reimagine those parts of the system yet, because there's a bunch of practical reasons you shouldn't. Oh, you're going to invent a new programming language? "Pry Python from my cold dead hand..."

I talk to people all day who hate infrastructure as code. That's their opening gambit when they talk to me, and they're still a little hesitant to get rid of it. You know what I mean? So it would be even harder in those cases. But that doesn't mean anything... You do it anyway, because doing it anyway is the way we figure it out. It's the way we move forward. It's the way that we get to the other side of like "What is --" That's the fun part of being able to build technology from scratch.

And yeah, I don't know -- I think that conversation we just had about programming languages, we could have it in every piece of the stack. We could have it in every industry, and every vertical... Essentially everywhere. And we don't need any new technology at all to do it. None. We have all of it right now.

**Adam Stacoviak:** Does that just feed into the obvious beast of OpenAI, Anthropic, those folks having -- I said tollbooth before, in a different podcast... This idea that we now have to pay the piper to play the game of software development, essentially. It's like, okay, if an LLM or some sort of agentic tool is par for the course when it comes to being an engineer, and if that's true, if we're building everything around that paradigm, then that means that their moat gets thicker, better, more awesome, potentially... Certainly their pockets get deeper, because we're giving them even more reasons to give them more money.

**Adam Jacob:** For sure. But that'll create new incentives for us to be like "Well, wouldn't it be better if we didn't have to pay Anthropic all this money? Wouldn't it be better if you could run it on your desktop?" Because the loop would be better... The reason we're building AI data centers to do inference is because we need high bandwidth to the inference mechanisms. So what are we -- like, we'll start thinking about how do we build a hybrid inference models that use my local resources, but then also move to the other side. How will the PC change because of the shape of that need of inference?

So yes, I think it'll grow their moat, it'll do all those things... But then what it'll do is create a new opportunity, which is "Why am I paying all this money to Anthropic all the time? Wouldn't it be better if - blah, blah, blah, blah?" And around the cycle will go. It won't be like an end game state, where it's like "Oh, and --" But like, will they be big? Yeah, I think they will, and I think it's going to be even more -- I think they'll own more real estate than people are giving them credit for. Right now, people are kind of convinced that the agent part is going to live outside of the Anthropics or the Open AIs... And I think if you've tried to build an agent from scratch in the last six months or less, you've had a pretty good time. If it was before then, if you were like using Langchain or something, it was less good... And I think if you look at the -- like, Anthropic has a Claude SDK, which basically just wraps up Claude Code and then lets you program that as the agent loop, instead of writing your own agent loop... That thing is crazy good. You just include it as an Npm library, and then you don't write any of the loop. You're just like "Here's my system prompt, here's the query, here's the tools I want, plug in some MCP, run." And then it does, and then you're done, and it took you no time at all... Crazy good.

**Jerod Santo:** \[01:15:59.13\] Yeah, so the agent client protocol that Zed came out with, and is starting to get deployed out there is basically leaning into that, where it's like "We're making an awesome editor. We don't want to write the agent, we just want somebody who's putting all this effort into the agent, make the agent awesome, and we'll plug into that." So they're basically seeding that real estate back to Anthropic.

**Adam Jacob:** I think everybody should. The way we should think about the agent is glue. That's the thing I've been -- that's my pithy sentence that I'm trying to get everyone to repeat, is "The agent is glue." Think of it like a Perl script that you wrote. See, I've aged myself again.

**Jerod Santo:** What's that again? What's Perl? \[laughter\]

**Adam Jacob:** Perl used to run the internet. We all had the -- I'm so sorry. Anyway... Think of it like the script that you write. That's more what agents are going to be. But the first generation of this, we were all like "Oh, we'll build custom embedded agents. They'll be on autopilot." There's all these startups that are like "I built autopilot agents, and our special value prop is that our secret agent can do this thing that your stuff can't do, because of all of our whiz-bangy hoo-ha stuff. That's why it's trapped inside of our platform walls." All that's going to get obliterated is my prediction, because the agent is glue. And it turns out that your closed wall agent is actually terrible... Because if you expose the capabilities to my agent, now I could use it to orchestrate my problem, which is exactly what I'm going to do. It's glue. What I want is CPAN. I want Ruby gems. I want Npm. And then I want to write my own agent that uses those things to orchestrate my problem, which it's really good at. And so yeah, the agent is glue, that's the future. And so when you see people --

**Jerod Santo:** So how does that show itself in System Init today? Is it just using Claude Code, or...?

**Adam Jacob:** Yeah. It shows itself by me not embedding the agent, and not trying to build a wall.

**Jerod Santo:** Right.

**Adam Jacob:** So my moat is that I build -- I have the best deterministic system to be driven by an agent. If what you want to do right now is manage infrastructure in AWS, or in Azure soon, or in other places, what you're going to do is use System Initiative within an agent and you're going to have it do stuff like "Go discover your infrastructure. Propose changes. Do it in safe change sets." All of that stuff that we do, that's the magical sauce. And when you connect it up to the agent loop - incredible. But you don't want me to hand you a proprietary agent that tries to do all of the things. What you want to do is build an agent that plugs into your ServiceNow help desk that closes the loop for your compliance structure, that says when that change set gets merged, you're compliant with SOC-2. And I couldn't possibly build that feature for you, because I have no idea how you did it. But you know, and the agent is glue.

**Jerod Santo:** Mm-hm. So how much sauce is there in System Initiative that's not the agent doing things?

**Adam Jacob:** A ridiculous amount of sauce. Like six years of R&D sauce. Hundreds of thousands of lines of source code... \[laughs\]

**Adam Jacob:** What kind of stuff are you doing -- what are you bringing to the table that I couldn't get by plugging Claude into EC2, or something?

**Adam Jacob:** Yeah, yeah. So there's a couple of things. So one is the way that the models get built. So it turns out that if you want the agent to be able to drive something, what you want to do is mimic the outside world as close as possible. So for example, we don't abstract AWS from you. We just expose AWS the way AWS describes it. And the side effect is that when you write a sentence like "Give me an infrastructure that deploys this Docker container from scratch", it'll go build you an AWS best practices-looking VPC and subnets, and deploy it across multiple availability zones, even though you didn't ask it to. Because that's how AWS would tell you to do it, and that's how it got trained, and so it knows how to do that because it's looking directly at this model that we give it.

\[01:19:58.01\] The other thing we're doing is taking that one-to-one model and because we have this strict modeling language, when it hallucinates, we correct it in that moment. So when it tries to invent a property or whatever, we just tell the LLM "That property is not real here. Use this tool to read the directions about what properties exist, and read the documentation."

And then it goes and discovers it on its own. We put your own policy in that same loop. So if you want to make sure that you're compliant, that's how that happens. It doesn't happen later, it happens right when the moment the hallucination happens.

You can create your own new models from scratch. So you can be like "Hey, I have this API document. I want to use it in System Initiative. Go build me the assets for this internal system so I can use it through System Initiative." And it will just run off and read that source code, read that description, and then build the models in System Initiative on your behalf, and then let you run them. And it will do that whole loop. That's not the LLM, that's me. That's all my sauce.

And change sets - you don't want to work in the cloud, YOLOing infrastructure. You don't just want to throw the MCP server of AWS at an agent and be like "If you want to, delete the database." You need change sets. It turns out you need change control. You need the loop. And all of that stuff is what we provide. And that's what I mean when I say you ask the LLM to do as little as possible. Like, we're not asking the LLM to do almost anything, except parse our language, and then make good choices about what to do next, which it's great at doing. But all the complex work, all the inner details of "How do I make this variable subscribe to that variable?", we're not asking you to do any of that. We're just giving it the syntax to express itself.

**Adam Stacoviak:** To automate it. Yeah.

**Adam Jacob:** And it works better.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** It turns out it works great. But, yeah, that's where it is. And that's one of the mistakes that we made in the early era of thinking about AI systems, was we were like "Oh, all the value's in the LLM." And I would make the counter argument. It turns out the LLM is useless, pretty much. It's cool for generating Shakespeare or whatever, or fun memes... But if you want it to do something complicated, what you want mostly are deterministic systems attached to it. And it turns out that's where the value is going to live. The value is not going to live in the LLM. It's going to live in what are the deterministic systems that we connect to the LLM to help that orchestration do the right thing... Which is good for the rest of us, because what we build are deterministic things. So...

**Jerod Santo:** Sure.

**Adam Jacob:** Yeah.

**Jerod Santo:** Tell us more about this custom model.

**Adam Jacob:** Like building your own stuff in System Initiative?

**Jerod Santo:** You said you \[unintelligible 01:22:30.27\] a custom model, and I'm not sure what you mean by that.

**Adam Jacob:** Oh, yeah, yeah, yeah.

**Adam Stacoviak:** You said you \[unintelligible 01:22:33.22\] an API spec, I believe, and said "Build a model around this."

**Adam Jacob:** Yeah, yeah, yeah. So a good example is - Keeb, who works for me, he has a bunch of stuff in Digital Ocean. And we didn't have Digital Ocean assets yet. And so he took the API doc from Digital Ocean, and he wrote maybe a three-page paper on how to translate that API document into assets in System Initiative, and then he fed it to the LLM, and then it wrote them for him. And now there's Digital Ocean support, and it's working in Keeb's workspace, and we're polishing it up, and we're going to publish it. That model, of how to drive Digital Ocean through System Initiative - LLMs wrote all of that.

Or one of the demos we run for people is we build an infrastructure that they tell us -- they just tell us what they want, and then we turn it into a template, and then we ask the LLM to find the variables and be like "Hey, I want to drive the size of my infrastructure", or those sorts of things... And then have it program the model in real time inside System Initiative, and then see that reflected back to you. And then that's the loop of how you figure out how to build the automation... Which is a crazy loop. It's so different than the loop of writing infrastructure code.

**Jerod Santo:** Gotcha.

**Adam Jacob:** But back to -- not to shill System Initiative too much, but to get back to things newspeople can use, or whatever... The thing we're doing there that you can take away with you is that the interaction loop is driven by humans talking to the LLM. So you could write that -- you can write those assets yourself. You can write a deterministic pipeline. That's what we do for AWS, that's what we're doing for Azure... Because they change a lot, and we want to automatically, dynamically build those models.

\[01:24:21.03\] But for a lot of things, you don't need that level; you just need it to work. And so if you just need it to work, the interface here now is like "Talk to a chatbot", and go to the agent and be like "Okay, do this thing for me." And then look at the results. And that's the loop everybody can have at this point. And you should start thinking about it, because it's so good. It's so compelling.

**Jerod Santo:** It really is. Especially the lower the stakes, the better it is. The higher the stakes, and you start wanting some more harnesses.

**Adam Jacob:** I mean, look, a human's got to be in the loop. One of the first things people wanted was autonomous agents... And another pithy thing I'm trying to make into a thing is that agents earn the right to autonomy. So you've got to earn the right to be autonomous by performing really well in human observation, over and over and over again. And I don't want an autonomous agent. Not at all. I want humans in the loop, until I decide I don't.

**Adam Stacoviak:** Yeah, I kind of want autonomy with guardrails, and clear parameters... So within the world \[unintelligible 01:25:29.18\] for you to go and do, yes. Go and do some things. And most of the things I'm doing are not hard to roll back, so it's not \[unintelligible 01:25:38.05\]

**Jerod Santo:** It's low stakes.

**Adam Stacoviak:** That wasn't my fault, okay? \[unintelligible 01:25:41.25\] You know what I mean? So I want to create an idea or a world to live in, and say "Go nuts, get it done." You know, we've thought through it all, we've... You know, one of the last things that I do before I'm like "Okay, we can actually do this", is I say "Examine..." and I call them PEPs. So I've coined this idea of agent flow, essentially, of like how to create documents... It's document-driven development, spec-driven development, sure... But essentially, creating these PEPs \[unintelligible 01:26:11.28\] from the Python language of how they create enhancement proposals. So let's craft an abstract, let's craft why it should exist, all the research behind it, maybe some code samples, potentially some additional files that live outside of the actual PEP Markdown document that support it... Whatever, go nuts. Make this idea whatever it And at some point there's acceptance criteria of like what you're going to do, and what will be accepted. And if that's all clear, then go nuts.

**Adam Jacob:** Right. And it turns out it performs pretty good.

**Adam Stacoviak:** And it does. Yeah. But the last thing I ask it to do, even when I'm pretty sound in my belief, and I've read it myself, and "This is cool. Yes, let's go", is I say "Examine this for clarity and blind spots."

**Adam Jacob:** Totally.

**Adam Stacoviak:** And there's so many times I'm like "Oh, my gosh..." I mean, again, I'm not solving AWS problems, kind of thing. It's more like small things... But we would have gone a different direction or wrong direction if I didn't ask it to examine it from a clarity and blind spots perspective. It's like, okay, when I get to this point, I'm not really sure what to do. I know our plan is pretty good, but that point there is crucial, and I don't know what I'm going to do. I'm going to guess when we get there, basically, it says.

**Adam Jacob:** And how many other places could you do that? I don't know, but I want it in all of them.

**Adam Stacoviak:** Yeah, I agree. That kind of capability for a human to --

**Adam Jacob:** So good.

**Adam Stacoviak:** And it's not that I don't want to think about it. It's like, I want to take my brain space while I tell you to do it, to go do the other parallel thing I'm doing, or to go and do this email thread, or this phone call, or this... Whatever I'm doing.

**Adam Jacob:** Yes... That's why it's a different flow state.

**Adam Stacoviak:** Yeah. Writing software in the background, essentially. Checking in when in when I have time... "Here's the plan, go do it..." Come back later, "Cool. Done." Yeah, it's so wild.

**Adam Jacob:** \[01:27:56.14\] It's wild.

**Adam Stacoviak:** I can't imagine that's how software engineering is now, and how that's going to influence the future direction of how we engineer software. It's so wild.

**Adam Jacob:** Right. Because that loop is the sudden loop we're optimizing. And we've just discovered it. You know what I mean? It's like we're using DOS, and there was no Windows. That's where we are in the life cycle of these tooling. And we want to believe we're not, because all the hype, and money, and... You know what I mean? They're telling us really loudly that we're not there. They're like "This is ready!", and it's all -- "We've figured it all out", and like "Okay, man... Sure. Slow your roll. This is DOS 4.2." This is the worst it's ever going to be... We have no idea what the right interaction models are... We're grubbing around in the dark. And also, it's awesome. In the same way that I loved DOS when I was a kid. I was like "Ooh, I'm gonna run bulletin boards, I'm going to figure out how video games are going to work... What's a TSR?" But we're at that level now. We're at the very, very beginning.

**Jerod Santo:** I just played Duken Nukem, mostly. I just played a lot of Duke Nukem.

**Adam Jacob:** I loved Duke Nukem.

**Jerod Santo:** So did I. \[laughs\]

**Jerod Santo:** Who didn't love Duke Nukem?

**Jerod Santo:** It's the best. It had to be the best.

**Adam Jacob:** Yeah. It was incredible.

**Jerod Santo:** It was.

**Adam Jacob:** Yeah. Wing Commander was more my jam, but...

**Jerod Santo:** And there's Duke Nukem Forever, which eventually did come out. I think it was 25 years later, or something like that...

**Adam Jacob:** Did I play Duke Nukem Forever? I must have.

**Jerod Santo:** I don't think anybody did. We all wanted it to come out, because it was a running joke.

**Adam Stacoviak:** Yeah, I think it's been like 10 years or a decade, and it never actually manifested, or something like that...

**Jerod Santo:** It was funny. And when it finally did, nobody cared. We're like "Yeah..." We moved on.

**Adam Jacob:** Yeah. Because we were like "Wah, wah, wah..."

**Jerod Santo:** \[laughs\] The world has moved on.

**Adam Stacoviak:** I funded that Kickstarter... No way.

**Adam Jacob:** And our humor group moved on... We were like ",Oh yeah, it turns out I don't actually want Duke Nukem anymore."

**Adam Stacoviak:** They actually renamed it to Duke Nukem Fornever.

**Jerod Santo:** Fornever? \[laughter\] I like that.

**Adam Jacob:** Yeah. That's the way. Yeah. What could go wrong...?

**Adam Stacoviak:** So we're in Windows DOS... That's where we're at right now.

**Adam Jacob:** Yeah. Before -- I think we're in DOS. I think we're not even in Windows.

**Jerod Santo:** There's no Windows.

**Adam Stacoviak:** There's no windows. The tools I think we have available to us now as developers, that we want to have people leverage our tool more so in their agents is an NPC server, or this new skill \[unintelligible 01:30:10.09\]

**Adam Jacob:** Yeah. In command lines, we're figuring all of that out.

**Adam Stacoviak:** Of course.

**Adam Jacob:** Yeah. But once you realize how easy it is to build new tools, or to build new skills, and then plug them into -- you don't have to think about the loop anymore. You don't have to think about "Well, how am I dealing with agent memory, or the turns between submissions?" It was not that long ago where if you wanted to write your own agent, you had to think about all that stuff, and you do not anymore. You can pull up that agent SDK, and the interface is an API that's called Query, and then you put in all the options, and then await the results. That's it. And it'll go off and do 50 turns, and it'll call tools, and do all the thinking, and be like "I made a plan for you..." All that stuff's built in, you don't have to do any of it. And like, okay, so the agent is glue now, because I'm just going to do that. How many tiny agents will I write, because all I have to do is be like "Hey man, build me this pipeline that does policy bot. Grab the data from over here."

**Adam Stacoviak:** "Hey, man..." I love it.

**Adam Jacob:** That's wild. It's wild. But when I say that it's like DOS, it's because the -- it's cool we can do that. It was cool we could write Duke Nukem. But there was a lot more we could do in how we interact with computers, and the design... What are the applications you can build on top of it... All of that's open field running, and everybody wants you to believe that we've already cracked the nut, because we're all trying to make a dollar... But we mostly haven't cracked the nut. We're all still experiencing it. Infrastructure, I've cracked the nut. You should pay me a dollar. But you know...

**Adam Stacoviak:** Well, on that note, just take me into the world of how now, with the rewrite -- so you're now AI-native, which means you went back to square one, you threw it away, you deleted it...

**Adam Jacob:** \[01:32:05.15\] Well, I mean, we deleted a lot of it. The core model we kept. It turned out the core model was Catnip for AI. So that was -- so all that lived. Yeah.

**Adam Stacoviak:** Right. You did that. And then now you're at this place where you're drafting essentially what I would imagine some sort of new interface.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** Right? Agents glue.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** How does someone interface with System Initiative in an AI-native way? Are you in Claude Code? Are they in Claude Code? What's going on?

**Adam Jacob:** Yeah, they're in Claude Code. So the way we ship it is basically a pre-bundled Claude Code where you check out a git repository, and what it has is a pre-configured MCP server, where it's like, for your convenience, we've blessed a lot of the endpoints that are safe, and then added in the context in the Claude MD, and set up some of those things... And that's been working great. And then as we extend the platform or whatever, we just commit to that Git repo, you pull it in, and now next time you start the agent, you get improved capabilities.

**Adam Stacoviak:** So you're navigating to a directory that you've cloned down on your disk, as an individual developer, and you're instantiating Claude.

**Adam Jacob:** Yup. And that attaches you to a workspace in System Initiative, and it's got the MCP server already configured. You could do all of that yourself. It's not a secret that that's what we're doing.

**Adam Stacoviak:** No, no, I get that. What I think is funny is how simple that is, really.

**Adam Jacob:** It's so simple.

**Adam Stacoviak:** So simple, right?

**Adam Jacob:** And it works so good. And it's way better than being like "Install the custom System Initiative agent", and you're like "Oh, man... But it can't write plans like Claude does." You're like "No, no. Just put it in plan mode, and have it go look at your infrastructure, and have it spend credits doing deep thinking." And it does deep thinking. It turns out it's incredible at it. So that's not my value... My value is what it's going to execute on the other side.

So then there's really three ways you interact with it. So one is through the agent, two is through a web UI, because you want to understand what the agent has done, and you want to be able to visualize it, or you want to be able to visualize your own stuff... So ubiquitous search, mapping... So there's still a visual component, but what it's doing is drawing you a map, as opposed to letting you sort of build a map yourself through composition. And then the third is a public API, where you're driving that data model through what looks just very traditional software development API calls.

And so when you think about -- and then you use all three of those modes in different ways. So in a CD pipeline, you'd be using the public API to do promotion. To basically say "Hey, take in the data about the build that I just did, and then call into System Initiative to change some infrastructure." You'd be using the agent loop to do that policy bot that I talked about, where you're just like "Hey, just call the agent. Have the agent do it." And it'll go search for the right thing and then do the analysis, and then write me a report. You're using the web UI to understand what the state of the infrastructure is, or to troubleshoot problems, or to review the work that's happening elsewhere, other people's work...

So those are the sort of three ways. And I think that is going to be a model that more people start to accept, is that as these agents come online and we're doing more and more with them, what we need are systems that allow us to interact at different levels of fidelity... Where like, I don't want to have to do all of my API calls through the agent, because that's annoying, because I know what I want to do... So if I know what I want to do, just let me call the API like a normal person... Because that's good, and great, and who doesn't love a good API...?

**Adam Stacoviak:** Sure.

**Adam Jacob:** And then -- yeah. But I think things are going to in general become more multiplayer in that way.

**Adam Stacoviak:** Have you considered that you're the -- gosh, I'm just zooming out. So follow me with this, because I'm trying to piece together some insights that I just kind of get in real time. And I've got a good friend who's building some on prem stuff, so I'm knee-deep with my friend who's building out some cool private cloud stuff... And I'm thinking about those folks who want to migrate away from the cloud. Maybe they might be an Oxide customer, maybe that they're not going to be for a while, but they definitely have their own hardware. But what they don't often have is the cloud operating system, which I believe System Initiative could be, because you need this connective tissue on top of disparate hardware, with ideas, in orchestration.

\[01:36:25.22\] And largely, that's been infrastructure as code, hard to automate, TerraForm, wars, licensing... All the things. And I just wonder, have you considered that System Initiative is or can be that cloud operating system for everybody? ...put it on top of anything, whether you choose public cloud, or you choose private and on-prem instantiation? Is that what you're going to do?

**Adam Jacob:** Yeah. Yeah, basically. And that's why the design is generic. That's why you can create your own components, that's why you can program it from the agent, that's why you can create -- if you have your own applications deployed on-prem, they probably have their own APIs, they have their own CLIs. You're going to write custom functions that go and interact with those parts of the system, and that's how it's going to work. And what's different is the way you think about the layering...

So we've had to build a lot of abstractions in order to try to make things good enough for people that it turns out when the agents are in the loop, you can remove. So there's a lot of layers here, where when you think about what the interaction model looks like, you might be able to remove some of those intermediate layers, because they're actually in the way now. You can orchestrate a lot more -- System Initiative's models are one-to-one to the cloud provider, which is crazy. You're like "I want to deploy a load balancer in AWS." That's not like one object. It's like six objects. You've gotta be like "Oh, well, what's the listener?" and then "What's the target group?" And then "Oh, is it going to talk to this thing? And what are the subnets going to talk to?" It's crazy verbose. And so the move in programmer land would have been to build an abstraction that's like "Oh, here's a simplified load balancer abstraction", so I don't have to think about those six components. But with an LLM, you don't care. You're just like "Make me a load balancer", and it's like "Sure." He'll go poop out the six, and then you can look at them and you're like "Oh, yup. Those are the six I wanted."

I don't need the higher level abstraction anymore, because the higher level abstraction was me just saying "Load balancer, please." I don't need an intermediate layer. So even when we think about it as the cloud operating system or whatever, it breaks your brain in half because you're like "Well, yeah, but what's the interface?" I mean, it's probably just saying "Could you deploy my application onto this hardware, please?" And then it's like "Sure." The low-level details are actually the thing you need. You don't need the middle layer at all.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** And we're still exploring the repercussions of that. You know what I mean? I don't know where that goes or how that ends, but when I talk about it being open field running and how much opportunity there is to build, that's what I mean. The more you open your mind up to what's possible, the more you're like "Oh, yeah, actually, it could be a lot different than it is now", because there's things that you just wouldn't do as a person, that you're happy to let the agent do, because you're just babysitting it. You don't mind that it had to go run off and do those six things. It knew what to do.

**Adam Stacoviak:** Do you support on-prem currently? I know you've mentioned AWS, GCP...

**Adam Jacob:** Yeah...

**Adam Stacoviak:** Like, custom hardware - where are you at with that?

**Adam Jacob:** \[01:39:47.27\] Yeah, we're nowhere yet, but what we do do is support your ability to build your own models. So if you have stuff you want to drive with System Initiative, and you have a specification, what you would do is just create the models and feed it. But we'll start. It's an obvious thing, that as we add more coverage, the system gets more powerful. We do right now architecture migration inside AWS, where it's like "Hey, I want to move to Graviton. So analyze my infrastructure, make me a plan for moving to Graviton, show me what I would need to do, then analyze my codebase to see if there's anything in the codebase that makes it so I can't move to Graviton." That loop - we can do that loop for you right now, and it's very cool. Once multiple cloud support comes more online in System Initiative, which is coming quickly, that stuff's just going to work between Azure and AWS. And it's not going to move your application. It's not magic. It's not going to -- but if somebody needed it to, suddenly you're like "Well, the agent is glue." So how's your application work? Maybe you write a little bit of glue, that knows how to do that orchestration, that knows how to take the database backup out of Azure and then load it into AWS, and then run that script. And then what you wouldn't have to do in the middle was all the work to be like "Well, how do I map the instance sizes for my CosmosDB to Dynamo?" It's going to get that right on the first crack. And it's going to get it right a hundred percent of the time.

So that kind of mobility is just going to keep compounding, because then we're going to be like "Well, sure. We'll do VMware." Everybody wants to get off VMware... And so, okay, once you have a VMware target, and you have a whatever else target, that migration story is the same. You're just like "Well, okay..." The raw infrastructure part is pretty easy. The hard part now isn't "How do I build the infrastructure declarations?", it's "How do I move my app?" Which was always the hard part. The \[unintelligible 01:41:53.06\] was always what's the actual application requirements as it migrates. But in those stories, that's the plan.

**Adam Stacoviak:** I know I'm asking one more time about this on-prem situation, but how important is it to you to get there?

**Adam Jacob:** It's pretty important.

**Adam Stacoviak:** Because I feel like it's becoming burgeoning. Like, it's new. This new "own your own cloud" kind of situation is newer in the last two years, but there's a significant uptick in the desire. We just had an outage, we just talked about that, right?

**Adam Jacob:** Yeah. We'll probably start with Oxide and OpenStack, and then you start to move from there. But once people start to adopt in a bigger way, then they start to bring them. If you have the API that you want... Like, one of the things that's true in System Initiative right now is we're still in the part where we're writing core documentation. We're just trying to catch up with all the things it can do. But there's nothing stopping anyone right now from being like "Hey, I have an API spec for this thing I run on prem. Take that API spec, build models in System Initiative, and away you go go. Go do it." And it would just work. There's no magic to it.

**Adam Stacoviak:** Gotcha. A lot of fun stuff, man.

**Adam Jacob:** So fun.

**Adam Stacoviak:** A lot of fun stuff. Are you growing as a part of this? Do you need more babysitters, more toll booth orchestrators, more directors?

**Adam Jacob:** In terms of employees?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** No, I'm good right this second. What I need to do right this second is bring my products to market, and get more people to understand what we've done, and turn that crank faster. And more employees would be helpful, but at some point, the thing you're doing is getting the feedback loops moving that gets you to the spot where you're like "Okay, now it's clear what to do." And today I have staff, I could put more people to work, but what I need more of is people trying System Initiative and being like "Oh yeah, this worked for me. Oh, this didn't work for me. Oh, this is what I really want to do. Oh, can I contribute this thing? Oh, I really need to make models for this thing that I do. Can I do that?" And you'll be like "Yes, absolutely. Here's how you go do that."

\[01:44:11.13\] And so today that's the most important thing in our business, is just finding those people and helping them win, and getting them successful. And that naturally will lead me to needing more employees to work on the software. But today, I don't need more employees to work on the software. I need more people to use it, to tell me where we need to go.

**Adam Stacoviak:** Yeah. What is it like to go to market today, in 2025? What's the hard parts about going to market?

**Adam Jacob:** Yeah, it's weird, righ? So I can't speak for anybody but myself... So I would say in infrastructure, what's weird today is that we spent a lot of time teaching the market how to do the last generation of tools, because we thought that was the best we could do. And we did a really good job. So I'm proud of the work that we did to build DevOps, and to think about infrastructure as code, and sort of all of those paradigms.

The amount of AI noise has made any AI go to market really tricky, because people are just tired of somebody telling them "Hey, this AI thing's really cool. It's going to change everything." And you're like "Not in my life... I'm sitting over here, doing what I do. All it did was lie to me this afternoon. I gave it a try, it didn't work. I'm over it." So part of the challenge is just that practitioner challenge of talking to people and being humble enough in the face of their incredulity, to sort of stay engaged and be like "Oh, yup. I understand your incredulity. I know why you're saying what you're saying. Together I'm going to show you that it can be different, and then we're going to get there."

And so that's interesting to me, because in my career, building configuration management, or infrastructure as code, or the DevOps movement - when it was coming up, there were people that rejected those things; there were people who looked at Chef or configuration management and they were like "Never for me. Snake oil salesman." But it was pretty rare. And there certainly wasn't an overarching technology story that we were a part of, where - like, earlier in this podcast we had a serious conversation about whether it was a bubble, and whether the whole thing was snake oil... So that as a background noise, when you're trying to go to market, sucks. That's no fun at all, because it's really difficult to cut through that noise and be like "Hey, no, this is real practical, valuable, useful stuff." Because people's reaction to it is just like "It couldn't possibly be", because it's the 15th AI pitch they heard this week, and 14 of 15 were bad.

I think the other is that on the flip side, the enterprise sell - way better. It's never been as smooth as it feels right now. So take the same technology, the same things, I show it to a CTO at a global 3000 company, and they have an existential crisis about what it means. They're like "Oh, no." And they get it immediately. And so it's very strange.

**Adam Stacoviak:** What do you mean by "Oh, no"? What do they mean by "Oh, no"?

**Adam Jacob:** \[01:47:50.21\] The implications are massive, organizationally. Like "Oh, this is the way our technology will work now. And I know a little about how my organization works today, and the gap between what we will be able to do, what we can do now, and where we were is so big" that they're in. They're like "I have to move. I have to do this, because if I don't, I'll be left behind." And also, the organizational challenge of moving all those people to this new way of working, understand what the technology is, figure out how it goes... That's a daunting task.

**Adam Stacoviak:** They're like "I quit. I'm going to the beach, okay? It's a great idea..."

**Adam Jacob:** That's a real choice. And this happened in the DevOps movement, too. There were people who were like -- I had meetings where we got to the end and they were like "This is cool software. We should absolutely buy it, but I retire next year, and I'm not taking on --"

**Adam Stacoviak:** "I'm not the one to do that journey."

**Adam Jacob:** "I'm not taking on a transformation journey in 2005. That's not for me."

**Adam Stacoviak:** Interesting.

**Adam Jacob:** And I think what we see now is the enterprise leaders, the technology leaders, practitioners who've been around a long time, the old heads - they tend to get it, and they tend to snap in pretty quick, and they're like "Oh, yeah. Okay... Woof." They've got to shake it out a little.

**Adam Stacoviak:** It's like getting ready for a run.

**Adam Jacob:** Yeah, that's exactly what it is.

**Adam Stacoviak:** "Tomorrow I have a marathon, and I'm not prepared."

**Adam Jacob:** Mm-hm. And you're like "Oh, I haven't been working out, and I need to." It's sort of that vibe... Which is strange for me, because in my career usually it's the opposite. Usually the things I build, it's the practitioners who pick them up and are like "This thing's amazing", and then they go convince their bosses... And we're having this opposite motion, where it's like "Oh, it's actually the top down." The top down then connects to those people, then the skeptics show up, and then they try it and they're like "Oh, I'm not a skeptic anymore, because I tried it." We had somebody, for example, in one of those global 3000 sort of motions, where they turned the system on, they hooked up the agent, they asked it to go build some infrastructure for them, and they were like "Hey, now what I want to do is do it again. I want to repeat it."

And I was like "Well, just tell it that you want to repeat it." And they were like "What?" And I was like "Yeah, just say "Do it again, only in another region." And then it did, and they were like "Ohhh...!" Because we spent a lot of time being like "Oh, what I should do is build an abstraction, where if I wanted to play my app in multiple regions, I've got to bundle it up in a little thing, I've got to put a Helm chart around it, and I've got to put some variables at the top..." Well, you don't have to anymore. You could just say "Do it again", and it would do it again. And that doesn't mean that that's the structure we'll have in the end, but if you're an executive and you're listening to your team, and you're watching your velocity, and you're thinking about how the organization works, that story really hits hard. Because you're like "Yeah, okay. That's better. That would be dramatic..."

And so yeah, what we're seeing is the top down motion is working better, and the grounds up one... Like, I've got work to do. All I'm doing is making practical examples and writing documentation, and doing as much work as I can to just describe the details of like "Here's how this works. Here's the way AI works. Here's how it practically comes together. Here's what those shapes look like." And we're just going to have to do that work... Not just for us, but for the industry at large, because we have to turn it into practical technology or we'll have missed a real opportunity to move things forward. And right now, it's largely not practical. It's still people talking theoretical.

**Adam Stacoviak:** Yeah. It sounds your go-to-market strategy needs to be top down, if it's not already, Adam. Is it top down?

**Adam Jacob:** I mean, it's pretty top down...

**Adam Stacoviak:** Okay...

**Adam Jacob:** But it's weird that it's top down, for me... Once again, back to being transparent - I had an existential crisis, and I had to pull out my prayer reads, or whatever... I wasn't expecting top down. And I'm happy that top down is there... Top down is always part of your strategy. Anybody who tells you that their strategy is bottoms up and never top down, but they sell into the large enterprises is a fool.

\[01:52:17.19\] Large enterprise selling is always top down in the end. So I'm not upset that it's top down. But I get a lot of validation from practitioners, you know? So back to humility, you're like "Oh, I'd like it more if my friends thought it was cool..." \[laughter\]

**Adam Stacoviak:** Going one more layer deeper here, what's sales like for you then? How does -- can we talk about sales? Do you mind if we talk about sales?

**Adam Jacob:** I mean, I'm not gonna talk about numbers or customers, but yeah, I can talk about sales...
**Adam Stacoviak:** You don't have to say numbers...

**Adam Jacob:** ...as a concept...

**Adam Stacoviak:** I'd say, you know, how does your sales organization work, basically? How does a lead come in? Do you go out and get those things?

**Adam Jacob:** Yeah... We're early enough stage that when you're figuring out the go-to market, when you're figuring out "What do we have" and how do you explain it to people, and how does that connect - like, you don't have a sales organization in the middle, because your sales organization needs to be enabled. They need to be given a playbook, they need to be given messaging... And then the great salespeople will take that playbook and rip it up, but they need to have one to rip up. And we're at the stage where both the market at large and our company -- we're just writing the playbook as we go. We're like "Ooh, does that work? Oh, it turns out top-down works better. Great! Let's do more top-down." And that's the stage of sort of selling that you're in, is you're learning about the motion while you're running the motion, which then eventually gives you enough certainty where you're like "Oh, this is repeatable, and now I can grow a sales force."
But a great way to kill a startup is to hire sales reps because you have a sales problem, and then watch them not be able to go to work. Like, they just can't do it, because you've gotta tell them what to do.

**Adam Stacoviak:** Do you have no sales then? ...salespeople. No sales folks?

**Adam Jacob:** I'm blessed enough to have co-founders who have been here the whole time, and I'm pretty good at selling... Not to toot my own horn, but I'm not a bad sales rep...

**Adam Stacoviak:** Nice.

**Adam Jacob:** So largely, a lot of that expertise is in house, so we can sort of hold that out a little longer than other people might. But it's really just - you know, once you know that that motion is there, and you understand it, and you get a little bit more repetition under your belt, and you're clear about where the angles are, then you go hire sales reps.

I think one of the things that's happening in AI is that it can really cause a lot of hypergrowth if the messaging connects to the practitioners, in a way, or if it connects to its market, in a way. They can drive a lot of motion. So we'll see what happens, but...

**Adam Stacoviak:** Always fun going deep... This was a fun one. I really enjoyed this.

**Adam Jacob:** I hope so...
**Adam Stacoviak:** It was dope, man. I dug it.

**Adam Jacob:** I always hope I'm not boring, you know? I don't wanna come and be like "Hang out with me for two hours while I talk about sales."

**Adam Stacoviak:** No, I don't think you were boring.

**Jerod Santo:** You're never boring.

**Adam Jacob:** \[laughs\]

**Adam Stacoviak:** Well, just the \[unintelligible 01:55:16.26\] That was my fault. If no one else cared about that last five-ish, eight-ish minutes...

**Adam Jacob:** I mean, look, if you're a startup founder or you're trying to go to market in this space, I can tell you for sure what you should be doing right now is you should be in every single deal for a long time. Because you need that product learning, and you need the deal flow learning, and the only way to get it is to be there... And as soon as you put someone in between you and the deal flow, you just -- it's like you're trying to understand the world through a pillow, you know?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** You need the fire hose, you know?

**Adam Stacoviak:** \[01:55:53.23\] Do you actually give it a naming, like founder-led sales? Is that what you call it? Or do you just --

**Adam Jacob:** I mean, people give it names... Yeah, people give it names, but... I don't know. I just think of it as like, as a leader and as a product person and as a CEO, I don't know how to do it differently. And I've had the privilege of working for truly great salespeople... Like Barry Crist, who was the CEO of Chef for a very long time, is a world-class sales guy. One of the very first things he did at Chef was watch me try to do sales, and he was like "That was great. I'm going to do it better tomorrow." And then he did. He just showed -- he was like "I'm going to rewrite the pitch. Trust me." And I was like "Great, I will follow you." And he did, and it was incredible, and it changed the trajectory of that company... It was amazing. Good sales guy. Do not underestimate it. But that's because I knew what it was. That worked because Barry listened to me, and he was like "Oh, Adam, I see what you're saying. I see how this goes. Here's how we could change the way we're saying it." He didn't change any of the details about what I was saying, but he changed how he was saying it, what the layout was...

**Adam Stacoviak:** That's packaging.

**Adam Jacob:** ...the packaging, sort of how it all came together... But if you don't know those things -- if you can't do the first part, which is explain it to a sales guy and be like "Here's how we talk about it, and here's why it matters, and here's what people value, and here's what their response is..." And the best way to learn that is to just be in the trenches with people.

If you're listening and you have an infrastructure problem, right this second is the window where I will come sit in your house and build infrastructure with you. And you don't have to pay me money to do it. I'll just do it. I'll just come, and it'll be awesome. We get on planes, we go wherever.

**Adam Stacoviak:** So Adam, what do you know about Bootc? I'm just kidding...

**Adam Jacob:** I don't know a lot about it, but I'll go. Because that's the stage you're in. That's how you learn to sell. You don't learn to sell things by staying at home, you learn to sell by going out into the world and make it happen.

**Adam Stacoviak:** So what you're saying is that there is an opportunity. You will literally fly to them, sitting hand in hand with them and show them System Initiative in their world, or how --

**Adam Jacob:** Yeah. I will literally come to you and I will help you automate your infrastructure with System Initiative, because I want to learn what it's like to do it from your eyes. And that's how you learn to sell the software. You don't sell software by putting up blog posts and being like "I hope you read it and figure it out." Maybe... But the actual way you do it is being like "Oh yeah, you have a problem? Amazing. I'm fascinated by you and your problem, and I cannot wait to help you solve it. Let's solve that problem." And then you do that enough, and next thing you've written enough blog posts about solving people's actual problems, and talked about it on LinkedIn enough that people are like "Oh, I bet this thing would solve my problem." And next thing you know, it does. But that happens because you get on planes. It happens because you talk to everyone. It happens because you -- you know, in the early days of Chef I'd solve people's Puppet problems. They'd come to me and be like "Oh, I have this Puppet infrastructure thing, and this thing's biting me..." And I'm like "Oh, I had that problem. That's why I wrote Chef. But here's how I fixed it before I wrote Chef." And spent a couple hours just hanging out, fixing someone's Puppet. Because that's how you build community. That's how you get people to care.

**Adam Stacoviak:** Yeah. Are you flying lots then? Are you on the plane once a week?

**Adam Jacob:** Yeah, I mean, I'm flying --

**Adam Stacoviak:** When's your flight today? Are you flying today?

**Adam Jacob:** I'm not flying today. And a lot of people, weirdly enough, don't want you to fly anymore...

**Adam Stacoviak:** Yeah. They're like "Nah, stay there..."

**Adam Jacob:** They're like "I don't know, man. That's weird. The pandemic happened... Once again, old guy, maybe we'll just do it on Zoom." Which is fine. I'm happy to do it on Zoom, too.

**Adam Stacoviak:** I like face to face, personally. It just hits different on Zoom. It's good... I do all my sales for us via Zoom. I fly nowhere, and we don't have a bad job at sales, but you know...
**Adam Jacob:** You know, if you could run a couple of weeks... I think there's no question to me what's better if what you're doing is figuring out how to do complex infrastructure automation, or complex sales... The time I spent sitting at Meta, when they were Facebook, just with them, automating data centers - that was invaluable. And it paid dividends in that product for years. And you can't get that buy from a sales call. I can't get that by being like "Well, yeah, you should definitely try Chef. I'm not going to come help you, I don't want to actually be with you." No. This is what I do for a living. I love this.

I love infrastructure. All of those moments, it's not like a chore to have to fly somewhere and hang out and automate some infrastructure... That's a blessing, because you're like "Yeah, I get to see this real gnarly problem. I get to see real people using the software", and you learn so much about how to sell it, about how it works, about their environment, about what people need... And there's no real replacement for it. In Zoom, you can get some of it, but it's a lot harder, because it's just harder to get people to open up. When you're in person, you can be fun, you can crack a joke.

**Jerod Santo:** It's hard to be fun on Zoom.

**Adam Jacob:** It's hard to be fun on zoom...
**Jerod Santo:** It is.

**Adam Jacob:** \[laughs\]

**Adam Stacoviak:** Even on Zoom, people come intended to be allowable, to be distracted... Meaning "This is a call where I can be rude."

**Adam Jacob:** Right.

**Adam Stacoviak:** "And it's okay. I can check Slack, I can check email, I can look at my phone while on a Zoom." But in face to face, IRL, it's not a cool thing to do. And you generally don't do that.

**Adam Jacob:** You know, when you go sit at in a conference room with people, and run a project for a week or two, where it's all dedicated to their point of view, and all dedicated to their problem... That's the best. That's the greatest. That's the funnest thing. And I love doing that.

So yeah, if you're listening and you're like "Ooh, I'd love to do that..." Adam \[at\] systeminit.com. Let's go.

**Adam Stacoviak:** But he's not hiring, okay? He's not hiring.

**Adam Jacob:** I'm not.

**Adam Stacoviak:** I'm just kidding.

**Adam Jacob:** I'm not hiring, but I am gonna come fix your infrastructure for you.

**Adam Stacoviak:** Okay, gotcha. I like that.

**Jerod Santo:** That's an even better deal.

**Adam Stacoviak:** Alright, if you have infrastructure problems, I feel bad for you, son, but call Adam and he'll take care of you.

**Adam Jacob:** Exactly. Precisely.

**Adam Stacoviak:** There you go. Alright.

**Jerod Santo:** Alright. Good stuff, Adam. Thanks for coming on.

**Adam Jacob:** Oh, it's always my pleasure.

**Adam Stacoviak:** Always a pleasure. Thank you so much. Stay cool, be awesome... It was fun.

**Adam Jacob:** Super-fun.
