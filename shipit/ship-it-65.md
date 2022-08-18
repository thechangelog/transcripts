**Gerhard Lazu:** So episode 51 is the last one when we had Tammer on. Actually, the first one as well with Tammer. We were talking whether Kubernetes is a platform. And what one of the people that enjoyed it the most was Jerod, and he said, "Hey, Gerhard, you have to get Tammer back."

**Tammer Saleh:** \[laughs\] Yeah, I totally bribed him for that. That's that was my fault.

**Gerhard Lazu:** Exactly. Exactly. Now, this week it's Jerod's birthday. I won't tell you which day, but it's a big one. So Jerod, birthday surprise. Tammer is back! \[laughter\]

**Tammer Saleh:** It's like the worst birthday present ever. \[laughs\]

**Gerhard Lazu:** It just so happened. Well, not if you enjoy it... \[laughs\] Jerod just enjoys these conversations, so let's make the best of it. Again, back of our minds - it's for Jerod's birthday. So here it comes.

**Tammer Saleh:** Happy birthday, Jerod.

**Gerhard Lazu:** Yes, happy Birthday. I still have to send the tweet out. It's in a draft. Thank you for reminding me. \[laughter\] So Tammer, what is new with you? It's been seven, eight months... What is new? And what is good?

**Tammer Saleh:** A lot of things are new and good. I mean, from a business point of view things have been just going wonderfully, which is - fingers-crossed, knock on wood, we were very worried about the economic downturn, but we haven't seen any signs of it. So that's been great. And also, just watching some of the technologies that have been evolving in the cloud-native ecosystem has been a lot of fun as well. I mean, one of the things that a lot of our engineers are really excited about, for example, is Sigstore, and the work that's been going on there. A lot of activity there. It's been very interesting.

\[04:18\] In terms of what technologies I'm still very excited about... I think I'm a bit of an outlier, because for me there's a lot of interesting stuff going on in the cloud-native world, but the two technologies that I tend to get most excited about are actually the eBPF stuff, all the different tools that are focusing on eBPF, and WASM, which is almost like a non-cloud-native thing to say, right? It's almost like "Oh, we don't talk about WASM in Kubernetes, because it's not really containers and such." But those two technologies have a lot of potential to open up a lot of interesting doors, a lot of different directions that both those technologies can go.

**Gerhard Lazu:** Right. So it's very interesting that you mentioned those two technologies, because in the recording schedule -- I mean you're listening to this I think at least a month after it was recorded... So tomorrow, Liz Rice and Thomas Graf, eBPF...

**Tammer Saleh:** Oh, really?

**Gerhard Lazu:** That's what's happening tomorrow. Yes. So it will be all about eBPF. So bang on the money. Thank you for confirming that. And WASM - it's really interesting. It's the second time I hear it in two weeks, and the last person I heard it from was like the last episode which was recorded -- no, the one before that; anyways, a recent episode. You wouldn't believe it - Gary Bernhardt and WASM. What the two have in common --

**Tammer Saleh:** Really?

**Gerhard Lazu:** Really. Seriously. \[laughter\]

**Tammer Saleh:** Well, I want to make it very clear... The fact that I'm excited about these technologies is not necessarily an indicator that they're going to be successful. I have a horrible track record of identifying successful products. I remember this company came by and was searching for developers when they were very small. I think they were searching for like their 10 to 20 next developers, so they were 10 to 20 people big... And I was talking to somebody, I'm like, "What are they even talking about?" Like, it's a blogging platform, but it's only 140 characters... There's no way that's going to go anywhere. It's a terrible idea. So you know, I have not been very good at identifying great technology.

I like to think about Nix, for example. You know Nix OS, Nix?

**Gerhard Lazu:** Oh, yes.

**Tammer Saleh:** It's a very interesting, very cool idea... With some fatal flaws, unfortunately, but it does so much interesting stuff, and it changes the whole game. And I like to think about how Nix is -- it's kind of like 1950's SciFi authors. Like, I'm re-reading Foundation, right? And their vision of the future was adorable, right? It's like, "Oh, yeah, I could see how this would work." Like, spaceships without computers, and you would actually manually align the stars and navigate that way. It's kind of cute. But you could totally see how that future could have been a reality. And to me, things like Nix fit into there. If Nix had one, arguably, Docker never would have existed, at least in terms of like an image format. So I don't know... eBPF, WASM - I think they're fantastic. Maybe that means you should not buy their stock. \[laughs\]

**Gerhard Lazu:** I think that while Twitter is great story right now in hindsight, and in retrospect, because that's what we're talking about... Tamar, not identifying Twitter, and not joining as engineer number eight or nine...

**Tammer Saleh:** Yeah, I saw the demise of Twitter decades ago. \[laughs\]

**Gerhard Lazu:** Exactly. Yeah. It was never gonna catch on. And even now. No, no, no. I think you're getting better at it, and let me tell you why. So after we had our conversation, episode 31, you mentioned Nix in that one. You mentioned Nixery.dev.

**Tammer Saleh:** Yeah.

**Gerhard Lazu:** \[08:09\] Off of that, I talked to Vincent. We have the Nixert.dev episode. Vincent Ambo from TVL. I switched my Linux workstation to Nix OS, and I love it. Homebrew - it didn't make it to my new Mac, it was Nix.

**Tammer Saleh:** I actually have that as a to-do item on my list, to get rid of Homebrew and move over to Nix for my local development experience.

**Gerhard Lazu:** Oh, yes. On a Mac. Again. That's just like, you know--

**Tammer Saleh:** Yes, on a Mac.

**Gerhard Lazu:** Exactly. Now, that was good... I mean, there was like some weird issues around -- for example, I always have to reinstall it for some reason, whenever I reboot. So just basically don't reboot your Mac \[unintelligible 00:08:44.21\]

**Tammer Saleh:** Small issues. I mean, it's fine.

**Gerhard Lazu:** Small issues, okay. So if you reboot your Mac, you have to reinstall for everything to start working again. I'm definitely doing something wrong. But on Linux, I've been loving it. Fanless AMD Ryzen 7, I think... Yeah, 5900, 16 cores, all Nix OS... Really, really nice experience. Everything is declarative... I love that world. So you're, again, right on the money with that.

Based on some recent conversations - you know, WASM and eBPF... I think you may be right there, again. Don't buy their stock, for sure. Not that they have any stock, but you know... Just to be clear... \[laughter\]

**Tammer Saleh:** Like I said, I think Nix's got some amazing things. I think if you're all-in on Nix and you're committed to learning the -- what's the name of the Nix language? The Nix Configuration Language, or something like that.

**Gerhard Lazu:** It's the Nix Language, yeah.

**Tammer Saleh:** Yeah. Then I think it can be really successful. The problem is that Nix is a great solution for a personal dev. It's a great personal choice as a developer, right? It's a bad solution for a wider team. If you've got a team of like three to five, and y'all agree, "Sure. We're going to go ahead heads-down into this Nix thing, and then we're gonna reap a bunch of benefits from it", that's okay. But I've talked to teams of larger, like a hundred to a thousand-person companies that have tried to adopt Nix across the board, and it's just too esoteric, it's too opaque, it's too hard for -- I mean, I don't want to say the average developer to use... Right?

**Gerhard Lazu:** I can see that. I can really see that. There's still some things which I struggle, and it's like, some things are way too hard... And I'm still waiting from a Nix session with Vincent, just like to figure out what am I going to do next... Because it's so complicated.

**Tammer Saleh:** Well, you need to reach out to the founder in order to debug your own system... \[laughter\]

**Gerhard Lazu:** Yeah.

**Tammer Saleh:** Yeah. Not a good sign.

**Gerhard Lazu:** Yeah. I'm very curious to hear how Mitchell Hashimoto does it, because I know he's all in on Nix OS for development.

**Tammer Saleh:** I did not know that. That's interesting.

