**Adam Stacoviak:** Welcome back, everyone, this is The Changelog. We're a member-supported blog, podcast, and weekly email that covers what's fresh and what's new in open source. You can check out the blog at thechangelog.com, our past shows at 5by5.tv/changelog, and now you can subscribe to The Changelog Weekly. It's our weekly email covering what's fresh and what's new in open source. We send that out every Saturday. Subscribe at thechangelog.com/weekly.

This show is hosted by myself, Adam Stacoviak... I almost said Andrew Thorpe... \[laughs\] And also Andrew Thorpe. Say hello, man.

**Andrew Thorp:** Hey, how's it going?

**Adam Stacoviak:** It's a good day, man... And this is episode \#103, man...

**Andrew Thorp:** It is a good day, yeah.

**Adam Stacoviak:** It's good stuff. We're joined by Sytse 'Sid' Sijbrandij. He's the co-founder of GitLab, with Dmytro. They've got a fun thing going on over there... They just versioned to 6.0, so... Sytse, welcome to the show, my friend.

**Sid Sijbrandij:** Thank you, no problem. Honored to be on the show. And Andrew, congratulations on your birthday, man.

**Andrew Thorp:** Thanks, yeah.

**Adam Stacoviak:** Yeah, you can virtually wish Andrew a happy birthday, because today, Thursday - I think this will air on Friday, but... You'll be in the future, but today is his birthday. Good stuff.

**Sid Sijbrandij:** Big day.

**Adam Stacoviak:** And before we kick off this show, I wanna pay some homage to our sponsor, DigitalOcean, a super-awesome cloud hosting provider.

**Break:** \[01:33\] to \[03:00\]

**Adam Stacoviak:** That's kind of neat though, Andrew - we have a friend at \[unintelligible 00:02:59.11\] that works with us, that is about to move to their services. Kelly - you know his service, \[unintelligible 00:03:04.11\] He's been using Linode, and I think one thing that was pretty enticing about DigitalOcean for him was the fact they have private IPs now, so he was like "Oh, that's nice." Plus it's on SSD, so it's super-fast, too...

**Andrew Thorp:** He likes Linode, but I think that he always kind of knew that it was good to get started with, and he was gonna have to migrate eventually, so... He's on DigitalOcean and he loves it; it's a pretty good move.

**Adam Stacoviak:** Yeah. DigitalOcean - one thing I've heard about it is it's just fast, because it's SSD... But anyways, let's get this show --

**Sid Sijbrandij:** It's really neat. We use it, too. GitLab is hosted partly on another provider, but all the new servers are on DigitalOcean. We're really happy with them.

**Adam Stacoviak:** Is that right? Nice.

**Sid Sijbrandij:** And it's neat that they're sponsoring the show too, of course.

**Andrew Thorp:** Double sponsor.

**Adam Stacoviak:** Yeah, double. I mean --

**Sid Sijbrandij:** Double sponsor -- well, we don't get a discount, I guess, but it's an amazing price for the value anyway, so...

**Adam Stacoviak:** Oh, yeah. And the five bucks, they basic plan -- we get ten bucks off, so it's basically two months free; the easy way to say that. That's a super-extended promo for DigitalOcean, but we certainly appreciate the support to the show. That's cool that you guys are using them, too. But let's kick off the show. Andrew, do you wanna take the lead, my friend?

**Andrew Thorp:** \[04:19\] Yeah, so Sytse, why don't you go ahead and give us -- so we mentioned it before, but we had a little sponsor, so... You're with GitLab, so why don't you give us kind of an intro. The history -- or why don't you start with what GitLab is? Why don't we go there?

**Sid Sijbrandij:** GitLab is a code and project management system. So you manage your Git repositories in there, there's an issue tracker, there's a Wiki system, you can manage users and all kinds of permissions... And the whole goal is to collaborate with software developers, to do code reviews, to communicate stuff, and to work together more efficiently, and to do a continuous delivery of your software, supported by this management in GitLab. Does that make sense?

**Andrew Thorp:** It does. And obviously, for anyone that's listening that is familiar with it - I'm sure you have to answer the question with how you guys related to GitHub and other providers, BitBucket and those guys. We'll get into that a little bit later in the show, but... Basically, GitLab is -- do you only support Git, or do you support other version control systems, too?

**Sid Sijbrandij:** No, we're Git only. Obviously, some people using with SVN things, but there's no support in GitLab for that.

**Andrew Thorp:** Gotcha. Why don't you go ahead and give us a little bit of a history? I think you guys are starting to gain some real traction, but you've been around for quite a while. You're definitley not a brand new service; there's some history behind you guys... So why don't you give us a little peek into that?

**Sid Sijbrandij:** Sure. GitLab was created in September 2011, by Dmytro Zaporozhets and Valery Sizov. Dmytro continued with the project and is still the lead author, and he's a co-founder of me. A year after Dmytro made the project, I started gitlab.com to also offer commercial services around GitLab. But then GitLab was already out for a year, and it already gained so much traction, mostly from people who want to run their own hosting service; on-premises, within their company/organization, they want to be in control of their own repos, and access, and backups, and GitLab enables them to do so.

A big step in the development of GitLab, in my view, was version 5.0, when we got rid of all the dependencies on Gitolite, which is an awesome piece of software, but it allowed GitLab to scale a lot better and to support many thousands of users in one installation. And it's been open source the whole time, it's MIT-licensed, and we've got an awesome community around, contributing and helping people out.

**Adam Stacoviak:** I guess you mentioned being 5.0 is the last milestone you said was kind of a shift for you, but you recently celebrated 6.0. I think that was about like a week or two back, a week-and-a-half back...

**Sid Sijbrandij:** Yeah, it came out on the 22nd of the previous month. Since 2011, it's always come out on that date, so you can expect a new major or minor release on the 22nd of each month. So that's something the whole community is always looking forward to. 6.0 was also a major release. We added lots of awesome features; most importantly, the ability to combine groups of people and groups of projects.

