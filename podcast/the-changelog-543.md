**Adam Stacoviak:** So we're here with Jeefy... But it's really Jeffrey...

**Jeffrey Sica:** Yeah. Full name is Jeffrey Sica, but pretty much everyone in the community calls me Jeefy. People even on emails say "Hey, please talk to Jeefy", and it's probably like "Okay, but why the heck is this person like J. Sica at the Linux Foundation?" It's like, no, everyone calls me Jeefy.

**Adam Stacoviak:** Right. How did you -- did you give yourself this Jeefy name, or is it...? I mean, it's your handle...

**Jeffrey Sica:** It is my handle.

**Adam Stacoviak:** Like, self-inflicted wound here?

**Jeffrey Sica:** No, no. Not even. A buddy of mine at this point like 25 years ago on ye old AOL Instant Messenger misspelled my name once. Stuck. Jeff, Jeef. And then the y was just like - you know, Jeef is pretty harsh. Most people like "Oh, Jeefy", because that's kind of like more of a pet name, and smooth to say, fun to say... So yeah.

**Adam Stacoviak:** What's your favorite peanut butter?

**Jeffrey Sica:** Alright, my mother --

**Jerod Santo:** I was gonna say, I thought your mom might have picked it.

**Jeffrey Sica:** My mother called me Jiffy Jeff for my entire life.

**Adam Stacoviak:** \[laughs\] I knew it!

**Jerod Santo:** She's a choosy mom.

**Jeffrey Sica:** And guess what? All we bought was Jif. "The Changelog, sponsored by..." \[laughter\]

**Jerod Santo:** Jeefy...

**Adam Stacoviak:** Jeefy. So what do you do, Jeff?

**Jeffrey Sica:** Recently, new title, shiny new title - head of projects at the CNCF. Most people, when they hear that, they go "Wait all of them?"

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I would think all of them.

**Jeffrey Sica:** Yeah.

**Jerod Santo:** Pretty much...

**Jeffrey Sica:** Honestly, what I'm really doing is I'm a community member first. I came up as a Kubernetes contributor. Been around for a while, so I know a lot of people, I know a lot of the communities and open source projects around it... So I can go and talk with them and figure out "Hey, what do you need? How can we help better? What can we do better to enable your project?" New projects that are coming in, "Hey, how can these projects potentially collaborate?" Because I'm an engineer first, and then kind of schmoozy, try to be nice to everyone second. So it's kind of hard to define my job, and a job description, but it's really talk to projects, see what the CNCF is doing, make community happy.

**Adam Stacoviak:** Gotcha. You take the requirements from the customers, and then you give them to the developers.

**Jerod Santo:** That's right.

**Adam Stacoviak:** I'm just kidding.

**Jeffrey Sica:** I joined the foundation, so I don't have to hear those words... \[laughter\]

\[07:59\]

*What you do within a tech is you take the specifications from the customers, and you bring them down to the software engineers.*

*Yes. Yes, that's, that's right.*

**Adam Stacoviak:** I recently watched Office Space, so I had to bring it in... Again.

**Jerod Santo:** How many projects are there?

**Jeffrey Sica:** 160. And right now, as of whatever today is -- the 10th, May 10th... I think there's 12. So there's some number above like seven or eight that are currently getting voted on to be adopted into what's called the CNCF sandbox. Think of it proof of concept projects, projects that don't necessarily have a large community, and they're looking to build a community - they apply to the CNCF sandbox, and then those get voted in. Yeah, I talk with my hands as well. I'm somewhat Italian.

**Adam Stacoviak:** I like it. I'm down with that. I talk with my hands too, when I get super-excited. And I'm super-excited right now. So you've got sandbox, you've got incubation, you've got graduated.

**Jeffrey Sica:** Oh, yes.

**Adam Stacoviak:** Okay. So you're not over all projects, but you are over most projects.

**Jeffrey Sica:** Let's talk to people in the CNCF and see which -- no. Honestly, it's over all projects, because I'm interacting with projects at every different level, it's just - I don't want to say I'm in charge of all of them. That's not true at all. But I would say I communicate with all of them, and I'm trying to help the CNCF work with projects in a better way.

**Adam Stacoviak:** Gotcha. Give us an example. How does that play out for recent, for you?

**Jeffrey Sica:** Recently, when I joined and one of the things that I've been really pushing for is a lot of the processes to grant projects access to cloud resources, that are like group cloud resources under the CNCF, or we have licensed scanning services - we want to give those to the projects, and then step out of the way. "Hey, we don't want to be the bottleneck." But most of the way that we grant that access is still a manual process, even though all of these things have APIs. Well, gee, you look at what Kubernetes has done with their community management... Like, creating a user group in Slack is - memes aside; like, laugh at home... You edit a YAML file. Oh, you're joining a GitHub group or you've become like a SIG chair, you're editing a YAML file. And then once that file is committed, it's just GitOps all the way down. Your access gets granted in GitHub, your access gets granted in Slack, all of that. Why don't we do that for all of these services that the CNCF is hosting? Right now, it's still ClickOps. That was cool when the foundation was 10 projects or 15 projects. We're at 160.

**Adam Stacoviak:** 160 projects...?!

**Jeffrey Sica:** And we're not slowing down.

**Jerod Santo:** And 12 more are being added. That's crazy.

**Jeffrey Sica:** No, those are up for vote... Those are up for TOC vote...

**Jerod Santo:** How many get rejected?

**Jeffrey Sica:** I actually don't have that off the top of my head. I would be willing to guess sandbox-wise it's probably 75% acceptance rate, but please do not hold me to that right now.

**Jerod Santo:** Alright, so 9 out of 12 are getting in.

**Jeffrey Sica:** Hey, hey...

**Jerod Santo:** \[laughs\] We're not naming names...

**Adam Stacoviak:** What is the - I guess "motivation" probably might not be the best word, but what does the CNCF do in terms of like -- you've got 160 projects... What's the long-term goal? Is it to be bigger than that? What service do you provide to the cloud-native world? What is it that you all do, or hope to do?

**Jeffrey Sica:** This is going to be interesting, because if you ask different people in the CNCF, you might get a different answer. And there might be a canned response, and I should know it... My answer is there is - aside from the couple stable patterns, like Kubernetes and the way that it has an API, and like declarative over imperative stuff, everything's stable right now. That pattern is established. What things and what problems, when consuming that pattern, need to be solved? A good example was "Okay, so now we can create all of these containers and orchestrate them in a meaningful way, but now we have a giant distributed system. What do we do in order to monitor that thing?" Well, Prometheus came out of that.

\[12:05\] So this is a long-winded way of saying we have this foundational technology, at this point we're accepting additional projects to help flesh out what cloud-native actually means. And the definition itself is evolving. We have a bunch of WebAssembly projects. Well, why is that? Because at its core, WebAssembly is - I don't want to say just another container runtime, because that would be bad. But it is another like application runtime. You build it a different way, it has a very different look and feel than a container, but still that idea still fits into the pattern of cloud-native. So that still solves a problem.

So - geez, what would I do? TL;DR, we're accepting a bunch of projects because not all of the problems or questions have been answered in what cloud-native is.

**Adam Stacoviak:** Gotcha. So you're attempting to, and in many ways succeeding in defining the foundation of cloud-native.

**Jeffrey Sica:** Yeah.

**Adam Stacoviak:** And everything was originally built on Kubernetes, because that's what I guess was the founding project that really kicked off... So we come back from the Dan Khon days, early CNCF days... Miss you, Dan. But like we were there when it was just two or three projects; a very small CNCF. The original founding days. And as we see it grow and grow over time, a lot of great stuff happened for open source, but you're on the inside, you see what's happening, you are in touch with all these projects. What is the mission? What is the endgame for CNCF?

**Jeffrey Sica:** Geez... Honestly, what is next? The definition of cloud-native in a nutshell is really doing distributed computing in a repeatable way. I mean, that's my definition, in my old noggin. But that doesn't mean always use Kubernetes. Sure, right now, hey, Kubernetes is -- I mean, you look at all the stats, adoption's still up and to the right; it's a hockey stick. That doesn't necessarily mean it's gonna be the same thing, or it's going to be THE answer.

So what is the end goal? We don't really have an end goal, aside from if you were doing some sort of distributed computing, like trying to solve or consume or build distributed computing, distributed platforms, how can we do it but make sure that how it's being done is in an open source way? Maybe Kubernetes goes by the wayside, and something else comes up. Maybe there is some new WebAssembly orchestration platform, and then everyone starts adopting that - we want to make sure that that's still possible.

Like, the reason why right now Kubernetes is like -- I don't want to say flagship, but the big thing that everyone thinks of with the CNCF is because of its popularity, not because the CNCF is saying "Everyone use Kubernetes." If something else just starts shooting up and to the right, we also want to be there to help enable them and make sure that the lessons we learned from Kubernetes just, again, hockey-sticking up, can be learned over here, so they have an even better experience than Kubernetes had. It had a lot of growing pains, so let's not have another project repeat that.

