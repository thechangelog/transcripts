**Mikeal Rogers:** Hey, welcome to JS Party, where it's a party every week with JavaScript. I'm Mikeal Rogers...

**Alex Sexton:** I'm Alex Sexton...

**Jessica Lord:** I'm Jessica Lord

**Mikeal Rogers:** Jessica is filling in for Rachel this week, because she's at the conference. It's awesome.

**Jessica Lord:** I've already failed! \[laughter\]

**Mikeal Rogers:** We're lucky enough to have her back. And our first topic today is the release of Node.js version 8 - not to be confused with V8 the engine - and to talk about that we've got a guest on, James Snell. Why don't you say hello, James?

**James Snell:** Hey, how's it going, everybody?

**Mikeal Rogers:** Alright...

**Alex Sexton:** No one answered him... \[laughter\]

**James Snell:** It's going well, James... Really well. \[laughter\]

**Jessica Lord:** Doing well...

**James Snell:** That's good!

**Mikeal Rogers:** Yeah, so James is actually now the director of the TSC; he sits on the board of directors for the Node.js Foundation... But why don't you tell us a bit about what is in Node.js version 8?

**James Snell:** Oh, there's lots of stuff in version 8.

**Mikeal Rogers:** We're gonna need more details than that. \[laughter\]

**Alex Sexton:** Alright, we'll see you next week. It was nice talking to you all. \[laughter\]

**James Snell:** As I said, it's one of the largest major releases we've had in quite a while.

**Alex Sexton:** I mean, 8 is at least two bigger than 6, and it's way more than 4.

**James Snell:** Oh yeah, it's twice as big as four. I think there were somewhere around just over 150 semver major commits in this one, so it's actually pretty significant. A number of the high points is we have what should be the final API for async hooks. They're still experimental, but that's there... There is the new util.promisify() function which we can talk about... There is the Node N-API, the evolved version of the native abstractions for Node that actually allows ABI stability across Node versions, which is really cool...

We have some other things like WHATWG URL implementation; it's not officially supported, no longer experimental... And a number of other things, but those are probably the most significant new things.

**Mikeal Rogers:** Dig into that N-API thing a little bit, because it's like behind a flag, and stuff like that. Tell us a bit more about that in detail.

**James Snell:** N-API - the whole purpose of it is to allow native add-on developers to write to an API that is going to remain stable, that is guaranteed to remain stable across Node versions.

\[03:58\] Previously, if you were writing a native add-on, you were writing to the V8 API, so you were writing to the native abstractions for Node, the nan tool. The problem with those is that every time V8 changes its API, you end up having to recompile. Every time you install a new version of Node - a new major version - you end up having to recompile.

The new N-API is really designed to make it so that a native add-on can be written once and used across multiple versions of Node without recompiling on a single system. It's even possible to write a module that works both against the V8 version of Node and the Chakra Core version of Node... So not just different versions of the V8 engine, but a completely different engine altogether.

The idea is to reduce maintenance costs and development costs over time, and make it significantly easier to actually build and deploy and use these native add-ons. It's pretty exciting.

**Jessica Lord:** That's interesting... I have a question - maybe it's unrelated. I wonder if this will help Electron development at all.

**James Snell:** It should. I'm not very familiar with what native modules Electron is using, but it should. Anything that interfaces with the native layer should be helped significantly by this. It should allow those modules to become more stable over time, and it should allow the upgrade experience to be far less irritating. You don't have to do an npm install and rebuild every single time you update your Node version.

**Mikeal Rogers:** I think the big thing with Electron too isn't that it is using native modules, it's that when you use native modules in your Electron app, they need to be pointed at the version of Node that goes into the Electron app, not the one that you're using on the command line. So yeah, this will definitely help that, because...

**Jessica Lord:** But it's also that Electron sometimes breaks ABI because it has to patch Node to work with that V8, since V8's moving faster. I think that's also a problem. Maybe if ABI is getting more stable in general, maybe it helps everybody.

