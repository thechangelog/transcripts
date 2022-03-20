**Gerhard Lazu:** So it's been almost a decade since I deployed any Rails apps, and when I heard about Kuby-- thank you, Cameron... Pronouncing it sometimes was difficult. I kept calling it "cubby". I don't know why, but it sounded right. So Kuby, an easy way to deploy Rails apps on Docker and Kubernetes. I really wanted to speak to you, so welcome to Ship It, Cameron.

**Cameron Dutro:** Well, thank you so much, Gerhard. It's really an honor and a pleasure to be here.

**Gerhard Lazu:** So you are actually a listener, and I think one of the listeners with the most amazing attention to detail, because when I changed the way I pronounce my surname, you picked up on it instantly. I couldn't believe that.

**Cameron Dutro:** Yeah, thank you for saying that. It's funny that you say that though. Actually, my wife would say that I have a mind for detail for certain things, and for other things, a complete lack of attention to detail. And so she'd be quick to point out that I forget things all the time, especially when it comes to our kids. She's a very detail-oriented person, so compared to her, I'm in the minor leagues here. But one thing that I have always really enjoyed is language. I love language, and I was actually -- I worked for Twitter for a number of years on the internationalization team. We worked on the Twitter translation center, and made sure that all of our apps and websites and things were translated into -- I think at the time I left we were up to like 70 different languages. And I also have dabbled in a couple languages in the past, and I just find them really interesting.

\[04:19\] And so when I heard that you changed the pronunciation of your name, I was like, "Oh." I just noticed it right away, because I had in the past listened to it and thought, "Huh, I wonder what the origin of that name is. I wonder if it was potentially spelled with different characters at some point in its existence." And then when you pronounced it differently, that made me think totally differently about it. So that's why I tweeted at you and I was like, "Oh my gosh, is that another pronunciation? Another valid, another different pronunciation of that name?" And yeah, I just thought that that was very interesting that it changed.

**Gerhard Lazu:** It was very interesting. It was associated with a live event, I have to say. I'm going to mention this... It's on Twitter as well, so you may have already seen this. If you followed that conversation as a listener, when my father passed away, I wanted to adopt the pronunciation that he used to use in his memory, and it was around the same time. So that's why that happened. Something big has to happen in someone's life, I think, for them to change the way they pronounce their name, and that's what it was for me.

**Cameron Dutro:** For sure. Well, I'm sorry to hear about your dad.

**Gerhard Lazu:** Thank you. So why Kuby?

**Cameron Dutro:** Why Kuby? Okay. Well, I think it might be better to start at the beginning for this story. So Kuby came out of, or was born out of a desire to use Docker and Kubernetes to deploy Rails apps. But that's actually kind of only the second part of the story. The first part of the already happened back when I listened to a podcast from the Ruby Rogues, which is a podcast that's been going on for a long time in the Rails and the Ruby communities, hosted by Charles Max Wood. And I think for almost 10, maybe even more than 10 years now - they just had like their 500th episode a couple of weeks ago... And I've been a long-time listener of that show.

I'll have to dig up the exact episode number, but there was an episode I think in the three hundreds with someone named Stefan Wintermeyer. And he asked a really important question, that stuck with me for a long time, which is why does Rails not have active deployment? He called it active deployment. And for those that are not in the know about this, Rails features a bunch of micro frameworks within it. So it itself is a larger macro framework, but within it, there are frameworks, like Active Record for interacting with the database, Active Job for running background jobs, Active Storage for storing files in stores like S3, or Azure's object store...

And he asked that question because he had reached a point, and I think he sees a lot of -- he had mentioned actually in the show that for a lot of the customers he works with, he does a lot of consulting, and one of the things that he had seen happen a number of times was that people would be working on their apps, and the deployment experience was wonderful, they were writing apps, getting all the features that they wanted working, and it was so easy... And then they reached the point where they wanted to deploy it somewhere, and Rails just doesn't have any answer for that at all. There's just nothing. There's no Rails guide. So if you've heard of the Rails guides, they're kind of these very nice, well written resources for doing everything you want to do with Rails pretty much, but there's no guide for deployment.

So what ends up happening to beginners a lot is they just kind of give up at that step, or they use Heroku. And Heroku is a wonderful product, and I would not ever say anything bad about Heroku, especially their free tier. You can deploy an app with their free tier and pay nothing for it. It just runs on their infrastructure perfectly well. They stand up a database for you. It's really turnkey. You could also use Render, and you could get really crazy and use AWS or Azure or something... These are for side projects, I would say. And then for big companies, of course, they're going to use something big, like AWS. But there's no sort of one true way of doing it, which is very un- Rails like.

\[07:58\] In Rails, there's an answer for everything, pretty much. And the community and the core team have really pushed in that direction since 2006 when it first came out. But for some reason, no attention was ever given to deployment. And so I used that idea as a springboard for Kuby. I lived that kind of role around in my head for a couple years, and then I was using Kubernetes and Docker at work, and I knew nothing about it at the time, but some co-workers were trying to get us off of our very bespoke Capistrano setup. We had used Capistrano for a number of years before that.

**Gerhard Lazu:** So what was work in this context? When you say work, what was work then?

**Cameron Dutro:** Yeah, I was working at Lumos labs, the makers of Lumosity, if you've ever played the brain games. And we had a large Rails monolith at the time, and still do, I think. They still do. And they were working on migrating us to Kubernetes. And we had originally started with ECS. They actually had migrated us from Capistrano to ECS. And then we were only on ECS for maybe a couple of months before a new hire of ours decided -- he had used Kubernetes before, and he decided he wanted to migrate us to Kubernetes. And I was on the platform team at the time, and he was on the production engineering team. And we sat two desks away from each other and I got to see and watch all the things that he was doing and his team was doing.

And Kubernetes just absolutely blew me away. I was so impressed with it. And yes, there's a lot of configuration, of course. It's not as if it's easy to learn, but I had a front-row seat to all that going on at the company. And so I thought to myself, those two ideas, the idea of Rails needing active deployment, and the idea of using Kubernetes to run Rails apps were both in my brain when I had started thinking about, what if I did this? What if I started to -- I somehow wrapped Kubernetes and Docker up into some easy-to-use gem that then any Rails dev could use to deploy their application.

**Gerhard Lazu:** Sorry, you mentioned Docker. Why Docker?

**Cameron Dutro:** Well, one of the big reasons for Docker is because Kubernetes runs Docker images or it runs images built with any OCI. Is OCI the right word? Any builder system.

**Gerhard Lazu:** Yeah, open container images. Yeah. That was like one of the standards which came out of it.

**Cameron Dutro:** Right.

**Gerhard Lazu:** Okay, so you needed a container image for the Rails app, and you were using Docker. When you say wrapping it, you mean you were wrapping the commands, the Docker commands in order to produce a container image--

