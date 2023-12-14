**Gerhard Lazu:** We are at KubeCon Cloud Native Con in Chicago, and this is our first ever in-person interview, with all three of us: Adam, Jerod, myself...

**Jerod Santo:** Yes...

**Gerhard Lazu:** ...and our guest, Solomon.

**Solomon Hykes:** Hello. Really, the first time?

**Jerod Santo:** Yes, it is.

**Gerhard Lazu:** In-person, all three of us, first time ever. It's been a long time coming, right?

**Jerod Santo:** It's been years. Literally, years. But here we are...

**Gerhard Lazu:** I have to say, you all look fantastic in-person...

**Jerod Santo:** Thank you.

**Gerhard Lazu:** Zoom is great, but this is better... Right?

**Jerod Santo:** Yeah. Now we're in three dimensions.

**Gerhard Lazu:** We are.

**Adam Stacoviak:** Full-bodied.

**Gerhard Lazu:** Yup. And smell. \[laughter\]

**Jerod Santo:** All of our senses are engaged...

**Adam Stacoviak:** Oh, my gosh...

**Gerhard Lazu:** I'm glad that everyone made it. So, so glad. I have to be honest, on Monday, just as I was about to check in for my plane, I wasn't sure I was gonna make it.

**Jerod Santo:** On time, or at all?

**Gerhard Lazu:** No, no, at all.

**Jerod Santo:** Why not?

**Gerhard Lazu:** So I arrived at the check-in desk, I wanted to check in, and I didn't have an ESTA. ESTA is like an electronic visa for UK citizens and other nationalities to enter the US... I renewed my passport, and I still had a valid ESTA, but the ESTA is linked to your passport... It's a little bit like the load balancer is healthy, and the app instances are healthy, but the two are not talking.

**Jerod Santo:** Okay...

**Gerhard Lazu:** So users are getting 502s all over.

**Jerod Santo:** Right.

**Gerhard Lazu:** So I had an hour... Luckily, I was early at the airport, so I had just enough time to apply for one. But hey, this guy has two ESTAs. What is he doing with two ESTAs and two valid passports? So I had to go through extra security checks. So it wasn't instant. And I didn't know whether I'll be able to check in.

**Adam Stacoviak:** Wow.

**Gerhard Lazu:** I know.

**Jerod Santo:** Always have a plan B.

**Gerhard Lazu:** Always have a plan B, yeah. So the plan B was like take the later flight. \[laughter\] I took the middle one anyways, but that was -- any other fun travel stories?

**Solomon Hykes:** That scene from your memory is definitely getting in the movie.

**Gerhard Lazu:** Okay... \[laughs\]

**Jerod Santo:** I had no excitement on the way here, except for I'm a person who gets -- I wouldn't say existential dread... I like the idea of doing things, but leading up to the actual thing, I dread every moment of it. And then when I get to the thing and do the thing, I'm loving it.

**Adam Stacoviak:** Describe.

**Jerod Santo:** So, like, I didn't want to come.

**Gerhard Lazu:** Okay... I think none of us do. home is amazing. Why would you leave? \[laughs\]

**Jerod Santo:** But like, intellectually, I was like "Yeah, let's go to. It'll be great. Blah, blah, blah. Let's do it. Let's see Gerhard." And then as it approaches, I'm just like "This was a terrible mistake. Why are we going?" Specifically me; why am I going? And then I go through all the steps, and I just overcome the dread, and then I arrive, and then I'm like "Oh, it makes total sense why I did this, and I'm glad that I did." And that's not just KubeCon, that's every event in my life, pretty much.

**Adam Stacoviak:** Wow. Does that make you procrastinate preparing for this event?

**Jerod Santo:** Oh, I've always procrastinated, regardless of that, but... Yeah, I'm getting ready at the last second, for sure. But I'm not late. So just enough procrastination has always been my style.

**Gerhard Lazu:** Everything worked out, everybody's here, it's good...

**Jerod Santo:** We're here...

**Gerhard Lazu:** Even though you couldn't find each other at the airport, right? Why is that? \[laughs\]

**Jerod Santo:** Yeah, Adam... Why was that?

**Adam Stacoviak:** I was at the wrong airport. \[laughter\] Or let's just say a different airport. I didn't know that Chicago had two airports. I thought it was just O'Hare.

**Jerod Santo:** So did I.

**Adam Stacoviak:** But I was not at O'Hare. He was, I was not.

**Jerod Santo:** We landed at about the same time, so he got his bag and he's like "Well, I'll Uber over and grab you", because I was at a different terminal. But I was not merely at a different terminal... I was at a completely different airport. Thankfully, I shared my location, and he realized how far the blue dots were from each other, and all was resolved.

**Adam Stacoviak:** That's right.

**Jerod Santo:** But yeah, that was... That was funny.

**Gerhard Lazu:** That was a good one. Again, everyone's here, everything worked out.

**Solomon Hykes:** We did it. The hard part is done.

**Gerhard Lazu:** Yeah, we're here. Cool. So KubeCon is about companies, and CNCF projects, announcing big things, doing amazing demos, launching whatever features... And I think that's like part of the buzz; that's why people come here, to talk about cool things... And at this KubeCon Dagger had a booth, and showed some demos for a feature that officially has not launched. What is the feature that has not launched yet?

**Solomon Hykes:** It was a top secret demo for 10,000 people. \[laughter\] Yeah, we have this project underway called Project Zenith. It's a future release of Dagger. And not too far in the future... I hope. I think. And it adds the one feature that our whole community has been asking us for a year. Ever since we made the previous major release, which was to support many languages... That's immediately -- actually, one of our most engaged users, Mark, yesterday reminded me that the first time I saw that release, I immediately asked "When is the next big thing coming?"

\[12:07\] And it's reusable cross-language modules. So if you can write your CI pipeline in code, you're very happy, it solves all these problems for you, it runs locally, you can test it, you can collaborate on it with developers etc. And you can modularize it. You can say, "Oh, that function here, that's cool. That's my build. I optimized it, it's perfect. And I want to share it with everyone else. Or I want to reuse it in my next project." If it's some weird YAML proprietary thing, you can't do it. If it's code, in your favorite language, you can do it, but only within the confines of your language. So if it's a Go function, you can share it with other Go programs. And in a lot of software organizations you've got multiple teams using different languages, and the tools that go with it. So if I'm here in my little Go team, and I've got the perfect build, and there's another team over there and they use Python - maybe they use Dagger also, because the platform team just kind of evangelized Dagger... So everyone's happily using Dagger in these silos, but they can't use each other's stuff. And the problem is the I in CI is for integration... So you're supposed to connect it all together somehow.

**Jerod Santo:** Right.

**Solomon Hykes:** And so that was really the next -- until that's possible, the full potential of Dagger cannot be realized. Now we have it, so you can write your functions in Go, with a perfect pipeline logic, and then someone else writes their functions in Python, and they can reuse each other's functions, and it works.

And so not only does it work, but after a few tries - I'll spare you the details, but we got to a DX, a development experience that's really not only productive, but actually fun. And I find even myself just trying to sneak away from my other responsibilities to just spend 20 minutes, just "I want to hack on this module, that idea that I have." And it's just fun, and it's spreading like wildfire in our community, which is a niche community... But yeah, that gut feeling that "Oh, God, I want to play with that right now", and the ability to get a quick win - that's really exciting. So even though the feature is not launched, we just wanted to share it, because it just gets people excited. So yeah, we're showing it at the booth.

**Gerhard Lazu:** Have you seen any of the demos, Adam, Jerod?

**Adam Stacoviak:** No.

**Gerhard Lazu:** Nothing? Oh, wow. Okay. Well, after this, when we stop recording, maybe I can show you a few... Even though they might not be set up. have been amazing.

**Jerod Santo:** We only watch the demos where you might win $100 at the end...

**Gerhard Lazu:** Oh, I see. Okay.

**Jerod Santo:** And the person compels you to come over and sit... And so much so that it's like "No, you have to sit here now." And I'm like "Oh, I do?" "Yeah, because you might win $100." I'm like "Oh, I might? Then I'm gonna sit right here."

**Solomon Hykes:** Is that a thing?

**Gerhard Lazu:** \[laughs\]

**Jerod Santo:** Literally, that happened yesterday.

**Gerhard Lazu:** Wow, okay... \[laughter\]

**Jerod Santo:** And I felt bad for it, so I was like "Okay, I'll sit there..." And the funny thing was, I don't even -- I honestly can't remember what the demo was, but she sat me four feet from the screen, and the guy is projecting for the audience, and I'm like, "This is going to burn my retinas." So I just basically -- I got on my phone and just played on my phone for 10 minutes, until it was over.

**Adam Stacoviak:** It was \[REDACTED\] (😉)

**Jerod Santo:** Don't name and shame them, man...

**Adam Stacoviak:** Oh, sorry.

**Gerhard Lazu:** Did you win, at least?

**Jerod Santo:** No.

**Gerhard Lazu:** Oh, come on...!

**Jerod Santo:** I never win anything. I never win any of these things.

**Gerhard Lazu:** Okay, did someone win?

**Jerod Santo:** Someone won.

**Gerhard Lazu:** Okay, so it was real.

**Jerod Santo:** It was real.

**Solomon Hykes:** That's crazy.

**Jerod Santo:** \[15:45\] Yeah. This might sound bad, but - it doesn't feel bad... Well, maybe it does. It's kind of a carnival thing going on. Like they're a fair in the expo hall. You guys are in your spot, so you probably don't see it as much, because you're just at your booth. But there's a lot of people who are vying for attention. And these companies with lots of big budgets, and flashiness, and all these things... And I mean, it's huge here. I've never been to an expo hall this size. I've never done like a Comic Con, or - what's the big one? CES... Where these are like tens of thousands of people in expo halls. So this is new to me. I've done smaller events where there's booths, but it's not like a carnival or a fair. I mean, they -- it's difficult to get people to pay attention to what you're doing, and so people pull out all the stops, such as giveaways, people on microphones literally calling you over, similar to a county fair where a guy wants you to --

**Solomon Hykes:** Step right up.

**Jerod Santo:** Step right up. Yeah, exactly. So that's what we've been experiencing...

**Adam Stacoviak:** Very interesting.

**Solomon Hykes:** "Hey, you. You in the hat. I see you looking at me... Come sit down."

**Jerod Santo:** Exactly. Yeah. And they'll just give you stuff. Like, one time we just slowed down because we saw Arun Gupta was part of a panel... An OSPO sit-down thing... And we just kind of were walking by slowly, like "Hey, it's Arun. We know Arun", and then some lady walks up and she's like "You guys want some popcorn? Come, stay right here. Stay right here. Here's a popcorn... Guys, listen to this."

**Solomon Hykes:** "Give them a ticket. Give them a ticket. Where's the ticket?"

**Jerod Santo:** And I'm like "Cool. Thank you", and we start walking away. And she's like "No, you want to stick around, because after this is the demo." And I'm like "Oh, there is? \[laughter\] I wanna stick around..."

**Gerhard Lazu:** That's a long foreplay, right?

**Jerod Santo:** Yeah.

**Gerhard Lazu:** "I'm ready to go now. I'm done."

**Jerod Santo:** So I have a bit of allergic reaction to demos... But we'll watch yours, Gerhard. We'll watch yours. It sounds very interesting.

**Gerhard Lazu:** Okay.

**Solomon Hykes:** My biggest frustration was -- because in a conversation like that, this guy was talking about... I actually wanted to just livecode with him. Because that would be the best demo. And we can't, because it really -- I'm gonna stop overselling. I apologize, I'm excited. But I just was like "Let's do it now. Let's do your module now." And I opened my laptop and I just couldn't get the WiFi to work... And then I went to tethering, and I couldn't get tethering to work... And I'm like "Okay, well, maybe not today... But here's a video loop of a cool demo." But yeah, you just want to go and code the thing with people.

**Gerhard Lazu:** You need to basically approach people where they're at... So when I first started using Dagger, I assumed that it's a replacement for CI. And I know many people still have that misconception. They think "Oh, big Dagger is going to replaced my CI." And obviously, I've learned that Dagger is so much more... But for the people that still think like that, what would you say, Solomon? Does Dagger replace CI?

