**Jerod Santo:** So Working in Public out now, Nadia's new book. This has been a long time coming. It seems like the end of a chapter, at least from my perspective. Does it feel like the end of a chapter for you?

**Nadia Eghbal:** Oh, absolutely... And especially coming on here, since you guys were the first podcast I ever, ever did.

**Jerod Santo:** Wow...

**Nadia Eghbal:** So we're really coming full circle here.

**Jerod Santo:** And big announcement, this is actually your last podcast ever as well.

**Nadia Eghbal:** Ever! \[laughter\] Mic drop.

**Adam Stacoviak:** Out! Well, that's the best way to do it, is do it with a podcast and a book.

**Jerod Santo:** Yeah, they're book ends.

**Adam Stacoviak:** Leave the stage. I've said all I had to say.

**Jerod Santo:** So big release, big book, in print, Working in Public... A huge culmination of some of the work you've done over the last few years. Start by catching everybody up... Regular listeners know that you came on the Changelog long time ago with your big realization that there's this gap in the open source world, which was funding; this discrepancy between people who were maintaining this invaluable software that's really the infrastructure of the internet, and a lack of support for those folks... This was something that we knew from the trenches, but many people had no idea about. You kind of uncovered that. You came on talking about fundraising, and I think back then the idea was maybe we can get some VC's to support this type of thing. You've learned a lot since then...

Maybe start with just the history. You went to GitHub... Tell the logistical history real quick, to get to where you are now, to writing this book. Then we'll go into the learnings and what's in there.

**Nadia Eghbal:** Yeah, it start with this open-ended exploration that didn't really have any goal to it. I was just going around, talking to open source maintainers, trying to just dig into my own research project. I wasn't working anywhere at the time... And then I wrote this blog post that just sort of like announced that I'd been having these interesting conversations with maintainers, and that open source didn't really seem -- it felt like there was just stuff missing from the narrative of how open source was actually working on the ground... And just saying like "I'm gonna be writing and researching about this in public. You can follow along if you want." I got a really great response to that blog post. We did our first interview together shortly after that, but I still didn't really have a plan... I think that was pretty early on.

So I was just continuing to write, and had a lot of open source maintainers reaching out, and just folks that are peripherally involved in open source. The big thing we were talking about then was "Everybody is relying on open source at this point." It's not just this side hobby thing. It's critical infrastructure for how the world works and runs today, but so many maintainers feel burned out, stressed out, like they're having to do this in their spare time, and don't have any really direct way of working on open source - but it's something they really love - other than the biggest porjects, like Linux, for example, where you can find a job working on those kinds of things. But for all these smaller libraries and projects that kind of go unseen and unnoticed, who's really taking care of those?

So yeah, I was just sort of like writing about it, didn't really have a plan. I had a grant from the Ford Foundation to publish Roads and Bridges, which was kind of like my field report at the time. And then around the same time I was talking to GitHub about what is their relationship to open source developers in the broader community. Obviously, everybody's using GitHub, but have they been taking the steps to really understand on a deeper level what maintainers are doing on their platform, and what they need from GitHub? I think right around then the Dear GitHub letter came out, if you guys remember that...

**Jerod Santo:** Yeah.

**Nadia Eghbal:** So it was, I think, several thousand maintainers who had written this open letter to GitHub, published in a dear-GitHub repo. Of course, they were basically just saying "We don't feel heard by GitHub. We have all these needs and we don't know who to send them to." GitHub had spun up an open source team at the time... So they were starting to think about this stuff, and then I was also starting to think about this stuff separately, so we decided to join forces on that. I joined GitHub that summer/fall(ish).

Being there was just a really useful experience in this whole thing. I didn't have any background in open source; I was just curious about what it was like, so I was interviewing and talking to people... And there's a lot you can do to summarize what people are hearing and try to amplify that a bit, and that's what I was trying to do early on. I didn't really trust my own intuition, and I was very aware that I just didn't really have any credibility or any personal experience for open source, and I was just sort of trying to be like "Look, I don't know what this is all about... All I'm doing is pointing to these other people that are working on things that are clearly really used, and they're saying this stuff. So don't listen to me. If you don't wanna believe me, that's fine, but go look at these people."

Being at GitHub gave me even more of just that hands-on experience, and having to really see how the sausage is made at GitHub, and seeing the problems that people were running into, and also just being able to meet and talk to developers from a very wide range of ecosystems. It wasn't just the people that I had known and reached out to; I was just being exposed to so many different kinds of experiences.

**Jerod Santo:** You kind of entered your own experiment. You were no longer just an observer from the outside. You were actually in the community, in the thick of it, which was different.

**Nadia Eghbal:** Yeah. It's helpful to have some skin in the game. And even start experimenting with using GitHub more, and finally figured out how that thing works... Sort of... So yeah, it was so much more hands-on experience. And I think from there, I was starting to test some of my own hypotheses and thoughts about "Is this really all about a lack of participation in open source? What is this model we talk about, of like -- open source is just made up of large armies of volunteers, and it's just all about contributions...?" And just starting to realize that for some projects there really is just one or two maintainers, and there's not gonna be any more substantial contributors, so what do you do in a situation like that? So maybe I was just getting a lot more nuanced at that stage.

Then I left a couple years ago, and then started focusing full-time on basically writing this book and wrapping up some of my own research.

**Jerod Santo:** It's worth pointing out - the book is called Working in Public; it's not about open source, but it's about open source, right?

**Nadia Eghbal:** Yeah.

**Jerod Santo:** It's open source as a lens to a somewhat bigger topic, right?

**Nadia Eghbal:** Yeah. It was inspired by how in the late '90s and the early 2000s, ESR's writing about "Cathedral and Bazaar", everything on search was like happening around that time. A lot of people were looking at open source as an example of what was to come more broadly on the internet. So they were saying "Okay, open source is this thing where there are all these strange developers that get together and write code, and they all know each other, and somehow it all works. This is an example of peer-to-peer decentralized collaboration on the web. It's a promise of what the internet can enable", and people kind of took that mentality and applied it to a lot of things that were very formative to the early internet.

Similarly now, I feel like we're in this second wave, where everyone's online, or at least a lot of people are online, a lot more than before, and we're experiencing some positive and some difficult effects of just the internet at scale. So again, it's like - well, what are our mental models for how to organize communities and think about creators on platforms for this new world? And what I wanted to do with Working in Public was to say "There's actually still a lot we can learn from the second wave of open source as well, looking at modern open source and how it's evolved from those early days", and it can tell us a lot just about what is happening on the internet more broadly.

**Jerod Santo:** And one of the things that you uncovered, which we've uncovered as well over time, is that there's a perceived problem, which first of all, most people don't even know or think about with open source software, which is really the funding sustainability support... And then there's actually more problems, or even more important or seedier problems you start out in the book describing that difference, with the problem not really being not enough contributors, not enough money, which are kind of the things that you think and you hear, but there's problems like use versus contribution. There's a big one-to-many problem, or a small few to a large crowd, which is really overwhelming. Like you said, this is the internet at scale. What brought you to that realization? Was it just the conversations you were having, or just the time in the trenches, where you realized "More contributors doesn't necessarily help this project, because the number of contributors that could possibly be there is incredibly overwhelming to the few people who are there right now.

