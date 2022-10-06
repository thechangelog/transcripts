**Adam Stacoviak:** \[00:31\] Welcome to our Spotlight series titled The Future Of Node, recorded at Node interactive 2016, in Austin, Texas. We produced this in partnership with the Linux Foundation, the Node.js Foundation and it's sponsored by IBM and StrongLoop.

**Break:** \[00:43\]

In this episode I talk with Mikeal Rogers about some of the back-story of Node over the past few years to get to where we are today. We talked about io.js, the fork of Node, what's happened in the community and the code since that timeframe, how the Node Foundation has helped to solidify the foundation on which the Node ecosystem is being built on, initiatives and focuses in the near future, and more. Take a listen.

**Adam Stacoviak:** Where to begin, man? I think the last time we had a deep conversation like this was in the io.js/Node fork timeframe; we had you on the Changelog, talking about the rise of io.js. That was a good thing at the time, because it helped a lot of the community to have some power it didn't think it had, and to take it back in a way, to say "We desire a different feature for Node, and it's important to us, so we're gonna do what we need to do to make that happen."

**Mikeal Rogers:** Yeah, I think also we were able to adopt some governance practices that were relatively new. They were based on some ideas that we had tried out in the ecosystem, like liberal contribution agreements and stuff like that, but no project of that size had ever done it... So the argument that "You should adopt this brand new governance model to Joyent" when we're trying to negotiate any kind of governance model was a really big sell, and I think having some time with io.js to prove it out, to grow the contributor base, to see how it really pans out, that was a really important proving ground for that model. Then after Joyent started the Node Foundation with the Linux Foundation...

**Adam Stacoviak:** That's about nine months after?

**Mikeal Rogers:** No... They announced it about a month after we announced io.js.

**Adam Stacoviak:** What year was this? 2015, right? Not this year.

**Mikeal Rogers:** Yeah, 2015. The day after Thanksgiving 2014 was when we announced io.js, and then in January 2015 there was a Node Summit conference and they announced that they were forming the foundation then. Foundations take a long time to really get off the ground and get the ball rolling...

**Adam Stacoviak:** Announcing it and launching it is two different things.

**Mikeal Rogers:** Yeah, so they announced intent to form, they had some initial members signed up, but they needed more members. Those members, in turn, wanted to put the fork to bed and bring a merger in... So I negotiated with the foundation and the io.js community to kind of bring everything in and merge the projects back together. And part of that was taking the governance model pretty much wholesale, but it's important to remember that the governance policies and practices are mutable, and they're mutable for a reason - because as we scale, we need to change things.

\[03:48\] Even just merging into Node required us to immediately iterate on a lot of these policies. In io.js we really didn't have to worry about a lot of backwards compatibility or breaking changes and things like that. Because it's a new project, not everybody's already depending on it; you can do a lot more. So when we moved and started to merge in, a big part of that was adopting this new release plan where we would kind of balance a lot of the enterprise needs and a lot of the "don't break things" needs with this really diverse, broad community that wants to see change and new things happening. So we kind of get the best of both worlds.

We have a really liberal policy about getting stuff into master and making some changes, then we have a really good cycle and a longer review process to get things into the LTS releases that enterprises depend on.

**Adam Stacoviak:** So this fork from back in the day, Thanksgiving 2014 - it's been a while since then, so we just asked... Thanksgiving 2016 it's been basically two years - give us the overview of what's happened in the last two years, in terms of not just the io to Node and also the Foundation, but to the community. How has the momentum changed, the technology, the community budding up around it, and even including others that weren't just developers. We talk about them on Request For Commits quite a bit, this community that's beyond just the developer, that's completely required and completely needed, and doesn't always feel invited.

**Mikeal Rogers:** Yeah... I mean, that was some work that we kind of started in the io.js days. I think we had this evangelism working group, we had a website working group, and when we merged in, a lot of that stuff came with us. And a lot of those ideas came with us, especially around "If you value different types of contributions, those kinds of people will show up and do stuff."
I think that the main thing that's happened between then and now is that it went from a proof of concept to our actual sustainability strategy. The reason that the project was able to stay up and get more stable over time is because of these policies. We're not testing them out, this isn't proving ground anymore.

The person who runs the CTC meetings now, the meetings that are kind of about making top-level core decisions - he primarily works on tests, something that we hardly ever got contributions in before. And just starting to value it, having the same kind of technical achievement ladder for other kinds of contributions... He showed up and saw that people really valued it and it really took off in testing...

**Adam Stacoviak:** Who is this person?

**Mikeal Rogers:** That's Rich Trott.

**Adam Stacoviak:** Okay.

**Mikeal Rogers:** And also, we've seen a huge growth in overall contributors, but also when you look at the top five contributors, they're not the same people as they were two years ago, which is great.

**Adam Stacoviak:** So we're not depending upon the same people, we're not burning them out.

**Mikeal Rogers:** Exactly. I mean, one of them is the same, I think. A couple of them are the same. But also, the overall share of the codebase is a lot of those five contributors is going down. It's now I think below 50%. So we're getting much broader in terms of...

