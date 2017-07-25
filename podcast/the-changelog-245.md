**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I'm your host, Adam Stacoviak. This is episode 245 and today we're releasing a special episode in collaboration with Google. We talked with Will Norris, the engineering manager at the Google Open Source office about their brand new release of the open source website for Google, as well as their newly released internal documentation on how they do open source. Nearly 70 pages of documentation have been made public under the creative commons license for the world to use. We talked about the back-story of open source at Google, their philosophy on open source, their involvement in the TODO group, and much more.

We've got three sponsors today - Hired, Rollbar and GoCD.

**Break:** [00:01:13.06]

**Adam Stacoviak:** Alright, we're back. We've got a fun show today. Jerod, this one is in collaboration with Google, announcing the new docs they're releasing, the new open source website for Google. How awesome is it to have this conversation, Jerod?

**Jerod Santo:** Very awesome, and we have Will Norris here with us, who is an engineering manager at Google, as well as involved with the Google open source office. Will, I'm assuming that office is somewhere out in the middle of the ocean, or something. I don't know -- where do you put an open source office?

**Will Norris:** Thanks for having me on the show, guys. So our open source office is part of the larger engineering organization. Organizationally, we're very close to the developer relations team at Google, because we work on very similar kinds of problems, reaching out to external developers... We're primarily based in Mountain View, geographically. We've got a handful of folks up in San Francisco, and then a couple of remote folks.

**Adam Stacoviak:** And Will, you reached out to us I guess kind of through a connection, Nadia Eghbal of GitHub (also of Request for Commits, one of our podcasts) was talking to you about some cool stuff and you mentioned when to get in touch... And you all have this cool thing happening around internal docs and Google being shared; a lot of stuff taking place, so this is kind of revolving around that big deal. Do you want to maybe intro yourself a little bit and then tee off what is exactly happening here?

**Will Norris:** Yeah, absolutely. By way of intro, I've been at Google for about seven years; I actually started in our developer relations group, so working with other developers is very near and dear to my heart. I moved over to the open source team about four years ago. My background in technology is in open source... All the way back to the very beginning I was working on a project called Shibboleth, which is an open source authentication package.

\[\\00:04:17.14\\\] I've been involved in open source for a really long time, and then this last year I've now taken over and I now manage all the day-to-day operations of our open source office. One of the things I wanted to do in doing that was to try to tell a better story of all the different open source things that Google's involved with.

There were a couple of really specific problems that we were trying to address with this new website that we were launching... One is that Google does a lot of open source, and it's spread out amongst a lot of different places. Just on GitHub alone, we've got over a hundred organizations on GitHub; we've got code spread out all over the place there. Then we've got things that are not on GitHub, we have our own internal Git service. Things like Android, Chrome and Go - for those kinds of projects, the canonical repo for those are on our internal Git service.

Prior to this website, there was no one place to really see the full breadth of all of the open source that Google does, so that was something I wanted to do - try to provide a place to see all the different things that we're doing and how those projects relate, and all that kind of thing.

**Adam Stacoviak:** So the current open source programs office website just wasn't cutting it. You've got, obviously, the cool things you're doing there - Google Summer of Code (we know about that), Code-in, the released projects you have, but just nothing that pulled these several hundred organizations together to say "This is the massive impact we're having, these are all the docs we have that show enterprises and small businesses how to better do open source."

**Will Norris:** Yeah, that's right. This kind of touches on your earlier question of "Where does this open source fit/sit within the company?" At Google, the open source office is relatively small compared to the overall size of Google. Most of the open source projects that you think about being connected with Google -- there are product teams spread around the company that are actually managing those projects and running those communities and things like that, whereas our open source office - we're relatively small and we focus on things like compliance, so making sure we advise the company on legal matters relating to open source, to make sure that when we're using other people's code that we're complying with those licenses... And then, like you mentioned, we run the student programs: Google Summer of Code and Code-in. We have a peer bonus program where we recognize open source contributors a couple of times a year.

There's a lot of open source going on at Google, and we're just trying to tell that story a little bit better than we've done in the past.

**Jerod Santo:** Let's talk about the why's behind open source. You mentioned personally that you've been involved for a very long time in open source, going way back... What about organizationally...? We know Google has \[unintelligible 00:07:00.24\] and things like this, often times equating the two. But organizationally, a lot of the open source initiatives inside companies, especially companies of Google's size, tend to happen organically because engineers want to do it, or people just do it and don't ask for permission... But with how much open source projects Google has, there's more than just the grassroots engineer-by-engineer efforts... If you can speak on Google's behalf, why is it so important for Google as an organization to not just have all these open source projects, but then to also bundle them up in an attractive website and do all the things that you're trying to do to help spread the message?

**Will Norris:** Sure. We have had a formal Google open source office for about 12 or 13 years. It was started by Chris DiBona; he was hired to start the office. Within the first few weeks of his joining Google was when he started putting together the plans for Summer of Code. This summer will be I believe the 13th year that we've done Summer of Code, so every year that Chris has been at Google.

\[\\00:08:15.02\\\] But what's really interesting about it is while we've had a formal open source office for 13 years, we've been doing open source for far longer than that. We've been doing it since the beginning of the company. Both open source in the code and the model is very much a part of Google.

If you think back to the founding of the company, Larry and Sergey building the foundations of Google on commodity hardware, using Linux, using all the standard open source tooling of that day... So it's been present from the very beginning. But what's really interesting beyond that is that Google internally operates in kind of an open source fashion - for the most part - in that every engineer at the company has access to all of the source code for everything, and anyone can contribute to any project of the company.

I can go in and inspect the code for Gmail, and if there's some weird bug that is really bugging me, that I know the team is not going to be able to get to, I can go and send them a patch, just like a normal open source project. That's the way that Google has always operated.

There's actually a term for this, called inner source, which is actually really funny... When I first heard the term, I was really confused - this was a year or two ago. I was like, "What do you mean? Why do you need a name for this?" because I just took for granted the fact that Google was so open about that. That's the way we've always operated, and it just never occurred to me that -- and I've worked at some other companies where that's not always true, but at a large scale, thinking about not having that openness is painful to think about. So I just greatly value the structure that we have.

**Jerod Santo:** Yeah, that name is relatively new, and anytime you have an old thing that gets a new name, the answer to "Why?" is usually marketing. I mean, it's done pretty well actually for a bit of a movement of this inner source thing, and other corporations who don't operate that way natively trying to move more in that direction I think is valuable.

