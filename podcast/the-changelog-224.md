**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 224, and today Jerod and I talk to Bertrand Le Roy about .NET Core. Bertrand has a deep history in Microsoft technologies, and he schools us on all things about .NET Core, where it's going, the open source around it, Microsoft's take on it. Also, Bertrand hosts a live YouTube podcast called On .NET, and he also curates a weekly e-mail called "This week in .NET"

Our sponsors today are Code School and Toptal.

**Break:** \[\\00:00:50.28\\\]

**Adam Stacoviak:** Alright, we're back for another show. We've got Bertrand Le Roy, and obviously I'm gonna say that not exactly right, because he's French. Jerod, this is a show covering .NET, Microsoft, .NET Core, but it's been a while, right?

**Jerod Santo:** Yeah, a couple of years... Episode 134 was when .NET Core first peeked its head out from the walls of Redmond. It's been a while, we have lots of listeners and fans saying, "Hey, more on Microsoft, more on .NET", and...

**Adam Stacoviak:** More fans, too.

**Jerod Santo:** Frankly, there's a lot more to cover now, because Microsoft's just continuing to open source more and more things. We should give a shout out to Brett Morrison, who's friends with Bertrand and a fan, and he suggested to have him on and talk about .NET Core running on all three major platforms and all the new stuff. So thanks Brett for suggesting this show and thanks Bertrand for joining us.

**Bertrand Le Roy:** Thank you for having me.

**Adam Stacoviak:** We gotta start off with the right way here, because I know I butchered your name. What's the best way to say your name? Give the listeners the French version.

**Bertrand Le Roy:** The French version, Bertrand Le Roy. But they're also very difficult.

**Adam Stacoviak:** Okay. But you're used to common English, non-French ways of saying it, right?

**Bertrand Le Roy:** Yeah... Usually when I introduce myself I don't even bother to try to give the French pronunciation. I just say Bertrand Le Roy and that's fine.

**Adam Stacoviak:** Okay. So some of your history stems back obviously to Microsoft, you've worked there for many years. Can you give us some of the lay of land of what your experience is and what your affiliation is to .NET, Microsoft, and the work you've done there?

**Bertrand Le Roy:** Yeah, so I started working with .NET a long time ago, back when the first version was in beta. I was working in France at the time, I was working for a small web company, and I had built a CMS using .NET, maybe the first CMS on .NET.

\[\\00:04:04.05\\\] There was the .com burst and all that at that time, so I started wondering about what was next, and I looked at Microsoft. I was living in France, so it was a big change for me. They hired me, to my great astonishment, and I started working on ASP.NET. I've worked on ASP.NET 3-4 years and then I left. I created a startup with a friend, and I did that for a few years. Then I came back to Microsoft a little more than a year ago to work on .NET. So all my \[\\00:04:46.14\] at Microsoft has been around .NET, and I've seen a lot of change happening during that time.

**Jerod Santo:** Why did you leave the first time? Was it because you wanted to do a startup, or for other reasons?

**Bertrand Le Roy:** It was a combination of reasons. The first one was that I wanted to do something different, so we created that hardware startup actually - it wasn't even software; there were some software components, but we wanted to do some hardware. Another reason was that I was at the time a little frustrated with the pace of innovation and that sort of thing. I was at a point where I thought that it was easier to innovate outside.

**Adam Stacoviak:** That's interesting... Especially with the recent change over the last three or four years; we've seen this resurgence from Microsoft to embrace all platforms, to embrace open source, and even change, as you had said there, the pace of innovation. How do you feel about this new Microsoft we've been seeing?

**Bertrand Le Roy:** Well, obviously things have changed a lot, and I wouldn't have come back if things hadn't changed in that direction. We all remember the old Microsoft that was borderline hostile to open source. That wasn't a place where I wanted to stay at the time.

**Adam Stacoviak:** They say if they don't have change, then you could be the change - are you part of that change?

**Bertrand Le Roy:** Yeah, actually that was the idea. That's what I tried to do at my own small level at the time. That was kind of frustrating... We did have some success. I was one of the people who started the Orchard Project, which is a CMS on .NET that's open source. That was one of the first major open source projects coming from Microsoft. I'm very proud of that, and I put that in the category of successes. But it was slow, slow, slow.

Now open source is the norm, and when you do something new, you basically have to justify why it's not open source, while then why it is.

**Adam Stacoviak:** Speaking of open source and Microsoft, we had in a recent Changelog Weekly a link to Francesc Campoy who works at Google, on the Google Cloud platform. His post on Medium was, "Is Microsoft The Biggest Open Source Software Contributor?" He mentioned he's a Google employee obviously, and a fan of open source. Give us some of this rundown; a lot more has been happening at Microsoft around open source.

**Bertrand Le Roy:** \[\\00:07:41.23\\\] Yeah, I saw that. It's a question that's actually very difficult to answer, because how do you measure that? I've seen the numbers, and you can always argue that... I believe in those numbers, Google and Angular \[unintelligible 00:07:56.05\] something like that. You always have some caveats, statistics, \[unintelligible 00:08:00.23\] and so on.

The fact remains that today Microsoft is one of the most important contributors to open source. Not just projects that were initiated by Microsoft... I think it's interesting to see how teams such as my own are actually contributing to other open source projects.

**Jerod Santo:** Back on episode 134 when we had on Rich Lander, Immo Landwerth and Varun Gupta, we asked them - this was a long time ago, but I recall asking them what was the shift inside of Microsoft that changed the mind of the company. I believe, to generalize their responses, very much there was many people that wanted to embrace open source in the small, inside their teams or personally. But the change in leadership that happened a few years back really enabled it for the entire company to do so. Does that reflect with your experience?

