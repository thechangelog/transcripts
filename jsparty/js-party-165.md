**Nick Nisi:** Hello, JS Party! Welcome to another exciting week of the JS Party podcast. I'm your host this week, my name is Nick Nisi (Ahoy-hoy!), and I'm joined by the one, the only, Kball. Kball, what's up?!

**Kevin Ball:** Hello, hello! Glad to be here.

**Nick Nisi:** Excellent, thanks so much for being here. And we have two exciting guests that I want to introduce, or I want to say their names and then let them introduce themselves... But first, we have Florian Scholz. Florian, what's up?

**Florian Scholz:** Hey, hello!

**Nick Nisi:** Tell us a little bit about yourself.

**Florian Scholz:** Yeah, so I'm Florian Scholz, I'm based in Bremen, Germany, and I'm a technical writer, and recently we've launched the Open Web Docs project.

**Nick Nisi:** Yes, very exciting. It's what we're here to talk about today. And with you we also have Will Bamberg. Will, what's up?

**Will Bamberg:** Hello, I'm Will. I'm also working on Open Web Docs as a technical writer. I started last week on this project, and I'm based in Vancouver, BC. Where it snowed this morning. Unexpectedly.

**Nick Nisi:** Very nice. I'm very much over snow right now. \[laughter\]

**Kevin Ball:** Yeah, how many weeks of snow are you on now, Nick?

**Nick Nisi:** It's actually been melting quite a lot. I built a snowman with my daughter on Sunday, and by Monday afternoon it was totally melted. So... Very good.

**Kevin Ball:** That's progress.

**Nick Nisi:** Yeah.

**Will Bamberg:** It's rare enough to be exciting here, but yeah...

**Nick Nisi:** Well, as fun as the weather is, we are not here to talk about the weather, we are here to talk about docs. Particularly web docs. Particularly Open Wed Docs... So I just have to ask the question to kind of get us started... Who let the docs out?!

**Florian Scholz:** Yeah, Open Web Docs - we've been just launching it in January, so it's a pretty new initiative... And what we're trying to do is support platforms like MDN with documentation, with technical writing, and help web developers out there to read all about the web and how it works.

**Nick Nisi:** \[04:27\] Very nice. So when I think about web docs, there are three letters that come to mind, and it goes on the end of every DuckDuckGo search that I do, and that's MDN. So can you tell us a little bit about Open Web Docs and their relationship with MDN or with Mozilla?

**Florian Scholz:** Oh yeah, absolutely. Open Web Docs actually works a lot with MDN, because MDN is the premier source for documentation, it has been for many years. I think last year MDN celebrated its 15th anniversary, so it's one of those old-school sites out there, and it has been serving web developers for quite some time. And yes, we're working with them very closely, documenting web standards... And both Will and I have actually been employed there, so we've been long-time Mozillians. So yeah, we've been on this mission to document the web for quite some time now.

**Kevin Ball:** So I didn't know coming into this... Open Web Docs - y'all are a new organization, but not a new set of documents, is that right?

**Florian Scholz:** Exactly. We are a supporting initiative... And maybe I should probably talk a little bit about the history here. Basically, I think when I got involved with MDN in 2009 (or 2010, something like that), MDN was actually changing from being strictly a platform for documentation around what Firefox implements. Stuff like the JavaScript Standard was actually invented by Mozilla engineers. So it was kind of born there. MDN used to be a very Mozilla-centric documentation platform. But over the years, and especially with the HTML5 and CSS 3 hype, the documentation on MDN changed, and it became more of an Open Web Docs platform.

And I think it was 2010 or 2011 or so when first other organizations were interested in helping out on MDN. Over the years we've had different writers, say from Google, or from other bigger browser vendor organizations who helped us out in documenting the web together on MDN. And then I think about three or four years ago there was a thing called the MDN Product Advisory Board, so this kind of thing that tech projects from different organizations coming together was more formalized... So the Product Advisory Board was formed, and different organizations formally came together to document the web on MDN.

Recently, even more so people got together and thought about having more diverse funding for MDN and for the writers working on it, and this is how Open Web Docs was born just a month ago. We're on Open Collective. Everyone can donate to us, and we're using the funding to help MDN and to document the web even further.

**Kevin Ball:** So is this related to all the restructuring and financial turmoil over at Mozilla?

**Florian Scholz:** Yeah, this was kind of the event that triggered everyone getting their heads together in terms of "Okay, how can we come to a more diverse funding for such an important platform?" So we worked with Open Web Docs's founding organizations to figure out a way forward.

**Kevin Ball:** \[08:04\] Cool. So... Talk a little bit about those founding organizations. I guess the money before was mostly coming from Mozilla. Now you're on Open Collective. I saw there are individuals fundraising... But is the expectation this is going to be something truly sponsored by the community, or is it something that's going to be a set of large companies donating, or how are you thinking about making this thing sustainable?

**Florian Scholz:** Well, this is something for us to figure out this year, really. We are really happy about the generous funding that we've received from the founding organizations. We're gonna see if we're effective with this initial plan and our initial ideas around supporting the web platform documentation. And yes, ideally we can sustain, and continue with this mix of individual backers and organizations.

