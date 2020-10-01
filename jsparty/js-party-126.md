**Jerod Santo:** Welcome back, everyone. Maybe you're out there, you're doing some dishes, maybe you're taking a socially-distanced walk, maybe you're doing some push-ups... Come on, ten more! You can do this! Maybe you're listening live; that means you're awesome... Whatever it is, we're here for you, we're here for a party.

I'm Jerod, and I'm joined by an awesome cast of characters. Divya's here. What's up, Divya?

**Divya:** Hey, hey!

**Jerod Santo:** And we've got Nick Nisi in the house. What's up, Nick?

**Nick Nisi:** Hoy-hoy!

**Jerod Santo:** Hold on, I'm supposed to do this... "Ahoy-hoy!" \[laughter\] \[unintelligible 00:02:41.06\] soundboard... And b0neskull is here. What's up, Chris?

**Christopher Hiller:** Hello! How are you doing?

**Jerod Santo:** Welcome back, Chris! It's been a minute.

**Christopher Hiller:** Yeah, I've been busy with some... Children. \[laughter\]

**Nick Nisi:** I can't imagine why.

**Jerod Santo:** It sounds rough... Maybe we should skip it, get right into the news. We have a three-segment show for you all today. We're gonna do Story of the Week, which is all about news, links, things that have been going on in and around the JavaScript and web community. Then we're gonna follow that up with some work from home tips, and some unpopular opinions... And finally, we're gonna give shout-outs to projects, and people, and things that we love.

So let's hop right into the news... And it seems like Node 14 - possibly the biggest news that's happened as of late. Chris, do you wanna us the skinny on what's going on with Node?

**Christopher Hiller:** Yeah, so Node 14 was released, I don't even know how long ago. Not very long ago at all. So there are a few things that you might wanna check out. ECMAScript module support has been in Node, it's in Node 12, it's behind the flag... But also now in Node 14 it's not behind a flag. However, it's important to know that the ECMAScript module support is still considered experimental, so that means it might break; the API might break. It doesn't mean you can't use it, it doesn't mean you shouldn't try it out; it doesn't mean that we expect it to be full of bugs, it just means the API might change... And it might change before the next major.

\[00:04:25.23\] I don't have any visibility into -- you know, I'm not on the modules team, I don't know how they feel about it, but they were confident enough to drop the requirement for the flag. And I think you don't get a warning anymore either; I'm not sure exactly, I can't recall... But you might not even get a warning when you use it. But it's important to realize that it's still considered an experimental API.

So yeah, that is cool, and I think they wanna push people to try it out a little bit more, and give it a go. There's still time to collect feedback, and implement feedback from the community who's trying these things out, and say "Oh, well this isn't working very well for whatever", and maybe it was a thing they didn't see... So that's what this time it's for; it's still experimental, and it can be changed if it needs to.

The other thing - let's see... Diagnostic reports. In Node.js diagnostic reports are also an experimental API, but now in 14 they're no longer experimental. So you can use diagnostic reports in Node 14 and you don't have to provide a flag, you're not gonna get a warning.

You can configure Node to do this. There's an API, there's command line options, and in certain situations - say maybe there's an uncaught exception and the process crashes. Well, what you can do is configure Node to output a diagnostic report file. That's a JSON blob full of information, and it's really good for post-mortem debugging, especially... Because if your process is already dead, how are you gonna debug it, right? But if you use diagnostic reports - well, there you go; there's how you can debug it, because it gives you this great snapshot of the state of the system when it died. So yeah, diagnostic reports are now stable.

I don't know too much about -- I haven't worked with internationalization, but I do know that Node now in 14 ships with full ICU support. I don't know what that means, except I think it just means if you need maybe -- does anybody know? ...before I try to answer this, does anybody know, ICU?

**Jerod Santo:** It's an intensive care unit.

**Christopher Hiller:** Maybe there's like a set of languages or something, that it did not support out of the box, and if you wanted support for those, you would have to compile them yourself. But as of 14, I believe the deal is you don't have to do that anymore, because it comes with all of them... And yes, that increases the package size a little bit, if you're worried about that. So that increases the size of the binary, or what have you.

Another cool thing - and I actually didn't know about this before it landed - is called async local storage. This is a thing that many, many people have tried to do, and none of these have really stuck. If you've worked in Angular 2, there's this thing called zones; I don't really know how zones work, but it's kind of like attaching metadata to an item in an async queue, or an item in the event loop. And there's like a context, and you can actually do things like inspect, like "Hey, when an async task is launched, then do this thing." That's considered like an event, or something. I don't know how zones work. As I said, there's lots of different implementations...

The original one in Node was Domain, which allows you to kind of like trap things at a certain level... But Domain had a lot of problems, so it was deprecated. Some years later async hooks was added to Node, which is another attempt at this sort of thing, but it's very low-level and difficult to use... So now, a couple more years later, async local storage was added. This is more of a high-level API into doing really cool stuff with async tasks, and being able to essentially instrument them or respond in different ways.

\[00:08:23.00\] I think people working for APM companies who are instrumenting Node might be interested in async local storage. It's an experimental API, but it looks cool, and I actually wanna go check it out, because I've wanted something like this for a long time, to be able to detect "Hey, did this code start an async process? Is it possible that this code that I just ran could throw an uncaught exception somewhere else that I might not know about?" So with async local storage - you can learn about that. I assume that's how this works; you could do that with async hooks.

So Node 14 is out, it's the crude release. It's not LTS yet. LTS is still 12. 14 will enter LTS (long-term support) in October 2020.

**Jerod Santo:** What exactly does LTS mean? It means long-term support, but how long is that long-term, and what does that mean?

**Christopher Hiller:** That is a good question.

**Nick Nisi:** I think it's two years.

**Christopher Hiller:** Yeah, two years. Long-term support - it's gonna be in active LTS for a year, so that means 14 will get all the new features, all the new bug fixes, updates and stuff. There's a period of maintenance after that, which I think is the next year. The version will get critical bug fixes and security updates.

In October, when 14 becomes active LTS, Node 12 will be in maintenance LTS, which means it will still get these critical fixes and security fixes. But it's not gonna get new features back-ported, that 14 gets.

**Jerod Santo:** Gotcha. Awesome. Lots of good stuff. Quick question. If you were in Node --version right now on your computer, where does everybody stand? Are we immediate updaters?

**Nick Nisi:** Oh, no...

