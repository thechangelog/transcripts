**Adam Stacoviak:** Alright. Hard question first, Carl. Are you ready for this?

**Carl George:** Oh, we're already recording.

**Adam Stacoviak:** Yeah, man.

**Carl George:** Should I introduce myself?

**Adam Stacoviak:** No.

**Jerod Santo:** Carl George...

**Adam Stacoviak:** Go ahead, Jerod...

**Jerod Santo:** You've got one teed up. I was just trying to get his name on the record here... Just in case he says something that \[unintelligible 00:05:01.15\]

**Adam Stacoviak:** He might run away.

**Carl George:** My name's Vinny Vasquez... \[laughter\] Just kidding.

**Adam Stacoviak:** Actually, get a little closer to the mic and give me a sound check.

**Carl George:** Sound check. One, two. I like barbecue. How about that? Tacos are good, too. I love eating.

**Adam Stacoviak:** Do you make your own barbecue?

**Carl George:** Oh, yeah.

**Jerod Santo:** Do you?

**Carl George:** I'm a good amateur. I'm not professional level.

**Adam Stacoviak:** You're a backyard barbecue guy.

**Carl George:** Yeah.

**Jerod Santo:** Backyard barbecue.

**Adam Stacoviak:** What's your -- tell me about your tools, your tooling, your cooking methods.

**Carl George:** So my smoker that I have, my father-in-law gave it to me before he passed away. He had -- it was in his backyard for a while, and I was picking up my kiddos from staying at grandma and grandpa's house one weekend, and my mother-in-law mentions "Oh, I told Catherine", my wife; she's like "I told Catherine that you could have that smoker." And I'm like "What? She never told me that." And then my wife denies it to this day. She's like "She never told me that. She's making that up." I was over there in like 12 hours, I had like four full-grown men over there lifting this smoker in the back of my truck. Like "Yes, I will take a free smoker."

**Adam Stacoviak:** How many gallons? Estimating.

**Carl George:** I don't know. It's not huge.

**Jerod Santo:** Well, four guys to carry it... That's big.

**Adam Stacoviak:** 18 gauge steel? Thick steel?

**Carl George:** Yeah, it was very thick and heavy. One of their cousins made it for him for an anniversary present, I think.

**Adam Stacoviak:** That's cool.

**Carl George:** It's a very old, but very good smoker.

**Adam Stacoviak:** Gotta love a good smoker hand-me-down, really.

**Carl George:** Yeah. I mean, better than paying --

**Adam Stacoviak:** It's already seasoned...

**Carl George:** Yeah. Better than paying a grand or two for a brand new one, right?

**Adam Stacoviak:** Oh, absolutely.

**Jerod Santo:** For sure.

**Adam Stacoviak:** That's where I'm at. I'm like, I don't have a hand-me-down. So my only option is to either build one myself, which I will probably not do, or spend money on a mill scale, or something else.

**Carl George:** Could you build it yourself? Do you know how to weld?

**Adam Stacoviak:** I have friends... Yeah. I can get it done if I wanted to, but it's heavy. You've got to bother your friends... It almost probably costs as --

**Carl George:** You wanna build it on site, so you don't have to move it.

**Adam Stacoviak:** I don't have the expertise... I want to like leverage Aaron Franklin's expertise, or a mill scale's expertise. It's like, "Why do I got to become a barbecue manufacturer expert just to become a backyard amateur?"

**Carl George:** Yeah. I don't have any other tricks than that, other than you want to use a good smoker. Volume matters, like you said. I don't know how many gallons this one is, but I noticed that, where like you have a backyard smoker compared to what you get at the restaurants, the real professional stuff.

**Adam Stacoviak:** Yeah, you have a tall stack...

**Carl George:** They've got like 10,000 gallon, or 1,000 gallon propane tanks that have been converted into smokers, and I think I think the volume makes a huge difference on that, on how how much you can control the temperature variation. It's huge.

**Adam Stacoviak:** Yeah, there's a lot of ongoing barbecue science. It's endless in Texas, that's for sure.

**Carl George:** Yeah. The smaller it is, the harder it is. Like, I have trouble sometimes keeping the temperature even, because it's not a huge smoker. It's a decent size, but... Yeah, that's I think the big that's the real secret from the big professional joints is. They can afford the massive smokers doing 20 briskets at a time, and that volume helps them keep the temperature so consistent.

**Adam Stacoviak:** I'm doing like one, maybe two, you know?

**Carl George:** Yeah.

**Adam Stacoviak:** I mean, brisket alone is expensive, so I'm gonna afford one.

**Carl George:** You don't want to mess it up.

**Adam Stacoviak:** Yeah. I mean, wings, stuff like that. But I could talk about barbecue all day.

**Carl George:** Same.

**Adam Stacoviak:** \[00:07:54.17\] But that's not why we're here. Let's talk about the confusion, I suppose, around Red Hat Enterprise Linux, the history of CentOS, to some degree, and really, the state of open source Enterprise Linux.

**Carl George:** Sure.

**Adam Stacoviak:** You've shared, we've had conversations, none of them so far recorded, and here we are.

**Carl George:** Good.

**Adam Stacoviak:** So help me demystify for those listeners out there... You work at Red Hat, to be clear.

**Carl George:** Yes, sir.

**Adam Stacoviak:** You are a principal software engineer, and you work on - what was it, the Extras?

**Carl George:** EPEL. Extra Packages for Enterprise Linux. It's an add-on repo. The closest analogy for people that -- I like to compare it to Ubuntu's Universe. The main difference is Ubuntu, they enable their Universe, their community packages out of the box. Like, you just have it, they're available, but they're not -- I think they've changed it a little bit with the new Ubuntu Pro stuff, but for the longest time Ubuntu's Universe repo was "These are the community things. Canonical doesn't handle these." And that's basically what EPEL is for RHEL. We don't have it enabled out of the box. We make it an opt-in thing. You have to go out of your way, add the EPEL repository, and then install the community main team packages you want.

And a good thing to note is EPEL - it's not its own project. It's part of the Fedora project. And the way the whole thing fits together -- it's much easier visually with the diagram... So I'm trying to think how I can describe the picture in my head... But there's like this line going across that's Fedora Rawhide. That's our rolling release, and that's where all the newest stuff goes right away. Kind of like Debian Sid. But after this point, the Debian analogies fall apart. It doesn't work. We do our Fedora releases every six months. Fedora 41, I think, just got released today. Those branch off of Fedora Rawhide. But that's something -- I think the last time I looked, it was something like 60,000 packages that are in Fedora.

Red Hat doesn't want to support all of those in the product, eventually where it gets into RHEL, Red Hat Enterprise Linux. So it's only a subset. I think roughly around 10% of the Fedora packages, like 6,000 or so, actually make it into RHEL. And that happens by going through CentOS. Or CentOS Stream, rather. There's a whole bunch of confusion around the name change we did. It's still the CentOS project. CentOS is not dead. It's just a little bit different now.

**Adam Stacoviak:** It's still available, right?

**Carl George:** Yup.

**Adam Stacoviak:** For those who think it's not there, it is there.

**Carl George:** Yeah. There's been a lot of misleading messaging around "CentOS is dead", or "You have to replace CentOS." No. There's differences, and you should understand them, but I think there are a lot of positive changes that people are missing out on it, because they're just buying the marketing line of somebody that says "I want to be the new CentOS."

Well, that's kind of flawed. Why don't you just be a distro on your own, make your own reputation, and then see what CentOS is doing? If it works for you, then keep using it. I think it would work for a lot of people.

There are some people that -- there's one guy I know at work that says that "If you have a RHEL-sized hole, we want to sell you RHEL." You know, 10-year lifecycle, vendor escalation...

**Adam Stacoviak:** Assurances...

**Carl George:** Yeah. Assurances, the partner ecosystem... Before we started recording, I was telling Adam that one of the big value propositions that -- I know Red Hat talks about it a lot, but I think a lot of people miss out on whether it's just phrasing or that it doesn't convey well... It's that Red Hat has spent literal decades and countless amounts of money building a partner ecosystem, with hardware vendors, software vendors, and upstream communities. And the big value premise you're paying for when you buy RHEL... And I'm not a RHEL salesman; this is going to sound very sales pitchy, but...

**Adam Stacoviak:** You're an engineer.

**Carl George:** Yeah. I'm very low in the weeds.

**Adam Stacoviak:** We purposely wanted to have you on here. We could have had others talk. And it's not we don't want to talk to them. It's that we want to hear from an engineer that doesn't have a dog in the fight insofar as you're trying to sell something or market something. We want to hear from an engineer who cares about and has been at Red Hat since 2019. Is that right?

**Carl George:** Yeah, 2019.

**Adam Stacoviak:** So you've been there for a while.

**Carl George:** A good bit of nuance to that is that, yeah, I've only been there since 2019. Relatively short. I've been in the CentOS and Fedora and Apple communities before that. I got hired out of those communities to do it full-time at Red Hat, which is another huge value that they do, is employing people in open-source projects to keep making open source. There was a whole track yesterday here at the conference about open source sustainability, and sustainability versus freedom and choice, and open source purists, and things like that.

\[00:11:53.06\] And yeah, a lot of people - their dream is to get paid to work in open-source. I feel great. I've achieved that dream. Other people aren't as lucky, or they get it like... I know my last employer had a thing where it was like "Well, you can do open source part-time, and then this much time you have to do these things inside the company." You have a lot of that. And I know a lot of companies, their OSPO offices, open source programs office, or equivalent name, they struggle around "How do we get our engineers to be better open source citizens? They're consuming all this open source. How do we turn them from just consumers into making sure the things we depend on continue to exist long-term?" Which is a theme that I'd like to segue off of into CentOS.

**Adam Stacoviak:** Yeah, let's go back to that. We've set the premise that you're a credible person to talk to...

**Carl George:** According to some...

**Adam Stacoviak:** You're not selling anything, you're not marketing... Not that they're bad people, but we don't want to be marketed to. We want to hear from an engineer, from the inside. So lay out CentOS. It's not dead, it's still there. How that relates to RHEL, how that relates to Fedora, and the whole life cycle of how you get to these packages that people can rebuild off of, and this sort of conundrum of the open-source enterprise Linux we live in.

**Carl George:** So, big question, right? I started going on a little bit, I started talking about how I wish I had a diagram of Fedora branching, and from Rawhide into its releases... Every three years or so we'll take one of those Fedora releases and we'll branch it again and start building the next major version of RHEL. That starts as CentOS Stream, but before we've announced it; it's still very early. We're still forming pre-alpha days. We're putting all this stuff together. And then at a certain point, they have enough of the changes that they want to go into the next major version of RHEL. Like "We want this version of Apache, this version of OpenSSL." Maybe it's the same ones at the exact time they branched. Maybe they go one forward, one back, maybe they add a few other features, build a few things differently... But that is the process of turning the Fedora, fast-moving, innovative project into the enterprise product, and that happens through CentOS.

There's a lot of chat about how -- they talk about RHEL-compatible, and the enterprise Linux standard, other people with other projects. There isn't really a standard. There's Red Hat making a product, and to whatever extent there is a standard of Enterprise Linux, CentOS defines that. That is where it happens. And so because it's happening there, you can influence it. You can actually contribute to it.

