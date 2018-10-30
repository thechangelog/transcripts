**Kevin Ball:** Welcome to those of you who showed up to our JS Party live edition here at Node.js Interactive. We are excited to be here with you. For those who don't know, JS Party is a weekly podcast celebration of the web. We typically record live on Thursdays... Look, we're recording live on Thursday! Here we go!

When we're not at a conference, you can actually tune in online and listen to us, interact with us via the Slack channel... Since we don't have the Slack channel here right now, I'm counting on all of you to shout out your questions as we run through.

Let me introduce who we've got here today... There are three of us here who are regular panelists. I'm Kball, I'll be MC-ing today. We've also got Nick Nisi.

**Nick Nisi:** Hello!

**Kevin Ball:** And Suz Hinton.

**Suz Hinton:** Hello!

**Kevin Ball:** And then we have two special guests here, representing the big news of the conference. First, representing Node - Tierney.

**Tierney Cyren:** Hi! How are you doing?

**Kevin Ball:** And representing JS Foundation, Dave Methvin.

**Dave Methvin:** Hi!

**Kevin Ball:** We thought that maybe today we'd do a little bit of digging in, making these two guys uncomfortable, and find out a little bit more about what it is that these foundations do, why this merger is gonna matter, what it's gonna do, and kind of just explore for your common developer -- I mean, I don't know about you all, but six months ago I had no idea that the JS Foundation did anything. \[laughter\] No offense.

**Dave Methvin:** Sometimes I have my doubts...

**Tierney Cyren:** That's pretty brutally honest.

**Kevin Ball:** I mean, just because coming in as a developer, I was like "What do they do?" So maybe we can actually start there - what do you guys do? I know there's value... What is it?

**Tierney Cyren:** Well, foundations in general - I'll talk about the JS Foundation in particular... We provide a lot of the services -- when you think about open source projects, they generally are created because somebody has a great idea and wants to write some code, and most of the time the people who do that don't have skills in other parts of what would normally be done if they were, for example, a business. They don't know how to deal with trademarks, and copyright issues, which open source still has those types of things that they have to worry about.

\[00:04:04.24\] They don't know about the social issues of building a community that will help them in their joyous mission of writing the ultimate open source project... So those are the places where the JS Foundation can help them, in providing advice, mentorship and support, including things like legal, if the need arises... And also help them find the resources that they would want. For example, they might need some CI servers, they may need access to software that normally when they try to get those things and they're just a small project, guys might say "Well, we don't really offer those things to you." But if you're part of a foundation, the foundation has access to a much larger pool of resources and companies that can help you out as a software developer.

Those are the kinds of things that we do for our projects in the JS Foundation, and I'm sure Tierney will same the same for...

**Tierney Cyren:** Yeah, yeah. The Node Foundation is a little bit different than the JS Foundation because it's technically set up as an umbrella foundation, but we've kind of steered away from that and we're focused mostly on Node. Express and Libev are both actually projects in the Node umbrella foundation, but they are both kind of happy doing their own thing and just being content building their own stuff... But a lot of what the Node Foundation does for Node is provide a level of stability where companies can come and engage with the project, and know that there's something that they can fall back on and kind of provide that assurance of stability over the long-term, and that we're not just like this rogue group of people who are gonna go and destroy all their production processes. It's not gonna happen. So the foundation provides that level of stability and understanding of "Okay, this is a legitimate thing. It's not going away." That's the external view.

The internal view is we get a lot of benefit from being able to have this large resource - we can get things like conflict management training, and I think the Node Foundation is the first foundation in the lf collaborative projects to do to do. We're able to have a travel fund. I think we have tens of thousands of dollars dedicated every year -- or at least this year; the budget is adjusted every year, as the usage increases or decreases... But we have tens of thousands of dollars to send collaborators and contributors to the project to various events, like Node+JS Interactive, or any other kind of event that they might be speaking at, or they'd want to go and represent the project. The foundation provides a way for us to do that, and support the maintainer.