**Nadia Eghbal:** For sure. I think not that many people that are working in open source get a ton of exposure to other ecosystems, so you tend to know the communities in which you operate. But there are a lot of parallels and contrasts across different types of open source projects, different languages... And so I think being in a little bit more of this zoomed out, research type position allowed me to have this exposure to lots of different types of project, and from there I started kind of zooming out and being like "Okay, we have basically like one form of rhetoric to talk about how open source works, which is that it's this large communitarian thing." That does seem to be true for certain projects, but then I can point to all these other examples that don't seem to fit that model, so why is that...

I think a lot of the early open source rhetoric has just sort of been holding people back, and because there really are a lot of amazing examples of these more large-scale, highly collaborative projects to point to, and we've even talked about those before... A lot of what has happened in the Node ecosystem and their focus on liberal contribution policies I think is really emblematic of what that future can look like, where you just enable lots of people to work on a project. So I'm not saying that it doesn't exist at all, but those rules don't seem to apply or work on a maintainer who's got a small library, and just kind of largely doing it by themselves, but the project is being used by millions of people.

For a while, I just wanted to be like "Okay, clearly there's just something wrong with the project, and if only we can just restructure it somehow..." And I think it was sort of being more in the trenches and having to really grapple with those questions, and to be like "Well, why is that not changing here?" and then again, just trying to zoom out and be like "Okay, what are the patterns that I'm seeing here, that explain that?"

**Adam Stacoviak:** Did you ever get into empathy-itis? Or I don't know how to describe it, where you get all these emails -- you mentioned the book, getting all these emails... Your inbox getting flooded is a good quote. When your inbox is flooded, you're getting a lot of people saying "I've gotta open source this", or these problems or that, and they're coming to you - not so much for a solution, but more just a shoulder to cry on, like "I've got these problems. Please help me, or just hear my issues." Did you ever get into a situation where you're just like "I have no idea how to help you, or what advice to give you. I've got these goals in mind for my job, and research and plans...", but did you ever get bogged down by the empathy and the weight of it all?

**Nadia Eghbal:** Very. I'm gonna steal that term, empathy-itis, because it was definitely inflammation of empathy; it was a thing that I was experiencing. Gosh, I mean, joining GitHub, for one thing, was already this existential crisis for me, because I was like "Well, I said I was gonna solve everything. What if I can, if I'm at GitHub?" And then being at GitHub, I also just felt this stress of like "Well, now I'm at GitHub and I should be able to solve everything, because of course, I'm here on the inside", and that was really stressful and hard... And then even with writing the book - it was just sort of like "Is it even useful to be writing about these things? Maybe I should be doing more things."

Something that helped me over time - I wish I just had more of this early on - I didn't know any other independent researchers, or just researchers in general. I guess when I really rewind back to the beginning, it's not like I ever said I was gonna single-handedly solve everything. I was just interested in a problem and writing about it, and I think because I got so overwhelmed by all these amazing stories from people, I think I felt this burden to do something about it, and like if I can't fix it, then it's my fault...

Sometimes they are very emotional things that people tell you and share with you, and you just wanna feel responsible for fixing it somehow... But in talking to other folks that have just spent a lot of time working closely with communities that they're not necessarily a part of, but are just trying to describe and translate them outside of those communities, and I just learned a lot of better practices about how to put a little bit more of like a wall for myself to just create a little bit more boundaries and mentally separate myself from my work sometimes, and be able to turn off and not stress out so much about it. But it definitely took a little while to get there.

**Jerod Santo:** One comparison that you draw, which Devon Zuegel also drew with us here on the Changelog when we were talking about GitHub Sponsors, which has left an impression on me and I think about it more now, is the relationship between a GitHub open source developer and a solo creator, a YouTuber, an Instagram influencer, a Twitter handle... I wanna dive into that a little bit more later, but right now I'm just thinking of it in light of the plight of the maintainer - it happens, but very few people become an Instagram influencer on accident, or they didn't mean to make an awesome YouTube channel, and grow it and build an audience. But with open source, many of us find ourselves in the situation where we didn't ask for this much responsibility. We were scratching our own itch, we were hoping a few people would find this useful... A lot of times we were unaware. There's people, especially in the npm community, where all of a sudden your thing just starts getting downloaded in the millions overnight, and it's because some huge framework or some large company has now used you as a dependency... And you're suddenly thrusted into this place of great responsibility, and you're all by yourself right there. It's really kind of crazy. I think that's somewhat unique to open source, don't you think?

**Nadia Eghbal:** Definitely. I actually hadn't thought about it before, but you're right. I think developers tend to be a little bit more just like wanting to be behind the scenes... And yeah, there are definitely Instagram celebrities and YouTube celebrities or whatever who didn't expect to blow up the way that they did... But there's still something there about, like, you recorded a video and you uploaded it, or you took a photo of yourself and you uploaded it, or whatever... And there is a lot of just hard work and hustle that goes into growing those brands... And with open source projects - yes, there is a lot of work around sharing things out and marketing yourself that happens as well... But you're right, sometimes it's just sort of like "I shared this snippet of code... I don't know how people are finding this anymore." In some case their developers didn't even know how widely used they are until they have big companies knocking on their door, asking them to fix things... They're just like "Oh my god, what is happening?"

So yeah, I think it's this feeling of wanting to be a little more out of the spotlight, and like "I didn't ask for this" is amplified in open source. And then also, the aspect of the stakes are much higher. I mentioned this in the book, as well... If you're an Instagram creator and you just wanna check out of your DMs, it's okay if you don't respond to every single DM... Whereas for an open source developer it's like "If I miss a bug report that is critical, then suddenly I have this even bigger problem on my hands, that I especially did not ask for. So it's both that they maybe don't wanna be in the spotlight as much, and the stakes are higher if they choose to not engage. So I think those things make it really scary.

**Adam Stacoviak:** Yeah. Accidental fame and inherited responsibilities sounds like a lot of weight for just someone who's not trying to be famous or take on responsibility. If you're just trying to share your art with the world, which is what code is, in many ways...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I think there's people on Periscope or comedians that had -- if Periscope is still around... Is it still around?

**Jerod Santo:** Yeah.

**Nadia Eghbal:** Yeah, sure.

**Adam Stacoviak:** It's just not used very much. Like, there's people who became famous comedians because of just little skits. So there is still the accidental creator in that realm, that became famous and has gone on to do things... But there's a lot of weight to just the need to respond to a bug report, for example, as you'd mentioned; that's an accidental responsibility that you probably didn't sign up for, and you're like "That's just a bit much."

**Jerod Santo:** But it's like, that video is not deployed into somebody else's life on an ongoing basis. If you walk away from your repo...

**Adam Stacoviak:** When I drive my car, I'm not dependent upon that video performing well.

**Jerod Santo:** Right. You just close your Periscope account, or you just stop posting new videos, and you can then opt out of that fame. And sure, whatever you put out there is out there. It'll reverb down through the ages, to a certain degree... But it's not as if you ignoring that is going to cause a future problem in somebody else's software stack somewhere, and maybe expose some information... I mean, there's so many things that can go wrong in software that it's kind of crazy, actually.

**Nadia Eghbal:** Yeah, it really gets down to, I think -- for me, it very clearly points to maintenance costs being different from these creation costs. And if you think about the example of a viral video that maybe unexpectedly became popular - yeah, sure, someone might have a random huge hit on TikTok, or whatever... But then they can choose to just not make anymore, if they wanted to. It's like, "Well, I had that one really big hit." But if a creator says "Oh, I had a really big hit. Now I wanna start making more videos and leverage that into a whole brand", they can do that. But you can think of that as they're just trying to build their reputation as a creator, and that reputation in itself is something that requires maintenance. They have to keep creating content in order for them to continue to be popular. And I think similarly with open source developers, but even more amplified is if they do have that one random viral library, which is the equivalent of a viral video, then they can't just be like "Well, I just chose to do it once, and not anymore." There is still an ongoing maintenance cost, even with that first thing.

