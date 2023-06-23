**Kevin Ball:** Hello, JS Party people! Welcome to this week's JS Party, a party about JavaScript and the web. I'm Kball, I am your host this week, and I am joined by two of our favorites, not always regular panelists... Y'all I think are semi-regulars at this point. Amal Hussein, let's start with you.

**Amal Hussein:** Yeah, hi. Geez, you're calling me out... I was regular. I just decided to like be flaky for a few months... So I hope to be back on regularly again. But hello, hello, everyone.

**Kevin Ball:** That's what I'm aiming for here.

**Amal Hussein:** Yeah. He's just calling us out...

**Kevin Ball:** Lay it out as a challenge. Regular once again, starting this week, Amal Hussein, and... Chris b0neskull Hiller.

**Christopher Hiller:** Hi. My excuse is that I have depression.

**Amal Hussein:** That's, that's real...

**Kevin Ball:** The JS Party music isn't lifting you up?

**Christopher Hiller:** No, man... It's bad.

**Kevin Ball:** Alright. Well, let's see if this topic helps or hurts for your depression, Chris... We are talking today about dev processes. What are the things that we do, and the trade-offs that we make, to make our lives better as developers. And I thought maybe we could start with one that I've heard from a number of different folks, which is around PR etiquette. Best practices for PRs. Different places we could go, and y'all are coming from different backgrounds... But when I say that, a really good PR, in your mind, what does it look like? What are the attributes?

**Christopher Hiller:** Okay, so I like PRs, despite the depression. But the PRs - they should have a description. Number one - when I see a PR, and it doesn't have any description in that PR, that's usually from like some other maintainer. And I'm not gonna name names... But in case any of them are listening, please put a description in the pull request. So it needs a pull request...

Past that, I mean, we're talking about open source projects. That's my background, right? We're talking about volunteer labor. So there's not a whole hell of a lot you can ask for. You want tests, you want code coverage... I think table stakes is the build passes. If your project is large and mature enough, and you have enough contributors, we can talk about things like, "Okay, now we must have tests and code coverage, and we must have certain people reviewing it", and all those sorts of things. But in smaller projects, in under-resourced projects, there's only really so much you can expect. The ideal PR is very different from the usual PR, so...

**Amal Hussein:** Yeah, that's some great insight from a maintainer's perspective. For me, I have a lot to say on this topic; a lot to say about all the things we're going to talk about today, in general, actually. Code reviews are the most inefficient form of pair programming; I mean, if you think about it. And so what you're really trying to accomplish in a PR is not just get your changes across the wire, but communicate change effectively. And so for me, a good PR is like everything Chris just said, plus it's one set of changes, it's something that can be -- I really like to think about the rollback strategy, especially for when you're touching kind of hairy code... It's like "Can this be rolled back easily if I broke something?"

Something that's digestible, so the smaller, the better... I know sometimes it's really hard to avoid big PRs, but keeping them small means that your folks are reviewing it quick, you're getting that feedback that you need quickly... And some of the most productive teams that I've been a part of have SLAs within the team, where they're like "Yeah, we want to try to get a PR reviewed in four hours or less", and that's great, because you're not having to kind of switch contexts and then go back to something else a day later... And so PRs getting reviewed quickly means you as someone who's submitting the PR, what are you doing to kind of Usher that process along?

**Christopher Hiller:** One thing I want to call out is how many people should be reviewing the code? I'm curious what you think.

**Amal Hussein:** Yeah, I'd say a minimum of two, ideally, for like large-scale production codebases. I think it's best practice to have at least two reviewers. Ideally a minimum of two people who are part of the owners, that own that part of the code, that are familiar with it... It never hurts to have a ton of reviewers, but it can get really overwhelming to have 17 people reviewing one pull request... So I think that there should be some kind of an upper limit to that, but more is not more here.

**Kevin Ball:** I think there's a context here too though, right? Like, Chris, to your situation - if you're submitting a pull request in an open source project, some of those projects only have one person who might be available to review the code.

**Amal Hussein:** Right. But some of them might have 17 or greater, and for those projects you've got to have a cap on how many people can do it. And that means for some projects making some hard choices, and maybe changing a bit how power is distributed.

\[06:05\] But yes, definitely, I've run into both problems, where there aren't enough people to review, and there are way too many people reviewing the code, because the longer a PR stays open, maybe the more people review it, and that's not always good. The more people you have to please, the harder it is to land. So there are concerns, and anybody might raise a valid concern; I'm not discounting that. But I don't know, I feel like that is the hard decision you have to make. That's the hard choice.

**Kevin Ball:** Well, there's an interesting question around that, which is "Who merges the PR, and what is the decision point that a PR is ready to merge?"

**Christopher Hiller:** And of course, that varies by project too, right?

**Amal Hussein:** Wait, are people still doing manual merges? Because I mean, GitHub Auto-merge for the win; you get those minimum reviews and you want to get that automatically merged... I'm just kidding.