Let's go back to your "everything is open source inside of Google" - so even the crown jewels, like the PageRank algorithm... You're telling me that you come in as an engineer on day one and you can go look at all that stuff? Something's gotta be hidden, right?

**Will Norris:** There's a few hidden things, yeah. There are certain pieces of code... And more recently, as we've started getting into some more experimental stuff, certain teams have put access controls in place, but it's relatively rare. Certainly, the most sensitive things tend to be a little bit locked down, but it's pretty rare. Google is more structured to trust our employees and to design systems such that we're very fault-tolerant; that comes from a technical perspective, but then also at a human level. We know people are gonna screw up every now and then, so we design systems to deal with that.

**Jerod Santo:** I'm surprised and impressed that you've had an open source office for 12-13 years. It was tongue-in-cheek a little bit asking where it is, because it seems like in many companies open source office was probably some sort of marketing checkbox that you say "Yeah, we've got one of those", and that's why I said "Where is it? Off in the middle of the ocean somewhere...?" because it seems like something that wouldn't be core. It's like "Yeah, we just added an open source office because people ask us if we have one, and now we do." So that's pretty impressive that it's been such a long-standing effort, and especially that Summer of Code has been going that long is just surprising.

**Adam Stacoviak:** \[\\00:12:02.13\\\] How many years has it been now for Summer of Code?

**Will Norris:** I think this will be year 13, this summer.

**Adam Stacoviak:** Wow, that's awesome.

**Will Norris:** Summer of Code is our program for university students, that spend the summer working on an open source project, and then Google Code-in is a newer program - I think we just completed year number seven - which is targeted at high school students. That's a contest for high school students to do smaller tasks that are related to open source. This takes places during the winter months (winter months in North America).

**Jerod Santo:** Code-in is one aspect of what you guys are up to that I actually have never heard of until you gave me access to the pre-release of this website. It's doing a good job, at least in terms of bringing some visibility to that, because I had never heard of it until today.

So you have open source in your roots, from way back, you have countless open source projects... Actually, maybe you've counted them recently, as you've been bringing everything together. How many open source projects would you say Google has as a corporation?

**Will Norris:** It's a hard question to answer. It was a question that we grappled with a little bit in putting this directory together, because how do you actually define an open source project? On GitHub alone - I can give you a live number. Today on GitHub we have 4,300 public repositories, across all of our GitHub organizations. Some of those - if you think of projects like Android... The Android open source project - the last time I looked - had like 500 repos related to open source. Polymer, because of the build system that they use, they tend to have lots of small repos rather than a few larger repos.

We think a pretty conservative is 2,000+, what could be considered a standalone project. That's ranging all the way from the really big things, like Android and Chromium - the really notable stuff - down to maybe a Googler's 20% project, or something that they did over the weekend purely as an experiment or just for fun.

This is actually something that's maybe unique about Google, maybe not, that our philosophy toward open source has always been about if at all possible, we wanna help engineers release the thing that they wanna release, and we're always looking for how to say yes to an engineer that's wanting to open source something.

That's sometimes gonna mean that it's one person working on it in their free time, it's maybe not as robust or doesn't have a whole team behind it that's gonna be able to address pull requests really quickly, but we're okay with that. We actually think that getting all of that source code out there is a net positive, or can be a net positive for whoever finds it.

**Jerod Santo:** So what's the process inside of Google? I know you're formalizing things now, and again, I feel like a lot of these things - especially when you're native open source... It goes way back as the things tend to grow organically or as corporations get larger and larger; as you said, you started to have more and more access controls and things like these that must come into place. What's the process of being an engineer with some source code here on a local Git repo, and I want to take that out and open it up to the world - how do I go about it? Is there a license forced upon me? What are you guys' process for going about open source?

**Will Norris:** \[\\00:15:45.06\\\] Right, we hinted at this earlier - one of the things that we're launching with this new site is publishing all of our internal documentation for exactly this kind of a question... All of our documentation around how we release projects, how we use projects, how we send patches.

For releasing in particular - we treat open source launches like any other product launch at Google. We have a tool for managing these launches where you'll have a handful of approvals that you need to get. For an open source launch, you have \[unintelligible 00:16:19.12\] we look at it for licenses to make sure that you have a license in place... Much of this is actually automated; we have a tool that will scan your repo and make sure there's a license and you have a contributing file, and if you're bundling any third-party code, that that's separated in the way that we require.

This whole process normally takes place within a couple of days. We've got it down pretty quick. Then we've got a tool that you go to and once it's all approved, you go in and it will automatically create the GitHub repo for you, and you go and launch. As far as licenses, we tend to prefer the Apache 2 license, that's our default license, if there's not a good reason for doing something different. That's probably because it's just a really well-worded license, it has a patent grant in it that we really like, so it's just a good standard license to use. But we're totally fine -- we tend to be very pragmatic about certain communities prefer certain licenses. The Javascript community tends to be more MIT; Go itself is a BSD license, so a lot of Go projects tend to also use the BSD license, and we're totally fine with that, when it makes sense to.

If you're gonna release something in Perl, then you use the Artistic License, because that's what that community expects. We definitely are very cognizant of the communities that we're engaging with and what the cultural norms within those communities are.

**Adam Stacoviak:** I'm curious, you said that there's a process to do this... How often does someone in their well-known Google 20% time, or just anyone else that has a project come to this scenario and wants to release something open source and gets turned away from it? What are the obvious things that say "We can't release that. This doesn't work"? How often do people get turned away from open-sourcing something?

**Will Norris:** Almost never. It's very rare that we would find a project that we say "Look, we just simply cannot open source this." Sometimes it's "Okay, you're wanting to release some code that's actually owned by this other team, so you just need to make sure that they're okay with you releasing this." Or, actually what happens there really often is maybe you have a dependency that is owned by another team, so in order to release your project, you actually need that dependency to be open source as well, or else people outside the company aren't gonna be able to use it. This tends to be more about coordination.

We're certainly not gonna release any projects that -- let me give you an example of a project we would not release. The spam filters that we'd use for Gmail - it would not be in the best interest of Gmail users if the filtering algorithms were open source, because then the spammers would be able to look at those algorithms and say "Oh, I know exactly how to get around these." So it's one of those things where it's not even so much about "they're the crown jewels", as you were saying earlier, it's more about it would actually damage the product, and it would damage the users of the product. It's not actually valuable to open source those things.

