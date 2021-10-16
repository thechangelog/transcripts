**Adam Stacoviak:** So Dan, we have you here, and -- Jerod and I, we've been wondering this ourselves... We've heard it quite a bit, I'm sure that many of our listeners have heard this term 'cloud native', and I kind of think I know what it means... It seems like it encompasses lots of stuff and sort of says "This is what we're talking about." Can you kind of break down what you think cloud native means?

**Dan Kohn:** Oh, certainly. The Cloud Native Computing Foundation, we think of it as having three parts. The first is that you break up your applications into different pieces, which we call microservices. The second is that you containerize each of those different parts of your application, put them each in your own container, and then the third is that you use an orchestration platform like Kubernetes in order to keep all those containers working together.

**Adam Stacoviak:** So it's those three parts - microservice, container, orchestration. Those three things are what makes up cloud native.

**Dan Kohn:** That's how we think of it... But we do see it as a journey, where very few companies are actually fully 100% cloud native, or it's a destination and there's many different ways of getting there, many different combinations of software.

**Adam Stacoviak:** And how long have you been involved with the Linux Foundation? Has it just been since you've been the executive director of CNCF, or do you have some history?

**Dan Kohn:** I do, this is actually my second go-around. I was the chief operating officer a decade ago when the Linux Foundation was just this tiny little organization. In fact, I helped merge together the two predecessor organizations with Jim Zemlin - Free Standards Group and The Open Source Development Labs. Back then, the entire budget for the Linux Foundation was smaller than CNCF's today.

\[00:03:59.15\] Open source was less clear, Sun was the big competition with Solaris, and Windows was still completely dominant on the OS side. You didn't have billions of Linux devices out there with Android. So I was there for several years (4-5 years) and then left and was CTO of a couple startups here in New York, and when I left my last one, I kept in touch with the Linux Foundation along the way and looked at this opportunity to come back and take over as executive director of CNCF.

**Adam Stacoviak:** Considering the history, what was the early days of forming this like? What was the motive, what were some of the early pain points that made this something the Linux Foundation wanted to do?

**Dan Kohn:** The Linux Foundation - people miss the fact that it's doing way more than just Linux today; it's really a foundation of foundations. And you've probably heard of a few of the other groups - things like Node.js is in the Linux Foundation, and then another one that's just insanely exciting is LetsEncrypt, which just this week showed that they're providing certificates for more than 35% of the web, and they offer free HTTPS certificates.

**Jerod Santo:** Definitely one of my favorite things that have happened over the last few years is LetsEncrypt. I think it's one of the best things that have happened to the web recently.

**Dan Kohn:** Oh, I totally agree, and once you look at it, it makes so much sense to have this as a free shared resource. But I will point out that the Linux Foundation provides the administration for it, the healthcare plan, and provides the audited financials and everything. The funding is actually contributed by big companies like Microsoft, Google and others and lots of individual donors. So if you support having a secure web, please consider contributing to LetsEncrypt; it's just an absolutely fantastic organization.

**Adam Stacoviak:** I think part of our conversation we wanna have with you is 1) background on the Cloud Native Computing Foundation, the role of the Linux Foundation and how you said it's a foundation of foundations and it's not just Linux anymore - Node, LetsEncrypt and others, as you mentioned. \[unintelligible 00:06:11.00\] what is the role of a foundation? I think a lot of open source, as it comes to be more popularized, or a project goes and gets really exciting, like Prometheus or Kubernetes, those kinds of projects - they really need some sort of larger support, so can you help us start to break down what the role of a foundation is to not only the technologies, but the communities and the code and all the things that are involved in running a successful, large, mainstream (or even maybe a mid-sized) project?

**Dan Kohn:** Really one of the biggest changes in the roles of open source software foundations is the emergence and ubiquity of GitHub... Because it used to be the case 20 years ago that for a foundation to provide source code hosting and website and a mailing list was just immensely valuable. Any project needed that and wanted that in order to be real and just be able to function. But today, everybody gets those things for free from GitHub and other similar services - GitLab etc. So now an open source foundation actually has to provide some additional value on top of that in order for it to make sense.

Going back to that history, the Cloud Native Computing Foundation really began with Google having created this internal software, Kubernetes, which they developed based on the 15 years of experience they had running containers on their system called Borg. So Kubernetes was built on that, factored in a lot of that learning, and then they were successful in getting companies like IBM and Red Hat and Huawei and others to engage with them and start contributing to it and becoming maintainers on it... And they said "Okay, for this software to really reach its potential, we think contributing it to an open source software foundation would help make it more successful. It would be a way of ensuring neutrality."

**Adam Stacoviak:** \[00:08:24.08\] That's an interesting point, the neutral point, Jerod. We didn't quite consider -- or maybe we did, maybe we didn't, but being neutral, having no sides.

**Dan Kohn:** Definitely. And what I think is interesting about it is if you go back in time to early 2015, Kubernetes was already an incredibly cool technology, and did a lot of very useful stuff. Obviously, it was new, but at that moment Google kind of had four choices in front of them - they could have kept it closed source proprietary, which is kind of like Amazon's Elastic Container Service, and said "Okay, you have to be a Google Cloud customer in order to use it."

Number two, they could have open-sourced it, but maintained the Google control. That's what they've done with Golang... And both Kubernetes and Docker and a lot of other software is written in Go; people think it's a fantastic language, they trust Rob Pike's architecture and judgment on how he maintains it. So the fact that it's as a project just controlled by Google I don't think has really diminished its adoption all that much.

And then the third, sort of more open option is they could have come to the Linux Foundation and said "Well, we'd like to create a Kubernetes Foundation and have a new home for this." With Red Hat and these other companies on board, the Linux Foundation likely would have said "Yes, sure, we can create a home for the Kubernetes Foundation." But interestingly, Google decided that they'd like to go the most open route, which is to have an open source foundation that certainly could be a good home for Kubernetes, and the idea was always that Kubernetes would be the anchor tenant of CNCF, but it was explicitly named the Cloud Native Computing Foundation to be able to offer a lot of additional software and really support a whole ecosystem of software... And then also to make it easier to bring potential competitors or, if you don't mind that word, 'co-opetition'... Companies like Mesosphere that was promoting Mesos, and Docker that was promoting Docker Swarm, and ideally some of the public clouds in as well.

