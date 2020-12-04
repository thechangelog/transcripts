**Amal Hussein:** Hello, everybody! We're so excited to be back this week, episode \#152. It's my first time MC-ing, so if the show is horrible, you can just blame me.

**Nick Nisi:** It's gonna be amazing.

**Amal Hussein:** Apologies in advance. But we're really excited to have a very special guest here today... Jonathan Creamer is gonna be here with us, and we'll get into his back-story in a little bit. On the panel with me today is Divya...

**Divya:** Hello, helloo...!

**Amal Hussein:** And Nick.

**Nick Nisi:** Hoy-hoy!

**Amal Hussein:** Hey-hey. And we're so excited to have Divya here on a show that's about DivOps... We'll have to get all the bad puns out of the way now...

**Jonathan Creamer:** Div-yeah...!

**Amal Hussein:** Div-oh-yeah... \[laughs\]

**Divya:** There you go...

**Amal Hussein:** Yeah... Yeah, I think Jonathan came prepared for that one...

**Divya:** Very good, very good.

**Amal Hussein:** So Jonathan is here because we had a show with Ben Ilegbodu a few weeks ago, where we were talking about TypeScript... And Ben brought up this term called DivOps. We all leaned into that, we were like "DivOps?!" and he's like "Yeah. You know, I have a friend, and he's trying to make it a thing, and I'm trying to help him..." I'm like "Well, it's a thing now..."

**Jonathan Creamer:** It's a thing.

**Amal Hussein:** Yeah, so welcome, Jonathan. Can you tell us a little bit about yourself?

**Jonathan Creamer:** Yeah, thanks. So Ben and I worked at Eventbrite together; he actually brought me on to Eventbrite, which was really fun... So that's how we're friends. We used to see each other at conferences all the time, where we'd talk about DivOps things at the time, but we hadn't quite coined that term... So yeah, the DivOps thing happened because inside of Eventbrite I'm on the frontend infrastructure team, and that's kind of one of the more common terms you hear for describing a team that does the kind of work that we'll talk about, what DivOps does... But Kyle Welch, my co-worker and now manager - we used to talk about this all the time.

\[00:04:17.27\] So I'm on frontend infrastructure, I'm technically a frontend developer. I've been writing code for ten years, a lot of backend stuff, C\#, ColdFusion, then to Node and JavaScript. Tons of JavaScript. But frontend-wise, I actually don't write that much frontend code anymore. I prefer TypeScript now to do that...

**Nick Nisi:** Yes...!

**Jonathan Creamer:** Yes, of course! But I don't actually write much client-side facing frontend code anymore. I use frontend tools to build; tools that allow other frontend engineers to do their job... Because we're a big React shop, so it's complicated. There's a lot of stuff that goes into building a web page today... And I know we'll talk about it here in a minute, what led up to that.

So yeah, we were sitting there, talking, and we were like \[unintelligible 00:05:06.21\] So I sort of tweeted out, and asked the community; we got a couple different answers, and some people said frontend SRE, frontend ops, \[unintelligible 00:05:18.09\] The most popular one actually was frontend DevOps, and \[unintelligible 00:05:22.18\] And that still was like "Well, that's fine... Frontend DevOps sort of makes sense..." But then actually what happened was this guy Enrique was the one -- Enrique Staying on Twitter; he said "Frontend engineers who manage infra should be called &lt;div&gt;ops", and he actually put the angle brackets in there... And I just latched on to that immediately, and I was like "Oh my god, that is AMAZING. DivOps."

And the moment that that came up, I started going to some conferences... We went to this conference called Connect.Tech in Atlanta, and I started pitching the idea there, and everybody was like "Oh, this is amazing. Yeah, do something with it!"

So Kyle and I started this DivOps community on Slack, and I sort of blogged about it on my personal blog... And there is a divops.dev website; it's terrible, because I'm not a frontend engineer...

**Amal Hussein:** Because you're ops, right? I would expect nothing les...

**Jonathan Creamer:** I did an amazing GitHub Actions build pipeline though, to merge from master... So the CI is fantastic. But yeah, so DivOps to me is what goes in all this tooling that we have to write to get all the other folks that work on frontend stuff get their stuff to the internet, so people can see it. Nobody sees my stuff necessarily, but people see the stuff that I help get out there.

**Amal Hussein:** Yeah, you're the pipeline.

**Jonathan Creamer:** Yeah, we build the pipeline. It's WebPack, it's Babel, it's maybe looking into Parcel, it's Docker, it's CI, it's Jenkins, it's deploying things, it's S3, it's Kubernetes, it's all that stuff. So it's a whole lot. I could go on all day about it. But that's in a nutshell how it came to be.

**Nick Nisi:** I'm just really happy you're adding semantics to the least semantic HTML tag.

**Jonathan Creamer:** Yeah... \[laughter\]

**Amal Hussein:** I mean, I would expect nothing less, again, from the ops world... \[laughs\]

**Jonathan Creamer:** Sure, sure.

**Amal Hussein:** "HTML what...?" So Jonathan, that's super-cool. If you think about it, this is definitely a job that wasn't a thing ten years ago, or even five years ago perhaps... And so it's interesting how much the tooling landscape and the mindshare required has shifted the job market and focus of developers. And for companies working at scale, with huge frontend teams, there's typically a frontend infrastructure team, and typically a frontend platform team that's supplying a bunch of components, and then folks working on builds and pipelines and all the DX (developer experience) workflows. So it's really great to see Eventbrite has made that a thing as well.

**Jonathan Creamer:** \[00:08:05.00\] Yup. I feel like most people who are doing it now sort of fell backwards into it. We were all writing jQuery code eight years ago, and doing things like the revealing module pattern, and using IIFEs... And all of a sudden you've just got all these cool -- you know, guys writing about JavaScript architecture back then, Nicholas Zakas, books on all that... And then Backbone came out, and that was like "Oh my god, Backbone is amazing! Now we've gotta build all this infrastructure around that; models, collections...", and then Marionette... And then RequireJS. Then you had to learn not only how to stop concatenating files, and do all that... And we just started this natural evolution; it became more and more complicated... And a lot of us just sort of fell backwards into it, and I just was like "This is awesome. I just wanna do this." I don't really wanna write code as much that people see; I like building this \[unintelligible 00:09:00.02\] way better." It's just fun.

When I think back on all the things that led me here, it's like -- and funny enough, we're actually still deprecating Backbone code here at Eventbrite, but that was really where I first started getting into having to figure out, like "We've got all these Backbone models..." I remember the dumbest thing -- I remember in 2010 having this ginormous, long, 10,000-line Backbone application, because I didn't know how to actually concatenate things at the time. I still have a Stack Overflow post from ten years ago, where I'm like "How do I take all these files and put them into one?" And I don't even remember what the answer was at the time, but somebody turned me on to something way back then...

**Amal Hussein:** Probably Grunt, I guess...

**Jonathan Creamer:** It wasn't. It was before Grunt. It was some Java thing that would compile... What was that? I don't remember; I'll have to go back and look on Stack Overflow.

**Amal Hussein:** Wow...

