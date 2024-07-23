**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me today is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** We get to talk about Git today!

**Justin Garrison:** I know, this is actually like a Git show, and so it's everything after git push, but today we're talking about some things that are kind of close to git push as well. But the main topic is an interview with Matti about Gitea. And of course, I made the bad joke that maybe this was like secrets and rumors, but it's not; it's actually like a git hosting.

**Autumn Nash:** He asked for git Dr. Pepper, y'all.

**Justin Garrison:** 23 flavors. Come on, that's what we want.

**Autumn Nash:** The Slack community, the Twitter community, lets peer-pressure Justin into liking coffee or tea, because this is ridiculous at this point.

**Justin Garrison:** I'm drinking a lot less Dr. Pepper, okay? I'm trying to lose some weight, and that's not helping me, so... It's a lot of water.

**Autumn Nash:** It's so rude that Justin can eat so much candy, and drink Dr. Pepper, and just be like skinny. It's rude.

**Justin Garrison:** I'm definitely not as skinny as I was... We're working on it, we're trying to get better, and it turns out that --

**Autumn Nash:** Okay, old man...

**Justin Garrison:** You know what I have not stopped thinking about, which is --

**Autumn Nash:** Tacos?

**Justin Garrison:** I don't think I sent you this one. The person who had the longest fast ever... How long do you think --

**Autumn Nash:** Dude, can we just talk -- I absolutely love your rando... How did you get a white paper about fasting? I thought we were about to talk about some infrastructure thing, and then you were like --

**Justin Garrison:** No, it was a medical research paper.

**Autumn Nash:** This is almost as bad as th time when you had Venn diagrams of Ricky Martin - and what else was it? It was Ricky Martin and...

**Justin Garrison:** It's not on my whiteboard anymore. "Livin la vida loca" was the overlap, but I don't remember what the middle was. Oh, unsigned kernel modules.

**Autumn Nash:** Sometimes I get a text from you and I'm so confused. Like, I know he's gonna loop it back at some point, but until we get there, I --

**Justin Garrison:** I mean, I bought my first Ricky Martin CD, so...

**Autumn Nash:** In 2024.

**Justin Garrison:** Yes. There is a rootkit on it. I needed to have the CD. I needed to have the physical copy, because if you have a Windows 2000 system, or XP maybe, it will install a rootkit, and that's fine.

**Autumn Nash:** Because of Ricky Martin?

**Justin Garrison:** Yes.

**Autumn Nash:** What?!

**Justin Garrison:** Okay, Sony decided -- Sony as the music company was having problems in the early 2000s, late '90s, of people copying their CDs. Apple's whole thing was like rip and burn your CDs and give them to your friends, basically. But rip and burn. And Sony assumed they were losing a lot of money, so they had this thing where they're like "Hey, we need to DRM our files." But how do you DRM a CD that you give to someone? They have to be able to play it. This is like pre-Spotify. Spotify does not exist. Spotify's assets now are DRMed, but they control the player. So Sony has to control the player. So they're like "Oh, well, we need to be able to make sure that you only play our songs through our player, that we ship on the CD." You literally buy the CD, and there's a RealPlayer - remember RealPlayer back in the day - embedded on this thing, but the file still exists.

**Autumn Nash:** Also, do you remember the player skins?

**Justin Garrison:** Oh, Winamp skins are fire. I want that back.

**Autumn Nash:** Yeah, can we bring that back? Okay, sorry.

**Justin Garrison:** So they shipped it with embedded RealPlayer. But the file still exists; you could still like rip them out with something else. So what Sony decided to do was once you launch the CD is autorun would install a rootkit on your computer that would not allow you to see the files on the disk. And so it would hide the files, and the only way that you could play them was with the embedded RealPlayer, and it allows you to make up to three copies of the CD. And you're like "Okay, I can make a copy, an authorized copy", and it would keep track of that, I don't know how... But it would make an authorized copy, and then that CD would also have the rootkit software on it.

\[00:08:02.21\] And so it was literally a worm before worms went over the internet. Because if you put this CD in someone else's computer, it would install the rootkit, and go all over again. So there was a big lawsuit, all this stuff happened, and they ended up \[unintelligible 00:08:13.28\]

**Autumn Nash:** It's like malware.

**Justin Garrison:** It is, exactly. But they licensed the software from another company, and they installed it on your computers.

**Autumn Nash:** And you're telling me that didn't waste more money, coming up with this process? Licensing this software, and then getting sued?

**Justin Garrison:** I'm not telling you that, I'm just telling you they had ideas...

**Autumn Nash:** Corporate America, okay...

**Justin Garrison:** But anyway, that was the first thing I'm talking about. The other thing I was talking about was like the fasting thing. I ended up on "How long is fasting healthy for you?" And this guy named Angus, back in the '60s - guess how long he had a fast for? He did not eat. He'd drink water and zero-calorie drinks like tea and coffee. Guess how long he fasted? With medical supervision.

**Autumn Nash:** How long?

**Justin Garrison:** 382 days.

**Autumn Nash:** No.

**Justin Garrison:** He did not eat for 382 days.

**Autumn Nash:** Food is the joys of life.

**Justin Garrison:** He lost 276 pounds.

**Autumn Nash:** I bet he did, but that sounds like a miserable existence.

**Justin Garrison:** The man did not poop...

**Autumn Nash:** Whoa, we went from white paper to poop.

**Justin Garrison:** This was in the white paper. This was fascinating. He pooped once every six weeks.

**Autumn Nash:** How do you find white papers on these things? Wait, I thought your body can only go without food for five days.

**Justin Garrison:** No. Man went over a year without eating. In the entire year he pooped like seven times.

**Autumn Nash:** But what was he pooping if he didn't eat? Okay, I have so many questions...

**Justin Garrison:** Red blood cells are supposedly like a majority, but I don't understand how this works. But he had medical supervision, and they had gave him supplements for like the vitamins he wasn't getting, and stuff... But it was like off and on. He's like "Oh, you don't need this anymore. Okay, go to the next one." And he just kept going. And the white paper's actually pretty short.

**Autumn Nash:** Did he eat after this?

**Justin Garrison:** Yeah.

**Autumn Nash:** And how did his body just go back to digest --

**Justin Garrison:** It doesn't just go back. You have to really ease into that. In the white paper, there was links to other white papers of people that have died from long-term fasting... And the majority of them died from either having preconditions that were aggravated by the fasting, or by going back to eating in a not controlled way. And so they died after the fast was over, because of the fasting. But yeah, I will link to this.

