**Jerod Santo:** So we're here with an inflammatory enigma... It's Jeff Geerling. I read that on your Twitter bio, so I assume that's what you are. Hey, Jeff...

**Jeff Geerling:** \[laughs\] That actually has to do with my IBD, internal bowel disease. And I don't even remember --

**Jerod Santo:** Oh, boy.

**Jeff Geerling:** I have Crohn's disease, so my doctor called me that one time... But I think if you work at Red Hat, you might agree with my doctor.

**Jerod Santo:** I thought maybe it was on point, you know, for the recent/current events. I thought, "Well, he has been inflaming things a little bit around here", but...

**Adam Stacoviak:** For sure. I would call it kickin' the hornet's best, really. I feel like they put this post out there - they being Red Hat - and you responded very clearly... In some cases calling them dumb, literally calling them dumb, and laying out all the reasons... But can you explain what exactly is happening right now, to kind of give some context to this conversation?

**Jeff Geerling:** Yeah. I mean, I've worked in the Red Hat ecosystem from the earliest time that I got into Linux. The first thing that I ever did in Linux was I bought Red Hat 5.2 in the CD on the back of a book. And that was when it was Red Hat Linux, and that was when the whole enterprise thing, and the licensing games and things hadn't been really started yet. And it was kind of a heavy time in the Linux world. That was when they were going from "This is a hobbyist thing" to "This is a commercial thing" to "This is an enterprise thing, and we're fighting Microsoft, and fighting all these big, huge things, and Unix."

**Jerod Santo:** Right.

**Jeff Geerling:** So I wasn't super-involved. Back then I was doing graphic design work, so I was on a Mac. But as the years went on, I kept following it, and then I got back into the ecosystem when I needed to host my graphic design things, which are nowadays web projects... I needed to host them somewhere, and CentOS was the only option. I wasn't going to spend hundreds of dollars a month, or a thousand bucks a year or whatever just to host my little blog, or the little small business website, or whatever. And CentOS was seen as this thing that was enterprisy, but free. So yes, I was a freeloader. But that got me into the ecosystem.

**Jerod Santo:** \[unintelligible 00:02:42.11\]

**Jeff Geerling:** I started figuring out how to automate things with Bash, and how to do more Linuxy things. I found out about other Linux distros through CentOS... All this stuff. But it was my gateway drug into the Linux ecosystem, where I was a Mac guy, really. And I used Windows, and managed Windows NT, and did a little Novell stuff at work, but I was generally a Mac guy, and that really got me into the Linux ecosystem, to the point where when Ansible came out, I was big on the Ansible train, and wrote basically the book on Ansible for a long time.

Besides all that, I would say that I am a contributor, I'm not completely a freeloader anymore. But when I saw the statements that were being made around this whole CentOS thing, where it's like we took CentOS, then we killed CentOS, and we came up with CentOS Stream. If you reread those blog posts, the words seem very disingenuous, from an interpretation of somebody who used CentOS. It's like "Oh, CentOS Stream will allow you to contribute more." It's like, well, I wasn't asking to contribute to Red Hat Linux, or Red Hat Enterprise Linux, I was asking to contribute to the ecosystem. I used Fedora. I did all kinds of things. I promoted Fedora, I promoted CentOS, and I even - at a couple places where I worked, I deployed systems that had over 1,200-1,300 Red Hat licensed systems. So my gateway into that world with CentOS.

So the words that they used when they said, basically, like, all these users, you can just use Stream. There's a reason why Rocky and Alma came up out of that mess and became so popular - because so many people, especially little hosting companies... I know a ton of people who manage hosting for nonprofits or small businesses and things - there's no way that they could use Red Hat Enterprise Linux, and they enjoyed using CentOS. So when Rocky and Alma came in, they switched to those, because it's like, well, you've got Debian, which is usually an option, or this other thing that they supported for 5 or 10 years... And it seems like they didn't consider that portion of the community at all when they were making these decisions. It sounds like it was completely a commercial side thing, where it's like CIQ or whoever is taking customers and using free software built on top of Red Hat, or rebuilt; they don't contribute anything to the ecosystem, when in fact, actually, many of the employees there actually do contribute upstream. But of course, those things - we can ignore that, because all they're doing is rebuilding Red Hat.

I think to me, the thing that offended me and the reason I said "Are you dumb?" is because it was just such a smack in the face... Most of the sysadmins I know, almost all the homelabbers I know who are in the Red Hat ecosystem, pretty much to a tee came in through CentOS. And when CentOS was taken away, we were all like "Oh my gosh, the world is ending." But then Rocky and Alma came in, and we were like "Okay, we'll stay in the ecosystem."

**Jerod Santo:** Right.

**Jeff Geerling:** And now those are enemy number one, it seems. And the craziest thing was early on in this I said, "Red Hat, are you dumb?" I really wanted to make a point. I wanted to talk to some of the people internally at Red Hat who I had worked with, like "Look, this is gonna blow up in your face. This is a dumb decision. You need to figure out a way to make the community not hate you." And then they came up with a second blog post, that basically - it implied that hobbyists and hackers would not be good for the commercial Linux ecosystem. It's like "Yeah, hold on a second... That's kind of where everything comes from."

**Jerod Santo:** Yeah...

**Jeff Geerling:** \[00:06:04.18\] Your high and mighty power, your $34 billion sale to IBM... Where did it come from? It didn't come from Microsoft and the Unixes. It came from the community of hobbyists and hackers. And then Mike McGrath clarified in a post on LinkedIn - never on their official blog, or anywhere - that "Oh, we don't mean you when we're talking about freeloaders. We just mean the rebuilds", or the rebuilders. They always call them the rebuilders. And it's like "Well, but I'm still in those communities... So you kind of mean me, but you also kind of don't, just because I contribute some things upstream." But in my philosophy, open source free software is about the community, the users... You don't have to contribute to be part of that. And for a lot of people, the first thing you do is just grab a project and you might change one line of code or a comment and recompile it. Like, that's a step. But they're saying, philosophically, their thing is, if you go into it, it's like "Well, CIQ was taking these contracts and starting to sell it..." It's like, well, that's a different thing. I'm talking open source philosophy, free software, the ecosystem, the community; they're talking about commercial things.

What I see as their end user license agreement workaround - I see that kind of like playing with the community, and kind of playing fast and loose with what brought them to where they were... Because Red Hat came out of the Linux ecosystem. Red Hat uses a kernel that is developed by other people, not just them. So... You can tell I'm a little passionate about this.

**Jerod Santo:** For sure.

**Adam Stacoviak:** Rightly so. I mean, Red Hat wants to control the downstream that comes from an Enterprise Linux that is based upon RHEL, essentially. And by locking up and no longer providing these distros, or their downstream to Rocky, Alma etc. they essentially are locking out their ability to not impossibly, but just hardly be bug for bug compatible... Which is their biggest ploy. Like "Hey, we want to give you what CentOS was, in an Enterprise Linux, free and open source way", and that's just -- they want to control it.

**Jeff Geerling:** Yeah.

**Adam Stacoviak:** Which, from a IBM, billion dollars, IPO-ed Red Hat prior to acquisition totally makes sense to, as a business, control. But you have to take into account, like you had said, the community and the users. And I don't know about you, Jeff, but I'm not in the same community, in only one community. I'm in many different communities. So I may, like you had said, not contribute in this way or that way, but I'm also over here, over there.

So they don't take those multifaceted user types into play whenever they make these kind of moves. It's sort of "We want to stop CIQ, we want to stop \[unintelligible 00:08:40.06\] We want to stop what Rocky is doing. But as a part of doing that, we hurt everybody else, because this is what happens."

**Jeff Geerling:** Yeah. And the other part of that too is like from the business side, as somebody who does -- I don't have as much infrastructure today as I did a few years ago, back when I was consulting, but from the business side, when I see this thing with CentOS 8 - they said, "Here's CentOS 8. It's 2019. We're gonna have 10 years of maintenance, to 2029." Two years into that cycle, "Oh, wait a second... No, we're not anymore. It's going to be CentOS Stream, which is a different thing entirely, and only gets five years of maintenance." That was like throwing a bomb into the community of thousands of users of CentOS, myself included. I had just finished migrating all of my Ansible work, all my CI environments, all my servers and things that ran that stuff over to CentOS 8. And like a week after I finished the last one, that's when that announcement came. So that was like "Bam!"

**Jerod Santo:** Ouch.

**Jeff Geerling:** "Thanks a lot." So my trust level goes from here to down here. I was consulting for Red Hat at this time, too. So I was like "Oh my gosh, this is absolutely wild. I can't believe they did this", but I couldn't say much about it, because I was consulting for Red Hat, and you can't do that.

**Adam Stacoviak:** Yeah, you can't poop on your employer.

**Jeff Geerling:** Now I don't consult for them anymore...

**Jerod Santo:** Yeah, now you can say what you like though. \[laughter\]