\[08:14\] You can now have a group where you have a couple of developers in, and then if you add projects to that group, all the developers get their authorizations on the project automatically, and vice-versa. And this makes managing bigger enterprise installations a lot easier. But also for smaller companies, like 50 people, or 20 people, or 5 people, it's nice to be able to group projects and access; and of course, there were many other changes and improvements as well. But this was the biggest one in the 6.0 release.

**Andrew Thorp:** So the enterprise edition is new in the 6.0 release, is that right?

**Sid Sijbrandij:** Yes. We also introduced an enterprise version. The difference from the community edition is that it has support for LDAP groups. So normal GitLab can sync to your company LDAP server for permissions and authorizations, but this can also sync with your LDAP groups, so every who's in your company LDAPs are also gonna gain access to a certain group in GitLab. It's more a feature for bigger organizations, with more than 50 users, and this version is only available to subscribers of gitlab.com. So that's our business model. We make two books a month for every user that is using the enterprise edition. With that we've become a sustainable company, and we were really glad it was positively received in the community. We're trying to build on that, to grow as a company and do even more improvements to GitLab.

**Adam Stacoviak:** GitLab though - I wanted to make this point, because the enterprise edition though is only available to subscribers of gitlab.com though, right? So you've got the community edition, which you've mentioned is open source, and GitLab Enterprise Edition is subscriber-based. Is that right?

**Sid Sijbrandij:** Exactly.

**Adam Stacoviak:** Okay.

**Andrew Thorp:** And you announced 6.0 in August 22nd, and since then you've had a few weeks now... You kind of said that the reception has been pretty good with the enterprise edition, but what does that mean? How has the reception been, specifically?

**Sid Sijbrandij:** We've got a major increase in the number of subscribers... People who wanted the new features, but also people who saw we were really serious about it and that it's becoming a sustainable company. There were already lots of organizations using GitLab, over 25,000 is our estimate, and now all kinds of organizations came to us and said, "Okay, we'd like the enterprise version, or we'd like the support." We didn't have multiple companies signing up every day before, and now we have that.

It was starting to gain major traction around the release -- some of the features in 6.0 were made in discussions with some major enterprises, and we now have three Fortune 100 companies being paying customers of gitlab.com. So that was a major milestone for us, signing up these big companies and working with them to make GitLab even better.

**Andrew Thorp:** You kind of alluded in a conversation we had that there was quite a bit of discussion that actually went around the licensing of the enterprise edition...

**Sid Sijbrandij:** \[12:08\] Yes. Obviously, making two versions is a major step, and you can do it the wrong way or the right way. Obviously, what Oracle is doing to MySQL is not the way you want to do it... And we thought the best thing would be just to talk to our community about it, our plans for it and how we were gonna do it. So on gitlab.org, about a month before the release, we said "Okay, these are our plans, and this is how we're gonna do it", and then all the hard questions came, about how you're gonna license it... That was the main point.

Obviously, we were thinking about a commercial license. All the extra code would be commercial code, and you couldn't copy it etc. Some of the people in the community said "Why don't you just put your faith in the community and just make it open source? That's what we all believe in, and people are gonna be okay. The GitLab community is pretty awesome, and nobody's gonna be mean and redistribute it. Why should they? If we're being a good member of the community, we can expect the rest of the community to be cool."

That was a pretty convincing argument, so we MIT-licensed the enterprise edition, which I think is pretty unusual for enterprise software. You see it sometimes in smaller plugins and everything, but this is a bit of an experiment, and so far it's gone really well. A very positive response to it, so I'm proud that together with the community we could do this. You saw it when we released 6.0 that everybody was happy about it, how we approached it, and the end result. So we're feeling really good about the discussion we had, especially with a user called Bean, in the pre-announcement.

**Adam Stacoviak:** Let me ask a question here, because I was reading some of the comments on your 6.0 release, and then the link out to your enterprise edition - and Andrew, this kind of keys off of something we asked Mike Perham when he was on, about Sidekiq and Sidekiq Pro... And the question that I'm gonna ask is basically from one of the comments here... If the community develops your EE LDAP groups feature and they wanna push that into this EE edition... I think you eventually had a response too, but it was pretty much just "It would be appreciated." So what is your official stance on -- it seemed like there was some sort of divide there between the editions, even though your greatest one offered it as MIT.

**Sid Sijbrandij:** Yeah. Obviously, that's a hard question to answer. So what happens is somebody contributes a feature to the community edition that is already in the enterprise edition - would we merge that? I think the first question we're gonna ask ourselves is why do people want this. Because we promised that any features we put in only the enterprise edition would be features that would be mainly useful for larger organizations. And the fact that someone is contributing it to the community edition kind of indicates that maybe we're wrong; maybe this feature is really useful for smaller organizations, because we have pretty affordable pricing. So if you're in a larger organization, you should have no trouble convincing the management of actually purchasing a subscription.

So why is this happening, that would be the first question. And we might be mistaken. We might think about a feature that's only for large ones, but it's also good for smaller organizations. In that case we're wrong, and we'll just merge that enterprise code into the community edition.

\[16:13\] If that's not the case, I think what would be important is the seriousness. Some of these features are non-trivial to make. Is the code that is contributed of a high quality? Did someone take it really serious to try to add this feature? Or is it just like "Hey, I saw that this feature is missing and I tried to whip something up, but it's not that functional." So if someone is serious, that makes it more likely that we'll include it. Obviously, if the code was directly \[unintelligible 00:16:49.28\] from the enterprise edition, that would be legal, but that would not be very cool...

