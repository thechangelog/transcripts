**Adam Stacoviak:** We're here with Alex Sexton. This is part of the kickoff shows for JS Party. We're excited about this show because a lot of planning, a lot of fun's going into this. Alex, when Mikeal mentioned you as one of the potential hosts and then you agreed to participate, Jerod and I were pretty excited... Don't you think so, Jerod?

**Jerod Santo:** Yeah, absolutely. I was saying to somebody that the name JS Party was partially inspired by a show that you used to do, Alex, which was yayQuery. It was a fun show that I enjoyed briefly, so I'm absolutely excited to have you on the show that we're doing. Thanks so much for hosting with us, and welcome to JS Party.

**Alex Sexton:** Glad to be on.

**Jerod Santo:** The point of these pre-shows is to get to know our three co-hosts/panelists a little bit. In that light, why don't you give the audience a little bit of your back-story, where you're coming from and how you got to be a co-host on JS Party.

**Alex Sexton:** Sure. So I was born in March 1986. My mom... Okay, probably not that far back.

**Adam Stacoviak:** I like the fact that you're born in March... We're kindred spirits, then.

**Alex Sexton:** Yeah... I was lying.

**Adam Stacoviak:** You were lying? It wasn't March?

**Alex Sexton:** Okay, it's March.

**Adam Stacoviak:** Okay, it's March.

**Jerod Santo:** I don't even know who to believe at this point. \[laughter\]

**Alex Sexton:** You know, I don't want anybody stealing my identity. \[laughter\] Let's see... I know Mikeal from JSConf and NodeConf, so we go kind of far back. We were both staff with Chris back in the day, pretty early JSConf stuff -- maybe not the first one or two...

**Adam Stacoviak:** Chris Williams?

**Alex Sexton:** Chris Williams, at JSConf. Then I spun off and did TXJS with Rebecca Murphey, and then Mikeal has done NodeConf, so we've all kind of staffed each other's conferences and things like that.

**Adam Stacoviak:** I was at the first TXJS. I didn't know you were a part of that.

**Alex Sexton:** Yeah, that was Rebecca and I, as part of yayQuery, doing a conference. We had done North Carolina JS, the first time, and then I've run every TXJS since then myself, but haven't had one in two years.

**Adam Stacoviak:** Is it coming back?

**Alex Sexton:** It will come back... I've just had babies and lived in San Francisco for a summer, and those kinds of things, so it can be tough. But anyway, that's how I know Mikeal, and I used to be a crew with Paul Irish, Adam Sontag and Rebecca Murphey back in the days when jQuery was a little more popular. Not that that podcast was much about jQuery at all, but it was kind of a good basis for discussion back in the day for general frontend fun stuff.

I've been doing JavaScript for like 12 years now, which is kind of crazy... It's a long time to be doing anything, so JavaScript is definitely what I've spent the bulk of my career working on.

I worked at a few consultancies... I worked at a place called Bazaarvoice, which was a big job I had, and now I work at Stripe. Those are, I guess, the most interesting parts of my working history.

**Adam Stacoviak:** You've been there for a while now, right?

**Alex Sexton:** Yeah, I've been at Stripe for...

**Adam Stacoviak:** Four years?

**Alex Sexton:** ... almost four years now, which is a long time...

**Adam Stacoviak:** It's strange I know that, because I don't really know you, so I'm kind of wondering why I know that.

**Alex Sexton:** No, it's creepy, but it's fine. \[laughter\] Stripe has been a pretty cool company to be a part of. I work remotely from Austin, Texas, and Stripe has grown quite a bit. Since I don't work in the office, every time I go back I don't recognize anyone, because it's growing so fast. But I know their Slack handles and such, so it usually works out.

**Adam Stacoviak:** \[04:11\] That works out, yeah.

**Alex Sexton:** I'm not sure exactly what you guys want me to know; I can talk for a long time, so if you have specific questions about my past, I think maybe that would be more courteous to the audience members who want to listen to me speak.

**Jerod Santo:** Well, let's just give a little bit of your JavaScript background. Like you said, you were involved with jQuery, you were on the board of directors, you also have a lot of work put in the Modernizr, so thank you for that. Maybe give your open source background, some of the stuff that you're involved in, kind of like your angle into JavaScript.

**Alex Sexton:** I went to -- I think it was the jQuery Conf, because the ones before were jQuery Camp... But I guess if you scroll even further back, I joined the jQuery IRC channel on FreeNode way back in the day... I don't remember how long ago. That's where I met Paul Irish and Rebecca Murphey and Adam Sontag, which eventually turned into yayQuery. But we all decided to go to that conference together, and that's where I met John Resig and all the different jQuery folks back then and kind of got involved in jQuery.