**Jerod Santo:** Just the play on words about a viral library makes me giggle a little bit... Because you know, viruses used to be bad in computer software, but now you wanna go viral... Of course, viruses are once again bad...

**Adam Stacoviak:** Well, it's bad again with the pandemic, so...

**Jerod Santo:** That's right.

**Adam Stacoviak:** It keeps circling back around.

**Jerod Santo:** It's an overloaded word, isn't it?

**Nadia Eghbal:** All viruses banned from this conversation... \[laughter\]

**Adam Stacoviak:** You do mention on the note of platforms and creators -- and I mentioned Periscope; I'm not unaware that TikTok exists, but there are platforms (YouTube etc.) that creators hinge upon. You mentioned the criticalness that the role of a platform plays to creators, and that sort of relationship back and forth. Can you dive more into what you've learned about the relationship between the platform and the creator, and the criticalness of that?

**Nadia Eghbal:** Definitely. Some of this gets into trying to distinguish between different types of communities, and I talk about this in the context of open source projects, but I think it really just applies to online communities more broadly... So one of the things that I do in the book is break down different communities based on their level of contributor growth, versus their user growth.

So you can think of projects experiencing either very high or low user or contributor growth. Two polar ends of this that might be helpful to think about are what I call clubs, which have high contributor growth, but low user growth... So that's a project that might exist a little bit more like a hobbyist kind of meetup/club kind of thing. The example I use in the book is AstroPi, which is a library for astrophysicists, which is widely used by that particular community, but is not really ever gonna go mainstream.

So you have people that have this stake in maintaining it and being a part of it. And then on the other hand you have something that I call stadiums, which are projects that have low contributor growth, but high user growth. That means you only have a couple people that are maintaining the project, or really at the helm of it... And then you have a very broad base of users, that have little context for what's actually happening in the project community. They're just kind of coming in to use the project and leave and go do their own thing.

So the argument that I make in the book is that clubs and anything that has a high number of contributors are less tied to platforms than these stadiums are, with individual creators... So if you're this hobbyist club -- Facebook is maybe a more useful example here, or more concrete. If you're a Facebook group that happens to be on Facebook, you can always migrate to a different platform and create another community or forum somewhere else. Yes, you might be missing some of your features, but we've seen this happen with online communities over time, where they might have started on their own random internet forum, they moved to Facebook, they moved somewhere else. They're a lot less tied to the benefits that platforms provide. Whereas these individual creators who are managing these stadium-like communities are much more tied to platforms, because platforms absorb a lot of the cost for them; things like distribution cost and reach to their own communities - they kind of are inextricably tied to all those benefits that a platform provides.

Actually, there's an example that I put into the book, that since going to print has now changed again, where I talk about Ninja, who livestreams Fortnite, which is a video game, and he rose to prominence on Twitch, which is the default platform for streamers... And he at some point announced that he was moving to Mixer, which is a competing Microsoft platform... And he was paid--

**Jerod Santo:** Payday.

**Adam Stacoviak:** ...an exorbitant amount of money to move there. So at the time that I wrote this in the book, I said "Every once in a while there are examples of creators who are so big that they're capable of moving to another platform", but it very rarely happens. And actually, since the book has gone to print, he announced that he's coming back to Twitch.

**Jerod Santo:** Well, because Mixer is getting folded, right?

**Nadia Eghbal:** Yeah, I think so...

**Jerod Santo:** Yeah.

**Nadia Eghbal:** It's so, so hard to start a competing platform, even when we have all the resources that someone like Microsoft has, and even when you are literally the biggest streamer on Twitch, you still can't leave, because in the end your whole audience is on just on that platform.

We see the same thing with open source projects. There are a few examples that I put in the book. One that comes to mind is the project Babel, that tried to move off of GitHub issues and use Phabricator for their issue tracking, and very soon afterwards came back to GitHub issues, because they're like "You know what - no one knows how to use this other thing. They don't wanna use this other thing. Your audience is on GitHub, so you have to be on GitHub."

So it becomes this blessing and a curse, where yes, if you're on GitHub, having the issue tracker right there does just make your life a lot easier. On the other hand, if you do wanna exercise any sort of independence, it's a lot harder to just leave.

**Adam Stacoviak:** Yeah. It's especially true for politics and things like in these platforms. You can be on the right or wrong side of an issue, for example, and your clients or you all of a sudden gets ejected, or canceled...

**Jerod Santo:** Demonetized...

**Adam Stacoviak:** You're very much tied to even the platform's -- yeah, demonetized... How the platform in general, the social constructs of the platform feels about X. You must be in line with it, or you risk a lot of stuff, essentially. All of the benefits of the platform, in particular - you lose, or could stand to lose those things. You have to play within that rule set.

**Jerod Santo:** Right.

**Nadia Eghbal:** Definitely. Yeah, and it's platforms as governments now, and I think we should take that really seriously, that there is this same social contract that is happening between platforms and creators, and deplatforming is a really serious thing that can change -- it's like kicking someone out of a country.

**Adam Stacoviak:** Yeah. And if that's where everybody hangs out, that's where society happens, not being there means you don't exist, in some way, right? Or a version of it.

**Nadia Eghbal:** Yeah, it's something that I was just trying to highlight in the book, too - these platforms are such a huge part of our lives that you could theoretically; if I wanted to share my photos of my vacation on my personal website, I can do that, but I'm probably gonna put them on Instagram, because that's where my friends are looking. So they really force us to make these day-to-day choices based on where everyone is.

**Jerod Santo:** So we talked about the person who accidentally finds themself in a stadium, in the plight of that scenario. Realistically now, open source has matured and grown up. There's gold in them hills; people see the value of a career built on that. Just like you watch a YouTuber who's got millions of subscribers, and you think "That would be a nice life. I could make a good living doing that", and they make videos for a living. "I would love to make open source software for a living, or just put my creations out there." So let's not ignore the fact that -- a new dimension, Nadia; there's lots of people that see this and they say "I want to be in the center of a stadium in open source. Is the word of warning to them that if you achieve the success, you're somewhat beholden to GitHub, for example, or you're beholden to npm, unless you can make sure that you're somehow diversified in your platform use? What are your thoughts on that?

**Nadia Eghbal:** Well, I think the argument I wanna make is I guess maybe not even just pronouncing judgment on it one way or the other, but to point out that whether we like it or not, we are tied to platforms. I mean, especially in open source; working in open source, you're very familiar with the argument of "GitHub itself is not open source, so how can we really trust this?" and GitLab existing as an open source alternative to GitHub... And a lot of developers are just very concerned about whether they'll be able to exit and whether they'll be able to take their stuff. And yes, you can do a lot of that with Git, but things like issues are a lot harder to transport, and a lot of the features that only GitHub really provides, even if you can fork your code or take the code itself somewhere.

I think one of the arguments that I wanna make is just that I think platforms have won out for a reason, because they do offer a lot of benefits. It's not just that we're locked in against our will; there's a reason why creators have become so tied to platforms, because they do so much of the work that other options can't really give us, especially with GitHub as an example. Stability and security and reliability is a really under-appreciated aspect of the infrastructure of a platform that is pretty hard to compete with for other platforms and other alternatives...

