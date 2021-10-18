**Kevin Ball:** Hello, and welcome to this week's JS Party. I'm Kball, I will be your host, and I am super-excited about this episode, because I get to pick the brains of two incredible experts in the Node community, talking about Node project architecture, and structure, and how we deal with all of this in the Node world.

Let me introduce my panelists for the day. First off, Mikeal Rogers - I have not had the pleasure of being on a show with you... Welcome!

**Mikeal Rogers:** Hey! How's it going?

**Kevin Ball:** Yeah, it's good! I'm super-excited. And second, one of my favorite co-panelists, though they're all favorite, so I say that every time... Feross Aboukhadijeh!

**Feross Aboukhadijeh:** Hey, Kball!

**Kevin Ball:** Alright, so let's kick this off... Just a little bit of context - the inspiration for this show - I don't spend that much time in the Node world. I mostly work on the front-end in JavaScript, and in the back-end I do Golang and Ruby and Python and all these other things, but I haven't done as much Node. I was starting a new project recently that made sense to be in Node. I started going and said "Holy smokes! I have no idea what the right way to structure this project is. How should I be laying out my folders? How should I be decomposing things? What's the norms?" I went to my favorite friend, Google, and found that there are many opinions and very few standards... So I thought this would be a good subject for a conversation, so here we are.

Maybe let's start off by just talking about what we might mean by project structure. We talked about this a little bit before we went live, but I'm gonna throw it out to either of you to take on - what are the dimensions you think about when you think about how you're gonna structure a project?

**Feross Aboukhadijeh:** I'll go... Just some obvious things are -- one thing I always look for is what version of JavaScript is this project using? That's a pretty important decision for a project. It's like, "Are we gonna put Babel in here, or not?" One thing I notice right away is usually how much into organization is this person who's running this project? Are there a lot of folders, with subfolders and subfolders and subfolders inside, or is everything just in the top folder, or maybe just one layer? It can mean a whole bunch of different things. I actually don't know what part of this structure we actually wanna focus on here in this show.

**Mikeal Rogers:** Why don't we put it this way... You're starting a project - what are the steps that you would go through in order to create that project? Before we get into that, me and Feross just share too much history and aesthetic things in common that we're gonna skip over a bunch of really obvious stuff, if we don't actually get into it right now... Like the idea that smaller modules are good; that's not controversial between us, so we wouldn't get into it unless having explicitly talked about it.

\[04:22\] I think that both of us tend to write smaller modules. These are modules that do something predictable, like they take an input and they do something predictable and they give you an output, for the most part. We don't write a lot of plugin systems, we don't write a lot of things where you pass it in and it mutates that thing and gives it back to you, and then you stack those up into a plugin system. We don't tend to write things like that, and it's fair to say that we tend to gravitate away from frameworks and libraries that do do that... Although sometimes it's not entirely possible. I can't think of a single module I've written that had a configuration file that was loaded, or anything like that. Maybe Feross has had to do that before...

**Feross Aboukhadijeh:** No, not really.

**Mikeal Rogers:** Yeah, I mean, even your linter is just StandardJS, so... \[laughs\]

**Kevin Ball:** By the way, this whole conversation - I've just realized - we're also assuming that we're talking about modules here, and not apps, like end users are creating. That's a really interesting set of things, because those conventions do vary by ecosystem, so one of the things I've been learning a lot recently - I've been learning about the Go world, and every Go programmer that I've worked with, they set up a config file and how their config is going to be read, and they've got all that... That's a thing that is normal and expected when you're doing things with config, and I was like "Oh, you mean you don't just do CLI options and environment variables?" and they're like "What?"

So there are a lot of assumptions that are kind of baked in. One thing that I would challenge the two of you as folks who have a deep background in Node is to say "Okay, what are those underlying assumptions that Node developers who have been working in Node for years just have, so that someone who's newer coming into the Node ecosystem might not be aware of, and sort of put those out there for them?"

**Mikeal Rogers:** I think a big difference to note here, especially because most people come from some other language or community and come into Node - I think it's important to note that Node has the best tools for publishing and depending on modules, which influences the kinds of patterns that you can adopt. One of the reasons why things like that happen in the Go community is because Go has the single worst set of tools for publishing and relying on modules. That's not controversial. It's openly bad, they've basically admitted it, and they're not really gonna fix it. I mean, maybe they will, but right now it's just very bad.

I deal with Go a lot, actually, so I'm not saying this from the point of view of somebody who never touches it. Half of what my company does is in Go; more than half, probably. There's just no good tooling, so they will adopt patterns that work around the lack of tooling, whereas in Node you really get to rely on that tooling. In fact, if you're running something that is only gonna be in Node and not in the browser, you really get to rely on that tooling.

One of the problems with the browser is that relying on a big dependency chain increases your bundle size, and that's problematic... So you do have to manage how many dependencies you're taking in. In Node it's much less of a problem. In some serverless environments you're gonna worry a little bit, but even that - you wanna keep it below like 20 megs, not below one megabyte.

So you're very free to rely on modules. You're not gonna be asked to resolve conflicts between different versions of the same module being depended on by different libraries. It sort of solves all that stuff for you. There's a central registry where everything is just available by name. It's all very easy, the whole publishing and flow for relying on modules is very easy.

So from that point of view, when I'm looking at building a new application, I usually actually don't start with the application. I think about the application and what the hardest problems are, and how I can break those into basically modules that only do that hard thing, and not everything else.

**Feross Aboukhadijeh:** \[07:56\] Yeah... Just to add to this - there's a great thing Substack wrote about this; I'm pretty sure he wrote this... It's something along the lines of when you're trying to build an application, think of what modules, if they existed, would make building this application trivial.

**Mikeal Rogers:** Yeah.

**Feross Aboukhadijeh:** Something like that. When you do that, then you can just go and build those modules, and then your application is just this glue that pulls them together; this ugly 100 lines of glue which just connects all the modules to do the thing.

**Mikeal Rogers:** Yeah. And sometimes I'll start to think about this, and it's like "Well, I need that, and then that needs this, and then that needs this..." So I start by writing this thing that is so far away from the application, but I know it's gonna be needed for a thing that is needed for that application...

**Feross Aboukhadijeh:** Your process is you shave yaks.

**Mikeal Rogers:** No, no... I mean, a mistake that I see people make is that they try to solve a very hard problem embedded in this big application stack with a bunch of other things that might happen. One of the reasons why it's actually much faster to develop this way is because you're taking the hardest problems that you're going to run into and you're sort of saying "Okay, I'm gonna go solve that, I'm gonna solve it in isolation, it's gonna have tests, and I'm gonna know that it works." And then when I go to integrate that into my application where all this other environment and state is happening, I'm only worrying about where and how to wire that up. I'm not worried about solving the problem and also dealing with all the other problems that my application may be forcing into that environment.

