**Adam Stacoviak:** Cory, welcome to The Changelog. We've been looking forward to this conversation. We've been paying close attention to Codespaces, we've been paying close attention to, I suppose, the right timing for devs to truly consider what coding in the cloud can do for them, and when would be the right time to do it... So obviously, when I saw your post on GitHub's engineering team moving to Codespaces - you know, that's a big deal. I had to reach out, get you on the show, so... Welcome.

**Cory Wilkerson:** Thank you very much, happy to be here. Thank you for having us, and your interest in Codespaces.

**Jerod Santo:** So the big news is that GitHub's engineering team, all 600(ish) have moved to Codespaces. Maybe we just start right there, and you can tell us that story.

**Cory Wilkerson:** Sure, yeah. There's all kinds of places to start, but I think the net of it is - if you look over the past 30 days right now we have 600 GitHub engineers active in Codespaces, which I think is just a really interesting and compelling story.

We were just talking before the show a little bit... I started off as a bit of a skeptic in this space. I was kind of roped into the effort and asked to help move from what was effectively kind of no adoption, into a real commitment to Codespaces... And that turned out to be a heck of a journey, and where my story in Codespaces starts.

What would be most interesting to explore there? Do you wanna know ground zero, what it looked like from day one, and how we built momentum there? What all would you like to dig into there?

**Jerod Santo:** I like the Why's. Why are we doing this? Why did GitHub decide to do this, and then how did you get involved?

**Cory Wilkerson:** Yeah, I think the Why here is basically we saw an opportunity to remove an entire class of productivity issues that I think we've all experienced as engineers. I've been doing this for 20-25 years; y'all have been in the industry for some time... And a near constant is this friction you feel over development environment complexity. It's like an ever-present challenge. There's not a single day where you don't see some kind of signal of environment complexity or challenge, and I think GitHub saw an opportunity with kind of where the industry was, and a lot of tech that was out there, to kind of bring these things together, the mentality in the industry and the tech that had emerged, to remove this class of issues.

And GitHub is around a thousand engineers, so you can imagine that winning back productivity for us gets very valuable very quickly, at the scale of a thousand engineers. We're not a huge shop, we're still relatively small, but still, developer downtime costs a lot, and I think we saw here that we could bring this tech together and effectively just kind of remove this class of friction for GitHub engineers, and of course, the industry at large.

**Adam Stacoviak:** Does that also speak to the lower barrier to entry, in terms of class of issues?

**Cory Wilkerson:** \[04:10\] Yeah, without a doubt. I think about -- one big benefit of Codespaces is just accessibility into projects now. The idea is that the environment kind of ships with the project. For some time -- for my entire career you would have to bend your environment to the will of the project, your local desktop. You'd have to kind of make the thing work to support the project. And that was oftentimes not a smooth transition whatsoever.

Now the idea is like "Hey, the environment is kind of attached to the project. It's part of the repository." We capture the environment and configuration. You click a button. We launch that compute for you out in the cloud; you attach your development environment and you're up and running. That class of problems is now gone.

So one, it solves friction, two, it makes things far more accessible... And I'll say - personally, I'm kind of a top-down learner, and not bottom-up. I think many people are kind of top-down. In a new application that's unfamiliar to me, I like to start to tinker in it a little bit; change a thing here, refresh, see what happens, and see if I can gain purchaser traction that way. And Codespaces is a perfect tool for exploring new spaces.

**Jerod Santo:** Well, Adam, you can speak to friction when it comes to development, right?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Because, Adam, you hack on our codebase just infrequently enough that every time you work on it, I think, you hit friction. Don't you?

**Adam Stacoviak:** Yeah. If I accidentally Homebrew-upgrade or something like that, and you know, I'll upgrade Postgres, or something will happen to my database... You know, I've learned enough now to navigate our setup scripts better, but as Jerod said, it's only infrequently that I'm not always on the up and up, and something will change and I'm just not on the tip of the codebases as much as I can be... So I definitely hit this often. Even within older days too, with Ruby, and you know, pulling somebody's project with Ruby Version Manager (RVM), or whatever you would use... Always trying to be in "Which version of the language is supported in this certain codebase?", doing that in the Gemfile or something like that, locking that thing... Or even understanding the syntax to define how you would roll up to a different version, so I can support this version of Ruby to this version of Ruby... It's just been a challenge.

So when I spoke to barriers of entry, that's what it is - you have to learn so much ceremony, which over time as being a developer you will learn these things... But on day one, if you can remove that friction... And this is 1) a ton of time-savings for existing engineers, existing teams etc. but then also removing that barrier to entry.

**Cory Wilkerson:** Yeah, I can play on that a little bit. I was speaking to a principal engineer inside of GitHub yesterday... He's been here for almost a decade; he's just an excellent -- you know, at some point he's going to turn into an Octocat. He knows GitHub through and through. And I asked him, I was like "How many hours a month do you think roughly you kind of lose in productivity when it's environment breakage issues, something unexpected enters the environment and kind of throws you out of flow, or maybe you have to refetch you environment to explore some PR, a new project etc? Give me your read."

Now, you have to remember, this is one of our best engineers, principal level. Kind of a best-case scenario, so to speak. Kevin said he's losing ten hours a month on basically like lost productivity time. So at a GitHub scale you can start to do the math there. Assume -- again, that's best case. We have a thousand engineers; Kevin is losing ten hours a month. You can do the math, extrapolate that over the course of a year. Just getting back that time -- and it's not just like the recovery of engineering time; it's the recovery of value creation time. I think that's the most compelling part.

So it's not just like "Oh, we lost this much productivity time." Really, the loss is "What did we not build in those moments? What did we not get accomplished in those moments?" And I think Codespaces removes that class of issues again, and keeps us focused on creating value. To me, that's so refreshing. That's what I wanna be doing when I'm at work. I wanna be building my impact story and building software for the industry. GitHub is this high-leverage moment; let me ship high-leverage, impactful code, and not toil over my environment.

**Adam Stacoviak:** \[08:21\] Why do you think now is the time for Codespaces, or just in-the-cloud development?

**Cory Wilkerson:** Yeah, I think all the raw ingredients are now there. The raw ingredients aren't just like tech. Some of that is just how the industry thinks. Containers have been on a tear now for years; containers are kind of everywhere. You see maturity across the industry with respect to container-based workflows. But I think another critical part around this was skepticism around cloud-based workflows is basically non-existent at this point.

I've been in the industry for a while, and maybe a decade ago you were like "Oh, I would never move that thing out to the cloud. That's gonna run on my precious racked hardware here in this closet." That mentality is effectively gone. We're moving more and more precious workloads to the cloud on a daily basis. There's no reason we can't do that with our development environments today, which are kind of like single-track. We think about the laptop being kind of a bit of a constraint, right? It's like, this one curate, bespoke environment, the only place I can work. It's like, why do we have that arbitrary constraint when we don't have to?

And then of course, VS Code out there is obviously another key part of this. It's like this super-powerful thing... And we look at the idea that containers are everywhere, we have VS Code, this really powerful tool that we work closely with, and we've got the fact that the industry now has broadly adopted, exclusively almost adopted the cloud. It felt like we had the raw materials in place to go pursue this.

