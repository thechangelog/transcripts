**Mikeal Rogers:** Welcome to JS Party, where it's a party every week with Javascript! I'm Mikeal Rogers...

**Rachel White:** I'm Rachel White.

**Alex Sexton:** And I'm Alex Sexton.

**Mikeal Rogers:** And on the show today we also have Kat Marchán and Rebecca Turner from NPM... Why don't you all say hi?

**Kat Marchán:** Hi!

**Rebecca Turner:** Hi!

**Mikeal Rogers:** So let's just right into it. We really wanna talk about npm@5 today, we're really excited about it, so why don't you tell us a little bit of the back-story behind npm@5 and why this is such a big deal release?

**Kat Marchán:** It's kind of a big deal...

**Rebecca Turner:** It is!

**Kat Marchán:** The story of npm@5 is that last October - or September...? When was it?

**Rebecca Turner:** October.

**Kat Marchán:** npm@4? So last October we released npm@4, and therefore we couldn't use the number four anymore, so we needed a bigger number to release, and we chose five as a valid increment for an integer. The further story is we've had a lot of breaking changes that we've been doing for a while, and that's usually what we do in major releases, but most important was we've had this cache rewrite on schedule in some way or another for five years. We've been putting it off, pretty much... It was meant to be this rewrite that we -- we expected it to be mostly an internal improvement. It was going to maybe speed things up slightly, maybe it was going to fix a lot of our issues, but we mostly saw it as this architectural improvement.

Sometime early last year we decided that we're just gonna bite the bullet and we're gonna do the cache rewrite. We'd been talking about it for five years, we have closed many issues with going like "This will be fixed by the mythical cache rewrite that we've been talking about for five years..." So we were like, "Alright, when can we next do it? We can probably do it for Q1", so that's the schedule that we set for ourselves last year.

**Rebecca Turner:** Yeah, and then Kat started playing around with it in November...

**Kat Marchán:** Yeah, it was November when I started looking at it...

**Rebecca Turner:** ...and we first started to actually see results -- I think you tried it out in late January...

**Kat Marchán:** Late January, early February \[unintelligible 00:03:24.23\]

**Rebecca Turner:** ...and we were really surprised to find that it was unbelievably faster. The old cache was -- I still don't know how it was as slow as it was.

**Kat Marchán:** It was slower than just fetching from the network sometimes, if it was faster at all. It was just not very fast. We still don't know why it was that slow... But it was!

**Alex Sexton:** That's interesting... I'd be interested in that data.

**Kat Marchán:** If you figure out what happened tell us, because I have no idea! \[laughter\]

**Mikeal Rogers:** \[00:03:57.23\] So it's much faster... I don't think that's the only performance update though, right? There's a couple other things that you did to improve the performance around this time.

**Rebecca Turner:** Yeah... I mean, that got us a 5x speed increase over older npms, and then it was like "Wow... That was a lot faster!" and now other improvements start to actually seem meaningful. What before would have been like "Well, that's like a 10% improvement in speed", but it was taking so long anyway that it wasn't a big win, and now it was. So yeah, we did a bunch of other things.

Probably the single biggest aspect of the speed in the new version is the new lockfile shrinkwrap support. Having those allows the install to be much faster. It's part of the reason we made a lockfile by default - it was just speed.

**Kat Marchán:** Yeah, with npm@5 it was the speed, and I'd say the second one was usability improvements that we did. We were just like, "Alright, it's a major version. People care about usability - what can we do to make this tool easier to use?" And some insight here - there's a reason that we didn't save by default for so many years. You have to understand that npm was originally designed, intended for and used as a Node library developer's tool. It is almost ideal -- it is practically idea if you are a Node developer writing libraries to publish on the npm registry. That is what Isaac designed it for - it was designed for a very specific workflow... And npm library authors are not the people who use npm the most these days anymore. The registry is too big.

**Rebecca Turner:** Library authors were the majority of Node developers in 2012... Not so much now.

**Kat Marchán:** Now we're pretty much \[unintelligible 00:05:42.27\] developers, right?

**Alex Sexton:** In that vein, one of the things I was excited to see was the symlink stuff... Stripe, where I work, has a monorepo and we definitely have some jiu-jitsu around trying to move libraries that are in our thing into our dependencies, but have dependencies still work among our subdependencies, all in the same repo, and the symlink stuff seems to solve a bunch of that. Can you explain how that works? I guess I did part of that, but \[unintelligible 00:06:18.03\]

**Rebecca Turner:** Sure! So we've had this file specifier since npm@2, so you could npm install a local directory. It was added in at the very end of the npm@2 development cycle, and it wasn't super well integrated into the rest of the npm product. What went into the shrinkwrap was never fully specified and has varied over time in various bad ways, because when it was originally put in, the fact that it even worked in shrinkwrap was kind of an accident.

When we were working on designing npm@5, one of the things we wanted to do was to make the shrinkwrap situation, and thus the blockfiles generally made more sense and worked better. So one of the pieces of that was defining "What do file specifiers do?" and we were having a lot of problems figuring out how this should work, until we got the idea that maybe these should just be links. By making file specifiers install to links, it solved all the other problems we were having with that, and it turns out it's super useful. Actually, there's a module on the registry called "link local" which was already doing this. So we essentially just took the behavior of link local and implemented it as core npm behavior.

