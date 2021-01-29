**Jerod Santo:** So we're here with Greg Kurtzer, who's the founder of CentOS project, here to talk about Rocky Linux. If you recognize Greg's voice, it's because he's been on the Changelog previously, talking about singularity, which was an awesome conversation as well; we'll link that one up, so folks can go back and listen to more of Greg's voice... But we're here to talk about Rocky, and we can't really talk about that without talking about CentOS first, and there's a long history there. First of all, thanks for coming back on the show.

**Gregory Kurtzer:** Hi, guys. It's great to be here, thank you.

**Adam Stacoviak:** Good to have you back, Greg.

**Jerod Santo:** Absolutely. Can you just tell us the CentOS story? It's probably \[unintelligible 00:02:22.09\] Whittle it down for us...

**Gregory Kurtzer:** Oh, my goodness.

**Adam Stacoviak:** Just open that up for us.

**Gregory Kurtzer:** \[laughs\] Okay, let's see... It started back in (I'd say) about 2003(ish), 2004(ish). We were starting a community-managed RPM-based distribution of Linux. I ended up landing the lead on that project simply because I saw that there was an opportunity to create a community-managed RPM-based distribution of Linux. Wow, that's a lot to spit out all at once.

**Jerod Santo:** Community-managed RPM-based distribution of Linux. Now, I read that you were at Debian before that...

**Gregory Kurtzer:** Yeah.

**Jerod Santo:** ...and certainly \[unintelligible 00:03:00.13\] had some sort of inspiration, like why doesn't RPM have this kind of a situation? Why switch over -- why not just be all about Debian? Why do a new one?

**Gregory Kurtzer:** Well, it had to do with my employer at the time. When I got into Debian, it was pre-2000. I had an employer, LinuxCare at the time, and I worked with a lot of other really great people within the Linux community... And the prominent distribution that everybody was using then was Debian. So I picked up Debian, fell in love with Debian; I thought Debian was awesome. I loved the community behind it, I loved the packaging system... But most importantly -- well, maybe not most importantly, but a big piece of that was APT. And being able to run apt-get and install pretty much any application that exists I thought was really fantastic.

When I changed jobs, I moved over to Lawrence Berkeley Lab, the Department of Energy, and LBL was standardized on Red Hat, or rather RPM-based distributions of Linux and all of their infrastructure at that point... And knowledge was kind of core and central to RPM. And as a result of that, that was what was being used pervasively, and that was their standard. So when I came on, I basically had to pick up Red Hat.

\[00:04:15.04\] Now, that was not my first time using it. At LinuxCare and previous I definitely used Red Hat a reasonable amount, but I absolutely missed apt-get. So I started a project actually called GRAB, to install RPMs and do dependency resolution, and version updates and whatnot, in a very APT-similar way. And that actually led me to the introduction of Seth Vidal, who ended up writing yum. So Seth and I were talking at some point early on; we ended up having a little RPM group in freenode, and we started talking about what is the need out there, and the fact that there is a need for a community-managed RPM-based distribution of Linux.

At that time there was Red Hat, there was Mandrake, there was a few others... Caldera was still around back then, and Corel Linux -- I don't remember if Corel Linux was RPM, but it was a bunch of RPM-based distributions, but nothing community-managed. And that was kind of the twist that started the CHAOS Linux Foundation, which was a goal of creating a community RPM distribution of Linux. And that kind of took off. It really started building up some steam and whatnot \[unintelligible 00:05:33.27\] into that, Red Hat Linux, which was the predecessor to Red Hat Enterprise Linux, ended up being end-of-lifed by Red Hat...

I always get the versions confused at this point... I think it was Red Hat Linux 8 or Red Hat Linux 9, and then it all of a sudden just kind of disappeared. And everything that everybody was counting on at that point just vanished.

So the outcome of that was - well, we were still using that as a build system for CHAOS Linux. We were using that to bootstrap the CHAOS Linux-based system. So we needed to bootstrap, we needed something to basically leverage, to build that core operating system... And one of the guys on the team, whose name is Rocky, said "Well, I think it'd be possible. I have some experience with actually rebuilding Red Hat Linux... So how about I just throw the REL sources - Red Hat moved Red Hat Linux to Red Hat Enterprise Linux... And how about I just take those REL sources and just throw this at my builder and see what we get? Let's start there."

He was able to do that in a relatively short order, and the next thing we knew - we basically had a rebuild of Red Hat Enterprise Linux. And when we released it, that just seemed to take over. CHAOS Linux and whatnot was just basically dwarfed by the growth of CentOS, and CHAOS Linux basically kind of slowly dwindled out as less and less people were interested in that, as more and more people were using CentOS. And that's kind of the origins of CentOS.

**Jerod Santo:** Gotcha. So since I'm a pedant and I'm hearing you say Centos, and I said CentOS, and now I'm feeling like an uninformed pedant...

**Adam Stacoviak:** I wanted to say Cent OS.

**Jerod Santo:** Is this a controversy? I did read about it on your forums at one point, people discussing these are all generally okay terms, but you call it CentOS.

**Gregory Kurtzer:** I do, yeah. But you know...

**Jerod Santo:** Are you gonna \[unintelligible 00:07:27.08\] with my head if I call it CentOS, or...? \[laughs\]

**Gregory Kurtzer:** There was a while where that bugged me...

**Jerod Santo:** Did it?

**Gregory Kurtzer:** Yeah. But it doesn't anymore. I've matured, I've grown up. \[laughs\]

**Jerod Santo:** Well, I have a principle of adopting the pronunciation of the guest on the show, so I will do my best to call it CentOS... Until you're gone. Then I go right back to my old ways.

**Gregory Kurtzer:** \[laughs\]

**Adam Stacoviak:** Of course. What is the thing behind that though? What makes you say CentOS versus Cent OS? How did you come to CentOS?

**Jerod Santo:** Like Mentos.

**Adam Stacoviak:** How do you rationalize "That's right." Aside from that you made it up, of course...

**Gregory Kurtzer:** \[00:08:03.28\] So I didn't actually make it up. There was a person on the team... So we were actually stuck with names, and I tend to go back and forth where I'm never happy with a name... Although Rocky Linux I'm absolutely happy with, which is really ironic, considering nobody else was for a while...

**Adam Stacoviak:** It's super-cool.

**Gregory Kurtzer:** Oh, we still have people coming into our Slack and coming into discussions saying "Can we please change the name?" It's like, "No, we're not going to change the name."

**Jerod Santo:** Only one pronunciation. It's a winner for me.

**Adam Stacoviak:** Yeah.

**Gregory Kurtzer:** \[laughs\] But we started off calling CentOS Chaos EL. Obviously, EL for Enterprise Linux. But we knew that that was just a temporary placeholder. One of the contributors and a person who ended up kind of taking the project -- he basically proposed the name CentOS, and I said "I really like it, but what I don't like is the Cent and the OS." Because by kind of saying OS, it kind of puts Cent out there... It implies it costs money. It implies it's not free. I know Cent is cheap, I get it, but it's an infinite increase from zero. So it just kind of bugged me at the time, so I was saying "No, it's a free operating system. It's not a cent."

So that was really my take of it... But I said "As long as we string the whole thing together, and as Community Enterprise OS is one big acronym, just call it CentOS." To me it sounded better, it made more sense, and I said "So as long as we do that, I'd be happy with it." Now, of course, that's not what ended up happening, and I just kind of bit my tongue for a while... But that was the foundation of the name CentOS.

**Adam Stacoviak:** It'd be a little easier if the O and the S wasn't capitalized.

**Gregory Kurtzer:** Yeah, it would be.

**Adam Stacoviak:** If the O and the S was not capitalized, it'd be a lot easier just to combine the words and it'd be Centos. But then I guess it wouldn't be considered an operating system, so we're back to square one here.

**Jerod Santo:** Right.

**Gregory Kurtzer:** And for many years - and I actually am guilty of this. I do it both ways; sometimes I'll go Centos as one word, no camel case, and then other times I'll actually capitalize the OS... Yeah, at this point I'm just "Whatever is easy." I'm not pedantic about that anymore. I don't know... I grew up, got old, and... Yeah. \[laughs\]

**Jerod Santo:** You've gotta pick your battles in life, you know?

**Gregory Kurtzer:** Yeah, exactly.

