**Adam Stacoviak:** The last time we talked was in Austin, right? You had your comrade there, Gabe Monroy...

**Brendan Burns:** Yeah, yeah.

**Adam Stacoviak:** We talked a little bit about the direction of Kubernetes, but I thought it'd be interesting to come back a year later, because that conference -- I don't know how much you remember from a year ago; I'm sure your life is a little blurry these days...

**Brendan Burns:** It was snowy. I remember it snowed.

**Adam Stacoviak:** It did snow, for the first time in Texas in a while...

**Brendan Burns:** Yeah, yeah, it had been a while...

**Adam Stacoviak:** It never snows in Texas, let alone Austin, but yeah, we did actually have some snow... More of a state of Kubernetes. I mean, you've been here since the birth, obviously, one of the founders of the project... During that conversation I did ask you something -- and I don't mind if you forget some of these things, as I'm sure you do tons of interviews, but I asked you your temptation to keep it (speaking of Kubernetes) rather than open-sourcing it or taking these ideas and planting them into Google, and the way it's rolled out...

**Brendan Burns:** Sure.

**Adam Stacoviak:** ...and your response essentially was like "No, I'm actually really happy with open-sourcing it", because you see a lot of people, a lot of developers have really good ideas, release a portion of it as open source, and build this gigantic company around it...

**Brendan Burns:** Yeah, yeah.

**Adam Stacoviak:** And you could have been the kind of person who is maybe -- I don't wanna say selfish, but maybe self-thinking, and did that with Kubernetes.

**Brendan Burns:** I don't know, I'm not sure it succeeds, actually... I actually think that the reason we're all here is because of the ecosystem and because we've enabled this large group of people to bet their success on this open platform. I think if you try and hold on to it, you try and be too tight with it, it doesn't succeed. I think that's the lesson of cloud, in my mind anyways - if it's not open, it's not gonna win ultimately.

I mean, it wasn't a choice that I was interested in no matter what, but I'm actually not even sure that if you make that choice, it -- because if you catch your mind back, actually, in the moment leading up to when we first announced it, there were a lot of different orchestrators out there, a lot of different projects, a lot of different approaches, many of whom only the people who were paying attention even noticed... And I think that the reason that five years later we're here, 7,500 people, is because it's not the tech, it's the community; the fact that it really could be something that everybody could bet on is the reason why it survived.

**Adam Stacoviak:** \[00:04:31.06\] Interesting.

**Brendan Burns:** Yeah. So I'm a big believer that open always wins, that community always wins. It takes longer than others sometimes, it takes a while sometimes, but...

**Adam Stacoviak:** What do you think gave you that feeling though? You use words like "always", "everytime" - those are... You know what I mean?

**Brendan Burns:** I am guilty, I have to admit. I'm guilty of using words like that a lot. I speak very definitively at times...

**Adam Stacoviak:** Yeah, that's why I'm asking. How did you learn that?

**Brendan Burns:** Maybe I believe it's more definitive than it is... But I think you look back and you look at some of my first experiences in open source - they were in the height of the FreeBSD/Linux FUD wars, in the late '90s, early 2000's... There was a big thing going on. People would argue "Do you use BSD?" or whatever... And I think one of the things that I took out of that was that the community that developed around Linux was more supportive, it was more open, and the ecosystem just was more available to people. I think ultimately that's why Linux ends up being the success that it is. FreeBSD is still out there, for sure, but it's not like it was in 1999, when it was sort of a horse race...

**Adam Stacoviak:** Yeah, it's clear who the winner is.

**Brendan Burns:** Yeah, it's clear who the winner was... So I paid a lot of attention to that. I think that there's a lot of other examples -- I think the Hadoop ecosystem is another really great example of like lots of different companies being able to come in and bet themselves on that ecosystem... And also companies being willing to step in and develop in-house expertise in that software, in that technology. And in a smaller scale, too - you can look at things like Ruby on Rails, or any of these other kinds of... I feel like every single one of the important cloud-based projects has been open source at its core, and I think it's a necessity. I don't know.