**Jerod Santo:** You're gonna have to peel my dead body corpse off of this Node version from seven years ago. What do you guys usually do? Do you upgrade right away?

**Christopher Hiller:** I do.

**Divya:** I do as well.

**Christopher Hiller:** I always use the latest one that I can... I don't know, it's just my development box. It's not like I have to worry about -- I test that in CI, but I don't need to worry about deploying the bleeding edge Node, or anything...

**Nick Nisi:** Can I further make this controversial? How do you get your Node...?

**Divya:** Whoa...

**Jerod Santo:** Good question.

**Christopher Hiller:** I use NVM.

**Nick Nisi:** Yeah? It slows down my terminal so much.

**Jerod Santo:** Really? Like on every command, or just when you're using Node, or what?

**Nick Nisi:** Startup of it. Startup goes to 7 seconds plus.

**Jerod Santo:** Why is that? It's adding a bunch of stuff to the path, or...?

**Nick Nisi:** Yeah, it's because I want it to be able to detect .nvmrc's and automatically switch Node versions when I CD into a directory, so that adds a lot... I think that there's flags that you can use to tell it not to do that, and only load NVM when you try and use Node somewhere.

**Jerod Santo:** Gotcha.

**Christopher Hiller:** Yeah, it's slow.

**Jerod Santo:** I'm a `brew install node` kind of guy.

**Nick Nisi:** I've heard that that's not officially supported, and there's problems with that... \[laughter\]

**Jerod Santo:** Well, I'm a problematic kind of guy, apparently... I'm on 13.

**Divya:** It is on their website.

**Nick Nisi:** Is it?

**Divya:** You can just go there and download Node.

**Jerod Santo:** I think so.

**Nick Nisi:** Oh, yeah. Yeah, but then you've gotta go and re-download it for updates versions, and...

**Divya:** Yeah, exactly. You just have to do it for every update.

**Nick Nisi:** But I'm so lazy!

**Jerod Santo:** I can only have one version on my machine at one time, and I guess that's just okay with me. I don't use it for heavy development, I use it for the tooling, and when things that I like rely on it. I don't do active Node backend development, so I don't need to be switching versions very often.

**Nick Nisi:** I use something similar to NVM. I won't say a clone, but it's called FNM, and it's written in ReasonML, and it's quite fast.

**Jerod Santo:** Why did they do that? What was their reasoning?

**Nick Nisi:** Good question. \[laughter\]

**Divya:** To use Reason.

**Jerod Santo:** So that was the reason...

**Nick Nisi:** \[00:12:11.21\] That's the reason.

**Divya:** I mean, I'm often asking myself why people use Reason... I guess that's one reason.

**Jerod Santo:** It is.

**Nick Nisi:** And I installed that from Homebrew, so I guess in a roundabout way I use Homebrew, too.

**Divya:** Nice.

**Jerod Santo:** Alright, so Node 14, NVM upgrade, or brew-install, or just go to the website and click download. We think you'll be happy, and thanks to everybody who puts all their hard work into Node. Definitely, a huge ecosystem and a huge group of open source people getting involved, and we all appreciate the updates.

Let's head over to Divya for some news from the Vue community. What's going on in Vue, Divya?

**Divya:** Yeah, so recently Evan has been doing a bunch of work on -- well, Vue 3 is upcoming, and there's a lot of work that's happening there. Alongside working on Vue 3, Evan--

**Jerod Santo:** Vue 3? Wait a second... Remember when you wanted Vue 3 to come out before the new year?

**Divya:** No, I didn't. I didn't. It was Kball.

**Jerod Santo:** We thought it might happen. That it would ruin our New Year show, because they might release it in the meantime...

**Divya:** Yeah, exactly.

**Jerod Santo:** ...between recording and shipping. It still hasn't happened.

**Divya:** No. So maybe end of Q2? I don't know. We'll see.

**Jerod Santo:** We're getting close. Okay, sorry; I cut you off. Keep going.

**Divya:** So alongside them working on that, I think Evan has been itching to work on something different, as well - probably, maybe; I don't know - so he came up with this new project called Vite, that he released... I almost think it's a side project that he was doing, because he talked about working on it all night, two weeks ago or something like that.

The whole point of Vite is that it's a no-bundler dev server for Vue single-file components. Generally, whenever you deal with any single-page application, you often have a bundling step which takes up -- you know, it can take time, because you have to compile everything... And then the larger your application is and the larger your files are, hot module reloads can take a while, because it's essentially doing a full-page reload... So what this does is it takes the advantage of ES import syntax, so it's serving all your modules directly from the browser, and it does the resolution with the script module syntax. That's pretty cool.

The downside is that it doesn't support legacy browsers at all. The whole point of Vite is purely for working with ES modules and things that are very much edge technology still; they're not fully embraced by the community. And I think the whole point of this is just purely for development purposes. So you would just use this for development.

If this becomes popular, there will be work done to make it shippable as production code, but that is not recommended at the moment, just because there's a lot of things that need to be thought through... But the upside is that because of the fact that you are doing module resolution only for files requested, the HMR is much faster, because you're not bundling the entire application and rerunning it; so it's a bit faster that way.

And then, of course, it's a cool thing to be working on, I think. It's really interesting. It uses native ES imports, which I think now a lot of people do at the moment. There's some things that they added, like --

**Jerod Santo:** It's a growing trend, right?

**Divya:** It's a growing trend, for sure. So it's really cool to see people actually using it in the applications -- well, Evan to be pushing people to be using it... And I think this will help grow adoption overall, because now a lot of people are aware of the possibilities of ESM, and ES imports, and stuff like that. You might use it because of the syntax, if you use various Node packages and so on, but I think this is really cool and interesting to see, especially as kind of a first prototype of what is possible. We'll see where it goes from there... I'm not sure in terms of future of where this is going, but I think the whole point of how this was built was purely as a proof of concept, to see if it was possible, and to optimize for development purposes.

\[00:16:11.04\] Lots of interesting technology... And I think it's also -- I mean, I don't wanna speak for anyone, but it's also kind of a stopgap for anyone who's really excited for Vue and kind of tired because the release date is not anywhere near... \[laughs\] It's like, "Here you go. Here's a really quick thing for you to work on while we continue..."

Vue 3 is pretty much in beta, so you can actually work on it now. It's not behind a flag, or anything like that. So if you really want to use it in production, you can; it's just not officially released.