**Adam Stacoviak:** How do you measure this stuff?

**Mikeal Rogers:** I mean, GitHub is actually really good for measuring this stuff. The fact that we do everything on GitHub means that we can get a lot of these kinds of metrics out.

**Adam Stacoviak:** I'm just trying to think about the GitHub interface - is it pretty easy who has -- I mean, you can see easily who's contributing and how many commits they've had, but does it say percentages and stuff like that?

**Mikeal Rogers:** GitHub has very good data when you're looking at recent activity and when you're looking at top line activity. You really need to dig into the API to get at some of these metrics... In particular, one of the things that we really like to look at is which contributors that are brand new contributors have contributed each month, so how many pull requests have we gotten from people that have never sent one before - we keep track of that, and that requires some API work.

\[07:54\] We onboard a lot of new committers all the time, so we need to be looking at what are the last month or three months of contributions from people that don't have a commit yet, like what does that look like and who is that list, so that we can prioritize who to onboard.

We're approaching a hundred committers in core now... It's crazy.

**Adam Stacoviak:** That's a lot.

**Mikeal Rogers:** It's a lot of people, yeah.

**Adam Stacoviak:** How does that contrast to other platforms similar to Node? Have you done any comparisons to other -- in a language like Swift, or anything else... Even Rails, I suppose, or Phoenix and Elixir, since we're fans of Phoenix and Elixir.

**Mikeal Rogers:** Well, a lot of these platforms are in very different situations. A lot of them still have BDFLs, a lot of them are either entirely propped up by one company or have three companies keeping them afloat. We're really trying to measure ourselves against our own ecosystem, in a way. We're never going to have as many contributors as the Node ecosystem working on core, and we're trying to take some of the practices that we see working in our community and kind of adapt them. So we keep resetting the goal posts.

We also look at "Are we doing better than we used to do? Are we slowing down in terms of onboarding new committers, are we still bringing in new people?" We try to measure against that more than we try to measure against other languages, just because there's so many differences between the communities.

**Adam Stacoviak:** So in a quick form, give me a recap on these last two years, so we can answer that quick and move on to a deeper topic.

**Mikeal Rogers:** We've quadrupled in size in terms of our user community. There were 1.2 million using Node around the time that we did the io.js fork, and today it's 5.7 million. It's a hundred percent year-on-year growth; it's crazy.

**Adam Stacoviak:** Is that Node, or is that JavaScript, or is it both?

**Mikeal Rogers:** It's Node.js.

**Adam Stacoviak:** I know it's Node.js, but do you think that's because of JavaScript itself, or is it the attraction to Node?

**Mikeal Rogers:** JavaScript itself, if you count the whole web, it's hard to find comparisons. You start to arrive at numbers that are far greater than the number of programmers.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** But we've done a lot to broaden our view of what our community is. We don't think of Node as just the server-side thing. There's a lot of people doing great IoT stuff with it. There's an entire new genre of frontend frameworks like React that are built as Node.js toolchains. Those are our users, that is our user community, they're very important.

We have growth in all of these sectors, and we continue to see new sectors pop up, like desktop. Electron comes around and all of a sudden desktop is a thing. So we try to keep ourselves open and keep our view of our users really open as well. So yeah, that's just a lot of people using Node. It also means that in a given year, 50% of the people that are using Node are new to Node that year.

We have a lot of challenges in terms of continuing to keep things simple, keep things easy, keep a lot of educational materials out there. We really benefit from Node being something of an outgrowth of the web community, and there's a lot of values around keeping things simple, bringing in new people, teaching "non-professional programmers" how to do things.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** A lot of those are the values of the web and we've really taken those to heart.

**Adam Stacoviak:** So quadruple growth, merged, obviously... Created a foundation... Is this the second iteration of Node Interactive or is it the third? There was one in Europe, one in Austin... Is this the third one?

**Mikeal Rogers:** We've done two this year, so it's really the second year of conferences. I think next year we'll scale back again to one.

**Adam Stacoviak:** Is this part of the -- obviously it's the Linux Foundation and Node.js Foundation, so this is an extension of all the efforts that came from the last time we had you on the Changelog with the rise of io.js?

**Mikeal Rogers:** Yeah. This is a Linux Foundation conference. The Node Foundation pays for it and we contract the Linux Foundation to run it, essentially. But this entire thing is new, for sure.

**Adam Stacoviak:** \[12:06\] It's a great conference. Great location, a lot of diversity efforts... I like the stickers that were out there, the college stickers, the offering of childcare... It's very inviting, inclusive, respectful... I don't know what better adjective to use.

**Mikeal Rogers:** Yeah, Node.js is a pretty nice community. It's definitely a more diverse community than others, especially certain sectors. You look at the Nodebots community, for instance, and it's really great and diverse. So we benefit from a lot of community support for that kind of stuff, but also now we benefit from some institutional support. There are some Linux Foundation-wide efforts... I don't think we would have been able to do the childcare component if the Linux Foundation hadn't already built up a service doing that, knowing how to run it, how to get all that going.