**Autumn Nash:** So what you're saying is live happy, and eat tacos, is what you're saying.

**Justin Garrison:** If you have a taco diet, sure.

**Autumn Nash:** I have a whole book about taco diets. Hold on.

**Justin Garrison:** Taco diets. Trying to make a taco sound healthy.

**Autumn Nash:** But it is healthy.

**Justin Garrison:** Yeah, I'm gonna link to the white paper. I'll put it in the show notes. Actually, I'm just gonna put the Wikipedia page, because the white paper is linked in the references there, and that's how I've found it. And it was fascinating as an evening of how long can you go without eating.

Autumn, I don't need to see the book. Oh, she took \[unintelligible 00:11:04.05\] I believe it would exist. I don't need to see it.

**Autumn Nash:** I have too many books. \[unintelligible 00:11:13.03\]

**Justin Garrison:** Tacos are not healthy.

**Autumn Nash:** \[unintelligible 00:11:23.19\]

**Justin Garrison:** Look, I can show you my Ricky Martin CD. I have it right here.

**Autumn Nash:** Hold on, hold on...

**Justin Garrison:** The taco cleanse? It's like a cleanse diet?

**Autumn Nash:** Okay, hold up your Ricky Martin CD.

**Justin Garrison:** You're gonna take a screenshot, aren't you?

**Autumn Nash:** Yes...! When you go from infrastructure to taco cleanse, and...

**Justin Garrison:** Did you take the picture?

**Autumn Nash:** No, wait. Hold on. Okay, wait. Okay, smile. That's better. Do that face. Okay, can we just talk about the \[unintelligible 00:12:08.12\] Taco cleanse, and your fasting, and Ricky Martin CDs. How did we end up here? Okay, keep going.

**Justin Garrison:** \[00:12:17.26\] I don't remember how we ended up here.

**Autumn Nash:** Instead of listening to Justin's fasting, listen to my taco cleanse. There's even vegan recipes. Vegan. I mean, I'd rather eat steak, but you know, whatever. Whatever. Look at that. I'm gonna send you a copy of this. We've gotta fix you.

**Justin Garrison:** We're gonna have it in the show notes. The best taco recipes in the show notes.

**Autumn Nash:** Taco cleanse...

**Justin Garrison:** We're gonna put one recipe out each week, and we're gonna put it in the show notes.

**Autumn Nash:** It's important. And coffee recipes.

**Justin Garrison:** It's gonna be cheese, and flour tortillas, and... I like corn tortillas, actually. Corn tortillas, and cheese, and...

**Autumn Nash:** It's gluten-free. You see that? That's gluten-free.

**Justin Garrison:** I mean, I love gluten, though.

**Autumn Nash:** I love gluten, too.

**Justin Garrison:** \[unintelligible 00:12:55.19\] We're like this.

**Autumn Nash:** There's always guys who are like really hot, but then they're like "Oh, I don't eat carbs."

**Justin Garrison:** That are fighting for Autumn?

**Autumn Nash:** Yes! They're like "I don't eat carbs", and I'm like, I picked bread. Okay? Not just picking the bear...

**Justin Garrison:** Do you drink coffee? No? Okay. You're out.

**Autumn Nash:** Like, it's not jut picking the bear, it's picking the carb. And bread. Okay? Like...

**Justin Garrison:** This intro is the furthest from anything we were gonna talk about. I think we should just go over to the interview...

**Autumn Nash:** Okay, go to the interview. I love it so much.

**Justin Garrison:** We'll talk to Matti... And talk to you all after.

**Justin Garrison:** Alright, thank you so much for coming on the show. Matti Ranta, technical oversight committee, member of the Gitea open source projects.

**Matti Ranta:** Yeah. Thanks for having me. Happy to be here.

**Justin Garrison:** So this episode is just gonna be all Git, and it's gonna be fun... What is Gitea?

**Matti Ranta:** Yeah, so Gitea is an open source developer platform, self-hosted. It's a single Go binary, it has Git hosting, code reviews, collaborating on issues, package registry and a CI/CD that is GitHub Actions-compatible. So the same YAML that would work on GitHub will work exactly the same way in our CI/CD.

**Autumn Nash:** So it's basically like open source GitHub.

**Matti Ranta:** Yeah, exactly. That's kind of our official tagline.

**Justin Garrison:** So the tea here isn't like rumors and bad talk, it's just like actual --

**Matti Ranta:** Exactly, it's Git with a cup of tea. Yeah.

**Autumn Nash:** Okay, but can we like spill tea while we're like uploading code?

**Matti Ranta:** You certainly can. You can add in -- in the CI/CD pipelines you can add in secrets, detection, so your tea doesn't get leaked.

**Autumn Nash:** I like it.

**Justin Garrison:** I just wish that there was like a Git Dr. Pepper, if that was like a thing... So along with being this open source -- that was a bad joke. No one even laughed. It's okay.

**Autumn Nash:** Justin doesn't drink coffee, or tea, and he's just... Like, we still love him anyways, but how are you in tech and you don't drink coffee or tea, Justin?

**Justin Garrison:** I get caffeine. It's alright. But back to Gitea. As an open source project, it's available, you can write it yourself, but there's also a Gitea website. And I'm assuming that the full-blown like "Hey, you can just go start using it", right?

**Matti Ranta:** Yeah, so we have our flagship instance at gitea.com. Git with a cup of tea. G-I-T-E-A. I have to spell it out, because sometimes people like to add a second T in there. But yeah, so I'm a one-man shop for just managing the infrastructure for it right now, and I've been doing that for a few years now. And being a flagship instance, we have to make sure it's highly available, and all that fun stuff. And it's gone through like an evolution throughout the timeline. And eventually, we plan on dogfooding all of our repositories. We have most of them on the flagship instance right now, but just one remaining on GitHub.

**Justin Garrison:** \[00:16:06.14\] Okay. So it's hosted over at GitHub, but you can still deploy it over on Gitea. What does that infrastructure look like? What does it look like to run this at some sort of scale? Because I've run Gitea in the past; it's like a single binary. "Oh, look, it's a container. I can run a thing, or \[unintelligible 00:16:19.14\] website." What does it look like to do it at the scale you're doing it for like a hosted flagship?

**Matti Ranta:** Yeah, it actually looks quite a lot similar to running it on a NAS, or a Raspberry Pi, even... Just a little bit more redundancy. When we started off, we had an infrastructure provider that was providing us infrastructure and credits, and we wanted to leverage it, but it was bare metal, so we had to build things up from scratch. And so we were doing a multi-node Kubernetes environment with Ceph for the storage. I think if we would try Kubernetes now, it'd be a different experience, but several years ago we were having to like rotate keys on each node manually, and...

