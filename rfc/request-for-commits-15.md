**Nadia Eghbal:** Tell us how you got started as a contributor, and then eventually become a maintainer of Mocha?

**Christopher Hiller:** Well, I actually started as a maintainer. In 2014, when TJ left Mocha and all these other Node projects, he put a call out that said "Hey, I need to have somebody take over my projects. They're up for grabs." I at the time was a user of Mocha and said "Hey, I would like to help. I enjoy using this software and I don't wanna see it die." Basically, he just gave me the commit bit and didn't say anything, and that was it.

**Mikeal Rogers:** Yeah, TJ was sort of unique... Most of his projects really didn't have any other contributors to them. A pull request here or there, but he was really pushing the solo maintainer thing. Express did have a few other people working on it, but most of his projects were literally just him being the only maintainer.

**Christopher Hiller:** Yeah, Mocha had at least one other person, maybe another couple people at the periphery at the time I joined, but they still weren't that active. So yeah, that's kind of the story, I just joined up.

I didn't really know what I was getting into. I had contributed to my own projects, I contributed some to Angular UI, which was an early kind of widget toolkit around Angular; it started pre-1.0, so I had done some open source contribution there, but I hadn't really been that involved in open source until Mocha.

**Nadia Eghbal:** It looks like a pretty crazy ramp-up, from being a user to being a maintainer. Did anything get done before contributing to other projects prepare you for what that was gonna be like?

**Christopher Hiller:** \[00:03:58.16\] Yes and no. There are things in my career as a software engineer or what have you... I have learned, for example, how to do a code review and how to receive feedback. I don't view the code I write as an extension of myself; code is code. I wasn't really bashful about sharing it, and I think that was something I had prepared for.

But as far as dealing with -- I had never dealt with... Again, because of being a software engineer, a lot of companies will kind of insulate you from your user base directly. So if a user of the software you're building has a problem with it or whatever, they contact support and support deals with them. Maybe if the problem is bad enough, support is gonna contact you, and in some cases - this is not true, obviously, across all companies - eventually an engineer will get to talk to an end user. But I didn't have a lot of that, so I wasn't really well versed in how to deal with users or what they expected.

There were many issues, and I like to think that I learned fairly quickly how to not be a jerk, and be polite about pull requests and stuff. But I certainly made quite a bit of mistakes there; I didn't really know too much about semantic versioning, and that caused some problems. I remember a big one was at some point I decided - and there were a couple other maintainers - to change the default reporters... So Mocha is a testing tool, and the reporter is how you receive your test results.

I changed the default one from one which is very sparse to one which is more verbose, and we did this in a minor, and a lot of people were really upset about that. I caught a lot of flack for changing the output, not the API, and that was kind of surprising. Since then, I've really tried to drive this home with other contributors that we need to play it safe, given the size of the user base.

**Mikeal Rogers:** So looking back -- it's interesting, you're talking about a lot of the biggest challenges have been kind of community-oriented stuff... When you first took over the project, did you view the biggest challenges as being technical, or being community-related? Did you see a long list of features or bugs or technical issues, or did you really see it as like "Okay, we have to get contributors and make people happy"? Because it sounds like in retrospect the hard part was actually the community side.

**Christopher Hiller:** When I came on we had a lot of open bugs. I looked at those bugs and I said "Oh my gosh, look at this thing; look at the terrible state Mocha is in", and so I wanted to go in and fix them, I felt like that was the highest priority. Well, you go and you start fixing bugs, and you can do that to an extent, but the coverage for Mocha wasn't so good at the time of itself. Mocha would have tests to test itself, and we would kind of -- I would get into trouble when I was trying to fix a bug, because I would break something else.

So at the time I felt like "Well, there are all these things that need to get fixed and all these features that need to be added", but pretty quickly I realized "Well, I can't do this all myself. I need help", so I started to reach out to basically get more help.

\[00:08:14.10\] Some people that were with the project originally maybe had learned something that I didn't at the time; they had said that Mocha is in maintenance mode. And I was like "Meh... Neah. We've got some features we can add. I think it's a good idea to add these things, because there's a lot of people that want them", but I think what I maybe didn't realize was when a project isn't adding features, it's not necessarily for technical reasons; it's because there's just not a whole lot of people interested in contributing to them.