**Adam Stacoviak:** Do you all want all open source projects that support cloud-native to be a part of the CNCF?

**Jeffrey Sica:** Not necessarily. Well, that's probably not a good thing to say for, you know, me and my employer... But honestly, I think that would not -- part of the charter in the CNCF, specifically the TOC, is they are not kingmakers. The TOC, the Technical Oversight Committee, which is like elected positions - they're the ones that pick which projects get adopted, which projects aren't adopted; they dictate who's in the CNCF, and then we the staff enable them --

**Adam Stacoviak:** Support.

**Jeffrey Sica:** Support, do all that sort of thing. So I'm coming at this as... "My opinion, man..." \[laughter\]

\[15:57\] *"Yeah, well, you know, that's just your opinion, man..."*

**Jeffrey Sica:** Honestly, I tangented. I already forgot the original question. \[laughs\]

**Jerod Santo:** Right. We're always over here in The Big Lebowski...

**Adam Stacoviak:** I could ask it again...

**Jeffrey Sica:** \[16:09\] Please. I will do The Big Lebowski references for the whole podcast, that's the problem.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** These guys are trying to joke with me and I'm trying to ask a question here...

**Jerod Santo:** We're hoping you forget it, so that he doesn't have to answer it... I'm with you, but I'm just saying, he's trying to dodge it. Let's keep going... \[laughs\]

**Adam Stacoviak:** \[unintelligible 00:16:22.20\] Let's try again.

**Jeffrey Sica:** Sure.

**Adam Stacoviak:** So I'm curious, because it seems like you've got a repeatable way to support projects.

**Jeffrey Sica:** Yes.

**Adam Stacoviak:** So it makes sense that if it's supporting cloud-native, and it's open source, you'd want it as part of your organization.

**Jeffrey Sica:** I remember now, yeah. So I will go back to, like, there's my personal answer, and then there's probably the party line.

**Adam Stacoviak:** Can you give us the personal answer?

**Jeffrey Sica:** The personal answer is I don't think that would be healthy for the ecosystem. Again, the tangent of the TOC and the fact that they say they are no kingmakers - same thing; I also think that if all projects were in one foundation, that's probably not healthy for the ecosystem. Like, cloud-native does not mean it as a CNCF project. There are plenty of other cloud-native things that are not in the CNCF.

**Adam Stacoviak:** Right.

**Jeffrey Sica:** Like, there's Nomad. HashiCorp has Nomad; that's a container orchestration platform. There's still a lot of work being put in and around Nomad, but that's not --

**Adam Stacoviak:** But they're an IPO-ed company though, so it makes sense why Nomad isn't there, because that would be troublesome for their business.

**Jeffrey Sica:** True, but Nomad is an open source project.

**Adam Stacoviak:** There's a weight though to being a project in the CNCF. You have the CNCF landscape, so by nature, you want to communicate what is and isn't. But at the same time, doesn't that give it a weight to a project that is?

**Jeffrey Sica:** Well, landscape is a bad example, because the CNCF landscape has projects that aren't CNCF adopted, or CNCF projects.

**Adam Stacoviak:** That's true. I'll give you that.

**Jeffrey Sica:** So I was actually thinking Nomad might actually be on the landscape. I haven't looked.

**Jerod Santo:** Well, let me give you this example... So we've been here for eight hours, ten hours... I have talked to two people who have said, "Hi, I'm X, and I'm with Project Y. We're in the CNCF." And it's like, there's a --

**Adam Stacoviak:** A trend.

**Jerod Santo:** There's clout to that.

**Jeffrey Sica:** Yeah.

**Jerod Santo:** So aren't the TOC then -- I mean, they are kind of are kingmakers in that sense, right? Because they're the ones who decide who's in, and everyone who says that they're in, now they're like cooler than they used to be.

**Adam Stacoviak:** They can leverage the brand equity of the CNCF.

**Jerod Santo:** Right.

**Jeffrey Sica:** True. But in that case, the TOC isn't like picking one technology over another, at least with the sandbox. What's usually happening is they're judging maturity, whether it does fit -- like, whether it is a cloud-native thing or not. If my transcoding software, or some other random project that has nothing to do with cloud computing gets submitted to the sandbox - which that happens - TOC doesn't want... Like, that's not the CNCF. They're the filter.

**Jerod Santo:** Yeah, it makes sense that it has to be like inside the scope.

**Adam Stacoviak:** There's a velvet rope.

**Jeffrey Sica:** So my personal opinion is I don't think that's healthy for the ecosystem.

**Jerod Santo:** Sure.

**Jeffrey Sica:** But that said - and I think the party line would be "If you want to be supported in the ecosystem, and have the namesake of the foundation behind you - yeah, you probably want to join the CNCF." I also have feelings that sometimes, some projects probably shouldn't have applied. But again, that's my personal opinions, and the TOC are the people that vote on it. Not me.

**Jerod Santo:** Your job is to support the ones that do make it in, however they need support.

**Jeffrey Sica:** \[19:52\] Yup. And honestly, projects that aren't in the CNCF, but are in the landscape - I'm still like around to support and talk to, because again, I don't think this is necessarily a bad thing to have projects outside. Also projects outside looking in could potentially spawn other projects that do want to come in.

**Jerod Santo:** Sure. Do you like this job?

**Jeffrey Sica:** Yeah. Best job I've ever had, and I'm not just saying that because...

**Adam Stacoviak:** It's being recorded?

**Jeffrey Sica:** Because it's being recorded and I'm standing in a Linux Foundation event... No. My not-so-brief, but honestly, short resume career - I worked at the University of Michigan for 16 years, and then Red Hat for three. And then I started here a year and a half ago. So out of those -- not getting into like different departments at university, but out of those three areas, or places, Linux Foundation CNCF is the best.

**Jerod Santo:** And your path came through contributing to Kubernetes?

**Jeffrey Sica:** Yup. I actually did a little bit of contribution back in ye old days; we're talking 2014, when it was just open sourced and had to sign a Google CLA to contribute to it... Then my path at the university kind of took me away from it after probably a year, and then I started contributing again in early 2018, and wound up becoming Sig UI Chair. So the Kubernetes dashboard that some people kind of dunk on - they were having leadership issues; they just needed someone that could kind of come in and do more PM work. And also, I had a background in frontend work, so I came in and just helped them out, wound up becoming a Sig Chair for a few years, and then I stepped down after I mentored someone up.

**Jerod Santo:** Gotcha. It's a Cinderella story.

**Adam Stacoviak:** It's a Cinderella story... \[laughter\] So you say you like this job?

**Jeffrey Sica:** Yeah, I love it.

**Adam Stacoviak:** What do you like most? What is your favorite thing that you get to do every day?

**Jeffrey Sica:** I feel like this job actually has a real impact on people's lives. When I worked at the University of Michigan, one of the things I did was informatics, and like directly impacting patient care. I loved that. I'm not saying patient care and open source are similar, but there is definitely that impact where I know that I have helped and like impacted other people's lives here, similar to being able to help someone's patient care just by supporting like a clinical app that I wrote, that deals with the results. Different, but same. That just gives me warm, fuzzy feelings, because I don't know, I'm weird.

**Jerod Santo:** No, that's cool.

**Adam Stacoviak:** Make the world a better place. Change lives.

**Jeffrey Sica:** I was always taught to leave the world better than you found it. I'm one of those people that will make the bed in a hotel room when I'm leaving.

**Jerod Santo:** Hah! I didn't know those people existed.

**Adam Stacoviak:** They don't.

**Jeffrey Sica:** Okay, so I'm a psychopath apparently, or...? \[laughter\]

**Adam Stacoviak:** It's the endowment effect. That's what this is.

**Jerod Santo:** It's the Jeefy effect.

**Adam Stacoviak:** The endowment effect is that you don't wash your rental.

**Jerod Santo:** Say what?

**Adam Stacoviak:** You don't wash your rental car, for example. It's the endowment effect. If you own it, you think it's more valuable. And when you don't own it, you think is less valuable. That's why we don't wash our rental cars.

**Jerod Santo:** Yeah, but he makes his bed in his hotel room.

**Adam Stacoviak:** I know! He's the anti-endowment effect.

**Jerod Santo:** Oh, okay.

**Jeffrey Sica:** Have either of you -- I can never remember the social experiment or the dude that did this, but Do either of you know about the shopping cart? I don't even know what to call it...

**Jerod Santo:** No.

**Jeffrey Sica:** Someone decided that you can tell whether a person was - not necessarily good or bad, but more focused on the whole, versus the self, based on what they do in a grocery store parking lot. Do they put their shopping cart back where they are supposed to put it or not? And then you can watch people, and if other people will actually take the shopping cart, like someone else's and put it away - it's like, they're the people that actually want to make the world a better place.

**Jerod Santo:** Yeah. You know, in ye old days, supermarkets used to employ people that would walk your --

**Adam Stacoviak:** Well, guess what \[unintelligible 00:24:03.18\] still does it.