I think everyone from the larger browser vendors or larger organizations playing a big role on the web - they do have an interest in having good documentations out there, so that web developers can develop for the web... So I'm actually quite positive about us getting continued funding with this. But time will tell, I guess.

**Will Bamberg:** I think having more different sources of funding and more diverse funding obviously makes us more resilient as organization than being dependent on a small number of deep pockets first. And I think also it makes it easier for us to be independent. I think everyone involved in this is very much committed to Open Web Docs being an independent organization, but it's much easier to make that claim and for that claim to seem credible if you have a lot of different sources of funding than if you only have a few, I think. This is part of the reason why people like MDN and people use MDN, is that it's seen as a genuinely independent source of information about the web... And that's a thing that MDN has been pretty strongly protective of for a long time really. It's taken a long time to build up that kind of reputation, and I think everyone understands that that's one of the most important things about it, and it's worth protecting, you know?

**Nick Nisi:** Yeah, definitely. At this point, for me at least, MDN is synonymous with the Open Web Docs. If I want to find out about some esoteric web API that I didn't know about before, like I said, MDN is at the end of my search query every time.

So tell us a little bit about the organization - how it's structured, what's it like, what are the different aspects that you're covering beyond contributing to MDN, to start?

**Florian Scholz:** Beyond MDN, that's a good question. For now, we're really focusing on supporting MDN. Another project that I'm really passionate about is the browser-compat-data project, which is also an MDN project, but I think it goes a little bit beyond that. To explain this a bit more, the browser-compat-data project is a project that collects what each of the major browsers are supporting. And if you see the compat tables on the \[unintelligible 00:10:58.13\] for example, then this project powers those tables. But also, Can I Use these days is powered by exactly this data... So we're working with Alexis, who runs Can I Use, and we're discussing now to move forward with web compats, which as we know is one of the biggest problem, if not the biggest problem that web developers face.

So next to MDN we're also supporting a lot the browser-compat-data project, and we're looking into how can we help web developers finally having more fun developing for more browsers and addressing some pain points there.

**Nick Nisi:** I was gonna ask about Can I Use... I didn't know that it was powered by thisbrowser-compat-data. That's really cool.

**Florian Scholz:** Yeah. So we made this two years ago, or something... Basically, the browser-compat-data project is so rich these days; we have over 12,000 features in there. As you all know probably, the API surface of the web is just getting bigger and bigger every year; there's tons of APIs added to it, and so there's obviously more and more compat data about all these new features, CSS properties, new web APIs, new JavaScript/ECMAScript core features... So this browser-compat-data project is about collecting all this data and how the different browsers are supporting it.

\[12:26\] And Can I Use did have really good compat data, and obviously, it's one of the premier addresses in the net to figure out compats as well... But it only covered - I think it was like 500 features or so... So we really teamed up with Alexis here and merged in the MDN compat data in Can I Use... And yeah, for quite some time now you can search on Can I Use and the results will also give you everything that's in the data store for browser compat data.

**Nick Nisi:** Now, in terms of what y'all are planning here - at first glance it sounds like this is essentially pull out the organization that was supporting MDN from Mozilla, create an independent organization, diverse funding sources, but essentially operating the same way. Is the intent to have primarily dedicated staff, technical writers that are employees of OWD? What's the future-facing model?

**Florian Scholz:** Well, for this year and with the initial funding we reckon we can finance about four full-time people. We've hired me and Will, so we will probably have money for two more full-time employees. Depending on the things that we wanna accomplish, we might hire some freelancers or contractors to do certain things, but we don't know yet. But we reckon with the initial funding a staff team of four is possible.

Organizationally -- so Mozilla still plays a big role with MDN. Mozilla is still paying the servers, Mozilla still has a writing team, Mozilla still has engineers actually building the MDN platform; they have backend and frontend engineers actually building the site, the platform MDN. So Mozilla continues to invest in MDN heavily. So that continues.

**Nick Nisi:** From a project management standpoint, would decisions about that then go through the Open Web Docs organization, or how would that work?

**Florian Scholz:** Currently, Mozilla is part of our steering committee, so we're working closely with them to figure out a shared roadmap, what kind of content projects to take on... So yeah, we kind of work together closely with Mozilla.

**Will Bamberg:** And I think this role -- I mean, there are projects that are just content, which Open Web Docs can just do on its own; it's just our decision about whether it's a thing we want to work on. And there are also projects that cut across the content and the development, the platform side as well, and those will be figured out in the joint project with Mozilla; they will provide the engineering side of it. So those are gonna be more complicated, I think.

**Kevin Ball:** And is there any plan to support other docs platforms?

