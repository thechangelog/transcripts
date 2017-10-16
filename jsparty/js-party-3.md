**Mikeal Rogers:** Hey, welcome to JS Party, where it's a party every week with Javascript! Joining me is Rachel White, say hello...

**Rachel White:** Hello.

**Mikeal Rogers:** And Alex Sexton...

**Alex Sexton:** You don't tell me what to do? You just tell Rachel what to do?

**Mikeal Rogers:** \[laughs\] Yup, exactly... And I'm Mikeal Rogers. So let's dive into it today. We have some pretty deep topics that I wanna get into.

They just had an AMP Conf (Accelerated Mobile Pages Conf, from Google). Alex, why don't you tell us what the hell these are? What is AMP?

**Alex Sexton:** Sure. I work with AMPs a lot. They're small (sometimes large) electronic devices that use voltage multiplication usually through like an op-amp or a series of transformers, resistors, capacitors, in order to increase -- different amps. Okay... \[laughter\] Accelerated Mobile Pages are a thing Google came out probably within the last year (I don't think it's been quite a year yet; something like that). You've seen them... They're best viewed in a light as kind of Google's answer to all of the in-app mobile browser fast insta-reader type pages that exist; there were like Facebook instant stories, and there were the same thing on different platforms, and then there were ways you could save articles and then read them without ads, and stuff like that.

Specifically, what it actually is is something you can kind of opt your content website in. This is usually news articles, they're by far the number one use case. You opt in your content site to AMP, and then you promise to fulfill a few somewhat difficult to fulfill things where you don't use external CSS and you don't do this and you don't do that etc. Based on those things, your site can be really fast, and then on top of that, Google will then cache your site on Google's servers and serve it edge-cached and even faster, optimized, because based on the rules you agreed to follow, they can super-hyper optimize and pre-load articles even on your phone before you even click on them.

The resulting experience is that when you go to Google and you search for a news article, there's a little carousel up top; it seems unimportant, but that's actually why most people do it, to get in that little carousel. And there's little lightning bolts next to the websites in order to incentivize people to build AMP websites and for users to click on them, and when you click on them, they load instantly, and they're not bogged down with ads or interstitials, and they work on mobile, and all that kind of stuff.

The negative side that people dislike is a) Google is hosting all the content, so they end up being the controller and the gate and have all the information about all the traffic, and then also the URLs are really not great, because it's gonna be google.com/AMParticle/yourURLtoYourWebsite... Which is better than them hiding it entirely, I think, but still somewhat negative. So you have this whole new ecosystem of AMP web pages, and it's kind of hard to -- as a user, I don't necessarily wanna opt out of it, but I often wanna break out of it. It's improving slowly... We can talk about what we think about it, I guess, outside of my explanation of what it is. Is that helpful at all?

**Rachel White:** \[00:04:01.08\] Yeah, that's helpful for me. I actually didn't even know what AMP was until last week when everyone came to New York for AMP Conf, but I had noticed while browsing the internet when I'm trying to fall asleep and I'm trying to read the articles... I've had these - now that I know - AMP articles pop up, and I've been trying to send them to my friends, and I'm like "Why is there not a link?"

I'm okay with the speed; obviously, that makes a lot more sense, but please, someday let me copy a link faster somehow...

**Alex Sexton:** Yeah, so I think it's gotten better very recently... You can click on the URL of the article, which is in the top bar; they always put this nav bar above your nav bar that kind of says the real URL - I think now you can click on that and go to the real website. If that doesn't work, you can always do the "Request desktop site", which usually would do the trick.

**Mikeal Rogers:** You said that it makes things faster... Sorry, Rachel...

**Rachel White:** It's okay, you go ahead first.

**Mikeal Rogers:** It's a merge conflict. So you mentioned that it makes things faster - what is making it faster? There's a new format, which is HTML and Javascript, so it's somewhat different than the web...

**Alex Sexton:** Was that a joke?

**Mikeal Rogers:** No, no... Go ahead.

**Alex Sexton:** Sorry, I guess I don't understand what you're saying then. It's still all valid HTML/Javascript. You add a lightning bolt to your HTML element (it's a fun little UNICODE trick) and then you write regular CSS and Javascript, but you do things like use custom elements for your images; that way, your images aren't pipelined to load immediately, if that makes sense. So you use an AMP img instead of an img, and then they can decide, "Let's put in the above-the-fold images and not the below-the-fold images." And then you agree to not have external CSS and only have 50 kilobytes of in-lined CSS. So it completely reduces the amount of CSS you can use, but it's still just regular CSS and you can do whatever you want in that 50 kilobytes.

So there's a bunch of rules, and they have a Javascript you can inject on your page that will validate all these rules, that will say "Hey, you're not following this rule; you may not be pipelined into the superfast AMP experience."

The other part is if you use Chrome, Chrome can do extra things to pre-fetch, and stuff. I don't know to the extent of which that happens, but they absolutely could do that, based on their rule set.

They're pretty much like asm.js that we talked about last week. Asm.js is a completely valid subset of Javascript, but once you only restrict yourself to that subset, you can make certain speed improvements happen. The same thing is true of AMP. And I think the arguments are more or less the exact same for and against them. It's like, this seems fundamentally weird that we had to do this thing; it's just weird that in the past Firefox was the one who was like, "Hey, add this comment to your Javascript and it will put it into asm mode and it will speed up", and Google was like, "No, we can just make things fast all the time." Now, in this case, Google's like "Add this comment or this property that's attributed to your HTML and we can make things fast", and Firefox is like "No, we can just always do that." So I find them very related.