**Justin Garrison:** That's a lot of complexity and a lot of ops work for a one-person infrastructure team.

**Matti Ranta:** Exactly. So we eventually actually just changed it to like a single server, and forgot about stuff entirely. We still get that redundancy with the secondary version, we might say, and just offloading it to the provider over network share. They handle the right version that you're supposed to use now. And it worked great. Single nodes, hardly any need for massive resource requirements... I think it was just a few gigs of RAM, a few cores for that one server. But due to being single node and not really behind a load balancer, if anything happened to that server, it was like --

**Justin Garrison:** It was down, yeah.

**Matti Ranta:** It sucked. It would kind of suck.

**Autumn Nash:** What's your failover whole process like? Because that's a lot of pressure when you're hosting someone else's code, and how they work, and how they can contribute with somebody else. Some websites, if they go down - okay, you can't buy a T-shirt. But if yours goes down, that is major for your customers, because they can't access what they're working on, and they can't work with other people... So how do you navigate that as one person running the infrastructure?

**Matti Ranta:** And actually, just a point of clarification, this is just gitea.com. So we don't have any customers of this site. So there's no paid SLA. There's a managed SaaS that is offered through a company, that's gone through the SOC 2 compliance, and has redundancy, has dedicated instances per customer, and it has all that fun reliability. But yeah, gitea.com - even though we don't have paying customers, it's part of our reputation not to have downtime. And there's no failover, nothing... It was cost-effective, but it wasn't really great, because we did have issues like dealing with denial of service attacks, people just uploading their entire Dropbox, and scooping up all of our space...

**Justin Garrison:** Why in the beginning -- you had a cloud provider or a hosting provider that's like "Here's some metal boxes." Why did you pick Kubernetes and Ceph? Those are fairly complex technologies, that have their own requirements. Why did you go straight to that as like the "Let's go do this side"? Instead of just doing -- like, you're doing single node... Yeah, it was mainly because we (just the royal "we"), it was just kind of planning for scale that we weren't at yet.

There's this fancy new software out of Google, and you can \[unintelligible 00:19:57.25\] scale... It's gonna be great; it's gonna solve all of your problems. And we definitely weren't ready for it at the time. And if we were go to like EKS or GKE, we definitely would be ready for it now. We have a Helm chart that a ton of people install Gitea on their clusters, and the high availability... Just really all the stuff that we were doing manually just handled out of the box now.

\[00:20:28.12\] So with all the downsides of that single node, we ended up switching to Amazon for our provider, where we could do a lot more quote-unquote cloud-native stuff, like using like RDS, throwing up the released artifacts into S3, and using CloudFront for a CDN, to just take off all the load that we would be getting to that single node... And if the node went down, the files would still be available through the CDN, or released artifacts, and being able to like manage things with infrastructure as code, and GitOps, and all that fun stuff.

So all the infrastructure stuff is -- I want to say solved right now. There's some issues around global latency. We're moving to the Eastern US, but there's latency issues in like Australia and Europe for that specific region... And so planning on how to make sure the site is globally distributed, with making sure everyone has like reasonable response time when they're visiting the site... So there's infrastructure planning going into that right now, and it's feeding into the software project planning to be able to do more \[unintelligible 00:21:46.27\] and distributed.

**Justin Garrison:** You mentioned using things like S3 and RDS now. The components of Gitea require, or at least want an external database, some sort of storage for artifacts... But I'm assuming the Git files aren't stored in S3, right? Are those still like on disk somewhere?

**Matti Ranta:** Technically, Gitea doesn't need an external database. You can just use a SQLite file. You don't need -- even a reverse proxy will handle \[unintelligible 00:22:13.08\] cert renewal, and everything. But we have these areas of the software that allow you to kind of like roll with whatever you have. If you don't want to use Redis as a cache, you can use in-memory as a cache. But then if you have more traffic, more users of the site, you can scale everything out to use a proper database - MySQL, Postgres, etc. - and it can only store those released artifacts; avatar uploads, that can go up to S3, but like you said, Git repos themselves have to be stored on disk, because it's extremely sensitive to disk latency... Because you can't just have like git read from S3; you have to like read the PAC file, parse it...

**Justin Garrison:** It's a lot of file reads. It is a lot of file reads.

**Autumn Nash:** And a lot of storage.

**Matti Ranta:** And even like the repo homepage, if you're just browsing the homepage, it's the Ceph files, and then the latest commit. For each files you can see the last time it was updated, what the last commit message for the file was, so you can just have some added context when browsing around the repository. Each one of those isn't -- you don't necessarily get all that information through one Git CLI call... And so having it up in S3 would just be way too slow for anyone to browse the site reasonably, so you have to have it on disk.

And one of the things in the roadmap for Gitea is being able to separate out the repositories to different nodes. Because right now you need one disk, and it reads from that one disk. So instead of just having that one disk, we would be able to have a clustered option. So if you want repo A, you can talk to node A, and read the files on there, and pass it through.

**Justin Garrison:** As like just an external storage server? It's just like "Here, just handle these files"?

**Matti Ranta:** \[00:24:17.28\] Yeah. So you'd be scaling out with additional hosts. And that would reduce some of the latency concerns, because you're still reading all that information from disk, and you need to read just exactly what you need from the Git files and pass it over. So the list of files in the repository, the latest commit message, and pass that over like gRPC or something to the node that wants that information... Instead of having to load the entire PAC file, parse through it and find out all that information. So that's something we're feeding into the software roadmap as well.

**Autumn Nash:** Are you the only maintainer for this project? Or are you just for the infrastructure?

**Matti Ranta:** Just for the gitea.com infrastructure. We have close to 50 community maintainers of the software project, 44,000 GitHub stars, I think maybe 70,000 registered users on gitea.com, with a significant number of repositories...

**Autumn Nash:** Why do people pick you over GitHub? Is like the main, I guess, value prop, the fact that you are the open source version of GitHub, and you're not a corporate entity? Or let's say that I was in the market to switch my repositories from GitHub to Gitea. Are all the git commands generally the same, and using it generally the same? I noticed that you're GitHub Action-compatible.