**Jerod Santo:** Speaking of crown jewels, it's the same concept with PageRank, which is already a cat and mouse game, where people are trying to game the system and getting their content to the top of search results, and Google trying to make that as merit-based and relevant as possible. Well, if they all knew exactly what the algorithm was, well you've just given the mouse some cheese, or I don't know how that metaphor works... But you're helping the mouse out.

**Will Norris:** \[\\00:20:00.23\\\] Sure, exactly.

**Jerod Santo:** So what about stuff that's not quite ready yet? Because surely you guys have standards of quality - and I don't want to imply that any of your engineers ever write any code that's not good... But do you ever see something that's not quite ready, like it's half-baked and not ready to be open-sourced?

**Adam Stacoviak:** Or needs more strategy?

**Jerod Santo:** "Let's wait six months..." - does that ever happen?

**Will Norris:** Well, I would push that back and say "What do you think is ready to be open-sourced?" Part of this comes from having such a big portfolio of projects that they're just really all over the spectrum in terms of size and complexity and quality, and different development models, too. We have some projects where it is mostly developed internally, and then released as a whole to the community. TensorFlow is a good example of this; we released it a year and a half ago. That had been internally developed for many years and we had been using it for a long time and really perfected a lot of it, and then released this kind of complete package. Now the future of TensorFlow is as an open source project, and collaboratively.

But then we have other projects that are developed in the open from much earlier in their development process. Maybe it's something as simple as a design doc, and they actually wanna develop it in the open from the very beginning. It's really hard to say that there is like a particular bar of quality or of whatever metric you wanna use, because I think that they're all okay. Again, that kind of speaks to our philosophy that we're okay with all of these variances in these things.

The one thing that I've been wanting, that I hope that we can do with this new website - and this is something I'm trying to do with the project directory that we're launching - is to do a better job of setting expectation. I think all of these are okay to do as long as we're upfront about what a user should expect from a given project.

**Jerod Santo:** Absolutely.

**Will Norris:** Because on the surface it's difficult to tell the difference between the big, fully staffed projects and the experimental stuff. It's not to say that either one is better or worse, it's just that to be fair to the user, we should try to be more transparent about that. One of the things that we are including in this project directory is - for a handful or projects, and we're hoping to increase this - we're talking about where we actually use that project inside Google.

If this is something that we use to power whatever at Google, we're trying to talk about that and say, "This is actually something that we use ourselves", and you can kind of take that as a signal for what to expect. And we wanna do more of that. This is the first thing that we're starting with.

**Jerod Santo:** Yeah. I think you hit the nail on the head there, messaging and signaling and all these things - communication really is the absolute key on open source success. Let's take a break here. When we come back, Will, I know you have some other ideas around how people can create these messages around what kind of a project is this. Recently we saw GitHub add topics, which we were very much excited about because it kind of allows you to add labels or tags to projects and give some of that message "What this thing is all about." Perhaps we can talk about that as well, so let's take a break and we'll take up the conversation around how you message your project, how you explain things, on the other side of this break:

**Break:** \[\\00:23:35.02\\\]

**Jerod Santo:** Alright, we are back with Will Norris of Google, talking about Google open source and the brand new shiny website OpenSource.Google.com, that has a few purposes, Will. One of the purposes we teed up before the break was helping you guys really explain and communicate what kind of projects you have. This is something that everybody struggles with; in fact, a few episodes back Adam and I were discussing with Chris Lamb about some throwaway code and whether or not it should be open sourced. Some of the conversation there was like, "How do I actually communicate that this is a throwaway?", or like you said before the break, some things are experimental, some things are flagship products that you're developing internally, but open-sourcing for other reasons, other things you want the community to design those... So let's talk about that problem in general and then why you think this website is a specific solution, for Google at least.

**Will Norris:** Yeah, absolutely. It's certainly a problem that anyone that's doing any amount of open source are dealing with. I wouldn't even go so far as to say that this website is yet solving that problem... I think this is us beginning down that path. There's so much to that, of how do you set appropriate expectations. You were talking before the break a little bit about GitHub's new tag feature -- or I forget what they call it... Labels, or topics?

**Jerod Santo:** They call it topics, yeah.

**Will Norris:** Yeah. I mean, even something as simple as that gives you at least something to pivot on, to start to set that expectation. There's actually a number of really interesting projects around status badges... You know, most GitHub repos have these badges at the top of their readme file; they're from shields.io, or whatever, and they talk about whether they're tester-passing, or various things. Lots of people are having these things. And there's a couple of efforts that I've seen to try and define some set of values for indicating the status of the project. That can be something as simple as "This is completely experimental and might kill your cat" or "We run this in production."

\[\\00:27:53.09\\\] It's kind of interesting - and I've sort of hinted at this earlier - that Facebook, by comparison, they've been very upfront about everything that they put in GitHub.com/Facebook is something that they run inside Facebook, in production, and that's great. That sends a really strong signal for those repos. We haven't taken that stance; personally, I don't think the GitHub organization is necessarily the right place to try and divide -- the problem is the GitHub organizations only provide one access on which to divide projects, and I think when you're dealing with a portfolio of four thousand repos, you need more than just one access on which to try and slice and dice your projects... So that's what we're trying to do with this project directory. We don't yet have something like a status value that is just one of three or four different values that say "This is experimental", "This is stable" or whatever. But that's absolutely the direction we're trying to go, and we're talking very much with Facebook and Microsoft and other companies that are struggling with the same type of thing, and we're actually collaborating and trying to come up with a more common way of expressing that kind of stuff.

**Adam Stacoviak:** This is interesting, because I often go to orgs on GitHub and feel the pain, basically, of not being able to know what teams they have, who owns what, how the teams are formed... It's sort of just like "Here's all of our code, here's a list of it." It's ordered by most recently contributed to - or most active, basically - on the right-hand side there's some people, and good luck finding out what they actually contribute in there, unless you know their personal profiles. It's very antiquated on how you can actually dive in. So you're hoping to solve that problem through this kind of site for Google.

**Will Norris:** Yeah, I think so. I don't know if it will necessarily solve the problem of identifying exactly which people commit to which project, although absolutely that's something we could explore down the road...