**Kevin Ball:** Well, so that is one approach. You basically set a threshold criteria where you say "If two people approve this, and it passes the build, it gets merged." There are types of changes where that may not be the right approach. So I'm thinking about your rollback criteria, Amal. And it's interesting to think about what types of changes are easy to rollback, versus hard. I think there are changes, in many situations, anything that's touching data, sort of data migrations, or things like that; unless you're extremely careful, which maybe at a large enterprise you can be able to do all the time... But in many situations, you'll end up where there's a data change that is hard to rollback. Not necessarily impossible, but it's going to be non-trivial. And those pull requests, I think, might need to be treated a little differently.

**Christopher Hiller:** Yeah, no, absolutely. You're right. I was being a little cheeky there, but you're absolutely right. I think, for me anyways, as a developer, one of the scariest things you would see sometimes is requests for changes. And it's something that I wish we applied more liberally. I've noticed that folks aren't always consistent sometimes. People will maybe conditionally approve something, or formally request changes... But yeah, I think in cases where you have to iterate, that auto merge can be a bit dangerous. So to your point, Kball... But yeah. I have some more thoughts on pull requests, but..

**Kevin Ball:** Well, one of the things you said there led me in another direction, which is you talked about different people have different approaches to how they give feedback, and how they review. Are there different types of feedback, or structures, or styles that you all have found to be more or less effective?

**Christopher Hiller:** I mean, if you're a jerk, that's not very effective... So what I do, not so much with contributors, because I take them for granted... You know, maintainers, I take them for granted. They're there, I know they're gonna keep maintaining; I don't have to be super-nice. So I'm going to -- if you're like a first-time contributor, or you're a new contributor, I'm gonna start with "Thank you." Before anything else, it's "Thank you for this." And then if it's something that I could see potentially getting merged, then I'll go ahead and actually review the code. It might just start with "We're probably not interested in this for reasons." And if we are interested in it, then I can look into the code.

\[09:54\] And what I do is I ask a lot of questions. It's not so much -- I mean, there are "This should change for this reason." Perhaps that's for consistency... But most of my questions are going to be around intent, just to make sure I really understand what's being added. And I feel like the questions are good. I think where things fall apart, especially with first-time contributors, is that you might not get an answer. And there's a lot of drive-by PRs, where people send the PR, and then they disappear. And even if they see it through, they might disappear. But as a reviewer, I certainly feel like asking questions is always good. And not being a jerk is always good. And actually being excessively polite is always good, if possible. But I guess I'm curious then about how do I respond to a code review? What is a good way to do that? Because -- I don't know, I guess I haven't thought too hard about, when I send a PR, what is effective for me? Any ideas?

**Amal Hussein:** I think reviewing your own PR is one. So you'd be surprised at how much you can catch, just like looking at your code in a different context than the one that you wrote it in. So just seeing it in that diff view, in a different context, it really does help. So be your own first reviewer.

**Christopher Hiller:** Yeah, yeah. I do that, too. And then you start commenting on your own code, and you're like "Okay..." And you delete the comment, and then you go comment the source code, and you update your PR.

**Amal Hussein:** Yeah, yeah. So there's that. And the other thing I would say is definitely make sure that you're linting and doing all the things before you're really marking something as ready. For me there's certain conversations that are just really not productive to have, and that's just like nits about linting, and styling, and all this stuff that should just be binary; let the machine deal with it. It's just like a waste of time to argue about. So set up your rules, agree on it as a team, and then just don't nit in PRs on stuff like that, because hopefully, it should just be part of your build system.

**Kevin Ball:** Yeah. A couple of reactions I have as well. So one thing I've seen that can be really useful is - you mentioned that when you're reviewing a PR, you do a lot of questions about intent. Some of the best PRs I've received, the person filing the PR actually puts a bunch of sort of PR notes about intent. Things that may or may not be in the code, though sometimes it makes sense for them to be documentation, but sometimes it doesn't... But they'll call out "This is intent. This is not."

Another thing that I've seen called out - sometimes you can completely separate structural refactoring changes from content changes, and that's probably better when you can do that... But occasionally, you can't separate those into split PRs. And so I've seen people call out where they'll say, "This is one pull request. This set of changes is almost all just structural refactoring, and this set is new logic." And just helping guide the reviewer's eyes to the key pieces there.

**Amal Hussein:** Absolutely.

**Christopher Hiller:** Okay, a thing that makes that difficult is GitHub. It's easy to look at the PR as a whole in GitHub; it is more difficult if you have -- it's hard to look at it by change set. And so yeah, I don't even know. You need the context too, and it's maybe even an unsolvable problem, because if you're looking at a change set and you see a formatting change in one, it might be necessary to see the actual other change set in the same file, or whatever, that's part of the... Anyway, it's just hard.

\[14:01\] And there are companies that build on top of GitHub's PR stuff to try to make the process better. I actually use a plugin; it's a company called Graphite, and they do fancy stuff with pull requests and reviews... And it's actually pretty useful. So yeah.