**James Snell:** Yeah, that's the goal. The whole reason N-API exists is because a year ago we started taking a look at what we were gonna do with Node Chakra Core and how we were going to enable the module ecosystem to remain stable as we go through this effort of enabling other VMs. So it's just the problems of different versions of the same VM changing ABI. We were really determined that the first step before we really went down that path was we had to provide a stable ABI that would be guaranteed to remain stable even across different versions of these VMs.

I think as we go down this path - it's still very early - it will make things like Electron development easier. We have ways to go.

**Mikeal Rogers:** It says in the release notes here that you did a bunch of good stuff around Promises. Can you tell me a bit about that?

**James Snell:** The key thing with Promises -- there's two things in particular. There's this new util.promisify() which will take generally any callback style async API - so if you think of like fs.readFile, right?

**Alex Sexton:** That error-first thing...

**James Snell:** Yeah, anything that takes the error first and then some set of arguments afterwards - it will take that and automatically wrap it in a function that is Promise-enabled. If you do util.promisify() fs.readFile, then you'll get a Promise back -- a function that returns a Promise back that you can use with async/Await and that kind of thing.

\[08:00\] It works probably for 80%-90% of the functions, the callback-receiving functions in Node. For the ones that don't quite fit the pattern, like fs.exists, for instance, that doesn't have that error-first pattern, there is a way of customizing the source function, so that you can customize the way that that Promise is made, so that it'll still work. We are going through a number of different functions within core and adding this customization. Right now there's a couple that don't quite work, and we're working on fixing those. But it's also something that any other module that wants to use util.promisify(), they should be able to do the exact same thing. It's pretty exciting.

The other thing we did with Promises is we made it so that for a native Promise it is now domain-aware. The domains module has been deprecated for a while, but it's still used; there's still lots of people that use it. Now inside your cache you can actually access the current domain; it's relatively minor, but it is important.

**Mikeal Rogers:** Did that change go in, that everybody was freaking out about, about the throwing on uncaught rejection, that whole thing?

**James Snell:** No, that has not landed yet. The reason for that is we still have not settled on any kind of consensus on what that action should be. The biggest thing that we've identified right now is that when an unhandled rejection occurs, that there should at least be a process warning emitted that has the original stack trace. It is possible to do that right now using the --trace-warning argument, but what we wanna do is change it so that by default it just shows that stack trace when those happen.

The challenge with anything that we do here is that the Promises model really leaves it up to the host environment to figure something out, and any path we go down doesn't quite fit well within the model. We either end up with a high number of false positives and rejections that are handled later, and we don't quite know when they're not gonna be handled, or just things where people intentionally aren't handling them and there shouldn't be any worrying at all because that's what the developer wanted.

So it's really difficult to figure those things out and see what we need to do there. At this point we've settled on "Let's not do anything yet, until we figure it out more."

**Mikeal Rogers:** So pulling us out of the weeds a little bit here... I've seen a lot of people throw around this V8 TurboFan+Ignition thing in the compiler pipeline, and it gets thrown around a lot, and it's like a magic performance sauce that everybody's kind of throwing everything -- can you explain what this actually means and what it does to people's code?

**James Snell:** Okay, so right now what's inside V8 - you have the compiler, and you optimize with the compiler: it takes the JavaScript and compiles it down to bytecode, optimizes it and does a number of tricks to make it faster. The TurboFan+Ignition is just a new compiler and a new optimizer inside V8, and for most people, whether you're using the old Crankshaft stuff or the news stuff, there's just not gonna be any impact, you're not gonna see any difference. But the new compiler and optimizer is really geared towards optimizing the new language features, so things like class, or spread arguments, or any of the new language features. Crankshaft - which was the old optimizer - just wasn't set up to handle these new language features very well at all. The new toolchain will make it so that those things can actually perform decently going forward. For most people, they won't see a difference.

\[11:45\] The code that is going to see a significant difference is code that has been highly, highly optimized to take advantage of quirks in the old Crankshaft optimizer. We have some examples of this in Node core itself, where we actually will unroll for loops in order to make it faster. What that means is instead of just going through the entire loop every time, we'll see "Does this thing only have one item or two items or three items?" and we will special-case handling those, and then loop only if none of the other more optimized cases apply. Under Crankshaft it ends up being significantly faster.