**Jerod Santo:** That's interesting, why do you think Google went that route? Especially if you were involved in those initial conversations... And then like you said, with Go it hasn't really held it back necessarily, but with something like Kubernetes do you think that the route they took with Go, which is to keep it open source but internally direct it - would have that have held back Kubernetes in retrospect? What are your thoughts on that?

**Dan Kohn:** Yeah, I wasn't there then, and this is actually similar to a stylized history, because in reality when they created Kubernetes, they were planning on having it be open source from the get-go. I don't think they decided exactly what they were gonna do with it, but they never I don't believe seriously considered a closed source Kubernetes, like an Amazon ECS. But I think the reason is they said "Look, this is infrastructure software in a platform", and there's this metaphor that I think is gaining currency now, which is that in a lot of ways Kubernetes is the Linux of the cloud, and kind of like Linux, it just would never be able to be remotely as successful if it were all controlled by one company, even if that company were seen as very positive and generally open and supportive and such.

\[00:11:51.00\] So they made this decision, but to be blunt, the first year or so of CNCF was kind of tough going, where we have this relatively complicated structure of how we're set up, and it was created for very good reasons. The fear was that they didn't wanna create an organization where the people providing the most money would get to determine the technology decisions. They wanted to have some independence around the technology and the architecture, so these original founding companies when they wrote the charter, they created a separate group called The Technical Oversight Committee (TOC). That's a group of nine top technical architects, folks like Bryan Cantrill of Joyent and Brian Grant of Google, and Solomon Hykes of Docker, who have to jointly - and it actually requires a two-thirds majority - agree in order for any new project to come in.

**Jerod Santo:** That's interesting... I wanna talk about that architecture a little bit, because from the outside looking at it, even if you go to CNCF.io and you look at the platinum members and you see AWS and CoreOS and Google and Docker and all these large corporations, and then you see some of the membership fees that they're paying, which for the platinum is like 370k a year - there's like this aura of this as a pay-to-play type of a situation, and it's so interesting that the structure you all put in place is specifically to fight against that happening... Is that what you're saying?

**Dan Kohn:** It definitely is, and my favorite counterexample on it is Open Tracing, which was the third project in CNCF, and was created largely by a guy named Ben Sigelman, who has a startup called LightStep. He proposed Open Tracing to CNCF over a year ago (14 months or something) and it went through the whole process and got acceptance of the TOC, and has been maturing and growing since then. And through that whole period, LightStep never had gotten around to becoming a member of CNCF, so I think it's really a great example of how we've separated the technology decisions of what projects make sense in the cloud native landscape that we wanna host and promote, and the membership decisions, which is what provides the funding and some of the marketing behind what we do.

**Jerod Santo:** Right. So go back to that first year then and describe the difficulties you had because of the structuring of this technical oversight.

**Dan Kohn:** Well, all I'd say is that when you create a complicated structure, it definitely takes time to work out the kinks. When I arrived 18 months ago, we had just gotten Kubernetes in, we were almost ready to bring in our second project, Prometheus... But we just had a lot of concern of "Oh, well is this project not supporting Kubernetes enough? Is it such a big ten that it sort of doesn't mean anything?" There was just a lot of anxiety about exactly what our mission was, the strategy, what kind of projects should be coming in.

And you know, it would be the sort of heroic narrative to sort of go back and say "Oh, and I came in and I just magically put together this strategy document and everyone agreed." As with most things, there's just a ton of chatting with people, and just kind of talking things through... There were definitely a few course corrections along the way, but what was really great was that over time we were able to bring in more projects.

I think there's a really interesting story with Prometheus, for example, where after they had been in for a year, we were just able to show that it helped build so much momentum behind them. I'll point out that Prometheus already had a great following even before it came into CNCF, and in particular it's not tied to Kubernetes; it works great with Docker Swarm, and Mesos, and Nomad, and virtual machines and all kinds of other infrastructures... But it's a particularly good fit with Kubernetes. People who use Kubernetes find Prometheus adds a ton of value.

\[00:16:19.29\] So we were able to sort of demonstrate that there's a lot of value by connecting these projects together and helping the market and promote them together.

**Jerod Santo:** So Dan, what is it that excited you back when you got involved with this, that brought you back to the Linux Foundation, and it kind of gets you out of bed in the morning, especially now that the structure is put in place? What is it about your work at CNCF, running the operation -- and maybe you can describe what exactly your role is, something we've quite laid that out... But what drives you to do this, personally?

**Dan Kohn:** Sure. So my last two startups that I was in over the previous five years - one was a shoppable ads company and another one was a healthcare startup focused around higher quality MRI's... And both of them were incredibly stimulating in their own ways, and it was also a ton of fun for me to get re-immersed in programming, and actually become a pretty decent Node.js developer... Although the JavaScript world moves so fast that I feel like three years later all my skills are now obsolete. And then with the second startup to go into Ruby on Rails as well... But there's also a sense that the startup job or even the CTO role is very narrow; a huge amount of my day was focused on GitHub code reviews and \[unintelligible 00:17:54.17\] and even coding myself...

I feel like that background though was incredibly helpful, because it did and does give me just an enormous amount of respect for developers, both the contributors to our open source projects like the ones that we host, and also then all of the developers at end user companies that are building their applications on top of this cloud native ecosystem, and relying on this infrastructure software in order to make their job easier.

So I'd say the part that's just a huge amount of fun for me and really is incredibly - on an ongoing basis - just very stimulating and rewarding and exciting, is getting to work with all of those developers, and ideally (when things are going well) helping to make their lives easier, helping to move these projects forward. There's just an unbelievable level of excitement around the technologies that we're hosting right now, so getting to be a part of that, and hopefully in a small way helping to make these projects succeed, is very rewarding.

**Jerod Santo:** When I think about the position of executive director of a foundation, I think about a lot of meetings, a lot of conversations, a lot of relationship buildings, events... I don't think of any of the stuff that you used to do, with regard to the coding, the \[unintelligible 00:19:25.10\] all this stuff that was very technical and eventually you can grow tired of over time... I can't help but laugh a little bit; we were talking before we started recording that you have the number one story on Hacker News this morning (or this afternoon) - you didn't write it, but you posted it - about replacing the x86 firmware with Linux and Go... So you still nerd out, you're still interested in technical things.

**Dan Kohn:** Definitely, yeah... But it's a pretty great job when I can actually say "Hey, I can justify spending 20 minutes a day or half an hour a day on Hacker News" and just keeping up on this sort of stuff is sort of an expected part of what I do... But I mean, I think if I were less geeky, that I'd be far less effective at the job.