So yeah, I don't think it's necessary that they should be concerned, but just more to be like "Okay, maybe this is like a condition of..." -- what if we start from the premise that things are the way they should be, and there's a reason why creators and platforms can work together really symbiotically... And then I think having that lens allows us to be a little bit more critical about where GitHub doesn't meet its responsibilities as a platform provider, especially compared to other social platforms and their creators... That's a thing that I dive into - Twitter, for example; it may be not the best product example, but one thing that it does do is it makes it really clear what someone's reputation is. You can see how many people they're following, how many people follow them, who of your mutuals is following each other...

So there are these sort of like legible status markers that make it more possible for you to make something out of your reputation, whereas I think GitHub has fallen more short of that, and we should talk about that more, of like "Well, if GitHub is the platform that every developer is tied to, then what is GitHub doing to make it possible for you to work on open source full-time, or to reap something from your reputation associated with your open source work, or whatever.

**Adam Stacoviak:** Yeah, finding that person's profile and their reputation is a few clicks behind the repository URL issue. It's not like in-your-face, can you trust this person/s or organization; it's not front and center.

**Nadia Eghbal:** Yeah. And a lot of them use other platforms to build their reputation. So you can more easily get a sense of a prominent open source developer's reputation on Twitter, for example. But you head to their GitHub profile and it's almost often not even clear which projects are they known for; you can pin things to your profile... And GitHub is definitely making more and more steps in this direction, so it's not meant to be this cynical criticism, but it is just important to highlight that there are these responsibilities that platforms should have towards the creators.

**Break:** \[31:45\]

**Jerod Santo:** So while we're talking about GitHub and their role in everything - since you left, GitHub Sponsors has rolled out. I'd love to get your take on the implementation, the details... Do you think it is serving the community well so far? It's still early days for GitHub Sponsors, but it's out of beta, and it's in many languages and countries now. Undoubtedly, it was being worked on while you were there maybe - I'm not sure about that, but what's your take on GitHub Sponsors and how it's helping/not helping the community?

**Nadia Eghbal:** Yeah, I'm a huge fan. It's definitely the brainchild of Devon Zuegel, so I'm not gonna take credit for it... But yeah, definitely, we were having a lot of those really active conversations while I was at GitHub.

One thing I will say is really cool about my experience with Sponsors so far has just been that - especially as I've been starting to do more non-open source things - a surprising number of people that are not developers and not involved in open source know about GitHub Sponsors, which I think is really cool. So it's clearly making itself known more broadly, beyond just developers.

So yeah, I think it's a really great experiment to have, for everybody to see and to learn from. There should be more examples of platforms that build funding or subscription mechanisms directly into the platform itself, since you can always raise money on Patreon separately, for example, but having sponsorship information appear right alongside your issues or your profile, so you could theoretically see -- if someone sponsors you, you should be able to see that in your issue thread, and only really a platform could offer that end-to-end solution altogether.

I really like that it's very developer-centric and not just project-centric, which I think was another thing that I've just sort of found in talking to open source developers. Historically, we talk a lot about open source as project-centric, and not so much as developer-centric, because presumably there are just fewer open source projects in the early days, and they're much, much bigger... So you can picture -- like, Linus Torvalds is known for Linux or Git; there are just these big projects... Whereas someone like Sindre Sorhus today is just known for doing a lot of cool stuff on the internet. He has literally like thousands of projects (I don't even know; hundreds, thousands) that he's written and published, that are widely used... So I think GitHub Sponsors is taking a step in the direction of saying "This isn't just about sponsoring open source projects themselves, but it's about sponsoring the individual people behind it." It really helps highlight that a lot of projects do just have a couple of critical people at the helm, and those people deserve our attention and support.

**Jerod Santo:** Yeah, it's interesting... We were talking about the platforms, and really, you can see what a platform is all about by what it prioritizes, what it puts first. And in the battle days, as i call them, SourceForge was where everybody went... And that's a place to put downloads first, and also put a bunch of ads first... But it was like download -- I'd go to SourceForge all the time in the early days of my career, and download software. It was where you'd get free and open source software from.

I didn't even realize at times that in that same UI somewhere was like a forum, and issues -- there were tools for the actual contributors. The insiders knew that, because they were on the inside and they were using it to collaborate... And GitHub really changed things, because when you landed on a GitHub repo, especially in the early days - it's still that way now, only it's a lot more design work involved now than it was in the early days... The first thing you saw was the code. You land on a project, and it's the readme now, but it was like "Here's the files, here's the actual source code right here." It was very code-first... And like you said, the interface for lots of people historically into open source has been the projects... Like, "I used this project to solve this problem", but it's not really the people.

Only until recently -- maybe that's why Twitter is the place where people go to build that reputation... And we talked about the GitHub profile; it seems like the people of open source are starting to come out from behind the scenes of their code, and you get to know them. And I think a lot of reasons that sustainability-type solutions are project-focused is because that's kind of what you think about as you are a fringe user of a piece of software - it's the software first, and then you start to maybe realize and meet and interact with the people later. But the first thing you see often is the code, or at least the compiled version of the code.

**Nadia Eghbal:** Definitely. I think it really speaks to the influence that these platforms have as the infrastructure that is literally shaping not just our technical infrastructure, but also the types of conversations we have, and the types of values that we hold. It is still really hard if you land on a project to get a sense of "Who are the maintainers here? Who are the biggest contributors?" I'd always go through to looking at commit graphs and seeing who made the most number of commits to this project, but even that is not always perfect...

So it is very not people-centric, and like you said, I think that is why people do tend to build their reputations more off GitHub... And I think GitHub had this tension of -- I mean, even back in the very early days, when they were building themselves as social coding, it was this tension between the social side and this utility... So it is a utility, and there's a very good argument to be made that it shouldn't be adding in all this stuff that is more reputation-based, and it's more like fluffy, people stuff... Maybe some people just wanna get in, get their code and leave... But if this is the one platform that developers are tied to, I think it's still within the realm of their responsibility to start considering "How do we actually integrate that kind of stuff in?"

**Adam Stacoviak:** Well, the community is -- especially whenever Microsoft purchased GitHub, it became concerned about lock-in. And as you mentioned certain features, like Sponsors, or these die-hard features, where like -- you can't do open source without some of the utility. You begin to have this perspective of lock-in, which is something I suppose we're trying to be concerned about... But there isn't, in particular to GitHub, or open sourcer software, there isn't a great alternative in terms of what it provides... Not so much in its feature set, but its community.

**Jerod Santo:** The network effect.

**Adam Stacoviak:** Right, exactly. The network effect only really exists to the degree it exists inside of GitHub. So every new thing like this is just more lock-in. Should we be concerned about that? Should we be like "Yeah, that's great"? What do you think, Nadia?

**Nadia Eghbal:** It's really tough. I think about this framework of exit versus voice, and when you have citizens of a country, or in this case users of a platform, when is the right time to exercise your voice within that country and be an active, participating citizen, and when is the time to leave, a.k.a. exit. I think we place a lot of emphasis in open source on exit, which makes sense, because developers like to have...

**Jerod Santo:** Autonomy.

**Nadia Eghbal:** ...autonomy over the things that they make, yeah.

**Jerod Santo:** Yeah, autonomy.

**Nadia Eghbal:** It's just extremely -- I mean, the whole developer tool space is just sort of littered with people that are excited to make their own, slightly different version of something else that exists, and I think that's really cool. It's just this ongoing creative space... So I think we are very focused on the exit side of "Well, I should be able to take my stuff with me and go." And again, at its core, you still can do that with your code. I cannot imagine a world where GitHub says "You can't really." You have to be able to take it with you.