Code that is highly optimized for Crankshaft could actually end up running slower under TurboFan, because a lot of those optimization tricks are not longer there or are being done a completely different way.

We shouldn't see code break, we shouldn't see any existing stuff just stop working, but we could see a very different performance profile under the new tool chain once we enable that. That's where the biggest difference people will see is - just the performance of their applications will change.

**Mikeal Rogers:** Particularly with ES6, right?

**James Snell:** Oh, yeah. Any new JavaScript features should become significantly faster.

**Mikeal Rogers:** Yeah, and async/await is in here too, right? I think it was also in version 7, but this is the first one that's scheduled to go into LTS; there's a lot more users coming onto it. So async/await is starting to become a feature that you can just kind of depend on.

**Alex Sexton:** ...in Node.

**James Snell:** Yeah, in Node. There's efforts right now even to explore allowing async/await in the repl, so just on the command line, being able to do await, and -- there's quite a few things that are being looked at, figuring out how to make it more useful. Util.promisify() is gonna go a long way towards making that useful.

**Mikeal Rogers:** You said there were like a ton of major changes... A lot of those are breaks, and not these feature ads... So what are the things that were broken?

**James Snell:** I'm kind of going through the list right now... Buffer num now zero fills by default, if you call a new buffer. It's not really so much breaking as in functionality, but breaking in terms of performance; it's significantly slower.

**Mikeal Rogers:** But safer.

**James Snell:** Yeah, significantly safer. I'm kind of looking through some of these others... Most of the breaking changes -- we mark them SemVer major largely for defensive purposes... It could break, it doesn't necessarily definitely break. For example, in child process we're doing more argument validation. Before it was pretty loose in terms of validating the input arguments, and now it'll throw if you pass in the wrong things.

Same thing with some of the crypto arguments... There's a few deprecations in here, a few new things that users really shouldn't have been using in the first place, that we're only using internally, like SyncRight stream I think is one of them -- it's always been there, but it was always intended to be just an internal only thing. We now have runtime deprecation on that.

A lot of these are changes to error messages. We have to treat error message changes as semver major in core because people actually parse error messages to determine what happened. So what we're doing is we're going through and adding new static error codes to all these, so that if you wanna know what error actually occurred, you'll just have to look at the code and you can ignore the message.

Once we make that change, we'll be handling error message changes as semver minors or patches, and only changes to the error code or error type will be semver major. That will be a big change coming up soon. We've started that process of migrating those now.

**Alex Sexton:** I find that I can't think of a project or a company that I've been at that didn't eventually hit that point where it's like "Maybe we should stop allowing users to rely on regex to know what went wrong in the application, and give them some solid code." It also matters a lot for internationalization whenever you want errors in other languages and stuff, so... Good work.

**James Snell:** \[16:13\] Yeah, like I said, there's over 150 of these here, so...

**Alex Sexton:** If you're more like my end and doing less -- I mean, I do plain Node applications, but if you're more of a web developer and you use it as a build chain, are you gonna notice speed improvements, are you gonna notice nothing? Is there something that sticks out, like a less server-y person might recognize if they just upgrade?

**James Snell:** From that point of view, no. I think it should be pretty straightforward. There are a few things that should improve usability... Right now, if you're using a set of tools and some dependency on those tools uses a deprecated API, it's very common for people to see all these deprecation warnings appear in their console output. Those can be turned off now, or you can actually redirect all of those warnings to a file using an environment variable or a command line argument. So it's actually possible for folks that are using Node as part of their tool chain to make Node be less noisy. That should be a good thing.

Overall, performance should be roughly the same as what we had under 7. There's some things that are faster, there's some things that are slower, but on average it's the same.

**Alex Sexton:** Did 7 get a lot faster than 6? I think most of us stick to the even numbers...