I know you all have a big developer audience, and the analogy I used earlier was that if you've got a choice between two libraries, one that is like active development, getting features, you can contribute to it, whether or not you have the ability to or the intent to, the fact that you can contribute to, a vibrant project that's growing and active - would you rather use that, or something else that says "Yeah, we're going to be exactly the same as the other thing, and if you send us a bug report, if it's in the other thing, we're just going to close it, and you can't contribute here. We are bug-for-bug compatible." There's this whole mythos about bug-for-bug compatible, and really, when someone says "I want bug-for-bug compatible with RHEL", what they mean is "I want RHEL without paying for it." That's really what it boils down to. It's a pretty blunt statement, but it's true.

And what's different from the past, when CentOS originally started, was that you can get just RHEL for free. There's a lot of free programs. There's the -- and this is going to sound sales pitchy again, but I'm telling you how to get free stuff. There's the Red Hat Developer Subscription for Individuals. Anyone can sign up and get 16 free RHEL instances to do whatever they want to with; no limits. You can even use it in a business. It's just a little fuzzy because it is individual, right? You can't agree to the terms on behalf of an org. So for most businesses of more than one person, it's not really going to work.

**Adam Stacoviak:** Yeah.

**Carl George:** There is also another program, Developer Subscription for Teams, that'll give you -- I don't remember the exact number. It's high. It's in the thousands, of free RHEL instances in your non-production environments, if you're paying for RHEL in production. And then there's also programs for giving open source projects free RHEL, there's programs for giving educational institutions free, or heavily discounted RHEL... There's tons of ways to get RHEL without paying for it. But there are definitely scenarios where Red Hat once thinks that "Yes, this person should pay for RHEL." And a lot of those people are the ones that they use CentOS, rather than just "I want an operating system", they wanted just to get RHEL without paying for it, or get a discount on their RHEL. They'd use 10% of their fleet on RHEL, and then the rest on CentOS to cut costs.

\[00:16:06.19\] That was never a good fit for it, because of small, subtle differences in the engineering and how it's built. One of those is that Red Hat Enterprise Linux actually has overlapping minor versions. You can stay on, say, 9.0 after 9.1 and 9.2 come out, still get security updates, and some third parties only certify on specific minor versions.

So if you've got third-party vendor software that hard requires 9.2, using anything that's on one of the other rebuilds that's on 9.4, or on CentOS Stream that basically has 9.6 content right now, it's a little bit ahead on minor versions, then if a vendor requires 9.0 strictly, then it might not work. But Red Hat will sell you 9.0, still with security updates. 9.2 might be a better example, because it doesn't last forever. You can't stay there forever. It's just an extension. But those overlapping things are things that community projects have never had. CentOS never had them. And the new RHEL rebuilds that are trying to claim that they're the new CentOS, they don't have them either. They also have corporate sponsors that sell those extensions. They're trying to make their buck too, which is understandable. We're all trying to make money in open source... But the big value prop that I talked about with Red Hat, with the ecosystem stuff is not that you'll just go use this and it's a cheaper price than RHEL, it's that you can go to the people creating this software. A lot of times they're maintaining it in RHEL, they're maintaining it in CentOS, and oftentimes they're maintaining it in Fedora, too. Not always, but there's a huge participation from Red Hat in Fedora, all the way. It is separate from Red Hat, but we're very involved at every step of the process.

So you can make a feature request and say "I wish this software did this thing." Red Hat can say "Alright, that's a good idea. Here's how we'd go about it. First, we're going to put it in the Upstream project, where we're also participating. Then we'll build it in Fedora, and then it'll go into either the next minor version of RHEL, or the next major version of RHEL, depending on how disruptive the change is." And then they put it in CentOS stream next, and then it goes into RHEL after that. So having people that are holistic across the entire pipeline, that's the expertise thing. From the engineering angle, that's the real value I see, looking at it with a set of engineering eyes.

**Adam Stacoviak:** Any thoughts, Jerod? Where are you at with this?

**Jerod Santo:** I guess I'm just still confused... Not because you're not doing a good job, but because it's --

**Carl George:** Sure. It's a lot of information.

**Jerod Santo:** It's a lot of information. And maybe you do need a diagram, perhaps... Because I'm jumping from noun to noun, and...

**Carl George:** I can put a diagram in your show notes...

**Jerod Santo:** Yeah, that would probably be helpful.

**Carl George:** Yeah. You mentioned about how it works differently now... I want to go into that a little more if I can.

**Adam Stacoviak:** What do you mean by that?

**Carl George:** CentOS working differently, right?

**Jerod Santo:** Working differently than what?

**Adam Stacoviak:** Differently prior to acquisition.

**Carl George:** The IBM acquisition stuff is kind of tangential, right?

**Adam Stacoviak:** No, no, no. I mean the acquisition of CentOS open source to CentOS Red Hat controlled.

**Carl George:** Oh. \[unintelligible 00:18:47.15\] So CentOS started outside of Red Hat, and then - I think it started around 2004. About 10 years later, the project was kind of on the ropes. Maintainers were burned out. They had day jobs, no one was getting paid to work on it... And what Red Hat saw was that - it's kind of weird. It's a bit of an incompetence thing. We had inside Red Hat development teams using CentOS to build with, because we couldn't get out of our own way and give our own teams free RHEL. It's super-messy, and it's gotten better since then, but at the time, that was kind of the state of things.

**Adam Stacoviak:** That's pretty funny.

**Carl George:** Yeah. Maybe I shouldn't talk about that, but I think it's hilarious.

**Adam Stacoviak:** It's too late. I'm just kidding.

**Carl George:** Nobody's told me I can't say that. But that kind of drove it. Basically, Red Hat was like "We want this project to keep existing", and so they made job offers to all of the developers. Most of them took it. A few of them turned it down. And then they basically came into Red Hat, partially. They were still kind of kept off to the side. They're like "Well, you're still kind of duplicating this product, but we want you to keep going and exist." And so they kind of sat in that limbo for a while, where they weren't growing, they weren't getting people resources, but they had the resources they need to focus their full-time on it, get a paycheck, and keep the project going.

\[00:20:01.26\] That was a little bit of an infusion, but we still had this problem around this whole bug-for-bug thing, and also being a duplicate of the product. There would never be a business incentive to put the same engineering resources into your products and this project that is trying to match it as close as possible. That would never make sense. No business person would agree to that. But because of all the nuance around how it was being used as a development platform... But we also saw the pain points of it being a development platform that lagged behind the thing it was trying to match, right? CentOS would typically lag about a month behind on the minor versions. Like, RHEL 7.6 would come out, and then CentOS 7.6 would be -- it'd be 7.5 for a while, they'd finish the rebuild and publish it, and about a month later you'd get it. So those rebuild gaps were real painful for the developers trying to use it as a platform to build on.

**Adam Stacoviak:** Because at that time, CentOS was behind RHEL, and the transition that a lot of people got upset about was they were using CentOS as this open source RHEL-like operating system in production, which was the bigger backlash. And then Red Hat's move was to push CentOS in front of RHEL, let it be CentOS Stream...

**Carl George:** That push wasn't about that reaction. That reaction came later. But yeah, I get you.

**Adam Stacoviak:** It's kind of like -- if you're painting this visual, CentOS used to be behind RHEL, where RHEL's in front of it, and then it became CentOS Stream, which was in front of RHEL. The innovation was happening in Fedora, landing in CentOS Stream, and then ultimately RHEL as a product.

**Carl George:** That's where we're at now. It was just a really messy transition. Part of that was like \[unintelligible 00:21:27.04\]

**Adam Stacoviak:** That's a compression of a lot of time.

**Carl George:** Yeah, definitely.

**Adam Stacoviak:** I'm not trying to like not go into the details, but we don't have a lot of time, so...

**Carl George:** For sure. And that was the dream originally of it, right? We had CentOS lagging behind RHEL. It was painful for developers. It needed to exist, but we had developers frustrated that "Okay, well, I'm making this change, but then it changed in the next minor version, and I didn't find out about it until a month later." So they wanted to get ahead of those things, and they basically wanted RHEL a little bit earlier than they were getting RHEL-like things in CentOS, in what I call classic or legacy CentOS. The official distro name is CentOS Linux.

What I think should have happened, the way it should have gone down was we just did a clean break at a new major version and said, for example "CentOS 9 is here early, and it's different now." But because of some compressed timelines, and people were excited to get it out there, we ended up doing two variants in version 8. We had the classic variant, which was a rebuild following RHEL, CentOS Linux 8, and then we had to make a new name to distinguish the variant, which became CentOS Stream 8. It was still the same basic operating system, just released on a different cadence. And I can say that because at the time, that was my full-time job. I'm working on EPEL now, but that was what I got hired by Red Hat to work on. I was doing those builds. It was still -- and I mentioned earlier that the RHEL maintainers are taking over control and doing all that work in CentOS now. The early transition wasn't that way. The small group of people, like three or four of us that were building classic CentOS, started having to do two rebuilds. The rebuild of CentOS Linux following RHEL, and then the rebuild of CentOS Stream that was ahead of RHEL. And it was really messy for a while until we could get it actually properly onboarded in version 9. We ended up putting it on GitLab, and so all the RHEL maintainers would do their packages there, create them and do all their development, and then there wouldn't be a rebuild process. They would just build it and it would become CentOS Stream. But in the early days, we'd have builds, and they were all rebuilds, we'd tag them at different times, basically just release them at different times, and some of them would be classic CentOS Linux and some of them would be CentOS Stream 8. But it was all from the same build system, all from the same people, all from the CentOS project.

So that's one of the things that irks me when people say "This isn't the same CentOS." I'm like "No, but yes, it is." It's the same people, it's the same project. CentOS isn't dead. Technically, CentOS is the project. CentOS Linux and CentOS Stream were the distributions. But thankfully, we don't have that double thing anymore. We onboarded all the RHEL people, and it's just CentOS Stream. And I think -- my personal opinion is that we should one day just drop the stream and just say "Yeah, this is just CentOS. Most people just call it CentOS. Let's avoid the confusion. We should have never had the overlap. It should have just been a clean break at a new major version, and leave all the old major versions on the old model." But that's not the way the transition happened.

**Adam Stacoviak:** \[00:24:05.24\] Yeah. Clean breaks are good.

**Carl George:** It was a poorly executed transition, in my opinion. Some of it predated me, some of it I was front row and center, and doing what I could...

**Adam Stacoviak:** Yes.

**Jerod Santo:** Where are the open source lines drawn across these distributions? Like Fedora, CentOS Stream, and then RHEL.

**Carl George:** So it's all open source. And everything in Fedora is just out there in the open, built in the open. There's nothing private. Everything in CentOS Stream is the same way. It's built in the public, it's all public, and you can contribute to it.

RHEL, the contribution path into RHEL is through CentOS, because functionally, the way it works is it's the major version of RHEL. You've got like CentOS Stream 9 now, is where all the RHEL 9 development happens. And then periodically, they branch that into 9.4, 9.5, 9.6. So you can't actually contribute directly into a RHEL minor version, because those are built inside Red Hat. But then the major version, you can get it on there. So from the developer angle, you can do pull requests to master, but you can't do pull requests to the 9.4 branch.

**Jerod Santo:** Okay.

**Carl George:** Sometimes the RHEL maintainers will say "Yeah, we also have customer pressure to get it in these older minor versions", and then they can do that part internally. But then the after effects is it's still all open source, it's still all published, all compliance with all the licenses. Once you have RHEL, you have access to the source for every package, even the ones with licenses that don't require it, like MIT or BSD license. So it's fully open source, top to bottom.