**Kevin Ball:** Yeah, I've used Reviewable for that purpose as well.

**Amal Hussein:** Yeah. And to your point about breaking up and adding your own comments to PRs to make it easier and more digestible, another thing I've seen work really well for complex PRs is actually setting up a synchronous review with the team, and kind of going over it together, on a call, and being able to talk through it. It's just much more efficient to get that feedback and kind of gauge what's landing well and what isn't for large change sets when you have it done synchronously. So don't be shy to schedule some time with your team.

And I can't believe we haven't mentioned this, but the last fun fact I have a PRs is that there's no such thing as a pull request in Git. The whole concept of pull requests is just like a patch that's created, a Git patch, and merge, and like GitHub creates the interface for what is a kind of "pull request."

**Kevin Ball:** You're requesting them to pull this change from your branch... But yeah, it is a higher-level concept on top of the core Git. One other thing I've seen some teams do that I think is useful is kind of codifying the levels of feedback. So I was trying to find an article and I couldn't find it, but I've seen somebody that was talking about Boulder, Pebble, Sand, or something, as different layers... Or I've seen red, yellow, green... Basically, having a level that is like "This must change for this pull request to be acceptable. Either this is broken, or this is fundamentally wrong in our architecture", or what have you. Having another layer that goes "This is a recommended change, or I recommend you figure this out. I feel pretty strongly about this, but I could be argued out of it", or something in that kind of middle level. And then a lowest level that I've also seen described is nits. "This is a minor nit. You could take it, you could leave it. It's not blocking." But making that clear in your feedback, because I've seen -- we are engineers. Some of us as engineers are very detail-oriented, and I have seen folks lay out massive amounts of review feedback on a pull request, with no context for which things are really important and which things are "This is a minor quirk that I like." And that's really hard to parse as the person submitting the requests. It's like "Okay, you've given me 30 things here. What should I focus on?" Especially for more junior engineers. And so I think some sort of -- even if you don't have a formalized practice in the project, some amount of laying out 'This is important/This is a nitpick."

**Christopher Hiller:** Yeah, I think that's great advice. I try to do that, too. And rarely will I end up actually like pressing the red button and being like "No, we can't merge this as is." Most everything is going to be like a suggestion variety. And yeah, I think that's really important, too. I wish there was a better interface for that. But yeah, good idea.

**Amal Hussein:** Yeah, my style is exactly what Kball just said, like non-blocking, semicolon, blah, blah, blah, blah, blah, you know... So it would be really great to see if there was a way to have a blocking comment versus a non-blocking comment right in GitHub; that would be really cool. So if you're listening, GitHub... Some great user feedback coming for you here.

**Christopher Hiller:** Yeah, I feel like the three states that a PR can be in on GitHub - it might be insufficient. It's either yes or no, or nothing, essentially. I guess you can abuse labels to do that, and people do, but...

**Kevin Ball:** \[18:02\] One of the things that we've sort of started to stray into here in some of our conversation is CI, and CI/CD, and kind of this whole area. So one piece of this is "What sets of things belong in a pull request review, versus being checked by your CI?" So what y'all called out stylistic things. Like, you should just let the machine do that, have that all be in a config that CI handles. Are there other things that y'all have seen sometimes handled in PRs, that instead should be handled in a CI system?

**Amal Hussein:** Yeah, like asking for missing unit tests... There should just be a threshold there for new code specifically, as well as just in general. So you can kind of automate -- you can't merge this without meeting that threshold, so there's no need to kind of really discuss that synchronously, or async. So that's one.

**Christopher Hiller:** Yeah. I mean, I think that's also kind of dependent on the project maturity. It may be a lot to ask of pull request senders to do some of these things. For example, maybe there's a functional test that needs to get written, and there's no good example of how to do that specific kind of thing in the codebase already... And so it can be difficult, because -- yeah, I've run into that situation a lot, where it's like "Okay, here's this new change. And I've got this unit test, but I haven't written any sort of like end-to-end type thing for it, because I don't know how, and I'm not sure I'm going to have the time to do it," or whatever. And then you just kind of deal with that as it comes. Maybe that means afterwards you need to create a harness for whatever, to help that person. I don't know. But I haven't seen a lot of projects actually enforce like a code coverage percentage in the open source world. But maybe that's just JavaScript.

**Amal Hussein:** Yeah, it depends on the type of project, I suppose. I mean, I guess another one would be really just kind of - a lot of them are stuff that developers have to kind of do manually, the dressing room type of things to get their pull requests ready... So having a bot or something that just posts and auto posts comments... And it's not quite CI, but I do think that's something in between that's like checking the quality of the pull requests, and just automating that... Like "You're missing a description", or "You're missing a screenshot", or "Oh, you changed this thing, so you need this thing. Does this thing need a feature flag?" Or whatever else.

**Christopher Hiller:** Right, so like a linter for your pull requests.