**Feross Aboukhadijeh:** Yeah, and if you can do that really well, then you can also avoid sometimes a lot of the difficulty of testing that code. A lot of times I think people end up reaching for mocks to test their code, because it's embedded inside of a big application... And the way they wrote it assumes that they're gonna be able to do some HTTP requests, or they're gonna read some file off the file system, and then now in order to test that code they have to fake the file system, or fake this HTTP server... When a simpler way to do this would be to just say "Why don't we take this code and put it off over here in its own repo, with its own tests, and assume nothing about how it interacts with the environment."

So try to avoid putting in any assumptions about the I/O it's gonna do, and make it sort of purely a stream, or a callback interface, or something like that, and then just have it do its thing in purity, and then you can test that really easily. That's a huge simplifier, for sure.

**Mikeal Rogers:** Yeah, yeah. And I think that we should probably talk about -- GitHub and Npm have really reduced the overhead in creating new packages and publishing them... But there's a ton of tiny things that people like me and Feross will do, that even reduces further the load on creating a new package. Just little things like - you can configure Npm globally for some default settings, like your author name, and your license, and a bunch of other stuff... So then when you go to create a new package, you type "npm init -y" and you just get all of that in a package.json and you don't have to do any extra work.

**Feross Aboukhadijeh:** Dude, I didn't know that. Are you serious?

**Mikeal Rogers:** What?! You did not know that? \[laughs\]

**Feross Aboukhadijeh:** No. Yeah, you're assuming I know that... That's crazy. What I do is I do "cp -r" an old project to a new project, and then I literally copy my old project to a new project, and then I do a Find All and Replace on the old name to the new name. It works great.

**Mikeal Rogers:** Okay, okay... So this is gonna save you a lot of time, because this just sets up the package.json. Then I have a repo called Boiler that is all of that, but none of that is project-specific and none of it has a project name in it. So any files like .gitignore... We can get into this later, but now I have a GitHub action that automates the whole release process, so that's in there just by default now.

So all these things that don't really need a package name, that can just be copied over into any new project, those do just get copied over. There's also a default test in there. So yeah, I do cp -r../boiler, because all my Git repos are in the same directory, so \[unintelligible 00:11:43.23\] into the new one. But for the Npm file, you wanna do init.

Another really cool thing is -- so after you get init and after you do your first push where you're tracking the remote branch, run "npm init -y" again, and it'll fill in all of the repo information for the remote repo as well. Because figuring out where those go is really annoying.

**Feross Aboukhadijeh:** I just use Find and Replace for that.

**Mikeal Rogers:** \[laughs\]

**Feross Aboukhadijeh:** \[12:10\] This is actually a good tip.

**Kevin Ball:** This is like pro tips, Node-specific. This is awesome.

**Feross Aboukhadijeh:** I have some other pro tips, but I did not know this pro tip.

**Mikeal Rogers:** Yeah, that's a good one.

**Kevin Ball:** Awesome. Can I replay back a little bit? I wanna make sure that I'm interpreting it correctly as the relative Node outsider here... So you almost think about things in an analog to how functional developers will think about pure code and not pure code. So you'll separate out all those modules that are solving hard problems and try to make them as pure as possible, so they aren't interacting with the environment in different ways, they're not depending on things... Test those in isolation, build them up as modules, and then plug them together into your application?

**Mikeal Rogers:** Yeah.

**Feross Aboukhadijeh:** Yeah.

**Kevin Ball:** That's fascinating. And are those modules then -- many of those it sounds like are public open source. If you're working on a private project for someone, how do you deal with managing that? Do they live in the same repo, or they are still a separate repo and you use a private registry?

**Mikeal Rogers:** It depends on the problem. If it's a fairly generic problem that isn't working with any proprietary information, I don't know why you wouldn't just make it a public module. Outside people solving bugs in your software is a good thing, so there's no reason not to make that public, unless it contains some proprietary information. And usually it doesn't; usually there's a bunch of generic problems, and how they fit together is the proprietary thing. So yeah, I do pretty much everything publicly; but if you had to do it privately, then your company or your consulting business would have a flow for that, I'm sure.

**Feross Aboukhadijeh:** Yeah. One thing that's cool about isolating modules in this way too is that if you end up learning later that this module -- the way that you solved it is really gross, then all the ugliness and grossness and hackiness is contained; it can't spread across the codebase, it's literally in a separate place. So it's like lower risk almost. Less can go wrong. The contagion can's spread as easily.

And if you get the API design right, then you can even replace the implementation; you can make a different module or update it with a completely different implementation, but keep the same API. As long as that API surface is pretty small, then it's really easy to just throw that module away and replace it with a better one if a better one comes along, or if you wanna rewrite it later... And it's a lot easier when it's directly in your big app repo for the assumptions and the problems with it to spread, and for people to reach in and change internal things, assume a bunch of things about it... Whereas if it's like "No, I'm using this module, I'm consuming it. I use its public API", the interface between the two is really narrow and small... If that makes sense.

**Mikeal Rogers:** Yeah, yeah. And one way to measure this is that for most of these modules I will add 100% test coverage... Because when you break off a problem like this and you've just written the solution, it's actually pretty easy to get 100% test coverage. It's usually like a couple little tests that you add at the end of the test that you were gonna write anyway, to really get full coverage. And then if you just add that into the workflow, it's really easy to maintain that over time... Whereas a big project that didn't have 100% coverage is almost impossible to get to. It's just such a pain.

Another quick tip here, too - NYC has this giant command to run and require 100% coverage everywhere. It's so long that I actually mess it up and forget it all the time, so I wrote an Npm package called Hundred, that you just say "hundred" and then your test \[unintelligible 00:15:38.03\] and then it will just require 100% coverage.

If you put that into your GitHub action, or Travis, or whatever CI that you're using, now your tests just actually fail if they don't get 100% coverage. So it's the tests themselves, and then also the coverage check... So then when you're getting pull requests and stuff like that, if the coverage drops at all, you'll see it, and the test will pass, and they know to add it.

**Feross Aboukhadijeh:** \[15:59\] I love that. You're basically using Npm to post your shell aliases.

**Mikeal Rogers:** Yeah. Because then you can run Npx on them, too.

**Feross Aboukhadijeh:** That's really cool. I should do that.

**Mikeal Rogers:** I think that's actually a shell script, by the way. It's not even a Node script. Hundred I think is literally a shell script.

**Feross Aboukhadijeh:** Wow... I should do that. I have three shell scripts that I use to publish really fast. They're quite handy. I have one called Path, one called Minor, and one called Major, to publish patch minor or major new versions of modules... And I'm sure other people have this too, but it's super-handy. It lets me to everything I need to do to do a release properly, in one step. This is obviously only applicable if you're working on a module and not on an app... But it's so handy. If you ever see certain Npm authors and you're like "How did they publish 15 new versions of different packages today? What are they doing?", it's actually not that -- it's like, I run one command; it's not hard.