**Jerod Santo:** Very cool. Well, sort of back to Node land, as we go to Nick - you've got a story that you promised would be pretty interesting... Why don't you tell us about that...?

**Nick Nisi:** Did I? Well, yeah, it's for a total of three hours last Saturday, which would be the 25th of April - there were several broken projects in Node, including Create React App... Because they relied on a very small, one-line function called is-promise.

**Jerod Santo:** Like deja-vu all over again.

**Nick Nisi:** Right? So that's pretty interesting. The interesting takeaways from this are - in 2020, which is the year we are in now, even though time has no meaning anymore...

**Jerod Santo:** The last year on Earth... \[laughter\] Potentially our last year...

**Nick Nisi:** Yes... That we're still reliant on a single-line function to find out if something is a promise... Which - promises have been built into the language since 2015 now. So it seems crazy that there are still projects, including Create React App, which was created 3 years and 9 months ago according to the repo I just cloned - why it's necessary. And I haven't looked into Create React App. Maybe it's being pulled in by some dependency of a dependency, several layers down the chain...

**Jerod Santo:** Right...

**Nick Nisi:** But it is interesting. It's not really -- like, it's just a single-line function, so there's not really much that can break, but the big takeaway here from this for me was I kind of have no idea what's going on in Node anymore... Because it wasn't the code that broke, it was the metadata about the code.

**Jerod Santo:** I was gonna ask, why did it break?

**Nick Nisi:** Yeah, parts of the package.json and the author of it updated the code, so that it could be natively pulled in with ES modules, so you could just import is-promise without having to have the whole transpiler, or -- I can't remember the term for it, but... Being able to pull the CJS module and use it as if it were an ES module.

So he updated that, and there's just a lot of metadata issues that went wrong with that, just because the project had an npmignore, so he assumed that it wouldn't have a files array in package.json... I won't go through all of the changes. You can read the post-mortem for that. But there's just a lot of metadata that I don't know about since the last time I published something on Npm. So it' something to look out for if you're going to be doing that soon.

**Christopher Hiller:** Nick, I wanted to -- people might not understand why is is-promise even a thing... So why do we need is-promise?

**Jerod Santo:** Please tell us.

**Christopher Hiller:** As you said, promises have been in the language since 2015, right?

**Nick Nisi:** Right.

**Christopher Hiller:** But promise implementations have been in the ecosystem since long before that \[00:19:24.04\] and before that queue, if you ever used queue... And others.

**Nick Nisi:** jQuery.Deferred...

**Christopher Hiller:** So if everybody was using native promises, you could use the "instanceof keyword", or something. You could say "instanceof promise", and it would check. But if you're using it - and a lot of packages still do - because Bluebird, for one, has a lot of features, and native promises don't. So if you're using a Bluebird promise, it's not a native promise, so you can't use "instanceof promise" because that won't work. But what you do have -- it is a promise, it works like a promise, it's a duck type promise.

So that's why you need something like is-promise, because you need to be able to look at an object and say "Well, is this a promise-like object?" And if you look at is-promise, the way they do that is they check for a then( ) function, and that's it.

**Nick Nisi:** Yeah.

**Jerod Santo:** \[00:20:19.01\] Wow...

**Christopher Hiller:** If something has a then( ) function, it's a promise...

**Divya:** \[laughs\] Easy...

**Christopher Hiller:** ...and that's about as best we can do in JavaScript, unfortunately.

**Divya:** Wow...

**Jerod Santo:** So I would submit that a better solution than a package called is-promise is some documentation, or a blog post that's the number one hit on your favorite search engines of choice, that says "How do I find out if it's a promise?" And it says "Check for a then( ) function." Wouldn't that route around issues like these? And we could all just check for a then( ) function.

**Christopher Hiller:** So the thing with these one-line packages - and I haven't looked at this one, but I've used plenty of one-line packages before - is that one line is gonna have like 200 lines of tests. They will test the hell out of that one line; and if you write that one line in your code, I can guarantee you're not gonna do that. So that's the benefit. It's a trade-off, of course, because something like this can happen.

**Jerod Santo:** Right. But what if the blog post author also wrote the test suite? It's like "This is actually correct. This is the way you do it."

**Christopher Hiller:** \[laughs\] Yes, you could post the code, and you could post all the tests in a blog post, and then you could go around copy and pasting that. Or you could download that package from Npm, if it was published there.

**Jerod Santo:** For a while, until something goes wrong with that package... So it's a trade-off.

**Christopher Hiller:** Right.

**Jerod Santo:** The problem with my solution is when the best practices change, my code doesn't change. So it becomes the better way of testing it, or that way it breaks; unless I go find that blog post and update my little snippet, I still have my old copy-pasted version... So maybe it breaks down the road.

**Christopher Hiller:** Yeah. A part of the social contract with these one-liners is if there comes a better way to do it, they'll update.

**Jerod Santo:** Right. Or they'll take your site down. Your build at least will break, or whatever happens... So that was just a few hours... So what happened, Nick?

**Nick Nisi:** Yeah, it was a total of three hours. It was pretty quickly resolved through removing versions from Npm that were published, that were bad, and replacing them with newer versions... And I think it fully incremented to a new major version because of it, as it probably should have been.

So yeah, it was only three hours, on a Saturday, so probably not a huge disruption anywhere... But still, something to think about. And now I will just ask for your support, as I go pitch my first TC39 proposal of a \[unintelligible 00:22:39.06\] I mean, it would be nice, but...

**Jerod Santo:** Yeah. You have my full support, Nick.

**Divya:** Yeah. \[laughs\]

**Nick Nisi:** You probably can't account for it to match Bluebird promises, or jQuery.Deferred( )'s or anything like that.

**Jerod Santo:** But can't you just draw a line in the sand and say "Backwards-compatible to this point, and then we don't care about those anymore. If you care about those, here's the is-promise package"? The answer is yes... \[laughter\] Silence means yes.

**Divya:** Silence means yes...

**Jerod Santo:** I win. Alright, let's take a break. We'll be back with some unpopular opinions.

**Break:** \[00:23:19.20\]

**Jerod Santo:** So we've got some work from home tips, we've got some unpopular opinions... We're gonna start on the wholesome, happy isolation side, which is working from home... And this is gonna be Chris and Nick sharing a couple of tips on working from home. Then we're gonna get into the squared circle, the octagon, and share some unpopular opinions from Divya and myself. Let's start with Nick... What have you got, Nick? Working from home, what should we be doing?