**Kevin Ball:** So if I'm hearing correctly, it's 1) doing all the things that I as a developer don't wanna care about... And 2) providing joint resources and an interface for companies that have money and are used to dealing with other companies to interact with, rather than individual developers.

**Tierney Cyren:** I'd say that's pretty spot on, yeah.

**Dave Methvin:** And there's a longer list of things as well which I think both foundations have contributed in various ways... The JS Foundation participates in both the W3C and in TC39, the Javascript Standards Group. And when you think about it, that makes a lot of sense, because between the projects and the two organizations, we're most of the ecosystem that's consuming all of these standards, and we should be having a say in those things as those standards are developed.

\[00:07:47.29\] In the past, those have been very heavy in the browser writer groups, so controlled by a very small number of companies. Not that they have done a bad job in their stewardship, but it's just that when you're on the other side consuming these standards that are being created, it's very important for you to have a voice before they are delivered to you and you're told what you've got... Especially in the case of the web, where nothing can ever really be taken away, only stuff can be added on top.

**Tierney Cyren:** Yeah, and I think Node has experienced that a bit with modules. That's a really good example of that exact thing happening. I'm really happy to say that I think that specific thing actually got us and the member companies who have people who are contributors to send those contributors to TC39 to work on making sure Node's voice is heard at TC39, so we can make sure we're not breaking Node as well, because Node at this point I think is part of the web.

**Nick Nisi:** One way that I've interacted with the foundation is through contributing to those projects, and one big thing, probably the most visible thing is through the contributor license agreement that you have to sign to do that. Does the Node Foundation have something like that? I assume that the joint foundation will have that going forward.

**Tierney Cyren:** I think that's all TBD, in the joint foundation. The Node Foundation doesn't. I think it was a very early, intentional decision to not do that. There are some weird things that come with that, signing a CLA... There's two sides to that; I think the Node Foundation kind of fell on one side, and the JS Foundation fell on the other. I'm actually really excited to see where the new, joint foundation lands on that... Because I think a CLA can be useful; if you look at what's happening with Linux, that's a little worrisome. I don't want that to be happening with Node, but at the same time, it's not really easy to re-license stuff. So yeah, it's an interesting problem that I'm really excited to go solve.

**Kevin Ball:** Let's step back for a sec. Folks who are here at the conference are probably aware of the big news, of the JS Foundation and the Node Foundation announcing an intent to merge, hammering out details and things like that... But for the listeners who are listening to this who haven't been at the foundation, can you give a little back-story about what's going on here?

**Tierney Cyren:** Do you wanna start, or should I? Okay. The Node Foundation and the JS Foundation have expressed an intent to merge. Effectively, it sounds a lot more official than it is. It's really just us kind of saying, "Hey, we have these two bodies that are pretty similar, and we should be doing more collaborative work, rather than working separately." Working together also means we have a larger pool of resources, we can kind of collaborate a bit better, and also build a broader home for Javascript projects, and even beyond that. That's kind of where my understanding is.

**Dave Methvin:** That's my understanding, as well. Because we have so much in common, and because so many people who are using many of the projects in the JSF are also using Node, I would guess the overlap is just about 100%. It makes sense for those communities to collaborate.

We're also on the same committees, working on the same committees and doing similar things... There's just so much that we have in common, and even in the non-technical areas, if you think of things like encouraging and promoting the use of open source software in the Javascript community, helping people become contributors, all of those kinds of things - that is all independent of this specific project, and something that it makes sense to try to get that knowledge and spread it out without having to think about "Oh, well this is only for Node" or "only for Project X."

\[00:12:02.20\] I think it's a great thing that we're talking about merging. Obviously, there's a lot of details to be worked out, but to me it seems like a logical step.

**Kevin Ball:** One interesting thing about doing something like a merger, or any really big change, is it gives you a chance to almost reimagine what things could be like. I know talking with folks who've been associated with some of the projects in these different foundations, there's kind of mixed feelings. There's things where they say "The foundation was great on this" and there's things where they say "You know, this was kind of a pain in the butt" or "This wasn't as helpful as I'd hoped it would be."

What are some of the things that each of you would like to do differently, given the opportunity for a reset?