**Mikeal Rogers:** I'm gonna go a step further, actually. I don't do manual releases anymore, ever.

**Feross Aboukhadijeh:** Right, right. This is almost as good as that.

**Mikeal Rogers:** Yeah. Every new project is automatically released for the GitHub action. There's this GitHub action that I wrote called "merge-release". What it does is every time that it runs -- so you put it after all your tests pass, and everything; but every time that it runs, it looks at the current Git hash, and the last published Git hash, and then all of the meta data in there... And if "feat" or "feature" is at the beginning of one of them, then it will bump to minor. If "BREAKING" is anywhere in the commit message, it will bump to major... And everything else is just a fix, it's just a patch release. It's actually kind of hard to get all that information to do that roundtrip, so I wrote it all up in this GitHub action, and that's what I use pretty much everywhere now.

So you add your Npm token into the secrets whenever you set up a new project repo, and now every successful merge into master where tests pass is just getting published... Which is another reason why I've been pushing on getting 100% coverage so much too, because then you can be a lot more confident in those releases when they go out.

**Feross Aboukhadijeh:** This is interesting. Even telling me about this approach you've been doing for a while now, the 100% coverage, and all this stuff... But I've been a little afraid to take away that last human sanity check. But one of the things I really like -- actually, you should appreciate this, Mikeal... I can add GitHub contributors a lot easier if I know that I still have a smaller set of people - which might just be me, in some cases - have the ability to do the Npm publishes. So I can add ten people who just did some small contribution to GitHub, and I can see whether they're gonna do good work or not, and I don't have to be afraid that "Oh, I just turned over the keys to kingdom, and they can now deploy malware to millions of people." With this automatic approach you do kind of have to now treat the GitHub access as a really big deal, because that is publish access now, too. They're tied together.

**Mikeal Rogers:** So - a couple things. One is that GitHub did this thing where they -- so you can now give people access to just triage issues and close things, and not fully commit to the repo. That was one of the biggest reasons we were onboarding people so quickly into full commit access, because it was the only way to get help even triaging issues.

The other thing - maybe we just have different experiences with this, but I've been doing this for a long time too, just onboarding new contributors quickly, and all it ended up... Like, with me, it's like, it deferred how much of a pile-on I had in maintaining that project, but it just increased the pile-on for them asking me to release things, because I hadn't handed over the release keys. And when a request moved into an org and then broke out a new bunch of modules, that also became painful, because now it's not Npm access to one thing, it's all of them. And obviously, for historical reasons, this is not in an org, so you can't do that...

There's just a bunch of reasons why this whole setup just gets annoying... And if you can just automatically publish anything, and if you're fairly confident because of the coverage checks that things are good when they go out, I feel like it's just a much better setup.

**Feross Aboukhadijeh:** Interesting. I kind of still wish there was a way to do some kind of a time delay between the Git commit and the publish, so that I could look through every day and see what is about to go out. Maybe it's because I'm into security a little bit; I'm really paranoid about some terrible worm or something affecting my account or the modules I'm responsible for.

**Mikeal Rogers:** \[20:12\] That shouldn't be too hard... What you could do is you could -- oh man, now we're getting really into GitHub Actions. So you can do scheduled GitHub Actions that are cron jobs, basically, that just run in the cloud with all your repo code. Say you wanted to just do weekly releases; every week it would post an issue, and then the issue would say "Hey, we're gonna pull this git hash and do a release of it. Here's everything in it", and then you would get an email about that, and then you would have basically 24 hours to decide "Hey, I'm actually gonna go do that."

**Feross Aboukhadijeh:** I kind of like that, actually. I might look into that. That actually sounds cool.

**Mikeal Rogers:** Yeah, yeah.

**Kevin Ball:** Mikeal, are the GitHub actions that you are using right now - are those open source, somewhere that folks could look at if they're interested?

**Mikeal Rogers:** They're all in my GitHub. GitHub.com/mikeal. They're all in there somewhere. A few of them are even published to the marketplace. Merge release isn't; I really need to get that one in there, I just haven't done the work to update the meta data. But I wrote a GitHub action for Npx, I wrote one for -- this is kind of cool, it will just push back into the repo any files that have been changed or added. This is really useful - you can write these GitHub actions that go and collect project metrics, and stuff like that; or go out and periodically grab information and then create a markdown file for view. You can automate the creation of that every night, and then this GitHub action will push anything that you've done in other actions.

Building on that, I wrote another one that grabs your bundle size - so it'll install Webpack, create a bundle, gzip it, look at the sizes, and then put two badges into your readme, and then push that. Basically, you \[unintelligible 00:21:48.16\] at the end of all of your others stuff, so \[unintelligible 00:21:49.29\], and then "Okay, go and update the current bundle size."

**Feross Aboukhadijeh:** So if I do a commit that just changes the readme to fix a typo, is that gonna trigger a patch release automatically?

**Mikeal Rogers:** Yes, and I actually want that, because that readme gets put into Npm. I've run into cases all the time where the docs are slightly out of date in Npm, because that was really the only commits that we have, and nobody wanted to do a doc-only release... But those docs end up on Npm, so it's gonna be worth doing the release.

**Feross Aboukhadijeh:** What about tests though? I change a test file. That's not ending up on Npm, but that's still gonna do a patch release?

**Mikeal Rogers:** Well, if there's already 100% coverage, you usually don't have new tests added that aren't along with a feature or some other code change. It's rare, so I'm not so worried about that. You can just keep pumping these releases in. It doesn't matter.

**Feross Aboukhadijeh:** I guess I should just do a patch release of all my packages every day. All of them, moving forward, chugging, one at a time...

**Mikeal Rogers:** \[laughs\] Even though nothing has changed...

**Feross Aboukhadijeh:** Yeah. \[laughs\] "It's the latest and greatest."

**Mikeal Rogers:** Maybe instead of on a per-project basis you actually have a cron job that looks at all of your projects, and if they need a release and post an issue about all of them, that you could go through... \[laughs\] This could be like a set of personal automation for yourself.

**Kevin Ball:** Alright, so this has been fascinating... I think it's a good time to take a little break, and then we will come back and maybe loop back a little bit to more specifically Node project structure. I know you two have both talked a lot about packages and libraries, but I'd be interested to explore the app side of things... So let's take a quick break and then we'll come back and dig in more.

**Break:** \[23:41\]

**Kevin Ball:** Welcome back! We are here again, talking more and more about Node project infrastructure. Now, while I could probably listen all day to y'all jam on how to better publish modules, and best practices, and using GitHub Actions - and we will include a bunch of links in the show notes about that - I do wanna get back to this question of project structure.

