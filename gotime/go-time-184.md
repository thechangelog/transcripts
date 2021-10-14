**Mat Ryer:** Hello there, and welcome to Go Time. I'm Mat Ryer, and today we're talking about Porter.sh. It's a really cool way to package up and deploy your applications. We're going to hear and meet the creator, and one of the main contributors, Carolyn Van Slyck. Hello, Carolyn.

**Carolyn Van Slyck:** Hi! Nice to be here today and see everyone again.

**Mat Ryer:** Welcome. Yeah, we've missed you. It's been so long.

**Carolyn Van Slyck:** I know, I know. Hopefully we can all get back together again soon at a GopherCon.

**Mat Ryer:** Oh, we can but dream. Carolyn has made open source her home, and according to my notes, you persist at gardening, despite all indications that you should give up. Is that right?

**Carolyn Van Slyck:** Yes, I do. I torment the poor little green things in my yard constantly... And you know, I try; I try to geek out on water meters, and automatic watering, and all sorts of things... I mean, I've killed moss, Mat. Moss.

**Mat Ryer:** \[laughs\]

**Johnny Boursiquot:** Wow...

**Carolyn Van Slyck:** So yeah.

**Johnny Boursiquot:** Impressive.

**Carolyn Van Slyck:** I persist.

**Mat Ryer:** Well, there you go. We're also joined - you heard his voice then... It's Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello.

**Mat Ryer:** Welcome back.

**Johnny Boursiquot:** It's good to be back.

**Mat Ryer:** Hello... You kind of did that in a little bit of a British accent there.

**Johnny Boursiquot:** Yeah, I wasn't sure you'd notice.

**Mat Ryer:** Yeah, yeah... I've got British ears. I can hear it anywhere.

**Johnny Boursiquot:** \[00:04:10.23\] Yeah, I can see them, too.

**Mat Ryer:** Yeah, thank you. Are you good at gardening?

**Johnny Boursiquot:** Well, I don't know, that's the thing. My front yard has had a bunch of dead spots. I've recently went outside and did a bunch of work, just to fill those in kind of thing; I had to youtube a bunch of videos, "What's the nature of grass?" and "How do you repair grass?" "How do you fix grass?" "How do you plant grass?"How do you keep weeds out of your grass?" Yeah, I know a lot about grass...

**Mat Ryer:** Are you just trying to find an excuse to legitimize your internet searches?

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** It's like, "I was just searching for actual information about grass, officer."

**Johnny Boursiquot:** Yeah. Like, actually, literally, grass in the ground. Not the other kind of grass. Just in the ground grass. Well, I guess that comes from the ground too, doesn't it? The other kind of grass...

**Mat Ryer:** Yeah, it does. The other kind, yeah.

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** We're gonna save that for Go Time -- we'll do a Go Time Green Edition. \[laughter\] We'll save that chat for -- actually, to be fair, I'm very interested in getting into that, like plants, and gardening, and things like that. I feel like it would be a very therapeutic and so different to tech that you can kind of get a good break, you know?

**Carolyn Van Slyck:** Yeah. I think a lot of people in tech fall into that. You're either a goat farmer, a cheese farmer, or again, some people \[unintelligible 00:05:33.21\] her entire house is a jungle. It's an escape.

**Mat Ryer:** Yeah, I know. And then of course, people like Alex Ellis come along and make Growlab, and they bring tech back into plants... And there are a few apps like that, where they help you do that. Have they worked for you?

**Carolyn Van Slyck:** You really shouldn't bring tech back into plants, I feel like. You're trying to escape. Don't bring your torture with you.

**Mat Ryer:** Yeah, I know. You need a break, that's the thing.

**Johnny Boursiquot:** Or it could be now you have your two loves. I don't know. \[laughter\] Different things to different people...

**Carolyn Van Slyck:** Until someone can submit a pull request to my garden... \[laughter\] I haven't reached the pinnacle yet.

**Mat Ryer:** That could be how you pull weeds.

**Carolyn Van Slyck:** Exactly.

**Mat Ryer:** Yeah. That's good. I do like that. I like the idea that we could have tech just tell me what to do, like when to water stuff, and what to look for, and maybe some machine learning to -- I can show it a photo and it can say "Yeah, you're doing alright" or, you know...

**Carolyn Van Slyck:** Yeah, Twitter is getting pretty close to that though. I often will send a picture of whatever horrible thing has befallen my garden, and within minutes I have so many people telling me that I'm a bad person and I've done things wrong. \[laughter\] So it's just like tech.

**Johnny Boursiquot:** It's like Mechanical Turk, but with opinions. \[laughter\]

**Mat Ryer:** Yes. Well, okay, so speaking of opinions - let's get talking about Porter. This is a very exciting little project... Maybe you could just tell everyone at home - and wherever they are, to be fair; I don't know where they are, I don't track people... I try not to anyway... Maybe you could tell them wherever they are, while respecting their privacy, what Porter is.

**Carolyn Van Slyck:** Sure. To be honest, I've always struggled with explaining it, because it can do a lot of things, so I like to simplify it this way... Imagine the thing you absolutely should not do, which is use curl, and you install something by piping it to Bash... I mean, ideally, with Sudo, because you just -- go all in if you're gonna do this. And what I'd love to be able to do though is instead of yelling at someone and saying "Don't do that! You're a bad person. You should feel horrible for even thinking that it should be easy to install something", what if we just made something similar to that? Secure, so that it wasn't a terrible thing to do, and in fact, you could do something like that in production to set up infrastructure and your application.

\[00:08:03.11\] So what Porter is is it creates essentially like a Docker container that has everything you need to install your application and what your application runs on as well. So maybe you have some Terraform scripts to set up your infra - you obviously (like everyone does) have horrible Bash that you don't show anyone, that actually makes everything work. Maybe you have kubectl commands and manifests that you're running as well, like \[unintelligible 00:08:27.10\] sneaking in there... It doesn't really matter what it is, but there's all these little bits and pieces that you need to glue together to actually install your app.

Think of every installation page you've ever been to for a project. They kind of skip over where you've gotta cluster from, how you set up DNS, Cloudflare, anything like that, and they just go "Oh, just run this one simple command", and they've kind of left you high and dry, because there's really a lot more to it... So what this lets us do is take all of that logic to actually deploy your app and ship it to customers, ship it to people so they can use it. And then you can just run a command, like porter install, and you don't have to know very much in order to use it.

**Mat Ryer:** Yeah, that sounds great. So you can use that then to really deploy anything? Is this what you mean by "It can do lots of different things"?

**Carolyn Van Slyck:** Yeah. So we've deployed virtual machines to DigitalOcean, Kubeflow and ML pipelines to Azure... People are using it with AWS, with their Kubernetes clusters... It really doesn't matter what buzzword you put inside of it, it can ship any buzzword. It's really useful like that.