**Nick Nisi:** Yeah, I've been working from home for a long time, but something that's new is children at home all the time... So I've been really trying to block out those children when I'm trying to get stuff done. Not in a negative way, just - I don't wanna hear them for a while... Especially when they're getting up for breakfast, and crying about everything. My kids are very young - one and three - so that makes sense.

So I've been trying to find some good music that helps me get in the flow. I've used services like Brain.fm, and just listening to Apple Music and such, but I've found some soundtracks on Apple Music that I really like, and that's the Westworld soundtracks, from the HBO show. Season one and two soundtracks are both great; there's no words in them...

**Jerod Santo:** Nice.

**Nick Nisi:** ...and they're string quartet versions of popular songs, like Black Hole Sun from Soundgarden, "Paint it, black" by The Rolling Stones, and several others. So definitely fun, easy to listen to, easy to zone out to music. It's really good for working from home.

**Jerod Santo:** Awesome. And you don't have to be a watcher of the show to get it.

**Nick Nisi:** Not at all.

**Jerod Santo:** Yeah. If you like Black Hole Sun, you're gonna like this.

**Nick Nisi:** Yeah.

**Jerod Santo:** That's great. I'm definitely gonna check that out. Chris - you've been working from home under adverse circumstances...

**Christopher Hiller:** Yes...

**Jerod Santo:** You've also shared a lot of tips in the past; we have a great blog post from you, "Pro tips for devs working from home."

**Christopher Hiller:** Yeah...

**Jerod Santo:** Anything new for us? Or maybe old.

**Christopher Hiller:** All my good tips are in that blog post, so what I'm gonna share here is really mediocre...

**Jerod Santo:** Okay.

**Christopher Hiller:** So my situation is kind of like Nick's, with two children. They're not as small, but one of them is. At any rate, it's important to be able to tune out somehow. I love active noise-canceling headphones. I also use Brain.fm a lot. They added low-fi, chill, hip-hop beats, or whatever, to their offering... And I've been listening to a lot of that. Brain.fm works for me.

The thing is, I was trying to share an office with my wife, and my wife's job - for her job, she's in meetings literally all day. So it is incredibly hard to come into the same tiny room and get anything done when there's somebody right next you yakking.

What we ended up doing was setting up a temporary desk for her elsewhere in the house, and that's been much better. It's better for her, it's better for me... When you're stuck in a house with a bunch of other people -- and this is what's different; I'm used to working from home, but I'm here by myself. But now that's now how it works anymore. Everybody's here.

You've gotta have a space to yourself, you've gotta have a quiet space. A space where there's nobody else. Unless you and your spouse, or what have you, are working at the same company, on the same team, on the same project, you probably don't wanna be sharing a space.

\[00:27:54.21\] If you're finding yourself in a situation where you're in close quarters and you need to get work done, somebody's gotta go somewhere else. I was about to move into the garage, for example... I don't know. So it's just like -- you really need that, and it's just better for your mental health. This goes for -- it's not just an introvert thing; I don't know how people in open office plans do it, because it seems like it's kind of like that, except it's not like a den... It's not this million voices all at once, it's one loud voice next to you, and it's impossible to tune that out. So you need your own space, that's my tip.

**Jerod Santo:** Very good. Now, we're gonna get to Unpopular Opinions, and I should say that this segment idea is shamelessly stolen by our rival gang over at Go Time - they actually do Unpopular Opinions each and every episode... And I thought, "Hey, we can do that." We can do that, but better. We can do that, but more unpopular, more interesting. Fierier even.

They do it so often they've written a theme song for the segment... And while I was stealing ideas, I was like "Let's just steal the theme song, why don't we?"

**Jingle:** \[00:29:14.22\]

**Nick Nisi:** Amazing.

**Divya:** That's jazzier than our intro.

**Jerod Santo:** Pretty good, right?

**Divya:** \[laughs\]

**Jerod Santo:** So Divya - please, hit us up with an unpopular opinion.

**Divya:** Okay, so I managed to distill my unpopular opinion into one sentence thanks to Jerod... And that is, in my opinion, open source remains incredibly unwelcoming to folks from under-represented minorities. That is my opinion, yes.

**Jerod Santo:** Please expand. \[laughter\]

**Divya:** Okay, it's pretty clear, but I will expand, yes.

**Jerod Santo:** Well, it's clearly stated, but maybe why do you think that, or...

**Divya:** I can give examples... Obviously, when I say things, it's fairly anecdotal, but you can see it across a lot of open source projects. When you see core contributors, they remain of a certain gender and race and ethnicity generally, and you can fill in the gap there... But I think that is indicative of just the fact that a lot of the times open source is not as inclusive as it likes to be.

I'd like to preface it with that I love the concept of open source, and I think there's an ideal of what open source is, which is this concept of meritocracy, and the ability for you to showcase the work you're working on, and have the community support you. That is the ideal. Unfortunately, we live in a reality where your success and basically your exposure is very much determined by your background. If you come from a wealthy background, if you are privileged, if you don't have to worry about money, whatever that may be - that determines how much success you can get and how much work you can put into a community, as well.

I think that something -- it's almost the elephant in the room when it comes to open source, that no one really wants to talk about... And sure, you can even say this is true for life in general. So it's not just tech. But the reason why I bring it up with regards to open source is because I think in tech (and in open source specifically) we tend to talk about it like it is a meritocracy, when that is not the case... And I think that's why I have this criticism, because I think we don't bring light to that.

What this leads to, because people don't talk about that as a problem, there's not a lot of focus on building the community. So we talk about open source, being a community, but oftentimes when people want to put in place measures like code of conducts, or contributing guidelines, there's a lot of backlash that happens... Because there's this strange hypocrisy that happens, where people are like "Open source is about the community, but the code is more important than the community." They're antithetical almost.

\[00:32:14.09\] If you want a good community, code is important, but the community is way more important, I would argue... Because if you build people up, I think it overall leads to a better outcome, because more people are contributing, there are more voices... Obviously, you need a core team of people who make decisions, but I think having RFCs and a way for people to be involved and feel like their voices are heard is very important.