I'd love to explore a little bit within the framework of shipping apps... Because shipping packages and libraries is awesome, and from what I'm hearing, that's actually a big part of how you think about even apps, but a lot of folks - myself included - spend much of our development time building apps; whether it's a web app, or it's an Electron desktop app, or it's something along those lines. Maybe it's a robotics app, where you're programming some sort of circuit board to do something... Node is everywhere. So I wanna kind of explore that, and maybe how this module focus ends up playing out. It may mean that your core app has very little in it; it just has a main file of some sort... But I'm curious - is that something that either of you can have opinions or can draw on to talk about?

**Feross Aboukhadijeh:** I could talk a little bit about -- the thing is it's so individual... There's so many ways to do this, and I don't wanna claim that I know the best way. When it comes to apps, I feel like I very much don't know what I'm doing. It feels like this stuff is still in flux a lot, and it's not as good as it should be, and that it's getting better and we're gonna get to a better place at some point... But right now, building an app -- I mean, there's certain things that I think are good, that you should do.

To be specific, one thing that was really great from the PHP days is the fact that you can just put files into a folder, and then just FTP them up to a server; just upload them to a server, and then your app was deployed. It was literally as easy as copying files up to the server.

**Mikeal Rogers:** Yeah, none of these routes, and all this pattern-matching... No. The file name is the URL, and that's how you call it. It's so simple.

**Feross Aboukhadijeh:** Yeah, and I think there's some projects getting there... Next.js does this now, I think. It's still not as easy as PHP, because -- I mean, it's a whole Node app, and there's still... You can't just -- like, with the PHP files you could literally just put HTML in the file and upload it... So it's still not as easy, but it's getting there, it's getting closer.

I also think we're solving a much harder problem today. We're trying to do a lot of times both client-side rendering and server-side rendering. To get both of those to work, you have to make sure that all of your components are isomorphic - they can run in the browser and in the server equally well.

The most recent project I've done is called bitmidi.com, and that's all open source, you can look at it... I actually feel very much like while I did my best to make it understandable, and I'm pretty proud of how it turned out, I also think it's quite complicated, and I don't know how to make it better... So I don't know if I'm the best to talk about this. I'd actually like to hear from people who think they know what they're doing here.

**Mikeal Rogers:** Well, BitMidi is mostly a front-end. I think the question was more specific to back-end, I think, with like Node projects.

**Kevin Ball:** Well, one interesting there is -- I feel like the front-end frameworks, some of them, have started to instill this. And even if it's not core in the framework, they've created boilerplates with standards. Create React App started this, and then you have Next doing it in React; Vue CLI has one structure, they've got Nuxt, which is very similar to Next... Things like that.

\[28:07\] So the front-end frameworks, perhaps because they are more commonly building apps and there's a more visible structure in terms of the URLs and things like that, they seem to have been pushing more strong opinions on structure.

I was looking for an equivalent in the back-end actually, and -- I don't know, does Express have a standard for how they lay things out in the file system?

**Mikeal Rogers:** No, not at all. One of the reasons why front-end frameworks do this is because they have a kitchen sink approach - they ship with every feature ever. And sitting there and configuring each feature and saying which of these things you wanna use is actually really problematic from a developer perspective. So one of the reasons why they leverage all of these patterns and all this structure-by-default stuff is because from that structure they can infer a bunch of things that allow you to not have to go and figure everything.

The back-end doesn't have this. I don't know of any popular kitchen sink back-end framework. On the back-end everything is still gonna be a lot of individual modules that you're gonna wire together. Even some of the larger stuff like Express actually doesn't have a lot of these patterns, because it's a fairly simple API. But based on how you're gonna deploy your application, you're going to have different structures based on that.

We talked about Next a little bit... Another \[unintelligible 00:29:24.23\] they're a cloud hosting provider called Now. Now has this monorepo structure; it's actually quite nice, and kind of similar to PHP, actually... Names of things can just be the URLs by default, and stuff like that.

Let's just define monorepo real quick, because I've seen that thrown around a lot... So in a normal, smaller Node package, or a smaller Python package, or whatever, you would have a package.json, or a setup.py file, and then the source code for just that package. And it's just one package, in one repository. The monorepo is several packages that are being developed in one repository. That is like a not-great pattern for publishing modules into Npm; there's some really problematic behavior when you don't have a 1-to-1 relationship between a repo and a module. But when you're building an application, where it might have several different serverless endpoints or different services it needs to run as part of the application, it's actually really nice to do all of the development of all the services in one repository... So that you're not trying to coordinate between two repositories that have two different versions of a back-end service, and one relies on the other one, and like "How do you do that...?"

**Feross Aboukhadijeh:** This is very anti-microservices...

**Mikeal Rogers:** Well, all those microservices can be in that one repo.

**Feross Aboukhadijeh:** Yeah, I think they're orthogonal in some ways...

**Mikeal Rogers:** Yeah. If I have a dependency on two of these services, then they all need to go out at the same time \[unintelligible 00:30:42.00\] and the only thing that we have that has a consistent hash for the entire state of the tree is a repo, so...

**Feross Aboukhadijeh:** But then do you update all the microservices in lockstep?

**Mikeal Rogers:** Yeah, yeah. I have a GitHub action where "unsuccessful pushing to master", it'll go and redeploy everything.

**Kevin Ball:** I have seen a monorepo set up with services that did not necessitate redeploying everything. It would keep track of dependencies across them basically by having a strong concept of a public API for each service, and keeping track of when did that change... But it was more ad-hoc than -- I think there were still people in that process; it was not a fully CI-driven scenario.

**Mikeal Rogers:** Yeah, that's really painful. I wouldn't recommend -- like, if you can associate a hash (especially the hash with the repo) with a deployment, you can just do all of that on your own. Because then you can just look at when was the last time that anything in that directory changed, and what was the hash of that commit, and then just compare it with the current deploy and know if you need to redeploy or not on any new check-in that happens.

So it's easier to build that kind of stuff on top of this hash-based structure than it is to try to make all of your developers really diligent about what public and private APIs are, and if this change really impacts them, and messaging all of that. Once you're relying on humans for that information, it becomes highly problematic, and it's as reliable as SemVer version numbers are, which is to say it's not...

**Kevin Ball:** \[32:16\] Not at all.

**Mikeal Rogers:** \[laughs\] Yeah. SemVer would be great if nobody ever shipped bugs; but it turns out that people ship bugs in their software, and so those patch releases could break things... \[laughs\]

**Kevin Ball:** I love that quote... "SemVer would be great if nobody ever shipped bugs."

**Mikeal Rogers:** Yeah, it would work perfectly.

**Kevin Ball:** Awesome. So -- actually, do you wanna dig in a little bit on that monorepo then? You talked about how essentially each file is associated with a URL.

**Mikeal Rogers:** It's actually a whole directory. A whole directory would be a service... Because that directory then needs a package.json for all those dependencies. There's a few tools that you can use that are going to push a structure like this on you, similar to what front-end frameworks do.