**Adam Stacoviak:** It's interesting you mention that too, because I was thinking about the timeline, and just the perfect -- I'm not sure if this is the best way to say it, but the perfect storm, really. You've got the trajectory of Microsoft supporting open source and Linux. I'm not sure which came first, if it was Linux and it was open source, or open source then Linux... Then obviously the acquisition of GitHub, the longtail investment of VS Code... And not just the investment into it, but then also the community's support of it. There's a lot of Vim users out there, but there's so many VS Code users out there. And they're die-hard, and it's just so much.

**Cory Wilkerson:** Yeah. I mean, VS Code is just a powerhouse right now. It wins business because it's an incredibly powerful tool. And that's what we're focused on with Codespaces. And like you see with VS Code... You just wanna build kind of best-in-class product experiences. Then the users will follow. People are looking -- developers especially are seeking productivity. If we gave them a tool that didn't make them more productive, they would just reject it out of hand. That was kind of the North Star for Codespaces - this has to unlock productivity for us. It cannot at all create any kind of drag, or we will just lose to local desktop development flows. It has to be in parity with that and then add some for us to actually enter it into this space successfully.

**Jerod Santo:** You said something interesting about the preciousness of our development environments... And I'm with you that we've commoditized the servers, but we definitely have not commoditized dev, because it's so intricate, it's so set up... Sometimes it's like "There be dragons. Please don't touch my laptop, because it works right now, but I'm not sure if it's gonna work tomorrow." I do hate that. I think it's almost a different skillset, of maintaining that. There's overlap between development and the maintenance of a development environment in terms of things that you need to learn... But it's almost a different task altogether. So I don't like that about it, but it's still very true that our development environments are precious to us, and they're tweaked, and configured, and customized, and all the things. So I'm sure there's probably lots of resistance to this...

\[11:59\] We talk about our setup - we have probably tens of thousands of lines of code, and very few dependencies in our stack, but GitHub is 14 years old, and there's a million plus commits, and I'm sure the dependency list is very long... What kind of effort was this? Tell us the story of bringing it along.

**Cory Wilkerson:** It is. These are all very, very true points. You know, the last thing I wanted to do was kind of be the vessel that went out to GitHub and said "I wanna change your development environment", because these things are so precious. Like, I'm an engineer, too. I think my environment is very much precious. And here I was, kind of the face in GitHub of saying "Well, we think we have a better way. Come join us over here."

And I started off on this journey as a skeptic. I think I shared some of this, too... I didn't think this would be a fruitful journey necessarily. I was just gonna go do my level best as an employee, see if I could make it happen, build moment etc. and see if I could find something out there. Now, on the other side of this journey, I feel like I'm completely on the other end now, where I'm just like "This is the future. This is the way that we will absolutely build software..."

But going back to the core of the story, it was literally just me out there, calling on my friends to begin with, inside of GitHub. I'd been there for five years, and the first few years were just me tapping into relationships, saying "Hey, can you give this thing a shot? Can you try this out? I wanna get your feedback and feelings about where this is at." And no one could yet use it on our core repository. We call it github/github - the organization is GitHub, the repository is GitHub. We didn't have this thing standing up in a Codespace yet, but we had other repositories that were compatible with Codespaces.

So I'd go out and ask favors of friends, and just be like "Can you try this out and give me some feedback?" And generally, the feedback I would get back was -- first it was resistance, like "Why would I do this? It's productivity lost; tax on productivity. I don't trust HTTP. There's gonna be lag", that kind of feedback. But then people would try it and they'd come back and be like "Huh. That was maybe better than I thought."

At the same time, as I hacked in this space too, I was starting to get some of that "Well, there's something here." The big a-ha moment for me was connecting VS Code into my Codespace out in the cloud and still retaining that local development experience. So it felt to me like it was still very local. The magic is the synchronization that's happening between the local environment and the cloud. It feels totally transparent.

But that aside, it started with just a very small number of users. So we would go back to leadership in GitHub and talk about progress we were making... And the early days, the story was "I have five people that have responded positively to Codespaces." So not much of a story, but starting to kind of make a little bit of progress. And then maybe it was ten people.

Then, the next iteration on this was like "Well, let's go find a team. Let's get a full team on Codespaces. How can we get a single team - 6 to 8 people - committed to using Codespaces, and stick in this thing?" At this point we'd had this other effort running on the side to get github/github, the core github.com repository, compatible with Codespaces. And we'd gotten it to a point -- we detail how we did this in the blog post - where performance was mostly acceptable. So now we could go shop this with a team that worked primarily on GitHub.com and see what their experience was. And we're making progress there. So we're ramping in -- I think y'all have talked to Kyle Daigle in the past. Kyle was the leader of that effort that got this team spun up inside of Codespaces on GitHub core. And again, it was somewhat retentive. People were sticking, and going like "Wow, this is not what I thought. It's better than maybe what I thought."

\[15:59\] But I think the real breakthrough moment came when we stopped calling this dogfooding. You hear this term all the time, dogfood... I think it actually originated -- I looked up on Wikipedia; I think the term originated inside of Microsoft a number of years ago.

**Adam Stacoviak:** Is that right?

**Cory Wilkerson:** But GitHubbers, my colleagues don't respond well to that term. Dogfooding doesn't inspire anyone to go do anything. Just like "Eat the dogfood? Who feels good about that?" And so what we did was we launched what we called the GitHub Computer Club, and I would love to dedicate a full episode on this. It's a really interesting concept, and something I hope to bring out to the industry. But we asked people to join the GitHub Computer Club. And in doing so, they took this commitment or oath. I wrote up this script, "I do solemnly swear to never -- no shadow compute, not desktop compute. I'll join this thing and forever be member of the elite, exclusive GitHub Computer Club."

**Adam Stacoviak:** I love that.

**Cory Wilkerson:** We made a bunch of noise about it... Yeah, people loved it.

**Adam Stacoviak:** That's so cool.

**Cory Wilkerson:** People straight up were just like, "This is great. Let me in. I want a membership card." And in doing so -- we had to give them something in return. So they would join the computer club, but we offered to our "exclusive" members what we call the concierge team. And this team was built to kind of support their productivity and success inside of Codespaces.

So the second these people had friction - you know, one of the requirements of entering the computer club was that you had to kind of raise your hand. You couldn't disappear and go back to local desktop. You had to virtually raise your hand and say "I'm about to opt out of this, because Codespaces can't keep my business right now." And the concierge team that we had built could swoop in, respond to "What's going on here? Let's dig into it. Why can't we keep your business in Codespaces?"

We continued to play that model back and forth between Computer Club and concierge team, until we had built the product and built enough momentum inside of GitHub that one day we kind of looked around and we were like "Wow, we have hundreds of people developing GitHub.com and GitHub Codespaces." And I think the real story there is just commitment to make it happen. We want it to be successful with this, and not just go talk about it in the market, but actually show that this is a better tool for us. The computer club is still going strong. People are demanding that I give them satin and denim jackets; I'll get around to that at some point.

**Jerod Santo:** Well, I hate to break it to you, Cory, but GCC is already taken as an acronym, so... You've got a namespace conflict on that one.