That community conference - that's a lot of additional infrastructure to take on that we haven't necessarily built up a competency for yet. So that's been really great to see here, as well. Obviously, I started NodeConf, I went to a lot of community conferences over the years...

**Adam Stacoviak:** You have the shirt on too, by the way. Nice shirt. I dig it.

**Mikeal Rogers:** Yeah... Well, when you print them, they're essentially free, so...

**Adam Stacoviak:** That's right. You probably have a closet full of them, so you're like, "Which one will I wear today?"

**Mikeal Rogers:** Exactly.

**Adam Stacoviak:** A black one. \[laughter\]

**Mikeal Rogers:** Yeah, but one thing that we get here that you don't see at community conferences are the kinds of Node users that you don't see on Twitter, you don't see on GitHub... They are really behind the desk all day, writing Node. They are users, they are a community, we need to understand them in order to empathize with them and get what they need, but they're very hard to reach. Unless you get a hold of their company and sell them a block of 20, 30 tickets that they hand out to all their developers, they're just not gonna be at the conference.

So it's been great to get, at this event, a big mix of the foundation bringing a lot of the core groups together, the core community, a lot of outreach from me and Tracy to get a lot of really big community people here, but also a lot of Node users that we just don't get a lot of access to that we can hear from. That's been great.

**Adam Stacoviak:** Tracy Hinds, right?

**Mikeal Rogers:** Yeah, Tracy Hinds.

**Adam Stacoviak:** We like to say last names, so that it's not inside our baseball.

**Mikeal Rogers:** Yeah, she's fantastic.

**Adam Stacoviak:** She wrote I believe the recent VM neutrality post on Medium? Am I correct on that?

**Mikeal Rogers:** Probably not.

**Adam Stacoviak:** I thought she wrote that...

**Mikeal Rogers:** That was probably \[unintelligible 00:14:38.11\]

**Adam Stacoviak:** I'm thinking of the diversity effort... That was...?

**Mikeal Rogers:** Yeah, that was Tracy.

**Adam Stacoviak:** I think it's an interesting perspective, too. I mean, that's gotta be a big change, a big shift from the way things were for Node before, to fork io... It wasn't just a code problem; it wasn't a release problem, it was also a community problem. That stems to inclusivity and diversity.

**Mikeal Rogers:** Yeah... I think one of the big shifts too though, and with the work that Tracy is doing... We have an institution now and we can provide certain kinds of institutional support and get access to those kinds of resources that we couldn't before. Figuring out what the community needs on the one hand, and then bringing to bear the actual foundation resources is more difficult than you would think, because there are a lot of constraints in what you can do as a foundation, there are constraints in the budget, and people and all that kind of stuff.

Tracy works for the foundation now, she's a community manager. She's amazing. Having her come in and being able to know what we can do as a foundation and then work with the community to figure out what we can do for them has been really great. We're not just guessing anymore.

**Adam Stacoviak:** \[15:55\] Right. The post I was referring to was titled "Working towards a safer, inclusive event", talking about this even here in particular, talking about the various things you've done... Again, I love those stickers that you did. For the listeners, there's a red, green, blue -- there's probably one more color in there... Yeah, four colors; I'm not an idiot, except for when I'm on the mic... And they all kind of label how open you are to mixed streams, I suppose. I'm probably wording it poorly, but...

**Mikeal Rogers:** Well, and also don't photograph...

**Adam Stacoviak:** Right, photograph... It's sort of like giving people a soft way, an unspoken way of how to approach them, right? So that you're just being respectful without even having to say a word. Who's idea was that?

**Mikeal Rogers:** Yeah, I mean... In communities like this you get a lot of people with social anxiety, or especially people that are going through a gender transition... There's certain things that you just don't want to have to say to every fuckin' person that comes up to you.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** If you're just not generally comfortable with that, please don't come up to me all the time if you don't know me, and things like that. So that's really good. That's something that was definitely pioneered in the community. I think that some of the community conferences have done different colored lanyards and stuff like that for "Don't photograph me" and stuff like that.

Tracy, in general, has been a pioneer in diversity/inclusivity work in community conferences. She's been involved in EmpireNode and EmpireJS and CascadiaJS. She's been doing this work for the past four or five years, and now to have her on board at the foundation, she can really inform the Linux Foundation that's running the event on all these relatively small things that really matter.

**Adam Stacoviak:** It's the small things, it's the details.

**Mikeal Rogers:** Yeah. These stickers are not that difficult to get, you just need to know about it.

**Adam Stacoviak:** Organize it, and even think about it. That's that detail that you don't think about, unless it's top of mind to care. Unless you're the Linux Foundation, without the resources... If you're just an individual person that says, "I really care about the community and I wanna \[unintelligible 00:18:07.18\] a conference", you don't have the years of experience that you mentioned Tracy has, so you haven't been able to blood your knuckles, so to speak, so sometimes you make mistakes... And they're not intentional, it's just -- you've thought the details of this conference to do to that level, to make people feel invited...