**Matti Ranta:** Git is completely the same, push, pull, \[unintelligible 00:25:47.02\] and the experience is similar with pull requests. There's some things with our project Kanban boards, where GitHub is introducing their new project interface, as well as implementing AI \[unintelligible 00:26:05.11\] And there is a corporate entity that is supporting the projects, and providing bounties to maintainers, and is paying for the Gitea.com infrastructure. The reason why you would choose us is -- you wouldn't necessarily choose gitea.com, because then you get into the issue of centralization, and that's kind of what we're trying to push away from. We're trying to direct people more to self hosts, to maintain data sovereignty over their codes, and having that single binary being able to run anywhere, on the smallest Raspberry Pi up to - at one point I heard the Cray supercomputer company was running Gitea. Probably not on their mainframes, but definitely interesting that that company was utilizing our software.

**Justin Garrison:** I think that's a really interesting proposition about Gitea as a product is pluggable, as far as like it's a single container that can do all this stuff locally for my house, right? If I'm the only user of it, and I want a web interface and some nice runners or whatever internally at my house, I could do that. And then the scaling aspect of -- it is a monolith in the regard of like you could just do all this stuff by default here, and it has limits to what it can scale. And then once you say "I hit those limits", I say "I need actual database, I want some caching, I want more storage", whatever. You have components that can break out there. But that is very similar to how GitLab works, right? GitLab is a very similar frame, of like -- they by default... I haven't run GitLab for a little while, but I used to, and it has a few extra components that you need up front, but most of the monolith is there... And you're like "Oh, if I want some runners to be external, I can break those out into things." And then GitHub is an enterprise product where you can run that yourself as well. They'll give you VM images. And most of that is self-contained, but that's definitely an enterprise management solution, where it takes a lot more to run a GitHub instance than Gitea, for sure... At least from my experience running all three at some point in my lifetime.

**Autumn Nash:** \[00:28:13.13\] It is interesting that there are different options in how they contrast... Because I think people usually start with GitHub, you know... And there's so much documentation and so many, I guess, draws to get people to start there... But GitLab is its own component, and definitely a contender... But it's just interesting how all three contrast each other, and how you can pick like a very simple form of that, that doesn't really need a lot of overhead knowledge, and just you focus on learning Git. But you can also get to like running your own instance, and everything.

**Justin Garrison:** You said "get" a lot in that sentence. That was great.

**Autumn Nash:** Well, because I think people also don't -- like, when you first start out, you don't realize that GitHub and Git are two different things. So then people get to focus on not the infrastructure instance, but just learning the actual Git that you need to know to do that, right? And then learning the contrast between the different options is a whole other basic knowledge, I guess.

**Justin Garrison:** And I think that the business model here of Gitea and GitHub are extremely different, where every time I've worked with GitHub, they always want you to use the hosted version of GitHub, whether that's a private \[unintelligible 00:29:30.28\] I've never worked at a place that had an up to date GitHub internally. They're always out of date.

**Autumn Nash:** Well, I feel like that's kind of the difference between corporate America and open source. One - they need you to use their product, because if not, it's not cost-efficient to run a product, right? And then the other one, it's usually built out of a need, a want, or wanting to do better, you know... Because if not, why would you volunteer your time to build something, or rebuild -- like, you wouldn't redo the will unless there was a good reason... So I feel like it tracks.

**Justin Garrison:** But just the fact that Gitea really wants you just to go run your own. You make it as simple as possible to "Please just go run it, and own that side of it." And looking even at your product page, there's an enterprise version, there's a hosted version... You don't have to actually maintain the servers for it, but you can. It is a simple enough thing at small scales.

**Autumn Nash:** What was your motivation for wanting people to be able to run their own? Because I think that's the interesting component, right? Everybody is so used to not running their own, and then you're giving this away... What made you feel like that was important to be able to give people access to that ability and to be able to offer that?

**Matti Ranta:** Yeah, definitely. I mean, philosophically, free and open source software is... It just makes sense, I guess. Being able to see the code of the things, and be able to work with it... It's just like when you buy a car, you can make modifications to the engine, and do that. If you own a house, you can like change out the lights that you want. You don't have to pay a subscription for like the type of light bulb, and...

**Justin Garrison:** Not yet. It's 2024... There are some bulbs that do require subscriptions...

**Autumn Nash:** Also, it's wild... Just stuff like the fact that heated seats is becoming something that companies can charge after you bought the car... Who knows at this point...?

**Matti Ranta:** \[00:31:43.14\] Exactly, yeah. It's just like being able to actually see what you're running, and have full control over that. So that's why I went in with the open source mindset, and being involved in other open source projects as well, and contributing for quite a long time... It just made sense. And previously working in an enterprise... Even before Microsoft bought GitHub we were prevented from uploading stuff to GitHub, because you just can't. You need like a relationship, all that fun stuff. And I'm like "Okay, well, I'm familiar with that experience. How can I have that experience in my day to day?" GitLab is the most prominent example, and I tried to run that, and I didn't have the computational resources to be able to run it. I'm like "Okay, well, there has to be something else." And at that time Gitea was just started. I found it and I was just like "This is basically what I need." So I used it, and then I'm like "Well, there's some things that I'm running into", and so I contributed some bug fixes, and then it's just like "Okay, well, now there's some functionality that I just kept on contributing", and eventually became a maintainer, and then project lead, and now I'm a member of the technical oversight committee. It has been eight years working on Gitea, and... Yeah.

**Justin Garrison:** And still, the main thing that you have that's different is you don't want people to use gitea.com. It's there, it's available, but really, you want people to go run it themselves, or have a hosted version of some sort... But the flagship version is there to show people how it can work, right? It's not necessarily like -- I shouldn't rely on production in this environment.

**Matti Ranta:** No, you can definitely rely on this. We do have limitations on users who sign up right now, but we're looking at opening it up even more, because -- there's several indie games that are building on it because you need a ton of storage for indie game. You have your video game assets, and they don't necessarily have that in any way that they can open up with the people that they're collaborating with... So gitea.com has -- our limits are kind of friendlier than github.com and gitlab.com.

**Autumn Nash:** Can you explain the difference in your limits between you and GitHub and GitLab?

**Matti Ranta:** Yeah, so with video game development you don't want to store binary files in Git, because when you try to version those, it basically just stores a copy every time you make a change... Which even if it's just like you're storing a Word documents, which - documents are technically ZIPs. If you change a word, that changes the entire binary blob, and then you get a copy of the file as your next commit. And so you've just doubled your storage just for that one file. And folks that do games, they have a ton of binary assets for the artwork, and cutscenes, with like video files, and it just can grow and grow and grow. And for GitLab and GitHub, they have hard limits on the size of Git LFS storage that you can have. Git LFS is a way of uploading those large binary files off into something --

**Justin Garrison:** It stands for Large File System, or Large File Storage...