I'm trying to remember when that would have been, like 2008-2009, something like that. We did some small commits; I wasn't on the team, but I contributed for a long time. It was a goal of mine some year - I think my new year's resolution - to contribute to a major open source project, and jQuery was that. And then eventually, I joined the teams and then eventually I became an advisor for the jQuery Foundation, once they became a foundation - that's its own whole story. Then I eventually became a full-on member of the board, until that board dissolved whenever I joined the Linux Foundation very recently. That's the whole arc in that. I'm no longer a member of the board of the jQuery Foundation because of the new setup, which I totally support.

I don't have a ton of code in jQuery, but that was certainly where I came up in the open source world, along with a lot of those people. Modernizr was also written by someone in the jQuery IRC channel originally -- well, not really, I guess... Faruk Ateş wrote it, and Paul and Ben Alman, who has a couple plugins in the jQuery world, they decided that Modernizr needed to be rewritten to be better, so they kind of rewrote it entirely - almost entirely - to be better, and I joined shortly after that.

Ben didn't necessarily stick around on the team, but Paul and I - we were pretty good friends at that point. I think we were at JSConf EU and we were talking about how people load too much into their browsers - we were way ahead of our time, I think it's still the argument on Twitter - so we decided to try to use feature detection in order to not load all the different stuff, and that's kind of where yepnope came out of, which was a library I wrote as an external library to Modernizr, but really it paired very well with Modernizr.

The goal of yepnope was that you only developed the code that the browser can either run or use, rather than every possible version of your code. I've since killed that project, because there are new, better techniques, like using HTTP/2 server and the build tools that exist today to load bundles and do things; there are better tools, so I don't think in order asynchronous loading of dependencies is always the fastest thing anymore.

\[08:06\] Other open source stuff - probably my other most popular project... There's this CSS color checker that got a lot of press and tweets and things, but actually doesn't do anything; I don't think anyone uses it. It was a very popular project that everyone starred one time and then never used, so I won't talk about it too much. \[laughter\]

**Adam Stacoviak:** That's funny.

**Alex Sexton:** Very big flash in the pan. The goal of it was kind of cool... I mean, I think we use it at Stripe...? It was kind of like a warning at Stripe; it came out of an idea from an old Nicole Sullivan talk from the original TXJS, where she was like, "I consulted with Facebook to try to help them with their 8-mb CSS file", and we went through and we found 82 different values for what Facebook blue was, because everyone would just eyedropper the middle of the F in order to try to pick the color and paste it in...

**Jerod Santo:** Wow...

**Alex Sexton:** That was how things worked back in the day; there weren't variables or anything like that. So they moved over to a system where it was harder to make those types of mistakes, but I still found that whenever you had the giant variables file, people would get Facebook blue right, because that one's easy. They would get pretty much every other color wrong anyways, because how do you know something's called "deepbackground--2--xlight" or whatever crazy variable ends up as trying to be a generic name for background of this specific modal, or whatever.

**Adam Stacoviak:** How about "grayer"? "More gray".

**Alex Sexton:** Grayest, great. I realized I said I won't talk about this plugin, and now I'm going very deep into it.

**Adam Stacoviak:** You are. I like it.

**Alex Sexton:** \[laugh\] It's kind of a fun thing... So this thing just pulls out every color, and it finds colors that are different than each other in value, but that a human could not perceive the difference of within some range. And so, there's an algorithm for this, the CIEDE2000 algorithm. It's used in compression, and that way they can use less colors and then be able to compress better. The human can detect differences in blues different than they can in reds and yellows, so it's a somewhat complex algorithm. But someone actually already wrote that algorithm and put it in NPM, so I did not port that to JavaScript, I just used it in a post CSS plugin that finds things that are within a threshold and then says, "Hey, these should probably just be the same color", and that's the whole thing.

The actual value that I think I've added since jQuery Modernizr days is in internalization tooling, which I got pretty deep into at the end of my time at Bazaarvoice, and do a bunch of work on at Stripe as well. MessageFormat JS is something -- if you've ever used GetText or tried to do pluralization or interpolation of variables into messages or text in your website, then MessageFormat is a very good solution. It's a standard, but it didn't really exist in JavaScript outside of a few Google things that were very googly, that you couldn't get it out of... So I wrote a parser for that, as well as an implementation.