**Florian Scholz:** Yeah, I think for this year we're focusing on MDN, and I think that's a lot of work; documenting the web on MDN is a life task... So for this year we're focusing on that, but beyond that, I think there's opportunities for us to also contribute to make spec processes better. I've been thinking a lot about how does it actually work if someone invents something and puts it in the spec, then people implement it, then people write tests for it, and test262 or wpt tests... But then what they always forget is documentation. So what I also wanna work on is how can we work closely with specifications for standards organizations, help them learn more about documentation and how can we bring documentation more into the standards organizations, and make people aware that - yes, you have written the spec, but specs aren't documentation and friendly towards developers necessarily... So what can we do. These kinds of questions is something I would really love to work on.

**Will Bamberg:** \[16:25\] As I see things right now, I don't think there's any real appetite to do something like MDN, but to another platform... Because MDN does what it does, and it does what it does well. So there might be other things that fulfill different kinds of needs that we want to work on. But MDN is MDN, and there's not much point making another one that I can see.

Back in 2014 there was this thing called webplatform.org, which was a project by a bunch of browser vendors to build a replacement for MDN, and it wasn't really successful because MDN was already there. So you know, I think it doesn't seem like a direction we really want to go in.

**Florian Scholz:** Yeah, absolutely. I agree there. I've been participating a bit with the WebPlatform efforts and I thought it was pretty much a duplication of MDN, so I don't think this is a route that anyone should go.

**Nick Nisi:** Any plans or thoughts towards removing the MDN from the Docs - that name - and going with something more open?

**Florian Scholz:** No, I don't think so. As you say, you DuckDuckGo with the prefix, so I don't think \[unintelligible 00:17:32.14\] I mean, if anyone wants to, maybe... We changed, by the way; we changed from MDC, if you remember this, to MDN. Maybe it was 7-8 years ago, because it was the Mozilla Developer Center, and then it was the Mozilla Developer Network, and then it officially became MDN Web Docs, which - kind of MDN stands for itself there... So it's a bit like IBM, or so...

**Nick Nisi:** Yeah.

**Florian Scholz:** So I don't think this will change again.

**Nick Nisi:** Plus, Mozilla is already in every user string, so...

**Florian Scholz:** Yeah. Right. \[laughs\]

**Break:** \[18:14\]

**Nick Nisi:** Right, so in the last section we talked about what the Open Web Docs are, what the organization is, its relationship with MDN, and a little bit about its funding... But let's dig a little bit deeper into the process and what goes into the organization, and figuring out what to actually work on... So I'll just ask you - how do you decide what to work on within this? Do you find docs that need cleaning up on MDN? Do you look at new APIs coming in and kind of base it off of that? What's the actual process that goes into the actual work?

**Florian Scholz:** Yeah, that's interesting. Let's dig into that. So MDN moved to GitHub in December 2020... And now that it's not a wiki anymore, you actually have to think of MDN as the typical GitHub project with a massive repository and people coming to it and wanting to do changes, and those pull requests, that kind of stuff.

If I were to describe my typical day, what the hell I am doing every day for Open Web Docs, it's I spend a lot of time on GitHub, reviewing pull requests and working with the community to get docs updated, to fix typos, to get new things, new APIs, CSS properties, and things on MDN. So I think that's really -- I don't know what percentage I should give here, but it's a lot of work, just being the cat herder on the GitHub repository.

**Nick Nisi:** Absolutely. It's a full-time job.

**Florian Scholz:** It absolutely is.

**Kevin Ball:** So essentially community and project management more than doing the writing itself... Which makes sense, because that's always the hardest thing to get in an open source project, is the organizational piece.

**Florian Scholz:** Yeah, of course it's writing, but in this case, because it's open source and because we're working with a global community and everyone is really happy to contribute to MDN, and that's a really good thing... But it does mean that you need a bunch of cat herders to work with the community and make them feel good about their contributions... And I love doing that job.

**Nick Nisi:** How does it work in terms of the actual content, and deciding when releases get pushed to actual MDN? Is it just kind of ad-hoc as things come in? Do you wait for translations, or what's the process behind that?

**Florian Scholz:** \[23:56\] I think we're gonna enable translations soon, and this is something that the Mozilla engineering team is working on... But we're not actually waiting on anything. Basically, once a pull request is reviewed, it goes live. It's merged, and then it gets deployed, so there's not much of any further approval thing in between there.

It used to be a wiki, and then basically everyone who had an account could just come in, make changes and it's live, much like on Wikipedia. So by moving to GitHub, there's actually a moderation level in here, which is pull requests... That's how things get approved, really. It doesn't really need more than that, I don't think...

**Will Bamberg:** Yeah, I think Florian alluded to it - it's a big change for MDN moving onto GitHub; it really changed the dynamic a lot in the way people work, and also the way staff interact with community members. And I think it really helps with collaboration, having a pull request model... Because in a wiki, your interactions with contributors are super-limited, really. Your options are if you see an \[unintelligible 00:25:08.27\] you can do nothing, or you can revert the edit, or you can revert the edit and ban them. They're all quite aggressive things to do, apart from nothing, which is kind of passive-aggressive.

So it's really nice, I think, having a pull request model, where you can talk to people and say "This is a great change, but maybe we should think about doing it over there" or "Maybe we should also think about doing it on all these other pages that have this problem, too." It's much easier to just talk to people with that kind of model.