**Adam Stacoviak:** You're free, Jeff. You're free. Say what you want.

**Jeff Geerling:** \[00:10:01.13\] So a couple years later, Rocky and Alma come up out of this, and people like me are like "Thank you for saving all this work I did to convert all my ecosystem to CentOS 8. Now I can just move to Rocky 8." Red Hat 9 comes out, sources are still being published like they promised they would when they killed CentOS, and we're all like "Okay, I'm going to upgrade to 9." So I had just gotten about halfway done with my Ansible migration to Rocky Linux 9 for all my test environments, to test all my stuff for Red Hat Enterprise Linux, because I have a ton of users who do use Red Hat Enterprise Linux for my roles. So I'm halfway through this process, and it's okay, "Okay, it's hard this time, because I'm not switching to another thing entirely. It's just changing a couple of strings here and there." Halfway through, they announced, "Oh, you know what? We hate downstreams." Like, are you kidding? They're like "Oh, you can get free licenses. You can get 16 free developer licenses." I'm like "I have over 150 roles. I have over 25 playbooks. Tons of these are being used by Red Hat Enterprise Linux, and you're saying I can take 16 licenses and try to integrate that with my CI environments?" And then after I said that on Twitter, somebody reached out and said, "Oh, we'll get you one of those open source infrastructure licenses." It's like, that's not the point.

**Jerod Santo:** Yeah.

**Jeff Geerling:** Part of the value of that was all of the people who could develop for it. And now we have problems with Apple maintainers are needing to get these special licenses to try to get their packages built for Red Hat Enterprise Linux... It seems to me that there was some impetus that was probably - I don't know, maybe a VP got offended or something by one of the business contracts. Some people mentioned the NASA thing when Rocky said that, "Oh, we've got three NASA contracts", or something, for three machines. I don't think it's that, but something had to have happened that triggered this, because it was a) pretty sudden, and b) there were so many second-level effects that happened that I just -- like, anybody that's in the ecosystem that develops for Red Hat, you would see this... Like "Whoa, maybe let's not double down on it right now. Let's let this stew a little bit, let's figure out a better way to message this. Let's maybe help people--" They keep saying "Oh, just rebase off of Stream." Well, maybe if they had announced "You know what - if we're going to do 10 years of get sources, now we're going to do five years, and we're going to help these people rebuild off of Stream. We're going to give them more options. We're going to help figure out ways to make Stream more stable", because they still had in their documentation "Stream is not meant for production."

But those two layers of trust-destroying exercises, with CentOS 8 being killed, and then the sources being killed, both times early in the release cycle, when everybody had started the port things, those two things make me question anything Red Hat can say about any of their products... And that's why I also am like "Well, Ansible, the community version that I use, which I don't pay for, is downstream of Ansible automation platform. If that becomes a problem, if people like me sell services for Ansible, but don't use Ansible automation platform, am I the enemy? Am I the freeloader?" It's a serious question. The Ansible community is structured a little differently, so I don't have as much fear, but I do still have fear, and I didn't have fear a few weeks ago. Now I do.

**Jerod Santo:** What's weird to me is - you said they kind of despise their downstreams, and it seems like that. If you read the -- TechCrunch did an article today, or maybe it was yesterday, about the SUSE angle to this, which we'll get to, I'm sure, the fork... And they had quotes from Red Hat in there. I don't think it's from -- I think it was from Gunnar Hellekson, Red Hat's VP and GM for Red Hat Enterprise Linux... And in that article, they likened Alma and Rocky to AWS, which has infamously taking open source projects and provided hosted versions kind of on top, and just kind of crushing the little guy, so to speak... Quote/unquote little guy; we're talking about Elastic, which is not little, but there are littler, ones who have their software basically re-hosted and provided by AWS, and a huge competitor... And Red Hat is likening Rocky Linux to AWS in that way. It's like, he says they provide zero value. They're like leeches. That's not quoting, but that's the impetus that you get?

**Jeff Geerling:** \[00:14:15.10\] You have to be careful; every time that you mention anything like that, all of a sudden, what I've found is on LinkedIn and Twitter especially, there's tons of Red Hat employees who will say, "Well don't quote me that. Where did we say that?" It's like the word freeloaders. I have heard the word freeloader used in conversation, both working at Red Hat and afterwards, but they've never put it in a blog post. But people are like "They never said freeloaders." It's like, read the words and look up the definition of freeloader. You're gonna see the correlation there. And then Mike put out a blog post saying "Yes, we did use the word freeloader, but we're gonna stop using that."

So I hate that it's a semantic game. I hate that they're playing the games with the GPL, and I hate that they're having to talk about "Well, if it gets to a legal battle, we'll probably win." It's like, that's not the spirit of open source. People have said "Stop talking about the spirit of open source. It's all about the legal rules." It's like, no; the whole movement comes out of this idea of community, of the fact that software, the bits are not the thing that provides value. It's the services, it's the support, and things like that. And that's how people like me saw Red Hat before, but now I see that Red Hat wants to basically be a consumer of the open source code, and then they want the value stream to end with Red Hat Enterprise Linux, and they can capture all of it. Whereas before, it hit Enterprise Linux, and they let the downstreams also profit off of it, which makes the whole community better, in my opinion. But obviously, the people at IBM and Red Hat who do the calculations don't see it that way anymore.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** Well, I think it's a matter of scale. Profit scale. Revenue scale. They're at a point now where they're capturing a lot of value, they're also providing a lot of value... Adam Jacob was on the show talking about how much they profit off of Kubernetes by doing what they do... Amazing. They're capturing a lot of value. But I did read that Red Hat's net revenue increases are on a downswing... Like, 12%, 10%, 8% the last three quarters... So you see that number going down. They're still more profitable than they were the previous quarter; there's still positives, but they're less positive, and nobody wants to see that direction.

**Adam Stacoviak:** Yeah, that's right. Don't go down, go up.

**Jerod Santo:** And you have pressure to capture so much more, and then you see people like Rocky Linux, maybe they say, "Yeah, we got a NASA contract", and you're sitting there, thinking like "Well, I need more contracts." I can see where you could have that in a competitive environment. Like, "Man, they're out there, capturing some value. We need to get all the value, because we've got to make up for that $34 billion price tag." You have to be valuable inside of IBM. I'm just speculating, but I can see where you would come to that. The scale is just massive.

**Jeff Geerling:** There's also a lot of people, especially Red Hatters, saying, "Well, IBM had nothing to do with this." And I think anybody outside of Red Hat can say that's BS. Sure, IBM didn't make the decisions. But if IBM had never bought Red Hat, would this exact same decision have been made? I don't think it would be, and I don't think it would be promoted in the same way. When you buy a company for $34 billion, and say, "You're going to be free, you're going to be able to do what you want", I can tell you, there are things that happen internally that would not happen had IBM never owned Red Hat. Not just in Enterprise Linux, but in OpenShift, and Ansible, and in other communities. Integrations that have to be built up, and ways to promote the commercial products on the IBM side. So anytime that gets brought up -- I think it is disingenuous to say, "This is IBM's fault, and Red Hat had nothing to do with it, and Red Hat is dead." I still see Red Hat as being kind of alive inside of there, but it's not the same Red Hat that it was five, six years ago.

**Adam Stacoviak:** If you had to create a perfect world for Red Hat, what should they have done? Instead of making this blog post and locking up the Git RHEL repos, and stuff like that... What do you think would have been positive from a monetary standpoint and a community standpoint? What could they have done?

**Jeff Geerling:** I think if they wanted to have their cake and eat it too, they could have gone down this path towards "We're going to close down Red Hat Enterprise Linux sources, we're going to put them behind the paywall", like they did... Which is legal, and that was -- initially, a lot of people said, "Oh my gosh, they're going closed source." It's like, they're not closing source, they're not violating GPL by putting the code behind the paywall. You only have to distribute the code to people you distribute the binaries to.

\[00:18:28.11\] There can be philosophical discussions on whether or not that's in the spirit... I think it is, because companies can make money off of the software... But you have to provide the sources, and have to not encumber those sources with any restrictions, which - that's still a point of argument, I think, in the community.

**Jerod Santo:** To define that is the hard part. Right?

**Jeff Geerling:** What I would say is, if they wanted to do this, they should have said, "You know what - we see this trend, and we're going to give these downstreams five years, let's say to, show a little more good faith. Like, it's okay to build support off things, but we don't want you to build support being bit for bit compatible, or bug for bug compatible with Red Hat Enterprise Linux", which Rocky has always made that kind of their advertising tagline. Basically, it's like "You guys are offending us. Let's figure out a way for you to stop offending us and still be part of this ecosystem. And we're gonna give you a five-year deadline. If at the end of that you're still doing this, we're going to do this closure." That would have still ignited a firestorm, but not a nuclear bomb.

**Adam Stacoviak:** Yeah...