There is another competing library, React Intel, that we actually at Stripe, and it uses my parser underlying, kind of; it's kind of been changed a little bit since then. So a lot of the internationalization tooling that people are using today actually kind of came out of some stuff that I did, and I think it's a very good solution and I would advocate for it very heavily, so that's the only reason I talk about, not necessarily because I did it.
\[11:59\] I really think that internationalization is super undervalued and the tooling needs years of work in order to get good; the thing I wrote is just a very basic start to the ecosystem of tools that you would need to do that well. How's that?

**Jerod Santo:** That's good.

**Adam Stacoviak:** Clearly, you've got some opinions, which is great. I mean, that's the whole point of the show, just to kind of bring some different perspective towards this JavaScript web platform landscape and discuss the various things that are going on - both current events, to a degree, but then also some tried and true arguments that haven't been fleshed out enough or could use different perspectives. So clearly, you're bringing some opinions here... But I'm curious why this show for you? What exactly about the prospect of this show gets you excited?

**Alex Sexton:** I guess you picked up on the fact that I have opinions, and when someone offers you a platform for advocating for those opinions, it can be tempting. I mean, I'm very excited to do it; I think that Mikeal and Rachel also have very unique perspectives.

I'm not necessarily excited for the listeners, right? I think they can make up their own minds; I'm not saying they're going to be imbued with my opinions and then become better people or anything like that, but if listeners happen to find the things valuable, then I think my excitement will turn from potential excitement to real excitement, if that makes sense.

**Adam Stacoviak:** So right now you're skeptical then?

**Alex Sexton:** Well, sure, yeah. That's the default, I think. I'm not doubtful, but there wouldn't be a great reason to do it if I was just making people angry, or annoying them, or something like that. I'm very excited at the potential for having discussions with people that are valuable, and I hope they're valuable.

**Jerod Santo:** I absolutely agree, and that's our hope, to have a shared discussion amongst all the people in the greater JavaScript/frontend/web community in a place where it's like the watercooler; that's why we wanted to do a live show. We want to have interaction with the chat room, because there's more people adding to the show than just the three panelists, or in some cases maybe four panelists who happen to have microphones that day.

But one of the reasons why I'm so excited, Alex, to have you on, is because Mikeal has convinced me that you are excellent at arguing with him. I love a good debate - I think we all do - so I think we'll have not just a shared discussion, but hopefully some entertaining discourse as well, as I hear you're pretty good at taking the other side of the argument, regardless of what it is that Mikeal has to say that day. Is that the case?

**Alex Sexton:** Sure, that's how Mikeal would portray it. \[laughter\] Yeah, it's been a pastime of mine to, I would say, keep Mikeal honest. I'm sure he would say, "Always take the other side, no matter what." Mikeal actually has cleaned up his act quite a bit, but if you go back three or so years on his Twitter, he was always just saying the most asinine stuff... \[laughter\] Just to -- I don't even know...

**Adam Stacoviak:** Just to fluff the feathers, something like that?

**Alex Sexton:** Yeah, exactly.

**Adam Stacoviak:** Wow.

**Adam Stacoviak:** Ruffle the feathers.

**Alex Sexton:** As someone who knew Mikeal and knew that he would know that it was coming from a place of love, I took it upon myself to try to call out anything I thought was potentially, let's say, unfair. So Mikeal and I go back a long time, of comfortable, but heated discourse.
\[16:05\] Now that you say that, that is an also very exciting aspect of this... \[laughter\] In the past - a year or so - we've tended to agree on a lot of stuff, so it maybe hasn't been on the forefront of my mind, but I'm sure if you bring up some topics we'll have some different opinions. He's softening at his age, I think.

**Jerod Santo:** If you had to characterize your perspective, just with regard to frontend in the browser - progressive enhancement, graceful degradation... Are you a single-page app? Do you believe in frameworks? Do you not believe in frameworks? Give us a taste of where Alex stands in some of the hot topics, in the frontend at least.

**Alex Sexton:** I'm definitely a pragmatist when it comes to most things. I have strong opinions about how things should be done, and they don't necessarily line up with how I do things, and I think that's good to an extent. I would love to make everything a hundred percent accessible and super fast, and sometimes you give up those things.

I think it's very important to know what you're giving up, to make those conscious decisions rather than make them not caring decisions... But I feel very strongly that accessibility is extremely important, and fight for it at Stripe; I feel very strongly that performance is something that is very easy to say, "Well, we're not performant right now, and people love our thing", and they don't realize how much better it could be. And so it's very easy to ignore those types of things, because it's like, "Well, no one complains that they can't use our app because it's not keyboard-accessible, or whatever", and that's because they can't use our app, so they just went and used something else.