**Tierney Cyren:** I don't wanna go first. You go first.

**Dave Methvin:** I want a pretty logo... \[laughter\]

**Tierney Cyren:** You don't like the JSF logo?

**Dave Methvin:** It's okay... Yeah, I don't know... I guess it's really hard to say. On the general situations, if you look at the two organizations, as you mentioned, there's a lot of -- the Node Foundation gets to focus on that one project; there's benefits to that, because you can specialize and say "It's focused on this one project", whereas the JSF has to kind of generalize... Which is good, in a way, but it's also -- you can't focus, because you have to be careful about being too focused on one or two projects. So I would say in the merged organization we need to think about how there are going to be some projects that are naturally more active, more in development, and think about a way to set up tiers of -- especially when it comes to things like funding, how we do that in a way that's still fair to the smaller and less known projects... Which is where I think that pool of money to create contributors comes from... That they can go across everything, but you might focus some more of the financial investment in a smaller number of projects.

**Tierney Cyren:** Yeah, so from the Node Foundation side I think that there are benefits and drawbacks in having a sole focus. I think that politics can get muddied into that sole focus a little bit too much sometimes, so having technical things be technical is useful. Having a separation of politics outside of it... Because technical and politics often don't need to collide. They can, but they don't need to... At least not to the extent that we've had.

Beyond that, I think that there's a lot of little things that we can improve, and we have a lot of experience from Node and the Node Foundation, both from the foundation side and from the technical side... Very small things that we should've optimized and we didn't. Examples are having -- one example that I'm super passionate about is having technical people and community people, because Node has the Technical Steering Committee, and the Community Committee... But having those people engage with the foundation at a much more engaged level. Having them participate a lot more in the foundation work I think is gonna be super-valuable to actually making sure that everything is working as planned and we're all really working together, rather than kind of having "us vs. them" mentality.

**Kevin Ball:** Suz, you had an interesting take on the "us vs. them" and the (should we say) sometimes raucous relationships between different parts of the Javascript communities?

**Suz Hinton:** \[00:15:59.15\] Yeah... I mean, I think on the surface level it makes a lot of sense, because there's a deduplication of efforts for certain things, but I was also remarking about how instead of it being two sides fighting with each other, we're still gonna expect a lot of passionate feelings, but it's gonna feel more like a family that's just fighting with each other instead. At the end of the day you still come together and realize that you have the same intentions, and that you care about the same things.

**Nick Nisi:** So it's more like a coalition government, rather than a two-party system. \[laughter\]

**Dave Methvin:** We have to get along, so that we can create enough people to dislike the people on the other side... \[laughter\]

**Tierney Cyren:** Let's not do that...

**Dave Methvin:** Okay... Well, I was just saying... Definitely there's a history there with the Node Foundation of having some conflict, and it's difficult coming from a relatively conflict-free organization to kind of understand some of what's going on, and I hope most of that, in any case, is behind us anyway. But also we can come up with an organization that makes it so that some of those conflicts are more in our control. I don't see them being as much of a problem in the future.

**Suz Hinton:** Yeah, that's definitely what I was talking about, and I know that modules have been a super-special case, but I imagine that something like this is gonna come up again, and given that it's now gonna become more of a group discussion, it's like "What works for both runtimes? What works for both environments?" If anything was to come up in the language, or even just if Node.js (that community) had a certain idea, you hope now that the default would be that it would be discussed for both of those different scenarios. That would hopefully prevent something like this happening again... Because it has taken ten months of hurt to sort of start even reconciling that conversation, and being able to plan something from the beginning, with the two sides which I'm scare quoting, would just hopefully prevent that thing from happening. That's what I would like to see, at least. You're fighting together for the one thing, instead of trying to smash two things together that never really were compatible.

**Tierney Cyren:** Yeah, and I feel like that's largely where both the Node TSC and the Node Community Committee are coming from... It's like, "This is a really good way for us to clear the air for us as a project... Because we've outgrown ourselves. We've gotten way too big for ourselves."