**Amal Hussein:** For your pull requests, which is different from -- yeah.

**Christopher Hiller:** I mean, we've certainly had things like hooks and GitHub Actions type checks for commit message format, because the stuff that I've worked on recently has all been pretty hardcore under the conventional commit format. And so having things to enforce that as well.

**Amal Hussein:** Yeah, we've got a whole thing where it's like "Does this thing have a JIRA ticket associated to it?" just for compliance reasons; you need to be able to track what this change was for, you know... So just even things like that are helpful, because humans are human, and we're gonna human...

**Kevin Ball:** Humans are human, and we're gonna human... I love that. Is there a point which is too much in your CI system?

**Amal Hussein:** \[21:31\] I mean, I don't know a team today that isn't struggling with really exceptionally long build times, and how to get around that. That's just a common problem for all kinds of companies. And it's not just like we're compiling TypeScript into JavaScript; it's all of the things. It's the linting, it's all the different unit tests, integration tests, end-to-end tests... It's testing for different screen sizes... You name it; it's this expansive kind of pipeline, and it's just this never-ending compute problem... And so for a lot of folks who may be working in a monorepo, you may especially be feeling that pain, because... Yeah, it's very real. And there's lots of clever things that lots of clever people are working on to optimize, and use computed caches, and you name it, but it's still not perfect. There's nothing worse than having to wait like an hour to get feedback on your build, so...

**Christopher Hiller:** And then in my world, most of the time it's just not enough. There's never enough tests, there's never enough -- the build matrix is too small, stuff like that. Another thing that we're running into is maybe we don't have as many tests as we should, but the tests that we do have push up against the resources of the CI agent, or the build agent, or whatever. And so that becomes flaky, and then we need to get a bigger one, and then, of course, now we need to pay for that bigger one... And of course, some people are probably paying a lot for something in CI, and maybe a lot more than they should; I'm not really familiar with that myself, but maybe Amal can speak to it...

**Amal Hussein:** Even looking at my credit card bills, it's just like "CircleCI! Nx Cloud!" I'm just kidding. Yeah, that's very real... And I would say that in terms of kind of optimizations, there's lots of clever things that folks have done to kind of help this. Sometimes you can have a dev box in the cloud, where you're developing locally, but all of your compute's happening in the cloud, and just kind of you're distributing all your stuff and you're getting faster feedback cycles as a result. Another is leveraging ASTs to really kind of optimize the hell out of all of your build functions, everything from linting, to testing to just knowing what needs to run... So how do we kind of shorten that cycle? You don't need to rebuild every part of your app... But yeah, I mean, this is not a problem that I think we've solved well... But I don't know, what are your thoughts, Kball?

**Kevin Ball:** No, I mean, I think it's definitely a challenge. We're on this curve still of trying to substitute more and more machine resources for human resources. But the machines aren't getting faster, as fast as we want to push more stuff in them. And I see that playing out all over the place. Another question related to this is almost every team I'm aware of at this point is doing CI, continuous integration, where there's some amount of testing, and things happening when you do a pull request, or something like that. Far fewer are doing continuous deployment. Is that something that y'all have done work with, or seen work well anywhere?

**Christopher Hiller:** Okay, well, in my land, it is -- in my land... In the projects that I work on, that looks like basically automated releases, which is just like part of the CI process. There are different strategies there. I guess I don't have enough -- I know that automatic releases can be a little dangerous, very dangerous, especially if you're not confident in your code coverage, and that sort of thing. Once your project has been battle-tested enough, and once you feel confident that it is correct, I think that automatic releases is probably a much safer bet. But if it's not, if there are gaps, I think that's not necessarily the greatest idea. But other than that, it's just these automated releases. There's several ways to go about it, but that's all I know. I don't deploy stuff, so...

**Amal Hussein:** \[26:00\] You just release it to npm...

**Christopher Hiller:** Mm-hm...

**Amal Hussein:** Yeah. I've kind of worked in places where there's both kind of an automated deployment process, as well as like a manual one, where there's a big event... But I think really the healthiest models for me are just where you're deploying on every -- every pull request kind of goes through all the things gets deployed. But you're kind of decoupling releases and deployments, so that you have a feature that's behind a flag, and you're shipping changes towards that feature, it's going into production with every single with every single merge... You're kind of de-risking the whole project as you go along. No big surprises towards the end; the code's in production already. Perhaps you're even testing it there for a limited set of users... And once you're ready, all you need to do is turn on a feature flag, which would enable more or less your feature release. And that doesn't have to include code deployment.

And so I think just decoupling deployment and feature releases is one... And the benefit of that is also that as you're deploying frequently, with every merge, you're also able to do the same thing for bugs. So if you find an issue in production, it's not this big hoopla to get it fixed. It's like how quick does your CI/CD pipeline run, and that's plus one minutes, or whatever; you know, how long it's going to take to get that fixed into production. And so having continuous deployment is definitely something teams should try to strive for, if you don't already have that. And I think sometimes a hiccup towards getting to that is "Hey, we're not always ready to release this thing to a customer", and so that's where feature flags can really come in to help manage that risk for you.