**Adam Stacoviak:** \[00:20:10.21\] So comparing your previous path, which was entrepreneurship, CTO, what is different about what you do now in comparison to, say, building a business or the role of an entrepreneur? And kind of break down some of the things you might do day to day to kind of demystify what an executive director is.

**Dan Kohn:** So the biggest difference by far is that in this job I get no stock options. The Linux Foundation is a not-for-profit, and so you don't get the kind of lottery ticket or potential upside that you have in a startup.

Other than that, I think the job is extremely entrepreneurial in a lot of ways. I do consider my job to be about messaging, about communication, about providing a set of services and tools to our projects and to our members... So a ton of it is just chatting with folks. I'll make a little plug for a SaaS service I use called Calendly. I just spend a ton of time sending out my little Calendly link and saying "Hey, if you'd like to chat about this, please book a time with me", and people can book 15, or 30, or 60 minutes, and I just spend a lot of time hearing about our members who have a new project that they might like to promote, or some event coming up, or some issue, or some concern, or why they're unhappy with this other company or this other project... And to the degree possible, there's just a ton of kind of herding cats, or looking for themes, or looking for opportunities to connect people together.

Then I do go to a lot of events around the world, and I speak at a good number of those, but I also just find it immensely useful to just sit in the hallway and... You know, sort of happily now, after 18 months, I've met enough people that folks will generally come up to me and say "Oh, you know, I saw your post on Hacker News" or "I saw your talk earlier", "I have this idea" or "I'm concerned about this issue." And again, I just feel like there's a -- in the big company there's a term for it, which is 'management by walking around', and it tends to be a key role for kind of a mid-level person, and I feel like I'm trying to do the same sort of thing, but maybe it's by flying around.

But I do wanna emphasize that I'm not literally in charge of these projects. One of the semi-unusual things about CNCF is we have what we informally call a "bring your own governance process", where we do require that any projects when they come in that they have a neutrality, that they can't all be biased towards one company or exclude their competitors or other sorts of things... But we don't say, "Oh, you must use this exact governance process." We're very open to different projects trying different things, and then we ask them to eventually document that and to make sure that they're living up to it.

So our philosophy on that front is much more about "How do we provide services to the projects and help them succeed?" than to ever say "Oh, you need to be doing X or not doing Y."

**Break:** \[00:23:44.04\]

**Jerod Santo:** So Dan, you mentioned with the rise of GitHub as a shared platform that a lot of the services and the offerings that foundations used to offer aren't necessarily needed anymore, but there's still a lot that people need, and there's a lot of reasons why projects wanna be part of the CNCF, so can you lay out the benefits and the services provided by the foundation?

**Dan Kohn:** Absolutely. I'd say by far the first one is the most important, and that's just that a neutral home increases contributions. There's tons of absolutely fantastic projects out there that are on GitHub, but obviously controlled by one company... But when big companies wanna make a bet as to what platform to invest in and to build on top of, and for infrastructure software like Kubernetes and Cloud Native it's often a decade-long bet - they would love to know that there's multiple companies backing it, and backing it in a big way, and that if one company gets acquired or changes direction or anything else, that that software is not gonna atrophy.

So then other kinds of advantages are the fact that coming into CNCF implies an endorsement by our technical oversight committee. We have these end user and service provider communities that we provide engagement with. So you have sort of a very thoughtful, knowledgeable group of end users and consultants who could give you some insight, or complain about things that are happening.

We have full-time press and analyst relations teams... And then, definitely an advantage is the fact that we do have some cash available that we're very interested in investing in these projects. So we're doing some things like a security audit of Envoy, or investing in documentation around rkt, or just even small things like they don't like their logo, or just sort of keeping all that material, and things like running a robot that maintains a contributor license agreement.

So overall, I'd just say that we have a full-time staff that is eager to assist these projects. The maintainers tend to be extremely busy people; it's not the case that they're just emailing us 20 times a day asking for random things, but we do have a set of services that we provide, and it's not in any way complete/comprehensive, if there's other things that projects want help with.

\[00:28:06.08\] Some of our projects have just asked for advice on things like governance, or legal issues, or trademark, or others - we're there to help them out.

**Adam Stacoviak:** It sounds like some of the core reasons the foundation is in place for projects like this is to essentially run the business part of the project, and to allow the TOC or maintainers or the onboarders or any new contributors in the community to thrive in the tech part of it, but to sort of give or hand over a lot of the day-to-day business operations and stuff, like logos, marketing, branding...

**Dan Kohn:** Right. The distinction is a little subtler than that, because when you look at something like Kubernetes, there's over 50 different companies that are building software products on top of Kubernetes, offering commercial Kubernetes distributions... So they're definitely not interested in us "handling the business", or running that for them, or competing with them in any way. But there's just some neutrality, some administrative tasks that all of them have agreed, "Yes, it would be nice if there were a neutral non-profit foundation that could handle this stuff for us", as opposed to the kind of straight commercial support, or marketing or such that each of these businesses do.

**Jerod Santo:** Yeah, I think administration makes a lot of sense, as opposed to the business side... The operations and the administration. A lot of just the infrastructural support. One thing you mentioned is that there's cash available for certain things such as paying for a security audit, logos, maybe swag, maybe there's travel in there, or I don't know... Have you guys considered, and is there anybody who's ever used cash from a project to directly pay for labor?

**Dan Kohn:** We do have a philosophy that we're generally trying to avoid hiring developers, and the reason for that is that is that all of our members tend to be the ones employing developers to improve these projects, and we'd like to not be in competition with our members over the hiring.

**Jerod Santo:** It makes sense.

**Dan Kohn:** I guess we sort of recently made an exception to that, where we hired on this guy Zach \[unintelligible 00:30:23.00\] who is helping to manage the documentation work for Kubernetes... And there's a ton of great documentation efforts that have been contributed particularly by Google, who supplied the two leaders of the special interest group, and we now have contributions from other companies - Huawei, Dell, Red Hat and IBM have all stepped in and offered one full-time documentation person, because it's just seen as one of the kind of deficits right now in Kubernetes, or areas that need investment... But we made the judgment that bringing Zach on to help coordinate all of those efforts was gonna be pretty valuable.