**Cory Wilkerson:** Yeah... Well, maybe the Codespaces Computer Club, so we can go with GCCC.

**Jerod Santo:** There you go.

**Adam Stacoviak:** All the C's. I like this aspect because you treat this like a customer scenario. You built a product, and you have to retain customers. And you're actually exercising a great principle for anybody building a product, which is "Talk to your users." And when they have trouble - swoop in, as you had said, understand those problems and be committed to fixing them. I think that's a great way, a great story for how Codespaces became powerful inside of GitHub, because that's exactly how you build a product. Not just "Let's just try this thing and hopefully our internal team adopts it by force."

As you had said, you wanted to go along with your employee card and be able to see if Codespaces could work, and out the other end you became a believer. But you're not forcing GitHub engineers to use it, you're asking them to try it. In this case, the Computer Club, with the oath... And then as you said, you look up and you see hundreds now.

**Cory Wilkerson:** I think that's right. The position was -- no Fiat. We didn't wanna lead with "You have to do this." That's the absolute wrong way to get adoption in your product. We wanted to literally win the business of our colleagues. We wanted to build such a fantastic experience in Codespaces that people would choose it. And yeah, I think the Computer Club probably boosted adoption a little bit, do doubt about it... But what made that work --

**Adam Stacoviak:** You've gotta use some emotion in there. You've gotta put some emotion in there.

**Cory Wilkerson:** Yeah, exactly.

**Adam Stacoviak:** \[19:59\] You have to get them excited.

**Cory Wilkerson:** It had to have a soul. It needed some soul behind it, that was the idea. And the fact that we did respond to this -- we actually did win business. When things didn't go well and when people wanted to opt out, they could, and they would, for a week, or whatever... But the goal was "How do we get them back in here, kind of remove whatever that impediment is, and get them productive in Codespaces again?"

**Jerod Santo:** So what happens if you take the oath and you go back? Do you chop off a finger, or what's the penalty? \[laughs\]

**Cory Wilkerson:** Well, you know, we leave that intentionally vague, so people can assume the worst. No, I don't know that we've had any real regression there just yet, which is good. Codespaces is super-retentive. I think we have people from time to time use local desktop. We have a colleague -- this is actually in the blog post maybe... A colleague of mine reported the other day, she said "I was using local development. My environment broke, so I switched over to Codespaces." And she was like "I actually shipped my task in my Codespaces before my local development environment rebuilt." I think everyone was like "Wow, that is such a good story." And it's so true. It's kind of the experience we're all having right now with Codespaces.

We talked about it, again, in the blog post - you click a button and the environment is live. So for every new engineers that joins GitHub, I think they all are probably fairly spoiled at this point, because day one they click a button and they're able to run that entire GitHub.com environment. It's just been really incredible to watch.

**Adam Stacoviak:** So Cory, the way you've explained the flow of this GitHub Computer Club seems a little smooth. I've gotta imagine you hit some friction. Can you share some of the struggle that you hit? Some opposing forces in the process of rolling this out.

**Cory Wilkerson:** Yeah. Basically, it started with a bunch of "No" throughout GitHub. I think people had seen previous iterations of Codespaces... We announced it, I think, in May of 2020, at GitHub Satellite.

**Adam Stacoviak:** Yeah. The first tweet I saw about it was Kelsey Hightower's, actually.

**Cory Wilkerson:** Okay, yeah.

**Adam Stacoviak:** So that's May 2020.

**Cory Wilkerson:** It's been out there for a while... And I think when people first try to use it inside of GitHub, there was a bit of friction. It didn't work for them, and I think first impressions can sometimes be lasting impressions. So when I went out there, I'm just like "Use this thing. It's great. It's really evolved. We feel pretty proud of it", and it was just a bunch of "No" left and right. So then it became "How are we gonna build this business?" And yes, the Computer Club was a big boost, and the concierge team certainly was a huge, probably the most high leverage practice we discovered along the way... But a lot of this was just like startup style practices. We're building a business inside of GitHub, and I think that's maybe a useful context for anyone that's trying to build adoption of their own products in-house; you've gotta think of this sometimes as like "This is your own business. How are you gonna build it inside of GitHub, in what is a kind of very stubborn audience?" And I'm a developer, I can say that; we're somewhat stubborn and we find the tools that work well for us, and if someone comes and says "I wanna change those", your response is gonna be "Don't."

**Adam Stacoviak:** "Don't touch my local dev environment, Cory."

**Cory Wilkerson:** Yeah. And we'll get to this in a second - one of the great parts about Codespaces is that we just commoditized the compute part of this. The environment is now running somewhere else. But dotfiles, VS Code setting sync, VS Code extensions - we bring those all to the environment. So you don't lose your curated workbench. If you've got a dotfiles repo set up on GitHub right now, we bring that into the compute environment; we bring your environment and your personality, your expression of yourself captured in code into that environment. We bring your W out to your compute, which I think is a really nice touch. So you get the unburdened computer running in the cloud so you freed up your local machine, but you can still bring your preferences into that environment.

\[23:54\] I digress... Going back to building the business a little bit - it felt like startup tactics. So we had the concierge team, we had the Computer Club... We had effectively guerilla marketing. We were out on Slack every day, looking for opportunities to say "Have you tried Codespaces?" People were receiving M1 architecture Macs, and the github/github build just would not yet work. We had not put in the investment to make the github/github run on the M1 Mac, so we'd say "Hey, have you tried with Codespaces yet?" And people would be like "Well, I guess I'll try. That feels like my only path right now." And they'd click a button, they'd come back an hour later, or a day later, and just be like "What in the heck? This is incredible. How was this even possible?" And those people you just win for life. That's their full mode of operating. So that was the guerilla marketing angle...

We did pairing sessions... So we were up in front of everyone all the time, saying "If you wanna get started, here we are. We're gonna hold your hand through this and show you the ropes, show you how we're doing." Kind of social proof, I think, which is really valuable there. All hands -- we'd get in front of the entire company and demo the thing, and be like "Look at this, it's incredible" and just try to build hype.

We connected with the right people... I maybe loathe to call them influencers, but the people inside of GitHub that every engineer look up to. They look up to them and say like "This is the person that I aspire to be at some point." We converted them. We want their business. They're kind of like trendsetters and tastemakers internally. And then really it boiled down to ruthless prioritization. So we listened to our users, "What do you need?" and we demonstrated that we could follow through on those things. For some reasons, someone was trying to run some arcane karma test somewhere that wasn't executing for them. It's just like "Alright, great. Let's figure out how to make sure that works in this environment." That kind of thing. Even small tasks like that were important in building momentum.

And then I'll say it again - one day we just looked up and we'd gone from a bunch of "No" to a bunch of super-fans inside of GitHub. We have cheerleaders. If you go out and look on Twitter right now, the day after we kind of announced Codespaces to the world, they were just like -- GitHubbers were out there very enthusiastic about the thing, and it was a very genuine response. We didn't ask anyone to go do that. People were just that enthused about what we built.