**Solomon Hykes:** It's funny, because you're right, we deal with that question all the time. So why would I replace Jenkins, GitHub Actions, CircleCI... And the first thing we say is "You should not." You should keep it, but you should modernize what's running on it, basically. And we're really piggybacking on a pattern that already exists, because -- software teams are not stupid. They know, "Okay, every line of proprietary configuration I put in this CI platform in the sky, it's only going to run there, and it's not real code, so eventually I'll run into limitations." So a lot of those teams, what they do is they try to keep the -- I guess there's two schools of thought. There's the CI maximalists, "Just put everything in that YAML." And the other school, the programmatic school I would call it, is "Okay, put as little as you can get away with, and then have that CI run a shell script, a makefile, something that can run in the CI environment, but also in the dev environment." So you can actually -- at least part of these pipelines you can run locally, and test locally etc. And so we're just taking that pattern and doubling down on it, we're streamlining it, modernizing it. So in that pattern you don't have to replace your CI platform, you just have to use it in a more reasonable way, as a runner, as runner infrastructure.

I do think that the CI as a category - this is the market of CI platforms. I think one effective Dagger succeeding in the future - knock on wood - is that... But if somehow we fail to finish the job, someone else will, because some things just have to happen. CI as a category I think will just go away. It's no longer needed, really.

\[20:13\] So these are two different things. We're not telling teams, "Get rid of your CI platform now." We're doing something more incremental, low-friction etc. but the end result of everyone doing that is eventually someone - not us - will kind of say "Do we need this now?" I think that's the end result.

**Jerod Santo:** What would that day look like? What would be different from today?

**Solomon Hykes:** Well, if you think of the big stages of the lifecycle of that code that you're trying to get out there into the world, you've got development, and then you've got production. And in the middle, you have CI. But why? It's an artifact of some technical limitations, because it's all the pipelines you need to run, build, test, lint, whatever... End-to-end testing, deploy a staging environment, whatever it has to be, it wasn't practical for a long time to run it embedded in your dev environment, or embedded in your production deployment. But if you miniaturize the CI pipeline, if you can make it small enough that it can actually run in any dev environment, it can actually be embedded in any deployment pipeline, then CI just becomes a feature of development or production. It doesn't have to be its own standalone thing that you push to. It's just sort of -- it's weird, if you think about it. We've just gotten so used to it, you know?

**Jerod Santo:** What are the technical limitations? Is it the ability of your local dev environment to run, to do builds fast, to do tests fast? What has been holding dev back, that's no longer -- I mean, is it our M3 Macs that just make it not matter anymore? Is it software?

**Solomon Hykes:** I think it's a combination of things. One is containers had to exist and be ubiquitous, because you needed a way to make all that stuff reproducible; otherwise it's not worth it. There's a family of tech called DAG tech that just had to mature. The ability to execute tasks in parallel, with dependencies modeled as a graph... I mean, make has been doing that forever, but it's been kind of doing it on its own. But recently, in the last 10 years, you've seen things like Bazel, Buck, Nix... Everyone's sort of independently exploring this model. And it's really matured, and one of the big benefits, honestly, is caching. So everything's got to be cached, or cacheable, for the thing to make sense. I think also just the amount of computing power that's available, I guess... I mean, we joke that the biggest -- you know, we ask teams, "In your organization what's your number one provider of CI compute?" People are like "Well, we did the migration from Jenkins to GitHub Actions, so I guess maybe Azure now... No, I guess it's still the original..." But the answer usually is Apple. So you've got these beasts on every desk. That can run all that stuff just really well. And people don't realize it, because there's this software blockage. You've got this platform there, in the sky, and you can't run it locally, so no one's trying... But if you try, and you add caching, and you add containerization, you're like "Wow, this is actually not as big as I thought it was. Why am I paying $5,000 a month to run this, and it just completed in three, four seconds on my Mac?"

**Adam Stacoviak:** Have you ever tested a MacBook to see how long you can run it at 100% CPU utilization? You can run that thing at 205 degrees for about hours before it implodes. I know because I've done it. \[laughter\]

**Jerod Santo:** You've tested it or you imploded one?

**Adam Stacoviak:** \[23:52\] Well, I write all of our archives to 7Z, and that process, the algorithm to compress is almost half. And so that's where I'd test it. So I have a script that will loop through directories - and they're usually 5-10 gigabytes. So it's got to compress by half multiple directories. And sometimes I'll do them in a batch. I'll just make a list of them; it could be 20... It could be like "JS Party, whatever through whatever. Move it into archive." And I'm like, this thing will clock out at 100% CPU utilization, and it'd be 205 degrees for as long as it takes. It could be hours. And lately, I'm just like "How far can I push this thing?" and it just does not die. It just won't. So you've got so much to use there. All cores, 100%, for an hour and a half. No melting.

**Jerod Santo:** Nice.

**Gerhard Lazu:** So coming back to the heart of Dagger, and what Dagger is... I think more importantly it's who was Dagger built for? Who's the Dagger user?

**Solomon Hykes:** I think it's evolved a little over time, but the answer was right in front of us the whole time, I guess. We started by just interviewing as many software teams as we could, and talking about their problems, first in a very broad way, and then gradually narrowing down. Because you apply pattern-matching and the same problems come up, so now you hone in on that problem. So deployment came up a lot, of course... Deployment of the broad sense. Getting the app out there. It was a very shocking realization for me that it was just so painful, because I came out of Docker thinking "Well, that was hard, but now we've solved it." I mean, I'm exaggerating, but "Okay, surely things got better." But I just witnessed a lot of frustration and pain, and it was across every team size. Small, huge, it didn't matter. It was all a mess.

So that affects everyone in the organization - application developer, all the way to infrastructure. But I guess there's this person of a platform engineer, I guess... A lot of times it's aspirational. It's not the title, or it's not the reality of the job, but it makes sense to describe... Someone should be in charge of the platform. Basically, someone should be in charge of the factory, running that supply chain, making sure it works. So that's who Dagger is for ultimately, and then they serve everybody else. So it's sort of a two-step process where we serve the application developer via the platform team supporting them. The platform team sometimes is just one of the devs, who said yes to fixing the build once, and now everyone just assumes that's the person to ask, the designated DevOps person. So that could be who we're helping. Or it could be 50 people full-time... But fundamentally, it's the same job.

**Gerhard Lazu:** And how do you imagine this person using Dagger? So in the ideal world, this person, the right person has Dagger at their command. How do they use it for their day to day job? What does that look like?

**Solomon Hykes:** I think that person uses Dagger to push work to other people in the organization, so that they don't become a bottleneck. Or they are a bottleneck, so that they can stop being a bottleneck... Because one of the downsides of the thing not being code... the thing being the pipeline, the factory - is that, well, it's not familiar to any of the development teams. So they don't want to touch it. And whether it's GitHub Actions, or Jenkins, or whatever the factory is, all the developers have to use it. They have this harness to use. But for them it's like commuting to the big factory. They just go to work and they go; someone tells them where to push the buttons. And they can't wait to get out of there, because it's not theirs. And if there's a missing tool for them to be productive, like "Oh, there's this build tool I'm using. It's missing from the factory." There's an idea box, I guess... But they're not going to go and mess with it anymore than they need to. But then who is? Well, the platform people who built the factory, now it's their job to do that. But they don't know, they're not familiar with the tool they're supposed to integrate.

\[28:09\] And there's sort of an exponential scale problem where -- you know, there's a matrix problem. Those teams we were talking about before, the Go team, Python team... There's an ML team now somewhere, and they've got a whole bunch of new tools. They're like "Oh, here's the model... Can we just deploy that now?" And the DevOps team usually is like "I don't know how any of this works."

**Jerod Santo:** Right.

**Solomon Hykes:** So now they have to go on the side quests, like "Okay, let's learn all these tools, and figure out best practices..." Meanwhile, they're holding up everything, and maybe there's pressure to ship fast... We're seeing that especially with these AI features now, because management is like "We've got to ship the AI thing." And the ML team will be like "We've got the model. The model works. Look, this Jupyter Notebook is perfect. What's taking so long?" So all this pressure goes on the platform people, because they're holding things up. So I think the way they use it, ideally, is to involve all -- push work to those teams. You know, go see the AI team and say "Okay, what's your favorite language? Python. Okay. Here's a few examples. Here's some docs. Give me your build, give me the functions you need me to integrate." And they do this with all the teams, and then all of a sudden 90% of their workload, the worst part goes away, kind of, overtime, and so they free up more time to actually do their job, to strategically integrate that stuff. So that's the ideal scenario.

**Jerod Santo:** There's definitely something interesting there with the MLOps thing... Which seems to be different enough that people are coining a new term for it, right?

**Solomon Hykes:** Yeah.

**Jerod Santo:** It's DevOps at the end of the day, but there's a significant enough difference in how these things go out than traditional software that there are no experts in this particular subcategory.

**Solomon Hykes:** Yeah.

**Jerod Santo:** And obviously, the AI gold rush is on... And so if you think about what the pick axe is for the AI gold rush - well, you may think it's the models. It seems like maybe that's kind of true, but also in the long-term is it going to be false, as those become commoditized? But maybe the ability to deploy the models, the tooling around actually taking that stuff from a Jupyter Notebook into production in a way that's reproducible and not expensive, and doesn't run your cloud bill up insane is the kind of tools that people are going to need in order to find the gold, so to speak.

**Solomon Hykes:** Yeah, exactly. We're seeing the beginning of that. But what's interesting is MLOps today is 99% experiments in training. It's either ML research teams training models, fine-tuning models or whatever, or a gazillion people messing around because it's fun. No product in sight. And then you have the steepest funnel in the world, where these, I don't know how many -- if you go to these online communities, it's insane, the number of people in there. But there's everything in there. There's graphic artists that's been playing with generative AI for images, and they're in there messing with it... So it's the graphic designer, to webmaster, to web designer, to web developer... pipeline all over again.

**Gerhard Lazu:** ...to DevOps person...

**Solomon Hykes:** That's just one example. But then on the other end of that funnel there's actual products, software products leveraging AI, and it's a trickle right now. That slope is incredibly steep. And along the way, all software engineering best practices basically fly out the window. Nobody knows how to ship the thing. People who know how to ship software don't understand what's going on here, mostly... And then people who do, don't know how to ship software. So I really think it's going to end up being revolutionary in the impact, the kinds of products you can build. But from the stack point of view, I think it's going to be a large, but still incremental upgrade to the stack... But at the end of the day it's still a stack, you've still got to ship it, you've still got to build into this thing. It's still a software engineer's world.

**Gerhard Lazu:** \[32:03\] This is hopefully a very enjoyable question for all of us, because we get to dream... And we can start with Jerod. What is your dream for Dagger? Because we are a user and using Dagger, what do you wish Dagger did? And it doesn't have to be a timeline, but if you could wish for Dagger to do something for you in your app, what would you wish that it did?

**Jerod Santo:** Give me a million dollars? \[laughter\]

**Gerhard Lazu:** Okay, well, let's start with a hundred... Maybe. You maybe get it. Is that how we buy our Oxide Rack? \[laughter\] Is this it?

**Jerod Santo:** Our first Oxide Rack. Our first Oxide rack.

**Gerhard Lazu:** Okay. So then we can run Dagger on it...

**Jerod Santo:** Yeah, exactly. \[laughter\] No, I don't know, man... I don't have dreams for Dagger; I don't dream Dagger at night like you do, Gerhard... But as an app developer and a business owner, I want all this stuff to disappear.

**Gerhard Lazu:** The CI-less world that Salomon just talked about?

**Jerod Santo:** Yeah, the CI-less world... And probably the codeless world as well. I mean -- so this is why maybe this modules thing is interesting to me, is as we transitioned into the Dagger, I'm like "Wow, Gerhard is writing a lot of code, and I feel like --"

**Gerhard Lazu:** "...and I don't wanna look at it."

**Jerod Santo:** Yeah, I don't want to look at it. And it's all good code, and I have looked at it, and it's reasonable...

**Gerhard Lazu:** How do you know if you haven't looked at it?

**Jerod Santo:** No, I have.

**Gerhard Lazu:** Oh, you did.

**Jerod Santo:** Yeah. I judged your code, and it looks alright, it looks nice.

**Gerhard Lazu:** Alright, thank you.

**Jerod Santo:** But I'm like, surely there's like a happy path for like basic things that we do. That's probably part of the modules thing, and a reusable thing...

**Gerhard Lazu:** Yeah.

**Jerod Santo:** And so I would expect the amount of custom pipeline code in our codebase to go down over time as we become less custom, and as modules become -- because I just kind of want to say... I just go back to like git push heroku master. And I know we had that. We don't push to Heroku, we push to our master branch on GitHub, and it deploys out, and I'm happy with all that... But there was never any code -- there was never any Heroku code in my repo, unless I had to have a custom build pack back in the day. And that's because for me, I don't want to have any code, unless we have to do something custom. So I would dream that the amount of Go -- and I know Elixir support is coming, or is there...

**Gerhard Lazu:** It's already there, yes.