**James Snell:** Yeah, there have been some improvements. Some things are faster, some things are slower. What we're seeing is -- some of the slowdown is actually caused by V8 - these changes that are being done in the optimizer underneath. Node - this goes back to the early conversation about TurboFan - uses a lot of code that's highly optimized for Crankshaft; that turns out it actually runs us a little bit slower under the newer version, the VM... And we're actually gonna have to go through and update some of those things to make sure that they run faster as we start to switch over.

So you'll see some variance there. Some things will run significantly faster, some things will run actually quite a bit slower.

**Jessica Lord:** I saw a tweet the other day - which I don't think I'll be able to find - about how many people had already downloaded Node 8. Do you feel like they're -- \[laughter\] I mean, I don't even know... I saw on its own, and I'm like "Is this a good number?" Are a lot of people still on really old Nodes, or are you seeing a lot of movement on people getting on this version?

**James Snell:** I think people will get on this version very quickly. It's still too early to tell for sure, but I think within a single day it was 105,000, or something like that. I'll have to take a look at the latest numbers. What we're finding is that most of the downloads occur on the LTS versions.

If you look at version 6, for instance, as soon as it went LTS, the number of downloads spiked significantly. It's still the most downloaded version out there right now, by an extremely large margin. During the first six months of 6's life, version 4 was the highest. And as soon as 6 became the LTS, people were downloading it, and the downloads for all the other versions dropped off.

If you look at version 7, it's not an LTS version - it's newer than 6, it had async/await - its downloads were significantly lower than 6 still. So I think what you'll find is that as soon as 8 goes LTS...

**Alex Sexton:** When is that?

**James Snell:** That's gonna be in October... Then is when the downloads for 8 will really start to take off and it will become the predominant version.

**Mikeal Rogers:** \[19:55\] I was looking at these graphs the other day actually, and one of the really nice things about them is that really old versions of Node are going away quicker. There's a floor that you can't kind of go below because a bunch of CI just tests against older versions, but we can be fairly confident that people aren't really relying on them very much anymore. Downloads really floored out for 0.10 and 0.12, and they've even come down quite a bit for version 4.

We were comparing the numbers earlier, that 100k mark... When we do releases of 6, they peak out at around 800k in a day. So already on day 1 you're at an eighth of the market share for the last LTS line. Then by the time that we hit that six-month mark, it is a big shift.

Alright, I think that that covers Node 8. We're gonna take a quick break, and when we come back we're gonna talk a little bit about edumacation. Stick around.

**Break**: \[21:05\]

**Mikeal Rogers:** Let's get into this Glit \[laughter\] -- Glitch "raise your hand" feature...

**Alex Sexton:** Nailed it. \[laughter\]

**Mikeal Rogers:** Yeah... Jessica, do you wanna walk us through how this feature works and what's interesting about it?

**Jessica Lord:** \[laughs\] Yes, alright. First of all, if you haven't heard of Glitch director/browser to Glitch.com, Glitch is this really awesome IDE coming out of FogCreek. Jen Schiffer is the community engineer there, and it is all the things - I'll try not to spend too much time just gushing about it... It's an in-browser IDE; you can have multiple people editing the code at the same time, but it's also free hosting, and it's free hosting with a Node server. Everything you build, you get free Node hosting, and then similar to like forking a project on GitHub, you can remix a project on Glitch.

Glitch really wants to lower the barrier for entry, and building things on the web and making it fun. I think last week they released a new feature for getting help called "raise your hand." If you go to Glitch.com, you'll see at the top of the page it says "Help others - get thanks" That will show you if anybody has any questions at the time. What it lets you do is anywhere that you're editing code in a Glitch project, if you highlight some lines of code, you'll get an icon with the emoji handraiser, and you can click it and you can describe your problem and it will go to this section on the homepage.

Then anyone who wants to help people who are learning and working on projects on Glitch can go and see who's asking for help. When you respond to someone in need, it'll ask that person to give you access to their project, and then you can get in and start coding with them.

**Alex Sexton:** \[24:03\] I would like to request from the community that someone make a Chrome plugin that switches the "raise your hand" to a David S. Pumpkins icon -- I don't know if you guys watch this or not, but... \[laughter\] "Any questionsss...?" \[laughter\] Really solid.