**Alex Sexton:** That's interesting.

**Rebecca Turner:** The monorepo use case - there's still quite a bit of work to be done there as far as smoothing that out. I expect more on that the next coming six months.

**Alex Sexton:** Cool.

**Rebecca Turner:** We have a number of ideas; we think we'll make that better. Incidentally, internally, npm's own website has moved towards a monorepo, so we're getting to dogfood that pretty strongly now.

**Alex Sexton:** \[00:07:58.00\] That's encouraging.

**Mikeal Rogers:** Yeah, I have to say my favorite feature actually probably is the default save stuff. I think the first bug in most of my packages that I've received from other people is "You forgot to actually add this dependency" because \[unintelligible 00:08:12.08\] for half of the things that I installed, and then not one of them... This just completely solves that, I'm so excited about it.

**Kat Marchán:** Me too... I think we've been pushing to try and do this for a while... It's like, "How do we push this in?" This is a serious change in people's npm workflow, right? This is not a change that we could do lightly, as small as it seems...

**Rebecca Turner:** It basically became non-optional when we decided to do the package locks.

**Mikeal Rogers:** Yeah, let's get into that. That's a really, really big change in terms of default behavior, right?

**Kat Marchán:** Yeah, so we're moving to optimize the default path for users as much as possible. We're also trying to cut back on how much configuration you can do and make things like configuration more binary seeming. So instead of saying "Here's your cache min, here's you cache max." Now you have three options --offline to force npm to use offline or crash; --prefer-offline, which is essentially --cache-min 999999, and then --prefer-online, which forces the cache to check that everything is fresh.

**Rebecca Turner:** The --cache-min 0.

**Kat Marchán:** Yeah, the --cache-max 0...?

**Rebecca Turner:** No, because it's \[unintelligible 00:09:27.01\]

**Kat Marchán:** Right, right. So we have stuff on the pipeline now, things like... I've talked about --low-mem, which I need to spec out and hopefully get in something like that.

**Rebecca Turner:** Yeah, that would be really exciting.

**Kat Marchán:** Yeah... Literally, a mode in npm that drops concurrency massively and then makes sure to stream everything, so you have very low memory usage for npm, which is great for people running on constrained VPS's.

**Rebecca Turner:** ...and embedded systems, which is a surprisingly common use case.

**Alex Sexton:** That is interesting that the install would happen on the embedded system, versus somewhere else and then just load it on...

**Rebecca Turner:** Right, but it's just because that has been people's development mode. They wanna do their development on it. I imagine for deploying it they wouldn't do it that way, I would hope, but while they're working on it, they still have the little Raspberry Pi sitting next to their computer.

**Kat Marchán:** It's easier than having to do all the setup to do deployments on the clients...

**Rebecca Turner:** Yeah.

**Alex Sexton:** I think one of the primary overarching stories behind a lot of this is most people do a thing, and they do that thing and they're like "How come npm doesn't do this?" and I think no one's invoked the "yarn" word yet, but I think a lot of what yarn was was "Hey, there's this use case that if we take away all these other constraints that npm has and all these other things that they have to do, then we can do this other thing very quickly, and add some features." It seems like a primary story of npm is that there are a lot of different use cases and continuing to support all those has very unique challenges in places that people don't even consider.

**Kat Marchán:** Yeah, I mean npm is the default, and that means that we have to support all these people; not just new people that are coming in, but what five, six years of people who have old setups and don't wanna have their keys moved too much. \[unintelligible 00:11:27.29\] Maybe that's a bit of a weird metaphor at this point, but I think it's okay for npm to make tradeoffs that other things can't. We're not gonna sacrifice the user base that we have in order to primarily serve what developers -- so we can serve both, and that's what we'll do... We'll optimize for like spreading out...

Another aspect of npm@5 is that it is probably our most significant step in a while towards breaking npm down into significant chunks, with the intention of -- like, the dream here is to (the platonic idea, if you will) be able to take all the components that npm uses right now, pick only the ones that you like and need, and then cook up your own package manager for your particular community.

\[00:12:24.17\] All the work that you don't have to change, you won't have to rewrite. We have several new packages that are meant to be used by the community more generally.

We're talking about "How the heck will you yank out parts of the installer so that people can make decisions about how they install the tree?" A really good example of things that npm isn't gonna sacrifice is npm has a very -- I guess we're sacrificing it maybe in like some distant future, but right now it is a very core tenet at npm that we do not do dependency hell. Npm is the package manager you use when you never, ever want to run into dependency hell. That's why we did the peer dependencies change.

For those unfamiliar, dependency hell is when you have two packages have dependency on two incompatible versions of the same other package. There's two ways to resolve that diamond. Either you install both versions of the package in nested dependencies, which is what npm does, or you have some kind of conflict resolution mechanism where you can tell one package to use the wrong dependency; wrong according to semver. So you will introduce a thing here where you're forced to choose what to break and how, and hope that it works. Npm will probably refuse to do that for the foreseeable future.

It's why we never integrated any kind of flat install like Bower would do. We're just not gonna do that. I don't see us doing that.