**Jerod Santo:** And generally speaking, unless it's like a travesty of a pronunciation, I think...

**Adam Stacoviak:** We get that a lot here though, too. We get Change and then Log, we get ChangeLog...

**Jerod Santo:** Right. Two words, one word...

**Adam Stacoviak:** We get all-caps Changelog, and... It sort of irks me, but I'm kind of like you, I've just sort of moved on and just don't correct anybody... But we obviously, when writing it, write it the way we want it written, and that's the control measure we...

**Jerod Santo:** Capital C, lower-case l. All one word. There you go. I've set the record straight. That's Changelog.

**Adam Stacoviak:** That's right.

**Gregory Kurtzer:** But you know, this happened with Linux, too.

**Jerod Santo:** Oh, yeah.

**Gregory Kurtzer:** Back in the '90s, it was Lynux, it was Linux... And I remember that there was an audio, a wav file that you can still find on the internet probably even today, of Torvalds sayying "I am Linus Torvalds. I pronounce Linux, Linux." \[original wav file 00:11:22.20\] And that's the whole wav file... Just to kind of set the record straight.

**Jerod Santo:** Just to set the record straight...

**Gregory Kurtzer:** Nowadays I think everybody knows that it's just Linux. \[laughs\] But yeah, I don't think anyone cares anymore if you call it Lynux. I don't know.

**Jerod Santo:** I'm glad that worked for him... The GIF/gif guide didn't work out so well. Because he came out and he's like "It's pronounced GIF", and we're all like "No, it isn't, man. Sorry." \[laughter\]

**Adam Stacoviak:** Now you're wrong. The creator of the name is wrong.

**Jerod Santo:** Sorry, it's not a giraffical interface format. You just don't get your way, you know? \[laughter\]

**Gregory Kurtzer:** Exactly.

**Jerod Santo:** \[00:11:58.14\] But Linux gets its way. Alright, so now that we've taken that fun tangent -- it's always fun on podcasts to talk pronunciations, because we have to actually pronounce for the first time. I can type it out the same way as you, and in our own minds we just pronounce it. But speaking out loud, we have to say these things... So I'll take back my CentOS and I'll stick with Centos. You said it kind of took off, that's kind of where we left off... Like, all of a sudden it became really the community addition. Everybody seemed to adopt CentOS, who was in the Red Hat area. Is that fair to say? The community folks.

**Gregory Kurtzer:** Yeah. I remember being -- so it's a fun process; when you come up with a project, and... So a couple of my other projects - this is a little-known fact that I'll share just for our very small community of friends here... I tend to come up with these ideas usually in situations where they're not quite so -- I'll just say it; these ideas will just come up in the shower sometimes... And what's really funny is later starting to see resumes coming in, starting to see job descriptions coming in, and you start seeing that name, that idea that you came up with... And all of a sudden you start seeing it coming into reality.

So the first time I heard somebody else mention CentOS outside of -- by the way, now you guys are getting me on the name, and now I'm like "What am I saying?" after I say it...

**Jerod Santo:** Thinking about it? \[laughs\]

**Gregory Kurtzer:** Yeah, now I'm thinking about it.

**Adam Stacoviak:** "What am I saying? Is it right or not?" \[laughter\]

**Jerod Santo:** Sorry.

**Gregory Kurtzer:** The first time I heard somebody say that, I was at Supercomputing in Phoenix, Arizona. I don't remember which Supercomputing it was; 2004, 2005... I don't remember. And I was talking with a vendor. And another comes up and interrupts us and says "Are you gonna have support for CentOS?" I was like "What?!" So at that point I never heard anyone even saying it out loud, aside from my circles. It was still very early on.

So that was like the first clue that this is actually kind of really starting to get big. And it just kept getting bigger and bigger from there. We had a donations button, and within the few months of it being an active project and us releasing, we actually had thousands of dollars coming in per month on the donation button. And the trajectory, the increase of that -- it was remarkable to watch this just kind of blow up and just get so much visibility. And then just to see how well it's situated itself within the enterprise ecosystem and cloud ecosystem later. It's just been a remarkable thing to just watch... Even after I was no longer associated with the project, just to see how it matured and how it developed; it was a proud moment for me.

**Jerod Santo:** Pretty cool that it can grow so much that one of the founders and the creators does not have to maintain it, does not have to be associated -- so many of us get stuck in that infinite loop of maintenance. The burden. And sometimes it's because the project hasn't matured enough to a place where the person who created it, either by lack of knowledge of how to do it, or sometimes it's control-oriented... Like, for whatever reason they still are the project. So a lot of projects start and stay there. And the fact that it grew so big... Like, how long did you work on it, and then how long were you away from it as it's kind of had its own life over the years?

**Gregory Kurtzer:** I was associated with it until Red Hat sued me.

**Jerod Santo:** \[unintelligible 00:15:42.26\]

**Adam Stacoviak:** It's a good reason to disassociate.

**Gregory Kurtzer:** Yeah... \[laughter\]

**Adam Stacoviak:** We're laughing, I'm sure this is terrible for you.

**Gregory Kurtzer:** Now all of a sudden -- we've just involved lawyers, so I need to be more pedantic...

**Jerod Santo:** Okay.

**Gregory Kurtzer:** It wasn't a lawsuit, it was a threaten of a lawsuit, which was enough in my book to do it.

**Jerod Santo:** So they wrote you a firmly-written letter from a lawyer, right?

**Gregory Kurtzer:** \[00:16:06.25\] There was several of them, yes. And I ended up disassociating myself from the project, because I didn't see a clear way for me to protect myself with where the project was going and how it was maturing. Plus, the project was already kind of growing, it was taking a life of itself. Not to sound weird, but it didn't need me anymore.

**Jerod Santo:** What was their beef?

**Gregory Kurtzer:** The beef was that on our website we had the name Red Hat Linux or Red Hat quite a bit... And they weren't giving us a hard time about rebuilding, they weren't giving us a hard time about even trademarks within the operating system, but they said "The fact that people are doing internet searches, people are doing Google searches for Red Hat and CentOS is coming up first was giving them heartache.

They said "Right now if you do a search for Red Hat, you get centos.org before you get Red Hat." That was their beef. They said "Please remove the Red Hat trademark from the websites." And that was it.

The problem was that the people that they contacted on the CentOS team decided that they didn't feel as though that was a reasonable request, and they decided to push back by not removing the branding and ignoring Red Hat. So what happened from there is Red Hat got irate, to the point where they sent threatening letters to them; they didn't care. A couple of them not in the United States, so they really felt like they were beyond Red Hat's reach... And then they finally got to the point where they just sent me a threatening email -- actually, a threatening phone call first, of a lawsuit. First cease and desist, and then lawsuit if I don't respond accordingly. And I was like "Stop. I don't know nothing about this. Let's back up. What's going on? What do we need to do?" And their response was "We need you to remove the trademarks from your website." I'm like "Okay. No problem. We'll get it done." I said, "Give me a week, it will all be removed."

I went back to the web team on behalf of CentOS and they said "Well, we can't do this until another person also approves." And that person was unavailable. I said "You have to do this now. We don't have time. We're not screwing around on this. Remove Red Hat's trademarks." And they complied. But they did it in a way that basically kind of jabbed Red Hat. They basically posted the legal notices that they were given, to the blog, to the mailing list, and basically renamed everything... Something called PNALV. It standed for Prominent North-American Linux Vendor. And kind of mocked the whole thing.

That got slashdotted, got a huge -- this was back when everybody was using Slashdot...

**Jerod Santo:** Big driver.

**Adam Stacoviak:** Slashdot, exactly.

**Gregory Kurtzer:** Yeah. This got slashdotted, and a huge amount of attention was brought to CentOS as a result of this... And I literally was coming up the stairwell at Lawrence Berkeley Lab, in Building 50, back where Cliff Stoll -- I don't know if you ever followed The Cuckoo's Egg, but Cliff Stoll was working there... Anyway, coming up the same stairwell, and I get into my office. My phone's ringing, I pick it up, it's Red Hat legals, calling me on my office phone at Berkeley Lab, saying "I thought we had this covered. I thought we had a deal. Why the hell did you do this? This made us look really, really bad." I said, "Stop. Again, you have to tell me what just happened, because I'm unaware. I've just sat down in my office. What's going on?"