**Jerod Santo:** Okay. Ours is Go right now... But I would imagine that as Dagger matures, and the ecosystem builds out, that our code goes to maybe zero; maybe not, maybe one...

**Solomon Hykes:** Yeah, that's a great point.

**Jerod Santo:** So that's kind of what I would desire. Not because I don't like your code, just because to me it sounds like these are --

**Gerhard Lazu:** I get it.

**Jerod Santo:** The build pipeline stuff for a typical a 12-factor web app to me is completely uninteresting. Now, we do some custom stuff that's cool, but I think for most people who just want to have their thing out there in the world, they would love for you guys to just abstract it as far away as you possibly could.

**Solomon Hykes:** Yeah, honestly, going back to the DotCloud days when we were building a competitor to Heroku... So we were in that business, of making it all disappear... And - I mean, that's kind of the genesis of everything else. Our experience, and the insights we got there, we just developed an opinion on what's the right way to solve this problem... And then it's been a long journey doing Docker, and now Dagger... I think it's basically the same journey we're on still, and the reason Heroku didn't actually solve it, neither did DotCloud, I think is that I think the dream at that point was the way to make it disappear for you is to have two people involved. There's you, and there's a Heroku, basically. Two tiers.

**Jerod Santo:** Yeah, totally.

**Solomon Hykes:** And basically, we concluded that there was a missing layer there. It's got to be you, someone who owns your platform, and then someone under that, who makes it possible to do that cost-effectively. So you, your platform team - it could be a team of one, part time, and then under that the operating system, basically. And I think Heroku tried to do that with buildpacks, realized "Oh, it's never gonna work", and we tried to do that with something more custom, container-based, and then we were like "Okay, even that's not enough. We've got to start over."

\[36:28\] And so the journey has been -- our bet is that the only way to solve this properly at the scale of the whole world of software, which is huge... There's a lot of software factories out there, or they should be factories, and right now they're like workshops... You've got to build the foundation from the ground up. And I would say, okay, Docker was step one; you've got that very bottom foundation. And then if I go to you and say "You have Docker. Now figure it out", you're like "Yeah, I liked Heroku better." And then you ad what we're doing now, these programmable pipelines, with reusable modules... And it's much more abstracted, but still, you're like "Yeah, but I don't want to write my own module. Even if it's a 30-line module, why do I need to write code at all?" But if Gerhard's happy writing that code, I'm happy. And then eventually, we get to the point where Gerhard part-time can actually give you Heroku. But it's your Heroku.

**Jerod Santo:** Right.

**Solomon Hykes:** Because later you'll say "Oh, but can we have this custom thing? There's this ML thing that would be cool for processing our recordings. It's got transcripts, and it's super-efficient", whatever it is...

**Jerod Santo:** Which - we aren't very far from that happening.

**Solomon Hykes:** Yeah. Heroku would be like "Oh, that's on our roadmap for 2025", and Gerhard's like "Already on it", and then the next day it's there... And it still feels like Heroku. That's the dream, right? But there's this whole layer cake that has to be built, and the reason I'm excited and I can't stop shutting up about it is because I really think we're getting super-close, finally...

**Gerhard Lazu:** Yesterday felt that way.

**Solomon Hykes:** ...and I'd love for this to be complete while I'm still alive... \[laughter\] That would be nice.

**Gerhard Lazu:** That is definitely something worth working towards, because it is aspirational, it is something that will improve everyone's lives... It doesn't matter whether you're an app developer, a business owner, a DevOps person... It doesn't really matter. It will basically raise the value line for everyone. And when the tide rises, all boats go up. So that's what we want, for everyone to have a better experience. And it's very foundational. And it doesn't matter whether you're using GitHub, or GitLab, or Azure pipelines; it really doesn't matter where you're coming from. Kubernetes, not Kubernetes... It's okay. We're all in this together, and we all have problems to solve and a life to get back to, so let's make it as painless as possible.

**Solomon Hykes:** By the way, I feel like that's something that's missing in the KubeCon world. I feel like this community is missing its connection to developers. It's a whole lot of infrastructure stuff, and everybody knows it's needed, but at the end of the day, the part that's left unsaid is it's needed to ship something; and it's left unsaid because it's implicit. Of course, we know it... But also, we don't really know how to really deliver it in a great way. So there's still a wall, and there's still a lot of "Trust, we've got this. It's going to scale." But I'm not seeing hordes of developers here just being so excited to be at KubeCon like "I can't wait to see how you're going to ship my app next! Yay!" There's still a big gap, you know?

**Gerhard Lazu:** As we prepare to wrap this up, I have one last question for Solomon. I know Christmas is far away, but people have to buy presents, and prepare... \[laughter\] So people that are listening to this, that are thinking "Oh, what should I get Solomon for Christmas?" \[laughter\] Do you have a few items that you would like? It can be whatever, it doesn't matter. It can be tech-related if you want, or not... And if anyone else has anything to add... Because by the way, I already got my Christmas present, so I'm good... \[laughs\] We were talking about it the other day, but... Anyways, back to Solomon.

**Jerod Santo:** \[40:07\] What do you want for Christmas, Solomon?

**Solomon Hykes:** Yeah, that's tough, you know... Yeah, I have family members who always ask me this and I never know what to answer, but... I love tea, like I mentioned before. So you can get me tea. That's always appreciated.

**Gerhard Lazu:** What tea do you like?

**Solomon Hykes:** I like chai, if you were paying attention... But I do love -- actually, any good tea. I'm down for any good tea. But it has to be tea without all the added flavors. They add all these flowery or fruity flavors... Is this the kind of answer you were looking for? \[laughter\]

**Gerhard Lazu:** Any answer is good. It has to be yours and it's all good.

**Solomon Hykes:** I don't need actual Christmas presents here... \[laughter\]

**Gerhard Lazu:** No, no, it's all good... It's something that's coming, that people are thinking about...

**Solomon Hykes:** You can give me a hug for Christmas and I'll be happy, Gerhard.

**Jerod Santo:** Hugs.

**Gerhard Lazu:** Can you say that one more time?

**Solomon Hykes:** A hug. A hug from you would be a great Christmas present.

**Gerhard Lazu:** Well, we don't have to wait until Christmas. We can do this right here, right now.

**Solomon Hykes:** You know, I've always wanted an ugly Christmas sweater. That's an American thing, and I always thought it's cool. We don't really have that in France, and...

**Gerhard Lazu:** Oh, okay. Happy Christmas T-shirt? Would that work?

**Solomon Hykes:** And it took me a while to understand that tradition, but now I get it. I love it. I'm on board.

**Jerod Santo:** What brought you around, what enlightened you?

**Solomon Hykes:** I don't know. I have no idea. Maybe I saw a movie and an actor I loved was wearing one, and then that was it.

**Adam Stacoviak:** Yes. National Lampoon's Christmas Vacation.

**Gerhard Lazu:** Well, with that thought, go and research it. Thank you, Solomon, for joining us. It's been a lot of fun. I look forward to what we do next. Thank you.

**Solomon Hykes:** Thank you.

**Break:** \[41:39\]

**Jerod Santo:** So... Tammer and James from SuperOrbital. Welcome, guys.

**Tammer Saleh:** Thank you, thank you.

**Jerod Santo:** I said I only have one question, but then I thought of another one, so I've got two questions. I'll start with the softball. What do you guys hope to get out of a KubeCon like this? When you come to these events, what are you looking to do? What are you looking to accomplish, achieve, happen? What's the goal for these things?

**Tammer Saleh:** I mean, it's a great question. I hope I don't sound too jaded to say that going to the talks - it's not my number one goal with coming to these events. I've been to a lot of conferences and I've come to the decision that I can just learn what I need to off the internet. YouTube's amazing, and blog posts are amazing. But what you can't get anywhere else is the real world conversations, that hallway track, with the people who are actually using these technologies, and really pushing the limits of them, and doing things in anger, and you get to learn from where the brochure advertisements of how all these tools breaks down. And especially for a company like us, that's extremely important. We learn a lot from our engagements, working with our clients, working on the technologies, but the more we can get from the general community and actually talking about real world situations is just invaluable. And so far, we've got a ton of that, and it's been wonderful.

**James McShane:** I'll make one caveat to what Tammer said. I do love the hallway track, and that's really important for meeting new folks and building the network of people that you can turn to when you have questions about what's reality versus what is hype... But then when it comes down to the key talks that change your perspective, it really comes from maintainers, from the folks in the open source ecosystem that are dealing with this. The challenges of synthesizing the stability of the open source projects and the long-term health of those against the needs of quite a variety of organizations that are using these products. And so hearing folks from like the maintainers of Istio, the maintainers of Cilium, and hearing their experience, and sharing their successes in building a product, an open source product that collaborates on the needs between these major companies that are supporting the products and the vast community that depends on them...

That's been my favorite talk of the conference so far, was hearing from one of the Istio maintainers really in-depth about how they are maintaining the Istio ecosystem of controllers and how they're thinking about the next evolution of that. So that was a really valuable talk for me.

**Tammer Saleh:** Yeah, you were talking about that one even amongst us beforehand how much you got out of that talk.

**James McShane:** Yeah, absolutely. You get a few talks at the end of the week where it's like "I'm gonna go back with a notebook and a piece of paper and really learn from this in." In-person you listen, but you need to go back and really think through the things that they're saying when it comes down to those highlight talks that you get out of the week.

**Gerhard Lazu:** So for someone listening to this, what is the title they should be searching on YouTube when these talks come out?

**James McShane:** Yeah, the talk is "Lessons learned in building controllers" from John Howard at Google. He was talking about the Istio ecosystem... And so yeah, "Lessons learned from building controllers" was the one.

**Tammer Saleh:** James teaches our programming Kubernetes workshop, and so for him this is ideal. He gets to incorporate this into everything, and figure out where we've been telling people the wrong thing. \[laughter\]

**Jerod Santo:** I feel like there's a missing service out there... And maybe this is like a curator, but you know, all these talks are gonna go online. And now every conference is putting their talks online. And I'm with you, I don't attend the talks; not because I'm not interested, but I'm more interested in what's going on in the hallway, in the expo hall. A lot of times we have a booth, so we're recording conversations, and it's just to be there with the people. But there are talks that I would like to go see, but I don't. And at the end you're like "I'll go watch them later." But really, what you need is someone like James to say "You've gotta see this talk."

**Tammer Saleh:** Yeah, you need like a Yelp rating review system...

**Jerod Santo:** You kind of do. Or if we could do each other a service and blog after you go to a KubeCon, or an All Things Open or any of these events and be like "Look, if you're gonna watch three talks... I went to all of them--", or you can't go to all of them here. But "I attended talks for two or three straight days, and these are my favorites", then we could help each other find the good ones, without having to... Or even just having that FOMO of like "I don't even know what was good at this particular event."

**Tammer Saleh:** Yeah.

**James McShane:** And one of the things that's useful to do as well is connecting with folks ahead of time that, you know, you search through the conference schedule, and - you know, I knew John was talking... But there are a couple folks as well that I reached out to ahead of time, and had some conversation... And I think when you can combine that hallway track with the real -- you know, you put all those pieces together, and that's when you can get... You know, hey, conference talks can sometimes have a little bit more shine than the reality, and so you get behind the curtain a little bit... And we had a great conversation with a couple folks yesterday who are speaking today, and when you're able to really get to that depth of "Where did you fail along the way?", oftentimes those are the things you learn the most from as well.

**Tammer Saleh:** \[52:15\] You know, I just got done saying that I don't like going to the talks, and for the most part it's true, but that is the one useful thing, is when somebody's gonna be talking about a technology you're interested in, and you're going to the talk pretty much just so that you can come up to them afterwards and say "Yeah, okay, that's great. Thank you so much. Wonderful talk, but... Let's get real, when did it break down?" \[laughs\] Right? This is three months on from that; how has it been actually shining since?

**Gerhard Lazu:** I think the people that bring various perspectives, whether you're preparing for a talk, whether you're preparing for a conversation, recorded, not record, it doesn't really matter, it's like, those different perspectives, they all come together, and there's something for everyone. Even if you're into bubble machines, you will find them here, and they're fun, right? \[laughter\] Hopefully, it's not just that. It would be a bad place to come just for that, but that is happening. It's a bit of everything for everyone.

**Jerod Santo:** There is.

**Gerhard Lazu:** And there's this diversity that kind of stimulates the brain. Maybe it overstimulates it; pacing yourself is really important, knowing what you enjoy is really important. If you try and do it all, not only you will not manage it, but you'll get very frustrated and really burnt out. I mean, in a few days... There's parties, there's everything.

**Tammer Saleh:** You were supposed to have a second question, weren't you?