**Rebecca Turner:** No.

**Kat Marchán:** Even though flat installs are really important to web developers...

**Alex Sexton:** Right... You don't want seven versions of jQuery just because you have seven jQuery plugins.

**Kat Marchán:** We want to maximize how flat our tree is, so that people using tools like Webpack or Rollup are able to use tools to reduce the package size of that. But as far as guaranteeing that something is gonna be unique in the tree, unless you use something like peerdeps manually or you have your own mechanism for setting up your global according to your own decisions, npm won't be installing only one version of incompatible packages.

**Rebecca Turner:** We would hope that people would be able to build on our tools to make that, if they wanted a package manager that did that.

**Kat Marchán:** Yes. \[unintelligible 00:14:32.19\] and that's the flat tree.

**Rebecca Turner:** I mean, that's very hard... \[laughter\]

**Alex Sexton:** I feel like it's a common place for a project the age of npm to reach this building pieces part... I think it speaks to the success and the breadth of usage; there's the jQuery UI builder, it's like "build the parts of jQuery you need." Modernizer has a builder, it's too many tests; Babel switched at 5 or whatever in order to do all the "Here's each individual transform versus one" thing. I feel like once you reach some certain level of usage, there's no way you could possibly nicely give everyone everything they want in a single package, so I think the idea of offering the building blocks to doing an npm-like project and then you write the one thing that's different is nice and good. It's a good vision you have.

**Rebecca Turner:** What we have today is we have the new cache - it's a content-addressable cache... It's a pain to spell cache... \[laughter\]

**Alex Sexton:** It's a Canadian cache...

**Rebecca Turner:** \[00:16:01.00\] But it's super fast and it has a very nice API, and all of the npm@5 cache access is built on that. And then there's pacote which is a... We'll provide links.

**Kat Marchán:** It's a manifest in tarball-fetching library. It does all the resolution of identifiers and stuff like that, identical to what npm does; in fact, it's what npm uses now. So you can say pacote.extract and then you give it like npm@5 and it will extract the contents of the npm@5 tarball according to semver resolution rules into a local directory. So it's a very generic tool for doing that, and it also gives you access to manifest information; you can ask for a manifest to see what dependencies you're gonna have to install.

**Rebecca Turner:** And it supports all the sources that npm does.

**Kat Marchán:** Yes!

**Rebecca Turner:** So yeah, the registry, but also Git sources, including the new Git semver support, which is one of the other exciting new features...

**Kat Marchán:** And building. You can build Git deps now. If you have a prepare script and you npm a Git dependency, we will install as step dependencies and run the install script to pretend that you're -- you know, basically simulate publishing to a registry.

**Alex Sexton:** I see. You're cannibalizing Npm Enterprise.

**Kat Marchán:** Sure, why not!? \[laughter\]

**Alex Sexton:** I guess you'd have to have GitHub Enterprise to fully cannibalize, but...

**Kat Marchán:** It is not that, by the way... \[unintelligible 00:17:29.21\] That is not something you want to do a lot.

**Alex Sexton:** Yeah, yeah. So how does it differ from tagging something in -- oh, I guess the resolution of the tag can increase in version as a different... Before, you used to be able to do a Git dep and do hash some tag version number; now you're saying that you can kind of do like a carrot version number and it will grab the correct semver?

**Kat Marchán:** Yeah. It will do that I think to references.

**Alex Sexton:** Awesome. That is nifty.

**Mikeal Rogers:** I wanna go at a little bit higher level... We talked earlier on this podcast about yarn a little bit... For people that don't know, yarn is an npm alternative client that pulls from the npm registry, but it sort of touts two main features: one was performance and one was defaulting this lockfile. Given that you've done a bunch of performance and lockfile work, I wonder if you can kind of compare npm@5 to yarn in terms of those two features.

**Rebecca Turner:** Npm always had a lockfile, of course, in the form of a shrinkwrap, so we didn't feel like we should reinvent the wheel there... We just reused that for the new npm@5 package lock. The main difference between yarn's lockfile and the package lock is -- yarn's lockfile, what it stores in it is the relationships between all the modules, but it doesn't say anything about how these are installed onto disk.

The npm lockfile stores exactly how your Node modules should look when it's done. The npm lockfile guarantees that you will have exactly the same shape of Node modules, as well as the same content, regardless of what you're using to install it.

**Alex Sexton:** I've seen Kat talk about that a little bit. You mentioned that became obvious to you all that it was important to maintain that directory structure... What have you seen people do? What is the reason that is important?

**Kat Marchán:** I think every single person who's ever run CI that runs on Node 4, Node 6 and Node 7 at the same time has run into something at some point where they forget to set up a dependency or something happens with the tree, and suddenly only Node 4 breaks, because Node 4 still defaults to NPM 2, which is before our flattening change. People do the darndest things that rely--

**Alex Sexton:** \[00:20:07.18\] So they're grabbing into the Node modules folder directly, you mean... With the fs.read...

**Kat Marchán:** They do that. Sometimes they just mess up their tree in some way, but they've been testing on one platform... So being able to recreate that exactly is really important.