**Adam Stacoviak:** I've got one comeback to that, but I wanna go here first...

**Brendan Burns:** Alright, that's fair...

**Adam Stacoviak:** We'll go to the comeback first, and we'll pause the other one... So when I was in this analyst meeting recently, it was talked about how you've got a graduated project -- we talked about the CNCF, for example... You've got graduated projects, which is what Kubernetes is; you've got incubator projects, which are in the incubation stage, and then I don't know what this last one is...

**Brendan Burns:** Sandbox.

**Adam Stacoviak:** Sandbox.

**Brendan Burns:** Even less incubated than incubating.

**Adam Stacoviak:** So everyone that has been graduated began as open source, and they talked about, hey, if you've got ideas around this pathway, this CNCF landscape, this cloud-native landscape, the way to get in, essentially, is to create something open source that's useful, that has adoption...

**Brendan Burns:** Right, yeah.

**Adam Stacoviak:** So speaking to that, that's the exact recipe for essentially having a project that matters in this world, in this particular world here... Not the world at large, but this Kubernetes/cloud-native world.

**Brendan Burns:** \[00:08:02.02\] Yeah, and I think that's true. I mean, I'm not gonna say that it has to be every project. You look at things like SQL Server - massively successful database, not open source. I think you can certainly build useful, interesting software that a lot of people use... But I think that in the world of infrastructure, where you're using it, but you're running on it, and you really wanna be able to understand it and debug it, and participate in it, and it's a platform...

**Adam Stacoviak:** It needs to be open, yeah.

**Brendan Burns:** ...it really needs to be open. I don't know, that's my feeling.

**Adam Stacoviak:** Yeah, it makes sense.

**Brendan Burns:** Especially because it's such a hybrid world. People need to know that they can run the same app in multiple different places, and open really helps with that.

**Adam Stacoviak:** Right. Does licensing ever come up for you when you talk about open? So whenever you have certain projects out there using Commons Clause, or just ways to not be cannibalized by the big guys, or the big people, so to speak...?

**Brendan Burns:** Yeah... I mean, I think this is a real risk for a lot of people...

**Adam Stacoviak:** Because that's why at infrastructure levels it's like "If we build and we can't make money from it..."

**Brendan Burns:** Yeah, I know, it's tough, and I actually feel like as a cloud provider if we're not creating a platform that you can make money on as \[unintelligible 00:09:12.08\] software vendor, long-term we're making a mistake... And I think one of the great -- it's attributed to Bill Gates, but one of the things he said early on was "For every dollar that Microsoft makes, our partners have to make ten dollars." I think if you don't have that vision, and if you don't have that notion that to build a successful platform you have to enable other people to make on it... You can't be always cannibalizing their stuff. I don't know that we're there in cloud yet, but I think we really should try and get there.

**Adam Stacoviak:** Any risks coming up that you're aware of around this concern?

**Brendan Burns:** Well, I think as cloud providers we actually have to build infrastructure for those ISVs.

**Adam Stacoviak:** So the independent cloud providers have to have this adoptive feeling...

**Brendan Burns:** Right, I think we have to adopt the belief that we're not just providing infrastructure for infrastructure consumer, but we're actually providing infrastructure for ISV app developers. In Azure right now we have these things called managed applications, and it's not -- I actually have a bunch of teams that aren't Kubernetes teams, and one of those teams does this work on these things called managed applications, and it's really all about "How do we build a platform for independent software vendors to be able to successfully and scalably sell their software on Azure?" And actually, I think Kubernetes is a big part of that, because the challenge of selling software is making it reliable and operable at scale.

It's great if I can sell ten copies of my software, but if I have to have a person on call for every one of those copies, I don't really have a very scalable business. I think Kubernetes enables people to containerize their applications and potentially run them very reliably without a lot of interference from an operator, at a much higher scale. So that was one of the motivations for doing it in the first place, to provide this infrastructure platform for application developers to build on top of.