**Mikeal Rogers:** Well, honestly... You have to remember how recent a lot of these practices are. The first NodeConf that I ran was in 2010, alongside JSConf. Chris Williams helped me out and we ran them together. That JSConf was the first conference that I'd ever seen that had a code of conduct. He had to draft one from scratch, which is now the basis of the Conf Code of Conduct that everyone uses. But that was... It's only 2016, that was 2010. So getting from there to actually having preferences about how to approach people is a really long journey.

**Adam Stacoviak:** Let's talk about some things that you've experienced here at the conference so far. You gave the keynote, opening things up... We've got things like the VM neutrality happening, we've got a lot of interesting new announcements, so to speak. What are some of your favorites?

**Mikeal Rogers:** The VM neutrality for me is really, really cool, for a bunch of reasons. It's gonna be great for users... Even if you've never swapped out a VM, it's gonna be great for users. One, it's gonna really increase the competition between VM developers. I've gotten to know a lot more VM developers over the last few years, and they're surprisingly driven by vanity benchmarks.

\[19:52\] There's not a lot of people that can do VM development, right? It's a relatively small pool to do that kind of work, and they're in really high demand. So all these different places that hire these developers -- what was the term that Brandon used? "Birds in gilded cages", or something? They're given a lot of freedom to do whatever they want...

**Adam Stacoviak:** ...within a box.

**Mikeal Rogers:** Yeah, exactly. So you really have to motivate the individuals, right? It's not just market needs and all this kind of business concerns; it really does come down to some of the individuals, and now that we're gonna be able to have benchmarks that show particular Node.js workloads on different VMs, you're gonna see better performance in every VM \[unintelligible 00:20:31.15\]

**Adam Stacoviak:** Right. I talked to Arunesh and Gaurav, I believe is how you pronounce it...

**Mikeal Rogers:** Gaurav, yeah.

**Adam Stacoviak:** Gaurav, yeah... I messed it up two times when I talked to him too, so... It's my thing, people are used to it; I mess people's names up, and I have a long last name, so I can unapologetically mess people's names up, because I get mine messed up...

**Mikeal Rogers:** I get called Mikeel four times a day, so... \[laughter\]

**Adam Stacoviak:** But I was talking to him about ChakraCore and VM neutrality, and they're very excited about it. They're excited about open sourcing ChakraCore and the fun stuff that's happening there, and just the involvement inside of Microsoft. With ChakraCore, it was kind of funny the way that they described this story. I was asking them about Chakra and ChakraCore and how they went about open sourcing it or even making ChakraCore, and they were like, "Well, we were really motivated internally first, then we realized that we were already trying to extract Core to use it on our own, to use it on Azure and elsewhere, so why not just open source it?"

Rewinding back a little bit, you said, "Other VM developers" - give us an idea of what VM developers are out there; what other VM developers are out there that matter?

**Mikeal Rogers:** I mean, V8... There's a whole team of people doing V8 stuff. Actually, now there's a couple. Inside of Google, Chrome uses V8, so there's a whole team inside of Chrome, but there's also now a few people in the GCP (Google Cloud Platform) that work on V8 specifically for Node for the cloud. So you're starting to see a lot more of our concerns make it into Core. And this VM neutrality is actually a part of that. Breaking on every major release for them was really frustrating, because it means that if they want something in for GCP, they've gotta get into V8, they've gotta wait for 3-6 months for it to land in Node, and then they have to wait another six months to get into an LTS release, and that's if they time it right.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** So if we were able to take new V8 releases inside of a major, they could cut that down to 3-6 weeks. So now they're really feeling that, whereas before, the V8 team that's on Chrome binds it to Chrome. They can break the native API whenever they want and they just have to fix the binding layer in Chrome to make it work again. So it's great to see... You know, everybody has the same problems, so we're all working together to solve it.

That's another great thing that comes for all of our users. You're gonna be able to get new versions of the VM inside of major releases, you're gonna be able to upgrade the major releases without breaking all of your native add-ons, which happens now... These are all amazing, awesome things for our users, even if they never swap out of VM.

**Adam Stacoviak:** So this wasn't possible before? What are the actual efforts behind making this possible?

**Mikeal Rogers:** Man, there's a lot... So there's an effort to create a stable API inside of Node...

**Adam Stacoviak:** Nappy... Is that right? Node API?

**Mikeal Rogers:** Yeah... Basically, that's what Node binds to, and if you have a VM, you can expose that API and we will bind to it. That allows native add-on developers to just bind to that API and work with every VM and new versions of VMs, without having to go through a whole recompile because the API changed, or whatever.

\[24:00\] This is something that I don't think would have been possible without the Node Foundation. We got all these different stakeholders to the table and committed to supporting that API long-term. If we still had a relationship with V8 where they were working on a VM and threw it over a wall and then we bound to it, we would never be able to do something like a neutral API, because how can we guarantee that they're gonna support it long-term? Even if we're writing the binding layer, how do we know that there aren't gonna be low-level changes in V8 that are just completely incompatible with this?

Being able to bring all these different people to the table to come up with this API that we can all commit to supporting long-term has been really valuable.