**Mikeal Rogers:** So what's making it fast? That Google caching it and Chrome creating it differently?

**Alex Sexton:** It's both.

**Mikeal Rogers:** Or is it the fact that you can't insert your ads and you can't do all these things that destroy performance?

**Alex Sexton:** \[00:07:51.22\] It's everything. I think one of the primary benefits... I think out of context, AMP is a bad idea and we shouldn't do it. Why would we do that? It centralizes things and it's bad, and blah-blah-blah... But I think in context, if you look at -- I can't remember the exact stat... If you look at some graph that was released recently, it's some insane amount of browser UAs that content websites get are the Facebook browser. The Facebook browser is one of the top three browsers in existence. Even though it's not a real browser... The whole goal that they're doing there is to make these fast experience, without ads, so you don't have to deal with the web as it stands today.

So Google's one-upping them, saying "Hey, let's do this all with the real web, without apps, without all these things... And if you don't follow these rules and you don't sign up for AMP, you don't put the attribute and you don't do any of these things, your site's gonna be so much faster anyways...", so it's kind of like the asm fallback; it's like, if your browser doesn't support asm, it's still gonna be superfast anyways, based on the things that we already have in place for making websites fast. But if we run it through our thing, because we know the constraints, we can make it even faster... If that makes sense.

So it's kind of a little bit of everything, but the fundamental thing is AMP could die tomorrow and no one would be screwed. I think that's pretty critical.

**Rachel White:** I have a question.

**Alex Sexton:** Sure.

**Rachel White:** So people that are participating in this... If I'm a news publication that decides to integrate these AMP pages for my articles... Say The New York Times, The Washington Post and The Chicago Sun-Times all write similar articles about the same thing - is this gonna affect who shows up?

**Alex Sexton:** Yeah.

**Rachel White:** Oh, that's interesting.

**Alex Sexton:** Yeah, only kind of. Here's the low-down here... If I may put on my tinfoil hat for a second, I think one of the primary motivations here is to make the web better. I think the intentions are good. Like Malte Ubl and Paul Bakaus, some of the people working on this are absolutely fundamental believers in the web platform, and I don't think they would do something like secret embed, or whatever. But the incentivization for why people do this - I think they recognized right off the bat that "Make your website faster by using AMP" is not something that people would necessarily respond to, so they've used SEO and ranking and that kind of thing - not directly; somewhat indirectly - as kind of the carrot to the stick of harder to build web pages, or at least constrained web pages.

So AMP web pages show up in a carousel above the results. Now, speed is already an indicator in pagerank, but AMP is not a specific -- like, you could have a faster page than an AMP page and technically be ranked higher... It's not the fact that you're using AMP is good. That will automatically change some things. But you get the little lightning bolt on the page results, which is not nothing... If I saw two articles and one had a lightning bolt, I feel like I'd click the lightning bolt one, but also the carousel is pretty much what every content creator right now wants to get in there. It's like this thing that pops up above all the other results, and you can kind of swing through that.

Actually, a lot of people don't know this... If you click on to an AMP page from the carousel, you can see the contextual relationship -- I clicked on the middle one, and the article before was this, and the article after was this, and they're all part of the same new story, even though they're different, specific articles; it's all about Sean Spicer wearing his United States flag upside down, or whatever.

\[00:12:08.06\] There are arrows in the top nav bar, and you can click actually between the carousel from the different websites. You can just page through the different articles somewhat instantly, which is something I've never used, but also seems kind of cool. But absolutely, all the feedback from content developers is "We want to be in the carousel", not "We want a super fast web page so our users can whatever-whatever-whatever..."

**Mikeal Rogers:** Yeah, so I hate this. This is terrible. So there's the AMP format, which is basically a set of really good practices, for being a good mobile citizen, and making your stuff fast on mobile. That's great. They've done a great job there, it's great to get people on that bandwagon, but all of those positive arguments immediately kind of fall away when you start to look at how they're incentivizing people to create the content.

You can stand on a high horse and say, "We're doing this on the web, whereas, say, Facebook and Apple News aren't; they're doing their own proprietary thing." But all they're doing is their one-off proprietary thing on top of web technologies. They're only putting content into this carousel that has specifically opted into their crazy thing.

**Alex Sexton:** I'm sorry to interrupt you, but you cannot conflate web technologies with the web platform.

**Mikeal Rogers:** Right.

**Alex Sexton:** Cool. So the fact that they're using web technology to distribute their own things is irrelevant.

**Mikeal Rogers:** Right. Classically, what Google does is they go out into the web as it is and index it and try to make some kind of sense out of the chaos with the search product, right? This is going the opposite direction, where it's saying "We're defining a format that ostensibly we control. In order to get into this incredibly valuable space in the number one search engine in the world, you're going to have to conform to these rules. We're going to have to host your content for you."

**Alex Sexton:** Yeah, it doesn't change your rank, but it does show you above even the first result. But theoretically, once everyone did AMP, the carousel would be correctly ordered, I assume.

