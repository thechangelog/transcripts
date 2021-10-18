**Jerod Santo:** You know what time it is... It's JS Party time, and we are here for another exciting edition. Today I am joined by two of my internet friends. Amal Hussein is here. What's up, Amal?

**Amal Hussein:** Hey, everyone.

**Jerod Santo:** And we're talking testing, so you know Chris Hiller is in the house. What's up, Chris?

**Christopher Hiller:** Hello! Good morning.

**Jerod Santo:** Good afternoon, good evening... Just go ahead and shift that to your locale, and apply it as necessary. We're also joined by a special guest, Dr. Gleb Bahmutov, a Ph.D. and a JavaScript ninja. I'm gonna stop intro-ing Gleb and I'm gonna let Amal intro Gleb. Go for it, Amal.

**Amal Hussein:** Thanks for passing the mic. Jerod is basically sparing me going into a super-long soliloquy, so he's just passing on the mic...

**Jerod Santo:** Yeah.

**Amal Hussein:** ...but my love for Gleb is very real, and it runs very deep, in the sense that I've know Gleb for many years now. I kind of met him as a very wide-eyed, eager, young woman who was just very excited about writing software. I think I was at a conference where you did a talk, in 2013 or 2012, or something like that... And Gleb has just been someone who's continually pushed a lot of great packages in the open source community, who has a wonderful blog, he's constantly teaching and learning in the open, and really has pioneered end-to-end testing practices, with some of the leadership that he's had in Cypress...

\[04:19\] So Gleb is just an all-around wonderful person, and we're super-lucky to have him here today, and also we're just lucky to have you as a web community... So thank you, Dr. Bahmutov. Always a fan girl, forever and ever, so... Happy to be friends now, not just a fan.

**Gleb Bahmutov:** Thank you, Amal. Now it's a party, right?

**Jerod Santo:** That's right.

**Gleb Bahmutov:** You are way too kind to me. When you said you met me as a wide-eyed, young -- I was like, "Was I ever young, or was I ever wide-eyed?" And I'm like "Oh. She's talking about herself." \[laughter\] When I think of Amal, I was like "Oh."

**Jerod Santo:** It tipped you off when she said "young woman".

**Gleb Bahmutov:** Yeah. But then I had my doubts... \[laughs\]

**Jerod Santo:** "I'm so close on this one..."

**Gleb Bahmutov:** "Okay... You know, 50/50..."

**Jerod Santo:** \[laughs\]

**Gleb Bahmutov:** When you talk about Amal, you now talk about a former engineer of Npm, and now Indigo Agriculture... I can not picture you not being an expert, Amal, in Boston.

**Amal Hussein:** Oh, you're so sweet, you're so kind... But you know what, I can't say I was born this way... But I'll take the compliment. \[laughs\] "Maybe she was born with it", you know? Just came out of the womb, like -- "Well, actually..." \[laughter\]

**Jerod Santo:** Put that on a T-shirt.

**Gleb Bahmutov:** Actually, whenever Amal says "Well, actually...", she's Amal-splaining, you know?

**Amal Hussein:** \[laughs\] Yeah, I tend to do that a lot. I tend to do that a lot. But yeah, did you know that that variable was leaking into your global scope? \[laughs\]

**Jerod Santo:** I feel like we need a soundboard for Amal-splaining, and whenever she starts to do it, we can just ding her on it, or something like that... That'd be fun.

**Amal Hussein:** Yeah, you can. People could also collect points; we could start a whole Subreddit on this. But anyways... I'm not gonna bait -- let's not bait the internet. I'm gonna take that back. \[laughs\]

**Gleb Bahmutov:** I can only imagine Amal explaining to someone the lexical scope in JavaScript, and someone says "Ma'am, this is Wendy's", you know? \[laughter\]

**Jerod Santo:** Well played, well played. So Gleb, tell us how you got here. We were very excited to have you on the show, but why are we excited to have you on the show? Do you have any idea? Can you give us the background of why we're all so happy to have you here?

**Gleb Bahmutov:** Well, according to Amal, testing is important. And I think Chris agrees... He put so much effort into Mocha.js. And Mocha is my favorite unit testing framework. Cypress is built on top of Mocha engine. Whenever we test Cypress itself, and all the little parts of the code, we only use Mocha. We could never switch to Jest or AVA, because Mocha just works, and it's just well-designed, and it works very well.

So for me, testing was always something I was interested in. And not just testing. Testing is just one solution to a problem, and the problem is quality software. People don't come to you and say "Hey, can you test this?" No. People come to you because they say "My application is not working" or "I suspect it's not working as good as it could be. It doesn't work for some users. What can we do?" And then you start thinking about it, and testing is part of the answer. But this is a huge, huge pet peeve of mine - people think "Oh, you're writing an npm package, or some code." No, no, no. I'm trying to solve a problem. And writing code is part of the solution. Usually, it's not even the most important part. And this goes to, Amal, what you wanna talk about, which is the blog post I've written about sprint planning.

\[08:04\] A lot of times we plan features and bug fixes, and we're like "The next two weeks I'm gonna do this, that and this", and I usually say "No, for the next couple of days, what problems are we trying to solve? What is the description of a bug, and what's the underlying thing that you're struggling with?" The solution, in probably three quarters of the cases, or 75%, it's not writing software, it's updating documentation, it's making the documentation discoverable, it's writing a complete recipe, it's making a tutorial... Sometimes a solution to a problem could be just a tweet, if someone asked a question. And writing software probably is the last thing you wanna do, and writing more tests is a good thing to do, but it's not my kind of go-to thing. So when you wanna talk about testing, I'll flip the script on you, Amal, and I'll say "Let's talk about life." \[laughter\]

**Amal Hussein:** Well, it's really funny you say that, because I always see test code as a first-class citizen for a production application. I don't consider it second-class at all. I think your tests are absolutely first-class, and code without tests is incomplete code to me in a production context. I think what's also really interesting is your reference to Mocha, because I feel like so many patterns in JavaScript are echoes of each other. You look at jQuery and how its declarative API shaped so many other libraries...