**Adam Stacoviak:** For example, Jerod and I reach out to people all the time to bring them on the show, and it's very hard to say "Here's something cool..." It starts with a project, for example, and then we're like "Who in the world do we reach out to?" so we end up basically just spamming them with an issue and with a humble "Sorry about that, but we don't know who to reach out to." I feel like 1) it's recognition, 2) it's just who is involved, so it kind of onboards contributors; it's just better informing which projects do you have and then who's involved in those projects.

**Will Norris:** Yeah, it's really common... Internally, at Google, each product team or project team will have an internal site that identifies who's the PM, who's the tech lead, and may or may not list all of the engineers, but it's at least like "Who is the primary point of contact for this? If I just wanted to get more information, who would I reach out to?" That's something that's often really difficult for open source projects, you're absolutely right.

**Adam Stacoviak:** You can go to GitHub.com/google and go to the People tab... You've got 1,262 people on your org, and it's easy to find out who they are and follow them, but it's very hard to find out who they are and what they contributed to.

**Will Norris:** Sure. We found this with a lot of things on GitHub; GitHub has been great over the last couple years in adding more features and new things, but my philosophy around a lot of things has been that I never want to fully rely on GitHub to solve this problem for us, of a couple different reasons. One is the things that we care about are gonna be a little bit different. You care a lot about being able to reach out to the primary point of contact so that you can interview them we care about whatever other things, and GitHub may or may not care about those things enough to build them into the product.

The other reason is that not all open source in the world is on GitHub. It's great, and we love GitHub, and we use it extensively, but we don't use it for everything. Any product or any solution to these things that we're looking at, we also need to keep in mind that we have code off of GitHub, and GitHub is only eight years old. Another eight years from now, it may be something else entirely.

\[\\00:32:06.01\\\] I'm much more interested in finding ways -- for example, when we're talking about how to represent the status of a project, I would love to get some of this data down into the project itself. When we were building this project directory - we do pull a good bit of the data from GitHub's API, but again, not all of our projects are on GitHub. I don't wanna rely on GitHub's API for any of this stuff, because not everything's there and not everything's gonna be there forever. But I would rather see this data actually live in the repo... So you have a readme -- all major projects have a readme file that is for human consumption; it would be great if there was some file in there that handled this metadata for machine consumption to power something like the project directory that we launched. You see this in a lot of different language communities.

NPM I think has package.json, PHP's Composer has their thing, and R packages have a description file... You've got all these language-specific ways of doing it, but I would love to come up with some kind of cross-language, cross-organization standard way of expressing this data, that GitHub could then use to power their UI, or any other system could use to power their UI, and keep that stuff in the repo itself, so that it's portable.

Git's great in that it's a distributed source control system, but when you think about something like GitHub, there's a lot of information around the project that's not actually stored in Git - you've got issues, you've got pull requests, you've got various other things. I'm really interested in projects that are trying to make all of that data more portable.

**Jerod Santo:** Well, it's similar to the contributing file, license... There's a handful; changelog, although nobody uses that the same way... The problem, as you're identifying, is that everybody is using these things in different ways, so there needs to be a more formalized specification, and maybe that has to start with GitHub implementing it, because -- oops! Siri just talked to me. Sorry about that. \[laughter\] She just said, "Perhaps not!", I was like "Well, she disagrees..."

**Will Norris:** Maybe you're wrong on that...

**Jerod Santo:** She disagrees, yeah.

**Adam Stacoviak:** She's like the magic 8-ball.

**Jerod Santo:** I'm quite possibly wrong, but it seems like it has to start with GitHub, because they're the biggest player in the hosting space right now. If they would come up at least supporting the spec and saying, "Okay, if you put this file in your root..." or "Please don't put it in the root, put it somewhere else... We've got enough files in the root of our projects." \[laughter\] "Or at least make it a dotfile, or something... If you put this file in, we'll pull it out", and from there other people will perhaps follow suit. Do you think that's the best strategy of getting something like that actually implemented?

**Will Norris:** I don't know, it's something I'd like to explore. We actually have been talking with GitHub about exactly this, and I think they are open to the idea. This actually kind of segues... We've been talking with a lot of companies about these things through a group that we're a part of, called the TODO group, which we can talk a little bit about. It's kind of a collection of companies' open source offices. The people that do open source at all these companies - we started this group about two-and-a-half years ago to share best practices, to just collaborate and talk to each other and say "What are you dealing with?" This is actually one of the topics that we've been talking about over the last few months. We're all dealing with the same kinds of problems of needing to express \[unintelligible 00:35:47.12\]. Netflix actually has exactly such a file, they call it "OSS Metadata". They have a lifecycle field that expresses where in the lifecycle is this project.

I think it's possibly a solution, I don't know if it's THE solution. I actually care less about what the solution actually is and more about finding something that we can agree on.

**Adam Stacoviak:** \[\\00:36:12.13\\\] It's interesting what with this TODO group... You've got a membership there - Netflix is in there, eBay's in there, CapitalOne is in there - a huge contributor to open source - you are in there, GitHub's in there... Lots of larger enterprise organizations that have been down the road, been developing their own software, been doing inner source potentially, even if it hasn't been named that for very long. They've been doing this, so they may have things like this, where it's like "We feel the pain. We don't know how to describe the maturity of the project, or the SLA, or if it has an SLA", or whatever.

**Will Norris:** Yeah, absolutely. We're finding that the conversations we were having were absolutely all solving very similar issues and we're all just at different points along the path of trying to sort this out and figure it out. It's been actually really interesting seeing companies like CapitalOne or Autodesk, or companies that you don't traditionally think of as open source, but companies that have been around for a really long time, and seeing their approach... They actually bring so much more cultural baggage when they're trying to embrace open source, particularly if they're coming from a company that's not used to that kind of development model. So it is much more difficult for them than for, say, Dropbox, or any kind of startup that grew up in this open source world where it was just taken for granted. While they're younger, in many ways it's a lot easier for them to sell this to their management.

**Adam Stacoviak:** Before we go too much further, can you give the listeners a brief, quick rundown of the TODO group and what it is?