**Mikeal Rogers:** Tom Hanks will send us a cease and desist on that one. \[laughter\]

**Alex Sexton:** Yeah, for sure.

**Mikeal Rogers:** I really like this feature, because there's this huge, really important part of education that you get for free when you do -- or not for free, but by default when you do something in person, which is like when somebody gets stuck, they go like "Hey, help me", and then somebody gets them unstuck. And when you're doing really early learning - like Alex was just saying last week - you don't know what to search for, and you don't know how to even describe what the particular problem is.

**Alex Sexton:** Yeah, the help exists, but you don't know how to find the help.

**Mikeal Rogers:** Exactly. So this feature does that. You have to build a support system around stuff, right? One of the things we did in Node School was that there was a lot of online support systems to help people along if they're doing the workshops at home, or even calling back to some of the people that helped them in their local.

I know Jessica built this really cool bot that would intervene in people learning GitHub, for that whole workshopper, as well.

**Jessica Lord:** It's still intervening... \[laughter\] About 30 times per day.

**Mikeal Rogers:** So how does that work, by the way?

**Jessica Lord:** Yeah, I have a workshopper -- it started as a Node School workshopper that ran in the terminal, but then I switch it to an Electron app because it's for learning Git and GitHub, which I wanted to make more visual to explain to people... Remote versus local, and things like that. So it's an Electron app right now, but the same robot intervenes as it was doing before. Basically, it does everything, really... It wears many robot hats.

When you're doing Git-it, you get to the point where you add a collaborator to your project, because I felt like it was important to teach people GitHub and working with other people to actually try and simulate a little bit working with other people on GitHub... So when you add the robot - his name is RepoRobot - to your project as a collaborator, it then has access and it writes to your repos. Then you have to learn how to pull in changes, and during the rest of the course of doing Git-it, RepoRobot is verifying challenges, it's checking the people have a GitHub account and have done this or that... It's like using the GitHub API a lot to verify that the person has done what they were supposed to do in that challenge.

Then at the end of it all you make a pull request and RepoRobot is merging all the pull requests. So it's going through and it's like sort of reviewing the pull request, because after a certain amount of time, errors became common - or mistakes people were making became common. So the top three or four most common mistakes RepoRobot's also looking out for, and will leave a comment on your pull request, telling you that "This thing was wrong. Here's what you can do to fix it." Then, if your pull request is great, it merges the pull request and then it rebuilds this page that has a list of everybody's names on it that have done it, which is like 13,000+ now... Which is awesome, but also -- I'm using free services as much as I can on this, and right now I have this problem where GitHub notifies you via email if you've been added to a project, and then you have to accept that invitation. So I'm using this third-party email service, but I'm using their free tier and right now too many people are doing Git-it, and I'm blowing through the email tier... So I have to fix this.

**Mikeal Rogers:** \[28:03\] Oh, man... The problems with success... I think this is all really interesting, because it seems like in a programming community - and especially in the web community - we keep coming up with these really interesting modes of education where we actually have like intervention and hand raising and a lot of follow through... And I feel like every other week I see a new e-learning platform that's just like a bunch of videos of lectures from people that you never see \[laughs\] And it's like "I don't think that people can really learn this way."

**Jessica Lord:** Yeah, I really love about Glitch that -- you know, I feel like so much of our lives are spent talking about developer tools every day, and every new, hot developer tool and framework, but Glitch is actually trying to build tools to help people BECOME developers and think of new ways to do that. That's so awesome and refreshing, I think...

**Mikeal Rogers:** I also find that if you're working on the educational side of those frameworks and you're working on the framework, teaching people all the time will keep it simple, and make you kind of understand what are big barriers to entry in learning those frameworks.

**Jessica Lord:** Yeah.

**Mikeal Rogers:** What does Alex think?

**Alex Sexton:** I think that... I don't know. I don't have strong opinions here. I... \[laughter\] It is the first time I don't have strong opinions, so I'm not talking.