As Florian said, it's kind of new, and I think we're kind of getting used to it. We're learning what it's like dealing with this big documentation site with a lot of contributors; so we're kind of finding out right there. But so far, it seems like it's going really well, I think.

**Kevin Ball:** That's interesting to poke at a little bit more, because I think most of our audience, probably their experience with MDN is like Nick's - they put it in their search bar, or they, like me, forget to put it in their search bar and then scroll past the W3Schools entry to get to MDN... But it is open. It's something that we can all contribute to and help out with. Are there any restrictions on who can contribute, or how to get started with that, or recommendations that you have if somebody wants to start helping out on the creation side?

**Florian Scholz:** So there's no restrictions, really. Anyone can. And there's lots of newcomers that we've seen already in the first few months on GitHub, so I can only encourage your and everyone who listens in to come to the MDN content repository and browse around, make some changes, file an issue... There's many issues filed, as usual on large open source projects. Some of them we've marked with "Good first issue", so you might wanna look at these, you might wanna ping some folks like me and then see if I can help to mentor with a thing or two... I'm always happy to.

Also, if you are passionate about an API or a thing that you're like "This is so cool. I love that someone shipped this, but where are all the MDN docs for this?", do tell us. Let us know, and maybe we can help with documenting it.

**Nick Nisi:** Yeah, this is pretty cool. I'm going to admit that usually I just come to MDN through search, and I find the exact API that I'm looking for... It's usually something like slice and splice, or something like that, where I'm trying to figure out the difference... And I don't do much browsing beyond that, but I am right now - and I noticed under Reference and Guides there's accessibility, there's even one on game development that kind of gives you some resources on that... There's a lot more here than just web APIs, which is pretty cool. Or it's kind of collating stuff together as it relates to the web APIs, which is also pretty cool.

\[27:54\] I was gonna ask about how new stuff gets added into MDN, particularly like new web APIs, or... I'm thinking in terms of -- like, one thing that I try to keep up on is TC39 proposals, when things get to stage four... Is it at that point that things then get added to MDN, or how does that work?

**Will Bamberg:** Yeah, pretty much. I think stage four is probably a good time. Sometimes even stage three proposals make it to MDN. I think in the past it depended a lot -- like, some browsers shipped it, and then some technical writer of that browser vendor decided "Okay, it's time to get it on MDN." But as I've tried to get into earlier, I wanna kind of change this model also a bit; stage four also means not only you have Test262 tests, but also it means you have docs on MDN, please. These kinds of things would be really great going forward.

So there's definitely different signals to different people really when things should go on MDN... And one is, "Well, a browser ships this thing, and it appears on the release notes of that browser, and so it should be documented on MDN."

**Kevin Ball:** Nick highlights something interesting - so there's things that are tied directly to a particular API or particular feature. There's "Hey, I need to know how to use this new thing that just got approved", and in some ways it sounds like there's some work to be done, but it's pretty clear, like "Okay, once this gets past a certain stage, it should go on MDN." There's not a decision-making process saying "Does this belong here, or does this not?" What about those guides, like game-making, or accessibility, or whatever? What's the decision-making process around "Hey, we should actually build some meta content. Something that's not just describing the details of a spec or an API, but here's a guide to how to do this type of thing"?

**Will Bamberg:** Yeah, this is I guess in some sense a piece of process that's work in progress for Open Web Docs. The idea is that people can request new things they want to see on MDN, they can request them as issues against the MDN content repo, I think, and also things come through from the steering committee of Open Web Docs, that we look at and we say -- we call these things opportunities; there's basically a project to work on, and we can sort of score it. There are criteria, like how timely it is, whether the time is right for this particular thing, what the impact of it is, how much work it is, that kind of thing.

In terms of things likes guides - there are areas that we know MDN is lacking. We've talked about how we could have better guide docs for performance, and better guide docs for privacy. These are big areas where the MDN docs are not that great right now, I think. So we kind of know where these sorts of weaknesses are, and they're kind of floating around on the roadmap; when we decide that the time is right for us to do them, we can start working on them.

**Florian Scholz:** Yeah.

**Will Bamberg:** But if someone files a bug and says "I couldn't find anything about how to secure my website here that makes sense to me at that kind of high level", then that's a thing we'll take seriously and we'll look at and say "Yeah, there's obviously a gap in our docs here", and it can feed into a project like that.

**Florian Scholz:** Another input to our work and decision-making is also - believe it or not, but we are running one of the largest surveys on MDN that web developers respond to. There's the Stack Overflow survey, but there's also the MDN Developer Needs Assessment. You might have heard about that one. With this one we were actually able to figure out what are the top pain points for web developers. So if they tell us it's compatibility, we should probably improve the documentation on that. If they tell us "I still don't get \[unintelligible 00:31:43.01\] I need more guide material on these things..."

**Will Bamberg:** Right, yeah.

**Florian Scholz:** So yeah, I think we're trying to do user testing and user interviews, maybe sometimes even A/B testing on some docs, to figure out what is best for all the web developers using MDN.