**Jerod Santo:** \[24:06\] ...stuff out to you. Do they still do that?

**Adam Stacoviak:** Sorry, I spoke too soon. They do it for some. Usually, for senior citizens, and --

**Jerod Santo:** Pregnant people...

**Adam Stacoviak:** I don't know about trendy people...

**Jerod Santo:** No, pregnant I said... \[laughs\] They're like "Nice shoes. I wanna walk your groceries out." \[laughter\]

**Adam Stacoviak:** Trendy people...

**Jerod Santo:** Do you remember that, back in the day? Were you around back then?

**Jeffrey Sica:** Yes, but... Kind of a small town in Southeast Michigan, that never really happened.

**Jerod Santo:** They never did that?

**Jeffrey Sica:** If it was a senior citizen, or someone that needed help.

**Jerod Santo:** There was a position called bagger. Wasn't it called bagger?

**Jeffrey Sica:** Yeah. I mean, they still have baggers around now.

**Adam Stacoviak:** There's still baggers in my grocery store...

**Jerod Santo:** Yeah, but the bagger would actually walk with you out to your car, and load the bags into your car, and then they'd take your cart and they'd take it back.

**Jeffrey Sica:** Now that's called whoever delivers something to your car when you mobile-order it from Target or like PetSmart.

**Adam Stacoviak:** I do miss those days. There's something about that. I think you're onto something, Jerod, because what you said you liked about your job, and how you get to change lives is similar to this, because every step of the way you get to support, you get to make the process, the experience a little easier, a little bit better.

**Jeffrey Sica:** Yes, the CNCF is the bagger position of open source. I see where this is going now...

**Adam Stacoviak:** Well, I've got mad respect for the CNCF... I think you've unified a diverse -- let's hypothesize... If the CNCF did never exist, or it was never formed, if cloud-native was never termed - or even if it is termed, it doesn't matter - how would the world be if there was no CNCF to tie it all together?

**Jeffrey Sica:** That's actually tough to hypothesize... So one of the biggest benefits, thinking at a super-high level, is we're a neutral place for these large vendors to be able to collaborate and essentially make everything better for the consumer in a standardized way. Take that away, and what do you have? You have --

**Adam Stacoviak:** Proprietary.

**Jeffrey Sica:** Everything winds up being proprietary...

**Jerod Santo:** Right. And wasted effort.

**Adam Stacoviak:** No clarity, no focus on users...

**Jeffrey Sica:** I mean, they'll focus on users so far as once they get you in there...

**Jerod Santo:** Silence.

**Jeffrey Sica:** ...you're locked in. Like, major vendor lock-in. I think that's the biggest thing.

**Jerod Santo:** Yeah. That's probably true.

**Jeffrey Sica:** The vendor lock-in would be horrible. I can't even imagine it. And I'm trying to remember back in Heroku, PHP, like 2008-2009 days of hosting web services, everyone kind of had their own thing... But even then, it wasn't that bad. Stuff made sense. But also, no one was really sticking around long enough to potentially have - I won't say a monopoly, but a lion's share to lock you in, so it doesn't make sense to shift elsewhere. At that point, everything was VMs, right?

**Jerod Santo:** Yeah, exactly.

**Jeffrey Sica:** So... Hey, look, I can spin up a VM on my box, make sure it works, and then ship the whole thing. It sucks, but doable.

**Adam Stacoviak:** Sure. Jeff, I'm glad you talked to us, man.

**Jeffrey Sica:** Dude, this is awesome. Thank you.

**Adam Stacoviak:** Thank you for sharing your story, and the CNCF stuff, and all that good stuff.

**Jeffrey Sica:** Shout-out to Kara for dragging me away from the booth...

**Jerod Santo:** Real quick, what's your favorite project, and what's your least favorite project? Go!

**Jeffrey Sica:** Absolutely not. I refuse. \[laughter\] This interview was over. Imagine me knocking over the microphone.

**Jerod Santo:** Well, not the project. But the people. Tell us who is your favorite person, and your least -- I'm just messing...

**Jeffrey Sica:** Oh, actually, I can at least tell you my favorite person...

**Jerod Santo:** Okay.

**Jeffrey Sica:** I had a co-worker who was also a roommate, who is also my best friend, and he's my best man; he was my best man at my wedding.

**Jerod Santo:** Oh, wow.

**Jeffrey Sica:** We worked at the University of Michigan since the start, we both moved departments from Pathology over to Advanced Research Computing. I went to Red Hat, he went to Google. My best friend is Bob \[unintelligible 00:28:08.06\] He lives down the street from me.

**Jerod Santo:** That's cool.

**Jeffrey Sica:** \[28:12\] We are almost inseparable, except when I get to go to events and he doesn't. Trust me, if he was here, I would have been asking for another microphone, because we just would have done that.

**Jerod Santo:** We have another microphone. We would have got him on.

**Adam Stacoviak:** We do have one more if we need it. So... Bob, come on!!

**Jerod Santo:** That's cool.

**Jeffrey Sica:** Oh, are you going to KubeCon Chicago? I'll drag him over.

**Adam Stacoviak:** Let's talk off-mic. I've got ideas.

**Jerod Santo:** Alright, thanks, Jeff.

**Jeffrey Sica:** Thank you all.

**Break**: \[28:38\]

**Adam Stacoviak:** So the Kubernetes API... That's what you work on, right?

**Eddie Zaneski:** I work on the CLI.

**Adam Stacoviak:** Oh, the CLI. Okay, that's an abstraction of that, right? You're actually interfacing with the API, with the CLI, right?

**Eddie Zaneski:** We're probably the biggest consumer of the API.

**Adam Stacoviak:** Okay... How does that work, the CLI?

**Eddie Zaneski:** So are you familiar with how the Kubernetes project is broken up into special interest groups?

**Adam Stacoviak:** School me. School me.

**Eddie Zaneski:** Yeah. So we've got to SIGs. So basically, every part of the Kubernetes codebase --

**Adam Stacoviak:** What does a SIG mean?

**Eddie Zaneski:** Special Interest Group.

**Adam Stacoviak:** Okay.

**Eddie Zaneski:** So we've got a SIG for API machinery; they own the API and the stuff that runs on the master nodes... So I work on SIG CLI, which is the SIG for the command line tooling. So it's kubectl, customize, KUI, which is a like GUI framework for kubectl... A couple other sub-projects... But yeah, so I've been working on that for four years now, and it's a lot of fun.

**Jerod Santo:** Kubectl, huh?

**Eddie Zaneski:** Yeah.

**Jerod Santo:** Is that official?

**Eddie Zaneski:** Well, you all noticed throughout this talk I say it many different ways on purpose, so...

**Jerod Santo:** Okay. So you rotate.

**Eddie Zaneski:** You just called me out early.

**Jerod Santo:** You're a diplomat.

**Adam Stacoviak:** So if you say kube cuttle here in a bit - that's on purpose.

**Eddie Zaneski:** I'm also gonna say Cub Ektal, so...

**Jerod Santo:** Cub Ektal. \[unintelligible 00:34:04.00\]

**Adam Stacoviak:** Oh, gosh. Who says Cub Ektal?

**Jerod Santo:** Well, if you wanna hit all the variations...

**Adam Stacoviak:** People say Cub Ektal?

**Eddie Zaneski:** Yup.

**Adam Stacoviak:** Is it for fun, or is it for serious?

**Eddie Zaneski:** I've heard both ways. \[laughs\]

**Jerod Santo:** Wow...

**Adam Stacoviak:** Why not, right? If you can interpret something 17 ways, why not be 18?

**Eddie Zaneski:** It's true.

**Jerod Santo:** I just think that maybe Kubernetes is so complex and intimidating that whenever we have people on to talk about it, we just bike-shed the kubectl thing. What do you think?

**Adam Stacoviak:** Sure.

**Jerod Santo:** I feel like you and I always end up right here, talking about the kubectl.

**Adam Stacoviak:** For sure. I mean --

**Eddie Zaneski:** You can go to kubectl.info, and it's a recording of Tim Hockin who originally wrote it saying how he pronounces it.

**Jerod Santo:** I think we had Tim on the show back in the day.

**Adam Stacoviak:** Yeah, we talked to Tim forever ago, basically. The godfather.

**Jerod Santo:** Yeah, when it first became a thing.

**Adam Stacoviak:** Yeah.

**Eddie Zaneski:** Nice.

**Adam Stacoviak:** He was at Google then. Is he still at Google?

**Eddie Zaneski:** He's still at Google, yeah.

**Adam Stacoviak:** Well, there you go. Food for you, Tim. Slay it. What should we know about the CLI? What's important with its development team, the SIG, how does it work...

**Jerod Santo:** Maintaining it...?

**Eddie Zaneski:** Yeah. So one of the hardest things we have to do is say no to people, all day.

**Adam Stacoviak:** Oh, I bet. I'm sure a lot of people have told you that, but... Everyone wants a short flag for everything, everyone wants a long flag for everything...