**Christopher Hiller:** Kball, is it appropriate or not to get into the weeds on this?

**Kevin Ball:** No, I actually was going to try to get into the weeds on feature branches and feature flags and things around that, because I think it used to be common to have like a long-lived feature branch, and then you'd have challenges with merging, and all these different things... But I know there are places that still follow that approach. And then feature flags, as you highlight, Amal, can be a much better option, in some ways... Though I think there are also challenges, especially once again when you start dealing with things like data migrations and data changes... But yeah, Chris, go, because I think you have some weeds you want to dig into.

**Christopher Hiller:** Yeah, I mean, I am not in the weeds myself, but I'm interested in the weeds... So yeah, feature flags is like a thing that is not like in my wheelhouse, because... I don't know; maybe that's a thing that should be, because maybe it makes sense for some of these libraries and apps that I release. Maybe it does, maybe it doesn't. I don't know. What goes into a feature flag? What should I hide behind a feature flag? How do I flip the flag? Tell me about feature flags.

**Amal Hussein:** Yeah, sure. So I guess in its simplest form it's really just kind of a glorified boolean check. So it's like "If the thing, then do this. If not, do that." And so you're just kind of -- you're looking at an application property, and ideally, something that's externally managed, so that you can turn these flags on and off without code deployments... But at its simplest form it's really just a boolean check that facilitates a logic branch. And typically, you would use a feature flag to kind of handle that work in progress, to hide work in progress, or to do some beta testing for a new feature, or to -- yeah, because you're just not ready to release this into the world fully. Or maybe it's released and you still want to have control over it, or you want to be able to turn it off. Like, you want to have like an escape. You want a kill switch, basically. All of those things are enabled by using a feature flag.

\[30:00\] And a feature flag doesn't have to always be used for a feature, it can be used for a bug fix, it can be used for anything. Anything that you want to have a kill switch, or anything that you want to experiment with in the context of when a user is running it. And I would say no, actually, they're not quite feature flags, but the experiments... You know, "Run Node with this experimental flag." So you do have those types of things in even runtimes like Node.

**Kevin Ball:** Yeah, I was gonna say, in the web app world typically it's some sort of database-backed service, and it might let you roll -- depending on are you using a third-party service, are you rolling your own, it might be as simple as a boolean across the application, it might be some sort of like gradual rollout... You could do feature flags that vary based on user properties, or other things like that.

I think in the node or CLI kind of world, it's probably like environment variables, or things like that, where you're saying, "Okay, this is the default, but you can override it in this way, so we can experiment in these cases", and then at some point maybe the default flips, but you still have the ability to disable it by passing this environment variable, or something like that.

**Christopher Hiller:** To me, that just sounds -- it's just the option. It's just like \[unintelligible 00:31:13.03\] or something like that. And so is feature flag just like a marketing term then? Because sure, we've always had these things, right?

**Kevin Ball:** So one difference in the web world is it's often not controlled by the user. It's not a user option, in some way. it is "This is something that we can, as the controlling engineers, toggle based on conditions that we care about", which might be "Are you a beta user?", which might be "Are you an admin?", which might be "Are we past some date?", which might be "Have we flipped the switch in the database?"

**Amal Hussein:** And there's usually like an SDK that you import into your project. I mean, some teams roll their own. If you have the time and energy to have your own internal tooling that you use to manage feature flags, you can certainly do it. I wouldn't recommend it, but you can. But there's services like LaunchDarkly, Split.io, there's a number of different services that you can use, that give you an interface to manage that in a dashboard as well.

**Christopher Hiller:** So in the stuff I work on there would be no need for an SDK. What do you need that for?

**Amal Hussein:** In your case, it would be kind of a flag that you would pass in -- you'd potentially pass in that flag when you're running the library, or something like that. For a Node package I don't think it would make sense to do this...

**Kevin Ball:** Unless you want some way to trigger it remotely.

**Amal Hussein:** \[laughs\]

**Kevin Ball:** Which actually I could imagine if you're interfacing with a backend system, or something like that...

**Christopher Hiller:** Something like LaunchDarkly is gonna give you like a web UI to manage your flags, and add new ones, and toggle them on and off from a centralized place, or something like that. Right?

**Kevin Ball:** And like manage experiments, and things like that. So that is another thing that often gets in some ways rolled up together with feature flags, is like doing this as an A/B test. Can we roll this out to a set of people based on some sort of random distribution and gather data, and then make decisions? And sometimes even automatically ramp up and down who gets to use this based on some sort of other data in the system.