**Gerhard Lazu:** Seriously...

**Tammer Saleh:** But this actually kind of proves the point. He is exactly the type of developer... And now we can say that - he's just a developer, right?

**Gerhard Lazu:** Yes.

**Tammer Saleh:** He is exactly the type of developer that would reap a lot of benefits from Nix. He just decides to go all-in on that, and that's great. I come from an operations background primarily, and so as an ops person, especially in the olden days, you used to use like legacy Vi instead of Vim, because you couldn't be confident that the workstation that the machine you were SSH-ing into had Vim. And you certainly wouldn't use like a highly tweaked environment... So Nix -- I think Nix is a great solution for application developers who, like I said, want to go full-in on that, and maybe even DevOps. I'm really interested to hear about any company that goes with Nix in production. Like, I think that would be very -- I don't know of any; I'm sure they exist, and I'd love to talk to anybody who's done that, just to get their horror stories and to see how it works... Because I think Nix in production is a very interesting story.

**Gerhard Lazu:** This is one for the listeners. This is one for you, listening to this. If you know anyone, reach out.

**Tammer Saleh:** Yes, please.

**Gerhard Lazu:** \[12:06\] We're very, very interested to tell that story. Okay. Switching gears, back to Kubernetes... Do you think that it still needs a platform? Because that's what we were trying to answer in episode 51? Is Kubernetes a platform? And if you think it still needs a platform, have you tried any, and anything good out there that works as a platform?

**Tammer Saleh:** I do still think that Kubernetes needs a platform, even more than I felt that way before. I think I see a bunch of interesting platform services out there. So I saw that Changelog - I think you all migrated to Fly.io, right?

**Gerhard Lazu:** That's right.

**Tammer Saleh:** And that's the one that's got all of the marketing attention right now. You go on Hacker News, everybody's talking about Fly.io. I apologize to the people that Fly - we tried Fly for one of our internal products, we had not a great experience with it. We actually --

**Gerhard Lazu:** Now hang on, hang on, hang on... Tell us more about that. That's too interesting, I can't pass on that. \[laughter\] Alright, if we took five minutes for the Nix, we can definitely take five minutes for this. Go on then.

**Tammer Saleh:** Well, it's not gonna be five minutes, because there's not that much detail... I wasn't the primary developer, but I was pairing on the software with the main developer. And the problems we saw with Fly was was mostly around Polish. The documentation was fairly poor, and sometimes out of date and misleading, and how you accomplished what we thought of as fairly normal things was a little bit more complicated. This is coming from a Heroku world, because the primary developer on this Rails application was - well, a Rails developer; they're used to Heroku, right? But I'm sure that over time Fly is going to get better.

From what I've seen, Render.io is the one that nobody talks about, but seems to be a much better experience. If we were going to do it again, we would do it with Render. While I'm giving shout-outs to great user experience - there's a tool called Doppler for secrets management. I actually reached out to the founders of Doppler because their user experience, just the flow of using Doppler - they really nailed it. So if you're interested in secrets management for small to medium-sized teams, you should really check that out. And it kind of fits into the platform space, because it's managing your secrets across environments, and all that.

But the thing is, both Fly and Render - they've got great mission statements, they're really interesting tools. They're not built on Kubernetes, and they have no intention, from what I've seen, of going on-premise. That still doesn't solve the main problem for most of the teams that we work with. There are other options... Humanitec is the big one. I just talked to the founders of Mia just earlier this morning, which is a European competitor to --

**Gerhard Lazu:** Sebastian.

**Tammer Saleh:** Yep. And obviously, they're just like Backstage, which is the open source, and there's a service for backstage as well. But none of them are winning right now. I mean, none of them are gaining any significant market share from what we've seen on the ground. Their biggest competitor is still very expensive internal platform teams. So we're still seeing a lot of companies running like four-person internal platform teams that their customers are the application developers, and they're stringing together all this git ops stuff into Argo, with Kubernetes, and maybe with like a Golden Helm Chart, or something... And don't get me wrong, that kind of works. It's table stakes for using Kubernetes as an application developer. But there's so much more potential, especially with things like Sigstore now getting so much attention. It's such an exciting technology. Having to string that into your internal platform is hugely painful.

I mean, I think a lot of these teams are starting to realize that building an internal platform for their development team is not the same as maintaining it. So you might think, "Oh, we'll throw together a platform team, we'll put four people together, they'll build this thing, and then we can devolve that team and move them on to other projects." No, that team is going to stay, if not grow, because your platform has to evolve with the fast-moving cloud-native landscape. It's just a thing.

\[16:18\] And so I think that there's a lot of potential for a platform... And by the way, as a little sidebar - platform doesn't mean dashboard. I've seen a lot of products out there that just give a UI exposing Kubernetes API primitives... That's not useful. That's not a platform. That's just point and click because I'm afraid to use the command line. And every dev that I know who uses Kubernetes would rather use some command line tool, right? Even if it's K9s, they'd rather use some command line tool for that.

**Gerhard Lazu:** Yep.

**Tammer Saleh:** The platform is about integrating everything together and giving a smooth developer experience. It has to be tied to the developer workflow, but it has to have some sort of opinions. That's tricky though, because as we've seen -- I mean, you and I worked together at Cloud Foundry, and Cloud Foundry lost the battle against Kubernetes, the battle for the platforms, even though it has such a head start. And I think a lot of the reason it lost was because it had too many opinions, right? It had too many ideas of how you should be developing software, and it didn't allow for outliers, right? It didn't allow you to step outside those bounds when you truly needed to; our answer was pretty terrible for that. And in reality, devs want to tweak, right? They want to believe their problem is unique, that they have a hard problem that can only be solved in a special way... And so a platform on Kubernetes needs to be able to thread that needle, and part of that is the ability to break glass in case of emergency. You have to be able to give the developers access to the API, you have to be able to give the developers a chance to go outside the bounds of the platform, but the platform still needs to make it as easy as possible to do the right thing.

**Gerhard Lazu:** I'm really glad that you mentioned Cloud Foundry, because for me as well, that experience, just like the getting started, the zero to one sort of thing was really nice. I mean, you had the services, you could bind things, the secrets would be there... Like, it was working. The routing was interesting, the Buildpacks was really, really nice... And then once you were there, things started getting a bit complicated. I think that's where the opinions started to show.

**Tammer Saleh:** Yeah, there's growing pains.

**Gerhard Lazu:** Yeah, exactly. What people wanted to do, versus what was possible. And some opinions were so - not strongly held, but like strongly implemented, it was very difficult to change course from the defaults. I always felt like that was the case. So I remember thinking -- I was looking at Concourse and I was thinking "Wow, Concourse--" just the way it orchestrates things, like the way things happen and the way scaling happens in Concourse for the jobs, and the inputs, and the outputs, and the long-running thing... I was thinking, "Wow, this is very similar to all the orchestration that happens within Cloud Foundry." There's like a lot of orchestration, like the really hard stuff. Kubernetes, scheduling - I mean, it is a hard problem, but it does it easily, and I think it's better at scheduling stateful things as well. Like, okay, again, I still think you wouldn't recommend running databases in Kubernetes...

**Tammer Saleh:** Yeah, I listened to Kelsey on your previous episode. In fact, I've used that in our workshops when we talked about running stateful sets on Kubernetes...

**Gerhard Lazu:** But you can. I mean, we did... It wasn't great, but it worked. Now, doing the same with Cloud Foundry - I don't think it was possible. And then I was starting to see those similarities between what Bosch was doing... It was the tool that was like laying down everything, paving, repaving... Just basically managing all the infrastructure, all the software that was running... And it had some great things, but again, I was starting to see those commonalities between Bosch, Cloud Foundry, and to some extent, Concourse. And then, Kubernetes came along and it just changed everything, and I don't think anyone was expecting that. Very, very quickly as well. It was like a sweeping tide that took everything. That was a very interesting one. Now, one of the recent blog posts on SuperOrbital... I think they're calling it a journal, "Zero to GitOps", by Sean Kane...