\[00:20:04.01\] And they shared with me what happened, and they said "Look, for this we're actually coming after you now." I basically said "Well, it would be pointless. I'm going to disassociate myself from the project at this point. Here are the people who are responsible for doing that. Please don't sue me." That was the gist of it, and that was why we ended up going into a different direction.

**Adam Stacoviak:** It must have been pretty sad for you though, to have to be so foundational to the project, so involved... I mean, to the name. You're part of the ability to call it CentOS, versus Cent OS, or Centos, or whatever you wanted to call it... You're a foundational person; to have to leave under those terms...

**Gregory Kurtzer:** I was happy not to be sued... \[laughter\]

**Adam Stacoviak:** Of course. Of course. But you were left with no choice though.

**Jerod Santo:** Trade-offs...

**Adam Stacoviak:** It was like "Here's the door."

**Gregory Kurtzer:** Yeah. And you know what - I mean, these things happen. Yeah, it was upsetting, but things happen. The CentOS team had some problems later on with some of those people who actually did that. As you can see, there was open letter to CentOS; I don't know if you guys have seen this...

**Jerod Santo:** No.

**Gregory Kurtzer:** ...where the developers of it were unable to reach the person who owned the domain, the person who owned the donation buttons, and was receiving all of the donations and all of this... So they posted actually an open letter to this person, because he wouldn't respond... And it was a little bit difficult for them, but they were finally able to get a hold of the project again.

And CentOS has definitely had some ups and downs. I mean, it has not been a very stable project, and there's a lot of reasons for that... But it's definitely -- you know, it's had some ups and downs. And since Red Hat has taken over for it, for the most part it's become much more stable, it's become much more reasonable in terms of how the project has been managed and whatnot... And I don't mean to say that it wasn't managed very well by the team, but it's definitely had its share of drama over the years.

**Adam Stacoviak:** This can also be attributed, I would say, at least by assumption, to our ability to open-source well... Meaning organizationally, foundationally. In all the ways it has matured over the years. And this may have been, as you mentioned, back in 2004, like "We've learned a lot." The mindset, the morals of open source have always been there, but how to do it has been a variance. It's been a variable over the years. I would assume that's attributed to the fact that how to open-source has matured. And that might be a side effect of these ups and downs. We've learned, and you were learning as an organization.

**Gregory Kurtzer:** Yeah. That's a very fair statement. When I first started doing this -- you know, managing a small open source project is not a big deal, but as soon as you start getting a lot of attention, a lot of contributors, it becomes a management problem. It becomes setting expectations, coordination, and really just kind of keeping people involved. And you have to manage it very inclusively. So how to do that is actually a difficult problem.

The way that I did it with CentOS was a struggle. I didn't have the experience, I was still very young, and trying to figure out what best to do... And there were people there that had a more aggressive stance than I did, and they were able to manipulate the project a little bit and take it over, which is what we saw happen.

At this point, I have a much larger amount of experience, both in terms of what to do, as well as what not to do... And I do feel as though Rocky is now getting the benefit of that experience, and I'm very excited to be able to demonstrate how I believe that an open source project should be run, how it should be maintained, and how we can take precautions to make sure that it is not only inclusively managed, it is not only stable, but it also has the appropriate community promises necessary to ensure that things like what happened with CentOS would not happen again.

\[00:24:14.24\] There's a certain amount of core fundamental leadership that needs to be put into place; everything from charters, to documentation, to transparency, that just absolutely needs to occur for a big open source project to survive. Failing that, you're gonna end up with -- there's gonna be politics, there's gonna be counter-agendas, and there's going to be no way to really hold people accountable for doing particular things. So you have to be very transparent and very upfront about that. And that's what we're doing with Rocky.

Right now, not all of the decisions are being -- they're not completely right up in everybody's face, but what we're doing is we're documenting exactly what decisions are being made publicly, what decisions are being made privately, how are we managing security of information, security of data...

For example, here's a really big one. CentOS always had kind of a fundamental problem of trust. Because every time you build a package for the operating system, that package has to be cryptographically signed. To sign that package means you have to have the private keys and the passphrase necessary to decrypt that private key, so you can use it to sign your package. Well, let's go back like 15 years ago - how do you do that in a scalable way, with people that you've never met, people that you have no contract with, and how do you trust that?

So the way to do that is you keep your group very small, very tight-knit, and you manage it very, very carefully, who has access to what. So that was kind of the initial culture of CentOS; it was about that very small unit of trust.

Moving forward now - well, we don't wanna do that. We don't wanna replicate that. What we wanna do is we wanna engage a very large percentage of the community. People that wanna come, people that wanna help and be part of this. But that doesn't -- this by no means a slight to anybody, but by no means does that mean we're gonna trust everyone equally. You can't, because you haven't built that relationship yet. But we still want to allow people to contribute.

Fedora has done a really good job at solving this problem. And this is something we're trying to replicate now, and trying to build off and leverage a lot of that existing work, a lot of that existing code and infrastructure. So instead of just jumping right in and just start building packages, which believe me, we could do - instead of doing that, we're spending a lot of time defining the infrastructure, defining the processes, doing the documentation necessary to ensure that what we're building is going to be a) repeatable, b) scalable, and we're going to be able to allow more people to be part of this project in such a way that does not sacrifice the trust or integrity of some of the private material. And we're going for various security certifications.

FIPS is a goal. We're really trying to hit a FIPS certification. And this is not my area of expertise at all, but I've been contacted by a lot of organizations that have basically offered to help us do this, help us achieve this level of certification. But to do that, that means that the entire infrastructure has to be approved. We have to build the entire infrastructure from ground up, kind of designed to be able to meet these standards, to ensure that what comes out of it, the product that comes out of this can be absolutely trusted. And it gets really difficult when you start thinking about how do you do that when you have n number of people in the community committing code. So that's the big piece of what we're trying to solve right now.

\[00:28:04.20\] Again, we could have just run and started building packages. We could have. The packages were available, source RPMs are available... We could have just done that. But the goal here was to create something that is better than what we've done before, and to build a community that's going to be stronger and be more resilient to any sort of -- I'm gonna use this word with air quotes around it, "hostile takeovers." We're gonna do everything we can to keep Rocky exactly as it exists today and exactly what CentOS started off trying to be, which is a community enterprise operating system.

**Break:** \[00:28:51.07\]

**Jerod Santo:** So what was the triggering event that made you spring back into action? Because you've been disassociated from the CentOS project for a while... Here you are, talking about Rocky Linux, and it's a new thing, but kind of an old thing, but still a new thing... What happened? Why Rocky Linux?

**Gregory Kurtzer:** That's a good question... I have a company, and in this company we are building various high-performance computing stacks, and enterprise computing stacks and whatnot... Not to make this a plug for my company, but we needed CentOS. We have a lot of users, a lot of customers and people in the community from my other open source projects as well. Everybody's using CentOS.

So when I got word that there was something happening, and I had a little bit of visibility - not a huge amount, but I had a little bit of visibility that there's gonna be some changes. When CentOS 8 was first released, we got wind that there was gonna be some changes coming... And I didn't really know what those changes were gonna be, I didn't know when those changes were gonna happen, but of course, it started some discussions within my own organization on "What are we going to do? What are we going to recommend for our customers to do if something really changes that's big?" And not to mention all the open source users of our other software that's leveraging it.

So we came to the conclusion actually - and Robert, one of my partners with my company - said to me, he goes "You know, I predict you're going to build another operating system here within the next two years." And he started telling me that actually a while ago, but he didn't expect it to happen this soon.

Then all of a sudden we see that there was an announcement on the CentOS blog that they're changing the direction of CentOs. And I used it as an opportunity to basically just say "Well, let me see if anyone else is interested in doing this, because we've been thinking about this and we need something stable. I'm not sure that CentOS is gonna meet those needs anymore... So let me just mention something on the CentOS blog as a comment."

\[00:31:55.21\] The next thing I know -- and I referenced everyone in the blog post to come to this particular Slack that I run, called HPCNG... And I said "Just come over here and we'll talk about it if anyone is interested in talking about this." The next thing I know is the amount of people joining this Slack just took off. At first it was tens of people, then it was hundreds of people, and then it just kept climbing.