**Adam Stacoviak:** So it sounds like we're in this rebuilder world, where you have the Rockies and the Almas, and the many others... I don't fully understand it. It seems like, from an outside point of view, or from a purview sort of point of view, that it is more about trying to get what is literally the RHEL product - which is a product, and you can say it's open source, and you can get access to packages, and RPMs etc. I tried last night with your help to find a way to download today, in a moment, RHEL. You said it's open source. I had to sign up for an account with Red Hat. I had to go through hoops, essentially, to get it. And it may be literally open source, but it's very challenging to play with what is the RHEL product. And what I mean by product, it is open source-derived as a trademark product, given to customers who pay for it, with a license more so for support and assurances and security. Totally cool, right?

**Carl George:** So I'll push back on you a little bit.

**Adam Stacoviak:** Okay.

**Carl George:** You tried real quick on your phone while we were drinking at the bar.

**Adam Stacoviak:** I wasn't drinking. You were drinking. I wasn't drinking. I was drinking water. \[laughter\]

**Carl George:** Okay. Well, very quick attempt on your phone. It's not the same as like sitting down like "Yeah, let me create this account." I won't create accounts on my phone. I'm going to wait till I get on my laptop again. But it is --

**Adam Stacoviak:** Okay, let me push back too then.

**Carl George:** ...there's a little bit of a barrier. Yes, you have to sign up. I agree.

**Adam Stacoviak:** Let me push back too, then. If I want to go play with the product called Ubuntu, what's the latest version? 24.04?

**Carl George:** Yes.

1**Adam Stacoviak:** I can go and tap a Download link...

**Carl George:** Well, 24.10 now, I think.

**Adam Stacoviak:** 24.10. Well, LTS.

**Jerod Santo:** Download the ISO, right?

**Carl George:** Sure, your point.

**Adam Stacoviak:** Yeah, I can click on it --

**Jerod Santo:** No account required.

**Adam Stacoviak:** Yeah, no account required. So there's no hoops to get to that product, but there is hoops to the RHEL product. So that's my point. It's challenging.

**Carl George:** I'll give you a throwback to one of your older episodes when you interviewed Adam Jacob.

**Adam Stacoviak:** Sure.

**Carl George:** Fantastic interview. And he brings up the point of like you make a product and you sell it. You don't give it away for free.

**Adam Stacoviak:** I agree.

**Carl George:** Ubuntu's model is that they are giving their product away for free, which - there are pros and cons to that, and I'm not gonna... I don't want to criticize another company's business model. I wish them all luck. I've got friends that work in Ubuntu and work for Canonical, or ex-Canonical... But it gets back to that problem. You can have all of the market share you want by giving away your product for free, and it's hugely successful and popular... But then - I know that my Canonical friends have told me before that Ubuntu's biggest challenger was always free Ubuntu. Like, everyone that's getting it for free because they can, and the conversion rate of people that are should be paying for it to help sustain the engineering of that product is a vanishingly small number. And it's an extremely hard sell to say "Here's why you should pay us" when you can just get the product for free.

**Adam Stacoviak:** \[00:28:04.12\] Right. And I'm not arguing that point.

**Carl George:** So Red Hat tries to take a different stance.

**Adam Stacoviak:** But I'm talking about access, not selling a product, in this case.

**Carl George:** Well, the access is the same thing, because the access is part of that subscription, part of that product.

**Adam Stacoviak:** What I'm trying to say is the angst. The angst is there was CentOS prior to Red Hat's acquisition of the open source project.

**Carl George:** Yeah. And a lot of that is confusion, right? People looked at it as "This is the free access version."

**Adam Stacoviak:** Yeah. This is the RHEL alternative to RHEL, that's open source, that I can use in production. It is blessed for production.

**Carl George:** What would you say if I told you that, one, it was never blessed for production, and two, that there's even a website --

**Adam Stacoviak:** It was marketed as that.

**Carl George:** No, it definitely wasn't. Show me a page that says it was blessed for production. But anyways, that's a tangent.

**Adam Stacoviak:** Wasn't that the case though? I mean, that's the major issue, is that people are using it in production.

**Carl George:** That's what people said. There was no blessing, right? But that's a minor point. Yeah. There's some nuance to it.

**Adam Stacoviak:** There is nuance there. That's not the point I'm trying to get to though.

**Carl George:** What would you say if I told you that I can show you a page right now on the Red Hat website that says "RHEL is not intended for production"?

**Adam Stacoviak:** We had this conversation last night. I'm down for it.

**Carl George:** Yeah. It's because - the page I'm talking about, it's in the product store where they say it's a self-support RHEL, where you can buy just access to RHEL, and can't file support cases. And it says "This is not intended for production." Because Red Hat thinks that you should have support for your production instances. It's that simple. So when they say that -- there's also a blog post that says CentOS Stream is not designed for production, or intended for production, because it doesn't have support. It's around that part. But it's been misinterpreted to say -- even Red Hat says this isn't good enough for production. And there's other interviews with other Red Hatters, like from the Fedora Flock Conference, Brian Exelbierd. He said that just because we don't say you should use it for production or we don't intend it for production doesn't mean you can't. And there's lots of companies that do. I've got some friends over at Meta, Facebook. Their fleet is probably the largest fleet of servers in the world. I think the last PR-approved term they got to use was millions, plural, of instances. And they're running CentOS Stream everywhere. And they get on the new versions as soon as they can. They're active contributors, and they're deploying this stuff regularly. They use it at massive scale in production.

**Adam Stacoviak:** Right.

**Carl George:** So it certainly can be used. It's still RHEL-lik, and it can be used in production.

**Adam Stacoviak:** It can be. Your models may vary, right? Your risk factor is your risk factor. What I'm trying to get to is not to say you are wrong or right, meaning the proverbial you is in terms of Red Hat. It's this angst that allows or creates the need for the rebuilds. Alma, Rocky. And the angst there is they want RHEL for free.

**Carl George:** Yup.

**Adam Stacoviak:** Basically.

**Carl George:** A hundred percent. And there's even more detail to that. We talked about that partner ecosystem stuff... The whole idea of being RHEL-compatible is because they want access to that ecosystem.

**Adam Stacoviak:** The real brand name. Even the brand name.

**Carl George:** Yeah, a little bit of that. There's some of the confusion, and that's going on now with the whole Automattic and WP Engine stuff around brand name and how you identify that. But the bigger thing is they're like "Oh, I don't care about having RHEL. I care about this app I can install, and it works on this hardware..." That whole ecosystem, that is what they're buying into, and that is what Red Hat sells.

**Adam Stacoviak:** As a product. Which I'm cool with. I get that.

**Carl George:** The whole idea of being exactly RHEL-compatible is the idea of getting a foot into that ecosystem and taking advantage of that ecosystem from people that did not spend decades building it, and countless dollars building it.

**Adam Stacoviak:** Right. And it's just weird that there's this angst out there, because they essentially want -- if there were other people here that could argue against it, they would probably argue against it. But my opinion, my summarization of what I understand about it is they essentially want what RHEL gives as a product, for free, as in freedom of open source, and free as in cost.

**Carl George:** Yeah. And that conflation is a sticking point for a lot of people.

**Adam Stacoviak:** \[00:31:54.29\] And CentOS used to give it - I'm quoting, "used to give it" - prior to being acquired by Red Hat. Now it's upstream from RHEL in terms of a visual diagram. It was acquired as an open source, acquired by. Now it is where the active development happens, which ultimately lands in RHEL the product. And so the angst there is the folks want what is enterprise-grade Linux, RHEL. You're considered the standard, the gold standard of enterprise-grade Linux. They want it for free. That's the angst.

**Carl George:** What I realized around that angst is that we made all those changes and some of it predates me, some of it was right around when I was getting hired... But what I learned about the CentOS community was they're basically two different personas, and it kind of splits evenly in the lifecycle. There were the people using CentOS in the first five years of the lifecycle. New version will come out, they'll say "Yes, I want these new features, I want these new capabilities, and I'm also frustrated." Those happened to be the same people that were frustrated that they couldn't contribute to it and make changes to it. Then there were people kind of using it in the last five years, instead of using RHEL. For them, it was just the free, unbranded RHEL, they were never going to contribute, they don't care about being able to contribute. They just want to get the product for free, and they want it to be maintained for as long as possible.

So those two personas were kind of where we unintentionally divided the community. People that liked what we were doing with CentOS Stream, being able to contribute, and it still has a five and a half year lifecycle, which - I mean, that's the same thing Ubuntu LTS gives you without the pro subscription. Five years. So it's still a pretty long time. It's still an LTS. Those people, they're like "Yeah, I like these changes. This makes a lot of sense to me." And the people that do not care about contributing, do not care about getting their bugs answered, they just want to get the product for free, they're like "Oh no, I'm going to go to these other guys that give me the same thing." The big change is because it got actually harder on CentOS and Red Hat once the acquihire thing happened, and they were paying the CentOS maintainers, because customers would come in and say "Well, you're making both of these things, so why should I pay you for one and not the other? Or why should I pay you for the one when this other one's free?" And that conflation of having Red Hat sponsorship, it helped the project not fail and collapse, but it also made it harder to have those conversations, to draw that line between the product and the project.

So now the new rebuilds - I heard one guy inside Red Hat described it as "These changes are Red Hat getting out of the rebuild business." Like, we decided that's not where we want to spend our time. Here's the way that building an operating system works in our pipeline holistically, to make a better product. And it's still really close to RHEL, and you can still use it for whatever you want to, but it's not going to be trying to match RHEL identically anymore. It's getting six months ahead of RHEL on features and fixes.

But like you said, a lot of those people that are going to different alternatives now, they're in that latter group, the five plus year usage, where they just want the same thing. They don't want anything to change ever, and they don't want to think about being able to contribute being a benefit.

**Adam Stacoviak:** It's mostly what I wanted to cover. I know we can probably go deeper...

**Carl George:** Wherever you want.

**Adam Stacoviak:** ...and I've got more I can say, but I don't know how much more we want to go. How much do we want to spend on this, Jerod? Five minutes?

**Jerod Santo:** I want to hear about the future, man. Juicy. Juicy future stuff. Well, real quick before that, how does Meta get their support when their CentOS stream doesn't do what it needs to do? Like, what do they do?

**Carl George:** They're self-supporting. They're active in the projects, they're contributing, they identify a feature that they want or something that's broken that they want to fix, a bug, and they're contributing that into CentOS stream. They're active contributors there. They're contributing upstream projects... I know they're heavily involved in Systemd. They participate there. A lot of times you'll find talks from them at conferences like Scale, where they're talking about the internals of Systemd, because they employ a lot of Systemd developers. They have Kernel developers, Butterfs developers, all kinds of stuff. So they have a lot of that expertise in-house.

**Jerod Santo:** Gotcha.

**Carl George:** So they don't really need to leverage that support any more than just interacting with those communities already.

**Adam Stacoviak:** Alright...

**Carl George:** So the future stuff.

**Adam Stacoviak:** Juicy future.

**Jerod Santo:** Juicy.

**Carl George:** \[00:35:58.22\] So the major version right now of RHEL is 9. Everyone knows that. Same for all these RHEL-likes, and CentOS stream, which is still RHEL-like. It's all major version 9. Everyone can count and knows that the next number after that is 10.

**Adam Stacoviak:** Is it 10?

**Carl George:** Yes!

**Adam Stacoviak:** Was it 8, 9?

**Carl George:** So there's a -- I'm making this joke and it's lost on me, because there was actually a time before I got hired, where... There was some weird marketing thing around it where they were telling engineers that they couldn't say that the next version was 8. And I don't know where it originated or why...

**Jerod Santo:** Oh, wow...