**Jerod Santo:** It makes a lot of sense. The projects that pass -- I don't know what you call it, the certification, or... Maybe we can talk about next how a project becomes supported. I know you at the very beginning laid out what makes a cloud native application - microservices, containerization and orchestration, but maybe you can lay out what a particular project goes through in order to become on a list of supported projects to give people an idea of what is a good fit and what is not.

**Dan Kohn:** Sure, so we have this Technical Oversight Committee, and they have two public calls every month, and I definitely encourage your listeners to participate in the calls; I'll give you the URL for it. It's just two hours out of the month; that's a good way of hearing what's happening in our community and opportunities for getting involved... And on each of those calls we tend to have one or two new projects that comes along and would like to give a 12-15 minute presentation on what they're doing, how they fit into the cloud native landscape, what they compete with, what they are alternatives to, and then they get a few minutes of questions.

\[00:32:14.21\] Then if there's interest from our technical oversight committee, we'll do a formal application process where we put together a bunch of documentation about the project, the libraries it depends on, its backing, its responsiveness and such...

Then we have a group of what we call TOC contributors, who assist with that due diligence. In a lot of cases, they're from companies that have worked with these projects before, or can say "Oh, we've had a great experience with it. We definitely endorse that" or "We had real issues" or "We don't think it's mature enough yet." Then eventually, if it gets that far, it will go up for a vote, and it requires six votes from the TOC in order for a project to come in.

**Jerod Santo:** Are there any projects that are single-maintainer, or even a couple of maintainer that are hosted projects, or are foundations generally more of a fit for projects with larger teams, multiple companies investing into them?

**Dan Kohn:** I think my answer is that some of our projects started as single-maintainer projects... In particular, OpenTracing that I mentioned earlier, I believe at the very beginning it was only Ben Sigelman. I think by the time it came it to CNCF there were already other maintainers on board.

The expectation is we really wouldn't wanna have a single-maintainer project for very long. I mean, if it's someone who came in and they said "Hey, I think this is immensely valuable. I've had trouble finding other maintainers who are active enough and knowledgeable enough", maybe that's something we can help them with... But we definitely wouldn't see that -- you know, one of the factors for projects is you talk about a bus factor, of what happens if someone gets hit by a bus. That's something we would definitely like to look at on projects that we host.

**Adam Stacoviak:** I think that's something that people come to this conversation thinking, "You know, if I'm in this cloud native world, how do I determine whether or not there are benefits to joining this kind of foundation?" and then I think to myself, if I'm that kind of project, what are they giving up? So we can kind of break down "the services" you offer and the gains. By joining a foundation, what do people lose out on? What's taken away?

**Dan Kohn:** I think it's a great question, and it's definitely a conversation I have all the time with different companies in the space. The good news is they're not giving up all that much. In the big scheme of things, it's certainly not the case of "Oh, I've contributed my project to CNCF, now I don't need to worry about it anymore." You have exactly the same issue queue, and pull requests open, and everything else the next day. As we said, we're not hiring the developers, we're not managing your project for you. So for every project that comes to CNCF, we have every expectation that all of the existing maintainers, the companies backing it will continue to do so.

**Adam Stacoviak:** I mean, because a big part of what a foundation does is provide legal guidance, right? So in some ways I'm sure someone's signing off on some sort of like power of attorney, that kind of thing. You have a foundation operating on your behalf, or something like that, so you've given some sort of legal right to an entity to care for you.

**Dan Kohn:** Yeah. I mean, in principle, that might be true, but in reality, a lot of our projects -- for example, in September we had Envoy, which is a really exciting service mesh contributed by Lyft, and then coincidentally Jaeger, which is a distributed tracing implementation contributed by Uber. In both of those cases, there's very established companies behind it who have lawyers who can manage all of those processes, and so it's not that our attorneys are really going to tell the developers something meaningfully different. I would also say a lot of the heavy-lifting on that front comes from the fact that we require all of our projects to use the Apache license.

**Jerod Santo:** \[00:36:25.20\] I was just gonna ask that...

**Dan Kohn:** Yeah, the vast majority of projects in this space are already using the Apache license, so when a project comes in to CNCF, we do require that they transfer the trademark to CNCF, which is essentially to allow us to ensure that people are using it correctly, and that neutrality... But there's no need to transfer the copyright or any patents or anything like that, because the Apache license already covers both copyright and patents.

**Adam Stacoviak:** So it's really kind of like joining a club... \[laughter\]

**Dan Kohn:** There's definitely an aspect of that. But back to your question on downsides, the biggest one might be on some forms of integrated marketing; we think of ourselves as a very commercially friendly foundation. We're perfectly happy for -- in fact, we would prefer for our project websites to have an enterprise page or commercial support or such that lists all of the companies that provide that commercial support. But as an example, there's a company, Treasure Data, that is the main force behind the logging software Fluentd, but it's important -- so it's fine for them to list themselves and say "Hey, if you want commercial support on Fluentd, we're happy to provide that", but it's important that if anyone else wants to provide commercial support, they also need to be able to get a listing on the same page and be treated exactly the same way.

And there's some things like, you know, if there's a Slack for the project, it's not okay to do commercial postings on that Slack. So there's a tiny bit that companies gives up in terms of their ability maybe to do some integrated marketing, but I would suggest it's really pretty much on the margins.

The tradeoff for that is, like you said, it's a club, and there's a ton of marketing that goes with being a CNCF project, and I think at least right now a kind of halo effect, or it's been described as a \[unintelligible 00:38:38.21\] effect of kind of being in a slipstream with Kubernetes... Not that "Oh, my project's been accepted by CNCF, so all Kubernetes users are gonna adopt it", but just "Oh, my project's in CNCF, so Kubernetes users are probably gonna be willing to take a look at it, and maybe carefully evaluate it."

**Adam Stacoviak:** Is participation as a project in this foundation in particular - is it seen as an endorsement? Adding a project or bringing on a project to the foundation - is that seen as an endorsement across the board, that "This is a good thing"? Is that exactly what happens?

**Dan Kohn:** Yeah, I would say yes to that. We definitely don't wanna have any project hosted by CNCF that we don't actively endorse.

**Adam Stacoviak:** \[unintelligible 00:39:30.07\] When you endorse something, you're stamping it with names like the Linux Foundation, and Kubernetes, and Google, and all the other members that are a part of it; all the weight of those brands comes with that endorsement.

**Dan Kohn:** Well, I won't strictly say that I speak for Google, but certainly for the Linux Foundation and CNCF, there's an endorsement there.