**Adam Stacoviak:** Yeah... \[laughs\] It seems like one of your interests that I was reading through is that some features can be bottled up into -- because somebody suggested a plugin system, and making it where these enterprise features could be bottled up in plugins, and added on through some sort of subscription that you've already mentioned... But that some of them are just kind of bigger interfaces to the application, and it's just not easy to bottle up into a plugin.

**Sid Sijbrandij:** Yeah, we have services, we call them, but they kind of function live plugins, so we might have some enterprise things that we'll be able to package as a service. That would be neat. I like what, for example, Vagrant is doing in this regard, where their VMware plugin is paid, and the rest of Vagrant is open source. But some of these features we would have to build a whole special interface into the community edition just to build on top of that. And what we don't wanna end up is with a worse community edition because we wanna build on top. That shouldn't be the goal. So it's not always feasible to abstract something as a plugin; so we'll do it if it's easy, but we're not gonna complicate the codebase too much. With Git it's very easy to just keep two separate versions in existence, so we'd rather do that than build all kinds of extra non-functional stuff that everyone has to maintain.

**Andrew Thorp:** Speaking about the codebase - and again, I wanna get into this a little bit, but... I'm sure you answer this question a lot, or you have conversations about this a lot, but GitLab itself is hosted on GitHub... So why don't you give a little bit of a insight into that decision, and if that's gonna be a long-term solution or if you eventually would move GitLab over to GitLab? Or whatever you would say to that.

**Sid Sijbrandij:** Yeah, we're trying to be really pragmatic about everything... So pragmatic that sometimes it hurts. So if it's about making something an awesome new feature that people can use, or building something just to serve our pride, then we build an awesome feature that people can use.

So the thing is we haven't gotten around to making public repositories. On a GitLab server, everything is private. And for most people running a GitLab server, this is why they're running GitLab, because they want unlimited private repositories. So most of the people are really happy with that. We're not against public repositories, so we're accepting merge requests for that, but it would be a big change, with all kinds of problems; you no longer have a current user, so lots of code needs to be adapted, and we wanna do it in the right way, so that all the security tests and everything - it doesn't become brittle. So we haven't gotten around to it.

\[20:12\] If somebody contributes really good code, we'll merge it. If there's a customer that really insists on it, we'll do it. But so far, everyone's really happy with the private stuff. But I think it's a question of time, because there are people right now building Fedora packages, people building Debian packages, there's discussion on the Drupal mailing list about using GitLab... So the pressure is on to start supporting public repos. I think it's a question of time, but we're trying to be pragmatic about that. Does that make sense?

**Andrew Thorp:** Yeah. So basically, right now, just to summarize and make sure I understand this correctly - right now just because GitLab is itself open source and maybe gitlab.com the cloud is not the best solution for an open source project right now, because there are no public repositories. But eventually, if that happens, you would consider moving GitLab itself into GitLab to be hosted there...?

**Sid Sijbrandij:** Yeah, exactly. And we might have open public repositories even before we move. So we're just gonna stay where the people are, and right now GitHub is where the contributors are. So we're not gonna force anything on anyone just to be more proud. Our pride is in building something that people can use and that's stable and that's affordable and that's open and free. That's our pride. And if we have to host somewhere else that's really fit for the purpose, then that's okay.

**Andrew Thorp:** Yeah. And that's a really cool attitude, I think. You speak about the pride thing, and I think that's something that in open source a lot of times takes over, in some projects, not all; thankfully, not most, but there are some projects that - it seems like the maintainers of the project are very proud, and it's their way, it's what they wanna do, not what the community wants... And that's kind of anti-open source. So it's really cool to see that at a company level you guys are all saying "It's not about our pride, it's about delivering what people want." I think that's really cool.

Have you received any attention from GitHub itself, the company, or any of the team members about this?

**Sid Sijbrandij:** No, we haven't.

**Andrew Thorp:** I think that maybe it's a matter of time before you would hear something, as you guys continue to grow. I mean, you guys are getting very big; over 10,000 stars on GitHub, so the scope of this project seems to be exploding, and it's real fun to watch it.

**Sid Sijbrandij:** I'm sure they are aware of us.

**Andrew Thorp:** Yeah, definitely.

**Adam Stacoviak:** I was just gonna point out their URL... So while the listeners are listening, you can maybe go hang out there. It's github.com/GitLabhq.

**Andrew Thorp:** Yeah. And there's lots of stuff. GitLab, a lot of -- you guys contribute back to the open source community a lot, in areas other than just on GitLab, and that's cool. So what other projects have you guys contributed back to the community, besides just gitlab.com?

**Sid Sijbrandij:** Besides the GitLab thing, the other main project is GitLab CI. It's a very basic continuous integration server. I think the cool thing about it is that it's really user-friendly, so it's very easy to set up your projects. You don't have to set up new user accounts or new permissions; it communicates with GitLab over the API, and it gets your existing projects, and you can set up a new project in under a minute.

\[24:04\] The other thing that's really cool about it is that it's distributed by nature. So your tests do not run on the CI server; they can run somewhere else. And this is the default setup. So what we commonly see with people - they set up a CI server, but the tests run on the server; so any project that runs on the server can access the whole CI server, and that's a bit of a security concern. And also, maintenance and everything is complicated. GitLab CI is distributed by nature, and I think that's really cool. If you wanna know more, you should check out the GitLab CI architecture blog post.

**Andrew Thorp:** Awesome. So to go back - I read an article from one of the founders of GitHub about Grit, I don't remember if it was Tom, but one of them was talking about how they just were in a bar one night, sat down, decided to start writing the Git bindings from Ruby, and so Grit came about. You guys have written a wrapper around that called GitLab \[unintelligible 00:25:11.15\] Can you elaborate on what that is, and why you decided to do that, and how you chose to use that architecture?

**Sid Sijbrandij:** I think it's a pretty minimal wrapper. It's because the Grit project is a bit -- well, there are lots of pull requests waiting to be merged in the Grit project, and I think that's why we have our own fork of the project.

