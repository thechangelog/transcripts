**Kevin Ball:** Hello, party people! Welcome to JS Party, where we are throwing a party about JavaScript every week. I'm Kball, I'm your host for this episode, and I am joined by two about-to-have-new-baby expectant fathers... Jerod, how are you doing?

**Jerod Santo:** Yay, hello! Doing well, how are you?

**Kevin Ball:** I'm doing great. So I think you're gonna have the first addition, because you were saying it's any day now.

**Jerod Santo:** Yeah, we're on baby watch. Any-day mode, which means if I drop this call suddenly and leave you all, you know exactly why.

**Kevin Ball:** And then we have Nick Nisi... You've got another couple months, yes?

**Nick Nisi:** Yeah, we're at 31 weeks, but my daughter was born at 33, so we're pretty much in the any-day now, if I go by that scale.

**Kevin Ball:** Okay. And remind me - will that be your second or your third?

**Nick Nisi:** Second.

**Kevin Ball:** Second, okay. Because I was thinking... We were talking about how Jerod's got enough to fill the basketball team...

**Jerod Santo:** That's right.

**Kevin Ball:** ...between the three of us, we're getting awfully close to a soccer team..

**Jerod Santo:** Okay... Well, you just need to move to Nebraska and we can actually put that team on the field there, Kball.

**Kevin Ball:** There we go... Alright, so talking JavaScript... \[laughter\]

**Jerod Santo:** Change the subject...

**Kevin Ball:** Yeah, change the subject. I don't wanna get out to Nebraska; I don't have any family there.

**Jerod Santo:** That's true.

**Kevin Ball:** That's the only complaint about Nebraska, seriously.

**Jerod Santo:** There you go.

**Nick Nisi:** Honestly, it's not for everyone.

**Jerod Santo:** That's our new motto, right?

**Kevin Ball:** \[laughs\] Nebraska. It's not for everyone.

**Nick Nisi:** Yeah, sadly, it is.

**Jerod Santo:** Yeah, some genius in our government decided that that should be Nebraska's new motto, so... It actually is.

**Kevin Ball:** You're not kidding... Wow.

**Jerod Santo:** We're not kidding, unfortunately, although I don't tell anybody that... But Nick seems to be -- are you cool with it, Nick?

**Nick Nisi:** No... But there's no point in keeping it a secret.

**Kevin Ball:** Alright. I don't think I've ever actually been to Nebraska, so I do need to make it out there at least once for like Nebraska JS, or something like that.

**Jerod Santo:** Sounds right.

**Kevin Ball:** If that can transition us over to actual JavaScript, for JS Party... We actually had a really busy week this last week. A lot of stuff going on in the JavaScript world in the last week or two. The first thing that we're gonna talk about is the event-stream hack. Now, if you haven't heard about it, you should look it up. Nick or Jerod, do you wanna break down what happened there?

**Nick Nisi:** \[00:03:49.11\] There is a very popular package that hasn't been maintained in a couple of years, called event-stream. It gets about almost two million downloads a day, but it hasn't been updated in a while, because the original maintainer doesn't use it anymore, and really isn't under any obligation to continue working on it if he doesn't want to... So he handed over control of it to someone who asked \[unintelligible 00:04:16.22\] asked if they could take over the project and work on it... And they did, and they made a few innocuous commits that improved things, didn't really do much, and then they added another library called -- and I'm losing it... Was it file-stream?

**Jerod Santo:** Flatmap-stream.