**Kevin Ball:** \[32:10\] What's the decision-making process behind including documentation specifically about third-party -- or stuff that's not part of the platform itself? For example, just searching around - I was searching on JavaScript framework, and I saw "Oh, there's an MDN article on Ember.js specifically", where there's articles on accessibility in React specifically. So what's the distinction or what's the decision-making process around whether X, Y, Z third-party library should get included on MDN?

**Florian Scholz:** Yeah, so by default, MDN really cares about the web platform, so I think vanilla JS and just documenting web standards is the top priority. However, and as we go into guide material tutorials and that sort of thing - well, there is the reality that frameworks are used, and some are used a lot, especially in a thing that we call the learning area on MDN, where people can go and actually follow a pathway, so that at the end they actually say "Okay, I've learned, I've accomplished something by going through this cause, or through this set of articles, and I've learned how to do things with Ember or React." And for how to choose, which frameworks to use, I think we really reached out to almost all of the major frameworks to give us input and to help us contribute this documentation in their learning area specifically... So I think it was kind of fair. We weren't preferring any framework there, really... And if any framework doesn't see itself on MDN, but we should have it, then talk to us; we're happy to add it.

As Will said earlier, MDN was really trustworthy, because it comes from this neutral editorial voice, and we surely wanna keep that not preferring any framework or any browser vendor. I think that makes us so trustworthy in the web development community.

**Will Bamberg:** Yeah. In my perspective, my sense anyway, is that historically we've been pretty reluctant to have a lot of documentation on MDN that's not Open Web Docs, for various reasons. One is that React has its own docs; they're great docs. They maintain really good docs. What's the point in us having docs that are probably not gonna be as good on MDN? It doesn't seem to add any value for anybody.

On the other hand, people ask for these docs quite often, and I think especially for the JS frameworks. These are among the most requested things on MDN, "You should have docs for JS frameworks." So we do now. But I think they're kind of intentionally more high-level than the React docs for example themselves... Because another problem with this is they tend to change more often and quickly, and so maintenance becomes a huge problem. You don't have the same kind of insight into the roadmap for this project, so you don't exactly know when change is gonna come up and you're gonna have to update your docs for it, right? So you're working at kind of a disadvantage there anyway. So yeah, I think there is space for some documentation that's not Open Web Docs, but I think it kind of wants to try to be high-level, and the kind of stuff that won't age badly, you know?

**Kevin Ball:** Yeah, that makes a ton of sense. I feel like there is a case to be said that there shouldn't be any of these framework-specifics docs on there; that it should all link out. But as you say, you also need to react to what people want and what they're looking for.

**Will Bamberg:** Yeah, that's the thing - people do ask for them.

**Nick Nisi:** And along the same lines, I know that they are separate things and it's not technically open web, but from just like a knee-jerk comparison between -- as a JavaScript developer I'm writing JavaScript, and me personally, I'm writing JavaScript either in a browser or on the server... And so I have caught myself typing in "readFileSync mdn" or something to try and find Node-specific APIs there. But you don't see that as a purview for Open Web Docs to be looking into?

**Florian Scholz:** \[36:14\] Yeah, I don't think we're gonna write server-side Node documentation... But here again we look at what our users want, and they actually told us that the compat tables should have Node.js as a thing in there. So we did that, and people love it. Whenever they browse the core JavaScript docs and they see the Node.js support version there as well, it's like "Awesome. I just needed to know this." And apparently, the Node.js docs themselves, they probably don't make it so great to browse which version supports what... But yeah, there you have it directly on MDN too now.

**Nick Nisi:** Yeah. That kind of got me thinking about it, because I do see Node in those compat tables.

**Florian Scholz:** Yeah. Sometimes we're like "Okay, we've gotta have Node for the compat table", but documenting \[unintelligible 00:37:00.26\] is probably stretching it a bit too far. And also, what Will said - I mean, the good thing about the web is... I mean, it's a good and a bad thing, but we're not removing much; we're just adding more, and there's no incompatibilities really. There's no versioning, there's no Web 2.0 or something, really. It's just one version, one JS. But with React, it's gonna be where we're at right now, but as Will said, those APIs, those frameworks, they just change all the time, and we have no insight into where we are with things, and we can never keep up. An impossible job.

**Will Bamberg:** Yeah. They can afford to move faster, basically, than the web, right? So that's gonna be a problem for writers.

**Kevin Ball:** The back-compat story is so different, right?

**Will Bamberg:** Yeah, yeah.

**Kevin Ball:** The whole "You can't break the web mantra that has defined our paths forward on JavaScript and CSS and all of these things... I hadn't thought of it before, but that's a boon for you as documentation developers, because you can be append-only, essentially, for prior stuff. Maybe you tag it with Deprecated, but it's gonna keep working if it's in the platform.

**Florian Scholz:** Yeah. I mean, as someone who works a lot with compat stuff, \[unintelligible 00:38:16.16\] browser-compat-data project, I know that there's lots of stuff also that we're gonna deprecate, and maybe remove one day... And just adding to the API surface - I don't know how long-term this will look like. If we're talking again in five years, I seriously don't know where the API surface will be at, and I don't know if we're still in this fun JS world. It's super-interesting to see what's happening there... But yes, we're just marking things as deprecated and don't use it anymore... But you know, it still exists, and websites from 1995 - they exist and they still work, and that's beautiful... But they probably use APIs that you shouldn't use when writing a new website today.