**Adam Stacoviak:** Well, the involvement, right? They continue to be members...

**Dan Kohn:** Yeah, certainly.

**Adam Stacoviak:** Okay, that's all...

**Dan Kohn:** \[00:39:58.19\] Just as an example, GKE (Google Kubernetes Engine) doesn't implement every CNCF project. So the stronger endorsement would be "Do they actually implement it?" But the other side of it is that we definitely don't have the philosophy that because a project is coming to CNCF that we won't consider any other project in that space. In fact, we've already proven that where Linkerd came in earlier this year as a service mesh technology, and then later in the year we brought on Envoy...

Essentially, those two projects are competitors. I mean, in principle you could use them both, but in reality almost everyone is gonna pick one or the other. So that is a key thought, which is that we have this thing we call the Cloud Native Landscape, and you can include \[unintelligible 00:40:51.00\] It's a little bit of an overwhelming document with three hundred or more logos of all these open source projects and closed source products, and you can see that CNCF has one project in most of the boxes so far, but we definitely don't have the philosophy that there can only be one project in a box... Just because we've hosted one, we're still totally open to other projects coming along, if they have something else to offer.

**Jerod Santo:** What does growth look like for the foundation in terms of its hosted projects right now? On your projects page there's 14; you've named most of them in this call, but two, three, four, five years from now, is the goal to still have maybe two dozen, or are you trying to get to that 300? What does it look like if things go well?

**Dan Kohn:** Yeah, I would hope we wouldn't say at 14, and I definitely hope we don't get to 300. Right now I think our pace has been about one new project per month that has been coming on. There's definitely no sort of mandate to do that, or demand or anything else. I guess Andrew Morton, the top kernel developer about seven or eight years ago made a prediction that the Linux kernel was almost done... I certainly won't make that prediction; I think there's always going to be new projects coming along, new ideas...

I sort of expect a lot of the innovation to start moving up the stack, as Kubernetes becomes more and more established. But just because, say, a company has rolled out Kubernetes internally and has had a great experience with it doesn't by any means mean that there's agreement yet on application definition, or the best way to deploy new applications. I still think there's just a ton of innovation in the space going on, and that it is incredibly fast-moving.

Then the other side of things is that the TOC hasn't done it to date, but I believe there's a very strong willingness to kick projects out, or to -- we might call it something like "move them to an attic" or something, if they are no longer being actively developed, or if technology has moved along to the degree that we can no longer actively endorse them.

So our hope is, again, to be building an open source ecosystem or landscape where choosing any of the projects in CNCF represents a smart choice.

**Adam Stacoviak:** You know, Jerod, it kind of reminds me of some of his back-story which we haven't shared yet, which is his involvement in the Core Infrastructure Initiative, and the whole reason that was done was to kind of battle back Heartbleed... And it seems like what you're sharing here, Dan, is that you're in place to essentially provide a foundation, for a lack of better terms, for a landscape of open source projects that support an ecosystem. That seems like it should be on the nose, but it's taken a little while for me to get that revealed through this conversation.

**Dan Kohn:** \[00:44:11.26\] Yeah, I think that is a nice way of looking at it, and I'm extremely proud of the role I played about three years ago in combating Heartbleed. I actually was at one of my startups at the time, and had -- you know, I was still in touch with the Linux Foundation, with Jim and everything, and my experience was just I had to stay late at work that night and rotate our certificates, and I had a super easy setup... Very modern, it was on Heroku, and it just took me 45 minutes to look up the documentation and make sure I was doing it correctly and everything...

But I still came home late that night, and my wife was a little annoyed with me, and it just hit me that there were literally hundreds of thousands of people around the world who were dealing with exactly the same issue, but essentially all of them had a much worse experience than I did - things locked in firmware, or trying to deal with monthly or quarterly releases, or where you don't even have the source code, and all sorts of other nightmare situations... So working with Jim, I put together that plan, and we were able to bring in 20 companies in under three weeks, to each contribute 100k, so it wound up being six million dollars over three years. That really helped to improve OpenSSL, and then we were able to put together \[unintelligible 00:45:36.07\] looking at some other projects that needed help, things like ntpd...

And then another part that I'm very proud of or pleased with is the Best Practices Badge, which is a project that I worked on very closely with David Wheeler... I can't remember - was he on an earlier version of this podcast?

**Jerod Santo:** That's right, I was looking it up as you talked there, because you're firing off all sorts of memories for me; I was like "Wait a second..." Yeah, so episode 215 of the Changelog, back in August 2016 we had David on, talking all about the Best Practices Badge and the Core Infrastructure Initiative. The people that want to deep-dive that particular tale, David covered it very well... I assume you and him know each other quite well.

**Dan Kohn:** Yes, that was probably my biggest success being involved in CII, was to find David and recruit him in. He and I were really the code developers on that project. He did really the lead on all of what the 66 criteria should be, and everything... But at the time, he actually hadn't done any Rails development before, and I was working for a Rails development company. So I put together the original scaffolding for it, and the CI system, and then helped along the way on the software development. And again, it's an extremely satisfying process to have started that from scratch and then have well over 1,000 badged projects.

In fact, not so coincidentally, one of the criteria in order for a project to graduate within CNCF is they do need to get the Best Practices badge.

**Adam Stacoviak:** Coming back to what Jerod said earlier, which was around growth... So you've mentioned at a dozen or so projects now, a few years from now what's the goal, what does growth look like - essentially, you're aiming growth with the Cloud Native Foundation, and I'm curious how you balance that growth... One, with acquiring new members to facilitate funding, and then two, acquiring new projects to make sure that you have enough staff and enough finances to cover things, and then at the tail end of that, how open are the books of a foundation like this?

**Dan Kohn:** \[00:47:44.20\] Yeah, that's a great question. Thankfully, we haven't needed to make a lot of tradeoffs so far. We've been able to be really successful both in bringing in new projects and being able to provide them more and more services, and correspondingly bringing in a ton of members. So at least right now, we're really in a positive feedback loop, and that is our whole philosophy of how open source ecosystems like our can grow - you have these projects, companies can use them to produce useful products, those products can throw off profits that can be reinvested back into the projects again.

On the member front, we've really had a ton of success in 2017 on bringing in almost all the big companies in our space. So we now have all six of the biggest public clouds (depending on how you measure) and most of the big enterprise software companies, and others that all consider these technologies to be integral to their future.