**Nick Nisi:** Flatmap-stream, yeah. They added that for about a week, and then removed that, and then added the functionality that flatmap-stream provided on its own... But the problem was that flatmap-stream had only one committer, and was very new, only very few downloads, so it was a very suspect package, that would go in and -- it had a whole lot of encrypted stuff in there to try and subvert code checkers and things... But it would look for another module called Copay, and if you had that running, Copay-Dash, if you had that also installed (it's a Bitcoin wallet platform), it would go in and try and steal all of your Bitcoins. If you didn't have that, it would just suddenly catch an error and do nothing.

For the majority of people this didn't really do anything, but if it was installed next to Copay-Dash, then it would try and steal Bitcoins. Is that kind of the main gist of it?

**Jerod Santo:** I think that covers it pretty well.

**Kevin Ball:** High-level, a code injection via malicious package. There was some pretty interesting stuff about how they obfuscated it; the malicious code was never visible in GitHub, but was pushed up in the published Npm package. They've eventually tracked it down... I was reading something from Npm indicating the actual target was the Copay release process. So it wasn't that if you were running this in one of your projects and doing things it was necessarily doing things, but when the Copay project did a build script, they were trying to get this injected in there, so then it would harvest account details, or whatever. And Copay has confirmed that this malicious code was deployed on a set of versions from 5.0.2 to 5.1.0.

So as far as we know, it doesn't impact anyone who's not using a build version of Copay, or building it themselves doing that. If you're using something else and you happen to have Copay installed, but it's a version outside of that, you're probably fine... But yeah, kind of an interesting challenge, and something to think about in terms of both the JavaScript world, but also just package management in general and how we deal with this stuff.

**Jerod Santo:** To me, the most interesting aspect of this is the fact that it was a social engineering vector that was used successfully in order to accomplish -- well, we don't know if the actual specific target was compromised, but we know that the malware was deployed successfully to everybody who would be downloading that version of event-stream from Npm... And we haven't really seen this before, at least not ever caught in the wild, where the method of getting your malicious code is basically asking for permission from a maintainer who is no longer maintaining, and finding a popular library that's still used by millions, but is -- I wouldn't say it's in disrepair, but it's just in maintenance mode, or even non-maintenance mode, and just offering to take it over... And that was 100% effective in this case.

\[00:08:10.18\] Historically, looking at hacks, a lot of these things are most often just asking people for their passwords or for access to the thing, versus going in against our technical firewalls and constraints that we put in in order to protect these things... So to me, that was the most interesting thing about this.

Dominic Tarr was the maintainer of the event-stream package, the original creator of it, and he was the maintainer of it until he handed over the keys to this malicious user who on GitHub was @right9ctrl. If you go back and read through all the issues and whatnot - very interesting; I definitely think that's worth a read, even now... But Dominic basically wasn't maintaining it, and @right9ctrl asked for permissions, and that's what they got.

That's interesting, especially since we have historically this idea of -- we have copycat in the case of murders, you have people who will do the same thing when they see it successful, or they see it \[unintelligible 00:09:16.28\] I think a lot of these mass shootings, a lot of them are copycats saying "Oh, that person had their moment in the sun, so I'm gonna do the same thing." Here we have a successful -- kind of a new method of infiltration via offering to maintain or trying to find their way into the maintenance of a popular package, and I wonder if the copycats are gonna come out now after this has happened.

**Nick Nisi:** Yeah, and I was wondering if this seemed like a copycat of an article on Hacker Noon probably a few months ago, probably earlier this year, called "I'm harvesting credit card numbers and passwords from your site. Here's how", and it detailed a lot of the same tricks that were used here, but at the end it said "This was just a joke", but you can't tell, because this could totally happen, and it does seem like this is something that is happening.

**Jerod Santo:** That's interesting, potentially, if that's the case. An interesting tidbit... So we did have Dominic on the Changelog, we interviewed him yesterday, which by the time this ships will be a few days ago; it'll come out next week, but we've got kind of the inside scoop, and what really exacerbated this issue in terms of bringing it up into the light was the fact that @right9ctrl asked for permission to basically take over maintenance of event-stream, or offered that to Dominic back in September. Dominic gave @right9ctrl control of the keys, and then a few weeks later Dominic had this -- I don't know, he called it kind of a cathartic moment of purging his access to all his old repos. So you have to understand that Dominic Tarr, the creator of event-stream, is a prolific open source contributor.

He has like 600 source repos on GitHub, he has at this point about 400 Npm modules/packages on Npm that he creates and deploys, and previous to that September moment, he had like 700... And a lot of those aren't maintained; they're just old things that he's moved on from... Event-stream he created about seven years ago, and has even created a few rewrites of event-stream which he thinks are better ideas, different ways of doing it... So he doesn't use event-stream, he doesn't tell people to use event-stream, he has newer ideas of how you should handle this kind of functionality... And back in September, after he had given @right9ctrl the access, he went and basically deep-sixed all of his access to these Npm modules that he didn't wanna maintain, so he couldn't even log in to Npm to yank the package.

\[00:11:55.19\] If you look at the GitHub issue, which we'll have on our show notes, the fella who found this all was called FallingSnow, Ayrton Sparling is his real name - computer science major at CSUF... He opened the issue about nine days ago, having found the malicious flatmap-stream, and was asking "What's going on here?", and he kind of laid out his findings... And at that time Dominic comes in later and says "Note: I no longer have publish rights to this module on Npm." So it probably could have been something that was handled quickly and quietly in terms of remediation; Dominic could have just yanked that module and then made an announcement after the fact, but he had removed his own access from all these Npm modules, so he had no control whatsoever, and so it had to kind of bubble up through the community... Ultimately, Npm Inc. went ahead and did the yanking.

**Nick Nisi:** Yeah, and according to their blog, they have ownership of it now... At least for now.

**Kevin Ball:** This is interesting on a number of dimensions. Some folks brought up - this is more of an open source software and package management problem than a JavaScript problem, but I feel like it is exacerbated in the JavaScript community because we have this tendency to use so many packages, and so many small packages.

**Jerod Santo:** Right.

**Kevin Ball:** I remember in the Ruby world there was a movement towards like "Kill your dependencies. Reduce the number of additional dependencies you have, and if you're publishing a package, try your best to not import lots of other ones", because of this problem - the more dependencies you have, the more steps there are where things can be broken, things can get injected that you don't expect, all these other pieces.

In the JavaScript world, I install a new Vue app from the Vue CLI, and it plugs in a thousand different packages. That's a very large surface area...

**Jerod Santo:** Which makes it more difficult for you to monitor, vet, keep upgraded etc, as the end user of those packages. So I do think it's exacerbated... I mean, the more dependencies you have, and the more transitive dependencies you have, the harder it is for you to stay on top of these things. And as the end user of the software, as the developer who pulls these dependencies in, you basically own all of that code. You are responsible for -- the buck stops with you, with regards to the ramifications of problems. No one's gonna say "Oh, Jerod, don't worry about that hack that happened to us, because you didn't write that line of code. Somebody else did." In business scenarios, the buck stops where the person who made that decision to pull it in decided.

JavaScript is not the only community that pulls in lots of dependencies, but I do think just the sheer number of packages, and the small functionality in each one, which is kind of the UNIX philosophy, so I get it... But it definitely makes it a huge surface area to attack.

**Nick Nisi:** Do you think that library authors should maybe be more cognizant of that? I had never heard of event-stream, and I had never heard of left-pad from back in the past, but because every big library tended to be using left-pad in that case, or event-stream (two million downloads), it now does fall on me. So do you think that they should be more wary about adding in dependencies, and maybe just implementing their own solutions to things?

**Jerod Santo:** I think so, but it's hard to tell them that, you know...? It's hard to make those decisions on other's behalf. I don't know their context... By the way, event-stream is used by Electron, and a few other very large projects, even though it was a seven year old library that the author no longer recommends using, so... I think everybody should be more aware, and I think events like these bring \[unintelligible 00:15:45.18\] decision-making to the consciousness of the developer community, and I think that probably will have positive ramifications.

\[00:15:56.07\] I know that in my life there's been a bit of a process with regards to dependencies where I moved from very dependency-heavy, or always look for a solution online first, always find a third-party package first, mostly because I didn't have the skills to produce what I was trying to... So in that case you're just trying to get something done, so "I'm gonna pull in somebody else's code because I actually don't have the skills to write that code." And then as I gain skills and experience over time, moving away from doing that, to being more critical with which dependencies I pull in, and really weighing the ROI of "Is this worth all of the baggage that it brings with it?"

So you kind of have these two extremes - you have the "Not invented here" syndrome, which basically says "I'm gonna write every single line of code, and if I didn't invent it, I'm not gonna use it", and we see where that can be problematic and bad... And then on the other hand you have what turns in dependency hell, which is like I'm basically just gluing together everybody else's code to get a job done; I don't have very much code of my own.

With most things, I think the prudent decisions are somewhere in the middle, but it's difficult to tell other people that as well, as you're just learning it for yourself.

**Kevin Ball:** I think as a community we're starting to talk a lot more about these ramifications of the proliferation of open source, and I think we've gone from a world where open source was this cool thing that happened on the edges, to something that is embedded deeply into essentially every software base in the world, and our institutions are totally catching up. We have no idea -- this type of stuff is happening all the time, with left-pad, and this... And I think that's why Npm is introducing things like Npm Audit. We probably need to figure out how to better encourage maintainers when they have put something onto maintenance or no maintenance mode, to indicate that in a way that Npm can then pick up, so that for example when Electron does a build, Npm Audit could say "Hey, not only are you running these packages which have been found to be insecure, but you're running these packages which have been found to be unmaintained", or some other way of letting people know that.

I think we also need some way to transfer those packages into organizations or foundations that can support them over time, because the individual maintainers -- depending on unpaid maintainers to do all this doesn't scale, and when we've got critical financial... I mean, in this case -- I have mixed feelings on Bitcoin, but this was essentially an attack on a financial institution, in a lot ways, right?

**Jerod Santo:** For certain definitions of the word "institution". \[laughs\]

**Kevin Ball:** Right. But you have critical financial software depending on code released by a maintainer who clearly writes tons and tons of code and kind of transiently publishes things... Which is cool. That's a really cool thing, but it's not the type of thing that a financial institution understands or is able to deal with.

**Jerod Santo:** Right. And the transitive dependency issue is, I think, the biggest one. You don't even know who wrote that thing, because you didn't pull that dependency in. As Nick said, maybe you pulled in Vue, and Vue pulled it in. Or maybe Vue pulled in a library that pulled it in.

**Kevin Ball:** Or Vue pulled in a library, that pulled in a library, that pulled in a library, that pulled in a library that pulled it in... Because it goes forever.

**Jerod Santo:** Exactly. It's packages all the way down. I think definitely as open source developers and as maintainers and people that care about these things really from the creation side, and less the consumption side. By the way, also, more insight on Dominic - he's prolific, and he's also a hobbyist in many ways; he likes writing code for fun, he throws it up there... He does open source because it's fun, and he says "This wasn't fun anymore, and there's zero value for me to maintain it over time", so the system in that regard broke, because somebody who has stake in the game needs to either maintain that, or pay somebody to maintain that, which wasn't happening, which is why he so freely gave over the access when somebody offered.

\[00:20:12.21\] But yeah, we need best practices, we need better tooling around how do you transfer maintenance, how do you mark something as abandoned or deprecated or finished, and then how do you pass the torch on in a way that doesn't subvert other people's expectations?

It makes me think of it, in the real world we have restaurants, and a restaurant can be poorly managed, and in goes into disrepair and nobody goes there anymore because the food is bad, or whatever. And then somebody else buys that restaurant and then they put up a big sign that says "Now under new management." That's an indicator to say, "Okay, things are gonna change." But when your dependencies go under new management, there's no sign, there's no notice... How do I know that a malicious act -- or even just somebody who I don't trust... Maybe I trusted Dominic Tarr with event-stream, but he's passed the torches on to somebody else, and that's somebody I don't know; they don't have a history, I don't trust them necessarily, and how do I be notified that things have changed underneath the seams...?

**Break:** \[00:21:21.07\]

**Kevin Ball:** Alright, coming back to things - we could talk about event-stream and implications for open source forever, but that's gonna be something that's talked about on the Changelog, on all sorts of different things. This is gonna be an ongoing conversation for a while, so let's move on to something else that happened in the JavaScript world just now, which was the State of JavaScript Survey for 2018 was released. It was released, it had some interesting and controversial data, and then there started to be a little bit of backlash against it, and a number of different parts of the community talking about how perhaps the practices used and the transparency of how they were used was not so good.

I think we should talk both about what is the survey, what did it say, and then maybe talk a little bit about some of that backlash, and kind of assess what is the quality of this survey and should we be believing these various surveys that are published? Anybody wanna start with what is the survey?

**Nick Nisi:** So it was a survey that -- I don't know how I found out about it; probably from Twitter... I think this is their third or fourth year doing it, and they got over 20,000 responses. They just asked questions about things like demographics, pay, connections, the types of JavaScript that you use, frameworks, and what you're interested in, testing... Things like that. Then they laid all of that out. But they asked the questions in a way of like naming something, and then you can respond with "I've heard of it, but I'm not interested in it", "I've heard of it, but I would like to learn it", "I've used it and I would use again" or "I've used it and I would not use again." It gave some pretty interesting results, and especially when being able to compare to the previous years.

**Kevin Ball:** Do you wanna highlight some of those interesting notes?

**Nick Nisi:** \[00:23:57.26\] Well, probably the most interesting to me was the TypeScript one. They asked about that and its popularity, and it has grown over the years... I think it said 46% have used it and would use it again, or are currently using it. Yes, 46,5%. So that is a huge number, and that does align with what Laurie Voss has said in his "Npm and the future of JavaScript" talk. So that's very interesting, to see that much adoption of TypeScript so quickly.

**Kevin Ball:** Absolutely. Another one of the things that I saw a lot of discussion about was it contained some pretty negative results about AngularJS, or Angular broadly... Which is actually kind of interesting combined with TypeScript, because they were one of the first to really embrace TypeScript deeply... But there was more people saying they've used Angular and would not use it again, than those who are using it and would use it again. Especially when you compare to some of the other frameworks, Vue or React, it's pretty negative in terms of response.

**Nick Nisi:** I think the negative responses were over 60%, if you combine those two.

**Kevin Ball:** Yeah, so between "Heard of it, not interested" and "Used it, would not use again" it's over 60%. That obviously resulted in some folks kind of starting to pick at this and ask questions... And I think particularly because those numbers are pretty different from numbers that showed up in another 2018 survey, which was the Stack Overflow survey. Stack Overflow also did a survey about frameworks, libraries and tools. Obviously, it's a different community; they've got some JavaScript folks, some not JavaScript folks, but they found that Angular was actually used by far more people than React or some of these others, so that's pretty different... So the question starts to become "What is different? How do we figure out--" If you've got such disparate surveys or disparate results coming from two different surveys, what's going on here?

**Jerod Santo:** What is going on here, Kevin?

**Kevin Ball:** I don't know, but I did find-- \[laughter\]

**Jerod Santo:** I thought you were about to do a big reveal.

**Kevin Ball:** No, I don't know... Well, part of why I don't know is in particular the State of JavaScript Survey doesn't publish anything about how they collected their data. There's nothing on there. There's nothing about like "We did this." My intuition based on what I saw is they tweeted stuff and got stuff retweeted, and people found it through Twitter... But there's no info on how they collected it, there's no info on necessarily how to do questions, things like that.

When I started looking into this and asking questions, somebody pointed me to a talk by Melanie Sumner at EmberConf. She was talking about surveys and reproduction of data, and she kind of walked through this process of how do you think about a survey... I kind of jotted down notes from that; I do recommend going and seeing it, and there'll be a link in the show notes, because she does a way better job than I'm going to... But I think it's worth walking through the process that she describes out there.

\[00:27:28.22\] She highlights that when you look at a survey like this, there's a big frontline number. "50% of people who do X use Y." In this case, maybe it's "64% of people use React and would use it again" and "60% of people are not interested in using Angular." These are big headline numbers, and they make a lot of splash, but there's something that's being kind of left out there, which is, well, 50% of the people who responded to this survey who do front-end development use React", or 60%, or whatever the numbers are. "That responded to this survey" leads to some additional questions, like "How many people responded to the survey? How representative are they of the broader population?" and to answer those questions, you need to know how the data was collected.

So 20,000 people is pretty good. That seems like a lot of people. How many people do we think do JavaScript?

**Jerod Santo:** More. Millions?

**Kevin Ball:** Npm has some numbers on this. Npm did their own survey, but yeah, probably millions. So this is a pretty small percentage. That's not necessarily bad, right? You can have representative with small sample sizes; that's what polling is. All this political polling that we've just gotten over - that's all based on the idea that you can create representative samples... But all those polls do a bunch of work to adjust for the demographics of the population. They take a sample, and then they say "Okay, we've got these answers, and we've mapped the people who answered it to these buckets, and we know this about the population of people broadly, so we're going to adjust those numbers based on..." - there's a lot of science that goes into that. So when you've got a survey like this, you kind of wanna know "How did those people that collected -- how did they find them and how did they relate them to the actual population of people who do JavaScript?" and there's nothing. They don't say anything about that.

Stack Overflow at least published "It's people who are members of our site, and we've got all this demographic info, and here's how you split out--", and there is demographics stuff here, but if we look at the demographics, it doesn't feel very likely to be representative.

**Jerod Santo:** Yeah, the demographics that they show are split out by countries. They say "This year we've reached developers in 153 countries. The U.S. dominates with 24%, but Germany and Australia are both well represented with over 5% respondents each." So that's really the geographic breakdown. The gender breakdown is -- this is showing who took the survey, but it doesn't really show how they went about selecting or targeting certain audiences to take the survey... So yes, you might have some confirmation bias if the main source of the survey is the people who put the surveys on Twitters, and the retweets that those are gonna reach - it's going to be highly correlated with the groups of people that it actually ends up reaching.

Bringing the Bitcoin conversation back, it reminds me of a poll I saw on Twitter a few days ago... I think it was -- not Rand Paul... Ron Paul, the libertarian political figure in America - he was asking millennials what kind of currency they care about, and it was like the dollar, Bitcoin, bonds etc, what they would value, and Bitcoin was really highly represented... And it's like, yeah, that makes a lot of sense, because libertarians tend to value Bitcoin more than the general population, so that's not a very scientific poll. Of course, it's just a Twitter poll. So that potentially could be the case here. What we don't know - there's not printed how they went about reaching these people beyond what we can assume that they reached outside of their influence zone or friend zone.

**Kevin Ball:** It is interesting to think about -- like, alright, the three authors who said they are doing this, and they're probably gonna tweet about it, and they say this thing about the team, and here's the people - Sacha, Raphaël, Michael. "Be sure to check out my React GraphQL JavaScript library; Raphaël's React Data Visualization library, and this JavaScript library directory." It sounds a little bit like the audience of folks who are likely to have found this survey might have been particularly React-focused, which might result in particularly positive reviews for React, and it looks like maybe particularly negative reviews for Angular.

**Jerod Santo:** Yeah.

**Nick Nisi:** \[00:32:17.13\] And that's the thing, Angular is also presumably a very popular framework in the enterprise, and maybe a lot of enterprise developers aren't on Twitter, or weren't somehow otherwise targeted by this and didn't get to see this beforehand.

**Kevin Ball:** And the thing is we don't know. We have no way to test because it's not published how they found the folks, how they formalized for it... We can sort of look at other results that are happening in the industry, like the Stack Overflow study, which has its own issues, but sort of ask, like, "Are these results being reproduced in others, or not?" We can look at who did the study, and what are their motivations likely to be? Are they likely to be motivated -- or maybe not motivated, assuming best will, but are they likely to be reaching out to folks who have particular slants or opinions?

All of this - if it's just for fun, who cares? But this is being published as like "This is the state of JavaScript." People are gonna be making decisions on this, and it's a little spotty, and probably quite biased.

**Jerod Santo:** Well, even just in the fact that it's created by three JavaScript developers, and not statisticians or professional survey takers who understand -- I wouldn't know how to put out a good survey, and putting out a good survey is very difficult to do, even if you know the means and mechanisms... So they probably were disadvantaged in the first place.

And let me just say - the name of it, "The State of JavaScript", of course, gives it a lot of credence... But also, to their credit, the website is spectacular, and very well made, and enjoyable, and it makes the thing have more clout because of how well it's done. It's been done for multiple years, 20,000 respondents... It seems very legit, and that's because they did a very good job of putting it together, so credit to all three on that, but especially Sacha Greif, who I think did the design. I just think it's very well done.

**Kevin Ball:** Yeah, there's a lot to be said for this, and I don't wanna necessarily say -- I don't think the folks doing the survey are trying to be malicious; however, they're also pretty clearly not following best practices for surveys, and then trying to sell this thing as representing the entire JavaScript community.

**Jerod Santo:** I'm over here trying to figure out exactly how many JavaScript developers are there in the word. I'm still stuck. I've been trying to find it, and my googles are failing me.

**Nick Nisi:** Well, on the topic of Angular, I wonder if -- the biggest dissatisfaction or the most disliked aspect of Angular is that it's too bloated and complex, and I wonder if that's because it is a more full-featured framework, and therefore has a larger learning curve than something like React, that is primarily focused on the view...

**Kevin Ball:** Yeah, it's a good question. Well, Vue kind of strikes a middle ground there. Vue bakes in more things than React does, and Vue is still highlighting pretty well there... I don't know. I mean, my impression of Angular is it is much more complex. It certainly has a much bigger learning curve. Whether that's a positive or a negative varies on what your requirements are. Complex requirements often need complex solutions.

\[00:35:38.14\] I have also noticed that sometimes the React community -- and I'm now going under the assumption that this survey... They call it The State of JavaScript, but "The State of JavaScript Opinions in the React Community" is my current assumption of what this is. They tend to have very strong opinions that are not necessarily aligned with the rest of the JavaScript world. The CSS and JS nexus is all in the React world... And there's a lot of good things that have come out of the React world, but there's a lot of insular, very weird for the frontend stuff that comes out of the React world. That may be influencing all of these results. That particular community tends to be sort of off doing its own thing, in a lot of ways.

**Nick Nisi:** And it does really seem like React is taking over, in a lot of ways, but this is a good reminder that there is more to JavaScript than React.

**Break:** \[00:36:46.29\]

**Kevin Ball:** Alright, coming back - we can't just \[unintelligible 00:37:32.11\] about vulnerabilities and survey quality and all of that all day; we've gotta give you something fun to work with, so we're gonna do a segment that we do every now and then, called Pro Tips. We talk about some of our tips that we have, whether they're code-related, JavaScript-related, or just life-related, that make our lives better, and that might make your life better. Let's start -- actually, call out to Jerod. Jerod, what are your pro tips you wanna share?

**Jerod Santo:** Very good. Well, I just have one pro tip, and it's kind of a mushy one, it's not like a 100% "Go do this, and you will be successful." It's really about being intentional with testing, and we could do shows and shows, and there could be entire podcasts about testing and the ins and outs, and how much to do it, and how little to do it, what's worth it, what's not... In my career I've spent a lot of time trying to figure that out, as I've been told everything; you know, you have the full test coverage people, the "TDD or die" types, and then you find other people who have never written a test case in their life, so they're basically manually testing their code instead of having any sort of automated testing...

So I guess the pro tip for me is to be intentional with the tests that you are writing, and to really be critical and think through the process of which tests are worth it and which tests are not worth it. There's a good way of doing that, which -- I tend to think things in economic terms more and more lately, and using thoughts like ROI, like "What's the return on my investment of doing this test, versus not doing this?" and then analyzing whether or not I should write that test based on what I determine is the ROI, and is it worth it to write the test.

There was a great article which I've put on Changelog News recently called "Lean Testing or Why Unit Tests are Worse Than You Think", written by Eugen Kiss, and we'll link to that in the show notes. A great write-up about how he thinks of testing, and how he advocates for an economic perspective towards testing, and that leads him to deciding that of the three major test types, which are the very low-level unit tests, which are isolated and single-use and focused on a specific bit of code... Versus integration tests, which are multi-module or multi-class, or they're testing the seams in-between code, how they integrate together, and then finally acceptance tests, which is the highest level, driving the browser for instance, and making sure that the website actually works the way that you designed it.

\[00:40:09.27\] Each of those have a different ROI. Some are worth it in certain cases, some are not worth it in other cases, and he goes through his decision-making on that. So my pro tip would be to think about these things, and read that article and decide for yourself when a test is actually worth the effort put into it. He does have a takeaway, if you wanna be lazy and just follow Eugen's advice - he says "If you desire clear, albeit unnuanced instructions...", which there's a pro tip right there, "clear and unnuanced", he says "...here's what you should do - use a typed language, focus on integration and end-to-end tests. Use unit tests only where they make sense, as in pure algorithmic code, with complex corner cases." And then he finishes with "Be economic and be lean." I think that's pretty good advice that I follow, sometimes, but definitely worth thinking about. I will link up that article for you to read it... And yeah, think about your tests, y'all.

**Kevin Ball:** There's kind of an interesting thing related to that, which has to do with thinking about the phase of project you're in. Tests tend to -- much like actually a conversation that we had... I think we published it in an interview with @chantastic, Michael Chan, talking about how DRY code tends to sort of ossify and be harder to change... Deep tests and lots of unit tests tend to make it harder to change your code. So when you're in a place where code is changing very rapidly - maybe requirements are fluid, or you're still figuring out the domain - too much testing can slow you down a lot and have a very low ROI. Then as your codebase matures and that area of the code tends to be more constant, higher levels of testing can actually be really helpful, because then that lets you make sure that you don't unintentionally introduce changes now that this is supposed to be mostly static. So I think that dimension of ROI is gonna vary by code and project maturity as you go along.

**Jerod Santo:** I believe that's absolutely the case, and a very good point. Another thing he points out, specifically with unit tests... The thing about unit tests is they're often the easiest to write, and they should be, and many TDD-ists and other people who are unit test pros will claim that making your code unit-testable will necessarily improve its quality, will absolutely make it higher quality code because the test is the first user for that code; so if the test is difficult to write and run, then the code is poorly factored. I find that to be the case sometimes, so again, it's one of those "it depends" types of things... But one of the things that Eugene says is that many arguments and some empirical evidence in favor of that claim exist, and so on the other side of it, he says that unit tests will ossify, or make it more brittle, or hard-structured; the internal structure of the code, which is what you don't really want... But speaking of what you said there, Kball, especially in the early stages, when you're molding it, you're changing it, it's really churning, having tests against the internal structure, especially poorly-written ones, will actually have a negative ROI, they'll slow you down... But later on they'll speed you up.

So it's all very wishy-washy, which is why really the advice for me is to just consider these things and be critical of the way you're going about building software, instead of just doing it the way you've always done it, or the way somebody else tells you to.

**Kevin Ball:** Sweet. Alright, Nick, how about you? Pro tips?

**Nick Nisi:** \[00:43:47.14\] Yeah. This one will be a little more \[unintelligible 00:43:51.24\] I guess... But this is a really cool tip that I got from Cory Frang, when I went to a Boston JS meetup years ago, but it's something that I use quite a lot... It's a Git alias. Well, two of them, actually. One is called pr, and the other one is called pr-clean. I'll add a link to the show notes for it, but you can basically add this to your git config, and then you can just say "git pr 74", and that will pull down the code that is associated with that pull request on GitHub, and you'll have it there locally to test and play with. Then you can look at it, test it, run it, commit to it, and it'll go back up to that branch... Or you can just throw it away, and that's what the pr-clean command does; it just goes through each of those branches that start with pr-whatever number, and it will just clean all of those up, so you don't have them lingering around forever... But it's just a really cool, handy tip for dealing with pull requests and being able to run and test the code locally.

**Kevin Ball:** Does it work with non-GitHub remotes, like GitLab or BitBucket?

**Nick Nisi:** I don't know...

**Jerod Santo:** He cracks open the code as he tries to answer that...

**Nick Nisi:** \[laughs\] I am looking at the code, and I don't know how BitBucket or GitLab reference that. If it's like ref-pull requests-whatever, then...

**Jerod Santo:** Yeah, it depends. Well, GitLab calls them merge requests, so I'm guessing it's different there, so you might have to modify that function in order for it to work for different styles of URLs.

**Nick Nisi:** Yeah. But you can also specify -- if you normally have your origin set to your fork, you can specify an upstream branch or an upstream repo to pull from instead, because your PRs won't be against your fork of it.

**Jerod Santo:** Oh, that's cool, too. Yeah, I need this in my life, because I never know how to do those things, and I end up going to the pull request box on GitHub, and it's like "Here's how to do this from the command line", and then I go click through and I copy-paste commands, even after all these years... Just because I do it just enough to not memorize it, but not often enough to actually memorize it, so... Good pro tip. I'm gonna use these.

**Kevin Ball:** Yeah, I'm gonna look into it. It looks like it will not work out of the box with other remotes, but GitHub is so much the common practice that this will be good for a lot of folks. I just happen to be on two client projects that one is on BitBucket and one is on GitLab.

**Nick Nisi:** Real-time feedback - I put this in my git config probably in 2013, so it's been there for a while, and I haven't looked at the actual gist that Cory Frang posted with this, and it has since been updated with another command, spr, that is specifically for BitBucket (or Stash)... So yeah, it does change it a little bit, and you can probably deduce from how those differ how you could add support for GitLab or any of the other ones.

**Kevin Ball:** Cool.

**Jerod Santo:** Definitely click through to that gist and read the comments, because people are taking this and they're modifying it for certain scenarios, and tweaking it to their heart's desire, so... Read through those; there's probably good stuff in there for sure. What's your pro tip, Kball?

**Kevin Ball:** My pro tip is actually something that I know I learned from The Debugging Show. I think it was Nick actually who did it, but it was recently incredibly useful for me, so I wanna bring it up again. This is that in your Chrome Debugger you can insert a breakpoint that does a console log. So if you are debugging minified scripts, where you can't actually modify them, you can actually still insert console logs and get information. This was relevant for me recently, because I was tracking down a bug that only showed up intermittently and only showed up in minified scripts, and it was in an area where -- the backtrace was coming from something that didn't have enough context for me to know... Like, I didn't have enough from the backtrace, but that function got called thousands of times, and only sometimes intermittently would fail... So I wanted to know what was it being called with the times that it would fail, but inserting a breakpoint wouldn't get me there, and I couldn't insert a console log because it was on minified stuff, and if I changed -- anyway, it was a mess.

\[00:48:10.17\] But this tip - that once again, I think Nick was the one who highlighted it on that debugging show - saved it for me, because I was able to insert a breakpoint that did a console log; it used a conditional breakpoint mechanism, which basically lets you evaluate some JavaScript, and if it returns true, then it will do a breakpoint, but if you put a console log in there, it's always gonna return falsy, but it will just log it out. So I would get this log of what was the function being called with, and then the last item before the error would be the one that caused the problem... So that let me track down this intermittent issue that had been happening for months and we'd never been able to dig it up, and that was awesome.

So I highly recommend conditional breakpoints with a console log in there as a way to track down issues in minified code.

**Nick Nisi:** That's great.

**Jerod Santo:** Was that yours, Nick?

**Nick Nisi:** It was. \[laughter\]

**Jerod Santo:** Awesome. It's a virtuous circle around here.

**Kevin Ball:** Alright, so that's three sets of pro tips. We're a little short on this last bit, but we went long on those first ones, because we could talk about those forever... So I think, unless you all have other stuff that you wanna bring up, we can wrap up this episode, and beyond for the next week.

**Jerod Santo:** Let's do it. One last stat from The State of JS... Hey, over 80% of people agree that JavaScript is moving in the right direction.

**Kevin Ball:** Over 80%...

**Jerod Santo:** A little warm, fuzzy... Disclaimer, those may not be representative, but still... It's all good. \[laughter\]

**Nick Nisi:** It's representative of my thinking, so... I'll agree with it.

**Jerod Santo:** You're only 80% on that?

**Nick Nisi:** \[laughs\] I'm not 100%. There's always room for improvement.

**Kevin Ball:** That is one of the interesting things too, when we look at these types of surveys... It's like, how much are they just playing into our confirmation bias? Anything that confirms our priors, what we believed before, we're like "Yeah! That survey, man! That shows it!"

**Jerod Santo:** Oh no, I opened up the can of worms again... I'm sorry. I was just trying to end on a positive note, but... \[laughter\[

**Kevin Ball:** I think 100% of JS Party panelists believe JavaScript is moving in the right direction.

**Jerod Santo:** As for JS Party, we're not so sure. You tell us.

**Kevin Ball:** You tell us. Alright, that's it for this week. Thank you for joining us at JS Party, a party about JavaScript every week. We'll see you next time. Take care, y'all!

**Break:** \[00:50:36.12\]

**Jerod Santo:** I didn't realize they're actually giving out awards here, too. Did you see that, on The State of JS, they're giving out awards?

**Nick Nisi:** Yeah, I was gonna bring that up. I thought it was interesting... Reason was the...

**Jerod Santo:** Reason...

**Nick Nisi:** I can't remember which one, but they had \[unintelligible 00:52:07.09\] in there.

**Jerod Santo:** Prediction Award. Up and coming tech that might take over...

**Kevin Ball:** I didn't wanna bring it back up, but I was looking at in one of the breaks, and you can see from the responses on things - Redux and other things - how React-focused this audience was... And I think Reason is also very much aligned with the React audience. It's another Facebook tech, it's another -- they should just call this "The state of the React ecosystem", or something.

**Jerod Santo:** Yeah, because if you look at the Most Used, React, 14,400 out of 20,000 people... That's like 75%. If you have 20,000 survey takers and almost 15,000 of them use React, that's 75% of your audience using React, which is a large number... A large number. And then 11,000 using Angular.

**Nick Nisi:** There were 28 that said they use Dojo, so... That's pretty awesome.

**Jerod Santo:** Ohhh-weeeeeeee...!

**Nick Nisi:** \[laughs\]

**Jerod Santo:** How many of those were you?

**Nick Nisi:** Just one... \[laughter\]

**Jerod Santo:** Now, I didn't see the trends... I saw they had previous years, but did they actually stack them up on the same question?

**Kevin Ball:** I saw for the frameworks they show it...

**Jerod Santo:** Okay, so if the results are biased - fine; I mean, not "fine", but you know what I mean... But if they're biased consistently, across the years, then it's actually at least more useful in terms of the trends.

**Kevin Ball:** But we have no way of knowing, because they don't publish how they got the results.

**Jerod Santo:** Well, they got the results the same way, they tweeted about it; the people who answered, answered.

**Kevin Ball:** Maybe.

**Jerod Santo:** I think Nick just likes the survey because TypeScript is so well-placed...

**Nick Nisi:** I don't need this for confirmation... \[laughter\]

**Kevin Ball:** So that piece of data is actually well reproduced by other surveys...

**Nick Nisi:** Yeah.

**Kevin Ball:** ...which is different with some of this other data, right? The Angular popularity is poorly reproduced by at least one other survey that I looked at, but the TypeScript data is very well reproduced.

**Jerod Santo:** Alright, let's work on naming this show while we're all here. We had a nice, fast turnaround here, so what should we call this one?

**Kevin Ball:** Hm...

**Jerod Santo:** The toughest ones are the segmented, multi-topic shows, because, well, it's easy if there's one big thing talked about... But when there's three, and one's a recurring segment, sometimes you've gotta go based off of something somebody said that was funny... The one where Jay joined Slack.

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Hey, Jay.

**Jerod Santo:** Thanks for joining Slack, man. Thanks for listening. \[laughter\] That's a pretty funny title, actually.