**Mikeal Rogers:** So basically once everybody changes the entire web, then... \[laughter\]

**Alex Sexton:** I was being hyperbolic.

**Mikeal Rogers:** I understand you were being facetious, but this has some really bad consequences today. To get into the politics/fake news side of things, a lot of really terrible, pseudo-news organizations have adopted these technologies before more reputable organizations. An example of this... Just the other day I googled for Joe Biden, and the thing on top of all the search results that were reasonable was a Breitbart article about how Joe Biden used taxpayer money to fund hookers and blow, or something... Some conspiracy theory, and it was ranked higher than real search results, because Breitbart has done a better job of implementing AMP before anybody else.

**Alex Sexton:** Yeah... To be clear, I think that is a specific case of a larger problem at Google, and with the political -- like, the same thing is true if AMP doesn't exist, where Breitbart is the second result in the organic results. I think it's just a very difficult thing, because those articles have so much traction and are so highly linked and believed by people, that while being totally unfounded based on current algorithms that don't take into account truth or reputability in that manner... This is a problem outside of this.

I think AMP certainly adds negatively to that pile; so I'm not defending AMP for this, but I don't think killing AMP would in any way solve that problem, for what it's worth.

**Mikeal Rogers:** \[00:15:58.12\] Well, it seems like they have more solutions in their regular search results than they do in AMP right now, at least. Or there's just less content, so it's easier to game.

**Alex Sexton:** Sure. It's early days.

**Rachel White:** Is all of this stuff that I've seen recently because of the fake news things? Where people are like "Google gives you these horrible results when you search for things politically..."

**Alex Sexton:** That's what I'm saying, it's true regardless of AMP.

**Rachel White:** Okay.

**Alex Sexton:** Sometimes Google... Like, the instant answer thing will be just as bad -- "How much does Joe Biden make per year?" and then the answer is "Joe Biden siphons money out of the pizza restaurant in Atlanta", or whatever. I think it's just an extremely hard problem. Maybe they shouldn't be doing it because it's a hard problem, or they should remove all politically related things - I don't know. But I think sometimes it's really -- like, "Where's my closest polling place?" has really good answer and that's a really good feature... So it's hard to weigh the bad versus the good.

**Mikeal Rogers:** Yeah... I also just worry -- there's a lot of work that people put into making their content accessible to AMP, so in this new context --

**Alex Sexton:** That's only kind of true. AMP is actually pretty easy to integrate with. I think easier than literally every other performance framework that has ever existed for these content creators, for what it's worth. The reason why every major news organization already has AMP pages is because it's so easy to integrate, and I think it says something.

**Mikeal Rogers:** Yeah, but the centralization aspect of it is concerning to me. That is a performance boost within the Google ecosystem, but that doesn't solve performance outside of that context at all.

**Alex Sexton:** Well, it does. It solves performance outside of the context, just not to the extent that it solves it inside the thing. Like I said before, I think one of the saving things... AMP is not my favorite thing. I know you dislike it, so I'm trying to at least have an interesting discussion, but the idea that if AMP died tomorrow, or if Google ceased to exist, that nothing would break and all content would be available is the exact opposite of how all those other -- things solving the same problem all fail that test, and I think that's one of the fundamental things why centralization is bad...

It's because we're relying on Apple to maintain their App Store in order to get software, and if their store stops existing, then all of a sudden we have no software and we have to redo everything from scratch. And that's absolutely not true with AMP. I think it still maintains the web, it just never directs you to that web currently, which is weird... But it is fundamentally different. I'm causing a lot of long pauses on your end today... That probably just means I'm talking a lot.

**Rachel White:** Well, I think that neither Mikeal or I really knew too much about the integration methods or the reasoning -- well, obviously the reasoning behind it is kind of self-explanatory... But I knew nothing about it, other than it was a thing that existed.

**Alex Sexton:** Yeah, you can turn on a Wordpress plugin and your site is AMP-compatible.

**Rachel White:** Uh-oh... Well, that explains a lot.

**Alex Sexton:** Yeah. I mean, you can break that with other plugins, but yeah... That is pretty true.

**Mikeal Rogers:** I'm still incredibly skeptical of this notion that adding AMP support to these sites is actually making them better generally in terms of mobile performance. There are sites that come up in that carousel all the time - like The Huffington Post - that I know for a fact when I pull up on mobile are terrible. If you pull up the actual site...

**Alex Sexton:** Sorry, better than they were before...

**Mikeal Rogers:** I don't even know if that's true, though... It seems like they're taking a lot of the garbage and just putting it around the AMP thing now, and just saying "We don't even need to worry about mobile performance anymore, because most people are reading it through this AMP thing."

**Alex Sexton:** \[00:20:12.03\] Sure, that's a very good criticism. You can serve different things to Google than you serve to users; that's pretty tried and true. They have a UA, and all that kind of stuff. So absolutely there could be this backlash. If I'm trying to jump into the heads of the Google engineers that did this, it's like "Hey, we have this problem where increasingly, even web articles, content that people are writing on the web, people are consuming in centralized, native applications, and one of the core reasons that this happens is performance. So we need to fix the performance cost." And they're saying the ends of centralizing and doing these things justified the means of eventually all websites care about performance in the future. It creates a new environment where performance matters... But I definitely understand the notion that if people don't have to do any work in order to have fast websites on AMP, then perhaps they'll actually invest fewer resources in making their actual websites faster, as long as they could separate those two things well enough.