**Rebecca Turner:** Yeah, I mean... In a perfect world this wouldn't be the case, and certainly when we introduced npm@3 we thought we were going into that perfect world. We learned very quickly that that was not the case; people are doing all kinds of scary things to their modules. People are doing things like having their install scrips install more modules. That's a thing that people do.

**Alex Sexton:** \[whispering\] Oh my god...

**Rebecca Turner:** It's not a thing I recommend... \[laughter\]

**Mikeal Rogers:** No, it's really not recommended...

**Alex Sexton:** Nested installation... Npm install that kicks of in npm install...

**Rebecca Turner:** Or "Download this tarball and extract it here", and some of that includes Node modules.

**Rachel White:** \[unintelligible 00:21:04.27\] does that in various ways.

**Rebecca Turner:** Yeah... Those, of course, don't affect the modules.

**Rachel White:** That's true.

**Alex Sexton:** One of the reasons I think Sam - who helped with yarn a little bit - was interested in doing yarn was because of the ability... It was like a vulnerability -- I'm very fuzzy on this, but you could kind of do a lot of things with the post-install script stuff; has that changed at all in npm@5?

**Rebecca Turner:** No, and it didn't change in yarn, either. We heard that too, and it was very interesting because by the time yarn was released, it was running all the scripts again. You've always been able to run npm with ignore scripts, which makes it so it doesn't run any of those - that's been a feature since npm@1. If that's a concern of yours, you can set that up. It means you can't compile anything.

**Alex Sexton:** Would things break?

**Kat Marchán:** Oh, yeah. That's probably why yarn put it back in, because they realized the ecosystem very intimately relies on those build scripts... Everything, not just JEP. But people do all sorts of things in their install scripts just to set up their modules, and we have the ecosystem we have.

**Alex Sexton:** Is there like a plot for some sort of way to make that safe in the future?

**Rebecca Turner:** I mean, you're running someone else's code on your computer; you're doing that when you put the module in there, right? Your program's gonna require that module and it could do anything, so there is no way to make that safe. There's no such thing as a code library that makes that safe, unless you're explicitly manually vetting every module that comes through, and even then there are always bugs.

**Kat Marchán:** There are services that provide this kind of security; that's why we have NSP, that's why we have LibSecurity, that's why we have Snyk. If you're really paranoid about this stuff, aside from reviewing them you can also run them in jail VMs to make sure that nothing escapes... That is kind of what you have to do.

This is something that affects pretty much every package manager in existence pretty much.

**Rebecca Turner:** I mean, everyone that doesn't essentially have an editorial board accepting packages. \[unintelligible 00:23:18.24\] package managers tend to have that. If you wanna get something into Debian, people are going to look at it before you put it in. But if you wanna publish something to PyPy or RubyGems, or the CPad. No one's gonna look at that; that code is not vetted. There is no approval process, so it can have anything.

**Kat Marchán:** We do have some stuff on the pipeline which I actually don't know if I can talk about, because that's registry stuff and that's not my circus, not my monkeys, but we do have stuff to prevent the infamous worms that people are worried about. So at least automated self-publishing worms will be mitigated. They might rimraf your read directory, but it will only be your read directory, and that's great.

**Alex Sexton:** \[00:24:05.24\] I think that might be the thing that I was thinking of specifically. There's something to be said if you're only using it as a frontend tool; maybe you're not actually executing any code, in which case there could be a world where there's no scripts that run and you could still -- I don't know; not super important. But it is an interesting part of this that I think people don't think about a ton... I didn't know any good solutions other than throw everything in a container. That seems to be...

**Kat Marchán:** We semi-regularly re-visit to see if there's anything new that we could do, but it's something that we've known about and tried to deal with since the early days. There's issues about this going back a long time, and it's just like "Well, what do you do?" You can break the ecosystem, but we don't wanna break the ecosystem. We don't wanna get rid of scripts altogether, because people find them useful.

**Rebecca Turner:** And they keep asking for more...

**Kat Marchán:** \[unintelligible 00:25:03.19\] Can you stop? \[laughs\]

**Mikeal Rogers:** We're coming up on the end of the segment here, but we've talked a ton about all the reasons why you should be installing npm@5 right now, today... Because it's awesome. Is there anybody that needs to worry about installing npm@5? Any kind of breaks that people might be reliant on out there that you would say "You know what? Hold off for a second...", or is it just everybody should go get it today?

**Kat Marchán:** It's still on at next, so everybody should not get it today because it's a pre-release. There are known issues; we are tracking those and fixing those as fast as we can. As we said, we have a lot of users, we have a lot of very creative users, who really do their own artisanal, bespoke module setups and installations, so we're finding all that out now as people start using it. We'll have npm in at latest on Tuesday, that's the plan.

As with any major release of a tool this core, I would say that you try it, you see how it works for your setup. It might work very work very well for your setup, or there might be things that still need updating. If there are things that still need updating, let us know, we'll get to that. But this is just something that applies to pretty much any software that goes through a major release.

**Rebecca Turner:** As far as things that we intentionally broke - the breaking changes of npm@5, most of those are things like the save by default and the lockfile, and the fact that output is no longer five miles long. I like that one... That one's nice. We have a little summary \[unintelligible 00:26:44.10\]