The thing that we built on that \[unintelligible 00:25:47.29\] maybe that goes a bit too far now... But it's more of a fork with some additional fixes and things that we \[unintelligible 00:25:57.22\] replacement. So yeah, we're really grateful for the Grit project that was contributed by GitHub.

**Adam Stacoviak:** Yeah, just to add some numbers to the mix here for those listening... I'm assuming this is the canonical repo, which is Tom Preston-Werner's username on GitHub, which is @mojombo, right?

**Sid Sijbrandij:** Yeah.

**Adam Stacoviak:** /grit. And there's 63 pull requests waiting to be merged. Without throwing stones, what do you think is the reason for so many pull requests waiting? Is it just that they're opinionated and maybe these pull requests don't really represent where they wanna take Grit?

**Sid Sijbrandij:** I'm not sure. You'd have to ask him.

**Andrew Thorp:** It's a hard question to answer. The oldest pull request is from three years ago. So you would think that some kind of action would have happened on that pull request by now... But you know, they've got their reasons and why things are happening--

**Adam Stacoviak:** Yeah, I'm not trying to throw stones, I'm just trying to see -- because you said one of the reasons why you did GitLab \[unintelligible 00:27:00.22\] because of those being stacked up, and obviously, you had some motivation and inertia of where you wanted to take it, so some vision for what Grit could be, so you had to essentially \[unintelligible 00:27:12.15\] and wrap around it and do some other things in addition to it... So it sounds like -- you know, you can't wait for other community members to move if you're trying to move ahead of where they're at.

**Sid Sijbrandij:** Yeah. And at the same time, we know how hard open source is, and keeping up with the issue tracker is really hard; and you cannot expect the same people who write software to always keep maintaining it and investigating everything. And our GitLab Grit is mostly for stuff we need, so we're not trying to be a better project, or something like that. We're just trying to merge in stuff that we need.

**Adam Stacoviak:** Yeah, solve your own problems.

**Sid Sijbrandij:** \[27:57\] Yeah, solve our own problems.

**Adam Stacoviak:** I think the point I was trying to make was like what's the -- is it solving your own problems, or is it... I don't know, just an easy question to answer.

**Sid Sijbrandij:** Yes, it's solving our own problems... And I think one thing infrastructure-wise that we did try to contribute, that has some pretty unique functionality, is GitLab Shell. It uses the GitLab API, so it's a bit specific, but it's code that allows you to host an SSH session and to have people download the code and clone the code and push the code. So basically, what Gitolite is doing with Perl, this is doing with Ruby code, in a nutshell. And I think that's a pretty neat piece of work, and it might be a good reference for other people trying to do this.

**Andrew Thorp:** So Gitolite is what you guys were using, and that's what you said you replaced at GitLab 5.0, and that was with GitLab Shell? Is that right?

**Sid Sijbrandij:** Yes, exactly.

**Andrew Thorp:** Okay. Awesome. Well, you kind of talked about this a little bit and I wanted to maybe shift gears a little bit... One of the things that we've hit on a little bit now is -- man, I've said "a little bit" quite a few in those sentences...

**Adam Stacoviak:** A little bit...

**Andrew Thorp:** A little bit little bit... One of the things that we've talked about a small amount in the last couple minutes is building a commercial company around open source... And you'd just mentioned something about issue trackers and how they can be hard to keep up with as one core maintainer... So at GitLab you guys have a specific team of two people dedicated to the issues... Is that right? Can you talk about that?

**Sid Sijbrandij:** Yeah, they're two people, but they're not part of gitlab.com, they're part of the community. So I wanna shout out to Ben Bodenmiller and Robert Schilling. They're doing an awesome job on keeping the issue tracker as clean as possible, so trying to help people there, trying to close duplicate questions; they're doing that in their spare time, and we really appreciate it. It's one of the most important things in open source. We're really grateful if people step in to help out on the issue tracker.

**Andrew Thorp:** And I think that comes from a mindset of - and you guys have it - which is when you're very open to the community and what the community desires. I think your specific community that comes up around you is open at giving back. And I think with Ben and Robert, that are obviously committing -- I mean, the one thing that you can't buy more of is time; you've heard that before. So they're taking more of their time from whatever their regular jobs are, to commit back to GitLab. And that's something that you get from a mindset of being open to the community.

When you're truly open to what the community wants and willing to kind of shift in the direction that the community wants to take you, I think you can gain a lot of the joys of the community. Would you agree with that?

**Sid Sijbrandij:** Yeah, but I think the community is doing a way better job than we are. I'd like to hang out a lot more on the campfire rooms and everything, to help the community. We're not doing as good of a job as we could doing that. We had some help from \[unintelligible 00:31:24.15\] who is also working on the Rails core; he helped us set up campfire rooms and helped coach some people to become better contributors and better issue team maintainers. So yeah, we just have awesome people in the community. It's not because of us, but because of the community that it's going so well.

**Andrew Thorp:** Yeah. So what's it like building a commercial -- you said that you've recently become sustainable. Is that right?

**Sid Sijbrandij:** Yeah. With the introduction of GitLab Enterprise Edition we've become a sustainable company. Before that we took on consulting assignments to make ends meet.

**Andrew Thorp:** \[32:19\] And you're gonna be working full-time at the end of the month on GitLab, is that right?

**Sid Sijbrandij:** Yes. I'm finishing up the last consulting work and I can't wait to start working full-time.

**Adam Stacoviak:** I think it's an important point to camp out on for -- I know we talked a little bit about some comments. We heard back from those on the announcement of GitLab 6.0, and then also the enterprise edition, just like asking questions of why fork it, or why have this divide, or why have these separate options... And I think - maybe you can say this on your own, but I think generally speaking, to be sustainable, at some point you have to be able to sustain yourself through money, and not do additional consulting, and focus fully on GitLab. That seems to the be answer to the question, which is that's why you've done it, to be sustainable.