**Jeff Geerling:** And it comes back to that trust. After the first CentOS death to CentOS Stream, the second one happening so early in the cycle of Red Hat 9 - that's where it really grates against, I think, outside of Red Hat, all of our inner, like "What are you thinking? The timing of this is terrible." At least give a timeline, and say "This is what we're doing."

As a dumb example of this - I was pretty hot about this sometimes, and I put up a PR are on one of my Ansible projects basically saying, "You know what? I could throw nuke into my thing too, by making it so that all my rolls fail on Enterprise Linux unless you agree to their EULA." I put it up there with a note saying "Unlike Red Hat, I'm going to throw this nuke down, but I'm not going to merge it. I'm not going to actually deploy it, unless my community is okay with it." So I put it out there, and tons of people were like "This is stupid. You're an idiot. I can't believe you'd ever do something like this. It would actually restrict our freedoms." It's like, I didn't do it, though. That's the point. Like, if I'm going to do something that I see this could upset my community of users, maybe I should tell them about it first, because that's the right thing to do.

**Jerod Santo:** Right...

**Jeff Geerling:** But they just basically threw a nuke into the downstream ecosystem, coupled with the fact that there were so many -- in the first two or three days there were a lot of articles... There was one in particular in LinkedIn that tore into Gregory Kurtzer, who I've never met; I've had one email with him ever, and that was after all this stuff happened... I don't know much about him, I don't know much about his history, besides what I've read online, but they were like tearing into him, saying he's like this terrible person, and CIQ is horrible, and the way that Rocky was structured... I'm like "Where did this come from? Nobody ever asked about this, and they're posting about it." And then I saw other stuff, and it leads me to believe that this was -- I don't know, internally, I'm thinking that there must have been some conversations with SAs, with marketing, with maybe PR, I don't know, about like "Here's why this is happening", but they didn't release that stuff publicly. And then there were comments on Reddit from Mike McGrath about some underhanded business decision, and he's not going to talk about it because he doesn't want to throw someone under the bus, or whatever... I don't know, it felt very weird, the whole way that first two or three days went, especially. And then at this point, Red Hat, if you talk to the VPs and see all the interviews, they're always talking about commercial side interests, and how it's bad business to let your competitors just take your stuff for free... But they don't talk at all, they address none of the trust issues, the community issues, the open source and free software philosophies... And that's, I think, the big difference that I see with the current kind of thing at Red Hat. Versus 10 years ago, everybody was like "Red Hat is the open company.

**Jerod Santo:** Right.

**Jeff Geerling:** \[00:22:13.07\] They develop upstream, they give free stuff downstream, they are part of the community." And they still do so much, and I just hate to see some of that jeopardized because some of the great contributors who work inside of Red Hat, some of them have emailed me and DMed me and said "Hey, thanks for saying your piece, because I feel some of that rage, too." I think some of them feel the same way, but they're not going to say it, because like I said, back when I was consulting with Red Hat, I wasn't going to throw them under the bus.

**Adam Stacoviak:** Don't bite the hand that feeds you.

**Jerod Santo:** Right.

**Jeff Geerling:** Yeah.

**Adam Stacoviak:** Some of this we did cover with Greg way back in episode 427... And it was the rise of Rocky Linux. We haven't talked to Greg, or Gregory, since then. That was 2021. It was January 2021, when Rocky first came out. It was really before even the RESF. I forget the full exposure, the name. The RESF, which is the foundation, the structure the created to essentially ensure that Rocky was community, and not Greg, or a particular person. While they are board members and they have chair seats and stuff like that, he's not the only person that can say so.

So there's tons of stuff I don't want to cover in there, because he mentioned legal, and all the juice, basically. So the things you alluded to is covered for the most part in there, from him directly, about some of the history. There is some bad blood in the water, that goes back to CentOS, prior to Red Hat's acquisition of it... Which - I think this is all from that. That conversation we have with Gregory, in many ways, is a precursor to this conversation, because that was sort of the beginning of all the mess that came with CentOS, that shift etc. and now we're here now with sources being withheld, and Rocky and Alma being "the bad guys", because they're just recompilers or redistributors, essentially, like you had mentioned before.

**Jeff Geerling:** Yeah. Meanwhile, hanging back here is Oracle.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right.

**Jeff Geerling:** The whole time, they've been doing things 50 times worse, by many people's standards...

**Jerod Santo:** Right. Well, Oracle is the big winner in this whole mess, isn't it? So far, at least. Well, maybe SUSE ends up being, but we should mention the Oracle's epic press release. This is like when you haven't -- well, I don't want to draw analogies that are too strong, but this is just like when somebody comes in and just smacks somebody else when they're down, so to speak. And they did a really good job, and I covered it in Changelog News, as people on the pod probably heard... And I was just impressed by this press release. I just loved it, as just a person who enjoys technology companies...

**Jeff Geerling:** Popcorn.

**Jerod Santo:** Yeah, I mean, it's a popcorn moment for me, because I don't have a dog in this hunt at all. I have a dog in the greater open source community, and I want all of us to thrive, and I want people to be able to capture value and to give value away; I want everybody to do well, and I hope the best for all these entities, except Oracle - nah, just kidding. Oracle too, I wish the best for them, especially after this press release, which was kind of like "You know what, these people --"

**Jeff Geerling:** Backup those words with some action and we'll see what happens.

**Jerod Santo:** Yeah, exactly. If this wasn't merely a cheap shot, then this could be cool, you know? That was weird, Jeff. I think you said on Monday this is the first time you find yourself agreeing with Oracle on anything. So, you know...

**Jeff Geerling:** Yeah... As somebody who uses VirtualBox, and uses Java, and all these different things, and has built businesses off of a lot of their technologies, I never have ever been like "Man, I love Oracle." I've never said that. \[laughter\] And I still don't. But I'm like "That was good, Oracle. That was pretty good."

**Adam Stacoviak:** For sure. I want to quote Adam Jacob here on this, because he tweeted this, and I just was like head-nodding big time. He said, "We've reached a part of the story where people who should know better are straight-face saying "Oracle is a better friend to open source than Red Hat" because they wrote a blog post punching their competitor. Y'all need to do better." I mean, that's a good summarization of how most should respond, because - yeah, you should do better. But at the same time, that was a good dunk.

**Jeff Geerling:** \[00:26:11.24\] There are so many lines in that that's like "Man, the sarcasm is just like oozing out of that word."

**Jerod Santo:** It was the longest single segment of Changelog News that I've done, because I had a quote so many parts of it, and they had like a -- there was a quote inside of a quote... It was a lot of work for me to cover this, and at the end of it, I felt like "Did I just give way too much time to this? I don't know. Let's ship and see."

**Adam Stacoviak:** I do want to say that I'd love to get Edward Scriven, who penned that post - I'd love to talk to someone like that, that essentially is second to none to the CEO of Oracle... Who wrote this post, who has his opinions - I'd love to get the insider view from someone like that, about their plans, essentially. SUSE has put theirs down, forking RHEL, taking investment, and hopefully having what could be I guess a RHEL fork, essentially for us to all standardize against with Enterprise Linux... So we'll see, but I'd love to get their take.

**Jeff Geerling:** To Oracle's credit, they do contribute a lot upstream to Linux. It's not like they only take. Red Hat might want to paint them in that corner... But they have done a lot. They have some great devs. But we don't expect them to be the open company, because they've never advertised Oracle, the open company. Red Hat always says "We are the open company." Of course, now they've kind of changed that. I've noticed the past three days, I keep seeing this phrase, "We develop in the open, and we're an enterprise software company." That's a completely different mindset than "We are the open company." I have The Open Organization from Jim Whitehurst, who is not there anymore... But when you lose that mentality, that's when I think you can start saying "You know what? The community is not as important as the profit for the next quarter." I think that some of the people that are making these shifts are not the people that were steeped in the free software ecosystem that came up through CentOS. A lot of these people came up through enterprise. They worked in other enterprise software companies, and they came with Red Hat, and they're like "Oh, that's cool that you have this open source stuff. It's great that you can pull in more value without having to hire other developers for all the little random things in the Linux Kernel. Sure, we do great stuff, but it's great that we can pull in a lot more." If you're Apple, they rely on FreeBSD. If you're Microsoft, you actually did write, like, everything. I saw somebody joke in one of the articles that maybe there'll be Microsoft RHEL soon...

**Adam Stacoviak:** Oh, maybe.

**Jeff Geerling:** For Azure.

**Adam Stacoviak:** I want to give you some credit too, Jeff, because in your "I'm done with Red Hat Enterprise Linux" video you did say -- you kind of called this post from Oracle. You said "Wouldn't it be ironic if Oracle were the ones who knocked Red Hat down a peg?"

**Jerod Santo:** Really?!

**Adam Stacoviak:** That's kind of what this post is.

**Jerod Santo:** Did you have some inside info on that, Jeff?

