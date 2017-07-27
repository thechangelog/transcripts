**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is the last show of the year, episode \#233. Big show, talking about Webpack with Sean Larkin. We talked about how fast open source moves, how fast Webpack is moving, the core team, the formation, joining the JS Foundation, the problem it's solving, the bleeding edge features, sustainability, the team and Sean's efforts, their work on Open Collective... A lot of stuff packed into this show, so I hope you enjoy it.

We have three sponsors for this show today - Code School, Toptal and Rollbar.

**Break:** \[00:00:52.14\]

**Adam Stacoviak:** Alright, we're back, we're talking to Sean Larkin. Jerod, Sean is, as you said, one of the most enthusiastic people for Webpack.

**Jerod Santo:** That's right.

**Adam Stacoviak:** ...or maybe in general in open source, I'm not sure. What do you think?

**Jerod Santo:** He's like a true evangelist in terms of the excitement, the helpfulness... He's out on Twitter with "\#webpack", searching it, finding people, helping them out...

**Adam Stacoviak:** Whaat?!

**Jerod Santo:** Yeah, yeah!

**Adam Stacoviak:** That's awesome.

**Jerod Santo:** He's truly getting people on the Webpack bandwagon. And not only that, he's also from my neck of the woods.

**Adam Stacoviak:** Oh... Omaha?

**Jerod Santo:** He's from Lincoln, right Sean?

**Sean Larkin:** That's right, I live in Lincoln, but I work in Omaha.

**Jerod Santo:** Okay. Lincoln, about a 45-minute drive, and works in Omaha, so it's always fun to have another member of the open source community rockin' it from Nebraska.

**Sean Larkin:** That's right, man, it's a hard land.

**Jerod Santo:** We're excited, and it seems like the whole frontend community is excited about Webpack in general, and Webpack 2 in specific. We have a lot to talk about around that, why it's exciting, what problems it's solving, what makes it different and what's happening in 2.0. But first we'd like to get to know our guests a little bit, so if you could give us some background, help our listeners understand where you're coming from and how you got to be on the Webpack core team as the... Community advocate? I don't know exactly what your title is, but I just call you the evangelist for Webpack and all things around it.

**Sean Larkin:** Yeah, and you could just say I'm a maintainer. We all have specific focuses, so that one I think I fell into because I'm the only American maintainer, and speaking English as my first language.

**Jerod Santo:** Gotcha.

**Sean Larkin:** But dialing back... Man, get some popcorn or whatever you want; I'll try and not make it a long story. Long story short, I'm a previous technical support rep who kind of went rogue, and got tired of not being able to fix people's problems. The first place I worked at in the tech community was when I moved here to Nebraska - my wife's from here - and I just wanted to get a job that was consistent. So I did tech support, and I did a really great job at it, but it was just so frustrating having to work around issues, getting the same calls every day... So I kind of took an interesting quality assurance in programming, and started from just doing like little Apple scripts, to learning Ruby...

\[00:04:16.17\] I worked hard enough at that company and kind of proved my worth, and they eventually hired me to work on Objective-C for their native application product that they sold. From there, I had the official title as a software engineer.

Nine days later I got fired on my birthday for sharing one line of source code. TL;DR version is some people were not very happy that I had been able to make it as a software engineer, people on the support side of the company. So I think they were just looking for a reason to get rid of me. But I tell people that because it's like the best thing that's ever happened to me. I was able to work at a small digital agency and got to kind of bust my chops with Ruby, Ruby on Rails and some other web technologies, and then I had the opportunity to work in Omaha for the first time at a retail company called Hayneedle, who got bought by WalMart now. I did a lot of almost fully exclusive Javascript.

Then I worked shortly at another contracting job where I got introduced to Webpack, called Infogroup. I was kind of blown away at how incredible the dev experience was. Mind you, I didn't have to set it up myself... I've heard the stories from people. But it was already set up and it was just an awesome development environment, and there was a React shop... It was kind of my first time experiencing a bunch of different technologies, but it was a great learning experience.

When I left there to take a job at Mutual of Omaha as a UX developer where I work currently -- you know, being at an insurance company you get the opportunity to have a little bit more research and development time, because you have things like compliance, state compliance, copy and legal... So the dev flow or the dev cycle is a bit slower. My first few weeks working there I had the opportunity to research Webpack and Angular. I was able to get some sort of boilerplate setup, and we use still exclusively across our team.

From there... I didn't even know you could submit talks to conferences... That was kind of a new thing to me. So I'd just submitted a talk to NG-Conf, and I was lucky enough to get accept. They said, "Alright, we would like you to actually do a workshop on how to use Webpack with Angular 2." That was a whole immersive learning process for me as well, and ever since then I realized how important it was to kind of spread the word about Webpack. It was at that time that I found out after the workshop - which went really well... You know, a lot of people were like, "Who is Webpack? What is this?" The Angular community had no idea really, with the exception of a few people, so it made me kind of frustrated, because you see this tool which has so much potential, and nobody really knows about it in this community.

The first thing I did was try and really stress how to get funding for the team. I kind of put myself out there and jumped in the Gitter chat that was there (a web-based chat, kind of like Slack, but for GitHub repos) and at private I mentioned all of them and pulled them into a private channel and I was like, "Hey, I wanna get you guys paid. I really believe in your tool. How can I help?"

\[00:08:00.11\] We talked for about three weeks off and on, and I found out that Kent C. Dodds was doing a podcast - JS Air - with that core team on it, and I was like "Oh my gosh! I need to meet them!" I think I talked to Jeff Whelpley and I said, "Hey, can you get me on this panel? I just wanna be there as like a panelist and just talk, or sit behind the scenes." I don't know if it was because Kent wanted to save face or something, but the week before it was announced, he goes "Introducing the Webpack core team", and I'm there, right next to those three, and I'm like "Oh my gosh...!"

The day of the podcast/live stream they asked me "Do you want to be on the core team?" and I said "I would love to."

**Jerod Santo:** So they asked you because they were -- they were already planning on this, right? Or did he just announce it and they were like, "Well, I guess you can be on the core team"?

**Sean Larkin:** I think Kent was a little apprehensive at first of having me on the show, but then he asked the team and they were like, "Yeah, you can be on it." We had been talking behind the scenes on this Gitter chat for about three weeks, so I think by that time they already knew who I was, they extended that invite and I was like, "Okay, yeah."

So it was kind of like a freak accident almost, but... All I can tell people is that you should just put yourself out there and do the best that you can and show that you give a shit about the tools you wanna support and be a part of.

**Adam Stacoviak:** That's great advice, man.

**Jerod Santo:** Yeah, that's a great story, just joining their Gitter chat, and being like "Alright guys, let's get you paid." That sounds like a good way \[unintelligible 00:09:43.28\] open source communities... Like, "Oh, somebody's here and they're gonna get us paid? Come on it! Can we get you a cup of coffee?"