**Jerod Santo:** Sure.

**Amal Hussein:** And Lodash to...

**Gleb Bahmutov:** To Cypress?

**Amal Hussein:** Yeah, like Request... You look at Request, Mikeal's -- I can never pronounce his name, actually... How do I pronounce his name?

**Jerod Santo:** It's just Mikeal. It's just spelled strange.

**Amal Hussein:** Mikeal. I always pronounce it Mikeal, but I'm like "That's not right, I'm pretty sure."

**Jerod Santo:** It's the strangest spelling of Mikeal that there is. It's just Mikeal.

**Amal Hussein:** Yeah. It's like, fun parents. Mikeal.

**Jerod Santo:** That's what he says, "My parents were hippies, or something." That's his own explanation for it.

**Amal Hussein:** \[laughs\] That's awesome. "Yeah, we're gonna spell it differently."

**Gleb Bahmutov:** But meanwhile...

**Amal Hussein:** Meanwhile, of course. Always.

**Jerod Santo:** Yeah, exactly.

**Amal Hussein:** So Request is something that also -- I feel like if it wasn't for that package, could we ever have such clean patterns, like promises, and async/await... There's just so many good patterns that we have in Node from that library... And I think for me Cypress is like jQuery meets Mocha meets Request... There's just so many echoes of other packages that have heavily influenced our community... So it's just so nice to see the continuation of standing on the shoulders of giants with every kind of push in the ecosystem.

**Jerod Santo:** Yeah. Gleb, give the listeners a Cypress 101. What's the skinny, real quick, so we're all on the same page?

**Gleb Bahmutov:** So you wanna test your application just like a real user would use your web application. You wanna open your browser, you wanna visit the URL, then you wanna find maybe a button and click on it, and maybe a pop-up appears. So that's what try to use if you were testing it manually, right? Open the URL, find a button with this label, click on it, check if a pop-up appears.

When Brian Mann created Cypress, he created an end-to-end testing tool for anything which runs in the browser, but kind of mimics the same approach, where Cypress spawns a real browser, which it finds on your system or Electron browser, visits the actual URL, finds a button, and then clicks on it. But the key point there is that we're trying to mimic how the real user uses your site.

\[11:55\] For example, when you wanna click on a button, you don't wanna just click on an HTML element that you find. You wanna first check if the button is visible. So if your page is super-tall, you wanna scroll for the button to be in the viewport, and then click on it.

And then you also don't wanna just blindly click on the button if it's disabled. So we check if the button is actionable. Not disabled, not covered by any other elements on the page... Because the real user would not be able to do that. So we work very hard to take what you would write to a user and translate it into intelligent, easy to understand, flakeless test commands. And then Cypress just executes it and shows you everything, and so on.

So we're trying to automate end-to-end testing, make it fun, make it a nice experience, and make it a first-class experience where you actually could write end-to-end tests first, before you write actual software, because it can mock everything, it can stop network calls, everything. If you don't have a backend yet, no problem; you can still write the tests, fill your frontend, make sure the test passes, and after that maybe turn to the backend and proceed. So that's our main purpose in life, if we can limit ourselves just to this.

**Christopher Hiller:** I apologize, I haven't actually had the occasion to use Cypress, because I don't normally work on the frontend... And in the past I have used Selenium type tools, and WebDriver things, and I get the impression that one of the problems that Cypress is solving is it can be really difficult to get that set up and configured correctly... And I imagine Cypress eases some of that pain. But I guess what I'm curious about then - of course, you have your test frameworky stuff, like your suites, and your tests, and your hooks, I assume... But then you have this other API that performs these actions in the browser, right?

**Gleb Bahmutov:** Right.

**Christopher Hiller:** And that API is going to be -- you have a different philosophy then, versus something like how you would use Selenium, to XPath, and all that crap... How does that differ?

**Gleb Bahmutov:** Chris, two things. One is the difficulty of setting up. If you're setting up Selenium with something, you have to install specific things, install specific drivers. You have to jump through a bunch of hoops before you can write your first test. With Cypress, you can start the same way you would start with Mocha. So with Mocha you do npm install Mocha, or yarn add Mocha, and then you're good to go. The same with Cypress. It's Npm installation - npm install Cypress, or yarn add Cypress, and that's it. There's nothing else to configure. It already comes with its Electron-based test runner, which includes an Electron JS browser... If it opens and finds other browsers on your system, it will show you the list, so you can select Firefox, or Edge, or Chrome, whatever you have there, and run both browsers.

But then it's like, what's the API for actually writing tests? And in that case, everything is chained off a global object called Cy. For example, if you wanna visit Cy, you write cy.visit, and you'd go to that URL. If you wanna find an element by selector, you would say cy.get and then CSS selector; we prefer CSS selectors, because that's what you see in DevTools. And when you run Cypress tests, a real browser pops up, you pop DevTools, just like normally you would, and when you see an element, you would just copy the selector and put it inside that Git command, and it would just find the element. And then if you wanna click, you just chain it. So you say cy.getselector for a button for example, and then .click, because every command finds the element and then passes it along to the next command.

\[16:07\] And the best thing about simplicity is that when commands are running, you have your website iFramed - and we can talk about technical things there - but on the left you see all the commands from the tests, all the things that you wrote in your spec file, like cy.visit, cy.get, cy.click... They're actually reflected in the UI. Cypress has its own UI while it's running, and you see every command, and parameters, while the test is running right next to it. So you'll see a website being loaded, and then buttons discovered, and clicked, and the application might do something in response.

And the best thing after that is when you go back and the test has finished, and you go back to those commands in the UI, when you hover or click on each one, all of a sudden you will see what application restored -- we literally take DOM snapshots every time we see a command has changed something; we restore the DOM snapshot... So you see how your application looks at that particular moment when that command executed. So you'll understand which button we clicked, because it's highlighted there.