We've learned a lot of lessons and we know some of the things that we've done wrong and what we can do better, so I think that this is a really good opportunity for Node as a project to actually make sure that we're not cutting people out, not putting additional burden on ourselves that isn't needed, while also making sure that we're gonna be able to continue to grow, that we're gonna be able to continue to enable other projects. Node would be nothing without its ecosystem, without its community, so I think that this is a really good way for us to help ensure that not just the current generation of Javascript, not just the current framework ecosystem, not just the current module system, but everything that Javascript can and will be, will be able to continue to be growing, and continue having Node as a partner.

**Break:** \[00:19:36.02\]

**Suz Hinton:** Do you think there's a little bit of FUD around this, to a point where, you know, when we talk about the browser, you know, we don't wanna break anything, right? It's just like what we've talked about before, we just add things... And I think that this might be a stereotype that traditionally the Node.js community not had to have adhered to that as much, and they were able to write full, stable versions of things and do LTS, and that kind of thing. Do you think people are worried that the progress (and the fast progress) that Node's always been able to make - which, again, could be acknowledged there's some lessons as well... Do you think that people are afraid that they're gonna be slowed down because of this merger?

**Tierney Cyren:** I think that's an interesting question... Privately, some people have expressed concerns to me about like "Yeah, we have a lot of people who have concerns, and this is dramatically increasing that scope." I don't personally agree with that opinion. I think having that broader scope of "Cool, there's currently 15 projects. In a year there'll be 50 projects", or however many we have... I think that will actually help Node avoid that problem. But we're kind of already there. We have graceful-fs - that won't ever go away; we're not gonna be able to get rid of it. And for context, graceful-fs is a reimplementation of Node's fs, smoothing out some of the rough edges. It's not really great for Node, and we can't break it; we can't go break that. So we've kind of already gotten to that "Don't break the web", except it's "Don't break the ecosystem."

**Suz Hinton:** That's a really good point.

**Dave Methvin:** Yeah, I think it's always the problem with the more popular you get, the more people are like -- even though they can stay on a particular version for a while, they really don't want to invest the time and effort it takes to move ahead. So it's like, "No, I wanna stay with Node 6 (or whatever), and just keep giving me bug fixes." And really, the web's been like that for like 20 years. Instead of actually breaking it and make people say "You should be moving up", we just keep accommodating it.

I think there's less of an issue of breaking things when you're on the server-side, just because you have more control over the environment. You're not in a browser, where you can't control the browser.

A good example of this is in a project I'm working on, and we're considering accessibility issues, and we'd like to drop IE 11 support, but IE 11, 25% of the people who access our site with a screen reader are using IE 11. That's almost hostile to accessibility. It is hostile to accessibility to leave out IE 11.

So I think another thing that's good about getting all the Javascript projects together is to try to make people understand the consequences of things like making decisions to drop support for certain things... Because sometimes it's not obvious to the person in a small project that leaving this out or not testing this can have a great impact on a small community.

**Suz Hinton:** \[00:24:01.26\] Agreed. I've even faced that in personal examples, where people asked me why I supported Node 0.10 for so long, and it's because in an IoT scenario, most people were running Debian, and that was the version that came down, so they didn't even know how to install a more modern version of Node... It's only recently when it got to the point where my stuff was literally broken in Node 10 that I realized then that we had to move forward... But people aren't aware of these edge cases, or they treat them as if they're edge cases that don't matter, but they can have such a huge impact on a small amount of people, and I think that we should be thinking about impact, rather than just a straight up number of people.

**Nick Nisi:** Right, especially because they say "Well, they can just upgrade." But the "they" is sometimes the most vulnerable and least able to move; it's the people with nobody helping them maintain that system, and they've got it running in a closet somewhere, and the guy set it up for them six years ago.

**Suz Hinton:** Right.

**Tierney Cyren:** I think you touched on a really important thing there, of like "When do I upgrade? When do I drop support for something?" I was working with Sean Larkin, trying to help him figure out how to drop support for Node 4, and when it was okay to do that before it went LTS. There's no guidance for that. I think that that's one really positive outcome that could come from this. It's like "Cool, there's this however many other projects..." - I keep referring to this... How many projects are in the JSF?