But I think we sort of under-talk about the voice side of things. Even the rhetoric around forking I think has sort of gotten in the way of us having the more active citizen-informed conversations... Because even there, I feel like I see this divide between people who say "Oh, you can always fork a project", and that's a big thing about open source. And then a lot of folks in modern open source today who are saying "Look, I know you can theoretically fork this project, but there's so many dependencies on it right now, and other dependencies that are pointing to this particular repo...", all this social infrastructure that GitHub has built around it... It's not actually that easy to just fork. Forking is a technical right. Socially, it's much harder to execute. So we should be concerned, but to me the reaction is not "We should be concerned, and therefore we need to build alternatives and leave." And I think those people will always exist, and I trust that developers are always building alternatives to everything, so I'm not so concerned that that's not gonna happen... But I would like to see people be more active participants in the conversation around "Okay, if we are on GitHub, then what can we do to help GitHub understand and make our needs really clear that we do need these sorts of things?"

**Adam Stacoviak:** Right. In regards to forking, I'll let people read the tea leaves here, but it can take a very long time to -- let's say if a project wants to stop existing, for whatever reason. And you can say "Well, there's a user base there. The maintainer should continue, the BDFL should continue, whatever might happen", but it might literally take weeks to properly fork, rename, point etc. to keep it moving if you wanted to literally fork it. So there's still so much work in the process of forking. The button isn't just "Press in case of Emergency" and it's done, it's a lot of work involved in forking, and sometimes maybe just finding amicable ways forward, or literally just letting it die and discontinue... There's a lot of work, is the point, in forking. It's not just an Easy button, push it.

**Nadia Eghbal:** Yes. There's a lot of nuance there.

**Jerod Santo:** I think it's commensurate to the size of the thing that you're forking, you know?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** The bigger it is, the harder it is to fork. The smaller it is, the less moving parts, less people involved, less redirects to put in place etc.

**Adam Stacoviak:** Which begs to point back to the responsibility we talked about, as well as the community ownership, and say a BDFL model... Or you have one person technically involved in most of the CEO-like roles that you've mentioned in the book, Nadia, where it's like the maintainer is in many ways a CEO of a company... And the responsibility there - if they wanna discontinue, for whatever their reasons are, do they have all the power? Does the community have the power? Well, maybe, but then they've got this painfulness of potentially a big community... And as you said, Jerod, it's dependent upon the size of the community, so it can be very difficult to change these things... Like, "Who's in control? Who has the power?" And it's not even like a GitHub thing. It's not like GitHub has the power.

**Jerod Santo:** Here we are, focusing on the exit. Nadia's like "We should focus on voice", and then we're like...

**Nadia Eghbal:** "Screw that."

**Jerod Santo:** "Yeah, but exiting. Let's talk about exiting." \[laughter\]

**Adam Stacoviak:** No, I do agree though, Nadia. I think -- talk it out first amongst the community is a much better route, because in the end - sure, we're talking about code... But we're talking about people. The code represents a utility to people. So it's humans, it's relationships. And we undervalue the participation of human beings being kind. And there's so much unkind things happening that we need to be more focused on things that are kind, and loving, and respectful, rather than the opposite of those, in communities like this.

**Nadia Eghbal:** Yeah. There's so many fascinating governance questions that arise in open source, that have so much to say for other types of online communities... One of them just being - as you pointed out, "Who even is the community of an open source project?" Because on the one hand, you have this language that says "Well, everybody who wants to be a contributor or shows interest in being a contributor is a contributor to the project." I mean, there's some projects that will go to that extreme and just say "If you think you wanna be a contributor, then you're part of this community", and they do it because they wanna be welcoming. And I think it comes from this really good place of kindness, and wanting to grow the number of people that are pitching in... But I think it really just depends on the type of community that you're talking about, where if you have enough of an active contributor community, that there's a sense of membership, there's a sense of culture for that community - then yes, bringing in someone new to that, that can totally work really well.

If you're just one person who has the most contacts with the community and everyone else is just coming in as a casual participant and weighing in on your issues, and it's sort of just faceless crowds that can be streaming into your project - and we've all seen examples of this happening, where there's some sort of controversy and one maintainer is just suddenly super-overwhelmed, it creates this tension all of a sudden, because it's like "Well, we say that anyone should be able to participate and weigh in... Are your users part of your community? How much say should they have in the development of the project?" And then on the other hand you have, in some extremes, 1% at the helm who's just sort of like "Wait, but none of you all even understand how this project works, even if you are an enthusiastic user." So it just creates these really interesting and challenging situations.

**Jerod Santo:** So you've put this work into the classification of project types, toys, stadiums, federations and clubs... And I like that, because I don't think anyone's done that work before, or at least I haven't seen it. I'm definitely gonna use this as a way of thinking about certain projects... But that's kind of the result maybe - in certain cases - of the way it grows, because it's based on user growth versus contributor growth. What about explicitly stating a project's style or classification? Is there any efforts, or any -- did you see anybody going out there and saying "This is a club." That's a bad example, because that's one that you've derived... Or "This is an open governance project, where anybody can contribute", or "This is me putting my code out there. I'm the only one that's gonna be committing code." You can look at my code, you can use my code, but I don't take open issues. I know people put those things in their readme's and stuff, but we might benefit from an actual taxonomy of like "What kind of project does this want to be?" Not what kind it ended up being, which it seems like is what you have here, but what does it wanna be, in the early days. Is there any work there?

**Nadia Eghbal:** Yeah. Like you said, there are folks that put that stuff in their readme's, or try to reinforce it through issues... To my knowledge, there isn't a currently existing taxonomy, so hopefully those types of conversations will be encouraged, if anyone reads my book... \[laughter\] But yeah, we can see that planned in the software social norms already today. We mentioned Node, and this liberal contribution policy which to me is emblematic of federations, which is what I call a high contributor and high user growth type community. A lot of people that are participating in the actual development of the project, and then you also have this broad user base to draw upon; of course that makes sense, so you're just gonna be trying to bring in more and more contributors.

And then you see maybe on the other extreme a project like Clojure, which I think has done a really good job of being very explicit with their users and contributors in the broader Clojure community of Rich Hickey, who authored it just sort of saying "This is not a democracy." I don't know if he said the term democracy. I think he said something like "Not everything needs to be community-based", or something like that... But really trying to say "It's a couple of us that are focused on maintaining this thing, and these are the decisions that we make. We're not trying to do this by vote." It is just so hard to create and develop and reinforce those norms, and I think to some extent it becomes a stylistic thing of "If that's not for you, even if you love Clojure, maybe you're just not gonna use it. Or maybe yo use it and you're just completely not involved in the project development side of things, and you just don't even think about it." But people do need to opt in and opt out of the types of communities they wanna be a part of, just like anything else.

So yeah, I do think we see this broad spectrum of different projects taking different stances, but how that stuff gets socialized and reinforced just takes a lot of time.

**Adam Stacoviak:** I wanna +1 the need for this taxonomy though... Because I think naming things is so important, and participation in the community based on if it's a stadium or a club will be an indicator. It may be clear, to some degree, but just stamping it would be so much more helpful.

**Jerod Santo:** What are some examples of a club? The one that I think of, which may or may not be, but I think of the Scuttlebutt community, that area...

**Nadia Eghbal:** Oh, that's a good one.