**Cameron Dutro:** Correct.

**Gerhard Lazu:** ...so it would know what to run and how to run it within Docker, but the goal was to produce that artifact, which is the image that a Kubernetes cluster could run.

**Cameron Dutro:** That's right. Exactly.

**Gerhard Lazu:** Got it.

**Cameron Dutro:** Yes. So there's really two steps. There's the build the Docker image step, and that in and of itself is pretty complicated, I think, depending on all the dependencies you have etc. But once you've got that artifact, then deploying that to Kubernetes would also be wrapped up. So there was the two different phases of build and then deploy. So that was the genesis of the project.

And the first step actually was creating this thing called KubeDSL, which is a separate gem. And KubeDSL is just a way to define Kubernetes resources in Ruby code. So think about Pulumi. It's similar to Pulumi. And I didn't even know that Pulumi existed at the time, but to me it was like, "I need some kind of way to declaratively build or to even build up and code these resources, so that then I can like serialize them to YAML or JSON, and then send them to Kubernetes." That's where it started. And then all the other parts of the project sort of spiraled out from that starting point.

**Gerhard Lazu:** So when was this? When did you start KubeDSL?

**Cameron Dutro:** I think that was in 2018.

**Gerhard Lazu:** Okay. So that was the beginning of Kuby before Kuby was even a thing, right? The idea was there, but you didn't have a name, you didn't have all the packaging. So the first step was KubeDSL. And what happened afterwards?

**Cameron Dutro:** \[11:50\] Let's see... I'm trying to think. I think the next step was writing the Docker portion of Kuby. So Kuby has a number of gems in its ecosystem, because it supports a plugin system. One of the gems -- the gem is like the kernel, if you will, to all of those things, and it's called kuby-core. And kuby-core contains the Docker building portion entirely. So that was the first step or the second step, I guess. And the idea was that I wanted -- I took, I think, my dad's construction company website, which I built for him in 2008 as a PHP project, and then redid in like 2014 as a Rails app, and I used that as a test bed to see if I could bundle... Because I wanted something that was semi-real. His website doesn't get very much traffic, especially since he's basically retired now, so it really doesn't get any traffic now. But I wanted to see what I could do in a semi-real app.

And so a lot of that initial work was just lots of trial and error, like what needs to happen in -- I mean, I knew the basic steps, like we need to have Ruby in this image, and we need to have all of the gem dependencies usually pulled in via Bundler, and we needed a database driver, and we needed to run a web server as the last CMD directive in the Docker file, and all of that stuff. So I worked it out as a series of phases. So there's a setup phase, which is the from Ruby 3.1.0 or whatever; that's the from directive at the beginning, and then there's the bundler phase, and the yarn phase for JavaScript dependencies, a copy phase for copying all the code into the image, and then a web server phase. So all of those things, they're almost like middleware; if you've ever used Rails middleware, you can hook them up in a certain order, and then you can say, "I want to insert a piece of custom middleware before this one", and then it applies them all to the Docker file in order.

So that was the first step. And that actually, I was surprised how smoothly that went, just because I'd never done this kind of thing before in Ruby. So just coordinating all of that building up of that Docker file was a really cool sort of like a proof of concept that made me think like, "Okay, this might actually work."

**Gerhard Lazu:** How did Nokogiri go? I'm curious. \[laughter\] I still remember that. 15 years is not long enough to forget the pain that Nokogiri used to be back in the day. Is it still as painful? I think Mike, he did some good job with changing some things recent, but I don't remember what your experience was like as you were building Kuby for Nokogiri, or with Nokogiri.

**Cameron Dutro:** It's such a specific question to Rails and the Rails world. So for those that don't know, Nokogiri is a Ruby gem that has a bunch of native extensions, which means they have -- its native extension is written I think in C, and it compiles against XSLT in libxml2 and all these other libraries that you have to have on your system; you need to have those headers present. And it can be a real pain to install, because sometimes those headers don't exist in the PaaS that the gem is expecting... And it's a gem, by the way, that parses XML; like, the most popular gem for doing that, even though Ruby has a built-in REXML parser in the standard library, people seem to use Nokogiri a lot more. If you're using JRuby, it also has a bunch of Java code that it compiles, too. So yes, it can be a real thorn in people's sides. It also takes a long time to build. There's a lot of code and a lot of linking that it's doing behind the scenes.

Now, if you have all of that stuff on your system and all of that is set up correctly, then running bundle, install a gem, install Nokogiri seems to go perfectly smoothly. But if any one of those things is even slightly wrong, it blows up and spits out all of these very esoteric compiler error messages and it's very difficult to debug, especially for somebody who doesn't work in this C. It's funny, because I didn't have any of those problems. I think the major reason for that is because the Ruby base image - so if you look at the official Ruby Docker base images on Docker Hub, they have all of those dependencies already built in, because they know that people are going to want to install something like that; and they have GCC and all the other stuff built in there, too. So bundle install is all you need in that image. And I think if that doesn't speak to the power of containerization, I don't know what does. That's just very, very nice.

**Gerhard Lazu:** \[15:57\] Oh yes, yes. That was like one of the things I remember build packs were really helping with in Heroku, and that was like the first step towards, "Wow, there is a better way? You mean I don't have to solve this every single time manually?" And I was doing Chef at the time, and Puppet, and there was one more thing I keep forgetting... It was so painful.

**Cameron Dutro:** Yes.

**Gerhard Lazu:** And then Heroku changed things. It was, "Oh, this is interesting." And then build packs, they were great. Cloud Foundry, I remember how well that used to work. Now, having Mike part of the team, that was doing Cloud Foundry, really, really helped. And that ecosystem - that was like a huge, huge advantage. So no one had to worry about Nokogiri in the context of build packs anymore. But then Kubernetes came on the scene and I was very curious to see how they solved it. And apparently, the Ruby image, which - it'll be impossible, or not impossible, but very, very hard to do it right via an operating system package, for example... You could do it, but it's not trivial. Then the container just solved it. So that was so nice to see. So that was like a pain which remained in the past, and it was amazing for it to be like that. Okay. So you used Kuby when you began - and I really like this story... You used it for Master Builder Construction, your father's website?

**Cameron Dutro:** Yes.

**Gerhard Lazu:** And that's a demo which I really liked. You deployed it to DigitalOcean, which I found really interesting. Did you use since Kuby with other applications?

**Cameron Dutro:** Yes. Yes. The short answer is yes. There's a longer answer, which is kind of, so...

**Gerhard Lazu:** Okay.