**Jonathan Creamer:** But yeah, I had to build that pipeline to take a bunch of files and squish them into one; that's where the revealing module pattern and all those early JavaScript patterns came in, so that you weren't leaking into the global namespace, and all that.

And then when Grunt came out, obviously, that was the game-changer. Suddenly, we were like "Oh wow, now I have an official way of doing this whole thing. I'm gonna take now all these RequireJS modules and trace the dependencies, run r.js, uglify things, build my CSS, Grunt all the things... Yeah, that was really one of the first times when I realized "This is becoming a thing."

**Amal Hussein:** Yeah, it really is. Taking a step back into the history of these tools - Grunt was the first JavaScript task runner; it was created by Ben Alman, cowboy on GitHub, or on the internet in general. Ben is just a really brilliant engineer; I think he's currently a principal engineer at Toast, I believe... But he worked at Bocoup for a number of years, which is a company that I worked at.

And the IIFE pattern is also something that Ben kind of invented and socialized throughout the community, so it's interesting to see the history there...

So we had Grunt, and then we had Gulp... It's interesting to see what the evolution was, because Grunt ran everything serially, and then Gulp was "better", because it--

**Jonathan Creamer:** Streams...

**Amal Hussein:** Yeah, it streams, and lets you do more concurrent--

**Divya:** And piping.

**Amal Hussein:** Piping, yeah. And then you could write in JavaScript; there wasn't this weird other syntax that you needed to learn, and you could integrate... So it's interesting to see how that evolution has come through...

**Jonathan Creamer:** Yeah, definitely.

**Amal Hussein:** ...all the way to React, where I think that was one of the first, if not -- yeah, I think it was the first JavaScript library that really couldn't copy-paste into the web. You can't just take that source code and -- you can't just take JSX and just copy-paste into the browser; a compiler is always required. That was a very big shift for the community, and one that I'm still personally -- I think \[unintelligible 00:12:12.17\] still pending for me on whether it's a good thing or not... But I don't know, what do you think, Divya?

**Divya:** \[00:12:20.26\] What was the question? I totally missed what you said in the beginning.

**Amal Hussein:** Oh, you spaced out?

**Divya:** Yeah.

**Amal Hussein:** That's okay, I forgive you.

**Divya:** \[laughs\]

**Amal Hussein:** The question was like... React - do you think the fact that React is a tool that you can't even run in the browser... You can't write React code without a compiler; so it's not even--

**Nick Nisi:** Well, you could...

**Jonathan Creamer:** I was gonna say, you could... It'd be pretty gnarly though.

**Divya:** You could with CDN. You need access to the internet in order to \[unintelligible 00:12:43.01\]

**Amal Hussein:** You'd have to create element, and blah-blah... You'd have to write very weird code. You would write code that you would traditionally think of as React.

**Jonathan Creamer:** It would be gross.

**Nick Nisi:** I saw a comment about that on Twitter today; I won't call the individual out, just because they probably don't wanna be, but they were talking about that pattern of - instead of writing JSX, writing the function React.createElement() s actually like a Hyperscript function that takes in three arguments and does things with them... And they called out writing that for the past couple of years and really enjoying that, and thinking they made the best decision, versus just writing JSX directly.

**Amal Hussein:** Oh, wow.

**Jonathan Creamer:** Interesting.

**Amal Hussein:** Wow... Yeah, that is very interesting. That is, I would say, a person who is very patient. Maybe should consider a role in teaching...

**Divya:** Does not have a lot of nested components as well... \[laughter\] It's just React.createElement(). \[laughter\] I understand the appeal of it; I would definitely rename it to something else, like H, but... I don't know, at the end of the day it's just faster... It's easier to analyze code, for my eyes specifically... So I'm talking anecdotally, but it's easier for me to just look at JSX and know what's going on... Whereas I feel like I would be lost looking at Hyperscript calls over and over.

**Jonathan Creamer:** I think what led up to React, when I was at appendTo, building RequireJS and doing all these things - we sort of painted ourselves into a corner of needing build tools anyways for stuff... Even if you're able to write JSX vanilla React in the browser, are you gonna -- I mean, maybe now you could go vanilla CSS, too; it's a little easier to write CSS now than ever before... But that wasn't true until not that long ago. And we still have a lot of IE11 traffic, unfortunately. We're finally on the cusp of turning that stuff off, but something has to run first to make your code be able to run everywhere, and it just sort of has to happen... So why not just also throw JSX compilation into the mix, too? It's not even that slow, really; it's just converting some ASTs \[unintelligible 00:14:50.08\] function call.

So yeah, to me it's just kind of -- build tools is just a part of it now, part of the job, like it or not, at some level.

**Amal Hussein:** Yeah, it's like a necessary part of the job anyway, in order to write code that can be supported on multiple browsers, and performs well... I don't personally see a world where we aren't running build tools on our JavaScript code. I think the concern is more like -- the local development workflows personally for me have greatly been impacted by this, and I think we'll get into some of the tooling in the next segment...

I think there's also a bunch of skills needed to have an entry point into modern web dev now... And that's not very inclusive, because you're asking people who are learning the language and learning the jargon to now learn ops, learn how to manage config files.

**Jonathan Creamer:** \[00:15:56.17\] Yeah. And that's where this whole thing came up... Because it's like "I don't want my devs having to come in and learn all that stuff. I'll take care of that for you. Put that on me. I love that stuff; I'll do that all day. I'll write you a WebPack config right now if you want one." I love doing that stuff, I don't know why. I geek out so hard on it.

I want the junior engineers coming out of wherever, or just starting -- if you're listening to this podcast and you're like "I don't know all this stuff...", that's okay. Come to me and let's talk. I'll help you get going, and then over time I can teach you more about this, and why it's important, and how it works... But ultimately, definitely within the context of my company - I just want my feature teams to go make Eventbrite the best possible live events experience on the internet; and I don't want you to have to worry about your WebPack config, and your Babel config, and your ES modules, and whatever. It's like, I got you; that's my job.

**Divya:** There's something to be said about the increase in the number of zeroconfig type tooling. For example - sure, 10-20 years ago writing frontend code was fairly straightforward. You'd write a single file, maybe a CSS file, and then later on you'd throw in JavaScript, or whatever... You don't need tooling for that. And then obviously, it's become more complex, where you have WebPack, and earlier there was Grunt and Gulp, and so on...

But in the advent of tooling, at least at the beginning stages, there was not a lot of boilerplate code that you could just use and run with. You'd still have to write your own Grunt, you'd still have to run your own Gulp, and WebPack, and so on. But I think -- and this is sort of me endorsing frameworks to an extent, because I think frameworks have actually helped... There's an argument both sides, but I think in terms of Create React App let's say, it has given people the ability to just run Create React App, it creates a boilerplate for you, and then you can just run with it.

Obviously, there's an overhead in terms of learning JSX, and whatever, but that tends to come with frameworks. I mean, it's sort a trade-off - would you rather learn JS, or would you rather understand who to write a WebPack config? And for a lot of people, JSX is very similar to HTML. Not the same, obviously, but it is a path to working faster than it is to understand all the config. And I think that's actually really interesting, in terms of how the industry has moved towards...