I can give you examples, because I've spoken quite broadly... But I'll bring this back to JavaScript. This happened in 2015 -- again, it's anecdotal, but this is one example, just to solidify this concept. Ashley Williams is huge in the Node community. She's done so much in terms of building a community and making people feel inclusive. She started the Node Inclusivity Working Group in 2014 and 2015, and she got so much backlash from that. There were so many people who opened issues... There was this eggplant thing that people just kept sending her, and it was just horrible, because people didn't see the value that she was bringing or the point she was making, which is that in order for Node to succeed, the community needs to rally behind Node, and you need to be more inclusive of the people who are in Node and contributing to Node.

It's really frustrating, because I see this happen -- it pops up always, where someone is like "Hey, this is really important", and then it's oftentimes unfortunately a woman who does it, where they're like "Community is really important", and then they end up having to firefight. I would say it's almost self-fulfilling sometimes, because people are like "Women don't contribute code", and the thing is women do contribute code; the problem is when they do contribute code, they end up having to spend so much time communicating and firefighting, because no one else wants to do that...

So it just ends up looking like they're not doing anything, because they don't have the time to do anything but to fix the community... So they don't end up contributing the code, so it's self-fulfilling, because they're not writing code, they're fixing the community... And it's really frustrating.

I do this, too. I've contributed code before, I've gotten really frustrated and even burned, because I'll contribute code, and then someone will someone will thumbs-down a PR that I provide, with no feedback. And then I would have to find a way to communicate without putting them on the spot, because I know I'm a new contributor... And there's so much work I have to do, and by the end of it, even though the issue gets resolved and my PR gets submitted, I'm like "I don't really want to do that anymore." And that's really frustrating, and I think it is something that I want the community to improve. It's almost like I'm willing to do the work, but I think as a whole there needs to be buy-in for this to improve. That's my hot take.

**Jerod Santo:** Yeah, there's lots said there. I have some thoughts and some questions. Anecdotally, as well, I guess I would encourage you to maybe persist or push through, because even as a person who's in the privileged demographic, the unmentioned one, I've also had the straight thumbs-down/closed/"not welcome here" PR close, and it's kind of like "Well, this is not a community that I can be a part of." But open source is a very large thing. In fact, it's hard to define it.

JavaScript is a large community, but then you go open source, and there's every kind of community group; people believe this, that, or the other thing, and so... There are some places where I think it's more welcoming than others. So maybe as an optimist I'd say "Well, I see what you're saying..." It's not all that, but a lot of it I'm sure is. That's just a thought.

**Divya:** Yeah.

**Jerod Santo:** My question would be like "What would you love to see change?" Demonstrable steps towards a better world, in this space.

**Divya:** \[00:36:04.18\] I think a first step - and I know the moment this is mentioned, people get really defensive... Like, just as a baseline, having a code of conduct is just one way of setting precedent. And it's not saying "Oh, you're pandering to people's feelings", or whatever; it's just more like setting a baseline for "This is how we interact on this particular project." And then anytime people contribute to it, you're like "I have read the code of conduct and I agree to abide by this." That's just a way of like "I'm agreeing to be a decent human being, and this is how I want to act and how I will interact."

When you set that baseline, then you have something to come back to as a sense of like "Hey, you agreed to this code of conduct, and you reacted in this way that is counter to this code of conduct..." So it becomes more of a "You didn't abide by this contract that we all signed", rather than "I have this feeling and you hurt my feeling." Because the moment you talk about feelings, people tend to question it. They're like "I think that's just you, and your emotions. You're too emotional", and whatever. I think this happens a lot, especially -- I hate doing the gender thing, but oftentimes women get shafted, because they're like "I have these emotions", and people are like "You're always emotional." It's very not useful; it's a not-useful discussion. So when you automatically have that baseline of "This is the code of conduct, this is how we wanna interact..."

**Jerod Santo:** Ground rules.

**Divya:** It's ground rules, and it also helps overall new contributors understand that the owners and the core team of that particular project care about that. Because in general, a lot of projects need new contributors. They want people to be active in the community, use the project that they are pushing, and also make it better.

So if you're trying to grow a community, you need to almost, as leadership of a project, be able to set the baseline of "This is what we expect. Everyone is welcome here." And if you don't wanna do that, whatever; write that in your code of conduct. This is kind of like "We do this, and this is how we act", and whatever. So if I read it, and I disagree with something, I can just choose not to commit to it.

The other thing also... Like, if code of conducts are too much - some people think it's a bit too much, too loosey-goosey, there's also the other thing, which is just having a clear contributing guideline... Just like, what is expected from a basic PR. Because oftentimes there are so many issues to work on, and there's various people working on it, with different backgrounds... But what's the expectation, if you are to contribute? What does your PR have to look like? How does your code have to look like? How do you lint it, how do you test it? And even with docs, how do you want it written? Do you want this particular thing covered, or this, or that?

So this gives you just like... If you don't wanna talk about code of conducts, whatever; that's a separate issue. But a contributing guideline gives you a sense of -- if you insist that code is very important, then maybe set ground rules as to what exactly the code expectation is. And also, not just -- I think it's a two-way street, because when you do open source, we always ask people for contributions... But I think the people who own the project also have to be like "This is what you can expect of us."

So if you're busy, you can say that. Like, "It'll take a couple of weeks for us to get to a PR", because then as a contributor I can be like "Okay, my PR hasn't been looked at in the last week, but the timeline was 2-3 weeks, so it's fine." But if I don't even know what that is, I might ping them in Discord, or whatever channel they may use, and then they might get frustrated, because they're like "We're busy. We have family things. We're all in lockdown", and whatever that may be... So there's this lack of communication that happens.

So off the bat, if you have a good set of contributing guidelines, you set precedent and expectations between both parties, so you know what to expect, automatically, off the bat.

**Nick Nisi:** \[00:40:02.27\] Yeah, it seems like common sense that everyone should want that, some kind of guidelines to follow... That's definitely something that anyone can champion. You don't have to be from an under-represented group to push for that on the projects that you love.

**Jerod Santo:** Right. It seems so basic, like house rules. Everybody has the right (or whatever) to make the rules of their own house. Maybe when you're coming to my house you have to take your shoes off when you enter the house. Maybe that's my rule. But if you go to Nick's house, maybe he doesn't care so much. "Hey, wear your shoes. I want it to be a more relaxed place."

Well, in social places, we have to navigate those rules. We have to somehow say "This is okay here, that's not okay here. We eat at 6:30, we eat at 9 PM", those kinds of things. I think it just sets expectations and ground rules of "This is the kind of community this is." You can still define it how you want to, you can still be closed off, and like "I'm in charge", but just put that on the readme, put that on the code of conduct, so that people walk up and we don't waste our time... Like, "Oh, this is a person who doesn't want any contributors. I'm gonna go somewhere else."