When you click on something and something appears, we show you before and after the state of your DOM, so you know what the application has done in response to that test command. That kind of time traveling debugger and seeing everything, and being able to open DevTools, and the application running - I think it makes it special.

Right now there is a huge -- kind of like a waterfall, or a dam broke. So everyone who's anyone in computer world is writing their own end-to-end testing tools. It's not just Selenium, or WebDriver or Nightmare. Now you have Puppeteer from Google, you have Playwright from Microsoft... I'm sure Apple has some secret thing, iOS... They need a good name, something like iOS Clown, or something.

**Jerod Santo:** \[laughs\]

**Gleb Bahmutov:** You have Jest, but you can run with Puppeteer in conjunction... All those tools are great, everything is fine. There's plenty of empty room to grow in end-to-end testing. But all those tools, they run the test runner outside of the browser. So when you use let's say a Selenium command, like "get me this element by selector, and then click on it" - these are two different commands sent to the browser from an external test runner. Once they arrive - say you find an element, you arrive, you find the reference, come back, and when you send another command, like "Click on the element you've found", every time you go and try to click, at that point the element might be already gone, might be disabled, because the application is live. So by the time you try to click - well, the element is gone, or now it's read-only, or covered by something else, and the test randomly crashes, and that's why you have a flake.

So Cypress, by running things in an iFrame and having all the tests in another iFrame, but inside the same event loop, can find a button, check all those things, and if all of the things are passing, click on it. And if it's not passing, if the element is covered with something or is read-only or disabled - well, Cypress just retries, waiting, right there in the event loop, and then when it notices the button is no longer covered, it can click and everything is fine. You don't have to put waits, and all those things. And it's only possible because we execute code from the test runner, right inside the browser. So that's how we are different from everyone else in the game right now.

**Amal Hussein:** That's incredible. I don't know if Chris is quiet because his jaw is on the floor, but...

**Gleb Bahmutov:** \[laughs\]

**Amal Hussein:** \[19:59\] I'll give you a minute to pick up your jaw, Chris, but... It's just an intelligent, functional test runner that's a little bit more than Selenium, because it's not just this bot that's clicking stuff; you have all the intelligence of browser APIs, and then all this logic around knowing when you're doing something async, and when it should retry... I don't know, it's just an intelligent test runner in a box, this Cypress.

**Break:** \[20:34\]

**Jerod Santo:** So Gleb, when we talk about Cypress, it's an interesting thing, because it's both an open source project, and it's a business, it's a test runner, it's a dashboard... So there's these multiple facets to the project, and it's probably hard for people just coming to Cypress to know "What part of the project do I interact with, and what are the implications?" So did Cypress start off as a business and became open source, or did it start off open source and became a business? Tell us that story.

**Gleb Bahmutov:** Well, we're still trying to discover what we are, really, which I think we'll never finish... Yes, it's nice to be able to make a living off something you like.

**Jerod Santo:** Well said.

**Gleb Bahmutov:** That's how Cypress started. Imagine a developer, Brian Mann, who is an absolutely incredible professional... He was doing podcasts, and he was doing a book about Backbone and Rails development. And when you do a book, or a series of workshops, you get to the part where you have to explain how to do testing. So he looked around, and there was nothing easy enough to explain and not have people like "Huh? What?" So like every good developer, he decides to write his own tool for himself, so that he can test the things that he's explaining.

At that time Electron became popular, so there were some nifty technical tricks he could do to actually take the Electron browser, load the site that he wants to test, and then be able to control it in a framework-independent way.

So then he thinks "Well, this is a great tool. Can I make a living working on it?" Which is a very, very hard problem to solve. So he approaches companies, saying "Hey, I have this great tool. If you pay me a license fee, then you can use the tool to write your end-to-end tests. It's so much better than anything you're currently doing." And most of the companies tell him wholeheartedly "No." And you know why - because if a startup approaches you and says "Hey, invest time using our private tool to do something that's an integral part of your pipeline", what happens if that startup goes away, or just folds, or raises the price 10x? Well, you already invested so much time; you either pay 10x or you abandon all that effort and the knowledge and all of the things.

\[24:21\] So trying to convince someone as a startup "Hey, use my tool, and adopt it" is super-difficult. Especially with competition from other open source tools like Selenium, which are not going anywhere. So then, when I got there, after using the tool in private beta for a year, we've decided to actually do something else. We decided "Okay, we're gonna open source the whole test runner. No limitations, no light version versus full pro version - no. The whole thing. Do you wanna run your tests? You have a tool. Fork it, keep an archive around... If we fold, no problem; the documentation and everything is there." You can keep writing your tests, keep running them for as long as the universe is alive, until we all dissipate in a black hole.

So that was nice. Then adoption shot up. Because the tool is objectively a good solution to the testing problem.

**Amal Hussein:** No conflicts of interest here.

**Gleb Bahmutov:** No conflict, right? So 99% of the time I'm on a podcast - or even during Cypress workshops - I don't try to sell you anything, really. I only talk about the open source tool. But then we needed something to actually earn money, so we tried robbing banks, forgery... It's difficult to make a living, actually, especially in Atlanta and Boston. People are smart around these areas; I could never -- anyway. But we decided "Okay, you run the tests, Cypress saves you a video of a test run, it takes screenshots on the failure, you have those test results... All of these test artifacts." Well, what happens to them? If you are an individual developer or a small team, you can just store those test artifacts on your CI, on your Jenkins box, and if something fails, you can just look at those test artifacts, download the video, watch it on your machine, understand why the test failed, fix it, and so on. Absolutely fine.

But imagine you're a business, and you're running hundreds of tests. All the test artifact management, looking at videos, looking at screenshots, trying to understand which test is failing is difficult. So then we decided "Why don't we build a business storing those test artifacts and allowing to easily view them, allowing you to look at the history, allowing you to see the history of a test? Which test is flaky, which test is slow?" and so on. All the things that don't make much sense to small projects, but become hard problems in a large organization. And for large organizations - I mean, they can totally do it themselves. Some companies that use Cypress don't pay us a dime, because they made their own dashboard, where they store results and look at them. But when you do that, you have to think "Money." An hour of engineering time to just maintain the dashboard. If you spend one hour per week just maintaining or updating a dependency, or redeploying the dashboard, one hour a week four times a month - it probably is at least $150/$200. Just maintenance, not even writing it; just maintaining it.

