**Kevin Ball:** Alright, welcome, everyone! You are listening to another episode of JS Party. This is episode \#29 in our weekly celebration of everything JavaScript. I'm Kball, I'm your host for this episode, and I'm joined by two of our awesome JS Party panelists. First off, we have Nick Nisi. How's it going, Nick?

**Nick Nisi:** Hey, I'm doing good.

**Kevin Ball:** Sweet. And Jerod Santo. What's up, Jerod?

**Jerod Santo:** Not too much, Kball. I'll tell you what - you're doing such a great job bringing the joy, bringing the MC skills that I might have to renamed myself Jball just to steal some of your cool.

**Kevin Ball:** \[laughs\] That's pretty good. Alright, so next time I actually try to write a JS Party wrap I'll call you Jball and we'll see what we can do.

**Jerod Santo:** Please do. It rhymes with more stuff than Jerod, I think.

**Nick Nisi:** Like Kball.

**Jerod Santo:** It rhymes with Kball quite nicely, yes.

**Kevin Ball:** Fancy that! Alright, so today we are talking about this fancy schmancy user survey report that the Node.js Foundation shipped last week. Now, they talked to several thousand (something like 1,800) folks who are using Node, gathered a whole bunch of data, sliced it, diced it, got it analyzed by a third party, put together an interactive version of it, and there's just lots of stuff there about what's going on in the JavaScript community.

Let's first kind of start off my talking a little bit about why do we think this is important. You all were pretty excited about doing this episode, so Jerod, maybe tell us what got you excited about this report? Why is it important?

**Jerod Santo:** I'm a data nerd, I guess. I like tracking progress of things and seeing where our community and different sub-sections of our community have been, and what they're doing now, and where they're going... So anytime somebody puts together reports like these, I just like to dive into them.

I don't usually have too much output coming out; I would love to do more things with the data, but I at least like to read it and think about it. I think also the Stack Overflow Survey is another one that we focus on... And I think GitHub even was doing some GitHub user surveys, which we had a show on that back in the day on Request for Commits. So I just like the data side... How about you guys?

**Nick Nisi:** \[04:02\] I really like using it as an indicator to see where things are and how ahead or behind my skill set is relative to other developers who took this survey. It was also interesting to compare it to the previous years. I look at 2016 through 2018, and it's just interesting to see how things have changed.

**Jerod Santo:** Kball, you did a whole write-up on this on InfoQ, so you obviously think this is pretty important, as well. Are you coming from a similar angle as we are, as why we care?

**Kevin Ball:** Yeah, I mean, I proudly rock my New Relic data nerd shirt from 2009... I will dive into anything. One of the things I really appreciated about this is they not only show the high-level and let you slice it/dice it interactively, but for the true geeks among us, they give us the data so we can actually go and analyze it.

But I kind of was looking at this from a couple perspectives. One that has been bouncing around in my head for a while - there was a blog post a couple weeks ago by Anil Dash that was titled "What if JavaScript wins?" It was playing with this idea - the JavaScript ecosystem as a network that might be getting escape velocity and sort of dominating all other languages... So this coming out right after it made me think "Well, can we find any evidence, pro or against? Is this actually happening?"

In some ways -- I mean, there's definitely strong evidence that JavaScript as an ecosystem is growing extremely rapidly, but I actually found this report kind of counteracted that sense as well, because it seemed to show continuous focus in the web dev space, and if you look back a couple years, it doesn't seem like JavaScript is growing in all domains; it seems like it's still pretty focused on web developers.

**Jerod Santo:** So what did Anil say would happen if JavaScript wins? I personally don't really wanna see a winner declared, I don't think there will be. One of the reasons I'm excited about Wasm is bringing more people to the table. I'm a polyglot, so I like having lots of different facets, lots of different languages. I don't really want a winner, I don't want a homogenous JavaScript blob that powers the entire world. What about you guys?

**Kevin Ball:** The post I think was kind of playing with this idea of "Where do developers and companies choose to invest first, and he highlighted that there's always gonna be room in development for niche solutions and things that are targeting particular use cases... But when your people are building developer tools or they're building libraries and frameworks or building interfaces to libraries and frameworks, they have to make prioritization decisions - which languages they're gonna target or support first... And kind of where he was saying is it is possible that we'll end up in a situation where JavaScript has such incredible mindshare and so many people doing it that it becomes the first choice for all of those. And many of those products will go on and support other languages, but some won't, so it will create this kind of entangling network where the default choice if you didn't have a strong reason to do otherwise would be JavaScript.

**Jerod Santo:** I know why he wrote that post; we're definitely seeing the tide shifting or rising, or whatever it's doing, in that direction... And it's interesting especially when we get to the section on learning Node.js, and how people go about learning... It's interesting to see, specifically Apple with open sourcing Swift and trying to get that in such a learning aspect of the world, like education and with people who are coming into programming - that be their first language. Because what we're seeing is JavaScript is a lot of people's first language now, and you can tell how important that is for continued use by how much Apple is throwing into trying to get Swift to be that first language.

**Kevin Ball:** \[08:01\] Yeah, absolutely. I think resources and learning is a big one, and that was actually one place where -- once again, looking at this year-over-year data, some things didn't change at all... Looking for this idea that JavaScript is taking over the world, I didn't see any evidence for that; that percentage of people doing web dev versus IoT versus whatever had stayed pretty similar. But what did change year-over-year was satisfaction with the learning resources... And also, what percentage of people responding were new to programming. So I think JavaScript has made - and particularly Node - has made some big strides improving the learning resources out there.

**Jerod Santo:** Well, let's come back to learning, let's start with the rapid growth that you documented - I think this was one of the things that you highlighted in your InfoQ article... "There's 10 million Node.js users according to the survey, as compared to 7 million Node.js instances in 2017." So there we have a large rise, right?