**Adam Stacoviak:** Yeah. I saw a tweet from Kelsey Hightower - again, I'll mention Kelsey... I don't know if this tweet was actually towards Codespaces or the announcement, but the timing - it was the same day, I believe, so I think it was a subtweet around it, but he said "Back in the day we wrote code on our own computers." So I'd assume that he was reflecting on Codespaces and the announcement, but I wasn't sure of that.

**Cory Wilkerson:** I saw that, too. I mean, you used to run your server in a grey tower, beige tower underneath your desk too, right? Those days are gone, it kind of feels like. This is this next wave - we're now moving development environments out into the cloud. It just feels to me like two years from now we're gonna see some incredible adoption in this space.

**Adam Stacoviak:** You mentioned a bunch of No's in the adoption flow... At what point was Nat a believer in Codespaces?

**Cory Wilkerson:** You know, Nat holds a very high bar. I remember, as we were trying to get GitHub running inside of Codespaces, I'd go back to Nat and we'd show him "Hey, now instead of 45 minutes it's 20 minutes. We've made these changes." And he was like "That's super-cool. Not good enough." And we totally agreed, we're like "Yup, it's not good enough, but I just wanted to show you progress." We'd get that feedback, and then we'd come back again and say "We're down at ten minutes." "That's great. It's not good enough", and everyone's like "Yeah, you're right, it's not good enough. It's gotta be seconds for it to be the experience we want." That was kind of the iterative experience.

I think Nat has been a believer in where this thing could go, from kind of the outset of the journey. It's just been a bit of a slug as we worked from the very early days of like "Look, we have all this tech orchestrated that can produce this effect of a Codespace", maybe the early prototype, down to now the ten second story inside of GitHub. That didn't happen overnight.

\[28:08\] But the good news is most of that - almost all of that now - has made it into the product itself. So the changes that we've discovered along the way didn't just benefit github/github and the GitHub.com repository, it benefitted the entire product. I think Nat's a super-fan now. I've got some screenshots from Nat that I look at from time to time, that keep me pretty enthused about the progress we've made.

**Adam Stacoviak:** Even in your blog post you took us on a journey from (I think) hours to 45 minutes, to 5 minutes, from 5 minutes to 10 seconds... So I don't wanna gloss -- I've got a question around 5 to 10 seconds, but I don't wanna gloss over the full journey. Is there anything in the hours to 45 minutes, to 5 minutes - that journey was worth covering deeper?

**Jerod Santo:** Shallow cloning it sounds like was a win...

**Adam Stacoviak:** Yeah.

**Cory Wilkerson:** Shallow cloning was a big one, yeah. When I first got involved in this and I would just try to start a Codespace, I would sit there for 20 minutes staring at my terminal while I waited for the clone to complete into a Codespace.

**Adam Stacoviak:** This is like gigs, right? 13 gigs for GitHub.com?

**Cory Wilkerson:** Yeah, 13 gigs. Yeah. And that's no way to -- I mean, honestly, I can't believe we had the perseverance to do this. I was spinning up tons and tons of Codespaces, just kind of watching this churn, getting more and more frustrated...

**Adam Stacoviak:** You wasted your time so no one else would -- I mean you wasted a lot of your time so no else did.

**Cory Wilkerson:** That's right. That's my love for Codespaces, and there was no balance. I've put in a lot of time, trying to get to the point where I could say "This thing works." So yeah, shallow caching was, I think, a big step forward for us, where we went from 45 down to like 20 minutes or something like that.

The next big leap for us was caching as much of the bootstrap activity as we could well ahead of time in a GitHub Action. So we have a nightly job that runs, and basically sets up 95% of our environment. That got us down to super-tight times. And then the final step was this idea of pre-built. So when a Codespace is provisioned, we clone your repository, we stick it out into some storage, we attach storage to compute, and we run some lifecycle commands on that. That's kind of the very high level overview. With pre-builds we kind of do all of that ahead of time.

The thing is built. It's ready to go. There's really no startup time. You just connect the pre-built image to compute, and you're off and running. And that was kind of the last frontier for us in terms of speed. Now, we're gonna continue to invest in speed. I've said this a few times to folks recently, but fast and reliable never go out of fashion, and they're gonna be absolutely critical for us in Codespaces. When you think about your IDE, what do you want? You want fast and reliable. You don't wanna feel lag in this environment. It has to be always on, always available. We wanna continue to invest in these things, and we will, over and over and over again.

Pre-builds right now - I'll just go ahead and share that it's currently in beta, so we're onboarding customers in the prebuilds, where we're working with customers directly on their pre-build experience. We'll be getting this out to market relatively soon.

**Adam Stacoviak:** Yeah, because this is the story of GitHub using Codespaces. That doesn't mean that every enterprise that is in this sweet spot, that has a large enough organization, that has the scale of an organization that can actually leverage time savings. Sure, small teams might win, potentially by going to the cloud and that may prove successful, but this is GitHub's story using it, and these are the things you've had to do to get there, which is pre-builds, and shallow cloning and whatnot.

**Cory Wilkerson:** Yeah, I think that's why we launched with teams and enterprises first. It fits that use case super-well, no doubt about it. There's lots of Docker competency in those organizations, container competency etc. But I would also say that it's very easy to get started with Codespaces. I don't wanna scare anyone away with the GitHub story. Yes, it took a ton of work, but a lot of that now is just part of the product.

\[31:59\] So we've done the discovery, and then we've captured that in the product itself. So even if you don't know anything about Docker containers, for instance, you can launch a Codespace today and it drops you kind of a default image that has the tooling for so many frameworks that you're used to working with - Node, or Rails, or Java etc. So it's like a default option.

And then we maintain a community-powered repository. VS Code Dev Containers is the name of the repository, where there are -- I don't have a number off-hand, but let's say hundreds of community-powered images that you can reference in your dev container.json, and launch immediately into an environment that's well-suited for, let's say, Ruby on Rails, for instance. So it's not this "Oh, you have to be a Docker expert to be able to use Codespaces" whatsoever. There are all kinds of easy entries into Codespaces.

**Jerod Santo:** So the discrepancy in the numbers - you have a thousand engineers and 600 on Codespaces. So are there 400 holdouts, or does it not apply to them, or what's the situation with these 400 stragglers?

**Cory Wilkerson:** Yeah, it's a good question. Our efforts have been primarily focused on GitHub-GitHub. The core GitHub.com repository. There are literally thousands of repositories inside of GitHub, probably hundreds of active repositories, so we need to go win the rest of GitHub's business.

The story right now has been primarily focused on the majority of development inside of GitHub, and that's through .com. I think I mentioned this earlier too, but the intent is sometime in September to kind of sunset macOS development as the officially supported platform and pour all of our energy into Codespaces for .com development. And this will start to kind of push out into other repositories inside of GitHub.

**Adam Stacoviak:** This is a big push too even internally. I think you mentioned a little bit in your blog post the macOS-centric nature. Even I guess the challenge of the transition was pulling away from a macOS-centric dev environment to something that was more Linux-based, Linux VMs that are being run inside of Codespaces. Can you speak to that a bit?