**Kat Marchán:** Yeah... Apart from people relying on things that they really shouldn't have been relying on, like very specific parts of the ouput, there's not a lot that will change, especially not for consumers of packages. A lot of this is mostly on the developer end.

**Alex Sexton:** If you currently have a shrinkwrap, do you need to generate a new shrinkwrap with 5?

**Kat Marchán:** No. We will probably -- in the case of most shrinkwraps; I don't know if all shrinkwraps in existence... But we will update that on run. One thing to note is that npm-shrinkwrap and package-lock.json are the same format. The main difference is that npm-shrinkwrap is publishable and package-lock is not. Shrinkwrap is meant for things that you really absolutely need to guarantee \[unintelligible 00:27:28.16\] for people who install your package. So we automatically read that we'll use it, and then we'll write it back out in the new format.

The thing to note is if you keep it called npm-shrinkwrap, older versions of npm down to like npm@2 will be able to install it; not npm@1, because of scope packages, but all the way down to 2 you should be able to get identical trees pretty much.

**Mikeal Rogers:** Awesome.

**Alex Sexton:** That's cool, yeah.

**Mikeal Rogers:** Yeah, thanks for coming on, this has been fantastic. When we come back, we are gonna get into Sheetsee with Jessica Lord.

**Break:** \[00:28:10.29\]

**Rachel White:** We're back with Jessica Lord and we're gonna talk about Sheetsee. Sheetsee is a really cool library that lets you use Google Spreadsheets for visualizing info, and it's really awesome. Jessica, you should tell us about it better than I can.

**Jessica Lord:** \[laughs\] Well, I think you've done a really great job, because that's basically it. It's a really small library to build quick sites with data from Google Spreadsheets. Basically, you're using a Google Spreadsheet as your backend database. That's awesome because people can share it; there's no dev environment. People who aren't developers know how to use spreadsheets, so it's a really easy interface. You can have a lot of people working together on the data, and then you connect it to a website. Once it's connected, all you have to do is edit the spreadsheet. There's no deploying, and things like that.

Every time someone is visiting your site, it's hitting the spreadsheet and getting the latest from the spreadsheet. All you have to do is edit the spreadsheet. It lets you do tables and maps.

**Rachel White:** That's awesome. What made you wanna make this?

**Jessica Lord:** This came out of my Code for America project that I did. Code for America is a non-profit based in San Francisco that pairs designers, developers and civic people with city governments to build open source software for them. I did that fellowship; I had come from the city of Boston previously, and I was really keen on not creating new bottlenecks for city IT departments which have to do everything. I felt like there are so many tools we take for granted on the web that would enable departments to manage and update their own websites without needing to go through IT for everything. That was what was kind of my guiding principle and what lead me to pick spreadsheets in general.

I started building it out that year, and it started off as a bunch of Javascript built into a Wordpress theme. Then when the fellowship year was over, I got a grant from Mozilla OpenNews, which is a branch of the Mozilla Foundation that focuses on open source tools for journalism. I got a CodeSprint grant from them to spend two months pulling out all the Javascript and making it a standalone library. That's when it really became Sheetsee. Then I just recently rewrote it, a couple months ago.

**Rachel White:** \[00:31:57.21\] Yay! That's awesome. I like that I'm saying "Yay!" What are some cool uses that you've seen people use Sheetsee for?

**Jessica Lord:** People have done it for meetups and schedules... Not everyone tells me what they do. Really, I have no idea what people are doing with it unless they specifically go out of their way to show me. But what is also cool about it is you can use it with GitHub Pages, which is GitHub's free hosting service. Then people can just fork your site and just make a few changes and quickly then have their own site going.

Earlier this year in January I tried to make a site myself where I thought that I was gonna keep up with all the things that Trump was doing, and I was gonna make a database of articles and label them by offence, and...

**Rachel White:** But there's too many and you found a limit for Google Docs... \[laughter\]

**Jessica Lord:** Yeah, it snowballed really fast and it was just too much work for a person who's not a journalist or a report full-time to be doing. But somebody forked that site and then made a site for like important buildings in Baltimore. \[laughs\]

**Rachel White:** That's cool. That's helpful if you're in Baltimore.

**Mikeal Rogers:** Totally. I've actually used Sheetsee a bunch of times. The use case that I always use it for is like okay, I have just a static website that displays some data, and then I have people that need to add data to it that are not gonna use GitHub. I don't wanna set up a CMS or a database or manage access controls or do all that crazy stuff, so with just a Google Spreadsheet that everybody knows how to use and you can add people to, and people know how to manage, you can then pull that data in and have it dynamically show up on the website. It's just so brilliant and so easy.

**Alex Sexton:** It sounds like a good way to internationalize a website... Just swap out the sheet.

**Jessica Lord:** Oh, yeah...! That's a really good idea.

**Alex Sexton:** Or swap out the column, I guess, so you have the English on the left, and then every column is the translation for a different language. I do a lot of that... I've actually seen that in practice. Not with Sheetsee, but I've seen people use spreadsheets... It'd be nifty to kind of just connect it directly.

