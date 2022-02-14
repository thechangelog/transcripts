**Jerod Santo:** Hello, world! This is JS Party, where we're throwing a party every week about JavaScript and the web. My name is Jerod Santo, and hey, it's the pre-party this week for next week's live party at JS Conf. If you're going to JS Conf, do not miss it; we will have four awesome JS Party panelists live at lunch hour on Tuesday, August 21st.

If you're not going to JS Conf, well, I guess emoji sad face; you're in the same group as me. I sadly will not be there, but KBall, Nick, Suz and Feross will be live on stage. Do not miss that.

But we have a show for you today, and as always, awesome panelists. Welcome back, Chris! What's up, Chris?

**Christopher Hiller:** Hello! How are you doing?

**Jerod Santo:** All good. Nick Nisi is here... What's up, Nick?

**Nick Nisi:** Hello!

**Jerod Santo:** Tell the people all you're doing at JS Conf next week, so we can all pity you.

**Nick Nisi:** \[laughs\] Well, I'm part of the JS Party live panel, and then immediately following that, I'm doing a Track B talk. The title is No Time For Types. It's secretly about TypeScript... Then I'm also there with the TalkScript Podcast, doing interviews.

**Jerod Santo:** So very busy and nerve-wracking, of course... KBall is also here. KBall, you're gonna be running the JS Party show next week. What's up, man?

**Kevin Ball:** You got it! I'm excited to be MC-ing that JS Party live, and then I'll also be interviewing folks for JS Party. If you're gonna be there, especially if you're a speaker, but even not, if you have something awesome you wanna talk about, come find me in the hallways.

**Jerod Santo:** There you have it. So for this show today we have a few new things; we always like to experiment here on the show, and find out what works well, what doesn't work well... You know, that old-fashioned iteration that we developers love so much. So I've kind of ginned up a few new segments that we're gonna give a try. If you like these, let us know. If you think these are the worst ideas ever after having listened to them, please tell us. We want a show that is good, not necessarily a show that is just new and unique.

\[03:48\] We're gonna try out a few different things this week and see how it goes. The first segment we are calling Story of the Week. Now, the way this works is we have all found different stories around the ecosystem throughout the week, maybe even going back a little bit further than a week, no big deal... But what's the biggest thing that happened this week or the most important news? Maybe just to you personally, maybe for everybody involved.

We will all share a new story, and we will try to convince one another why it's a big deal, why it's important, why perhaps it's the story of the week. So let's give it a shot, Nick, you are up first, my friend. What's your story of the week?

**Nick Nisi:** Mine is probably one that falls in the "not actually this week" part, because I was really struggling, it seems like a slow week, in the JavaScript world at least. So I was going back through the recent things that were popular on Twitter, and I found this tool ndb by Google Chrome Labs on GitHub... It's an npm module that you can install that vastly improves debugging Node with the Chrome DevTools.

If you haven't done that before, it's really cool. I think we might have talked about it on a previous episode, but... You can type in node--inspect-brk or --inspect and then give it a command to run, or a file to run in Node, and it will give you a link that you can paste in the Chrome DevTools... Chrome Canary at least also immediately puts a dedicated Node DevTools button in your DevTools, if you have that open, so that's pretty cool. Completely unrelated to this, what this is is a Node module that will streamline that process for you a little bit. It will automatically open up the Chrome DevTools and you can actually open it for your project. So you can just say ndb, space, period, and it will open it up for that project. And I don't know if it's broken or if I'm not running it correctly, but it actually lists out all of the scripts from my package.json in there, with a little Run button next to them, but when I try and do that, I can't actually get it to run... So I'm not sure if that's just broken the way that I had it, but if that works, that would be really cool, because I'm constantly having to go look up what scripts are actually available in whatever projects... And just having them listed there and immediately being able to run them is kind of like a -- a dashboard that also does the debugging would be really cool.

And then finally, the big thing that this does that's way better than just running Node with the --inspect flag is, typically, I'll want to debug scripts. I'll want to actually be running Ts-node, or I'll wanna be running Gulp or Grunt or something, and I wanna be able to debug that... And if you wanna do that with Node, you have to run Node and then point to the binary for that... So like, Gulp, you'd have to go look in your Node modules directory, in the ./bin directory, the Gulp script there, and then it will run for that and you can set breakpoints in there.

This will just automatically let you say "ndb gulp test", or whatever. It will immediately set that up, and it sets up watchers for all of the child processes that might get kicked off in there.

The other cool thing that it does is it -- anything that's not in your sources directory, like anything that's in your Node modules, for example, it black-boxes that by default. That means that when you're looking at a stack trace, you don't actually see the code from your Node modules directories, you just see the code that you're actually running and debugging, and you just kind of assume that the Node modules are correct.

**Christopher Hiller:** I'm just looking at this now, and this thing actually looks pretty cool. At first, I was like, "Well, what's the difference between this and just using Chrome DevTools?", but it looks like it definitely streamlines things. If you want to debug tests, say, in Mocha, and you wanna do that with Chrome DevTools, you have to call the -- not Mocha executable, but the \_mocha executable, because this is a child process that Mocha launches... And you can't just attach to Mocha, because the inspector won't know that you're actually running your tests in the child process... But if this thing actually works - I haven't tried it, but I'm looking at the interface... Yeah, that's awesome. This is really going to make things a lot easier for a lot of people.

**Nick Nisi:** \[08:14\] Yeah, definitely. And I love that it's Google Chrome Labs, so it's - I would assume - going to be well supported going forward.

**Kevin Ball:** I don't know if you can assume that from Google...

**Jerod Santo:** Like Google Reader? \[laughter\]

**Christopher Hiller:** Yeah, good point.

**Jerod Santo:** Uuuh, salt in the wounds. It still hurts.