**Jerod Santo:** A lot of flags.

**Eddie Zaneski:** Everyone wants every feature as a flag or command...

**Jerod Santo:** How many flags does it currently have?

**Adam Stacoviak:** What's the language of the CLI?

**Eddie Zaneski:** It's all Go.

**Adam Stacoviak:** It's all Go. Okay.

**Eddie Zaneski:** Yup. Cobra...

**Adam Stacoviak:** I've been doing a lot of Bash scripting, and I'm like, you know, at some point I'm gonna graduate from Bash to something else besides Bash... But it does a lot.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** Like, Bash scripting is a lot of fun, and it's pretty powerful, but I feel like my next -- if I keep going in this direction...

**Jerod Santo:** GOing...?

**Adam Stacoviak:** Go. Yeah.

**Eddie Zaneski:** I mean, I feel like I'm learning Bash. I've never sat down to properly learn Bash, and you can do a lot with it.

**Adam Stacoviak:** Yeah. And thank God for ChatGPT, because I'm learning Bash left and right because of ChatGPT.

**Jerod Santo:** It's somewhat esoteric in my history, but I think having ChatGPT would make it super-easy to accomplish a lot of things.

**Adam Stacoviak:** \[36:00\] It is. I mean, there's a lot you can -- I mean, you can iterate quite a lot with it, which is a side tangent from crafting a CLI with Go, but...

**Jerod Santo:** Yeah, but even the looping and the conditionals inside of the loops... There's weird times where you use the square brackets, you don't have to, and then there's flags, there's conditional flags inside of the loops, and stuff...

**Eddie Zaneski:** How many square brackets do you use...

**Jerod Santo:** Yeah, multiple square brackets change things... It is esoteric, but powerful.

**Adam Stacoviak:** Very powerful. And it's already there.

**Jerod Santo:** And you use it just -- when I say 'you', I'm talking about me. You use it frequently enough that you always have to Google for the syntax.

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** So again, GPTs for the win on that one.

**Adam Stacoviak:** Yeah, for sure. And on that note, I am very thankful, because -- well, this isn't about ChatGPT necessarily, but I think it has flattened the world to allow people who are Go-curious, or Bash-curious, or scripting-curious...

**Jerod Santo:** Kubectl-curious...

**Adam Stacoviak:** Kube cuttle, or -- what was the other one?

**Eddie Zaneski:** Kube CTL, Kube Control... Kube Ektal...

**Adam Stacoviak:** Kube Ektal, yeah.

**Jerod Santo:** Which is kind of cool to say, actually. Kube Ektal.

**Adam Stacoviak:** You know what you want, you can describe what you want, but you can't quite get there. But if you learn enough, then you can repeat yourself, you learn that stuff, and...

**Jerod Santo:** This episode brought to you by Open AI.

**Adam Stacoviak:** That's right, there you go. OpenAI.

**Jerod Santo:** How many flags does Kubectl have?

**Eddie Zaneski:** Oh, man, I can't tell you that.

**Adam Stacoviak:** Gosh...

**Eddie Zaneski:** We've got a lot. We've got a lot of sub-commands. We've got probably 20 sub-commands, maybe more, and they all have lots and lots of flags. We basically have an entire framework just to add flags to the commands if they get instantiated.

**Jerod Santo:** Oh, yes, the old flagging framework...

**Eddie Zaneski:** Yeah.

**Jerod Santo:** What's the biggest challenge? So you said saying no, but... Maybe personally. Maybe not as a team, but personally. You've been on the project for four years; we didn't exactly hear about how you got there or anything like that, but what are the challenges maintaining a project of that high demand and use?

**Eddie Zaneski:** Definitely contributors. We have a saying on Kubernetes, "Chop wood, carry water."

**Jerod Santo:** Say again?

**Eddie Zaneski:** "Chop wood, carry water."

**Jerod Santo:** "Chop wood, carry water."

**Eddie Zaneski:** Kind of doing the unglamorous work that someone has to do... And we need people to just come do that; triage issues, respond to open pull requests, review... One of the things I encourage lots of new people to do is you don't have to be a reviewer for the Kubernetes project to go and review pull requests. Just doing an initial pass of being like "Oh, this is probably a better way to write this if statement, so you don't have like three else's under it." Just like little things. So that's what I encourage a lot of new folks to do, is just start reviewing code, just start responding to issues.

**Jerod Santo:** Just comment on the issue.

**Eddie Zaneski:** Yeah. Just comment.

**Adam Stacoviak:** Who's contributing to the CLI?

**Eddie Zaneski:** Who's contributing to the CLI?

**Adam Stacoviak:** Is it the SIG team primarily, or is it outside contribution?

**Eddie Zaneski:** So I'm sure every SIG would say --

**Adam Stacoviak:** How risky is the code?

**Eddie Zaneski:** Well, it's probably part of the oldest codebase of Kubernetes itself, because you build the API server, and the node, and then you build the CLI at the same time to talk to everything... So we've got a lot of dragons that are there, and a lot of stuff we come across, and... So it's funny, people don't realize that Kubernetes is all JSON internally. You hear the Kubernetes and cloud-native world complain about YAML...

**Jerod Santo:** YAML, yeah.

**Eddie Zaneski:** And Kubernetes doesn't know YAML internally.

**Jerod Santo:** It's all JSON, huh?

**Eddie Zaneski:** It's all JSON.

**Jerod Santo:** That's news to me...

**Eddie Zaneski:** So it goes JSON, to YAML on the response, and then when it comes to the command line, we actually marshal it back to JSON, and then we have to go from JSON to figuring out what Go type we have; so if it's a pod, or a node, or something. So that's a large chunk of the code that we maintain, is just dealing with marshaling from format to format to format, and then figuring out what Go struct we have at the end of the day.

**Jerod Santo:** Why don't you just go from YAML to Go struct?

**Eddie Zaneski:** From YAML to Go struct... We could.

**Jerod Santo:** That would just take one marshal out of the \[unintelligible 00:39:42.10\]

**Eddie Zaneski:** It would. It's working with the -- the Go YAML world is kind of interesting. We could probably talk about that for a long time. But we have a forked version of the Go YAML project.

**Jerod Santo:** Gotcha.

**Eddie Zaneski:** There's many different versions, and the project bundles --

**Jerod Santo:** But this one is yours...

**Eddie Zaneski:** \[40:02\] Yeah, the project bundles like three of them. One didn't like preserve comments or something in your YAML... So when you're dealing with client-side YAML for users, you want to keep their comments around, and...

**Jerod Santo:** Well, that's one of the problems with JSON, is like no comments.

**Eddie Zaneski:** No comments, right? So...

**Jerod Santo:** So you've got three YAMLs in there?

**Eddie Zaneski:** We've got a couple versions of the same library, yeah. We try to keep one, but YAML is a special case.

**Jerod Santo:** Sure. Well, you've gotta do what you've gotta do.

**Adam Stacoviak:** I like YAML. It's not the worst.

**Eddie Zaneski:** It's not as bad as people make it out.

**Jerod Santo:** No...

**Eddie Zaneski:** I'd rather write YAML than JSON.

**Jerod Santo:** Agreed, for the most part. I feel like you can shoot yourself in the foot more with YAML.

**Eddie Zaneski:** Yes.

**Jerod Santo:** And complex YAML is very complex. But simple YAML s very simple. So I'm not against it.

**Adam Stacoviak:** Yeah... JSON might be easier to read if it's prettier-ed, potentially.

**Jerod Santo:** Yeah. It's more verbose.

**Adam Stacoviak:** Yeah. You can see the indentations and the nesting a lot better than you might, I guess -- well, I guess you can see either of those pretty easily, but...

**Eddie Zaneski:** I like it in YAML because my editor can show me the number of tab indents I have. So it can show me a 1, 2, 3, and that's really nice to see.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So that's your biggest challenge, is this marshaling around YAML?

**Jerod Santo:** Contributors!

**Eddie Zaneski:** New contributors, for sure.

**Adam Stacoviak:** Contributors.

**Eddie Zaneski:** Yeah. So people working on the project - I work with people from Google, Red Hat, we had someone from Shopify that unfortunately just got laid off; pour some out... A bunch of Googlers, Red Hatters.

**Adam Stacoviak:** Not gin though. Don't pour your gin out.

**Eddie Zaneski:** Yeah. And then we have people who come by and they want to get involved in Kubernetes, and they're curious about things, and the CLI seems like a great entry point. As a project, we're still struggling with mentorship programs and onboarding. And one of the hard parts is maintainer burnout, because we can -- early on, I was very happy to sit down with someone for hours, and just walk them through stuff, answer every question, help them write their code... And then they make their one contribution, and then they disappear and don't come back. And you do that enough times and you're feeling really crispy, so...

**Jerod Santo:** Yeah, it makes sense.