**Dave Methvin:** I cannot even give you an exact count. It's over 20.

**Tierney Cyren:** Okay. Yeah, so these 20+ other projects that want to consider LTS and have a similar LTS structure maybe... Like, if they wanna implement their own LTS, having a strategy on how to deprecate Node versions, and what they support - that's really useful... Instead of reaching out to me and asking "Is it okay to drop it now, or should I wait till--", like that's not a sustainable long-term thing.

That kind of guidance is something that's not necessarily obvious as a result of this, but I think it's something that will come, and I think there'll be other things like that, too.

**Kevin Ball:** Our local equivalent of a Slack channel was telling me that the number is 28. Thanks, Debbie.

**Dave Methvin:** See, I knew -- she looked at me funny, and...

**Kevin Ball:** So that actually raises kind of an interesting point when we talk about possibilities for reimagining this. Going back to what we said the foundations do today - they present a legal face, they help with marketing, they help with things, but there's sort of a technical cross-culture and cross-fertilization and information that can happen here. How much of that happens today, and what are the foundations likely to do as a result of our merger to make more of that happen?

**Tierney Cyren:** My answer to that is -- well, my answer to how much of that happens today is zero...

**Dave Methvin:** Yeah, within plus or minus 0.5 of zero.

**Tierney Cyren:** Yeah, yeah... So it can be negative 0.5...? \[laughs\]

**Dave Methvin:** I'm not exactly sure what negative cooperation -- I guess we work at odds with each other, right?

**Tierney Cyren:** But we don't do much, we don't collaborate, and that's honestly one of the biggest problems that I think Node has had, is not having that feedback of "Is this useful?" There was an example of this right now with workers. Workers are a feature that we've implemented in Node 10, that's useful; it solves a problem that people have complained about for years and years and years.

That said, we're trying to get people to use it, and it's hard. We need feedback on "Is this useful? Is this API solid? Are there bugs?" before we can actually ship it. We as individuals are trying to go reach out to people to do it; at every opportunity I go tell people "You should use workers."

**Dave Methvin:** \[00:28:01.00\] The key to that is you should follow the rule of the browser makers and just prefix everything with -webkit... \[laughter\]

**Suz Hinton:** But I know that Grid had the same problem, too. So many people were using a bunch of CSS frameworks that would smooth that over for them that they were having a lot of trouble getting people to just test out CSS Grid, where this is the time where you can have the most impact on this, and you never used to be able to do that 10-15 years ago when these specs were coming out...

I definitely saw the parallels in the workers, because people have just gotten so used to not having them now that it's very hard to say "No, this is your chance to actually make them good."

**Dave Methvin:** And they wanna wait until it's available on every version of Node they have to support, so they don't have to write two code paths, which... You know what that does.

**Kevin Ball:** An interesting question here is "What could the foundations do to really affect us?" because I know that from the project's standpoint, a lot of times you just want the legal stuff to be dealt with, and otherwise you kind of wanna be left alone... And yet, if you're left alone and everyone is left alone, we're all in these little silos and were not getting anywhere. So what's a potential path forward there, or what are some ideas that you all have? Or in the audience, if you all have ideas for ways to move forward and get more of that cross-collaboration working across these big projects.

**Tierney Cyren:** I think one of the big things is being in a shared space. I think that's a really important thing... At least for Node it's important, because we have a hard time reaching out, so having people from a different background coming into Node... I was talking about this with Suz earlier - having the context of IoT is really useful for us, because that's an edge case that... Like, we all talk about apps, we don't talk about IoT, and we need more of that.

**Suz Hinton:** And I've always traditionally felt like the fun place, that weird edge case where we have this ragtag community... But IoT is actually a very serious thing that's happening now in the Node space, and I've seen so many talks at this conference this week, and I was like "Oh, there's other people out there, and they're actually making money with this as a solution as well..." So it's great that you brought that up earlier, because there's a lot of communities like this that just don't feel as though they're basically as influential as they should be in order to have a spot at the table.