**Tammer Saleh:** \[20:20\] Yup.

**Gerhard Lazu:** "Flipping the bits on the internet since I was eight." You can go and check the blog post. Since I was eight. Me, Gerhard was eight, just to make it clear... \[laughter\] So you can go and check it out to see how long has Shawn been flipping bits. It has a Quickstart repository, basic walkthrough in the article... It's looking really good. I mean, you can get a lot done on AWS EKS, with ArgoCD, with Terraform, which is interesting, but you're only using Terraform to bootstrap things.

**Tammer Saleh:** Yes.

**Gerhard Lazu:** Again, there's a repo, everything is there... I think there's something there. Now, Marcos and Joelle, if you're listening, check this out - three Terraform modules to go from a potentially empty AWS account to an EKS cluster that contains some core Kubernetes software, and can be targeted by an existing CI/CD pipeline. I think there's something there.

**Tammer Saleh:** And I don't want SuperOrbital to take too much credit for that. We did this work in conjunction with a client; you can read more about it in the blog post... But a lot of this was also done in conjunction with AWS, because this was the brand new AWS EKS blueprint Terraform module. And we were very impressed. I've gotta say, AWS has not been so impressive in most of their open source stuff, right? They've been very anti Terraform for a long time, obviously; they've got their own competing products to Terraform. And they released this thing, which not only, obviously, targets Terraform, but also had the right boundaries. Terraform is an amazing tool if you stay within its sweet spot. Terraform can do a lot more; you can manage Kubernetes resources with Terraform. You absolutely do not want to do that, for a variety of reasons. You can do magic with Terraform, and I am guilty of attempting to do too much magic with Terraform in my code, where I have it do the VM provisioning and configuration, and then orchestrate all this other stuff... You don't want to use Terraform as orchestration, is basically the statement there. You want to use it to lay the bedrock, and you want a higher orchestration layer on top of it, that does the rest of the stuff. And the way that they configured the AWS EKS blueprint module is kind of perfect, where it just lays in enough Kubernetes resources into the new cluster to get you going, and then everything else is Argo GitOps.

**Gerhard Lazu:** I always thought of Terraform as a slow, convergent loop. And ArgoCD as being this fast one. Things happen much faster. Or even like the Kubernetes scheduler.

**Tammer Saleh:** Yeah.

**Gerhard Lazu:** So Terraform is great, in my experience, at slow things, things that move slowly, and there's like some state, and then you commit it, or you save it somewhere... Versus something like the Kubernetes scheduler, where things happen a lot, lot quicker. ArgoCD is the same way. It's a lot more reactive.

**Tammer Saleh:** I like that. I like that. That's a good way of thinking about it. Yeah. But it's also -- I mean, Terraform... The way that Terraform is developed by HashiCorp is very different than the way that the core team develops Kubernetes. I mean, Terraform has a ton of bugs, right? I mean, let's be honest. They had to call GitHub issue bankruptcy a while back. What was that, like three months ago, where they just started saying, "I'm sorry, we don't have enough engineers, even though we doubled in size from 500 to 1000... But we don't have enough engineers to deal with all the Terraform issues, so we're just going to put a pause on it." I can't believe they did that. It's always had so many rough edges, right? And you look at the Kubernetes core team and how they move - it's very different. I mean, no major features have come out of Kubernetes in the last two years.

\[24:18\] I mean, it's a very mature product already, and part of that is because the core team has been very smart about exposing the right APIs, so that third-party in the cloud-native landscape, like other utilities can implement those more interesting features, those more innovative features on top of the platform. And the core team said "Look, Kubernetes as a platform needs to focus on polish and maturity." I mean, I think release 1.18 was called something like "the fit and finish release." And that was a while ago. In fact, they've even been removing features, sometimes a little too aggressively for my taste... Like when they removed security policies before they had a solution... But they always had another solution, which was the validating admission WebHooks. You could always do something. And so I think HashiCorp attempted to take on too much with Terraform, and they should have instead focused on just making it work correctly in all scenarios, and pushed all the innovation into a plugin system, or something, the way that Kubernetes does.

**Gerhard Lazu:** You just gave me another idea. I had it for a while, but you just gave me another one. I think I want to talk to James. James Bayer. That's who I'm thinking about. I said hi to him when I was talking to Rosemary and Rob from HashiCorp about Vault... But I think -- this just reminds me that there's something there. There's something to look in Terraform, because I know that many people, as like riddled with shortcomings as it is - they have a good problem. Lots of users demanding fixes, and demanding things... And it's -- it's just there's. It's like Bash this point, I think...

**Tammer Saleh:** Yeah, Terraform is the air you breathe. When we talk to clients about what kind of technologies we primarily work on, when we're talking to developers who want to join SuperOrbital, we say, "Every project that we work on has some amount of Kubernetes." It wouldn't make sense for a client to engage with us unless there was Kubernetes, and we wouldn't take a project that didn't have it; it's not aligned with our vision. But also, every project has Terraform, because Terraform is everywhere. It's underneath everything, it's the bedrock for everything that we do. Unless you're one of those poor souls who are using AWS --

**Gerhard Lazu:** Bash.

**Tammer Saleh:** Or Bash. \[laughter\] What's the AWS competitor to Terraform again?

**Gerhard Lazu:** Is it CDK?

**Tammer Saleh:** No, not the CDK. That one's -- that one's actually interesting. That's okay. That's more like Pulumi.

**Gerhard Lazu:** Cloud Formation.

**Tammer Saleh:** Cloud formation. Oh...!

**Gerhard Lazu:** It's Chef.

**Tammer Saleh:** Yeah. It's horrible. It's so bad. And it's like these deep JSON structures... It's terrible. It's terrible.

**Gerhard Lazu:** Oh, yes. Oh, yes. Now, back to winning horses... eBPF... And great blog posts... James McShane.

**Tammer Saleh:** Yup.

**Gerhard Lazu:** Blog posts-- again, like in the last seven months since we've spoken, "Hunting down and intermittent failure in Cillium."

**Tammer Saleh:** I love James' blog posts, because James goes so deep; it's crazy, it's beautiful how deep he goes, when he's debugging these things on client engagements, but also when he writes about them on our blog. It's like, if you see that the blog post was written by James, then you've got to set it aside, grab half an hour to really dig into what he's doing, because it's fun stuff.

**Tammer Saleh:** Yeah. The thing which I like about it, that has just enough information - it's making steady progress. As I was reading it, I just wanted to read more and more, and it didn't keep me waiting. So there was always something -- I loved how it was unfolding. There's links to GitHub pull requests, because dang it, I want to see the code... Right? Otherwise, it's just like words; it doesn't matter how amazing they are, I just want to see the code. And it's a really good one. Like Cillium, eBPF... It's all there. Observability, diagrams... Even for architects, you will like that. I think you will. Now, I have a question to you, Tammer. How can \[unintelligible 00:28:14.29\]

**Tammer Saleh:** \[28:18\] Wait, I hold on, hold on... Are you going to ask me a deep question about Cillium? I'm not your man, alright? \[laughs\]

**Gerhard Lazu:** No... James, can you join us, please? \[laughter\]

**Tammer Saleh:** James, where are you...? \[laughs\]

**Gerhard Lazu:** I couldn't figure out how to submit fixes to the blog post. Do you have them somewhere, like in GitHub?

**Tammer Saleh:** Oh, man...

**Gerhard Lazu:** How does that work? Don't tell me WordPress...

**Tammer Saleh:** What you're suggesting doesn't make any sense. There are no fixes to be made to our publications. I mean, they're perfect. Right?

**Gerhard Lazu:** They are, of course.