**Jessica Lord:** Yeah, that's a really good idea. I haven't done this, but you could even just use your spreadsheet as a settings page to just generate a site. Your spreadsheet could have columns and rows to say what color the page should be, what the header should be, and that kind of thing. If you connect the site to that spreadsheet, then it will generate a whole new website based on what's in the spreadsheet.

**Alex Sexton:** A whole new website... \[laughter\]

**Jessica Lord:** Yeah...

**Mikeal Rogers:** I stole some of your code that you wrote once to do a map with this, and it made me also discover this feature that I had no idea about in Google Sheets where you can give it a column that has like an address in it, and then it'll stick the GPS coordinates in another column. I had no idea that that was a thing, but you can use that to create pretty awesome maps.

**Jessica Lord:** Wait... Is that a thing?

**Mikeal Rogers:** It works somehow... \[laughter\]

**Jessica Lord:** I had done that but only using a plugin; MapBox had a plugin for doing that. Maybe there is now more native support in Spreadsheets...

**Mikeal Rogers:** It was some kind of macro, or something... I ended up stealing it.

**Alex Sexton:** I have two technical questions about Sheetsee, since I haven't got the chance to use it. Can you use data from a computed cell?

**Jessica Lord:** What is a computed cell?

**Alex Sexton:** It's like I've added up every number in this row, and it's the "=SUM(A1:A15)"

**Jessica Lord:** \[00:36:07.22\] Right, yes. Anything that lives in a cell in your spreadsheet gets pulled out.

**Alex Sexton:** The data though, not the formula...?

**Jessica Lord:** Right, right.

**Alex Sexton:** Okay, cool.

**Jessica Lord:** Sheetsee pairs with this library called Tabletop.js which gets all that data from Google Spreadsheets. It basically deals with the Google API for you, which if you've interacted with the API on your own, you get a ton of metadata and huge JSON back. Tabletop.js cleans it all up and gives you back the pure and simple JSON that you would expect from your spreadsheet, but that actually also means that Sheetsee really just needs some JSON. So you actually don't even have to use a spreadsheet... Which I also do sometimes. I have some projects where I keep stuff in the spreadsheet, and then I just have a NodeScript that uses Tabletop and Node to get the spreadsheet data, and then I do a bunch of stuff with the data, and then I give the data to Sheetsee.

**Alex Sexton:** That was my second question: relying on Google Docs to be fast and/or up for your website seems scary once you hit some -- if it's a simple, personal thing, then whatever... My site goes down far more than Google Docs. But if let's say your Trump thing become popular and you want it to stay up; it seems like you could then later on build that intermediary thing where it doesn't directly connect to the Doc, but you can generate the JSON from the doc at any point and push an update... Which seems cool.

**Jessica Lord:** Yeah. Originally, I wanted Sheetsee to be this really low-barrier to entry thing. It doesn't take long to think, "Oh, what happens when Google goes down?", because I have seen that happen. I remember specifically actually after the Boston Marathon bombing... People were putting addresses in a spreadsheet and it totally went down; it was too much traffic. But of course, once you add servers into the equation, it's no longer this beginner-friendly thing.

**Alex Sexton:** Yeah, but it's kind of beautiful in the sense that you can start with the completely easy thing, and then once you hit the scale problem, it's the same amount of work as doing it upfront. So it's kind of like this nice side effect of accidentally using Tabletop to -- I don't know... I think it's set up nicely.

**Jessica Lord:** Yeah. But now that there's Glitch.com, the greatest new website, I have a Sheetsee.glitch.me, and that is a Sheetsee template that includes server backup... Because you get a free Node server with every Glitch project you do. Glitch actually for me was the way that took "Oh my gosh, how do I get people a server easily?" problem and actually made it easy.

If you remix this Glitch site, you get a blank Sheetsee setup and it just writes the data to the server if it can go to Google. If it can't give you a spreadsheet, then it will just use what was last saved.

**Alex Sexton:** What's the likelihood of it being able to sync with like Pouch on the client to where you can kind of sync data locally, go offline... Is there anybody who's hooked any of that up?

**Jessica Lord:** I don't know of anybody who has, but it should be totally possible.

**Alex Sexton:** Yeah, it seems like all in line with that.

**Jessica Lord:** Yeah. I also have another Glitch that -- because one thing that was annoying is if you just wanted JSON from your spreadsheet, it wasn't super easy to get, and basically you would have to just set up a little Node thing with Tabletop and fetch your spreadsheet, but that was... I don't know; I love spreadsheets, so it was an annoying thing that I kept having to do... So I made another Glitch that is Sheetsee.glitch.me, that you can just pass your spreadsheet key into and it creates a single API endpoint and it returns your JSON to you.

**Mikeal Rogers:** \[00:40:25.01\] That's really nice

**Alex Sexton:** That is cool.

**Mikeal Rogers:** Yeah. I don't think that you would need Pouch to cache this, because you could just use a service worker to cache these simple requests, right? That would be even easier.

**Alex Sexton:** Well, it would need to cache -- I don't know, syncing data versus caching requests are kind of two separate things.

**Mikeal Rogers:** Yeah, I see what you're saying. \[unintelligible 00:40:47.07\] I'm playing with demos right now, I'm sorry... \[laughter\] I'm playing with Sheetsee demos in the background.