**Will Norris:** Sure. The group started in September 2014. It started with James Pearce at Facebook, who's a good friend and colleague that runs the open source group at Facebook. He had just recently taken it over from David Recordon, and was sending out \[unintelligible 00:38:20.04\] to friends and colleagues around the Bay Area/Silicon Valley saying, "Hey, I'm doing this open source thing now. I assume you guys have some kind of group, or you talk, or you meet, or something", and I was like, "No, not really. We have one-off conversations." And Chris DiBona knows everybody, and everybody knows him, because he's been doing this since the '90s...", but for some of these newer companies, or people that have recently taken over open source at these companies, they just didn't have those connections.

The group started by just bringing those folks together and saying, "Look, we're all trying to do open source from a corporate perspective, and realizing that the types of challenges that companies face in trying to do open source tend to be a little bit different from your typical individual open source developer." So this was really an attempt to try and get people that are doing open source from a corporate perspective together, and allow us to share best practices and just share tooling, if possible, and things like that.

**Jerod Santo:** Have you seen a lot of fruit coming out of that?

**Will Norris:** Yeah, absolutely. We're now actually part of the Linux Foundation. The group started very ad-hoc, and eventually we moved into the Linux Foundation. What's sort of ironic about the group is there's a backronym for TODO, which is Talk Openly, Develop Openly... And it was, because it's all about within this group being open and sharing our practices. But a large part of that discussion actually happens on a private mailing list, which is sort of ironic. \[laughter\] Yeah, "We're doing it openly... In private!"

\[\\00:40:11.04\\\] But there's a good reason for that, because we're often talking about some really sensitive things... And I was talking with Adam about this a little bit ago - sometimes, even when you're generally very open about things, there is value in being able to have a conversation about the people that are actually affected by it in a more controlled setting, so that it's not being scrutinized all the time. Because as soon as you know that everyone's watching you and everyone's gonna take every word that you say and try to twist it or use it, then you're much more reserved and you're not gonna open up in the same way.

**Adam Stacoviak:** Yeah... it kind of goes against the "open" part of it, which is, you know, key.

**Will Norris:** Right, it actually has the complete opposite effect, because it causes people to close up, and not be willing to share. Yeah, absolutely.

So there's actually been a lot of great fruit. We meet about quarterly, and we have been accepting new members at a pretty regular clip, but with a lot of the things I'm trying to push efforts that I'm involved with to the more -- and there actually is a public mailing list as well; it doesn't have nearly as much traffic, but for example we were talking about the project metadata file, and that's actually one of those things that there's really no reason for that to be in a private setting. I've been trying to push that conversation into the public discussion forum.

We have a public repo that tracks down some of the prior art around this, on the TODO group, GitHub org. So as much as possible, we're trying to push things more into the open sphere where we can.

**Jerod Santo:** Yeah, I think when it comes to those types of things, the more people involved, the better. This is gonna be a thing that the whole open source community hopefully adopts as a way of adding this metadata to their repos. You said you don't care too much about the details of it, but trust me, there's people who do.

**Adam Stacoviak:** Oh, yes...

**Will Norris:** Oh, yeah, absolutely!

**Adam Stacoviak:** Go off, Jerod, tell him how you feel!

**Jerod Santo:** My only opinion I've already stated, which is "Less files in the root of our projects, please", that's my only opinion.

**Adam Stacoviak:** It's definitely getting crowded, that's for sure.

**Will Norris:** It totally is.

**Jerod Santo:** This thing is like a super lost list, and they all end in "somethingFile". I've gone off on this before... DockerFile, GemFile, blah-blah-blah.

**Will Norris:** I'm not even sure that we need a new file, and that's the thing... I just wanna make sure that the data comes from the repo. I don't wanna be beholden to any one host; I don't want it to just live inside some GitHub database that I can only access through the GitHub API, I actually want it to live in the source files, and maybe that means using existing files, absolutely. So from that perspective, yeah, I'm totally open to whatever the implementation looks like. If we don't have to add another file, by all means, let's not.

**Jerod Santo:** Yeah, I agree. One of the things that you mentioned during the break, which seems like it's a good time to talk about now with regard to the TODO group, and some of the original inspiration or the desire behind the documentation side of the website that you're launching... We've talked about the project side, and helping message those and really bring them to a place where people can see them, but to me the exciting part of what you're launching this week is this documentation of how we do open source. Did that come out of these TODO group conversations that you've been having?

**Will Norris:** \[\\00:43:53.02\\\] Directly. Yeah, absolutely. We've been having these kinds of conversations for two years now, of "Hey, how do you all deal with employees doing things on their own time?" GitHub just published their new policy on how they deal with employees doing things on their own time, and their IP policy for that. Questions of "How do you actually manage your GitHub organization? How do you deal with when people leave the company? What are the tools that you use for that?" and all those kinds of things. We've been having these one-off conversations for a long time.

Actually, the more recent one was dealing with CLAs (contributor license agreements), which on and off tend to be a hot button issue. It was widely discussed a couple years ago when Node publicly said that they weren't gonna use CLAs, or when Joyent said that they weren't using CLAs for Node.

**Adam Stacoviak:** For the uninitiated, what's a CLA? Just so there's no \[unintelligible 00:44:57.21\]

**Will Norris:** Sure, so a contributor license agreement is -- what you'll see with some open source projects is when you contribute to the project, the project maintainer may want you to sign a contributor license agreement. This is an explicit license of what you're contributing to the codebase. There's a similar type of agreement called a copyright assignment agreement, where you actually assign your copyright to the project maintainer - that's not what Google does and that's not what most companies do.

**Adam Stacoviak:** All CLAs are different, though. They're not all the same. Well, there's some sort of agreement that "You're contributing, and this is a license that you agree to to say what we wanna do or what this agreement says we do with your code is what we do with your code." Not everybody is trying to assign IP... Is that right?

**Will Norris:** Most CLAs are not copyright assignments, that's correct... But also most CLAs are actually modeled after the original Apache contributor license agreement. The Apache Software Foundation -- most people know the standard Apache 2.0 license, but they also have a contributor license agreement which years ago Google took the Apache CLA and put our name in place of Apache, and just modeled ours after theirs. Since then, Facebook has modeled theirs after ours, and I think Yahoo! might use a similar one... I don't remember what Microsoft uses, but most of these companies do have some form of CLA and most of them are very similar in language, based on the Apache CLA.

That makes it a whole lot easier for lawyers that are reviewing these to look at them like "Oh, yeah, this is a standard Apache CLA. I know what this is, I understand it. Yeah, we can sign this."