**Tammer Saleh:** But if you did think that you've found something, we don't have it open source. We should, we should open this up. You know, just shoot us an email, hello@. It goes to everyone, so...

**Gerhard Lazu:** Okay, cool. What about dates? I'm really missing those dates on the articles to see when they published. \[laughter\] Can you take the notepad and write it down, please? \[laughter\]

**Tammer Saleh:** Sean McShane, who wrote the other blog post - he just brought up the same, and he's like, "Why are there not dates on the blog posts?" So like, "You're right, okay..." Yeah, there's just stuff to be done. Let's just say it's the tyranny of success, right?

**Gerhard Lazu:** It is.

**Tammer Saleh:** We're so busy... \[laughter\]

**Gerhard Lazu:** I love that. I love that.

**Tammer Saleh:** Yeah, we do need to do that... I had a thing on my personal blog for a while, that I think is now completely broken... But I like to say this blog post is now so many days old, which means it's almost definitely out of date. I mean, come on, this is all deeply technical stuff. Even by the time we finished this Cilium issue, James submitted pull requests, right? I mean, this thing is going to now be fixed. But very good feedback. Thank you, Gerhard. I appreciate it.

**Gerhard Lazu:** You're very welcome. Always. Also - last one, promise - who's the author for "On-ramp to supply chain security"?

**Tammer Saleh:** Oh, they forgot to put themselves on there. That is also James McShane.

**Gerhard Lazu:** Alright.

**Tammer Saleh:** Yeah, that's also James McShane. So he should have added the correct metadata to the preamble in the markdown blog post... See, we are geeks, we are geeks... \[laughs\]

**Gerhard Lazu:** Great. No Wordpress, amazing. That's what I was afraid at some point.

**Tammer Saleh:** No, no. It's a static site. It's just got so much other stuff in there... Sometimes it's got, for example, workshops that we're still working on and we don't want to mention publicly yet... But that's a silly reason. We should just put it on there.

**Break:** \[30:44\]

**Gerhard Lazu:** Now have you used -- because we talked about Sigstore; a really cool thing, supply chain. Have you used any of the CLIs like \[unintelligible 00:32:38.29\]

**Tammer Saleh:** James and a couple of our other engineers are really deep into Sigstore. James has actually been participating in the community meetings, and things like that. I'll be frank - myself, I get very little chance nowadays to play with anything. Like, if I can find an hour on the weekends to hack, I'm tweaking my Vim config or whatnot.

**Gerhard Lazu:** Or jump on a podcast.

**Tammer Saleh:** Right, I'm jumping on a podcast. \[laughs\] But they've played with some of the CLI stuff, and we've been implementing this also for some of our clients. It's very interesting stuff.

**Gerhard Lazu:** Okay. I think I'm feeling a follow-up coming... But let's put the pin in that.

**Tammer Saleh:** I like that what we could do is we could actually have James come in and talk more about the supply chain stuff that we're doing.

**Gerhard Lazu:** Yes. That's exactly what I'm thinking now. I'm going to do a Tammer, and you tell me if you recognize yourself. This goes many years back...

**Tammer Saleh:** Oh God, no... \[laughter\]

**Gerhard Lazu:** Are you watching...? "Who has two thumbs and is awesome?" \[laughter\]

**Tammer Saleh:** Who has two thumbs and loves being on podcasts? \[laughs\]

**Gerhard Lazu:** Exactly. That is the second meeting. When I've seen you lead the meeting, I thought "This guy's crazy in all the right ways..."

**Tammer Saleh:** \[33:59\] I need to get out of here... I actually taught my six-year-old daughter the two thumbs thing. She saw the movie and she's like "What is that?" I'm like, "Well, do \[unintelligible 00:34:05.12\] two thumbs, right? And then you point to yourself, and you say something..." Yeah.

**Gerhard Lazu:** Ah, that was a good one. That was a good one. Do you still do that? \[laughter\]

**Tammer Saleh:** No, Gerhard, it's worse. Now that I'm a father, my jokes have gotten even more dated, even worse than that.

**Gerhard Lazu:** I see... \[laughter\] Alright. I'm still got to use it, so...

**Tammer Saleh:** Oh, you've got my permission. You've got my permission.

**Gerhard Lazu:** Thank you very much. It's a Tammer special. What do you see the teams that you train struggle with the most?

**Tammer Saleh:** Oh, that's a good question. I mean, our workshops all focus on Kubernetes -- our most popular workshops are just the core Kubernetes workshops; a week long, it goes really deep on Kubernetes. And our second most is Docker. But then we've got much deeper workshops, of like programming Kubernetes, Istio, Kubernetes in production, containers demystified... So like Linux system calls that make containers work... But for our two most popular workshops, the core Kubernetes and the Docker workshop, Kubernetes has a deep domain to it. There are so many different objects you have to understand. And I always thought that that would be the hardest thing for our students. And so when we first developed the workshop, it focused on making sure students understand what all these terms mean, and all that... But that's just natural with the progression of the workshop. So the students pick this stuff up as we're delivering. The workshop is designed to walk you through all these terms, in the right order, and all that.

It turns out that the students that struggle the most in our workshops are the students that come from -- and I'm not saying this to be disparaging, but it's just different backgrounds; you learn different things. The students who come from Windows or Java. And the reason that they struggle the most is because they're trying to learn Kubernetes at the same time that they're also trying to learn the Bash command line, or what Linux processes and users are, or how the kernel works with like requests and limits and things like that... Or just networking, like what a private IP address is, versus a public IP address. That's still in Java and Windows, but here's still that foundational level of knowledge that a lot of our students don't necessarily have. And so we've put a lot of effort, and we're still putting a lot of effort into adapting our workshops so that we teach those necessary little nuggets at the same time that we're teaching the Kubernetes content. And our students have really enjoyed that, we've gotten really good feedback from that, because they feel that they're learning so much packed into that one week.

I also thought -- I mean, I've gotta be honest with you, I kind of feel like it's an indication of the bit of a step backwards that happened with Docker and Kubernetes, right? I mean, Docker in particular was a huge benefit to the development community, because it allowed us to package up our software in a very repeatable way, right? To deliver that one package of software. It's like what Java did with JARs and WARs, but applied to any runtime, right? We all know this. But at the same time, crafting a Docker file - like, really, as an application developer, I need to know how the esoteric command line flags to apt-get install, and I need to understand like -- you used to have to remove the apt-get cache between layers in order... I mean, the stuff you have to do - it's making every developer a DevOp. And that is just reflected in the fact that we require our students to understand how to work with Bash, what Linux is, how the kernel works, how networking works... All that stuff.

\[38:02\] In many ways, Kubernetes and Docker are just thin wrappers over that stuff, and they should be -- you know, we're just getting right back to the platform conversation; there should be a higher-level abstraction. Developers should not have to be completely full-stack all the way from frontend down to operations. That is too much to ask.

**Gerhard Lazu:** Yeah. So what do you think that would look like? Like, I think build packs were going in that direction, in that you didn't need to know how to package your code in the context of Cloud Foundry; that would just happen behind the scenes. I know that build packs are still around... I don't know who's using them in the context of Kubernetes, but I know they're there.

**Tammer Saleh:** Yeah.

**Gerhard Lazu:** Is it build packs? Is it something else? What do you think?

**Tammer Saleh:** It's a great question. I feel like build packs were the wrong way to abstract things. I think build packs were exactly what you were describing earlier - they are an example of something that works really well in the 80% case, and really terribly in the 20% case. Because if you ever needed to go beyond what was provided in the Ruby or the Java build pack, then you needed to take some crazy steps to extend that build pack, maybe even as far as forking the build pack repo, and using your own custom build pack... Maybe using like a multi-build pack, and layering something... It was really bad, right?

**Gerhard Lazu:** Yeah, yeah.