**Carl George:** But then some RHEL marketing folks showed up at the... I think it was the Fedora Flock Conference, with stickers with the rocket ship and the number 8 on it, and after all the messaging to the engineers was like "Don't say the number 8. Just say "whatever the next version is." And so the engineers were all mad. They're like "Oh, these guys showed up with the number 8 on a sticker and they told us we can't say it? That's so stupid. Why do we even have this problem?"

**Adam Stacoviak:** Okay. I missed that joke then.

**Carl George:** Big company inner things, whatever.

**Adam Stacoviak:** Weird things.

**Carl George:** The next version's 10.

**Adam Stacoviak:** Juicy stuff. Go.

**Carl George:** So RHEL's on a three-year major version cycle now. Six-month minor version cycle. It'll be a little more reliable. It used to be kind of hit or miss, and one of the feedback we got from customers was - bringing it back to Ubuntu - they have their schedule where they're like "Yeah, we're publishing this month. You can count on it." And a lot of customers really value that. So eventually, version 8 was when they adopted that, in 2019. So three-year cycles. You can see that RHEL 9 came out in 2021. Sorry, 2022. So 2025 is when RHEL 10 is going to come out. And it's going to be -- we can't officially say dates, but there's an event in 2025, in the spring, that Red Hat puts on, that might make sense for there to be product announcements at. Anyone can figure that out just by looking at public websites. It's not that hard. Not that that would be the exact date, but probably pretty close. It's a good time frame to expect it.

**Jerod Santo:** Gotcha.

**Carl George:** CentOS Stream 10 has already branched off from Fedora. It's getting that initial productization to stabilization to become RHEL eventually. It's in a state now -- you can get it and install it today, but we haven't announced it as... You know, 'ready' is a weird word. I think we usually use 'launched' or 'released', but there's going to be a launch announcement or a release announcement for CentOS Stream 10 pretty soon, because it's getting to the point now - it's not that high pace of stabilization. It is "Okay, well, everything is --" We basically have all the features we want. We might make a few more changes before it gets released as RHEL 10, but it's basically stabilized, and this is what you can expect RHEL 10.0 to be, whenever it comes out next year.

So we're going to have that announcement pretty soon, probably next month or the month after, where we announce "CentOS Stream 10 is here. You can use it now. It's pretty good. We like it."

Also Appleton, the thing that I work on directly - we're going to announce that about the same time. When we've announced them separately, we usually had the feedback that "Well, why would you announce--" If we announced one, immediately the question is "Well, I want the other one to use them together. I want those extra packages and I want the base operating system." They're useless without each other in a lot of people's opinions. So we're going to do kind of a joint announcement, probably the same day or the same week where we say "Yup, Appleton is here. We've got all these extra things you can add." The community has been building them for the last few months, and we've had the infrastructure online, but we're doing a flag day. Like "Here it is. It's as ready as it will be." It's the thing, like, do we say it's ready at 2,000 packages? Do we say it's ready at 3,000? Like, we're going to keep adding stuff, and even after we announce it, it doesn't stop growing.

So we've got those things coming up... And timeline-wise, you can look at it as that's about six months before the RHEL 10 launch. Yeah, so spring of 2025 is when RHEL 10 is going to be coming out... And then we're a little bit more than six months before that right now. We're getting all this stuff buttoned up to say "Yeah, CentOS Stream 10 is here. You can use it. It's a major version, stable operating system." It doesn't have minor versions, but it's going to be maintained for five and a half years, and it's very RHEL-like. You can add all of these EPEL packages we've been working on, and use it right now, and it'll be good to go.

**Adam Stacoviak:** I love it.

**Carl George:** That's the good stuff coming up.

**Adam Stacoviak:** What exactly is extra in the extra?

**Carl George:** \[00:40:00.07\] Okay... That is just the mentality of it, of - it's only packages that you can't get in the base operating system. So I kind of mentioned that there's like 60-something thousand packages in Fedora, and only about 10% of those go into CentOS, and then eventually go into RHEL. Everything else in Fedora that isn't that 10% is eligible to go into EPEL. So I can say I maintain the CADI web server. I maintain that package in Fedora, and I also maintain it in EPEL branches. Up to date, I haven't seen anyone say "We need to put CADI into RHEL." We have customers asking for CADI. Maybe that changes in the future. But for now, I maintain it in Fedora and I put it in the EPEL branches for each release. EPEL 7, EPEL 8, EPEL 9, and EPEL 10 now. Put it in there, so people can use it on that RHEL release or that CentOS release, or any of the other RHEL-like things that are out there. They use it there, but it's not a RHEL package. It's not maintained by Red Hat, and you can't file a support case for it. So that's what the extra in the name is for. It's only additional things.

If, for example, CADI, if Red Hat decided to add that into RHEL, into the product, it would then become ineligible for EPEL, and we'd retire it from there, and instead of getting it from the community repo, you'd get it from the main repos.

**Adam Stacoviak:** Gotcha.

**Carl George:** Does that help clear that up?

**Adam Stacoviak:** That was a good summary, I think. That's what I wanted to cover for a while... I think it's been challenging from the outside, as a non-Red Hat Enterprise Linux user... I'm not that person. Yeah. But I care about Enterprise Linux, because I have friends who care about Enterprise Linux.

**Carl George:** Yeah. Using it at work or at home...

**Adam Stacoviak:** All over the place. Friends at Facebook even that rely upon CentOS, of course. And it's just kind of crazy how the world has fractured.

**Carl George:** Yeah.

**Adam Stacoviak:** And then the parts we can't -- that I won't really go into, but that other side on the rebuild side is also offering support, and financially-backed services. So why not just buy Red Hat Enterprise Linux in the first place? We've talked about that in side conversations, Jerod...

**Carl George:** I mean, I'm not going to argue with that point, but... \[laughs\]

**Adam Stacoviak:** I know you won't, but what do you think about that, Jerod? We've talked about that. It seems strange to go through all this, and have these rebuilds that is either bug-for-bug compatible, or... There's words that leverage the RHEL brand, to be RHEL-like, that says it's free and open source.

**Carl George:** They're trading on the RHEL brand.

**Adam Stacoviak:** But then they're offering support or other financially-backed services. That's basically what Red Hat's doing to RHEL in the first place. The rabbit hole goes deep...

**Carl George:** It is.

**Adam Stacoviak:** Carl, thank you for sharing that story...

**Carl George:** Yeah, I'm always happy to talk about it.

**Adam Stacoviak:** ...and going deep with us. We appreciate it. Thanks, Carl.

**Carl George:** I appreciate i

**Jerod Santo:** Thanks, Carl.

**Carl George:** Thanks for having me on.

**Break**: \[00:42:42.29\]

**Jerod Santo:** Max Howell, creator of Homebrew, creator of Tea Protocol... Did I cover all the gamut, or is there more?

**Max Howell:** Oh, there's more, but those are the things that people care about.

**Jerod Santo:** \[laughs\] There you go. I do like to hit on what people care about. Now, I think the last time you and I crossed paths was some sort of announcement around Tea, I think... Maybe that was TXCL, or something; or there's more to it. It's been a while. But I remember you put something out... I covered it on Changelog News, and I wrote something about it like "I feel like they're trying to boil the ocean", or I don't know what I said.

**Max Howell:** Oh, yeah, yeah.

**Jerod Santo:** And that affected your game plans by some way, right?

**Max Howell:** Yeah, yeah. It was an important little pointer for me. I appreciate that.

**Jerod Santo:** Yeah. That's all I remember.

**Max Howell:** Yeah, because I was trying to do too much. That was what was Tea/cli, which we'd now call PackageX.

**Jerod Santo:** Okay.

**Max Howell:** And... Well, I was very much aware of the fact that Homebrew is enormous. And here I was, trying to do Homebrew 2.0, something I said I'd never do...

**Jerod Santo:** \[laughs\]

**Max Howell:** And I think Ryan Dahl with Deno is seeing the same kind of problems, right? Once you've had something that's a huge success, how do you make something that is as big even as that? You've got this enormous momentum behind the previous thing. So I was very much aware of that when I was building out tea/cli, and so I put too much into it, thinking "Well, that's the only way I'm going to get people to come on board with it", right?

**Jerod Santo:** Right.

**Max Howell:** And you pointed out quite sagely, I think... It made me realize that yeah, it was doing too many things, and that was just confusing. So we whittled it down to just what it is now, which is like an executor for packages. So you don't think about installing them, you just run them. And that's enormously powerful, actually. I think over the next few years people are going to start seeing that. Because it's so good for scripting, for example... You can write a PackageX shebang in your script and then add all the packages you want. And then you've got a portable script you can just pass around, that you don't have to worry about if people have things installed or not. It opens up the entire open source ecosystem to it... So I've got a few things planned to use that.

But we realized along the way this is all part of Tea Protocol, right? ...that even though we thought initially we would be putting functionality for the protocol into tea/cli, actually, no, that doesn't make sense. It's diffusing the messaging once again. I think I was a little too influenced by our investors, and that's why we went down that path... But we course-corrected, so now we're completely focused on just the protocol, which - you know, that was the original vision that I had, to build something that could help people who create open source to actually get some of that value that they create back to themselves, rather than just creating value for people who build on top of it.

**Jerod Santo:** Right. The people beneath the people beneath the people, right? Like, the dependency of the dependency... And letting that value chain trickle down, or trickle up, whatever direction you're looking at it from. So how does that work then?

**Max Howell:** Yeah, so we've built it... We've been running the testnet since February, and we got 1.7 million people who've signed up to use this testnet... Which are pretty great numbers by any standards, but especially in the Web3 space, you don't get that kind of users. I think it's a testament to people understanding that what we're doing is important, but also that we've cracked it, that we understand how to take the value of open source and actually expose it.

So until now, we all understand the value of open source. Everyone builds everything on top of it. But very little of that value ends up going back to the people who maintain it. That's my story. Homebrew was a passion project that became my full-time job for free. And I had to keep taking new jobs, quitting them after I'd saved up some money working on it... And that's why I founded Tea Protocol. I was once again in that position, wanting to work on open source full-time.

So our system - yeah, it changes the economics of open source. That was one of my conclusions before founding Tea Protocol, is that the system of economics that we use in this world - it doesn't fit cleanly onto how open source works.

Open source is really weird. There's no real thing that's like it elsewhere in the world, so it was necessary to build something new, that used economics in a new fashion. So that's what we've built.

\[00:52:07.04\] We have an on-chain oracle called Chai, that computes the impact of all the open source projects, all 10.5 million of them, using package manager data and dependency data to calculate that. The higher your impact, the higher your rewards. Every 24 hours we just give you free Tea token. And then we have -- with the 1.7 million people who signed up, only a third of them are developers. Two-thirds of them are people that maybe didn't even know about open source before. Once they heard the story of how everything they've used on the internet for the last 30 years is built on top of this open source, they understood that there's a huge amount of untapped value there, that they want to participate in. So they're the input for the monetary parts that allow the open source to be remunerated.

And I've had loads of tokenomics experts looking at it over the last three years... You have to calculate the sell and the buy pressure correctly in order to make it so the token price stabilizes at something, which then makes it so the open source maintainers can sell their token, and use it to fund the development.

**Jerod Santo:** Right. Because if they received a bunch of token for their package getting popular, and they went to go sell it and they were just dumping on the market, and the demand wasn't there, then the price would crash, and you'd have your typical peaks and valleys of the crypto sphere. So you're trying to like stabilize the coin, basically? Or what's this tokenomics? You're trying to stabilize the value of the token, or...?