**Matti Ranta:** Yeah, Large File Storage.

**Autumn Nash:** It is both brilliant and very picky. It can either -- it makes your life both easier, and so painful, but it serves a purpose, for sure.

**Matti Ranta:** Yeah. And it's great, because just like how with -- this is a terrible example, but I'm gonna use it anyway... With NFTs on the blockchain - you're not even actually storing an image on the blockchain. You're storing a reference pointer to somewhere else, to a URL. And that's what Git LFS does, is you're just storing that pointer to wherever you're actually hosting the file. So we can throw those files into S3, or an alternative, and...

**Autumn Nash:** \[00:36:02.07\] When you're building huge binaries, it makes your life so much -- it makes things possible that might not have been, but it is very painful.

**Justin Garrison:** Having come from or worked at a studio that made a lot of assets... All of the asset revision systems at like animation studios and game studios - it's separate. You store it out of Git as much as you can. You have a separate thing, that's like "We need to version a bunch of assets, and we're going to make a petabyte of information based on these assets for every version", because we need to be able to reference them and go back to them if you're rendering scenes, or you need to like say "Oh, what changed here?", because now the actual like graph on top of it looks different, or doesn't render right. We have to go back and see what we changed to figure that stuff out. And all that stuff you do not want in Git.

**Autumn Nash:** See, when you're building a language, you need Git LFS, because you need to store like the binaries. But also, you don't want to run a whole binary file every time you upload and like commit, and everything... So it is very important.

**Justin Garrison:** I was trying to store repos, like package repos in Git LFS... It was a bad idea. It just -- yeah...

**Autumn Nash:** It's one of those... It's a necessary evil when you need it, but if you don't need it, don't use it.

**Matti Ranta:** And so our limitations are - like, we have soft limitations on like LFS and our repo sizes. Eventually, when we implement -- if you want to host on gitea.com, instead of getting a managed instance yourself, we'll have like more reset quotas and whatnot.... But right now, it's a lot more friendlier and more relaxed. And GitHub, with 70 million people - we have lik maybe 70,000 people on our site. So it's a scale of difference. Understandably, if you're GitHub you have to be firm with those limits.

**Justin Garrison:** I mean, more people will abuse it, for sure, once you're hitting these limits. If you give someone anything for free, someone's gonna find a way to abuse it.

**Autumn Nash:** Not just that, but it's wild the way people have abused compute power and storage in weird ways... The most interesting thing about being a developer is making a product and then seeing the ridiculous hoodrat stuff that customers will do with whatever you make... You're just like "I didn't even think of that, but okay..." It's amazing.

**Matti Ranta:** Yeah, so we're starting to deal with issues of like spam, more heavily involved DDoS, and file hosting, and virus and command control stuff on our site... We've had to build -- I've built some automation around like detections... Because a lot of this \[unintelligible 00:38:54.29\] is pretty easily detectable. There's patterns, and you can check out IP ranges against linked lists, and everything, to be like "Hey, this is kind of suspicious." And everything \[unintelligible 00:39:06.25\] completely lock people automatically. But a lot of it is just from the software itself. We'll send web hooks to our detection system on every comment, and feed it into our engine to be like "Hey, this is kind of weird. There's lots of links in here." Or we've looked at the link and the domain is like a malware link... Then we'll like restrict that account, send a ping, and "Maybe take a look at this", and... They won't be able to like post anymore until it gets reviewed.

\[00:39:49.20\] And \[unintelligible 00:39:49.11\] web hook file to get scanned, yes/no, "Maybe somebody should take a look at it." But some stuff that we're discovering is being able to like put onto the roadmap of Gitea itself - detecting username or bio changes. Right now we have database triggers to be able to send "Hey, this has been updated" to our engine. But we're using our experience on Gitea.com to feed into the software itself. Instead of having to have the trigger in the database \[unintelligible 00:40:22.26\] maybe build out web hooks for user changes. So if somebody changes their biography, their URL, it can get sent somewhere.

**Justin Garrison:** It's interesting how those things evolve when and trust your customers, or you work with someone that -- hey, no, I know this person; they worked down the hall, or where they exist in Slack... Versus strangers on the internet, which are probably not real people, and control a device. It's like, you have to build in all these protections as things get popular, but also it's just, you don't know where people are coming from. It's a different problem of scale, right? Because you can have a private version of Gitea, and you can scale your company to 10,000 users, and you don't have any of those problems, because they're all people that have their employees at the company, and they have contracts, and all that stuff that's just like "Oh, I can enforce this, because I know the people", versus the internet; this is like "We run a thing for 70,000 people", or 70,000 accounts.

**Autumn Nash:** I think even if you're running something internally, whether you can go up two floors and be like "Dude!" Or if somebody works in another country... It's still different, depending on how big of the scale. But I definitely think something for customers is a whole other level. Like I said, also, it's weird to me the way people see software, and they're like "I'm gonna use it for this odd thing." It could be a legitimate use, but it's just something that you may have never thought of, and it's such a wild edge case that then you then have to go back to the drawing board and rethink of how to make sure it doesn't break everything.

**Justin Garrison:** Actually, one of the questions I wanted to ask was was there anything in Gitea's feature set - over eight years you've been running it - that you had to rethink your infrastructure... Like, "Oh, actually, LFS support landed. How are we going to do that?" What were any of the key features that made you rethink what you were doing?

**Matti Ranta:** Definitely, LFS was the first big one, because it was just writing to disk right away. And immediately that was -- you can see our repo sizes ballooning, and not being able to scale. And so being able to offload that onto S3 was a savior... Because immediately, those huge files, you can just forget about it on disk; you don't need to worry about the latency of Git reading the repository, because the files are just like pointers. All the commit information is still on disk, it's just when you're loading the file, just call S3 and say "Hey, can I have this file?" and then it will load up.

**Autumn Nash:** That's actually really smart, to put that in S3, because it's already highly available.

**Matti Ranta:** Exactly. And then it's LFS, then packages... One of our German maintainers built out our package skeleton of being able to add on support for a bunch of new packages... But he initially \[unintelligible 00:43:22.28\] around like 20 of them. First was like Docker, so you can store Docker in it. Maven, Npm, \[unintelligible 00:43:34.16\] and just like a bunch. And again, huge file sizes that they were like pushing a Docker image for each commit, and just the file size can balloon... And so just pushing up to S3 again made sense.