**Jessica Lord:** One of the other cool things that Glitch is solving, that is a huge barrier to getting started, and that maybe some of us take for granted because we've gone through the motions so much of setting up our dev environment, and we can upgrade our Node and we'll be fine, but for beginners, setting up a dev environment and then setting up a dev environment that works on Heroku, and knowing how many dinos you need and whatever... There are tons of hurdles to actually going from zero to putting something online. Glitch provides you an editor, it provides you a server... It completely eliminates all of the dev environment setup.

It's become so complicated, and I feel like it's something that we all take maybe for granted, or we just are used to... But it's just kind of a mess if you're new.

**Alex Sexton:** We have a team at Stripe who's kind of whole job it is -- you know, Stripe hires extremely skilled developers pretty much across the board, and we have a whole team who's dedicated to helping them get their dev environments set up and be successful... The "developer experience and success" type team.

The fact that, as a company who can choose from a large pool of very talented developers who exist, and like it's still necessary at that level to provide environments and tooling and scripts and all these different things in order to help people be successful... If you take out the fact that they've had years of experience on doing this type of thing, and then you put yourself in the shoes of someone who's brand new, especially the -- if you remember my story from last week (I know everyone doesn't listen week-to-week or pay attention to what I say specifically), whenever I was first getting started, I needed a database; I didn't know how to search for a database, but even once I found a thing that wasn't a database but I thought it might be, I ran it locally on my computer because I had no idea how it worked. So I was running Cold Fusion on my dad's Windows XP box and I didn't understand why the website went down whenever I turned it off. \[laughter\]

\[31:59\] I think as much infrastructure as can be automatic is super interesting to me for that reason. And it's really hard once you know things to know what you didn't know in the past, and I think that's why -- like, I want all this stuff to exist, but I think that the absolute most important thing here is that we measure people's ability to use this stuff and how much it helps them, compared to not having it, and just tweak the hell out of it until people can be successful more quickly. I think it's an awesome start.

**Mikeal Rogers:** I find it kind of hilarious that one of the bigger arguments for "frameworks are easier for new people" is that they're not confronted with a bunch of choices, right? Like, they don't have to go out and find every little module to do every little thing. But before you use these frameworks that have this dev environment, there's like a ton of choices they haven't streamlined for you, that you don't know how to make... It's nice that Glitch has taken that out of the way.

**Jessica Lord:** Yeah, and one of the reasons I moved also the Git-it workshop from the workshopper in the terminal was that a lot of people were doing Git-it specifically to learn Git. They weren't developers, but they might want to be developers, or they work in an office with developers and just wanna know how to use GitHub, how to comment on something, understand what their co-workers are doing on GitHub. And then the first step for doing Git-it was like "Install Node", and it's like, how do you explain to somebody what Node is, and then try to debug across systems, their Node installation and tell them "It's this invisible thing that's gonna live in your computer, don't worry about it... You just need it." So moving it to Electron meant people could just download an app, which is a really familiar process for most, and then the having Node on your system becomes totally obscured.

**Mikeal Rogers:** Yeah, that makes a lot of sense. I think this is a good spot for a break. When we come back, we'll talk a bit about Tad, and we'll get into our projects of the week. Stick around!

**Break:** \[34:15\]

**Mikeal Rogers:** The project of the week this week is Tad. Tad is a little Electron app for dealing with CSV files and tabular data and stuff like that. It's pretty cool! Has anybody had a change to check this out?

**Alex Sexton:** I went to the website...

**Mikeal Rogers:** That counts.

**Jessica Lord:** I bookmarked it, because I love tabular data. I was really excited to see this, and also I like Electron apps. Whenever I see that I can download for three platforms, I feel like "This is built on Electron..."

**Mikeal Rogers:** Yeah, I just love that Electron is letting us build tiny apps, like just apps that do a thing... This isn't like a full spreadsheet app, with macros and all of that. For a long time, if you wanted to do something simple with tabular data, that was basically what you had to use. And so often, I just want something much simpler that can visualize and maybe do small manipulations or analysis... This is just awesome.

**Alex Sexton:** \[36:17\] Have you guys heard of -- what is it called... Google Docs? \[laughter\]