**Max Howell:** Yeah, exactly. It's very important that we do that. Otherwise, it will be a project that just goes "Whoop!", and down, as you were saying. And then it hasn't succeeded at all. And that was a difficult problem to solve. We have lots of mechanisms in there that will be there for the launch. We're having to launch later this year or early next year.

**Jerod Santo:** Gotcha. So it's not live yet?

**Max Howell:** No. But the testnet is, so people can sign up. We have 17,000 open source projects that have onboarded to Tea Protocol during the testnet. So we've got good traction. I'm hoping when mainnet goes live, the proof will be in the pudding. People will see that this is something that actually could fix these fundamental issues with how open source is funded. And it's really a no-brainer if you're an open source project with any clout. Onboarding is free, it's very low effort to do so; too low effort, as you probably saw some of the negative press we had over the last year or so.

**Jerod Santo:** Yeah, there's been some spammers spamming...

**Max Howell:** Yeah. We incentivize people to try and break Tea Rank or Chai... And they've found a way to do it by creating more than 200,000 packages on Npm. We're glad they've found a way to break it, because that meant we could fix it, and that's what the testnet is for. But yeah. I don't feel good about it, but... When you're building new things, there's always unanticipated consequences to that. A lot of people think I should have seen this coming... I kind of agree with them. I should have seen it coming. But when you're building stuff, you only have so much time.

**Jerod Santo:** Yeah. I mean, sometimes you're learning as you go. I remember that happening -- I don't remember what my comment was at the time, but once I saw it, I was like "Yeah, this seems like a natural progression." Live and learn, right? Live and learn. And it was still early, so that's good.

**Max Howell:** Yeah. And it won't happen again. We've closed the gap.

**Jerod Santo:** Cool.

**Adam Stacoviak:** What exactly is Tea?

**Max Howell:** Well, the main purpose of T, at least what I wanted to accomplish when I came up with the idea, was to use cryptocurrency to fix what we call the Nebraska problem after that famous XKCD comic. You know, the \[unintelligible 00:55:46.21\] representing all of open source, as it's stacked on top of each other... And those little projects near the bottom that are fragile, because the people who maintain them don't have the time or the incentive to do so, and yet it's holding up so much critical infrastructure.

\[00:56:04.06\] So yeah, it's a cryptocurrency project that uses a unique tokenomics model in order to give open source developers token rewards on a 24-hour basis. And a lot of the other pieces of it are designed to attract the interest of typical crypto investors, or just like normal developers who want to show real support for their open source projects. A key differentiator between us and most ways of supporting open source is that there is no donations in our system. You can buy a token and then stake it against projects, so both you and the project is gaining from this. There's no gift. It's more like an investment.

**Jerod Santo:** So what would... So say there's a piece of software that's signed up for the Tea Protocol, and so I can use Tea to execute it, right? Am I then required to also buy into the... Like, to give back value? Or is it still I can just use that without doing it if I want to? Like, it'll lock you in?

**Max Howell:** Yeah, so nothing's different. Going into it, I knew that this wouldn't work if we changed anything about how open source already works.

**Jerod Santo:** Right.

**Max Howell:** You can't charge for open source. You can't make it so you have to buy a token and stake it, even if you can get that token back before you can use things. So it works based on calculating the impact of open source projects, and then you are creating a yield on top of those projects that then goes to the project maintainers.

**Jerod Santo:** Okay.

**Max Howell:** They then distribute the token however they see fit. But yeah, as a user, nothing's different. And as a maintainer, nothing's different. I didn't want to change the incentives in open source either. It's still incentivized in exactly the same way. It's just now you're getting a token for doing that, rather than before, where all you get is reputation, or kudos, satisfaction, perhaps...

**Jerod Santo:** Now, inside of the Tea Protocol, can I place like specific bets, or like buy into specific packages?

**Max Howell:** You can stake against specific packages.

**Jerod Santo:** So let's say I know my buddy Adam is about to release a new Npm package, a JavaScript thing. It's going to take the world by storm... I could stake his package when it first comes out, and as that package gains in usage, I would benefit from that? Is that how it works?

**Max Howell:** Not exactly, currently. This is an idea we're playing with. You should be rewarded for seeing up and coming open source, right? That's fun.

**Jerod Santo:** Right. Plus I can also do it on my own packages, right?

**Max Howell:** Yeah. It's good for the package, because they get more stake yields initially that way. But currently, if something isn't very staked by many people, the yield you get is higher. So there is an incentive to go and find open source that isn't yet popular, but you think will become popular, getting there early... Because your yield is also dependent on the impact of that project, the Tea rank of that project. So initially, the Tea rank of any new project is going to be close to zero. You don't get any rewards for less than 25. It's necessary to have a cutoff, because otherwise people would just create fake open source packages, stick them in the system and try to gain rewards that way. The Tea rank only grows as you become something other projects use. The dependency tree.

**Jerod Santo:** Okay.

**Max Howell:** So you do have to convince other projects you're worthy, and that's exactly how open source already works. You release something new, it takes time for the community to trust that your package is worthy, and use it. So we don't fix the initial uptake problem, but that's the case as it is right now.

**Jerod Santo:** \[00:59:59.09\] Gotcha.

**Adam Stacoviak:** What is the idea of staking? I understand it in crypto as normal, but if I bought in and I staked against a project, what does that do for it?

**Max Howell:** You get a yield.

**Adam Stacoviak:** Describe that to me. I mean...

**Max Howell:** Like four, five percent...

**Adam Stacoviak:** Like a percentage back. Why would I do that?

**Max Howell:** Because you want to have a yield of four or five percent?

**Adam Stacoviak:** What does the project maintainer get?

**Max Howell:** They also get a slightly increased yield, because they're encouraging people to stake. Now, the Tea - we gain from people staking because it locks the token up; it prevents people from suddenly selling it. There's an unstake period. This is common with crypto projects to prevent rapid fluctuations in token price.

**Adam Stacoviak:** Yeah. Interesting. When I buy in initially, who am I buying the token from?

**Max Howell:** So we're going to launch with several major exchanges. Still haven't announced them. So most likely you will buy from them. But there will be other ways the token is distributed initially.

**Adam Stacoviak:** Gotcha. Do you all keep a large percentage of the token as creators of the token? There is a distribution of some of the token to the investors of my company, the founders like myself, and some advisors as well. But it's a small percentage. We're doing what was considered a fair launch, where more than 50 percent of the token goes to the community.

**Adam Stacoviak:** Right. And it makes sense, because you're investing in it, making it... There's obviously economic incentives across the board for it.

**Max Howell:** Yeah, well, if I knew then what I know now, I wouldn't have done it with VC. I would have just launched the token myself, taken none myself, and then made it so 100 percent just goes to open source. But too late. It's fine.
**Adam Stacoviak:** Can't do it? Can't change?

**Max Howell:** Not if I don't want to be sued personally.

**Adam Stacoviak:** Gotcha.

**Max Howell:** But it's a very small percentage relatively, and one of the things we're doing is we're launching the token from a completely separate company in Switzerland. It's a non-profit, and the long-term goals for that company are to have it be governed and run by the open source community as well. But none of my investors or any of the other people that are related to the company they invested in have any say in how that company runs. It's very important to me that this is an open source project for the open source community, that's governed by the open source community in the long run.

**Adam Stacoviak:** Gotcha. How do you go about onboarding then? So you said you mentioned there was - how many? Like a lot of projects onboarded?

**Max Howell:** Seventeen thousand...

**Adam Stacoviak:** Seventeen thousand. So that's a lot of -- it's a decent amount of projects. What does it take to onboard? What's the incentive? Obviously, the incentive is to be able to have... What is it called? Tea? Is it called Tea or Chai?

**Max Howell:** Tea token.

**Adam Stacoviak:** Okay, Tea token.

**Max Howell:** Chai is the technology, the oracle that runs \[unintelligible 01:03:00.12\]

**Adam Stacoviak:** Sorry, I'm uninitiated here, so a lot of my questions are from the uninitiated standpoint here. Okay, so you have the Tea token, and me as an open source maintainer/developer, I go and put my open source Tea enabled. I onboard. What is that like?

**Max Howell:** Yeah, so the way the system works is it's project-based. So we declare that a project will receive X amount of Tea token rewards every 24 hours. In order to have that token go to that project's wallet - it's a project wallet - one of the maintainers of the project needs to commit a file, the Tea constitution, as we call it, to the GitHub repo, or any Git repo. We're not GitHub-specific. Once our system sees that file, then the rewards start coming in.

**Adam Stacoviak:** \[01:03:51.00\] Is it challenging to determine ownership at that standpoint from... Because you've got multiple maintainers, core maintainers, trademark holders... Especially with the WordPress world, you've got lots of -- you know, a lot of things happening in this ownership state of open source. There's a lot of -- luck can happen. How do you determine who is the true owner, I guess, of the token when it comes in, if it does become valuable enough to cash in, so to speak?

**Max Howell:** Yeah, so the token goes to the project wallet, and then whoever commits that Tea constitution can declare any number of people that are considered core contributors to the project. They all have control over that wallet. Now, we haven't made any deliberate decisions on what should happen next. Every project is different. Most projects really are just one person, so it's very simple for them. It gets a lot more complicated when you have large projects like Python, or Node, or whatever, with loads of people.

**Adam Stacoviak:** WordPress...

**Max Howell:** And WordPress, exactly. So we're waiting to see what they're going to do about it. But it's on the blockchain, it's an EVM-compatible blockchain, we're using Coinbase's Base, which is just a layer two on top of Ethereum... And you can write smart contracts to distribute the token. So that's why I'm hoping I'll see, is the open source community stepping up, writing smart contracts to fairly distribute the token.

One easy way to do it is like "Here's a list of people. Split it equally." A much harder way to do it would be based on like pull requests, or code contribution. And you could even --

**Adam Stacoviak:** Yeah. Lines of code. Just kidding, just kidding, just kidding.

**Max Howell:** Yeah, I've already thought this through.

**Adam Stacoviak:** I was kidding around, yeah...

**Max Howell:** Lines of code is not going to be a great metric, for sure. It just incentivizes people to make PRs that are longer and longer for no reason.

**Adam Stacoviak:** Do you anticipate challenges there that you will get mud on your face from, regardless if -- I guess maybe egg in your face is probably the better term?

**Max Howell:** Yeah, almost certainly...

**Adam Stacoviak:** Because you're kind of leaving it to them to decide, and it might cause drama.

**Max Howell:** Oh, on that front I don't think we'll get egg on our face. But who knows...?

**Adam Stacoviak:** Mud in your eye, egg in your face... Yeah.

**Max Howell:** One thing I've certainly learned during this project is there's going to be people that really just don't like it. Don't like what you're doing, and they're going to be angry no matter what you do. Like, when you're doing things that are genuinely new, you've got to cross your fingers that you're doing it right, and see what the community thinks in the end.

**Adam Stacoviak:** Sometimes it's easy to squash that to some degree with the why. Like "Why did you do this?" It's one thing to have a capitalistic intent, either personally because you're creating a company around this with venture capital and incentives, and then to enable open source developers to get paid. So there's lots of reasons why, I'm sure, but what is your personal reason why? Why did you do this?

**Max Howell:** So yeah, we're going to be quite transparent; as transparent as possible. We're going to be open-sourcing most of the -- probably all of it by the end of the year, actually; even the website. Who cares...? But my personal reason for doing this was because three years ago I was in between full-time work, trying to work on open source once again, and I looked to see if anyone had come up with something that could pay me to work on it full-time for this time.