**Adam Stacoviak:** This is all building upon the governance model that wasn't there the last time we talked on the Changelog, back to that episode, The Rise of io.js... I mean, I see a lot of interesting effort happening here that is just unquantifiable. You can rewind it and play it back a little bit, but there's just so much that has compounded... You mentioned the Node.js Foundation, without that not being able to bring people together... At that day, when it was stewarded (I think that was the word being used by Joyent)... Why were they the steward? Remind me about that.

**Mikeal Rogers:** No historical purpose... So Ryan Dahl built Node.js in his own time...

**Adam Stacoviak:** And was employed by them.

**Mikeal Rogers:** No, he wasn't employed by them yet. He built it, he...

**Adam Stacoviak:** Yeah, that's what I mean... He built it and then was employed by them.

**Mikeal Rogers:** He debuted at JSConf EU and then they hired him. They also acquired the trademark. He was working there for a while... Also, during this time when Joyent was stewarding it, they were also putting in a lot of effort into marketing it, particularly to cloud use cases and to enterprises, right? And it's very new at the time, so having that kind of support is really invaluable. When you're on the beginning of your growth curve, having that extra institutional support is really valuable.

**Adam Stacoviak:** Right. Let's pause it for a second... So at that point, in terms of governance models, it was a BDFL, right?

**Mikeal Rogers:** Yeah.

**Adam Stacoviak:** So it's transitioned from that... Which is now sort of frowned upon, from what I understand. I mean, you have opinions, share as much as you like, but the BDFL model has its pros and cons.

**Mikeal Rogers:** I think at the time there wasn't a lot of negativity about the BDFL model yet. By the time that we did the fork there was, but at the time there really wasn't.

**Adam Stacoviak:** Well, it needed more governance, that's the point I'm trying to drive home here.

**Mikeal Rogers:** I would argue that the entire time that Ryan ran it, it really didn't. By the time that Isaac took it over, you could see it growing beyond what Joyent was really focused on. I mean, they're a company, they're a business, they need the funds; they were focused on cloud services. By the time that Isaac took it over, it was starting to become evident that frontend was really growing, IoT was growing... There were a lot of other things that were happening, and also the community was just expanding at a much greater rate than any single company can invest in a project.

I mean, when you're growing a hundred percent a year, you can't double the engineering on that project every year; that's just not doable. I think when you look at something like the Go project inside of Google, they probably have added a lot of resource to that project as it's grown in terms of usage...

**Adam Stacoviak:** There's a lot of disconnect too, speaking of Go, between the community and the core team.

**Mikeal Rogers:** Yeah, and still they have that problem, right? But they're definitely putting a ton of resources into it. I don't think that any company could have doubled every year their investment in Node.js at the time. So eventually, Isaac also left the project and handed it over to another person at Joyent... And this was around the time that we could see how the community really wants to be involved in the project and really can't under the current governance model; they can't really own it, there's a lot of older development practices that they were not able to change, and we're seeing in our own community a lot of amazing, new governance models driving things.

\[28:04\] Rod blew out his voice so he couldn't join us today, but Rod Vagg, who's now elected to the TSC chair, he didn't write any core code before io.js, but he had the chops to do it; there wasn't that technical barrier. He wrote NAN, which is the native binding layer that everybody uses; it's all C++ code, it's really deep in the guts of Node and into V8 - he wrote that. He definitely had the chops to work on it, but he didn't feel enough ownership or agency over it.

Rod had pioneered a lot of governance models around liberal contribution agreements in the level down community and even around then... So he just didn't get involved. And when io.js happened and it had its open governance, he immediately got involved. Now he is elected to be the leader of the project. These are the people that we just weren't able to attract or retain under that kind of closed governance model that we had before, and now we can. We went to from five to almost 100 committers now.

**Adam Stacoviak:** So we got to this subject here because we were talking about VM neutrality and how that wouldn't have been possible had that not been for the Node Foundation being able to bring together the right kind of team, the right kind of VM developers to care enough, bring the right kind of people to the table and say "Let's support NAPI" (I think it's called NAPI... At least that's what Arunesh said; we'll link that up in the show notes). But just having a stable API you can bind to and supporting that... So it's part of this long-term vision of a better Node community, better governance of the Node community.

**Mikeal Rogers:** Yeah.

**Adam Stacoviak:** What else has got you excited? So VM neutrality is a big deal, but what else...? How does that play out into other things?

**Mikeal Rogers:** You'd mentioned IoT, you'd mentioned Node in other places that isn't just the web...

**Adam Stacoviak:** Well, VM neutrality also really helps us with IoT as well. There's work that isn't public that various people are doing on more JavaScript VMs, essentially, and even JavaScript VMs that are entirely on device, and stuff like that. And without a stable native layer for them to expose and for everybody to bind to, it's a really tough sell for them to just integrate that in core, emulate the entire V8 C++ API. So there's a bunch of stuff there that unfortunately I can't really get into the details of, that is gonna be great for IoT.

I also think that if you're currently a Nodebots or IoT developer, one of the biggest headaches that you have is that you're dependent on native APIs; you're dependent on serial port, like Chris Williams, actually, from JSConf. But that's sort of the base underlying library that everybody has to bind to, and every major release of Node it breaks; then everybody lags behind, and there's this huge... I mean, the testing matrix for Node serial is crazy; it's worse than Node Core, because it's every random IoT device, so it takes a long time for that to get updated. That will get fixed, which is great.