Now, the HPCNG Slack started off before all this occurred; it had about 1,200-1,300 people in there. We are now just teetering on 10,000, and it's been barely a month. So you can see how fast this has been just taking off. And what happened next was actually pretty incredible... It literally went from nothing, it was just an idea, to I literally had hundreds of people direct-messaging me simultaneously, asking how can they help. They wanna be part of this.

So I said, "Let's start discussing what this would look like." I quickly created a channel, redirected people to this channel... That channel grew so fast that it wasn't long before I couldn't keep up with the threads in the channel... Just like an IRC. If you've got a big channel and a lot of people trying to talk, it scrolls faster than you can respond to somebody's answer. And you end up with so many side channel discussions and threading that it's hard to keep track of that as well. So immediately, we started creating more channels to try to group interests together. So people that are interested in development, people that are interested in community, people that are interested in the website, people that are interested in organization... We created all these different channels.

And then we create more channels within development, because we had people doing the installed, people doing packaging, people doing the autobuild infrastructure, people doing source code management. And then we had all the infrastructure teams, people that are starting to talk about things like "Where are we gonna host this? How are we gonna build this? How are we going to create all of this in such a way that it can be leveraged at large scale?" And we had the security team that started developing. And this was all in the first three days. \[laughs\]

**Jerod Santo:** Wow.

**Gregory Kurtzer:** So we had people that already had installers built in the first few days. And with their versions of the Rocky Linux logo and whatnot -- I mean, it took us more than three days to make the logo. But we had people that were focused predominantly on branding now, and creating logos... And I'm now looking at this going "I've never, in all of my open source career, seen a community grow and evolve like I just witnessed." I don't even know of this happening. The closest thing that I 've heard of of something like this happening is when Oracle took over MySQL and Maria was born. That is about the closest to this. But everybody who is in that community and came over to us basically said "No, no, no. This blew that away."

I'm sitting now looking at all this, thinking to myself "Oh, my gosh. How am I gonna manage this? How am I gonna coordinate this in a way that's going to keep everybody engaged, in the loop, but organize all of this?" It's like trying to sip water through a fire hose on full blast. There's so much coming at me, it was actually difficult. It took me about an hour to go from one side of my Slack, and just scroll down and get to all the comments and all the questions, and then just to go back to the top again. So it was like nothing I've experienced in terms of a community growing overnight.

So what this told - "Wait a sec, there's a big need..."

**Jerod Santo:** You think...? \[laughter\]

**Gregory Kurtzer:** \[00:35:55.25\] There's a lot of people that not only need this, but wanna actually do this. Well, the question in my head "Is this something that people are interested in doing?" has been answered. The answer is yes. There's a lot of people interested in doing this, and there's a lot of people that -- there's a whole new generation of people, since I've been involved in doing something like this, that actually really wanna be part of the distribution. And I'm hearing people on the Red Hat site saying "CentOS was always kind of a drain. You have Red Hat putting money into it and they're not really getting anything out of it", which is a completely fair point from a business perspective... But at the same token, there are thousands of people that are all asking and trying to help and be part of this.

So when I look at why did CentOS never really flourish like this, the answer that comes to me really just has to do with the fact that right from that very beginning that I mentioned earlier, that culture of that small kind of core team really was a -- while it was a requirement back then, because we didn't have an infrastructure or a method to deal with that back then, we do now. And now we can handle this very differently, through CI/CD, through autobuilders like \[unintelligible 00:37:08.10\] and several other pieces.

There's a whole new opportunity now than existed 15+ years ago with CentOS, and it is an opportunity to build up a community of people that are not only interested in the core operating system, but interested in areas around the core operating system.

For example, within the first week there was about three or four different SIG (special interest group) proposals that came through. One on security, one on a desktop and laptop version, one on storage, and one on high-performance computing. Obviously, I probably am somewhat to blame for that one. \[laughs\] But all of these kind of special interest groups... And it's flourished since then. We now have even more people that are interested in doing special interest groups.

So we now have to balance - okay, we've got this core operating system which has to absolutely be as stable as possible and track REL as closely as possible. We jokingly call it a "bug for bug" level of compatibility...

**Jerod Santo:** I like that. I read that.

**Gregory Kurtzer:** ...with Red Hat Enterprise Linux. And then have the ability to have additional features and capabilities via special interest groups that we can maybe toggle on or off for each install. So somebody can choose to use either, let's say, a -- oh, another special interest group that I forgot about is the absolute lightweight minimal system. People wanna strip everything out and just have an absolute tiny, little, thin, core operating system that they can leverage for either containers or for very minimal installs, or to run Kubernetes on top of, and just have that sitting just right above the bare metal.

So there's all these different special interest groups, but what if we can now tune the installer -- a special installer; not the standard one, but the special installer, to just do a minimal operating system. Just do that minimal install. And I know a lot of people, especially coming at it from the Debian perspective, where that's always how we build systems. Always give me a minimal install. I want nothing on there. And I'm gonna build it up custom to meet a specific need. There's a lot of system administrators and engineers that prefer to build systems like that.

Now, the existing CentOS installer definitely has a minimal category; you can specify minimal and you're gonna get a small subset of packages... But people even wanted less than that. They want really super-lean. So I'm just kind of articulating this as an example of all of the different ideas that people want to invest in and play with, and augment this very stable foundation and then build off of that stable foundation additional capabilities.

**Jerod Santo:** Do you feel a lot of pressure to deliver at this point? I mean, I feel like I would.

**Gregory Kurtzer:** \[00:39:59.01\] \[laughs\] I have a media person who I work with through my company, and she's been tracking the various announcements, and media and whatnot that's gone out on behalf of Rocky... Just kind of tracking it for me, and just kind of saying "Okay, here's all the different articles that have been released this week", and whatnot. And next to them, she counts and estimates and tries to give as much details as she can regarding impressions.

Let's see, what has it been... A month? Just about a month now. 60 million impressions off of all of the different articles and documents so far that's been written is her estimate. 60 million. I have never -- I mean, I mentioned that to some of the core team and some of the people that I'm kind of like leading, that's leading a lot of the different aspects of Rocky, and they all said "Oh, wow. This is huge, isn't it?" It's like, "Yeah, this is really big."

We've been so focused and heads down on just figuring out how we're gonna do this and making this happen that honestly I haven't even paid attention to a lot of the articles that have been written, that are out there. So for me to see a number that big, and that many people that are interested in what it is that we're doing... Yeah, to your point about "Yeah, no pressure at all." There's a lot of people watching right now...

**Jerod Santo:** \[laughs\] So how do you deal with that pressure? I guess you're sort of realizing it now, or as you go, but there's a lot riding on this, because in addition to that, or I guess the flipside of that coin is this is like a massive opportunity to do something awesome... So I would have my own intrinsic, internal pressure of like "Don't screw this up, Jerod, because this is a great opportunity to do a really cool, new thing." And the bug for bug compatibility is kind of cheeky, but kind of bothers me, too. it's like "Really? You're gonna bring all that baggage with us?"

But nonetheless, building upon this foundation, that apparently lots and lots and lots of people have been using either - not reluctantly, but just kind of like... What's the word where you're looking around -- not contemporaneous... I don't know what the word is. Circumspect, right? Looking around for something else to come around, that has the foundational roots that they desire, which is the core community aspect... And so here it is.

**Gregory Kurtzer:** Well, I wasn't all that nervous about it before you mentioned it, but now that you said it... \[laughter\]

**Jerod Santo:** Pile it on... Don't screw this up for us, Greg...

**Gregory Kurtzer:** \[laughs\] So it is a lot of pressure, but at the same token, there are hundreds of people working on this with me.

**Jerod Santo:** Yeah, it's a team.

**Gregory Kurtzer:** It's a team, and this team is fantastic. There are so many... And the variety of people, background, skillsets, expertise levels is so broad. How many different people from different countries, different organizations, different backgrounds and interests that are all working on this together... It really is something special. But what I'll mention is there's a lot of people that are carrying this right now. It is not just me.

If I were to resign this tomorrow, there is no doubt this is going to keep going. But I enjoy being part of this, so I don't wanna resign it tomorrow. I like this. This is a lot of fun.

I describe this sometimes as it's like we're having a constant party in Slack... Because there's so many people, we're having a great time... It feels like an underground movement, kind of just rising up right now, and everything is taking shape. And people that want to become involved and wanna do something like this are getting the opportunity to do something that's really a differentiator.