**Tierney Cyren:** Yeah, and I feel like that's something I work to kind of abolish. That's a fear that really frustrates me, because Node is for the people using it, and if you're using it, no matter how you're using, your input is super-valuable in making sure we don't break it for you. That's incredibly important. That kind of comes back to "Don't break the web...", but we need to be sure we're hearing from these disparate groups who have very different interests, to make sure we're building cool stuff.

All the features we're doing seem to be mostly focused around Web Forward and web apps. If there's a feature that would be useful for IoT, that nobody else in the world would use except for IoT users - cool, let's ship it.

**Suz Hinton:** I'm very excited that at the very least now we have Node Serial Port on the package list for where all the tests are run now, so we know immediately... Because I remember Node 4 was particularly painful for us... I think that's when it was painful enough for us to say something, and now we've actually felt super-included as a result of that. We're very happy to have that package in there.

So I think that you make an excellent point. I've never thought about Node as having missing features for IoT, but that's definitely something that I'm now gonna think about, given that somebody who has already suggested that to me now... So that's great.

**Tierney Cyren:** One of the other things that is important there is Node Serial Port. That's a cool project. Where does that live right now? Is it just kind of an open source thing for people from totally different backgrounds to work on, because it's a passion project?

**Suz Hinton:** \[00:32:00.11\] Yeah, it's moved around to different organizations on GitHub... It's now under the official NodeBots umbrella, so it's very much a community thing. We've had a rotation of contributors, but there are some people who are working on it right now, like Francis, who has just done an amazing amount of work on it... But yeah, it very much relies on people having very specific knowledge. This is one of the biggest native module add-on libraries, and it takes a lot of time to ramp people up on it... So it is a project that could be at risk. There is a buzz factor, and it's pretty small for us... So yeah, that's something that we would be looking for support with.

**Tierney Cyren:** That plays into one of the things I'm most excited about, about a joint foundation - that sounds like exactly the kind of project that I want to make sure this joint effort is a good home for... Because one of the things a lot of people in the Node side of this are concerned about is everything that already exists, and we're not considering the future of like "Cool. We have this stuff now. This isn't the end." We're gonna try to make sure this is an attractive and useful thing for projects, everywhere... So things like Node Serial Port - that kind of project makes sense in this case. Getting that feedback from maintainers and from contributors to other projects that haven't considered the JSF or the Node Foundation, or -- more useful feedback would actually probably be from people who explicitly decided not to join one of the foundations... Because I wanna make sure that this is something that's long-term and sustainable, and something that people want to be a part of. Because if you don't have community like that, you don't have anything.

**Break:** \[00:34:03.09\]

**Nick Nisi:** So what goes into making a project a foundation project? What would Node Serial Port, for example, need to do to become a foundation project if they wanted to? What are the steps? I realize that might change through the merger, but...

**Suz Hinton:** It's a great question though...

**Tierney Cyren:** Do you wanna go with this?

**Dave Methvin:** I'll take a shot at it. I can tell you that trying to come up with specific criteria is something that the tech at the JSF started to talk about early on, and we decided to punt because everything tends to be like looking at a project and thinking about what its position is in the ecosystem, where it is in its lifecycle... We had a person come to us who was proposing that he join. One person; really nobody else had contributed. It was a jQuery plugin for uploading files, and so it was a pretty narrow focus, but it was also something where they didn't want to really continue working on it.

They were looking for a place to put it, because they didn't wanna leave it on the doorstep of somebody and say "Please take care of my baby." That's not the kind of project -- but if it's a project that's being developed with a group of people who are interested, and in particular I think if it's not a captive of one company... You know there are projects that are quite -- that are open source, but they're really just owned by one company that controls it, it's in that company's repo... So nobody else can land a pull request except for that company, because it's in their organization.

**Tierney Cyren:** You mean like Node used to be?

**Dave Methvin:** Yeah, exactly. And I think that's a perfect example of why it needed to come out, because you can't really have a community project that's owned by one company and controlled by one company. It could be open-sourced in the license, but it's not really open source in the way that we think of Node today, or all of the JSF projects.