**Kevin Ball:** Yeah, too soon, Jerod.

**Jerod Santo:** Too soon... It's been like five years.

**Christopher Hiller:** I am curious what they're using Puppeteer for. I assume it's just to launch the browser, and then basically launch DevTools and fiddle with DevTools, and stuff like that. That's pretty neat.

Yeah, this is really cool. I installed it, and it took a few seconds, and it works, and it's pretty awesome, so... Thanks.

**Jerod Santo:** Alright, Nick. It sounds like--

**Nick Nisi:** So far I'm winning.

**Jerod Santo:** You might have one vote for Story of the Week there, as Chris might be voting for you. Chris, what did you bring to the table here? What's your story of the week?

**Christopher Hiller:** Yeah, slow week...

**Jerod Santo:** It really was.

**Christopher Hiller:** You know, Babel 7 is going to be released very soon, and if you haven't been keeping tabs on what's happening there, the big thing that people are probably going to get up in arms about is that Babel is deprecating the stage modules. So you can't go in in Babel 7 and say "Install Babel preset stage 3", or whatever. They're not gonna support those anymore.

They're going to basically expect you to more or less figure out which features you need... I think it sounds like babel-preset-env will help with that... But it sounds like they're encouraging people to make their own presets. The rationale - and there's a blog post on their site (babeljs.io) where Henry talks about "Well, this is why we are deprecating stages." One of the reasons is that people will be like "Hey, how can I use feature X?" and then somebody will say "Oh, use Babel preset stage 0", or something like that... So people install Babel preset stage 0, and they don't really know what they're getting into. For those that also don't know, stage 0 contains features that have not been approved for the JavaScript spec, and may not ever be approved... So they're very experimental, and if you're using that in your production code, you may have kind of coded yourself into a corner, because those features that you may be using - you might need to back those out at some point.

So Babel doesn't want this to happen, because I think they feel like they are partly responsible for people doing this, because they're making it essentially too easy to shoot yourself in the foot. So they're gonna drop these presets, and if you need a feature, you have to go and basically add the plugin, or (again) create your own preset.

So that's kind of a big change... There is a tool that they wrote to help you upgrade to Babel 7 from (I assume just) version 6, where they probably will go and see which stage presets you're using, and actually go and change all your stuff to use the individual plugins.

\[12:17\] It does stuff like -- there's all sorts of things. It changes a bunch of dependencies, it modifies -- if you're using Babel with Mocha, it will find that in your package.json, which is really neat, and it'll change some of the module names.

They're now going to publish all of their modules, because you know, there's hundreds of Babel modules. They're gonna use the @babel scope namescape now at npm... So you're gonna be using that, instead of babel-loader, or whatever, babel-register, you're gonna use @babel/register.

So there's all these things that they're working on to help you migrate, but once you're there... Yeah. I haven't read anything that people have written, but I assume somebody's going to get really upset at this... I hope they don't, but things happen. So he's gonna write this big thing about how this is the wrong thing to do, and it makes everything really difficult, and it was already difficult, blah-blah-blah.

I wanna see how this shakes up, but I agree with the direction they're heading, even though it maybe makes things a little more -- it makes you think a little bit more about how you're using Babel in what you're doing, and I don't think that's a bad thing.

**Kevin Ball:** Question... You said they're going to release soon, and I just googled for "7.0 Babel release", or "Babel 7 release" and I see articles going back a year saying "We're nearing the release...", so what's different this time? How do we know they're actually releasing soon?

**Jerod Santo:** \[laughs\] They just keep saying it.

**Christopher Hiller:** Well, so there's been betas for quite a while, and now they're at like rc2, or whatever... I mean, it's being actively developed. I don't know. It seems like it's coming pretty soon to me, but it sounded like from the release notes that they don't intend to make any more changes, they don't intend to add anything or fix anything necessarily. Unless there's some last-minute critical deal, it sounds like they're gonna release soon. I don't know, but it sounds like it from the changelogs.

**Nick Nisi:** It'll be good to get this out, for sure. It's been confusing... The website specifically has been confusing for me for a little while now. If you go to the Docs section of babeljs.io, under Tooling it talks about all of the different modules that they have, including Babylon, but you click on that and it just takes you to a 404 on the live page right now... But if you switch over to the pre-release docs, then it's a Babel parser and it does correctly point you to that.

So I'm excited for this to get out, so that things become less confusing around all of this tooling.

**Christopher Hiller:** Yeah... I mean, people are still gonna be using Babel 6, and they're probably gonna be looking for the documentation and have trouble finding it, but...

**Nick Nisi:** Sure.

**Christopher Hiller:** Again, Babel, as far as I know, doesn't have any corporate sponsorship directly. It's pretty much Henry and some other people that are volunteering their time to work on it, so I assume they don't have a whole lot of resources to do things like keep old documentation up to date.

**Nick Nisi:** Sure.

**Christopher Hiller:** I sympathize, but... yeah.

**Jerod Santo:** \[15:53\] Definitely sympathize. I thought they did have some success, at least, on Open Collective, in terms of corporate sponsorship, but surely nothing that's driving full-time -- well, maybe they are. I don't know.

**Christopher Hiller:** I think Henry has a Patreon, or something... He's basically working on open source full-time now. But you know, you can have all the money in the world, and if you don't have -- you know, there's 24 hours in a day, so if you're the only person working on it, there's only so much you can do. Or if people don't have time to dedicate, you can be flushed with cash and not be able to get much done, because you know, time...

**Jerod Santo:** It keeps on slipping, slipping, slipping... That's for you, KBall.

**Kevin Ball:** Ain't that right...?

**Jerod Santo:** Into the future, speaking of Kball - hey, your turn, man. What's your story of the week?