\[00:43:56.18\] And finally, about a year ago was when we implemented our CI/CD, and being able to think about how we were going to implement that in terms of like if you're on a single Node, versus a huge instance of being able to take into account. And luckily, I and a few other maintainers - we are either maintainers or contributors to several other CI/CD systems. So we've been able to leverage our experience using those, and feeding it back into Gitea... And also, for the first six years before we implemented CI/CD in Gitea we actually just ran a drone.io instance for our CI/CD. And the lovely folks at Equinix Metal sponsored the servers for that for quite some time, including the \[unintelligible 00:44:52.13\] program, so we could test our software on ARM. And we got obscenely powerful servers from Equinix. Just all of the cores, all of the RAM.

**Justin Garrison:** Those are Ampere servers at Equinix, and they're super-fun. I just had a chance to do some streams with them, testing my software at work, and... Yeah, it's just like "Oh, I need 256 cores." "Okay." I don't know what I'm gonna do with these, but it's very powerful.

**Autumn Nash:** You mentioned that you contributed to other open source projects. What other open source projects do

you contribute to?

**Matti Ranta:** Of course, yeah. I've contributed to drone.io, the CI/CD. There's a fork of it called Woodpecker that I've also contributed to. I maintain several Golang libraries for automation. Probably the biggest thing outside of Gitea that I do is something called xgo, that lets you cross-compile Golang binaries on two different platforms. Normally, Go lets you do this with just like changing a few environment variables, and like "Hey, this is like targeting Windows now." And just say "go build target windows." Unless you're using cgo, which is pretty common for the SQLite library for Golang; it's using cgo, so you can't use all those just fun tricks of the Go command line just to build a binary for -- if you're on Linux, building it for Windows, or for Mac, and vice-versa. So xgo as a project was originally created for the Ethereum Go project, but it went by the wayside; the maintainer wasn't able to support it, so I picked it up, I added support for different targets... PowerPC, FreeBSD, Linux/PowerPC, FreeBSD/AMD64. Because it's not just the OS, it's the CPU architecture you need to target as well. And built in automations to be able to -- when a new Go version is released, then a new version is taken and built. Because the way that it works is you're actually just distributing the headers of the development library. So you'll have the kernel headers, the GCC stuff for Multilib, and whatnot. And so it's a great, big, beefy binary or Docker container that takes a ton of time to build... So I just have a cron job that checks go.dev whenever a new version of Go is out, builds it, pushes it, and...

**Justin Garrison:** I need a link. I was trying to look it up. I've found one that was archived... But literally, I was trying to rebuild some software for i686, to run on an emulator that runs on my iPad. But yeah, that architecture is -- what they emulate there is not what I normally have on my desktop, and I think I was getting hung up on the cgo stuff.

\[00:47:55.18\] The decision you have for the CI/CD, when you implemented that, and being compatible with GitHub Actions - did that impact your architecture or how you implemented it? Because it's very different than Drone, and different than GitLab and the other ones. So were you basically rebuilding or recreating GitHub Actions for your own infrastructure? Or were you parsing that and translating it to something else?

**Matti Ranta:** Yeah, so there's a few components to our Gitea actions. One of the biggest components is already solved, and it's using the Act project, which is like just being able to execute GitHub Actions on your command line. It will execute it all in a Docker container locally. But what we wanted to do was we wanted to be able to actually \[unintelligible 00:48:41.27\] down the project, run it locally. We built that connection between the server and runner. And we have a \[00:48:56.16\] and then be able to connect it to the server to be able to pull for jobs, and send back the logs to this server.

So there were some decisions architecturally that we had to make, like how it was built, because with Drone, previous to version 2, it used gRPC on a different port. And Woodpecker does the same. And even like sending updates to the user, they did server-side events, which is deprecated in the browsers, and don't play well with enterprise firewalls sometimes... It's a whole thing. So we needed to take all those lessons learned and feed them into Gitea.

So we're still doing gRPC communication between the server and runner, but we're feeding it through our router itself, instead of having a different listener on a different port. It's just talking through our Chi router, to be able to call those actions, and having those long-lived connections with the runner to be able to -- instead of opening up a new connection and polling for jobs.

**Justin Garrison:** I run a router behind my firewall; it connects to my Gitea instance over gRPC, and my runner is basically running the Act command as a daemon, listening for those jobs \[unintelligible 00:50:18.27\] the Act runner is the actual piece that does the GitHub Action parsing, and say like "Okay, I know how to run this now in a container."

**Matti Ranta:** Exactly, yeah. And we do have to have some on the server as well, because we need to know in advance which actions to call... Because if it's like a push \[unintelligible 00:50:37.29\] comment, we need to put that into our pipeline of like "Hey, here's this new task that a runner needs to pick up." And then the runner will pick it up, parse the YAML of like "Okay, what do I actually need to do? What containers do I need to pull down to build this? What action files?" and all that fun stuff, and then send it back.

**Justin Garrison:** I just want to go all the way back to the beginning here, of wrapping this up with like -- Gitea started as this very simple Git server web interface for Git, basically. I can push things to a website, and then it stores files on disk. That grew into having a lot of other features, and you wanted this gitea.com as a website for the flagship. So you started off with Kubernetes and Ceph as the storage backend, and you're like "This is kind of terrible for what we're trying to do, for the people we have to manage it", and the amount of moving parts you have to basically have a website that stores some files. So then you switched over to like this single node instance, which is like "Okay, we don't actually have HA, but we can vertically scale this thing, no problem." The simplicity of Gitea is what's giving you those benefits, again, of saying like "Hey, it's a web interface with a file backend" and some extra features on the side that are kind of optional for a lot it. But then adding things like package management, and LFS, and all of these other pieces kind of rules that out, and just the HA ability. Because you still are encouraging people, "Go run this yourself." And at that point, you have EC2 with ELB and S3, basically; it's just like the core fundamentals of "Here's what we get in this cloud environment." And I'm assuming that's just like a load balancer with an autoscaling group, right? For like the Gitea instances, more or less.

**Matti Ranta:** \[00:52:19.13\] Yeah, pretty much. Yeah.

**Justin Garrison:** So you have some autoscaling groups that are just like "Hey, these need to autoscale if we have too many requests, or we're hitting a limit, or something." Cycle them out, do those upgrades, all that stuff just happens generally as an autoscaling group can do. And then you also get the benefits of like "Oh, we can define some of this in reusable code", TerraForm, whatever, and say "Oh, we can spin it up, and test it, and do these other things." And you're still, this entire time, encouraging people, like "Go run this yourself. We've run the gamut of where you should run this, and depending on how much experience you have in Kubernetes, or how big your team is, you might want to do the Helm chart. If you just want to have the web interface with the file system, go run our container as a standalone sort of thing, and scale it up as needed." Or if you want it in a cloud environment as a private hosted thing, you can subscribe to it, but also you could do the autoscaling group and EC2 with ELB files, right? That's like the entire spread; you've done them all with the main website, and now you can be very informed about how customers or users of the software should use it. Like "Hey, what scale are you at? What do you need? Here's some things you might want to think about."