I think setting expectations is a huge part of it, and I think not enough people are doing it... Which is why \[unintelligible 00:41:10.11\] I'm not a huge fan of copy-pasting other people's codes of conduct, because it seems like it's checking the box. I think it should be there... And I'm guilty as well, I've definitely copy-pasted a code of conduct; I've read it at least, but it seems like "Well, did I put any thought into this? Am I just cargo-culting, because I know I should have one?" I think there's a lot of that going on, too. Sorry, Chris, you were gonna say something?

**Christopher Hiller:** Right... Now, I know there are people listening to this program like me, or like Jerod, or like Nick. Personally, some years ago I was like "Why do I need a code of conduct? I don't want this thing. Can't people just be nice?" I didn't understand. I didn't think it was helpful \[unintelligible 00:41:58.12\] So what I did is 1) I kept that to myself, because starting fights with other people is not gonna be productive. But what I did was I listened to the people I disagreed with, and I got to know them, and I befriended them.

Over time, I began to have more empathy, and I began to understand what is important about it... Even though the first time that I heard about a code of conduct I reflexively said "Well, no. We don't need that. I don't want that." And those very same arguments that were made to me then, are the very same arguments and reasons for doing so that people are repeating today. It's just that back then I didn't understand and I didn't have empathy for the people that it affects.

So by listening and by getting to know people and being part of a community - that's how I came to understand that this is really something that is necessary. This is something that's going to help this project's community, or the greater JavaScript community, or the greater open source community... Just listening to different viewpoints and people I disagreed with. Maybe if somebody is thinking "I don't understand why we need this thing", and "No, I don't want it", well, I would suggest to you to listen to the people that you disagree with.

**Jerod Santo:** Good advice. Alright, let's switch gears, but not switch popularity... This is also, I think, probably unpopular, because I've disagreed with it myself in the past, and I might disagree with it by the time we're done talking here... But I do believe it right now, which is that I think most of the time that you spend tweaking, customizing, optimizing your terminal, your editor...

**Nick Nisi:** Oh, no...

**Jerod Santo:** \[00:44:09.09\] ...your tools - most of that is time not well spent.

**Divya:** \[laughs\] Amazing.

**Nick Nisi:** \[laughs\] How can you do this...?

**Jerod Santo:** I think most of that stuff is YAGNI. I think we spend six hours to save 60 seconds, and I think we yak-shave far too much.

**Nick Nisi:** You never know if you're gonna do that 60 seconds again sometime... \[laughter\]

**Jerod Santo:** I think I've hit an unpopular cord here, because everyone just kind of sat there and laughed, and shocked... What do you guys think?

**Christopher Hiller:** I agree with you.

**Jerod Santo:** Oh, nice.

**Christopher Hiller:** I feel like it's gonna be faster to learn what you have in front of you than to spend time tweaking it. It's gonna be faster to learn how to use these tools, instead of making your own.

**Jerod Santo:** Right. And I'm fine with a little bit of ergonomics; like, I'd rather do it this way, I'd rather do it that way. But that's not what I'm talking about. I'm talking about the extreme customization that I myself (the past me) am very guilty of. I used to be like "Pimp my ride", my ride is a terminal. And I know there's a lot of it out there, because I see a lot with screenshots, and people sharing... Nick is smiling real big over there, because I know he likes to do this... \[laughter\]

I will say, if this gives you joy, and this is something you enjoy, go do it. Because it's not a waste of time if it's a joy thing. But if you think this is a productivity thing, I think you're probably fooling yourself. Most of the time, we're not gonna need that level of customization. In fact, it may slow down our terminal so bad that we have to switch tools, because it takes -- my vimrc got too thick, and Vim slowed down, to the point where I don't use Vim very much anymore. It's just like "Why did I do that to myself?" But a very thin customization, a few keyboard shortcuts - I can be very productive in Vim, in many different scenarios and servers and stuff, that I never need all that other stuff... So I'd rather just, like Chris said, learn the tools that are in front of me and don't customize the heck out of it.

**Nick Nisi:** Oh, man. I will agree with you...

**Jerod Santo:** Yes...!

**Nick Nisi:** ...that doing it for productivity is probably not beneficial... Although I will say, I feel way more productive in my environment that I molded to me, rather than me trying to mold myself to some environment. And some background - the last three months I have spent working entirely on a Windows machine, in the cloud, running Visual Studio Code that's several versions behind, and doing all of that with just a slight enough key lag on everything that I type, because it's a machine in the cloud, that I am driving myself insane.

**Jerod Santo:** Are you a glutton for punishment? Why are you doing this? \[laughter\]

**Nick Nisi:** I have no choice.

**Jerod Santo:** Okay.

**Nick Nisi:** And my bespoke environment, with 51 Vim plugins and 15 coc plugins, which is a language server for Vim, bringing a total of 66 plugins in my vimrc. My Vim is fast; it's great. \[laughter\]

**Jerod Santo:** I'm sure I've got one plugin that's just killing my Vim, I just don't know which one it is.

**Nick Nisi:** Probably.

**Jerod Santo:** I don't care. I'd rather use VS Code most of the time.

**Nick Nisi:** Yeah. I can't defend the productivity part of it, because while I have shaved off several minutes doing things over the last ten years of using Vim, it's been 950 commits to my dotfiles, and lots of time debugging them, and I'm completely useless when I go to another editor, like VS Code...

**Jerod Santo:** \[laughs\]

**Nick Nisi:** And I can't justify the productivity cost of that, but I need it to fit me. I'm not going to fit it. \[laughter\]

**Jerod Santo:** I feel like this has been a good one; I've turned this into a confessional. Nick is confessing. \[laughter\]

**Christopher Hiller:** In the chat room Rebecca brings up a good point... She said she stopped doing the extreme customization because it made it so much harder to help other people, because their setup was so different.

**Divya:** That's fair.

**Jerod Santo:** It's a good point.

**Christopher Hiller:** Just like Nick said, if I have to switch over to VS Code or whatever, I'm stuck.