So I think it should be a fundamental goal of the AMP project to enforce somehow that regular website are getting faster along with the AMP websites. I think that would go a long way to assuage those fears.

**Mikeal Rogers:** Yeah. I mean, I'll reiterate again... And full disclosure, Malta, who's one of the lead engineers over there, is a good friend of mine... \[laughs\] The format is great; I wish that people followed the format and didn't have all the other garbage on their websites. I think that the issues that we tend to have with it, the carrot and stick that they're using to get this adopted through its integration with the Google product is really problematic. But that's all that we have for this topic... We're gonna take a quick break and when we come back we're gonna get into a topic that I've already forgotten about, but I'm sure that I'll remember by the time that we come back. \[laughs\]

**Break:** \[00:22:19.24\]

**Mikeal Rogers:** Alright, now we're gonna talk a little bit about Javascript fatigue. I'm certainly fatigued... I even forgot that the topic was gonna be JS fatigue. There's been an amazing amount of tweets and articles about this, and it's already reaching the point where people are just referencing JS fatigue and assuming that everybody knows what they're talking about, so I feel like it's probably gonna be really good to come back around and into this a little bit.

**Alex Sexton:** We already have JS-fatigue fatigue.

**Mikeal Rogers:** Yeah, exactly. Rachel, why don't you tell us a little bit about what you think this means? What have you seen out there in the New York community about this? Because I know a whole lot of these articles have actually been written by the New York crew.

**Rachel White:** Alright! Well, let me tell you... I think the Javascript fatigue is like the burden of choice of "I have so many things to use. What should I use? What can I use?"

\[00:24:04.09\] Now I'm reading this thing and it's right down all of the framework, build tools, libraries you can think of for 30 seconds straight and stop. You could keep on writing the whole entire 30 seconds.

There's so many different Javascript libraries that all achieve the same end goal but in various ways, depending on what you need for it. There's multiple bundlers, there's multiple things that handle your routing in Node, there's multiple ways to do Javascript animations, there's multiple MVCs, there's multiple package manager options... There's so many different things, and I think that aside from there being so many different Javascript libraries for people to choose from, I think that the fatigue is not only not being able to choose, but also having the feeling of not being able to keep up with how fast these things are coming out.

**Alex Sexton:** It's almost a social thing. It's like "I don't wanna be the person using the old, broken thing... What's cool to use?"

**Rachel White:** Exactly.

**Alex Sexton:** I know it's not entirely that, but there's a part of that that's there.

**Rachel White:** Yeah, I mean... Whenever something comes out, people always jump on trying to learn it as fast as possible, so that they don't have that FOMO of not knowing about what's hot in the Javascript library. The worst part of it is you're gonna get as many different responses for "What should I use to achieve this goal?" as you'll get from asking somebody "Where should I go eat tacos in Austin?" You're just gonna get so many different answers, and it's hard to pinpoint what to choose.

**Alex Sexton:** To that example, as an austinite, you'll get a ton of different answers, but in general, I feel like a) good problem to have, and b) you're probably gonna have good tacos regardless of what you choose. I hate -- this is a very rare moment in my mind where I think... Mikeal probably has some good opinions about this, but I think, Mikeal, you've done more research around the NPM ecosystem than most people, and you like to hype just raw numbers sometimes... But I feel like also your experience in the Python community prior to Node and Javascript - why is Javascript different in this regard? Why does Javascript have such -- and maybe every community thinks that they're the community that has the paralysis of choice with fatigue, but I don't believe that's true.

**Mikeal Rogers:** No... It is pretty unique, yeah.

**Alex Sexton:** As a second follow-up question - is it better? Does it mean we have revolutions more often, that cause better things to occur, and we move faster? Or is it worse, in that everyone's constantly learning new tools, and the quality of output doesn't get any better? Those are my two questions... You have 20 seconds.

**Mikeal Rogers:** \[laughs\] Okay, so a couple notable things. One is that we used to just call this 'framework fatigue' before NPM took off, and this problem actually predates even the NPM ecosystem. Obviously, you could think of it as being a little bit accelerated into the NPM ecosystem, but we've always had this issue where there is a new framework every year for people to build their web applications in, and everybody wants you to learn it.

**Alex Sexton:** There were the framework wars before Javascript fatigue, and the framework wars were like five frameworks, not 500 frameworks.

**Mikeal Rogers:** Well, no... It was five frameworks until jQuery won, and then people argued about what framework on top of jQuery to use jQuery that you were gonna build onto... And it's all the same thing, which is that...

**Alex Sexton:** I still feel like it's exponentially exploded since... I think you nailed it with NPM...

**Mikeal Rogers:** \[00:28:05.08\] Yes... So it has exploded, but here's the thing... One of the reasons why you get this more in this space than in the cloud space, or enterprise, is because people build more new web applications than they maintain web applications. People build new stuff all the time, and so when you have new things to build, you just have the opportunity to take a new tool.

**Alex Sexton:** But isn't Python primarily -- like, what about... People build websites with Python constantly too, but I guess it's because Javascript is the common language among every Python, PHP, Ruby or whatever website, that it's multiplied times all the other languages?

