**Adam Stacoviak:** We're back again, man, and it's been a while...

**Mike McQuaid:** Yeah, it's been a few years, right? Time flies.

**Adam Stacoviak:** You got Homebrew 2.0 out, you've got some new governance stuff happening... We actually almost caught up with you I think July of last year around a security thing. There's lots to cover, but where do you think we should begin - should we begin with a security thing, or should we begin with the latest updates to Homebrew?

**Mike McQuaid:** Yeah, let's start on the downer and then finish with the upper...

**Adam Stacoviak:** Gotcha. Let's go there then. We actually wanted to kind of news-hack it, but it just didn't work out to get both you and the security researcher on the show... But you're here instead, so tell us what happened.

**Mike McQuaid:** Basically, we got a security disclosure through our HackerOne; it's actually been a really nice setup since we kind of moved to that. Previously we had just "Oh, well create an issue, or send us an email, or whatever", and people suggested that we get set up on HackerOne; that it's a responsible disclosure platform thing, and it's free for open source... And that's worked pretty well for us.

Basically, late July last year a researcher identified that Jenkins - which is what we've used for Homebrew's CI and building our binary packages - had been leaking a token, unfortunately. That token actually gave him push access to some repos, and so that was obviously relatively terrifying. Obviously, the bonuses of good disclosure is that within a few hours we were able to revoke the creds, we were able to replace them and sanitize Jenkins, so this shouldn't happen in the future... And also basically check to see with the old credentials what was possible and what wasn't. Thankfully, it actually wasn't as bad as initially we feared, because although it has to have write access, that particular credential didn't have actual push access to the given repos, and we were also able to verify, with GitHub Support's help and some auditing ourselves, that it hadn't been used by anyone during the period in which the scopes were elevated and in which it had write access.

So basically, one of those ones where scary at times, but thankfully all resolved... So we wrote it all up on our blog, tried to let people know what happened, what the implications were, and what we were gonna do moving forward. We tried to move on since then, and haven't had any other big slip-ups similarly since then, which has been good.

**Adam Stacoviak:** The fellow's name was Eric Holmes, right?

**Mike McQuaid:** That's the one, yeah.

**Adam Stacoviak:** That's the one. We linked this up around the time of happening to Changelog News, and the last question I think is interesting, and I'm curious what you think about this - he says "If I can gain access to commit in 30 minutes, what could a nation state with dedicated resources achieve against a team of 17 volunteers?"

**Mike McQuaid:** \[04:04\] Yeah. I mean, it's a great question, to be honest, and I don't mean to scare people with this stuff, but... I mean, I'm very much of the belief that unless you are a very high-level security professional who has deep knowledge in this stuff, if you're going against a nation state, it's more or less, as they say "Game over, man."

That side of things is scary, but I think the thing with Homebrew at least is that it has been designed such that - and we kind of said this even at the time when we were debating as maintainers - with stuff like this there are vulnerabilities which can be introduced silently, and then you'd never really know, the system would never really catch them, and then there's vulnerabilities that you would notice, and because we have everything built on top of Git and because our CDN is immutable after 30 days, and because we have a two-level hashing structure even without binary packages, where we maintain the hashes for those packages, and the packages are maintained elsewhere, on separate infrastructure, that it means that the chances of someone like a nation state being able to comprise Homebrew... basically, if you have one of the relatively big super-powers trying to do something like that, the chance that they could compromise Homebrew I feel would be relatively high if they put their mind to it, but the chance that they could do so without any maintainers or the community noticing - that's something I'm not convinced about. I feel like we would notice and we would be able to spot that that happened, and disclose that information, and stuff like that.

I guess the other flip side of the open source community about stuff like this is because we don't have a relationship as volunteers with the government of countries that may want to do things like this, we would not have any qualms in posting it on our blog and posting fingers at directly whom we believe has done something, and when they did it and why we think they did it, and all that type of thing.

I guess companies sometimes have a little bit more conflict there, because obviously there's commercial interest involved, and so on.

**Jerod Santo:** Right. It's an interesting thought experiment, and you just kind of wonder, with open source software it's the gift within the curse, right? On the gift side - well, there's a lot more eyes on it, the code is there, we use modern SEMs, and so like you said, any sort of things going into the software, coming out, they're all in version control, they're all publicly there, there's 17 maintainers, and there's your gift... But the curse is that it's all open source, so as a bad actor there's a whole lot less poking at a black box that you have to do, because you aren't dealing with the final product, you're dealing with the source code, depending on what the project is.

So it's just one of these things where -- yeah, I mean, he got it done in 30 minutes... That was really the thing that I think made this particular incident just more interesting than other ones - it's because it was like "Wow, he set out to do it, and 30 minutes later he had it", and that's not much effort, right?

**Mike McQuaid:** Yeah. And I think the interesting thing from our perspective is that -- others may well draw different conclusions, but our perspective would probably be that it was an example of our weakness being exploited, which is what, I guess like other open source projects, most of us would rather be writing code than doing system administration... So as a result, we have a Jenkins instance, and -- I mean, shout-out to anyone working on Jenkins here; it's great software, that we've used for a very long time, but compared to what we're increasingly used to with, say, Travis CI, and Azure pipelines, which is what we use now, and a lot of these cloud tools, where effectively keeping everything up to date and keeping the configuration sane is not something you need to worry about yourself... Whereas any of these open source projects where you're installing the software yourself, you're maintaining it on that system. Getting the balance right between applying all the security updates in Jenkins, and then all the plugins, which then change behavior between versions...

\[08:01\] This was one of these annoying cases where it was an intersection between plugins, where one plugin which had previously filtered out the tokens was updated, and then that responsibility was delegated to another plugin, which had been configured to do it correctly, and all this type of thing... And it's kind of tricky, because it slips through the cracks, and our longer-term solution that we're working towards now is basically just get rid of any infrastructure we have to maintain ourselves.

In an ideal world, we would all be on Travis and EC2 and Azure pipelines, and that would be the end of the day... But unfortunately, again, the complexity of our project is that we have to build binary packages on macOS, and there is not a freely available macOS hosting platform for building stuff at the scale that we need, yet. We're getting optimistic that there will be in the future; we've had some really good conversations with Microsoft about Azure pipelines, but right now as of today we still need to maintain our own infrastructure, which in this case the configuration of that infrastructure is the weak point.

So that's my number one goal on my list of stuff to do this year, is to get us entirely onto other people's infrastructure for this stuff. But again, I guess it's one of those ones where I will do it by the end of the year, I'm fairly confident, but I can't really be bothered. It's one of those tricky ones in Homebrew where if I don't do it, chances are pretty low that anyone else is gonna step up to do this work.

**Jerod Santo:** In a more general sense, taking Homebrew specifically off the table and just thinking about open source security, the trouble is - and we say it a lot on the show, and a lot of people say that it's true... From the security standpoint, you have to bet 1,000, pretty much. Let me say it this way - you only have to mess up one thing in order to have a threat vector, and then that thing has to just be found. It's easier to find one hole in an armor than it is to make an armor that's completely indestructible and has no holes.

**Mike McQuaid:** Exactly.

**Jerod Santo:** And for open source, like you said, we'd rather be writing code than doing infrastructure. It also can be not your area of expertise, and maybe you're good at this thing, which made Homebrew successful, or maybe you're not so good at that thing; maybe somebody else has more experience... But even with the experienced people, mistakes are made. For example, we've been cutting over some of our infrastructure here at Changelog.com, and all of our source code is open source, and we are on Concourse CI, and we're switching over to Circle CI - I won't tell all the details of that experience, but I'll just tell you that we've rotated all of our keys lately, because mistakes are made, and it's just kind of the unfortunate state of the world.