In terms of other things to get excited about... Oh wow, let me back up a little bit and try to take my head out of just thinking about really specific -- oh, I'm excited about the security work that we're doing. Security has become more and more top of mind in end developers and enterprises and everywhere. Security is something that everybody has always said is important, but it's always the last thing that people think about, and that is really changing. We're starting to view our applications not as these things that we throw up and hope that people don't try to break into, to now when we put services live, we're entering a hostile environment. We need to really think about this.

**Adam Stacoviak:** \[32:02\] Right. Do you have any examples?

**Mikeal Rogers:** Examples of things that have happened recently...?

**Adam Stacoviak:** Change of focus on security.

**Mikeal Rogers:** So the giant outage that we had a couple months ago, that was basically driven by a botnet of compromised IoT devices... That was a big one. Bruce Schneider has a great quote about this, he's like "Big vendors have done a pretty good job of security for a long time now." So when you're relying on that kind of infrastructural software and big vendors dominated most of the software that was out there that could be compromised, you are in a much better situation than you are in the current IoT landscape, because while there are a couple big vendors putting out chips and stuff like that, the products are all coming out from small companies that add a ton of code to the device that is just not secure.

These devices are incredibly weak in terms of security, get compromised really quickly, and now people are turning them into botnets that basically take down the internet. That's really problematic. We need to start thinking about security at every layer; it's not just an operating system problem, it's not just a packaging system problem, it's not just a developer problem, it's everybody's problem.

We've seen a ton of announcements... The new Node Source work that they've done is mostly around security. I think three of the five features that they released in their 2.0 release this weekend, are all security focused.

We've worked with the Node Security Project, which was lead by Lift Security (a small consultancy), but they were doing a lot of ecosystem security work. They've done a really good job; we've been talking with them for a while. We have a really sophisticated, really good disclosure and security policy for Node Core, but we really wanna take responsibility for the Node ecosystem in terms of the security. Lift is bringing that Node Security Project into the Node Foundation and we're creating a new working group about these security vulnerabilities and go through the responsible disclosure and we'll have a lot of the same practices that we have around Core there as well.

But just taking more responsibility for the Node ecosystem - which is what everybody relies on; it's not just on Core - is really important for us, through the lens of security. I think we tend to try to not involve ourselves in the ecosystem when it means picking a winner. We really want a diverse ecosystem, we want different implementations to flourish and to compete with each other and to have some kind of market decide who wins. So the foundation tries to stay out of the ecosystem from that point of view, but we really do wanna support the entire ecosystem, support the growth of the entire ecosystem, the stability and security of the entire ecosystem. I'm really excited about bringing in the Node Security Project into the foundation.

**Adam Stacoviak:** So you've got VM neutrality, security... What else?

**Mikeal Rogers:** I think we're also gonna save the world, I don't know... \[laughter\]

**Adam Stacoviak:** Do you think Node will continue to grow at a high percent rate each year?

**Mikeal Rogers:** We don't have any signs of it slowing down. In fact, it's gotten a little quicker, but we're cautious about making statements that it's growing quicker than it was, because...

**Adam Stacoviak:** Right... Is it healthy growth? And how do you measure that?

**Mikeal Rogers:** I think that we can measure the health of the projects and repositories that are inside of the Node Foundation. Those are very healthy, and growth there is really healthy. I think it's very hard to measure if growth is healthy or not in the ecosystem. I mean, how do you define the quality of a package that went up, right? And is it really that big a problem with a bunch of low-quality packages that nobody depends on? I mean, that's like the tree in the forest that nobody hears, right?

**Adam Stacoviak:** Right.

**Mikeal Rogers:** So I'm not too worried about that kind of stuff. One of the reasons that we hired Tracy this year is that the focus on the Node Foundation needs to be on education; when half of your users every year are new, because you're doubling in size every year, you really need to worry about what the onboarding and education looks like for the platform.

\[36:04\] We've now entered a point in enterprise adoption where it's not a new team that gets spun up -- this still happens, but there's a team that gets spun up, they adopt Node.js, they have a lot of success, they're on microservices, they're doing all this kind of new technology stuff, they're trying to drive digital transformation inside of an organization...

We're now getting to the point where at a very high level - CIO/CTO level - they decide to make a decision to invest in Node, which means hiring sometimes hundreds of Node developers, or retraining hundreds of Node developers - that means people that used to write Java and .NET. When those kinds of developers come to Node and look for education resources, the kinds of resources that they're used to, that they used to learn the last platform sometimes aren't there.

**Adam Stacoviak:** So is this documentation, is this video tutorials, is this \[unintelligible 00:36:58.28\] independence?

**Mikeal Rogers:** We have all that... We have documentation. We couldn't have more of an ecosystem around that kind of an education, which is why we continue to grow so quickly, but formal certification programs, formal training programs, that kind of stuff...

**Adam Stacoviak:** So is this a Node Foundation thing?