**Sid Sijbrandij:** Yeah, we've done it to be sustainable, and because we saw there was a lot of demand for features that only larger companies would use. We had already for half a year -- gitlab.com hired Dmytro as a co-founder to work on GitLab full-time, and he's working on all these awesome features. But yeah, the money has to come from somewhere, and we need to -- having a paid product is a great way to make ends meet. There are also other things, like donations; we did that as well, and we're really happy with all the people who donated. We also had a software-as-a-service product, so for some people that might be the best way to generate income. But we thought this was the best way for gitlab.com.

**Andrew Thorp:** Yeah. Something we talk about a lot on the show, because - you know, unfortunately, if you get a pizza delivered to your house, you can't pay it with contributions, right? You have to have money...

**Adam Stacoviak:** \[laughs\] Good one.

**Andrew Thorp:** ...to pay bills. So we talk about --

**Sid Sijbrandij:** Well, let me respond to that. Dmytro called it "ice cream money" when he started. But we had some very, very generous contributions come in. We had companies donate $1,000, $600... Pretty big amounts. So it's not that a community is not willing to pay up.

**Andrew Thorp:** When I say "contributions", I mean like to the code itself. Like commits.

**Sid Sijbrandij:** Oh yeah, sure. I was confusing it with donations.

**Andrew Thorp:** No, no, no. Well, that's the point; you can't pay your bills with code, right? You have to somehow make money, whether it's through donations, or some sort of a business model, or something. We talk about a lot on the show, different business models that people have. This is one -- I don't know, I mean, maybe I'm just making this up; I have nothing to back this, but it seems like this type of a business model, where you have your open source product and then you kind of extend it for an enterprise edition, or a paid version, or something like that - this is kind of growing in popularity. And it seems that this model was growing in popularity specifically when your target customer is a developer. Because I think developers understand that this stuff isn't free, that the people that are doing this still have lives, they have families, and bills, and all this and that... So I think that it's a model that \[unintelligible 00:35:50.22\] to be successful because -- you know, myself, I'm more than willing to give money to a project that I rely on to get my job done, because I know that this guy has to do his job, and the only way he can keep going is if he makes money. And if he can't keep going, then I don't have his project anymore to work with. Does that make sense?

**Adam Stacoviak:** \[36:12\] Yeah, absolutely.

**Sid Sijbrandij:** Yeah, totally. And what also comes into play is that many times the benefactor of the open source project is a company, and in a company it's really normal to pay for software; it's not so normal to do a donation. So for a lot of people who wanted to donate, it was much easier if we just said it was for software. But we can only do that if it really is for software. So that's also why it's good to have a commercial offering.

**Andrew Thorp:** So let me ask you this... So GitLab itself is open source, and you guys are kind of reaching out to companies to start using this... Have you gotten any flak from companies that are maybe a little more old-fashioned, that aren't comfortable with the fact that your software is open source?

**Sid Sijbrandij:** No, we haven't... But maybe that's because we're not reaching out that much. I think the whole community around GitLab is doing the promotion, and we have enthusiasts and champions within companies that started using GitLab, and saw it as a great fit for their organization. And they reach out to us. Maybe when we become more active in doing outbound sales, we get that reaction. But most people are really comfortable with open source... And yeah, people see, I think, the benefit of having more eyes on the product. And maybe they like that there's a commercial company that has a lead developer that is inspecting every last line of code that comes into the project. Maybe that helps. But we haven't had any negative reactions to GitLab being open source.

**Andrew Thorp:** Again, the clients are coming to you -- you mentioned to me that GitLab is actually looking to hire, and some of the roles you're looking to hire for are support and sales... So you said this already, but you could see that happening a little bit if you're starting to reach out and do outbound sales... What is your response to that, if that starts to happen? If somebody says "I like what you guys are doing, I like that it's all private, but I don't like that the code itself is open source." Do you say they're not a good fit for you, or how would you handle that?

**Sid Sijbrandij:** I would ask why they say that, what is their concern. Are they concerned about security, or about copyrights, or what is their concern? About people inserting backdoors... And all these questions have different answers. And I think they all have a good answer. But yeah, it will be about a specific concern. Do you want me to go into the concerns?

**Andrew Thorp:** No, I just wonder if you guys have put any thought into that as a company. And the only reason I bring it up is because you say you are looking to hire sales, which I think is unique. I think that companies that are open source with an enterprise edition don't often do much outbound selling. I think that's a unique thing that you guys are gonna do, so I wonder if you guys have had those conversations at all, or if those questions come up. If you hire a salesperson, are you gonna wanna train that salesperson on these questions, and stuff like that?

**Sid Sijbrandij:** Yeah, I think we'll see what we get for questions, and then we'll start answering them and making notes. I think the sales vacancy we have at the moment is gonna be inbound. So just keeping up with all the requests that are coming in, and making sure that people have all the information, and following up on all the questions they asked, and all the wishes they have. So we're hiring for that. And we're hiring for support, making sure that you help people with their environments, setting everything up, making sure the backups are okay, and doing high-availability configurations.

\[40:02\] So right now we're hiring for that. Outbound sales - that's still in the future; we have trouble keeping up with the growth we're currently having, so... Although I'd like to do even more sales, let's first -- we're still doing a great job at servicing our customers, but we need to hire in the very near future, so if you're interested, please let us know, because we need you to grow further and keep doing a good job.

**Adam Stacoviak:** So on that note then, what are some of the biggest challenges you face then? So if you -- is it manpower? We've just talked about you becoming sustainable with the enterprise edition... What is the biggest challenge you face right now?

**Sid Sijbrandij:** Yeah, good people are always the challenge. And I think we've been able to hire some amazing people because they like being in open source. But for example, getting a person that wants to do inbound sales and is enthusiastic about that - they are not the people who come into contact with open source projects. So I think that maybe we should do some more marketing and PR in non-developer channels.