**Mikeal Rogers:** I mean, I know people that have Python backends, and they've swapped out -- they built three completely different web apps on top of the same backend... So they actually haven't swapped out the backend, and it would cost them a lot to swap it out, and they'd have to write a lot of new code again... Whereas when you're building a new UI, you have to build a new UI; you can't take a bunch of your old code and just reuse it again.

**Alex Sexton:** Well, you can...

**Mikeal Rogers:** You can with NPM, but think about it from the top-level framework perspective - you can't. So there's an opportunity for people to do this more often, which is why we have more of these frameworks. But I think a lot of the fatigue really comes down to higher order libraries - particularly frameworks - have a lot of hidden semantics in them, and as you learn the framework, you start to embed more and more of those semantics in your understanding of just how things work. And when you have to switch to a new framework, all that understanding gets thrown out the window; it's not really applicable anymore.

Also, operating under so many layers of semantics, it actually gets kind of hard to just think about applications and build applications. You start having to think in terms of frameworks, rather than in terms of problems that you're solving, and that makes it much harder for you to switch to the new thing when everybody's talking about the new thing.

**Alex Sexton:** Yeah. Specifically, I definitely find that interviewing people, even people that I work with from time to time - and this was true in the jQuery days; there were people who knew jQuery and nothing else, but I can talk to them and they know so much about... Now it's pure functions and functional programming, specifically around immutability, and all these different, extremely technical computer sciency ideas, compared to history. They have very concrete ideas around state management... Essentially, they live in this Redux/React world where they know so much there, and then it's like, "Well, we want to get a key event from the browser" and they're like "I've no idea what you're even talking about. What's a key event?" Like, "You write browser applications..."

You get sucked into this specific world where it feels like you can solve everything, because... I don't know. I see people who are brilliant programmers who have such a narrow worldview that it's a little bit sad, but not in like a sad-sad way; they're all smart enough to learn, it's just weird that they haven't noticed the outside stuff yet.

**Rachel White:** Do you mean a narrow worldview in the sense that they're stuck in the way that they've been programming for so long that they're not open to new ways to do it?

**Alex Sexton:** It's usually the opposite. It's usually extremely smart, brand new developers, started two years ago when Redux and React were coming up, and they've come up in that world, and that's how they solve anything. I don't wanna be the "get off my lawn" person who's like "You gotta learn the DOM API before you can learn framework", but because those tools are so powerful, I think it lulls you into this false specialization, if that makes sense.

**Rachel White:** \[00:32:00.10\] I see what you're saying. Well, it is the world that you have to live in, right? I think it's notable that Substack doesn't have this problem, and I'll start off by saying "We can't all be Substack." This isn't a solution for everyone. But if you are really diligent about not using frameworks, not using a lot of vertically integrated plugin architectures, and you just use these small components that have understandable inputs and outputs - so there may be a lot of complexity behind the module that it's doing, but what you understand is you give it this input and you know that you get this output. And if you string those together, you can adopt new modules that replace old ones all the time; every time that you take on a new project, you're just adding a couple tools to your tool chest. Long-term it's a really sustainable strategy for this particular problem.

**Alex Sexton:** For one person.

**Mikeal Rogers:** What?

**Alex Sexton:** For one person. And I don't even think just Substack. I think any application that can be written by a single person could very easily adopt that strategy -- not easily, but could adapt that strategy with success. I find as soon as you add a team of 20 people, all working on an application, you can't have 95 different documentation points, for instance.

**Mikeal Rogers:** I think it's a false dichotomy. A lot of people do write applications that way, with larger teams than just one person, and even a lot of the Substack builds he built with other people... But a really large team likes to have some of these larger frameworks because it standardizes the way in which people interact with very messy web APIs. I think the way that the web platform works is messy, and everybody's sort of opting into a way to make that simpler; it is a little bit simpler for larger teams...

A lot of the problems that those frameworks solve, like redefining how the event system works, or how mutations work to the DOM... There hasn't been a ton of small modules that solve those particular problems, so that you can standardize on "Oh, we'll use this module to solve that problem." But as we move along into the future, I do think that we're going to get closer and closer to that place.

**Alex Sexton:** I'm with you, but I think all of the conversations we're having apply to a backend application written in a different language. The idea of small modules versus a coherent framework is not specific to the web platform being messy. To quote Tom or Yehuda on the Ember team, it's like Ember is not just like one big file called ember.js, it's a bunch of small modules with expected input and output just like a framework pieced together by those; they're known to work together, and they're tested together, and they're planned together. They just happen to be written by the same people. But Ember is made up of 300-something individual small modules that have expected input and output.

**Mikeal Rogers:** Well, so was React and so was Angular... I think they're all kind of built that way now.

**Alex Sexton:** I didn't mean to say that Ember was the only one, I'm saying that I think the false dichotomy is that you don't have this option of small modules that get expected input and output, it's the fact that you have to choose them yourself, and I think that's actually what plays into a lot of the fatigue... If you do the small module thing, you have to make a decision about which library to use a hundred times, versus once with a larger framework... Which may be not what you want, because you actively have opinions about all those small modules, but when you get to a certain size or a certain level of caring, you say, "I just want to know something works and is supported", and then you kind of make the tradeoff that says, "I'll let the framework library developers choose that small module for me, rather than choose it myself."