**Cory Wilkerson:** Yeah, I think the years and years and years of assumptions that we're always gonna develop on macOS, right...? And it's interesting, because you think about CI, for instance - you try to get CI as close to your production, resembling your production environment as possible, so that you're guaranteed the integrity of your code... And this environment is likely to transfer into production. But development - we had this weird gap where everyone was kind of on macOS and loves macOS; I'm a big macOS user. I'm not gonna convert to a Unix platform for development. That's just not the way that I wanna work. I quite enjoy being on macOS.

So the good news here is that we didn't have to convert anyone to a Unix platform. In fact, maybe those on Unix are also quite happy now, because they can continue to use Unix platforms... But you stick on macOS, you use VS Code, or you use VS Code in a browser. It's the web UI for Codespaces. You're able to stay in your macOS environment, but now you've just moved the compute away. So now the compute is running in a container, out in the cloud. And to me - maybe I've said this already - that's the magic moment for me with all of this... The big a-ha breakthrough for me was I'm still kind of on macOS; I'm in VS Code locally. I'm getting this native experience; my dotfiles are synced out. Setting Sync is running for me, I'm using my extensions, and I don't feel any lag. To me, that was just incredible, the fact that I could just sit here and bang away on my keyboard and know that that code was somehow, magically, synced out into the cloud, without me taking any action, and I'm able to open up my terminal and run my code directly from VS Code.

**Jerod Santo:** Right. And your fans probably aren't running at top speed.

**Cory Wilkerson:** \[35:54\] Exactly, yes. A lot of this is just kind of strange, suddenly. You're just like "This is all kind of working together."

**Jerod Santo:** I'm used to my laptop being on fire while I'm developing, and it's no longer the case.

**Cory Wilkerson:** Yes, right. Docker is not running on my desktop. Docker is running out on a cloud. It's just a really cool moment and experience. And I had some skepticism around this workflow because of prior experiences I'd had out there some number of years ago using cloud-based development environments. They didn't quite meet the standard that maybe every developer holds for themselves.

**Adam Stacoviak:** Yeah.

**Cory Wilkerson:** But I haven't felt any of that in Codespaces.

**Adam Stacoviak:** So you mentioned that the lens that you're speaking from here today and the blog posts that you've put out so far is around GitHub.com development. So there's hundreds, thousands (I can't recall what you said) repos being used inside of GitHub, so is it safe to say that as organizations adopt and use Codespaces, they're gonna have to get specific about which repos they support on Codespaces, and each repo or team type, like an API team might need different love and support or concierge than, say, the .com for their business.

**Cory Wilkerson:** You know, I don't think so necessarily. I think this is just a -- I just asked someone one the team a couple days ago to pull the list of repositories that have been active with Codespaces over the past couple of weeks, and there were dozens that have now started -- at least started to explore, if not fully embraced Codespaces. And I think what you need probably is kind of the -- what's the word I'm looking for here...? The flagship offering in your organization. So you need the one reference point where you can show and demonstrate to other people how you've been successful with that repository. And that's GitHub-GitHub, or the .com repository for us. So we've demonstrated we can be incredibly successful with what is the most challenging product inside of GitHub. Anything after this actually should just kind of be--

**Adam Stacoviak:** Easy.

**Cory Wilkerson:** ...fairly easy. There's still some effort. But it feels like we now have a great point of reference for other people to latch on and adopt.

**Adam Stacoviak:** When you have a 13 gigabyte repository with a lot of dependencies, and a lot of engineers - 600 engineers at least, based upon this smaller sample size of a thousand engineers within your organization. That's significant.

**Cory Wilkerson:** Yeah.

**Adam Stacoviak:** That's gonna be hard to get onto a whole new paradigm for developing everyday software.

**Cory Wilkerson:** I think so, too. You've gotta do it though -- like, you win the business because you build a better tool. I think that's what it boils down to. It shouldn't be about necessarily preference. What you want is value and productivity. Do we build a better experience, and can we actually become the preferred experience? That's really kind of what we're after here. As long as you're building a fantastic product, that makes developers feel like they're more productive, they've got a better tool on their hand, they'll use it. There's no question about it. I would never say no to a better tool, and that's what we see inside of GitHub.

And it's not just like "Oh, I've taken my laptop now and I've moved it out to the cloud." In fact, I think we discourage that model. I don't want you just to recreate your laptop in the cloud. That doesn't make a ton of sense for us. When I say "us", I mean developer community. We want to be able to work in parallel environments, on-demand environments, reproducible environments etc. So you don't wanna go curate this bespoke laptop replacement in the cloud. You wanna think about a thousand, an infinite number of laptops in the cloud that you can provision on demand for the task at hand. So we think about these as task-based. So we have a one-to-one concept between "I've started a branch" and "Here's the Codespace for that branch." This is kind of maybe short-lived; you work on a branch for a week, or something. And with it, your Codespace. At the end of that, you retire that Codespace and spin up a new one for your next set of work.

**Jerod Santo:** So let's revisit this dot feature, which is very exciting. You're on GitHub.com and you're on a repo. For example, I have the fzf repo open. Right now I'm looking at the readme... And you hit the period button, the dot on your keyboard. Explain what happens.

**Cory Wilkerson:** \[40:04\] Yeah. I mean, that is -- right now I don't know that we've given it an official name. Behind the scenes we refer to this as the web editor inside of GitHub. Many people have called it GitHub.dev, a few have called it Codespaces. But the idea was we're launching Codespaces, we know it's well-suited (based on our experience internally) for teams and enterprises at this point... But the ethos of GitHub is developer-first, without a doubt. It always has been. So when we launched Codespaces, we wanted to make sure that we could give every developer on .com a better editing experience.

So when you hit that dot button today, you move into VS Code, kind of multi-file editing experience... So that's fully functional VS Code and the browser, attached to a repository, and from that repository you're able to do basically any kind of Git operation. So you can open a PR in that space, you can make changes in that space, you can commit from that space... So there's a lot of Codespaces similarity here.

Where it falls short -- what we don't do here is offer compute. So you can't actually execute the code that's in that environment. There's not a terminal in that environment. And those things we offer up in Codespaces itself, So the next story for us is like "How do we connect these environments?" We want you to be able to move from a .dev into a Codespace kind of seamlessly. So that'll be some of the next experience.

So to answer the question, .dev is kind of a multi-file editing experience and you have the best editor on the planet as far as I'm concerned in the browser, and it's something that folks have wanted from GitHub from quite some time.

**Jerod Santo:** Yeah, this has now become the de facto way that I will peruse some source code on GitHub. I used to just sit there and click through the little slide-by file browser thing... And it had some cool stuff, like the Cmd+T, or the integration fuzzy finder stuff in that UI. But why do that now? You just hit dot and it just takes you to basically VS Code in the cloud, pointed at that repo. It's awesome.

**Cory Wilkerson:** I think it's awesome, too. We saw the same experience inside of GitHub. So we built the thing, we shared it internally, and we said "Can a few people use this and kind of give us your feedback and experience? Tell us where it needs to improve."

And I think we looked at usage numbers a couple of days later internally, and we were like "Oh wow, we're creating a lot of value here right away." Just immediate uptake inside of GitHub. And I think it is the primary means through which people do kind of explore code now, and that just happened overnight, effectively, when we launched the thing.