**Jerod Santo:** ...where it's really high "If you're using the software, you're probably a contributor." Really high contributor growth, but it's still niche. It's not like everybody's using Scuttlebutt and doesn't know it, like OpenSSL. Are there any other examples of clubs that you came across as you were building these out?

**Nadia Eghbal:** Yeah, and I mentioned Astro Pi as another go-to example on my mind - and same with Scuttlebutt - where there's a very specific use that appeals deeply to a smaller group of contributors, but it's probably not gonna ever go mainstream. I think there are a fair number of these examples in Academia. Academic open source, by the way, is just this funny -- I don't know, I feel like it is a highly developed ecosystem in itself, but it has all these different rules and norms from other open source, just because there's this academic system on top of it... So it's just fascinating. I feel like someone should just do a long, deep dive on academic open source projects... But I think a lot of them do turn into clubs, because they have this small, passionate group of people that are dedicated and have some specific use case or need for it. I don't know if you remember Todd Gamblin, from Spack...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah, I do remember Todd.

**Nadia Eghbal:** I feel like that one is probably a club.

**Jerod Santo:** The high-performance computing club.

**Nadia Eghbal:** Yes! \[laughter\] The coolest club of all.

**Jerod Santo:** Yes... Huge computers. Yeah, that's a good example. I think also -- I'm sorry to brainstorm now, but I think a lot of robotics projects, or anything that's focused around a piece of hardware, where there's enthusiasts for the hardware, so what springs around it is a club of people writing software for that hardware; Raspberry Pi, stuff like that. Those are good examples of that.

**Nadia Eghbal:** Yeah, that's a great example.

**Jerod Santo:** So federations are pretty easy. If it has a foundation -- it's kind of like a Node Foundation, a Linux Foundation...

**Nadia Eghbal:** \[laughs\] Basically...

**Jerod Santo:** ...although there's also -- I don't know how Linux runs. I know Linus is involved in the kernel in non-democratic ways.

**Nadia Eghbal:** Yeah, I think we just tend to see more complex governance in federations, because there's just a lot more coordination involved. I even think stuff like Rust would be a federation.

**Jerod Santo:** Yes... So what about Google's Go project, where it's open source, but it's Google's Go? The team at Google advances the language. Is that a stadium then?

**Nadia Eghbal:** That's a good question. I think I would call it -- it has elements of federation, stadium and club, in some ways... Go doesn't have a huge user base. It does have that sort of enthusiast vibe to it. Of course, it's widely used, but it's not Python level, or something...

**Jerod Santo:** Yeah.

**Nadia Eghbal:** And then it does have this sort of closed off community of people that are largely developing it.

**Jerod Santo:** Right. It's tough with languages, because they have like the language, which is a software project, but then they also have the community. If you go beyond Go the language and you look at Go the ecosystem - and maybe those individual projects inside there - there's a whole lot of things going on around that aren't Google-driven.

**Nadia Eghbal:** Right. I'm sure even some Go developers are listening now and they're like "It's not all about Google. We do our own thing, too." It's true even for Clojure, which I mentioned earlier; there's still folks that really don't necessarily subscribe as strongly to the feeling of "We have this one BDFL and wanna do more community initiatives." So these things aren't perfectly cut and dry.

**Jerod Santo:** Well, I think it's official, Nadia - you can't retire from the open source space, because you have to build this new taxonomy for us. You're the only one suited for the job.

**Nadia Eghbal:** This is the last, last podcast. I'm never doing one again. \[laughter\]

**Break:** \[52:32\]

**Adam Stacoviak:** So you came on this show 2016, first ever podcast, went on to do Request For Commits, ended up at GitHub. You learned a lot there. Was your plan to go to GitHub part of the overall plan to research, or was it part of this bigger thing? I think the bigger question I'm asking you is more like "What are you optimizing for?" You've got this book you've written, maybe it's your Magnum Opus, I don't know... You're talking about this as your last podcast... What are you trying to do? What have you been trying to do, Nadia?

**Jerod Santo:** I think she's joking about that...

**Nadia Eghbal:** \[laughs\] Yeah, for the record, this is not the last podcast. If you're listening to this, I will still come on your podcast.

**Jerod Santo:** Dang it.

**Adam Stacoviak:** Touché!

**Nadia Eghbal:** \[laughs\] People seem to ask me that a lot, like "What is your deal?" and then I never have a good answer, and then I'm like "Jesus, am I doing life all wrong?" \[laughs\]

**Adam Stacoviak:** You seem like you have a plan. You're operating as if you've got a blueprint, a plan you're working from, and I'm curious what that might be.

**Nadia Eghbal:** Yeah... I mean, I'm happy whatever's going on my head, but I don't really know what's going on in there. The first thing that always comes to mind is I'm optimizing for learning... And that's sort of why over time -- I mean, in 2016 when we were first talking I don't think I really identified with this label, but over time I've really come to just think of myself as an independent researcher, regardless of what I'm doing. Right now, my day job day-to-day at Substack is not as an independent researcher, and a lot of people have actually asked me "At GitHub were you doing research?" and I was like "No, I was working in developer marketing and product." But I see all of that as like -- ideally, I like going through these cycles of, okay, I'm learning about a topic, I find it really interesting, I'm doing some sort of unbounded exploration around it at my own pace, and then I kind of light upon something that I find, that I would just wanna go deeper on and understand.

The way I think about independent research is you both have to balance this theory side of it, where early on, as I was saying, I was going out and having these conversations with developers, but I'm not doing anything myself yet. And then balancing that with the practice side of things, where then I went to GitHub and actually had to put my money where my mouth was, and was wrong about a bunch of things, and had to refine a lot of things...

So yeah, I guess my plan is basically to just go between those two things. I didn't even leave GitHub to write a book, I just left because I knew that my views on some things have changed based on my experiences there, but I hadn't had time to just zoom out of the day to day of working at GitHub to understand the topic better... So I ended up moving to Protocol Labs, which is a company founded by my friend Juan, who just gave me a place to do that independent research and have my own space... And then that ended up turning into a book. But I didn't even really have a plan with that.

But even in the course of writing the book and seeing a lot of the parallels from open source to other online communities, and just the development of the web in general, is also in large part why I'm at Substack today, which is my new day job, where I'm looking at different kinds of communities outside of open source. But yeah, I just expect that cycle to go back and forth.

So yeah, I don't know... I hope that the book, and I hope that the conversations that we're having help encourage more people to think about this stuff, but I don't have a deep, grandmaster plan beyond that.

**Adam Stacoviak:** I said on a podcast recently "Always be learning." ABL. Instead of "Always be closing", "Always be learning."

**Nadia Eghbal:** Nice. I love it.

**Adam Stacoviak:** Because if you're somebody who's curious, and then well thought, like you are, where you can put those thoughts that you learn and you think through and you ruminate on different things, and you can actually put those back out into the world as like new learnings for others to follow - we need people like that. Not everybody has that skill. It's a skill you can learn and grow, but some people just get it faster than others, or understand it's even possible, and I think you've done that.

**Nadia Eghbal:** Yeah. It's fun for me. Some people will get their jollies off something else, but for me it's definitely just learning and then sharing what I've learned.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** What are your biggest learnings over the last two years then? I'm not gonna ask you to distill your entire book into a few factoids, but... You know, when you learn, you have big things and you have little things; you know, like you pick up a pebble along the way, but every once in a while you see bedrock, and you're like "This is true. And I thought it might be true, but I've learned that it's true, so I can actually pass that on as a truth." Do you have any of those that stick in your head, where it's like "I didn't know this at first, but I know it now. I don't know if it's useful to you, but this is true"?