**Will Bamberg:** Yeah, right. So the APIs are technically still there, but the \[unintelligible 00:39:05.16\] So you still have to maintain them, but you still have to write stuff that says "By the way, don't use this, even though you can." That's quite often a thing for maintenance on Open Web Docs, is updating guidance around things.

**Florian Scholz:** Yeah, absolutely. One thing I noticed is that they're working a new date API, and this is so fundamental. Date APIs are one of the most browsed docs... I think a lot so because the APIs are terrible... \[laughter\]

**Kevin Ball:** I was gonna say, they're browsed so often because it's broken.

**Florian Scholz:** Yeah. But imagine we have the new Date API, or whatever it was called (I forgot), but imagine we got this implemented everywhere, and now we need to advise everyone to move away from the Date API to this new thing that's gonna be interesting, I think...

This is a typical task that we do - we advise, "Hey, this thing, AppCache, or Date API - we've got a new one. If you are doing a new project, don't do this anymore; do that instead." This is what we're doing also a lot, I think - giving these kind of hints and best practices information.

**Kevin Ball:** This is just my own ignorance speaking, but do you all do migration guides as well? In that example, "You're doing a new project - you shouldn't be using this, you should be using that. If you have an old project, here's how you migrate."

**Florian Scholz:** \[40:22\] Well, AppCache - I think we wrote up some material, "Okay, AppCache is gone. Use Service Workers." But I don't think we do this regularly. We should probably do this more often. I think migration guides are great.

**Kevin Ball:** Alright. Feature request. File it \[unintelligible 00:40:35.11\]

**Florian Scholz:** Yeah, file it. Just file it.

**Will Bamberg:** Yeah, it is a good point.

**Florian Scholz:** Some brainstorming here, I love it.

**Break:** \[40:41\]

**Nick Nisi:** So we talked about what the Open Web Docs is and what you've been doing and what your focus is for 2021, and that is MDN specifically... But where do you see that going beyond 2020? What other kinds of ideas do you maybe hope to take on, or are thinking about taking on? What does the future look like?

**Florian Scholz:** As I've said in the other section, one of the things I'd like to bring more into this standards world is how they treat documentation - in my eyes, hopefully at some point, as a first-class citizen, just like tests... This is gonna be something I wanna work on.

And then another thing I'm thinking about is also writing more documentation about how web platform stuff gets done, so how specs get written... I think Bocoup was writing a web platform contribution guide at some point, which I really enjoyed... But I don't think it covers documentation very well, so we could maybe extend that and onboard more people into writing documentation for the web. So I think this could be something. I don't think we will move away from being centered around MDN next year or in the future. I think Open Web Docs is a thing that should support MDN long-term.

**Nick Nisi:** I know you mentioned ECMA Test262... I sometimes see tests as documentation; if they're well-written tests, you can see them as runnable documentation. Do you see something like that ever becoming the purview of Open Web Docs?

Another thing I'm thinking about is -- I'm contractually obligated to bring up TypeScript... And I'm thinking like, you know, in the TypeScript core repo there's a lot of core web API types for all of the different APIs that are maintained by the TypeScript team... But that could be considered living documentation that is exposed to me through my editor...

**Florian Scholz:** \[44:33\] Right. So one of the things that we started actually one or two years ago, after we kind of got started with the compat data, is to think more about data and documentation. So one of the things I could see us doing is do more research and investigate more how documentation could actually become more data. TypeScript uses this a lot to see what is this thing, and MDN could expose a lot of its information - not only the compat data, which is structured data by now, but there's so much more information in the documentation that we could expose as data and get that integrated into IDEs or into TypeScript or other languages that could make use of it. So I think this could be an area where we do more research and do interesting things in.

**Kevin Ball:** That raises an interesting point - is there an MDN API of some sort that, for example, IDEs could pull in documentation for all of these supported APIs?

**Florian Scholz:** There isn't yet. Maybe Will will wanna -- Will is very passionate about this whole structured documentation topic, so... Take it away.

**Will Bamberg:** Well, no, there isn't, but it's a really interesting idea, basically. I'm very interested in this, the idea of whether we can structure MDN content in such a way that it's consumable by different kinds of applications. As a website, MDN is still focused on web docs, but can the MDN content power other applications than just the website? Can it feed into editors and can it feed into dev tools and stuff like that? I'm really interested in this idea of having documentation be available in a developer's workflow in the most clean way, rather than maybe having to stop what you're doing and go open a browser tab and do your search for MDN and find the thing. How can we be better integrated into people's workflows. So yeah, editors is a good example of that. Dev tools is, too.

So what sorts of things would developers like to see in their workflow? What kinds of things can we structure and make semantic so that we can do that? And then what kind of work do we have to do in the MDN platform to rework the content so that becomes possible? We've done a lot of thinking about this in the last year or so, and I'd love to go further with this.