**Cameron Dutro:** The Kuby integration tests, like stand up a new Rails application, they build the Docker image, they push it to a local registry running in the same VM that everything else is running in, and then they deploy it to a kind cluster that's running also in the same VM. This is all on GitHub Actions. So has it been used in other Rails apps? Technically, yes. I'm actually working right now on migrating one of our -- so I work at GitHub right now. I work on the design infrastructure team, and we have a website called primer.style, which is for the Primer design system, and there's two Storybooks. If you're familiar with Storybook, it's a system, a website that you can mount in the application or deploy somewhere. It's written in JavaScript, and it's meant for React components. So you can create what \[unintelligible 00:18:10.22\] call stories, and those stories then appear on the page and you click around and see what's possible via the different inputs and things to that React component.

The same thing exists for view components, which is one of the big things that our team works on. View components being components for Rails, which is something that just came out a couple years ago from GitHub. And so we have a Rails version of that storybook. It actually uses the same storybook front end, but then it has a Rails app backend that renders these components and returns the HTML that then the storybook JavaScript React app displays on the page. So we are migrating from Heroku to Azure, which is one of those mandated things the company is doing because we're owned by Microsoft now, so we should use Microsoft products. So I'm working right now on migrating that to Azure, and I'm using Kuby to do that.

**Gerhard Lazu:** Interesting. How does Azure compare to Heroku in terms of running stuff on it?

**Cameron Dutro:** Oh, man, it's night and day. \[laughs\]

**Gerhard Lazu:** Okay, in what way? Tell me about it.

**Cameron Dutro:** Okay. You've used AWS before though, I assume?

**Gerhard Lazu:** Yes.

**Cameron Dutro:** I think you've said that on the show before. Yeah.

**Gerhard Lazu:** I think everything but Azure... \[laughs\]

**Cameron Dutro:** Yeah, okay. I had only very, very tangentially used Azure when I was working on the kuby-azure gem, which is a provider that lets you deploy applications to Azure using Kuby. I had to go in and make an Azure account and sort of try to learn it, and my goodness, is Azure complicated. I mean, it is like -- I actually think it's more complicated than AWS, and AWS is already pretty complicated.

**Gerhard Lazu:** Wow, okay. That's saying a lot. Yeah, that's saying a lot.

**Cameron Dutro:** Yeah. Azure is like another level above that, and I don't know why I feel that way. I mean, part of it is because I've used AWS a lot more than Azure. So I think if I had used Azure more, I would not be saying that; but it certainly felt a lot more complicated. Heroku is so easy. Heroku works via git. You just say, git push Heroku master in your app or in your get repository, and it automatically detects that you have a Rails app or a Django app or whatever, Node.js, and then it stands up a server for you, it stands up a database for you, it modifies your database.yaml so that it connects directly to that database... You don't have to do anything, right? It all just works. Azure's a lot more DIY. There's a lot of different levers and bells and whistles and terminology that they use, that as a Heroku person, you would probably have to do a lot of learning to get into that.

\[20:25\] Fortunately, a lot of that stuff was done for me, because we have a team at GitHub, it's called the Azure Paved Path team. So they have systems set up where you can request capacity, essentially, in our Azure -- what would you even call it? Our Azure account, I guess.

**Gerhard Lazu:** Account, yeah. Yeah.

**Cameron Dutro:** So you create a subscription, and then in that subscription, you have resource groups, and inside the resource group I created a Kubernetes cluster... It might be worth mentioning that a lot of these hosting providers these days like DigitalOcean, Linode, Azure, AWS - they all have these hosted Kubernetes offerings. At least for Linode and DigitalOcean, the control plane, which is the part of Kubernetes that does all the actual controlling of your resources, all of that stuff is free. I don't know if that's the same with Azure, but you can stand up a cluster. And then the part that I'm struggling with now is trying to get credentials to access that cluster. So that's the next sort of frontier for this particular application, because I want to be able to point Kuby at it, and for that I need a client ID in secret, and I can't just create those myself. I have to go through a process for that at the company. So once that's done, then I'll be able to just point Kuby using the Kuby Azure provider gem, and then be able to deploy it from there... And I'm going to wire it all up with GitHub Actions, too. So I don't know if that answers your question...

**Gerhard Lazu:** I think it does, even more so. I mean, Azure sounds complicated. There's a couple of extra steps or different steps; maybe they do things differently. I haven't used it myself. I mean, I looked around, I created a couple of VMs... One thing, which was the case in the past - and when I say the past, like maybe five years ago, so this was quite some time ago... Definitely before GitHub and Microsoft were as close together as they are today. And back then, I remember the Microsoft networking was such a pain to work with. There were all sorts of issues when it came to networking. Things may have improved, I don't know, but that was my first impression. I said, "Okay, let me just focus on GCP and AWS for now", because they were like the three big cloud providers. And Azure was in third place, but it felt like it was up and coming five years ago. And I haven't checked it since, but it'll be interesting definitely to see how it works. And I like my CLIs, but more so I like the integration. So if there's something that already solves that problem for me -- like, Kuby sounds interesting in terms of, if it automatically knows how to provision a cluster... Is that the case? Does it know how to provision Kuby, a Kubernetes cluster in Azure?

**Cameron Dutro:** That would be really cool if that's how it worked. Unfortunately, no. So Kuby asks you to stand up a cluster first, and then you point your Kuby configuration at that cluster, which is similar to how Active Record works, where it expects you to already have the database created. But I think there's a lot of potential there. Yeah. I mean, one thing I was just thinking, man, this would be so much more than I personally could bite off, but it'd be very cool if we could wrap Terraform somehow. So standing up your database for you could be a Terraform thing instead of having you do that yourself. Or in the case of Kuby right now, it could be used as KubeDB to stand up the Postgres or my SQL database in your cluster. It's a stateful set, and it uses persistent storage, and KubeDB is pretty good at that. But I understand some people really don't want their database to be managed by Kubernetes... And so it'd be very cool if using maybe Crossplane or Terraform or something where you could say, "Oh, we know you're using Azure. We know that Azure supports managed databases like MySQL and Postgres. Wouldn't it be cool if we could just make an API call for you and stand up a database in those systems?"

**Break:** \[23:51\]

**Gerhard Lazu:** So Crossplane announced recently something called Terrajet. It's a Crossplane \[unintelligible 00:25:09.05\]

**Cameron Dutro:** Okay.

**Gerhard Lazu:** And Terrajet actually wraps Terraform. What that means is that any Terraform provider can be easily converted to a Terrajet provider, which runs within Crossplane. So anything that you can provision with Terraform, you can provision with Crossplane via Terrajet.

**Cameron Dutro:** Oh, that's very cool.

**Gerhard Lazu:** So then if you have Crossplane anywhere, you can use that to manage a resource via Terraform. And that would be one way of solving the provisioning aspect, but it's like all the infrastructure thing. And there is still a decoupling happening between infrastructure paving and the application setup, right? Because you have one to dial tone, whatever that is. In this case, it seems to be Kubernetes. And then once you have the dial tone, Kuby can take over and it knows what to do next; but it still needs that step zero, which is the prerequisites. And in this case, it's just a Kubernetes control plane API.