I was on an interview a few days ago with a candidate, and we'd just announced it. So it was the day of the GA announce, and he was talking about how he uses GitHub as kind of the center of his learning journey. It's always been -- he's like "GitHub and Stack Overflow are my two tools when it comes to learning." So he's sitting on GitHub, and I'm like "Have you seen the .dev stuff?" and he said "No, what's that?" I had him hit the dot button, and I'll just never forget his reaction. He was so satisfied in that moment. He's like "What is happening? This is incredible." He's like "It's so great." And it was just a really neat kind of moment to have.

**Adam Stacoviak:** This is very much an on-ramp then to comfortability with Codespaces.

**Jerod Santo:** Life in the cloud.

**Cory Wilkerson:** Life in the cloud, yeah. I feel like you will see that transition at some point. You'll be in some environment, you'll wanna make a change to it, or you'll just kind of wanna execute it... So you'll be like "How do I move into compute?" We wanna make that transition seamless for you. So you kind of attach compute into this environment, do what you need to do...

In other cases it's just this read tool. I would imagine the dominant use case of .dev is gonna be primarily for reading and browsing.

**Adam Stacoviak:** Gotcha. When I saw Nat's tweet on this and I connected the dots, I was like, "Okay, the timing of your blog post and the announcement of your team transitioning to use Codespaces, and this dot, and we're a team organization on GitHub, and we're like "Hey, we've got Codespaces." So I was like "This is sweet, I like it."

**Cory Wilkerson:** Yeah, there's been a little bit of confusion--

**Adam Stacoviak:** Some confusion there...

**Cory Wilkerson:** \[44:03\] ...around that. But it's been fine, for the most part. I feel like -- we didn't quite give it a name, and I thought people would probably call it .dev, and we're seeing people largely call it .dev... But at some point it will fold into what I think is like a comprehensive Codespaces experience.

**Jerod Santo:** So let's say I'm on the Codespaces product and I have my customizations in there somehow... And we haven't talked about how you do that, or is that team-level; hopefully it's personal, hopefully it's probably both, with like a CSS cascade...

**Cory Wilkerson:** It's a bit of both, yeah.

**Jerod Santo:** Yeah. If this was tighter-integrated with that, like with my extensions -- I'm looking at this, it's a stock VS Code; it's even missing some language support, because you probably just put the top ten languages in there... Would I bring my extensions into this? Would I bring my VS Code config into this? What would it look like?

**Cory Wilkerson:** Yes, I think .dev today supports Setting Sync, for instance... And I'm pretty sure -- and I can't say this with 100% confidence; I should go look into this right now... At least on the Codespaces side you codify in devcontainer.json, you capture your extensions that you want available in that environment; we specify them for every engineer... And you're able to specify machine profile or skew that you enter into... And then we bring using Visual Studio Setting Sync your settings that you've configured as kind of like your development environment in VS Code, into that Codespace with you. So they're present with you.

And then again, the Dotfiles repository - a lot of people don't know what that is, so I'll just clarify a little bit... So the dotfiles repository is literally called Dotfiles. It's inside of your GitHub account. So if you go to GitHub.com/corywilkerson, for instance, and you create a Dotfiles repo there, then any repo that I provision - you throw a flag somewhere in Codespaces settings; then any Codespace that I provision consumes that Dotfiles repository content and allows me to configure my environment in the state that I want it to be to develop.

**Adam Stacoviak:** Yeah. Which is great, because you took over a paradigm that everyone was already using, and I think people have had dotfiles, repos for pretty much ever... Either sharing them, or sharing them between themselves with different machines, or just being a share of natural open source tendencies.

**Cory Wilkerson:** That's one thing I love about GitHub, is that oftentimes there is that little bit of magic. Somewhere along the way someone says "You know, people already have Dotfiles repositories. Why don't we just give them an option to just pull that directly into the environment." And you're like "Wow, that is brilliant. Exactly why I love GitHub." Taste, aesthetic... We know what developers want, and what's gonna feel magical, and those moments are always just very cool to kind of trip into. You get a couple per project like that, and it's what makes GitHub just really, really special.

**Jerod Santo:** So this is interesting... I'm on GitHub.dev, I'm looking at the fzf repo... I installed the Vim Emulation Extension into that VS Code instance. Then I visit another repo in another tab, and I hit dot, go to GitHub.dev, and that extension is installed in this instance as well. Is this like a local storage thing? Is this attached to my GitHub account? How's that working?

**Cory Wilkerson:** Yeah, that's actually at this point using browser storage. So that's all attached to browser storage.

**Jerod Santo:** That's cool. It's a nice step.

**Cory Wilkerson:** Yeah, there's a lot about that. And it's a relatively new product, so we're gonna be listening to customers and iterating etc. But that's the experience that we kind of launched with at this point. Most of what you see in that environment, GitHub.dev - we call it browser compute. So everything that we're doing is supported by what we can do directly in the browser. The story kind of stops. There's obviously API calls that are happening in the background out to GitHub to bring the repository contents and allow you to push etc. and Git operations... But for the most part, it's "What can we accomplish in the browser?"

**Jerod Santo:** \[48:05\] Well, it's a new product/feature, but it's in the running for probably my favorite new feature in many, many years. This is just spectacular.

**Cory Wilkerson:** Yeah, it's part of my daily workflow now. It's harder for me to -- I don't know the last time I've cloned anything to my machine. I just don't do that anymore. I hop into a repository, to either .dev, to look at the contents, or into a Codespace to actually change a thing.

**Jerod Santo:** Yeah.

**Cory Wilkerson:** And in fact, I find myself engaged with many more repositories now, just because I have that access. I don't have to go through this additional step; I grab a URL, clone it down, open it in VS Code locally, all that kind of stuff is just gone for me now.

Interesting to see at a macro level what kind of impact this will have on productivity, exploration, contributions in OSS, how is this gonna meaningfully change.

**Jerod Santo:** Well, the in-browser editor has definitely helped with the drive-by contributions... When there's a typo, or there's like a thing that's missing and you can just edit it right there in your browser... It took you away from that friction, again, of doing the clone, all the things you've just described... But when it came time to do slightly more complex things, we all went to the clone process, right? Whereas now maybe we just go into this editor, and like you said, it might really ramp up slightly more complicated contributions.

**Cory Wilkerson:** I mean, you couldn't be more right about this. I can tell you -- you know, I'm Mr. Manager inside of GitHub; I've been in management for a while, and at one point I was a very good programmer, I like to think, but maybe not so much anymore... And it's nice to be able to hop into a thing and make a few changes straight away, without having to deal with all the environment complexity, render the thing when I'm in a Codespace, and say like "Actually, that did have the intended/desired effect that I hoped it would", and then maybe I have the energy to take it the rest of the way.

So there's all this kind of like -- the tech is super-cool, the experience is super-cool, the thing works really well, and you're like "Wow, this is incredible. We're finally here as an industry. We've finally made it. This moment... That's great." But then it's the other story, of like "So what does that mean? Now that we're here, what happens?" It seems incredible, the second-order effects we might see of having now reached this place where this is a viable option for development.