**Mat Ryer:** Oh, that'd be a great strapline for underneath the title on the website. "We can ship any buzzword to any other buzzword." \[laughter\]

**Carolyn Van Slyck:** I'm not sure my PM would appreciate that, but luckily he's not here to censor me.

**Mat Ryer:** So that's interesting then, you mentioned a PM... How did the project start and who's involved? How does it run? It's really interesting... Because this is open source, isn't it?

**Carolyn Van Slyck:** It is. It's all open source, and it was actually developed in open source, collaboratively with other companies. Microsoft, Pivotal, Datadog, Docker and a couple other companies got together and said "We wanna solve this problem, of shipping not just an application, but the deployment logic along with it." And they came up with this specification called the Cloud-native Application Bundle specification... And I never wanna say that again, because it's too much. And they brought me in, and my friend Jeremy Ricard to consult on it and give our opinions on how the spec is shaping up and could someone use it... And we just \[unintelligible 00:10:40.15\] to be honest. Like, I flew in, I met them all, talked to them and said "Well, I have this problem", but I felt like they defined a runtime that said "This is how technically we're gonna line up all the pieces. Put shell scripts in Docker. Magic." But I wanted something that a user like me, who has been dropped into terrible situations before -- one time I was on-call at Rackspace for their documentation website... And I'd never used the site, I'd never deployed the site, I don't know how to fix it, I don't know the tech it was on... I think it was a combination of Ruby and other things like that... And it was a custom app I'd never see before. And they were like "You're on-call for the next week. Have fun." And with something like this, I could have actually managed that a lot better than just scraping through a repository and figuring out just how screwed I am.

So I loved the idea of the spec, but didn't see a good way that someone who wasn't familiar with it would be able to use it. So Jeremy and I decided "We're gonna make a tool that kind of means you never need to say the word CNAB again." You don't need to know what a bundle is, or anything else, and you can just focus on "What does my app need?" Because that's my thing... I really care about usability, and things like that.

\[00:12:01.20\] I'll probably never be taken seriously as a developer, because that's where I concentrate all my time, is trying to ease friction and make it so that people can -- their intuitive way, the way that they wanted to try to do it the first way is probably actually the way it's gonna work, if that makes sense.

**Mat Ryer:** Yeah, it does make sense... And actually, I think it really resonates with me that user experience - we think of UX sometimes as just the frontend. Sometimes we even think of it as just the CSS, just the thing that makes it look a certain way. But the user experience is really much deeper than that, and should go throughout the system. Its influence should be felt that far.

**Carolyn Van Slyck:** Yeah. I think the word "user" throws people off a lot. I like to think of it as people experience. If there's a person somewhere in a process having to make something work, it doesn't matter if they're the systems administrator, or the person on the other end of the site, or the developer who's tasked with dealing with these APIs maybe during the CI/CD pipeline process. All of those people should agree that the process doesn't suck, and doing this isn't awful, and that people listen to their feedback on how to make things fit what they were actually trying to do, instead of forcing them to fit themselves to the solution you envisioned.

**Mat Ryer:** I think the project is all the better for that mindset, and you can tell, when you look at Porter, as an example, you can tell it's had that kind of attention given to it... And similarly, some projects you can tell they've been designed the other way; the concepts are leaking out because of realities underneath. You can understand how that happens... But you're right, I think any project is gonna be more successful when you think of it from -- it's that empathy thing with the people that are gonna be using it.

And we do sometimes forget that APIs are used by people. Runtime of course is a computer that's doing the actual talking, but when we actually consume that API - we're people, aren't we?

**Carolyn Van Slyck:** Yeah. You just have to be aware what the blast radius is, I guess, of everything that you're doing.

**Johnny Boursiquot:** So my first impression of this project -- well, let me take a step back. I guess I've already had a first impression, but I'm trying to contextualize it, so hear me out. Hear me out.

**Carolyn Van Slyck:** Yeah.

**Johnny Boursiquot:** If I'm used to packaging, or -- in my ecosystem as an SRE there's different methodologies, there's different technologies for certain things, different concepts or philosophies for packaging and shipping an app; the broad term of shipping an app. Some of the tools in our toolset includes things like CloudFormation, Terraform, all these kinds of tools... And I'm sort of seeing a bit of that in here, but I'm not sure how tightly those concepts are. I'm trying to wrap my head around not just Porter, and there's a similar project called Duffle, I believe, that are based on the CNAB spec... So I'd really like for you to help me understand what problem does CNAB as a whole solve, and then that informs how I think of tools like Porter and Duffle and whatnot.

**Carolyn Van Slyck:** Yeah. I think the one thing that always helps me understand this and explain it is that Porter isn't replacing any one of the tools you use currently. It's a packaging format that allows you to bring them all together in a way that is much easier to use.

I'd like to walk through an example of what something looks like without CNAB, without a bundle helping you, and then what it could look like inside a bundle, because I think that'll help answer the question of "Where does Terraform come in?" or things like that.

**Mat Ryer:** That sounds great. Could you just clear up what's CNAB, just for anybody unfamiliar?

**Carolyn Van Slyck:** Oh, sorry. Cloud-Native Application Bundle. It's the specification.

**Mat Ryer:** Right. So that's the spec.

**Carolyn Van Slyck:** \[00:15:56.19\] Yeah. We have a specification so that if you wanted to make your own -- for example, Datadog has their own tool similar to Porter that they use in-house, that's highly optimized for what they do... And the bundles that they create could be run by other tools that understand this specification as well. And it just helps you avoid lock-in, to be honest, and also customize it to what you're doing, because there's no one-size-fits-all for some of these things. People have very specific CI/CD pipelines, and if you can work with it, you can make something a lot better but still have it be usable, so like pull in a bundle that maybe Microsoft or Google or someone else published, and I could still use it in my own pipeline.

So let's say that I'm coming onto a new team and I need to be able to support this application. So they go "Okay, don't worry about it. We have..." I hear this a lot, and maybe you're really cooler than this, but what I've seen at companies I've come on to is we have like a DevOps repo, or maybe a directory inside their repository that has essentially scripts and markdown files that describe how to support it, how to do new builds, how to cut releases, how to push out hotfixes, all sorts of things.

So you're like, "Okay, first of all I need to find this repo", because you never know where it is. It's always somewhere, but it may not be in the obvious place. Then I need to clone it, hopefully I have credentials to actually clone that repo... I define that magic directory that says "This is how I should do all this", and then if I'm lucky, there's instructions. Let's go with the lucky path; they're like "You need to have installed on your computer Terraform this version. You also need to have Kubectl this version, and Helm this version." If you're really lucky, they tell you the credentials you need to access, what all these are gonna work with, like the destination cluster where you're deploying.