**Kevin Ball:** Yeah, so the thing I wanted to talk about was there's been a resurgence of interest and focus on JavaScript performance, and in particular JavaScript load and parse performance. We had all this stuff about, okay, is React making it faster to update the DOM? Or how fast are these things to do a lot of updates? But we've also gotten into this world where everybody's just adding more and more JavaScript, and there hasn't been as much attention on what the impacts of load and parse time are... So we're coming back around. That used to be a huge issue, then people forgot about it...

Coming back around to it, I've seen a ton of articles in the last few weeks looking at this. I think the one that sparked it was Addy Osmani from Google did an article on the cost of JavaScript in 2018 that blew up, and he sort of talked a lot about how expensive it is, particularly on less than cutting edge devices. Then there's been lots of follow-ons - how do you do this? Is code-splitting good enough? What sort of other things...?

Another article I saw on this that I thought was really interesting was looking at the impact of the push to make everything HTTPS, and the fact that that essentially kills your ability to create local caching servers, because local caching servers are essentially the man in the middle. So it's better for security, but this article was highlighting -- he did something in rural Uganda, and their connection to the internet is a satellite internet access, so there's a ping latency of half a second, and lots and lots of draft packets, so not being able to have a local caching server essentially kills their ability to access the internet for a very large number of things.

There are pros and cons to this, but it got me thinking a lot about the people who are not in the first world. This has come up before on the podcast; this last week I was in Costa Rica; T-Mobile lets you access data for free if you're on one of their main plans, from like 100 countries, but the speed of access in Costa Rica is like 2G. So I'm on a fast phone, I'm on an iPhone, but I had 2G internet, and it was amazing how slow things were... Just appallingly bad, and it reminded me how much you get used to bandwidth feeling essentially free; things are so fast...

So this resparking of the interest in -- you know, we actually need to cut down, we need to have a JavaScript budget, we need to think about the impact of all of these millions of libraries we're pulling in... Code-splitting is a nice thing and our tooling is improving for that, but having all of these things front of mind when we're developing, if we're developing things that are not just for folks who are in countries with ridiculously fast internet access... Which the U.S., even though -- well, actually I don't know about the rural parts of the U.S. Certainly in California, even with just mobile access, it's ridiculously fast. 4G LTE is wicked fast... But not everybody has that.

**Jerod Santo:** \[20:18\] Yeah, this is something that's been on the top of my mind recently... We had Ben Halpern on The Changelog this week, talking about dev.to, which is a developer community platform he founded; you may know him as @ThePracticalDev on Twitter... And he's taken huge steps to make dev.to very fast, but not just fast in the Americas, but fast all around the world. He's really leveraging CDNs in order just to bring his content as close to the users as possible... And it made me rethink a little bit of some of our architecture. We try to make Changelog.com as fast as possible and as accessible as possible as well, and I think we're doing a pretty good job on that, but we definitely have the speed of light problem, having America-based server, and we can serve those pages really fast, but latency is just something we cannot solve. Of course, we CDN all of our assets, but I'm referring to rendered pages.

So something that's very important, and often - like you said, Kevin - we just don't think about it very much, maybe because we're on fast networks, but also maybe because we're just geographically close to AWS's us-east-1, where most of the internet gets served from, right?

**Kevin Ball:** Right.

**Jerod Santo:** Okay, for my story of the week - Vue CLI 3.0. And as has been said a few times, this was probably a bad week to try out this segment, as there hasn't been huge news in our space this week... But definitely some releases, definitely some stuff going on, conversations being had.

One of the big releases from August 10th, which is pretty close - I guess that's this week - was Vue CLI 3.0. Evan You writing on Medium about the release says that it's a completely different beast from its previous versions. This is the command line interface that's built into Vue or provided with Vue, specific for that toolset. This is a trend that we've seen really started I think by the Ember team years ago, having Ember CLI, and we've seen it kind of matriculate across to all the different frontend frameworks; React has one, Angular has one, now Vue has one, and of course, this is 3.0, so the CLI is not new, but the guts, the feature set, all these things are brand new... And some cool stuff going on.

The goal of that rewrite that they did was twofold. The first one was to reduce configuration fatigue of modern frontend tooling, which I think we can all agree -- maybe JS fatigue isn't a thing, but configuration fatigue is definitely a thing... And this is especially when they're mixing multiple tools together, which is what tends to happen on the frontend.

Then they wanted to incorporate best practices in the toolchain as much as possible, so it becomes the default for any Vue app. There's a lot more details... One of the big things that I noticed was that they preconfigured Webpack features. All that stuff -- you know, if you're gonna preconfigure Webpack for me, I'm just gonna give you a big fat kiss, because I'm gonna love that... Because I don't wanna configure Webpack.

They've preconfigured hot module replacement, code-splitting, tree-shaking, efficient long-term caching, error overlays etc. So all the good stuff there, ready for you to go. The cool thing about this is they've been very cognizant of developers' need to tweak those configurations...

What happens a lot of times when you have tools that kind of wrap other tools is they will hide, they will sweep all of the complexity under the table, which is what we want, right? Because we don't wanna deal with the complexity; we wanna provide a better experience. But then when it comes time and you actually get to using it and you actually need to reach underneath the table and tweak that thing, you either have to eject, which is basically say "Okay, I'm no longer going to stick with this tool. I'm going o stop the world and fork it, or vendor it", or something like that... Or you just don't have the option; you just can't reach underneath the hood and tweak things as you will.

\[24:17\] So they've taken great pains to make this configurable, with no need to eject, which I know is hard to do, and an admirable goal, so... Hopefully they've achieved it. It definitely looks very good. We'll link up the announcement post. This seems like big news. I'm not a Vue user; KBall, I thought maybe I would steal this one from you when I put it into the document, because I know you've been using Vue quite a bit lately, and I thought maybe this one would be on your radar...