**Nick Nisi:** \[00:48:02.27\] I actually wrote a custom script once, that would let someone -- I would type the script out, put their username in, and it would go to GitHub, pull down their public key, add it to my authorized keys on my machine, and set it up so that they can SSH in paswordlessly into my machine, directly into the tmux session I was in, and then we could work together in there. I tried it exactly once, and it was just completely useless, because whoever is SSH-ing in and trying to work with me has no idea about any of the key bindings that I have. So it wasn't practical... Whereas something like Visual Studio Code's live share feature is amazing.

**Divya:** Yeah. I agree with the customization thing. I used to do the same. It's interesting, because I did it when I was a newer programmer, just because I felt like that was being an elite programmer, was just like doing these crazy customizations... And I think at the time I was using Sublime, and I had this wrong opinion obviously that anyone using Sublime wasn't as elite, and cool, and hacker-like as someone who used Vim.

I think at the time, the agency I worked at - people were also using Emacs, because it was cool... And it was just this complete sense of like "You have to customize to the point of just nobody knowing any of your bindings or what you're doing, just to prove a point." So you would do a demo and everyone would be like "What is that?!"

I've since learned that how many customizations you have is not indicative of how good you are as a programmer at all.

**Nick Nisi:** For sure.

**Jerod Santo:** Absolutely.

**Divya:** I have seen phenomenal programmers program with Sublime Code. Even today, with VS Code, they still use Sublime and they're leagues ahead. Coming down to it, it doesn't matter. If you find a tool that works for you and you don't need to customize a lot... It's just whatever gives you productivity, and I think sometimes customization can get in the way of that.

So yeah, whatever works... If you enjoy customization and that brings you joy, sure. But I think I agree with Jerod, that if you convince yourself it gives you productivity -- I actually know people who have convinced themselves that writing even three letters in their terminal is too much, that they have to write one... And I'm just like "It doesn't matter. It doesn't." And I almost feel judged when I'm like "I actually don't mind writing the entire thing."

**Nick Nisi:** I have aliased Git to G.

**Divya:** Yeah, I guess you're an example... \[laughs\]

**Jerod Santo:** I feel like everybody has to pick where that point is for them. My opinion is that we far easily go into the extreme yak-shave side of it. But I'm not against learning your tools, I'm not against solving pain points. If I'm feeling pain -- there's an argument that says "Okay, most of my time is spent thinking", but when it comes time to actually type, whatever gets between me and my idea into the system is like a problem that I wanna solve. I understand that completely. But for me, I wait till I'm feeling pain. And I mean feeling it like "Gosh, this is the 17th time I've done this. There has to be a better way."

Or you see somebody else do something that you routines do slowly, they do it really fast. Go learn that thing. But there's a law of diminishing returns, and there's ROI on your time. And I think we often throw that out in pursuit of the extreme productivity, and not say "Is this worth my time right now?"

Emmet is a great example. By the way, I think this is an unpopular opinion, because we've lit up the chat room with all sorts of statements... And \[unintelligible 00:51:45.02\] is talking about using Emmet, which is the text expansion tool, where you can \[unintelligible 00:51:52.09\] and it'll expand a whole bunch of HTML for you. That's an easy thing to learn, and a huge win over time. So that's not problematic, in my opinion. It's like writing in your own stuff, picking where that pain point is, and solving it - fine. But extreme "Pimp my ride" style customization, which I've done tons of... I think it's kind of a young person's game - that's maybe an old person talking - because I used to think it was worth it, and now I'm like "Ain't nobody got time for that."

\[00:52:26.16\] So maybe that's ageist or something, but I feel like it's kind of -- I shouldn't say a young person's game. It's something that I think people who have the time and enjoy it do more of it, because it is incredibly enjoyable; I'm not trying to take that away from everybody. But you've gotta feel the pain before you fix the pain, and you have to also judge how much work is it gonna be for me to fix this pain, or try to just live with it. I think oftentimes live with it is the right answer.

**Nick Nisi:** Yeah, most of the time. But the 55th time that you come across the "Man, I could just write a macro to do this, if I only knew macros..." Like, I know that they're a thing, in whatever editor you're using... Eventually, you have to take a little bit of time to sharpen your axe.

**Jerod Santo:** Well, I'm with you. I've been writing Apple scripts for the last few days, so I'll share that in our shout-outs, why that is... There's a time and a place. I just think we misjudge it oftentimes.

**Break:** \[00:53:25.20\]

**Jerod Santo:** Alright, we are back for one of my favorite segments, because it's a chance for us to say thanks to folks, or to point to cool things... Really give shout-outs to people and projects or whatever it happens to be that we think deserves a shout-out. So let's get right to it. Divya, you are up, my friend.

**Divya:** Awesome. This is less code-related, but I've just noticed that today, that Keynote has new templates, which are really cool. Not that I use a lot of their templates, because I generally use a blank one... But they have a color gradient one, which is really cool. It automatically color-gradients things.

Also, their templates look nicer... I don't know. They added new ones, and just the template layout itself is really nice. I use Keynote for a lot of my presentations, and for any slide decks I need to great for work, or whatever... So that's cool. I just noticed that and I thought that was really cool. I have other issues with Keynote, but that's a shout-out. It's a worthy shout-out, since I complain about Keynote a lot...

**Jerod Santo:** I can't believe you're shouting out Keynote. Did you read my one?

**Divya:** Wait, what was yours?

**Jerod Santo:** Scroll down.

**Divya:** \[laughs\] But it's different. Yours is different.

**Jerod Santo:** No, it totally is. It's just funny. Go ahead, Nick.

**Nick Nisi:** I would also like to shout-out Keyn-- no, I'm kidding. \[laughter\] So this one I'm a little bit biased on, but I really wanna shout-out to the Dojo team for the release of Dojo 7, which will be out by the time this episode actually airs. It's not out yet, but we're actively working on getting that out right now.

So I wanna shout-out the team \[unintelligible 00:55:36.18\] and all of the others who contributed to the project. This one really focuses on our widget library. I've written a number of widgets and converted a number of widgets to use the more modern Dojo. It's really cool, really awesome, it has a whole new themeing section, including a custom Dojo theme, and also a material theme that ships with it. It's really great. If you like React, I think you'll like Dojo better, so you should give it a shot.

**Jerod Santo:** \[00:56:08.08\] You said you didn't have any unpopular opinions. That would have been a great one. \[laughter\] "If you like React, you'll like Dojo better!" Alright, Chris, you're up.