**Andrew Thorp:** Some outbound sales, to get some inbound sales people... \[laughter\]

**Sid Sijbrandij:** Yes. But yeah, it's a very positive problem to have, so that's okay. Soyeah, so far - no major problem. Just keeping up with all the extra demands after we announced the enterprise edition. That's right now the focus for the next few weeks.

**Andrew Thorp:** Yeah. So you can look at GitLab's jobs at gitlab.com/jobs. Let's shift from where we're at now with GitLab to what we can expect coming up. I know that you said that you guys don't have a big roadmap, so we'll talk about that in a second... But specifically for 6.1, what is gonna come out with this release?

**Sid Sijbrandij:** We have three big features coming out. The first thing is issue referencing. So when you commit in Git, you can write a commit message, and you can say something like "Fixes \#27", which means "fixes my issue \#27." And all these kinds of comments and links are all detected by GitLab and the appropriate comments are closed. We normally work with feature branches, which means that if you're gonna solve a ticket, you're gonna make a new feature branch for it, and then when you accept this feature branch, there's a big, nice, green button that says "Accept", and then right on top of that it will say "Well, this will fix issue this, and this, and that." And it got that from the commit message you did earlier. Fancy stuff like that is now possible.

The other thing that was a popular demand - we call them \[unintelligible 00:42:58.20\] which means that as an administrator you can do API calls, and you can do them as another user.

**Andrew Thorp:** Oh, gotcha.

**Sid Sijbrandij:** For example, if you need to comment or move someone's project, you can do it as that user, so that you don't have any weird users showing up in the history of stuff.

The third major thing is project-specific IDs. Now, if you open an issue from a project, it gets a global ID. So suppose on your entire GitLab installation you have 100 issues - it gets number 101, while on the project you just had 10 issues. So it's not really logical that it's then number 101, when you have only 10 issues.

**Andrew Thorp:** Oh, gotcha.

**Sid Sijbrandij:** So we're gonna fix that and make sure you have project-specific IDs and merge request IDs.

**Andrew Thorp:** So every project starts at issue 1.

**Sid Sijbrandij:** Exactly.

**Andrew Thorp:** \[43:58\] Gotcha. Awesome. So that's coming out for 6.1. I think it's interesting that you guys have no -- when we talked, you kept talking about "We have no roadmap. We have no big, audacious goal, or no big private plan of where we're going." So that kind of means that your sight and your vision is very close to what you're working on right now. Why don't you talk about that -- I don't know if that was a decision, or if you guys just naturally, organically grew into that... But why don't you guys have some big roadmap? Why don't you have a long-term plan?

**Sid Sijbrandij:** We used to have this roadmap file in the repo, but it wasn't maintained any longer, so we deprecated it... And we've found that normally, when a release is almost done - most of the time it's a few days before the 22nd - Dmytro kind of knows what he wants to work on, the community knows what they wanna work on... But you just figure it out right there and then. So you're done, the stress is gone, and you think "Oh, I'd like to work on this or that." Or "I heard so many people complain about this or that." And these things - you cannot predict them two weeks or a month in advance. Sometimes you can, but sometimes you can't. And we wanna be working on the things that inspire us and that are important to the community and to the clients of gitlab.com. So why work on something less important, just because you said so a month ago? We don't wanna end up in that situation.

I think David Heinemeier Hansson said it very eloquently when he said "Inspiration is perishable." If you're inspired by something, just go work on that. And we tried to keep that alive.

**Adam Stacoviak:** That's true, because you hit that moment whenever you -- I mean, especially as ingrained in the community as you're trying to be, considering you're so grassroots in your efforts... You can't operate off of a roadmap if the inspiration comes from -- like this conversation we're having today. You might be inspired by something we suggest, or a part of the conversation that reminds you of something - you're not gonna wanna wait two months to go and work on that. You're gonna want to take care of it at that moment, because it'll perish.

**Sid Sijbrandij:** Exactly. And if it's important, it will come back. And last but not least, many new awesome features such as the \[unintelligible 00:46:22.18\] API calls - they're contributed by people. So we couldn't have predicted that. That comes up, and at a certain point they're ready, and we can merge them, and then they're in the next release. So it's useless to try to predict a community. We just have to go with their flow.

**Andrew Thorp:** Yeah, I think that this is something -- and this is something that I think about a lot... Working as a deeper full-time, it's incredibly -- I don't know the right word, but stressful to think about long-term... You know, like in six months we're gonna wanna do this feature. To me, when we start - and Adam knows; I think he could probably laugh, because he actually, when he starts talking about features that are more than today's work, he says "Andrew's gonna kill me for bringing this up..." But it's funny, because I think as developers we do like to be inspired and work on what is current and what is currently important. It's like, "I wanna know what I'm working on right now, so I can -- you know, my thoughts and my brain cycles are not unlimited, and I wanna be able to devote it to what's important." And when I have to spend a ton of time thinking about "Does this match the roadmap? Does this match the six-month plan?", that's just overwhelming. It's stressful, and I don't think it really -- how often do companies actually stick to their roadmap?

So when you have the open source community that's very active with your project, I feel like a roadmap would lock you into something that maybe wouldn't be the best idea.

**Sid Sijbrandij:** \[48:02\] Or the energy you spend on the roadmap - it's wasted. So before feature branches, you'd have people at companies who were called release managers. Most companies still have them. If you do a software-as-a-service product, you don't need a release manager. You can do continuous delivery and you can just deliver the features as they are completed. There's no need to do a release, there's no need for GitFlow. Please use feature branches and just release what's ready. And the release manager can do something else, and be productive, and no one has to stress out or fight about which features get in which release, which is not adding anything. So yeah, I feel really strongly about this, as you maybe noticed, and I'm really glad that we're able to practice what we preach.