If you think about someone who sells software on a CD - every copy of that CD doesn't really incur much in the way of operations cost. Maybe they have a support center somewhere, but every time they sell a new copy of that software it's not like they think "Oh my god, we're gonna have to hire a new SRE to take care of it for me", but in the distributed systems world it's kind of like that.

**Adam Stacoviak:** For every new customer you have a cost.

**Brendan Burns:** Yeah, for every customer there's a little bit of consulting, a little bit of operations you have to do. It's very linear, and that means it's hard to scale your business... And I view that as an infrastructure problem; we're not supplying the right infrastructure to these software vendors to enable them to manage their software at scale... So I hope that Kubernetes - and especially managed Kubernetes, like in the Azure Kubernetes service - provides that, provides that sort of application-oriented infrastructure and makes it easy to build and scale your app.

**Adam Stacoviak:** \[00:12:09.10\] Any particular good stories around managed applications? What's just a great example of a managed application, and why?

**Brendan Burns:** We've built a really great partnership with Databricks, for example, in Azure. Databricks is a big data/data warehouse kind of streaming analytics solution... Fundamentally, it's a piece of software that that company built, and now they've been able to turn it into a product inside of Azure, without being -- they're still an independent company, they're still doing their thing and running on all sorts of different clouds and on-prem, but by using managed applications, they've been able to integrate it into the Azure API in a way that makes it more native to Azure than it is if they just sort of installed it on -- and it makes it more operable too, because we can enable their operators to gain access to all of the resources that are being deployed in Azure, to support it.

That's a pretty successful example that we've built, but we have a bunch of different other partners who are using managed applications...

**Adam Stacoviak:** Like databases, stuff like that?

**Brendan Burns:** That sort of things, or people like Chef, and other sorts of people who have to have a server component that they wanna deploy into everybody's end user subscription if they're gonna be a customer.

**Adam Stacoviak:** Is there anybody that can actually just build their business -- say their application runs on Azure, but that's the only place it runs; they actually built it to run in Azure, as an independent company.

**Brendan Burns:** I think at this point all of the ISVs know that they need to be multi-cloud, so...

**Adam Stacoviak:** Well, I don't mean that as not multi-cloud, I mean it as like maybe just simply their stuff only runs on the cloud, under a provider; they don't even have managed -- it's literally software built inside of managed services, for example.

**Brendan Burns:** Yeah, and I suspect that that's sort of where we're headed, where you take a managed Kubernetes cluster, you lay on some application code, you use some of our managed application infrastructure and you actually literally can sell that as a product... And we actually help you monetize it. We actually help with the building relationships, and that sort of stuff.

I think as a cloud provider, that's an obligation. I see that as an obligation that we have. I think it's good for our long-term health as a computing industry, but I think if all we do is sell infrastructure to the direct consumer, just to the person who's building the system, I don't think we've built a healthy ecosystem. You need a healthy ISV, independent software developer/vendor ecosystem, and I do worry actually that we don't do enough with some of these open source companies to help them build scalable business models.

**Adam Stacoviak:** Interesting. So you're doing more of that now, as part of...?

**Brendan Burns:** Yeah, I think that's a big--

**Adam Stacoviak:** Or a long-term goal?

**Brendan Burns:** I think it's a long-term goal. I think it's a focus for Azure to build an environment in which our partners can be financially successful, invested in their success. I think historically that's always been something that Microsoft has been good at - partnering well with companies, ensuring that they can make money on our platform... I think it's an important differentiator for our cloud, for sure.

**Break:** \[00:15:27.11\]

**Adam Stacoviak:** You'd mentioned people, community, things like that, and the importance level of it. For us, in our business here at Changelog, one thing we do is partner well - not only with community members, but also with different brands that need our help to share their story, tell developer culture stories, and just the stories about these different brands that just have a hard time telling more than their core competencies, actually making them far more human than they're able in other avenues...