Then they say "Okay, now I want you to run terraform apply." They may not tell you how to use Terraform, you just kind of have to know... \[laughs\] And then the steps just keep going like that, and you're like "Okay... Well, actually I needed these three environment variables set, because they assumed I knew how Terraform was gonna authenticate, or how Kubectl was gonna work. Oh, I should have set the kubeconfig environment variable; the context should have been set to this." If all that is mumbo-jumbo it doesn't matter; the idea is it is mumbo-jumbo. You've got all these things that you need to keep in mind about the different tools. And sometimes when you have different tools, you have hand-off points between those tools.

So maybe I lay down the infrastructure first with Terraform, or ensure it's in its proper state, and then out of it I may get a database connection string, or something like that... And I need to now get that into a Helm variable, so I can use it in my .tar when I deploy my software, so that my software can connect to the infrastructure that I've laid down. And so these -- you end up usually with Bash scripts that end up orchestrating, laying some things down, maybe running some tests to make sure that DNS or something is actually resolving, and then scraping environment variables or getting things together so that you can pass information from one step to the next.

It's a lot to piece together, and even if there are scripts, you don't always know which scripts to run. Oftentimes scripts are decomposed in a whole bunch of them, and then if you know, there's one magic script that handles maybe chaining them all together... And it can be very intimidating, especially if it's 2 AM and the first time you've ever seen this repo is because you just got paged. That's the terror, and that's what I've experienced, personally.

And someone did a ton of valuable work that we don't wanna throw away, we just wanna build on. We wanna build on these Terraform scripts, the Helm charts, all the Bash scripts... Because someone has figured out how this should work. But what we'd like to do is take that experience of piecing it all together and following documentation and knowing which scripts to run, and bring it into a way that's consistent across toolchains and environments.

\[00:20:12.27\] So I could change this whole thing to "We store all of our software and their deployments in a Docker registry." Docker Hub - we have something internally. So I could go there and just look at a single page and see "This is all the things that I could deploy." I could deploy our team blog, I could deploy all of our cool microservices, things like that. And then with one command, I could say "porter explain", and I could give it the name of one of those bundles. We'll just say WordPress for the moment. And it would tell me "Great. WordPress needs a kube configuration file", and it could even have a note to say where you could find it. And it could say things like "Here's how you can customize the installation. You can set a title. You can change the admin password. You can seed it with a bunch of information from here. Install these six plugins by default." Things like that. So I can read it and go "This is everything this bundle can do, and this is how I can change what it's gonna do when I try to run it."

So then let's imagine - fast-forward, I'm doing the 2 AM patch and I need a bump from WordPress 1.1 to 1.2. I could run porter upgrade and then give it the new version I want, and it'd be able to reuse everything it had done previously, any parameters that had been customized, and then just change the versions for me... And I didn't have to read extensive documentation.

Once you've learned Porter, what's kind of neat is that if I go to another team in my company and they also happen to use Porter, that 2 AM hotfix looks the same, even if one team uses Terraform and one team is actually Windows-based and has PowerShell, and Chocolatey, and all sorts of other things involved, it doesn't matter. It's gonna look the same, because the tech stack, and all those great scripts and tools and everything else are actually packed inside the bundle.

I don't know if that helps... I outlined the differences of what it could do... But Terraform doesn't go away, and all the domain knowledge you have about working with these tools is just built on top of.

**Johnny Boursiquot:** Right. So if I understand this correctly - and great explanation, by the way; that totally makes sense. If I understand, what that gives me then is basically - it takes the knowledge of how to use all the different pieces of the puzzle to bring something together, and then what sequence, what information you're gonna need for each piece of the puzzle, right? And it just basically lays it all out for me. I could just run one command and it just takes care of everything for me in the right sequence, and telling me what it's doing along the way, and if I need to understand what it's doing, I can do a porter explain and it tells me exactly what makes up the bundle, what each of them is gonna need, what should I go find elsewhere, I assume... So if I need credentials for something, it's gonna tell me "Hey, this particular step requires these things. Make sure you have this and that setup, and whatnot..."

So is the design to just do a full automation, just a full run-through once you run the install, or during the process should it pause and say "Hey, you need this information. I couldn't find it", or something like that. Is there any interactivity?

**Carolyn Van Slyck:** Yeah, it tells you upfront everything you're going to need. So you won't be surprised 30 minutes in that you need a GitHub token, and then you're like "Oh, shoot, I don't have it." It gives you all that info of what you need upfront... And it also gives teams a way to store that securely. So you could have a team, like HashiCorp Vault, or pick a cloud, pick a vault, it doesn't matter - you've got a place where you can put your secrets and share it as a team, and then you could associate it and say that "In the dev environment we all use this set of credentials when we install things." So you don't have to run around and try to find all of them yourself.

\[00:24:01.27\] Some things you don't reuse between people... For example, if I actually had AWS creds, I had Carolyn \[unintelligible 00:24:08.01\] Johnny, you wouldn't be using my AWS creds; you'd be prompted to find your own from somewhere, like look deep inside yourself and find some creds... \[laughs\] But otherwise you can share a whole bunch of other information with each other and reuse it across team members, so it's easier for one person to step in for another without having to, again, have all this operational knowledge - I think that's what it comes down to - and reducing how much you need to know about how the sausage of your software was made.

**Johnny Boursiquot:** Well, it depends on which side of the bread you wanna butter, right? So this could be the tool for those who don't know how the sausage is made, or don't care to know how the sausage is made, as long as the tool just does the thing that it says on the tin.

**Carolyn Van Slyck:** Yeah, that is the idea. And it depends on who you are. Let's say for example that I'm a mega-corp, and I have a super-invasive IT who wants everyone to be the same, and use the same tools, and use the same version of the tools, and I wanna know what is being used for example by everyone. They like this because there's things like supply chain security baked into this, where we're validating digests on everything, checking checksums, and ensuring that what we built in CI is what we're deploying in production. So they care about that kind of stuff, and being able to see what people are doing, and have way too much control. Like, that's not me personally at heart, but I know that that's who uses it a lot.

What's kind of fun with small side projects is - I don't know about you, but I have big, huge ideas, and I'll work on it for two weeks. And during those two weeks, I will understand how that cloud provider works, and how their weird function as a service works, and all sorts of things. And then six months later when I haven't touched it, I don't remember how any of those things work... And to be honest, most of it has probably changed, and I definitely don't have the right version of whatever command line tools and libraries and things need to be installed on my dev machine, because I've probably wiped it since then.