**Bertrand Le Roy:** Oh yeah, totally. Under that leadership, it's been a slow process, that has actually begun before Satya became CEO.

It depended where you were looking. If you look at the Windows division, maybe that wouldn't be the place where it began. The developer division for example has been doing open source for a very long time, and has been pushing for change. You might know the name of Scott Guthrie, who's our VP. He's been a major advocate for open source for a very long time.

**Jerod Santo:** It seems like you guys shift from a company that largely sells software licenses for its income, to one that also provides services, and more and more so, shifting revenue to services. It seems like that shift in business strategy allows for open source, because you're not giving away the software licensing, right? You're still providing the services or the hosting.

Maybe that was starting to change already when Ballmer was still there, but it seems like the last few years, after Satya took over, is when Microsoft has become a services company. is that fair to say?

**Bertrand Le Roy:** Yeah, but again, Microsoft is a super big company and there are parts of it that did add up that new model and some that didn't and might actually not. That's always the thing with open source - where is your business? If the software itself is your revenue, does it make sense to make it open source? Now, if you're starting to sell cloud computing time, that becomes something completely different, and sure, your SDK should be open source.

**Jerod Santo:** Right. One thing that you say on your website - and we've touched on this a little bit, but I'm curious exactly your role... You said that you were an actor in the company's shift towards more open source, and you mentioned the CMS or the open source project. What was the name of that project?

**Bertrand Le Roy:** Orchard.

**Jerod Santo:** Orchard, okay. Very good. That's the American vs. French, my ears can't pick up that word. Orchard CMS.

**Bertrand Le Roy:** It's always been a problem for me to pronounce this word correctly, ironically.

**Adam Stacoviak:** \[\\00:11:53.10\\\] For a second I thought you said ArtShop, and I was like...

**Bertrand Le Roy:** I know, I know... The same way you cannot pronounce Bertrand, I cannot pronounce this one. \[laughter\] It's been a pain.

**Adam Stacoviak:** At least we get to laugh at ourselves about it, right?

**Bertrand Le Roy:** Oh yeah.

**Jerod Santo:** So when you say you were involved in the shift, was the open sourcing of that and the success of that something that helped, or were you a vocal proponent for open sourcing inside the company as well?

**Bertrand Le Roy:** At the time I was just a mere software developer, so not a lot of influence, not a lot of power, but I was doing my part. I think the first thing I did was to work with Scott Guthrie on getting jQuery to ship with Visual Studio. That was something that was kind of a big deal, because Visual Studio is not open source, and shipping an open source project inside of that was kind of tricky from a legal and licensing standpoint.

That's one of the first things that I worked on concerning open source at Microsoft, and I was very happy to do that. I was feeling that this was the beginning of something profound, that could potentially change the way the company thinks about software in general. And I'm not saying that is what caused it - it was a very small thing - but it was a sign of what was beginning to happen at that time.

**Jerod Santo:** Yeah, and now here you are, one of the top organizations on GitHub in terms of activity. What was the exact metrics, Adam, on that particular...?

**Adam Stacoviak:** I'm glad you said that, because we kind of left that conversation there. One thing that Francesc ended that post with was really about what it means to be a contributor; it wasn't a slide against Microsoft, but I was just saying it's more than just contributing.

**Jerod Santo:** Right.

**Adam Stacoviak:** So the article kind of camped out on Microsoft being the biggest contributor in terms of pull requests, commits and things like that, but he has this quote that says the biggest OSS contributor is people, not orgs, with an awesome little emoji in there; it's more than just commits or more than just core contributions, it's bigger than that. That's where he left that piece.

**Jerod Santo:** Well, you know, if we spend all our time trying to decide who's number one, we won't spend any time writing software and contributing, so...

**Adam Stacoviak:** I think the takeaway though for me is not a negative one, it's a positive one. It's like, "That's awesome, we need more of that." It reminds me of the conversation we had about open source at Facebook - we need more companies like Microsoft, Facebook, Apple doing the things they do in the open, and inviting developers into those ecosystems. It's not only gonna help them, for one, but it's also doing a lot more for open source. We invite that. Having that perspective to open source is a good thing for a company like that.

**Jerod Santo:** We're getting close to our first break. Before that, let's give your YouTube show a plug here, Bertrand - On .NET. Many people say we don't cover Microsoft technologies enough; we try to cover all that we can, but we only get one show a week. We're doing our best, and we could probably do a little bit better, but if you're just dying for lots of .NET coverage in the form of a podcast or video, Bertrand is your man. He has a weekly chat with the .NET team and guests. Can you tell us about On .NET?

**Bertrand Le Roy:** \[\\00:15:44.15\\\] Yeah, so one of the things that's really important for me is recognition of contributions from everybody in the community. It may sound like something very obvious, but community is one of the most important things for a software platform. I wanted to do something that would recognize what people out there are doing around .NET, because that's what's making what .NET is today.

Every week I'm interviewing somebody who can be someone from inside of Microsoft or outside of Microsoft; I'm trying to keep a balance of both. We chat about .NET and we look at demos that they make of what they are doing with .NET. We're trying to build something that is interesting to watch, every week.

**Adam Stacoviak:** And it's on YouTube, and where else?

**Jerod Santo:** Cloud9...?

**Bertrand Le Roy:** Yeah, so the name of the show is On .NET. It's a channel on YouTube, but it's also on Channel 9.

**Adam Stacoviak:** Channel 9, my bad.

**Bertrand Le Roy:** Yeah, Channel 9 being the central place where you can find Microsoft videos.

**Jerod Santo:** Right. And just looking at the first picture, it looks like two people sitting in the same room. Is this like an in-studio show, or over Skype? How does it work?