And one thing I'll often have to tell people about our perspective when it comes to partnerships and our DNA, is that we're here to raise the tide of everyone. You can't go around building a great city knocking people's buildings down. Let's say I was a Microsoft employee, or you and the role you have - you're not going around knocking people's buildings down; you're helping them lift their buildings up, you're making sure street lights are corrected, that the roads have no potholes, whatever - all the things that make a city a good city. How do you feel about that, knocking buildings down, versus building others?

**Brendan Burns:** I think it's a really important aspect, because you waste so much energy in that stuff, that's not helping anybody be successful. You're not helping anybody. Ultimately, at the end of the day, what excites me and what has always excited me is enabling that user to be successful using software that I've built, or I've helped build. Anything else, in some ways, is a waste of time. If you're tearing stuff down or you're focusing on anything other than making your stuff great, I feel like you're wasting your effort. It's no fun to win if it's a scorched earth.

**Adam Stacoviak:** I like that, yeah.

**Brendan Burns:** At the end of the day, you raise the flag and you're like "I won", and then you look around and you're like...

**Adam Stacoviak:** No one else is there.

**Brendan Burns:** "No one else is here." Is this really winning?

**Adam Stacoviak:** What triumph is worthy \[unintelligible 00:18:53.00\]

**Brendan Burns:** Yeah, and I think that's the trouble - some people focus more on the winning than on empowering the user. And obviously, it's great -- I love the fact that we're here and there's 7,500 people here... That's amazing. It's way better than me being in my basement and being like "Look at my Kubernetes projects... I wish somebody would look at it." But as I said at the get-go - I think we're here because we've had that "Take the high road, build people up" sort of ethos; we've invited people in, we've invited people to join, and to help, and to find a place where they can contribute.

We were just at the Contributor Summit yesterday and we were celebrating a bunch of people who do release management, who've done docs, who have helped organize the task board for various special interest groups... Totally non-technical jobs, totally not distributed -- but they're essential jobs to keeping the community going. And the fact that we've created a community where people volunteer for that and then get rewarded - that's why it's successful. I'm a big believer in that.

**Adam Stacoviak:** \[00:20:04.07\] Well, I'm glad you brought it back to the community, because that was the tangent I wanted to go on earlier... What I wanted to ask you about that was that we hear the word "community" a lot. "It's because of the community", and I'm not discarding that; I'm just sort of like making fun of ourselves as we say this, but there's some people out there who are like "What do they mean by community?" So help me break down what community is at the cloud-native level, the Kubernetes level. What is a community member? Is it a user, is it vendors? How do you see successful community being implemented in this community here?

**Brendan Burns:** I think it's twofold, I think there's two different layers of community. There's the core Kubernetes contributor community, which -- we had like 400 people yesterday. They are the people who day and day out - this is their job; they're working on providing it as a service, or they're working on making it better, or working on integrating storage providers into the core project.

There's a small community that is really focused on building the project itself. The team, if you will, that builds the project. And that's an important community, but in some ways it's more like any other traditional software team. I mean, it's different because it's distributed, not everybody works for the same company, and some people don't even work for anyone... So it's a little bit different, but it's sort of the same.

Then I think what you're seeing here, on the expo floor and everywhere else, is the broader community - the community of users, the community of the people who have taken an existential bet on this technology. I think that's, in some ways, the more interesting and powerful community - the people for whom this technology is the way that they deliver their application, or it's the thing that their startup is based around. You know, a monitoring company that has said "We're all-in. If you don't use Kubernetes, you can't use our software." That's a community member. They're fully vested in this community's success, because if it's not successful, then their company doesn't exist, no matter how awesome it is. No matter how awesome their thing is, if Kubernetes isn't successful, their monitoring tech isn't gonna be successful.

So I think it can be vendors, but I think the big thing is that everybody is sort of collectively vested in Kubernetes being successful and users being successful using Kubernetes. That's what makes the broader community - being on Slack, helping people out on Slack, helping out with the GitHub issues, Stack Overflow... The traditional people helping each other stuff that you've seen happen in the developer community for a really long time, actually... Certainly from the advent of the internet - the broad scale internet in the mid-90's, and probably even earlier on mailing lists and things like that, where people are... There's just a sense that "We're gonna give advice and we're gonna help you learn to get through that error that you hit six months ago", and that sort of thing. We'll put up a silo and say "Oh yeah, you're working for a competitor company. I'm not gonna help you with that Kubernetes error that you've just hit." It's that kind of stuff that I think builds the community.