**Cameron Dutro:** Totally. No, that's really cool. I'll have to check that out. You said it's called Crossplane Jet?

**Gerhard Lazu:** Terrajet.

**Cameron Dutro:** Terrajet. Right, right. Okay.

**Gerhard Lazu:** Yeah. I'll share with you after the recording, not a problem. We even have an episode, part of the Christmas one, episode 33, where we build -- I say "we", I mean, it's a royal "we". The person that you see on the other end, together with Muvaffak and Dan Mangum, we build a provider for Linode, which provisions Kubernetes clusters using -- so we can use Crossplane to provision Kubernetes clusters, so we can deploy the app and everything else that we run on Linode. So that was an interesting project.

**Cameron Dutro:** That's really cool. I remember hearing that on the show, although it was somewhat -- I was just listing to the audio. I should go back and watch the video, too. I'm sure that's really cool.

**Gerhard Lazu:** So there is one, but it's not edited. So we have to edit it before it gets published, but there is a resource that you can use.

**Cameron Dutro:** I do want to say one thing - I actually looked into using Crossplane in Kuby, because I was thinking, wouldn't it be nice if we didn't have to worry about standing up a database using KubeDB? Part of the problem too is that KubeDB now has a licensing model that makes it much less turnkey to stand up a database. And so I've migrated away from that. I think Kuby will stand up a CockroachDB for you instead, because that's Postgres compatible... Mostly Postgres compatible, and also much more cloud-native than my SQL or Postgres where ever designed to be. So I think that's where I'm going to go with that.

But the question of Crossplane came up when I listened to Ship It actually, the episode about Crossplane. And I thought, wouldn't it be really cool if I could just deploy a CRD that would then stand up, for example, in AWS, a MySQL/Postgres? Because that's what most people are doing. And all the people that I know that have used Kuby had written managed database false in their config, and gone and stood up their own, because they don't want their database running in Kubernetes, where they don't really know what it's doing, or if it's going to go down and they're going to lose all their data... Which is a totally valid concern.

**Gerhard Lazu:** Yeah.

**Cameron Dutro:** \[28:05\] So most people aren't even using that option. The problem that I ran into though was that Crossplane -- it would be better for my use case if... Because for example, in AWS, I would've had to create a security group and put it in a VPC, and I would've had to specify all of that stuff in the Crossplane configuration. And the Kuby provider system or provider set of gems right now are really not that capable. They don't know that your app needs to run in a VPC. It's really -- the whole thing has been architected from the standpoint that you have a cluster and that's all you have access to.

**Gerhard Lazu:** Yeah.

**Cameron Dutro:** And so everything that you do needs to be in that one cluster. We need to have a lot more smarts in each of these providers to do things like create VPCs or stand up databases. And then the networking to connect all those things together is also very, I think, provider specific. And so we'd have to figure out all of that stuff beforehand.

Something like Crossplane -- this Terrajet you mentioned might be a little different, but I think it might be also similar where you have to also mess with all that, all those sort of tangential side things that would need to go into standing up a database. But yeah, I mean, if there's some solution that makes that more turnkey, that would be amazing.

**Gerhard Lazu:** So you mentioned that others that use Kuby set managed database to false; who else uses Kuby? I'm very curious.

**Cameron Dutro:** Well, it's been people that have reached out via GitHub issues, mostly. Mike Rogers, who unfortunately has passed away - he did a really nice video about deploying. He actually used GitHub Actions to deploy a test app that he had written. He did a screencast for this where he deployed a test app into DigitalOcean I think with Kuby, and then tweeted about it. And he also invited me to the London Kuby users group for a meetup, and I talked about Kuby at that point to a number of people there.

So there was some interest from him, and that was really nice to see; and he then tried to use it. And then Vladimir Dementyev from Evil Martians also wrote up a really comprehensive article about how he had used Kuby to deploy (I think) also again a test app that used the AnyCable gem that that team has been working on... AnyCable being this project that lets you set up -- it was sort of before Action Cable, which was Rail's official offering. AnyCable helps you use WebSockets and connect to an application, and uses Redis, I think, to send real-time push updates and things to different people that are connected to it over WebSockets. So he created a Kuby AnyCable plugin that makes deploying all of that stuff - turnkey, you just add it to your Kuby config, add plugin, and it works.

So those are the people that I'm aware of. I think there are probably others that have not mentioned anything to me, have not said anything. So yeah, that's all that I'm aware of currently.

**Gerhard Lazu:** Well, if anyone is listening to this and has used Kuby, or is thinking of using Kuby and knows someone that has, let us know. I would love to hear and to see, give some examples. Repositories would be great to add in the show notes, or in the comments. You can contribute comments directly when this comes out. I love seeing real world examples, and I love hearing about feedback, things that worked well, things that people would like to see it being improved, because I'm thinking the same thing - why isn't Kuby the Rails active deployment? I mean, can you imagine Kuby being, one day, Rail's active deployment?

**Cameron Dutro:** Well, I can imagine it, although it's a little scary for me, because I'm one guy and I learned how to use Kubernetes by watching somebody else do it, over his shoulder. And that's really how I learned Docker also. So I know how these tools work to a certain degree, and I think I would love to see Kuby improved by people who know what they're doing in this space more than I do. I'm specifically, I think, worried about security, because that's a big gap in my Docker and Kubernetes knowledge, is the security implications or the security concerns that come up around using Kubernetes; that's a big hole in my knowledge. So for that reason, it scares me to say this should be the solution that all Rails devs use, without some more auditing, without some more eyes from people who know what they're doing in this space.

**Gerhard Lazu:** \[32:12\] I mean, the whole CI/CD is very close to my heart. I mean, I've recently made a pretty big change where I joined Dagger... It's all about the CI/CD there. And that is on my mind all day, every day. And this feels like a huge loop completing, in that I remember the pain that Capistrano was. I remember the Chef that used to lay the groundwork and all the Nokogiri stuff that we used to do... And out of that frustration, out of the frustration with Capistrano, I tried something called Mina. I don't think many people have heard of that. And I even wrote my own deployment tool in Bash called Deliver, which Ben \[unintelligible 00:32:48.20\] created called eDeliver, for Erlang applications, which is how my journey with Changelog started. Jerod asked me, "Hey, I've seen your name, I recognized it. Can you help us deploy Changelog?" And that's how all the journey started.

**Cameron Dutro:** Okay, cool.