I think that's a positive, because it means that people don't have to learn a lot of this... And if they want to, they can, because at least with Create React App you are working off of that boilerplate, and then if you really want to, you can extend the config. And if you wanna go one level further, you can just eject completely, which is obviously not recommended, because you don't get further updates. But if you have very specific needs, you can do that. And that obviously means that you're full on in the deep end, which is like what you do, Jonathan, which is completely updating WebPack, understanding every intricacy of that process. So I think there's a wide spectrum in terms of the way in which you can enter frontend today.

**Jonathan Creamer:** Yeah. And what's interesting about that, too - you're right, frameworks, that's part of why Next.js and Gatsby are so good and so popular; it's like, you don't have to worry about that stuff. But I think a lot of what's interesting is that companies like Eventbrite and like Google or whoever, people that have been around for a minute - we've had to go through transformations... We started with Backbone and Marionette; actually, before that it was, like I said, IIFEs... To Backbone, to Require, then to React, and shoving React inside Backbone, and then now taking React out and only doing React... It was sort of hard to find a breaking point, to just say "Hey, we're switching to Angular here, and Angular can do everything." We picked up React, because we saw React was happening... And really back then, four years ago, when Eventbrite switched to React, there wasn't a good React framework back then. Create React App wasn't a thing, and Next.js definitely wasn't a thing; maybe it was...

\[00:19:56.22\] So I think from that perspective we sort of just all had to find the ways to take what we had done and build our own little frameworks around them, and that's where teams like \[unintelligible 00:20:07.04\] taking us into the future, taking the company into the future with React.

**Nick Nisi:** Cool. Just to kind of close up this section, I had one more question... Where would you delineate the difference between DevOps and DivOps? Is it strictly JavaScript tooling is DivOps, and then everything else might be DevOps? Repo management can be something that a team takes advantage of, for example. Which side would that be on? And what are your thoughts on YAML?

**Jonathan Creamer:** \[laughs\] Well, we're switching--

**Amal Hussein:** Shots fired...

**Jonathan Creamer:** Yeah, we're switching to CircleCI right now, so we do a lot of YAML.

**Divya:** Nice.

**Jonathan Creamer:** So I would say that it's a very blurry line. The ideal line, and this is one that I had at LonelyPlanet, where I came from before Eventbrite, which is really great... We partnered with our DevOps team to have them help us create some infrastructure patterns and paradigms to where they sort of did for us what I'm doing for my engineering customers from frontends. They would create -- you know, if you copy this Jenkins file, there's a couple macros in here that will build your stuff... And then just took this Kubernetes manifest...

So that sort of give and take between DevOps and then my world -- it's like, I understand the DevOps flows and how to create my own infrastructure when I need to; I don't necessarily need to get into networking VPCs, and routing HTTP traffic. I can, and I like to understand that stuff, but that partnership with DevOps or SRE is, I think, the ideal place where we can create an API, like anything else. And same thing I'm talking about with this tooling stuff. It's like, "How do I work with the DevOps team? What levels, what touchpoints do we have?" and sort of building that understanding between the two.

**Amal Hussein:** That's super-cool, Jonathan. I think what's really interesting for me is this convergence of these two worlds that in previous lives never talked to each other. You have opsy, infra, cloud, CI folk, and you have folks who are writing JavaScript that are maybe at the tip of the spear... It's this really nice full circle with DivOps, so thank you so much for talking to us about this cool topic. We'll get into tooling and all the other fun stuff you kids can't wait for next.

**Break:** \[00:22:41.12\]

**Amal Hussein:** Jonathan...

**Jonathan Creamer:** Yes.

**Amal Hussein:** That was a really cool insight into DivOps. And with Divya mentioning this separation of concerns, where Create React App has been create to abstract away all of the complexity around managing your configs, and lets you focus on just learning the tool... It's really nice that the community at large is starting to take that. We've seen even just with WebPack 4, many years ago there was -- I think they introduced the zeroconfigs there, as well.

\[00:24:17.25\] I've been around long enough to remember Karma was a tool that was super-widely adopted, and is still widely adopted today because of the way legacy stuff works... But I was the one person that had to set up all the configs for all my teams, because no one ever really got it. Docs were pretty poor... We've come a long, long way in terms of tooling, defaults etc. But can you give us an overview of what you consider to be really the best in class tooling landscape for frontend teams in 2020? If I was starting a project today, what would I need, and how should we go about setting it up?

**Jonathan Creamer:** Yeah. So what's interesting is WebPack 5 just came out a few days ago, and it introduced a lot of things. You brought up WebPack 4 kind of converting into the -- you basically \[unintelligible 00:25:09.01\] wepback -p or webpack -d and it just sort of has the same defaults, which is great. So from that perspective - yeah, you've got a lot of options now. Parcel is another big one; I think that was sort of the whole mantra behind Parcel, noconfig. At least at first. I know then Kyle came in and kind of added a little bit of config, because there were some needs there... Parcel 2 is gonna be even more incredible in terms of what they're looking to do with Parcel 2. So I think Parcel is big...

I know eventually for teams that cannot support legacy stuff, Snowpack sounds pretty dang cool. I think IE11 is still a crutch there; or at least it was the last time I checked. I don't remember. But yeah, so there's a lot of great things out there still, and coming out, new things.

Babel, obviously, has gotten so good now that it can even transpile TypeScript, generally. You guys talked a little bit about that last week with Ben... Because the TypeScript compile is really good, but it's like, it doesn't match sometimes with what -- I'm already doing all this sort of stuff in Babel, so the fact that I can now do TypeScript is fantastic.

And then in terms of other tooling that they were using at Eventbrite that I would say is pretty useful industry-wide and pretty good standards is - we have a big monorepo actually of our frontend code, which... Say what you want about monorepos; there's definitely contentiousness about monorepos versus multi-repos, but for us, what we have chosen to do with our tooling stack, and all this DivOps stuff, is - we're using a tool called Bolt, which is very similar to Lerna, built by the same guy, Jamie... And we're able to... Basically, we have about 150 different frontend packages, and we can go in and say -- our design system is in there, our tiny little packages that control widgets on the page are in there... And then entire applications are in there.

We have tools built that can detect -- you know, if I change the button in my component system, I can see the downstream effects across my entire repo... Which is actually really hard in a multi-repo setup, unless you're gonna write some crazy tooling to go about all these different repositories.

If I change the button, I get a list of every app in every package downstream that it touches, that the button is affecting. So I can run my Jest tests against everything downstream to make sure I haven't broken everything. Same for WebPack. Now if I change the button, I can go run the WebPack builds of all the apps that use the button...

\[00:27:52.13\] And the opposite is true - if I'm only touching one small widget used by 2-3 different applications, then the blast radius is a lot smaller. So you get some better CI wins for that, because most of your builds are pretty smooth and pretty quick, because most of the teams are focused on what they're focused on...

But then, when we have teams that come in and want to make repo-wide sweeping changes, we've built that in to be able to confidently say "I can change this card display widget and make sure that everything else alongside it gets tested", which is really cool and super-fun. It took us a minute to get right, but it's been really fun. And that's the kind of tooling that -- I just love building that stuff. I just love seeing how that affects people's day-to-day, and the excitement that people get when we ship an update to it that makes it even better, and they're like "Oh, this is so great!"