**Adam Stacoviak:** Yeah. When you were saying that was the interesting thing about the team, I was thinking it is kind of interesting because somehow you've magically been able to have probably highly influential people from various companies come together, and then still not enable or disable clicks, and access, and politics. I'm sure you're not free of it, but...

**Brendan Burns:** \[00:24:02.18\] Yeah, I'm not gonna be like "We're free of all that stuff, it's kumbaya all the time", but I think that we have been very lucky in the group of people who were in the initial leadership positions... But once you shape a culture, it kind of takes care of itself.

We had this steering committee summary at the end of the community meeting yesterday, and we got up there, and -- in another world, you could imagine us being like "Here's the future direction of Kubernetes for the next 12 months. We will do this, this and this. We are the steering committee, and we tell you what to do." Instead, we spent a long time talking about how our primary job is giving away responsibility, and giving away power, and delegating to people. I think that when you do that -- it's funny; you might say it's lazy to be like "Oh, I'm just gonna let you take care of that. I'm not gonna do it, you take care of it", but when you do that to people, they do such an awesome job because you've trusted them, because you've given them power, but you've also told them that you trust them. They're gonna do amazing things to validate your trust. I think that's really helped.

We still have plenty of bikeshedding discussions, where we spend way too much time talking and not enough time doing, and sometimes we have fairly significant disagreements, but I do think that there's a level of respect amongst everybody that is important to the project, for sure... And I think unique, actually. If there's anything that I'm proud of from the project, it is that small community, that culture, that group of people that we built there. It's a pretty special thing.

**Break:** \[00:26:11.03\]

**Adam Stacoviak:** It seems like the secret sauce is that somehow everyone who matters - or can either destroy or build up the future of Kubernetes - understands that hey, if Kubernetes succeeds, then your business has an opportunity to thrive, or our business has an opportunity to thrive, so that's our treaty, so to speak, our DMZ, so to speak.

**Brendan Burns:** Yeah, but there's two different ways that that can end - that can end in sort of the mutually assured destruction, cold war style, like "Yeah, everyone's gonna mess with it, but nobody's gonna really invest in it either." Or it can end up where we are, which is like "We're gonna really go and collaborate", raise all boats, as you said...

**Adam Stacoviak:** \[00:28:13.12\] I like how you say bet. Earlier you've said the word "bet" a couple times - bet everything on the fact that it's gonna --

**Brendan Burns:** Yeah, yeah. And you have to. That's what it is.

**Adam Stacoviak:** Yeah, it's rolling a dice, that's for sure.

**Brendan Burns:** But anything that's worth doing ends up being a bet like that, I think.

**Adam Stacoviak:** Let's talk about some things you mentioned last year, and contrast them against this year. Last year on stage you mentioned Metaparticle was part of the future... What's the state of Metaparticle? What's going on with that?

**Brendan Burns:** Man, I'm so sad about Metaparticle; I've just not had enough time. I still think it's the future.

**Adam Stacoviak:** Okay. Any movement on it, any progress? I haven't heard much about it.

**Brendan Burns:** Here and there, but in all honesty...

**Adam Stacoviak:** Was it premature to mention it or announce it?

**Brendan Burns:** No, I don't think it was premature, because I think people are still talking about it, and I think it was intended, in some respects, to stir a conversation, more than to turn into -- I don't think I had any expectations it was gonna become a huge project over the next year, or whatever. I do wish I'd had more time to spend on it. Real life kind of got in the way, I guess... But I do still think that -- there's an ongoing conversation that's happening in that space, that's worth having; I still see people either talking to me at conferences like this, or referencing it in documentation. I guess it's one of those things that's on my list of like "I'll hope I'll get back to it someday." That's sort of where that's at.