**Bertrand Le Roy:** It depends. The last show was with Sebastian Ross, who is one of the people who have been working on Orchard with me. He's here, so we did it in the studio, but usually it's over Skype.

I also write a weekly column on the .NET blog, where I give a list of links, I give shout outs to some open source projects and stuff like that; kind of a community hub as well. I do both of those things to recognize the contributions from the community to the ecosystem.

**Jerod Santo:** Very cool. Well, we will have links to all those things in our show notes. Check the show notes if you are interested in On .NET and other stuff that Bertrand is up to. Let's take our first break. On the other side, we'll get into the core of our conversation. Oh, that was... Totally cheesy. \[laughs\] We'll talk about .NET Core catch up after a couple of years of open sourcing. 1.0 announced in June and all that that entails. We'll be right back.

**Break:** \[\\00:18:34.04\\\]

**Jerod Santo:** Alright, we are back with Bertrand Le Roy, talking about all things open source and Microsoft. We mentioned before the break that Bertrand was one of the actors in the company's shift towards more open source, and obviously an advocate and proponent for open source software. He also has his name on 12 patents for Microsoft... You probably did those under their employ.

**Bertrand Le Roy:** Yeah.

**Jerod Santo:** \[\\00:20:03.27\\\] But you have your own opinions on software patents, don't you? We'd love to hear what you think about patents in general, and software patents in particular.

**Bertrand Le Roy:** Yeah, that's definitely the point where I should say that I'm just a guy working for Microsoft, not the Microsoft official \[unintelligible 00:20:22.27\] or anything like that. So opinions are my own, not necessarily the opinions of the company. My opinion on patents is that they have become an obstacle to innovation, whereas originally my understanding is that they were supposed to be driving innovation; they were supposed to be a way for companies to be able to benefit from their inventions.

I think nowadays they have become something completely different. They have become some form of currency maybe, mostly...

**Adam Stacoviak:** Even a trap, in some cases...

**Bertrand Le Roy:** Yes, yes. Personally, I think that's very sad. When you see everything that's going on around patent trolling... I had a small business, as I said earlier, and I think nowadays for any small business there is this permanent threat that you might be the target of some patent troll at some point. That is threatening the amount of innovation that a small company can do. I think patent-free form is solely needed.

**Adam Stacoviak:** I couldn't disagree at all with that. We've had a couple shows, Jerod, in the past... The one I'm thinking of is ZeroDB, a little earlier this year. They didn't have a great answer for that question either, which was around ZeroDB being open source in terms of a protocol, but then having a patent... I think they had to do it for money-raising reasons, and I think even Sourcegraph had something in that conversation if I recall correctly.

There's places where you're almost forced into it as a business, but you're like "That's against my own personal beliefs..."

**Bertrand Le Roy:** Yeah, and that's a big problem. When you want to raise money for a startup \[\\00:22:36.03\] they will ask you to have patents, and especially if you're trying to have an open source startup it can be challenging. When they put money on the table, they don't want that innovation to get copied.

**Adam Stacoviak:** And they want to have some security in their choices basically, which turns into lack of freedom for the rest of the world. We asked that question simply because when we were researching this call we saw that you had 12 patents from Microsoft; we were kind of curious what your stance was on it, especially in light of you being an actor in the company's shift towards more open source, and the beliefs you had. As you mentioned, you're not a mouthpiece for Microsoft, but your own opinions, and I thought that was a pretty interesting subject to talk to you about, especially as we lead into .NET Core 1.0 and recently here in June, or at least the release of that later in June's month there, and that conversation we also had back with Immo and Varun (episode \#134).

\[\\00:23:49.01\\\] Let's continue that piece there. .NET Core now is open source, it has been for a bit. Maybe give us the lay of the land. I know Jerod and I in our pre-call were thinking like, there are so many pieces to .NET that as an outsider it's hard to peek in and know for sure, unless you're actually inside and a .NET developer. Can you give us a lay of the land of what .NET Core is, what other pieces to .NET there are, and the overall landscape of what this platform is?

**Bertrand Le Roy:** Yes, what you're saying is interesting because obviously we don't want it to be hard to understand for people who haven't been doing .NET before... So yeah, that's kind of a bummer, what you're saying. \[laughs\]

**Adam Stacoviak:** Well, you have ASP.NET, then you've got .NET Core, and you've got all these different nuances, so from the outsider perspective it's like, "What is .NET?"

**Bertrand Le Roy:** Yeah, so like with any development technology, there are several layers to it. There is the runtime, then you have the basic class library, then you have technologies that are building on top of that. So historically, we used to have the .NET framework which was Windows-only, and then there is Mono, which is an open source implementation of pretty much the same thing... Which, by the way, that is now Microsoft as well because, well, we can probably talk about Xamarin at some point...

**Jerod Santo:** I was gonna say, does Mono still need to exist, now that everything...?

**Bertrand Le Roy:** That's a great question, let's talk about that later. \[laughs\]

**Jerod Santo:** Sure, okay. Yeah, please keep explaining.

**Bertrand Le Roy:** Now you have .NET Core, which is a cross-platform implementation of the .NET runtime, if you will. Then you have the basic class library that we call the .NET Standard, and that's evolving, as well. Then you have technologies such as ASP.NET, WPF, stuff like that, that build on top of all that. Some of those technologies are cross-platform, some are not.

ASP.NET is cross-platform, it works on .NET Core today - there is a version that works on .NET Core.

All that can seem a little bit complicated, but if you are new to .NET, you haven't used it before, I think the easiest thing to do is to go to dot.net and get started with .NET Core, because that's the simplest thing. You don't have to worry about .NET Framework and all those things; just to .NET Core, try it. It's a refoundation of .NET in many ways. It should be simpler to approach, it doesn't require Visual Studio or anything like that. It's like any other development platform, you can start with the command like and the text editor and just run from there.