**Gerhard Lazu:** And now I'm back in this space, focusing on the CI/CD aspect. And I also think that there should be a good, canonical way of deploying Phoenix apps. And it doesn't matter whether you want to deploy them to Kubernetes, or Fly, or elsewhere; it really doesn't matter. And what would it take for us to deploy Changelog using something canonical that others contribute to? Because as much as I love this stuff, other people are very smart in specific areas, and only when we come together can we make a better way or a good way of doing things we can keep improving it. It should definitely be bigger than a single person. So why not do the same for Rails apps? And it's the idea, that Omakase idea that David put out; there should be easy way, a default way... You just go, you just pick it and it just works, right? It doesn't matter how. So I'm very excited about that idea.

**Cameron Dutro:** Thank you. Yeah, me too. I mean, most of my professional career has been working with Rails and Rails apps and Ruby. So the concept of Omakase and convention over configuration is very near and dear to me. And I thought that's something that Stefan said in his podcast that I mentioned earlier on the Ruby Rose... Because they were questioning him like, "Oh, but we can use Heroku, and we can -- everything is so different. All these different cloud providers are so different. How could we possibly give you guidance on how to deploy your app when applications all have so many different desires and needs dependencies? And then all these cloud providers have so many different bells and whistles and ways of fucking things up? How could we possibly provide guidance on that?" And his answer was, "I don't care. I just want it to work."

**Gerhard Lazu:** Exactly.

**Cameron Dutro:** Which I thought was so correct. It's very difficult to write something, to work on something that just works... Like, Active Record just works, or like Active Job just works. But Rails has done that I think historically for a long time, and it takes a lot of that burden off the developer to do those things.

I realized the other day -- I was writing a RailsConf talk proposal for Kuby, and I realized, after thinking about some conversations with a number of my colleagues and friends over the years, that most Rails developers... I would say most developers in general that aren't in the DevOps space or in the production engineering space, or SecOps, or whatever - most of those people want to think about deployment like 0% of the time. They really don't care how their application gets launched into production. They just want it to be there. I think that's very similar to how people think about database access. Aside from DBAs, most developers don't want to think about how to connect to a database and how to manage all of the access, manage whatever else there is to manage in databases. They don't want to think about that. They just want to connect to it and shove data into it and get data back out.

So wrapping all of that stuff up into a gem or a system or a framework or something is kind of Rails as key to success, I think, or part of its key to success, and that's what I want Kuby to be also, is a way to sort of compress all of that, those best practices, that knowledge, that overhead into a single config file, and you just say, "This is what I want you to do. Now go do it."

**Gerhard Lazu:** \[36:11\] Yeah, for sure. There is something to be said about the simplicity of encoding, the things that we all do as Rails developers, as Elixir developers, as Java developers... And I think some communities, like Maven, they have these practices really -- like they've been refining them for many, many years.

**Cameron Dutro:** Yes.

**Gerhard Lazu:** What about Rust developers? What about Go developers? There's like all these tools that keep coming out. And these days, you don't have just Rails. I mean, you're very lucky if you have just one programming language, just one framework. There's typically multiple ones. So can we once and for all agree on something, and can we all contribute to one thing? It doesn't matter. Like Kubernetes, right? It just like encapsulates so many great things, and some people don't like it, and that's okay. Just go and use like a PaaS if you don't want to deal with the whole pain of Kubernetes.

**Cameron Dutro:** Yes.

**Gerhard Lazu:** And this makes me wonder... Someone like GitHub, for example - how do they solve this problem in a way that they share it with others? Is it just like internally, or is it something that could benefit others as well?

**Cameron Dutro:** Yes. That's a really good question. So I've only been at GitHub for a few months, and I took a big leave of absence in the middle there to have my second daughter. I just started -- like, last week, actually. This is my second week back. So my knowledge of how GitHub deploys things is limited. But I can say that -- so GitHub is kind of famous for this ChatOps concept, and that's how deployment of github.com is done. You hop into a special Slack channel and there are certain ChatOps you can perform. So for example, I can ask it to deploy a pull request. That pull request has to have all the correct stamps of approval, but then I copy and paste the URL, and I just say, .deploy and then paste in the PR link, and the chat app will respond to me saying, "Great. I've enqueued this for deployment." It's going out in a deploy train, which is a bunch of other PRs all merged into one. And then I can go to this internal application we have called Heaven, which shows the steps that it's performing.

It's using Kubernetes under the hood. I know that for a fact, but I don't see any of that plumbing myself; all the different resources, YAML resources or whatever that it's using, I don't see any of that stuff. I don't see it get built into an image. All I see is the Heaven output that says, "Waiting on this gate. Okay, we're done waiting. Everything looks good. We're going to proceed to the next step." And at the end of the day it's also, of course, checking a deployment -- it links you to a deployment dashboard that says, "This is our current P99. This is our current number of errors", and you as a human being can look at that, but also it's automatically looking at that and checking for dips or increases in 5XX responses. So all of that stuff is controlled ChatOps and via this internal dashboard. I don't know if any of that has been open sourced. I think some of the ChatOps have been, like Hubot specifically, has been open sourced.

**Gerhard Lazu:** Yeah, I remember that.

**Cameron Dutro:** But all the code, like all those very GitHub specific ChatOps, I don't think those have been open sourced. It would be really cool if we could do that. I don't have any idea or any insight into the team that works on that stuff and whether or not they've considered that, but I think that would be really nice for the community.

**Gerhard Lazu:** I'm not so convinced about that, and let me tell you why. Hubot - I remember Hubot for like a long, long time. Again, when I was doing Rails, this was still a thing. And when I tried setting it up, it was so complicated, I just gave up. So there is something to be said about tooling that works for a company like GitHub, with complexity, with like the number of developers, with the type of the codebase... It's almost like trying to do what Google does. So if we tried, if they open sourced Borg, that would have never worked. So instead, they open sourced Kubernetes. That made a lot more sense. And then many companies came together to make that happen. I watched the Kubernetes documentary a couple of weeks back... It was fascinating to hear some of those stories, and to realize--

**Cameron Dutro:** Hold on, there's a Kubernetes documentary?

**Gerhard Lazu:** \[40:02\] Oh, yes, part one and part two.

**Cameron Dutro:** Whoa...

**Gerhard Lazu:** Yeah. They're really good. I'll share the links. They're great.

**Cameron Dutro:** Yeah, please do.

**Gerhard Lazu:** And it was great to see the journey and to understand the complexity that goes behind it, especially when it comes to making something simple, making something easy to use. And Kubernetes is really complicated, but people have no idea how complicated Borg is, and what it takes to run these systems. And okay, you can use a platform. That is a valid option.

**Cameron Dutro:** Totally.

**Gerhard Lazu:** Go for it. No worries. But you may have -- based on where you are in your operational maturity, you may say, "You know what? I actually need Kubernetes, because I have all these other things I need to run somewhere." Like, for example, managing DNS. What manages DNS? What manages certificates?

**Cameron Dutro:** Totally.