**Adam Stacoviak:** Can we break that down though, Jerod? I don't know where you were going with this, but I was really curious \[unintelligible 00:09:54.00\] the "get people paid", like what does that mean?

**Jerod Santo:** Yeah, and why did you think of that as your first initiative with Webpack?

**Sean Larkin:** Well, a lot of questions were swirling around my head, like "Why aren't these guys working on it full-time? Is it just a lack of time etc.?" I guess I kind of paraphrase when I say "Let's get you paid", but it was the first thing I said. I kind of asked some more questions... There were some companies that I met at NG-Conf who were kind of asking these same questions, like "What's the release cycle?" or "Would you work on this full-time? If not, what kind of monetary funds would help?" etc.

It kind of just lead to learning more about them and how much they work on it. Before I joined, it was just Tobias Koppers, the original author, who was maybe working on it five hours a week on his free time.

**Jerod Santo:** I can't help but hop back maybe three or four pegs, and just have to ask you about these two lines of code, or one line of code...

**Sean Larkin:** Oh please, go ahead.

**Jerod Santo:** I mean, was this launching a nuclear missile, or was it your company's private SSH keys, or what the heck?

**Sean Larkin:** Actually, it was not even in the product that they sold. Basically, you can kind of share a lot of view controllers between -- so the older version of the product, we actually created a ticket tracking system out of it. And since I was coming from support, I had the best experience working on this tool, so I became the primary software engineer on what we called ticket tracker.

Well, there is an if statement in there that I wasn't a hundred percent sure about, and so I sent a message to two previous employees who were also devs, and I was like "What do you guys make of this?" Those were just if statements with some logic in it, and that's it.

**Jerod Santo:** So they were no longer employed there, so you were breaking some sort of rule, I guess?

**Sean Larkin:** \[00:11:52.28\] Yeah, the official was "Sharing trade secrets" for something that didn't even sell.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Oh my goodness...

**Sean Larkin:** But it was the best thing that's ever happened to me, to be honest. I'm so glad that it happened... I probably would still be there, just working on Objective-C, which isn't the worst, but...

**Adam Stacoviak:** Do you say that in retrospect, like now you look back and that's the best thing? Or at the moment you were like, "Sweet"?

**Sean Larkin:** I was really upset at first, because it was like I had finally gotten over the hill, and I had overcome the adversity of something that that company has never seen, let alone probably five percent of all people who were in support and wanted to make something better with their lives and do something more impactful. So to get shut down like that so quickly... I was upset and a little concerned, because it was like, "Well, I've only been officially a dev for nine days... What am I gonna do?"

The beauty of LinkedIn is that most people don't care and they just see your title and they're like, "Alright, ship it!" I mean, I had been programming for longer than just nine days officially, but they wanna see what's on paper.

Retrospectively, it's the greatest thing that could have ever happened to me to really propel myself and my involvement in the community and open source forward.

**Adam Stacoviak:** How did it do that? What were the things that happened to make that the best thing?

**Sean Larkin:** I think it was just being able to get me into places... It sounds silly to say, and maybe a little contrived, but once you have that title, it was so much easier to find another dev related job. I had tried in the past with just saying, "I've done technical support, but I've worked on these languages on the side...", but that usually wasn't good enough.

**Adam Stacoviak:** It was like you were in the club, you got past the velvet rope.

**Sean Larkin:** Yeah, exactly. Once you're in, you're good. I've maybe only been doing full-time Javascript for about two years, and maybe some other technologies for no more than a year and a half, so it's like... You know, I'm a quick learner and I think some people saw that, and the people who did believe in me at the company were happy to make it happen.

**Jerod Santo:** Do you think that title gave you a certain level of confidence that you could have achieved otherwise, but it was like somebody else named you this, so now it felt like you were one? Or did you already feel like you were a software engineer and finally somebody put the title on your desk?

**Sean Larkin:** I think the title is a recognition, for sure. It wasn't as much confidence, because I've known I'd been able to prove myself worthy, but it's kind of like that thing people wanna see on paper - "Oh, do you have this on paper?" I knew I could pass the eye test, but having the stats is what I think people were concerned about.

**Jerod Santo:** So now you're a Webpack core team member, maintainer, and really kind of the voice of the Webpack team...

**Sean Larkin:** ...to the community.

**Jerod Santo:** And like I said during the intro, you're out there really in the trenches - on Twitter... Tell us a little bit -- we're gonna get into Webpack probably on the other side of the break, and why you're so excited about it, and why everybody in the greater Javascript community is kind of letting the Webpack tractor beam pull us in... Even us at the Changelog have been pulled in; we use Webpack to build our assets. But what is (not about Webpack) about you -- first of all, tell everybody what you do in terms of Webpack and the community, helping people, searching hashtags, staying up late at night...? Give us a little bit of your workflow and what you've been doing for Webpack users.

**Sean Larkin:** \[00:15:43.22\] Yeah, so initially I wasn't very comfortable with making core changes to the library; I just wanted to do whatever I could to help encourage smarter people, people who are way more brilliant than I am, to get involved, but at the same time learn a bit along the way.

My role literally represents the voice to the community, but at the same time the voice of the community back to the core team and the organization. From day to day I probably spend about four hours on Twitter just searching Webpack, and sometimes Javascript on the side, depending on if there's something controversial or whatnot. But literally, 98% of the time, if your tweet had Webpack in it and it's something that I could probably assist with or share guidance, or maybe convince you to help add a PR for our docs page or what not - I'll respond to almost all of those tweets.

I guess aside from that, I think you could see on the GitHub, under my face it says "pushed for the core team to form." So initially we didn't really have a core team, and we didn't really have any transparency organization, a Medium publication or anything. Those are some of the things I thought really would be... We really needed people to have a glimpse to the inside of what's happening behind the scenes, even if there wasn't much.

We published a repo, meeting notes, which hasn't -- it's my fault too, because we've been so busy, but I haven't updated it in a month. But we now have weekly core meetings, so every Wednesday morning (at least my time) we meet face-to-face on Hangouts and we talk about the direction of the organization and what we need to get done and things like that.

I would say that if you boil it all down, being an evangelist is one thing, but also somebody who tries to help anybody reason with the issues that they're having, or to help guide them in the right way, or just get them excited about using a tool that has in my opinion limitless potential.

**Jerod Santo:** It seems to be paying off... Do you feel like all that hard work that you're putting in is being fruitful, or do you feel like you're spinning your tires?

**Sean Larkin:** I would say that if we look back from April where I first got involved and first talked to them for the first time, I think on paper the stats definitely show it. We were already like 400% in increased downloads on NPM; now we're at about 900-1000%. So I think we've really kept the momentum.