**Adam Stacoviak:** It has definitely gotten a lot more approachable then.

**Bertrand Le Roy:** Yeah, we want it to be... It's more approachable, it's cross-platform... So yeah, it's not your old .NET.

**Adam Stacoviak:** On that front, what's the draw? Since you said that if you're a beginner, sending someone to dot.net...

**Jerod Santo:** Is it netdot.net? Oh, I'm sorry...

**Adam Stacoviak:** It's dot.net... \[laughter\]

**Jerod Santo:** Talk about making things easy for folks... \[laughter\]

**Adam Stacoviak:** That's pretty funny... Sorry, Jerod, I had to laugh out loud on that one. That was... Was it netdot.net, or was it...? \[laughter\] That's funny.

**Bertrand Le Roy:** If you read it, it's dot.net.

**Adam Stacoviak:** Yes.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** \[\\00:27:54.03\\\] But in light of that, and it being approachable, what is the draw to -- we're gonna talk about .NET Core 1.0 in a bit, but I'm camping on this thought here... Being approachable - what is it that draws people to .NET? What is the draw to developers to look at this platform as something that they should look at as a developer? What attracts people? The community, the language, the platform?

**Bertrand Le Roy:** That's a great question. Traditionally, we've been pushing the .NET brand, and to new developers it's not necessarily the way you want to approach things. When you look at other platforms, you don't say... You talk about the language first, you know? You develop in Java, you develop in Python, you develop in Go, right? The only example that I can think of that doesn't start from the language is Node, maybe. But Node is also pretty much tied to Javascript, so really it's not that different.

.NET was a little different in that way. I'm of the opinion (there are a few on the team who agree with that) that we should actually start with the language more. The thing is that we have more than one language. Java has Scala, we have F\# as well as C\#, and I think starting from the language is really a good way to talk to developers. You start from the code, you show code. C\# and F\# are in my opinion wonderful languages that have lead the way in a lot of different interesting ways.

Async/await, for example, is a great feature that started on C\# and is continuing that way. If you look at the latest version of C\#, you have pattern matching, which is something that comes from functional languages. F\# is a really interesting language to look at... So yeah, if I were to talk to new developers, I would point them to one of the languages, depending on where they are coming from. For example, if you come from a Java background, I would point you to C\#. If you come more from Python or Javascript, maybe F\# would be a good fit.

**Jerod Santo:** Is it fair to say that C\# is Microsoft's object-oriented language and F\# is the functional language? Just generalized.

**Bertrand Le Roy:** Yeah, even though C\# does have some functional features and F\# does have some object-oriented features. But yeah, that's the general category that you could draw there.

**Jerod Santo:** What would be the best comparison for F\# specifically to another language? Like, if it was friends with one that looked very similar - would it be like an Erlang or a Clojure, or would it be more like a Javascript? Can anything compare?

**Bertrand Le Roy:** I'm sure people will scream at me no matter what I say here... \[laughter\]

**Jerod Santo:** Let them scream... I'm teeing you up for mad tweets.

**Adam Stacoviak:** This is your opinion!

**Bertrand Le Roy:** No, it's not very Javascript-y, it's more... I think the F\# folks, the people from the F\# team talk about a multi-paradigm functional language, or something like that, which is maybe a little too buzzwordy, but pretty accurate nonetheless. I mean, it is multiparadigm, you can do many different things with it; it's not limited to one specific domain, but it is essentially functional in orientation.

**Jerod Santo:** \[\\00:31:59.00\\\] So in terms of people that are using .NET, probably we could say the majority are on C\#, and then you have some using F\#, and then you still have some other languages - doesn't VB run on .NET still? Isn't there some more legacy languages?

**Bertrand Le Roy:** Oh yeah, absolutely. Actually, I know that I'm going to have the VB folks scream at me for not mentioning VB, of course.

**Jerod Santo:** \[laughs\] Is VB still actively maintained and moving forward?

**Bertrand Le Roy:** Yeah, absolutely, and it's interesting, because it's not that the C\# features for example are getting literally translated to VB. That kind of used to be the case in the beginning of VB .NET, but now the new features tend to be a lot more idiomatic. There are really languages that have different \[unintelligible 00:32:48.13\] and it's interesting to see how they evolve... In parallel, but separately.

**Jerod Santo:** So why run in parallel? I know VB came first, so you have existing systems and existing software, but C\# has been your main language or the head honcho language for a long time now. What's the desire to not just deprecate VB and say "Everybody move over to C\#, because there's too many lines of code in the world"?

**Bertrand Le Roy:** I don't think that's the problem. I really think it's about curly braces. Seriously.

**Jerod Santo:** Did he say curly braces?

**Adam Stacoviak:** He said curly braces.

**Jerod Santo:** Is it seriously about curly braces? \[laughs\] Now things just got interesting.

**Bertrand Le Roy:** Yeah. Not everybody likes curly braces.

**Jerod Santo:** \[laughs\] I love that answer. You're probably right, it's probably as simple as that.

**Bertrand Le Roy:** Yeah.

**Jerod Santo:** So you have these two languages, and Microsoft is investing in the communities... Thousands, if not millions of dollars into these annually, and it's because some people like curly braces and some people don't?

**Bertrand Le Roy:** There are some really hardcore Visual Basic fans, and you won't convince them that C\# is better.

**Jerod Santo:** That's a great answer.

**Bertrand Le Roy:** That's the way it is, and that's fine. Shall we talk about tabs versus spaces now? \[laughter\]

**Adam Stacoviak:** That's been decided also by BigQuery.