**Jerod Santo:** So here's a couple of grab-back questions about Codespaces, kind of the dev ex... If I'm actually using it, how does this work, what does this feel like? The first one is test data. So when you're developing, you like to have something that is like a snapshot, or looks something like what it probably looked at at some point, or maybe you wanna generate a bunch of test data... How does that work inside of the Codespaces setup?

**Cory Wilkerson:** I can tell you the GitHub engineers today - so the .com codebase - we have a number of seed scripts that we use to kind of see the database ahead of time... And those are executed in our bootstrap processes, and those are done in pre-builds today. So by the time you provision an environment today, you're up and running on your .com codebase, you have seed data ready to go in your database... I expect we'll see the same pattern across anyone using Codespaces. And then you can do the same thing off on a branch as well. This is really cool to think about. So instead of now having to destroy your local database environment because you wanna review someone else's change that makes modifications to that database - but that doesn't happen anymore. You're looking at a different Codespace. You're experiencing these changes in a clean environment, clean context; you've got your stable Codespace over here, but maybe you have versions A, B and C out here in discrete Codespaces, that are making what would otherwise be destructive changes to maybe your main branch, that now you can explore without any repercussions into your local environment.

**Adam Stacoviak:** Almost like you said you have access to infinite laptops.

**Cory Wilkerson:** Exactly.

**Adam Stacoviak:** I think that's a different change in paradigm. It's like infinite branches at once, versus a single branch.

**Cory Wilkerson:** It is. And that is a thing the industry is just -- like, it takes a second.

**Adam Stacoviak:** It does.

**Cory Wilkerson:** \[51:58\] You're so used to working in this one model, and you just have this mental that that's how we do development. And then at some point on your Codespaces journey or whatever, you're gonna find a moment where you're like "Actually, the real model that I want is this task-centric model."

**Adam Stacoviak:** This pre-build though - I'm thinking about it from a Changelog.com perspective. We back up our database to S3 four or five times a day, Jerod? Or on the hour? What's the timeframe again?

**Jerod Santo:** It's either hourly or every three hours, something like that.

**Adam Stacoviak:** So I'll often literally go and hand-pull that from S3 down to local, and I'll run a script that we have in our repo. I'm wondering, in the Codespaces environment, if we have pre-builds, that we couldn't codify that into, say, a GitHub Action, or the process of creating that pre-build; go grab that latest production database.

**Cory Wilkerson:** Yeah, you would even need a pre-build necessarily. I mean, pre-builds will make it faster at the end of the day, but you can do that without pre-builds, too. It's just a container, and there's lifecycle events in that container that we fire. One is called the post-create command, and in post-create, that means the source has been provisioned onto your Codespace, the Codespace is stood up, it's live, it's ready to go. And we can call this lifecycle event. You can hook into it and you could say "Now go grab this thing from S3, pull it down, hydrate it in this environment, and do whatever." So we give you lifecycle hooks. I can't enumerate them all, there's several out in the documentation you can read about, that allow you to hook in and do things at certain points in time. But certainly, you could do it in just a -- you could build your own image right now.

So GitHub does this - we have a base image that we use, that we specify in our devcontainer.json file, which is build ahead of time, and gives you most of the GitHub environment. And then with pre-builds and a few other tools we take it just the last mile... But 95% of this is built for us on a nightly basis and ready to go. And that's not pre-built. That's literally just building a Docker image. We publish it to the GitHub package registry and then we consume it in our Codespace by referencing it in the devcontainer.json file. Sorry, I'm getting a little technical there.

**Adam Stacoviak:** No, please go there. I think the next thing I wanna ask you to do is just dream with us then. So if this is today, where will tomorrow be? Where will Codespaces take teams that now have this capability today? That's unheard of. And the compute -- a one-line compute change from (based upon your blog post) a 16-gig memory instance to a 64-gig memory instance.

**Cory Wilkerson:** Yeah, that's a really incredible experience. I've put in that quote -- I think there's a caption in the blog post that says something like "One config change and bypass the global supply chain bottleneck."

**Adam Stacoviak:** Yeah, I love that.

**Cory Wilkerson:** It's totally true. You can now just say "Well, we want the 16 cores, or 32 cores", or whatever in config, and upgrade everyone's machine if you want, assuming that you've got the approval to do so within your organization.

**Adam Stacoviak:** Right, sure. It's possible.

**Cory Wilkerson:** Yes, right. Be responsible.

**Adam Stacoviak:** You're describing the possibility, not the adherence to standards or internal organization opportunities.

**Cory Wilkerson:** Exactly, right. This is just a thing that could be done.

**Adam Stacoviak:** Well, dream with us... Where is this gonna go?

**Cory Wilkerson:** Yeah, I'll go so far as to say - I think the majority of the industry is probably using this model five years from now. That actually feels pretty far out to me. There are a lot of people in this space right now kind of pursuing the same kind of thing, and I think what we're gonna see is just a lot of momentum as we move this last frontier out into the cloud, as people get more and more comfortable with it. It takes people like GitHub saying "We're doing this", and actually kind of living the experience and doing it.

I think the first folks we'll see, the early adopters are gonna be really high-performance engineering teams that look to get every ounce of productivity and value creation out of their engineers that they can find, on a daily basis. They understand that productivity loss is bad for the individual, it's bad for the business... People wanna be focused on creating. That's why you get into this; it's not like you wanna toil over your environment, you wanna go build something... And actually, if you're in the industry, you'll understand that many of the top shops out there have built something like Codespaces. I'm not gonna name names here, but there's a few customers that we work with, that would for instance run their CI suite, run CI tests out in some environment, and then must leave the environment for some developer to kind of like claim, and work on at that point. The entire thing is set up, you can just attach to it and work now.

\[56:15\] Other large shops - I think actually Google is well-known for their CIDER web-based IDE that they've used, that they love, as far as I understand. They provide some of these same capabilities internal to Google. So the early adopters are ready there, in many ways. I think GitHub brings this out to the entire industry. I think you'll see kind of a similar cloud adoption curve - we move workloads from our precious server rack out into the cloud... Maybe we see something here with the same kind of curve with Codespaces, but maybe at a faster clip now, because we have this industry trust in the cloud.

So I really do think it's gonna be -- I'll say this... You see GitHub engineers coming into the industry right now. They're coming straight out of school, straight into GitHub, and this is how they're starting their development experience. This is the way they know how to develop now. And we're gonna see this more and more, to the point that five years from now I feel like local development will have disappeared in the background. You'll still need it for some cases, but the majority of developers will want to be in an environment like Codespaces.

**Jerod Santo:** What happens if that environment goes away? It seems like you're hung out to dry if GitHub is down, or your credit card expires and you lose access...

**Cory Wilkerson:** Jerod, trust me, I've heard this question many times as we were ramping developers onto GitHub.

**Jerod Santo:** \[laughs\]

**Cory Wilkerson:** I feel like I have a perfect response for that.

**Jerod Santo:** Okay.