If you're using ZEIT's service Now, they have a great utility that's really simple; the DX on it is brilliant. If you're just coming to this, I would highly recommend going that route and using their stuff. If you're using Lambda, there's a thing that Brian LeRoux wrote, called -- it's at arc.codes. It's now in the JS Foundation, it's a big open source project. It basically sets up a lot of the structure for you, so you have both a directory of files that are shared between all of your back-end services, and then also a place for each of those back-end services to live with their own package.json file, and each of those get deployed to their own Lambda... And they have a whole setup for having a staging environment, and a production environment. You may not like that structure, and so you may not wanna use that tool, but now that the back-end deployments are getting as complicated, they are imposing some of this structure the way that a lot of front-end frameworks do.

**Feross Aboukhadijeh:** This is all too much for me. \[laughter\] My setup is super-simple, and I don't know if that's because I don't have a need for this, for just the scale of problem-solving... But what I do is I have a Jenkins server - old-school, literally a Jenkins server, and what it does is it just gets notified anytime I push to this Git repo; so then whenever I push to Git, Jenkins is like "Okay, time to redeploy the website." So then what Jenkins does is it just SSHes into a server, Git pulls, and then restarts. That's basically what it's doing; it has a little bit more sophistication than that... But the point is basically what I'm doing is I have a server with a folder, and then I run Node... It's really simple, I really understand everything that's happening; I love it, I love it. This one server - if there's a problem, I can SSH in and I can look at it...

**Mikeal Rogers:** \[laughs\] Okay, so for people that don't wanna manage a server running Java and Jenkins, and don't wanna edit those XML files that you did years ago to get all this set up... \[laughs\]

**Feross Aboukhadijeh:** One thing you can do is you can use some other CI service - CircleCI, or maybe a GitHub action, honestly... Because a GitHub action could easily SSH into your actual prod server; you could put the key in there in the Secrets section that GitHub Actions supports, and it could deploy it for you. You wouldn't even need Jenkins. Actually, that's a great idea. I should get rid of Jenkins now.

**Mikeal Rogers:** Yeah, yeah...

**Feross Aboukhadijeh:** I don't wanna pay somebody for -- whatever, CircleCI, or something like that... So I just use Jenkins. But yeah, I should \[unintelligible 00:35:20.10\] But what I love about this is I know that I have a single server that I can go to, and that's where all the things are; and if there's any problems, they're gonna be there.

I'm at this conference right now called Open Source Summit, and there's this -- what was the product...? I think it was Datadog - they were showing this crazy visualization of a bunch of microservices being deployed, and they were all little hexagons. There were thousands of them. And then they were like "Look, we can visualize... We can say 'Show me all of the microservices that that team is using, or that that team is using' ", and there were these thousands of hexagons flying everywhere, into clusters, and stuff... And I was like "Dude, that is insane!"

**Mikeal Rogers:** \[laughs\]

**Feross Aboukhadijeh:** "You have thousands and thousands of these little things everywhere. How do even know what's going on?" Maybe I'm getting old, or something, but that seems like craziness to me.

**Mikeal Rogers:** \[36:06\] Again, I'll plug the ZEIT stuff a little bit more... They have this very brilliant set up, that I don't know why other service providers don't do. Essentially, whenever you do a deploy, whenever you push new code for a service, you get an URL that has a hash in it, that is just for that deployment. So there's no way to deploy to production. You do a deploy, you get a unique URL, and then at some point in time you say "Oh, you know what - I want that to be productioned now", and you basically alias production to that.

This is a really nice setup, because for local development you can just keep pushing new URLs, and testing them, and looking at what happened... It's a really nice setup for CI, because as things are coming into a pull request, if it wants to test against a live server, then it can just update this hash-based URL and test everything and make sure the production works with all of this new code... And then when something finally lands in master, there's actually already a GitHub action for ZEIT, that will just re-alias all the production; make sure that everything there is deployed, and then alias production to it.

**Feross Aboukhadijeh:** Can you debug that easily? Can you go in and see what's going on and poke around the server?

**Mikeal Rogers:** It's all in serverless architecture, so it's not like you can go and poke into the server itself, but ZEIT has a very nice log page that does log aggregation, and CLI for the logs as well. If you've ever dealt with raw Lambda before, you know how painful the logging setup is, and how this is not a tiny feature.

Also, I've been working with Cloudflare workers recently, and there's no logs. And when you hit an error, you get a 500-page that tells you nothing, so... Literally, the process of debugging it is redeploying, and then in-line returning new responses, with JSON objects giving me my debugging information over HTTP, because there's just no other way to get information out.

**Kevin Ball:** I haven't used it extensively, but I think Netlify has a similar type of setup, where you can actually see each deploy; every change can do a new build, it generates a unique URL, and then you can decide what gets pushed to production.

**Mikeal Rogers:** Yup. That's the right setup. I'll go out on a limb and say that's the right thing to do. Look at the code in the repo, look at all the state that you're deploying, create some hash or unique identifier, and then make that available. I really don't like this continual pushing to a staging server; I don't really know what that means when multiple people are trying to work on something at the same time... Or when you have concurrent pull requests coming in, that are trying to work with that. That system just doesn't seem to work for me.

**Feross Aboukhadijeh:** For my system, anytime something lands on master in my GitHub repo, it just goes to prod. By the way, that setup actually makes it quite fun when I get a PR from Greenkeeper, that's like "Oh, we updated this dependency. All your tests pass", and I click the big, green Merge button. \[laughter\] That's not just merging, that's actually me having a lot of faith, because that's about to go out to production right now if I click it.

**Kevin Ball:** Wow... I feel like I am way more paranoid at these things than either of you two are.

**Mikeal Rogers:** I don't know how you guys deal with worrying about code getting into master, and also worrying about code getting into releases. Worry about one thing, which is code getting into master.

**Feross Aboukhadijeh:** That's what I do worry about!

**Mikeal Rogers:** Yeah, yeah. I don't why you're okay with this and not okay with automatically publishing modules when things go to master.

**Feross Aboukhadijeh:** Oh, interesting. That's a good point.

**Mikeal Rogers:** Because it's effectively the same thing.

**Feross Aboukhadijeh:** That's true, yeah. Huh... So if I had to explain what the difference is - I guess most of these apps, or actually all the apps that I've worked on are just me... So it's like, I put it on master and then I just -- I don't need that extra step; I want it to go out. With modules, it's like - I'm adding people I've never met in person to the repo. So I trust them, but I also trust them and verify. I only trust a few people with the full thing, but then most of the other people just get access, if that makes sense.

**Mikeal Rogers:** Well, in these projects, do you have a policy where everything has to be a pull request, and there's no just pushes to master?

**Feross Aboukhadijeh:** Yeah, that's true, I do.

**Mikeal Rogers:** \[40:09\] Yeah. Well, then you can just make a GitHub action that will automatically fail the whole build if anybody does a push with that that didn't come from a PR. So then you're trusting in your PR process, basically.

**Feross Aboukhadijeh:** That's true, yeah. Then you have to have two collaborators who both turned evil in order to compromise... Okay, that's actually reasonable. I would accept that level of risk... Okay.