\[28:02\] So what happens? Well, our cheapest price for storing your test artifacts and maintaining all that so you don't have to do it is $99. If you record more, it's $199, so $200, and then $300, and then there are custom plans for large enterprises.

It's a no-brainer. If you're a large organization and you want everyone to just see the test results whenever they want to, understand the test history, understand which tests are failing - no-brainer is to pay us. That's how we make money, and that's what allowed us to actually take those earnings and put them into working on open source full-time... Because what happened before was really interesting - we tried for a while to survive not by having a dashboard, but instead providing training and support, which is how many open source projects try to survive. And what happened there was really interesting - we were swamped. Every large project, we'd have so many issues, because we use it across every operating system, every CI provider, every hosting solution, every web framework, and library, you name it.

So obviously there were problems and we were trying to add features, but we could not. Half of the time we were supporting existing customers, which prevented us from having even time to actually solve a problem in the first place for everyone. So for us, moving away from private support towards a subscription model where we do test storage and dashboard for businesses allowed us to put money into solving everyone's problems in the test runner itself. So I think it's a really good balance, which we were lucky to discover.

Going back to Chris - the first page feature that actually allowed us to survive, that actually became why people wanted to pay money, was not even the test artifacts and the video; it was parallelization, running tests in parallel. So imagine you have many tests; if you run them one by one, you open the browser, you load things - it takes time. So once you have even a small set of end-to-end tests, imagine you're waiting for half an hour for all of them to finish on a single continuous integration box.

So one night I was sitting around, playing with Mocha, because I love writing wrappers around Mocha - to randomize order of tests, the load balance, or repeat the same test and figure out flakes... So I was playing with Mocha and I was thinking "How cool would it be to have a little Mocha just sitting somewhere on the internet, waiting? Already running, just waiting for tests to run." So you don't have to spin the new thing, you're just like "Hey, run this test." You're already there. "And then when you're finished, come back; I'll give you a second test to run." Kind of like a little Mocha worker. And that was a success, this nighttime experiment.

Then we decided "Well, Cypress is nothing but, literally, a Mocha engine with controlling the browser." So we've written this way of running Cypress with API, that knows all the tests; so every time Cypress finishes a spec, it goes back and says "Do you have another spec for me to run?" And the API can say "Yeah, here's this next one. When you're done, come back to me." So each CI machine doesn't just run all 30 spec files; instead, each CI machine goes to the API and says "I'm about to run 30 specs. Or should I do something else?" and now API says "wait ten machines already joining this group, for this particular test run; I really gave nine jobs, nine different spec files to nine machines. You are number ten. You run number ten spec." And we all keep this history of test runs, so we can optimize the order, so it's optimal... But it all became just like as an experiment around spinning and running tests as fast as possible. And that became a really sellable feature, because people pay for it. It makes sense for organizations with lots of spec files to run them faster, so that developers don't wait for it.

\[32:30\] And again, test artifact storage and faster test runs, all for $99 a month? Sign me up. I wanna discuss it. \[laughter\] It makes such a good business sense... And I'll tell you more. In previous organizations where I actually used Cypress, we could not use the dashboard, like external services. We were all about finance, so we kept everything in-house. We hosted our GitLab in GitLab CI, and everything. So we actually manage all this parallelization ourselves. Everytime you commit code, it would regenerate with CI files, so we'd spin our own boxes... We open-sourced it as a tool; feel free to use it... But then I was like "Why? Why would I manage that? I can just concentrate on what I'm doing best, and not manage my CI server or my parallelization or my test artifacts."

In conclusion, here's my advice to anyone trying to make a business out of open source. As an individual contributor, you can probably support your project a little bit by providing private trainings, workshops, maybe support. And a good example of that is the maintainer of Redis. He just supports one company, gets paid a lot of money, and invests in open source work. But the thing is it only works for maybe one developer at a time, for smaller projects. As soon as you have a group of people, you need something else. Not just support, but additional services.

A good example would be Ghost, the blog editing. Open source project, but they host it for you, so you don't have to do anything, and so you pay for that. So they provide extra service on top of it. If you can provide a service that makes sense for a company using your open source project, completely complementary; not light versus full version, but instead saying "If your company really loves this tool and uses it a lot, well, you will have this problem, and then we can provide a solution to that." So all the individual users, smaller plan users can still do everything for free, and yet the companies who really are a big fan, they kind of self-select by being big fans, they can come back and say "Hey, I have these 100 things now. What can I do?" and you say "Well, we came up with a solution for this particular need. We know you'll love us, because you have 1,000 tests... So for 1,000 tests, here's a thing."

So I think we are super-lucky... Because we were sitting around a table - it probably was a virtual table back in the day - and we were like "We know we have hit a home run with Cypress test runner, but we need to hit a second home run with the dashboard. What value can it provide to actually justify our existence, and paying for the whole team?" And that was really scary. We literally were like "Well, open-source it. What can we do in the meanwhile?" It wasn't like we knew what we will do with a dashboard. Parallelization came as an idea later. So it was really scary, but I'm glad we kind of got lucky.

**Amal Hussein:** \[35:58\] That's very cool, Gleb. I think Apollo, Gatsby, and other good examples like that, open source projects having services... It seems like a very good model. But I think Cypress wasn't always open source, and I think that's maybe one of your other claims to fame, was helping Cypress actually get open source. You joined the company, and then six months later... Was it the first thing that you worked on? Like "Okay, I'm now VP of engineering at Cypress, so let's work on open-sourcing Cypress." What was that journey like for you, and what were the challenges of going from closed source to open source? I can't even imagine how much work that was...

**Gleb Bahmutov:** It wasn't too bad.