**Adam Stacoviak:** Do you do videos? Do you find ways to not repeat yourself in that way? So you can say "Here's me telling you how to do these things, and sit down with you." Maybe there's a video you could do, or documentation... That seems to be the easy -- you know, "Hey, why don't you just do documentation?" But is there a way you can sort of put down the wisdom, so to speak, from a mentorship perspective, and succession planning...? This is something that's big for Maintainer Month, is how can you operate with balance as a team, as an individual, and then also, how can you plan for secession when it's necessary?

**Eddie Zaneski:** It's definitely something we're working through with the project. We have tons of developer documentation, probably too much, that people don't read. It's overwhelming when you first come in. Getting your development environment set up - it's so many moving pieces. And container runtime really only works well on Linux, and most people aren't running Linux as their OS...

**Adam Stacoviak:** How dare them?!

**Eddie Zaneski:** Right?!

**Adam Stacoviak:** Linux. Linux for life!

**Eddie Zaneski:** But it's something we're definitely trying to work towards. We want to make as much onboarding materials as we can. We've had mentorship cohorts, but at the end of the day it's very complex as a codebase. And it's just old, and there's so much -- we don't say tribal knowledge anymore. What do we say? Preconceived knowledge...

**Adam Stacoviak:** Wisdom... Experience...

**Eddie Zaneski:** Decisions that were made a while ago, right? And people come in headstrong, really wanting to help out and contribute, and it's like "Well, we tried that, and here's why it didn't work six different times." And that is the hard part, is the context and the history; how do we communicate that to new people.

**Adam Stacoviak:** \[43:54\] Right. What's the process to become a contributor long-term? You put time into this person, you watch their codebase, and they gave one contribution and never came back. What is the process to have a long-term contribution plan? Is there a term of service? We hear from OSPOs like "Hey, comfort term of service." That means maybe a year, maybe it's six months, maybe it's three years... And then there's repetition in that... How do you all plan that out? Is there a form and function around that?

**Eddie Zaneski:** Do you know Mike McQuaid?

**Adam Stacoviak:** Yup.

**Eddie Zaneski:** So Mike McQuaid - he's the lead maintainer for Homebrew, and he's got a blog post that he wrote back in 2018 that's kind of resonated with me. It's "Don't mentor first-time contributors. Don't mentor second-time contributors. Mentor third-time contributors." And it's the idea that - like I explained, you get burnt out if you keep spending time on people who just don't come back. But if they've made two contributions, and they've come back for the third, it's like "Alright, cool, you're in it. You've gone through the hard part, the weeds. We can grow you into a maintainer." Because that's the goal at the end of the day, is to grow people into maintainers. We want as many as we can get.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What brings somebody back three times to the Kubernetes CLI, for example? What does is it that brings them back? Is it because they have a vested interest, they're super-curious, they have funded time interest, their employer pays for it? What are the attributes of a person who comes back again and again?

**Eddie Zaneski:** I don't have a good answer. I really don't. It's people who want to get involved and contribute back, and some people might be encouraged to get involved in open source... Some people want to learn Go, they want to learn Kubernetes in general... Yeah, we see people come for all different reasons. Some people really just want to build their resume, and just want to build up their GitHub stats, and show that they've contributed. So yeah, it is hard to filter through and apply the right time to the right folks.

**Jerod Santo:** So what do you think of this word, "rewrite"? Do you like that word?

**Eddie Zaneski:** It's a word... \[laughter\] It's part of the English language...

**Jerod Santo:** Okay... Have you ever considered it with the CLI? Not throw one out and start fresh, but start fresh alongside the one that exists.

**Adam Stacoviak:** Oh yes, the parallel...

**Jerod Santo:** The old big rewrite.

**Adam Stacoviak:** The parallel rewrite.

**Jerod Santo:** Because you've got a lot of baggage, according into you. And that's perhaps scary, but maybe in an open source world not so bad way of like - instead of just like trying to bring this one up to snuff, you just maintain it status quo and rewrite the sucker.

**Eddie Zaneski:** Yeah, so we have an initiative that we've been rewriting commands to like our new pattern that's more concise, and we've got like the options and the flags dangling off the command struct, and... You know, in the Go world that makes a lot of sense.

From scratch is an interesting one... The Kubernetes project as a whole - we are terrified of breaking users. So the example I like to give is I've been trying to get delete confirmation into this CLI for the longest time. When you delete a namespace in Kubernetes, you delete everything that was in that namespace. When you accidentally delete all namespaces in your cluster, you've wiped everything out, and you're gonna have a bad time. And I could show you tons of GitHub issues where people say, "Why was it so easy for me to make this mistake? Why didn't it ask me are you sure you want to blow everything away?" And the reality is that we can't just start asking, "Are you sure you want to delete everything?" because your CI pipeline would break? We'd break everyone's build. People are updating their CI runs and they don't know what version of the client they're using. They don't really read the release notes. So that's just an example. I've been trying to get delete confirmation in since I started.

**Jerod Santo:** Isn't that what semver is for? Major release.

**Eddie Zaneski:** We don't want to do a major release for the project. As far as we know, we can barely get people to upgrade the minor versions.

**Jerod Santo:** But majors are easier, because people get excited.

**Adam Stacoviak:** That's right. Is there something to learn from the way Linux is distributed? Like, LTS'es, and versions, and... I mean, every time I do a new Ubuntu installation, it's 18, it's 22, it's 20... And I'm cool with that. There's an LTS, there's a spectrum of risk... It's clear... Is that a possibility with the CLI? I mean, this is a crucial piece. It's like the centerpiece for Kubernetes, for the most part, right? It's the main consumer of the API.

**Eddie Zaneski:** \[48:14\] It's definitely the first thing you reach for, right?

**Adam Stacoviak:** Right.

**Jerod Santo:** Yeah.

**Eddie Zaneski:** There are two answers there. So the first one - LTS is actually something we just started talking about again. So we were on KubeCon in Amsterdam two weeks ago, and Jeremy Rickard from Microsoft revived the talk around the working group for LTS. So we did it a couple years ago, we determined that it wasn't something we wanted to do or support at the time, or had the capability... So that just got revived two weeks ago.

And then the other thing, kubectl is versioned as part of the Kubernetes project itself. So I can't release a separate version of kubectl.

**Jerod Santo:** That makes it harder.

**Adam Stacoviak:** It does.

**Eddie Zaneski:** Yeah. So we do have a proposal out that probably needs to get revived, but that was something we wanted to do. But then you get the problem of the compatibility and skew matrix. What version of the client is supported by what version of the API server?

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Useful software gets upgraded. Here's one thing we learned from GitHub, and a lot of other things out there, where it's like, permission to mess up, permission to do something different. If you can release a different version of it in parallel, that has what everybody wants, and it fixes all the problems, and maybe internally it's easier to develop, and it's potentially easier to have contributors, and easier to document... Like, that has potential; there's an opportunity for that useful software just to get upgraded, because hey, this is just so useful. This person is using it, that company is using it... And it's sort of like a social norm to upgrade, because it's just... Useful.

**Eddie Zaneski:** Right. The rewriting thing would probably get like -- it probably would be impossible to get through. Any significant changes to the project go through what we call the KEP process, the Kubernetes Enhancement Proposals. And I could just see like opening a KEP for "Rewrite kubectl", and just like "No." That just gets closed, right?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What if you already did it?

**Eddie Zaneski:** What if we already did it?

**Adam Stacoviak:** That's right.

**Jerod Santo:** A first-time contributor shows up, "I rewrote this..."

**Eddie Zaneski:** There's nothing stopping us or anyone from doing that. The reality is we are changing the tires on a bus that's moving 1,000 miles an hour down the highway, right?

**Jerod Santo:** Maybe it actually turns into more like a yarn and npm kind of situation, where it's not you guys that rewrite it, but it's somebody else that comes alongside and says, "Well, we can write our own CLI against the Kubernetes API, and here's seven ways it's better. And hey, who wants to use this?" And I don't know if you can actually just side-install that sucker and use -- maybe it's kubectl with -cuddle, or something.

**Eddie Zaneski:** That's a conference now.

**Jerod Santo:** Oh, it is?

**Eddie Zaneski:** Yeah.

**Jerod Santo:** Dang it!

**Eddie Zaneski:** In a perfect world that, Kubectl wouldn't exist, right?

**Jerod Santo:** Why is that?

**Eddie Zaneski:** You can think of it like SSH for a server. I don't want my developers SSH into my server. I don't want my developers pushing and making configuration changes to my production server. I want a trusted build entity that is applying these changes after they've been reviewed. So it's just kind of giving the developer keys to the castle.

**Adam Stacoviak:** Deleting namespaces.

**Eddie Zaneski:** Yeah. I'd rather not have to give people the client in the first place. So I think instead of building one from scratch, I'd love to see us get to a point where the GitOps tooling and all this other stuff is in a place where you don't need it in the first place.

**Adam Stacoviak:** You can rewrite it in a different route, through --

**Jerod Santo:** \[laughs\] Write something else.

**Adam Stacoviak:** ...in the GitOps world build that thing to make it obsolete.