But at the same time, when I started there were a lot of negative tweets about Webpack, and I don't know if people are just hiding from me or not, or just don't want me to respond... \[laughter\]

**Adam Stacoviak:** \[unintelligible 00:18:56.18\] so active, don't tweet!

**Sean Larkin:** I try not to be the person who \[unintelligible 00:19:00.08\]

**Jerod Santo:** Secret words for Webpack, or stop using the hashtag...

**Adam Stacoviak:** Anagrams, and stuff...

**Jerod Santo:** Right, so you don't find them.

**Sean Larkin:** \[unintelligible 00:19:06.24\]

**Jerod Santo:** Right.

**Sean Larkin:** But really... Nowadays all I see are article retweets, and maybe an occasional person who needs some help, or a praise about our new Docs page, and things like that. I think it's really made a difference... If you look at our open collective where we take donations and support, the amount that we've raised in the time since 15th October when we announced it has been ridiculous.

**Jerod Santo:** Yeah, absolutely. It just speaks to the benefit of having someone like yourself around and supporting people who are more technical, or doing -- you know, we talked about the Webpack core team... You have Sokra (Tobias), these developers who are doing really groundbreaking work in many ways, interesting technical challenges, and solving needs, and yet you kind of gotta put a package on it, you have to have... You don't HAVE to have; sometimes meritocracy works, but lots of times, especially a tool that is dense like this, it's difficult to get into.

\[00:20:21.28\] You see the configs and as an outsider you're like, "Wow, this is too hard for me to use. I'm gonna go back to whatever scripting I had, or just script tags" or whatever, but the value of having a well-rounded team is striking to me, and having somebody of your skill set who's technical and on the inside, but is doing more of the Docs, the helps, thinking about it as more of a product or an overall package.

**Sean Larkin:** Yeah, absolutely. I'm always thinking about sustainability and the future; every day I spend at least an hour and a half just reading the source code and trying to learn more, because I'm only at about 70%. I've gotten maybe about 10 or 20 commits now into core, but there's so much more that I need to learn to be able to help people, especially when it comes to more difficult challenges.

But yeah, you're absolutely right... Andrea Goulet I think her name is - I listened to a talk at Nebraska JSConf that she did this year, and it touched me in a way and really validated my reasonings for what I did... It was saying that no organization will succeed unless it has great communication. It's just as important as the code itself. So being able to have a voice for the people and vice-versa has really bore fruit of success for us. I've seen impact that we and our work has had on other people who are maintaining repos. The support that I've seen has increased \[unintelligible 00:22:05.09\] in React. People who didn't really have super strong advocacy, now you find people who are doing it extremely well. Can I credit that to what we're trying to do? Maybe not, but I think everybody together is seeing the value

**Jerod Santo:** It's also worth pointing out that this is all happening very fast. Like you said, you're harking it back to the good old days when you got involved, back in April.

**Adam Stacoviak:** Hah! That's funny.

**Sean Larkin:** I know, right? \[laughs\]

**Jerod Santo:** This is the speed of the open source community. Lives change very quickly, and projects live and die very quickly. But one thing just for the audience - if you wanna troll Sean, this is what we did with the Changelog Twitter account... I think it was last week, when we were getting ready for this show - we went out there and made a tweet about the first time you demo Webpack to a friend and it's a gif of a guy showing off his knifing skills; he throws a knife and it bounces back and almost hits him in the face. I just hashtagged that Webpack, not because I like -- I actually dislike hashtags as a thing, but I knew if I hashtagged it Webpack that Sean would definitely see it. And sure enough, he replied to us.

So he's out there on the Webpack hashtag. If you wanna troll him, just put something ridiculous on Twitter and then make sure you hashtag it Webpack, and Sean will have to see it.

**Sean Larkin:** Yeah.

**Adam Stacoviak:** It can be like a silent thank you, or a passive way to say hello in a kind way, I suppose.

**Sean Larkin:** Absolutely.

**Jerod Santo:** It was a troll of love, it was not a troll of hate. I hope you felt that love, Sean.

**Sean Larkin:** Absolutely. I did, I thought it was funny, too. It was good.

**Jerod Santo:** \[00:23:50.17\] Alright, well that's gonna be our first break opportunity. We've been talking about Sean and his history with Webpack, and Webpack as a movement, and kind of one that he's been ushering in and helping along, but we haven't talked about Webpack the tool, the project, the technical merits, those kinds of things. So we'll take that up on the other side of this short break.

**Break:** \[\\00:24:13.21\]

**Jerod Santo:** Alright, we are back with Sean Larkin, talking about all things Webpack. Sean, we haven't even talked about what Webpack is, we just kind of assumed our audience knows. And they probably do know, but tell us what Webpack is and what problems it's trying to solve, and we'll kind of go from there.

**Sean Larkin:** Maybe I'll describe the problem or what things were like two years ago in the web development community. Before we had module bundlers, which is what Webpack is, the primary way to add code to your website was to either include it as script tags, whether it be multiples, or just have one script tag. Now, a lot of times maybe you can think back - I can remember cases for me, some places I've worked, we had like 30 or 40 script tags in the browser, and we struggled from all sort of issues... From race conditions, some code was relying on other code that didn't execute quick enough, or you were loading libraries like Lodash or Underscore, that maybe you'll only use two functions from, but you've got the whole library (I know that happens with Moment.js also). So things like that, and we're ending up with these huge, slow... Tons of network requests that are caused by doing so, but then also at the same time we were using so much duplicate code, and code that never even was run in the browser when you used it.

The Node community, when it comes to running Javascript, uses a slightly different approach. You start with one file, and then kind of a module loading system which is, you know, CommonJS are using the require statement. So it allowed you to create modules that you could require code from one file to another, and so it allowed code to be encapsulated, as well as allowed you to only pull a require in parts that you're using etc.

\[00:28:20.06\] Back in the day, maybe about two years ago, Tobias Koppers created Webpack. Webpack is a module bundler that takes that idea of using requires and import statements like in ES2015, starting at a single file, which we call an entry point, and then it collects all of the dependencies through each of the files that are referenced in it. The result is one, two, or maybe even four or five bundles of code that only contain the code that you're actually using.

On top of it, you could go even deeper and say that Webpack automates tools or takes care for you - certain tasks like uglifying your code, minifying, creating source maps... It performs a feature called code splitting which allows you to split your Javascript into many asynchronous chunks, so that you can load code after the initial render.

Webpack is a developer experience tool, it's a performance enabler with all these design patterns like lazy loading and code splitting, but it also allows you to do some really crazy things. It treats everything as a module. It could be CSS, HTML, images, PNGs or fonts, and you can require all of those into your Javascript. And as long as you have the right set of transforms, which we call loaders, you can use that code and bundle it also into your application. We say it's a static asset bundler, or a static build tool.