**Jerod Santo:** Spaces have won.

**Adam Stacoviak:** Yes...

**Jerod Santo:** Except for the people that love tabs.

**Adam Stacoviak:** Well, it's based on the open source available, and it's based on open source code, not all of code everywhere.

**Jerod Santo:** Alright, so now we've gone there... We're not gonna talk about Vim versus Visual Studio code, or Emacs or anything, so...

**Bertrand Le Roy:** Before we move on, can I talk about something else that should be a big draw for people to...?

**Jerod Santo:** Absolutely, yeah.

**Bertrand Le Roy:** There's performance, too. .NET Core has amazing performance, and that's been a major focus from the engineering team. They've spent a lot of time, and we've also had some really valuable contributions from the community on performance improvement.

.NET Core is already on the TechEmpower Benchmarks, and it's in the top ten, I believe, right alongside very high-performance platforms. It's faster than Node, it's faster than Go...

**Jerod Santo:** I'll just mention one other, which is not a technical advantage, but let's face it, it's a real advantage, especially if you have a young developer and she's wondering "Should I learn .NET or should I learn Java, or Ruby?" - there are many, many large corporations that make a lot of money and they meet .NET programmers. So you tend to have -- I wouldn't say an easy time, but lucrative job opportunities if you are well-versed in these technologies. I think we'd be remiss not to mention that as a real draw to the platform.

**Bertrand Le Roy:** \[\\00:36:18.21\\\] Yeah. I will mention another one, since you mentioned kids learning how to program... Video games are usually very popular with the young ones, and there is a platform called Unity that you may have heard about, and Unity runs on .NET. Actually, nowadays most of the independent gaming companies are using Unity to build their games. Most of the games you have on your cell phone have probably been built on Unity.

**Adam Stacoviak:** There was a recent announcement too back at Build, they were talking about \[unintelligible 00:36:56.19\] Unity joins the .NET Foundation. I'm guessing there's more to that than just what they announced at Build before, this year.

**Bertrand Le Roy:** Yeah, yeah.

**Jerod Santo:** So let's talk about .NET Core and what's new. You had your 1.0 announcement in June, and when we first had .NET on the show it was like Microsoft's brand new open source baby, it was just getting started. There were things that were open source, there were things that weren't, and now it seems like it's fully matured, it's at 1.0. Can you give us what's changed in between when the announcement first went out and then all the hard work that's happened over the last couple of years? You don't actually have to detail every particular thing, but the highlights of what .NET Core 1.0 means and some of the major changes.

**Bertrand Le Roy:** Oh boy... Well, lots and lots of work. A difficult thing was deciding what would go into version 1.0, what wouldn't, and the level of compatibility that it would have with previous versions of .NET. That's something that we are still getting up to speed with, bringing community library developers on board with .NET Core. Because, you know, it's a new platform in many ways, but the thing is that the API surface for the moment is smaller than what people were used to on .NET Framework, which means that some libraries have actually had to undergo some significant rewrites to make it work. So this is changing.

There will be a new version soon that will implement a lot more APIs - that's what we call NET Standard 2.0. That will have an API surface that will be a lot closer to the .NET Framework that people know.

The 1.0 version means that the runtime is completely stable; you can build production software on it. It's released under an MIT license, which is very liberal; you can do pretty much anything you want with it. So yeah... New runtime, new basic class library - that is still being worked on very actively. Do you have any specifics that you'd like to ask?

**Jerod Santo:** Well, I think a highlight of -- and I don't know if it was just added for 1.0, but it's something that you all have been working real hard on is cross-platform.

**Bertrand Le Roy:** Yes!

**Jerod Santo:** \[\\00:39:57.14\\\] So I think probably we should talk about what went into that, and perhaps what that means for us MacOS or Linux-based developers.

**Bertrand Le Roy:** That's a great question. .NET started mostly as a Windows technology, there are also some APIs in the full .NET Framework that don't necessarily make a lot of sense for cross-platform implementation such as .NET Core. I mean, who cares about the registry on Linux? Well, it doesn't even exist, right? \[laughter\] There are a few concepts like that that just don't translate, so we have to decide what we are doing with those. Do we keep the APIs in there and make them slow when you are not on an OS that can support the capability? Do you exclude the API? It's really on a case-by-case basis, and there is a lot of work going into that. Immo Landwerth, whom you've had on the show, is the person working on that.

Then there is tooling, because it used to be the case that .NET was only tied to Visual Studio, and of course Visual Studio is Windows-only. So to make the platform work on Linux and Mac, we had to find other ways of tooling the platforms. .NET Core shifts its focus from Visual Studio to the command line. So we can still use Visual Studio and there is still great tool support on Visual Studio, but you can do everything from the command line and the text editor, which is what works on the Mac and on Linux.

**Adam Stacoviak:** It's interesting, because I know on GoTime, Jerod, it's been a lot of rave... I think it's been mentioned several times Visual Studio being really interesting for Go, and being cross-platform is unique, and Bertrand, you saying cross-platform is this new thing coming from .NET Core 1.0... But then also back in that conversation we had around Ubuntu and Bash going to Windows, all that good stuff, it seems like the next level of things for us - at least in terms of .NET - is being cross-platform: Linux, MacOS, Windows... And then you mentioned the focus on command line, but then you still have Visual Studio that's cross-platform now too, so you have that available too, at least based on the announcement.

**Jerod Santo:** Isn't that a separate project, Visual Studio Code? Correct us if we're wrong here, Bertrand, but isn't there...? Visual Studio is the old standard, which is the Windows-specific one, but now you have Visual Studio Code, which is cross-platform. Or maybe I'm misunderstanding.

**Adam Stacoviak:** Maybe I'm misunderstanding.