**Tammer Saleh:** I think that build packs have also had the fundamental problem of not being able to apply security updates transparently. So if you had - I don't know, like a remote code vulnerability in Bash, which... I mean, that's crazy. That would never happen... Then you were responsible for targeting the latest version of the build pack and making sure that that was what your application is running on. Which by the way, Docker has the same problem, right?

You mentioned that build packs are still happening - they are. The Open Build Pack Project is still a thing. I don't know of anyone using it in production, but VMware, now Broadcom, I guess, is completely behind it. And one thing that they've figured out which I thought was really, really interesting is that we always think of the Docker layers as being a Git-like tree, where each layer depends upon the other layer. That's actually not technically true, right? That's only true in how Docker uses the layers. You can actually change out an underlying layer. If you think about what the layers are in Linux, they're just overlay fs layers, right? You can change one below, it's totally fine. If you do it in a way that's incompatible with an upper layer - well, then you've got problems. But the build pack team has realized that they can apply security updates transparently to an existing build pack, which is interesting.

**Gerhard Lazu:** That's really cool. Yeah, I didn't know about that. That's really cool, actually.

**Tammer Saleh:** It's pretty interesting stuff... If only it was adopted, right? But again, still, build packs have the same problem we just talked about - they're great for the 80%, bad for the 20%. But this is exactly where I think something like Nix has a lot of potential. Like, Nix could have made Docker irrelevant, and could have abstracted away the things that we think of in a production Docker file. You could have just listed your dependencies in a manifest and your application would run within there. Maybe there would be a stronger contract about how your application runs, because build packs were that way; build packs were 12-factor, right? Could have had that same 12-factor contract, but allowing you to very easily specify all the dependencies that you might need. It could have been really interesting. But, I mean, in reality, nobody is doing anything other than Docker. Right? There's no significant competing technology than crafting a Docker file by hand.

**Gerhard Lazu:** \[41:46\] Yeah. Well, publicly, no... \[laughter\] Behind closed doors, yes, and I think that's slowly changing. So I have so many thoughts running through my head right now... I see the potential in Nix. And this is slightly awkward, because this episode - we are recording it before another one, which will come out early... So I'll have to tell you something that hasn't happened yet... \[laughter\] So let's imagine that --

**Tammer Saleh:** Can you just mute the microphone and just tell me? Can you do that?

**Gerhard Lazu:** Well, we could edit it out, but I think it just makes sense for this to flow in the conversation... So I think it's okay to leave it as-is. The episode before this one is the one with Alex Suraci. We're talking about Bass, we're talking about Concourse, we're talking about the CI/CD and how that applies to --

**Tammer Saleh:** What's Bass?

**Gerhard Lazu:** Bass language, it's his fun project.

**Tammer Saleh:** Oh, my gosh.

**Gerhard Lazu:** Bass-lang.org. I know... He's building a Lisp-inspired language for automation. It's using Nix in some parts, but it's also using Bass-lang.org.

**Tammer Saleh:** Yeah, base-lang, yeah...

**Gerhard Lazu:** Sorry, Base, yeah. Sorry. Base. So yeah, so that's the episode before this one. So when you were talking about Docker and the Docker files and all that, it just made me think about this, because I think it's all relevant. And the fact that you didn't know - by the way, you didn't know for sure that this was happening...?

**Tammer Saleh:** I did not.

**Gerhard Lazu:** I see the correlation between CI/CD and the role that it can play... And I don't mean CI/CD like GitHub Actions. I don't mean that. I mean CI/CD in the sense of -- well, I'm going to mention the D word... It's not Docker, it's the other one. It's Dagger. \[laughter\] Okay, so it's Dagger... And Bass, and Nix... I'm starting to see a thread between them. And I see the language, the importance of the language, which by the way, it's not Dockerfiles. It's not that. W tried it, it has serious limitations; we couldn't work around them in all the years that we've been trying to do something about it... And we think -- well, we started with Cue, because that's what we're using at Dagger to basically instruct, basically capture all the things that need to happen to produce those artifacts... Because that's what it is - it's just instructions, today to BuildKit; tomorrow, who knows. But there's this concept of automating the builds, and also the deployment, because it's all about like automation, right? You don't want to be installing tools locally, to be controlling AWS, or Terraform, or whatever. You want to consume images, which are pre-built, secured, with all things in them, to just do the actions that you want to do. And if you use Yarn, you shouldn't really care what goes into like the Yarn packaging. The Yarn package should have that built-in. If you're using Mix, if you're using Elixir, or Ruby, Ruby Gems, a bundler, whatever it is these days - you shouldn't care.

So it's a bit of build packs, a bit of Dockerfile, a bit of CI/CD, add an amazing cache, and that is the future that I'm thinking about. So what do you do for CI/CD these days, and how do you see that link to Kubernetes? Because there is one, for sure...

**Tammer Saleh:** Yes.

**Gerhard Lazu:** ...and I think we are finding its edges, and it's something which I'm fascinated by.

**Tammer Saleh:** So actually James McShane, who was the author of that blog post that you talked about before - he was a contributor to Tekton for a long time. I think he's still active in the Tekton community. And I view Tekton as the spiritual successor to Concourse. For those of you who don't know - we've mentioned Concourse a few times, right? Concourse came out of Alex Suraci's work with Cloud Foundry, and it was very focused on solving a problem for our relatively large number of application development teams, right? We were building, essentially, a microservice architecture that would ship in a box in Concourse, which I like to call now like a workflow engine, as opposed to a CI/CD system, because it really just takes action on any trigger, and then it can produce new things on the other side. And the cool thing about that is --

**Gerhard Lazu:** \[45:56\] You just said the engine word. Unbelievable. Dagger is an engine from the future. And it is -- like, wow... I cannot make this up. You said it, and I cannot believe it, because like -- conversations with different people are coming together in ways... Again, this is like -- you're listening to this a month after it was recorded, at least a month, by the way. You will have heard the Alex interview, which hasn't happened yet... \[laughter\] And it's amazing how these things are coming together in ways... Not to mention the conversations which we're having with Solomon, and Andrea, and Sam... The Docker founders, the Dagger founders... I mean, it's just crazy. It's crazy. But please, continue.

**Tammer Saleh:** I love Alex. I think he's one of the top three developers I've ever met in my life. He is just phenomenal. He's a very empathetic person. He's just a wonderful person, a wonderful human in general, right? And Concourse was visionary; the way that Concourse was designed, his ability to cut right through a problem and get to the fundamentals, and build essentially a toolkit that had so much more potential than anything we would have built by committee, right? It was really beautiful.

The problem is that Concourse - it's totally showing its age. It's not Kubernetes-native, it's a -- last I checked, and maybe this has changed now, it did not use Docker under the hood, which means it behaved a little weirdly; like, entrypoints were not respected, and things like that. There's a lot of pain now in using Concourse. If you were going to use a workflow engine now, it would be something like Tekton instead. But even Tekton -- I keep looking at all these existing CI systems, all these workflow-engine-like systems, and they all suffer from a lack of usability. They're all very focused, kind of like Kubernetes, on being building blocks, and maybe you're supposed to build something on top of them. I'm waiting for something to come out that is much more usable, still very GitOps friendly, you define the pipeline in Git, and such, but it's much easier to use, has a bunch of stuff built-in... I'm waiting for that to happen.

**Gerhard Lazu:** I'm working on it, Tammer. Seriously, I'm working on it. \[laughter\] No joke.

**Tammer Saleh:** I'm very excited, Gerhard! I'm very excited!

**Gerhard Lazu:** It's been seven months... \[laughter\] It's a hard problem, okay? Me and a bunch of very smart people are still on this thing...

**Tammer Saleh:** Yup. Yup. Now, in the wild though, you asked like what are we seeing people use for CI systems... I hate to say it, but like GitHub Actions and GitLab Runners are really taking over. And I think it's a little bit unfortunate. I think there's some really great aspects of both those systems, and I understand why they became so popular when you compare them to other strict CI systems... But the power of something like Concourse - it's almost a replacement for actual application code. I mean, it's like you could build a Concourse -- when Alex first created Concourse, I tried to convince him that we should not label it a CI system, we should position it as a competitor to AWS Lambda, because I felt that it could be --