**Kevin Ball:** Yeah, there's actually something pretty interesting about it too that you didn't cover yet, which is that it adds a GUI access to a lot of the CLI pieces. So it gives you within the ecosystem -- like if you're installing plugins, normally you just do that on the CLI, npm etc; it lets you do a lot of that stuff from a GUI and manages the configuration, and updating your package.json and all that sort of thing... Which to me personally - I couldn't care less, because I'm a terminal guy...

**Jerod Santo:** Yeah, me too.

**Kevin Ball:** But one of the things that Vue has historically done very well is making this advanced JavaScript framework feel accessible to people who do not consider themselves hardcore coders. It's way easier if you're coming from a design background, it's way easier if you're coming from less of a coding background. Folks routinely say they can pick up Vue far faster than if they try to do React, or something... And I think this is leaning into that trend as well, of saying hey, a huge part of what you're doing with a non-trivial application is configuring and pulling in plugins; let's make that more accessible to folks who are newer, to folks who are more visually-oriented, to folks who don't live in their command line.

**Jerod Santo:** Yeah, that is very cool, and definitely a blind spot for me, as also a command line junkie. I didn't even pick up on the GUI in the post. I mean, I saw it, but I was like, "Oh, that's cool-looking", but I didn't think about it very much. So that is definitely great for accessibility and really for making more difficult things easier, which is what we're definitely trying to do as library and framework authors. Very cool, check that out.

As for my pitch - I wanna pitch this as the story of the week, and here's my two reasons. The first one is 15,000 claps on Medium, so... A pretty big deal. Secondly, I've found this -- although we did log it on Changelog News, but I was reintroduced to this by basically going to the r/javascript and sorting by Top, and then setting Week as my filter. So there's a life hack if you're ever going to be on Story of the Week again... And this was number one, so I think it's pretty much unequivocally the story of the week. Sorry, guys... I think I win. \[laughter\]

**Nick Nisi:** Can I give a pro tip on finding stories, too?

**Jerod Santo:** Yes, please do.

**Nick Nisi:** There's this tool called Nuzzel, and you OAuth into it with Twitter, and it looks at your Twitter timeline and what everybody's posting and then it sorts links by the ones that are talked about the most on Twitter. I used that to find -- and I had to go back a little ways to find ndb, but I did find it.

**Jerod Santo:** Now we're giving up all of our secrets, and someone else is gonna start their own Story of the Week podcast and totally dominate us.

**Kevin Ball:** Can I give a little slightly self-serving story or pro tip on this?

**Jerod Santo:** What if I said no? Just kidding, go ahead... \[laugh\]

**Kevin Ball:** Then I wouldn't...

**Jerod Santo:** Please do. \[laughs\]

**Kevin Ball:** So the slightly self-serving pro tip is if you sign up to the newsletter that I publish, you'd see a lot of this, like that UI piece of the CLI, in the last episode of July, was in my newsletter, so... It's a little self-serving, but if you go to zendev.com/fridayfrontend.html you can sign up and you hear about all of this every Friday.

**Jerod Santo:** But then you wouldn't have to listen to our podcast anymore.

**Kevin Ball:** No, we do so much more cool stuff.

**Jerod Santo:** \[laughs\]

**Break:** \[28:22\]

**Jerod Santo:** Okay, next up we are going to do a segment called WHAT...WG. I'll just say that again, because it's fun: WHAT...WG. The idea here is that we are going to discuss some of the stuff that WHATWG has been up to lately. For those who don't know what the WHATWG is - it stands for the Web Hypertext Application Technology Working Group... Which is why they use an acronym, because nobody wants to say that five times fast.

It's a community of people interested in evolving the web through standards and tests. Now, there's kind of an in and out between the WHATWG and the W3C or the Worldwide Web Consortium, who does what and why, and when and how... So before I get into some of the standards that the WHATWG are working on, KBall is gonna explain to us a little bit - as much as you can, KBall - some of the history there, and really what the difference is between the two, and all the ins and outs. Help us out.

**Kevin Ball:** Yeah, so I started researching this when you brought up WHATWG, because I'd seen a little bit flow by as you were reading stuff, of like controversy, like "WHATWG and W3C fighting about this or that", or people trash-talking one or the other... So the history is related to XHTML. W3C started going down the road of XHTML and XML that is very rigid and unambiguous, and they started pushing more and more in that direction, and the browser vendors basically said -- instead of WHATWG, they said WHATTH. This is going to break backward-compatibility, which is the key value prop, or one of the key value props of the web... It's that anybody can throw this stuff up and it just keeps working.

So in 2004, a bunch of browser vendors kind of banded together and said "Well, you know what? Y'all are failing us, because you're trying to do this in a way that's not gonna keep the value prop of the web. We're gonna create our own specification." And they kind of tried to work together, but they had very different approaches to it. W3C likes to kind of create frozen specifications. So if you remember the whole "We're gonna have HTML5, and that's gonna be the new version of HTML5 and it's gonna be frozen" - that was what W3C wanted... And WHATWG said, "You know what, we're changing all the time. This should be a living standard. We should be constantly evolving it." So they've kind of split in different ways, and the split was a little bit -- this was a bad breakup, in a lot of ways...

**Jerod Santo:** \[32:22\] Well, breaking up is hard to do.

**Kevin Ball:** Breaking us is hard to do... If you start looking through forum stuff or GitHub issues or things where the standards are being debated, there's a lot of bad blood, as far as I can tell.

**Jerod Santo:** That's too bad.

**Kevin Ball:** What seems to happen now, according to WHATWG, and this is a direct quote... "The W3C publishes some forked versions of our specifications. We've requested that they stop publishing these, but they have refused. They copy most of our fixes into their forks, but their forks are usually weeks to months behind. They also make intentional changes and sometimes unintentional changes to their versions. We highly recommend not paying any attention to the W3C forks of WHATWG standards."