We're particularly pleased over the last few months that we were able to bring in Oracle, Microsoft, Pivotal, VMware and SAP as platinum members.

Then on the books, we're a non-profit foundation, so we have audited financials and we work with the Linux Foundation's finance team to keep pretty clean books. Those are all shared with the governing board, and then this (probably) February we're gonna be publishing a summary for the first time... So it won't be the very detailed thing where we put every single expense into, but just how much we're spending on developer tools, and what we're spending for third-party events that we go to, and our documentation, and other kinds of things.

That is also probably a good segue to the question of our own events, which has been definitely been a big focus for CNCF. We're now just I think 13 days away from the biggest event we'll ever run, which is KubeCon + CloudNativeCon. That's gonna be in Austin, December 6th-8th, and it's not sold out yet, but it's heading very fast towards selling out at 4,000 attendees...

**Adam Stacoviak:** Wow!

**Dan Kohn:** ...which really is completely insane, because we've had just 1,000 people a year ago in Seattle.

**Jerod Santo:** It's a lot of people.

**Adam Stacoviak:** That's huge.

**Dan Kohn:** Yeah, 4x is a little crazy, but it just speaks to the level of excitement and the increasing adoption in this space.

**Adam Stacoviak:** Which places so much more weight on the question I've just asked around this growth pattern and balancing it... Just to maybe clarify some things here for those listening - Jerod and I come into this call thinking "What's a foundation? What do they do?" and then on the flipside you've got this whole entire potentially a sales process, not so much to target, but to have a strategy with "Whom out there should be members, to be involved in what they should be involved in?", and this whole effort that would go into creating a strategy, and getting them on board, and then all that's involved in acquiring new members to fund this foundation... That's a whole different side of things I didn't quite consider. Obviously, it's there, because you've gotta have the money, but the strategy and the very careful planning it must take to do it with balance, but then do it neutrally, as it seems like the threading of you is around being neutral.

**Dan Kohn:** And that gives you a little bit of insight into probably why my job is hard...

**Adam Stacoviak:** Yes!

**Dan Kohn:** I will point out some of the huge assets that I have and that CNCF has... First of all, we're part of the Linux Foundation, so we get to rely on the Linux Foundation events team, which has been doing these kinds of open source events for more than a decade now... And I actually helped hire Angela Brown, who runs our events team, a decade ago, in my first go-around; her team is now over 30 people.

\[00:52:03.03\] What's great about the fact that she does 50 events around the world every year and has been doing these events is that through most of the year we just kind of have two or three people who are focused on CNCF, but then as we approach Austin right now, and then we'll be in Copenhagen May 2th-4th 2018, that team can search up and we're gonna have I believe 15 different people working with us in Austin.

But one of the other big assets we have going for us is just the fact that all of these companies that are backing CNCF are really interested in these events being successful, that's it's just a great opportunity for them to interact with end users and developers and get the word out about their products. So it's really pretty amazing to see the growth in sponsorship... We're actually gonna have 106 different sponsors for Austin, compared to (I think it was) 25 a year ago.

So again, trying to build out a 4,000-person event from scratch would be almost impossible, but we also do get the advantage that we're iterating here. So we do one of these every six months, one in North America and one in Europe, and we just try and keep having them get better.

Then just the last piece of it, what really makes it feasible for me to deal with this is that I don't actually decide on the content for it, I hire or bring on two co-chairs for our event, and then they bring on a group of volunteers to run a program committee, and we have a process where lots and lots of people submit. This year I believe it was over 800 submissions for 127 selected talks, so it was a 17% acceptance rate... But they are then able to shape a program, including the keynotes, that is thematic and covers a wide range, but has some neutrality that it's not, for example, the platinum members, or the ones who are funding the most who necessarily get to talk.

**Break:** \[00:54:37.06\]

**Jerod Santo:** So Dan, looking at your member's page, it's quite an impressive list... We were doing some back-of-the-envelope math before the show; it looks like there's easily 100 companies here... So the question that I have -- it makes a lot of sense to platinum members, like you said, the big cloud providers (AWS, Docker, Google and so on, Microsoft) why they would have benefits from being members. But when you get down into the other companies, the silver members, I start to miss where their benefits are, like a CapitalOne, or a Buoyant, or a Bloomberg, and I wonder what -- when you go to these companies and you have these meetings about supporting the CNCF and becoming members, what's the sales pitch to a CapitalOne? What are their benefits?

**Dan Kohn:** Sure. The obvious question is to say "Wait a minute, aren't all of your projects open source? Can't I just download them all for free and use them? Why do I need to pay you money?"

**Jerod Santo:** Exactly.

**Dan Kohn:** Or, you know, what doesn't work is -- this was the joke with the Linux Foundation a decade ago, it was to say "Oh yeah, just come in as a platinum member and we'll be sure that all of your patches will get approved."

**Jerod Santo:** There you go.

**Dan Kohn:** And let me just say, I am joking there... It's definitely not true. There's no sense in which members get any --

**Adam Stacoviak:** \[laughs\] I was like, "What did you say?!"

**Dan Kohn:** ...get any kind of leg up on that front.

**Jerod Santo:** Breaking news...

**Dan Kohn:** Yes, definitely! And you know, people say "Well, isn't this just a pay-for-play organization?", we definitely get that accusation... And the sort of obvious answer is well, given that anyone can download it for free and that we do take in projects from companies that are not members and from individuals that are not members, that's obviously not the case.

So the simplest argument for becoming a member is the marketing one, that a lot of these companies get some benefit by publically demonstrating that they're embracing cloud native computing and supporting cloud native computing, and being able to interact with their peers and customers and such.

You mentioned Bloomberg and CapitalOne - they're part of our end user community, and that was also one of the real challenges in getting set up... When I joined 18 months ago we had three members in our end user community, and we've now grown that to 27 today, which is something that I'm just particularly proud of and I think has been a huge asset for our organisation.

**Jerod Santo:** What's the difference there? What's that end user?

**Dan Kohn:** The definition of an end user is that you don't offer cloud native services. Google and Docker and Alibaba all are offering hosting or software or other sorts of things. The New York Times sells newspapers and TicketMaster sells tickets, and Wikimedia Foundation runs Wikipedia... So they're not offering cloud native services to their customers.

**Jerod Santo:** Gotcha.