I've tried things in the past like Patreon, and spent half my time marketing myself rather than writing code when I was trying to get that Patreon working... And there wasn't anything new. Everything treats open source like all it is is charity. All you can expect is a cup of coffee and five bucks. So I decided that maybe it had to be me who fixed this problem, and I went down the rabbit hole finding new ideas; trying to find new ideas about it. And it was like a moment of inspiration one evening... I'd had some weed, and I realized that --

**Jerod Santo:** \[laughs\] That's some transparent \[unintelligible 01:07:33.07\]

**Max Howell:** \[unintelligible 01:07:33.17\] smart contracts in that package manager data, that dependency information, I could use that. I could do something with that. Maybe that would be the solution. So we're going to see.

**Jerod Santo:** We're going to see. When are we going to see?

**Max Howell:** When.

**Jerod Santo:** When?

**Max Howell:** Yeah, so hopefully by the end of the year, maybe early next year.

**Jerod Santo:** \[01:07:53.18\] And how long will it take?

**Max Howell:** Everything's built. Everything's ready.

**Jerod Santo:** Well, why aren't we hitting go?

**Max Howell:** It turns out crypto's got a lot of legal red tape, as you might expect... So yeah.

**Jerod Santo:** I appreciate people trying new stuff. I think there's a large number of developers who are just so anti-crypto...

**Max Howell:** Yeah, it's definitely true.

**Jerod Santo:** ...that it's going to be a stumbling block, or something you'll have to overcome. Now, if it starts to work and work well, and it's on Ethereum you said, so that's proof of stake, so it's not proof of work like Bitcoin, which a lot of people have problem with energy draw... So it doesn't have that particular problem, and maybe you can overcome some of the anti-crypto stance of the developer community at large. Is that fair to say?

**Adam Stacoviak:** I think so.

**Jerod Santo:** I've been always more on the fence, because I think there's potentially cool and interesting new things you can do that you couldn't do before, and I'm waiting to see them, kind of where I've been, you know? And so maybe this is one where we say "Here's a cool use of crypto that actually does what it's supposed to do, and brings value, and all that." I hope it works out.

**Adam Stacoviak:** As he was describing the dependency graph, it reminded me of the way, I suppose, Google or a search engine attributes weight to or importance to a website, which is backlinks. It's the same kind of idea where you sort of define some sort of perceived value based on being in the dependency graph of a project. And I'm imagining that totally makes sense. And it's not based on whether I think your thing is cool, whether I think your thing is worth funding... It's a matter of --

**Jerod Santo:** No, it's like "Are you literally using it?"

**Adam Stacoviak:** Yeah, is it literally being used? How deep is its importance? \[unintelligible 01:09:31.25\] you can't scrutinize back to the Nebraska XKCD, drawing and cartoon, because you can see the weight. You can see the graph there that says it truly is important. And going back to what you said with Patreon, or even GitHub Sponsors, you spent most of your time marketing, and promoting the fact that you could be paid, not doing the things that should get you paid, which provides the value. And so it seems like if you can get past this - I don't know how to describe it. I guess the idea of crypto.

**Jerod Santo:** The anti-crypto sentiment.

**Adam Stacoviak:** Yeah, the anti-crypto sentiment... If it couldn't play out well. Because it seems like it should. Because you can't argue with the graph. You can't argue with the importance that gets placed on it, or the weight, the perceived weight and value that comes from that as a result. And the developer can keep doing what they're doing, not remapping around this new idea of how to get paid. They can just keep doing what they're doing. The dependency graph predicts their future.

He can stick against it if he wants to, which increases my yield, increases his yield... Seems like it has the right kind of ideas. What's the reception so far? Like, you're in the percolation stage... What's the sentiment?

**Max Howell:** Well, you're totally right that a lot of developers are very anti-crypto, and so it's been a battle from the start. Hacker News hate me even more than usual. But inside the cryptosphere, it's very popular. Like, 1.7 million signups is pretty unheard of. And what it turns out to be the case, to my surprise... I've spoken to over 300 open source devs over the last three years, just for market research reasons. A lot of them don't care if it's crypto or not. They like crypto in the respect that they like technology. Open source devs aren't as anti-crypto as the others, the rest of the devs. And yeah, I think we have a reasonable chance of showing that crypto is just a technology. We're not a scam. There's nothing scammy about what's going on with us at all. They'll see that once we've gone live and no one's rugging the token, or anything like that. And it's all open. That's one of the beautiful things about Web3. All those smart contracts are transparent, readable. You can see what's going on.

**Jerod Santo:** \[01:11:55.21\] Right.

**Max Howell:** So I'm hoping a few success stories after the launch, people will start to reconsider.

**Adam Stacoviak:** I have an idea for you. Or at least let me see if I understand this right. And this is where my idea comes from. What if -- let's play a scenario. What if the developer world rejects this because they're anti-crypto? What if Tea -- because you can still determine the dependency graph, with or without onboarding. You can still determine the graph, because it's in Git. So long as it's open source and available, you can determine that graph and its importance. What if it becomes a speculation engine so the people who do care about speculating can leverage it as crypto, whether developers or not, and now it's sort of like maybe this adjacent proxy to value. And - not me saying this, but I'm going to say it... Who cares if the developers are anti or for crypto, and who cares if they truly adopt this or not? It can be a way to speculate the value of the lone developer in Nebraska's thing, and create value, whether they take it or not. Because you can now have a betting world, basically, against all of open source. And there's a way to make money, slash create value, or speculate value, and take away that value if you want.

**Max Howell:** It seems like a pretty genius idea, to be honest. I might have to give you an advisory token allocation. But yeah, like...

**Jerod Santo:** You've got a wallet?

**Adam Stacoviak:** I can't tell if he's being serious or not.

**Max Howell:** There's certainly stuff we could do if the main idea doesn't work out, but my passion won't be in it.

**Adam Stacoviak:** Plan B. How about plan B?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's plan B.

**Max Howell:** Yeah.

**Adam Stacoviak:** Because, I mean, it's possible you'll be rejected. That would suck, because you've spent years... Three years doing this?

**Max Howell:** Yes...

**Adam Stacoviak:** That would suck, right?

**Max Howell:** It would suck, but not everything always works out. You kind of accept that when you're building things.

**Jerod Santo:** Yeah.

**Max Howell:** I think it would be a real shame if the only reason it doesn't work out is crypto skepticism.

**Jerod Santo:** Yeah, I hope it's because it doesn't -- I mean, I hope it works out, A. But B, if it fails, I hope it's because the idea fails, not because of haters.

**Max Howell:** Yeah. I just did a bad job \[unintelligible 01:14:13.20\]

**Adam Stacoviak:** I don't know, though. I think with my idea, if it truly is a good idea, I think you could do both. It doesn't have to be just because you're rejected, plan B is X. I think it could be both based on what I hear. Now, this is 20 minutes of podcasting, which I haven't dug into the white paper, or the details, and stuff like that. But I can't see, based on what I've heard so far, why it couldn't be both. Because it's already doing that. It already can be speculated against. If I have a project and Jerod wants to stake against it, he can. So that's all you're doing. It's about perception and mechanics and marketing really a story than it is simply what it can or can't do.

**Max Howell:** Yeah. I'll certainly go away and think about it. I don't think it's likely we would launch with both. Partly because we're not a team at this point.

**Adam Stacoviak:** Well, you could do both, though. It's still possible to do... Just because you don't market it that way doesn't mean I can't use it that way, is my point.

**Jerod Santo:** Well, they would have to do a dependency graph against all projects everywhere, right?

**Adam Stacoviak:** True.

**Jerod Santo:** Versus the ones that are registered. You're currently tracking --

**Max Howell:** We do do the dependency graph against all projects everywhere.

**Jerod Santo:** Oh, you do? Already?

**Max Howell:** Yeah.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** And then you give a pathway to this thing that's won. Software's eating the world. Open source is eating software, kind of thing. Now, anybody who ever wants to speculate against open source, can. Not saying they would. I have no idea about that. But it's an interesting --

**Jerod Santo:** Something to chew on, at least.

**Adam Stacoviak:** Something to chew on, for sure.

**Max Howell:** Yeah. There's certainly lots of things we can do with the data. The Chai database, on-chain oracle... It's got all the dependency data and it's got the rankings... We're exploring the idea of building out SBOMs based on that, which give you actual impact with your stack, and threat identification, essentially... Allowing companies to donate or stake based on the SBOM we've generated.

**Jerod Santo:** \[01:16:08.11\] Yeah, totally cool.

**Max Howell:** The idea of building out some sort of polymarket-esque thing as well. But as you say, other people can do that, right? The data is on the chain, you can build against it. One of the things we're looking forward to, actually, is seeing what the open source community can just do on top of these primitives that we've built for them.

**Jerod Santo:** Interesting. So is this limited to libraries then?

**Max Howell:** Almost, because like I was saying --

**Jerod Santo:** So it wouldn't solve Homebrew's problem.

**Max Howell:** Not itself, no. Interestingly. Homebrew isn't even actually in the system, because it's not packaged by anything.

**Jerod Santo:** Right. \[laughs\] It's a pretty popular project, though...

**Max Howell:** It's kind of embarrassing for me... But it's a limitation of the current model.

**Jerod Santo:** Yeah.

**Max Howell:** Once Chai is open-sourced, which - spoiler alert, I'm doing that during my keynote in an hour...

**Jerod Santo:** Nice.

**Max Howell:** ...we're hoping that people will come forward with suggestions for how to fill in these gaps and help us to build it out.

**Jerod Santo:** Yeah, that would be cool. Because right now it would be limited by the dependency graph. So you need to have dependencies. So you can't be a command line tool, or an application, or these other open source projects to use this particular...

**Max Howell:** Well, sometimes you can be a command line tool, because some of the command line tools are dependencies of other command line tools.

**Jerod Santo:** Sure. But it wouldn't track your actual usage, right?

**Max Howell:** Well, we don't really track usage either, of course, but...

**Jerod Santo:** But you would want to, right? If Homebrew gets more used... I know it's not in there, but if you imaginarily covered it, it would be based on usage, right?

**Max Howell:** Well, we have a new idea that we've been developing over the last few months that will fix this, that we'll be announcing next year. It's a different...

**Jerod Santo:** Do you want to spoiler-alert us?

**Max Howell:** Better not, better not. But it's rather lovely. I'm very excited about it. And it does solve some of these issues, for a different use... Like, it tries to tap into the fundamental utility of open source. So phase one, we're releasing this - essentially, a remuneration platform for open source maintainers. Phase two is exposing the real value of what open source represents.

**Jerod Santo:** Wow.

**Max Howell:** Yeah, it should be pretty exciting.

**Adam Stacoviak:** And this is -- you said it's trackable on Coinbase, is that right? Because of the way it's protocoled?

**Jerod Santo:** He didn't name a specific one.

**Adam Stacoviak:** You said something, it used --

**Max Howell:** We use Base, which is Coinbase's blockchain.

**Adam Stacoviak:** Okay.

**Jerod Santo:** So certainly it's going to be on Coinbase, but he hasn't said where you can buy this token.

**Max Howell:** To be disclosed where we will be selling.

**Adam Stacoviak:** Is there a way that you could leverage this to secure the open source supply chain, \[unintelligible 01:18:55.00\] I don't really like the term supply chain, but that's the accepted term of open source supply chain. Is there a way to leverage what you're doing with Tea, not just to incentivize, to maybe gain value, but maybe leverage that in a way that can ensure security for open source packages, or reward those who are more secure? Or just anything that just bolsters the security of open source?