**Amal Hussein:** Really? The whole being embarrassed about your code is another barrier to entry...

**Gleb Bahmutov:** That I didn't say. That was true. That was absolutely true. So when I joined -- we talked with Brian Mann for a year; we chatted about features and so on until I finally joined... And we had this idea. It was his idea to open-source; that that's the only way... He had to convince our people in the company... But we had this bunch of packages that had to be assembled into the final test runner. So the six months that I was there we were cleaning up code like crazy, bringing everything into one monorepo. Getting the CI to build not on our machine, like one-off, but actually setting up everything to be Linux CI, Windows CI... That was actually probably my first big project, was to get Cypress to actually work on Windows, because it didn't work before. Getting macOS built on CI, with code signing, and everything...

So just getting those parts all together, cleaning it up, making sure the tests happen and pass, and then releasing it... Because now all of a sudden open source brings so many eyes that look at your project differently. You cannot fool them anymore. Everyone can look at that.

And when everyone discovered that we wrote the whole thing in CoffeeScript, people were upset. There was a mob outside our doors. People were ready to burn Atlanta for a second time.

**Jerod Santo:** \[laughs\] Why were they so upset?

**Gleb Bahmutov:** CoffeeScript now gets kind of a bad rep.

**Jerod Santo:** Yeah.

**Gleb Bahmutov:** But Cypress was started six years ago when there was no JavaScript ES5, or ES6. There was nothing. JavaScript was in awful shape, and CoffeeScript was much better. And it's amazing, it's the same person who has written CoffeeScript, and Backbone, and Underscore. The top three projects probably mostly used 5-7 years ago were all one person. It's incredible. And we used all of them at Cypress. So just trying to get the code into one cohesive shape, with one good build, that was green most of the time... We still haven't solved that but it's okay... And just getting it releasable, and not be ashamed, was a huge undertaking... But we got through it.

**Amal Hussein:** I see 210 contributors to the core projects so far, and dozens and dozens of plugins and packages... So you made a good choice. You've got some wind behind your steam -- or...

**Jerod Santo:** Sails.

**Amal Hussein:** Am I saying it right? Sails? Yeah, wind behind your sails. So congratulations.

**Gleb Bahmutov:** Sails behind our sales.

**Amal Hussein:** Sails behind your sails. Yes. Not to be confused with Sails.js, but yes.

**Gleb Bahmutov:** It's a good project. I really enjoy working on it. Our contributors are awesome - internal, external... And just the reception. We have a Slack channel, awesome tweets, where people -- when a person tweets that we've made testing fun, and how much they enjoy the process, we're like "That's why. That's why we're doing it."

**Break:** \[40:11\]

**Jerod Santo:** One of the intimidating things about testing is that when people talk about it, there's lots of different kinds of tests that get thrown around - there's unit tests, there's acceptance tests, there's end-to-end tests, there's system tests, there's integration tests... A lot of these are different things, many are different words to describe the same kind of thing... So maybe a way that you can help people understand better testing, the ecosystem, Gleb, is help to describe the differnet kinds of tests. We know you describe Cypress as end-to-end testing, and that's where you drive the entire browser, frontend to back, make sure it all works exactly the way that you'd expect... But that's not the only kind of testing there is. So give the people an explainer on the different test types.

**Gleb Bahmutov:** Typically, people say that testing is like a pyramid. Imagine a pyramid like in Egypt. At the bottom you have a very wide layer of unit tests. And unit tests test the smallest piece of code. Imagine you write a function that adds two numbers; so you write a test. If I call that function with arguments 2 and 3, do I get 5? And every language under the sun has a unit testing framework, because it's so easy. Just load a piece of code, run it, check the result that you get, make sure it's what you expect. So that's why the bottom of the pyramid is usually very wide, because it's easy to just write hundreds of tests to exercise all your little components.

And when you move higher up in the pyramid and now you're trying to put units of code together. Maybe you're trying to use a todo class, but represent something and you do some other pieces of code. You're now mostly trying to see if a couple of units of code work together, how they integrate. And that's where you discover parts where the backend team and the frontend team actually did not communicate very well, and so my module doesn't work very well with another module.

Then at the very top of the pyramid you have end-to-end tests. An end-to-end test is when you're trying to run the whole thing as the end user would. For example, you open a website in your browser and you navigate and you work with your web application and you check if it updates the page correctly, if it calls the backend correctly.

\[44:00\] The top of the pyramid is usually very sharp, and that's because you're not supposed to write many end-to-end tests. I think this is obsolete thinking nowadays, because why was it hard to write end-to-end test? Well, it was hard to install the end to end test runner. It was finicky, it was flaky. The tests were flaky and didn't give you much confidence, so you actually spent more time maintaining most end-to-end tests than you would actually spend time writing your web application.

Many people say "Write many unit tests, write many integration tests, but just a few end-to-end tests, maybe just as a sanity." And when we look at what Cypress allows you to do, which is write many useful tests that have little flake, then you wanna write more end-to-end tests. You wanna make the pyramid almost like a rectangle, or maybe as a pizza slice, where you have a lot of end-to-end tests and a few unit tests. And it goes back to efficiency. So if you test a small single function that adds two numbers - yeah, the test is easy, it's fast, but it really only hits that particular function. But your web app is large, and potential sources of errors are not just logical errors in your functions; it's integration, assumptions, it's your bundler, it's your transpiler, it's your code deployment, it's your backend server, it's your DNS configuration, it's all the environment variables that you have to set correctly in the backend, in the frontend, and all the little internet stuff in between... And the modern browser, which is an awfully, awfully complicated machine, where your assumptions that it will execute this add the two numbers together completely is different from what the end thing will do.

So when you think about what's the effectiveness, or how much do you actually exercise? How many potential errors can you find - well, the unit tests can find you a few logical errors, which is great. I write unit tests for that all the time. But all possible sources of error are discovered by end-to-end tests. If you can test the site you just deployed and go through the main user story, just like a human user would do later on - if that works well, the chances are when the real user goes through the same thing, it will be successful.