**Jerod Santo:** Wow... Talking about bad blood.

**Kevin Ball:** Yeah... But the vast majority of the work - for HTML in particular - seems to be happening at WHATWG, and while W3C keeps publishing updates, they appear to be primarily bad forks of the work that WHATWG is doing.

**Jerod Santo:** So WHATWG is worth watching and paying attention to is mostly people working for the browser vendors. A lot of these times, specific vendors will add features - and we'll talk about one of those here soon with auto-capitalize - and they will add it to their browser and put it out in the wild for a while, and kind of prove it out as something that's useful or good for whatever reason, and then the WHATWG will go back and standardize around that if everybody agrees that that is something worth standardizing around.

It's interesting... We're talking about bleeding edge - it's not that bleeding, because some of these things already exist in certain... You know, "Only in Chrome" or "Works best in Edge", that kind of thing. But as we see specific features and changes formalized and turned into specs, then the other browsers are more likely to add it as well.

So what's interesting, especially if you're gonna stay up on like the new stuff going into the web platform, is to find out what the WHATWG is working on, or at least considering, and then also what has been added as of recent.

With that in mind, let's talk about a couple of things here. The first one is the one that's really been on my plate lately, which is why I've been thinking about this, and I was excited to find out that it might be coming to browsers soon, which is lazy-loading images and iFrames.

Now, if you're on Lighthouse or any sort of performance tool, one of the very first recommendations they will say is you should be lazy-loading off-screen images. For example, Changelog.com has a whole bunch of avatars and images on the news feed or news items that you may never scroll down to... And when you load our page, the browser is going to go down and fetch all of those images into the page, no matter what... Unless you tell it not to. Unfortunately, there's no built-in way to tell it not to. You have to basically do some JavaScript, which I think is a very big hack, which includes not adding the src attribute to your image tags until the JavaScript adds it for you, basically... And there's lots of ways of doing this; the most modern way is to use Intersection Observer, which as we've learned lately, has some issues, as well. But this is something that pretty much every website wants to do in terms of performance - we have 75 images, and the user has only seen three of those. Do not waste time and bandwidth downloading all those images.

\[36:14\] I've been complaining for a while now, as I want to do - just to complain, mostly to Adam and other members of the Changelog development team... Why is this not a browser feature? Every browser performance tool says "You should be doing this." Pretty much every website wants it, and then everybody has to go implement it for themselves, which sucks.

**Christopher Hiller:** Jerod, you said you had to do it with some sort of observer, or something... Is that what you said? Intersection...

**Jerod Santo:** Yeah, Intersection Observer is the most modern way of doing this, so basically using that API, which is in modern browsers, to detect when an element or an image comes onto the viewport. So instead of loading them all, you wait until they're on-screen... So Intersection Observer is a way of detecting when something has come into the viewport or is close to the viewport, and so then it will go out and grab the image.

Basically, what it does at that time is it takes the data-src attribute, which is the URL of the image, and it just sets it as the source... And the browser goes ahead and does that.

So that's a modern way of doing it... People have been doing this for years, because like I said, everybody has to or wants to... And I'm not sure how they used to do it. KBall, do you know how older implementations of lazy-load would detect on-screen elements? Or maybe they would just defer the loading --

**Kevin Ball:** You do it basically the way that the polyfill for Intersection Observer works, which is you literally check over and over again, "Is this thing in my viewport?"

**Jerod Santo:** Which yeah, that's what you set...

**Kevin Ball:** Yeah, you set up an interval, and it just checks every now and then.

**Jerod Santo:** There we go. Yeah, because Intersection Observer -- Nick just linked to it there in the chat... If you go to Can I Use, you'll find that it's on most modern browsers. I think maybe Mobile Safari and Safari are the ones that it's not on; I don't remember... But you have to use a polyfill if you're gonna use the modern way...

**Christopher Hiller:** Wouldn't you just pull like on a scroll event, or something? Or, first, is there a reason to do that all the time?

**Kevin Ball:** Yeah, you can do that... But you still need to debounce, so...

**Jerod Santo:** The overarching theme here is it's a lot of work, and everybody needs to be doing it, so that's prime candidacy to... Do you know who knows the best in terms of like when a user would desire an image to be actually fetched? Probably the software closest to the user; probably the browser itself. That's my take.

**Kevin Ball:** Yeah.

**Jerod Santo:** Thankfully, the WHATWG has been working on this, and there's a draft spec.. If you are on the GitHubs, it's on the WHATWG Organization HTML repo, and it's pull request 3752. We'll link that up if you wanna read it. You dive into the details here and you realize why these things don't necessarily move very fast, because there's so many different things for them to consider... So it's a very active process, but there is a draft spec for lazy-loading of images and iFrames built right into the browsers. So basically, what you'll do is add an attribute to your images - I think it's like lazy-load=true, or there's a few different things you can do in order to control it... But it's something that is coming and is not here quite yet, but it is actively being worked on, so that in an unknown future, we won't have to be working quite so hard to do this for people.

**Kevin Ball:** Jerod, do you know how they manage the ongoing split of things between W3C and WHATWG? Because HTML ended up in WHATWG, but CSS is in W3C working groups, and JavaScript things seem to be split randomly across the two... \[laughter\] Do you have any sense of like who--

**Jerod Santo:** \[40:10\] Yes, I don't know the politics... I feel like maybe if we had Feross on this episode, or maybe even Alex would know the actual split-out. I know what WHATWG works on - like you said, HTML, the DOM, Fetch... These different things; they have a list of like "These are our territory. URL streams, storage...", and then like you said, CSS is on the W3C side; I'm not sure what else is on the W3C side... But you would think that you would want all of these things to be worked on together, because why have CSS in a silo? It seems like that's not good... But no, I do now know why or how that all shook out.