**Jerod Santo:** So it does a lot of things.

**Sean Larkin:** It does a lot of things.

**Jerod Santo:** ...which is perhaps why it's somewhat complicated, right?

**Sean Larkin:** Absolutely.

**Jerod Santo:** Or probably from your perspective it's not complicated, but from many other people's perspective... Or maybe it is, because you have to explain it all the time.

**Sean Larkin:** Yeah, I mean... Always giving the intro is kind of hard, because it is so multifaceted. It can do so many things, that I always forget like 30 things that it can do, while trying to explain it.

**Jerod Santo:** Something that's useful sometimes - and I like the way that you cast it in terms of "This is how things used to be and this is how things are possibly with Webpack", but what about in the context of other tools? Many people may be familiar for instance with Rails asset pipeline, they may be familiar with Gulp or Grunt, they may be familiar with Brunch or these other tools that do similar things, they have some sort of overlapping features, but they don't all do the same things. Can you cast it in light of existing tooling?

**Sean Larkin:** Yeah. For example, Grunt and Gulp are just task runners; they're gonna perform operations, and you write tasks that do things to your code. The example I like is let's say you're using Lodash and you wanna create a bigger monolith Javascript bundle; Grunt and Gulp don't understand the dependency graph that Webpack creates when it runs. So what's happening is that you're getting that entire... You're just smashing a bunch of Javascript files together and concatenating them, instead of only requiring the dependencies and parts of those libraries that you're using. That would be one thing.

\[00:32:05.09\] I think also instead of having separate tasks for each of your types of files, which you would probably do with Grunt or Gulp, Webpack is like the single one running ahead of time compiler that handles all of those things for you.

**Jerod Santo:** Say that again, "one single ahead of time compiler..."?

**Sean Larkin:** You run it once, but it's performing all those tasks behind the scenes that you configure. But it's like an ahead of time compiler for the web.

**Jerod Santo:** Gotcha. One thing that you've mentioned and I've seen it in practice - I still don't completely understand the advantage, so maybe you can help with that... Bringing your CSS in, bringing your images is - I can probably enumerate a few advantages, but I prefer you did. Because, you know, traditionally I've been down with like, "Let's minify it and concatenate... Let's uglify all the Javascript, let's uglify everything, but keep them separate, keep them safe", you know?

**Sean Larkin:** Sure.

**Jerod Santo:** But this is a whole new world where it's like, "Let's just put it all in one big Javascript bundle and then break that up into chunks that make sense and ship it." Why is that better?

**Sean Larkin:** Well, what I like to say is you don't have to bundle your images into your javascript, but you wanna have those images managed by Webpack. We can use one of the loaders or transforms that I talked about as an example... So let's say you want to have an image that's loaded into Javascript, or you require it into a Javascript file - you have two options on that loader that say "Specify a limit", which is just the file size, and if that images over that limit, then just go ahead and emit it to your build directory or your dist folder. Otherwise, if it's under a certain limit, then go ahead and base64 inline it, because the cost of an extra network request is greater than the cost of the bundle size.

**Jerod Santo:** I'm sure that they do because you guys are on top of the curve, but in the up-and-coming HTTP/2 protocol is it still the case that that's better with HTTP/2 because of the pipelining and the single connections and all the other things that they have?

**Sean Larkin:** There's benefits and there's disadvantages. For example, when you're bundling, we have some features for HTTP/2 called the aggressive-splitting plugin. What that does is it leverages that idea of the streaming or multiplexing that can handle let's say 50 concurrent network requests, and you can create 50 small bundles. But to just use a module loader and dynamically run every dependency and require statement as like a network request, it's... At least the studies that have been done so far show that having smaller bundles is more performant than it is to just have no bundling at all.

**Jerod Santo:** That's interesting.

**Adam Stacoviak:** Who is this for? Who primarily uses it? What kind of developer? Who cares to this degree? People who care about performance? That's kind of everybody to a degree, but who in particular...?

**Sean Larkin:** \[00:35:52.16\] Well, you'd be surprised... \[laughter\] In a perfect world, I'd want it to be for everybody. There's some people - let's say like Dan Abramov of the React and Redux team... He thinks Webpack is a very low-level tool. And in some cases, if you look at all the wrappers that sit around it, maybe that's the case. But in my opinion, we wanna make it as usable for anybody to take and just say, "I wanna be able to split my code up, I wanna know how performant these bundles are, I still wanna be able to work in any dev flow or dev stack, using any type of templating or pre-processing, and have it just work." That's kind of our goal, to be able to make it easy for anybody to use, but at the same time not sacrifice performance.

**Jerod Santo:** What are some of the steps that you guys have done to get there? We've had Webpack 1 for a while, now Webpack 2 is coming out... It'll be here - fingers crossed - 2016 calendar year Webpack 2 will ship; right now it's in release candidate stage. I know you put a lot of work in the documentation, you have example Webpack configs... That's actually a huge boon, because you have to basically config your Webpack with a config file, and having like "This is what I wanna accomplish, here's a config file that looks like that" - that's very helpful... But what are some other ways that you've smoothed out with Webpack 2 and tried to bring it up a level so that people can use it without feeling like it's a little level 2, like Dan says?

**Sean Larkin:** Yeah, absolutely. First, like you said, was our new documentations page. Originally, that was the only that we wanted -- that was really holding back Webpack 2 as a release candidate. We just finished that milestone, so you can check out Webpack.js.org to kind of get that new experience.

Some of the things we wanted to do is simplify the way things can be done. I guess early on in version two you could write those transforms I talked about loaders, you could write them in like 30 different ways. You could pass a loader property or a loaders property, and there wasn't really any way that was the wrong way to do it, but there were caveats for some.

We wanted to make things a little bit more explicit. A smaller example is that you could say the name of the loader, or you could do the name of the loader -loader. So like "babble" or "babble-loader". We've made that explicit now. We're slowly trying to not have a bunch of breaking changes, but also have very simple ways or one way to do things.

I'd say another huge thing is our configuration validation. This is something that just landed as of like beta 25, and it has significantly reduced the amount of errors we have seen on our GitHub, on Twitter etc. Essentially, if you have a property that's not correct or is in the wrong place, or let's say you put the plugin's property inside of somewhere it shouldn't be, we now have a schema that will validate against your config and it will prevent you from even building, and saying "Hey, this is wrong. This can only accept a string, or an object etc." That's been a really huge usability enhancement.

**Jerod Santo:** I can attest to that first one, because when I was first getting going I got Webpack working really quickly, which was great, but then when I wanted to do slightly more fancy things... You start looking at examples, and because there is, like you said, maybe 30 ways -- there are lots of different ways to go at the same thing, all of the examples out there are different, and they're all trying to accomplish the same thing, and they look different than my config. So just in your example, mine says "sass" and then an exclamation mark and then "css", or whatever... But this one says "sass-loader", and it uses ampersands, or.... There was no continuity or consistency in the examples of other people's Webpack configs. That makes it very difficult to piece yours together, so I think that's a great move - "Let's simplify the happy path, so it'll just be this one. This is how you should do it."