**Amal Hussein:** Yeah. For me, to put it colloquially, when feature flags are very in clutch, they come in clutch when you're working at scale, and you want to do a slow roll-up for a feature; you're like "I don't want to turn on this whole new credit card processing workflow, for example, for every one all at once. I want to have it be on for 5% of traffic, and then I'm going to monitor my error logging, and check to see if nothing is going crazy." And then maybe an hour or two hours or a day later you bump it up to 20%, and so forth. So it lets you do a slow roll-up as well.

\[34:04\] Kball was talking about monitoring - usually, the thing that you're really looking at is error logs, and you're looking at your observability stack to see "Hey, is everything still okay? Is this thing working as I expect it to?"

**Kevin Ball:** Or if you're an eCommerce, you're looking at purchases, right? Like, "Just turning this on to dramatically reduced the amount of money people are sending our way."

**Amal Hussein:** Right. Yeah, exactly. So both from a customer behavior perspective, but also for changes that can have a heavy impact on your infrastructure, you're just making sure that like everything is okay.

**Kevin Ball:** So I want to loop back to something that got mentioned earlier when we were talking about CI/CD a little bit, and about PRs, which is tickets. Amal, you talked about "Oh, we what this linked to a JIRA ticket", or what have you... Open source, where a lot of times it's just issues, people filing things... But some of the things I wanted to talk about here is best practices for what should go into a ticket, and how we should interact with it. So first off, how much detail goes into a ticket?

**Amal Hussein:** I don't think there can be enough detail... \[laughs\] Because that's usually most of the time people have an opposite problem. I mean, this is so subjective. It's like, how big is your team? How mature is your team? How long have y'all been working on this product? How long have you all been working on it together? There's so many factors that go into where this dot lands of detail... Because I've seen tickets that are just like a title, and someone picks it up because they know exactly what needs to be done... Sometimes there's cases where there's a lot more bureaucracy around tickets, and details. Company culture also plays a lot into it...

But I think for me, at minimum, as an engineering lead, I like to think about lowest common denominator. And for me, it's "Can anybody on the team pick this up?" New or seasoned, senior or junior; does this have enough detail for that new person to know what to do with it? I think that's a good North Star.

**Christopher Hiller:** That's interesting. I mean, sometimes it seems like you might as well just do it if you have to add that much description, you know what I mean?

**Amal Hussein:** Like I said, it's subjective, yeah.

**Kevin Ball:** I think one of the keys here is how do you know it's done? And if you can label "This is what done looks like." One way I've seen that is "Acceptance Criteria. These things are happening." Or if the ticket is a bug, it's like, this thing broke - it shouldn't be broken. Right? And there, you do want enough detail to reproduce the bug, for sure. And that's a place I think, Chris, where maybe this is helpful, if you want all the detail necessary to get to a \[unintelligible 00:36:52.23\] Even if the person who's reporting this ticket or issue has no idea how any of the pieces underneath that are going to work. Because that reproduction information - and I know this is maybe an unrealistic ask for most open source users, but that's what gets you to the point where you can just pick this up and run with it.

**Christopher Hiller:** Right, yeah. There's Stack Overflow's Minimal Viable Example. I used to copy and paste that URL all the time. It describes how to show a reproducible example, with some code, or something. And that's the gold standard, that is the North Star, as you would say. That's what we want from any bug report, is "Just show me the quickest way, and easiest, and most minimal way to reproduce this, so we can fix it." But that mostly doesn't shake down like that. It runs the gamut from "It doesn't work" to -- in the best case, it's... You know, somebody's just like "Oh, I can't show you the code, because it's proprietary", or "Here's this huge repo that you can check out." That's about the best you can hope for.

**Kevin Ball:** \[38:07\] Gotta love those bug reports that are just "It doesn't work."

**Christopher Hiller:** Yeah, it doesn't work...

**Kevin Ball:** Which "it"? What were you trying to do?

**Amal Hussein:** Fix it. Fix it and fix me while you're at it. Actually, my kitchen sink's kind of leaky, if you wanna come over... Yeah, bug reports are the toughest. And I think something that's understated with bug reports is just what version of the software were you running when you observed this issue, and what browser were you running? There's so many things that you also want to know in order to kind of pinpoint if this is even still a valid bug. Because sometimes maybe that last Chrome update fixed this bug... Maybe this wasn't even my bug to begin with...

**Christopher Hiller:** Yeah, we started using the forms, GitHub's forms for bugs... Because they had the issue templates first, which is cool, but then they added forms, and it's like "Wow, we can just have people fill in all the information here." And that's helpful; that is. But I skip them. I never use them. \[laughs\]

**Kevin Ball:** What about when you're working on an issue? And this may be more relevant in Amal's world than yours, Chris, but say there's a customer reported issue that you're working on, you pick it up... What types of updates make sense to post back? What goes back to that ticket in between "Alright, I'm working on this", where you click the "Assign to me" and it's shipped?