**Matti Ranta:** And then also another important part of the flagship is being able to dogfood our own project. We have most of our stuff there. One remaining thing is just, with eight years of history, 30,000 issues and pull requests, and a countless number of comments, and reactions, and labels, and just getting that metadata to migrate over is we completed a migration for another open source project \[unintelligible 00:54:04.24\] to Gitea, and they just hit their 20th year... And previously, they were on a different system that didn't use the pull request issue mindset. It's the mailing list patch mindset.

**Justin Garrison:** Yeah, yeah. I mean, the metadata in process is the real tech debt. Those are the things that are really actually hard to migrate. A language or a framework or whatever - yeah, you've gotta invest the time. But if you're in a different mindset of how you manage the software and release the software, that's the stuff that takes a long time to migrate.

**Matti Ranta:** Yeah. And dogfooding is also incredibly important to like even see not just like maintaining that infrastructure, but using it on a day to day, and feeding back into the development process as well.

**Justin Garrison:** Well, thanks for bringing us down that trip of what Gitea has gone through, and kind of what it's used for... Because that's fascinating, just to see -- as someone who's run a couple of these things internally, I've never had to scale them beyond a couple hundred users, and in most cases that's like "You could do the defaults. It's pretty fun." But it's cool seeing scaling literally from nothing, of like "We just have some servers", up to where you're at right now, with scaling to tens of thousands of users. It's really cool.

**Matti Ranta:** Thanks. Yeah.

**Autumn Nash:** Also, it's hard to store your own code... So I can't imagine doing all of the planning to store other people's code, and not knowing the constraints that you're going to be under. That's a lot of planning, and design, and figuring out...

**Justin Garrison:** Yeah, once you're dependent on your own software, your requirements change.

**Autumn Nash:** Yes. I can't even imagine. It'll be a wild ride. You will learn a lot, for sure.

**Matti Ranta:** Yeah. And a big shout out to all the people who've given me advice and helped out with with this infrastructure. Because yeah, it's -- like, I'm typing in commands, but there's a ton of people in our community that are giving feedback, and like "Hey, this is a pattern that I've used before", and all that. And so it's like -- yeah. I'm typing in the commands, but it's definitely not just me. There's a ton of people that this would not be possible without.

**Autumn Nash:** That's awesome. Community is the best part of open source.

**Justin Garrison:** Thank you so much, Matti, for coming on and explaining it. We will have links to some of the stuff we talked about in the show notes, and we'll talk to you again soon.

**Matti Ranta:** Awesom. Thanks so much.

**Break**: \[00:56:35.10\]

**Justin Garrison:** Thank you so much, Matti, for coming on the show and talking to us all about Gitea, and the infrastructure behind it, and kind of the challenges you faced throughout running that. That's really fascinating just to see what a public website -- that's what this podcast is all about. I want to talk to people that run things on the internet, and face challenges that we probably didn't think of when I run it at home, or I spun it up on my computer, whatever. That's the fun stuff to me.

**Autumn Nash:** Also, it's really interesting just the idea of -- things are kind of getting weird right now, with what happens when other people host your things, or how we were saying with like cars all of a sudden needing... Like, you're paying monthly for heated seats, or just - I don't know, the world's in a weird place, so I just wonder if one day Gitea may be an option that we didn't know that we needed... So it's interesting.

**Justin Garrison:** You're really hung up on those heated seats, aren't you?

**Autumn Nash:** Dude, how does that happen? How do you own a car and then they're like "Oh, by the way..." I bought my car, and then I had a Toyota app, and it was like free... And then all of a sudden they were like "You have to pay $12 a month to start your car." And I was like "I thought once you bought a self-starter, you just had it." And now you have to pay monthly for --

**Justin Garrison:** I bought my first new car in 2020, it was a Subaru... And I like it. But yeah, there was a subscription to be able to start the car remotely, and it had an app, yeah.

**Autumn Nash:** That's wild to me. I feel like if they make it harder and harder to be financially smart, because you can't just buy things and pay it off, because now they're like --

**Justin Garrison:** You can't own things, right?

**Autumn Nash:** Yeah.

**Justin Garrison:** There's no ownership. You're like "I have this weird partnership with my car company."

**Autumn Nash:** Yes. Like, I get that you have to maintain an app and stuff and all that good stuff, but it is wild, the way that they've changed --

**Justin Garrison:** But we used to have remote starters on cars.

**Autumn Nash:** That's what I'm saying.

**Justin Garrison:** I installed remote starters on cars back in the day, and it was just a button on my remote, and it would start the car. And you don't have to have a web service.

**Autumn Nash:** Yeah. You pay like $1,000 and you get this remote key, and then you start your car. And then also, do you know how much it sucks when your Wi-Fi is messed up or something, and you can't start your car, and then you have to like switch back to -- that's wild.

**Justin Garrison:** My first four cars cost $1,000, each one. I would buy -- it was $1,000, I would fix it up, I would sell it for $1,000, and I'd buy the next one. And I did that for four cars, and it was great.

**Autumn Nash:** The price of cars now is just wild. But I think that all this is gonna change the way that we have finances, too. Back in the day when I started art school you would buy a version of Adobe Photoshop, usually with like student loans or whatever, your first money, and then you'd use it until you had a feature you needed now, another one. Or your computer completely died, and you had to get a new computer, so you needed a new license. But now you have to pay Adobe Photoshop every month. And artists already don't make a lot of money... You know what I mean? And then now, it's just wild. We're switching how people pay and own --

**Justin Garrison:** Hey, if you want to own some software, check out Gitea, right? I mean that was the whole -- that's like literally this model.

**Autumn Nash:** Yeah, that's what I'm saying. No, but it was almost a solution that I know we needed. You never know how that's going to -- like, maybe that makes things better, or I don't know. Something that we didn't know we needed.

**Justin Garrison:** There is definitely value in knowing what is good enough, right? Because you don't need Photoshop, whatever version. Like, I have the old Photoshop, and I would use that one. And it was good enough for my skill level and what I needed out of the tool.

**Autumn Nash:** Also it's wild that you can get Photoshop on your phone now, for free.