**Bertrand Le Roy:** Visual Studio is an IDE, a very advanced IDE; it has a lot of features. It is Windows-only, for the moment. Visual Studio Code, on the other hand, is closer to a text editor.

**Adam Stacoviak:** Oh, I see...

**Bertrand Le Roy:** And this one is cross-platform.

**Adam Stacoviak:** Now you can see why we were so confused.

**Jerod Santo:** \[unintelligible 00:43:27.04\] Naming. Y'all gotta work on your naming a little bit. \[laughter\]

**Bertrand Le Roy:** They are very different beasts. In Visual Studio the download is a lot more substantial and it takes more time to install it, whereas VS Code is a few megs in download, and then it takes less than a minute to install.

**Adam Stacoviak:** Gotcha, okay.

**Bertrand Le Roy:** \[\\00:43:51.19\\\] So they are very different. It may be a text editor, VS Code, but it also has some pretty advanced features in terms of debugging, code completion and so on. You are still in a very comfortable environment.

**Jerod Santo:** I'm pretty sure our GoTime community is excited about Visual Studio Code...

**Adam Stacoviak:** Yes.

**Jerod Santo:** ... because of the...

**Bertrand Le Roy:** The Core extension is very popular.

**Adam Stacoviak:** Gotcha. Okay.

**Break:** \[\\00:44:20.10\]

**Adam Stacoviak:** Alright, we're back with Bertrand Le Roy and we're talking about .NET Core. We laughed a lot during the break, but I've been confused about some things in terms of naming. I thought Visual Studio turned into Visual Studio Code and was open source, but that's not true. Then, talking about cross-platform, we talked about the importance of what that means, but what's the draw, Bertrand, for .NET Core to be on MacOS or Linux?

**Bertrand Le Roy:** Well, one of our goals was to enable people to write microservice types of applications, and several applications of all kinds. Today, this server is running Linux pretty much everywhere, so that's one reason why Linux is so important, probably for any development platform, but especially for one that's at this moment in time aiming at several workloads.

And the Mac, that's a different reason, which is that when you go to any tech conference, you might notice that a lot of the laptops that people have are Macs, right? So it's a fact of life that a lot of developers are working on Mac today, so it's also important that they can develop for a platform using the tools that they love, and not force them to run a VM, just run .NET. That would not make a lot of sense. For us, all three platforms are super important, for different reasons.

**Jerod Santo:** One phenomenon that we watched happen a lot in open source, especially because so many developers are running MacOS or Linux, is a lot of the projects and platforms have poor Windows support. Ruby had this problem... I could probably go on, but I can't think of any examples besides that, but there are, especially when different things that touch the file system... You mentioned how the registry doesn't make sense on Linux. Well, a user local doesn't make sense on Windows, so you always have this kind of divide, even when -- oh, Node is another good example; there's been a lot of issues with Windows support on Node, even though that was one of the main draws to Node, for many developers to get started.

But we find that there's like a second-class citizen of platforms in the open source world. It's been Windows in certain cases.

**Bertrand Le Roy:** Yeah.

**Jerod Santo:** What are the odds that MacOS specifically... Because I think Linux, because there are so many servers, like you said, and you probably have large corporations and customers that are running .NET on Linux servers, but what about... I could see where MacOS could become the second-class citizen of .NET Core's open source cross-platform. Is there a dedicated team inside Microsoft, running MacOS and making sure that that doesn't happen, or is that a real possibility?

**Bertrand Le Roy:** \[\\00:48:16.08\\\] Well, actually a lot of people on the team are using Macs every day. It's actually kind of encouraged. When you buy a laptop, the first choice - on our team, I'm not talking about Microsoft engineers - or the default kind of is a Mac.

**Jerod Santo:** Things have changed.

**Adam Stacoviak:** Yeah, I would never get that. It wouldn't make any... I mean, I guess it's nice to see that it's about you as a developer, and not a forced hand, so to speak, of like "Hey, you work at Microsoft, you use Windows only, and that's how it has to be."

**Bertrand Le Roy:** Oh no, not at all. It really is everybody's personal choice, and what really makes sense for the job you're doing. As you said, it's important that we have people on the team who run MacOS, so that they can make sure all the time that it works. Of course, we have quite a lot of automated tests running on Mac, but that's obvious.

**Jerod Santo:** Sure, right. Well, we talked about Mono in brief previously; this was the open source version of the .NET runtime. A very popular and long-running project, a necessary project when everything was still proprietary. But as you mentioned before, and I kind of said "What does it mean for Mono?" is that now the main thing is open source. "Do we have to have Mono? What does that mean for Mono?" and you said "Let's talk about that later", so I'm just bringing it back up, because I'm still curious what Mono's future is, if any.