And as Florian says, browser compat data is one of these things that is a kind of trailblazer for this. Back five years ago, compat data was just HTML in pages. It was like it was locked up in the HTML, the compat status of, say, \[unintelligible 00:47:19.23\] It was like it was dead; it was just there in the HTML. And what happened with browser compat data is it turned into data and then it becomes live, and you can remix it, and you can build different views of this data and you can have a single page that lists a compat story for everything in an array, and it can just pull from the same data. That's a powerful thing, and if we can do that for more of our documentation, I think it would be super-cool.

\[47:46\] And we do this as well -- there's this thing called mdn/data, which again, even before browser compat data, it was like a really early attempt to try and do this, and have some kind of structured content for mostly CSS properties. And it was actually used in MDN to power some stuff. It was a kind of really early prototype, and there are things we'd do differently if we did it again, and there are ways we'd consume it differently if we did it again. It's obviously an idea that has been kind of kicking around for a long time.

**Kevin Ball:** Yeah.

**Will Bamberg:** The more we learn about it, the better approaches \[unintelligible 00:48:15.08\] \[laughter\] And another thing is like - MDN being on GitHub makes this stuff easier, too. Because now it's just files, and I can go and make big changes to it, systemic changes across the whole thing, and it's much easier for me to make them, and it's much safer too than it used to be. It used to be terrifying, making systemic changes to the wiki, because there's no dif, right? So you have really no idea if what you're doing makes sense or not. It could change like 500 pages. I have done this, and it's terrifying... And now it's not nearly so bad. So that's another possibility that MDN being on GitHub opens up for us.

**Kevin Ball:** Yeah.

**Will Bamberg:** Speaking in concrete terms, one thing which people have asked about in \[unintelligible 00:49:03.07\] is having short descriptions for things... So like "What's the one-line description of what Array .splice( ) does...

**Nick Nisi:** It'd be helpful.

**Will Bamberg:** ...and is that a thing we can slurp out of MDN? Well, okay, to do that, it has to be marked up in such a way that you can actually retrieve it... And it has to be consistent. It has to be short enough to fit, and it has to actually make sense if it gets kind of contracted. And it has to use tags to make sense in the context tree you're displaying it, and this kind of stuff. So your content has to be in good enough shape that this is gonna work properly.

**Kevin Ball:** Yeah, this really makes me think about -- and I was just looking right now at what the content looks like in GitHub, and it doesn't look like you have it. But some sort of equivalent to the type of social markup you might put on another website, where you have a set of structured tags that include a short description, a reference...

**Will Bamberg:** Right.

**Kevin Ball:** For example, if it's a browser API, include that as a structured thing, and then you can write some scripts that process that and give you an index to look things up, and all that other sort of fun stuff. But if that's not already there, that's a big project.

**Will Bamberg:** Yeah.

**Florian Scholz:** It absolutely is. We've been approaching this with linting, and kind of making docs more structured, and first and foremost figuring out what kind of templates, and how to structure reference documentation better, so that you can slurp information out of it... But one big blocker is also the source format currently is HTML We were thinking about moving to markdown, and then maybe structuring it and giving it semantics... But it's a long way.

**Kevin Ball:** I mean, it looks like you have some header data, essentially...

**Will Bamberg:** Like the front matter you mean.

**Kevin Ball:** Yeah, the front matter.

**Will Bamberg:** Yeah. I was excited to see that too, yes.

**Kevin Ball:** That's something that you can stash whatever you want in there; it doesn't actually have to be involved with processing the HTML. It could actually be there for your other tools.

**Will Bamberg:** Right. Yeah, exactly. It's just a matter of what we put in there and how we -- I think you have to design it carefully in what you actually want to have, so it doesn't just become a big dumping ground... But yes, exactly. At the moment I think it has title and slug and tags. And the tags are just like -- like, back in the wiki days... This is just the same with the tag values the pages had.

**Kevin Ball:** Yup.

**Will Bamberg:** Back in the wiki days anybody could not just apply tags to a page, but anybody could create their own tags... As a result, there were I don't know how many tens of thousands of tag values on the site... Which I assume most still exist, so that would need some clean-up.

**Kevin Ball:** You could have validation on those, and all sorts of other stuff.

**Will Bamberg:** Yeah.

**Kevin Ball:** So in the compat data right now, do you have links back to relevant documentation pages?

**Florian Scholz:** \[51:52\] Yeah, we do. This has been good for various embedding projects. It's not only "Can I use embedding--" So I'm thinking back to MDN. It's VS Code, and other projects - yeah, embedding the compat data... Yeah, using this part of structured MDN data already, and then this is kind of our -- we wanna do more of what BCD did really, with more short description and more data that MDN has to offer.

**Kevin Ball:** Yeah, absolutely. So you already have your index, right? So you just need to add whatever the sets of structured pieces that you wanna be able to display, and you can use that index to look it up.

**Florian Scholz:** True.

**Kevin Ball:** And it may not right now be in a good structure, but with the index you can write a script that's gonna pull that stuff out.