And what's kind of fun is that if you took advantage of the time when you understood it to put it inside of a bundle, like automate, whatever... You needed to just say "Deploy a function as a service", put it in your bundle, and now six months later I can have total amnesia, I have no idea how this works, and still run an install or an upgrade or incrementally work on the code and have completely forgotten how the actual infrastructure works underneath it... Which - you know, maybe shame on me for not always remembering these things, but you know, side projects being what they are, it's actually incredibly helpful for me to not lose progress every single time... Because I've gotta get back up to speed on how everything was actually put together.

**Break:** \[00:26:58.10\]

**Mat Ryer:** For me, even if I'm using the exact same technology, with the exact same versions and everything, sometimes they'll just be like "Oh, there is a secret that I have to have, or it doesn't work." And if it is a side project, or if it's quite a young project, sometimes you wouldn't have hardened to that experience; if the secret is missing, you might just be getting a panic somewhere, you might just have strange behavior. So yeah, that thing you say about "Take advantage of the time where you know it" - it's a bit like when you make notes in a meeting; you're making those notes at that time, because that's where all the information is fresh, and later it's much more difficult to kind of retrofit that, isn't it?

**Carolyn Van Slyck:** Yeah, you often never get those little things back, and you repeat the same Google searches six months later, and you find your old posts on Stack Overflow, and you're like "Oh yeah, I maybe knew how to do this once..." \[laughter\]

I mean, it doesn't get rid of the hard part - you had to know it at some point; there is no magic. You had to figure out how to automate it, which is always more difficult than doing it manually, in a piecemeal sort of fashion as you discover it... So that hard work is always there. What it's doing is saving that hard work in a better format, so that it doesn't reduce over time. You don't lose little bits and pieces of "Oh, and I should've called this, this and this." The documentation is there, and the documentation is one where you try to help yourself preserve all those things that you've learned... But if you're actually able to bake it into something that every single piece about it is automated, then there's nothing to forget.

**Mat Ryer:** Do you recommend that people start off with Porter, even for side projects? Or is it like you do it manually and fight with the system, and then once you know what to do, you then would bring Porter in?

**Carolyn Van Slyck:** I think that's like test-driven development - different people do different things. My co-worker makes the bundle first, and to be honest, he's more successful than I am at managing anything in production... So that's probably the way to go, because you can iterate. But to be honest, I feel like when I'm learning how to deploy a new thing - because I don't normally support things in prod. I write open source software, and I make dev tools, and things like that... So for me, the process of figuring out and reminding myself "Okay, this is how I spin this up and secure it for real", not just like dev laws... Like, actually securing something - it's usually this iterative process where it's me and a doc site, and I'm going over maybe one command six times, trying to get it right... Like, I don't want a bundle in the way... I definitely don't want it checking 15 things to make sure that they were done properly before doing that one command I'm interested in... But once I've got it to the point where I've gotten it to work once, I'll stay awake for the extra hour and put it in a bundle, and be like "I've got it figured out", and lock it in before I forget it all.

**Johnny Boursiquot:** So what does a -- if you allow me to go into the weeds a little bit here... What does Porter work with? Is it like Yaml, JSON? What does a Porter file look like?

**Carolyn Van Slyck:** Yeah. You're gonna hate me... At the moment it's Yaml. I've had so many requests to have it be more programmable, so that you could put your own language in front of it... Lua was one that people were kind of interested in; there was a couple other different things that people wanted to program it in... But we had to be realistic based on how many people were working on it. This is Carolyn waving her hand right now; you can't see this on the podcast, but this is the person who's writing it and supporting it... \[laughter\] So I had to focus on what would get most people working and successful, and then those really motivated people who love Lua or various things like that - maybe they would contribute instead some of the hooks and things.

\[00:31:53.02\] I've had a lot of contributions that way, of design ideas, so that I'm able to put in the groundwork for where someone could contribute these things later and not have it be like a massive rewrite on my part. So where I can, I get a ton of feedback from people who really care about this, and I make sure that if they had time later, they could come in and add a plugin, or something like that to make it automatable.

**Mat Ryer:** That's interesting. Johnny, you love Yaml though, don't you? You're basically a Yaml engineer.

**Johnny Boursiquot:** Oh, yeah. That's just pretty much what I do all day...

**Mat Ryer:** To you, Yaml stands for "Yes! Another Markup Language." \[laughter\] Yes, exactly. I have it in my coffee in the morning, for lunch, before bed... I mean, it's great. It's great.

**Carolyn Van Slyck:** I always feel like I have to apologize, whenever I use Yaml. I mean, it's so cool these days to hate on whatever it is. Who knows, maybe I should have been using Scheme, or something.

**Johnny Boursiquot:** No, it's fine, it's fine... We need to get over us. We need to stop complaining about Yaml. It's fine.

**Carolyn Van Slyck:** I'm more excited that it works... But yeah, it works, and it works with Yaml. \[laughs\]

**Mat Ryer:** To be honest, it's a very pragmatic choice though. If you're talking about meeting people where they already are, I can see why Yaml actually is the choice that should be made. I liked what you said, Carolyn, about you've kind of allowed it in the design somewhere, you've kind of allowed this idea that maybe people could extend this in some way and do different things.

**Carolyn Van Slyck:** Yeah.

**Mat Ryer:** And I think that's quite an interesting idea, because often when we're designing systems, just by making different choices when you design API's and implementations actually, you can enable future things like that; you can make things pluggable with just that slight bit of foresights. But of course, you can go too far with that, too. So how did you strike that balance? Did it sort of just come quite naturally? Because this is an abstraction anyway, so maybe it's okay, but how was that design process, when it came to implementing the spec? There must be lots of choices you've got to make.

**Carolyn Van Slyck:** Yeah... I think the first decision was "Do we want to be extensible?" And right off the bat, I did not wanna make a product that only worked with the things I knew, in the ways that I was comfortable doing them. For example, Microsoft was paying me to do this, so the obvious choice that I was definitely being told by people who pay me money - it should be fully integrated, first-class experience for Azure, for example... And while that sounds really cool, I wanted someone to be able to have it work with a $5 droplet on DigitalOcean, or something like that... Because I'm cheap, you know? And maybe somebody else has the Google free tier, or something like that. I wanted it to be able to work with all these things. I knew I couldn't write all those things, and I was never going to have the domain expertise and all those various things to be able to do those well. So instead, I told my boss "Oh, it will be fully integrated with Azure", and then just quietly said to myself "...and anybody else on any cloud could write the same thing I did." I don't have any special, privileged access because I wrote the tool. Everything goes through the plugin system, everything goes through the mix-in system for authoring, so everyone's on equal footing, regardless of what you wanted to integrate with the tool.

**Mat Ryer:** Right. So that design is dogfooded by you first, and you know it's got a good chance then of also working... I think that's a great approach. I like the fact that you sort of have smallprint when you're talking to your manager... \[laughter\] That's great.