**Gerhard Lazu:** And you're telling me that you're not a good product person... Now, that is genius. If you're not seeing it...

**Tammer Saleh:** I don't know. I don't know a lot of people who actually use Lambda in anger. \[laughs\]

**Gerhard Lazu:** You're just being humble, I think that's what it is. I think you're just downplaying it. But that's a great move, by the way.

**Tammer Saleh:** I think there's a lot of potential for something like that.

**Gerhard Lazu:** Oh, yes.

**Tammer Saleh:** Yeah. Anyways...

**Gerhard Lazu:** No, it is, for sure. It is, for sure. And it's coming back. The great ideas will be circular. They will keep coming back until someone makes them happen.

**Tammer Saleh:** Yes. They'll keep knocking until somebody opens that door.

**Gerhard Lazu:** Exactly. And is willing to put up with the mess that this space is... Because it is a mess. Powers through, figures the DX, figures the interactions, the integration points, figures the community... There's so many aspects to this. And we may fail. I may fail. But oh man, I'm gonna try so hard... It's worth trying.

**Tammer Saleh:** One of these days, Nix will win.

**Gerhard Lazu:** \[50:10\] Well, Nix is in the mix, in a very unexpected way... But it is there, it is there. And I really like what you mentioned about Alex, because I see the same - there is an element of genius. There's no other way that I can put this.

**Tammer Saleh:** Yes.

**Gerhard Lazu:** In Bass-lang, I'm seeing it. Like, the thunks -- okay, it is a bit like... Almost like the next level. Like, you don't know what you're looking at, but you're looking at a spaceship. And you don't know, because people have never seen a spaceship. Like, where's the door? Where's the exhaust?

**Tammer Saleh:** So Bass-lang is basically first contact for us mere mortal developers.

**Gerhard Lazu:** Exactly. And Alex is the emissary. I don't know which planets he comes from, but... \[laughter\] That's what I see. too. So I know who the other developer is. It's me, of course. What about the third one? Because you said like three... Alex is not in the top three... \[laughter\] No, seriously, who are the other two? I want to know, your opinion.

**Tammer Saleh:** Dimitri, from Bosch, is one of the top developers that I've ever known. He definitely fits into that. And Dimitri is less of kind of the architectural genius that Alex is. I mean, Alex is almost like a scientist with the way that he approaches problems. Dimitri is the prolific hacker. You put Dimitri on a problem and he will solve that problem. I mean, I hate that term 10x developer, but he will solve that problem so much faster than anybody else you can put on it. The problem is, yeah, Dimitri will tell you himself that he leaves some wreckage behind, and so he'll usually put a team in behind him to sweep.

**Gerhard Lazu:** Oh, yes. I've seen it. I've seen it. A team of sweepers. Ten sweepers behind him. Ten.

**Tammer Saleh:** Dmitri is the definition of properly used technical debt. If you're a startup, and you need to solve a problem as fast as possible, and if you fail, you just go bankrupt. Right? So you don't care about the technical debt. That'll be solved after your first round of funding. Then you want somebody like Dmitri there, just to get the proof out.

**Gerhard Lazu:** Okay. I'm gonna open the door. Seriously. YTTK app? I wanna know what he was thinking. \[laughter\] Bosch? Yeah, I think he was on it for -- yeah.

**Tammer Saleh:** I thought YTT was actually really good, compared to everything else that existed. If you would put Alex Suraci on it - well, you get Bass-lang, right? If you put Alex on the problem of "Yaml is difficult. How do we allow configuration to be easier to use, and more extendable, and less redundant?" Alex will create something like Bass-lang, and Dmitri will create something like YTT. YTT gets the job done. It gets it done really well. It's so much better than Jsonnet and Ksonnet and all those...

**Gerhard Lazu:** Oh, yes.

**Tammer Saleh:** But I'm sure that something like baseline solves many more problems at the same time. Just like Cue solves many more problems at the same time.

**Gerhard Lazu:** Yeah, that's a good one. And number three? I haven't forgotten. I know it's not me.

**Tammer Saleh:** It's yourself. What are you talking about? You're number three, Gerhard. You are number one. You are number one, baby. Always will be. \[laughter\]

**Gerhard Lazu:** Oh man, my ego is exploding right now. \[laughter\] Seriously...

**Tammer Saleh:** No, I'm not gonna name number three. I mean, there's been a bunch of other developers I've worked with who are just like phenomenal, and I'm gonna let each one of them believe that they're number three, so that nobody's --

**Gerhard Lazu:** Oh, that's so smart. \[laughter\]

**Tammer Saleh:** So nobody's heart is broken.

**Gerhard Lazu:** I like it, okay. So it can be anyone. Okay, cool.

**Tammer Saleh:** It could be anyone. It could be you, dear reader, dear listener.

**Gerhard Lazu:** \[53:53\] Dear listener, yes. It could be you. If you worked with Tammer, it could be you.

**Tammer Saleh:** If you've worked with me, it probably is you. You're number three, of course.

**Gerhard Lazu:** And maybe you're still working with him, by the way. It doesn't excuse present ones... \[laughter\]

**Tammer Saleh:** Oh God, you're causing me so many troubles...

**Gerhard Lazu:** Maybe Shane. Nobody knows.

**Tammer Saleh:** It could be all of us. Oh, my next one-on-ones... They're gonna be so difficult. \[laughter\]

**Break:** \[54:19\]

**Gerhard Lazu:** So we talked about this idea of the Cool Wall of cloud-native before the episode. For those that don't know, I love Top Gear. My son, he's 12 years old. He loves Top Gear. He grew up with Top Gear. Top Gear is a TV car show presented by Jeremy Clarkson, Richard Hammond and James May. Now we are watching it on Amazon Prime, we know it as Grand Tour. We still watch it 10 years later, and it's still amazing... Thereabouts. Whatever. Like, almost a decade. And they have this concept of the Cool Wall, where they go through some cars -- it was introduced in season one; Top Gear season one. They go through some cars and they decide in which four categories does the car go? Is it a seriously uncool car, is it an uncool car, cool, or sub-zero cool. And I'm thinking, how about we pick a few projects from the CNCF landscape, and figure out which of the four categories they fit in.

**Tammer Saleh:** I love it.

**Gerhard Lazu:** So the first one - again, it has to be Kubernetes. Where do we think it fits? Is it seriously uncool? Isn't uncool, cool, or sub-zero cool? Where do we think Kubernetes fits, Tammer? And I'll let you go first.

**Tammer Saleh:** Man, I want to say like -- I don't know, it's like... It is the wall, right?

**Gerhard Lazu:** That's a good one. That's a good one. I like it.

**Tammer Saleh:** I think Kubernetes is definitely in the cool side. I mean, it's not sub-zero, it's not the best thing ever, but it is laying the bedrock for so much innovation... And it's the first time -- not the first time. Innovation goes back and forth, coming from the community, coming from enterprise... But let's be honest, enterprise teams, enterprise IT teams, infrastructure teams - they usually get starved on the innovation front. They're usually the ones who are wishing they get to play with all the stuff that the community is playing with. Kubernetes is one of those times when they got a chance, and it really affected them in a massive way. Kubernetes is innovating, starting with the enterprise. And I think that's great, because they're under-served. They've got all the money, but they're underserved. So... Cool. I'm gonna put it in Cool. What do you think?

**Gerhard Lazu:** I think it's right in the middle. I think it's right in between uncool and cool, because it's starting to become this boring technology. It's really mature, it's been around for a long time... I think it's reached peak maturity. If Boeing is using it, if Mercedes Benz is using it, and the big companies are using it for some important, mission-critical stuff, I think that Kubernetes is uncool, because it has to be. It has to be something that is table stakes. Everyone has Kubernetes these days, and I think it's right there in the middle.