**Kevin Ball:** Yeah. Well, how many developers do we think there are out there? I've seen a number of different numbers thrown out, but I think the higher end was something like 20-30 million developers. Does that mesh with what you guys have heard?

**Jerod Santo:** I'm frantically trying to grab a recent number. I don't think I've heard recently a number, so I'll have to go on yours. I'm looking at a RedMonk article about how many developers are there in the world... GitHub said - this is back in 2017 - 21 million developers working on 59 million projects; that's a slide I'm seeing off of kind of a GitHub state of the union, which I think was worldwide, not GitHub-wide... But that jives a little bit with what you've just said.

**Kevin Ball:** Even if we take the very high end and say there's 30 million developers out there, that means one in three are using Node. That's crazy.

**Jerod Santo:** That's incredibly high. Now, what does "using" mean? Because a lot of this stuff is up to interpretation... Both on our side, like how we interpret the results, but then also on the individual survey takers' side. I'm sure they're given more context than we are. But when you say "Node user", do we know exactly what that means?

**Kevin Ball:** Great question. No idea.

**Jerod Santo:** No idea, okay. \[laughs\] It's subjective. If you think you're a Node user, you are one. Something like that, maybe.

**Nick Nisi:** And if you think you are, you're probably taking this survey.

**Jerod Santo:** Yeah, that's another good question; all these surveys have their biases built in. It's reminding me of our conversation about machine learning and the biases built in there, but this is surveys of like Node users... According to the overview, it was fielded in English and Chinese from October 27th to January 2018, yielding over 1,600 respondents.

They don't really go into the details of how they conducted the survey. Maybe that's in the downloaded PDF that I didn't look at. I'm just looking at the interactive overview.

**Kevin Ball:** Yeah, I didn't see that either, and I noticed something that was odd, which was how under-represented China was in the data. They had -- 1% of respondents were in China. I did a little bit of looking around, and there was a study by a Node source a year or so ago that indicated that China was at least the largest in the developing world in terms of downloads of Node per month, or downloads of Node overall.

Also, looking at other JavaScript communities that I'm a part of, or getting more and more active in the Vue community, there's tons of Chinese representation there; there's a ton of stuff going on, and it makes me think that their survey is probably not that representative of the actual distribution of Node users... At least when it comes to China.

**Jerod Santo:** \[11:51\] These things are hard, and they're very hard to do well... As with many of these surveys, like Nick said, this is people who are -- I mean, it's going to be Node-heavy because their point is to profile Node.js users, and so that's kind of a self-fulfilling prophecy if you will... But all these numbers - they're great to think about, they're great for discussions like these, and some of them have to be taken with a grain of salt, knowing that there are flaws in methodology, and in sample size, and in all these things.

**Kevin Ball:** I also found interesting that they had separate questions apparently, distinguishing between Node versus JavaScript. It kind of cracked me up that only 93% of the people who responded to the survey who said they use Node - it said 100% use Node, and only 93% said they're using JavaScript.

**Nick Nisi:** Do you think that that could be taken as a distinguishing between front-end and back-end JavaScript?

**Kevin Ball:** Could be... \[laughter\]

**Jerod Santo:** Maybe...

**Kevin Ball:** Maybe, if we're being super generous... A smaller percentage said they were doing front-end development of some sort, so... Yeah, maybe it's a distinction; maybe folks are using it, but they're only doing development in TypeScript, or some sort of compile-to-JavaScript language.

**Jerod Santo:** I find Node difficult to explain outside of the in-crowd because of that reason. Like, it's a runtime, but...

**Kevin Ball:** Yeah, it's a runtime. Exactly.

**Jerod Santo:** Yeah, but is that the way you describe it to somebody who's maybe either a programmer in a completely different space, or maybe they're just like "What do you do?" and then you say "I do Node.js", or...?

**Kevin Ball:** Yeah, I mean... I think you could say it's a runtime; that doesn't mean something -- basically, it's a system for running JavaScript in places that aren't a web browser.

**Jerod Santo:** That's pretty \[unintelligible 00:13:43.06\] You're good at this, Kevin. See, I'm Jball.

**Kevin Ball:** Jball, alright.

**Jerod Santo:** "What would Kevin say?"

**Kevin Ball:** I'm gonna get you a shirt that says Jball on it.

**Jerod Santo:** Yeah, there you go. So why do you think specifically -- I mean, this was put on by a third-party... The Node.js Foundation hired out a third-party to conduct the research. Why do you think in their very own survey they would distinguish between Node as a "language" versus JavaScript as a language? Nick, I know you just guessed at one reason, but isn't that weird...?

**Nick Nisi:** I think it is, especially since there's no matching of any other framework, I guess... I kind of classify Node as a framework, and you don't really see that anywhere else. But then you have the two distinctions between Node and JavaScript, so it is a little weird.

**Kevin Ball:** I have two hypotheses. Hypothesis number one - if I look at the PDF, it's branded "Node.js blah-blah-blah, the Linux Foundation." So that hypothesis is the survey was actually administered by a set of folks who help at the Linux Foundation who are not themselves Node users.

Hypothesis number two is they're trying to create a brand distinction separate from JavaScript. Both are kind of marketing(ish) reasons, but...

**Jerod Santo:** Yeah, I can see both of those being partially true, or maybe both of them are dead-on... Since it is a third-party conducting this deal, they do their best to completely understand... But maybe they don't. And secondly, they are -- I mean, Node.js is a thing, right? It's the Node.js Foundation, NodeJs.org... But JavaScript is a bigger thing, that encapsulates that thing; so if you're trying to stand apart in your survey, then you're going to try to distinguish.

**Kevin Ball:** Yeah... I don't know. It definitely -- you know, as someone who uses JavaScript both in a Node setting and a non-Node setting, it threw me for a loop. I was like "Um, do these guys actually use the thing that they're talking about here?" \[laughs\]

**Jerod Santo:** ...that they're asking about, yeah.

**Kevin Ball:** Yeah, what is going on there...?