So yeah, the monorepo thing has been big... And I think industry-wide, that's another tool that we've seen grow in popularity because of Lerna; Bolt was kind of a next step for that, that we're using... Nx is another big, popular monorepo tool; there's a couple of different ones out there, but I think the monorepo for frontends is pretty big.

**Amal Hussein:** Yeah, Microsoft has released Rush recently...

**Jonathan Creamer:** Yup, Rush.

**Amal Hussein:** It looks pretty good, actually, and I think they're using it internally inside Microsoft, which is awesome, because that means you're getting good support...

**Jonathan Creamer:** And Google has Bazel, which is their thing for it... A lot of the big companies have monorepos. But does a startup just shipping code need one of those? Probably not... But for a team of 150 engineers, it's pretty nice to have the tooling of your monorepo to help shape it all and make it all make sense... So yeah, I'd say if you're a big company and you're having trouble keeping everything in sync, the monorepo is a good pattern, I would say, for modern build tools. it's very helpful. It adds some shape and clarity around making changes; and confidence. So I really like that strategy a lot.

What else, industry-wide, tooling-wise...?

**Amal Hussein:** While you're thinking, I can clarify something for folks. We'll get into Snowpack in a bit, but... Snowpack does have -- I guess we can get into it now. Snowpack has interoperability with WebPack, so that you can use Snowpack for -- it's really geared towards your local development... And because you need to support older browsers that maybe don't have VSM, and whatever else; you can actually just literally use -- you just plug in your WebPack... They have a plugin essentially for production; you just use WebPack to build your production bundles.

So for folks who are wondering, "What is Snowpack?" - well, we had Fred on the show a little while ago; I don't' remember what episode number, but we'll link it in the show notes... But Snowpack essentially is this awesome bundler that lets you -- it's ESM-first, so you don't need to bundle your JavaScript... So it's using native modules, and it drastically improves your local developer workflow, because you're able to build things file-by-file, and your spans and not gonna spin when you're doing a watch, and having to constantly update your whole bundle, update your whole bundle, update your whole bundle...

So Snowpack is really great; a lot of frontend teams are starting to adopt it. We're also considering adopting it for my team, and teams at large at my company... So Id' highly recommend looking into it, just at minimum for local development workflow; it's a game-changer.

**Jonathan Creamer:** \[00:32:01.05\] Yeah, I've definitely seen stuff about that. It's one of the ones that's like "Man, I need to look at that." I've got it in my ever-long to-do list of articles and things I need to learn about.

**Amal Hussein:** Right. I'm gonna throw Nick a bone here, because I'm gonna talk about TypeScript... But how do you -- there's configs around linting, and there's this kind of suite of tools that are what I like to call in the same cluster; they're things that have a lot of peer dependencies... Whether it's a Babel preset that requires these versions of Babel core, or whether it's a TypeScript linting rule... There's all these clusters which really for me make upgrades extremely challenging. For example, when WebPack comes out with a major release, there's a ton of tools built around WebPack, and have peer dependencies set. What are recommendations for how to manage that?

**Jonathan Creamer:** Yeah, I love that question so much.

**Amal Hussein:** And TypeScript, because Nick. \[laughs\]

**Jonathan Creamer:** Yes, because Nick. So what we have enforced, which is a little different, and one of the things that Bolt does at its core - which, Bolt is one thing, it's like a thing, but at its core what we wanted to enforce with our monorepo was there's a consistent version of every package across the entire repo. You can't have multiple versions of React in our world. We don't support it; we don't want it. We want everything to be consistent, so that way we can predict things better, and there's not forking Node module folders, where one of the packages in my repo required React 16.9 and the next one required 16.12. That causes all these other downstream -- it's just crazy.

So literally, if you would ask for a Babel plugin at 6.17.1, that's the only one that's gonna exist in the repo at any moment, period. We don't allow it; we'll fail the build. You can't do that. So we enforce that pretty strictly...

And in terms of that, going to the next build pattern or the new upgrade and dealing with those breaking changes... And even -- we do a ton of migrating things; we've gone from WebPack 2, to 3, to 4, and how did that work; we've moved code around... We write a lot of Babel plugins for doing code mods, actually, which is really powerful, and fundamental to how Babel itself actually works. It's this concept of an abstract syntax tree (AST), if you're not familiar. ASTexplorer.com kind of describes it. It's basically a way for you to write code, and that code can then get compiled down into a tree of like "This is a variable. This is a function etc" And then you can easily go in and replace a function call with something else, or whatever... Which is actually how Babel works under the covers, and why all of a sudden I didn't have to use tsc to compile my TypeScript anymore, because Babel released their own AST parser for TypeScript... Which was super-handy, because now I can use babel/preset-env and babel/present-typescript, and babel/preset-commonJS to whatever, or dynamic imports... And you can kind of combine these Babel plugins into something that makes sense for what your team's targeting. We've still gotta support IE11, at least for a minute; hopefully we're gonna kill that, maybe in 2021, hopefully. We'll see. And we wanna support private fields, or whatever. You can do all that kind of stuff, because under the covers you're using these cool AST things.

So our team actually has written several different ASTs to help us convert from old things to new things, and do those upgrades, by going to -- oh gosh, one of the biggest projects I worked on here at Eventbrite was actually taking us from \[unintelligible 00:35:53.08\] to 16. It was actually kind of hard; it took a while, because you've gotta make sure nobody's using the wrong \[unintelligible 00:36:00.01\] thing anymore, then you've gotta go in and upgrade some of these different libraries... So we had to write some code that writes code, to help that upgrade path. So if you're a team who manages a lot of code, like we do in frontend infrastructure, I cannot stress the importance and the usefulness of doing something like ASTs.

\[00:36:22.07\] It even helps because ESLint actually is also using ASTs, too. You can write ESLint plugins to verify if there's certain patterns at your company that you want to enforce, you can write ESLint plugins to have enforce that kind of stuff. There's all kinds of cool stuff that you can do.

**Amal Hussein:** Yeah, automation for the win. I think you're preaching to the choir. In this group we all love ASTs... \[laughs\] And generally, using automation as much as possible, for sure.

**Jonathan Creamer:** I think automation is the key there. So the question was "How do you manage upgrading things?" It's automation and verification.

**Amal Hussein:** And repeatability, I guess, is the best thing with ASTs, because you can just run it on your whole codebase; if you get something wrong, just git checkout, update your transform, run it on your whole codebase again...

**Jonathan Creamer:** Yeah. And it's funny... I didn't use to feel this way. I used to get really nervous, but I do like 9,000-file-long commits all the time now. It's like "Eh, whatever." It's no big deal anymore. \[unintelligible 00:37:22.29\] Because I have that confidence now that I'm not gonna screw anything up. And it's not just like finding and replacing, which - half the time I try to do that, I just break VS Code. I try to find and replace something across every file in our repo and it took 30 minutes for VS Code to do it. And it took an AST that I ended up running like 30 seconds to just scan the entire repo and change it. BRRRP, done!