**Sean Larkin:** \[00:40:19.22\] Absolutely.

**Jerod Santo:** We felt you guys are doing that, if you've been upgrading on the betas of Webpack 2, and our config begin to go into deprecation mode. "You shouldn't do this anymore." \[laughter\] We had a couple of those, but it's a beta, so we can't complain.

**Sean Larkin:** People will complain, though.

**Jerod Santo:** Well, of course.

**Sean Larkin:** ...but that's okay, we like that though. One of those things we love is having the people who have the strong voice and wanna be candid with us, because we wanna talk about the issues... I like to say that those kinds of people are our best future contributors, because they have good ideas in addition to some heavy complaints.

**Jerod Santo:** Right. So one of the features that you mentioned, which I think sets it apart from all the other ones, is the removal of code that you're not using. Is that called tree-shaking? Is that the same idea, or is tree-shaking something different?

**Sean Larkin:** Well, it's kind of like... Yeah, it is. It is a feature of Webpack 2, probably the most sought after I guess, for size. Since Webpack understands every dependency statement in each file, it can see what code is actually used or not, and that's kind of like the tree-shaking part. But then there's also dead code elimination, which actually is what reduces the size of your bundle. Webpack actually isn't responsible for the dead code elimination, but what we do is we mark those dependencies as "unused" and then uglify JS through our uglify plugin, we'll actually remove those statements that are not used, as long as they don't have side effects.

**Jerod Santo:** That's very cool. What are some other bleeding edge features, the real sexy stuff that people love about Webpack, something that gets you excited, gets these future contributors, the ones that are complaining the loudest, but also are adopting the newest things - what's some of the bleeding edge stuff that's exciting?

**Sean Larkin:** I would say probably just being able to do code splitting just blows people's minds. I don't know another tool that does code splitting the right way and effectively. So I would say code splitting is huge, just being able to create these asynchronous chunks of your code and then lazy load them into the Webpack environment; that's really profound. React router and Angular 2 router, all of them are using the patterns that we recommend to do code splitting from their libraries themselves. People love seeing that they can actually reduce the size of their bundles just by a simple system.import or require.ensure.

The newest one that we've just released, which is up to date with the ES spec import, with \[unintelligible 00:43:21.25\] as a function... I guess other ones that are kind of bleeding edge and super sexy I would say are the ability -- one of the things that I really love about what I do specifically with the community is that I also get to be the one who speaks with the most incredible developers, like Addy Osmani in the Chrome team and the Edge team, the guys at Firefox...

\[00:43:48.25\] Addy and I partnered together to create a feature in Webpack that can help increase awareness. You'll hear probably 'performance budget' skipped around a lot. Now by default, as of this latest Webpack build, you will get warnings in your terminal that say, "Hey, these bundles are over a certain size. You should reduce them to have better load time performance."

We'll do some things like if we don't see code splitting, we'll say "Hey, you can reduce the size of your initial load time by using system.import or import, or require.ensure", and kind of give them like a help document that shows about code splitting.

**Jerod Santo:** What are the biggest things holding it back for new users? You've addressed many of those, but surely there are things outstanding that people will get tripped upon when trying to use Webpack.

**Sean Larkin:** I think the number one thing is probably... Hm... That's hard, because I wanna say it's just the lack of learning, so I would like to think that our new documentation \[unintelligible 00:44:59.04\]

**Jerod Santo:** That's projecting a little bit...

**Sean Larkin:** ..but I think holding it back from new users...?

**Jerod Santo:** Yeah.

**Sean Larkin:** Probably the usability of the configuration. I know that that's a really big challenge for a lot of people who just don't like it or don't understand it. I guess maybe for more people who come from a different... Or who are really big on performance and size bundle, they will probably say that they would wanna choose something like Rollup, which uses a little bit more performant technique to make your code as small as possible.

**Jerod Santo:** Give us kind of a high-level rundown of the config, because there's a lot of verbiage. You have modules, rules, loaders, plugins, you have exports, entries, outputs, resolvers... Can you explain it? It's tough, because we're just in audio, so we can't refer to common code, but could you explain it to us as much in layman's terms as possible how the config lays out?

**Sean Larkin:** Sure. So I like to deliver it in like four or five concepts. Think of it as a concept, but then also a property on the configuration. Your Webpack configuration is just a Javascript file which exports an object or an array of object, and that object is your configuration. It's gonna have some properties at the root level, and these properties describe how Webpack is supposed to bundle your code.

The first concept is entry, and it also maps to the entry property, but what an entry is to Webpack is the first place to start to create your dependency graph. You can think of it as like the top of the graph or tree. And what it does is it's gonna scan through all of those dependencies and collect everything into a compilation, or a bundle. Entry point tells Webpack where to start and what to bundle.

Then the second is probably the output property. Output - what the word is is that it tells Webpack how and where to bundle your code. You can specify a filename and a path, and there's some more advanced properties... Let's say if you wanted to make it a UMD wrapper around your code so you can be using a script, you can do so; there's some more advanced configuration under output, but the simplest ones are just filename and path. So output will describe how to treat your code and where to place it.

\[00:47:51.28\] Then the next concept will be loaders. Essentially, loaders are single file, or one file to another file transforms. A loader behind the scenes, if you look at a node module, it's just a function that is exported that takes a source argument and then returns a new source. There's all sorts of different loaders that are out there in the community, but the best way to describe what a loader does is that it is the last step in resolving your code to convert it into Javascript. It performs those transforms for you.

It doesn't map directly to a loader's property, but what it does map to is module. Since everything is treated to Webpack as a module, you're basically specifying the rules for the type of modules you're importing. So if you look in a configuration, it's set under module.rules, or module.loaders. We haven't deprecated the term 'loaders' yet, but you can use either or. We want that to be a graceful deprecation, since a lot of people use loaders.

I would say probably the last one is gonna be called plugins. To Webpack, plugins are kind of the backbone of the entire system. Behind the scenes, 80% of Webpack source code is actually plugins itself.

**Jerod Santo:** That's nice.

**Sean Larkin:** Yeah, it is. We externalize that process so people can create custom plugins to hook into the compiler lifecycle of Webpack. The easiest way to describe what a plugin is compared to a loader is that a plugin can do anything a loader cannot. Common things that you'll see plugins for are uglifying your code, some minification, as well as admitting extra files or creating different types of source maps if you wanted to, or doing anything under the sun.