**Jerod Santo:** So can I ask my one question now? \[laughter\] I preempted myself.

**Tammer Saleh:** You can go for it.

**Jerod Santo:** Alright. This one requires some setup.

**Tammer Saleh:** Oh my gosh, is this a whole gig? \[laughter\]

**Jerod Santo:** So you've been on Ship It - was it once or twice, Tammer?

**Tammer Saleh:** Twice.

**Jerod Santo:** Twice, okay.

**Tammer Saleh:** But who's counting...? \[laughs\]

**Jerod Santo:** Yeah. And I will say that after your first appearance on Ship It - not because of that appearance, but afterwards - we had a retro and you asked me "What's good about Ship It? What can be better? Any suggestions?" And do you remember what I said?

**Gerhard Lazu:** No.

**Jerod Santo:** Okay. I said "I want to hear more from Tammer Saleh." I said "You should have him back on the show." Remember that?

**Gerhard Lazu:** Yes, I remember that. Yes.

**Jerod Santo:** That was pretty much my only feedback. No, this is the compliment. I enjoyed listening to you talk. I thought it was a great episode.

**Gerhard Lazu:** Yeah. Was it your birthday, the first time or the second time? I think we wished you happy birthday. It was the second time, right? I remember that... \[laughs\]

**Tammer Saleh:** It's basically a small brag...

**Gerhard Lazu:** Yeah.

**Jerod Santo:** So there's the compliment.

**Gerhard Lazu:** Okay. It's the carrot. \[laughter\]

**Jerod Santo:** I enjoyed listening to you. Now, we do clips -- you probably know about this, because I emailed you to write a blog post... So you know where this is headed. So we do clips to promote the shows, pretty standard stuff. And I put together a clip from one of the two episodes - I'm not sure which one. I've put it on YouTube, and it's been one of the most commented on clips that we've had.

**Tammer Saleh:** There's no such thing as bad publicity...

**Jerod Santo:** Yeah. And so the title of the clip, which - I picked the title; it wasn't you. But it's "NixOS is interesting, but it has fatal flaws." And you mentioned something about Nix's fatal flaw in the video. It's a 60-second video of a much larger conversation. It wasn't even your point... You were making some point about science fiction novels, and Foundation... You had returned to reading Foundation and it was -- not quintessential; it was... The naivety of what they thought the future might be.

**Tammer Saleh:** Just a different path.

**Jerod Santo:** Exactly. Which - I just talked about that recently, on Back to the Future 2. They totally missed smartphones... Hoverboards would have been cool, but the ones that we got weren't cool... You know, it could have been.

**Tammer Saleh:** Yeah, it could have been. Alternative future, right?

**Jerod Santo:** It was fun to think about... But when I watched it with my kids, they're like "This movie is lame. They were way wrong." And I'm like "Yeah, but when I watched it, I didn't know they were gonna be wrong." Anyway, so that was your point... NixOS wasn't your point, but you mentioned that, and... I picked the title, and then I wanted to read you some of these comments. \[laughter\]

**Tammer Saleh:** Alright...

**Gerhard Lazu:** Is it a fair? That's what we want to know.

**Jerod Santo:** It's some sort of fair...

**Gerhard Lazu:** Alright...

**Jerod Santo:** \[56:03\] "I want my 61 seconds back..." \[laughter\] "Such a vacuous video." "I loved the part where they never mentioned what the fatal flaws were..." \[laughter\] "This video will age like milk when Nix takes over the world." "Tammer Saleh has no idea what he's talking about." \[laughter\]

**Tammer Saleh:** To be fair, that last quote you got from somewhere else. That's a pretty common quote on the internet.

**Jerod Santo:** "Reply here if you find the fatal flaw..." \[laughter\] "This guy is daft. Just plain wrong." I mean, very good... So the one question that I came prepared with is "What are NixOS'es fatal flaws?" \[laughter\] Because I'd like to let these people know...

**Tammer Saleh:** Alright. Okay. Totally fair question. I think that that title might have been a bit exaggerated. NixOS had one fatal flaw, which is the usability of Nix. And I've never talked to a single Nix advocate. And by the way, I love - I really do love the passion in the Nix community. They created that, right? They created those comments.

**Jerod Santo:** Totally.

**Tammer Saleh:** Because that 60-second clip - there wasn't a lot of content there. There's just a lot of inflammatory -- I don't know why you picked that segment. Anyways... \[laughter\]

**Jerod Santo:** I know how to clip stuff... \[laughter\]

**Tammer Saleh:** No, but what I was saying was Nix does have that fatal flaw of a really horrible learning curve user experience.

**Jerod Santo:** Hard to use.

**Tammer Saleh:** And even talking to, for example, some of the people inside Shopify - Shopify was touted as a place that was going to use Nix holistically, throughout their entire developer experience... And they tried, and they've put a good effort into it, but I've talked to a lot of the engineers that said "No, it was too hard to understand, especially for our new engineers", and it just didn't work.

That being said, I know there's a lot of initiatives to fix Nix's usability, and that's great. I want to see that happen, because I personally am actually very excited about some of the aspects of Nix, like what it opens up. NixOS - sure. But just Nix as a package manager in general is just very interesting. It's a really cool technology. But also timing... I mean, I read some of those comments too, and for some reason, this message was lost. So what am I going to do? I'm going to say it again, right? \[laughs\] Docker solved a lot of the problems that Nix is supposed to solve. There are ways to use Nix and Docker together, and a lot of the complaints I saw said "You don't understand Nix" or "He doesn't understand Docker..." And I'd like to think I understand Docker. If I don't fully understand Nix - fair. But I did a lot of studying on it. I think I understand Nix, too. Docker is not just about running containers; it's not just LXE. Docker solves three different problems. Running your container in a secure, multi-tenant fashion is definitely one of the problems Docker solves; it's the most obvious. Packaging your dependencies... So basically, the first one was Docker Run -- Docker Build, packaging all of your dependencies into one unit of distribution is another huge problem that it solves.

The third is as just a package distribution system. So Docker Hub is the third, right? Docker Build, Docker Run, Docker Hub. Nix solves the last two. Nix solves the packaging your application and its dependencies better than Docker does, right? Too many people don't understand that if you run Docker build twice, and you're not careful about your layer caches, you're not going to get the same result. I hate that about Docker. You remember Bosh... Bosh got that right. Nix is a better version of that, right?

**James McShane:** \[59:56\] Yeah, yeah.

**Tammer Saleh:** But still, Docker solves it for the masses. The masses don't care about that one little niggly part of Docker Build. The masses are just like "Whatever. It's Docker. It's everywhere, right?" And Docker Hub solves the distribution problem. I want to install NGINX, I just docker run NGINX. Done. Nix also solves the distribution problem, but Docker's got more momentum. So everybody has a Docker image. Not everybody's got a Nix -- what is it

**Gerhard Lazu:** Flake?

**Tammer Saleh:** Is it a flake?

**Gerhard Lazu:** That's what it's called... It's an experimental thing.

**Tammer Saleh:** Now I'm showing my ignorance...

**Gerhard Lazu:** Nix Package?

**Tammer Saleh:** Yeah, yeah, Nix Package.

**James McShane:** Well, flakes have had their own issues in the community...

**Gerhard Lazu:** Yeah, I mean, the community is split. There's a couple of things... But you mentioned something really -- the UX, right? And the DX especially. Who doesn't understand Docker files, would be my question.

**Tammer Saleh:** Right. Docker files - I hate that format. But it's obvious, right? It's real obvious what's going on with it. My apologies to Solomon, but every time I see a Docker file, I'm like "Really?" I like YAML --

**Gerhard Lazu:** We are fixing that. We are fixing that. It's all good.

**Jerod Santo:** He likes YAML. This is like confessions time.

**Tammer Saleh:** Yeah, I'm like the only person who likes YAML. Anyways. But my point is Docker does three things, Nix does two. Nix does not solve the running in actual isolation. Nix solves the isolation of dependencies in a very good way, but it doesn't solve running in namespaces, in cgroups, and security, and all of that. Nix doesn't solve that. So if you combine Nix and Docker, which - there's that Nixery, which is a great project; that Docker registry that can make Docker images on the fly based upon the next packages... That's a cool application of Nix. I still believe that Nix has a future in today's technology arena, but as an implementation detail. And I think there are some small teams that are basing everything on Nix, and they're having a lot of success with that. But because of the learning curve I just don't think it scales to any larger environment.

**Gerhard Lazu:** And people like Mitchell may go all out -- I love his blog posts, but man, they're hard. I mean, if you were to try and do that yourself, you're like "Whoa, really? Do I really want to do all this stuff?" I mean, it's great, but do I really want to put all this effort in? Some people do, and that's okay. But most people don't. And again, that should be fine, too.

**Tammer Saleh:** And I mean, I hope this isn't offensive, but to be frank, not everybody's a Mitchell. Even if I had the time and energy, Mitchell was a genius coder. He really was. So Nix is a fantastic system if you can adopt it in an isolated, hermetic environment... But it's not for the masses. Docker's for the masses.

**Jerod Santo:** I'll go comment that... \[laughter\]

**Tammer Saleh:** Tammer says "Go to hell." \[laughter\]

**Gerhard Lazu:** Tammer says Docker is better than Nix. \[laughter\]

**Tammer Saleh:** No such thing as bad publicity. Just say SuperOrbital next to my name. Tammer of SuperOrbital.

**Gerhard Lazu:** Yeah, yeah. That was a good one.

**Jerod Santo:** Thank you for answering my one question. I'm all out of questions...

**Gerhard Lazu:** Cool. Great. Well, I have a few more, that's okay. \[laughter\] Right, I do have to say that Docker - I personally don't like it, and I don't like it from the Mac experience perspective, developing on a Mac.

**Jerod Santo:** Same.

**Gerhard Lazu:** So you have to run it on Linux. Otherwise, you get a terrible experience. Docker Desktop - I mean, I have it...

**Tammer Saleh:** Sorry to interrupt, have you tried OrbStack yet?

**Gerhard Lazu:** No, I haven't. What is OrbStack?

**Tammer Saleh:** OrbStack is a replacement for Docker Desktop. One developer is doing this thing... It's not open source.

**Gerhard Lazu:** So hang on... Okay, where's it coming from? Who's the company behind it, or who's the developer behind it?

**Tammer Saleh:** It's one developer... I don't actually know his name.

**Gerhard Lazu:** OrbStack.

**Tammer Saleh:** OrbStack.

**Jerod Santo:** News to me.

**Tammer Saleh:** It's great. It's super-fast, and it launches whole VMs -- literally, I can launch a VM and get a shell in it in like a couple of seconds, because it uses the macOS native virtualization technology.

**Jerod Santo:** \[01:04:04.13\] So like a drop-in replacement kind of thing?

**Tammer Saleh:** Yeah. Oh, totally.

**Gerhard Lazu:** Really?

**Tammer Saleh:** Oh, totally. One-click-install drop-in replacement, works faster and better than Docker.

**Gerhard Lazu:** Does it work with the Docker CLI?

**Tammer Saleh:** Yes.

**Gerhard Lazu:** Really? Wow...

**Tammer Saleh:** We didn't change any of our tools. So it just worked.

**Gerhard Lazu:** OrbStack. Okay. So everyone -- I'm amazed. Cool.

**Tammer Saleh:** Whoever that developer is, you can pay me later for that.

**Gerhard Lazu:** James! It was you, all this time...! \[laughter\] You are that developer.

**James McShane:** My secret plan is revealed now...

**Tammer Saleh:** Sorry, I interrupted you...

**Gerhard Lazu:** No, no, it's all good.

**Jerod Santo:** That's worth interrupting for. That sounds really promising.

**Gerhard Lazu:** For sure.

**Tammer Saleh:** I also -- I've always been really bullish on the whole remote developer paradigm. The GitHub Codespaces coder... We use it in our workshops.

**Jerod Santo:** Oh, great for education, I'm sure.

**Tammer Saleh:** Yeah, it's wonderful for that. But I used to a long time for development, too. I ran an instance in Google... It's old school, I just Terraform-ed it up, Packered it, and all that... And it was a pet, right? I had to maintain it, and all of that. I didn't go so far as to make it something I could kill and recreate... But it was great. I ran a really complicated Tmux setup on it so that I had basically a persistent shell... So I could launch some big job, and have it running on my shell and just close my laptop and go on the flight, and then later on the flight open it up and type a few more commands, and close the laptop again...

So you're right, especially the Docker Desktop experience on MacOS is not great. I'm not gonna go so far as to say I think this is actually happening, but I'm always hopeful that more companies will invest... Like, one of our clients is Bloomberg, and I've talked to them, and they have a GitHub Codespaces type thing internal to them, and it's been really transformative. I think a lot of companies should investigate that a bit more.