**Amal Hussein:** Safe updates, right? ASTs are amazing for precision. One thing I wanna know for folks wondering why the Babel compiler is better for transpiling your TypeScript... We talked about this a little bit in Ben's show, but we can get into it now. Basically, Babel has a lot -- they're essentially an implementer on the TC39. The same way V8 implements JavaScript, Babel is considered an implementation of JavaScript, because they actually make polyfills, and they do transpiling... And they also deal with managing bugs and idiosyncrasies between browsers, right? So there's so much wealth there... Trying to replace Babel at this point is -- you know, you have to catch up to all the bug fixes... There's so much that they're handling, it's a good separation of concerns to use Babel to transpile and TypeScript to type-check, and not TypeScript to compile. You just get a lot more benefits there... So I was really glad when the babel/types merged; that was great.

**Jonathan Creamer:** Yeah, I agree. That's the workflow we also adopted.

**Nick Nisi:** Same.

**Jonathan Creamer:** TypeScript did a lot of really cool things around -- if you just wanna use TypeScript and you just wanna ship something and you don't care all that much, tsc is probably gonna be fine, especially with some of the composite project stuff that they have now, where it will only recompile the stuff you change. They have that built into TypeScript now, in terms of making things faster \[unintelligible 00:39:31.29\] It's pretty good. But yeah, as part of a larger ecosystem, we use tsc to type-check and dump d.ts files out to the filesystem that we can ship with our packages... Because that's the one thing that Babel can't do yet that I'm aware of, is generate the TypeScript definition files... Which is very useful, because if you are creating a package that you want those type definitions to be on for your autocomplete and your IDE, it's important to do that tsc step to get those type definitions.

\[00:40:07.01\] And the funny thing is tsc is running in the background of VS Code anyways for you. That's why VS Code rocks as hard as it does - it's because whether or not you're using TypeScript at your company... If you're just like "I use JavaScript!" and then I'm like "Are you using VS Code?" and they're like "Yeah", I'm like "No, you're actually using TypeScript." Because whether or not you like it, it's taking your JavaScript and running it through the TypeScript compiler, analyzing your code, and telling you "Hey, you misspelled this." That's TypeScript; that's the power of their compiler...

**Amal Hussein:** Which is powered by ASTs.

**Jonathan Creamer:** Which is powered by ASTs, exactly.

**Amal Hussein:** Bringing it all back... \[laughs\]

**Jonathan Creamer:** Yeah, they have like a -- if you ever just go look... I've just dug into TypeScript before, the compiler - it's insane. God, it's insane. And it's a massively different way of looking at ASTs than Babel does, too. It's literally just this huge, long file, the TypeScript compiler; it's crazy. It's fun though, I love it.

**Nick Nisi:** I have a question from a workflow standpoint. So when you're setting up these tools, and maybe as somebody who works more directly on the frontend, but they have a change that they wanna make - maybe a config change, or a tooling change, or bringing in some new tooling... How does that work? Does it go to you as a ticket? I'm just curious about the delineation... I asked about DevOps and DivOps; now frontend and DivOps.

**Jonathan Creamer:** Yeah, sure. That's a great question. We leverage the code owner's file pretty heavily at Eventbrite. We on the frontend infrastructure team own everything that is not owned explicitly by a team. So we have certain teams that own the packages, whatever, this folder; or this folder, that folder. And then everything else falls through to us. But what that means is -- we just had a guy from our \[unintelligible 00:41:55.07\] office come in and say "Hey, I've noticed that the Storybook Addons ticket that you guys have put into GitHub a while ago has a help wanted tag. Can I help?" I'm like, "Absolutely. That's why I've put that label on it."

I want to manage this stuff, I wanna own this stuff, but we want to treat our monorepo as like an open source project. We are the owners of it, but we want our teams who are interested in it, and have a bend towards the same mindset that I do as \[unintelligible 00:42:23.05\] Come and contribute, yeah. Absolutely.

My name is gonna get attached to the pull request as a code owner, and I'll see it, and then yeah; just approve, merge me. We have a merge pipeline that we manage \[unintelligible 00:42:38.26\] and it sends it off to Jenkins and merges it in, and then there you go. And then that person gets to have contributed to the entire frontend ecosystem at Eventbrite.

So yeah, very encouraged. We definitely push hard on telling teams "Don't just treat this as Jonathan, Kyle and Alex's project. This is everyone's thing. If you find areas where it sucks, tell us, and fix it with us, and work at it together."

**Amal Hussein:** Wow... That's so incredible. I also love that y'all are using the GitHub owner's files, because I'm assuming -- because you're a monorepo, so you use the GitHub owner's file to figure out who should be tagged on pull requests, and who should approve XYZ. That's a little bit into DivOps a tiny bit, right

**Jonathan Creamer:** Yeah, definitely.

**Amal Hussein:** Do you guys lock down certain files, like your package.jsons? I'm curious who gets tagged on certain reviews always, from your team.

**Jonathan Creamer:** We have a -- Jamie built a codeowners-enforcer package that actually helps with it, too. So if something goes into the repository that doesn't get added to the codeowners file, the build fails. Every folder has to have an owner.

**Amal Hussein:** Every single folder?

**Jonathan Creamer:** Well, at least at the top level.

**Amal Hussein:** Top level, okay. I was gonna say...

**Jonathan Creamer:** Every package; not like down to source components or whatever, but the package at that level does.

**Amal Hussein:** Yeah, that's amazing. Well, the DivOps, automating code ownership. This is super-cool.

**Jonathan Creamer:** \[00:44:11.29\] Yes, it's all about automating.

**Amal Hussein:** Automate it all.

**Jonathan Creamer:** Kyle likes to say that he likes to automate the pain away.

**Amal Hussein:** That's amazing. I think I need to give Kyle my phone number. \[laughter\]

**Break:** \[00:44:21.25\]

**Nick Nisi:** What you described is actually very similar to what happens at the company I'm at. We have a team like that that works on also a monorepo. We're using Lerna for that, but very much a monorepo to make sure we're all on the same version of React, using the same version of TypeScript, things like that.

Some of the things that they do are kind of -- I'd say like almost doing spikes to figure out the future of things, or maybe analyzing where things might go from an architectural standpoint across all of the projects that we're doing. Is that something that you would also put into the role of DivOps traditionally?

**Jonathan Creamer:** Yeah, this is something that we've been trying to figure out even within our own team - how do we draw the lines between the systems sort of side of DivOps, and the actual architecture side of DivOps. I love both sides of that, so it's actually very hard still in my own head; I like doing both, so I don't know. I will say, functionally, yes, we do have a lot of input into the architecture that goes into the monorepo itself.

Not only are we trying to help make sure that the build tools and systems (putting everything together) work, we are also trying to help steer... You know, right now we have 95 different applications; they're all using React, they're all using Redux... Like, should we squish those into a few and maybe have Next.js orchestrate those things together? And should we use Redux Form anymore? We use Redux Form pretty heavily; should we switch to something else?

We've been having a lot of conversations in our frontend guild meetings about stopping using Redux Form as much in switching to hooks, because now we can use hooks. For a long time we couldn't use hooks, because we were stuck on React 15.8, or whatever it was. So that side of my head \[unintelligible 00:47:22.23\] on its game a lot of the time too, because I get asked about those questions... And then I get asked to do mentoring. Because I've been doing this for ten years, and then I'm also mentoring folks on how application architecture should work, while also maintaining that stack...