**Tammer Saleh:** Yeah. You wouldn't say that Linux is in the Cool column anymore. Linux is now in the "Meh. Whatever. Boring", right?

**Gerhard Lazu:** Boring. That's a good one. Maybe we need to change the columns. Anyways, let's just see... I think it's right in the middle there. So we put it in the middle for now and we move on. What other project would you like to pick next?

**Tammer Saleh:** Alright, I'm gonna pick one that I think is going to be controversial... So let's go with the Open Policy Agent.

**Gerhard Lazu:** Oh, wow...

**Tammer Saleh:** \[laughs\] The thing that they killed PSPs for.

**Gerhard Lazu:** Oh, my goodness me.

**Tammer Saleh:** If I remember correctly, the way that the Cool Wall actually worked in the TV show was one of the hosts was much taller than the other, right? And so if there was an extreme disagreement, that host could just take the card and put it up at the top, and the other person couldn't reach it.

**Gerhard Lazu:** I don't remember who's taller, me or you. It's been too many years since we've both been in the same room. And I think I have longer arms, if I remember correctly, because when I would play table tennis, I could reach further, I think. That's what I remember.

**Tammer Saleh:** It's true, it's true. But I think you're slightly taller than me. So I don't know. So OPA. OPA. Where would you put it?

**Gerhard Lazu:** I would say uncool, towards seriously uncool. Why is that? Because it's so damn difficult. Like, whenever I think OPA...

**Tammer Saleh:** Yes. Okay, it's not controversial. Alright. Yeah.

**Gerhard Lazu:** Yeah. I'm thinking, "Oh, my Goodness me. Where do I start? Do I really need this thing? Maybe not..." It's not something that I want.

**Tammer Saleh:** \[01:03:56.08\] Why do they have to invent a whole new language for this thing? Why? Really, do need Rego for this? No. And just to double down on this statement, Kyverno. So dear listener, if you're considering integrating OPA with your cluster, I highly recommend Kyverno instead. So much better implementation, so much simpler to use. The only problem is that Kyverno only works with Kubernetes, and if you're using Rego as a configuration language, the OPA and things can work with your Terraform, as well... But Kyverno is so much simpler, so much nicer. So I'd put that in the Cool section.

**Gerhard Lazu:** Yeah, that's a good one. So what would you use Kyverno for? I've heard the name, I know roughly what it does, but I'm always hazy on the details.

**Tammer Saleh:** Well, so you would use it in the same way you would use OPA, which is it acts as an easily-configurable validating-admission WebHook. If you want to say that all pods -- I don't know, all pods have to have a pod topology constraint in order to be deployed to the production cluster, right? Then you would use Kyverno - or OPA - to enforce that at the API layer. So if anybody tries to create an object that doesn't conform to whatever that policy is, then it gets rejected.

Now, one of the problems that we see with all this policy enforcement stuff, both at the API layer and also with like network policies and things like that, is that validating these highly complicated policies - there's no good tool for that. There's no good tool for you to have trust that your complicated policies - and they get really complicated the bigger they get, especially on the networking side... That they're actually working the right way. So there's no like test-driven development for your policies. And just to drop a little hint for the listeners - we're actually working on a product right now that will solve that problem, and make SuperOrbital into a unicorn. I'm sure of it. Or decacorn... What do they call them nowadays?

**Gerhard Lazu:** Decacorn, I'm pretty sure.

**Tammer Saleh:** \[laughs\]

**Gerhard Lazu:** Um, three commas...? The three comma club. \[laughter\] Tres commas.

**Tammer Saleh:** Okay, so what's your next one? Let's put another card on there.

**Gerhard Lazu:** Alright, my next one, my next one... Well, I know exactly where this one goes for me, that's why I'm going to mention it...

**Tammer Saleh:** Alright...

**Gerhard Lazu:** Argo CD.

**Tammer Saleh:** Oh...! Well, okay, so when we were thinking about the columns, I was thinking of useful and less useful, right? But nah, you kind of say, "Okay, cool is kind of like hip." So in the same way that Kubernetes is moving down the stack towards like boring, Argo CD is kind of becoming just the thing you do, right? There is no strong competitor anymore to Argo CD, so I'm gonna put that in the - what was it, the Boring column? Is that what we've got now?

**Gerhard Lazu:** I think the Boring one. Yeah. I think we changed the Uncool to the Boring one, I'm pretty sure. And Seriously Uncool is like maybe less than boring; it's just like something that you maybe wouldn't use. Something that is too difficult.

**Tammer Saleh:** If I was chatting up somebody at the bar, trying to try to make something happen, I would not bring up Argo CD. That would be like, "Oh, that's not interesting at all." Right? \[laughs\]

**Gerhard Lazu:** Yeah... So I understand that perspective, but for me the UI makes it sub-zero cool. It's like, if you want to see what happens in your Kubernetes cluster, like if you want to see that visual--

**Tammer Saleh:** That visibility.

**Gerhard Lazu:** Exactly. You need to have Argo CD. And a bunch of things start like light bulbs, multiple light bulbs, like a Christmas tree, goes off in your head when you realize what is actually happening in Kubernetes, in your Kubernetes cluster. What are all the workloads, how do they change state, how it syncs with the Git repository... I think you have to have it.

**Tammer Saleh:** It's incredibly useful. Like I said, it's table stakes now, right? That's why the EKS blueprints that AWS put out - they install Argo CD as the one and only thing that they put into the cluster. And this goes back to Kubernetes being a polished and mature product, because the core team did not build in Argo CD.

\[01:08:09.11\] You can imagine if any other team was building something like Kubernetes, they would say, "Well, we need a better way of putting things into the cluster and a better way of giving visibility to people on how the cluster's operating, and how all your workloads are behaving." So they would build something like Argo CD into the core product. That's a mistake, right? The Kubernetes core team recognize that, and they didn't, which is great.

**Gerhard Lazu:** Yeah. And I have seen something similar attempted before, a specific system which I tried and used, a product... Octant. And Octant was great as a first experience. Bryan Liles - he created it to just visualize what is happening in Kubernetes... Nice UI... But once the initial wildness wore off for me, I didn't see it like that valuable or that useful anymore. Argo CD is something that keeps on delivering, even after you get past the dashboard. It's the whole GitOps model, it's just how it synchronizes... There's something there which I haven't seen with Octant. And I'm sure there's a few others that you can think of.

**Tammer Saleh:** Yeah, like Lens, or even K9s...

**Gerhard Lazu:** Yes.

**Tammer Saleh:** All of those are -- that's what I was saying before about providing a new visualization of the existing Kubernetes objects is not that interesting, right? That's just a dashboard. If I like visual representations - it's useful, but it's not at all game-changing. And so if you're going to build a platform on top of Kubernetes - and this is the thing that we have not seen done yet - you need to focus on the entire application as a whole, right? You're not delivering deployments in pods. That's not what application developers are thinking about. They're thinking about their entire microservice architecture, and how it integrates with external APIs, and all the databases that it uses, and all that kind of stuff. That's one big chunk of deliverability. That's how it has to be focused. It has to be focused on the app, not the infrastructure. And all these dashboards, like Octant, and Lens, and K9s - they're all focused on just the Kubernetes primitives. It's not that interesting, I don't know...