**Gerhard Lazu:** What manages all those things? You can say the platform does all of that... Okay, so how many apps do you have? And what about your CDN integration? Does the platform manage that as well? Okay, what about your functions? Do you have some edge functions? Does the platform do that as well? And many say yes, yes, yes, yes, yes, and I say, "Okay, so how much fragmentation do you have within that platform? Can you hold it in your head?" And again, it depends where you are, but the majority... Hubot - so difficult to set up. And maybe they would never go through the pain. And the way that you describe that you do deployments - the majority, I don't think they do it like that. I think they just push, and they just want stuff to happen , right? \[laughs\]

**Cameron Dutro:** Yeah, exactly.

**Gerhard Lazu:** Which is what we do.

**Cameron Dutro:** It's really hard. I learned in this process and by talking to people, again, that it's really hard to beat git push Heroku master. I mean, isn't that just kind of where we're all striving to get? Even though they've done this for like 15-20 year years now, we're all still trying to replicate that turnkey, ease of deployment, I think.

**Gerhard Lazu:** But that's exactly what we have with our Kubernetes. So Changelog runs on Kubernetes today, and it will run on multiple platforms, so we're looking at Fly next. We've been talking about this actually for a couple of episodes, but they haven't aired yet...

**Cameron Dutro:** Okay.

**Gerhard Lazu:** So you will hear this retrospectively. The point being that we want to try what it looks like to run on a platform and to compare it side by side, Kubernetes, and managed Kubernetes, and the platform. And from the flow perspective, nothing changes. Developers just git push, and then things happen in the background. I say developers - it's actually Jerod, Adam, and anyone else that commits code. Me... It's like us three. But nothing changed in years, in six years. Even though we went through a couple of infrastructure reorgs, that model never changed, because it's so hard to beat.

**Cameron Dutro:** It's so good. Yeah.

**Gerhard Lazu:** Yeah. And if you have branches - well, wouldn't it be amazing if you could automatically had the preview environment maybe, or even better, can you switch the way you think about features and can you use feature flags? I know that GitHub uses this a lot. So then just push into main. Okay, you have a branch. Okay, get some approvals, whatever, extra eyes, but get it into main as quickly as possible, so that you can try it out, put it behind a feature flag, and when it's done, either remove it, or if it's not good enough, just delete it. It's okay.

**Cameron Dutro:** Yeah, absolutely.

**Gerhard Lazu:** Don't get attached to your ideas, but try them out in production. Otherwise, it's just inventory.

**Cameron Dutro:** So true, yeah. I've been thinking actually -- for this storybook that I talked about before, I've been thinking about a Kuby plugin potentially, or some other mechanism we can use to deploy individual copies of that website per branch, or per pull request. I'm not sure how to do that. I've been noodling around, like in the shower, and stuff about that. I'm not sure how we're going to do that, but yeah, something like that would be really nice to have too, I think. It sort of speaks to what you were saying.

**Gerhard Lazu:** Yeah. I remember when I talked about my 12 months of Docker in production at \[unintelligible 00:43:36.19\] This was 2014, almost eight years ago. My plan was to set up a environment per branch. I never got to it, but I have not given up the dream. So my dream is to see that. \[laughs\] And now I'm back in the game, like properly focusing on CI/CD, and would so very much to do that. So I think we have some follow-ups to do to this.

**Cameron Dutro:** \[44:01\] Yeah, yeah, definitely. It's so funny you say that. That's definitely what our goal was at Lumos, or at Lumosity, Lumos Labs also. We tried for a long time to get our infrastructure to a point where we could deploy a staging version per branch, basically. We called it Ephemeral Environments; preview is a better word for it. We wanted to be able to deploy that per branch and then share that link with QA people or with somebody who was trying to test the iOS app or something, so that they would have a standard or a static URL they could use to test something.

We had staging environments. We had like staging 50 through 67 or something, because the previous Capistrano versions had been staging 1 through 49, or whatever. So we had all of that, but then those got stale quickly and you could boot somebody out, override them and deploy over the top, and then they would lose their staging URL. So it wasn't great. And we were on Kubernetes, and so we were like, "Why don't we just try to do ephemeral environments?" It just never happened. It was just so difficult to do.

**Break:** \[44:54\]

**Gerhard Lazu:** I mean, that was the goal. Kubernetes was -- as an idea, people were not meant to know what they even run, because it doesn't really matter. That was the whole -- it was meant to abstract away the concerns of your infrastructure. It accomplished it partly, but we ended up YAMLing like crazy, and worrying about all those concerns like services, what is a service, and what is an ingress, as developers. And while that was okay for a while, I think it got boring and old after a couple of years, and we just want to just go a bit higher up; just like not worry about those things.

**Cameron Dutro:** Right. That's a really good, astute observation, I think. And I saw a tweet to this effect the other day, which is like, as an engineer, what you're really doing is just you're reinventing the wheel at different levels of abstraction just constantly, right? Every time we come up with a new -- Kubernetes is a new thing, or it has been recently a new thing that papered over your cloud provider. Before that, people were deploying stuff to cloud providers manually, really. I mean, with Capistrano, potentially, or even with Docker, push an image up and just run it. Don't just do docker run on your cloud machine, or something like that.

**Gerhard Lazu:** Yeah.

**Cameron Dutro:** So yeah, we've now reached this point where even Kubernetes isn't a high enough abstraction. We need something else even on top of that, which - it's just kind of funny to me, but I understand why that is. I think there's so much to learn and so much to know about application development that no one person can know it all. And so having these conceptual compression concepts like ActiveRecord, active deployment, if that exists at some point, or Kuby - it's to try and make that easier so that you can focus on the things that you really are good at.

**Gerhard Lazu:** How do we come together, for sure? That is something which is on my mind a lot, and it has been in the recent month. But I'm seeing a lot of parallels between Phoenix and Rails, in terms of you need the database, you need to run migrations, you have assets, you do that compilation, you have your test to run... Sometimes people just build and deploy, but when do you test? Do you test part of your build? Because you do git push, and then things just happen. When do the tests run?

**Cameron Dutro:** Yeah. That's a really good question.

**Gerhard Lazu:** Sometimes they don't, right? But it should be part of it, these build tests and deploys; literally, like the three stages of the pipeline. So what happened to the tests?

**Cameron Dutro:** \[50:01\] Yeah. Boy, that's a really good question. I mean, sort of considering testing part of deployment is really, I think, pretty interesting and pretty key, really. I mean, CI/CD - that's really what you're talking about. Like you said - build, test, deploy. Somehow though, testing got forgot, and build and deploy are what I -- Kuby, for example, doesn't really focus on testing at all. It's just deployment. I don't know, that's a good question... But you're making me think now maybe that should be part of -- I mean, there's also a lot to consider when it comes to where is the edge of the deployment system? Where does Kuby start and end? Where does Kubernetes start and end? What is it responsible for, and then what's your app responsible for? I mean, Kuby is really just meant to build and deploy, I think because that would be what you would do. I would probably break that up into two different GitHub actions. There would be a build action, and then there would be a deploy action that would run in sequence, because the building has to happen before the deployment...