**Gerhard Lazu:** Okay. So what do you use in your workshops? What does that solution look like for the students?

**Tammer Saleh:** Oh my gosh, if you could see the horrendous things I have done to Terraform...

**Gerhard Lazu:** I would like to see it. \[laughs\]

**Tammer Saleh:** ...the Bash scripts that I've written to run our workstations... So our infrastructure for the workshops is we deploy for every squad -- so when the students go into the breakout rooms and they're doing their labs, we pair them up, because I'm ex Pivotal, so I believe in pair programming, but also just for learning it's great to have someone who's advanced paired with somebody who's still learning, or maybe put three people together if they're all kind of struggling a bit, and they can help each other out... So for that, we use VS Code Server on these cloud workstations. So they get a cloud version of VS Code that they go to in their browser. It's got a terminal built in and everything, and the beauty of that is that that workstation is now fully configured to talk to their Kubernetes cluster, or whatever we're doing. Kubernetes clusters - we run like real clusters in the cloud, so we also have to provision that for every student... And we set it up so that each squad is provisioned and destroyed separately from the others, so that we can easily recreate a student's environment if something goes sideways... Although, at this point we've been delivering them for so long that it's pretty polished. Everything just kind of works.

**James McShane:** But even -- you know, one of the pieces that I've really liked working with recently that we've added is this ability to... You know, when you're working with Kubernetes you often want to eliminate some of the complexity of "Hey, we're going to work with Istio. I'm going to install Istio for you to have that already in there." And so we have this ability to customize per lab environment, and like dynamically template the YAML files that each student is going to need, so that they don't have to go in and be like "Okay, I'm student five dot whatever." That's --

**Tammer Saleh:** \[01:07:56.09\] Everything just works.

**James McShane:** We want eliminate the undifferentiated stuff and really focus on the learning that they need to do, so that everything that they're doing is focused on that topic, rather than go type in "Hey, I'm, student five", and find some of those things that don't matter as much.

**Tammer Saleh:** And one of the frustrating things -- every once in a while a student or somebody new to SuperOrbital will say "Hey, have you looked at this Docker solution, or this other platform that will run temporary workstations for you?" And they're just running inside a Docker container. But because of the stuff that we teach -- I mean, we teach Docker itself, obviously... And you could do Docker in Docker, but it's ugly and it's confusing. Same reason we don't use Kind for Kubernetes. We want students to see what it should really look like talking to real VMs. But next week I'm teaching "Containers Demystified", which is Linux systems calls of how Docker actually works. It's basically Linux systems programming, where we dig into all the namespaces, and cgroups, and we do a pivot route, and all that kind of crazy stuff. And you just can't do that inside a container. So it means we have to go -- ironically, we have to go old-school and go back to Terraform and Packer, and provisioning those machines in the cloud... And it's kind of painful because of that, but we make it work.

**James McShane:** But I think having an environment that is a little bit more accessible is important, so that we can say "Yeah, you can go access this stuff and you can get hands-on with some things." You can get deeper in, rather than just -- deeper than just kubectl apply.

**Tammer Saleh:** Yeah. We're trying to eliminate the toil for the students. I mean, the worst thing in the world is when you're taking a workshop and you're just struggling through half an hour of "Kubectl doesn't work on my laptop", right?

**Jerod Santo:** Totally.

**Tammer Saleh:** What's the value there, right?

**Gerhard Lazu:** Yeah, for sure. Well, a real world... \[laughter\]

**Jerod Santo:** That's actually funny you say that, because I had a similar experience when I was teaching web development years ago... And it was like, I was trying to provide a happy path to learn the concepts of web development. And a lot of it was just like "Let me make sure Postgres is running on your machine", and all this other stuff; getting people set up. And I wanted to remove all of that, so they could just do the focus. But at a certain point, you're also like "Well, this is what the work is like." \[laughs\] But you want them to be able to learn it, so it's a balance there...

**Tammer Saleh:** Yeah. No, that's actually a really good point, and it's the best counterpoint that a student once brought up to me about the fact that we have these fully-provisioned and provided workstations for you. He's like "Well, I really wish we had set it up on my laptop, so that now I have it set up. I have all the right utilities downloaded, and all that." And I ain't gonna argue against that. I mean, that's -- it's a trade-off.

**Jerod Santo:** Yeah, it is.

**Gerhard Lazu:** Yeah. It's almost like there's maybe two approaches, in that if you want to do this asynchronously, on your own time, go ahead and do that... Because by the way, the real world is going to be on your own; maybe with someone else helping you. But when you're here, do your homework, come here, and let's go, because you can do that whenever, and you will figure it out. We can't anticipate all the things that will happen because you've downloaded the wrong binary, or you had a bad morning, whatever. It happens, right? Most silly mistakes are the ones which are the costliest ones, and you can't predict them...

**Jerod Santo:** Right.

**Gerhard Lazu:** So even if you try to like inject some artificial faults, in your setup, like "Go and figure it out", like slightly broken things --

**Tammer Saleh:** We do that in our war games. We will break all the students' clusters, and they'll race to fix it. It's actually pretty fun. But yeah, we also let the students download -- the students get an email afterwards with the home directories, and the labs, and all the binaries and stuff... So I can be like "Oh, you can do this yourself at home." And they can, but it's not the same. But yeah, it's a trade-off. We only have so much time with the students, so we want to make sure it's spent with them actively learning, you know?

**Jerod Santo:** \[01:11:46.16\] Right. What I would tell them is that I'm here to remove roadblocks for you... I mean, it depends on who you're teaching. I'm not sure who your students are, but these are like bootcampers, where it's like they're career switchers... "Is this for me?" And so I want to get them to a point where they can answer that question. And I tell them "I'm here to remove roadblocks. That being said, in software development, there's going to be serious roadblocks. And your ability or your willingness to persist through those is actually what's going to inform your success or failure." Because conceptually, I think most people can get there over time, but you have to be able to power through. And so you're kind of on training wheels with me here, because I can save you hours by saying "Oh, you've missed a flag when you started the thing." Which is like, who wants to spend hours doing that? But when you hit the real world, if you're willing to figure that out and just toil, then you find success eventually. But some people just give up and they're done, and it's like "Well, this career isn't for you."

**Tammer Saleh:** Yeah. And some people find that debugging rewarding. Sometimes when I'm in the zone, I find that debugging rewarding. If I'm really approaching it from a systematic, scientific mindset... Julie Evans just got done putting out a whole bunch of zines about debugging, and I loved them, because it's like "Yeah, that's how you do it. You approach it with the right mindset." But if you're just not in the zone, debugging is a slog. It's just like two days of just banging your head...

**Jerod Santo:** Oh, yeah. And the yak shave. I mean, you end up finding other problems along the way, and then you're so far away from where you started at... And that's very unsatisfying work. But yeah, when you're doing it systematically, and you find that one thing, especially when it was somebody else's fault... Very rewarding. \[laughter\]

**Gerhard Lazu:** "It was you...!"

**Tammer Saleh:** It was 20 years ago, and I'm like "It can't possibly be a bug in GCC", and it turned out - totally a bug in GCC.

**Jerod Santo:** That's a satisfying find.

**James McShane:** I remember -- I think back to my early career days, and one of the first times I solved a problem like this, I was persistent; this sort of thing where they're having this problem and it was failing in one environment, and people were all upset about it... And you get down to the two days of debugging and figuring it out, and finding out the one line that didn't get correctly updated... And there is a point of reward to that when you've really dug into it. It's a moment that's really burned in my brain from over a decade ago now.

**Tammer Saleh:** Yeah.

**Gerhard Lazu:** So you've been doing these trainings for how many years? The workshops and trainings.

**Tammer Saleh:** Since 2017.

**Gerhard Lazu:** Wow, that's a long time. Is there a lesson that took a long time for you to gather from these workshops, that was like a valuable one? Something that you haven't realized year two, year three, but as you were gradually making more workshops, more trainings, they're like something that now you know that it's really valuable, that other people maybe miss, whether it's a student, or maybe what these workshops are? So something that is not obvious to begin with, but then you realize "We keep seeing this pattern."

**Tammer Saleh:** You mean in like how to make the workshop successful, or do you mean...?

**Gerhard Lazu:** From the attendees -- so like, I attend this workshop, and I have like a certain result after it. There's an outcome for me. And you have the students that keep telling you the same thing, or you keep hearing the same feedback, in that the workshops are great in one way that maybe it wasn't obvious, and you keep hearing the same feedback over and over again...

**Tammer Saleh:** Well, it did take us a while to find the right balance between in-the-weeds details versus big picture. So like I said before, when I'm creating the workshops, early on I got into the flow of starting with the lab, and starting with the tests even before that... Because especially for some of the more exploratory stuff where I was kind of learning as I was building it - which is really fun, by the way. The exploration I was doing would kind of -- the notes for that ended up being the tests. And I would go through it in this big Bash script, and eventually kind of build out what ended up being the lab.

**James McShane:** One of the things we've been talking a lot about lately, as we get into the students' shoes a little bit more, is the learning over the course of -- you know, we have three to five-day courses. And it's a different type of intensity from your regular working day. There's a lot of information packed into a really short period of time... And so what I've found to be really interesting from a student's perspective is trying to help them get in the right mindset of learning without getting overwhelmed by "Oh, I have this concept, and this concept, and this concept I'm trying to put together."

\[01:16:26.25\] So the thing that I've done in recognition of that is really find ways in our discussions at the end of chapters, at the end of our day, we always spend some time in conversation, and kind of take a step back and try to boil things out a little bit. It's like "Hey, we talked about a lot of things today", and we go through some questions, but really, say, give them a little bit of a chance to breathe and think for a moment before jumping in with like throwing a ton of content at them. For myself, I love going through caps in a class, because when you look through a Kubernetes enhancement proposal, you're really seeing the why behind the platform. And so we spend a lot of time doing that... But you can't jump from lecture and lab and thinking about this stuff intensely to then spend another 30 minutes going into the most intense discussions, reading Brian Grant comments from 2018... You have to work into that so that it's not overwhelming, so people can get the most out of the classroom where they're at. Because some students are just learning, some students are looking at open source projects and seeing how they can apply the concepts that we talked about in that day... And so you need to balance it. And I think from the student perspective, you need to understand kind of where you are, and how you can say "Look, I'm going to take a step back right now and take a breather, and gather for myself rather than having to engage", and where other students are "Hey, this is the moment for me in my depth of understanding to get further in."

**Tammer Saleh:** Yeah, related to that, we're always questioning what's a bridge too far, right? And James has been working on a Go course - actually, a couple of Go courses now - and one of the things we debated in the beginning was "Do we teach test-driven Go?" Because for some students, that's just obvious. Like "Yeah, that's how I want to learn. We do all of our development test-driven." But for some students who've never heard of test-driven development, it's another paradigm shift that you have to teach.

I think we decided to teach the courses with tests... Yeah. I'm looking at him like "Wait, which way did we go?"

**James McShane:** In development, but yes.

**Tammer Saleh:** Yeah. But we might end up deciding after this course actually launches, and we give it the first few maiden voyages -- we're gonna have to refine that. There's certainly going to be some work to explain TDD just enough for the people who don't know it, but not so much that you're boring the other people. It's that disparity of the people with lots of experience versus the people who are new to something. The wider that the class disparity is, the more challenging it gets.

**Jerod Santo:** And your students are all over the map on that?

**Tammer Saleh:** It depends on the company that we're teaching. Some of our cohorts have been all over the map, and it can be really challenging. What we've found - and maybe this is my bias, but I feel like if you're at a conference and you're at a talk that's extremely deeply technical, and maybe over your head, that's still more satisfying than if you're at a conference and you're at a talk that's maybe a little boring, but you're getting all the information. I think students would rather...

**Jerod Santo:** ...try to swim in the deep end.

**Tammer Saleh:** Exactly.

**Jerod Santo:** I would agree with that.

**Tammer Saleh:** So we err on the side of far too deep on our workshops.

3:That's a good one. That's a good one. So the reason why I asked that question is because I know that's within us ex Pivots, this refinement, constant improvements; the retros, we have them there for a reason. It's all to reflect back and to keep improving all the time, week in week out. And the reason why I ask this is because if you approach it that way, what you do over years compounds, and where you end up, it's like such a different place in so many ways. It has the depth, and the breadth, and everything. You see it much better; you just expand everything.

**Tammer Saleh:** \[01:20:26.15\] It's just so polished.