**Max Howell:** Yeah, so going into this, that was definitely one of the things I wanted to achieve. And we have ideas for how that could play out with what we've built already. We're kind of securing it to some extent, because we're securing the maintainer's ability to actually work on these things. But we have plans later. One of them is inside the thing I was just talking about, that we're going to be announcing early next year, which do have tangible extra security benefits to the open source ecosystem. So, yeah.

**Adam Stacoviak:** So it's in our best interest to find a way to make this play out.

**Jerod Santo:** \[01:19:55.07\] Me and yours?

**Adam Stacoviak:** Like generally. We, as in the community. Because if they have these kinds of plans, and there's altruistic ways to get there, we just have to...

**Jerod Santo:** Well, I certainly want to know what he's going to disclose early next year...

**Max Howell:** I'll tell you after the podcast.

**Jerod Santo:** \[laughs\] Well, Max, best of luck...

**Adam Stacoviak:** Tea.xyz. Is that right?

**Max Howell:** Yeah, Tea.xyz. Tea, the drink. T-E-A. Not T-E-E, or just the letter T. With hindsight, the name wasn't great.

**Jerod Santo:** A lot of hindsight. Well, hopefully some foresight. I'm excited to see what happens when you launch. So...

**Adam Stacoviak:** Launch.

**Max Howell:** Yeah. Well, thank you. I'm looking forward to it.

**Adam Stacoviak:** Get to it. End of the year?

**Max Howell:** It's very soon.

**Jerod Santo:** Hopefully.

**Adam Stacoviak:** Very soon.

**Jerod Santo:** Alright...

**Adam Stacoviak:** Famous last words.

**Jerod Santo:** Good luck with your keynote as well.

**Max Howell:** Yeah.

**Adam Stacoviak:** Alright, Max.

**Max Howell:** Thanks.

**Break**: \[01:20:44.21\]

**Adam Stacoviak:** Tell us about this --

**Chad Whitacre:** Yeah, what do you guys want to hear about?

**Adam Stacoviak:** ...the state of open source funding, sustainability, pledging...

**Jerod Santo:** OSSPledge.com.

**Adam Stacoviak:** OSS funds, open source funds... What's the state?

**Chad Whitacre:** Well... So we've got a couple of things. So the state of funding... There's a couple of ways we could take this, and since we're going to cap this to 20 minutes, I'm going to say the words Fair Source.

**Adam Stacoviak:** Okay...

**Chad Whitacre:** I'm just going to put that there, and maybe we'll come back to that later.

**Jerod Santo:** Okay, so don't bite on that... Don't bite on that piece of meat, okay.

**Chad Whitacre:** Maybe there's something we could have a little more vigorous conversation about.

**Adam Stacoviak:** Let's do it, yeah.

**Chad Whitacre:** But yeah, man, the past year launched two initiatives: Fair Source and Open Source Pledge. Both kind of coming out of this place of trying to balance the user freedom that we enjoy in open source with the pragmatic, practical realities.

**Jerod Santo:** So you're not idealist either.

**Chad Whitacre:** Correct. We're not idealists either.

**Jerod Santo:** Correct.

**Chad Whitacre:** Correct.

**Jerod Santo:** Okay.

**Chad Whitacre:** Yeah, balancing freedom and sustainability is how we think about it. Developer sustainability. So Pledge in particular is really exciting... We launched this on October 8th. What day is it today? It's like the 28th or something, right? So... Not quite three weeks. About three weeks ago, three weeks tomorrow, we put up three billboards in San Francisco. We rented three of the most expensive billboards in the world to tell a story about the change that we need in the industry to pay the maintainers. And this is the Pledge.
So the Pledge is a group of companies that are working together to change the status quo in open source sustainability. Companies that join make a commitment. So there's two parts to joining. Number one is you go pay maintainers. Number two is you blog about it. So the pay maintainers, we have a barrier to entry. We have an entrance fee, if you will.

So we use this dollars per developer number so that companies of very different sizes can kind of -- we can compare across. $2,000 per developer on staff to open source maintainers, meaning no strings attached payments to your dependencies, essentially, okay? Could be foundations, could be GitHub Sponsors, Open Collective, whatever. So Pledge itself is not actually touching any money. What we're doing is bringing kind of the social validation layer to it and saying "We've already got GitHub Sponsors, we've already got Open Collective. Thanks, dev. Platforms that will help you do this. We've already got all the foundations."

So number one, go pay maintainers. So a company has 100 developers - they would pay $200,000 per year to maintainers. And then number two is blog about it. Blog about it means you tell us who you paid, and how much. That's your annual report. And that does two things. Number one, it drives awareness, because now we've got blogs on everybody's blog out in the world talking about the open source Pledge. So building kind of that social validation piece. But then it's also the accountability, so that people in the community can -- we're looking for receipts. Who did you actually pay what? So it gives the community a way to go and look and say, "Alright, Sentry says they're paying $750,000 to open source. Who'd they actually pay?" and look for those receipts. Yeah, so that's the Pledge.

**Jerod Santo:** So two inputs. One being money, and the other being the blog post.

**Chad Whitacre:** Annual blog post, yeah.

**Jerod Santo:** And what do they get out of it? What do they get?

**Adam Stacoviak:** JSON.

**Chad Whitacre:** Always JSON. Yes, man... JSON.

**Jerod Santo:** \[laughs\] Alright. Tell me more.

**Adam Stacoviak:** That's how you pay maintainers, JSON.

**Jerod Santo:** \[unintelligible 01:27:41.15\]

**Chad Whitacre:** \[01:27:46.10\] Yeah. I'm always down for a good JSON schema, you know... Yeah, so what do you get out of it? You get, essentially, a lightweight certification. You get a member badge, it says open source Pledge member. So then you can go out -- you know, a lot of who we're going for at the beginning is developer tools companies. You want to sell to developers. You want to demonstrate your goodwill in the open source community. You get that badge, it says open source Pledge member, and then as we build this thing out, that starts to mean something. So I, when I'm making my decisions about what tooling I'm going to use, if I see that open source Pledge member badge in the footer, I know that this company is actually paying maintainers in a real way.

So that's the number one thing you get, is that kind of cred. And it's really about the branding, the marketing, and companies who want to tell a good story about open source saying "Alright, do you want to talk game? This is how you do it. This is how you actually support open source."

**Jerod Santo:** Okay.

**Chad Whitacre:** Do you buy it?

**Jerod Santo:** I don't know. I mean, I think --

**Adam Stacoviak:** I'm on the fence still yet.

**Chad Whitacre:** What's that? You're on the fence?

**Adam Stacoviak:** I'm on the fence still yet.

**Jerod Santo:** I think that -- I guess, like, if you get the company... Like, if you actually -- if it becomes a thing. So it's kind of a -- it's not really a thing yet. You're trying to make it a thing. If it becomes a thing, then I get a thing. But in the meantime, if nobody cares about it, then I don't care about it. Just thinking as a guy who's running a company. It's like "Well, if I don't currently care about supporting my dependencies, because of all the reasons why I should, instead I'm going to do it because the Pledge exists and I want to look good..." I don't know if I'm sold right now, because it's brand new, and you've got a handful of companies doing it, but...

**Chad Whitacre:** So we launched -- so it was brand new on August 28th. That's two months ago exactly, right?

**Jerod Santo:** Pretty new.

**Chad Whitacre:** So it was brand new on August 28th.

**Jerod Santo:** Sure. The two companies that were the first to join were Sentry, my employer, and - do you want to guess who the other one was?

**Adam Stacoviak:** It was a -- I was surprised, too. I was paying attention. I think it was like a -- I don't know, tell me. But I was surprised.

**Chad Whitacre:** It was Astro.

**Jerod Santo:** Astral.build?

**Chad Whitacre:** Astro.build is also coming along. Astral, A-S-T-R-A-L, they're the ones that are doing Python tooling in Rust.

**Jerod Santo:** Yes, yes. And they are venture-backed by Excel.

**Chad Whitacre:** Correct.

**Chad Whitacre:** Just like Sentry is.

**Jerod Santo:** Okay. So Excel partners are kind of like...

**Chad Whitacre:** I mean, it's networking, man. This is all the social -- this is social networking. This is like herd mentality. I mean, what company is not an AI company today, that three years ago we weren't talking about it at all, right? Like, for better or for worse, humans are herd animals, companies are herd animals, and that's kind of what we're trying to work with here. When you talk about sustaining open source, I see there's three levers that we can pull. Number one is commercialization. So you build a company around your project. Open source itself is not a business model, but over the past decades we've come up with business models. So commercialization is one way to sustain open source, to subsidize an open source project.

On the other end is taxation. So Sovereign Tech Fund is doing this. They're spending German taxpayers' money on critical digital infrastructure.

**Jerod Santo:** Yeah.

**Chad Whitacre:** So both of those are fine. That's good. What we're going after with Pledge is this middle lever, which I think of as validation. Social validation. Again, you want to be seen... Another way I think of it is - it's not an exactly perfect analogy, but open source is kind of like a restaurant. Here's what I mean by that.

**Jerod Santo:** Please, yes. Tell us more.

**Adam Stacoviak:** I'm excited. What's on the menu?

**Chad Whitacre:** Okay. Open source is kind of like a restaurant. It's not perfect, but bear with me. I go into a grocery store and I pay for my food first, and then I take it home and I eat it. Okay? I go into a soup kitchen, and somebody else pays for it. It's a charity, and I get to eat. I go into a restaurant, and we go in together. It's social, first of all. We go in, we sit down, we have a nice meal, and it's at the end of the meal when the food's in our bellies that we settle up and we pay the tab. So it's like a restaurant in that you're paying for this thing you already ate. You already consumed it. So year after year, our companies are consuming open source. We're feasting at the open source table.

**Jerod Santo:** Sure.

**Chad Whitacre:** And what we're doing with Pledge is saying, "Alright, now it's time to settle up." To pay for the open source that we've consumed year over year. And I get there because of the social aspect, right?

**Jerod Santo:** Yeah, I understand. That's the part you're trying to drill down on.

**Adam Stacoviak:** \[01:32:17.12\] See, I saw it differently then. Not the analogy. I don't disagree with the analogy necessarily, but...

**Chad Whitacre:** Alright, what are you seeing?

**Adam Stacoviak:** I saw what you were doing with the Open Source Pledge, or OSS Pledge to be more clear, was an extension from what we did a while back with Maintainer Month and Maintainer Week. It was Maintainer Week and then Maintainer Month, and it was OSS Fund. It's the same idea that you started with Sentry, which was for every developer, whatever your number is, is your number. But you said $2,000 per developer was the good algorithm to use.

**Chad Whitacre:** Yeah, that's our minimum. Yup.

**Adam Stacoviak:** And so I saw Open Source Pledge, this OSS Pledge, to be an extension of that, but more with an awareness piece to it. Because it was hard -- it was like you were pushing this uphill battle to say "Companies should have an OSS Fund." Which is a great thing to say, but then it was like "Well, how do we do it?"

**Chad Whitacre:** Yeah, exactly.

**Adam Stacoviak:** \[unintelligible 01:33:01.11\] FOSS Fund. Thank you for clarifying. I saw it as like an extension of that, but potentially better marketable, and potentially with this social component that is not so much a forced multiplier, but more like a "You should, because this is where people who are doing this and believe in this model are collecting." Whereas the other way, it was more like soapbox. Whereas here, you're sort of like - what was that? Hands Across America back in the '80s? Remember that? Something like that, you know? Hand in Hand, across America, feeding -- I think it was The Hunger, something like that.