**Justin Garrison:** Sure. I bought Procreate on my iPad. I love Procreate. It's a great drawing app, and I paid the $20 for it, and I own it.

**Autumn Nash:** And they have like Canva, too. So it's just wild -- I do think that when some things get kind of crappy for customers, it's always a good time for innovation. Another company will pop up and be a solution for a problem. So I guess there's that too, but it's just... It's wild. You can't really pay things off anymore.

**Justin Garrison:** Yup. Life costs money. Anyway...

**Autumn Nash:** So much money...!

**Justin Garrison:** So our outro... I wanted to talk a little bit about Git again, because Git is just central to a lot of things that we do... And I have been using this packaged version of all of these scripts called Git Extras. I've been using it for more than a decade. I don't remember when I've found it, but I've been using it forever. And it gives you a bunch of like helpful scripts... Because a lot people know you can make an alias for Git, and like do short commands of just like "Oh, does the Git add, or git commit with a message?", or whatever. You could do those things as aliases, but there's also git commands. And anything in your path that has git- some command, if it's executable, can be run as a Git subcommand. And that's how you can extend Git.

\[01:06:13.18\] Well, this Git Extras repo and package is all just a bunch of community-driven common commands that you have to do. And it's just like "Oh, we just wanna make a subcommand that anyone can rely on, and it works the same way", and Git Extras is that way of packaging it.

And the first one that I started using was - they have a git pr. And the pr command will fetch a pull request from an upstream repo, and then check it out locally in a branch and track it. And usually, that's like three commands. It's like "Oh, I've gotta go find what number it is, and then pull it down..." And if it's on my branch or someone else's branch, I have to know which one it is... And this git pr is just like git pr, the number of the PR, and then what branch it's from. So if it's your branch, you don't need to put one -- or I guess the upstream. Or you can say "I want the PR from that upstream", and it will just pull it down and check it out, and you can run it. And I love that command, because it's all the things that I used to do manually. I was like "Oh, this is great. I want to keep running this." So I installed the package, the Git Extras.

The other one that I like... There's a few of them. I'm just gonna go over them, because I've been using it so long, and I'm just going to point people to it. One I used to use a lot was git standup. It was the standup subcommand, which is you say your name, so like git standup \[unintelligible 01:07:22.00\] and how many days. So I'm like "Oh, our standup's once a week", I can do -d7. I can say "Oh, what did I do in the code over the last seven days?" Because I would forget that. It's a great little -- and it just gives you your commits. It's just like "What exactly did you do over some frame--" Or you could do it for someone else, like "Oh, what did Autumn do for the last seven days?"

You can just go run this and say "These are the commits that landed." It's not necessarily all the work you did, but it reminds you of "I was working on this feature", or "This reminded me of something else I did." So I really enjoyed the standup command. Pr's the one I use all the time.

Git undo... If you want to just undo the last git commit -- like, how many times have I wanted to do that? I'm like "Oh, it's head, with a carrot" and like "Oh, I need three commits ago", you just do git undo 3. And it does that command for you as just -- it's more of like an alias, because it's a one command thing... But it'll undo those commands and put you back at the head that you want to be at.

It is easier to use than the syntax that I always have to look up... So I use undo more often. But there's a bunch of other ones in here... There's stuff that I would have never thought of or wanted to use, like git scp, where you can literally clone your local state of Git into another place without doing this whole Git merge push sort of thing. It's just like "Just push the files over to some other location, another server. Just copy them there."

Get summary is kind of fun, because it just looks at all the history of the commit messages. It says how many commits are there, who's committed the most... I did it on one of our repos for work, and one person has like 40% of the commits in this repo. And it was like "Yeah, they do a lot of work on this repo", and that makes sense. But it shows you like how long it's been around, when the last release was created, all that sort of stuff in the summary.

\[01:09:06.05\] What was the other one I was looking at...? Setup. That was the one git setup is like a git init, and then a git add, and a git commit. All those three commands. If you're in a folder that has files you're already starting to work on, and you're like "I need this to be a Git repo", you can just type git setup, and it will automatically do that init, add, and then commit. Three steps to be like "You're in a Git repo now." And all of the files that were in the Git repo are part of the first commit, and you don't have to go through those things.

So I like it. It's just a collection of scripts. You can brew-install it as Git Extras. Again, I've been using it for such a long time... I occasionally -- like, probably once a year I have to go back and look at it, because there's going to be more commands that get added, because it's just open source, and you can PR your favorite subcommand...

**Autumn Nash:** I was gonna say, can you open-source, like contribute to it?

**Justin Garrison:** Yup. They do take contributions. A lot of them will be like features that I've seen, where it's like "Oh, I wanted this one thing that works different than what you were doing before." There was another one... Delete merged branches is a great one. It was like "I need to clean up a Git repo." And it's a delete-merge-branches, and they'll just like find all of the branches that have already been merged upstream, and then it deletes them from your local repo. So you're like "I don't need to see all these branches anymore, because we already merged those."

**Autumn Nash:** That makes sense.

**Justin Garrison:** Yeah. So a bunch of like helpful stuff like that, which are usually small-ish scripts, like maybe a handful of commands that are Git-related... You can go to the top of the repo, you can do stuff... But you can use these scripts as other automation, where it's like "Give me--" I have aliases for a lot of stuff. I still use the aliases. But these commands are also helpful for various other things, and I really enjoy them... So I wanted to share.

**Autumn Nash:** That's pretty cool.

**Justin Garrison:** Yeah. Because they're just -- they're things that make your day a little better when you're like "Oh, let's install this one and try these out." And so yeah, I wanted to throw that out there, because this whole episode has been Git, and it's been fun.

**Autumn Nash:** I really think that it's amazing... At first in my career -- not my career. When I was in college. I was a little scared of Git. But once you start using it and stuff, it's amazing the crazy things you can do with Git.

**Justin Garrison:** You definitely become familiar with enough of Git that you're like -- again, it's your skill level. My Photoshop level and my Git skill level are like the bottom 30%, 40% of everything that it does. I just don't need most of it. But the things that I know and I'm familiar with, I can work my way through that. And if I need to, I could just blow away the repo and start over, and then get back to a state where I'm like "Oh, I'm just gonna copy these five files that I needed."

**Autumn Nash:** Yeah. Sometimes you have to just like throw it all away and start over.

**Justin Garrison:** Thank you, everyone, for listening to the show, and we still enjoy your feedback. If you have people and topics that you want to have on the show, feel free to email us, shipit \[at\] changelog.com, and we will talk to you all next week.

**Autumn Nash:** Also help me bully Justin into coffee.