**Gerhard Lazu:** So I think the CNCF landscape and Kubernetes itself needs curation. It's almost like it's too big. So how does that even happen? How does the curation happen so that it's still relevant and it doesn't limit people to the choices that maybe some are good for them? But you can't, again, give them everything, because that's too much, right?

**Tammer Saleh:** And you're talking about an individual's journey, but what you're saying is equally true for companies. Companies at different stages, they should be using different sets of technology.

**Jerod Santo:** Right.

**Tammer Saleh:** And what we actually see - I don't know if this makes sense, but this is what we actually see, is that the younger companies tend to use the more interesting technologies, the technologies that are newer, and kind of edgier, but they still have to worry about innovation point spending. So they'll still limit how many of those technologies they use. And the larger companies are the ones who are using the more traditional stuff, the stuff that's been in the CNCF forever.

**James McShane:** The interesting part about curation is understanding how many innovation points come with a specific technology. How many innovation points are the project of linkerd versus the project of Istio.

**Tammer Saleh:** Oh, yeah.

**James McShane:** Right? It's a part of the project. The Istio core team will talk about -- they understand that there's more complexity in Istio than linkerd, and part of that is by design; it's trying to solve a wider problem set. But sometimes we go into a company and they talk about what their current stack looks like. And to us, it's very obvious after that first conversation of like "Oh man, you have exhausted your innovation account. You are doubled over of your innovation account."

**Gerhard Lazu:** Your credit cards are maxed out. \[laughter\] You shouldn't be spending anymore.

**James McShane:** You've got credit card debt of innovation points that is going to rack up real quick.

**Jerod Santo:** Are you a Pivotal Labs guy as well?

**James McShane:** No.

**Jerod Santo:** Okay. Because it sounded a lot like storypoints at this point... Like, doing a Fibonacci scale of how many innovation points per project... \[laughter\]

**James McShane:** Tammer may have indoctrinated me over the last few years, but I don't think -- I'm not all the way there right now. But it's just a basic understanding of even just like T-shirt sizing, right? It's like, what kind of complexity are you taking on with a project? State on Kubernetes -- you have to understand, if you're going down that path, you are making a necessary trade-off. And for some folks, that's reasonable, and that's an investment they want to make... And for other companies, we have encouraged them "You need to move away from this, because you've gotten in a situation that's not gonna be tenable for the long-term."

**Jerod Santo:** This was a great conversation... We still have to wrap it up, unfortunately.

**Tammer Saleh:** We had a lot of fun. Thank you.

**Gerhard Lazu:** Which is the key takeaway point for the people that... Nix? We can do Docker, we can do anything.

**Tammer Saleh:** Actually, I think innovation points - that's probably the key thread to everything we've been talking about, including Nix.

**Jerod Santo:** There you go.

**James McShane:** Well, yeah, and learning about that within your organization. I think if we can combine some of the things we're talking about, it's that you have to -- you see the impact, you see how your organization is growing along the way. And that's where we can really bring that continuous improvement. Maybe you get really good at using your innovation points in certain areas. And it's a journey, right? You're not going to get it right on the first iteration, and the goal is to learn and grow there. I feel like that's the takeaway. Tammer, it's one of the models of our company, so I'm hoping that we can --

**Tammer Saleh:** \[01:24:11.02\] Yeah. Always be simplifying... Because you're gonna need to spend more innovation points later, so you need to earn it back by reducing the number of technologies you're using, and reducing that complexity.

**Gerhard Lazu:** So not improving.

**Tammer Saleh:** Not improving.

**Gerhard Lazu:** Simplifying. \[laughter\] Great. That's a great one. And on that, I think it's time to end... James, it's been an absolute pleasure. Thank you. Tammer - the third time; they're only getting better...

**Tammer Saleh:** I have so much fun on these. Thank you.

**Gerhard Lazu:** Thank you all for joining.

**Jerod Santo:** Thanks, guys.

**Gerhard Lazu:** See you next time.

**Break:** \[01:24:45.20\]

**Gerhard Lazu:** We are in Chicago at KubeCon 2023, talking with two people that I bet my production Kubernetes on, Steve and Spencer. Welcome.

**Steve Francis:** Thanks.

**Spencer Smith:** Happy to be here.

**Gerhard Lazu:** Well, what is the best thing that happened to you so far at KubeCon?

**Steve Francis:** When I was walking here from the conference this morning a guy just stopped me and said "Oh, Sidero Labs. What do you do there?" and it's like "Well, I'm CEO." And then he just went on a 10-minute spiel about how much he loves the Talos operating system, and how he's building a production cloud hosting environment on it, and he was using it at home, for his home Kubernetes deployments, and how he likes the architecture. So I was just like "That is pretty cool." When people can have such enthusiasm for the product and the architecture... And that's pretty common.

**Spencer Smith:** Yeah. Honestly, mine's kind of the same. I had someone come up to me and say, "You're from Sidero? I love Sidero Metal. My whole team loves it." So it has been interesting to see people actually recognize the logo and stuff now, which certainly wasn't the case a couple of KubeCons ago. And if people had heard of Talos Linux, they hadn't heard of Sidero Labs. So seeing some of that change I think has been really, really fun, for sure.

**Gerhard Lazu:** Yeah. So again, big fan of Talos. I'm using it myself. As I mentioned in the intro, I bet by production on it, and it's been great. And there's a couple of things there that people miss, because they think "Oh, it's just another operating system which has Kubernetes." We had one of those... But obviously, this goes much further than that. So people that are familiar with Talos, they know what is inside of it... But the one core concept which I find fascinating is this controllers concept that you mentioned, Spencer, which isn't just in Kubernetes, it's also in the operating system. So how does that work? How do controllers work in the context of an operating system which is not Kubernetes?

**Spencer Smith:** The project that specifically does the controller-based stuff for the operating system is called Cosi, and that's the Common Operating System Interface is kind of what that stands for, if I'm remembering correctly. It's been a while since I looked at the acronym... But yeah, so the way that works -- I mean, if you think about Kubernetes controllers and the controller paradigm, it's really just "Here's a set of inputs, and here's a set of outputs", and the controller handles that. So you're looking at informers, and things like that in Kubernetes to watch events. Because Talos is all API-driven, we have the ability to essentially do the same thing at the operating system level.

\[01:28:27.19\] Cosi, as an idea, we kind of have larger ambitions for, because - I mean, outside of Talos, we feel like any operating system should absolutely be API-driven. Even if it's an Ubuntu system with systemd as the init system, all that stuff, you could easily use Cosi and extend it to basically just do some of that on basically any Linux distro. But obviously, Talos is the reference implementation of that.

But yeah, it's been interesting to switch focus a little bit. When you stop caring about the ins and outs of the operating system, you want it to be controller-driven, essentially, because you don't want to deal with that stuff. You want to say, "My IP changed. I need new certs, or whatever. Just do it. I don't care." And that's kind of the beauty of that paradigm.

**Gerhard Lazu:** Okay. So we'll skip past the no SSH part, because it's also very cool, but there's not much to say about that other than you don't get an SSH into the operating system...

**Steve Francis:** Which causes some issues with some companies' security policies, because they need to be able to scan on SSH, to make sure your SSH is secure, amongst other things. It's like "Well, we don't have SSH." So it's definitely secure, but you can't scan that.

**Gerhard Lazu:** Interesting. So what would those companies do that need SSH to be able to scan, but they don't have SSH? What is the solution there?

**Steve Francis:** Some of them we've actually worked with their security software vendors, like Palo Alto, and we've worked with them so that their software now recognizes Talos as a secure platform. Sometimes it's just a matter of convincing them...

**Gerhard Lazu:** Okay.

**Spencer Smith:** Yeah, these security agents are funny in general, because - I mean, even if you have to run it on the machine, because at a lot of enterprises you do, of course, but you've scheduled it basically as a pod in Kubernetes, as a daemon set on these nodes, and then it tries to use a bunch of binaries on the host system to check in things, and Talos has none of that. So a lot of it is arguing like "Look, what you guys are looking for just isn't possible. You should approve it anyway..." \[laughs\]

**Gerhard Lazu:** Okay, that makes sense. Okay. So as I was mentioning, SSH - interesting. I didn't know about that. That's a very interesting segue. The other interesting - again, personally interesting - is the KubeSpan feature, which allows you to start clustering. It's like, how easy is that? Seriously. I mean, this is not marketing, because I'm using it, and I've seen how easy it is in practice. I was like "Wow, this thing is great." Wireguard, all seamless. It's a little bit of a Tailscale experience that maybe some users are familiar with, because they maybe have it on their phones, and computers and whatnot... But it's a little bit like that, and you get it in Talos. So how does that work?

**Spencer Smith:** Yeah, I mean, KubeSpan is exactly that. It's WireGuard built directly into the operating system, essentially. So when you say "I want KubeSpan enabled", we kind of couple what's going on in the local Kubernetes cluster with our discovery -- we have a discovery service too that your nodes, if you have it enabled, they'll reach out and say "Hey, I'm part of this cluster, and here's my info. Here's all the IPs I know about." And so that's how we orchestrate that WireGuard mesh.

And what's been super-interesting about KubeSpan -- I feel like when we first launched it, it didn't get the traction I think we kind of hoped for... But now, as it's kind of been baked in for a while and people have really started using it, we've seen some really cool architectures come into play because of that.

\[01:31:48.00\] For example, we have a bunch of bare metal users and we've seen a big -- for us at least, a big swing towards bare metal and edge, because that's where people are wanting something like Talos... But yeah, it's been interesting to see the architectures that come up with that, because we've seen folks not want to -- you know, you don't want to spend 20 grand on three control plane nodes that are boxes in your data center, right? So KubeSpan lets you do things like "I want my control plane in the cloud nearby, and it's smaller VMs." All of my bare metal is orchestrated with KubeSpan, and it just works. It's a pretty cool setup, for sure.

**Gerhard Lazu:** Okay. So it's been about 10 months since we've last spoken... It was January 2023. 10, 11 months, roughly, depending on how you look at it can be either very short or a very long... But I think in our world, it's a very long time; a lot of things were happening... What are some of the highlights that happened for Sidero Labs and Talos in the last 10 to 11 months?

**Steve Francis:** Yeah, lots... Probably the biggest one from a company point of view is the launch of Omni, which is our SaaS for managing Talos clusters. It's a SaaS for bare metal, which sounds kind of a oxymoron, but you bring your own servers - they can be bare metal, they can be edge servers, they can be in the cloud... You boot off an image or an ISO or an AMI or what have you, and that's basically it. Again, using WireGuard built into the Talos kernel; those machines will register with the SaaS UI control plane side, and show up as unallocated nodes. And then you can just go through, you can use a UI to say "These are control planes, these are workers. Go create \[unintelligible 01:33:26.08\]

You can template all that and do it in an API-driven way if you're doing GitOps... And it just makes cluster creation declarative, it makes a cluster upgrades, operating system upgrades, ACLs, it solves authentication problems, it ties into your enterprise SAML or other identity provider...

So that got launched in end of February, early March, and that's done really well for us. We've got people running hundreds of clusters on it, and it's a great product. Talos itself has added TPM encryption for Secure Boot... Probably a variety of other things that -- KubePrism, which is great...

**Gerhard Lazu:** Oh, yeah. We'll get into KubePrism in a minute. Oh, yeah. We have a story there. Okay. Okay. What about you, Spencer? Anything that's --

**Spencer Smith:** Yeah, I think Omni is the biggie for us, for sure. I think what I do at Sidero Labs is I do the operation layer; I kind of head up two parts of the operation side of things, and then the customer success side of things. So I've been part of running Omni since we've launched, and that's been an interesting set of things to learn. We've had issues with BGP sessions, and all that fun stuff... That's been pretty crazy. But seeing the growth of Omni, of course, has been awesome. And seeing our customers that have chosen -- especially, we have an EV company that we work with, that does charging stations... And all of their charging stations are Talos clusters. And they're all checked into Omni. They talk back to Omni over LTE connections, and parking decks, and things like that.

**Gerhard Lazu:** Are we talking hundreds, are we talking thousands? Roughly how big --

**Spencer Smith:** They've got 500 distinct clusters right now... And those are just like different edge sites, basically. So again, just seeing some of the architectures that have come out of Omni growing the way it has has been really interesting, for sure.

**Gerhard Lazu:** Okay. I think it's that flexibility of getting a Talos node anywhere, and then connecting it, and connecting them all together... Which is really, really interesting when you look at them all together. How do you deal with unreliable network connections?

**Steve Francis:** Speaking of KubePrism... \[laughter\]

**Gerhard Lazu:** Okay, yeah, it keeps coming back, so let's talk about KubePrism. Sure.