**Chad Whitacre:** No, you're right. I mean, so FOSS Funders -- I mean, it still exists, but FOSS Funders isn't... This is in some ways, you know...

**Adam Stacoviak:** A version of that.

**Chad Whitacre:** FOSS Funders v2. So Duane O'Brien is leading FOSS Funders. I love Duane, I love FOSS Funders. Open Source Pledge is - yeah, it's kind of a v2 where we're saying, "Let's get an actual dollar amount." Because the thing with FOSS Funders - like, I built a FOSSfunders.com website. I recruited companies to put a logo on it. It links out to a blog post. So some of those same mechanics were there. Yeah. What was missing was there was no threshold. There was no consistency across that. It's like, one company gives $10,000, another company gives $100,000. And how are you thinking -- it's got to mean something. It's like, when I see that a company is on Open Source Pledge, when you see it, here's what I want to say. When you see that a company is on Open Source Pledge, or when your listeners see that a company is on Open Source Pledge, they should think, "Oh, this company is putting their money where their source is." This is your meme. Speaking of memes and credit. When you said that, we picked up on it.

**Jerod Santo:** You liked that?

**Chad Whitacre:** Yeah.

**Jerod Santo:** Oh, nice.

**Chad Whitacre:** We used that somewhere.

**Adam Stacoviak:** You said that on a podcast? You said that?

**Jerod Santo:** I've said it a few times over the years. I said it on Changelog News and you picked it up?

**Chad Whitacre:** Yeah.

**Jerod Santo:** That's my copywriting there, Adam.

**Chad Whitacre:** So shout-out to Jerod...

**Jerod Santo:** Putting your money where your source is.

**Chad Whitacre:** Yeah. Send us the bill for the copywriting, Jerod.

**Jerod Santo:** Yeah, I will.

**Chad Whitacre:** No, we like that one. "Put your money where your source is."

**Jerod Santo:** Now you've bellied up to the buffet. You've had your meal... Now it's time to pay the piper.

**Chad Whitacre:** Yeah. I mean, that's the main message. It's like, when you see that Open Source Pledge member badge, you should know, "Wow, this company - they put their money where their source is." That's what we're going for. But yeah, man. Early days. Two months ago, we launched with w. That was a soft launch. We put these billboards up... I don't know how much time we have to get in all the billboards and everything, but we put these billboards up on October 8th. So that's the three weeks ago. By the time we put the billboards up, we had 25 companies on board. So we went from two to 25. And I'll tell you, when we had those two, I was like "What are we going to have on October 8th? Because we've signed a contract for billboards and we're going one way or another. And I don't know, if it's just us and Astral, then it's just us and Astral." But we had - yeah, 25 companies join us for that launch. So we feel really good about that. We had seven - well, six open source foundations that gave us endorsements... Because the Pledge is companies. But on the other side of the equation is all the foundations and the maintainers. And so we've got endorsements from OSI and five other open source foundations - PHP and Django and whatnot.

\[01:36:00.12\] Yeah. So I feel like we had a lot of good momentum for launch... But yeah, man, it's all about what happens next. It's like the next three, six months. I'm a salesman now, you guys. I'm like --

**Jerod Santo:** He's selling it.

**Chad Whitacre:** This is what I signed up for. Now I've got to go door to door and be like "Hey, who wants to join?"

**Jerod Santo:** This is your baby.

**Chad Whitacre:** Well, it's David Kramer's baby. Let's be honest.

**Jerod Santo:** Okay. But you're carrying the torch.

**Chad Whitacre:** Exactly.

**Jerod Santo:** Fair enough. That's your job.

**Chad Whitacre:** That's my role these days.

**Jerod Santo:** Alright...

**Chad Whitacre:** Keep an eye on us.

**Jerod Santo:** We'll keep an eye on it. I'm excited to see what happens. \[unintelligible 01:36:30.26\] is definitely a move... That's a move. If you went two to four, I'd be like "Meh..." Two to 25 is legit.

**Adam Stacoviak:** 24 is...

**Jerod Santo:** No, if you went from two to four...

**Adam Stacoviak:** I was like, "Two to 24? What's wrong with the one?"

**Chad Whitacre:** I put out the Twitter poll and I was like "Where are we going to be at launch?" And everybody had me at five to launch. So I feel pretty good about 25.

**Jerod Santo:** Yeah, fair.

**Adam Stacoviak:** Yeah, for sure.

**Chad Whitacre:** But it's what happens next, right?

**Adam Stacoviak:** Is it on the honor system? There's no vetting and verification, right?

**Jerod Santo:** The blog.

**Adam Stacoviak:** The blog is there.

**Chad Whitacre:** The blog is there. And we do go look at the blog when you get onboarded. We look at your blog, and we go back and forth --

**Adam Stacoviak:** Who's "we"?

**Chad Whitacre:** So there's four of us on the core team. Two of us from Sentry. Two organic community members that showed up to participate. Vlad and Ethan are not employed by Sentry. Myself and Michael are at Sentry. So that's the we. And we'll grow that kind of formality of it over time, as we grow. But yeah, we launched with 25, we've got... So we do vet. Here's what I want to say on that. Going back to what I was saying earlier. GitHub Sponsors, Thanks Dev, Open Collective. These platforms that do this - our goal is to build that up so that they help with the receipts. So Thanks Dev's helped me out a ton. The past years you guys and I have talked about Sentry's own funding program. So this is kind of the extension of that, where we say "Alright, now can we get other companies to join us with this?" So Sentry's own funding program for this year is going to launch in a couple weeks. We'll land that in a couple weeks. I had to push it back because I was distracted by the Pledge.

Thanks Dev is my main vendor for that, and they... Yeah, they're helping us out with "Alright, what kind of reporting do we want for the Pledge? And how can these vendors help us with those receipts?" So that it's not just an honor system, there's a little more meat to it. So we're really trying to incentivize that ecosystem.

**Adam Stacoviak:** Well, whoever would put out a blog post saying you funded open source and you didn't fund open source... I made a face, by the way. It was not a good face.

**Jerod Santo:** \[unintelligible 01:38:33.06\]

**Chad Whitacre:** Yeah, exactly.

**Adam Stacoviak:** If you would go through the motion of saying "I Pledge, I blog", and that blog was non-factual... I mean --

**Chad Whitacre:** That's pretty bad.

**Adam Stacoviak:** Eek factor, big time, you know?

**Chad Whitacre:** Yeah, yeah, yeah, yeah.

**Adam Stacoviak:** So...

**Jerod Santo:** Receipts.

**Chad Whitacre:** That's it. Receipts.

**Adam Stacoviak:** I joked about the JSON earlier and you never closed the loop.

**Jerod Santo:** Yeah, what's the JSON deal?

**Adam Stacoviak:** You just laughed. What's the JSON? Close the loop of the JSON.

**Jerod Santo:** \[unintelligible 01:38:56.28\] all about it.

**Chad Whitacre:** So there is... Well, so what we have people do - and I don't know if we'll do this forever, but the way the system is set up... We're going to geek out for a second here. To join the Pledge, a company publishes a JSON file. They publish a blog post, but then they publish a JSON file. Because this is an annual thing, right? It's an annual thing. So every year you've got to pay, every year you've got to publish a blog post. So I've built a system where they publish a JSON file that says "Here's the number of developers we have. Here's the amount of money we spent. And here's the link to our blog post about it." And then they can update that year over year, and then we pull that in with a GitHub Action or whatever on our side. Yeah, so that's where the JSON comes in. Yeah. Anyway.

**Jerod Santo:** So they give a JSON. They don't get a JSON. That's just more giving.

**Chad Whitacre:** Yeah...

**Jerod Santo:** But they become part of... I mean, you're going to like report that? Or, I mean, somehow, that thing... You should pull it together to a master JSON file.

**Adam Stacoviak:** They do get a JSON though, because when they go through the flow, they generate the JSON file for them.

**Jerod Santo:** Who does?

**Chad Whitacre:** We have it. We built that out.

**Adam Stacoviak:** OpenSourcePledge.com.

**Chad Whitacre:** Vlad, one of the folks working on it, built that out, on the website.

**Jerod Santo:** I see.

**Chad Whitacre:** So if you're at a company that wants to join the Pledge, then you go to OpenSourcePledge.com. You'll see a Join button there. OpenSourcePledge.com/join. We'll walk you through the steps, including... Yeah, we'll build that JSON for you. We'll give you a gift of a JSON file.

**Jerod Santo:** They gift you a JSON. But what do I do with that?

**Chad Whitacre:** Then you put that on your domain to validate that it's legit with your company.

**Jerod Santo:** More work for me. That's more work. \[laughter\]

**Chad Whitacre:** We'll streamline it. Early days. Early days.

**Adam Stacoviak:** Yeah. Well, good stuff.

**Chad Whitacre:** Yeah. Keep an eye on us.

**Adam Stacoviak:** So let's wave a magic wand... Okay?

**Chad Whitacre:** Okay. Yeah.

**Adam Stacoviak:** Put it here down right now.

**Chad Whitacre:** Alright.

**Adam Stacoviak:** How much time you got? Three minutes?

**Chad Whitacre:** Yes, three minutes.

**Adam Stacoviak:** Three minutes. Okay. He's got less than three minutes to wave this magic wand. It is... Pick your number of years from now. One, two, five, whatever. What's the goal? What do you want to -- what would be best-case scenario?

**Chad Whitacre:** Yeah. So when I go to San Francisco I like to read embarrassingly basic, cringy business books on the plane. You know? So I was there two weeks ago, I was reading Crossing the Chasm. And I want everyone on the plane to know that I'm reading Crossing the Chasm.

**Adam Stacoviak:** Michael Grinich?

**Chad Whitacre:** Yeah, exactly.

**Adam Stacoviak:** WorkOS.

**Chad Whitacre:** Yes, exactly.

**Adam Stacoviak:** Crossing the Chasm.

**Chad Whitacre:** That's it. Right. Innovator's Dilemma...

**Adam Stacoviak:** Sorry, Crossing the Enterprise Chasm is really the long-term...

**Chad Whitacre:** Well, that's kind of the playbook that I'm seeing for this. For this to be successful, the intent is really to have as much of the industry as we can participate. So we're looking at this whole thing with the innovators and the early adopters and the early majority and the late majority. You know, wave the wand... If it's five years from now, and we're across the chasm and we've got 1,000 companies on board, and some of those companies have 5,000 developers on board, we're doing great.

If it's a year from now, and we've got -- I mean, 100 companies maybe, 200 companies...? And there's some of those -- Sentry's 135 developers. If we have a company that has 500 developers on board a year from now, I'm feeling really good about it.

**Jerod Santo:** Are you currently the biggest one?

**Chad Whitacre:** Yeah, absolutely. Yeah.

**Jerod Santo:** So you need some big fish. You want a lot of fish, but you want some big fish.

**Chad Whitacre:** Yeah. So we're going broad, and then we'll grow it up, you know? It's about - I want to say peer pressure, but it's about that validation that we're doing this together. Sentry and 135 developers - like, Microsoft's not joining tomorrow, you know what I mean? We've got to make the environment a little different before we can get there. Build it over time.

**Jerod Santo:** Alright. Thanks, Chad.

**Adam Stacoviak:** OpenSourcePledge.com. Go there now.

**Chad Whitacre:** Yeah. And look for that badge.

**Jerod Santo:** Get your JSON.

**Adam Stacoviak:** Get your JSON on.

**Chad Whitacre:** Yeah, that's it.

**Adam Stacoviak:** Alright. Thanks, Chad.

**Chad Whitacre:** Thanks, guys.