**Carolyn Van Slyck:** It's very adversarial sometimes... \[laughs\] No, no, it's just there's always a difference between -- especially in open source. If you're being paid to do open source, there's always this internal friction of they're paying you to solve some problem with their cloud, that if you follow the dots long enough, goes back to your salary, and justifies paying someone to work in open source to begin with. And that's not evil, okay? We need that to support open source.

\[00:36:03.09\] But as an open source maintainer, you always have to be juggling "What's the best thing for the community? What's the best thing for this project long-term? How can I satisfy both of these forces, which are very legitimate on either end?" It's just somebody has to be making these priorities. Now, I have a PM on my project, it's \[unintelligible 00:36:20.17\] and he works at Microsoft, and he's able to give me all sorts of information about what Microsoft needs. So I need to be doing my own PM work, where I'm talking to end users who don't work at any vendor. I need to be talking to the person who's submitted me a bug report and ask for something really weird, and I have no idea what they're doing or why, and I have to piece together and figure out as a whole what the community is doing. Because in open source you don't usually have this nice, orderly feedback process. You've gotta go out to people and really tease out what they're doing and how they're using things... So you have to be your own PM, I guess, and then be really good at justifying still doing those things to your boss.

**Mat Ryer:** Do you ever wish it wasn't open source? Do you ever wish you could just build it for one specific case and do that really well?

**Carolyn Van Slyck:** So I've done that with some things... I made a pony cluster that transcodes all my videos. I've transcoded hundreds of videos and put them up on Plex using a little home cluster... That's all written in Go, and I've had so many people ask me, "Please open source this..." And I refused, because I had no desire whatsoever to support it, and I didn't want it to do anything other than encode my movies. But this didn't fall into that category. I wanted something to work for everyone. I can only design what works for me, for the most part. Some people are really cool, I'm sure they can pull out of their hat what other people need without talking to them... But I can't do that. So by making it open source, I kind of put a lemonade stand out on the driveway, and I'm like "Come to me and tell me how you want it to work. What do you need? What are you doing with it?" so that I can evolve a design that didn't just work for me.

I can code so much more quickly if it wasn't open source, and it is frustrating, because you're like "I could have finished this thing two years ago." But what I would have finished wouldn't be what anyone wanted to use, so what's the point? \[unintelligible 00:38:26.12\]

**Mat Ryer:** That's great. And the project has - I saw on the GitHub repo - 45 contributors. That's a lot of people.

**Carolyn Van Slyck:** I know...! I'm so proud of that. So one of the things I really love to do, and I do this with Write/Speak/Code, and I do this with Women Who Go, sometimes with gophers too, where I like to get people into open source. That's the funnest thing about being a maintainer; just like I wanna be a manager so I can hire people, I wanna be an open source maintainer so I can bring people in and help them have that first project that lets them safely learn Go, or how to do pull requests, and Git, or learn cloud-native things like Docker and Kubernetes... There's so much gatekeeping going on that's just involved with "I don't know the right people to get involved", that again, I like to put something out there and just like -- put as many welcome signs as I can to be able to go "I'll mentor you in this." We have a Go CLI which is one of the easiest things to get start with in Go and in open source projects, because it's usually small scope, very straightforward, and doesn't interconnect with a lot of other things. And so people have responded to that, they've taken me up on that offer, and helped out with a whole bunch of things.

It's kind of funny, Porter actually has more regular contributors from the community than from any one vendor, or like a big company like Microsoft. It's mostly an end user community project.

**Mat Ryer:** \[00:40:00.10\] So of course the companies - and particularly your company - benefits from all those contributions as well. And that must help your -- when you come to sell internally that "This is how we're doing it", that must help your storytelling, doesn't it?

**Carolyn Van Slyck:** I think so. I mean, there's always a learning period for a new contributor. It depends on where they're starting from, where you're putting more into them than honestly you're getting back into the project... And we have to just acknowledge that's gonna happen, and then maybe be realistic with how much time you have to give people... But maybe it's 3 PRs, or 5 PRs, or maybe it's just one, it depends on the contributor... Where you're putting more in and you're mentoring them and you're trying to help them get excited, and you want them to have a good experience... But eventually, you're not actually giving as much, and you're getting a steady stream of pull requests and fixes.

I've had a couple wonderful people, like Thorsten Hans, who has been contributing to my project enough that -- he was able to help us tackle V1 milestone issues... And these are things that make or break whether or not we're gonna ship this summer, for example... And he's knocking them out of the park, and I'm really excited. So you know, there's a little bit of time where you're like "Will they stick with it? Will they keep doing this?" and now they're like "Yes, they're here every week, giving me new things to review..." And I didn't need to make it happen, I just had to lay it out and go "This is what it should look like." And you put like a message in the bottle, in your backlog, and someone picks it up... And that's really great.

**Mat Ryer:** Nice one. It sounds like a great project for anyone interested in getting involved. I feel like they ought to head over, because not all open source projects are that welcoming to people new... So I think that's great.

**Carolyn Van Slyck:** Yeah. I would love anyone who's interested -- it's Porter.sh/contribute, and that'll walk you through what are the types of things you could do on the project, and how to get started... There's a tutorial that will walk you through making your first change to Porter, so you can understand it, and there's little tutorials that'll explain what a bundle is... Because I've been talking very fast and very excitedly, and maybe none of it made sense, but there's things on the website that kind of lead you through what this works at at a pace that you're comfortable with.

I'd love it if people were interested in contributing... And like I said, it's good for people who don't know Go, too. You can learn Go and do this at the same time.

**Break:** \[00:42:25.18\]

**Mat Ryer:** Well, we should talk a bit about Go, I suppose... It is after all a Go podcast. What was behind the decision to use Go? It is almost like the default language now for these types of tools, but what was it in particular for you that made you excited about using Go for this?

**Carolyn Van Slyck:** What drew me into Go for my very first project, and what I'm still using it for year after year, is to make a single binary that I can distribute on any platform, and have it run my command line tool. That is so valuable to me, again, because of the user experience. I'm not asking them to "First install Python before you can install my CLI" or something like that. I'm not knocking Python, but downloading a binary is a lot less of an ask for people, especially if you're asking them to juggle versions, and things like this... Go solves that problem really well.

**Mat Ryer:** \[00:44:32.17\] Yeah.

**Johnny Boursiquot:** Yeah, we won that game/battle.

**Carolyn Van Slyck:** Definitely.

**Johnny Boursiquot:** \[unintelligible 00:44:36.12\] We won that one.

**Mat Ryer:** \[laughs\]

**Carolyn Van Slyck:** It doesn't hurt that the Docker libraries -- for example Porter is just right up there intermashed with Docker, and all of that is written in Go... So you kind of get first-class library support, as opposed to eventual translations to other languages. That's usually the second reason why I pick it, even for backend things.