**Jerod Santo:** \[15:48\] Well, the researchers themselves might not be using Node, and maybe if they're doing data-munging, maybe they're using a Python or an R, or something else... But lots of people are using Node, and the people that they've surveyed sure are. Back to the rapid growth discussion, you have 75% of surveyees planning to increase their usage over the next 12 months. So not only people are using it, but they must be happy with it because they're also going to use it even more in the next 12 months.

**Nick Nisi:** I was really surprised that the numbers for that increased at the expense of other languages, like Java and Ruby and PHP. I thought that those were pretty significant decreases. Java has in the next 12 months a 43% decrease, Ruby 37%, and PHP 51%.

**Kevin Ball:** Yeah, so one thing I noticed with that, which is hard to say -- what they're measuring is intent, what people say...

**Nick Nisi:** Yeah.

**Kevin Ball:** ...and I dug into that when I was writing that article about this for InfoQ. If you look at the previous year's survey, there were similar reports around how much they were intending to change. Python is gonna go way up, PHP, Go, Rust - all these big intents to change... Almost none of those actually translated into changes in this year's survey in percent saying they used it. They only ones that actually changed -- well, Python was up slightly, PHP was down slightly. Both Go and Rust, which reported massive intent to increase, were stable in terms of their percent. No change. Scala and Swift, both of which had a net report of increased intent, were down year-over-year. So that intent to change -- it might be better for us to read that as aspirational... "These are the cool, hip languages that I really wanna be using. These are the old, dead languages that I wanna get away from. Oh, shoot, I actually have to keep delivering production code...?! Well, I'll go with what I know."

**Jerod Santo:** Yeah, it's similar to like an exit poll - it's like, "Who are you going to vote for?" versus who you actually vote for come polling day... We find those quite different.
I'm still just flabbergasted, because I'm looking at the languages used... Other languages used, in addition to Node - the top language, JavaScript. It's like, "Excuse me?" You know... Weird. But I have to get over it.

**Nick Nisi:** I think it still does show just overall satisfaction with JavaScript and the Node ecosystem, as compared to other ecosystems for Node developers. Node developers do seem to enjoy the Node ecosystem.

**Kevin Ball:** JavaScript's gonna JavaScript.

**Jerod Santo:** That's right, and maybe you do see that a little bit, with the aspirational intent to diversify, but then the actual not diversification. There's a lot of things that play into that; like you said, Kevin, maybe the need to ship production code, or just use the tools that you're familiar with... But specifically with the desire to get into Go, get into Rust - these are things that would compete specifically with Node on the back-end, right? Back-end developers. But the lack of actual movement may indicate that they're either completely satisfied, or other reasons that they don't actually go about switching.

**Kevin Ball:** One thing I find interesting looking at those languages also was looking at Ruby and Python; this is going a little bit astray potentially, but... Kind of in my head, those are in very similar buckets, with the exception that Python is also data science; I think of Ruby and Python -- those are the best general purpose starting web development languages... You know, largely because Java and Rails have been so successful. Looking at the survey, Python strictly dominates Ruby. It's used by far more people, it's intended to increase by far more people...

So I don't know how much of that is specific to folks who are doing Node, and which things they're gonna replace; how much of that is my perspective, is totally biased from living in a startup ecosystem... You know, West Coast, California and all of those things are where that's coming from. I'm curious what your perspectives are on Python versus Ruby.

**Jerod Santo:** \[20:15\] Well, I would be surprised, but I've seen the data previously, so it doesn't surprise me this time around. I think definitely Ruby gets the larger end of the marketing hype - or at least historically has - and now is getting the short end of the stick on the hype, so you see a lot of people moving away... Whereas Python has remained relatively steady.

I think a lot of that number does have to do with just the multi-faceted use of Python, beyond just the web. Like you said, it's used in data science; specifically now it's even more to the forefront with the shift into a lot of deep learning stuff. So that's probably what I would attribute it to, but it has its hooks deep into Academia as well, and these are places that are under-represented in kind of the typical developer marketing, Hacker News, Changelog News world, right?

**Break:** \[21:16\]

**Kevin Ball:** Alright, so another interesting spot in the survey was looking at package use, and this is something where npm as a registry kind of typically dominates \[unintelligible 00:22:00.16\] where they're adding 500+ packages a day, and really going all over, but... There was some interesting data in there about using Yarn versus npm, and things like that... Nick, did you have the notes on this? Did you wanna talk about that?

**Nick Nisi:** Yeah, I can. I was kind of surprised at how small of a market share Yarn has, compared to how much hype it seems to have, with really only being at 13%. That was pretty interesting to me... But it has been increasing over the years.

**Jerod Santo:** Well, that's that thing... They noted - if you look at the interactive version of the survey - that that 13% is up year-over-year. I couldn't find any stats in the 2017 data... And didn't Yarn come out in 2017? It couldn't have been too much usage... When was Yarn actually released? That couldn't have been too long ago.

**Nick Nisi:** I wanna say 2016.

**Kevin Ball:** I found the release blog post - October 11th, 2016.

**Jerod Santo:** Okay. And I found the 1.0 release was September 2017, so that's when it was 1.0. So yeah, I guess you could have two years of adoption then, but I just couldn't see what that was. I still think 13% is low, but that being said, it seems like npm (the client) has really reacted to Yarn in many ways; they've been working hard. It's one of those "competition begets quality."

**Kevin Ball:** Yeah, to me at least, the massively largest value prop that Yarn had was the lockfile and getting that reasonably right, because npm shrinkwrap was a disaster. npm kind of took that, and now they have that package-lock.json, and it works pretty much the same. The incremental value of yarn relative to npm just dropped dramatically... And it may still be better, but it's not 10x better anymore; it's maybe like 20% better.