So for us, the end-to-end test should be the primary focus. So if we kind of flip the pyramid and we make the top wider and wider, and we will write more end-to-end tests, because they're effective and we make it almost like a pizza slice, where we write more end-to-end tests, or if we start with end-to-end tests, it makes sense.

And what happens recently? Well, a functional tester or test runner like Cypress - it finds a text, clicks on the button, does all those thing, but it only verifies that the application works. It doesn't verify that the applications looks good. And we're all humans, we like pretty things, so we like styles. Some people even add CSS to their apps. I don't know why, but it's crazy. So they want -- once they add CSS and they do the styling, they want to make sure the app looks the same, and they don't accidentally break it. Amal, do you wanna interject something?

**Amal Hussein:** \[47:46\] Well, I was just gonna say one of the most popular websites in the world - well, two - have really gone very CSS-light. I would say Craigslist and Wikipedia. \[laughter\] There's something about basic web, I've gotta say; as much as I am a huge fan of CSS and beautiful design, my brain is equally happy when I see basic websites that are unconventional.

**Gleb Bahmutov:** Absolutely.

**Amal Hussein:** ...and very fast. It's just like what the web was designed to do, for better or worse. Tim Berners-Lee was looking to share some links and text, and that's what the web is quite frankly really good at. It kind of sucks at everything else. The way we manage designating websites and creating these visual designs - if you look at other programming paradigms, whether it's game engines, the way they manage styling is so much better than what we have to work with on the web... Because we're just making these three things kind of work together, and they're not necessarily very intuitive... Sorry, I had to go on a tangent there. I'm sorry. \[laughs\]

**Christopher Hiller:** Gleb, speaking of CSS... Because Cypress runs in a browser, and it eliminates a category of test flake - that's cool. So in the past, when we've written end-to-end tests in the browser, other than the test flake, what we have found is these end-to-end tests are extremely brittle because of CSS, because of the structure of the DOM, and your HTML tags, and all that stuff. And if you have those end-to-end tests that assume the structure looks a certain way, or if you're using styles that you assume are going to always be there, and some designer comes along and changes things - well, your tests end up breaking. So do you have any advice, or is there something Cypress does to avoid some of that churn in these end-to-end tests?

**Gleb Bahmutov:** Absolutely, Chris. We at Cypress put a lot of thought in our documentation. We're trying to explain how Cypress commands work in excruciating details, and we also have a bunch of best practices for writing end-to-end tests. And one of the practices is how do you select the elements that you wanna interact from your tests? And we say "Well, don't use CSS styles, because they're used for styling, and can change", like you said. Don't use deep-nested selectors, because that assumes the whole structure will never change. So we advocate for using specific data attributes, like data test ID, for selecting the element, so that its purpose is clear and you don't accidentally change it. You only change it when you want to change it for real.

Another thing that is really popular nowadays is a family of libraries called testing library, where we say "Don't test the implementation, test the interface." It allows you, for example, to select elements by label, which is so useful inside of forums. Or by ARIA role. So where you don't actually depend on the style or the structure, but instead you tie your task to the elements by their role. And that's a lot less brittle.

Let me go a little bit to the styling of things. If we select elements, and you work with them, and you check the number of items, the CSS can still change. And then the application will look like crap, and users will be unhappy, and nobody is gonna buy anything from your website. Cypress is just a functional test runner; it doesn't care about CSS. And it's very hard to write all the assertions saying "The color of this element should be blue, and the border radius should be 2...", it's impossible.

\[52:02\] So instead, what people do - because it's a real browser, you can take and generate a screenshot of your page, or a part of it, and then you can do visual testing. So you save a screenshot, and it becomes like a baseline or a master image, and the next time you run the test, you take another screenshot and then you compare it pixel by pixel with your baseline imagine. And you store those baseline images with your source code, in your repository.

Computers are really good at comparing images pixel by pixel, and they'll tell you "Oh, it used to be blue..." The computer doesn't have a concept of blue, but it says "It used to be this. Now it's a different color. Here's where it changed" And then you can say "Did they mean to change the CSS here? Why is it no longer blue and now red?"

Visual testing to me is such an effective tool, paired with a full end-to-end test, where you can literally load the application, take a screenshot, and now you know it will never change accidentally. Do something where the application reacts, changes the layout, new DOM elements appear. Then you take another screenshot. Boom. Now you tie it so close, any visual change, any CSS, SVG, anything will change with pixels, and you'll know that you accidentally broke the styling, and you'll know that accidentally you made Craigslist look like Reddit... And you're like "No, no, no. Revert it, revert it, revert it."

So to me, the most useful pyramid right now is a pyramid that's wholly end-to-end, functional and visual tests. That's it. And then, I can track code coverage instrumenting my application code; the end-to-end tests that will go through the whole flow, like a real user, are so effective at code coverage.

People say "Well, hit 80% of your code (coverage)." And I usually say "Well, because end-to-end tests exercise the whole application, a single test can cover most of it, if it goes through the whole user story." And then you look at the lines not covered, and you write end-to-end tests for those edge cases. And if you cannot reach both lines, because there could be edge cases that are unreachable through a well-designed interface, then you write end-to-end tests, API tests and component tests, and hit those lines, so you know that those components and unit tests of code work as well. But it becomes a pyramid of end-to-end tests, little triangles for other types of tests, and to me it looks like a crab, because it's a big kind of helmet shell, and little armored legs under it... But it's all about end-to-end tests, in my opinion.

**Amal Hussein:** Yeah, I wanna shout out that this is a strategy we've actually adopted on our team as well. We're working on trying to get it adopted more widely, but essentially, I wanna kind of default to using end-to-end tests for all of my happy paths, and some error paths. Error paths specifically that have visual feedback. And then using unit tests to cover the edge cases, since we really don't need to write an end-to-end test for every single edge case... Especially because with end-to-end tests you're not gonna get anything more than 100% coverage on a single path, so if you're writing multiple tests that cover the same path, it's a little bit wasteful, especially like processing time...