But the question becomes, on the large, how do we engage in a battle as a community against bad actors, whether it's nation states, or security researchers? What do we do that's sustainable? I know we've been working on lots of tooling, building an auditing into our package managers, for instance, that kind of thing, but... Did you put any thought into this, beyond Homebrew's yard?

**Mike McQuaid:** Yeah, I think so. I think there's been a few things through Homebrew that I've learned, that I think are more widely applicable. I guess the first one is back to the security disclosure on our blog, and on HackerOne, and kind of working with the researchers to have them publish these results. I mean, of course, one of the first things you're trying to learn when you're getting more senior as an engineer is, "You are not your code", and, "If your code has problems, that doesn't mean your worth as an individual goes down", but the first thing when you've got a vulnerability like this is you want it to not be true, and despite everything that you know and believe about responsible disclosure, you just want to hide the problem and have it go away.

**Jerod Santo:** Yeah, exactly. It's like an ego thing.

**Mike McQuaid:** And again, I don't think there's anything wrong with people admitting that that's -- it's a pretty natural reaction for you to have.

**Adam Stacoviak:** Yeah, it's shameful. You don't want that to be the case.

**Jerod Santo:** Right.

**Mike McQuaid:** \[11:56\] Yeah, exactly. But again, that's one of the big things I think the open source community in general is good at - stepping up and being responsible and disclosing this stuff... Because in this case, the level of this vulnerability here - I'm sure that happened to 100 companies around the world this year, almost an identical problem. Are they gonna write on their company blog that they disclose this? Well, some companies will, and hat tip to them, but most won't, and that's a problem.

I guess the other thing that somewhat ties to what you were saying earlier is that you need to just accept with some of this stuff that you're not gonna have the time and the resources for the open source projects that you would like to. Again, if Homebrew was a commercial company, I wouldn't hire me to do half the stuff that I'm doing, because I'm not qualified, and I know there's better people to do that. And even on the coding end, if me at work was to review my code quality that I have on Homebrew, then I would probably leaving lots of requested changes all over the place, because at the end of the day I don't have the time and the resources to do things to as high a STDIN open source always as I do when we're getting issues that are affecting millions of people, potentially, the onus is on fixing it right now. And when you don't have lots of very smart co-workers around you who can help bounce ideas off, and it's just down to you, then it's like, well, you're not gonna do it as well.

And I guess the final thing I thought, which again, was a side-effect in this case, is sometimes you can avoid some security issues by just not having all your eggs in one basket. For example, with GitHub we have our binary packages hosted on Bintray, and we also download source packages from the original sources, whatever the hosting company is for the original software... And it would have been and it was tempting in the earlier days to say "Right, let's just double down on GitHub, use all of their hosting options", and everything like that. And if we'd done that in this case, then that's when you lose one token and all of a sudden they have the keys to everything in your castle... Whereas in this case, even if you got into Jenkins, you wouldn't have access to published binary packages, you wouldn't have access to push to various repos.

**Jerod Santo:** Right, right.

**Mike McQuaid:** Things are separated between individuals, and that's actually even between individuals within the project; you would have to compromise a handful of specific maintainers to be able to get access to everything, because most maintainers are not granted access that they don't need.

I guess that would be a security thing that we've done for a while which I guess I would encourage other open source projects to do. It's tough, but when someone doesn't need -- if you've got someone on your project who maybe was a big figurehead in the early days and they haven't worked on the project for several years, they should not have access to push to your repositories, in my opinion. It really stings, again, both sides, to go and have to have that conversation about like, "Maybe you don't need the access here", but again, I feel that that's the kind of responsibility side of things, where if you're not willing to revoke people's tokens, then you're increasing the number of laptops that need to be -- increasing or decreasing, one or the other; basically, you have a bunch of laptops in the wild, and if someone steals that and it's not encrypted, then you are giving people access to push those repos.

And again, it depends on your release model, and your verification model and things like that, how big a deal that would be, but certainly for some projects that would be a big deal.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, the good thing about this security incident though is that it was a best-case scenario. It was a security researcher...

**Jerod Santo:** A white hat hacker, yeah. Exactly.

**Adam Stacoviak:** ...and even though it was shameful, you were able to disclose it quite well because in the end no packages were compromised and no action was actually required by the incident. So it was a researcher, and not a bad actor.

**Mike McQuaid:** Yeah, exactly.

**Adam Stacoviak:** That's at least one "Whew!", wiped their brow, because it could have been bad.

**Jerod Santo:** Yeah.

**Mike McQuaid:** \[15:57\] I think that's the nice thing with the open source community in general, as well - if you go out of your way to do things properly on the security side, then even the kind of grey hats in the middle are not gonna get a lot of kudos from going and really making idiots of an open source project who are trying their best to do the right thing with this stuff..

**Jerod Santo:** Right.

**Mike McQuaid:** This is a case where you get the ego involved and all of a sudden if we try and make out to the security researcher that he made a mistake, and we change things from underneath him, and he writes a blog post, and he gets into he said/she said type thing on Twitter about calling each other names, then all of a sudden that's when you can see, potentially, in the future, security researchers being like "Well, you know, these folks at Homebrew think they're so great... We're gonna take them down a peg or two."

So I think there's a certain amount of humility that needs to be involved there when you're dealing with people who know a lot more about a subject area, in this case security, than you do. And being grateful that those people are willing to go the right way and help you out there, rather than try and make fools of you.

**Adam Stacoviak:** Did you end up having a personal conversation with this person, or did you end up black-on-white email, texting...? What was the cross over there?

**Mike McQuaid:** We just chatted with him through HackerOne, through our security disclosure tool, and that's the main way we had the conversation there. I think it maybe went to our personal emails, chatting there as well, because we wanted to coordinate the blog posts, and all that type of thing.

The other fun aside with open source as well is that this all happened during my paternity leave; GitHub is very generous in that you get five months paid paternity leave...

**Jerod Santo:** Wow.

**Mike McQuaid:** So I was off, and my wife had gone back to work. I was off with my first, and I was his kind of sole care provider at that time for a three-month period, and this happened more or less slap bang in the middle of it. I'd put him down for a nap and I was frantically trying to write this stuff up, and sort these things out, and being like "Please, please wee man, just stay asleep." \[laughter\]

**Adam Stacoviak:** That's funny. Congrats, by the way. That's terrible though, to deal with...

**Mike McQuaid:** Yeah, thank you very much.

**Jerod Santo:** "Congrats. That's terrible." \[laughs\]

**Adam Stacoviak:** Congrats on the kid, of course, and "that's terrible" that you had to deal with that during paternity leave, you know...?

**Mike McQuaid:** Oh, yeah.

**Jerod Santo:** Well, the question is did he stay asleep the whole time?

**Mike McQuaid:** Yeah, he's a good sleeper. We've been very lucky on that front.

**Jerod Santo:** There you go.

**Mike McQuaid:** But yeah, again, it's nice, because the security researcher -- I feel like with the delays around the blog posts and stuff like that... And you know, we didn't publish the blog post quite as quickly as we would have liked to because of stuff like this... And I feel like he was fairly understanding when I was like "Yo, I'm on paternity leave. Please, give me a chance to write this up."

But again, that's the flipside of open source projects; people who are involved with -- you know, this is the tenth calendar year I've been involved with Homebrew, and people go from being young singletons, living by themselves, with plenty of free time, to balancing family life and multiple children, all that type of stuff... And it's good, because you get new people on board, who are younger and more energetic and have more free time than you do, but at the same time, it's the flipside of "Well, that's why you don't maybe have the time to do everything as well as you could", and that's why in my opinion as well - I'm even more increasingly now pushing on "No, we can't have more systems and more apps that we're gonna have to maintain." We wanna be able to use other people's infrastructure so we're not worrying about having to manually run anything to keep the lights on, in Homebrew's case.