**Cory Wilkerson:** First, we will continue to invest in being fast and reliable, no doubt about it. This thing has to be -- Microsoft has this language, "dial tones." It's a bit out of date, but it's gotta be constantly on, all the time. What we've done internally, in the event that we were to lose access to Codespaces - we built an image that's much like our Codespaces container image; it tracks that environment closely... And it's available for any GitHubber to pull down right now out of the GitHub package registry and internally at GitHub, and they can just run it in Docker, or they can use VS Code remote containers, which is a large part of the tech that Codespaces is built on, but you can just do it locally. So you can launch VS Code, you plug it into a container you're running locally now; this image that we've built is out back-up, and you can perform github/github development in that context, on your local machine.

**Adam Stacoviak:** So if a GitHubber was on a flight, which in this day and age is strange and anxiety-filled, but I'm sure one day we'll get to a point where it's less so - you're gonna wanna code; you're gonna wanna be productive on that flight. Is that how they do it then?

**Cory Wilkerson:** That would be the path that we would use right now. Yeah, that would be the path. I mean, maybe the platform evolves to some point where -- you can imagine, we have VS Code, right? That's something that we work on... And you can say "Well, with a Codespaces user, how do I pull this environment down to VS Code right now? I'm gonna go offline, and how can I --" I can imagine that being a thing that we ship alongside VS Code at some point... But right now I'm just telling you how GitHub does it; we keep this local image in the background in the event that we do need to use it.

And we've used it a few times now, because Codespaces has been down, but because we have folks that aren't ready to move it on certain repositories where they don't feel like moving it, they wanna use Sublime still, or whatever the use case is... We maybe haven't won the business of one or two engineers yet... So it's a thing that we have. That's our fallback.

**Jerod Santo:** How integral to all of this is VS Code? It sounds like it has to be there. I know you've enabled Vim people and Emacs people to connect via SSH, but that seems like a workaround, or like a "Here you go, guys. Here's something."

**Cory Wilkerson:** Yeah, VS Code I think will always kind of be the premier client in Codespaces. It's the paved path that we have right now. Today it's essential to the experience. We do have a number of Vim and Emacs users internally, and we wanna win their business as well, and we've done the work inside of GitHub to do that. It's something we're working on right now, where you should be able to effectively just shell into your environment, use Vim and Emacs directly in the Codespace, without the VS Code client - so that's definitely on the roadmap for us, and something that we're pursuing. We've built it internally, we were able to convert our Emacs and Vim users, those that develop on .com regularly... You know, Nat's a Vim user. I wanna win Nat's business, too.

**Adam Stacoviak:** \[01:00:29.27\] Nice.

**Cory Wilkerson:** So that's a very important thing for us to pursue.

**Jerod Santo:** One thing VS Code has done which is awesome is a language server protocol, really separating the implementations of those, of the highlighting and the syntax stuff into this protocol that you can then plug into. And then everybody who's doing -- you know, maybe I'm in charge of Golang, and I just had to do that once and provide it, and all these different -- you know, Vim can use it, VS Code can use it etc. You almost could see a layer like that for these cloud integrations, where maybe you could make Vim Codespaces-aware somehow.

**Cory Wilkerson:** Yeah, I would say that's an interesting thought and probably something that we would explore at some point, like Vim itself being Codespaces-aware. I like the way that you're thinking, Jerod.

**Jerod Santo:** Well, because there are a lot of people that just will not use VS Code, and you just wonder, will you just leave them in the dust, eventually? ...because how integral is it -- I understand that today it's a bastion -- it's a huge part of it... But is that wise on the long-term? Because we're trying to get everybody into this circumstance, you know what I'm saying?

**Cory Wilkerson:** Absolutely. It's early days, I would say; stay tuned on what we're doing here.

**Jerod Santo:** Yeah.

**Cory Wilkerson:** The work that we're doing inside of GitHub right now to support Vim and Emacs users, the story does not stop inside of GitHub. We have no intent to just say "This works just for GitHub." That's not where the story goes. We want as many people on Codespaces. We think this is the future, the way that people will work, and we wanna bring that to a number of clients.

Right now, the super-paved path is VS Code, no doubt about it. But if the focus is productivity, the focus is on building kind of the next generation of developer tooling, we've got to go support additional clients as well.

**Jerod Santo:** For sure. Yeah, I guess my thoughts around VS Code -- I mean, it's an amazing piece of technology...

**Cory Wilkerson:** It is.

**Jerod Santo:** ...and my concern with it on the long-term, as I see more and more things going in there, is eventually -- you know, Microsoft Word had too many features, in my humble opinion. So my concern is VS Code over time is like "How well will that be maintained?" And I'm sure the motivations are there and the engineering is there, and all the intentions are there to make sure it's a best-in-breed editor forever... But what if it's not, and we're locked into it?

**Cory Wilkerson:** Yeah, all I can say is the VS Code team is super-passionate about what they build, no doubt about it.

**Jerod Santo:** Totally.

**Cory Wilkerson:** We work closely with those guys and they have remarkable taste, that entire team, from top to bottom. They've won business because of their taste and commitment to developers.

**Jerod Santo:** Yeah. And I'm not trying to take anything away from them. Like I said, it's amazing and it's impressive, and we spoke with those folks on the show before, and I couldn't agree more with you.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Just on the long arc of technology, things do change over time, so I would just like to see, are there options? Is there escape hatches?

**Cory Wilkerson:** Sure, understood.

**Jerod Santo:** Do we have a heterogeneous -- does it all have to be one thing in the future, or do we have options as developers?

**Cory Wilkerson:** Yeah, Codespaces at the end of the day, I'll just say - we're running development containers in the cloud. That's kind of the core of the product. VS Code today provides the kind of premium path into that.

**Jerod Santo:** Totally.

**Cory Wilkerson:** We wanna meet developers where they are, no doubt about it. There's no question about that. I feel very fortunate to work closely with VS Code people and watch them work, the and the work that they've done today... And what's made them special is just their conviction in building something fantastic. Same inside of GitHub. The reason I was drawn to GitHub - we hold a very high bar for ourselves, and we just wanna ship a fantastic product. And if we don't ship a fantastic product, we won't win business. The goal is to build a best-in-class product for the best engineering teams on the planet.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, Cory, thank you for sharing the story, giving us a preview of the future, I suppose even the now and the future, really...

**Cory Wilkerson:** Join us. We would love to work with you, to help you, Adam, get your product up and running on Codespaces.

**Jerod Santo:** Let's do it.

**Adam Stacoviak:** We do entertain that, for sure. We have a whole entire show called Ship It that's really about taking our application to production, and I kind of feel like this is somewhat there, because it's where a developer meets going to production, which is actually coding... So I think we'd love to dig deeper into this, for sure. It'd be awesome to make that happen.

**Cory Wilkerson:** Let's ship it.

**Jerod Santo:** Yeah, Gerhard has been talking about us doing our coding in some sort of cloud setup for a while. I've always told him, "Man, the client's not ready for us. You're gonna pry this terminal out of my cold, dead hands." But things change, and I can change too, so that'd be fun to dig into that a little bit,

**Cory Wilkerson:** I am totally up for the challenge. Let's get together and try to ship it.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Alright... Cory, thank you so much. It was awesome.

**Cory Wilkerson:** Thank you. Thank you.