**Nadia Eghbal:** The big switch that flipped for me, I think, was realizing that there's a difference between something being public and something being participatory. It has sort of just boggled my mind as I did a lot of research around online communities in general for this book, and just trying to find some framework somewhere to understand how do we talk about communities, and how might we talk about them differently when there are these communities at scale... And it just feels like whenever we use the term "community", we always talk about it being this very highly participatory thing, and I think that gets especially amplified in open source, where it's like "Anyone can contribute." But then even if you drill into open source community dynamics outside of open source, they still talk about what happens when, for example, newcomers overwhelm an existing community; there's the eternal September problem... And it just amazed me, I guess, that that hasn't made its way back to open source.

So I think once I felt more confident being able to say "Okay, it's a community, but there's still rules", and there's still an existing culture and set of norms that come with the members of this community, and I dive into a lot of the theory on that in the book... I don't know, I guess part of me then was like "Why is it so controversial to say that?" I was actually very nervous as I started getting into writing the book, because I was like "Is it okay to say that not all the things that are public should be participatory, or have these conditions attached to them?" And then seeing that kind of bear out slowly... I mean, the development of group chats, and these quieter, more private places on the internet, and just people taking their more controversial conversations to private threads, where they feel like they can have just higher context with people that know them already - that started happening slowly as I was writing the book, and I feel like now it's totally fine to talk about that happening, and it's not this horrible, controversial thing, but it's just so interesting to see how those two things are happening in parallel.

**Adam Stacoviak:** The real challenge is whenever something happens in private like that, and it becomes public.

**Nadia Eghbal:** Right.

**Jerod Santo:** Yeah.

**Nadia Eghbal:** Which we're seeing now playing out.

**Adam Stacoviak:** Right. I've seen a couple examples I wanna highlight in particular, but where there's conversations happening between people who have context, so back-story, and can potentially be willing to see different perspectives or facets to a problem and not judge that person(s) discussing very hard problems gets out into the open, into the media, into public... And it's like, all judgment rains down, because there's no back-story context, or -- I'm not saying anything in particular, but it's just a challenge whenever you have these scenarios where you wanna be private about conversations that may deal with social problems, or whatever... And they're out in the open. There's just so many hard problems to talk about that don't have easy answers and easy language that comes with talking through them.

**Nadia Eghbal:** Yeah, and I feel like a lot of this has just been developing into identity politics, and the wars out there are wild...

**Jerod Santo:** Yeah.

**Nadia Eghbal:** And part of wanting to just write a book like this is to be like "Okay, I'm not gonna take those kinds of sides. I'm just trying to understand what are the actual patterns and structures of these communities that can help inform these conversations", and then "Here are some of the conclusions I arrived to." I would love to see more of that happening, and we are seeing more of that happening... But we need to understand what's going on here, and it's not just sort of like -- we're not gonna shout so loudly that the other side is like "Oh, you're right", and walk away. There's actually just sort of like deeper social infrastructure things that need to be resolved here.

**Adam Stacoviak:** Well, your book uses open source as a lens to view many things... What does open source have to say about that, in terms of the way communities are run (healthy, unhealthy), the way they interact, private conversations - how is that played out in open source, these scenarios?

**Nadia Eghbal:** I think the maintainers who've found some semblance of peace and been able to continuously manage open source projects - yes, sometimes it comes from getting funding, but one thing I wanted to highlight in there is it's not always about funding. Even if you're making money working on open source full-time, you can still feel super burnt out by just the scale and intensity of public interactions that you deal with... So I wanted to go one level deeper on that and just be like "Okay, what are the maintainers who are doing this well doing?" I dive into some of those things, and a lot of it is really just about boundary setting; reducing your in-bound volume is another aspect of it, of "How do I just cut down on the number of comments or issues or pull requests that I receive?" So part of it is just like maybe not as widely advertising participation... And then yes, some of it is just sort of willfully being like "Look, I'm not responding to things, or closing issues and being more proactive about that, and not feeding the trolls, and all that." So yeah, I think there's just a lot that they just have to do to be able to manage that day to day, and I think we can probably learn from that, too.

**Jerod Santo:** Have you found yourself retreating into the quieter spaces of the internet? I definitely have. The smaller, tight-knit, non-public-by-default social networking tools that allow me to stay connected, but in smaller groups, where I don't feel pressured, or feel like I have to take part in a lot of the public debate or public conversation...

**Nadia Eghbal:** Definitely. I still read Twitter regularly, but I don't tweet very much at all anymore. Sometimes I feel guilty about that, but I don't know, I don't feel like I have anything I wanna say... But I am really active on a lot of my group chats, and smaller groups with friends.

I really have come to love writing a newsletter, which feels a little bit more private to me, because it's like - I'm sending out an email, and if you are getting it, you've subscribed to my newsletter, so you have some idea of who I am, and there's just a little more of a high-context interaction... And it does just feel a little bit more like -- most people are just reading the newsletter and then going about their day; I get responses, but it's not the same as a tweet, where you're really actively optimizing for engagement. I feel like having those long-form spaces - podcasts also being an example of that - is just like... I don't know, we can have a conversation right now, and that's nice.

**Jerod Santo:** Yeah. So we've definitely seen the return of email as a thing, and you're right at the bleeding edge of that. Substack is an email-based community, lots of newsletters... First of all, people are realizing that a direct connection to others is better than a platform to connection... Because like we were talking about earlier, when the platform disagrees with you, you lose access to your audience or your friends, or whatever that group of people is... But with email - the beauty of email is the federation and the lack of middlemen, so to speak... So there's that, but it also is kind of a more personal medium, for multiple reasons. It must be a place that you're interested in, because you went to work at Substack.

**Nadia Eghbal:** Yeah. And a lot of that was really directly informed by the stuff I'd seen in open source. One of the things that I talk about in the book is this idea of like a one-way mirror behavior pattern or interaction, where you can put things out in public, but you're being a little bit more limiting about who's participating back. That's a pattern that I've seen work well for open source developers, where it's like "Yes, all the code is public. Feel free to take it." Like, "How responsive am I gonna be to the people that are trying to actively develop it?" Some developers say "I'm actually just not really looking for contributions. I'm very happy to discuss it with you." They're are putting down those boundaries. So I think one thing that is very appealing about newsletters right now is that you can also similarly have those boundaries and just say "Look, here's my long-form writing." You can't write at that length on Twitter, for example... So you can really be yourself, and think out loud... But it is itself a community. It's a different type of community, because it's centered around the writer, and that person, which is more of that stadium type model that I was talking about.

**Jerod Santo:** I mean, it's kind of like blogging, but there's no RSS feed. You're just delivering the blog into the email inbox.

**Nadia Eghbal:** Yeah. Technically, you do get a RSS feed if you want one, but...

**Jerod Santo:** Both...

**Nadia Eghbal:** ...the email delivery is definitely the major difference.

**Adam Stacoviak:** Right. The subscription process, the UX is "Give me your email", not "Here's a feed. Subscribe to us when you feel like it."

**Nadia Eghbal:** Right.

**Adam Stacoviak:** The exchange...

**Nadia Eghbal:** It's very opt-in.

**Adam Stacoviak:** You mentioned Maggie Appleton's vision of the web, which is pertinent to this conversation, even in the recent newsletter you wrote...

**Nadia Eghbal:** Yes.