\[00:44:05.06\] We've had a couple of people that have come by that are like "We've been out of work for a while. I've been looking for something to do", due to Covid and everything else. It's kind of a hard time right now. And we're all locked inside... So this is giving people not only something to do, but something that differentiates themselves when they're looking for work, when they're looking for jobs. Now, all of a sudden they are a contributor, they are part of this team to create a new operating system that the chances are it's going to be impacting most of the tech employers out there.

So it really is sharing the load, it's sharing that responsibility, and the team of people that have really stood up to make this happen is just phenomenal. It's a privilege to work with these people and this team... So it helps a lot in terms of that pressure. It's not just me.

I am nowhere near the smartest person in the room, thank God... \[laughs\] There are people that are coming with so much more experience, so much more background... Really where my major value-add is here is really just my experience in now running a project like this, and leading this and helping to coordinate and organize.

**Adam Stacoviak:** Your experience, yeah.

**Gregory Kurtzer:** I am not the person building the RPMs, I am not building the installer... I'm even looking at some of the infrastructure documents and I'm looking at it like an executive which doesn't understand anything about tech anymore. I'm looking at this going "I'm glad you guys get what you're doing, because this looks cool. It's pretty." \[laughter\]

**Adam Stacoviak:** Yeah. Well, you're at the right place, at the right time, with the right kind of momentum, and you've got the history. And there's a lot that we can bring to things when we have that history. Without someone like you who has this history, it'd be more difficult to organize the foundations that you're organizing upon.

There were some numbers that were mentioned in an article that your assistant, or whomever you mentioned - I can't remember how you defined her - was tracking in terms of impressions, from the register, and it said that CentOS powers almost 19%. I'm not sure if these numbers are accurate, but these are numbers that are on the register as part of somebody else's research, and you can tell me if they're somewhat accurate. So I would imagine that this kind of powering of the global web servers leaves a vacuum if the future or CentOS is in question, or isn't production-stable anymore. That disrupts, if that happens. It says "CentOS powers almost 19% of all Linux web servers globally", which puts CentOS -- or Centos, sorry about that; I keep messing up.

**Jerod Santo:** Centos...

**Adam Stacoviak:** ...second after Ubuntu, Linux web servers, with 18.8% share. Way ahead of Red Hat, at 1.8%.

**Gregory Kurtzer:** Yeah. And actually, the numbers that I've heard - well, they're a little bit dated at this point - are higher than that in terms of CentOS. But I do think you're right; I mean, I think the register is right. Ubuntu has definitely been catching up considerably.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** The point is there's a vacuum, right?

**Gregory Kurtzer:** Yeah, there's a big hole now. Yeah, exactly. Exactly.