**Adam Stacoviak:** Is that what you do on nights and weekends?

**Brendan Burns:** It was... That was what I did, yeah. Nights and weekends -- a lot of actually what I'm talking about today... I've been working a lot on client libraries for various languages in Kubernetes, and that's actually what my talk is at the end of the conference on... So I've been spending a lot of time on that.

I've been spending a lot of time on the VS Code extension for Kubernetes. I've been really enjoying working inside the IDE and trying to integrate Kubernetes and the IDE together...

**Adam Stacoviak:** Right.

**Brendan Burns:** Also, a lot of time and energy on the Virtual Kubelet, virtual node stuff... Trying to figure out how we marry serverless infrastructure up with Kubernetes. That's been a big effort.

**Adam Stacoviak:** Well, this show is coming out after your talk, so give us maybe...

**Brendan Burns:** Oh, my talk is way down in the weeds.

**Adam Stacoviak:** Let's go in the weeds there.

**Brendan Burns:** I'm gonna do some live coding, I'm gonna do a PR... My first PR in a talk, actually. I've never done it before, so it's gonna be an experiment.

**Adam Stacoviak:** Is that right? Okay.

**Brendan Burns:** And by way of experiment, I'm gonna show the complexity of how we build these libraries, starting with a GitHub issue that's sitting out there, because somebody wants to use our generated library to proxy request, and they find out that they can only do \[unintelligible 00:31:10.11\] and they file an issue and they're like "Why can't I do this?"

All of our libraries are built from OpenAPI specifications. So it's a JSON specification for an API that the Kubernetes community puts out; you take it, you put it into a code generator, it generates a whole bunch of code. That tool actually we don't control. It's another open source project.

So to fix this bug, what I'm gonna do in the talk is we have to make a change to the OpenAPI specification, we have to rerun that code generator, we have to then take that generated code, check it into the client library repository, build that client library repository and then push it out to Maven, and these code library things.

\[00:31:58.24\] So it's a very small thing that turns into a bunch of different stages in this pipeline. And just to explain why - it's the only way we can keep up with the project. There's always these new API types being added in, there's always new data fields and whatnot. So if we didn't use a code generator... And you see this actually, because there are people out there who have handwritten Kubernetes client libraries, and over time they just get further and further out of date... And they get further and further out of date because it's just exhausting to try and keep up, so the only way you can do it is through these code generators. But if you use the code generator, then suddenly you're beholden to the features that are supported by the code generator, to the quality of the API spec, which has some gaps, the quality of OpenAPI itself, which has gone through a couple different versions to fix some problems. That's sort what the whole talk is about. It's gonna be very much in the sausage-making.

**Adam Stacoviak:** So who's the person that should not miss that, or if they're listening later, they should go on YouTube and find the talk?

**Brendan Burns:** I think anybody who's interested in coding to the Kubernetes API in a language that's not Go. That's who we're really aimed at. And actually, ultimately we may very well be aimed at Go as well, because the existing Go client library is a constant source of pain and friction for developers, because when you import it, you basically import three quarters of the Kubernetes tree just to import the client library; it's way too heavy. So there's some amount of work to see if actually we should move to one of these generated client libraries for smaller scale Go programmers who wanna communicate with Kubernetes.

Then there's also consistency. One of the other things you realize when you start doing this is how the system loads a kubeconfig file, the config file that describes how to talk to your cluster... It's not documented anywhere. It's only in the code. But suddenly you're writing client libraries for six different languages, and somebody says "Hey, kube control works, Go works, but your Java library doesn't work." You're like, "Why not?" and you figure out, "Oh, it's because this system looks in this path, and we didn't implement that for that over here", or "Go loads JSON or YAML in a specific way, where that becomes a string, and in Java, Java tries to put that into a boolean", or whatever it happens to be.