Now, we have a large amount of built-in, out-of-the-box, publicly available plugins that we've made under our optimization folder that you can apply, but in terms of the property and the config, it's just plugins and it's an array of new instances of these plugins.

**Jerod Santo:** And that's it.

**Sean Larkin:** Yeah, I mean... You could talk about resolve if you'd like to. It's kind of a little bit for more specific scenarios. Webpack resolves NodeJS, but we have this entire augmentation on top of it that makes it really flexible and crazy powerful. We call it 'enhanced-resolve', but the property is called 'resolve' on your config.

**Jerod Santo:** And that's just how it finds things in which places, basically, in terms of requiring or including different code...?

**Sean Larkin:** Yeah, absolutely.

**Jerod Santo:** Okay, there you have it. Four simple concepts. You too can be riding the Webpack train. \[laughter\]

**Sean Larkin:** That's what I call the core concepts, I guess.

**Jerod Santo:** There you go.

**Sean Larkin:** A lot of that is in our new Doc, so if you go webpack.js.org/concepts, and I authored 90% of that entire section, so... The whole purpose is to be able to give a first-time user a really good journey through understanding the different parts of Webpack, how it works and what these things mean to you and why you wanna use them.

**Jerod Santo:** Very cool. Well, let's take our second break. On the other side of the break, let's get back into the conversation around sustainability, the Webpack team, what you've been doing with Open Collective, as well as JS Foundation... Lots of interesting things there around Webpack and making it a sustainable project, because more and more every day so many groups and companies and individuals rely upon it to bundle their code. So we'll take that break and sustainability will be on the other side.

**Break:** \[00:52:10.05\]

**Jerod Santo:** Alright, we're back. Sean, during the intro section you mentioned how one of the first topics that you broached with the Webpack team was sustainability. I've talked about sustainability with you offline, and you've been interested in RFC (Request For Commits) and the work that Nadia's been doing around sustainability, you've also started what I consider to be a very successful Open Collective. Now you guys are supported to the tune of $27,000/year, which is pretty good. It's not going to support four people full-time or anything like that, but still \[unintelligible 00:54:23.28\] over 700 people individuals and corporations helping you out.

Talk to us first of all about the Webpack team and what it looks like in terms of who is being supported, and then talk about how you've gotten support and how you need more support, and these such things.