**Mat Ryer:** Right. So I wonder then, since it interacts with the other tools, does it do that just by treating them as external commands through the command line, or do some of those mix-ins import the packages properly and it's a much tighter integration in that sense?

**Carolyn Van Slyck:** It depends on what it is I'm integrating with and who I expect to do the integration.

**Mat Ryer:** Ah, interesting.

**Carolyn Van Slyck:** So my integration with Docker, for example, is written by myself, and it's maintained by other maintainers of Porter. If someone else wants to contribute to the project, that really isn't where they're contributing. It's kind of code that you write once and it kind of just sits there and gently settles, like a foundation... Whereas other things, like plugins or mix-ins... Mix-ins - I've said this a couple times and I apologize... It allows you to quickly use an existing tool like Terraform, or maybe your cloud provider's command line tool, like GCloud, or AWS, or Azure, inside your bundle, with a lot less work. It just does a lot of the plumbing for you by default. And for those, I expected anyone to wanna be able to write them.

So a mix-in can actually be written in any language, you just need to compile it to something that's executable and can talk over standard in and standard out.

**Johnny Boursiquot:** Nice.

**Carolyn Van Slyck:** So I wanted the barrier to entry to be extremely low for that. I mean, I know some things are super-cool, like gRPC... Like, oh my gosh, I should have written it in that. Everyone tells me that. But I didn't want to prevent someone who is more comfortable using other languages, or to be honest, who wasn't keen on trying to figure out what gRPC is, to still be able to work with this. It didn't need to be that complicated, basically.

Plugins - not written by as many people. It's just not as common to wanna integrate Porter with a different storage backend, for example. There's only so many... And so those are written with, again, binaries, but they assume that you can talk Net RPC, for example.

**Mat Ryer:** Right, okay.

**Carolyn Van Slyck:** So it is a little all over the place from that standpoint, but each person who works on any one of these things are not the same person. So I definitely tried to be like someone who just wants to be able to use a random one-off tool like GoReleaser or something with Porter should be able to do it in a couple minutes... And there's even templates... For Go, we give you a working mix-in that you can just replace whatever command line tool you're using, and you're up and running in 5-10 minutes. But they're probably never gonna write a plugin, so it's okay that they're different architectures.

**Mat Ryer:** Yeah, I think that's very interesting. A lot of people, I imagine, would want the tech stack to be consistent and try and then corral everyone into that, rather than this somewhat more flexible approach.

\[00:47:49.12\] I have a project that kind of takes the same approach... And similarly like with gRPC, I wanted to try and write a plugin for gRPC once. In order to do that, you have to know how to do it, because the actual tool sends you a gRPC protobuf package through standard in. So you really have to be in that world to take part in that, and it is non-trivial. Are mix-ins just like JSON lines through standard in and standard out? How do they actually communicate in and out?

**Carolyn Van Slyck:** Yeah, yeah... Okay, so - more hate. It's more Yaml... Because I wanted it to look like -- if we looked at a Porter Yaml file... Okay, it's in Yaml, and it has steps that say "Terraform is gonna do this little blurb of logic, and then we're gonna run a magical Bash script that has a bit of glue, and then we're gonna call off to Kubectl, or some other tool, maybe GCloud or AWS." And I wanted the mix-in author to be able to look at that file and get input that looked like that file; so they didn't have to translate it into something else. Whatever they saw in that file is what they were gonna get as standard in, essentially.

Then they execute whatever that command is... So if we were trying to do a Terraform apply, they would essentially go "This is the Yaml", and that translates to a command using the Terraform CLI that says "apply."

**Mat Ryer:** Nice. I really like that, actually. You know, that's another thing I think that speaks to your focus on the user experience. It's like, this is familiar now, because you've seen it in the Porter file... And now you're writing a mix-in, and look, you get the same thing. Honestly, little things like that that just reduce that cognitive load I think really help projects like this. Nice one.

**Carolyn Van Slyck:** Yeah. I can't stress enough -- and it doesn't matter if you're running a command line tool, you're working with an API, or you're just talking about the general behavior of a system; if there's some existing analog or something that your user has already learned, take advantage of that, build on top of it. Have them only learn one thing, or come to your platform and already be 90% of the way there because you're building on concepts, behaviors or syntax languages that they already knew. Then we make them come onto your platform and feel like "I've got this from the start." You never wanna be bragging about, you know, the slow on-ramp to learning your tool, or something like that. It's not a badge of honor, for sure.

**Mat Ryer:** Yeah, you don't want PorterML when you've got Yaml... \[laughter\]

**Carolyn Van Slyck:** Yeah.

**Mat Ryer:** That also applies more widely to Go, when you think about interfaces in the standard library. If there are concepts that have been modeled already like that, that people are familiar with, even if it doesn't quite do exactly the thing you want, it's worth trying to see if you can use those types. Some of them are really kind of no-brainers, but anytime I think you can be self-similar and familiar for people I think it's a great goal... Even in this case, you end up with slightly different tech for the way mix-ins and plugins work, it's completely justified when you think about the audience, and I think that's important.

I notice you said you're kind of leading towards a version 1 release... Some projects take the approach of really rushing to v1 and getting it out there... You're taking your time. Why is that?

**Carolyn Van Slyck:** Well, I'm terrified of commitment... \[laughter\] So whatever I put out as a 1.0, that is how it's going to work for the majority of people... And I won't be able to make changes. So that was one piece. Another piece is we were very naive when we started. We didn't understand how long it would really take to implement everything we wanted... Because when we started, we understood 20% of the problem. We thought we understood 100%. We understood 20%... And we based our v1 off of "V1 is gonna show our vision..." I mean, it was very pretentious... \[laughter\] But we wanted v1 to be that.

\[00:52:03.22\] And then we finished the 20% and we went -- during that period of time we have learned so much, one from using the tool ourselves, and getting feedback, and hearing all of the different ways people thought to use the tool which we did not... And we realized what the real 100% was. And it's not really the real 100%. The line keeps moving forever... So we very quickly had to decide that we're going to do a v1. And what we wanted to settle on was it had to not have horrible hacks or bugs or anything like that for the 80% case. We expect people to use the tool in a certain way, and we feel pretty comfortable saying how they're gonna use it at this point through feedback... And there shouldn't be weird things where we're like "Oh, well you just need to do these three things that are not intuitive at all, and then you can accomplish what you wanted to do." But if 8 out of 10 people wanted to do that thing, it needs to be in the v1. It needs to actually just support that, for the most part. And then any awkward bug that have been lingering - we'd like to clean those up, so that you can have something stable.

People are using it in production right now. They just stick on the same version, and know what bugs to avoid... But that's not really great, so that's kind of our goal for v1. I don't think I've ever released a v1, to be honest... I've always worked on something post v1, or so early it stayed on like 0.1.0 for three years... So it's all kind of new to me. I don't know if you have different ideas about what a v1 should be...