**Kevin Ball:** Well, and different JavaScript are split across the two, I think... Audio APIs and things like that are in W3C, but XHTML requests are in WHATWG; the notifications API is WHATWG... Yeah, it seems pretty random from the outside.

**Jerod Santo:** Yeah, and it's very opaque as well. As I proposed this segment, like "Hey, let's talk about what they've been up to and what they're doing, because I think that's helpful to shine a light on." At least people know "Okay, lazy-load... Hey, it's coming soon", or "This stuff gets rejected.

One of the things Chris asked was "Well, how do you even do that? How do you even look at it?" and basically, you're just scrolling -- in terms of the WHATWG, you're just going through GitHub issues and clicking on different tags, like addition/proposal, seeing what's been merged, seeing what's been going on, some things were approved... Lots of discussion going on. This could be like a full-time job to participate in, and I think a lot of the people who are participating - like Jake Archibald, for instance - work at like web platform teams for Google, for Apple, for Microsoft...

So it really is a full-time job by multiple people to do these things.

**Kevin Ball:** I'm just going through their list... They have a spec on Quirks Mode. It includes such fun things as defining quirky colors, and quirky lengths, and all these other... Basically, backwards-compatibility things for really old HTML, or really old CSS.

**Jerod Santo:** Sounds fun.

**Nick Nisi:** They also have a console spec, and I didn't realize that that was actually a spec...

**Jerod Santo:** Yeah, I noticed that as well, and I was kind of scrolling through the different areas to see what has the most activity in terms of the WHATWG organization, and the console one is like -- there's just nothing; it's like tumbleweed... A lot of them -- like, the Fetch one has some activity, then the Quirks Mode one is completely... In terms of people proposing things, talking about things, merging docs... And then the HTML and then the Fetch and a few of them are super-active. They do have a Console Working Group, or whatever it's called, but there's just not much activity going on there.

One other example I wanted to pull in - we had the image lazy-loading, which is a proposal; it has a spec drafted, it's not there yet... Who knows, it could be years maybe before these things are found in enough browsers to use them... But here's an example of (I guess) the process working, which is the autocapitalize attribute. This is one that's been merged... We'll link to this as well if you wanna read through everything yourself... But it's past tense - it's been merged; it's even on Mozilla Developer Network Docs, all that kind of stuff is finished... And it's kind of cool watching the way this works.

The autocapitalize attribute is in iOS, specifically on input fields. You can set autocapitalize equal to true or whatever the values are, and it will instruct the device's keyboard to capitalize first words and whatnot on behalf of the user... Because on mobile devices - you know, these things are more cumbersome.

\[44:13\] So Apple just added that. They didn't ask anybody's advice, they didn't put it out there as "This is something everybody should do." They've just put it in iOS, and I think it's been there for years... But it doesn't exist anywhere else; it's just there. But iOS is a big enough market share, and so therefore Mobile Safari has enough people using it that it became something that the developers have been adding to their sites. Does anybody use this attribute or had to deal with it?

**Kevin Ball:** No...

**Christopher Hiller:** Not yet, but I hate it...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Yeah, I hate it when I run into -- actually, it's not true that I haven't used it. I have used it to say "autocapitalize=false"

**Jerod Santo:** Yes, turn it off.

**Kevin Ball:** "Turn it off, Apple. It's terrible!"

**Jerod Santo:** So here's where I've also turned it off once, and specifically on email fields, where they'll autocapitalize the first letter of an email address, and if your site isn't set up to normalize those or downcase them before searching, it won't find the user because you have case-sensitive searching, or something like that.

So yes, it can be annoying... But now it can be annoying in all the browsers... \[laughter\] Because it has been merged into the WHATWG's HTML spec. I'll just read this comment on it, because I think it's instructive of how these things shake out. This is a member of the Chrome team. He says:

"The Chrome team is currently attempting to update our implementation of the autocapitalize attribute in Chrome for Android (currently a non-standard extension introduced by apple), to match the behavior of iOS Safari, specifically to add support for autocapitalize on editable regions, inheritance from the form owner for in-text area elements etc.

As part of this work, we would like to standardize this attribute in the HTML spec. The goal with the spec change is to document iOS Safari's behavior, so ideally, Apple won't have to make any changes to their implementation, so that other browsers such as Chrome or Android can implement the attribute with the same behavior."

This is how this process happens - often, I think; or at least I heard it happens often - and here's a good example... Somebody goes out and implements a thing - in this case Apple. We know Chrome leads the way on many new features, some of which end up getting into other browsers, some that don't, sometimes... Speaking of Apple, a lot of times Apple is the last to hold out on specific features that lots of us developers want.

But in this case they added it, and despite the three of us - I don't know Chris if you've dealt with this, being on IoT and back-end mostly - not liking it and turning it off, apparently it serves a valid use for enough users that this is something that they decided to formalize around.

So the goal here was not to make Apple change their behavior, because probably they wouldn't do it anyways, but to just say "Okay, this is a feature that we think should be in all browsers, and Apple has led the way, so we're just going to formalize a specification, basically using exactly the way that Apple has implemented it." So they moved forward with that, they all got in agreement, you can read all the comments, and it rolled out.

Interesting just seeing the ins and outs of such a small thing. It's a single attribute on a few element types, and 40 conversations here, 6 commits to get this thing merged... So a lot of work going in behind the scenes that I think maybe we take for granted, maybe we get mad about, but a lot of effort involved in even the smallest changes to these issues.

**Kevin Ball:** The improvements in the way that we deal with specifications and updates and the fact we now have browsers that are evergreen and are all (more or less) collaborating - I feel like that is an under-noticed reason why the web has become so powerful. We've gotten so much better as an industry at working together to improve these things... But it is often just behind the scenes.