**Mikeal Rogers:** Also, a little heavyweight, a little heavy...

**Jessica Lord:** And don't you have to be online to use it? I actually tried to do the offline version and I couldn't. I gave up.

**Alex Sexton:** It exists on phones, and stuff. It's like offline, something or other.

**Mikeal Rogers:** For how much Google people berate everyone else about not having offline working, their actual apps at Google are mostly not that functional offline.

**Alex Sexton:** Yeah... I tried to do a Google search without internet connection - zero results. \[laughter\] Zero. None. Deal with that. \[laughter\]

**Mikeal Rogers:** I know. What are they thinking...? Is this not what AMP is for? No... \[laughs\] We're not gonna get into that.

**Alex Sexton:** I feel like you might have jumped a little too fast into what you liked that was differentiated about Tad, but what is it good for? More generally... It's like a CSV file viewer. Why would I use it?

**Mikeal Rogers:** If you've ever had to deal with a CSV file, you probably actually are in this weird in-between place. Most of the time when I pull down a CSV file I don't actually wanna put it into Excel or something like that, but I end up having to anyway. So if you wanna do really simple manipulations, like you wanna change the columns, or you wanna see what's in this file without trying to just look through it in a text editor (which is not fun), Tad is a really nice way to do that.

**Alex Sexton:** How do you think it gets its name?

**Mikeal Rogers:** I wanna think that it's from Tad the band...

**Alex Sexton:** No, that's wrong.

**Mikeal Rogers:** \[laughs\] Okay...

**Alex Sexton:** I'm trying to find anything. Tab? It's kind of like Tab separated. Tab? Tabular data?

**Mikeal Rogers:** Adam Stacoviak says "tab delimited."

**Alex Sexton:** No... I think he's making that up. He is not a smart man... \[laughter\] You can call it from the command line, which is kind of nifty.

**Jessica Lord:** I've just opened a CSV. Wow... I've just opened a CSV!

**Mikeal Rogers:** \[laughs\] I've never seen somebody so excited to open a CSV file. That's a ringing endorsement of the project.

**Alex Sexton:** Yeah, I feel like we haven't said a ton, but I feel like that's kind of the beauty of this thing... It's that it doesn't do a ton.

**Jessica Lord:** Just to check it out...

**Mikeal Rogers:** We said just a tad... It was just a tad.

**Alex Sexton:** Oh, actually... Check this out! Go to the web page. Are you guys on the web page?

**Jessica Lord:** Mm-hm...

**Alex Sexton:** You are? You promise?

**Jessica Lord:** Yeah.

**Alex Sexton:** I feel like one of you are lying to me. Top right corner is a GitHub thing... Hover over.

**Jessica Lord:** I've already noticed, I've already noticed!

**Alex Sexton:** No, I noticed first...

**Mikeal Rogers:** What?

**Alex Sexton:** The GitHub Octocat shadow person waves at you.

**Mikeal Rogers:** Oh yeah, I've used that embed before.

**Alex Sexton:** Oh, I haven't, so...

**Mikeal Rogers:** I think I used that one in Roll Call, actually.

**Alex Sexton:** "I'm Mikeal. I knew about everything beforehand."

**Mikeal Rogers:** \[laughs\] That's the hipster JavaScript going on... I was into it before it was cool.

**Jessica Lord:** Yeah... That's why JavaScript bread is over now.

**Mikeal Rogers:** \[laughs\] Okay... Before we beat the horse to death, why don't we get into our picks? Does everybody have their personal picks ready?

**Jessica Lord:** Oh, gosh... I knew this was coming...

**Mikeal Rogers:** \[laughs\] Alex, do you wanna kick us off?

**Alex Sexton:** Uhm... Nope. Let's take a small break.

**Mikeal Rogers:** \[39:56\] \[laughs\] No, we don't need a break. So I have mine ready... Yeah, I let everybody know on the internets that I'm gonna be leaving the Node.js Foundation; there's a little blog post about it, and stuff like that. But yeah, after a few years of leading the foundation since we've started it, I'm gonna take off and do something else... I haven't decided what else yet, but I definitely need a short break from Node.js directly... It should be fun, whatever I end up doing.