It's been an interesting exercise as well in understanding these places in the project where the only documentation is the implementation, and having to take that apart... And honestly, I wish I contributed back more documentation than I have. Usually, it's just pointers; usually, in the code I just say "Hey, the only place this is documented is in the code over here, where I found it", and point back to that.

**Adam Stacoviak:** Does that make you wanna go write some docs for it?

**Brendan Burns:** It totally does. I've referenced earlier the lack of time...

**Adam Stacoviak:** Right. "My nights and weekends are taken up by this..."

**Brendan Burns:** Also, I bought Red Dead Redemption, so my nights and weekends are taken up by--

**Adam Stacoviak:** What is that?

**Brendan Burns:** Red Dead Redemption - it's a video game. It's high-quality...

**Adam Stacoviak:** Okay. I wish I was more of a gamer... I'm just not. I get into it, but I'm not hardcore gaming.

**Brendan Burns:** I'm not hardcore, but sometimes there's a game and it just takes up my life for like four months...

**Adam Stacoviak:** Right, gotcha.

**Brendan Burns:** ...and that's this one right now.

**Adam Stacoviak:** I have that, but it's been from my teenage years. I will play Castlevania: Symphony of the Night any day...

**Brendan Burns:** Nice, nice.

**Adam Stacoviak:** I'll go back and re-play the original Castlevania, but for some reason I just don't get into modern gaming as much... Maybe because I'm older, I don't know what it is, but... For some reason it just doesn't intrigue me as much.

**Brendan Burns:** The open world stuff. I love--

**Adam Stacoviak:** My son isn't old enough yet. He's gonna be three soon, so he's not into it... Maybe when it becomes a dad and son thing, or a daughter and father thing...

**Brendan Burns:** Yeah, yeah. I only play Mario Kart with the kids.

**Adam Stacoviak:** You've definitely gotta play games with the kids. Let's laugh a little on the way out of this conversation...

**Brendan Burns:** Alright.

**Adam Stacoviak:** \[00:36:13.28\] I'm looking at your Twitter feed recently, and... Am I pronouncing correctly when I say -- is it Phippy?

**Brendan Burns:** Phippy. The PHP app. Phippy, the friendly PHP app.

**Adam Stacoviak:** Okay. This giraffe...

**Brendan Burns:** Yeah, giraffe.

**Adam Stacoviak:** It's everywhere.

**Brendan Burns:** She is, yeah. Awesome.

**Adam Stacoviak:** What's up with that? What's the back-story?

**Brendan Burns:** The Children's Illustrated Guide to Kubernetes.

**Adam Stacoviak:** I've seen that, yes.

**Brendan Burns:** So Phippy is the main character in the Children's Illustrated Guide to Kubernetes. We had a volume 2 this KubeCon, Phippy Goes to the Zoo.

**Adam Stacoviak:** So this year is volume 2...

**Brendan Burns:** This year is volume 2.

**Adam Stacoviak:** Because I saw it last year.

**Brendan Burns:** Yeah. Phippy Goes to the Zoo. Introducing a few more parts of Kubernetes - ingress, and a few other parts. And we also announced that we're actually donating -- so all of that was originally created by Deis, which a startup. Microsoft acquired Deis a few years back, and as part of that acquisition we got Phippy, and the stories and all this... So actually at KubeCon this year we announced that we're donating all of that to the CNCF - all of the intellectual property, all of the graphics and all that stuff, donated to the CNCF; story - donated to the CNCF. So there's actually Phippy.io, and you can go there and get the PDFs and all that sort of stuff.

As a tribute to all of that, and a tribute to the fact that KubeCon had come to my hometown - I'm a native Seattlite, born and bred - I decided to take Phippy on a little bit of a tour this past weekend... So a lot of the places that the tourists go to, or the places I take visitors around Seattle - I took Phippy around to all those places.

**Adam Stacoviak:** I dug that. I think it's a really cool idea. I wasn't sure what made you do it, so I was hoping for some of this context.