**Mikeal Rogers:** Yeah, yeah. Some of this is taking some of the things that you already do socially, and that you enforce by hand, and turning them into automation.

**Feross Aboukhadijeh:** Okay, that's cool. I like it. Alright, so this podcast is basically Mikeal convincing me of his crazy ideas...

**Kevin Ball:** I know... I'm listening to this and I'm like "Oh man, I have so many things I need to improve and aspire to." One layer that I have to think about a lot because I'm mostly doing work for clients that are apps is there's a UI testing and approval layer, that is people who don't grok code. That's where right now a staging environment happens. But the build per merge or commit, and having a flow like that, would solve that really well, too. Just send that to them to test.

**Mikeal Rogers:** I've seen people -- this is insane... ZEIT has a desktop utility where you can just drag and drop stuff into it, and it'll give you a unique URL. I've actually done this, where I've taken a slide deck and exported to this HTML, and then just dropped it in there, and then sent that URL to somebody that I just wanted to see that slide deck... And I didn't wanna deal with sending them a keynote file, or something.

Yeah, it's actually a really common workflow, where you can easily get these unique URLs... They're not really all that guessable; there's no way to get a list of all of them, unless you're authenticated, so... They're relatively secure.

**Kevin Ball:** This may be going a little too far, I feel, but how do you deal with changes that involve data migration?

**Mikeal Rogers:** Yeah, that's a big one. This is my experience with it, and I think part of this is because I now live in this content-addressed space, where all the data that you ever work with is hash-based, and it's these \[unintelligible 00:42:01.15\] structures... And you basically have to deal with data as long as people link to it. You don't really get to migrate the data, you just get to change how you interpret the data.

**Kevin Ball:** That sounds like a nice space to live in...

**Mikeal Rogers:** This is much more problematic actually than the migration space... Because if you have control over the data, you can just migrate it to the new thing, and then never worry about the old stuff again. But what I tend to do and how I tend to build these things though is that I will make it so that the setup works with both data sets, with the data in both formats or ways, and then once that is working, I will push it, and then at some point in time maybe either write a migration script to move data over, if i can do that, or wait for people to just not be using that old data structure anymore, and then migrate.

**Feross Aboukhadijeh:** I think that's how it works too in the centralized setup as well. You deploy code that supports both formats, and then at some point you just run the migration script on the data and move it to the new format.

**Mikeal Rogers:** Yeah, yeah... Now that these teams are working with a lot of Lambda stuff, and a lot of event-based architectures, there's a lot more opportunities for you to just say "Oh, okay, my thing is a new service, and I have new data that's hanging off of the old data, and I just have a hook whenever any new data is created, to mutate it and put it in this other thing." So these two things can live side-by-side for quite a while and be relatively consistent, or optimistically consistent, I guess. I see bigger teams doing that a lot more... And I don't know if that's necessarily "the best" setup, but if you've ever tried to work with another team to do a data migration through an infrastructure team, it's just a huge process. So if you really want to get out a feature and try something, this is a much faster flow that you can work with.

**Feross Aboukhadijeh:** \[43:48\] I also just wanna zoom out for a second and also just mention that -- here's a thing I worry about with some of these discussions... There's probably a bunch of people who are listening to us talking about this now, who are like "Oh, I've gotta go change my process now. I've gotta do GitHub Actions because Mikeal said so." Maybe you should do that, but also, if what you're doing now is working and you have other higher priorities, you don't have to drop everything; it's not like some huge problem that you have.

My process currently with my Jenkins server, even though you laugh at it, it actually works great. So I'm not actually in a huge rush to go and change it. Maybe if it breaks, or I need to update it and it's really painful, maybe I'll decide at that point "Oh, GitHub Actions - maybe it's time for me to look at those again." But I'm not in some huge rush to go and--

**Mikeal Rogers:** Well, I'm not asking -- but I don't think it's all that interesting for an audience to hear what your current setup is that you wouldn't do again today; I think what they would like to hear is a thing that they might do...

**Feross Aboukhadijeh:** It's really easy to over-engineer stuff, too. You have to be careful. I'm not saying that you did, but always listening to different podcasts and reading different blog posts about everyone's thing that they've just started trying out, that they don't know any of the downsides to yet, because they've just started using it two weeks ago, and they're still really excited about it, and then you start to adopt all that stuff, then you eventually just end up with a bunch of unexpected problems that you don't know.

I understand all the downsides of my Jenkins server very well. I know those problems. It's great, I don't have to worry that I'm gonna get some unknown problem now, that I don't know what to do with.

**Kevin Ball:** There's also an aspect of rate of change. Because every new thing that you adopt has a learning curve, and as you climb that learning curve, you will make mistakes and cause problems for yourself. So if you're in a place now, you don't wanna try to adopt all the new things, all at once, even if you know that you want to move in that direction; you wanna pace things out.

I think we're actually -- Mikeal, you had one more thing to say, but I think we're getting close to a break. This might be a topic worth an entire segment, of like "How do I get there from here?"

**Mikeal Rogers:** Yeah, yeah. I mean, I think that this is worth talking about right now, because GitHub Actions have changed a lot of the math of what the cost of adopting this stuff is. I was doing automated releases with Semantic Release for quite a while, and even with my load of dealing with releases for all these modules, I stopped using it at some point, because the complexity of managing it was too much. And a lot of that had to do with how complicated that script was, how it had to talk to Travis, and then run another thing, that ran another thing... All of these different services that talk to each other introduce additional breaking points, additional complexity, and new dashboards to look at, and all that kind of stuff.

It's not really until GitHub Actions where this is all just in the same repo, it's a tab in the existing UI. And there's sort of an ecosystem around it, too... So when people update an action and improve the code, you automatically get that.

A lot of the pieces are there now where you don't need to have a lot of load on your time releasing your modules, for it to be warranted for you to just go and automate those releases... Because now it's a lot easier to integrate. But I don't think that that was true before Actions.

**Feross Aboukhadijeh:** We should call this Mikeal's Love Letter to GitHub Actions. This whole episode.

**Mikeal Rogers:** \[laughs\]

**Break:** \[47:07\]

**Kevin Ball:** Okay, let's get back into it and talk about "How do we get there from here?" I have been just nerding out, listening to the two of you talk... There's so much awesome, cool stuff that is possible. One of the crazy things - and one of the things that, Mikeal, you brought up in a previous episode was because this is an ecosystem that's growing and very active, stuff is changing all the time, best practices are changing all the time... So I wanna use this segment to pick your brains on how do you adopt change? How do you keep up, how do you move things forward? If you are coming into this and you've been doing the same thing for the last five years, which as much as that sounds really painful, particularly to see these moves, is I think not that uncommon, particularly if you've been working inside larger companies, just kind of doing your thing.