**Rachel White:** Is there anything else that you would like to add to Sheetsee that it doesn't have right now?

**Jessica Lord:** Let's see... One thing -- actually, it's not specifically with Sheetsee, but with Tabletop. Tabletop doesn't handle any errors that you get back from Google Spreadsheets.

**Alex Sexton:** When would you ever get an error? That seem unlikely...

**Jessica Lord:** \[laughs\] If you pass in the wrong spreadsheet key, for instance...

**Alex Sexton:** It just gives you someone else's spreadsheet, no problem. \[laughter\]

**Jessica Lord:** No, it just fails, and it fails in a weird way... So you kind of have to deal with it yourself.

**Alex Sexton:** I mean, as long as no one makes any errors it seems fine...

**Jessica Lord:** Yeah, definitely. \[laughs\] Don't mess up.

**Alex Sexton:** Just be perfect the first time and you shouldn't have any problems whatsoever.

**Jessica Lord:** Yeah.

**Mikeal Rogers:** One of the things that I love about this is I feel like all Javascript tooling that I've used in the last 2-3 years has been a giant compile chain and it integrates into a giant compile chain, and this was like "Oh, back in the days..." where you could just insert a "script include" and then do stuff \[unintelligible 00:42:09.20\] It's like, "Oh yeah, there's actually cases where this is just so much simpler..."

**Jessica Lord:** Yeah...

**Alex Sexton:** Actually, that somewhat reminded me of -- the first web development I ever did was members.aol.com; I built a dirt bike website. I literally still have never ridden a dirt bike to this day, but my first website was all about dirt bikes because my friend who taught me how to use members.aol.com had a dirt bike website and I just copied the crap out of it.

The next website I built was for my little sister's soccer team. My dad paid me $5/month to -- it was a trick, I think... I was like, "I'm gonna get money from my dad" and he was like "I'm gonna trick my son into learning web development and statistics..." So I had to go to all of my sister's soccer games and keep stats on all the goals and assists and all those types of things... And I kept it in a spreadsheet on my computer.

Then I would have to go calculate everybody's stats, and then I would update a website with all their different stats on it. I remember very specifically not knowing what a database was, and I was like "There's gotta be away for me to not have to just write HTML tables by hand, and generate this based on my spreadsheets."

I remember very specifically searching in Altavista and saying "Way to get information from a computer spreadsheet and put into..." -- and I never found... I ended up running - I swear this is true - Macromedia Cold Fusion on my local computer, thinking that would solve the issue somehow, and then it didn't work once I deployed the site... It was a nightmare, and if someone would have just had this when I was 10, it would have been really useful... So thanks a lot.

**Jessica Lord:** \[00:44:09.27\] \[laughs\] Sorry... I don't know if Google Docs existed when you were 10, so...

**Mikeal Rogers:** \[laughs\] Google didn't exist when you were 10... \[laughter\]

**Alex Sexton:** Yeah, that's why I was altavista-ing things... \[laughter\]

**Mikeal Rogers:** It would be really messed up if you were using AOL pages when Google existed... \[laughs\]

**Alex Sexton:** It is a really interesting problem, that once you know terms for things, it's impossible for you to solve the problem. You almost have to just like talk to someone who still doesn't know... But how do you search for what a database is before you know what a database is? If you know the term database, you'd be like "good beginner database" and that's fine, bu if you're literally saying "I want to retrieve information from a central repository..." - it's just such a difficult thing to describe... You would never come across database... Maybe in today's day and age, and Google being good at search... I don't know. It's just an interesting on worlds that we live in.

**Mikeal Rogers:** On that note, I think we're about time for the picks today.

**Rachel White:** I wanna go first!

**Mikeal Rogers:** Alright, Rachel's gonna go first... \[laughs\]

**Rachel White:** I just don't want anybody else to pick my pick. My pick of the week is a really interesting repository that someone e-mailed me about and I ignored at first, but then other people did not ignore it and now it's got a bunch of stars on GitHub. It's called Chaosbot, and it's a social coding experiment that updates its own code democratically based on what the people that are involved with the project do. You can vote on things in order to get PRs merged.

I guess IIT reminds me of TwitchPlaysPokemon or like TwitchBuildsAComputer or TwitchInstallsLinux, because the fate of the project is at the whim of the people controlling it. I think it will be really interesting to see what they end up making with it.

**Mikeal Rogers:** This is a very interesting experiment. I'm reading this now and I'm actually like fascinated by it. \[laughs\]

**Jessica Lord:** I think when I looked at it, it did not even have a ton of this stuff, and now there's like containerization, it's got Vagrant up, and... If you can look at all the open issues and pull requests... It's interesting how -- I feel like it was originally Javascript maybe... Maybe not. Like I said, I ignored it at first, because I'm a jerk. Now it's just a ton of Python. It's pretty cool.

**Mikeal Rogers:** I think my favorite thing here is that they have a death counter... People hack it to merge things that actually break it with the voting mechanism, and they're really upfront about how many times the trunk has died because of this...

**Rachel White:** Yeah... My favorite change that got made was this guy got a PR in so that there was no voting weight on the voting, and he was the sole person that could make decisions, which was pretty cool. \[laughter\]