**Andrew Thorp:** What were you gonna say, Adam?

**Adam Stacoviak:** I was just gonna say on the idea of roadmaps... Something that I heard from somebody pretty respected - actually, from 37signals... A while back I had Ryan Singer on a different show I hosted for a while called \[unintelligible 00:49:10.12\] and it clicked when he had mentioned this idea -- because he's a product manager at 37signals; so he tries to know where they might wanna go, but he doesn't let that impact how he works today. And I kind of lament on how he said it, and its trajectory... Like, knowing where you wanna end up potentially, but being able to kind of deviate along the path, along the way, based on this perishable resource called inspiration, or feedback from the community, or whatever... But you kind of have an idea where you wanna go; it's not exactly a roadmap, it's an idea of where you might wanna be. I kind of think of it like that.

**Andrew Thorp:** Well, yeah, if GitLab for instance -- GitLab's not gonna switch from doing version control hosting to playing music, right? There's no roadmap; they know in a year -- there's some things that they know. They still wanna be a company, so that's a given. They want to still be doing Git... But what they don't know is -- you know, what if the community comes up and starts saying "We really, really want support for X", whatever that feature is. That feature could be a huge thing, a small thing, whatever, but as long as they have the mindset that they're being flexible and they're willing to go in that direction, then that could drastically change the roadmap, right? So if there was a roadmap, it could be altered greatly, if you have a flexible mindset.

I think that's what's scary if you are roadmap-driven and you're not willing to move drastically away from that roadmap. I guess there's two extremes... You could be kind of chasing every little rabbit trail of every little potential feature, but when you think of it that way, those rabbit trails tend to be bigger features.

**Adam Stacoviak:** Yeah.

**Andrew Thorp:** You have your core product, and your core product - it doesn't change that much. It can change in the feature set, but... As long as you're not chasing down core rabbit trails, where your core changes drastically, I don't think you want that roadmap. I don't think you want to know where you wanna be at. Maybe where you would like to be at business-wise, but to sit down and say -- I mean, I think that we all can understand and all can admit that if you try and sit down and talk about features and where you want your feature set to be in 12 month, that you're not going to accurately estimate or predict what's gonna happen.

**Adam Stacoviak:** That's exactly what I was gonna say; you're not gonna accurately depict the future like that. It's gonna be a rough estimate... Yeah, I'm totally with you on that one, for sure.

**Andrew Thorp:** Yeah. And then I think the problem is a lot of companies invest a lot of time trying to figure out how they can accurately predict 12 months down the road, and it's like --

**Adam Stacoviak:** Why...? \[laughs\]

**Andrew Thorp:** \[51:57\] ...the sooner that you can embrace the fact that you can't predict 12 months down the road, the more that you can realize that you're wasting time and money on trying, and you can invest that time and money into what's happening right now... And that's important.

**Sid Sijbrandij:** Yeah, I totally agree. And great quote of Ryan, as a product manager. I think what you're trying to do if you're making a roadmap - you're drawing roads on a piece of paper that doesn't have a map; it doesn't list the terrain you're in. So you're drawing this path you will take, but you're not taking into account the train. Because the terrain - it's hard to see how much effort stuff will be, or what's important, or what's the weather gonna be.

So you don't wanna draw exactly which path you'll take; you need the direction, like we're going North-East, because that's our goal. Then you'll figure out how to get there, and which streams to cross, and which route to take along the way. And you know your direction, and we also know our direction. We wanna polish GitLab CI a bit more, because right now it's a bit rough around the edges. We wanna package GitLab better, because right now you have to install it by hand. We have a really good installation manual, but still, if we make it easier to install, then more people would install it, which would be awesome. So these are things you know, "Okay, this is the direction we wanna go." But we'll see how we get there and what tomorrow brings, and we'll just look up, look around and see what pull requests are coming in from people.

**Andrew Thorp:** Gotcha. So what's on the roadmap for --

**Adam Stacoviak:** \[laughs\] Nice one.

**Andrew Thorp:** It's cool. I think that's a -- man, it's almost like you could do a whole other talk... Not even just talk, a whole other show about -- I don't know if "procedure" is the right word, but you know, what's the solution. You talked about knowing the direction you wanna head... Well, how do you know the direction you wanna head -- how can you accurately talk about a direction without talking about goals? I think there's something there, and whoever can figure it out and bottle it up, I think you'll become a bagillionaire on figuring that out, because there's obviously been companies that have been -- I mean, that's what release managers do, that's what these people do...

So there have been companies that have been investing tons of money and time into trying to be able to figure this out... And I think if you can figure it out, and figure out -- it's not just figure out what I wanna do in 12 months, but it's figure out "How can I get us going in a direction, and maintain the mindset that we're gonna be flexible, but at the same time I don't want to jump ship on this value, because it hasn't panned out in the first two weeks, so I need to give it its due diligence?" So if you can figure all that out, then more power to you... Bottle it up and sell it, and then hire me at your company to just collect the paycheck.

**Adam Stacoviak:** Hah!

**Sid Sijbrandij:** Yeah, it's really -- good product managers are really valuable. I think at GitLab we just talk, within the company, but also with the community, and we just see where we're going, and we're driven by Dmytro's dream to give awesome tools to developers, and I think that the mission is a bit expanding into just collaboration in general. I think Git is an awesome tool to collaborate and to be flexible.

People used to send an email with an attachment, and then you added something and you sent it back, and they'd sent it to three other people, and now they have a problem. These things are going away, and version management is gonna solve it, but it's really hard to do it in a user-friendly way, and there's a whole wide open space about working together on code, but also on technical documents, legal documents...

**Andrew Thorp:** Just documents, yeah.