**Dan Kohn:** \[01:00:08.18\] And what's been great is that when companies make big bets on Kubernetes and surrounding technologies, the idea of becoming a member of our end user community is not a particularly big expense, and they do see it as pretty valuable both to support our efforts, but also from a communications standpoint we have a monthly private phone call between them, which is kind of a vendor-free zone, and a Slack channel and a mailing list.

In those monthly phone calls we're also connecting them with the project maintainers and giving them that additional insight into what's coming down the line. And those project maintainers generally find it pretty interesting to have a thoughtful, engaged group of potential users. So far we've been able to make that membership and the economic proposition work for a lot of companies. It's definitely logistically been a challenging process to bring on. I think we're up to 157 members so far, and we do a monthly marketing call for them that's gotten bigger and bigger, and we're trying to figure out exactly what the set of benefits are that companies get, because they do need to be things like -- we have two webinars that we do every month, and that we heavily promote, and those are only available to members. But even those webinars are not just an opportunity to sell proprietary product; we'll generally get two or three companies together to give more of an overview on something like cloud native storage, or security, or new technologies or such.

So I'd say right now, at least, the formula is working and we've been able to come up with a value proposition that makes sense for folks.

**Jerod Santo:** I mean, 157 members is -- I guess the proof is in the pudding, Adam, that they've definitely convinced a whole lot of companies to hop on board.

**Adam Stacoviak:** It's pretty compelling. I mean, if at the top the chain in this \[unintelligible 01:02:11.09\] so you get to be involved in behind-the-scenes things that -- I don't wanna say it's pay-for-play or club-like, but it's very club-like; you get inside access to things. You even mentioned access to maintainers that maybe you could have that as not a member, but why not, because hey, you get insider news, you get marketing, and you also get to sustain and/or maintain the efforts of the project and all the things to keep this ecosystem thriving. It seems pretty compelling.

**Jerod Santo:** Yeah, and the ranges of dollars that we're talking about here - platinum member, $370,000/year, gold member, $120,000. So those are the bigger tiers... But then once you get down to what Dan's talking about, the silver end user members, $5,000...

**Adam Stacoviak:** $50,000, $7,000...

**Dan Kohn:** Yeah, but for a small startup with 50 people or less, it's actually just $7,000. So it is designed to be a reasonable fee; we're working hard not to be onerous for these folks.

**Adam Stacoviak:** So let's break down maybe some hypotheticals on the $7,000 in that case there. If I'm the CEO of that company, 50 employees or less, I'm that company and I want to have this insider's perspective, I wanna be involved in these calls and this matters that much to me, how does that $7,000 tend to get - not so much down to the time, but how does it tend to get used? Does it actually sustain the projects? On this show we cover things like maintainer burnout, contributor on-ramping... What kind of -- if I'm coming into this as that kind of company, how are those dollars affecting the sustaining efforts of these projects?

**Dan Kohn:** \[01:04:17.03\] Sure. They are, in that we're providing a set of services to the maintainers that hopefully make them more successful and more productive. So whether it's setting up press calls, or analyst calls, or just giving them a subscription to some sort of online service that plugs into GitHub and provides something useful, a CI, a documentation or other sorts of things... All of that contributes to it.

Now, from a budget standpoint, the majority of our funding comes from our platinum members, so we think for the smaller startups out there, the 7k for becoming a member is a particularly good deal. And I guess I will give the quick pitch that we also have a startup sponsorship offer, where small startup companies who are members can get a booth at our event for $5,000; that's normally a $20,000 booth, and it comes with five tickets that's worth $5,500 anyway. So I think a lot of small companies "Hey, $12,000 to sort of dive into this community and demonstrate that it's important to us, that we can kind of treat as a marketing expense, is a pretty reasonable thing to do."

That tends to be a different value proposition from a big company like a Bloomberg, or a bigger bank, and then certainly from the gold or the platinum members.

**Jerod Santo:** Cool, Dan. Now, tell us what's new at CNCF. It sounds like everything's been moving pretty quickly... KubeCon next month sounds like it's gonna be a huge event, and probably a lot of your efforts are going into that, but what else is new? Do you have any new supporting projects, or anything else?

**Dan Kohn:** The biggest thing that CNCF probably will have done this year other than running our events we just announced a couple weeks ago is the software conformance program that we've put together called Certified Kubernetes. This has been over nine months in process, and just a really intricate, involved process on how to ensure conformance around Kubernetes. We have 32 different companies signed up at launch, and I think we're up to 37 or 38 now.

These are folks like Google with the Google Kubernetes Engine, and Red Hat with OpenShift, and really every vendor in this space who has a commercial offering. And for all of them -- they're still completely allowed to make modifications to the software, and changes and improvements and patches to it, but it's a way of ensuring that each of their versions of Kubernetes remains compatible. So when an application deploys on one version, that it will work correctly on others, as well.

We're really thrilled that this process is something that we worked extremely closely with the Kubernetes project on; it actually makes use of the conformance tests that are already built into Kubernetes, and the kind of technical issues that come up, if something that counts as an external API that matters for conformance versus an internal API implementation detail - those kinds of questions get escalated to the architecture special interest group within Kubernetes. But we were able to just bring together really everybody in this industry, and it was actually a shockingly non-contentious project for what's really one of the biggest software conformance efforts that I'm aware of.

**Jerod Santo:** \[01:08:02.22\] So it was kind of like a Best Practices badge, but for Kubernetes... An encore presentation of a Best Practices badge where you're saying "We're gonna conform to this specific, published--" is it like a public API that you're conforming to, but then your internals can be different? Give us some of the details of what conformance looks like.

**Dan Kohn:** Yeah, that's exactly the case. So there is an analogy to the Best Practices badge where there's a test that you're taking, but the difference is that the Certified Kubernetes Conformance Program is completely automated. So as a vendor, you download this open source tool called Sonobuoy; it runs the tests and then puts out a log file, and you then submit that log file and some other data in a pull request. When that's accepted, you become certified.

But one of the just really exciting or innovative aspects of it is that any of your users can come along later and run those exact same tests with the same test harness in order to confirm that your platform or your distribution remains conformant. So instead of needing an official lab that is expensive or slow or clunky or such, it's almost like a distributed verification process.

**Jerod Santo:** Interesting. So you're guaranteeing portability for the end users of these different implementations.

**Dan Kohn:** Yeah, that's definitely what we're aiming for here. If you have an application and it deploys onto a given version of Kubernetes, that it should work on any other version as well.