Yeah, I don't know... If you look at the issues, or -- I think it's in the main part... If you scroll down and...

**Mikeal Rogers:** The Rulers section, yeah...

**Rachel White:** Yeah, the Rulers section says "It has been ruled democratically. It has been ruled by plasma power..."

**Mikeal Rogers:** ...and anarchy, a couple times. \[laughs\] It's really good.

**Rachel White:** Yeah, it's neat.

**Mikeal Rogers:** That's awesome. Alex, do you wanna go next?

**Alex Sexton:** Wait, I just wanted to mention that I searched for Chaosbot and the first result is on the Sonic News Network - as in Sonic the Hedgehog - Wikipedia... They have their own wiki on sonic.wikia.com, and apparently there's a Chaosbot in Sonic X \#28, which is a comic... So that's the true Chaosbot.

\[00:48:16.03\] My pick for this week is Babili. Is that how it's pronounced? \[unintelligible 00:48:24.21\] If you type its name into the say command, it will pronounce it correctly, apparently. It is Babel-Minify. Stripe, for instance, likes on its website only to ship ES6 code that works in all the browsers that everyone visits our site it, and it's kind of like a fun thing where you can push just real ES6 out without compiling it down with Babel, or anything like that, and it's cool. But the bad thing about shipping ES6 code is none of the current minifiers support ES6, so if you throw ES6 code, it will fail. So you have to compile down to ES5 and then you can minify.

So I think Babili is the first attempt at an ES6 minifier. It will minify down to the same syntax, just smaller, and whatever. It's still in beta 0.0.1, which is pretty beta... But for small things, I think it's probably pretty safe. They have some tests against some common open source things that appear to work still as well. So if you are interested in shipping ES 2015 to the browser, it's a good thing to start looking into. I imagine this type of thing will get much more popular.

**Mikeal Rogers:** Yeah, I'm using it in I think like five projects, and only one of them, some module somewhere is doing something that it actually breaks on. It ends up outputting something that is not valid. But that was like six months ago; that may be a bug that was fixed. I tried to track it down, but tracking down bugs in minifiers is incredibly difficult, it turns out, so I kind of gave up on trying to debug it at that point... But I'm really happy with it in the other projects that I'm using it in.

If you're doing WebRTC experiments, it's easy to just ship ES6 to the browser, because the Venn diagram of browsers that support WebRTC and don't support ES6 features is not a thing. \[unintelligible 00:50:27.28\]

**Alex Sexton:** That's decently true of the animations in CSS that's written for a lot of the Stripe sites, so it's mostly \[unintelligible 00:50:35.18\] You already have a broken experience, so...

**Mikeal Rogers:** Yeah, it's perfect. Okay, my project of the week is called pkg. It's from Zeit; they're the creators of Now and Hyper and a bunch of other awesome stuff. It's Guillermo Rauch's new company, who started Socket.io. Pkg is something that I've wanted for a long time, which is basically take all of your Node projects - your code, all your dependencies, everything - and Node itself and turn that into one single executable file, so that somebody can go and take that and run it on a similar environment. If you have native dependencies, it's gonna have to be on the same architecture, I would imagine... But they could just go and run that wherever.

This is something that Go has had since day one, they designed it for this, but this has always been kind of a challenge with Node. They have got it working apparently, so I'm really, really excited about this.

Jessica, do you have a pick for us?

**Jessica Lord:** I do... \[laughs\] You'll have to just google this, so I don't have to read out the URL... It's a Medieval Fantasy City Generator. \[laughter\]

**Mikeal Rogers:** That's awesome.

**Jessica Lord:** I saw it come through my Twitter feed this week. It's just a site someone built... I guess it came out of some procedural generation subreddit. You can choose if you want a small town, large town, small city, large city, and it will just keep generating you medieval cities... Like, in plan. They're really cool-looking maps.

**Mikeal Rogers:** \[00:52:16.20\] That's really cool...

**Rachel White:** Oh, I saw that! It's like top-down view of the architectural diagram.

**Jessica Lord:** Yeah.

**Rachel White:** I actually have the URL for this; if you give me one second, I'll post it.

**Mikeal Rogers:** Is it watabou.itch.io? Is that it?

**Jessica Lord:** Yeah, yeah.

**Mikeal Rogers:** Yeah, okay. We'll have the link in the show notes for sure. Adam Stacoviak just found the link to it and put it in the live chat.

**Jessica Lord:** Yeah. Well, never mind... \[laughter\]

**Mikeal Rogers:** If you look at the live chat, you can pull it up; it's really cool. Yeah, this is really, really cool. And it even has labels over stuff. That's awesome.

Alright, that's our show for today. Thanks everybody for tuning in. Sorry that we were a little bit late on the live broadcast, but that's cool... For the majority of people listening to this at home, you probably don't care.

Thanks for tuning in, that's all for today. We're out. Thanks, Jessica, for coming on. We really appreciated it.

**Jessica Lord:** Thanks for having me!

**Alex Sexton:** And thanks to npm.

**Mikeal Rogers:** Bye, everybody.

**Jessica Lord:** Bye!

**Break:** \[00:53:22.19\]