**Spencer Smith:** Yeah... And that is the answer for some of it, right? Because we have had -- especially some of these edge places that do have really crazy networking things going on... You know, a semi-truck parked in front of the parking station, and so then it doesn't work... Stuff like that. So it is kind of interesting, because - I mean, the way that Kubernetes is architected, your workload should remain running if you do not have access to a control plane. That should still work. But what we've found in practice is there's a lot of things around "Yes, your pod may stay running, but if you've got ingresses and NGINX Ingress as your controller, essentially, that's actively talking to the API server, and once that connection goes down, your ingresses go down."

**Gerhard Lazu:** \[01:36:23.04\] Yup. Yup.

**Spencer Smith:** And so basically, some of this we've solved with KubePrism. So the idea of KubePrism - and this was actually an idea that was built into KubeSpray back in the day, because I maintained that before we started Talos... But basically, the way it works is there is a load balancer on every node in your cluster if you have KubePrism enabled. So that means that the kubelet talks to localhost essentially, on your workers, and then that load balancer is smart enough to use Kubernetes itself and the discovery service and these things that we know about to say "Okay, here are all my upstream control planes. This one seems to be down; this one takes longer than that one. This is the one we're going to go to for now." And it handles all that internally; it's just a really small Go load balancer. And so that means that your chances of just dying that way are much smaller. In the Omni sense, it was like "Oh, your workers couldn't talk to the Omni API, and so they couldn't talk to the control plane." KubePrism solves all of those problems. So it helps you kind of keep those things running in the way that you thought they were going to to start with, basically.

**Gerhard Lazu:** That's the story behind -- that's exactly how I discovered about KubePrism, which I didn't know it existed as a feature... When there was issues with my worker nodes connecting back to Omni... And services were going offline, because they had an ingress, and I didn't realize about this thing. And of course, there's documentation about it. There was a video out there, like "Why KubePrism is important and how to use it and how to enable." Andre did a great job with that, so I really appreciated having that out there... So I've learned about it by needing it and saying "Hey, what's going on here?" And then the solution was there, but I had to upgrade, and a couple of other things... So that was -- that came at like a great time. That's why KubePrism -- it came on my radar for like a very important reason, and I knew I needed it then.

Okay. Are there other things that people should be aware of when they run Talos? Little things like these, that in practice you realize "Actually, the theory, when it gets tested, in some cases it falls apart." Like, what you think would work will no longer work. Are there other examples like KubePrism, that KubePrism solves, that you have, like that cluster API -- sorry, ingresses, and the nodes being able to connect to the control plane? Are there other such situations people should be aware of?

**Spencer Smith:** Yeah, I mean, some of it is still just - you have to know the way you're running and the way that you're going to operate this cluster. I mean, we still see issues... We saw an issue just a few weeks ago around Etcd and connectivity across availability zones in a given AWS region with one of our clients. So there's certainly still -- Talos is the culmination of Andrew and I and some of the other folks on the team having run Kubernetes...

**Steve Francis:** ...in real life.

**Spencer Smith:** ...in real life, and doing it with KubeSpray, and doing it in this really painful way... \[laughs\] So a lot of what's built into Talos is fixing those things. But a little bit of the problem with Talos is that Talos is really easy, but unless you've run Kubernetes and had some of that pain, it's hard to see how it fixes those things. You know what I mean? But there are a bunch of features around -- I mean, KubePrism, of course... The way that we do upgrades, especially with Kubernetes, we try to be really safe about that. We try not to knock you offline.

\[01:39:46.18\] We've got plans on making that even better, and being able to be aware of things like "There's a Rook Ceph cluster here, and we need to make sure that we're draining that properly, and waiting on replication to happen", and this and that. So we've got bigger plans on making that even better, but yeah, there's a lot of things built in like that, that just kind of hopefully make the operation side easier.

**Steve Francis:** I would say that just from a Kubernetes point of view, a lot of people don't seem to get the "Oh, I gave that guy admin a kubeconfig, and he's left the company. What do I do?" That's a remarkably common question.

**Gerhard Lazu:** Okay. And what do you do? What would someone do in that case?

**Steve Francis:** Well, at that point, it's a bit late. \[laughter\]

**Gerhard Lazu:** Don't let them leave the company? \[laughs\]

**Steve Francis:** Don't give them admin kubeconfig...

**Gerhard Lazu:** I see, okay.

**Steve Francis:** But you know, that's kind of the standard practice. You can put decks and things in front of it, but Omni solves that. But just for a general, non-Omni Kubernetes cluster, that's something you really have to think about. It's like, you are effectively giving root access to your cluster to someone, and because that's a certificate file, that isn't tied into your enterprise... So locking them out of your Microsoft Active Directory doesn't prevent them logging in and doing whatever they want. Omni does completely address that. There are other ways to address that, but a lot of people just don't think about that.

**Gerhard Lazu:** One thing which I would like to add to what Spencer said - I'm going to go just a few minutes backwards... When you upgrade Kubernetes, the one thing which got me is remember to apply the bootstrap manifests, because maybe your kube proxy will go out of sync. That's like a gotcha; I was like "Why is my kube proxy on 127 when my cluster is on 128? What's going on there?" And I think this was especially for patch versions. I'm not sure whether minor versions do the same thing... But applying the bootstrap manifests is a gotcha; once you know about it, it's easy, of course. And once you understand how it works. But it's something I've found you need to get a little bit of experience with Talos to understand that part... But apart from that - I mean, I have to say, production has been -- apart from KubePrism; we already talked about that... I've learned about it, I need that, and I know why. It's been pretty reliable, and upgrading things has been pretty reliable. And this is, again, something that, for the listeners, I chose it because I thought the technical solution is sound, the implementation looks good... There's some very good choices being made, some very good technological choices made inside of Talos... And are you telling me I can get Kubernetes just like that, just by booting a host? It's that simple? Even just DD-ing, basically... Like, DD, lay down the partition, it has its own partition, boot it up, and guess what - it's like a Talos machine. That's all it takes. And that was really simple. I felt like "This is how it should have been from day one. Why don't more people know about this?"

So that was my quest since we last spoke, Ship It episode 84, that I went on; I said "Okay, so what can I do with this thing?" So I had one experimental cluster; single node, but that's okay. I've learned what doesn't work in single-node scenarios. And by the way, scheduling workloads on the control plane is a little bit more involved based on when you configure it and how you configure it... But once you know what to do with it, again, it's very simple. And I think that the documentation has gotten a lot better around this as well. That's another thing which I want to shout out, is the community. And I don't mean Sidero Labs; I mean the Talos community. Users helping each other out, and sharing their experiences - that has been very nice to see and experience as an end user myself. Is that by accident? Is the Talos community the way it is by accident? I'm sure it is, and it is a leading question...

**Spencer Smith:** It's -- but we're lucky that it's the way that it is, I think, is the thing. I mean, we do have a really cool community and a lot of helpful people out there... And we've actually wound up hiring a bunch of the people that were community people early on... I mean, that's how we got Tim, and that's how we got Noel, and some of those other guys around... But we've always -- I mean, Andrew and I talk about this all the time, especially as we grow, but it's like, the thing that's always been important to me is that we never lose kind of the human element of Sidero Labs. And I want it to always be such that if folks need something from me, they can slack me directly. They know where to find me; they know where to find Andrew. They know how to get in front of us and ask questions like this... Because I think that breeds a much more collaborative community.

\[01:44:03.00\] And even our professional services stuff is way more collaborative than just "We're coming in and doing work, and leave us alone." The collaborative aspect of that, the human aspect of that, I think, is what leads to us having a great community. So that's always been -- like I said, as we've grown and hired, it's always been an important factor in how we bring people on.

**Gerhard Lazu:** So what is the number one favorite feature that your users are telling you about? Something they cannot shut up about, like "Wow, this is amazing in Talos. I wish --" Is there such a thing?

**Steve Francis:** Well, I mentioned that a guy stopped me on the walk over here, and he was like "You guys just completely solved the provisioning problem. I PXE boot, and I apply machine config, and I have a cluster. It's like, all these other systems where I have to install the operating system, and install Rancher, and then install Kubernetes, and configure swap, and turn it off, and do all these other things... All that just goes away." That's a pretty common refrain, just how simple it makes the deployments. But it kind of depends on the Kubernetes experience of the person. We have other people that are just like "I love the fact that it's the same declarative controller-based architecture on the operating system as in Kubernetes. It makes perfect sense." If you're not experienced in Kubernetes, that's like -- "I'm used to SSH-ing in and doing awk and grep and sed, and none of that works... So what the hell do I do?" So it's a bit of a learning curve. So one person's favorite feature is the other one's "I don't get this." \[laughter\]

**Gerhard Lazu:** Yet.

**Spencer Smith:** But I think that's part of it being a little provocative on some of the choices we've made, I guess. I don't know what the right word is for that. I mean, shipping with no Bash and no SSH, of course, is -- there's a ton of gray beard sys admins that are like "No way in hell would I use this."

**Gerhard Lazu:** Do you know the first thing which I install on a Talos cluster? It's my sysadmin daemon set. \[laughter\] And literally, if you go to GitHub --

**Steve Francis:** And then you exec into it, and --

**Gerhard Lazu:** Yeah, exactly. I SSH. I solve that problem. But obviously, you have to have kubectl access, and that goes like through the Omni control plane API... And that's great. But also, I have like a set of tools I need to have. For example, I use iPerf quite a bit. iPerf3. So how do you get that? And I need like a bunch of networking tools to understand what is happening at a networking level... And then before we know it - well, what about the volumes? Can I understand what is happening on the host? And then "Well, how do I mount the host namespace into --" So all those problems I solved via the daemon set. That's why the first thing, I don't have a neck beard... No real one, is like, "Can I get my sysadmin please daemon set running on the Talos cluster?" So that is a common thing, and I can relate to that.

**Spencer Smith:** Yeah. We don't really recommend you do that, but yeah, that is common. \[laughter\]

**Gerhard Lazu:** Right. It works for me. I'm happy, I'm not complaining. If you're letting me do it...

**Spencer Smith:** But no, it is interesting... It is interesting, because - I mean, yes, sometimes the answer is what you want is not something that we have APIs for yet. And that's usually a kick in the pants that we need this API. But if it's not there, you can always schedule a privileged pod in the workload cluster, and exec in, and do what you need to do, basically. I mean, there are always ways around it if you've got admin on that kube cluster.

**Gerhard Lazu:** What about the number one most requested feature right now?

**Steve Francis:** I would say it's better Local Disk Management.

**Spencer Smith:** Yeah, that's probably true.

**Gerhard Lazu:** You can read this, but I'll read it for you. I have my notes... "Managing local volumes." That is my number one feature. \[laughter\] For me, it's something LVM-based. I think LVM is great, and it's a waste to not use it. I never really liked Ceph, or any systems like that. OpenEBS, anything like that. It feels very heavyweight. And we have LVM. Like, what's wrong with LVM? We can do snapshots, we can do a bunch of things... So on my Talos nodes CSI LVM is one of the first things which I install. And by the way, I opened a pull request, and it got merged in that LVM driver. And by the way, this is not TopoLVM. I tried that one as well; it was too complicated. I can add it in the show notes... And I added Talos support to the CSI LVM, because that was the first thing which I needed. I have some very fast disks... Even NVMe disks in some case. Why can't I use them? That's what I would like to have, really. Number one feature for me as well. Okay, we're on the same page...

**Steve Francis:** \[01:48:22.08\] Yeah. \[laughter\]

**Gerhard Lazu:** Great, amazing. That makes me feel very good. What about number two? Is there -- and how far apart are they? Is this like a distant number one, or are they fairly close together with something else that users want? I'm trying to gauge how important one is versus the other.

**Spencer Smith:** Yeah, I don't know... I think the other stuff that I can think, that -- I mean, I've already touched on it a little bit, but we get a lot of questions about kind of what comes next. Like, once you've got a cluster up and running, "Okay, now what?" So to me at least, maybe number two is something around "What does a day two stack look like? What does an operation stack look like for this?" How does a new user come in and actually grok what's going on, and how they deploy stuff in a way that makes sense. So I think that's probably to me maybe number two, of the type of question we get. We also get a lot of CNI questions. "Does Cilium do this? Can I do Cilium here? Can I do Calico here?" Whatever. We get a lot of that stuff, too.

**Gerhard Lazu:** How easy would that be, by the way, swapping out Flannel, which is a default CNI, for something like Cilium?

**Spencer Smith:** Yeah, it's super-easy. It's just part of the machine config. I mean, for folks that don't know about Telos, everything is driven by this one machine config that gets passed to each node. And so swapping out the CNI is as simple as saying "I want to use a custom one. Here's the URL for Calico's manifest YAML", or something like that. It's really easy.