**Jeff Geerling:** Did you get tipped?

**Jerod Santo:** No, not at all. So day three, I was just thinking when I was writing the script to this, I was like "I'm super-angry, I want to get that across, and I will also want to give people a good overview of what the situation is and where it's going from here." I saw immediately, like, Red Hat - it's hypocritical what they did. And I think anybody outside of Red Hat saw that, but there's a lot of people internally at Red Hat that kind of can't see that, because of where they are... But I saw immediately, like, of all the companies in the world, there's only really one; like, CIQ can't. Rocky Linux, Alma Linux, Cloud Linux, all these different groups that are doing the downstreams that are basically getting torn apart by Red Hat - none of them could come back with anything. But Oracle has bazillions of dollars. They could do something. So I mentioned like "Wouldn't it be funny--" And I never thought it would happen, because I was like Oracle is --

**Adam Stacoviak:** You caught it. Maybe they were listening, and they were like "We should do this."

**Jeff Geerling:** I mean, Oracle - they have so much money, and they have so many contracts, and their database, all this stuff, which I hated working with the few times I had to - they didn't have to say anything, and they would still be the victor here, compared to Red Hat, because nobody expected them to do anything amazing. But then they come out with a blog post and I'm like "Yeah..."

**Jerod Santo:** \[00:29:59.29\] Two things are interesting about that. First of all - I mean, kick a guy when he's down. They're just like "We're about to just come out and kick you while you're down." But then also, it's interesting in that post how they referred to it almost exclusively as IBM." That's why in my news coverage I said "Oracle smacks IBM", because they really did. I mean, they're talking IBM... Of course, Red Hat is there, but they're really kind of blurring those lines, and you can see who they're coming after, and they're really talking about, "Well, it's all about money", and it appears that - yeah, it's hard to say it's not.

**Jeff Geerling:** They aren't wrong, but they're also not right. And there are a lot of Red Hatters that I personally know, that I've been in conversation with, outside of the "Jeff Geerling hates Red Hat" type thing... And I think it's disingenuous to go that far that they did... But on the flip side, it is what it is.

Ansible, when I started working with Ansible, I was independent. Then it got bought by Red Hat, but it was still Ansible, but then it was Red Hat Ansible, and I started seeing some things change; some of the structure, the way that it was -- like, "How are we going to allocate our resources", and getting things into the paid ecosystem outside of the open source area. And then now it's Red Hat Ansible Automation Platform, by IBM is what I call it... Because there's parts of it now that it's like, these resources that were focused on making Ansible a better product are now focused on making Ansible tie into \[unintelligible 00:31:21.13\] platform, and all these other things that never would have happened had IBM not bought it. So there's a point, but it's also, I think some people overplay that point.

**Jerod Santo:** Yeah, it is what it is. You gave a little bit of your story about getting into Red Hat, or learning about Red Hat back in the day... I wanted to share my first interaction with Red Hat. So in college, I was into Linux, but I didn't know Red Hat at first. I did run Fedora a few times, but then ended up in the Debian/Ubuntu side of things. But I remember one time -- I knew who Red Hat was from the Hat, and like Fedora, and this whole thing.

**Jeff Geerling:** Shadow Man...

**Jerod Santo:** Yeah, exactly. And I remember one time - and I just had a disdain for Windows. I had gotten that far, right? I was not gonna run Windows. This was 2002, back in the day... And I remember I went to Mega Mart, which was just a local retailer, big box electronics store. I used to just cruise the software aisles... You know, back when we bought software off the shelf...

**Adam Stacoviak:** In boxes.

**Jerod Santo:** Yeah, I would go down -- like, it was right next to my university, and at lunch hour I would just go there and cruise, and I'd check out the DVDs, and I'd check out the software. And I remember looking all the Windows, whatever it was, probably XP back then... And then I saw a box, Red Hat Linux. Really cool box, with a red fedora on it, and the Shadow Man... And I knew that this was free software. Like, I knew what Red Hat was. I knew what Fedora was. And I'm like "These people are selling something in a box store, that's totally free." How cool is that? I just loved them. I thought it was like the coolest thing ever. And I had the utmost like hacker respect for Red Hat ever since. They just always had good vibes... Because I'm like, it takes some chutzpah, or whatever it's called, to just go and put a box to buy, in a store where you can just go download it for free. I'm like "Maybe they just hope nobody knows that. I don't know, who would buy this box? But it's cool, and I like it." So I've had a longtime respect for Red Hat, and still do; they still put out lots of awesome stuff. It's just, you see the changes that happen under circumstances that we're in, and it just is what it is.

**Jeff Geerling:** People say that I hate Red Hat. I don't. The reason why I pointed these things out is because I'm like "Hold on... Come back."

**Adam Stacoviak:** "This isn't what you said you would do."

**Jeff Geerling:** "Come back to the light side."

**Jerod Santo:** "Come back to the light side."

**Jeff Geerling:** There's a path, and they're diverging this way, and I'm like "Come back this way."

**Adam Stacoviak:** Yeah.

**Jeff Geerling:** And I'm willing to forgive. It's going to take a lot more after those two blog posts, after the things that employees have said all over the place at this point, after some of the perspective shifts that I see, that I would not have dreamt of five years ago... But I still want to see them succeed, because - I mentioned in a couple posts, like, they're the too-big-to-fail of Linux right now. If they're not backstopped, then maybe proprietary software can make inroads back in on the enterprise.

**Adam Stacoviak:** \[00:34:13.23\] For sure.

**Jeff Geerling:** I don't know if SUSE is quite big enough to step in in Red Hat's role if Red Hat does start failing in Enterprise Linux. And there's also arguments from the other side, with Kubernetes, and container infrastructure, and cloud-based computing, that maybe none of this matters at all. Like, who cares about Enterprise Linux? But if you look around, pretty much all clouds run on servers, and the servers run an operating system, and a lot of those operating systems are one of the top three or four Linux operating systems. If I look at my home lab, even the servers that run containers right now, they're all running Debian. I've just finished migrating the last one off of Rocky. But it is still important, and containers just don't magically wash away the importance of Enterprise Linux.

**Jerod Santo:** Was that migration because of this, because you were in that migration phase?

**Jeff Geerling:** Yes. Most of them are running Debian because it's Raspberry Pi OS, which is based on Debian. But I had a couple other servers that were running Rocky, and I was like "Forget this..." And I mentioned in my blog post, I'm not supporting Red Hat Enterprise Linux anymore. So if something starts failing on Rocky, I'll just kind of drop that support, because it's not worth it to me at this point.

**Adam Stacoviak:** Yeah.

**Jeff Geerling:** Which stinks, because I still have my Rocky Linux shirt... This is another fun thing - one Red Hat employee was like "Well, obviously, you're paid by CIQ and Rocky." And I'm like "I've never --" I'v received a T-shirt and two stickers, one of which is on my wall over there. That's the extent of my relationship with Rocky Linux. They sent me the shirt because I used them in a video when I set up something at one point, and they're like "Hey, do you want a shirt?" and I'm like "Sure", because I like T-shirts. I don't go to conferences as much, so I've gotta get T-shirts through the mail now.

**Adam Stacoviak:** Yeah. Gotta get your swag somehow. "Send it to me!"

**Jeff Geerling:** Yeah.

**Adam Stacoviak:** Is this something you think that Red Hat is going to walk back? Because sometimes when you fail up this big... Like you said, nuclear bomb. When you do this kind of thing, that does kind of cause an explosion, and there's a lot of blowback, there's a lot of disdain, sometimes those decisions get walked back.

**Jeff Geerling:** I don't think so, mostly because the response I've seen after Oracle and after SUSE's blog post is "Well, that's what we wanted to happen." It's like "What?!" I don't know what they're trying to do at this point. It doesn't make sense to me, but I don't have an MBA, I'm not a great businessman." I don't think they're gonna walk it back, though. It doesn't feel like it. What I think that they could still do without walking it back is help people with CentOS Stream more than they did.

One thing that I've seen which is ridiculous is a lot of SAs are mentioning, "Well, everybody can just switch to Stream." It's like, well, your documentation says don't run it in production. So you're telling everybody, the thousands and thousands \[unintelligible 00:36:55.18\] and educational markets, these hosting providers just switch to Stream, but you're saying it's not stable enough to run in production? You've got to solve that. So solve that issue, help Rocky and Alma rebuild, maybe give them some support in it to show good faith... But I don't think that's going to happen, because they've basically \[unintelligible 00:37:13.22\] them. I don't think that they're going to walk it back, but I still think that they could do more to make it not so bad... But I don't see any signs that that's happening.