So it's a very good kind of shift to actually write end-to-end tests as your default, and then unit tests for your edge cases, and error handling, things that don't make sense in an end-to-end test... And using the coverage reports, you can actually look to see what are you covered for with your end-to-end tests, what are you covered for with your unit tests, and also we have a combined report of end-to-end tests and unit tests, using some plugins from Cypress. So that's nice. You can see the combined number as well.

\[56:10\] So it's just a really great shift, and I've changed my mind on this, because Gleb knows I was Miss Unit Test 3,000... \[laughter\] I mean, I'm still very pro unit testing, but for UI, I really think that's the way to go. And server code is a different story, but I think unit tests are really still very useful in many ways.

**Jerod Santo:** Yeah. I used to be a "unit test all the things", and now I'm more like a "unit test the things that are scary or strange as I'm writing them", and I'm like "This is kind of weird." And that usually helps me to refactor it a little bit and make it less scary or strange, at which point the tests become somewhat obsolete, but they've served their purpose... But I've never done end-to-end testing in 100% capacity. Gleb, does Cypress provide you that code coverage then via the dashboard, or how are you getting the coverage out when you're running Cypress as a test runner?

**Gleb Bahmutov:** So when you run Cypress, it's up to you to instrument your application code, and we give examples for everything. Pretty much it comes down to inserting a Babel Istanbul plugin in your bundling pipeline, and then your application code will be instrumented. I've written a Cypress code coverage plugin, so when you run Cypress, you just include that plugin with your test setup, and our plugin takes care of everything. It will collect all the code coverage information, it will merge everything into one report, and you get reports in a variety of formats - static reports, HTML reports - where you can see every code line.

You can also send the reports we generate to any third-party code coverage service, like Codecov, Coveralls... And then most services usually comment on your pull request saying "Code coverage dropped, or remained the same, or increased." Amal, you call yourself a senior engineer and you're not hitting 200% code coverage? It's a shame.

**Amal Hussein:** Yeah.

**Jerod Santo:** It's a shame.

**Gleb Bahmutov:** 200% is the new --

**Amal Hussein:** I mean, it's a shame that -- yeah, I haven't joined the world of over-optimizing...

**Jerod Santo:** The real senior engineers go for 110% coverage. You've gotta give it 110%.

**Amal Hussein:** Yeah, 110%. 310%, Jerod. That's our language as software engineers. People love to over-engineer, and I'm guilty of it, we're all guilty. It's like a biased that we have to constantly fight, right? So Gleb, before we close this show out, I'm curious -- UI testing has had a very checkered path; we've shifted towards using components, and you have things like JSX, and even in the Angular world / Vue world they're all a little different... I feel like we've never had a good story for unit testing. I feel like things for me kind of peaked with Enzyme, and then now you have this React testing library which I would say has some good principles, but really misses the mark for me on some things, like for example server-side rendering support...

There's a lot of things that you're not testing by just testing the React output. Just a lot of interaction with state and props, which is what I'm more actually interested in testing. I'm not interested in testing React, I'm interested in testing my implementation and contracts with React. You know, it's problematic, so I'm just curious - can Cypress be used to just test components? Can we use Cypress to actually pass on this awesome responsibility of "unit testing" our components?

**Gleb Bahmutov:** \[59:56\] Amal, in the world of softballs, this is the best pitched softball. \[laughter\] But thank you. Thank you for bringing it up. Here's the thing... We think with Cypress for end-to-end test know that the technical problem was not like Selenium not being able to control the browser, but the test being outside of where we're running leading to flake. When I was looking at component tests two years ago, and I was looking at Cypress and I was like "Well, why are we even using Jest or Mocha or Ava with Enzyme, but we're rendering components in a terminal in Node.js, with JSDom... That's not a real browser.

**Amal Hussein:** That's exactly -- that's one of my problems with the React testing library. Not just the React testing library, but in general, testing UI inside of Node. You're not actually testing it for reals. There are differences.

**Gleb Bahmutov:** Exactly.

**Amal Hussein:** So yeah. I mean Fred Schott from Pika has also got some interesting work in this space as well... But yeah.

**Gleb Bahmutov:** When I noticed that, I was like, "Gleb, you've got it." The components are not pieces of code, are not just markup. The components - let's say React, Vue, Angular, you name it - are mini web applications. Because you can literally do "React render component" and just have your component \[unintelligible 01:01:30.13\]

So when I thought about that, the natural thing was to write a little adapter. Right now, Cypress just visits the URL. It doesn't care about your framework, it doesn't care about anything. Just the DOM, and runs it. So with frameworks, I just said "Okay, why don't I write a React adapter?" so I called it the Cypress React Unit Test, because it's a component test; literally, unit-testing a component.

So you load that, and instead of Enzyme or a React Testing Library mount, that mount actually takes that component and runs it as a real mini web application inside of a browser with Cypress controls, and after that you can use all Cypress commands.

So then you see a component, how it looks in real life, it renders all its children components and interacts with it the same way as it would do in a normal thing. So literally, if your app is a tree of components, you can take any node in that tree, render it by itself, test it fully, then go to the next level up the tree, set up your data, run the component and interact with it using normal Cypress commands. So if you know, Cypress, you can do component testing. And I'm happy to report that this will become a core feature of Cypress. It's already under experimental flag, but we'll turn off the experimental flag pretty soon; we're just finishing some bundling things, because now we have to bundle the components correctly. It's an unbelievable experience... So I'm so happy that -- I proposed this idea 2,5 years ago, and finally we made it all the way through... So we'll start with official support for Vue and React, but there are adaptors that are written for every major framework, and some minor ones.

When you see a component, all the styles render. If you compare it with Jest, where for example if a component has pointerNonStyle, Jest happily clicks on it, because it's not a real browser in Jest DOM. But the real browser will not let you click. So you see all that complexity right there.