**Jerod Santo:** So speaking of Red Hat - is this overwhelming interest (let's call it) in Rocky Linux? Just the groundswell of interest. Is this Red Hat's loss? What's your take on that? There's been plenty of people that feel like Red Hat has basically failed CentOS, has failed the community... There's people who are mad at Red Hat. But they have that percentage. But then they had control, so to speak, of CentOS, of this thing which they decided to change the way they were going to deal with it... I don't know, I'm just curious your thoughts on where Red Hat stands in all this.

**Gregory Kurtzer:** \[00:47:50.26\] So first I'm gonna cop out. I can't tell you how Red Hat stands. But what I can say is a couple pieces that I think are really important pertaining to this. One is Red Hat did not make the decision completely unilaterally. They could have, from what I understand, regarding some of the CentOS agreements that they have in place. I don't know them, I'm not familiar enough with them to be able to state definitely... But there is a CentOS board of directors. That CentOS board of directors, as I understand it, the plurality/majority of it (I don't know which) is in fact Red Hat. But there are people part of the CentOS board of directors that are not Red Hat. And from what I understand, this was a unanimous vote. So this is not just Red Hat. We shouldn't be blaming necessarily Red Hat for this shift. There was definitely a shift that occurred. I believe that that shift is in the best interest of Red Hat, but I don't blame Red Hat at all for that shift.

I said the same thing when CentOS first came to be, when Red Hat end-of-lifed Red Hat Linux, and yielded to Red Hat Enterprise Linux. Red Hat is a company. They have done a tremendous amount for the community, and for Linux in general. They are, at least to my knowledge, the (if not one of the) biggest open source contributor companies in the world. And all of Linux, whether you were using Red Hat or not, is benefitting from the contributions of Red Hat as a company.

**Adam Stacoviak:** Yeah.

**Gregory Kurtzer:** So Red Hat has to do what they need to do to survive. I don't know what decisions and what's happening behind closed doors, especially now that it's been acquired by IBM... But they need to be thinking first and foremost fiscally for their organization... Because the success of Red Hat means more success of open source projects. I want to be really clear on that. Red Hat didn't do anything wrong from that perspective.

Now, with that being said, I don't believe that CentOS belonged under the umbrella of Red Hat. I think that was a clear mistake.

**Jerod Santo:** Did we talk about how it got there?

**Gregory Kurtzer:** Not really, no.

**Jerod Santo:** Could you give the elevator -- or just a brief of how they ended up in control?

**Gregory Kurtzer:** Yeah, so I can give you the outside perception of this...

**Jerod Santo:** Sure.

**Gregory Kurtzer:** ...because of course, I wasn't part of it.

**Adam Stacoviak:** This is poster disassociation, this acquisition process.

**Gregory Kurtzer:** Yeah. Right.

**Adam Stacoviak:** Okay.

**Gregory Kurtzer:** So CentOS had, as I said before, a lot of drama. Ups and downs. And there was a couple times in which it got very slow in a release, because it's very difficult to do a new release, especially if there's only a couple people working on it. And it was way behind, and there was a lot of people kind of "Where's CentOS? What's going on with CentOS? Are we gonna get a CentOS 7?" It took quite a while before Red Hat acquired... And what ended up happening is it was kind of going downhill. It was getting less and less contributions... It wasn't really on the up; it was on the down. And what happened was the core engineers that were running this at the time got job offers; they got job offers by Red Hat. And as part of that acquihire (that's what I would call it), Red Hat was able to obtain the domain and the trademarks, and all of that. Actually, I shouldn't say trademarks; the logos. Because there was no trademarks at that point.

I was actually surprised to find that Red Hat actually filed for trademark on CentOS... Which kind of surprised me. I didn't know that that would be possible, considering a decade plus of prior art in the community; I didn't think it would be possible to get a trademark on it. But they did.

And what ended up happening was these core CentOS engineers were hired by Red Hat to continue developing CentOS. And it just kind of ended up coming under their umbrella. I don't know if there were any additional agreements, I don't know if there was a big sign-on bonus or anything that these guys got. I hope that they did, but I've got no visibility into that... But Red Hat did end up kind of getting a hold and running the CentOS project.

\[00:52:08.15\] Now, initially, I had a number of people first reach out to me and ask me if I would create another version of CentOS, and I said "No, let's see how Red Hat does with this. This could be good." And it was good for quite a while. Red Hat put in additional resources into CentOS, both in terms of packaging assistance, in terms of community assistance, documentation assistance... So Red Hat actually invested into CentOS. And CentOS as a result kind of started to flourish again, and it was doing really fantastic. Initially, everything looked like it was going very well.

So there's kind of a conflict of interest a little bit between Red Hat Enterprise Linux as a paid product and CentOS, which is a freely available paid product kind of cloning Red Hat Enterprise Linux. \[dog barking in the background\] Sorry... And there goes UPS, okay... \[laughs\]

**Adam Stacoviak:** That's the life of \[unintelligible 00:53:09.06\] Deliveries happen, and you're at home now. This would normally happen because you'd be in your office or somewhere else, potentially...

**Gregory Kurtzer:** Yeah.

**Adam Stacoviak:** Now that's just how it works out.

**Jerod Santo:** We're used to it.

**Gregory Kurtzer:** Well, yeah, nobody goes to the grocery store or anything anymore. FedEx and UPS and Amazon is pretty much everything.

**Jerod Santo:** Mm-hm.

**Adam Stacoviak:** Well, to Red Hat's point though - and I think even the point you made before, it's like, they're a business. As a business, you have to optimize for certain measures to succeed, or to sustain, or to grow, or to do whatever you're trying to do as that business.

I'm not deep into the trenches of Linux and I'm not paying attention to all these details every single moment, but it's kind of interesting how they would acquire the necessary assets that made up CentOS over the years... And with (I would suspect, potentially) lack of responsibility of it, given this change and the reason for Rocky, which we're describing here, I think that that's sad, to see that that's their perspective as a business. But as a business, they have necessary \[unintelligible 00:54:21.26\] to do to optimize for it.

**Jerod Santo:** Right.

**Adam Stacoviak:** So this just falls by the wayside in the realm of the massive brand that is Red Hat Enterprise Linux. I mean, it's massive, as you've mentioned.

**Gregory Kurtzer:** Yeah.

**Jerod Santo:** So we're all just outside observers here, but... I'm outside-observing, thinking "Okay, I'm Red Hat. I have CentOS with 30% market share of web servers, community addition of this operating system, and then I have Red Hat Enterprise Linux with 1.8% or whatever that number is... And that's top of the sales funnel -- you know, bottom of the sales funnel right there." Whatever it costs to maintain CentOS. I don't know that number, that's why I'm outside-observing... You'd think it would be worth it to get that sales funnel into the enterprise edition. But apparently, whatever that conversion is -- but there is a conflict of interest, because why would I make this thing better when I can make THIS thing better? etc. It gets icky.

But I would love to know the inside decision-making -- and I know you said it wasn't totally Red Hat that made this decision, it was the board, which includes non-Red Hat people. But I would just love to know... You know, because they're privy to way more information than we are. But even as a business, why is that a good decision...?

**Gregory Kurtzer:** I think from a business perspective it makes a lot of sense, because what they're doing is they're putting CentOS slightly in front of Red Hat Enterprise Linux. So instead of trailing behind and mirroring Red Hat Enterprise Linux, it's a little bit in front. And as a result, what this gives us is it provides -- I hate to call it a beta, but it provides a beta, it provides a testing ground to know what is coming and what's just slightly ahead of the curve for Red Hat Enterprise Linux.

\[00:56:06.05\] So from a business perspective and a Red Hat partner perspective, this makes a lot of sense. From a community perspective - and this is really my biggest beef with it... The name CentOS to me, and how it originally kind of originated, is Community Enterprise Operating System. Well, we've just made a decision that is not really in the best interest of the community, as you can see...

**Jerod Santo:** Right.

**Gregory Kurtzer:** We've just made a decision that by most people in the community standard is no longer considering an enterprise, stable operating system. So we just took the C and the ent out of CentOS... And we're leveraging and we're kind of sitting now with an operating system that I would not say is invaluable. I think it actually is very valuable, and I think to a lot of organizations it's still very valuable, especially as we start thinking about CI/CD, constant development, constant integration, and continuous -- whatever. Continuous integration, continuous development, and being able to do rolling releases. It makes a lot of sense. But that's not everybody. As a matter of fact, that's not even the majority at this point.

So I think Red Hat is pushing the envelope a little bit, and kind of moving people to a future that does make sense, may make sense for a lot of people, but it doesn't necessarily make sense right now, especially -- I mean, again, as you can see, with the uptake and the amount of visibility that Rocky has obtained in very short order. They rubbed people the wrong way.

**Adam Stacoviak:** Well, what they did was they made it unsuitable for production use, which cuts out a lot. I mean, you take that 20% that are using it in production stages, and it's like "Well, they can't anymore."

**Gregory Kurtzer:** Yeah.

**Adam Stacoviak:** Back to the vacuum...

**Jerod Santo:** Well, they can, but they--

**Adam Stacoviak:** Sure, okay. They can, but they shouldn't.

**Jerod Santo:** Not with support. It's end-of-lifed by the end of the year. It's EOL end of the year '21, right?

**Adam Stacoviak:** Yeah.

**Gregory Kurtzer:** So CentOS 8, as a non-rolling release, is end of life as of the end of the year, as of the end of 2021. CentOS Stream, which is a rolling update, no longer having major versions, is going to continue being available. But as you said, Adam, a lot of people--

**Adam Stacoviak:** It's ahead of.

**Gregory Kurtzer:** It's ahead of. It's no longer enterprise-stable. You no longer can necessarily count on that absolutely stable API. And that's where the community is now very nervous. I've had a lot of feedback at this point by a lot of -- they would prefer their names to not be mentioned, but I can say very large organizations that are very nervous about this switch of CentOS; they're leveraging CentOS for the majority of their infrastructure. And this is why we are looking at things like FIPS compliance and whatnot, because this will actually take what they were using as CentOS, it'll actually take it up a level in terms of their compliance needs.

And it's unfortunate -- it may actually compete a little bit more with Ubuntu and REL then, because all of a sudden we're actually meeting those additional compliance needs... But this is what they're asking for, and they're willing to donate to the project to ensure that this gets done. I don't wanna say that it's guaranteed; it's a goal. We're hoping to get this done, and we're gonna see as time progresses if it is in fact a possibility, and that's something we're shooting we're for. I think it's very possible that we'll be able to get these additional levels of certifications, and I think it would be very valuable to the general community of users out there.

**Adam Stacoviak:** Yeah. All this to say though - Rocky. That's the whole point, right? This all gets us to the point, like, this is how CentOS is acquired, its assets were acquired by Red Hat; for their own reasons they've changed its direction, made it unstable for production use, not really good for the 20% enterprise cases that are being used out there, leaving the vacuum, and then therefore Rocky. And then obviously, the hockey stick you're writing right now, in terms of growth factor. And that's a good place to be.

**Break:** \[01:00:14.12\]

**Jerod Santo:** So let's imagine I'm a happy CentOS user today. I've got a fleet of CentOS 8 servers out there in the world, and my job is managing those; they're running my business. And I'm thinking "What's standing between me and running Rocky Linux on these machines? What is it between those two goals?" And I'm turning to you, Greg... Founder of Rocky Linux...

**Gregory Kurtzer:** \[laughs\]

**Jerod Santo:** Like, what has to happen for -- because this is gonna be a big deal for a lot of people. You can't flip a switch and you're running Rocky Linux. Or maybe... But the switch has to be created, right?

**Gregory Kurtzer:** Yeah.

**Jerod Santo:** There's a lot that has to happen between now and then, so what does that look like and what are the challenges involved?

**Gregory Kurtzer:** You just nailed it. Eventually it is going to be a flick of a switch.

**Jerod Santo:** Oh, nice.

**Gregory Kurtzer:** But we have to build that switch. So we're still building.

**Jerod Santo:** Who's building the switch, Greg?

**Gregory Kurtzer:** There's a lot of work that's happening right now to build the infrastructure such that we can properly build all of the packages, all of the repositories, and then the installer, such that people can very easily transition from existing CentOS into Rocky.

Now, when it's time to transition, we foresee that it's literally gonna be just one command. You're gonna be able to copy-paste a command, it's not even gonna be incredibly unruly... But copy-paste one command, put it into a root shell on your system, hit Enter, and it will just do its thing. Literally, that's going to be a single DNF command... A DNF, if you're not familiar, is the new version of yum. And from that command, it will automatically replace the CentOS repositories with the Rocky repositories, and from that it will basically spin up a dependency chain on the CentOS trademarks and logos and whatnot, replace those with the Rocky trademarks and logos, and then automatically set you up so that every subsequent upgrade that you need to make is going to be now pulling from Rocky... Because the two operating systems are basically completely compatible with each other, you don't actually have to replace all the binaries in the underlying CentOS 8 system to move over to Rocky 8. So this means that it is absolutely a seamless transition. It's the equivalent of just doing a standard upgrade, or rather an update.

**Jerod Santo:** \[01:04:26.28\] Right. So that's great news. The not-so-great news is that there is -- maybe this is good news sometimes for software projects, but the one that's putting a fire under y'all's butts is that there's like a hard deadline if you wanna never go out of support... By the end of 2021 CentOS 8... Centos... 8...

**Gregory Kurtzer:** \[laughs\] You guys are gonna make me question this for the next week or two, every time I say CentOS...

**Jerod Santo:** The nice thing is, Rocky Linux - really easy to say. So it's gonna go out of support end of this year... So come January 2022 - okay, so it's gonna be a seamless update, flick of a switch for the users whenever it happens... But how much has to happen between now and then? There's so many things that have to make that seamless, right?

**Gregory Kurtzer:** Yeah. And the biggest piece of this in terms of timeline is not what's on our shoulders, it's what basically enterprises and the processes that enterprises have to go through to properly validate and make decisions.

This was a shock for me. I came out of Academia, government and whatnot, and I'd spent a long time there... You know, when we wanna make a decision, we just go talk to the right people and we just go do it. Large enterprises don't work like that, generally speaking. When they wanna change an operating system or do something along this line, they have to validate, they have to make sure that it's going to work. They have to get all the appropriate authorizations, they have to test... There's a lot of process that needs to go through. Generally speaking, for large organizations you're talking at least six months of time right there.

So this means that whatever we do doesn't need to get done before December 2021, it needs to get done by at least the end of Q2, if not more like mid-Q2. So that's what our target is. We're targeting Q2 to get the packages built, the repositories up there, get everything signed, tested and released, such that now enterprises can start their testing process to figure out what do they want to do moving forward, and are we giving them enough time to make that decision properly.

**Adam Stacoviak:** Given the inertia, the vacuum, the momentum that's happening here, do you imagine there's gonna be a big awareness campaign necessary to make those out there aware of what's happening with CentOS, and the changes? Not everybody is in the trenches on the news. You've got a lot of developers, obviously, managing these systems... But is there a sort of uphill awareness battle to deal with as well, in addition to all this extra creating of the switch, and putting it out there by July 1st, or whatever?

**Gregory Kurtzer:** I think that there is. But I always think there is. There's always information to disseminate. Even the people that have now heard about what it is that we're doing -- I've actually spent some time looking on Reddit and looking in various posts and whatnot that people are putting out there, and I'm actually sometimes surprised by what people are saying about what it is that we're doing... Not because they're not in alignment or they're against it at all. No. Almost everybody across the board is really excited about this. But there's a lot of misunderstandings in terms of what it is that we're setting out to do.

First and foremost, we're setting out to basically have a transition path from CentOS. So people that currently have their infrastructure built with that, they don't need to worry. The community is swinging in to save the day, in a manner of speaking. We're going to have that update, have that transition path available very easily. They're not gonna have to worry about it.

\[01:08:18.25\] The people that wanna continue on with CentOS Stream will absolutely be able to. No issue there whatsoever. It's just now we have a transition path for the people that aren't really looking at CentOS Stream and wanna stay in alignment with Red Hat Enterprise Linux. So that I think is where we need to spend some time really just kind of getting the word out, is in terms of this is a new operating system, but at the same time it's not a new operating system.

**Jerod Santo:** Right.

**Gregory Kurtzer:** I know that sounds really kind of funny, but it's true.

**Adam Stacoviak:** It's a resurrection, in many ways.

**Gregory Kurtzer:** Yeah.

**Adam Stacoviak:** It's a resurrection of old principles, and unlaid plans that never really fruitioned quite the way they needed to, project-wise and organizationally. You have all the necessary things technically, but a lot of them -- and then obviously, your departure, as we've talked about before... I'm sure a lot of that plays into how CentOS played out... And now you're just sort of resurrecting your original flag.

**Gregory Kurtzer:** Yeah. Yeah. \[laughs\]

**Jerod Santo:** \[unintelligible 01:09:13.27\]

**Gregory Kurtzer:** Yeah, what Adam said. \[laughs\]

**Adam Stacoviak:** Rocky Linux is here. The flag is up... Bear it if you must. You will.

**Jerod Santo:** So since we've spent all this time bikeshedding the CentOS name, and we like Rocky because it's easy to pronounce, but what is the inspiration...? You may have mentioned it at the top of the show, but I can't recall... You said there's been people complaining about Rocky Linux... So real quick, give us a minute on the name.

**Gregory Kurtzer:** So when I've come up with names of projects - you know, in some cases it hits me right away and it's like "Yeah, that's it." And in other cases I could be doubting it for months on end, going "No, I don't really like name" or whatever. I was going back and for quite a bit, and I was talking with a few other people and they asked me "What was the beginning of CentOS like?" and I started talking about -- very similar to this story, when we first started, how it kind of unfolded... And I mentioned Rocky McGaugh, who was the person who first did the initial builds of CentOS... And I was like "Oh. Rocky. Yeah." And from that moment on, it was just obvious. That's what we've gotta call this.

He passed away, he wasn't able to ever really see where CentOS took of... And I think it would have made him very happy to have that visibility... But he never did; he never got that opportunity. So this gave me a way to pay tribute to him being part of this initial team that never really got to see how much of an impact, a worldwide impact that CentOS became to be.

So it was immediate, it was like "Oh, that's it. We're going with this." And then, from that moment on began the influx of people from the community saying "Yeah, I don't really like the name..." \[laughter\] "Can we name it something else? Are you open to other ideas?" And most things I'm open to hearing suggestions and whatnot, but this one I'm like "No, I'm not interested. This is what it has to be." And they're like "But I can't go to my CIO and say this. It sounds too hockey, and whatnot." And somebody brought up, "Oh, you mean like CockroachDB?"

**Jerod Santo:** Right.

**Gregory Kurtzer:** Or Maria, or... You know, Fedora is a hat. I mean... \[laughs\] All these projects have funny names.

**Jerod Santo:** We google things all the time. The first person who said "Google", it's like "Are you serious? Google? That can't be a serious product, Google."

**Gregory Kurtzer:** Even Yahoo. But the names solidify after some time, and in Rocky, it makes sense, it's easy to say, it's very memorable, and it fits.

**Jerod Santo:** Totally.

**Gregory Kurtzer:** \[01:12:08.18\] So that's why we're not having the discussion anymore, we're just going with this name... Because if we don't, the other side of this is what's gonna happen. For the next three months, six months, however long, we're gonna be all debating the name anyway, with whatever we choose.

**Jerod Santo:** Yeah.

**Gregory Kurtzer:** This one means something, this one's good. We're gonna go with Rocky. But I'd say the conversation of names still comes up. I was on Reddit just recently looking at that, and somebody posted something about Rocky, and they were like "Yeah, but the name..." What's wrong with the name? \[laughs\]

**Jerod Santo:** Right. There's no perfect name, first of all. And secondly, we do word associations. So everybody, when you hear a name, you immediately -- like, what comes into your head? And for me, it's Sylvester Stallone running up those stairs. There's a triumph to the name Rocky. And that's just me; I have a positive reaction to that. Maybe some people hated that movie, or hate Sylvester Stallone, or whatever, and they're like "Oh, boxing is the worst." But I have a positive -- I think of that name, I think of a triumph, and it seems so far that you're kind of running up those stairs, to a certain degree... So I'm all for it. I'm gonna stamp my approval. Not to mention phonetically easy, one way to say it, easy to spell, pretty short, two syllables... That's a great name.

**Adam Stacoviak:** Aside from your friend Rocky though, is there anything in the logo that is a subliminal? Because it's like a mountain kind of logo.

**Jerod Santo:** What's the logo? I didn't even see the logo.

**Adam Stacoviak:** Jerod's draw is from Rocky Balboa, Sylvester Stallone, the Rocky movies. The logo is a circle with a peak in it, and it seems like a rocky mountain, to some degree. I'm just drawing the conclusion there, but...

**Jerod Santo:** There you go.

**Adam Stacoviak:** What do you think, Greg?

**Gregory Kurtzer:** I can't show this in a podcast, where it's just audio, but you're right, the logo does have something subliminal in there. \[laughs\]

**Jerod Santo:** Okay... Tell us.

**Gregory Kurtzer:** If you zoom in to a particular point of the CentOS logo, it is actually exactly that angle. That is a piece of one of the CentOS -- one of the squares in the CentOS logo.

**Jerod Santo:** Oh, I see. So you cut a section out and made it a new logo from the old one.

**Gregory Kurtzer:** Yeah. And you know, that being a Red Hat trademark now, we're just gonna get in all sorts of trouble and whatnot... But that's one of the places where it came from, yeah.

**Adam Stacoviak:** Inspired by Greg. Inspired by. It's not really zoomed in, it's just inspired by what would happen IF you zoomed in. IF you thought that could be possible.

**Gregory Kurtzer:** And the color is different. And we may not be using a font originally called the Red Hat Linux Font. A Red Hat Font. We may not be using that, because we forked in, and now it's called Rocky Linux Font.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Nice.

**Jerod Santo:** Well, they say good artists borrow, great artists steal. And I think the greatest artists steal from themselves. \[laughter\] And from Red Hat.

**Adam Stacoviak:** That's awesome. Well, let's not say steal for sure from Red Hat, because that's not the truth.

**Gregory Kurtzer:** Inspired, I like that. It was inspired...

**Adam Stacoviak:** Right. It's inspired by, if you have that perspective. If you had that perspective, it would be inspired by that.

**Gregory Kurtzer:** Especially if you zoom into a very particular point of the CentOS logo, it definitely is very inspirational.

**Adam Stacoviak:** Yeah. So foundationally, you've got a lot going on. You had to do a lot to make this all possible. The Rocky Linux Foundation Inc. is a thing... There's a lot of just goings on to make this possible. Forming an incorporated company, with plans to be a 501(c)3, with the ability to take donations, and sponsorships, and all this stuff. It must have taken a lot of personal investment, effort, whatever. What are some of the details you can share behind making this possible? Because this is a very much in the trenches, you're doing it, you're re-raising the flag, you're resurrecting the intentions behind CentOS with this, and there's a lot that goes into place to make it possible. Not just distribute tomorrow, but do all the things, the processes, the documentation, the company, the 501(c)3... There's a lot behind this.

**Gregory Kurtzer:** \[01:16:17.01\] You're bringing up some fantastic points. The first thing that I wanna touch on is something you said right at the beginning, which is the Rocky Linux Foundation. So one thing that we have done in terms of "How do we ensure that this is going to stay in the community? How do we ensure that what happened to CentOS does not happen with Rocky?" And a big piece of that is to create an organization, a foundation that has a very specific charter, it has rules, expectations... You can almost think of it like a social contract of what we are promising the community. And we will hold ourselves accountable to that promise. But the process of doing this, even the process of accepting donations requires an entity to be formed. So we have formed the Rocky Linux Foundation - it is a Delaware organization - and we have put together all the necessary starting points such that when we're ready to go for tax-exempt status, a 501(c)3 - at least U.S. tax-exempt status - we can do that.

But these are all of the foundational pieces that are necessary to do this. This is a personal outlie of funds for me. My company that I work for \[unintelligible 01:17:35.28\] We are also investing in this in the sense of sponsoring. So my company is putting money in, I've put money in personally... And what we want to do is make this -- so it is not about me; I definitely don't wanna keep outlaying money, if I can help it... And it's not about my company. It's separate. This is a completely separate organization, really for the community. But there are certain costs associated with it; there are certain resources that we need to be planning for, and for that, we're actually going to be opening up donations and sponsorships. Donations for individuals to put in some money to help out with some of the expenses, as well as sponsorship for organizations.

We're still thinking through what sponsorships will gain organizations. At the moment it's really just to help us develop and help us manage the bills... But at some point we may be able to do something along the lines of giving organizations some amount of banner space on the website, or something along those lines... But we have to be really, really careful, because we can't sell anything. We're going for 501(c)3, we're going for tax-exempt status, which means we're not selling products, we're not selling services. We can't. We don't want to.

It was funny, we had a conversation about merchandise, because we have an organization who's going to be setting up a merch store for us, for Rocky Linux Swag... And you can go there and get hats, and stickers, and shirts, and all that sort of stuff; coffee mugs, and whatnot... And one of the initial thoughts was "Well, if somebody personally donates a certain amount of money, can we give them a shirt?" And the answer is no. You can't. \[laughter\] Because then it looks as if we're selling a shirt.

**Adam Stacoviak:** Yeah.

**Gregory Kurtzer:** So we can't. So we're trying to figure out, "Okay, what do we do? How do we handle this?" Maybe it's a promo code, such that once you've donated, you can now go and this other organization will give you a discount on it, or give you a free sticker, or something like that. I don't know what it'll be yet, but... These are the types of things now that we have to start thinking about because we are gonna be going for 501(c)3, and it's very strict. And it's actually very cost-intensive in terms of working with people that have experience in doing this... Because it's a difficult process. And it's also a process that requires a certain amount of expertise.

**Adam Stacoviak:** \[01:20:07.11\] Yeah. If there's someone listening right now that's like "I'm in. I wanna sponsor, I wanna donate, I wanna give, I wanna be a part of it", what's the first step to that? It's kind of vague what the next step might be, or even how you can -- you know, maybe they just wanna give you money and they don't care. What's the good first step, regardless of the details that will play out eventually?

**Gregory Kurtzer:** It's funny, because we've set up a Google Suite account for RockyLinux.org, and I have an email address there... And there are a lot of emails coming in, of people saying they wanna contribute, they wanna sponsor, they want to be part of this... And we haven't been able to keep up with them yet. But I would definitely suggest, please do reach out to us. Send us a message. We're working on getting a Donate button up, and we're working on getting the infrastructure set up... But if you are interested, whether it's being part of the organization, whether it is contributing to the organization, or if you're a company and you wanna sponsor what it is that we're doing, please reach out to us.

The easiest way is just hello@rockylinux.org. But if you go to the website, rockylinux.org, you'll see that there's the hello@ address there, but there's also a couple forms. There's a form to basically get into our Slack, which is going to be changing over to Mattermost in the next day or so... So we're gonna be migrating away from Slack. So that's one thing to join, and you can definitely speak up there... But the other one is - we have a Contributors form. This is contributing in terms of really just resources; not really money, but people that wanna be part of the project... The last time I looked, it was approaching 500 people have filled out this Google form in just a couple weeks. But definitely, please do fill that out if you're interested; please join the Slack or Mattermost, depending on when you hear this... As well as reach out to us; send us an email. And just realize it will be a little bit before we get back to you. We're working on it.

**Adam Stacoviak:** Well, Greg, we're fans of what you're doing. Right place, right time, right experience, right ability, resurrecting that flag, standing it up... The Rocky flag is flying high, and we're excited about that. Is there anything we haven't asked you to share as part of this conversation, that's like "I've gotta share it"?

**Gregory Kurtzer:** That's a fantastic question. We've covered so much, and it's been a fantastic conversation... Really, I think the big take-home points here is that we're working on a timeline, we're working on the ETAs and we're trying to keep the community informed in terms of various announcements, and letting people know about that timeline such that they can start making the important decisions that organizations and people are gonna need to make to know what do they do. We don't want people concerned about if they have to immediately transition, if they can wait a little bit...

As I said, we're looking at about Q2 to get code out there, but this is gonna be solidified here in a community announcement that we're putting together - or rather a series of community announcements that we're putting together. So to stay tuned.

In terms of being part of this, this is 100%, first and foremost a community endeavor. We want people to join us. We want people to feel like they can be part of this organization, whether you are new to open source, whether you're an industry veteran, whether you are a coder, whether you are a documenter, whether you just want to be a community advocate, or just help with organization, whatever the case may be. If you've thought about ever being part of an open source project, please check us out. Join. We've got a lot of people, we've got a great community, and it's a lot of fun. I jokingly call it an underground party... So please do join in and help us out. Be part of what it is we're doing. We'd love to have you.

**Adam Stacoviak:** Yeah. Here on the air I wanna mention -- I think it's a redirect, rockylinux.org/contributing. So it's wiki.rockylinux.org/contributing. It actually has a lot of details there... And even to be able to reach out to get on a particular team - community team, brain team, development team, documentation... So if you have a desire to play a role on any level, this page will probably be an ever-changing page, but for now it's gonna direct you to the right kind of places... So that's a good place, I would think, to start. Worst-case, rockylinux.org is a good spot to land.

Greg, thank you so much for sharing the story with us. I think that's what's the most fascinating to me, and I think Jerod will concur, about doing this show - we get to hear these stories and really see the future, where things are going. You're very much helping to lead that in many ways, and we appreciate you sharing that story with us. Thank you.

**Gregory Kurtzer:** My pleasure. I'm happy to be part of this organization, and I'm happy that you guys invited me to this show. Thank you so much. And if you ever want me to come back, you know how to get a hold of me.

**Adam Stacoviak:** You'll be back...

**Gregory Kurtzer:** \[laughs\] Awesome. Thank you both.

**Jerod Santo:** Thanks, Greg.