**Mat Ryer:** Well, I'll tell you, I love the fact that you care enough not to just do a v1 too soon. One thing people need from these tools is stability, and a bit like how Go has the backwards-compatibility promise. Tools like this that do that as well mean that you can rely on them and you can build them into your production workflows... And I think that's very important. So that was kind of great to hear that.

And the other thing about only understanding the 20% - I have a theory. If we really knew how much work was involved in the stuff we're doing, we wouldn't do it.

**Carolyn Van Slyck:** No, we wouldn't.

**Mat Ryer:** It's too hard. You need to have some level of ignorance. Sort of ignorance-driven development, where we're like "Yeah, it's just a small thing that we're gonna do, and that's it. We're done." We have to keep believing that, otherwise we'd never get anywhere.

**Carolyn Van Slyck:** I mean, I think that's what keeps us as programmers. You always think "Oh..." You somehow manage in your head to boil it down to "If I just know how to make the system do this one thing, everything else is boilerplate, or whatever. QED the rest of that program. I can figure it out." And we're always wrong, and we estimate wrong every single time because of that, but... I agree with you. If I knew that getting something to work would actually be a ten-year effort before it was the amazeballs thing that I had in my head, it'd be too daunting.

**Mat Ryer:** Yes... \[laughs\]

**Johnny Boursiquot:** Hey, you can stay on pre-1.0 forever, I mean... You have to look at Terraform. Goodness.

**Mat Ryer:** Is that still \[unintelligible 00:55:08.13\]

**Carolyn Van Slyck:** So many companies though really push for 1.0. They're very concerned... In government, and on other applications, they wanna see some assurance that 1) some level of quality control has happened and there's not bugs lurking for them, and 2) that we actually think it's good for being in production, and we'll stand behind it... And no matter what I told people, they didn't wanna see a beta, or a 0 major on it. It was like an adoption blocker, literally, for people... Which is why we're pushing towards this faster.

**Mat Ryer:** Yeah, it's a tough balance to strike there... Well, it's that time again, everybody... It's time for Unpopular Opinions!

**Jingle:** \[00:55:54.19\] to \[00:56:12.14\]

**Mat Ryer:** Okay, Carolyn, do you have an unpopular opinion for us?

**Carolyn Van Slyck:** I do, I do. So being vague upfront... I think new contributors have a superpower that maintainers will never have for a project.

**Mat Ryer:** Hm, interesting...

**Carolyn Van Slyck:** Yeah. Digging into that a little bit... Think of the person who comes up to your project and tells you that it's wrong; it's not solving the same problem, or they don't get it... Just like Johnny giving me a little bit of grief at the beginning of the show, because even though I honestly tried to describe what Porter did, I missed connecting with him, right? And as a maintainer, oftentimes when you get this feedback, your first instinct is to be very defensive and go "Oh...!"

**Mat Ryer:** It's Johnny's fault.

**Carolyn Van Slyck:** Yeah, exactly. "Obviously, you're not doing the advanced, cool things that I'm doing", or something like that. You never know. But actually, as a maintainer, if you take every single one of those as an honest to goodness truth, you failed to communicate with that person... Example being I have a new user guide, a quickstart that gets them up and running. They run through it and they still don't get it. That's on me.

My landing page - someone comes to it, they read about Porter (or anything), and they go "When would I use it?" These are feedback that you can take and go "This is what I was missing", and you'll never see that as a maintainer. If you wrote it or you've been working for it a long time, if you're neck-deep in that project, you will never have this perspective, ever. And every single person who's willing to make themselves vulnerable and tell you that there's a problem, that they didn't get it - it doesn't matter; they may be a jerk about it, but think about that feedback. They wouldn't have said it unless you had failed in communicating somewhere. Or you legitimately had gaps, and things like that.

So I've been using that constantly to improve docs, add missing features, go "Oh my gosh, I never thought someone would do this..." And if I had the same five contributors to my project, day in, day out, for three years, would we have been more productive? Yes. Would we have gotten our mental model from "This is the 20% we need to do" to the 100% to understand what really is there and what we should have been doing and saying and communicating? We never would have gotten that.

Those new contributors are like your project's lifeblood, and you need it not just the first year, but every year for your project to understand where you could be doing better.

**Mat Ryer:** You make a great case. It's a difficult one to argue...

**Carolyn Van Slyck:** \[laughs\]

**Mat Ryer:** I mean, what we do is we test these on our @GoTimeFM Twitter account... So at some point we will check... But yeah, it is a great point. And I must say, the documentation on the Porter website is kind of surprisingly good for an open source project.

**Carolyn Van Slyck:** Thank you.

**Mat Ryer:** Yeah. You can tell this has been a focus. It's not just that it's got everything you need, it sort of like -- it looks good, it feels very friendly when you're there...

**Johnny Boursiquot:** It encourages contribution. It's like "Yeah... Now I'm curious. Hey, I wanna know more about this. How can I contribute something?"

**Mat Ryer:** Yeah, contributing is like the number three link in the site now. So it is like a first-class concern, isn't it here?

**Carolyn Van Slyck:** I mean, especially in an open source project, you really want people to interact with you. That's the only way you know what's going on in your community. There's no tracking in Porter, or most open source projects. You don't know who's using it, you don't know what features they use, you don't know if it's successful, if there's errors happening... There's a whole bunch of information that if you're respecting people's privacy, you have no access to... So you really want that open communication in whatever medium someone wants to chat with you, whether it's GitHub issues, or a mailing list or Slack.

**Johnny Boursiquot:** \[01:00:18.13\] So would you be open to having something that anonymously collected some usage metrics to know what the most used aspects of Porter are?

**Carolyn Van Slyck:** I'm a tinfoil hat person. I would never turn -- I work at Microsoft and I don't share anonymous information about my Windows computer, so I personally wouldn't feel comfortable about that. And I'm not sure that there are other ways that we could get high-quality information by doing usability studies, having people sit down and watch them use the project.

Every time I do a workshop, for example, we always have an extra person or two who's in the back, who's just watching where the stumbling points are, where people have trouble keeping track of what questions are being asked... And there are stealth usability studies. \[laughs\] I find that to be incredibly useful. As much as it's tempting to wanna have tracking information, I've never seen anyone respond to it positively. I think Homebrew tried to do that and there was a big brew-ha-ha. It's not worth the loss of trust...

**Mat Ryer:** No pun intended...?

**Johnny Boursiquot:** \[laughs\]

**Carolyn Van Slyck:** ...especially for a tool that deals with credentials. Porter at some point transiently does have Azure credentials, or Google credentials, or AWS credentials in memory as it's doing certain things; it's necessary in order to install things... And any sort of tracking or phoning home. I can't imagine that being okay.