So at the time no, I didn't think it was a community problem, but I came around and started to see "Well, I just can't do this all myself, as much as I'd like to, and I need help." That kind of started me down the path of looking for ways to keep the project sustainable.

**Nadia Eghbal:** How long did it take you to figure that out? So you took it over in like 2014-ish...

**Christopher Hiller:** Yeah, at some point I decided that it would be good, because there were a handful of features that were basically impossible to deliver with the current architecture. I felt like doing a refactoring of the core of the system would be a good idea, and I got some way on that. I was doing it by myself. It didn't seem like anyone else was really interested in helping, though I wasn't very vocal about it.

I worked on that refactor for about six months and it didn't really go anywhere. Meanwhile, Mocha was just kind of languishing during that time, so it took me -- I don't know... I wanna say, I was working on the codebase for at least six months, and then this rewrite for another six months after that, and then once I kind of came up for air, I realized that wasn't getting anywhere. That's when I said "Okay, we've gotta figure out this community problem."

**Nadia Eghbal:** Do you feel like you've learned those types of challenges about being a maintainer on the fly? Was it sort of through experience and realizing when things weren't working, and sort of guessing it would happen next? Did you have any mentorship, or did you read stuff from anyone else to figure that out? How did you learn how to be a maintainer?

**Christopher Hiller:** Well, a lot of it was by the seat of my pants. Different projects demand different types of maintenance, I suppose. Mocha in particular is a project with a very large user base. The code itself is pretty touchy, so I learned to be a very cautious type of maintainer. I didn't have a mentor. I had become interested in sustainability about when I came for air after the rewrite and decided I need help. "How do I do this by myself? I wanna learn how to do this better", and I started reading articles and such, but I didn't really have anybody to tell me how to do it. I would have loved that; I think there are resources now that I didn't have back then that I would have loved to have.

**Mikeal Rogers:** \[00:11:55.11\] One thing that we've touched on on this podcast before, but we haven't really explored enough is how hard it is competing for people's attention, especially contributors' attention, and I'm just recalling back to 2008 when John Resig first wrote QUnit, one of the things that he kept talking about was that he wasn't saying "Use my test framework", he was literally talking about how fun it is to write a test framework and how much you learn as an exercise.

Still to this day, there are just more test frameworks than maybe any other type of library, and there are more people that just decide randomly to write their own test framework, and I'm wondering if that has been a particular challenge with maintaining a test framework, where people just are too willing to go "You know what? I think it would actually just be fun to go write one of these myself..." Have you experienced that?

**Christopher Hiller:** I've definitely experienced some disgruntled users that did not like our decisions, and "I'm gonna write my own blah-blah-blah..."

**Mikeal Rogers:** We can say Aaron Hammer, it's okay... \[laughter\] He's a good friend, I can call him out.

**Christopher Hiller:** Actually, I think Lab happened long before I came on, so I was not privy to that discussion. But no, that hasn't really been a thing I've been too worried/concerned about; certainly, there have been some newer frameworks that are gaining steam or have got a lot of interest... I'm not worried that somebody who could contribute to Mocha is instead gonna go contribute to AVA or Jest or something that's the new hotness. I'm not worried about that.

What's a little bit frustrating is simply the allure of the new thing, and how "Oh, this is a new project. We need maintainers, we need contributions, it's really exciting! Hey, everybody, let's join up! Give me a bunch of GitHub stars and let's do this!" That's been a little frustrating, because I feel like there's a lot more attention on those other frameworks while there's still many, many more users of Mocha, and it gets a lot of mindshare, but... That's one of those things where it's -- I don't know, it's kind of a bad analogy, but I was gonna say the loudest voices in politics tend to be focused on one particular issue, and you have this feeling that there are actually more of them than there really are... That's not really the case.

I would love to find a way to make a project that's already existing -- and maybe this is what I was thinking about with the rewrite, at least in part, was make it new, make it exciting. Some sort of marketing push, a new website, social media - all that stuff. Word of mouth, like "Hey, what's old is new again. Let's contribute to Mocha! Look how awesome it is!" That would be cool, but I have no idea; I have absolutely no idea how to get that attention for the project.

It wasn't until very recently, I think sometime late last year that Mocha actually crossed 10,000 stars, and there are projects that cross 10,000 stars -- this is just like the little silly popularity contest type thing, and there are projects that will cross that within a week if they get on the right website. It's kind of just -- the old standby; it's kind of boring and dull, it does what it does, it usually does it well, and I think that's why it's so popular. It's just simple and easy and it works.