It's the same with mobile support... It's like, "Well, we don't get any hits from mobile." Well, that's because no one can use the website on their phone. \[laughter\]

**Jerod Santo:** That's a self-fulfilling prophecy.

**Adam Stacoviak:** No one wants to. It's a bad experience.

**Alex Sexton:** So I both am aware of those types of gotchas, but I also understand... Getting something out there and shipping something, and just having a product at all that some people can use can often be a good start to something that you can eventually have all those other things on. So even though I feel very strongly about those things, I won't necessarily be mad at someone for not doing them... The only reason I bring that up is if someone ships anything that doesn't have every single feature or every single important topic imbued into its core, and implemented perfectly, then someone is outraged. And outrage is fine... I understand the tradeoffs.

I guess that's a preface to all my opinions - I feel strongly that these things are right, but I understand the need to sometimes skip them temporarily; or something might die before I ever get to it, but... So I come from a big performance background. That's what I worked on a bunch at Bazaarvoice and at Stripe early on. A lot of the performance I worked on at Stripe has been in build processes and things like that, so not necessarily the same thing.

I wrote an article a while back, and ran a conference called Frontend Ops. It's on Smashing Mag... There are now job postings on StackOverflow for frontend operations engineer, which is kind of cool; I mean, not that I took two words that already existed and just said them next to each other, but it kind of links to some other stuff.

**Jerod Santo:** It's a mashup.

**Alex Sexton:** \[20:04\] Yeah, a mashup. There you go. So a lot of the work I do is actually in the frontend operations world. It's less writing the end UIs these days, and a lot of it is the infrastructure parts or the build tooling or the measurement, internationalization, things like that. Or measuring performance - that's another part of frontend operations.

I guess single-page apps... There's a big war -- if you can even call something a single-page app... Or something's document vs. app-based, and I don't really care what you call it... I think server rendering is a good solution for lots of pages that people talk about. Anything that you're gonna read or you'd want to be SEO-ed. But as soon as you add a login and put something behind a login, then need for server rendering -- like, do I need to server-render my SVG graphs or the lists of customers in the Stripe dashboard, or something like that? No one hits the customers list page from the server; it's always navigated to that. I don't know... I think there are so many tradeoffs that it's silly to say, "If you're not server-rendering, you're doing something wrong." Measure the actual experience, rather than the technology behind it. As long as the experience is good, then I really don't care what the implementation is.

I'm a pretty big proponent of progressive enhancement... I think more so than some of my colleagues at Stripe. Stripe does really awesome landing pages and things for new products that we do, and those are designer-lead things, and I think they're cutting edge, so it would be silly to progressively-enhance some of them. But I feel pretty strongly that things should work for everybody, even on crappy connections, and I try to advocate for that, but I also understand the tradeoffs.

**Adam Stacoviak:** You're a pragmatist, you said before... Right?

**Alex Sexton:** Yeah. So I guess I agree with everyone who are the purists, but my actions don't always fall in line with those things based on other constraints. I believe very strongly in the idea of the web, and links, and openness and open source and all that stuff, and I try whenever possible to embody all those things. But I think worrying too much about how pure you are in those regards, as long as you don't slowly drift off into terribleness - you know, slippery slopes, and such... But I feel like we liked to talk in lots of blacks and whites, and...

**Jerod Santo:** And we live in a world that's gray.

**Alex Sexton:** Yeah. I don't know, that's a little bit of a cop-out answer, but...

**Adam Stacoviak:** I'm sure we'll hear more from you over the next several episodes, and see how true this is for you.

**Jerod Santo:** Plus, the nice thing about conversations is you can always represent the purist in a conversation, because the real-world constraints aren't necessarily in front of you.

**Alex Sexton:** Yeah, absolutely.

**Jerod Santo:** So that will be fun. This kind of leads us into our next question for you. When you mentioned you believed in the openness and links and the web fundamentals, what's your favorite thing about JS or about the web platform?

**Alex Sexton:** \[24:01\] The accessibility of everything -- not necessarily in the handy, capable sense... Just the fact that there's no app store, it's federated, it's fully open, the specs are open. People can kind of break away from those things... Pragmatism-wise, browsers can do their own thing a little bit and see if other people will wanna go along that path, rather than do some pure "Alright, let's sit down with the specs organization for the next three years and try to figure out how we wanna do X, Y or Z."