**Adam Stacoviak:** There's a lot of concern out there with cloud lock-in, essentially... And this seems to be counteracting that.

**Dan Kohn:** I think that's definitely the case. Really a huge -- probably the most central message of cloud native is an open source software stack that gives you portability between any public/private or hybrid cloud. But then furthermore, even after you've chosen Kubernetes and chosen this other software, there's a question of "Oh, well am I locked into my distro, or this specific platform that I chose?" and the aspiration of this program is that "No, you're not." You should be able to move between any of them and pick the company that will provide you the best support, and work with you, and everything else.

**Jerod Santo:** The great thing about that for us, end users of these clouds, is that it forces them to compete on the strata that we care about the most, which is price, performance, security tooling, right? It forces them to compete there, and not on other aspects of what they provide, which may just be customization for lock-in sake, for instance... So that's great for end users.

**Dan Kohn:** Sure, although I think they also do compete on value-added services, so... Using their database, or caching, or all the other services that they provide.

**Adam Stacoviak:** Right.

**Dan Kohn:** But our goal is that they wouldn't be competing with "Oh, we implement this API better than our competitor." And then I will mention just one other program that we rolled out in September, which is essentially another kind of certification, except it's of expertise for consultancies. This is what we call our Kubernetes Certified Service Provider. There again, we were able to get several dozen - I think it's 23 companies right now - as our launch KCSP partners. They get a special placement on the Kubernetes web page and on our web page, but we actually put together an entire curriculum about what a Kubernetes expert should know, and these companies have gotten three of their internal experts to pass an online exam.

\[01:12:17.15\] What's pretty neat about that exam, and also the training that we offer around it, is it's not a multiple choice test; we actually spin up nine different clusters over the course of the exam and have you deploy Kubernetes and demonstrate that you can debug it and work with it and such. So it's a very real-world kind of experience.

**Jerod Santo:** Sounds like fun.

**Dan Kohn:** Well, I'll give you a little dirty detail here, which is for everybody who's passed the exam so far, which is several hundred people (400-500 people), the exam on average turned out to be four hours long, which is pretty painful...

**Jerod Santo:** \[laughs\] So it's not very fun.

**Dan Kohn:** Yeah, but we're working with our psychometrician - we just figured out a way of dropping out some of the questions that did not impact the scores, so all of those people would have scored the same... Anyway, in order to cut the exam back to just three hours; hopefully two and a half or three. I think we'll make it a much more reasonable experience for folks... Because we do think that this training we're offering, and the exam along with it is really a great way to come up to speed on Kubernetes, but we don't want that to be a painful experience.

**Adam Stacoviak:** So for those that have been tuning in this entire show, kind of getting a glimpse behind the scenes at your job, the role you play each and every day, the importance of this foundation, the projects behind it, the members involved - both end user as well as cloud providers and everyone else in between... I think probably the best way to lead this would be to give people some in-roads into getting involved, supporting, or playing a role if they want to. One, I'm sure it could be membership; two, it could be going to the conference... What are some other common paths for our listeners - which are developers, people out there that wanna know more about how a foundation is actually run and the supported gifts of the projects, what can they do to get involved? What are some good takeaways for them?

**Dan Kohn:** Yeah, so really the biggest one is please go take a look at our projects. That's the area where -- all of our projects are eager to have more contributions, more users, and so if you... You know, there's this joke that sysadmins know Perl and DevOps engineers know Ruby, and SRE's (site reliability engineers) know Go... But in particular if you're a sys admin or a DevOps engineer, this is really a great area to dive into and improve your skills and improve your hiring potential and help your company be able to deploy much faster, going from quarterly or monthly deployments to hopefully dozens of deployments per day; we're getting a much faster internal velocity.

That would be definitely my biggest call-to-action - go look at our projects, and hopefully you'll find all 14 of them are very welcoming and eager to have new users, and then as you see bugs or areas for improvement or features that are missing, we'd love to get your contributions on it.

A few other angles into things - we do have a really great, completely free course on edX, that is an intro to Kubernetes course, and that I think is a great way to learn about it. Then if you like what you see there, you might decide to take our more advanced course, that's an intermediate training course and that prepares you for that exam that I mentioned before... Particularly if you wanna start getting immersed into Kubernetes.

\[01:16:05.13\] And certainly our event, KubeCon + CloudNativeCon in Austin, December 6th-8th, is really the best way to just kind of drink from a fire hose and see everything that's going on. This year we have a number of one-on-one sessions... We sort of have both the green slopes and the double black diamond sessions, and everywhere in between. And then, as I said, we'll be in Copenhagen May 2nd-4th, so for our European friends it's maybe an easier way to dive in.

**Adam Stacoviak:** You guys are busy... Busy-busy. Wow. I had no idea about this edX course, too. So this is free, and I'm assuming the course is supported (or funded) and produced by the Linux Foundation?

**Dan Kohn:** Exactly. So CNCF funds it, but the Linux Foundation has an internal training team that put it together.

**Adam Stacoviak:** Gotcha. Interesting.

**Dan Kohn:** It's actually one of the areas that I'm most proud of this year, where we have -- over 14,000 people have signed up for this, and my favorite statistic is it's actually from 141 different countries, so it's been really neat to see that adoption and interest around the world.

**Adam Stacoviak:** Well, it's currently ranked 3.5 out of 5 on the course, so it's good.

**Dan Kohn:** I think we should aim better than that.

**Adam Stacoviak:** Yeah, let's get to four.

**Dan Kohn:** We're gonna be doing some revisions for it, because the course was done towards 1.6, but we have a new version that will be hooked into the 1.8 release. We're actually gonna be doing quarterly updates to these to have them match up with Kubernetes.

**Adam Stacoviak:** Very cool. Well, Dan, thank you so much for the time you've shared with us today, and the insights into the role you play specifically, and then the role the foundation, and also the Linux Foundation as a parent foundation to many - the role it plays and the importance of it, and hopefully open source developers out there have gotten a glimpse behind the scenes at what it takes to run a foundation, and maybe more importantly, the importance of it \[unintelligible 01:18:13.12\]. Dan, thank you so much for your time today, we appreciate it.

**Dan Kohn:** Yeah, and thank you guys for all the work that you do. I've been a long time listener and I really think it is immensely important for connecting together this diverse and physically distributed group of open source developers around the world.

**Adam Stacoviak:** Absolutely. Yeah, thank you for being a listener, much appreciated.