**Adam Stacoviak:** Right. You mentioned -- we're gonna take a break here in a second or two, but you mentioned James Pearce a couple times, and our long-time listeners know that we had James on this show back on episode 211, and that show was titled "Open Source At Facebook." One of the reasons -- and what we talked on the pre-call, preparing for this show, about this, one of the things that Jerod and I were very excited to do that show with James about was because having a model - which is what you're doing with the documentation here - for other enterprises or other... Sure, not everybody's the Google size or the Facebook size, but there's lots of companies out there that are looking to find better ways to embrace open source, to lead open source, to allow open source to be part of their business, and I couldn't be more excited about you all doing this.

With that said, we're coming up on our second break here. When we come back, we're gonna dive a little deeper into some of the docs that you all are sharing, and some of the hopes and dreams behind them, and potentially how those who can appreciate them can check them out. We'll break right now, and we'll be right back.

**Break:** \[\\00:47:57.04\\\]

**Adam Stacoviak:** Alright, we're back with Will Norris, talking about Google's open source documentation. Now, you've already had this open source office website out there; this is a new and improved version of it, opensource.google.com... I believe /docs is the URL... We've got some early access to this, so our URL is a little different than maybe the ending version of it.

I mentioned the call with James Pearce at Facebook, and Jerod, you can back me up on this, I was so excited to have that conversation with them because... Obviously, we've been doing this show since 2009, so it's been forever; we love open source, we think it's the lifeblood of the future of software and what we're doing, so to see organizations like Google, like Facebook leading the way, but not just leading the way in terms of sustaining and funding and employing people to maintain software, but also very much so documentation. People underestimate how important documentation, and to see you do this is a cool thing because you're helping so many organizations lead the way. I couldn't say it any better... But let's talk about this.

This wasn't in place before you championed this... How hard was this to sell to anybody else? Was this a big ordeal to get in place? What's the behind-the-scenes of this?

**Will Norris:** It was a little bit scary just proposing it at first. It's important to set the stage for this that these docs are quite literally our internal documentation for how we do open source. I said this a little bit earlier - how we release code, how we patch, how we bring it in, but we've done very minimal cleanup to these docs, and it's mainly to remove references to internal things that aren't really relevant, or to remove e-mail addresses or some basic things like that. But for the most part, these are just identical copies to what we've had as our internal documentation for doing open source for many years.

What's kind of interesting about that is we actually did leave in -- we didn't try to cater it to an external audience; we're very upfront about "This is the way that we do open source." We're not trying to be prescriptive; the way that we do open source is not gonna be right for every other company, so you should definitely not view this as a how-to guide. We said this in the blog post when we announced the site, that in the same way that viewing another engineer's source code and seeing how they solved a particular problem in their code is useful.

We hope that seeing how we address certain open source problems is useful. Even if you choose to go about it a different way, I think that there's value in just seeing how other solve those problems, so that's what we're really hoping to achieve here... Being transparent. Our docs aren't perfect, our processes aren't perfect, some of the things that you read might not make sense for someone outside the company, so there may be a few things in there that don't stick quite as well, because all of these docs were originally written for an internal audience. And rather than trying to write a different set of documentation for an external audience, we thought that it would be really valuable to just put it out there, and say "Look, this is what we have."

**Jerod Santo:** Very nice to see it also licensed liberally, as well... Creative Commons attribution license. In the spirit of open, it's out there for others to use with attribution.

**Will Norris:** \[\\00:52:05.12\\\] Yeah, absolutely. Adam had actually asked me that earlier, about whether we were open-sourcing the site, which is another thing that comes up often in the TODO group. A lot of the tools that we have built - us and other companies - are not open source for various reasons. The site itself is not being open-sourced, but as you said, the documentation we are putting under a CC BY license, because we want people to be able to take this and use it.

We're not actually putting it in a public GitHub repo because we're not really trying to collaborate on these docs - it's not really the goal of what we're trying to do here - but we do want people to be able to take it and apply it and use it in a way that makes sense for them.

**Jerod Santo:** Yeah. They're more of an artifact of the way that you're doing things, as opposed to a working document of the way you want to do things, so there's no reason to have community involvement around the creation of these, because they are a reflection of what Google's doing internally.

**Will Norris:** Yeah, absolutely.

**Adam Stacoviak:** Though contribution and conversation can blend on GitHub quite easily. Sometimes open-sourcing something might simply just be having a conversation around it, rather than contributing to it. For those listening that dig into these docs, if they have questions, conversation they wanna have around something, what's the best way to go about reaching out to somebody to say, "Hey, I checked out your policy on GitHub at Google. I've got some questions."

**Will Norris:** Yeah, absolutely. That's a great question, and I'm glad you asked it. On the site we do have a feedback mechanism, which is like a standard way to \[unintelligible 00:53:36.23\] That's more really for reporting bugs, and things like that... But for really having a conversation, what we're hoping to do is to push those conversations toward the TODO group. It's todogroup.googlegroups.com. You'd have to go and join group. It's a public group that anyone can join.

I think the more interesting conversation is not just around, "Hey Google, I saw that you did this thing and I wanna talk about it." You activated Siri a few minutes ago, and I actually just activated Google Now by saying "Okay, Google". \[laughter\]

**Jerod Santo:** We've created our own prison, haven't we?

**Will Norris:** We have. So I think the interesting conversation is not just looking at how Google does things, and not having that in a private context, but to have a public discussion around "Okay, so Google says that this is how they do things..." and then bring in other companies and say "How does your process compare?"

These are the kinds of conversations we had in the smaller context within the TODO group, but I really would like to have these in a more public setting, which is one of the reasons why we're putting these docs out there. We would love to invite that conversation, and I hope that the TODO group becomes a good forum for having that conversation.

**Jerod Santo:** Why don't we just give a little constructive feedback on this TODO group website? Because the way it looks is it doesn't look very much like you are invited to come join this group. It looks very much like, "Hey, check out what GitHub and Facebook and Adobe and Microsoft and Netflix are doing"... But maybe you run a five-person development agency... It doesn't say "Every corporation that wants to do open source should be a part of this." You're saying that's what you want - you want more people to come and join... I think that message is lacking a bit.

**Will Norris:** That's probably great criticism. Yeah, I think the site has not actually been updated since we launched in 2014. I don't know if that's actually true, but I think it is. Like I said, the origins of the group were very humble; it was just a few of us getting together, saying "Hey, we should talk." It was really put together in about four days, right before -- whatever, there was a big Facebook event right before it.