**Adam Stacoviak:** I can understand their offense to Rocky and Alma. I can understand the offense completely. Something that I've learned in my life though is whenever -- and maybe they're just too big, like you said, to fail, that this isn't a concern for them... It's that whatever you come to a table with a decision with no plans to negotiate, you forfeit all opportunity to have empathy for the other side, and to essentially fine-tune things to be cohesive for everyone, not just the one-sided decision you came to the table with. And like you had said, maybe they could have given them five years, to say "Help us understand how you're a positive, not a negative to our goals and the community. Are you simply just a copy of us, with support, bug for bug compatible? Are you just a copy of us with support models that essentially is RHEL, but not RHEL? Because if that's the case, then we don't like that, and we think we want to limit you." But they made this choice because of that, it seems, that impacts everybody.

**Jeff Geerling:** \[00:38:23.12\] Yeah.

**Adam Stacoviak:** I think it would be in their best interest to have, like you had said, CentOS Stream be back to CentOS ways, where it is production-ready, and available to everybody, because that helps the Red Hat Enterprise Linux brand be the de facto, kind of what they have been, which is why we're all in this conversation, because they have been the Enterprise Linux standard. To me, that makes the most sense, to remain and solidify that standard; not just kill off some competitors and lock down your source code to only those who subscribe, essentially.

**Jeff Geerling:** Yeah. I keep seeing this statement, "All of our code, everything in Red Hat is in CentOS Stream." It's like, well, that's not entirely true. 99%, probably more than 99% is. And in terms of the whole complete source availability, it doesn't meet that standard. But the license agreement saying you can download the sources if you have an account and you have a subscription in good standing - that does meet it. But they can't make that statement, that everything is in Stream. Because what they're trying to say is "Why are you doing this downstream? We have this upstream, which is better, and it has everything." It's like, well, if they did their work all in Stream, and if they had coordinated the releases, especially the minor releases through Stream, that's one thing. But they don't. Red Hat is kind of a little bit of a fork of Stream. It's not a big fork, but it's a downstream of Stream, so it's not one-to-one identical, but they're trying to sell it as that to the press, I think. Anyone like us can kind of see through that; it's not identical.

They've tried selling Stream for three or so years now, and nobody outside of the Red Hat ecosystem, like the Red Hat Enterprise Linux subscribers themselves and Red Hat has bought into it. I don't know how they're gonna change that without changing Stream, and making it better.

**Adam Stacoviak:** Yeah. Even in a homelab, Stream is not cool. Like, if you can't run it in prod. Sure, my Plex server may not be important to anybody else besides my immediate family... But I don't want it to be down.

**Jerod Santo:** It's production to you, man. It's production to you.

**Adam Stacoviak:** Right. It's production to me, right?

**Jeff Geerling:** Yeah. And somebody can run it... It might be more stable than Fedora, but I'm not gonna run Fedora for any of my servers... I'll run it for a workstation, but not servers.

**Jerod Santo:** As a guy who's run Debian on servers my entire career, I just wonder, why not just come on over where the water's warmer? Jeff, it sounds like you're here now; it sounds like you joined -- \[laughs\]

**Jeff Geerling:** I am. I mean, personally, I am. I respect my users, and a lot of them are still on Red Hat, Rocky Linux, Alma Linux...

**Jerod Santo:** Right.

**Jeff Geerling:** Some are on Oracle... So I don't just want to cut them off, like Red Hat likes doing. So that's why I'm maintaining the support until it breaks. If it breaks and it's like, oh, you just need to bump a version somewhere, that's fine. But if it breaks and it's like "Oh my gosh, I have to re-architect this for Red Hat 10", I'm not going to do that. I'm going to drop the support at that point. But I've heard from tons of organizations that have everything in the Red Hat ecosystem - a lot of them don't subscribe to Red Hat, because they have people that can understand it enough they don't need the support, that kind of thing. So now they're like "Well, what do we do? We could go to Debian, we could go to Rocky and hope that rocky keeps doing their little piracy thing", that's not actually piracy, because... I saw the fun meme of like "I am now an open source pirate!" Like, pirate open source software. So funny.

**Jerod Santo:** \[laughs\] Yeah, you know you're epic when you're pirating open source.

**Jeff Geerling:** But I still see a lot of those people, and I want to help them as much as I can. But on the flip side, I'm happy in the Debian world. And I know that a lot of people are like "Oh, you should use NIX, or use this, or..." There's a million other distributions.

**Adam Stacoviak:** NIX is hard. Sorry... NIX is hard. I can't help but admit it. It's hard.

**Jerod Santo:** \[00:42:00.29\] There are lots of good options. Arch... Arch is a cool one. I switched to Arch one time in production...

**Jeff Geerling:** By the way?

**Jerod Santo:** Yeah, by the way... Because I got by-the-wayed enough times, and I was like "I feel like I'm missing out on something with Arch." And so I put a new customer on Arch Linux, and literally, every other server I was maintaining was Debian. I was like, "I'm gonna learn Arch." And then... I stopped. \[laughs\] Not because it's not good.

**Jeff Geerling:** Well, I mean, their documentation is -- almost every search ends up somewhere in Arch, you know? They're great for that.

**Jerod Santo:** Oh, yeah. It's just like different enough that I'm like "Why am I spending time figuring out how to do this particular thing in Arch, when I already know how to do it on the other side?" So when you talk about your users - I'm not familiar with your business. Can you tell what do you mean by that? What do you host, and stuff?

**Jeff Geerling:** My downstream open source users, who 99.9% of them use my software never contribute back, basically. So the people who make my product, which is open source software what it is... Ansible is used by hundreds of thousands, at this point. And my rolls for Ansible, and some of my collections and some of my playbooks had been downloaded at this point billions of times; a lot of those are CI instances running tests and things, but they're used very widely, I would say. And Ansible being something that was bought by Red Hat, and came out of the Red Hat ecosystem and then came back into Red Hat proper, is used a lot in Red Hat. And none of my rolls are certified. That's when Red Hat works with a vendor to make certified rolls that are kind of blessed in the Ansible automation platform, and all that. But I can see the usage and the issues that come in and things, and there's a lot of people that use Red Hat Enterprise Linux and use my rolls, because my rolls are decently well maintained, which you can't say for a lot of things.

**Jerod Santo:** Yeah.

**Jeff Geerling:** Not as well nowadays as they were five or six years ago... I used to run a hosting service for Apache Solr, and that was for Drupal websites, basically. And that was profitable, but also it was something that took a lot of time. Five or six OS upgrades into it, and five or six architecture changes... I was moving everything to Kubernetes, and I was like "You know what - this isn't the thing that I love to do in life", so I closed off that service. And I also had another service called Server Checking for uptime monitoring. Those both use those rolls, and I probably used 50 or 60 rolls for different things.

**Jerod Santo:** Gotcha.

**Jeff Geerling:** And now I use about 15 or 20 of them day to day, and then 20 or 30 more... So some of the rolls that I don't use as much - I don't deploy GitLab anymore, so that role has not gotten much love... But there's still plenty of users that use it to the point where I still maintain it enough that it will work for them. If you look at one of my rolls and see I haven't committed anything to it for two years, you might want to think about forking that roll... Which I'm perfectly happy with. You know, take my work... I use the MIT license, which is much more like "Take everything I've ever done and steal it. Like, take it from me, please. Here, take it."

**Jerod Santo:** It's like, no warranty, but that's about all.

**Jeff Geerling:** Yeah. So I've considered changing my licensing strategies to GPL, just because I've seen -- the whole idea is based on trust. You know, I'm gonna give you all my work for free, and you could take it and profit off it, I don't care, but I trust that you'll see that this is a good thing, and you'll do some other good stuff with it, or you'll contribute back, you'll send me a patch, or you'll help somebody else that uses this thing. Or you'll say, "Hey, Jeff is cool." That's nice, too. But at this point, I'm like "Well, maybe I can't trust--" Because basically, all the people that went MIT licensing are corporations that don't want to deal with the poisoning of free software philosophy into their ecosystem.

**Jerod Santo:** Right. I always picked MIT as well, for two reasons. The first one was I just wanted as many people to benefit as possible, and I just figured "The freer, the freer." And I understand how that's maybe perhaps short-sighted and can definitely be argued against, but I was like "Just free." As gifty as I can be, which is "Do whatever you want with it." And the other one was because I never had a project that I felt "This one's really good." \[laughs\] I feel like my open source is always like "Yeah, I take it, have fun, kids..."

**Jeff Geerling:** \[00:46:06.18\] Make it as easy to steal as possible, so somebody will steal it.

**Jerod Santo:** "Are you sure you want to take this? Go ahead, you can have it, but..." I didn't have any Ansible rolls that were really good, which I think changes the calculus perhaps.