**Amal Hussein:** Like updates along the way... Yeah, I would say -- so typically, for teams I've worked on, we have kind of like a definition of ready, and a definition of done. And so a definition of ready is like, you know, "When is this bug ticket, and/or feature ticket, when is this ready to be worked on?" For bugs, it's when we have enough detail to be able to reproduce it etc. For feature tickets, it's when we have acceptance criteria, when we have maybe designs... Maybe there's a number of things that go along the way. And typically, if you're fixing a bug, it's good etiquette once the bug is fixed to just like tag the person who filed the bug to say "Oh, bug's fixed now, and it's shipped. It's going to be in the next release, or it's already out in production", or whatever. Or it's merged into main... That's good. You want to have them be able to like retest it and revalidate it, and make sure that it's like actually fixed. So that's one.

And in terms of when you're working on something that's like a product feature, or just an enhancement, typically you have a product owner, a product manager, or someone on your team that's really driving that direction and strategy, that is going to kind of give you that kind of product acceptance, so to say. Maybe it's your designer, maybe it's your product manager, maybe it's your tech lead, whoever that is; someone else is validating the thing, to say "Yeah, this works." And so typically, you'd review that at the end of your sprints, or whatever iteration cycle you use to say like "Ta-da! I did the thing that I said I was gonna do, and it's done."

**Kevin Ball:** Interesting. I'm gonna put a couple more things in there that I've seen or used at different times. So one is for customer reported issues, oftentimes whoever's managing customer support needs to be able to respond back to the customer, and let them know. And so I think the Ready, like "This is ready, we're starting on it", is good, communicating some sort of timeline. But especially for higher-priority or more urgent things, I have found that having some sort of cycle of updates, of just like "I am still working on this. We have not figured it out" or "It is not done yet, but there is progress being made." And your team can agree on what that cadence is, but oftentimes for a very urgent issue it might be once a day. Or for something that's blocking large numbers of your users using it, once an hour. Almost like incident-level updates, but expanding that out into larger timeframes for things that are less intense or incredible... But just like "Hey, this is still in progress. I'm still working on it. It still has attention."

\[42:17\] Because I've found a lot of times customer support - they get anxious. They're getting bombarded with questions, and it's a black box. They're like "I know that they said they're going to work on this, but I haven't heard anything for three days." I don't know what to say to someone. And so providing just - even if it's that brief update, like "End of the day, we're on target. Planning to have it done by end of week", whatever. "End of the day, still working on this. It's coming" can be really helpful.

**Amal Hussein:** Yeah. I mean, in my world, I'm back in enterprise land, and typically we have different severities for bugs. Sev 1, 2, 3, 4, whatever. And so yeah, if you're working on something that requires that level of communication, which, from what you're describing, I would consider to be like a sev 1 or 2 bug - there's definitely, especially for sev 1, there's kind of a war room opened up, and people are pinging you for updates. So that happens whether you like it or not.

**Kevin Ball:** Well, it's nice to have a central location.

**Amal Hussein:** For sure.

**Kevin Ball:** So you're not having to be pinged by the five people who care about this. You're \[unintelligible 00:43:24.20\]

**Amal Hussein:** Yeah, yeah. That's good hygiene period, I think, and I stress that for my team all the time. It's like, any updates that are really noteworthy, whether they're for incidents or not - even for feature tickets - you should put a note, be remote-first, truly, right? Put it in the ticket; put it in an issue ticket. Leave a log of your updates.

And I think on that same note, a great practice is to start draft PRs for work in progress. It's a good way to just communicate to the team what direction you're taking, and what approach you're taking, and you let people kind of give you early feedback, you let people follow along... That's another way to kind of share updates, to Kball's point. Draft PRs. They're great.

**Kevin Ball:** Totally. And those high-level -- to Chris's point earlier, different things are at different levels of abstraction. And especially with more senior folks, it may not be spelled out in lots of detail what are the pieces that's going to make this done. It may be a very high-level, like "We need this feature", or "We need this thing. Here's how we'll know it's done. Here's some acceptance criteria." But that thing may have like 5 or 10, or a bunch of different things inside of it, it may have a bunch of unknowns... And a practice that I've used and that I definitely recommend to folks is when I'm figuring those things out, I will just keep a trail in the ticket as comments, of like "Okay, I'm looking at this section. It looks like it's going to need this, this and this. I'm looking at this - here's the thing that I'm struggling with, here's what I know...", and just kind of like keep a log of what I'm figuring out as I go in that ticket. And it's useful for a couple of reasons. The main audience for those updates is me. That's helping me keep track -- if this thing is large enough that I can't keep it all in my head at once, or I'm like having to build up an understanding, that's helping me keep track of what I'm figuring out over time.

The secondary audience is, as you highlight with the draft PRs, it gives people a chance to jump in. "No, that doesn't look quite right. I don't think that's the right way to think about it." Or "Yeah, that totally seems correct." Or " This seems like something we did in this other place. Go check that out." Those types of things.