\[\\00:56:00.07\\\] We actually didn't know how we were gonna deal with accepting new members, so we were trying to figure that out. But separate from the formally joining the group - and that involves I think being a member of the Linux Foundation and things like that, there is a public mailing list that anyone can join. You don't even have to be a member of the TODO group, you don't have to join the Linux Foundation or anything like that... There's just a public mailing list.

I'm not actually sure that it's even linked to from the website. I will make sure that that gets fixed, because I think there is a good opportunity for companies of any size, individuals, anyone that's interested to be able to be a part of that conversation.

**Jerod Santo:** Yeah, I think we should definitely get that address and put it in the show notes for people interested. I'd be interested even just to lurk on there and just be a fly on the wall, because I'm not running a corporation that is interested in open source, unless you consider The Changelog.

**Adam Stacoviak:** I'd consider us a small business that cares about open source, honestly... Because our site is open source, and we clearly care about it.

**Jerod Santo:** Right. I'd love to be involved in those conversations and even just hear some of the trials and tribulations that everyone's going through, because being people who are involved in open source, I think we probably have insights to share.

**Will Norris:** Sure, and maybe the TODO group is not necessarily the right venue for that. It was created to serve a very specific need that we didn't feel was being addressed at the time... So by just publishing the docs in the way that we are, anyone can reference those docs in whatever community they're part of, and we're happy to go to where the audience is and to have those conversations in the venues that make sense. There's no reason why it has to be within that one mailing list, or anything like that.

**Jerod Santo:** Sure.

**Adam Stacoviak:** One thing you said to me in the prep call for this was... Around the TODO group you said "This is for companies who have or have a need for a dedicated open source office and/or open source resources."

**Will Norris:** Right. That was our general, very rough litmus test when we started the group... It was kind of targeting companies that are of sufficient size that they have need for dedicated open source resources, where "sufficient size" is intentionally undefined, because it's gonna be different for different companies, and that's totally okay. That's kind of the idea. We felt like the kinds of problems that a company faces is different when you're a two-person startup like Changelog, versus a hundred-person company, or a thousand-person, or a ten-thousand-person.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Let's focus a little bit in on the docs, because I think we've covered that to a large degree. We have two big angles: Creating and Using. Inside of the creating side, you have Releasing a Project, which drills down, you have GitHub at Google - how Google approaches GitHub, Open Source Patching, Personal Projects... Any of these stand out as something that you'd like to maybe hatch open and just discuss a little bit? Anything that is unique to Google or interesting to our audience?

**Will Norris:** Sure... Adam, I know you were kind of interested in the GitHub at Google, so I'm happy to talk about that, too. This particular page is talking about the way that we have sort of embraced GitHub. An interesting tidbit - I joined the open source team (four years ago) originally as a 20% project; I was working on Google+, I was an engineer working on the API.

At the time we didn't release things on GitHub; we still release things on Google code, which was our hosting platform at the time... And a number of teams were saying, "Look, the developers we're trying to reach, they're on GitHub. We need to be there", so we were like, "Okay, let's do it." So I spent a 20% project for about a year of managing our GitHub organization. Originally, it was just github.com/google.

\[\\01:00:18.21\\\] So that was kind of my introduction to the open source group at Google, and I managed that for about a year and then eventually came on full-time. Now it has become a very major part of the way that we publish open source and the way that we engage with that community. We have some policies around how -- part of it is just practical things of how we deal with security on GitHub... We require everyone to have two-factor auth enabled; we generally encourage Google employees to use existing GitHub accounts if they have them.

Some people really like having work and personal stuff separated, and for those that really want that, we're totally fine accommodating that... But we found that 1) that can be challenging from a technical perspective, but I actually think it is in the employee's best interest to use the same account, because you're not gonna be at Google forever, and when you go -- GitHub has done a really good job of building up the reputation of a user on GitHub; so you have your contribution timeline, and you have all of these things... And you were saying yourself, you wanna go to a person's profile and see what do they work on, or what have they worked on in the past. Some people use GitHub as their resume, for better or worse. We actually think there's a lot of value in just using that account for work stuff as well, so that it stays with you.

Then we deal with things like "What happens when someone leaves the company?" and stuff like that, and we've got policies around all of that.

**Jerod Santo:** Yeah, it gets really hairy. I'm interested to hear your policy around personal projects, which is part of this documentation. GitHub just made waves this week with their new employee IP policy, which is very much allowing the employees to maintain copyright over things that are personal projects. Historically - and it looks like Google has been this way, where anything you work on on Google time is Google's, even if previously it was yours in terms of the property. Can you talk about that a little bit, in terms of what's out there? And correct me, because I'm probably misapplying it.

**Will Norris:** Yeah, let me correct you on that...

**Jerod Santo:** Thank you.

**Will Norris:** What our policy is -- it's not that we're claiming any rights to things that you did prior to employment at Google, it's that any work that any additional work that you do on those projects... Of course, anything that you did prior to employment at Google - that's yours, that's fine, but when you continue to contribute, Google potentially owns the IP for that.

**Jerod Santo:** The IP for the improvements? So let's say I have a Jerod Widget 1.0 that I created on my own time, and then I come into Google, and I'm like "You know what you guys need? It's a Jerod Widget 2.0. I'm just gonna improve this on company time." So now Jerod Widget 2.0 is completely owned by Google, or just the parts that I worked on? It gets really hairy, I'm sure.

**Will Norris:** It does get really hairy, and that's actually the kind of thing that I think maybe got missed with GitHub's announcement. GitHub does a really great job of taking complex things and making them look simple; they've done that with Git, they've done that with many things, but this is one of those areas where you can try to make it look simple, but a lot of it is just not. All of these legal things are relatively complicated.

\[\\01:03:45.04\\\] Our policy and what you see on the site is we realize we can't come up with a simple blanket rule. The thing that really makes it super complicated in employment law in most areas is to talk about whether the work is within the research areas of the company, or a product that the company is working on or might be working on. That gets really complicated at Google, because we're involved in so many things.

Our approach to this has been that we have a committee called the Invention Assignment Review Committee, which is what's talked about on this page, and if you have a project where you want to own the IP, you can bring it to this committee and they will review it and say, "Okay, this is outside of the scope of what Google works on" and really outline the conditions under which you could continue to work on that and own it. We very much have a process where employees can do side projects and they can own the IP and all of that, but it's not the kind of thing where we can just draw a bright line in the sand and say "Okay, if you're on this side of the line, you're good to go", because it always has to be dealt with on a case-by-case basis.