**Jerod Santo:** \[24:08\] Corvin posted in the chat here, he says "This was the news last week. It looks like Mixmax.com posted a blog to Yarn and backed npm again." So we've reached that level of the cycle where first everybody was switching, and now certain people - at least this particular blog - are switching back. Corvin, if you can tell us the high-level summary of why they're switching back... Maybe it was what we just said here; it's perhaps incrementally better, but not 10x anymore. That might be the case.

My particular use - I've used them both; npm seems just fine. We have Yarn in Changelog's pipeline, but I just don't see much of a difference as an end user. I don't dig into them too deeply; I don't write my own packages, and stuff... So to me it's 6 in one hand, half a dozen in the other.

**Nick Nisi:** Yeah, it's the same with me.

**Kevin Ball:** I wonder how much of the hype is just Facebook.

**Jerod Santo:** Yeah, this is a conversation that comes up often; when you have huge tech giants in the open source world, everything they do makes a splash, and everything they release has more weight behind it than the smaller developers' releases... With some of that, you just see the sheer magnitude of their influence, based on who they who they are. Maybe some of that was with Yarn.

There was a lot of frustration specifically around install times with npm, when Yarn first was announced. It was way faster at first, so that was solving a core problem.

**Kevin Ball:** It is interesting to look at the way big corporations do open source. Facebook seems to primarily focus on supporting their own open source projects, and they've released a ton to the community, which is phenomenal. But if you contrast to, for example, Google or Apple, both of those companies do release (and sometimes push) their own open source projects, but they also put a ton of time and energy in staffing, supporting other ecosystem projects.

**Jerod Santo:** Some real-time follow-up on that Mixmax article and why they switched back to npm (or are switching back). This is a summary coming in from the chat room: "The speed was getting way better in npm, and the lockfiles, like you mentioned, Kball. They didn't like some of the long-standing bugs and breaking bugs in Yarn, and then they said that Yarn has shipped very bad regressions, which made us afraid of upgrading." So that's one company's situation, but I think we're definitely seeing where Yarn has had a huge net impact by positive influence on the Node and npm communities, and it's made npm better, I think to the point that "Pick which one you like more, and you're gonna be in pretty good shape."

**Kevin Ball:** Yeah, I've seen that type of phenomenon play out in open source projects a few different times, and it's great when that works... Because it's great for users to have one de facto place to go, so they don't have to worry about the decision or figuring things out. But if you only have the one and there's never any challengers, then they don't have any incentive to innovate.

We saw it in the Ruby community, we saw it with Merb and Rails, and then they eventually merged, with Rails taking on all the best things of Merb... We saw it with io.js back in the earlier days of Node; that really pushed Node to change and open up their processes and do all sorts of other fun stuff. Nick highlights Vim and Neovim in the chat... \[laughter\] Which I still haven't gotten myself onto Neovim yet, even despite our conversation the other week... But I'll get there. And now - yeah, with Yarn and npm. If it turns out that we no longer need Yarn because all the benefits it added get pulled in by npm - great!

**Jerod Santo:** It makes me think of Atom and VS Code... Maybe we should save that for later - talk about competing projects that are now co-owned.

**Nick Nisi:** \[28:01\] VS Atom.

**Kevin Ball:** Well, if you could combine the speed and crispness of VS Code with the programmability of Atom...

**Jerod Santo:** The best of both worlds. Or you could combine the worst of both worlds, and end somewhere completely different, so we'll have to see what happens.

**Kevin Ball:** Or they might stay separate. Who knows...?

**Jerod Santo:** Another interesting thing with the package managers - just thinking about npm as the "source of truth" for the package management in the system... One thing that I found interesting was more people are using Google to find packages than previous years. And of course, most people are still using npmjs.org as a first stop search, but... 32% are using Google/other search engine - which is basically just Google (or DuckDuckGo for us hard cores out there) and that's up from the previous year, so I'm wondering if we can correlate that to anything, or if there's some insights about the community that that --

**Kevin Ball:** How much of that is just "Google search is amazing, and everyone else who tries to do search usually sucks"? I mean, I use Google to find people on Twitter, I use Google to find people on LinkedIn... Those products have their own searches, but they just suck compared to Google.

**Jerod Santo:** My workflow has never been "go to npmjs.org and search." It's never been that way. It's always been go to Google, search, find it on GitHub, and then click through or find the npm install, or whatever the package name is there on GitHub, and then I just never even use npmjs.org in that particular workflow... And I do end up there from time to time, but I've never started there.

So 38% start their search at npmjs.org, and 32% start on Google or some other search engine, which is up from last year... And then it goes down to like 1% for GitHubs and Stack Overflows.

**Nick Nisi:** I'm the exact same way. I will google for it, and if the GitHub repository isn't obvious in the Google search results, but the npm page is, I'll click through to npm, just so I can click on the GitHub link in there.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Yeah, me too, actually.

**Nick Nisi:** There's something about the UI in npm; I just don't like it.... So I read everything (the readmes etc.) on GitHub.

**Jerod Santo:** You're actively avoiding it, if you can.

**Nick Nisi:** Yeah...

**Kevin Ball:** I 100% agree. The npm UI is a pain in the butt. The nice thing about Google is it will get you to GitHub, but it will also often get you to their documentation page, which if you're trying to decide how to use something, or you're looking for a package that you are already using, documentation is probably what you're looking for.

**Nick Nisi:** Yeah. And in the same vein, I'll click through to GitHub, and then if there's a link in the top two documentation pages, I'm gonna click that... So I'm just clicking all around.

**Jerod Santo:** You're just clicking like crazy. Crazy clicker.

**Nick Nisi:** Before we leave the package managers section - I also thought that it was cool that they highlighted Node package managers like nvm as places where people install Node from. Nvm was pretty high up on that list, and I was curious how you all do that.

**Kevin Ball:** I use nvm.

**Jerod Santo:** Brew install Node.

**Kevin Ball:** Seriously?

**Nick Nisi:** I do both.

**Jerod Santo:** Seriously?

**Kevin Ball:** Seriously?