**Mikeal Rogers:** Yeah.

**Adam Stacoviak:** Okay.

**Mikeal Rogers:** The Linux Foundation administers the Linux Certified Admin program, and quite a few other programs for certification, and we're working with them to build out a baseline Node.js certification program, so that when developers who reach for a certification when they wanna prove that they learned something new inside of their organization, they actually have that tool available.

**Adam Stacoviak:** Right.

**Mikeal Rogers:** That's not all that we're doing in terms of education. When you look at Node School, which is an amazing community that I was really involved in when we were starting out - it's grown into hundreds of local trainings that are run by community volunteers; all of the materials are being created online... It's amazing, but it's now having the same kind of scale problems that we had in Node.js, that we've had in every project that gets so big with that kind of community and doesn't have any structure around it.
We're starting to dedicate some of my time, some of Tracy's time to work with the Node School community and some of these other educational communities that have just grown so big that they're becoming kind of unwieldy, and are having some scaling problems that we can work with them to resolve -- and may even need some institutional support from us... So we can actually provide that.

**Adam Stacoviak:** Let's talk about sustainability, to a degree. One question I have is...

**Mikeal Rogers:** We have a whole podcast to talk about that...

**Adam Stacoviak:** I know we do.

**Mikeal Rogers:** Request For Commits plug.

**Adam Stacoviak:** Yes, definitely. Rfc.Fm - if you don't listen, it's a shame. The latest episode, by the way... Phenomenal. I'm like, "Gosh, man... That was such a good show."

**Mikeal Rogers:** Yeah...

**Adam Stacoviak:** But on sustainability, one thing I was thinking about is for those developers -- actually I had a conversation just before you sat down with Athan Reines, and he was talking about how math has broken in V8; he was talking about how he's bringing this library called Standard Lib, and data science type stuff to JavaScript. He basically said, in his own terms, that if you went into a job interview for data science and you tell them you do it in JavaScript, they look at you and ask you "Why?" - why you're not using Julia, or R, or Python, or something like that.

Right now he is living on his own savings, focused on this open source project... For those out there who have ideas, what kind of support can they look for from Node Foundation? Is that important? Is that something you ever plan to do? Not so much to sustain, but to help the community find a sustainable way to bring new research projects like that, experimental projects that are pushing the boundaries, innovating.

**Mikeal Rogers:** Right. So I've spent some surprising amount of time looking at this space, because it's one of the few areas that we haven't seen a huge amount of growth in.

**Adam Stacoviak:** \[40:03\] Haven't seen what?

**Mikeal Rogers:** A huge of amount of growth in, the kind of growth that we see in other places. I've spent a lot of time actually figuring out what we could do here and what our current barriers are. One barrier which I think is a problem and it needs to get resolved, but it's not the number one problem, but it is a problem - JavaScript standards have not given us some of the tools that we need at the language level to do some of this.
This is kind of hilarious - now that Brandon has a company that's doing Crypto in the browser, he is shifting some of his focus... Because he does a bunch of standards work as well, and there are some new 64-bit stuff and some new math stuff coming out that Brandon is pushing forward into TC39; also, the Node Foundation in partnership with the JS Foundation - the JS Foundation is a member of TC39 \[unintelligible 00:40:55.19\] they've started to send me to those meetings.

There's one right now that obviously I couldn't be at, but I went to the last one that they did and resolved a lot of the module stuff, a lot of the concerns that we've had about how do we integrate these module systems; we were able to work that out. And I'll continue to go, to start to try to resolve some of those problems.

Another thing we have to think of is should we try to reach a system like R and Python have, or should we try to go about this in the way that has brought us a lot of other successes? If you look at the early days of Node, we weren't able to bind to a lot of low-level C libraries, and because we weren't able to do that, we ended up building a lot of our own competencies in those areas, and building out things that would have been a native layer, like just binding the C, for something like Redis where we got a native Node.js as a client, that's actually in a lot of workloads faster than the C library. So there's a lot of value there.

Mikola Lysenko, who's here, he was a math PhD and got really involved in the Node.js community and started building different algorithms as just single modules. So you have this modular way of looking at things, which is not the way that we've done math and science computing before. There are these giant libraries in C or Fortran a lot of the time, that are huge and really unwieldy, and a lot of it is entirely unmaintained, but it's the only place to get this particular algorithm.
So do we wanna enable a broader ecosystem of people building that kind of stuff out? I think we currently have the most compelling ecosystem for 3D computing, I think, all built for WebGL, obviously... But Mikola has a project called Regl, which is a phenomenal suite of toolchains for doing modularized 3D programming. He's written a ton of different modules for all this stuff. A lot of it is built on a data structure called ndarray, which is an N-dimensional array, which is incredibly fast; it has gone through four years of optimizations now. There's a Mincecraft in the browser called voxel.js that you can look at that's built on a lot of this stuff. It's actually built on earlier iterations of this stuff. So there's a lot of good movement there.