**Jerod Santo:** \[48:11\] Good point. Yeah, it's definitely gotten better, and I think the workflows specifically around GitHub - a lot of these things have been transparent for a long time, but there's something about a common platform that everybody knows how to use and is very accessible that makes them more transparent.

I would have never in the past dug into this stuff, but the fact that it's like "Oh, just the GitHub issues... Start reading them. Here's the labels..." - it all is very familiar; I feel like the transparency and the -- even though they're driven very much by the big players, the ability for people to get involved is better than ever.

**Break:** \[48:55\]

**Jerod Santo:** Alright everyone, it is now Protip Time. This is where we share our pro tips; it's pretty straightforward. Whether or not we're actual pros, that's for you to decide. These could be life hacks, they could be lessons learned from doing dumb things... Not that you would do that, but I surely have done some dumb things... And let's share them, so other people can learn and perhaps take away things and avoid fails, if possible.

Chris, pro tip time.

**Christopher Hiller:** I have some pro tips... I use a Mac. If you use a Mac, maybe a thing you need to do is copy and/or paste text files (source files or what have you) in their entirety. I discovered not too long ago - maybe this is one of those things that everybody knows except me, but I discovered that there were actually a couple command line tools that come in Mac OS that help you do just this thing. They are pbpaste and pbcopy.

\[52:16\] Pbpaste outputs to a standard out. It takes whatever is in the clipboard, and it sends it to standard out so you can pipe it to whatever you wanna pipe it to. Maybe you wanna pipe that to a file, and so if you copy some source and then you go to your command line and you say pbpaste, and then you do a write -- I don't even know if that's less than or greater than \[laughs\], but you're piping to the right with the direction, and you say foo.js... It will paste the contents of your clipboard into a new file, foo.js.

I wrote a little tiny Zsh function called Paste, which does just this - it takes its first parameter and it says 'pbpaste', and it writes to this new file. So I say 'paste foo.js', it takes whatever is in my clipboard and throws it in a new file, foo.js.

Likewise, pbcopy - you can cat a file and then pipe it to pbcopy and that file's content will end up in your clipboard. Again, I wrote a little function to help with that, so it just accepts its first parameter, and it cats it (this file) and it pipes it off to your clipboard, which is really cool.

Along the same lines, there's another little thing called z, and people may or may not know about z; maybe we've talked about z before, I don't know... But there's this command line tool for your shell called z. Just search GitHub for z.

It basically looks at all your shell history, it looks where you've been, and if you say something like "z node" or something, it will find the last directory that you were in called Node and it will just pop you right back there. It's a great way to navigate to frequently visited directories or working copies, and it's really neat.

Another tool I use is called -- and apparently there's science behind this; I can't say whether or not that's true, but it's brain.fm. It's a service that you pay a nominal fee for and they give you a mobile app and a web app. The best way to maybe explain it is it's generative music; there's many different styles, but... There's some science behind it that says "If you listen to this music, it'll help you, for example, focus on a task, or it'll help you relax because of various tones and tempos and frequencies in the music."

I don't know about that, but I wanted to try it, and so I did try it, and I found out that it's really helpful when I'm trying to focus on coding, and it helps me get and stay into the flow.

I feel like if you do a lot of coding, maybe you recognize that sometimes you get into this flow state and I feel like the music generated by brain.fm may help you do that; maybe it won't, maybe you'll find it boring, but it's supposed to be actually kind of -- it's not supposed to engage to engage with you. It's supposed to be kind of in the background.

A lot of popular music, or even maybe you listen to -- I don't know, techno, or trance, or something with that beat... It kind of drives you forward to help, but maybe sometimes that type of music is a little too engaging, and the brain.fm music is like Techno Elevator music, or something... It's really interesting; you just throw it on the background, forget about it... And it helps me focus. Check that out, it's cool.

\[56:31\] The last thing - there is a thing called Astral. If you're like me, you have a million GitHub stars and you may be like "What was that thing I was thinking of? How do I find it?" I don't even know how to do that with GitHub... So there's this app called Astral App. It's astralapp.com. It's just like an OAuth style GitHub app, and it helps you manage and view all your stars, and you can even tag your stars into categories, and it sorts stuff by language, and it's really neat.

So if you are like me and have a lot of stars, check out Astral App, and that will help you manage them and find things. Those are my pro tips.

**Jerod Santo:** Very cool. I've also used Brain.fm and I do think it is good programming music, so I'm with you on that one.

**Nick Nisi:** I was gonna say the same thing.

**Kevin Ball:** I haven't used Brain.fm, but I use a similar service called Focus At Will, and it is also excellent.

**Christopher Hiller:** I didn't know that. It's cool to find out that people are actually using it besides me, and I'm not just some sort of like crackpot. Maybe I am a crackpot, but I'm glad to hear it's working for you guys, too.

**Jerod Santo:** You're amongst crackpots. You have crackpot friends. Nick?

**Nick Nisi:** Yeah, I've got two quick pro tips. The first one is jscodeshift, which is really cool. It's a way to create what they call codemods for your code. If you need to do some kind of repetitive change throughout your code base, you can do that in a lot of different ways, like Find & Replace, which I'll typically do in a Vim macro or something like that... But if you want a reproducible way to make changes to your code that is very safe, because you're actually going to be using the abstract syntax tree to do it, jscodeshift and codemods are for you.

It's just a really cool way to be able to traverse the tree, and the tool does all of the traversing for you, so you just have to know what tokens you want to look for. For example, you could look for import statements in your code, and then change those in some programmatic way, so you can be guaranteed that you're not going to change some commented out import, or a value in a string somewhere, but you're actually going to be changing the From string on an import statement to a new value. You can be very specific about what you want, make those changes, and then have that as a codemod that you can share with friends and have a reproducible way of doing that. Really cool.