**Tierney Cyren:** And to dig into that question, all of that is TBD. We're still defining that, so that's why feedback right now is super-critical. But there's a lot of prior art. JSF has prior art itself, CNCF has a lot of prior art, as well; they're a very similar model to what we're thinking about at this point... That also includes the tiering system they have. I think it's incubator, then something in the middle, then graduate. I believe that's the structure... Yeah, that's about right.

So with that structure, that lends a bit more space to accepting projects at different levels. Node Serial Port is pretty mature. It's not as big as Node, and I don't think it ever will be. So that would be a good fit for that middle tier.

**Suz Hinton:** It's also the most wholesome community you're ever gonna have under that umbrella, if that were to happen...

**Dave Methvin:** That's a plus, too. If you have one dictator for life and a project who doesn't really even want contributions, that's not a good project, in my opinion, for something like this. But you're right, the rules are still open at this point. But I think it's better to accept a project, unless you think that the real reason for somebody giving you a project is simply to get rid of it, right?

**Tierney Cyren:** Yeah, so that actually brings up another good thing, or another thing I'm super-interested in helping define - when does a project fall out of the Foundation? If a project is dead, if it has nobody contributing to it, if it has no trajectory, if it has nobody using it anymore... Effectively, if it's not affecting people, how do we define end of life? That's a hard one.

**Dave Methvin:** \[00:39:51.24\] It is a hard one. There's a couple of questions that I think we need to ask there. One is "What does it mean for a project to be dead? For example, one of the projects in the JSF is AMD, the good old original module loader. James Burke I think may touch the code every once in a while if it really needs something, but it's basically not -- it doesn't need anything done to it. I think that the question that a lot of times people want answered is more of a signaling thing... "Is this a project I should invest my time or use in my project?" The answer to that may be different than "Is this project dead?", because there's a lot of projects that don't have a lot of activity, but are heavily used, and AMD actually is one of them. So it's really more a question of "If I was building a new project, would I use AMD?" Not unless it was already in the codebase.

**Suz Hinton:** I think t also comes down to just like "Does the project still need the Foundation?" as well. It's not just "Is it worth protecting?", but "Is the project able to do everything else without having to be under that umbrella?" That's something that a lot of projects will struggle with, as well. They could be highly valuable projects, but they won't necessarily benefit from moving to become an official foundation project, as well.

**Dave Methvin:** Yeah, if they have all their needs met, then there's not a lot of benefit from joining the Foundation. I think the time at which I think a lot of projects find it most useful to join a foundation is when they're in a stage of growth; they're becoming popular, they're getting contributors, they want contributors, but they can't manage that process, and they don't really know what they need to do. That's where mentorship can really help them understand how to manage contributions, and they can also use the advantage of having some marketing of their project, and working with people who have done this thing before, so that they can learn how to do it.

**Kevin Ball:** Let's look a little bit at, you know, if somebody is out there in the audience or listening to us at home and they're curious about getting involved. What are the different angles at which someone can come in? There's things like "I'm gonna come in and look for a project to contribute to." There might be "I'm gonna look at a conference. I'm gonna go to Node.js Interactive." There might be things that somebody who works at a large company could do to help sponsor, and that type of thing. Can you talk a little bit about what are the on-ramps to involvement?

**Tierney Cyren:** I think there's multiple levels, and it depends on how they wanna get involved. If they wanna get involved as a contributor to a project, that project will almost certainly have -- well, at least in the Node project; I don't know about JSF... But every repo and every working group and every initiative in Node has a contributing file, and also uses a consistent way to mark stuff as a good first issue, which is the "Good first issue" label, which GitHub is standardized on now.

We really try to do that at the project level. If you wanna get involved at more of the administrative level, I'll be totally honest, it's a lot of chaperoning and maintenance. It's a lot of administrative work, and it's not glamorous. That's one of the things in Node that's really hard - the glamorous work doesn't get done by a lot of people. It gets done by people who are paid to contribute, and that's fine, but it's hard sometimes. So if you are interested in that - you know, that's part of the area I'm interested in just personally... Go to at least the Node, the TSC and the Comm Comm - there's ways you can begin to get involved there. Again though, that's very administrative work, and not necessarily getting involved in helping out with events, or contributing to core. These things are very distinctly different.