I like how the web moves forward. It's slower than the proprietary platforms, but I think it's outlasted every single one of them by a triple at this point. You even see with the iOS App Store - the ten most popular apps of 2016 were made by three companies, or something like that.

So the world where young (or not necessarily young; don't be ageist) -- where new and inexperienced people can have a good idea and breakthrough... The web is still just leaps and bounds above every other ecosystem, and the fact that everything is open and all the tooling can be open is just... It's such a welcoming, wide space where there's room for everybody, and I really appreciate that. I think that's one of the reasons why, even though it moves more slowly than other platforms -- and I think those platforms are necessary to the growth of the web. When the web was winning a hundred percent, it didn't grow at all -- the languages didn't get any better, the features didn't get any better. I mean, partially it's Microsoft's fault, but when things started competing with it, that's when people were like, "Oh, we need to get external device things into the navigator object, so we can do the same things as apps", and that's a driving force.

I think the ecosystem of the web is more open and welcoming and harder to use and more frustrating, but ultimately the best real output of what we can do. It's the pragmatist's platform, I guess, in some regards.

**Jerod Santo:** Yeah, you'll get probably both mine and Adam's amen on that. I think the lack of having to ask someone's permission in order to do a thing... The platform that allows you to just set up shop and start a business without having to have some sort of gatekeepers' permission is a powerful thing.

On the flipside of that, you kind of alluded to a little bit and you said it's frustrating - what's your least favorite thing then?

**Alex Sexton:** Least favorite thing...? Safari... people who don't do it right I guess. \[laughter\]

**Adam Stacoviak:** Jerod's favorite browser.

**Jerod Santo:** Oh I use Safari all day every day.

**Alex Sexton:** Oh, cool... \[laughter\] The people who take from the web, but don't give back to the web, or things like Safari -- it's not Safari itself; Safari is pretty good because Apple's so currently good at what they do that it ends up not mattering a whole bunch... But anytime the web tries to innovate and Safari doesn't agree, they can almost always automatically stifle that innovation, and that is really upsetting to me. Things like service workers... The whole web is behind, and just no one knows whether Safari intends on doing it or not, or whether they think it will cannibalize their other marketplaces. That stuff's really frustrating to me, because they very much profit from the web and they don't necessarily give back in the ways that I'd want them to. They always give back in the ways that help their other platforms, which can be sometimes extremely useful, but also not friendly to openness.

**Adam Stacoviak:** \[28:19\] This is a little meta, but are you a listener of Request For Commits?

**Alex Sexton:** Not currently.

**Adam Stacoviak:** Since you're on that subject, there's one episode you've got to listen to. It has to be something you do this afternoon.

**Alex Sexton:** Sure.

**Adam Stacoviak:** It's the one called "Funding the Web with Brendan Eich". You will never get more of a historical background to funding the web than you will ever get from that, roughly a little over an hour (I think it's 74 minutes long, based on the timestamp here). That's the good one there.

**Alex Sexton:** Brendan is an old JSConf speaker and a TXJS speaker, and we've done the speaker circuit together, so I may have heard a lot of that information first-hand before, but I'll definitely go listen, too.

**Jerod Santo:** Well, listen to it and then you can tell us how much of it you already knew.

**Adam Stacoviak:** Yeah, how accurate is... How in the know are you, Alex.

**Alex Sexton:** Yeah, I'd be interested.

**Adam Stacoviak:** On that note then, we look at the future of this show... We asked you a couple questions like, "Where do you stand on certain controversial issues? What are your favorite/least favorite things about the web, JavaScript?" things like that, but I'm kind of curious on what particular topics you may be excited to talk about in the near future.

**Alex Sexton:** Current stuff? Service workers have been around for a while, but that world of the web is very interesting... I also do a lot of work on a large application at a company where people use something a lot, so frameworks are something I think that Rachel and Mikeal are a little less interested in and that I have some experience about, and there tends to be a revolution every two or three years, so we're kind of due; Fiber could be it, in React...

I'm also a pragmatist when it comes to choosing libraries. There's a lot of hype around React, and React is amazing and great. I think I intro-ed Tom Occhino and Pete Hunt at JSConf before they announced it, whenever it got like a terrible, terrible reception from everybody, so I feel partially responsible... But there are tradeoffs -- React is super hyped, but if you want something that already has a fully-baked ecosystem and build tooling and all that kind of stuff, you can't beat Ember for that. You have other tradeoffs like file size, and things...