**Adam Stacoviak:** One thing too that blurs the lines there, Jerod, with GitHub's announcement - and this is "in court", so I'm not sure how accurate it is; it's a journalist, it could be not spoken correctly, but it says "As long as the work isn't related to GitHub's own "existing or perspective" products and services"... Now, if that were a Google announcement saying the same thing... You all have self-driving cars, you have search algorithms, PageRank, so it's what could not be a Google product. It'd be kind of hard.

So that committee - I don't know how accessible they are or how, dare I say, human... I just mean more like, do you talk to an e-mail address, or do you actually talk to people? That's kind of good to have though, because then you can actually have some formal way to say, "Hey, I made this thing, I wanna keep it mine. Is that possible?"

**Will Norris:** Yeah, that's exactly what it is. It's real humans that you can talk to. The phrase there that you quoted... I'm not a lawyer, especially not an employment lawyer; I don't know exactly how that should be applied in all cases, and there is sometimes different jurisdictions and there's all these different things, so that's exactly why we have this committee - to provide some clarity to employees that just want a clear answer.

**Jerod Santo:** Yeah, it just reminds me of that Silicon Valley episode where they had to figure out if he wrote a single line of code while he was...

**Adam Stacoviak:** With his girlfriend!

**Jerod Santo:** Right.

**Will Norris:** Yeah, well Chris DiBona, the guy that founded our open source office was a technical advisor in Silicon Valley. They actually advised him on exactly that scene.

**Jerod Santo:** Oh, nice. That's awesome.

**Adam Stacoviak:** Wow...

**Will Norris:** It's actually pretty accurate.

**Adam Stacoviak:** That's funny... Well, we've got about four-ish minutes left in our estimated time for this show, and I don't wanna go without talking about one thing, which is growing. We're all trying to better support, better grow open source, and one doc you have here is on funding. We have a show called Request For Commits. We've mentioned Nadia Eghbal before - her and Mikeal Rogers produce that show (rfc.fm or changelog.com/rfc). We're big on sustaining/maintaining the human side of code... What is your stance on funding and sustaining open source and how do you go about doing that at Google? Not you personally... At Google.

**Will Norris:** Yeah, I personally do fund... I'm personally a member of the Software Freedom Conservancy, because it's something I believe in a lot. But as a company, we take that really seriously, the need for sustainability in open source. We have an outreach team within our open source office that one of the main focuses that they have is ensuring sustainability of open source in a lot of different areas, and sometimes that is simply you need some money.

\[\\01:07:59.13\\\] A few years ago in the wake of Heartbleed, the OpenSSL that affected so many people, the Core Infrastructure Initiative was created within the Linux Foundation; that's a group to provide funding for so many of these projects that make up really the basic infrastructure of the internet, but are not being cared for in the way that they need to be, pursuant to how critical that they really are to the internet being a safe place to actually operate.

We contribute to CII, we contribute to a number of different things... But then also, even outside the monetary, really the core reason why we do things like Google Summer of Code or Google Code-in (which is where we expand a lot of our energy) is ensuring the sustainability of contributors, making sure that the next generation of developers are aware of open source and that they're getting involved, and that all of these projects have this fresh lifeblood, if you will, of contributors to take on those projects.

Everything that we do within our outreach team is focused on sustainability of open source in the many forms that that takes.

**Jerod Santo:** That's awesome.

**Adam Stacoviak:** Well, obviously, we really care about the future of open source, and money doesn't always solve things... Sustaining can be broken down into funding, supporting, nurturing, guiding... Google Summer of Code is obviously a good thing for that, just giving guidance to those folks out there who are making new software and new open source projects, giving them mentors to follow, giving them resources like this to follow, potentially... So we certainly appreciate that.

Will, what else can you share about what's going on here with the docs that you all are sharing? These are internal, obviously, as you mentioned before... So this funding that we mentioned, GitHub at Google, maybe even your licensing or how you handle personal projects... What else can we highlight before we close out?

**Will Norris:** Sure... The other piece of all of this that we haven't really touched on is how we use open source code, and I think this would be something that someone's gonna have to go through and really look carefully to see how it applies... But a huge part of any company, even if you're not releasing open source code, you're not releasing your own projects, most every company is almost certainly using open source code, in some form or another. And depending on the licenses of the packages that they're using, depending on what they're doing with them, if they're shipping them to customers, there are different obligations that you take on.

\[\\01:10:50.14\\\] That's the other half of our open source team - we have our outreach team and we have compliance... Of how do we make sure that we are respectful of those licenses? Not just because we're legally obligated to do so, because it's in the terms of the license, but it's the right thing to do. This person put this project out there for free, and we're driving a huge amount of value from it, and we want to acknowledge them. If that's all they ask, "Give me acknowledgment", which is what many open source licenses require, we're more than happy to do that, and we want to.

We actually spend a lot of energy in keeping track of all of the open source code that we use inside Google, and it's a lot of code. It's literally hundreds of millions of lines of open source code that we use inside Google. Keeping track of that is a lot of work, but it's something that we feel is really important to do.

**Adam Stacoviak:** For those out there following along with this show to take the next step, obviously you've got opensource.google.com, which is a new URL -- the old site was developers.google.com/open-source, which I'm assuming will now redirect... Is that correct?

**Will Norris:** Yeah, that's correct.

**Adam Stacoviak:** And then you've also got TODOgroup.org, which you can check out... And I believe you'd mentioned a mailing list that people can e-mail for feedback, which is todogroup@googlegroups.com... Is that right?

**Will Norris:** That's right.

**Adam Stacoviak:** Alright, we'll put all of those in the show notes. Will, thank you so much for taking the time, and more importantly, thank you for reaching out to us and planning this show with us. It's always fun to coordinate announcements like this; it's a big deal for us to have this conversation, it's a big deal for the community to have this conversation, to kind of humanistically dig into this announcement. You're gonna put a blog post out there, it will have one version, and then they can actually hear directly from you all the back-story, all the behind-the-scenes of this fun stuff... So thank you so much for coming on this show.

**Will Norris:** Yeah, I had a lot of fun. I appreciate being on it.