**Nick Nisi:** Yeah. \[laughs\]

**Jerod Santo:** Seriously. \[laughter\] "No, I'm just kidding." No, I'm serious.

**Nick Nisi:** I brew install it to have like a system Node, and then I have nvm to have individual nodes that I might use for different projects that I'm working on. The problem is I don't like nvm because it is so slow, and it slows my terminal down so much, unless I don't load it every time I open a new terminal, in which case it doesn't really give me much value... So I'm kind of just stuck in this slow world right now. But it's interesting, and this was also kind of the reason why I don't globally installed packages - it's just because I don't ever really know which version of Node I might have at my reach.

**Jerod Santo:** So for the uninitiated, what does nvm offer that a built-in, like a Homebrew or some other operating system package manager, like Depackage, or RPMs don't offer?

**Nick Nisi:** \[32:10\] Just comparing it to Homebrew, it just gives me an easy way to install different versions of Node. I have the latest version from Homebrew installed - 10.something - and then the project that I'm working on right now for my day job is using the LTS version, so I can just say "nvm use -- lts" and use that, or I can put an `.nvmrc` in that project, and it will just automatically switch my terminal over to that version when I CD into that directory.

**Jerod Santo:** It makes sense. So I think we're seeing it as a distinction between a casual Node user like myself, and like a daily driver, power user like yourself. Anybody who's going to be actively, day-to-day developing a specific app or a set of apps inside the Node environment version management and switching easily is definitely a nice-to-have, or maybe a must-have.

**Kevin Ball:** Yeah, if you've got projects of different ages... One of the beauties and the pain points of the Node ecosystem is how fast it changes... And having the ability to stay on the version of Node that you know is working with this project, while moving to the latest and greatest and the hot new thing with your new project - I couldn't trade it for the world. Anytime you have long-lived projects, you need some sort of version manager.

**Jerod Santo:** What about this point about the availability of multiple registries? Maybe I'm going down a rat hole here - so this is back to the survey here on package managers... They asked about the importance of multiple registries, and it was very unimportant; the average is like one in three people think that having multiple registries would be important. Strangely, it was way less in the EMEA - I can't remember what that stands for... E is for Europe. What's the M? Help me out, guys... I'm blanking. Europe, Middle East and Africa. So I knew what it generally meant, but I couldn't remember what the M stood for... Europe, Middle East and Africa, and then it's like super high in Latin America - 55% (almost an outlier, perhaps) of people who think that having multiple registries is important.

And when I started to think about this, I thought it in terms of like "Is this meaning we shouldn't all rely solely on npm as a registry now, not as a client?", but then the example in there says "React vs React Native or CLI" So maybe I'm just asking for some help interpreting this; I'm wondering if you guys understood it better than I did.

**Kevin Ball:** I'm really not sure... I mean, is this multiple public registries? Because one direction to go down is "Do you need private registries?" Do you need the ability to set up internal registries for your company's packages, or things like that?

**Jerod Santo:** Right. Which then that would make some more sense that it would be so different based on where you are in the world... Maybe Latin America needs to have even localized registries - either private, or even just geographically... Like, maybe they just don't have the connection to npm's points of presence to get the packages they need, or maybe they have social or legal policy in those countries that require private... But that's why I got thrown for such a loop when it says "React vs React Native or CLI" kind of in parentheses, as kind of giving you context.

**Kevin Ball:** That doesn't make any sense to me.

**Nick Nisi:** That was one of Ryan Dahl's regrets, to foreshadow a little bit, potentially...

**Jerod Santo:** What was that?

**Nick Nisi:** Centralized and privately-controlled repositories.

**Jerod Santo:** Yeah. Well, it's definitely a single point of failure, right?

**Nick Nisi:** Yup.

**Jerod Santo:** A privately-owned single point of failure.

**Kevin Ball:** \[35:49\] Thinking about the way that other registries are run... The one that I'm somewhat familiar with is the Ruby gems registry, and that is kind of supported via donation, in a lot of ways. There's an organization, both Ruby together, and I think Ruby Gems may have its own organization -- but it's essentially supported by people donating to this thing... And that has resulted in very slow rates of change, and politics over how that money is being used, and yadda-yadda-yadda... Whereas in this case, we're actually seeing pretty rapid rates of change in the registry; the stuff they're doing with security is really interesting, and they're doing all these extensive things at the registry level... But a company owns it, right?

**Jerod Santo:** Yeah, it's kind of like -- it goes back kind of to a BDFL idea, right? And really, the desire to decentralize is in the case that the BDFL loses its B, right? The benevolence goes away.

**Kevin Ball:** Right.

**Jerod Santo:** In the case of npm, they've been doing -- from my perspective, and just echoing what you've said there, Kball, they've been doing a very good job, and they are innovating and they are continuing to work on the product, and we've seen what some competition could do with Yarn and the npm client, for instance... But it's always in the back of your mind, like "What if Microsoft buys npm? Haha." What if something changes dramatically? What if it wasn't Microsoft and it was Oracle? Or some company that hasn't been such a good steward of open source...? And then we all ask ourselves "Why did we all put all our eggs in that one private company's basket?" Because the benevolence has gone.

**Kevin Ball:** Yes. Oh, Oracle... That's a good way to kill anything. \[laughter\]