**Sid Sijbrandij:** \[56:08\] ...everything that's digital will be version-controlled. People are starting to figure that out. I think it will be as important as web servers, these collaboration servers. And I think there should be a really good, free one, that everyone can use in freedom. That's how I see GitLab. Dmytro might say something else, and we have to figure that out as we go along, and listen to our users, and to the people in the community.

**Andrew Thorp:** Yeah. So it's been two years and you guys are at 6.0... Would you say that you put out another major release, you bump the version in a major number every four months or so? Has that proven to be pretty accurate?

**Sid Sijbrandij:** Yeah, that's pretty accurate.

**Andrew Thorp:** Cool. So we can expect to see 7.0 coming out the next three months or so. That's exciting.

**Adam Stacoviak:** Christmas.

**Sid Sijbrandij:** \[laughs\]

**Andrew Thorp:** Yeah, it'll be a Christmas present, huh?

**Sid Sijbrandij:** That would be nice, yeah.

**Andrew Thorp:** Alright, so I think that we could -- there's plenty more we could talk about, but we do try and keep the show under an hour, or to an hour, and I think we're about reaching that point now... We ask our guests the same questions at the end of every show, so I'll go ahead and ask you now, Sytse... I didn't prep you, so don't kill me if we're putting you on the spot with these... But our first question is -- and I'm drawing a blank on what the question is...

**Adam Stacoviak:** Call to arms!

**Andrew Thorp:** Call to arms, yeah. So the first question - for the community, you guys obviously have a very active community, so I'm not sure that there's anything specific... But what would be something that you would like to see the community rally around and work on? Or an even better way to put it is is there a specific feature that you think is missing from GitLab that you would like to see somebody get involved with?

**Sid Sijbrandij:** Well, if I had to do a call to arms, I'd say help people out using GitLab. There are IRC channels, there's an issue tracker, there's a mailing list, and people are asking loads of questions, trying to figure out a problem, trying to see how they have to configure something... If you wanna help GitLab, please help out these people.

The community is doing an awesome job helping these people, but there is a lot of room for further improvement. There's room for better answers. So yeah, just pick your favorite medium - if it's Stack Overflow or the IRC channel - but help out these people with GitLab questions. That will be my call to arms.

And of course, if you need an awesome feature yourself, please make it and contribute it, but there's no need to go around looking for something to make. Make something you want, don't make something somebody else wants; that's the most important thing... So you're inspired to do a good job, and you know what you want.

**Andrew Thorp:** That's good advice, yeah. What about -- so if you weren't doing what you're doing now - and I ask that question, let's say, assuming it's a month from now and you're working on GitLab full-time... And if you weren't doing that, what would you like to be doing instead?

**Sid Sijbrandij:** \[59:33\] I would like to learn JavaScript and play with Node. I listened to your episode with \[unintelligible 00:59:38.22\] the npm maintainer. That sounds awesome. I'd like to know more about that and play with it. I'm a Ruby developer, I love Ruby, but it would be good to learn a second language in a good way... So I'd do that.

**Andrew Thorp:** Awesome. And our last question is a programming hero, or somebody that you have been influenced by greatly in your life, that you would like to give a shout-out to.

**Sid Sijbrandij:** I wanna shout out to Yehuda Katz. He's a core on Merb, Rails, jQuery, Ember, making a Skylight application, but also making a Tokaido application, and that is to help people install Ruby on Rails easily on their Macs. It's just amazing how much he has given to open source. I don't believe he's actually one person; there must be three more in the basement somewhere...

**Adam Stacoviak:** Many Yehudas...

**Sid Sijbrandij:** Yeah, many Yehudas. It's just amazing what he has done, and I greatly respect that. We cannot stand even near him, compared to our contributions. I think it's really awesome that there are people like him, and he's a great inspiration to me personally.

**Adam Stacoviak:** I'm always inspired by some of his tweets where he's like, "Hey, I'm hacking on this. Anybody that knows something about this?" He's still humble even though, as you said, you don't deserve to stand next to him compared to contributions. I think he's a pretty humble person. And speaking of Yehuda as your hero, Andrew, are we still in talks about getting him on to talk about the latest Ember release and whatnot, in like a couple weeks?

**Andrew Thorp:** Yeah, we're still trying to work it out. Yeah, hopefully in the next few weeks we'll be talking with him about Ember. It'd be a good one.

**Adam Stacoviak:** Yeah, it's good stuff. Well, we definitely appreciate you coming on the show, Sytse.

**Sid Sijbrandij:** Thanks for having me.

**Adam Stacoviak:** Yeah, absolutely. The work you guys are doing is really inspiring. Definitely, the way you're leading the community and listening to the needs of the community is super-inspiring, so I appreciate you coming on the show. I wanna give another shout-out to our sponsor, DigitalOcean. Definitely cool that you guys actually use them, for one, and two, that they're sponsoring this show, because it helps us sustain. That's what helps us make sure that Andrew and I can show up here every week and talk to people like Sytse about what they're working on, and give shout-outs to people like Yehuda and others on the work they're doing.

You can go to DigitalOcean.com and plug in our coupon code "changelog" to get ten bucks off your subscription. So do that whenever you feel like. To the listeners, thanks for tuning in. We'll be back next week. That's kind of \[unintelligible 01:02:45.25\] so we'll put something in the email. So if you're not subscribed to The Changelog Weekly, you've got to. Go to changelog.com/weekly. It's where we're putting our updates, as well as tons and tons of other stuff that hits our radar, that we don't always have time to hit up on the blog... So definitely a huge Saturday read, and... That's pretty much it, so let's say goodbye, guys.

**Andrew Thorp:** Thanks so much again, man.

**Sid Sijbrandij:** Goodbye! Thanks for having me. Awesome that you're doing this show on open source. It's great work.

**Adam Stacoviak:** Thank you, thank you. We'll see you, everyone, next week. Later!

**Andrew Thorp:** Later!

**Sid Sijbrandij:** Later!