**Jeff Geerling:** Yeah. And I think that part of that too is my philosophy in open source comes out of -- I always took before I gave. And one of the first communities where I gave back finally was Drupal. And in Drupal, the whole ecosystem is completely different. Drupal is -- I wouldn't say it's an order of magnitude less revenue than Red Hat itself... But it's a very substantial amount of revenue for all the companies in that ecosystem. But there's an understanding -- it's just a thing, because all of us came out of that... Like, we took, and then we gave back. There's the saying, you come for the code, and you stay for the community. Everybody supported each other, and it was GPL v2, and companies would build their own distributions based on it. But all those distributions, there was never a question like "Oh, and you give everybody the source code." You could always build off of everyone else's; nobody would ever pull any tricks. Nobody would ever try to restrict it.

Sometimes conversations like that would happen... I worked at one of the biggest Drupal providers out there, which is Acquia... And sometimes someone would come in and say, "Well, why can't we do this thing?" The immediate answer was, "Because that's not in the spirit. We're gonna kill our community if we do that. So don't." And then it's like "Okay, yeah. That's fine." But on the Red Hat side, a lot of people come in through enterprise software, through proprietary software companies, and they just have never been raised with that philosophy through their open source life. They see open source as like this thing... It's a feature, and it's not THE feature. Open source, the software is open source, and that's a thing. It's not "Oh, and the software comes out of this open source thing, and that's cool."

**Adam Stacoviak:** It's something you really don't understand if you're really in the muck of it. If you've maintained a system, or deployed software, or built software... You only really understand the philosophies of open source truly if you've been in the mix. If you're a purveyor or an outsider to some degree just helping things move along, it's kind of hard to really understand the spirit of open source, if you haven't been part of hearing people's stories like we have on this show for many, many years, and being advocates for open source. Not because Jerod and I particularly have the kind of software you have out there used by the users you have; it's because we understand the empathy we have for our fellow developer, and we want to see their freedoms be preserved, and the things they thrive for, and the things they put their work into be free in the way they want it to be free... And that's what open source really is. Because my straight line - Jerod probably shared to some degree his, but I came through WordPress into open source. The fact that K2 had CSS available, and it was an open source theme - I learned what it was like to theme a website with CSS. This was back when CSS was taking over tables, way, way back in the day. And that's my straight line into software. I didn't go to school for it, I don't have a CS degree... I worked for an IT company in bizdev, which I was very good at... But I started to understand open source by way of being a user; like you had said, a taker of it, not ever a contributor. And I've said, as much I've given back open source, it's almost nothing in comparison to my usage of it. Maybe through this show and the things we do, we've given back...

**Jeff Geerling:** Yeah, there's no way we can repay that debt.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah. But you don't get that unless you kind of have a version of that straight line. If you just come through proprietary software, and it is, like you had said, just a feature, or "Just those users who want freedom... Whatever, who cares?" then you're going to have that perspective. But if you've been in the thick of it, to learn what you learned to do what you do, to go where you go, then you'll understand what it means to have the spirit of open source, and what it means to have free software, and whatever way you want to describe free.

**Jeff Geerling:** That cuts right back to the line in that second blog posts. Red Hat -- what was it? They said "Rebuilds like Rocky and Alma are a real threat to open source, and one that has the potential to revert open source back into a hobbyist and hackers-only activity." It's like, all of us are hackers and hobbyists.

**Jerod Santo:** \[00:50:13.01\] Yes, please...

**Jeff Geerling:** Internally at Red Hat, almost everyone I know started out as a hobbyist in Linux, or in whatever, and they came into that ecosystem. So I think that they meant that as a diss. And it is, in a business sense. It's like "Oh my gosh, we have this professional thing. We don't want it to become a hobbyist thing anymore. That's what it was back when it was really weird, and it was on IRC, and ICQ, and things. And Usenet. These are terrible things." It's like, well, we all see that, and we're like...

**Jerod Santo:** The good old days...

**Adam Stacoviak:** That's still true.

**Jeff Geerling:** Everything came from there. If we want to go back to that - yeah, just cut off Red Hat. This is us. \[laughter\]

**Jerod Santo:** Yeah, I read that too, and I was like "Okay, I know who's writing this, because they just don't have the same perspective as I have." I always gravitate towards the weird, towards the obscure, towards the hacker and the free and the cool... That's the cool stuff.

**Adam Stacoviak:** But they also said "We have to pay our people." That was the other thing; this hobbyist, hackers-only thing, and then "We have to pay people." That was their reasoning, essentially. Those are the two kind of main things. "We have to pay developers, so we must do this." Well, really? Yeah, you do, but that's not the only way.

**Jeff Geerling:** I feel very sorry for the people who were laid off, which disproportionately seemed to affect the open source communities, for example opensource.com being basically cut off, the Fedora community manager being cut out... But I feel for the -- you know, it is tough to go through layoffs. But that's after a quarter where they said that OpenShift just made a billion dollars.

**Jerod Santo:** Yeah.

**Jeff Geerling:** And profits are down, but they're still profits. And you're saying, "Oh my gosh, oh, please don't hate us, because we've got to pay our developers." Well, then maybe cut your profits a little bit. But they can't, because it's a for-profit corporation, and they have to please their investors, and the board and all that. But it's like, you can't use that line; if they were a not-for-profit, sure. "We want to pay our developers in it."

In the Drupal community, we have had that conversation, because the Drupal Association, which is a not-for-profit, has had hard decisions. When times get tougher, how do we keep these developers who are working on the Drupal infrastructure employed, and pay them? And so we all band together, and the community contributes, and we get that. But you don't get that when you're a for-profit company advertising billions of dollars of profits in your new market segments that are leeching off the Kubernetes ecosystem. Sure, you can contribute back, but you didn't build all of Kubernetes yourselves.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Yeah, no sympathy. What do you think about the future of open Enterprise Linux as a standard? It has been RHEL. This change may change things... SUSE obviously said they're gonna fork it, they've got an investment... Oracle put down their smackdown, their little slap in the face... What do you think's going to happen with the open Enterprise Linux Standard going forward?

**Jeff Geerling:** Well, they say that history doesn't repeat itself, but it rhymes... And I was not deeply involved back when the whole SEO thing happened... But that was kind of what happened back then, when Red Hat Linux became Red Hat Enterprise Linux, and then eventually out of that came Fedora, and there was this movement to try to get this community-based distribution that all these companies worked together with. What was it - Novell, and... I forget all the companies involved in it. But basically, the same kind of thing happened, and we're back there again.

I can't predict whether this is like a downhill slope for Red Hat, or if this is a steady state for Red Hat. I don't think it's going to increase Red Hat's revenues for the next year or two. I think maybe for a quarter or two they might have locked in some more contracts, just from the people who read all the press and say "Oh my gosh, I'm building this stuff on Alma, or Rocky. I've gotta stop that and move back to Red Hat, because I need the support." But I don't think they're building that long-term relationship and the long-term trust. And like I said, I brought companies into Red Hat in my consulting work because I had learned on CentOS, and I said, "You need the support, and I'm not going to be there for you, so here, use Red Hat." And they could afford it, so they did. People like me are not going to do that. You're going to lose all of those leads, which - maybe that's 10%, or 12%, or something. Maybe it's not a huge majority, but a lot of the long-term relationships are built out of that. And they just said, "Nope. Gone." Like, "They provide no value" was the words.

**Adam Stacoviak:** \[00:54:29.19\] I want to key on one thing too, because I've been watching you on YouTube for a while, Jeff; probably at least a year, maybe two years, when I got into Raspberry Pi's more, and Pi-hole, and just homelabby stuff, so probably several years. And I think, as I've watched you, you're in that obvious hobbyist and hacker; like, you're literally tinkering and trying to break things in most cases. Like, "Will this even work? Will this Pi-Hole NAS scale? Will it actually be able to transmit data across the land, at speeds I think are --"

**Jeff Geerling:** Can you do a petabyte on a Raspberry Pi?

**Adam Stacoviak:** You've done all these crazy things, and so I think in many ways you find ways to innovate, and you're in that category. I am sure you've even helped many companies who come to you with saying, "Hey, Jeff, here's my product for free. You don't have to talk about it, but if you like it, do a video." And I'm sure you've done it at least a couple of times. So you've profited those companies, you've helped them in some way, shape or form... And you're a tinkerer. And so if you peel the tinkerers like you, which I'm sure there's many like you who don't have YouTube channels, and don't do all the things you do, but do them behind the scenes. If you cut those kind of people out from a RHEL standpoint, and you don't bring customers to RHEL anymore, that is bad. Right? That's just bad.

**Jeff Geerling:** It provides no value. No value.

**Jerod Santo:** \[laughs\]

**Jeff Geerling:** It's just crazy... And the other thing that I think about too is like, seeing the responses - obviously, there's a lot of Red Hatters... I mean, for me, if somebody attacks my family, or my organization that I like being affiliated with, or Drupal, let's say, I'm going to feel offended by that. That's just human nature. So I don't take offense to their kind of lashing back out. But outside of the Red Hat community, I haven't ever seen someone say, "Man, they did the right thing." I've seen a lot of, "You know, you shouldn't be so harsh on them... But yeah, they shouldn't have done that that way." That's like as positive as I'll get. And someone mentioned this morning, I think -- at this point, I try not to respond to anything, because it just raises my blood pressure a little bit, and right now I'm trying to work on a video that I've been working on for six months, and I just need to finish this darn thing... I started working on it when I saw the -- I think somebody on YouTube reported the thing, and then I was like "There's no way that Red Hat is actually doing this." And I read the blog post and like "Oh, my gosh. I have to say something." And that's when I posted "Red Hat, are you dumb?" That's the only words I could come up with.