**Adam Stacoviak:** She describes the dark force, the cozy web, digital gardens... Why did that resonate with you?

**Nadia Eghbal:** Yeah, I just love seeing this new and much more nuanced vision of what the web is turning into. I can't even remember all the things that were on there, but you mentioned the dark forest thing, which came out of this blog post that Yancey Strickler wrote, who co-founded Kickstarter, where he's talking about -- he is in turn drawing from Three-Body Problem, this concept of dark forest, of like "The reason why you're not seeing a lot of really interesting conversations happening on the super-public sphere is because that environment is perceived to be hostile, so people are quietly doing this in their own private space." So the dark forest version of the web is one where there are still a lot of really juicy conversations happening, but people might think twice before putting them on Twitter. They might just be sharing it with their friends, which I think is a thing that a lot of people are experiencing.

So yeah, Maggie drew this beautiful drawing of "Here are all the different corners that are lurking in the web." You have these hyper-public spaces, you have the Facebooks and the Twitters of the world, but then you also have the group messaging... Yeah, I love this idea of just having cozy corners where -- to me, some of my groupchats do feel like coming home to something, because it's like "My friends are always there", and you just kind of like say "What's up?"

**Jerod Santo:** \[laughs\]

**Nadia Eghbal:** We're moving towards this world where it's not just this one thing... And it's actually incredible, because it felt like there was a time where we felt like "Oh, we've already developed all the social infrastructure that we're gonna have. We have the major companies, and most of them are owned by Facebook, and that's it." But no, I feel like we're really actually in the beginning of this really amazing renaissance, where people are finding new ways to interact on different kinds of levels.

**Jerod Santo:** Yeah. Kind of a backlash. A correction...

**Nadia Eghbal:** Yes.

**Jerod Santo:** ...from the previous direction.

**Adam Stacoviak:** Well, not all hangouts are controlled by (let's say) regional brands, for example. I'm just trying to think of the analogy where you have a lot of Red Lobsters in every town, or something like that, for example... You don't only eat there. You eat at like "Mom's Pub", or "Joe's Pub", or "Suzy's Pub", or whatever, because that's--

**Jerod Santo:** Lots of pubs, apparently...

**Nadia Eghbal:** A lot of pubs.

**Adam Stacoviak:** Yeah, I like pubs. \[laughter\] Those are hangouts, right? They're not owned by the multinational conglomerates, the powerholders, so to speak. They're ran by individuals.

**Nadia Eghbal:** As well as going to just like a friend's house for dinner, or something...

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah, totally. A backyard barbecue, hang out, whatever.

**Jerod Santo:** Sometimes you wanna stand up in front of a huge crowd with a microphone and tell them something. There's your public platform.

**Nadia Eghbal:** Yeah.

**Jerod Santo:** And sometimes you need that. But a lot of times, all you want is a nice pub and some good friends, and everybody else leave me alone.

**Nadia Eghbal:** Yeah, people talk about Substack being like a killer of some other major social media platform... I actually think it's complementary, and I think it's healthy that we have a lot of these different alternatives and different needs -- or different depending on what you wanna do, as you're saying. Sometimes I actually do need to be on stage and shouting in a microphone, but then I don't wanna do that for everything that I do... So I don't see it as a failure of those major social platforms, I just see it as like we are just developing more nuanced tastes of the ways we wanna interact with each other.

**Adam Stacoviak:** Variety. We need variety.

**Nadia Eghbal:** Yeah.

**Adam Stacoviak:** Facebook isn't for everybody. It's not that it's bad or good, it's just that it's not for everybody.

**Nadia Eghbal:** Right.

**Jerod Santo:** So Working in Public - this is an end of a chapter for you. Any idea what the next chapter looks like, Nadia?

**Nadia Eghbal:** Oh, man... Writing a book was so miserable; I know I'm not supposed to say that as an author... But it's really hard. Harder than I expected. And after it was done, I was just like "Thank God. I don't wanna do that anymore." But immediately, I was just like "Ohhh, I kind of wanna write another one."

**Jerod Santo:** Oh, it's addictive...

**Nadia Eghbal:** Yeah, I think it's like having kids, or something... Not that I have children; maybe you guys can weigh in. Yeah, it's difficult while you're doing it, but it's fun to think about what's next.

**Jerod Santo:** Rewarding.

**Adam Stacoviak:** Similar to a marathon - the best time to sign up for a marathon is right at the end of the one you just ran.

**Nadia Eghbal:** Right.

**Adam Stacoviak:** Same thing with a book - you do that because you're on that dopamine high, like "Oh, it was good."

**Jerod Santo:** Right. It's rewarding.

**Adam Stacoviak:** Especially when you ship it, you're like "It wasn't that hard. I could do that again, I think... Maybe..."

**Nadia Eghbal:** Yeah. Like, "I just miss having that in my life."

**Adam Stacoviak:** Right.

**Nadia Eghbal:** So yeah, I definitely have some ideas for new research projects I wanna take on. It might be fun to pick one up, even complementary to the work that I'm doing day to day... So we'll see. I'm not gonna promise anything yet, but I'm pretty sure I won't be able to resist trying something new.

**Jerod Santo:** Well, should we do a giveaway? We've got some books to give away.

**Adam Stacoviak:** Let's give them away. Is she gonna sign them?

**Jerod Santo:** Nadia is gonna sign them.

**Nadia Eghbal:** Apparently...

**Adam Stacoviak:** Sweet. And we have actual books to give away. Literally, we have the physical books, with autographs by Nadia herself. But... But this giveaway is for ++ members only. If you haven't heard yet, we've launched our membership; it's called Changelog++. In addition to supporting us, going ++ makes the ads disappear and get you closer to the metal. Learn more about our membership at Changelog.com/++.

By the way, Jerod and I talked at length about this program on our recent Backstage episode, so check the show notes for a link to that episode to learn more. Now, as far as giving away books, the first step is to be a ++ member, and second is - well, there is no step two. \[laughter\]

We'll select three lucky members at random on September 1st, which is awesome timing, because that lines up perfectly with the end of our 40% discounted insider pricing. We've been soft-launching this and had a discount for people like you who love this show, listen all the time. We wanted to give back by giving a deep discount.

On September 1st we're bumping that price up 40% on the membership, so right now is the best time to support us, and also save, and also get a chance to get this awesome book. This book looks so cool, too.

**Jerod Santo:** I've seen the print edition. I do not have it in my hand, but I saw a picture. Nadia has one, I saw it on Twitter...

**Nadia Eghbal:** I do.

**Jerod Santo:** ...and it looks like it's really rad. It's a very nice print job by Stripe Press.

**Nadia Eghbal:** It's very pretty.

**Jerod Santo:** And of course, if you don't win, go out and pick up Working in Public. Where can they get it, Nadia? We know it's August 4th, it's out there; you can get it in print, you can get it (I assume) as an eBook... What's the best place to get the book?

**Nadia Eghbal:** Amazon right now... Although I am told that we will have Amazon alternatives soon, for those of you that need them... But yeah, it comes in print; it is a very beautiful print book, so I recommend that... But it's also available on Kindle, and I believe audiobook at some point, too.

**Jerod Santo:** We'll gather the link and put it in the show notes for easy clickings... But of course, search Working in Public on Amazon, you'll also find it. Nadia, it was awesome talking to you again. It has been a minute... We really appreciate you, and we appreciate all the learnings that you shared through this book and through our podcast over the years... And we wish you best of luck on the next chapter.

**Nadia Eghbal:** Thanks! So good chatting with all of you.