\[00:44:05.16\] At the foundation level, if you want to have your company come get on-boarded, there's people you can talk to. I know Sarah Novotny and Todd Moore; Sarah Novotny is at Google, Todd Moore is at IBM... They have both - to me, at least - been very helpful in getting an understanding of this, and also helping have discussions with my company about stuff. So it's a good way to get involved with -- if you reach out to board members. And generally, the board members have been very open, so that's a good way to get involved if you want to join the Foundation, or a foundation.

**Dave Methvin:** That was a great bunch of points, and every time you said something, I was thinking of something as well that I wanted to add to that... So let me see how many of these I can remember and get in. The JSF, when we bring projects on board, we have some kind of basic standards that we set up for them - a contributing file, a code of conduct, those kinds of things... And then part of the mentorship process is to get them a little further into that, having a core group of contributors who meets and works on the direction of the project, so it's not a BDFL style of project.

On the contributions side, as far as on-ramps, I think one of the things that certainly I have done in the past as a developer is to think of contributions only in terms of code... And there are so many ways that people can contribute to a project that are often overlooked; answering questions on forums like Stack Overflow, creating test cases... A lot of times you'll start to get reports from 4-5 people saying there's a problem and they're very unspecific about what the problem is, and somebody who actually sits down and writes a test case is worth a billion dollars to me. Someone who will update the documentation in non-trivial ways... I mean, it's nice to have people fix typos, but a lot of times there's some heavy lifting to be done; somebody needs to actually document a new API. All of those things are important, and it's definitely where we could use some contributions.

On the last point, about the corporate level, I think that that is a place where foundations really need to focus attention to get more companies involved. There are a lot of individual contributors who are very passionate about contributing to open source. We can help them out the most by making sure that their companies feel the same way, and that they will get some time out of their busy day, so they're not having to go in the evenings and contribute their work in their off hours. If we can do that and potentially get those companies as members, but at the very least, get them so that they're contributing some employees time, then that's gonna be a major win and a great on-ramp for both people and organizations.

**Tierney Cyren:** I think one of the most important things in there is recognition. To drive both of those things, you have to recognize people. That's one of the things Node has done okay with, but it's not done great. We have some plans that we're working on to help fix that a bit, in terms of the new website stuff we're working on... But recognizing contributors and recognizing companies is an important thing to continue to drive that investment, of personal time and of professional time. In that, I think that's something that we can come away with as a common framework or as a common goal - what's a baseline level of recognition for our contributors that we need to have, to make sure we're doing them a service and we're not just benefitting from them without giving something back, as well.

**Suz Hinton:** Yeah, I think that the GitHub green square just doesn't really even begin to cover it, and it only covers certain scenarios.

**Tierney Cyren:** Yeah, absolutely. And even the GitHub org. Yeah, I've known people who have gone to Node to get the GitHub org on their thing. I'm not faulting them, but we are not optimizing correctly to actually get a long-term sustainable project.

**Suz Hinton:** Yeah, it's a lot of effort to maintain lots of people that come in and out very quickly, but being able to foster deeper relationships with people ends up with higher quality work and less overhead as well, for sure.

**Kevin Ball:** We're running a little short on time... Any last questions or takeaways from anyone on the panel or out in the audience? Questions you want answered about the Node Foundation, the JS Foundation, the upcoming merger... Nick or Suz, any other questions for our two guests?

**Suz Hinton:** I'm just excited that you all mentioned Serial Port. \[laughter\]

**Tierney Cyren:** Let's work together more on that. Let's try to make this a useful thing for Serial Port. That's a really good example, and I'd love to try to help with that.

**Suz Hinton:** Yeah, this might actually be a first one to tease it out. That'd be great.

**Tierney Cyren:** Awesome.

**Nick Nisi:** And I'm just excited to see it going forward and to see what comes out of this.