**Jerod Santo:** This HackerOne site is cool, and I think it's a necessary thing to really bring together two disparate communities - we're talking about security researchers and open source developers. In my experience - and you guys can tell me yours - there doesn't seem to be too much overlap; there's a few people who play in both pools, but it seems like there's a somewhat strict divide there, in those two communities, and really to all of our disbenefit... That's not even a word, but I guess to our harm... Because there's a lot that we have to offer in terms of open source developers, to security researchers, and vice-versa. So anywhere that we can create places that we can come together and collaborate, and they can hack on our code, and we can fix things as they find problems, those are things that are necessary.

\[20:34\] Just thinking about some of the stuff you're saying about what happens at GitHub - there's a lot of best practices; you were mentioning the principle of least power, and defense in depth... There's a lot of things that we can do as developers that really mitigates the problem. It's similar to "Well, if I get hacked, at least they don't have root access. There's no god mode immediately." So we can do things that help mitigate when there are breaches, but if we don't have those things taught to us or explained to us, or reiterated or exampled to us, we just don't know what to do, how to do it well... So it's cool that they offer this free for open source.

It made me think of proprietary companies, and the advantage that they have is that they can actually offer cash for bugs, cash for vulnerabilities. As open source people, we can't even get any cash to buy a sandwich, let alone to fund some security audits.

**Mike McQuaid:** Yeah, that's very true. I completely agree. And the other tricky thing which doesn't come across on the public side is that the signal-to-noise ratio on this stuff makes GitHub issues look bad, in some ways, because you have so many people who are going and more or less literally copying and pasting the same report onto 20 projects. You find a project that uses Jenkins and then you copy and do the same inverted commas \[unintelligible 00:21:52.27\] about something that's not actually an issue.

There's various people saying that they've owned a GitHub Pages site and stuff like that, and it's like, "Well, it's a static site, so I'm not convinced you have, actually, because there's nothing dynamic on that page whatsoever", unless you somehow have access to GitHub's servers, in which case they will probably pay you for that bounty. So yeah, it's tricky wading through all that stuff.

**Jerod Santo:** It's a lot of noise.

**Mike McQuaid:** Yeah, just for the times where, you know, someone discloses something and you're like, "Oh, this is actually a legitimate problem and we should deal with this now." But again, that's--

**Jerod Santo:** That's a hard problem to solve.

**Mike McQuaid:** It is. And to be fair, HackerOne seems to have a good reputational system underlying it, so you definitely don't see the same bad reports, more than one of...your dark side showing. If you got a really crappy report from someone, then you can log it as basically being sufficiently negative that they take kind of a reputational hit in the system, and stuff like that. But you still feel like you're doing moderation/being a \[unintelligible 00:22:58.05\]guy situation.

**Adam Stacoviak:** So what's the advice then for maintainers out there that might find themselves in a similar situation? Should they go to HackerOne and get an account? What's your recommendation here?

**Mike McQuaid:** Yeah, I think so. Yeah, I think I would still recommend going to HackerOne and getting an account, because it's a workflow that I think makes more sense to security professionals, really. I guess in the same respect people might say "Where should I create my open source project now?" and I would say GitHub, and they might say "Oh, well I hear you've got a lot of issues, or drive-by's, or whatever." I'd like, "Yeah, that's the case, but at the same time, it's still the place where it's happening and the place that makes the most sense." And as far as I can tell, HackerOne is the same sort of deal - it's not all rosy, but it's definitely better than anything else I've found out there, and in our case at least it seems to have really encouraged really responsible disclosure from people who know what they're doing, who as you said, wouldn't perhaps otherwise get involved... So I feel like that's a sunny upland for us.

**Jerod Santo:** \[23:59\] I just wanna highlight this note on your HackerOne page - we'll link it in the show notes, hackerone.com/homebrew - in the Exclusion section; this just made me chuckle while researching... "We ask that you refrain from..." and one of them is "Social engineering, including fishing of Homebrew maintainers or contributors." It's just hilarious that you have to actually say that.

**Mike McQuaid:** Well, I think that was actually one of their templates.

**Jerod Santo:** Oh, okay.

**Mike McQuaid:** They have a template of suggested exclusions.

**Jerod Santo:** Gotcha.

**Mike McQuaid:** ...or I copied and pasted that from other servers, or whatever... \[laughter\] But yeah, I guess it's the same thing. And I guess that's definitely one where I feel like open source projects kind of made me do want a little bit more sympathy. You know, if you get in the situation where you're calling up open source maintainers or social engineers at home... It's like, come on, just give them a break; let them have their evenings.

**Jerod Santo:** "Hack our code, don't hack us."

**Mike McQuaid:** Yeah, or at least socially engineer them during work time. \[laughter\]

**Break:** \[25:04\]

**Jerod Santo:** Mike, the big Homebrew 2.0 started this month... It shot up the charts of Changelog News to number one quickly. Everybody was super-excited. Of course, the huge announcement is the official support for Linux and Windows 10. A little bit of an asterisk by the Windows support, we're gonna talk about that... But tell us about Homebrew 2.0 and the big release. How was it received?

**Mike McQuaid:** Yeah, it's been really exciting. It seems to have been received pretty well. People have been really positive about it and it's a nice buzz in the community since doing so as well.

A funny thing - the distance between 1.0 and 2.0 has been 2.5 years I think, and then 1.0 and original Homebrew was seven years, so it's definitely a slightly faster iteration, but it feels like it's a kind of good balance between -- there were some deprecations and big changes we wanted to make that we've been kind of holding off on for a while, but then also some kind of big features in there at the same time, which like you mentioned, that kind of Linux stuff being a notable example. So that's been quite cool.

There's been another project that's been running for quite a while now that was called LinuxBrew, that was basically just a full-on fork of Homebrew centered around Linux. The Homebrew project -- we've had a little back and forth and collaborating with those folks a little bit for a while, but maintaining our own independent forks... And it was maybe about a year ago we started thinking like "Well, maybe we can actually bring these projects together, because the code is getting more similar", and things like that. I'd kind of started working a few ago about trying to almost do a proper cross-platform port based on (I guess) cross-platform work I'd done previously in my career, to try and build nice abstraction layers, so you don't just end up with "if OS Linux/if OS Mac" all of your code.

So basically we did that, and we got all the Linux code back into Homebrew, done in a nice, properly abstracted fashion, and we'd actually been running Homebrew on Linux for some of our CI stuff - stuff like uploading packages, and generating our package browser, our data, and stuff like that for a little while now. So yeah, it kind of segued in nicely, and it was fairly smooth, and it's been a nice transition and selling point for Homebrew, I think.

**Jerod Santo:** \[28:23\] Yeah. So if you were on a recent version of Homebrew, would it auto-upgrade you to 2.0? Because I saw the news and then like "Oh, I wanna go get it." Then I did a -- I don't know what I did; brew -v, or... I already had it was the long story short.

**Mike McQuaid:** Yeah, so that's the sad thing that people end up with, that Homebrew -- so our version numbers in some ways are just like notifying people of what has changed underneath you while you haven't been paying attention.

**Jerod Santo:** \[laughs\] Because it's already there.

**Mike McQuaid:** Yeah, exactly. So when you run -- there's the brew update command, which will put you on the newer version anyway, but since 1.0 actually we've been running that automatically when you run various commands, like brew install, brew upgrade, and things like that. So you just get put on the newest version.

I guess the slight downside to that is when people see and they're like "Oh, I don't like the look of some of this stuff on 2.0. I'll stick with 1.9", and it's like, "Well, sorry. You can't. You're already on 2.0. There's no going back."

**Jerod Santo:** "Sorry. There's no consumer choice here. We know what's best for you."

**Mike McQuaid:** Exactly.

**Adam Stacoviak:** That's not the case for me at all. I don't know if that says something about me or not, but I'm on Homebrew 1.8.6.

**Mike McQuaid:** Oh, really?