**Mikeal Rogers:** \[00:16:22.16\] I think in the NPM rankings it's the number one depended upon, right?

**Christopher Hiller:** Yes, and the number two is Chai, which is the assertion library that a lot of people use with it. But yeah, by a long way Mocha is used by a ton of projects on NPM, and even more on just GitHub projects that aren't necessarily published. I never knew any of that before library style, of course.

**Mikeal Rogers:** Yeah... I mean, just for reference, there may only be 10,000 stars, but there are over 200,000 downloads in the last day, so it's definitely being used and depended on at a rate much higher than people are sort of saving it on GitHub.

**Christopher Hiller:** Yeah, and I think that's kind of a criticism that I've heard before, that GitHub stars don't really have anything to do with the actual real-life popularity of a project or the maturity of a project. They're just kind of -- I don't even know what they are. It was cool when we did pass 10,000, but I just wish there was a good way to get more attention, and not do it in a way which is "Help, we're drowning!"

**Nadia Eghbal:** I'm just thinking out loud a little bit, it's probably a known problem with not just maintaining open source projects - I think it's exacerbated there - but any kind of maintainery duty or infrastructure or anything, even outside of software, that it's really hard to keep people's attention, and I'm trying to think about what does keep people's attention, and I think that often it's community... It's what I see in older software projects, at least. There's sort of like a cult of brand or personality or something where people will feel this love and devotion for a project; even if it's not the new hotness, it's the people that will keep it there. That's the only thing I can think of that really competes against shiny new technology.

**Christopher Hiller:** What about instead of just a project that you consume, what if that project was also a platform and people could build upon it and make new things all the time?

**Nadia Eghbal:** That's another way of thinking about it. I don't know if it's possible for every project to be able to do that.

**Mikeal Rogers:** I think even when you get into that space -- Node is sort of in that space; there are other libraries, even smaller ones like Browserify, that you would think that at some point they can maybe be done and that everything would just be built on top of them, but it just never really happens. The world on top of them is changing enough that the demands and the environments that they end up in continue to evolve, as well.

Adam Stacoviak: Up next we're talking about funding experiments. Mocha was asked early on to participate in funding their project on Open Collective, and something unexpected happened. They started getting donations. More donations than they know what to do with. It became a challenge to know what to do with the money being donated; what the project really needed was time, attention and community, and they started asking questions like "How do we raise the profile of this project? How do we turn the money being donated into what the project and the community really needs?"

Money tends to complicate things and create conflict, so is money the real solution to sustain open source? If you have money, where does it go? How do you spend it efficiently? We ask these question and more after the break.

**Break:** \[00:20:24.15\]

**Mikeal Rogers:** Let's get into some funding experiments that you've gotten involved in. First, why don't you tell me a little bit about Open Collective and what made you wanna try that out as an experiment for getting the funding injected into Mocha?

**Christopher Hiller:** I hadn't really considered going for funding before Open Collective. I can't recall, but I feel like that team actually approached me, and I can't recall why... But at the time, they hadn't had too much interest, I believe; there may have been a few projects that had what they call "collectives." I think Mocha was the first really kind of popular one.

They talked to me, and I said "Free money? Sure, what could it hurt?" I also thought "Well, if this takes off, maybe it's a really good way to get some more attention around the project." Now, I went into it with no illusions that we were gonna get so many donations that I would be able to quit my job and go work on Mocha full-time and live off donations. I didn't think that was gonna happen. That said, that would be cool if that happened, but I didn't expect it.

I felt that sort of thing was more of a means to an end. The end was community, and it wasn't really money per se that the project needed, it was time and attention, and I was hoping that by getting some funds injected into the project, we could use those funds to raise the profile of the project, or that sort of thing.

\[00:23:58.20\] Now, I absolutely don't have any sort of marketing background, I don't know anything about social media; I don't know if I had the money, what would I do with it, and it turned out that not only did I not know what to do, but I didn't even have the time to spend the donations that we had. So it became kind of a challenge to figure out "Well, what do we do with this money and how do we turn this money into what the project really needs?"

Our monthly recurring expenses were $14/month before NPM decided to give organizations to open source or public projects. They made that free, so now we have no expenses, but we have some money, and I don't really know what to do with it. I would love to figure out a way to maybe send T-shirts, or something, to a conference, or who knows what? But as I said, I don't know what's the best use of that money to get more contributors.