And then I would think that if the team would then set up the testing CI steps separately... However, you're making me think maybe what we should be doing instead is making sure that the build and deploy steps only happen if the tests pass. And you can configure that manually, of course, in your CI system. So in GitHub Actions, for example, you could link these together and say if the first one doesn't pass, the second and third don't run. But it might be kind of cool to sort of build that into the system, so instead of having to wire that stuff up yourself, you could simply have Kuby run all those things for you. I have to think a lot more about that, but you raise a really good point.

**Gerhard Lazu:** So on that path - because I have been on that path for a while, and we have been encoding this in CircleCI for years... So we use CircleCI, and we still do by the way, because we have two of everything, or we try to have two of everything...

**Cameron Dutro:** For sure.

**Gerhard Lazu:** So we have two CI systems, so we use both CircleCI and GitHub Actions... Which feels a bit excessive, but if anyone fails, for whatever reason, our deploys will not be blocked. And I think we're going into this multi-world where you have Kubernetes, sure, but maybe you want a platform as well. And maybe as you run your experiments, you have two things running side by side all the time, and you pick the one; basically, the fastest one wins.

**Cameron Dutro:** Yeah.

**Gerhard Lazu:** If my deploy got onto that system first - well that will be promoted to the new production, and the old one is maybe laggard, but it will come within a few minutes. Not a problem.

**Cameron Dutro:** I wonder if you could even compare those two build artifacts, or even the resources, and see "Are these binary compatible?" If so then, I've got a repeatable build, too.

**Gerhard Lazu:** There are so many things there, for sure. So on this path, you start seeing -- I'm thinking of it as a DAG. So the direct acyclical graph. There are all these steps, and some of them, you want them to be automatically cached, because you want efficiency... And testing can be one of those steps. But there's other concerns, like for example, assets - do you need to compile the assets? And I say assets, I mean the static assets, like your JavaScript, your CSS, all those things. And then, okay, you compile them, you bundle them... Do you deploy them to the same place that you're at, or do you push them to S3, or something like that? And that may happen as well. So which of these steps still need to happen? Because once you start thinking about everything that needs to happen, you start having this huge graph. And if you run everything every single time - well, why? Do tests need to run? Did something change for your tests to run? And if they did, they should definitely run. And then what other steps in that graph will get invalidated?

**Cameron Dutro:** Sure, yeah. That's really interesting. Right. Because if you change some kind of application file, some for example Ruby file, Python file, that actually affects how your application runs, then the tests should probably run, make sure that's okay.

**Gerhard Lazu:** Of course.

**Cameron Dutro:** But if all you did was make a change to your documentation, tests probably don't have to run for that.

**Gerhard Lazu:** Exactly. And how do you configure that? How do you capture that? And you do the same thing... So whatever you do for Rails, Phoenix will have similar concerns.

**Cameron Dutro:** Yeah, absolutely.

**Gerhard Lazu:** So that's when you start duplicating effort. And I don't know enough about Django, because I never used it, but maybe you do the same thing in Django.

**Cameron Dutro:** \[54:01\] I only used Django back in 2010, and I don't remember. The asset story from most of these frameworks back in those days was very, I would say, immature, compared to what we have now.

**Gerhard Lazu:** Yeah. Primordially, yeah. Things move along. Yeah, yeah.

**Cameron Dutro:** Right. Yeah. I don't even think there were really CDNs back then. It was just like, "Here's a file that I'm serving to your browser. It's not fingerprinted or versioned at all. It's just - here's your file."

**Gerhard Lazu:** Yeah. And then one thing which I'm a huge fan of is splitting CI and CD. Basically, I like to point people out, "Do you see that forward slash? That means something." And the intention behind that is that you should have two separate systems, because if your CI pushes into production, maybe it has too many privileges. Maybe your CI has the key to your kingdom. So there comes the security aspect. So what about CI running the tests? Obviously, building, testing, and producing an artifact that's ready to be delivered. But there's something else which is watching those artifacts, and now you already start thinking, Kubernetes controllers that continuously converge, right?

**Cameron Dutro:** Right, right.

**Gerhard Lazu:** And then see, am I running the latest version? And if I'm not, maybe I should be. And then what does that mean from a GitOps perspective for me to be running the latest version? Maybe there's another commit which will be triggered. I don't know.

**Cameron Dutro:** Right.

**Gerhard Lazu:** So in that way, it's a very easy way to add N deployment targets, because it's the deployment target that knows what it needs to do, not the CI. The CI doesn't care where that artifact needs to end, because it stops with, "Okay, I produced an artifact which will work. We ran the tests, we ran all these things... It's all good. It can go into production, or staging." I don't like staging, by the way. I go straight into prod.

**Cameron Dutro:** Yeah.

**Gerhard Lazu:** I see it as an intermediary step.

**Cameron Dutro:** Yeah. It's often wrong.

**Gerhard Lazu:** The goal would be to have the confidence to do that... Like, go straight into prod, build a resilient system that if there is a problem, it will know how to handle it. It won't crash and burn. So what does that look like? And what does that mean for Kuby? Does Kuby maybe run CD, and it leaves CI to something else? Because that's what it sounds to me.

**Cameron Dutro:** Yeah. I mean, that's a really good question. I know that there have been people in the past -- Kingdon Barrett, actually someone who has been commenting on a lot of Kuby issues, or has filed Kuby issues and stuff in the past... I think he works for a company that I think is invested in the GitOps space. I think it's Flow.

**Gerhard Lazu:** I think that to me sounds like Flux.

**Cameron Dutro:** Sorry, Flux.

**Gerhard Lazu:** Yes, yes.

**Cameron Dutro:** You're right. Not Flow. Yes.

**Gerhard Lazu:** And that's Weaveworks. Yes. Kingdon Barrett. Yes. Weaveworks. Yeah, yeah.

**Cameron Dutro:** Yeah. He's been doing a lot with Kuby and GitOps. And one of the big questions was - well, so with GitOps, my understanding is... And I really have not dabbled with it much, but in our conversations, the way I understand GitOps is that you've got these YAML files, this configuration that you'll eventually apply to your cluster. And that configuration can really come from anywhere, but the point is that it gets committed to your source control system.

**Gerhard Lazu:** That's correct. Yes.