**Jerod Santo:** And I killed the conversation. No... Worth pointing out that there's different package managers that are managing these things differently, and they have their own troubles with federation (that's hard), with donation models (that's hard)... This is not an easy thing to solve. Maybe like in Go's situation, they're like "We just don't have one, so figure it out amongst yourselves", or mostly they're using GitHub URLs, which also becomes a single point of failure. In fact, interestingly, there's been debate now inside of the Go community how to handle that, and they're starting to introduce this idea of vanity imports... Just like a vanity domain that you would use to redirect. So instead of having the full GitHub URL in your import statement, you have like JerdodsGoPackage.com or whatever it is, and inside there you point that to the source URL. And then I guess the go get command can go ahead and parse that out and follow the redirect.

So in the case that you want to move without having everybody go change their hardcoded import in their code, you just change the redirect on a domain that you own, away from host A to host B, and you're golden. So they're starting to think about those kinds of things because of recent events.

**Kevin Ball:** Is there anyone - any community or system that has done this really effectively? I'm thinking about Linux, and there it's actually -- lots of different companies run their own registries, right? You're gonna put your sources, you're gonna point at canonical servers if you're on Ubuntu, but you might also point at a couple extra things, and pull stuff down. That's a model for multiple registries, in some ways; some private-controlled, some public. I'm glad that's not my job.

**Jerod Santo:** \[39:36\] \[laughs\] I was gonna say, if you're into this kind of conversations specifically with people who are knee-deep in it - I'll give a quick shout-out to our friends at Manifest.fm, which is a podcast hosted by Andrew Nesbitt and Alex Pounds - it's all about package management, and they talk to people who are in this space, trying to figure these things out, people from these different ecosystems, and learn the ins and the outs... Andrew is the creator of libraries.io, which is all about packages, as well. I know that show is a little bit on a hiatus - they've had a hard time scheduling it - but there's a bunch of good episodes in the back catalog, so go give that a listen if this is something that interests you and our particular knowledge here (the three of us) is not doing you justice... If you wanna hear some people who have answers to these questions. We're good at asking questions around here, we don't always have the answers.

**Break:** \[40:37\]

**Kevin Ball:** You all have been talking a lot about this Deno talk, and I haven't seen it, so I'm just gonna sort of let you do the talking, and the prod you based on your notes that you gave me... Talking about change - there's this project that was just started by one of the founders of Node, Ryan... What's his last name?

**Jerod Santo:** Dahl.

**Kevin Ball:** Ryan Dahl... Called Deno. I guess it's supposed to replace Node, or to go alongside...? I don't know, you guys talk about it, you've seen the talk. What is this thing Deno?

**Jerod Santo:** Yes, so it's not like a drop-in replacement for Node by any means. He doesn't have any desire for backwards compatibility with Node, because then he said he would have to just build in all of the regrets... So kind of the context for this is Ryan Dahl gave a 30-minute talk at JSConf -- or was is JSConf EU? It was just recently.

**Nick Nisi:** Yeah.

**Jerod Santo:** It's called his ten regrets with Node, or something along those lines. I can't remember the exact title. I thought it was his top 10 things he regrets about Node, but then I only could count like seven or eight of them... So maybe he just misnamed it, but regardless--

**Nick Nisi:** That's funny, I actually separately counted out all of the regrets, and I only got to seven as well, but with five sub-points for one of them.

**Jerod Santo:** Oh yeah, he went deep on a few of them. It's a great talk, it's about 30 minutes... It was incredibly candid and truthful, and most of these things are the things that he regrets having designed, and they're very technical, and they're specific aspects of the Node technology. It was interesting - Mikeal Rogers, of course, one of our panelists, made the point on Twitter than Node blew up so fast and adoption was so fast that a lot of these things Ryan could have fixed had it not gotten adopted so quickly; he could have fixed them either before 1.4, or in a timed fashion, but he just wasn't able to.

\[44:13\] So that was kind of the context of that talk, and that's when he revealed that he's been working on this new project - it's written in Go, although he may rewrite it in Rust - called Deno. It is a V8 runtime for TypeScript, which of course makes it also one for JavaScript... And it's built to be secure and nice and modern, and all these other things. And really, what it is - I think it's a little bit of a retry, a fresh start, based on things that he learned building Node the first time, and the regrets that he has, trying to not have those regrets this time around. So that's the project. It's garnered much interest...

**Kevin Ball:** Yeah, I saw it blew up on Hacker News, and everybody flooded it with comments and issues, and he had to shut it down and be like "Hey guys, this is early..."

**Jerod Santo:** Yeah, exactly. He said it was too much noise and he closed it down, or something... Because he's only been working on it for a month, and he calls it Alpha Software, in fact; he did say he might rewrite the entire thing in Rust, or something like that... So it's very much not ready for production use, but it gets people excited; that's kind of the situation. Do we wanna do a quick rundown of some of his regrets, or...?

**Kevin Ball:** Yeah, let's do it.

**Jerod Santo:** Alright, so the first one is that he didn't embrace Promises early on. In fact, it's more like he removed Promises -- he started with Promises... Or he didn't start with Promises, but they were introduced early. Nick, I feel like you have more history than I do, so feel free to hop in or fix, or whatever... But he introduced Promises, and then he took them out. Does that sound right, Nick?

**Nick Nisi:** Yeah, so they were in for a bit, and then they were out in favor of the callback syntax for like the built-in libraries in Node... Kind of that defaults -- provide a callback in the first argument \[unintelligible 00:46:09.26\] and then you can continue on from there. I wonder if that would have been an issue if JavaScript hadn't advanced so much more recently. If async/await had not been a thing that came to the language, would he have a regret about Promises - that's something I was wondering.

**Kevin Ball:** I mean, even just shifting -- I haven't done too much with async/await yet, but even just shifting from callbacks to Promises in my own code... It makes it so much easier to think about asynchronicity and particularly about composing asynchronicity across different modules and functions.

One of the cool things about Node is how free-flowing and composable it is with all these modules. If it were completely Promise-based - that would have been amazing.

**Nick Nisi:** Yeah, definitely.

**Jerod Santo:** Yeah, and his supposition I believe was if Promises had stayed in, then we would have gotten to the async/await future much faster than we have, and specifically in the standard library and in the core. So he regrets having done that.

The next one is package.json. Of course, we're missing a lot of the context, so if this is interesting, definitely go watch it, because he'll explain himself much better than I will... But the gist there is that it's too noisy, there's a bunch of stuff that doesn't matter... It makes the system interpret like a series of files where you really don't care about that, and... He regrets package.json. Pretty much wholesale.

**Nick Nisi:** Yeah, there was really a lot around this. This is the one that I had counted a lot of sub-bullet points in there... Just the whole bit of complexity that it adds to the Node ecosystem, especially as we're trying to push forward with a built-in module system, for example; there's a lot of baggage that Node brings to this, and a lot of complexity with the algorithms for figuring out what code to actually import... And just the overall complexity of having to have this registry, this JSON file describe your project.

**Jerod Santo:** \[48:23\] The next one was the build system - like I said, it does get very internal and very technical. He says the entire build system is a mess, because they use this project called GYP, which was used I believe by Chromium, or some larger project that he respected at the time. Then they switched away to a newer thing called GN (this is higher than my pay grade right here), but Node got stuck with GYP, and apparently GYP is bad, or the build system is a \[unintelligible 00:48:58.06\] machine type of a thing, according to Ryan--

**Kevin Ball:** Oh, it was a Google project originally, it looks like...

**Jerod Santo:** Yeah, and I think Node is the only surviving large user of this particular project, and it's very, very hard to change, if not impossible to change at this point. There's that one... And one more user-facing when it's security, and of course, this is the stuff he's really trying to fix with this new project, as the new project requires explicit and specific passing of data between V8 and the runtime, whereas with Node, especially with like binding to system calls and stuff, it's just like "Anything goes." Node modules -- do you have anything to add on security, Nick?

**Nick Nisi:** No. I was just gonna say that that's -- yeah, he really called out, like, there's no need for something like ESLint to need to have the ability to write to your file system, unless it's doing like a fix... But it'd be way more trusting if you knew that modules couldn't actually affect your computer in any way, but right now they can.

**Kevin Ball:** That's really interesting, actually... So would you have to explicitly enable modules to do writing, if they were going to? Or how would that --

**Nick Nisi:** Yeah... He actually answers this with Deno. Deno is locked down and sandboxed by default, and if you want to allow the code to be able to write to the file system or to make network requests, you have to pass flags to it when you run it; so you'd say like deno--net to give it network access, and --write to give it write access.

**Kevin Ball:** But could you do that on a module-by-module basis?

**Nick Nisi:** That's a good question.

**Kevin Ball:** Because I may know that I wanna access the net and I may know that I wanna write files, but I might only wanna do that through a couple different modules that I trust.

**Jerod Santo:** Good question. These are probably concerns he's still hashing out, with Deno specifically. So he things Node modules was a big mistake, specifically all of the relative installing into your local folders. He thinks it should work more like browsers; speaking of Go - he referenced Go as a good example, the way that they're doing it, where it's more webby. You just give it a URL or a relative path that's like directly -- like, if you're linking in your own specific modules. That's the way that I think Deno is going to work, where it's either an absolute path to a URL somewhere, or a relative path that's specifically inside your local directory, and those are the only two options.

**Nick Nisi:** That's something that would also be heavily cached too, so it relies heavily on semver to ensure that you're only ever getting the one version, and if you need to change that, you either change the number, or you have to pass a flag to tell it to redownload the cached file.

**Kevin Ball:** Oh, the end of half-a-gig directories every time I install a new Node project...

**Jerod Santo:** \[51:56\] Next up, Require module - the specific syntax where you can leave off the extension; it doesn't have to be require\_.js; you just say "require\_" Some of this -- you have to go watch the talk; some if it is him sharing a little bit of wisdom at an older age. It's kind of like "When I was younger, I thought that this was a good idea, because it was -- you don't need the extension." But he's like "Just write the extension in there! It's just a .js", or you can even say .ts. Apparently, the Require system has all sorts of logic traversing the file system, looking at file names, blah-blah-blah, trying to basically infer what you mean when you don't explicitly state the extension. All that code could disappear if we all just typed ".js" at the end of those requires. He would do that differently.

**Kevin Ball:** If you look at the course of developers learning, there's this whole thing of like you start off and you're doing everything explicitly, because you don't know how to do anything else. Then you're like "Oh, metaprogramming, and inferring things! This stuff is magic! I'm gonna do everything meta!" and then you get to a point where you're like "You know, explicit is good. I like explicit."

**Jerod Santo:** Yeah. See, I'm at a point where I want just enough magic, and "just enough" is completely by me and changes on a day-to-day basis." \[laughs\] That's just enough... But not too much. So yeah, I guess leaving the .js out for him was just a little bit too much magic.

And then the other thing, which seems minor but required a complicated implementation was running the index.js pattern, which he calls "too cute", and he thought it was just being cute because you have index.html, so if you have index.js, we could just pick that up and execute it automatically. Apparently, that also requires a whole bunch of heavy-lifting underneath the hood, that could just be completely removed if you were just explicit about which file you wanna execute.

**Kevin Ball:** That pattern seemed so simple, but it took me a really long time to pick up on that one when I started doing Node... Because it's nonsensical.

**Nick Nisi:** This is kind of adding another layer to it, but I chuckle when I see this in the TypeScript documentation and how they handle module resolution, because on top of the Node resolution that they have for finding an index inside of a directory, or inside of Node modules, or inside your global Node modules, or all the way up the chain, they also have to look for .ts files, .tsx files, d.ts files... So when you import just a module in Typescript, there's up to 21 different places that the system has to check for for that module, which is just insane.

**Jerod Santo:** Wow.

**Kevin Ball:** And we wonder why booting apps is slow.

**Jerod Santo:** So there's your high-level list. It's definitely worth watching, definitely worth looking into and watching his project on this new project. I would say do Ryan a favor and watch quietly, as he's getting hit up -- and I was even just looking at his issues list, and just the other day there were like six new issues that day... And they were all just comments or questions, or just random stuff, and I'm thinking he's like "Why did I even announce this thing yet?" Wait till you've got something a little more mature to announce I guess might be what he will learn this time around... But now it's out there.

It's an interesting occurrence, obviously. It's not like the kind of thing that is going to wholesale replace Node in 2018 or even in 2019. There's something to be said about learning from the "sins of the past" and using modern tools and techniques to apply similar ideas in a way that ultimately may be much more forward-looking.

**Kevin Ball:** \[55:52\] It's interesting to think about - since it is gonna provide a JavaScript runtime - how straightforward would it be to port a Node application over into that... But given the way that we do \[unintelligible 00:56:06.12\] and all that other stuff, it might be tricky. \[laughter\] I wonder if you end up with the equivalent of a Webpack or some other thing that is translating -- it goes through and parses all your JavaScript in Nodeland and then rewrites it and produces for Denoland.

**Nick Nisi:** In the little bit of code that he had, kind of showing an example, he was using Unpkg to have a tiny, tiny bit of compatibility with Node... But you'd run into all the same problems; if that module is using the Node Requires, then you probably can't use it. So it'll be interesting, but it's cool to see Unpkg has a potential solution for that in the future, if something like this takes off.

**Jerod Santo:** I'm not familiar with Unpkg. Can you tell me about it real quick?

**Nick Nisi:** Oh, sorry. Unpkg- I think it's by Michael Jackson, and it's just a CDN for Node modules. It will take any Node module - you can just go to Unpkg.com/axios and then it will have all of the files in there, so then you can just have a URL to the exact .js file that you want to run from within that package, and use that.

It's very useful for using Node modules from a CDN, using that as a CDN for Node modules, and also, my experience with it is with CodeSandbox; that's where all of the modules that you import from npm in CodeSandbox - it's just making calls to Unpkg to go get those and then bring those in and run them in its little runtime.

**Kevin Ball:** Quickly before we wrap up, since we're talking about change - do you wanna do quick reactions to the big news of the week?

**Nick Nisi:** Yeah, what did Apple release?

**Jerod Santo:** \[laughs\] Yeah, exactly.

**Kevin Ball:** Well, we're low on time, but I feel like we've hinted it enough that it would be a travesty if we didn't talk about it a little bit. What are your gut reactions to Microsoft acquiring GitHub?

**Nick Nisi:** I'm excited. I think that it's going to be a good thing. I think that it's going to be something that helps push GitHub forward and hopefully doesn't create a schism in the community.

**Jerod Santo:** My first reaction was shock, and now the shock has worn off. Adam and I did about 40 minutes on Spotlight, so we'll link that in the notes here if you want more thoughts... But in brief, I'm coming around to the idea, and I think everything's gonna be okay. How about you, Kball?

**Kevin Ball:** You know, I'm kind of in a wait and see place. Microsoft has been a much better supporter and steward of open source over the last few years than they were previously, and they've really kind of opened up both what they're doing, but also their support of community efforts, and they have not killed recent acquisitions. LinkedIn seems to be thriving... I don't remember what some of their other acquisitions have been, but they're not an Oracle, right? They're not gonna shut this thing down and just try to lock out the technology or use patent wars, or anything like that. They seem to be acting more and more as a good steward... So I don't see any major reasons for concern because of that.

I do suspect that we'll start to see lots of kind of hints towards "Oh, you're using GitHub? Well, naturally, you can hook things up from GitHub everytime you push, deploy it in Azure", and do other things that kind of nudge you towards their other products... But so long as they maintain open and they keep an open API so that it's not impossible to have the same thing set up so it deploys it over to AWS or to Google Cloud or wherever you might be deploying, then I don't see a huge problem with that.

**Jerod Santo:** \[59:58\] Peter Bright wrote a great piece in Ars Technica the other day... I guess it was maybe Monday or Tuesday of this week. The headline is "Everyone complaining about Microsoft buying GitHub needs to offer a better solution" and his subtitle is "GitHub needed a buyer, and there aren't too many options." We'll link that one in the show notes as well if you wanna read a little more about that.

The fact of the matter is - and this was a surprise, to a certain degree, especially with how much revenue GitHub was doing; 200 million a year sounds pretty good, keeps this boat floating over here... But a much smaller boat, I guess.

**Kevin Ball:** Yeah, I'll take that.

**Jerod Santo:** Yeah, exactly. But they needed a buyer. He actually runs down the list of potential acquirers or potential solutions for GitHub, including IPO, and including going and getting more VC, and he makes a pretty compelling case that this is actually the best option in a sea of other options. That was a good reading; I'll just submit that to everybody if you're still -- I mean, definitely wait and see, definitely remain skeptical; wherever you're at, that's fine. But I think that had this not happened, we probably would have ended up with potentially a much worse scenario.

**Nick Nisi:** Yeah. And I think that you and Adam covered really well in that Spotlight episode, but Git is very portable, so if something happens in the future, it's pretty darn easy to move somewhere else.

**Jerod Santo:** Unless you have all these GitHub URLs hardcoded into your code. \[laughs\]

**Kevin Ball:** And recall, npm package.json, there are shortcuts that go to GitHub URLs. In Nodeland... I don't know how many people are using that for -- they're probably not using it for modules that are being published, but there are plenty of projects that are end projects, not intended to be reused or included, that are referencing GitHub URLs.

**Jerod Santo:** Yeah, it kind of goes back to my overlaying sentiment, something I say all the time - the web is like the world, it's property... And you don't wanna rent, you wanna own. So own your own space, and then link out from there; own something you control - your own domain, your own Git repos, whatever it happens to be... Own that to the best that you can, and link to these other places. Because ultimately, these service providers can and will change, and if you don't own what you're doing, then they own it.

**Kevin Ball:** And somebody like Oracle can buy it.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** So that is it for today's JS Party. Thank you for joining us for this deep dive into the Node.js user study, the future of Node, and Deno (what have you) and a little bit about this week's big news.

Tune in live on Thursday -- I'll say noon, because you all actually call it noon... Noon Central 10 PM, Pacific time, join us, and we'll see you next time.