**Brendan Burns:** Yeah, it was because we knew were donating it, obviously... And I don't know if you saw the keynote, but Matt Butcher and Karen Chu - who were some of the people who were responsible for developing this whole thing while they were at Deis - actually got to do a reading... In the keynote they did a reading of volume 2 up on the stage.

**Adam Stacoviak:** Nice.

**Brendan Burns:** It was pretty awesome. So if your listeners didn't get a chance to check that out, they should check out the livestream of the keynotes from KubeCon and see the reading of Kubernetes Children's Illustrated Guide Vol. 2, Phippy Goes to the Zoo.

**Adam Stacoviak:** So if you go to...

**Brendan Burns:** Phippy.io.

**Adam Stacoviak:** Yeah, Phippy and friends here... You've got Goldie, Zee... Goldie is based on the original gopher...

**Brendan Burns:** Yeah.

**Adam Stacoviak:** Zee and Captain Kube.

**Brendan Burns:** Yeah, Captain Kube. Captain Kube always looks a little grumpy... I don't know, I'm trying to cheer him up, but...

**Adam Stacoviak:** It's the eyebrows. Anytime you've got a furrowed brow, you're gonna see him...

**Brendan Burns:** Yeah, he looks a little grumpy. He's a stern captain, I guess.

**Adam Stacoviak:** We'll put that in the show notes, but that's also where you can download and/or read volume one and volume two, as well.

**Brendan Burns:** That's right. Check that out.

**Adam Stacoviak:** I happen to have a printed copy, because I was here last year.

**Brendan Burns:** We do.

**Adam Stacoviak:** Where do you get printed copies at? Is it online, or just here at the conference?

**Brendan Burns:** The Azure booth, if you're at KubeCon... But I guess this is gonna go out after KubeCon, so too late.

**Adam Stacoviak:** And for listeners, how do they get it?

**Brendan Burns:** I don't know...

**Adam Stacoviak:** Is that even possible?

**Brendan Burns:** I don't know that you can get it. I mean, we have it at conference swag, and I imagine CNCF at future conferences will have it... So come check out the booth.

**Adam Stacoviak:** I've gotta go buy it, because I have to get volume two. These things are gonna be worth money one day, if not already.

**Brendan Burns:** We have some stuffies as well, and you can buy the stuffies at the CNCF store as well. Those will probably be available online.

**Adam Stacoviak:** Did you happen to see Julia Evans' illustrations from last year?

**Brendan Burns:** Oh, yes, I've seen some of that stuff.

**Adam Stacoviak:** For whatever reason, the conferences \[unintelligible 00:40:00.14\] still had a huge stack, I wanna say maybe like 25 of them, and I've been thinking... Like, I wanna keep one for me. I've got one of them framed, ready to go up on the wall, because I wanna place it in my studio...

**Brendan Burns:** \[00:40:15.25\] Right.

**Adam Stacoviak:** But then the others - I've got 25 or 30 of these things, so maybe if you're listening to this, reach out and we'll see if we can ship you one somehow...

**Brendan Burns:** Send them out, that's right.

**Adam Stacoviak:** We'll roll it in a tube and...

**Brendan Burns:** Ship it off.

**Adam Stacoviak:** Cargo it out there.

**Brendan Burns:** It sounds good.

**Adam Stacoviak:** Well, Brendan, it was a pleasure to catch up with you.

**Brendan Burns:** Absolutely.

**Adam Stacoviak:** It's always fun to get a snapshot of where things are going. I feel like you're such a great person to talk about, obviously, because you play such a key role in it, but you see things in a different level than I think most people get a chance to in this community, so it's really interesting to get that.

**Brendan Burns:** Sure.

**Adam Stacoviak:** Anything that I may not have asked you, in closing, that you're like "Man, I've gotta share this... Don't wanna leave without that."

**Brendan Burns:** No, I think we did a pretty good job, actually. I'm glad we got the Phippy thing in at the end, so...

**Adam Stacoviak:** Cool. Let's leave it there. Thank you so much for your time, I appreciate it. It's always a pleasure to catch up with you.

**Brendan Burns:** Absolutely. Thank you so much.