The third reason is it gives the opportunity for other people to pick it up, if for some reason something else comes in and takes me off of this. Like, "I'm working on this feature, I'm going on it... Oh my gosh, there's an incident, I'm off on this. Then I got pulled in this other direction. But we still need that to happen, but I'm the best person to be working on this incident... So can someone else pick it up?" Now there's a whole log of the learning and thinking that's already gone into that, that somebody else can take and start running with.

**Amal Hussein:** \[46:06\] Totes. Totes McGoats. Kball, I feel like I should like "Can I get an Amen?" We need like a little choir for you today. But yes.

**Kevin Ball:** Any other things about tickets before we move on?

**Amal Hussein:** I mean, is it a ticket or is it an issue? I mean, can we just make up our minds about this?

**Kevin Ball:** I feel like ticket is more generic-sounding, in some ways. Issue sounds like there's something wrong. But I might just be asking for something.

**Amal Hussein:** You know, it's really funny that you say that, Kball, because believe it or not, this was like many, many years ago, maybe almost like 10 years ago now, someone was trying to pick out an open source library. And they were like "This tool, versus that tool", and this was earlier days of GitHub. And basically, this person was like "I don't know, this library seems great, but I'm looking at all the open issues and I'm thinking maybe this doesn't have the best quality." And I remember thinking "Hm... Yeah, I don't know. I guess maybe..." And then coming back to that conversation a few years later, thinking "Oh, wait a second, actually... Number of issues is not like a metric for looking at a project's quality." Actually, a high number of issues I think is a good thing. People care, there's activity, there's stuff going on... I think a metric that would be great to see is how many of these issues have been closed and completed.

**Kevin Ball:** Lifespan of an issue?

**Amal Hussein:** Because they're just piling up. But yeah, issue is -- especially for language, people coming in from different languages... That's very, very loaded. So yeah, I couldn't agree with you more. So I don't know, to be decided, I guess.

**Kevin Ball:** Chris, you look like you have a take.

**Christopher Hiller:** Oh, I was thinking about the issue count thing... And then you can see all these things and make all these assumptions, but then you look at the way JDD used to run Lodash, and it was issues zero. And it was one of the most widely used libraries. And so you can't look at the issue count and say it was popular, because it was really popular, but he didn't want issues open. So he closed them all. Right?

**Kevin Ball:** \[laughs\] Not that he fixed them all. He just close them all.

**Christopher Hiller:** No, I mean, he probably fixed them all, too. But it's not even a thing you can -- it doesn't mean anything. Issue count doesn't mean anything, I think is what I'm getting at.

**Kevin Ball:** Well, I feel like there's a lot of other topics we could talk about for dev process, but we've been going for an hour, and I think we've covered a lot of ground... So it might be about time to wrap. Any closing thoughts y'all want to leave people with?

**Amal Hussein:** I guess for me, software is a social sport. We think about software as this thing that is an isolated experience, and it's very far from that. And so whatever we can do to kind of optimize our connection points with others, whether it's communicating more effectively in our pull request comments, or being more descriptive in the way we write code, optimizing for the human, not the machine - all those things, they really go a long way. And so I think anything we can do to change our thinking so that we're thinking about software as a social sport I think goes towards improving all the things that we were talking about today.

**Christopher Hiller:** Yeah, I think as enterprises and businesses adopt more and more open source, and then start hand-wringing about the state of open source security, and all sorts of other things around the ecosystem, the way to ensure that these open source projects adopt the best practices and norms that a business or enterprise would be used to is to have more of your employees work on those open source projects and contribute to them. Because that's the only way it's going to happen. You can't squeeze water from the stone, or what have you. The people that maintain these projects, it might look pretty hinky from your point of view, because there aren't all these guarantees, and there isn't a bunch of checks and assurances that you hope there would be, because there aren't enough people to put them there, and there aren't enough people to maintain them.

So I would love to see some of these other best practices that come from industry applied to open source projects, but the only way to do that is we need more contributors. It won't happen externally, it won't happen through a grant. It won't happen through awareness; it will only happen through more contributors and more maintainers and more investment in the open source ecosystem by businesses.

**Kevin Ball:** I think that is a great place to wrap us. This is JS Party, I am Kball, and thank you, Amal, thank you, Chris, b0neskull... I never know which to call you, because b0neskull is so good, but it doesn't roll off the tongue. But thank you, and we'll catch you all next week.

**Outro:** \[51:31\]

**Amal Hussein:** But PRs - you know, it's like the most inefficient form of code re-- sorry, I'm gonna start over. PRs are the most inefficient form of -- ahh, I'll start over. PR reviewing, or code -- I'm gonna start over. Code reviews... Code reviews... Oh, my God. You guys are horrible, you're making me laugh. Alright, so code reviews are --

**Christopher Hiller:** PRs? Code reviews?

**Amal Hussein:** \[laughs\]

**Christopher Hiller:** Sorry, I'll just shut up here. I'm gonna turn myself off.

**Kevin Ball:** I think we have some recordings for this... \[Wut? Wut\]

**Christopher Hiller:** Thank you.