So yeah, I think it does fit in. It's a wide umbrella, this DivOps thing, which is part of why I like calling it out, and just that awareness of everything that I have to deal with... Just writing it down; it's like, "Okay, those are the things", and I can just visualize it all now, which is great.

**Nick Nisi:** Yeah, I really like the idea of a team dedicated to improving the productivity of everybody else on the team, because otherwise that stuff just kind of gets pushed to the side a lot, or it happens not as part of your regular assigned task, and it's hard to get that assigned. So it's really good that there's somebody looking out for that, or a team looking out for the best interests of the development experience, while not taking away from the developers actually working on the user experience, and things like that. So it's really beneficial from that standpoint.

**Jonathan Creamer:** Right. And what's so interesting about what you've just said also - my team is doing all that we're doing, and sometimes what we wanna do is to actually step away for a second and let the feature teams talk and discuss best practices that they're seeing, and making sure that we're facilitating communication across all the different frontend teams.

We're dealing with frontend teams in Mendoza, Argentina, and frontend teams in Madrid, and frontend teams in San Francisco, and frontend teams in Nashville... So part of our role is also -- we have these weekly guild meetings where everybody that's really interested in frontend at large (not just infrastructure) comes together, we talk... And a lot of times it inadvertently becomes the frontend infra hour, which we don't want it to be, because we want to hear from everyone using the stuff we're using, so that we can help facilitate what is evolving as best practices inside of Eventbrite. And then also what we're seeing in the industry, so we can kind of help shape those best practices for the teams, and maybe put in some new lint rules to help inform "This is not the right way to use hooks. Don't do that." So that way we get consistency.

People jump from team to team inside of Eventbrite, and we even want new hires to come in and see -- not have to have a massive onboarding period of learning how frontend works at Eventbrite. No. We just want a standard access, so that anybody can come in, from any company, and just sort of get it. "Oh, okay. They're using hooks. And here's some Redux. The Redux is - whatever. But we get it. It makes sense." So helping set up some fences around that architecture.

**Amal Hussein:** I love how customer-oriented you are, by the way...

**Jonathan Creamer:** \[laughs\] Thank you. That comes from my product manager, \[unintelligible 00:50:14.08\] He's an incredible guy.

**Amal Hussein:** That's awesome.

**Jonathan Creamer:** Throughout the course of my career I've been at the benefit of having a lot of good project and product managers, that helped me do that... So we constantly are focused -- and inside of Eventbrite that's one of our big mantras, trying to make the lives of our customers better... Whether that be on the feature team for the folks creating events, or in the case of our foundations teams, helping those engineers just live better lives, and have fun writing code. No one wants to wake up every morning -- especially now we're all at home, nobody wants to just wake up and hate the environment that you're working in. We wanna make it better.

**Amal Hussein:** Yeah, that's super-cool. I'm just impressed... The culture of good ops folks, traditional DevOps people - they're extremely customer-oriented, and there's this strong communication factor, because they're typically the ones coordinating a bunch of teams that are very siloed, and you're the common denominator...

**Jonathan Creamer:** Yeah.

**Amal Hussein:** So I just love that you're advocating for that, and I think it's just great for people to hear that y'all have that culture at Eventbrite, because it gives people hope. Siloing is a big problem the larger your company gets, and nobody has it perfect. If you look at Google, Google feels like 700 companies really, to the external person... Because it's like "Wait, did they not know that messages exists already? Why are there seven other messaging platforms that seem to be cannibalizing each other." But there's just like... \[laughs\] Weird silos, you know?

**Jonathan Creamer:** The silo thing - boy, that rings so true to me. We had that problem where I came from at LonelyPlanet occasionally; we had folks in Australia--

**Amal Hussein:** It's in the name. Just kidding. \[laughs\] Just kidding.

**Jonathan Creamer:** \[00:52:07.14\] Yeah, yeah. And when I got to Eventbrite, I was like "I don't want that culture." And especially now, everyone's remote, everyone's working from home... And I've been lucky also that I've done a lot of remote work, and when I was appendTo for years we were really good about staying in touch, and communicating... And yeah, we have folks seven hours ahead in Madrid. So I committed myself to waking up at 7 my time, and being online for 3-4 hours of crossover with that team, because I want to be able to help them solve their problems if they have it. Then I'm online for the last few hours of San Francisco's day. I'm in a good timezone I guess too, luckily... Because then the Mendoza folks are an hour ahead.

So yeah, it's facilitating that communication across teams, and making sure everybody's on the same page...

One of the things I think people were afraid of when we started down this path was that we're gonna force you to follow our standards, and just rule with this iron fist, like "This is how things are done!" But that's quite the opposite of what we wanted. We want people to just feel like this is everybody's thing, we're working on all this together, we want input from anybody that wants to be involved, to help shape this. This is your work environment. We feel like we have the capability to stay in touch with industry best standards, and help keep moving us forward, so that way we're trying not to have to maintain tons of legacy code, and maintainability, all that stuff. So yeah, no silos, please.

**Divya:** I think it's interesting to think about, because it's unique... The company that you're at, you're sort of split into -- your focus is on tooling, and frontend tooling, and then the different teams that are probably more UI-focused, and building components, and whatever else...

**Jonathan Creamer:** Yes.

**Divya:** But it's interesting, because oftentimes when you think about the frontend tools that you use, it affects everyone. If you work on frontend, you're gonna have to think about tooling at some point. But how do you make decisions? How much agency do teams have? Because you've mentioned you have a frontend guild, there are lots of people who get to chime in... But overall, how does the decision get made? Because you own the tooling in your team...

**Jonathan Creamer:** Sure.

**Divya:** ...and then a specific frontend team that's working on this particular component might be like "We need to use this particular tool to move forward." But do they have the agency to do that, or is it something that they have to review with your team, and then your team approves, and then sort of moves to its implementation?

**Jonathan Creamer:** That's an awesome question. We've had that happen quite a bit. One of the big efforts was a team really wanted to roll with some Cypress testing. It had been something on my radar for a good bit, and I hadn't been able to experiment with it... And they just sort of showed up with some "Here, this is what we think would look good." Then our team's like "Cool!" And since we're the owners of the stuff, we see all the PRs; we just talk with them, and we're like "Yeah, this looks good. Approve. Go ahead and merge." And then they help us maintain it.

Then standards-wise, we've actually recently started this practice of writing what we call ADRs (architecture decision records). There's a couple of groups of Eventbrite right now meeting to come up with those. A salient example is like "Should it be \_\_fixtures as a directory name?" And then we'll write down some pros and cons of that, and have lots of people going in and read it, and approve it, and then we'll all merge it together, so everybody's sort of feeling good about that.

So we'll write these ADRs about new ideas we have... That's another good change agent for making sure people feel like they're a part of shaping the thing, and it's not just "Frontend infrastructure put this new thing in."