And the project is in very good hands... Everything is very, very good. It's a very positive thing. But yeah, I just want everybody to know that I'm gonna be unemployed, and...

**James Snell:** Come to Austin!

**Mikeal Rogers:** Is that where unemployed people go to retire?

**James Snell:** Well, it's warm... It's overly warm...

**Mikeal Rogers:** \[laughs\] Overly warm...

**Jessica Lord:** It's warm here in New York, too...

**Mikeal Rogers:** Yeah, but in the next month or so, that's gonna turn into really muggy -- no, not muggy... Just like really humid and gross -- I've been in New York in the summer, it was not super fun. But I actually am gonna be in New York next month, so...

**Alex Sexton:** I was talking to someone yesterday and they were talking about how publishing hours often have like a half-day on Friday - like if you work in news at all, or something like that - because everyone who worked in newspapers was rich enough to get the hell out of the city on the weekends, so they'd all peace out on Friday, half-day... Because no one had A/C, so they had to go up to the mountains. So it's still a thing that publisher hours or news hours kind of is a half day on Friday because 80 years ago no one had A/C. I thought that was kind of a nifty little anecdote that I thought I'd share with everyone. \[laughter\]

**Mikeal Rogers:** I think I'm gonna slip this into my future employment contract... "I do half-days on Fridays, man..."

**Alex Sexton:** "I gotta get into the mountains... I don't have A/C."

**Jessica Lord:** Yeah, in the Bay... Escaping the heat of...

**Mikeal Rogers:** In the Bay Area, yeah... \[laughter\] Alright, do you all have picks now? Was that enough time for you to think of something?

**Jessica Lord:** I just went to my Instapaper and three of the top last things I saved were Tad, What's New In npm5 and What's New In Node 8, so I've got nothing...

**Mikeal Rogers:** \[laughs\] You exhausted the list of things that you have around...

**Jessica Lord:** Yeah.

**Mikeal Rogers:** Okay.

**Alex Sexton:** So maybe I'll do some shameless self-promotion... My pick this is -- Stripe put out some new products this past week. I think Stripe Connect has a new version, and then also something -- I'm trying to remember the non-internal name... Stripe Sigma. You can go look at what those are, but very specifically I'm talking about the landing pages for those. Those are my picks this week. The designers at Stripe are very good and they work on these, so if you check out Stripe.com/connect and Stripe.com/sigma...

\[43:06\] The Sigma page might as well be like a 3D C JavaScript that -- I don't know, it's really nifty. And then the other one uses some -- my very specific thing that I like about it is that it uses CSS Grid, which is kind of like a slightly useable thing on desktop modern browsers now - it's something we've talked about in a previous episode - even though it might not work everywhere... But I always assumed Grid was like a layout mechanism, like "Here are some columns" type thing, or "Here are the sections of the website for content", so it kind of surprised me to see... We these skewed stripes in the background; they used to be really hard to put together - you had to do images or do these different things, and with Grid it just works perfectly.

So this is like a little section with the class name of Stripe, so open up your console and go to the Stripe.com/Connect and look at the Stripe section for a beautiful designer usage of the CSS Grid. That's my pick for the week. That 10 lines of HTML and CSS. \[laughter\]

It's cool though, right? I'm always so excited when Stripe launches a new product, because "Cool, my company is doing something", but I'm really excited to see what the designers do for the landing page for those various products, because they're amazing. I love them. Shout out to Benjamin De Cock and Philipp Antoni. Follow them on Dribbble or whatever designers do. \[laughter\]

**Mikeal Rogers:** Awesome. So on that note, I guess that's gonna take us out. Thank you everybody for coming on. Rate us on iTunes, or something like that. We're done a little bit early today, everybody can get some extra food. \[laughter\]

**Adam Stacoviak:** Or go shopping for a Tushy.

**Mikeal Rogers:** \[laughter\] Exactly. Can we get Tushy to sponsor us?

**Adam Stacoviak:** I don't see why they wouldn't...

**Break:** \[45:09\]