**Gerhard Lazu:** The nerd in me is missing the fact that Changelog isn't running on Kubernetes. I have a huge -- how do you call it? Like, when you miss something, you're like missing out on something. There's like a syndrome... It's not FOMO. \[laughs\] Well, maybe it is FOMO. Maybe that's what I'm thinking. Like, the fear of missing out on all the cool things in the Kubernetes and the CNCF landscape, because I'm no longer using Kubernetes. It's almost like I need an excuse to use it again, just like to stay connected to all those cool technologies; like, to be able to try Kyverno, to try like all the new stuff that is coming out. Maybe not so much when things go wrong... It can be quite challenging to figure out what the hell is going on, because it's a really complex system, and I think that just goes back to the platform. If there was a platform built on top of Kubernetes to simplify this, to just like figure out like a bunch of things so you can get that - I think that'd be really useful. Because there's like a whole ecosystem that you're missing out on if you don't use Kubernetes. And while you can use many of the tools outside, I think they make less sense, and I think that's why, coming back to your comment, Tammer, Kubernetes is the board.

**Tammer Saleh:** Yes.

**Gerhard Lazu:** Everything happens on Kubernetes. And if you don't have it - well, Terraform and VMs it is for you. That's Cloud Formation. That's it. \[laughs\]

**Tammer Saleh:** I mean, Terraform is the ubiquitous substrate; it has changed, and it is still in the process of changing what it means to be on the cloud. And that's the beauty of it.

**Gerhard Lazu:** That's the legs for the board?

**Tammer Saleh:** Yes, exactly. \[laughter\]

**Gerhard Lazu:** Or the wall on which you hang the boards... Something like that. Yeah. Okay. Right... Well --

**Tammer Saleh:** \[01:12:09.15\] I've got one now... How about Crossplane? What do you think of Crossplane?

**Gerhard Lazu:** Ah, that's a good one. I had it on my list. I was thinking about it, actually.

**Tammer Saleh:** I took it from you. \[laughs\]

**Gerhard Lazu:** Yeah, you did. Okay. Well, I think we can make this the last one, because it's a very, very interesting one. So Crossplane - I really liked it when it came out. I really liked using it with TerraJet, which is Terraform in Crossplane. Episode 33 - we even tried it to lay down our LKE cluster. I think there's something about compositions which makes it difficult. I was never able to get past that point. There is a lot of Yaml that you have to go through to understand how compositions work... And I think at some point it's becoming too meta, I think.

**Tammer Saleh:** Yeah. I know what you mean. I feel the same way. When I was playing with it, I had exactly the same experience, that compositions were just a little too brain-bending, a little a little too hard to actually juggle in a real situation. But the idea behind it is still -- it's still super-cool. Yeah, sub-zero idea.

**Gerhard Lazu:** Sub-zero Cool. Wow. Okay.

**Tammer Saleh:** Yeah, Sub-Zero idea, and then a -- what are the other categories?

**Gerhard Lazu:** Seriously Uncool, Uncool, Cool, and Sub-Zero Cool.

**Tammer Saleh:** A Sub-Zero idea, and a maybe even Seriously Uncool implementation, unfortunately. But the idea that the Kubernetes API is the real value of Kubernetes. We teach this in our workshops; we really hammer this home with students, that like even if you're not dealing with containers, the immutable, declarative, incredibly predictable, idempotent API that is Kubernetes is fantastic. And you can use that, you can leverage that to provision things outside the cluster. There was even a project... It's not coming to me right now, but there's a project that is just the Kubernetes API without the scheduler, and without all the built-in resource types.

**Gerhard Lazu:** I know what you mean; I'm forgetting the name. I know what you mean. I'll try to put it in the show notes. Yeah, that's a good one.

**Tammer Saleh:** And - I mean, it's just a proof of concept. Nobody's actually using that project for anything. But it shows that even without the domain, just the bare structure of the Kubernetes API is a fantastic API for all kinds of workloads, all kinds of operational tasks. And things like Crossplane are trying to leverage that API to allow for you to provision things outside the cluster, and it could be really cool. It's just not the right implementation yet.

**Gerhard Lazu:** Yup. I like that. I like that. I can get behind that, for sure. Okay. We have time for one more bombshell. Do you wanna go for it, or shall I? We need to go the Top Gear theme...

**Tammer Saleh:** \[laughs\] You go ahead.

**Gerhard Lazu:** Alright. So in the previous episode we had Alex Suraci talking about Concourse, talking about Bass... Again, this is in the future, from the future; it's very confusing, because we're recording this before that other episode,

which is coming out before it...

**Tammer Saleh:** And you're going to predict what he has about to say, yes.

**Gerhard Lazu:** Exactly. That makes it very, very challenging. And I see Alex as the builder, definitely the builder. And then I always saw you as not the product person, because clearly, you don't enjoy it... Like, I think you're good at it, but I don't think you enjoy it as much as other things. But I see you like the planner, in a lot of ways... Because you see how kind of like the big items, how they kind of fit together, and you start seeing like trends, and you see like what makes sense and what doesn't... Do you see yourself the same way, or is it just me?

**Tammer Saleh:** \[01:15:58.07\] Well, I'm very flattered by that, to start off. I never have had confidence in my ability to predict wider trends. I've actually felt that Alex was a lot better than myself at that. Some of my skills are around just in general planning, and just looking at a project and understanding -- I'm making myself into a project manager here, but... Looking at something that needs to be done, and being able to break it down...

**Gerhard Lazu:** \[laughs\] You were actually a PM when you said Two Thumbs. I forgot about that. \[laughter\]

**Tammer Saleh:** But my superpower is worrying.

**Gerhard Lazu:** Chief Worrier.

**Tammer Saleh:** So this is why I was a really good operations person. Yeah, I always worried about the edge cases, right? And when I code, I code slowly, because I'm always worried about not only bugs, but like what use case am I not thinking about, that's going to break down?

So yeah, when I'm working on a project with other developers, part of my role that I end up taking on is just the

"Yeah, but what about--" person. So I'm always the person saying "Oh, we've got to worry about this one thing. Let's not forget that, because that's actually important." And the thing that I've had to learn, and it's been transformative for me - the thing I've had to learn is when to recognize a risk and be able to say, "But I'm not worried about it. It's okay. We'll hit that later. That is a deferrable problem. I don't need to worry about that now." And if you do that nine times out of ten, then that one problem that you actually did need to solve right now - that's the one that you fix right off the bat.

**Gerhard Lazu:** Yeah, that's a good one. I always noticed that you had good instincts. And because I have seen the long-term with you, I've seen where we've gone with Kubernetes... Like, remember Cloud Foundry? The potential, what it could have been and it wasn't, and that's okay... It happens... Concourse, Kubernetes now, and SuperOrbital, where it's going, some of the people... You just go on instinct. And I think a planner needs to have that, because you need to understand how those big pieces - some of them are people, by the way - fit together.

**Tammer Saleh:** Yes. And we have been \#blessed. We have had so many amazing people working with us, and who we're talking about hiring right now, who want to work with us. So we've been very lucky in that regard.

**Gerhard Lazu:** Yeah, I see the same way. So the bombshell is that these three episodes are connected. The third one is the visionary. I cannot say who it's going to be in this episode; it will need to be a surprise. But it's someone that connects everything together. It's all linked. Tammer, Alex, this other person - it's all linked, and I'm so looking forward to that. That is the bombshell.

**Tammer Saleh:** I have a guess...

**Gerhard Lazu:** You can't say it, Tammer. You can't say it.

**Tammer Saleh:** I'm not gonna say it, but I have a guess. I'll shoot you an email after this, see if I can figure it out.

**Gerhard Lazu:** Afterwards, yes. Let's do that afterwards. Let's not spoil the surprise. I'm thinking we need to do this again, for Jerod's birthday, because I know that he enjoys this conversation so much. But maybe, maybe also in six months' time, maybe.

**Tammer Saleh:** That would be wonderful.

**Gerhard Lazu:** Let's see what the future holds. But I'm enjoying this so much. Thank you very much for today.

**Tammer Saleh:** I have so much fun, Gerhard. You make this so much fun every time. Thank you.

**Gerhard Lazu:** Always. Thank you very much. It takes two. It takes two, at least. Alright, Tammer, see you next time. Thank you very much. See you, bye!