So I think frameworks actually help to prevent the fatigue that a lot of people feel by making a lot of choices, by default.

**Rachel White:** \[00:36:12.17\] So if the problem doesn't lie with the frameworks, and ideally the groups of people that are working on these frameworks are making the best decisions for modules to implement into those libraries, could the Javascript fatigue then just extend to the module makers that are making so many different versions of the same thing, I guess...?

**Mikeal Rogers:** I used to hope for a better outcome for this kind of stuff. When I started to see all these frameworks be built out of more small components, I thought that we would have a lot more longevity and a lot more sanity around them, but what we've actually seen is weird consolidation and plugin patterns, and a lot of the underlying tools turning into their own frameworks.

**Alex Sexton:** Yeah, I agree.

**Mikeal Rogers:** Babel has a crazy plugin system, and Webpack has a crazy plugin system, and React uses all of these together to make its crazy thing. So even when you move on to the next framework that you built on top of Webpack and Babel, you're still gonna be locked into these weird - for lack of a better term - proprietary plugin systems.

**Alex Sexton:** Sure.

**Mikeal Rogers:** But they're not proprietary.

**Alex Sexton:** Democratized in the authorship of those... But yeah, so to kind of jump back to the other question, since I think we could talk about small modules versus large modules (and I'm sure we will again), is the pain that JS fatigue causes - does it pay off? Theoretically, if we can go through more iterations of ideas on how to solve the fundamental problems of the web and applications development, then we can have better applications faster. So the tradeoff would be if we spend all of our time learning the new things, then we don't actually gain any speed, but my feeling is that free markets - I hate saying that - kind of dictate that people have a desire to learn new things; they have problems with their old tools, and it's kind of nifty that in our community somewhat seemingly uniquely new solutions come out so quickly and are so easy to put out that we can solve some of our fundamental problems much more quickly that the Python 2 to Python 3 transition -- or like a Rails upgrade in other ecosystems.

So I feel like maybe the web and Javascript tooling can move forward more quickly because of this, and is it worth the tradeoff in that thing...?

**Rachel White:** I agree with that, plus if there's so many options and people are trying them out, the ones that don't work aren't going to get widely adopted anyway, hopefully...

**Mikeal Rogers:** I think that there's two competing ideas about where innovation in this space is driven... So is it driven by new capabilities being opened up in the web platform, so we need new frameworks and tools to take advantage of them, or is actually driven by completely new use cases? I tend to not buy into the "things are driven by the underlying platform, but they're actually driven by new use cases."

When mobile was on the rise, we saw a new slew of frameworks that solved mobile; it's not that the old frameworks were bad at solving older problems, they just weren't particularly situated well for mobile.

**Alex Sexton:** Right. I think specifically that Carrot in this case is like what are native apps doing... It's almost entirely the generator of new ideas... How do we compete with more or less a better experience in almost every default case from the native apps and the web; by kind of the way it works it's always gonna be a little bit behind the proprietary curve because of its constraints. But yeah... I don't know. Sorry, I cut you off again.

**Mikeal Rogers:** \[00:40:20.01\] No, that's notable. I don't know what the next thing is going to do that React can't adapt itself enough to handle, and so we'll get a new framework... But I do think it's notable that one of the problems that React solved was creating this componentized model, and in order to do that, they basically had to invent subsets of the language and run everything through a compile chain in JSX... And that we actually do have language-level features that supplant most of that. With tagged template literals you can basically not have to do such a crazy compile chain now, and you have these language-level subsets, but there hasn't been a new framework that has really taken advantage of that. Everybody taking advantage of it isn't kind of the substack -- actually I'm this a bit, too...

**Alex Sexton:** Styled Components I think does a pretty good job with CSS in-line, for what it's worth.

**Mikeal Rogers:** Again though, but Styled Components feel like they're going after some newer use cases as well... Or at least they're being adopted there. I feel like a lot of even the underlying platform features that we've gotten that are gonna make this nicer are actually gonna play out once we know what the next thing that we need that deal with is. Maybe it's peer-to-peer real-time stuff, or offline... Who knows what the next set of patterns are that these are gonna work on, but that's when we'll actually see people take much more advantage of all these new features in the platform.

**Alex Sexton:** Yeah. I think it's time for a break.

**Mikeal Rogers:** Yeah, and when we come back, we'll get into the project of the week.

**Break:** \[00:41:51.00\]

**Mikeal Rogers:** And we're back. Now we're gonna get into the project of the week, Paths.js. This is a library, it's pretty sweet... It's for doing SVG paths and stuff like that. You've spent some time looking into this, Rachel, why don't you tell us a little more about it?

**Rachel White:** No, I didn't... You did! \[laughter\]

**Mikeal Rogers:** We're gonna now finger point...

**Rachel White:** Well, I mean... Yeah, I'm looking at it right now. You submitted it, you talk about it.

**Mikeal Rogers:** It's an interesting library... It has a low-level API, mid-level API and a high-level API. But even the high-level API, you need to have a bit more of an understanding about curbs, and stuff like that. It is sort of designed for people that maybe know a little bit about how SVG works, like a better library for creating charts, or a quicker library for creating charts, rather than just doing things by hand. Does anybody write SVG by hand?

**Alex Sexton:** Yeah.

**Rachel White:** Yeah!

**Mikeal Rogers:** Wow... I'm impressed.

**Rachel White:** My brain can't comprehend writing SVGs by hand, so that's pretty impressive.

**Alex Sexton:** I always start trying to write them, and as soon as I have to declare the size on the board in two different places, I'm dead. I don't know if you guys have ever done it by hand... It immediately confuses me.

**Rachel White:** \[00:44:00.20\] I mean, I could do a square, but that's about it, probably. \[laughter\]

**Mikeal Rogers:** There we go... I think something interesting about this is that it's really giving you a lot of simple code paths for declaring and doing different kinds of math. You could build a lot of great libraries for just doing interesting math operations on these primitives... So I think this could actually open up a lot more of an ecosystem on top of SVG stuff.

**Rachel White:** I mean, the mid-level API seems really accessible for people that even aren't used to writing a lot of intense SVG stuff by hand, because it defines the shapes in plain English where then you just have to supply the parameters for the points where your shapes are going to be created in the graph. I don't know if you took a look at it, but it's just allowing you to do things a lot easier.

**Mikeal Rogers:** Yeah, it seems to open up a lot more... There's plugins for D3, right?

**Rachel White:** Yeah, there's a lot.

**Mikeal Rogers:** Yeah, there's a lot of plugins, but they plug into that API; they're not abstractions on top of it where you give them different parameters and they spit out new stuff, right?

**Alex Sexton:** Yeah, I think that's pretty common, actually... D3 is so low-level that there are plenty of charts libraries that just use D3 as the underlying thing. I'm sure you can supply D3 objects and things like that, but there are whole charting libraries where you don't have to know that D3 exists, that use D3 under the covers... For what it's worth.

So this would be similar to that... You don't have to know SVG. It depends.

**Mikeal Rogers:** I think you have to know D3 in order to get a D3 plugin in. Also, I haven't seen anything that was in NPM install, this library... Or even just a library that you could take off the shelf that included D3. A lot of those chart libraries that you're talking about, I always had to include it as a script tag ahead, like \[unintelligible 00:46:04.09\] 2015 style...

**Alex Sexton:** Bower for sure. \[laughter\] Yeah, most of those libraries are so far from working, even in JS DOM. It hasn't been a huge thing. But now that everybody uses Webpack to be able to pull vendor stuff out of Node modules and into actual files, I think it's all there.

**Mikeal Rogers:** Not everybody uses Webpack. I don't use Webpack.

**Alex Sexton:** Sorry... \[laughter\] Every time...

**Mikeal Rogers:** Yeah, this is really nice, though. This seems like something that could be used together with a lot of other libraries. It's exciting.

**Alex Sexton:** Just to throw in some negativity - not specific about this library, but D3 is a big doer of my problem... I cannot read any of this...

**Rachel White:** Oh my gosh...

**Alex Sexton:** I've never been able to look at this... They're constantly using Xs and Ys, which I understand is fundamentally the thing they plot, but it just instantly looks like garbage to me, and I have no idea what's happening. I just want way more comments or a much higher level API than this. Like, "make graph"... \[laughter\] There's an old joke about makefiles, where only one makefile has ever been made, and everything else is someone copying that makefile, then modifying it to their needs...

**Mikeal Rogers:** Right.

**Alex Sexton:** And I think that's true of D3. There is no D3 visualization that didn't initially come from Mike Bostock's demo set of visualizations, modified from there. I'm not sure I could use this library; I don't do a ton of SVG, but I don't know if I could very quickly pick this up, because it kind of fundamentally means you have to know a lot about plotting and math.

**Rachel White:** \[00:48:05.26\] I don't think it's for you... \[laughter\]

**Alex Sexton:** It would be part of my job to implement some of these things, for what it's worth. The graphs is absolutely something I could get assigned at work at any given time.

**Rachel White:** I think that the people that primarily do data viz programming, it's helpful for it; it probably makes a lot more sense. I'm looking at it and a lot of it makes sense to me, but also why do you have me put in a semi-regular polygon -- oh! Those make sense...

**Alex Sexton:** I get it... I can read through it, and eventually be like "Alright, so we're doing a modulus of this; that way, the colors change, and we're doing a list of these little elements that show up next to each other, with spacers..." - I get it. It's just... Compared to all other types of programming, it is much harder for me to read. And it's not a problem with this library, it's a problem with visual programming; it's a whole different beast, that isn't natural to me, specifically... Or a lot of people who program other things.

But there are things like processing JS that kind of flip that on it. I can understand processing JS, or processing... The goal of that project was to have syntax that makes more sense for visualizations. I don't know... Interesting.

**Mikeal Rogers:** I still feel like this stuff is more understandable than any WebGL stuff that I've ever seen, even with good tools... Even with Regl and Mikola's stuff, it's like, "Okay, import this algorithm that does I have no idea what, that operates on an N-dimensional array." \[laughs\]

**Alex Sexton:** Yeah... To be clear, my concerns with this have more to do with my own inadequacies than it does with any inadequacies of these libraries. I think that I have a common inadequacy when it comes to visual graphics programming like this.

**Mikeal Rogers:** I think that this is why they invented the DOM... To give a semi-usable way to do visual programming. Even though it's such a mess, at least it doesn't have that kind of bar to get over.

**Alex Sexton:** Yeah.

**Mikeal Rogers:** So with that, I think we're gonna move on to the individual picks. Let's spend a little bit of time this week talking about that. Rachel, why don't you go first? I was checking out your pick...

**Rachel White:** Sure... My pick isn't necessarily new, but it is exciting and I feel like not enough people that do creative coding really know about it. It's called Tracery. It is a library where it allows you to write grammar objects to make generative stories in an easier way. A lot of people that do Twitter bots or art projects on websites with generative poetry, it just makes it a lot easier to swap stuff out, instead of having to write your own randomized picker for certain types of grammar.

The way that it works is you have an object with key-value pairs for each item that you are going to swap out, and the value is an array of a bunch if different strings that it could be for that object. I've seen a bunch of really cool poetry things done with this, but the main reason that I wanted to talk about Tracery is because George Buckenham (v21 on GitHub and on Twitter) made this really awesome Node.js library that also allows you to implement it into projects even easier. But he didn't stop there. After he did the Node library, he decided "Hey, wouldn't it be awesome if instead of grammar, people could swap SVG variables out?"

\[00:52:15.17\] So there's this website called cheapbotsdonequick.com, and it utilizes Tracery and allows you to automatically create your own Twitter bot. One of the most popular ones that I usually tell people about when I'm talking about this is @softlandscapes (which has a ton of followers on Twitter). What it does is every 6-8 hours it tweets out a really pretty, gradient, pastelly landscape of a gradient sky and a mountain range, and it's just really nice to look at.

If you go to the cheapbotsdonequick.com site you can see the source code, and it hurts my brain to look at. It's the Tracery JSON for the SVG that is generative. So that is my pick of the week. It's fun, and it gets people to make some stuff. That's it.

**Alex Sexton:** Do you want me to go next, Mikeal? Is that what your silence implies?

**Mikeal Rogers:** Oh my god, I was just talking, but I had it on mute. \[laughter\] No, I was just saying (like, to nobody) that this library is sort of like those "fill in the blank" stories, where...

**Rachel White:** Yeah, mad libs.

**Mikeal Rogers:** Like ahead of time, somebody's like "Oh, hey... Give me a name of somebody, give me a thing that you do to somebody else", and then you get a hilarious story at the end of it. Mad libs, that's what they're called!

**Alex Sexton:** Rachel said it earlier.

**Rachel White:** Have you played mad libs as an adult? Because now they all just turn to horribly inappropriate things.

**Alex Sexton:** I don't know... When I play, it's always just like "A butt walked into a fart, and farted out a butt." \[laughter\] Pretty much the same as when I was a kid.

**Mikeal Rogers:** Alright, so I'll get into my pick. I picked Lemonade Stand. It's a repository from Nadia Eghbal, who is the co-host with me on Request For Commits. She put together this amazing page of basically every open source funding model that you can think of... Everything from getting paid by a company to work on open source, to donation buttons, to crowdfunding, to grant funding... Literally, starting a company and getting venture capital. She has all of them listed with different case studies of different projects that have done it this way, and links to articles, and pros and cons list... It's really cool, so look for that in the show notes - Lemonade Stand.

**Alex Sexton:** \[00:54:56.11\] Cool. My pick of the week is a polyfill, so it's really a pick for the DOM... It's the Intl.js library. I think a lot of people don't use Intl, they're still using various random plugins, but I would love to see more standardization around internationalization, and formatting, and things like that. If you're unfamiliar with Intl, it's an object in most modern browsers (as well as Node now) and it can help you do number formatting, currency formatting, daytime formatting - all that kind of stuff, all in the native web platform, which is beautiful.

And the polyfill is Andy Earnshaw's polyfill; that just goes on top. It doesn't do things like collation, because it's really tough and there are some algorithms it doesn't do, but it's pretty good, because Safari obviously is still hurting us here. They don't have Intl.

**Mikeal Rogers:** Does it convert foreign exchange rate currencies?

**Alex Sexton:** No, no... Obviously not, Mikeal. \[laughter\]

**Mikeal Rogers:** Okay...

**Alex Sexton:** That's a very specific question, though... You should hire someone.

**Mikeal Rogers:** \[laughs\] I'm actually looking to go to Europe soon and I'm so happy with how strong the dollar is right now, it's really nice. I've actually never gone to Europe this cheaply before, so..

**Rachel White:** Humble brag.

**Alex Sexton:** Yeah. \[laughter\]

**Mikeal Rogers:** Really? Going to Europe is bragging? Okay...

**Rachel White:** No, the cheapness of it... \[laughter\]

**Alex Sexton:** "I've never gone to Europe this cheaply before..." \[laughter\]

**Rachel White:** I already booked my flight... I should have waited. I could have had all that extra money to spend on caviar.

**Mikeal Rogers:** \[laughs\] With that in mind, everybody, definitely go to our GitHub repository - GitHub.com/thechangelog/jsparty and give us topics. You can even suggest potential co-hosts, because like I just said, we're gonna be in Europe pretty soon, so some of us will not be available as panelists and we would love to hear the kinds of people that you'd like to have fill in for us while we're out. Also, rate the show on iTunes and subscribe to all kinds of things, subscribe to The Changelog, and thank you very much! We are out!