**Bertrand Le Roy:** The different flavors of .NET that exist today - the main ones would be .NET Framework, .NET Core and Mono - they are all being used on different workloads that are all important. Mono in particular is what drives Unity (we've talked about Unity a little bit). It's what is behind Xamarin - that means that if you want to run the .NET application in iOS or Android, chances are you are running it on Mono. It's almost a certainty. I don't see them going anywhere, in the near future at least.

**Adam Stacoviak:** Is it safe to say that Mono may have been early traction or early indicators that taking something for or around .NET open source could be a positive thing?

**Bertrand Le Roy:** Yeah, absolutely. Yeah, it's been a huge driver for change, sure.

**Adam Stacoviak:** So I think Jerod's question was what happens to it? Does Mono go away, or does it get folded into .NET Core, now that it's open source and now that more and more is happening around this cross-platform piece? What happens?

**Bertrand Le Roy:** So there are definitely things that are going to happen in terms of what implementation of the base class library each is using, and there is some convergence going on, so that we actually don't maintain three different codebases; there is a lot that is being put in common, obviously. But we still have the runtime itself, and we have great implementations of .NET running on iOS and Android, and I'm not sure why exactly we would necessarily convert those on .NET Core. But I don't know. Maybe. I really don't know. It might happen at some point. You would have to ask the question to somebody else than me.

\[\\00:52:16.02\\\] It's also a problem of where you put your focus and where you put your energies. We have many things to do, and everything takes time.

**Adam Stacoviak:** So we've covered cross-platform; we obviously understand how important that is, because no longer are you tied to simply those who have Windows machines; you're able to attract MacOS developers, or anybody using a Macintosh computer. You're also attracting those who are on Linux, so that's a good thing; your focus on the command line... Is the command line to .NET Core new? Is that something that's never been there for .NET Core?

**Bertrand Le Roy:** You mean for .NET in general?

**Adam Stacoviak:** Yeah, .NET in general, sorry.

**Bertrand Le Roy:** Yeah, that is new to .NET Core, yes. It really comes from the fact that we need tooling on all the supported platforms. We need to be able to build everywhere.

**Adam Stacoviak:** We talked before about my confusion around Visual Studio, so you've got the IDE, you've got Code... Is it a change of heart, is it a change, a retraining to people or to those developers that are .NET developers, to go from an IDE, a visual thing, to a command line?

**Bertrand Le Roy:** Yeah, there is a fair bit of that going on, but the fact is that a lot of people who were in the existing .NET community were actually asking for that to happen. They wanted to use the command line more, because that also means that things are easier to automate... It's a general direction the industry as a whole is going.

When you look at some of the IDEs that JetBrains are building, for example... WebStorm, for example - when you develop Node on WebStorm, what the IDE is doing is mostly driving the command line, right?

**Jerod Santo:** Right.

**Bertrand Le Roy:** So yeah, I think it's something that had to happen, and I think for new developers it's actually a lot easier. But as I said, the IDE is still there, and there are still a lot of people -- I don't know if it's something like curly braces, but there are still a lot of people who prefer to work in an IDE, and they can. We are giving them that choice. Everything is possible under both environments.

Now, if you want to write C\# code, you can install it and on the command line you do .NET New, and you're in business.

**Jerod Santo:** It's kind of like you guys' decision to continue with VB and also develop C\#. You have those who wanna stay with VB and you have those who wanna do C\#, and in this case you have those who will never leave their IDE - you can peel it from their cold, dead hands - and then you have those who want something lighter, something more like a text editor, and perhaps wanna run it on Linux. I think choice is always good.

I think you guys have some work to do with your branding and your cohesive story, because it is a bit confusing. I feel like we've gotten over some bumps in the road, Adam, and I'm understanding them more now.

**Adam Stacoviak:** Yeah, me too.

**Jerod Santo:** I wish that it wasn't quite this hard to peel back layers of the onion or see the whole picture, but no doubt you guys will probably get there. Let me ask you this... Ubuntu support now has Bash on Windows - we talked about that - and what I wanna know is what would happen if somebody ran .NET on Linux, on Bash, on Windows? \[laughter\] Would the world implode, or what's gonna happen there?

**Bertrand Le Roy:** \[\\00:56:07.05\\\] I don't know, that's an interesting question. You should try it.

**Jerod Santo:** Maybe I will. Maybe I'll get Dustin Kirkland to try it.

**Adam Stacoviak:** Funny.

**Bertrand Le Roy:** Yeah, sounds like a funny experiment.

**Jerod Santo:** Alright, challenge to listeners - somebody go out there, do that, report back and we will link it up.

**Adam Stacoviak:** Yeah, open an issue, let us know what happens. Give us a video GIF or a full-on video, or whatever works.

**Jerod Santo:** Inception.

**Adam Stacoviak:** To wrap some things up here, if you're just getting started or if you're someone that wants a peek into this world, go into dot.net... Dot.net/core would be going to the Core page; that's what they recommend in this announcement for .NET Core 1.0 back in June. If that's where you're starting out, that's what I'm saying, at least from this article here. But Bertrand, from your perspective, if there's a listener out there who's been listening along, thinking "I'm interested in this, I wanna get involved. I don't see what Jerod and Adam see, I don't see these layers to the onion. I get it, it's easy for me", or they're just simply interested, what are some good resources, good people to follow, good places to catch up?

Obviously, you've got your show, On .NET, but who might someone follow, where might someone go to get started, or to at least open up this world for them?

**Bertrand Le Roy:** I would definitely check out the C\# language tutorial or one of the F\# tutorials. One thing you... Well, yeah. I was gonna say, one thing you can do is follow the Week In .NET posts on the .NET Blog, and look at all the articles that people are publishing, but maybe that's more for somebody who is already familiar with it.

The documentation site might be a good place to start, obviously.

**Adam Stacoviak:** So dot.net?

**Bertrand Le Roy:** Yeah. If you're curious about the language, you have some tutorials for that. If you're curious about the ecosystem and the kinds of libraries that you can find, you can go to nuget.org - that's the package manager for .NET.

**Adam Stacoviak:** How about some people? Let's \[unintelligible 00:58:28.06\] some @ symbols, or anybody on GitHub, some follows there.

**Bertrand Le Roy:** So obviously, one very prominent figure in the .NET world is Miguel de Icaza. Mads Torgersen is interesting to follow, he's the PM for C\#. Don Syme - if you're interested in F\#, you should definitely follow him. Phillip Carter also, who is the program manager for F\#. Rachel Reese is interesting to follow, she's working at Jet; that's a company that was bought by Wal-Mart a few months ago for 3 billion dollars, or something like that, so they know what they are doing there, apparently.

Nick Craver, if you're interested in performance on .NET. He's from Stack Overflow. Dustin Campbell works on VS Code. Rowan Miller, he's in charge of Entity Framework, which is the object-relational mapper that you can use on .NET Core.

**Adam Stacoviak:** The good things is you've got no shortage of people, which is great.

**Bertrand Le Roy:** Oh yeah, there's lots and lots of people.

**Adam Stacoviak:** So here's what we'll do then - all the people that you've mentioned, we'll listen back too, but if you've got URLs or Twitter handles or something to share with us, we'll make sure that we'll get those in the show notes. That way, any listeners that are following along can go out and follow those people and see what they're into.

**Bertrand Le Roy:** I'll come up with a list of people and you can put that in the description.

**Adam Stacoviak:** \[\\01:00:05.21\\\] Yeah, "Bertrand recommends following these people", and we'll put a list. How about that?

**Bertrand Le Roy:** Sure.

**Adam Stacoviak:** So Bertrand, just to close up the show here, is there anything else that we didn't cover, that you wanted to make sure we got mentioned in this show?

**Bertrand Le Roy:** Yeah, so I briefly mentioned that the team is currently hard at work making sure that the API surface for .NET Core becomes a lot bigger than it is today. Next version of .NET Core will have a lot more APIs to work with, so that's interesting.

Another thing that we've working on is converging our projects system so that all the different flavors of .NET are talking the same language in terms of building. That's more like a technicality. It's a lot of work for us, but hopefully lots of benefits for our users in the end. We are working on that, and it should come out probably pretty much the same time as the next version of Visual Studio. I wish I could give you a date for that, but I can't.

**Jerod Santo:** Can I ask you one more personal question? Do you use Visual Studio or Visual Studio Code?

**Bertrand Le Roy:** I use both.

**Jerod Santo:** Dodging me.

**Bertrand Le Roy:** No, really. It depends what I'm doing.

**Jerod Santo:** So when do you use which one?

**Bertrand Le Roy:** When I'm building something that is... Well, basically when I'm in Windows I mostly use Visual Studio. It depends. I don't really know why I use one or the other. It's also a question of mood maybe, I don't know. That's an interesting question, I never actually thought about it. I just pick one, depending on what I'm doing.

**Adam Stacoviak:** I couldn't do that, I would have to pick one. How about you, Jerod?

**Jerod Santo:** There can be only one, yeah. Well, I say that, but I use Vim and Sublime.

**Adam Stacoviak:** That's true, yeah.

**Bertrand Le Roy:** Oh, and by the way, you know that you can use .NET code on Vim and Sublime if you want. The service that powers the code completion on VS Code or .NET also works for Vim and Sublime.

**Jerod Santo:** That's cool.

**Adam Stacoviak:** That's Inception right there.

**Bertrand Le Roy:** You can even have code completion on your favorite editor.

**Adam Stacoviak:** Nice.

**Bertrand Le Roy:** Pleasant.

**Jerod Santo:** 2016 man, it's great.

**Adam Stacoviak:** It's a good year for .NET. So we mentioned earlier on the show that article for Microsoft being one of the biggest contributors to open source; we have a weekly e-mail we ship, called Changelog Weekly. Bertrand, I'm not sure if you know about this e-mail, but if you don't, you gotta subscribe. Go to changelog.com/weekly. We put a lot of love into that e-mail every single week. Headlines, links, the latest that's happening in open source software development, our latest episodes, projects from repos...

We also have an "open inbox" we like to call it, on GitHub. Go to github.com/thechangelog/ping. You can submit an issue there and share your latest open source there. We have a section in our e-mail just for that, called Ping. That's pretty interesting.

**Bertrand Le Roy:** Excellent.

**Adam Stacoviak:** Do you subscribe with the e-mail, by any chance?

**Bertrand Le Roy:** Not yet, but I will.

**Adam Stacoviak:** You will, great! That's my goal, Jerod. One new subscriber per show.

**Jerod Santo:** That's how we do it. We shame people into subscribing at the end of the show.

**Adam Stacoviak:** That's right, I like that. We're gonna start doing that. \[laughter\] Good stuff right there.

**Bertrand Le Roy:** Yeah, and you go to One .NET, download the vids \[unintelligible 01:03:52.12\]

**Adam Stacoviak:** I'm already doing that. I'm subscribed on YouTube.

**Bertrand Le Roy:** Excellent.

**Adam Stacoviak:** That's the way you gotta do it. I love the fact that the show is live, it just kind of gives it that extra perspective that it doesn't need to be overly produced...

**Jerod Santo:** Plus, you never know what's gonna happen.

**Adam Stacoviak:** That's right... With Bertrand it's a lot of fun.

**Bertrand Le Roy:** Yeah, we got in trouble with the \[unintelligible 01:04:16.14\] \[laughter\]

**Jerod Santo:** How so?

**Bertrand Le Roy:** Well, I'm not going to get in trouble this time, so I'm not telling you. \[laughter\]

**Adam Stacoviak:** You have to go watch it, Jerod. You have to go watch it.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** We'll leave it there, then. Bertrand, if there's nothing else you want to say, we're gonna close this show out. It was definitely a blast having you on the show, and I appreciate now my knowledge of .NET. Not only that, but also Visual Studio. I don't know how I got that, Jerod. I feel like an idiot, but I'll be an idiot on air, and that's just how it will be... But that's it for this show, so let's say goodbye.

**Bertrand Le Roy:** Thanks for having me, it's been very fun.

**Adam Stacoviak:** Thank you.

**Jerod Santo:** Thanks, Bertrand. Bye!

**Bertrand Le Roy:** Thank you, bye-bye!