But there's nobody that I've met that's like "That was right." There's a few business type people who I don't know from open source, but I know from other things, that are like "Why are you so angry about this?" But once you explain, it's the open source side of things, like "Oh, okay. I can see how you're offended." From a purely business mind - yeah, somebody's taking your product and basically restamping it... Yeah, that's terrible from a business side. From a community side, the way that it was handled, the way it was announced, the way it was rolled out, the way that they're responding still, and things... It just smacks me the wrong way.

**Adam Stacoviak:** You said you couldn't predict the future... But we have a mutual friend, somebody you quoted, Cory Doctorow. He's been on the show, he's said the word \[unintelligible 00:57:19.12\] on this show before, and explained it in detail. We'll link that in the show notes to, for you listeners... But he may have predicted to some degree what may happen there. He says "Here is how platforms die. First, they're good to their users. Then they abuse their users to make things better for their business customers. Finally, they abuse those business customers to claw back all the value for themselves. Then they die." I'm not sure if that's a prediction necessarily, but... What was the show title, Jerod? He just wrote the book on it. What was it called? Gateway Capitalism?

**Jerod Santo:** Chokepoint.

**Adam Stacoviak:** \[00:57:54.11\] Chokepoint Capitalism, that's right. Like, this is an example of - this is a choke point. I almost invited Cory on the show to talk with us, because I figured he'd have some angle... But he has so much to say I thought it would --

**Jeff Geerling:** I cited that in my video on this. In that video -- I was never going to make that video. Even after I read that thing, I was going to make my one blog post, "Red Hat, are you dumb?" And then after I posted that and got so much backlash from Red Hat employees, I put "I'm not going to support Red Hat Enterprise Linux moving forward." That was gonna be the end of it. But after those two things, and then that third blog post...

**Adam Stacoviak:** I'm done.

**Jeff Geerling:** I was like "No, I'm gonna make a video on this, because they're not seeing anything." So if they had not responded in the way that they did, I would have never made the video that has half a million views, and right now is the number one video I've ever made on my YouTube channel. I would have never done that, I would have never made the decision to stop supporting Red Hat Enterprise Linux. I don't know, for me it's like this is a demarcation line, and they have crossed it, and they look like they're turning further that way in their response. And like I said, I still think that they could come back, but they're not right now. And all the things that I'm doing, I'm like "Please come back." I still want to be part of that, but not as much anymore. And at this point, like I said, I've moved over to Debian for all my servers.

I think I have one Red Hat 7 server running backups right now in the cloud, and I don't like touching my backup servers, because once they're running, you don't want to touch them. So I'm just waiting till that one's done, then I'm gonna move it to Debian.

**Adam Stacoviak:** Well, what do you think's gonna happen, or should happen to Rocky and Alma? What should they do as a response to this? What are their options?

**Jeff Geerling:** I don't like the business side of what -- I never knew what CIQ was... Coming into all this, I knew there was Rocky Linux and Alma Linux, and they solved my problems. And that problem was I was using CentOS for all my testing and stuff, and that went away, and Stream was not a good replacement, so I switched to Rocky. And I could have switched to Alma. It was kind of 50/50. They both were kind of like "Here's the thing", and I was trying to figure out which one is going to have the longer runway, and it seems like both have equal footing in terms of how stable they've been and how quickly they've gotten releases out, and how they've adapted, and things. But -- I mean, on the business side, I didn't know anything about CIQ until this whole thing blew up. I still don't know if they were like underhanded, because like I said, I could sell support services for Ansible. As long as I say I'm not Red Hat, I'm just Jeff Geerling, selling support services for Ansible... I don't see anything wrong with that from a business perspective, because it's a downstream thing. If CIQ did do all this, and was trying to get contracts selling Red Hat, but not Red Hat, and all that... I don't know exactly how that happened, and yeah, that seems a little shady... But on the flip side --

**Adam Stacoviak:** Where did you hear this stuff from? What posts were that in? Where did you get this information?

**Jeff Geerling:** In a bunch of posts on LinkedIn from Red Hat Solutions architects, basically...

**Adam Stacoviak:** Can you share those links with us, so we can put them in the notes?

**Jeff Geerling:** I can, yeah. And there was an Infoworld article I think too, that implied as much... I think it was \[unintelligible 01:00:51.05\] Matt, wrote an article where he was like "Did Red Hat write this, or did you write this? I don't know." But yeah, I don't know where -- it almost seems to be like the thing that got sucked into all this, and it seemed like the attacks were all against CIQ, and by extension, Rocky Linux; that's what it felt like to me from all the posts that I saw on LinkedIn, and from the implications in posts on Reddit especially by Mike McGrath, who wrote those two blog posts that are on Red Hat's blog.

Alma, they seemed like they still don't 100% have a path forward. They said "We're in this, we're going to help you, we're going to do this", and I think one thing on the table is just going to Stream and following the major releases, and switching to a five-year support plan... So I don't know where they're gonna go. With Rocky so far it seems like they're just gonna pirate open source. That's their plan. And I think that's kind of fun, because it's like memable...

**Jerod Santo:** Yeah.

**Jeff Geerling:** "I'm gonna steal open source software." \[laughter\] That doesn't compute, but that is the reality that we're in at this point. I was thinking, if they wanted to, I have a Red Hat subscription. If they want to burn mine, \[unintelligible 01:02:02.17\] release, that's fine. I'll be part of that cause.

**Adam Stacoviak:** \[01:02:10.22\] \[laughs\] I love it. So that's crazy... You can like -- not literally employ, but employ folks who are willing to give you the sources, give you the sources.

**Jeff Geerling:** Red Hat burner accounts, to try to steal open source code.

**Adam Stacoviak:** Right...

**Jeff Geerling:** I still think that, given enough money and enough good lawyers, someone could fight the EULA restrictions... Because the restriction basically says, "You're free to do whatever you want with the open source software, the source code. But if you share it, if you exercise your right to share it, which the open source code says you must not restrict the right to share it - if you do that, we'll end our business relationship with you." To me as a Joe Blow on the street, that really sounds like coercion, or intimidation... But because there's a contract versus a copyright - the copyright is the code, the contract is the EULA, apparently, according to many legal experts I've spoken to, that's fine. It's okay to intimidate someone with your business relationship if it's just a copyright thing; you copy the code and then we'll terminate the thing, even though the code says in its license that you can't intimidate me. It doesn't make sense, and it doesn't seem moral or ethical, but apparently it's legal. And that's from every person that I've talked to in corporate open source law - I've spoken to four different people now - all of them said they're pretty sure that they're in the clear. They don't see any reason why this is going to be a problem. But like I said, I think if you had enough lawyers and enough money, which again, Oracle is the only company on the planet that probably has the case and the lawyers that could back it up... I think that they're the only company that could make a challenge if they set things up where they pulled the code out of the Red Hat subscription, and open-sourced it. If I did it, I would just get my account terminated, and then I'd be like "Oh, I hate you Red Hat", and then nothing else.

**Jerod Santo:** Then you'd be all out of money?

**Jeff Geerling:** Yeah. I would run out of money in the first week. I guarantee it.

**Adam Stacoviak:** The first day!

**Jeff Geerling:** I think Red Hat's banking on that, that nobody would dare challenge it, because it's shaky ground... But there is ground there. But it would require so much money and so much effort that nobody's going to do that.

**Jerod Santo:** Well, let's end on something happier, something joyous, if you want to talk about it... What's the six-month-long video you've been working on? What is it, when is it gonna be out there?

**Jeff Geerling:** Have you heard of Mr. Beast?

**Jerod Santo:** I have heard of Mr. Beast.

**Jeff Geerling:** So Network Chuck and I went to Mr. Beast's studio, and we worked on a project for his 1 to 100 video. The one where he put ages 1 to 100 in little boxes, and they all had competitions.

**Jerod Santo:** Okay.

**Jeff Geerling:** So if you watch that video, there's many points where they do votes, and they hit a button, and one time a guy smashes it with his elbow a few times, which is like "Oh, don't do it too much." They press buttons, and then when they reveal the vote, the rooms light up different colors. Chuck and I worked on that project, and I have -- there are stories, many of which I can't tell...

**Jerod Santo:** There are stories... \[laughs\] How many are gonna make it into the video?