**Jerod Santo:** Oh, that says a lot about you.

**Mike McQuaid:** Yeah, you might have disabled the auto-updater at some point. That's a thing you can do.

**Adam Stacoviak:** Is that in the config then, to do that?

**Mike McQuaid:** Yeah. So you set an environment variable, and it's documented in the main page, and then you'd have to run brew updates manually. So yeah, I guess that's what segues nicely - some of the changes we've made now, and a lot of the things that we've changed in the last few years have been things which you could do before, but were always just a bit clunky... So another big thing we made in 2.0, which people have been asking/complaining/begging for years is we run brew cleanup automatically. That was basically a command that goes and cleans out old versions that you're not using anymore, and your cache, and stuff like that.

**Jerod Santo:** Right.

**Mike McQuaid:** And it literally felt like every week we would have someone post on Twitter and be like "Oh yeah, I discovered this new command, and it freed up like 25 gigs of space on my desk." Every time I read that, I kind of winced a bit, because I feel like there's not a lot of software - or at least a lot of software that I think is great - where you need to discover some hidden little setting to make it not slowly eat up your entire desk.

We've kind of changed that now, and I guess like the update stuff, by default now we just do that for you automatically. We run it every 30 days - we do a full cleanup, and then we do the package that you've installed at install time. But again, you can turn that off as well. So whenever we change stuff like that, we do try and make it so it's still possible to set and maintain the previous workflow you had... But I'm a big believer in, I guess, being on an Apple - the Apple platform in general - I'm a big believer that the defaults should be really good. You should focus the defaults on the most sensible behavior for the majority, and if that means occasionally having to break our auto-backward-compatibility, then that's worth it for the silent majority of people who do not want to have to read the documentation to have the tool work the way they expect it should work. And that's to say - yeah, provide opt-outs so that people who would rather it stuck around the old way, they can go and read the main page, settle the setting, read the release notes, and then they get that... But people don't necessarily always see it that way.

**Jerod Santo:** I think that's definitely the sensible way of doing it, and I appreciate the opt-out, because as somebody who enjoys running brew cleanup every once in a while and just clearing up space - you know, it feels like you've just cleaned your room, or something - having it not have such an impact might hurt my psyche... So I might go and turn that off, so I can run it myself, but... I'm starting to have flashbacks of our previous conversation, so I think we actually talked about brew update running automatically on our last call with you a couple years back, and I feel like maybe, Adam, we should go back and listen to that, because you might have actually turned it off while we were talking about it on that call...

**Adam Stacoviak:** That's funny...

**Jerod Santo:** \[32:29\] ...because I think you remember talking about being able to opt out of that back then.

**Adam Stacoviak:** I was Googling while we were talking here, too. I'm gonna read something that Mike had actually said, it looks like in October 2016. It's documented in the main page, and instead of opting out - Mike, you might remember saying this, you recommend setting the time period between checks to a higher value instead of opting out.

**Mike McQuaid:** Yeah, I do that myself. By default, if you basically run brew install, it'll run brew update every 60 seconds, effectively. And that doesn't mean it'll do updates, it means that it will check and see if there's any updates on GitHub, and obviously, some people find that that can slow things down, or whatever... But again, we want to have the default for the people who don't read the docs and don't wanna tweak things really low... Because that brew update change, for example, back in 1.0, dramatically reduced the number of support requests we would get where the response is "We fixed that ten minutes ago. Run brew update." Now we don't get those issues anymore, and the people who want to disable it can still disable it.

But yeah, I personally have that set to -- I can't remember what it is. A few hours, or something like that... So it's not running all the time, it just runs periodically, but that's kind of enough for me. And then, if I'm doing development, sometimes I will just set the environment variable temporarily in a shell, and then I can know that it's never gonna run.