\[00:55:56.11\] To the point earlier about being customer-centric, I think we've built up a lot of trust with folks... Because we do focus so much on the customers, and making sure everybody's happy. In general, the frontend community trusts us to make the right call, which is huge. If we say "This is probably the right path", we generally get good -- and if there is an outlier that's like "I don't know, this doesn't seem to make sense", we just talk it out, and figure it out. It's been really, really great, I feel.

**Amal Hussein:** I was just gonna ask if you have an RFC process, a few minutes ago...

**Jonathan Creamer:** Yeah, that's it.

**Amal Hussein:** I was like "I wonder if you have that...", because that's the sanest way to do this, that's democratic. It's benevolent dictator, stressing on the benevolent part.

**Jonathan Creamer:** Yes.

**Amal Hussein:** So yeah, that's... Allowing for change.

**Jonathan Creamer:** So we have the ADR process... We also created some GitHub issue templates for folks that go in and create bugs or feature requests... We've got a feature request in for like "We need offline testing to try to speed up CI, because these integration tests take way too long." It's like, "Cool." That combined with some stuff I had picked up from some conferences, and suddenly we're doing this really cool Cypress testing thing where we're doing user flow testing with scenarios... And that all sort of came from feedback that we got from the GitHub issue.

We use GitHub Projects to manage those issues that are coming in, and labels, and just letting people feel like they can contribute.

**Amal Hussein:** Yeah, that's so wonderful.

**Divya:** Yeah.

**Amal Hussein:** This is why when I wish everything was open source, because I think people could really get insights into productive workflows at scale... It would be awesome.

**Jonathan Creamer:** That's why I created this DivOps community...

**Amal Hussein:** That's awesome.

**Jonathan Creamer:** ...because I'm tired of like "You guys doing your thing over here..." And about silos again - we've siloed ourselves of different companies too, which is sort of unfortunate. I love when I get in -- our DivOps, we've had a few meetings now... So Ben came to the DivOps group that we had a month ago and talked about what they're doing at Stitch Fix. He pointed these specific things that I'm like "Oh, great. I'm doing that here, too."I feel validated, like I've made the right choice.

So there's that validation aspect of the community, too... Because sometimes it just feels like you're just in this vacuum, like "I'm making stuff up as I go." And then when you get a group of people that do the same thing together in the same room and you find out "Oh, they're doing that, too? That's awesome!" Or they're doing that too, but slightly differently, and you're like "Oh, I didn't think about it from that angle."

There's a guy from the Shopify team in DivOps, and he was talking about their merge pipeline that they do, and I'm like "That's awesome! We have a merge pipeline, too; it looks different from yours, but now you can help me sort of shape what it could look like at Eventbrite. I need some insights from other people, from different places. It's all about diversity, and thoughts, and getting all kinds of different ideas.

**Amal Hussein:** Different inputs, yeah. That's so cool. I didn't realize that the community that you were starting was also kind of a mindshare between people for best practices...

**Jonathan Creamer:** It is.

**Amal Hussein:** ...not just like a support group. Because I thought it was an emotional support group, quite frankly... \[laughter\] But that's awesome. Consider me a new member, because I love nerding out about automation, and I use everything from Bash, to ASTs... I've been around the JavaScript world long enough to have just seen the patterns evolve... So it's nice to have some of that grandma knowledge to bring to this group.

**Divya:** \[00:59:47.18\] I am curious though... One thing that does come up if you've been doing this for a while - you said you've been doing this for ten years, and Amal has been doing it for a really long time - one of the things, as someone who's also been doing it for a while, going from Grunt, to Gulp, to WebPack, and now Snowpack... People talk about JavaScript fatigue a lot, which is this constant moving from tool to tool... Which also brings up the question which I think we touched on during the break a little bit, which is like "Are we adding complexity where complexity is not needed? And is there a way in which we can move forward where we're not completely obliterating --" Because frontend infrastructure is gonna be a thing; people are gonna always wanna bundle, and transpile, and as long as that exists, this sort of work will exist. But is there a way and a path forward where we can make it streamlined?

I think it is a luxury to have a team dedicated to frontend infrastructure, and I don't think that that's something every team can do... So do you see a future in which this is easy for people to get into and deepen their knowledge, without having to know everything?

**Jonathan Creamer:** Right. I think it kind of comes back to -- I heard this quote once when I was learning about all these different design patterns. Somebody said something like "Design patterns aren't created, they're discovered." And I think that's so true for this build stuff as well. Without us having gone crazy out there on these WebPack configs that are like 1,000 lines long, we wouldn't have arrived on what that webpack -p mode does. We had to kind of go crazy for a little bit...

I sort of think we have reached a point at which the innovation has sort of leveled out a little bit. Snowpack is a more recent one, but... Finally, that JS fatigue -- I remember going to conferences a couple years ago, and every talk was about JS fatigue. I've seen less of that now. I think we're finally getting over that hump, to a certain extent, because people went off and innovated, and now we've sort of found those common denominators about what things need to be there... And now that's why you're seeing frameworks like Next, and Gatsby, and Create React App, and Create Next App, and all these things become more popular. And then maybe the evolution to that is -- you know, we talked a little bit in the break again about where do we go in the future; maybe tools like Rust can come in and help speed things up, and who knows what's gonna happen next.

**Divya:** Yeah, it's interesting you brought that up, because we actually -- especially with Babel, there are a lot of people talking about how Babel is complex, and sometimes it's really slow, and there's a lot of issues with it... And part of it is implementation, part of it is also just community, and how much time you can put into open source etc. But it's interesting to see JavaScript tooling move in a direction that I just never thought that it would move into.

Now you see Rust coming into the fold, so you have things like SWC, that allows you to do TypeScript checking for you, which is way faster than Babel... Which I think, sort of almost to Nick's question, moves into this completely -- it sort of takes DevOps and DivOps and it's almost like DivOps moves in that direction really quickly... Because as we see people moving towards picking other languages other than JavaScript to write tooling, then is that even frontend anymore? Because that's almost full-on DevOps at that point.

**Jonathan Creamer:** Yeah, that's a great call-out. And again, it just kind of comes back to the whole thing, like "What am I? What is my job description?" I'm a frontend infrastructure person not writing frontend at that point. But I think it's just like picking a framework; some frameworks make sense for you, some don't.

We did the pick-your-own-adventure game with React and Redux, and it kind of goes for tooling, too. If you're hitting bottlenecks in your tooling -- you're probably not gonna be hitting bottlenecks in speed, just building some landing pages, marketing pages, little eCommerce sites; that's probably not the problem. But a big company is like -- we are where we're dealing with 10,000 JavaScript files. If you're hitting that performance bottleneck, something like Rust or Go might make sense. It's a new thing to learn, but it's gonna solve some of those performance bottlenecks. But it's about picking and meeting the problem where it's at, and not just creating problems that don't exist yet.

\[01:04:10.29\] If you're not dealing with 10,000, 50,000, 100,000 file-projects, Rust and Go probably don't make sense yet. At least not yet. Maybe in a year or so there'll be some more incredible Go and Rust tooling for frontend... We're getting there though. But picking the tool that makes sense for you and your team where you're at is what's important, I think. Just like picking a framework.

**Amal Hussein:** Yeah. YAGNI never gets old. You ain't gonna need it, but also don't pre-optimize.

**Jonathan Creamer:** Right.