How do you adopt change incrementally? How do you reduce the risk? How do you get there, from wherever you happen to be? I'm gonna throw that first to Mikeal, as the most extreme example of being on the cutting edge of anyone I've talked to recently. How do you adopt change?

**Mikeal Rogers:** I get better at this the more experience that I have, but I try to evaluate whether or not this is a change in a linear set of changes that we can expect to happen to the whole industry, or at least the section of the ecosystem that you're involved in... Or if this is just another option that people are exploring, that may not have that long of a lifecycle.

A good example of that is CoffeeScript. A lot of people thought that that would be the thing that they would continue using indefinitely, and that is certainly not the case today.

**Kevin Ball:** I blame it on the Ternary mishap.

**Mikeal Rogers:** You can blame it on a lot of things, but I think the main thing is that the language caught up, and the features in the language that were the most interesting in terms of CoffeeScript landed in the language, and all of a sudden the delta between them didn't really warrant an entire compile step anymore.

**Feross Aboukhadijeh:** Do you remember IcedCoffeeScript?

**Mikeal Rogers:** Yes... \[laughs\]

**Feross Aboukhadijeh:** That basically added async/await to CoffeeScript, right? Something like that.

**Mikeal Rogers:** Yeah, yeah. But I think -- was that using the crazy... There was like a fork of Node that--

**Feross Aboukhadijeh:** No, it didn't use fibers, I don't think so...

**Mikeal Rogers:** Oh, okay, okay.

**Feross Aboukhadijeh:** Sorry. \[laughs\]

**Mikeal Rogers:** Man, fibers... You just took me back to like the Node.js email list in 2012. \[laughs\] Anyway, don't look at the Node.js email list; it's a bad idea. I don't even remember what we were talking about, that's how much that threw me back. Oh yeah, okay - processing change. Yeah, so if you know that something is happening linearly, or you're really confident that it's a linear change, and that you're not just picking a different opinion, or a different sort of parallel track, it's always good to just do the work of adopting that. The longer that you go without adopting it, the harder that it's going to be to adopt it in the future. And if whatever you're working on, you expect to be alive in the future, then go ahead and do that.

Also, keeping things as smaller modules that do one thing makes upgrades a lot easier. I would say that's not universally true, though. It makes upgrading certain components easier, when just those components change, or you just find a new version... But, for instance, the migration in all of Node's ecosystem, from callbacks to async/await, is a very big transition. And the more modules that you have, in like a big dep tree, the harder that transition is, because you have to update all of them, and you have to \[unintelligible 00:51:55.14\] all of those updates. It's pretty painful. We're doing it right now in IPFS actually, and it's a huge effort... But at the end of the day worth it, because we know that things are moving in that direction permanently, and we expect to be alive and we expect this project to be used by more people in the future, not less... So we should definitely take down \[unintelligible 00:52:13.22\]

**Kevin Ball:** \[52:17\] A couple of things I'd love to dig in... One is just like how do you make that distinction between "This is a linear set of changes", as you described it, "that's going to impact the entire industry", versus a parallel option? People thought CoffeeScript was the future.

**Mikeal Rogers:** Yeah... So at the time you could believe that a little bit easier, because TC39 was doing roughly nothing, and hadn't put out much in a while. That's no longer the case though, right?

You can tell what the future of the language is based on what they're doing... And if you wait to adopt things until they're at least finalized in terms of specs, and implemented a few places, then you're pretty safe to know that that's where the JS language is going, for instance. You'll still have cases where a feature may ship and then people will just sort of decide not to use it; that's certainly a possibility. I haven't quite seen it yet, but we've certainly seen it with older syntax; nobody uses the with statement, for instance. Maybe minifiers, but...

**Feross Aboukhadijeh:** Generators also aren't really that common, right?

**Mikeal Rogers:** Generators are relatively new, and... Generators sort of suffered from the problems that Node had. I think that generators would have been much more popular if Node had not stagnated completely at 0.10... Because it wasn't until 0.12 - which not many people adopted, because it was never really stable - that they were even available behind a flag... And then basically the version right after that, they came out from behind that flag... So they were available in browsers for years, while Node was not shipping. And then when we did io.js and put out the first io.js release, it was just there by default, and all of a sudden the people in the generator community were super-happy with that.

So that had kind of like a lag in adoption, so people haven't been able to use them as long as you would think. And then also, until async generators, which just in the last major release of Node did not print a warning when you used them, could you really do a lot of the async stuff that you actually wanna use generators for.

There's not a ton of compute-only things that you really need the efficiency of a generator for, and that you can't just use one of the many array methods for.

**Feross Aboukhadijeh:** That makes sense.

**Kevin Ball:** What about things like, for example, the new publishing policies, or GitHub Actions with things like that? Stuff from our previous segments; it sounds like, Mikeal, you're really pushing the boundaries on that, really using that for large numbers of things... Whereas, Feross, you were highlighting a sort of a sense of resistance, and concern about security, and things like that. If you were in that position - say for example you manually deal with your releases right now; maybe you're doing some amount of CI automation, but you make that decision manually... And you listen to this and you hear Mikeal saying, "Hey, push it, all the time. Your gate should be on approving your PR. If it gets merged, it gets released." How would you go about managing the risk of making that change?

**Mikeal Rogers:** I can maybe help you out here a little bit... I hope. I think that what you may be interested in is it's not just like it's a code change, or a process change; there's a bunch of other implications to that process change, and a bunch of other secondary effects that you have because of the initial process... And it takes some work to understand what all of those are. Your notes about other contributors having access to commit and not publish - that basically changes the permission model.

**Feross Aboukhadijeh:** Yeah. I've added some people to the StandardJS repo that did translations, for example; they translated the readme. I'm not saying they're not trustworthy; they probably are. But just from a security, minimal access, defense in depth - all the good security practices - you don't wanna give somebody access that they don't need. So they would probably need to switch to a different permission. But the problem is -- yeah, I guess they could still send PRs, and they could do triage, or whatever, but they shouldn't get a commit bit, I think, in that situation.

**Mikeal Rogers:** \[56:24\] Or you can change the workflow a bit, so that if somebody tries to merge their own PR, or they try to push without a PR, that it gets rejected. You can automate some of the other things to satisfy these same needs, and not just like "Adopt this right away."

**Feross Aboukhadijeh:** Right. One thing I like about GitHub Actions stuff is I think probably if I were to adopt this - and I'm probably going to... I wanted to make the point about thinking about stuff carefully before just jumping on the bandwagon, but I think this is probably something I'm gonna adopt. I would probably start by trying to eliminate parts of the Jenkins stuff. All Jenkins does in my situation is it just listens for Git pushes, and then it runs a command on a server; it SSHes in and runs a script, basically. That seems pretty easy to just put into a GitHub action, so I'll probably start by picking one website (like BitMidi, or something) and then just saying "I'm gonna use GitHub Actions to deploy it", and then if it works out nicely and it doesn't cause me problems, then at some other point I will swap over all the sites to do that, all the sites I manage, not just that one. But I would test it on one first.