**Amal Hussein:** Yeah. I mean, this is gonna be a game-changer, and you're gonna have to come back on the show and we're gonna have to talk about this... Because this is like a game-changer for UI testing.

I also think it's very in line with component-driven design, so you should in theory be able to render your components in Storybook if they're visual, if they're rendering components...

**Gleb Bahmutov:** Yes.

**Amal Hussein:** And using that implementation of component-driven design. And by the way, we'll link what component-driven design is in the show notes, as well as maybe Gleb can you give us the GitHub flag, so people can--

**Gleb Bahmutov:** I'll give you all the links.

**Amal Hussein:** Yeah, we'll get lots of links, so people can play around with this before it launches... Component-driven design is nice, because you make sure that your stuff works in isolation, you make sure that your component is actually a component. It has inputs and outputs, and it's not dependent on the wider app. You can obviously set the context, but... Anyways. So I think this is a great arc for frontend development, and I'm just so happy that -- yeah, what a great time to be alive.

**Jerod Santo:** There you go.

**Amal Hussein:** We can end it on that high note. \[laughter\]

**Gleb Bahmutov:** There's no JavaScript fatigue, there's only JavaScript party!

**Jerod Santo:** That's right.

**Amal Hussein:** Exactly! This is very exciting. Anyways... So where can people find you on the internet, Gleb? How can they connect with you?

**Gleb Bahmutov:** The easiest probably is Gleb.dev. I got this top-level domain as soon as it came out, gleb.dev. Or Bahmutov. Just search for testing and you'll find me.

**Jerod Santo:** There you go.

**Amal Hussein:** Yeah.

**Jerod Santo:** Well, we were happy to have you on the show today, Gleb. So much interesting stuff. Very cool things coming very soon for the JavaScript party. You know we're always down for that. Listeners, all the links to all the things are in your show notes, so you know where to go for the easy clickings.

That's our show, we'll talk to you again next week!

**Outro:** \[01:05:40.23\]

**Christopher Hiller:** Karma... I believe how it works is there is a server and it acts as a reporter...

**Jerod Santo:** Amal, you might be broken. Your face is broken.

**Christopher Hiller:** So it bundles all this crap up and sends all the code to the browser. Your tests run in a browser. And then I think there's like a web socket that communicates back to the server, and the server dumps the report, the rest result into your console. So Karma does run stuff in a browser, but I don't really see people trying to use Karma for these types of -- well, that's not true. There's the Google one, Protractor.

**Amal Hussein:** Protractor.

**Christopher Hiller:** Right.

**Amal Hussein:** That was popularized with Angular, I think.

**Christopher Hiller:** Right, and I guess it fell out of favor; maybe it didn't work very well, or something; or maybe it was too Angular-specific... But that seemed like it's similar to Cypress in that all the tests, all the code run in a browser... I tried to use Protractor and the API was not so fun...

**Gleb Bahmutov:** I don't know, Chris. It might be. I don't remember. I used Karma a long time ago, back when it was called Testacular...

**Jerod Santo:** Oh yeah, I remember that.

**Gleb Bahmutov:** Such a fortunate name.

**Amal Hussein:** Not the best name...

**Jerod Santo:** They had to change that name, yeah...

**Amal Hussein:** Testicular is what I keep thinking about.

**Jerod Santo:** That's what everybody thought of. Exactly.

**Amal Hussein:** My goodness.

**Jerod Santo:** Well, I think they were going for Spectacular. Test + Spectacular. But they just missed the mark really badly...

**Gleb Bahmutov:** Yes. Well, none of them were a native English speaker, so maybe that was very funny...

**Jerod Santo:** That plays a difference, yeah. Although I wouldn't put it past some of us Americans to make the exact same mistake, even with working knowledge of the language...

**Amal Hussein:** Do you wanna hear something funny? I use two words incorrectly all the time. Well, I'm sure I use way more than two, but two that I have recently been informed of by people... I use the word "flushed out" a lot, but it's really "fleshed out."

**Jerod Santo:** Flesh out, versus flush out, right.

**Amal Hussein:** Yeah. E versus U. And then co-lace, versus...

**Jerod Santo:** Co-lace?

**Amal Hussein:** There's a spelling difference...

**Jerod Santo:** I didn't know that word. Co-lace?

**Amal Hussein:** Co-lace, yeah. Like bring together.

**Jerod Santo:** Coalesce.

**Amal Hussein:** Coalesce, yes. Okay, I'm gonna stop.

**Jerod Santo:** What's the real word? I'm trying to figure out what the real word is.

**Amal Hussein:** I think it's "Can we collate?"

**Jerod Santo:** Oh, collate.

**Amal Hussein:** What I'm trying to say is gather.

**Jerod Santo:** Right.

**Amal Hussein:** And I use the wrong spelling.

**Jerod Santo:** I think coalesce is kind of that...

**Amal Hussein:** Is it?

**Jerod Santo:** Or maybe that's slightly to modify or to smooth into something else. Let me look that up, coalesce. Anybody know what that word means? It means -- yeah, come together to form one mass or whole. So that's coalesce.

**Amal Hussein:** Yeah, coalesce... But I use co-lace -- I use collate when I mean coalesce.

**Jerod Santo:** Collate means collect and combine in proper order.

**Amal Hussein:** Okay, so maybe they both should just be combined as one, because they mean very similar things.

**Gleb Bahmutov:** Exactly. We need good dictionary pruning.

**Jerod Santo:** Some pruning, yeah.

**Amal Hussein:** Yeah, we do. Maybe we could throw it out; any word that hasn't been used on Twitter in the past 200 days is in English at this point.

**Jerod Santo:** I don't know if I'd use Twitter as like the reference of the world zeitgeist... But I understand the sentiment, but I think it's a flawed implementation if you're basing everything off Twitter...

**Amal Hussein:** Well, I think we're gonna start communicating in GIFs and emojis and grunts pretty soon.

**Jerod Santo:** Start?! You're describing my prime communication mechanism. Noff!

**Amal Hussein:** You're like "Um, hello?!" \[laughs\]