**Sean Larkin:** Yeah, totally. So the core team consists of five people - myself, Tobias Koppers, who lives in Germany (he's the original author), Juho Vepsäläinen, who lives in Finland; he has always been involved in documentation, but also in helping support Webpack through Survive JS, his book that he wrote. And then also Kees Kluskens, who is the newest member, but he is the maintainer of dev middleware and Webpack dev server. As well as Johannes Ewald, who is in Germany, who has been really involved; he is a designer by trade, but also an engineer. He's been extremely involved with the css-loader, style-loader, sass-loader, less-loader and helping support those communities and fixing anything that goes back to core.

He designed our newer logo that we have released. I forgot to mention, Kees is also from the Netherlands. I believe he's in Amsterdam, but I'm not a hundred percent sure.

\[00:55:58.12\] Then we also have kind of a second tier of people who we just call the contrib team. They're responsible for helping maintain all of the loaders and plugins that we have underneath our organization. We have a private Slack community that we use specifically for the purpose of communication, a little bit less static collaboration I suppose, with less fluff... We wanted to do something public like Gitter or Discord, but we found that we wanted to be able to still have some sort of private environment so that we could effectively communicate to these people. Then I think we also have a team like the analyze team who works on our bundle analyzer, which you can find in our old Docs page... And then our documentation team - people who've been really involved in just helping support and work on Webpack documentation.

One that has been really involved and we're ever grateful to her is Pavithra Kodmad. She's from India, but she works for Flipkart, who is a heavy user of Webpack and really got the spotlight showing them for reaching a next tier level of web performance.

**Jerod Santo:** That's a big team.

**Sean Larkin:** It is a big team. It's kind of like herding cats sometimes, especially for us as a core team, because we're all in different timezones for the exception of Johannes and Tobias. In terms of sustainability and what we've tried to do was, you know, one of the first things I wanted to do was I wanted to meet every week. One, because I was totally new and just happy to see these guys and talk with them and learn more, but two, because we needed to have some sort of direction and it didn't exist.

We meet in the mornings, which is kind of their afternoons; that works well on a certain day in every week, and we kind of talk about things that need to be done, things we wanna do, and then as an organisation, any house cleaning, like legal stuff, or trademarks or logos or T-shirts or anything like that.

**Adam Stacoviak:** So this is all from April. You became part of the core team in April. The core team was formed in around that time officially, and the rest of this team you're talking about has been added on since then - is that true?

**Sean Larkin:** Yeah, so for the exception of Kees, who is now a maintainer as well, everybody beforehand... It was just us four, and we didn't really have a contrib team yet. It was something that we talked about - we really needed to have some sort of support and get people involved, so we did a call for maintainers for these smaller libraries that are in our organization that needed some love. Once we got that together, we got the Slack organization up and talked about the first initiatives that needed to be done on 80% of the pages...

If you look at html-loader or karma-webpack, you'll kind of see this really nice template that explains a little bit better right in the readme what it does. These teams will meet and do hangouts, and will add enhancements, fix PRs etc. and reach out to us if needed.

**Adam Stacoviak:** It's a lot to build in such a short amount of time. What do you think you've done right? What do you think you're doing right to make these moves possible, the proper and healthy team growth, and onboarding not only users but also people that can help maintain portions of the codebase?

**Sean Larkin:** \[00:59:54.19\] At least from what I can do as a person is that if anybody ever wanted to learn more about Webpack... I very clearly state on Twitter all the time that if you want to help maintaining, get involved. I'll usually send them a DM and say, "Hey, what interests you? What do you like to do? What's your background?" Because really we want to find something that works best.

To be honest, our organization has all sorts of stuff that could be worked on, whether it be documentation, or smaller loaders or plugins, or maybe Webpack as a core, or even some of our other libraries, like our resolver enhanced-resolved, webpack-sources, loader-runner...

So I try to get an understanding of who the person is, their personality, what they like to do, and then I ask them what they wanna do. I tell them, "I will sit down, whether it be on the Hangout or just on Twitter, and I will give you a complete rundown of the library, the plugin system" and everything they might wanna know if they wanna contribute to Webpack core and how it works.

I like to think that it's some of those things, where you just sit down and work with the people who you know are really excited and wanna be involved. I guess it's kind of easy when we have a community of plugins and loaders made by other people, so you can pull those people in and say, "Hey, we would love you to help us."

For example, html-webpack-plugin - he is known as jantimon on GitHub, and he did some incredible work with that plugin; we're like, "Let's get him in the Slack and talk about better ways that we can help increase the quality of that library, but then also come up with new ideas and collaborate."

**Adam Stacoviak:** When you said at the beginning of this show, "Let's get you paid", Jerod mentioned opening this third segment here about Open Collective, $27,000-ish a year, not quite any single person's full-time salary or supporting a full team of people... You're talking about how you're looking at the bright spots in your community and shining a light on them or supporting them or encouraging them or inviting them into different areas and giving them responsibilities and maybe even something that did well for you, which was give them a title; to kind of give them that badge of like, "Here's something that you can own."

What ways are you using the money you earn? I know a lot of people aren't really trying to get people actually paid, they're trying to do things that are community building, or new logos... When we talk about sustainability and money specifically, how do you use that?

**Sean Larkin:** To me personally, my dream job or perfect job would be to literally work on Webpack full-time, or work in open source, or kind of help bring these things together and collaborate to push this project forward. To me, my goal is to really hope that we can get enough sponsors and backers to really get us to that point. $250,000 as an angel budget sounds crazy, and almost unattainable, but technically we've already gotten 10% since October.

Realistically speaking, some of the things that we've done that are kind of small is we have... You know, the core team members themselves can submit expenses on the work that they've done, and we kind of divvy it out based on the amount of funds available and the hours that we worked. Tobias tracks that a little bit.

Also, additionally, I just spend some money for a designer to print T-shirt designs, or to come up with T-shirt designs that we can submit, whether it be for T-shirt or other apparel... Things like that. Because people want Webpack T-shirts. They've always expressed it and thought it was cool; they like our new logo... It's just another way to give somebody that personal feel and ownership of some sort of contribution to our organization and community.

**Adam Stacoviak:** \[01:04:15.19\] What I like too about Open Collective, since you're using that as the platform to present yourself as a collective on Open Collective, is the way that they allow you to show your expenses, like you're mentioning, in a transparent way. You'd have to go, or Tobias would have to go to Open Collective and submit an expense, and the team approves it, and they get shown there for the community to see. I love the fact that you can not only see what your budget is, the funds available, but then the actual expenses and who submitted them and for what. There's that level of transparency that's not normally there if you don't have this.

**Sean Larkin:** Yeah, absolutely. The challenge was we were looking for a platform that allowed us to kind of manage our money for us. Initially, it was just a Patreon account -- or not even a Patreon, but a Gratipay that just went to Tobias. Up until then, I had no problem with it, because he was doing a bulk of the true work. But now, this is a platform that kind of holds on to this money in like a non-profit account, but then also at the same time lets us be transparent; it gets other people to kind of do like a Bountysource thing. If somebody else wanted to help fix an issue that was on our priority list, we would pay them out for it.

**Adam Stacoviak:** When you're saying non-profit you mean whenever someone contributes money to you it's a tax-deductible gift? If you're in the U.S - I'm not sure about abroad, but at least in the U.S. it's a tax deduction for you.

**Sean Larkin:** It is a 501b something-something account; the paperwork has not been officially filed with the government, or it hasn't gotten back yet, but that is the long-term goal. It can be a tax-free source or account for us.

**Adam Stacoviak:** Right. That also takes it away from Tobias, with the whole Gratipay situation; that's a good starting point, but this allows it to be community-owned, not one person. It removes the bus factor, it removes the potential - this is not BDFL, but the person in charge kind of thing. It also removes that one complexity on potentially income tax or IRS... I know that's not an issue for Tobias, but anybody else in the world might have that kind of concern.

**Sean Larkin:** Yeah. The best thing is like, if we were all to just disappear - all five of us on the core team - this will still be around. The collective as a whole, what it represents metaphorically (and I guess you could say physically) will still exist, and they will help to find a new owner etc. We're not going anywhere, but if that did happen, there's always a fallback strategy for that, and Open Collective really helps; they're really responsive.

**Adam Stacoviak:** We're huge fans. We've spoken with them actually face to face and I've been very impressed with them. We actually were gonna do something on there, but hadn't pulled that trigger quite yet. It's something we've considered, but we've had so much happening around us, like we mentioned in the break - a new open source CMS, new branding, a lot of new shows... We did have a plan there, but we pulled back from it. But I love Open Collective, I think it's awesome.

**Sean Larkin:** Yeah, they've helped, you know, bite on my heels a little bit too when it comes to doing special things. There's just some things that just fall between the cracks; I have so much coming at me in a thousand ways, and I have an eight-month-old in the family, so...

**Adam Stacoviak:** Wow... Okay, we're in similar shoes here. I've got a nine-month-old.

**Sean Larkin:** \[01:07:53.27\] There, you go. So you understand. So she kind of helped, Pia Mancini, and the rest of her colleagues at Open Collective. They have been so helpful in keeping up and reminding us of things that we should be doing for the future, and kind of really helped support our cause. And that's really nice, because I can only do so much, and there's sacrifices that happen, but with that kind of help, it's so important and it has really helped to be what it is today.

**Jerod Santo:** Are you guys getting where you need to go? You mentioned you have maybe a $250,000 a year budget, that would be supporting everything that needs to go on. Right now you're at $27,000, which is awesome - that's a big number, right? That shows a lot of support, and there's hundreds and hundreds of people supporting you, but yet it's not quite enough...

**Sean Larkin:** It's only 10%.

**Jerod Santo:** It's only 10%, there. Do you feel like the 90% is within reach, or are you never gonna get there? Because right now, Sean, you're like a startup founder in terms of dedication, right? Full-time job, wife and kids, life... And then you're on Twitter four hours a day with the Webpack hashtag, you're doing personal hangouts with people... You've even helped me on Hangouts - or I can't remember what we used - with my Webpack config. You're doing the omen's work, like the grunt work, and you're putting all the investment in, and I just... You'd mentioned earlier that your end goal would be full-time Webpack open source. Do you think you're gonna get there?

**Sean Larkin:** I try not to have expectations. I can tell you what my dream is and something that I think is perfect for me, but I'm not sure. It's a culture issue, and we're kind of like in between the problem of a culture issue and funding for free things. We're a build tool, or a bundler, and even if we are getting three million downloads a month and we're the top 1% package in NPM that's downloaded, I think we're still a tool that many people see as constantly getting replaced, because in the past it has been. And most business owners, marketers, managers don't see the return on investment of a tool like this. I think we have some opportunities to maybe show that more, to help increase the awareness.

But yeah... Do I think it's possible? Yeah. I mean, if everybody downloaded it once from NPM for a cent, we'd have our budget in one month. We know the user base is out there, and this system has shown in just two months to have a hundred backers and 12 corporate sponsors. It's humbled me and really showed me the people who really care and understand, and as long as we keep pushing that message forward... And people like Nadia Eghbal and Pia - all these people who understand the importance of sustainability with these tools continue to increase that awareness, and we all do together. I mean, anything's possible.

**Jerod Santo:** I think you may have stumbled across a solution right there - NPM Install tolls. Everytime you install it you just pass a penny micropayment over to the Webpack team. Just a penny.

**Sean Larkin:** You know, I'm not sure if that would be... Maye it's a good idea; I feel like it would be really hard to regulate, but to be honest, something that I thought would be a cool idea is Brave - you know, the browser that's trying to do the whole mobile support micropayments for ads and everything like that... That would be a perfect platform. You visit a page that uses Webpack, you give 5 cents to the organization. Boom - problem solved.

**Jerod Santo:** \[01:12:18.27\] All sorts of interesting possible solutions... The fun and interesting part is we don't know what's a good idea and we don't know what's a bad idea, so sometimes we just have to experiment and find out.

**Sean Larkin:** It's true. You gotta hit it from all sort of different ways. I think for us maybe there's a future of doing some sort of Webpack enterprise where we have a private-based service that we sell. Like you said, the roles of somebody in open source and making it sustainable really align and start to merge with something of that of a startup. You have to find unique ways, like providing specialized VIP support; if you sponsor up to $500-$1,000 a month for us, we will give special support hours that you can sign up for.

So it's things like the support, maybe custom work or consulting, as well as even maybe a private product that's built for the enterprise level, which I think a lot of people have really thought about doing or do do.

**Jerod Santo:** You mentioned earlier that some people are skeptical because of the tooling in the Javascript and frontend world constantly changing, and we've had a lot of debate around Javascript fatigue lately. You like to cast it not as fatigue, but you call it the Javascript renaissance, which I like because I think it shows an optimistic perspective that is refreshing. That being said, is Webpack a step in the bundler renaissance, or is it here for the long haul?

**Sean Larkin:** I think it's here for the long haul. You can actually kind of see it happening in the course of a year's time, where you'll see all these imitators that say they do lots of these things, but then die out. The reason is because you can't -- at least I have yet to see, we'll just say that... I have yet to see any tool that can reach feature parity and flexibility and pivot and change and keep up with the Javascript spec, the tools that are around us, being able to pivot as fast and add that much feature parity that Webpack has.

We've kind of set the expectation of, "You need to create source maps. You need to support hot module replacement. You need to be able to work and manage CSS styles in any type of asset. You need to be able to code split. You need to be able to reorganize your code for cacheability. You need to be able to split your code up into tiny bundles for HTTP/2. You need to be able to tell me whether or not I'm creating too large a bundles, or advise me. You need to be able to have an infinite plugin system that works, that can do anything. A lot of tools try and accomplish those things and then fail.

That's one of the things I really have been trying to encourage - I wanna find those tools and say, "Hey, do you guys wanna help us make our tool better?" Not from an arrogant standpoint, but from a "Let's make something that lasts and push it forward, that benefits everybody together." Even when it comes to Rollup - we're adding Rollup features, and Rich Harris who created it is gonna help us.

\[01:15:57.15\] We want to work with as many people as possible; with browser vendors... Like I said, the Chrome team. We're working with the Firefox team behind the scenes with dev tooling and source mapping. We've talked with the EDGE team to do custom instrumentation. We want to bring in as many people as possible and set our roots, because we wanna be here forever, or as long as we're needed, I suppose.

**Adam Stacoviak:** There you go. Before we close out the show I definitely wanna say, on behalf of me and Jerod and the rest of the team here at Changelog, that we thank you particularly, Sean, for your efforts to step up and do this for the team, but also to the rest of the team - the core team, the contribs and everybody else that are involved with Webpack. I think we need people like you in open source, and it's exciting to have this conversation with you.

**Sean Larkin:** Thank you.

**Adam Stacoviak:** If you had the ear of everyone out there who cared about Webpack or should care about Webpack, and they wanna get involved, or you wanna give them an invitation into different areas, what are some things you can share in terms of easy inroads to get involved, or how to become a contrib themself?

**Sean Larkin:** The best way is to check out GitHub, put in an issue on either our core, which is Webpack/webpack, or if you wanna get involved in our documentation, you go to webpack/webpack.js.org... You can even just create an issue and say, "Hey, I wanna get involved. How can I help?" Then I'll probably reach out and communicate with you; or you can even just tweet me on Twitter, @TheLarkInn.

**Adam Stacoviak:** Troll you on Twitter.

**Sean Larkin:** You can troll me on there, or just say "Webpack" in a tweet and I'll probably find out. Say, "I wanna get involved, how can I?" We can direct-message and talk about different ways, and find the perfect fit for you.

**Adam Stacoviak:** You mentioned the Open Collective and the budget you have there, different things you're doing there... Where does that live at? Is it webpack.opencollective.com, or is it opencollective.com/webpack?

**Sean Larkin:** That's correct, it's opencollective.com/webpack.

**Adam Stacoviak:** Gotcha. So check that out, you'll see the budget there. If you wanna be a corporate sponsor, there's ways to do that there. The budget is listed, how the money is being spent is transparent, so you can freely give money and know it's going to the right places, and see that it's going to the right places to support this awesome community.

**Sean Larkin:** Absolutely.

**Adam Stacoviak:** Well with that, I think that's pretty much it. Thanks to the listeners for tuning in. I know this is a slightly longer show maybe by a few minutes, but definitely a good deep dive into your past, where Webpack is going and how this community is being governed and formed and lead by you and others. That's super awesome.

If you're listening to this and you haven't yet subscribed to Changelog Weekly, you gotta do it. It's an e-mail we ship out every Saturday, and I'm only telling you this because you're missing out if you don't subscribe. I'm sorry. What do you think, Jerod?

**Jerod Santo:** Do it. Do it. Do it.

**Sean Larkin:** Do it.

**Adam Stacoviak:** Changelog.com/weekly. Do not miss out. Don't be that person.

**Jerod Santo:** Do it...

**Adam Stacoviak:** Get the e-mail, read it, love it, share it...

**Sean Larkin:** Do it...

**Adam Stacoviak:** All that good stuff. Do it.

**Jerod Santo:** Do it.

**Sean Larkin:** Do it. Webpack.

**Jerod Santo:** Do it. Weekly.

**Adam Stacoviak:** Alright. And with that, let's call this show done and say goodbye.

**Jerod Santo:** Goodbye. Do it.

**Sean Larkin:** Sayonara.

**Jerod Santo:** Do it.

\* \* \*

**Adam Stacoviak:** Alright, just a reminder... This is the final show of 2016 for the Changelog. We'll see you next year in 2017 with new shows, a bigger network, a lot of fun stuff we have planned. Stay tuned. Head to changelog.com if you haven't been there in a while, subscribe to Master, go to changelog.com/master, get all of our podcasts, and don't forget our weekly e-mail, changelog.com/weekly.

We'll see you in 2017. Thanks for listening!