**Jerod Santo:** Let' me just heap a little praise on you and the Homebrew community, because as we talk about this, I'm just now thinking about it in time spans, and I have been a happy Homebrew user for years now - I don't even know how many years - and I will just say that it's one of the only tools that I rarely think about in terms of (I don't know) effort. It's just like, I use it, it works... I enjoy running brew cleanup. It updates itself. It's been like a rock in my life. I just haven't had any, like, "Oh no, Homebrew is acting up again." I can't even think of a time.

I have some issues once in a while with upgrading Postgres specifically, but that's a Postgres thing and not really a Homebrew thing, and in fact whoever is working on that formula has improved it lately, so that they hold your hand through the data migration more than they used to, which I appreciate, because I don't do those migrations often enough to have those things memorized. But aside from that, which again, is a Postgres thing, it pretty much just works. Is that your experience, Adam?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I feel like a lot of people have that experience, and it's nice having some software that just works... Because a lot of software just doesn't work that well.

**Adam Stacoviak:** I wanna echo what you're saying too, because I feel the same way... So much so that whenever I start a new machine, I'm using a version - my own forked version - of thoughtbot's laptop project on GitHub, just because I have different needs than they do, but... I mean, it's basically just brew installs, some versions of Homebrew being involved. If it weren't for that, then there'd be a lot of manual Bash scripting...

**Jerod Santo:** Especially with Cask, right?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** You do all your apps installs with Cask now.

**Adam Stacoviak:** Yeah, there's a couple apps that I for sure install on every single machine, so I just do that between the Mac Apple Store; I think "mas" is the command.

**Jerod Santo:** Mac App Store, yeah.

**Adam Stacoviak:** Yeah. So between Homebrew itself, Cask and MAS, it's pretty seamless to just start a new machine app... And literally, I just run a command, and minutes later the machine is ready.

**Mike McQuaid:** \[35:53\] Yeah. Well, I may make your life even better now, because I'm gonna do a shout-out to another project that I created - an old project called Strap, that replaced the Boxen project at GitHub. So basically it's the same sort of thing you were talking about there for setting up your machine. It's really minimal; I guess like the laptop script, it's basically just a small Bash script, but it will generate your GitHub tokens for you itself as well.

The cool thing about Strap, I guess, in comparison to the Laptop script, or Boxen and stuff like that, is that it doesn't actually install really any software for you, it just installs stuff that you can use to install other software. So it installs Homebrew for you, and the Xcode command line tools, and enables full disk encryption...

**Jerod Santo:** Nice.

**Mike McQuaid:** But then I was thinking about it and I was like, okay, well, I want to have some level of user customization; what's a cool way of doing that? The next step beyond that is -- because it sets up your GitHub tokens, and you kind of get it through GitHub, it goes and looks for... If you have a repo called, say, github.com/mikemcquaid/dotfiles, then it will clone that automatically for you, and then if you have a script/setup file on that repo, it will run that automatically for you. Then if you have a -- have you guys come across Homebrew Bundle, as well?

**Jerod Santo:** No.

**Mike McQuaid:** That's the other thing that kind of ties into this ecosystem. So that's the other effectively half of this system. So then if you have a brew file in your dotfiles repository, or a homebrew brew file repository, then it will run homebrew-bundle on your brew file as well. And what does homebrew-bundle do? You can use that independently of Strap; this is a separate project that's part of the Homebrew ecosystem. What that lets you do - it's basically a rip-off of a gemfile, and Bundler, which was originally created by Andrew Nesbit, this thing, Homebrew Bundle; it was called Brewdler originally.

Basically, what it lets you do is specify a gemfile-like syntax, kind of Ruby, but without the versions, basically, because we pin everything to versions... And you can have it automatically install all your Homebrew taps, which is kind of third-party repositories, or your Homebrew packages, it can set start services for you if you want them to as well, it can also install all your Homebrew Casks, so things like Google Chrome, Java, Firefox, etc., and it can also install everything from the Mac App Store for you (your 1Password, and things like that).

For me, I have this setup in my dotfiles repo on GitHub, so I can just run a single Strap script and it will go and do all this stuff for me automatically on my laptop, when I run a single script, basically... And the nice thing is that stuff is all -- I'm able to share the files I use, and it's all open source as well, so people can see what my setup is, and my brewfile, and things like that. And because I'm incredibly -- in fact, this is a good geek cred extension to that, right? So I was kind of looking forward to running this again, because I had some issues with my MacBook Pro, and Apple were replacing the keyboard; so they gave me a loaner laptop, and then said "When you get your laptop back, it's gonna be wiped." Then they gave it back to me, and it wasn't wiped; I was actually so disappointed that I wasn't gonna do this again that I voluntarily wiped my work laptop just to go through the whole -- I was like, "Right, I'll do my..." Like back in the days of Windows, where you had to...

**Jerod Santo:** Oh yeah, wipe it and start fresh.

**Mike McQuaid:** ...wipe your machine every few years. Yeah, yeah. I was like, "Yeah, I'm just gonna have a fresh install and have a clean run", because I'd gone and tweaked all my scripts to be even more smooth and polished.

I made a little script as well that will pull my SSH keys out of 1Password, and then dump them in the right place on disk, and stuff like that.

**Jerod Santo:** Wow.

**Mike McQuaid:** So I need to enter my 1Password once, and then it pulls out all my SSH keys, and my GPG keys, my Bintray, and GitHub tokens, and things like that. And it's cool, because again, the script is all open source, but it's all pulling private encrypted credentials; it doesn't matter if you have access to everything in the script...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's pretty cool.

**Mike McQuaid:** \[40:02\] Yeah, so that's my happy place - it's just automating things completely unnecessarily. I definitely spend more time on the script.

**Jerod Santo:** Well, I was just gonna say that, because first of all, this is super-cool. Total geek cred on this. But the reason why I've never used these -- because Adam has talked about thoughtbot's... What's it called -- Bootstrap, or Laptop...?

**Adam Stacoviak:** Laptop.

**Jerod Santo:** Yeah, Laptop, and I looked at Boxen... I just feel like it's kind of a YAGNI thing, where it's like, you're basically putting a lot of work into automating something that you do maybe once every few years...?

**Mike McQuaid:** Yup.

**Adam Stacoviak:** I'll tell you what though - I felt the same thing, until you have a few machines; or you get a new machine not long after you prepared to do this again.

**Jerod Santo:** When you go on the annual update scheme?

**Adam Stacoviak:** No, I mean... I think I've probably had three laptops in the last six years; I don't know, maybe it's less than that. I feel like it's not that often of a new machine. But I've gone from laptop to desktop though, because I have slightly different needs than you do, so... You know, I have to do more audio stuff and video stuff, so I tend to need a more higher power machine. So having this iMac and then also laptop makes me need to set up more often than -- twice as much as you.

**Jerod Santo:** Twice as much, that's true. So Mike, tell us why -- I'm looking at Strap, and we'll definitely link this up; we'll probably log this on Changelog News, now that we've found it.

**Adam Stacoviak:** Yeah, already doing it. Just kidding.

**Jerod Santo:** You're logging it right now?

**Adam Stacoviak:** No, I'm not. I'm just kidding.

**Jerod Santo:** Why is there a deploy to Heroku button for a command line script? I'm just perusing the readme, so clue me in here. Can you just run this from a website kind of thing?

**Mike McQuaid:** Good question. Yeah, so basically the Heroku thing works for -- remember I said earlier that it will set up your GitHub tokens for you? That's basically so it can do that. So the script -- it's just a script, but this is something I stole from Boxen, which is when you download that Bootstrap script, it gets you to log into GitHub, so it can then generate tokens, so it can set up all your GitHub access for you.

**Jerod Santo:** Gotcha.

**Mike McQuaid:** Basically, when you run that script, that gives the script the ability to talk to GitHub, and it also means that you don't need to do the whole initial -- basically, you log into GitHub once through your browser, and then it sets up all your... After that you can do a Git clone of a private repo and it will work, as long as the Strap application has access.

So that's it, to answer the question of why you -- I mean, I'm one of those people who love spending an hour writing a script to make a five-minute task less boring... But the flipside with this was I ended up maintaining some of the internal software they use at GitHub to go and set up new developers' machines, and--

**Jerod Santo:** Which makes way more sense, yeah.

**Mike McQuaid:** Yeah. So this was the motivation for this, and since we've moved to this new system, it seems to be saving a lot of people time. And again, the Homebrew Bundle thing - it's actually got a few different use cases. One is the "I wanna set up all the software on my machine", but then there's also the classic one that always bugged me - in the readme of a project it says "Okay, so before you try and set up the server you need to brew install X, Y and Z", and I always thought that that was kind of...my attitude is, put stuff into code if you can, rather than documentation... So instead of that, now the little Bootstrap script, instead of saying "run brew install" or whatever, you can run brew bundle in that repository once you've checked it out, and then it will know to set up, say, mySQL, Elasticsearch, \[unintelligible 00:43:33.10\]

**Jerod Santo:** Right.

**Mike McQuaid:** ...if they're not already running. And if they are running, then it verifies that they are, and stuff like that. So I guess I see it as well as being like a project bootstrap tool as well, for dependencies that are on the Mac App Store, or in Homebrew Cask, or in Homebrew itself.

**Jerod Santo:** Yeah. We could definitely use that.

**Adam Stacoviak:** The Laptop project uses the bundle command as well. It uses brew-bundle --file, and this is all in a Bash script.

**Mike McQuaid:** Oh yeah, and then it embeds it in it, yeah.

**Adam Stacoviak:** \[44:07\] So it's still using that same kind of concept that you're talking about, Mike.

**Mike McQuaid:** And that's the thing that makes me happy about this, because again, that's when I was working in Boxen, Boxen was very much more of a monolithic system. And the thing that makes me happy with the way that we built this solution to replace this at GitHub is, in my opinion, the more Unixy way of doing things, and that you build a bunch of tools which will interoperate nicely, and you create a system from combining those tools... But it means if anyone says - like the Laptop project - that "Oh, one part of this toolchain looks useful to us and the other parts don't", then they can still get all the benefits of that one part of the toolchain, and they can still be part of that ecosystem... And I feel like that makes things better for everyone really, when you have segmentable tools that combine together, rather than having one big, monolithic system you can't really swap bits in and out of.

**Break:** \[45:09\]

**Jerod Santo:** Mike, we mentioned the support for Windows and Linux, and I said there's an asterisk by the Windows support, mostly because you had a few people out there saying "This isn't real Windows support" because it's a Windows Subsystem for Linux. Can you tell us what that means? Are there things missing? Do you consider it official Windows support, or what's your perspective on that?

**Mike McQuaid:** That kind of came from the LinuxBrew folks, basically, who did a bit of work to get that stuff to work. But it mostly worked out of the box. If you're unfamiliar, Windows 10 ships with a thing that's called Windows Subsystem for Linux. I don't believe it says so by default; you can enable it, it's a developer tool thing... And it basically gives you a tool Ubuntu environment on your Windows machine.

The really cool thing about it is it's not transparently running a VM in the background, but it's actually running native Linux binaries through -- I can't remember exactly how it runs under the hood, but it's some sort of kernel syscall mapping. I guess in a vague way it seems to be a little bit like Wine, if any of you are familiar with that, but in reverse, and at the kernel level, I believe. And it's easier for Microsoft to do that obviously, because they can see what the Linux syscall interface is, because it's all open source, and they've been involved with Linux development in the last few years, and stuff like that.

\[47:55\] It's basically a way of running native Linux stuff on your Windows machine, so as a result you can run Linuxbrew under that. Then when Linuxbrew joins Homebrew, then you can run Homebrew onto that as well... So it's one of our kind of officially supported platforms, more or less because it's just a relatively simple way of being able to run Homebrew on a Windows system.

I used to do proper, native Windows development in the past, and it's certainly not that... It's not a native Windows package manager; for that you have things like NuGet and Chocolatey, and things like that. But if you want to be able to dabble in things that are in the Homebrew ecosystem and try them out on a Windows machine without having to spin up a Linux VM, or a Mac VM or whatever, then it's a way of doing that.

**Jerod Santo:** So does it have a completely separate Formulae? I'm assuming the Formulae have to work differently.

**Mike McQuaid:** Yeah, so the Formulae are separate between Linux and Mac for Homebrew anyway... So there's a repository homebrew/homebrew-core, which is all the Homebrew packages, and then there's a repository homebrew/linuxbrew-core now (as of two days ago). It used to be linuxbrew/homebrew-core, so we whipped some stuff around.

Yeah, so that basically has all the Linux packages separately, and the reasoning for that is that on the Formulae level - which is our name for the package description vault - it's a lot harder to do that stuff that I talked about earlier, with making things nice and clean, and having separation. You end up with having a lot of "if Mac.../if Linux..." As a result, those have evolved a little bit more separately. So on the Windows Subsystem for Linux it ends up using the Linux versions of the Formulae, or package descriptions.

**Jerod Santo:** Gotcha. So there's effectively two pieces of software.

**Mike McQuaid:** There's not separate Windows ones.

**Jerod Santo:** There's Homebrew and LinuxBrew, but they're all under one parent at this point.

**Mike McQuaid:** Yes.

**Jerod Santo:** But there aren't three. It's not as if you separately went out and implemented Windows. It just is coming along "for free" because of the Windows Subsystem for Linux.

**Mike McQuaid:** Exactly. And I think there are a few tweaks that make it run a little bit better, but yeah, it more or less came for free.

**Jerod Santo:** So have you seen a lot of pick-up from the Linux and the Windows side? Are there issues and bug reports coming that are new to Homebrew 2.0, or was it already happening with LinuxBrew, so it was just kind of a merging of these two projects?

**Mike McQuaid:** Yeah, I guess I noticed a few more Linux issues than I used to, because it used to be separate repositories, and now for the package manager part at least it's all the same repository now... But yeah, their analytics on the Linux side of things - they've seen a big uptick since Homebrew and LinuxBrew joined together in that way, so that's kind of been cool.

It's been interesting in general just seeing and people kind of learning why you would LinuxBrew, and stuff like that, which in some ways that's a question where that's the one you tend to get the most with the Linux support, is "Well, why would you do this? Why would you not just use AppGet?", which is a valid question, because despite being the Homebrew project leader, I still consider AppGet to be a superior package manager in very many ways.

Basically, the reasoning is the original motivation of all the people who work on LinuxBrew actually is because if you have access to the package manager on the Linux system, then great. I know a lot of people are thinking from the developer perspective of "I'm a dev, I have my own system, I set it up myself. I'm running Linux on my system. I don't have a workplace who is not letting me install things through the package manager", but some people do have that, and a noticeable group is people who are running on big Linux supercomputing clusters. They have access to run stuff on that system, but they often do not have access to root on that system, or the package manager on that system.

So the way they generally have to build their own software is they just build stuff in their home directory, by themselves, and without really any support... And LinuxBrew has allowed some of those folks to be able to have an actual package manager that they can use, and they can just install stuff in their home directory.

\[52:14\] Or if they want to use LinuxBrew's binary packages, then they can - I've been informed this is an a lot easier ask - they can say "Hey, can you set up a new user on that system? It doesn't need to be root." And you use our core LinuxBrew and then all the binary packages are kind of built so that they can be used on their home LinuxBrew, and then the system manager can kind of set that up and they can go and then benefit from some of the binary packages as well.

**Jerod Santo:** What about the brew file with the bundle? Is that something that's only on the Mac side? I assume there's definitely -- like the Cask stuff and the other stuff wouldn't be available on the Linux side, but would you at least be able to have a project with a brew file that's the lowest common denominator, so that somebody on Linux and somebody on Mac could both use the same root file and get their setups going?

**Mike McQuaid:** Yeah, I think you could. As you say, it would have to be the lowest common denominator, because there's some stuff that doesn't work. On the Linux side it would effectively be just setting up Homebrew third-party repositories, taps, and installing Homebrew packages Formulae... But yeah, it's not officially supported by us in the Homebrew Bundle, but I would imagine it probably works, I guess, thinking of the way the code behaves.

**Jerod Santo:** So what about the team? LinuxBrew seemed like it was its own deal, and now it's part of Homebrew... Is there a merging of teams and communities, or were these people that were already involved with the Homebrew community in the first place?

**Mike McQuaid:** Two LinuxBrew maintainers came across specifically to Homebrew as part of the -- well, I guess somewhat pre-merge...There's two people who are our main maintainers, Michka Popoff and Shaun Jackman. But then we have a few other maintainers who are kind of in or out of Linux land and stuff, as well.

So yeah, it's been good, actually. I feel like it's injected a lot of energy into the project, because LinuxBrew probably has - I guess like the Linux ecosystem in general - a disproportionate number of contributors and, in our case, maintainers as well, for the size of the ecosystems.

So yeah, it's been great having more people get involved with the project, and more people who have been running their own independent open source project, in LinuxBrew's case, for quite a few years, in the wider Homebrew ecosystem. So they've kind of come into Homebrew with the understanding of what it's like to run a project, and triage issues, and interact with other maintainers, and stuff like that. So yeah, they've been invaluable.

**Adam Stacoviak:** Well, going a little further, there's been some changes in governance; there's been a first-ever in-person meetup paid by Patreon donations... Take us down the road of this very first in-person meetup and what's come down the pipe in terms of governance... And your role has even changed a bit, right?

**Mike McQuaid:** Yeah, it has. So we've been talking at Hombrew for a little while about how best to govern the project. A brief history - Max Howell was the original creator, and he got some other maintainers on board, such as myself, and then he dropped away from the project, and then it was kind of a goal to sort of just run it all as a complete flat hierarchy for a while. But as is the case with companies as well, generally you need a little bit more structure than that, we've found... So I somewhat unilaterally declared myself lead maintainer, after checking with other people if that would be fine, a few years ago.

Then there's been a few -- if you browse through the Homebrew issues you can kind of see that there's been a little bit of tension with that on occasion, because people don't necessarily agree, understandably, that you have someone who's in a position of authority, with no clear way of removing them if they stop working on the project in the future, or start to abuse their authority, or whatever. So we kind of talked for a while about in the future trying to have some better governance model, and maybe looking at some of the older, more senior open source projects than us and seeing how they do some of this stuff.

\[56:07\] Then, I guess as a result of that, again, as you mentioned, we've had a reasonable amount of money coming in through Patreon now, and we're part of the Software Freedom Conservancy and we've had some donations through there... So we kind of thought, "Well, something which we can do with that money that would be valuable is have a bunch of Homebrew maintainers come together and meet up." So 14 of us all came to Brussels around the time of FOSDEM, because it's a big open source conference that is free to attend as well... So we got there, and then we had the day after FOSDEM was over - we basically just rented a meeting room in a hotel and all kind of got together, and had lunch and dinner, and had a... Basically, what you guys call it - not to be too grandiose - when the founding fathers all met together to plot...

**Adam Stacoviak:** The convening...!

**Mike McQuaid:** Yeah. So we ended up not necessarily knowing what we were gonna talk about before, but it ended up being mostly about governance of the project. And it was super-valuable. I think we managed to etch out in that meeting the outlinings of a structure for the project, and shout-out to John Chang specifically, who had written up a lot of stuff and kind of came into the meeting with a really decent draft of what to do. Then we iterated on that a little bit during the day, and then iterated on it more in private, and then we opened a pull request on homebrew/brew, our main repository, to solicit contributions on that as well. After a week of that being open, we merged that through.

What that actually means is that we now have a bit more structure that we had before. The lead maintainer role has gone away, and been replaced with a project leader, which maybe sounds a little bit like two things that are exactly the same, but the difference is the project leader role - I was elected into that position, and stood for election; if I want to, I will stand again next year, and then there will be another election, and anyone else who stands will have a platform if they wanted to, and then we can see effectively who gets elected basically by the members to be in that position.

We have a governance document that explains how this all works now. We have a project leadership committee, and a technical steering committee, of which I'm currently on all three... But again, the nice thing is in the future that's changing, so I cannot be on all three. Not me specifically, but you basically cannot have a role on all three places. And we're also having this idea of members of Homebrew as well, where if you have someone who isn't a maintainer, maybe isn't involved as much with the code side of Homebrew, but has been involved with Homebrew for quite a few years, then they can get nominated and join as a member, and then they can vote on some of these elections in the future and get involved with the project on the administrative side without necessarily needing to or wanting to get involved with it on the technical side.

**Adam Stacoviak:** Have you laid any of this out in documentation, by any means? I have to see the 2.0 documents...

**Mike McQuaid:** Yup.

**Adam Stacoviak:** So there is governance...?

**Mike McQuaid:** Yeah, so if you check out the docs.brew.sh site, there's a Homebrew governance document which lays all this out. It's kind of vague, legally used language; it's fairly readable, but it's not great, super-fun reading, but it does explain how this stuff all works, and how people are elected and not, and how often these meetings happen, and stuff like that. That's worth a read if you're interested in this stuff.

And it's nice as well, because as well as bringing some elections into things, and policy and stuff, which is, again, nice for me to be -- I think it's nice for me and it's nice for the community to have me actually be elected to the role, and have the majority of people agree that, obviously, they think I'm doing a good job, and that they're gonna support me doing that for the next year.

\[01:00:04.15\] But also, as I said, putting limitations on what people can do is gonna end up reducing our boss factor as well. Sorry, increasing our boss factor; I have to remember which way around that is. Basically, it's gonna make it much easier for us in the future to have things not be too centralized on an individual, because we have these committees, we have a leadership position, and it's clearly defined what the rules of each of them are, and the responsibilities are, and that you can't basically be responsible for everything. I feel that that's gonna be a really positive thing in the future. And it's also, as we mentioned earlier -- I think this happening at the same time as the Linux merge, it's boarding on a bunch more people who have been enthusiastic and have been of help, and got involved with that process.

So we have people on the technical committee and the project leadership committee who have come from that LinuxBrew merger, and that's been a nice, positive thing from that as well.

**Adam Stacoviak:** Maybe an interesting takeaway here too is I guess now having an annual general meeting, which puts a little bit more pressure on the need for finances, which is good for Patreon that you've got that, but then you also mentioned Software Freedom Conservancy... I'm just kind of curious what your thoughts are on funding this project and how you all look at attaining funding, and maintaining that, and the needs for funds to do things like this.

**Mike McQuaid:** Yeah, that's a good question, and I think this has been -- you know, our funding has got to the level that we've been able to afford to pay for flights for people to come to stuff like this. We had people coming from Canada, people coming from India to this meeting, and that's been really great. But then obviously, the amount of funds we get limits or permits what we're able to do with the project, so it would be great to have a future where we could potentially hire people to work on aspects of Homebrew - maybe the infrastructure, and stuff we've mentioned before, full or part-time... But at the moment we still very much have an amount of money that pays for flights once a year, but we don't have an amount of money that pays anywhere near a reasonable salary for someone, with money left over as well.

So increasing our funding is a goal for the future, and hopefully as well the more we're able to be transparent about what we've spent the money on and how that's all broken down, the more we'll be able to solicit more funds and know that people know that it's not just going to a black hole, it's going to these specific things. And there's gonna be a blog post incoming at some point in the future where we'll write up what we did at this meeting, who met, who was there, what we talked about, we've got all the minutes, and stuff like that. And I also wanna detail in that blog post how much we spent, and whether we felt that that was a good use of money as well, because we don't have the exact breakdown of everything now; we're still waiting and working with the Software Freedom Conservancy to get that information... But again, that's the nice thing about open source, is you can afford to be more transparent about this stuff than you would be as a business.

Also, it might be in the future that there's opportunities where -- I've spoken to people at large tech companies before who have said "If you just want us to give you X amount of money, particularly in something like Patreon, that's very hard for us to do. Whereas if you want us to pay for flights for ten people, that's actually really easy for us to do." So this stuff may also open doors in the future for us being able to ask for more specific financial commitments or donations from companies in a way that makes it easier for them to give money to us, rather than just something like -- as I said, if you're a massive tech company, getting a line item approved from finance to sign up to Patreon with a corporate credit card and give a certain amount every month is not easy; that's a system that's built around the assumption that most of the donations will come from individuals, from the goodness of their own heart.

And while that is great and I'm all for that, I think with open source sustainability stuff we need to try and figure out ways of making it easy for the big tech companies to give to you. Because they get villainized to a certain extent, and some of that is legitimate, I think, but then some of it is just like, you know, you're not making it easy for them to give you money, and you need to figure out... I guess the charitable sector has worked out for quite a while, but it's as much about meeting them where they're at and making it as easy as physically possible for them to give you what you want, rather than saying "This is how I accept money. You need to come and meet me where I am."

**Adam Stacoviak:** \[01:04:35.00\] How does that play out then for an entity? Does Homebrew have a legal entity? Is this Patreon connected to a person? What's the state of things there?

**Mike McQuaid:** Yeah, good question. That's what the Software Freedom Conservancy basically is. They are an umbrella organization that rides a 501(c)3 in the U.S, which to those of us who aren't in the U.S, that basically is a U.S. charitable organization that means organizations can donate to them tax-free; they also provide legal services were Homebrew to get sued as an organization, say, and they provide a certain amount of kind of just being a legal entity that can own things and have banks accounts and such like.

That's basically our Patreon money and our previous money from our Kickstarter and stuff, that has gone to Homebrew's Freedom Conservancy, who goes and manages all their funds on our behalf. And in some ways they work like a little company for us, which is great. For example, with the way we have all the Homebrew money in a bank account and we have a sum of how much we have, and people are able to donate to the Software Freedom Conservancy and that goes straight to us, if they say that that's for Homebrew... But at the same time, when we book flights, we don't just book all the flights on Homebrew's credit card; they have an expense policy, and you go and reimburse that way. It sounds like it would be nicer to put things on the credit card, but as the person who you call when having to book that, I'm glad that there is more responsible oversight with this stuff.

And the nice thing with Freedom Conservancy is that they don't really specify anything about the technical running of your project, beyond the fact that you need to have some sort of leadership committee. So they basically let you run the project how you like, and then they focus more on the legal and financial side, which is great for us and for me, because that's the side of things that we're...

**Adam Stacoviak:** You still own the copyright and stuff like that then?

**Mike McQuaid:** Yeah. We don't do copyright assignment, or anything like that in Homebrew because... Yeah, I don't know why we don't or why we do, but that ship kind of sailed a long time ago. \[laughter\]

**Adam Stacoviak:** Okay.

**Jerod Santo:** Switching gears slightly, I'm recalling the last time you were here a couple years back we were talking about - you'd recently added analytic tracking to Homebrew with opt-out, and it was a bit of a controversy. So we discussed that last time, and I remember on that call us saying it would be cool if you opened up the data for the community to see, since it's our data (I guess) in the first place... And since then you've done that, which is awesome. We'll link up some of the analytics in the show notes.

I thought it would be fun here -- have either of you looked at the install stats recently, in terms of Formulae installed, Adam or Mike?

**Adam Stacoviak:** Yes.

**Mike McQuaid:** I looked at them pretty recently, yeah.

**Jerod Santo:** Oh, you're killing me, y'all! Adam, you've just looked at it?

**Adam Stacoviak:** Before the call, yeah, prepping for this.

**Jerod Santo:** Alright. It ruins my game. I was gonna have us guess...

**Adam Stacoviak:** Well, I can still guess. Come on, let's play the game!

**Jerod Santo:** Okay, let's play the game. So 90-day install events - we'll take turns, Mike and then Adam. Mike might have these memorized. Maybe this is like on a dashboard, above your bed or something at home, but hopefully not. Top installed Formulae, over the last 90 days. Try to hit in the top 20, but try to hit number one. What do you think, what's the most installed packages?

**Mike McQuaid:** I'm gonna be pedantic, because I know how the analytics work to start with... So are we going for install events, or install on request events?

**Jerod Santo:** \[01:08:08.16\] Install events. What's the difference? Shall we go the other way?

**Mike McQuaid:** No, I guess it's interesting the difference, because if people are looking at these, it might help to explain...

**Jerod Santo:** Okay.

**Mike McQuaid:** So the install events is if I install a package and it pulls in a dependency, then the package and the dependency are both install events... Whereas only the package I specifically request is an install and request event.

**Jerod Santo:** Oh, okay... Well, let's do them both. We've got time. Let's start with the Formulae overall install events. This means either you asked for it, or it's a dependency, which means it's infrastructure. That will change the results for sure, but what do you think, some of the top packages here? Or Formulae. You're gonna guess one, and then Adam gets to guess one. We'll do it Family Feud style.

**Mike McQuaid:** Okay. Well, I'll guess the easiest one for us, which is...

**Jerod Santo:** Survey says?

**Mike McQuaid:** ...OpenSSL.

**Jerod Santo:** OpenSSL. So yeah, you got number one. Sorry, Adam, but you already lost.

**Adam Stacoviak:** Oh, jeez...

**Jerod Santo:** Not fair, he runs this project. Okay, but you can still hit a number there high, so what do you think, Adam? Try to hit in the top five.

**Adam Stacoviak:** I'm gonna base mine based on our most popular page on Changelog.com, and I think you know what that is, so...

**Jerod Santo:** The Changelog...

**Adam Stacoviak:** Installing Node. I would assume that Node is probably in the top somewhere.

**Jerod Santo:** \[laughs\] Oh, that's right. Node is number five. Still very good. Let's go one more time each and then we'll switch to the other events. Mike, give us another one and try to hit in the top five. Try to hit number two!

**Mike McQuaid:** Python.

**Jerod Santo:** Python. Close! That's number three. Number two is still on the board. So we have OpenSSL first, Python third, Node fifth. Adam you can squeeze in there the number two, if you can think of this...

**Adam Stacoviak:** I'm going with Git.

**Jerod Santo:** Git... Oh, I've gotta scroll way down to 15. The correct answer was, as you should know, SQLite - number two, with 1.35 million install events in the last 90 days. Now let's go to Formulae install on request events... And we might have very similar responses. In fact, I won't make you guys guess; I will tell you that it's the same packages, but they've kind of been moved around. Node is number one, Python number two, and sneaking up there, number three is wget, follow by Git, and then fifth is yarn. So these are user-facing tools...

**Adam Stacoviak:** OpenSSL is a little further, yeah.

**Jerod Santo:** Yeah, it trickles down to nine, because most people are using that as a dependency, but... Not most, but often. Alright, fun game. Very cool. Check those out. I didn't know this was out here until recently. Has this been out and available for a long time, Mike?

**Mike McQuaid:** Yeah, it's been available for -- I don't know. In fact, I know how long that's been, because I remember building it when my wife was heavily pregnant and we were on our last vacation before my son was born, and I felt "I have to do this now, because this is my last chance ever." Yeah, so that was about then.

**Jerod Santo:** So you know exactly how old it is then.

**Mike McQuaid:** Yeah, exactly. So about a year in any form, and probably about half a year, about a year in its current form, probably.

**Jerod Santo:** This is cool!

**Mike McQuaid:** It's great, actually. It has been nice to kind of get that done, because as you said - and that's what I hope for, is make this stuff open, and we sort of live by that, as well. So because this is pulling data from Google Analytics, you need a Google Analytics API key to access that data, and me and the other maintainers don't even have an API key on our machines anymore. So when we're consuming analytics data, we're consuming entirely the same public data that everyone else does... And there's actually APIs on that site as well that you can pull this data programmatically, which has been handy for people because both the analytics data -- I don't know if the APIs are used so much for that, but for the Formulae data, for example, you can query information about Formulae without having access to a Mac system. And the worst/best part of this always - it's actually all on GitHub pages, so you can hammer it as much as you like and you're not gonna cost us any money.

**Jerod Santo:** \[01:11:54.09\] Nice.

**Mike McQuaid:** And if you want to see pain the world of code, if you look at what it looks like to build a JSON API on top of GitHub pages, then you will know great sadness.

**Jerod Santo:** \[laughs\] I might go read that later, because I like to know great sadness every once in a while... Especially when I don't have to write the great sadness; I can just enjoy the results. \[laughs\]

**Adam Stacoviak:** We know Homebrew 2.0 is fresh, and it's new, but we have to ask you - what's in the future? Is there anything that's not out so far, anything that's fun planned that's coming up that you can tease or mention?

**Mike McQuaid:** Yeah, it's funny - there's no really big things I can think of. Homebrew 2.0 for me was a funny experience because that was kind of the end of my list of things that I thought were really important that I wanted to get built before. So from my perspective, there's not -- there's stuff I would like to see, but again, this is kind of a bit more fun, because it's dependent on the community stepping up. There's been talks for a few years about being able to show licensing information for Homebrew packages, so you can query what license each individual package is; you could maybe say "I deliberately don't want to install..." -- I know some commercial organizations would find it useful to say "I just don't want to allow AGPLv3 stuff to be installed at all."

So yeah, we have someone who started finally a community effort to build up groupings of all that kind of licensing information for packages, and then when that reaches complete enough state, then we're gonna go and we'll merge that back into Homebrew itself. This was the process that we took for descriptions, adding them to packages, back when we did that, where we said "Okay, if someone could go and effectively build up all the metadata, when that's done we'll then merge it back into the project." We've tweeted about this the other day, and you can go and see if there's an open "Help wanted" issue in the homebrew/brew repository as well. We're just building this stuff up, so that would be a cool thing, both to watch, and also to get involved with.

**Adam Stacoviak:** I'll make sure we get that link for the show notes then, so the listeners can check that out. Mike, you know what - it's always good catching up with you, and I think it's funny too how you can earmark when things happened with Homebrew based on life events. I think that's a true sign of the life of a maintainer. As someone who uses the code that you've worked so hard to slave over all these years, and put this much effort into, and all this stuff - I'm just so appreciative of that, because you make my life so much easier as a Mac user, and getting my system up and running, as we've talked about on this show. So I appreciate that, and I'm glad that even though you're on vacation, you can still put out a good feature, which is appreciated.

**Mike McQuaid:** Well, thank you very much. The nice thing about it for me is that, believe it or not, it's still fun for me to work on Homebrew, and that's the thing - it's still something in my free time that, you know, maybe not as much as I used to, both because of maybe Homebrew growing up a little bit, but also because my life is getting busier... But you know, there's definitely times where I'm at weekends, and my wife's out with my kid for a little while and I've got free time to myself, and I'm like "What do I feel like doing most right now? Well, I feel like working on Homebrew." And that's the nice thing, that I'm able to do that, and it's fun for me to give back, and help other people have something useful at the end of it as well.

**Adam Stacoviak:** Well, Mike, we thank you very much for Homebrew, and the rest of the team that makes it happen, and also for your time. Thank you.

**Mike McQuaid:** Yeah, thank you, guys. Great to chat!