**Christopher Hiller:** I wanna shout out to Wes Todd. Wes works at Netflix, he's the maintainer of Express, and he's been doing really good work in the Express community. He's been working with the package maintenance group in Node, and he's been working with the Node Tooling Group, and probably other stuff, but he's doing a whole lot right now, and I really appreciate what he's doing... So thanks, Wes.

**Jerod Santo:** Shout-out to Wes. Well, it's time to shout-out Keynote once again... This time from a slightly different angle. I didn't know about the new gradient backgrounds themes. So is that just you update Keynote and it just has new themes that weren't there before?

**Divya:** Yeah, pretty much.

**Jerod Santo:** Super-cool. I'd like to shout-out Keynote because I think it's underrated as a general-purpose creation tool. I've been able to wield it in a way that I didn't realize it could be wielded before recently, and it's actually how we create all of our audiograms that come out of our shows, that turn into videos that get posted onto Twitter and YouTube and what have you. It's been an incredibly valuable tool for that, where other tools have failed in massive ways... And I'm gonna end up writing this up and sharing with folks, so they can also benefit from this workflow.

Basically, we're using Keynote not to create presentations, but to create videos... And it's super-smooth, super-easy to work with... It's just like a general-purpose canvas, where you can drag objects around, and you can do amazing things. People generally use it for slide decks... I remember back when I was helping Grooveshark rebuild -- that was an old music streaming service that was super-cool back in the day, before the RIAA and other entities took them down. One of their designers - I think their lead designer - actually built their entire UI, did all his design work in Keynote... And I remember having my mind blown.

He loved it, because it's basically like a freeform canvas for drawing shapes, and dragging them around, and cut duplicating is really easy, and gridding is really easy... It was just ergonomically something that he liked to do. He just preferred it to all the tools then. Now, I know there's better tooling now than there was back then, because it was probably the 2009 timeframe...

But if you haven't used Keynote for anything besides presentations and you have some design needs or some video needs, there's a cool way you can use it to record it as a video. You can add soundtracks... It is a really cool tool. It's almost like Excel, in so far as you can just kind of use it to make stuff. I think Excel is one of the most amazing pieces of software in human history for what it's unlocked for folks, and I think Keynote is along those lines, if people knew that they could wield it in different ways.

So shout-out to Keynote for the second time. Grab a gradient background theme and use it for something it's not designed for. It's a pretty awesome piece of software.

**Divya:** Yeah.

**Christopher Hiller:** Jerod, do you have any examples of using Keynote for videos? Like a video that you've made with it.

**Jerod Santo:** Yeah, absolutely. If you're following @jspartyfm on Twitter, you've seen some of those videos. All of the videos that we do, where we take the audio clips from the show, and we have the text, and who's talking's face lights up, and it's basically like quotes out of our podcasts - they're all created in Keynote.

**Christopher Hiller:** \[00:59:44.19\] Yeah, I've never watched any of this...

**Jerod Santo:** Come on, Chris... You've probably been in them.

**Divya:** \[laughs\] You've never retweeted them? What...?

**Jerod Santo:** Come on, man. Give us a retweet.

**Christopher Hiller:** I mechanically retweet everything that I see from JS Party...

**Divya:** You are your bot.

**Jerod Santo:** You are your own bot. So I'll link one of those up, so that people can see what we're talking about.

**Nick Nisi:** I love Keynote, and I use it as much as I can. The only thing I wish was easier - and this is going back to slides, I guess; using it for actual slides - I just wish adding syntax highlighted code was easier.

**Divya:** Oh, yes...! Oh my gosh, it's so annoying.

**Jerod Santo:** You just take a picture and slide it in there. Perfect.

**Divya:** I usually just copy from VS Code, because it copies the syntax highlighting...

**Nick Nisi:** Really?!

**Divya:** Yeah.

**Nick Nisi:** So I copy it, and then I Pbpaste and pipe that to Pigments, and then Pbcopy that...

**Divya:** Oh, no, if you just copy straight from VS Code, it copies all the syntax highlighted.

**Nick Nisi:** But then I'd have to open VS Code.

**Divya:** That's fair, yeah.

**Jerod Santo:** Can you do it remote into a Windows machine, and SSH through his authorized keys on somebody else's machine. \[laughter\] If not, Nick doesn't want to have anything to do with it.

**Divya:** Yeah. I think you can also use -- if you copy code in CodeSandbox, because sometimes I wanna do something really quick and I'm doing a demo... If you copy from CodeSandbox, it also does the same syntax highlighting. So you can just open a tab of CodeSandbox and it works.

**Nick Nisi:** Nice.

**Jerod Santo:** Awesome. Well, that's our show for this week. If you're listening live, we appreciate you; if you're listening in the produced version, I guess we appreciate you as well, but just slightly less -- nah, I'm just kidding. We love all of our listeners.

We do appreciate shout-outs for JS Party. If you have friends in the JavaScript space and they don't know about the show, tell everybody. Tell them all JS Party is a thing. We record live each and every Thursday at 1 PM Eastern. We would love for you to participate. For those listening live and in the chat, we appreciate all of the chatter... And that's it. We'll talk to you next time.

**Break:** \[01:01:58.16\]

**Divya:** Are we gonna start Unpopular Opinions first? I thought we were gonna start on a happy note, of work from home. Yaay...!

**Nick Nisi:** I will also say that this specific example of a one-liner only has 35 lines of tests...

**Jerod Santo:** Oh, gosh...

**Nick Nisi:** ...and five of them are comments, and one of them is a console log.

**Divya:** Whaaat...?!

**Jerod Santo:** How many actual tests are there? If you ran it, how many passing dots would you get?

**Nick Nisi:** 14. 15. 16.

**Jerod Santo:** 16.

**Christopher Hiller:** Multiply that by the size of the build matrix. So where is it tested?

**Nick Nisi:** True.

**Christopher Hiller:** What versions of Node is it tested in? Which browsers? And so on.

**Divya:** \[laughs\]

**Nick Nisi:** Stop trying to make this make sense... \[laughs\] No, I agree with you; there's a lot of benefits to that, for sure.

**Christopher Hiller:** I added an unpopular opinion, but I don't feel like defending myself... \[laughter\]

**Divya:** That's not how this works...

**Jerod Santo:** That IS unpopular...

**Christopher Hiller:** Yeah... If you all wanna look at that and if you all decide you're gonna challenge me about it, I'm gonna skip it, because I don't wanna defend myself. \[laughter\]