**Cameron Dutro:** And then once you push that up to git or wherever else, the WebHook fires and that's what gets deployed. It's all those static YAML files, so it can version everything that way. That's really interesting. Something that I had never considered doing, really. It was more just like -- you would run kuby deploy from potentially your laptop, just like you could with Capistrano. Not that I think that's a particularly good idea, but you can do that. You can also run it from GitHub Actions or some other CI or CD system. But it really begs the question, what other use cases can we enable? And one of the things that he and I have been talking about is would it be cool if you could write those resources? Because Kuby has a kuby resources command, which will just print all of the Kubernetes YAML files to standard out; you can redirect those to a file and commit that source control.

We've also been talking about wouldn't it be cool if you had a flag that would tell it where to put those files, or maybe split them up into different directories and whatnot, and then commit that... So that's been an ongoing conversation. But it made me really think about what other ways are people going to want to use this tool. I would think that the GitOps concept is popular now, and maybe something that Kuby could help with in a more direct way; maybe a plug-in or something that would communicate with Git, or something like that. But there's other options, too. You mentioned the tests concept...

\[58:07\] I think for me right now, just for my own sanity, it makes sense for Kuby to just sort of handle the deployment side of things without considering tests, and sort of lead that up to the user, the creator, the application manager, whatever, the developer, to hook up and wire up. But I don't think that's necessarily where we have to stay. I think we could potentially look at other techniques for deploying, like GitOps and things like that, for sure.

**Gerhard Lazu:** Well, if anything, from this conversation what I'm taking away is that I definitely want to look closer at Kuby. You mentioned that there is an example Rails app, which I can use, so I don't have to have my own. That is amazing. So what are the concepts that we can learn from Kuby and what are the common concepts that we can apply elsewhere? And again, my mind is Dagger, because that's where I spend most of my time...

**Cameron Dutro:** Yes.

**Gerhard Lazu:** ...and I'm taking the whole Changelog application, which has migrated to Dagger, part also of episode 33, when I mentioned the Terrajet provider... So like all those three things we are using. Parca is the other tool for CPU profiling. So all those things we are already using in production. And what I'm thinking is what is the next step? What can we learn from Kuby? Where do we meet? Because I'm sure that we meet at some point, so where do we meet today? And where do we want to meet six months from now? What would make sense? Because I'm so keen on solving this problem once and for all. I mean, it's maybe one of the reasons why I'm back in this CI/CD space full-time, because it feels like I have unfinished business there. So as we prepare to wrap up, what is your take-away for the users, for the listeners?

**Gerhard Lazu:** I think there are several things that I want, especially Rails devs take away, but I assume -- or I could say everybody also... One of those things is to treat Kubernetes as a platform and not as a target, or even just using technology for its own sake. If you are using Kubernetes because you think Kubernetes is cool and it's flashy and new, then that's fine. But I think the take-away message that I would like to communicate - this is something that I learned kind of the hard way, is that most people don't care about Kubernetes just because it's a new tech technology. They want to deploy their app and have it run in production, in Kubernetes, or wherever . They don't really care where it ends up running. So that would be my first takeaway, would be just be like make sure that you think about it as a platform, and not as sort of a be-all end-all.

And then the other thing I would say... Something that I've talked with a previous co-worker about at length is to use an actual programming language to create your Kubernetes resources. Helm is one thing that I think the community has coalesced around when it comes to deployment. I personally think Helm is really bad at templating. And Pulumi and Kuby and other solutions that use actual programming languages to compile these resources or build up these resources I think is a much saner way to go. I mean, anytime you have a templating engine where you have to indent everything manually is so error-prone. So that'd be another take-away, is to use an actual programming language for these things, whether it's Ruby or JavaScript or Python; there's solutions now, I think, for all those languages.

I don't think we touched on that too much during the show, but one thing I also wanted to say that I mentioned to Gerhard is that what sort of -- using a programming language sort of ties into the question of like what can Ruby specifically, what are some of the benefits of the language that make it especially suited to something like this? And I do want to touch on that really briefly and just say that -- because I know that that Ruby has taken a backseat over the last couple of years; it maybe hit its peak popularity in 2009, 2010 maybe, and now we're into the Rusts and the Haskells and the TypeScripts of the world, and maybe Go and Rust, and all that stuff, too. And that's fine, nothing wrong with those languages. But to all those listeners out there - if you haven't looked at Ruby for a while, I would definitely take another look, I think, especially with Ruby 3.1, which is the most recent release... There are some really very cool, new language features you could look at.

Specifically when it comes to Kuby and deployment, one of the most powerful things out Ruby is the concept of blocks, so being able to pass a block to something; it's like an anonymous function. It usually happens at the end of a function call. That's how KubeDSL works, and that makes extensive use of blocks.

Anyway, I'm sort of rambling now, but the point is that a real programming language can really be your friend in this kind of space, and that Ruby has a lot of really nice language features, that make this kind of thing really easy.

**Gerhard Lazu:** I think there's a lot to be said about YAML and Helm, and that complexity, and templating with YAML... Oh, my goodness me. And using Go to template YAML... So yeah, there's definitely something there. I have something amazing to share with you... It's called the Q language, Qlang.

**Cameron Dutro:** Yeah. That's what Dagger uses, right?

**Gerhard Lazu:** Yup. But the language on its own - yeah, it's like one of the Dagger components...

**Cameron Dutro:** Yeah.

**Gerhard Lazu:** But it's this whole idea that you want automatically formatting, you want type checking, you want type safety, you want all those things in your configuration... And it doesn't have to be a programming language.

**Cameron Dutro:** Yeah.

**Gerhard Lazu:** So it is a solution to the YAML problem, and I'm confident that we are closer to solving it than ever. And whether it's a programming language - that's okay. I think at this point, many things are better than YAML. It's like the whole ubiquity of it. It's just everywhere, right? And it's so easy to write. Much easier than JSON, I think. I'm not even going to mention XML, because it's not even in the same ballpark.

**Cameron Dutro:** Right.

**Gerhard Lazu:** Yeah. I think there's something to be said about it. It stood the test of time, YAML, and it's been around for a long time for a reason. Jsonnet, and all the other things, like Dhall as well... There are a couple that try to solve the YAML problem, or the problem with YAML, but it's still here, fortunately or unfortunately.

**Cameron Dutro:** Yes, yes, totally. So let me amend what I said... You don't necessarily need a programming language, maybe like a general-purpose one, but something that isn't just templating YAML, because that really leads to lots of pain.

**Gerhard Lazu:** We definitely agree there. Cameron, it's been a pleasure. I'm so happy that I could convert a listener to a guest. So, so happy. Kuby looks amazing. I'm really looking forward to what happens with it next, where the community takes it. And having Kuby as the new Rails... Active deployment, even if it stops at the idea stage, I think it's an amazing idea. It's a crazy idea, and I'm all about crazy ideas. So I'm wondering what happens next with that. Thank you, Cameron.

**Cameron Dutro:** Thank you. I really appreciate that. It's been a pleasure talking with you.

**Gerhard Lazu:** Likewise.