I don't think that we're going to figure out a way to have a better Fortran binding layer, or cross-compile these Fortran libraries. R is mostly Fortran code. It's a layer of bindings on top of a lot of very old Fortran code that SciPy also binds to and their libraries bind to. We're not gonna get to a point where that is compelling. I think we're gonna have a slower road to it, but we're eventually gonna get to a better place where we have a more modular ecosystem of independent algorithms that can be plugged together really easily. I'm excited for the future of what this looks like, but it is gonna be a long road.

\[43:58\] I think lastly SciPy - R as well, but SciPy, I really look at... They did a ton of outreach and community building with the academic community to get them onto SciPy. Over the years, I've met a few of the people that have really pioneered that work. It's hard community work, you're working with a lot of older institutions, you've gotta have a real passion for it. But I would love to see us as an institution take on some of that. It's one of the things that me and Tracy wanna try to get to at some point - building much deeper inroads with the academic community and building that up.

Python is not uniquely good at scientific computing; I mean, not a knock against Python, it's just not better than any other particular language for that. They don't have great bindings to all these old Fortran libraries, it's relatively slow... They've just built a great community and a great support system for it. They've done a phenomenal job. They have great documentation, they have a lot of people that have written great blog posts about it, there's a ton of knowledge about it, and there are just people out there doing the hard work, getting adoption. I think that's the thing that we can strive for and we can actually make an impact with at an institutional level in the Node Foundation.

**Adam Stacoviak:** How does that actually play out though, at an institutional level? How do you play out that support? Is it similar to the Apache Foundation where they kind of adopt projects and they incubate them to a degree and then take them on full-term once they matured to a degree? Is that some sort of plan? How do you nurture those developers who are living on their own savings or making sacrifices? I know that's open source at large, so you're preaching to the choir when it comes to the sacrifice we all make to move it forward, but I'm just curious what your general thoughts are for a future outlook on that?

**Mikeal Rogers:** I don't think that we have a lot to offer at the project level, mainly because there are actually a couple non-profits now that have spun up to help back a lot of this work; SciPy isn't one of them. Those institutions are set up to take in grant funding as well, because a lot of the ways that those libraries get funded is through grant funding. We're just not an institution that's set up to do grant funding. We could, but it would be like building an entire other competence. But what we can do is we can reach out as the official \[unintelligible 00:46:21.12\] We can connect people to communities that are of value...

**Adam Stacoviak:** So if someone's listening to this, that's like...

**Mikeal Rogers:** If you're at a university, If you're at an academic community, definitely reach out to me and Tracy. I'm @mikeal on Twitter. Also, the foundation bylaws... I think almost all of the Linux foundations that have been set up under the LF have an allotment for a membership tier that can be for non-profits and for academic institutions. We actually have the ability to bring in universities and institutions like that, bring them into a community where not only are we connecting them with the people in the community that are doing good education work (so they can access the materials and stuff like that), we also connect them with each other, and they can learn from each other.
I think a big part of this is that you have really passionate people at different academic institutions that love Node.js, that love the web, that push for these technologies. What we don't have really is a venue for them to talk with each other about what's working and what's not. I think that they probably have more to learn from each other than we can teach them, so... I really want us to work on some of that, as well.

**Adam Stacoviak:** So we're two years past the biggest shift in the Node community, which was the fork of io, merger back into Node, Node Foundation, several iterations of this conference, year-over-year growth at a hundred percent rate, so a growing community... You've touched on educational pieces, you've touched on ways you can support module developers or people like Athan that are experimental, so to speak... We talked about diversity... What else can we talk about?

**Mikeal Rogers:** \[48:05\] That's a lot of hot points, isn't it?

**Adam Stacoviak:** Yeah, that's a lot of highlights, I think, and it's pretty close, but just in case there was something that we couldn't leave this conversation without you talking about...

**Mikeal Rogers:** One thing, if we're looking at the future of Node -- I mean, if Rod were here, he could talk a lot more to the technical side of things, but I'm definitely more focused on the institutional level work that we've been doing. We've done a lot to re-message and promote Node. By that, I mean a lot of the stuff about the new full stack, a lot of the broadness of Node, and a lot of the strength of Node being in how you can have this unified toolset across these different platforms and areas.

We've really built that out since the foundation started. Because we've taken this broader message and we've really focused on the connections, we haven't been as aggressive in framing how good Node is at a few particular things... Serverless is obviously a huge growth area for us. If we did nothing, it would probably still grow immensely. I'm incredibly bullish on how good Node.js is for serverless. We keep getting even better at resource utilization in terms of memory and CPU, so you can do more io in less resources in Node.js than really any other platform. Our startup time continues to be a source of pride for us, something that we continue to work on and try to whittle down. These are really important in serverless environments.

I think that in the future you're gonna see us talk about these verticals a little bit more and be a little bit more assertive about how good we think that we are in those particular cases.

**Adam Stacoviak:** Well, Mikeal, that's all I've got, man.

**Mikeal Rogers:** Yeah, great.

**Adam Stacoviak:** It's been great. The future of Node is bright... I'm glad to have you in the position you're in; I know it's been a long journey getting here, but fun times ahead. Great community, great work.

**Mikeal Rogers:** Thanks!