**Eddie Zaneski:** Yeah, that's fair.

**Jerod Santo:** And then you can take a vacation. \[laughter\]

**Eddie Zaneski:** Yeah, I would love one of those.

**Adam Stacoviak:** What I like about this podcast though is we look at things like yarn and npm, we look at -- we're not only in this cloud-native specific world, and sort of have tunnel vision; we sort of see outside of all of software, "What was done here to solve that problem, and what was wise about that choice that we can apply here?" That's what I love about the conversations I think we get to have, is that Jerod and I have the luxury and the privilege to speak software at large, really.

**Jerod Santo:** \[52:18\] Right. Plus we get to bike-shed things but not actually be the person that has to go paint the bike-shed...

**Adam Stacoviak:** That's right. We can give you the idea, Eddie. We're like "Godspeed, bro."

**Jerod Santo:** "I told Eddie to rewrite the thing, and he just won't do it." \[laughter\]

**Eddie Zaneski:** I've got a good one for you all then.

**Jerod Santo:** Okay...

**Eddie Zaneski:** So I also work on the build and test infrastructure for the project. And we're unique as a project in that we handle distribution of all of our own artifacts and binaries. And our artifacts aren't just binaries, they're containers and OCI images. So our CI bill is like $3 million a year. Google gives us $3 million of GCP credit - shout-out to them. Thank you, Tim.

**Jerod Santo:** Wow.

**Eddie Zaneski:** And I think it cost us like $250,000 a month for storage and network ingress and compute. And egress. And we're working very hard to get that down, actually. Amazon just also gave us a $3 million donation, and we set up a registry proxy --

**Jerod Santo:** Woo-hoo!

**Eddie Zaneski:** Yeah, thank you to Amazon. And for a while, everyone was downloading from our container registry. Because you can't just mirror a container registry like you can mirror a Linux kernel, right? So I think some work can probably be done on that space, but that's a problem that we deal with, that a lot of other projects don't deal with... We have to distribute and front the bill and host all this stuff ourselves.

**Adam Stacoviak:** That's a big bill.

**Jerod Santo:** That's a hard problem.

**Adam Stacoviak:** $3 million, just for CI.

**Eddie Zaneski:** Yeah.

**Jerod Santo:** Have you tried R2? \[laughter\] Free egress...

**Eddie Zaneski:** We are talking to Cloudflare for a bunch of different things.

**Adam Stacoviak:** They would love that, I bet.

**Jerod Santo:** I assume so, yeah.

**Eddie Zaneski:** Yeah, hopefully they help us out.

**Jerod Santo:** Yeah.

**Eddie Zaneski:** We want to do caching too, with Cloudflare, or Fastly, or someone. So shout-out to them, please...

**Adam Stacoviak:** We like them both.

**Eddie Zaneski:** We're very expensive as an open source project to support.

**Adam Stacoviak:** And crucial. It's a cloud-native world... Just trying to operate in it.

**Eddie Zaneski:** Yeah. \[laughs\]

**Adam Stacoviak:** You probably know our audience, to some degree... What else is left unsaid? What else should our audience know about crafting the CLI, and interacting with potential contributors, and...

**Jerod Santo:** Maintainer hacks...

**Adam Stacoviak:** Yeah, maintainer hacks... Sure.

**Eddie Zaneski:** So my maintainer hack is that I triage new issues first. And people kind of -- this is controversial, probably. A lot of people say you should start with the oldest issues, and triage them. We've found that our newest issues are probably the most relevant, just because -- we get hundreds of issues a week open on the project. And the way that the Kubernetes repo works is we have the main KK repo, the Kubernetes/Kubernetes repo, and then we have a staging repo. So a kubectl is a staging repo. So we don't actually accept pull requests to kubectl as a repo; it has to be made to the main project in the staging directory, and that gets replicated to our repo. So we track issues in both places, and we take PRs in one. So we've got issues all over the place. I can barely keep up with the issues that are on my repo, let alone the main one, so...

**Jerod Santo:** So first in, last out.

**Eddie Zaneski:** Yeah. So I start with the newest ones, because they're usually the freshest and most relevant, and a lot of times we can just close them right off the bat, because it's a support issue, or something else...

**Jerod Santo:** Or a new flag, and you're just like "No."

**Eddie Zaneski:** Or "You're eight versions behind. Please upgrade and try again."

**Jerod Santo:** Or it's an issue that's like "Help. I just deleted my whole namespace." \[laughs\]

**Eddie Zaneski:** Yeah, that one is really hard to --

**Adam Stacoviak:** "Sorry about that. Can I send you a bottle of gin, or commiserate with you?"

**Eddie Zaneski:** Yeah... We do have plans for that though. So we have been working on trying to get that in.

**Adam Stacoviak:** What is your day like with issues? How many hours a day, either directly in issues, or procrastinating, do you spend on issues?

**Jerod Santo:** \[55:57\] Procrastinating... \[laughs\] Wow. What a call-out.

**Eddie Zaneski:** Yeah. So - surprise, Kubernetes isn't my full-time job.

**Adam Stacoviak:** Okay...

**Jerod Santo:** Oh, I thought it was.

**Eddie Zaneski:** No. I used to work on the EKS team at Amazon. So I would spend most of my days on Kubernetes, and now I do stuff with supply chain security, and some other projects, like sigstore. It's an OpenSSL project.

**Jerod Santo:** Yeah.

**Eddie Zaneski:** But yeah, so we have a bug triage once a month that we go through, where we'll go through as a group... And the idea behind this was that knowledge transfer, where we can talk through the history and the context that people don't have. And we invite lots of new people. So if you're listening and you want to get involved, join us for our bi-monthly, our once a month bug scrub. We have bi-weekly SIG meetings...

**Adam Stacoviak:** You went from twice a week to every other week, to once a month, real quick.

**Eddie Zaneski:** I have a Kubernetes meeting every Wednesday. So bug triage is once a month, and then our general SIG meeting is twice a month.

**Adam Stacoviak:** Gotcha. Okay.

**Eddie Zaneski:** And so join us for that. It's github.com/kubernetes/community, and then the SIG CLI folder right at the top, it has meetings... So it's all public agenda, and it's all recorded, so... 9am Pacific time.

**Jerod Santo:** Cool.

**Adam Stacoviak:** There you go.

**Jerod Santo:** Well, thanks for talking to us, Eddie.

**Eddie Zaneski:** Yeah, thanks for having me, y'all.

**Jerod Santo:** This was fun.

**Adam Stacoviak:** It was a blast.

**Eddie Zaneski:** Let's play Zelda...

**Jerod Santo:** Let's play Zelda.

**Eddie Zaneski:** That was awesome, guys.

**Jerod Santo:** Yeah, man...

**Eddie Zaneski:** Thank you so much.

**Jerod Santo:** That was fun.

**Break**: \[57:16\]

**Adam Stacoviak:** Where should we begin?

**Jerod Santo:** Dapr.

**Adam Stacoviak:** Dapr. Let's begin with Dapr.

**Yaron Schneider:** Alright.

**Adam Stacoviak:** Open source, CNCF, graduated...

**Yaron Schneider:** No, not yet.

**Adam Stacoviak:** Not yet. Okay. Sorry.

**Yaron Schneider:** \[59:48\] It's incubating. We will graduate at some point, but we're not rushing it. We want to make sure we get the most out of the CNCF incubating stage. We are doing lots of things in the CNCF, integrating with other projects... We really want to make sure we have this core integration with all of the other CNCF projects before we graduate.

**Jerod Santo:** Okay. So yesterday you said you started Dapr at Microsoft...?

**Yaron Schneider:** Microsoft, yes. That's correct.

**Jerod Santo:** And you're working for them, and you built Dapr as an open source project...

**Yaron Schneider:** Correct.

**Jerod Santo:** And then -- well, first of all, what was it? And then tell that story. What was Dapr when you built it then, and what happened next?

**Yaron Schneider:** Yeah, so in 2018, I was at Microsoft and I was working for the Azure CTO, called Mark Russinovich. That was an incubations team whose job was basically to look for bleeding edge technologies and come up with innovative open source technologies that could really give Microsoft a boost in the ecosystem. And yeah, I was mostly working on open source. I was contributing to Kubernetes, TerraForm, a bunch of other projects along that lines... And then I met someone called Mark Fussell, who today became the co-founder of my company, Diagrid. And we were looking into how can we improve the lives of application developers, not necessarily DevOps or infrastructure people, on top of Kubernetes in the cloud native space? Because the ratio between the DevOps engineers and the application developer is ten to one in the favor of an application developer. We call them the silent majority of cloud-native, because if you look at the CNCF ecosystem, most of it is around how you GitOps, and ops, and security, and supply chain, and CICD... But there's no one out there that's really solving the problems of like core distributed systems challenges. And this is why we came up with Dapr as this core tool that developers can use to focus on their business logic, and not distributed systems issues.