Then the second thing is two-factor authentication in 1Password. If you haven't been using it, it's amazing. If you haven't been using 1Password, it's also amazing. My life revolves around that. That's the first thing I need on every device to get anything else... But they have kind of hidden in there a way to do two-factor authentication, where if you were going to use Authenticator, or Authy, or one of those other apps in the past, you can just do it within 1Password, and the big benefit that you get is when 1Password auto-fills your username and password, it puts the one-time token on your clipboard and then you can just paste that in when that screen comes up... And it works on iOS and on Mac, and it's just great. I recommend using that.

1Password will also tell you if an application that you have a saved login for has two-factor authentication and you don't have that set up, it will tell you about that so that you can go in and be safe. That's it.

**Kevin Ball:** Is it technically two-factor if it's the same thing doing it?

**Nick Nisi:** That is a good question, but it would be my phone in both cases, so I guess it's a level of abstraction that you have there.

**Jerod Santo:** \[01:00:11.15\] If you guys ever have a situation where you do a SMS-based two-factor auth and then your Mac's continuity feature brings the SMS right back onto your Mac and it's right there in your notifications center, and you're like "Oh, I guess it's one-factor again..."

**Kevin Ball:** Yup.

**Jerod Santo:** Security is hard. Alright, KBall, you're up.

**Kevin Ball:** Alright. Mine is less of a tool and more of a life hack... And that is to identify and validate your assumptions at every level of your life. This can play out in the technical sense, like the first step to debugging a problem for me is to go in and sort of identify for me what am I assuming, and just check that those things are true.

So often, particularly if I'm helping a junior dev or something, we can find it; it's almost like being a rubber duck - we find it just by saying "What are we assuming? Can we validate that those assumptions are actually true?" Usually, the bug comes from one of those assumptions not actually being true.

But this plays out throughout your life, it's not just code. Some of my biggest personal breakthroughs have been from discovering that there was some mental model I had that I had just been assuming this was the way the world worked or the way that I had to be doing things, or something... And discovering that that was only an assumption, not actually the truth, and that I could change that.

This occurs in things like money and pricing. If you run your own business or you're a consultant, you probably have an assume idea of how much money you can charge for things, and usually you haven't validated that. When I discovered that assumption -- I had an assumption that as a consultant I had to charge things by the hour, and I ran into this writer, a guy named Jonathan Stark, who's big thing is like "Hourly billing is nuts. It's a crazy thing to do. It sets up all your incentives wrong, so you should be charging in other ways - value-based pricing or project-based pricing, or even retainers", and kind of highlighting all the ways in which hourly billing sets you up for failure and sets your incentives at cost purposes to the people you're working with or working for."

That totally shifted the way I conceived of my business, and has made my life so much better. So every level of your life - figure out what are the assumptions you're making, and then test them. And they might be right, but if they're not, you're probably screwing yourself over somehow.

**Jerod Santo:** That is definitely a good pro tip. Hey, you and I should talk business at some point, in terms of billing and all that kind of jazz, because I've been running a one-man consultancy like yourself for many years, and so we might bounce ideas off each other.

**Kevin Ball:** Let's do it.

**Jerod Santo:** Let's do that for later. So my pro tip is how to validate an email address... And here is the hard-earned experience on how you validate an email address... The only thing that you can reliably do to validate an email address is that you send it an email. You send it an email. That's the only way you can do it.

I know what you're thinking, "I have the best regular expression for this." No, you do not. You think you do. Your regular expression is invalid; it's not good enough. You know the old adage, "The developer, when faced with a problem, thought 'I know. I'll use regular expressions.' Now he has two problems." That's what you have - you have two problems.

I've known this for years, and yet I was still convinced to add a regular expression-based email validation server-side; first of all, never trust a client, right? You can do it all you want there, but it can by-pass all your checks. It's gotta be server-side.

\[01:03:59.10\] I put a regular expression-based email validation and I thought "This one's pretty good." In fact -- man, I don't know what came over me; I was actually even talked into copy-pasting one off of a gist. It looked pretty good, and it covered most of the bases, and sure enough, last week I got an email from a prospective user saying "Hey, I'm trying to sign up for Changelog Weekly, but it says my email address isn't valid, and it obviously is valid, because I'm emailing you with it right now..." and I thought "I'm an idiot. Why did I put a regular expression-based email verification on my system?" So don't do that.

I know you can find one on Stack Overflow... I'll tell you right now, it's not good enough. Email addresses are so complicated, there's so many valid things... If you're going to do it -- and I'll admit that I kept it in there, but I just check that there's some stuff, and then an @, and some stuff. That's pretty much what you're gonna be able to do... And that's just to basically make sure that you don't get some junk into your database... But still, all you've gotta do is send them an email, and if they click on it, well that's a valid email address. If they don't click on it, then who cares...?

That's a hard-learned lesson. If you want to validate an email address, send it an email. Problem solved. Until bots start clicking on emails, then we're gonna have a whole new issue... But so far I don't think there's bots that will create a fake email address, sign up for your thing, and then access that email address and click on the link. When we get there, then we'll have to come up with something else. But until then, just send it an email.

Alright, that's our show for this week. Like we said, make sure, if you're at JS Conf, don't miss us. Find KBall, find Nick \[01:05:57.28\] running around like a chicken with its head cut off. Find Suz, say hi... We'd love to connect with you. We have stickers, we'll have a limited amount of T-shirts, we have a live show on Tuesday, participate in that... It'll be lots of fun.

Thanks for listening today, and we will see you live at JS Conf next week, and then the following week Feross is back and he's got an awesome show all about decentralized web, so... Look forward to that, and we will see you next time.