**Jeff Geerling:** Actually, just before the show I finished writing my first draft. This has been months I've been working on this. I actually used AI to transcribe all of the footage that I did, into a huge document. And then I used another AI to summarize all that, so that I would have the ability to know in my brain all the things I said, so I could start writing a script. After months and months, and having 13 hours of footage, I finally have a rough draft that is 42 minutes long, and I need to cut out at least 15 or so minutes to make it manageable. So that's my task this week, is to try to get that down to like 25 minutes or so. And then it's still going to be a slog.

**Adam Stacoviak:** When's the publish date?

**Jeff Geerling:** I'm hoping in a week or two. My goal is the end of this month. So by the end of July... Because I'm going to LTX. LTX is a conference run by Linus Tech Tips, the YouTube channel. And it has a lot of the YouTube creators in the tech space, especially PC building and homelabbers. We have a home lab panel there actually; that'll be kind of fun.

**Jerod Santo:** \[01:06:14.15\] That's cool.

**Jeff Geerling:** I think it'll be live-streamed on Floatplane. I hope it'll be available afterwards maybe on YouTube, but a lot of the homelab YouTube community will be there, Wendell from Level1Techs, and Patrick from ServedTheHome... A bunch of other great folks. But at LTX I have a couple big projects I've wanted to finish by then... So I have to finish editing this video within a week or two, so that I can work with the Mr. Beast folks, because they also - they've grown to the size where now they have to care about legal things... A lot of small YouTubers, it's like "Oh, you're filming something, and there's somebody in the shot, and it's not a big deal." But like with Mr. Beast, we have this shot here, you've gotta cut that part out", and then I've gotta re-edit... You know. And I'll have to do all that stuff. So I have to finish the edit like next week, so that we can re-edit by a week or two after that, if I want this out by the end of the month.

But I just said, I have to finish this thing. I've been working on it... I actually spent probably 50 or 60 hours testing things after the whole thing was over, to validate things that we learned while we were there... For example static electricity, button signaling... I've got a high-speed camera to test, some things with Arcade buttons and different types of buttons that we used, to validate some of the things that we've found when we scaled it up to 100 rooms, and a huge place... And I couldn't use Raspberry Pi's because they were not in existence back then.

**Adam Stacoviak:** Shortage. Yeah. Not anymore.

**Jeff Geerling:** We ended up using these, these little things called Le Potatos, which are like Raspberry Pi's, but as you'll see when I do the video, they had their own set of problems.

**Jerod Santo:** Le Potatos, huh?

**Jeff Geerling:** Le Potato, yeah.

**Jerod Santo:** Wow.

**Adam Stacoviak:** Well, we'll have to get you back after LTX then sometime, to kind of dive into some homelabby things. We've been looking forward to talking about homelab stuff. I've been paying attention to you, Techno Tim, Wendell from Level1... Many others, of course, and I love talking about that stuff. And we have yet to really break the mold on talking about homelab stuff here on any of our shows, because it's mostly around software development... Infrastructure, cloud, but not so much like your own personal cloud, or things you do behind the scenes at your house.

**Jeff Geerling:** Yeah. Homelab has opened my eyes to a lot of things. I've always had a little bit of something, like one or two Raspberry Pi's doing things, but when I got into it a couple years ago, I've learned so much more with deployment, what makes certain software packages easier for -- it applies to small business too, because you don't have a team of sysadmins; you've usually got like the IT guy, or a couple IT guys and an intern. So it really opened my eyes to the ecosystem around open source software for server type things, and sharing, and all that... Versus proprietary solutions for some things. I think at this point I don't have anything proprietary running in my rack right; I still have a bunch of stuff on my computer, but at this point it's all open source on the rack.

**Adam Stacoviak:** Is UniFi's OS proprietary?

**Jeff Geerling:** Nope. I do not use UniFi.

**Adam Stacoviak:** I thought you had like something in there...

**Jeff Geerling:** No. All these YouTubers use UniFi... I have Netgear.

**Adam Stacoviak:** TechnoTim does... Or, I guess just him, yeah...

**Jeff Geerling:** Yeah. I mean, Ubiquiti makes great stuff, that's for sure. But it's a) expensive, and I try to go cheap, and b) I feel like I learn more when I don't have my handheld as much. When you have to get into the weeds on things, I like that.

**Adam Stacoviak:** It is expensive. What do you use that as your primary gateway, and like router, and firewall? Drop some hardware and some software.

**Jeff Geerling:** Right now it's an Asus running -- what is their thing? It's not OpenWrt. The MerlinWrt, or whatever; the Merlin firmware. And then I have this guy here - you can't see it if you're listening to a podcast, but I have this router box that was recommended by ServeTheHome, that has four 2.5-gig ports, and it's -- that'll be replacing that. I actually did that at my office already. I'm building out a new office/studio, because the kids here at home make recording difficult...

**Adam Stacoviak:** \[01:10:12.25\] Too loud, yes.

**Jerod Santo:** I have no idea what you're talking about.

**Jeff Geerling:** So I already have one there, and I'm going to put one in here. And then most of my switches are MikroTik, because the price is right, the features are good, and they're quiet; quiet is big for me.

**Adam Stacoviak:** That's what Gerhard recommended, Jerod, when we talked to him last.

**Jerod Santo:** Yes, he did.

**Adam Stacoviak:** Yeah. MikroTik was what he recommended. Is that easily available in the US? That's like a European brand.

**Jeff Geerling:** Most of the time they are. During the pandemic, things were wild. I had to buy one from Europe, and then switch out the power cord...

**Adam Stacoviak:** Gotcha.

**Jeff Geerling:** But nowadays, almost all their gear is available now through resellers here in the US.

**Jerod Santo:** Cool stuff. I'm looking forward to that video. Get her done, will ya?

**Adam Stacoviak:** Jeff Geerling on YouTube. Watch all his videos. I've watch - not all, but some; paid attention to some of the cleanup process you had for your new office... I'm planning to watch your \[unintelligible 01:11:00.17\] fight here shortly, because I just love hosting data... I'm a sucker for ZFS...

**Jerod Santo:** "I just love hosting data..." \[laughs\]

**Jeff Geerling:** It's called the \[unintelligible 01:11:12.18\] This was built by one of those hackers and hobbyists. These things are cool, because it drives forward open source, things like Open Media Vault, which is recommended for this thing... More users means more eyes on bugs, more bug reports eventually... If you get 100 more users and one of them is a contributor, that's awesome.

**Adam Stacoviak:** Yeah. Do you have any unpopular opinions, Jeff, by any chance?

**Jerod Santo:** Besides the ones he's just shared about Red Hat, or...?

**Adam Stacoviak:** Yeah...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Some of those are not quite unpopular, but popular...

**Jeff Geerling:** No... I mean, for me, I still like to build my own stuff a lot of times. A lot of people use "not invented here", pull in all the things and rely on everything... But if you look at my Ansible rolls, most of those are based -- most of my infrastructure is built on stuff I wrote... Which is funny, because I have tons of users. but for anyone who really wants to get into it, I would say like fork my stuff and maintain it on your own. Don't use my stuff, because you can make it better for your own infrastructure. For infrastructure especially, but for software, too. I think after seeing the way that Drupal has gone, and the way that other communities have gone, I kind of do see more value nowadays in building your own stuff. Even if you're redoing some things, instead of the Node.js approach where you have like to do a Hello World, you have 350 libraries imported.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I like that one. I'm with you. It's popular with me...

**Jeff Geerling:** It's unpopular in some circles, the whole anti-NIH.

**Jerod Santo:** Yup. Well, it is a continuum, or a spectrum. You have dependency hell on one side, and you have like NIH to the nines on the other side. And we all have to figure out where we live on that spectrum. And I'm definitely more onto the NIH side of the fence, but... You don't want to live on either extreme, because you're either just gluing together other people's code endlessly, or you're writing your own firmware for your Asus.

**Jeff Geerling:** Yeah. And maybe Red Hat - the best opportunity out of all this is we can all write our own operating systems and maintain our own Linux distros now.

**Jerod Santo:** I think that's the takeaway.

**Jeff Geerling:** That's what they want us to do. \[laughter\]

**Adam Stacoviak:** That's what they want us to do. "You can't have this one anymore. Bye!" Well, Jeff - hey, thank you. I know that you've got this Mr. Beast video that you just mentioned, and all these things on your shoulders... I emailed you yesterday, you said yes, so I appreciate it. Maybe this is the end of your rant, I don't know; maybe the end of all the things you had to say, or at least a --

**Jeff Geerling:** Well, it depends on who comes in to beat the dead horse tomorrow... First it was Oracle, then SUSE...

**Jerod Santo:** Right. This could just be a stepping stone on our way to somewhere else...

**Jeff Geerling:** Yeah... \[laughs\]

**Adam Stacoviak:** But I appreciate you coming on, sharing your thoughts, and riffing with me and Jerod here on Changelog & Friends. It's been a blast.

**Jeff Geerling:** Thank you.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye...!