One other thing I would do - I like to balance between different kinds of work. If I find myself doing a lot of meta work like this, and not enough real work, it can be kind of demoralizing to get caught up and just like... I'm just porting stuff from the callback pattern to the promises pattern, and I'm doing all this meta repo management, and setting up GitHub Actions... If I was doing that for like a week or two, that'd be too much. So what I'd try to do is pepper in a little bit of actually shipping some stuff, and then "Oh, okay, now's the chance to improve process a little bit." And just mix the two together so I'm always improving process a little bit constantly, and not just doing it in this one big push. That's a riskier way to do it, and motivationally for me it's not as nice.

**Mikeal Rogers:** I got into this habit maybe 13 years ago, when I worked at the Open Source Applications Foundation... Because we were building this personal information manager and we were thinking really deeply about how people do their work and what their process is... So I basically cut out half a day a week where all I would do is test out new tools to manage my workload, and to-do lists, or how I'm triaging my email, is there a better way to do that... All my personal workflow stuff.

I don't set aside on my calendar half a day anymore, but it's just in my head now. I think that I probably spend roughly half a day a week just doing things that are going to pay off in the future in terms of workflow. I think that's generally a good process. I think people don't do that enough.

**Feross Aboukhadijeh:** That's awesome. I like it. That sounds like about the right amount, too. Half a day a week, that sounds good.

**Mikeal Rogers:** Yeah. Also, when you're taking on something new, do it in a new project, or in a smaller, more recent one first. There's no reason to take on the biggest thing first. And also, this may not be solving a problem that you have, and it's just like an improvement you wanna make, so don't port it onto another project that actually does have problems, and be like "This is your solution, even though it's completely unrelated."

Some people will say "Oh man, I have my PHP site on this $5 Droplet, but it's starting to max out the CPU, and the memory etc." And people would be like "Rewrite it in Go. Rewrite it in Rust." And it's like "No! Sign into Cloudflare and cache it." Then all your problems are gonna go away.

**Feross Aboukhadijeh:** Upgrade it to a $10 Droplet, instead of a $5 Droplet.

**Mikeal Rogers:** \[59:56\] Yeah, yeah. \[laughs\] I mean, caching solves most performance issues, actually. People really obsess about the most performant compute patterns... But unless you're doing ML, just caching, please. Caching solves most things.

**Kevin Ball:** Yeah. Those sound like great pieces of advice. Pick a project at a time. Don't do one that has real problems; this isn't solving real problems...

**Mikeal Rogers:** Yeah... \[laughs\]

**Kevin Ball:** And I really like your point, Mikeal, of carving out time to invest in improving the process. So it's not like you're spending all your time on it in chunks, as Feross mentioned; that would completely burn me out.

**Mikeal Rogers:** Yeah.

**Kevin Ball:** I try to imagine spending two weeks on entirely GitHub Actions and workflow automation... I would scream. I would be done. But half a day a week sounds very doable, and it probably adds up very quickly.

**Mikeal Rogers:** Yeah, yeah. People do a lot of investment in themselves; they'll set aside time to read books, and stuff like that... And it's surprising to me how many people don't think about their workflow generally, in their everyday work, and improvements they could make to that, on the same kind of rigorous schedule. That's just generally a good practice, especially if you're a programmer.

Another thing too, we were talking earlier about how even when we have an application, we'll take the hardest problems and break them into these modules. One of the cool things about that is that you might have this really big task that's gonna take you a month, but when you start to break it into these small modules, you get a lot of small, accomplishable things, that really give you a sense of progress over time. You get to sit for a minute and go like "Oh, cool, I did that. That works now. I'm done." And move on to the next thing. And also, it gives you a really good idea of what your actual timeline is, because if one of those stretches out, you know the whole thing is stretching out.

I feel like a lot of times people take on these big, massive projects, and when you do them all as one big thing and one big repo, you don't have enough check-ins and wins, and you just kind of burn out halfway through.

**Feross Aboukhadijeh:** Totally. 100%, yeah. It's important to have regular wins, regular achievements, regular momentum, visible progress.

**Mikeal Rogers:** Yeah, yeah.

**Kevin Ball:** And when it comes to adopting new practices and workflow automation, I imagine there's a very similar thing... Like, "Okay, I'm gonna do one thing. I'm gonna try GitHub Actions for XYZ, and that's it." That's a project. Then you can celebrate when you finish it, and all those other fun things.

Alright, anything else y'all wanna close on?

**Mikeal Rogers:** No, nothing that I can think of. I think we covered it all. I've convinced Feross to adopt everything that I do, pretty much, so...

**Kevin Ball:** I know, yeah. Feross, I'm gonna be looking for a massively-increased pace of minor releases, with readme updates, and everything...

**Feross Aboukhadijeh:** Oh, man...

**Kevin Ball:** Awesome! Well, thank you both. Thank you Feross, thank you Mikeal. This has been a super-fun episode, and I hope you, the listener, enjoyed it as much as I did, because I was just sitting here, sitting back, taking in this knowledge... It's amazing.

**Feross Aboukhadijeh:** I feel like we got a little into the weeds repeatedly there, because we were just like "Remember this random thing from back in the day...?"

**Mikeal Rogers:** \[laughs\] We did that once.

**Feross Aboukhadijeh:** Hopefully people don't mind that...

**Mikeal Rogers:** Yeah, yeah.

**Kevin Ball:** Y'all have very interesting weeds. \[laughter\]

**Mikeal Rogers:** It's been like ten years since Node came out. I feel like we should get some of the people that have been around the whole time and just do a long, maybe multi-hour, just talk about each of these different things that happened, and all the stories in there... Because it's been crazy. A lot of crazy stuff happened in there.

**Kevin Ball:** Let's do it! Alright, I'm looking at you to organize, right...? \[laughs\]

**Feross Aboukhadijeh:** It's been long enough too that you can probably talk about some more stuff now, right? Like, the politics is more in the past.

**Mikeal Rogers:** More like I no longer run the Node Foundation, so I'm not responsible to the members anymore, and I can talk about whatever I want... \[laughs\] But that's the main thing that's changed.

**Feross Aboukhadijeh:** Alright, let's do it! That sounds like a good episode.

**Kevin Ball:** Let's do it. Alright, you heard it here first; coming soon to a JS Party episode. Behind the scenes at Node, over the last ten years. I'm gonna hold you to this, Mikeal. We're gonna make this happen.

**Mikeal Rogers:** It's gonna take a while to get all of those people to agree on a time slot together, especially if we wanna get Ryan.

**Kevin Ball:** Alright, let's make it happen. If you, the listener, wanna make this happen, harass Mikeal on Twitter, or somewhere else, and say "When is it gonna happen?!"

Sounds good... Thank you, gentlemen. Thank you, listeners. We'll catch you next week at JS Party!