**Jerod Santo:** Okay. A core tool so developers can focus on their business logic and not distributed systems problems, is that what you said?

**Yaron Schneider:** Yes. Yeah.

**Jerod Santo:** What are the distributed systems problems, and how does Dapr deal with them?

**Yaron Schneider:** So for example, as a developer you have to make sure that your application is first of all secure, and second of all reliable. And that usually translates into a lot of boilerplate code that you as a developer need to write on your own, to basically make your application more secure wherever it's running. And Dapr will basically give you the security and reliability features out of the box, immediately.

And then you have to write state, you have to manage state at scale; you might be writing to Redis, or DynamoDB, or Cassandra, or Google Firebase. But if you have multiple services running the same data all at once, you're probably going to want something like first write wins, or last write twins. And you're gonna have to do Pub/Sub, and leader election, and config management, and secret management, and all of these infrastructure things really add up, when all you want to do is focus on your business logic so that you can ship your feature out and get your next promotion, right?

**Jerod Santo:** Right.

**Yaron Schneider:** And so Dapr really gives developers these APIs that give them all these Pub/Sub async eventing paradigms and service-to-service invocation and stateful management paradigm so they can focus on what matters most of them.

**Jerod Santo:** So would you describe it as a framework, or a toolkit, or...?

**Yaron Schneider:** Yeah, I think a framework is a good definition of it. It's an API that you call, so it doesn't compile into your code. It's a sidecar architecture. So there's a process running next to your application, you talk to it via HTTP or gRPC, which makes the app really inclusive, because if you're a developer coming from Python, Java, C\#, Rust, whatever language, as long as it can talk HTTP, it can talk to Dapr.

**Jerod Santo:** Okay. And so there's a bunch of client libraries probably for different languages that talk to Dapr?

**Yaron Schneider:** Yeah, there are. They make the development experience nicer. But if you want to, you can just drop down into HTTP and gRPC directly.

**Jerod Santo:** Sure. Alright, so I have my business logic, and then it's calling over to Dapr and telling Dapr to store some data, give me some data...

**Yaron Schneider:** \[01:03:40.01\] Yeah. Handle state at scale for you, do Pub/Sub between services... Yeah. But then the nice stuff for ops people is that no matter where you're running, you can basically tell Dapr to work with the infrastructure of choice for your team. So Dapr doesn't replace a state store, or a Pub/Sub, or a configuration store. It actually has this component model concept where you can plug it in to work with whatever database or Pub/Sub or secret store your cloud's running. So we have 100 of these community-contributed components that we maintain, and as a DevOps person, you can say "Hey, if I'm running Google Cloud, I'll have Dapr work against Firebase", running on-prem, it'll work against Redis, and as a developer, you get really consistent API. So in a multi-cloud environment, you write your code once and you can basically configure Dapr to work against whatever infrastructure you're running.

**Jerod Santo:** That sounds cool. Is there like a Dapr stack? Is there like a default set of "These are the plugs that we recommend you plug in", but you can plug in whatever you want?

**Yaron Schneider:** Yeah, you can basically plug in whatever you want. So that's a really good question. We have the concept of a pluggable component. So for example, if you are using Dapr to talk to some proprietary system that you can't contribute upstream back to Dapr, we have a way for you to write that plugin and run it on your own. But we also have maturity levels. So we have alpha components, beta components, stable components, and we recommend people use stable components for production. Other than that, you're free to do whatever you want. Dapr will make sure that all the best practices are really encapsulated in the API calls for you.

**Jerod Santo:** So how did Dapr escape Microsoft? Or how did you escape Microsoft with Dapr, or...?

**Adam Stacoviak:** ...was there an escape at all?

**Jerod Santo:** Or maybe you just left?

**Yaron Schneider:** Yeah, so Dapr was open sourced first in October 2019. It really picked up. We have a lot of end user adopters today, from IBM, to Microsoft, to Alibaba Cloud, NVIDIA... And NASA is running Dapr in outer space as we speak, by the way.

**Jerod Santo:** That's cool.

**Yaron Schneider:** I think that's the coolest use case of Dapr.

**Jerod Santo:** That's gotta feel good, right?

**Yaron Schneider:** Yeah. It's like the ultimate edge deployment, which is nice. And so it really picked up, we saw a lot of community contribution... Then we decided that we're gonna give it to a foundation, because we want to really make sure that it grows and that we bring other vendors in, and other companies. So it arrived in the CNCF, and we were, I think, the first or second project to make it straight into incubating. We skipped the sandbox phase, because we already had a lot of end user adoption, a lot of contributions coming in... And yeah, since then, the project really took off, and at some point VCs basically came up to me and were like "Hey, you know what - how about you \[unintelligible 01:06:13.26\] Microsoft? We think there's gonna be good business here." And I basically told all of them no. So I was focused on my career at Microsoft, and Mark, my co-founder of Dapr and Diagrid also, which is our company, was also busy having Dapr really take off the ground.

And a year later, we were having a hallway conversation, we were like "Look, we think Dapr can have a much broader future, and we have our own vision for distributed systems and where this can go, and this needs to happen outside of Microsoft." So yeah, we basically started Diagrid.

We left Microsoft in very good terms. We're still very friendly with all the people there. Microsoft is doing an awesome job on the project. They're contributing to the project, along with Alibaba and Intel; they're the main contributors who are on the Dapr steering committee, alongside us, Diagrid. And yeah, it's been a fun ride.

**Jerod Santo:** It's pretty cool to be able to start a project inside of Microsoft, work on it at Microsoft, for Microsoft, donate it -- or not even donate it. It's not the right word. When you CNCF something, is it donated?

**Yaron Schneider:** Yeah, it is donated.

**Jerod Santo:** It is the right word.

**Adam Stacoviak:** It's the right word, yeah.

**Jerod Santo:** Okay, donate it to the CNCF... And then start a company around it that builds on it, or around it, or for it after that, as a startup...

**Adam Stacoviak:** Managed. It's a managed version of it.

**Jerod Santo:** Yeah.

**Yaron Schneider:** Yeah.

**Adam Stacoviak:** That's a beautiful world, man. You were kind of saying no for a while.

**Yaron Schneider:** \[01:07:41.21\] Yeah, for a long while I was so focused in building Dapr into Azure Services, like Microsoft managed services. They have a service that integrates Dapr, so that's what I was working on. And I always thought I would be like an entrepreneur, and start my own company at some point, but I didn't see it coming at that point in time, so I told the VCs "It's not for me right now." But some of them persisted, and in the end we took it and went.

**Jerod Santo:** So what turned the no into the yes? Was it a deal you couldn't turn down from a VC? Or was it your partner that was like "Come on, let's do this"?

**Yaron Schneider:** It was a combination of things. I think mostly we saw Dapr really take off and we figured out yes, there can be a business model, especially around helping enterprises operate it on Kubernetes. Kubernetes is a complex piece of software to operate, and so we really saw the struggle of developers operating Dapr on top of Kubernetes and we knew we had something to give there. This is not something we could have done with Microsoft.

But also, ultimately our vision is to come out with a distributed systems API platform that developers from serverless platforms, and really platforms from all types of compute can leverage. So it's like serverless Dapr. You can run it outside of Kubernetes, you can run it wherever you want. And to do that, it needs to be multi-cloud, and so that was another reason why we thought we'd leave Microsoft and started with our own company. We really want to build our vision of distributed systems through the Dapr APIs.

**Jerod Santo:** Okay. What year was that, when you started Diagrid?

**Yaron Schneider:** It was January 2020.

**Jerod Santo:** So a year ago plus, and change.

**Yaron Schneider:** Yes.

**Adam Stacoviak:** There's some nice logos here. You've got IBM Research - this is for your company, Diagrid. IBM Research, Intel, Microsoft... Hey, it makes sense. You did that integration. Alibaba Cloud, Huawei, Bosch, Ignition Group, Tencent... I mean, these are major enterprise players.

**Yaron Schneider:** Yeah. And there are a lot of other players who have not come out as public adopters yet. Really, some of the biggest names in the industry. And what's fascinating about Dapr is that it was adopted by the tech-savvy enterprises before it was adopted by startups, for example. And you usually see it the other way around.

**Jerod Santo:** Yeah.

**Yaron Schneider:** As a company offering commercial products on top of Dapr, we're not complaining. That's worked out really well.

**Jerod Santo:** That sounds great for you guys. Why do you think that was? Is it because it solves enterprise-scale problems, or...?

**Yaron Schneider:** Yes, I think startups, what's most important to them is to make sure that they deliver on their business, which means they want their infrastructure to be as reliable as possible. So they're not as likely to take on new bets on new technologies. But enterprises, on the other hand, they have resources, and they look at new technologies as a way to go to market faster, reach go to market faster, and really outpace your competition. So they're much more open to new tech. And I think also it coming from Microsoft really gave it like the enterprise stamp that made people feel really comfortable adopting it.

**Adam Stacoviak:** For sure, yeah. Why is it important to have a managed version of Dapr?