**Florian Scholz:** Yeah.

**Will Bamberg:** Yeah. And the other nice thing about this whole idea is that with BCD, because it's just data, how you represent that in the rendered pages is a matter for the tooling. So if you decide you want to change how you want to represent compat across all 10,000 MDN pages, you change it in one place. Back in the old days, you'd literally have to change it in 10,000 places. So it's good for the website too, I think, having that kind of build step for the content.

**Kevin Ball:** Yeah. So BCD is in the browser-compat-data repo on MDN?

**Florian Scholz:** Yeah.

**Kevin Ball:** Interesting...

**Florian Scholz:** Yeah, this was really cool, as well as when we moved to static HTML stuff that used to \[unintelligible 00:53:15.15\] compat tables into data, basically, into a separate repository... And now whenever we wanna change how the browser compat tables are rendered on MDB, it's just a React thing that gets the data from the data store, and then if we wanna change the presentation we just do so, and it populates to all 10,000 pages. It's just -- I want more of that, and not mass edits on MDN pages for a thing that I wanna do everywhere.

**Kevin Ball:** Absolutely. So looking at this - I'm looking at the compat data now. It's linking to the MDN URL. Is it straightforward to map from that to the location in GitHub, the file name? Or is there a processing step that makes that hard? Because one of the things - you might want us to access that front matter, because that's structured once again.

**Florian Scholz:** Yeah, I think you have a point there. I think it's probably maps, because the files folder and the MDN content repository maps to the slugs, so to the MDN URL. So I think yeah, it should work.

**Kevin Ball:** Interesting. So that might be a fun little project if anybody is listening and has free time... Write something that's gonna run through the browser compat data, look up the appropriate file in the content data and just pull out the structured data and make it available. And some day, when there's more structured data there, it will probably be more useful than it might be today.

**Florian Scholz:** Yeah. It's funny that you say that, because I think over the years many people have scraped MDN in various ways. They scraped the wiki, and now they're scraping the GitHub, or scrape BCD... So we're going from prototype and scraping to scraping... Which is great. Lots of good things happen there. But yes, as we said earlier, ideally one day there's gonna be some sort of MDN API that officially makes available this data. So that is definitely something in the far future to look forward to, I think.

**Nick Nisi:** That is exciting. I'm excited about the idea of that, and all that you could do with that data. Being able to integrate it in all sorts of different ways. I don't know if it exists, but one cool thing could be like "These are the browsers or the environments that I support", and then every time I try and use something - maybe it's like a stage three or stage four feature - show me in my editor right now if it's not going to get there with or without a build step. That'd be really cool.

**Florian Scholz:** \[55:40\] Yeah. Avoiding this kind of context switch from the editor, going to the documentation, going back into the editor - that's a good thing. We've done this -- I've added a Learn More link to console errors. So if you're in DevTools and you're doing something, and then like a syntax error or whatever it's spitting out, then in Firefox you get a little Learn More that explains what is going on and how you can debug that... And this has been really cool. So whenever you integrate into the workflow and make links or contextual information available, then people really love this, and I really wanna see more of this - bring documentation closer to the developers, in their environments.

**Nick Nisi:** Yeah, I really like that. So we've talked about it a bit, but what is the easiest way for the community to get involved in Open Web Docs? Is it just go to MDN's GitHub and start looking at issues, or contributing to the docs there? Is it go to Open Web Docs on GitHub, and is there a way to get familiar or help contribute to the steering committee, or things like that, like the actual organization?

**Florian Scholz:** Yeah, sure. Both is fine. You can file issues on Open Web Docs and on MDN. I think if it's really about some MDN page that needs fixing, I think just filing it on MDN content is the better way to go about it. But if you're really curious and interested in specifically connecting with us, file an issue on Open Web Docs project, talk to us. We have all the steering committee notes available there. You can read about what we're up to, radically transparent in that case.

We have an Open Collective site where you can, of course, donate, and kind of follow our blog there. Every month I'm publishing a little worklog post where I'm kind of making a roundup of what sorts of work we've got done in a month... So you can be updated about our progress there. Follow us on Twitter, and all these kind of things where we inform about webinars, or things that we're doing.

One thing we will probably organize sometime this year is a documentation sprint. We used to do this a lot back in the day as well. The idea is pick a thing where we need lots of people to help with, and then get organized, maybe hop on a Zoom call... Maybe once all this is over, meet also in person... I could imagine actually doing a little workshop or something, combined with a conference or so, when all this is back, where we could have a little session on doc sprinting, on documentation. For this year I guess we're gonna try to do this online, so definitely subscribe to our channels to be updated about information on that.

**Nick Nisi:** Sounds great. I'm really looking forward to seeing all the improvements coming, and keep doing what you're doing, because MDN is an invaluable resource, and I'm really excited to see how this experiment goes over the next year and into the future. I definitely wish you the best of luck, and I hope to have you on again to talk about how it's been going and how you see it going into the future from there.

So thank you so much, Florian and Will, for coming on, and we will see you next week.