**Mat Ryer:** Very cool. These stealth usability tests that you do - you don't sneak into people's houses, do you?

**Carolyn Van Slyck:** Well, I mean, maybe... No! \[laughter\] We went to DevOps Days Minneapolis and we ran a big workshop of like 100 people, and paid attention to where the slowdowns were, where people suddenly just got completely stuck doing install and setup... Or someone would write down what all the questions were, so we could look back and see what isn't clicking. Because usually with workshops we're running through our quickstarts, we're running through our examples... Like, this is a live test of our material, and wherever it's not working, we wanna know.

**Mat Ryer:** And I guess if these files end up being used in lots of places in other open source projects, you may end up with lots of Porter files around that are open source, that you would be able to potentially go and look at.

**Carolyn Van Slyck:** Oh, yeah. Yeah.

**Mat Ryer:** I'm thinking like a way to find out how people are using it and what they're using, and stuff. I don't know.

**Carolyn Van Slyck:** I've seen that sometimes... It's unfortunate in Porter's case, because it's deployments. And companies don't share that, to be honest. A lot of our users are in companies, so I've seen people's side projects of how they use Porter... But anything that a company is doing, it's on a private repo somewhere. You never know. But as a maintainer, people are usually very willing to show you anonymized things; when they're asking for help, ask them questions. "Who do you work for? What are you doing with this? What would you like to see it do? Can I see your porter.yaml file? Because I'll be able to troubleshoot this faster for you." No one has to share anything, but those are other ways that you can get a whole bunch of information that's super-useful without being shady.

**Mat Ryer:** Yeah. So people don't commit these Porter files in their GitHub repos alongside their code if they're open source then? Because I have a few projects that -- you know, I actually have little deploy scripts in there, and they of course require credentials, and most people won't have access... I like the fact that when I make changes to that, it's tracked, it's visible... I can either do PRs even, and have people review it... But also, it's tagged in a way to the various versions throughout history as well, so I can go and get a different version and I know how to deploy that version of it.

**Carolyn Van Slyck:** \[01:04:11.21\] Yeah. It depends on what people are deploying. I would love to see projects that distribute open source software, they distribute binaries or Docker files to also distribute a bundle that goes with it, that can deploy it. In that case, it's an open source project and you would see what the bundle looks like, which is great. But what I'm seeing a lot of people do instead is the author themselves doesn't know about Porter, does not have something like that. And it's a person consuming another piece of software who wrote a bundle. I feel like there's a bit of an adoption gap, which is why we don't see a lot of open source projects yet distributing their software with bundles.

**Mat Ryer:** Yeah, but if you have a project - I understand, like, if I have a website, say my own personal blog website that I've written obviously, because I'm a programmer and we write our own blog software... If I wanted to deploy that, I'm the only one that can do it; but if it's an open source project that's for writing blogs, I might want them to be able to deploy into their own, say, Google Cloud, or DigitalOcean, or whatever.

**Carolyn Van Slyck:** Yeah, absolutely. One bundle I've been working on, but it's kind of like a beast, is I like to be able to install Discourse with a bundle. I don't know if you've ever installed that yourself. There's a lot of infrastructure dependencies in there if you want a really nice installation of Discourse... Because you're dealing with CDNs, you're dealing with mail servers, you've got a virtual machine, there's some Docker containers thrown in... There's a whole bunch of stuff going on, and it's kind of hard to coordinate.

I would love to see projects like that - if people can make bundles and submit it to them, and be like "Would you be willing to--" I mean, Discourse gets paid to install their software for people... I think that's part of their consulting model. So maybe they won't be too keen on making a bundle and then giving that away...

**Johnny Boursiquot:** They're not making that easy... \[laughs\]

**Carolyn Van Slyck:** But in general, stuff like that I think would be really great. I just don't think we're there yet. I'd love to be there though.

**Mat Ryer:** It's exciting, isn't it? Cool project. I genuinely think this is right for a few of my projects now, having spent the time on seeing this.

**Carolyn Van Slyck:** Great!

**Mat Ryer:** Yeah. And I hope others will give it a go as well. Check it out at porter.sh if you haven't. Well, I'm afraid that's all the time we have... And that has really flown. I hope for the listeners that's also gone as fast, because I think that means it was useful, and informative, and brilliant. Carolyn, thank you so much for joining us today. We'd love to have you back sometime...

**Carolyn Van Slyck:** Thank you. Yeah, I would love to come back. I love chatting with all you guys. This is a wonderful show; I really enjoy listening to Go Time. It's kind of a starstruck experience to be on here, too.

**Mat Ryer:** Is it? \[laughs\] That's amazing. Great. Well, we're not used to people being nice to us. We don't know what to do. \[laughter\] Johnny, could you just offset that for me, please? Just give us a quick insult and that'll set me right again...

**Johnny Boursiquot:** Mat, you suck.

**Mat Ryer:** Thank you, mate. I appreciate that.

**Carolyn Van Slyck:** There you go.

**Johnny Boursiquot:** Alright, no problem.

**Mat Ryer:** Okay, I'm back. Okay, brilliant. Thank you. Johnny Boursiquot - always a pleasure.

**Johnny Boursiquot:** Likewise.

**Mat Ryer:** And Carolyn, thank you so much again. We'll see you next time.

**Carolyn Van Slyck:** Thank you.

**Outro:** \[01:07:25.06\]

**Mat Ryer:** I mean, it's such a cool project.

**Johnny Boursiquot:** It is.

**Carolyn Van Slyck:** I am terrible at selling anything. I'm always like "You do you. Whatever makes sense", and then I forget to actually explain when it would make sense...

**Johnny Boursiquot:** No, this looks really interesting. From my viewpoint, this is a -- like, I was aware of CNAB, but I was trying to place it, and then having concrete implementations of the spec... I think I'm like "Oh, okay, now I get the Why of this."

**Carolyn Van Slyck:** Oh, that's great.

**Johnny Boursiquot:** And I think this has definitely helped me -- now I have on my to-do list to check this out and also see if there are some ways I could help make the project better in some way. I'm looking forward to diving in.

**Carolyn Van Slyck:** Oh my goodness, I'd probably swoon if I saw a PR from you... Just saying. \[laughs\]

**Mat Ryer:** I would. Can you send me a link? \[laughter\]

**Jerod Santo:** I would also swoon. Three swoons for the price of one, Johnny.

**Johnny Boursiquot:** That's a lot of swooning.

**Mat Ryer:** I'll faint. I'll faint like a proper olden days person.

**Johnny Boursiquot:** Oh, swooning over some text? Okay... \[laughs\]

**Mat Ryer:** Yeah. Brilliant.