**Yaron Schneider:** Yeah, so if you're running on Kubernetes, for example, you need to manage Dapr yourself. And as an as a developer, you just talk to the Dapr APIs. It's easy. But as an ops team, it's really difficult to babysit the control plane. On Kubernetes, every type of technology that has a control plane that manages a data plane, like a service mesh - you know, Istio, Linkerd, Consul - Dapr is no different. It's really troublesome, it's a lot of cognitive overhead for infrastructure teams.

**Adam Stacoviak:** For large teams.

**Yaron Schneider:** You need to upgrade, downgrade, do certificate renewals, monitor, observe the infrastructure... So we basically do it for you, and we take all of that pain away for you. And then the other products we're coming out with is serverless Dapr, so using Dapr outside of Kubernetes on whatever compute platform you want: browser, WASM, Edge, Google Cloud Run, AWS, Lambda... Whatever computer you're running on, you'll be able to use Dapr.

**Adam Stacoviak:** Is it a problem of scale that makes you want to go managed, or is it -- like, if I'm a small team with, let's say, a three-node Kubernetes cluster... Is managing Dapr, myself, my ops team - not a big deal, right?

**Yaron Schneider:** Yeah. If you're a small operation, then managing Dapr yourself will probably be something that \[unintelligible 01:11:44.16\]

**Adam Stacoviak:** Right. It's once you go to much, much bigger. Huawei size, IBM Research size.

**Yaron Schneider:** \[01:11:53.24\] Well, slightly smaller than that, too. We have really good end users for Diagrid, like Sharper Image, for example. They're a midsize company. They wrote their own application platform, and they replaced it with Dapr internally, because they wanted to really \[unintelligible 01:12:06.29\] something that was standard. And they're a five-person development team, I think, and they're using our services to manage it, because they're a small team. They want to focus on their business logic. They don't want to focus on managing Dapr. So this also helps smaller teams.

**Adam Stacoviak:** Yeah. Can you speak to the reluctant founder journey, to some degree? You said you eventually wanted to be an entrepreneur, you just wasn't sure when... And speak to the "I have this open source project, I incubated, or I am incubating inside of CNCF." Why incubate or donate to the CNCF? What does that benefit the project? Can you speak to all those details, for those listeners out there who are thinking, "I'm you, I'm a version of you at some point. I may do something like this." Why did you take this route? Why does this donation makes sense, and this whole route make sense for, I guess, your journey?

**Yaron Schneider:** Yeah. So we donated Dapr to CNCF while we were at Microsoft. And the main reason why we did that was to really gain new contributors. Dapr had a lot of contributors, but being vendor-neutral is something that's really important. If it's a project that spins out of Microsoft, or AWS, or Google, and it remains under their proprietary licenses or control, then users of other clouds might not feel so much inclined to take a bet on it... Because they will go like "Oh, it's a Microsoft thing, or it's an AWS thing, or it's a Google thing." But when you're doing it with CNCF, you get this vendor neutrality, and you gain these new audiences of contributors who are coming in from every walk of life; every cloud platform or technology that contributed to your project. So your end users grow, your contributor audience grows, and people see that this is really something that can adhere to many users, from many cloud platforms. We didn't want it just to become an Azure thing.

**Adam Stacoviak:** So the primary benefit is vendor-neutral.

**Yaron Schneider:** Yes.

**Adam Stacoviak:** And new contributors, because you're seen as a level playing field, no bias...

**Yaron Schneider:** Correct.

**Adam Stacoviak:** ...no corporate overlord necessarily...

**Yaron Schneider:** Yeah.

**Adam Stacoviak:** Okay. How has that benefited Diagrid? How has that benefited your company in terms of commercializing this open source, your journey to get venture-backed funding? How has that helped in all ways the business angle of -- has it been a lot easier, I suppose, to go this route?

**Yaron Schneider:** So there's a lot of commercial entities that back open source projects that are not CNCF projects. I can name many. But I think the one major benefit of being in the CNCF was looking at the contributor growth since we joined, because Dapr picked up a lot of new contributors ever since we joined in. When you pick up new contributors, eventually it translates into end users, which translates into new business. So yes, that makes commercializing it easier. You have to spend less time working on the open source project than you would have if it wasn't in CNCF, because you get this awesome power of the open source contributions helping your project... Where otherwise we would need to like fund a really, really large team to work on open source.

**Adam Stacoviak:** Right. What's the license of Dapr itself, and is there anybody else who can do a Diagrid?

**Yaron Schneider:** Yes, everyone can.

**Adam Stacoviak:** Could Jerod and I be like "Hey, we're leaving here today and we're gonna compete."

**Yaron Schneider:** Yes, you can definitely do that. Dapr is Apache 2. That's mandated by the CNCF. So all CNCF projects are under an Apache 2 license, which is very flexible in how you commercialize it. You can do whatever you want, you can start your own service around it, Dapr and any other project in the CNCF.

**Adam Stacoviak:** So you're competing on, I guess, your ability to do the managed service the best, right?

**Yaron Schneider:** Yes.

**Adam Stacoviak:** So if somebody competes with you, they have the same Dapr core, or whatever it might be. They can spin up a version of that. Now, it wouldn't be cool necessarily to do that, but they could. It's possible.

**Yaron Schneider:** They could. Yeah, definitely. And we welcome competition. Look what's happening with Argo. It's a CNCF project that picked up a lot of traction \[unintelligible 01:15:49.03\] there's multiple companies trying to commercialize it today. Microsoft is commercializing Dapr. I actually built Dapr into a managed service, so I kind of in a way created some of my own future competition... Which was pretty cool; you know, the Microsoft people are great, and competition is good, because it makes everyone better...

\[01:16:10.05\] But yes, we believe that in Diagrid, because Mark and I, my co-founder, created the Dapr project, and we're core maintainers of the project, and we're also on the Dapr steering committee, alongside Alibaba, Intel and Microsoft, then we have a very good overview into the project, and we have a very good understanding of the technical aspects of it.

**Jerod Santo:** But you didn't name yourself Dapr Inc.

**Yaron Schneider:** Yes, yes. We didn't. For two reasons. One is - well, a legal requirement. We can't, because Dapr is under trademarks of CNCF. So that limits you. But even if it didn't have that limitation, we still wouldn't do that, because we don't want to tie the fate of our company to one single project. At some point Diagrid will eclipse Dapr. Dapr is an amazing framework, helping a lot of developers out there today, and we will be invested in it for as long as the company lives. That's a promise to anyone out there listening to this... But we will also want to give our own take about distributed systems that might not necessarily have something to do with Dapr. Our goal at Diagrid is to make application developers more successful whatever they're doing, and Dapr is one way of doing it. There may be others. And so we yeah, we named ourselves Diagrid because that's an architectural term that helps buildings be built faster and more reliably. And that's what we want to do - we really want to enable architectural patterns for application developers to be better.

**Jerod Santo:** Is there a parallel to Dapr, or a comparable that people may know about?

**Yaron Schneider:** Yeah, so Dapr is really polyglot, in that you can talk to it from any language. I think if you look at individual programming languages, you'll find equivalents, like Spring, for example, for Java. Or Spring Cloud. So it's like a Java framework that gives you all of these developer primitives. It's like Dapr for Java. And you have Micro for Go. Yeah, those are the immediate two that I can think of.

**Jerod Santo:** Okay. That helps. So are there drawbacks to the polyglot style, versus -- I mean, I'm sure there are, but HTTP works pretty well, so...

**Yaron Schneider:** Yeah, it does. I mean, if you're writing an extremely low-latency application, Dapr might not be for you, because you still have an extra network \[unintelligible 01:18:18.26\]

**Jerod Santo:** Right.

3:And so if you're writing a trading application, and you need microseconds of latency, Dapr might not be a fit for you. But we do believe that in terms of performance, it's good for 90% plus of use cases. Another reason why Dapr might not be for you is if you need really, really specific features from like Kafka or AWS or DynamoDB, because Dapr is an abstraction layer on top of this infrastructure. In many cases, it adds features that you don't find on top of these cloud services, which is really helpful, but in some cases, you won't find the feature that you're looking for. So if you need something really esoteric, Dapr might not be the best fit.

**Jerod Santo:** That makes sense. The lowest common denominator across what you're trying to do.

**Yaron Schneider:** Yeah.

**Jerod Santo:** Cool. Anything else? Future? Is the project mature in terms of feature set, or is it like you've got huge plans for Dapr? Do you feel like it's kind of done?

**Yaron Schneider:** We have huge plans. We've recently added workflows, which is really nice... So a workflow as code type of programming model where you can tell your code "Hey, sleep for 100 years and then kick off this process", and that'll be reliable and secure. And we're adding cryptography APIs, blob streaming APIs, document store APIs, SQL APIs... There's a whole world of APIs getting added to Dapr. We have eight today, and we're going strong on 12, I want to say, in the next year.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Very cool. Thanks, Yaron.

**Yaron Schneider:** Thank you for having me. Thank you.