Also, people reach for React and they need the modification of the onchange event that React does, and that's the only thing they're using in the entire library... So kind of back to a world where maybe people are reaching for libraries that are too big. I'm interested in where this goes. There's currently Preact and a few other ones that are tiny versions of it...

**Jerod Santo:** Mhmm, Inferno.

**Alex Sexton:** Yeah, there are versions of things where people want some of this to be baked in, you know DOM-diffing baked into a browser specification, and all that kind of stuff. So I'm very interested to see where the frameworks world goes, even if I'm not necessarily writing any frameworks currently.

What else... Build tooling is also something I care a lot about that I think we're due for another revolution on. I don't know how much people care about that, but things like Webpack and those systems...

\[31:54\] I was a contributor to RequireJS back in the day with James Burke -- I mean, James Burke did 99.9999% of it. I added a little bit to the spec on behalf of the jQuery team, but that's since been mostly dead, and now Node is working on implementing ES6 modules in an asynchronous way, which is kind of full circle, which is fine...

Those two things I guess are pretty boring frameworks and build tools, but that's probably why Mikeal had chosen me for those opinions, because they weren't necessarily represented between him with Node stuff and Rachel with robotics.

**Jerod Santo:** Right... Well, you would be surprised, because we went back and looked at our states on the Changelog over the last couple of years - two of our biggest shows had been 1) React and 2) most recently was Webpack 2. So people love hearing about those topics... Even though we may have to convince Mikeal and Rachel to talk about them.

**Alex Sexton:** Yeah... There's enough drama to it though, they'll come up naturally, I think. The third thing I'd say that maybe isn't represented but also is under-represented in total is web security, which I do a lot of help with at Stripe. I spoke a bunch the past two years on content security policy, and kind of trying to help people write secure applications. I think a lot of the frameworks are moving in directions that help people do that a lot, but it's still a very sad and dangerous world out there, and I'd like to advocate for those technologies, as well.

**Adam Stacoviak:** Can't wait. To wrap up, let's figure out your perspective on who you think might listen to this show. Each host brings their own perspective, as we've already talked about in this preliminary show... But I'm kind of curious who you think might/should listen to this show - anybody out there... You could even name a name if you know particularly somebody who's like "This would be a great listener", or a style of a listener. Who do you think should listen to this show?

**Alex Sexton:** Sure. I mean, they have to be able to put up with a lot... You have to be patient and not dislike Mikeal too much... \[laughter\]

**Jerod Santo:** You're limiting our audience...

**Alex Sexton:** Yeah, we're down to like maybe 10-15 people or so... You could also hate-listen, though; I think that audience could be quite large. No, I think if you're the class of person who has a Twitter account but can't keep up with every possible piece of drama, or doesn't care to, or wants it distilled down... If you're someone who likes the newsletters that come once a week that says, "Here's what happened in CSS this week", and if you also drive to work, I think this could be a good compromise.

\[34:55\] And also, possibly if you're only interested in currently a single section - you're coming in from Node or robotics, it could also be good to kind of reach out your mind into the other sections and find the cross-sections between you and the other portions of the community.

I think anyone's a potentially good listener, I don't think we're precluding too many people. Also, you've heard me talk for the last hour, so you have a certain type of person to be able to fully enjoy my mumbles. \[laughter\]

**Adam Stacoviak:** I think you're great. We've teased on the call with Mikeal - which listeners will be able to go back and listen to - about putting out the pilot episode you all recorded, which I felt was really great. Actually, I was excited about the show, but once I heard that pilot between the three of y'all and how well you had chemistry already in terms of being able to argue with Mikeal or share an opinion or share how you weren't clued into a certain area... Just the honesty in the conversation was really cool for me, so I'm excited to put that out there for everybody, but I also was personally excited based on that pilot. We'll see if we can put it out for sure, because we've teased it enough that we have to do it now.

**Alex Sexton:** Yeah, I didn't know that plan was to not out that out, so there you go...

**Jerod Santo:** Oh, news to you... Surprise, we might ship it. \[laughter\]

**Alex Sexton:** Oh no, the opposite is what I've said - I didn't know the plan wasn't... I thought that was going to go out, so you should ship it.

**Jerod Santo:** Right. So you're surprised that we might actually do what you already thought we were gonna do in the first place.

**Adam Stacoviak:** Well, Alex, I'm excited, man. Thank you so much for this time today to kind of kick off things for you and just share your portion of the story as you bring to this show. Thanks, man. I appreciate it.

**Alex Sexton:** Yeah, I appreciate you having me.