We have a lot of people that come in and say "I don't want to use Flannel." And we chose Flannel as a default just because it's super-easy, if you don't need the network policies and stuff like that that Calico or Cilium is gonna buy you... It just makes sense, and it just works, and we had a lot less headache with your total new user.

But yeah, we've made sure that -- because our clusters are all Calico-based. We run Calico for everything, but...

**Gerhard Lazu:** Question for Steve... Is this somewhere in the docs? Is the Cilium part in the docs?

**Steve Francis:** Yes, it is.

**Gerhard Lazu:** Okay. Okay. Okay. I need to look harder then. Search better. Search better. \[laughter\]

**Steve Francis:** That's actually a function. Something that I think we do need to improve. Our doc content is one thing; it's there and getting better. But our doc search function only shows you five results, and you can't kind of swap between them. We need to just like -- someone needs to spend half a day and just improve our search. And we're using a search server, so it should be like two lines of code. \[laughs\]

**Spencer Smith:** It's this ongoing problem that Steve and I were talking about yesterday, where we have a lot of stuff that needs to be done, but it's not high-priority enough to get done. You know what I mean? With nine people...

**Gerhard Lazu:** Oh, yeah. That's why I asked number one and number two, how far apart are they. Usually, there's a big fire, and --

**Steve Francis:** Yeah, I was trying to think about number twos, and like most of the number twos are things that the Image Factory is solving; it's cumbersome, and if you have to write a system extension, and how you deploy that, it's like, that's not a good user experience. How to enable GPUs wasn't a good user experience. With Image Factory, that's like oh, now "I want this, with this extension", and the USB drivers, and the GPU support...

**Gerhard Lazu:** Tell me more about that. I don't know about that. What is Image Factory?

**Steve Francis:** We sent an email about it just last week. \[laughs\]

**Gerhard Lazu:** Really? Okay, alright... I'm not good at reading my emails...

**Spencer Smith:** We're into Spam.

**Gerhard Lazu:** No, no. KubeCon is a bit crazy the week before and the week after, so I blame it on that... But yeah, so tell me more about that.

**Spencer Smith:** Yeah, so the idea of the Image Factory is -- so the way that Talos works is everything kind of has to be there at install time. You're not adding things to the system after the initial installation, right?

**Steve Francis:** No loadable modules...

**Spencer Smith:** Right. And so all of that stuff has to be there at install time, or at upgrade time, when new things get laid down to disk.

**Steve Francis:** And it has to be signed.

**Spencer Smith:** And it has to be signed, yeah.

**Gerhard Lazu:** What would those things be? Can you give us a couple of examples of what those things would be?

**Spencer Smith:** Yeah, so the system's extensions that -- like, we have an extensions repo that we kind of host, some of the community-submitted stuff, some stuff we built ourselves... But it's things like GPU drivers is the big example that everybody is using.

\[01:52:22.15\] So in order to enable those, you basically say "Okay, I installed Talos", and then I do like a same-version upgrade, and also say "I want this extension as part of it", is the way that works. And it just wasn't a very clean process. So we're building out this thing called the Image Factory, which basically allows you to -- you can go, I think it's factory.talos.dev... I'll have to look.

**Gerhard Lazu:** Yeah. We'll put a link in the show notes for people listening to this.

**Spencer Smith:** Yeah, that's perfect. But you can just go there, and it's just a web UI that says "I want this Telos version, and I want these extensions installed." And that will basically on the fly generate an image for you, you would download it, and you can specify that same installer image and that same image manifest ID across all your nodes, whether they're bare metal nodes, or cloud nodes, or anything. It'll be the same image for all of this. And we kind of generated that on the fly, and it enables people to create these -- we have some folks that have their own extensions for internal... We have somebody that runs FRR as an extension for some BGP stuff... We have folks that are doing like security agents as extensions; that has to stay internal, and...

**Gerhard Lazu:** Okay.

**Spencer Smith:** ...so having an easy way to build these images and not have to do that rigmarole of bring Talos up, patch it with the same upgraded version, and...

**Steve Francis:** Sign it all, and...

**Spencer Smith:** Yeah. It just takes care of all that.

**Gerhard Lazu:** Okay.

**Spencer Smith:** So that's kind of this new big feature... And I don't think I'm doing it justice, because I think it's gonna be really, really cool... \[laughs\] But it has to work its way in Omni first. We're not quite there yet. Like, it's there, but it's not worked into Omni, so...

**Steve Francis:** Yeah. It's out in beta. It's great if you're just running Talos, or probably Sidero Metal... But the Omni integration is about to be released. It isn't out yet.

**Spencer Smith:** But it's gonna be really nice. I mean, one of the things we're hoping to really enable is making -- I mean, we have a few folks doing it already, but making the experience of GPU-enabled bare metal Kubernetes, making that...

**Steve Francis:** Dead simple.

**Spencer Smith:** ...super-simple. Which I think is going to be really nice. Because anybody who's installed the NVIDIA drivers knows it's not a fun time.

**Gerhard Lazu:** Oh, yeah. I had to do it recently, I know exactly what it takes. Oh, yeah. Oh, yeah. Okay, it's a whole new world. And the version has to match, and there's a bunch of things like that. Okay. Okay.

**Spencer Smith:** But the other kind of beauty of the Image Factory is it's all declaratively-driven, too. You have what we call a schematic file that describes -- you can do it this way or you can use the UI, but you can have a schematic file that defines exactly what you want in this image... So that's also gonna enable some of these -- one of the Talos Con talks from last year was this crazy talk, a guy from Docker forked Talos and got it running on a some SBC that I can't remember...

**Steve Francis:** ROCK 5?

**Spencer Smith:** Yes, I can't even remember which one... But it was like, he had to build a custom kernel, he had to get all this stuff in the mix... And so the Image Factory is gonna enable you to plug that stuff in even, too. So okay, I've got this custom kernel that Talos would never support... But you could plug it in, basically, and Talos is gonna run on top of it.

**Gerhard Lazu:** Interesting.

**Spencer Smith:** So it will enable support of some of these things. At least a community-level support for those kinds of things.

**Gerhard Lazu:** We talked about the EV use case. I think that's a really cool one. Do we have other cool use cases of Talos that you can talk about publicly?

**Spencer Smith:** Yeah, I mean, some of the architectures that Omni has enabled specifically has been fun. I think that one has been really cool, and having nodes and clusters everywhere...

**Gerhard Lazu:** Yeah.

**Spencer Smith:** \[01:56:04.27\] We've also got an AI robotics company that's doing - at least as I understand it, there's a control plane and a factory, and then all of the robots are Kubernetes workers, essentially. Which is really cool. It's an interesting topology.

**Gerhard Lazu:** Wow. What are the robots running? Is it ARM, is it x86?

**Spencer Smith:** I think they're x86 nodes... I can't remember. But it's a pretty cool setup they've come up with.

**Gerhard Lazu:** How big of a scale are we talking about? Hundreds, thousands? How many robots?

**Spencer Smith:** I don't think it's that big yet. From my understanding of them, it's like fulfillment robots. So picking stuff from a warehouse. So I don't think it's huge.

**Gerhard Lazu:** Okay.

**Spencer Smith:** Do you have any idea?

**Steve Francis:** I don't know.

**Gerhard Lazu:** Yet. It's growing.

**Steve Francis:** Exactly.

**Gerhard Lazu:** Okay. Nice.

**Spencer Smith:** No, but some of the other architectures have just been -- we've seen, like I said, a lot of KubeSpan-enabling hybrid stuff, like control plane in the cloud, and then running bare metal in the data center, and doing it that way. Another client that I'm working with right now, that we've been having a bunch of fun together - they do multiplayer game hosting for gaming companies... And so the way that that works for them, basically, is they have their control plane on Amazon, they have a bunch of bare metal that they bought... But you know, the burstiness of like a game release - you can't always anticipate how popular a game really will be... And so they've got additional bursting into Amazon if needed.

**Steve Francis:** A truly, truly hybrid cluster.

**Gerhard Lazu:** Nice. Okay.

**Spencer Smith:** And it's been really cool, because before KubeSpan came along I always was kind of like... I mean, I'm a cynic anyway, I think... But I was kind of like "Everybody talks a good game about hybrid, they want it, they want it, but nobody ever does it right..." And I think that's still true, with the exception of KubeSpan, honestly... But seeing people able to truly embrace an actual hybrid cluster, and not just "Yeah, we have a bare metal cluster and an AWS cluster." No, these things are commingled. And that part I think is powerful.

**Steve Francis:** Yeah, this gaming company I think is the best case study for kind of the expansion of KubeSpan. It's like, you know, yes, you've got a whole bunch of dedicated bare metal so that you have costs contained... But if you exceed that, and you need to burst out the same cluster on-demand into Amazon or Azure, then that just works.

**Gerhard Lazu:** Okay.

**Spencer Smith:** Yeah. And I think proving that out... And I think one thing that I haven't seen a ton of our Talos users yet do, that I'm excited about, is seeing how fast Talos really is when it comes to an "Oh, crap" scenario like that, where you're like "We need as many workers online as we can get right now" and "How fast can they join the cluster?" That's something we haven't had a chance to really showcase yet... And Talos is gonna be really good at it. It's fast. There's nothing there, so it's really quick to come online and check in.

**Gerhard Lazu:** Okay... Are there any considerations for latency when it comes to where these nodes are placed? For example, if you have one in the US and another one in Europe, would that work? Could you cluster them? Anything to be aware of? When the latency exceeds 100 milliseconds, 200 milliseconds...

**Spencer Smith:** \[01:59:17.14\] It's definitely possible. I mean, KubeSpan makes all that really easy. But you are going to have to be careful in terms of where your workers are stationed, that they're away from the control plane. If those workers require something from the control plane, data about ingresses, or whatever, then yes, you're gonna have a latency problem. So whatever's running at this very remote spot needs to be pretty well by itself, I think. It's still going to be part of that problem. I mean, you can't solve that, I think.

**Steve Francis:** And obviously, your control planes need to be collocated, because... Etcd does not like replication logs.

**Spencer Smith:** Yeah, we had a pretty interesting scenario with one of our clients around that. They were doing Etcd in three different AZs in the same region on Amazon, but the AZs - something was going on networking-wise there and they were dropping packets all over the place, and Etcd was even within the same AZs... And that's a supported, recommended architecture, right? And it still was like -- yeah, it lost its mind. So we had to -- that was actually part of why KubePrism was built, I think, if I remember right.

**Gerhard Lazu:** Okay. So for those listeners that stuck with us all the way to the end, one key takeaway that you would like them to remember from our conversation.

**Spencer Smith:** I think for me -- I mean, I'd love to just hit on, again, just the community aspect and how awesome our community is. So if folks are interested in Talos, and Omni especially, come try it out, give it a shot. There's free trials and all that fun stuff for Omni... And just collaborate with us. The more we can hear from people, the better of a job we can do. So join in, I guess.

**Steve Francis:** Yeah. I think it's -- similar vein. Talos is better than we let people know. We're not -- everyone's an engineer except me. I'm an ex-engineer, and I'm the one responsible for marketing... \[laughs\] So any faulty marketing is entirely mine. But we don't do a great job of pointing out all the features. Talos already does things like it tells you if the version of Kubernetes that you're upgrading to is going to break some of the API calls that you have in use. This is something we've been doing for - I don't know, a year or something, and it's something that I think Amazon is going to release with a giant fanfare in about two months. We've been doing that and I don't think we mentioned it on our website. \[laughter\]

**Gerhard Lazu:** Nice. Okay, okay...

**Steve Francis:** So we're better than you think. \[laughter\]

**Gerhard Lazu:** Alright. And is there something that people can do to help you with that, or to help with that? What would you like to see happen there so you can be better at marketing? What would that look like?

**Steve Francis:** I mean, the question you asked, "What do people value about Talos?" I would love people to tell us that; why are they enthusiastic about it? Why do they like it? Because putting it into words of end users, so we can convey that is great. If people want to write blog articles, we'd love that. Documentation PRs are always appreciated. \[laughs\] I mean, we're a small company, with limited resources, so if people help with one thing, that frees us up to work on marketing, or messaging, or all the other things.

**Gerhard Lazu:** Got it.

**Steve Francis:** There's 10,000 other things, small things that need doing, that don't rise to the level of today's priority.

**Gerhard Lazu:** Yeah. That's a good one. Okay. Well, on that, we will end it here. Steve, thank you very much for joining. Spencer, it's been an absolute pleasure.

**Steve Francis:** Thank you.

**Gerhard Lazu:** I look forward to next time. Thank you.