**Amal Hussein:** I personally think we really have a problem in our community that's a side effect of being an engineer, I think. Everybody's got this problem, but in varying degrees. Some people have it worse than others, but the need to kind of want to over-engineer...

**Jonathan Creamer:** One of my favorite talks from Kent C. Dodds is his a-ha thing where he's like "Avoid hasty abstractions." And it's so true. Just don't abstract until you need it. Don't go crazy doing things until you find there's a need. And doing small, little things is okay. Just iterate and add value as you go. You don't have to boil the ocean at first.

**Amal Hussein:** Yeah. I honestly think code reviews have made that problem -- I think people feel the need to have everything perfect on the first iteration... And I think you have to remind people that - first pass, second pass... There is a conflict with wanting to have the perfect PR, and wanting to deliver it in iterations; it's difficult. I feel like the PR workflow doesn't communicate well when something is the one. First pass. Versus final rubber stamp.

**Jonathan Creamer:** Exactly.

**Amal Hussein:** And it would be nice to be able to do some more iterative delivery and communicate that more clearly with people.

**Jonathan Creamer:** Definitely.

**Nick Nisi:** I just wanted to give you an opportunity to tell us about the logo that you have for DivOps, because it's awesome.

**Jonathan Creamer:** Oh yes, yes. So I was sitting there doodling one day, and I drew the angle brackets and the hammer, and I was like "That kind of looks like Mjölnir, Thor's hammer." So I sketched something out that kind of looked like it. Also, when people ask me what I do that are not tech people, I tell them "Yeah, we're kind of like a hammer builder. We build hammers for other people to build stuff." That's the easiest way I can describe to a non-tech person what I actually do in my job. So I saw the angle bracket, and the hammer, I saw the Mjölnir, and then my friend David Neal on Twitter - he's a really great illustrator now, and also engineer. We've known each other for a really long time. So I threw it at him and he came back with that, and I was really excited about it. He's awesome. If you don't follow David, give him a follow, too. He's great.

**Amal Hussein:** That's awesome. We'll try to link his profile. Thanks for calling out the logo thing, Nick, because I feel like logos are what make things official in JavaScript communities, you know?

**Nick Nisi:** Exactly.

**Jonathan Creamer:** Yeah, it's true.

**Amal Hussein:** So... Not official until there's a logo, and a website that ends in .dev or .io, because .com was taken.

**Divya:** And a Discord.

**Amal Hussein:** Yes, and a Discord. \[laughter\] And a Discorders Slack channel... Increasingly Discord more so than Slack.

**Jonathan Creamer:** Yup. So I'd love to continue conversations with whoever is interested in this stuff. You can search my name, I'm everywhere - Jonathan Creamer, @jcreamer898. And the DivOps community, like I said, I have a URL; it's divops.dev. It's gross. It's just the most basic Gatsby thing ever... So if anybody wants to make it not gross, that'd be awesome.

\[01:07:54.10\] And then we're doing the Slack community thing, and hanging out in there, just chatting about -- somebody asked today some TypeScript questions, so I'll probably go in there and answer some TypeScript questions. So yes, definitely feel free to join and chat online. This is what I'm passionate about.

**Divya:** Nice!

**Amal Hussein:** So I have a parting question before we end...

**Jonathan Creamer:** Okay.

**Amal Hussein:** How do we know that the Slack people are people in your channel, and not bots that have been created by all the DivOps folks?

**Jonathan Creamer:** \[laughs\] That's a very good question.

**Amal Hussein:** How do we know? Do we know? Can we know, is the question, really... I see you typing already. Just kidding. \[laughs\]

**Jonathan Creamer:** Yeah, right, right... Most people that came in gave intros, and we said hey, and we meet every now and then to talk... But yeah, that's a good question; they're not sentient beings.

**Amal Hussein:** Well, thank you for answering my question in a serious way. I really appreciate that you took my question seriously. That's awesome. \[laughs\] Thank you. So with that said, Jonathan, you are, I would say, gold for any team writing JavaScript. You and all of your teammates.

**Jonathan Creamer:** Thank you.

**Amal Hussein:** We need to clone you. I wish more companies had budget for this role, and this focus... it makes more sense at scale, but it's a job that needs to be done for anyone that's writing modern web applications. It just kind of sucks for smaller companies and smaller teams. Developers are just doing both jobs, and it's nice to have the luxury of separating those concerns.

**Jonathan Creamer:** I think if you don't, and you're a company that doesn't have that budget, it's important to just sort of formalize it a little, at least yourselves. Just meet and talk, and write things down. That's really the biggest thing. For the longest time everything was up here, in my head, just spinning around, and I didn't put it on paper... \[unintelligible 01:09:49.13\] is massively important, not only for yourself. You can just offload your memory into a different place, and remember why you made decisions, and come back to them later, like "Oh God, why was it that I had to install this Babel Module Resolver plugin? I completely don't remember." And then you can go back and see "Oh yeah, this is why." So write things down, talk, communicate... It comes back to communication; it's key in all of this.

**Divya:** I also like that you formalize it in terms of just like a process... Because for so long, even for me, embarrassingly, when I work on tooling I think I'm not actually doing frontend. I'm just like "Oh, I'm doing a thing that will then allow me to do the work I need to do." And so I'll spend a week building a Rollup config, and I will be like "I was supposed to be building this, but I was building this..."

**Jonathan Creamer:** \[laughs\] Yak shaving.

**Divya:** ...and felt like I actually didn't do any work...

**Jonathan Creamer:** Yeah, I know.

**Divya:** Which is interesting, because if you think about it, that is sort of related.

**Jonathan Creamer:** It is.

**Divya:** And it's not yak shaving, even though people think it is... To some extent it could be, but--

**Jonathan Creamer:** It's important, yak shaving, though...

**Divya:** Yeah.

**Jonathan Creamer:** You might spend five hours messing around with the config, and then you've found one thing that was like "Oh, that was actually what I needed", and you put it back, and that five hours of yak shaving exploration was actually massive important, because it simplified some part of your flow that maybe you didn't know existed until you went and explored it... And now you've automated the pain away.

**Amal Hussein:** Yeah. I'm really glad that this tagline that I came up with is becoming--

**Divya:** It's catching on.

**Amal Hussein:** Yeah. And I don't even know - Nick, is it shared credit? I don't know... All I know is that I should be on the bottom of whatever readme file, along with Nick and Divya. It was invented here. \[laughs\]

**Divya:** \[unintelligible 01:11:33.29\] Copyright.

**Amal Hussein:** Copyright. But no, it's been such a pleasure.

**Jonathan Creamer:** Thank you.

**Amal Hussein:** We hope to have you back on the show again...

**Jonathan Creamer:** Yeah, anytime. I'd love to hang out.

**Amal Hussein:** Because it's an evolving thing...

**Jonathan Creamer:** Yeah. Anytime you talk about WebPack, I'll just show up and just hang out and listen and ask questions. Or build tooling.

**Amal Hussein:** Or build tooling, right. Well, we'll link to everything that we talked about in the show notes, including the community, the blog post that kind of started it all, you'll get to see the logo... We have so many links.

With that said, thanks everyone. We'll see you next week!