**Nadia Eghbal:** Where did that money come from? Is it from companies, individuals? How did you end up having $12,000/year?

**Christopher Hiller:** We had like a one-time donation from Yahoo! of $500, I think. We had a one-time donation from [Auth0](https://auth0.com/) and the other thing was SoftLabs has been donating $500/month for quite a while now, so they're kind of Mocha's big sponsor in terms of corporate sponsorship. There aren't any other corporate sponsors of Mocha other than SoftLabs, and the rest is individual backers. It's usually $2/month, $5/month, $10/month, $1/month, and these are just simply individuals.

**Nadia Eghbal:** That's a lot of people donating $2 or $5/month that adds up to the budget that you have now; it says something about people that love it enough to donate, I guess, right?

**Christopher Hiller:** Yeah, and there are quite a few of those people. What I wanted to do, and I was so excited when we got our first backer, and I sent out a tweet, I was like "Hey, thanks for backing!", and then the next five people that decided to back us and donate, I sent out tweets. Then there was like 100 people, or whatever... And I get several e-mails a day - "So-and-so has donated $2 to Mocha." I want to shake everybody's hand and say thank you individually, but it doesn't scale very well.

I don't know if Sean Larkin and Webpack have figured out how to do that. He spends a lot of time on Twitter, but you know... That doesn't scale. I would love to be able to do that, but I haven't found out a good way to do that yet that works for me.

**Mikeal Rogers:** Yeah, there's definitely a scale issue there. \[laughter\] I raised a very tiny amount of money in Git Bounty, or Bounty Source, or one of those back in the day, and I think the money is just still sitting there, because the Request project just could never figure out what to do with it; we've really had the same problem. You obviously have a lot more money, so you could figure something else out... But what's keeping you from paying somebody - or even yourself - for a few weeks to build out a new feature, or something like that? Are there some incentives that you're worried about, or messaging that you're worried about around that?

**Christopher Hiller:** \[00:28:04.03\] Yeah, we tried that, and there were a couple things that needed to happen, to get done. There was myself and a couple other maintainers; we worked on these tasks and build for it, and we had kind of decided, "Okay, we're gonna work on these and build for these. You do this, and I do this" etc. That worked out, and then what happened was I wanted to work on something else, and said "Okay, I'm gonna build for this, too", and it was part of this rewrite. One of the other maintainers disagreed and said "We shouldn't build for that." I asked him why, and he says "Well, it's fun." \[laughs\]

That was kind of strange, and I thought "If I'm not having fun, why am I here? And if I can't make money doing thing that are fun, what's the point?" But the point is that people are gonna have different ideas about what is worth actual money. Money tends to complicate things. Who is to say that if I do some task and build for it and get paid, what if somebody came along and said "Well, I would have done that for free"? It just complicates things; I think it creates conflict, where it doesn't seem like the way we tried to do it worked out at all.

I'm not sure how -- I know Webpack has an idea of how to spend their funds; I haven't look too deeply into it, but I know it didn't work out well for us, and we had actually received advice from some other projects that says "You just wanna keep money out of the development, and use it for things like recurring expenses, services and stuff", because it's... What's the word I'm looking for...? Perverse incentives, or something. It can cause issues, and I think a lot of people in open source software are kind of afraid of money, and I understand, just from personal experience, that it can cause problems.

**Mikeal Rogers:** Yeah, I spoke with Sean a little while ago and one of the things that he said was that he focuses on things that nobody else wants to do because of this particular problem, but at the same time Sean has a full-time job and he's doing like 20 hours a week of work that nobody else wants to do on Webpack. That's not sustainable, he's gonna burn out. I don't see a world in which he doesn't burn out doing that.

**Nadia Eghbal:** Something I think has been a recurring theme this season too, thinking about if you have money, where does the money go and how do you spend it efficiently, and for both of your stories -- you know, a small amount of money can be really awkward amounts of money, because what do you do with that? A big distinction that's been coming up for me is "Do you fund a project? Do you fund Mocha, or do you fund your time?"

The examples I've seen that have been successful are where the project itself can be sustainable in the sense of money is not coming in and out of the project - beyond, like you said, recurring expenses - but it's more about if someone already internally wants to work on the project and is able to find time, whether it's from their employer, or whether they raise money and get people to do it, or whatever... That works. So I'm wondering, have you ever asked an employer to work full-time on Mocha, or have you thought about finding ways just to sponsor it yourself?

**Christopher Hiller:** \[00:32:26.12\] Well, I have a full-time job as well, so working on Mocha in any regular capacity is just kind of beyond me right now; I'm not able to do it, and of course, I tried, but I burned out. So if I was going to do that, it would need to be through an employer, but I have yet to have an employer where working on Mocha kind of made much business sense for them.

It's a tough one, because Mocha is part of the test stack, so number one, your product manager or what have you is not going to care too much about what that test stack looks like, and is only going to really care if the software is quality. So basically, we're gonna leave the testing up to the developers, and that's their thing.

It's really hard for developers to get visibility for these types of tools that they use, and justify to employers that "Yes, this tool we use is very important." There are other tools, like maybe a Webpack, that help build production websites, and that's big. That's something that they can kind of wrap their head around, but a project like Mocha, or maybe a project like Babel - these are behind the scenes things that aid development, they don't have a direct impact on your download speeds or whatever of your site, or what have you.

So it's kind of tough to just -- I can't even pitch it to my employer that I should spend time working on this thing, because I can't justify it to myself... Like, "Yeah, this project needs help, but it really has nothing to do with the business goals." It's just all about "Yeah, we want quality, so write the tests", but does that test framework really need me to hack on it to make that quality happen? The answer is no.

**Nadia Eghbal:** If you were starting all over again and you had to think about -- or let's just say even if you were TJ and you were trying to figure out where this project goes long-term, is there anything that could have been done differently, or is this just sort of the inevitable way that projects unfold?

**Christopher Hiller:** I don't wanna blame TJ, because it's not really his fault... If we as the open source community had known in 2011 (or whenever he wrote this) what we know now about how to grow and sustain a project, sure he would have done things differently. Why wouldn't he?

If I was going to start over and do it again, sure, I would do it differently. I would make things much more friendly to contributors; I would work a little harder on documentation. We would maybe have chat rooms, forums, all sorts of other things that weren't really part of the idea.

\[00:36:16.11\] I think Mocha was another project where a developer decided to scratch their own itch and make a tool that was useful for them. I don't know if he envisioned that it would get as large as it has - large in terms of the userbase - but yeah, definitely things would have been done differently if it was starting today, like new projects do. I see lots of new projects with contribution guidelines and very clear bullet points on how to contribute, how to become a maintainer and codes of conduct etc.

Actually, just today I merged a code of conduct for Mocha, and that was a long time coming.

**Nadia Eghbal:** Nice!

**Christopher Hiller:** I can't remember who it was, but somebody sent a PR, and yeah.

**Nadia Eghbal:** That's awesome.

**Mikeal Rogers:** Awesome.

**Nadia Eghbal:** You also joined the Javascript Foundation recently, right? Did you pursue any other form of project-focused funding or support, any of those types of grants?

**Christopher Hiller:** Yeah, so Mozilla has an open source funding program called MOSS. What the program does is it awards grants to various open source projects. I thought "Well, maybe Mocha would be a good candidate for that." The reason I thought that was because Mozilla publishes a list of open source projects they most widely use internally, and the top project on that list was Mocha, so I thought "Mozilla is invested, in Mocha... Why not?" So I reached out to some people at Mozilla. The feedback was kind of mixed. I heard that somebody would be willing to sponsor me...

So part of that grant process is that you need an internal Mozilla employee to sponsor or vouch for the open source project, and I found somebody to do that, but I had also talked with a few people and I had listened to this podcast, the Request For Commits podcast, and sometime back there was an interview with Max Ogden, I wanna say...

**Nadia Eghbal:** Yes!

**Christopher Hiller:** And the whole episode was about grants and funding, and how to get a grant for your open source project. So I listened to that and I was kind of like "Eh, I don't think so..." \[laughter\] If you're doing that, if that's your thing and you have time to dedicate to that - sure. It sounds like there's a lot of networking involved and hobnobbing. I believe one of those things that Max said was "Don't apply for a grant unless somebody at the Foundation approaches you and asks you to apply for a grant", and I thought "Well, nobody asked me, so maybe that's not a good idea." But furthermore, it certainly sounded like there was a lot of time and energy involved in securing grant funding that I simply didn't have.

\[00:39:55.02\] Another issue with Mozilla in particular was if they are to award a grant, they are -- I don't know if the text says they will not or that they're unlikely to, but it's something like they are unlikely to award a grant to an individual. So if I was to get a grant from MOSS, I would need some other entity, a legal entity to accept the funds and disburse it to me. I don't have a legal entity, I am just me. Mocha does not have a -- there's Open Collective sponsors, sure, but there's no company behind Mocha. It's a pure bootstrap open source community project. It came from an individual.

So I went to the JS Foundation and asked "What if you went ahead and wear my legal entity if I was to apply for this MOSS grant?" The reaction was mixed again, because I don't think they've had great success with paying individual or disbursing funds to individuals for code, so I wasn't sure what the story was there, but he said that "We would consider it, but you would have to apply and you'd have to write up the grant proposal."

At that point I was like "I don't know... I don't have time to write up this grant proposal. I'm not even gonna embark on this if I'm not pretty sure I'm gonna get it", so I didn't. That's kind of the story of the MOSS grant.

**Nadia Eghbal:** I'm glad we played some small part in that decision. \[laughter\] I mean, one way to read it is it's a not ideal outcome to not have applied for a grant, but I think... I mean, this is my experience with adventure as well of people -- it's better than the belief that some people have of "This is just free money, it's super easy to get; I'm just gonna try it", and not knowing all the hard work... It's like a full-time dedication kind of thing to be able to get that kind of money, so in a way I think it's actually a really good thing to know that about yourself and be like "You know what? I'm not gonna do that."

**Christopher Hiller:** Well, it's not even about me, it's just like I wouldn't have known that. I wouldn't have know that "Oh, it's not just free money; I can't just apply and wait for a track", you know? I wouldn't have known the difficulty because I don't know anything about grants - I've never applied for a grant - without the show, or just talking with a couple of people, but I knew that I was simply not gonna have the time to dedicate to pursuing grant funding. Again, full-time job, so I chose not to do it.

Adam Stacoviak: In this last segment we ask questions like can a project do all it needs to do and be done? Can a project be done? When can a maintainer walk away and say "That's as good as it gets." Specifically, Nadia asks Christopher when does he feel like he can step away from Mocha and what keeps him from doing so, if he hasn't. Stick around.

**Break:** \[00:43:29.10\]

**Nadia Eghbal:** We've talked to other folks before who have talked about whether a project can just kind of be done at some point, and what that would mean to be a maintainer on a project that could just sort of be done. And you've talked a little bit about this, of trying to figure out the scope of Mocha moving forward, or whether it needs new features or not... Do you feel like Mocha could ever just be done and you could walk away and say "That's as good as it is"?

**Christopher Hiller:** Yeah, I think we can get there. It could be done now if we wanted it to be done. We could decide not to add any new features. There are certain things that we do have to keep adding, for example as the Node project adds new flags to its coming online client. Mocha kind of supports those and passes them through, so those would need to be added. But what has kind of stopped me from just -- I guess that would feel to me like I failed in some way... It would feel like giving up, because I know there are a lot of people that could use a couple new features in particular. I know that I would like some of those new features. I know that what I'd really like to see for the project is a really solid API, a really solid foundation on which people can build other tools for testing, and really great integration with IDE's and text editors, and kind of like stuff that TypeScript has done.

Mocha simply is just not there, it's not where at least personally I am kind of happy with it. I don't really want it to be done, because it's -- I guess it's kind of personal; I feel like we could make not just myself happy by adding some things, or refactoring some things, but quite a lot of people, too. There's still plenty of work to be done on making the development experience better. For example, Mocha still has a makefile, so you have to have that whole toolchain installed; it's not just pure Javascript. You can't just run NPM, run whatever, and have your scripts run, and everything be javascript. If you're on Windows. You've gotta install Visual Studio, or what is that thing - [MinGW](http://www.mingw.org/) - to even contribute to Mocha, to even build.

So there's plenty of things that need to be fixed there. I don't really want Mocha to be done, but it works, and it works really well for a lot of people, and from what I can tell, it's pretty solid. Certainly, there's some issues that people come across from time to time. There are quite a few issues that have never been resolved, but they're not things that we're getting just hammered on. If we break something major, we hear about it; that's gonna happen simply because of the number of people that are using the software. So I don't want it to be done.

**Mikeal Rogers:** \[00:49:54.11\] I'm curious what you think the scope of Mocha is... Because I can see this kind of alternate world where the scope has been completed. You define the test format. A lot of these other competitors that we were talking about earlier actually use your test formats, and you can use the same tests between the different runners and stuff like that. So there's obviously a lot of extra value that Mocha does on top of that, but there's this alternate world where you can say "Well, that's our scope, and if you want TypeScript support, there's this library, and if you want Visual Studio integration, there's this library."

It sounds like what you really wanna see from the project, what your scope is is a much more useful, full-on test runner... So I'm just curious what you feel the full-on scope of Mocha is.

**Christopher Hiller:** I don't think it's much different from what it had always been declared to be, which... Mocha does two things - it provides a convention for writing tests; actually, it provides several different ones, so you can choose. But it provides this convention for writing tests, and then it provides a way to execute the tests, whether that's in the browser or in the command line, and... I guess this is three things - so then it provides a reporter that reports the test results. So it's not like a "batteries included" thing, and this is a criticism of it; some people like it, some people don't... It's just one of those things.

It doesn't have assertions in it, so you need to pull in another library. Mocha won't do much just by itself. I don't think the scope is much more than that. I think what -- I'm talking about in the differences, it's that it does those things that it does, but it does them better, and it does them in a way that allows people who want Mocha to do more to build on top of it and make it do more. That's what I really wanna see out of it, and right now it's just not there. It doesn't have a -- the API is roughly documented; for all intents and purposes it's undocumented, and there are quite a few packages that are built on top of Mocha anyway, and consuming output that was never intended for machines, and stuff like that. That makes it difficult to make certain changes, knowing that if I changed this human-readable output just, just like -- I draw a parallel between and Node, where if you change the text of an error message, you're gonna have to put that in the next major.

**Nadia Eghbal:** So what about Mocha being done, but then there's you and then there's the projects. At what point do you feel like you could step away from Mocha? And if you haven't done it yet, then what keeps you from doing so?

**Christopher Hiller:** Well, late last year I started feeling a bit burnt out on the project after feeling very frustrated about what I saw as kind of a failure to get the attention that I wanted for the project, and get the contributions and maintainers that the project needed... So I decided to take a break from it for a few months.

I did that, and it was okay. There are a couple other maintainers right now who have picked up their contributions. I had kind of raised an alarm on Twitter, I had written a message in our project's readme that we need help. About that time, when I did those things, is when I decided to just kind of take a break... So in the meantime, while I was away, we got some decent progress on the project's needs, and one of those was better test coverage... \[00:54:05.26\] But there have been quite a few people who have approached me and asked how they can help. Of those people, the number of people who followed through is less, and of those people, the number who want to become maintainers is even fewer. We have yet to get somebody on board who wants to be dedicated to it. That's tough.

There's a few options here. One, if I feel that I've done what I can and there's no way this project is gonna get to where I want it to go, I'm just gonna quit. That's just life. It's kind of out of my hands. Obviously, I can't do it by myself; I need help from other people to get it sustainable, and I need help from other people to take the project where I think it should go. And if I feel that's not gonna happen, then maybe I can walk away if I feel like there are people on the project who are dedicated enough to pick it up and run with it. And maybe they have their own ideas, and those ideas are good - then great, let them do it. Again, there are other projects that I'm happy to work on.

So those are kind of the two ways in which I might feel like my time with Mocha is done. If I can kind of limit my involvement and make sure I don't burn out and not let myself get too frustrated, then I can keep with the project indefinitely. We can make baby steps to where it needs to be, and that's kind of where it's at right now.

I started contributing again just a couple weeks ago. It felt good, and I'm just gonna keep at it. I was really happy to see that some people answered the call; this project needs a lot of help. And yeah, we'll just play it by ear.

So that's how I might end up leaving the project. I don't wanna quit Mocha if I don't have to. Or if I stop using Mocha for whatever reason, I might. But I'd like to stay with it.

**Mikeal Rogers:** I think that's a really good note to take us out on. Thanks for coming on, this has been a really great conversation, actually.

**Nadia Eghbal:** Yeah, thanks Chris.

**Mikeal Rogers:** We really appreciate it. We got some incredible insights here, so thank you very much.

**Christopher Hiller:** Thank you, I had a lot of fun!
